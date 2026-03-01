import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Amanda Brooks',
        role: 'Member since 2024',
        text: "SereneFlow completely transformed my practice. The teachers are incredibly attentive, and the space itself feels like a mini-retreat from the city. I look forward to my classes every week.",
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
        id: 2,
        name: 'Marcus Chen',
        role: 'Member since 2023',
        text: "As a beginner, I was intimidated to start yoga. But the supportive environment here made it so easy. The Evening Wind Down class is the perfect cure for a stressful workday.",
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
        id: 3,
        name: 'Elena Rostova',
        role: 'Teacher Training Grad',
        text: "The dedication to authentic practice while maintaining a modern, accessible approach is what sets SereneFlow apart. A truly magical community.",
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-sand/20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-4">Client Stories</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary">Voices from our Studio</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-surface p-8 rounded-3xl shadow-sm relative z-10"
                        >
                            <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12 -z-10" />

                            <div className="flex gap-1 mb-6 text-accent">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-text-main italic mb-8 relative z-10 leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                                    onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"; e.currentTarget.onerror = null; }}
                                />
                                <div>
                                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                                    <p className="text-xs text-text-muted uppercase tracking-wider">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
