import {client} from '../imdb-api-client/client';

export const getSearchResults = (searchTerm) => {
  return (
    (dispatch) => {
      client.search({name: searchTerm, reqtype: "movie"}).then(searchObj => dispatch({type: "GET_SEARCH_RESULTS", newSearchPaginator: searchObj, newSearchTerm: searchTerm, results: searchObj.results})).catch(error => dispatch({type: "DISPLAY_SEARCH_ERROR", message: error.message, newSearchTerm: searchTerm}));
    }
  )
}

export const clearSearch = () => ({type: "CLEAR_SEARCH"});