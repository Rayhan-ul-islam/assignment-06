import Image from 'next/image';
import React from 'react';

const LibraryCard = ({library}) => {
    return (
        <div

            className="rounded-2xl bg-[#16181d] text-white overflow-hidden shadow-xl border border-gray-800 flex flex-col justify-between"
        >
            {/* Card Image */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={library.image}
                    alt={library.name}
                    width={740}
                    height={480}
                    className="h-48 w-full object-cover"
                />
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col gap-3">

                {/* Muscle Groups Badges */}
                <div className="flex flex-wrap gap-2">
                    {library.muscleGroups.map((muscle, i) => (
                        <span
                            key={i}
                            className="bg-[#ccff00] text-black font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Exercise Name & Equipment */}
                <div>
                    <h2 className="text-xl font-extrabold tracking-wide uppercase">
                        {library.name}
                    </h2>
                    <p className="text-gray-400 text-sm mt-0.5">
                        {library.equipment}
                    </p>
                </div>

                {/* Divider Line */}
                <hr className="border-gray-800 my-1" />

                {/* Footer Stats (Duration, Calories, Rating) */}
                <div className="flex items-center justify-between text-gray-400 text-sm">

                    {/* Duration */}
                    <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{library.duration} min</span>
                    </div>

                    {/* Calories Burned */}
                    <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M12 2c0 4-4 6-4 10a4 4 0 008 0c0-4-4-6-4-10z" />
                        </svg>
                        <span>{library.caloriesBurned} kcal</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.399 8.168-7.333-3.854-7.333 3.854 1.399-8.168-5.934-5.787 8.2-1.192z" />
                        </svg>
                        <span>{library.rating}</span>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default LibraryCard;