const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const CoachSchema = Schema({
    first_name: {
        type: String,
        required: true,
    },
    middle_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true,
    },
    place_of_birth: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    passport_number: {
        type: String,
        unique: true,
        required: true,
    },
    education: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    coach_phone_one: String,
    coach_phone_two: String,
    certification_id: {
        type: String,
        required: true
    },
    educational_state: {
        type: String,
        required: true
    },
    date_of_certificate_concede: {
        type: String,
        required: true
    },
    place_of_certificate_concede: {
        type: String,
        required: true
    },
    educational_document: {
        type: String,
        // required: true
    }
});


const Coach = model('Coach', CoachSchema);
module.exports = Coach;