const variants = {
  primary: "bg-brand text-white shadow-lg shadow-brand/30 hover:bg-forest",
  dark: "bg-forest text-white hover:bg-brand",
  outline:
    "border border-brand bg-white/70 text-forest backdrop-blur hover:bg-brand-light",
};

const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  className = "",
  children,
  ...props
}) {
  return (
    <button
      className={`inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full font-semibold transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
}