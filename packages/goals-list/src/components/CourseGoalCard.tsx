import React from "react";
import { CourseGoal } from "../types";

type Props = {
  goal: CourseGoal;
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalCard({ goal, onDeleteGoal }: Props) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onDeleteGoal(goal.id);
  };

  return (
    <article className="goal-card">
      <div>
        <h2>{goal.title}</h2>
        <p>{goal.description}</p>
      </div>
      <button onClick={handleClick} aria-label={`Delete goal ${goal.title}`} title="Delete goal">
        Delete
      </button>
    </article>
  );
}
