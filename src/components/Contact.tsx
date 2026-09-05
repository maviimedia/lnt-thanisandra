import LeadForm from './LeadForm';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#a68226] py-[50px] px-[15px] lg:py-[80px] lg:px-[20px] mt-[20px]">
      <div className="mx-auto w-full lg:max-w-[1320px]">
        <div className="bg-white lg:bg-[url('/assets/images/patter1.webp')] bg-left-top bg-repeat rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] overflow-hidden max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-[30px_20px] lg:p-[50px_40px] bg-[rgba(255,255,255,0.96)] flex flex-col justify-center">
              <h3 className="text-[#a68226] text-[26px] mb-[25px] font-semibold">Schedule Site Visit</h3>
              <LeadForm source="Contact Section" />
            </div>
            <div className="hidden lg:block relative h-full">
              <img src="/assets/images/site_visit.webp" alt="Site Visit" className="w-full h-full object-cover block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}