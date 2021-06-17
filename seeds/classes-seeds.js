const {Classes} = require ('../models');
const classesData=[
  {
    id:1,
    class_name: "Hatha Yoga",
    available:"Yes",
    scheduled:"Yes"
    
  },
  {
    id:2,
    class_name: "Ashtanga Yoga",
    available:"Yes",
    scheduled:"Yes"
    
  }
  
]

const seedClasses = ()=> Classes.bulkCreate(classesData);
module.exports=seedClasses;
