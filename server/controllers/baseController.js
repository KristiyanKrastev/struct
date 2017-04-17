const baseController = {};

baseController.get = (req, res) => {
   res.json({
        message:'welcome to my API'
    });
};

export default baseController;