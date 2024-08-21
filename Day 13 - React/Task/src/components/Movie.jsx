import React from 'react';

const Movie = ({ poster_path, original_title, name, original_language , release_date, rating, description, adult, genres }) => {
    const imgPath = "https://image.tmdb.org/t/p/w500/";

    return (
        <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
            <img src={`${imgPath}${poster_path}`} alt={original_title} style={{ width: "30%" }} />
            <h2>{name}</h2>
            <p><strong>Language:</strong> {original_language}</p>
            <p><strong>Release date:</strong> {release_date}</p>
            <p><strong>Rating:</strong> {rating}</p>
            <p>{description}</p>
            <p><strong>Type: {adult}</strong></p>
            <p><strong>Genres:</strong> {genres}</p>  {/* Display genres here */}

        </div>
    );
}

export default Movie;
