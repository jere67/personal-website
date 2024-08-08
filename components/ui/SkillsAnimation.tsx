"use client"

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    id: string;
    hoveredId?: string | null;
    setHoveredId: (id: string | null) => void;
}

const SkillsAnimation = ({ src, width, height, id, hoveredId, setHoveredId }: Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3

    const padding = Math.max(10, Math.min(20, Math.floor(width * 0.2)))

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={id}
            transition={{delay: parseFloat(id) * animationDelay}}
            className='relative'
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{ padding: `${padding}px` }}
        >
            <AnimatePresence>
                {hoveredId === id && (
                    <motion.div
                        className="absolute inset-0 bg-neutral-200 dark:bg-slate-800/[0.8] rounded-3xl z-10"
                        layoutId="hoverBackground"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 0.15 },
                        }}
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.15, delay: 0.2 },
                        }}
                    />
                )}
            </AnimatePresence>
            <Image
                src={src}
                width={width}
                height={height}
                alt='Skill Image'
                className='relative z-20'
            />
        </motion.div>
    )
}

export default SkillsAnimation