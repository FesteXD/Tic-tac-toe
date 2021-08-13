const startButton = document.getElementById('start-button');
const start = document.getElementById('start');
const theGame = document.getElementById('theGame');
const names = document.getElementById('names')
const submit = document.getElementById('submit')
const one = document.getElementById('first')
const two = document.getElementById('second')
const board = document.getElementById('board')
const field = document.querySelectorAll('.field')

const Player = (name, mark) => {
  const getName = () => name;
  const getMark = () => mark
  
  return {
    getName,
    getMark
  }
}

  startButton.addEventListener('click', () => {
  startButton.style.display = "none";
  names.style.display = "flex";
});

submit.addEventListener('click', () => {
  if (one.value != '' && two.value != '') {
    names.style.display = 'none';
    theGame.style.display = 'block';
    
    
  }
  else alert('Input names please')
}); 
console.log(one.value)



const gameBoard = (() => {
  let gameBoardArray = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
  
  const renderBoard = () => {
    for (let i = 0; i < gameBoardArray.length; i++) {
      let index = gameBoardArray[i];
      field[i].textContent = index;
    }
  }
  let turn = () => {
    let counterX = 0
    for (let i = 0; i < gameBoardArray.length; i++) {
      if (gameBoardArray[i] === 'X') counterX++;
    }
    let counterO = 0
    for (let i = 0; i < gameBoardArray.length; i++) {
      if (gameBoardArray[i] === 'O') counterO++;
    }
    
    if (counterX === counterO) return 'X'
    if (counterX > counterO) return 'O'
    if (counterX < counterO) return alert('bad')

    
  }
  
  

  const markBoard = (() => {
    for (let i = 0; i < field.length; i++) {
    let index = field[i];
    index.addEventListener('click', () => {
      if (index.textContent == '') {
        gameBoardArray.splice(i, 1, turn())
        renderBoard()
        game.checkState()
      }
    })
  }
})();

return {
  renderBoard,
  markBoard,
  gameBoardArray,
}
})();

const game = (() => {
    

  const addBlankDiv = () => {
    const blankDiv = document.createElement('div')
    blankDiv.setAttribute('id', 'blank-div')
    theGame.appendChild(blankDiv)
  }
  const addRestartButton = () => {
    const restartButton = document.createElement('button')
    restartButton.setAttribute('id', 'restart-button')
    restartButton.textContent = 'Restart'
    theGame.appendChild(restartButton)
    
    restartButton.addEventListener('click', () => {
      move = 0
      gameBoard.gameBoardArray.splice(0, 9, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined) 

      
      for (let i = 0; i < field.length; i++) {
    let index = field[i];
    index.textContent = ""
  }
      document.getElementById('blank-div').remove()
      document.getElementById('result').remove() 
      document.getElementById('restart-button').remove() 
    })
    
  }
  let move = 0
  

  const checkState = () => {
    const playerOne = Player(one.value, 'X');
    const playerTwo = Player(two.value, 'O');

    move++
    
    if (gameBoard.gameBoardArray[0] == 'X' && gameBoard.gameBoardArray[1] == 'X' && gameBoard.gameBoardArray[2] == 'X')  {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerOne.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
    }
    else if (gameBoard.gameBoardArray[3] == 'X' && gameBoard.gameBoardArray[4] == 'X' && gameBoard.gameBoardArray[5] == 'X')   {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerOne.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
      
    }
    else if (gameBoard.gameBoardArray[6] == 'X' && gameBoard.gameBoardArray[7] == 'X' && gameBoard.gameBoardArray[8] == 'X')   {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerOne.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
      
    }
    else if (gameBoard.gameBoardArray[0] == 'X' && gameBoard.gameBoardArray[3] == 'X' && gameBoard.gameBoardArray[6] == 'X')   {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerOne.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
      
    }
    else if (gameBoard.gameBoardArray[1] == 'X' && gameBoard.gameBoardArray[4] == 'X' && gameBoard.gameBoardArray[7] == 'X')   {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerOne.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
      
    }
    else if (gameBoard.gameBoardArray[2] == 'X' && gameBoard.gameBoardArray[5] == 'X' && gameBoard.gameBoardArray[8] == 'X')   {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerOne.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
      
    }
    else if (gameBoard.gameBoardArray[0] == 'X' && gameBoard.gameBoardArray[4] == 'X' && gameBoard.gameBoardArray[8] == 'X')   {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerOne.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
      
    }
    else if (gameBoard.gameBoardArray[2] == 'X' && gameBoard.gameBoardArray[4] == 'X' && gameBoard.gameBoardArray[6] == 'X')   {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerOne.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
      
    }
    
    else if (gameBoard.gameBoardArray[0] == 'O' && gameBoard.gameBoardArray[1] == 'O' && gameBoard.gameBoardArray[2] == 'O')  {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerTwo.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
      
    }
    else if (gameBoard.gameBoardArray[3] == 'O' && gameBoard.gameBoardArray[4] == 'O' && gameBoard.gameBoardArray[5] == 'O')  {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerTwo.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
      
    }
    else if (gameBoard.gameBoardArray[6] == 'O' && gameBoard.gameBoardArray[7] == 'O' && gameBoard.gameBoardArray[8] == 'O')  {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerTwo.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
      
    }
    else if (gameBoard.gameBoardArray[0] == 'O' && gameBoard.gameBoardArray[3] == 'O' && gameBoard.gameBoardArray[6] == 'O')  {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerTwo.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
      
    }
    else if (gameBoard.gameBoardArray[1] == 'O' && gameBoard.gameBoardArray[4] == 'O' && gameBoard.gameBoardArray[7] == 'O')  {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerTwo.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
      
    }
    else if (gameBoard.gameBoardArray[2] == 'O' && gameBoard.gameBoardArray[5] == 'O' && gameBoard.gameBoardArray[8] == 'O')  {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerTwo.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
      
    }
    else if (gameBoard.gameBoardArray[0] == 'O' && gameBoard.gameBoardArray[4] == 'O' && gameBoard.gameBoardArray[8] == 'O') {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerTwo.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
      
    }
    else if (gameBoard.gameBoardArray[2] == 'O' && gameBoard.gameBoardArray[4] == 'O' && gameBoard.gameBoardArray[6] == 'O')  {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `${playerTwo.getName()} won!`
      theGame.appendChild(div)
      addRestartButton();
      
    }     
    else  if (move == 9)  {
      addBlankDiv()
      let div = document.createElement('div')
      div.setAttribute('id', 'result')
      div.textContent = `Tie!`
      theGame.appendChild(div)
      addRestartButton();
    
    }
  }
  
  return {
    checkState
  }
})();










