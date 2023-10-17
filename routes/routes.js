const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('wishlist');
});

 router.get('/wishlist', (req, res) => {
    res.render('wishlist');
});

router.get('/category', (req, res) => {
    res.render('category');
});
router.get('/login', (req, res) => {
    res.render('login');
});
router.get('/checkPage', (req, res) => {
    res.render('checkPage');
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

