"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/cliente/[cpf]/carteirinha/route";
exports.ids = ["app/api/cliente/[cpf]/carteirinha/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcliente%2F%5Bcpf%5D%2Fcarteirinha%2Froute&page=%2Fapi%2Fcliente%2F%5Bcpf%5D%2Fcarteirinha%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcliente%2F%5Bcpf%5D%2Fcarteirinha%2Froute.ts&appDir=C%3A%5C3nauts%5Crepos%5Cuen-site%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C3nauts%5Crepos%5Cuen-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcliente%2F%5Bcpf%5D%2Fcarteirinha%2Froute&page=%2Fapi%2Fcliente%2F%5Bcpf%5D%2Fcarteirinha%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcliente%2F%5Bcpf%5D%2Fcarteirinha%2Froute.ts&appDir=C%3A%5C3nauts%5Crepos%5Cuen-site%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C3nauts%5Crepos%5Cuen-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_3nauts_repos_uen_site_app_api_cliente_cpf_carteirinha_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/cliente/[cpf]/carteirinha/route.ts */ \"(rsc)/./app/api/cliente/[cpf]/carteirinha/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/cliente/[cpf]/carteirinha/route\",\n        pathname: \"/api/cliente/[cpf]/carteirinha\",\n        filename: \"route\",\n        bundlePath: \"app/api/cliente/[cpf]/carteirinha/route\"\n    },\n    resolvedPagePath: \"C:\\\\3nauts\\\\repos\\\\uen-site\\\\app\\\\api\\\\cliente\\\\[cpf]\\\\carteirinha\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_3nauts_repos_uen_site_app_api_cliente_cpf_carteirinha_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/cliente/[cpf]/carteirinha/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjbGllbnRlJTJGJTVCY3BmJTVEJTJGY2FydGVpcmluaGElMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNsaWVudGUlMkYlNUJjcGYlNUQlMkZjYXJ0ZWlyaW5oYSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNsaWVudGUlMkYlNUJjcGYlNUQlMkZjYXJ0ZWlyaW5oYSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDM25hdXRzJTVDcmVwb3MlNUN1ZW4tc2l0ZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1QzNuYXV0cyU1Q3JlcG9zJTVDdWVuLXNpdGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzRCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWVuLW5leHQvPzljMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcM25hdXRzXFxcXHJlcG9zXFxcXHVlbi1zaXRlXFxcXGFwcFxcXFxhcGlcXFxcY2xpZW50ZVxcXFxbY3BmXVxcXFxjYXJ0ZWlyaW5oYVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2xpZW50ZS9bY3BmXS9jYXJ0ZWlyaW5oYS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NsaWVudGUvW2NwZl0vY2FydGVpcmluaGFcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NsaWVudGUvW2NwZl0vY2FydGVpcmluaGEvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFwzbmF1dHNcXFxccmVwb3NcXFxcdWVuLXNpdGVcXFxcYXBwXFxcXGFwaVxcXFxjbGllbnRlXFxcXFtjcGZdXFxcXGNhcnRlaXJpbmhhXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jbGllbnRlL1tjcGZdL2NhcnRlaXJpbmhhL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcliente%2F%5Bcpf%5D%2Fcarteirinha%2Froute&page=%2Fapi%2Fcliente%2F%5Bcpf%5D%2Fcarteirinha%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcliente%2F%5Bcpf%5D%2Fcarteirinha%2Froute.ts&appDir=C%3A%5C3nauts%5Crepos%5Cuen-site%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C3nauts%5Crepos%5Cuen-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/cliente/[cpf]/carteirinha/route.ts":
/*!****************************************************!*\
  !*** ./app/api/cliente/[cpf]/carteirinha/route.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode */ \"(rsc)/./node_modules/qrcode/lib/index.js\");\n\n\nasync function GET(_, { params }) {\n    try {\n        const cpf = params.cpf.replace(/\\D/g, \"\");\n        if (cpf.length !== 11) return Response.json({\n            ok: false,\n            error: \"CPF_INVALIDO\"\n        }, {\n            status: 400\n        });\n        const c = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.cliente.findUnique({\n            where: {\n                cpf\n            }\n        });\n        if (!c) return Response.json({\n            ok: false,\n            error: \"CLIENTE_NAO_ENCONTRADO\"\n        }, {\n            status: 404\n        });\n        const ano = c.anoVigente ?? new Date().getFullYear();\n        const iso = c.dataNascimento.toISOString();\n        const dataUrl = await qrcode__WEBPACK_IMPORTED_MODULE_1__.toDataURL(`${cpf}|${iso.substring(0, 10)}|${ano}`, {\n            margin: 1,\n            scale: 6\n        });\n        const base = \"http://localhost:3000\" || 0;\n        return Response.json({\n            ok: true,\n            carteirinha: {\n                nome: c.nome,\n                cpf: c.cpf,\n                dataNascimento: iso.substring(0, 10),\n                instituicao: c.instituicao,\n                curso: c.curso,\n                ano,\n                validade: c.dataExpiracao?.toISOString().substring(0, 10) ?? null,\n                fotoUrl: c.fotoUrl,\n                qrcodeDataUrl: dataUrl,\n                qrcodeDownload: `${base}/api/cliente/${cpf}/carteirinha/qrcode.png`\n            }\n        });\n    } catch (e) {\n        console.error(e);\n        return Response.json({\n            ok: false,\n            error: \"SERVER_ERROR\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NsaWVudGUvW2NwZl0vY2FydGVpcmluaGEvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBQTZCO0FBQzVELGVBQWVFLElBQUlDLENBQVMsRUFBQyxFQUFDQyxNQUFNLEVBQXVCO0lBQ2hFLElBQUc7UUFDRCxNQUFNQyxNQUFNRCxPQUFPQyxHQUFHLENBQUNDLE9BQU8sQ0FBQyxPQUFNO1FBQ3JDLElBQUdELElBQUlFLE1BQU0sS0FBRyxJQUFJLE9BQU9DLFNBQVNDLElBQUksQ0FBQztZQUFFQyxJQUFHO1lBQU9DLE9BQU07UUFBZSxHQUFHO1lBQUVDLFFBQU87UUFBSTtRQUMxRixNQUFNQyxJQUFJLE1BQU1iLCtDQUFNQSxDQUFDYyxPQUFPLENBQUNDLFVBQVUsQ0FBQztZQUFFQyxPQUFNO2dCQUFFWDtZQUFJO1FBQUU7UUFDMUQsSUFBRyxDQUFDUSxHQUFHLE9BQU9MLFNBQVNDLElBQUksQ0FBQztZQUFFQyxJQUFHO1lBQU9DLE9BQU07UUFBeUIsR0FBRztZQUFFQyxRQUFPO1FBQUk7UUFDdkYsTUFBTUssTUFBTUosRUFBRUssVUFBVSxJQUFJLElBQUlDLE9BQU9DLFdBQVc7UUFDbEQsTUFBTUMsTUFBTVIsRUFBRVMsY0FBYyxDQUFDQyxXQUFXO1FBQ3hDLE1BQU1DLFVBQVUsTUFBTXZCLDZDQUFnQixDQUFDLENBQUMsRUFBRUksSUFBSSxDQUFDLEVBQUVnQixJQUFJSyxTQUFTLENBQUMsR0FBRSxJQUFJLENBQUMsRUFBRVQsSUFBSSxDQUFDLEVBQUU7WUFBRVUsUUFBTztZQUFHQyxPQUFNO1FBQUU7UUFDbkcsTUFBTUMsT0FBT0MsdUJBQWdDLElBQUk7UUFDakQsT0FBT3RCLFNBQVNDLElBQUksQ0FBQztZQUFFQyxJQUFHO1lBQU11QixhQUFZO2dCQUMxQ0MsTUFBS3JCLEVBQUVxQixJQUFJO2dCQUFFN0IsS0FBSVEsRUFBRVIsR0FBRztnQkFBRWlCLGdCQUFnQkQsSUFBSUssU0FBUyxDQUFDLEdBQUU7Z0JBQUtTLGFBQVl0QixFQUFFc0IsV0FBVztnQkFBRUMsT0FBTXZCLEVBQUV1QixLQUFLO2dCQUFFbkI7Z0JBQ3ZHb0IsVUFBVXhCLEVBQUV5QixhQUFhLEVBQUVmLGNBQWNHLFVBQVUsR0FBRSxPQUFPO2dCQUFNYSxTQUFRMUIsRUFBRTBCLE9BQU87Z0JBQ25GQyxlQUFlaEI7Z0JBQVNpQixnQkFBZ0IsQ0FBQyxFQUFFWixLQUFLLGFBQWEsRUFBRXhCLElBQUksdUJBQXVCLENBQUM7WUFDN0Y7UUFBQztJQUNILEVBQUMsT0FBTXFDLEdBQUU7UUFBRUMsUUFBUWhDLEtBQUssQ0FBQytCO1FBQUksT0FBT2xDLFNBQVNDLElBQUksQ0FBQztZQUFFQyxJQUFHO1lBQU9DLE9BQU07UUFBZSxHQUFHO1lBQUVDLFFBQU87UUFBSTtJQUFJO0FBQ3pHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWVuLW5leHQvLi9hcHAvYXBpL2NsaWVudGUvW2NwZl0vY2FydGVpcmluaGEvcm91dGUudHM/NjNhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnOyBpbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZSc7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKF86UmVxdWVzdCx7cGFyYW1zfTp7cGFyYW1zOntjcGY6c3RyaW5nfX0pe1xuICB0cnl7XG4gICAgY29uc3QgY3BmID0gcGFyYW1zLmNwZi5yZXBsYWNlKC9cXEQvZywnJyk7XG4gICAgaWYoY3BmLmxlbmd0aCE9PTExKSByZXR1cm4gUmVzcG9uc2UuanNvbih7IG9rOmZhbHNlLCBlcnJvcjonQ1BGX0lOVkFMSURPJyB9LCB7IHN0YXR1czo0MDAgfSk7XG4gICAgY29uc3QgYyA9IGF3YWl0IHByaXNtYS5jbGllbnRlLmZpbmRVbmlxdWUoeyB3aGVyZTp7IGNwZiB9IH0pO1xuICAgIGlmKCFjKSByZXR1cm4gUmVzcG9uc2UuanNvbih7IG9rOmZhbHNlLCBlcnJvcjonQ0xJRU5URV9OQU9fRU5DT05UUkFETycgfSwgeyBzdGF0dXM6NDA0IH0pO1xuICAgIGNvbnN0IGFubyA9IGMuYW5vVmlnZW50ZSA/PyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgaXNvID0gYy5kYXRhTmFzY2ltZW50by50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IGRhdGFVcmwgPSBhd2FpdCBRUkNvZGUudG9EYXRhVVJMKGAke2NwZn18JHtpc28uc3Vic3RyaW5nKDAsMTApfXwke2Fub31gLCB7IG1hcmdpbjoxLCBzY2FsZTo2IH0pO1xuICAgIGNvbnN0IGJhc2UgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTCB8fCAnJztcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IG9rOnRydWUsIGNhcnRlaXJpbmhhOntcbiAgICAgIG5vbWU6Yy5ub21lLCBjcGY6Yy5jcGYsIGRhdGFOYXNjaW1lbnRvOiBpc28uc3Vic3RyaW5nKDAsMTApLCBpbnN0aXR1aWNhbzpjLmluc3RpdHVpY2FvLCBjdXJzbzpjLmN1cnNvLCBhbm8sXG4gICAgICB2YWxpZGFkZTogYy5kYXRhRXhwaXJhY2FvPy50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLDEwKSA/PyBudWxsLCBmb3RvVXJsOmMuZm90b1VybCxcbiAgICAgIHFyY29kZURhdGFVcmw6IGRhdGFVcmwsIHFyY29kZURvd25sb2FkOiBgJHtiYXNlfS9hcGkvY2xpZW50ZS8ke2NwZn0vY2FydGVpcmluaGEvcXJjb2RlLnBuZ2BcbiAgICB9fSk7XG4gIH1jYXRjaChlKXsgY29uc29sZS5lcnJvcihlKTsgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyBvazpmYWxzZSwgZXJyb3I6J1NFUlZFUl9FUlJPUicgfSwgeyBzdGF0dXM6NTAwIH0pOyB9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiUVJDb2RlIiwiR0VUIiwiXyIsInBhcmFtcyIsImNwZiIsInJlcGxhY2UiLCJsZW5ndGgiLCJSZXNwb25zZSIsImpzb24iLCJvayIsImVycm9yIiwic3RhdHVzIiwiYyIsImNsaWVudGUiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJhbm8iLCJhbm9WaWdlbnRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiaXNvIiwiZGF0YU5hc2NpbWVudG8iLCJ0b0lTT1N0cmluZyIsImRhdGFVcmwiLCJ0b0RhdGFVUkwiLCJzdWJzdHJpbmciLCJtYXJnaW4iLCJzY2FsZSIsImJhc2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFTRV9VUkwiLCJjYXJ0ZWlyaW5oYSIsIm5vbWUiLCJpbnN0aXR1aWNhbyIsImN1cnNvIiwidmFsaWRhZGUiLCJkYXRhRXhwaXJhY2FvIiwiZm90b1VybCIsInFyY29kZURhdGFVcmwiLCJxcmNvZGVEb3dubG9hZCIsImUiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/cliente/[cpf]/carteirinha/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst g = global;\nconst prisma = g.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"warn\",\n        \"error\"\n    ]\n});\nif (true) g.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUM5QyxNQUFNQyxJQUFJQztBQUNILE1BQU1DLFNBQVNGLEVBQUVFLE1BQU0sSUFBSSxJQUFJSCx3REFBWUEsQ0FBQztJQUFFSSxLQUFLO1FBQUM7UUFBTztLQUFRO0FBQUMsR0FBRztBQUM5RSxJQUFJQyxJQUFxQyxFQUFFSixFQUFFRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWVuLW5leHQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5jb25zdCBnID0gZ2xvYmFsIGFzIHVua25vd24gYXMgeyBwcmlzbWE/OiBQcmlzbWFDbGllbnQgfTtcbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBnLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbXCJ3YXJuXCIsXCJlcnJvclwiXSB9KTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGcucHJpc21hID0gcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImciLCJnbG9iYWwiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/qrcode","vendor-chunks/pngjs","vendor-chunks/encode-utf8","vendor-chunks/dijkstrajs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcliente%2F%5Bcpf%5D%2Fcarteirinha%2Froute&page=%2Fapi%2Fcliente%2F%5Bcpf%5D%2Fcarteirinha%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcliente%2F%5Bcpf%5D%2Fcarteirinha%2Froute.ts&appDir=C%3A%5C3nauts%5Crepos%5Cuen-site%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C3nauts%5Crepos%5Cuen-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();