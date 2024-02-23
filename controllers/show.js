'use strict';

import logger from '../utils/logger.js';
import animeStore from '../models/anime-store.js';

const show = {
  createView(request, response) {
    const showID = request.params.id;
    logger.debug('show id = ' + showID);
    
    const viewData = {
      title: 'show',
      singleShow: animeStore.getSingleShow(showID)
    };
    logger.debug(animeStore.getSingleShow(showID))
    response.render('show', viewData);
  },
};

export default show;