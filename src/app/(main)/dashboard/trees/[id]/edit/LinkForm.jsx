'use client';

import { useState } from 'react';
import { FiLink, FiInstagram, FiTwitter, FiGithub, FiYoutube, FiFacebook, FiLinkedin } from 'react-icons/fi';

const ICON_OPTIONS = [
  { value: 'link', label: 'Link', icon: FiLink },
  { value: 'instagram', label: 'Instagram', icon: FiInstagram },
  { value: 'twitter', label: 'Twitter', icon: FiTwitter },
  { value: 'github', label: 'GitHub', icon: FiGithub },
  { value: 'youtube', label: 'YouTube', icon: FiYoutube },
  { value: 'facebook', label: 'Facebook', icon: FiFacebook },
  { value: 'linkedin', label: 'LinkedIn', icon: FiLinkedin },
];

export default function LinkForm({ initialData = {}, onSubmit, onCancel }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [url, setUrl] = useState(initialData.url || '');
  const [icon, setIcon] = useState(initialData.icon || 'link');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!url.trim()) {
      newErrors.url = 'URL is required';
    } else if (!isValidUrl(url)) {
      newErrors.url = 'Please enter a valid URL';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (string) => {
    try {
      // Add https:// if no protocol is specified
      const urlString = string.match(/^https?:\/\//) ? string : `https://${string}`;
      new URL(urlString);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Ensure URL has a protocol
      let formattedUrl = url;
      if (!formattedUrl.match(/^https?:\/\//)) {
        formattedUrl = `https://${formattedUrl}`;
      }
      
      onSubmit({
        title,
        url: formattedUrl,
        icon,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Link Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="My Website"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>

        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
            URL
          </label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
              errors.url ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="https://example.com"
          />
          {errors.url && (
            <p className="mt-1 text-sm text-red-600">{errors.url}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Icon
          </label>
          <div className="grid grid-cols-4 gap-2">
            {ICON_OPTIONS.map((option) => {
              const IconComponent = option.icon;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setIcon(option.value)}
                  className={`flex flex-col items-center justify-center p-3 border rounded-md ${
                    icon === option.value
                      ? 'border-blue-500 bg-blue-50 text-blue-600'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent size={20} />
                  <span className="text-xs mt-1">{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {initialData._id ? 'Update Link' : 'Add Link'}
          </button>
        </div>
      </div>
    </form>
  );
}
