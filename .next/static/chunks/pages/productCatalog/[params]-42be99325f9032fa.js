(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [920],
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
    10803: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/productCatalog/[params]",
        function () {
          return c(67975);
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
    67975: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          __N_SSP: function () {
            return o;
          },
        });
      var d = c(85893),
        e = c(47741),
        f = c(20979),
        g = c(67294),
        h = c(56556),
        i = c(99603),
        j = c(59417),
        k = c(11163),
        l = c(25675),
        m = c.n(l),
        n = c(39499),
        o = !0;
      b.default = function (a) {
        var b,
          c = function () {
            t(!s);
          },
          l = function () {
            w(!v);
          },
          o = (0, g.useState)(""),
          p = o[0],
          q = o[1],
          r = (0, g.useState)(!1),
          s = r[0],
          t = r[1],
          u = (0, g.useState)(!1),
          v = u[0],
          w = u[1],
          x = (0, g.useState)(a.products),
          y = x[0],
          z = x[1],
          A = (0, g.useState)(1),
          B = A[0],
          C = A[1],
          D = (0, g.useState)(""),
          E = D[0],
          F = D[1],
          G = (0, k.useRouter)(),
          H = a.session;
        return (
          (0, g.useEffect)(function () {
            q(G.query.params), z(a.products);
          }),
          (0, g.useEffect)(function () {
            var a = G.query.params;
            a.includes("key") && F(a.split("=")[0]);
          }, []),
          (0, d.jsxs)("div", {
            className: "w-[100vw] h-[100vh] flex flex-col overflow-hidden",
            children: [
              (0, d.jsx)(h.Z, {}),
              (0, d.jsx)("div", {
                className: "flex w-[100%] h-[92%] items-end justify-center",
                children: (0, d.jsxs)("div", {
                  className: "flex w-[92%] h-[96%]",
                  children: [
                    (0, d.jsxs)("div", {
                      className:
                        "bg-cya-500 bg-white w-[14%] h-[100%] flex flex-col pr-[.5vw]",
                      children: [
                        (0, d.jsx)("div", {
                          className: "border-b-[.1px] border-black p-[1vh]",
                          children: (0, d.jsx)("p", {
                            onClick: function () {
                              G.replace("/productCatalog/semuaObat=1"),
                                C(1),
                                F("");
                            },
                            className: p.includes("semuaObat")
                              ? "text-[1.2rem] font-[500] py-[1vh] px-[2vh] rounded-[2vw] border-solid border-[1px] rounded-[2vw] border-[#008DEB] cursor-pointer bg-cyan-100"
                              : "text-[1.2rem] font-[500] py-[1vh] px-[2vh] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",
                            children: "Semua Obat",
                          }),
                        }),
                        (0, d.jsxs)("div", {
                          id: "categories",
                          className: "border-b-[.1px] border-black p-[1vh]",
                          children: [
                            (0, d.jsxs)("div", {
                              onClick: c,
                              className:
                                "text-[1.2rem] font-[500] flex hover:cursor-pointer justify-between",
                              children: [
                                (0, d.jsx)("p", {children: "Kategori"}),
                                (0, d.jsx)("div", {
                                  className: s
                                    ? "w-[5%] flex items-center justify-center rotate-90 transition duration-100"
                                    : "w-[5%] flex items-center justify-center transition duration-100",
                                  children: (0, d.jsx)(i.G, {icon: j.I4f}),
                                }),
                              ],
                            }),
                            (0, d.jsx)("div", {
                              className: s
                                ? "overflow-auto scrollbar h-[35vh]"
                                : "",
                              children: s
                                ? null === (b = a.categoriesLists) ||
                                  void 0 === b
                                  ? void 0
                                  : b.categories.map(function (a) {
                                      var b = p.split("=")[0];
                                      return (0, d.jsx)(
                                        "div",
                                        {
                                          onClick: function () {
                                            G.replace(
                                              "/productCatalog/".concat(
                                                a.category_lists_id,
                                                "=category=1"
                                              )
                                            ),
                                              C(1),
                                              F("");
                                          },
                                          className:
                                            b == a.category_lists_id
                                              ? "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-[#008DEB] cursor-pointer bg-cyan-100"
                                              : "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",
                                          children:
                                            a.category.length <= 15
                                              ? a.category
                                              : "".concat(
                                                  a.category.slice(0, 15),
                                                  "..."
                                                ),
                                        },
                                        a.category_lists_id
                                      );
                                    })
                                : "",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("div", {
                          id: "sort",
                          className: "border-b-[.1px] border-black p-[1vh]",
                          children: [
                            (0, d.jsxs)("div", {
                              onClick: l,
                              className:
                                "text-[1.2rem] font-[500] flex hover:cursor-pointer justify-between",
                              children: [
                                (0, d.jsx)("p", {
                                  className: "text-[1.2rem] font-[500]",
                                  children: "Sort By",
                                }),
                                (0, d.jsx)("div", {
                                  className: v
                                    ? "w-[5%] flex items-center justify-center rotate-90 transition duration-100"
                                    : "w-[5%] flex items-center justify-center transition duration-100",
                                  children: (0, d.jsx)(i.G, {icon: j.I4f}),
                                }),
                              ],
                            }),
                            (0, d.jsxs)("div", {
                              className: v
                                ? "flex flex-col mt-[2vh]"
                                : "hidden",
                              children: [
                                (0, d.jsx)("div", {
                                  onClick: function () {
                                    G.replace(
                                      "/productCatalog/sort=productPrice=ASC=1"
                                    ),
                                      C(1),
                                      F("");
                                  },
                                  className: p.includes("sort=productPrice=ASC")
                                    ? "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-[#008DEB] cursor-pointer bg-cyan-100"
                                    : "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",
                                  children: "Price Asc",
                                }),
                                (0, d.jsx)("div", {
                                  onClick: function () {
                                    G.replace(
                                      "/productCatalog/sort=productPrice=DESC=1"
                                    ),
                                      C(1),
                                      F("");
                                  },
                                  className: p.includes(
                                    "sort=productPrice=DESC"
                                  )
                                    ? "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-[#008DEB] cursor-pointer bg-cyan-100"
                                    : "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",
                                  children: "Price Desc",
                                }),
                                (0, d.jsx)("div", {
                                  onClick: function () {
                                    G.replace(
                                      "/productCatalog/sort=productName=ASC=1"
                                    ),
                                      C(1),
                                      F("");
                                  },
                                  className: p.includes("sort=productName=ASC")
                                    ? "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-[#008DEB] cursor-pointer bg-cyan-100"
                                    : "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",
                                  children: "Name Asc",
                                }),
                                (0, d.jsx)("div", {
                                  onClick: function () {
                                    G.replace(
                                      "/productCatalog/sort=productName=DESC=1"
                                    ),
                                      C(1),
                                      F("");
                                  },
                                  className: p.includes("sort=productName=DESC")
                                    ? "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-[#008DEB] cursor-pointer bg-cyan-100"
                                    : "p-[1vh] my-[1vh] font-[400] text-[1.1rem] rounded-[2vw] border-solid border-[1px] border-transparent hover:border-[#008DEB] hover:cursor-pointer hover:bg-cyan-100",
                                  children: "Name Desc",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, d.jsxs)("div", {
                      className: "w-[86%] h-[100%] flex flex-col",
                      children: [
                        (0, d.jsx)("div", {
                          className: "flex w-[80%] justify-between",
                          children: (0, d.jsxs)("div", {
                            id: "searchbar desktop",
                            className:
                              "bg-[#F5F6F6] flex w-[35vw] h-[7vh] z-[2] left-[15vw] bottom-[88px] justify-end ml-[5vw]",
                            children: [
                              (0, d.jsx)(f.II, {
                                onChange: function (a) {
                                  F(a.target.value);
                                },
                                value: E,
                                variant: "unstyled",
                                placeholder: "Cari Obat",
                                sx: {paddingLeft: "5%"},
                              }),
                              (0, d.jsx)("div", {
                                onClick: function () {
                                  G.replace(
                                    "/productCatalog/".concat(E, "=key=1")
                                  ),
                                    C(1);
                                },
                                className:
                                  "bg-[#008DEB] flex items-center justify-center w-[20%] hover:cursor-pointer",
                                children: (0, d.jsx)(m(), {
                                  src: "/landingpage/Search-desktop.png",
                                  alt: "arrow-logo",
                                  layout: "fixed",
                                  width: 24,
                                  height: 24,
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, d.jsx)("div", {
                          className:
                            "h-[85%] flex flex-wrap overflow-auto scrollbar",
                          children:
                            null == y
                              ? void 0
                              : y.map(function (a) {
                                  return (0, d.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "w-[13%] mx-[2vw] mb-[-2vh] h-[35vh] flex-none flex flex-col items-center shadow-[0px_6px_20px_0px_rgba(0,28,47,0.05)]",
                                      children: [
                                        (0, d.jsx)("div", {
                                          className:
                                            "w-[100%] my-[3vh] hover:cursor-pointer",
                                          children: (0, d.jsx)(m(), {
                                            unoptimized: !0,
                                            alt: "resep-logo",
                                            layout: "responsive",
                                            width: 100,
                                            height: 70,
                                            src: n.api_origin + a.productImage,
                                            loader: function () {
                                              return (
                                                n.api_origin + a.productImage
                                              );
                                            },
                                          }),
                                        }),
                                        (0, d.jsx)("p", {
                                          className: "text-[12px] w-[100%]",
                                          children:
                                            a.productName.length <= 25
                                              ? a.productName
                                              : "".concat(
                                                  a.productName.slice(0, 20),
                                                  "..."
                                                ),
                                        }),
                                        (0, d.jsxs)("div", {
                                          className:
                                            "flex bg-white w-[100%] items-center text-[#6E6E6E]",
                                          children: [
                                            (0, d.jsx)("p", {
                                              className:
                                                "text-[10px] font-[400]",
                                              children: a.packageType,
                                            }),
                                            (0, d.jsx)("p", {
                                              className:
                                                "text-[10px] font-[400] mx-[1vw]",
                                              children: "-",
                                            }),
                                            (0, d.jsxs)("p", {
                                              className:
                                                "text-[10px] font-[400]",
                                              children: [
                                                "Stok ",
                                                a.productStock,
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, d.jsxs)("p", {
                                          className:
                                            "font-[500] text-[12px] w-[100%]",
                                          children: [
                                            "Rp.",
                                            a.productPrice.toLocaleString("id"),
                                          ],
                                        }),
                                        (0, d.jsx)("div", {className: "grow"}),
                                        (0, d.jsx)("div", {
                                          className: "w-[100%]",
                                          children: (0, d.jsx)(e.zx, {
                                            variant: "outline",
                                            onClick: function () {
                                              (
                                                null == H
                                                  ? void 0
                                                  : H.user.user.isVerified
                                              )
                                                ? G.replace(
                                                    "/detailPage/".concat(
                                                      a.product_id
                                                    )
                                                  )
                                                : G.replace("/login");
                                            },
                                            colorScheme: "linkedin",
                                            sx: {width: "100%", height: "5vh"},
                                            disabled: !(null == H
                                              ? void 0
                                              : H.user.user.isVerified),
                                            children: (0, d.jsx)("p", {
                                              className: "text-[12px]",
                                              children: "Tambah",
                                            }),
                                          }),
                                        }),
                                      ],
                                    },
                                    a.product_id
                                  );
                                }),
                        }),
                        (0, d.jsx)("div", {
                          className: "w-[100%] flex justify-end",
                          children: (0, d.jsxs)("div", {
                            className: "w-[10%] flex justify-between",
                            children: [
                              (0, d.jsx)(e.zx, {
                                size: "lg",
                                disabled: B <= 1,
                                colorScheme: "linkedin",
                                onClick: function () {
                                  C(B - 1);
                                  var a = G.query.params.split("=");
                                  a[a.length - 1] =
                                    parseInt(a[a.length - 1]) - 1;
                                  var b = a.join("=");
                                  G.replace("/productCatalog/".concat(b));
                                },
                                children: "<",
                              }),
                              (0, d.jsx)("div", {
                                className:
                                  "h-[100%] w-[7vw] flex items-center justify-center",
                                children: B,
                              }),
                              (0, d.jsx)(e.zx, {
                                onClick: function () {
                                  C(B + 1);
                                  var a = G.query.params.split("=");
                                  a[a.length - 1] =
                                    parseInt(a[a.length - 1]) + 1;
                                  var b = a.join("=");
                                  G.replace("/productCatalog/".concat(b));
                                },
                                disabled: !a.hasMore,
                                size: "lg",
                                colorScheme: "linkedin",
                                children: ">",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
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
    a.O(
      0,
      [4976, 9669, 1490, 900, 5551, 1453, 5834, 9774, 2888, 179],
      function () {
        var b;
        return a((a.s = 10803));
      }
    ),
      (_N_E = a.O());
  },
]);
