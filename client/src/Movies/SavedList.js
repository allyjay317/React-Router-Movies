import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';

const SavedList = props => {
  const history = useHistory();
  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink className="saved-movie" exact to={`/movies/${movie.id}`} activeClassName="saved-active">{movie.title}</NavLink>
    ))}
    <div className="home-button" onClick={()=> history.push('/')}>Home</div>
  </div>
  )
};

export default SavedList;
