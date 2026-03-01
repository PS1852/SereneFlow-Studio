import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data: ContactFormValues) => {
        // Mock API call
        console.log("Contact form submitted:", data);
        setTimeout(() => {
            setIsSubmitted(true);
            reset();
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1000);
    };

    return (
        <section id="contact" className="py-24 bg-surface">
            <div className="container mx-auto px-6 md:px-12">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-4">Get in Touch</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">We'd Love to Hear From You</h3>
                    <p className="text-text-muted text-lg">
                        Have questions about our classes, memberships, or space? Send us a message and our team will get back to you shortly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 max-w-6xl mx-auto">

                    {/* Contact Information */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-sand/10 rounded-3xl p-8 h-full border border-primary/5">
                            <h4 className="text-2xl font-bold font-heading text-primary mb-8">Studio Information</h4>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-text-main mb-1">Our Location</h5>
                                        <p className="text-text-muted leading-relaxed text-sm">
                                            123 Harmony Lane<br />
                                            Wellness District, Bali 80361<br />
                                            Indonesia
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-text-main mb-1">Email Us</h5>
                                        <a href="mailto:sereneflowstudio@gmail.com" className="text-primary hover:text-accent transition-colors text-sm">
                                            sereneflowstudio@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-text-main mb-1">Call Us</h5>
                                        <a href="tel:+625550192" className="text-primary hover:text-accent transition-colors text-sm">
                                            +62 555 0192
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-text-main mb-1">Opening Hours</h5>
                                        <p className="text-text-muted text-sm space-y-1">
                                            <span className="block">Monday - Friday: 6:00 AM - 8:00 PM</span>
                                            <span className="block">Saturday: 7:00 AM - 6:00 PM</span>
                                            <span className="block">Sunday: 7:00 AM - 12:00 PM</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-10 h-48 bg-primary/5 rounded-2xl overflow-hidden relative group">
                                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Map area" className="w-full h-full object-cover opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; e.currentTarget.onerror = null; }} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="bg-white/90 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm">View on Maps</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-primary/5 h-full">
                            {isSubmitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500 min-h-[400px]">
                                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Send size={32} className="text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary">Message Sent!</h3>
                                    <p className="text-text-muted">Thank you for reaching out. We will get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-text-main mb-1.5">Your Name</label>
                                            <input
                                                {...register("name")}
                                                type="text"
                                                placeholder="Jane Doe"
                                                className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
                                            />
                                            {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-text-main mb-1.5">Email Address</label>
                                            <input
                                                {...register("email")}
                                                type="email"
                                                placeholder="jane@example.com"
                                                className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-text-main mb-1.5">Subject</label>
                                        <input
                                            {...register("subject")}
                                            type="text"
                                            placeholder="How can we help?"
                                            className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
                                        />
                                        {errors.subject && <p className="text-red-500 text-xs mt-1.5">{errors.subject.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-text-main mb-1.5">Message</label>
                                        <textarea
                                            {...register("message")}
                                            rows={6}
                                            placeholder="Write your message here..."
                                            className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all resize-none"
                                        ></textarea>
                                        {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-medium px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        {!isSubmitting && <Send size={18} />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
