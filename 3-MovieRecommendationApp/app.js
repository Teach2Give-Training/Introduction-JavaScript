// app.js
import { fetchMovies, getMovieDetails } from './api.js';
import { savePreferences, getPreferences } from './storage.js';
import { filterByGenre, filterByRating } from './filter.js';
import { displayMovies, displayMovieDetails, toggleTheme } from './ui.js';

// DOM elements
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const genreFilter = document.getElementById('genre-filter');
const ratingFilter = document.getElementById('rating-filter');
const themeToggle = document.getElementById('theme-toggle');

// Event listener for search button
searchButton.addEventListener('click', async () => {
  const query = searchInput.value;
  const movies = await fetchMovies(query);
  
  // Get user preferences and apply filters
  const preferences = getPreferences();
  let filteredMovies = movies;
  
  if (preferences.genre) {
    filteredMovies = filterByGenre(filteredMovies, preferences.genre);
  }
  
  if (preferences.rating) {
    filteredMovies = filterByRating(filteredMovies, preferences.rating);
  }

  displayMovies(filteredMovies);
});

// Event listener for theme toggle
themeToggle.addEventListener('click', toggleTheme);

// Event listener for setting preferences (e.g., on genre filter change)
genreFilter.addEventListener('change', (e) => {
  const preferences = getPreferences();
  preferences.genre = e.target.value;
  savePreferences(preferences);
});

// Event listener for rating filter change
ratingFilter.addEventListener('change', (e) => {
  const preferences = getPreferences();
  preferences.rating = parseFloat(e.target.value);
  savePreferences(preferences);
});

// Show movie details when a movie is clicked
window.viewDetails = async (id) => {
  const movie = await getMovieDetails(id);
  displayMovieDetails(movie);
};

// Close the movie details view
window.closeDetails = () => {
  document.getElementById('movie-details').innerHTML = '';
};
