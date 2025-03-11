import { CourseGoal } from "../types.ts";
import CourseGoalCard from "./CourseGoalCard.tsx";
import InfoBox from "./InfoBox.tsx";

type Props = {
  onDeleteGoal: (id: number) => void;
  goals: CourseGoal[];
};

export default function CourseGoalList({ goals, onDeleteGoal }: Props) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no course goals yet.</InfoBox>;
  }

  return (
    <>
      {goals.length >= 4 ? (
        <InfoBox mode="warning" severity="low">
          You have a lot of goals! Make sure you finish them!
        </InfoBox>
      ) : null}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoalCard goal={goal} onDeleteGoal={onDeleteGoal} />
          </li>
        ))}
      </ul>
    </>
  );
}
