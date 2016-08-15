//creating squares for the canvas
var drawCanvas = function() {
  var canvas = document.querySelector('.canvas')

  for(i = 0; i < 600; i++){
     var canvasSquare = document.createElement('div');
     canvasSquare.className = 'canvasSquare';
     canvas.appendChild(canvasSquare);
     console.log(canvasSquare);
  }

  canvas.addEventListener('click', function(event){
    if(event.target.className === 'canvasSquare'){
      event.target.style.backgroundColor = brush;
    }
    else{
      return;
    }
  })
}
var brush;

var drawPallet = function(){
  var pallet = document.querySelector('.pallet');

  var colors = ['#ff0000', 'OrangeRed','LightCoral', '#ffa500', 'Gold', '#ffff00','LawnGreen', 'Lime', '#00ff00', 'MediumSpringGreen','Teal', '#0000ff', 'DodgerBlue', 'LightSkyBlue', 'MediumSlateBlue', '#800080', 'Indigo', '#fff', 'LightGrey', 'DarkGrey', 'Grey', 'DimGrey', '#000'];
  //console.log(colors);

  var currentColor = '';

  //this for loop creating divs inside your pallet div
  for(j = 0; j < colors.length; j++){
    var color = document.createElement('div');
    //var colorText
    color.className = 'color'
    color.style.backgroundColor = colors[j];
    pallet.appendChild(color);
    //console.log(color);
  }

  //this for loop adds eventListeners for the pallet divs
  var palletDivs = document.querySelectorAll('.pallet div');
  for(k = 0; k < palletDivs.length; k++){
    palletDivs[k].addEventListener('click', function(){
      currentColor = this.style.backgroundColor;

    });
  }

  //this for loop adds eventListeners for the canvas divs
  var canvasDivs = document.querySelectorAll('.canvasSquare');
  for(l = 0; l < canvasDivs.length; l++){
    canvasDivs[l].addEventListener('click', function(){
      this.style.backgroundColor = currentColor;
      this.style.borderColor = currentColor;
    })
  }
}
drawCanvas();
drawPallet();
