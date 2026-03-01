import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const photos = [
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1552858725-2758b5fb1286?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
];

export function InstagramGallery() {
    return (
        <section id="gallery" className="py-24 bg-surface overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h2 className="text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-4">Follow Our Journey</h2>
                    <h3 className="text-4xl font-heading font-bold text-primary">@SereneFlowStudio</h3>
                </div>
                <a
                    href="#"
                    className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-full font-medium transition-colors"
                >
                    <Instagram size={18} />
                    Follow Us
                </a>
            </div>

            <div className="flex overflow-hidden relative w-full h-80 md:h-[400px]">
                {/* Infinite scrolling effect trick using double rendered array */}
                <motion.div
                    animate={{ x: [0, -1920] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    className="flex gap-4 absolute left-0"
                >
                    {[...photos, ...photos, ...photos].map((img, i) => (
                        <div key={i} className="relative w-64 md:w-80 h-80 md:h-[400px] shrink-0 group rounded-xl overflow-hidden cursor-pointer">
                            <img
                                src={img}
                                alt="Instagram feed"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; e.currentTarget.onerror = null; }}
                            />
                            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Instagram size={32} className="text-white drop-shadow-md" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
