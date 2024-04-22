import React from "react";
import github from "../../assets/github-logo.png";
import linkedin from "../../assets/linkedin-logo.png";
import twitter from "../../assets/twitter-logo.png";
import "./style.css";
const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#4776e6",
      }}
    >
      <div
        style={{ flex: 1, textAlign: "left", padding: "20px", color: "white" }}
      >
        &copy; 2024 ProfileForage. Made with ❤ by Prasad Jadhav.
      </div>
      <div style={{ flex: 1, textAlign: "right", padding: "15px" }}>
        <a href="https://github.com/JadhavPrasad21">
          <img
            src={github}
            alt="github"
            style={{ width: "30px", marginLeft: "10px" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/prasadj21/">
          <img
            src={linkedin}
            alt="linkedin"
            style={{ width: "30px", marginLeft: "10px" }}
          />
        </a>
        <a href="https://twitter.com/PJPrasad21">
          <img
            src={twitter}
            alt="twitter"
            style={{ width: "30px", marginLeft: "10px" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
