import { useState } from 'react';

export default function LocationTabs() {
  const [activeTab, setActiveTab] = useState('connectivity');

  const tabs = [
    { id: 'connectivity', icon: '/assets/images/connectivity.gif', title: 'Connectivity', items: ['Thanisandra Main Road – 4 Mins*', 'Nagawara Metro Station – 10 Mins*', 'Yelahanka Railway Station – 16 Mins*', 'Hebbal Flyover – 18 Mins*', 'Kempegowda International Airport – 36 Mins*'] },
    { id: 'education', icon: '/assets/images/Education.gif', title: 'Education Hub', items: ['VIBGYOR High School, Chokkanahalli – 3 Mins*', 'Chaman Bhartiya School – 4 Mins*', 'Delhi Public School Bangalore North – 12 Mins*', 'Canadian International School – 16 Mins*', 'Sofia Public School – 3 Mins*', 'REVA University – 7 Mins*', 'Ryan International School – 14 Mins*'] },
    { id: 'healthcare', icon: '/assets/images/Healthcare.gif', title: 'Healthcare', items: ['Regal Hospital 24/7 – 2 Mins*', 'Manipal Hospital Hebbal – 16 Mins*', 'Aster CMI Hospital – 18 Mins*'] },
    { id: 'malls', icon: '/assets/images/Mall.gif', title: 'Malls/ Shopping', items: ['The Leela Bhartiya City – 5 Mins*', 'Bhartiya Mall of Bengaluru – 5 Mins*', 'Elements Mall – 7 Mins*', 'Phoenix Mall of Asia – 12 Mins*'] },
    { id: 'tech', icon: '/assets/images/Tech.gif', title: 'Tech Park', items: ['Manyata Tech Park – 10 Mins*', 'Kirloskar Business Park – 14 Mins*'] },
    { id: 'recreation', icon: '/assets/images/Hotel.gif', title: 'Recreation', items: ['Chokkanahalli Lake Walking Track – 1 Min*', 'Rachenahalli Lake Park – 10 Mins*'] }
  ];

  return (
    <section id="connectivity" className="bg-[#f4f3f3] p-[50px_20px] my-[15px]">
      <div className="mx-auto w-full lg:max-w-[1320px]">
        <div className="flex flex-col items-center mb-12 text-center">
          <h1 className="text-[22px] lg:text-[26px] text-[#a68226] mb-2 font-semibold tracking-[1.2px]">L&amp;T Thanisandra - Location Advantages</h1>
          <div className="w-[60px] h-[2px] bg-[#a68226] mt-1"></div>
        </div>
        
        <div className="w-full border border-[#333] rounded-md overflow-hidden leading-none shadow-[0_4px_10px_rgba(0,0,0,0.05)] mb-8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2075822337847!2d77.62492461136169!3d13.086026712102095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19a93fbfd7b5%3A0x28ae415010ba67b3!2sChokkanahalli%20Lake%20Park!5e0!3m2!1sen!2sin!4v1788527133014!5m2!1sen!2sin" className="w-full h-[350px] md:h-[450px] border-0 block" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="w-full mt-4">
          <div className="flex flex-wrap md:flex-nowrap md:overflow-x-auto gap-[10px] md:gap-[6px] md:-mb-[1px] relative z-[2] md:[&::-webkit-scrollbar]:hidden grid grid-cols-2 md:flex p-0 md:p-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col md:flex-row items-center justify-center md:justify-start gap-[8px] p-[10px] md:p-[12px_20px] rounded-lg md:rounded-[8px_8px_0_0] font-semibold text-[13px] md:text-[15px] whitespace-normal md:whitespace-nowrap cursor-pointer relative top-0 md:top-[1px] transition-all duration-300 z-[1] border ${activeTab === tab.id ? 'bg-[#a68226] text-white border-[#a68226] z-[3]' : 'bg-white border-[#a68226] text-[#a68226] md:border-b-[#a68226]'}`}
              >
                <img src={tab.icon} alt={tab.title} className={`w-[24px] h-[24px] object-contain transition-all duration-300 ${activeTab === tab.id ? 'brightness-0 invert' : ''}`} />
                {tab.title}
              </button>
            ))}
          </div>

          <div className="bg-[#f4f3f3] border border-[#a68226] p-[20px_15px] md:p-[30px_40px] relative z-[1] rounded-lg md:rounded-[0_10px_10px_10px]">
            {tabs.map((tab) => (
              <div key={tab.id} className={`${activeTab === tab.id ? 'block animate-[fadeIn_0.4s_ease]' : 'hidden'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px_40px]">
                  {tab.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-[12px]">
                      <i className="fa-solid fa-location-dot mt-[4px] text-black text-[14px]"></i>
                      <p className="m-0 text-black text-[15px]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4 mb-2">
            <a href="#contact" className="inline-block bg-[#a68226] hover:bg-[#8e6d1c] text-white py-[12px] px-[30px] m-[10px] rounded-[25px] text-[16px] border-2 border-[#8e6d1c] transition-all duration-300">
              Express Your Interest
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}