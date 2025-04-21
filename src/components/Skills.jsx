import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const skills = [
  'React',
  'JavaScript',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'Git',
  'Firebase',
  'Node.js',
];

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      className="max-w-4xl mx-auto py-16 px-6"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Compétences</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-white shadow-lg rounded-xl p-4 hover:bg-indigo-100 transition duration-300"
          >
            <p className="font-medium text-gray-700">{skill}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
