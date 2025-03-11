type Props = React.ComponentPropsWithoutRef<"input"> & {
  label: string;
  id: string;
};

export default function Input({ id, label, ...props }: Props) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </p>
  );
}
