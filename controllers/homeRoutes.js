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

// router.get("/book", async (req, res) => {
//   try {
//     const schedule = [
//       {
//         id:1,
//         class_name: "Hatha Yoga",
//         date: "2021-06-24",
//         time: "12:00:00",
//         coach: "Andres",
//         available:5,
   
       
//       },
//       {
//         id:2,
//         class_name: "Ashtanga Yoga",
//         date: "2021-06-25",
//         time: "11:00:00",
//         coach: "Adolfo",
//         available:3,
       
//       },
   
//       {
//         id:3,
//         class_name: "Kundalini Yoga",
//         date: "2021-06-26",
//         time: "10:00:00",
//         coach: "Miranda",
//         available:4,
       
//       },
//       {
//         id:4,
//         class_name: "KBikram Yoga",
//         date: "2021-06-29",
//         time: "15:00:00",
//         coach: "Enrique",
//         available:6,
       
//       },
//       {
//         id:5,
//         class_name: "Aero Yoga",
//         date: "2021-06-30",
//         time: "09:00:00",
//         coach: "Andres",
//         available:2,
       
//       }
//     ];
//     res.render("book", {schedule,
//       loggedIn: req.session.logged_in,
//       book: true
//     })
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });
router.get('/book', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const classesData = await Classes.findAll( {
      include: Classes,
    });
    const classes = classesData.get({ plain: true });
    console.log(classes)
    res.render('book', {
      ...classes,
      logged_in: req.session.logged_in,
      book: true
    });
  } catch (err) {
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