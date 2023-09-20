import React, { useState } from "react";

const HamburgerMenu = ({ photos }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "30px",
    position: "relative",
    cursor: "pointer",
  };

  const barStyles = {
    width: "30px",
    height: "4px",
    backgroundColor: "#9400D3",
    margin: "3px 0",
  };

  const windowStyles = {
    display: isOpen ? "flex" : "none",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "40px",
    left: "0",
    width: "225px",
    backgroundColor: "#4B0082",
    padding: "20px",
    border: "1px solid 	#9400D3",
  };

  const imageStyles = {
    width: "100%",
    maxWidth: "200px",
    marginBottom: "10px",
    cursor: "pointer",
  };

  return (
    <div style={menuStyles} onClick={toggleMenu}>
      <div style={barStyles}></div>
      <div style={barStyles}></div>
      <div style={barStyles}></div>
      <div style={windowStyles}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            style={imageStyles}
          />
        ))}
      </div>
    </div>
  );
};

export default HamburgerMenu;
