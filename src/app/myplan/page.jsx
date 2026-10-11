'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MyPlan() {
  const [activeTab, setActiveTab] = useState("Today's Plan");
  const [plans, setPlans] = useState([]);

  // কম্পোনেন্ট লোড হওয়ার পর localStorage থেকে ডাটা নিয়ে আসা
  useEffect(() => {
    const loadWorkouts = () => {
      if (activeTab === "Today's Plan") {
        const storedPlan = JSON.parse(localStorage.getItem('todaysPlan')) || [];
        setPlans(storedPlan);
      } else {
        const storedSaved = JSON.parse(localStorage.getItem('savedWorkouts')) || [];
        setPlans(storedSaved);
      }
    };
    loadWorkouts();
  }, [activeTab]);

  // তালিকা থেকে আইটেম রিমুভ করার ফাংশন
  const handleRemove = (id) => {
    if (activeTab === "Today's Plan") {
      const updated = plans.filter((item) => item.id !== id);
      setPlans(updated);
      localStorage.setItem('todaysPlan', JSON.stringify(updated));
    } else {
      const updated = plans.filter((item) => item.id !== id);
      setPlans(updated);
      localStorage.setItem('savedWorkouts', JSON.stringify(updated));
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0f12] text-white p-6 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-wide uppercase">MY PLAN</h1>
          <p className="text-gray-400 text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Controls Section (Tabs) */}
        <div className="flex items-center justify-between pt-2">
          <div className="bg-[#13161c] border border-gray-800 p-1 rounded-xl inline-flex w-fit">
            <button
              onClick={() => setActiveTab("Today's Plan")}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "Today's Plan"
                  ? 'bg-[#1e232d] text-white shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab('Saved')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'Saved'
                  ? 'bg-[#1e232d] text-white shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Saved
            </button>
          </div>
        </div>

        {/* Workouts List or Empty State */}
        {plans.length === 0 ? (
          <div className="bg-[#111318] border border-dashed border-gray-800 rounded-2xl p-12 text-center min-h-[280px] flex flex-col items-center justify-center space-y-3">
            <h2 className="text-xl font-bold tracking-wide uppercase text-white">
              NOTHING HERE YET
            </h2>
            <p className="text-xs text-gray-400 max-w-sm">
              Browse the library and add a lift to get today moving.
            </p>
            <Link href="/" className="mt-2 bg-[#a3ff12] text-black hover:bg-[#8ee60d] text-xs font-bold px-6 py-2.5 rounded-full transition-all shadow-md">
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {plans.map((workout) => (
              <div 
                key={workout.id} 
                className="bg-[#13161c] border border-gray-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                {/* Left: Image & Info */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="relative w-20 h-16 rounded-xl overflow-hidden bg-gray-800 shrink-0">
                    <Image 
                      src={workout.image} 
                      alt={workout.name} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold uppercase tracking-wide text-white text-sm">
                      {workout.name}
                    </h3>
                    <p className="text-xs text-gray-400">{workout.equipment || workout.category}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                      <span>⏱ {workout.duration} min</span>
                      <span>🔥 {workout.caloriesBurned} kcal</span>
                      {workout.rating && <span>⭐ {workout.rating}</span>}
                    </div>
                  </div>
                </div>

                {/* Right: Buttons */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <Link 
                    href={`/workouts/${workout.id}`}
                    className="border border-gray-700 hover:border-gray-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all"
                  >
                    View Details
                  </Link>

                  <button 
                    onClick={() => handleRemove(workout.id)}
                    className="text-gray-500 hover:text-red-400 text-sm px-2"
                    title="Remove"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}