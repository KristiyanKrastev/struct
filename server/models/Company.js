import mongoose from "mongoose";
//WHAT ABOUT HTTP HEADERS?!?!?!?!?!? Look at it

const {Schema} = mongoose;

const errorTxt = {
    passMinLength: "The password should be atleast 8 characters long"
}

/*
 1. companies
    - list of companies
        - company Name - link
        - company Logo - image
        - Active jobs - link
        - recruiting phone
        - operates in - list of states
 2. job seekers
 3. jobs,
 4. Templates
 4. invoices
 5. dashboard
*/
//companies list - search -> get(/companies)
//create company -> post(/companies)
//companie view -> get(/companies/:companySlug)
//get jobs -> get(/companies/:companySlug/jobs)
//Change email -> put(/Dashboard)
//Change password


const  companySchema = new Schema({
    
    //Main company Info    
    email:       { type: String, unique: true, required:true },
    password:    { type: String, required: true, minglength: [8, errorTxt.passMinLength]},
    createdAt:   { type: Date, default: Date.now },
    companyName: { type: String, required:true},
    companyType: { type:String, required: true}, //Corporate Employer, Recruiting agency
    companySlug: { type: String, required: true, unique:true},
    active: Boolean, //If the companie's profile is active or not -> remove profile action ?
    
    //links to images -> uploaded to google or amazon cloud
    companyLogo: String,
    profileImage: String,
    
    //Email alerts and notifications settings
    alerts: {
        jobAllerts: { type: Boolean, default: true }, 
        newsletter: { type: Boolean, default: true } 
    },
    //Terms and condiotions Compliance Date
    thermsComplianceDate: { type: Date, default: Date.now },

    //Company Presentation
    companyPresentation: {
                   description: {type: String},
                   lastModified: { type: Date, default: Date.now },
                   companyTrucks: Number,
                   ownerOperators: Number,
                   terminalsCount: Number,
                   runAreas: [] //Run Areas: https://en.wikipedia.org/wiki/List_of_regions_of_the_United_States                                                         
                 },
    website: String,
    socialMedia: {
        linkedIn: String,
        facebook: String,
        twitter: String,
        googlePlus: String        
    },
    contacts: [],
    jobs: [], // List of created jobs
   /**
    * { jobId: "jobId", active: Boolean, jobTitle: "jobTitle",} 
    */
    activeJobs: Number,
    operatesIn: [], //List of States

    
});



//Write some encryption here for Password

const Company = mongoose.model('Company', companySchema);

export default Company;