const router = require('express').Router();
const controller = require('./national.controller');
const methodNotAllowed = require('../../../errors/methodNotAllowed');

router
    .route('/')
    .get(controller.list)
    .all(methodNotAllowed);

router
    .route('/:id')
    .get(controller.read)
    .all(methodNotAllowed);

module.exports = router;