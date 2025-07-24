import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Mission Thrift Store - Kitchener, ON",
    period: "2024 - 2025",
    description:
      "Refurbished and priced electronics, boosting turnover by 30%, and improved digital labeling using basic HTML/CSS. Resolved 100% of tech support issues (POS, networks, systems), ensuring uninterrupted daily operations. Contributed to internal process docs and cross-team tools, increasing store efficiency by 20%.",
  },
];

const educations = [
  {
    school: "Conestoga College - Kitchener, ON",
    period: "2024 - 2025",
    description:
      "Graduated with distinction. Diploma in Computer Programming. Focused on web development, databases, and software design; achieved 90%+ average in core coding courses.",
  },
  {
    school: "Dr. C.V Raman University",
    period: "2020 - 2023",
    description:
      "Graduated with honors; led IT club and built internal web tools for student use.",
  },
];

const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>
        Experience
      </h1>
      <motion.div className='space-y-8' initial='hidden' animate='visible'>
        {experiences.map((experience, index) => (
          <Reveal>
            <motion.div
              key={index}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
            >
              <h2 className='text-gray-100 text-2xl font-semibold'>
                {experience.company}
              </h2>
              <p className='text-gray-300'>{experience.period}</p>
              <p className='text-gray-400 mt-4'>{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>

      <h1 className='text-4xl text-gray-200 font-bold text-center my-12'>
        Education
      </h1>
      <motion.div className='space-y-8' initial='hidden' animate='visible'>
        {educations.map((edu, index) => (
          <Reveal key={index}>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className='border border-purple-600 p-6 rounded-lg shadow-md
                  hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
            >
              <h2 className='text-gray-100 text-2xl font-semibold'>
                {edu.school}
              </h2>
              <p className='text-gray-300'>{edu.period}</p>
              <p className='text-gray-400 mt-4'>{edu.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
