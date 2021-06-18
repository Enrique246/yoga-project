const router = require('express').Router();
const { Classes,Reservation } = require('../../models');

// The `/api/classes` endpoint

// Excersie 23 API -13-ORM-
router.get('/classes', async (req, res) => {
  // find all classes
  try{
    const classesData = await Classes.findAll({
      include: [{ model: Reservation }],
    });

    res.status(200).json(classesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post('/', async (req, res) => {
//     try {
//       const newExample = await Example.create({
//         ...req.body
//       });
  
//       res.status(200).json(newExample);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

module.exports = router;