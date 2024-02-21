'use strict';

import animeStore from '../models/anime-store.js';

const list = {
  createView(request, response) {
    const listId = request.params.id;
    
    const viewData = {
      title: 'list',
      singlelist: animeStore.getlist(listId)
    };

    response.render('list', viewData);
  },
};

export default list;