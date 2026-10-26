import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  icon: Icon,
  label,
  value,
  unit,
  change,
  color = "#C1FA70",
  progress,
  delay = 0,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay }}
      className="panel panel-hover min-w-0 p-4 sm:p-5"
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${color}17`, color }}
        >
          {Icon && <Icon size={20} />}
        </span>

        {change && (
          <span className="flex items-center gap-1 rounded-full bg-[#c1fa7014] px-2 py-1 text-[10px] font-bold text-[#c1fa70]">
            <ArrowUpRight size={12} />
            {change}
          </span>
        )}
      </div>

      <p className="mt-5 text-xs font-medium text-[#929889]">{label}</p>

      <p className="metric-number mt-1 break-words text-2xl font-extrabold sm:text-3xl">
        {Number(value).toLocaleString("en-IN")}
        {unit && (
          <span className="ml-1 text-xs font-medium tracking-normal text-[#858b7e]">
            {unit}
          </span>
        )}
      </p>

      {typeof progress === "number" && (
        <div className="mt-4">
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${Math.max(0, Math.min(100, progress))}%`,
                backgroundColor: color,
              }}
            />
          </div>
          <p className="mt-2 text-[10px] text-[#858b7e]">
            {Math.round(progress)}% of daily goal
          </p>
        </div>
      )}
    </motion.article>
  );
}