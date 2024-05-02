"use client";
import React from 'react';

const ClearLocalStorageButton = () => {
  const handleClearLocalStorage = () => {
    // Clear specific items from localStorage
    localStorage.removeItem('formDataName');
    localStorage.removeItem('formDataTagline');

    // Optional: Clear all items from localStorage
    // localStorage.clear();
    
    // Optionally notify user or perform additional actions
    alert('Data cleared from localStorage!');
  };

  return (
    <button className=' bg-white' onClick={handleClearLocalStorage}>
      Clear Local Storage
    </button>
  );
};

export default ClearLocalStorageButton;
