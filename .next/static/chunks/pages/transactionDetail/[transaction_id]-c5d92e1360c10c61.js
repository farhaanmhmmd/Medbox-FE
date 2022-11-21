(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8843],
  {
    30904: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/transactionDetail/[transaction_id]",
        function () {
          return c(47897);
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
    47897: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          __N_SSP: function () {
            return v;
          },
          default: function () {
            return w;
          },
        });
      var d = c(34727),
        e = c(14251),
        f = c(52875),
        g = c(34051),
        h = c.n(g),
        i = c(85893),
        j = c(47741),
        k = c(48641),
        l = c(56556),
        m = c(77220),
        n = c(67294),
        o = c(33299),
        p = c(84221),
        q = c(25675),
        r = c.n(q),
        s = c(39499);
      function t(a) {
        a.product;
        var b = a.quantity,
          c = a.productPrice,
          d = (a.fetchCarts, a.productName),
          e = a.productImage;
        return (
          a.status,
          a.city_name,
          (0, i.jsxs)("div", {
            className:
              "flex items-center h-[20vh] w-[100%] my-[3vh] rounded-[1vw] shadow-[0px_6px_20px_0px_rgba(0,28,47,0.05)]",
            children: [
              (0, i.jsx)("div", {
                className: "h-[11vh] w-[11vh] bg-black ml-[2vw]",
                children: (0, i.jsx)(r(), {
                  unoptimized: !0,
                  alt: "resep-logo",
                  width: 1,
                  height: 1,
                  layout: "responsive",
                  src: s.api_origin + e,
                  loader: function () {
                    return e;
                  },
                }),
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col w-[40%] ml-[2vw]",
                children: [
                  (0, i.jsx)("p", {children: d}),
                  (0, i.jsxs)("p", {children: [b, " Buah"]}),
                ],
              }),
              (0, i.jsx)("div", {
                children: (0, i.jsxs)("p", {
                  children: ["Rp. ", c.toLocaleString("id")],
                }),
              }),
            ],
          })
        );
      }
      var u = c(11163),
        v = !0,
        w = function (a) {
          var b,
            c,
            g,
            q,
            r,
            s = (0, u.useRouter)(),
            v = a.transaction_details,
            w = a.transactions,
            x = a.user_id,
            y = (0, n.useState)(v.resFetchTransactionDetails),
            z = y[0];
          y[1];
          var A = (0, n.useState)(w.resFetchTransactions),
            B = A[0],
            C = A[1],
            D = (0, n.useState)(w.resFetchAddress),
            E = D[0];
          D[1];
          var F,
            G,
            H = (0, n.useState)({}),
            I = H[0],
            J = H[1],
            K = function (a) {
              J(a.target.files[0]);
            },
            L = (0, p.pm)();
          E.forEach(
            ((F = (0, d.Z)(
              h().mark(function a(d) {
                return h().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        (b = d.recipient),
                          (c = d.addressDetail),
                          (g = d.postalCode),
                          (q = d.province),
                          (r = d.city_name);
                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )),
            function (a) {
              return F.apply(this, arguments);
            })
          );
          var M,
            N,
            O =
              ((G = (0, d.Z)(
                h().mark(function a() {
                  var b, c, d, g, i, j, k, l;
                  return h().wrap(
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
                              (d = new FormData()).append("paymentProof", I),
                              (g = B.transaction_id),
                              (i = {
                                transStatus: "awaiting_payment_confirmation",
                                trans: B,
                              }),
                              (j = {
                                headers: {Authorization: "Bearer ".concat(c)},
                              }),
                              (a.next = 12),
                              m.default.patch(
                                "/transactions/paymentProof/".concat(g),
                                d,
                                j
                              )
                            );
                          case 12:
                            return (
                              (k = a.sent),
                              (a.next = 15),
                              m.default.patch(
                                "/transactions/patchTransaction",
                                i,
                                j
                              )
                            );
                          case 15:
                            (l = a.sent),
                              C(
                                (0, f.Z)((0, e.Z)({}, B), {
                                  status: "awaiting_payment_confirmation",
                                })
                              ),
                              L({
                                description: k.data.message,
                                position: "top",
                                status: "success",
                                duration: 3e3,
                                isClosable: !0,
                              }),
                              setTimeout(function () {
                                s.replace("/transaction/".concat(x));
                              }, 1e3),
                              (a.next = 25);
                            break;
                          case 21:
                            (a.prev = 21),
                              (a.t0 = a.catch(0)),
                              console.log({error: a.t0}),
                              L({
                                description: "Bukti Pembayaran Belum Dipilih",
                                position: "top",
                                status: "error",
                                duration: 3e3,
                                isClosable: !0,
                              });
                          case 25:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[0, 21]]
                  );
                })
              )),
              function () {
                return G.apply(this, arguments);
              }),
            P =
              ((M = (0, d.Z)(
                h().mark(function a() {
                  var b, c, d;
                  return h().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.prev = 0),
                              (b = B.transaction_id),
                              (a.next = 4),
                              m.default.patch(
                                "/transactions/cancelTransaction/".concat(b)
                              )
                            );
                          case 4:
                            (c = a.sent),
                              C(
                                (0, f.Z)((0, e.Z)({}, B), {
                                  status: "order_cancelled",
                                })
                              ),
                              L({
                                title: "Success!",
                                description: c.data.message,
                                position: "top",
                                status: "success",
                                duration: 3e3,
                                isClosable: !0,
                              }),
                              (a.next = 14);
                            break;
                          case 9:
                            (a.prev = 9),
                              (a.t0 = a.catch(0)),
                              console.log({Error: Error}),
                              L({
                                title: "Unexpected Fail!",
                                description: (
                                  null === (d = a.t0.response.data) ||
                                  void 0 === d
                                    ? void 0
                                    : d.message
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
              function () {
                return M.apply(this, arguments);
              }),
            Q =
              ((N = (0, d.Z)(
                h().mark(function a() {
                  var b, c, d;
                  return h().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.prev = 0),
                              (b = B.transaction_id),
                              (a.next = 4),
                              m.default.patch(
                                "/transactions/confirmTransaction/".concat(b)
                              )
                            );
                          case 4:
                            (c = a.sent),
                              C(
                                (0, f.Z)((0, e.Z)({}, B), {
                                  status: "order_confirmed",
                                })
                              ),
                              L({
                                title: "Confirmed!",
                                description: c.data.message,
                                position: "top",
                                status: "success",
                                duration: 3e3,
                                isClosable: !0,
                              }),
                              (a.next = 14);
                            break;
                          case 9:
                            (a.prev = 9),
                              (a.t0 = a.catch(0)),
                              console.log({Error: Error}),
                              L({
                                title: "Unexpected Fail!",
                                description: (
                                  null === (d = a.t0.response.data) ||
                                  void 0 === d
                                    ? void 0
                                    : d.message
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
              function () {
                return N.apply(this, arguments);
              }),
            R = B.totalPrice + B.deliveryCost,
            S = B.status.split("_"),
            T = S.join(" ");
          return (0, i.jsxs)("div", {
            className: "w-[100vw] h-[100vh]",
            children: [
              (0, i.jsx)(l.Z, {}),
              (0, i.jsxs)("div", {
                className: "w-[100%] h-[100%] flex",
                children: [
                  (0, i.jsx)("div", {
                    className: "w-[50%]",
                    children: (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("p", {
                          className: "text-[1rem] font-[500] ml-3",
                          children: "Alamat Lengkap",
                        }),
                        (0, i.jsx)("br", {}),
                        (0, i.jsxs)("div", {
                          className: "flex flex-col ml-3",
                          children: [
                            (0, i.jsxs)("p", {
                              children: ["Nama Pembeli : ", b],
                            }),
                            (0, i.jsxs)("p", {
                              children: ["Alamat Pembeli : ", c],
                            }),
                            (0, i.jsxs)("p", {children: ["Provinsi : ", q]}),
                            (0, i.jsxs)("p", {children: ["Kota: ", r]}),
                            (0, i.jsxs)("p", {children: ["Kode Pos : ", g]}),
                          ],
                        }),
                        (0, i.jsx)("br", {}),
                        (0, i.jsx)("p", {
                          className: "text-[1rem] font-[500] ml-3",
                          children: "Daftar Pesanan",
                        }),
                        (0, i.jsx)("div", {
                          children: z.map(function (b, c) {
                            return (0,
                            i.jsx)(t, {productName: b.product.productName, productImage: b.product.productImage, productPrice: b.product.productPrice, quantity: b.quantity, props: a}, b.transaction_details_id);
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "border-l-[1px] mt-[2vh] border-solid border-gray h-[100%]",
                  }),
                  (0, i.jsxs)("div", {
                    className: "w-[50%] ",
                    children: [
                      (0, i.jsx)("p", {
                        className: "w-[30%] ml-3 mt-3 text-[1rem] font-[500]",
                        children: "Ringkasan Pembayaran",
                      }),
                      (0, i.jsxs)("p", {
                        className: "mt-[5vh] ml-[10%] text-[1rem] font-[500]",
                        children: ["Metode Pengiriman: ", B.courier],
                      }),
                      (0, i.jsxs)("p", {
                        className: "mt-[5vh] ml-[10%] text-[1rem] font-[500]",
                        children: [
                          "Sub Total: Rp. ",
                          B.totalPrice.toLocaleString("id"),
                        ],
                      }),
                      (0, i.jsxs)("p", {
                        className: "mt-[5vh] ml-[10%] text-[1rem] font-[500]",
                        children: [
                          "Delivery Cost: Rp. ",
                          B.deliveryCost.toLocaleString("id"),
                        ],
                      }),
                      (0, i.jsxs)("p", {
                        className: "mt-[5vh] ml-[10%] text-[1rem] font-[500]",
                        children: ["Total Harga: Rp. ", R.toLocaleString("id")],
                      }),
                      (0, i.jsx)("p", {
                        className: "mt-[5vh] ml-[10%] text-[1rem] font-[500]",
                        children: "Metode Pembayaran: Transfer Bank BCA",
                      }),
                      (0, i.jsxs)("p", {
                        className: "mt-[5vh] ml-[10%] text-[1rem] font-[500]",
                        children: ["Status Pembayaran: ", T],
                      }),
                      "awaiting payment" === T
                        ? (0, i.jsxs)("div", {
                            className: "mt-[5vh] ml-[10%]",
                            children: [
                              " ",
                              (0, i.jsx)("input", {type: "file", onChange: K}),
                            ],
                          })
                        : (0, i.jsx)(i.Fragment, {}),
                      "awaiting payment" === T
                        ? (0, i.jsx)(j.zx, {
                            variant: "outline",
                            onClick: O,
                            colorScheme: "linkedin",
                            className: "mt-[5vh] ml-[10%]",
                            children: "Unggah Bukti Pembayaran",
                          })
                        : (0, i.jsx)(i.Fragment, {}),
                      (0, i.jsxs)(k.gC, {
                        className: "mt-[5vh] mr-[50%]",
                        children: [
                          "awaiting payment confirmation" === T ||
                          "delivering order" != T
                            ? (0, i.jsx)(j.zx, {
                                variant: "ghost",
                                colorScheme: "green",
                                onClick: Q,
                                isDisabled: !0,
                                children: "Konfirmasi Penerimaan",
                              })
                            : (0, i.jsx)(j.zx, {
                                variant: "ghost",
                                colorScheme: "green",
                                onClick: Q,
                                children: "Konfirmasi Penerimaan",
                              }),
                          "awaiting payment confirmation" === T ||
                          "delivering order" === T ||
                          "processing order" === T ||
                          "order confirmed" === T ||
                          "order cancelled" === T
                            ? (0, i.jsx)(j.zx, {
                                variant: "ghost",
                                colorScheme: "red",
                                onClick: P,
                                isDisabled: !0,
                                children: "Batalkan Pesanan",
                              })
                            : (0, i.jsx)(j.zx, {
                                variant: "ghost",
                                colorScheme: "red",
                                onClick: P,
                                children: "Batalkan Pesanan",
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
    11163: function (a, b, c) {
      a.exports = c(90387);
    },
    52875: function (a, b, c) {
      "use strict";
      function d(a, b) {
        return (
          (b = null != b ? b : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b))
            : (function (a, b) {
                var c = Object.keys(a);
                if (Object.getOwnPropertySymbols) {
                  var d = Object.getOwnPropertySymbols(a);
                  c.push.apply(c, d);
                }
                return c;
              })(Object(b)).forEach(function (c) {
                Object.defineProperty(
                  a,
                  c,
                  Object.getOwnPropertyDescriptor(b, c)
                );
              }),
          a
        );
      }
      c.d(b, {
        Z: function () {
          return d;
        },
      });
    },
  },
  function (a) {
    a.O(0, [9669, 1490, 9862, 900, 5551, 1453, 9774, 2888, 179], function () {
      var b;
      return a((a.s = 30904));
    }),
      (_N_E = a.O());
  },
]);
