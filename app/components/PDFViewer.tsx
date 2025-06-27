'use client';

import React, { useState } from 'react';

interface PDFViewerProps {
  src: string;
  title: string;
  description?: string;
  downloadName?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ src, title, description, downloadName }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="theater-section mb-12">
      <div className="theater-section-header mb-6">
        <h3 className="theater-nav-title mb-2">{title}</h3>
        {description && (
          <p className="theater-nav-description mb-4">{description}</p>
        )}
        
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="theater-button-primary"
          >
            {isExpanded ? 'Réduire' : 'Afficher le document'}
          </button>
          
          <a
            href={src}
            download={downloadName || title}
            className="theater-button-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger PDF
          </a>
          
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="theater-link"
          >
            Ouvrir dans un nouvel onglet
          </a>
        </div>
      </div>

      {isExpanded && (
        <div className="theater-card-modern p-6">
          <div className="w-full" style={{ height: '600px' }}>
            <iframe
              src={src}
              className="w-full h-full border-0 rounded-lg"
              title={title}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PDFViewer;
