import React from "react";

export function Footer() {
    return (
        <footer className="w-full relative z-50">
            {/* Glassmorphism container */}
            <div
                className="bg-white/5 backdrop-blur-md border-t border-white/10 py-6 sm:py-8 px-4 sm:px-6 text-center text-white/70"
                style={{ fontFamily: "'Agrandir', sans-serif", fontWeight: 500 }}
            >
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-1 text-xs sm:text-sm md:text-base font-medium leading-snug">
                    <p>ASA E-BUSINESS LTD</p>
                    <p>Company NO. : 15737713</p>
                    <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
                </div>
            </div>
        </footer>
    );
}
