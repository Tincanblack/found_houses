import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";
// https://vitejs.dev/config/

function ignoreSpecBlock() {
	return {
		name: "ignore-spec-block",
		enforce: "pre",
		transform(code, id) {
			if (id.includes("?vue&type=spec")) {
				return { code: "export default {}", map: null };
			}
		},
	};
}

export default defineConfig({
	base: "/found_houses/",
	plugins: [vue(), ignoreSpecBlock()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
			"~sweetalert2": path.resolve(__dirname, "node_modules/sweetalert2"),
		},
	},
	optimizeDeps: {
		include: ["vue-google-maps-community-fork", "fast-deep-equal"],
	},
});
