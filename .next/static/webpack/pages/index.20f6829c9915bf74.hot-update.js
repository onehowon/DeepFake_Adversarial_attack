"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ImageUpload.js":
/*!***********************************!*\
  !*** ./components/ImageUpload.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ImageUpload() {\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [epsValue, setEpsValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.3);\n    const [resultImage, setResultImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleImageUpload = (e)=>{\n        setImage(e.target.files[0]);\n    };\n    const handleSubmit = async ()=>{\n        const formData = new FormData();\n        formData.append(\"image\", image);\n        formData.append(\"eps_value\", epsValue);\n        try {\n            const response = await fetch(\"/api/predict\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to upload image\");\n            }\n            const data = await response.json();\n            // 처리된 이미지를 Base64 문자열로 처리\n            if (data.image) {\n                setResultImage(\"data:image/png;base64,\".concat(data.image));\n            } else {\n                console.error(\"No image data received\");\n            }\n        } catch (error) {\n            console.error(\"API 호출 오류:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleImageUpload\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sande\\\\Desktop\\\\school\\\\DeepFake_Adversarial_attack\\\\components\\\\ImageUpload.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"range\",\n                min: \"0.1\",\n                max: \"1.0\",\n                step: \"0.1\",\n                value: epsValue,\n                onChange: (e)=>setEpsValue(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sande\\\\Desktop\\\\school\\\\DeepFake_Adversarial_attack\\\\components\\\\ImageUpload.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSubmit,\n                children: \"이미지 처리\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sande\\\\Desktop\\\\school\\\\DeepFake_Adversarial_attack\\\\components\\\\ImageUpload.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            resultImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: resultImage,\n                alt: \"처리된 이미지\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sande\\\\Desktop\\\\school\\\\DeepFake_Adversarial_attack\\\\components\\\\ImageUpload.js\",\n                lineNumber: 52,\n                columnNumber: 23\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sande\\\\Desktop\\\\school\\\\DeepFake_Adversarial_attack\\\\components\\\\ImageUpload.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageUpload, \"gt91+NU2wGv5v6K0BLQ8mi51QmQ=\");\n_c = ImageUpload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageUpload);\nvar _c;\n$RefreshReg$(_c, \"ImageUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlVXBsb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUM7QUFFakMsU0FBU0M7O0lBQ1AsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVEsb0JBQW9CLENBQUNDO1FBQ3pCTixTQUFTTSxFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO0lBQzVCO0lBRUEsTUFBTUMsZUFBZTtRQUNuQixNQUFNQyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsU0FBU2I7UUFDekJXLFNBQVNFLE1BQU0sQ0FBQyxhQUFhWDtRQUU3QixJQUFJO1lBQ0YsTUFBTVksV0FBVyxNQUFNQyxNQUFNLGdCQUFnQjtnQkFDM0NDLFFBQVE7Z0JBQ1JDLE1BQU1OO1lBQ1I7WUFFQSxJQUFJLENBQUNHLFNBQVNJLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBRWhDLDBCQUEwQjtZQUMxQixJQUFJRCxLQUFLcEIsS0FBSyxFQUFFO2dCQUNkSyxlQUFlLHlCQUFvQyxPQUFYZSxLQUFLcEIsS0FBSztZQUNwRCxPQUFPO2dCQUNMc0IsUUFBUUMsS0FBSyxDQUFDO1lBQ2hCO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2RELFFBQVFDLEtBQUssQ0FBQyxjQUFjQTtRQUM5QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQU9DLFVBQVVyQjs7Ozs7OzBCQUM3Qiw4REFBQ21CO2dCQUNDQyxNQUFLO2dCQUNMRSxLQUFJO2dCQUNKQyxLQUFJO2dCQUNKQyxNQUFLO2dCQUNMQyxPQUFPN0I7Z0JBQ1B5QixVQUFVLENBQUNwQixJQUFNSixZQUFZSSxFQUFFQyxNQUFNLENBQUN1QixLQUFLOzs7Ozs7MEJBRTdDLDhEQUFDQztnQkFBT0MsU0FBU3ZCOzBCQUFjOzs7Ozs7WUFDOUJOLDZCQUFlLDhEQUFDOEI7Z0JBQUlDLEtBQUsvQjtnQkFBYWdDLEtBQUk7Ozs7Ozs7Ozs7OztBQUdqRDtHQXBEU3JDO0tBQUFBO0FBc0RULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWQuanM/YzM2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIEltYWdlVXBsb2FkKCkge1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Vwc1ZhbHVlLCBzZXRFcHNWYWx1ZV0gPSB1c2VTdGF0ZSgwLjMpO1xyXG4gIGNvbnN0IFtyZXN1bHRJbWFnZSwgc2V0UmVzdWx0SW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlVXBsb2FkID0gKGUpID0+IHtcclxuICAgIHNldEltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGltYWdlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZXBzX3ZhbHVlJywgZXBzVmFsdWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcHJlZGljdCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gdXBsb2FkIGltYWdlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAvLyDsspjrpqzrkJwg7J2066+47KeA66W8IEJhc2U2NCDrrLjsnpDsl7TroZwg7LKY66asXHJcbiAgICAgIGlmIChkYXRhLmltYWdlKSB7XHJcbiAgICAgICAgc2V0UmVzdWx0SW1hZ2UoYGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwke2RhdGEuaW1hZ2V9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gaW1hZ2UgZGF0YSByZWNlaXZlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQVBJIO2YuOy2nCDsmKTrpZg6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUltYWdlVXBsb2FkfSAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgIG1pbj1cIjAuMVwiXHJcbiAgICAgICAgbWF4PVwiMS4wXCJcclxuICAgICAgICBzdGVwPVwiMC4xXCJcclxuICAgICAgICB2YWx1ZT17ZXBzVmFsdWV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFcHNWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT7snbTrr7jsp4Ag7LKY66asPC9idXR0b24+XHJcbiAgICAgIHtyZXN1bHRJbWFnZSAmJiA8aW1nIHNyYz17cmVzdWx0SW1hZ2V9IGFsdD1cIuyymOumrOuQnCDsnbTrr7jsp4BcIiAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVXBsb2FkO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbWFnZVVwbG9hZCIsImltYWdlIiwic2V0SW1hZ2UiLCJlcHNWYWx1ZSIsInNldEVwc1ZhbHVlIiwicmVzdWx0SW1hZ2UiLCJzZXRSZXN1bHRJbWFnZSIsImhhbmRsZUltYWdlVXBsb2FkIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlU3VibWl0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImVycm9yIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJtaW4iLCJtYXgiLCJzdGVwIiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ImageUpload.js\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ImageUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ImageUpload */ \"./components/ImageUpload.js\");\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Adversarial Image Attack\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sande\\\\Desktop\\\\school\\\\DeepFake_Adversarial_attack\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImageUpload__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sande\\\\Desktop\\\\school\\\\DeepFake_Adversarial_attack\\\\pages\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sande\\\\Desktop\\\\school\\\\DeepFake_Adversarial_attack\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvRDtBQUVyQyxTQUFTQztJQUN0QixxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDSCwrREFBV0E7Ozs7Ozs7Ozs7O0FBR2xCO0tBUHdCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZVVwbG9hZCBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlVXBsb2FkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5BZHZlcnNhcmlhbCBJbWFnZSBBdHRhY2s8L2gxPlxyXG4gICAgICA8SW1hZ2VVcGxvYWQgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlVXBsb2FkIiwiSG9tZSIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});