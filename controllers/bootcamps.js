//@description    Get all bootcamps
//@route          Get /api/v1/bootcamps
//@access         Public 
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'show all bootcamps', hello: req.hello });
}

//@description    Get single bootcamp
//@route          Get /api/v1/bootcamps/:id
//@access         Public 
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `show bootcamp ${req.params.id}` });
}


//@description     create new bootcamp
//@route           POST /api/v1/bootcamps/:id
//@access          Private 
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create new bootcamp' });
}

//@description     update bootcamp
//@route           PUT /api/v1/bootcamps/:id
//@access          Private 
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}

//@description     Delete bootcamp
//@route           DELETE /api/v1/bootcamps/:id
//@access          Private 
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `delete bootcamp ${req.params.id}` });
} 