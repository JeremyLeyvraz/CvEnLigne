import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

// Version classique
// function About() {
//     return (
//       <section className="max-w-4xl mx-auto py-16 px-6">
//         <h2 className="text-3xl font-bold text-center mb-6">À propos de moi</h2>
//         <p className="text-lg text-gray-700 leading-relaxed text-center">
//           Passionné par le développement web, je suis un développeur front-end spécialisé en React. 
//           Curieux, rigoureux, et toujours avide d’apprendre, je conçois des interfaces modernes, intuitives et performantes.
//         </p>
//       </section>
//     );
//   }

// Version motion
//   function About() {
//     return (
//       <motion.section
//         className="max-w-4xl mx-auto py-16 px-6"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-6">À propos de moi</h2>
//         <p className="text-lg text-gray-700 leading-relaxed text-center">
//           Passionné par le développement web, je suis un développeur front-end spécialisé en React. 
//           Curieux, rigoureux, et toujours avide d’apprendre, je conçois des interfaces modernes, intuitives et performantes.
//           Curieux, rigoureux, et toujours avide d’apprendre, je conçois des interfaces modernes, intuitives et performantes.
//           Curieux, rigoureux, et toujours avide d’apprendre, je conçois des interfaces modernes, intuitives et performantes.
//           Curieux, rigoureux, et toujours avide d’apprendre, je conçois des interfaces modernes, intuitives et performantes.
//         </p>
//       </motion.section>
//     );
//   }

  // Version motion scroll
  function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        controls.start('visible');
      }
    }, [isInView, controls]);
  
    const variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };
  
    return (
      <motion.section
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        className="max-w-4xl mx-auto py-16 px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-6">À propos de moi</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Passionné par le développement web, je suis un développeur front-end spécialisé en React.
          Curieux, rigoureux, et toujours avide d’apprendre, je conçois des interfaces modernes, intuitives et performantes.
        </p>
      </motion.section>
    );
  }
  
  export default About;