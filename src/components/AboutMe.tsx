import aboutMeFigure from "../assets/About Me.svg";
import star from "../assets/Star.svg";

export default function AboutMe() {
  return (
    <div
      id="AboutMe"
      className="flex flex-col max-lg:justify-center lg:flex-row items-center mt-16 mb-28"
    >
      <img
        className="w-[80%] max-lg:mb-20 lg:w-[50%] lg:mr-20"
        src={aboutMeFigure}
        alt=""
      />
      <div className="flex flex-col font-Roboto text-[#252424]">
        <div className="flex flex-row justify-center lg:justify-start items-center mb-4">
          <h3 className="mr-2 text-[18px] lg:text-[26px] font-medium">
            About Me
          </h3>
          <hr className="w-2 h-2 border-2 rounded-full bg-[#F24CEB] border-[#252424]" />
        </div>
        <div className="flex flex-row justify-center lg:justify-start items-start mb-10">
          <h2 className="font-semibold font-Syne text-[20px] lg:text-[30px] mr:2 lg:mr-4">
            I Design & Develop the best websites
          </h2>
          <img src={star} alt="" />
        </div>
        <p className="block mx-auto justify-center">
          Some description of my work, and work ethics, why I am the best and
          how could anyone trust me with their projects, lorem Ipsum, lorem
          Ipsum, Some description of my work, and work ethics, why I am the best
          and how could anyone trust me with their projects, lorem Ipsum, lorem
          Ipsum.
        </p>
      </div>
    </div>
  );
}
