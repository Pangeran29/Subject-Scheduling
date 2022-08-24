import { Sequelize } from "sequelize";
import db from "../config/database.mjs";

const { DataTypes } = Sequelize;

export const tableDay = db.define("days", {
    days: DataTypes.STRING
}, {
    freezeTableName:true
})

//tableDay.sync()