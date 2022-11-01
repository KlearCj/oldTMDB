const axios = require("axios");
//const apiKey = "3e9bf10c4b9da58346377bed9363e958";
const apiUrl = "https://api.themoviedb.org/3";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTliZjEwYzRiOWRhNTgzNDYzNzdiZWQ5MzYzZTk1OCIsInN1YiI6IjYyZjNkZjk1ZGI3MmMwMDA3ZmNlN2FmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d09yJD3AxhzNCLnGmEjGqHWE9RyeV1urpXCf_VSSlgI";

class Movies {
  static async getPopularMovies() {
    try {
      const respuesta = await axios.get(`${apiUrl}/movie/popular`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return { data: respuesta.data, err: false };
    } catch ({ err }) {
      console.log(err);
    }
  };

  static async getMoviesByGenre(id) {
    try {
      const respuesta = await axios.get(`${apiUrl}/movie/${id}/similar`,
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      return {data: respuesta.data, err:false}
    } catch ({err}) {
      console.log(err);
    }
  };

  static async getGenres() {
    try {
      const respuesta = await axios.get(`${apiUrl}/genre/movie/list`,
      {
        headers: { Authorization: `Bearer ${token}` },
        params:{
          language: "es-MX"
        }
      })
      return {data: respuesta.data, err:false}
    } catch ({err}) {
      console.log(err);
    }
  };



static async searchMovies(name) {
  const params = new URLSearchParams([['query', name]])
    try {
      const respuesta = await axios.get(
        `${apiUrl}/search/movie`,
        {
          headers: { Authorization: `Bearer ${token}` },
          params
        }
      );
    return{data: respuesta.data, err: false}
    } catch (err) {
      console.log(err)
    }
  } 

  static async topRatep() {
      try {
        const respuesta = await axios.get(
          `${apiUrl}/movie/top_rated`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      return{data: respuesta.data, err: false}
      } catch (err) {
        console.log(err)
      }
    }

}

module.exports = Movies;
