document.addEventListener("DOMContentLoaded", function() {
console.log('doc is loaded!')

console.log("i'm connected!");

function createGrid(grid){
  for(i = 0; i < grid.length; i++){
    var gridSquare = document.createElement("div");
    var gridMasterDiv = document.getElementsByClassName("grid")
    gridMasterDiv.appendChild(gridSquare);

  }
}
createGrid(10);
// var btn = document.querySelectorAll('button')[0];
// console.log('btn: ',btn);
//
// btn.addEventListener('click',function () {
//   document.body.style.background = 'green';
// });




// var btns = document.getElementsByClassName('buttonUp')

});
