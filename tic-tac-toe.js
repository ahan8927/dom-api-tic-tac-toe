window.addEventListener("DOMContentLoaded", event => {

  const ticTacToe = document.getElementById('tic-tac-toe-board');

  turnCounter = 0;

  ticTacToe.addEventListener("click", event => {
    addImage = () => {
      newImage = document.createElement('img');
      let symbol = "/x.svg"
      turnCounter++;
      if (turnCounter % 2 === 0) {
        symbol = "/x.svg"
      } else {
        symbol = "/o.svg"
      }
      newImage.setAttribute('src', symbol)
      newImage.setAttribute('id', 'image')

      //addStorage here

      document.getElementById(event.target.id).appendChild(newImage);
    }

    if (event.target.id !== 'image') {
      addImage();
    }
  });

  //update storage

});
