import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import MobileForm from './components/MobileForm';
import Overview from './components/Overview';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import FloorPlan from './components/FloorPlan';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import LocationTabs from './components/LocationTabs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import EnquireModal from './components/EnquireModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href') === '#contact') {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="font-['Helvetica',system-ui,-apple-system,sans-serif] text-[14.5px] text-black bg-white">
      <Navbar />
      <div className="mt-[60px] flex w-full">
        <main className="w-full lg:w-[calc(100%-320px)] bg-[#e2e6e9] min-h-[calc(100vh-60px)] pb-[50px] lg:pb-[10px]">
          <HeroBanner />
          <MobileForm />
          <Overview />
          <Highlights />
          <Pricing />
          <FloorPlan />
          <Amenities />
          <Gallery />
          <LocationTabs />
          <Contact />
          <Footer />
        </main>
        <Sidebar openModal={() => setIsModalOpen(true)} />
      </div>

      <div className="lg:hidden fixed bottom-[20px] left-1/2 -translate-x-1/2 z-[9999] w-[85%] max-w-[320px]">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-[#8e6d1c] hover:bg-[#000000] text-white py-[14px] px-[20px] rounded-[50px] shadow-[0_8px_20px_rgba(166,130,38,0.4)] flex items-center justify-center gap-[10px] font-medium text-[16px] transition-all duration-300 active:scale-95"
        >
          <i className="fa-solid fa-calendar-check text-[18px]"></i>
          Schedule Site Visit
        </button>
      </div>

      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}