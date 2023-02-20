const Ads = require('../models/Ads');

const createAd = async (req, res) => {
    if(!req.body.name || !req.body.author || !req.body.description){
        res.status(404).send("Not found");
    }   

    const ad = await Ads.create({
        name: req.body.name,
        author: req.body.author,
        description: req.body.description
    })
    res.status(200).json(ad)

}

const checkAds = async(req,res)=> {
    const ad = await Ads.find().populate("author")
    res.status(200).json(ad)
}


const updateAd = async(req,res)=>{
    const id = req.params.id
    const ad = await Ads.findById(id);

    ad.name = req.body.name,
    ad.author = req.body.author,
    ad.description = req.body.description

    const result = await ad.save()
    res.status(200).json(result)
}

const deleteAd = async(req,res)=>{

    const id = req.params.id
    const ad = await Ads.deleteOne({_id: id})

    res.status(200).json(ad)
}


module.exports = {
    createAd,
    checkAds,
    updateAd,
    deleteAd
}