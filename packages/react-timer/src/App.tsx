import { useRef } from "react";
import { Button, Form, Input, type FormHandle } from "@udemy-ts-react/shared";
function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form
        onSave={handleSave}
        ref={customForm}
      >
        <Input
          type="text"
          label="Name"
          id="name"
          name="name"
        />
        <Input
          type="number"
          label="Age"
          id="age"
          name="age"
        />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
