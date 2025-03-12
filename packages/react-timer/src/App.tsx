import { useRef } from "react";
import List from "./components/List";
import Input from "./components/Input";

function App() {
  type User = {
    id: string;
    name: string;
  };

  const users: User[] = [
    { id: "1", name: "Ted" },
    { id: "2", name: "Billy" },
  ];

  const hobbies = ["golf", "tennis", "kickboxing"];

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input
        label="Test"
        id="test"
        ref={inputRef}
      />
      <section>
        <h2>Users</h2>
        <List
          items={users}
          renderItem={(user) => <li key={user.id}>{user.name}</li>}
        />
      </section>
      <section>
        <h2>Hobbies</h2>
        <List
          items={hobbies}
          renderItem={(hobby) => <li key={hobby}>{hobby}</li>}
        />
      </section>
    </main>
  );
}

export default App;
