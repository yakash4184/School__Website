import React from 'react';
import './Examination.css';

const ExaminationsPage = () => {
    // Sample exam schedule data
    const examData = [
        {
            date: "2024-12-10",
            subject: "Mathematics",
            time: "10:00 AM - 1:00 PM",
            venue: "Room 101",
        },
        {
            date: "2024-12-11",
            subject: "Physics",
            time: "10:00 AM - 1:00 PM",
            venue: "Room 102",
        },
        {
            date: "2024-12-12",
            subject: "English",
            time: "10:00 AM - 12:00 PM",
            venue: "Room 103",
        },
        {
            date: "2024-12-13",
            subject: "Computer Science",
            time: "10:00 AM - 1:00 PM",
            venue: "Room 104",
        },
    ];

    return (
        <div className="examinations-page">
            {/* Header Section */}
            <div className="examinations-header">
                <h1>Examinations Schedule</h1>
                <p>Find all the details about upcoming examinations below.</p>
            </div>

            {/* Exam Schedule Cards */}
            <div className="exam-list">
                {examData.map((exam, index) => (
                    <div key={index} className="exam-card">
                        <h2 className="exam-date">{exam.date}</h2>
                        <p className="exam-subject"><strong>Subject:</strong> {exam.subject}</p>
                        <p className="exam-time"><strong>Time:</strong> {exam.time}</p>
                        <p className="exam-venue"><strong>Venue:</strong> {exam.venue}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExaminationsPage;
