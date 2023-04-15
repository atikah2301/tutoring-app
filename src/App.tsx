import ListGroup from "./components/ListGroup";
// import component from dot, the current directory

// create the App as a component
function App() {
  // let is for variables, const is for constants
  let items = ["New York", "Tokyo", "London", "Paris", "Madrid"];
  // items = [];

  // event handler - print the selected item string to the console onSelectItem
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

// Vite uses "hmr" i.e. "Hot Module Replacement" for live updates to the website as we save
export default App;

// ctrl+D for multi-cursor editing..
// i.e. jump to the next instance of the highlighted text

// ctrl+P+M to open search bar for files

// ctrl+Shift+P to open command pallette, wrap with abbev
// to nest highlighted code in a div
