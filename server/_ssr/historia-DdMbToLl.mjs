import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageShell } from "./PageShell-CMguC_IP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/historia-DdMbToLl.js
var import_jsx_runtime = require_jsx_runtime();
function HistoriaPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "Manifiesto",
		title: "Escala y punto. Fvck the wall.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "FVCK THE WALL no salió de un plan de negocio. Todo empezó por una chorrada entre dos hermanos, en el bloque, sin más." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Cada vez que uno se encallaba en un paso, el otro soltaba lo de siempre:",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: " «fvck the wall»"
						}),
						". No como insulto, como actitud. El muro te para, te frustra, te gana... hasta que no lo hace."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Y de ahí pasó a ser la regla: un bloque no contaba hasta que no lo habías ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic",
							children: "fvcked"
						}),
						". Hasta que no le habías ganado el pulso."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-foreground",
						children: "Así, con esa actitud en la cabeza, montamos esto en 2026. Para juntar a quienes pillan el chiste. Escaladores, curiosos, gente que se pasa el día en la pared. Una comunidad que trepa porque la pared no se va a escalar sola."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-5 space-y-4",
				children: [
					{
						y: "El consejo",
						t: "«Fvck the wall». Lo que uno de los hermanos le gritaba al otro en cada intento."
					},
					{
						y: "La actitud",
						t: "De consejo técnico a chiste privado. El muro era el enemigo y la frase, la forma de mandárselo."
					},
					{
						y: "2026",
						t: "La frase se convirtió en marca y en excusa para juntar a la comunidad."
					}
				].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-2xl text-mustard",
						children: m.y
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: m.t
					})]
				}, m.y))
			})]
		})
	});
}
//#endregion
export { HistoriaPage as component };
