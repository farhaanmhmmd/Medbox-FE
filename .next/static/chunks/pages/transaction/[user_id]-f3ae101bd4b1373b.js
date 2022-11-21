(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7187],
  {
    14843: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/transaction/[user_id]",
        function () {
          return c(44334);
        },
      ]);
    },
    56556: function (a, b, c) {
      "use strict";
      var d = c(34727),
        e = c(34051),
        f = c.n(e),
        g = c(85893),
        h = c(67294),
        i = c(25675),
        j = c.n(i),
        k = c(84221),
        l = c(51453),
        m = c(47741),
        n = c(77220),
        o = c(41664),
        p = c.n(o),
        q = c(33299);
      b.Z = function (a) {
        var b,
          c = (0, h.useState)(a.session),
          e = c[0],
          i = c[1],
          o = (0, h.useState)(""),
          r = o[0],
          s = o[1],
          t = h.useRef(),
          u = (0, k.pm)();
        (0, h.useEffect)(function () {
          w();
        }, []);
        var v =
          ((b = (0, d.Z)(
            f().mark(function a() {
              var b, c;
              return f().wrap(function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (b = {
                          email: e.user.user.email,
                          user_id: e.user.user.user_id,
                        }),
                        (a.next = 3),
                        n.default.post("/users/resendVerif", b)
                      );
                    case 3:
                      u({
                        description: (c = a.sent).data.message,
                        position: "top",
                        status: "success",
                        duration: 3e3,
                        isClosable: !0,
                      });
                    case 5:
                    case "end":
                      return a.stop();
                  }
              }, a);
            })
          )),
          function () {
            return b.apply(this, arguments);
          });
        function w() {
          return x.apply(this, arguments);
        }
        function x() {
          return (x = (0, d.Z)(
            f().mark(function a() {
              var b, c, e, g;
              return f().wrap(function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (e = function () {
                          return g.apply(this, arguments);
                        }),
                        (g = function () {
                          return (g = (0, d.Z)(
                            f().mark(function a() {
                              return f().wrap(function (a) {
                                for (;;)
                                  switch ((a.prev = a.next)) {
                                    case 0:
                                      try {
                                        (0, q.signOut)();
                                      } catch (b) {
                                        console.log({error: b});
                                      }
                                    case 1:
                                    case "end":
                                      return a.stop();
                                  }
                              }, a);
                            })
                          )).apply(this, arguments);
                        }),
                        (a.next = 4),
                        (0, q.getSession)()
                      );
                    case 4:
                      (b = a.sent) && s((c = b.user.user.user_id)), i(b);
                    case 9:
                    case "end":
                      return a.stop();
                  }
              }, a);
            })
          )).apply(this, arguments);
        }
        return (0, g.jsx)("div", {
          className:
            "h-[100px] flex items-end desktop:h-[72px] shadow-[0px_6px_20px_0px_rgba(0,28,47,0.05)]",
          children: (0, g.jsxs)("div", {
            className:
              "flex w-[100%] h-[70px] desktop:h-[100%] items-center justify-between",
            children: [
              (0, g.jsxs)("div", {
                className: "flex ml-[7vw] h-[70%] items-center",
                children: [
                  (0, g.jsx)(p(), {
                    href: "/",
                    children: (0, g.jsx)("div", {
                      className: "w-[20vh]",
                      children: (0, g.jsx)(j(), {
                        className: "hover:cursor-pointer",
                        src: "/landingpage/Medbox.svg",
                        alt: "medbox-logo",
                        layout: "responsive",
                        width: 20,
                        height: 10,
                      }),
                    }),
                  }),
                  (0, g.jsxs)("div", {
                    className:
                      "desktop:flex ml-[5vw] justify-between w-[20vw] hidden",
                    children: [
                      (0, g.jsx)(p(), {
                        href: "/",
                        children: (0, g.jsx)("p", {
                          className:
                            "duration-300 ease-in-out bg-white text-[1vw] font-[500] hover:cursor-pointer hover:shadow-[0px_5px_0px_-2px_rgba(0,141,235,1)]",
                          children: "Beranda",
                        }),
                      }),
                      (0, g.jsx)(p(), {
                        href: "/productCatalog",
                        children: (0, g.jsx)("p", {
                          className:
                            "duration-300 ease-in-out bg-white text-[1vw] font-[500] hover:cursor-pointer hover:shadow-[0px_5px_0px_-2px_rgba(0,141,235,1)]",
                          children: "Toko Obat",
                        }),
                      }),
                      (0, g.jsx)(p(), {
                        href: "/transaction/".concat(r),
                        children: (0, g.jsx)("p", {
                          className:
                            "duration-300 ease-in-out bg-white text-[1vw] font-[500] hover:cursor-pointer hover:shadow-[0px_5px_0px_-2px_rgba(0,141,235,1)]",
                          children: "Riwayat",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, g.jsx)("div", {className: "grow"}),
              (0, g.jsxs)("div", {
                className:
                  "flex mr-[8vw] h-[70%] items-center justify-end w-[20vw]",
                children: [
                  (null == e ? void 0 : e.user.user.isVerified) || !e
                    ? ""
                    : (0, g.jsxs)(l.J2, {
                        initialFocusRef: t,
                        placement: "bottom",
                        closeOnBlur: !1,
                        children: [
                          (0, g.jsx)(l.xo, {
                            children: (0, g.jsx)(m.zx, {
                              color: "red.400",
                              variant: "ghost",
                              children: "Unverified Account",
                            }),
                          }),
                          (0, g.jsxs)(l.yk, {
                            w: "11vw",
                            h: "7.5vh",
                            children: [
                              (0, g.jsx)(l.QH, {}),
                              (0, g.jsx)(l.Yt, {
                                pt: 4,
                                fontWeight: "bold",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "0",
                                children: (0, g.jsx)(m.zx, {
                                  colorScheme: "linkedin",
                                  variant: "solid",
                                  onClick: v,
                                  children: "Resend Verification",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                  e && e.user.user.isVerified
                    ? (0, g.jsx)("div", {
                        className:
                          "w-[3.5vw] desktop:w-[1.2vw] hover:cursor-pointer ml-[4.5vw] desktop:ml-[2vw]",
                        children: (0, g.jsx)(p(), {
                          href: "/cart/".concat(r),
                          children: (0, g.jsx)(j(), {
                            src: "/landingpage/Cart.svg",
                            alt: "cart-logo",
                            layout: "responsive",
                            width: 19.2,
                            height: 20.4,
                          }),
                        }),
                      })
                    : "",
                  e && e.user.user.isVerified
                    ? (0, g.jsx)("div", {
                        className:
                          "hidden desktop:inline w-[3.5vw] desktop:w-[1.2vw] hover:cursor-pointer ml-[4.5vw] desktop:ml-[2vw]",
                        children: (0, g.jsx)(p(), {
                          href: "/profile",
                          children: (0, g.jsx)(j(), {
                            src: "/landingpage/Account.svg",
                            alt: "menu-logo",
                            layout: "responsive",
                            width: 20,
                            height: 20,
                          }),
                        }),
                      })
                    : "",
                ],
              }),
              e
                ? (0, g.jsx)("div", {
                    className: "hidden desktop:flex desktop:ml-[-5vw]",
                    children: (0, g.jsx)(m.zx, {
                      onClick: function () {
                        (0, q.signOut)();
                      },
                      variant: "outline",
                      colorScheme: "linkedin",
                      sx: {
                        width: "6vw",
                        height: "5vh",
                        borderRadius: "1.2vh",
                        marginRight: "2vw",
                      },
                      children: "Logout",
                    }),
                  })
                : (0, g.jsx)("div", {
                    className: "hidden desktop:flex desktop:ml-[-8vw]",
                    children: (0, g.jsx)(p(), {
                      href: "/login",
                      children: (0, g.jsx)(m.zx, {
                        variant: "outline",
                        colorScheme: "linkedin",
                        sx: {
                          width: "6vw",
                          height: "5vh",
                          borderRadius: "1.2vh",
                          marginRight: "2vw",
                        },
                        children: "Login",
                      }),
                    }),
                  }),
            ],
          }),
        });
      };
    },
    39499: function (a, b, c) {
      "use strict";
      Object.defineProperty(b, "__esModule", {value: !0});
      var d = c(77220).API_URL;
      a.exports = {api_origin: d};
    },
    44334: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          __N_SSP: function () {
            return u;
          },
          default: function () {
            return v;
          },
        });
      var d = c(34727),
        e = c(34051),
        f = c.n(e),
        g = c(85893),
        h = c(84221),
        i = c(48641),
        j = c(65806),
        k = c(23887),
        l = c(47741),
        m = c(33299),
        n = c(67294),
        o = c(56556),
        p = c(25675),
        q = c.n(p),
        r = c(39499);
      function s(a) {
        var b = a.trans_id,
          c = a.productName,
          d = (a.transactions, a.totalPrice),
          e = a.status,
          f = a.productImage,
          h = e.split("_");
        return (0, g.jsx)("div", {
          children: (0, g.jsxs)(i.Ug, {
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
              (0, g.jsx)(q(), {
                unoptimized: !0,
                alt: "resep-logo",
                width: 70,
                height: 70,
                src: r.api_origin + f,
              }),
              (0, g.jsx)(i.xu, {
                w: "180px",
                fontSize: "md",
                fontWeight: "bold",
                children: c,
              }),
              (0, g.jsxs)(i.xu, {
                w: "180px",
                children: ["Status: ", h.join(" ")],
              }),
              (0, g.jsxs)(i.xu, {
                w: "180px",
                children: ["Total Price: Rp. ", d.toLocaleString("id")],
              }),
              (0, g.jsx)(i.rU, {
                href: "/transactionDetail/".concat(b),
                children: (0, g.jsx)(l.zx, {
                  color: "linkedin.400",
                  variant: "link",
                  children: "Lihat Pesanan",
                }),
              }),
            ],
          }),
        });
      }
      var t = c(77220),
        u = !0,
        v = function (a) {
          var b = function () {
            return null == e
              ? void 0
              : e.map(function (b, c) {
                  return (0,
                  g.jsx)(s, {productName: b.transaction_details[0].product.productName, productImage: b.transaction_details[0].product.productImage, status: b.status, totalPrice: b.totalPrice, trans_id: b.transaction_id, props: a}, b.transaction_id);
                });
          };
          a.user_id;
          var c = (0, n.useState)([]),
            e = c[0],
            p = c[1],
            q = (0, n.useState)(1),
            r = q[0],
            u = q[1],
            v = (0, n.useState)(3),
            w = v[0];
          v[1];
          var x = (0, n.useState)(0),
            y = x[0],
            z = x[1],
            A = (0, h.pm)();
          (0, n.useEffect)(
            function () {
              E();
            },
            [y, r]
          );
          var B,
            C = function () {
              u(r - 1);
            },
            D = function () {
              u(r + 1);
            },
            E =
              ((B = (0, d.Z)(
                f().mark(function a() {
                  var b, c, d, e, g, h;
                  return f().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.prev = 0), (a.next = 3), (0, m.getSession)()
                            );
                          case 3:
                            return (
                              (c = (b = a.sent).user.user.user_id),
                              (d = b.user.user_token),
                              (e = {
                                params: {page: r, pageSize: w},
                                headers: {Authorization: "Bearer ".concat(d)},
                              }),
                              (a.next = 9),
                              t.default.get(
                                "/transactions/getTransactionsByIndex/"
                                  .concat(c, "/")
                                  .concat(y),
                                e
                              )
                            );
                          case 9:
                            p((g = a.sent).data.data.resFetchTransactions),
                              (a.next = 18);
                            break;
                          case 13:
                            (a.prev = 13),
                              (a.t0 = a.catch(0)),
                              console.log({error: a.t0}),
                              A({
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
                return B.apply(this, arguments);
              });
          return (0, g.jsxs)("div", {
            className: "h-[100vh] w-[100vw]",
            children: [
              (0, g.jsx)("div", {children: (0, g.jsx)(o.Z, {})}),
              (0, g.jsx)(i.xv, {
                fontSize: 30,
                fontWeight: "semibold",
                my: 8,
                ml: 20,
                children: "Riwayat Pemesanan",
              }),
              a.session.user.user.isVerified
                ? (0, g.jsxs)(j.mQ, {
                    onChange: function (a) {
                      z(a), u(1);
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
                      (0, g.jsxs)(j.td, {
                        children: [
                          (0, g.jsx)(j.OK, {children: "Semua"}),
                          (0, g.jsx)(j.OK, {children: "Diproses"}),
                          (0, g.jsx)(j.OK, {children: "Sedang Dikirim"}),
                          (0, g.jsx)(j.OK, {children: "Berhasil"}),
                          (0, g.jsx)(j.OK, {children: "Tidak Berhasil"}),
                          (0, g.jsx)(j.OK, {children: "Menunggu Pembayaran"}),
                          (0, g.jsx)(j.OK, {
                            children: "Menunggu Konfirmasi Pembayaran",
                          }),
                        ],
                      }),
                      e.length
                        ? (0, g.jsxs)(j.nP, {
                            children: [
                              (0, g.jsx)(j.x4, {
                                children: (0, g.jsx)("div", {children: b()}),
                              }),
                              (0, g.jsx)(j.x4, {
                                children: (0, g.jsx)("div", {children: b()}),
                              }),
                              (0, g.jsx)(j.x4, {
                                children: (0, g.jsx)("div", {children: b()}),
                              }),
                              (0, g.jsx)(j.x4, {
                                children: (0, g.jsx)("div", {children: b()}),
                              }),
                              (0, g.jsx)(j.x4, {
                                children: (0, g.jsx)("div", {children: b()}),
                              }),
                              (0, g.jsx)(j.x4, {
                                children: (0, g.jsx)("div", {children: b()}),
                              }),
                              (0, g.jsx)(j.x4, {
                                children: (0, g.jsx)("div", {children: b()}),
                              }),
                            ],
                          })
                        : (0, g.jsxs)(i.gC, {
                            marginTop: 105,
                            children: [
                              (0, g.jsx)(k.Ee, {
                                src: "/admin/Empty-Transaction.png",
                                width: 250,
                                height: 250,
                              }),
                              (0, g.jsx)(i.xv, {
                                paddingTop: 6,
                                fontSize: 18,
                                children: "Tidak Ada Transaksi",
                              }),
                            ],
                          }),
                      e.length
                        ? (0, g.jsxs)(i.Ug, {
                            paddingLeft: 210,
                            paddingBottom: 30,
                            children: [
                              (0, g.jsx)(l.zx, {
                                variant: "outline",
                                marginRight: 2,
                                onClick: C,
                                isDisabled: 1 == r,
                                colorScheme: "messenger",
                                children: "Prev",
                              }),
                              (0, g.jsx)(i.xv, {paddingRight: 2, children: r}),
                              (0, g.jsx)(l.zx, {
                                variant: "outline",
                                onClick: D,
                                isDisabled: r >= e.length,
                                colorScheme: "messenger",
                                children: "Next",
                              }),
                            ],
                          })
                        : (0, g.jsx)(i.gC, {}),
                    ],
                  })
                : (0, g.jsx)("div", {
                    className:
                      "w-[100%] h-[50%] flex items-center justify-center",
                    children: (0, g.jsx)("p", {
                      className: "text-[1.5rem]",
                      children: "Unverified Account",
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
    a.O(
      0,
      [9669, 1490, 9862, 900, 5551, 1453, 126, 9774, 2888, 179],
      function () {
        var b;
        return a((a.s = 14843));
      }
    ),
      (_N_E = a.O());
  },
]);
