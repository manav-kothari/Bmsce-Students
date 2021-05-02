import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ComingSoon from "./screens/ComingSoon";
import EventScreen from "./screens/EventScreen";
import EventsHomeScreen from "./screens/EventsHomeScreen";
import NotesScreen from "./screens/NotesScreen";
import UpdateScreen from "./screens/UpdateScreen";
import UpdatesSecondScreen from "./screens/UpdatesSecondScreen";
import "./style.css";

const App = () => {
  return (
    <Router>
      <div style={{ background: "	#F8F8F8" }}>
        <Header></Header>
        <Route path="/" component={EventsHomeScreen} exact />
        <Route path="/events" component={EventsHomeScreen} exact />
        <Route path="/event/:id" component={EventScreen} exact />
        <Route path="/updates" component={UpdatesSecondScreen} exact />
        <Route path="/update/:id" component={UpdateScreen} exact />
        <Route path="/notes" component={NotesScreen} exact />
        <Route path="/comingsoon" component={ComingSoon} exact />

        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
