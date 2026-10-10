import React from 'react';
import Image from 'next/image';

const MyPlan = () => {
    const exercise = {
        id: 1,
        name: "Barbell Bench Press",
        image: "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740",
        muscleGroups: ["Chest", "Arms"],
        equipment: "Barbell, Bench",
        difficulty: "Intermediate",
        duration: 25,
        caloriesBurned: 180,
        sets: 4,
        reps: "6-8",
        rating: 4.8,
        description: "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.",
        instructions: [
            "Lie on the bench with eyes under the bar and feet planted.",
            "Unrack with locked elbows and lower the bar to mid-chest.",
            "Press up in a slight arc until elbows lock without bouncing.",
            "Keep shoulder blades pinched and a natural arch in the back."
        ]
    };

    return (
        <div className="min-h-screen bg-[#0b0f19] text-white flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
            <div className="w-full max-w-5xl bg-[#121826] border border-gray-800/60 rounded-3xl p-6 sm:p-8 shadow-2xl">
                
                {/* Main Desktop Side-by-Side & Mobile Stack Container */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    
                    {/* Left Column: Image (Using Next.js Image component) */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xl border border-gray-800 bg-gray-900">
                            <Image 
                                src={exercise.image} 
                                alt={exercise.name} 
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        
                        {/* Title & Description */}
                        <h1 className="text-3xl sm:text-4xl font-black tracking-wide uppercase text-white mb-2">
                            {exercise.name}
                        </h1>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                            {exercise.description}
                        </p>

                        {/* Muscle Groups Badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {exercise.muscleGroups.map((muscle, idx) => (
                                <span 
                                    key={idx}
                                    className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Specs Table */}
                        <div className="bg-[#1a2234] rounded-2xl border border-gray-800/80 overflow-hidden mb-6">
                            <div className="divide-y divide-gray-800/60 text-sm">
                                <div className="flex justify-between items-center px-4 py-3">
                                    <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Equipment</span>
                                    <span className="font-medium text-white">{exercise.equipment}</span>
                                </div>
                                <div className="flex justify-between items-center px-4 py-3">
                                    <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Difficulty</span>
                                    <span className="font-medium text-white">{exercise.difficulty}</span>
                                </div>
                                <div className="flex justify-between items-center px-4 py-3">
                                    <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Sets</span>
                                    <span className="font-medium text-white">{exercise.sets}</span>
                                </div>
                                <div className="flex justify-between items-center px-4 py-3">
                                    <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Reps</span>
                                    <span className="font-medium text-white">{exercise.reps}</span>
                                </div>
                                <div className="flex justify-between items-center px-4 py-3">
                                    <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Duration</span>
                                    <span className="font-medium text-white">{exercise.duration} min</span>
                                </div>
                                <div className="flex justify-between items-center px-4 py-3">
                                    <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Calories</span>
                                    <span className="font-medium text-white">{exercise.caloriesBurned} kcal</span>
                                </div>
                                <div className="flex justify-between items-center px-4 py-3">
                                    <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Rating</span>
                                    <div className="flex items-center gap-1 font-medium text-white">
                                        <svg className="w-4 h-4 fill-[#ccff00] text-[#ccff00]" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                        <span>{exercise.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Instructions */}
                        <div className="mb-8">
                            <h3 className="text-xs font-extrabold uppercase tracking-widest text-gray-300 mb-3">
                                Instructions
                            </h3>
                            <ol className="space-y-2 text-sm text-gray-300">
                                {exercise.instructions.map((step, idx) => (
                                    <li key={idx} className="flex gap-3 leading-relaxed">
                                        <span className="text-gray-500 font-semibold">{idx + 1}.</span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                            <button className="flex-1 bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-[#ccff00]/10">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                <span>Add to todays plan</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-[#1a2234] hover:bg-[#222c42] border border-gray-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors cursor-pointer">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                <span>Save for later</span>
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default MyPlan;