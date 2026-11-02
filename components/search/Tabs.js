export default function Tabs({ items, active, onChange }) {
  return (
    <div role="tablist" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {items.map(({ id, label, icon: Icon }) => {
        const selected = id === active;
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(id)}
            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
              selected ? "bg-ink text-white" : "bg-paper text-ink/70 hover:bg-ink/10"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        );
      })}
    </div>
  );
}
