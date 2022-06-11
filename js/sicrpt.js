const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const cont = document.querySelector(".cont");

box1.addEventListener("click", (eo) => {
  cont.classList.toggle("but1");
});
box2.addEventListener('click' , (eo) => {
  cont.classList.toggle('but2')  
})
box3.addEventListener('click' , (eo) => {
    cont.classList.toggle('but3')  
  })
