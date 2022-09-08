
const router = require('express').Router();
const multer = require('multer')
const path = require('path')
const InstractorControls = require('../control/instructorControl');
const { isLoggedIn } = require('../utils/isLoggedIn')
// const {storage} = require('../cloudinary');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,  ("photofiles"));

    },
    filename: function (req, file, cb) {
        cb(null, Math.floor(Math.random() * 100).toString() + '-' + file.originalname);
    }
});





const upload = multer({ storage: storage });

router.get('/instructors', 
// isLoggedIn,
 InstractorControls.viewInstractor);
 router.get("/instructor/:id", InstractorControls.getInstractor);

router.post('/createinstractor',
// isLoggedIn,
 upload.fields([{ name: 'thumbImage', maxCount: 1 }, { name: 'fileSingle', maxCount: 1 }]), InstractorControls.CreateInstractor)
router.patch('/editinstractor/:id', 
// isLoggedIn, 
upload.fields([{ name: 'thumbImage', maxCount: 1 }, { name: 'fileSingle', maxCount: 1 }]), InstractorControls.editInstractor);
router.delete('/deleteinstractor/:id', 
// isLoggedIn, 
InstractorControls.deleteInstractor);



module.exports = router; 