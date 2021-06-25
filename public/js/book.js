// const sweetButton = document.getElementById("bpush")
// console.log(sweetButton)
// sweetButton.addEventListener('click', function(){
//     const classId=sweetButton.parentNode.id;
//     console.log("LOLO");
//     console.log(classId);
// });

var buttons = document.getElementsByClassName("btn");
for (let i = 0, l = buttons.length; i < l; i++) {
  buttons[i].addEventListener('click', function(){
    const classId=buttons[i].parentNode.id;
    console.log("LOLO");
    console.log(classId);
    axios.post('/api/book/reservations', {
      class_id: (classId)
    });
  })
}