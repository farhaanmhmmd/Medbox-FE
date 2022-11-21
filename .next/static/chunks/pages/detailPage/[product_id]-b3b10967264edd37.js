(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1626],
  {
    83234: function (a, b, c) {
      "use strict";
      c.d(b, {
        Kn: function () {
          return t;
        },
        NI: function () {
          return r;
        },
        Yp: function () {
          return s;
        },
        lX: function () {
          return w;
        },
      });
      var d = c(67294),
        e = c(28387),
        f = c(76734),
        g = c(32067),
        h = c(54520),
        i = c(52494),
        j = (...a) => a.filter(Boolean).join(" "),
        k = (a) => (a ? "" : void 0),
        l = (a) => !!a || void 0;
      function m(...a) {
        return function (b) {
          a.some(
            (a) => (null == a || a(b), null == b ? void 0 : b.defaultPrevented)
          );
        };
      }
      var [n, o] = (0, e.k)({
          name: "FormControlStylesContext",
          errorMessage:
            "useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" ",
        }),
        [p, q] = (0, e.k)({strict: !1, name: "FormControlContext"}),
        r = (0, g.Gp)(function (a, b) {
          let c = (0, g.jC)("Form", a),
            e = (0, h.Lr)(a),
            {
              getRootProps: i,
              htmlProps: l,
              ...m
            } = (function (a) {
              let {
                  id: b,
                  isRequired: c,
                  isInvalid: e,
                  isDisabled: g,
                  isReadOnly: h,
                  ...i
                } = a,
                j = (0, d.useId)(),
                l = b || `field-${j}`,
                m = `${l}-label`,
                n = `${l}-feedback`,
                o = `${l}-helptext`,
                [p, q] = (0, d.useState)(!1),
                [r, s] = (0, d.useState)(!1),
                [t, u] = (0, d.useState)(!1),
                v = (0, d.useCallback)(
                  (a = {}, b = null) => ({
                    id: o,
                    ...a,
                    ref: (0, f.lq)(b, (a) => {
                      a && s(!0);
                    }),
                  }),
                  [o]
                ),
                w = (0, d.useCallback)(
                  (a = {}, b = null) => ({
                    ...a,
                    ref: b,
                    "data-focus": k(t),
                    "data-disabled": k(g),
                    "data-invalid": k(e),
                    "data-readonly": k(h),
                    id: a.id ?? m,
                    htmlFor: a.htmlFor ?? l,
                  }),
                  [l, g, t, e, h, m]
                ),
                x = (0, d.useCallback)(
                  (a = {}, b = null) => ({
                    id: n,
                    ...a,
                    ref: (0, f.lq)(b, (a) => {
                      a && q(!0);
                    }),
                    "aria-live": "polite",
                  }),
                  [n]
                ),
                y = (0, d.useCallback)(
                  (a = {}, b = null) => ({...a, ...i, ref: b, role: "group"}),
                  [i]
                ),
                z = (0, d.useCallback)(
                  (a = {}, b = null) => ({
                    ...a,
                    ref: b,
                    role: "presentation",
                    "aria-hidden": !0,
                    children: a.children || "*",
                  }),
                  []
                );
              return {
                isRequired: !!c,
                isInvalid: !!e,
                isReadOnly: !!h,
                isDisabled: !!g,
                isFocused: !!t,
                onFocus: () => u(!0),
                onBlur: () => u(!1),
                hasFeedbackText: p,
                setHasFeedbackText: q,
                hasHelpText: r,
                setHasHelpText: s,
                id: l,
                labelId: m,
                feedbackId: n,
                helpTextId: o,
                htmlProps: i,
                getHelpTextProps: v,
                getErrorMessageProps: x,
                getRootProps: y,
                getLabelProps: w,
                getRequiredIndicatorProps: z,
              };
            })(e),
            o = j("chakra-form-control", a.className);
          return d.createElement(
            p,
            {value: m},
            d.createElement(
              n,
              {value: c},
              d.createElement(g.m$.div, {
                ...i({}, b),
                className: o,
                __css: c.container,
              })
            )
          );
        });
      function s(a) {
        let {
          isDisabled: b,
          isInvalid: c,
          isReadOnly: d,
          isRequired: e,
          ...f
        } = t(a);
        return {
          ...f,
          disabled: b,
          readOnly: d,
          required: e,
          "aria-invalid": l(c),
          "aria-required": l(e),
          "aria-readonly": l(d),
        };
      }
      function t(a) {
        let b = q(),
          {
            id: c,
            disabled: d,
            readOnly: e,
            required: f,
            isRequired: g,
            isInvalid: h,
            isReadOnly: i,
            isDisabled: j,
            onFocus: k,
            onBlur: l,
            ...n
          } = a,
          o = a["aria-describedby"] ? [a["aria-describedby"]] : [];
        return (
          (null == b ? void 0 : b.hasFeedbackText) &&
            (null == b ? void 0 : b.isInvalid) &&
            o.push(b.feedbackId),
          (null == b ? void 0 : b.hasHelpText) && o.push(b.helpTextId),
          {
            ...n,
            "aria-describedby": o.join(" ") || void 0,
            id: c ?? (null == b ? void 0 : b.id),
            isDisabled: d ?? j ?? (null == b ? void 0 : b.isDisabled),
            isReadOnly: e ?? i ?? (null == b ? void 0 : b.isReadOnly),
            isRequired: f ?? g ?? (null == b ? void 0 : b.isRequired),
            isInvalid: h ?? (null == b ? void 0 : b.isInvalid),
            onFocus: m(null == b ? void 0 : b.onFocus, k),
            onBlur: m(null == b ? void 0 : b.onBlur, l),
          }
        );
      }
      (r.displayName = "FormControl"),
        ((0, g.Gp)(function (a, b) {
          let c = q(),
            e = o(),
            f = j("chakra-form__helper-text", a.className);
          return d.createElement(g.m$.div, {
            ...(null == c ? void 0 : c.getHelpTextProps(a, b)),
            __css: e.helperText,
            className: f,
          });
        }).displayName = "FormHelperText");
      var [u, v] = (0, e.k)({
        name: "FormErrorStylesContext",
        errorMessage:
          "useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" ",
      });
      ((0, g.Gp)((a, b) => {
        let c = (0, g.jC)("FormError", a),
          e = (0, h.Lr)(a),
          f = q();
        return (null == f ? void 0 : f.isInvalid)
          ? d.createElement(
              u,
              {value: c},
              d.createElement(g.m$.div, {
                ...(null == f ? void 0 : f.getErrorMessageProps(e, b)),
                className: j("chakra-form__error-message", a.className),
                __css: {display: "flex", alignItems: "center", ...c.text},
              })
            )
          : null;
      }).displayName = "FormErrorMessage"),
        ((0, g.Gp)((a, b) => {
          let c = v(),
            e = q();
          if (!(null == e ? void 0 : e.isInvalid)) return null;
          let f = j("chakra-form__error-icon", a.className);
          return d.createElement(
            i.JO,
            {ref: b, "aria-hidden": !0, ...a, __css: c.icon, className: f},
            d.createElement("path", {
              fill: "currentColor",
              d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
            })
          );
        }).displayName = "FormErrorIcon");
      var w = (0, g.Gp)(function (a, b) {
        let c = (0, g.mq)("FormLabel", a),
          e = (0, h.Lr)(a),
          {
            className: f,
            children: i,
            requiredIndicator: k = d.createElement(x, null),
            optionalIndicator: l = null,
            ...m
          } = e,
          n = q(),
          o = (null == n ? void 0 : n.getLabelProps(m, b)) ?? {ref: b, ...m};
        return d.createElement(
          g.m$.label,
          {
            ...o,
            className: j("chakra-form__label", e.className),
            __css: {display: "block", textAlign: "start", ...c},
          },
          i,
          (null == n ? void 0 : n.isRequired) ? k : l
        );
      });
      w.displayName = "FormLabel";
      var x = (0, g.Gp)(function (a, b) {
        let c = q(),
          e = o();
        if (!(null == c ? void 0 : c.isRequired)) return null;
        let f = j("chakra-form__required-indicator", a.className);
        return d.createElement(g.m$.span, {
          ...(null == c ? void 0 : c.getRequiredIndicatorProps(a, b)),
          __css: e.requiredIndicator,
          className: f,
        });
      });
      x.displayName = "RequiredIndicator";
    },
    20979: function (a, b, c) {
      "use strict";
      c.d(b, {
        BZ: function () {
          return o;
        },
        II: function () {
          return l;
        },
        xH: function () {
          return x;
        },
      });
      var d = c(67294),
        e = c(83234),
        f = c(32067),
        g = c(54520),
        h = c(95336),
        i = c(28387),
        j = c(34031),
        k = c(46076),
        l = (0, f.Gp)(function (a, b) {
          let {htmlSize: c, ...i} = a,
            j = (0, f.jC)("Input", i),
            k = (0, g.Lr)(i),
            l = (0, e.Yp)(k),
            m = (0, h.cx)("chakra-input", a.className);
          return d.createElement(f.m$.input, {
            size: c,
            ...l,
            __css: j.field,
            ref: b,
            className: m,
          });
        });
      (l.displayName = "Input"), (l.id = "Input");
      var [m, n] = (0, i.k)({
          name: "InputGroupStylesContext",
          errorMessage:
            "useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" ",
        }),
        o = (0, f.Gp)(function (a, b) {
          let c = (0, f.jC)("Input", a),
            {children: e, className: i, ...l} = (0, g.Lr)(a),
            n = (0, h.cx)("chakra-input__group", i),
            o = {},
            p = (0, j.W)(e),
            q = c.field;
          p.forEach((a) => {
            c &&
              (q &&
                "InputLeftElement" === a.type.id &&
                (o.paddingStart = q.height ?? q.h),
              q &&
                "InputRightElement" === a.type.id &&
                (o.paddingEnd = q.height ?? q.h),
              "InputRightAddon" === a.type.id && (o.borderEndRadius = 0),
              "InputLeftAddon" === a.type.id && (o.borderStartRadius = 0));
          });
          let r = p.map((b) => {
            var c, e;
            let f = (0, k.oA)({
              size: (null == (c = b.props) ? void 0 : c.size) || a.size,
              variant:
                (null == (e = b.props) ? void 0 : e.variant) || a.variant,
            });
            return "Input" !== b.type.id
              ? (0, d.cloneElement)(b, f)
              : (0, d.cloneElement)(b, Object.assign(f, o, b.props));
          });
          return d.createElement(
            f.m$.div,
            {
              className: n,
              ref: b,
              __css: {width: "100%", display: "flex", position: "relative"},
              ...l,
            },
            d.createElement(m, {value: c}, r)
          );
        });
      o.displayName = "InputGroup";
      var p = {
          left: {
            marginEnd: "-1px",
            borderEndRadius: 0,
            borderEndColor: "transparent",
          },
          right: {
            marginStart: "-1px",
            borderStartRadius: 0,
            borderStartColor: "transparent",
          },
        },
        q = (0, f.m$)("div", {
          baseStyle: {
            flex: "0 0 auto",
            width: "auto",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
          },
        }),
        r = (0, f.Gp)(function (a, b) {
          let {placement: c = "left", ...e} = a,
            f = p[c] ?? {},
            g = n();
          return d.createElement(q, {ref: b, ...e, __css: {...g.addon, ...f}});
        });
      r.displayName = "InputAddon";
      var s = (0, f.Gp)(function (a, b) {
        return d.createElement(r, {
          ref: b,
          placement: "left",
          ...a,
          className: (0, h.cx)("chakra-input__left-addon", a.className),
        });
      });
      (s.displayName = "InputLeftAddon"), (s.id = "InputLeftAddon");
      var t = (0, f.Gp)(function (a, b) {
        return d.createElement(r, {
          ref: b,
          placement: "right",
          ...a,
          className: (0, h.cx)("chakra-input__right-addon", a.className),
        });
      });
      (t.displayName = "InputRightAddon"), (t.id = "InputRightAddon");
      var u = (0, f.m$)("div", {
          baseStyle: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "0",
            zIndex: 2,
          },
        }),
        v = (0, f.Gp)(function (a, b) {
          let {placement: c = "left", ...e} = a,
            f = n(),
            g = f.field,
            h = {
              ["left" === c ? "insetStart" : "insetEnd"]: "0",
              width:
                (null == g ? void 0 : g.height) ?? (null == g ? void 0 : g.h),
              height:
                (null == g ? void 0 : g.height) ?? (null == g ? void 0 : g.h),
              fontSize: null == g ? void 0 : g.fontSize,
              ...f.element,
            };
          return d.createElement(u, {ref: b, __css: h, ...e});
        });
      (v.id = "InputElement"), (v.displayName = "InputElement");
      var w = (0, f.Gp)(function (a, b) {
        let {className: c, ...e} = a,
          f = (0, h.cx)("chakra-input__left-element", c);
        return d.createElement(v, {
          ref: b,
          placement: "left",
          className: f,
          ...e,
        });
      });
      (w.id = "InputLeftElement"), (w.displayName = "InputLeftElement");
      var x = (0, f.Gp)(function (a, b) {
        let {className: c, ...e} = a,
          f = (0, h.cx)("chakra-input__right-element", c);
        return d.createElement(v, {
          ref: b,
          placement: "right",
          className: f,
          ...e,
        });
      });
      (x.id = "InputRightElement"), (x.displayName = "InputRightElement");
    },
    46076: function (a, b, c) {
      "use strict";
      function d(a) {
        let b = Object.assign({}, a);
        for (let c in b) void 0 === b[c] && delete b[c];
        return b;
      }
      c.d(b, {
        oA: function () {
          return d;
        },
      });
    },
    34031: function (a, b, c) {
      "use strict";
      c.d(b, {
        W: function () {
          return e;
        },
      });
      var d = c(67294);
      function e(a) {
        return d.Children.toArray(a).filter((a) => (0, d.isValidElement)(a));
      }
    },
    81868: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/detailPage/[product_id]",
        function () {
          return c(60747);
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
    60747: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          __N_SSP: function () {
            return r;
          },
        });
      var d = c(34727),
        e = c(34051),
        f = c.n(e),
        g = c(85893),
        h = c(47741),
        i = c(20979),
        j = c(56556),
        k = c(77220),
        l = c(67294),
        m = c(33299),
        n = c(25675),
        o = c.n(n),
        p = c(84221),
        q = c(39499),
        r = !0;
      b.default = function (a) {
        var b,
          c = a.products,
          e = (0, l.useState)(!1),
          n = e[0],
          r = e[1],
          s = c.product_id,
          t = (0, l.useState)(1),
          u = t[0],
          v = t[1],
          w = (0, p.pm)(),
          x =
            ((b = (0, d.Z)(
              f().mark(function b() {
                var c, d, e, g, h, i;
                return f().wrap(
                  function (b) {
                    for (;;)
                      switch ((b.prev = b.next)) {
                        case 0:
                          return (
                            r(!0),
                            (b.prev = 1),
                            (c = {
                              quantity: u,
                              product_id: s,
                              user_id: a.user_id,
                            }),
                            (b.next = 5),
                            (0, m.getSession)()
                          );
                        case 5:
                          return (
                            (e = (d = b.sent).user.user_token),
                            (g = {
                              headers: {Authorization: "Bearer ".concat(e)},
                            }),
                            (b.next = 10),
                            k.default.post("carts/addToCart/".concat(s), c, g)
                          );
                        case 10:
                          w({
                            title: "Add To Cart",
                            description: (h = b.sent).data.message,
                            position: "top",
                            status: "success",
                            duration: 3e3,
                            isClosable: !0,
                          }),
                            (b.next = 19);
                          break;
                        case 14:
                          (b.prev = 14),
                            (b.t0 = b.catch(1)),
                            console.log({error: b.t0}),
                            w({
                              title: "Unexpected Fail!",
                              description: (
                                null === (i = b.t0.response.data) ||
                                void 0 === i
                                  ? void 0
                                  : i.message
                              )
                                ? b.t0.response.data.message
                                : b.t0.message,
                              position: "top",
                              status: "error",
                              duration: 3e3,
                              isClosable: !0,
                            });
                        case 19:
                          return (b.prev = 19), r(!1), b.finish(19);
                        case 22:
                        case "end":
                          return b.stop();
                      }
                  },
                  b,
                  null,
                  [[1, 14, 19, 22]]
                );
              })
            )),
            function () {
              return b.apply(this, arguments);
            });
        return (0, g.jsxs)("div", {
          children: [
            (0, g.jsx)(j.Z, {}),
            (0, g.jsx)("div", {
              className: "container",
              children: (0, g.jsx)("div", {
                className: "flex-col",
                children: (0, g.jsxs)("div", {
                  className: "w-[65%] ml-[1vw] my-[3vh] columns-2",
                  children: [
                    (0, g.jsx)(o(), {
                      unoptimized: !0,
                      alt: "resep-logo",
                      layout: "responsive",
                      width: 50,
                      height: 50,
                      src: q.api_origin + c.productImage,
                      loader: function () {
                        return q.api_origin + c.productImage;
                      },
                    }),
                    (0, g.jsxs)("div", {
                      className: "flex-row font-semibold",
                      children: [
                        (0, g.jsx)("p", {
                          className: "text-[25px]",
                          children: c.productName,
                        }),
                        (0, g.jsx)("br", {}),
                        (0, g.jsxs)("div", {
                          className:
                            "flex bg-white w-[100%] items-center text-[#6E6E6E]",
                          children: [
                            (0, g.jsx)("p", {
                              className: "text-[20px] font-[400]",
                              children: c.packageType,
                            }),
                            (0, g.jsx)("p", {
                              className: "text-[20px] font-[400] mx-[1vw]",
                              children: "-",
                            }),
                            (0, g.jsxs)("p", {
                              className: "text-[20px] font-[400]",
                              children: ["Stok ", c.productStock],
                            }),
                          ],
                        }),
                        (0, g.jsx)("br", {}),
                        (0, g.jsx)("div", {
                          className:
                            "flex bg-white w-[100%] items-center text-[#6E6E6E]",
                          children: (0, g.jsxs)("p", {
                            className: "text-[20px] font-[400]",
                            children: [
                              "Price: Rp. ",
                              c.productPrice.toLocaleString("id"),
                            ],
                          }),
                        }),
                        (0, g.jsx)("br", {}),
                        (0, g.jsx)("div", {
                          className: "flex bg-white w-[100%] items-center",
                          children: (0, g.jsxs)("p", {
                            className: "text-[16.3px] font-[400]",
                            children: [
                              "Desription",
                              (0, g.jsx)("br", {}),
                              c.description,
                            ],
                          }),
                        }),
                        (0, g.jsx)("br", {}),
                        n
                          ? (0, g.jsx)(h.zx, {
                              onClick: x,
                              isLoading: !0,
                              colorScheme: "linkedin",
                              children: "Add To Cart",
                            })
                          : (0, g.jsxs)(g.Fragment, {
                              children: [
                                0 == u
                                  ? (0, g.jsx)(h.zx, {
                                      isDisabled: !0,
                                      width: "50px",
                                      onClick: function () {
                                        v(u - 1);
                                      },
                                      colorScheme: "linkedin",
                                      mx: 3,
                                      children: "-",
                                    })
                                  : (0, g.jsx)(h.zx, {
                                      width: "50px",
                                      onClick: function () {
                                        v(u - 1);
                                      },
                                      colorScheme: "linkedin",
                                      mx: 3,
                                      children: "-",
                                    }),
                                (0, g.jsx)(i.II, {
                                  htmlSize: 4,
                                  width: "50px",
                                  variant: "outline",
                                  placeholder: "0",
                                  value: u,
                                }),
                                (0, g.jsx)(h.zx, {
                                  width: "50px",
                                  onClick: function () {
                                    v(u + 1);
                                  },
                                  colorScheme: "linkedin",
                                  mx: 3,
                                  children: "+",
                                }),
                                (0, g.jsx)(h.zx, {
                                  mx: 3,
                                  onClick: x,
                                  colorScheme: "teal",
                                  children: "Add To Cart",
                                }),
                              ],
                            }),
                        (0, g.jsx)("br", {}),
                      ],
                    }),
                  ],
                }),
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
    34727: function (a, b, c) {
      "use strict";
      function d(a, b, c, d, e, f, g) {
        try {
          var h = a[f](g),
            i = h.value;
        } catch (j) {
          c(j);
          return;
        }
        h.done ? b(i) : Promise.resolve(i).then(d, e);
      }
      function e(a) {
        return function () {
          var b = this,
            c = arguments;
          return new Promise(function (e, f) {
            var g = a.apply(b, c);
            function h(a) {
              d(g, e, f, h, i, "next", a);
            }
            function i(a) {
              d(g, e, f, h, i, "throw", a);
            }
            h(void 0);
          });
        };
      }
      c.d(b, {
        Z: function () {
          return e;
        },
      });
    },
  },
  function (a) {
    a.O(0, [9669, 1490, 900, 5551, 1453, 9774, 2888, 179], function () {
      var b;
      return a((a.s = 81868));
    }),
      (_N_E = a.O());
  },
]);
