import Image from 'next/image';
import React from 'react';
import logo from "@/assets/logo.png"

const Footer = () => {
    return (
        <footer className="w-full bg-[#0d0f12] border-t border-gray-800 py-6 px-8 text-gray-400 text-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Logo & Brand */}
                <div className="flex items-center gap-2.5">
                    <Image
                        src={logo}
                        alt="FitLog Logo"
                        className="h-6 w-auto"
                    />
                    <span className="text-white font-extrabold tracking-widest text-base">
                        FITLOG
                    </span>
                </div>

                {/* Copyright */}
                <div className="text-gray-500 text-xs sm:text-sm">
                    &copy; 2026 FitLog — Workout Library. Train hard, log honest.
                </div>

            </div>
        </footer>
    );
};

export default Footer;