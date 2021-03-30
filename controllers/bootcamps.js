const Bootcamp = require("../models/bootcamp");

exports.getBootcamps = async (req, res, next)=>{
    try{
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true,
            data: bootcamps
        });
    }
    catch(err){
        res.status(400).json({success: false});
    }
};

exports.getBootcamp = (req, res, next)=>{
    
    res.status(200).json({
        success: true,
        msg: `get bootcamp ${req.params.ids}`
    });
};


exports.createBootcamp = async (req, res, next)=>{
    /*console.log(req.body);
    res.status(200).json({
        success: true,
        msg: "Create new bootcamp"
    });*/
    

    try{
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
            success: true,
            data: bootcamp
        });
    }
    catch(err){
        res.status(400).json({success: false});
    }
};

exports.updateBootcamp = (req, res, next)=>{
    res.status(200).json({
        success: true,
        msg: `Update bootcamp ${req.params.id}`
    });   
};

exports.deleteBootcamp = (req, res, next)=>{
    res.status(200).json({
        success: true,
        msg: `Delete bootcamp ${req.params.id}`
    });   
}