import React from 'react';
import SearchResultItem from './SearchResultItem';

const SearchResultList = ({searchTerm,results}) => (
  <React.Fragment>
    {results.map((result, index) => <div className="row" key={`${index}-${searchTerm}`} ><a href={`/movie/${result.imdbid}`} className="search-result-item-link"><SearchResultItem info={result}/></a></div>)}
  </React.Fragment>
)

export default SearchResultList