import Card from '../commons/Card'

const Grid = ({popMovies}) => {
  return (
    <>
    <div className='container-fluid row align-items-center'>
    {popMovies.map((movie)=>
     <div className="col-md-3 card" key={movie.id}>
      <Card movie={movie}/>
      </div>
      )}
      </div>
    </>
  )
}

export default Grid