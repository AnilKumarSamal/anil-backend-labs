export default function Button({ children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary:
      "bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md",

    secondary:
      "border border-gray-300 bg-white text-gray-800 hover:border-gray-400 hover:bg-gray-50",
  };

  return <button className={`${base} ${variants[variant]}`}>{children}</button>;
}
