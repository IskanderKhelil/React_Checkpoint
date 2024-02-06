import Button from "react-bootstrap/Button";
import Navigation from "./Navigation";
import Cards from "./Cards"
import "./App.css"

function App() {
  return (
    <>
      <p className="title">App react</p>

     <Navigation/>
     <Cards/>
     <Cards/>
     <Cards/>
      <Button variant="success">Success</Button>
    </>
  );
}

export default App;
