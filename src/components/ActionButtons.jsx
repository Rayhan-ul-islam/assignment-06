'use client';

import React from 'react';

export default function ActionButtons({ workout }) {
  const handleAddToPlan = () => {
    const existingPlan = JSON.parse(localStorage.getItem('todaysPlan')) || [];
    if (!existingPlan.some((item) => item.id.toString() === workout.id.toString())) {
      const updatedPlan = [...existingPlan, workout];
      localStorage.setItem('todaysPlan', JSON.stringify(updatedPlan));
      alert("Workout added to today's plan!");
    } else {
      alert("This workout is already in today's plan!");
    }
  };

  const handleSaveForLater = () => {
    const existingSaved = JSON.parse(localStorage.getItem('savedWorkouts')) || [];
    if (!existingSaved.some((item) => item.id.toString() === workout.id.toString())) {
      const updatedSaved = [...existingSaved, workout];
      localStorage.setItem('savedWorkouts', JSON.stringify(updatedSaved));
      alert("Workout saved for later!");
    } else {
      alert("This workout is already saved!");
    }
  };

  return (
    <div className="mt-auto flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={handleAddToPlan}
        className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#ccff00] px-5 py-3.5 font-bold text-black shadow-lg shadow-[#ccff00]/10 transition-colors hover:bg-[#b3e600]"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span>Add to today&apos;s plan</span>
      </button>

      <button
        type="button"
        onClick={handleSaveForLater}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-800 bg-[#1a2234] px-5 py-3.5 font-semibold text-white transition-colors hover:bg-[#222c42]"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
        <span>Save for later</span>
      </button>
    </div>
  );
}