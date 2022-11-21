(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7219],
  {
    36696: function (a, b, c) {
      "use strict";
      c.d(b, {
        Td: function () {
          return q;
        },
        Th: function () {
          return o;
        },
        Tr: function () {
          return p;
        },
        hr: function () {
          return m;
        },
        iA: function () {
          return k;
        },
        p3: function () {
          return n;
        },
        xJ: function () {
          return l;
        },
      });
      var d = c(67294),
        e = c(32067),
        f = c(54520),
        g = c(28387),
        h = (...a) => a.filter(Boolean).join(" "),
        [i, j] = (0, g.k)({
          name: "TableStylesContext",
          errorMessage:
            "useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" ",
        }),
        k = (0, e.Gp)((a, b) => {
          let c = (0, e.jC)("Table", a),
            {className: g, ...j} = (0, f.Lr)(a);
          return d.createElement(
            i,
            {value: c},
            d.createElement(e.m$.table, {
              ref: b,
              __css: c.table,
              className: h("chakra-table", g),
              ...j,
            })
          );
        });
      k.displayName = "Table";
      var l = (0, e.Gp)((a, b) => {
        let {overflow: c, overflowX: f, className: g, ...i} = a;
        return d.createElement(e.m$.div, {
          ref: b,
          className: h("chakra-table__container", g),
          ...i,
          __css: {
            display: "block",
            whiteSpace: "nowrap",
            WebkitOverflowScrolling: "touch",
            overflowX: c ?? f ?? "auto",
            overflowY: "hidden",
            maxWidth: "100%",
          },
        });
      });
      (0, e.Gp)((a, b) => {
        let {placement: c = "bottom", ...f} = a,
          g = j();
        return d.createElement(e.m$.caption, {
          ...f,
          ref: b,
          __css: {...g.caption, captionSide: c},
        });
      }).displayName = "TableCaption";
      var m = (0, e.Gp)((a, b) => {
          let c = j();
          return d.createElement(e.m$.thead, {...a, ref: b, __css: c.thead});
        }),
        n = (0, e.Gp)((a, b) => {
          let c = j();
          return d.createElement(e.m$.tbody, {...a, ref: b, __css: c.tbody});
        });
      (0, e.Gp)((a, b) => {
        let c = j();
        return d.createElement(e.m$.tfoot, {...a, ref: b, __css: c.tfoot});
      });
      var o = (0, e.Gp)(({isNumeric: a, ...b}, c) => {
          let f = j();
          return d.createElement(e.m$.th, {
            ...b,
            ref: c,
            __css: f.th,
            "data-is-numeric": a,
          });
        }),
        p = (0, e.Gp)((a, b) => {
          let c = j();
          return d.createElement(e.m$.tr, {...a, ref: b, __css: c.tr});
        }),
        q = (0, e.Gp)(({isNumeric: a, ...b}, c) => {
          let f = j();
          return d.createElement(e.m$.td, {
            ...b,
            ref: c,
            __css: f.td,
            "data-is-numeric": a,
          });
        });
    },
    92836: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/adminDetailProduct/[product_id]",
        function () {
          return c(35640);
        },
      ]);
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
    35640: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          __N_SSP: function () {
            return w;
          },
          default: function () {
            return x;
          },
        });
      var d = c(34727),
        e = c(34051),
        f = c.n(e),
        g = c(85893),
        h = c(36696),
        i = c(48641),
        j = c(47741),
        k = c(11163),
        l = c(77220),
        m = c(67294),
        n = c(52522),
        o = c(84221),
        p = c(87674),
        q = function (a) {
          var b,
            c = a.isOpen,
            e = a.onClose,
            h = a.product_id,
            k = a.fetchStockOpname,
            n = (0, m.useState)(1),
            q = n[0],
            r = n[1],
            s = (0, o.pm)(),
            t = function () {
              r(q - 1);
            },
            u = function () {
              r(q + 1);
            },
            v =
              ((b = (0, d.Z)(
                f().mark(function a(b) {
                  var c, d, e;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.prev = 0),
                              (c = {productStock: q}),
                              (a.next = 4),
                              l.default.patch(
                                "/products/addStock/".concat(b),
                                c
                              )
                            );
                          case 4:
                            s({
                              description: (d = a.sent).data.message,
                              position: "top",
                              status: "success",
                              duration: 3e3,
                              isClosable: !0,
                            }),
                              k(),
                              (a.next = 14);
                            break;
                          case 9:
                            (a.prev = 9),
                              (a.t0 = a.catch(0)),
                              console.log({error: a.t0}),
                              s({
                                title: "Unexpected Fail!",
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
                              });
                          case 14:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[0, 9]]
                  );
                })
              )),
              function (a) {
                return b.apply(this, arguments);
              });
          return (0, g.jsxs)(p.u_, {
            isOpen: c,
            onClose: e,
            children: [
              (0, g.jsx)(p.ZA, {}),
              (0, g.jsxs)(p.hz, {
                backgroundColor: "white",
                paddingTop: 4,
                paddingBottom: 9,
                paddingX: 5,
                maxWidth: 480,
                children: [
                  (0, g.jsx)(p.xB, {
                    children: (0, g.jsx)(i.xv, {
                      fontWeight: 500,
                      fontSize: 17,
                      children: "Tambah Stok Produk",
                    }),
                  }),
                  (0, g.jsx)(p.ol, {margin: 5}),
                  (0, g.jsx)(p.fe, {
                    children: (0, g.jsx)(i.gC, {
                      children: (0, g.jsxs)(i.Ug, {
                        paddingTop: 1,
                        children: [
                          (0, g.jsx)(j.zx, {
                            marginRight: 2,
                            onClick: t,
                            isDisabled: 1 == q,
                            colorScheme: "messenger",
                            variant: "outline",
                            children: "-",
                          }),
                          (0, g.jsx)(i.xv, {paddingRight: 2, children: q}),
                          (0, g.jsx)(j.zx, {
                            onClick: u,
                            colorScheme: "messenger",
                            variant: "outline",
                            children: "+",
                          }),
                          (0, g.jsx)(i.Ug, {
                            paddingLeft: 5,
                            children: (0, g.jsx)(j.zx, {
                              colorScheme: "messenger",
                              variant: "solid",
                              fontSize: 13,
                              fontWeight: 500,
                              onClick: function () {
                                v(h), e();
                              },
                              children: "Tambah Stok",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        r = function (a) {
          var b,
            c = a.isOpen,
            e = a.onClose,
            h = a.product_id,
            k = a.stock_opname_id,
            n = a.fetchStockOpname,
            q = (0, m.useState)(1),
            r = q[0],
            s = q[1],
            t = (0, o.pm)(),
            u = function () {
              s(r - 1);
            },
            v = function () {
              s(r + 1);
            },
            w =
              ((b = (0, d.Z)(
                f().mark(function a(b, c) {
                  var d, e, g;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.prev = 0),
                              (d = {productStock: r}),
                              (a.next = 4),
                              l.default.patch(
                                "/products/updateAddedStock/"
                                  .concat(b, "/")
                                  .concat(c),
                                d
                              )
                            );
                          case 4:
                            t({
                              description: (e = a.sent).data.message,
                              position: "top",
                              status: "success",
                              duration: 3e3,
                              isClosable: !0,
                            }),
                              n(),
                              (a.next = 14);
                            break;
                          case 9:
                            (a.prev = 9),
                              (a.t0 = a.catch(0)),
                              console.log({error: a.t0}),
                              t({
                                title: "Unexpected Fail!",
                                description: (
                                  null === (g = a.t0.response.data) ||
                                  void 0 === g
                                    ? void 0
                                    : g.message
                                )
                                  ? a.t0.response.data.message
                                  : a.t0.message,
                                position: "top",
                                status: "error",
                                duration: 3e3,
                                isClosable: !0,
                              });
                          case 14:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[0, 9]]
                  );
                })
              )),
              function (a, c) {
                return b.apply(this, arguments);
              });
          return (0, g.jsxs)(p.u_, {
            isOpen: c,
            onClose: e,
            children: [
              (0, g.jsx)(p.ZA, {}),
              (0, g.jsxs)(p.hz, {
                backgroundColor: "white",
                paddingTop: 4,
                paddingBottom: 9,
                paddingX: 5,
                maxWidth: 480,
                children: [
                  (0, g.jsx)(p.xB, {
                    children: (0, g.jsx)(i.xv, {
                      fontWeight: 500,
                      fontSize: 17,
                      children: "Ubah Tambahan Stok Produk",
                    }),
                  }),
                  (0, g.jsx)(p.ol, {margin: 5}),
                  (0, g.jsx)(p.fe, {
                    children: (0, g.jsx)(i.gC, {
                      children: (0, g.jsxs)(i.Ug, {
                        paddingTop: 1,
                        children: [
                          (0, g.jsx)(j.zx, {
                            marginRight: 2,
                            onClick: u,
                            isDisabled: 1 == r,
                            colorScheme: "messenger",
                            variant: "outline",
                            children: "-",
                          }),
                          (0, g.jsx)(i.xv, {paddingRight: 2, children: r}),
                          (0, g.jsx)(j.zx, {
                            onClick: v,
                            colorScheme: "messenger",
                            variant: "outline",
                            children: "+",
                          }),
                          (0, g.jsx)(i.Ug, {
                            paddingLeft: 5,
                            children: (0, g.jsx)(j.zx, {
                              colorScheme: "messenger",
                              variant: "solid",
                              fontSize: 13,
                              fontWeight: 500,
                              onClick: function () {
                                w(h, k), e();
                              },
                              children: "Ubah",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        s = function (a) {
          var b,
            c = a.isOpen,
            e = a.onClose,
            h = a.product_id,
            k = a.fetchStockOpname,
            m = a.stock_opname_id,
            n = (0, o.pm)(),
            q =
              ((b = (0, d.Z)(
                f().mark(function a(b, c) {
                  var d, e;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.prev = 0),
                              (a.next = 3),
                              l.default.delete(
                                "/products/deleteAddedStock/"
                                  .concat(b, "/")
                                  .concat(c)
                              )
                            );
                          case 3:
                            n({
                              description: (d = a.sent).data.message,
                              position: "top",
                              status: "success",
                              duration: 3e3,
                              isClosable: !0,
                            }),
                              k(),
                              (a.next = 13);
                            break;
                          case 8:
                            (a.prev = 8),
                              (a.t0 = a.catch(0)),
                              console.log({error: a.t0}),
                              n({
                                title: "Unexpected Fail!",
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
                              });
                          case 13:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[0, 8]]
                  );
                })
              )),
              function (a, c) {
                return b.apply(this, arguments);
              });
          return (0, g.jsxs)(p.u_, {
            isOpen: c,
            onClose: e,
            children: [
              (0, g.jsx)(p.ZA, {}),
              (0, g.jsxs)(p.hz, {
                backgroundColor: "white",
                paddingTop: 4,
                paddingBottom: 9,
                paddingX: 5,
                maxWidth: 480,
                children: [
                  (0, g.jsx)(p.xB, {
                    children: (0, g.jsx)(i.xv, {
                      fontWeight: 500,
                      fontSize: 18,
                      children: "Hapus Tambahan Stock?",
                    }),
                  }),
                  (0, g.jsx)(p.ol, {margin: 5}),
                  (0, g.jsx)(p.fe, {
                    children: (0, g.jsx)(i.gC, {
                      children: (0, g.jsx)(i.Ug, {
                        paddingTop: 1,
                        children: (0, g.jsxs)(i.Ug, {
                          paddingLeft: 5,
                          children: [
                            (0, g.jsx)(j.zx, {
                              colorScheme: "red",
                              variant: "outline",
                              fontSize: 16,
                              fontWeight: 500,
                              width: 105,
                              marginRight: 2,
                              onClick: function () {
                                e();
                              },
                              children: "Tidak",
                            }),
                            (0, g.jsx)(j.zx, {
                              colorScheme: "green",
                              variant: "outline",
                              fontSize: 16,
                              fontWeight: 500,
                              width: 105,
                              onClick: function () {
                                q(h, m), e();
                              },
                              children: "Ya",
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        t = c(3382),
        u = c(9198),
        v = c.n(u);
      c(39828);
      var w = !0,
        x = function (a) {
          var b,
            c,
            e = (0, k.useRouter)(),
            o = a.product_id,
            p = (0, m.useState)(!0),
            u = p[0],
            w = p[1],
            x = (0, m.useState)(!1),
            y = x[0],
            z = x[1],
            A = (0, m.useState)(!1),
            B = A[0],
            C = A[1],
            D = (0, m.useState)(!1),
            E = D[0],
            F = D[1],
            G = (0, m.useState)(),
            H = G[0],
            I = G[1],
            J = (0, m.useState)(
              null === (c = a.stockOpname) || void 0 === c
                ? void 0
                : c.resGetStockOpname
            ),
            K = J[0],
            L = J[1],
            M = (0, m.useState)(),
            N = M[0],
            O = M[1],
            P = (0, m.useState)(),
            Q = P[0],
            R = P[1];
          function S() {
            return T.apply(this, arguments);
          }
          function T() {
            return (T = (0, d.Z)(
              f().mark(function a() {
                var b, c, d;
                return f().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            N && (b = new Date(N)).setHours(N.getHours() + 7),
                            Q && (c = new Date(Q)).setHours(Q.getHours() + 7),
                            (a.next = 7),
                            l.default.get("/stockOpname/".concat(o), {
                              params: {paramsStartDate: b, paramsEndDate: c},
                            })
                          );
                        case 7:
                          L((d = a.sent).data.resGetStockOpname), (a.next = 14);
                          break;
                        case 11:
                          (a.prev = 11),
                            (a.t0 = a.catch(0)),
                            console.log({error: a.t0});
                        case 14:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 11]]
                );
              })
            )).apply(this, arguments);
          }
          return (
            (0, m.useEffect)(
              function () {
                S();
              },
              [N, Q]
            ),
            (0, g.jsxs)("div", {
              className: "flex w-[100vw] h-[100vh] overflow-auto ",
              children: [
                (0, g.jsx)(n.Z, {path: e.pathname}),
                (0, g.jsxs)(i.gC, {
                  align: "start",
                  children: [
                    (0, g.jsxs)(i.xu, {
                      children: [
                        (0, g.jsxs)(i.gC, {
                          align: "start",
                          children: [
                            (0, g.jsx)(i.xv, {
                              fontSize: 24,
                              fontWeight: 500,
                              marginTop: 7,
                              marginLeft: 85,
                              marginBottom: 5,
                              children: "Riwayat Produk",
                            }),
                            (0, g.jsx)(i.Ug, {
                              paddingBottom: 4,
                              children: (0, g.jsxs)(j.zx, {
                                variant: "outline",
                                colorScheme: "linkedin",
                                marginLeft: 155,
                                onClick: function () {
                                  z(!0);
                                },
                                children: [
                                  (0, g.jsx)(i.xv, {
                                    children: "Tambah Stok Produk",
                                  }),
                                  (0, g.jsx)(q, {
                                    isOpen: y,
                                    product_id: o,
                                    fetchStockOpname: S,
                                    onClick: function () {
                                      onClose();
                                    },
                                    onClose: function () {
                                      return z(!1);
                                    },
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, g.jsxs)(i.Ug, {
                          paddingLeft: 155,
                          paddingBottom: 2,
                          children: [
                            (0, g.jsx)(i.Ug, {
                              children: (0, g.jsx)(v(), {
                                placeholderText: "Start date",
                                className:
                                  "border-black border-solid border-[2px] rounded-[.3vw] pl-3 text-black",
                                selected: N,
                                onChange: function (a) {
                                  O(a);
                                },
                              }),
                            }),
                            (0, g.jsx)(i.Ug, {
                              children: (0, g.jsx)(v(), {
                                placeholderText: "End date",
                                className:
                                  "border-black border-solid border-[2px] rounded-[.3vw] pl-3 text-black",
                                selected: Q,
                                onChange: function (a) {
                                  R(a);
                                },
                              }),
                            }),
                            (0, g.jsx)(i.Ug, {
                              children: (0, g.jsx)(j.zx, {
                                colorScheme: "linkedin",
                                variant: "ghost",
                                onClick: function () {
                                  O(), R();
                                },
                                children: "Reset Filter",
                              }),
                            }),
                            (0, g.jsx)(i.Ug, {
                              paddingLeft: 2,
                              children: (0, g.jsxs)(j.zx, {
                                variant: "outline",
                                colorScheme: "linkedin",
                                onClick: function () {
                                  w(!u);
                                },
                                children: [
                                  "Sort By Date : ",
                                  u ? "Asc" : "Desc",
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, g.jsx)(i.gC, {
                      className: "overflow-auto scrollbar",
                      paddingLeft: 155,
                      children: (0, g.jsxs)(h.iA, {
                        size: "lg",
                        height: "10vh",
                        variant: "striped",
                        border: "2px",
                        alignSelf: "center",
                        children: [
                          (0, g.jsx)(h.hr, {
                            children: (0, g.jsxs)(h.Tr, {
                              border: "2px",
                              children: [
                                (0, g.jsx)(h.Th, {
                                  textAlign: "center",
                                  children: "Tanggal",
                                }),
                                (0, g.jsx)(h.Th, {
                                  textAlign: "center",
                                  children: "Nama Obat",
                                }),
                                (0, g.jsx)(h.Th, {
                                  textAlign: "center",
                                  children: "Quantity",
                                }),
                                (0, g.jsx)(h.Th, {
                                  textAlign: "center",
                                  children: "Aktivitas",
                                }),
                                (0, g.jsx)(h.Th, {
                                  textAlign: "center",
                                  children: "Pengaturan",
                                }),
                              ],
                            }),
                          }),
                          (0, g.jsx)(r, {
                            isOpen: B,
                            product_id: o,
                            stock_opname_id: H,
                            fetchStockOpname: S,
                            onClose: function () {
                              return C(!1);
                            },
                          }),
                          (0, g.jsx)(s, {
                            isOpen: E,
                            product_id: o,
                            stock_opname_id: H,
                            fetchStockOpname: S,
                            onClose: function () {
                              return F(!1);
                            },
                          }),
                          (0, g.jsx)(h.p3, {
                            children:
                              ((b = []),
                              K.length &&
                                K.forEach(function (a) {
                                  b.push({
                                    createdAt: a.createdAt.slice(0, 10),
                                    productName: a.product.productName,
                                    qty: a.stock,
                                    activity: a.activity,
                                    stock_opname_id: a.stock_opname_id,
                                  });
                                }),
                              b.sort(function (a, b) {
                                var c = a.createdAt,
                                  d = b.createdAt;
                                return c < d
                                  ? u
                                    ? -1
                                    : 1
                                  : c > d
                                  ? u
                                    ? 1
                                    : -1
                                  : void 0;
                              }),
                              b.map(function (a, b) {
                                var c = new Date().toJSON();
                                return (0, g.jsxs)(
                                  h.Tr,
                                  {
                                    children: [
                                      (0, g.jsx)(h.Td, {
                                        textAlign: "center",
                                        children: a.createdAt,
                                      }),
                                      (0, g.jsx)(h.Td, {
                                        textAlign: "center",
                                        children: a.productName,
                                      }),
                                      (0, g.jsx)(h.Td, {
                                        textAlign: "center",
                                        children: a.qty,
                                      }),
                                      (0, g.jsx)(h.Td, {
                                        textAlign: "center",
                                        children: a.activity
                                          .toUpperCase()
                                          .split("_")
                                          .join(" "),
                                      }),
                                      (0, g.jsx)(h.Td, {
                                        children:
                                          "tambah_stok" == a.activity &&
                                          a.createdAt.slice(0, 10) ==
                                            c.slice(0, 10)
                                            ? (0, g.jsxs)(i.Ug, {
                                                marginLeft: 7,
                                                children: [
                                                  (0, g.jsx)(j.zx, {
                                                    height: 4,
                                                    width: 4,
                                                    colorScheme: "white",
                                                    variant: "solid",
                                                    size: "xxs",
                                                    onClick: function () {
                                                      C(!0),
                                                        I(a.stock_opname_id);
                                                    },
                                                    children: (0, g.jsx)(t.dY, {
                                                      w: 3.5,
                                                      h: 3.5,
                                                      color: "#004776",
                                                    }),
                                                  }),
                                                  (0, g.jsx)(j.zx, {
                                                    height: 4,
                                                    width: 4,
                                                    colorScheme: "white",
                                                    variant: "solid",
                                                    size: "xxs",
                                                    onClick: function () {
                                                      F(!0),
                                                        I(a.stock_opname_id);
                                                    },
                                                    children: (0, g.jsx)(t.pJ, {
                                                      w: 3.5,
                                                      h: 3.5,
                                                      color: "#004776",
                                                    }),
                                                  }),
                                                ],
                                              })
                                            : null,
                                      }),
                                    ],
                                  },
                                  a.product_id
                                );
                              })),
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
  },
  function (a) {
    a.O(
      0,
      [9669, 1490, 9862, 900, 5551, 7674, 3382, 4627, 9774, 2888, 179],
      function () {
        var b;
        return a((a.s = 92836));
      }
    ),
      (_N_E = a.O());
  },
]);
