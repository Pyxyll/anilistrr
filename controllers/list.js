'use strict';

import logger from '../utils/logger.js';
import animeStore from '../models/anime-store.js';

const list = {
  createView(request, response) {
    const id = request.params.id;
    logger.debug('list id = ' + id);
    
    const viewData = {
      title: 'list',
      singleList: animeStore.getList(id)
    };

    response.render('list', viewData);
  },
};

export default list;