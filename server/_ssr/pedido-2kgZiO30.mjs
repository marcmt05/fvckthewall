import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { D as isRedirect, _ as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { f as LoaderCircle, i as Plus, m as Check, n as X, r as ShoppingBag, s as Minus } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./PageShell-CMguC_IP.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { a as recordType, i as objectType, n as literalType, o as stringType, r as numberType, t as arrayType } from "../_libs/zod.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-DEhKa1QG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pedido-2kgZiO30.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var shortBlackFront = "/assets/short_sleeve_black_front.png";
var shortBlackBack = "/assets/short_sleeve_black_back.png";
var shortWhiteFront = "/assets/short_sleeve_white_front.png";
var shortWhiteBack = "/assets/short_sleeve_white_back.png";
var tankBlackFront = "/assets/no_sleeve_black_front.png";
var tankBlackBack = "/assets/no_sleeve_black_back.png";
var tankWhiteFront = "/assets/no_sleeve_white_front.png";
var tankWhiteBack = "/assets/no_sleeve_white_back.png";
var hoodieBlackFront = "/assets/sudadera_capucha_negra_frontal.png";
var hoodieBlackBack = "/assets/sudadera_capucha_negra_trasera.png";
var hoodieWhiteFront = "/assets/sudadera_capucha_blanco_frontal.png";
var hoodieWhiteBack = "/assets/sudadera_capucha_blanco_trasera.png";
var crewBlackFront = "/assets/sudadera_sin_capucha_negra_frontal.png";
var crewBlackBack = "/assets/sudadera_sin_capucha_negra_trasera.png";
var crewWhiteFront = "/assets/sudadera_sin_capucha_blanca_frontal.png";
var crewWhiteBack = "/assets/sudadera_sin_capucha_blanca_trasera.png";
var shortsBlack = "/assets/shorts_black.png";
var shortsWhite = "/assets/shorts_white.png";
var TALLAS_ROPA = {
	key: "talla",
	label: "Talla",
	options: [
		"XS",
		"S",
		"M",
		"L",
		"XL",
		"XXL"
	]
};
var COLOR_BN = {
	key: "color",
	label: "Color",
	options: ["Negro", "Blanco"]
};
var GENERO = {
	key: "genero",
	label: "Género",
	options: [
		"Hombre",
		"Mujer",
		"Unisex"
	]
};
var CATALOG = [
	{
		id: "camiseta-ftw",
		name: "Camiseta FTW",
		price: 34,
		img: shortBlackFront,
		images: [
			shortBlackFront,
			shortBlackBack,
			shortWhiteFront,
			shortWhiteBack
		],
		description: "Camiseta manga corta de algodón pesado. Corte cómodo, ideal para escalada y entrenamiento.",
		category: "Manga corta",
		variants: [
			GENERO,
			TALLAS_ROPA,
			COLOR_BN
		]
	},
	{
		id: "tirantes-ftw",
		name: "Tirantes FTW",
		price: 28,
		img: tankBlackFront,
		images: [
			tankBlackFront,
			tankBlackBack,
			tankWhiteFront,
			tankWhiteBack
		],
		description: "Tirantes ligeros para escalar en verano. Sisas amplias y tejido transpirable.",
		category: "Tirantes",
		variants: [
			GENERO,
			TALLAS_ROPA,
			COLOR_BN
		]
	},
	{
		id: "sudadera-capucha-ftw",
		name: "Sudadera con capucha FTW",
		price: 69,
		img: hoodieBlackFront,
		images: [
			hoodieBlackFront,
			hoodieBlackBack,
			hoodieWhiteFront,
			hoodieWhiteBack
		],
		description: "Sudadera con capucha 400gsm, forro interior cepillado, bolsillo canguro reforzado.",
		category: "Sudaderas",
		variants: [
			GENERO,
			TALLAS_ROPA,
			COLOR_BN
		]
	},
	{
		id: "sudadera-ftw",
		name: "Sudadera FTW",
		price: 65,
		img: crewBlackFront,
		images: [
			crewBlackFront,
			crewBlackBack,
			crewWhiteFront,
			crewWhiteBack
		],
		description: "Sudadera sin capucha, corte clásico, ideal para sesiones frías de sector.",
		category: "Sudaderas",
		variants: [
			GENERO,
			TALLAS_ROPA,
			COLOR_BN
		]
	},
	{
		id: "short-ftw",
		name: "Short FTW",
		price: 42,
		img: shortsBlack,
		images: [shortsBlack, shortsWhite],
		description: "Pantalón corto para escalar: tejido stretch de 4 vías, cintura elástica y refuerzo en entrepierna.",
		category: "Pantalones cortos",
		variants: [
			GENERO,
			TALLAS_ROPA,
			COLOR_BN
		]
	}
];
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var itemSchema = objectType({
	id: stringType().min(1).max(80),
	name: stringType().min(1).max(160),
	price: numberType().nonnegative(),
	qty: numberType().int().min(1).max(50),
	variants: recordType(stringType().max(40), stringType().max(80)).optional(),
	notes: stringType().max(300).optional()
});
var payloadSchema = objectType({
	customer_name: stringType().trim().min(2).max(120),
	customer_email: stringType().trim().email().max(255),
	customer_phone: stringType().trim().max(40).optional().or(literalType("")),
	message: stringType().trim().max(1e3).optional().or(literalType("")),
	items: arrayType(itemSchema).min(1).max(30)
});
var submitOrderRequest = createServerFn({ method: "POST" }).inputValidator((input) => payloadSchema.parse(input)).handler(createSsrRpc("1869fb022109cc6adee944cc666e78fbbd4d963923a5780866b71452d4cca872"));
var CATEGORIES = [
	"Manga corta",
	"Tirantes",
	"Sudaderas",
	"Pantalones cortos"
];
function PedidoPage() {
	const [sel, setSel] = (0, import_react.useState)({});
	const [form, setForm] = (0, import_react.useState)({
		customer_name: "",
		customer_email: "",
		customer_phone: "",
		message: ""
	});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [orderNumber, setOrderNumber] = (0, import_react.useState)(null);
	const [preview, setPreview] = (0, import_react.useState)(null);
	const submit = useServerFn(submitOrderRequest);
	const items = (0, import_react.useMemo)(() => Object.values(sel), [sel]);
	const total = items.reduce((s, it) => s + it.product.price * it.qty, 0);
	const toggle = (p) => {
		setSel((prev) => {
			const next = { ...prev };
			if (next[p.id]) delete next[p.id];
			else next[p.id] = {
				product: p,
				qty: 1,
				variants: {},
				notes: ""
			};
			return next;
		});
	};
	const update = (id, patch) => {
		setSel((prev) => prev[id] ? {
			...prev,
			[id]: {
				...prev[id],
				...patch
			}
		} : prev);
	};
	const send = async () => {
		if (items.length === 0) {
			toast.error("Selecciona al menos un producto");
			return;
		}
		if (!form.customer_name.trim() || !form.customer_email.trim()) {
			toast.error("Nombre y email son obligatorios");
			return;
		}
		for (const it of items) for (const v of it.product.variants ?? []) if (!it.variants[v.key]) {
			toast.error(`Falta ${v.label.toLowerCase()} en ${it.product.name}`);
			return;
		}
		setSubmitting(true);
		try {
			const res = await submit({ data: {
				customer_name: form.customer_name.trim(),
				customer_email: form.customer_email.trim(),
				customer_phone: form.customer_phone.trim(),
				message: form.message.trim(),
				items: items.map((it) => ({
					id: it.product.id,
					name: it.product.name,
					price: it.product.price,
					qty: it.qty,
					variants: it.product.variants ? it.variants : void 0,
					notes: it.notes || void 0
				}))
			} });
			setOrderNumber(res.orderNumber);
			setSel({});
			setForm({
				customer_name: "",
				customer_email: "",
				customer_phone: "",
				message: ""
			});
		} catch (err) {
			console.error(err);
			toast.error("No se pudo enviar. Inténtalo de nuevo.");
		} finally {
			setSubmitting(false);
		}
	};
	if (orderNumber) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "Pedido enviado",
		title: "¡Recibido, escalador!",
		intro: "Tu solicitud ha volado a nuestra bandeja. En breve te escribiremos por email para confirmar la disponibilidad, coordinar el pago y poner tu pedido en marcha.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-mustard text-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-7 w-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-muted-foreground",
					children: "Referencia"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-3xl",
					children: orderNumber
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "Guarda este código por si necesitas mencionarlo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOrderNumber(null),
					className: "btn-primary mt-6",
					children: "Hacer otra solicitud"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		eyebrow: "Pedido",
		title: "Haz tu pedido",
		intro: "Hacemos los pedidos por email. Elige lo que te mola, déjanos tus datos y te escribimos para confirmar tallas, stock y pago.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1fr_380px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-12",
				children: CATEGORIES.map((cat) => {
					const products = CATALOG.filter((p) => p.category === cat);
					if (products.length === 0) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl uppercase tracking-wide mb-4",
						children: cat
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: products.map((p) => {
							const s = sel[p.id];
							const selected = Boolean(s);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `rounded-xl border p-4 transition-colors ${selected ? "border-mustard bg-mustard/5" : "border-border bg-card"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-start gap-4 cursor-pointer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: selected,
											onChange: () => toggle(p),
											className: "mt-1 h-5 w-5 accent-mustard"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: p.img,
											alt: p.name,
											className: "h-16 w-16 rounded-md object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start justify-between gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-display uppercase text-sm leading-tight",
														children: p.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-display text-lg",
														children: [p.price, "€"]
													})]
												}),
												p.variants && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs text-muted-foreground",
													children: p.variants.map((v) => v.label).join(" · ")
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: (e) => {
														e.preventDefault();
														setPreview(p);
													},
													className: "mt-2 inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-mustard hover:underline",
													children: "Ver producto →"
												})
											]
										})
									]
								}), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-3 border-t border-border pt-4",
									children: [
										p.variants?.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
											children: v.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 flex flex-wrap gap-1.5",
											children: v.options.map((opt) => {
												return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => update(p.id, { variants: {
														...s.variants,
														[v.key]: opt
													} }),
													className: `rounded-full border px-3 py-1 text-xs transition-colors ${s.variants[v.key] === opt ? "border-ink bg-ink text-white" : "border-border hover:border-ink"}`,
													children: opt
												}, opt);
											})
										})] }, v.key)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
												children: "Unidades"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "inline-flex items-center rounded-full border border-border",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => update(p.id, { qty: Math.max(1, s.qty - 1) }),
														className: "h-8 w-8 grid place-items-center hover:text-mustard",
														"aria-label": "Menos",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "w-8 text-center text-sm",
														children: s.qty
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => update(p.id, { qty: s.qty + 1 }),
														className: "h-8 w-8 grid place-items-center hover:text-mustard",
														"aria-label": "Más",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											rows: 2,
											placeholder: "Notas (opcional)",
											value: s.notes,
											onChange: (e) => update(p.id, { notes: e.target.value }),
											className: "w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-ink"
										})
									]
								})]
							}, p.id);
						})
					})] }, cat);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:sticky lg:top-24 h-fit rounded-2xl border border-border bg-card p-6 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 text-mustard" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg uppercase",
							children: "Tu selección"
						})]
					}),
					items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Marca los productos que te interesen."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 max-h-56 overflow-y-auto pr-1",
						children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "truncate pr-2",
								children: [
									it.qty,
									"× ",
									it.product.name
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono",
								children: [(it.qty * it.product.price).toFixed(0), "€"]
							})]
						}, it.product.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs uppercase tracking-widest text-muted-foreground",
							children: "Total estimado"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-2xl",
							children: [total.toFixed(0), "€"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Nombre",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.customer_name,
									onChange: (e) => setForm({
										...form,
										customer_name: e.target.value
									}),
									className: inputCls
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									value: form.customer_email,
									onChange: (e) => setForm({
										...form,
										customer_email: e.target.value
									}),
									className: inputCls
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Teléfono (opcional)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.customer_phone,
									onChange: (e) => setForm({
										...form,
										customer_phone: e.target.value
									}),
									className: inputCls
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Mensaje (opcional)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 3,
									value: form.message,
									onChange: (e) => setForm({
										...form,
										message: e.target.value
									}),
									className: `${inputCls} resize-none`
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: send,
						disabled: submitting,
						className: "btn-primary w-full justify-center disabled:opacity-60",
						children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), submitting ? "Enviando..." : "Enviar solicitud"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-muted-foreground text-center",
						children: "Te contactaremos por email para confirmar y coordinar el pago."
					})
				]
			})]
		}), preview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductModal, {
			product: preview,
			onClose: () => setPreview(null),
			onToggle: toggle,
			selected: Boolean(sel[preview.id])
		})]
	});
}
function ProductModal({ product, onClose, onToggle, selected }) {
	const images = product.images && product.images.length > 0 ? product.images : [product.img];
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => e.key === "Escape" && onClose();
		document.addEventListener("keydown", onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = prev;
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/70 backdrop-blur-sm p-4",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-4xl overflow-hidden rounded-2xl bg-background shadow-2xl max-h-[90vh] overflow-y-auto",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				"aria-label": "Cerrar",
				className: "absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/90 hover:bg-mustard hover:text-ink transition",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images[active],
						alt: product.name,
						className: "aspect-square w-full object-cover"
					}), images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 p-3",
						children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActive(i),
							className: `h-16 w-16 overflow-hidden rounded-md border-2 transition ${active === i ? "border-mustard" : "border-transparent opacity-70 hover:opacity-100"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: "",
								className: "h-full w-full object-cover"
							})
						}, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 md:p-8 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
							children: product.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl uppercase leading-tight",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-3xl",
							children: [product.price, "€"]
						}),
						product.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed",
							children: product.description
						}),
						product.variants && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: product.variants.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
								children: v.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: v.options.join(" · ")
							})] }, v.key))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								onToggle(product);
								onClose();
							},
							className: "btn-primary w-full justify-center",
							children: selected ? "Quitar de la selección" : "Añadir a la selección"
						})
					]
				})]
			})]
		})
	});
}
var inputCls = "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-ink";
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1",
			children
		})]
	});
}
//#endregion
export { PedidoPage as component };
