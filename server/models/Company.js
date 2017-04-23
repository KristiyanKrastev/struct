import mongoose from "mongoose";
//WHAT ABOUT HTTP HEADERS?!?!?!?!?!? Loot at it


const {Schema} = mongoose;

const  companySchema = new Schema({
    id: objectID,
    companyName:{
        type: String,
        required:true,
        unique: true,
        index: true //example: making an index on the companyName 
    },
    email: {
        type: String,
        unique: true, // making the email field unique
    },
    profile: {}
});

//Write some encryption here for Password

const User = mongoose.model('User', companySchema);

export default Company;