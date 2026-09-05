import { useRef } from 'react';

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  
  const images = [
    "/assets/images/Gallery1.webp", "/assets/images/Gallery2.webp",
    "/assets/images/Gallery3.webp", "/assets/images/Gallery4.webp",
    "/assets/images/Gallery5.webp", "/assets/images/Gallery6.webp"
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const itemWidth = trackRef.current.children[0].clientWidth + 20;
      trackRef.current.scrollBy({ left: direction === 'left' ? -itemWidth : itemWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="bg-white p-[25px_15px] lg:p-[40px_20px] my-[15px] rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.05)] mx-auto w-full lg:max-w-[1320px]">
      <div className="flex flex-col items-center mb-12 text-center">
        <h1 className="text-[22px] lg:text-[26px] text-[#a68226] mb-2 font-semibold tracking-[1.2px]">LnT Thanisandra - Project Gallery</h1>
        <div className="w-[60px] h-[2px] bg-[#a68226] mt-1"></div>
      </div>
      
      <div className="relative w-full overflow-hidden py-[10px]">
        <div ref={trackRef} className="flex gap-[20px] overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
          {images.map((img, index) => (
            <div key={index} className="flex-[0_0_calc(100%-20px)] md:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(25%-15px)] min-w-[240px] snap-start relative overflow-hidden group mx-[10px] md:mx-0">
              <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover block transition-transform duration-400 group-hover:scale-[1.04]" />
              <span className="absolute bottom-0 left-0 w-full text-right pt-[15px] px-[10px] pb-[5px] bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent text-white text-[11px] font-medium pointer-events-none">
                Artistic Impression
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-[25px] mt-[30px]">
        <button onClick={() => scroll('left')} aria-label="Previous image" className="w-[42px] h-[42px] rounded-full border-none bg-[#f2f2f2] text-[#333] text-[15px] cursor-pointer shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-200 hover:bg-[#e4e4e4] hover:-translate-y-[2px] hover:shadow-[0_5px_10px_rgba(0,0,0,0.2)]">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button onClick={() => scroll('right')} aria-label="Next image" className="w-[42px] h-[42px] rounded-full border-none bg-[#f2f2f2] text-[#333] text-[15px] cursor-pointer shadow-[0_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-200 hover:bg-[#e4e4e4] hover:-translate-y-[2px] hover:shadow-[0_5px_10px_rgba(0,0,0,0.2)]">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}