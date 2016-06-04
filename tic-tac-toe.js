
// var width=$(window).width()
  // grid[0] = $('#0').text();
  // console.log(grid[0]);
// $('.gridCell').click(function(){
//   var id = parseInt(id)
// })
// var cell = $('.gridCell');
var player = 1;

$('.gridCell').click( function() {
  var index = parseInt(this.id);
  console.log(index);
  //you can change the value in your grid based upon the data too
  // grid[index] = $(this).text();
  updateGrid($(this), player);

  playTurn(index);

})

function updateGrid(cell, player){
    $('#msg').empty();
if (cell.is(":empty")){
  if(player == 1){

    $('#msg').text("Player 2 move");
    cell.append("X");
    $('#player1').hide();
$('#player2').show();
  }
  else if (player == 2){
    $('#msg').append("Player 1 move")
    $('#player2').hide();
    $('#player1').show();
    cell.append("O");
  }
  // cell.append(player);
}
else{
  return false;
}
}
$('#resetBtn').click( function() {

restart();
})
//restart of tic-tac-toe
var grid = [0,0,0,0,0,0,0,0,0]; //declaring it all to be 0
 //Player move 1

// function restart(){
//    grid = [0,0,0,0,0,0,0,0,0]; //declaring it all to be 0
//   var player = 1;
// return false;
// }

function playTurn(index){


if (grid[index] || isGameOver()) {
  return false
} else {
  grid[index] = player;

  if(whoWon() == 2 || whoWon() == 1 ){
    alert("You've won");
    restart();
  }
  else if(whoWon() ==3){
    alert("It's a draw");
    restart();
  }
  else if (player === 1){
    player = 2;
  }
  else{
    player = 1;
  }
  return true
}

}

function isGameOver(){

if(whoWon()) return true;
return false;
}

function whoWon()
{
//top
if(grid[0] === 1 && grid[1]=== 1 && grid[2] === 1)return 1;
if(grid[0] === 2 && grid[1]=== 2 && grid[2] === 2)return 2;
//middle
if(grid[3] === 1 && grid[4]=== 1 && grid[5] === 1)return 1;
if(grid[3] === 2 && grid[4]=== 2 && grid[5] === 2)return 2;
//bottom
if(grid[6] === 1 && grid[7]=== 1 && grid[8] === 1)return 1;
if(grid[6] === 2 && grid[7]=== 2 && grid[8] === 2)return 2;
//left
if(grid[0] === 1 && grid[3]=== 1 && grid[6] === 1)return 1;
if(grid[0] === 2 && grid[3]=== 2 && grid[6] === 2)return 2;
//middle
if(grid[1] === 1 && grid[4]=== 1 && grid[7] === 1)return 1;
if(grid[1] === 2 && grid[4]=== 2 && grid[7] === 2)return 2;
//right
if(grid[2] === 1 && grid[5]=== 1 && grid[8] === 1)return 1;
if(grid[2] === 2 && grid[5]=== 2 && grid[8] === 2)return 2;
//horizontal 1
if(grid[0] === 1 && grid[4]=== 1 && grid[8] === 1)return 1;
if(grid[0] === 2 && grid[4]=== 2 && grid[8] === 2)return 2;
//horizontal 2
if(grid[2] === 1 && grid[4]=== 1 && grid[6] === 1)return 1;
if(grid[2] === 2 && grid[4]=== 2 && grid[6] === 2)return 2;

if((grid[0] == 1 || grid[0] == 2) && (grid[1] == 1 || grid[1] ==2) && (grid[2] == 1 || grid[2]  ==2) && (grid[3] == 1 || grid[3] ==2) &&
(grid[4] == 1 || grid[4]==2) && (grid[5] == 1 || grid[5] ==2) && (grid[6] == 1 || grid[6] == 2) && (grid[7] == 1 || grid[7] ==2) && (grid[8] == 1 || grid[8] ==2))
{
return 3;

}
return 0;

}

function restart()
{
  alert("Game Resetting");
  grid = [null, null, null, null, null, null, null, null, null]
  player = 1;
  $('.gridCell').empty();
  $('#player1').hide();
  $('#player2').hide();
  $('#msg').text("Board Restart");


}
