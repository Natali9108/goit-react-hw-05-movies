import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd9390daba6ebc6ed6dca3d5ccaa12bef';

// export const getImages = async () => {
//   const { data } = await axios.get(
//     '/3/configuration?api_key=30415d4ffaf02abf587087795c9f4358'
//   );

//   return data;
// };

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`, {
    params: { language: 'en-US' },
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
  console.log(data);
  return data;
};

// export const getTrendingMovies = async () => {
//   const { data } = await axios.request(
//     'https://api.themoviedb.org/3/trending/movie/day',
//     options
//   );

//   return data;
// };

// export const getMovieDetails = async movieId => {
//   const { data } = await axios.request(
//     `https://api.themoviedb.org/3/movie/${movieId}`,
//     options
//   );

//   return data;
// };

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/movie/movie_id',
//   params: {language: 'en-US'},
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDQxNWQ0ZmZhZjAyYWJmNTg3MDg3Nzk1YzlmNDM1OCIsInN1YiI6IjY0NmI0ZGJmMmJjZjY3MDExYmY0NTc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PZEMQTvbZ4N5DdoHgmjy5jv9wXM9Ll_N7E5IJX4SsU0'
//   }
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
