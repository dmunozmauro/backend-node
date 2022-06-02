import { database as dbConfig } from '../config'
import { Sequelize } from 'sequelize'

export let sequelize
sequelize = new Sequelize(dbConfig)
export { Sequelize }

export default { sequelize, Sequelize }