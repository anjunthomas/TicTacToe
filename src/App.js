import { useState } from 'react';
export default function Board() { // creating a component - a piece of reusable code that represents part of a user interface.
  const [xIsNext, setXIsNext] = useState(true); // boolean flipped determining whether X is next or not
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function handleClick(i) {
    // To not override what is already in Square
    // return if value is present
    // or return if a winner detected, so no need to keep playing the game
    if(squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){ // if is next, then X appears onClick
      nextSquares[i] = 'X';
    } else{ // if false, then O appears
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  // checking winner status
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: " + winner;
  }else{
    status = "Next player: " + (xIsNext ? "X" : "O")
  }


  // creates an array with 9 elements
  // sets each of them to null
  // call around it declares a squares state variable that's initiaily set to that array

    // using fragments (<> to </>) to wrap multiple adjacent JSX elements
    // added value prop to each square component rendered by Board component
  return ( 
    
    <>   
      <div className = "status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value ={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value ={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value ={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
        
      <div className="board-row">
        <Square value ={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value ={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value ={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>  
    </>
  );
}

function calculateWinner(squares){
  const lines = [ // possible win conditions
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // in each sub array, for 1, 2, 3 points on square
  // check whether all 3 values are the same in each win condition
  // return the value that won
  for(let i = 0; i < lines.length; i++){
    const[a, b, c] = lines[i];
    if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
    return squares[a];
    }
  }
  return null;
  // if no winner detected yet, return nothing
}
// we want components to remember something? use state

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
  /*
  const [value, setValue ] = useState(null);  
  // value stores the value 
  // setValue is a function that can be used to change the value
  // null passed 1st, the square is empty!
  // value here starts off equal to null
  function handleClick() {
    setValue('X');
  }
  return (
    <button className="square">{value}</button>);
  */
}
// curly braces used to escape into JavaScript from JSK
  // reusable square component
    // Declaring a function called handleClick inside Square, adding onClick to props
// Square component is passed prop called value // (properties)



// function is called a Square. 
  // export keyword makes this function accessible outside this file
  // default keyword tells other files using your code that it is the main function in file

// Second line returns a button
  // <button> is a JSX element
    // A JSX element is a combination of JavaScript code and HTML tags that describes what you would like to display
    // X is the text that is displayed inside of the button

