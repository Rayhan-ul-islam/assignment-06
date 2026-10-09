import bannerImg from '@/assets/banner.png'
import Image from 'next/image';

const BannerPage = () => {
    return (

        <div className="container mx-auto mt-10 mb-10 flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#15171D] pt-5 pb-5 md:flex-row">

            {/* Banner Image */}
            <div className="order-1 w-full px-5 md:order-2 md:w-auto md:px-0">
                <Image
                    src={bannerImg}
                    alt="Workout banner"
                    className="h-auto w-full rounded-xl object-cover"
                    sizes="(max-width: 767px) 100vw, 50vw"
                />
            </div>

            {/* Text Content */}
            <div className="order-2 w-full px-5 text-center md:order-1 md:w-auto md:px-0 md:text-left">

                <p className="text-[10px] text-[#CCFF00]">
                    WORKOUT LIBRARY
                </p>

                <h2 className="mt-3 mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                    TRAIN WITH INTENT. LOG <br className="hidden sm:block" />
                    EVERY SET.
                </h2>

                <p className="text-sm text-[#9CA3AF] sm:text-base">
                    FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    <br className="hidden md:block" />
                    into today&apos;s plan, and watch the weeks&apos; work add up.
                </p>

                <button className="mt-7 rounded-sm bg-[#CCFF00] p-2 text-[11px] font-bold text-black">
                    BROWSE WORKOUTS
                </button>

            </div>
        </div>


    );
};

export default BannerPage;