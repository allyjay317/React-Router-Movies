import React from 'react';
import { useHistory } from 'react-router-dom'

const MovieCard = ({ movie, click }) => {
  const { title, director, metascore, stars } = movie;
  const history = useHistory();
  return (
    <div className="movie-card" onClick={(click)=> click ? history.push(`/movies/${movie.id}`) : false}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
  )
};

export default MovieCard;
