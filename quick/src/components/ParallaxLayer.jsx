import React from "react";

const ParallaxLayer = ({ imageUrl, speed, position }) => {
  const handleParallax = (e) => {
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    position.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <img
      className="parallax-layer"
      src={imageUrl}
      alt=""
      onMouseMove={handleParallax}
      ref={position}
    />
  );
};

export default ParallaxLayer;
