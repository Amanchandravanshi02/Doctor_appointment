import db from '../utils/database.js'
import { DataTypes } from 'sequelize'
const Doctor = db.define('Doctor', {
    doctorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    salary: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'doctors',
    timestamps: false
})
 export default Doctor
