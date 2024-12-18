'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, BookOpen, Calendar, FileText, ImageIcon, Users2, GraduationCap } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const dashboardItems = [
  { icon: FileText, title: "নোটিশ বোর্ড", color: "from-orange-400 to-red-500", link: "/notice" },
  { icon: BookOpen, title: "ক্লাস কার্যক্রম", color: "from-blue-400 to-indigo-500", link: "/class-activities" },
  { icon: BookOpen, title: "ক্লাস রুটিন", color: "from-green-400 to-teal-500", link: "/class-routine" },
  { icon: BarChart3, title: "পরিসংখ্যান", color: "from-purple-400 to-pink-500", link: "/statistics" },
  { icon: GraduationCap, title: "পরীক্ষার ফলাফল", color: "from-teal-400 to-green-500", link: "/exam-results" },
  { icon: Calendar, title: "একাডেমিক ক্যালেন্ডার", color: "from-yellow-400 to-orange-500", link: "/academic-calendar" },
  { icon: ImageIcon, title: "ফটো গ্যালারি", color: "from-red-400 to-yellow-500", link: "/photo-gallery" },
]

const backgroundImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wildlife-tiger-bengal-tiger-wilderness-wallpaper-preview.jpg-7LL0fNBrPkaV6P8m7UlU3VRg0LrgDw.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shat_Gombuj_Masjid-scaled.jpg-ws5HHSSh59c3WzoiemBfuVEfVIfyIK.jpeg"
]

export default function Home() {
  const router = useRouter()
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 7000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>
      {/* Header with background transitions */}
      <div className="relative h-48 overflow-hidden">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 3,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImages[currentImageIndex]}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {/* School info overlay - positioned at the bottom left */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-4 left-4 bg-black/30 backdrop-blur-sm p-3 rounded-lg shadow-lg"
        >
          <div className="flex items-center space-x-3">
            {/* Logo placeholder */}
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md overflow-hidden">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/115466-WqISaIDwzjnUgKPyKqmLMk4qGPdub0.png"
                alt="School Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            
            {/* School name and EIN */}
            <div>
              <h1 className="text-lg font-bold text-white leading-tight">
                নওয়াপাড়া শংকরপাশা সরকারি মাধ্যমিক বিদ্যালয়
              </h1>
              <p className="text-sm text-white/90">
                EIN - 115466
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content - Dashboard Items */}
      <main className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {dashboardItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredItem(index)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <Link href={item.link} passHref>
                <motion.div
                  className={`w-full h-full bg-gradient-to-br ${item.color} text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:shadow-2xl hover:scale-105 cursor-pointer relative group`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="p-6 flex flex-col items-center justify-center text-center space-y-4 relative z-10">
                    <motion.div 
                      className="p-3 rounded-full bg-white/90 transition-colors duration-300 group-hover:bg-white"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="h-10 w-10 text-gray-800" />
                    </motion.div>
                    <h2 className="text-lg font-medium group-hover:text-white/90 transition-colors duration-300">
                      {item.title}
                    </h2>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}

