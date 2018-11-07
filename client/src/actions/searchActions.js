const imdb = require('imdb-api');
const client = new imdb.Client({apiKey: "d7196e79"});

export const loadSearchResults = (searchObj, searchTerm) => ({type: "LOAD_SEARCH_RESULTS", action: {currentSearchObj: searchObj, searchTerm: searchTerm}})