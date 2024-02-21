'use strict';

import JsonStore from './json-store.js';

const animeStore = {

  store: new JsonStore('./models/anime-store.json', { anime_shows: [] }),
  collection: 'anime-collection',
  array: 'shows',

  getAllShows() {
    return this.store.findAll(this.collection);
  },
  
//   getShow(id) {
//     return this.store.findOneBy(this.collection, (playlist => playlist.id === id));
// },

};

export default animeStore;