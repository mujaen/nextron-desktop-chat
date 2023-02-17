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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AuthProvider.tsx":
/*!**********************************!*\
  !*** ./context/AuthProvider.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebaseClient */ \"./firebase/firebaseClient.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firebaseClient__WEBPACK_IMPORTED_MODULE_2__]);\n_firebase_firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    user: null\n});\nconst AuthProvider = ({ children  })=>{\n    const [userState, setUserState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const user = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            user: userState\n        }), [\n        userState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        return _firebase_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.firebaseClientAuth.onIdTokenChanged(async (user)=>{\n            if (!user) {\n                setUserState(null);\n                nookies__WEBPACK_IMPORTED_MODULE_3___default().set(null, \"token\", \"\", {\n                    httpOnly: \"development\" !== \"development\",\n                    secure: \"development\" !== \"development\",\n                    maxAge: 60 * 60,\n                    sameSite: \"strict\",\n                    path: \"/\"\n                });\n                return;\n            }\n            setUserState(user);\n            const token = await user.getIdToken();\n            nookies__WEBPACK_IMPORTED_MODULE_3___default().destroy(null, \"token\");\n            nookies__WEBPACK_IMPORTED_MODULE_3___default().set(null, \"token\", token, {\n                httpOnly: \"development\" !== \"development\",\n                secure: \"development\" !== \"development\",\n                maxAge: 60 * 60,\n                sameSite: \"strict\",\n                path: \"/\"\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: user,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jinje\\\\IdeaProjects\\\\nextron-desktop-chat\\\\renderer\\\\context\\\\AuthProvider.tsx\",\n        lineNumber: 47,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhQcm92aWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBFO0FBRVg7QUFDbEM7QUFFN0IsTUFBTU8sNEJBQWNILG9EQUFhQSxDQUF3QjtJQUN2REksTUFBTSxJQUFJO0FBQ1o7QUFFQSxNQUFNQyxlQUFlLENBQUMsRUFBRUMsU0FBUSxFQUFFLEdBQUs7SUFDckMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFjLElBQUk7SUFFNUQsTUFBTU8sT0FBT04sOENBQU9BLENBQ2xCLElBQU87WUFDTE0sTUFBTUc7UUFDUixJQUNBO1FBQUNBO0tBQVU7SUFHYlIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE9BQU9FLHlGQUFtQyxDQUFDLE9BQU9HLE9BQVM7WUFDekQsSUFBSSxDQUFDQSxNQUFNO2dCQUNUSSxhQUFhLElBQUk7Z0JBQ2pCTixrREFBVyxDQUFDLElBQUksRUFBRSxTQUFTLElBQUk7b0JBQzdCUyxVQUFVQyxrQkFBeUI7b0JBQ25DQyxRQUFRRCxrQkFBeUI7b0JBQ2pDRSxRQUFRLEtBQUs7b0JBQ2JDLFVBQVU7b0JBQ1ZDLE1BQU07Z0JBQ1I7Z0JBQ0E7WUFDRixDQUFDO1lBRURSLGFBQWFKO1lBQ2IsTUFBTWEsUUFBUSxNQUFNYixLQUFLYyxVQUFVO1lBQ25DaEIsc0RBQWUsQ0FBQyxJQUFJLEVBQUU7WUFDdEJBLGtEQUFXLENBQUMsSUFBSSxFQUFFLFNBQVNlLE9BQU87Z0JBQ2hDTixVQUFVQyxrQkFBeUI7Z0JBQ25DQyxRQUFRRCxrQkFBeUI7Z0JBQ2pDRSxRQUFRLEtBQUs7Z0JBQ2JDLFVBQVU7Z0JBQ1ZDLE1BQU07WUFDUjtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNiLFlBQVlpQixRQUFRO1FBQUNDLE9BQU9qQjtrQkFBT0U7Ozs7OztBQUM3QztBQUVBLGlFQUFlRCxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29udGV4dC9BdXRoUHJvdmlkZXIudHN4P2YzZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXHJcbmltcG9ydCB7IGZpcmViYXNlQ2xpZW50QXV0aCB9IGZyb20gJy4uL2ZpcmViYXNlL2ZpcmViYXNlQ2xpZW50J1xyXG5pbXBvcnQgbm9va2llcyBmcm9tICdub29raWVzJ1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PHsgdXNlcjogVXNlciB8IG51bGwgfT4oe1xyXG4gIHVzZXI6IG51bGwsXHJcbn0pXHJcblxyXG5jb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXJTdGF0ZSwgc2V0VXNlclN0YXRlXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKVxyXG5cclxuICBjb25zdCB1c2VyID0gdXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIHVzZXI6IHVzZXJTdGF0ZSxcclxuICAgIH0pLFxyXG4gICAgW3VzZXJTdGF0ZV0sXHJcbiAgKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuIGZpcmViYXNlQ2xpZW50QXV0aC5vbklkVG9rZW5DaGFuZ2VkKGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIHNldFVzZXJTdGF0ZShudWxsKVxyXG4gICAgICAgIG5vb2tpZXMuc2V0KG51bGwsICd0b2tlbicsICcnLCB7XHJcbiAgICAgICAgICBodHRwT25seTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcsXHJcbiAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnLFxyXG4gICAgICAgICAgbWF4QWdlOiA2MCAqIDYwLFxyXG4gICAgICAgICAgc2FtZVNpdGU6ICdzdHJpY3QnLFxyXG4gICAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFVzZXJTdGF0ZSh1c2VyKVxyXG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHVzZXIuZ2V0SWRUb2tlbigpXHJcbiAgICAgIG5vb2tpZXMuZGVzdHJveShudWxsLCAndG9rZW4nKVxyXG4gICAgICBub29raWVzLnNldChudWxsLCAndG9rZW4nLCB0b2tlbiwge1xyXG4gICAgICAgIGh0dHBPbmx5OiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyxcclxuICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnLFxyXG4gICAgICAgIG1heEFnZTogNjAgKiA2MCxcclxuICAgICAgICBzYW1lU2l0ZTogJ3N0cmljdCcsXHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dXNlcn0+e2NoaWxkcmVufTwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhQcm92aWRlclxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwiZmlyZWJhc2VDbGllbnRBdXRoIiwibm9va2llcyIsIkF1dGhDb250ZXh0IiwidXNlciIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlclN0YXRlIiwic2V0VXNlclN0YXRlIiwib25JZFRva2VuQ2hhbmdlZCIsInNldCIsImh0dHBPbmx5IiwicHJvY2VzcyIsInNlY3VyZSIsIm1heEFnZSIsInNhbWVTaXRlIiwicGF0aCIsInRva2VuIiwiZ2V0SWRUb2tlbiIsImRlc3Ryb3kiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/AuthProvider.tsx\n");

/***/ }),

/***/ "./firebase/firebaseClient.ts":
/*!************************************!*\
  !*** ./firebase/firebaseClient.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"firebaseClientApp\": () => (/* binding */ firebaseClientApp),\n/* harmony export */   \"firebaseClientAuth\": () => (/* binding */ firebaseClientAuth)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAXqoJk2u_Yb2_rYIh9Sgfq45ptf_58wTY\",\n    authDomain: \"nextron-desktop-chat.firebaseapp.com\",\n    projectId: \"nextron-desktop-chat\",\n    storageBucket: \"nextron-desktop-chat.appspot.com\",\n    messagingSenderId: \"822629750204\",\n    appId: \"1:822629750204:web:13af606deb9b883d1687b9\",\n    measurementId: \"G-BW6YXNK9R6\"\n};\n// Initialize Firebase\nconst firebaseClientApp = !firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps.length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\nconst firebaseClientAuth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(firebaseClientApp);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(firebaseClientApp);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9maXJlYmFzZUNsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkQ7QUFDWjtBQUNWO0FBRXZDLE1BQU1LLGlCQUFpQjtJQUNyQkMsUUFBUUMseUNBQStCO0lBQ3ZDRyxZQUFZSCxzQ0FBbUM7SUFDL0NLLFdBQVdMLHNCQUFrQztJQUM3Q08sZUFBZVAsa0NBQXNDO0lBQ3JEUyxtQkFBbUJULGNBQTJDO0lBQzlEVyxPQUFPWCwyQ0FBMEI7SUFDakNhLGVBQWViLGNBQXNDO0FBQ3ZEO0FBRUEsc0JBQXNCO0FBQ3RCLE1BQU1lLG9CQUFvQixDQUFDckIsd0RBQWMsR0FBR0MsMkRBQWFBLENBQUNHLGtCQUFrQkwsb0RBQU1BLEVBQUU7QUFDcEYsTUFBTXdCLHFCQUFxQnBCLHNEQUFPQSxDQUFDa0I7QUFDbkMsTUFBTUcsS0FBS3RCLGdFQUFZQSxDQUFDbUI7QUFFNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maXJlYmFzZUNsaWVudC50cz9hYTEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFwcCwgZ2V0QXBwcywgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCdcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIX0RPTUFJTixcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RPUkFHRV9CVUNLRVQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lELFxyXG4gIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FQVNVUkVNRU5UX0lELFxyXG59XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmNvbnN0IGZpcmViYXNlQ2xpZW50QXBwID0gIWdldEFwcHMubGVuZ3RoID8gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBnZXRBcHAoKVxyXG5jb25zdCBmaXJlYmFzZUNsaWVudEF1dGggPSBnZXRBdXRoKGZpcmViYXNlQ2xpZW50QXBwKVxyXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShmaXJlYmFzZUNsaWVudEFwcClcclxuXHJcbmV4cG9ydCB7IGZpcmViYXNlQ2xpZW50QXBwLCBmaXJlYmFzZUNsaWVudEF1dGgsIGRiIH1cclxuIl0sIm5hbWVzIjpbImdldEFwcCIsImdldEFwcHMiLCJpbml0aWFsaXplQXBwIiwiZ2V0RmlyZXN0b3JlIiwiZ2V0QXV0aCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiTkVYVF9QVUJMSUNfQVVUSF9ET01BSU4iLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfUFVCTElDX1NUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJORVhUX1BVQkxJQ19TRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19JRCIsIm1lYXN1cmVtZW50SWQiLCJORVhUX1BVQkxJQ19NRUFTVVJFTUVOVF9JRCIsImZpcmViYXNlQ2xpZW50QXBwIiwibGVuZ3RoIiwiZmlyZWJhc2VDbGllbnRBdXRoIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/firebaseClient.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AuthProvider */ \"./context/AuthProvider.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthProvider__WEBPACK_IMPORTED_MODULE_1__]);\n_context_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jinje\\\\IdeaProjects\\\\nextron-desktop-chat\\\\renderer\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jinje\\\\IdeaProjects\\\\nextron-desktop-chat\\\\renderer\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ3BCO0FBRTlCLFNBQVNDLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ0gsNkRBQVlBO2tCQUNYLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IEF1dGhQcm92aWRlciBmcm9tICcuLi9jb250ZXh0L0F1dGhQcm92aWRlcidcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();