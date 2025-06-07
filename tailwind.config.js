/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< Updated upstream
    content: [
      "./app/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./pages/**/*.{ts,tsx}",
    ],
    darkMode: "false", // ativar dark mode via classe 'dark'
    theme: {
      extend: {
        colors: {
          primary: "#003366", // ex: cor do Senac RN para uso customizado
          senacOrange: '#FF6600', // pode mudar para o tom que quiser
          senacBlue: '#003366',   // também declare o senacBlue, se usar
        },
      },
    },
    plugins: [],
  };
  
=======
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  darkMode: false, // CORRETO: Desativa completamente o dark mode automático
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'], // Fonte base com fallback
      },
      colors: {
        primary: "#003366",       // Azul institucional
        senacOrange: "#FF6600",   // Laranja Senac
        senacBlue: "#003366",     // Azul Senac (igual ao primary, mas útil como alias)
      },
    },
  },
  
  plugins: [],
};
>>>>>>> Stashed changes
