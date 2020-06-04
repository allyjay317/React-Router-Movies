import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const params = useParams();
  console.log(props)
  useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
      setMovie(null)
      setTimeout(()=>{
       axios
        .get(`http://localhost:5000/api/movies/${params.movieid}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      }, 1000)
        

  },[params.movieid]);
  
   const saveMovie = () => {
     const addToSavedList = props.addToSavedList;
     addToSavedList(movie)
   }

  if (!movie) {
    return <div className="save-wrapper movie-card">Loading movie information...</div>;
  }
  function movieInSaved(){
    let found = false
    props.saved.forEach(element => {
      if(element.id === movie.id){
        found = true;
      }
    })
    return found ? "Remove" : "Save"
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <div className="save-button" onClick={saveMovie}>{movieInSaved()}</div>
    </div>
  );
}

export default Movie
