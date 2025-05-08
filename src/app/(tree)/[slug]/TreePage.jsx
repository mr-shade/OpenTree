'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

export default function TreePage({ tree, links, owner }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const trackLinkClick = async (linkId) => {
    try {
      await fetch(`/api/trees/${tree._id}/links/${linkId}`, {
        method: 'GET',
      });
    } catch (error) {
      console.error('Error tracking link click:', error);
    }
  };

  // Apply theme styles based on tree settings
  const getThemeStyles = () => {
    const themeStyles = {
      backgroundColor: tree.backgroundColor || '#ffffff',
      textColor: tree.textColor || '#000000',
      buttonColor: tree.buttonColor || '#3b82f6',
      buttonTextColor: tree.buttonTextColor || '#ffffff',
    };

    // Apply predefined themes
    if (tree.theme === 'dark') {
      themeStyles.backgroundColor = '#121212';
      themeStyles.textColor = '#ffffff';
    } else if (tree.theme === 'light') {
      themeStyles.backgroundColor = '#ffffff';
      themeStyles.textColor = '#000000';
    } else if (tree.theme === 'neon') {
      themeStyles.backgroundColor = '#0f172a';
      themeStyles.textColor = '#ffffff';
      themeStyles.buttonColor = '#10b981';
      themeStyles.buttonTextColor = '#ffffff';
    } else if (tree.theme === 'minimal') {
      themeStyles.backgroundColor = '#f8fafc';
      themeStyles.textColor = '#334155';
      themeStyles.buttonColor = '#f8fafc';
      themeStyles.buttonTextColor = '#334155';
    }

    return themeStyles;
  };

  const themeStyles = getThemeStyles();

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div 
      className="min-h-screen flex flex-col items-center py-12 px-4"
      style={{ backgroundColor: themeStyles.backgroundColor, color: themeStyles.textColor }}
    >
      <div className="w-full max-w-md mx-auto">
        <div className="flex flex-col items-center mb-8">
          {owner?.image ? (
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
              <Image 
                src={owner.image} 
                alt={owner.name || 'Profile'} 
                width={96} 
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
          ) : (
            <div 
              className="w-24 h-24 rounded-full mb-4 flex items-center justify-center text-3xl font-bold border-4 border-white shadow-lg"
              style={{ backgroundColor: themeStyles.buttonColor, color: themeStyles.buttonTextColor }}
            >
              {owner?.name?.charAt(0) || 'U'}
            </div>
          )}
          
          <h1 className="text-2xl font-bold mb-2" style={{ color: themeStyles.textColor }}>
            {owner?.name || 'User'}
          </h1>
          
          {owner?.bio && (
            <p className="text-center text-sm mb-4 opacity-80" style={{ color: themeStyles.textColor }}>
              {owner.bio}
            </p>
          )}
          
          {tree.description && (
            <p className="text-center text-sm mb-4 opacity-80" style={{ color: themeStyles.textColor }}>
              {tree.description}
            </p>
          )}
        </div>
        
        <div className="space-y-4 w-full">
          {links.length === 0 ? (
            <div 
              className="text-center p-6 rounded-lg border"
              style={{ borderColor: `${themeStyles.textColor}20` }}
            >
              No links available
            </div>
          ) : (
            links.map((link) => (
              <a
                key={link._id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLinkClick(link._id)}
                className="flex items-center justify-between w-full p-4 rounded-lg transition-transform transform hover:scale-[1.02] hover:shadow-md"
                style={{ 
                  backgroundColor: themeStyles.buttonColor,
                  color: themeStyles.buttonTextColor,
                }}
              >
                <span className="font-medium">{link.title}</span>
                <FiExternalLink />
              </a>
            ))
          )}
        </div>
        
        <div className="mt-12 text-center text-xs opacity-70">
          <p>Powered by <a href="/" className="underline">OpenTree</a></p>
        </div>
      </div>
    </div>
  );
}
