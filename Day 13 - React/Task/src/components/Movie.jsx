import React from 'react';

const Movie = ({ poster_path, original_title, name, original_language , release_date, rating, description, adult, genres }) => {
    const imgPath = "https://image.tmdb.org/t/p/w500/";
    const containerStyle = {
        marginBottom: '20px',
        padding: '10px',
        border: '1px solid #ccc',
        backgroundColor: '#0d1137',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
    };

    const imgStyle = {
        width: "15%",
        marginRight: '20px', // Adds some space between the image and the text
    };

    const textContainerStyle = {
        flex: 1, // Makes the text container take the remaining space
        textAlign: 'left',
    };

    const strongStyle = {
        color: '#e52165'
    };

    return (
        <div style={containerStyle}>
            <img src={`${imgPath}${poster_path}`} alt={original_title} style={imgStyle} />
            <div style={textContainerStyle}>
                <h2>{name}</h2>
                <p><strong style={strongStyle}>Language:</strong> {original_language}</p>
                <p><strong style={strongStyle}>Release date:</strong> {release_date}</p>
                <p><strong style={strongStyle}>Rating:</strong> {rating}</p>
                <p>{description}</p>
                <p><strong style={strongStyle}>Type: </strong>{adult}</p>
                <p><strong style={strongStyle}>Genres:</strong> {genres}</p>  {/* Display genres here */}
            </div>
        </div>
    );
}

export default Movie;
