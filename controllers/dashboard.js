'use strict';

const dashboard = {
  createView(request, response) {
    
    const viewData = {
      title: "Playlist App Dashboard"
    };
    
    response.render('dashboard', viewData);
  },
};

export default dashboard;