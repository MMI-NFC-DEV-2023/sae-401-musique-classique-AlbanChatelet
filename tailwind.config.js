/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}", // Cibler les fichiers Astro et autres
  ],
  theme: {
    extend: {
      colors: {
        bouton_voir: "#ae3939",
        fond_noir: "#000000",
        jaune_petant: "#e7c920",
        couleur_or: "#be8711",
        fond_cards: "#303030",
        spotify: "#1ed760",
        deezer: "#a238ff",
        amazon: "#ff9a00",
      },
      fontSize: {
        base: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "1.75rem",
        "3xl": "3rem",
      },
      fontFamily: {
        mulish: "Mulish",
        papyrus: "Papyrus",
        orbitron: "Orbitron",
        "open-sans-hebrew-condensed": "Open Sans Hebrew Condensed",
        poppins: "Poppins",
      },
      borderRadius: {
        "rounded-0": "0rem",
        "rounded-1": "0.0625rem",
        "rounded-2": "0.125rem",
        "rounded-3": "0.25rem",
        "rounded-4": "0.4375rem",
        "rounded-5": "0.5rem",
        "rounded-6": "0.5625rem",
        "rounded-7": "0.625rem",
        "rounded-8": "0.75rem",
        "rounded-9": "0.8125rem",
        "rounded-10": "0.9375rem",
        "rounded-11": "1.25rem",
        "rounded-12": "1.875rem",
        "rounded-13": "62.4375rem",
      },
    },
  },
  plugins: [],
};
