import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.DATABASE_DIALECT)
const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DATABASE_DIALECT
  }
)

export default db
