import emailjs from "emailjs-com";
import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

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
        alert("Votre mail a bien été envoyé !");
        form.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Un problème s'est produit, votre mail n'a pas été envoyé.");
      });
  };
  return (
    <form
      onSubmit={handleSubmit}
      id="Contact"
      className="text-[#252424] font-Roboto mt-16 w-full"
    >
      <div className="flex flex-row justify-center md:justify-start items-center mb-8 lg:mb-16">
        <h3 className="mr-2 text-[20px] lg:text-[26px] font-medium">Contact</h3>
        <hr className="w-2 h-2 border-2 rounded-full bg-[#F24CEB] border-[#252424]" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start w-full text-[14px] md:text-[16px] lg:text-[20px]">
        <div className="flex flex-col w-full md:w-[40%] md:mr-2">
          <label className="font-medium pl-1 block mb-2">Nom</label>
          <input
            type="text"
            name="name"
            className="py-3 px-2 w-full h-[40px] md:h-[52px] rounded-md bg-transparent border border-[#252424] mb-4 md:mb-10"
          ></input>

          <label className="font-medium pl-1 block mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="py-3 px-2 w-full h-[40px] md:h-[52px] rounded-md bg-transparent border border-[#252424] max-md:mb-4"
          ></input>
        </div>
        <div className="flex flex-col w-full md:w-[40%] md:ml-2">
          <label className="font-medium pl-1 block mb-2">Message</label>
          <textarea
            name="message"
            className="py-3 px-2 w-full h-[100px] md:h-[180px] rounded-md bg-transparent border border-[#252424] resize-none"
          ></textarea>
        </div>
      </div>
      <button className="w-[140px] py-2 lg:w-[180px] border rounded-full border-[#222831] bg-[#C9F129] font-medium shadow-md hover:shadow-transparent shadow-[#22283160] block ml-auto mt-8">
        Envoyer
      </button>
    </form>
  );
}
