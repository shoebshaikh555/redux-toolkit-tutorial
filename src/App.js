import React from "react";
import { DisplayPeople } from "./components/DisplayPeople";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";

export const App = () => {
  return (
    <>
      <Navbar />
      <UserDetails />
      <DisplayPeople />
    </>
  );
};
