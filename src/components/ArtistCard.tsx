'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Music, Instagram, Facebook } from 'lucide-react';

interface ArtistCardProps {
  name: string;
  genre: string;
  image: string;
  description: string;
  social?: {
    instagram?: string;
    facebook?: string;
  };
  index: number;
}

export default function ArtistCard({ 
  name, 
  genre, 
  image, 
  description, 
  social, 
  index 
}: ArtistCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: 'easeOut'
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl border border-amber-500/20 group"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        
        {/* Genre Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 + 0.3 }}
          className="absolute top-4 right-4 bg-amber-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"
        >
          <Music size={14} />
          {genre}
        </motion.div>
      </div>

      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 + 0.4 }}
          className="text-2xl font-bold text-white mb-2"
        >
          {name}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 + 0.5 }}
          className="text-gray-300 mb-4 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Social Links */}
        {social && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.6 }}
            className="flex gap-3"
          >
            {social.instagram && (
              <motion.a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
            )}
            {social.facebook && (
              <motion.a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
