import React, { useState } from "react";
import Dogriv from "../../assets/rive/dog.riv";
import { useRive } from "@rive-app/react-canvas";
import useSound from "use-sound";
import DogMusic from "../../assets/audios/dog.mp3";

import "./dog.css";

const Dog = ({ navigation }) => {
  const [play, { stop }] = useSound(DogMusic);

  const { RiveComponent, rive } = useRive({
    src: Dogriv,
    autoplay: false,
    // onPause: () => {
    //   stop();
    // },
    // onPlay: () => {
    //   play();
    // },
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButton = () => {
    if (isPlaying) {
      rive && rive.pause();
      setIsPlaying(false);
      stop();
    } else {
      rive && rive.play();
      play();
      setIsPlaying(true);
    }
    console.log("pressed");
  };

  return (
    <div>
      <div>
        <RiveComponent
          className="DogRive"
          // onMouseEnter={() => rive && rive.play()}
          // onMouseLeave={() => rive && rive.pause()}
        />
      </div>
      <div>
        <button
          type="submit"
          className="playButton"
          onMouseDown={handlePlayButton}
        ></button>
      </div>
    </div>
  );
};

export default Dog;
