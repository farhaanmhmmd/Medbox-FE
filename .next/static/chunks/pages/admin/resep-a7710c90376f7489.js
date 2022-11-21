(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2503],
  {
    20595: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/resep",
        function () {
          return c(94108);
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
    12703: function (a, b, c) {
      "use strict";
      var d = (0, c(31677).B1)({
        fonts: {
          heading: "'Poppins', sans-serif",
          body: "'Poppins', sans-serif",
        },
      });
      b.Z = d;
    },
    39499: function (a, b, c) {
      "use strict";
      Object.defineProperty(b, "__esModule", {value: !0});
      var d = c(77220).API_URL;
      a.exports = {api_origin: d};
    },
    94108: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return y;
          },
        });
      var d = c(34727),
        e = c(34051),
        f = c.n(e),
        g = c(85893),
        h = c(52522),
        i = c(11163),
        j = c(84221),
        k = c(43699),
        l = c(48641),
        m = c(23887),
        n = c(47741),
        o = c(33299),
        p = c(67294),
        q = c(57026),
        r = c(3382),
        s = c(25675),
        t = c.n(s);
      c(41664);
      var u = c(39499),
        v = c(77220);
      function w(a) {
        var b = a.trans_id,
          c = a.deliveryCost,
          e = a.prescriptionImage,
          h = a.createdAt,
          i = a.products,
          k = a.userId,
          m = (0, p.useState)(!1),
          o = m[0],
          s = m[1],
          w = (0, p.useState)(""),
          x = w[0],
          y = w[1],
          z = (0, p.useState)(!1),
          A = (z[0], z[1]),
          B = (0, p.useState)(!1),
          C = B[0];
        B[1];
        var D = (0, j.pm)();
        (0, p.useEffect)(function () {}, [C]);
        var E = function (a) {
          y(a.target.value);
        };
        function F() {
          return (F = (0, d.Z)(
            f().mark(function a() {
              var c, d, e, g;
              return f().wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (a.prev = 0),
                          A(!0),
                          (d = {
                            product_id: (c = parseInt(x)),
                            transaction_id: b,
                            user_id: k,
                          }),
                          (a.next = 6),
                          v.default.patch("/transactions/adminConfirm", d)
                        );
                      case 6:
                        (e = a.sent) &&
                          (D({
                            title: "Prescription Confirmed!",
                            description: e.data.message,
                            position: "top",
                            status: "success",
                            duration: 3e3,
                            isClosable: !0,
                          }),
                          A(!1),
                          y(""),
                          setTimeout(function () {
                            window.location.reload();
                          }, 3e3)),
                          (a.next = 16);
                        break;
                      case 10:
                        (a.prev = 10),
                          (a.t0 = a.catch(0)),
                          D({
                            title: "Unexpected Fail!",
                            description: (
                              null === (g = a.t0.response.data) || void 0 === g
                                ? void 0
                                : g.message
                            )
                              ? a.t0.response.data.message
                              : a.t0.message,
                            position: "top",
                            status: "error",
                            duration: 3e3,
                            isClosable: !0,
                          }),
                          A(!1),
                          y("");
                      case 16:
                      case "end":
                        return a.stop();
                    }
                },
                a,
                null,
                [[0, 10]]
              );
            })
          )).apply(this, arguments);
        }
        return (0, g.jsxs)(l.xu, {
          marginTop: 3,
          children: [
            (0, g.jsxs)(l.xv, {
              fontWeight: 600,
              marginBottom: 1,
              marginLeft: "81",
              children: ["No. Invoice: ", b],
            }),
            (0, g.jsxs)(l.Ug, {
              bg: "gray.50",
              height: 125,
              spacing: "5vH",
              marginBottom: 3,
              ml: "70",
              px: 8,
              rounded: 6,
              boxShadow: "md",
              children: [
                (0, g.jsx)(t(), {
                  unoptimized: !0,
                  alt: "resep-logo",
                  width: 70,
                  height: 70,
                  src: u.api_origin + e,
                }),
                (0, g.jsx)(l.gC, {
                  children: (0, g.jsx)(l.xv, {
                    w: "25vH",
                    fontSize: 16,
                    fontWeight: 600,
                    children: "Resep Dokter",
                  }),
                }),
                (0, g.jsxs)(l.xv, {
                  w: "30vH",
                  fontSize: "15",
                  fontWeight: 500,
                  children: ["Biaya Pengiriman: Rp ", c.toLocaleString("id")],
                }),
                (0, g.jsxs)(l.gC, {
                  textAlign: "center",
                  fontWeight: 500,
                  children: [
                    (0, g.jsx)(l.xv, {
                      w: "35vH",
                      fontSize: "14",
                      children: "Tanggal Pemesanan:",
                    }),
                    (0, g.jsx)(l.xv, {
                      w: "37vH",
                      fontSize: "13",
                      children: h.slice(0, 10),
                    }),
                  ],
                }),
                o
                  ? (0, g.jsxs)(l.Ug, {
                      children: [
                        (0, g.jsx)(q.Ph, {
                          fontSize: "md",
                          placeholder: "pilih obat racik",
                          variant: "flushed",
                          onChange: E,
                          children: i.map(function (a) {
                            if (a.formula)
                              return (0, g.jsx)(
                                "option",
                                {
                                  value: "".concat(a.product_id),
                                  children: a.productName,
                                },
                                a.product_id
                              );
                          }),
                        }),
                        x
                          ? (0, g.jsx)(n.zx, {
                              color: "green.300",
                              variant: "ghost",
                              fontSize: 13,
                              fontWeight: 500,
                              onClick: function () {
                                return F.apply(this, arguments);
                              },
                              children: (0, g.jsx)(r.nQ, {}),
                            })
                          : (0, g.jsx)(g.Fragment, {}),
                        (0, g.jsx)(n.zx, {
                          color: "red.300",
                          variant: "ghost",
                          fontSize: 13,
                          fontWeight: 500,
                          onClick: function () {
                            s(!1), y("");
                          },
                          children: (0, g.jsx)(r.Db, {}),
                        }),
                      ],
                    })
                  : (0, g.jsx)(n.zx, {
                      color: "linkedin.500",
                      variant: "link",
                      paddingRight: 95,
                      fontSize: 13,
                      fontWeight: 500,
                      onClick: function () {
                        s(!0), y("");
                      },
                      children: (0, g.jsx)(l.xv, {
                        w: "11vH",
                        fontSize: "16",
                        fontWeight: 600,
                        children: "Tambah Obat",
                      }),
                    }),
              ],
            }),
          ],
        });
      }
      var x = c(12703),
        y = function (a) {
          var b = (0, p.useState)([]),
            c = b[0],
            e = b[1],
            q = (0, p.useState)(0),
            r = q[0];
          q[1];
          var s = (0, p.useState)(1),
            t = s[0],
            u = s[1],
            y = (0, p.useState)(3),
            z = y[0];
          y[1];
          var A = (0, p.useState)([]),
            B = A[0],
            C = A[1],
            D = (0, p.useState)(!0),
            E = D[0],
            F = D[1],
            G = (0, i.useRouter)(),
            H = (0, j.pm)(),
            I = G.pathname;
          (0, p.useEffect)(
            function () {
              O(), N();
            },
            [r, t]
          );
          var J,
            K,
            L = function () {
              u(t - 1);
            },
            M = function () {
              u(t + 1);
            },
            N =
              ((J = (0, d.Z)(
                f().mark(function a() {
                  var b, c;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.prev = 0),
                              (a.next = 3),
                              v.default.get("products")
                            );
                          case 3:
                            C((b = a.sent).data.data.resGetAllProducts),
                              (a.next = 12);
                            break;
                          case 7:
                            (a.prev = 7),
                              (a.t0 = a.catch(0)),
                              console.log({error: a.t0}),
                              H({
                                title: "Unexpected Fail!",
                                description: (
                                  null === (c = a.t0.response.data) ||
                                  void 0 === c
                                    ? void 0
                                    : c.message
                                )
                                  ? a.t0.response.data.message
                                  : a.t0.message,
                                position: "top",
                                status: "error",
                                duration: 3e3,
                                isClosable: !0,
                              });
                          case 12:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[0, 7]]
                  );
                })
              )),
              function () {
                return J.apply(this, arguments);
              }),
            O =
              ((K = (0, d.Z)(
                f().mark(function a() {
                  var b, c, d, g, h;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.prev = 0), (a.next = 3), (0, o.getSession)()
                            );
                          case 3:
                            return (
                              (c = (b = a.sent).user.user_token),
                              (d = {
                                params: {page: t, pageSize: z},
                                headers: {Authorization: "Bearer ".concat(c)},
                              }),
                              (a.next = 8),
                              v.default.get(
                                "/transactions/admin/transactionsByPrescription",
                                d
                              )
                            );
                          case 8:
                            e((g = a.sent).data.data.resFetchTransactions),
                              F(!g.data.data.resFetchTransactionsNext.length),
                              (a.next = 18);
                            break;
                          case 13:
                            (a.prev = 13),
                              (a.t0 = a.catch(0)),
                              console.log({error: a.t0}),
                              H({
                                title: "Unexpected Fail!",
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
                              });
                          case 18:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[0, 13]]
                  );
                })
              )),
              function () {
                return K.apply(this, arguments);
              });
          return (0, g.jsx)(k.xjn, {
            theme: x.Z,
            children: (0, g.jsxs)("div", {
              className: "flex w-[100vw] h-[100vh]",
              children: [
                (0, g.jsx)(h.Z, {path: I}),
                (0, g.jsxs)(l.gC, {
                  align: "start",
                  w: "85%",
                  h: "100%",
                  children: [
                    (0, g.jsx)(l.xu, {
                      children: (0, g.jsx)(l.xv, {
                        fontSize: 21,
                        fontWeight: 500,
                        marginTop: 8,
                        marginBottom: 4,
                        marginLeft: 16,
                        marginRight: 310,
                        children: "Daftar Pesanan dengan Resep Dokter",
                      }),
                    }),
                    c.length
                      ? (0, g.jsx)("div", {
                          children:
                            null == c
                              ? void 0
                              : c.map(function (b) {
                                  return (0,
                                  g.jsx)(w, {prescriptionImage: b.prescriptionImage, trans_id: b.transaction_id, userId: b.user_id, deliveryCost: b.deliveryCost, createdAt: b.createdAt, transac: c, props: a, products: B}, b.transaction_id);
                                }),
                        })
                      : (0, g.jsx)(l.gC, {
                          paddingTop: 100,
                          alignSelf: "center",
                          children: (0, g.jsxs)(l.xu, {
                            align: "center",
                            children: [
                              (0, g.jsx)(m.Ee, {
                                src: "/admin/Empty-Transaction.png",
                                width: 250,
                                height: 250,
                                alt: "",
                              }),
                              (0, g.jsx)(l.xv, {
                                paddingTop: 6,
                                fontSize: 18,
                                children: "Tidak Ada Pesanan",
                              }),
                            ],
                          }),
                        }),
                    c.length
                      ? (0, g.jsxs)(l.Ug, {
                          paddingLeft: 510,
                          paddingTop: 5,
                          children: [
                            (0, g.jsx)(n.zx, {
                              marginRight: 2,
                              onClick: L,
                              isDisabled: 1 == t,
                              colorScheme: "messenger",
                              children: "Prev",
                            }),
                            (0, g.jsx)(l.xv, {paddingRight: 2, children: t}),
                            (0, g.jsx)(n.zx, {
                              onClick: M,
                              isDisabled: E,
                              colorScheme: "messenger",
                              children: "Next",
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
              ],
            }),
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
    a.O(0, [9669, 1490, 9862, 3382, 6678, 9774, 2888, 179], function () {
      var b;
      return a((a.s = 20595));
    }),
      (_N_E = a.O());
  },
]);
