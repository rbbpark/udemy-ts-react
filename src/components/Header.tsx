type HeaderProps = React.PropsWithChildren<{
  image: {
    src: string;
    alt: string;
  };
}>;

export default function Header({ image, children }: HeaderProps) {
  return (
    <div>
      <img {...image} />
      {/* <img src={image.src} alt={image.alt} /> */}
      <div>{children}</div>
    </div>
  );
}
