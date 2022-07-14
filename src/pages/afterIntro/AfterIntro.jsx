import React, { useEffect } from "react";
import AfterIntroriv from "../../assets/rive/afterintro.riv";
import { useRive } from "@rive-app/react-canvas";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import AfterIntroMusic from "../../assets/audios/afterintro.mp3";

import "./afterIntro.css";

const AfterIntro = ({ navigation }) => {
  const navigate = useNavigate();
  const [play, { stop }] = useSound(AfterIntroMusic);

  useEffect(() => {
    play();

    return () => {
      stop();
    };
  }, [navigation, play, stop]);

  const { RiveComponent } = useRive({
    src: AfterIntroriv,
    autoplay: true,
  });

  const handlePlayButton = () => {
    console.log("Go to Dog PlayScreen");
    navigate("/Dog");
  };

  return (
    <div className="Container">
      <div>
        <RiveComponent className="AfterIntroRive" />
      </div>
      <div>
        <button className="goToDogScreenButton " onClick={handlePlayButton}>
          DogScreen
        </button>
      </div>
    </div>
  );
};

export default AfterIntro;
