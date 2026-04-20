'use client';
import React, { useState, useEffect } from 'react';

const NOTICES = [
  {
    key: 'platform-notification-dismissed',
    message: (
      <>
        <strong>N.B.:</strong> Cette application est en cours de construction et promet des améliorations continues.
      </>
    ),
  },
  {
    key: 'renaming-notification-dismissed',
    message: (
      <>
        <strong>N.B.:</strong> Le titre changera: {' '}
        <em>«Doublement Aliéné»</em> → <em>«Double Étrangeté»</em>{' '}
        <span style={{ opacity: 0.7 }}>(EN: <em>«Twofold Alienness»</em>)</span>.
      </>
    ),
  },
];

const NotificationBanner: React.FC = () => {
  const [visible, setVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const state: Record<string, boolean> = {};
    NOTICES.forEach(({ key }) => {
      state[key] = localStorage.getItem(key) !== 'true';
    });
    setVisible(state);
  }, []);

  const handleDismiss = (key: string) => {
    setVisible((prev) => ({ ...prev, [key]: false }));
    localStorage.setItem(key, 'true');
  };

  const anyVisible = Object.values(visible).some(Boolean);
  if (!anyVisible) return null;

  return (
    <>
      {NOTICES.map(({ key, message }) =>
        visible[key] ? (
          <div key={key} className="theater-notification-banner">
            <div className="theater-notification-content">
              <p className="theater-text">{message}</p>
              <button
                onClick={() => handleDismiss(key)}
                className="theater-notification-dismiss"
                aria-label="Fermer la notification"
              >
                ×
              </button>
            </div>
          </div>
        ) : null
      )}
    </>
  );
};

export default NotificationBanner;
