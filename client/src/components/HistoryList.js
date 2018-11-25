import React from 'react';
import {Link} from 'react-router-dom';
import MoviePreview from './MoviePreview';

const HistoryList = ({history,deleteHistory,userId}) => (
<React.Fragment>
  {history.map((historyItem) => <div className="row" key={historyItem.id} ><Link to={`/movie/${historyItem.imdbid}`} className="movie-preview-link"><MoviePreview info={historyItem} deleteProp={true} handleDeleteClick={deleteHistory.bind(null,userId,historyItem.id)}/></Link></div>)}
</React.Fragment>
)

export default HistoryList