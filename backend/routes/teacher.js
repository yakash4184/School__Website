const express = require('express');
const router = express.Router();
const Mark = require('./models/Mark');

// POST: Upload Marks
router.post('/upload-marks', async (req, res) => {
  try {
    const newMark = new Mark(req.body);
    await newMark.save();
    res.status(201).json({ message: 'Marks uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading marks' });
  }
});

module.exports = router;
