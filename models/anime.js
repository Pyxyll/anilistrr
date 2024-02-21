'use strict';

import JsonStore from './json-store.js';

const animeStore = {

  store: new JsonStore('./models/anime.json', { anime_shows: [] }),
  collection: 'anime_shows',
  array: 'anime_shows',

  getAllShows() {
    return this.store.findAll(this.collection);
  },
  
  getShow(id) {
    return this.store.findOneBy(this.collection, (playlist => playlist.id === id));
},

};

export default animeStore;