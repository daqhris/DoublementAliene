'use client';

import React, { useState } from 'react';

interface PDFViewerProps {
  src: string;
  title: string;
  description?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ src, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="theater-section mb-12">
      <div className="theater-section-header mb-6">
        <h3 className="theater-nav-title mb-2">{title}</h3>
        {description && (
          <p className="theater-nav-description mb-4">{description}</p>
        )}
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="theater-button-primary"
        >
          {isExpanded ? 'Masquer le document' : 'Afficher le document'}
        </button>
      </div>

      {isExpanded && (
        <div className="theater-card-modern p-6">
          <div className="pdf-viewer-container">
            <object
              data={`${src}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`}
              type="application/pdf"
              className="pdf-object"
              aria-label={title}
            >
              <div className="pdf-fallback">
                <div className="theater-card p-6 text-center">
                  <h4 className="theater-nav-title mb-4">Document PDF : {title}</h4>
                  <p className="theater-nav-description mb-4">
                    Ce document PDF contient des informations importantes pour la performance théâtrale.
                    Si le document ne s'affiche pas correctement, votre navigateur peut ne pas supporter 
                    l'affichage PDF intégré.
                  </p>
                  <div className="bg-theater-muted p-4 rounded-lg">
                    <p className="text-sm text-theater-text">
                      <strong>Contenu du document :</strong><br/>
                      {description || "Documentation de performance théâtrale"}
                    </p>
                  </div>
                </div>
              </div>
            </object>
          </div>
        </div>
      )}
    </section>
  );
};

export default PDFViewer;
