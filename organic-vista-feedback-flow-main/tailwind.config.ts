import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				serif: ["Playfair Display", "serif"],
				nature: ["Poppins", "sans-serif"],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
				glass: {
					bg: 'hsl(var(--glass-bg))',
					border: 'hsl(var(--glass-border))',
					shadow: 'hsl(var(--glass-shadow))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Nature-inspired 3D colors
				forest: {
					50: "hsl(var(--forest-50))",
					100: "hsl(var(--forest-100))",
					200: "hsl(var(--forest-200))",
					300: "hsl(var(--forest-300))",
					400: "hsl(var(--forest-400))",
					500: "hsl(var(--forest-500))",
					600: "hsl(var(--forest-600))",
					700: "hsl(var(--forest-700))",
					800: "hsl(var(--forest-800))",
					900: "hsl(var(--forest-900))",
				},
				earth: {
					50: "hsl(var(--earth-50))",
					100: "hsl(var(--earth-100))",
					200: "hsl(var(--earth-200))",
					300: "hsl(var(--earth-300))",
					400: "hsl(var(--earth-400))",
					500: "hsl(var(--earth-500))",
					600: "hsl(var(--earth-600))",
					700: "hsl(var(--earth-700))",
					800: "hsl(var(--earth-800))",
					900: "hsl(var(--earth-900))",
				},
				water: {
					50: "hsl(200, 80%, 96%)",
					100: "hsl(200, 75%, 88%)",
					200: "hsl(200, 70%, 78%)",
					300: "hsl(200, 65%, 65%)",
					400: "hsl(200, 60%, 52%)",
					500: "hsl(200, 55%, 40%)",
					600: "hsl(200, 60%, 32%)",
					700: "hsl(200, 65%, 25%)",
					800: "hsl(200, 70%, 18%)",
					900: "hsl(200, 75%, 12%)",
				},
				sky: {
					50: "hsl(210, 100%, 97%)",
					100: "hsl(210, 95%, 92%)",
					200: "hsl(210, 90%, 85%)",
					300: "hsl(210, 85%, 75%)",
					400: "hsl(210, 80%, 65%)",
					500: "hsl(210, 75%, 55%)",
					600: "hsl(210, 80%, 45%)",
					700: "hsl(210, 85%, 35%)",
					800: "hsl(210, 90%, 25%)",
					900: "hsl(210, 95%, 15%)",
				},
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-earth': 'var(--gradient-earth)',
				'gradient-forest': 'linear-gradient(135deg, hsl(120, 30%, 40%), hsl(120, 35%, 50%))',
				'gradient-water': 'linear-gradient(135deg, hsl(200, 60%, 50%), hsl(200, 70%, 60%))',
				'gradient-sky': 'linear-gradient(135deg, hsl(210, 80%, 60%), hsl(210, 90%, 70%))',
				'gradient-sunset': 'linear-gradient(135deg, hsl(20, 80%, 60%), hsl(40, 85%, 65%))',
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'glass': 'var(--shadow-glass)',
				'float': 'var(--shadow-float)',
				'product': 'var(--shadow-product)',
				nature: "0 10px 30px -5px rgba(34, 139, 34, 0.3), 0 4px 6px -2px rgba(34, 139, 34, 0.05)",
				floating: "0 20px 60px -10px rgba(0, 0, 0, 0.3), 0 10px 20px -5px rgba(0, 0, 0, 0.1)",
				glow: "0 0 20px rgba(34, 139, 34, 0.4), 0 0 40px rgba(34, 139, 34, 0.2)",
				depth: "inset 0 2px 4px 0 rgba(255, 255, 255, 0.1), 0 8px 32px -4px rgba(0, 0, 0, 0.2)",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				organic: "40% 60% 60% 40% / 40% 40% 60% 60%",
				leaf: "0% 100% 0% 100%",
				pebble: "50% 40% 60% 50%",
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			},
			backdropBlur: {
				nature: "12px",
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"fade-in-up": {
					"0%": { opacity: "0", transform: "translateY(30px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"leaf-sway": {
					"0%, 100%": { transform: "rotate(-2deg) scale(1)" },
					"50%": { transform: "rotate(2deg) scale(1.02)" }
				},
				"water-ripple": {
					"0%": { transform: "scale(1)", opacity: "1" },
					"100%": { transform: "scale(1.3)", opacity: "0" }
				},
				"float": {
					"0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
					"50%": { transform: "translateY(-10px) rotate(1deg)" }
				},
				"grow-vine": {
					"0%": { transform: "scaleX(0)", transformOrigin: "left" },
					"100%": { transform: "scaleX(1)", transformOrigin: "left" }
				},
				"particle-float": {
					"0%": { transform: "translateY(0px) translateX(0px) rotate(0deg)", opacity: "0.8" },
					"33%": { transform: "translateY(-20px) translateX(10px) rotate(120deg)", opacity: "1" },
					"66%": { transform: "translateY(-10px) translateX(-5px) rotate(240deg)", opacity: "0.9" },
					"100%": { transform: "translateY(0px) translateX(0px) rotate(360deg)", opacity: "0.8" }
				},
				"shimmer": {
					"0%": { backgroundPosition: "-200% 0" },
					"100%": { backgroundPosition: "200% 0" }
				},
				"glow-pulse": {
					"0%, 100%": { boxShadow: "0 0 5px rgba(34, 139, 34, 0.5)" },
					"50%": { boxShadow: "0 0 20px rgba(34, 139, 34, 0.8), 0 0 30px rgba(34, 139, 34, 0.4)" }
				},
				"organic-morph": {
					"0%": { borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%" },
					"25%": { borderRadius: "60% 40% 40% 60% / 60% 60% 40% 40%" },
					"50%": { borderRadius: "40% 60% 40% 60% / 60% 40% 60% 40%" },
					"75%": { borderRadius: "60% 40% 60% 40% / 40% 60% 40% 60%" },
					"100%": { borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%" }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				"fade-in": "fade-in 0.6s ease-out",
				"fade-in-up": "fade-in-up 0.8s ease-out",
				"leaf-sway": "leaf-sway 3s ease-in-out infinite",
				"water-ripple": "water-ripple 0.6s ease-out",
				"float": "float 4s ease-in-out infinite",
				"grow-vine": "grow-vine 2s ease-out",
				"particle-float": "particle-float 6s ease-in-out infinite",
				"shimmer": "shimmer 2s linear infinite",
				"glow-pulse": "glow-pulse 2s ease-in-out infinite",
				"organic-morph": "organic-morph 8s ease-in-out infinite",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
