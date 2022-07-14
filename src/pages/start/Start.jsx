import React, { useEffect } from "react";
import "./start.css";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import StartMusic from "../../assets/audios/start.mp3";

const Start = ({ navigation }) => {
  const navigate = useNavigate();

  const [play, { stop }] = useSound(StartMusic, {
    // onend: () => {
    //   play();
    // },
  });

  useEffect(() => {
    play();

    // var didBlurSubscription = navigation.addListener("blur", () => stop());
    // var FocusSubscription = navigation.addListener("focus", () => play());

    return () => {
      stop();
    };
  }, [navigation, play, stop]);

  const handlePress = () => {
    console.log("pressed");
    navigate("/Intro");
  };

  return (
    <div className="BackGroundImage">
      <button className="loginButton" onClick={handlePress}>
        Start
      </button>
    </div>
  );
};

export default Start;
