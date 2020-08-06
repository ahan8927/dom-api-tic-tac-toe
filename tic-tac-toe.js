window.addEventListener("DOMContentLoaded", event => {

  const ticTacToe = document.getElementById('tic-tac-toe-board');
  let updateStorage = () => {
    ticTacToe.addEventListener("click", event1 => {
      addImage = () => {
        let symbol = "/x.svg"
        let turnCounter = localStorage.getItem("turnCounter");
        if (turnCounter % 2 === 0) {
          symbol = "/x.svg"
        } else {
          symbol = "/o.svg"
        }

        let key = event1.target.id
        localStorage.setItem(key, symbol);

        if(localStorage.getItem("turnCounter") === null){
          localStorage.setItem("turnCounter", 1);
        }
        else{
          let turnCounter = Number(localStorage.getItem("turnCounter")) + 1;
          localStorage.setItem("turnCounter", turnCounter);
        }
        // document.getElementById(event1.target.id).appendChild(newImage);
      }
  
      if (event1.target.id !== 'image') {
        addImage();
        location.reload();
      }
    });
  }

  //show Storage.
  let showStorage = () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
      let value = localStorage.getItem(square.id);
      if(value !== null){
        newImage = document.createElement('img');

        newImage.setAttribute('src', value)
        newImage.setAttribute('id', 'image')
        
        square.appendChild(newImage);
      }
    });

    // document.getElementById(event1.target.id).appendChild(newImage);
  }

  //newGame
  let newGame = () => {
    let button = document.querySelector(".actions");
    button.addEventListener("click", eve => {
      localStorage.clear();
      location.reload();
    });
  }


  updateStorage();
  showStorage();
  newGame();
});
