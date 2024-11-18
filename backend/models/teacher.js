const mongoose = require('mongoose');

const markSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  studentRollNumber: { type: String, required: true },
  marks: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Mark = mongoose.model('Mark', markSchema);

module.exports = {
  Mark
}
