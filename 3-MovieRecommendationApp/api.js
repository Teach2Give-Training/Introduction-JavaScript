// api.js
const API_KEY = 'your_api_key_here';  // Use your own API key from OMDb or TMDb

// Fetch movies based on a search query
export const fetchMovies = async (query) => {
  const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search;  // Return the list of movies
};

// Fetch movie details by ID
export const getMovieDetails = async (id) => {
  const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
  const data = await response.json();
  return data;  // Return the full details of the movie
};
