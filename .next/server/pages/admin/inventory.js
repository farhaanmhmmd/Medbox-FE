"use strict";
(() => {
  var exports = {};
  exports.id = 371;
  exports.ids = [371, 220];
  exports.modules = {
    /***/ 5905: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */ getServerSideProps: () =>
          /* binding */ getServerSideProps,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(997);
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
        );
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(1853);
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_1__
        );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(6689);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(1649);
      /* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_auth_react__WEBPACK_IMPORTED_MODULE_3__
        );
      /* harmony import */ var _src_config_api__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(7220);

      function Index() {
        const router = (0,
        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          "div",
          {}
        );
      }
      async function getServerSideProps(context) {
        try {
          const session = await (0,
          next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getSession)({
            req: context.req,
          });
          if (!session)
            return {
              redirect: {
                destination: "/login",
              },
            };
          if (!session.user.user.isAdmin) {
            return {
              redirect: {
                destination: "/",
              },
            };
          }
          return {
            redirect: {
              destination: "/admin/inventory/byId=1",
            },
          };
        } catch (error) {
          console.log({
            error,
          });
          return {
            props: {
              error: error.message,
            },
          };
        }
      }
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Index;

      /***/
    },

    /***/ 7220: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ API_URL: () => /* binding */ API_URL,
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(2167);
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

      const API_URL = "http://159.223.93.68:8000";
      // process.env.NEXT_PUBLIC_API || 'http://159.223.93.68:8000';
      const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create(
        {
          baseURL: API_URL,
        }
      );
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        axiosInstance;

      /***/
    },

    /***/ 2167: /***/ (module) => {
      module.exports = require("axios");

      /***/
    },

    /***/ 1649: /***/ (module) => {
      module.exports = require("next-auth/react");

      /***/
    },

    /***/ 1853: /***/ (module) => {
      module.exports = require("next/router");

      /***/
    },

    /***/ 6689: /***/ (module) => {
      module.exports = require("react");

      /***/
    },

    /***/ 997: /***/ (module) => {
      module.exports = require("react/jsx-runtime");

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require("../../webpack-runtime.js");
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__(5905);
  module.exports = __webpack_exports__;
})();
