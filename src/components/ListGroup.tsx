import { useState } from "react";

function ListGroup() {
  // let is for variables, const is for constants
  let items = ["New York", "Tokyo", "London", "Paris", "Madrid"];
  // items = [];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // declare that a variable will get its value from a function using = () => {} syntax
  const getMessage = () => {
    items.length === 0 && <p>No items found...</p>;
    // items.length === 0 ? <p>No items found...</p> : null;
    // Instead of using a ternary operator, returning null
    // use AND, which is shorthand for the same thing and returns false
  };

  return (
    // empty angle brackets wrapping components creates a fragment, i.e. <div><div/>
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map(
          (
            item,
            index // .map method can act as a replacement for loops
          ) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              // onClick={() => console.log(item, index)}
              // below will give a "SyntheticBaseEvent" object,
              // a wrapper around the BaseEvent class
              onClick={() => {
                setSelectedIndex(index);
              }}
              // unlike the use of getMessage, we are only referring to the function
              // not getting its output directly
            >
              {item}
            </li>
          )
        )}
      </ul>
    </>
  );

  // brackets in return to allow multi-line return
  // component can only return 1 element
  // to work around this, wrap multiple elements in a div
}

export default ListGroup;
