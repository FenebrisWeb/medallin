export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface WrapperProps {
  children: React.ReactNode;
}
