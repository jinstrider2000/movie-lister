const imdb = require('imdb-api');
export const client = new imdb.Client({apiKey: "d7196e79"});
window.client = client;