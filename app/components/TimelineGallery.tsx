'use client';

import React, { useState } from 'react';

interface TimelineItem {
  date: string;
  title: string;
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  description?: string;
}

interface TimelineGalleryProps {
  items: TimelineItem[];
  title: string;
  description?: string;
}

const TimelineGallery: React.FC<TimelineGalleryProps> = ({ items, title, description }) => {
  const [selectedImage, setSelectedImage] = useState<{ itemIndex: number; imageIndex: number } | null>(null);

  return (
    <section className="theater-section mb-12">
      <div className="theater-section-header mb-8">
        <h2 className="theater-heading-md mb-4">{title}</h2>
        {description && (
          <p className="theater-subtitle">{description}</p>
        )}
      </div>

      <div className="timeline-container">
        {items.map((item, itemIndex) => (
          <div key={itemIndex} className="timeline-item mb-12">
            <div className="timeline-marker">
              <div className="timeline-date">
                <span className="timeline-date-text">{item.date}</span>
              </div>
            </div>
            
            <div className="timeline-content">
              <div className="theater-card-modern p-6">
                <h3 className="theater-nav-title mb-4">{item.title}</h3>
                {item.description && (
                  <p className="theater-nav-description mb-6">{item.description}</p>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {item.images.map((image, imageIndex) => (
                    <div 
                      key={imageIndex}
                      className="cursor-pointer transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden"
                      onClick={() => setSelectedImage({ itemIndex, imageIndex })}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                      {image.caption && (
                        <div className="p-3 bg-theater-background">
                          <p className="text-sm text-theater-muted">{image.caption}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              src={items[selectedImage.itemIndex].images[selectedImage.imageIndex].src}
              alt={items[selectedImage.itemIndex].images[selectedImage.imageIndex].alt}
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
            {items[selectedImage.itemIndex].images[selectedImage.imageIndex].caption && (
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded">
                <p>{items[selectedImage.itemIndex].images[selectedImage.imageIndex].caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default TimelineGallery;
