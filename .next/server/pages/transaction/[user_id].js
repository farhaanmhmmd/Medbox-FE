"use strict";
(() => {
var exports = {};
exports.id = 187;
exports.ids = [187];
exports.modules = {

/***/ 4334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _user_id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next-auth/react"
var external_next_auth_react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Navbar/index.js
var Navbar = __webpack_require__(6556);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./constraint/index.js
var constraint = __webpack_require__(9499);
;// CONCATENATED MODULE: ./components/TransactionCards/index.js





function TransactionCards(props) {
    const { trans_id , productName , transactions , totalPrice , status , productImage ,  } = props;
    const rawStatus = status.split("_");
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
            bg: "gray.50",
            h: 100,
            spacing: "95",
            my: "10",
            ml: "20",
            mr: "20",
            px: 6,
            rounded: 6,
            boxShadow: "lg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    unoptimized: true,
                    alt: "resep-logo",
                    width: 70,
                    height: 70,
                    src: constraint.api_origin + productImage
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    w: "180px",
                    fontSize: "md",
                    fontWeight: "bold",
                    children: productName
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    w: "180px",
                    children: [
                        "Status: ",
                        rawStatus.join(" ")
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    w: "180px",
                    children: [
                        "Total Price: Rp. ",
                        totalPrice.toLocaleString("id")
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                    href: `/transactionDetail/${trans_id}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        color: "linkedin.400",
                        variant: "link",
                        children: "Lihat Pesanan"
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./src/config/api.js
var api = __webpack_require__(7220);
;// CONCATENATED MODULE: ./pages/transaction/[user_id].js







function Transaction(props) {
    const { user_id  } = props;
    const { 0: transac , 1: setTransac  } = (0,external_react_.useState)([]);
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(1);
    const { 0: pageSize , 1: setPageSize  } = (0,external_react_.useState)(3);
    const { 0: selected , 1: setSelected  } = (0,external_react_.useState)(0);
    const toast = (0,react_.useToast)();
    (0,external_react_.useEffect)(()=>{
        fetchTransactions();
    }, [
        selected,
        page
    ]);
    const onPrevClick = ()=>{
        setPage(page - 1);
    };
    const onNextClick = ()=>{
        setPage(page + 1);
    };
    const fetchTransactions = async ()=>{
        try {
            const session = await (0,external_next_auth_react_.getSession)();
            const { user_id  } = session.user.user;
            const { user_token  } = session.user;
            const config = {
                params: {
                    page,
                    pageSize
                },
                headers: {
                    Authorization: `Bearer ${user_token}`
                }
            };
            const res = await api["default"].get(`/transactions/getTransactionsByIndex/${user_id}/${selected}`, config);
            setTransac(res.data.data.resFetchTransactions);
        } catch (error) {
            console.log({
                error
            });
            toast({
                title: "Unexpected Fail!",
                description: error.response.data?.message ? error.response.data.message : error.message,
                position: "top",
                status: "error",
                duration: 3000,
                isClosable: true
            });
        }
    };
    function mappedTransactions() {
        return transac?.map((transaction, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(TransactionCards, {
                // transactions={transac.transactions}
                productName: transaction.transaction_details[0].product.productName,
                productImage: transaction.transaction_details[0].product.productImage,
                status: transaction.status,
                totalPrice: transaction.totalPrice,
                trans_id: transaction.transaction_id,
                // quantity={transaction.transaction_details.product.quantity}
                // fetchTransactions={fetchTransactions}
                props: props
            }, transaction.transaction_id);
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-[100vh] w-[100vw]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                fontSize: 30,
                fontWeight: "semibold",
                my: 8,
                ml: 20,
                children: "Riwayat Pemesanan"
            }),
            props.session.user.user.isVerified ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tabs, {
                onChange: (index)=>{
                    setSelected(index), setPage(1);
                },
                mx: 100,
                variant: "soft-rounded",
                colorScheme: "facebook",
                border: "1px",
                borderColor: "gray.200",
                rounded: 10,
                padding: 6,
                marginBottom: 10,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.TabList, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Tab, {
                                children: "Semua"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Tab, {
                                children: "Diproses"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Tab, {
                                children: "Sedang Dikirim"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Tab, {
                                children: "Berhasil"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Tab, {
                                children: "Tidak Berhasil"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Tab, {
                                children: "Menunggu Pembayaran"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Tab, {
                                children: "Menunggu Konfirmasi Pembayaran"
                            })
                        ]
                    }),
                    transac.length ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.TabPanels, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: mappedTransactions()
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: mappedTransactions()
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: mappedTransactions()
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: mappedTransactions()
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: mappedTransactions()
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: mappedTransactions()
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: mappedTransactions()
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                        marginTop: 105,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                src: "/admin/Empty-Transaction.png",
                                width: 250,
                                height: 250
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                paddingTop: 6,
                                fontSize: 18,
                                children: "Tidak Ada Transaksi"
                            })
                        ]
                    }),
                    transac.length ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                        paddingLeft: 210,
                        paddingBottom: 30,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                variant: "outline",
                                marginRight: 2,
                                onClick: onPrevClick,
                                isDisabled: page == 1,
                                colorScheme: "messenger",
                                children: "Prev"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                paddingRight: 2,
                                children: page
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                variant: "outline",
                                onClick: onNextClick,
                                isDisabled: page >= transac.length,
                                colorScheme: "messenger",
                                children: "Next"
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {})
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[100%] h-[50%] flex items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-[1.5rem]",
                    children: "Unverified Account"
                })
            })
        ]
    });
}
async function getServerSideProps(context) {
    try {
        const session = await (0,external_next_auth_react_.getSession)({
            req: context.req
        });
        if (!session) return {
            redirect: {
                destination: "/login"
            }
        };
        const { user_token  } = session.user;
        const { user_id  } = context.params;
        return {
            props: {
                session,
                user_id,
                user_token
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
/* harmony default export */ const _user_id_ = (Transaction);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [907,675,952,664,220,346], () => (__webpack_exec__(4334)));
module.exports = __webpack_exports__;

})();