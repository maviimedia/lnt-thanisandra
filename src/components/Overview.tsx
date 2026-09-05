export default function Overview() {
  return (
    <section id="overview" className="bg-white p-[25px_15px] lg:p-[40px_20px] my-[15px] rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.05)] mx-auto w-full lg:max-w-[1320px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <div className="lg:pr-[15px]">
            <h1 className="text-[22px] lg:text-[26px] text-[#a68226] mb-[20px] text-center lg:text-left font-semibold tracking-[1.2px] uppercase">About L&amp;T Thanisandra</h1>
            <div className="relative w-full pt-[10px] lg:hidden mb-4">
              <img src="/assets/images/About.webp" alt="About L&T Thanisandra" className="w-full relative z-[2] shadow-[4px_5px_10px_rgba(0,0,0,0.15)] rounded-lg" />
            </div>
            <p className="text-[#444] leading-[1.3] text-[15px] text-justify mb-4">Discover an elevated way of life at L&amp;T Chokkanahalli Thanisandra, a refined residential haven in the vibrant heart of North Bengaluru. Spanning nearly 12 acres, this elegant development rises as a graceful skyline of glass-clad towers reaching up to 37 floors, embraced by tranquil lake views and generous open spaces. The community is envisioned to comprise 7 to 8 towers offering spacious 3 &amp; 4 BHK homes. With just four residences per floor, high-speed elevators and no shared walls, each home promises a serene, private retreat filled with light and quiet luxury.</p>
            <a href="#contact" className="bg-[#d6b45a] p-1 rounded-xl inline-block max-w-[250px] mt-3 w-full transition-transform hover:scale-[1.02]">
              <span className="bg-[#a68226] text-white rounded-[10px] text-[16px] flex justify-center items-center py-[12px] px-[16px]">
                <i className="fa-solid fa-download mr-2"></i> Request Brochure
              </span>
            </a>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-5 text-center">
          <div className="relative w-full pt-[20px] pr-[20px]">
            <img src="/assets/images/About.webp" alt="About L&T Thanisandra" className="w-full relative z-[2] shadow-[8px_9px_15px_rgba(0,0,0,0.2)] rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}