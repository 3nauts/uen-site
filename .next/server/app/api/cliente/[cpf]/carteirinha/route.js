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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode */ \"(rsc)/./node_modules/qrcode/lib/index.js\");\n/* harmony import */ var pdf_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdf-lib */ \"(rsc)/./node_modules/pdf-lib/es/index.js\");\n// app/api/cliente/[cpf]/carteirinha/route.ts\n\n\n\n\nasync function GET(req, { params }) {\n    try {\n        const cliente = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.cliente.findUnique({\n            where: {\n                cpf: params.cpf\n            }\n        });\n        if (!cliente) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Cliente n\\xe3o encontrado\"\n            }, {\n                status: 404\n            });\n        }\n        if (!cliente.dataExpiracao || cliente.dataExpiracao < new Date()) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Carteirinha expirada. Fa\\xe7a a renova\\xe7\\xe3o.\"\n            }, {\n                status: 400\n            });\n        }\n        // 🔹 Gera QR Code com CPF (pode trocar por URL de validação)\n        const qrDataUrl = await qrcode__WEBPACK_IMPORTED_MODULE_2__.toDataURL(cliente.cpf);\n        // 🔹 Cria PDF\n        const pdfDoc = await pdf_lib__WEBPACK_IMPORTED_MODULE_3__.PDFDocument.create();\n        const page = pdfDoc.addPage([\n            350,\n            200\n        ]);\n        const font = await pdfDoc.embedFont(pdf_lib__WEBPACK_IMPORTED_MODULE_3__.StandardFonts.HelveticaBold);\n        // Fundo\n        page.drawRectangle({\n            x: 0,\n            y: 0,\n            width: 350,\n            height: 200,\n            color: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_3__.rgb)(0.0, 0.6, 0.2)\n        });\n        // Nome\n        page.drawText(cliente.nome, {\n            x: 20,\n            y: 160,\n            size: 16,\n            font,\n            color: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_3__.rgb)(1, 1, 1)\n        });\n        // Instituição\n        if (cliente.instituicao) {\n            page.drawText(`Instituição: ${cliente.instituicao}`, {\n                x: 20,\n                y: 140,\n                size: 12,\n                font,\n                color: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_3__.rgb)(1, 1, 1)\n            });\n        }\n        // Validade\n        page.drawText(`Validade: ${cliente.dataExpiracao.toLocaleDateString(\"pt-BR\")}`, {\n            x: 20,\n            y: 120,\n            size: 12,\n            font,\n            color: (0,pdf_lib__WEBPACK_IMPORTED_MODULE_3__.rgb)(1, 1, 1)\n        });\n        // QR Code\n        const qrImageBytes = Buffer.from(qrDataUrl.split(\",\")[1], \"base64\");\n        const qrImage = await pdfDoc.embedPng(qrImageBytes);\n        page.drawImage(qrImage, {\n            x: 250,\n            y: 80,\n            width: 80,\n            height: 80\n        });\n        const pdfBytes = await pdfDoc.save();\n        const pdfBuffer = Buffer.from(pdfBytes);\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(pdfBuffer, {\n            status: 200,\n            headers: {\n                \"Content-Type\": \"application/pdf\",\n                \"Content-Disposition\": `inline; filename=\"carteirinha-${cliente.cpf}.pdf\"`\n            }\n        });\n    } catch (error) {\n        console.error(\"Erro ao gerar carteirinha:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Erro ao gerar carteirinha\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NsaWVudGUvW2NwZl0vY2FydGVpcmluaGEvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw2Q0FBNkM7QUFDRjtBQUNQO0FBQ1I7QUFDOEI7QUFFbkQsZUFBZU0sSUFDcEJDLEdBQVksRUFDWixFQUFFQyxNQUFNLEVBQStCO0lBRXZDLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1SLCtDQUFNQSxDQUFDUSxPQUFPLENBQUNDLFVBQVUsQ0FBQztZQUM5Q0MsT0FBTztnQkFBRUMsS0FBS0osT0FBT0ksR0FBRztZQUFDO1FBQzNCO1FBRUEsSUFBSSxDQUFDSCxTQUFTO1lBQ1osT0FBT1QscURBQVlBLENBQUNhLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUF5QixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDOUU7UUFFQSxJQUFJLENBQUNOLFFBQVFPLGFBQWEsSUFBSVAsUUFBUU8sYUFBYSxHQUFHLElBQUlDLFFBQVE7WUFDaEUsT0FBT2pCLHFEQUFZQSxDQUFDYSxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQTBDLEdBQ25EO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSw2REFBNkQ7UUFDN0QsTUFBTUcsWUFBWSxNQUFNaEIsNkNBQWdCLENBQUNPLFFBQVFHLEdBQUc7UUFFcEQsY0FBYztRQUNkLE1BQU1RLFNBQVMsTUFBTWpCLGdEQUFXQSxDQUFDa0IsTUFBTTtRQUN2QyxNQUFNQyxPQUFPRixPQUFPRyxPQUFPLENBQUM7WUFBQztZQUFLO1NBQUk7UUFDdEMsTUFBTUMsT0FBTyxNQUFNSixPQUFPSyxTQUFTLENBQUNwQixrREFBYUEsQ0FBQ3FCLGFBQWE7UUFFL0QsUUFBUTtRQUNSSixLQUFLSyxhQUFhLENBQUM7WUFDakJDLEdBQUc7WUFDSEMsR0FBRztZQUNIQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsT0FBTzVCLDRDQUFHQSxDQUFDLEtBQUssS0FBSztRQUN2QjtRQUVBLE9BQU87UUFDUGtCLEtBQUtXLFFBQVEsQ0FBQ3hCLFFBQVF5QixJQUFJLEVBQUU7WUFDMUJOLEdBQUc7WUFDSEMsR0FBRztZQUNITSxNQUFNO1lBQ05YO1lBQ0FRLE9BQU81Qiw0Q0FBR0EsQ0FBQyxHQUFHLEdBQUc7UUFDbkI7UUFFQSxjQUFjO1FBQ2QsSUFBSUssUUFBUTJCLFdBQVcsRUFBRTtZQUN2QmQsS0FBS1csUUFBUSxDQUFDLENBQUMsYUFBYSxFQUFFeEIsUUFBUTJCLFdBQVcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25EUixHQUFHO2dCQUNIQyxHQUFHO2dCQUNITSxNQUFNO2dCQUNOWDtnQkFDQVEsT0FBTzVCLDRDQUFHQSxDQUFDLEdBQUcsR0FBRztZQUNuQjtRQUNGO1FBRUEsV0FBVztRQUNYa0IsS0FBS1csUUFBUSxDQUNYLENBQUMsVUFBVSxFQUFFeEIsUUFBUU8sYUFBYSxDQUFDcUIsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEVBQ2hFO1lBQ0VULEdBQUc7WUFDSEMsR0FBRztZQUNITSxNQUFNO1lBQ05YO1lBQ0FRLE9BQU81Qiw0Q0FBR0EsQ0FBQyxHQUFHLEdBQUc7UUFDbkI7UUFHRixVQUFVO1FBQ1YsTUFBTWtDLGVBQWVDLE9BQU9DLElBQUksQ0FBQ3RCLFVBQVV1QixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUMxRCxNQUFNQyxVQUFVLE1BQU10QixPQUFPdUIsUUFBUSxDQUFDTDtRQUN0Q2hCLEtBQUtzQixTQUFTLENBQUNGLFNBQVM7WUFDdEJkLEdBQUc7WUFDSEMsR0FBRztZQUNIQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUVBLE1BQU1jLFdBQVcsTUFBTXpCLE9BQU8wQixJQUFJO1FBQ2xDLE1BQU1DLFlBQVlSLE9BQU9DLElBQUksQ0FBQ0s7UUFFOUIsT0FBTyxJQUFJN0MscURBQVlBLENBQUMrQyxXQUFXO1lBQ2pDaEMsUUFBUTtZQUNSaUMsU0FBUztnQkFDUCxnQkFBZ0I7Z0JBQ2hCLHVCQUF1QixDQUFDLDhCQUE4QixFQUFFdkMsUUFBUUcsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUM1RTtRQUNGO0lBQ0YsRUFBRSxPQUFPRSxPQUFPO1FBQ2RtQyxRQUFRbkMsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMsT0FBT2QscURBQVlBLENBQUNhLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQTRCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ2pGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91ZW4tbmV4dC8uL2FwcC9hcGkvY2xpZW50ZS9bY3BmXS9jYXJ0ZWlyaW5oYS9yb3V0ZS50cz82M2FjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvY2xpZW50ZS9bY3BmXS9jYXJ0ZWlyaW5oYS9yb3V0ZS50c1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQge3ByaXNtYX0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwicXJjb2RlXCI7XG5pbXBvcnQgeyBQREZEb2N1bWVudCwgcmdiLCBTdGFuZGFyZEZvbnRzIH0gZnJvbSBcInBkZi1saWJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChcbiAgcmVxOiBSZXF1ZXN0LFxuICB7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBjcGY6IHN0cmluZyB9IH1cbikge1xuICB0cnkge1xuICAgIGNvbnN0IGNsaWVudGUgPSBhd2FpdCBwcmlzbWEuY2xpZW50ZS5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGNwZjogcGFyYW1zLmNwZiB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFjbGllbnRlKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJDbGllbnRlIG7Do28gZW5jb250cmFkb1wiIH0sIHsgc3RhdHVzOiA0MDQgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFjbGllbnRlLmRhdGFFeHBpcmFjYW8gfHwgY2xpZW50ZS5kYXRhRXhwaXJhY2FvIDwgbmV3IERhdGUoKSkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiBcIkNhcnRlaXJpbmhhIGV4cGlyYWRhLiBGYcOnYSBhIHJlbm92YcOnw6NvLlwiIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyDwn5S5IEdlcmEgUVIgQ29kZSBjb20gQ1BGIChwb2RlIHRyb2NhciBwb3IgVVJMIGRlIHZhbGlkYcOnw6NvKVxuICAgIGNvbnN0IHFyRGF0YVVybCA9IGF3YWl0IFFSQ29kZS50b0RhdGFVUkwoY2xpZW50ZS5jcGYpO1xuXG4gICAgLy8g8J+UuSBDcmlhIFBERlxuICAgIGNvbnN0IHBkZkRvYyA9IGF3YWl0IFBERkRvY3VtZW50LmNyZWF0ZSgpO1xuICAgIGNvbnN0IHBhZ2UgPSBwZGZEb2MuYWRkUGFnZShbMzUwLCAyMDBdKTtcbiAgICBjb25zdCBmb250ID0gYXdhaXQgcGRmRG9jLmVtYmVkRm9udChTdGFuZGFyZEZvbnRzLkhlbHZldGljYUJvbGQpO1xuXG4gICAgLy8gRnVuZG9cbiAgICBwYWdlLmRyYXdSZWN0YW5nbGUoe1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICB3aWR0aDogMzUwLFxuICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICBjb2xvcjogcmdiKDAuMCwgMC42LCAwLjIpLFxuICAgIH0pO1xuXG4gICAgLy8gTm9tZVxuICAgIHBhZ2UuZHJhd1RleHQoY2xpZW50ZS5ub21lLCB7XG4gICAgICB4OiAyMCxcbiAgICAgIHk6IDE2MCxcbiAgICAgIHNpemU6IDE2LFxuICAgICAgZm9udCxcbiAgICAgIGNvbG9yOiByZ2IoMSwgMSwgMSksXG4gICAgfSk7XG5cbiAgICAvLyBJbnN0aXR1acOnw6NvXG4gICAgaWYgKGNsaWVudGUuaW5zdGl0dWljYW8pIHtcbiAgICAgIHBhZ2UuZHJhd1RleHQoYEluc3RpdHVpw6fDo286ICR7Y2xpZW50ZS5pbnN0aXR1aWNhb31gLCB7XG4gICAgICAgIHg6IDIwLFxuICAgICAgICB5OiAxNDAsXG4gICAgICAgIHNpemU6IDEyLFxuICAgICAgICBmb250LFxuICAgICAgICBjb2xvcjogcmdiKDEsIDEsIDEpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhZGVcbiAgICBwYWdlLmRyYXdUZXh0KFxuICAgICAgYFZhbGlkYWRlOiAke2NsaWVudGUuZGF0YUV4cGlyYWNhby50b0xvY2FsZURhdGVTdHJpbmcoXCJwdC1CUlwiKX1gLFxuICAgICAge1xuICAgICAgICB4OiAyMCxcbiAgICAgICAgeTogMTIwLFxuICAgICAgICBzaXplOiAxMixcbiAgICAgICAgZm9udCxcbiAgICAgICAgY29sb3I6IHJnYigxLCAxLCAxKSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgLy8gUVIgQ29kZVxuICAgIGNvbnN0IHFySW1hZ2VCeXRlcyA9IEJ1ZmZlci5mcm9tKHFyRGF0YVVybC5zcGxpdChcIixcIilbMV0sIFwiYmFzZTY0XCIpO1xuICAgIGNvbnN0IHFySW1hZ2UgPSBhd2FpdCBwZGZEb2MuZW1iZWRQbmcocXJJbWFnZUJ5dGVzKTtcbiAgICBwYWdlLmRyYXdJbWFnZShxckltYWdlLCB7XG4gICAgICB4OiAyNTAsXG4gICAgICB5OiA4MCxcbiAgICAgIHdpZHRoOiA4MCxcbiAgICAgIGhlaWdodDogODAsXG4gICAgfSk7XG5cbiAgICBjb25zdCBwZGZCeXRlcyA9IGF3YWl0IHBkZkRvYy5zYXZlKCk7XG4gICAgY29uc3QgcGRmQnVmZmVyID0gQnVmZmVyLmZyb20ocGRmQnl0ZXMpO1xuXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UocGRmQnVmZmVyLCB7XG4gICAgICBzdGF0dXM6IDIwMCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9wZGZcIixcbiAgICAgICAgXCJDb250ZW50LURpc3Bvc2l0aW9uXCI6IGBpbmxpbmU7IGZpbGVuYW1lPVwiY2FydGVpcmluaGEtJHtjbGllbnRlLmNwZn0ucGRmXCJgLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBnZXJhciBjYXJ0ZWlyaW5oYTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkVycm8gYW8gZ2VyYXIgY2FydGVpcmluaGFcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiUVJDb2RlIiwiUERGRG9jdW1lbnQiLCJyZ2IiLCJTdGFuZGFyZEZvbnRzIiwiR0VUIiwicmVxIiwicGFyYW1zIiwiY2xpZW50ZSIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImNwZiIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImRhdGFFeHBpcmFjYW8iLCJEYXRlIiwicXJEYXRhVXJsIiwidG9EYXRhVVJMIiwicGRmRG9jIiwiY3JlYXRlIiwicGFnZSIsImFkZFBhZ2UiLCJmb250IiwiZW1iZWRGb250IiwiSGVsdmV0aWNhQm9sZCIsImRyYXdSZWN0YW5nbGUiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJkcmF3VGV4dCIsIm5vbWUiLCJzaXplIiwiaW5zdGl0dWljYW8iLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJxckltYWdlQnl0ZXMiLCJCdWZmZXIiLCJmcm9tIiwic3BsaXQiLCJxckltYWdlIiwiZW1iZWRQbmciLCJkcmF3SW1hZ2UiLCJwZGZCeXRlcyIsInNhdmUiLCJwZGZCdWZmZXIiLCJoZWFkZXJzIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/cliente/[cpf]/carteirinha/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/pdf-lib","vendor-chunks/qrcode","vendor-chunks/pngjs","vendor-chunks/@pdf-lib","vendor-chunks/pako","vendor-chunks/encode-utf8","vendor-chunks/dijkstrajs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcliente%2F%5Bcpf%5D%2Fcarteirinha%2Froute&page=%2Fapi%2Fcliente%2F%5Bcpf%5D%2Fcarteirinha%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcliente%2F%5Bcpf%5D%2Fcarteirinha%2Froute.ts&appDir=C%3A%5C3nauts%5Crepos%5Cuen-site%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5C3nauts%5Crepos%5Cuen-site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();