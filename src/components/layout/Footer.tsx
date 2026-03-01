import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-primary text-secondary pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand & Intro */}
                    <div className="space-y-4">
                        <h3 className="text-3xl font-heading font-bold mb-4">SereneFlow</h3>
                        <p className="text-secondary/80 leading-relaxed text-sm">
                            Discover balance and peace in our Bali-inspired sanctuary.
                            Join our mindful community today.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="text-secondary hover:text-accent transition-colors" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-secondary hover:text-accent transition-colors" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-secondary hover:text-accent transition-colors" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-secondary/80 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#schedule" className="text-secondary/80 hover:text-white transition-colors">Class Schedule</a></li>
                            <li><a href="#trainers" className="text-secondary/80 hover:text-white transition-colors">Our Trainers</a></li>
                            <li><a href="#testimonials" className="text-secondary/80 hover:text-white transition-colors">Testimonials</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-secondary/80">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="shrink-0 mt-0.5" />
                                <span>123 Harmony Lane<br />Wellness District, Bali</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="shrink-0" />
                                <a href="tel:+625550192" className="hover:text-white transition-colors">+62 555 0192</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="shrink-0" />
                                <a href="mailto:sereneflowstudio@gmail.com" className="hover:text-white transition-colors">sereneflowstudio@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter (Visual Only) */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
                        <p className="text-sm text-secondary/80 mb-4">
                            Subscribe for wellness tips and schedule updates.
                        </p>
                        <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-primary-light/30 border border-secondary/20 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-accent transition-colors text-white placeholder:text-secondary/50"
                            />
                            <button
                                type="submit"
                                className="bg-accent hover:bg-accent-light text-white font-medium py-2.5 rounded-lg transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                <div className="pt-8 border-t border-secondary/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary/60">
                    <p>&copy; {new Date().getFullYear()} SereneFlow Studio. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
