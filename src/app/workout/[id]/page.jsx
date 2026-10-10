import Image from 'next/image';
import Link from 'next/link';

const getWorkoutDetail = async (id) => {
    const response = await fetch('http://localhost:3000/workout.json');
    const data = await response.json();

    const workout = data.find(
        (item) => item.id.toString() === id
    );

    return workout;
};

const WorkoutDetailPage = async ({ params }) => {
    const { id } = await params;
    const workout = await getWorkoutDetail(id);

    if (!workout) {
        return (
            <div className="container mx-auto p-8 text-center text-white">
                <h2 className="text-2xl font-bold">
                    Workout not found!
                </h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0b0f19] px-4 py-8 font-sans text-white sm:px-6 md:px-8">

            <div className="container mx-auto max-w-5xl">

               
                {/* Main Card */}
                <div className="w-full overflow-hidden rounded-3xl border border-gray-800/60 bg-[#121826] p-5 shadow-2xl sm:p-8">

                    <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-12">

                        {/* Left Column: Image */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-xl">

                                <Image
                                    src={workout.image}
                                    alt={workout.name}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                                />

                            </div>
                        </div>

                        {/* Right Column: Details */}
                        <div className="flex w-full flex-col lg:w-1/2">

                            {/* Title */}
                            <h1 className="mb-3 text-3xl font-black uppercase tracking-wide text-white sm:text-4xl">
                                {workout.name}
                            </h1>

                            {/* Description */}
                            <p className="mb-5 text-sm leading-relaxed text-gray-400 sm:text-base">
                                {workout.description}
                            </p>

                            {/* Muscle Groups */}
                            <div className="mb-6 flex flex-wrap gap-2">
                                {workout.muscleGroups?.map((muscle, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold uppercase tracking-wider text-black"
                                    >
                                        {muscle}
                                    </span>
                                ))}
                            </div>

                            {/* Specifications */}
                            <div className="mb-6 overflow-hidden rounded-2xl border border-gray-800/80 bg-[#1a2234]">

                                <div className="divide-y divide-gray-800/60 text-sm">

                                    <div className="flex items-center justify-between gap-4 px-4 py-3">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                            Equipment
                                        </span>
                                        <span className="text-right font-medium text-white">
                                            {workout.equipment}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 px-4 py-3">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                            Difficulty
                                        </span>
                                        <span className="text-right font-medium text-white">
                                            {workout.difficulty}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 px-4 py-3">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                            Sets
                                        </span>
                                        <span className="font-medium text-white">
                                            {workout.sets}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 px-4 py-3">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                            Reps
                                        </span>
                                        <span className="font-medium text-white">
                                            {workout.reps}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 px-4 py-3">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                            Duration
                                        </span>
                                        <span className="font-medium text-white">
                                            {workout.duration} min
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 px-4 py-3">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                            Calories
                                        </span>
                                        <span className="font-medium text-white">
                                            {workout.caloriesBurned} kcal
                                        </span>
                                    </div>

                                    {/* Rating: shown only if available */}
                                    {workout.rating != null && (
                                        <div className="flex items-center justify-between gap-4 px-4 py-3">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                                Rating
                                            </span>

                                            <div className="flex items-center gap-1 font-medium text-white">
                                                <svg
                                                    className="h-4 w-4 fill-[#ccff00] text-[#ccff00]"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                                </svg>

                                                <span>{workout.rating}</span>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>

                            {/* Instructions */}
                            <div className="mb-8">
                                <h3 className="mb-4 text-xs font-extrabold uppercase tracking-widest text-gray-300">
                                    Instructions
                                </h3>

                                <ol className="space-y-3 text-sm text-gray-300">
                                    {workout.instructions?.map((step, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 leading-relaxed"
                                        >
                                            <span className="font-semibold text-[#ccff00]">
                                                {index + 1}.
                                            </span>

                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-auto flex flex-col gap-3 sm:flex-row">

                                <button
                                    type="button"
                                    className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#ccff00] px-5 py-3.5 font-bold text-black shadow-lg shadow-[#ccff00]/10 transition-colors hover:bg-[#b3e600]"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect x="3" y="4" width="18" height="18" rx="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>

                                    <span>Add to today&apos;s plan</span>
                                </button>

                                <button
                                    type="button"
                                    className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-800 bg-[#1a2234] px-5 py-3.5 font-semibold text-white transition-colors hover:bg-[#222c42]"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                    </svg>

                                    <span>Save for later</span>
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailPage;

