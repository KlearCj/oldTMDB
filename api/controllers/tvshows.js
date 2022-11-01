const TvShows = require("../apiRequests/tvshows");

class TvShowsCtrl {
  static async getPopTvShows(req, res) {
    const { data, err } = await TvShows.getPopTvShows();
    if (err) data.sendStatus();
    res.send(data);
  }

  static async getTvDetails(req, res) {
    const { id } = req.params;
    const { data, err } = await TvShows.getTvDetails(id);
    if (err) data.sendStatus();
    res.send(data);
  }

  static async getTvGenres(req, res) {
    const { data, err } = await TvShows.getTvGenres();
    if (err) return data.sendStatus;
    res.send(data);
  }
}

module.exports = TvShowsCtrl;
