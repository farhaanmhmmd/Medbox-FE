"use strict";
exports.id = 718;
exports.ids = [718];
exports.modules = {

/***/ 5533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_config_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7220);





function AddCategoryModal({ addCategoryButton , setAddCategoryButton  }) {
    const { 0: category , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        category: "",
        categoryImage: ""
    });
    const { 0: categoryImage , 1: setCategoryImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: newProductImage , 1: setNewProductImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("/admin/TambahProduk.svg");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (addCategoryButton) {
            onOpen();
        } else if (!addCategoryButton) {
            onClose();
        }
        setCategory({
            ...category
        });
    }, [
        addCategoryButton,
        loading
    ]);
    const handleChange = (prop)=>(event)=>{
            setCategory({
                ...category,
                [prop]: event.target.value
            });
        };
    function handleImageChange(event) {
        setNewProductImage(URL.createObjectURL(event.target.files[0]));
        setCategory({
            ...category,
            categoryImage: event.target.files[0].name
        });
        setCategoryImage(event.target.files[0]);
    }
    const saveCategoryButtonClick = async ()=>{
        try {
            setLoading(true);
            if (Object.values(category).includes("")) {
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
            const body = new FormData();
            body.append("categoriesImage", categoryImage);
            //   const config = {
            //     headers: { 'Content-Type': 'multipart/form-data' },
            //   };
            const resAddCategory = await _src_config_api__WEBPACK_IMPORTED_MODULE_4__["default"].post("/categoriesLists", category);
            const extName = category.categoryImage.split(".");
            const resAddCategoryImage = await _src_config_api__WEBPACK_IMPORTED_MODULE_4__["default"].post(`/categoriesLists/upload/${resAddCategory.data.data.newCategories.category_lists_id}.${extName[1]}`, body);
            toast({
                description: resAddCategory.data.message,
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true
            });
            setLoading(false);
            setAddCategoryButton(false);
        } catch (error) {
            console.log({
                error
            });
            setAddCategoryButton(false);
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        isOpen: isOpen,
        onClose: ()=>{
            setAddCategoryButton(false);
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
                        children: "Tambah Category"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Foto"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[35%] my-[.5vh] hover:cursor-pointer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "hover:cursor-pointer",
                                    htmlFor: "categoryImageInput",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        unoptimized: true,
                                        src: newProductImage,
                                        style: {
                                            borderRadius: ".3vw"
                                        },
                                        width: 1,
                                        height: 1,
                                        layout: "responsive"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                onChange: handleImageChange,
                                className: "hidden",
                                id: "categoryImageInput",
                                type: "file"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                value: category.category,
                                onChange: handleChange("category"),
                                placeholder: "Category",
                                size: "lg",
                                height: "11vh",
                                resize: "none"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {
                        justifyContent: "space-between",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex w-[50%] justify-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    style: {
                                        width: "40%",
                                        marginRight: ".3vw"
                                    },
                                    colorScheme: "linkedin",
                                    onClick: ()=>{
                                        saveCategoryButtonClick();
                                    },
                                    children: "Simpan"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    style: {
                                        width: "40%"
                                    },
                                    onClick: ()=>{
                                        setAddCategoryButton(false);
                                        setCategory({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCategoryModal);


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