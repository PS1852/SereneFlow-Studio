import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    date: z.string().min(1, { message: "Please select a date." }),
    classType: z.string().min(1, { message: "Please select a class." }),
});

type FormValues = z.infer<typeof formSchema>;

export function BookingForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            date: format(new Date(), 'yyyy-MM-dd'),
        }
    });

    const onSubmit = (data: FormValues) => {
        // Save to local storage requirements
        try {
            const existingBookings = JSON.parse(localStorage.getItem('sereneflow_bookings') || '[]');
            const newBooking = { ...data, id: Date.now(), status: 'confirmed' };
            localStorage.setItem('sereneflow_bookings', JSON.stringify([...existingBookings, newBooking]));

            setTimeout(() => {
                setIsSubmitted(true);
                reset();

                // Reset success state after 5 seconds
                setTimeout(() => setIsSubmitted(false), 5000);
            }, 800);
        } catch (e) {
            console.error("Failed to save booking");
        }
    };

    return (
        <section id="booking" className="py-24 bg-primary text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-sm font-semibold tracking-[0.2em] text-accent-light uppercase mb-4">Reserve Your Mat</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">Start Your Practice Today</h3>
                        <p className="text-secondary/90 text-lg mb-8 leading-relaxed max-w-xl">
                            Classes fill up quickly. Secure your spot in our sanctuary by booking in advance. Payment can be completed upon arrival at the studio.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-secondary">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <CheckCircle2 size={24} className="text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Free Cancellation</h4>
                                    <p className="text-sm">Up to 24 hours before class begins</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-secondary">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <span className="font-heading font-bold text-xl text-accent">1</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">First Class Free</h4>
                                    <p className="text-sm">For all local residents with ID</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-surface rounded-3xl p-8 shadow-xl text-text-main">
                        {isSubmitted ? (
                            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle2 size={40} className="text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Booking Confirmed!</h3>
                                <p className="text-text-muted">Your class has been reserved. We'll send a confirmation email shortly.</p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-4 text-accent hover:text-accent-light font-medium"
                                >
                                    Book another class
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold font-heading text-primary mb-6">Book a Class</h3>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-text-main mb-1.5 pt-1">Full Name</label>
                                        <input
                                            {...register("name")}
                                            type="text"
                                            placeholder="Jane Doe"
                                            className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-primary/5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-text-main mb-1.5">Email Address</label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            placeholder="jane@example.com"
                                            className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-primary/5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        {/* Date */}
                                        <div>
                                            <label className="block text-sm font-medium text-text-main mb-1.5 flex items-center gap-1.5">
                                                <CalendarIcon size={14} /> Date
                                            </label>
                                            <input
                                                {...register("date")}
                                                type="date"
                                                min={format(new Date(), 'yyyy-MM-dd')}
                                                className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-primary/5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                                            />
                                            {errors.date && <p className="text-red-500 text-xs mt-1.5">{errors.date.message}</p>}
                                        </div>

                                        {/* Class Type */}
                                        <div>
                                            <label className="block text-sm font-medium text-text-main mb-1.5">Class</label>
                                            <select
                                                {...register("classType")}
                                                className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-primary/5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all appearance-none"
                                            >
                                                <option value="">Select a class</option>
                                                <option value="vinyasa">Vinyasa Flow</option>
                                                <option value="hatha">Hatha Yoga</option>
                                                <option value="ashtanga">Ashtanga</option>
                                                <option value="yin">Yin Yoga</option>
                                                <option value="meditation">Meditation</option>
                                            </select>
                                            {errors.classType && <p className="text-red-500 text-xs mt-1.5">{errors.classType.message}</p>}
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-accent hover:bg-accent-light text-white font-medium py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                                    >
                                        {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                                    </button>

                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
