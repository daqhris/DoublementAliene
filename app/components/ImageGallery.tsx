'use client';

import React, { useState } from 'react';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  title: string;
  description?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title, description }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="theater-section mb-12">
      <div className="theater-section-header mb-8">
        <h2 className="theater-heading-md mb-4">{title}</h2>
        {description && (
          <p className="theater-subtitle">{description}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={index}
            className="theater-card cursor-pointer transition-all duration-300 hover:shadow-lg"
            onClick={() => setSelectedImage(index)}
          >
            <div className="aspect-gallery mb-4">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            {image.caption && (
              <p className="text-sm text-theater-muted">{image.caption}</p>
            )}
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ×
            </button>
            {images[selectedImage].caption && (
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded">
                <p>{images[selectedImage].caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
