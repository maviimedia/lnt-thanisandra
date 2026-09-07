import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
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
    }).then(() => {
      reset();
      navigate('/thank-you');
    }).catch(error => {
      console.error(error);
      reset();
      navigate('/thank-you');
    });
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
    </div>
  );
}