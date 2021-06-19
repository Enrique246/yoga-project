const {Classes} = require ('../models');
const classesData=[
  {
    id:1,
    class_name: "Hatha Yoga",
    date: '2021-05-05',
    time: '12:00:00',
    coach: "Andres",
    available:5,

    
  },
  {
    id:2,
    class_name: "Ashtanga Yoga",
    date: "2021-06-05",
    time: '11:00:00',
    coach: "Adolfo",
    available:3,
    
  }
  
]

const seedClasses = ()=> Classes.bulkCreate(classesData);
module.exports=classesData;