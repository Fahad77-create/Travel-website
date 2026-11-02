import Link from "next/link";

const variants = {
  primary: "bg-sky text-white hover:bg-ink",
  accent: "bg-amber text-ink hover:bg-white",
  outline: "border border-white/40 text-white hover:bg-white hover:text-ink",
  dark: "bg-ink text-white hover:bg-sky",
};

export default function Button({ href, variant = "primary", className = "", children, ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 disabled:opacity-60 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
