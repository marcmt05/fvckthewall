import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageShell } from "./PageShell-CMguC_IP.mjs";
import { t as Route } from "./legal._page-B-QXhimj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal._page-rwd6J6du.js
var import_jsx_runtime = require_jsx_runtime();
function LegalPage() {
	const d = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "Legal",
		title: d.title,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-2xl space-y-5 text-foreground/80 leading-relaxed",
			children: d.body.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, i))
		})
	});
}
//#endregion
export { LegalPage as component };
