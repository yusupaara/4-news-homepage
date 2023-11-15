import React from "react";
import data from "../data/db.json";

export default function Newsside() {
  const datanew = data.new;

  return (
    <div className="grid grid-rows-8 bg-secondary-vdrblue font-inter text-default px-7 py-6 min-h-full">
      <div className="row-span-1 font-bold text-4xl text-primary-orange self-center">
        New
      </div>
      <div className="row-span-7 grid text-secondary-ofwhite justify-between space-y-3">
        {datanew.map((news, index) => (
          <React.Fragment key={index}>
            <hr className="first:hidden" />
            <div className="hover:cursor-pointer hover:text-primary-orange transition-colors duration-300">
              <div className="font-bold text-xl pb-2">{news.title}</div>
              <div className="text-secondary-grblue">{news.highlight}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
