import React from 'react'
const img = "https://image.tmdb.org/t/p/w500";

const Tvshows = ({poptv}) => {
  return (
    <div className='container-fluid row align-items-center'>
      {poptv.map((show)=> 
      <div key={show.id} className="card col-md-3 d-flex container-fluid"> 
        <img src={`${img}${show.poster_path}`} className="card-img-top" alt="img" />
        
         <p className="card-text">{show.title}</p>
    </div>
      )
    }
    </div>
  )
}

export default Tvshows