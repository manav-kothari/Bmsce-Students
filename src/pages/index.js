import React from "react";

import HeroSection from "../components/HeroSection";
import EventsHomeScreen from "../screens/EventsHomeScreen";
import UpdatesSecondScreen from "../screens/UpdatesSecondScreen";
import NotesScreen from "../screens/NotesScreen";

const Home = () => {
  return (
    <>
      <HeroSection />
      <EventsHomeScreen id="events" />
      <UpdatesSecondScreen />
      <NotesScreen />
    </>
  );
};

export default Home;
