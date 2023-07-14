const resgistration = require('../modal/registration1');

const resdata = async (req, res) => {
    try {
        var addlogin = await resgistration.create(req.body)

        res.status(200).json({
            status: "Success",
            addlogin
        })
    } catch (error) {
        res.status(401).json({
            status: "error",
            addlogin
        })
    }
}

module.exports = {
    resdata
}