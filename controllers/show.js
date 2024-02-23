'use strict';

import logger from '../utils/logger.js';
import animeStore from '../models/anime-store.js';

const show = {
  createView(request, response) {
    const id = request.params.id;
    logger.debug('show id = ' + id);
    logger.debug(animeStore.getShow(id));
    
    const viewData = {
      title: 'show',
      singleShow: animeStore.getShow(id),

    };
          logger.debug(animeStore.getShow(id))

    response.render('show', viewData);
  },
};

export default show;