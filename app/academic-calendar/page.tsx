'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import LoadingScreen from '../components/LoadingScreen'

const months = [
  'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
  'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
]

const weekdays = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি']

const holidays = {
  '2024-01-01': 'নববর্ষ',
  '2024-02-21': 'শহীদ দিবস',
  '2024-03-26': 'স্বাধীনতা দিবস',
  '2024-04-14': 'বাংলা নববর্ষ',
  '2024-05-01': 'মে দিবস',
  '2024-08-15': 'জাতীয় শোক দিবস',
  '2024-12-16': 'বিজয় দিবস',
  '2024-12-25': 'বড়দিন',
}

export default function AcademicCalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(0)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const renderCalendar = (month: number) => {
    const firstDay = new Date(2024, month, 1)
    const lastDay = new Date(2024, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()

    let days = []
    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="text-center py-2"></div>)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = `2024-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
      const isHoliday = holidays[date as keyof typeof holidays]
      const isSelected = selectedDate === date
      days.push(
        <motion.div
          key={i}
          whileHover={{ scale: 1.1 }}
          className={`text-center py-2 cursor-pointer ${isHoliday ? 'bg-red-100' : ''} ${isSelected ? 'bg-yellow-200' : ''} rounded`}
          onClick={() => setSelectedDate(date)}
        >
          <span className="font-bold">{i}</span>
          {isHoliday && <p className="text-xs text-red-600">{isHoliday}</p>}
        </motion.div>
      )
    }

    return days
  }

  if (isLoading) return <LoadingScreen />

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-8 transition-colors duration-300">
          <ArrowLeft className="mr-2" /> হোম পেজে ফিরে যান
        </Link>
        <motion.h1 
          className="text-4xl font-bold text-orange-800 mb-8 flex items-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Calendar className="mr-4" /> একাডেমিক ক্যালেন্ডার ২০২৪
        </motion.h1>
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentMonth(prev => (prev - 1 + 12) % 12)}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-300"
            >
              <ChevronLeft />
            </motion.button>
            <h2 className="text-2xl font-bold text-orange-800">{months[currentMonth]}</h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentMonth(prev => (prev + 1) % 12)}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-300"
            >
              <ChevronRight />
            </motion.button>
          </div>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {weekdays.map(day => (
              <div key={day} className="text-center font-bold text-orange-800">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {renderCalendar(currentMonth)}
          </div>
          {selectedDate && holidays[selectedDate as keyof typeof holidays] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 p-4 bg-orange-100 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-orange-800 mb-2">ছুটির দিন</h3>
              <p>{holidays[selectedDate as keyof typeof holidays]}</p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}

