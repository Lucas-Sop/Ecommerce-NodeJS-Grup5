const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('myBag');
});

router.get('/myBag', (req, res) => {
    res.render('myBag');
});

router.get('/404error', (req, res) => {
    res.render('404error');
});
router.get('/mockups', (req, res) => {
    res.render('mockups');
});
router.get('/more-from', (req, res) => {
    res.render('more-from');
});

module.exports = router;

