const Pool = require('pg').Pool;
const cloudinary = require('cloudinary');
const response = require('../base/response');
const jwt = require('jsonwebtoken');
const Gallery = require('./models/gallery');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

cloudinary.config({ 
    cloud_name: 'dintuvgah', 
    api_key: '956817523513636', 
    api_secret: 'Nrb2f262VY8W9lDEp_qZQ5HfFDU'
});

async function queryImages (req, res, next) {
    let token = req.headers['authorization'].replace(/^JWT\s/, '');
    jwt.verify(token, 'nodeauthsecret', function(error, data){
        if (!error){
            let tag = req.query.tag;
            if (tag == null){
                return
            }
            Gallery.findAll({
                where: { tag: { [Op.iLike]: `%${tag}%` } }
            })
            .then(images =>  res.status(200).json(images))
            .catch(error => console.log(error));
        }
    });
}

async function uploadToDB (url, tag) {
    Gallery.create({
        tag: tag,
        url: url
    })
    .then(image => console.log(image))
    .catch(error => console.log(errpor));
}

async function uploadImages (req, res, next) {
    let values = Object.values(req.files);
    let promises = values.map(image => cloudinary.uploader.upload(image.path));
    Promise.all(promises).then(results => uploadToDB(results[0].url, req.body.tag));
    response.ok(res, { status: true })
}

module.exports = {
    uploadImages,
    queryImages
}