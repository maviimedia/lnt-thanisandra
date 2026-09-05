import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  phone: string;
  email?: string;
}

interface LeadFormProps {
  source: string;
}

export default function LeadForm({ source }: LeadFormProps) {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = (data: FormData) => {
    setShowPopup(true);
    reset();

    const payload = {
      name: data.name,
      email: data.email || "",
      phone: data.phone,
      source: source
    };

    fetch('https://script.google.com/macros/s/AKfycbwzWtwJBgKBHyyZfFfyP7U_2SFX3AnP6FkbPblP02uuUL_Ndv6koa52SSlGuOs3NacX/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).catch(error => console.error(error));
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        <div className="relative">
          <i className="fa-solid fa-user absolute left-[15px] top-1/2 -translate-y-1/2 text-[#a68226] text-[16px] z-[2]"></i>
          <input
            type="text"
            {...register('name', { required: true })}
            placeholder="Name*"
            className="w-full px-4 py-3 pl-[45px] border border-gray-300 rounded-md text-sm outline-none focus:border-[#a68226] transition-colors bg-white"
          />
        </div>
        
        <div className="relative">
          <i className="fa-solid fa-phone absolute left-[15px] top-1/2 -translate-y-1/2 text-[#a68226] text-[16px] z-[2]"></i>
          <input
            type="tel"
            {...register('phone', { required: true })}
            placeholder="Phone Number*"
            className="w-full px-4 py-3 pl-[45px] border border-gray-300 rounded-md text-sm outline-none focus:border-[#a68226] transition-colors bg-white"
          />
        </div>

        <div className="relative">
          <i className="fa-solid fa-envelope absolute left-[15px] top-1/2 -translate-y-1/2 text-[#a68226] text-[16px] z-[2]"></i>
          <input
            type="email"
            {...register('email')}
            placeholder="Email (Optional)"
            className="w-full px-4 py-3 pl-[45px] border border-gray-300 rounded-md text-sm outline-none focus:border-[#a68226] transition-colors bg-white"
          />
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" defaultChecked className="mt-1 flex-shrink-0" required />
          <label className="text-[10px] text-gray-500 leading-relaxed text-justify">
            Please be informed that this website is not intended to facilitate any sales transactions. I understand and acknowledge that the project I am interested in hasn't yet secured RERA clearance. The primary purpose of this website is to generate interest and gather information. By providing my data, I consent to its use in accordance with the Privacy Policy | Terms & Conditions
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#a68226] hover:bg-[#8e6d1c] text-white py-[14px] rounded-lg text-[16px] font-medium transition-colors"
        >
          Express Your Interest
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[100000]">
          <div className="bg-white p-8 rounded-xl max-w-sm w-[90%] text-center shadow-2xl">
            <div className="text-4xl text-green-500 mb-4">✓</div>
            <h3 className="text-2xl font-bold text-[#a68226] mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">Your interest has been registered successfully. Our team will contact you shortly.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#a68226] text-white px-6 py-2 rounded-full font-medium hover:bg-[#8e6d1c] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}