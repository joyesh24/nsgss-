'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock, ChevronDown, ChevronUp, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'
import LoadingScreen from '../components/LoadingScreen'

const routine = [
  { day: 'রবিবার', classes: ['বাংলা', 'ইংরেজি', 'গণিত', 'বিজ্ঞান', 'সমাজ বিজ্ঞান'] },
  { day: 'সোমবার', classes: ['ইংরেজি', 'গণিত', 'বাংলা', 'ধর্ম', 'শারীরিক শিক্ষা'] },
  { day: 'মঙ্গলবার', classes: ['গণিত', 'বিজ্ঞান', 'ইংরেজি', 'বাংলা', 'কম্পিউটার'] },
  { day: 'বুধবার', classes: ['বিজ্ঞান', 'বাংলা', 'ইংরেজি', 'গণিত', 'চারু ও কারুকলা'] },
  { day: 'বৃহস্পতিবার', classes: ['সমাজ বিজ্ঞান', 'ইংরেজি', 'গণিত', 'বাংলা', 'বিজ্ঞান'] },
]

const timeslots = ['9:00 - 9:45', '10:00 - 10:45', '11:00 - 11:45', '12:00 - 12:45', '2:00 - 2:45']

const classColors: { [key: string]: string } = {
  'বাংলা': 'bg-red-100 border-red-200',
  'ইংরেজি': 'bg-blue-100 border-blue-200',
  'গণিত': 'bg-green-100 border-green-200',
  'বিজ্ঞান': 'bg-yellow-100 border-yellow-200',
  'সমাজ বিজ্ঞান': 'bg-purple-100 border-purple-200',
  'ধর্ম': 'bg-orange-100 border-orange-200',
  'শারীরিক শিক্ষা': 'bg-pink-100 border-pink-200',
  'কম্পিউটার': 'bg-indigo-100 border-indigo-200',
  'চারু ও কারুকলা': 'bg-teal-100 border-teal-200',
}

export default function ClassRoutinePage() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null)
  const [selectedClass, setSelectedClass] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <LoadingScreen />

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-teal-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-800 mb-8 transition-colors duration-300">
          <ArrowLeft className="mr-2" /> হোম পেজে ফিরে যান
        </Link>
        <motion.h1 
          className="text-4xl font-bold text-green-800 mb-8 flex items-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BookOpen className="mr-4" /> ক্লাস রুটিন
        </motion.h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {routine.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border-b border-green-200 ${index % 2 === 0 ? 'bg-green-50' : 'bg-white'}`}
            >
              <div
                className="p-4 flex justify-between items-center cursor-pointer hover:bg-green-100 transition-colors duration-300"
                onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
              >
                <h2 className="text-xl font-semibold text-green-700 flex items-center">
                  <Calendar className="mr-2" size={20} />
                  {day.day}
                </h2>
                {expandedDay === day.day ? <ChevronUp className="text-green-600" /> : <ChevronDown className="text-green-600" />}
              </div>
              <AnimatePresence>
                {expandedDay === day.day && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <table className="w-full">
                      <thead>
                        <tr className="bg-green-200">
                          <th className="py-2 px-4 text-left">সময়</th>
                          <th className="py-2 px-4 text-left">বিষয়</th>
                        </tr>
                      </thead>
                      <tbody>
                        {day.classes.map((subject, i) => (
                          <tr key={i} className="border-t border-green-100">
                            <td className="py-2 px-4">
                              <div className="flex items-center">
                                <Clock className="mr-2" size={16} />
                                {timeslots[i]}
                              </div>
                            </td>
                            <td className="py-2 px-4">
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                className={`rounded p-2 text-center cursor-pointer ${classColors[subject]} border ${selectedClass === subject ? 'ring-2 ring-offset-2 ring-green-500' : ''}`}
                                onClick={() => setSelectedClass(selectedClass === subject ? null : subject)}
                              >
                                {subject}
                              </motion.div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        {selectedClass && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8 p-4 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-2">{selectedClass} সম্পর্কে তথ্য:</h3>
            <p>এখানে {selectedClass} বিষয়ের বিস্তারিত তথ্য, পাঠ্যসূচি, এবং অন্যান্য প্রাসঙ্গিক তথ্য যোগ করা যেতে পারে।</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

