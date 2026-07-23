import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./PageShell-CMguC_IP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-CQ15_7hP.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
	title: "Artículo no encontrado",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/blog",
		className: "btn-primary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Volver al blog"]
	})
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
