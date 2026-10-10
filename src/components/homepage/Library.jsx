
import LibraryCard from '../shared/LibraryCard';

const getLibraryPromise = async () => {
    // const response = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const response = await fetch('http://localhost:3000/workout.json')
    const data = await response.json()
    return data;
}

const Library = async () => {
    const libraryData = await getLibraryPromise()

    console.log(libraryData, 'Library Data');
    return (
        <section className='container mx-auto'>
            <div>
                <h3 className='text-2xl font-bold'>THE LIBRARY</h3>
                <p className='text-[#9CA3AF] text-[14px]'>Twelve lifts covering every major muscle group.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {libraryData.map((library, ind) => {
                    return (
                        <LibraryCard key={ind} library={library}></LibraryCard>
                    );
                })}
            </div>
        </section>
    );
};

export default Library;