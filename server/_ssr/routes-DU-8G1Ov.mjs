import { t as motion } from "../_libs/framer-motion.mjs";
import { n as outdoor_default, t as gym_default } from "./outdoor-n_Op4Zh3.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PackageCheck, d as Mail, g as ArrowRight, h as ArrowUpRight, o as MousePointerClick, p as Instagram } from "../_libs/lucide-react.mjs";
import { n as SiteFooter, t as Nav } from "./SiteFooter-C_tmchtk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DU-8G1Ov.js
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, y = 24, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
var hero_climber_default = "/assets/hero-climber-BPxTrB0D.jpg";
var POSTS = [
	{
		slug: "errores-primeros-meses",
		cat: "Técnica",
		title: "5 errores comunes en tus primeros meses",
		read: "6 min",
		img: gym_default
	},
	{
		slug: "primeros-pies-de-gato",
		cat: "Material",
		title: "Cómo elegir tus primeros pies de gato",
		read: "8 min",
		img: outdoor_default
	},
	{
		slug: "guia-margalef",
		cat: "Roca",
		title: "Guía rápida de Margalef",
		read: "12 min",
		img: outdoor_default
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-screen w-full overflow-hidden bg-ink text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_climber_default,
						alt: "Escalador enfrentando un muro",
						width: 1600,
						height: 1808,
						className: "absolute inset-0 h-full w-full object-cover object-center opacity-70"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-x relative z-10 flex min-h-screen flex-col justify-end pb-16 pt-32 md:pb-24 md:pt-40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
								initial: {
									opacity: 0,
									y: 12
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { duration: .6 },
								className: "eyebrow text-mustard",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-mustard mr-2 align-middle" }), "Comunidad de escalada · Clips · Actitud"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								initial: {
									opacity: 0,
									y: 24
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .9,
									delay: .1,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "display-title mt-6 text-[18vw] leading-[0.85] md:text-[13rem] lg:text-[16rem]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block",
									children: [
										"FVCK",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "relative inline-block",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "brush-underline",
												children: "THE"
											})
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block mt-4 md:mt-8",
									children: "WALL"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 16
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .4
								},
								className: "mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-md text-lg text-white/80",
									children: "Un espacio para los que viven la escalada dentro y fuera del muro. Comparte tu clip, descubre historias y conecta con quienes entienden la obsesión."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/comunidad",
										className: "btn-primary",
										children: ["Entrar en la comunidad ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/pedido",
										className: "btn-ghost text-white",
										children: "Hacer un pedido"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-16 overflow-hidden border-y border-white/10 py-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									animate: { x: ["0%", "-50%"] },
									transition: {
										duration: 30,
										repeat: Infinity,
										ease: "linear"
									},
									className: "flex gap-12 whitespace-nowrap font-display text-2xl uppercase tracking-widest",
									children: Array.from({ length: 2 }).flatMap((_, i) => [
										"SEND IT",
										"★",
										"ESCALA Y PUNTO",
										"★",
										"FVCK THE WALL",
										"★",
										"HASTA ENCADENAR",
										"★",
										"PIEDRA Y ACTITUD",
										"★"
									].map((t, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: t === "★" ? "text-mustard" : "text-white/90",
										children: t
									}, `${i}-${j}`)))
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "filosofia",
				className: "relative overflow-hidden bg-ink text-white py-28 md:py-40 noise",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute -top-24 -left-24 text-mustard/10 font-display leading-none select-none",
					style: { fontSize: "28rem" },
					children: "\""
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-mustard" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-[0.32em] text-mustard",
							children: "Manifiesto"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-12 md:grid-cols-12 md:items-center md:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "display-title text-6xl md:text-8xl lg:text-9xl",
								children: [
									"No peleamos ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"con la pared. ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-mustard",
										children: "La subimos"
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"y punto."
								]
							}) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-5 space-y-6 text-lg leading-relaxed text-white/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .05,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "El muro es la excusa. La comunidad, la razón. FTW es donde la gente que escala se junta para compartir lo que pasa en la pared: el send, la caída, el proyecto que se resiste." })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .1,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white",
										children: "Lo que nos mueve es la gente que escala y no se baja hasta encadenar."
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .15,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-4 flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-8 w-8 rounded-full bg-mustard" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-xs uppercase tracking-widest text-white/60",
											children: "FVCK THE WALL · Escala y punto"
										})]
									})
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "ropa",
				className: "bg-ink text-white py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-mustard",
							children: "Ropa FTW"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-title mt-4 text-5xl md:text-7xl",
							children: [
								"Para quien pasa ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" más horas en la pared."
							]
						})] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/pedido",
								className: "hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/80 hover:text-mustard transition",
								children: ["Ver todo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 flex justify-center md:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/pedido",
							className: "btn-primary",
							children: ["Ver todo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 md:py-32 border-y border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center max-w-2xl mx-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "¿Cómo funciona?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "display-title mt-4 text-5xl md:text-6xl",
									children: "Pedir es fácil"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-muted-foreground",
									children: "No hay tienda online con pasarela. Hacemos los pedidos por email, así que puedes preguntar lo que necesites antes de pagar."
								})
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid gap-8 md:grid-cols-3",
							children: [
								{
									icon: MousePointerClick,
									step: "01",
									title: "Elige lo que te mola",
									text: "Navega por la ropa, abre los productos y selecciona talla, color y género."
								},
								{
									icon: Mail,
									step: "02",
									title: "Rellena el formulario",
									text: "Déjanos tu nombre y email. Si quieres, añade un mensaje o dudas sobre tallaje."
								},
								{
									icon: PackageCheck,
									step: "03",
									title: "Te escribimos",
									text: "Te contactamos por email para confirmar disponibilidad y coordinar el pago y el envío."
								}
							].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .08,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative rounded-2xl border border-border bg-card p-8 h-full",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute right-6 top-6 font-display text-4xl text-mustard/20",
											children: s.step
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-8 w-8 text-mustard" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-6 font-display text-2xl uppercase leading-tight",
											children: s.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm text-muted-foreground leading-relaxed",
											children: s.text
										})
									]
								})
							}, s.step))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/pedido",
								className: "btn-primary",
								children: ["Hacer un pedido ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "blog",
				className: "py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-end justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Blog"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-title mt-4 text-5xl md:text-6xl",
							children: "Historias, técnica y material"
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-8 md:grid-cols-3",
						children: POSTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
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
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [p.read, " de lectura"] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-2xl leading-tight uppercase transition group-hover:text-mustard",
										children: p.title
									})
								]
							})
						}, p.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x flex flex-col items-center gap-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Comunidad"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-title mt-4 text-5xl md:text-7xl",
							children: ["Mándanos tu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-mustard",
								children: "clip"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-muted-foreground mx-auto",
							children: "Da igual el grado, la pared o cómo salga. Si hay escalada de por medio, queremos verlo. Mándanos tu vídeo por DM y, si nos mola, lo compartimos en el feed."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://instagram.com/fvckthewall",
							target: "_blank",
							rel: "noreferrer",
							className: "btn-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), " Seguir en Instagram"]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
