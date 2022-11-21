(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8496],
  {
    65600: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/laporan/[params]",
        function () {
          return c(88644);
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
    88644: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          __N_SSP: function () {
            return q;
          },
        });
      var d = c(34727),
        e = c(34051),
        f = c.n(e),
        g = c(85893),
        h = c(67294),
        i = c(52522),
        j = c(11163),
        k = c(33299),
        l = c(77220),
        m = c(36696),
        n = c(47741),
        o = c(9198),
        p = c.n(o);
      c(39828);
      var q = !0;
      b.default = function (a) {
        var b,
          c,
          e = (0, j.useRouter)(),
          o = (0, k.useSession)(),
          q = e.query.params,
          r = (0, h.useState)(q),
          s = r[0],
          t = r[1],
          u = (0, h.useState)(!0),
          v = u[0],
          w = u[1],
          x = (0, h.useState)(!0),
          y = x[0],
          z = x[1],
          A = (0, h.useState)("date"),
          B = A[0],
          C = A[1],
          D = (0, h.useState)(
            null === (b = a.byProduct) || void 0 === b
              ? void 0
              : b.allTransaction
          ),
          E = D[0],
          F = D[1],
          G = (0, h.useState)(),
          H = G[0],
          I = G[1],
          J = (0, h.useState)(),
          K = J[0],
          L = J[1];
        (0, h.useEffect)(
          function () {
            t(q), w(!0), M();
          },
          [q, H, K]
        );
        function M() {
          return N.apply(this, arguments);
        }
        function N() {
          return (N = (0, d.Z)(
            f().mark(function a() {
              var b, c, d;
              return f().wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (a.prev = 0),
                          H && (b = new Date(H)).setHours(H.getHours() + 7),
                          K && (c = new Date(K)).setHours(K.getHours() + 7),
                          (a.next = 7),
                          l.default.get("transactions/all/products", {
                            params: {paramsStartDate: b, paramsEndDate: c},
                          })
                        );
                      case 7:
                        F((d = a.sent).data.allTransaction), (a.next = 14);
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
        o.data && !o.data.user.user.isAdmin && e.replace("/");
        var O = e.pathname;
        return (0, g.jsxs)("div", {
          className: "flex w-[100vw] h-[100vh]",
          children: [
            (0, g.jsx)(i.Z, {path: O}),
            (0, g.jsx)("div", {
              className: "w-[85%] h-[100%] flex justify-center",
              children: (0, g.jsxs)("div", {
                className: "w-[90%] h-[100%]",
                children: [
                  (0, g.jsx)("div", {
                    className: "h-[10%] flex items-center",
                    children: (0, g.jsx)("p", {
                      className: "text-[2rem] mr-[3vw]",
                      children: "Laporan penjualan",
                    }),
                  }),
                  (0, g.jsxs)("div", {
                    className: "flex items-center h-[10%] w-[100%]",
                    children: [
                      (0, g.jsxs)("div", {
                        className:
                          "w-[40%] h-[70%] flex flex-col justify-end pb-[.5vh] text-white text-[1rem] bg-[#008DEB] px-[.5vw] rounded-[.5vw]",
                        children: [
                          (0, g.jsx)("div", {children: "Filter by Date"}),
                          (0, g.jsxs)("div", {
                            className: "flex w-[100%]",
                            children: [
                              (0, g.jsx)(p(), {
                                placeholderText: "Start date",
                                className:
                                  "border-black w-[14vw] border-solid border-[2px] rounded-[.3vw] pl-3 text-black",
                                selected: H,
                                onChange: function (a) {
                                  I(a);
                                },
                              }),
                              (0, g.jsx)(p(), {
                                placeholderText: "End date",
                                className:
                                  "border-black w-[14vw] border-solid border-[2px] rounded-[.3vw] pl-3 text-black",
                                selected: K,
                                onChange: function (a) {
                                  L(a);
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, g.jsx)(n.zx, {
                        colorScheme: "linkedin",
                        variant: "ghost",
                        className: "mx-[3vw]",
                        onClick: function () {
                          I(), L();
                        },
                        children: "Reset Filter",
                      }),
                      (0, g.jsxs)("div", {
                        className: "flex w-[30%] justify-between",
                        children: [
                          (0, g.jsx)(n.zx, {
                            width: "15%",
                            onClick: function () {
                              z(!y);
                            },
                            children: y ? "Asc" : "Desc",
                          }),
                          (0, g.jsx)(n.zx, {
                            colorScheme:
                              "totalPrice" == B ? "linkedin" : "gray",
                            onClick: function () {
                              C("totalPrice");
                            },
                            children: "By Total Price",
                          }),
                          (0, g.jsx)(n.zx, {
                            colorScheme: "date" == B ? "linkedin" : "gray",
                            onClick: function () {
                              C("date");
                            },
                            children: "By Date",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, g.jsxs)("div", {
                    className: "h-[80%] bg-gray-200 flex flex-col",
                    children: [
                      (0, g.jsx)("div", {
                        className:
                          "h-[10%] flex text-[1.3rem] hover:cursor-pointer",
                        children: ["Product", "Transaction", "User"].map(
                          function (a) {
                            return (0, g.jsxs)(
                              "div",
                              {
                                onClick: function () {
                                  e.replace(
                                    "/admin/laporan/".concat(a.toLowerCase())
                                  ),
                                    w(!v);
                                },
                                className: s.includes(a.toLowerCase())
                                  ? "w-[33.3%] flex justify-center items-center bg-[#008DEB] text-white"
                                  : "w-[33.3%] flex justify-center items-center ",
                                children: ["Per ", a],
                              },
                              a
                            );
                          }
                        ),
                      }),
                      (0, g.jsx)("div", {
                        className: "h-[90%] flex items-center justify-center ",
                        children: (
                          null === (c = a.byProduct) || void 0 === c
                            ? void 0
                            : c.allTransaction.length
                        )
                          ? (0, g.jsx)("div", {
                              className:
                                "w-[100%] h-[100%] overflow-auto scrollbar",
                              children: (0, g.jsx)(m.xJ, {
                                children: (0, g.jsxs)(m.iA, {
                                  variant: "striped",
                                  colorScheme: "blue",
                                  children: [
                                    (0, g.jsx)(m.hr, {
                                      children: (0, g.jsxs)(m.Tr, {
                                        children: [
                                          (0, g.jsx)(m.Th, {
                                            children: "Tanggal",
                                          }),
                                          (0, g.jsx)(m.Th, {
                                            children: "Transaction ID",
                                          }),
                                          (0, g.jsx)(m.Th, {children: "User"}),
                                          (0, g.jsx)(m.Th, {
                                            children: "User ID",
                                          }),
                                          (0, g.jsx)(m.Th, {
                                            children: "Product",
                                          }),
                                          (0, g.jsx)(m.Th, {
                                            children: "Quantity",
                                          }),
                                          (0, g.jsx)(m.Th, {children: "Total"}),
                                        ],
                                      }),
                                    }),
                                    (0, g.jsx)(m.p3, {
                                      children: (function () {
                                        var a = [];
                                        switch (
                                          (E.length &&
                                            (null == E ||
                                              E.forEach(function (b) {
                                                b.transaction_details.forEach(
                                                  function (c) {
                                                    a.push({
                                                      createdAt:
                                                        c.createdAt.slice(
                                                          0,
                                                          10
                                                        ),
                                                      transaction_id:
                                                        b.transaction_id,
                                                      transaction_details_id:
                                                        c.transaction_details_id,
                                                      userName: b.user.name,
                                                      user_id: b.user.user_id,
                                                      productName:
                                                        c.product.productName,
                                                      qty: c.quantity,
                                                      totalPrice: "Rp. ".concat(
                                                        (
                                                          c.product
                                                            .productPrice *
                                                          c.quantity
                                                        ).toLocaleString("id")
                                                      ),
                                                    });
                                                  }
                                                );
                                              })),
                                          s)
                                        ) {
                                          case "product":
                                            a = a.sort(function (a, b) {
                                              var c =
                                                  a.productName.toLowerCase(),
                                                d = b.productName.toLowerCase(),
                                                e = a.createdAt,
                                                f = b.createdAt,
                                                g = parseInt(
                                                  a.totalPrice
                                                    .slice(4)
                                                    .split(".")
                                                    .join("")
                                                ),
                                                h = parseInt(
                                                  b.totalPrice
                                                    .slice(4)
                                                    .split(".")
                                                    .join("")
                                                );
                                              if (c < d) return v ? -1 : 1;
                                              if (c > d) return v ? 1 : -1;
                                              if (c == d) {
                                                if ("date" == B) {
                                                  if (y) {
                                                    if (e < f) return -1;
                                                    if (e > f) return 1;
                                                    if (e == f) return 0;
                                                  } else if (!y) {
                                                    if (e < f) return 1;
                                                    if (e > f) return -1;
                                                    if (e == f) return 0;
                                                  }
                                                } else if ("totalPrice" == B) {
                                                  if (y) {
                                                    if (g < h) return -1;
                                                    if (g > h) return 1;
                                                    if (g == h) return 0;
                                                  } else if (!y) {
                                                    if (g < h) return 1;
                                                    if (g > h) return -1;
                                                    if (g == h) return 0;
                                                  }
                                                }
                                              }
                                            });
                                            break;
                                          case "transaction":
                                            a = a.sort(function (a, b) {
                                              var c = a.createdAt,
                                                d = b.createdAt,
                                                e = parseInt(
                                                  a.totalPrice
                                                    .slice(4)
                                                    .split(".")
                                                    .join("")
                                                ),
                                                f = parseInt(
                                                  b.totalPrice
                                                    .slice(4)
                                                    .split(".")
                                                    .join("")
                                                );
                                              if (
                                                a.transaction_id -
                                                  b.transaction_id ==
                                                0
                                              ) {
                                                if ("date" == B) {
                                                  if (y) {
                                                    if (c < d) return -1;
                                                    if (c > d) return 1;
                                                    if (c == d) return 0;
                                                  } else if (!y) {
                                                    if (c < d) return 1;
                                                    if (c > d) return -1;
                                                    if (c == d) return 0;
                                                  }
                                                } else if ("totalPrice" == B) {
                                                  if (y) {
                                                    if (e < f) return -1;
                                                    if (e > f) return 1;
                                                    if (e == f) return 0;
                                                  } else if (!y) {
                                                    if (e < f) return 1;
                                                    if (e > f) return -1;
                                                    if (e == f) return 0;
                                                  }
                                                }
                                              }
                                              return v
                                                ? a.transaction_id -
                                                    b.transaction_id
                                                : b.transaction_id -
                                                    a.transaction_id;
                                            });
                                            break;
                                          case "user":
                                            a = a.sort(function (a, b) {
                                              var c = a.userName.toLowerCase(),
                                                d = b.userName.toLowerCase(),
                                                e = a.createdAt,
                                                f = b.createdAt,
                                                g = parseInt(
                                                  a.totalPrice
                                                    .slice(4)
                                                    .split(".")
                                                    .join("")
                                                ),
                                                h = parseInt(
                                                  b.totalPrice
                                                    .slice(4)
                                                    .split(".")
                                                    .join("")
                                                );
                                              if (c < d) return v ? -1 : 1;
                                              if (c > d) return v ? 1 : -1;
                                              if (c == d) {
                                                if ("date" == B) {
                                                  if (y) {
                                                    if (e < f) return -1;
                                                    if (e > f) return 1;
                                                    if (e == f) return 0;
                                                  } else if (!y) {
                                                    if (e < f) return 1;
                                                    if (e > f) return -1;
                                                    if (e == f) return 0;
                                                  }
                                                } else if ("totalPrice" == B) {
                                                  if (y) {
                                                    if (g < h) return -1;
                                                    if (g > h) return 1;
                                                    if (g == h) return 0;
                                                  } else if (!y) {
                                                    if (g < h) return 1;
                                                    if (g > h) return -1;
                                                    if (g == h) return 0;
                                                  }
                                                }
                                              }
                                            });
                                        }
                                        return a.map(function (a) {
                                          return (0,
                                          g.jsxs)(m.Tr, {children: [(0, g.jsx)(m.Td, {children: a.createdAt}), (0, g.jsx)(m.Td, {children: a.transaction_id}), (0, g.jsx)(m.Td, {children: a.userName}), (0, g.jsx)(m.Td, {children: a.user_id}), (0, g.jsx)(m.Td, {children: a.productName}), (0, g.jsx)(m.Td, {children: a.qty}), (0, g.jsx)(m.Td, {children: a.totalPrice})]}, a.transaction_details_id);
                                        });
                                      })(),
                                    }),
                                  ],
                                }),
                              }),
                            })
                          : (0, g.jsx)("div", {
                              className: "text-[1.5rem]",
                              children: "No Transactions yet",
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
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
    a.O(0, [9669, 1490, 5551, 4627, 5735, 9774, 2888, 179], function () {
      var b;
      return a((a.s = 65600));
    }),
      (_N_E = a.O());
  },
]);
