import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as MessagesSquare, d as Mail, u as MapPin } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./PageShell-CMguC_IP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contacto-B5gFjWBt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactoPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const submit = (e) => {
		e.preventDefault();
		setSent(true);
		toast.success("Mensaje enviado", { description: "Respondemos en menos de 48h." });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "Contacto",
		title: "Cuéntanos",
		intro: "Colaboraciones, prensa, soporte o simplemente decir hola.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-5 space-y-6",
				children: [
					{
						icon: Mail,
						t: "Email",
						v: "hola@fvckthewall.com"
					},
					{
						icon: MessagesSquare,
						t: "Soporte",
						v: "soporte@fvckthewall.com"
					},
					{
						icon: MapPin,
						t: "Base",
						v: "Barcelona, ES"
					}
				].map(({ icon: I, t, v }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4 rounded-xl border border-border p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-5 w-5 text-mustard mt-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-xs uppercase tracking-widest text-muted-foreground",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 font-display text-lg",
						children: v
					})] })]
				}, t))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "md:col-span-7 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							placeholder: "Nombre",
							className: "rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-ink"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							placeholder: "Email",
							className: "rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-ink"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						placeholder: "Asunto",
						className: "w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-ink"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						required: true,
						rows: 6,
						placeholder: "Tu mensaje",
						className: "w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-ink resize-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: sent,
						type: "submit",
						className: "btn-primary disabled:opacity-60",
						children: sent ? "Enviado" : "Enviar mensaje"
					})
				]
			})]
		})
	});
}
//#endregion
export { ContactoPage as component };
