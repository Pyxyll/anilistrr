'use strict';

import logger from '../utils/logger.js';
import animeStore from '../models/anime-store.js';

const shows = {
  createView(request, response) {
    const showId = request.params.id;
    logger.debug('show id = ' + showId);
    
    const viewData = {
      title: 'Playlist',
      singlePlaylist: animeStore.getlist(showId)
    };

    response.render('list', viewData);
  },
};

export default shows;