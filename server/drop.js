import db from './src/models/index.js'

db.sequelize.sync({ force: true })