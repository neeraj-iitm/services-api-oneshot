const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new Schema({
	_id: Number,
    name: String,
    yearOfBatch: Number,
    collegeId: Number,
    skills: Array
});
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;