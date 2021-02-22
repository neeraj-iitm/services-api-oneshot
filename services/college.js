const College = require('../models/College');
//import {StatusCodes, getStatusCode} from 'http-status-codes';
const StatusCodes = require('http-status-codes');
exports.getAll = async (req, res) => {
  const colleges = await College.find();
  res.send(colleges)
}

exports.getById = async (req, res) =>{
  let college;
  try {
    college = await College.findById(req.params.id);
    if (college == null) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Cannot find College" });
    }
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
  res.json(college);
};

exports.getByName = async (req, res)=>{
  let college;
  try {
    college=await College.find({name: req.params.name})
    if (college == null) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Cannot find College" });
    }
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
  res.json(college);
};
exports.getByState = async (req, res) => {
  let colleges;
  try {
    colleges = await College.find({ state: req.params.state })
    if (colleges == null) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Cannot find College" });
    }
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
  res.json(colleges);
};
exports.getStateWiseCollegeCount=async (req,res) =>{
try {
  data=await College.aggregate([
    {
      $group:{
      _id:'$state', collegeCount:{$sum:1}
      }
    },
    {
      $project:{
        state:'$_id', collegeCount:1, _id:0
      }
    }
   ]);
  if (data == null) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: "Cannot find College" });
  }
} catch (err) {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
}
  res.json(data);
};


// exports.getCollegeCountByState = function(req, res){
  
//   try {
    
//   } catch (err) {
//     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
//   }
  
// };
/*



[{_id:i,name:.....,yearFounded:.....,city:.....,state:......,country:......,noOfStudent:....., courses:['cs','it']},{}]


[

{ "_id" : 96, "name" : "college96", "yearFounded" : 2046, "city" : "city96", "state" : "state96", "country" : "country96", "noOfStudent" : 126, "courses" : [ { "name" : "cs" }, { "name" : "it" } ] }
{ "_id" : 97, "name" : "college97", "yearFounded" : 2047, "city" : "city97", "state" : "state97", "country" : "country97", "noOfStudent" : 127, "courses" : [ { "name" : "cs" }, { "name" : "it" } ] }
{ "_id" : 98, "name" : "college98", "yearFounded" : 2048, "city" : "city98", "state" : "state98", "country" : "country98", "noOfStudent" : 128, "courses" : [ { "name" : "cs" }, { "name" : "it" } ] }
{ "_id" : 99, "name" : "college99", "yearFounded" : 2049, "city" : "city99", "state" : "state99", "country" : "country99", "noOfStudent" : 129, "courses" : [ { "name" : "cs" }, { "name" : "it" } ] }
{ "_id" : 100, "name" : "college100", "yearFounded" : 2050, "city" : "city100", "state" : "state100", "country" : "country100", "noOfStudent" : 130, "courses" : [ { "name" : "cs" }, { "name" : "it" } ] }

]


*/



