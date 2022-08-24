import { Sequelize } from "sequelize";
import db from "../config/database.mjs";

// data type sequelize
const { DataTypes } = Sequelize;

// schema for login and register
const users = db.define("users", {
    name : {
        type : DataTypes.STRING
    },
    nip : {
        type : DataTypes.STRING
    },
    matkul : {
        type : DataTypes.STRING
    },
    username : {
        type : DataTypes.STRING
    },
    password : {
        type : DataTypes.STRING
    },
    refreshToken : {
        type : DataTypes.TEXT
    }
}, {
    freezeTableName:true,
})

export default users;