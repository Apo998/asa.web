import React from "react";
import { motion } from "motion/react";

export function Insights() {
    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 py-20 sm:py-32 overflow-hidden border-t border-white/5">
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl p-6 sm:p-8 md:p-12 text-center w-full max-w-4xl"
                >
                    {/* Page Header */}
                    <div className="mb-10 sm:mb-12">
                        <h2 className="text-[#c2a200] font-bold tracking-widest uppercase text-2xl sm:text-3xl md:text-4xl mb-5 sm:mb-6">Our Vision</h2>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-5 sm:mb-6 tracking-tight">
                            Strategic Intelligence for the Digital Era
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed text-left md:text-justify">
                            Stay ahead of the curve with expert analysis on Software Engineering, IT Infrastructure, and the evolving E-commerce landscape. We transform complex data into actionable business strategies.
                        </p>
                    </div>

                    <div className="h-px w-full bg-white/10 my-10" />

                    {/* Main Intro Text */}
                    <div className="mb-10 sm:mb-12">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-5 sm:mb-6 tracking-tight">
                            Navigating the Future of Tech and Commerce
                        </h3>
                        <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-white/80 leading-relaxed text-left md:text-justify">
                            <p>
                                In an environment where technology moves faster than ever, staying informed is no longer a luxury - it is a baseline for survival. Our Insights hub is designed for ambitious leaders who prioritize growth, efficiency, and market dominance.
                            </p>
                            <p>
                                Based in the heart of London’s tech scene, our team of engineers and strategists continuously monitors the pulse of global digital trends. Here, we share our findings on how to build, iterate, and launch with precision. From deep dives into scalable IT architecture to the latest conversion-driven e-commerce tactics, our goal is to provide you with the "Superior Advantage" we promise in every partnership.
                            </p>
                        </div>
                    </div>

                    <div className="h-px w-full bg-white/10 my-10" />

                    {/* Detailed Philosophy Block */}
                    <div className="mb-10 sm:mb-12">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-5 sm:mb-6 tracking-tight">
                            Why we share our Expertise?
                        </h3>
                        <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-white/80 leading-relaxed text-left md:text-justify">
                            <p>
                                We believe that transparency drives innovation. At ASA, we don’t just build solutions; we cultivate a culture of continuous learning. Our "Insights" are more than just articles, they are the blueprints we use to turbocharge operations and ensure total business acceleration for our clients. Whether you are looking to refine your current stack or pivot your entire digital strategy, our expertise is your roadmap.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action Container */}
                    <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-2xl bg-[#052747]/60 border border-[#c2a200]/30 backdrop-blur-sm">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
                            Ready to turn these insights into action?
                        </h4>
                        <p className="text-base sm:text-lg text-[#c2a200] font-medium leading-relaxed">
                            Don't just read about the future... build it. Let’s discuss how these trends impact your specific business goals and how our London-based team can help you execute them.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
