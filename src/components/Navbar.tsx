import lang from "../assets/Lang.svg";
import enLang from "./translations/en.json";
import frLang from "./translations/fr.json";

interface navbarProps {
  en: boolean;
  fr: boolean;
  changeLanguage: () => void;
}

export default function Navbar({ en, fr, changeLanguage }: navbarProps) {
  return (
    <div className="flex w-full justify-center lg:justify-end items-center font-Roboto text-[#31363F80] text-[12px] md:text-[16px]">
      <a
        className="mr-3 md:mr-16 hover:text-[#252424] whitespace-nowrap"
        href="#AboutMe"
      >
        {(en && enLang["navbar.about"].defaultMessage) ||
          (fr && frLang["navbar.about"].defaultMessage)}
      </a>
      <a className="mr-3 md:mr-16 hover:text-[#252424]" href="#MyWork">
        {(en && enLang["navbar.projects"].defaultMessage) ||
          (fr && frLang["navbar.projects"].defaultMessage)}
      </a>
      <a className="mr-3 md:mr-16 hover:text-[#252424]" href="#Contact">
        {(en && enLang["navbar.contact"].defaultMessage) ||
          (fr && frLang["navbar.contact"].defaultMessage)}
      </a>
      <a className="hover:text-[#252424]" href="/files/CV.pdf" target="_blank">
        {(en && enLang["navbar.resume"].defaultMessage) ||
          (fr && frLang["navbar.resume"].defaultMessage)}
      </a>
      <a
        onClick={() => {
          changeLanguage();
        }}
        className="flex items-center justify-center ml-auto"
      >
        <img className="w-3 lg:w-4 cursor-pointer" src={lang} />
      </a>
    </div>
  );
}
