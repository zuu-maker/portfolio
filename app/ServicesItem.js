import React from "react";
import Image from "next/image";
import RevealImages from "./RevealImages";

function ServicesItem({ src, item }) {
  return (
    <div className="text-center flex-1 shadow-lg p-10 rounded-2xl my-10 dark:bg-gray-800 dark:text-white">
      <RevealImages>
        <div className="flex items-center justify-center">
          <Image
            alt="mkhuzo zulu's portfolio"
            src={src}
            width={100}
            height={100}
          />
        </div>
        <h3 className="text-base sm:text-lg font-medium pt-8 pb-2">
          {item.title}
        </h3>
        <p className="py-2 text-sm sm:text-base font-normal hidden sm:block ">
          {item.description}
        </p>
        <h4 className=" py-2 sm:py-4 text-sm sm:text-base  text-teal-600 dark:text-teal-400">
          Design Tools I use
        </h4>
        {item.tools.map((tool) => (
          <p
            key={tool}
            className="text-gray-800 text-sm sm:text-base  dark:text-gray-100 py-1"
          >
            {tool}
          </p>
        ))}
      </RevealImages>
    </div>
  );
}

export default ServicesItem;
