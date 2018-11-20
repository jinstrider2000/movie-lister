import React from 'react';
import posterPlaceHolder from '../assets/images/film-poster-placeholder.png';

const SearchResultItem = ({info}) => (
  <div className="search-result-item search-result-item-container-slide-and-text-fade-in">
    {info.poster !== "N/A" ? <img src={info.poster} className="search-result-item-poster" alt="search result poster"/>: <img src={posterPlaceHolder} className="search-result-item-poster" alt="search result poster"/>}
    <h3 className="search-result-info">{info.title}</h3>
    <h4 className="search-result-info">{typeof(info.year) === "number" ? info.year.toString() : null}</h4>
  </div>
)

export default SearchResultItem