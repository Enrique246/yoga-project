const {User} = require ('../models');
const userData=[
  {
    id:1,
    name: "Miranda",
    email: "yes@gmail.com",
  },
  {
    id:2,
    name:"Enrique",
    email: "no@gmail.com",
    
  }
  
]

const seedUser = ()=> User.bulkCreate(userData);
module.exports=seedUser;