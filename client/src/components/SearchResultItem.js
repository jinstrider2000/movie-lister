import React from 'react';
import posterPlaceHolder from '../assets/images/film-poster-placeholder.png';

const SearchResultItem = ({info}) => (
  <div className="movie-preview movie-preview-slide-in">
    {info.poster !== "N/A" ? <img src={info.poster} className="movie-preview-poster" alt="search result poster"/>: <img src={posterPlaceHolder} className="movie-preview-poster" alt="search result poster"/>}
    <h3 className="movie-preview-info">{info.title}</h3>
    <h4 className="movie-preview-info">{typeof(info.year) === "number" ? info.year.toString() : null}</h4>
  </div>
)

export default SearchResultItem