'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Zap, ChevronRight, ChevronLeft, X, Car, Bike, Mountain, Crown, Check } from 'lucide-react';
import { differenceInDays, format } from 'date-fns';
import Image from 'next/image';

const cities = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Pune',
  'Chennai',
  'Kolkata',
  'Gurgaon',
];

const morningTimes = ['12:00 AM', '12:30 AM', '01:00 AM', '01:30 AM', '02:00 AM', '02:30 AM', '03:00 AM', '03:30 AM', '04:00 AM', '04:30 AM', '05:00 AM', '05:30 AM', '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'];
const afternoonTimes = ['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'];

const vehicleTypes = [
  {
    id: 'cars',
    label: 'Cars',
    icon: Car,
    tagline: 'City & Outstation',
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=300&h=200&fit=crop',
  },
  {
    id: 'bikes',
    label: 'Bikes',
    icon: Bike,
    tagline: 'Fast & Thrilling',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
  },
  {
    id: 'suv',
    label: 'SUV / Adventure',
    icon: Mountain,
    tagline: 'Off-Road Ready',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=300&h=200&fit=crop',
  },
  {
    id: 'luxury',
    label: 'Luxury',
    icon: Crown,
    tagline: 'Ultimate Prestige',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop',
  },
];

export function BookingSection() {
  const [vehicleType, setVehicleType] = useState('cars');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [pickupTime, setPickupTime] = useState('');
  const [dropoffDate, setDropoffDate] = useState<Date | null>(null);
  const [dropoffTime, setDropoffTime] = useState('');
  const [showTimePicker, setShowTimePicker] = useState<false | 'pickup' | 'dropoff'>(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarFor, setCalendarFor] = useState<'pickup' | 'dropoff'>('pickup');
  const [sameLocation, setSameLocation] = useState(true);
  const [calendarMonth, setCalendarMonth] = useState(new Date());

  const durationDays = pickupDate && dropoffDate ? differenceInDays(dropoffDate, pickupDate) : null;
  const durationLabel =
    pickupDate && dropoffDate && durationDays && durationDays > 0
      ? `${format(pickupDate, 'EEE, MMM d')} → ${format(dropoffDate, 'EEE, MMM d')} · ${durationDays} night${durationDays !== 1 ? 's' : ''}`
      : null;

  const getDaysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const getFirstDayOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const handleDayClick = (date: Date) => {
    if (calendarFor === 'pickup') {
      setPickupDate(date);
      if (dropoffDate && date >= dropoffDate) setDropoffDate(null);
    } else {
      if (pickupDate && date <= pickupDate) return;
      setDropoffDate(date);
    }
    setShowCalendar(false);
  };

  const renderCalendar = (monthOffset: number) => {
    const renderDate = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + monthOffset, 1);
    const daysInMonth = getDaysInMonth(renderDate);
    const firstDay = getFirstDayOfMonth(renderDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const isPickupDay = (d: Date) => pickupDate?.toDateString() === d.toDateString();
    const isDropoffDay = (d: Date) => dropoffDate?.toDateString() === d.toDateString();
    const isInRange = (d: Date) =>
      !!(pickupDate && dropoffDate && d > pickupDate && d < dropoffDate);

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(renderDate.getFullYear(), renderDate.getMonth(), day);
      const isPast = date < today;
      const isStart = isPickupDay(date);
      const isEnd = isDropoffDay(date);
      const inRange = isInRange(date);
      const isToday = date.toDateString() === today.toDateString();

      const dayClass = isPast
        ? 'text-muted-foreground/30 cursor-not-allowed'
        : isStart || isEnd
          ? 'bg-primary text-white font-bold shadow-orange-glow rounded-lg'
          : inRange
            ? 'bg-primary/15 text-primary font-medium'
            : isToday
              ? 'bg-primary/20 text-primary font-bold rounded-lg'
              : 'hover:bg-primary hover:text-white text-foreground rounded-lg';

      days.push(
        <button
          key={day}
          onClick={() => { if (!isPast) handleDayClick(date); }}
          disabled={isPast}
          className={`py-2 text-sm font-medium transition-all duration-150 ${dayClass}`}
        >
          {day}
        </button>
      );
    }

    return (
      <div key={monthOffset} className="flex-1 min-w-[260px]">
        <h4 className="font-bold text-foreground mb-4 text-center">
          {renderDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h4>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
            <div key={d} className="text-center text-xs font-semibold text-muted-foreground py-2">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full bg-background py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Book Your Ride in <span className="text-primary">Seconds</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent booking with instant confirmation
            </p>
          </motion.div>
        </div>

        {/* Main Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl shadow-luxury-lg overflow-hidden"
        >
          <div className="bg-gradient-to-br from-white to-secondary/50 p-8 md:p-12">

            {/* Vehicle Type Selection */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-foreground mb-5">Which Type Of Vehicle?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {vehicleTypes.map((vehicle) => {
                  const isSelected = vehicleType === vehicle.id;
                  return (
                    <motion.button
                      key={vehicle.id}
                      onClick={() => setVehicleType(vehicle.id)}
                      whileHover={{ scale: 1.03, y: -4 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className={`relative group rounded-2xl overflow-hidden flex flex-col text-left transition-all duration-300 ${
                        isSelected
                          ? 'ring-2 ring-primary shadow-orange-glow-lg'
                          : 'ring-1 ring-border hover:ring-primary/50 hover:shadow-orange-glow'
                      }`}
                    >
                      <div className="relative aspect-[3/2] w-full overflow-hidden">
                        <Image
                          src={vehicle.image}
                          alt={vehicle.label}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                              className="absolute top-2 right-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center shadow-lg"
                            >
                              <Check className="w-3.5 h-3.5 text-white" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div
                        className={`px-3 py-3 transition-colors duration-300 ${
                          isSelected ? 'bg-primary' : 'bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-0.5">
                          <vehicle.icon
                            className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-primary'}`}
                          />
                          <span
                            className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-foreground'}`}
                          >
                            {vehicle.label}
                          </span>
                        </div>
                        <p className={`text-xs ${isSelected ? 'text-white/80' : 'text-muted-foreground'}`}>
                          {vehicle.tagline}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Quick Booking Banner */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12 bg-primary/10 border-l-4 border-primary rounded-lg p-4 flex items-center gap-3"
            >
              <Zap className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-primary">
                <strong>Need a ride in 30 minutes?</strong> Try our instant booking
              </span>
            </motion.div>

            {/* Booking Inputs Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Pickup Column */}
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    Pick-Up Location
                  </label>
                  <select
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-white text-foreground font-medium"
                  >
                    <option value="">Choose Location</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      Pick-Up Date
                    </label>
                    <button
                      onClick={() => { setCalendarFor('pickup'); setShowCalendar(true); }}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-left transition-all duration-200 ${
                        pickupDate
                          ? 'border-primary bg-primary/5 hover:border-primary'
                          : 'border-border bg-white hover:border-primary'
                      }`}
                    >
                      {pickupDate ? (
                        <div>
                          <p className="text-[10px] font-semibold text-primary uppercase tracking-wide leading-none mb-1">
                            Pick-Up
                          </p>
                          <p className="text-sm font-bold text-foreground">
                            {format(pickupDate, 'EEE, MMM d yyyy')}
                          </p>
                        </div>
                      ) : (
                        <span className="text-muted-foreground font-medium">Select Date</span>
                      )}
                    </button>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                      <Clock className="w-4 h-4 text-primary" />
                      Pick-Up Time
                    </label>
                    <button
                      onClick={() => setShowTimePicker('pickup')}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-left transition-all duration-200 ${
                        pickupTime
                          ? 'border-primary bg-primary/5'
                          : 'border-border bg-white hover:border-primary'
                      }`}
                    >
                      {pickupTime ? (
                        <div>
                          <p className="text-[10px] font-semibold text-primary uppercase tracking-wide leading-none mb-1">
                            Time
                          </p>
                          <p className="text-sm font-bold text-foreground">{pickupTime}</p>
                        </div>
                      ) : (
                        <span className="text-muted-foreground font-medium">Select Time</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Dropoff Column */}
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    Drop-Off Location
                  </label>
                  <select
                    value={sameLocation ? pickupLocation : dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                    disabled={sameLocation}
                    className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-white text-foreground font-medium disabled:bg-muted disabled:text-muted-foreground"
                  >
                    <option value="">Choose Location</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      Drop-Off Date
                    </label>
                    <button
                      onClick={() => { setCalendarFor('dropoff'); setShowCalendar(true); }}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-left transition-all duration-200 ${
                        dropoffDate
                          ? 'border-primary bg-primary/5 hover:border-primary'
                          : 'border-border bg-white hover:border-primary'
                      }`}
                    >
                      {dropoffDate ? (
                        <div>
                          <p className="text-[10px] font-semibold text-primary uppercase tracking-wide leading-none mb-1">
                            Drop-Off
                          </p>
                          <p className="text-sm font-bold text-foreground">
                            {format(dropoffDate, 'EEE, MMM d yyyy')}
                          </p>
                        </div>
                      ) : (
                        <span className="text-muted-foreground font-medium">Select Date</span>
                      )}
                    </button>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                      <Clock className="w-4 h-4 text-primary" />
                      Drop-Off Time
                    </label>
                    <button
                      onClick={() => setShowTimePicker('dropoff')}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-left transition-all duration-200 ${
                        dropoffTime
                          ? 'border-primary bg-primary/5'
                          : 'border-border bg-white hover:border-primary'
                      }`}
                    >
                      {dropoffTime ? (
                        <div>
                          <p className="text-[10px] font-semibold text-primary uppercase tracking-wide leading-none mb-1">
                            Time
                          </p>
                          <p className="text-sm font-bold text-foreground">{dropoffTime}</p>
                        </div>
                      ) : (
                        <span className="text-muted-foreground font-medium">Select Time</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Duration Summary Card */}
            <AnimatePresence>
              {durationLabel && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="mb-8 overflow-hidden"
                >
                  <div className="flex items-center justify-between bg-primary/8 border border-primary/20 rounded-2xl px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-primary uppercase tracking-wide mb-0.5">
                          Booking Period
                        </p>
                        <p className="text-sm font-bold text-foreground">{durationLabel}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Est. Duration</p>
                      <p className="text-lg font-bold text-primary">
                        {durationDays} day{durationDays !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={sameLocation}
                  onChange={(e) => setSameLocation(e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-primary text-primary cursor-pointer accent-primary"
                />
                <span className="text-sm font-medium text-foreground">Return to same location</span>
              </label>
              <button className="btn-primary text-lg px-12 py-4 rounded-full font-semibold shadow-orange-glow-lg hover:shadow-orange-glow-lg transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                Let&apos;s Drive
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Calendar Modal */}
        <AnimatePresence>
          {showCalendar && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-4"
              onClick={() => setShowCalendar(false)}
            >
              <motion.div
                initial={{ y: 400, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 400, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-luxury-lg p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {calendarFor === 'pickup' ? 'Select Pick-Up Date' : 'Select Drop-Off Date'}
                  </h3>
                  <button
                    onClick={() => setShowCalendar(false)}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </button>
                </div>

                {/* Range hint */}
                {pickupDate && dropoffDate && (
                  <p className="text-sm text-muted-foreground mb-6">
                    {format(pickupDate, 'MMM d')} → {format(dropoffDate, 'MMM d')} ({durationDays} day{durationDays !== 1 ? 's' : ''})
                  </p>
                )}
                {!pickupDate && <p className="text-sm text-muted-foreground mb-6">Select your pick-up date first, then your drop-off date.</p>}
                {pickupDate && !dropoffDate && <p className="text-sm text-muted-foreground mb-6">Now select a drop-off date after {format(pickupDate, 'MMM d')}.</p>}

                {/* Month navigation */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1))}
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <span className="text-sm font-medium text-muted-foreground">
                    {calendarMonth.toLocaleString('default', { month: 'long', year: 'numeric' })} — {new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 2, 1).toLocaleString('default', { month: 'long' })}
                  </span>
                  <button
                    onClick={() => setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1))}
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {[0, 1, 2].map((offset) => renderCalendar(offset))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowCalendar(false)}
                    className="flex-1 px-6 py-3 border-2 border-border text-foreground rounded-xl font-semibold hover:bg-secondary transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowCalendar(false)}
                    className="btn-primary flex-1 px-6 py-3 rounded-xl font-semibold"
                  >
                    Apply
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Time Picker Modal */}
        <AnimatePresence>
          {showTimePicker !== false && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-4"
              onClick={() => setShowTimePicker(false)}
            >
              <motion.div
                initial={{ y: 400, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 400, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="bg-white rounded-3xl w-full max-w-md max-h-[80vh] overflow-y-auto shadow-luxury-lg p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {showTimePicker === 'pickup' ? 'Pick-Up Time' : 'Drop-Off Time'}
                  </h3>
                  <button
                    onClick={() => setShowTimePicker(false)}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </button>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4 text-sm">Morning</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {morningTimes.map((time) => {
                      const isSelected = showTimePicker === 'pickup' ? pickupTime === time : dropoffTime === time;
                      return (
                        <button
                          key={time}
                          onClick={() => {
                            if (showTimePicker === 'pickup') setPickupTime(time);
                            else setDropoffTime(time);
                            setShowTimePicker(false);
                          }}
                          className={`py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all ${
                            isSelected
                              ? 'border-primary bg-primary text-white'
                              : 'border-border hover:border-primary hover:bg-primary-ultra-light text-foreground'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-4 text-sm">Afternoon</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {afternoonTimes.map((time) => {
                      const isSelected = showTimePicker === 'pickup' ? pickupTime === time : dropoffTime === time;
                      return (
                        <button
                          key={time}
                          onClick={() => {
                            if (showTimePicker === 'pickup') setPickupTime(time);
                            else setDropoffTime(time);
                            setShowTimePicker(false);
                          }}
                          className={`py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all ${
                            isSelected
                              ? 'border-primary bg-primary text-white'
                              : 'border-border hover:border-primary hover:bg-primary-ultra-light text-foreground'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
