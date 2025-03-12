/* 
  A reusable List component which outputs an <ul> that wraps a list that may output any kind of value (strings, numbers, objects, ...). 
  The component accepts the items as a prop as well as a renderItem prop that expects to get a function that controls how each item should be rendered.

  It may be used like this:

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
*/

import React from "react";

type Props<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

export default function List<T>({ items, renderItem }: Props<T>) {
  return <ul>{items.map(renderItem)}</ul>;
}
