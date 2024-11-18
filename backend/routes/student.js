const express = require('express');
const router = express.Router();
const {Student} = require('./models/Student');

// POST: Submit Assignment
router.post('/submit-assignment', async (req, res) => {
  try {
    const newAssignment = new Student(req.body);
    await newAssignment.save();
    res.status(201).json({ message: 'Assignment submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting assignment' });
  }
});

module.exports = router;
