import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Constants
import { slides } from "../constants";
import { setBlur } from "../redux/actions/style";

const PosterZoom = ({ image = 0, onClose }) => {
  const dispatch = useDispatch();

  // State hooks
  const [fader, setFader] = useState("fade-in");

  // Handlers
  const handleOnClose = () => {
    setFader("fade-out");
    dispatch(setBlur(false));
    setTimeout(() => {
      onClose();
    }, 500);
  };

  useEffect(() => {
    dispatch(setBlur(true));
  }, []);

  return (
    <div
      className={"poster-zoom-container " + fader}
      onClick={() => handleOnClose()}
    >
      <div className="poster-zoom-bg"></div>
      <div className="poster-zoom-image">{slides[image].content}</div>
    </div>
  );
};
export default PosterZoom;
