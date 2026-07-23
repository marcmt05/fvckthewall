import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { p as Instagram } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./PageShell-CMguC_IP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/comunidad-D4n5daZN.js
var import_jsx_runtime = require_jsx_runtime();
var IG_HANDLE = "fvckthewall";
function ComunidadPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		eyebrow: "Comunidad",
		title: "#FVCKTHEWALL",
		intro: "No es una marca, es una tribu. La gente que tira de cabeza y luego ya verá.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden rounded-2xl border border-border bg-ink text-white p-8 md:p-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-mustard/20 blur-3xl"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid gap-10 md:grid-cols-12 md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-mustard",
							children: "Entra en la crew"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-title mt-4 text-4xl md:text-6xl leading-[0.95]",
							children: [
								"Mándanos un vídeo ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-mustard",
									children: "dándole duro al muro"
								}),
								" y te subimos a las redes."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-white/70 text-lg",
							children: "Da igual el grado, la pared o cómo salga. Si hay escalada de por medio, queremos verlo. Mándanos tu clip por DM y, si nos mola, lo compartimos en el feed."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://instagram.com/${IG_HANDLE}`,
								target: "_blank",
								rel: "noreferrer",
								className: "btn-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }),
									" @",
									IG_HANDLE
								]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-white/10 bg-white/5 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-mustard",
							children: "Cómo participar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "mt-4 space-y-3 text-white/80 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-mustard font-bold mr-2",
									children: "01"
								}), "Graba tu escalada (vertical, horizontal, la que sea)."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-mustard font-bold mr-2",
										children: "02"
									}),
									"Mándanos el vídeo por DM a ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-white",
										children: ["@", IG_HANDLE]
									}),
									"."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-mustard font-bold mr-2",
									children: "03"
								}), "Si nos lo mandáis y nos mola, lo subimos a la cuenta."] })
							]
						})]
					})
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "En directo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-title mt-3 text-4xl md:text-5xl",
						children: ["Feed @", IG_HANDLE]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://instagram.com/${IG_HANDLE}`,
						target: "_blank",
						rel: "noreferrer",
						className: "hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition",
						children: ["Ver perfil ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 overflow-hidden rounded-2xl border border-border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: `Instagram @${IG_HANDLE}`,
						src: `https://www.instagram.com/${IG_HANDLE}/embed`,
						className: "w-full h-[720px] bg-white",
						loading: "lazy",
						frameBorder: 0,
						scrolling: "no",
						allowTransparency: true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-center text-xs text-muted-foreground",
					children: "Si no ves el feed, inicia sesión en Instagram o abre el perfil directamente."
				})
			]
		})]
	});
}
//#endregion
export { ComunidadPage as component };
