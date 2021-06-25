const router = require('express').Router();
const { Reservation,User,Classes } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/reservations', async (req, res) => {
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
//withAuth
  router.post('/reservations', withAuth, async (req, res) => {
    try {
      const newReservation = await Reservation.create({
        ...req.body,
        user_id: req.session.user_id,
        class_id
      });
      const reservations = newReservation.map((newReservation) => newReservation.get({ plain: true }));
  
      res.render('book',{
        reservations,
      }); 
      res.status(200).json(newReservation);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  //withAuth
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const reservationData = await Reservation.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!reservationData) {
        res.status(404).json({ message: 'No reservation found with this id!' });
        return;
      }
  
      res.status(200).json(reservationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;