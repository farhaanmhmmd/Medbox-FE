"use strict";
exports.id = 346;
exports.ids = [346];
exports.modules = {

/***/ 6556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getServerSideProps */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_config_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7220);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);







function Navbar(props) {
    const { 0: session , 1: setSession  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.session);
    const { 0: userId , 1: setUserId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const initialFocusRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useToast)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getSessionAsync();
    }, []);
    const resendVerificationHandler = async ()=>{
        const body = {
            email: session.user.user.email,
            user_id: session.user.user.user_id
        };
        const res = await _src_config_api__WEBPACK_IMPORTED_MODULE_4__["default"].post("/users/resendVerif", body);
        toast({
            description: res.data.message,
            position: "top",
            status: "success",
            duration: 3000,
            isClosable: true
        });
    };
    async function getSessionAsync() {
        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.getSession)();
        if (session) {
            const { user_id  } = session.user.user;
            setUserId(user_id);
        }
        setSession(session);
        async function onLogoutClick() {
            try {
                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signOut)();
            } catch (error) {
                console.log({
                    error
                });
            }
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-[100px] flex items-end desktop:h-[72px] shadow-[0px_6px_20px_0px_rgba(0,28,47,0.05)]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex w-[100%] h-[70px] desktop:h-[100%] items-center justify-between",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex ml-[7vw] h-[70%] items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[20vh]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    className: "hover:cursor-pointer",
                                    src: "/landingpage/Medbox.svg",
                                    alt: "medbox-logo",
                                    layout: "responsive",
                                    width: 20,
                                    height: 10
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "desktop:flex ml-[5vw] justify-between w-[20vw] hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "duration-300 ease-in-out bg-white text-[1vw] font-[500] hover:cursor-pointer hover:shadow-[0px_5px_0px_-2px_rgba(0,141,235,1)]",
                                        children: "Beranda"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/productCatalog",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "duration-300 ease-in-out bg-white text-[1vw] font-[500] hover:cursor-pointer hover:shadow-[0px_5px_0px_-2px_rgba(0,141,235,1)]",
                                        children: "Toko Obat"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: `/transaction/${userId}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "duration-300 ease-in-out bg-white text-[1vw] font-[500] hover:cursor-pointer hover:shadow-[0px_5px_0px_-2px_rgba(0,141,235,1)]",
                                        children: "Riwayat"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grow"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex mr-[8vw] h-[70%] items-center justify-end w-[20vw]",
                    children: [
                        !session?.user.user.isVerified && session ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Popover, {
                            initialFocusRef: initialFocusRef,
                            placement: "bottom",
                            closeOnBlur: false,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.PopoverTrigger, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                        color: "red.400",
                                        variant: "ghost",
                                        children: "Unverified Account"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.PopoverContent, {
                                    w: "11vw",
                                    h: "7.5vh",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.PopoverArrow, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.PopoverHeader, {
                                            pt: 4,
                                            fontWeight: "bold",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            border: "0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                colorScheme: "linkedin",
                                                variant: "solid",
                                                onClick: resendVerificationHandler,
                                                children: "Resend Verification"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }) : "",
                        session && session.user.user.isVerified ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[3.5vw] desktop:w-[1.2vw] hover:cursor-pointer ml-[4.5vw] desktop:ml-[2vw]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: `/cart/${userId}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "/landingpage/Cart.svg",
                                    alt: "cart-logo",
                                    layout: "responsive",
                                    width: 19.2,
                                    height: 20.4
                                })
                            })
                        }) : "",
                        session && session.user.user.isVerified ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hidden desktop:inline w-[3.5vw] desktop:w-[1.2vw] hover:cursor-pointer ml-[4.5vw] desktop:ml-[2vw]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/profile",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "/landingpage/Account.svg",
                                    alt: "menu-logo",
                                    layout: "responsive",
                                    width: 20,
                                    height: 20
                                })
                            })
                        }) : ""
                    ]
                }),
                session ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden desktop:flex desktop:ml-[-5vw]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        onClick: ()=>{
                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signOut)();
                        },
                        variant: "outline",
                        colorScheme: "linkedin",
                        sx: {
                            width: "6vw",
                            height: "5vh",
                            borderRadius: "1.2vh",
                            marginRight: "2vw"
                        },
                        children: "Logout"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden desktop:flex desktop:ml-[-8vw]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "/login",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            variant: "outline",
                            colorScheme: "linkedin",
                            sx: {
                                width: "6vw",
                                height: "5vh",
                                borderRadius: "1.2vh",
                                marginRight: "2vw"
                            },
                            children: "Login"
                        })
                    })
                })
            ]
        })
    });
}
async function getServerSideProps(context) {
    try {
        const session = await getSession({
            req: context.req
        });
        return {
            props: {
                session
            }
        };
    } catch (error) {
        console.log({
            error
        });
        return {
            props: {
                error
            }
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 9499:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _api = __webpack_require__(7220);
const api_origin = _api.API_URL;
module.exports = {
    api_origin
};


/***/ })

};
;