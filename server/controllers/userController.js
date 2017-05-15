import db from "./../models"
import aqp from 'api-query-params';

const userController = {};

userController.post = (req, res) => {

    //pulling the properties from the req.body
    const {
        username,
        password,
        age,
        type
    } = req.body;

    //write some validation here 

    //creating a new instance of an User
    const user = new db.User({
        username,
        password,
        age,
        type
    });
    // .save() try to save the new User to the database
    user.save().then((newUser) => {
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


/* getting all the users*/

userController.getAll = (req, res) => {

    /* transforming the req.query*/ 
    const query = aqp(req.query, {
        /* blacklist: filter on all keys except the ones specified*/
        //   blacklist: [],
        /*whitelist: filter only on the keys specified */
        whitelist: ['age', 'username'],
        /**https://github.com/loris/api-query-params#specify-casting-per-param-keys*/
        casters: {
            lowercase: val => val.toLowerCase(),
            int: val => parseInt(val, 10),
        },
        castParams: {
            username: 'lowercase',
            age: 'int',
          //  key3: 'string',
         //   key4: 'unknown',
        },

    });

    //const projection = quer.projection; - if we a projection baset on the req.query.filter

    //Setting the default values for the search
    const reqDefaults = {
        /* The default limit */
        limit: 25,
        /* The default skip */
        skip: 0,
        /* The default sort */
        sort: {
            "type": 1
        },
        /**
         * projection - It accepts a comma-separated list of fields. 
         * Default behavior is to specify fields to return. 
         * Use - prefixes to return all fields except some specific fields.
        */
        //   projection : "age", /*return only age and _id*/
        projection: "-password -__v", //return everything except password and __v      
    }

    //Creating the sort property
    query.sort = query.sort ? Object.assign({}, query.sort) : {};

    //Cleaning up the request.query.sort
    //Checking the req.query.sort for sorting based on type and remove it if present
    if (query.sort.hasOwnProperty('type')) {
        delete query.sort.type;
    }

    //Assigning the default search parameters
    const limit = req.query.limit ? Number(req.query.limit) : reqDefaults.limit;
    const skip = req.query.skip ? Number(req.query.skip) : reqDefaults.skip;
    query.sort = query.sort ? Object.assign(reqDefaults.sort, query.sort) : reqDefaults.sort;
    const sort = query.sort;
    const projection = reqDefaults.projection;

    //quering the database
    const resultUser = db.User.find(query.filter).select(projection).sort(sort).skip(skip).limit(limit).exec();


    resultUser.then((users) => {
        console.log(query);
        //Think about handling different scenarios  - ex.: if no users are returned
        console.log("User search returned: " + users.length + " results");
        return res.status(200).json({
            success: true,
            data: users.length ? users : "We searched, and searched and couldn't find the users you are searching for"
        });
    }).catch((err) => {
        res.status(500).json({
            message: err
        });
    });


};

export default userController;