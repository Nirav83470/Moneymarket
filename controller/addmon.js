const addmoney = require('../modal/addmoney');

const moneyadd = async (req , res) => {

    var data_a = await addmoney.create(req.body)

    res.status(200).json({
        status: "Your Data Submit",
        data_a
    })
}

module.exports = {
    moneyadd
}