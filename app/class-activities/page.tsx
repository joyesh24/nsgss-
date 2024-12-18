'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock, Calendar, User, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const classActivities = [
  {
    id: 1,
    title: "বাংলা সাহিত্য আলোচনা",
    description: "রবীন্দ্রনাথ ঠাকুরের 'গীতাঞ্জলি' নিয়ে আলোচনা",
    date: "১৫ জুলাই, ২০২৩",
    time: "সকাল ১০:০০ - ১১:৩০",
    teacher: "ফাতেমা বেগম",
    class: "নবম শ্রেণী"
  },
  {
    id: 2,
    title: "বিজ্ঞান প্রকল্প প্রদর্শনী",
    description: "ছাত্রদের তৈরি বিজ্ঞান প্রকল্পের প্রদর্শনী ও মূল্যায়ন",
    date: "২০ জুলাই, ২০২৩",
    time: "দুপুর ২:০০ - ৪:০০",
    teacher: "মোঃ রফিকুল ইসলাম",
    class: "দশম শ্রেণী"
  },
  {
    id: 3,
    title: "ইংরেজি বক্তৃতা প্রতিযোগিতা",
    description: "বিশ্ব পরিবেশ দিবস উপলক্ষে ইংরেজি বক্তৃতা প্রতিযোগিতা",
    date: "২৫ জুলাই, ২০২৩",
    time: "সকাল ১১:০০ - দুপুর ১:০০",
    teacher: "শাহানা পারভীন",
    class: "অষ্টম ও নবম শ্রেণী"
  },
  {
    id: 4,
    title: "গণিত অলিম্পিয়াড",
    description: "বার্ষিক গণিত অলিম্পিয়াড প্রতিযোগিতা",
    date: "৩০ জুলাই, ২০২৩",
    time: "সকাল ৯:০০ - দুপুর ১২:০০",
    teacher: "আহমেদ হোসেন",
    class: "ষষ্ঠ থেকে দশম শ্রেণী"
  },
  {
    id: 5,
    title: "ऐতিহাসিক স্থান ভ্রমণ",
    description: "লালবাগ কেল্লা ভ্রমণ ও ইতিহাস শিক্ষা",
    date: "৫ আগস্ট, ২০২৩",
    time: "সকাল ৮:০০ - বিকাল ৪:০০",
    teacher: "ড. আব্দুল করিম",
    class: "নবম ও দশম শ্রেণী"
  }
]

export default function ClassActivitiesPage() {
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-300">
          <ArrowLeft className="mr-2" /> হোম পেজে ফিরে যান
        </Link>
        <h1 className="text-4xl font-bold text-blue-800 mb-8 flex items-center">
          <BookOpen className="mr-4" /> ক্লাস কার্যক্রম
        </h1>
        <div className="space-y-6">
          {classActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="p-6 cursor-pointer hover:bg-blue-50 transition-colors duration-300"
                onClick={() => setExpandedActivity(expandedActivity === activity.id ? null : activity.id)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-blue-600">{activity.title}</h2>
                  {expandedActivity === activity.id ? (
                    <ChevronUp className="text-blue-500" />
                  ) : (
                    <ChevronDown className="text-blue-500" />
                  )}
                </div>
                <div className="mt-2 flex flex-wrap gap-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="mr-2" size={16} />
                    {activity.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="mr-2" size={16} />
                    {activity.time}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <User className="mr-2" size={16} />
                    {activity.teacher}
                  </div>
                </div>
              </div>
              <AnimatePresence>
                {expandedActivity === activity.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">বিস্তারিত:</h3>
                        <p className="text-gray-700">{activity.description}</p>
                      </div>
                      <div className="mt-4">
                        <h3 className="font-semibold text-blue-800 mb-2">অংশগ্রহণকারী শ্রেণী:</h3>
                        <p className="text-gray-700">{activity.class}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

