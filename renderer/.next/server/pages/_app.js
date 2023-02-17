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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebaseClient */ \"./firebase/firebaseClient.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firebaseClient__WEBPACK_IMPORTED_MODULE_2__]);\n_firebase_firebaseClient__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    user: null\n});\nconst AuthProvider = ({ children  })=>{\n    const [userState, setUserState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const user = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            user: userState\n        }), [\n        userState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        return _firebase_firebaseClient__WEBPACK_IMPORTED_MODULE_2__.firebaseClientAuth.onIdTokenChanged(async (user)=>{\n            if (!user) {\n                setUserState(null);\n                nookies__WEBPACK_IMPORTED_MODULE_3___default().set(null, \"token\", \"\", {\n                    httpOnly: \"development\" !== \"development\",\n                    secure: \"development\" !== \"development\",\n                    maxAge: 60 * 60,\n                    sameSite: \"strict\",\n                    path: \"/\"\n                });\n                return;\n            }\n            setUserState(user);\n            const token = await user.getIdToken();\n            nookies__WEBPACK_IMPORTED_MODULE_3___default().destroy(null, \"token\");\n            nookies__WEBPACK_IMPORTED_MODULE_3___default().set(null, \"token\", token, {\n                httpOnly: \"development\" !== \"development\",\n                secure: \"development\" !== \"development\",\n                maxAge: 60 * 60,\n                sameSite: \"strict\",\n                path: \"/\"\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: user,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jinje\\\\IdeaProjects\\\\nextron-desktop-chat\\\\renderer\\\\context\\\\AuthProvider.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhQcm92aWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBFO0FBRVY7QUFDbkM7QUFFN0IsTUFBTU8sNEJBQWNILG9EQUFhQSxDQUFzQjtJQUNuREksTUFBTSxJQUFJO0FBQ2Q7QUFFQSxNQUFNQyxlQUFlLENBQUMsRUFBRUMsU0FBUSxFQUFFLEdBQUs7SUFDbkMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFjLElBQUk7SUFFNUQsTUFBTU8sT0FBT04sOENBQU9BLENBQUMsSUFBTztZQUN4Qk0sTUFBTUc7UUFDVixJQUFJO1FBQUNBO0tBQVU7SUFFZlIsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE9BQU9FLHlGQUFtQyxDQUFDLE9BQU9HLE9BQVM7WUFDdkQsSUFBRyxDQUFDQSxNQUFNO2dCQUNOSSxhQUFhLElBQUk7Z0JBQ2pCTixrREFBVyxDQUFDLElBQUksRUFBRSxTQUFTLElBQUk7b0JBQzNCUyxVQUFVQyxrQkFBeUI7b0JBQ25DQyxRQUFRRCxrQkFBeUI7b0JBQ2pDRSxRQUFRLEtBQUs7b0JBQ2JDLFVBQVU7b0JBQ1ZDLE1BQU07Z0JBQ1Y7Z0JBQ0E7WUFDSixDQUFDO1lBRURSLGFBQWFKO1lBQ2IsTUFBTWEsUUFBUSxNQUFNYixLQUFLYyxVQUFVO1lBQ25DaEIsc0RBQWUsQ0FBQyxJQUFJLEVBQUU7WUFDdEJBLGtEQUFXLENBQUMsSUFBSSxFQUFFLFNBQVNlLE9BQU87Z0JBQzlCTixVQUFVQyxrQkFBeUI7Z0JBQ25DQyxRQUFRRCxrQkFBeUI7Z0JBQ2pDRSxRQUFRLEtBQUs7Z0JBQ2JDLFVBQVU7Z0JBQ1ZDLE1BQU07WUFDVjtRQUNKO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNiLFlBQVlpQixRQUFRO1FBQUNDLE9BQU9qQjtrQkFDeEJFOzs7Ozs7QUFHYjtBQUVBLGlFQUFlRCxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29udGV4dC9BdXRoUHJvdmlkZXIudHN4P2YzZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIlxyXG5pbXBvcnQgeyBmaXJlYmFzZUNsaWVudEF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2UvZmlyZWJhc2VDbGllbnRcIjtcclxuaW1wb3J0IG5vb2tpZXMgZnJvbSBcIm5vb2tpZXNcIlxyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PHt1c2VyOiBVc2VyIHwgbnVsbH0+KHtcclxuICAgIHVzZXI6IG51bGxcclxufSlcclxuXHJcbmNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFt1c2VyU3RhdGUsIHNldFVzZXJTdGF0ZV0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IHVzZU1lbW8oKCkgPT4gKHtcclxuICAgICAgICB1c2VyOiB1c2VyU3RhdGUsXHJcbiAgICB9KSwgW3VzZXJTdGF0ZV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gZmlyZWJhc2VDbGllbnRBdXRoLm9uSWRUb2tlbkNoYW5nZWQoYXN5bmMgKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgaWYoIXVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJTdGF0ZShudWxsKVxyXG4gICAgICAgICAgICAgICAgbm9va2llcy5zZXQobnVsbCwgJ3Rva2VuJywgJycsIHtcclxuICAgICAgICAgICAgICAgICAgICBodHRwT25seTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwiZGV2ZWxvcG1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4QWdlOiA2MCAqIDYwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiL1wiLCBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0VXNlclN0YXRlKHVzZXIpXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdXNlci5nZXRJZFRva2VuKCk7XHJcbiAgICAgICAgICAgIG5vb2tpZXMuZGVzdHJveShudWxsLCAndG9rZW4nKVxyXG4gICAgICAgICAgICBub29raWVzLnNldChudWxsLCAndG9rZW4nLCB0b2tlbiwge1xyXG4gICAgICAgICAgICAgICAgaHR0cE9ubHk6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIsXHJcbiAgICAgICAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnLFxyXG4gICAgICAgICAgICAgICAgbWF4QWdlOiA2MCAqIDYwLFxyXG4gICAgICAgICAgICAgICAgc2FtZVNpdGU6ICdzdHJpY3QnLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogJy8nLCBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJ9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aFByb3ZpZGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwidXNlRWZmZWN0IiwiY3JlYXRlQ29udGV4dCIsImZpcmViYXNlQ2xpZW50QXV0aCIsIm5vb2tpZXMiLCJBdXRoQ29udGV4dCIsInVzZXIiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJTdGF0ZSIsInNldFVzZXJTdGF0ZSIsIm9uSWRUb2tlbkNoYW5nZWQiLCJzZXQiLCJodHRwT25seSIsInByb2Nlc3MiLCJzZWN1cmUiLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsInBhdGgiLCJ0b2tlbiIsImdldElkVG9rZW4iLCJkZXN0cm95IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthProvider.tsx\n");

/***/ }),

/***/ "./firebase/firebaseClient.ts":
/*!************************************!*\
  !*** ./firebase/firebaseClient.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"firebaseClientApp\": () => (/* binding */ firebaseClientApp),\n/* harmony export */   \"firebaseClientAuth\": () => (/* binding */ firebaseClientAuth)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAXqoJk2u_Yb2_rYIh9Sgfq45ptf_58wTY\",\n    authDomain: \"nextron-desktop-chat.firebaseapp.com\",\n    projectId: \"nextron-desktop-chat\",\n    storageBucket: \"nextron-desktop-chat.appspot.com\",\n    messagingSenderId: \"822629750204\",\n    appId: \"1:822629750204:web:13af606deb9b883d1687b9\",\n    measurementId: \"G-BW6YXNK9R6\"\n};\n// Initialize Firebase\nconst firebaseClientApp = !firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps.length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\nconst firebaseClientAuth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(firebaseClientApp);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(firebaseClientApp);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9maXJlYmFzZUNsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkQ7QUFDWjtBQUNWO0FBRXZDLE1BQU1LLGlCQUFpQjtJQUNyQkMsUUFBUUMseUNBQStCO0lBQ3ZDRyxZQUFZSCxzQ0FBbUM7SUFDL0NLLFdBQVdMLHNCQUFrQztJQUM3Q08sZUFBZVAsa0NBQXNDO0lBQ3JEUyxtQkFBbUJULGNBQTJDO0lBQzlEVyxPQUFPWCwyQ0FBMEI7SUFDakNhLGVBQWViLGNBQXNDO0FBQ3ZEO0FBRUEsc0JBQXNCO0FBQ3RCLE1BQU1lLG9CQUFvQixDQUFDckIsd0RBQWMsR0FBR0MsMkRBQWFBLENBQUNHLGtCQUFrQkwsb0RBQU1BLEVBQUU7QUFDcEYsTUFBTXdCLHFCQUFxQnBCLHNEQUFPQSxDQUFDa0I7QUFDbkMsTUFBTUcsS0FBS3RCLGdFQUFZQSxDQUFDbUI7QUFFNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maXJlYmFzZUNsaWVudC50cz9hYTEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFwcCwgZ2V0QXBwcywgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIlxyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCJcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIX0RPTUFJTixcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST0pFQ1RfSUQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RPUkFHRV9CVUNLRVQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFU1NBR0lOR19TRU5ERVJfSUQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lELFxyXG4gIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FQVNVUkVNRU5UX0lELFxyXG59XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmNvbnN0IGZpcmViYXNlQ2xpZW50QXBwID0gIWdldEFwcHMubGVuZ3RoID8gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBnZXRBcHAoKVxyXG5jb25zdCBmaXJlYmFzZUNsaWVudEF1dGggPSBnZXRBdXRoKGZpcmViYXNlQ2xpZW50QXBwKVxyXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShmaXJlYmFzZUNsaWVudEFwcClcclxuXHJcbmV4cG9ydCB7IGZpcmViYXNlQ2xpZW50QXBwLCBmaXJlYmFzZUNsaWVudEF1dGgsIGRiIH0gXHJcbiJdLCJuYW1lcyI6WyJnZXRBcHAiLCJnZXRBcHBzIiwiaW5pdGlhbGl6ZUFwcCIsImdldEZpcmVzdG9yZSIsImdldEF1dGgiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJORVhUX1BVQkxJQ19TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfU0VTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9QVUJMSUNfSUQiLCJtZWFzdXJlbWVudElkIiwiTkVYVF9QVUJMSUNfTUVBU1VSRU1FTlRfSUQiLCJmaXJlYmFzZUNsaWVudEFwcCIsImxlbmd0aCIsImZpcmViYXNlQ2xpZW50QXV0aCIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase/firebaseClient.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AuthProvider */ \"./context/AuthProvider.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthProvider__WEBPACK_IMPORTED_MODULE_1__]);\n_context_AuthProvider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jinje\\\\IdeaProjects\\\\nextron-desktop-chat\\\\renderer\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jinje\\\\IdeaProjects\\\\nextron-desktop-chat\\\\renderer\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ3BCO0FBRS9CLFNBQVNDLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ0gsNkRBQVlBO2tCQUNYLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IEF1dGhQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dC9BdXRoUHJvdmlkZXJcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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