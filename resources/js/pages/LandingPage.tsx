import React from "react";
import miroodles from "../../assets/miroodles-color-composition0.png";
import arrowRight from "../../assets/outline-arrow-small-right0.svg";
import rectangle from "../../assets/rectangle-421150.svg";
import sigil from "../../assets/sigil-removebg-preview-4-10.png";
import vector1 from "../../assets/vector-10.svg";
import vector2 from "../../assets/vector-20.svg";
import vector3 from "../../assets/vector-30.svg";
import "../../css/LandingPage.css";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="frame"></div>
      <div className="frame2"></div>
      <div className="rectangle-4"></div>

      <div className="text-container">
        <h1 className="manage-with-confidence">Manage with Confidence</h1>
        <h2 className="reserve-with-ease">Reserve with Ease</h2>
        <p className="description">
          Simplify the booking process with a user-friendly interface.
          <br />
          Access real-time availability of facilities and equipment.
          <br />
          Designed to streamline event planning for students, staff, and administrators.
          <br />
          Keep track of reservations with automated notifications and updates.
        </p>
      </div>
      
      <img className="outline-arrow-small-right" src={arrowRight} alt="Arrow" />
      <div className="outline-mail"></div>
      <div className="outline-phone-call"></div>
      <img className="rectangle-42115" src={rectangle} alt="Rectangle" />
      
      <div className="frame-1171275953">
        <img className="vector-1" src={vector1} alt="Vector 1" />
        <img className="vector-3" src={vector3} alt="Vector 3" />
        <img className="vector-2" src={vector2} alt="Vector 2" />
        <img
          className="sigil-removebg-preview-4-1"
          src={sigil}
          alt="Sigil"
        />
        <div className="prfs">PRFS</div>
        <img
          className="miroodles-color-composition"
          src={miroodles}
          alt="Miroodles Composition"
        />
        <div className="rectangle-5"></div>
        <a href="/LogInPage" className="proceed-to-login">
          Proceed to login
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
