'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, BarChart3, Users, GraduationCap, Award } from 'lucide-react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const studentData = [
  { name: 'ষষ্ঠ শ্রেণী', value: 120 },
  { name: 'সপ্তম শ্রেণী', value: 150 },
  { name: 'অষ্টম শ্রেণী', value: 130 },
  { name: 'নবম শ্রেণী', value: 140 },
  { name: 'দশম শ্রেণী', value: 160 },
]

const resultData = [
  { name: 'A+', students: 50 },
  { name: 'A', students: 80 },
  { name: 'A-', students: 70 },
  { name: 'B', students: 40 },
  { name: 'C', students: 20 },
  { name: 'D', students: 10 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export default function StatisticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8">
          <ArrowLeft className="mr-2" /> হোম পেজে ফিরে যান
        </Link>
        <h1 className="text-4xl font-bold text-purple-800 mb-8 flex items-center">
          <BarChart3 className="mr-4" /> পরিসংখ্যান
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-purple-600 mb-4 flex items-center">
              <Users className="mr-2" /> শিক্ষার্থী বিতরণ
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={studentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {studentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-purple-600 mb-4 flex items-center">
              <GraduationCap className="mr-2" /> পরীক্ষার ফলাফল বিতরণ
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={resultData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-purple-600 mb-4 flex items-center">
            <Award className="mr-2" /> সাফল্যের হাইলাইট
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-100 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-purple-600">95%</p>
              <p className="text-sm text-purple-800">পাশের হার</p>
            </div>
            <div className="bg-purple-100 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-purple-600">50+</p>
              <p className="text-sm text-purple-800">বৃত্তি প্রাপ্ত শিক্ষার্থী</p>
            </div>
            <div className="bg-purple-100 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-purple-600">10</p>
              <p className="text-sm text-purple-800">জেলা পর্যায়ে সেরা</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

