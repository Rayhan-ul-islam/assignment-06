import bannerImg from '@/assets/banner.png'
import Image from 'next/image';

const BannerPage = () => {
    return (
        <div className='flex pt-5 pb-5 gap-4 justify-center items-center bg-[#15171D] container mx-auto mt-10 mb-10 rounded-2xl'>
            <div>
                <p className='text-[#CCFF00] text-[10px]'>WORKOUT LIBRARY</p>

                <h2 className='text-5xl font-bold mt-3 mb-3'>TRAIN WITH INTENT. LOG <br></br>
                    EVERY SET.
                </h2>

                <p className='text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br></br>
                    into todays plan, and watch the weeks work add up.
                </p>

                <button className='bg-[#CCFF00] text-black p-2 rounded-sm mt-7 font-bold text-[11px]'>BROWSE WORKOUTS</button>

            </div>
            <div>
                <Image src={bannerImg}/>
            </div>
        </div>
    );
};

export default BannerPage;