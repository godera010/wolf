import { Camera, Instagram, Maximize2 } from 'lucide-react';
import { useState } from 'react';

// Import images from assets
import img1 from '@/assets/DH9iuo6qo8ZS4deIgYiQ8DaQWH2c0N05y06Wl8sm.jpg';
import img2 from '@/assets/IMG-20250223-WA0006.jpg';
import img3 from '@/assets/IMG-20250330-WA0005.jpg.jpeg';
import img4 from '@/assets/IMG-20250330-WA0013.jpg.jpeg';
import img5 from '@/assets/IMG-20250330-WA0014.jpg.jpeg';
import img6 from '@/assets/images (1).jpg';
import img7 from '@/assets/images (2).jpg';
import img8 from '@/assets/images.jpg';

export default function GalleryPage() {
  const images = [
    { src: img1, alt: "Luxury Coach Exterior", category: "Fleet" },
    { src: img2, alt: "Bus Terminal", category: "Terminals" },
    { src: img3, alt: "Comfortable Seating", category: "Interior" },
    { src: img4, alt: "Night Travel", category: "Fleet" },
    { src: img5, alt: "On the Road", category: "Travel" },
    { src: img6, alt: "Happy Passengers", category: "Community" },
    { src: img7, alt: "Safe Travel", category: "Safety" },
    { src: img8, alt: "RoadWolf Experience", category: "Lifestyle" },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white overflow-x-hidden flex flex-col flex-grow relative">

      <div className="flex-grow relative">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
             <div className="absolute top-[5%] left-[-5%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl" />
             <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-24 pb-12 text-center z-10">
          <div className="container mx-auto px-4">
            <span className="text-[#e96f30] font-bold uppercase tracking-widest text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Captured Moments</span>
            <h1 className="font-bold text-4xl md:text-5xl text-[#01257d] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Life on the Road
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Explore our fleet, our people, and the beautiful landscapes of Zimbabwe through our lens.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 pb-24 relative z-10">
          <div className="container mx-auto px-4">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {images.map((img, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer bg-slate-100 break-inside-avoid"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" size={32} />
                  </div>
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-[#e96f30] text-xs font-bold uppercase tracking-wider mb-1">{img.category}</p>
                    <p className="text-white font-bold text-lg">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram CTA */}
        <section className="py-16 bg-[#01257d] text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
                <Camera className="mx-auto mb-6 text-[#e96f30]" size={48} />
                <h2 className="font-bold text-3xl mb-4">Follow Us on Instagram</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                    Share your journey with us! Tag @RoadWolfCoaches for a chance to be featured in our monthly travel spotlight.
                </p>
                <a 
                    href="#" 
                    className="inline-flex items-center gap-2 bg-white text-[#01257d] font-bold px-8 py-3 rounded-full hover:bg-[#e96f30] hover:text-white transition-colors duration-300 shadow-lg"
                >
                    <Instagram size={20} />
                    <span>@RoadWolfCoaches</span>
                </a>
            </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
            >
                <Maximize2 size={32} className="rotate-45" /> {/* Use rotate-45 as a close X icon substitute or import X */}
            </button>
            <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
        </div>
      )}
    </div>
  );
}
