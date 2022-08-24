import users from "../models/user_models.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

//get all users data
export const getUsers = async (req, res) => {
    try {
        const Users = await users.findAll({
            attributes: ["id", "username", "name", "matkul", "nip"]
        });
        res.json(Users);
    } catch (error) {
        console.log(error);
    }
}

// registration
export const registration = async (req, res) => {
    const { name, nip, matkul, username, password, confPassword } = req.body;

    if (nip.length != 16) {
        return res
            .status(400)
            .json({ msg: "NIP does not match" })
    }

    if (password.length != 8) {
        return res
            .status(400)
            .json({ msg: "password's min length is 8" })
    }

    if (password.search(/^(?=.*[A-Z]).*$/)) {
        return res
            .status(400)
            .json({ msg: "must constains atleast one uppercase" })
    }
    
    if (password.search(/^(?=.*[0-9]).*$/)) {
        return res
            .status(400)
            .json({ msg: "must constains atleast one number" })
    }
    
    if (password.search(/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/)) {
        return res
            .status(400)
            .json({ msg: "must constains atleast one special character" })
    }

    if (password !== confPassword) {
        return res
            .status(400)
            .json({ msg: "Password and confirm password does not match" })
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        await users.create({
            name: name,
            nip: nip,
            matkul: matkul,
            username: username,
            password: hashPassword
        })
        res
            .json({ msg: "registration successed, login next" })
    } catch (error) {
        console.log(error)
    }
}


// login after we had regist
export const Login = async (req, res) => {

    try {
        const user = await users.findAll({
            where: {
                username: req.body.username
            }
        })

        const match = await bcrypt.compare(req.body.password, user[0].password)
        if (!match) {
            return res
                .status(403)
                .json({ msg: "wrong password" })
        }

        // making refresh token adn access token
        const id = user[0].id
        const name = user[0].name
        const username = user[0].username
        const accToken = jwt.sign(
            { id, username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "30s" }
        )

        const refToken = jwt.sign(
            { id, username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1d" }
        )

        // adding reftoken to db 
        await users.update(
            { refreshToken: refToken },
            {
                where: {
                    id: id
                }
            }
        )

        // the we need to set up http only cookie that user have (in this cookie pw doesn't save)
        res
            .cookie("refToken", refToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            })

        //then after username and pw match client can reach dashboard api, we send back hello and access token to client
        res
            .json({ accessToken: accToken, msg: `welcome to the dashboard mr/mrs ${name}` })

    } catch (error) {
        res
            .status(403)
            .json({ msg: "invalid username" })
    }
};

// Logout
export const Logout = async (req, res) => {

    //check and compare refresh token user and refresh value cookie
    const refresh_token = req.cookies.refToken
    if (!refresh_token) return res.sendStatus(204)

    //check and compare refresh token user and refresh value db
    const user = await users.findAll({
        where: {
            refreshToken: refresh_token
        }
    })
    if (!user[0]) return res.sendStatus(204)

    //
    const id = user[0].id
    await users.update({ refreshToken: null }, {
        where: {
            id: id
        }
    })

    //
    res.clearCookie("refToken")
    return res
        .status(200)
        .json({ msg: "success logout" })
}