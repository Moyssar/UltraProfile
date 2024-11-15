import React from "react";

import Home from "../Home";
import Work from "../Work";
import Portfolio from "../portfolio";
import Profile from "../Profile";
import About from "../About";
import SocialMedia from "../SocialMedia";

const Index = () => {
  return (
    <div className="container">
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <SocialMedia />
    </div>
  );
};

export default Index;
