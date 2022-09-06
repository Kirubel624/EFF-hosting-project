const cloudinary =require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary'); 
cloudinary.config({

    cloud_name: "dvqawl4nw",
    api_key: "354383329971386",
    api_secret: "ZqEaAjKpSI6g-OTXKDaFb6FoBf8"

})

const storage = new CloudinaryStorage({
    cloudinary, 
    params:{
        folder:'RohaGebeya', 
        allowedFormats: ['jpg', 'png', 'jpeg']
    }
})



module.exports = {cloudinary,storage};