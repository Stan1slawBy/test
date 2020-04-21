const express = require('express');
const apiAdapter = require('./apiAdapter');

require('dotenv').config();
const router = express.Router();
const api = apiAdapter(process.env.ONYX_PROXY);

router.get('/dashboards/account-manager', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/dashboards/seo', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/dashboards/social', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/clients/:id', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => {
        res.send(err)
    })
})

router.get('/clients', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/files', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/files/:id', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => {
        res.send(err)
    })
})

router.get('/facebook/ads', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/dashboards/social', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/facebook/ads/:id', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => {
        res.send(err)
    })
})

router.get('/geoiq', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/geoiq/:id', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => {
        res.send(err)
    })
})

router.get('/geoiq/:id/matched', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => {
        res.send(err)
    })
})

router.get('/geoiq/:id/unmatched', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => {
        res.send(err)
    })
})

router.get('/coop/keywords', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/coop/facebook', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/spend-audit', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/smartpixl', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.post('/smartpixl/visits', (req, res) => {
    api.post(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/smartpixl/search', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.post('/smartpixl/intelligence', (req, res) => {
    api.post(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.post('/smartpixl/export', (req, res) => {
    api.post(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.post('/chat-leads-report', (req, res) => {
    api.post(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/geoiq-report', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/premium/total-spend-by-profile', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/premium/get-campaign-creative', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/amazon/find', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/amazon/search', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/amazon/list', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

router.get('/get-daily-sem-spends', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    }).catch(err => res.send(err))
})

module.exports = router;