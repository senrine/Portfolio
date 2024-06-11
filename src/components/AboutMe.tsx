import aboutMeFigure from "../assets/About Me.svg";
import star from "../assets/Star.svg";
import enLang from "./translations/en.json";
import frLang from "./translations/fr.json";

interface heroProps {
  en: boolean;
  fr: boolean;
}

export default function AboutMe({ en, fr }: heroProps) {
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
            {(en && enLang["about.firstTitle"].defaultMessage) ||
              (fr && frLang["about.firstTitle"].defaultMessage)}
          </h3>
          <hr className="w-2 h-2 border-2 rounded-full bg-[#F24CEB] border-[#252424]" />
        </div>
        <div className="flex flex-row justify-center lg:justify-start items-start mb-10">
          <h2 className="font-semibold font-Syne text-[20px] lg:text-[30px] mr:2 lg:mr-4">
            {(en && enLang["about.title"].defaultMessage) ||
              (fr && frLang["about.title"].defaultMessage)}
          </h2>
          <img src={star} alt="" />
        </div>
        <p className="max-lg:text-center text-[20px]">
          {(en && enLang["about.description"].defaultMessage) ||
            (fr && frLang["about.description"].defaultMessage)}
        </p>
      </div>
    </div>
  );
}
