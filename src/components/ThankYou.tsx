import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#e2e6e9] flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] max-w-lg w-full text-center">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="fa-solid fa-check text-4xl text-green-500"></i>
        </div>
        
        <h1 className="text-3xl font-bold text-[#a68226] mb-4">Thank You!</h1>
        
        <p className="text-gray-600 mb-8 text-[15px] leading-relaxed">
          Your interest has been registered successfully. Our team will contact you shortly to provide further details.
        </p>
        
        <Link 
          to="/" 
          className="inline-block bg-[#a68226] text-white px-8 py-[14px] rounded-lg font-medium hover:bg-[#8e6d1c] transition-all duration-300 shadow-md"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}