import React from 'react';
import {Link} from 'react-router-dom';
import SearchResultItem from './SearchResultItem';

const SearchResultList = ({searchTerm,results}) => (
  <React.Fragment>
    {results.map((result, index) => <div className="row" key={`${index}-${searchTerm}`} ><Link to={`/movie/${result.imdbid}`} className="search-result-item-link"><SearchResultItem info={result}/></Link></div>)}
  </React.Fragment>
)

export default SearchResultList