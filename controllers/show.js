'use strict';

import logger from '../utils/logger.js';
import animeStore from '../models/anime-store.js';

const show = {
  createView(request, response) {
    const id = request.params.id;
    logger.debug('list id = ' + id);
    
    const viewData = {
      title: 'list',
      singleList: animeStore.getList(id)
    };
    response.render('show', viewData);
  },
};

export default show;