import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, Variants, AnimatePresence } from "motion/react";
import { Zap, Cloud, Cpu, X } from "lucide-react";

import logo2 from "../../assets/8mTntH2EijKwaGBVLX4TKK56YaLudZb1CXeDt674ndckOMoBJErQrEg3UNhHA71Q.png";
import logo3 from "../../assets/36a1JV4LR7dbek2H0roJkIUIsJLWULDcJ7V3qSrFjjfPixUfE6FBzfoOYdCwLnP8.png";
import logo4 from "../../assets/38IQfLMDCh580dz2rTh4skXX4TuDUepZqp3ruLWp720uuxoYDkeffwgpupnSUqkd.png";
import logo5 from "../../assets/38vt1tAZjlHNSwFecxKeQbHXMILB1LpDS56dC2oENhyT53PeIDsEZnnlmw7iiBgM.png";
import logo6 from "../../assets/Unknown-removebg.png";
import logo7 from "../../assets/Screenshot_2026-03-08_at_04.42.27-removebg-preview.png";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  const headlines = [
    "Where Innovation Meets Execution",
    "Turning Vision Into Powerful Software",
    "Engineering Digital Success",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const modalContent: Record<string, { title: string, icon: any, text: string[] }> = {
    infrastructure: {
      title: "Robust IT & Infrastructure",
      icon: Cloud,
      text: [
        "In the modern digital landscape, your infrastructure is the ground upon which your entire business stands. A \"Robust\" infrastructure isn't just about having servers; it is about creating a resilient, invisible backbone that allows your company to function without interruption. For a new entrepreneur, this means moving away from fragile, \"patchwork\" setups and toward a unified cloud-native architecture.",
        "We specialize in building environments that leverage Enterprise-Grade Security and High Availability. By integrating with industry leaders like HOSTINGER, AWS...etc, we ensure that your data is not only secure but also distributed across multiple geographical zones. This prevents the catastrophic data loss or downtime that can sink a growing startup.",
        "Beyond security, robustness is about Scalability. A truly robust system is elastic; it breathes with your business. When you experience a sudden surge in traffic; perhaps from a successful marketing campaign or a viral product launch, your infrastructure should automatically scale its resources to meet the demand. This \"pay-as-you-grow\" model ensures you aren't overspending on empty server space, yet you never crash when it matters most. We focus on \"Zero-Trust\" security protocols and automated backups, ensuring that while you focus on the front-end growth, the back-end remains an impenetrable fortress of efficiency."
      ]
    },
    velocity: {
      title: "High-Velocity Development",
      icon: Zap,
      text: [
        "Speed is the ultimate currency for the modern entrepreneur. \"High-Velocity Development\" is our commitment to shortening the distance between a \"Great Idea\" and a \"Live Product.\" Traditional development cycles often get bogged down in endless planning phases and rigid structures that don't allow for the realities of a shifting market. We break that mold by using an Agile, Build-First Methodology.",
        "This approach centers on the concept of the Minimum Viable Product (MVP). Instead of spending a year building a feature-heavy platform that might miss the mark, we help you identify the \"Core Value\" of your business and get it into the hands of real users as fast as possible. Once the product is live, the \"Velocity\" continues through Rapid Iteration. We use real-world feedback to tweak, refine, and add features in small, manageable sprints.",
        "This philosophy reduces your financial risk and keeps your brand relevant. By utilizing modern frameworks and automated deployment pipelines, our London-based team ensures that new code is tested and pushed to production daily. In a world where your competitors are launching updates every month, we give you the power to launch updates every week. This isn't just about being fast; it’s about being first."
      ]
    },
    automation: {
      title: "Intelligent Automation",
      icon: Cpu,
      text: [
        "For a new entrepreneur, time is the most limited resource. Every hour spent manually syncing inventory, replying to basic FAQs, or moving data between apps is an hour lost on strategic growth. Intelligent Automation is the engine that buys your time back. It is the process of creating \"Digital Employees\" that work 24/7 without error.",
        "By integrating tools and custom AI-driven workflows, we transform your business from a manual operation into a self-optimizing machine. Automation starts with your \"Workflow Orchestration\", connecting your CRM, your e-commerce storefront, and your communication tools so that data flows seamlessly between them. For example, when a sale is made, your inventory updates, your accounting software logs the tax, and your shipping partner receives the label, all without a human clicking a single button.",
        "The \"Intelligent\" part of this pillar involves AI Integration. We implement machine learning models that can analyze customer behavior to predict trends, or deploy advanced chatbots that handle 80% of customer service inquiries with human-like precision. This ensures your high-performance team can stay focused on high-level creativity and complex problem-solving. Automation isn't about replacing people; it’s about empowering them to do more with less, creating a business that scales exponentially while your overhead stays linear."
      ]
    }
  };

  const activeContent = activeModal ? modalContent[activeModal] : null;

  useEffect(() => {
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const delayBetweenPhrases = 2500;

    const currentPhrase = headlines[textIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % headlines.length);
      } else {
        timeoutId = setTimeout(() => {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (currentText === currentPhrase) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenPhrases);
      } else {
        timeoutId = setTimeout(() => {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, textIndex]);

  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden flex flex-col justify-center pt-24 md:pt-28 pb-8 md:pb-10">

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto w-full flex flex-col items-center"
        >
          {/* Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { id: "infrastructure", text: "Robust IT & Infrastructure", icon: Cloud, isClickable: true },
              { id: "velocity", text: "High-Velocity Development", icon: Zap, isClickable: true },
              { id: "automation", text: "Intelligent Automation", icon: Cpu, isClickable: true },
            ].map((badge, idx) => (
              <div
                key={idx}
                onClick={() => badge.isClickable && setActiveModal(badge.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-xl shadow-black/20 ${badge.isClickable ? 'cursor-pointer hover:bg-white/10 transition-colors' : ''}`}
              >
                <badge.icon className="w-4 h-4 text-[#c2a200]" />
                <span className="text-white/80 text-xs sm:text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-[80px] leading-[1.15] md:leading-[1.1] font-bold text-white tracking-tighter text-center max-w-4xl min-h-[88px] sm:min-h-[110px] md:min-h-[190px] px-2"
          >
            {currentText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-[#c2a200] font-light"
            >
              |
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-white/70 text-center max-w-2xl leading-relaxed px-2"
          >
            Turbocharge your operations with a framework built for high-performance Teams. More than just growth... This is total business acceleration.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-2">
            <Link to="/contact" className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-white hover:bg-white/10 transition-all font-medium text-base sm:text-lg text-center">
              Let's Get Connected
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee - Static row of grayscale logos */}
      <div className="relative z-10 w-full mt-14 sm:mt-20 pt-8 sm:pt-10 pb-5 sm:pb-6 overflow-hidden border-t border-white/5 bg-black/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs sm:text-[15px] font-semibold text-white/40 mb-5 sm:mb-6 uppercase tracking-[0.2em] sm:tracking-widest">
            Trusted by Industry Partners
          </p>
          <div className="relative flex overflow-hidden group">
            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex w-max items-center gap-6 sm:gap-10 md:gap-16 pr-6 sm:pr-10 md:pr-16 opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500 flex-shrink-0"
            >
              {[logo2, logo3, logo4, logo5, logo6, logo7].map((logoSrc, idx) => (
                <img key={idx} src={logoSrc} alt={`Trusted Partner ${idx + 1}`} className="flex-shrink-0 h-9 sm:h-12 md:h-24 max-w-[100px] sm:max-w-[150px] md:max-w-[250px] w-auto object-contain rounded-md drop-shadow-sm" />
              ))}
            </motion.div>
            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex w-max items-center gap-6 sm:gap-10 md:gap-16 pr-6 sm:pr-10 md:pr-16 opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500 flex-shrink-0"
            >
              {[logo2, logo3, logo4, logo5, logo6, logo7].map((logoSrc, idx) => (
                <img key={idx} src={logoSrc} alt={`Trusted Partner ${idx + 1}`} className="flex-shrink-0 h-9 sm:h-12 md:h-24 max-w-[100px] sm:max-w-[150px] md:max-w-[250px] w-auto object-contain rounded-md drop-shadow-sm" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dynamic Modals */}
      <AnimatePresence>
        {activeContent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-[#052747]/80 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-black/50 p-5 sm:p-6 md:p-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <activeContent.icon className="w-8 h-8 text-[#c2a200]" />
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white tracking-tight pr-10">
                    {activeContent.title}
                  </h3>
                </div>

                <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-white/80 leading-relaxed text-left md:text-justify">
                  {activeContent.text.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="flex justify-end mt-10">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-8 py-3 rounded-full bg-[#c2a200]/20 text-[#c2a200] border border-[#c2a200]/50 hover:bg-[#c2a200]/30 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
