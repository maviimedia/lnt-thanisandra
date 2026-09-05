export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#efefef] p-[40px_20px_20px]">
        <div className="mx-auto w-full lg:max-w-[1320px] text-center">
          <img src="/assets/images/logo.png" alt="L&T Thanisandra Logo" className="max-w-[250px] md:max-w-[350px] mx-auto mb-[25px] block" />
          
          <p className="text-[#555] text-[11px] leading-[1.6] max-w-[1100px] mx-auto mb-[20px] text-justify md:text-center">
            The content on this website is for informational purposes only and is not intended as an offer for services or sale. The project mentioned has not yet received RERA clearance but is currently in the process of registration with the State Name Real Estate Regulatory Authority. The project name used here is for branding and interest-generation purposes only and is not intended as the final project name. No sales or purchases are being facilitated for this pending project. 
            <a href="#" className="text-[#777] font-medium ml-[5px] hover:text-[#a68226]">Read More <i className="fa-solid fa-chevron-down text-[10px]"></i></a>
          </p>
          
          <div className="text-[#777] text-[12px] mb-[10px]">
            © <a href="#" className="text-[#777] hover:text-[#a68226] transition-colors">Privacy Policy</a> | <a href="#" className="text-[#777] hover:text-[#a68226] transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
      
      <div className="bg-[#232d30] text-[#b5cfda] p-[12px_20px]">
        <div className="mx-auto w-full lg:max-w-[1320px] text-center">
          <p className="text-[13px] m-0">All Rights Reserved. © 2026</p>
        </div>
      </div>
    </footer>
  );
}