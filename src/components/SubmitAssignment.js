import { useState } from 'react';
import axios from 'axios';

const SubmitAssignment = () => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [assignment, setAssignment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAssignment = { name, rollNumber, assignment };
    await axios.post('/api/student/submit-assignment', newAssignment);
    alert('Assignment submitted');
  };

  return (
    <div>
      <h1>Submit Assignment</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} placeholder="Roll Number" required />
        <textarea value={assignment} onChange={(e) => setAssignment(e.target.value)} placeholder="Assignment" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitAssignment;
