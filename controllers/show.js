'use strict';

import logger from '../utils/logger.js';
import animeStore from '../models/anime-store.js';

const show = {
  createView(request, response) {
    const id = request.params.id;
    logger.debug('list id = ' + id);
    
    const viewData = {
      title: 'show',
      singleList: animeStore.getList(id)
    };

    response.render('list', viewData);
  },
};

export default show;