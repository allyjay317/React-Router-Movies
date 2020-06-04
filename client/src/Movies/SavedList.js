import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';

const SavedList = props => {
  const history = useHistory();

  function SavedMovies(){
    if(props.list.length === 0){
      return <div className='saved-movie'>You have no movies saved, try saving some!</div>
    }
    return props.list.map(movie => (
      <NavLink className="saved-movie" exact to={`/movies/${movie.id}`} activeClassName="saved-active">{movie.title}</NavLink>
    ))
  }

  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
      <SavedMovies />
    <div className="home-button" onClick={()=> history.push('/')}>Home</div>
  </div>
  )
};

export default SavedList;
