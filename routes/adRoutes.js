const express = require('express');
const router = express.Router();

const {
    createAd,
    checkAds,
    updateAd,
    deleteAd
} = require('../controllers/adsController');

router.route('/').get(checkAds).post(createAd);
router.route('/:id').delete(deleteAd).put(updateAd);

module.exports = router;