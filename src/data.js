import {
  Activity,
  Dumbbell,
  Heart,
  Waves,
} from "lucide-react";

export const workouts = [
  {
    id: 1,
    name: "Morning Cardio",
    category: "Cardio",
    duration: 30,
    calories: 280,
    difficulty: "Beginner",
    icon: Activity,
    color: "#C1FA70",
    description: "Build endurance and start your day with energy.",
    exercises: [
      "Warm-up walk — 5 min",
      "Jogging — 15 min",
      "Cool-down stretch — 10 min",
    ],
  },
  {
    id: 2,
    name: "Full Body Strength",
    category: "Strength",
    duration: 45,
    calories: 360,
    difficulty: "Intermediate",
    icon: Dumbbell,
    color: "#A6A0FF",
    description: "Train your major muscle groups and build strength.",
    exercises: [
      "Squats — 3 sets",
      "Push-ups — 3 sets",
      "Dumbbell rows — 3 sets",
      "Plank — 3 rounds",
    ],
  },
  {
    id: 3,
    name: "Mindful Yoga",
    category: "Yoga",
    duration: 25,
    calories: 120,
    difficulty: "Beginner",
    icon: Waves,
    color: "#78D9D2",
    description: "Improve flexibility, mobility, and relaxation.",
    exercises: [
      "Mountain pose — 3 min",
      "Sun salutations — 10 min",
      "Seated stretches — 7 min",
      "Breathing — 5 min",
    ],
  },
  {
    id: 4,
    name: "Power HIIT",
    category: "HIIT",
    duration: 20,
    calories: 250,
    difficulty: "Advanced",
    icon: Heart,
    color: "#FF9E86",
    description: "A short, intense interval-based training session.",
    exercises: [
      "Jumping jacks — 3 min",
      "High knees — 4 min",
      "Bodyweight squats — 5 min",
      "Recovery and cooldown — 8 min",
    ],
  },
];

export const meals = [
  {
    id: 1,
    name: "Green Power Bowl",
    type: "BREAKFAST",
    time: "08:00 AM",
    calories: 380,
    protein: 22,
    carbs: 42,
    fat: 12,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=650&q=80",
    description: "Avocado, greens, quinoa and seeds.",
  },
  {
    id: 2,
    name: "Protein Harvest",
    type: "LUNCH",
    time: "01:00 PM",
    calories: 520,
    protein: 38,
    carbs: 48,
    fat: 16,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=650&q=80",
    description: "Balanced protein, grains and fresh vegetables.",
  },
  {
    id: 3,
    name: "Berry Recovery",
    type: "SNACK",
    time: "04:30 PM",
    calories: 210,
    protein: 14,
    carbs: 28,
    fat: 6,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=650&q=80",
    description: "Fruit, yogurt and crunchy nutritious toppings.",
  },
];

export const initialGoals = [
  {
    id: 1,
    title: "Daily steps",
    target: 10000,
    unit: "steps",
    current: 7248,
  },
  {
    id: 2,
    title: "Burn calories",
    target: 600,
    unit: "kcal",
    current: 420,
  },
  {
    id: 3,
    title: "Active minutes",
    target: 60,
    unit: "minutes",
    current: 42,
  },
];

export const weeklyActivity = [
  { day: "Mon", steps: 6400, calories: 310 },
  { day: "Tue", steps: 8200, calories: 420 },
  { day: "Wed", steps: 7100, calories: 360 },
  { day: "Thu", steps: 9600, calories: 510 },
  { day: "Fri", steps: 7800, calories: 390 },
  { day: "Sat", steps: 10400, calories: 580 },
  { day: "Sun", steps: 7248, calories: 420 },
];

export const initialStats = {
  steps: 7248,
  calories: 420,
  minutes: 42,
  heartRate: 72,
};