'use strict';

const start = {
  createView(request, response) {
    const viewData = {
      title: "Welcome to the Playlist app!",
    };
    
    //logger.debug(viewData);
    response.render('start', viewData);   
  },
};

export default start;