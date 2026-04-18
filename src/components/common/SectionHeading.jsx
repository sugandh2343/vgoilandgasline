import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-relaxed text-dark/80 sm:text-base">{description}</p> : null}
    </motion.header>
  );
}

export default SectionHeading;
