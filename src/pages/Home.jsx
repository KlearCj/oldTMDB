import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Grid from "../components/Grid";
import Login from "./Login";
import Movies from "./Movies";
import Tvshows from "./Tvshows";
import { Routes, Route } from "react-router";
import SignIn from "./SignIn";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [popTvShows, setPopTvShows] = useState([]);
  const [top, setTop] = useState([]);

  useEffect(() => {
    axios
      .get("/api/movie/popular")
      .then((res) => res.data)
      .then((pop) => setPopularMovies(pop.results));
    axios.get("/api/movie/genres").then((res) => setGenres(res.data.genres));
    axios.get("/api/tv/popular").then((res) => setPopTvShows(res.data.results));
    axios.get("/api/movie/top").then(res=> setTop(res.data.results))
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Grid popMovies={popularMovies} />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/log" element={<Login />} />
        <Route path="/movies" element={<Movies genres={genres} top={top}/>} />
        <Route path="/tvshows" element={<Tvshows poptv={popTvShows}  />} />
      </Routes>
    </>
  );
};

export default Home;
