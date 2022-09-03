const Users = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT_ROUNDS = process.env.SALT_ROUND || 10;
const wrapAsync = require('../utils/wrapAsync');
const User = require('../model/User');
const mongoose = require('mongoose');

const jsonWebTokenPrivateKey = process.env.JWT_PRIVATE_KEY || "6bjhds67dbfd9r36teofbe9364583beu"

mongoose.connect("mongodb://localhost/storm", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(function (data) {
        console.log("DATABASE CONNECTED SUCCESSFULLY");
    })
    .catch(function (e) {
        console.log("ERROR WHILE CONNECTING DATABASE");
        console.log(e);
    });


const seedAdmin = async () => {
    const username = "abebe"
    const password = "password"

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const insertedData = { username: username, password: hashedPassword, role: "admin" }
    const createdData = new User(insertedData);
    await createdData.save();

}


seedAdmin();
console.log("seeded successfully")


