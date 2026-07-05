// src/BlurringSpinner.tsx
import React from 'react';
import { useBlurringSpinnerStore } from '../stores/BlurringSpinnerStore';

const BlurringSpinner: React.FC = () => {
  const loadingStore = useBlurringSpinnerStore()

  return (
    // <div className="relative h-screen">
    <div>
      {/* Blurred background */}
      {loadingStore.loading && <div className="absolute inset-0 backdrop-filter backdrop-blur-sm"></div>}
      {/* Rotor wheel */}
      {loadingStore.loading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
        </div>
      )}
      {/* Your content goes here
      <div className="container mx-auto pt-10">
        <h1 className="text-3xl font-bold">Your App Content</h1>
        <button onClick={() => loadingStore.setLoading(true)} className="mt-4 px-4 py-2 bg-blue-500 text-white">
          Make Request
        </button>
      </div> */}
    </div>
  );
};

export default BlurringSpinner;