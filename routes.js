import express from 'express';
const router = express.Router();

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import collection from './controllers/collection.js'
import about from './controllers/about.js';

router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/collection', collection.createView);
router.get('/about', about.createView);


router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;