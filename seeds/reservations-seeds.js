const {Reservation} = require ('../models');
const reservationData=[
  {
    id:1,
    user_id: 1,
    class_id: 1,
  },
  {
    id:2,
    user_id:2,
    class_id: 2,
    
  }
  
]

const seedReservation = ()=> Reservation.bulkCreate(reservationData);
module.exports=reservationData;