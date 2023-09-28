import Typewriter from "typewriter-effect";
import avatar from "../public/portfolio/avatar4.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";
import Reveal from "./Reveal";
import RevealImages from "./RevealImages";

function Header({ setDarkMode, darkMode }) {
  return (
    <section className=" min-h-screen pb-6">
      <nav className="py-10 sm:mb-12 flex justify-between dark:text-white  ">
        <h1 className="text-xl font-burtons hidden sm:block">Mkhuzo</h1>
        <ul className="flex items-center justify-between w-full sm:w-fit md:justify-normal">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2l"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r flex items-center gap-1 from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="https://firebasestorage.googleapis.com/v0/b/resume-903bf.appspot.com/o/pdf%2Fupdated_resume.pdf?alt=media&token=fef1237e-d4a6-41f7-8be2-75a4510842b3&_gl=1*1rjgszj*_ga*MjEwMzU0NzU4MC4xNjc2NzIxODIy*_ga_CW55HF8NVT*MTY5NTg4MDM3NC40NC4xLjE2OTU4ODA2MzUuNjAuMC4w"
              target="__blank"
            >
              <span>Resume</span>
              <AiOutlineDownload className="text-xl" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center pb-8 px-2 md:p-10">
        <RevealImages>
          <h2 className=" text-2xl sm:text-3xl lg:py-2 lg:h-20 text-teal-600 font-medium md:text-4xl lg:text-6xl dark:text-teal-400">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString("I'm Mkhuzo Zulu")
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </h2>
        </RevealImages>
        <RevealImages>
          <h3 className=" text-lg sm:text-2xl py-2 md:text-3xl dark:text-white ">
            Software Engineer
          </h3>
        </RevealImages>
        <RevealImages>
          <p className="text-sm sm:text-md pb-3 sm:py-3 lg:py-5 leanding-6 text-gray-800 w-full lg:max-w-xl mx-auto dark:text-gray-200">
            I am a passionate and self-motivated software developer, driven by
            my love for technology and problem-solving.
            <span className="hidden sm:block">
              With a degree in software engineering, I possess a strong
              foundation in the principles and practices of software
              development. I thrive in dynamic environments, constantly seeking
              new challenges to expand my knowledge and skills.
            </span>
          </p>
          <div className="text-4xl md:text-5xl flex justify-center pt-3 lg:py-3 text-gray-600 dark:text-gray-400 ">
            <a target="__blank" href="https://github.com/zuu-maker">
              <AiFillGithub className="animate-bounce" />
            </a>
          </div>
        </RevealImages>
      </div>
      <RevealImages>
        <div className="relative mx-auto flex items-center justify-center bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 md:h-96 md:w-96 overflow-hidden ">
          <Image
            alt="mkhuzo zulu's portfolio"
            className="absolute bottom-0 "
            src={avatar}
            layout="fill"
            objectFit="cover" // width={200}
            // height={440}
          />
        </div>
      </RevealImages>
    </section>
  );
}

export default Header;
