import { tableTime } from "../models/table time.js"

export const showTime = async (req, res) => {
    try {
        const response = await tableTime.findAll()
        res
            .status(200)
            .json(response)
    } catch (error) {
        console, log(error)
    }
}

export const addTime = async (req, res) => {
    try {
        await tableTime.create(req.body)
        res
            .status(200)
            .json({ msg: "added new day" })
    } catch (error) {
        console.log(error)
    }
}
