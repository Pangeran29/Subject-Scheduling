import { Sequelize } from "sequelize";
import db from "../config/database.mjs";

const { DataTypes } = Sequelize;

export const tableTime = db.define("Times", {
    times: DataTypes.STRING
}, {
    freezeTableName:true
})

//tableTime.sync()