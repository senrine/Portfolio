export default function Navbar() {
  return (
    <div className="flex w-full justify-center lg:justify-end items-center font-Roboto text-[#31363F80] text-[12px] md:text-[16px]">
      <a
        className="mr-4 lg:mr-16 hover:text-[#252424] whitespace-nowrap"
        href="#AboutMe"
      >
        About Me
      </a>
      <a className="mr-4 lg:mr-16 hover:text-[#252424]" href="#MyWork">
        Projects
      </a>
      <a className="mr-4 lg:mr-16 hover:text-[#252424]">Contact</a>
      <a className="hover:text-[#252424]" href="/files/CV.pdf" target="_blank">
        Resume
      </a>
    </div>
  );
}
