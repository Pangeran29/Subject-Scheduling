import { subjects_table } from "../models/table subjects.mjs";

// View all
export const showSubjects = async (req, res) => {
    try {
        const response = await subjects_table.findAll();
        res
            .status(200)
            .json(response);
    } catch (error) {
        console.log(error)
    }
}

// view by id
export const getSubjectsById = async (req, res) => {
    try {
        const response = await subjects_table.findOne({
            where: {
                id: req.params.id
            }
        })
        res
            .status(200)
            .json(response);
    } catch (error) {
        console.log(error)
    }
}

// view by schedule
export const viewbyDay = async (req, res) => {
    try {
        const response = await subjects_table.findAll({
            where: {
                schedule: req.params.schedule
            }
        })
        res
            .status(200)
            .json(response);
    } catch (error) {
        console.log(error)
    }
}

// create new 
export const createSubject = async (req, res) => {
    try {
        await subjects_table.create(req.body);
        res
            .status(201)
            .json({ msg: "created new user " });
    } catch (error) {
        console.log(error)
    }
}

// update
export const updateSubject = async (req, res) => {
    try {
        const { subject, subject_code, schedule, scheduleTime } = req.body

        const user = await subjects_table.findAll({
            where: {
                schedule: req.params.day
            }
        })

        if (scheduleTime != user[0].scheduleTime) {
            if (scheduleTime != user[1].scheduleTime) {
                if (scheduleTime != user[2].scheduleTime) {
                    await subjects_table.update(
                        {
                            subject: subject,
                            subject_code: subject_code,
                            schedule: schedule,
                            scheduleTime: scheduleTime
                        }, {
                        where: {
                            id: req.params.id
                        }
                    })
                    return res
                        .status(200)
                        .json({ msg: "subject updated" });
                } else {
                    return res
                        .status(400)
                        .json({ msg: "already taken" })
                }
            } else {
                return res
                    .status(400)
                    .json({ msg: "already taken" })
            }
        } else {
            return res
                .status(400)
                .json({ msg: "already taken" })
        }


    } catch (error) {
        console.log(error);
    }
}

// delete 
export const deletesubjects = async (req, res) => {
    try {
        await subjects_table.destroy({
            where: {
                id: req.params.id
            }
        })
        res
            .status(200)
            .json({ msg: "success deleted" });
    } catch (error) {
        console.log(error);
    }
}

// cancle by day
export const cancleAll = async (req, res) => {
    try {

        await subjects_table.update(
            { scheduleTime: null }, {
            where: {
                schedule: req.params.day
            }
        })

        res
            .status(200)
            .json({ msg: "cenceled jadwal" })
    } catch (error) {
        console.log(error)
    }
}

// cancle by subject
export const cancleOne = async (req, res) => {
    try {


        await subjects_table.update(
            { scheduleTime: null }, {
            where: {
                id: req.params.id,
                schedule: req.params.day
            }
        })
        res
            .status(200)
            .json({ msg: "cenceled jadwal" })
    } catch (error) {
        console.log(error)
    }
}