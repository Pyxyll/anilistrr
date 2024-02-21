'use strict';

import logger from '../utils/logger.js';
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
  
  getShow(id) {
    return this.store.findOneBy(this.collection, (show => show.id === id));
  }

};

export default animeStore;