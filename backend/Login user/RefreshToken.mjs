import users from "../models/user_models.mjs";
import jwt from "jsonwebtoken"

export const RefreshToken = async (req, res) => {

    try {
        //check and compare refresh token user and refresh value cookie
        const refresh_token = req.cookies.refToken
        if (!refresh_token) return res.sendStatus(401)

        //check and compare refresh token user and refresh value db
        const user = await users.findAll({
            where: {
                refreshToken: refresh_token
            }
        })
        if (!user[0]) return res.sendStatus(403)

        //jwt.verify
        jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET, (error, decoded) => {
            if (error) return res.sendStatus(403)

            const userId = user[0].id
            const userName = user[0].username
            const name = user[0].name

            // jwt.sign
            const accessToken = jwt.sign({ userId, userName, name }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "15s"
            })

            res.json({ accessToken })
        })

    } catch (error) {
        console.log(error)
    }

}