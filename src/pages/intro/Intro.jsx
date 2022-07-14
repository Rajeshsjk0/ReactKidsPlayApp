import React, { useEffect } from "react";
import Introriv from "../../assets/rive/intro.riv";
import { Layout, useRive } from "@rive-app/react-canvas";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import IntroMusic from "../../assets/audios/intro.mp3";

import "./intro.css";

const Intro = ({ navigation }) => {
  const navigate = useNavigate();

  const [play, { stop }] = useSound(IntroMusic);

  useEffect(() => {
    play();

    return () => {
      stop();
    };
  }, [navigation, play, stop]);

  const onStopHandler = () => {
    console.log("Animation has been completed go to After Intro Screen");
    navigate("/AfterIntro");
  };

  const { RiveComponent } = useRive({
    src: Introriv,
    autoplay: true,
    artboard: "Scene",
    layout: new Layout({ fit: "fill", alignment: "center" }),
    onLoop: onStopHandler,
  });

  const handleStartButton = () => {
    console.log("Pressed on Skip Intro go to After Intro Screen");
    navigate("/AfterIntro");
  };

  return (
    <div className="Container">
      <div>
        <RiveComponent className="IntroRive" />
      </div>
      <div>
        <button className="startButton" onClick={handleStartButton}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Intro;
