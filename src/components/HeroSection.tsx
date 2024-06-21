import enLang from "./translations/en.json";
import frLang from "./translations/fr.json";

interface heroProps {
  en: boolean;
  fr: boolean;
}

export default function HeroSection({ en, fr }: heroProps) {
  return (
    <div
      id="HeroSection"
      className="relative w-full h-fit flex justify-center items-center"
    >
      <div className="flex flex-col items-center justify-center py-10 lg:py-24 text-[#252424] w-[60%]">
        <div className="flex flex-row items-center justify-center mb-4 whitespace-nowrap">
          <hr className="w-4 lg:w-10 rounded border-2 border-[#252424] mr-2"></hr>
          <h3 className="text-[18px] md:text-[20px] lg:text-[30px] font-semibold">
            {(en && enLang["hero.greeting"].defaultMessage) ||
              (fr && frLang["hero.greeting"].defaultMessage)}
          </h3>
        </div>
        <h1 className="font-Syne text-[34px] lg:text-[64px] font-semibold text-center mb-8">
          {(en && enLang["hero.title"].defaultMessage) ||
            (fr && frLang["hero.title"].defaultMessage)}{" "}
        </h1>
        <p className="text-center text-[14px] md:text-[20px] text-[#31363F80]">
          {(en && enLang["hero.description"].defaultMessage) ||
            (fr && frLang["hero.description"].defaultMessage)}
        </p>
        <div className="w-full mt-20 flex flex-col lg:flex-row justify-center items-center text-[#222831] text-[16px] md:text-[20px]">
          <a
            href="#Contact"
            className=" block text-center relative max-lg:mb-8 w-[180px] lg:mr-10 py-3 lg:w-[220px] border rounded-full border-[#222831] bg-[#C9F129] font-semibold shadow-md shadow-[#22283160] hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-in-out"
          >
            {(en && enLang["hero.contact"].defaultMessage) ||
              (fr && frLang["hero.contact"].defaultMessage)}
          </a>
          <a
            href="#MyWork"
            className=" block text-center py-3 w-[180px] lg:w-[220px] border rounded-full border-[#222831] font-semibold shadow-md shadow-[#22283160] hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-in-out"
          >
            {(en && enLang["hero.projects"].defaultMessage) ||
              (fr && frLang["hero.projects"].defaultMessage)}
          </a>
        </div>
      </div>
    </div>
  );
}
