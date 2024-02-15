'use strict';


const about = {
  createView(request, response) {
    
    const viewData = {
      title: "Playlist App Dashboard"
    };
    
    response.render('about', viewData);
  },
};

export default about;