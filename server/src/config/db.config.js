const HOST = "localhost"
const USER = "postgres"
const PASSWORD = ""
const DB = "superpc"
const dialect = "postgres"
const pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
}

export {
    HOST,
    USER,
    PASSWORD,
    DB,
    dialect,
    pool
}