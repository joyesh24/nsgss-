'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users2, ArrowLeft } from 'lucide-react'

export default function StudentManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-blue-800 mb-8 flex items-center">
          <Users2 className="mr-4" /> শিক্ষার্থী ব্যবস্থাপনা
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Student Management System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-600 mb-2">Total Students</h3>
              <p className="text-3xl font-bold">1,234</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-600 mb-2">Classes</h3>
              <p className="text-3xl font-bold">10</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-600 mb-2">Teachers</h3>
              <p className="text-3xl font-bold">45</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-600 mb-2">Staff</h3>
              <p className="text-3xl font-bold">20</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Add New Student</button>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">View Student List</button>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Generate Reports</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

