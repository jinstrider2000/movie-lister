import React from 'react';
import {Link} from 'react-router-dom';
import SearchResultItem from './SearchResultItem';

const SearchResultList = ({searchTerm,results,handleResultClick}) => (
  <React.Fragment>
    {results.map((result, index) => <div className="row" key={`${index}-${searchTerm}`} ><Link to={`/movie/${result.imdbid}`} className="search-result-item-link" onClick={handleResultClick}><SearchResultItem info={result}/></Link></div>)}
  </React.Fragment>
)

export default SearchResultList