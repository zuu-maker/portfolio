"use client";
import { useState } from "react";
import Modal from "./Modal";
import Header from "./Header";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState({});

  return (
    <div className={darkMode ? "dark" : ""}>
      <link rel="icon" href="/portfolio/favicon.ico" sizes="any" />
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 min-w-screen">
        <Modal open={open} setOpen={setOpen} current={current} />
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <Services />
        <Portfolio setOpen={setOpen} setCurrent={setCurrent} />
        <Contact />
      </main>
    </div>
  );
}
