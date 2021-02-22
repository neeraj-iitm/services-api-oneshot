const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const collegeSchema = new Schema({
	_id: Number,
    name: String,
    yearFounded: Number,
    city: String,
    state: String,
    country: String,
    noOfStudents: Number,
    courses: Array
});
const College = mongoose.model("College", collegeSchema);
module.exports = College;