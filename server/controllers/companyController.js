import db from "./../models"

//const company = new db.Company()


const companyController = {};

companyController.editDescription = (req, res) => {
    
    console.log("AAAAAAAAAAA " + db.Company);

    var lastModified = Date.now();

  //  if(req.body.description && req.body.description.length >= 10){
        console.log(req.body.description);
    //creating a new instance of an User
 db.Company.findOneAndUpdate(
        { "_id": req.params.id},
    { 
        "$set": {
            "description.description": req.body.description,
            "description.lastModified": lastModified
        }
    },
    {new: true, useNestedStrict: true, strict: true}
    ).exec().then((company) => {
        res.status(200).json({
            success: true,
            data: company
        });
    }).catch((err) => {
        res.status(500).json({
            message: err
        });
    });
// }
//     else if(req.body.description && req.body.description.length < 10) {
//         res.status(400).json({
//             error:{
//                 message: "E kvo e tva opisanie sa?"
//             }            
//         });
//     }
//     else {
//         res.status(400).json({
//             error:{
//                 message: "Dai opisanieto ve baluk"
//             }            
//         });
//     }

    };

    




/* getting all the users*/

export default companyController;