export default function Board() { // creating a component - a piece of reusable code that represents part of a user interface.
  return ( 
    //                  using fragments (<> to </>) to wrap multiple adjacent JSX elements
    // added value prop to each square component rendered by Board component
    <>  
      <div className="board-row">
        <Square value = "1"/>
        <Square value = "2"/>
        <Square value = "3"/>
      </div>

      <div className="board-row">
        <Square value = "4"/>
        <Square value = "5"/>
        <Square value = "6"/>
      </div>
        
      <div className="board-row">
        <Square value = "7"/>
        <Square value = "8"/>
        <Square value = "9"/>
      </div>  
    </>
  );
}
function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
  }
  
  return (
    <button
      className="square"
      handleClick={onclick}
     >
      {value}
    </button>
  );

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

