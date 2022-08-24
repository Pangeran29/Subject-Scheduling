import { Sequelize } from "sequelize";
import db from "../config/database.mjs";

// data type sequelize
const { DataTypes } = Sequelize;

// schema for subjects
export const subjects_table = db.define("subjects", {
    subject: DataTypes.STRING,
    subject_code: DataTypes.STRING,
    schedule: DataTypes.STRING,
    scheduleTime: DataTypes.STRING
}, {
    freezeTableName:true
});

//subjects_table.sync()
