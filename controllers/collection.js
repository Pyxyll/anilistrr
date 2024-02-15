'use strict';

const collection = {
  createView(request, response) {
    
    const viewData = {
      title: "Playlist App Dashboard"
    };
    
    response.render('collection', viewData);
  },
};

export default collection;