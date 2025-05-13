// ui.js

// Display a list of movies in the UI
export const displayMovies = (movies) => {
  const movieList = document.getElementById('movie-list');
  movieList.innerHTML = '';  // Clear previous results
  movies.forEach((movie) => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
      <button onclick="viewDetails('${movie.imdbID}')">View Details</button>
    `;
    movieList.appendChild(movieElement);
  });
};

// Display detailed information for a selected movie
export const displayMovieDetails = (movie) => {
  const detailsContainer = document.getElementById('movie-details');
  detailsContainer.innerHTML = `
    <h2>${movie.Title}</h2>
    <p><strong>Year:</strong> ${movie.Year}</p>
    <p><strong>Genre:</strong> ${movie.Genre}</p>
    <p><strong>Plot:</strong> ${movie.Plot}</p>
    <button onclick="closeDetails()">Close</button>
  `;
};

// Toggle between dark and light themes
export const toggleTheme = () => {
  document.body.classList.toggle('dark-theme');
};
