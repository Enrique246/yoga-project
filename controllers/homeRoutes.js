const router = require('express').Router();
const { Reservations,Classes,User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in,
      home: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/book", async (req, res) => {
  try {
    const schedule = [
      {
        day: "Monday",
        teacher: "Andres",
        availableSpots: ["spot one", "spot two"],
      },
      {
        day: "Tuesday",
        teacher: "Andres",
        availableSpots: ["spot one", "spot two"],
      },
      {
        day: "Wednesday",
        teacher: "Andres",
        availableSpots: ["spot one", "spot two"],
      },
    ];

    res.render("book", {schedule,
      loggedIn: req.session.logged_in,
      book: true
    })
  } catch (err) {
    res.status(500).json(err)
  }
});
// router.get('/book ', async (req, res) => {
//    try {
//     const classesData = await Classes.findByPk(req.params.id, {
//       include: [
//         {
//           model: Class,
//         },
//       ],
//     });
//     const classes = classesData.get({ plain: true });
//     res.render('book', {
//       ...classes,
//       logged_in: req.session.logged_in,
//       book: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    // const userData = await User.findByPk(req.session.user_id, {
    //   attributes: { exclude: ['password'] },
    //   include: [{ model: Reservations }],
    // });
    // const user = userData.get({ plain: true });
    res.render('profile', {
      // ...user,
      logged_in: true,
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
    logged_in: req.session.logged_in,
    login: true
  });
});

module.exports = router;