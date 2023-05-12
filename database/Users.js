const mongoose = require("mongoose")

//create users schema
const UsersSchema = mongoose.Schema({
    username : {type:String, required: true},
    email : {type:String, required: true},
    password : {type:String, required: true}
})

const UsersModel = mongoose.model("users", UsersSchema)

module.exports = UsersModel
