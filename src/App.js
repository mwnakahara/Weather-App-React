//import { ButtonToolbar } from "react-bootstrap";
import "./App.css";
//import axios from "axios";

import Header from "./Header/Header";
import Section from "./Section/Section";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <div class="container">
        <Header />
        <Section />
        <Footer />
      </div>
    </div>
  );
}

export default App;
