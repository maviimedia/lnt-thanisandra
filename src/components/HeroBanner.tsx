import { useState, useEffect } from 'react';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['/assets/images/B1.webp', '/assets/images/B2.webp'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full">
      <div className="relative w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className={`w-full transition-opacity duration-800 ${index === currentSlide ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
            <img src={slide} className="w-full object-cover" alt="Banner" />
          </div>
        ))}
      </div>

      <div className="bg-white lg:bg-[url('/assets/images/patter1.webp')] bg-right-top bg-no-repeat rounded-xl shadow-[0px_4px_15px_rgba(0,0,0,0.1)] relative z-[2] mx-[15px] my-[20px] lg:absolute lg:top-[50px] lg:left-[50px] lg:w-[320px] lg:m-0">
        <p className="block text-[18px] tracking-[0.5px] font-medium bg-[#a68226] text-white py-[10px] w-full text-center m-0 rounded-t-xl uppercase">New Launch</p>
        <div className="pt-3 px-2 pb-0">
          <h1 className="text-[18px] font-bold uppercase tracking-[0.5px] text-black text-center mb-2">L&amp;T THANISANDRA</h1>
          <h6 className="text-[#353535] font-bold text-[15px] text-center mb-1">By L&amp;T Realty</h6>
          <small className="text-[#666] text-[14px] leading-[1.4] text-center block">Chokkanahalli, Off Thanisandra Main Road,<br />North Bangalore</small>
        </div>

        <div className="bg-[#e2e2e2] rounded-[6px] p-[12px_16px] mx-auto my-[15px] text-left text-[#333] text-[13px] leading-[24px] w-[90%]">
          <ul className="list-none p-0 m-0">
            <li>Land Parcel : <strong className="font-bold">12 Acres</strong></li>
            <li>Towers : <strong className="font-bold">7 - 8</strong></li>
            <li>Elevation : <strong className="font-bold">2 B + G + 37 Floors</strong></li>
            <li>Units : <strong className="font-bold">750 - 800</strong></li>
          </ul>
        </div>

        <div className="px-[10px] text-white text-[16px] text-center border-y-2 border-dashed border-[#ffea00] bg-[#a68226] my-[10px]">
          <div className="py-[8px]"><p className="m-0">◆ EOI Window Open</p></div>
        </div>
        <div className="px-[10px] text-white text-[16px] text-center border-y-2 border-dashed border-[#ffea00] bg-[#a68226] my-[10px]">
          <div className="py-[8px]"><p className="m-0">◆ Avail Exclusive Offers</p></div>
        </div>

        <div className="pb-4 px-3 mt-3">
          <p className="text-[18px] text-black text-center mb-1">Luxury 3 &amp; 4 BHK Apartments</p>
          <div className="text-[20px] text-[#a68226] font-bold mb-3 text-center">
            <span className="mr-1">₹</span>
            <span className="text-[28px]">3 Cr*</span>
            <span> Onwards</span>
          </div>
          <a href="#contact" className="bg-[#d6b45a] p-1 rounded-xl block w-full mx-auto transition-transform hover:scale-[1.02]">
            <span className="bg-[#a68226] text-white rounded-[10px] text-[16px] flex justify-center items-center py-[12px] px-[16px] w-full">Express Your Interest</span>
          </a>
        </div>
      </div>
    </section>
  );
}