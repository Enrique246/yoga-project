const {User} = require ('../models');
const userData=[
  {
    id:1,
    name: "Miranda",
    email: "yes@gmail.com",
    age: 29,
    gender: "Female",
    password: "12345",
  },
  {
    id:2,
    name:"Enrique",
    email: "no@gmail.com",
    age: 30,
    gender: "Male",
    password: "12345",
  },
  
]

const seedUser = ()=> User.bulkCreate(userData);
module.exports=userData;