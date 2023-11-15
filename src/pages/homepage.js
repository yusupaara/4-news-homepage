import React, { useState } from "react";
import Newsmain from "../components/newsMain";
import Newsside from "../components/newsSide";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Card from "../components/card";

function Homepage() {

  let [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false);
  }

  function openMenu() {
    setIsOpen(true);
  }

  return (
    <div className="bg-white">
      <div className="flex max-w-6xl mx-auto px-6 min-h-screen">
        <div className="flex flex-col my-auto">

          <div>
            <Navbar openmenu={openMenu} />
            <Sidebar closemenu={closeMenu} isopen={isOpen} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-6 md:space-y-0 space-y-6">
            <div className="md:col-span-2">
              <Newsmain />
            </div>
            <div className="md:col-span-1">
              <Newsside />
            </div>
          </div>

          <div>
            <Card />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Homepage;
