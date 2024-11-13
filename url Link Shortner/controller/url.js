const urluser=require("../model/url");

async function storeUrl(req,res){
    const data=req.body.redirectUrl;
    function generateShortLink() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let shortLink = '';
        for (let i = 0; i < 8; i++) {
            shortLink += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return shortLink;
    }
    const urldata=generateShortLink();
    try {
    const urlCreate=await urluser.create({
        redirectUrl:data,
        shortId:urldata
    })
    return res.status(200).json(urlCreate);
    } catch (error) {
        return res.status(500).json({msg:"Internal Server Error"})
    }
}

module.exports={
    storeUrl,
}