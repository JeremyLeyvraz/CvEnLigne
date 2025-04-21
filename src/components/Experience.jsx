import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const experiences = [
  {
    title: 'Développeur Front-End',
    company: 'Startup X',
    period: 'Jan 2023 - Mars 2024',
    description:
      'Développement d’interfaces en React, intégration Tailwind CSS, mise en place de composants réutilisables.',
  },
  {
    title: 'Stagiaire Web',
    company: 'Agence Digitale Y',
    period: 'Juin 2022 - Déc 2022',
    description:
      'Maintenance de sites vitrine, création de landing pages, apprentissage des bonnes pratiques d’accessibilité.',
  },
];

function Experience() {
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
      <h2 className="text-3xl font-bold text-center mb-10">Expérience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white shadow-md rounded-xl p-6 border-l-4 border-indigo-500"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-sm text-gray-500">{exp.company} — {exp.period}</p>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experience;
