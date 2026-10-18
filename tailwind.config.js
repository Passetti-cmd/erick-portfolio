/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        ink: token("ink"),
        ink2: token("ink-2"),
        ink3: token("ink-3"),
        rule: token("rule"),
        signal: token("signal"),
        ok: token("ok"),
        warn: token("warn"),
      },
      fontFamily: {
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "76rem",
      },
    },
  },
  plugins: [],
};
