import figure1 from "../assets/Rectangle 17.svg";
import figure2 from "../assets/Rectangle 18.svg";
import figure3 from "../assets/Polygon 1.svg";

export default function HeroSection() {
  return (
    <div
      id="HeroSection"
      className="relative w-full h-fit flex justify-center items-center"
    >
      <img
        className="absolute w-9 md:w-14 left-2 md:left-10 lg:left-24"
        src={figure1}
        alt="figure1"
      />
      <img
        className="absolute w-4 md:w-6 right-0 md:right-10 top-24 lg:right-24 lg:top-32"
        src={figure2}
        alt="figure1"
      />
      <img
        className="absolute w-8 md:w-12 right-0 bottom-64 md:right-10 lg:right-24 lg:bottom-48"
        src={figure3}
        alt="figure1"
      />

      <div className="flex flex-col items-center justify-center py-24 text-[#252424] w-[60%]">
        <div className="flex flex-row items-center justify-center mb-4 whitespace-nowrap">
          <hr className="w-4 lg:w-10 rounded border-2 border-[#252424] mr-2"></hr>
          <h3 className="text-[18px] md:text-[20px] lg:text-[30px] font-semibold">
            Salut! C'est Nesrine👋
          </h3>
        </div>
        <h1 className="font-Syne text-[34px] lg:text-[64px] font-semibold text-center mb-8">
          Développeuse Fullstack, & UI UX Designer
        </h1>
        <p className="text-center text-[14px] md:text-[20px] text-[#31363F80]">
          Je crée des sites web personnalisés de la conception au codage, avec
          une expertise en design moderne et en développement efficace.
          Faites-moi confiance pour concrétiser vos projets en ligne.
        </p>
        <div className="w-full mt-20 flex flex-col lg:flex-row justify-center items-center text-[#222831] text-[16px] md:text-[20px]">
          <a
            href="#Contact"
            className=" block text-center relative max-lg:mb-8 w-[180px] lg:mr-10 py-3 lg:w-[220px] border rounded-full border-[#222831] bg-[#C9F129] font-semibold shadow-md shadow-[#22283160] hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-in-out"
          >
            Contactez moi
          </a>
          <a
            href="#MyWork"
            className=" block text-center py-3 w-[180px] lg:w-[220px] border rounded-full border-[#222831] font-semibold shadow-md shadow-[#22283160] hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-in-out"
          >
            Mes Projets
          </a>
        </div>
      </div>
    </div>
  );
}
