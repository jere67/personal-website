"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    id: string;
    hoveredId?: string | null;
    setHoveredId: (id: string | null) => void;
    skillName: string;
}

const SkillsAnimation = ({ src, width, height, index, id, hoveredId, setHoveredId, skillName }: Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{delay: index * animationDelay}}
            className='relative group'
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
        >
            <Image
                src={src}
                width={width}
                height={height}
                alt={skillName}
                className='relative z-10'
            />
            <AnimatePresence>
                {hoveredId === id && (
                    <motion.div
                        className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 0.15 },
                        }}
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.15, delay: 0.2 },
                        }}
                    >
                        <span className="text-white text-center px-2 py-1" style={{ fontSize: `${Math.max(12, Math.min(16, width / 5))}px` }}>
                            {skillName}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default SkillsAnimation