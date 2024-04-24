import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					["@react-three/fiber"]: ["@react-three/fiber"],
					["@react-three/drei"]: ["@react-three/drei"],
					three: ["three"],
					["lucide-react"]: ["lucide-react"],
					react: ["react"],
					["react-dom"]: ["react-dom"],
				},
			},
		},
		chunkSizeWarningLimit: 700,
	},
	server: {
		warmup: {
			clientFiles: [
				"/src/components/header/index.tsx",
				"/src/components/header/styles.css",
				"/node_modules/.vite/deps/@react-three_drei.js",
				"/src/components/header/banner.tsx",
				"/src/components/header/logo.tsx",
				"/src/components/cookie-consent.tsx",
				"/src/components/section-title.tsx",
				"/src/config/socials.tsx",
				"/src/components/divider.tsx",
				"/src/config/nav-links.tsx",
				"/src/components/carousel.tsx",
				"/src/App.tsx",
				"/src/utils/context.ts",
			],
		},
	},
});
