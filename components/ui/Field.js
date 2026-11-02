const base =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder-ink/40 outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20";

export default function Field({ label, type = "text", options = [], name, error, className = "", ...props }) {
  let control;

  if (type === "select") {
    control = (
      <select id={name} name={name} className={base} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  } else if (type === "textarea") {
    control = <textarea id={name} name={name} rows={5} className={`${base} resize-none`} {...props} />;
  } else {
    control = <input id={name} name={name} type={type} className={base} {...props} />;
  }

  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {control}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
