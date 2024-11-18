// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure this is your custom Navbar component
import ActivitiesCarousel from './components/ActivityCarousel';
import Home from './components/Home';
import SubmitAssignment from './components/SubmitAssignment';
import UploadMarks from './components/UploadMarks';
import Footer from './components/Footer';
import VideoContent from './components/Video_content';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AdmissionForm from './components/Registrarion';
import OurVision from './components/Navigation_bar_file/our_vision'; // Check this file path
import Mission from './components/Navigation_bar_file/Mission'; 
import History from './components/Navigation_bar_file/History';
import CurriculumPage from './components/Navigation_bar_file/CurriculumPage';
import FacultyPage from './components/Navigation_bar_file/FacultyPage';
import ExaminationsPage from './components/Navigation_bar_file/ExaminationPage';
import AdmissionsPage from './components/Navigation_bar_file/AdmissionsPage';
import StudentCouncilPage from './components/Navigation_bar_file/StudentCouncilPage';
import Resources from './components/Navigation_bar_file/Resources';
import Facilities from './components/Navigation_bar_file/Facilities';
import Activities from './components/Navigation_bar_file/Activities';
import Contact from './components/Navigation_bar_file/Contact';
// import Gallery from './components/Navigation_bar_file/Gallery';

function App() {
    return (
        <Router>
            <Navbar /> {/* Your custom Navbar component */}

            {/* Main content area */}
            <main style={{ paddingTop: '20px', minHeight: '80vh' }}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Home />
                                <ActivitiesCarousel />
                                <VideoContent />
                            </>
                        }
                    />
                    <Route path="/submit-assignment" element={<SubmitAssignment />} />
                    <Route path="/registration" element={<AdmissionForm />} />
                    <Route path="/our-vision" element={<OurVision />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/curriculum" element={<CurriculumPage />} />                    <Route path="/faculty" element={<FacultyPage />} />
                    <Route path="/upload-marks" element={<UploadMarks />} />
                    <Route path="/admissions" element={<AdmissionsPage />} />
                    <Route path="/student-council" element={<StudentCouncilPage />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/facilities" element={<Facilities />} /> 
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/gallery" element={<Gallery />} /> */}
                    <Route path="/examinations" element={<ExaminationsPage />} />
                </Routes>
            </main>

            <Footer />
        </Router>
    );
}

export default App;
