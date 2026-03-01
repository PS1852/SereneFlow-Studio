import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-surface/95 backdrop-blur-md shadow-sm py-4'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, '#home')}
                    className={`text-2xl font-bold font-heading transition-colors ${isScrolled ? 'text-primary' : 'text-white md:text-primary'
                        }`}
                >
                    SereneFlow
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className={`text-sm tracking-wide transition-colors hover:text-accent-light ${isScrolled ? 'text-text-main' : 'text-white/90 md:text-text-main'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#booking"
                        onClick={(e) => scrollToSection(e, '#booking')}
                        className="bg-primary hover:bg-primary-light text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Book Class
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-surface shadow-lg border-t border-primary/10 h-screen">
                    <nav className="flex flex-col items-center py-8 gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-lg text-text-main hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#booking"
                            onClick={(e) => scrollToSection(e, '#booking')}
                            className="mt-4 bg-primary text-white px-8 py-3 rounded-full text-lg font-medium"
                        >
                            Book Class
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
