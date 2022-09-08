const CoachControl = require("../control/coachControl");
const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const { isLoggedIn } = require("../utils/isLoggedIn");
// const {storage} = require('../cloudinary');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,  ("photofiles"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      Math.floor(Math.random() * 100).toString() + "-" + file.originalname
    );
  },
});

const upload = multer({ storage: storage });

router.get("/coaches", 
// isLoggedIn,
CoachControl.viewCoachs);
router.get("/coaches/:id",
// isLoggedIn, 
CoachControl.getCoachs);

router.post(
  "/createcoach",
  // isLoggedIn,
  upload.fields([
    { name: "thumbImage", maxCount: 1 },
    { name: "fileSingle", maxCount: 1 },
  ]),
  CoachControl.CreateCoach
);
router.patch(
  "/editcoach/:id",
  // isLoggedIn,
  upload.fields([
    { name: "thumbImage", maxCount: 1 },
    { name: "fileSingle", maxCount: 1 },
  ]),
  CoachControl.editCoach
);
router.delete("/deletecoach/:id",
//  isLoggedIn,
  CoachControl.deleteCoach);

module.exports = router;
