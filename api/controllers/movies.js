const Movies= require("../apiRequests/movies")

class MoviesCtrl{
    static async getPopMovies(req,res){
     const {data, err}=  await Movies.getPopularMovies()
  if(err) return data.sendStatus();
    res.send(data)
    };

     static async searchMovies(req,res){
       const {data, err} = await Movies.searchMovies(req.query.query)
      if(err) return res.sendStatus();
      res.send(data)
    } ;

    static async getMovieByGenre(req, res){
      const {id}= req.params
      const {data, err}= await Movies.getMoviesByGenre(id);
      if(err) return data.status_message; 
      res.send(data)
    };

    static async getGenres(req,res){
      const {data, err} = await Movies.getGenres();
      if(err) return data.sendStatus;
      res.send(data)
    }

    static async topRatep(req,res){
      const {data, err} = await Movies.topRatep();
      if(err) return data.sendStatus();
      res.send(data)
    }
}

module.exports= MoviesCtrl