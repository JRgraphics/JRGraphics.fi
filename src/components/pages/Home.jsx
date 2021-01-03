import React from "react";

// Assets
import selfPortrait from "../../assets/images/selfportrait-min.jpg";

const Home = () => {
  return (
    <div className="home page fade-in">
      <div className="home__title"></div>
      <div className="home__profile">
        <img className="home__profile-image" src={selfPortrait} alt="profile" />
        <div className="home__profile-info">
          <div className="home__profile-info-row">__Jere Rantalainen</div>
          <div className="home__profile-info-row">__M.Sc. in Technology</div>
          <div className="home__profile-info-row">
            __Frontend Developer & Designer
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
