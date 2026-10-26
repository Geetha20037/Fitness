import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Flame,
  Utensils,
} from "lucide-react";

export default function MealCard({ meal }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="panel panel-hover min-w-0 overflow-hidden"
    >
      <div className="relative h-44 overflow-hidden sm:h-48">
        <img
          src={meal.image}
          alt={meal.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 text-[9px] font-bold tracking-widest text-white backdrop-blur-md">
          {meal.type}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-display text-base font-bold">
              {meal.name}
            </h3>
            <p className="mt-1 text-xs text-[#858b7e]">
              {meal.description}
            </p>
          </div>
          <Utensils
            size={18}
            className="shrink-0 text-[#c1fa70]"
          />
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-[#aeb4a5]">
          <Flame size={15} className="text-[#ff9e86]" />
          <span className="font-bold text-white">
            {meal.calories} kcal
          </span>
          <span>·</span>
          <span>{meal.time}</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[#2b3027] pt-4">
          {[
            ["Protein", meal.protein, "g"],
            ["Carbs", meal.carbs, "g"],
            ["Fat", meal.fat, "g"],
          ].map(([label, value, unit]) => (
            <div key={label} className="min-w-0">
              <p className="text-[10px] text-[#858b7e]">
                {label}
              </p>
              <p className="mt-1 text-sm font-bold">
                {value}
                <span className="ml-0.5 text-[10px] text-[#858b7e]">
                  {unit}
                </span>
              </p>
            </div>
          ))}
        </div>

        <a
          href="#nutrition-summary"
          className="mt-4 flex items-center justify-between text-xs font-semibold text-[#c1fa70] hover:text-white"
        >
          View nutrition summary
          <ArrowUpRight size={15} />
        </a>
      </div>
    </motion.article>
  );
}