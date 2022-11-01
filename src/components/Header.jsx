import axios from 'axios';
import React, { useState } from 'react'
import Content from './Content';


const Header = () => {
  const [query, setQuery] = useState("")
  const [searchedMovies, setSearchedMovies] = useState([])

 const handleSearch=(e)=>{
  e.preventDefault();
  setQuery(e.target.value)
  axios.get(`/api/movie/search?query=${e.target.value}`)
  .then(res=> setSearchedMovies(res.data.results))
 } 
  return (
<>
    <div className='container-fluid'>
    <form className="d-flex" role="search">
        <input value={query} className="form-control me-2" type="search" placeholder="Search a movie/tvshow" onChange={handleSearch}/>
        <i className="bi bi-search-heart"></i>
      </form>
    </div>
    <Content searched={searchedMovies}/> 
    </>
  )
}

export default Header