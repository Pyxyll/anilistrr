"use strict";

import logger from "../utils/logger.js";
import JsonStore from "./json-store.js";

const animeStore = {
  store: new JsonStore("./models/anime-store.json", { animeCollection: [] }),
  collection: "animeCollection",
  array: "shows",

  getAllShows() {
    return this.store.findAll(this.collection);
  },

  getList(id) {
    return this.store.findOneBy(this.collection, (list) => list.id === id);
  },

  getShow(id) {
    const animeCollection = this.store.findAll(this.collection);
    for (const list of animeCollection) {
      const show = list.shows.find((show) => show.id === id);
      if (show) {
        return show;
      }
    }
    return null;
  },
};

export default animeStore;
