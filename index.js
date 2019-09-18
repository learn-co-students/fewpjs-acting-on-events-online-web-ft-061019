// Your code here
let dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "green"

document.addEventListener("keydown", function(e) {
   if (e.key === "ArrowLeft") {
     moveDodgerLeft();
   } else if (e.key === "ArrowRight") {
   moveDodgerRight();
   }
 });

function moveDodgerLeft(params) {
   let leftNumbers = dodger.style.left.replace("px", "");
   let left = parseInt(leftNumbers, 10);
   
   if (left > 0) {
         dodger.style.left = `${left - 1}px`;
   }  
}

function moveDodgerRight(params) {
   let leftNumbers = dodger.style.left.replace("px", "");
   let left = parseInt(leftNumbers, 10);
   
   if (left < 361) {
         dodger.style.left = `${left + 1}px`;
   }    
}
