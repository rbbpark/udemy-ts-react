type Props = {
  title: string;
  actions: React.ReactNode;
  children: React.ReactNode;
};

export function Card({ actions, children, title }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
      {actions}
    </div>
  );
}
