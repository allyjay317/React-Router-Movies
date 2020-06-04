import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    let index = -1;
    savedList.forEach((element, pos) =>{
      if(element.id === movie.id){
        index = pos
      }
    })
    if(index === -1){
      setSavedList([...savedList, movie]);
    }
    else{
      if(savedList.length === 1){
        setSavedList([])
      }
      let start = savedList.slice(0, index);
      let end = savedList.slice(index+1, savedList.length)
      setSavedList([...start, ...end])
    }
    
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route exact path='/'>
          <MovieList movies={movieList}></MovieList>
        </Route>
        <Route path='/movies/:movieid'>
          <Movie movies={movieList} addToSavedList={addToSavedList} saved={savedList}/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
