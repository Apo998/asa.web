import React, { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError("");
        if (validate()) {
            setIsSubmitting(true);
            try {
                // Prepare secure data payload
                const securePayload = {
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    company: formData.company.trim(),
                    message: formData.message.trim(),
                };

                // Send email via EmailJS
                await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    {
                        from_name: securePayload.name,
                        from_email: securePayload.email,
                        company: securePayload.company,
                        message: securePayload.message,
                        to_name: "ASA Admin", // You can change this or add it to your template
                    },
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                );

                setIsSubmitted(true);
                setFormData({ name: "", email: "", company: "", message: "" });
                // Reset success message after 5 seconds
                setTimeout(() => setIsSubmitted(false), 5000);
            } catch (err: any) {
                console.error("Submission failed: ", err);
                setSubmitError(err.message || "Failed to submit the form. Please try again.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 py-20 sm:py-32 overflow-hidden border-t border-white/5">
            {/* Video Background Overlays */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Blue tint/shadow overlay with 30% transparency */}
                <div className="absolute inset-0 bg-[#052747]/30" />
                {/* Extra gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#052747]/80 via-transparent to-[#052747]/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl p-6 sm:p-8 md:p-12 w-full"
                >
                    <div className="text-center mb-8 sm:mb-10">
                        <h2 className="text-[#c2a200] font-bold tracking-widest uppercase text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
                            Get in Touch
                        </h2>
                        <p className="text-base sm:text-lg text-white/80">
                            Ready to accelerate your business? Let's talk about your next project.
                        </p>
                    </div>

                    {isSubmitted && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mb-8 p-4 rounded-xl bg-[#c2a200]/10 border border-[#c2a200]/30 backdrop-blur-md text-[#c2a200] text-center font-medium"
                        >
                            Thank you! Your message has been sent successfully. We will be in contact shortly.
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {submitError && (
                            <div className="w-full text-center text-[#c2a200] bg-[#c2a200]/5 border border-[#c2a200]/20 py-3 rounded-xl text-sm font-medium mb-2 backdrop-blur-sm">
                                {submitError}
                            </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-white/90">
                                    Full Name <span className="text-[#c2a200]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${errors.name ? 'border-[#c2a200]/50 focus:border-[#c2a200]' : 'border-white/10 focus:border-[#c2a200]'} text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#c2a200] transition-all`}
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <p className="text-[#c2a200]/80 text-sm font-medium flex items-center gap-1 mt-1">
                                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c2a200]"></span> {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-white/90">
                                    Email Address <span className="text-[#c2a200]">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${errors.email ? 'border-[#c2a200]/50 focus:border-[#c2a200]' : 'border-white/10 focus:border-[#c2a200]'} text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#c2a200] transition-all`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && (
                                    <p className="text-[#c2a200]/80 text-sm font-medium flex items-center gap-1 mt-1">
                                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c2a200]"></span> {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Company Field (Optional) */}
                        <div className="space-y-2">
                            <label htmlFor="company" className="block text-sm font-medium text-white/90">
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-[#c2a200] text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#c2a200] transition-all"
                                placeholder="Acme Corp"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-medium text-white/90">
                                Message <span className="text-[#c2a200]">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className={`w-full px-4 py-3 rounded-xl bg-black/20 border ${errors.message ? 'border-[#c2a200]/50 focus:border-[#c2a200]' : 'border-white/10 focus:border-[#c2a200]'} text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#c2a200] transition-all resize-y`}
                                placeholder="How can we help you?"
                            ></textarea>
                            {errors.message && (
                                <p className="text-[#c2a200]/80 text-sm font-medium flex items-center gap-1 mt-1">
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c2a200]"></span> {errors.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2 sm:pt-4 text-center md:text-left">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full md:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#052747]/60 text-[#c2a200] border border-[#c2a200] hover:bg-[#052747]/80 backdrop-blur-sm transition-all font-bold tracking-wide text-base sm:text-lg ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
