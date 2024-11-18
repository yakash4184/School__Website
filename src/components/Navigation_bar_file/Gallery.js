import React from 'react';
import styles from './Gallery.css';

// Import images
import backImage from '../Images/back.jpeg';
import christmasImage from './Images/Christmas.jpg';
import gateImage from './Images/Gate.jpg';
import classroomImage from './Images/back.jpeg'; // If the image is repeated

const Gallery = () => {
  return (
    <div className={styles['gallery-page']}>
      <header className={styles['gallery-header']}>
        <h1 className={styles['moving-text']}>School Gallery</h1>
        <p>Explore the beautiful moments from our school events and activities!</p>
      </header>

      <div className={styles['gallery-container']}>
        <div className={styles['image-grid']}>
          <div className={styles['image-item']}>
            <img src={backImage} alt="Event 1" className={styles['image']} />
            <div className={styles['image-overlay']}>
              <p>Sports Day</p>
            </div>
          </div>
          <div className={styles['image-item']}>
            <img src={christmasImage} alt="Event 2" className={styles['image']} />
            <div className={styles['image-overlay']}>
              <p>Cultural Fest</p>
            </div>
          </div>
          <div className={styles['image-item']}>
            <img src={gateImage} alt="Event 3" className={styles['image']} />
            <div className={styles['image-overlay']}>
              <p>Annual Day</p>
            </div>
          </div>
          <div className={styles['image-item']}>
            <img src={classroomImage} alt="Event 4" className={styles['image']} />
            <div className={styles['image-overlay']}>
              <p>Science Fair</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
