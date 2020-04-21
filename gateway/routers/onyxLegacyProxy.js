const express = require('express');
const apiAdapter = require('./apiAdapter')
require('dotenv').config();

const router = express.Router();
const api = apiAdapter(process.env.ONYX_LEGACY_PROXY);

router.get('/insights', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(req.headers['x-access-token'] || req.headers['authorization'])
    }).catch(err => res.send(err))
})

router.get('/connected-tv-insights', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/reports/AmazonCtvReport', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/reports/AmazonDisplayReport', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/reports/FacebookAdInsightsReport', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/reports/GoogleAdwordsReport', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/reports/GoogleAnalyticsReport', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/reports/GoogleDv360Report', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/reports/KenshooCampaignReport', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/reports/MarchexCallsReport', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/reports/RokuWholesaleReport', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/reports/YahooGeminiReport', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/reports/YoutubeReport', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.put('/delete/:id', (req, res) => {
    api.put(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

module.exports = router;