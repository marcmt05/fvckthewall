import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route$6 } from "./blog.index-CqafuPjW.mjs";
import { t as Route$7 } from "./blog._slug-BdFFx_NL.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$8 } from "./legal._page-B-QXhimj.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B7YfDqU2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-UZrRTCSv.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Error 404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-title mt-4 text-7xl text-foreground",
					children: "Off route"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "Esta línea no existe. Vuelve al muro y elige otra vía."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-primary",
						children: "Volver al inicio"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Se ha soltado la presa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-title mt-4 text-5xl",
					children: "Algo falló"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Prueba de nuevo o vuelve al inicio."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-primary",
						children: "Reintentar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-ghost",
						children: "Inicio"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "FVCK THE WALL — Comunidad de escalada" },
			{
				name: "description",
				content: "Comunidad de escalada para los que no se bajan hasta encadenar. Comparte tu clip, descubre historias y lleva la actitud a la pared."
			},
			{
				name: "author",
				content: "FVCK THE WALL"
			},
			{
				name: "theme-color",
				content: "#111111"
			},
			{
				property: "og:title",
				content: "FVCK THE WALL — Comunidad de escalada"
			},
			{
				property: "og:description",
				content: "Comunidad de escalada para los que no se bajan hasta encadenar."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "FVCK THE WALL"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Permanent+Marker&family=Playfair+Display:wght@700;900&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			position: "bottom-right",
			theme: "dark"
		})]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-DU-8G1Ov.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "FVCK THE WALL — Comunidad de escalada" },
		{
			name: "description",
			content: "Comunidad de escalada para los que no se bajan hasta encadenar. Comparte tu clip, descubre historias y lleva la actitud a la pared."
		},
		{
			property: "og:title",
			content: "FVCK THE WALL — Comunidad de escalada"
		},
		{
			property: "og:description",
			content: "Comunidad de escalada para los que no se bajan hasta encadenar."
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./comunidad-D4n5daZN.mjs");
var Route$3 = createFileRoute("/comunidad")({
	head: () => ({ meta: [
		{ title: "Comunidad — FVCK THE WALL" },
		{
			name: "description",
			content: "Súbete al muro con nosotros. Mándanos tu vídeo escalando y entra en la comunidad #FVCKTHEWALL."
		},
		{
			property: "og:title",
			content: "Comunidad — FVCK THE WALL"
		},
		{
			property: "og:description",
			content: "Súbete al muro con nosotros. Mándanos tu vídeo escalando y entra en la comunidad #FVCKTHEWALL."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contacto-B5gFjWBt.mjs");
var Route$2 = createFileRoute("/contacto")({
	head: () => ({ meta: [{ title: "Contacto — FVCK THE WALL" }, {
		name: "description",
		content: "Escríbenos: colaboraciones, prensa o soporte."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./historia-DdMbToLl.mjs");
var Route$1 = createFileRoute("/historia")({
	head: () => ({ meta: [{ title: "Historia — FVCK THE WALL" }, {
		name: "description",
		content: "El manifiesto y la historia detrás de FVCK THE WALL."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./pedido-2kgZiO30.mjs");
var Route = createFileRoute("/pedido")({
	head: () => ({ meta: [
		{ title: "Hacer un pedido — FVCK THE WALL" },
		{
			name: "description",
			content: "Elige tu ropa y te contactamos por email para confirmar tallas, stock y pago."
		},
		{
			property: "og:title",
			content: "Hacer un pedido — FVCK THE WALL"
		},
		{
			property: "og:description",
			content: "Elige tu ropa y te contactamos por email para confirmar tallas, stock y pago."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var ComunidadRoute = Route$3.update({
	id: "/comunidad",
	path: "/comunidad",
	getParentRoute: () => Route$5
});
var ContactoRoute = Route$2.update({
	id: "/contacto",
	path: "/contacto",
	getParentRoute: () => Route$5
});
var HistoriaRoute = Route$1.update({
	id: "/historia",
	path: "/historia",
	getParentRoute: () => Route$5
});
var PedidoRoute = Route.update({
	id: "/pedido",
	path: "/pedido",
	getParentRoute: () => Route$5
});
var BlogIndexRoute = Route$6.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute,
	ComunidadRoute,
	ContactoRoute,
	HistoriaRoute,
	PedidoRoute,
	BlogSlugRoute: Route$7.update({
		id: "/blog/$slug",
		path: "/blog/$slug",
		getParentRoute: () => Route$5
	}),
	LegalPageRoute: Route$8.update({
		id: "/legal/$page",
		path: "/legal/$page",
		getParentRoute: () => Route$5
	}),
	BlogIndexRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
