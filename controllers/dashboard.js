'use strict';

import animeStore from "../models/anime-store.js"

const dashboard = {
  createView(request, response) {
    
    const viewData = {
      title: "Playlist App Dashboard",
      lists: animeStore.getAllShows()
    };
    
    response.render('dashboard', viewData);
  },
};

export default dashboard;