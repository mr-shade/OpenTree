'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LinkList from './LinkList';
import LinkForm from './LinkForm';
import TreeSettings from './TreeSettings';

export default function TreeEditor({ tree }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('links');
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddLinkForm, setShowAddLinkForm] = useState(false);

  useEffect(() => {
    fetchLinks();
  }, [tree._id]);

  const fetchLinks = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/trees/${tree._id}/links`);
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Failed to fetch links');
      }
      
      setLinks(data.links);
    } catch (error) {
      setError('Error loading links. Please try again.');
      console.error('Error fetching links:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddLink = async (linkData) => {
    try {
      const res = await fetch(`/api/trees/${tree._id}/links`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(linkData),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Failed to add link');
      }
      
      setLinks([...links, data.link]);
      setShowAddLinkForm(false);
    } catch (error) {
      setError('Error adding link. Please try again.');
      console.error('Error adding link:', error);
    }
  };

  const handleUpdateLink = async (linkId, linkData) => {
    try {
      const res = await fetch(`/api/trees/${tree._id}/links/${linkId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(linkData),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Failed to update link');
      }
      
      setLinks(links.map(link => link._id === linkId ? data.link : link));
    } catch (error) {
      setError('Error updating link. Please try again.');
      console.error('Error updating link:', error);
    }
  };

  const handleDeleteLink = async (linkId) => {
    try {
      const res = await fetch(`/api/trees/${tree._id}/links/${linkId}`, {
        method: 'DELETE',
      });
      
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to delete link');
      }
      
      setLinks(links.filter(link => link._id !== linkId));
    } catch (error) {
      setError('Error deleting link. Please try again.');
      console.error('Error deleting link:', error);
    }
  };

  const handleReorderLinks = async (reorderedLinks) => {
    setLinks(reorderedLinks);
    
    try {
      // Update positions in database
      for (let i = 0; i < reorderedLinks.length; i++) {
        await fetch(`/api/trees/${tree._id}/links/${reorderedLinks[i]._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ position: i }),
        });
      }
    } catch (error) {
      setError('Error saving link order. Please try again.');
      console.error('Error reordering links:', error);
      fetchLinks(); // Reload links if there was an error
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="border-b border-gray-200">
        <nav className="flex">
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === 'links'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('links')}
          >
            Links
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === 'settings'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeTab === 'appearance'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('appearance')}
          >
            Appearance
          </button>
        </nav>
      </div>

      <div className="p-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        )}

        {activeTab === 'links' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Links</h2>
              <button
                onClick={() => setShowAddLinkForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Add New Link
              </button>
            </div>

            {showAddLinkForm && (
              <div className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50">
                <h3 className="text-lg font-medium mb-4">Add New Link</h3>
                <LinkForm 
                  onSubmit={handleAddLink} 
                  onCancel={() => setShowAddLinkForm(false)} 
                />
              </div>
            )}

            {isLoading ? (
              <div className="text-center py-8">
                <p>Loading links...</p>
              </div>
            ) : links.length === 0 ? (
              <div className="text-center py-8 bg-gray-50 rounded-md">
                <p className="text-gray-600 mb-4">You don't have any links yet</p>
                <button
                  onClick={() => setShowAddLinkForm(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                  Add Your First Link
                </button>
              </div>
            ) : (
              <LinkList 
                links={links} 
                onUpdate={handleUpdateLink} 
                onDelete={handleDeleteLink} 
                onReorder={handleReorderLinks}
              />
            )}
          </div>
        )}

        {activeTab === 'settings' && (
          <TreeSettings tree={tree} />
        )}

        {activeTab === 'appearance' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Appearance Settings</h2>
            <p className="text-gray-600">Appearance settings coming soon...</p>
          </div>
        )}
      </div>

      <div className="bg-gray-50 px-6 py-4 flex justify-between">
        <Link
          href={`/${tree.slug}`}
          target="_blank"
          className="text-blue-600 hover:text-blue-800"
        >
          View your page
        </Link>
        <Link
          href="/dashboard"
          className="text-gray-600 hover:text-gray-800"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
