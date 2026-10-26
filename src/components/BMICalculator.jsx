import { useState } from "react";
import { Calculator, RotateCcw } from "lucide-react";

function getCategory(bmi) {
  if (bmi < 18.5) {
    return {
      label: "Underweight",
      message: "Consider discussing your nutrition needs with a healthcare professional.",
      color: "#78D9D2",
    };
  }

  if (bmi < 25) {
    return {
      label: "Healthy weight range",
      message: "Your BMI is within the standard healthy adult range.",
      color: "#C1FA70",
    };
  }

  if (bmi < 30) {
    return {
      label: "Overweight range",
      message: "Consider reviewing your overall health and activity with a professional.",
      color: "#FFCD75",
    };
  }

  return {
    label: "Obesity range",
    message: "A healthcare professional can help you assess your health and next steps.",
    color: "#FF9E86",
  };
}

export default function BMICalculator() {
  const [height, setHeight] = useState("165");
  const [weight, setWeight] = useState("65");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculateBMI(event) {
    event.preventDefault();

    const h = Number(height);
    const w = Number(weight);

    if (!Number.isFinite(h) || !Number.isFinite(w) || h < 50 || h > 275 || w < 10 || w > 500) {
      setError("Enter a valid height (50–275 cm) and weight (10–500 kg).");
      setResult(null);
      return;
    }

    const bmi = w / ((h / 100) ** 2);
    setResult({
      value: bmi,
      ...getCategory(bmi),
    });
    setError("");
  }

  function resetCalculator() {
    setHeight("165");
    setWeight("65");
    setResult(null);
    setError("");
  }

  return (
    <section className="panel p-5 sm:p-7">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c1fa7018] text-[#c1fa70]">
          <Calculator size={22} />
        </span>
        <div>
          <h3 className="font-display text-lg font-extrabold">
            BMI calculator
          </h3>
          <p className="mt-1 text-xs text-[#858b7e]">
            Calculate your body mass index
          </p>
        </div>
      </div>

      <form onSubmit={calculateBMI} className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="bmi-height"
            className="mb-2 block text-xs font-semibold text-[#c3c8bc]"
          >
            Height (cm)
          </label>
          <input
            id="bmi-height"
            className="input-dark"
            type="number"
            min="50"
            max="275"
            step="0.1"
            required
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            placeholder="Enter height"
          />
        </div>

        <div>
          <label
            htmlFor="bmi-weight"
            className="mb-2 block text-xs font-semibold text-[#c3c8bc]"
          >
            Weight (kg)
          </label>
          <input
            id="bmi-weight"
            className="input-dark"
            type="number"
            min="10"
            max="500"
            step="0.1"
            required
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            placeholder="Enter weight"
          />
        </div>

        <div className="flex gap-2">
          <button type="submit" className="btn-primary flex-1">
            Calculate BMI
          </button>
          <button
            type="button"
            onClick={resetCalculator}
            className="btn-secondary"
            aria-label="Reset BMI calculator"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </form>

      {error && (
        <p role="alert" className="mt-4 text-xs text-[#ff9e86]">
          {error}
        </p>
      )}

      {result && (
        <div
          aria-live="polite"
          className="mt-5 rounded-xl border p-4"
          style={{
            borderColor: `${result.color}50`,
            backgroundColor: `${result.color}09`,
          }}
        >
          <p className="text-xs text-[#aeb4a5]">Your BMI result</p>
          <p
            className="metric-number mt-1 text-4xl font-extrabold"
            style={{ color: result.color }}
          >
            {result.value.toFixed(1)}
          </p>
          <p
            className="mt-2 text-sm font-bold"
            style={{ color: result.color }}
          >
            {result.label}
          </p>
          <p className="mt-2 text-xs leading-5 text-[#aeb4a5]">
            {result.message}
          </p>
        </div>
      )}

      <p className="mt-4 text-[10px] leading-5 text-[#777e70]">
        Adult BMI categories: below 18.5, underweight; 18.5–24.9, healthy
        range; 25–29.9, overweight; 30 or above, obesity range. BMI does
        not directly measure body fat and may not be appropriate for
        everyone.
      </p>
    </section>
  );
}