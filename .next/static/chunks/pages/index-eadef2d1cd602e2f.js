(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    75557: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return c(53678);
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
    53678: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          __N_SSP: function () {
            return t;
          },
          default: function () {
            return u;
          },
        });
      var d = c(34727),
        e = c(34051),
        f = c.n(e),
        g = c(85893),
        h = c(25675),
        i = c.n(h),
        j = c(67294),
        k = c(56556),
        l = c(41664),
        m = c.n(l),
        n = c(36158),
        o = c(47741),
        p = c(20979),
        q = c(77220),
        r = c(11163),
        s = c(39499),
        t = !0;
      function u(a) {
        var b = (0, j.useState)(),
          c = (b[0], b[1]),
          e = (0, j.useState)(),
          h = e[0],
          l = e[1],
          t = (0, j.useState)(1),
          u = t[0],
          v = t[1],
          w = (0, j.useState)(""),
          x = w[0],
          y = w[1],
          z = a.session,
          A = a.fetchedCategories,
          B = (0, r.useRouter)();
        function C() {
          return (C = (0, d.Z)(
            f().mark(function a() {
              var b;
              return f().wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (a.prev = 0),
                          (a.next = 3),
                          q.default.get("/products/landingPage", {
                            params: {limit: 4, productsPage: u},
                          })
                        );
                      case 3:
                        l((b = a.sent).data.landingPageProducts),
                          c(b.data.hasMore),
                          (a.next = 11);
                        break;
                      case 8:
                        (a.prev = 8),
                          (a.t0 = a.catch(0)),
                          console.log({error: a.t0});
                      case 11:
                      case "end":
                        return a.stop();
                    }
                },
                a,
                null,
                [[0, 8]]
              );
            })
          )).apply(this, arguments);
        }
        return (
          (0, j.useEffect)(
            function () {
              (function a() {
                return C.apply(this, arguments);
              })();
            },
            [u]
          ),
          (0, g.jsxs)("div", {
            className:
              "bg-white w-[100%] h-[100vh] relative z-[1] desktop:scrollbar",
            children: [
              (0, g.jsx)(k.Z, {}),
              (0, g.jsx)("div", {
                id: "box biru",
                className: "bg-[#1068A3] h-[53px] desktop:hidden",
              }),
              (0, g.jsxs)("div", {
                id: "hero-desktop",
                className: "relative hidden desktop:inline",
                children: [
                  (0, g.jsxs)("p", {
                    className:
                      "absolute z-[2] text-white font-[400] text-[4vw] left-[15vw] bottom-[200px]",
                    children: [
                      "Your Pharmacy, ",
                      (0, g.jsx)("br", {}),
                      " Everywhere",
                    ],
                  }),
                  (0, g.jsx)(m(), {
                    href: "/productCatalog",
                    children: (0, g.jsx)("p", {
                      className:
                        "absolute z-[2] text-white font-[500] text-[14px] bottom-[55px] left-[15vw] underline underline-offset-4 decoration-white hover:cursor-pointer",
                      children: "Lihat Semua Obat",
                    }),
                  }),
                  (0, g.jsxs)("div", {
                    id: "searchbar desktop",
                    className:
                      "bg-[#F5F6F6] flex absolute w-[40vw] h-[8vh] z-[2] left-[15vw] bottom-[10vh] justify-end",
                    children: [
                      (0, g.jsx)(p.II, {
                        variant: "unstyled",
                        placeholder: "Cari Obat",
                        sx: {paddingLeft: "5%"},
                        onChange: function (a) {
                          y(a.target.value);
                        },
                      }),
                      (0, g.jsx)("div", {
                        onClick: function () {
                          B.replace("/productCatalog/".concat(x, "=key=1"));
                        },
                        className:
                          "bg-[#008DEB] flex items-center justify-center w-[20%] hover:cursor-pointer",
                        children: (0, g.jsx)(i(), {
                          src: "/landingpage/Search-desktop.png",
                          alt: "arrow-logo",
                          layout: "fixed",
                          width: 24,
                          height: 24,
                        }),
                      }),
                    ],
                  }),
                  (0, g.jsx)(i(), {
                    src: "/landingpage/Hero-desktop.svg",
                    alt: "arrow-logo",
                    layout: "responsive",
                    width: 1440,
                    height: 408,
                  }),
                ],
              }),
              (0, g.jsxs)("div", {
                className:
                  "w-[100%] desktop:flex desktop:flex-col desktop:items-center",
                children: [
                  (0, g.jsxs)("div", {
                    id: "resep doktor",
                    className: "desktop:w-[70%]",
                    children: [
                      (0, g.jsx)("p", {
                        className:
                          "font-[500] text-[22px] hidden desktop:flex desktop:mt-[5vh]",
                        children: "Punya Resep dari Dokter?",
                      }),
                      (0, g.jsxs)("div", {
                        className:
                          "flex bg-[#F2F8FC] items-center w-[94vw] h-[10vh] mt-[7vh] ml-[3vw] desktop:w-[100%] desktop:mt-0 desktop:ml-0",
                        children: [
                          (0, g.jsx)("div", {
                            className: "mx-[25px] mt-[10px]",
                            children: (0, g.jsx)(i(), {
                              src: "/landingpage/Punya-resep.png",
                              alt: "resep-logo",
                              layout: "fixed",
                              width: 35,
                              height: 35,
                            }),
                          }),
                          (0, g.jsxs)("div", {
                            className: "mr-[80px]",
                            children: [
                              (0, g.jsx)("p", {
                                className:
                                  "font-[500] text-[14px] desktop:hidden",
                                children: "Punya Resep Dokter?",
                              }),
                              (0, g.jsx)("p", {
                                className:
                                  "font-[500] text-[14px] desktop:inline hidden",
                                children: "Unggah Resep",
                              }),
                              (0, g.jsx)("p", {
                                className:
                                  "font-[400] w-[150px] desktop:w-[50vw] text-[12px] text-[#6E6E6E]",
                                children:
                                  "klik disini untuk kirim foto resep dokter",
                              }),
                            ],
                          }),
                          (0, g.jsx)("div", {
                            className: "w-[18px] h-[14px] desktop:hidden",
                            children: (0, g.jsx)(i(), {
                              src: "/landingpage/Arrow.png",
                              alt: "arrow-logo",
                              layout: "responsive",
                              width: 18,
                              height: 14,
                            }),
                          }),
                          (0, g.jsx)("div", {
                            className: "hidden desktop:inline",
                            children: (0, g.jsx)(m(), {
                              href: z ? "/upload-prescription-image" : "/login",
                              children: (0, g.jsx)(o.zx, {
                                variant: "outline",
                                colorScheme: "linkedin",
                                sx: {width: "8vw", height: "6vh"},
                                children: (0, g.jsx)("p", {
                                  className: "font-[500] text-[.9rem]",
                                  children: "Unggah Resep",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, g.jsxs)("div", {
                    id: "kategori obat",
                    className: "mt-[4 vh] desktop:w-[70%]",
                    children: [
                      (0, g.jsx)("p", {
                        className:
                          "flex pl-[4vw] mt-[3vh] mb-[2vh] font-[500] text-[16px] desktop:text-[22px] w-[100%] desktop:pl-0",
                        children: "Jelajahi Kategori Obat",
                      }),
                      (0, g.jsx)("div", {
                        className:
                          "w-[100%] h-[30vh] items-center flex flex-wrap justify-evenly",
                        children: A
                          ? A.map(function (a) {
                              return (0, g.jsxs)(
                                "div",
                                {
                                  onClick: function () {
                                    B.replace(
                                      "/productCatalog/".concat(
                                        a.category_lists_id,
                                        "=category=1"
                                      )
                                    );
                                  },
                                  className:
                                    "flex flex-col hover:cursor-pointer flex-none items-center justify-start w-[25%] desktop:flex-row desktop:h-[9vh] desktop:w-[31%] desktop:bg-white desktop:shadow-[0px_6px_20px_0px_rgba(0,28,47,0.05)]",
                                  children: [
                                    (0, g.jsx)("div", {
                                      className:
                                        "w-[35px] h-[35px] desktop:w-[3.5vw] desktop:h-[3.5vw] desktop:mx-[1vw]",
                                      children: (0, g.jsx)(i(), {
                                        unoptimized: !0,
                                        alt: "resep-logo",
                                        layout: "responsive",
                                        width: 35,
                                        height: 35,
                                        src: s.api_origin + a.categoryImage,
                                        loader: function () {
                                          return s.api_origin + a.categoryImage;
                                        },
                                      }),
                                    }),
                                    (0, g.jsx)("p", {
                                      className:
                                        "text-[12px] desktop:text-[14px] desktop:font-[500] desktop:font-[#262626]",
                                      children: a.category,
                                    }),
                                  ],
                                },
                                a.category_lists_id
                              );
                            })
                          : "Empty Categories",
                      }),
                    ],
                  }),
                  (0, g.jsxs)("div", {
                    id: "Rekomendasi Obat & Vitamin",
                    className: "mt-[4 vh] desktop:w-[70%]",
                    children: [
                      (0, g.jsx)("p", {
                        className:
                          "flex pl-[4vw] font-[500] text-[16px] desktop:text-[22px] w-[100%] desktop:pl-0",
                        children: "Rekomendasi Obat & Vitamin",
                      }),
                      (0, g.jsxs)("div", {
                        className:
                          "w-[100%] h-[40vh] flex items-center justify-between",
                        children: [
                          (0, g.jsx)(o.zx, {
                            disabled: 1 == u,
                            onClick: function () {
                              v(u - 1);
                            },
                            width: "5vh",
                            height: "5vh",
                            rounded: "50%",
                            children: "<<",
                          }),
                          (0, g.jsx)("div", {
                            className: "flex w-[100%]",
                            children: h
                              ? h.map(function (b) {
                                  var c;
                                  return (0, g.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "w-[35vw] mx-[3vw] h-[100%] flex-none flex flex-col items-center desktop:w-[10vw]",
                                      children: [
                                        (0, g.jsx)("div", {
                                          className:
                                            "w-[100%] my-[3vh] hover:cursor-pointer",
                                          children: (0, g.jsx)(i(), {
                                            unoptimized: !0,
                                            alt: "resep-logo",
                                            layout: "responsive",
                                            width: 102,
                                            height: 66,
                                            src: s.api_origin + b.productImage,
                                            loader: function () {
                                              return (
                                                s.api_origin + b.productImage
                                              );
                                            },
                                          }),
                                        }),
                                        (0, g.jsx)("p", {
                                          className: "text-[12px] w-[100%]",
                                          children:
                                            b.productName.length <= 25
                                              ? b.productName
                                              : "".concat(
                                                  b.productName.slice(0, 20),
                                                  "..."
                                                ),
                                        }),
                                        (0, g.jsxs)("div", {
                                          className:
                                            "flex bg-white w-[100%] items-center text-[#6E6E6E]",
                                          children: [
                                            (0, g.jsx)("p", {
                                              className:
                                                "text-[10px] font-[400]",
                                              children: b.packageType,
                                            }),
                                            (0, g.jsx)("p", {
                                              className:
                                                "text-[10px] font-[400] mx-[1vw]",
                                              children: "-",
                                            }),
                                            (0, g.jsxs)("p", {
                                              className:
                                                "text-[10px] font-[400]",
                                              children: [
                                                "Stok ",
                                                b.productStock,
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, g.jsxs)("p", {
                                          className:
                                            "font-[500] text-[12px] w-[100%]",
                                          children: [
                                            "Rp.",
                                            b.productPrice.toLocaleString("id"),
                                          ],
                                        }),
                                        (0, g.jsx)("div", {className: "grow"}),
                                        (0, g.jsx)("div", {
                                          className: "w-[100%]",
                                          children: (0, g.jsx)(o.zx, {
                                            onClick: function () {
                                              B.replace(
                                                "/detailPage/".concat(
                                                  b.product_id
                                                )
                                              );
                                            },
                                            variant: "outline",
                                            colorScheme: "linkedin",
                                            disabled: !(null ===
                                              (c = a.session) || void 0 === c
                                              ? void 0
                                              : c.user.user.isVerified),
                                            sx: {
                                              width: "100%",
                                              height: "5vh",
                                              marginBottom: "6vh",
                                            },
                                            children: (0, g.jsx)("p", {
                                              className: "text-[12px]",
                                              children: "Tambah",
                                            }),
                                          }),
                                        }),
                                      ],
                                    },
                                    b.product_id
                                  );
                                })
                              : [1, 2, 3, 4].map(function (a) {
                                  return (0,
                                  g.jsxs)("div", {className: "w-[35vw] mx-[3vw] h-[100%] flex-none flex flex-col items-center desktop:w-[10vw]", children: [(0, g.jsx)(n.Od, {height: "60%", width: "100%", marginY: "1vh"}), (0, g.jsx)(n.Od, {height: "10%", width: "100%", marginY: "1vh"}), (0, g.jsx)(n.Od, {height: "15%", width: "100%", marginY: "1vh"})]}, a);
                                }),
                          }),
                          (0, g.jsx)(o.zx, {
                            disabled: 3 == u,
                            onClick: function () {
                              v(u + 1);
                            },
                            width: "5vh",
                            height: "5vh",
                            rounded: "50%",
                            children: ">>",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
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
    a.O(0, [9669, 1490, 900, 5551, 1453, 2451, 9774, 2888, 179], function () {
      var b;
      return a((a.s = 75557));
    }),
      (_N_E = a.O());
  },
]);
