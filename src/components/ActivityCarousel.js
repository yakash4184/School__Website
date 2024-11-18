import React, { useRef, useEffect } from 'react';
import ActivityCard from './ActivityCard';
import './ActivitiesCarousel.css';


// Import images directly
import crescendoImage from './Images/LKG.jpg';
import crescendoLogo from './Images/logo.png';
import pinnacleImage from './Images/Game.jpeg';
import pinnacleLogo from './Images/logo.png';
import upskillImage from './Images/ClassRoom.JPG';
import upskillLogo from './Images/logo.png';

const activities = [
    {
        title: 'Class Room',
        description: `Welcome to our classrooms, vibrant spaces where students are inspired to learn, explore, and grow every day. Here, knowledge meets curiosity.`,
        image: crescendoImage,
        logo: crescendoLogo,
    },
    {
        title: 'Carrom Activity',
        description: `"Carrom is a popular indoor game at our school, promoting focus, strategy, and patience."`,
        image: pinnacleImage,
        logo: pinnacleLogo,
    },
    {
        title: 'Class Room',
        description: `"Our classrooms are dynamic learning environments where curiosity thrives. Equipped with modern resources and a supportive atmosphere, they encourage students to engage, question, and explore new ideas`,
        image: upskillImage,
        logo: upskillLogo,
    },
    {
        title: 'Christmas celebration',
        description: `Our Christmas Dance is a joyful celebration filled with music, dance, and holiday spirit!`,
        image: upskillImage,
        logo: upskillLogo,
    },
];

function ActivitiesCarousel() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (carouselRef.current) {
                const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

                // If we are at the end, reset to start; else, keep scrolling right
                if (carouselRef.current.scrollLeft >= maxScrollLeft) {
                    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                }
            }
        }, 3000); // Adjust duration (in ms) between each scroll

        return () => clearInterval(scrollInterval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="carousel-container">
            <h2>INTER SCHOOL ACTIVITIES</h2>
            <div className="carousel" ref={carouselRef}>
                {activities.map((activity, index) => (
                    <ActivityCard key={index} {...activity} />
                ))}
            </div>
        </div>
    );
}

export default ActivitiesCarousel;
