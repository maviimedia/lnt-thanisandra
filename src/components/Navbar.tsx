import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-[1030] lg:w-[calc(100%-320px)] h-[60px]">
      <div className="flex flex-wrap items-center justify-between w-full px-5 h-full">
        <a href="#home">
          <img src="/assets/images/logo.png" alt="Project Logo" className="max-w-[220px] h-auto" />
        </a>
        
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="bg-transparent border-none text-2xl cursor-pointer p-1 text-black w-[40px] h-[40px] flex items-center justify-center">
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
        
        <div className={`${isOpen ? 'block' : 'hidden'} lg:flex w-full lg:w-auto mt-[1px] lg:mt-0 h-auto lg:h-full bg-white lg:bg-transparent absolute lg:relative top-[60px] lg:top-0 left-0 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] lg:shadow-none pb-4 lg:pb-0`}>
          <ul className="flex flex-col lg:flex-row items-start lg:items-center h-auto lg:h-full list-none p-4 lg:p-0 m-0 w-full gap-4 lg:gap-0">
            <li className="lg:mx-3 flex items-center w-full">
              <a href="#highlights" onClick={() => setIsOpen(false)} className="text-gray-800 font-medium inline-flex items-center gap-1 transition-colors hover:text-[#a0782d] py-1 lg:py-0 w-full"><i className="fa-solid fa-circle-check w-[18px] text-center"></i> Highlights</a>
            </li>
            <li className="lg:mx-3 flex items-center w-full">
              <a href="#pricing" onClick={() => setIsOpen(false)} className="text-gray-800 font-medium inline-flex items-center gap-1 transition-colors hover:text-[#a0782d] py-1 lg:py-0 w-full"><i className="fa-solid fa-indian-rupee-sign w-[18px] text-center"></i> Pricing</a>
            </li>
            <li className="lg:mx-3 flex items-center w-full">
              <a href="#floor-plan" onClick={() => setIsOpen(false)} className="text-gray-800 font-medium inline-flex items-center gap-1 transition-colors hover:text-[#a0782d] py-1 lg:py-0 w-full"><i className="fa-solid fa-building w-[18px] text-center"></i> Plan</a>
            </li>
            <li className="lg:mx-3 flex items-center w-full">
              <a href="#amenities" onClick={() => setIsOpen(false)} className="text-gray-800 font-medium inline-flex items-center gap-1 transition-colors hover:text-[#a0782d] py-1 lg:py-0 w-full"><i className="fa-solid fa-water-ladder w-[18px] text-center"></i> Amenities</a>
            </li>
            <li className="lg:mx-3 flex items-center w-full">
              <a href="#gallery" onClick={() => setIsOpen(false)} className="text-gray-800 font-medium inline-flex items-center gap-1 transition-colors hover:text-[#a0782d] py-1 lg:py-0 w-full"><i className="fa-solid fa-images w-[18px] text-center"></i> Gallery</a>
            </li>
            <li className="lg:mx-3 flex items-center w-full">
              <a href="#connectivity" onClick={() => setIsOpen(false)} className="text-gray-800 font-medium inline-flex items-center gap-1 transition-colors hover:text-[#a0782d] py-1 lg:py-0 w-full"><i className="fa-solid fa-location-dot w-[18px] text-center"></i> Location</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}