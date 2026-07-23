import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as POSTS } from "./blog.index-CqafuPjW.mjs";
import { t as PageShell } from "./PageShell-CMguC_IP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-84HnpE1t.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "Blog",
		title: "Historias, técnica y material",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-8 md:grid-cols-3",
			children: POSTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/blog/$slug",
				params: { slug: p.slug },
				className: "group block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] overflow-hidden rounded-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.img,
							alt: p.title,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-mustard font-bold",
								children: p.cat
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [p.read, " lectura"] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-2xl leading-tight uppercase transition group-hover:text-mustard",
						children: p.title
					})
				]
			}, p.slug))
		})
	});
}
//#endregion
export { BlogPage as component };
