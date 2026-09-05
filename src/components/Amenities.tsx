export default function Amenities() {
  const amenitiesList = [
    { img: "/assets/images/Spa-Steam-Sauna.webp", label: "Spa, Steam & Sauna" },
    { img: "/assets/images/Toddler-Play-Zone.webp", label: "Toddler Play Zone" },
    { img: "/assets/images/Indoor-games-room.webp", label: "Indoor Games Room" },
    { img: "/assets/images/Swimming-Pool.webp", label: "Swimming Pool" },
    { img: "/assets/images/Gymnasium.webp", label: "Gymnasium" },
    { img: "/assets/images/Pet-Friendly-Zone.webp", label: "Pet Friendly Zone" }
  ];

  return (
    <section id="amenities" className="bg-[#f4f3f3] p-[50px_20px] my-[15px]">
      <div className="mx-auto w-full lg:max-w-[1320px]">
        <div className="flex flex-col items-center mb-12 text-center">
          <h1 className="text-[22px] lg:text-[26px] text-[#a68226] mb-2 font-semibold tracking-[1.2px]">L&amp;T Thanisandra - Amenities</h1>
          <div className="w-[60px] h-[2px] bg-[#a68226] mt-1"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] lg:gap-[20px]">
          {amenitiesList.map((item, index) => (
            <div key={index} className="relative w-full aspect-[16/10] overflow-hidden bg-[#e9ecef] group">
              <img src={item.img} alt={item.label} className="w-full h-full object-cover block transition-transform duration-400 group-hover:scale-105" />
              <p className="absolute bottom-[10px] lg:bottom-[15px] left-[10px] lg:left-[15px] bg-gradient-to-r from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.4)] to-transparent text-white py-[6px] pr-[30px] pl-[10px] text-[12px] lg:text-[11px] font-bold uppercase tracking-[0.5px] border-l-[3px] border-[#a68226] pointer-events-none m-0">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-[50px]">
          <a href="#contact" className="inline-block bg-[#a68226] hover:bg-[#8e6d1c] text-white py-[10px] px-[30px] rounded-[25px] text-[15px] border-2 border-[#8e6d1c] transition-all duration-300 mt-[20px]">
            Express Your Interest
          </a>
        </div>
      </div>
    </section>
  );
}