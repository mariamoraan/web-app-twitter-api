// const express = require('express');
// const router = express.Router();
// const controllers = require('./../controllers/controllers');

import express from 'express';
const router = express.Router();
import twitterInfo from  './../controllers/controllers.js';

// router.get('/say-something', saySomething);
router.get('/twitter-info', twitterInfo);

export default router;