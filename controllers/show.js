'use strict';

import logger from '../utils/logger.js';
import animeStore from '../models/anime-store.js';

const showController = {
  showView(request, response) {
    const id = request.params.id;
    logger.debug('show id = ' + id);
    
    const viewData = {
      title: 'Show Details',
      show: animeStore.getShow(id)
    };
    response.render('show', viewData);
  }
};

export default showController;