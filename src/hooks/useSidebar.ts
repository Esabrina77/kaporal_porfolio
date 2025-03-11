import { useState, useEffect } from 'react';

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Ferme le sidebar sur mobile quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector('[data-sidebar]');
      const button = document.querySelector('[data-sidebar-btn]');
      
      if (sidebar && button && 
          !sidebar.contains(event.target as Node) && 
          !button.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return { isOpen, toggleSidebar };
} 