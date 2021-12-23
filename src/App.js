import { Element } from "react-scroll";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./resources/styles.css";
import Featured from "./components/Featured";
import VenueInfo from "./components/VenueInfo";
import Highlights from "./components/Highlights";
import Princing from "./components/Princing";
import Location from "./components/Location";

const App = () => {
  return (
    <div className="App">
      <Element name="Top">
        <Header />
      </Element>
      <Element name="Featured">
        <Featured />
      </Element>
      <Element name="VenueInfo">
        <VenueInfo />
      </Element>
      <Element name="Highlights">
        <Highlights />
      </Element>
      <Element name="Princing">
        <Princing />
      </Element>
      <Element name="Location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
