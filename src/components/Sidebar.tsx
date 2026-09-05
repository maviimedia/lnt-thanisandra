import LeadForm from './LeadForm';

export default function Sidebar({ openModal }: { openModal: (e: any) => void }) {
  const features = [
    { icon: '/assets/images/Instant-Call-Back.gif', text1: 'Instant Call', text2: 'Back' },
    { icon: '/assets/images/Free-Site-Visit.gif', text1: 'Free Site', text2: 'Visit' },
    { icon: '/assets/images/Best-Price.gif', text1: 'Best', text2: 'Price' }
  ];

  return (
    <aside className="hidden lg:flex w-[320px] right-0 fixed top-0 h-[100dvh] bg-white shadow-[-4px_0_20px_rgba(0,0,0,0.06)] z-[9999] flex-col">
      
      {/* 1. Header - Fixed Size */}
      <div className="flex w-full shrink-0">
        <button className="flex-1 bg-black hover:bg-[#222] text-white border-none border-r border-[#333] py-[12px] text-[13px] font-medium flex items-center justify-center gap-[8px] cursor-pointer transition-colors duration-300">
          <img src="/assets/images/Calendar.gif" alt="Calendar" className="w-[16px] h-[16px] invert" /> Schedule Visit
        </button>
        <button onClick={openModal} className="flex-1 bg-black hover:bg-[#222] text-white border-none py-[12px] text-[13px] font-medium flex items-center justify-center gap-[8px] cursor-pointer transition-colors duration-300">
          <i className="fa-solid fa-bolt text-[13px]"></i> Quick Connect
        </button>
      </div>

      {/* 2. Main Content - Takes remaining space beautifully */}
      <div className="flex-1 flex flex-col justify-between px-[20px] py-[20px] min-h-0 w-full">
        
        {/* Top Centered Block: Title + Form */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-[17px] xl:text-[18px] font-bold text-center text-black mb-[15px] shrink-0">
            Pre-Register here for Best Benefits
          </h3>
          
          {/* Form with Clean Breakpoints: Squeezes padding/gaps cleanly on short screens */}
          <div className="w-full shrink-0 [@media(max-height:800px)]:[&_form]:!gap-[12px] [@media(max-height:700px)]:[&_form]:!gap-[10px] [@media(max-height:700px)]:[&_input]:!py-[10px] [@media(max-height:700px)]:[&_button]:!py-[12px]">
            <LeadForm source="Sidebar" />
          </div>
        </div>

        {/* Features: Hides completely on very small screen heights to prevent overflow */}
        <div className="flex justify-between pt-[15px] mt-[15px] border-t border-[#eee] shrink-0 [@media(max-height:650px)]:hidden">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center w-[33%] flex flex-col items-center justify-end">
              <img src={feature.icon} alt={feature.text1} className="w-[36px] h-[36px] xl:w-[40px] xl:h-[40px] object-contain mb-[8px]" />
              <p className="text-[11px] leading-tight text-[#333] font-medium">{feature.text1}<br />{feature.text2}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Footer Promo - ONLY renders on tall screens (>800px) so it doesn't crush the form */}
      <div className="relative mx-[20px] mb-[20px] shrink-0 h-[150px] rounded-lg overflow-hidden cursor-pointer group shadow-md hidden [@media(min-height:800px)]:block">
        <img src="/assets/images/site_visit.webp" alt="Promo" className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]">
          <a href="#contact" onClick={openModal} className="bg-[#a68226] text-white px-[20px] py-[10px] rounded-[6px] translate-y-[20px] transition-transform duration-300 group-hover:translate-y-0 text-center font-medium text-[14px] shadow-lg">
            Request Details
          </a>
        </div>
      </div>
      
    </aside>
  );
}