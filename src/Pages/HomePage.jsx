import React from "react";
import HomepageContent from "../Components/HomePage/HomepageContent";
import HomepageHero from "../Components/HomePage/HomepageHero";

const HomePage = () => {
    window.scroll(0, 0);

  return (
    <div>
      <HomepageHero />
      <HomepageContent />
    </div>
  );
};

export default HomePage;
