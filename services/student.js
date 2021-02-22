const Student = require('../models/Student');
//import {StatusCodes, getStatusCode} from 'http-status-codes';
const StatusCodes = require('http-status-codes');
exports.getAll = async (req, res) => {
    const students = await Student.find();
    res.send(students)
}

exports.getById = async (req, res) => {
    let student;
    try {
        student = await Student.findById(req.params.id);
        if (student == null) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Cannot find student" });
        }
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
    res.json(student);
};

exports.getByCollege = async (req, res) => {
    let student;
    try {
        student = await Student.find({ collegeId: req.params.collegeId });
        if (student == null) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Cannot find student" });
        }
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
    res.json(student);
};



// exports.getstudentCountByState = function(req, res){

//   try {

//   } catch (err) {
//     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
//   }

// };
/*



[{_id:i,name:.....,yearFounded:.....,city:.....,state:......,country:......,noOfStudent:....., courses:['cs','it']},{}]


[

{ "_id" : 96, "name" : "student96", "yearFounded" : 2046, "city" : "city96", "state" : "state96", "country" : "country96", "noOfStudent" : 126, "courses" : [ { "name" : "cs" }, { "name" : "it" } ] }
{ "_id" : 97, "name" : "student97", "yearFounded" : 2047, "city" : "city97", "state" : "state97", "country" : "country97", "noOfStudent" : 127, "courses" : [ { "name" : "cs" }, { "name" : "it" } ] }
{ "_id" : 98, "name" : "student98", "yearFounded" : 2048, "city" : "city98", "state" : "state98", "country" : "country98", "noOfStudent" : 128, "courses" : [ { "name" : "cs" }, { "name" : "it" } ] }
{ "_id" : 99, "name" : "student99", "yearFounded" : 2049, "city" : "city99", "state" : "state99", "country" : "country99", "noOfStudent" : 129, "courses" : [ { "name" : "cs" }, { "name" : "it" } ] }
{ "_id" : 100, "name" : "student100", "yearFounded" : 2050, "city" : "city100", "state" : "state100", "country" : "country100", "noOfStudent" : 130, "courses" : [ { "name" : "cs" }, { "name" : "it" } ] }

]


*/



