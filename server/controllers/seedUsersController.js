import db from "./../models"


const seedUsersController = {};

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

seedUsersController.seed = (req, res) => {

   var userNames = ["Kris","Zori","Alex","Steve","John", "Peter","Thomas"];
   var ages = getRandomNumber(18,58);
   var types = [1,2,3];

    var username = getRandomFromArray(userNames);
    var password = randomString(16, '#A');
    var age = getRandomNumber(18,58);
    var type = getRandomFromArray(types); 


    //var username = "Aasdasdasdasda";
    // var password ="asdasd21dasda123asd";
    // var age = 12;
    // var type = 1; 

    //write some validation here 

    //creating a new instance of an User
//var howmany = req.body.howmany;


        const seedUser = new db.User({
                username,
                password,
                age,
                type
            });

    // .save() try to save the new User to the database
    seedUser.save().then((newUser) => {
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

export default seedUsersController;