const customHeader= (req, res, next) => {
    try {
        const apikey = req.headers.api_key;
        if(apikey==="nicolas"){
            next()
        }else {
            res.status(403),
            res.send({error:"api_key no es correcta"})
        }
    } catch (error) {
        res.status(403)
        res.send({error:"algo salio mal"})
    }
    // console.log(req.headers)
    // next()

}
module.exports = {customHeader};