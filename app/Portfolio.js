import Image from "next/image";
import web1 from "../public/portfolio/web1.png";
import web2 from "../public/portfolio/web2.png";
import web3 from "../public/portfolio/web3.png";
import web4 from "../public/portfolio/web4.png";
import web5 from "../public/portfolio/web5.png";
import web6 from "../public/portfolio/web6.png";
import web7 from "../public/portfolio/web7.png";
import web9 from "../public/portfolio/web9.png";
import Reveal from "./Reveal";
import RevealImages from "./RevealImages";

const portfolioItems = [
  {
    title: "Sirius Educational Trust",
    description:
      "This a learning managment system that connects teachers and students, students subscribe monthly to teachers and courses of their choice.",
    demo: "https://www.set.edu.zm/",
    code: "",
    image: web1,
  },
  {
    title: "Lungisa Qutation Manager",
    description:
      "This application helps quicken the quotation making process providing a better experience for customers.",
    demo: "https://quotation.lungisasolutions.com/",
    code: "",
    image: web5,
  },
  {
    title: "Lungisa Webiste",
    description: "Lungisa solutions landing page.",
    demo: "https://lungisasolutions.com/",
    code: "",
    image: web9,
  },
  {
    title: "Healthy Heels",
    description:
      "This an E-commerce site that uses a pay on delivery type of payment system.",
    demo: "https://healthy-heels-809aa.firebaseapp.com/",
    code: "",
    image: web2,
  },
  {
    title: "Linkedin Clone",
    description:
      "A linked in clone with basic authentication, CRUD operations and realtime functionality.",
    demo: "https://tesla-clone-a55ff.web.app/",
    code: "",
    image: web3,
  },
  {
    title: "Freight Managment System",
    description:
      "This is a dashboard helps keep track of deliveries it a driver would have hand held device and the device will deect her/his current location and update accordingly.",
    demo: "",
    code: "",
    image: web4,
  },

  {
    title: "Tesla Clone",
    description: "This is a clone if the tesla website.",
    demo: "https://tesla-clone-a55ff.web.app/",
    code: "",
    image: web6,
  },
  {
    title: "Document Management System",
    description: "This is a frontend UI of a document management system.",
    demo: "https://document-manager-7af8f.web.app/",
    code: "",
    image: web7,
  },
];

function Portfolio({ setOpen, setCurrent, portfolioRef }) {
  const handleClick = (item) => {
    setCurrent(item);
    setOpen(true);
  };

  return (
    <section ref={portfolioRef} id="portfolio">
      <div>
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-bold py-1 dark:text-white">
            Portfolio
          </h3>
        </Reveal>
        <Reveal>
          <p className=" text-sm sm:text-base py-2 leading-5 sm:leading-8 text-gray-600 dark:text-gray-200">
            <span className="text-teal-500">Explore My Work</span> here's a
            glimpse of some of the projects I've had the privilege to work on:
          </p>
        </Reveal>
      </div>
      <RevealImages>
        <div className="flex flex-col lg:flex-row lg:flex-wrap">
          {portfolioItems.map((item) => (
            <PortfolioItem
              key={item.title}
              handleClick={handleClick}
              setOpen={setOpen}
              item={item}
            />
          ))}
        </div>
      </RevealImages>
    </section>
  );
}

export default Portfolio;

function PortfolioItem({ item, handleClick }) {
  return (
    <div onClick={() => handleClick(item)} className="basis-1/4 flex-1 ">
      <RevealImages>
        <Image
          src={item.image}
          alt="mkhuzo zulu's portfolio"
          className="rounded-md object-cover cursor-pointer transition-transform duration-100 delay-75 lg:hover:scale-105"
          width={"100%"}
          height={"100%"} // layout="responsive"
        />
      </RevealImages>
    </div>
  );
}
