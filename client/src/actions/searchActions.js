import {client} from '../imdb-api-client/client';

const getSearchResults = (searchTerm) => {
  return (
    (dispatch) => {
      client.search({name: searchTerm, reqtype: "movie"}).then(searchObj => dispatch({type: "GET_SEARCH_RESULTS", newSearchPaginator: searchObj, newSearchTerm: searchTerm, results: searchObj.results})).catch(error => dispatch({type: "DISPLAY_SEARCH_ERROR", message: error.message, newSearchTerm: searchTerm}));
    }
  )
}

const getMoreResults = (paginator) => {
  return (
    (dispatch) => {
      paginator.next().then(searchObj => dispatch({type: "GET_MORE_RESULTS", newSearchPaginator: searchObj, results: searchObj.results})).catch(error => console.error("Problem occurred retrieving more results"))
    }
  )
}

const clearSearch = () => ({type: "CLEAR_SEARCH"});

export {getSearchResults, getMoreResults,clearSearch};