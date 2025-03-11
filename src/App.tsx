import { useState } from "react";
import { CourseGoal } from "./types";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoalForm from "./components/NewGoalForm";

let nextId = 1;

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleCreateGoal(title: string, description: string) {
    const newGoal: CourseGoal = {
      id: nextId++,
      title,
      description,
    };

    setGoals((prevGoals) => [...prevGoals, newGoal]);
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header />
      <NewGoalForm onCreateGoal={handleCreateGoal} />
      <h1>Your Course Goals</h1>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
