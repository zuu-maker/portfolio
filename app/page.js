"use client";
import { useState, useRef, useEffect } from "react";
import Modal from "./Modal";
import Header from "./Header";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState({});
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (section) => {
    setActiveLink(section);
  };

  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5, // Adjust threshold as needed
    });

    if (homeRef.current) observer.observe(homeRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (portfolioRef.current) observer.observe(portfolioRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (portfolioRef.current) observer.unobserve(portfolioRef.current);
    };
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""}  `}>
      <link rel="icon" href="/portfolio/favicon.ico" sizes="any" />
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 w-full font-source-sans">
        <Sidebar handleClick={handleClick} activeLink={activeLink} />
        <Modal open={open} setOpen={setOpen} current={current} />
        <div className="xl:ml-[375px]">
          <Header
            homeRef={homeRef}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
          />
          <Services servicesRef={servicesRef} />
          <Portfolio
            portfolioRef={portfolioRef}
            setOpen={setOpen}
            setCurrent={setCurrent}
          />
          <Contact contactRef={contactRef} />
        </div>
      </main>
    </div>
  );
}
