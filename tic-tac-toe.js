window.addEventListener("DOMContentLoaded", event => {

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

        // document.getElementById(event1.target.id).appendChild(newImage);
      }

      if (event1.target.id !== 'image') {
        addImage();
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
  let newGame = () => {
    let button = document.querySelector(".actions");
    button.addEventListener("click", eve => {
      localStorage.clear();
      location.reload();
    });
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

    for (let i = 0; i < winConditions.length; i++) {

      if (xArr.includes(winConditions[i][0]) && xArr.includes(winConditions[i][1]) && xArr.includes(winConditions[i][2])) {
        alert("X's win!");
      }

      if (oArr.includes(winConditions[i][0]) && oArr.includes(winConditions[i][1]) && oArr.includes(winConditions[i][2])) {
        alert("O's win!");
      }

    }
  }


  updateStorage();
  showStorage();
  newGame();
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
  });
	xArr.for(let i = 0; i < xArr.length; i++) {
		if (xArr[]
		if((xArr[i-1] === xArr[i]) || xArr[i][j - 1] === xArr[i][j]){

		}
	})

	1,2,
	1,2,3

	aple
	apple

	321
	123
*/
/*
for(xArr){
	for(winCond){
		if(winCond[j].includes(xArr[i]){
      xArr[i].includes(winCond[j])

		}
	}
}
*/
