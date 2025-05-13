// filter.js

// Filter movies by genre
export const filterByGenre = (movies, genre) => {
  return movies.filter(movie => movie.Genre.includes(genre));
};

// Filter movies by rating
export const filterByRating = (movies, rating) => {
  return movies.filter(movie => parseFloat(movie.imdbRating) >= rating);
};
