import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row} from 'react-bootstrap';
import MoviePreview from './MoviePreview';

const HistoryList = ({history,deleteHistory,userId}) => (
<Grid fluid>
  {history.map((historyItem) => <Row key={historyItem.id}><div id={`history-${historyItem.id}`} className="movie-preview-container"><span className="movie-preview-delete movie-preview-slide-in" onClick={deleteHistory.bind(null,userId,historyItem.id)}>X</span><Link to={`/movie/${historyItem.imdbid}`} className="movie-preview-link"><MoviePreview info={historyItem}/></Link></div></Row>)}
</Grid>
)

export default HistoryList