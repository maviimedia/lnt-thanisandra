import LeadForm from './LeadForm';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquireModal({ isOpen, onClose }: EnquireModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[10000] animate-[fadeIn_0.3s_ease]" onClick={onClose}>
      <div
        className="bg-white w-[90%] max-w-[450px] p-[40px_30px] rounded-xl relative transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-[15px] right-[15px] bg-transparent border-none text-[20px] text-[#333] cursor-pointer"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h2 className="text-center text-[#888] text-[28px] mb-[5px] font-semibold">Enquire Now</h2>
        <p className="text-center text-black text-[14px] mb-[30px]">Register Here And Avail The Best Benefits!!</p>

        <LeadForm source="Popup Modal" />
      </div>
    </div>
  );
}