export default function FloorPlan() {
  const plans = [
    { title: "Master Plan Layout", img: "/assets/images/MasterPlan.webp", btnText: "Request Master Plan Layout" },
    { title: "Unit Plan Layout", img: "/assets/images/UnitPlan.webp", btnText: "Request Unit Plan Layout" }
  ];

  return (
    <section id="floor-plan" className="bg-white p-[25px_15px] lg:p-[40px_20px] my-[15px] rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.05)] mx-auto w-full lg:max-w-[1320px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {plans.map((plan, index) => (
          <div key={index} className="w-full">
            <div className="flex flex-col items-center mb-8 text-center">
              <h1 className="text-[22px] lg:text-[26px] text-[#a68226] mb-2 font-semibold tracking-[1.2px]">{plan.title}</h1>
              <div className="w-[60px] h-[2px] bg-[#a68226] mt-1"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.1)] cursor-pointer bg-[#505050] group">
              <img src={plan.img} alt={plan.title} className="block w-full transition-all duration-300 group-hover:blur-[5px] group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-[rgba(80,80,80,0.45)] flex justify-center items-center opacity-0 transition-opacity duration-300 z-[2] group-hover:opacity-100">
                <a href="#contact" className="bg-[#d6b45a] p-1 rounded-xl inline-block min-w-[260px] translate-y-[20px] transition-transform duration-300 group-hover:translate-y-0">
                  <span className="bg-[#a68226] text-white rounded-[10px] text-[16px] flex justify-center items-center py-[12px] px-[16px] w-full">{plan.btnText}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}