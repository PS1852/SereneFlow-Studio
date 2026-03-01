import { motion } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';

const trainers = [
    {
        id: 1,
        name: 'Sarah Maya',
        role: 'Lead Vinyasa Instructor',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        bio: 'Sarah combines fluid movement with deep breathwork, drawing from her 10 years of practice in Bali and India.',
    },
    {
        id: 2,
        name: 'Budi Santoso',
        role: 'Ashtanga & Power Yoga',
        image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        bio: 'Budi brings strength and discipline to his classes, focusing on proper alignment and building core stability.',
    },
    {
        id: 3,
        name: 'Emma Chen',
        role: 'Yin & Restorative Specialist',
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        bio: 'Emma guides practitioners into deep states of relaxation, perfect for balancing out a fast-paced lifestyle.',
    },
];

export function Trainers() {
    return (
        <section id="trainers" className="py-24 bg-surface">
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-4">Master Guides</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Meet Our Trainers</h3>
                        <p className="text-text-muted text-lg">
                            Our experienced instructors are dedicated to holding space for your growth,
                            bringing their unique energy and expertise to every class.
                        </p>
                    </div>
                    <a href="#schedule" className="shrink-0 text-primary font-medium hover:text-accent transition-colors flex items-center gap-2 group">
                        See their classes
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trainers.map((trainer, index) => (
                        <motion.div
                            key={trainer.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
                        >
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; e.currentTarget.onerror = null; }}
                                />
                                {/* Social Overlay */}
                                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href="#" className="bg-white/20 hover:bg-white text-white hover:text-primary backdrop-blur-sm p-3 rounded-full transition-colors">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="#" className="bg-white/20 hover:bg-white text-white hover:text-primary backdrop-blur-sm p-3 rounded-full transition-colors">
                                        <Twitter size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-8 text-center border-t-4 border-accent">
                                <h4 className="text-2xl font-heading font-bold text-primary mb-1">{trainer.name}</h4>
                                <p className="text-accent text-sm font-medium mb-4">{trainer.role}</p>
                                <p className="text-text-muted leading-relaxed">
                                    {trainer.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
