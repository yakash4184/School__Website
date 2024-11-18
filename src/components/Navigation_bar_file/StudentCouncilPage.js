import React from 'react';
import './StudentCouncilPage.css';

const StudentCouncilPage = () => {
    return (
        <div className="student-council-page">
            <div className="header">
                <h1 className="moving-heading">Welcome to Our Student Council</h1>
            </div>

            <div className="content">
                <section className="introduction">
                    <h2>What is the Student Council?</h2>
                    <p>
                        The Student Council serves as a representative body for students, ensuring that their voices are heard in the decision-making processes at school. 
                        The council works on initiatives that improve the student experience, promote school spirit, and encourage positive school culture.
                    </p>
                </section>

                <section className="roles">
                    <h2>Roles and Responsibilities</h2>
                    <p>
                        The Student Council plays a crucial role in fostering communication between students and school administration. 
                        Council members are elected by their peers and are responsible for organizing school events, promoting student activities, and voicing concerns or ideas that will improve the school environment.
                    </p>
                    <ul>
                        <li><strong>President:</strong> Leads the council, organizes meetings, and represents the student body in all official matters.</li>
                        <li><strong>Vice President:</strong> Assists the President and steps in when the President is unavailable.</li>
                        <li><strong>Secretary:</strong> Records meeting minutes, handles communications, and keeps the council organized.</li>
                        <li><strong>Treasurer:</strong> Manages the council's finances, including event budgets and fundraisers.</li>
                        <li><strong>Event Coordinators:</strong> Plan and execute school events like fundraisers, spirit days, and other student-centered activities.</li>
                    </ul>
                </section>

                <section className="mission">
                    <h2>Mission and Vision</h2>
                    <p>
                        Our mission is to represent, support, and empower the student body by promoting unity, school spirit, and active participation in the betterment of our school. 
                        We strive to create an environment where students can share their ideas, engage in meaningful activities, and grow as individuals.
                    </p>
                </section>

                <section className="upcoming-events">
                    <h2>Upcoming Events</h2>
                    <ul>
                        <li>Annual School Talent Show – Date: 20th December</li>
                        <li>Winter Fest – Date: 10th January</li>
                        <li>Sports Day – Date: 15th February</li>
                        <li>Community Service Week – Date: 1st March</li>
                    </ul>
                </section>

                <section className="contact">
                    <h2>Contact Us</h2>
                    <p>If you have any questions, concerns, or ideas you’d like to share, feel free to reach out to us. We are here to listen and take action!</p>
                    <p>Email: <a href="mailto:studentcouncil@school.com">studentcouncil@school.com</a></p>
                </section>
            </div>
        </div>
    );
};

export default StudentCouncilPage;
