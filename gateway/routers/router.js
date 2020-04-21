const express = require('express');
const onyxService = require('./onyxServiceProxy');
const onyxLegacyService = require('./onyxLegacyProxy');

const router = express.Router();

router.use((req, res, next) => {
    console.log("Called: ", req.path);
    next();
})

router.use(onyxService);
router.use(onyxLegacyService);

module.exports = router;