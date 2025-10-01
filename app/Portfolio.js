import { useState } from "react";
import Image from "next/image";
import web1 from "../public/portfolio/set.png";
import web2 from "../public/portfolio/healthy.png";
import web3 from "../public/portfolio/trade.png";
import web4 from "../public/portfolio/detection-demo.png";
import web5 from "../public/portfolio/quote.png";
import web6 from "../public/portfolio/tesla.png";
// import web7 from "../public/portfolio/web7.png";
import web9 from "../public/portfolio/lungisa.png";
import web10 from "../public/portfolio/web10.png";
import Reveal from "./Reveal";
import RevealImages from "./RevealImages";

const portfolioItems = [
  {
    title: "Sirius Educational Trust",
    description:
      "A learning management system that connects teachers and students, students subscribe monthly to teachers and courses of their choice.",
    demo: "https://set-tests.vercel.app/",
    code: "",
    image: web1,
    tags: ["LMS", "Education", "Subscription"],
  },
  {
    title: "Lungisa Quotation Manager",
    description:
      "This application helps quicken the quotation making process providing a better experience for customers.",
    demo: "https://quotation.lungisasolutions.com/",
    code: "",
    image: web5,
    tags: ["Business", "Management", "SaaS"],
  },
  {
    title: "Lungisa Website",
    description: "A modern, responsive landing page showcasing Lungisa Solutions' services and brand identity.",
    demo: "https://lungisasolutions.com/",
    code: "",
    image: web9,
    tags: ["Landing Page", "Corporate"],
  },
  {
    title: "AI Flashcard Generator",
    description:
      "This is an AI flashcard generator that students can use to study.",
    demo: "https://flashcard-saas-kohl.vercel.app/",
    code: "",
    image: web10,
    tags: ["AI", "Learning"],
  },
  {
    title: "Healthy Heels",
    description:
      "An E-commerce site that uses a pay on delivery type of payment system.",
    demo: "https://healthy-heels-809aa.firebaseapp.com/",
    code: "",
    image: web2,
    tags: ["E-commerce", "Payment"],
  },
  {
    title: "Trading Bot",
    description:
      "An automated trading bot that executes trades via Futu API and receives real-time alerts from TradingView strategies.",
    demo: "",
    code: "https://github.com/zuu-maker/trading_web_ui",
    image: web3,
    tags: ["Trading Bot", "API Integration", "Automation"],
  },
  {
    title: "AI Bridge Inspection System",
    description:
      "An AI-powered bridge inspection system combining YOLOv8 for defect detection, ontological reasoning, and LLMs for automated component assessment.",
    demo: "",
    code: "https://github.com/zuu-maker/bridge-front",
    image: web4,
    tags: ["AI", "Computer Vision", "Automation"],
  },
  {
    title: "Tesla Clone",
    description: "A responsive Tesla website clone showcasing component-based architecture with React.js and advanced CSS styling techniques.",
    demo: "https://tesla-clone-a55ff.web.app/",
    code: "",
    image: web6,
    tags: ["Clone", "Landing Page"],
  },
  // {
  //   title: "Document Management System",
  //   description: "Frontend UI of a document management system.",
  //   demo: "https://document-manager-7af8f.web.app/",
  //   code: "",
  //   image: web7,
  //   tags: ["Document", "Management", "UI"]
  // }
];

function Portfolio({ portfolioRef }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section
      ref={portfolioRef}
      id="portfolio"
      className="py-16  dark:bg-gray-900 from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Reveal>
            <h3 className="text-3xl sm:text-4xl font-bold py-2 dark:text-white">
              Portfolio
            </h3>
          </Reveal>
          <Reveal>
            <p className="text-base sm:text-lg py-2 leading-6 sm:leading-8 text-gray-600 dark:text-gray-300 max-w-3xl">
              <span className="text-teal-500 font-semibold">
                Explore My Work
              </span>{" "}
              — here's a glimpse of some of the projects I've had the privilege
              to work on:
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <RevealImages>
              <PortfolioCard
                key={item.title}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            </RevealImages>
          ))}
        </div>
      </div>

      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}

function PortfolioCard({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      {/* Image Container with fixed aspect ratio */}
      <div className="relative w-full aspect-[6/3] bg-gray-200 dark:bg-gray-700">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-2 flex-wrap mb-2">
              {item.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-teal-500/80 text-white rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quick action buttons */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.demo && (
            <a
              href={item.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              <svg
                className="w-4 h-4 text-teal-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-teal-500 transition-colors line-clamp-1">
          {item.title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* View Details indicator */}
        <div className="mt-3 flex items-center text-teal-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          <span>View details</span>
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Modal({ item, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors z-10"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags?.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            {item.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {item.description}
          </p>

          {/* Action buttons */}
          <div className="flex gap-4">
            {item.demo && (
              <a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                View Live Demo
              </a>
            )}
            {item.code && (
              <a
                href={item.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
