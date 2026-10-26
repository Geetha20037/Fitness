import { CheckCircle2, Target } from "lucide-react";

export default function GoalCard({ goal, onUpdate }) {
  const percentage = Math.min(
    100,
    Math.round((goal.current / goal.target) * 100),
  );

  const completed = goal.current >= goal.target;

  return (
    <article className="rounded-xl border border-[#30362b] bg-[#141611] p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c1fa7015] text-[#c1fa70]">
            {completed ? (
              <CheckCircle2 size={20} />
            ) : (
              <Target size={20} />
            )}
          </span>
          <div>
            <h3 className="text-sm font-bold">{goal.title}</h3>
            <p className="mt-1 text-[11px] text-[#858b7e]">
              {completed ? "Goal achieved!" : "Daily target"}
            </p>
          </div>
        </div>
        <span className="text-sm font-extrabold text-[#c1fa70]">
          {percentage}%
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between gap-2">
        <p className="text-xs text-[#a6ac9c]">
          <span className="font-bold text-white">
            {goal.current.toLocaleString("en-IN")}
          </span>{" "}
          / {goal.target.toLocaleString("en-IN")} {goal.unit}
        </p>

        <button
          type="button"
          onClick={() => onUpdate(goal.id)}
          disabled={completed}
          className="rounded-lg border border-[#394031] px-3 py-1.5 text-[10px] font-bold text-[#c1fa70] transition-colors hover:bg-[#c1fa7012] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {completed ? "Completed" : "+ Add progress"}
        </button>
      </div>

      <div className="progress-track mt-3">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </article>
  );
}