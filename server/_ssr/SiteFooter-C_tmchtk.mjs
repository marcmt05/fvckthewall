import { a as __toESM } from "../_runtime.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { l as Menu, n as X, p as Instagram, t as Youtube } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFooter-C_tmchtk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ftw_logo_default = "/assets/ftw-logo-rweV-VVG.png";
function Logo({ className = "", showWordmark = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-2 leading-none ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: ftw_logo_default,
			alt: "FVCK THE WALL",
			className: "h-9 w-9 md:h-10 md:w-10 rounded-full object-contain",
			loading: "eager",
			decoding: "async"
		}), showWordmark && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-display text-xl md:text-2xl tracking-tight",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "F" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-mustard",
					children: "T"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "W" })
			]
		})]
	});
}
var LINKS = [
	{
		to: "/pedido",
		label: "Ropa"
	},
	{
		to: "/comunidad",
		label: "Comunidad"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/historia",
		label: "Historia"
	},
	{
		to: "/contacto",
		label: "Contacto"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 24);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			y: -30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		className: `fixed inset-x-0 top-0 z-50 bg-ink text-white transition-shadow duration-300 ${scrolled ? "border-b border-white/10 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.6)]" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex h-16 md:h-20 items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-8",
					children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: l.to,
						className: "text-[13px] font-medium tracking-wide uppercase text-white/80 hover:text-white transition-colors relative group",
						children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-0 h-[2px] w-0 bg-mustard transition-all group-hover:w-full" })]
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Menú",
						onClick: () => setOpen((o) => !o),
						className: "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 transition",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -8
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "lg:hidden border-t border-white/10 bg-ink text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "container-x flex flex-col py-4",
				children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "py-3 font-display text-xl uppercase tracking-wide",
					children: l.label
				}, l.to))
			})
		})]
	});
}
var COLS = [{
	t: "Marca",
	l: [
		{
			label: "Ropa",
			to: "/pedido"
		},
		{
			label: "Historia",
			to: "/historia"
		},
		{
			label: "Comunidad",
			to: "/comunidad"
		},
		{
			label: "Blog",
			to: "/blog"
		},
		{
			label: "Contacto",
			to: "/contacto"
		}
	]
}, {
	t: "Legal",
	l: [
		{
			label: "Aviso legal",
			to: "/legal/aviso-legal"
		},
		{
			label: "Privacidad",
			to: "/legal/privacidad"
		},
		{
			label: "Cookies",
			to: "/legal/cookies"
		},
		{
			label: "Devoluciones",
			to: "/legal/devoluciones"
		}
	]
}];
function SiteFooter() {
	const [email, setEmail] = (0, import_react.useState)("");
	const onSubscribe = (e) => {
		e.preventDefault();
		if (!/^\S+@\S+\.\S+$/.test(email)) {
			toast.error("Introduce un email válido");
			return;
		}
		toast.success("¡Estás dentro!", { description: "Te avisaremos del próximo drop." });
		setEmail("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		id: "contacto",
		className: "bg-ink text-white pt-20 pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "text-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-sm text-white/70",
							children: "Ropa de escalada con actitud. Una comunidad que no se baja hasta encadenar."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: onSubscribe,
							className: "mt-8 flex max-w-sm items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "tu@email.com",
								className: "flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 outline-none"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "rounded-full bg-mustard px-5 py-2 text-xs font-bold uppercase tracking-widest text-ink hover:scale-[1.03] transition",
								children: "Suscribir"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3",
					children: COLS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-xs uppercase tracking-widest text-mustard",
						children: col.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm text-white/70",
						children: col.l.map((li) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: li.to,
							className: "hover:text-mustard transition",
							children: li.label
						}) }, li.label))
					})] }, col.t))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-widest text-white/50 md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" FVCK THE WALL · Caderas a la pared."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://instagram.com",
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "Instagram",
						className: "hover:text-mustard",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://youtube.com",
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "YouTube",
						className: "hover:text-mustard",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-4 w-4" })
					})]
				})]
			})]
		})
	});
}
//#endregion
export { SiteFooter as n, Nav as t };
