const resgistration = require('../modal/registration1');

const logindata = async(req , res) => {
    try {
        
        var data = await resgistration.find({"email": req.body.gmail })


        if (data.length != 0) {
            if (data[0].passwords == req.body.passwords) {
                res.status(200).json({
                    status: " Success",
                    data
                })
            } else {
                res.status(200).json({
                    status: "Passwords Is Not Match",
                    
                })
            }
        } else {
            res.status(200).json({
                status: "Gmail Is Not Match",
               
            })
        }
    } catch(error){
        res.status(200).json({
            status: "error",
            data
        })
    }
}

module.exports = {
    logindata
}