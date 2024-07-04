import emailjs from "emailjs-com";
import { FormEvent, useState } from "react";
import enLang from "./translations/en.json";
import frLang from "./translations/fr.json";

interface contactProps {
  en: boolean;
  fr: boolean;
}

export default function Contact({ en, fr }: contactProps) {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) {
      newErrors.name = en ? "Name is required" : "Le nom est requis";
    }
    if (!email.trim()) {
      newErrors.email = en ? "Email is required" : "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = en ? "Invalid email format" : "Format d'email invalide";
    }
    if (!message.trim()) {
      newErrors.message = en ? "Message is required" : "Le message est requis";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    emailjs.init("ip03wBb784JPrUUKV");

    emailjs
      .send("service_oeoqk3g", "template_11ihy09", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then((response) => {
        console.log(
          "Votre mail a bien été envoyé !",
          response.status,
          response.text
        );
        alert(
          en ? "Your email has been sent!" : "Votre mail a bien été envoyé !"
        );
        form.reset();
        setErrors({});
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert(
          en
            ? "An error occurred, your email was not sent."
            : "Un problème s'est produit, votre mail n'a pas été envoyé."
        );
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="Contact"
      className="text-[#252424] font-Roboto mt-16 w-full"
    >
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start w-full text-[14px] md:text-[16px] lg:text-[20px]">
        <div className="flex flex-col w-full md:w-[40%] md:mr-2">
          <label className="font-medium pl-1 block mb-2">
            {(en && enLang["contact.name"].defaultMessage) ||
              (fr && frLang["contact.name"].defaultMessage)}
          </label>
          <input
            type="text"
            name="name"
            className={`py-3 px-2 w-full h-[40px] md:h-[52px] rounded-md bg-transparent border ${
              errors.name
                ? "border-red-500 mb-2"
                : "border-[#252424]  mb-4 md:mb-10"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mb-2">{errors.name}</p>
          )}

          <label className="font-medium pl-1 block mb-2">Email</label>
          <input
            type="email"
            name="email"
            className={`py-3 px-2 w-full h-[40px] md:h-[52px] rounded-md bg-transparent border ${
              errors.email
                ? "border-red-500 mb-2"
                : "border-[#252424] max-md:mb-4"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm max-sm:mb-2">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col w-full md:w-[40%] md:ml-2">
          <label className="font-medium pl-1 block mb-2">Message</label>
          <textarea
            name="message"
            className={`py-3 px-2 w-full h-[100px] md:h-[180px] rounded-md bg-transparent border ${
              errors.message ? "border-red-500 mb-2" : "border-[#252424]"
            } resize-none`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
      </div>
      <button className="w-[140px] py-2 lg:w-[180px] border rounded-full border-[#222831] bg-[#C9F129] font-medium shadow-md hover:shadow-transparent shadow-[#22283160] block ml-auto mt-8">
        {(en && enLang["contact.btn"].defaultMessage) ||
          (fr && frLang["contact.btn"].defaultMessage)}
      </button>
    </form>
  );
}
