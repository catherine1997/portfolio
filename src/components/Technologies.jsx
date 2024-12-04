import React from 'react';
import {RiGithubFill, RiJavascriptLine, RiReactjsLine, RiTailwindCssFill} from "react-icons/ri"
import { SiChakraui } from "react-icons/si";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { animate, motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y:[10, -10],
        transition: {
            duration: duration,  
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies =() => {
  return (
    <div className='pb-24'> 
        <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>
            Technologies
        </motion.h2>

        <motion.div 
           whileInView={{opacity: 1, x:0}}
           initial={{opacity: 0, x: -100}}
           transition={{duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            >
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>

            <motion.div 
             initial="initial"
             animate="animate"
             variants={iconVariants(3)}
            className='p-4'>
                <RiJavascriptLine  className='text-7xl'/>
            </motion.div>

            <motion.div 
             initial="initial"
             animate="animate"
             variants={iconVariants(5)}
            className='p-4'>
                <RiTailwindCssFill className='text-7xl'/>
            </motion.div>

            <motion.div 
             initial="initial"
             animate="animate"
             variants={iconVariants(6)}
            className='p-4'>
                <RiGithubFill  className='text-7xl'/>
            </motion.div>

            <motion.div 
             initial="initial"
             animate="animate"
             variants={iconVariants(4)}
            className='p-4'>
                <SiChakraui  className='text-7xl'/>
            </motion.div>

            <motion.div 
             initial="initial"
             animate="animate"
             variants={iconVariants(2)}
            className='p-4'>
                <FaHtml5 className='text-7xl'/>
            </motion.div>

            <motion.div 
             initial="initial"
             animate="animate"
             variants={iconVariants(5)}
            className='p-4'>
                <FaCss3 className='text-7xl'/>
            </motion.div>

            <motion.div 
             initial="initial"
             animate="animate"
             variants={iconVariants(6)}
            className='p-4'>
                <SiTypescript className='text-7xl'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies