import { M as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as POSTS } from "./blog.index-CqafuPjW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-BdFFx_NL.js
var $$splitComponentImporter = () => import("./blog._slug-6sdrEMl_.mjs");
var $$splitNotFoundComponentImporter = () => import("./blog._slug-CQ15_7hP.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = POSTS.find((p) => p.slug === params.slug);
		if (!post) throw notFound();
		return post;
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.title ?? "Artículo"} — FVCK THE WALL` }, {
		name: "description",
		content: loaderData?.body.slice(0, 155) ?? ""
	}] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
