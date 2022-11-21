"use strict";
(() => {
var exports = {};
exports.id = 122;
exports.ids = [122];
exports.modules = {

/***/ 4454:
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
/* harmony import */ var _src_config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7220);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






function AddFormulaModal({ addFormulaButton , setAddFormulaButton , allProducts ,  }) {
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
    const { 0: quantity , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: option , 1: setOption  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: id , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: tempFormula , 1: setTempFormula  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: deleted , 1: setDeleted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: disabled , 1: setDisabled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: amount , 1: setAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        checkSameProduct();
        if (addFormulaButton) {
            onOpen();
        } else if (!addFormulaButton) {
            onClose();
        }
    }, [
        addFormulaButton,
        quantity,
        tempFormula,
        option
    ]);
    const onHandleNameChange = (e)=>{
        setName(e.target.value);
    };
    const onHandleOptionChange = (e)=>{
        setOption(e.target.value);
    };
    const onHandleQuantityChange = (e)=>{
        setQuantity(e.target.value);
    };
    const onHandleAmountChange = (e)=>{
        setAmount(e.target.value);
    };
    function checkSameProduct() {
        tempFormula.forEach((product)=>{
            if (option == product.productName) {
                setDisabled(true);
            } else {
                setDisabled(false);
            }
        });
    }
    const onAddClick = ()=>{
        {
            setTempFormula([
                ...tempFormula,
                {
                    productName: option,
                    quantity
                }, 
            ]), setQuantity(0), setOption("");
        }
    };
    async function onSaveClick() {
        try {
            setLoading(true);
            const body = {
                productName: name,
                formula: tempFormula,
                amount: amount
            };
            const res = await _src_config_api__WEBPACK_IMPORTED_MODULE_3__["default"].post("/products/concoction", body);
            if (res) {
                toast({
                    title: "Concoction Created!",
                    description: res.data.message,
                    position: "top",
                    status: "success",
                    duration: 3000,
                    isClosable: true
                });
                setLoading(false);
                setAddFormulaButton(false);
                setTempFormula([]), setQuantity(0);
                setDeleted(0), setName(""), setAmount(0);
            }
        } catch (error) {
            toast({
                title: "Create Concoction Failed!",
                description: error.response.data?.message ? error.response.data.message : error.message,
                position: "top",
                status: "error",
                duration: 3000,
                isClosable: true
            });
            console.log({
                Error: error.response.data
            });
            setLoading(false);
            setAddFormulaButton(false);
            setTempFormula([]), setQuantity(0);
            setDeleted(0), setName(""), setAmount(0);
        }
    }
    function tempFormulaMap() {
        return tempFormula.map((tempForm, index)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                    spacing: 2,
                    bg: "gray.100",
                    border: "1px",
                    borderColor: "gray.100",
                    my: 1,
                    mx: 6,
                    rounded: 6,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            ml: 10,
                            mr: 2,
                            my: 2,
                            fontSize: "md",
                            fontWeight: "semibold",
                            children: tempForm.productName
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            fontSize: "s",
                            children: [
                                "x",
                                tempForm.quantity
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            variant: "ghost",
                            colorScheme: "red",
                            isLoading: loading,
                            onClick: ()=>{
                                let tempArray = tempFormula;
                                tempArray.splice(index, 1);
                                setTempFormula(tempArray);
                                setDeleted(deleted + 1);
                            },
                            children: "x"
                        })
                    ]
                })
            });
        });
    }
    function productNameMap() {
        return allProducts?.map((product)=>{
            if (!product.formula) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                    value: `${product.productName}`,
                    children: product.productName
                }, product.product_id);
            }
        });
    }
    {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
            isOpen: isOpen,
            onClose: ()=>{
                setAddFormulaButton(false), setTempFormula([]), setQuantity(0);
                setDeleted(0), setName(""), setAmount(0);
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
                            children: "Tambah Obat Racikan"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                    mb: 2,
                                    type: "text",
                                    placeholder: "Nama Obat",
                                    onChange: onHandleNameChange
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                                    my: 3,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            children: "Jumlah Racikan:"
                                        }),
                                        amount == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            colorScheme: "linkedin",
                                            variant: "ghost",
                                            isDisabled: true,
                                            onClick: ()=>{
                                                setAmount(amount - 1);
                                            },
                                            children: "-"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            colorScheme: "linkedin",
                                            variant: "ghost",
                                            onClick: ()=>{
                                                setAmount(amount - 1);
                                            },
                                            children: "-"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                            placeholder: "Jumlah Racikan",
                                            type: "text",
                                            width: "70px",
                                            value: amount,
                                            onChange: onHandleAmountChange
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            colorScheme: "linkedin",
                                            variant: "ghost",
                                            onClick: ()=>{
                                                setAmount(amount + 1);
                                            },
                                            children: "+"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                            name: "productName",
                                            placeholder: "Pilih Obat",
                                            onChange: onHandleOptionChange,
                                            children: productNameMap()
                                        }),
                                        quantity == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            colorScheme: "linkedin",
                                            variant: "ghost",
                                            isDisabled: true,
                                            onClick: ()=>{
                                                setQuantity(quantity - 1);
                                            },
                                            children: "-"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            colorScheme: "linkedin",
                                            variant: "ghost",
                                            onClick: ()=>{
                                                setQuantity(quantity - 1);
                                            },
                                            children: "-"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                            type: "text",
                                            width: "70px",
                                            value: quantity,
                                            onChange: onHandleQuantityChange
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            colorScheme: "linkedin",
                                            variant: "ghost",
                                            onClick: ()=>{
                                                setQuantity(quantity + 1);
                                            },
                                            children: "+"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            rounded: 10,
                            border: "1px",
                            borderColor: "gray.100",
                            py: 2,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                                children: [
                                    tempFormulaMap(),
                                    tempFormula.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        height: "20px",
                                        width: "110px",
                                        variant: "ghost",
                                        fontSize: "small",
                                        fontWeight: "normal",
                                        colorScheme: "red",
                                        isLoading: loading,
                                        onClick: ()=>{
                                            setTempFormula([]);
                                        },
                                        children: "Hapus Semua"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    variant: "ghost",
                                    colorScheme: "red",
                                    mr: 3,
                                    onClick: ()=>{
                                        setAddFormulaButton(false), setTempFormula([]), setQuantity(0);
                                        setDeleted(0), setName(""), setAmount(0);
                                    },
                                    children: "Batal"
                                }),
                                quantity == 0 || option == "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    mr: 2,
                                    isDisabled: true,
                                    colorScheme: "linkedin",
                                    variant: "outline",
                                    onClick: ()=>{
                                        setTempFormula([
                                            ...tempFormula,
                                            {
                                                productName: option,
                                                quantity
                                            }, 
                                        ]);
                                    },
                                    children: "Tambah"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    mr: 2,
                                    colorScheme: "linkedin",
                                    variant: "outline",
                                    isDisabled: disabled,
                                    onClick: onAddClick,
                                    children: "Tambah"
                                }),
                                name && tempFormula.length && amount > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    colorScheme: "teal",
                                    variant: "outline",
                                    isLoading: loading,
                                    onClick: onSaveClick,
                                    children: "Simpan"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    colorScheme: "teal",
                                    variant: "outline",
                                    isLoading: loading,
                                    isDisabled: true,
                                    onClick: ()=>{},
                                    children: "Simpan"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddFormulaModal);


/***/ }),

/***/ 3332:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);






function AddProductModal({ addProductButton , setAddProductButton , categoriesLists ,  }) {
    const { 0: productStock , 1: setProductStock  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: productImageFile , 1: setProductImageFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: newProductImage , 1: setNewProductImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("/admin/TambahProduk.svg");
    const { 0: productInputs , 1: setProductInputs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        categoryInfo: "",
        description: "",
        packageType: "",
        productImage: "",
        productName: "",
        productPrice: "",
        productStock: "",
        defaultQuantity: "",
        servingType: ""
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (addProductButton) {
            onOpen();
        } else if (!addProductButton) {
            onClose();
        }
        setProductInputs({
            ...productInputs,
            productStock
        });
    }, [
        addProductButton,
        loading,
        productStock
    ]);
    const handleChange = (prop)=>(event)=>{
            setProductInputs({
                ...productInputs,
                [prop]: event.target.value
            });
        };
    function handleImageChange(event) {
        setNewProductImage(URL.createObjectURL(event.target.files[0]));
        setProductInputs({
            ...productInputs,
            productImage: event.target.files[0].name
        });
        setProductImageFile(event.target.files[0]);
    }
    async function saveProductButtonClick() {
        try {
            setLoading(true);
            if (Object.values(productInputs).includes("")) {
                toast({
                    title: "Alert!",
                    description: "Tolong isi semua field",
                    position: "top",
                    status: "error",
                    duration: 3000,
                    isClosable: true
                });
                setLoading(false);
                return;
            }
            const productImageFileBody = new FormData();
            productImageFileBody.append("productImageFile", productImageFile);
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            };
            const resAddProduct = await _src_config_api__WEBPACK_IMPORTED_MODULE_4__["default"].post("/products/newProduct", productInputs);
            const extName = productInputs.productImage.split(".");
            await _src_config_api__WEBPACK_IMPORTED_MODULE_4__["default"].post(`/products/newProductImage/${resAddProduct.data.resCreateProduct.product_id}.${extName[1]}`, productImageFileBody, config);
            if (resAddProduct) {
                setLoading(false);
                setAddProductButton(false);
            }
        } catch (error) {
            toast({
                title: "Add Product Failed!",
                description: error.response.data?.message ? error.response.data.message : error.message,
                position: "top",
                status: "error",
                duration: 3000,
                isClosable: true
            });
            console.log({
                error
            });
            setLoading(false);
            setAddProductButton(false);
        }
    }
    function categoriesMap() {
        return categoriesLists?.map((category)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: `${category.category_lists_id}=-=${category.category}`,
                children: category.category
            }, category.category_lists_id);
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        isOpen: isOpen,
        onClose: ()=>{
            setAddProductButton(false);
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
                        children: "Tambah Produk"
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
                                    htmlFor: "productImageInput",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        unoptimized: true,
                                        style: {
                                            borderRadius: ".3vw"
                                        },
                                        src: newProductImage,
                                        width: 1,
                                        height: 1,
                                        layout: "responsive"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                onChange: handleImageChange,
                                className: "hidden",
                                id: "productImageInput",
                                type: "file"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                value: productInputs.productName,
                                onChange: handleChange("productName"),
                                size: "lg",
                                marginY: ".5vh",
                                placeholder: "Nama Produk"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-between my-[.5vh]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                        value: productInputs.categoryInfo,
                                        onChange: handleChange("categoryInfo"),
                                        size: "lg",
                                        width: "55%",
                                        placeholder: "Kategori",
                                        children: categoriesMap()
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        onClick: ()=>{
                                            router.replace("/admin/category");
                                        },
                                        size: "lg",
                                        children: "Tambah +"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                type: "number",
                                value: productInputs.productPrice,
                                onChange: handleChange("productPrice"),
                                size: "lg",
                                marginY: ".5vh",
                                placeholder: "Harga"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                value: productInputs.packageType,
                                onChange: handleChange("packageType"),
                                size: "lg",
                                marginY: ".5vh",
                                placeholder: "Kemasan"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                value: productInputs.servingType,
                                onChange: handleChange("servingType"),
                                size: "lg",
                                marginY: ".5vh",
                                placeholder: "Unit Satuan"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                type: "number",
                                value: productInputs.defaultQuantity,
                                onChange: handleChange("defaultQuantity"),
                                size: "lg",
                                marginY: ".5vh",
                                placeholder: "Jumlah Per Kemasan"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
                                onChange: handleChange("description"),
                                value: productInputs.description,
                                placeholder: "Description",
                                size: "lg",
                                height: "11vh",
                                resize: "none"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-[50%] justify-evenly",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        colorScheme: "linkedin",
                                        variant: "ghost",
                                        disabled: true,
                                        children: "<"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                        value: productStock,
                                        disabled: true,
                                        className: "w-[2.5vw] mx-[1vw] flex items-center justify-center bg-gray-200 rounded-[.2vw]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        colorScheme: "linkedin",
                                        variant: "ghost",
                                        disabled: true,
                                        children: ">"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-[50%] justify-end",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        style: {
                                            width: "40%",
                                            marginRight: ".3vw"
                                        },
                                        isLoading: loading,
                                        colorScheme: "linkedin",
                                        onClick: ()=>{
                                            saveProductButtonClick();
                                        },
                                        children: "Simpan"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        style: {
                                            width: "40%"
                                        },
                                        onClick: ()=>{
                                            setAddProductButton(false);
                                            setProductInputs({
                                                categoryInfo: "",
                                                description: "",
                                                packageType: "",
                                                productImage: "",
                                                productName: "",
                                                productPrice: "",
                                                productStock: "",
                                                defaultQuantity: "",
                                                servingType: ""
                                            });
                                        },
                                        variant: "ghost",
                                        children: "Batal"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddProductModal);


/***/ }),

/***/ 1488:
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
/* harmony import */ var _constraint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9499);
/* harmony import */ var _constraint__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_constraint__WEBPACK_IMPORTED_MODULE_5__);






function AdminProductDetails({ currentProduct , openProductDetails , setOpenProductDetails ,  }) {
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
    const { productName , description , isPublic , category , packageType , productImage , productPrice , defaultQuantity , productStock , product_id , servingType , createdAt , updatedAt ,  } = currentProduct;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (openProductDetails) {
            onOpen();
        } else if (!openProductDetails) {
            onClose();
        }
    }, [
        openProductDetails
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        isOpen: isOpen,
        onClose: ()=>{
            setOpenProductDetails(false);
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
                        children: [
                            "Produk: ",
                            productName
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Foto"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[35%] my-[.1vh] hover:cursor-not-allowed",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "hover:cursor-not-allowed",
                                    htmlFor: "productImageInput",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        unoptimized: true,
                                        style: {
                                            borderRadius: ".3vw"
                                        },
                                        src: productImage.includes(_constraint__WEBPACK_IMPORTED_MODULE_5__.api_origin) ? productImage : _constraint__WEBPACK_IMPORTED_MODULE_5__.api_origin + productImage,
                                        width: 1,
                                        height: 1,
                                        layout: "responsive",
                                        loader: ()=>{
                                            return productImage.includes(_constraint__WEBPACK_IMPORTED_MODULE_5__.api_origin) ? productImage : _constraint__WEBPACK_IMPORTED_MODULE_5__.api_origin + productImage;
                                        }
                                    })
                                })
                            }),
                            "Kategori",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                disabled: true,
                                backgroundColor: "gray.300",
                                value: category,
                                size: "lg",
                                marginY: ".1vh",
                                placeholder: "Kategori"
                            }),
                            "Harga",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                disabled: true,
                                backgroundColor: "gray.300",
                                value: productPrice,
                                size: "lg",
                                marginY: ".1vh",
                                placeholder: "Harga"
                            }),
                            "Kemasan",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                disabled: true,
                                backgroundColor: "gray.300",
                                value: packageType,
                                size: "lg",
                                marginY: ".1vh",
                                placeholder: "Kemasan"
                            }),
                            "Satuan Unit",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                disabled: true,
                                backgroundColor: "gray.300",
                                value: servingType,
                                size: "lg",
                                marginY: ".1vh",
                                placeholder: "Unit Satuan"
                            }),
                            "Default Quantity",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                disabled: true,
                                backgroundColor: "gray.300",
                                value: defaultQuantity,
                                size: "lg",
                                marginY: ".5vh",
                                placeholder: "Jumlah Per Kemasan"
                            }),
                            "Deskripsi",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
                                disabled: true,
                                backgroundColor: "gray.300",
                                value: description,
                                placeholder: "Description",
                                size: "lg",
                                height: "11vh",
                                resize: "none"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminProductDetails);


/***/ }),

/***/ 5224:
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
/* harmony import */ var _constraint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9499);
/* harmony import */ var _constraint__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_constraint__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);







function EditProductModal({ currentProduct , editProductButton , setEditProductButton , categoriesLists , productList , setProductList ,  }) {
    const { 0: productStock , 1: setProductStock  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentProduct.productStock);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: productImageFile , 1: setProductImageFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: productInputs , 1: setProductInputs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        categoryInfo: `${currentProduct.category_lists_id}=-=${currentProduct.category}`,
        description: currentProduct.description,
        packageType: currentProduct.packageType,
        productImage: currentProduct.productImage,
        productName: currentProduct.productName,
        productPrice: currentProduct.productPrice,
        productStock: currentProduct.productStock,
        defaultQuantity: currentProduct.defaultQuantity,
        servingType: currentProduct.servingType
    });
    const { 0: newProductImage , 1: setNewProductImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentProduct.productImage);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (editProductButton) {
            onOpen();
        } else if (!editProductButton) {
            onClose();
        }
        setProductInputs({
            categoryInfo: currentProduct.category_lists_id ? `${currentProduct.category_lists_id}=-=${currentProduct.category}` : undefined,
            description: currentProduct.description,
            packageType: currentProduct.packageType,
            productImage: currentProduct.productImage,
            productName: currentProduct.productName,
            productPrice: currentProduct.productPrice,
            productStock,
            defaultQuantity: currentProduct.defaultQuantity,
            servingType: currentProduct.servingType
        });
        setNewProductImage(currentProduct.productImage);
    }, [
        editProductButton,
        productStock
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setProductStock(currentProduct.productStock);
    }, [
        currentProduct
    ]);
    async function updateProductClick() {
        try {
            setLoading(true);
            if (Object.values(productInputs).includes( false || undefined)) {
                toast({
                    title: "Warning!",
                    description: "Tolong isi semua field",
                    position: "top",
                    status: "error",
                    duration: 3000,
                    isClosable: true
                });
                setLoading(false);
                return;
            }
            const productImageFileBody = new FormData();
            productImageFileBody.append("productImageFile", productImageFile);
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            };
            const resAddProduct = await _src_config_api__WEBPACK_IMPORTED_MODULE_4__["default"].patch(`/products/productsUpdate/${currentProduct.product_id}`, {
                productInputs,
                currentProduct
            });
            const extName = productInputs.productImage.split(".");
            await _src_config_api__WEBPACK_IMPORTED_MODULE_4__["default"].post(`/products/newProductImage/${resAddProduct.data.resUpdateProduct.product_id}.${extName[1]}`, productImageFileBody, config);
            toast({
                title: "Success!",
                description: "Success edit product",
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true
            });
            setLoading(false);
            setEditProductButton(false);
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
        }
    }
    function categoriesMap() {
        return categoriesLists.map((category)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: `${category.category_lists_id}=-=${category.category}`,
                children: category.category
            }, category.category_lists_id);
        });
    }
    function handleImageChange(event) {
        setNewProductImage(URL.createObjectURL(event.target.files[0]));
        setProductInputs({
            ...productInputs,
            productImage: event.target.files[0].name
        });
        setProductImageFile(event.target.files[0]);
    }
    const handleChange = (prop)=>(event)=>{
            setProductInputs({
                ...productInputs,
                [prop]: event.target.value
            });
        };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        isOpen: isOpen,
        onClose: ()=>{
            setEditProductButton(false);
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
                        children: [
                            "Edit ",
                            currentProduct.productName
                        ]
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
                                    htmlFor: "productImageInput",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        unoptimized: true,
                                        style: {
                                            borderRadius: ".3vw"
                                        },
                                        src: newProductImage.includes("localhost") ? newProductImage : _constraint__WEBPACK_IMPORTED_MODULE_5__.api_origin + newProductImage,
                                        width: 1,
                                        height: 1,
                                        layout: "responsive",
                                        loader: ()=>{
                                            return newProductImage.includes(_constraint__WEBPACK_IMPORTED_MODULE_5__.api_origin) ? newProductImage : _constraint__WEBPACK_IMPORTED_MODULE_5__.api_origin + newProductImage;
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                onChange: handleImageChange,
                                className: "hidden",
                                id: "productImageInput",
                                type: "file"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                value: productInputs.productName,
                                onChange: handleChange("productName"),
                                size: "lg",
                                marginY: ".5vh",
                                placeholder: "Nama Produk"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-between my-[.5vh]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                        value: productInputs.categoryInfo,
                                        onChange: handleChange("categoryInfo"),
                                        size: "lg",
                                        width: "55%",
                                        placeholder: "Kategori",
                                        children: categoriesMap()
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        onClick: ()=>{
                                            router.replace("/admin/category");
                                        },
                                        size: "lg",
                                        children: "Tambah +"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                type: "number",
                                value: productInputs.productPrice,
                                onChange: handleChange("productPrice"),
                                size: "lg",
                                marginY: ".5vh",
                                placeholder: "Harga"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                value: productInputs.packageType,
                                onChange: handleChange("packageType"),
                                size: "lg",
                                marginY: ".5vh",
                                placeholder: "Kemasan"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                value: productInputs.servingType,
                                onChange: handleChange("servingType"),
                                size: "lg",
                                marginY: ".5vh",
                                placeholder: "Unit Satuan"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                type: "number",
                                value: productInputs.defaultQuantity,
                                onChange: handleChange("defaultQuantity"),
                                size: "lg",
                                marginY: ".5vh",
                                placeholder: "Jumlah Per Kemasan"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Textarea, {
                                onChange: handleChange("description"),
                                value: productInputs.description,
                                placeholder: "Description",
                                size: "lg",
                                height: "11vh",
                                resize: "none"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, {
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-[50%] justify-evenly",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        colorScheme: "linkedin",
                                        variant: "ghost",
                                        disabled: true,
                                        children: "<"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                        disabled: true,
                                        value: productStock,
                                        className: "w-[2.5vw] mx-[1vw] flex items-center justify-center bg-gray-200 rounded-[.2vw]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        colorScheme: "linkedin",
                                        variant: "ghost",
                                        disabled: true,
                                        children: ">"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-[50%] justify-end",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        style: {
                                            width: "40%",
                                            marginRight: ".3vw"
                                        },
                                        isLoading: loading,
                                        colorScheme: "linkedin",
                                        onClick: ()=>{
                                            updateProductClick();
                                        },
                                        children: "Update"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        style: {
                                            width: "40%"
                                        },
                                        onClick: ()=>{
                                            setEditProductButton(false);
                                            setProductInputs({
                                                categoryInfo: "",
                                                description: "",
                                                packageType: "",
                                                productImage: "",
                                                productName: "",
                                                productPrice: "",
                                                productStock: "",
                                                defaultQuantity: "",
                                                servingType: ""
                                            });
                                        },
                                        variant: "ghost",
                                        children: "Batal"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditProductModal);


/***/ }),

/***/ 4167:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AdminNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2522);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4563);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_config_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7220);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_AddFormulaModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4454);
/* harmony import */ var _components_AddProductModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3332);
/* harmony import */ var _components_adminProductDetails__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1488);
/* harmony import */ var _components_editProductModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5224);
/* harmony import */ var _components_AddCategoryModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5533);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _constraint_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9499);
/* harmony import */ var _constraint_index__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_constraint_index__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















function Inventory(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { params  } = router.query;
    const splitParams = params.split("=");
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: showCategories , 1: setShowCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: productList , 1: setProductList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.products);
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(parseInt(splitParams[splitParams.length - 1]));
    const { 0: searchKeyword , 1: setSearchKeyword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: currentProduct , 1: setCurrentProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.products[0]);
    const { 0: addProductButton , 1: setAddProductButton  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: openProductDetails , 1: setOpenProductDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: editProductButton , 1: setEditProductButton  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: productsAll , 1: setProductsAll  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.productsAll);
    const { 0: addFormulaButton , 1: setAddFormulaButton  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setProductList(props.products);
        setProductsAll(props.productsAll);
        setSelected(params);
    });
    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_15__.useSession)();
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast)();
    if (session.data) {
        if (!session.data.user.user.isAdmin) {
            router.replace("/");
        }
    }
    function showCategoriesSwitch() {
        setShowCategories(!showCategories);
    }
    function categoriesMap() {
        return props.categoriesLists.categories.map((category)=>{
            const selectedCategoryListsId = selected.split("=")[0];
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>{
                    router.replace(`/admin/inventory/${category.category_lists_id}=category=1`);
                    setCurrentPage(1);
                    setSearchKeyword("");
                },
                className: selectedCategoryListsId == category.category_lists_id ? "h-[7vh] pl-[1vw] flex items-center font-[400] text-[1.1rem] text-white cursor-pointer bg-[#008DEB]" : "h-[7vh] pl-[1vw] flex items-center font-[400] text-[1.1rem] border-transparent hover:text-white hover:cursor-pointer hover:bg-[#008DEB] bg-white",
                children: category.category.length <= 20 ? category.category : `${category.category.slice(0, 20)}...`
            }, category.category_lists_id);
        });
    }
    function productMap() {
        return productList?.map((product, index)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-[90%] mb-[1%] h-[30%] flex-none flex flex-col items-end bg-white",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "pl-[1.5vw] flex w-[100%] bg-[#008DEB] text-white",
                        children: [
                            "Product ID: ",
                            product.product_id
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-[100%] h-[85%] flex-none flex justify-center items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>{
                                    setCurrentProduct(product);
                                    setOpenProductDetails(true);
                                },
                                className: "w-[7vw] ml-[1.5vw] hover:cursor-pointer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    unoptimized: true,
                                    alt: "resep-logo",
                                    layout: "responsive",
                                    width: 1,
                                    height: 1,
                                    src: _constraint_index__WEBPACK_IMPORTED_MODULE_16__.api_origin + product.productImage,
                                    loader: ()=>{
                                        return _constraint_index__WEBPACK_IMPORTED_MODULE_16__.api_origin + product.productImage;
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col w-[70%] text-black h-[7vw] justify-center pl-[2vw] text-[#6E6E6E]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-[500] text-[1.5rem]",
                                        children: product.productName.length <= 40 ? product.productName : `${product.productName.slice(0, 40)}...`
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-[1.1rem] font-[400]",
                                        children: [
                                            "Rp.",
                                            product.productPrice.toLocaleString("id")
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-[1.1rem] font-[400]",
                                        children: [
                                            "Stok ",
                                            product.productStock
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        href: `/admin/adminDetailProduct/${product.product_id}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                            width: 125,
                                            bgColor: "white",
                                            _hover: "white",
                                            variant: "solid",
                                            color: "blue.400",
                                            children: "Riwayat Produk"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grow"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-[10%] flex flex-col h-[7vw] justify-evenly mr-[1.5vw]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                        variant: "outline",
                                        colorScheme: "linkedin",
                                        onClick: ()=>{
                                            setCurrentProduct(product);
                                            setEditProductButton(true);
                                        },
                                        sx: {
                                            width: "100%",
                                            height: "5vh"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-[12px]",
                                            children: "Edit"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                        variant: "outline",
                                        colorScheme: "red",
                                        onClick: ()=>{
                                            deleteProduct(product.product_id, index);
                                        },
                                        sx: {
                                            width: "100%",
                                            height: "5vh"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-[12px]",
                                            children: "Hapus"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, product.product_id);
        });
    }
    async function deleteProduct(product_id, index) {
        try {
            await _src_config_api__WEBPACK_IMPORTED_MODULE_8__["default"]["delete"](`/products/${product_id}`);
            setProductList(props.products.splice(index, 1));
        } catch (error) {
            console.log({
                error
            });
            toast({
                title: "Unexpected Fail!",
                description: error.response?.data?.message ? error.response.data.message : error.message,
                position: "top",
                status: "error",
                duration: 3000,
                isClosable: true
            });
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex w-[100vw] h-[100vh]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AdminNavbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                path: router.pathname
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col w-[85%] items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-[10%] w-[90%] flex items-center font-[500] text-[3vh]",
                        children: "Inventory"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AddFormulaModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        addFormulaButton: addFormulaButton,
                        setAddFormulaButton: setAddFormulaButton,
                        allProducts: props.productsAll.data.resGetAllProducts
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AddProductModal__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        addProductButton: addProductButton,
                        setAddProductButton: setAddProductButton,
                        categoriesLists: props.categoriesLists.categories
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_editProductModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        currentProduct: currentProduct,
                        editProductButton: editProductButton,
                        productList: productList,
                        setProductList: setProductList,
                        setEditProductButton: setEditProductButton,
                        categoriesLists: props.categoriesLists.categories
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_adminProductDetails__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        currentProduct: currentProduct,
                        openProductDetails: openProductDetails,
                        setOpenProductDetails: setOpenProductDetails
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-[90%] w-[90%]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col w-[100%] bg-[#F5F6F6] h-[100%]",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex h-[10%] w-[100%]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>{
                                                router.replace(`/admin/inventory/byId=1`);
                                                setCurrentPage(1);
                                                setSearchKeyword("");
                                            },
                                            className: selected.includes("byId") ? "w-[20%] flex items-center justify-center bg-[#008DEB] text-white hover:cursor-pointer" : "w-[20%] flex items-center justify-center bg-[#F5F6F6] hover:cursor-pointer",
                                            children: "By Id"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>{
                                                router.replace(`/admin/inventory/sort=productName=ASC=1`);
                                                setCurrentPage(1);
                                                setSearchKeyword("");
                                            },
                                            className: selected.includes("sort=productName=ASC") ? "w-[20%] flex items-center justify-center bg-[#008DEB] text-white hover:cursor-pointer" : "w-[20%] flex items-center justify-center bg-[#F5F6F6] hover:cursor-pointer",
                                            children: "Name Asc"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>{
                                                router.replace(`/admin/inventory/sort=productName=DESC=1`);
                                                setCurrentPage(1);
                                                setSearchKeyword("");
                                            },
                                            className: selected.includes("sort=productName=DESC") ? "w-[20%] flex items-center justify-center bg-[#008DEB] text-white hover:cursor-pointer" : "w-[20%] flex items-center justify-center bg-[#F5F6F6] hover:cursor-pointer",
                                            children: "Name Desc"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>{
                                                router.replace(`/admin/inventory/sort=productPrice=ASC=1`);
                                                setCurrentPage(1);
                                                setSearchKeyword("");
                                            },
                                            className: selected.includes("sort=productPrice=ASC") ? "w-[20%] flex items-center justify-center bg-[#008DEB] text-white hover:cursor-pointer" : "w-[20%] flex items-center justify-center bg-[#F5F6F6] hover:cursor-pointer",
                                            children: "Price Asc"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>{
                                                router.replace(`/admin/inventory/sort=productPrice=DESC=1`);
                                                setCurrentPage(1);
                                                setSearchKeyword("");
                                            },
                                            className: selected.includes("sort=productPrice=DESC") ? "w-[20%] flex items-center justify-center bg-[#008DEB] text-white hover:cursor-pointer" : "w-[20%] flex items-center justify-center bg-[#F5F6F6] hover:cursor-pointer",
                                            children: "Price Desc"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-[100%] h-[7vh] flex justify-between my-[2vh] px-[3vw]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            id: "searchbar desktop",
                                            className: "bg-white flex w-[35vw] h-[7vh] z-[2] left-[15vw] bottom-[88px] justify-end",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {
                                                    onChange: (event)=>{
                                                        setSearchKeyword(event.target.value);
                                                    },
                                                    value: searchKeyword,
                                                    variant: "unstyled",
                                                    placeholder: "Cari Obat",
                                                    sx: {
                                                        paddingLeft: "5%"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>{
                                                        router.replace(`/admin/inventory/${searchKeyword}=key=1`);
                                                        setCurrentPage(1);
                                                    },
                                                    className: "bg-[#008DEB] flex items-center justify-center w-[20%] hover:cursor-pointer",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                        src: "/landingpage/Search-desktop.png",
                                                        alt: "arrow-logo",
                                                        layout: "fixed",
                                                        width: 24,
                                                        height: 24
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            id: "categories",
                                            className: showCategories ? "w-[30%] h-[50vh] bg-white flex flex-col z-[3]" : "w-[30%] h-[100%] bg-white flex flex-col z-[3]",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    onClick: showCategoriesSwitch,
                                                    className: showCategories ? "text-[1.2rem] font-[500] flex hover:cursor-pointer justify-between w-[100%] h-[7vh] px-[1vw]" : "text-[1.2rem] font-[500] flex hover:cursor-pointer justify-between bg-white w-[100%] h-[7vh] px-[1vw]",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex items-center justify-center",
                                                            children: "Kategori"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: showCategories ? "w-[4%] flex items-center justify-center rotate-90 transition duration-100" : "w-[4%] flex items-center justify-center transition duration-100",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
                                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCaretRight
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: showCategories ? "overflow-auto scrollbar h-[43vh] bg-white" : "",
                                                    children: showCategories ? categoriesMap() : ""
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "h-[70%] w-[100%] flex flex-col items-center",
                                    children: productMap()
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-[100%] flex justify-between px-[3vw]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-[10%] flex justify-between",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                    size: "lg",
                                                    borderRadius: "none",
                                                    disabled: currentPage <= 1,
                                                    colorScheme: "linkedin",
                                                    onClick: ()=>{
                                                        setCurrentPage(currentPage - 1);
                                                        const splitParams = router.query.params.split("=");
                                                        splitParams[splitParams.length - 1] = parseInt(splitParams[splitParams.length - 1]) - 1;
                                                        const joinParams = splitParams.join("=");
                                                        router.replace(`/admin/inventory/${joinParams}`);
                                                    },
                                                    children: "<"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "h-[100%] w-[7vw] flex items-center justify-center",
                                                    children: currentPage
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                    borderRadius: "none",
                                                    onClick: ()=>{
                                                        setCurrentPage(currentPage + 1);
                                                        const splitParams = router.query.params.split("=");
                                                        splitParams[splitParams.length - 1] = parseInt(splitParams[splitParams.length - 1]) + 1;
                                                        const joinParams = splitParams.join("=");
                                                        router.replace(`/admin/inventory/${joinParams}`);
                                                    },
                                                    disabled: !props.hasMore,
                                                    size: "lg",
                                                    colorScheme: "linkedin",
                                                    children: ">"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>{
                                                        setAddFormulaButton(true);
                                                    },
                                                    className: "h-[100%] px-[2vw] bg-[#008DEB] text-white flex items-center hover:cursor-pointer mx-1",
                                                    children: "+ Tambah Obat Racikan"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>{
                                                        setAddProductButton(true);
                                                    },
                                                    className: "h-[100%] px-[2vw] bg-[#008DEB] text-white flex items-center hover:cursor-pointer mx-1",
                                                    children: "+ Tambah Produk"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    try {
        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_15__.getSession)({
            req: context.req
        });
        if (!session) return {
            redirect: {
                destination: "/login"
            }
        };
        if (!session.user.user.isAdmin) {
            return {
                redirect: {
                    destination: "/"
                }
            };
        }
        const resGetCategoriesLists = await _src_config_api__WEBPACK_IMPORTED_MODULE_8__["default"].get("categories/getAll");
        let resGetProducts = "";
        if (context.params.params.includes("byId")) {
            const splitParams = context.params.params.split("=");
            const page = splitParams[1];
            resGetProducts = await _src_config_api__WEBPACK_IMPORTED_MODULE_8__["default"].get("products/all", {
                params: {
                    page,
                    limit: 3
                }
            });
        } else if (context.params.params.includes("sort")) {
            const splitParams1 = context.params.params.split("=");
            const page1 = splitParams1[splitParams1.length - 1];
            resGetProducts = await _src_config_api__WEBPACK_IMPORTED_MODULE_8__["default"].get(`products/sort/${context.params.params}`, {
                params: {
                    page: page1,
                    limit: 3
                }
            });
        } else if (context.params.params.includes("category")) {
            const splitParams2 = context.params.params.split("=");
            const page2 = splitParams2[splitParams2.length - 1];
            resGetProducts = await _src_config_api__WEBPACK_IMPORTED_MODULE_8__["default"].get(`products/byCategory/${context.params.params}`, {
                params: {
                    page: page2,
                    limit: 3
                }
            });
        } else if (context.params.params.includes("key")) {
            const splitParams3 = context.params.params.split("=");
            const page3 = splitParams3[splitParams3.length - 1];
            resGetProducts = await _src_config_api__WEBPACK_IMPORTED_MODULE_8__["default"].get(`products/specifics/${splitParams3[0]}`, {
                params: {
                    page: page3,
                    limit: 3
                }
            });
        }
        const resGetAllProductsAll = await _src_config_api__WEBPACK_IMPORTED_MODULE_8__["default"].get("products");
        return {
            props: {
                params: context.params,
                categoriesLists: resGetCategoriesLists.data,
                products: resGetProducts.data.products,
                hasMore: resGetProducts.data.hasMore,
                productsAll: resGetAllProductsAll.data
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inventory);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

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

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [907,675,952,664,220,522,718], () => (__webpack_exec__(4167)));
module.exports = __webpack_exports__;

})();