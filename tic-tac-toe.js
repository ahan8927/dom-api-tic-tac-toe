window.addEventListener("DOMContentLoaded", event => {
  let title = document.getElementById("game-status");
  if(localStorage.getItem("title") === null){
    localStorage.setItem("title", "Tic-Tac-Toe!");
  }
  
  title.innerHTML = localStorage.getItem("title");

  //run computer move first -- check if x or o then input as necessary
  // random true / false? if true computer is x & places first move
  // let computerMove = function(){

  // }
  // computerMove();

  
  const ticTacToe = document.getElementById('tic-tac-toe-board');
  
  
  let updateStorage = () => {
    ticTacToe.addEventListener("click", event1 => {
      addImage = () => {
        let symbol = "/x.svg"
        let xArr = JSON.parse(localStorage.getItem("xArr"));
        let oArr = JSON.parse(localStorage.getItem('oArr'));

        let setArr = function () {
          if ((xArr.length + oArr.length) % 2 === 0) {
            symbol = "/x.svg"
            xArr.push(Number(event1.target.id[7]))
            xStr = JSON.stringify(xArr)
            localStorage.setItem('xArr', xStr);
          } else {
            symbol = "/o.svg"
            oArr.push(Number(event1.target.id[7]))
            oStr = JSON.stringify(oArr)
            localStorage.setItem('oArr', oStr);
          }

          let key = event1.target.id
          localStorage.setItem(key, symbol);
        }

        if (xArr === null || oArr === null) {
          initialStr = JSON.stringify([]);
          localStorage.setItem('xArr', initialStr);
          localStorage.setItem('oArr', initialStr);
          addImage();
        } else {
          setArr();
        }
      }

      if ((event1.target.id !== 'image') && (title.innerHTML === "Tic-Tac-Toe!")) {
        addImage();
        actions();
        //computerMove();
        location.reload();

        setTimeout(gameStatus(), 0);

      }
    });
  }

  //show Storage.
  let showStorage = () => {
    let squares = document.querySelectorAll(".square");
    let ticTacArray = [];
    squares.forEach(square => {
      let value = localStorage.getItem(square.id);
      if (value !== null) {
        newImage = document.createElement('img');

        newImage.setAttribute('src', value)
        newImage.setAttribute('id', 'image')

        square.appendChild(newImage);
        ticTacArray.push()
      }
    });
    // document.getElementById(event1.target.id).appendChild(newImage);
  }

  //newGame
  let actions = () => {
    
    let button = document.querySelectorAll(".actions > button");
    console.log(button[0]);
    if(title.innerHTML === "Tic-Tac-Toe!"){
      button[0].setAttribute("disabled", "true");
      button[1].removeAttribute("disabled");
    }
    else{
      button[0].removeAttribute("disabled");
      button[1].setAttribute("disabled", 'true');
    }
    button[0].addEventListener("click", eve => {
        localStorage.clear();
        location.reload();
    });
    button[1].addEventListener("click", eve => {
      let xArr = JSON.parse(localStorage.getItem("xArr"));
      let oArr = JSON.parse(localStorage.getItem('oArr'));
      if((xArr.length + oArr.length) % 2 === 0){
        localStorage.setItem("title", "O's Win!!");
      }
      else{
        localStorage.setItem("title", "X's Win!!");
      }
      location.reload();
    });
    /*
      let _ = document.querySelectorAll(".actions");

        eve.target.value === _[3].inner

    */
    //eve.target.value === 
  }

  let gameStatus = () => {
    let xArr = JSON.parse(localStorage.getItem("xArr"));
    let oArr = JSON.parse(localStorage.getItem("oArr"));
    let connected = 0;
    let winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    
    //Change Title
    for (let i = 0; i < winConditions.length; i++) {
      if (xArr.includes(winConditions[i][0]) && xArr.includes(winConditions[i][1]) && xArr.includes(winConditions[i][2])) {
        localStorage.setItem("title", "X's Win!!");
        return;
      }

      if (oArr.includes(winConditions[i][0]) && oArr.includes(winConditions[i][1]) && oArr.includes(winConditions[i][2])) {
        localStorage.setItem("title", "O's Win!!");
        return;
      }
    }

    if(xArr.length + oArr.length === 9){
      localStorage.setItem("title", "It is a tie!");
    }
  }

  updateStorage();
  showStorage();
  actions();
});

/*
x
[ ['', ''] , ['', ''] ,[0, 2],
  [1, 0] , [1, 1] ,[1, 2],
  [2, 0] , [2, 1] ,[2, 2]
]
xarr

//

oarr
1 -- row 1 (0, 1, 2) array.every(func = () => {loop through 0,1,2}
2 -- row 2 (3,4,5) "345"
3 -- row 3 (6,7,8)
4 -- col 1 (0,3,6)
5 -- col 2 (1,4,7)
6 -- col 3 (2,5,8)
7 -- diag 1 (1,4,8)
8 -- diag 2 (2,4,6)

*/

/*
whenever we click a space, we push that onto an arry and remove it from 'potential move' array
generate random number from 0 to length of array
inserts into the position
let random = Math.floor(Math.rand() * Math.floor(arr.length));
check game status after computer move
*/
