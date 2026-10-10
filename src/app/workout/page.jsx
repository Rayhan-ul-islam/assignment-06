
import LibraryCard from "@/components/shared/LibraryCard";
import Link from "next/link";

const getLibraryPromise = async () => {
    const response = await fetch("http://localhost:3000/workout.json");

    if (!response.ok) {
        throw new Error("Failed to fetch workout data");
    }

    return response.json();
};

const Library = async () => {
    const libraryData = await getLibraryPromise();

    return (
        <section className="container mx-auto">
            <div>
                <h3 className="text-2xl font-bold">THE LIBRARY</h3>
                <p className="text-[#9CA3AF] text-[14px]">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
                {libraryData.map((library) => (
                    <Link
                        href={`/workout/${library.id}`}
                        key={library.id}
                        className="block h-full"
                    >
                        <LibraryCard library={library} />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Library;

