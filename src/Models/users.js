import mongoose from "mongoose";
import validator from "validator"
const usersSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: [true, "Email is already Exists!"],
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Error raised")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    },
    mobile: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error("Error raised")
            }
        }
    },
    location: String,
    gender: String
})
const User = new mongoose.model("User", usersSchema)
export default User