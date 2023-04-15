import { useState } from "react";

// instead of hardcoding "items", we can make variables to store them
// these are not properties i.e. props, stored in an interface object
// this interface will be passed to the function ListGroup
interface ListGroupProps {
  items: string[];
  heading: string;
  // this property is a function that allows us to notify the App component
  // of when an item has been selected
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
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
    // brackets in return to allow multi-line return
    // component can only return 1 element
    // to work around this, wrap multiple elements in a div
    <>
      <h1>{heading}</h1>
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
                onSelectItem(item);
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
}

export default ListGroup;
