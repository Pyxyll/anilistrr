'use strict';

import logger from "../utils/logger.js";
import animeStore from "../models/anime-store.js"

const dashboard = {
  createView(request, response) {
        logger.info("Dashboard page loading!");
    const viewData = {
      title: "Playlist App Dashboard",
      lists: animeStore.getAllShows()
    };
    
    response.render('dashboard', viewData);
  },
};

export default dashboard;