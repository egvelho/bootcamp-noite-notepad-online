import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  to: string;
  children: React.ReactNode;
};

export function Link({ to, children }: LinkProps) {
  return (
    <RouterLink to={to} className="text-blue-500 hover:underline font-semibold">
      {children}
    </RouterLink>
  );
}
