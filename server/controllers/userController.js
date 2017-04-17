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

export default userController;