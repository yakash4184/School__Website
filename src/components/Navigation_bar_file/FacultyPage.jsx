import React from 'react';
import './FacultyPage.css';

const FacultyPage = () => {
    // Sample faculty data
    const facultyData = [
        {
            name: "Dr. Ramesh Sharma",
            designation: "Professor of Mathematics",
            expertise: "Algebra, Calculus, Number Theory",
        },
        {
            name: "Ms. Kavita Singh",
            designation: "Assistant Professor of English",
            expertise: "Literature, Creative Writing, Grammar",
        },
        {
            name: "Dr. Neha Verma",
            designation: "Professor of Physics",
            expertise: "Quantum Mechanics, Thermodynamics",
        },
        {
            name: "Mr. Rahul Mehta",
            designation: "Lecturer in Computer Science",
            expertise: "Web Development, Data Structures, Algorithms",
        },
    ];

    return (
        <div className="faculty-page">
            {/* Header Section */}
            <div className="faculty-header">
                <h1>Meet Our Faculty</h1>
                <p>
                    Our experienced and dedicated educators are committed to shaping the future of our students.
                </p>
            </div>

            {/* Faculty List */}
            <div className="faculty-list">
                {facultyData.map((faculty, index) => (
                    <div key={index} className="faculty-card">
                        <h2 className="faculty-name">{faculty.name}</h2>
                        <p className="faculty-designation">{faculty.designation}</p>
                        <p className="faculty-expertise">
                            <strong>Expertise:</strong> {faculty.expertise}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacultyPage;
