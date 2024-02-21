'use strict'

import logger from "./utils/logger.js";
import express from 'express';
const router = express.Router();

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import list from './controllers/list.js'
import about from './controllers/about.js';
import show from './controllers/show.js'

router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/list', list.createView);
router.get('/about', about.createView);
router.get('/list/:id', list.createView);
router.get('/show/:id', show.createView);


router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;