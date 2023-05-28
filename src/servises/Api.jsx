import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd9390daba6ebc6ed6dca3d5ccaa12bef';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`, {
    params: { language: 'en-US' },
  });

  return data;
};

export const getSearchMovies = async query => {
  const { data } = await axios.get(`/search/movie?api_key=${API_KEY}`, {
    params: {
      query: `${query}`,
      include_adult: 'false',
      language: 'en-US',
      page: '1',
    },
  });

  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`, {
    params: { language: 'en-US' },
  });

  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );

  return data;
};

export const getReviewMovie = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`,
    { params: { language: 'en-US', page: '1' } }
  );
  return data;
};
