import React from 'react'
const img = "https://image.tmdb.org/t/p/w500";

const Content = ({searched}) => {
  return(
    <> 
<div className="container-fluid row align-items-center">
{searched.map((movies)=> 
<div  className="card col-md-3 d-flex container-fluid" key={movies.id}>
<img src={`${img}${movies.poster_path}`} alt='movies'/>
 <p className="card-text">{movies.title}</p>
</div>
)}
  </div>
  </>
  )
}

export default Content
