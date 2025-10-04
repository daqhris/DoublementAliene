'use client';
import React, { useState, useEffect } from 'react';

const NotificationBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem('platform-notification-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('platform-notification-dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="theater-notification-banner">
      <div className="theater-notification-content">
        <p className="theater-subtitle">
          <strong>N.B.:</strong> Cette interface est en cours de construction et promet des améliorations continues 
        </p>
        <button 
          onClick={handleDismiss}
          className="theater-notification-dismiss"
          aria-label="Fermer la notification"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default NotificationBanner;
