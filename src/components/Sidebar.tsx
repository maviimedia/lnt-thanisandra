import LeadForm from './LeadForm';

export default function Sidebar({ openModal }: { openModal: (e: any) => void }) {
  const features = [
    { icon: '/assets/images/Instant-Call-Back.gif', text1: 'Instant Call', text2: 'Back' },
    { icon: '/assets/images/Free-Site-Visit.gif', text1: 'Free Site', text2: 'Visit' },
    { icon: '/assets/images/Best-Price.gif', text1: 'Best', text2: 'Price' }
  ];

  return (
    <aside className="hidden lg:flex w-[320px] right-0 fixed top-0 h-[100dvh] bg-white shadow-[0_-1px_11px_0_rgba(0,0,0,0.56)] z-[9999] flex-col">
      
      <div className="flex w-full shrink-0">
        <button className="flex-1 bg-black hover:bg-[#222] text-white border-none border-r border-[#333] p-[10px_5px] text-[13px] flex items-center justify-center gap-[8px] cursor-pointer transition-colors duration-300">
          <img src="/assets/images/Calendar.gif" alt="Calendar" className="w-[16px] h-[16px] invert" /> Schedule Visit
        </button>
        <button onClick={openModal} className="flex-1 bg-black hover:bg-[#222] text-white border-none p-[10px_5px] text-[13px] flex items-center justify-center gap-[8px] cursor-pointer transition-colors duration-300">
          <i className="fa-solid fa-bolt text-[13px]"></i> Quick Connect
        </button>
      </div>

      <div className="p-[15px_20px] bg-white flex-1 flex flex-col justify-center min-h-0">
        <h3 className="text-[16px] xl:text-[18px] font-bold text-center mb-[15px] text-black shrink-0">
          Pre-Register here for Best Benefits
        </h3>
        
        <div className="shrink-0">
          <LeadForm source="Sidebar" showEmail={false} />
        </div>

        <div className="flex justify-between mt-[15px] pt-[15px] border-t border-[#eee] shrink-0">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center w-[33%]">
              <img src={feature.icon} alt={feature.text1} className="w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] object-contain block mx-auto mb-[5px]" />
              <p className="text-[10px] xl:text-[11px] leading-[1.2] m-0 text-[#333]">{feature.text1}<br />{feature.text2}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-[15px] mb-[15px] mt-0 rounded-lg overflow-hidden cursor-pointer group shrink min-h-[80px]">
        <img src="/assets/images/site_visit.webp" alt="Promo" className="w-full h-full object-cover max-h-[140px] xl:max-h-[200px] block transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a href="#contact" onClick={openModal} className="bg-[#a68226] text-white px-[20px] py-[10px] rounded-[6px] translate-y-[20px] transition-transform duration-300 group-hover:translate-y-0 text-center font-medium">
            Request Details
          </a>
        </div>
      </div>
      
    </aside>
  );
}