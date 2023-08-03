import { handleRequest, apiUrl, apiKey } from '../constnats/apiConstants';

// Najpopularniejsze
export const getTrendingMovies = async () => {
  const url = `${apiUrl}trending/movie/day?api_key=${apiKey}`;
  return handleRequest(url);
};

// Wyszukiwarka
export const searchMovies = async keyword => {
  const url = `${apiUrl}search/movie?api_key=${apiKey}&query=${keyword}`;
  return handleRequest(url);
};

// Informacje szczegółowe
export const getMovieDetails = async movieId => {
  const url = `${apiUrl}movie/${movieId}?api_key=${apiKey}&movie_id=${movieId}`;
  return handleRequest(url);
};

// Obsada
export const getMovieCredits = async movieId => {
  const url = `${apiUrl}movie/${movieId}/credits?api_key=${apiKey}&movie_id=${movieId}`;
  return handleRequest(url);
};

// Recenzja
export const getMovieReviews = async movieId => {
  const url = `${apiUrl}movie/${movieId}/reviews?api_key=${apiKey}&movie_id=${movieId}`;
  return handleRequest(url);
};
