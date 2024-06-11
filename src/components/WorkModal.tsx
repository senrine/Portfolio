import enLang from "./translations/en.json";
import frLang from "./translations/fr.json";

interface dataForm {
  name: string;
  description: string;
  technologies: Array<string>;
  longDescription: string;
  image: string;
  lien: string;
}

interface ModalProps {
  onClose: () => void;
  data: dataForm;
  en: boolean;
  fr: boolean;
}

export default function WorkModal({ onClose, data, en, fr }: ModalProps) {
  return (
    <div
      onClick={() => onClose()}
      className="fixed inset-0 flex items-center justify-center z-50 w-full overflow-y-auto"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-scroll bg-[#eeeeee] text-[#252424] rounded-lg p-6 z-50 flex flex-col items-center justify-center font-Roboto w-[80%]"
      >
        <button
          className="flex justify-center items-center ml-auto mb-4 font-semibold"
          onClick={() => onClose()}
        >
          x
        </button>

        <h2 className="font-Syne text-[20px] lg:text-[26px] font-medium mb-2">
          {data.name}
        </h2>
        <img className="mb-2" src={`/images/${data.image}.svg`} alt="" />
        <p className="text-[14px] lg:text-[18px] mb-4 text-center  font-Syne">
          {data.longDescription}
        </p>
        <p className="text-[14px] lg:text-[16px] mb-4 text-center">
          {(en && enLang["workModal.tech"].defaultMessage) ||
            (fr && frLang["workModal.tech"].defaultMessage)}
          {data.technologies.map((tech, id) => (
            <span className="font-semibold  font-Syne" key={id}>
              {tech}
              {id === data.technologies.length - 1 ? "." : ", "}{" "}
            </span>
          ))}
        </p>
        <a
          target="_blank"
          className="text-[12px] lg:text-[14px] mb-4 font-medium"
          href={data.lien}
        >
          {(en && enLang["workModal.link"].defaultMessage) ||
            (fr && frLang["workModal.link"].defaultMessage)}
        </a>
      </div>
    </div>
  );
}
