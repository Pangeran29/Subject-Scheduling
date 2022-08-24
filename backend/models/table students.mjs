import { Sequelize } from "sequelize";
import db from "../config/database.mjs";

const { DataTypes } = Sequelize;

export const students_table = db.define("students", {
    student: DataTypes.STRING,
    subject: DataTypes.STRING,
    subjectCode: DataTypes.STRING,
}, {
    freezeTableName:true
});
