const handlerNotFound = (req, res) => {
    res.status(200).json({ ok: false, error: "Route not found" })
}
module.exports = { handlerNotFound }