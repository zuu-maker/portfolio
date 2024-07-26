import ServicesItem from "./ServicesItem";
import webDev from "../public/portfolio/web-dev1.png";
import app from "../public/portfolio/app1.png";
import ml from "../public/portfolio/ml.png";
import Reveal from "./Reveal";
import RevealImages from "./RevealImages";

const services = [
  {
    title: "Web Development",
    description:
      "Fully functional front and backend systems with database integrations",
    tools: ["React js", "Node js", "Fast Api"],
    src: webDev,
  },
  {
    title: "App Development",
    description: "Easy to integrate andriod and IOS builds",
    tools: ["React Native", "Expo CLI", "Firebase"],
    src: app,
  },
  {
    title: "Machine Learning",
    description: "Classification and Regression techniques",
    tools: ["Sklearn", "Pytorch", "Google Colab"],
    src: ml,
  },
];

function Services({ servicesRef }) {
  return (
    <section ref={servicesRef} id="services">
      <Reveal>
        <h3 className="text-2xl sm:text-3xl font-bold py-1 dark:text-white ">
          Services
        </h3>
      </Reveal>
      <Reveal>
        <p className=" text-sm sm:text-base py-2 leading-5 sm:leading-8 text-gray-600 dark:text-gray-200">
          Welcome to my services. As a full stack developer,{" "}
          <span className="text-teal-500">
            I offer a wide range of services
          </span>{" "}
          to help you bring your digital projects to life. Here's how I can
          assist you:
        </p>
      </Reveal>
      {/* <RevealImages> */}
      <div className="lg:flex lg:gap-10 lg:justify-center w-full">
        {services.map((service) => (
          <ServicesItem key={service.title} src={service.src} item={service} />
        ))}
      </div>
      {/* </RevealImages> */}
    </section>
  );
}

export default Services;
