'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, GraduationCap, Download, Search, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const examResults = [
  { id: 1, name: 'হাফ ইয়ারলি পরীক্ষা ২০২৩', date: '১৫ জুন, ২০২৩', link: '#' },
  { id: 2, name: 'বার্ষিক পরীক্ষা ২০২৩', date: '১০ ডিসেম্বর, ২০২৩', link: '#' },
  { id: 3, name: 'প্রি-টেস্ট পরীক্ষা ২০২৪', date: '২০ ফেব্রুয়ারি, ২০২৪', link: '#' },
]

export default function ExamResultsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedExam, setSelectedExam] = useState<number | null>(null)

  const filteredExams = examResults.filter(exam =>
    exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.date.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-green-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link href="/" className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-8">
          <ArrowLeft className="mr-2" /> হোম পেজে ফিরে যান
        </Link>
        <h1 className="text-4xl font-bold text-teal-800 mb-8 flex items-center">
          <GraduationCap className="mr-4" /> পরীক্ষার ফলাফল
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6 relative">
            <input
              type="text"
              placeholder="পরীক্ষা খুঁজুন..."
              className="w-full p-3 pl-10 rounded-lg border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3 text-teal-400" />
          </div>
          <div className="space-y-4">
            {filteredExams.map((exam) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-teal-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setSelectedExam(selectedExam === exam.id ? null : exam.id)}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-teal-600 mb-2">{exam.name}</h3>
                    <p className="text-sm text-teal-500">{exam.date}</p>
                  </div>
                  {selectedExam === exam.id ? <ChevronUp className="text-teal-600" /> : <ChevronDown className="text-teal-600" />}
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: selectedExam === exam.id ? 'auto' : 0, opacity: selectedExam === exam.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4">
                    <Link href={exam.link} passHref>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-teal-500 text-white px-6 py-3 rounded-lg flex items-center hover:bg-teal-600 transition-colors duration-300"
                      >
                        <Download className="mr-2" />
                        ফলাফল ডাউনলোড করুন (PDF)
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

