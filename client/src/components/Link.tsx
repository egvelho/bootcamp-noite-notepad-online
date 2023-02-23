export function Link(props: React.ComponentProps<"a">) {
  return (
    <a
      href="/"
      className="text-blue-500 hover:underline font-semibold"
      {...props}
    />
  );
}
