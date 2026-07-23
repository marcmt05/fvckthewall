import { M as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal._page-B-QXhimj.js
var $$splitComponentImporter = () => import("./legal._page-rwd6J6du.mjs");
var $$splitNotFoundComponentImporter = () => import("./legal._page-CADIUtG9.mjs");
var PAGES = {
	"aviso-legal": {
		title: "Aviso legal",
		body: [
			"Titular: FVCK THE WALL S.L. — Barcelona, España.",
			"El acceso y uso de este sitio implica la aceptación de las condiciones aquí publicadas.",
			"Todos los contenidos, marcas y logotipos son propiedad de FVCK THE WALL o de sus respectivos titulares."
		]
	},
	privacidad: {
		title: "Política de privacidad",
		body: [
			"Tratamos tus datos con la única finalidad de gestionar pedidos, atender consultas y enviarte comunicaciones si has dado consentimiento.",
			"Puedes ejercer tus derechos de acceso, rectificación, supresión y oposición escribiendo a hola@fvckthewall.com.",
			"No cedemos datos a terceros salvo obligación legal o proveedores necesarios para el servicio (envíos y pagos)."
		]
	},
	cookies: {
		title: "Política de cookies",
		body: ["Usamos cookies técnicas imprescindibles para el funcionamiento del sitio y cookies analíticas anónimas para mejorar la experiencia.", "Puedes desactivarlas en la configuración de tu navegador. Algunas funciones podrían no operar correctamente."]
	},
	devoluciones: {
		title: "Envíos y devoluciones",
		body: [
			"Envíos en 24–72h a península. Envío gratuito a partir de 60€.",
			"Dispones de 30 días para devolver cualquier prenda sin usar y con etiqueta.",
			"Las piezas personalizadas no admiten devolución salvo defecto de fabricación."
		]
	}
};
var Route = createFileRoute("/legal/$page")({
	loader: ({ params }) => {
		const data = PAGES[params.page];
		if (!data) throw notFound();
		return data;
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.title ?? "Legal"} — FVCK THE WALL` }] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
