"use client";

import React, { useState, useEffect } from 'react';

interface CommitInfo {
  date: string;
  sha: string;
  message: string;
  author: string;
}

const formatRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return 'il y a quelques secondes';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `il y a ${hours} heure${hours > 1 ? 's' : ''}`;
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `il y a ${days} jour${days > 1 ? 's' : ''}`;
  } else {
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
};

export const GitTimestamps: React.FC = () => {
  const [lastCommit, setLastCommit] = useState<CommitInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLastCommit = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.github.com/repos/daqhris/DoublementAliene/commits/main');
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        const commitDate = new Date(data.commit.author.date);
        
        setLastCommit({
          date: commitDate.toISOString(),
          sha: data.sha.substring(0, 7),
          message: data.commit.message.split('\n')[0],
          author: data.commit.author.name
        });
        setError(null);
      } catch (error) {
        console.error('Erreur lors de la récupération du commit:', error);
        setError('Impossible de récupérer les informations de commit');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLastCommit();
    const interval = setInterval(fetchLastCommit, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="text-center text-theater-muted">
        <div className="animate-pulse">Chargement des informations Git...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-theater-error text-sm">
        {error}
      </div>
    );
  }

  if (!lastCommit) {
    return null;
  }

  const commitDate = new Date(lastCommit.date);
  const relativeTime = formatRelativeTime(commitDate);

  return (
    <div className="text-center text-sm text-theater-muted space-y-1">
      <div>
        <strong>Dernière mise à jour:</strong> {relativeTime}
      </div>
      <div className="text-xs">
        Commit <code className="bg-theater-muted/10 px-1 py-0.5 rounded font-mono">{lastCommit.sha}</code> par {lastCommit.author}
      </div>
      <div className="text-xs max-w-md mx-auto truncate">
        {lastCommit.message}
      </div>
    </div>
  );
};
