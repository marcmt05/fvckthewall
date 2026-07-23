globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-23T19:58:24.319Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/blog.index-Ia41TTYf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45e-jOC685WouXfntU0XlMEMLzBpNRE\"",
		"mtime": "2026-07-23T20:22:07.902Z",
		"size": 1118,
		"path": "../public/assets/blog.index-Ia41TTYf.js"
	},
	"/assets/blog._slug-CTodHU9O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"355-dvC04QIF+NTyP3Zjr2BxWYBclC8\"",
		"mtime": "2026-07-23T20:22:07.902Z",
		"size": 853,
		"path": "../public/assets/blog._slug-CTodHU9O.js"
	},
	"/assets/contacto-BOKSoGu1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a4-e7OsRMOC8bkWq4O/1aJu1Jc4z84\"",
		"mtime": "2026-07-23T20:22:07.903Z",
		"size": 2468,
		"path": "../public/assets/contacto-BOKSoGu1.js"
	},
	"/assets/gym-BPIenp-h.jpg": {
		"type": "image/jpeg",
		"etag": "\"8cad-+8CYB/3s1S7rGG0Np3tWs9iCCXc\"",
		"mtime": "2026-07-23T20:22:07.909Z",
		"size": 36013,
		"path": "../public/assets/gym-BPIenp-h.jpg"
	},
	"/assets/blog._slug-CMo6mDgO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"161-tvfBIZljfti/aXC4yeewJom5CTo\"",
		"mtime": "2026-07-23T20:22:07.901Z",
		"size": 353,
		"path": "../public/assets/blog._slug-CMo6mDgO.js"
	},
	"/assets/comunidad-CB7QsPTC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d85-63mEUDeLbCieRLhcAL3+xYZScT8\"",
		"mtime": "2026-07-23T20:22:07.903Z",
		"size": 3461,
		"path": "../public/assets/comunidad-CB7QsPTC.js"
	},
	"/assets/dist-wKgQWdyj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"109ac-LxuRWVJfl/g/c8As7St2uczVGLE\"",
		"mtime": "2026-07-23T20:22:07.903Z",
		"size": 68012,
		"path": "../public/assets/dist-wKgQWdyj.js"
	},
	"/assets/hero-climber-BPxTrB0D.jpg": {
		"type": "image/jpeg",
		"etag": "\"4078f-D883CpHniTYXZLK+o69zEzmONWs\"",
		"mtime": "2026-07-23T20:22:07.910Z",
		"size": 264079,
		"path": "../public/assets/hero-climber-BPxTrB0D.jpg"
	},
	"/assets/arrow-left-DH5zkVMH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-Ru8odFQ14NdDIqV6/fYaKomfj/Y\"",
		"mtime": "2026-07-23T20:22:07.901Z",
		"size": 158,
		"path": "../public/assets/arrow-left-DH5zkVMH.js"
	},
	"/assets/hero-climber.jpg": {
		"type": "image/jpeg",
		"etag": "\"4078f-D883CpHniTYXZLK+o69zEzmONWs\"",
		"mtime": "2026-07-15T19:57:32.728Z",
		"size": 264079,
		"path": "../public/assets/hero-climber.jpg"
	},
	"/assets/ftw-logo-rweV-VVG.png": {
		"type": "image/png",
		"etag": "\"72e9f-e45RQn3OGconSTkGwLJOShexujk\"",
		"mtime": "2026-07-23T20:22:07.908Z",
		"size": 470687,
		"path": "../public/assets/ftw-logo-rweV-VVG.png"
	},
	"/assets/ftw-logo.png": {
		"type": "image/png",
		"etag": "\"72e9f-e45RQn3OGconSTkGwLJOShexujk\"",
		"mtime": "2026-07-12T18:05:30.007Z",
		"size": 470687,
		"path": "../public/assets/ftw-logo.png"
	},
	"/assets/historia-Dx9PTjQW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"792-eKYm7To1fo7RLQjEjwl0ERdLZ08\"",
		"mtime": "2026-07-23T20:22:07.904Z",
		"size": 1938,
		"path": "../public/assets/historia-Dx9PTjQW.js"
	},
	"/assets/gym.jpg": {
		"type": "image/jpeg",
		"etag": "\"8cad-+8CYB/3s1S7rGG0Np3tWs9iCCXc\"",
		"mtime": "2026-07-15T19:57:32.704Z",
		"size": 36013,
		"path": "../public/assets/gym.jpg"
	},
	"/assets/legal._page-CZCM8U9y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"188-C+LShfHkyzJ8evla6itVKgkGTLQ\"",
		"mtime": "2026-07-23T20:22:07.904Z",
		"size": 392,
		"path": "../public/assets/legal._page-CZCM8U9y.js"
	},
	"/assets/legal._page-t-S0hoPn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15d-rckzYzKkJpjSEwEZcg/3+BK0kWk\"",
		"mtime": "2026-07-23T20:22:07.904Z",
		"size": 349,
		"path": "../public/assets/legal._page-t-S0hoPn.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-07-23T20:22:07.905Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/mail-OSQr50_r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1-jN4zLVmxA/ket7U6WGxS43Hp/6s\"",
		"mtime": "2026-07-23T20:22:07.905Z",
		"size": 209,
		"path": "../public/assets/mail-OSQr50_r.js"
	},
	"/assets/hand-chalk.jpg": {
		"type": "image/jpeg",
		"etag": "\"39c20-ETUVhLpQtKnNn/1BowCkkH0UTJw\"",
		"mtime": "2026-07-15T19:57:32.717Z",
		"size": 236576,
		"path": "../public/assets/hand-chalk.jpg"
	},
	"/assets/index-Ce6n4vhN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e19c-m6T4RoAwE9t8I/1QAdiHApD136w\"",
		"mtime": "2026-07-23T20:22:07.900Z",
		"size": 516508,
		"path": "../public/assets/index-Ce6n4vhN.js"
	},
	"/assets/no_sleeve_black_back.png": {
		"type": "image/png",
		"etag": "\"133bfc-dHFXm1h2+dqY4mWlgzmZ8o87n2g\"",
		"mtime": "2026-07-15T17:23:05.516Z",
		"size": 1260540,
		"path": "../public/assets/no_sleeve_black_back.png"
	},
	"/assets/no_sleeve_black_front.png": {
		"type": "image/png",
		"etag": "\"161d85-9iDxIBuRZs7DUiqkZciuTvijOGQ\"",
		"mtime": "2026-07-15T17:23:05.520Z",
		"size": 1449349,
		"path": "../public/assets/no_sleeve_black_front.png"
	},
	"/assets/no_sleeve_white_front.png": {
		"type": "image/png",
		"etag": "\"111f9a-cS4tCXkq0cloRLnndPhgYCbtg3Y\"",
		"mtime": "2026-07-15T17:23:05.527Z",
		"size": 1122202,
		"path": "../public/assets/no_sleeve_white_front.png"
	},
	"/assets/no_sleeve_white_back.png": {
		"type": "image/png",
		"etag": "\"1400e1-azS8VFv80wPmUIVipU/qyNvS8s8\"",
		"mtime": "2026-07-15T17:23:05.525Z",
		"size": 1310945,
		"path": "../public/assets/no_sleeve_white_back.png"
	},
	"/assets/outdoor-CSz69ZZR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"53-8qgcipybSzBPOn0ZsxqBscXMnSM\"",
		"mtime": "2026-07-23T20:22:07.906Z",
		"size": 83,
		"path": "../public/assets/outdoor-CSz69ZZR.js"
	},
	"/assets/outdoor.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ca84-8mRGBlDQ5dGw+KMp2PpEDLfa5oM\"",
		"mtime": "2026-07-15T19:57:32.738Z",
		"size": 117380,
		"path": "../public/assets/outdoor.jpg"
	},
	"/assets/preload-helper-ByzQUuJo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1663-MlxqbwWjyxX3vAeAWZ9gX5fikv0\"",
		"mtime": "2026-07-23T20:22:07.906Z",
		"size": 5731,
		"path": "../public/assets/preload-helper-ByzQUuJo.js"
	},
	"/assets/redirect-Dhm19zUi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f4-ePZWCXP5uehkmkGMkMl5xDch+/Y\"",
		"mtime": "2026-07-23T20:22:07.907Z",
		"size": 500,
		"path": "../public/assets/redirect-Dhm19zUi.js"
	},
	"/assets/PageShell-BdH2N7Bs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"31f-bISiK+is7DDyUWcuctVqKtfWLcw\"",
		"mtime": "2026-07-23T20:22:07.900Z",
		"size": 799,
		"path": "../public/assets/PageShell-BdH2N7Bs.js"
	},
	"/assets/pedido-CxN644tG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4731-4SrNnxC42c+TR5ZahcK3uuls7rw\"",
		"mtime": "2026-07-23T20:22:07.906Z",
		"size": 18225,
		"path": "../public/assets/pedido-CxN644tG.js"
	},
	"/assets/outdoor-C7JTLQJN.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ca84-8mRGBlDQ5dGw+KMp2PpEDLfa5oM\"",
		"mtime": "2026-07-23T20:22:07.910Z",
		"size": 117380,
		"path": "../public/assets/outdoor-C7JTLQJN.jpg"
	},
	"/assets/routes-PGw90GoV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bce-La9DyKOmwK5/lJH15FCblZBeAR0\"",
		"mtime": "2026-07-23T20:22:07.907Z",
		"size": 11214,
		"path": "../public/assets/routes-PGw90GoV.js"
	},
	"/assets/shoes-BrI8Rvjk.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c894-GsVpX/SiL3yDFP8p1QecB3Emg5k\"",
		"mtime": "2026-07-23T20:22:07.911Z",
		"size": 116884,
		"path": "../public/assets/shoes-BrI8Rvjk.jpg"
	},
	"/assets/shoes.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c894-GsVpX/SiL3yDFP8p1QecB3Emg5k\"",
		"mtime": "2026-07-23T20:06:25.585Z",
		"size": 116884,
		"path": "../public/assets/shoes.jpg"
	},
	"/assets/shorts.jpg": {
		"type": "image/jpeg",
		"etag": "\"719b-EYHKx20kL3hHY8qMoTMTK3jURNE\"",
		"mtime": "2026-07-15T19:57:32.758Z",
		"size": 29083,
		"path": "../public/assets/shorts.jpg"
	},
	"/assets/styles-UZrRTCSv.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"156d9-eLwG4YI+aCLjYjwNKo8ttv/zN0c\"",
		"mtime": "2026-07-23T20:22:07.911Z",
		"size": 87769,
		"path": "../public/assets/styles-UZrRTCSv.css"
	},
	"/assets/SiteFooter-ByAC32_1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f323-8ny29o0e0scG33yZkpl2v8vGqD8\"",
		"mtime": "2026-07-23T20:22:07.900Z",
		"size": 127779,
		"path": "../public/assets/SiteFooter-ByAC32_1.js"
	},
	"/assets/shorts_black.png": {
		"type": "image/png",
		"etag": "\"13f3dc-YLvuiveVFGjWIh19HEMA2kh7O58\"",
		"mtime": "2026-07-15T17:23:05.541Z",
		"size": 1307612,
		"path": "../public/assets/shorts_black.png"
	},
	"/assets/short_sleeve_black_front.png": {
		"type": "image/png",
		"etag": "\"172856-n/zBwfLy1l/1qPghcg9E0N2m2Gg\"",
		"mtime": "2026-07-15T17:23:05.535Z",
		"size": 1517654,
		"path": "../public/assets/short_sleeve_black_front.png"
	},
	"/assets/shorts_white.png": {
		"type": "image/png",
		"etag": "\"13b995-NjWhL98grxuflPGprTwd+3Deoj4\"",
		"mtime": "2026-07-15T17:23:05.541Z",
		"size": 1292693,
		"path": "../public/assets/shorts_white.png"
	},
	"/assets/short_sleeve_white_back.png": {
		"type": "image/png",
		"etag": "\"153992-ceTbcecTTDCvSvCzIGD7tIssgVA\"",
		"mtime": "2026-07-15T17:23:05.537Z",
		"size": 1390994,
		"path": "../public/assets/short_sleeve_white_back.png"
	},
	"/assets/short_sleeve_white_front.png": {
		"type": "image/png",
		"etag": "\"127326-bU7HpdKcLD66SVc6/+VOVMvj7Zk\"",
		"mtime": "2026-07-15T17:23:05.541Z",
		"size": 1209126,
		"path": "../public/assets/short_sleeve_white_front.png"
	},
	"/assets/sudadera_capucha_blanco_frontal.png": {
		"type": "image/png",
		"etag": "\"149a7c-rw6rf2uqUE18QzB9G4091LDSoK0\"",
		"mtime": "2026-07-15T17:23:05.541Z",
		"size": 1350268,
		"path": "../public/assets/sudadera_capucha_blanco_frontal.png"
	},
	"/assets/short_sleeve_black_back.png": {
		"type": "image/png",
		"etag": "\"1b579c-HMQ8F12pS/1bBN1aG3485nyCUa8\"",
		"mtime": "2026-07-15T17:22:58.087Z",
		"size": 1791900,
		"path": "../public/assets/short_sleeve_black_back.png"
	},
	"/assets/sudadera_capucha_blanco_trasera.png": {
		"type": "image/png",
		"etag": "\"163fa2-v9/yNbqTssu8DuVLQyXDRREcnNI\"",
		"mtime": "2026-07-15T17:23:05.551Z",
		"size": 1458082,
		"path": "../public/assets/sudadera_capucha_blanco_trasera.png"
	},
	"/assets/sudadera_capucha_negra_trasera.png": {
		"type": "image/png",
		"etag": "\"13a293-se/GO7g25gZETcZzNA8nuImuEH4\"",
		"mtime": "2026-07-15T17:23:05.555Z",
		"size": 1286803,
		"path": "../public/assets/sudadera_capucha_negra_trasera.png"
	},
	"/assets/sudadera_sin_capucha_blanca_frontal.png": {
		"type": "image/png",
		"etag": "\"141274-HLHzLr8FlnUeZZ3nyQViDatIxbI\"",
		"mtime": "2026-07-15T17:23:05.500Z",
		"size": 1315444,
		"path": "../public/assets/sudadera_sin_capucha_blanca_frontal.png"
	},
	"/assets/sudadera_capucha_negra_frontal.png": {
		"type": "image/png",
		"etag": "\"152780-gAovKQnL97e5NUwSZ3K2X7G5aCU\"",
		"mtime": "2026-07-15T17:23:05.553Z",
		"size": 1386368,
		"path": "../public/assets/sudadera_capucha_negra_frontal.png"
	},
	"/assets/sudadera_sin_capucha_blanca_trasera.png": {
		"type": "image/png",
		"etag": "\"15ea6d-251Kki+sQ5Yb8JBkFkmqmal8l3Y\"",
		"mtime": "2026-07-15T17:23:05.506Z",
		"size": 1436269,
		"path": "../public/assets/sudadera_sin_capucha_blanca_trasera.png"
	},
	"/assets/sudadera_sin_capucha_negra_trasera.png": {
		"type": "image/png",
		"etag": "\"138d4a-+0fcGeOKhn8to89biLIFtuNDvR0\"",
		"mtime": "2026-07-15T17:23:05.514Z",
		"size": 1281354,
		"path": "../public/assets/sudadera_sin_capucha_negra_trasera.png"
	},
	"/assets/sudadera_sin_capucha_negra_frontal.png": {
		"type": "image/png",
		"etag": "\"1813f6-cGqdnRfJTXKSJtL+03hettMxUZI\"",
		"mtime": "2026-07-15T17:23:05.510Z",
		"size": 1577974,
		"path": "../public/assets/sudadera_sin_capucha_negra_frontal.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_JjsDw9 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_JjsDw9
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
