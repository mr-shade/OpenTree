'use client';

import { useState } from 'react';
import { FiEdit2, FiTrash2, FiEye, FiEyeOff, FiGrip } from 'react-icons/fi';
import LinkForm from './LinkForm';

export default function LinkList({ links, onUpdate, onDelete, onReorder }) {
  const [editingLinkId, setEditingLinkId] = useState(null);
  const [draggedLinkId, setDraggedLinkId] = useState(null);

  const handleDragStart = (e, linkId) => {
    setDraggedLinkId(linkId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetLinkId) => {
    e.preventDefault();
    
    if (draggedLinkId === targetLinkId) {
      return;
    }
    
    const draggedLinkIndex = links.findIndex(link => link._id === draggedLinkId);
    const targetLinkIndex = links.findIndex(link => link._id === targetLinkId);
    
    const newLinks = [...links];
    const [draggedLink] = newLinks.splice(draggedLinkIndex, 1);
    newLinks.splice(targetLinkIndex, 0, draggedLink);
    
    // Update positions
    const reorderedLinks = newLinks.map((link, index) => ({
      ...link,
      position: index
    }));
    
    onReorder(reorderedLinks);
    setDraggedLinkId(null);
  };

  const handleToggleActive = (linkId, isCurrentlyActive) => {
    onUpdate(linkId, { isActive: !isCurrentlyActive });
  };

  return (
    <div className="space-y-4">
      {links.map((link) => (
        <div 
          key={link._id}
          className={`border rounded-md overflow-hidden ${
            draggedLinkId === link._id ? 'border-blue-500 opacity-50' : 'border-gray-200'
          }`}
          draggable
          onDragStart={(e) => handleDragStart(e, link._id)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, link._id)}
        >
          {editingLinkId === link._id ? (
            <div className="p-4 bg-gray-50">
              <LinkForm 
                initialData={link}
                onSubmit={(data) => {
                  onUpdate(link._id, data);
                  setEditingLinkId(null);
                }}
                onCancel={() => setEditingLinkId(null)}
              />
            </div>
          ) : (
            <div className="flex items-center p-4">
              <div 
                className="mr-3 cursor-move text-gray-400 hover:text-gray-600"
                title="Drag to reorder"
              >
                <FiGrip size={20} />
              </div>
              
              <div className="flex-grow">
                <h3 className="font-medium text-gray-900">{link.title}</h3>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  {link.url}
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleToggleActive(link._id, link.isActive)}
                  className={`p-2 rounded-full ${
                    link.isActive 
                      ? 'text-green-600 hover:bg-green-50' 
                      : 'text-gray-400 hover:bg-gray-50'
                  }`}
                  title={link.isActive ? 'Active (click to hide)' : 'Hidden (click to show)'}
                >
                  {link.isActive ? <FiEye size={18} /> : <FiEyeOff size={18} />}
                </button>
                
                <button
                  onClick={() => setEditingLinkId(link._id)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                  title="Edit link"
                >
                  <FiEdit2 size={18} />
                </button>
                
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this link?')) {
                      onDelete(link._id);
                    }
                  }}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                  title="Delete link"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
