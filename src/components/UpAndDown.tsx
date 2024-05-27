import bigDownVector from "../assets/down_vector.svg";
import smallestDownVector from "../assets/down_vector1.svg";
import biggestDownVector from "../assets/down_vector2.svg";
import bigUpVector from "../assets/up_vector.svg";
import smallestUpVector from "../assets/up_vector1.svg";
import biggestUpVector from "../assets/up_vector2.svg";
import { useState } from "react";

interface UpAndDownProps {
  hrefUp: string;
  hrefDown: string;
}

export default function UpAndDown({ hrefUp, hrefDown }: UpAndDownProps) {
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(true);

  return (
    <a
      className="flex flex-col justify-between items-center lg:mb-28 mx-auto"
      onClick={() => {
        setUp(!up);
        setDown(!down);
      }}
      href={`${down ? hrefUp : hrefDown}`}
    >
      <img
        className="mb-2 w-4"
        src={`${down ? smallestDownVector : smallestUpVector}`}
        alt=""
      />
      <img
        className="mb-2 w-6"
        src={`${down ? bigDownVector : bigUpVector}`}
        alt=""
      />
      <img
        className="w-8"
        src={`${down ? biggestDownVector : biggestUpVector}`}
        alt=""
      />
    </a>
  );
}
