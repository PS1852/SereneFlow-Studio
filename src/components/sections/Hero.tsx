import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 pt-20 flex flex-col items-center text-center text-white">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="uppercase tracking-[0.2em] text-sm md:text-base font-medium mb-6 text-secondary"
                >
                    Welcome to SereneFlow
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-tight drop-shadow-lg max-w-4xl"
                >
                    Find Your Inner Balance.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl font-light drop-shadow-md leading-relaxed"
                >
                    Step into our Bali-inspired sanctuary. Breathe deeply, move mindfully,
                    and reconnect with your true self in our tranquil studio space.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
                >
                    <a
                        href="#booking"
                        className="group flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl"
                    >
                        Start Your Journey
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </a>
                    <a
                        href="#schedule"
                        className="flex items-center justify-center md:bg-white/10 md:backdrop-blur-sm border md:border-white/30 border-white bg-transparent hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full text-lg font-medium transition-all"
                    >
                        View Schedule
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator overlay at bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
            </motion.div>
        </section>
    );
}
