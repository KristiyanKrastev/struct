import mongoose from "mongoose";

const {Schema} = mongoose;

const  candidateSchema = new Schema({
    name: String, 
});

//Write some encryption here for Password

const User = mongoose.model('User', candidateSchema);

export default Candidate;