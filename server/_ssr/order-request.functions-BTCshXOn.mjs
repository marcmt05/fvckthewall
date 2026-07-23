import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { a as recordType, i as objectType, n as literalType, o as stringType, r as numberType, t as arrayType } from "../_libs/zod.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/order-request.functions-BTCshXOn.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
function renderEmailHtml(data, orderNumber) {
	const total = data.items.reduce((s, i) => s + i.price * i.qty, 0);
	const rows = data.items.map((it) => {
		const variantLine = it.variants ? Object.entries(it.variants).map(([k, v]) => `<span style="color:#666">${k}:</span> ${v}`).join(" · ") : "";
		return `<tr>
        <td style="padding:8px;border-bottom:1px solid #eee">
          <strong>${it.name}</strong><br/>
          <small>${variantLine}</small>
          ${it.notes ? `<div style="color:#666;font-size:12px">Nota: ${it.notes}</div>` : ""}
        </td>
        <td style="padding:8px;text-align:center;border-bottom:1px solid #eee">${it.qty}</td>
        <td style="padding:8px;text-align:right;border-bottom:1px solid #eee">${(it.price * it.qty).toFixed(0)}€</td>
      </tr>`;
	}).join("");
	return `<!doctype html><html><body style="font-family:system-ui;max-width:600px;margin:auto">
    <h2>Nueva solicitud de pedido — ${orderNumber}</h2>
    <p><strong>${data.customer_name}</strong><br/>
    ${data.customer_email}${data.customer_phone ? ` · ${data.customer_phone}` : ""}</p>
    ${data.message ? `<p style="background:#f6f6f6;padding:12px;border-radius:6px">${data.message}</p>` : ""}
    <table style="width:100%;border-collapse:collapse;margin-top:16px">
      <thead><tr><th align="left">Producto</th><th>Uds</th><th align="right">Subtotal</th></tr></thead>
      <tbody>${rows}</tbody>
      <tfoot><tr><td colspan="2" style="padding:12px;text-align:right"><strong>Total estimado</strong></td>
        <td style="padding:12px;text-align:right"><strong>${total.toFixed(0)}€</strong></td></tr></tfoot>
    </table>
  </body></html>`;
}
var submitOrderRequest_createServerFn_handler = createServerRpc({
	id: "1869fb022109cc6adee944cc666e78fbbd4d963923a5780866b71452d4cca872",
	name: "submitOrderRequest",
	filename: "src/lib/order-request.functions.ts"
}, (opts) => submitOrderRequest.__executeServer(opts));
var submitOrderRequest = createServerFn({ method: "POST" }).inputValidator((input) => payloadSchema.parse(input)).handler(submitOrderRequest_createServerFn_handler, async ({ data }) => {
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const subtotal = data.items.reduce((s, i) => s + i.price * i.qty, 0);
	const { data: inserted, error } = await supabaseAdmin.from("orders").insert({
		customer_name: data.customer_name,
		customer_email: data.customer_email,
		customer_phone: data.customer_phone || null,
		shipping_address: "-",
		shipping_city: "-",
		shipping_postal_code: "-",
		shipping_country: "-",
		notes: data.message || null,
		subtotal,
		status: "pending",
		items: data.items.map((it) => ({
			id: it.id,
			name: it.name,
			price: it.price,
			qty: it.qty,
			line_total: it.price * it.qty,
			variants: it.variants ?? null,
			notes: it.notes ?? null
		}))
	}).select("order_number").single();
	if (error) {
		console.error("[order-request] db insert failed", error);
		throw new Error("No se pudo registrar la solicitud");
	}
	const orderNumber = inserted.order_number;
	const html = renderEmailHtml(data, orderNumber);
	const bridgeUrl = processModule.env.SMTP_BRIDGE_URL;
	const toEmail = processModule.env.ORDERS_TO_EMAIL;
	if (bridgeUrl && toEmail) try {
		await fetch(bridgeUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				...processModule.env.SMTP_BRIDGE_TOKEN ? { Authorization: `Bearer ${processModule.env.SMTP_BRIDGE_TOKEN}` } : {}
			},
			body: JSON.stringify({
				to: toEmail,
				replyTo: data.customer_email,
				subject: `Nuevo pedido ${orderNumber} — ${data.customer_name}`,
				html
			})
		});
	} catch (err) {
		console.error("[order-request] email bridge failed", err);
	}
	else console.info(`[order-request] ${orderNumber} guardado. Email no enviado (SMTP no configurado).`);
	return { orderNumber };
});
//#endregion
export { submitOrderRequest_createServerFn_handler };
