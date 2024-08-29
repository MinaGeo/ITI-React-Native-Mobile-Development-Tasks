import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundOverlay}>
                <h1 className={styles.heading}>About Us</h1>
                <div className={styles.content}>
                    <p className={styles.description}>
                        Welcome to MovieMania, your ultimate destination for discovering and exploring movies. 
                        Our platform provides a comprehensive collection of movie information, including 
                        detailed descriptions, release years, genres, and more. Whether you're a film enthusiast 
                        or just looking for something new to watch, MovieMania has something for everyone.
                    </p>
                    <h2 className={styles.subheading}>Featured Movies</h2>
                    <div className={styles.movies}>
                        <div className={styles.movie}>
                            <img src="https://image.tmdb.org/t/p/original/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" alt="Avatar" className={styles.moviePoster} />
                            <div className={styles.movieInfo}>
                                <h3>Avatar</h3>
                                <p>Year: 2009</p>
                                <p>Genre: Action, Adventure, Fantasy</p>
                                <p>A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.</p>
                            </div>
                        </div>
                        <div className={styles.movie}>
                            <img src="https://image.tmdb.org/t/p/original/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg" alt="I Am Legend" className={styles.moviePoster} />
                            <div className={styles.movieInfo}>
                                <h3>I Am Legend</h3>
                                <p>Year: 2007</p>
                                <p>Genre: Drama, Horror, Sci-Fi</p>
                                <p>Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
