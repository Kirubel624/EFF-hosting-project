
const wrapAsync = require('../utils/wrapAsync');
const Instractor = require('../model/Instructor');


module.exports.CreateInstractor = wrapAsync(async function (req, res) {
    const data = req.body;

    if (!(data.first_name && data.middle_name && data.last_name && data.email && data.dob && data.gender && data.place_of_birth && data.nationality && data.passport_number && data.education && data.experience && data.instractor_phone_one && data.certification_id && data.date_of_certificate_concede && data.place_of_certificate_concede)) {
        return res.json("All inputs are required");
    }

    let photo = req.files.thumbImage[0].path
    let educationDocument = req.files.fileSingle[0].path

    console.log(req.files.fileSingle)
    console.log(req.files.thumbImage)


    const dataToBeInserted = {
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        photo: photo,
        email: data.email,
        dob: data.dob,
        gender: data.gender,
        place_of_birth: data.place_of_birth,
        nationality: data.nationality,
        passport_number: data.passport_number,
        education: data.education,
        experience: data.experience,
        instractor_phone_one: data.instractor_phone_one,
        instractor_phone_two: data.instractor_phone_two,
        certification_id: data.certification_id,
        educational_state: data.educational_state,
        date_of_certificate_concede: data.date_of_certificate_concede,
        place_of_certificate_concede: data.place_of_certificate_concede,
        educational_document: educationDocument
    }

    const databaseInstance = new Instractor(dataToBeInserted);

    await databaseInstance.save().then(function () {
        return res.json({
            msg: "Data inserted Successfully",
            status: 200
        })
    }).catch(function (e) {
        return res.json({
            msg: "Error while inserting to database",
            err: e,
            status: 501
        })
    })
})


module.exports.editInstractor = wrapAsync(async function (req, res) {
    const { id } = req.params

    const data = req.body;

    if (!(data.first_name && data.middle_name && data.last_name && data.email && data.dob && data.gender && data.place_of_birth && data.nationality && data.passport_number && data.education && data.experience && data.instractor_phone_one && data.certification_id && data.educational_state && data.date_of_certificate_concede && data.place_of_certificate_concede)) {
        return res.json("All inputs are required");
    }

    let photo = req.files.thumbImage[0].filename
    let educationDocument = req.files.fileSingle[0].filename
    const dataToBeInserted = {
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        photo: photo,
        email: data.email,
        dob: data.dob,
        gender: data.gender,
        place_of_birth: data.place_of_birth,
        nationality: data.nationality,
        passport_number: data.passport_number,
        education: data.education,
        experience: data.experience,
        instractor_phone_one: data.instractor_phone_one,
        instractor_phone_two: data.instractor_phone_two,
        certification_id: data.certification_id,
        educational_state: data.educational_state,
        date_of_certificate_concede: data.date_of_certificate_concede,
        place_of_certificate_concede: data.place_of_certificate_concede,
        educational_document: educationDocument
    }

    const updatedData = await Instractor.findOneAndUpdate(id, dataToBeInserted, { runValidators: true, new: true }).then(function () {
        return res.json({
            msg: "Data Updated successfully",
            status: 200
        })
    }).catch(function (e) {
        return res.json({
            msg: "Error While editing the data the user doesnt exist or some props have duplicate key",
            err: e,
            status: 400
        })
    })
})

module.exports.deleteInstractor = wrapAsync(async function (req, res) {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    const { id } = req.params;
    await Instractor.findByIdAndDelete(id).then(function () {
        return res.json({
            msg: "Data Deleted Successfully",
            status: 200
        })
    }).catch(function (e) {
        return res.json({
            msg: "Unable to delete , id dont exist",
            status: 200
        })
    })
})


module.exports.viewInstractor = wrapAsync(async function (req, res) {
    const alldatas = await Instractor.find();
    if (!alldatas) {
        return res.json({
            msg: "No data available , add Instractors to view more",
            status: 200
        })
    }

    return res.json({
        paylaod: alldatas,
        status: 200
    })
})
module.exports.getInstractor  = wrapAsync(async function (req, res) {
    const tour = await Instractor.findById(req.params.id);
  
    if (!tour) {
      return (new ("There is not Instractor in this ID", 404));
    }
    res.status(200).json({
      status: "succes",
      data: tour,
    });
  });
  