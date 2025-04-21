import { motion } from 'framer-motion';

const formations = [
  {
    title: 'Diplôme en Informatique',
    institution: 'Université de Paris',
    period: 'Septembre 2020 - Juin 2023',
    description: 'Formation approfondie en développement web et technologies de l\'information.',
  },
  {
    title: 'Bootcamp React & JavaScript',
    institution: 'Le Wagon',
    period: 'Janvier 2022 - Avril 2022',
    description: 'Intensif de 12 semaines sur React, JavaScript, et le développement full-stack.',
  },
  {
    title: 'Certification Tailwind CSS',
    institution: 'Udemy',
    period: 'Mai 2022',
    description: 'Certification sur la maîtrise du framework Tailwind CSS pour le développement front-end.',
  },
];

function Formation() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="max-w-4xl mx-auto py-16 px-6"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Formation & Diplômes</h2>
      <div className="space-y-8">
        {formations.map((formation, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-indigo-500"
          >
            <h3 className="text-xl font-semibold">{formation.title}</h3>
            <p className="text-sm text-gray-500">{formation.institution} — {formation.period}</p>
            <p className="mt-2 text-gray-700">{formation.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Formation;
