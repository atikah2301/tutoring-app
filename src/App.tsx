import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

// create the App as a component

// START HERE - the function below will run the Alert component

const handleButtonClick = () => {
  console.log("Button clicked");
};

function App() {
  // below, the colour prop of the Button component is optional
  // if it has been set to a default value in the component funciton
  // then it will be overridden here
  return (
    <div>
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}

      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a href="navbar" className="navbar-brand mb-0 h1">
            11+ Maths Tutoring
          </a>
        </div>
      </nav>

      <Button colour="success" onButtonClick={handleButtonClick}>
        Atikah's button!
      </Button>
    </div>
  );
}

// START HERE - the function below will run the ListGroup component

// function App() {
//   // let is for variables, const is for constants
//   let items = ["New York", "Tokyo", "London", "Paris", "Madrid"];
//   // items = [];

//   // event handler - print the selected item string to the console onSelectItem
//   const handleSelectItem = (item: string, index: number) => {
//     console.log(item, index);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// Vite uses "hmr" i.e. "Hot Module Replacement" for live updates to the website as we save
export default App;
