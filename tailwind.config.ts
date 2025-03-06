import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				darkColor: "#151515",
				lightColor: "#52525b",
				lightOrange: "#fca99b",
				lightBlue: "#7688DB",
				darkBlue: "#6c7fd8",
				darkText: "#686e7d",
				lightBg: "#F8F8FB",

				primary: "#1E40AF",
				secondary: "#9333EA",
				accent: "#FACC15",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};

export default config;
