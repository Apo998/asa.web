import React from "react";
import { motion } from "motion/react";

export function About() {
    return (
        <section id="about" className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 py-20 sm:py-24 overflow-hidden border-t border-white/5">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Blue tint/shadow overlay with 30% transparency */}
                <div className="absolute inset-0 bg-[#052747]/30" />
                {/* Extra gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#052747]/80 via-transparent to-[#052747]/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl p-6 sm:p-8 md:p-12 text-center w-full"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 tracking-tight uppercase">
                        <span className="text-white">BASED IN</span> <span className="text-[#c2a200]">LONDON</span>
                    </h2>

                    <div className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed space-y-5 sm:space-y-6 text-left md:text-justify">
                        <p>
                            Headquartered in London’s dynamic tech ecosystem, we are more than just a software and IT provider - we are architects of digital transformation. Our mission is simple: to bridge the gap between complex technology and sustainable business growth.
                        </p>
                        <p>
                            We believe that in the modern marketplace, "off-the-shelf" is no longer enough. That’s why our team of industry experts dives deep into your operational DNA to build bespoke e-commerce platforms and IT infrastructures that don't just function; they compete. From initial strategy to final deployment, we prioritize high-velocity iteration and uncompromising quality. Partnering with us means gaining a superior competitive advantage through technology that scales as fast as your ambition.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
