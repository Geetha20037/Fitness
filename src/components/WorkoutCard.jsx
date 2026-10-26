import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock3,
  Flame,
  Play,
} from "lucide-react";

export default function WorkoutCard({
  workout,
  completed,
  onComplete,
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = workout.icon;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      className="panel panel-hover flex min-w-0 flex-col p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: `${workout.color}18`,
            color: workout.color,
          }}
        >
          <Icon size={24} />
        </span>

        <span className="rounded-full border border-[#383e32] px-2.5 py-1 text-[10px] font-semibold text-[#aeb4a5]">
          {workout.difficulty}
        </span>
      </div>

      <p
        className="eyebrow mt-5"
        style={{ color: workout.color }}
      >
        {workout.category}
      </p>

      <h3 className="mt-2 font-display text-lg font-bold">
        {workout.name}
      </h3>

      <p className="mt-2 min-h-10 text-xs leading-5 text-[#929889]">
        {workout.description}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-[#2b3027] py-3 text-xs text-[#a4aa9a]">
        <span className="flex items-center gap-1.5">
          <Clock3 size={14} /> {workout.duration} min
        </span>
        <span className="flex items-center gap-1.5">
          <Flame size={14} style={{ color: "#FF9E86" }} />
          {workout.calories} kcal
        </span>
      </div>

      {expanded && (
        <div className="mt-4 rounded-xl bg-[#11130f] p-3">
          <p className="mb-3 text-xs font-bold">Workout plan</p>
          <ol className="space-y-2">
            {workout.exercises.map((exercise, index) => (
              <li
                key={exercise}
                className="flex gap-2 text-xs leading-5 text-[#a8ae9e]"
              >
                <span className="text-[#c1fa70]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {exercise}
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="btn-secondary flex-1"
        >
          {expanded ? "Hide plan" : "View plan"}
          <ArrowUpRight size={14} />
        </button>

        <button
          type="button"
          onClick={() => onComplete(workout)}
          className={`flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-4 text-xs font-bold transition-colors ${
            completed
              ? "border border-[#c1fa7040] bg-[#c1fa7018] text-[#c1fa70]"
              : "bg-[#c1fa70] text-[#15180f] hover:bg-[#d0ff91]"
          }`}
        >
          {completed ? <Check size={16} /> : <Play size={15} />}
          {completed ? "Completed" : "Complete"}
        </button>
      </div>
    </motion.article>
  );
}