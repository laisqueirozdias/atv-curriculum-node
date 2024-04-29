const express = require('express');
const router = express.Router();
const resumeController = require('../controller/resumeController');

router.get('/resume/all', resumeController.getAllCurriculum);

module.exports = router;