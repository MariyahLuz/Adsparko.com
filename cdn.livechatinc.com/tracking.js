! function() {
    "use strict";
    var e = function() {
        var e = setTimeout;

        function t() {}

        function n(e) {
            if (!(this instanceof n)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
        }

        function r(e, t) {
            for (; 3 === e._state;) e = e._value;
            0 !== e._state ? (e._handled = !0, n._immediateFn((function() {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                    var r;
                    try {
                        r = n(e._value)
                    } catch (e) {
                        return void o(t.promise, e)
                    }
                    i(t.promise, r)
                } else(1 === e._state ? i : o)(t.promise, e._value)
            }))) : e._deferreds.push(t)
        }

        function i(e, t) {
            try {
                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var r = t.then;
                    if (t instanceof n) return e._state = 3, e._value = t, void a(e);
                    if ("function" == typeof r) return void c((i = r, u = t, function() {
                        i.apply(u, arguments)
                    }), e)
                }
                e._state = 1, e._value = t, a(e)
            } catch (t) {
                o(e, t)
            }
            var i, u
        }

        function o(e, t) {
            e._state = 2, e._value = t, a(e)
        }

        function a(e) {
            2 === e._state && 0 === e._deferreds.length && n._immediateFn((function() {
                e._handled || n._unhandledRejectionFn(e._value)
            }));
            for (var t = 0, i = e._deferreds.length; i > t; t++) r(e, e._deferreds[t]);
            e._deferreds = null
        }

        function u(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
        }

        function c(e, t) {
            var n = !1;
            try {
                e((function(e) {
                    n || (n = !0, i(t, e))
                }), (function(e) {
                    n || (n = !0, o(t, e))
                }))
            } catch (e) {
                if (n) return;
                n = !0, o(t, e)
            }
        }
        n.prototype.catch = function(e) {
            return this.then(null, e)
        }, n.prototype.then = function(e, n) {
            var i = new this.constructor(t);
            return r(this, new u(e, n, i)), i
        }, n.prototype.finally = function(e) {
            var t = this.constructor;
            return this.then((function(n) {
                return t.resolve(e()).then((function() {
                    return n
                }))
            }), (function(n) {
                return t.resolve(e()).then((function() {
                    return t.reject(n)
                }))
            }))
        }, n.all = function(e) {
            return new n((function(t, n) {
                if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
                var r = Array.prototype.slice.call(e);
                if (0 === r.length) return t([]);
                var i = r.length;

                function o(e, a) {
                    try {
                        if (a && ("object" == typeof a || "function" == typeof a)) {
                            var u = a.then;
                            if ("function" == typeof u) return void u.call(a, (function(t) {
                                o(e, t)
                            }), n)
                        }
                        r[e] = a, 0 == --i && t(r)
                    } catch (e) {
                        n(e)
                    }
                }
                for (var a = 0; r.length > a; a++) o(a, r[a])
            }))
        }, n.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === n ? e : new n((function(t) {
                t(e)
            }))
        }, n.reject = function(e) {
            return new n((function(t, n) {
                n(e)
            }))
        }, n.race = function(e) {
            return new n((function(t, n) {
                for (var r = 0, i = e.length; i > r; r++) e[r].then(t, n)
            }))
        }, n._immediateFn = "function" == typeof setImmediate && function(e) {
            setImmediate(e)
        } || function(t) {
            e(t, 0)
        }, n._unhandledRejectionFn = function(e) {
            void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        };
        var s = n;
        return /native code/.test(window.Promise) ? window.Promise : s
    }();

    function t() {
        return (t = Object.assign || function(e) {
            for (var t = 1; arguments.length > t; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function n(e, t) {
        return e + t
    }
    var r = {}.hasOwnProperty;

    function i(e, t) {
        return r.call(t, e)
    }

    function o() {
        return (o = Object.assign || function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            return n.forEach((function(t) {
                for (var n in t) i(n, t) && (e[n] = t[n])
            })), e
        }).apply(void 0, arguments)
    }
    var a = Array.isArray;

    function u(e) {
        return "object" == typeof e && null !== e && !a(e)
    }

    function c(e, t) {
        return Object.keys(t).reduce((function(n, r) {
            return n[r] = e(t[r]), n
        }), {})
    }

    function s(e) {
        return a(e) ? e.map(s) : u(e) ? c(s, e) : e
    }

    function d(e, t) {
        for (var n = 0; t.length > n; n++) {
            var r = t[n];
            if (e(r)) return r
        }
    }

    function l(e, t) {
        for (var n = t.length - 1; n >= 0; n--)
            if (e(t[n])) return t[n]
    }

    function f(e) {
        return e
    }

    function p(e, t) {
        return Object.keys(t).forEach((function(n) {
            e(t[n], n)
        }))
    }

    function m() {
        return Math.random().toString(36).substring(2)
    }

    function h(e) {
        var t = m();
        return i(t, e) ? h(e) : t
    }

    function v(e, t, n) {
        var r = function(e, t) {
            for (var n = "string" == typeof e ? e.split(".") : e, r = 0, i = t; i && n.length > r;) i = i[n[r++]];
            return i
        }(t, n);
        return null != r ? r : e
    }

    function g(e, t) {
        return -1 !== t.indexOf(e)
    }

    function _(e) {
        return 0 === (a(e) ? e : Object.keys(e)).length
    }

    function w(e) {
        return !e
    }

    function y(e) {
        return !!e
    }

    function b(e) {
        return e.length > 0 ? e[e.length - 1] : null
    }

    function k(e, t) {
        return Object.keys(t).reduce((function(n, r) {
            return n[e(r)] = t[r], n
        }), {})
    }

    function C(e, t) {
        if (_(t)) return e;
        var n = {};
        return p((function(r, o) {
            if (i(o, t))
                if (u(e[o]) && u(t[o])) n[o] = C(e[o], t[o]);
                else if (a(e[o]) && a(t[o])) {
                var c = Math.max(e[o].length, t[o].length);
                n[o] = Array(c);
                for (var s = 0; c > s; s++) s in t[o] ? n[o][s] = t[o][s] : s in e[o] && (n[o][s] = e[o][s])
            } else n[o] = t[o];
            else n[o] = e[o]
        }), e), p((function(e, r) {
            i(r, n) || (n[r] = t[r])
        }), t), n
    }

    function I(e) {
        if (0 === e.length) return {};
        var t = e[0];
        return e.slice(1).reduce((function(e, t) {
            return C(e, t)
        }), t)
    }

    function E(e) {
        return function(e, t) {
            var n = {};
            return function() {
                var r = e.apply(void 0, arguments);
                if (i(r, n)) return n[r];
                var o = t.apply(void 0, arguments);
                return n[r] = o, o
            }
        }(f, e)
    }

    function L() {}

    function x(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
    }

    function A(e, t) {
        if (x(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e);
        if (n.length !== Object.keys(t).length) return !1;
        for (var r = 0; n.length > r; r++)
            if (!i(n[r], t) || !x(e[n[r]], t[n[r]])) return !1;
        return !0
    }

    function T(e) {
        return e.reduce(n, 0)
    }

    function O(e) {
        return Array.prototype.slice.call(e)
    }
    var P = function(e) {
        return Object.keys(e).map((function(t) {
            return [t, e[t]]
        }))
    };
    var S = function(e, t) {
            p((function(e, n) {
                t.style[n] = e
            }), e)
        },
        z = function(e, t) {
            p((function(e, n) {
                "style" !== n ? t.setAttribute(n, e) : S(e, t)
            }), e)
        },
        j = function() {
            return !!document.documentElement.currentStyle
        },
        M = function(e, t) {
            var n = window.getComputedStyle(t),
                r = "border-box" === n.boxSizing,
                o = function(e, t) {
                    return e.reduce((function(e, n) {
                        return e[n] = t[n], e
                    }), {})
                }(e, n);
            j() && r && i("width", o) && null !== o.width && (o.width = T([o.width, n.paddingLeft, n.paddingRight, n.borderLeftWidth, n.borderRightWidth].map(parseFloat)) + "px");
            j() && r && i("height", o) && null !== o.height && (o.height = T([o.height, n.paddingTop, n.paddingBottom, n.borderTopWidth, n.borderBottomWidth].map(parseFloat)) + "px");
            return o
        };

    function N() {
        return new e((function(e) {
            ! function t() {
                document.body ? e(document.body) : setTimeout(t, 100)
            }()
        }))
    }

    function D(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }
    var q = function(e, t) {
            var n = document.createElement(e);
            return z(t, n), n
        },
        F = function(e) {
            return P(e).map((function(e) {
                return e.map(encodeURIComponent).join("=")
            })).join("&")
        },
        H = function(e) {
            return function(e) {
                return e.reduce((function(e, t) {
                    return e[t[0]] = t[1], e
                }), {})
            }(e.split("&").filter(Boolean).map((function(e) {
                return e.split("=").map((function(e) {
                    return decodeURIComponent(e.replace("+", "%20"))
                }))
            })).map((function(e) {
                return 2 === e.length ? e : [e[0], ""]
            })))
        },
        B = /(?:[^:]+:\/\/)?([^/\s]+)/;
    var W = /[^:]+:\/\/[^(/|?)\s]+/,
        R = function(e) {
            var t = e.match(W);
            return t && t[0]
        },
        V = /.*?\?([^#]+)/,
        G = function(e) {
            var t = e.match(V);
            return t ? "?" + t[1] : ""
        },
        U = function(e) {
            return e.replace(/^\?/, "")
        },
        J = function(e) {
            if (null === R(e)) return H(U(e));
            var t = U(G(e));
            return t ? H(t) : {}
        },
        Y = /^(?:https?:)?\/\/[^/]+\/([^?#]+)/,
        X = function(e) {
            var t = e.match(Y);
            return "/" + (t && t[1] || "")
        },
        $ = function(e) {
            return e.replace(/\w/g, "$&[\\r\\n\\t]*")
        },
        K = (RegExp("^[\0-]*(" + $("javascript") + "|" + $("data") + "):", "i"), /^((http(s)?:)?\/\/)/),
        Q = function(e, n) {
            if (-1 === e.indexOf("?")) return e;
            var r = J(e);
            if (_(r)) return e;
            if (Object.keys(r).every((function(e) {
                    return !n.includes(e)
                }))) return e;
            n.forEach((function(e) {
                return delete r[e]
            }));
            var i = function(e, n) {
                if (0 === Object.keys(n).length) return e;
                var r = R(e),
                    i = X(e),
                    o = G(e) ? J(e) : {};
                return "" + r + i + "?" + F(t({}, o, n))
            }(e.split("?")[0], r);
            return e.indexOf("#") > -1 ? i + "#" + e.split("#")[1] : i
        },
        Z = function(e) {
            return function(t, n) {
                if (0 === t) {
                    if ("function" != typeof e) return n(0, (function() {})), void n(2);
                    var r, i = !1;
                    n(0, (function(e) {
                        i || (i = 2 === e) && "function" == typeof r && r()
                    })), i || (r = e((function(e) {
                        i || n(1, e)
                    }), (function(e) {
                        i || void 0 === e || (i = !0, n(2, e))
                    }), (function() {
                        i || (i = !0, n(2))
                    })))
                }
            }
        },
        ee = function(e) {
            return function(t, n) {
                var r, i;
                0 === t && e(0, (function(e, t) {
                    if (0 === e) r = t, n(0, o);
                    else if (1 === e) {
                        var a = t;
                        i && i(2), a(0, (function(e, t) {
                            0 === e ? (i = t)(1) : 1 === e ? n(1, t) : 2 === e && t ? (r && r(2), n(2, t)) : 2 === e && (r ? (i = void 0, r(1)) : n(2))
                        }))
                    } else 2 === e && t ? (i && i(2), n(2, t)) : 2 === e && (i ? r = void 0 : n(2))
                }));

                function o(e, t) {
                    1 === e && (i || r)(1, t), 2 === e && (i && i(2), r && r(2))
                }
            }
        },
        te = function(e, t) {
            return e === t
        };

    function ne(e) {
        return void 0 === e && (e = te),
            function(t) {
                return function(n, r) {
                    if (0 === n) {
                        var i, o, a = !1;
                        t(0, (function(t, n) {
                            0 === t && (o = n), 1 === t ? a && e(i, n) ? o(1) : (a = !0, i = n, r(1, n)) : r(t, n)
                        }))
                    }
                }
            }
    }
    var re = function(e) {
            return function(t) {
                return function(n, r) {
                    var i;
                    0 === n && t(0, (function(t, n) {
                        0 === t ? (i = n, r(t, n)) : 1 === t ? e(n) ? r(t, n) : i(1) : r(t, n)
                    }))
                }
            }
        },
        ie = function(e) {
            return function(t) {
                var n;
                t(0, (function(t, r) {
                    0 === t && (n = r), 1 === t && e(r), 1 !== t && 0 !== t || n(1)
                }))
            }
        },
        oe = function(e, t, n) {
            return function(r, i) {
                if (0 === r) {
                    var o = !1,
                        a = function(e) {
                            i(1, e)
                        };
                    i(0, (function(r) {
                        2 === r && (o = !0, e.removeEventListener(t, a, n))
                    })), o || e.addEventListener(t, a, n)
                }
            }
        };
    var ae = function() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
        return function(e, n) {
            if (0 === e)
                for (var r = t.length, i = Array(r), o = 0, a = 0, u = function(e) {
                        if (0 !== e)
                            for (var t = 0; r > t; t++) i[t] && i[t](e)
                    }, c = function(e) {
                        t[e](0, (function(t, c) {
                            0 === t ? (i[e] = c, 1 == ++o && n(0, u)) : 2 === t ? (i[e] = void 0, ++a === r && n(2)) : n(t, c)
                        }))
                    }, s = 0; r > s; s++) c(s)
        }
    };

    function ue(e, t) {
        return Z((function(n) {
            return e.on(t, n),
                function() {
                    e.off(t, n)
                }
        }))
    }! function(e) {
        var t, n = e.Symbol;
        "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable"
    }("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")());
    var ce = function() {
            for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
            for (var r = t[0], i = 1, o = t.length; o > i; i++) r = t[i](r);
            return r
        },
        se = function(e) {
            return function(t) {
                return function(n, r) {
                    var i;
                    0 === n && t(0, (function(t, n) {
                        0 === t ? (i = n, r(0, (function(e, t) {
                            0 !== e && i(e, t)
                        })), r(1, e)) : r(t, n)
                    }))
                }
            }
        },
        de = function(e) {
            return function(t) {
                return function(n, r) {
                    0 === n && t(0, (function(t, n) {
                        r(t, 1 === t ? e(n) : n)
                    }))
                }
            }
        };

    function le(e) {
        return function(t) {
            return ee(de(e)(t))
        }
    }
    var fe = function() {};

    function pe(e, t) {
        0 === e && t(0, fe)
    }

    function me() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
        return function(e, n) {
            if (0 === e) {
                var r = !1;
                for (n(0, (function(e) {
                        2 === e && (r = !0, t.length = 0)
                    })); 0 !== t.length;) n(1, t.shift());
                r || n(2)
            }
        }
    }

    function he(e) {
        return function(t, n) {
            if (0 === t) {
                var r, i, o, a = 0;
                e(0, (function(e, t) {
                    if (0 === e && (o = t), 1 === e) {
                        var u = [i, t];
                        r = u[0], i = u[1], 2 > ++a ? o(1) : n(1, [r, i])
                    } else n(e, t)
                }))
            }
        }
    }
    var ve = function() {},
        ge = {};

    function _e(e) {
        var t, n, r = [],
            i = !1,
            o = ge;
        return function(a, u) {
            if (0 === a) {
                if (o !== ge) return u(0, ve), i && u(1, n), void u(2, o);
                r.push(u);
                var c = function(e, n) {
                    if (2 !== e) o === ge && t(e, n);
                    else {
                        var i = r.indexOf(u); - 1 !== i && r.splice(i, 1)
                    }
                };
                1 !== r.length ? (u(0, c), i && o === ge && u(1, n)) : e(0, (function(e, a) {
                    if (0 === e) return t = a, void u(0, c);
                    1 === e && (i = !0, n = a);
                    var s = r.slice(0);
                    2 === e && (o = a, r = null), s.forEach((function(t) {
                        t(e, a)
                    }))
                }))
            }
        }
    }
    var we = function(e) {
            return function(t) {
                return function(n, r) {
                    if (0 === n) {
                        var i, o = 0;
                        t(0, (function(t, n) {
                            0 === t ? (i = n, r(t, n)) : 1 === t && e > o ? (o++, i(1)) : r(t, n)
                        }))
                    }
                }
            }
        },
        ye = function(e) {
            return void 0 === e && (e = {}),
                function(t) {
                    "function" == typeof e && (e = {
                        next: e
                    });
                    var n, r = e.next,
                        i = e.error,
                        o = e.complete;
                    t(0, (function(e, t) {
                        0 === e && (n = t), 1 === e && r && r(t), 1 !== e && 0 !== e || n(1), 2 === e && !t && o && o(), 2 === e && t && i && i(t)
                    }));
                    return function() {
                        n && n(2)
                    }
                }
        },
        be = function(e) {
            return function(t) {
                return function(n, r) {
                    if (0 === n) {
                        var i, o = 0;
                        t(0, (function(t, n) {
                            0 === t ? (i = n, r(0, a)) : 1 === t ? e > o && (o++, r(t, n), o === e && (r(2), i(2))) : r(t, n)
                        }))
                    }

                    function a(t, n) {
                        e > o && i(t, n)
                    }
                }
            }
        },
        ke = {},
        Ce = function(e) {
            return function(t) {
                return function(n, r) {
                    if (0 === n) {
                        var i, o, a = !1,
                            u = ke;
                        t(0, (function(t, n) {
                            if (0 === t) return i = n, e(0, (function(e, t) {
                                if (0 !== e) return 1 === e ? (u = void 0, o(2), i(2), void(a && r(2))) : void(2 === e && (o = null, t && (u = t, i(2), a && r(e, t))));
                                (o = t)(1)
                            })), a = !0, r(0, (function(e, t) {
                                u === ke && (2 === e && o && o(2), i(e, t))
                            })), void(u !== ke && r(2, u));
                            2 === t && o(2), r(t, n)
                        }))
                    }
                }
            }
        };

    function Ie(t) {
        return new e((function(e, n) {
            ye({
                next: e,
                error: n,
                complete: function() {
                    var e = Error("No elements in sequence.");
                    e.code = "NO_ELEMENTS", n(e)
                }
            })(function(e) {
                return function(t, n) {
                    if (0 === t) {
                        var r, i, o = !1,
                            a = !1;
                        e(0, (function(e, t) {
                            return 0 === e ? (r = t, void n(0, (function(e, t) {
                                2 === e && (a = !0), r(e, t)
                            }))) : 1 === e ? (o = !0, i = t, void r(1)) : void(2 === e && !t && o && (n(1, i), a) || n(e, t))
                        }))
                    }
                }
            }(t))
        }))
    }
    var Ee = function(e, t, n) {
            return e(n = {
                path: t,
                exports: {},
                require: function(e, t) {
                    return function() {
                        throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                    }()
                }
            }, n.exports), n.exports
        }((function(e, t) {
            function n(e, t) {
                return e === t
            }

            function r(e, t, n) {
                if (null === t || null === n || t.length !== n.length) return !1;
                for (var r = t.length, i = 0; r > i; i++)
                    if (!e(t[i], n[i])) return !1;
                return !0
            }

            function i(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
                    i = null,
                    o = null;
                return function() {
                    return r(t, i, arguments) || (o = e.apply(null, arguments)), i = arguments, o
                }
            }

            function o(e) {
                var t = Array.isArray(e[0]) ? e[0] : e;
                if (!t.every((function(e) {
                        return "function" == typeof e
                    }))) {
                    var n = t.map((function(e) {
                        return typeof e
                    })).join(", ");
                    throw Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]")
                }
                return t
            }

            function a(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
                return function() {
                    for (var t = arguments.length, r = Array(t), a = 0; t > a; a++) r[a] = arguments[a];
                    var u = 0,
                        c = r.pop(),
                        s = o(r),
                        d = e.apply(void 0, [function() {
                            return u++, c.apply(null, arguments)
                        }].concat(n)),
                        l = i((function() {
                            for (var e = [], t = s.length, n = 0; t > n; n++) e.push(s[n].apply(null, arguments));
                            return d.apply(null, e)
                        }));
                    return l.resultFunc = c, l.recomputations = function() {
                        return u
                    }, l.resetRecomputations = function() {
                        return u = 0
                    }, l
                }
            }
            t.__esModule = !0, t.defaultMemoize = i, t.createSelectorCreator = a, t.createStructuredSelector = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
                if ("object" != typeof e) throw Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof e);
                var n = Object.keys(e);
                return t(n.map((function(t) {
                    return e[t]
                })), (function() {
                    for (var e = arguments.length, t = Array(e), r = 0; e > r; r++) t[r] = arguments[r];
                    return t.reduce((function(e, t, r) {
                        return e[n[r]] = t, e
                    }), {})
                }))
            };
            var u = t.createSelector = a(i)
        })),
        Le = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        xe = function() {
            function e() {
                Le(this, e), this._cache = {}
            }
            return e.prototype.set = function(e, t) {
                this._cache[e] = t
            }, e.prototype.get = function(e) {
                return this._cache[e]
            }, e.prototype.remove = function(e) {
                delete this._cache[e]
            }, e.prototype.clear = function() {
                this._cache = {}
            }, e
        }();
    (function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = t.cacheSize;
            if (Le(this, e), void 0 === n) throw Error("Missing the required property `cacheSize`.");
            if (!Number.isInteger(n) || 0 >= n) throw Error("The `cacheSize` property must be a positive integer value.");
            this._cache = {}, this._cacheOrdering = [], this._cacheSize = n
        }
        e.prototype.set = function(e, t) {
            (this._cache[e] = t, this._cacheOrdering.push(e), this._cacheOrdering.length > this._cacheSize) && this.remove(this._cacheOrdering[0])
        }, e.prototype.get = function(e) {
            return this._cache[e]
        }, e.prototype.remove = function(e) {
            var t = this._cacheOrdering.indexOf(e);
            t > -1 && this._cacheOrdering.splice(t, 1), delete this._cache[e]
        }, e.prototype.clear = function() {
            this._cache = {}, this._cacheOrdering = []
        }
    })(),
    function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = t.cacheSize;
            if (Le(this, e), void 0 === n) throw Error("Missing the required property `cacheSize`.");
            if (!Number.isInteger(n) || 0 >= n) throw Error("The `cacheSize` property must be a positive integer value.");
            this._cache = {}, this._cacheOrdering = [], this._cacheSize = n
        }
        e.prototype.set = function(e, t) {
            (this._cache[e] = t, this._registerCacheHit(e), this._cacheOrdering.length > this._cacheSize) && this.remove(this._cacheOrdering[0])
        }, e.prototype.get = function(e) {
            return this._registerCacheHit(e), this._cache[e]
        }, e.prototype.remove = function(e) {
            this._deleteCacheHit(e), delete this._cache[e]
        }, e.prototype.clear = function() {
            this._cache = {}, this._cacheOrdering = []
        }, e.prototype._registerCacheHit = function(e) {
            this._deleteCacheHit(e), this._cacheOrdering.push(e)
        }, e.prototype._deleteCacheHit = function(e) {
            var t = this._cacheOrdering.indexOf(e);
            t > -1 && this._cacheOrdering.splice(t, 1)
        }
    }();

    function Ae() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
        var r = xe;
        return function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = void 0,
                o = void 0;
            "function" == typeof n ? (console.warn('[re-reselect] Deprecation warning: "selectorCreator" argument is discouraged and will be removed in the upcoming major release. Please use "options.selectorCreator" instead.'), i = new r, o = n) : (i = n.cacheObject || new r, o = n.selectorCreator || Ee.createSelector);
            var a = function() {
                var n = e.apply(void 0, arguments);
                if ("string" == typeof n || "number" == typeof n) {
                    var r = i.get(n);
                    return void 0 === r && (r = o.apply(void 0, t), i.set(n, r)), r.apply(void 0, arguments)
                }
            };
            return a.getMatchingSelector = function() {
                var t = e.apply(void 0, arguments);
                return i.get(t)
            }, a.removeMatchingSelector = function() {
                var t = e.apply(void 0, arguments);
                i.remove(t)
            }, a.clearCache = function() {
                i.clear()
            }, a.resultFunc = t[t.length - 1], a
        }
    }
    var Te = function(e, t) {
            return t
        },
        Oe = function(e, t) {
            return function(e) {
                return e.entities.chats.byIds
            }(e)[t]
        },
        Pe = Ae([function(e, t) {
            return Oe(e, t).events.orderedIds
        }, function(e, t) {
            return Oe(e, t).events.byIds
        }], (function(e, t) {
            return e.map((function(e) {
                return t[e]
            }))
        }))(Te),
        Se = Ae([Oe, Pe], (function(e, n) {
            return t({}, e, {
                events: n
            })
        }))(Te),
        ze = function(e) {
            return e.entities.users.byIds
        },
        je = function(e) {
            return ze(e)[function(e) {
                return e.session.id
            }(e)]
        },
        Me = function(e, t) {
            return ze(e)[t]
        },
        Ne = function(e) {
            return je(e).id
        },
        De = (Ae([Pe, Ne], (function(e, t) {
            return l((function(e) {
                return e.delivered && e.author === t
            }), e)
        }))(Te), Ae([Pe, Ne], (function(e, t) {
            return l((function(e) {
                return e.seen && e.author === t
            }), e)
        }))(Te), {
            boosters: !0,
            form: !0,
            system_message: !0
        });
    Ee.createSelector([Pe, function(e) {
        return je(e).id
    }], (function(e, t) {
        return function(e, t, n) {
            for (var r = t; r >= 0; r--)
                if (e(n[r])) return r;
            return -1
        }((function(e) {
            return e.author === t && "message" === e.type && !(e.properties && "file" === e.properties.serverType) || !0 === e.seen && !De[e.type] && e.serverId
        }), (n = e).length - 1, n);
        var n
    })), Ae([function(e, t) {
        return Oe(e, t).participants
    }, ze], (function(e, t) {
        return e.map((function(e) {
            return t[e]
        }))
    }))(Te);

    function qe(e, t) {
        return void 0 === t ? e.application : e.application[t]
    }

    function Fe(e, t) {
        if (null == e) return {};
        var n, r, i = {},
            o = Object.keys(e);
        for (r = 0; o.length > r; r++) 0 > t.indexOf(n = o[r]) && (i[n] = e[n]);
        return i
    }
    var He = "application/x-postmate-v1+json",
        Be = 0,
        We = {
            handshake: 1,
            "handshake-reply": 1,
            call: 1,
            emit: 1,
            reply: 1,
            request: 1
        },
        Re = function(e, t) {
            return ("string" != typeof t || e.origin === t) && (!!e.data && ("object" == typeof e.data && ("postmate" in e.data && (e.data.type === He && !!We[e.data.postmate]))))
        },
        Ve = function() {
            function e(e) {
                var t = this;
                this.parent = e.parent, this.frame = e.frame, this.child = e.child, this.childOrigin = e.childOrigin, this.events = {}, this.listener = function(e) {
                    if (!Re(e, t.childOrigin)) return !1;
                    var n = ((e || {}).data || {}).value || {},
                        r = n.name;
                    "emit" === e.data.postmate && r in t.events && t.events[r].call(t, n.data)
                }, this.parent.addEventListener("message", this.listener, !1)
            }
            var t = e.prototype;
            return t.get = function(e) {
                var t = this;
                return new Ue.Promise((function(n) {
                    var r = ++Be;
                    t.parent.addEventListener("message", (function e(i) {
                        i.data.uid === r && "reply" === i.data.postmate && (t.parent.removeEventListener("message", e, !1), n(i.data.value))
                    }), !1), t.child.postMessage({
                        postmate: "request",
                        type: He,
                        property: e,
                        uid: r
                    }, t.childOrigin)
                }))
            }, t.call = function(e, t) {
                this.child.postMessage({
                    postmate: "call",
                    type: He,
                    property: e,
                    data: t
                }, this.childOrigin)
            }, t.on = function(e, t) {
                this.events[e] = t
            }, t.destroy = function() {
                window.removeEventListener("message", this.listener, !1), this.frame.parentNode.removeChild(this.frame)
            }, e
        }(),
        Ge = function() {
            function e(e) {
                var t = this;
                this.model = e.model, this.parent = e.parent, this.parentOrigin = e.parentOrigin, this.child = e.child, this.child.addEventListener("message", (function(e) {
                    if (Re(e, t.parentOrigin)) {
                        var n = e.data,
                            r = n.property,
                            i = n.uid,
                            o = n.data;
                        "call" !== e.data.postmate ? function(e, t) {
                            var n = "function" == typeof e[t] ? e[t]() : e[t];
                            return Ue.Promise.resolve(n)
                        }(t.model, r).then((function(t) {
                            return e.source.postMessage({
                                property: r,
                                postmate: "reply",
                                type: He,
                                uid: i,
                                value: t
                            }, e.origin)
                        })) : r in t.model && "function" == typeof t.model[r] && t.model[r].call(t, o)
                    }
                }))
            }
            return e.prototype.emit = function(e, t) {
                this.parent.postMessage({
                    postmate: "emit",
                    type: He,
                    value: {
                        name: e,
                        data: t
                    }
                }, this.parentOrigin)
            }, e
        }(),
        Ue = function() {
            function e(e) {
                var t = e.container,
                    n = void 0 === t ? void 0 !== n ? n : document.body : t,
                    r = e.model,
                    i = e.url,
                    o = e.iframeAllowedProperties;
                return this.parent = window, this.frame = document.createElement("iframe"), o && (this.frame.allow = o), n.appendChild(this.frame), this.child = this.frame.contentWindow || this.frame.contentDocument.parentWindow, this.model = r || {}, this.sendHandshake(i)
            }
            return e.prototype.sendHandshake = function(t) {
                var n, r = this,
                    i = function(e) {
                        var t = document.createElement("a");
                        t.href = e;
                        var n = t.protocol.length > 4 ? t.protocol : window.location.protocol,
                            r = t.host.length ? "80" === t.port || "443" === t.port ? t.hostname : t.host : window.location.host;
                        return t.origin || n + "//" + r
                    }(t),
                    o = 0;
                return new e.Promise((function(e, a) {
                    r.parent.addEventListener("message", (function t(o) {
                        return !!Re(o, i) && ("handshake-reply" === o.data.postmate ? (clearInterval(n), r.parent.removeEventListener("message", t, !1), r.childOrigin = o.origin, e(new Ve(r))) : a("Failed handshake"))
                    }), !1);
                    var u = function() {
                            o++, r.child.postMessage({
                                postmate: "handshake",
                                type: He,
                                model: r.model
                            }, i), 5 === o && clearInterval(n)
                        },
                        c = function() {
                            u(), n = setInterval(u, 500)
                        };
                    r.frame.attachEvent ? r.frame.attachEvent("onload", c) : r.frame.addEventListener("load", c), r.frame.src = t
                }))
            }, e
        }();
    Ue.debug = !1, Ue.Promise = function() {
        try {
            return window ? window.Promise : e
        } catch (e) {
            return null
        }
    }(), Ue.Model = function() {
        function e(e) {
            return this.child = window, this.model = e, this.parent = this.child.parent, this.sendHandshakeReply()
        }
        return e.prototype.sendHandshakeReply = function() {
            var e = this;
            return new Ue.Promise((function(t, n) {
                e.child.addEventListener("message", (function r(i) {
                    if (i.data.postmate) {
                        if ("handshake" === i.data.postmate) {
                            e.child.removeEventListener("message", r, !1), i.source.postMessage({
                                postmate: "handshake-reply",
                                type: He
                            }, i.origin), e.parentOrigin = i.origin;
                            var o = i.data.model;
                            return o && Object.keys(o).forEach((function(t) {
                                e.model[t] = o[t]
                            })), t(new Ge(e))
                        }
                        return n("Handshake Reply Failed")
                    }
                }), !1)
            }))
        }, e
    }();
    var Je = function() {
        var e, n = {
                all: e = e || new Map,
                on: function(t, n) {
                    var r = e.get(t);
                    r ? r.push(n) : e.set(t, [n])
                },
                off: function(t, n) {
                    var r = e.get(t);
                    r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []))
                },
                emit: function(t, n) {
                    var r = e.get(t);
                    r && r.slice().map((function(e) {
                        e(n)
                    })), (r = e.get("*")) && r.slice().map((function(e) {
                        e(t, n)
                    }))
                }
            },
            r = n.all,
            i = Fe(n, ["all"]);
        return t({}, i, {
            off: function(e, t) {
                e ? i.off(e, t) : r.clear()
            },
            once: function(e, t) {
                i.on(e, (function n(r, o) {
                    i.off(e, n), t(r, o)
                }))
            }
        })
    };
    Ue.Promise = e;
    var Ye = function(t) {
        var n = t.methods,
            r = Fe(t, ["methods"]);
        return new Ue(r).then((function(t) {
            var r = t.on,
                i = t.call,
                a = function() {
                    for (var e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
                    return i.apply(t, n)
                },
                u = Je(),
                c = {},
                s = {};
            return n.resolveRemoteCall = function(e) {
                var t = e.id,
                    n = e.value,
                    r = s[t];
                delete s[t], r(n)
            }, t.on = function(e, n) {
                u.on(e, n), c[e] || (c[e] = !0, function() {
                    for (var e = arguments.length, n = Array(e), i = 0; e > i; i++) n[i] = arguments[i];
                    r.apply(t, n)
                }(e, (function(t) {
                    u.emit(e, t)
                })))
            }, t.off = u.off, t.on("remote-call", (function(e) {
                var r = e.id,
                    i = e.method,
                    o = "function" == typeof n[i] ? n[i].apply(t, e.args) : void 0;
                o && "function" == typeof o.then ? o.then((function(e) {
                    a("resolveRemoteCall", {
                        id: r,
                        value: e
                    })
                })) : a("resolveRemoteCall", {
                    id: r,
                    value: o
                })
            })), t.emit = function(e, t) {
                a("emitEvent", {
                    event: e,
                    data: t
                })
            }, t._emit = u.emit, t.call = function(t) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; n > i; i++) r[i - 1] = arguments[i];
                return new e((function(e) {
                    var n = h(s);
                    s[n] = e, a("remoteCall", {
                        id: n,
                        method: t,
                        args: r
                    })
                }))
            }, o(t, n)
        }))
    };

    function Xe(e, t) {
        return null != t && null != e && "object" == typeof t && "object" == typeof e ? $e(t, e) : e
    }

    function $e(e, n) {
        var r;
        if (Array.isArray(e)) {
            r = e.slice(0, n.length);
            for (var o = 0; n.length > o; o++) void 0 !== n[o] && (r[o] = Xe(n[o], r[o]))
        } else
            for (var a in r = t({}, e), n) i(a, n) && (void 0 === n[a] ? delete r[a] : r[a] = Xe(n[a], r[a]));
        return r
    }
    var Ke = function(t) {
            return new e((function(e) {
                t.on("state", (function n(r) {
                    t.off("state", n), t.state = r, e(r)
                })), t.on("state_diff", (function(e) {
                    t.state = $e(t.state, e)
                })), t.on("store_event", (function(e) {
                    t._emit(e[0], e[1])
                })), t.call("startStateSync")
            }))
        },
        Qe = "chat-widget",
        Ze = "chat-widget-minimized",
        et = {
            opacity: 0,
            visibility: "hidden",
            zIndex: -1
        },
        tt = {
            opacity: 1,
            visibility: "visible",
            zIndex: 2147483639
        },
        nt = {
            id: Qe + "-container",
            style: t({}, et, {
                position: "fixed",
                bottom: 0,
                width: 0,
                height: 0,
                maxWidth: "100%",
                maxHeight: "100%",
                minHeight: 0,
                minWidth: 0,
                backgroundColor: "transparent",
                border: 0,
                overflow: "hidden"
            })
        },
        rt = (t({}, nt.style), {
            id: "livechat-eye-catcher",
            style: {
                position: "fixed",
                visibility: "visible",
                zIndex: 2147483639,
                background: "transparent",
                border: 0,
                padding: "10px 10px 0 0",
                float: "left",
                marginRight: "-10px",
                webkitBackfaceVisibility: "hidden"
            }
        }),
        it = {
            style: {
                position: "absolute",
                display: "none",
                top: "-5px",
                right: "-5px",
                width: "16px",
                lineHeight: "16px",
                textAlign: "center",
                cursor: "pointer",
                textDecoration: "none",
                color: "#000",
                fontSize: "20px",
                fontFamily: "Arial, sans-serif",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.5)"
            }
        },
        ot = {
            id: "livechat-eye-catcher-img",
            style: {
                display: "block",
                overflow: "hidden",
                cursor: "pointer"
            }
        },
        at = {
            alt: "",
            style: {
                display: "block",
                border: 0,
                float: "right"
            }
        },
        ut = {
            position: "absolute",
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px"
        },
        ct = {
            allowtransparency: !0,
            id: Qe,
            name: Qe,
            title: "LiveChat chat widget",
            scrolling: "no",
            style: {
                width: "100%",
                height: "100%",
                "min-height": "0px",
                "min-width": "0px",
                margin: "0px",
                padding: "0px",
                "background-image": "none",
                "background-position-x": "0%",
                "background-position-y": "0%",
                "background-size": "initial",
                "background-attachment": "scroll",
                "background-origin": "initial",
                "background-clip": "initial",
                "background-color": "rgba(0, 0, 0, 0)",
                "border-width": "0px",
                float: "none"
            }
        },
        st = t({}, ct, {
            id: Ze,
            name: Ze
        }),
        dt = e.resolve(),
        lt = function(e) {
            dt.then(e)
        },
        ft = function(e) {
            return lt((function() {
                throw e
            }))
        },
        pt = function(e) {
            return function(t) {
                var n = window.LC_API || {};
                if ("function" == typeof t && t(n), "function" == typeof n[e]) try {
                    n[e]()
                } catch (e) {
                    ft(e)
                }
            }
        },
        mt = function(e, t) {
            if (!e) return !0;
            var n = function(e) {
                var t = e.match(B);
                return t && t[1]
            }(t);
            return !!n && [].concat(e, ["livechatinc.com", "lc.chat"]).some((function(e) {
                var t = n.length - e.length;
                return -1 !== n.indexOf(e, t) && (n.length === e.length || "." === n.charAt(t - 1))
            }))
        },
        ht = [],
        vt = function(e) {
            30 > ht.length || (ht = ht.slice(1));
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            ht.push({
                name: e,
                args: n
            })
        },
        gt = "always visible",
        _t = "always hide",
        wt = "hide until it gets activated";

    function yt(e, t, n) {
        return function(r) {
            var i, o = (void 0 === r ? {} : r).prettyPrint,
                a = void 0 === o || o,
                u = t.analytics.googleAnalytics.trackerName,
                c = !mt(n.allowedDomains, document.location.href),
                s = [
                    ["window.open", !/native code/.test(window.open)],
                    ["document.domain", window.location.hostname !== document.domain],
                    ["window.frames", window.frames !== window],
                    ["JSON.stringify", !/native code/.test(window.JSON.stringify)],
                    ["JSON.parse", !/native code/.test(window.JSON.parse)],
                    ["Object.keys", !/native code/.test(Object.keys)],
                    ["console.log", !/native code/.test(console.log)]
                ].filter((function(e) {
                    return e[1]
                })).map((function(e) {
                    return e[0]
                })),
                d = function(e) {
                    var t = [];
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                    return t
                }(ct.style).some((function(t) {
                    return e.frame.style.getPropertyValue(t) !== ct.style[t]
                })),
                l = function(e) {
                    var t = "";
                    return {
                        desktopVisibility: t = e.initiallyHidden ? e.disabledMinimized ? _t : wt : gt,
                        mobileVisibility: e.hasCustomMobileSettings ? e.hiddenOnMobile ? _t : e.initiallyHiddenOnMobile ? e.disabledMinimizedOnMobile ? _t : wt : gt : t
                    }
                }(n.__unsafeProperties.group),
                f = l.desktopVisibility,
                p = l.mobileVisibility,
                m = [{
                    msg: "language: " + n.__unsafeProperties.group.language
                }, {
                    msg: "region: " + n.region
                }, {
                    msg: "license number: " + window.__lc.license
                }, {
                    msg: "group id: " + e.state.application.group
                }, {
                    msg: "hidden: " + (e.state.application.hidden ? "yes" : "no")
                }, {
                    msg: "tracker name: " + u
                }, {
                    msg: "desktop visibility: " + f,
                    isNotStandard: f !== gt
                }, {
                    msg: "mobile visibility: " + p,
                    isNotStandard: p !== gt
                }, {
                    msg: "chat between groups: " + (window.__lc.chat_between_groups ? "yes" : "no")
                }, {
                    msg: "is iframe inline style modified: " + (d ? "yes" : "no"),
                    isNotStandard: d
                }, {
                    msg: "is current domain not allowed by the allowed domains: " + (c ? "yes" : "no"),
                    isNotStandard: c
                }, {
                    msg: "overrides: " + (s.length > 0 ? s.join(",\n") : "none"),
                    isNotStandard: s.length > 0
                }, {
                    msg: "call history: " + (ht.length > 0 ? ht.map((function(e) {
                        return e.name + "(" + e.args.join(", ") + ")"
                    })).join(",\n") : "none"),
                    isNotStandard: ht.length > 0
                }];
            if (!a) return m;
            var h = m.filter((function(e) {
                    return e.isNotStandard
                })),
                v = m.filter((function(e) {
                    return !e.isNotStandard
                })),
                g = [].concat(h, v);
            return -1 !== s.indexOf("console.log") ? g.map((function(e) {
                return e.msg
            })).join("\n\n") : ((i = console).log.apply(i, [g.map((function(e) {
                return "%c" + e.msg
            })).join("\n\n")].concat(g.map((function(e) {
                return e.isNotStandard ? "color: red;" : ""
            })))), "")
        }
    }

    function bt(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
        return function() {
            "function" == typeof e && e.apply(void 0, n)
        }
    }

    function kt(e, t, n) {
        return ce(ue(e, n), ie((function(e) {
            return lt(bt(t[n], e))
        })))
    }

    function Ct(e) {
        return I(e.filter(Boolean).map((function(e) {
            var t;
            return (t = {})[e.name] = e.value + "", t
        })))
    }

    function It(e, t) {
        var n, r = d((function(e) {
            return !e[1]
        }), P((n = t, ["name", "email"].reduce((function(e, t) {
            return i(t, n) && (e[t] = n[t]), e
        }), {}))));
        if (r) {
            var o = r[1];
            console.error("[LiveChatWidget] Customer " + r[0] + " cannot be set to " + ("" === o ? "empty string" : o))
        } else e.call("storeMethod", ["requestUpdateUser", Ne(e.state), t])
    }

    function Et(e, t) {
        e.call("storeMethod", ["requestSetUserProperties", Ne(e.state), t])
    }

    function Lt(e) {
        return null != e ? e + "" : null
    }
    var xt = function(e, t) {
        return qe(e, "visibility").state === t
    };

    function At(e, t) {
        return ee((n = function() {
            return ce(ue(e, "state_diff"), de((function() {
                return e.state
            })), se(e.state), de(t), ne(A), Ce(ue(e, "unbind")))
        }, function(e, t) {
            if (0 === e) {
                var r = !1;
                t(0, (function(e) {
                    2 === e && (r = !0)
                })), t(1, n()), r || t(2)
            }
        }));
        var n
    }
    var Tt = function(e, t) {
        return ce(At(e, t), we(1))
    };

    function Ot(e) {
        return ce(At(e, (function(e) {
            return qe(e, "availability")
        })), re(y))
    }
    var Pt = "liveChatChatId";

    function St(e) {
        return ce(At(e, (function(e) {
            return Se(e, Pt).active
        })), we(1), le((function(t) {
            return t ? ce(At(e, (function(e) {
                return Se(e, Pt).properties.currentAgent
            })), re(Boolean), de((function() {
                return t
            })), be(1)) : me(t)
        })))
    }

    function zt(e, t) {
        return ce(ue(e, "state_diff"), de((function() {
            return qe(e.state, "readyState")
        })), re((function(e) {
            return e === t
        })), be(1), _e)
    }
    var jt = "not_ready",
        Mt = "ready",
        Nt = "bootstrapped";

    function Dt(e, t) {
        return ce(zt(e, Mt), le(t))
    }

    function qt(e, t) {
        return ce(zt(e, Nt), le(t))
    }

    function Ft(e, t) {
        return ce(At(e, (function(e) {
            return qe(e, "invitation")
        })), de((function(e) {
            return e[t]
        })), re(y), he, re((function(e) {
            return e[1].length > e[0].length
        })), de((function(e) {
            return b(e[1])
        })))
    }
    var Ht = function(e) {
            return e.actingAsDirectLink || e.isInCustomContainer
        },
        Bt = "liveChatChatId",
        Wt = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            return lt(bt.apply(void 0, [e].concat(n)))
        };

    function Rt(e, t, n) {
        window.LC_API = window.LC_API || {};
        var r = window.LC_API;
        ce(function(e) {
            return ce(At(e, (function(e) {
                return xt(e, "maximized")
            })), re(y))
        }(e), ie((function() {
            return Wt(r.on_chat_window_opened)
        }))), ce(qt(e, (function() {
            return function(e) {
                return ce(At(e, (function(e) {
                    return xt(e, "minimized")
                })), we(1), re(y))
            }(e)
        })), ie((function() {
            return Wt(r.on_chat_window_minimized)
        }))), ce(function(e) {
            return ce(At(e, (function(e) {
                return xt(e, "hidden")
            })), re(y))
        }(e), ie((function() {
            return Wt(r.on_chat_window_hidden)
        }))), ce(Ot(e), ie((function(e) {
            return Wt(r.on_chat_state_changed, {
                state: "online" === e ? "online_for_chat" : "offline"
            })
        }))), ce(qt(e, (function() {
            return St(e)
        })), re(y), ie((function() {
            return Wt(r.on_chat_started, {
                agent_name: Me(e.state, Se(e.state, Bt).properties.currentAgent).name
            })
        }))), ce(qt(e, (function() {
            return St(e)
        })), re(w), ie((function() {
            return Wt(r.on_chat_ended)
        }))), ce(qt(e, (function() {
            return ue(e, "on_message")
        })), ie((function(e) {
            return Wt(r.on_message, e)
        }))), ce(ue(e, "widget_resize"), ie((function(e) {
            return Wt(r.on_widget_resize, e.size)
        }))), ce(function(e) {
            return ce(ue(e, "add_event"), re((function(e) {
                return e.event.properties.invitation
            })), de((function(t) {
                var n = t.event;
                return {
                    event: n,
                    author: Me(e.state, n.author)
                }
            })))
        }(e), ie((function(e) {
            var t = e.author,
                n = e.event,
                i = n.properties;
            Wt(r.on_message, {
                text: i.text,
                timestamp: n.timestamp,
                invitation: !0,
                user_type: "agent",
                agent_login: t.id,
                agent_name: t.name,
                received_first_time: i.receivedFirstTime
            })
        }))), kt(e, r, "on_postchat_survey_submitted"), kt(e, r, "on_prechat_survey_submitted"), kt(e, r, "on_rating_comment_submitted"), kt(e, r, "on_rating_submitted"), kt(e, r, "on_ticket_created"), r.set_custom_variables = function(t) {
            vt("LC_API.set_custom_variables", t), Et(e, Ct(t))
        }, r.update_custom_variables = function(t) {
            vt("LC_API.update_custom_variables", t), It(e, {
                properties: Ct(t)
            })
        }, r.set_visitor_name = function(t) {
            vt("LC_API.set_visitor_name", t), It(e, {
                name: Lt(t)
            })
        }, r.set_visitor_email = function(t) {
            vt("LC_API.set_visitor_email", t), It(e, {
                email: Lt(t)
            })
        }, r.open_chat_window = r.show_full_view = r.open_mobile_window = function() {
            vt("LC_API.open_chat_window"), e.maximize()
        }, r.minimize_chat_window = function() {
            vt("LC_API.minimize_chat_window"), Ht(t) || e.minimize()
        }, r.hide_eye_catcher = function() {
            vt("LC_API.hide_eye_catcher"), e.call("hideEyeCatcher")
        }, r.hide_chat_window = function() {
            vt("LC_API.hide_chat_window"), Ht(t) || e.hide()
        }, r.agents_are_available = function() {
            return vt("LC_API.agents_are_available"), "online" === qe(e.state, "availability")
        }, r.chat_window_maximized = function() {
            return vt("LC_API.chat_window_maximized"), xt(e.state, "maximized")
        }, r.chat_window_minimized = function() {
            return vt("LC_API.chat_window_minimized"), xt(e.state, "minimized")
        }, r.chat_window_hidden = function() {
            return vt("LC_API.chat_window_hidden"), xt(e.state, "hidden")
        }, r.visitor_queued = function() {
            return vt("LC_API.visitor_queued"), Se(e.state, Bt).properties.queued
        }, r.chat_running = function() {
            return vt("LC_API.chat_running"), Se(e.state, Bt).active
        }, r.visitor_engaged = function() {
            return vt("LC_API.visitor_engaged"), r.visitor_queued() || r.chat_running() || !!Se(e.state, Bt).properties.fakeAgentMessageId
        }, r.get_window_type = function() {
            return vt("LC_API.get_window_type"), "embedded"
        }, r.close_chat = function() {
            vt("LC_API.close_chat"), e.call("storeMethod", ["requestUpdateChat", Bt, {
                active: !1
            }])
        }, r.diagnose = yt(e, t, n), r.get_last_visit_timestamp = function() {
            return qe(e.state).clientLastVisitTimestamp
        }, r.get_visits_number = function() {
            return qe(e.state).clientVisitNumber
        }, r.get_page_views_number = function() {
            return qe(e.state).clientPageViewsCount
        }, r.get_chats_number = function() {
            return qe(e.state).clientChatNumber
        }, r.get_visitor_id = function() {
            return je(e.state).serverId
        }, r.get_chat_id = function() {
            return Se(e.state, Bt).serverId
        }, r.trigger_sales_tracker = function(e, t) {
            var n = a(t) ? t : [];
            "string" == typeof e && "" !== e && r.set_custom_variables([].concat(n, [{
                name: "__sales_tracker_" + e,
                value: "1"
            }]))
        }, r.scriptTagVersion = function() {
            return "LiveChatWidget" in window ? window.LiveChatWidget._v : "1.0"
        }, ["on", "off", "call", "get"].forEach((function(e) {
            r[e] = function() {
                var t = "LiveChatWidget" in window ? 'call it on the new "LiveChatWidget" global object.' : "upgrade your snippet code. You can do it by going to: https://my.livechatinc.com/settings/code";
                console.warn('[LiveChatWidget] In order to use "' + e + '" function you need to ' + t)
            }
        })), r.disable_sounds = L
    }
    var Vt = {
            handler: null,
            setHandler: function(e) {
                this.handler = e
            },
            navigate: function(e) {
                var t = this;
                lt((function() {
                    window.location.origin === R(e) && "function" == typeof t.handler ? t.handler(X(e)) : window.open(e, "_blank")
                }))
            }
        },
        Gt = "liveChatChatId",
        Ut = function(e) {
            var n, r = e.trackerId,
                i = e.variables;
            return t({}, c(String, void 0 === i ? {} : i), ((n = {})["__sales_tracker_" + r] = "1", n))
        },
        Jt = function(e) {
            var n = e.id;
            return t({
                uniqueId: e.uniqueId
            }, n && {
                id: n
            })
        },
        Yt = function(e, t) {
            return v(null, "properties", l((function(e) {
                return e.properties.uniqueId === t
            }), Pe(e.state, Gt)))
        },
        Xt = function(e) {
            return t = function(e) {
                if ("call" !== e[0]) return "other";
                switch (e[1][0]) {
                    case "set_customer_email":
                        return "email";
                    case "set_customer_name":
                        return "name";
                    case "set_session_variables":
                    case "trigger_sales_tracker":
                    case "update_session_variables":
                        return "fields";
                    case "destroy":
                    case "hide":
                    case "maximize":
                    case "minimize":
                        return "visibility"
                }
            }, Object.keys(n = e).reduce((function(e, r) {
                var i = n[r],
                    o = t(i);
                return e[o] = e[o] || [], e[o].push(i), e
            }), {});
            var t, n
        };

    function $t(e, n, r) {
        var i, o = Je(),
            a = window.LiveChatWidget,
            u = function(e, t) {
                var n;
                return (n = {
                    get: w,
                    call: k,
                    on: h,
                    once: v,
                    off: o.off
                })[e].apply(n, t)
            },
            l = function(e, t) {
                return lt((function() {
                    return o.emit(e, t)
                }))
            },
            f = function(e) {
                void 0 === e && (e = []);
                var t = b(e);
                if (t) {
                    var n = t[1];
                    k(n[0], n[1])
                }
            },
            p = Xt(a._q);

        function m(t, n, r) {
            switch (n) {
                case "new_event":
                case "form_submitted":
                case "greeting_hidden":
                case "rating_submitted":
                case "visibility_changed":
                case "greeting_displayed":
                case "availability_changed":
                case "customer_status_changed":
                case "rich_message_button_clicked":
                    return void o[t](n, r);
                case "ready":
                    return void(qe(e.state, "readyState") !== jt ? lt((function() {
                        return r({
                            state: _("state"),
                            customerData: _("customer_data")
                        })
                    })) : o[t](n, r));
                default:
                    return void console.error('[LiveChatWidget] callback "' + n + '" does not exist.')
            }
        }

        function h(e, t) {
            vt("LiveChatWidget.on", "'" + e + "'", t), m("on", e, t)
        }

        function v(e, t) {
            vt("LiveChatWidget.once", "'" + e + "'", t), m("once", e, t)
        }

        function _(t) {
            switch (t) {
                case "state":
                    var n = qe(e.state);
                    return {
                        availability: n.availability,
                        visibility: n.visibility.state
                    };
                case "chat_data":
                    var r = Se(e.state, Gt),
                        i = r.properties;
                    return {
                        chatId: r.serverId || null,
                        threadId: (r.active || i.ended) && i.lastThread || null
                    };
                case "customer_data":
                    var o = je(e.state),
                        a = o.serverId,
                        u = o.name,
                        c = o.email,
                        l = o.properties,
                        f = qe(e.state).isReturning,
                        p = Se(e.state, Gt),
                        m = p.active,
                        h = p.properties,
                        v = h.queued,
                        g = h.fakeAgentMessageId,
                        _ = d((function(e) {
                            return e.id === g
                        }), p.events);
                    return {
                        name: u,
                        email: c,
                        isReturning: f,
                        sessionVariables: l,
                        id: a,
                        status: v ? "queued" : m ? "chatting" : _ && _.properties.invitation ? "invited" : "browsing"
                    };
                case "features":
                    return s(qe(e.state).config.features);
                default:
                    return void console.error('[LiveChatWidget] property "' + t + '" not exists.')
            }
        }

        function w(e) {
            return vt("LiveChatWidget.get", "'" + e + "'"), _(e)
        }

        function k(t, r) {
            switch (vt.apply(void 0, ["LiveChatWidget.call", "'" + t + "'"].concat(r)), t) {
                case "hide":
                case "maximize":
                case "minimize":
                    if (Ht(n)) return;
                    return void e[t](r);
                case "destroy":
                    return e.kill(), delete window.__lc_inited, delete window.LC_API, void delete window.LiveChatWidget;
                case "set_session_variables":
                    return void Et(e, c(String, r));
                case "set_customer_name":
                    return void It(e, {
                        name: Lt(r)
                    });
                case "set_customer_email":
                    return void It(e, {
                        email: Lt(r)
                    });
                case "update_session_variables":
                    return void It(e, {
                        properties: c(String, r)
                    });
                case "trigger_sales_tracker":
                    return void Et(e, Ut(r));
                case "hide_greeting":
                    return void e.call("hideGreeting");
                case "set_navigation_handler":
                    return void Vt.setHandler(r);
                default:
                    return void console.error('[LiveChatWidget] method "' + t + '" not exists.')
            }
        }
        void 0 === (i = p.other) && (i = []), i.forEach((function(e) {
                u(e[0], e[1])
            })), f(p.visibility), f(p.name), f(p.email),
            function(e) {
                var n, r = (void 0 === (n = e) && (n = []), n.reduce((function(e, n) {
                        var r = n[1],
                            i = r[1];
                        switch (r[0]) {
                            case "set_session_variables":
                                return e.mode = "set", e.properties = i, e;
                            case "trigger_sales_tracker":
                                return e.mode = "set", e.properties = Ut(i), e;
                            case "update_session_variables":
                                return "none" === e.mode && (e.mode = "update"), e.properties = t({}, e.properties, i), e
                        }
                    }), {
                        mode: "none"
                    })),
                    i = r.mode;
                "none" !== i && k(i + "_session_variables", r.properties)
            }(p.fields), a._q = [], a._h = u, a.scriptTagVersion = function() {
                return a._v
            }, a.diagnose = yt(e, n, r), ce(zt(e, Nt), ie((function() {
                var e;
                e = function(e) {
                    return "function" == typeof e && lt((function() {
                        return e(a)
                    }))
                }, Array.isArray(window.__lc_onready) && (window.__lc_onready.forEach(e), window.__lc_onready = {
                    push: e
                }), l("ready", {
                    state: _("state"),
                    customerData: _("customer_data")
                })
            }))), ce(qt(e, (function() {
                return Ot(e)
            })), ie((function(e) {
                return l("availability_changed", {
                    availability: e
                })
            }))), ce(qt(e, (function() {
                return Tt(e, (function() {
                    return _("state").visibility
                }))
            })), ie((function(e) {
                l("visibility_changed", {
                    visibility: e
                })
            }))), ce(qt(e, (function() {
                return Tt(e, (function() {
                    return _("customer_data").status
                }))
            })), ie((function(e) {
                return l("customer_status_changed", {
                    status: e
                })
            }))), ce(qt(e, (function() {
                return Ft(e, "hiddenIds")
            })), de((function(t) {
                return Yt(e, t)
            })), re(y), ie((function(e) {
                return l("greeting_hidden", Jt(e))
            }))), ce(qt(e, (function() {
                return Ft(e, "displayedIds")
            })), de((function(t) {
                return Yt(e, t)
            })), re(y), ie((function(e) {
                return l("greeting_displayed", Jt(e))
            }))), ce(ue(e, "on_rating_submitted"), ie((function(e) {
                return l("rating_submitted", e)
            }))), ce(ae(ue(e, "add_event"), ue(e, "send_event")), re((function(e) {
                return g(e.event.type, ["message", "emoji", "rich_message", "file"])
            })), de((function(n) {
                var r = n.event,
                    i = r.timestamp,
                    o = r.properties,
                    a = Me(e.state, r.author),
                    u = !0 === o.invitation;
                return t({
                    timestamp: i,
                    type: r.type,
                    author: {
                        id: a.serverId,
                        type: a.id === Ne(e.state) ? "customer" : "agent"
                    }
                }, u && {
                    greeting: Jt(o)
                })
            })), ie((function(e) {
                return l("new_event", e)
            }))), ce(ae(ce(ue(e, "send_event"), de((function(e) {
                var t = e.event,
                    n = t.type,
                    r = t.properties;
                if ("rich_message_postback" === n) return {
                    postbackId: "postback" in r ? r.postback.id : r.id,
                    eventId: r.eventId
                };
                if ("message" === n && r.triggeredBy) {
                    var i = r.triggeredBy;
                    return {
                        postbackId: i.button.postbackId,
                        eventId: i.event
                    }
                }
                return null
            })), re(y)), ce(ue(e, "rich_greeting_button_clicked"), de((function(e) {
                var t = e.event;
                return {
                    eventId: t.id,
                    postbackId: e.button.postbackId,
                    greeting: Jt(t.properties)
                }
            })))), ie((function(e) {
                return l("rich_message_button_clicked", e)
            }))), ce(ae(ce(ue(e, "on_ticket_created"), de((function() {
                return "ticket"
            }))), ce(ue(e, "on_prechat_survey_submitted"), de((function() {
                return "prechat"
            }))), ce(ue(e, "on_postchat_survey_submitted"), de((function() {
                return "postchat"
            })))), ie((function(e) {
                return l("form_submitted", {
                    type: e
                })
            })))
    }
    var Kt = function() {
            return window.GoogleAnalyticsObject || "ga"
        },
        Qt = function(e) {
            var t = e.event,
                n = e.label,
                r = e.nonInteraction,
                i = e.trackerName,
                o = window[Kt()];
            o && "function" == typeof o && o([i, "send"].filter(Boolean).join("."), {
                hitType: "event",
                eventCategory: "LiveChat",
                eventAction: t,
                eventLabel: n,
                nonInteraction: r
            })
        },
        Zt = {
            ga: Qt,
            gaAll: function(e) {
                var n = window[Kt()];
                if (n && "function" == typeof n.getAll) {
                    var r = n.getAll();
                    a(r) && r.forEach((function(n) {
                        Qt(t({}, e, {
                            trackerName: n && "function" == typeof n.get ? n.get("name") : null
                        }))
                    }))
                }
            },
            gaq: function(e) {
                var t = window._gaq;
                t && "function" == typeof t.push && t.push(["_trackEvent", "LiveChat", e.event, e.label, null, e.nonInteraction])
            },
            gtm: function(e) {
                var t = window.dataLayer;
                t && "function" == typeof t.push && t.push({
                    event: "LiveChat",
                    eventCategory: "LiveChat",
                    eventAction: e.event,
                    eventLabel: e.label,
                    nonInteraction: e.nonInteraction
                })
            },
            pageTracker: function(e) {
                var t = window.pageTracker;
                t && "function" == typeof t._trackEvent && t._trackEvent("LiveChat", e.event, e.label, null, e.nonInteraction)
            },
            urchinTracker: function(e) {
                var t = window.urchinTracker;
                t && "function" == typeof t && t(e.event)
            },
            gtag: function(e) {
                var t = window.gtag;
                t && "function" == typeof t && t("event", e.event, {
                    event_category: "LiveChat",
                    event_label: e.label,
                    non_interaction: e.nonInteraction
                })
            }
        },
        en = function(e) {
            var t = e.version,
                n = e.sendToAll;
            if (t && "function" == typeof Zt[t]) return n && "ga" === t ? "gaAll" : t;
            if ("object" == typeof window.pageTracker && "function" == typeof window.pageTracker._trackEvent) return "pageTracker";
            if ("function" == typeof window.urchinTracker) return "urchinTracker";
            if ("function" == typeof window.gtag) return "gtag";
            if (!e.omitGtm && "object" == typeof window.dataLayer && "function" == typeof window.dataLayer.push) return "gtm";
            if ("object" == typeof window._gaq) return "gaq";
            if (window.GoogleAnalyticsObject && "string" == typeof window.GoogleAnalyticsObject) return n ? "gaAll" : "ga";
            if ("function" == typeof window.ga) {
                var r = !1;
                if (window.ga((function(e) {
                        r = "object" == typeof e
                    })), r) return n ? "gaAll" : "ga"
            }
            return null
        },
        tn = {
            Chat: "LiveChat Chat started",
            "Automated greeting": "LiveChat Automated greeting displayed",
            "Ticket form": "LiveChat Ticket form displayed",
            "Ticket form filled in": "LiveChat Ticket form filled in",
            "Pre-chat survey": "LiveChat Pre-chat survey displayed",
            "Pre-chat survey filled in": "LiveChat Pre-chat survey filled in",
            "Post-chat survey": "LiveChat Post-chat survey displayed",
            "Post-chat survey filled in": "LiveChat Post-chat survey filled in"
        },
        nn = function() {
            return window.mixpanel && "function" == typeof window.mixpanel.track && "function" == typeof window.mixpanel.register
        },
        rn = {
            googleAnalytics: function(e) {
                var t = e.trackerName;
                return t ? Zt[t] : null
            },
            kissmetrics: function() {
                return null
            },
            mixpanel: function() {
                if (!nn()) return null;
                return function(e) {
                    var t = e.event,
                        n = e.eventData,
                        r = e.persistentData;
                    if (nn()) {
                        var i = window.mixpanel;
                        r && (i.register(r), !nn()) || t in tn && i.track(tn[t], n)
                    }
                }
            }
        },
        on = function(e, n) {
            var r = n.analytics,
                i = Object.keys(r).filter((function(e) {
                    return r[e].enabled
                })).map((function(e) {
                    var t = r[e],
                        n = rn[e];
                    try {
                        return n(t)
                    } catch (e) {
                        return ft(e), null
                    }
                })).filter(Boolean);
            if (0 !== i.length) {
                var o = function(n, r) {
                    var o = void 0 === r ? {} : r,
                        a = o.group,
                        u = void 0 === a ? qe(e.state, "group") : a,
                        c = o.nonInteraction,
                        s = void 0 !== c && c,
                        d = o.eventData,
                        l = void 0 === d ? {} : d,
                        f = o.persistentData,
                        p = void 0 === f ? null : f,
                        m = o.useDataAsLabel,
                        h = 0 !== u ? "Group ID: " + u : "(no group)",
                        v = void 0 !== m && m ? P(l).map((function(e) {
                            return e[0] + ": " + e[1]
                        })).join(", ") : h;
                    i.forEach((function(e) {
                        try {
                            e({
                                event: n,
                                nonInteraction: s,
                                label: v,
                                eventData: t({}, l, {
                                    group: h
                                }),
                                persistentData: p
                            })
                        } catch (e) {
                            ft(e)
                        }
                    }))
                };
                ce(At(e, (function(e) {
                    return qe(e, "readyState")
                })), re((function(e) {
                    return e === Mt
                })), be(1), le((function() {
                    return St(e)
                })), re(Boolean), ie((function() {
                    var t = je(e.state);
                    o("Chat", {
                        eventData: {
                            email: t.email,
                            name: t.name
                        },
                        persistentData: {
                            "performed chat": !0
                        }
                    })
                }))), e.on("add_event", (function(e) {
                    var t = e.event.properties;
                    t.invitation && t.receivedFirstTime && o("Automated greeting", {
                        nonInteraction: !0
                    })
                })), e.on("on_chat_booster_launched", (function(e) {
                    var t = e.title;
                    o("Chat Booster Launched: " + t, {
                        eventData: {
                            appId: e.id,
                            title: t
                        }
                    })
                })), e.on("on_prechat_survey_submitted", (function() {
                    o("Pre-chat survey filled in")
                })), e.on("on_postchat_survey_submitted", (function() {
                    o("Post-chat survey filled in")
                })), e.on("on_ticket_created", (function(e) {
                    o("Ticket form filled in", {
                        eventData: {
                            email: e.visitor_email
                        }
                    })
                })), e.on("rich_greeting_button_clicked", (function(e) {
                    o("Rich greeting button clicked", {
                        eventData: {
                            buttonText: e.button.text,
                            greetingId: e.event.properties.id
                        },
                        useDataAsLabel: !0
                    })
                })), ["prechat", "postchat", "ticket", "offline"].forEach((function(t) {
                    var n;
                    ce(ae(ue(e, "set_default_view"), ue(e, "set_current_view")), re((function(e) {
                        return e.viewInfo && "Chat" === e.viewInfo.view && e.viewInfo.default === t
                    })), Ce(ue(e, "unbind")), (n = function() {
                        var n, r, i, o, a = {
                                prechat: ["on_prechat_survey_submitted", "Pre-chat survey"],
                                postchat: ["on_postchat_survey_submitted", "Post-chat survey"],
                                ticket: ["on_ticket_created", "Ticket form"],
                                offline: ["on_ticket_created", "Ticket form"]
                            }[t],
                            u = a[0];
                        return ce(function() {
                            for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                            return function(e, n) {
                                if (0 === e) {
                                    var r = t.length;
                                    if (0 === r) return n(0, (function() {})), void n(2);
                                    var i, o = 0,
                                        a = function(e, t) {
                                            i(e, t)
                                        };
                                    ! function e() {
                                        o !== r ? t[o](0, (function(t, r) {
                                            0 === t ? (i = r, 0 === o ? n(0, a) : i(1)) : 2 === t && r ? n(2, r) : 2 === t ? (o++, e()) : n(t, r)
                                        })) : n(2)
                                    }()
                                }
                            }
                        }(me(a[1]), pe), (n = ce(At(e, (function(e) {
                            return xt(e, "maximized")
                        })), re(Boolean)), o = void 0 === (i = (void 0 === r ? {} : r).size) ? 100 : i, function(e) {
                            return function(t, r) {
                                var i = [];
                                if (0 === t) {
                                    var a, u, c = !1;
                                    e(0, (function(e, t) {
                                        if (0 === e && (a = t, n(0, (function(e, t) {
                                                if (0 === e)(u = t)(1);
                                                else if (1 === e) {
                                                    c = !0, u(2);
                                                    var n = i.slice();
                                                    i.length = 0, n.forEach((function(e) {
                                                        return r(1, e)
                                                    }))
                                                }
                                            }))), 1 === e) return c ? void r(1, t) : (i.push(t), i.length > o && i.shift(), void a(1));
                                        r(e, t)
                                    }))
                                }
                            }
                        }), Ce(ue(e, u)))
                    }, function(e) {
                        return function(t, r) {
                            if (0 === t) {
                                var i, o = null,
                                    a = function(e, t) {
                                        if (0 !== e) return 1 === e ? (r(1, t), void o(1)) : void(2 === e && (o = null));
                                        (o = t)(1)
                                    },
                                    u = function(e, t) {
                                        2 === e && null !== o && o(2, t), i(e, t)
                                    };
                                e(0, (function(e, t) {
                                    if (0 === e) return i = t, void r(0, u);
                                    if (1 !== e) {
                                        if (2 === e) {
                                            if (r(2, t), null === o) return;
                                            o(2, t)
                                        }
                                    } else {
                                        if (null !== o) return;
                                        n(t)(0, a)
                                    }
                                }))
                            }
                        }
                    }), ie((function(e) {
                        o(e)
                    })))
                }))
            }
        },
        an = /\.(\w+)$/i,
        un = new Audio,
        cn = {
            mp3: "audio/mpeg",
            ogg: "audio/ogg"
        },
        sn = function(e) {
            var t, n = (t = e.match(an)) ? t[1].toLowerCase() : "";
            return n in cn && "" !== un.canPlayType(cn[n])
        },
        dn = function(t) {
            return new e((function(e, n) {
                var r = new Audio(t);
                r.onloadeddata = function() {
                    e(r)
                }, r.onerror = n
            }))
        },
        ln = function(t) {
            var n, r = t.play();
            return (n = r) && "function" == typeof n.then ? r : e.resolve()
        },
        fn = function(e) {
            return "function" == typeof e.start && "function" == typeof e.stop
        },
        pn = function(e) {
            fn(e) ? e.start(0) : e.noteOn(0)
        },
        mn = function() {
            var t = new(window.AudioContext || window.webkitAudioContext),
                n = !0,
                r = [],
                i = function(n) {
                    return new e((function(e, r) {
                        t.decodeAudioData(n, e, r)
                    }))
                },
                o = function(n) {
                    return {
                        play: function() {
                            var r = t.createBufferSource();
                            return r.connect(t.destination), r.buffer = n, {
                                playback: new e((function(e, n) {
                                    if (r.onended = function() {
                                            return e()
                                        }, pn(r), "running" !== t.state) {
                                        var i = Error("Playback failed, AudioContext is in incorrect state '" + t.state + "'");
                                        i.name = "PlaybackError", n(i)
                                    }
                                })),
                                stop: function() {
                                    ! function(e) {
                                        fn(e) ? e.stop(0) : e.noteOff(0)
                                    }(r)
                                }
                            }
                        }
                    }
                };
            return {
                preload: function(t) {
                    return function(t) {
                        return new e((function(e, n) {
                            var r = new XMLHttpRequest;
                            r.onload = function() {
                                e(r.response)
                            }, r.onerror = n, r.open("GET", t), r.responseType = "arraybuffer", r.send()
                        }))
                    }(t).then(i).then(o)
                },
                playSound: function(e) {
                    var t = e.play();
                    return n && r.push(t), t.playback
                },
                unlock: function() {
                    return new e((function(e) {
                        document.addEventListener("click", (function i() {
                            var o, a;
                            document.removeEventListener("click", i, !0), n && (r.forEach((function(e) {
                                e.stop()
                            })), r = [], n = !1), t.resume(), o = t.createBuffer(1, 1, 22050), (a = t.createBufferSource()).buffer = o, a.connect(t.destination), pn(a), e()
                        }), !0)
                    }))
                }
            }
        },
        hn = function() {
            return "function" == typeof window.webkitAudioContext ? (t = mn(), {
                play: function(e) {
                    var r = n(e).then(t.playSound);
                    return r.catch(L), r
                },
                preload: n = E((function(e) {
                    var n = t.preload(e);
                    return n.catch(L), n
                })),
                unlock: function() {
                    return t.unlock()
                }
            }) : function() {
                var t = E(dn);
                return {
                    play: function(e) {
                        return t(e).then(ln)
                    },
                    preload: t,
                    unlock: function() {
                        return e.resolve()
                    }
                }
            }();
            var t, n
        },
        vn = function(e) {
            return Object.keys(e).reduce((function(t, n) {
                var r, i = d((function(e) {
                    return sn(e)
                }), a(r = e[n]) ? r : [r]);
                return t[n] = i, t
            }), {})
        },
        gn = "new_message",
        _n = function() {
            var e, t, n, r, i = ((e = {}).new_message = ["https://cdn.livechatinc.com/widget/static/media/new_message.34190d36.ogg", "https://cdn.livechatinc.com/widget/static/media/new_message.f3efb3d2.mp3"], t = e, n = hn(), r = vn(t), {
                play: function(e) {
                    n.play(r[e]).then(L, L)
                },
                preload: function(e) {
                    n.preload(r[e]).then(L, L)
                },
                unlock: function() {
                    return n.unlock()
                }
            });
            return i.unlock().then((function() {
                return e = 2e3, t = function(e) {
                        i.play(e)
                    }, n = 0,
                    function() {
                        var r = Date.now();
                        e > r - n || (n = Date.now(), t.apply(void 0, arguments))
                    };
                var e, t, n
            }))
        },
        wn = function(e, t) {
            return void 0 === t && (t = !1), t && e.__unsafeProperties.group.hasCustomMobileSettings
        },
        yn = function(e, t) {
            var n = e.__unsafeProperties.group;
            return wn(e, t) ? n.screenPositionOnMobile : n.screenPosition
        },
        bn = function(e, t) {
            var n = e.__unsafeProperties.group;
            return wn(e, t) ? {
                x: n.offsetXOnMobile,
                y: n.offsetYOnMobile
            } : {
                x: n.offsetX,
                y: n.offsetY
            }
        },
        kn = function(e) {
            return !!e && /native code/.test(e + "")
        },
        Cn = function() {
            return g(navigator.platform, ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"]) && g("Version/15", navigator.userAgent)
        },
        In = function() {
            return /mobile/gi.test(navigator.userAgent) && !("MacIntel" === navigator.platform && g("iPad", navigator.userAgent))
        },
        En = function() {
            return g("Chrome", navigator.userAgent)
        },
        Ln = function() {
            return /Firefox/.test(navigator.userAgent)
        },
        xn = function(e, t) {
            var n = function() {
                    t() || S(et, e)
                },
                r = function() {
                    t() || S(tt, e)
                };
            if ("onbeforeprint" in window) window.addEventListener("beforeprint", n), window.addEventListener("afterprint", r);
            else if (kn(window.matchMedia)) {
                var i = window.matchMedia("print");
                i && i.addListener((function(e) {
                    e.matches ? n() : r()
                }))
            }
        },
        An = function(e, n, r) {
            var i = n.__unsafeProperties.group.eyeCatcher;
            if (i.enabled && ! function(e, t) {
                    var n = e.__unsafeProperties.group;
                    return wn(e, t) ? n.disabledMinimizedOnMobile : n.disabledMinimized
                }(n)) {
                var o, a, u = function(e) {
                        var t = qe(e);
                        return t.eyeCatcher.hidden || "minimized" !== t.visibility.state || "online" !== t.availability || t.readyState === jt
                    },
                    c = function() {
                        o && (D(o), o = null), clearTimeout(a)
                    },
                    s = function() {
                        var o, a = q("div", rt),
                            s = yn(n);
                        S(((o = {
                            bottom: i.y + "px"
                        })[s] = i.x + "px", o), a);
                        var d, l = q("div", it);
                        15 > i.x && "right" === s && S(((d = {})[s] = 10 - i.x + "px", d), l);
                        l.innerHTML = "&times;";
                        var f = q("div", ot),
                            p = t({}, at, {
                                src: i.src,
                                alt: r.embedded_chat_now
                            });
                        i.srcset && (p.srcset = P(i.srcset).map((function(e) {
                            return e[1] + " " + e[0]
                        })).join(", "));
                        var m = q("img", p);
                        return f.appendChild(m), m.addEventListener("load", (function() {
                            S({
                                width: m.width + "px",
                                height: m.height + "px"
                            }, m)
                        })), m.addEventListener("error", c), a.appendChild(l), a.appendChild(f), xn(a, (function() {
                            return u(e.state)
                        })), document.body.appendChild(a), kn(window.matchMedia) && window.matchMedia("(hover: none)").matches ? S({
                            display: "block"
                        }, l) : (a.addEventListener("mouseover", (function() {
                            S({
                                display: "block"
                            }, l)
                        })), a.addEventListener("mouseout", (function() {
                            S({
                                display: "none"
                            }, l)
                        }))), a.addEventListener("click", (function(t) {
                            t.stopPropagation(), t.preventDefault(), e.maximize()
                        })), l.addEventListener("mouseover", (function() {
                            S({
                                color: "#444"
                            }, l)
                        })), l.addEventListener("mouseout", (function() {
                            S({
                                color: "#000"
                            }, l)
                        })), l.addEventListener("click", (function(t) {
                            t.preventDefault(), t.stopPropagation(), e.call("hideEyeCatcher")
                        })), a
                    };
                ce(At(e, u), ye({
                    next: function(e) {
                        e ? c() : a = setTimeout((function() {
                            o = s()
                        }), 430)
                    },
                    complete: c
                }))
            }
        },
        Tn = function(e) {
            e.innerHTML = ""
        },
        On = function(e, t) {
            var n = document.querySelectorAll(".livechat_button"),
                r = g(t.groupId, t.onlineGroupIds);
            [].forEach.call(n, (function(n) {
                var i = n.getAttribute("data-id"),
                    o = d((function(e) {
                        return e.id === i
                    }), t.buttons);
                if (o) {
                    var a = v("#", "0.href", n);
                    "image" === o.type ? function(e, t) {
                        var n = e.text,
                            r = e.url,
                            i = e.src;
                        Tn(t);
                        var o = q("a", {
                                href: r
                            }),
                            a = q("img", {
                                src: i,
                                alt: n,
                                title: n
                            });
                        o.appendChild(a), t.appendChild(o)
                    }({
                        url: a,
                        text: n.textContent,
                        src: r ? o.onlineValue : o.offlineValue
                    }, n) : function(e, t) {
                        var n = e.text,
                            r = e.url;
                        Tn(t);
                        var i = q("a", {
                            href: r
                        });
                        i.appendChild(document.createTextNode(n)), t.appendChild(i)
                    }({
                        url: a,
                        text: r ? o.onlineValue : o.offlineValue
                    }, n), n.children[0].addEventListener("click", (function(t) {
                        t.preventDefault(), e.maximize()
                    }))
                }
            }))
        },
        Pn = function(e) {
            return e.replace(/\?+$/, "")
        },
        Sn = function() {
            return {
                title: document.title,
                url: Pn(document.location + ""),
                referrer: document.referrer
            }
        },
        zn = function(e) {
            var t;
            ce((t = 2e3, function(e, n) {
                if (0 === e) {
                    var r = 0,
                        i = setInterval((function() {
                            n(1, r++)
                        }), t);
                    n(0, (function(e) {
                        2 === e && clearInterval(i)
                    }))
                }
            }), de(Sn), ne((function(e, t) {
                return e.url === t.url
            })), Ce(ue(e, "unbind")), ie((function(t) {
                e.call("storeMethod", ["setApplicationState", {
                    page: t
                }])
            })))
        };
    var jn = function(e) {
            ce(Dt(e, (function() {
                return ue(e, "add_event")
            })), re((function(e) {
                var t = e.event;
                return "custom" === t.type && t.properties.customId && -1 !== t.properties.customId.indexOf("cyber-finger-snapshot-request-")
            })), ie((function(t) {
                var n, r = t.event.properties.customId.replace("cyber-finger-snapshot-request-", "");
                try {
                    var i = (n = (void 0)[0], JSON.stringify(n));
                    e.call("storeMethod", ["emit", "send_snapshot", {
                        snapshot: i,
                        requestId: r,
                        screen: {
                            width: window.innerWidth,
                            height: window.innerHeight,
                            scrollY: window.pageYOffset,
                            scrollX: window.pageXOffset
                        }
                    }])
                } catch (e) {}
            })))
        },
        Mn = window.Wix,
        Nn = function() {
            return new e((function(e) {
                Mn.getSiteInfo((function(t) {
                    var n = t.url,
                        r = t.referrer || t.referer || "";
                    t.baseUrl && -1 === n.indexOf(t.baseUrl) && (n = t.baseUrl), e({
                        title: t.pageTitle,
                        referrer: r,
                        url: n
                    })
                }))
            }))
        },
        Dn = function(e) {
            var t, n, r, i;
            ce((t = function() {
                return !!document.hasFocus && document.hasFocus()
            }, n = function(e, n) {
                if (0 === e) {
                    var r = !1;
                    n(0, (function(e) {
                        2 === e && (r = !0)
                    })), n(1, t()), r || n(2)
                }
            }, r = de((function() {
                return !0
            }))(oe(window, "focus")), i = de((function() {
                return !1
            }))(oe(window, "blur")), ae(n, r, i)), Ce(ue(e, "unbind")), ie((function(t) {
                e.emit("focus", t)
            })))
        },
        qn = null,
        Fn = !1;

    function Hn() {
        return e = /^Mac/, null != window.navigator && e.test(window.navigator.platform);
        var e
    }

    function Bn(e) {
        Fn = !0,
            function(e) {
                return !(e.metaKey || !Hn() && e.altKey || e.ctrlKey)
            }(e) && (qn = "keyboard")
    }

    function Wn(e) {
        qn = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Fn = !0)
    }

    function Rn(e) {
        (function(e) {
            return !(0 !== e.mozInputSource || !e.isTrusted) || 0 === e.detail && !e.pointerType
        })(e) && (Fn = !0, qn = "virtual")
    }

    function Vn(e) {
        e.target !== window && e.target !== document && (Fn || (qn = "keyboard"), Fn = !1)
    }

    function Gn() {
        Fn = !1
    }
    var Un = (document.addEventListener("keydown", Bn, !0), document.addEventListener("keyup", Bn, !0), document.addEventListener("click", Rn, !0), window.addEventListener("focus", Vn, !0), window.addEventListener("blur", Gn, !1), "undefined" != typeof PointerEvent ? (document.addEventListener("pointerdown", Wn, !0), document.addEventListener("pointermove", Wn, !0), document.addEventListener("pointerup", Wn, !0)) : (document.addEventListener("mousedown", Wn, !0), document.addEventListener("mousemove", Wn, !0), document.addEventListener("mouseup", Wn, !0)), function() {
        document.removeEventListener("keydown", Bn, !0), document.removeEventListener("keyup", Bn, !0), document.removeEventListener("click", Rn, !0), window.removeEventListener("focus", Vn, !0), window.removeEventListener("blur", Gn, !1), "undefined" != typeof PointerEvent ? (document.removeEventListener("pointerdown", Wn, !0), document.removeEventListener("pointermove", Wn, !0), document.removeEventListener("pointerup", Wn, !0)) : (document.removeEventListener("mousedown", Wn, !0), document.removeEventListener("mousemove", Wn, !0), document.removeEventListener("mouseup", Wn, !0))
    });

    function Jn(e) {
        if ("Google Inc." === navigator.vendor && "Win32" === navigator.platform) {
            var t, n, r, i = e.frame,
                o = (t = 100, n = function() {
                    S(M(["width"], i), i), requestAnimationFrame((function() {
                        S({
                            width: ct.style.width
                        }, i)
                    }))
                }, function() {
                    clearTimeout(r);
                    for (var e = arguments.length, i = Array(e), o = 0; e > o; o++) i[o] = arguments[o];
                    r = setTimeout.apply(void 0, [n, t].concat(i))
                });
            document.addEventListener("scroll", o);
            e.on("unbind", (function t() {
                e.off("unbind", t), document.removeEventListener("scroll", o)
            }))
        }
    }
    var Yn = {
            position: Cn() ? "absolute" : "fixed",
            height: Cn() ? "calc(100vh - env(safe-area-inset-bottom))" : "100%",
            width: "100%",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            overflowY: "hidden"
        },
        Xn = function(e) {
            var t = document.querySelector('meta[name="viewport"]') || function() {
                    var e = q("meta", {
                        name: "viewport"
                    });
                    return document.getElementsByTagName("head")[0].appendChild(e), e
                }(),
                n = null,
                r = function() {
                    var e, r = t.content,
                        i = (e = document.body, Object.keys(Yn).reduce((function(t, n) {
                            return t[n] = e.style[n], t
                        }), {})),
                        o = document.documentElement.scrollTop;
                    return t.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0", S(Yn, document.body),
                        function() {
                            n = null, S(i, document.body), t.content = r, document.documentElement.scrollTop = o
                        }
                };
            xt(e.state, "maximized") && (n = r()), ce(At(e, (function(e) {
                return xt(e, "maximized")
            })), he, ye({
                next: function(e) {
                    e[1] ? n = r() : n()
                },
                complete: function() {
                    n && n()
                }
            }))
        },
        $n = In(),
        Kn = function(e, t) {
            if (e.iframeAddress) return e.iframeAddress;
            var n = "https://secure" + ((1520 === e.licenseId ? "-lc" : "") + ".livechatinc.com");
            return t.region && (n = n.replace("secure", "secure-" + t.region)), n + "/customer/action/open_chat"
        },
        Qn = function(e, t, n) {
            var r = !!e.customContainer;
            return {
                page: t,
                license: e.licenseId,
                region: n.region,
                group: n.groupId,
                requestedGroup: e.requestedGroupId,
                customer: e.customer,
                hidden: !(e.actingAsDirectLink || r) && function(e) {
                    var t = e.__unsafeProperties.group;
                    return $n && t.hasCustomMobileSettings ? t.initiallyHiddenOnMobile : t.initiallyHidden
                }(n),
                uniqueGroups: e.uniqueGroups,
                analytics: {
                    googleAnalytics: {
                        enabled: !!n.integrations.analytics,
                        trackerName: en(e.gaParams)
                    },
                    kissmetrics: {
                        enabled: !!n.integrations.kissmetrics
                    },
                    mixpanel: {
                        enabled: !!n.integrations.mixpanel
                    }
                },
                actingAsDirectLink: e.actingAsDirectLink,
                initMaximized: e.initMaximized,
                isInCustomContainer: r,
                clientLimitExceeded: n.clientLimitExceeded,
                integrationName: e.integrationName,
                iframeAddress: Kn(e, n)
            }
        },
        Zn = function() {
            var e = "lc_get_time_" + m();
            window.performance && "function" == typeof window.performance.mark && window.performance.mark(e);
            var t = performance.getEntriesByName(e)[0].startTime;
            return performance.clearMarks(e), t
        },
        er = function() {
            if ("undefined" == typeof PerformanceObserver) return null;
            var t = Zn(),
                n = [],
                r = new PerformanceObserver((function(e) {
                    n.push.apply(n, e.getEntries())
                }));
            r.observe({
                entryTypes: ["longtask"]
            });
            var i = function() {
                var e, r = b(n);
                return r ? (e = r, Zn() - e.startTime + e.duration) : Zn() - t
            };
            return {
                disconnect: function() {
                    return r.disconnect()
                },
                getLongTasks: function() {
                    return [].concat(n)
                },
                waitForIdle: function(t) {
                    return new e((function(e) {
                        ! function o() {
                            n.push.apply(n, r.takeRecords());
                            var a = i();
                            t > a ? setTimeout(o, Math.ceil(t - a)) : e()
                        }()
                    }))
                }
            }
        },
        tr = function(t) {
            void 0 === t && (t = "first-contentful-paint");
            var n, r = er();
            return r ? (n = t, new e((function(e) {
                var t = performance.getEntriesByName(n);
                if (_(t))
                    if ("undefined" != typeof PerformanceObserver) {
                        var r = setTimeout((function() {
                                i.disconnect(), e(null)
                            }), 6e4),
                            i = new PerformanceObserver((function(t) {
                                var o = d((function(e) {
                                    return e.name === n
                                }), t.getEntries());
                                o && (i.disconnect(), clearTimeout(r), e(o))
                            }));
                        i.observe({
                            entryTypes: ["paint"]
                        })
                    } else e(null);
                else e(t[0])
            }))).then((function(e) {
                return e ? r.waitForIdle(5e3).then((function() {
                    return r.disconnect(), r.getLongTasks()
                })) : null
            })) : e.resolve(null)
        },
        nr = function(e) {
            var t = performance.getEntriesByName(e);
            return 1 !== t.length ? null : t[0]
        },
        rr = function(e, t) {
            return e && t ? Math.abs(t.startTime - e.startTime) : null
        },
        ir = function(e) {
            if (!e) return null;
            var t = performance.getEntriesByType("navigation");
            return e.startTime - (_(t) ? performance.timing.domContentLoadedEventStart - performance.timing.navigationStart : t[0].domContentLoadedEventStart)
        },
        or = function() {
            if (!Math.floor(1e3 * Math.random())) {
                var e = tr().then((function(e) {
                    return e ? T(e.filter((function(e) {
                        return g(".livechatinc.com", e.attribution[0].containerSrc)
                    })).map((function(e) {
                        return e.duration
                    }))) : null
                }));
                return {
                    getLogs: function() {
                        return e.then((function(e) {
                            var t, n = 1 !== (t = performance.getEntriesByType("resource").filter((function(e) {
                                    return /livechatinc\.com\/(.+\/)?tracking.js/.test(e.name)
                                }))).length ? null : t[0],
                                r = nr("lc_bridge_init"),
                                i = nr("lc_bridge_ready");
                            return c((function(e) {
                                return e && Number(e.toFixed(2))
                            }), {
                                timeFromTrackingStart: rr(n, i),
                                timeFromBridgeInit: rr(r, i),
                                timeFromDomContentLoaded: ir(i),
                                totalBlockingTimeContributedToOurScript: e
                            })
                        }))
                    }
                }
            }
        };

    function ar(t, n) {
        return n = n || {}, new e((function(r, i) {
            var o = new XMLHttpRequest,
                a = [],
                u = [],
                c = {},
                s = function t() {
                    return {
                        ok: 2 == (o.status / 100 | 0),
                        statusText: o.statusText,
                        status: o.status,
                        url: o.responseURL,
                        text: function() {
                            return e.resolve(o.responseText)
                        },
                        json: function() {
                            return e.resolve(o.responseText).then(JSON.parse)
                        },
                        blob: function() {
                            return e.resolve(new Blob([o.response]))
                        },
                        clone: t,
                        headers: {
                            keys: function() {
                                return a
                            },
                            entries: function() {
                                return u
                            },
                            get: function(e) {
                                return c[e.toLowerCase()]
                            },
                            has: function(e) {
                                return e.toLowerCase() in c
                            }
                        }
                    }
                };
            for (var d in o.open(n.method || "get", t, !0), o.onload = function() {
                    o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(e, t, n) {
                        a.push(t = t.toLowerCase()), u.push([t, n]), c[t] = c[t] ? c[t] + "," + n : n
                    })), r(s())
                }, o.onerror = i, o.withCredentials = "include" == n.credentials, n.headers) o.setRequestHeader(d, n.headers[d]);
            o.send(n.body || null)
        }))
    }
    var ur = {};

    function cr(n, r) {
        var i = void 0 === r ? {} : r,
            o = i.query,
            a = void 0 === o ? {} : o,
            u = i.jsonpParam,
            c = void 0 === u ? "jsonp" : u,
            s = i.callbackName;
        return new e((function(e, r) {
            N().then((function(i) {
                var o, u = document.createElement("script"),
                    d = s || h(ur);
                ur[d] = !0;
                var l = "__" + d;
                window[l] = function(t) {
                    delete ur[d], delete window[l], D(u), e(t)
                }, u.src = n + "?" + F(t({}, a, ((o = {})[c] = l, o))), u.addEventListener("error", (function() {
                    setTimeout((function() {
                        return r(Error("JSONP request failed."))
                    }), 100)
                })), i.appendChild(u)
            }))
        }))
    }
    var sr, dr = "__test_storage_support__",
        lr = "@@test",
        fr = function(e) {
            void 0 === e && (e = "local");
            try {
                var t = "session" === e ? window.sessionStorage : window.localStorage;
                return t.setItem(dr, lr), t.getItem(dr) !== lr ? !1 : (t.removeItem(dr), !0)
            } catch (e) {
                return !1
            }
        },
        pr = function() {
            var e = Object.create(null);
            return {
                getItem: function(t) {
                    var n = e[t];
                    return "string" == typeof n ? n : null
                },
                setItem: function(t, n) {
                    e[t] = n
                },
                removeItem: function(t) {
                    delete e[t]
                },
                clear: function() {
                    e = Object.create(null)
                }
            }
        }(),
        mr = (fr() && window, Object.freeze({
            success: !0
        }), (sr = {}).CONNECTION_LOST = "Connection lost.", sr.MISDIRECTED_CONNECTION = "Connected to wrong region.", function(e) {
            return e.map((function(e) {
                switch (e.type) {
                    case "group_chooser":
                        return t({}, e, {
                            options: e.options.map((function(e) {
                                var n = e.group_id;
                                return t({}, Fe(e, ["group_id"]), {
                                    groupId: n
                                })
                            }))
                        });
                    case "rating":
                        var n = e.comment_label;
                        return t({}, Fe(e, ["comment_label"]), {
                            commentLabel: n
                        });
                    default:
                        return e
                }
            }))
        }),
        hr = function(e) {
            var n, r;
            return {
                id: e.id,
                fields: !("id" in e.fields[0]) ? (n = e.fields, r = n.map((function(e, n) {
                    return t({}, e, {
                        id: n + ""
                    })
                })), mr(r)) : mr(e.fields)
            }
        },
        vr = function(e) {
            var t = function(e) {
                return e.replace(K, "")
            }(e);
            return "https://" + (!g("cdn.livechatinc.com/cloud/?uri", t) && !g(".livechat-static.com/", t) ? "cdn.livechatinc.com/cloud/?" + F({
                uri: "https://" + t
            }) : t)
        },
        gr = /\.([a-z]{1,})$/i,
        _r = function(e) {
            var t = e.__priv,
                n = {
                    enabled: !0,
                    x: parseInt(t.group["embedded_chat.eye_grabber.x"]) + 15,
                    y: parseInt(t.group["embedded_chat.eye_grabber.y"]),
                    src: vr(t.group["embedded_chat.eye_grabber.path"])
                };
            if (-1 !== n.src.indexOf("/default/eyeCatchers/")) {
                var r = n.src.match(gr)[1];
                n.srcset = {
                    "1x": n.src,
                    "2x": n.src.replace(RegExp("\\." + r, "i"), "-2x." + r)
                }
            }
            return n
        },
        wr = function(e, t) {
            return "https://api" + ((r = (n = t).region) ? "-" + r : "") + ((1520 === n.licenseId ? ".staging" : "") + ".livechatinc.com/v3.3/customer/action/") + e;
            var n, r
        },
        yr = function e(n) {
            return cr(wr("get_dynamic_configuration", n), {
                query: t({
                    license_id: n.licenseId,
                    url: Q(n.url, ["cw_configurator"])
                }, "number" == typeof n.groupId && {
                    group_id: n.groupId
                }, n.channelType && {
                    channel_type: n.channelType
                }, n.skipCodeInstallationTracking && {
                    test: 1
                })
            }).then((function(r) {
                if (r.error) switch (r.error.type) {
                    case "misdirected_request":
                        return e(t({}, n, {
                            region: r.error.data.region
                        }));
                    case "license_expired":
                        if ("direct_link" === n.channelType) {
                            var i = F({
                                utm_source: "expired_chat_link",
                                utm_medium: "referral",
                                utm_campaign: "expired"
                            });
                            window.location.replace("https://www.livechat.com/powered-by-livechat/?" + i)
                        }
                        var o = Error(r.error.message);
                        throw o.code = r.error.type.toUpperCase(), o;
                    default:
                        var a = Error(r.error.message);
                        throw a.code = r.error.type.toUpperCase(), a
                }
                if (!r.domain_allowed) {
                    var u = Error("Current domain is not added to the allowlist.");
                    throw u.code = "DOMAIN_NOT_ALLOWED", u
                }
                return {
                    groupId: r.group_id,
                    clientLimitExceeded: r.client_limit_exceeded,
                    configVersion: r.config_version,
                    localizationVersion: r.localization_version,
                    onlineGroupIds: r.online_group_ids || [],
                    region: n.region || null
                }
            }))
        },
        br = function(e) {
            var t, n, r, i = e.allowVideoConferencing,
                o = e.allowClipboardWrite,
                a = e.allowDisplayCapture,
                u = [];
            if (e.allowAutoplay && !Ln() && u.push("autoplay;"), a && u.push("display-capture *;"), i) {
                var c = {
                    "display-capture *;": !En() || (r = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./), (r ? parseInt(r[2], 10) : 0) >= 94),
                    "picture-in-picture *;": "PictureInPictureEvent" in window,
                    "fullscreen *;": "function" == typeof Element.prototype.requestFullscreen
                };
                u = [].concat(u, ["microphone *;", "camera *;"], Object.keys((t = Boolean, Object.keys(n = c).reduce((function(e, r) {
                    return t(n[r]) && (e[r] = n[r]), e
                }), {}))))
            }
            return o && !Ln() && u.push("clipboard-write *;"), u.join(" ")
        },
        kr = "data-lc-focus",
        Cr = "data-lc-event",
        Ir = "data-lc-prop";

    function Er(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Lr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Lr(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0;
                return function() {
                    return e.length > r ? {
                        done: !1,
                        value: e[r++]
                    } : {
                        done: !0
                    }
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        return (n = e[Symbol.iterator]()).next.bind(n)
    }

    function Lr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); t > n; n++) r[n] = e[n];
        return r
    }
    var xr = L;
    var Ar = In(),
        Tr = function(e) {
            return Ar ? {
                width: "100%",
                height: "100%"
            } : "modern" === e.__unsafeProperties.group.theme.name ? {
                width: "400px",
                height: "465px"
            } : {
                width: "352px",
                height: "652px"
            }
        },
        Or = function(e, t) {
            return Object.keys(e.properties.license).some((function(n) {
                return e.properties.license[n][t]
            }))
        },
        Pr = function(e, t, n) {
            var r, i, o, a = bn(t, Ar);
            return !e && n ? ((i = {})[yn(t, Ar)] = "0", i.bottom = a.y + "px", i.maxHeight = "100%", i) : Ar && e ? ((o = {})[yn(t, Ar)] = "0", o.bottom = "0", o.maxHeight = "100%", o) : ((r = {})[yn(t, Ar)] = a.x + "px", r.bottom = a.y + "px", r.maxHeight = "calc(100% - " + a.y + "px)", r)
        },
        Sr = function(e) {
            return e.style.setProperty("transition", "none", "important")
        },
        zr = function(e, n) {
            var r, i = q("div", nt),
                o = bn(e, Ar),
                a = Pr(n, e),
                u = Tr(e);
            return S(t(((r = {
                width: u.width,
                height: u.height
            })[yn(e, Ar)] = o.x + "px", r), a), i), i
        },
        jr = function(n, r, i, o) {
            var a, u, c = F(t({
                    license_id: r.license,
                    group: r.group,
                    embedded: 1,
                    widget_version: 3,
                    unique_groups: Number(r.uniqueGroups)
                }, !!o && {
                    custom_identity_provider: 1
                })),
                s = {
                    kill: function() {
                        this._emit("widget_resize", {
                            size: {
                                width: "0px",
                                height: "0px"
                            }
                        }), this.unbind(), n.custom || D(n.element)
                    },
                    applyHiddenStyles: function() {
                        S(et, n.element)
                    },
                    isFocused: function() {
                        return !!document.hasFocus && document.hasFocus()
                    },
                    resize: function(e) {
                        var r = void 0 === e ? {} : e,
                            o = {
                                width: r.width,
                                height: r.height
                            },
                            a = Pr(r.maximized, i, r.ignoreHorizontalOffset);
                        S(t({}, o, a), n.element);
                        var u = M(["width", "height"], n.element);
                        this._emit("widget_resize", {
                            size: o,
                            computedSize: u
                        })
                    },
                    show: function() {
                        S(tt, n.element)
                    },
                    hide: function() {
                        this.call("hide")
                    },
                    minimize: function() {
                        this.call("minimize")
                    },
                    maximize: function() {
                        var e = this;
                        if (!!window.event && window.event.isTrusted && g(window.event.type, ["click", "pointerdown", "pointerup", "mousedown", "mouseup", "touchstart", "touchend"])) {
                            var t = document.activeElement;
                            t.addEventListener("blur", (function n() {
                                t.removeEventListener("blur", n), e.emit("host_focus_shifted")
                            })), this.call("maximize", {
                                modality: qn
                            })
                        } else this.call("maximize")
                    },
                    unbind: function() {
                        var e = this;
                        this.hide(), this.destroy(), this._emit("unbind"), this.off(), this.call = L, Object.keys(s).forEach((function(t) {
                            e[t] = L
                        })), Un()
                    },
                    callIdentityProvider: function(e) {
                        return null == o ? void 0 : o[e]()
                    },
                    applyFramesStyle: function(e) {
                        var t = e.minimizedFrameStyle,
                            n = e.maximizedFrameStyle,
                            r = document.getElementById(Qe),
                            i = document.getElementById(Ze);
                        r && S(n, r), i && S(t, i)
                    },
                    renderCrossFrameMarkup: function(e) {
                        var t = e[0],
                            r = e[1],
                            i = document.getElementById(Ze);
                        i || (i = document.createElement("iframe"), z(st, i), n.element.appendChild(i)),
                            function(e, t, n, r) {
                                var i = n.contentDocument;
                                if (null === i) throw Error("Parameter `frame` needs to be inserted into any document before rendering");
                                En() ? (i.head.innerHTML = e, i.body.innerHTML = t) : (i.open(), i.write("\n\t\t\t<!DOCTYPE html>\n\t\t\t<html>\n\t\t\t\t<head>" + e + "</head>\n\t\t\t\t<body>" + t + "</body>\n\t\t\t</html>\n\t\t"), i.close());
                                for (var o, a = i.documentElement, u = Er(O(a.querySelectorAll("[" + Cr + "]"))); !(o = u()).done;) {
                                    var c = o.value,
                                        s = c.getAttribute(Cr);
                                    if ("string" == typeof s)
                                        for (var d, l = function() {
                                                var e = d.value.split(":"),
                                                    t = e[0],
                                                    n = e[1];
                                                if (!t || !n) return "continue";
                                                c.removeAttribute(Cr), c.addEventListener(t, (function(e) {
                                                    var t, i, o, a, u, c, s, d, l, f;
                                                    e.stopPropagation();
                                                    var p = {
                                                        type: e.type,
                                                        bubbles: !0,
                                                        isTrusted: e.isTrusted,
                                                        cancelBubble: e.cancelBubble,
                                                        cancelable: e.cancelable,
                                                        composed: e.composed,
                                                        defaultPrevented: e.defaultPrevented,
                                                        eventPhase: e.eventPhase,
                                                        timeStamp: e.timeStamp,
                                                        currentTarget: {
                                                            value: null == (t = e.currentTarget) ? void 0 : t.value,
                                                            checked: null == (i = e.currentTarget) ? void 0 : i.checked,
                                                            disabled: null == (o = e.currentTarget) ? void 0 : o.disabled,
                                                            draggable: null == (a = e.currentTarget) ? void 0 : a.draggable,
                                                            hidden: null == (u = e.currentTarget) ? void 0 : u.hidden
                                                        },
                                                        target: {
                                                            value: null == (c = e.target) ? void 0 : c.value,
                                                            checked: null == (s = e.target) ? void 0 : s.checked,
                                                            disabled: null == (d = e.target) ? void 0 : d.disabled,
                                                            draggable: null == (l = e.target) ? void 0 : l.draggable,
                                                            hidden: null == (f = e.target) ? void 0 : f.hidden
                                                        }
                                                    };
                                                    r.call("crossFrameEvent", n, JSON.stringify(p))
                                                }))
                                            }, f = Er(s.split(";")); !(d = f()).done;) l()
                                }
                                var p = a.querySelector("[" + kr + "]");
                                p && (p.removeAttribute(kr), p.focus(), "INPUT" === p.nodeName) && p.setSelectionRange(p.value.length, p.value.length);
                                for (var m, h = [], v = function() {
                                        var e = m.value,
                                            t = e.getAttribute(Ir);
                                        if ("string" != typeof t) return "continue";
                                        e.removeAttribute(Ir);
                                        var n = t.split(":"),
                                            r = n[0],
                                            i = n[1];
                                        h.push((function(t) {
                                            var n, o, a = null == (n = t.views) || null == (o = n.minimized) ? void 0 : o[i.replace("!", "")];
                                            "string" == typeof a && (a = a.trim()), "disabled" === r && (a = i.includes("!") ? !a : !!a), "boolean" == typeof a ? e.toggleAttribute(r, a) : a ? e.setAttribute(r, a) : e.removeAttribute(r)
                                        }))
                                    }, g = Er(O(a.querySelectorAll("[" + Ir + "]"))); !(m = g()).done;) v();
                                h.forEach((function(e) {
                                    return e(r.state)
                                })), r.off("state_diff", xr), r.on("state_diff", xr = function(e) {
                                    var t;
                                    (null == e || null == (t = e.views) ? void 0 : t.minimized) && h.forEach((function(t) {
                                        return t(e)
                                    }))
                                })
                            }(t, r, i, this)
                    },
                    getMinimizedDimensions: function() {
                        var e = document.getElementById(Ze).contentDocument.querySelector('[role="main"]');
                        return M(["width", "height"], e)
                    }
                },
                l = r.iframeAddress + "?" + c,
                f = new MutationObserver((function(e) {
                    return e.forEach((function(e) {
                        var t = d((function(e) {
                            return "IFRAME" === e.tagName && e.getAttribute("src") === l
                        }), e.addedNodes);
                        t && function(e, t) {
                            z(ct, t), e.custom || S(ut, t)
                        }(n, t)
                    }))
                }));
            return f.observe(n.element, {
                childList: !0
            }), new Ye({
                container: n.element,
                url: l,
                methods: s,
                iframeAllowedProperties: br({
                    allowAutoplay: !0,
                    allowVideoConferencing: Or(i, "microphone"),
                    allowClipboardWrite: Or(i, "clipboard_write"),
                    allowDisplayCapture: 1520 === r.license || !1
                }),
                model: t({}, r, {
                    fullWidth: null == (a = n.size) ? void 0 : a.width,
                    fullHeight: null == (u = n.size) ? void 0 : u.height,
                    serverConfig: i,
                    parentWidth: window.innerWidth,
                    parentHeight: window.innerHeight
                })
            }).then((function(t) {
                return e.all([t, Ke(t)])
            })).then((function(e) {
                var t = e[0];
                return f.disconnect(), t
            }))
        },
        Mr = function(e, t, n, r, i) {
            e.call("storeMethod", ["setLocalization", r]), n.custom || xn(n.element, (function() {
                    return xt(e.state, "hidden")
                })), Ar || "wix" === t.integrationName || An(e, i, r), Sr(e.frame),
                function(e, t, n) {
                    Rt(e, t, n), "LiveChatWidget" in window && $t(e, t, n)
                }(e, t, i), on(e, t), ce(Dt(e, (function() {
                    return function(e) {
                        var t = !1;
                        e.on("iframe_sound_unlocked", (function() {
                            return t = !0
                        })), _n().then((function(n) {
                            t || (e.emit("bridge_sound_unlocked"), e.on("add_event", (function(t) {
                                var r = t.event;
                                qe(e.state, "muted") || function(e, t) {
                                    return "system" !== e.author && !e.properties.welcomeMessage && e.author !== t && "custom" !== e.type
                                }(r, Ne(e.state)) && n(gn)
                            })))
                        }))
                    }(e), pe
                })), ie(L)), "wix" === t.integrationName ? function(e) {
                    Mn.addEventListener(Mn.Events.PAGE_NAVIGATION, (function() {
                        Nn().then((function(t) {
                            return e.call("storeMethod", ["setApplicationState", {
                                page: t
                            }])
                        }))
                    }))
                }(e) : zn(e), Dn(e), t.actingAsDirectLink || n.custom || function(e) {
                    ce(At(e, (function(e) {
                        return xt(e, "hidden")
                    })), we(1), ie((function(t) {
                        t ? e.applyHiddenStyles() : e.show()
                    })))
                }(e), Jn(e),
                function(e) {
                    var t = function() {
                        setTimeout((function() {
                            document.addEventListener("touchstart", L), setTimeout((function() {
                                document.removeEventListener("touchstart", L)
                            }), 500)
                        }), 500)
                    };
                    window.addEventListener("orientationchange", t), e.on("unbind", (function n() {
                        e.off("unbind", n), window.removeEventListener("orientationchange", t)
                    }))
                }(e), On(e, i), Ar && Xn(e), jn(e), e.on("rich_greeting_button_clicked", (function(e) {
                    var t = e.button;
                    "url" === t.type && Vt.navigate(t.value)
                })), e.on("open_in_new_tab", (function(e) {
                    Vt.navigate(e)
                }))
        },
        Nr = function(n) {
            return yr(n).then((function(r) {
                var i;
                return e.all([r, (i = {
                    licenseId: n.licenseId,
                    groupId: r.groupId,
                    region: r.region,
                    version: r.configVersion
                }, cr(wr("get_configuration", i), {
                    callbackName: "lc_static_config",
                    query: t({
                        license_id: i.licenseId,
                        version: i.version
                    }, "number" == typeof i.groupId && {
                        group_id: i.groupId
                    })
                }).then((function(e) {
                    var n = e.buttons,
                        r = e.allowed_domains,
                        i = e.prechat_form,
                        o = e.ticket_form,
                        a = e.__priv;
                    return t({}, Fe(e, ["buttons", "allowed_domains", "prechat_form", "ticket_form", "__priv"]), i && {
                        prechatForm: hr(i)
                    }, o && {
                        ticketForm: hr(o)
                    }, {
                        buttons: n.map((function(e) {
                            return "image" === e.type ? {
                                id: e.id,
                                type: e.type,
                                onlineValue: vr(e.online_value),
                                offlineValue: vr(e.offline_value)
                            } : {
                                id: e.id,
                                type: e.type,
                                onlineValue: e.online_value,
                                offlineValue: e.offline_value
                            }
                        }))
                    }, r && {
                        allowedDomains: r
                    }, {
                        __unsafeProperties: t({}, a.s && {
                            s: !0
                        }, {
                            group: {
                                chatBoosters: a.group.chat_boosters,
                                disabledMinimized: "1" === a.group["chat_window.disable_minimized"],
                                disabledMinimizedOnMobile: "1" === a.group["chat_window.mobile_disable_minimized"],
                                disabledOnMobile: "1" === a.group["chat_window.hide_on_mobile"],
                                eyeCatcher: "1" === a.group["embedded_chat.display_eye_catcher"] ? _r(e) : {
                                    enabled: !1
                                },
                                hasAgentAvatarsEnabled: "1" === a.group["chat_window.display_avatar"],
                                hasCustomMobileSettings: "1" === a.group["chat_window.custom_mobile_settings"],
                                hasHiddenTrademark: "1" === a.group["chat_window.hide_trademark"],
                                hasSoundsEnabled: "0" === a.group["chat_window.disable_sounds"],
                                initiallyHidden: "1" === a.group["chat_window.hide_on_init"] || "1" === a.group["chat_window.disable_minimized"],
                                initiallyHiddenOnMobile: "1" === a.group["chat_window.mobile_hide_on_init"] || "1" === a.group["chat_window.mobile_disable_minimized"],
                                hideOnInit: "1" === a.group["chat_window.hide_on_init"],
                                language: a.group.language,
                                linksUnfurlingEnabled: "1" === a.group.links_unfurling,
                                logo: "1" === a.group["chat_window.display_logo"] ? {
                                    enabled: !0,
                                    src: a.group["chat_window.logo_path"]
                                } : {
                                    enabled: !1
                                },
                                minimizedType: a.group["chat_window.theme.minimized"],
                                minimizedTypeOnMobile: a.group["chat_window.mobile_minimized_theme"],
                                offlineMessagesEnabled: "0" === a.group.tickets_enabled,
                                offsetX: parseInt(a.group["chat_window.offset_x"]),
                                offsetXOnMobile: parseInt(a.group["chat_window.mobile_offset_x"]),
                                offsetY: parseInt(a.group["chat_window.offset_y"]),
                                offsetYOnMobile: parseInt(a.group["chat_window.mobile_offset_y"]),
                                prechatFormAfterGreetingEnabled: "1" === a.group.pre_chat_survey_after_greeting,
                                ratingEnabled: "1" === a.group["rate_me.enabled"],
                                showUATrademark: "ua" === a.group.plusone_url,
                                screenPosition: a.group["chat_window.screen_position"],
                                screenPositionOnMobile: a.group["chat_window.mobile_screen_position"],
                                transcriptButtonEnabled: "1" === a.group["chat_window.display_transcript_button"],
                                theme: {
                                    name: a.group["chat_window.new_theme.name"],
                                    variant: a.group["chat_window.new_theme.variant"] || "light",
                                    customJson: a.group["chat_window.new_theme.custom_json"],
                                    agentbarBackgroundColor: a.group["chat_window.new_theme.agentbar_background_color"],
                                    agentbarText: a.group["chat_window.new_theme.agentbar_text"],
                                    agentMessageColorBackground: a.group["chat_window.new_theme.agent_message_color_background"],
                                    agentMessageColorText: a.group["chat_window.new_theme.agent_message_color_text"],
                                    backgroundColor: a.group["chat_window.new_theme.background_color"],
                                    ctaColor: a.group["chat_window.new_theme.cta_color"],
                                    minimizedColorBackground: a.group["chat_window.new_theme.minimized_color_background"],
                                    minimizedColorIcon: a.group["chat_window.new_theme.minimized_color_icon"],
                                    minimizedColorText: a.group["chat_window.new_theme.minimized_color_text"],
                                    systemMessageColor: a.group["chat_window.new_theme.system_message_color"],
                                    titlebarBackgroundColor: a.group["chat_window.new_theme.titlebar_background_color"],
                                    titlebarText: a.group["chat_window.new_theme.titlebar_text"],
                                    visitorMessageColorBackground: a.group["chat_window.new_theme.visitor_message_color_background"],
                                    visitorMessageColorText: a.group["chat_window.new_theme.visitor_message_color_text"]
                                }
                            },
                            license: {
                                continuousChatWidgetEnabled: "1" === a.license.continuous_chat_widget_enabled,
                                creditCardMaskingEnabled: "1" === a.license.mask_credit_cards,
                                customerHistoryEnabled: "1" === a.license.customer_history_enabled,
                                fileSharingEnabled: "1" === a.license["attachments.enable_for_visitors"],
                                inboundForwardingToHelpdeskEnabled: "1" === a.license["helpdesk.inbound_forwarding"],
                                nonProfit: "1" === a.license.non_profit
                            }
                        })
                    })
                })))]).then((function(e) {
                    return t({}, e[0], e[1])
                }))
            }))
        };
    var Dr, qr, Fr, Hr = function(e) {
            return function(e) {
                return "number" == typeof e && e >= 0
            }(n = "string" == typeof(t = void 0 !== e.group ? e.group : e.skill) ? parseInt(t, 10) : t) ? n : null;
            var t, n
        },
        Br = function(e, t) {
            var n = {
                name: null,
                email: null,
                properties: {}
            };
            if ("object" == typeof e && e) {
                var r = e.name,
                    i = e.email;
                "string" == typeof r && (n.name = r), "string" == typeof i && (n.email = i)
            }
            return Array.isArray(t) && (n.properties = Ct(t)), n
        };
    if (!window.__lc_inited)
        if (window.__lc_inited = !0, "msCrypto" in window) console.error("[LiveChat] We no longer support Internet Explorer");
        else {
            var Wr = (Fr = window.__lc, {
                licenseId: parseInt(Fr.license),
                requestedGroupId: Hr(Fr),
                uniqueGroups: !1 === Fr.chat_between_groups,
                customer: Br(Fr.visitor, Fr.params),
                skipCodeInstallationTracking: 1 === Fr.test,
                integrationName: Fr.wix ? "wix" : "string" == typeof Fr.integration_name ? Fr.integration_name : null,
                actingAsDirectLink: !0 === Fr.direct_link,
                initMaximized: !0 === Fr.init_maximized,
                customContainer: Fr.custom_container || null,
                gaParams: {
                    version: "string" == typeof Fr.ga_version ? Fr.ga_version : null,
                    omitGtm: !!Fr.ga_omit_gtm,
                    sendToAll: !!Fr.ga_send_to_all_trackers
                },
                customIdentityProviderInitializer: "function" == typeof Fr.custom_identity_provider ? Fr.custom_identity_provider : null,
                iframeAddress: null
            });
            !Wr.actingAsDirectLink && (Dr = "cw_configurator", qr = window.location.search, J(qr)[Dr] || fr("session") && window.sessionStorage.getItem("cw_configurator")) ? N().then((function(e) {
                var t = document.createElement("iframe");
                S({
                    display: "none"
                }, t), e.appendChild(t), Ln() && (t.contentDocument.open(), t.contentDocument.close());
                var n = t.contentDocument.head;
                ["https://cdn.livechatinc.com/widget/static/js/runtime-configurator.ce929c90.js", "https://cdn.livechatinc.com/widget/static/js/0.35c175e9.chunk.js", "https://cdn.livechatinc.com/widget/static/js/2.9fd62bdf.chunk.js", "https://cdn.livechatinc.com/widget/static/js/configurator.3ac92b97.chunk.js"].forEach((function(e) {
                    ! function(e, t) {
                        var n = document.createElement("script");
                        z({
                            src: t,
                            charset: "utf-8"
                        }, n), e.appendChild(n)
                    }(n, e)
                }))
            })) : 3 === [1].reduce((function(e, t) {
                return e + t
            }), 2) ? function(n) {
                window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bridge_init");
                var r = !1;
                window.LC_API = window.LC_API || {}, window.LC_API.is_loaded = function() {
                    return r
                };
                var i = n.requestedGroupId,
                    o = n.integrationName,
                    u = n.customIdentityProviderInitializer,
                    c = t({
                        licenseId: n.licenseId,
                        skipCodeInstallationTracking: n.skipCodeInstallationTracking,
                        channelType: n.actingAsDirectLink ? "direct_link" : "code",
                        url: Pn(document.location + "")
                    }, "number" == typeof i && {
                        groupId: i
                    });
                e.all([Nr(c), "wix" === o ? Nn() : Sn(), N()]).then((function(i) {
                    var o = i[0],
                        c = i[1],
                        s = i[2];
                    if (mt(o.allowedDomains, window.top === window ? window.location.hostname : document.referrer)) {
                        if (!Ar || !o.__unsafeProperties.group.disabledOnMobile || n.actingAsDirectLink) {
                            var d = or(),
                                l = function(e) {
                                    if (null === e) return null;
                                    var t = e();
                                    return "object" != typeof t || "function" != typeof t.getToken || "function" != typeof t.getFreshToken || "function" != typeof t.hasToken || "function" != typeof t.invalidate ? (console.error("custom_identity_provider() does not return proper handlers. ({getFreshToken: () => Promise<Token>, getToken: () => Promise<Token>, hasToken: () => Promise<boolean>, invalidate: () => Promise<void> })"), null) : t
                                }(u),
                                f = Qn(n, c, o),
                                p = function(e, t) {
                                    return e.customContainer ? {
                                        custom: !0,
                                        element: e.customContainer
                                    } : {
                                        custom: !1,
                                        element: zr(t, e.actingAsDirectLink),
                                        size: Tr(t)
                                    }
                                }(n, o),
                                m = {},
                                h = !1,
                                v = pt("on_before_load"),
                                g = pt("on_after_load");
                            v((function(e) {
                                e.disable_sounds = L, e.mobile_is_detected = function() {
                                    return Ar
                                }, e.chat_running = function() {
                                    return !1
                                }, e.visitor_engaged = function() {
                                    return !1
                                }, e.agents_are_available = function() {
                                    return -1 !== o.onlineGroupIds.indexOf(o.groupId)
                                }, e.get_window_type = function() {
                                    return "embedded"
                                }, e.hide_chat_window = Ht(f) ? L : function() {
                                    return h = !0
                                }, e.set_visitor_name = function(e) {
                                    return m.name = Lt(e)
                                }, e.set_visitor_email = function(e) {
                                    return m.email = Lt(e)
                                }, e.set_custom_variables = function(e) {
                                    return m.properties = e ? Ct(e) : {}
                                }, e.update_custom_variables = function(e) {
                                    e && (m.properties = t({}, m.properties, Ct(e)))
                                }
                            }));
                            var _, w = t({}, f, {
                                customer: t({}, f.customer, m),
                                hidden: f.hidden || h
                            });
                            p.custom || s.appendChild(p.element), window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bind_child"), e.all([jr(p, w, o, l), (_ = {
                                licenseId: w.license,
                                groupId: w.group,
                                region: w.region,
                                version: o.localizationVersion,
                                language: o.__unsafeProperties.group.language
                            }, cr(wr("get_localization", _), {
                                callbackName: "lc_localization",
                                query: t({
                                    license_id: _.licenseId,
                                    version: _.version,
                                    language: _.language
                                }, "number" == typeof _.groupId && {
                                    group_id: _.groupId
                                })
                            }).then((function(e) {
                                return k((function(e) {
                                    return e.toLowerCase()
                                }), e)
                            })))]).then((function(e) {
                                var t = e[0],
                                    n = e[1];
                                return p.custom || Sr(p.element), Mr(t, w, p, n, o), ce(At(t, (function(e) {
                                    return qe(e, "readyState")
                                })), re((function(e) {
                                    return e === Mt
                                })), be(1), de((function() {
                                    return t
                                })), Ie)
                            })).then((function(e) {
                                window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bridge_ready"), d && d.getLogs().then((function(t) {
                                    var n;
                                    e.call("logInfo", "loading_time_measured", a(n = t) ? n.filter((function(e) {
                                        return null != e
                                    })) : Object.keys(n).reduce((function(e, t) {
                                        var r = n[t];
                                        return null != r && (e[t] = r), e
                                    }), {}))
                                })), g((function() {
                                    return r = !0
                                })), Math.floor(10 * Math.random()) || setTimeout((function() {
                                    (function(e) {
                                        return ar(wr("get_localization", e) + "?" + F(t({
                                            license_id: e.licenseId,
                                            version: e.version,
                                            language: e.language
                                        }, "number" == typeof e.groupId && {
                                            group_id: e.groupId
                                        }))).then((function(e) {
                                            return e.json()
                                        })).then((function(e) {
                                            return k((function(e) {
                                                return e.toLowerCase()
                                            }), e)
                                        }))
                                    })({
                                        licenseId: f.license,
                                        groupId: f.group,
                                        region: f.region,
                                        version: o.localizationVersion,
                                        language: o.__unsafeProperties.group.language
                                    }).catch((function() {
                                        e.call("logInfo", "potential_csp_problem", {
                                            url: window.location + ""
                                        })
                                    }))
                                }), 1e4)
                            }))
                        }
                    } else console.log("[LiveChat] Current domain is not added to the allowed domains. LiveChat has been disabled.")
                })).catch((function(e) {
                    switch (null == e ? void 0 : e.code) {
                        case "ACCESS_NOT_RESOLVED":
                        case "CUSTOMER_BANNED":
                            return void console.warn("[LiveChat] " + e.message);
                        default:
                            throw e
                    }
                }))
            }(Wr) : console.error("[LiveChat] This site has overriden Array.prototype.reduce (for example by using Prototype library) to a version that is not compatible with Web standards. LiveChat code couldn't be initialized because of this.")
        }
}();