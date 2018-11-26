import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row} from 'react-bootstrap';
import MoviePreview from './MoviePreview';

const SearchResultList = ({searchTerm,results,handleResultClick}) => (
  <Grid fluid={true}>
    {results.map((result, index) => <Row key={`${index}-${searchTerm}`} ><Link to={`/movie/${result.imdbid}`} className="movie-preview-link" onClick={handleResultClick}><MoviePreview info={result}/></Link></Row>)}
  </Grid>
)

export default SearchResultList