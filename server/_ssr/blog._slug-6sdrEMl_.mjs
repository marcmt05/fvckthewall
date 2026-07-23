import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./blog._slug-BdFFx_NL.mjs";
import { _ as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./PageShell-CMguC_IP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-6sdrEMl_.js
var import_jsx_runtime = require_jsx_runtime();
function PostPage() {
	const p = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		eyebrow: p.cat,
		title: p.title,
		intro: `${p.read} de lectura`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/blog",
				className: "inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Todos los artículos"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[16/9] overflow-hidden rounded-2xl mb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.img,
					alt: p.title,
					className: "h-full w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "prose max-w-2xl text-lg leading-relaxed text-foreground/80",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p.body })
			})
		]
	});
}
//#endregion
export { PostPage as component };
