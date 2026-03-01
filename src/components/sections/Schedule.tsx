import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, User } from 'lucide-react';

type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

const days: Day[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const scheduleData = [
    { id: 1, day: 'Monday', time: '07:00 AM', duration: '60 min', title: 'Morning Vinyasa', trainer: 'Sarah Maya', level: 'All Levels', type: 'Vinyasa' },
    { id: 2, day: 'Monday', time: '09:00 AM', duration: '90 min', title: 'Ashtanga Half Primary', trainer: 'Budi Santoso', level: 'Intermediate', type: 'Ashtanga' },
    { id: 3, day: 'Monday', time: '05:30 PM', duration: '75 min', title: 'Sunset Yin Yoga', trainer: 'Emma Chen', level: 'Beginner', type: 'Yin' },
    { id: 4, day: 'Tuesday', time: '06:30 AM', duration: '60 min', title: 'Sunrise Hatha', trainer: 'Sarah Maya', level: 'All Levels', type: 'Hatha' },
    { id: 5, day: 'Tuesday', time: '12:00 PM', duration: '45 min', title: 'Lunchtime Flow', trainer: 'David Kim', level: 'All Levels', type: 'Vinyasa' },
    { id: 6, day: 'Tuesday', time: '06:00 PM', duration: '60 min', title: 'Power Yoga', trainer: 'Budi Santoso', level: 'Intermediate', type: 'Vinyasa' },
    { id: 7, day: 'Wednesday', time: '07:00 AM', duration: '60 min', title: 'Morning Vinyasa', trainer: 'Sarah Maya', level: 'All Levels', type: 'Vinyasa' },
    { id: 8, day: 'Wednesday', time: '05:30 PM', duration: '75 min', title: 'Restorative Meditation', trainer: 'Emma Chen', level: 'Beginner', type: 'Restorative' },
];

// Fallback for days without specific data in this mock
const getClassesForDay = (day: Day) => {
    const classes = scheduleData.filter(c => c.day === day);
    if (classes.length > 0) return classes;

    // Return generic fallback
    return [
        { id: 100, day, time: '08:00 AM', duration: '60 min', title: 'Morning Flow', trainer: 'Staff', level: 'All Levels', type: 'Vinyasa' },
        { id: 101, day, time: '06:00 PM', duration: '60 min', title: 'Evening Wind Down', trainer: 'Staff', level: 'All Levels', type: 'Hatha' },
    ];
};

export function Schedule() {
    const [activeDay, setActiveDay] = useState<Day>('Monday');

    const activeClasses = getClassesForDay(activeDay);

    return (
        <section id="schedule" className="py-24 bg-background">
            <div className="container mx-auto px-6 md:px-12">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-4">Class Schedule</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Find Your Flow</h3>
                    <p className="text-text-muted text-lg">
                        Our schedule is designed to accommodate all levels, from beginners to advanced practitioners. Choose the time and practice that serves you best today.
                    </p>
                </div>

                {/* Day Filter */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                    {days.map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeDay === day
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-surface text-text-main hover:bg-primary/10'
                                }`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Class List */}
                <div className="max-w-4xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeDay}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            {activeClasses.map((c) => (
                                <div
                                    key={c.id}
                                    className="bg-surface rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm border border-primary/5 hover:border-primary/20 hover:shadow-md transition-all group"
                                >

                                    {/* Time & Info */}
                                    <div className="flex gap-6 md:gap-10 w-full md:w-auto">
                                        <div className="flex flex-col w-28 shrink-0">
                                            <span className="text-xl font-bold text-primary">{c.time}</span>
                                            <div className="flex items-center gap-1.5 text-text-muted text-sm mt-1">
                                                <Clock size={14} />
                                                <span>{c.duration}</span>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-heading font-bold text-text-main mb-2 group-hover:text-accent transition-colors">{c.title}</h4>
                                            <div className="flex items-center gap-2 text-text-muted text-sm">
                                                <User size={14} />
                                                <span>{c.trainer}</span>
                                                <span className="w-1 h-1 rounded-full bg-secondary mx-2"></span>
                                                <span className="bg-sand/30 px-3 py-1 rounded-full text-xs font-medium text-primary">
                                                    {c.level}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="w-full md:w-auto flex justify-end shrink-0">
                                        <a
                                            href="#booking"
                                            className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-2.5 rounded-full text-sm font-medium transition-colors w-full md:w-auto text-center"
                                        >
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
