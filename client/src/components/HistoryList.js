import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row} from 'react-bootstrap';
import MoviePreview from './MoviePreview';

const HistoryList = ({history,deleteHistory,userId}) => (
<Grid fluid>
  {history.map((historyItem) => <Row key={historyItem.id} ><Link to={`/movie/${historyItem.imdbid}`} className="movie-preview-link"><MoviePreview info={historyItem} deleteProp={true} handleDeleteClick={deleteHistory.bind(null,userId,historyItem.id)}/></Link></Row>)}
</Grid>
)

export default HistoryList