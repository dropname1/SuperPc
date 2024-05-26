import moment from "moment"

export default (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} ${moment().format()}`)
    next()
}
