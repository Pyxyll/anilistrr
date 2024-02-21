'use strict';

import JsonStore from './json-store.js';

const animeStore = {

  store: new JsonStore('./models/anime.json', { playlistCollection: [] }),
  collection: 'anime_shows',
  array: 'genre',

  getAllPlaylists() {
    return this.store.findAll(this.collection);
  },
  
  getPlaylist(id) {
    return this.store.findOneBy(this.collection, (playlist => playlist.id === id));
},

};

export default animeStore;