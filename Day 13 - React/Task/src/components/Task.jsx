import axios from 'axios';
import React, { Component } from 'react';
import Movie from './Movie';

class Task extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            genres: {},
            loading: true,
        };
    }

    componentDidMount() {
              // Fetch genres first
              axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=9813ce01a72ca1bd2ae25f091898b1c7')
              .then(genreRes => {
                  const genres = genreRes.data.genres.reduce((acc, genre) => {
                      acc[genre.id] = genre.name;
                      return acc;
                  }, {});
  
                  this.setState({ genres });
  
                  // Now fetch the movies
                  return axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7');
              })
            .then(res => {
                const movies = res.data.results.map(movie => ({
                    poster_path: movie.poster_path,
                    original_title: movie.original_title,
                    id: movie.id,
                    name: movie.title,
                    original_language: this.getLanguageName(movie.original_language),
                    release_date: movie.release_date,
                    rating: movie.vote_average,
                    description: movie.overview,
                    adult: movie.adult ? '18+' : 'PG', // Conditional expression here
                    genres: movie.genre_ids.map(id => this.state.genres[id]).join(', '), // Map genre_ids to genre names

                }));
                this.setState({ movies, loading: false });
            })
            .catch(err => console.error(err));
    }
    getLanguageName = (code) => {
        const languageMap = {
            en: 'English',
            hi: 'Hindi',
            zh: 'Chinese',
            fr: 'French',
            ko: 'Korean',
        };
        return languageMap[code] || code; // Return the full name or the code if not found
    }
    render() {
        if (this.state.loading) return <div>Loading movies...</div>;

        return (
            <div>
                {this.state.movies.map(movie => (
                    <Movie key={movie.id} {...movie} />
                ))}
            </div>
        );
    }
}

export default Task;
