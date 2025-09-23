const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please add the username!"]
    },
    email:{
        type: String,
        required: [true, "Please add email!"],
        unique: [true,"Email address already registered!"]
    },
    password:{
        type: String,
        required: [true, "Please add password!"]
    }
},{
    timestamps: true
}
)

module.exports = mongoose.model("User",userSchema)