import List from "./components/List";

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

  return (
    <main>
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
