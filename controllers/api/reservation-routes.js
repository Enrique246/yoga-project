const router = require('express').Router();
const { Reservation,User,Classes } = require('../../models');


router.get('/reservation', async (req, res) => {
    // find all reservations
    try{
      const classesData = await Reservation.findAll({
        include: [{ model: User }, {Classes}],
      });
  
      res.status(200).json(classesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  