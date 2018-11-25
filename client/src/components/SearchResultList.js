import React from 'react';
import {Link} from 'react-router-dom';
import MoviePreview from './MoviePreview';

const SearchResultList = ({searchTerm,results,handleResultClick}) => (
  <React.Fragment>
    {results.map((result, index) => <div className="row" key={`${index}-${searchTerm}`} ><Link to={`/movie/${result.imdbid}`} className="movie-preview-link" onClick={handleResultClick}><MoviePreview info={result}/></Link></div>)}
  </React.Fragment>
)

export default SearchResultList