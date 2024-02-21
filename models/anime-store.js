'use strict';

import JsonStore from './json-store.js';

const animeStore = {

  store: new JsonStore('./models/anime-store.json', { animeCollection: [] }),
  collection: 'animeCollection',
  array: 'shows',

  getAllShows() {
    return this.store.findAll(this.collection);
  },
  
  getList(id) {
    return this.store.findOneBy(this.collection, (list => list.id === id));
},

};

export default animeStore;