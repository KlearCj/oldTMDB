const axios = require("axios");
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTliZjEwYzRiOWRhNTgzNDYzNzdiZWQ5MzYzZTk1OCIsInN1YiI6IjYyZjNkZjk1ZGI3MmMwMDA3ZmNlN2FmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d09yJD3AxhzNCLnGmEjGqHWE9RyeV1urpXCf_VSSlgI";
const apiUrl = "https://api.themoviedb.org/3";

class TvShows {
  static async getPopTvShows() {
    try {
      const respuesta = await axios.get(`${apiUrl}/tv/popular`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { data: respuesta.data, err: false };
    } catch (err) {
      console.log(err);
    }
  }

  static async getTvDetails(id) {
    try {
      const respuesta = await axios.get(`${apiUrl}/tv/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { data: respuesta.data, err: false };
    } catch (err) {
      console.log(err);
    }
  }

  static async getTvGenres() {
    try {
      const respuesta = await axios.get(`${apiUrl}/genre/tv/list`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          language: "es-MX",
        },
      });
      return { data: respuesta.data, err: false };
    } catch ({ err }) {
      console.log(err);
    }
  }
}

module.exports = TvShows;
