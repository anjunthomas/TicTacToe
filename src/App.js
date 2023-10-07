export default function Square() { // creating a component - a piece of reusable code that represents part of a user interface.
  return ( 
    //                  using fragments (<> to </>) to wrap multiple adjacent JSX elements
    <>  
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  
  );
}

// function is called a Square. 
  // export keyword makes this function accessible outside this file
  // default keyword tells other files using your code that it is the main function in file

// Second line returns a button
  // <button> is a JSX element
    // A JSX element is a combination of JavaScript code and HTML tags that describes what you would like to display
    // X is the text that is displayed inside of the button

