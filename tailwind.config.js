/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				primary: {
					DEFAULT: 'var(--color-primary)',
					light: 'var(--color-primary-light)',
					dark: 'var(--color-primary-dark)',
				},
				secondary: {
					DEFAULT: 'var(--color-secondary)',
					light: 'var(--color-secondary-light)',
					dark: 'var(--color-secondary-dark)',
				},
				accent: {
					DEFAULT: 'var(--color-accent)',
					houver: 'var(--color-accent-hover)',
					light: 'var(--color-accent-light)',
					dark: 'var(--color-accent-dark)',
				},
				neutral: {
					DEFAULT: 'var(--color-neutral)',
					light: 'var(--color-neutral-light)',
					dark: 'var(--color-neutral-dark)',
				}
			}
		},
		container: {
			center: true,
			padding: "15px",
		},
		fontFamily:{
			primary: "var(--font-jetbrainsMono)",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
			"2xl": "1400px"
		}
	},
	plugins: [require("tailwindcss-animate")],
};
