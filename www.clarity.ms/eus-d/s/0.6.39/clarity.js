/* clarity-js v0.6.39: https://github.com/microsoft/clarity (License: MIT) */ ! function() {
    "use strict";
    var t = Object.freeze({
            __proto__: null,
            get start() {
                return On
            },
            get stop() {
                return Mn
            },
            get parse() {
                return Nn
            },
            get getId() {
                return _n
            },
            get add() {
                return xn
            },
            get update() {
                return Tn
            },
            get sameorigin() {
                return Dn
            },
            get iframe() {
                return In
            },
            get getNode() {
                return Ln
            },
            get getValue() {
                return An
            },
            get get() {
                return Rn
            },
            get lookup() {
                return Hn
            },
            get has() {
                return Yn
            },
            get updates() {
                return Wn
            }
        }),
        e = Object.freeze({
            __proto__: null,
            get track() {
                return ha
            },
            get start() {
                return ba
            },
            get queue() {
                return ya
            },
            get stop() {
                return wa
            }
        }),
        n = Object.freeze({
            __proto__: null,
            get data() {
                return ja
            },
            get keys() {
                return za
            },
            get fragments() {
                return Ra
            },
            get start() {
                return Ha
            },
            get clone() {
                return Ya
            },
            get compute() {
                return Wa
            },
            get reset() {
                return Xa
            },
            get update() {
                return qa
            },
            get stop() {
                return Pa
            }
        }),
        a = Object.freeze({
            __proto__: null,
            get data() {
                return Ca
            },
            get start() {
                return Ja
            },
            get check() {
                return Ga
            },
            get trigger() {
                return Za
            },
            get compute() {
                return Ka
            },
            get stop() {
                return Qa
            }
        }),
        r = Object.freeze({
            __proto__: null,
            get data() {
                return $a
            },
            get updates() {
                return tr
            },
            get start() {
                return er
            },
            get stop() {
                return nr
            },
            get log() {
                return ar
            },
            get compute() {
                return rr
            },
            get reset() {
                return ir
            }
        }),
        i = Object.freeze({
            __proto__: null,
            get data() {
                return or
            },
            get callbacks() {
                return ur
            },
            get start() {
                return sr
            },
            get stop() {
                return lr
            },
            get metadata() {
                return dr
            },
            get id() {
                return fr
            },
            get consent() {
                return hr
            },
            get clear() {
                return pr
            },
            get save() {
                return vr
            }
        }),
        o = Object.freeze({
            __proto__: null,
            get data() {
                return Mr
            },
            get start() {
                return Sr
            },
            get stop() {
                return Nr
            },
            get envelope() {
                return _r
            }
        }),
        u = {
            projectId: null,
            delay: 1e3,
            lean: !1,
            track: !0,
            content: !0,
            mask: [],
            unmask: [],
            regions: [],
            extract: [],
            cookies: [],
            fraud: [],
            report: null,
            upload: null,
            fallback: null,
            upgrade: null
        };

    function c(t) {
        return window.Zone && "__symbol__" in window.Zone ? window.Zone.__symbol__(t) : t
    }
    var s = 0;

    function l(t) {
        return void 0 === t && (t = null), t = t || performance.now(), Math.max(Math.round(t - s), 0)
    }
    var d = "0.6.39";

    function f(t) {
        for (var e = 5381, n = e, a = 0; a < t.length; a += 2) {
            if (e = (e << 5) + e ^ t.charCodeAt(a), a + 1 < t.length) n = (n << 5) + n ^ t.charCodeAt(a + 1)
        }
        return Math.abs(e + 11579 * n).toString(36)
    }
    var h = null,
        p = null,
        v = !1;

    function g() {
        v && (h = {
            time: l(),
            event: 4,
            data: {
                visible: p.visible,
                docWidth: p.docWidth,
                docHeight: p.docHeight,
                screenWidth: p.screenWidth,
                screenHeight: p.screenHeight,
                scrollX: p.scrollX,
                scrollY: p.scrollY,
                pointerX: p.pointerX,
                pointerY: p.pointerY,
                activityTime: p.activityTime
            }
        }), p = p || {
            visible: 1,
            docWidth: 0,
            docHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollX: 0,
            scrollY: 0,
            pointerX: 0,
            pointerY: 0,
            activityTime: 0
        }
    }

    function m(t, e, n) {
        switch (t) {
            case 8:
                p.docWidth = e, p.docHeight = n;
                break;
            case 11:
                p.screenWidth = e, p.screenHeight = n;
                break;
            case 10:
                p.scrollX = e, p.scrollY = n;
                break;
            default:
                p.pointerX = e, p.pointerY = n
        }
        v = !0
    }

    function b(t) {
        p.activityTime = t
    }

    function y(t, e) {
        p.visible = "visible" === e ? 1 : 0, p.visible || b(t), v = !0
    }

    function w() {
        v && Fa(4)
    }
    var k = Object.freeze({
            __proto__: null,
            get state() {
                return h
            },
            start: function() {
                v = !1, g()
            },
            reset: g,
            track: m,
            activity: b,
            visibility: y,
            compute: w,
            stop: function() {
                g()
            }
        }),
        E = null;

    function O(t, e) {
        Br() && t && e && "string" == typeof t && "string" == typeof e && t.length < 255 && e.length < 255 && (E = {
            key: t,
            value: e
        }, Fa(24))
    }
    var M, S = null,
        N = null;

    function _(t) {
        t in S || (S[t] = 0), t in N || (N[t] = 0), S[t]++, N[t]++
    }

    function x(t, e) {
        null !== e && (t in S || (S[t] = 0), t in N || (N[t] = 0), S[t] += e, N[t] += e)
    }

    function T(t, e) {
        null !== e && !1 === isNaN(e) && (t in S || (S[t] = 0), (e > S[t] || 0 === S[t]) && (N[t] = e, S[t] = e))
    }

    function D(t, e, n) {
        return window.setTimeout(Dr(t), e, n)
    }

    function I(t) {
        return window.clearTimeout(t)
    }
    var C = 0,
        j = 0,
        z = null;

    function L() {
        z && I(z), z = D(A, j), C = l()
    }

    function A() {
        var t = l();
        M = {
            gap: t - C
        }, Fa(25), M.gap < 3e5 ? z = D(A, j) : qr && (O("clarity", "suspend"), ui(), ["mousemove", "touchstart"].forEach((function(t) {
            return Cr(document, t, Fr)
        })), ["resize", "scroll", "pageshow"].forEach((function(t) {
            return Cr(window, t, Fr)
        })))
    }
    var R = Object.freeze({
            __proto__: null,
            get data() {
                return M
            },
            start: function() {
                j = 6e4, C = 0
            },
            reset: L,
            stop: function() {
                I(z), C = 0, j = 0
            }
        }),
        H = null;

    function Y(t, e) {
        if (t in H) {
            var n = H[t],
                a = n[n.length - 1];
            e - a[0] > 100 ? H[t].push([e, 0]) : a[1] = e - a[0]
        } else H[t] = [
            [e, 0]
        ]
    }

    function W() {
        Fa(36)
    }

    function X() {
        H = {}
    }
    var q = Object.freeze({
            __proto__: null,
            get data() {
                return H
            },
            start: function() {
                H = {}
            },
            stop: function() {
                H = {}
            },
            track: Y,
            compute: W,
            reset: X
        }),
        P = null;

    function U(t) {
        Br() && u.lean && (u.lean = !1, P = {
            key: t
        }, vr(), u.upgrade && u.upgrade(t), Fa(3))
    }
    var B = Object.freeze({
            __proto__: null,
            get data() {
                return P
            },
            start: function() {
                !u.lean && u.upgrade && u.upgrade("Config"), P = null
            },
            upgrade: U,
            stop: function() {
                P = null
            }
        }),
        V = null;

    function F(t, e) {
        G(t, "string" == typeof e ? [e] : e)
    }

    function J(t, e, n) {
        void 0 === e && (e = null), void 0 === n && (n = null), G("userId", [t]), G("sessionId", [e]), G("pageId", [n])
    }

    function G(t, e) {
        if (Br() && t && e && "string" == typeof t && t.length < 255) {
            for (var n = (t in V ? V[t] : []), a = 0; a < e.length; a++) "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
            V[t] = n
        }
    }

    function Z() {
        Fa(34)
    }

    function K() {
        V = {}
    }

    function Q(t, e, n, a) {
        return new(n || (n = Promise))((function(r, i) {
            function o(t) {
                try {
                    c(a.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(a.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(o, u)
            }
            c((a = a.apply(t, e || [])).next())
        }))
    }

    function $(t, e) {
        var n, a, r, i, o = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (n = 1, a && (r = 2 & i[0] ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, i[1])).done) return r;
                        switch (a = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return o.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < r[1]) {
                                    o.label = r[1], r = i;
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2], o.ops.push(i);
                                    break
                                }
                                r[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = e.call(t, o)
                    } catch (t) {
                        i = [6, t], a = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var tt = "CompressionStream" in window;

    function et(t) {
        return Q(this, void 0, void 0, (function() {
            var e, n;
            return $(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 3, , 4]), tt ? (e = new ReadableStream({
                            start: function(e) {
                                return Q(this, void 0, void 0, (function() {
                                    return $(this, (function(n) {
                                        return e.enqueue(t), e.close(), [2]
                                    }))
                                }))
                            }
                        }).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")), n = Uint8Array.bind, [4, nt(e)]) : [3, 2];
                    case 1:
                        return [2, new(n.apply(Uint8Array, [void 0, a.sent()]))];
                    case 2:
                        return [3, 4];
                    case 3:
                        return a.sent(), [3, 4];
                    case 4:
                        return [2, null]
                }
            }))
        }))
    }

    function nt(t) {
        return Q(this, void 0, void 0, (function() {
            var e, n, a, r, i;
            return $(this, (function(o) {
                switch (o.label) {
                    case 0:
                        e = t.getReader(), n = [], a = !1, r = [], o.label = 1;
                    case 1:
                        return a ? [3, 3] : [4, e.read()];
                    case 2:
                        return i = o.sent(), a = i.done, r = i.value, a ? [2, n] : (n.push.apply(n, r), [3, 1]);
                    case 3:
                        return [2, n]
                }
            }))
        }))
    }
    var at = [k, r, Object.freeze({
        __proto__: null,
        get data() {
            return V
        },
        start: function() {
            K()
        },
        set: F,
        identify: J,
        compute: Z,
        reset: K,
        stop: function() {
            K()
        }
    }), a, q, i, o, e, R, B, n];

    function rt() {
        S = {}, N = {}, _(5), at.forEach((function(t) {
            return Dr(t.start)()
        }))
    }

    function it() {
        at.slice().reverse().forEach((function(t) {
            return Dr(t.stop)()
        })), S = {}, N = {}
    }

    function ot() {
        Z(), w(), rr(), Fa(0), W(), Ka(), Wa()
    }
    var ut = /\S/gi,
        ct = !0,
        st = null,
        lt = null,
        dt = null;

    function ft(t, e, n, a) {
        if (void 0 === a && (a = !1), t) switch (n) {
            case 0:
                return t;
            case 1:
                switch (e) {
                    case "*T":
                    case "value":
                    case "placeholder":
                    case "click":
                    case "input":
                        return function(t) {
                            var e = -1,
                                n = 0,
                                a = !1,
                                r = !1,
                                i = !1,
                                o = null;
                            if (ct && null === st) try {
                                st = new RegExp("\\p{N}", "gu"), lt = new RegExp("\\p{L}", "gu"), dt = new RegExp("\\p{Sc}", "gu")
                            } catch (t) {
                                ct = !1
                            }
                            for (var u = 0; u < t.length; u++) {
                                var c = t.charCodeAt(u);
                                if (a = a || c >= 48 && c <= 57, r = r || 64 === c, i = 9 === c || 10 === c || 13 === c || 32 === c, 0 === u || u === t.length - 1 || i) {
                                    if (a || r) {
                                        null === o && (o = t.split(""));
                                        var s = t.substring(e + 1, i ? u : u + 1);
                                        s = ct && null !== dt ? s.match(dt) ? s : s.replace(lt, "•").replace(st, "•") : ht(s), o.splice(e + 1 - n, s.length, s), n += s.length - 1
                                    }
                                    i && (a = !1, r = !1, e = u)
                                }
                            }
                            return o ? o.join("") : t
                        }(t)
                }
                return t;
            case 2:
            case 3:
                switch (e) {
                    case "*T":
                        return a ? function(t) {
                            var e = t.trim();
                            if (e.length > 0) {
                                var n = e[0],
                                    a = t.indexOf(n),
                                    r = t.substr(0, a),
                                    i = t.substr(a + e.length);
                                return "".concat(r).concat(e.length.toString(36)).concat(i)
                            }
                            return t
                        }(t) : ht(t);
                    case "src":
                    case "srcset":
                    case "title":
                    case "alt":
                        return 3 === n ? "" : t;
                    case "value":
                    case "click":
                    case "input":
                        return function(t) {
                            for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++) n += a > 0 && a % 5 == 0 ? " " : "•";
                            return n
                        }(t);
                    case "placeholder":
                        return ht(t)
                }
        }
        return t
    }

    function ht(t) {
        return t.replace(ut, "•")
    }
    var pt, vt = [];

    function gt(t, e, n) {
        null !== t && n && n.length >= 5 && (pt = {
            id: t,
            target: e,
            hash: f(n)
        }, vt.indexOf(pt.hash) < 0 && (vt.push(pt.hash), xa(41)))
    }
    var mt = ["DIV", "TR", "P", "LI", "UL", "A", "BUTTON"];

    function bt(t, e) {
        void 0 === e && (e = !1);
        var n = t.attributes,
            a = t.prefix ? t.prefix[e ? 1 : 0] : null,
            r = e || n && !("class" in n) || mt.indexOf(t.tag) >= 0 ? ":nth-of-type(".concat(t.position, ")") : "";
        switch (t.tag) {
            case "STYLE":
            case "TITLE":
            case "LINK":
            case "META":
            case "*T":
            case "*D":
                return "";
            case "HTML":
                return "HTML";
            default:
                if (null === a) return "";
                a = "".concat(a, ">"), t.tag = 0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag;
                var i = "".concat(a).concat(t.tag).concat(r),
                    o = "class" in n && n.class.length > 0 ? n.class.trim().split(/\s+/) : null;
                if (e) {
                    var u = "id" in n && n.id.length > 0 ? n.id : null;
                    i = (o = "BODY" !== t.tag && o ? o.filter((function(t) {
                        return !yt(t)
                    })) : []).length > 0 ? "".concat(a).concat(t.tag, ".").concat(o.join(".")).concat(r) : i, i = u && !1 === yt(u) ? "".concat(function(t) {
                        var e = t.lastIndexOf("*S"),
                            n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                            a = Math.max(e, n);
                        if (a < 0) return "";
                        var r = t.indexOf(">", a) + 1;
                        return t.substr(0, r)
                    }(a), "#").concat(u) : i
                } else i = o ? "".concat(a).concat(t.tag, ".").concat(o.join(".")).concat(r) : i;
                return i
        }
    }

    function yt(t) {
        for (var e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            if (n >= 48 && n <= 57) return !0
        }
        return !1
    }
    var wt = {},
        kt = [],
        Et = null,
        Ot = null,
        Mt = null;

    function St() {
        wt = {}, kt = [], Et = null, Ot = null
    }

    function Nt(t, e) {
        return void 0 === e && (e = 0), Q(this, void 0, void 0, (function() {
            var n, a, r;
            return $(this, (function(i) {
                for (n = 0, a = kt; n < a.length; n++)
                    if (a[n].task === t) return [2];
                return r = new Promise((function(n) {
                    kt[1 === e ? "unshift" : "push"]({
                        task: t,
                        resolve: n,
                        id: fr()
                    })
                })), null === Et && null === Ot && _t(), [2, r]
            }))
        }))
    }

    function _t() {
        var t = kt.shift();
        t && (Et = t, t.task().then((function() {
            t.id === fr() && (t.resolve(), Et = null, _t())
        })).catch((function(e) {
            t.id === fr() && (e && Ia(0, 1, e.name, e.message, e.stack), Et = null, _t())
        })))
    }

    function xt(t) {
        var e = Ct(t);
        return e in wt ? performance.now() - wt[e].start > wt[e].yield ? 0 : 1 : 2
    }

    function Tt(t) {
        wt[Ct(t)] = {
            start: performance.now(),
            calls: 0,
            yield: 30
        }
    }

    function Dt(t) {
        var e = performance.now(),
            n = Ct(t),
            a = e - wt[n].start;
        x(t.cost, a), _(5), wt[n].calls > 0 && x(4, a)
    }

    function It(t) {
        return Q(this, void 0, void 0, (function() {
            var e, n;
            return $(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return (e = Ct(t)) in wt ? (Dt(t), n = wt[e], [4, jt()]) : [3, 2];
                    case 1:
                        n.yield = a.sent().timeRemaining(),
                            function(t) {
                                var e = Ct(t);
                                if (wt && wt[e]) {
                                    var n = wt[e].calls,
                                        a = wt[e].yield;
                                    Tt(t), wt[e].calls = n + 1, wt[e].yield = a
                                }
                            }(t), a.label = 2;
                    case 2:
                        return [2, e in wt ? 1 : 2]
                }
            }))
        }))
    }

    function Ct(t) {
        return "".concat(t.id, ".").concat(t.cost)
    }

    function jt() {
        return Q(this, void 0, void 0, (function() {
            return $(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return Ot ? [4, Ot] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, new Promise((function(t) {
                            Lt(t, {
                                timeout: 5e3
                            })
                        }))]
                }
            }))
        }))
    }
    var zt, Lt = window.requestIdleCallback || function(t, e) {
        var n = performance.now(),
            a = new MessageChannel,
            r = a.port1,
            i = a.port2;
        r.onmessage = function(a) {
            var r = performance.now(),
                o = r - n,
                u = r - a.data;
            if (u > 30 && o < e.timeout) requestAnimationFrame((function() {
                i.postMessage(r)
            }));
            else {
                var c = o > e.timeout;
                t({
                    didTimeout: c,
                    timeRemaining: function() {
                        return c ? 30 : Math.max(0, 30 - u)
                    }
                })
            }
        }, requestAnimationFrame((function() {
            i.postMessage(performance.now())
        }))
    };

    function At(t, e, n) {
        return void 0 === e && (e = null), void 0 === n && (n = null), Q(this, void 0, void 0, (function() {
            var a, r, i, o, c, s, d, f, h, p, v, g, y, w, k, E, O, M, S, N, _, x;
            return $(this, (function(T) {
                switch (T.label) {
                    case 0:
                        switch (a = n || l(), r = [a, t], t) {
                            case 8:
                                return [3, 1];
                            case 7:
                                return [3, 2];
                            case 5:
                            case 6:
                                return [3, 3]
                        }
                        return [3, 10];
                    case 1:
                        return i = zt, r.push(i.width), r.push(i.height), m(t, i.width, i.height), ya(r), [3, 10];
                    case 2:
                        for (o = 0, c = Pn; o < c.length; o++) s = c[o], (r = [s.time, 7]).push(s.data.id), r.push(s.data.interaction), r.push(s.data.visibility), r.push(s.data.name), ya(r);
                        return ea(), [3, 10];
                    case 3:
                        if (2 === xt(e)) return [3, 10];
                        if (!((d = Wn()).length > 0)) return [3, 9];
                        f = 0, h = d, T.label = 4;
                    case 4:
                        return f < h.length ? (p = h[f], 0 !== (v = xt(e)) ? [3, 6] : [4, It(e)]) : [3, 8];
                    case 5:
                        v = T.sent(), T.label = 6;
                    case 6:
                        if (2 === v) return [3, 8];
                        for (g = p.data, y = p.metadata.active, w = p.metadata.suspend, k = p.metadata.privacy, E = function(t) {
                                var e = t.metadata.privacy;
                                return "*T" === t.data.tag && !(0 === e || 1 === e)
                            }(p), O = 0, M = y ? ["tag", "attributes", "value"] : ["tag"]; O < M.length; O++)
                            if (g[S = M[O]]) switch (S) {
                                case "tag":
                                    N = Rt(p), _ = E ? -1 : 1, r.push(p.id * _), p.parent && y && r.push(p.parent), p.previous && y && r.push(p.previous), r.push(w ? "*M" : g[S]), N && 2 === N.length && r.push("".concat("#").concat(Ht(N[0]), ".").concat(Ht(N[1])));
                                    break;
                                case "attributes":
                                    for (x in g[S]) void 0 !== g[S][x] && r.push(Yt(x, g[S][x], k));
                                    break;
                                case "value":
                                    gt(p.metadata.fraud, p.id, g[S]), r.push(ft(g[S], g.tag, k, E))
                            }
                        T.label = 7;
                    case 7:
                        return f++, [3, 4];
                    case 8:
                        6 === t && b(a), ya(function(t) {
                            for (var e = [], n = {}, a = 0, r = null, i = 0; i < t.length; i++)
                                if ("string" == typeof t[i]) {
                                    var o = t[i],
                                        u = n[o] || -1;
                                    u >= 0 ? r ? r.push(u) : (r = [u], e.push(r), a++) : (r = null, e.push(o), n[o] = a++)
                                } else r = null, e.push(t[i]), a++;
                            return e
                        }(r), !u.lean), T.label = 9;
                    case 9:
                        return [3, 10];
                    case 10:
                        return [2]
                }
            }))
        }))
    }

    function Rt(t) {
        if (null !== t.metadata.size && 0 === t.metadata.size.length) {
            var e = Ln(t.id);
            if (e) return [Math.floor(100 * e.offsetWidth), Math.floor(100 * e.offsetHeight)]
        }
        return t.metadata.size
    }

    function Ht(t) {
        return t.toString(36)
    }

    function Yt(t, e, n) {
        return "".concat(t, "=").concat(ft(e, t, n))
    }

    function Wt() {
        zt = null
    }

    function Xt() {
        var t = document.body,
            e = document.documentElement,
            n = t ? t.clientWidth : null,
            a = t ? t.scrollWidth : null,
            r = t ? t.offsetWidth : null,
            i = e ? e.clientWidth : null,
            o = e ? e.scrollWidth : null,
            u = e ? e.offsetWidth : null,
            c = Math.max(n, a, r, i, o, u),
            s = t ? t.clientHeight : null,
            l = t ? t.scrollHeight : null,
            d = t ? t.offsetHeight : null,
            f = e ? e.clientHeight : null,
            h = e ? e.scrollHeight : null,
            p = e ? e.offsetHeight : null,
            v = Math.max(s, l, d, f, h, p);
        null !== zt && c === zt.width && v === zt.height || null === c || null === v || (zt = {
            width: c,
            height: v
        }, At(8))
    }

    function qt(t) {
        var e = {
            x: 0,
            y: 0
        };
        if (t && t.offsetParent)
            do {
                var n = t.offsetParent,
                    a = null === n ? In(t.ownerDocument) : null;
                e.x += t.offsetLeft, e.y += t.offsetTop, t = a || n
            } while (t);
        return e
    }
    var Pt = ["input", "textarea", "radio", "button", "canvas"],
        Ut = [];

    function Bt(t) {
        Cr(t, "click", Vt.bind(this, 9, t), !0)
    }

    function Vt(t, e, n) {
        var a = In(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = qt(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        var c = na(n),
            s = function(t) {
                for (; t && t !== document;) {
                    if (t.nodeType === Node.ELEMENT_NODE) {
                        var e = t;
                        if ("A" === e.tagName) return e
                    }
                    t = t.parentNode
                }
                return null
            }(c),
            d = function(t) {
                var e = null,
                    n = document.documentElement;
                if ("function" == typeof t.getBoundingClientRect) {
                    var a = t.getBoundingClientRect();
                    a && a.width > 0 && a.height > 0 && (e = {
                        x: Math.floor(a.left + ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)),
                        y: Math.floor(a.top + ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)),
                        w: Math.floor(a.width),
                        h: Math.floor(a.height)
                    })
                }
                return e
            }(c);
        0 === n.detail && d && (i = Math.round(d.x + d.w / 2), o = Math.round(d.y + d.h / 2));
        var f = d ? Math.max(Math.floor((i - d.x) / d.w * 32767), 0) : 0,
            h = d ? Math.max(Math.floor((o - d.y) / d.h * 32767), 0) : 0;
        null !== i && null !== o && (Ut.push({
            time: l(),
            event: t,
            data: {
                target: c,
                x: i,
                y: o,
                eX: f,
                eY: h,
                button: n.button,
                reaction: Jt(c),
                context: Gt(s),
                text: Ft(c),
                link: s ? s.href : null,
                hash: null,
                trust: n.isTrusted ? 1 : 0
            }
        }), Nt(ra.bind(this, t)))
    }

    function Ft(t) {
        var e = null;
        if (t) {
            var n = t.textContent || t.value || t.alt;
            n && (e = n.trim().replace(/\s+/g, " ").substr(0, 25))
        }
        return e
    }

    function Jt(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t.tagName.toLowerCase();
            if (Pt.indexOf(e) >= 0) return 0
        }
        return 1
    }

    function Gt(t) {
        if (t && t.hasAttribute("target")) switch (t.getAttribute("target")) {
            case "_blank":
                return 1;
            case "_parent":
                return 2;
            case "_top":
                return 3
        }
        return 0
    }

    function Zt() {
        Ut = []
    }
    var Kt = [];

    function Qt(t, e) {
        Kt.push({
            time: l(),
            event: 38,
            data: {
                target: na(e),
                action: t
            }
        }), Nt(ra.bind(this, 38))
    }

    function $t() {
        Kt = []
    }
    var te = null,
        ee = [];

    function ne(t) {
        var e = na(t),
            n = Rn(e);
        if (e && e.type && n) {
            var a = e.value;
            switch (e.type) {
                case "radio":
                case "checkbox":
                    a = e.checked ? "true" : "false"
            }
            var r = {
                target: e,
                value: a
            };
            ee.length > 0 && ee[ee.length - 1].data.target === r.target && ee.pop(), ee.push({
                time: l(),
                event: 27,
                data: r
            }), I(te), te = D(ae, 500, 27)
        }
    }

    function ae(t) {
        Nt(ra.bind(this, t))
    }

    function re() {
        ee = []
    }
    var ie, oe = [],
        ue = null;

    function ce(t, e, n) {
        var a = In(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = qt(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        null !== i && null !== o && le({
            time: l(),
            event: t,
            data: {
                target: na(n),
                x: i,
                y: o
            }
        })
    }

    function se(t, e, n) {
        var a = In(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = n.changedTouches,
            o = l();
        if (i)
            for (var u = 0; u < i.length; u++) {
                var c = i[u],
                    s = "clientX" in c ? Math.round(c.clientX + r.scrollLeft) : null,
                    d = "clientY" in c ? Math.round(c.clientY + r.scrollTop) : null;
                s = s && a ? s + Math.round(a.offsetLeft) : s, d = d && a ? d + Math.round(a.offsetTop) : d, null !== s && null !== d && le({
                    time: o,
                    event: t,
                    data: {
                        target: na(n),
                        x: s,
                        y: d
                    }
                })
            }
    }

    function le(t) {
        switch (t.event) {
            case 12:
            case 15:
            case 19:
                var e = oe.length,
                    n = e > 1 ? oe[e - 2] : null;
                n && function(t, e) {
                    var n = t.data.x - e.data.x,
                        a = t.data.y - e.data.y,
                        r = Math.sqrt(n * n + a * a),
                        i = e.time - t.time,
                        o = e.data.target === t.data.target;
                    return e.event === t.event && o && r < 20 && i < 25
                }(n, t) && oe.pop(), oe.push(t), I(ue), ue = D(de, 500, t.event);
                break;
            default:
                oe.push(t), de(t.event)
        }
    }

    function de(t) {
        Nt(ra.bind(this, t))
    }

    function fe() {
        oe = []
    }

    function he() {
        var t = document.documentElement;
        ie = {
            width: t && "clientWidth" in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
            height: t && "clientHeight" in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
        }, ra(11)
    }

    function pe() {
        ie = null
    }
    var ve = [],
        ge = null;

    function me(t) {
        void 0 === t && (t = null);
        var e = window,
            n = document.documentElement,
            a = t ? na(t) : n;
        if (a && a.nodeType === Node.DOCUMENT_NODE) {
            var r = In(a);
            e = r ? r.contentWindow : e, a = n = a.documentElement
        }
        var i = a === n && "pageXOffset" in e ? Math.round(e.pageXOffset) : Math.round(a.scrollLeft),
            o = a === n && "pageYOffset" in e ? Math.round(e.pageYOffset) : Math.round(a.scrollTop),
            u = {
                time: l(),
                event: 10,
                data: {
                    target: a,
                    x: i,
                    y: o
                }
            };
        if ((null !== t || 0 !== i || 0 !== o) && null !== i && null !== o) {
            var c = ve.length,
                s = c > 1 ? ve[c - 2] : null;
            s && function(t, e) {
                var n = t.data.x - e.data.x,
                    a = t.data.y - e.data.y;
                return n * n + a * a < 400 && e.time - t.time < 25
            }(s, u) && ve.pop(), ve.push(u), I(ge), ge = D(be, 500, 10)
        }
    }

    function be(t) {
        Nt(ra.bind(this, t))
    }
    var ye = null,
        we = null,
        ke = null;

    function Ee(t) {
        var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        if (null !== e && !(null === e.anchorNode && null === e.focusNode || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)) {
            var n = ye.start ? ye.start : null;
            null !== we && null !== ye.start && n !== e.anchorNode && (I(ke), Oe(21)), ye = {
                start: e.anchorNode,
                startOffset: e.anchorOffset,
                end: e.focusNode,
                endOffset: e.focusOffset
            }, we = e, I(ke), ke = D(Oe, 500, 21)
        }
    }

    function Oe(t) {
        Nt(ra.bind(this, t))
    }

    function Me() {
        we = null, ye = {
            start: 0,
            startOffset: 0,
            end: 0,
            endOffset: 0
        }
    }
    var Se, Ne, _e = [];

    function xe(t) {
        _e.push({
            time: l(),
            event: 39,
            data: {
                target: na(t)
            }
        }), Nt(ra.bind(this, 39))
    }

    function Te() {
        _e = []
    }

    function De(t) {
        Se = {
            name: t.type
        }, ra(26), ui()
    }

    function Ie() {
        Se = null
    }

    function Ce() {
        Ne = {
            visible: "visibilityState" in document ? document.visibilityState : "default"
        }, ra(28)
    }

    function je() {
        Ne = null
    }

    function ze(t) {
        ! function(t) {
            var e = In(t);
            Cr(e ? e.contentWindow : t === document ? window : t, "scroll", me, !0)
        }(t), t.nodeType === Node.DOCUMENT_NODE && (Bt(t), function(t) {
            Cr(t, "cut", Qt.bind(this, 0), !0), Cr(t, "copy", Qt.bind(this, 1), !0), Cr(t, "paste", Qt.bind(this, 2), !0)
        }(t), function(t) {
            Cr(t, "mousedown", ce.bind(this, 13, t), !0), Cr(t, "mouseup", ce.bind(this, 14, t), !0), Cr(t, "mousemove", ce.bind(this, 12, t), !0), Cr(t, "wheel", ce.bind(this, 15, t), !0), Cr(t, "dblclick", ce.bind(this, 16, t), !0), Cr(t, "touchstart", se.bind(this, 17, t), !0), Cr(t, "touchend", se.bind(this, 18, t), !0), Cr(t, "touchmove", se.bind(this, 19, t), !0), Cr(t, "touchcancel", se.bind(this, 20, t), !0)
        }(t), function(t) {
            Cr(t, "input", ne, !0)
        }(t), function(t) {
            Cr(t, "selectstart", Ee.bind(this, t), !0), Cr(t, "selectionchange", Ee.bind(this, t), !0)
        }(t), function(t) {
            Cr(t, "submit", xe, !0)
        }(t))
    }
    var Le = Object.freeze({
            __proto__: null,
            start: function() {
                ia = [], ua(), Zt(), $t(), fe(), re(), Cr(window, "resize", he), he(), Cr(document, "visibilitychange", Ce), Ce(), ve = [], me(), Me(), Te(), Cr(window, "pagehide", De)
            },
            stop: function() {
                ia = [], ua(), Zt(), $t(), I(ue), oe.length > 0 && de(oe[oe.length - 1].event), I(te), re(), pe(), je(), I(ge), ve = [], Me(), I(ke), Te(), Ie()
            },
            observe: ze
        }),
        Ae = /[^0-9\.]/g;

    function Re(t) {
        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
            var a = n[e],
                r = t[a];
            if ("@type" === a && "string" == typeof r) switch (r = (r = r.toLowerCase()).indexOf("article") >= 0 || r.indexOf("posting") >= 0 ? "article" : r) {
                case "article":
                case "recipe":
                    ar(5, t[a]), ar(8, t.creator), ar(18, t.headline);
                    break;
                case "product":
                    ar(5, t[a]), ar(10, t.name), ar(12, t.sku), t.brand && ar(6, t.brand.name);
                    break;
                case "aggregaterating":
                    t.ratingValue && (T(11, He(t.ratingValue, 100)), T(18, He(t.bestRating)), T(19, He(t.worstRating))), T(12, He(t.ratingCount)), T(17, He(t.reviewCount));
                    break;
                case "person":
                    ar(8, t.name);
                    break;
                case "offer":
                    ar(7, t.availability), ar(14, t.itemCondition), ar(13, t.priceCurrency), ar(12, t.sku), T(13, He(t.price));
                    break;
                case "brand":
                    ar(6, t.name)
            }
            null !== r && "object" == typeof r && Re(r)
        }
    }

    function He(t, e) {
        if (void 0 === e && (e = 1), null !== t) switch (typeof t) {
            case "number":
                return Math.round(t * e);
            case "string":
                return Math.round(parseFloat(t.replace(Ae, "")) * e)
        }
        return null
    }
    var Ye = ["title", "alt", "onload", "onfocus", "onerror", "data-drupal-form-submit-last"],
        We = /[\r\n]+/g;

    function Xe(e, n) {
        var a = null;
        if (2 === n && !1 === Yn(e)) return a;
        0 !== n && e.nodeType === Node.TEXT_NODE && e.parentElement && "STYLE" === e.parentElement.tagName && (e = e.parentNode);
        var r = !1 === Yn(e) ? "add" : "update",
            i = e.parentElement ? e.parentElement : null,
            o = e.ownerDocument !== document;
        switch (e.nodeType) {
            case Node.DOCUMENT_TYPE_NODE:
                i = o && e.parentNode ? In(e.parentNode) : i;
                var u = e,
                    c = {
                        tag: (o ? "iframe:" : "") + "*D",
                        attributes: {
                            name: u.name,
                            publicId: u.publicId,
                            systemId: u.systemId
                        }
                    };
                t[r](e, i, c, n);
                break;
            case Node.DOCUMENT_NODE:
                e === document && Nn(document), qe(e);
                break;
            case Node.DOCUMENT_FRAGMENT_NODE:
                var s = e;
                if (s.host)
                    if (Nn(s), "function" === typeof s.constructor && s.constructor.toString().indexOf("[native code]") >= 0) {
                        qe(s);
                        for (var l = "", d = 0, f = ("adoptedStyleSheets" in s ? s.adoptedStyleSheets : []); d < f.length; d++) {
                            l += Ue(f[d])
                        }
                        var h = {
                            tag: "*S",
                            attributes: {
                                style: l
                            }
                        };
                        t[r](e, s.host, h, n)
                    } else t[r](e, s.host, {
                        tag: "*P",
                        attributes: {}
                    }, n);
                break;
            case Node.TEXT_NODE:
                if (i = i || e.parentNode, "update" === r || i && Yn(i) && "STYLE" !== i.tagName) {
                    var p = {
                        tag: "*T",
                        value: e.nodeValue
                    };
                    t[r](e, i, p, n)
                }
                break;
            case Node.ELEMENT_NODE:
                var v = e,
                    g = v.tagName,
                    m = function(t) {
                        var e = {},
                            n = t.attributes;
                        if (n && n.length > 0)
                            for (var a = 0; a < n.length; a++) {
                                var r = n[a].name;
                                Ye.indexOf(r) < 0 && (e[r] = n[a].value)
                            }
                        "INPUT" === t.tagName && !("value" in e) && t.value && (e.value = t.value);
                        return e
                    }(v);
                switch (i = e.parentElement ? e.parentElement : e.parentNode ? e.parentNode : null, "http://www.w3.org/2000/svg" === v.namespaceURI && (g = "svg:" + g), g) {
                    case "HTML":
                        i = o && i ? In(i) : null;
                        var b = {
                            tag: (o ? "iframe:" : "") + g,
                            attributes: m
                        };
                        t[r](e, i, b, n);
                        break;
                    case "SCRIPT":
                        if ("type" in m && "application/ld+json" === m.type) try {
                            Re(JSON.parse(v.text.replace(We, "")))
                        } catch (t) {}
                        break;
                    case "NOSCRIPT":
                        break;
                    case "META":
                        var y = "property" in m ? "property" : "name" in m ? "name" : null;
                        if (y && "content" in m) {
                            var w = m.content;
                            switch (m[y]) {
                                case "og:title":
                                    ar(20, w);
                                    break;
                                case "og:type":
                                    ar(19, w);
                                    break;
                                case "generator":
                                    ar(21, w)
                            }
                        }
                        break;
                    case "HEAD":
                        var k = {
                            tag: g,
                            attributes: m
                        };
                        location && (k.attributes["*B"] = location.protocol + "//" + location.hostname), t[r](e, i, k, n);
                        break;
                    case "STYLE":
                        var E = {
                            tag: g,
                            attributes: m,
                            value: Pe(v)
                        };
                        t[r](e, i, E, n);
                        break;
                    case "IFRAME":
                        var O = e,
                            M = {
                                tag: g,
                                attributes: m
                            };
                        Dn(O) && (! function(t) {
                            !1 === Yn(t) && Cr(t, "load", un.bind(this, t, "childList"), !0)
                        }(O), M.attributes["*O"] = "true", O.contentDocument && O.contentWindow && "loading" !== O.contentDocument.readyState && (a = O.contentDocument)), t[r](e, i, M, n);
                        break;
                    default:
                        var S = {
                            tag: g,
                            attributes: m
                        };
                        v.shadowRoot && (a = v.shadowRoot), t[r](e, i, S, n)
                }
        }
        return a
    }

    function qe(t) {
        Yn(t) || (! function(t) {
            try {
                var e = c("MutationObserver"),
                    n = e in window ? new window[e](Dr(en)) : null;
                n && (n.observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), Ve.push(n))
            } catch (t) {
                Ia(2, 0, t ? t.name : null)
            }
        }(t), ze(t))
    }

    function Pe(t) {
        var e = t.textContent ? t.textContent.trim() : "",
            n = t.dataset ? Object.keys(t.dataset).length : 0;
        return (0 === e.length || n > 0) && (e = Ue(t.sheet)), e
    }

    function Ue(t) {
        var e = "",
            n = null;
        try {
            n = t ? t.cssRules : []
        } catch (t) {
            if (Ia(1, 1, t ? t.name : null), t && "SecurityError" !== t.name) throw t
        }
        if (null !== n)
            for (var a = 0; a < n.length; a++) e += n[a].cssText;
        return e
    }

    function Be(t, e, n) {
        return Q(this, void 0, void 0, (function() {
            var a, r, i, o, u;
            return $(this, (function(c) {
                switch (c.label) {
                    case 0:
                        a = [t], c.label = 1;
                    case 1:
                        if (!(a.length > 0)) return [3, 4];
                        for (r = a.shift(), i = r.firstChild; i;) a.push(i), i = i.nextSibling;
                        return 0 !== (o = xt(e)) ? [3, 3] : [4, It(e)];
                    case 2:
                        o = c.sent(), c.label = 3;
                    case 3:
                        return 2 === o ? [3, 4] : ((u = Xe(r, n)) && a.push(u), [3, 1]);
                    case 4:
                        return [2]
                }
            }))
        }))
    }
    var Ve = [],
        Fe = [],
        Je = null,
        Ge = null,
        Ze = null,
        Ke = [],
        Qe = null,
        $e = null,
        tn = {};

    function en(t) {
        var e = l();
        Y(6, e), Fe.push({
            time: e,
            mutations: t
        }), Nt(nn, 1).then((function() {
            D(Xt), Dr(Kn)()
        }))
    }

    function nn() {
        return Q(this, void 0, void 0, (function() {
            var t, e, n, a, r, i, o, u, c;
            return $(this, (function(s) {
                switch (s.label) {
                    case 0:
                        Tt(t = {
                            id: fr(),
                            cost: 3
                        }), s.label = 1;
                    case 1:
                        if (!(Fe.length > 0)) return [3, 8];
                        e = Fe.shift(), n = 0, a = e.mutations, s.label = 2;
                    case 2:
                        return n < a.length ? (r = a[n], 0 !== (i = xt(t)) ? [3, 4] : [4, It(t)]) : [3, 6];
                    case 3:
                        i = s.sent(), s.label = 4;
                    case 4:
                        if (2 === i) return [3, 6];
                        switch (o = r.target, u = function(t, e) {
                            var n = t.target ? Rn(t.target.parentNode) : null;
                            if (n && "HTML" !== n.data.tag) {
                                var a = l() > $e,
                                    r = Rn(t.target),
                                    i = r && r.selector ? r.selector.join() : t.target.nodeName,
                                    o = [n.selector ? n.selector.join() : "", i, t.attributeName, an(t.addedNodes), an(t.removedNodes)].join();
                                tn[o] = o in tn ? tn[o] : [0];
                                var u = tn[o];
                                if (!1 === a && u[0] >= 10 && rn(u[1], 2, e), u[0] = a ? u[0] + 1 : 1, 10 === u[0]) return u[1] = t.removedNodes, "suspend";
                                if (u[0] > 10) return ""
                            }
                            return t.type
                        }(r, t), u && o && o.ownerDocument && Nn(o.ownerDocument), u && o && o.nodeType == Node.DOCUMENT_FRAGMENT_NODE && o.host && Nn(o), u) {
                            case "attributes":
                                Xe(o, 3);
                                break;
                            case "characterData":
                                Xe(o, 4);
                                break;
                            case "childList":
                                rn(r.addedNodes, 1, t), rn(r.removedNodes, 2, t);
                                break;
                            case "suspend":
                                (c = Rn(o)) && (c.metadata.suspend = !0)
                        }
                        s.label = 5;
                    case 5:
                        return n++, [3, 2];
                    case 6:
                        return [4, At(6, t, e.time)];
                    case 7:
                        return s.sent(), [3, 1];
                    case 8:
                        return Dt(t), [2]
                }
            }))
        }))
    }

    function an(t) {
        for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
        return e.join()
    }

    function rn(t, e, n) {
        return Q(this, void 0, void 0, (function() {
            var a, r, i;
            return $(this, (function(o) {
                switch (o.label) {
                    case 0:
                        a = t ? t.length : 0, r = 0, o.label = 1;
                    case 1:
                        return r < a ? 1 !== e ? [3, 2] : (Be(t[r], n, e), [3, 5]) : [3, 6];
                    case 2:
                        return 0 !== (i = xt(n)) ? [3, 4] : [4, It(n)];
                    case 3:
                        i = o.sent(), o.label = 4;
                    case 4:
                        if (2 === i) return [3, 6];
                        Xe(t[r], e), o.label = 5;
                    case 5:
                        return r++, [3, 1];
                    case 6:
                        return [2]
                }
            }))
        }))
    }

    function on(t, e) {
        return void 0 === e && (e = !1), Ke.indexOf(t) < 0 && Ke.push(t), Qe && I(Qe), Qe = D((function() {
            ! function(t) {
                for (var e = 0, n = Ke; e < n.length; e++) {
                    var a = n[e];
                    if (a) {
                        var r = a.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                        if (r && Yn(a)) continue;
                        un(a, r || t ? "childList" : "characterData")
                    }
                }
                Ke = []
            }(e)
        }), 33), t
    }

    function un(t, e) {
        Dr(en)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e
        }])
    }
    var cn = 1,
        sn = [],
        ln = [],
        dn = [],
        fn = {},
        hn = [],
        pn = [],
        vn = {},
        gn = [],
        mn = [],
        bn = [],
        yn = null,
        wn = null,
        kn = null,
        En = null;

    function On() {
        Sn(), Nn(document, !0)
    }

    function Mn() {
        Sn()
    }

    function Sn() {
        cn = 1, sn = [], ln = [], dn = [], fn = {}, hn = [], pn = [], gn = "address,password,contact".split(","), mn = "password,secret,pass,social,ssn,name,code,dob,cell,mob,contact,hidden,account,cvv,ccv,email,tel,phone,address,addr,card,zip".split(","), bn = "radio,checkbox,range,button,reset,submit".split(","), yn = new WeakMap, wn = new WeakMap, kn = new WeakMap, En = new WeakMap
    }

    function Nn(t, e) {
        void 0 === e && (e = !1);
        try {
            e && u.unmask.forEach((function(t) {
                return t.indexOf("!") < 0 ? pn.push(t) : hn.push(t.substr(1))
            })), "querySelectorAll" in t && (u.regions.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return Gn(t, "".concat(e[0]))
                }))
            })), u.mask.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return kn.set(t, 3)
                }))
            })), u.fraud.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return En.set(t, e[0])
                }))
            })), pn.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return kn.set(t, 0)
                }))
            })))
        } catch (t) {
            Ia(5, 1, t ? t.name : null)
        }
    }

    function _n(t, e) {
        if (void 0 === e && (e = !1), null === t) return null;
        var n = yn.get(t);
        return !n && e && (n = cn++, yn.set(t, n)), n || null
    }

    function xn(t, e, n, a) {
        var r, i = _n(t, !0),
            o = e ? _n(e) : null,
            c = Xn(t),
            s = null,
            l = Zn(t) ? i : null,
            d = null,
            f = En.has(t) ? En.get(t) : null,
            h = u.content ? 1 : 2;
        o >= 0 && ln[o] && ((s = ln[o]).children.push(i), l = null === l ? s.region : l, d = s.fragment, f = null === f ? s.metadata.fraud : f, h = s.metadata.privacy), n.attributes && "data-clarity-region" in n.attributes && (Gn(t, n.attributes["data-clarity-region"]), l = i), sn[i] = t, ln[i] = {
                id: i,
                parent: o,
                previous: c,
                children: [],
                data: n,
                selector: null,
                hash: null,
                region: l,
                metadata: {
                    active: !0,
                    suspend: !1,
                    privacy: h,
                    position: null,
                    fraud: f,
                    size: null
                },
                fragment: d
            },
            function(t, e, n) {
                var a = e.data,
                    r = e.metadata,
                    i = r.privacy,
                    o = a.attributes || {},
                    u = a.tag.toUpperCase();
                switch (!0) {
                    case "data-clarity-mask" in o:
                        r.privacy = 3;
                        break;
                    case "data-clarity-unmask" in o:
                        r.privacy = 0;
                        break;
                    case kn.has(t):
                        r.privacy = kn.get(t);
                        break;
                    case En.has(t):
                        r.privacy = 2;
                        break;
                    case "*T" === u:
                        var c = n && n.data ? n.data.tag : "",
                            s = n && n.selector ? n.selector[0] : "";
                        r.privacy = "STYLE" === c || "TITLE" === c || hn.some((function(t) {
                            return s.indexOf(t) >= 0
                        })) ? 0 : i;
                        break;
                    case "type" in o:
                        r.privacy = Cn(o.type, mn, r);
                        break;
                    case "INPUT" === u && 0 === i:
                        var l = "";
                        Object.keys(o).forEach((function(t) {
                            return l += o[t].toLowerCase()
                        })), r.privacy = Cn(l, mn, r);
                        break;
                    case 1 === i && "INPUT" === u:
                        r.privacy = Cn(o.class, gn, r), r.privacy = bn.indexOf(o.type) >= 0 ? 0 : i;
                        break;
                    case 1 === i:
                        r.privacy = Cn(o.class, gn, r)
                }
            }(t, ln[i], s), zn(ln[i]), "IMG" === (r = ln[i]).data.tag && 3 === r.metadata.privacy && (r.metadata.size = []), qn(i, a, ln[i].fragment)
    }

    function Tn(t, e, n, a) {
        var r = _n(t),
            i = e ? _n(e) : null,
            o = Xn(t),
            u = !1,
            c = !1;
        if (r in ln) {
            var s = ln[r];
            if (s.metadata.active = !0, s.previous !== o && (u = !0, s.previous = o), s.parent !== i) {
                u = !0;
                var l = s.parent;
                if (s.parent = i, null !== i && i >= 0) {
                    var d = null === o ? 0 : ln[i].children.indexOf(o) + 1;
                    ln[i].children.splice(d, 0, r), s.region = Zn(t) ? r : ln[i].region
                } else ! function(t, e) {
                    if (t in ln) {
                        var n = ln[t];
                        n.metadata.active = !1, n.parent = null, qn(t, e)
                    }
                }(r, a);
                if (null !== l && l >= 0) {
                    var f = ln[l].children.indexOf(r);
                    f >= 0 && ln[l].children.splice(f, 1)
                }
                c = !0
            }
            for (var h in n) jn(s.data, n, h) && (u = !0, s.data[h] = n[h]);
            s.fragment && vn[s.fragment] && (u = !0), zn(s), qn(r, a, ln[r].fragment, u, c)
        }
    }

    function Dn(t) {
        var e = !1;
        if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
            var n = t;
            try {
                n.contentDocument && (wn.set(n.contentDocument, n), e = !0)
            } catch (t) {}
        }
        return e
    }

    function In(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && wn.has(e) ? wn.get(e) : null
    }

    function Cn(t, e, n) {
        return t && e.some((function(e) {
            return t.indexOf(e) >= 0
        })) ? 2 : n.privacy
    }

    function jn(t, e, n) {
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (var a in t[n])
                if (t[n][a] !== e[n][a]) return !0;
            for (var a in e[n])
                if (e[n][a] !== t[n][a]) return !0;
            return !1
        }
        return t[n] !== e[n]
    }

    function zn(t) {
        var e = t.parent && t.parent in ln ? ln[t.parent] : null,
            n = e ? e.selector : null,
            a = t.data,
            r = function(t, e) {
                e.metadata.position = 1;
                for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0;) {
                    var a = ln[t.children[n]];
                    if (e.data.tag === a.data.tag) {
                        e.metadata.position = a.metadata.position + 1;
                        break
                    }
                }
                return e.metadata.position
            }(e, t),
            i = {
                tag: a.tag,
                prefix: n,
                position: r,
                attributes: a.attributes
            };
        t.selector = [bt(i), bt(i, !0)], t.hash = t.selector.map((function(t) {
            return t ? f(t) : null
        })), t.hash.forEach((function(e) {
            return fn[e] = t.id
        })), t.hash.some((function(t) {
            return -1 !== Ra.indexOf(t)
        })) && (t.fragment = t.id)
    }

    function Ln(t) {
        return t in sn ? sn[t] : null
    }

    function An(t) {
        return t in ln ? ln[t] : null
    }

    function Rn(t) {
        var e = _n(t);
        return e in ln ? ln[e] : null
    }

    function Hn(t) {
        return t in fn ? fn[t] : null
    }

    function Yn(t) {
        return _n(t) in sn
    }

    function Wn() {
        for (var t = [], e = 0, n = dn; e < n.length; e++) {
            (a = n[e]) in ln && t.push(ln[a])
        }
        for (var a in dn = [], vn) qa(vn[a], a, !0);
        return vn = {}, t
    }

    function Xn(t) {
        for (var e = null; null === e && t.previousSibling;) e = _n(t.previousSibling), t = t.previousSibling;
        return e
    }

    function qn(t, e, n, a, r) {
        if (void 0 === n && (n = null), void 0 === a && (a = !0), void 0 === r && (r = !1), n && !vn[n]) {
            var i = Ln(n),
                o = An(n);
            i && o && (on(i, !0), o.hash.forEach((function(t) {
                -1 !== Ra.indexOf(t) && (vn[n] = t)
            })))
        }
        var u = dn.indexOf(t);
        u >= 0 && 1 === e && r ? (dn.splice(u, 1), dn.push(t)) : -1 === u && a && dn.push(t)
    }
    var Pn = [],
        Un = null,
        Bn = {},
        Vn = [],
        Fn = !1,
        Jn = null;

    function Gn(t, e) {
        !1 === Un.has(t) && (Un.set(t, e), (Jn = null === Jn && Fn ? new IntersectionObserver(Qn, {
            threshold: [0, .2, .4, .6, .8, 1]
        }) : Jn) && t && t.nodeType === Node.ELEMENT_NODE && Jn.observe(t))
    }

    function Zn(t) {
        return Un && Un.has(t)
    }

    function Kn() {
        for (var t = [], e = 0, n = Vn; e < n.length; e++) {
            var a = n[e],
                r = _n(a.node);
            r in Bn || (r ? (a.data.id = r, Bn[r] = a.data, Pn.push(ta(a.data))) : t.push(a))
        }
        Vn = t, Pn.length > 0 && At(7)
    }

    function Qn(t) {
        for (var e = 0, n = t; e < n.length; e++) {
            var a = n[e],
                r = a.target,
                i = a.boundingClientRect,
                o = a.intersectionRect,
                u = a.rootBounds;
            if (Un.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
                var c = r ? _n(r) : null,
                    s = c in Bn ? Bn[c] : {
                        id: c,
                        name: Un.get(r),
                        interaction: 16,
                        visibility: 0
                    },
                    l = (o ? o.width * o.height * 1 / (u.width * u.height) : 0) > .05 || a.intersectionRatio > .8,
                    d = (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
                $n(r, s, s.interaction, d ? 13 : l ? 10 : 0), s.visibility >= 13 && Jn && Jn.unobserve(r)
            }
        }
        Pn.length > 0 && At(7)
    }

    function $n(t, e, n, a) {
        var r = n > e.interaction || a > e.visibility;
        e.interaction = n > e.interaction ? n : e.interaction, e.visibility = a > e.visibility ? a : e.visibility, e.id ? (e.id in Bn && r || !(e.id in Bn)) && (Bn[e.id] = e, Pn.push(ta(e))) : Vn.push({
            node: t,
            data: e
        })
    }

    function ta(t) {
        return {
            time: l(),
            data: {
                id: t.id,
                interaction: t.interaction,
                visibility: t.visibility,
                name: t.name
            }
        }
    }

    function ea() {
        Pn = []
    }

    function na(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null,
            n = e && e.length > 0 ? e[0] : t.target;
        return $e = l() + 3e3, n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    }

    function aa(t, e, n) {
        void 0 === n && (n = null);
        var a = {
            id: 0,
            hash: null,
            privacy: 2,
            node: t
        };
        if (t) {
            var r = Rn(t);
            if (null !== r) {
                var i = r.metadata;
                a.id = r.id, a.hash = r.hash, a.privacy = i.privacy, r.region && function(t, e) {
                    var n = Ln(t),
                        a = t in Bn ? Bn[t] : {
                            id: t,
                            visibility: 0,
                            interaction: 16,
                            name: Un.get(n)
                        },
                        r = 16;
                    switch (e) {
                        case 9:
                            r = 20;
                            break;
                        case 27:
                            r = 30
                    }
                    $n(n, a, r, a.visibility)
                }(r.region, e), i.fraud && gt(i.fraud, r.id, n || r.data.value)
            }
        }
        return a
    }

    function ra(t) {
        return Q(this, void 0, void 0, (function() {
            var e, n, a, r, i, o, u, c, s, d, f, h, p, v, g, b, w, k, E, O, M, S, N, _, x, T, D, I, C;
            return $(this, (function(j) {
                switch (e = l(), n = [e, t], t) {
                    case 13:
                    case 14:
                    case 12:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        for (a = 0, r = oe; a < r.length; a++) I = r[a], (i = aa(I.data.target, I.event)).id > 0 && ((n = [I.time, I.event]).push(i.id), n.push(I.data.x), n.push(I.data.y), ya(n), m(I.event, I.data.x, I.data.y));
                        fe();
                        break;
                    case 9:
                        for (o = 0, u = Ut; o < u.length; o++) I = u[o], c = aa(I.data.target, I.event, I.data.text), n = [I.time, I.event], s = c.hash.join("."), n.push(c.id), n.push(I.data.x), n.push(I.data.y), n.push(I.data.eX), n.push(I.data.eY), n.push(I.data.button), n.push(I.data.reaction), n.push(I.data.context), n.push(ft(I.data.text, "click", c.privacy)), n.push(I.data.link), n.push(s), n.push(I.data.trust), ya(n), ca(I.time, I.event, s, I.data.x, I.data.y, I.data.reaction, I.data.context);
                        Zt();
                        break;
                    case 38:
                        for (d = 0, f = Kt; d < f.length; d++) I = f[d], n = [I.time, I.event], (x = aa(I.data.target, I.event)).id > 0 && (n.push(x.id), n.push(I.data.action), ya(n));
                        $t();
                        break;
                    case 11:
                        h = ie, n.push(h.width), n.push(h.height), m(t, h.width, h.height), pe(), ya(n);
                        break;
                    case 26:
                        p = Se, n.push(p.name), Ie(), ya(n);
                        break;
                    case 27:
                        for (v = 0, g = ee; v < g.length; v++) I = g[v], b = aa(I.data.target, I.event, I.data.value), (n = [I.time, I.event]).push(b.id), n.push(ft(I.data.value, "input", b.privacy)), ya(n);
                        re();
                        break;
                    case 21:
                        (w = ye) && (k = aa(w.start, t), E = aa(w.end, t), n.push(k.id), n.push(w.startOffset), n.push(E.id), n.push(w.endOffset), Me(), ya(n));
                        break;
                    case 10:
                        for (O = 0, M = ve; O < M.length; O++) I = M[O], (S = aa(I.data.target, I.event)).id > 0 && ((n = [I.time, I.event]).push(S.id), n.push(I.data.x), n.push(I.data.y), ya(n), m(I.event, I.data.x, I.data.y));
                        ve = [];
                        break;
                    case 39:
                        for (N = 0, _ = _e; N < _.length; N++) I = _[N], n = [I.time, I.event], (x = aa(I.data.target, I.event)).id > 0 && (n.push(x.id), ya(n));
                        Te();
                        break;
                    case 22:
                        for (T = 0, D = oa; T < D.length; T++) I = D[T], (n = [I.time, I.event]).push(I.data.type), n.push(I.data.hash), n.push(I.data.x), n.push(I.data.y), n.push(I.data.reaction), n.push(I.data.context), ya(n, !1);
                        ua();
                        break;
                    case 28:
                        C = Ne, n.push(C.visible), ya(n), y(e, C.visible), je()
                }
                return [2]
            }))
        }))
    }
    var ia = [],
        oa = [];

    function ua() {
        oa = []
    }

    function ca(t, e, n, a, r, i, o) {
        void 0 === i && (i = 1), void 0 === o && (o = 0), ia.push({
            time: t,
            event: 22,
            data: {
                type: e,
                hash: n,
                x: a,
                y: r,
                reaction: i,
                context: o
            }
        }), m(e, a, r)
    }
    var sa, la, da, fa, ha, pa = 0,
        va = 0,
        ga = null,
        ma = 0;

    function ba() {
        fa = !0, pa = 0, va = 0, ma = 0, sa = [], la = [], da = {}, ha = null
    }

    function ya(t, e) {
        if (void 0 === e && (e = !0), fa) {
            var n = l(),
                a = t.length > 1 ? t[1] : null,
                r = JSON.stringify(t);
            switch (a) {
                case 5:
                    pa += r.length;
                case 37:
                case 6:
                    va += r.length, sa.push(r);
                    break;
                default:
                    la.push(r)
            }
            _(25);
            var i = function() {
                var t = !1 === u.lean && pa > 0 ? 100 : Mr.sequence * u.delay;
                return "string" == typeof u.upload ? Math.max(Math.min(t, 3e4), 100) : u.delay
            }();
            n - ma > 2 * i && (I(ga), ga = null), e && null === ga && (25 !== a && L(), ga = D(ka, i), ma = n, Ga(va))
        }
    }

    function wa() {
        I(ga), ka(!0), pa = 0, va = 0, ma = 0, sa = [], la = [], da = {}, ha = null, fa = !1
    }

    function ka(t) {
        return void 0 === t && (t = !1), Q(this, void 0, void 0, (function() {
            var e, n, a, r, i, o, c, s;
            return $(this, (function(l) {
                switch (l.label) {
                    case 0:
                        return ga = null, (e = !1 === u.lean && va > 0 && (va < 1048576 || Mr.sequence > 0)) && T(1, 1), Kn(),
                            function() {
                                var t = [];
                                oa = [];
                                for (var e = Mr.start + Mr.duration, n = Math.max(e - 2e3, 0), a = 0, r = ia; a < r.length; a++) {
                                    var i = r[a];
                                    i.time >= n && (i.time <= e && oa.push(i), t.push(i))
                                }
                                ia = t, ra(22)
                            }(), ot(), n = !0 === t, a = JSON.stringify(_r(n)), r = "[".concat(la.join(), "]"), i = e ? "[".concat(sa.join(), "]") : "", o = function(t) {
                                return t.p.length > 0 ? '{"e":'.concat(t.e, ',"a":').concat(t.a, ',"p":').concat(t.p, "}") : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}")
                            }({
                                e: a,
                                a: r,
                                p: i
                            }), n ? (s = null, [3, 3]) : [3, 1];
                    case 1:
                        return [4, et(o)];
                    case 2:
                        s = l.sent(), l.label = 3;
                    case 3:
                        return x(2, (c = s) ? c.length : o.length), Ea(o, c, Mr.sequence, n), la = [], e && (sa = [], va = 0, pa = 0), [2]
                }
            }))
        }))
    }

    function Ea(t, e, n, a) {
        if (void 0 === a && (a = !1), "string" == typeof u.upload) {
            var r = u.upload,
                i = !1;
            if (a && "sendBeacon" in navigator) try {
                (i = navigator.sendBeacon.bind(navigator)(r, t)) && Ma(n)
            } catch (t) {}
            if (!1 === i) {
                n in da ? da[n].attempts++ : da[n] = {
                    data: t,
                    attempts: 1
                };
                var o = new XMLHttpRequest;
                o.open("POST", r), null !== n && (o.onreadystatechange = function() {
                    Dr(Oa)(o, n)
                }), o.withCredentials = !0, e ? (o.setRequestHeader("Accept", "application/x-clarity-gzip"), o.send(e)) : o.send(t)
            }
        } else if (u.upload) {
            (0, u.upload)(t), Ma(n)
        }
    }

    function Oa(t, e) {
        var n = da[e];
        t && 4 === t.readyState && n && ((t.status < 200 || t.status > 208) && n.attempts <= 1 ? t.status >= 400 && t.status < 500 ? Za(6) : (0 === t.status && (u.upload = u.fallback ? u.fallback : u.upload), Ea(n.data, null, e)) : (ha = {
            sequence: e,
            attempts: n.attempts,
            status: t.status
        }, n.attempts > 1 && Fa(2), 200 === t.status && t.responseText && function(t) {
            switch (t && t.length > 0 ? t.split(" ")[0] : "") {
                case "END":
                    Za(6);
                    break;
                case "UPGRADE":
                    U("Auto")
            }
        }(t.responseText), 0 === t.status && (Ea(n.data, null, e, !0), Za(3)), t.status >= 200 && t.status <= 208 && Ma(e), delete da[e]))
    }

    function Ma(t) {
        1 === t && vr()
    }
    var Sa, Na = {};

    function _a(t) {
        var e = t.error || t;
        return e.message in Na || (Na[e.message] = 0), Na[e.message]++ >= 5 || e && e.message && (Sa = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename
        }, xa(31)), !0
    }

    function xa(t) {
        return Q(this, void 0, void 0, (function() {
            var e;
            return $(this, (function(n) {
                switch (e = [l(), t], t) {
                    case 31:
                        e.push(Sa.message), e.push(Sa.line), e.push(Sa.column), e.push(Sa.stack), e.push(Sa.source), ya(e);
                        break;
                    case 33:
                        Ta && (e.push(Ta.code), e.push(Ta.name), e.push(Ta.message), e.push(Ta.stack), e.push(Ta.severity), ya(e, !1));
                        break;
                    case 41:
                        pt && (e.push(pt.id), e.push(pt.target), e.push(pt.hash), ya(e, !1))
                }
                return [2]
            }))
        }))
    }
    var Ta, Da = {};

    function Ia(t, e, n, a, r) {
        void 0 === n && (n = null), void 0 === a && (a = null), void 0 === r && (r = null);
        var i = n ? "".concat(n, "|").concat(a) : "";
        t in Da && Da[t].indexOf(i) >= 0 || (Ta = {
            code: t,
            name: n,
            message: a,
            stack: r,
            severity: e
        }, t in Da ? Da[t].push(i) : Da[t] = [i], xa(33))
    }
    var Ca, ja = {},
        za = [],
        La = {},
        Aa = {},
        Ra = [];

    function Ha() {
        try {
            var t = u.extract;
            if (!t) return;
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e],
                    a = t[e + 1];
                switch (n) {
                    case 0:
                        var r = t[e + 2];
                        La[a] = Ua(r);
                        break;
                    case 1:
                        break;
                    case 2:
                        var i = t[e + 2];
                        Aa[a] = i;
                        break;
                    case 3:
                        Ra = t[e + 2]
                }
            }
        } catch (t) {
            Ia(8, 1, t ? t.name : null)
        }
    }

    function Ya(t) {
        return JSON.parse(JSON.stringify(t))
    }

    function Wa() {
        try {
            for (var t in La) {
                var e = (r = Ba(Ya(La[t]))) ? JSON.stringify(r).substring(0, 1e4) : r;
                e && qa(t, e)
            }
            for (var n in Aa) {
                var a = document.querySelector(Aa[n]);
                a && qa(n, a.innerText)
            }
        } catch (t) {
            Ia(5, 1, t ? t.name : null)
        }
        var r;
        Fa(40)
    }

    function Xa() {
        za = []
    }

    function qa(t, e, n) {
        void 0 === n && (n = !1), (!(t in ja) || t in ja && ja[t] !== e || n) && (ja[t] = e, za.push(t))
    }

    function Pa() {
        ja = {}, za = [], La = {}, Aa = {}
    }

    function Ua(t) {
        for (var e = [], n = t.split("."); n.length > 0;) {
            var a = n.shift(),
                r = a.indexOf("["),
                i = a.indexOf("{"),
                o = a.indexOf("}");
            e.push({
                name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
                type: r > 0 ? 1 : i > 0 ? 2 : 3,
                condition: i > 0 ? a.substring(i + 1, o) : null
            })
        }
        return e
    }

    function Ba(t, e) {
        if (void 0 === e && (e = window), 0 == t.length) return e;
        var n, a = t.shift();
        if (e && e[a.name]) {
            var r = e[a.name];
            if (1 !== a.type && Va(r, a.condition)) n = Ba(t, r);
            else if (Array.isArray(r)) {
                for (var i = [], o = 0, u = r; o < u.length; o++) {
                    var c = u[o];
                    if (Va(c, a.condition)) {
                        var s = Ba(t, c);
                        s && i.push(s)
                    }
                }
                n = i
            }
            return n
        }
        return null
    }

    function Va(t, e) {
        if (e) {
            var n = e.split(":");
            return n.length > 1 ? t[n[0]] == n[1] : t[n[0]]
        }
        return !0
    }

    function Fa(t) {
        var e = [l(), t];
        switch (t) {
            case 4:
                var n = h;
                n && ((e = [n.time, n.event]).push(n.data.visible), e.push(n.data.docWidth), e.push(n.data.docHeight), e.push(n.data.screenWidth), e.push(n.data.screenHeight), e.push(n.data.scrollX), e.push(n.data.scrollY), e.push(n.data.pointerX), e.push(n.data.pointerY), e.push(n.data.activityTime), ya(e, !1)), g();
                break;
            case 25:
                e.push(M.gap), ya(e);
                break;
            case 35:
                e.push(Ca.check), ya(e, !1);
                break;
            case 3:
                e.push(P.key), ya(e);
                break;
            case 2:
                e.push(ha.sequence), e.push(ha.attempts), e.push(ha.status), ya(e, !1);
                break;
            case 24:
                e.push(E.key), e.push(E.value), ya(e);
                break;
            case 34:
                var a = Object.keys(V);
                if (a.length > 0) {
                    for (var r = 0, i = a; r < i.length; r++) {
                        var o = i[r];
                        e.push(o), e.push(V[o])
                    }
                    K(), ya(e, !1)
                }
                break;
            case 0:
                var u = Object.keys(N);
                if (u.length > 0) {
                    for (var c = 0, s = u; c < s.length; c++) {
                        var d = s[c],
                            f = parseInt(d, 10);
                        e.push(f), e.push(Math.round(N[d]))
                    }
                    N = {}, ya(e, !1)
                }
                break;
            case 1:
                var p = Object.keys(tr);
                if (p.length > 0) {
                    for (var v = 0, m = p; v < m.length; v++) {
                        var b = m[v];
                        f = parseInt(b, 10);
                        e.push(f), e.push(tr[b])
                    }
                    ir(), ya(e, !1)
                }
                break;
            case 36:
                var y = Object.keys(H);
                if (y.length > 0) {
                    for (var w = 0, k = y; w < k.length; w++) {
                        var O = k[w];
                        f = parseInt(O, 10);
                        e.push(f), e.push([].concat.apply([], H[O]))
                    }
                    X(), ya(e, !1)
                }
                break;
            case 40:
                for (var S = 0, _ = za; S < _.length; S++) {
                    O = _[S];
                    e.push(O), e.push(ja[O])
                }
                Xa(), ya(e, !1)
        }
    }

    function Ja() {
        Ca = {
            check: 0
        }
    }

    function Ga(t) {
        if (0 === Ca.check) {
            var e = Ca.check;
            e = Mr.sequence >= 128 ? 1 : e, e = l() > 72e5 ? 2 : e, (e = t > 10485760 ? 2 : e) !== Ca.check && Za(e)
        }
    }

    function Za(t) {
        Ca.check = t, pr(), ui()
    }

    function Ka() {
        0 !== Ca.check && Fa(35)
    }

    function Qa() {
        Ca = null
    }
    var $a = null,
        tr = null;

    function er() {
        $a = {}, tr = {}
    }

    function nr() {
        $a = {}, tr = {}
    }

    function ar(t, e) {
        e && (e = "".concat(e), t in $a || ($a[t] = []), $a[t].indexOf(e) < 0 && ($a[t].push(e), t in tr || (tr[t] = []), tr[t].push(e), $a[t].length > 128 && Za(5)))
    }

    function rr() {
        Fa(1)
    }

    function ir() {
        tr = {}
    }
    var or = null,
        ur = [],
        cr = null;

    function sr() {
        cr = null;
        var t = navigator && "userAgent" in navigator ? navigator.userAgent : "",
            e = document && document.title ? document.title : "",
            n = function() {
                var t = {
                        session: br(),
                        ts: Math.round(Date.now()),
                        count: 1,
                        upgrade: null,
                        upload: ""
                    },
                    e = kr("_clsk");
                if (e) {
                    var n = e.split("|");
                    n.length >= 5 && t.ts - yr(n[1]) < 18e5 && (t.session = n[0], t.count = yr(n[2]) + 1, t.upgrade = yr(n[3]), t.upload = n.length >= 6 ? "".concat("https://").concat(n[5], "/").concat(n[4]) : "".concat("https://").concat(n[4]))
                }
                return t
            }(),
            a = wr();
        or = {
            projectId: u.projectId || f(location.host),
            userId: a.id,
            sessionId: n.session,
            pageNum: n.count
        }, u.lean = u.track && null !== n.upgrade ? 0 === n.upgrade : u.lean, u.upload = u.track && "string" == typeof u.upload && n.upload && n.upload.length > "https://".length ? n.upload : u.upload, ar(0, t), ar(3, e), ar(1, location.href), ar(2, document.referrer), ar(15, function() {
            var t = br();
            if (u.track && gr(window, "sessionStorage")) {
                var e = sessionStorage.getItem("_cltk");
                t = e || t, sessionStorage.setItem("_cltk", t)
            }
            return t
        }()), ar(16, document.documentElement.lang), ar(17, document.dir), navigator && (ar(9, navigator.userLanguage || navigator.language), navigator.userAgentData && navigator.userAgentData.getHighEntropyValues && navigator.userAgentData.getHighEntropyValues(["model", "platform", "platformVersion", "uaFullVersion"]).then((function(t) {
            var e;
            ar(22, t.platform), ar(23, t.platformVersion), null === (e = t.brands) || void 0 === e || e.forEach((function(t) {
                ar(24, t.name + "~" + t.version)
            })), ar(25, t.model), T(27, t.mobile ? 1 : 0)
        }))), T(0, n.ts), T(1, 0), screen && (T(14, Math.round(screen.width)), T(15, Math.round(screen.height)), T(16, Math.round(screen.colorDepth)));
        for (var r = 0, i = u.cookies; r < i.length; r++) {
            var o = i[r],
                c = kr(o);
            c && F(o, c)
        }
        mr(a)
    }

    function lr() {
        cr = null, or = null
    }

    function dr(t, e) {
        void 0 === e && (e = !0), or && !1 === e && t(or, !u.lean), ur.push({
            callback: t,
            wait: e
        })
    }

    function fr() {
        return or ? [or.userId, or.sessionId, or.pageNum].join(".") : ""
    }

    function hr() {
        Br() && (u.track = !0, mr(wr(), 1))
    }

    function pr() {
        Er("_clsk", "", 0)
    }

    function vr() {
        var t = Math.round(Date.now()),
            e = u.upload && "string" == typeof u.upload ? u.upload.replace("https://", "") : "",
            n = u.lean ? 0 : 1;
        ! function(t) {
            ur.length > 0 && ur.forEach((function(e) {
                !e.callback || e.wait && !t || e.callback(or, !u.lean)
            }))
        }(n), Er("_clsk", [or.sessionId, t, or.pageNum, n, e].join("|"), 1)
    }

    function gr(t, e) {
        try {
            return !!t[e]
        } catch (t) {
            return !1
        }
    }

    function mr(t, e) {
        void 0 === e && (e = null), e = null === e ? t.consent : e;
        var n = Math.ceil((Date.now() + 31536e6) / 864e5);
        (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e) && Er("_clck", [or.userId, 1, n.toString(36), e].join("|"), 365)
    }

    function br() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return window && window.crypto && window.crypto.getRandomValues && Uint32Array && (t = window.crypto.getRandomValues(new Uint32Array(1))[0]), t.toString(36)
    }

    function yr(t, e) {
        return void 0 === e && (e = 10), parseInt(t, e)
    }

    function wr() {
        var t = {
                id: br(),
                expiry: null,
                consent: 0
            },
            e = kr("_clck");
        if (e && e.length > 0) {
            for (var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";"); r < i.length; r++) {
                a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0
            }
            if (1 === n.length || a > 1) {
                var o = "".concat(";").concat("expires=").concat(new Date(0).toUTCString()).concat(";path=/");
                document.cookie = "".concat("_clck", "=").concat(o), document.cookie = "".concat("_clsk", "=").concat(o)
            }
            n.length > 2 && (t.expiry = yr(n[2], 36)), n.length > 3 && 1 === yr(n[3]) && (t.consent = 1), u.track = u.track || 1 === t.consent, t.id = u.track ? n[0] : t.id
        }
        return t
    }

    function kr(t) {
        if (gr(document, "cookie")) {
            var e = document.cookie.split(";");
            if (e)
                for (var n = 0; n < e.length; n++) {
                    var a = e[n].split("=");
                    if (a.length > 1 && a[0] && a[0].trim() === t) return a[1]
                }
        }
        return null
    }

    function Er(t, e, n) {
        if (u.track && (navigator && navigator.cookieEnabled || gr(document, "cookie"))) {
            var a = new Date;
            a.setDate(a.getDate() + n);
            var r = a ? "expires=" + a.toUTCString() : "",
                i = "".concat(t, "=").concat(e).concat(";").concat(r).concat(";path=/");
            try {
                if (null === cr) {
                    for (var o = location.hostname ? location.hostname.split(".") : [], c = o.length - 1; c >= 0; c--)
                        if (cr = ".".concat(o[c]).concat(cr || ""), c < o.length - 1 && (document.cookie = "".concat(i).concat(";").concat("domain=").concat(cr), kr(t) === e)) return;
                    cr = ""
                }
            } catch (t) {
                cr = ""
            }
            document.cookie = cr ? "".concat(i).concat(";").concat("domain=").concat(cr) : i
        }
    }
    var Or, Mr = null;

    function Sr() {
        var t = or;
        Mr = {
            version: d,
            sequence: 0,
            start: 0,
            duration: 0,
            projectId: t.projectId,
            userId: t.userId,
            sessionId: t.sessionId,
            pageNum: t.pageNum,
            upload: 0,
            end: 0
        }
    }

    function Nr() {
        Mr = null
    }

    function _r(t) {
        return Mr.start = Mr.start + Mr.duration, Mr.duration = l() - Mr.start, Mr.sequence++, Mr.upload = t && "sendBeacon" in navigator ? 1 : 0, Mr.end = t ? 1 : 0, [Mr.version, Mr.sequence, Mr.start, Mr.duration, Mr.projectId, Mr.userId, Mr.sessionId, Mr.pageNum, Mr.upload, Mr.end]
    }

    function xr() {
        Or = []
    }

    function Tr(t) {
        if (Or && -1 === Or.indexOf(t.message)) {
            var e = u.report;
            if (e && e.length > 0) {
                var n = {
                    v: Mr.version,
                    p: Mr.projectId,
                    u: Mr.userId,
                    s: Mr.sessionId,
                    n: Mr.pageNum
                };
                t.message && (n.m = t.message), t.stack && (n.e = t.stack);
                var a = new XMLHttpRequest;
                a.open("POST", e), a.send(JSON.stringify(n)), Or.push(t.message)
            }
        }
        return t
    }

    function Dr(t) {
        return function() {
            var e = performance.now();
            try {
                t.apply(this, arguments)
            } catch (t) {
                throw Tr(t)
            }
            var n = performance.now() - e;
            x(4, n), n > 30 && (_(7), T(6, n))
        }
    }
    var Ir = [];

    function Cr(t, e, n, a) {
        void 0 === a && (a = !1), n = Dr(n);
        try {
            t[c("addEventListener")](e, n, a), Ir.push({
                event: e,
                target: t,
                listener: n,
                capture: a
            })
        } catch (t) {}
    }

    function jr() {
        for (var t = 0, e = Ir; t < e.length; t++) {
            var n = e[t];
            try {
                n.target[c("removeEventListener")](n.event, n.listener, n.capture)
            } catch (t) {}
        }
        Ir = []
    }
    var zr = null,
        Lr = null,
        Ar = null,
        Rr = 0;

    function Hr() {
        return !(Rr++ > 20) || (Ia(4, 0), !1)
    }

    function Yr() {
        Rr = 0, Ar !== Xr() && (ui(), window.setTimeout(Wr, 250))
    }

    function Wr() {
        oi(), T(29, 1)
    }

    function Xr() {
        return location.href ? location.href.replace(location.hash, "") : location.href
    }
    var qr = !1;

    function Pr() {
        qr = !0, s = performance.now(), St(), jr(), xr(), Ar = Xr(), Rr = 0, Cr(window, "popstate", Yr), null === zr && (zr = history.pushState, history.pushState = function() {
            zr.apply(this, arguments), Br() && Hr() && Yr()
        }), null === Lr && (Lr = history.replaceState, history.replaceState = function() {
            Lr.apply(this, arguments), Br() && Hr() && Yr()
        })
    }

    function Ur() {
        Ar = null, Rr = 0, xr(), jr(), St(), s = 0, qr = !1
    }

    function Br() {
        return qr
    }

    function Vr(t) {
        if (null === t || qr) return !1;
        for (var e in t) e in u && (u[e] = t[e]);
        return !0
    }

    function Fr() {
        oi(), O("clarity", "restart")
    }
    var Jr = Object.freeze({
        __proto__: null,
        start: function() {
            vt = [], T(26, navigator.webdriver ? 1 : 0), Cr(window, "error", _a), Na = {}, Da = {}
        },
        stop: function() {
            Da = {}
        }
    });

    function Gr() {
        return Q(this, void 0, void 0, (function() {
            var t, e;
            return $(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t = l(), Tt(e = {
                            id: fr(),
                            cost: 3
                        }), [4, Be(document, e, 0)];
                    case 1:
                        return n.sent(), [4, At(5, e, t)];
                    case 2:
                        return n.sent(), Dt(e), [2]
                }
            }))
        }))
    }
    var Zr = Object.freeze({
        __proto__: null,
        start: function() {
            Wt(), Xt(), ea(), Jn = null, Un = new WeakMap, Bn = {}, Vn = [], Fn = !!window.IntersectionObserver, On(),
                function() {
                    if (Ve = [], Ke = [], Qe = null, $e = 0, tn = {}, null === Je && (Je = CSSStyleSheet.prototype.insertRule, CSSStyleSheet.prototype.insertRule = function() {
                            return Br() && on(this.ownerNode), Je.apply(this, arguments)
                        }), null === Ge && (Ge = CSSStyleSheet.prototype.deleteRule, CSSStyleSheet.prototype.deleteRule = function() {
                            return Br() && on(this.ownerNode), Ge.apply(this, arguments)
                        }), null === Ze) {
                        Ze = Element.prototype.attachShadow;
                        try {
                            Element.prototype.attachShadow = function() {
                                return Br() ? on(Ze.apply(this, arguments)) : Ze.apply(this, arguments)
                            }
                        } catch (t) {
                            Ze = null
                        }
                    }
                }(), Nt(Gr, 1).then((function() {
                    Dr(Xt)(), Dr(Kn)()
                }))
        },
        stop: function() {
            ea(), Un = null, Bn = {}, Vn = [], Jn && (Jn.disconnect(), Jn = null), Fn = !1, Mn(),
                function() {
                    for (var t = 0, e = Ve; t < e.length; t++) {
                        var n = e[t];
                        n && n.disconnect()
                    }
                    Ve = [], tn = {}, Fe = [], Ke = [], $e = 0, Qe = null
                }(), Wt()
        }
    });
    var Kr, Qr = null;

    function $r() {
        Qr = null
    }

    function ti(t) {
        Qr = {
                fetchStart: Math.round(t.fetchStart),
                connectStart: Math.round(t.connectStart),
                connectEnd: Math.round(t.connectEnd),
                requestStart: Math.round(t.requestStart),
                responseStart: Math.round(t.responseStart),
                responseEnd: Math.round(t.responseEnd),
                domInteractive: Math.round(t.domInteractive),
                domComplete: Math.round(t.domComplete),
                loadEventStart: Math.round(t.loadEventStart),
                loadEventEnd: Math.round(t.loadEventEnd),
                redirectCount: Math.round(t.redirectCount),
                size: t.transferSize ? t.transferSize : 0,
                type: t.type,
                protocol: t.nextHopProtocol,
                encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
                decodedSize: t.decodedBodySize ? t.decodedBodySize : 0
            },
            function(t) {
                Q(this, void 0, void 0, (function() {
                    var e, n;
                    return $(this, (function(a) {
                        return e = l(), n = [e, t], 29 === t && (n.push(Qr.fetchStart), n.push(Qr.connectStart), n.push(Qr.connectEnd), n.push(Qr.requestStart), n.push(Qr.responseStart), n.push(Qr.responseEnd), n.push(Qr.domInteractive), n.push(Qr.domComplete), n.push(Qr.loadEventStart), n.push(Qr.loadEventEnd), n.push(Qr.redirectCount), n.push(Qr.size), n.push(Qr.type), n.push(Qr.protocol), n.push(Qr.encodedSize), n.push(Qr.decodedSize), $r(), ya(n, !1)), [2]
                    }))
                }))
            }(29)
    }
    var ei = ["navigation", "resource", "longtask", "first-input", "layout-shift", "largest-contentful-paint"];

    function ni() {
        try {
            Kr && Kr.disconnect(), Kr = new PerformanceObserver(Dr(ai));
            for (var t = 0, e = ei; t < e.length; t++) {
                var n = e[t];
                PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 && ("layout-shift" === n && x(9, 0), Kr.observe({
                    type: n,
                    buffered: !0
                }))
            }
        } catch (t) {
            Ia(3, 1)
        }
    }

    function ai(t) {
        ! function(t) {
            for (var e = (!("visibilityState" in document) || "visible" === document.visibilityState), n = 0; n < t.length; n++) {
                var a = t[n];
                switch (a.entryType) {
                    case "navigation":
                        ti(a);
                        break;
                    case "resource":
                        var r = a.name;
                        ar(4, ri(r)), r !== u.upload && r !== u.fallback || T(28, a.duration);
                        break;
                    case "longtask":
                        _(7);
                        break;
                    case "first-input":
                        e && T(10, a.processingStart - a.startTime);
                        break;
                    case "layout-shift":
                        e && !a.hadRecentInput && x(9, 1e3 * a.value);
                        break;
                    case "largest-contentful-paint":
                        e && T(8, a.startTime)
                }
            }
            performance && "memory" in performance && performance.memory.usedJSHeapSize && T(30, Math.abs(performance.memory.usedJSHeapSize / 1048576))
        }(t.getEntries())
    }

    function ri(t) {
        var e = document.createElement("a");
        return e.href = t, e.hostname
    }
    var ii = [Jr, Zr, Le, Object.freeze({
        __proto__: null,
        start: function() {
            $r(),
                function() {
                    window.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? "complete" !== document.readyState ? Cr(window, "load", D.bind(this, ni, 0)) : ni() : Ia(3, 0)
                }()
        },
        stop: function() {
            Kr && Kr.disconnect(), Kr = null, $r()
        }
    })];

    function oi(t) {
        void 0 === t && (t = null),
            function() {
                try {
                    return !1 === qr && "undefined" != typeof Promise && window.MutationObserver && document.createTreeWalker && "now" in Date && "now" in performance && "undefined" != typeof WeakMap
                } catch (t) {
                    return !1
                }
            }() && (Vr(t), Pr(), rt(), ii.forEach((function(t) {
                return Dr(t.start)()
            })))
    }

    function ui() {
        Br() && (ii.slice().reverse().forEach((function(t) {
            return Dr(t.stop)()
        })), it(), Ur())
    }
    var ci = Object.freeze({
        __proto__: null,
        version: d,
        start: oi,
        pause: function() {
            Br() && (O("clarity", "pause"), null === Ot && (Ot = new Promise((function(t) {
                Mt = t
            }))))
        },
        resume: function() {
            Br() && (Ot && (Mt(), Ot = null, null === Et && _t()), O("clarity", "resume"))
        },
        stop: ui,
        consent: hr,
        event: O,
        identify: J,
        set: F,
        upgrade: U,
        metadata: dr
    });
    ! function() {
        if ("undefined" != typeof window) {
            var t = window,
                e = "clarity";
            if (t[e] && t[e].v) return console.warn("Error CL001: Multiple Clarity tags detected.");
            var n = t[e] && t[e].q || [];
            for (t[e] = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    return ci[t].apply(ci, e)
                }, t[e].v = d; n.length > 0;) t[e].apply(t, n.shift())
        }
    }()
}();