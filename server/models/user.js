import mongoose from "mongoose";

const {Schema} = mongoose;

const  userSchema = new Schema({
    username: {
        type:String,
        required: true,
        minglength: [5, "Username should be at least 5 characters long"]
    },
    password: {
        type: String,
        required: true,
        minglength: [8, "The password should be atleast 8 characters long"]
    }
});

//Write some encryption here for Password

const User = mongoose.model('User', userSchema);

export default User;