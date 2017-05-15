import db from "./../models"


const seedCompanyController = {};

//Get random from an Array
const getRandomFromArray = (myArray) => {
   return myArray[Math.floor(Math.random() * myArray.length)];
}

//Generate random number
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const randomString = (length, chars) => {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
}
/*
console.log(randomString(16, 'aA'));
console.log(randomString(32, '#aA'));
console.log(randomString(64, '#A!'));
*/

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

seedCompanyController.seed = (req, res) => {

   var companyNames = ["Kris","Zori","Alex","Steve","John", "Peter","Thomas"];
   var descriptions = [
       "Lorem 1 asd a;sd k;alsdk ;aksd;l  asd asd asd asd asd",
       "asd;jasd;lj 1asldk;alsdk a;sldka;slk;lkdkdk ad d d d d d dasd;lasdk",
       "asd; ao;aodsi ;oadsii0p2i4p l;wqe ;;lksad as;lkdkl;h13;l4ikh asd"
   ]
   var emails = ["test@test.com", "company2@test.com", "info@company.com"]
   var ages = getRandomNumber(18,58);
   var types = [1,2,3];

    var companyName = getRandomFromArray(companyNames);
    var companySlug = slugify(companyName);
    var password = randomString(16, '#A');
    var email = getRandomFromArray(emails);
    var description = {
        description: " "
    }
   // var description = getRandomFromArray(descriptions);

        const seedCompany = new db.Company({
                companyName,
                companySlug,
                email,
                password,
                description
            });

    // .save() try to save the new User to the database
    seedCompany.save().then((newUser) => {
        res.status(200).json({
            success: true,
            data: newUser
        });
    }).catch((err) => {
        res.status(500).json({
            message: err
        });
    });
 

};

export default seedCompanyController;