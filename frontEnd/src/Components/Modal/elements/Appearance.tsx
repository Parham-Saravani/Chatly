import { useState } from "react";
import { FiCheck, FiMonitor, FiMoon, FiSun } from "react-icons/fi";

type AppearanceProps = {
  onClose: () => void;
};

function Appearance({ onClose }: AppearanceProps) {
  const [currentColor, setCurrentColor] = useState("#7c4dff");
  const [background, setBackground] = useState("#0d1224");
  return (
    <div className="space-y-6 p-5 text-light-text-primary dark:text-dark-text-primary">
      {/* Accent Color */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold ">Accent Color</h3>

        <div className="flex flex-wrap gap-3">
          {[
            "#7c4dff",
            "#3b82f6",
            "#06b6d4",
            "#22c55e",
            "#f59e0b",
            "#ef4444",
            "#ec4899",
          ].map((color) => (
            <button
              onClick={() => setCurrentColor(color)}
              key={color}
              type="button"
              aria-label={`Select ${color} accent`}
              value={color}
              className={`${currentColor === color ? "" : ""} flex size-9 items-center justify-center rounded-full  "
                 
              }`}
              style={{ backgroundColor: color }}
            >
              {currentColor === color && (
                <FiCheck size={20} className="text-white" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Chat Background */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold">Chat Background</h3>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Default", value: "default", bg: "#0d1224" },
            { label: "Midnight", value: "midnight", bg: "#060816" },
            { label: "Purple", value: "purple", bg: "#24183f" },
          ].map((item) => (
            <button
              onClick={() => setBackground(item.bg)}
              key={item.value}
              type="button"
              className={` ${background === item.bg ? "border-light-primary-accent dark:border-dark-primary-accent" : ""} space-y-2 rounded-xl border p-2 transition-border duration-300 border-light-border-primary dark:border-dark-border-primary`}
            >
              <div
                className="h-16 rounded-lg"
                style={{ backgroundColor: item.bg }}
              />

              <span className="block text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Font Size */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">Message Text Size</h3>

          <span className="text-sm text-dark-text-secondary">10px</span>
        </div>

        <input
          type="range"
          min="10"
          max="30"
          step={1}
          className="w-full accent-light-primary-accent dark:accent-dark-primary-accent"
        />

        <div className="flex justify-between text-xs text-dark-text-mute">
          <span>Small</span>
          <span>Medium</span>
          <span>Large</span>
        </div>
      </section>

      {/* Actions */}
      <div className="flex justify-end gap-3 border-t dark:border-dark-border-primary border-light-border-primary pt-4">
        <button
          type="button"
          className="rounded-lg px-4 py-2 text-sm text-dark-text-secondary transition-colors duration-300 dark:hover:bg-red-600/10 hover:bg-red-600/30 hover:text-red-600 cursor-pointer"
        >
          Reset
        </button>

        <button
          type="button"
          className="rounded-lg bg-dark-primary-accent px-5 py-2 text-sm font-medium text-white transition hover:bg-dark-hover-accent cursor-pointer"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default Appearance;
