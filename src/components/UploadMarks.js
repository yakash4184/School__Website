import { useState } from 'react';
import axios from 'axios';

const UploadMarks = () => {
  const [subject, setSubject] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [marks, setMarks] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    const newMarks = { subject, studentRollNumber: rollNumber, marks };
    await axios.post('/api/teacher/upload-marks', newMarks);
    alert('Marks uploaded');
  };

  return (
    <div>
      <h1>Upload Marks</h1>
      <form onSubmit={handleUpload}>
        <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" required />
        <input value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} placeholder="Roll Number" required />
        <input value={marks} onChange={(e) => setMarks(e.target.value)} placeholder="Marks" required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadMarks;
