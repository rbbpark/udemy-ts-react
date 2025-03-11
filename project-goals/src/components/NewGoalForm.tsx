import React, { useState } from "react";

type FormData = {
  title: string;
  description: string;
};

type Props = {
  onCreateGoal: (title: string, description: string) => void;
};

export default function NewGoalForm({ onCreateGoal }: Props) {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
  });

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, title: event.target.value }));
  }

  function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, description: event.target.value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { title, description } = formData;
    if (!title.trim() || !description.trim()) {
      return;
    }

    onCreateGoal(title, description);

    // Reset form
    setFormData({ title: "", description: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Your goal</label>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={handleTitleChange}
          required
        />
      </p>
      <p>
        <label htmlFor="description">Summary</label>
        <input
          id="description"
          type="text"
          value={formData.description}
          onChange={handleDescriptionChange}
          required
        />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}
