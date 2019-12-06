const axios = require('axios');
require('dotenv').config();

function getGif(api_key) {
  const api_key = process.env.API_KEY;
  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}=anime&limit=25&offset=0&rating=G&lang=en`)

}