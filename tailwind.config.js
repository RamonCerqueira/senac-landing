/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./pages/**/*.{ts,tsx}",
    ],
    // darkMode: "false", // ativar dark mode via classe 'dark'
    theme: {
      extend: {
        colors: {
          // primary: "#003366", // ex: cor do Senac RN para uso customizado
          // orange-700: '#FF6600', // pode mudar para o tom que quiser
          // blue-700: '#003366',   // também declare o blue-700, se usar
        },
      },
    },
    plugins: [],
  };