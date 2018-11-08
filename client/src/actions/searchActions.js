const imdb = require('imdb-api');
const client = new imdb.Client({apiKey: "d7196e79"});

export const loadSearchResults = (searchTerm) => {
  return (
    (dispatch, getState) => {

      // {type: "LOAD_SEARCH_RESULTS", action: {currentSearchObj: searchObj, currentSearchTerm: searchTerm}}
    }
  )
  
}