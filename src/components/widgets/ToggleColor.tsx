import { $, component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore({
    primaryColor: "#f8f8f8", // Default color
  });

  // Sync with localStorage on load
  useVisibleTask$(() => {
    const savedPrimaryColor = localStorage.getItem('primaryColor');
    if (savedPrimaryColor) {
      store.primaryColor = savedPrimaryColor;
      document.documentElement.style.setProperty('--color-primary', savedPrimaryColor);
    }
  });

  // Update the primary color dynamically and store it in localStorage
  const updatePrimaryColor = $(
    // Update the primary color dynamically and store it in localStorage
    function updatePrimaryColor(color: string) {
      document.documentElement.style.setProperty('--color-primary', color);
      store.primaryColor = color;
      localStorage.setItem('primaryColor', color); // Save to localStorage
      console.log(color)
    }
  );

  return (
    <div>
      <input
        type="color"
        value={store.primaryColor}
        onInput$={(e) => {
          const color = (e.target as HTMLInputElement).value;
          updatePrimaryColor(color);
        }}
        aria-label="Pick a primary color"
      />
    </div>
  );
});
