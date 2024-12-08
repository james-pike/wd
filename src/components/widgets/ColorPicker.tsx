import { $, component$, useStore, useVisibleTask$ } from '@builder.io/qwik';

export const ColorPickerComponent = component$(() => {
  // Store for managing the current color state
  const state = useStore({ color: '#00bcd4' });

  useVisibleTask$(async () => {
    // Get the current CSS primary color and convert it to HEX
    const computedStyle = getComputedStyle(document.documentElement);
    const primaryColorHsl = computedStyle.getPropertyValue('--primary').trim();

    if (primaryColorHsl) {
      try {
        state.color = await hslToHex(primaryColorHsl); // Update the state color to match the CSS variable
      } catch (error) {
        console.error('Failed to parse primary color from CSS:', error);
      }
    }

    // Access the color picker DOM element
    const colorPicker = document.getElementById('colorPicker') as HTMLInputElement | null;

    if (!colorPicker) {
      console.error('Color picker element not found.');
      return;
    }

    // Set initial value of the color picker
    colorPicker.value = state.color;

    // Add event listener for color picker changes
    const handleColorChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target) {
        state.color = target.value || '#00bcd4'; // Update state and fallback to default color
        updatePrimaryColor(state.color);
      }
    };

    colorPicker.addEventListener('input', handleColorChange);

    // Cleanup listener on unmount
    return () => {
      colorPicker.removeEventListener('input', handleColorChange);
    };
  });

  /**
   * Update the `--primary` CSS variable with the chosen color.
   * @param {string} color - HEX color value.
   */
  const updatePrimaryColor = $((color: string) => {
    const hslColor = hexToHsl(color);
    document.documentElement.style.setProperty('--primary', hslColor);
  });

  /**
   * Convert HEX to HSL
   * @param {string} hex - HEX color value
   * @returns {string} - HSL string (e.g., "191.6 91.4% 36.5%")
   */
  const hexToHsl = $((hex: string): string => {
    if (!/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
      throw new Error(`Invalid HEX color format: ${hex}`);
    }
    hex = hex.replace(/^#/, '');
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s;
    const l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // Achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: throw new Error('Unexpected max value during HSL conversion.');
      }
      h /= 6;
    }

    return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
  });

  /**
   * Convert HSL to HEX
   * @param {string} hsl - HSL string (e.g., "191.6 91.4% 36.5%")
   * @returns {string} - HEX color value (e.g., "#00bcd4")
   */
  const hslToHex = $((hsl: string): string => {
    const hslParts = hsl.match(/([\d.]+)/g);
    if (!hslParts || hslParts.length < 3) {
      throw new Error(`Invalid HSL color format: ${hsl}`);
    }

    let [h, s, l] = hslParts.map(parseFloat);
    h /= 360;
    s /= 100;
    l /= 100;

    const hueToRgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    const r = hueToRgb(p, q, h + 1 / 3);
    const g = hueToRgb(p, q, h);
    const b = hueToRgb(p, q, h - 1 / 3);

    const toHex = (x: number) => Math.round(x * 255).toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  });

  return (
    <div>
      <label for="colorPicker">Choose a color:</label>
      <input id="colorPicker" type="color" />
    </div>
  );
});
