import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ComingSoon from "./screens/ComingSoon";
import EventScreen from "./screens/EventScreen";
import EventsHomeScreen from "./screens/EventsHomeScreen";
import NotesScreen from "./screens/NotesScreen";
import UpdateScreen from "./screens/UpdateScreen";
import UpdatesSecondScreen from "./screens/UpdatesSecondScreen";
import Home from "./pages";
import "./style.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <div style={{ background: "	#F2F2F2" }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Route path="/comingsoon" component={ComingSoon} exact />
        <Route path="/" component={Home} exact />
        <Route path="/events" component={EventsHomeScreen} exact />
        <Route path="/event/:id" component={EventScreen} exact />
        <Route path="/updates" component={UpdatesSecondScreen} exact />
        <Route path="/update/:id" component={UpdateScreen} exact />
        <Route path="/notes" component={NotesScreen} exact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
