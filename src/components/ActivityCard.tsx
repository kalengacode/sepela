'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Users } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  time: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  participants?: string;
  day: string;
  index: number;
}

export default function ActivityCard({
  title,
  time,
  location,
  description,
  icon,
  participants,
  day,
  index
}: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(245, 158, 11, 0.3)',
        transition: { duration: 0.3 }
      }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group"
    >
      {/* Day Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        className="inline-block bg-amber-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-4"
      >
        {day}
      </motion.div>

      <div className="flex items-start gap-4">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, rotate: -180 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
          className="flex-shrink-0 w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 group-hover:bg-amber-500/30 transition-colors"
        >
          {icon}
        </motion.div>

        <div className="flex-1">
          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors"
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="text-gray-300 mb-4 leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.6 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2 text-amber-400">
              <Clock size={16} />
              <span className="text-sm">{time}</span>
            </div>
            <div className="flex items-center gap-2 text-amber-400">
              <MapPin size={16} />
              <span className="text-sm">{location}</span>
            </div>
            {participants && (
              <div className="flex items-center gap-2 text-amber-400">
                <Users size={16} />
                <span className="text-sm">{participants}</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
