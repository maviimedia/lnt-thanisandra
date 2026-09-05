import LeadForm from './LeadForm';

export default function MobileForm() {
  const features = [
    { icon: '/assets/images/Instant-Call-Back.gif', text1: 'Instant Call', text2: 'Back' },
    { icon: '/assets/images/Free-Site-Visit.gif', text1: 'Free Site', text2: 'Visit' },
    { icon: '/assets/images/Best-Price.gif', text1: 'Best', text2: 'Price' }
  ];

  return (
    <section className="block lg:hidden bg-white m-[15px] rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="p-[25px_20px]">
        <h3 className="text-[18px] font-bold text-center mb-[20px] text-black">Pre-Register here for Best Benefits</h3>
        <LeadForm source="Mobile Banner Form" showEmail={false} />
        <div className="flex justify-between mt-[25px] pt-[20px] border-t border-[#eee]">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center w-[33%]">
              <img src={feature.icon} alt={feature.text1} className="w-[40px] h-[40px] object-contain block mx-auto mb-[8px]" />
              <p className="text-[11px] leading-[1.3] m-0 text-[#333]">{feature.text1}<br />{feature.text2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}