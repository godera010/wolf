import { Camera, Instagram, Maximize2 } from 'lucide-react';
import { useState } from 'react';

// Import images from assets
import img1 from '@/assets/image4.webp';
import img2 from '@/assets/image5.webp';
import img3 from '@/assets/image6.png';
import img4 from '@/assets/image10.jpeg';
import img5 from '@/assets/image11.jpeg';
import img6 from '@/assets/imag12.jpeg';
import img7 from '@/assets/image7.jpeg';
import img8 from '@/assets/image1.webp';

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
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={img5}
              alt="RoadWolf Life on the Road"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <span className="text-[#e96f30] font-bold uppercase tracking-widest text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Captured Moments</span>
            <h1 className="font-bold text-4xl md:text-6xl text-white mb-6 drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Life on the Road
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto text-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
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

        {/* Instagram CTA - Parallax Style */}
        <section
          className="py-20 text-white relative overflow-hidden bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${img4})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#01257d]/90 z-0"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <Camera className="mx-auto mb-6 text-[#e96f30]" size={48} />
            <h2 className="font-bold text-3xl md:text-5xl mb-6">Follow Us on Instagram</h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg">
              Share your journey with us! Tag @RoadWolfCoaches for a chance to be featured in our monthly travel spotlight.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-[#01257d] font-bold px-8 py-4 rounded-full hover:bg-[#e96f30] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105"
            >
              <Instagram size={24} />
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
