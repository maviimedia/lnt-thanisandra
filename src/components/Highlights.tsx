export default function Highlights() {
  const points = [
    "Only Four Residences Planned On Every Floor",
    "Zero Common Walls For Enhanced Everyday Privacy",
    "Seven To Eight Elegant Towers Across Development",
    "Scenic Lake-Facing Views From Select Premium Homes",
    "Four High-Speed Elevators Serving Each Residential Floor",
    "Earthquake-Resistant RCC Structure Built To Relevant Codes",
    "Fire Safety Systems Designed To NBC Standards",
    "Approximately 750 To 800 Premium Residential Units",
    "Grand 60,000 Sq. Ft. Luxury Clubhouse For Residents",
    "Sprawling 12-Acre Development With 60% Open Spaces",
    "Twenty-Plus Curated Indoor And Outdoor Lifestyle Amenities",
    "High-Rise 37-Storey Towers With Contemporary Glass Façades"
  ];

  return (
    <section id="highlights" className="bg-white p-[25px_15px] lg:p-[40px_20px] my-[15px] rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.05)] mx-auto w-full lg:max-w-[1320px]">
      <div className="flex flex-col items-center mb-12 text-center">
        <h1 className="text-[22px] lg:text-[26px] text-[#a68226] mb-2 font-semibold tracking-[1.2px]">L&amp;T Thanisandra Chokkanahalli - Highlights</h1>
        <div className="w-[60px] h-[2px] bg-[#a68226] mt-1"></div>
      </div>
      
      <div className="columns-1 md:columns-2 gap-10">
        {points.map((point, index) => (
          <div key={index} className="flex items-start gap-4 break-inside-avoid mb-6">
            <div className="text-black text-[16px] shrink-0 mt-[2px]">
              <i className="fa-solid fa-check-double"></i>
            </div>
            <p className="text-[16px] m-0 text-black leading-[1.4] font-normal">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}