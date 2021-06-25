const router = require('express').Router();
const { Reservations,Classes,User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.logged_in,
      home: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/book', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const classesData = await Classes.findAll();
    const classes = classesData.map(classData => classData.get({ plain: true }));
    console.log(classes)
    res.render('book', {
      classes,
      loggedIn: req.session.logged_in,
      book: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      include: Classes,
    });
    const user = userData.get({ plain: true });
    console.log(user)
    res.render('profile', {
      ...user,
      loggedIn: true,
      profile: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }
  res.render('login',{
    loggedIn: req.session.logged_in,
    login: true
  });
});

module.exports = router;