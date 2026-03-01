import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Schedule } from './components/sections/Schedule';
import { Trainers } from './components/sections/Trainers';
import { Testimonials } from './components/sections/Testimonials';
import { InstagramGallery } from './components/sections/InstagramGallery';
import { BookingForm } from './components/forms/BookingForm';
import { ContactForm } from './components/forms/ContactForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-body text-text-main bg-background selection:bg-primary/20">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Schedule />
        <Trainers />
        <Testimonials />
        <InstagramGallery />
        <BookingForm />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
