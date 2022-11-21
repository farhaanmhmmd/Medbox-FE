"use strict";
(() => {
var exports = {};
exports.id = 471;
exports.ids = [471];
exports.modules = {

/***/ 3975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _params_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/AdminNavbar/index.js
var AdminNavbar = __webpack_require__(2522);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/config/api.js
var api = __webpack_require__(7220);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./constraint/index.js
var constraint = __webpack_require__(9499);
;// CONCATENATED MODULE: ./components/editCategoryModal/index.js






function EditCategoryModal({ editCategoryButton , setEditCategoryButton , currentCategory ,  }) {
    const { 0: newCategory , 1: setNewCategory  } = (0,external_react_.useState)({
        category: currentCategory.category,
        categoryImage: currentCategory.categoryImage
    });
    const { 0: categoryImageFile , 1: setCategoryImageFile  } = (0,external_react_.useState)();
    const { 0: newCategoryImage , 1: setNewCategoryImage  } = (0,external_react_.useState)(currentCategory.categoryImage);
    const toast = (0,react_.useToast)();
    const { isOpen , onOpen , onClose  } = (0,react_.useDisclosure)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (editCategoryButton) {
            onOpen();
        } else if (!editCategoryButton) {
            onClose();
        }
        setNewCategory({
            category: currentCategory.category,
            categoryImage: currentCategory.categoryImage
        });
        setNewCategoryImage(currentCategory.categoryImage);
    }, [
        editCategoryButton
    ]);
    async function updateCategoryClick() {
        try {
            setLoading(true);
            if (Object.values(newCategory).includes("") || Object.values(newCategory).includes(undefined)) {
                toast({
                    description: "Tolong Isi Semua",
                    position: "top",
                    status: "error",
                    duration: 3000,
                    isClosable: true
                });
                setLoading(false);
                return;
            }
            const categoryImageFileBody = new FormData();
            categoryImageFileBody.append("categoriesImage", categoryImageFile);
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            };
            const resPatchCategory = await api["default"].patch(`/categoriesLists/categoryUpdate/${currentCategory.category_lists_id}`, {
                newCategory,
                currentCategory
            });
            const extName = newCategory.categoryImage.split(".");
            const resPatchCategoryImage = await api["default"].post(`/categoriesLists/upload/${resPatchCategory.data.data.resUpdateCategoryList.category_lists_id}.${extName[1]}`, categoryImageFileBody, config);
            if (resPatchCategory) {
                setEditCategoryButton(false);
            }
            toast({
                description: resPatchCategory.data.message,
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true
            });
            setLoading(false);
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
            setLoading(false);
            setEditCategoryButton(false);
        }
    }
    function handleImageChange(event) {
        setNewCategoryImage(URL.createObjectURL(event.target.files[0]));
        setNewCategory({
            ...newCategory,
            categoryImage: event.target.files[0].name
        });
        setCategoryImageFile(event.target.files[0]);
    }
    const handleChange = (prop)=>(event)=>{
            setNewCategory({
                ...newCategory,
                [prop]: event.target.value
            });
        };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Modal, {
        isOpen: isOpen,
        onClose: ()=>{
            setEditCategoryButton(false);
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalOverlay, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ModalContent, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalHeader, {
                        children: "Ubah Category"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ModalBody, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Foto"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-[35%] my-[.5vh] hover:cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "hover:cursor-pointer",
                                    htmlFor: "categoryImageInput",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        unoptimized: true,
                                        src: newCategoryImage.includes(constraint.api_origin.slice(0, 16)) ? newCategoryImage : constraint.api_origin + newCategoryImage,
                                        style: {
                                            borderRadius: ".3vw"
                                        },
                                        width: 1,
                                        height: 1,
                                        layout: "responsive"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                onChange: handleImageChange,
                                className: "hidden",
                                id: "categoryImageInput",
                                type: "file"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                value: newCategory.category,
                                onChange: handleChange("category"),
                                placeholder: "Category",
                                size: "lg",
                                height: "11vh",
                                resize: "none"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalFooter, {
                        justifyContent: "space-between",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex w-[50%] justify-end",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    style: {
                                        width: "40%",
                                        marginRight: ".3vw"
                                    },
                                    colorScheme: "linkedin",
                                    isLoading: loading,
                                    onClick: ()=>{
                                        updateCategoryClick();
                                    },
                                    children: "Simpan"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    style: {
                                        width: "40%"
                                    },
                                    onClick: ()=>{
                                        setEditCategoryButton(false);
                                        setNewCategory({
                                            category: ""
                                        });
                                    },
                                    variant: "ghost",
                                    children: "Batal"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const editCategoryModal = (EditCategoryModal);

// EXTERNAL MODULE: ./components/AddCategoryModal/index.js
var AddCategoryModal = __webpack_require__(5533);
;// CONCATENATED MODULE: ./pages/admin/category/[params].js










function Category(props) {
    const { 0: categoryList , 1: setCategoryList  } = (0,external_react_.useState)(props.categoriesLists);
    const { 0: addCategoryButton , 1: setAddCategoryButton  } = (0,external_react_.useState)(false);
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(1);
    const { 0: editCategoryButton , 1: setEditCategoryButton  } = (0,external_react_.useState)(false);
    const { 0: selected , 1: setSelected  } = (0,external_react_.useState)("");
    const { 0: currentCategory , 1: setCurrentCategory  } = (0,external_react_.useState)(props.categoriesLists[0]);
    (0,external_react_.useEffect)(()=>{
        const { params  } = router.query;
        setCategoryList(props.categoriesLists);
        setSelected(params);
    });
    function categoryMap() {
        return categoryList?.map((category, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-[90%] mb-[3vh] h-[15%] flex-none flex flex-col items-end shadow-[0px_6px_20px_0px_rgba(0,28,47,0.05)]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-[100%] h-[25%] pl-[1.5vw] bg-[#008DEB] text-white",
                        children: [
                            "Category ID: ",
                            category.category_lists_id
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-[100%] h-[85%] flex items-center justify-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-[5%] ml-[1.5vw]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    unoptimized: true,
                                    alt: "resep-logo",
                                    layout: "responsive",
                                    width: 1,
                                    height: 1,
                                    src: constraint.api_origin + category.categoryImage,
                                    loader: ()=>{
                                        return constraint.api_origin + category.categoryImage;
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "w-[73%] font-[650] text-[1.1rem] pl-[2vw]",
                                children: category.category
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-[20%] h-[100%] flex items-center justify-evenly",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        variant: "outline",
                                        colorScheme: "linkedin",
                                        onClick: ()=>{
                                            setCurrentCategory(category);
                                            setEditCategoryButton(true);
                                            setCategoryList([
                                                ...categoryList
                                            ]);
                                        },
                                        sx: {
                                            width: "45%",
                                            height: "5vh"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-[12px]",
                                            children: "Edit"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        variant: "outline",
                                        colorScheme: "red",
                                        onClick: ()=>{
                                            deleteProduct(category.category_lists_id);
                                            setCategoryList(props.categoriesLists.splice(index, 1));
                                        },
                                        sx: {
                                            width: "45%",
                                            height: "5vh"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-[12px]",
                                            children: "Hapus"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, category.category_lists_id);
        });
    }
    async function deleteProduct(category_lists_id) {
        try {
            const resDeleteProduct = await api["default"]["delete"](`/categoriesLists/${category_lists_id}`);
        } catch (error) {
            console.log({
                error
            });
        }
    }
    const router = (0,router_.useRouter)();
    const path = router.pathname;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex w-[100vw] h-[100vh]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AdminNavbar/* default */.Z, {
                path: path
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(editCategoryModal, {
                currentCategory: currentCategory,
                editCategoryButton: editCategoryButton,
                setEditCategoryButton: setEditCategoryButton
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(AddCategoryModal/* default */.Z, {
                addCategoryButton: addCategoryButton,
                setAddCategoryButton: setAddCategoryButton
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-[100%] w-[85%] flex flex-col items-center justify-evenly",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-[10%] w-[90%] flex items-center font-[500] text-[3vh]",
                        children: "Category"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col w-[100%] h-[85%] items-center",
                        children: categoryMap()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-[90%] h-[5%] mb-[3vh] items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                disabled: page <= 1,
                                borderRadius: "none",
                                size: "lg",
                                backgroundColor: "#008DEB",
                                color: "white",
                                onClick: ()=>{
                                    setPage(page - 1);
                                    const splitParams = router.query.params.split("=");
                                    splitParams[splitParams.length - 1] = parseInt(splitParams[splitParams.length - 1]) - 1;
                                    const joinParams = splitParams.join("=");
                                    router.replace(`/admin/category/${joinParams}`);
                                },
                                style: {
                                    marginRight: "1vw"
                                },
                                children: "Previous"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                borderRadius: "none",
                                size: "lg",
                                backgroundColor: "#008DEB",
                                color: "white",
                                onClick: ()=>{
                                    setPage(page + 1);
                                    const splitParams = router.query.params.split("=");
                                    splitParams[splitParams.length - 1] = parseInt(splitParams[splitParams.length - 1]) + 1;
                                    const joinParams = splitParams.join("=");
                                    router.replace(`/admin/category/${joinParams}`);
                                },
                                disabled: !props.hasMore,
                                children: "Next"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "grow"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>{
                                    setAddCategoryButton(true);
                                },
                                className: "h-[90%] px-[2vw] bg-[#008DEB] text-white flex items-center hover:cursor-pointer mx-1 font-[700]",
                                children: "+ Tambah Kategori"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    try {
        let resGetCategoriesLists = "";
        if (context.params.params.includes("byId")) {
            const splitParams = context.params.params.split("=");
            const page = splitParams[1];
            resGetCategoriesLists = await api["default"].get("categoriesLists/categoryList/", {
                params: {
                    page,
                    limit: 5
                }
            });
        }
        return {
            props: {
                params: context.params,
                categoriesLists: resGetCategoriesLists.data.data.getCategory,
                hasMore: resGetCategoriesLists.data.hasMore
            }
        };
    } catch (error) {
        console.log({
            error
        });
        return {
            props: {
                error: error.message
            }
        };
    }
}
/* harmony default export */ const _params_ = (Category);


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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [907,675,952,664,220,522,718], () => (__webpack_exec__(3975)));
module.exports = __webpack_exports__;

})();