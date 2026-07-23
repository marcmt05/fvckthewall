import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SiteFooter, t as Nav } from "./SiteFooter-C_tmchtk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageShell-CMguC_IP.js
var import_jsx_runtime = require_jsx_runtime();
function PageShell({ eyebrow, title, intro, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-ink text-white pt-32 pb-16 md:pt-40 md:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [
						eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-mustard",
							children: eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-title mt-4 text-5xl md:text-7xl lg:text-8xl leading-[0.9]",
							children: title
						}),
						intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg text-white/70",
							children: intro
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x",
					children
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { PageShell as t };
