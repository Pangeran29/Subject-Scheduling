import { students_table } from "../models/table students.mjs"

// get students
export const getStudents = async (req, res) => {
    try {
        const response = await students_table.findAll();
        res
            .status(200)
            .json(response);
    } catch (error) {
        console.log(error)
    }
}

// get studetns by id
export const getStudentsbyId = async (req, res) => {
    try {
        const response = await students_table.findOne({
            where: {
                id: req.params.id
            }
        });
        res
            .status(200)
            .json(response);
    } catch (error) {
        console.log(error)
    }
}


// create student
export const createStudetns = async (req, res) => {
    try {
        await students_table.create(req.body);
        res
            .status(201)
            .json({ msg: "creted new students" });
    } catch (error) {
        console.log(error)
    }
}

// edit student
export const editStudent = async (req, res) => {
    try {
        await students_table.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res
            .status(200)
            .json({ msg: "student updated" })
    } catch (error) {
        console.log(error)
    }
}

export const deleteStudent = async (req, res) => {
    try {
        await students_table.destroy({
            where: {
                id: req.params.id
            }
        })
        res
            .status(200)
            .json({ msg: "deleted student" })
    } catch (error) {

    }
}