'use strict';

import animeStore from "../models/anime.js"

const dashboard = {
  createView(request, response) {
    
    const viewData = {
      title: "Playlist App Dashboard",
      playlists: animeStore.getAllShows()
    };
    
    response.render('dashboard', viewData);
  },
};

export default dashboard;