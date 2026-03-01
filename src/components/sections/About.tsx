import { motion } from 'framer-motion';

export function About() {
    return (
        <section id="about" className="py-24 bg-surface">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <h2 className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">Our Philosophy</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight">
                            A sanctuary for mind, body, and soul.
                        </h3>
                        <p className="text-text-muted text-lg leading-relaxed pt-4">
                            Inspired by the serene landscapes of Bali, SereneFlow Studio was created as a refuge from the fast-paced modern world. We believe that yoga is more than just physical movement—it's a pathway to deeper self-awareness and holistic wellbeing.
                        </p>
                        <p className="text-text-muted text-lg leading-relaxed">
                            Whether you are a beginner taking your first breath on the mat, or an experienced practitioner deepening your practice, our welcoming community and expert teachers are here to support your journey.
                        </p>

                        <div className="pt-6 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-3xl font-bold text-primary mb-2">15+</h4>
                                <p className="text-sm text-text-muted uppercase tracking-wider">Expert Teachers</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-primary mb-2">50+</h4>
                                <p className="text-sm text-text-muted uppercase tracking-wider">Classes Weekly</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="grid grid-cols-2 gap-4 relative"
                    >
                        <div className="space-y-4 pt-12">
                            <img
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Yoga practice outdoors"
                                className="rounded-2xl w-full h-64 object-cover shadow-lg"
                                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; e.currentTarget.onerror = null; }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Meditation space"
                                className="rounded-2xl w-full h-48 object-cover shadow-lg"
                                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; e.currentTarget.onerror = null; }}
                            />
                        </div>
                        <div className="space-y-4">
                            <img
                                src="https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Peaceful studio interior"
                                className="rounded-2xl w-full h-56 object-cover shadow-lg"
                                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; e.currentTarget.onerror = null; }}
                            />
                            <img
                                src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Yoga pose"
                                className="rounded-2xl w-full h-64 object-cover shadow-lg"
                                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; e.currentTarget.onerror = null; }}
                            />
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-full -z-10 blur-xl" />
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10 blur-xl" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
