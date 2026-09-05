export default function Pricing() {
  const prices = [
    { type: "3 BHK (small)", price: "₹3 cr* Onwards" },
    { type: "3 BHK (Medium)", price: "₹3.75 Cr* Onwards" },
    { type: "3 BHK (Large)", price: "₹4.30 Cr* Onwards" },
    { type: "4 BHK (Small)", price: "₹5.75 Cr* Onwards" },
    { type: "4 BHK (Medium)", price: "₹ 6.30 Cr* Onwards" }
  ];

  return (
    <section id="pricing" className="bg-[#f4f3f3] p-[50px_20px] my-[15px]">
      <div className="mx-auto w-full lg:max-w-[1320px]">
        <div className="flex flex-col items-center mb-12 text-center">
          <h1 className="text-[22px] lg:text-[26px] text-[#a68226] mb-2 font-semibold tracking-[1.2px]">L&amp;T Thanisandra - Area &amp; Pricing</h1>
          <div className="w-[60px] h-[2px] bg-[#a68226] mt-1"></div>
        </div>
        
        <div className="max-w-[1000px] mx-auto bg-white rounded-xl overflow-hidden border border-[#a68226]">
          <table className="w-full border-collapse text-center">
            <thead className="hidden md:table-header-group bg-[#a68226] text-white">
              <tr>
                <th className="p-4 font-medium text-[16px]">Type</th>
                <th className="p-4 font-medium text-[16px]">Area</th>
                <th className="p-4 font-medium text-[16px]">Price (Onwards)</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {prices.map((item, index) => (
                <tr key={index} className={`flex flex-col md:table-row p-[15px] md:p-0 border-b-2 border-[#a68226] md:border-b-0 ${index % 2 !== 0 ? 'md:bg-[#f0f0f0]' : 'bg-white'}`}>
                  <td className="flex justify-between items-center md:table-cell p-[10px_5px] md:p-4 text-right md:text-center border-b border-[#e2e2e2] md:border-none text-[#333] text-[15px]">
                    <span className="font-semibold text-[#555] md:hidden">Type</span> {item.type}
                  </td>
                  <td className="flex justify-between items-center md:table-cell p-[10px_5px] md:p-4 text-right md:text-center border-b border-[#e2e2e2] md:border-none text-[#333] text-[15px]">
                    <span className="font-semibold text-[#555] md:hidden">Area</span> On Request
                  </td>
                  <td className="flex justify-between items-center md:table-cell p-[10px_5px] md:p-4 text-right md:text-center border-b border-[#e2e2e2] md:border-none text-[#333] text-[15px]">
                    <span className="font-semibold text-[#555] md:hidden">Price (Onwards)</span> {item.price}
                  </td>
                  <td className="flex justify-center mt-[15px] md:mt-0 md:table-cell p-[10px_5px] md:p-4">
                    <a href="#contact" className="inline-block bg-[#a68226] hover:bg-[#8e6d1c] text-white py-2 px-6 rounded-[25px] text-[14px] border-2 border-[#8e6d1c] transition-all duration-300 btn-pricing">
                      Complete Costing Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}