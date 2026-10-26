import { motion } from "framer-motion";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  action,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"
    >
      <div className="min-w-0">
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#858b7e]">
            {description}
          </p>
        )}
      </div>
      {action}
    </motion.div>
  );
}