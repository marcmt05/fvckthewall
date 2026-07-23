import { n as outdoor_default, t as gym_default } from "./outdoor-n_Op4Zh3.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-CqafuPjW.js
var shoes_default = "/assets/shoes-BrI8Rvjk.jpg";
var $$splitComponentImporter = () => import("./blog.index-84HnpE1t.mjs");
var POSTS = [
	{
		slug: "errores-primeros-meses",
		cat: "Técnica",
		title: "5 errores comunes en tus primeros meses",
		read: "6 min",
		img: gym_default,
		body: "En tus primeros meses en el rocódromo cometerás errores. Aquí los cinco más comunes y cómo evitarlos: tensión excesiva, mala colocación de pies, prisa por grados, ignorar el descanso y no observar antes de escalar."
	},
	{
		slug: "primeros-pies-de-gato",
		cat: "Material",
		title: "Cómo elegir tus primeros pies de gato",
		read: "8 min",
		img: shoes_default,
		body: "Los primeros pies de gato deben ser cómodos, no agresivos. Busca un ajuste firme sin dolor, suela versátil y precio contenido. Prioriza aprender técnica antes que rendir en régletas imposibles."
	},
	{
		slug: "guia-margalef",
		cat: "Roca",
		title: "Guía rápida de Margalef",
		read: "12 min",
		img: outdoor_default,
		body: "Margalef es paraíso de conglomerado y regletas. Mejor época: otoño y primavera. Sectores para empezar: Racó de la Finestra. No olvides magnesio, cepillo y paciencia con los agujeros."
	}
];
var Route = createFileRoute("/blog/")({
	head: () => ({ meta: [{ title: "Blog — FVCK THE WALL" }, {
		name: "description",
		content: "Blog: técnica, material y crónicas de escalada."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as n, POSTS as t };
