import db from "./../models"

const userController = {};

userController.post = (req, res) => {

   //pulling the username and the password from the request body
   const {username, password} = req.body;
   
   //write some validation here 

   //creating a new instance of an User
   const user = new db.User({
       username,
       password
   });

   // .save() try to save the new User to the database
   user.save().then((newUser)=>{
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

   userController.getAll = (req, res) => {

    //const {username, age} = req.query;

    const username = req.query.username || '';
    const age = req.query.age || '';


   db.User.find({$and:[{username},{age}]}).then((users) => {
       console.log(username, age);
        return res.status(200).json({
            success: true,
            data: users
        });
   }).catch((err) => {
        res.status(500).json({
            message: err
        });
   });


};

export default userController;