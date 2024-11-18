const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true },
  assignment: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Student = mongoose.model('Student', studentSchema)

module.exports = {
  Student
}
