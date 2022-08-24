import { tableDay } from "../models/table day.js";

export const showDay = async (req, res) => {
    try {
        const response = await tableDay.findAll()
        res
            .status(200)
            .json(response)
    } catch (error) {
        console, log(error)
    }
}

export const addDay = async (req, res) => {
    try {
        await tableDay.create(req.body)
        res
            .status(200)
            .json({ msg: "added new day" })
    } catch (error) {
        console.log(error)
    }
}
