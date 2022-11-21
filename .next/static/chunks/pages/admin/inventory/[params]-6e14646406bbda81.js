(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1122],
  {
    57026: function (a, b, c) {
      "use strict";
      c.d(b, {
        Ph: function () {
          return k;
        },
      });
      var d = c(67294),
        e = c(83234),
        f = c(32067),
        g = c(54520),
        h = (...a) => a.filter(Boolean).join(" "),
        i = (a) => (a ? "" : void 0),
        j = (0, f.Gp)(function (a, b) {
          let {children: c, placeholder: e, className: g, ...i} = a;
          return d.createElement(
            f.m$.select,
            {...i, ref: b, className: h("chakra-select", g)},
            e && d.createElement("option", {value: ""}, e),
            c
          );
        });
      j.displayName = "SelectField";
      var k = (0, f.Gp)((a, b) => {
        var c;
        let h = (0, f.jC)("Select", a),
          {
            rootProps: k,
            placeholder: l,
            icon: m,
            color: o,
            height: p,
            h: q,
            minH: r,
            minHeight: s,
            iconColor: t,
            iconSize: u,
            ...v
          } = (0, g.Lr)(a),
          [w, x] = (function (a, b) {
            let c = {},
              d = {};
            for (let [e, f] of Object.entries(a))
              b.includes(e) ? (c[e] = f) : (d[e] = f);
            return [c, d];
          })(v, g.oE),
          y = (0, e.Yp)(x),
          z = {
            paddingEnd: "2rem",
            ...h.field,
            _focus: {
              zIndex: "unset",
              ...(null == (c = h.field) ? void 0 : c["_focus"]),
            },
          };
        return d.createElement(
          f.m$.div,
          {
            className: "chakra-select__wrapper",
            __css: {
              width: "100%",
              height: "fit-content",
              position: "relative",
              color: o,
            },
            ...w,
            ...k,
          },
          d.createElement(
            j,
            {
              ref: b,
              height: q ?? p,
              minH: r ?? s,
              placeholder: l,
              ...y,
              __css: z,
            },
            a.children
          ),
          d.createElement(
            n,
            {
              "data-disabled": i(y.disabled),
              ...((t || o) && {color: t || o}),
              __css: h.icon,
              ...(u && {fontSize: u}),
            },
            m
          )
        );
      });
      k.displayName = "Select";
      var l = (a) =>
          d.createElement(
            "svg",
            {viewBox: "0 0 24 24", ...a},
            d.createElement("path", {
              fill: "currentColor",
              d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
            })
          ),
        m = (0, f.m$)("div", {
          baseStyle: {
            position: "absolute",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            top: "50%",
            transform: "translateY(-50%)",
          },
        }),
        n = (a) => {
          let {children: b = d.createElement(l, null), ...c} = a,
            e = (0, d.cloneElement)(b, {
              role: "presentation",
              className: "chakra-select__icon",
              focusable: !1,
              "aria-hidden": !0,
              style: {width: "1em", height: "1em", color: "currentColor"},
            });
          return d.createElement(
            m,
            {...c, className: "chakra-select__icon-wrapper"},
            (0, d.isValidElement)(b) ? e : null
          );
        };
      n.displayName = "SelectIcon";
    },
    56285: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/inventory/[params]",
        function () {
          return c(10964);
        },
      ]);
    },
    65533: function (a, b, c) {
      "use strict";
      var d = c(34727),
        e = c(67573),
        f = c(14251),
        g = c(52875),
        h = c(34051),
        i = c.n(h),
        j = c(85893),
        k = c(67294),
        l = c(84221),
        m = c(39653),
        n = c(87674),
        o = c(20979),
        p = c(47741),
        q = c(25675),
        r = c.n(q),
        s = c(77220);
      b.Z = function (a) {
        var b = a.addCategoryButton,
          c = a.setAddCategoryButton,
          h = function (a) {
            A(URL.createObjectURL(a.target.files[0])),
              u(
                (0, g.Z)((0, f.Z)({}, t), {
                  categoryImage: a.target.files[0].name,
                })
              ),
              x(a.target.files[0]);
          },
          q = (0, k.useState)({category: "", categoryImage: ""}),
          t = q[0],
          u = q[1],
          v = (0, k.useState)(),
          w = v[0],
          x = v[1],
          y = (0, k.useState)("/admin/TambahProduk.svg"),
          z = y[0],
          A = y[1],
          B = (0, k.useState)(!1),
          C = B[0],
          D = B[1],
          E = (0, l.pm)(),
          F = (0, m.qY)(),
          G = F.isOpen,
          H = F.onOpen,
          I = F.onClose;
        (0, k.useEffect)(
          function () {
            b ? H() : b || I(), u((0, f.Z)({}, t));
          },
          [b, C]
        );
        var J,
          K,
          L =
            ((J = (0, d.Z)(
              i().mark(function a() {
                var b, d, e, f;
                return i().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (
                            ((a.prev = 0),
                            D(!0),
                            !Object.values(t).includes(""))
                          ) {
                            a.next = 6;
                            break;
                          }
                          return (
                            E({
                              description: "Tolong Isi Semua",
                              position: "top",
                              status: "error",
                              duration: 3e3,
                              isClosable: !0,
                            }),
                            D(!1),
                            a.abrupt("return")
                          );
                        case 6:
                          return (
                            (b = new FormData()).append("categoriesImage", w),
                            (a.next = 10),
                            s.default.post("/categoriesLists", t)
                          );
                        case 10:
                          return (
                            (d = a.sent),
                            (e = t.categoryImage.split(".")),
                            (a.next = 14),
                            s.default.post(
                              "/categoriesLists/upload/"
                                .concat(
                                  d.data.data.newCategories.category_lists_id,
                                  "."
                                )
                                .concat(e[1]),
                              b
                            )
                          );
                        case 14:
                          (f = a.sent),
                            E({
                              description: d.data.message,
                              position: "top",
                              status: "success",
                              duration: 3e3,
                              isClosable: !0,
                            }),
                            D(!1),
                            c(!1),
                            (a.next = 25);
                          break;
                        case 20:
                          (a.prev = 20),
                            (a.t0 = a.catch(0)),
                            console.log({error: a.t0}),
                            c(!1),
                            D(!1);
                        case 25:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 20]]
                );
              })
            )),
            function () {
              return J.apply(this, arguments);
            });
        return (0, j.jsxs)(n.u_, {
          isOpen: G,
          onClose: function () {
            c(!1);
          },
          children: [
            (0, j.jsx)(n.ZA, {}),
            (0, j.jsxs)(n.hz, {
              children: [
                (0, j.jsx)(n.xB, {children: "Tambah Category"}),
                (0, j.jsxs)(n.fe, {
                  children: [
                    (0, j.jsx)("p", {children: "Foto"}),
                    (0, j.jsx)("div", {
                      className: "w-[35%] my-[.5vh] hover:cursor-pointer",
                      children: (0, j.jsx)("label", {
                        className: "hover:cursor-pointer",
                        htmlFor: "categoryImageInput",
                        children: (0, j.jsx)(r(), {
                          unoptimized: !0,
                          src: z,
                          style: {borderRadius: ".3vw"},
                          width: 1,
                          height: 1,
                          layout: "responsive",
                        }),
                      }),
                    }),
                    (0, j.jsx)("input", {
                      onChange: h,
                      className: "hidden",
                      id: "categoryImageInput",
                      type: "file",
                    }),
                    (0, j.jsx)(o.II, {
                      value: t.category,
                      onChange:
                        ((K = "category"),
                        function (a) {
                          u(
                            (0, g.Z)(
                              (0, f.Z)({}, t),
                              (0, e.Z)({}, K, a.target.value)
                            )
                          );
                        }),
                      placeholder: "Category",
                      size: "lg",
                      height: "11vh",
                      resize: "none",
                    }),
                  ],
                }),
                (0, j.jsx)(n.mz, {
                  justifyContent: "space-between",
                  children: (0, j.jsxs)("div", {
                    className: "flex w-[50%] justify-end",
                    children: [
                      (0, j.jsx)(p.zx, {
                        style: {width: "40%", marginRight: ".3vw"},
                        colorScheme: "linkedin",
                        onClick: function () {
                          L();
                        },
                        children: "Simpan",
                      }),
                      (0, j.jsx)(p.zx, {
                        style: {width: "40%"},
                        onClick: function () {
                          c(!1), u({category: ""});
                        },
                        variant: "ghost",
                        children: "Batal",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    52522: function (a, b, c) {
      "use strict";
      var d = c(85893);
      c(67294);
      var e = c(25675),
        f = c.n(e),
        g = c(41664),
        h = c.n(g),
        i = c(33299),
        j = c(11163);
      b.Z = function (a) {
        var b = a.path,
          c = (0, j.useRouter)();
        return (
          (0, i.useSession)() || c.replace("/login"),
          (0, d.jsxs)("div", {
            className:
              "h-[100%] w-[15%] flex flex-col items-center bg-[#008DEB]",
            children: [
              (0, d.jsx)("div", {
                id: "logo",
                className: "w-[70%] my-[5vh]",
                children: (0, d.jsx)(f(), {
                  src: "/admin/AdminNavbarVector.svg",
                  alt: "medbox-logo",
                  layout: "responsive",
                  width: 136,
                  height: 32,
                }),
              }),
              (0, d.jsx)("div", {
                className: "w-[100%] h-[25%] text-white",
                children: [
                  "Transaksi",
                  "Inventory",
                  "Laporan",
                  "Resep",
                  "Category",
                ].map(function (a) {
                  return (0,
                  d.jsx)(h(), {href: "/admin/".concat(a.toLowerCase()), children: (0, d.jsxs)("div", {className: b.includes(a.toLowerCase()) ? "w-[100%] bg-[#005E9D] hover:cursor-pointer h-[33.3%] flex items-center" : "w-[100%] bg-[#008DEB] hover:cursor-pointer h-[33.3%] flex items-center", children: [(0, d.jsx)("div", {className: "w-[10%] ml-[2vw]", children: (0, d.jsx)(f(), {src: "/admin/".concat(a, ".svg"), alt: "medbox-logo", layout: "responsive", width: 24, height: 24})}), (0, d.jsx)("p", {className: "ml-[.5vw]", children: a})]})}, a);
                }),
              }),
              (0, d.jsx)("div", {className: "grow"}),
              (0, d.jsxs)("button", {
                className:
                  "border-[1px] w-[80%] h-[6%] border-white text-white flex items-center justify-evenly mb-[3vh] ",
                onClick: function () {
                  (0, i.signOut)();
                },
                children: [
                  (0, d.jsx)("div", {
                    className: "w-[7%]",
                    children: (0, d.jsx)(f(), {
                      src: "/admin/LogoutAdmin.svg",
                      alt: "medbox-logo",
                      layout: "responsive",
                      width: 16,
                      height: 14,
                    }),
                  }),
                  "Logout",
                ],
              }),
            ],
          })
        );
      };
    },
    39499: function (a, b, c) {
      "use strict";
      Object.defineProperty(b, "__esModule", {value: !0});
      var d = c(77220).API_URL;
      a.exports = {api_origin: d};
    },
    10964: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          __N_SSP: function () {
            return O;
          },
          default: function () {
            return P;
          },
        });
      var d = c(34727),
        e = c(34051),
        f = c.n(e),
        g = c(85893),
        h = c(67294),
        i = c(52522),
        j = c(11163),
        k = c(47741),
        l = c(84221),
        m = c(20979),
        n = c(99603),
        o = c(59417),
        p = c(25675),
        q = c.n(p),
        r = c(77220),
        s = c(41664),
        t = c.n(s),
        u = c(69779),
        v = c(48641),
        w = c(39653),
        x = c(87674),
        y = c(57026),
        z = function (a) {
          var b = a.addFormulaButton,
            c = a.setAddFormulaButton,
            e = a.allProducts,
            i = function () {
              E.forEach(function (a) {
                A == a.productName ? R(!0) : R(!1);
              });
            },
            j = (0, w.qY)(),
            n = j.isOpen,
            o = j.onOpen,
            p = j.onClose,
            q = (0, h.useState)(0),
            s = q[0],
            t = q[1],
            z = (0, h.useState)(),
            A = z[0],
            B = z[1],
            C = (0, h.useState)();
          C[0], C[1];
          var D = (0, h.useState)([]),
            E = D[0],
            F = D[1],
            G = (0, h.useState)(0),
            H = G[0],
            I = G[1],
            J = (0, h.useState)(!1),
            K = J[0],
            L = J[1],
            M = (0, h.useState)(""),
            N = M[0],
            O = M[1],
            P = (0, h.useState)(!1),
            Q = P[0],
            R = P[1],
            S = (0, h.useState)(0),
            T = S[0],
            U = S[1],
            V = (0, l.pm)();
          (0, h.useEffect)(
            function () {
              i(), b ? o() : b || p();
            },
            [b, s, E, A]
          );
          var W = function (a) {
              O(a.target.value);
            },
            X = function (a) {
              B(a.target.value);
            },
            Y = function (a) {
              t(a.target.value);
            },
            Z = function (a) {
              U(a.target.value);
            },
            $ = function () {
              F((0, u.Z)(E).concat([{productName: A, quantity: s}])),
                t(0),
                B("");
            };
          function _() {
            return (_ = (0, d.Z)(
              f().mark(function a() {
                var b, d, e;
                return f().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            L(!0),
                            (b = {productName: N, formula: E, amount: T}),
                            (a.next = 5),
                            r.default.post("/products/concoction", b)
                          );
                        case 5:
                          (d = a.sent) &&
                            (V({
                              title: "Concoction Created!",
                              description: d.data.message,
                              position: "top",
                              status: "success",
                              duration: 3e3,
                              isClosable: !0,
                            }),
                            L(!1),
                            c(!1),
                            F([]),
                            t(0),
                            I(0),
                            O(""),
                            U(0)),
                            (a.next = 18);
                          break;
                        case 9:
                          (a.prev = 9),
                            (a.t0 = a.catch(0)),
                            V({
                              title: "Create Concoction Failed!",
                              description: (
                                null === (e = a.t0.response.data) ||
                                void 0 === e
                                  ? void 0
                                  : e.message
                              )
                                ? a.t0.response.data.message
                                : a.t0.message,
                              position: "top",
                              status: "error",
                              duration: 3e3,
                              isClosable: !0,
                            }),
                            console.log({Error: a.t0.response.data}),
                            L(!1),
                            c(!1),
                            F([]),
                            t(0),
                            I(0),
                            O(""),
                            U(0);
                        case 18:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 9]]
                );
              })
            )).apply(this, arguments);
          }
          return (0, g.jsxs)(x.u_, {
            isOpen: n,
            onClose: function () {
              c(!1), F([]), t(0), I(0), O(""), U(0);
            },
            children: [
              (0, g.jsx)(x.ZA, {}),
              (0, g.jsxs)(x.hz, {
                children: [
                  (0, g.jsx)(x.xB, {children: "Tambah Obat Racikan"}),
                  (0, g.jsx)(x.ol, {}),
                  (0, g.jsxs)(x.fe, {
                    children: [
                      (0, g.jsx)(m.II, {
                        mb: 2,
                        type: "text",
                        placeholder: "Nama Obat",
                        onChange: W,
                      }),
                      (0, g.jsxs)(v.Ug, {
                        my: 3,
                        children: [
                          (0, g.jsx)(v.xv, {children: "Jumlah Racikan:"}),
                          0 == T
                            ? (0, g.jsx)(k.zx, {
                                colorScheme: "linkedin",
                                variant: "ghost",
                                isDisabled: !0,
                                onClick: function () {
                                  U(T - 1);
                                },
                                children: "-",
                              })
                            : (0, g.jsx)(k.zx, {
                                colorScheme: "linkedin",
                                variant: "ghost",
                                onClick: function () {
                                  U(T - 1);
                                },
                                children: "-",
                              }),
                          (0, g.jsx)(m.II, {
                            placeholder: "Jumlah Racikan",
                            type: "text",
                            width: "70px",
                            value: T,
                            onChange: Z,
                          }),
                          (0, g.jsx)(k.zx, {
                            colorScheme: "linkedin",
                            variant: "ghost",
                            onClick: function () {
                              U(T + 1);
                            },
                            children: "+",
                          }),
                        ],
                      }),
                      (0, g.jsxs)(v.Ug, {
                        children: [
                          (0, g.jsx)(y.Ph, {
                            name: "productName",
                            placeholder: "Pilih Obat",
                            onChange: X,
                            children:
                              null == e
                                ? void 0
                                : e.map(function (a) {
                                    if (!a.formula)
                                      return (0, g.jsx)(
                                        "option",
                                        {
                                          value: "".concat(a.productName),
                                          children: a.productName,
                                        },
                                        a.product_id
                                      );
                                  }),
                          }),
                          0 == s
                            ? (0, g.jsx)(k.zx, {
                                colorScheme: "linkedin",
                                variant: "ghost",
                                isDisabled: !0,
                                onClick: function () {
                                  t(s - 1);
                                },
                                children: "-",
                              })
                            : (0, g.jsx)(k.zx, {
                                colorScheme: "linkedin",
                                variant: "ghost",
                                onClick: function () {
                                  t(s - 1);
                                },
                                children: "-",
                              }),
                          (0, g.jsx)(m.II, {
                            type: "text",
                            width: "70px",
                            value: s,
                            onChange: Y,
                          }),
                          (0, g.jsx)(k.zx, {
                            colorScheme: "linkedin",
                            variant: "ghost",
                            onClick: function () {
                              t(s + 1);
                            },
                            children: "+",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, g.jsx)(v.xu, {
                    rounded: 10,
                    border: "1px",
                    borderColor: "gray.100",
                    py: 2,
                    children: (0, g.jsxs)(v.gC, {
                      children: [
                        E.map(function (a, b) {
                          return (0, g.jsx)(g.Fragment, {
                            children: (0, g.jsxs)(v.Ug, {
                              spacing: 2,
                              bg: "gray.100",
                              border: "1px",
                              borderColor: "gray.100",
                              my: 1,
                              mx: 6,
                              rounded: 6,
                              children: [
                                (0, g.jsx)(v.xv, {
                                  ml: 10,
                                  mr: 2,
                                  my: 2,
                                  fontSize: "md",
                                  fontWeight: "semibold",
                                  children: a.productName,
                                }),
                                (0, g.jsxs)(v.xv, {
                                  fontSize: "s",
                                  children: ["x", a.quantity],
                                }),
                                (0, g.jsx)(k.zx, {
                                  variant: "ghost",
                                  colorScheme: "red",
                                  isLoading: K,
                                  onClick: function () {
                                    var a = E;
                                    a.splice(b, 1), F(a), I(H + 1);
                                  },
                                  children: "x",
                                }),
                              ],
                            }),
                          });
                        }),
                        E.length
                          ? (0, g.jsx)(k.zx, {
                              height: "20px",
                              width: "110px",
                              variant: "ghost",
                              fontSize: "small",
                              fontWeight: "normal",
                              colorScheme: "red",
                              isLoading: K,
                              onClick: function () {
                                F([]);
                              },
                              children: "Hapus Semua",
                            })
                          : (0, g.jsx)(g.Fragment, {}),
                      ],
                    }),
                  }),
                  (0, g.jsxs)(x.mz, {
                    children: [
                      (0, g.jsx)(k.zx, {
                        variant: "ghost",
                        colorScheme: "red",
                        mr: 3,
                        onClick: function () {
                          c(!1), F([]), t(0), I(0), O(""), U(0);
                        },
                        children: "Batal",
                      }),
                      0 == s || "" == A
                        ? (0, g.jsx)(k.zx, {
                            mr: 2,
                            isDisabled: !0,
                            colorScheme: "linkedin",
                            variant: "outline",
                            onClick: function () {
                              F(
                                (0, u.Z)(E).concat([
                                  {productName: A, quantity: s},
                                ])
                              );
                            },
                            children: "Tambah",
                          })
                        : (0, g.jsx)(k.zx, {
                            mr: 2,
                            colorScheme: "linkedin",
                            variant: "outline",
                            isDisabled: Q,
                            onClick: $,
                            children: "Tambah",
                          }),
                      N && E.length && T > 0
                        ? (0, g.jsx)(k.zx, {
                            colorScheme: "teal",
                            variant: "outline",
                            isLoading: K,
                            onClick: function () {
                              return _.apply(this, arguments);
                            },
                            children: "Simpan",
                          })
                        : (0, g.jsx)(k.zx, {
                            colorScheme: "teal",
                            variant: "outline",
                            isLoading: K,
                            isDisabled: !0,
                            onClick: function () {},
                            children: "Simpan",
                          }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        A = c(67573),
        B = c(14251),
        C = c(52875),
        D = c(83234),
        E = c(32067),
        F = c(54520),
        G = (...a) => a.filter(Boolean).join(" "),
        H = ["h", "minH", "height", "minHeight"],
        I = (0, E.Gp)((a, b) => {
          let c = (0, E.mq)("Textarea", a),
            {className: d, rows: e, ...f} = (0, F.Lr)(a),
            g = (0, D.Yp)(f),
            i = e
              ? (function (a, b = []) {
                  let c = Object.assign({}, a);
                  for (let d of b) d in c && delete c[d];
                  return c;
                })(c, H)
              : c;
          return h.createElement(E.m$.textarea, {
            ref: b,
            rows: e,
            ...g,
            className: G("chakra-textarea", d),
            __css: i,
          });
        });
      I.displayName = "Textarea";
      var J = function (a) {
          var b = a.addProductButton,
            c = a.setAddProductButton,
            e = a.categoriesLists,
            i = function (a) {
              F(URL.createObjectURL(a.target.files[0])),
                J(
                  (0, C.Z)((0, B.Z)({}, H), {
                    productImage: a.target.files[0].name,
                  })
                ),
                z(a.target.files[0]);
            },
            n = (0, h.useState)(0),
            o = n[0];
          n[1];
          var p = (0, h.useState)(!1),
            s = p[0],
            t = p[1],
            u = (0, h.useState)(),
            v = u[0],
            z = u[1],
            D = (0, h.useState)("/admin/TambahProduk.svg"),
            E = D[0],
            F = D[1],
            G = (0, h.useState)({
              categoryInfo: "",
              description: "",
              packageType: "",
              productImage: "",
              productName: "",
              productPrice: "",
              productStock: "",
              defaultQuantity: "",
              servingType: "",
            }),
            H = G[0],
            J = G[1],
            K = (0, j.useRouter)(),
            L = (0, l.pm)(),
            M = (0, w.qY)(),
            N = M.isOpen,
            O = M.onOpen,
            P = M.onClose;
          (0, h.useEffect)(
            function () {
              b ? O() : b || P(),
                J((0, C.Z)((0, B.Z)({}, H), {productStock: o}));
            },
            [b, s, o]
          );
          var Q = function (a) {
            return function (b) {
              J((0, C.Z)((0, B.Z)({}, H), (0, A.Z)({}, a, b.target.value)));
            };
          };
          function R() {
            return (R = (0, d.Z)(
              f().mark(function a() {
                var b, d, e, g, h;
                return f().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (
                            ((a.prev = 0),
                            t(!0),
                            !Object.values(H).includes(""))
                          ) {
                            a.next = 6;
                            break;
                          }
                          return (
                            L({
                              title: "Alert!",
                              description: "Tolong isi semua field",
                              position: "top",
                              status: "error",
                              duration: 3e3,
                              isClosable: !0,
                            }),
                            t(!1),
                            a.abrupt("return")
                          );
                        case 6:
                          return (
                            (b = new FormData()).append("productImageFile", v),
                            (d = {
                              headers: {"Content-Type": "multipart/form-data"},
                            }),
                            (a.next = 11),
                            r.default.post("/products/newProduct", H)
                          );
                        case 11:
                          return (
                            (e = a.sent),
                            (g = H.productImage.split(".")),
                            (a.next = 15),
                            r.default.post(
                              "/products/newProductImage/"
                                .concat(e.data.resCreateProduct.product_id, ".")
                                .concat(g[1]),
                              b,
                              d
                            )
                          );
                        case 15:
                          e && (t(!1), c(!1)), (a.next = 25);
                          break;
                        case 18:
                          (a.prev = 18),
                            (a.t0 = a.catch(0)),
                            L({
                              title: "Add Product Failed!",
                              description: (
                                null === (h = a.t0.response.data) ||
                                void 0 === h
                                  ? void 0
                                  : h.message
                              )
                                ? a.t0.response.data.message
                                : a.t0.message,
                              position: "top",
                              status: "error",
                              duration: 3e3,
                              isClosable: !0,
                            }),
                            console.log({error: a.t0}),
                            t(!1),
                            c(!1);
                        case 25:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 18]]
                );
              })
            )).apply(this, arguments);
          }
          return (0, g.jsxs)(x.u_, {
            isOpen: N,
            onClose: function () {
              c(!1);
            },
            children: [
              (0, g.jsx)(x.ZA, {}),
              (0, g.jsxs)(x.hz, {
                children: [
                  (0, g.jsx)(x.xB, {children: "Tambah Produk"}),
                  (0, g.jsxs)(x.fe, {
                    children: [
                      (0, g.jsx)("p", {children: "Foto"}),
                      (0, g.jsx)("div", {
                        className: "w-[35%] my-[.5vh] hover:cursor-pointer",
                        children: (0, g.jsx)("label", {
                          className: "hover:cursor-pointer",
                          htmlFor: "productImageInput",
                          children: (0, g.jsx)(q(), {
                            unoptimized: !0,
                            style: {borderRadius: ".3vw"},
                            src: E,
                            width: 1,
                            height: 1,
                            layout: "responsive",
                          }),
                        }),
                      }),
                      (0, g.jsx)("input", {
                        onChange: i,
                        className: "hidden",
                        id: "productImageInput",
                        type: "file",
                      }),
                      (0, g.jsx)(m.II, {
                        value: H.productName,
                        onChange: Q("productName"),
                        size: "lg",
                        marginY: ".5vh",
                        placeholder: "Nama Produk",
                      }),
                      (0, g.jsxs)("div", {
                        className: "flex justify-between my-[.5vh]",
                        children: [
                          (0, g.jsx)(y.Ph, {
                            value: H.categoryInfo,
                            onChange: Q("categoryInfo"),
                            size: "lg",
                            width: "55%",
                            placeholder: "Kategori",
                            children:
                              null == e
                                ? void 0
                                : e.map(function (a) {
                                    return (0,
                                    g.jsx)("option", {value: "".concat(a.category_lists_id, "=-=").concat(a.category), children: a.category}, a.category_lists_id);
                                  }),
                          }),
                          (0, g.jsx)(k.zx, {
                            onClick: function () {
                              K.replace("/admin/category");
                            },
                            size: "lg",
                            children: "Tambah +",
                          }),
                        ],
                      }),
                      (0, g.jsx)(m.II, {
                        type: "number",
                        value: H.productPrice,
                        onChange: Q("productPrice"),
                        size: "lg",
                        marginY: ".5vh",
                        placeholder: "Harga",
                      }),
                      (0, g.jsx)(m.II, {
                        value: H.packageType,
                        onChange: Q("packageType"),
                        size: "lg",
                        marginY: ".5vh",
                        placeholder: "Kemasan",
                      }),
                      (0, g.jsx)(m.II, {
                        value: H.servingType,
                        onChange: Q("servingType"),
                        size: "lg",
                        marginY: ".5vh",
                        placeholder: "Unit Satuan",
                      }),
                      (0, g.jsx)(m.II, {
                        type: "number",
                        value: H.defaultQuantity,
                        onChange: Q("defaultQuantity"),
                        size: "lg",
                        marginY: ".5vh",
                        placeholder: "Jumlah Per Kemasan",
                      }),
                      (0, g.jsx)(I, {
                        onChange: Q("description"),
                        value: H.description,
                        placeholder: "Description",
                        size: "lg",
                        height: "11vh",
                        resize: "none",
                      }),
                    ],
                  }),
                  (0, g.jsxs)(x.mz, {
                    justifyContent: "space-between",
                    children: [
                      (0, g.jsxs)("div", {
                        className: "flex w-[50%] justify-evenly",
                        children: [
                          (0, g.jsx)(k.zx, {
                            colorScheme: "linkedin",
                            variant: "ghost",
                            disabled: !0,
                            children: "<",
                          }),
                          (0, g.jsx)(m.II, {
                            value: o,
                            disabled: !0,
                            className:
                              "w-[2.5vw] mx-[1vw] flex items-center justify-center bg-gray-200 rounded-[.2vw]",
                          }),
                          (0, g.jsx)(k.zx, {
                            colorScheme: "linkedin",
                            variant: "ghost",
                            disabled: !0,
                            children: ">",
                          }),
                        ],
                      }),
                      (0, g.jsxs)("div", {
                        className: "flex w-[50%] justify-end",
                        children: [
                          (0, g.jsx)(k.zx, {
                            style: {width: "40%", marginRight: ".3vw"},
                            isLoading: s,
                            colorScheme: "linkedin",
                            onClick: function () {
                              !(function () {
                                return R.apply(this, arguments);
                              })();
                            },
                            children: "Simpan",
                          }),
                          (0, g.jsx)(k.zx, {
                            style: {width: "40%"},
                            onClick: function () {
                              c(!1),
                                J({
                                  categoryInfo: "",
                                  description: "",
                                  packageType: "",
                                  productImage: "",
                                  productName: "",
                                  productPrice: "",
                                  productStock: "",
                                  defaultQuantity: "",
                                  servingType: "",
                                });
                            },
                            variant: "ghost",
                            children: "Batal",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        K = c(39499),
        L = function (a) {
          var b = a.currentProduct,
            c = a.openProductDetails,
            d = a.setOpenProductDetails,
            e = (0, w.qY)(),
            f = e.isOpen,
            i = e.onOpen,
            j = e.onClose,
            k = b.productName,
            l = b.description,
            n = (b.isPublic, b.category),
            o = b.packageType,
            p = b.productImage,
            r = b.productPrice,
            s = b.defaultQuantity,
            t = (b.productStock, b.product_id, b.servingType);
          return (
            b.createdAt,
            b.updatedAt,
            (0, h.useEffect)(
              function () {
                c ? i() : c || j();
              },
              [c]
            ),
            (0, g.jsxs)(x.u_, {
              isOpen: f,
              onClose: function () {
                d(!1);
              },
              children: [
                (0, g.jsx)(x.ZA, {}),
                (0, g.jsxs)(x.hz, {
                  children: [
                    (0, g.jsxs)(x.xB, {children: ["Produk: ", k]}),
                    (0, g.jsx)(x.ol, {}),
                    (0, g.jsxs)(x.fe, {
                      children: [
                        (0, g.jsx)("p", {children: "Foto"}),
                        (0, g.jsx)("div", {
                          className:
                            "w-[35%] my-[.1vh] hover:cursor-not-allowed",
                          children: (0, g.jsx)("label", {
                            className: "hover:cursor-not-allowed",
                            htmlFor: "productImageInput",
                            children: (0, g.jsx)(q(), {
                              unoptimized: !0,
                              style: {borderRadius: ".3vw"},
                              src: p.includes(K.api_origin)
                                ? p
                                : K.api_origin + p,
                              width: 1,
                              height: 1,
                              layout: "responsive",
                              loader: function () {
                                return p.includes(K.api_origin)
                                  ? p
                                  : K.api_origin + p;
                              },
                            }),
                          }),
                        }),
                        "Kategori",
                        (0, g.jsx)(m.II, {
                          disabled: !0,
                          backgroundColor: "gray.300",
                          value: n,
                          size: "lg",
                          marginY: ".1vh",
                          placeholder: "Kategori",
                        }),
                        "Harga",
                        (0, g.jsx)(m.II, {
                          disabled: !0,
                          backgroundColor: "gray.300",
                          value: r,
                          size: "lg",
                          marginY: ".1vh",
                          placeholder: "Harga",
                        }),
                        "Kemasan",
                        (0, g.jsx)(m.II, {
                          disabled: !0,
                          backgroundColor: "gray.300",
                          value: o,
                          size: "lg",
                          marginY: ".1vh",
                          placeholder: "Kemasan",
                        }),
                        "Satuan Unit",
                        (0, g.jsx)(m.II, {
                          disabled: !0,
                          backgroundColor: "gray.300",
                          value: t,
                          size: "lg",
                          marginY: ".1vh",
                          placeholder: "Unit Satuan",
                        }),
                        "Default Quantity",
                        (0, g.jsx)(m.II, {
                          disabled: !0,
                          backgroundColor: "gray.300",
                          value: s,
                          size: "lg",
                          marginY: ".5vh",
                          placeholder: "Jumlah Per Kemasan",
                        }),
                        "Deskripsi",
                        (0, g.jsx)(I, {
                          disabled: !0,
                          backgroundColor: "gray.300",
                          value: l,
                          placeholder: "Description",
                          size: "lg",
                          height: "11vh",
                          resize: "none",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        M = function (a) {
          var b = a.currentProduct,
            c = a.editProductButton,
            e = a.setEditProductButton,
            i = a.categoriesLists;
          a.productList, a.setProductList;
          var n = function (a) {
              M(URL.createObjectURL(a.target.files[0])),
                H(
                  (0, C.Z)((0, B.Z)({}, G), {
                    productImage: a.target.files[0].name,
                  })
                ),
                E(a.target.files[0]);
            },
            o = (0, h.useState)(b.productStock),
            p = o[0],
            s = o[1],
            t = (0, h.useState)(!1),
            u = t[0],
            v = t[1],
            z = (0, h.useState)(),
            D = z[0],
            E = z[1],
            F = (0, h.useState)({
              categoryInfo: ""
                .concat(b.category_lists_id, "=-=")
                .concat(b.category),
              description: b.description,
              packageType: b.packageType,
              productImage: b.productImage,
              productName: b.productName,
              productPrice: b.productPrice,
              productStock: b.productStock,
              defaultQuantity: b.defaultQuantity,
              servingType: b.servingType,
            }),
            G = F[0],
            H = F[1],
            J = (0, h.useState)(b.productImage),
            L = J[0],
            M = J[1],
            N = (0, j.useRouter)(),
            O = (0, l.pm)(),
            P = (0, w.qY)(),
            Q = P.isOpen,
            R = P.onOpen,
            S = P.onClose;
          function T() {
            return (T = (0, d.Z)(
              f().mark(function a() {
                var c, d, g, h, i;
                return f().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (
                            ((a.prev = 0),
                            v(!0),
                            !Object.values(G).includes(void 0))
                          ) {
                            a.next = 6;
                            break;
                          }
                          return (
                            O({
                              title: "Warning!",
                              description: "Tolong isi semua field",
                              position: "top",
                              status: "error",
                              duration: 3e3,
                              isClosable: !0,
                            }),
                            v(!1),
                            a.abrupt("return")
                          );
                        case 6:
                          return (
                            (c = new FormData()).append("productImageFile", D),
                            (d = {
                              headers: {"Content-Type": "multipart/form-data"},
                            }),
                            (a.next = 11),
                            r.default.patch(
                              "/products/productsUpdate/".concat(b.product_id),
                              {productInputs: G, currentProduct: b}
                            )
                          );
                        case 11:
                          return (
                            (g = a.sent),
                            (h = G.productImage.split(".")),
                            (a.next = 15),
                            r.default.post(
                              "/products/newProductImage/"
                                .concat(g.data.resUpdateProduct.product_id, ".")
                                .concat(h[1]),
                              c,
                              d
                            )
                          );
                        case 15:
                          O({
                            title: "Success!",
                            description: "Success edit product",
                            position: "top",
                            status: "success",
                            duration: 3e3,
                            isClosable: !0,
                          }),
                            v(!1),
                            e(!1),
                            (a.next = 26);
                          break;
                        case 20:
                          (a.prev = 20),
                            (a.t0 = a.catch(0)),
                            console.log({error: a.t0}),
                            O({
                              title: "Unexpected Fail!",
                              description: (
                                null === (i = a.t0.response.data) ||
                                void 0 === i
                                  ? void 0
                                  : i.message
                              )
                                ? a.t0.response.data.message
                                : a.t0.message,
                              position: "top",
                              status: "error",
                              duration: 3e3,
                              isClosable: !0,
                            }),
                            v(!1);
                        case 26:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 20]]
                );
              })
            )).apply(this, arguments);
          }
          (0, h.useEffect)(
            function () {
              c ? R() : c || S(),
                H({
                  categoryInfo: b.category_lists_id
                    ? "".concat(b.category_lists_id, "=-=").concat(b.category)
                    : void 0,
                  description: b.description,
                  packageType: b.packageType,
                  productImage: b.productImage,
                  productName: b.productName,
                  productPrice: b.productPrice,
                  productStock: p,
                  defaultQuantity: b.defaultQuantity,
                  servingType: b.servingType,
                }),
                M(b.productImage);
            },
            [c, p]
          ),
            (0, h.useEffect)(
              function () {
                s(b.productStock);
              },
              [b]
            );
          var U = function (a) {
            return function (b) {
              H((0, C.Z)((0, B.Z)({}, G), (0, A.Z)({}, a, b.target.value)));
            };
          };
          return (0, g.jsxs)(x.u_, {
            isOpen: Q,
            onClose: function () {
              e(!1);
            },
            children: [
              (0, g.jsx)(x.ZA, {}),
              (0, g.jsxs)(x.hz, {
                children: [
                  (0, g.jsxs)(x.xB, {children: ["Edit ", b.productName]}),
                  (0, g.jsxs)(x.fe, {
                    children: [
                      (0, g.jsx)("p", {children: "Foto"}),
                      (0, g.jsx)("div", {
                        className: "w-[35%] my-[.5vh] hover:cursor-pointer",
                        children: (0, g.jsx)("label", {
                          className: "hover:cursor-pointer",
                          htmlFor: "productImageInput",
                          children: (0, g.jsx)(q(), {
                            unoptimized: !0,
                            style: {borderRadius: ".3vw"},
                            src: L.includes("159.223.93.68")
                              ? L
                              : K.api_origin + L,
                            width: 1,
                            height: 1,
                            layout: "responsive",
                            loader: function () {
                              return L.includes(K.api_origin)
                                ? L
                                : K.api_origin + L;
                            },
                          }),
                        }),
                      }),
                      (0, g.jsx)("input", {
                        onChange: n,
                        className: "hidden",
                        id: "productImageInput",
                        type: "file",
                      }),
                      (0, g.jsx)(m.II, {
                        value: G.productName,
                        onChange: U("productName"),
                        size: "lg",
                        marginY: ".5vh",
                        placeholder: "Nama Produk",
                      }),
                      (0, g.jsxs)("div", {
                        className: "flex justify-between my-[.5vh]",
                        children: [
                          (0, g.jsx)(y.Ph, {
                            value: G.categoryInfo,
                            onChange: U("categoryInfo"),
                            size: "lg",
                            width: "55%",
                            placeholder: "Kategori",
                            children: i.map(function (a) {
                              return (0,
                              g.jsx)("option", {value: "".concat(a.category_lists_id, "=-=").concat(a.category), children: a.category}, a.category_lists_id);
                            }),
                          }),
                          (0, g.jsx)(k.zx, {
                            onClick: function () {
                              N.replace("/admin/category");
                            },
                            size: "lg",
                            children: "Tambah +",
                          }),
                        ],
                      }),
                      (0, g.jsx)(m.II, {
                        type: "number",
                        value: G.productPrice,
                        onChange: U("productPrice"),
                        size: "lg",
                        marginY: ".5vh",
                        placeholder: "Harga",
                      }),
                      (0, g.jsx)(m.II, {
                        value: G.packageType,
                        onChange: U("packageType"),
                        size: "lg",
                        marginY: ".5vh",
                        placeholder: "Kemasan",
                      }),
                      (0, g.jsx)(m.II, {
                        value: G.servingType,
                        onChange: U("servingType"),
                        size: "lg",
                        marginY: ".5vh",
                        placeholder: "Unit Satuan",
                      }),
                      (0, g.jsx)(m.II, {
                        type: "number",
                        value: G.defaultQuantity,
                        onChange: U("defaultQuantity"),
                        size: "lg",
                        marginY: ".5vh",
                        placeholder: "Jumlah Per Kemasan",
                      }),
                      (0, g.jsx)(I, {
                        onChange: U("description"),
                        value: G.description,
                        placeholder: "Description",
                        size: "lg",
                        height: "11vh",
                        resize: "none",
                      }),
                    ],
                  }),
                  (0, g.jsxs)(x.mz, {
                    justifyContent: "space-between",
                    children: [
                      (0, g.jsxs)("div", {
                        className: "flex w-[50%] justify-evenly",
                        children: [
                          (0, g.jsx)(k.zx, {
                            colorScheme: "linkedin",
                            variant: "ghost",
                            disabled: !0,
                            children: "<",
                          }),
                          (0, g.jsx)(m.II, {
                            disabled: !0,
                            value: p,
                            className:
                              "w-[2.5vw] mx-[1vw] flex items-center justify-center bg-gray-200 rounded-[.2vw]",
                          }),
                          (0, g.jsx)(k.zx, {
                            colorScheme: "linkedin",
                            variant: "ghost",
                            disabled: !0,
                            children: ">",
                          }),
                        ],
                      }),
                      (0, g.jsxs)("div", {
                        className: "flex w-[50%] justify-end",
                        children: [
                          (0, g.jsx)(k.zx, {
                            style: {width: "40%", marginRight: ".3vw"},
                            isLoading: u,
                            colorScheme: "linkedin",
                            onClick: function () {
                              !(function () {
                                return T.apply(this, arguments);
                              })();
                            },
                            children: "Update",
                          }),
                          (0, g.jsx)(k.zx, {
                            style: {width: "40%"},
                            onClick: function () {
                              e(!1),
                                H({
                                  categoryInfo: "",
                                  description: "",
                                  packageType: "",
                                  productImage: "",
                                  productName: "",
                                  productPrice: "",
                                  productStock: "",
                                  defaultQuantity: "",
                                  servingType: "",
                                });
                            },
                            variant: "ghost",
                            children: "Batal",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      c(65533);
      var N = c(33299),
        O = !0,
        P = function (a) {
          var b = function () {
              y(!x);
            },
            c = (0, j.useRouter)(),
            e = c.query.params,
            p = e.split("="),
            s = (0, h.useState)(""),
            u = s[0],
            v = s[1],
            w = (0, h.useState)(!1),
            x = w[0],
            y = w[1],
            A = (0, h.useState)(a.products),
            B = A[0],
            C = A[1],
            D = (0, h.useState)(parseInt(p[p.length - 1])),
            E = D[0],
            F = D[1],
            G = (0, h.useState)(""),
            H = G[0],
            I = G[1],
            O = (0, h.useState)(a.products[0]),
            P = O[0],
            Q = O[1],
            R = (0, h.useState)(!1),
            S = R[0],
            T = R[1],
            U = (0, h.useState)(!1),
            V = U[0],
            W = U[1],
            X = (0, h.useState)(!1),
            Y = X[0],
            Z = X[1],
            $ = (0, h.useState)(a.productsAll),
            _ = ($[0], $[1]),
            aa = (0, h.useState)(!1),
            ab = aa[0],
            ac = aa[1];
          (0, h.useEffect)(function () {
            C(a.products), _(a.productsAll), v(e);
          });
          var ad = (0, N.useSession)(),
            ae = (0, l.pm)();
          function af() {
            return (af = (0, d.Z)(
              f().mark(function b(c, d) {
                var e, g;
                return f().wrap(
                  function (b) {
                    for (;;)
                      switch ((b.prev = b.next)) {
                        case 0:
                          return (
                            (b.prev = 0),
                            (b.next = 3),
                            r.default.delete("/products/".concat(c))
                          );
                        case 3:
                          C(a.products.splice(d, 1)), (b.next = 11);
                          break;
                        case 6:
                          (b.prev = 6),
                            (b.t0 = b.catch(0)),
                            console.log({error: b.t0}),
                            ae({
                              title: "Unexpected Fail!",
                              description: (
                                null === (e = b.t0.response) || void 0 === e
                                  ? void 0
                                  : null === (g = e.data) || void 0 === g
                                  ? void 0
                                  : g.message
                              )
                                ? b.t0.response.data.message
                                : b.t0.message,
                              position: "top",
                              status: "error",
                              duration: 3e3,
                              isClosable: !0,
                            });
                        case 11:
                        case "end":
                          return b.stop();
                      }
                  },
                  b,
                  null,
                  [[0, 6]]
                );
              })
            )).apply(this, arguments);
          }
          return (
            ad.data && !ad.data.user.user.isAdmin && c.replace("/"),
            (0, g.jsxs)("div", {
              className: "flex w-[100vw] h-[100vh]",
              children: [
                (0, g.jsx)(i.Z, {path: c.pathname}),
                (0, g.jsxs)("div", {
                  className: "flex flex-col w-[85%] items-center",
                  children: [
                    (0, g.jsx)("div", {
                      className:
                        "h-[10%] w-[90%] flex items-center font-[500] text-[3vh]",
                      children: "Inventory",
                    }),
                    (0, g.jsx)(z, {
                      addFormulaButton: ab,
                      setAddFormulaButton: ac,
                      allProducts: a.productsAll.data.resGetAllProducts,
                    }),
                    (0, g.jsx)(J, {
                      addProductButton: S,
                      setAddProductButton: T,
                      categoriesLists: a.categoriesLists.categories,
                    }),
                    (0, g.jsx)(M, {
                      currentProduct: P,
                      editProductButton: Y,
                      productList: B,
                      setProductList: C,
                      setEditProductButton: Z,
                      categoriesLists: a.categoriesLists.categories,
                    }),
                    (0, g.jsx)(L, {
                      currentProduct: P,
                      openProductDetails: V,
                      setOpenProductDetails: W,
                    }),
                    (0, g.jsx)("div", {
                      className: "h-[90%] w-[90%]",
                      children: (0, g.jsxs)("div", {
                        className:
                          "flex flex-col w-[100%] bg-[#F5F6F6] h-[100%]",
                        children: [
                          (0, g.jsxs)("div", {
                            className: "flex h-[10%] w-[100%]",
                            children: [
                              (0, g.jsx)("div", {
                                onClick: function () {
                                  c.replace("/admin/inventory/byId=1"),
                                    F(1),
                                    I("");
                                },
                                className: u.includes("byId")
                                  ? "w-[20%] flex items-center justify-center bg-[#008DEB] text-white hover:cursor-pointer"
                                  : "w-[20%] flex items-center justify-center bg-[#F5F6F6] hover:cursor-pointer",
                                children: "By Id",
                              }),
                              (0, g.jsx)("div", {
                                onClick: function () {
                                  c.replace(
                                    "/admin/inventory/sort=productName=ASC=1"
                                  ),
                                    F(1),
                                    I("");
                                },
                                className: u.includes("sort=productName=ASC")
                                  ? "w-[20%] flex items-center justify-center bg-[#008DEB] text-white hover:cursor-pointer"
                                  : "w-[20%] flex items-center justify-center bg-[#F5F6F6] hover:cursor-pointer",
                                children: "Name Asc",
                              }),
                              (0, g.jsx)("div", {
                                onClick: function () {
                                  c.replace(
                                    "/admin/inventory/sort=productName=DESC=1"
                                  ),
                                    F(1),
                                    I("");
                                },
                                className: u.includes("sort=productName=DESC")
                                  ? "w-[20%] flex items-center justify-center bg-[#008DEB] text-white hover:cursor-pointer"
                                  : "w-[20%] flex items-center justify-center bg-[#F5F6F6] hover:cursor-pointer",
                                children: "Name Desc",
                              }),
                              (0, g.jsx)("div", {
                                onClick: function () {
                                  c.replace(
                                    "/admin/inventory/sort=productPrice=ASC=1"
                                  ),
                                    F(1),
                                    I("");
                                },
                                className: u.includes("sort=productPrice=ASC")
                                  ? "w-[20%] flex items-center justify-center bg-[#008DEB] text-white hover:cursor-pointer"
                                  : "w-[20%] flex items-center justify-center bg-[#F5F6F6] hover:cursor-pointer",
                                children: "Price Asc",
                              }),
                              (0, g.jsx)("div", {
                                onClick: function () {
                                  c.replace(
                                    "/admin/inventory/sort=productPrice=DESC=1"
                                  ),
                                    F(1),
                                    I("");
                                },
                                className: u.includes("sort=productPrice=DESC")
                                  ? "w-[20%] flex items-center justify-center bg-[#008DEB] text-white hover:cursor-pointer"
                                  : "w-[20%] flex items-center justify-center bg-[#F5F6F6] hover:cursor-pointer",
                                children: "Price Desc",
                              }),
                            ],
                          }),
                          (0, g.jsxs)("div", {
                            className:
                              "w-[100%] h-[7vh] flex justify-between my-[2vh] px-[3vw]",
                            children: [
                              (0, g.jsxs)("div", {
                                id: "searchbar desktop",
                                className:
                                  "bg-white flex w-[35vw] h-[7vh] z-[2] left-[15vw] bottom-[88px] justify-end",
                                children: [
                                  (0, g.jsx)(m.II, {
                                    onChange: function (a) {
                                      I(a.target.value);
                                    },
                                    value: H,
                                    variant: "unstyled",
                                    placeholder: "Cari Obat",
                                    sx: {paddingLeft: "5%"},
                                  }),
                                  (0, g.jsx)("div", {
                                    onClick: function () {
                                      c.replace(
                                        "/admin/inventory/".concat(H, "=key=1")
                                      ),
                                        F(1);
                                    },
                                    className:
                                      "bg-[#008DEB] flex items-center justify-center w-[20%] hover:cursor-pointer",
                                    children: (0, g.jsx)(q(), {
                                      src: "/landingpage/Search-desktop.png",
                                      alt: "arrow-logo",
                                      layout: "fixed",
                                      width: 24,
                                      height: 24,
                                    }),
                                  }),
                                ],
                              }),
                              (0, g.jsxs)("div", {
                                id: "categories",
                                className: x
                                  ? "w-[30%] h-[50vh] bg-white flex flex-col z-[3]"
                                  : "w-[30%] h-[100%] bg-white flex flex-col z-[3]",
                                children: [
                                  (0, g.jsxs)("div", {
                                    onClick: b,
                                    className: x
                                      ? "text-[1.2rem] font-[500] flex hover:cursor-pointer justify-between w-[100%] h-[7vh] px-[1vw]"
                                      : "text-[1.2rem] font-[500] flex hover:cursor-pointer justify-between bg-white w-[100%] h-[7vh] px-[1vw]",
                                    children: [
                                      (0, g.jsx)("div", {
                                        className:
                                          "flex items-center justify-center",
                                        children: "Kategori",
                                      }),
                                      (0, g.jsx)("div", {
                                        className: x
                                          ? "w-[4%] flex items-center justify-center rotate-90 transition duration-100"
                                          : "w-[4%] flex items-center justify-center transition duration-100",
                                        children: (0, g.jsx)(n.G, {
                                          icon: o.I4f,
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, g.jsx)("div", {
                                    className: x
                                      ? "overflow-auto scrollbar h-[43vh] bg-white"
                                      : "",
                                    children: x
                                      ? a.categoriesLists.categories.map(
                                          function (a) {
                                            var b = u.split("=")[0];
                                            return (0, g.jsx)(
                                              "div",
                                              {
                                                onClick: function () {
                                                  c.replace(
                                                    "/admin/inventory/".concat(
                                                      a.category_lists_id,
                                                      "=category=1"
                                                    )
                                                  ),
                                                    F(1),
                                                    I("");
                                                },
                                                className:
                                                  b == a.category_lists_id
                                                    ? "h-[7vh] pl-[1vw] flex items-center font-[400] text-[1.1rem] text-white cursor-pointer bg-[#008DEB]"
                                                    : "h-[7vh] pl-[1vw] flex items-center font-[400] text-[1.1rem] border-transparent hover:text-white hover:cursor-pointer hover:bg-[#008DEB] bg-white",
                                                children:
                                                  a.category.length <= 20
                                                    ? a.category
                                                    : "".concat(
                                                        a.category.slice(0, 20),
                                                        "..."
                                                      ),
                                              },
                                              a.category_lists_id
                                            );
                                          }
                                        )
                                      : "",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, g.jsx)("div", {
                            className:
                              "h-[70%] w-[100%] flex flex-col items-center",
                            children:
                              null == B
                                ? void 0
                                : B.map(function (a, b) {
                                    return (0, g.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "w-[90%] mb-[1%] h-[30%] flex-none flex flex-col items-end bg-white",
                                        children: [
                                          (0, g.jsxs)("div", {
                                            className:
                                              "pl-[1.5vw] flex w-[100%] bg-[#008DEB] text-white",
                                            children: [
                                              "Product ID: ",
                                              a.product_id,
                                            ],
                                          }),
                                          (0, g.jsxs)("div", {
                                            className:
                                              "w-[100%] h-[85%] flex-none flex justify-center items-center",
                                            children: [
                                              (0, g.jsx)("div", {
                                                onClick: function () {
                                                  Q(a), W(!0);
                                                },
                                                className:
                                                  "w-[7vw] ml-[1.5vw] hover:cursor-pointer",
                                                children: (0, g.jsx)(q(), {
                                                  unoptimized: !0,
                                                  alt: "resep-logo",
                                                  layout: "responsive",
                                                  width: 1,
                                                  height: 1,
                                                  src:
                                                    K.api_origin +
                                                    a.productImage,
                                                  loader: function () {
                                                    return (
                                                      K.api_origin +
                                                      a.productImage
                                                    );
                                                  },
                                                }),
                                              }),
                                              (0, g.jsxs)("div", {
                                                className:
                                                  "flex flex-col w-[70%] text-black h-[7vw] justify-center pl-[2vw] text-[#6E6E6E]",
                                                children: [
                                                  (0, g.jsx)("p", {
                                                    className:
                                                      "font-[500] text-[1.5rem]",
                                                    children:
                                                      a.productName.length <= 40
                                                        ? a.productName
                                                        : "".concat(
                                                            a.productName.slice(
                                                              0,
                                                              40
                                                            ),
                                                            "..."
                                                          ),
                                                  }),
                                                  (0, g.jsxs)("p", {
                                                    className:
                                                      "text-[1.1rem] font-[400]",
                                                    children: [
                                                      "Rp.",
                                                      a.productPrice.toLocaleString(
                                                        "id"
                                                      ),
                                                    ],
                                                  }),
                                                  (0, g.jsxs)("p", {
                                                    className:
                                                      "text-[1.1rem] font-[400]",
                                                    children: [
                                                      "Stok ",
                                                      a.productStock,
                                                    ],
                                                  }),
                                                  (0, g.jsx)(t(), {
                                                    href: "/admin/adminDetailProduct/".concat(
                                                      a.product_id
                                                    ),
                                                    children: (0, g.jsx)(k.zx, {
                                                      width: 125,
                                                      bgColor: "white",
                                                      _hover: "white",
                                                      variant: "solid",
                                                      color: "blue.400",
                                                      children:
                                                        "Riwayat Produk",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              (0, g.jsx)("div", {
                                                className: "grow",
                                              }),
                                              (0, g.jsxs)("div", {
                                                className:
                                                  "w-[10%] flex flex-col h-[7vw] justify-evenly mr-[1.5vw]",
                                                children: [
                                                  (0, g.jsx)(k.zx, {
                                                    variant: "outline",
                                                    colorScheme: "linkedin",
                                                    onClick: function () {
                                                      Q(a), Z(!0);
                                                    },
                                                    sx: {
                                                      width: "100%",
                                                      height: "5vh",
                                                    },
                                                    children: (0, g.jsx)("p", {
                                                      className: "text-[12px]",
                                                      children: "Edit",
                                                    }),
                                                  }),
                                                  (0, g.jsx)(k.zx, {
                                                    variant: "outline",
                                                    colorScheme: "red",
                                                    onClick: function () {
                                                      (function a(b, c) {
                                                        return af.apply(
                                                          this,
                                                          arguments
                                                        );
                                                      })(a.product_id, b);
                                                    },
                                                    sx: {
                                                      width: "100%",
                                                      height: "5vh",
                                                    },
                                                    children: (0, g.jsx)("p", {
                                                      className: "text-[12px]",
                                                      children: "Hapus",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      a.product_id
                                    );
                                  }),
                          }),
                          (0, g.jsxs)("div", {
                            className: "w-[100%] flex justify-between px-[3vw]",
                            children: [
                              (0, g.jsxs)("div", {
                                className: "w-[10%] flex justify-between",
                                children: [
                                  (0, g.jsx)(k.zx, {
                                    size: "lg",
                                    borderRadius: "none",
                                    disabled: E <= 1,
                                    colorScheme: "linkedin",
                                    onClick: function () {
                                      F(E - 1);
                                      var a = c.query.params.split("=");
                                      a[a.length - 1] =
                                        parseInt(a[a.length - 1]) - 1;
                                      var b = a.join("=");
                                      c.replace("/admin/inventory/".concat(b));
                                    },
                                    children: "<",
                                  }),
                                  (0, g.jsx)("div", {
                                    className:
                                      "h-[100%] w-[7vw] flex items-center justify-center",
                                    children: E,
                                  }),
                                  (0, g.jsx)(k.zx, {
                                    borderRadius: "none",
                                    onClick: function () {
                                      F(E + 1);
                                      var a = c.query.params.split("=");
                                      a[a.length - 1] =
                                        parseInt(a[a.length - 1]) + 1;
                                      var b = a.join("=");
                                      c.replace("/admin/inventory/".concat(b));
                                    },
                                    disabled: !a.hasMore,
                                    size: "lg",
                                    colorScheme: "linkedin",
                                    children: ">",
                                  }),
                                ],
                              }),
                              (0, g.jsxs)("div", {
                                className: "flex",
                                children: [
                                  (0, g.jsx)("div", {
                                    onClick: function () {
                                      ac(!0);
                                    },
                                    className:
                                      "h-[100%] px-[2vw] bg-[#008DEB] text-white flex items-center hover:cursor-pointer mx-1",
                                    children: "+ Tambah Obat Racikan",
                                  }),
                                  (0, g.jsx)("div", {
                                    onClick: function () {
                                      T(!0);
                                    },
                                    className:
                                      "h-[100%] px-[2vw] bg-[#008DEB] text-white flex items-center hover:cursor-pointer mx-1",
                                    children: "+ Tambah Produk",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    77220: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          API_URL: function () {
            return f;
          },
        });
      var d = c(9669),
        e = c.n(d),
        f = "http://159.223.93.68:8000",
        g = e().create({baseURL: f});
      b.default = g;
    },
    63641: function (a, b, c) {
      "use strict";
      function d(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
        return d;
      }
      c.d(b, {
        Z: function () {
          return d;
        },
      });
    },
    62893: function (a, b, c) {
      "use strict";
      function d(a) {
        if (
          ("undefined" != typeof Symbol && null != a[Symbol.iterator]) ||
          null != a["@@iterator"]
        )
          return Array.from(a);
      }
      c.d(b, {
        Z: function () {
          return d;
        },
      });
    },
    69779: function (a, b, c) {
      "use strict";
      c.d(b, {
        Z: function () {
          return g;
        },
      });
      var d = c(63641),
        e = c(62893),
        f = c(12267);
      function g(a) {
        return (
          (function (a) {
            if (Array.isArray(a)) return (0, d.Z)(a);
          })(a) ||
          (0, e.Z)(a) ||
          (0, f.Z)(a) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    12267: function (a, b, c) {
      "use strict";
      c.d(b, {
        Z: function () {
          return e;
        },
      });
      var d = c(63641);
      function e(a, b) {
        if (a) {
          if ("string" == typeof a) return (0, d.Z)(a, b);
          var c = Object.prototype.toString.call(a).slice(8, -1);
          if (
            ("Object" === c && a.constructor && (c = a.constructor.name),
            "Map" === c || "Set" === c)
          )
            return Array.from(c);
          if (
            "Arguments" === c ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return (0, d.Z)(a, b);
        }
      }
    },
  },
  function (a) {
    a.O(
      0,
      [4976, 9669, 1490, 9862, 900, 7674, 1937, 5834, 9774, 2888, 179],
      function () {
        var b;
        return a((a.s = 56285));
      }
    ),
      (_N_E = a.O());
  },
]);
