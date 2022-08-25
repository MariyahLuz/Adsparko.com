// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "158",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__dee"
            }],
            "tags": [{
                "function": "__asprv",
                "vtp_globalName": "google_optimize",
                "vtp_listenForMutations": false,
                "tag_id": 13
            }, {
                "function": "__asprv",
                "tag_id": 14
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": ["macro", 1]
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "optimize.callback"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ],
                [
                    ["if", 1],
                    ["add", 1]
                ]
            ]
        },
        "runtime": []




    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var h, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ca;
    if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
    else {
        var da;
        a: {
            var ea = {
                    a: !0
                },
                fa = {};
            try {
                fa.__proto__ = ea;
                da = fa.a;
                break a
            } catch (a) {}
            da = !1
        }
        ca = da ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ha = ca,
        ia = function(a, b) {
            a.prototype = ba(b.prototype);
            a.prototype.constructor = a;
            if (ha) ha(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.ik = b.prototype
        },
        ja = this || self,
        ka = function(a) {
            return a
        };
    var ma = function() {},
        na = function(a) {
            return "function" === typeof a
        },
        k = function(a) {
            return "string" === typeof a
        },
        oa = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        pa = Array.isArray,
        qa = function(a, b) {
            if (a && pa(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        ra = function(a, b) {
            if (!oa(a) || !oa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        ua = function(a, b) {
            for (var c = new sa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        z = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        wa = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        xa = function(a) {
            return Math.round(Number(a)) || 0
        },
        ya = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        za = function(a) {
            var b = [];
            if (pa(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Aa = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ba = function() {
            return new Date(Date.now())
        },
        F = function() {
            return Ba().getTime()
        },
        sa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    sa.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    sa.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Da = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ea = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Fa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ga = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ha = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Ia = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Ja = /^\w{1,9}$/,
        Ka = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            z(a, function(d, e) {
                Ja.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Ma = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Na, Oa = function() {
        if (void 0 === Na) {
            var a = null,
                b = ja.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ka,
                        createScript: ka,
                        createScriptURL: ka
                    })
                } catch (c) {
                    ja.console && ja.console.error(c.message)
                }
                Na = a
            } else Na = a
        }
        return Na
    };
    var Qa = function(a, b) {
        this.h = b === Pa ? a : ""
    };
    Qa.prototype.toString = function() {
        return this.h + ""
    };
    var Pa = {};
    var Ra = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Sa() {
        var a = ja.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function Ta(a) {
        return -1 != Sa().indexOf(a)
    };

    function Ua() {
        return Ta("Firefox") || Ta("FxiOS")
    }

    function Va() {
        return (Ta("Chrome") || Ta("CriOS")) && !Ta("Edge") || Ta("Silk")
    };
    var Wa = {},
        Xa = function(a, b) {
            this.h = b === Wa ? a : ""
        };
    Xa.prototype.toString = function() {
        return this.h.toString()
    };
    var Ya = function(a) {
            return a instanceof Xa && a.constructor === Xa ? a.h : "type_error:SafeHtml"
        },
        Za = function(a) {
            var b = a,
                c = Oa(),
                d = c ? c.createHTML(b) : b;
            return new Xa(d, Wa)
        };

    function $a(a) {
        if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
        if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
    };
    var G = window,
        I = document,
        ab = navigator,
        bb = I.currentScript && I.currentScript.src,
        cb = function(a, b) {
            var c = G[a];
            G[a] = void 0 === c ? b : c;
            return G[a]
        },
        db = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        eb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        fb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function gb(a, b, c) {
        b && z(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var hb = function(a, b, c, d, e) {
            var f = I.createElement("script");
            gb(f, d, eb);
            f.type = "text/javascript";
            f.async = !0;
            var g, l = a,
                m = Oa(),
                n = m ? m.createScriptURL(l) : l;
            g = new Qa(n, Pa);
            f.src = g instanceof Qa && g.constructor === Qa ? g.h : "type_error:TrustedResourceUrl";
            var p, q, r, u = null == (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : r.call(q, "script[nonce]");
            (p = u ? u.nonce || u.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            db(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var t =
                    I.getElementsByTagName("script")[0] || I.body || I.head;
                t.parentNode.insertBefore(f, t)
            }
            return f
        },
        ib = function() {
            if (bb) {
                var a = bb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        jb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                l = !1;
            g || (g = I.createElement("iframe"), l = !0);
            gb(g, c, fb);
            d && z(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (l) {
                var m = I.body && I.body.lastChild || I.body || I.head;
                m.parentNode.insertBefore(g, m)
            }
            db(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        kb = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        lb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        mb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        M = function(a) {
            G.setTimeout(a, 0)
        },
        nb = function(a, b) {
            return a && b && a.attributes &&
                a.attributes[b] ? a.attributes[b].value : null
        },
        ob = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        pb = function(a) {
            var b = I.createElement("div"),
                c = b,
                d = Za("A<div>" + a + "</div>");
            void 0 !== c.tagName && $a(c);
            c.innerHTML = Ya(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        qb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f &&
                g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        rb = function(a) {
            var b;
            try {
                b = ab.sendBeacon && ab.sendBeacon(a)
            } catch (c) {}
            b || kb(a)
        },
        sb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var tb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        ub = function(a) {
            if (null == a) return String(a);
            var b = tb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        vb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        wb = function(a) {
            if (!a || "object" != ub(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !vb(a, "constructor") && !vb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || vb(a, b)
        },
        O = function(a, b) {
            var c = b || ("array" == ub(a) ? [] : {}),
                d;
            for (d in a)
                if (vb(a, d)) {
                    var e = a[d];
                    "array" == ub(e) ? ("array" != ub(c[d]) && (c[d] = []), c[d] = O(e, c[d])) : wb(e) ? (wb(c[d]) || (c[d] = {}), c[d] = O(e, c[d])) : c[d] = e
                }
            return c
        };
    var xb = function(a) {
        if (void 0 === a || pa(a) || wb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var yb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Ah: a("consent"),
            Bh: a("consent_always_fire"),
            Cf: a("convert_case_to"),
            Df: a("convert_false_to"),
            Ef: a("convert_null_to"),
            Ff: a("convert_true_to"),
            Gf: a("convert_undefined_to"),
            Wj: a("debug_mode_metadata"),
            xb: a("function"),
            Oe: a("instance_name"),
            ni: a("live_only"),
            oi: a("malware_disabled"),
            ri: a("metadata"),
            vi: a("original_activity_id"),
            Zj: a("original_vendor_template_id"),
            Yj: a("once_on_load"),
            ui: a("once_per_event"),
            Dg: a("once_per_load"),
            bk: a("priority_override"),
            ck: a("respected_consent_types"),
            Hg: a("setup_tags"),
            Ig: a("tag_id"),
            Jg: a("teardown_tags")
        }
    }();
    var Vb;
    var Wb = [],
        Xb = [],
        Yb = [],
        Zb = [],
        $b = [],
        ac = {},
        bc, dc, ec, fc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = ac[c],
                f = {},
                g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_")) e && d && d.Og && d.Og(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
                    else if (g === yb.Bh.toString() && a[g]) {}
            e && d && d.Ng && (f.vtp_gtmCachedValues = d.Ng);
            if (b) {
                if (null == b.name) {
                    var l;
                    a: {
                        var m = b.index;
                        if (null == m) l = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = Wb[m];
                                    break;
                                case 1:
                                    n = Zb[m];
                                    break;
                                default:
                                    l = "";
                                    break a
                            }
                            var p = n && n[yb.Oe];
                            l = p ? String(p) : ""
                        }
                    }
                    b.name = l
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : Vb(c, f, b)
        },
        hc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = gc(a[e], b, c));
            return d
        },
        gc = function(a, b, c) {
            if (pa(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e <
                            a.length; e++) d.push(gc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = Wb[f];
                        if (!g || b.cf(g)) return;
                        c[f] = !0;
                        var l = String(g[yb.Oe]);
                        try {
                            var m = hc(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = fc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            ec && (d = ec.Ji(d, m))
                        } catch (w) {
                            b.dh && b.dh(w, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[gc(a[n], b, c)] = gc(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = gc(a[q],
                                b, c);
                            dc && (p = p || r === dc.Kd);
                            d.push(r)
                        }
                        return dc && p ? dc.Ki(d) : d.join("");
                    case "escape":
                        d = gc(a[1], b, c);
                        if (dc && pa(a[1]) && "macro" === a[1][0] && dc.ij(a)) return dc.zj(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) zb[a[u]] && (d = zb[a[u]](d));
                        return d;
                    case "tag":
                        var t = a[1];
                        if (!Zb[t]) throw Error("Unable to resolve tag reference " + t + ".");
                        return d = {
                            Ug: a[2],
                            index: t
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var y = ic(v, b, c),
                            x = !!a[4];
                        return x || 2 !== y ? x !== (1 === y) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " +
                            a[0] + ".");
                }
            }
            return a
        },
        ic = function(a, b, c) {
            try {
                return bc(hc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var lc = function(a) {
            function b(r) {
                for (var u = 0; u < r.length; u++) d[r[u]] = !0
            }
            for (var c = [], d = [], e = jc(a), f = 0; f < Xb.length; f++) {
                var g = Xb[f],
                    l = kc(g, e);
                if (l) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === l && b(g.block || []);
            }
            for (var p = [], q = 0; q < Zb.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        kc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var l = b(f[g]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        jc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = ic(Yb[c], a));
                return b[c]
            }
        };
    var mc = {
        Ji: function(a, b) {
            b[yb.Cf] && "string" === typeof a && (a = 1 == b[yb.Cf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(yb.Ef) && null === a && (a = b[yb.Ef]);
            b.hasOwnProperty(yb.Gf) && void 0 === a && (a = b[yb.Gf]);
            b.hasOwnProperty(yb.Ff) && !0 === a && (a = b[yb.Ff]);
            b.hasOwnProperty(yb.Df) && !1 === a && (a = b[yb.Df]);
            return a
        }
    };

    var Lc = function(a) {
            return Kc ? I.querySelectorAll(a) : null
        },
        Mc = function(a, b) {
            if (!Kc) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!I.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Nc = !1;
    if (I.querySelectorAll) try {
        var Oc = I.querySelectorAll(":root");
        Oc && 1 == Oc.length && Oc[0] == I.documentElement && (Nc = !0)
    } catch (a) {}
    var Kc = Nc;
    var Pc = {},
        Qc = function(a, b) {
            Pc[a] = Pc[a] || [];
            Pc[a][b] = !0
        },
        Rc = function(a) {
            for (var b = [], c = Pc[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        },
        Sc = function() {
            for (var a = [], b = Pc.GA4_EVENT || [], c = 0; c < b.length; c++) b[c] && a.push(c);
            return 0 < a.length ? a : void 0
        };
    var U = function(a) {
        Qc("GTM", a)
    };
    var V = {
            g: {
                D: "ad_storage",
                O: "analytics_storage",
                zf: "region",
                Af: "consent_updated",
                Bf: "wait_for_update",
                Eh: "app_remove",
                Fh: "app_store_refund",
                Gh: "app_store_subscription_cancel",
                Hh: "app_store_subscription_convert",
                Ih: "app_store_subscription_renew",
                If: "add_payment_info",
                Jh: "add_shipping_info",
                Hb: "add_to_cart",
                Ib: "remove_from_cart",
                Kh: "view_cart",
                qb: "begin_checkout",
                oe: "select_item",
                rb: "view_item_list",
                pe: "select_promotion",
                Jb: "view_promotion",
                ra: "purchase",
                Kb: "refund",
                Ca: "view_item",
                Jf: "add_to_wishlist",
                Lh: "first_open",
                Mh: "first_visit",
                sa: "gtag.config",
                Da: "gtag.get",
                Nh: "in_app_purchase",
                sc: "page_view",
                Oh: "session_start",
                qe: "user_engagement",
                Lb: "gclid",
                ca: "ads_data_redaction",
                U: "allow_ad_personalization_signals",
                se: "allow_custom_scripts",
                Ph: "allow_display_features",
                uc: "allow_enhanced_conversions",
                vc: "allow_google_signals",
                va: "allow_interest_groups",
                pd: "auid",
                Qh: "auto_detection_enabled",
                Va: "aw_remarketing",
                qd: "aw_remarketing_only",
                wc: "discount",
                xc: "aw_feed_country",
                yc: "aw_feed_language",
                V: "items",
                zc: "aw_merchant_id",
                Kf: "aw_basket_type",
                rd: "campaign_content",
                sd: "campaign_id",
                ud: "campaign_medium",
                vd: "campaign_name",
                Ac: "campaign",
                wd: "campaign_source",
                xd: "campaign_term",
                Wa: "client_id",
                Rh: "content_group",
                Sh: "content_type",
                Ea: "conversion_cookie_prefix",
                Bc: "conversion_id",
                Xa: "conversion_label",
                ma: "conversion_linker",
                te: "conversion_api",
                na: "cookie_domain",
                wa: "cookie_expires",
                Ja: "cookie_flags",
                Mb: "cookie_name",
                jb: "cookie_path",
                Fa: "cookie_prefix",
                sb: "cookie_update",
                Nb: "country",
                ka: "currency",
                Cc: "customer_lifetime_value",
                Dc: "custom_map",
                Th: "debug_mode",
                W: "developer_id",
                Lf: "disable_merchant_reported_purchases",
                Uh: "dc_custom_params",
                Vh: "dc_natural_search",
                ue: "dynamic_event_settings",
                Wh: "affiliation",
                Mf: "checkout_option",
                Nf: "checkout_step",
                Xh: "coupon",
                ve: "list_name",
                Yh: "promotions",
                Ec: "shipping",
                Of: "tax",
                yd: "engagement_time_msec",
                Fc: "enhanced_client_id",
                Gc: "enhanced_conversions",
                Pf: "enhanced_conversions_automatic_settings",
                Qf: "enhanced_conversions_mode",
                Hc: "estimated_delivery_date",
                we: "euid_logged_in_state",
                Ob: "event_callback",
                Pb: "event_developer_id_string",
                Rf: "event",
                zd: "event_settings",
                Ad: "event_timeout",
                Zh: "experiments",
                xe: "firebase_id",
                Ic: "first_party_collection",
                Bd: "_x_20",
                tb: "_x_19",
                Sf: "fledge",
                Tf: "gac_gclid",
                Cd: "gac_wbraid",
                Uf: "gac_wbraid_multiple_conversions",
                Jc: "ga_restrict_domain",
                ye: "ga_temp_client_id",
                Vf: "gdpr_applies",
                Wf: "geo_granularity",
                Ya: "value_callback",
                Pa: "value_key",
                Qb: "global_developer_id_string",
                Xj: "google_ono",
                kb: "google_signals",
                Dd: "google_tld",
                Ed: "groups",
                Xf: "gsa_experiment_id",
                Yf: "iframe_state",
                Fd: "ignore_referrer",
                ze: "internal_traffic_results",
                Zf: "is_passthrough",
                Ka: "language",
                Ae: "legacy_developer_id_string",
                oa: "linker",
                Rb: "accept_incoming",
                Sb: "decorate_forms",
                P: "domains",
                Kc: "url_position",
                ag: "method",
                Tb: "new_customer",
                cg: "non_interaction",
                ai: "optimize_id",
                La: "page_location",
                Be: "page_path",
                Qa: "page_referrer",
                Ub: "page_title",
                dg: "passengers",
                eg: "phone_conversion_callback",
                bi: "phone_conversion_country_code",
                fg: "phone_conversion_css_class",
                ci: "phone_conversion_ids",
                gg: "phone_conversion_number",
                hg: "phone_conversion_options",
                ig: "quantity",
                Gd: "redact_device_info",
                jg: "redact_enhanced_user_id",
                di: "redact_ga_client_id",
                ei: "redact_user_id",
                Hd: "referral_exclusion_definition",
                lb: "restricted_data_processing",
                fi: "retoken",
                kg: "screen_name",
                ub: "screen_resolution",
                gi: "search_term",
                qa: "send_page_view",
                vb: "send_to",
                Vb: "session_duration",
                Ce: "session_engaged",
                Id: "session_engaged_time",
                wb: "session_id",
                De: "session_number",
                Wb: "delivery_postal_code",
                lg: "tc_privacy_string",
                mg: "temporary_client_id",
                hi: "tracking_id",
                Ee: "traffic_type",
                Ga: "transaction_id",
                Z: "transport_url",
                ng: "trip_type",
                Lc: "update",
                Za: "url_passthrough",
                Fe: "_user_agent_architecture",
                Ge: "_user_agent_bitness",
                He: "_user_agent_full_version_list",
                og: "_user_agent_mobile",
                Ie: "_user_agent_model",
                Je: "_user_agent_platform",
                Ke: "_user_agent_platform_version",
                Le: "_user_agent_wow64",
                xa: "user_data",
                pg: "user_data_auto_latency",
                qg: "user_data_auto_meta",
                rg: "user_data_auto_multi",
                sg: "user_data_auto_selectors",
                ug: "user_data_auto_status",
                Xb: "user_data_settings",
                ya: "user_id",
                Ma: "user_properties",
                vg: "us_privacy_string",
                ia: "value",
                Jd: "wbraid",
                wg: "wbraid_multiple_conversions",
                yg: "_host_name",
                zg: "_in_page_command",
                Ag: "_is_linker_valid",
                Bg: "_is_passthrough_cid",
                Cg: "non_personalized_ads"
            }
        },
        md = {},
        nd = Object.freeze((md[V.g.U] = 1, md[V.g.uc] = 1, md[V.g.vc] = 1, md[V.g.V] = 1, md[V.g.na] = 1, md[V.g.wa] = 1, md[V.g.Ja] = 1, md[V.g.Mb] = 1, md[V.g.jb] = 1, md[V.g.Fa] = 1, md[V.g.sb] = 1, md[V.g.Dc] = 1, md[V.g.W] = 1, md[V.g.ue] = 1, md[V.g.Ob] = 1, md[V.g.zd] = 1, md[V.g.Ad] = 1, md[V.g.Ic] = 1, md[V.g.Jc] = 1, md[V.g.kb] = 1, md[V.g.Dd] =
            1, md[V.g.Ed] = 1, md[V.g.ze] = 1, md[V.g.oa] = 1, md[V.g.Hd] = 1, md[V.g.lb] = 1, md[V.g.qa] = 1, md[V.g.vb] = 1, md[V.g.Vb] = 1, md[V.g.Id] = 1, md[V.g.Wb] = 1, md[V.g.Z] = 1, md[V.g.Lc] = 1, md[V.g.Xb] = 1, md[V.g.Ma] = 1, md)),
        od = Object.freeze([V.g.La, V.g.Qa, V.g.Ub, V.g.Ka, V.g.kg, V.g.ya, V.g.xe, V.g.Rh]),
        pd = {},
        qd = Object.freeze((pd[V.g.Eh] = 1, pd[V.g.Fh] = 1, pd[V.g.Gh] = 1, pd[V.g.Hh] = 1, pd[V.g.Ih] = 1, pd[V.g.Lh] = 1, pd[V.g.Mh] = 1, pd[V.g.Nh] = 1, pd[V.g.Oh] = 1, pd[V.g.qe] = 1, pd)),
        rd = {},
        sd = Object.freeze((rd[V.g.If] = 1, rd[V.g.Jh] = 1, rd[V.g.Hb] = 1, rd[V.g.Ib] = 1, rd[V.g.Kh] =
            1, rd[V.g.qb] = 1, rd[V.g.oe] = 1, rd[V.g.rb] = 1, rd[V.g.pe] = 1, rd[V.g.Jb] = 1, rd[V.g.ra] = 1, rd[V.g.Kb] = 1, rd[V.g.Ca] = 1, rd[V.g.Jf] = 1, rd)),
        td = Object.freeze([V.g.U, V.g.vc, V.g.sb]),
        ud = Object.freeze([].concat(td)),
        vd = Object.freeze([V.g.wa, V.g.Ad, V.g.Vb, V.g.Id, V.g.yd]),
        wd = Object.freeze([].concat(vd)),
        xd = {},
        yd = (xd[V.g.D] = "1", xd[V.g.O] = "2", xd),
        zd = {},
        Ad = Object.freeze((zd[V.g.U] = 1, zd[V.g.uc] = 1, zd[V.g.va] = 1, zd[V.g.Va] = 1, zd[V.g.qd] = 1, zd[V.g.wc] = 1, zd[V.g.xc] = 1, zd[V.g.yc] = 1, zd[V.g.V] = 1, zd[V.g.zc] = 1, zd[V.g.Ea] = 1, zd[V.g.ma] =
            1, zd[V.g.na] = 1, zd[V.g.wa] = 1, zd[V.g.Ja] = 1, zd[V.g.Fa] = 1, zd[V.g.ka] = 1, zd[V.g.Cc] = 1, zd[V.g.W] = 1, zd[V.g.Lf] = 1, zd[V.g.Gc] = 1, zd[V.g.Hc] = 1, zd[V.g.xe] = 1, zd[V.g.Ic] = 1, zd[V.g.Ka] = 1, zd[V.g.Tb] = 1, zd[V.g.La] = 1, zd[V.g.Qa] = 1, zd[V.g.eg] = 1, zd[V.g.fg] = 1, zd[V.g.gg] = 1, zd[V.g.hg] = 1, zd[V.g.lb] = 1, zd[V.g.qa] = 1, zd[V.g.vb] = 1, zd[V.g.Wb] = 1, zd[V.g.Ga] = 1, zd[V.g.Z] = 1, zd[V.g.Lc] = 1, zd[V.g.Za] = 1, zd[V.g.xa] = 1, zd[V.g.ya] = 1, zd[V.g.ia] = 1, zd));
    Object.freeze(V.g);
    var Bd = {},
        Cd = G.google_tag_manager = G.google_tag_manager || {},
        Dd = Math.random();
    Bd.Od = "8h0";
    Bd.ba = "dataLayer";
    Bd.Dh = "";
    var Ed = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        Hd = {
            __paused: !0,
            __tg: !0
        },
        Id;
    for (Id in Ed) Ed.hasOwnProperty(Id) && (Hd[Id] = !0);
    Bd.qc = "www.googletagmanager.com";
    var Jd, Kd = Bd.qc + "/gtm.js";
    Jd = Kd;
    var Ld = ya(""),
        Md = ya(""),
        Nd = null,
        Od = null,
        Pd = {},
        Qd = {},
        Rd = function() {
            var a = Cd.sequence || 1;
            Cd.sequence = a + 1;
            return a
        };
    Bd.Ch = "";
    var Sd = "";
    Bd.Pd = Sd;
    var Td = new sa,
        Ud = {},
        Vd = {},
        Yd = {
            name: Bd.ba,
            set: function(a, b) {
                O(Ia(a, b), Ud);
                Wd()
            },
            get: function(a) {
                return Xd(a, 2)
            },
            reset: function() {
                Td = new sa;
                Ud = {};
                Wd()
            }
        },
        Xd = function(a, b) {
            return 2 != b ? Td.get(a) : Zd(a)
        },
        Zd = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Ud, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        $d = function(a, b) {
            Vd.hasOwnProperty(a) || (Td.set(a, b), O(Ia(a, b), Ud), Wd())
        },
        Wd = function(a) {
            z(Vd, function(b, c) {
                Td.set(b, c);
                O(Ia(b), Ud);
                O(Ia(b,
                    c), Ud);
                a && delete Vd[b]
            })
        },
        ae = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Zd(a) : Td.get(a);
            "array" === ub(d) || "object" === ub(d) ? c = O(d) : c = d;
            return c
        };
    var be, ce = !1,
        de = function(a) {
            if (!ce) {
                ce = !0;
                be = be || {}
            }
            return be[a]
        };
    var ee = function() {
            var a = G.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        fe = function(a) {
            if (I.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !G.getComputedStyle) return !0;
            var c = G.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var l = g.indexOf("opacity(");
                    0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = G.getComputedStyle(d, null))
            }
            return !1
        };
    var oe = /:[0-9]+$/,
        pe = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        se = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = qe(a.protocol) || qe(G.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : G.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" ===
                b && (a.hostname = (a.hostname || G.location.hostname).replace(oe, "").toLowerCase());
            return re(a, b, c, d, e)
        },
        re = function(a, b, c, d, e) {
            var f, g = qe(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = te(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(oe, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Qc("TAGGING",
                        1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = pe(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        qe = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        te = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        ue = function(a) {
            var b = I.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Qc("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(oe, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        ve = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = ue(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                l = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === l[0] && (l = l.substring(1));
            g = c(g);
            l = c(l);
            "" !== g && (g = "?" + g);
            "" !== l && (l = "#" + l);
            var m = "" + f + g + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        };
    var we = {};
    var $e = {},
        af = function(a, b) {
            if (G._gtmexpgrp && G._gtmexpgrp.hasOwnProperty(a)) return G._gtmexpgrp[a];
            void 0 === $e[a] && ($e[a] = Math.floor(Math.random() * b));
            return $e[a]
        };
    var cf = {
        Qg: "",
        Fj: ""
    };
    var df = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var ef = function(a) {
        ef[" "](a);
        return a
    };
    ef[" "] = function() {};
    var gf = function() {
        var a = ff,
            b = "af";
        if (a.af && a.hasOwnProperty(b)) return a.af;
        var c = new a;
        return a.af = c
    };
    var ff = function() {
        var a = {};
        this.h = function() {
            var b = df.h,
                c = df.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.m = function() {
            a[df.h] = !0
        }
    };
    var hf = [];

    function jf() {
        var a = cb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: kf,
            update: lf,
            addListener: mf,
            notifyListeners: nf,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function kf(a, b, c, d, e, f) {
        var g = jf();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var l = g.entries,
                m = l[a] || {},
                n = m.region,
                p = c && k(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    r = {
                        region: p,
                        initial: "granted" === b,
                        update: m.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== m.initial) l[a] = r;
                q && G.setTimeout(function() {
                    l[a] === r && r.quiet && (r.quiet = !1, of (a), nf(), Qc("TAGGING",
                        2))
                }, f)
            }
        }
    }

    function lf(a, b) {
        var c = jf();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = pf(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = pf(c, a);
            f.quiet ? (f.quiet = !1, of (a)) : g !== d && of (a)
        }
    }

    function mf(a, b) {
        hf.push({
            Te: a,
            Qi: b
        })
    }

    function of (a) {
        for (var b = 0; b < hf.length; ++b) {
            var c = hf[b];
            pa(c.Te) && -1 !== c.Te.indexOf(a) && (c.ih = !0)
        }
    }

    function nf(a, b) {
        for (var c = 0; c < hf.length; ++c) {
            var d = hf[c];
            if (d.ih) {
                d.ih = !1;
                try {
                    d.Qi({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function pf(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
    var qf = function(a) {
            var b = jf();
            b.accessedAny = !0;
            return pf(b, a)
        },
        rf = function(a) {
            var b = jf();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        sf = function(a) {
            var b = jf();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        tf = function() {
            if (!gf().h()) return !1;
            var a = jf();
            a.accessedAny = !0;
            return a.active
        },
        uf = function() {
            var a = jf();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        vf = function(a, b) {
            jf().addListener(a, b)
        },
        wf = function(a, b) {
            jf().notifyListeners(a, b)
        },
        xf = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!sf(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                vf(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        yf = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var l = d[g];
                    !1 === qf(l) || e[l] || (f.push(l), e[l] = !0)
                }
                return f
            }
            var d = k(b) ? [b] : b,
                e = {};
            c().length !== d.length && vf(d, function(f) {
                var g = c();
                0 < g.length && (f.Te = g, a(f))
            })
        };

    function zf() {}

    function Af() {};

    function Bf(a) {
        for (var b = [], c = 0; c < Cf.length; c++) {
            var d = a(Cf[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Cf = [V.g.D, V.g.O],
        Df = function(a) {
            var b = a[V.g.zf];
            b && U(40);
            var c = a[V.g.Bf];
            c && U(41);
            for (var d = pa(b) ? b : [b], e = {
                    mc: 0
                }; e.mc < d.length; e = {
                    mc: e.mc
                }, ++e.mc) z(a, function(f) {
                return function(g, l) {
                    if (g !== V.g.zf && g !== V.g.Bf) {
                        var m = d[f.mc],
                            n = cf.Qg,
                            p = cf.Fj;
                        jf().set(g, l, m, n, p, c)
                    }
                }
            }(e))
        },
        Ef = 0,
        Ff = function(a, b) {
            z(a, function(e, f) {
                jf().update(e, f)
            });
            wf(b.eventId, b.priorityId);
            var c = F(),
                d = c - Ef;
            Ef && 0 <= d && 1E3 > d && U(66);
            Ef = c
        },
        Gf = function(a) {
            var b = qf(a);
            return void 0 != b ? b : !0
        },
        Hf = function() {
            return "G1" + Bf(qf)
        },
        If = function(a,
            b) {
            yf(a, b)
        },
        Jf = function(a, b) {
            xf(a, b)
        };
    var Kf = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Lf = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                l = g[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var Mf = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Nf = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function Of(a) {
        return "null" !== a.origin
    };
    var Rf = function(a, b, c, d) {
            return Pf(d) ? Lf(a, String(b || Qf()), c) : []
        },
        Uf = function(a, b, c, d, e) {
            if (Pf(e)) {
                var f = Sf(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Tf(f, function(g) {
                        return g.Vd
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Tf(f, function(g) {
                        return g.ad
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Vf(a, b, c, d) {
        var e = Qf(),
            f = window;
        Of(f) && (f.document.cookie = a);
        var g = Qf();
        return e != g || void 0 != c && 0 <= Rf(b, g, !1, d).indexOf(c)
    }
    var Zf = function(a, b, c) {
            function d(u, t, v) {
                if (null == v) return delete g[t], u;
                g[t] = v;
                return u + "; " + t + "=" + v
            }

            function e(u, t) {
                if (null == t) return delete g[t], u;
                g[t] = !0;
                return u + "; " + t
            }
            if (!Pf(c.Sa)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Wf(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.fk);
            f = d(f, "samesite",
                c.gk);
            c.hk && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = Xf(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        r = d(f, "domain", q);
                    r = e(r, c.flags);
                    if (!Yf(q, c.path) && Vf(r, a, b, c.Sa)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Yf(m, c.path) ? 1 : Vf(f, a, b, c.Sa) ? 0 : 1
        },
        $f = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Zf(a, b, c)
        };

    function Tf(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var l = a[g],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function Sf(a, b, c) {
        for (var d = [], e = Rf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                l = g.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    Vd: 1 * m[0] || 1,
                    ad: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Wf = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        ag = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        bg = /(^|\.)doubleclick\.net$/i,
        Yf = function(a, b) {
            return bg.test(window.document.location.hostname) || "/" === b && ag.test(a)
        },
        Qf = function() {
            return Of(window) ? window.document.cookie : ""
        },
        Xf = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            bg.test(e) || ag.test(e) || a.push("none");
            return a
        },
        Pf = function(a) {
            if (!gf().h() || !a || !tf()) return !0;
            if (!sf(a)) return !1;
            var b = qf(a);
            return null == b ? !0 : !!b
        };
    var cg = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ Kf(a) & 2147483647) : String(b)
        },
        dg = function(a) {
            return [cg(a), Math.round(F() / 1E3)].join(".")
        },
        gg = function(a, b, c, d, e) {
            var f = eg(b);
            return Uf(a, f, fg(c), d, e)
        },
        hg = function(a, b, c, d) {
            var e = "" + eg(c),
                f = fg(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        eg = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        fg = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };
    var ig = function() {
        Cd.dedupe_gclid || (Cd.dedupe_gclid = "" + dg());
        return Cd.dedupe_gclid
    };
    var jg = function() {
        var a = !1;
        return a
    };
    var kg = {
            K: "GTM-P3B33MM",
            oc: ""
        },
        lg = {
            fh: "GTM-P3B33MM",
            gh: "GTM-P3B33MM"
        },
        ug = function() {
            return lg.fh ? lg.fh.split("|") : [kg.K]
        },
        vg = function() {
            if (lg.gh) return lg.gh.split("|");
            U(84);
            return []
        },
        wg = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        yg = function(a) {
            return xg().container.hasOwnProperty(a)
        };

    function xg() {
        var a = Cd.tidr;
        a || (a = new wg, Cd.tidr = a);
        return a
    }
    var zg;
    if (3 === Bd.Od.length) zg = "g";
    else {
        var Ag = "G";
        zg = Ag
    }
    var Bg = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            GT: "t",
            HA: "h",
            MC: "m",
            GTM: zg,
            OPT: "o"
        },
        Cg = function(a) {
            var b = kg.K.split("-"),
                c = b[0].toUpperCase(),
                d = Bg[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === Bd.Od.length) {
                var g = "w";
                g = "z";
                f = "2" + g
            } else f = "";
            return f + d + Bd.Od + e
        };

    function Dg(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Eg = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function Fg() {
        return Ta("iPhone") && !Ta("iPod") && !Ta("iPad")
    }

    function Gg() {
        Fg() || Ta("iPad") || Ta("iPod")
    };
    Ta("Opera");
    Ta("Trident") || Ta("MSIE");
    Ta("Edge");
    !Ta("Gecko") || -1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") || Ta("Trident") || Ta("MSIE") || Ta("Edge"); - 1 != Sa().toLowerCase().indexOf("webkit") && !Ta("Edge") && Ta("Mobile");
    Ta("Macintosh");
    Ta("Windows");
    Ta("Linux") || Ta("CrOS");
    var Hg = ja.navigator || null;
    Hg && (Hg.appVersion || "").indexOf("X11");
    Ta("Android");
    Fg();
    Ta("iPad");
    Ta("iPod");
    Gg();
    Sa().toLowerCase().indexOf("kaios");
    var Ig = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        Jg = /#|$/,
        Kg = function(a, b) {
            var c = a.search(Jg),
                d = Ig(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        Lg = /[?&]($|#)/,
        Mg = function(a, b, c) {
            for (var d, e = a.search(Jg), f = 0, g, l = []; 0 <= (g = Ig(a, f, b, e));) l.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(Lg, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var u = d.indexOf("?"),
                    t;
                0 > u || u > r ? (u = r, t = "") : t = d.substring(u + 1, r);
                q = [d.slice(0, u), t, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };

    function Ng(a) {
        if (!a || !I.head) return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        I.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var Og = function() {
        if (G.top == G) return 0;
        var a = G.location.ancestorOrigins;
        if (a) return a[a.length - 1] == G.location.origin ? 1 : 2;
        var b;
        var c = G.top;
        try {
            var d;
            if (d = !!c && null != c.location.href) b: {
                try {
                    ef(c.foo);
                    d = !0;
                    break b
                } catch (e) {}
                d = !1
            }
            b = d
        } catch (e) {
            b = !1
        }
        return b ? 1 : 2
    };
    var Pg = function() {};
    var Qg = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Rg = function(a, b, c) {
            this.m = a;
            this.h = null;
            this.N = {};
            this.ib = 0;
            this.aa = void 0 === b ? 500 : b;
            this.F = void 0 === c ? !1 : c;
            this.B = null
        };
    ia(Rg, Pg);
    Rg.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.F
            },
            d = Nf(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.aa && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.aa));
        var f = function(g, l) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Qg(c), c.internalBlockOnErrors = b.F, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Sg(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Rg.prototype.removeEventListener = function(a) {
        a && a.listenerId && Sg(this, "removeEventListener", null, a.listenerId)
    };
    var Ug = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = Tg(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Tg(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? Tg(a.purpose.legitimateInterests,
                b) && Tg(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Tg = function(a, b) {
            return !(!a || !a[b])
        },
        Sg = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) {
                var e = a.m.__tcfapi;
                e(b, 2, c, d)
            } else if (Vg(a)) {
                Wg(a);
                var f = ++a.ib;
                a.N[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Vg = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.m, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Wg = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.N[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Eg(a.m, a.B))
        };
    var Xg = !0;
    Xg = !1;
    var Yg = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Zg = Dg("", 550),
        $g = Dg("", 500);

    function ah() {
        var a = Cd.tcf || {};
        return Cd.tcf = a
    }
    var fh = function() {
        var a = ah(),
            b = new Rg(G, Xg ? 3E3 : -1);
        if (!0 === G.gtag_enable_tcf_support && !a.active && ("function" === typeof G.__tcfapi || "function" === typeof b.m.__tcfapi || null != Vg(b))) {
            a.active = !0;
            a.cd = {};
            bh();
            var c = null;
            Xg ? c = G.setTimeout(function() {
                ch(a);
                dh(a);
                c = null
            }, $g) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) ch(a), dh(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = eh(), b.removeEventListener(d);
                        else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {},
                                g;
                            for (g in Yg)
                                if (Yg.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var l = d,
                                            m = !0;
                                        m = void 0 === m ? !1 : m;
                                        var n;
                                        var p = l;
                                        !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = Qg(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState ? !p.internalBlockOnErrors : "loaded" !== p.cmpStatus || "tcloaded" !== p.eventStatus && "useractioncomplete" !== p.eventStatus ? !1 : !0);
                                        f["1"] = n ? !1 === l.gdprApplies || "tcunavailable" === l.tcString ||
                                            void 0 === l.gdprApplies && !m || "string" !== typeof l.tcString || !l.tcString.length ? !0 : Ug(l, "1", 0) : !1
                                    } else f[g] = Ug(d, g, Yg[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty", a.cd = e, dh(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c), c = null), ch(a), dh(a)
            }
        }
    };

    function ch(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        Xg && (a.cd = eh())
    }

    function bh() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Zg, a);
        Df(b)
    }

    function eh() {
        var a = {},
            b;
        for (b in Yg) Yg.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function dh(a) {
        var b = {},
            c = (b.ad_storage = a.cd["1"] ? "granted" : "denied", b);
        Ff(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: gh()
        })
    }
    var gh = function() {
            var a = ah();
            return a.active ? a.tcString || "" : ""
        },
        hh = function() {
            var a = ah();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        ih = function(a) {
            if (!Yg.hasOwnProperty(String(a))) return !0;
            var b = ah();
            return b.active && b.cd ? !!b.cd[String(a)] : !0
        };

    function jh(a, b, c) {
        var d, e = Number(null != a.Bb ? a.Bb : void 0);
        0 !== e && (d = new Date((b || F()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var kh = ["1"],
        lh = {},
        mh = {},
        oh = function(a) {
            return lh[nh(a)]
        },
        rh = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = nh(a.prefix);
            if (!lh[c] && !ph(c, a.path, a.domain) && b) {
                var d = nh(a.prefix),
                    e = dg();
                if (0 === qh(d, e, a)) {
                    var f = cb("google_tag_data", {});
                    f._gcl_au ? Qc("GTM", 57) : f._gcl_au = e
                }
                ph(c, a.path, a.domain)
            }
        };

    function qh(a, b, c, d) {
        var e = hg(b, "1", c.domain, c.path),
            f = jh(c, d);
        f.Sa = "ad_storage";
        return $f(a, e, f)
    }

    function ph(a, b, c) {
        var d = gg(a, b, c, kh, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (lh[a] = e.slice(0, 2).join("."), mh[a] = {
            id: e.slice(2, 4).join("."),
            bh: Number(e[4]) || 0
        }) : 3 === e.length ? mh[a] = {
            id: e.slice(0, 2).join("."),
            bh: Number(e[2]) || 0
        } : lh[a] = d;
        return !0
    }

    function nh(a) {
        return (a || "_gcl") + "_au"
    };

    function sh() {
        for (var a = th, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function uh() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var th, vh;

    function wh(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = vh[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        th = th || uh();
        vh = vh || sh();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
        }
    };
    var xh;
    var Bh = function() {
            var a = yh,
                b = zh,
                c = Ah(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                lb(I, "mousedown", d);
                lb(I, "keyup", d);
                lb(I, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Ch = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Ah().decorators.push(f)
        },
        Dh = function(a, b, c) {
            for (var d = Ah().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    l;
                if (l = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== I.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Fa(e, g.callback())
                }
            }
            return e
        };

    function Ah() {
        var a = cb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Eh = /(.*?)\*(.*?)\*(.*)/,
        Fh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Gh = /^(?:www\.|m\.|amp\.)+/,
        Hh = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Ih(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Kh = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b,
                        f = e.push,
                        g, l = String(d);
                    th = th || uh();
                    vh = vh || sh();
                    for (var m = [], n = 0; n < l.length; n += 3) {
                        var p = n + 1 < l.length,
                            q = n + 2 < l.length,
                            r = l.charCodeAt(n),
                            u = p ? l.charCodeAt(n + 1) : 0,
                            t = q ? l.charCodeAt(n + 2) : 0,
                            v = r >> 2,
                            y = (r & 3) << 4 | u >> 4,
                            x = (u & 15) << 2 | t >> 6,
                            w = t & 63;
                        q || (w = 64, p || (x = 64));
                        m.push(th[v], th[y], th[x], th[w])
                    }
                    g = m.join("");
                    f.call(e, g)
                }
            }
        var B = b.join("*");
        return ["1", Jh(B),
            B
        ].join("*")
    };

    function Jh(a, b) {
        var c = [G.navigator.userAgent, (new Date).getTimezoneOffset(), ab.userLanguage || ab.language, Math.floor(F() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = xh)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, l = 0; 8 > l; l++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        xh = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ xh[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Lh() {
        return function(a) {
            var b = ue(G.location.href),
                c = b.search.replace("?", ""),
                d = pe(c, "_gl", !0) || "";
            a.query = Mh(d) || {};
            var e = se(b, "fragment").match(Ih("_gl"));
            a.fragment = Mh(e && e[3] || "") || {}
        }
    }

    function Nh(a, b) {
        var c = Ih(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var Oh = function(a, b) {
            b || (b = "_gl");
            var c = Hh.exec(a);
            if (!c) return "";
            var d = c[1],
                e = Nh(b, (c[2] || "").slice(1)),
                f = Nh(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        Ph = function(a) {
            var b = Lh(),
                c = Ah();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Fa(d, e.query), a && Fa(d, e.fragment));
            return d
        },
        Mh = function(a) {
            try {
                var b = Qh(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = wh(d[e + 1]);
                        c[f] = g
                    }
                    Qc("TAGGING", 6);
                    return c
                }
            } catch (l) {
                Qc("TAGGING",
                    8)
            }
        };

    function Qh(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Eh.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var l = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Jh(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                Qc("TAGGING", 7)
            }
        }
    }

    function Rh(a, b, c, d) {
        function e(p) {
            p = Nh(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Hh.exec(c);
        if (!f) return "";
        var g = f[1],
            l = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
        return "" + g + l + m
    }

    function Sh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Dh(b, 1, c),
            e = Dh(b, 2, c),
            f = Dh(b, 3, c);
        if (Ga(d)) {
            var g = Kh(d);
            c ? Th("_gl", g, a) : Uh("_gl", g, a, !1)
        }
        if (!c && Ga(e)) {
            var l = Kh(e);
            Uh("_gl", l, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        Uh(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        Th(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && Rh(n, p, q)
            }
    }

    function Uh(a, b, c, d) {
        if (c.href) {
            var e = Rh(a, b, c.href, void 0 === d ? !1 : d);
            Ra.test(e) && (c.href = e)
        }
    }

    function Th(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var l = e[g];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = I.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = Rh(a, b, c.action);
                Ra.test(n) && (c.action = n)
            }
        }
    }

    function yh(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Sh(e, e.hostname)
            }
        } catch (g) {}
    }

    function zh(a) {
        try {
            if (a.action) {
                var b = se(ue(a.action), "host");
                Sh(a, b)
            }
        } catch (c) {}
    }
    var Vh = function(a, b, c, d) {
            Bh();
            Ch(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Wh = function(a, b) {
            Bh();
            Ch(a, [re(G.location, "host", !0)], b, !0, !0)
        },
        Xh = function() {
            var a = I.location.hostname,
                b = Fh.exec(I.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(Gh, ""),
                m = e.replace(Gh, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        Yh = function(a, b) {
            return !1 === a ? !1 : a || b || Xh()
        };
    var Zh = {};
    var $h = function(a) {
        for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                vf: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, l) {
            return l.timestamp - g.timestamp
        });
        return b
    };

    function ai(a, b) {
        var c = $h(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].vf] || (d[c[e].vf] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    fa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].vf].push(g)
            }
        }
        return d
    };
    var bi = /^\w+$/,
        ci = /^[\w-]+$/,
        di = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        ei = function() {
            if (!gf().h() || !tf()) return !0;
            var a = qf("ad_storage");
            return null == a ? !0 : !!a
        },
        fi = function(a, b) {
            sf("ad_storage") ? ei() ? a() : yf(a, "ad_storage") : b ? Qc("TAGGING", 3) : xf(function() {
                fi(a, !0)
            }, ["ad_storage"])
        },
        hi = function(a) {
            return gi(a).map(function(b) {
                return b.fa
            })
        },
        gi = function(a) {
            var b = [];
            if (!Of(G) || !I.cookie) return b;
            var c = Rf(a, I.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    kd: d.kd
                }, e++) {
                var f = ii(c[e]);
                if (null != f) {
                    var g = f,
                        l = g.version;
                    d.kd = g.fa;
                    var m = g.timestamp,
                        n = g.labels,
                        p = qa(b, function(q) {
                            return function(r) {
                                return r.fa === q.kd
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = ji(p.labels, n || [])) : b.push({
                        version: l,
                        fa: d.kd,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return ki(b)
        };

    function ji(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function li(a) {
        return a && "string" == typeof a && a.match(bi) ? a : "_gcl"
    }
    var ni = function() {
            var a = ue(G.location.href),
                b = se(a, "query", !1, void 0, "gclid"),
                c = se(a, "query", !1, void 0, "gclsrc"),
                d = se(a, "query", !1, void 0, "wbraid"),
                e = se(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || pe(f, "gclid");
                c = c || pe(f, "gclsrc");
                d = d || pe(f, "wbraid")
            }
            return mi(b, c, e, d)
        },
        mi = function(a, b, c, d) {
            var e = {},
                f = function(g, l) {
                    e[l] || (e[l] = []);
                    e[l].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && ci.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(ci)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        pi = function(a) {
            var b = ni();
            fi(function() {
                oi(b, !1, a)
            })
        };

    function oi(a, b, c, d, e) {
        function f(y, x) {
            var w = qi(y, g);
            w && ($f(w, x, l), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = li(c.prefix);
        d = d || F();
        var l = jh(c, d, !0);
        l.Sa = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(y) {
                var x = ["GCL", n, y];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == Zh.enable_gbraid_cookie_write ? 0 : Zh.enable_gbraid_cookie_write) && !m && a.gb) {
            var q = a.gb[0],
                r = qi("gb", g),
                u = !1;
            if (!b)
                for (var t = gi(r), v = 0; v < t.length; v++) t[v].fa === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var si = function(a, b) {
            var c = Ph(!0);
            fi(function() {
                for (var d = li(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== di[f]) {
                        var g = qi(f, d),
                            l = c[g];
                        if (l) {
                            var m = Math.min(ri(l), F()),
                                n;
                            b: {
                                var p = m;
                                if (Of(G))
                                    for (var q = Rf(g, I.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (ri(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var u = jh(b, m, !0);
                                u.Sa = "ad_storage";
                                $f(g, l, u)
                            }
                        }
                    }
                }
                oi(mi(c.gclid, c.gclsrc), !1, b)
            })
        },
        qi = function(a, b) {
            var c = di[a];
            if (void 0 !== c) return b + c
        },
        ri = function(a) {
            return 0 !== ti(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function ii(a) {
        var b = ti(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            fa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function ti(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !ci.test(a[2]) ? [] : a
    }
    var ui = function(a, b, c, d, e) {
            if (pa(b) && Of(G)) {
                var f = li(e),
                    g = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = qi(a[m], f);
                            if (n) {
                                var p = Rf(n, I.cookie, void 0, "ad_storage");
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                fi(function() {
                    Vh(g, b, c, d)
                })
            }
        },
        ki = function(a) {
            return a.filter(function(b) {
                return ci.test(b.fa)
            })
        },
        vi = function(a, b) {
            if (Of(G)) {
                for (var c = li(b.prefix), d = {}, e = 0; e < a.length; e++) di[a[e]] && (d[a[e]] = di[a[e]]);
                fi(function() {
                    z(d, function(f, g) {
                        var l = Rf(c + g, I.cookie, void 0, "ad_storage");
                        l.sort(function(u,
                            t) {
                            return ri(t) - ri(u)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = ri(m),
                                p = 0 !== ti(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== ti(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            oi(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function wi(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var xi = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (tf()) {
                var c = ni();
                if (wi(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    Wh(function() {
                        return d
                    }, 3);
                    Wh(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        yi = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!ei()) return e;
            var f = gi(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var l = f[0],
                    m = f[0].timestamp,
                    n = [l.version, Math.round(m /
                        1E3), l.fa].concat(l.labels || [], [b]).join("."),
                    p = jh(c, m, !0);
                p.Sa = "ad_storage";
                $f(a, n, p)
            }
            return e
        };

    function zi(a, b) {
        var c = li(b),
            d = qi(a, c);
        if (!d) return 0;
        for (var e = gi(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Ai(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Bi = function(a) {
        var b = Math.max(zi("aw", a), Ai(ei() ? ai() : {}));
        return Math.max(zi("gb", a), Ai(ei() ? ai("_gac_gb", !0) : {})) > b
    };
    var Hi = /[A-Z]+/,
        Ii = /\s/,
        Ji = function(a) {
            if (k(a)) {
                a = Aa(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Hi.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || Ii.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            J: c + "-" + d[0],
                            H: d
                        }
                    }
                }
            }
        },
        Li = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Ji(a[c]);
                d && (b[d.id] = d)
            }
            Ki(b);
            var e = [];
            z(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function Ki(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.H[1] && b.push(d.J)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Ni = function(a, b, c, d) {
            return (2 === Mi() || d || "http:" != G.location.protocol ? a : b) + c
        },
        Mi = function() {
            var a = ib(),
                b;
            if (1 === a) a: {
                var c = Jd;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = I.getElementsByTagName("script"), l = 0; l < g.length && 100 > l; l++) {
                    var m = g[l].src;
                    if (m) {
                        m = m.toLowerCase();
                        if (0 === m.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === m.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var Zi = function(a, b, c) {
            this.J = a;
            this.eventName = b;
            this.h = c;
            this.m = {};
            this.metadata = O(c.eventMetadata || {});
            this.M = !1
        },
        $i = function(a, b, c) {
            var d = a.h.getWithConfig(b);
            void 0 !== d ? a.m[b] = d : void 0 !== c && (a.m[b] = c)
        },
        aj = function(a, b, c) {
            var d = de(a.J);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };

    function bj(a) {
        return {
            getDestinationId: function() {
                return a.J
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                return void(a.eventName = b)
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                return void(a.m[b] = c)
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                $i(a, b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                return void(a.metadata[b] = c)
            },
            abort: function() {
                return void(a.M = !0)
            },
            getProcessedEvent: function() {
                return a
            }
        }
    };
    var hj = [];
    hj[3] = !0;
    hj[20] = !0;
    hj[21] = !0;
    hj[22] = !0;
    hj[19] = !0;
    Ua();
    Fg() || Ta("iPod");
    Ta("iPad");
    !Ta("Android") || Va() || Ua() || Ta("Opera") || Ta("Silk");
    Va();
    !Ta("Safari") || Va() || Ta("Coast") || Ta("Opera") || Ta("Edge") || Ta("Edg/") || Ta("OPR") || Ua() || Ta("Silk") || Ta("Android") || Gg();
    var Oj = {},
        Pj = null,
        Qj = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!Pj) {
                Pj = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(l[m].split(""));
                    Oj[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === Pj[q] && (Pj[q] = p)
                    }
                }
            }
            for (var r = Oj[f], u = Array(Math.floor(b.length / 3)), t = r[64] || "", v = 0, y = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    w = b[v + 1],
                    B = b[v + 2],
                    A = r[x >> 2],
                    C = r[(x & 3) << 4 | w >> 4],
                    E = r[(w & 15) << 2 | B >> 6],
                    H = r[B & 63];
                u[y++] = "" + A + C + E + H
            }
            var D = 0,
                J = t;
            switch (b.length - v) {
                case 2:
                    D = b[v + 1], J = r[(D & 15) << 2] || t;
                case 1:
                    var K = b[v];
                    u[y] = "" + r[K >> 2] + r[(K & 3) << 4 | D >> 4] + J + t
            }
            return u.join("")
        };
    var Rj = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Sj() {
        var a;
        return null != (a = G.google_tag_data) ? a : G.google_tag_data = {}
    }

    function Tj() {
        var a = G.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function Uj() {
        var a, b;
        if ("function" !== typeof(null == (a = G.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)) return null;
        var c = Sj();
        if (c.uach_promise) return c.uach_promise;
        var d = G.navigator.userAgentData.getHighEntropyValues(Rj).then(function(e) {
            null != c.uach || (c.uach = e);
            return e
        });
        return c.uach_promise = d
    };

    function Xj() {
        return "attribution-reporting"
    }

    function Yj(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var Zj = !1;

    function ak() {
        if (Yj("join-ad-interest-group") && na(ab.joinAdInterestGroup)) return !0;
        Zj || (Ng('A7bG5hJ4XpMV5a3V1wwAR0PalkFSxLOZeL9D/YBYdupYUIgUgGhfVJ1zBFOqGybb7gRhswfJ+AmO7S2rNK2IOwkAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjY5NzY2Mzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Zj = !0);
        return Yj("join-ad-interest-group") && na(ab.joinAdInterestGroup)
    }

    function bk(a, b) {
        var c = void 0;
        try {
            c = I.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > F() - d) {
                Qc("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= I.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                Qc("TAGGING", 10);
                return
            }
        } catch (e) {}
        jb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: F()
        }, c)
    };
    var ck = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        dk = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        ek = /^\d+\.fls\.doubleclick\.net$/,
        fk = /;gac=([^;?]+)/,
        gk = /;gacgb=([^;?]+)/,
        hk = /;gclaw=([^;?]+)/,
        ik = /;gclgb=([^;?]+)/;

    function jk(a, b) {
        if (ek.test(I.location.host)) {
            var c = I.location.href.match(b);
            return c && 2 == c.length && c[1].match(ck) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].fa);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var kk = function(a, b, c) {
        var d = ei() ? ai("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var l = yi("_gac_gb_" + g, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + l.join(","))
        }
        return {
            Ti: f ? e.join(";") : "",
            Si: jk(d, gk)
        }
    };

    function lk(a, b, c) {
        if (ek.test(I.location.host)) {
            var d = I.location.href.match(c);
            if (d && 2 == d.length && d[1].match(dk)) return [{
                fa: d[1]
            }]
        } else return gi((a || "_gcl") + b);
        return []
    }
    var mk = function(a) {
            return lk(a, "_aw", hk).map(function(b) {
                return b.fa
            }).join(".")
        },
        nk = function(a) {
            return lk(a, "_gb", ik).map(function(b) {
                return b.fa
            }).join(".")
        },
        ok = function(a, b) {
            var c = yi((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var pk = function() {
        if (na(G.__uspapi)) {
            var a = "";
            try {
                G.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Zk = function(a) {
            var b = !1;
            if (!Xk || !Yk[Xk]) return !1;
            b = a || "C" in Yk[Xk];
            return b
        },
        bl = function(a, b) {
            var c;
            if (!Xk || !Zk(b)) return "";
            var d = Yk[Xk];
            c = "&al=" + $k.filter(function(e) {
                return void 0 !== d[e]
            }).map(function(e) {
                return e + Math.floor(d[e])
            }).join(".") + (".Z" + al[Xk]);
            a && delete Yk[Xk];
            return c
        },
        el = function(a) {},
        il = function(a) {},
        jl = function() {
            return "&tc=" + Zb.filter(function(a) {
                return a
            }).length
        },
        ml = function() {
            2022 <= kl().length && ll()
        },
        nl = function(a) {
            return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
        },
        pl = function() {
            ol || (ol = G.setTimeout(ll, 500))
        },
        ll = function(a) {
            ol && (G.clearTimeout(ol), ol = void 0);
            if (void 0 !== Xk && (!ql[Xk] || rl || sl || Zk(a)))
                if (void 0 === al[Xk] && (tl[Xk] || ul.jj() || 0 >= vl--)) U(1), tl[Xk] = !0;
                else {
                    void 0 === al[Xk] && ul.Gj();
                    var b = kl(!0, a);
                    a ? rb(b) : kb(b);
                    if (wl || xl && 0 < yl.length) {
                        var c = b.replace("/a?", "/td?");
                        kb(c)
                    }
                    ql[Xk] = !0;
                    xl = wl = zl = Al = sl = rl = "";
                    yl = []
                }
        },
        kl = function(a, b) {
            var c = Xk;
            if (void 0 === c) return "";
            var d = Rc("GTM"),
                e = Rc("TAGGING");
            return [Bl, ql[c] ? "" : "&es=1", Cl[c], el(c), d ? "&u=" + d : "", e ? "&ut=" + e : "", jl(), rl, sl, Al, il(a), zl, wl, bl(a, b), xl ? "&dl=" + encodeURIComponent(xl) : "", 0 < yl.length ? "&tdp=" + yl.join(".") : "", "&z=0"].join("")
        },
        El = function() {
            Bl = Dl()
        },
        Dl = function() {
            return [Fl, "&v=3&t=t", "&pid=" + ra(), "&rv=" + Bd.Od].join("")
        },
        hl = ["L", "S", "Y"],
        dl = ["S", "E"],
        Gl = {
            sampleRate: "0.005000",
            wh: "",
            vh: Number("5")
        },
        Hl = 0 <= I.location.search.indexOf("?gtm_latency=") || 0 <= I.location.search.indexOf("&gtm_latency="),
        Il;
    if (!(Il = Hl)) {
        var Jl = Math.random(),
            Kl = Gl.sampleRate;
        Il = Jl < Kl
    }
    var Ll = Il,
        Fl = "https://www.googletagmanager.com/a?id=" + kg.K + "&cv=158",
        Ml = {
            label: kg.K + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        Bl = Dl(),
        ql = {},
        rl = "",
        sl = "",
        zl = "",
        wl = "",
        yl = [],
        xl = "",
        gl = {},
        fl = !1,
        cl = {},
        Nl = {},
        Al = "",
        Xk = void 0,
        Cl = {},
        tl = {},
        ol = void 0,
        Ol = 5;
    0 < Gl.vh && (Ol = Gl.vh);
    var ul = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                jj: function() {
                    return c < a ? !1 : F() - d[c % a] < b
                },
                Gj: function() {
                    var f = c++ % a;
                    d[f] = F()
                }
            }
        }(Ol, 1E3),
        vl = 1E3,
        Ql = function(a, b) {
            if (Ll && void 0 !== a && !tl[a] && Xk !== a) {
                ll();
                Xk = a;
                zl = rl = "";
                Cl[a] = "&e=" + nl(b) + "&eid=" + a;
                pl();
            }
        },
        Rl = function(a, b, c, d) {
            if (Ll && b) {
                var e, f = String(b[yb.xb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!tl[a]) {
                    a !== Xk && (ll(), Xk = a);
                    rl = rl ? rl + "." + g : "&tr=" + g;
                    var l = b["function"];
                    if (!l) throw Error("Error: No function name given for function call.");
                    var m = (ac[l] ? "1" : "2") + e;
                    zl = zl ? zl + "." + m : "&ti=" + m;
                    pl();
                    ml()
                }
            }
        };
    var Yl = function(a, b, c) {
            if (Ll && void 0 !== a && !tl[a]) {
                a !== Xk && (ll(), Xk = a);
                var d = c + b;
                sl = sl ? sl + "." + d : "&epr=" + d;
                pl();
                ml()
            }
        },
        Zl = function(a, b, c) {},
        $k = ["S", "P", "C", "Z"],
        $l = {},
        am = ($l[1] = 5, $l[2] = 5, $l[3] = 5, $l),
        Yk = {},
        al = {},
        bm = function(a, b) {
            var c = !1;
            if (!Ll || al[a] || 0 === am[b]) return !1;
            --am[b];
            al[a] = b;
            c = !0;
            return c
        },
        cm = function(a, b, c) {
            if (!Ll || !al[a]) return;
            var d = Yk[a];
            d || (Yk[a] = d = {});
            d[b] = c;
        },
        dm = function() {
            if (Ll) {
                G.setInterval(El, 864E5);
                lb(G, "pagehide", function() {
                    Xk && al[Xk] && ll(!0);
                    for (var a in Yk) Yk.hasOwnProperty(a) && (Xk = Number(a), ll(!0));
                });
            }
        };
    var em = function(a, b) {
        var c, d = G.GooglebQhCsO;
        d || (d = {}, G.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var fm = function(a, b) {
        var c = Kg(a, "fmt");
        if (b) {
            var d = Kg(a, "random"),
                e = Kg(a, "label") || "";
            if (!d) return !1;
            var f = Qj(decodeURIComponent(e.replace(/\+/g, " ")) + ":" + decodeURIComponent(d.replace(/\+/g, " ")));
            if (!em(f, b)) return !1
        }
        c && 4 != c && (a = Mg(a, "rfmt", c));
        var g = Mg(a, "fmt", 4);
        hb(g, function() {
            G.google_noFurtherRedirects && b && b.call && (G.google_noFurtherRedirects = null, b())
        }, void 0, void 0, I.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var vm = !1;
    var wm = function() {
            this.h = {}
        },
        xm = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        ym = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        Am = function(a, b, c, d, e) {};
    var Cm = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Dm = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Em = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Fm = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Gm = function() {
            var a = !1;
            return a
        },
        Im = function(a) {
            var b = Xd("gtm.allowlist") || Xd("gtm.whitelist");
            b && U(9);
            Gm() && (b = ["google", "gtagfl", "lcl", "zone"]);
            var c = b && Ha(za(b), Dm),
                d = Xd("gtm.blocklist") ||
                Xd("gtm.blacklist");
            d || (d = Xd("tagTypeBlacklist")) && U(3);
            d ? U(8) : d = [];
            Hm() && (d = za(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= za(d).indexOf("google") && U(2);
            var e = d && Ha(za(d), Em),
                f = {};
            return function(g) {
                var l = g && g[yb.xb];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = Qd[l] || [],
                    n = a(l, m);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        U(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var r = !1;
                if (d) {
                    var u = 0 <= e.indexOf(l);
                    if (u) r = u;
                    else {
                        var t = ua(e, m || []);
                        t && U(10);
                        r = t
                    }
                }
                var v = !n || r;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = ua(e, Fm));
                return f[l] = v
            }
        },
        Hm = function() {
            return Cm.test(G.location && G.location.hostname)
        };
    var Jm = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        Km = {},
        Lm = Object.freeze((Km[V.g.qa] = !0, Km)),
        Mm = 0 <= I.location.search.indexOf("?gtm_diagnostics=") || 0 <= I.location.search.indexOf("&gtm_diagnostics="),
        Om = function(a, b, c) {
            if ("config" !== a || 1 < Ji(b).H.length) return;
            var d, e = cb("google_tag_data", {});
            e.td || (e.td = {});
            d = e.td;
            var f = O(c.globalConfig);
            O(c.eventModel, f);
            var g = [],
                l;
            for (l in d) {
                var m = Nm(d[l], f);
                m.length && (Mm && console.log(m), g.push(l))
            }
            if (g.length) {
                if (g.length) {
                    var n =
                        b + "*" + g.join(".");
                    wl = wl ? wl + "!" + n : "&tdc=" + n
                }
                Qc("TAGGING", Jm[I.readyState] || 14)
            }
            d[b] = f;
        };

    function Pm(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Nm(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var u = r[q];
                return void 0 === u ? Lm[q] : u
            },
            f;
        for (f in Pm(a, b)) {
            var g = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === ub(l) || "array" === ub(l),
                p = "object" === ub(m) || "array" === ub(m);
            if (n && p) Nm(l, m, c, g);
            else if (n || p || l !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var Qm = !1,
        Rm = 0,
        Sm = [];

    function Tm(a) {
        if (!Qm) {
            var b = I.createEventObject,
                c = "complete" == I.readyState,
                d = "interactive" == I.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Qm = !0;
                for (var e = 0; e < Sm.length; e++) M(Sm[e])
            }
            Sm.push = function() {
                for (var f = 0; f < arguments.length; f++) M(arguments[f]);
                return 0
            }
        }
    }

    function Um() {
        if (!Qm && 140 > Rm) {
            Rm++;
            try {
                I.documentElement.doScroll("left"), Tm()
            } catch (a) {
                G.setTimeout(Um, 50)
            }
        }
    }
    var Vm = function(a) {
        Qm ? a() : Sm.push(a)
    };
    var Wm = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: kg.K
        }
    };
    var Ym = function(a, b) {
            this.h = !1;
            this.F = [];
            this.N = {
                tags: []
            };
            this.aa = !1;
            this.m = this.B = 0;
            Xm(this, a, b)
        },
        Zm = function(a, b, c, d) {
            if (Hd.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            wb(d) && (e = O(d, e));
            e.id = c;
            e.status = "timeout";
            return a.N.tags.push(e) - 1
        },
        $m = function(a, b, c, d) {
            var e = a.N.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        an = function(a) {
            if (!a.h) {
                for (var b = a.F, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.F.length = 0
            }
        },
        Xm = function(a, b, c) {
            void 0 !== b && bn(a, b);
            c && G.setTimeout(function() {
                return an(a)
            }, Number(c))
        },
        bn =
        function(a, b) {
            var c = Ea(function() {
                return M(function() {
                    b(kg.K, a.N)
                })
            });
            a.h ? c() : a.F.push(c)
        },
        cn = function(a) {
            a.B++;
            return Ea(function() {
                a.m++;
                a.aa && a.m >= a.B && an(a)
            })
        },
        dn = function(a) {
            a.aa = !0;
            a.m >= a.B && an(a)
        };
    var en = function() {
            function a(d) {
                return !oa(d) || 0 > d ? 0 : d
            }
            if (!Cd._li && G.performance && G.performance.timing) {
                var b = G.performance.timing.navigationStart,
                    c = oa(Yd.get("gtm.start")) ? Yd.get("gtm.start") : 0;
                Cd._li = {
                    cst: a(c - b),
                    cbt: a(Od - b)
                }
            }
        },
        fn = function(a) {
            G.performance && G.performance.mark(kg.K + "_" + a + "_start")
        },
        gn = function(a) {
            if (G.performance) {
                var b = kg.K + "_" + a + "_start",
                    c = kg.K + "_" + a + "_duration";
                G.performance.measure(c, b);
                var d = G.performance.getEntriesByName(c)[0];
                G.performance.clearMarks(b);
                G.performance.clearMeasures(c);
                var e = Cd._p || {};
                void 0 === e[a] && (e[a] = d.duration, Cd._p = e);
                return d.duration
            }
        },
        hn = function() {
            if (G.performance && G.performance.now) {
                var a = Cd._p || {};
                a.PAGEVIEW = G.performance.now();
                Cd._p = a
            }
        };
    var jn = {},
        kn = function() {
            return G.GoogleAnalyticsObject && G[G.GoogleAnalyticsObject]
        },
        ln = !1;
    var mn = function(a) {
            G.GoogleAnalyticsObject || (G.GoogleAnalyticsObject = a || "ga");
            var b = G.GoogleAnalyticsObject;
            if (G[b]) G.hasOwnProperty(b) || U(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ba());
                G[b] = c
            }
            en();
            return G[b]
        },
        nn = function(a) {
            if (tf()) {
                var b = kn();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function on() {
        return G.GoogleAnalyticsObject || "ga"
    }
    var pn = function(a) {
            if (jn[a] || ln) return;
            var b = G[on()];
            na(b) && (b("provide", a, ma), jn[a] = !0);
        },
        qn = function(a, b) {
            return function() {
                var c = kn(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function vn(a, b, c, d) {
        var e = Zb[a],
            f = wn(a, b, c, d);
        if (!f) return null;
        var g = gc(e[yb.Hg], c, []);
        if (g && g.length) {
            var l = g[0];
            f = vn(l.index, {
                onSuccess: f,
                onFailure: 1 === l.Ug ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function wn(a, b, c, d) {
        function e() {
            if (f[yb.oi]) l();
            else {
                var y = hc(f, c, []),
                    x = y[yb.Ah];
                if (null != x)
                    for (var w = 0; w < x.length; w++)
                        if (!Gf(x[w])) {
                            l();
                            return
                        }
                var B = Zm(c.zb, String(f[yb.xb]), Number(f[yb.Ig]), y[yb.ri]),
                    A = !1;
                y.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var H = F() - E;
                        Rl(c.id, Zb[a], "5", H);
                        $m(c.zb, B, "success", H);
                        g()
                    }
                };
                y.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var H = F() - E;
                        Rl(c.id, Zb[a], "6", H);
                        $m(c.zb, B, "failure", H);
                        l()
                    }
                };
                y.vtp_gtmTagId = f.tag_id;
                y.vtp_gtmEventId = c.id;
                c.priorityId && (y.vtp_gtmPriorityId = c.priorityId);
                Rl(c.id, f, "1");
                var C = function() {
                    var H = F() - E;
                    Rl(c.id, f, "7", H);
                    $m(c.zb, B, "exception", H);
                    A || (A = !0, l())
                };
                var E =
                    F();
                try {
                    fc(y, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (H) {
                    C(H)
                }
            }
        }
        var f = Zb[a],
            g = b.onSuccess,
            l = b.onFailure,
            m = b.terminate;
        if (c.cf(f)) return null;
        var n = gc(f[yb.Jg], c, []);
        if (n && n.length) {
            var p = n[0],
                q = vn(p.index, {
                    onSuccess: g,
                    onFailure: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            l = 2 === p.Ug ? m : q
        }
        if (f[yb.Dg] || f[yb.ui]) {
            var r = f[yb.Dg] ? $b : c.Rj,
                u = g,
                t = l;
            if (!r[a]) {
                e = Ea(e);
                var v = xn(a, r, e);
                g = v.onSuccess;
                l = v.onFailure
            }
            return function() {
                r[a](u, t)
            }
        }
        return e
    }

    function xn(a, b, c) {
        var d = [],
            e = [];
        b[a] = yn(d, e, c);
        return {
            onSuccess: function() {
                b[a] = zn;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = An;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function yn(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function zn(a) {
        a()
    }

    function An(a, b) {
        b()
    };

    function Bn(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return ue("" + c + b).href
        }
    }

    function Cn(a, b) {
        return Dn() ? Bn(a, b) : void 0
    }

    function Dn() {
        var a = !1;
        return a
    }

    function En() {
        return !!Bd.Pd && "SGTM_TOKEN" !== Bd.Pd.split("@@").join("")
    };
    var Gn = function(a, b, c) {
            if (!Fn() && !yg(a)) {
                var d = c ? "/gtag/js" : "/gtm.js",
                    e = "?id=" + encodeURIComponent(a) + "&l=" + Bd.ba,
                    f = 0 === a.indexOf("GTM-");
                f || (e += "&cx=c");
                var g = En();
                g && (e += "&sign=" + Bd.Pd);
                var l = Cn(b, d + e);
                if (!l) {
                    var m = Bd.qc + d;
                    g && bb && f && (m = bb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    l = Ni("https://", "http://", m + e)
                }
                xg().container[a] = !0;
                hb(l)
            }
        },
        Hn = function(a, b) {
            var c;
            if (c = !Fn()) c = !xg().destination.hasOwnProperty(a);
            if (c) {
                var d = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Bd.ba + "&cx=c";
                En() && (d += "&sign=" + Bd.Pd);
                var e = Cn(b, d);
                e || (e = Ni("https://", "http://", Bd.qc + d));
                xg().destination[a] = !0;
                hb(e)
            }
        };

    function Fn() {
        if (jg()) {
            return !0
        }
        return !1
    };
    var Jn = function(a, b) {
            return 1 === arguments.length ? In("config", a) : In("config", a, b)
        },
        Kn = function(a, b, c) {
            c = c || {};
            c[V.g.vb] = a;
            return In("event", b, c)
        };

    function In(a) {
        return arguments
    }
    var Ln = function() {
        this.h = [];
        this.m = []
    };
    Ln.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++) try {
            this.m[f](e)
        } catch (g) {}
    };
    Ln.prototype.listen = function(a) {
        this.m.push(a)
    };
    Ln.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    Ln.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var Nn = function(a, b, c) {
            Mn().enqueue(a, b, c)
        },
        Pn = function() {
            var a = On;
            Mn().listen(a)
        };

    function Mn() {
        var a = Cd.mb;
        a || (a = new Ln, Cd.mb = a);
        return a
    }
    var Xn = function(a) {
            var b = Cd.zones;
            return b ? b.getIsAllowedFn(ug(), a) : function() {
                return !0
            }
        },
        Yn = function(a) {
            var b = Cd.zones;
            return b ? b.isActive(ug(), a) : !0
        };
    var ao = function(a, b) {
        for (var c = [], d = 0; d < Zb.length; d++)
            if (a[d]) {
                var e = Zb[d];
                var f = cn(b.zb);
                try {
                    var g = vn(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var l = c,
                            m = l.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = ac[p];
                        m.call(l, {
                            sh: n,
                            jh: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else Zn(d, b), f()
                } catch (u) {
                    f()
                }
            }
        c.sort($n);
        for (var r = 0; r < c.length; r++) c[r].execute();
        return 0 <
            c.length
    };

    function $n(a, b) {
        var c, d = b.jh,
            e = a.jh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.sh,
                l = b.sh;
            f = g > l ? 1 : g < l ? -1 : 0
        }
        return f
    }

    function Zn(a, b) {
        if (!Ll) return;
        var c = function(d) {
            var e = b.cf(Zb[d]) ? "3" : "4",
                f = gc(Zb[d][yb.Hg], b, []);
            f && f.length && c(f[0].index);
            Rl(b.id, Zb[d], e);
            var g = gc(Zb[d][yb.Jg], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var eo = !1,
        bo;
    var jo = function(a) {
        var b = F(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if ("gtm.js" === e) {
            if (eo) return !1;
            eo = !0;
        }
        var l, m = !1;
        if (Yn(c)) l = Xn(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            m = !0;
            l = Xn(Number.MAX_SAFE_INTEGER)
        }
        Ql(c, e);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = n;
        var r = {
                id: c,
                priorityId: d,
                name: e,
                cf: Im(l),
                Rj: [],
                dh: function() {
                    U(6)
                },
                Ng: fo(),
                Og: go(c),
                zb: new Ym(q, p)
            },
            u = lc(r);
        m && (u = ho(u));
        var t = ao(u, r),
            v = !1;
        dn(r.zb);
        "gtm.js" !== e && "gtm.sync" !== e || pn(kg.K);
        return io(u, t) || v
    };

    function go(a) {
        return function(b) {
            Ll && (xb(b) || Zl(a, "input", b))
        }
    }

    function fo() {
        var a = {};
        a.event = ae("event", 1);
        a.ecommerce = ae("ecommerce", 1);
        a.gtm = ae("gtm");
        a.eventModel = ae("eventModel");
        return a
    }

    function ho(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Zb[c][yb.xb]);
                if (Ed[d] || void 0 !== Zb[c][yb.vi] || 0 === d.indexOf("__ccd") || 0 === d.indexOf("__ogt") || "__set_product_settings" === d) b[c] = !0
            }
        return b
    }

    function io(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Zb[c] && !Hd[String(Zb[c][yb.xb])]) return !0;
        return !1
    }
    var ko = function(a, b) {
            this.eventId = a;
            this.priorityId = b;
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.dataLayerConfig = {};
            this.remoteConfig = {};
            this.eventMetadata = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.isGtmEvent = !1
        },
        lo = function(a, b) {
            a.eventModel = b;
            return a
        },
        mo = function(a, b) {
            a.targetConfig = b;
            return a
        },
        no = function(a, b) {
            a.containerConfig = b;
            return a
        },
        oo = function(a,
            b) {
            a.globalConfig = b;
            return a
        },
        po = function(a, b) {
            a.dataLayerConfig = b;
            return a
        },
        qo = function(a, b) {
            a.remoteConfig = b;
            return a
        },
        ro = function(a, b) {
            a.eventMetadata = b || {};
            return a
        },
        so = function(a, b) {
            a.onSuccess = b;
            return a
        },
        to = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        uo = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        vo = function(a, b) {
            a.onFailure = b;
            return a
        };
    ko.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        wo(this, this.globalConfig[a], this.dataLayerConfig[a]) && (U(71), U(79));
        if (void 0 !==
            this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    ko.prototype.getTopLevelKeys = function() {
        function a(f) {
            for (var g = Object.keys(f), l = 0; l < g.length; ++l) b[g[l]] = 1
        }
        var b = {};
        a(this.eventModel);
        a(this.targetConfig);
        a(this.containerConfig);
        a(this.globalConfig);
        for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
            var e = c[d];
            if ("event" !== e && "gtm" !== e && "tagTypeBlacklist" !== e && !b.hasOwnProperty(e)) {
                U(71);
                U(80);
                break
            }
        }
        return Object.keys(b)
    };
    ko.prototype.getMergedValues = function(a, b) {
        function c(l) {
            wb(l) && z(l, function(m, n) {
                e = !0;
                d[m] = n
            })
        }
        var d = {},
            e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]), c(this.globalConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]);
        var f = e,
            g = d;
        d = {};
        e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]), c(this.dataLayerConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
        b && 2 !==
            b || c(this.eventModel[a]);
        if (e !== f || wo(this, d, g)) U(71), U(81);
        e = f;
        d = g;
        return e ? d : void 0
    };
    ko.prototype.getKeysFromFirstOfAnyScope = function(a) {
        var b = {},
            c = !1,
            d = function(g) {
                for (var l = 0; l < a.length; l++) void 0 !== g[a[l]] && (b[a[l]] = g[a[l]], c = !0);
                return c
            };
        if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig)) return b;
        d(this.globalConfig);
        var e = b,
            f = c;
        b = {};
        c = !1;
        d(this.dataLayerConfig);
        wo(this, b, e) && (U(71), U(82));
        b = e;
        c = f;
        if (c) return b;
        d(this.remoteConfig);
        return b
    };
    var wo = function(a, b, c) {
        try {
            if (b === c) return !1;
            var d = ub(b);
            if (d !== ub(c) || !(wb(b) && wb(c) || "array" === d)) return !0;
            if ("array" === d) {
                if (b.length !== c.length) return !0;
                for (var e = 0; e < b.length; e++)
                    if (wo(a, b[e], c[e])) return !0
            } else {
                for (var f in c)
                    if (!b.hasOwnProperty(f)) return !0;
                for (var g in b)
                    if (!c.hasOwnProperty(g) || wo(a, b[g], c[g])) return !0
            }
        } catch (l) {
            U(72)
        }
        return !1
    };
    var Zp = function() {
            var a = !0;
            ih(7) && ih(9) && ih(10) || (a = !1);
            return a
        },
        $p = function() {
            var a = !0;
            ih(3) && ih(4) || (a = !1);
            return a
        };
    var Tq = null;

    function Uq() {
        return Tq = Tq || new Vq
    }
    var Wq = function(a, b, c, d) {
            Uq().push("event", [b, a], c, d)
        },
        Xq = function(a, b, c) {
            Uq().push("config", [a], b, c)
        },
        Yq = function(a, b, c, d) {
            Uq().push("get", [a, b], c, d)
        },
        Zq = function() {
            var a = V.g.Z;
            return Uq().getGlobalConfigValue && Uq().getGlobalConfigValue(a)
        },
        $q = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.m = {};
            this.B = null;
            this.h = !1
        },
        ar = function(a, b, c, d, e) {
            this.type = a;
            this.m = b;
            this.T = c || "";
            this.h = d;
            this.messageContext = e
        },
        Vq = function() {
            this.m = {};
            this.B = {};
            this.h = [];
            this.F = {
                AW: !1,
                UA: !1
            }
        },
        br = function(a, b) {
            var c = Ji(b);
            return a.m[c.J] = a.m[c.J] || new $q
        },
        cr = function(a, b, c, d) {
            if (d.T) {
                var e = br(a, d.T),
                    f = e.B;
                if (f) {
                    var g = O(c),
                        l = O(e.targetConfig[d.T]),
                        m = O(e.containerConfig),
                        n = O(e.remoteConfig),
                        p = O(a.B),
                        q = {};
                    try {
                        q = O(Ud)
                    } catch (v) {
                        U(72)
                    }
                    var r = Ji(d.T).prefix,
                        u = function(v) {
                            Yl(d.messageContext.eventId, r, v);
                            var y = g[V.g.Ob];
                            y && M(y)
                        },
                        t = uo(to(vo(so(ro(po(oo(qo(no(mo(lo(new ko(d.messageContext.eventId, d.messageContext.priorityId), g), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (u) {
                                var v = u;
                                u = void 0;
                                v("2")
                            }
                        }), function() {
                            if (u) {
                                var v = u;
                                u = void 0;
                                v("3")
                            }
                        }), function(v, y) {
                            a.F[v] = y
                        }), function(v) {
                            return a.F[v]
                        });
                    try {
                        Yl(d.messageContext.eventId, r, "1"), Om(d.type, d.T, t);
                        f(d.T, b, d.m, t)
                    } catch (v) {
                        Yl(d.messageContext.eventId, r, "4");
                    }
                }
            }
        };
    h = Vq.prototype;
    h.register = function(a, b, c) {
        var d = br(this, a);
        3 !== d.status && (d.B = b, d.status = 3, c && (O(d.remoteConfig, c), d.remoteConfig = c), this.flush())
    };
    h.notifyContainerLoaded = function() {};
    h.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!Ji(c)) return;
            a: if (c) {
                var e = Ji(c);
                if (e && 1 === br(this, c).status) {
                    br(this, c).status = 2;
                    this.push("require", [{}], e.J, {});
                }
            }
            br(this, c).h && (d.deferrable = !1)
        }
        this.h.push(new ar(a, Math.floor(F() / 1E3), c, b, d));
        d.deferrable ||
            this.flush()
    };
    h.insert = function(a, b, c, d) {
        var e = Math.floor(F() / 1E3);
        0 < this.h.length ? this.h.splice(1, 0, new ar(a, e, c, b, d)) : this.h.push(new ar(a, e, c, b, d))
    };
    h.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0];
            if (f.messageContext.deferrable) !f.T || br(this, f.T).h ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = br(this, f.T);
                        if (3 !== g.status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        z(f.h[0], function(r, u) {
                            O(Ia(r, u), b.B)
                        });
                        break;
                    case "config":
                        g = br(this, f.T);
                        e.eb = {};
                        z(f.h[0], function(r) {
                            return function(u, t) {
                                O(Ia(u, t), r.eb)
                            }
                        }(e));
                        var l = !!e.eb[V.g.Lc];
                        delete e.eb[V.g.Lc];
                        var m = Ji(f.T),
                            n = m.J === m.id;
                        l || (n ? g.containerConfig = {} : g.targetConfig[f.T] = {});
                        g.h && l || cr(this, V.g.sa, e.eb, f);
                        g.h = !0;
                        n ? O(e.eb, g.containerConfig) : (O(e.eb, g.targetConfig[f.T]), U(70));
                        d = !0;
                        break;
                    case "event":
                        g = br(this, f.T);
                        e.jd = {};
                        z(f.h[0], function(r) {
                            return function(u, t) {
                                O(Ia(u, t), r.jd)
                            }
                        }(e));
                        cr(this, f.h[1], e.jd, f);
                        break;
                    case "get":
                        g = br(this, f.T);
                        var p = {},
                            q = (p[V.g.Pa] = f.h[0], p[V.g.Ya] = f.h[1], p);
                        cr(this, V.g.Da, q, f)
                }
                this.h.shift();
                dr(this, f)
            }
            e = {
                eb: e.eb,
                jd: e.jd
            }
        }
        this.h.push.apply(this.h,
            c);
        d && this.flush()
    };
    var dr = function(a, b) {
        if ("require" !== b.type)
            if (b.T)
                for (var c = a.getCommandListeners(b.T)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.m)
                    if (a.m.hasOwnProperty(e)) {
                        var f = a.m[e];
                        if (f && f.m)
                            for (var g = f.m[b.type] || [], l = 0; l < g.length; l++) g[l]()
                    }
    };
    Vq.prototype.getRemoteConfig = function(a) {
        return br(this, a).remoteConfig
    };
    Vq.prototype.getCommandListeners = function(a) {
        return br(this, a).m
    };
    Vq.prototype.getGlobalConfigValue = function(a) {
        return this.B[a]
    };
    var er = {},
        fr = {},
        gr = function(a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) {
                var d = er[b[c]] || [];
                er[b[c]] = d;
                0 > d.indexOf(a) && d.push(a)
            }
        },
        hr = function(a, b) {
            b = String(b).split(",");
            for (var c = 0; c < b.length; c++) {
                var d = fr[b[c]] || [];
                fr[b[c]] = d;
                0 > d.indexOf(a) && d.push(a)
            }
        },
        ir = function(a) {
            for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
                    od: d.od,
                    ld: d.ld
                }, e++) {
                var f = a[e];
                if (0 <= f.indexOf("-")) {
                    if (d.od = Ji(f), d.od) {
                        var g = vg();
                        qa(g, function(q) {
                            return function(r) {
                                return q.od.J === r
                            }
                        }(d)) ? b.push(f) : c.push(f)
                    }
                } else {
                    var l =
                        er[f] || [];
                    d.ld = {};
                    l.forEach(function(q) {
                        return function(r) {
                            return q.ld[r] = !0
                        }
                    }(d));
                    for (var m = ug(), n = 0; n < m.length; n++)
                        if (d.ld[m[n]]) {
                            b = b.concat(vg());
                            break
                        }
                    var p = fr[f] || [];
                    p.length && (b = b.concat(p))
                }
            }
            return {
                rj: b,
                tj: c
            }
        },
        jr = function(a) {
            z(er, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        kr = function(a) {
            z(fr, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var lr = "HA GF G UA AW DC MC".split(" "),
        mr = !1,
        nr = !1;

    function or(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Rd()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var pr = {
            config: function(a, b) {
                var c = or(a, b);
                if (!(2 > a.length) && k(a[1])) {
                    var d = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !wb(a[2]) || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = Ji(a[1]);
                    if (e) {
                        Ql(c.eventId, "gtag.config");
                        var f = e.id === e.J,
                            g = e.J,
                            l = !1,
                            m = !!d[V.g.Lc],
                            n = f && -1 !== ug().indexOf(g);
                        n && !m && (l = nr, nr = !0);
                        if (!(Md && f && l)) {
                            var p = d[V.g.Z] || Zq();
                            if (!f) {
                                if (!qa(vg(), function(x) {
                                        return x === e.J
                                    })) {
                                    Hn(e.J, p);
                                    return
                                }
                            } else if (!n && !jg()) {
                                Gn(g, p, !0);
                                return
                            }
                            b.noTargetGroup || (f ? (jr(e.id), gr(e.id, d[V.g.Ed] || "default")) : (kr(e.id), hr(e.id,
                                d[V.g.Ed] || "default")));
                            delete d[V.g.Ed];
                            mr || U(43);
                            var q = [e.id];
                            f && (q = vg());
                            for (var r = !1, u = 0; u < q.length; u++) {
                                var t = Ji(q[u]),
                                    v = O(b);
                                if (t && -1 !== lr.indexOf(t.prefix)) {
                                    var y = v.eventMetadata || {};
                                    y.hasOwnProperty("is_external_event") || (y.is_external_event = !v.fromContainerExecution);
                                    v.eventMetadata = y;
                                    delete d[V.g.Ob];
                                    Xq(d, t.id, v);
                                    r = !0
                                }
                            }
                            r || ($d("gtag.targets." + e.id), $d("gtag.targets." + e.id, O(d)))
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    U(39);
                    var c = or(a, b),
                        d = a[1];
                    "default" === d ? Df(a[2]) : "update" === d && Ff(a[2],
                        c)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && k(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!wb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = O(e), e[V.g.Ob] && (g.eventCallback = e[V.g.Ob]), e[V.g.Ad] && (g.eventTimeout = e[V.g.Ad]));
                    var l = or(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[V.g.vb];
                    void 0 === r && (r = Xd(V.g.vb, 2), void 0 === r && (r = "default"));
                    if (k(r) || pa(r)) {
                        var u = r.toString().replace(/\s+/g, "").split(","),
                            t = ir(u),
                            v = t.rj,
                            y = t.tj;
                        if (y.length)
                            for (var x = q && q[V.g.Z] || Zq(), w = 0; w < y.length; w++) {
                                var B = Ji(y[w]);
                                B && Hn(B.J, x)
                            }
                        p = Li(v)
                    } else p = void 0;
                    var A = p;
                    if (A) {
                        Ql(m, c);
                        for (var C = [], E = 0; E < A.length; E++) {
                            var H = A[E],
                                D = O(b);
                            if (-1 !== lr.indexOf(H.prefix)) {
                                var J = O(d),
                                    K = D.eventMetadata || {};
                                K.hasOwnProperty("is_external_event") || (K.is_external_event = !D.fromContainerExecution);
                                D.eventMetadata = K;
                                delete J[V.g.Ob];
                                Wq(c, J, H.id, D)
                            }
                            C.push(H.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < A.length ? g.eventModel[V.g.vb] = C.join() : delete g.eventModel[V.g.vb];
                        mr || U(43);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                U(53);
                if (4 === a.length && k(a[1]) && k(a[2]) && na(a[3])) {
                    var c = Ji(a[1]),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        mr || U(43);
                        var f = Zq();
                        if (!qa(vg(), function(l) {
                                return c.J === l
                            })) Hn(c.J, f);
                        else if (-1 !== lr.indexOf(c.prefix)) {
                            or(a, b);
                            var g = {};
                            zf(O((g[V.g.Pa] = d, g[V.g.Ya] = e, g)));
                            Yq(d, function(l) {
                                M(function() {
                                    return e(l)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    mr = !0;
                    var c =
                        or(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && wb(a[1]) ? c = O(a[1]) : 3 == a.length && k(a[1]) && (c = {}, wb(a[2]) || pa(a[2]) ? c[a[1]] = O(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = or(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    O(c);
                    var g = O(c);
                    Uq().push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        qr = {
            policy: !0
        };
    var rr = function(a) {
            var b = G[Bd.ba].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        sr = function(a) {
            var b = G[Bd.ba],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var tr = !1,
        ur = [];

    function vr() {
        if (!tr) {
            tr = !0;
            for (var a = 0; a < ur.length; a++) M(ur[a])
        }
    }
    var wr = function(a) {
        tr ? M(a) : ur.push(a)
    };
    var Fr = function() {},
        Gr = function() {
            var a = G.gaData,
                b = 0,
                c = void 0;
            if (a)
                for (var d in a)
                    if (a.hasOwnProperty(d) && 0 === d.indexOf("UA-") && a[d].hitcount) {
                        b += a[d].hitcount;
                        var e = Number(a[d].first_hit);
                        e && (!c || e < c) && (c = e)
                    }
            return {
                Zg: b,
                Vg: c
            }
        },
        yr = function(a, b) {
            var c, d, e, f, g, l, m, n, p;
            return {
                ed: d,
                fd: c,
                fe: e,
                he: f,
                Zd: g,
                ke: l,
                Vc: m,
                Ze: n,
                Uc: p
            }
        },
        Er = function(a, b) {
            b = void 0 === b ? "ol" : b;
        },
        Ir = !1,
        xr, zr, Ar, Hr, Br, Cr, Dr;
    var Jr = function() {},
        Lr = function(a) {
            var b = Kr;
        };
    var Nr = function(a) {
        if (Mr(a)) return a;
        this.h = a
    };
    Nr.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Mr = function(a) {
        return !a || "object" !== ub(a) || wb(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Nr.prototype.getUntrustedMessageValue = Nr.prototype.getUntrustedMessageValue;
    var Or = 0,
        Pr = {},
        Qr = [],
        Rr = [],
        Sr = !1,
        Tr = !1;

    function Ur(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Vr = function(a) {
            return G[Bd.ba].push(a)
        },
        Wr = function(a, b) {
            var c = Cd[Bd.ba],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = G.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (G.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function Xr(a, b) {
        var c = a._clear || b.overwriteModelFields;
        z(a, function(e, f) {
            "_clear" !== e && (c && $d(e), $d(e, f))
        });
        Nd || (Nd = a["gtm.start"]);
        Jr();
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Rd(), a["gtm.uniqueEventId"] = d, $d("gtm.uniqueEventId", d));
        return jo(a)
    }

    function Yr(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (wa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Zr() {
        var a;
        if (Rr.length) a = Rr.shift();
        else if (Qr.length) a = Qr.shift();
        else return;
        var b;
        var c = a;
        if (Sr || !Yr(c.message)) b = c;
        else {
            Sr = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Rd());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                l = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Qr.unshift(l, c);
            b: {
                var m = kg.K;
                if (!m) break b;
                var n, p = ue(G.location.href);n = p.hostname + p.pathname;xl || (xl = n);yl.push(m);
            }
            b = f
        }
        return b
    }

    function $r() {
        for (var a = !1, b; !Tr && (b = Zr());) {
            Tr = !0;
            delete Ud.eventModel;
            Wd();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Tr = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
                        var l = f[g],
                            m = Xd(l, 1);
                        if (pa(m) || wb(m)) m = O(m);
                        Vd[l] = m
                    }
                try {
                    if (na(d)) try {
                        d.call(Yd)
                    } catch (B) {} else if (pa(d)) {
                        var n =
                            d;
                        if (k(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                r = n.slice(1),
                                u = Xd(p.join("."), 2);
                            if (null != u) try {
                                u[q].apply(u, r)
                            } catch (B) {}
                        }
                    } else {
                        var t = void 0;
                        if (wa(d)) a: {
                            if (d.length && k(d[0])) {
                                var v = pr[d[0]];
                                if (v && (!e.fromContainerExecution || !qr[d[0]])) {
                                    t = v(d, e);
                                    break a
                                }
                            }
                            t = void 0
                        }
                        else t = d;
                        t && (a = Xr(t, e) || a)
                    }
                } finally {
                    e.fromContainerExecution && Wd(!0);
                    var y = d["gtm.uniqueEventId"];
                    if ("number" === typeof y) {
                        for (var x = Pr[String(y)] || [], w = 0; w < x.length; w++) Rr.push(as(x[w]));
                        x.length && Rr.sort(Ur);
                        delete Pr[String(y)];
                        Or = y
                    }
                    Tr = !1
                }
            }
        }
        return !a
    }

    function bs() {
        var b = $r();
        try {
            rr(kg.K)
        } catch (c) {}
        return b
    }

    function On(a) {
        if (Or < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Pr[b] = Pr[b] || [];
            Pr[b].push(a)
        } else Rr.push(as(a)), Rr.sort(Ur), M(function() {
            Tr || $r()
        })
    }

    function as(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var ds = function() {
            function a(f) {
                var g = {};
                if (Mr(f)) {
                    var l = f;
                    f = Mr(l) ? l.getUntrustedMessageValue() : void 0;
                    g.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: g
                }
            }
            var b = cb(Bd.ba, []),
                c = Cd[Bd.ba] = Cd[Bd.ba] || {};
            !0 === c.pruned && U(83);
            Pr = Mn().get();
            Pn();
            Vm(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            wr(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < Cd.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var g = 0; g < arguments.length; g++) f[g] = new Nr(arguments[g])
                } else f = [].slice.call(arguments, 0);
                var l = f.map(function(q) {
                    return a(q)
                });
                Qr.push.apply(Qr, l);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (U(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return $r() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            Qr.push.apply(Qr, e);
            if (cs()) {
                M(bs)
            }
        },
        cs = function() {
            var a = !0;
            return a
        };

    function es(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = F();
        return b < c + 3E5 && b > c - 9E5
    };
    var fs = {};
    fs.Kd = new String("undefined");
    var Gs = G.clearTimeout,
        Hs = G.setTimeout,
        W = function(a, b, c, d) {
            if (jg()) {
                b && M(b)
            } else return hb(a, b, c, d)
        },
        Is = function() {
            return new Date
        },
        Js = function() {
            return G.location.href
        },
        Ks = function(a) {
            return se(ue(a), "fragment")
        },
        Ls = function(a) {
            return te(ue(a))
        },
        Ms = function(a, b) {
            return Xd(a, b || 2)
        },
        Ns = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Vr(a)) : d = Vr(a);
            return d
        },
        Os = function(a, b) {
            G[a] = b
        },
        X = function(a, b, c) {
            b &&
                (void 0 === G[a] || c && !G[a]) && (G[a] = b);
            return G[a]
        },
        Ps = function(a, b, c) {
            return Rf(a, b, void 0 === c ? !0 : !!c)
        },
        Qs = function(a, b, c) {
            return 0 === $f(a, b, c)
        },
        Rs = function(a, b) {
            if (jg()) {
                b && M(b)
            } else jb(a, b)
        },
        Ss = function(a) {
            return !!ms(a, "init", !1)
        },
        Ts = function(a) {
            ks(a, "init", !0)
        },
        Us = function(a, b, c) {
            Ll && (xb(a) || Zl(c, b, a))
        };

    var Ws = function(a) {
            if (!a || a.nodeType != Node.ELEMENT_NODE) return !1;
            var b = a.tagName.toUpperCase();
            return "SCRIPT" == b || "STYLE" == b || "LINK" == b
        },
        Xs = function(a, b, c) {
            try {
                null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
            } catch (d) {
                return d
            }
            return null
        },
        Ys = function(a, b, c) {
            var d = a.getAttribute(b);
            return Xs(a, b, c) ? 8 : function() {
                Xs(a, b, d)
            }
        },
        at = function(a, b, c) {
            var d, e, f = a.ownerDocument || a.document || document;
            c = (c || "").toLowerCase();
            "after" == c ? (d = a.parentNode, e = a.nextSibling) : "insert" == c ? (d = a, e = a.firstChild) : "append" ==
                c ? (d = a, e = null) : (d = a.parentNode, e = a);
            if (!d || d == f) return {
                result: 1,
                dj: []
            };
            var g = Zs(b, d);
            $s(g, "SCRIPT");
            $s(g, "NOSCRIPT");
            var l = [];
            if (g.firstChild)
                for (var m = g.firstChild; m;) {
                    var n = m.nextSibling;
                    l.push(m);
                    d.insertBefore(m, e);
                    m = n
                }
            var p = a.nextSibling;
            "replace" == c && d.removeChild(a);
            return {
                result: function() {
                    for (; 0 < l.length;) d.removeChild(l.pop());
                    "replace" == c && d.insertBefore(a, p)
                },
                dj: l.slice()
            }
        },
        bt = {
            SELECT: [1, '<select multiple="multiple">', "</select>"],
            FIELDSET: [1, "<fieldset>", "</fieldset>"],
            MAP: [1, "<map>",
                "</map>"
            ],
            OBJECT: [1, "<object>", "</object>"],
            TABLE: [1, "<table>", "</table>"],
            TBODY: [2, "<table><tbody>", "</tbody></table>"],
            COLGROUP: [2, "<table><colgroup>", "</colgroup></table>"],
            TR: [3, "<table><tbody><tr>", "</tr></tbody></table>"]
        },
        Zs = function(a, b) {
            var c = 0,
                d = "",
                e = "",
                f = bt[b.tagName];
            null != f && (c = f[0], d = f[1], e = f[2]);
            var g = b.ownerDocument.createElement("div"),
                l = Za(d + (a || "") + e);
            void 0 !== g.tagName && $a(g);
            g.innerHTML = Ya(l);
            for (var m = g; 0 < c;) {
                var n = m.firstChild;
                if (null == n.firstChild) return b.ownerDocument.createElement("div");
                m = n;
                c--
            }
            return m
        },
        $s = function(a, b) {
            for (var c = a.getElementsByTagName(b), d = [], e = c.length - 1; 0 <= e; e--) {
                var f = c[e];
                f.parentNode.removeChild(f);
                d.push(f)
            }
        },
        ct = function(a) {
            var b = null,
                c = null;
            try {
                b = new Function("element", a)
            } catch (d) {
                c = d
            }
            return {
                We: b,
                error: c
            }
        },
        gt = function(a, b, c, d, e) {
            var f = a + "{" + (b + ": " + c + (d ? " !important" : "")) + "}";
            e && (f = e + "{" + f + "}");
            var g = document;
            if (g.createStyleSheet) {
                var l = dt(g),
                    m = l.rules.length;
                l.insertRule(f, m);
                return function() {
                    l.deleteRule ? l.deleteRule(m) : l.removeRule(m);
                    l.insertRule("x {}",
                        m)
                }
            }
            var n = et(f, g);
            ft(n, g);
            var p = n.parentNode;
            return function() {
                p.removeChild(n)
            }
        },
        ht = null,
        dt = function(a) {
            if (ht) return ht;
            for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
                var c = a.styleSheets[b];
                if (!c.href) {
                    var d = c.ownerNode;
                    if (d && d.parentNode && "HEAD" == d.parentNode.tagName) return ht = c
                }
            }
            0 == a.styleSheets.length && a.createStyleSheet();
            return ht = a.styleSheets[0]
        },
        et = function(a, b) {
            var c = (b || document).createElement("style");
            void 0 !== c.cssText ? c.cssText = a : c.innerHTML = a;
            return c
        },
        ft = function(a, b) {
            var c = b || document,
                d = c.getElementsByTagName("head")[0];
            d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
            d.appendChild(a)
        },
        it = function(a, b, c, d) {
            if (a.style.setProperty) try {
                var e = a.style.getPropertyValue(b),
                    f = a.style.getPropertyPriority(b);
                a.style.setProperty(b, c, d ? "important" : "");
                return function() {
                    a.style.setProperty(b, "", f);
                    a.style.setProperty(b, e, f)
                }
            } catch (l) {}
            var g = a.style.cssText;
            a.style.cssText += ";" + (b + ": " + c + (d ? " !important" : "")) + ";";
            return function() {
                a.style.cssText = g
            }
        },
        kt = function(a, b, c,
            d) {
            if (Ws(a)) return 7;
            if (b) return jt(a, b, d);
            if (c && c.parentNode) {
                var e = a.parentNode,
                    f = a.nextSibling;
                try {
                    c.parentNode.insertBefore(a, c.nextSibling)
                } catch (g) {
                    return 9
                }
                return function() {
                    e.insertBefore(a, f)
                }
            }
            return 4
        },
        jt = function(a, b, c) {
            var d = a.parentNode,
                e = a.nextSibling;
            c = (c || "").toLowerCase();
            try {
                if ("bottom" == c) b.appendChild(a);
                else if ("top" == c) b.insertBefore(a, b.childNodes[0] || null);
                else if ("before" == c)
                    if (b.parentNode) b.parentNode.insertBefore(a, b);
                    else return 5;
                else if ("after" == c)
                    if (b.parentNode) b.parentNode.insertBefore(a,
                        b.nextSibling);
                    else return 5
            } catch (f) {
                return 9
            }
            return function() {
                try {
                    d.insertBefore(a, e)
                } catch (f) {}
            }
        },
        lt = function(a, b, c) {
            if (0 <= b && b < a.childNodes.length) {
                var d = a.childNodes[b];
                if (null != d && d.nodeType == Node.TEXT_NODE) {
                    var e = d.nodeValue;
                    d.nodeValue = c;
                    return function() {
                        d.nodeValue = e
                    }
                }
                return 2
            }
            return 3
        },
        mt = function(a, b, c, d) {
            c ? d = c.nextSibling : d && (c = d.previousSibling);
            if (null != c && c.nodeType == Node.TEXT_NODE) {
                var e = c.nodeValue;
                c.nodeValue += a;
                return function() {
                    c.nodeValue = e
                }
            }
            if (null != d && d.nodeType == Node.TEXT_NODE) {
                var f =
                    d.nodeValue;
                d.nodeValue = a + d.nodeValue;
                return function() {
                    d.nodeValue = f
                }
            }
            var g = (b.ownerDocument || b.document || document).createTextNode(a);
            d ? b.insertBefore(g, d) : b.appendChild(g);
            return function() {
                b.removeChild(g)
            }
        },
        nt = function(a) {
            var b = document.createElement("a");
            a && (b.href = a);
            return b
        };
    var rt = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function st(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var tt = new sa;

    function ut(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = tt.get(e);
            f || (f = new RegExp(b, d), tt.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function vt(a, b) {
        function c(g) {
            var l = ue(g),
                m = se(l, "protocol"),
                n = se(l, "host", !0),
                p = se(l, "port"),
                q = se(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function wt(a) {
        return xt(a) ? 1 : 0
    }

    function xt(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = O(a, {});
                O({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (wt(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < rt.length; g++) {
                            var l = rt[g];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return st(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return ut(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return vt(b, c)
        }
        return !1
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);

    function Nt() {
        return G.gaGlobal = G.gaGlobal || {}
    }
    var Ot = function() {
            var a = Nt();
            a.hid = a.hid || ra();
            return a.hid
        },
        Pt = function(a, b) {
            var c = Nt();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var Tu = window,
        Uu = document,
        Vu = function(a) {
            var b = Tu._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === Tu["ga-disable-" + a]) return !0;
            try {
                var c = Tu.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Lf("AMP_TOKEN", String(Uu.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Uu.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var Wu = {};

    function dv(a) {
        z(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[V.g.Ma] || {};
        z(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var mv = function(a, b, c) {};

    function lv(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = function() {};
        return d
    }

    function ov(a, b, c) {}
    var nv = function(a, b) {
        b = b || {};
        return new cv(a.id, b)
    };
    var sv = lv;
    var uv = encodeURI,
        Y = encodeURIComponent,
        vv = kb;
    var wv = function(a, b) {
            if (!a) return !1;
            var c = se(ue(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        xv = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Av = function(a) {
            if (!yv[a]) {
                yv[a] = !0;
                var b = G[a] || {};
                G[a] = b;
                var c = function(e) {
                        return zv[e]
                    },
                    d = b.get;
                b.get = d ? function(e) {
                    return void 0 !== zv[e] ? zv[e] : d(e)
                } : c
            }
        },
        Dv = function(a, b) {
            zv[a] = b;
            for (var c = Bv(a), d = 0; d < c.length; d++) Cv(c[d], a, b);
            c = Bv("");
            for (var e = 0; e < c.length; e++) Cv(c[e], a, b)
        },
        Cv = function(a, b, c) {
            try {
                a(c, b, kg.K)
            } catch (d) {}
        },
        Bv = function(a) {
            Ev[a] = Ev[a] || [];
            return Ev[a]
        },
        zv = {},
        Ev = {},
        yv = {};
    var Fv = function() {
            G.gaData = G.gaData || {};
            return G.gaData
        },
        Gv = function(a, b) {
            b = void 0 === b ? !1 : b;
            G.gaData = G.gaData || {};
            var c = G.gaData,
                d = c.tracker_created;
            c.tracker_created = function(e) {
                b && a(e);
                d && na(d) && d(e);
                b || a(e)
            }
        },
        Hv = function(a) {
            var b = G[on()];
            try {
                if (na(b) && na(b.getAll)) return b.getAll().filter(function(c) {
                    return c.get("trackingId") === a
                })
            } catch (c) {}
            return []
        },
        Nv = function(a, b) {
            var c = Iv[a];
            if (c) M(function() {
                return b(c)
            });
            else {
                var d = Hv(a)[0];
                d ? (Iv[a] = d, Jv || (Jv = d), M(function() {
                    return b(d)
                })) : (Kv[a] || (Kv[a] = []), Kv[a].push(b), Lv || (Lv = !0, Gv(function(e) {
                    var f = e.get("trackingId");
                    if (Kv[f]) {
                        if (Mv[f]) {
                            Mv[f] = !1;
                            var g = G[on()];
                            na(g) && g("ga.require", "_" + kg.K)
                        }
                        Jv || (Jv = e);
                        Iv[f] = e;
                        for (var l = Kv[f], m; void 0 !== (m = l.shift());) m(e);
                        Kv[f] = void 0
                    }
                })))
            }
        },
        Ov = function(a, b, c, d) {
            var e = G[on()];
            if ("data" === b.hitType && c) {
                var f = G.gaData,
                    g = Number(f && f[d] && f[d].first_hit),
                    l = F();
                !isNaN(g) && l > g && (b.queueTime = Math.min(2E3, l + 100 - g))
            }
            try {
                var m = "t0" != a.get("name") ? a.get("name") + ".send" : "send";
                e(m, b)
            } catch (n) {}
        },
        Iv = {},
        Kv = {},
        Mv = {},
        Jv, Lv = !1,
        Pv, Qv = function(a, b, c) {
            Nv(a, function(d) {
                M(function() {
                    Ov(d, b, c, a)
                })
            })
        },
        Rv = function() {
            var a = !1;
            Gv(function() {
                if (!a) {
                    var b = G[on()];
                    na(b) && (b("ga.require", "__" + kg.K), a = !0)
                }
            }, !0)
        },
        Sv = function(a, b, c) {
            var d = Fv(),
                e = d[a] = d[a] || {};
            (e.pending_experiments = e.pending_experiments || {})[b] = c;
            e.experiments = e.experiments || {};
            e.experiments[b] = c
        },
        Tv = function(a) {
            var b = Fv()[a];
            return b ? b.hitcount || 0 : 0
        },
        Wv = function(a, b, c, d, e, f) {
            Dv(b, c);
            var g = d;
            if (d) {
                var l = re(G.location, "host");
                re(ue(d), "host") === l && (d = "")
            }
            Gv(function(q) {
                q.set("referrer",
                    d ? d : void 0)
            }, !0);
            if (Uv(a)) Cd.ga4_referrer_override = g, Vv(a, b, c, e, f);
            else {
                Sv(a, b, c);
                for (var m = Hv(a), n = 0; n < m.length; ++n) m[n].set("referrer", d ? d : void 0);
                if (0 < Tv(a)) {
                    var p = m[0];
                    p && Ov(p, {
                        hitType: "data"
                    }, !0, a)
                }
            }
        },
        Uv = function(a) {
            return !!a && "G-" === a.substring(0, 2)
        },
        Xv = function(a, b, c, d, e) {
            var f = c[V.g.Z] || Zq();
            Hn(a, f);
            var g = Kn(a, b, c);
            Nn(g, d, {
                originatingEntity: e,
                deferrable: !0
            })
        },
        Vv = function(a, b, c, d, e) {
            Uv(a) ? Xv(a, "experiment_impression", {
                experiment_id: b,
                variant_id: c
            }, d, e) : (Sv(a, b, c), 0 < Tv(a) && Qv(a, {
                hitType: "data"
            }, !0))
        };
    var aw = function(a, b, c) {
            function d() {
                f || (f = !0, !0 !== Yv && (Yv = !1), Zv(c), rr(e))
            }
            Kr = a;
            var e = "GTM-P3B33MM_" + b,
                f = !1;
            sr(e);
            G.google_optimize = G.google_optimize || {};
            var g = G.google_optimize;
            g["GTM-P3B33MM"] = g["GTM-P3B33MM"] || {};
            g["GTM-P3B33MM"].optimize_dyn = function(m) {
                m.split(",").forEach(function(n) {
                    $v[n] = !0
                });
                Yv = !0;
                d()
            };
            hb(a, void 0, d);
            var l = G[Bd.ba];
            G.setTimeout(function() {
                d()
            }, Number(l && l.hide && l.hide.timeout) || 1E4)
        },
        Zv = function(a) {
            if (void 0 !== bw) {
                var b = bw - cw,
                    c, d;
                Yv ? c = F() - bw : d = F() - bw;
                Lr({
                    Uj: b,
                    oj: c,
                    mj: d
                })
            }
            $v.optimize_ready = !0;
            Vr({
                event: "opt.dyn"
            });
            Vr({
                event: "opt.js"
            });
            if (a && 0 < a.length) {
                var e = {};
                G[Bd.ba].forEach(function(f) {
                    var g = f.event;
                    g && (e[g] = !0)
                });
                a.forEach(function(f) {
                    e[f] && Vr({
                        event: f
                    })
                })
            }
            M(function() {
                pn("_" + kg.K)
            })
        },
        dw = function(a, b, c, d, e, f, g, l, m) {
            function n(x, w) {
                w && (u += "&" + x + "=" + encodeURIComponent(w))
            }
            cw = F();
            if (a || b || c) {
                var p = void 0;
                if (b) {
                    var q = ni().aw;
                    q && (p = q[0])
                }
                if (f && (a || c || p)) {
                    var r = 1,
                        u, t = "GTM-P3B33MM_" + r++;
                    sr(t);
                    var v = function(x) {
                        Pv = x;
                        bw = F();
                        a || b ? (u = "https://www.google-analytics.com/gtm/optimize-dyn.js?id=GTM-P3B33MM", a && n("cid", x), n("gclid",
                            p), g && (n("gtm_auth", ""), n("gtm_preview", "")), (g || a) && n("cb", String(Math.random())), aw(u, r++, e)) : Zv(e);
                        rr(t)
                    };
                    if (Uv(d)) {
                        var y = Zq();
                        Hn(d, y);
                        Nn(In("get", d, "client_id", v), l, {
                            originatingEntity: m,
                            deferrable: !0
                        })
                    } else Mv[d] = !0, Nv(d, function(x) {
                        return v(x.get("clientId"))
                    })
                } else Zv(e)
            }
        },
        $v = {},
        cw, bw, Yv, Kr;
    var ew = function(a, b) {
        this.Vd = a;
        this.ad = b
    };
    ew.prototype.toString = function() {
        var a = "" + this.Vd;
        1 < this.ad && (a = a + "-" + this.ad);
        return a
    };
    var fw = function(a, b) {
        this.m = a;
        this.h = b
    };
    fw.prototype.toString = function() {
        return this.h + "." + this.m
    };
    var gw = function() {
            var a = Xd("optimize.cookie_path", 2);
            return k(a) ? a : "/"
        },
        iw = function(a, b) {
            var c = new hw(a, b);
            c.vj();
            return c
        },
        hw = function(a, b) {
            this.F = Math.floor(new Date / 864E5);
            this.B = a || "auto";
            this.h = b || gw();
            this.m = new ew(eg(this.B), fg(this.h));
            this.H = [];
            this.map = {}
        };
    h = hw.prototype;
    h.Xi = function(a) {
        if (!a) return "";
        var b = this.Ye(a);
        return b ? b.m : ""
    };
    h.Mj = function(a, b, c, d, e) {
        var f, g;
        f = void 0 === f ? 10 : f;
        g = void 0 === g ? 3E3 : g;
        if (!a) return !1;
        void 0 == b && (b = "");
        this.ie(a, new fw(b, c));
        this.Di(e);
        return this.mi(d,
            f, g)
    };
    h.Ye = function(a) {
        return this.map[a]
    };
    h.Vi = function() {
        for (var a = 0, b = 0; b < this.H.length; b++) "x" !== this.Ye(this.H[b]).m[0] && a++;
        return a
    };
    h.ie = function(a, b) {
        a && ("" === b.m ? this.mh(a) : (this.map[a] || this.H.push(a), this.map[a] = b))
    };
    h.Qj = function(a) {
        for (var b = 0; b < a.length; b++) this.ie(a[b][0], a[b][1])
    };
    h.mh = function(a) {
        var b = this.H.indexOf(a);
        0 <= b && this.H.splice(b, 1);
        delete this.map[a]
    };
    h.Ej = function() {
        for (var a = [], b = 0; b < this.H.length; b++) {
            var c = this.H[b];
            this.map[c].h < this.F && a.push(c)
        }
        for (var d = 0; d <
            a.length; d++) this.mh(a[d])
    };
    h.Ui = function() {
        for (var a = [], b = 0; b < this.H.length; b++) {
            var c = this.H[b];
            a.push([c, this.map[c]])
        }
        return a
    };
    h.Oi = function() {
        for (var a = 0, b = 0; b < this.H.length; b++) a = Math.max(a, this.map[this.H[b]].h);
        return 864E5 * a
    };
    h.toString = function() {
        if (0 == this.H.length) return "";
        for (var a = [], b = 0; b < this.H.length; b++) {
            var c = this.H[b];
            a.push(c + "." + this.map[c].toString())
        }
        return "GAX1." + this.m.toString() + "." + a.join("!")
    };
    h.mi = function(a, b, c) {
        var d = new Date;
        this.Ej();
        var e = this.Vi();
        if (e > b || e > (a ||
                10) && Qf().replace(RegExp("(?:;\\s*)?(_gaexp=[^;]+)(?:;\\s*)?"), this.toString()).length > c) return !1;
        d.setTime(this.Oi());
        if ("auto" != this.B) return this.m = new ew(eg(this.B), fg(this.h)), 0 === $f("_gaexp", this.toString(), {
            path: this.h,
            domain: this.B,
            expires: d
        });
        for (var f = Xf(), g = 0; g < f.length; g++)
            if (this.m = new ew(eg(f[g]), fg(this.h)), 0 === $f("_gaexp", this.toString(), {
                    path: this.h,
                    domain: f[g],
                    expires: d
                })) return !0;
        return !1
    };
    h.vj = function() {
        var a = Uf("_gaexp", this.m.Vd, this.m.ad);
        if (a) {
            var b = this.wj(a);
            b && this.Qj(b.Ui())
        }
    };
    h.wj = function(a) {
        for (var b = new hw(this.B, this.h), c = a.split("!"), d = 0; d < c.length; d++) {
            var e = c[d].split(".");
            if (3 == e.length) {
                if (isNaN(Number(e[1]))) return;
                b.ie(e[0], new fw(e[2], Number(e[1])))
            }
        }
        return b
    };
    h.Di = function(a) {
        a = a || {};
        var b = 0;
        a.hasOwnProperty("") && !isNaN(Number(a[""])) && (b = this.F - xa(a[""]));
        for (var c = 0; c < this.H.length; c++) {
            var d = this.H[c];
            if (a.hasOwnProperty(d) && !isNaN(Number(a[d]))) {
                var e = this.Ye(d);
                e.h = xa(a[d]) + b;
                this.ie(d, e)
            }
        }
    };
    var nw = function() {
            jw = F();
            var a = kw;
            kw = [];
            for (var b = 0; b < a.length; b++) a[b]();
            lw && (lw.takeRecords(), kw.length || (lw && (lw.disconnect(), lw = null), mw && (G.clearTimeout(mw), mw = null)))
        },
        pw = function() {
            var a = F() - jw;
            a >= ow ? (mw && (G.clearTimeout(mw), mw = null), nw()) : mw || (mw = G.setTimeout(function() {
                nw();
                mw = null
            }, ow - a))
        },
        qw = function(a) {
            if (!G.MutationObserver) return !1;
            try {
                return lw || (lw = new MutationObserver(pw), lw.observe(I.documentElement, {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    characterData: !0
                }), jw = F()), kw.push(a), !0
            } catch (b) {
                return !1
            }
        },
        lw = null,
        kw = [],
        ow = 0,
        jw = 0,
        mw = null;
    var zw = function(a, b) {
            b && qw(a) || G.setTimeout(a, 80)
        },
        Dw = function(a) {
            try {
                return Lc(a)
            } catch (b) {
                return null
            }
        },
        Ew = function(a) {
            if (Qm) return !0;
            for (; a;) {
                if (a.nextSibling) return !0;
                a = a.parentNode
            }
            return !1
        },
        Fw = function(a, b) {
            for (var c = Dw(a.ja) || [], d = [], e = 0; e < c.length; e++) {
                var f = c[e];
                if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
                    if (a.Ia && !Ew(f)) break;
                    d.push(f)
                }
            }
            return d
        },
        Gw = function(a, b) {
            return function() {
                a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b]
            }
        },
        Hw = function(a, b) {
            a.gtmProgressiveApplied ||
                (a.gtmProgressiveApplied = {});
            a.gtmProgressiveApplied[b] = !0
        },
        Iw = function(a, b, c) {
            var d;
            var e = [];
            if (b.Oa)
                if (b.Oa.Se) d = [{
                    element: I.head
                }];
                else {
                    var f = Fw(b.Oa, b.id),
                        g = null;
                    b.je && (g = Fw(b.je, b.id + "-t"));
                    for (var l = 0; l < f.length; l++) {
                        var m = f[l],
                            n = void 0;
                        if (null != g && (n = g.length > l ? g[l] : null, !n && !Qm && (null === b.je.da || b.Mg + e.length < b.je.da))) break;
                        e.push({
                            element: m,
                            targetElement: n
                        })
                    }
                    d = e
                }
            else d = e;
            var p = d;
            if (!Qm && b.Ai && (!a || null == b.Oa.da || b.Oa.da != b.Sd + p.length)) return !1;
            for (var q = 0; q < p.length; q++) {
                var r = p[q].element,
                    u = p[q].targetElement,
                    t = void 0;
                b.Sd++;
                Hw(r, b.id);
                u && (b.Mg++, t = b.id + "-t", Hw(u, t));
                var v = b.Ei(r, u);
                na(v) && b.ic.push(v);
                b.ic.push(Gw(r, b.id));
                u && t && b.ic.push(Gw(u, t))
            }
            if (b.Oa.da && b.Oa.da == b.Sd || Qm && (!c || b.Sd)) b.finished = !0;
            return !0
        },
        Jw = function(a) {
            for (var b = {}, c = 0; c < a.Na.length; c++) {
                var d = a.Na[c];
                if (!d.Oa.Se) {
                    var e = b[d.Oa.ja];
                    e || (e = b[d.Oa.ja] = Dw(d.Oa.ja) || []);
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        g.gtmProgressiveApplied && g.gtmProgressiveApplied[d.id] || (Hw(g, d.id), d.ic.push(Gw(g, d.id)))
                    }
                }
            }
        },
        Kw = function(a) {
            if (!a.tf) {
                for (var b =
                        a.Tc; b < a.Na.length; b++) {
                    var c = a.Na[b],
                        d = b == a.Tc;
                    if (!c.finished && !Iw(d, c, a.xh && a.uh)) break;
                    c.finished && d && a.Tc++
                }
                a.Na.length > a.Tc ? (!a.pending && a.xh && (a.pending = !0, zw(function() {
                    a.pending = !1;
                    Kw(a)
                }, a.uh)), Qm || a.nf || (a.nf = function() {
                    M(function() {
                        Kw(a)
                    })
                }, lb(I, "DOMContentLoaded", a.nf))) : Jw(a)
            }
        },
        Lw = {},
        Mw = {},
        Nw = void 0,
        Ow = function(a, b, c, d) {
            var e = Nw;
            if (!Kc || !e) return !1;
            var f = {
                id: e.id + ":" + e.Na.length,
                Ei: b,
                ic: [],
                Ai: c,
                Oa: a,
                Sd: 0,
                je: d || null,
                Mg: 0,
                finished: !1
            };
            e.Na.push(f);
            null === a ? (f.finished = !0, b(null)) : Kw(e);
            return !0
        },
        Pw = function(a) {
            var b = ma;
            try {
                b = gt(a, "visibility", "hidden", !0)
            } catch (c) {}
            return function() {
                na(b) && b.apply();
                b = null
            }
        },
        Qw = function(a, b, c, d) {
            var e = b;
            if (!Qm && !a.Se) {
                var f = Pw(a.ja);
                Sm.push(f);
                e = function(g, l) {
                    var m = b(g, l);
                    f();
                    return m
                }
            }
            return Ow(a, e, c, d)
        };
    var Z = {
        o: {}
    };
    Z.o.dee = ["google"],
        function() {
            (function(a) {
                Z.__dee = a;
                Z.__dee.s = "dee";
                Z.__dee.isVendorTemplate = !0;
                Z.__dee.priorityOverride = 0
            })(function() {
                var a = !1;
                return a ? "gtm.sync" : "gtm.js"
            })
        }();





    Z.o.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.s = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();






    Z.o.asprv = ["google"],
        function() {
            function a() {
                Ns({
                    event: "optimize.domChange"
                });
                qw(a)
            }(function(b) {
                Z.__asprv = b;
                Z.__asprv.s = "asprv";
                Z.__asprv.isVendorTemplate = !0;
                Z.__asprv.priorityOverride = 0
            })(function(b) {
                var c = b.vtp_globalName,
                    d = !!b.vtp_listenForMutations,
                    e = Ms("eventModel");
                c && Av(c);
                d && a();
                var f, g, l;
                e && (f = e.name || "", g = e.callback, l = e.remove);
                if (g && na(g))
                    if (f = String(f), !0 !== l) {
                        var m = f,
                            n = g;
                        Bv(m).push(n);
                        if ("" !== m) void 0 !== zv[m] && Cv(n, m, zv[m]);
                        else
                            for (var p in zv) void 0 !== zv[p] && Cv(n, p, zv[p])
                    } else {
                        var q =
                            g,
                            r = Bv(f),
                            u = r.indexOf(q);
                        0 <= u && r.splice(u, 1)
                    }
                b.vtp_gtmOnSuccess()
            })
        }();














    var Sw = {};
    Sw.dataLayer = Yd;
    Sw.callback = function(a) {
        Pd.hasOwnProperty(a) && na(Pd[a]) && Pd[a]();
        delete Pd[a]
    };
    Sw.bootstrap = 0;
    Sw._spx = !1;
    (function(a) {
        if (!G["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (I.referrer) {
                var c = ue(I.referrer);
                b = "cct.google" === re(c, "host")
            }
            if (!b) {
                var d = Rf("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (G["__TAGGY_INSTALLED"] = !0, hb("https://cct.google/taggy/agent.js"))
        }
        var e = !0;
        if (e) {
            a();
            return
        }
        var f = function(q) {
                var r = "GTM",
                    u = "GTM";
                u = r = "OPT";
                var t = G["google.tagmanager.debugui2.queue"];
                t || (t = [], G["google.tagmanager.debugui2.queue"] = t, hb("https://" + Bd.qc + "/debug/bootstrap?id=" + kg.K + "&src=" + u + "&cond=" + q + "&gtm=" + Cg()));
                var v = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: bb,
                        containerProduct: r,
                        debug: !1,
                        id: kg.K,
                        isGte: Md
                    }
                };
                v.data.resume = function() {
                    a()
                };
                Bd.Ch && (v.data.initialPublish = !0);
                t.push(v)
            },
            g = void 0,
            l = se(G.location, "query", !1, void 0, "gtm_debug");
        es(l) && (g = 2);
        if (!g && I.referrer) {
            var m = ue(I.referrer);
            "tagassistant.google.com" === re(m, "host") && (g = 3)
        }
        if (!g) {
            var n = Rf("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = I.documentElement.getAttribute("data-tag-assistant-present");
            es(p) && (g = 5)
        }
        g && bb ? f(g) : a()
    })(function() {
        var a = !1;
        a && fn("INIT");
        gf().m();
        fh();
        Zh.enable_gbraid_cookie_write = !0;
        var b = !!Cd[kg.K];
        !b && kg.oc && (b = !!Cd["ctid_" + kg.oc]);
        if (b) {
            var c = Cd.zones;
            c && c.unregisterChild(ug());
        } else {
            for (var d =
                    data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) Wb.push(e[f]);
            for (var g = d.tags || [], l = 0; l < g.length; l++) Zb.push(g[l]);
            for (var m = d.predicates || [], n = 0; n < m.length; n++) Yb.push(m[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var r = p[q], u = {}, t = 0; t < r.length; t++) u[r[t][0]] = Array.prototype.slice.call(r[t], 1);
                Xb.push(u)
            }
            ac = Z;
            bc = wt;
            Cd[kg.K] = Sw;
            kg.oc && (Cd["ctid_" + kg.oc] = Sw);
            for (var v = xg(), y = ug(), x = 0; x < y.length; x++) v.container[y[x]] = !0;
            for (var w = vg(), B = 0; B < w.length; B++) v.destination[w[B]] = !0;
            v.canonical[kg.oc] = !0;
            Fa(Qd, Z.o);
            ec = mc;
            ds();
            Qm = !1;
            Rm = 0;
            if ("interactive" == I.readyState && !I.createEventObject || "complete" == I.readyState) Tm();
            else {
                lb(I, "DOMContentLoaded", Tm);
                lb(I, "readystatechange", Tm);
                if (I.createEventObject && I.documentElement.doScroll) {
                    var A = !0;
                    try {
                        A = !G.frameElement
                    } catch (J) {}
                    A && Um()
                }
                lb(G, "load", Tm)
            }
            tr = !1;
            "complete" === I.readyState ? vr() : lb(G, "load", vr);
            dm();
            Vr({
                event: "gtm.js"
            });
            Od = F();
            Sw.bootstrap = Od;
            if (a) {
                var D = gn("INIT");
            }
        }
    });

})()