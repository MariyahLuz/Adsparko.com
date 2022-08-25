// Copyright 2012 Google Inc. All rights reserved.
(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');
(function() {

    var data = {
        "resource": {
            "version": "10",

            "macros": [{
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){try{var a=document.querySelectorAll(\"input.jet-chat__form-field\")[0].value,b=document.querySelectorAll(\"input.jet-chat__form-field\")[1].value;return 2==\/.{2,}\/.test(a)+\/.{2,}@.{2,}\/.test(b)?!0:!1}catch(c){return!1}})();"]
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__u",
                "vtp_component": "PATH"
            }, {
                "function": "__e"
            }, {
                "function": "__u",
                "vtp_component": "URL"
            }, {
                "function": "__u",
                "vtp_component": "HOST"
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }],
            "tags": [{
                "function": "__ua",
                "once_per_event": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": true,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": true,
                "vtp_trackingId": "UA-1217838-28",
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "tag_id": 1
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "Chat",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Click",
                "vtp_eventLabel": ["macro", 3],
                "vtp_useEcommerceDataLayer": false,
                "vtp_overrideGaSettings": true,
                "vtp_ecommerceMacroData": ["macro", 4],
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": true,
                "vtp_trackingId": "UA-114683021-1",
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 2
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "Chat",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Start",
                "vtp_eventLabel": ["macro", 3],
                "vtp_useEcommerceDataLayer": false,
                "vtp_overrideGaSettings": true,
                "vtp_ecommerceMacroData": ["macro", 4],
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": true,
                "vtp_trackingId": "UA-114683021-1",
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 3
            }, {
                "function": "__cl",
                "tag_id": 5
            }, {
                "function": "__cl",
                "tag_id": 6
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.location.search.split(\"aff\\x3d\")[1];if(b){var d=document.querySelectorAll(\"a\"),c;for(c=0;c\u003Cd.length;c++){var a=d[c];0==a.href.indexOf(\"https:\/\/www.templatemonster.com\")\u0026\u0026(0\u003Ca.href.indexOf(\"?\")?a.href=a.href+\"\\x26aff\\x3d\"+b:a.href=a.href+\"?aff\\x3d\"+b)}}b=document.location.search.split(\"i\\x3d\")[1];var e=document.location.search.split(\"pr_code\\x3d\")[1];if(b\u0026\u0026e)for(b=b.split(\"\\x26\")[0],d=document.querySelectorAll(\"a\"),c=0;c\u003Cd.length;c++)a=d[c],0==a.href.indexOf(\"https:\/\/www.templatemonster.com\")\u0026\u0026\n(a.href=\"https:\/\/www.templatehelp.com\/preset\/cart.php?act\\x3dadd\\x26templ\\x3d\"+b+\"\\x26pr_code\\x3d\"+e)})();\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 4
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "jet-chat-trigger"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.click"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "jet-chat__form-submit"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 5, 3, 4]
                ],
                [
                    ["if", 1, 2],
                    ["add", 1]
                ],
                [
                    ["if", 2, 3, 4],
                    ["add", 2]
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
    Bd.Dh = "ChEI8On8lwYQhsCQw4ajwcn/ARIjAMFm4lAoAoAze/c8BrkA2022DH+WnKLMJ4nwD//HA3TyvP8aAhyl";
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
        Qg: "UG",
        Fj: "UG-C"
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
            K: "GTM-P9FT69",
            oc: ""
        },
        lg = {
            fh: "GTM-P9FT69",
            gh: "GTM-P9FT69"
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
    var Pi = function(a, b, c) {
            if (G[a.functionName]) return b.lf && M(b.lf), G[a.functionName];
            var d = Oi();
            G[a.functionName] = d;
            if (a.Rd)
                for (var e = 0; e < a.Rd.length; e++) G[a.Rd[e]] = G[a.Rd[e]] || Oi();
            a.ee && void 0 === G[a.ee] && (G[a.ee] = c);
            hb(Ni("https://", "http://", a.uf), b.lf, b.uj);
            return d
        },
        Oi = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Qi = {
            functionName: "_googWcmImpl",
            ee: "_googWcmAk",
            uf: "www.gstatic.com/wcm/loader.js"
        },
        Ri = {
            functionName: "_gaPhoneImpl",
            ee: "ga_wpid",
            uf: "www.gstatic.com/gaphone/loader.js"
        },
        Si = {
            zh: "",
            wi: "5"
        },
        Ti = {
            functionName: "_googCallTrackingImpl",
            Rd: [Ri.functionName, Qi.functionName],
            uf: "www.gstatic.com/call-tracking/call-tracking_" + (Si.zh || Si.wi) + ".js"
        },
        Ui = {},
        Vi = function(a, b, c, d) {
            U(22);
            if (c) {
                d = d || {};
                var e = Pi(Qi, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.cb && (f.autoreplace = c);
                e(2, d.cb, f, c, 0, Ba(), d.options)
            }
        },
        Wi = function(a, b, c, d) {
            U(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ba()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    Ui[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.H.length ? (e.adData = {
                            ak: g.H[0],
                            cl: g.H[1]
                        }, Ui[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.J
                        }, Ui[g.id] = !0))
                }(e.gaData || e.adData) && Pi(Ti, d)(d.cb, e, d.options)
            }
        },
        Xi = function() {
            var a = !1;
            return a
        },
        Yi = function(a, b) {
            if (a)
                if (jg()) {} else {
                    if (k(a)) {
                        var c =
                            Ji(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(V.g.ci);
                    if (f && pa(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var l = Ji(f[g]);
                            l && (d.push(l), (a.id === l.id || a.id === a.J && a.J === l.J) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = b.getWithConfig(V.g.gg),
                            n;
                        if (m) {
                            pa(m) ? n = m : n = [m];
                            var p = b.getWithConfig(V.g.eg),
                                q = b.getWithConfig(V.g.fg),
                                r = b.getWithConfig(V.g.hg),
                                u = b.getWithConfig(V.g.bi),
                                t = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var y = 0; y < n.length; y++)
                                if (y < v)
                                    if (d) Wi(d, n[y], u, {
                                        cb: t,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix && a.H[1]) Xi() ?
                                Wi([a], n[y], u || "US", {
                                    cb: t,
                                    options: r
                                }) : Vi(a.H[0], a.H[1], n[y], {
                                    cb: t,
                                    options: r
                                });
                            else if ("UA" === a.prefix)
                                if (Xi()) Wi([a], n[y], u || "US", {
                                    cb: t
                                });
                                else {
                                    var x = a.J,
                                        w = n[y],
                                        B = {
                                            cb: t
                                        };
                                    U(23);
                                    if (w) {
                                        B = B || {};
                                        var A = Pi(Ri, B, x),
                                            C = {};
                                        void 0 !== B.cb ? C.receiver = B.cb : C.replace = w;
                                        C.ga_wpid = x;
                                        C.destination = w;
                                        A(2, Ba(), C)
                                    }
                                }
                        }
                    }
                }
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
        Fl = "https://www.googletagmanager.com/a?id=" + kg.K + "&cv=10",
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
    var pn = function(a) {},
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
    var dq = function(a, b) {
            if (!b.isGtmEvent) {
                var c = b.getWithConfig(V.g.Pa),
                    d = b.getWithConfig(V.g.Ya),
                    e = b.getWithConfig(c);
                if (void 0 === e) {
                    var f = void 0;
                    aq.hasOwnProperty(c) ? f = aq[c] : bq.hasOwnProperty(c) && (f = bq[c]);
                    1 === f && (f = cq(c));
                    k(f) ? kn()(function() {
                        var g = kn().getByName(a).get(f);
                        d(g)
                    }) : d(void 0)
                } else d(e)
            }
        },
        eq = function(a, b) {
            var c = a[V.g.Kc],
                d = b + ".",
                e = a[V.g.P] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                g = !!a[V.g.Sb];
            e = String(e).replace(/\s+/g, "").split(",");
            var l = kn();
            l(d + "require", "linker");
            l(d + "linker:autoLink",
                e, f, g)
        },
        iq = function(a, b, c) {
            if (tf() && (!c.isGtmEvent || !fq[a])) {
                var d = !Gf(V.g.O),
                    e = function(f) {
                        var g, l, m = kn(),
                            n = gq(b, "", c),
                            p, q = n.createOnlyFields._useUp;
                        if (c.isGtmEvent || hq(b, n.createOnlyFields)) {
                            c.isGtmEvent && (g = "gtm" + Rd(), l = n.createOnlyFields, n.gtmTrackerName && (l.name = g));
                            m(function() {
                                var u = m.getByName(b);
                                u && (p = u.get("clientId"));
                                c.isGtmEvent || m.remove(b)
                            });
                            m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
                            d && Gf(V.g.O) && (d = !1, m(function() {
                                var u = kn().getByName(c.isGtmEvent ? g : b);
                                !u || u.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&gcut"] = yd[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&gcut"] = yd[f]), u.set(n.fieldsToSet), c.isGtmEvent ? u.send("pageview") : u.send("pageview", n.fieldsToSend))
                            }));
                            c.isGtmEvent && m(function() {
                                m.remove(g)
                            })
                        }
                    };
                If(function() {
                    return e(V.g.O)
                }, V.g.O);
                If(function() {
                        return e(V.g.D)
                    },
                    V.g.D);
                c.isGtmEvent && (fq[a] = !0)
            }
        },
        jq = function(a, b) {
            En() && b && (a[V.g.tb] = b)
        },
        sq = function(a, b, c) {
            function d() {
                var K = c.getWithConfig(V.g.Dc);
                l(function() {
                    if (!c.isGtmEvent && wb(K)) {
                        var P = t.fieldsToSend,
                            S = m().getByName(n),
                            N;
                        for (N in K)
                            if (K.hasOwnProperty(N) && /^(dimension|metric)\d+$/.test(N) && void 0 != K[N]) {
                                var L = S.get(cq(K[N]));
                                kq(P, N, L)
                            }
                    }
                })
            }

            function e() {
                if (t.displayfeatures) {
                    var K = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: K
                    })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                l = c.isGtmEvent ? mn(c.getWithConfig("gaFunctionName")) : mn();
            if (na(l)) {
                var m = kn,
                    n;
                c.isGtmEvent ? n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(K) {
                        var P = [].slice.call(arguments, 0);
                        P[0] = n ? n + "." + P[0] : "" + P[0];
                        l.apply(window, P)
                    },
                    q = function(K) {
                        var P = function(R, la) {
                                for (var Ca = 0; la && Ca < la.length; Ca++) p(R, la[Ca])
                            },
                            S = c.isGtmEvent,
                            N = S ? lq(t) : mq(b, c);
                        if (N) {
                            var L = {};
                            jq(L, K);
                            p("require", "ec", "ec.js", L);
                            S && N.Ve && p("set", "&cu", N.Ve);
                            var T = N.action;
                            if (S || "impressions" ===
                                T)
                                if (P("ec:addImpression", N.ah), !S) return;
                            if ("promo_click" === T || "promo_view" === T || S && N.bd) {
                                var Q = N.bd;
                                P("ec:addPromo", Q);
                                if (Q && 0 < Q.length && "promo_click" === T) {
                                    S ? p("ec:setAction", T, N.nb) : p("ec:setAction", T);
                                    return
                                }
                                if (!S) return
                            }
                            "promo_view" !== T && "impressions" !== T && (P("ec:addProduct", N.Cb), p("ec:setAction", T, N.nb))
                        }
                    },
                    r = function(K) {
                        if (K) {
                            var P = {};
                            if (wb(K))
                                for (var S in nq) nq.hasOwnProperty(S) && oq(nq[S], S, K[S], P);
                            jq(P, x);
                            p("require", "linkid", P)
                        }
                    },
                    u = function() {
                        if (jg()) {} else {
                            var K = c.getWithConfig(V.g.ai);
                            K && (p("require", K, {
                                dataLayer: Bd.ba
                            }), p("require", "render"))
                        }
                    },
                    t = gq(n, b, c),
                    v = function(K, P, S) {
                        S && (P = "" + P);
                        t.fieldsToSend[K] = P
                    };
                !c.isGtmEvent && hq(n, t.createOnlyFields) && (l(function() {
                    m() && m().remove(n)
                }), pq[n] = !1);
                l("create", f, t.createOnlyFields);
                if (t.createOnlyFields[V.g.tb] && !c.isGtmEvent) {
                    var y = Cn(t.createOnlyFields[V.g.tb], "/analytics.js");
                    y && (g = y)
                }
                var x = c.isGtmEvent ? t.fieldsToSet[V.g.tb] : t.createOnlyFields[V.g.tb];
                if (x) {
                    var w =
                        c.isGtmEvent ? t.fieldsToSet[V.g.Bd] : t.createOnlyFields[V.g.Bd];
                    w && !pq[n] && (pq[n] = !0, l(qn(n, w)))
                }
                c.isGtmEvent ? t.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(t.linkAttribution));
                var B = t[V.g.oa];
                B && B[V.g.P] && eq(B, n);
                p("set", t.fieldsToSet);
                if (c.isGtmEvent) {
                    if (t.enableLinkId) {
                        var A = {};
                        jq(A, x);
                        p("require", "linkid", "linkid.js", A)
                    }
                    tf() && iq(f, n, c)
                }
                if (b === V.g.sc)
                    if (c.isGtmEvent) {
                        e();
                        if (t.remarketingLists) {
                            var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: C
                            })
                        }
                        q(x);
                        p("send", "pageview");
                        t.createOnlyFields._useUp && nn(n + ".")
                    } else u(), p("send", "pageview", t.fieldsToSend);
                else b === V.g.sa ? (u(), Yi(f, c), c.getWithConfig(V.g.Za) && (xi(["aw", "dc"]), nn(n + ".")), 0 != t.sendPageView && p("send", "pageview", t.fieldsToSend), iq(f, n, c)) : b === V.g.Da ? dq(n, c) : "screen_view" === b ? p("send", "screenview", t.fieldsToSend) : "timing_complete" === b ? (t.fieldsToSend.hitType = "timing", v("timingCategory", t.eventCategory, !0), c.isGtmEvent ? v("timingVar", t.timingVar, !0) : v("timingVar", t.name, !0), v("timingValue",
                    xa(t.value)), void 0 !== t.eventLabel && v("timingLabel", t.eventLabel, !0), p("send", t.fieldsToSend)) : "exception" === b ? p("send", "exception", t.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (t.fieldsToSend.hitType = "social", v("socialNetwork", t.socialNetwork, !0), v("socialAction", t.socialAction, !0), v("socialTarget", t.socialTarget, !0)) : ((c.isGtmEvent || qq[b]) && q(x), c.isGtmEvent && e(), t.fieldsToSend.hitType = "event", v("eventCategory", t.eventCategory, !0), v("eventAction", t.eventAction || b, !0),
                    void 0 !== t.eventLabel && v("eventLabel", t.eventLabel, !0), void 0 !== t.value && v("eventValue", xa(t.value))), p("send", t.fieldsToSend));
                var E = !1;
                var H = rq;
                E && (H = c.getContainerTypeLoaded("UA"));
                if (!H && !c.isGtmEvent) {
                    rq = !0;
                    E && c.setContainerTypeLoaded("UA", !0);
                    en();
                    var D = function() {
                            E && c.setContainerTypeLoaded("UA", !1);
                            c.onFailure()
                        },
                        J = function() {
                            m().loaded ||
                                D()
                        };
                    jg() ? M(J) : hb(g, J, D)
                }
            } else M(c.onFailure)
        },
        tq = function(a, b, c, d) {
            Jf(function() {
                sq(a, b, d)
            }, [V.g.O, V.g.D])
        },
        vq = function(a, b) {
            function c(f) {
                function g(p, q) {
                    for (var r = 0; r < q.length; r++) {
                        var u = q[r];
                        if (f[u]) {
                            m[p] = f[u];
                            break
                        }
                    }
                }

                function l() {
                    if (f.category) m.category = f.category;
                    else {
                        for (var p = "", q = 0; q < uq.length; q++) void 0 !== f[uq[q]] && (p && (p += "/"), p += f[uq[q]]);
                        p && (m.category = p)
                    }
                }
                var m = O(f),
                    n = !1;
                if (n || b) g("id", ["id", "item_id", "promotion_id"]), g("name", ["name", "item_name", "promotion_name"]), g("brand", ["brand", "item_brand"]), g("variant", ["variant", "item_variant"]), g("list", ["list_name", "item_list_name"]), g("position", ["list_position", "creative_slot", "index"]), l();
                g("listPosition", ["list_position"]);
                g("creative", ["creative_name"]);
                g("list", ["list_name"]);
                g("position", ["list_position", "creative_slot"]);
                return m
            }
            b = void 0 === b ? !1 : b;
            for (var d = [], e = 0; a && e < a.length; e++) a[e] && wb(a[e]) && d.push(c(a[e]));
            return d.length ? d : void 0
        },
        wq = function(a) {
            return Gf(a)
        },
        xq = !1;
    var rq, pq = {},
        fq = {},
        yq = {},
        aq = Object.freeze((yq.client_storage = "storage", yq.sample_rate = 1, yq.site_speed_sample_rate = 1, yq.store_gac = 1, yq.use_amp_client_id = 1, yq[V.g.Wa] = 1, yq[V.g.ma] = "storeGac", yq[V.g.na] = 1, yq[V.g.wa] = 1, yq[V.g.Ja] = 1, yq[V.g.Mb] = 1, yq[V.g.jb] = 1, yq[V.g.sb] = 1, yq)),
        zq = {},
        Aq = Object.freeze((zq._cs = 1, zq._useUp = 1, zq.allowAnchor = 1,
            zq.allowLinker = 1, zq.alwaysSendReferrer = 1, zq.clientId = 1, zq.cookieDomain = 1, zq.cookieExpires = 1, zq.cookieFlags = 1, zq.cookieName = 1, zq.cookiePath = 1, zq.cookieUpdate = 1, zq.legacyCookieDomain = 1, zq.legacyHistoryImport = 1, zq.name = 1, zq.sampleRate = 1, zq.siteSpeedSampleRate = 1, zq.storage = 1, zq.storeGac = 1, zq.useAmpClientId = 1, zq._cd2l = 1, zq)),
        Bq = Object.freeze({
            anonymize_ip: 1
        }),
        Cq = {},
        bq = Object.freeze((Cq.campaign = {
            content: "campaignContent",
            id: "campaignId",
            medium: "campaignMedium",
            name: "campaignName",
            source: "campaignSource",
            term: "campaignKeyword"
        }, Cq.app_id = 1, Cq.app_installer_id = 1, Cq.app_name = 1, Cq.app_version = 1, Cq.description = "exDescription", Cq.fatal = "exFatal", Cq.language = 1, Cq.page_hostname = "hostname", Cq.transport_type = "transport", Cq[V.g.ka] = "currencyCode", Cq[V.g.cg] = 1, Cq[V.g.La] = "location", Cq[V.g.Be] = "page", Cq[V.g.Qa] = "referrer", Cq[V.g.Ub] = "title", Cq[V.g.kg] = 1, Cq[V.g.ya] = 1, Cq)),
        Dq = {},
        Eq = Object.freeze((Dq.content_id = 1, Dq.event_action = 1, Dq.event_category = 1, Dq.event_label = 1, Dq.link_attribution = 1, Dq.name = 1, Dq[V.g.oa] = 1,
            Dq[V.g.ag] = 1, Dq[V.g.qa] = 1, Dq[V.g.ia] = 1, Dq)),
        Fq = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        uq = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        Gq = {},
        nq = Object.freeze((Gq.levels = 1, Gq[V.g.wa] = "duration", Gq[V.g.Mb] = 1, Gq)),
        Hq = {},
        Iq = Object.freeze((Hq.anonymize_ip =
            1, Hq.fatal = 1, Hq.send_page_view = 1, Hq.store_gac = 1, Hq.use_amp_client_id = 1, Hq[V.g.ma] = 1, Hq[V.g.cg] = 1, Hq)),
        oq = function(a, b, c, d) {
            if (void 0 !== c)
                if (Iq[b] && (c = ya(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[cq(b)] = c;
                else if (k(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        cq = function(a) {
            return a && k(a) ? a.replace(/(_[a-z])/g, function(b) {
                return b[1].toUpperCase()
            }) : a
        },
        Jq = {},
        qq = Object.freeze((Jq.checkout_progress = 1, Jq.select_content = 1, Jq.set_checkout_option = 1, Jq[V.g.Hb] = 1, Jq[V.g.Ib] =
            1, Jq[V.g.qb] = 1, Jq[V.g.rb] = 1, Jq[V.g.Jb] = 1, Jq[V.g.ra] = 1, Jq[V.g.Kb] = 1, Jq[V.g.Ca] = 1, Jq)),
        Kq = {},
        Lq = Object.freeze((Kq.checkout_progress = 1, Kq.set_checkout_option = 1, Kq[V.g.If] = 1, Kq[V.g.Hb] = 1, Kq[V.g.Ib] = 1, Kq[V.g.qb] = 1, Kq[V.g.ra] = 1, Kq[V.g.Kb] = 1, Kq[V.g.Jf] = 1, Kq)),
        Mq = {},
        Nq = Object.freeze((Mq.generate_lead = 1, Mq.login = 1, Mq.search = 1, Mq.select_content = 1, Mq.share = 1, Mq.sign_up = 1, Mq.view_search_results = 1, Mq[V.g.rb] = 1, Mq[V.g.Jb] = 1, Mq[V.g.Ca] = 1, Mq)),
        Oq = function(a) {
            var b = "general";
            Lq[a] ? b = "ecommerce" : Nq[a] ? b = "engagement" :
                "exception" === a && (b = "error");
            return b
        },
        Pq = {},
        Qq = Object.freeze((Pq.view_search_results = 1, Pq[V.g.rb] = 1, Pq[V.g.Jb] = 1, Pq[V.g.Ca] = 1, Pq)),
        kq = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        Rq = function(a) {
            if (pa(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        gq = function(a, b, c) {
            var d = function(J) {
                    return c.getWithConfig(J)
                },
                e = {},
                f = {},
                g = {},
                l = {},
                m = Rq(d(V.g.Zh));
            !c.isGtmEvent && m && kq(f,
                "exp", m);
            g["&gtm"] = Cg(!0);
            tf() && (l._cs = wq);
            var n = d(V.g.Dc);
            if (!c.isGtmEvent && wb(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && kq(f, p, q)
                    }
            for (var r = c.getTopLevelKeys(), u = 0; u < r.length; ++u) {
                var t = r[u];
                if (c.isGtmEvent) {
                    var v = d(t);
                    Fq.hasOwnProperty(t) ? e[t] = v : Aq.hasOwnProperty(t) ? l[t] = v : g[t] = v
                } else {
                    var y = void 0;
                    y = t !== V.g.W ? d(t) : c.getMergedValues(t);
                    if (Eq.hasOwnProperty(t)) oq(Eq[t], t, y, e);
                    else if (Bq.hasOwnProperty(t)) oq(Bq[t],
                        t, y, g);
                    else if (bq.hasOwnProperty(t)) oq(bq[t], t, y, f);
                    else if (aq.hasOwnProperty(t)) oq(aq[t], t, y, l);
                    else if (/^(dimension|metric|content_group)\d+$/.test(t)) oq(1, t, y, f);
                    else if (t === V.g.W) {
                        if (!xq) {
                            var x = Ka(y);
                            x && (f["&did"] = x)
                        }
                        var w = void 0,
                            B = void 0;
                        b === V.g.sa ? w = Ka(c.getMergedValues(t), ".") : (w = Ka(c.getMergedValues(t, 1), "."), B = Ka(c.getMergedValues(t, 2), "."));
                        w && (f["&gdid"] = w);
                        B && (f["&edid"] = B)
                    } else t === V.g.Fa && 0 > r.indexOf(V.g.Mb) && (l.cookieName = y + "_ga")
                }
            }!1 !== d(V.g.Ph) && !1 !== d(V.g.vc) && Zp() || (g.allowAdFeatures = !1);
            !1 !== d(V.g.U) && $p() || (g.allowAdPersonalizationSignals = !1);
            !c.isGtmEvent && d(V.g.Za) && (l._useUp = !0);
            if (c.isGtmEvent) {
                l.name = l.name || e.gtmTrackerName;
                var A = g.hitCallback;
                g.hitCallback = function() {
                    na(A) && A();
                    c.onSuccess()
                }
            } else {
                kq(l, "cookieDomain", "auto");
                kq(g, "forceSSL", !0);
                kq(e, "eventCategory", Oq(b));
                Qq[b] && kq(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? kq(e, "eventLabel", d(V.g.ag)) : "search" === b || "view_search_results" === b ? kq(e, "eventLabel", d(V.g.gi)) : "select_content" === b && kq(e,
                    "eventLabel", d(V.g.Sh));
                var C = e[V.g.oa] || {},
                    E = C[V.g.Rb];
                E || 0 != E && C[V.g.P] ? l.allowLinker = !0 : !1 === E && kq(l, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                l.name = a
            }
            tf() && (g["&gcs"] = Hf(), Gf(V.g.O) || (l.storage = "none"), Gf(V.g.D) || (g.allowAdFeatures = !1, l.storeGac = !1));
            var H = d(V.g.Z) || d(V.g.tb),
                D = d(V.g.Bd);
            H && (c.isGtmEvent || (l[V.g.tb] = H), l._cd2l = !0);
            D && !c.isGtmEvent && (l[V.g.Bd] = D);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = l;
            return e
        },
        lq = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Ve = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.ah = "impressions" === b.translateIfKeyEquals ? vq(d, !0) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.bd = "promoView" === b.translateIfKeyEquals ? vq(e, !0) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.bd = "promoClick" === b.translateIfKeyEquals ? vq(f, !0) : f;
                c.nb = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !==
                    g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var l = b[g].products;
                    c.Cb = "products" === b.translateIfKeyEquals ? vq(l, !0) : l;
                    c.nb = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        mq = function(a, b) {
            function c(u) {
                return {
                    id: d(V.g.Ga),
                    affiliation: d(V.g.Wh),
                    revenue: d(V.g.ia),
                    tax: d(V.g.Of),
                    shipping: d(V.g.Ec),
                    coupon: d(V.g.Xh),
                    list: d(V.g.ve) || u
                }
            }
            for (var d = function(u) {
                    return b.getWithConfig(u)
                }, e = d(V.g.V), f, g = 0; e && g < e.length && !(f = e[g][V.g.ve]); g++);
            var l = d(V.g.Dc);
            if (wb(l))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in l) l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && kq(n, p, n[l[p]])
                }
            var q = null,
                r = d(V.g.Yh);
            a === V.g.ra || a === V.g.Kb ? q = {
                action: a,
                nb: c(),
                Cb: vq(e)
            } : a === V.g.Hb ? q = {
                action: "add",
                Cb: vq(e)
            } : a === V.g.Ib ? q = {
                action: "remove",
                Cb: vq(e)
            } : a === V.g.Ca ? q = {
                action: "detail",
                nb: c(f),
                Cb: vq(e)
            } : a === V.g.rb ? q = {
                action: "impressions",
                ah: vq(e)
            } : "view_promotion" === a ? q = {
                action: "promo_view",
                bd: vq(r)
            } : "select_content" === a && r && 0 < r.length ? q = {
                action: "promo_click",
                bd: vq(r)
            } : "select_content" === a ? q = {
                action: "click",
                nb: {
                    list: d(V.g.ve) || f
                },
                Cb: vq(e)
            } : a === V.g.qb || "checkout_progress" === a ? q = {
                action: "checkout",
                Cb: vq(e),
                nb: {
                    step: a === V.g.qb ? 1 : d(V.g.Nf),
                    option: d(V.g.Mf)
                }
            } : "set_checkout_option" === a && (q = {
                action: "checkout_option",
                nb: {
                    step: d(V.g.Nf),
                    option: d(V.g.Mf)
                }
            });
            q && (q.Ve = d(V.g.ka));
            return q
        },
        Sq = {},
        hq = function(a, b) {
            var c = Sq[a];
            Sq[a] = O(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
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
    var gs = function(a) {
        this.h = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === fs.Kd ? b : a[d]);
            return c.join("")
        }
    };
    gs.prototype.toString = function() {
        return this.h("undefined")
    };
    gs.prototype.valueOf = gs.prototype.toString;
    fs.xi = gs;
    fs.Pe = {};
    fs.Ki = function(a) {
        return new gs(a)
    };
    var hs = {};
    fs.Hj = function(a, b) {
        var c = Rd();
        hs[c] = [a, b];
        return c
    };
    fs.Rg = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = hs[c];
            if (d && "function" === typeof d[b]) d[b]();
            hs[c] = void 0
        }
    };
    fs.ij = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    fs.zj = function(a) {
        if (a === fs.Kd) return a;
        var b = Rd();
        fs.Pe[b] = a;
        return 'google_tag_manager["' + kg.K + '"].macro(' + b + ")"
    };
    fs.sj = function(a, b, c) {
        a instanceof fs.xi && (a = a.h(fs.Hj(b, c)), b = ma);
        return {
            cj: a,
            onSuccess: b
        }
    };
    var is = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": sb(a, "className"),
                "gtm.elementId": a["for"] || nb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || sb(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || sb(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        js = function(a) {
            Cd.hasOwnProperty("autoEventsSettings") || (Cd.autoEventsSettings = {});
            var b = Cd.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        ks = function(a, b, c) {
            js(a)[b] = c
        },
        ls = function(a, b, c, d) {
            var e = js(a),
                f = Da(e, b, d);
            e[b] = c(f)
        },
        ms = function(a, b, c) {
            var d = js(a);
            return Da(d, b, c)
        };
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
    var Vs = fs.sj;
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
    var Z = {
        o: {}
    };




    Z.o.jsm = ["customScripts"],
        function() {
            (function(a) {
                Z.__jsm = a;
                Z.__jsm.s = "jsm";
                Z.__jsm.isVendorTemplate = !0;
                Z.__jsm.priorityOverride = 0
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = X("google_tag_manager");
                        var d = c && c.e && c.e(b);
                        Us(d, "jsm", a.vtp_gtmEventId);
                        return d
                    } catch (e) {}
                }
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
    Z.o.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.s = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0
            })(function(a) {
                var b = Ms("gtm.referrer", 1) || I.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? se(ue(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Ls(String(b)) : String(b)
            })
        }();
    Z.o.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = is(c, "gtm.click");
                    Ns(d)
                }
            }(function(b) {
                Z.__cl = b;
                Z.__cl.s = "cl";
                Z.__cl.isVendorTemplate = !0;
                Z.__cl.priorityOverride = 0
            })(function(b) {
                if (!Ss("cl")) {
                    var c = X("document");
                    lb(c, "click", a, !0);
                    Ts("cl")
                }
                M(b.vtp_gtmOnSuccess)
            })
        }();

    Z.o.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.s = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Ms("gtm.url", 1)) || Js();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Ls(String(c));
                var e = ue(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        l = b[a("vtp_queryKey").toString()] || "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? pa(l) ?
                    n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
                    for (var p = 0; p < n.length; p++) {
                        var q = se(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = se(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Z.o.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.s = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = Ms(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                Us(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();
    Z.o.ua = ["google"],
        function() {
            function a(m, n) {
                for (var p in m)
                    if (!l[p] && m.hasOwnProperty(p)) {
                        var q = g[p] ? ya(m[p]) : m[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(m) {
                var n = {};
                m.vtp_gaSettings && O(xv(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                O(xv(m.vtp_fieldsToSet, "fieldName", "value"), n);
                ya(n.urlPassthrough) && (n._useUp = !0);
                m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
                return n
            }

            function c(m, n) {
                return void 0 === n ? n : m(n)
            }

            function d(m, n, p) {
                var q = function(S, N, L) {
                        for (var T in S)
                            if (r.hasOwnProperty(T)) {
                                var Q = L[N] || {};
                                Q.actionField = Q.actionField || {};
                                Q.actionField[r[T]] = S[T];
                                L[N] = Q
                            }
                    },
                    r = {
                        transaction_id: "id",
                        affiliation: "affiliation",
                        value: "revenue",
                        tax: "tax",
                        shipping: "shipping",
                        coupon: "coupon",
                        item_list_name: "list"
                    },
                    u = {},
                    t = (u[V.g.oe] = "click", u[V.g.Ca] = "detail", u[V.g.Hb] = "add", u[V.g.Ib] = "remove", u[V.g.qb] = "checkout", u[V.g.ra] = "purchase", u[V.g.Kb] = "refund", u),
                    v;
                if (m.vtp_useEcommerceDataLayer) {
                    var y = !1;
                    m.vtp_useGA4SchemaForEcommerce && (v = m.vtp_gtmCachedValues.eventModel,
                        y = !!v);
                    y || (v = Ms("ecommerce", 1))
                } else m.vtp_ecommerceMacroData && (v = m.vtp_ecommerceMacroData.ecommerce, !v && m.vtp_useGA4SchemaForEcommerce && (v = m.vtp_ecommerceMacroData));
                if (!wb(v)) return;
                v = Object(v);
                var x = {},
                    w = v.currencyCode;
                m.vtp_useGA4SchemaForEcommerce && (w = w || v.currency);
                var B = Da(n, "currencyCode", w);
                B && (x.currencyCode = B);
                v.impressions &&
                    (x.impressions = v.impressions);
                v.promoView && (x.promoView = v.promoView);
                if (m.vtp_useGA4SchemaForEcommerce) {
                    if (p === V.g.rb && !v.impressions) v.items && (x.impressions = v.items, x.translateIfKeyEquals = "impressions");
                    else if (p === V.g.Jb && !v.promoView) v.promoView = {}, v.items && (x.promoView = {}, x.promoView.promotions = v.items, x.translateIfKeyEquals = "promoView");
                    else if (p === V.g.pe && !v.promoClick) v.promoClick = {}, v.items && (x.promoClick = {}, x.promoClick.promotions = v.items, x.translateIfKeyEquals = "promoClick", q(v, "promoClick",
                        x));
                    else if (t.hasOwnProperty(p)) {
                        var A = t[p];
                        !v[A] && v.items && (x[A] = {}, x[A].products = v.items, x.translateIfKeyEquals = "products", q(v, A, x))
                    }
                    var C = x.translateIfKeyEquals;
                    if ("promoClick" === C || "products" === C) return x
                }
                if (v.promoClick) return x.promoClick = v.promoClick, x;
                for (var E = "detail checkout checkout_option click add remove purchase refund".split(" "), H = "refund purchase remove checkout checkout_option add click detail".split(" "), D = 0; D < E.length; D++) {
                    var J = v[E[D]];
                    if (J) {
                        x[E[D]] = J;
                        if (Ll)
                            for (var K = 0; K < H.length; K++) {
                                var P =
                                    v[H[K]];
                                if (P) {
                                    P !== J && U(13);
                                    break
                                }
                            }
                        return x
                    }
                }
                m.vtp_useGA4SchemaForEcommerce && t.hasOwnProperty(p) && q(v, t[p], x);
                return x;
            }

            function e(m, n) {
                if (!f) {
                    var p = m.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = m.vtp_gtmOnFailure,
                        r = Cn(n._x_19, "/analytics.js"),
                        u = Ni("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    W("analytics.js" === p && r ? r :
                        u,
                        function() {
                            var t = kn();
                            t && t.loaded || q();
                        }, q)
                }
            }
            var f, g = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                l = {
                    urlPassthrough: !0
                };
            (function(m) {
                Z.__ua =
                    m;
                Z.__ua.s = "ua";
                Z.__ua.isVendorTemplate = !0;
                Z.__ua.priorityOverride = 0
            })(function(m) {
                function n() {
                    if (m.vtp_doubleClick || "DISPLAY_FEATURES" == m.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    r = {};
                if (m.vtp_gaSettings) {
                    var u = m.vtp_gaSettings;
                    O(xv(u.vtp_contentGroup, "index", "group"), p);
                    O(xv(u.vtp_dimension, "index", "dimension"), q);
                    O(xv(u.vtp_metric, "index", "metric"), r);
                    var t = O(u);
                    t.vtp_fieldsToSet = void 0;
                    t.vtp_contentGroup = void 0;
                    t.vtp_dimension = void 0;
                    t.vtp_metric = void 0;
                    m = O(m, t)
                }
                O(xv(m.vtp_contentGroup,
                    "index", "group"), p);
                O(xv(m.vtp_dimension, "index", "dimension"), q);
                O(xv(m.vtp_metric, "index", "metric"), r);
                var v = b(m),
                    y = String(m.vtp_trackingId || ""),
                    x = "",
                    w = "",
                    B = "";
                m.vtp_setTrackerName && "string" == typeof m.vtp_trackerName ? "" !== m.vtp_trackerName && (B = m.vtp_trackerName, w = B + ".") : (B = "gtm" + Rd(), w = B + ".");
                var A = function(Q, R) {
                    for (var la in R) R.hasOwnProperty(la) && (v[Q + la] = R[la])
                };
                A("contentGroup", p);
                A("dimension", q);
                A("metric", r);
                m.vtp_enableEcommerce && (x = m.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(m, v, x));
                if ("TRACK_EVENT" === m.vtp_trackType) x = "track_event", n(), v.eventCategory = String(m.vtp_eventCategory), v.eventAction = String(m.vtp_eventAction), v.eventLabel = c(String, m.vtp_eventLabel), v.value = c(xa, m.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
                    if (x = V.g.sc, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == m.vtp_advertisingFeaturesType && (v.remarketingLists = !0), m.vtp_autoLinkDomains) {
                        var C = {};
                        C[V.g.P] = m.vtp_autoLinkDomains;
                        C.use_anchor = m.vtp_useHashAutoLink;
                        C[V.g.Sb] = m.vtp_decorateFormsAutoLink;
                        v[V.g.oa] = C
                    }
                } else "TRACK_SOCIAL" === m.vtp_trackType ? (x = "track_social", v.socialNetwork = String(m.vtp_socialNetwork), v.socialAction = String(m.vtp_socialAction), v.socialTarget = String(m.vtp_socialActionTarget)) : "TRACK_TIMING" == m.vtp_trackType && (x = "timing_complete", v.eventCategory = String(m.vtp_timingCategory), v.timingVar = String(m.vtp_timingVar), v.value = xa(m.vtp_timingValue), v.eventLabel = c(String, m.vtp_timingLabel));
                m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                m.vtp_enableLinkId && (v.enableLinkId = !0);
                var E = {};
                a(v, E);
                v.name || (E.gtmTrackerName = B);
                E.gaFunctionName = m.vtp_functionName;
                void 0 !== m.vtp_nonInteraction && (E.nonInteraction = m.vtp_nonInteraction);
                var H = vo(so(lo(new ko(m.vtp_gtmEventId, m.vtp_gtmPriorityId), E), m.vtp_gtmOnSuccess), m.vtp_gtmOnFailure);
                H.isGtmEvent = !0;
                tq(y, x, Date.now(), H);
                var D = mn(m.vtp_functionName);
                if (na(D)) {
                    var J = function(Q) {
                        var R = [].slice.call(arguments, 0);
                        R[0] = w + R[0];
                        D.apply(window, R)
                    };
                    if ("TRACK_TRANSACTION" == m.vtp_trackType) {} else if ("DECORATE_LINK" ==
                        m.vtp_trackType) {} else if ("DECORATE_FORM" == m.vtp_trackType) {} else if ("TRACK_DATA" == m.vtp_trackType) {}
                    e(m, v)
                } else M(m.vtp_gtmOnFailure)
            })
        }();




    Z.o.aev = ["google"],
        function() {
            function a(r, u, t, v, y) {
                y || (y = "element");
                var x = u + "." + t,
                    w;
                if (n.hasOwnProperty(x)) w = n[x];
                else {
                    var B = r[y];
                    if (B && (w = v(B), n[x] = w, p.push(x), 35 < p.length)) {
                        var A = p.shift();
                        delete n[A]
                    }
                }
                return w
            }

            function b(r, u, t) {
                var v = r[q[u]];
                return void 0 !== v ? v : t
            }

            function c(r, u) {
                if (!r) return !1;
                var t = d(Js());
                pa(u) || (u = String(u || "").replace(/\s+/g, "").split(","));
                for (var v = [t], y = 0; y < u.length; y++) {
                    var x = u[y];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x = new RegExp(x.domain)
                        } catch (A) {
                            continue
                        } else x =
                            x.domain;
                    var w = d(r);
                    if (x instanceof RegExp) {
                        if (x.test(w)) return !1
                    } else {
                        var B = x;
                        if (0 != B.length) {
                            if (0 <= w.indexOf(B)) return !1;
                            v.push(d(B))
                        }
                    }
                }
                return !wv(r, v)
            }

            function d(r) {
                m.test(r) || (r = "http://" + r);
                return se(ue(r), "HOST", !0)
            }

            function e(r, u, t, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(u, t, "FORM." + r, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var y = a(u, t, "FORM." + r, g);
                        return void 0 === y ? v : y;
                    case "INTERACTED_FIELD_ID":
                        return l(u, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return l(u, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return l(u,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var x = u.interactedFormFieldPosition;
                        return void 0 === x ? v : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var w = u.interactSequenceNumber;
                        return void 0 === w ? v : w;
                    default:
                        return v
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return nb(r, "value");
                    case "button":
                        return ob(r);
                    default:
                        return null
                }
            }

            function g(r) {
                if ("form" === r.tagName.toLowerCase() && r.elements) {
                    for (var u = 0, t = 0; t < r.elements.length; t++) ps(r.elements[t]) && u++;
                    return u
                }
            }

            function l(r, u, t) {
                var v = r.interactedFormField;
                return v && nb(v, u) || t
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Z.__aev = r;
                Z.__aev.s = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0
            })(function(r) {
                var u = r.vtp_gtmEventId,
                    t = r.vtp_defaultValue,
                    v = r.vtp_varType,
                    y = r.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var x = y.element;
                        return x && x.tagName || t;
                    case "TEXT":
                        return a(y, u, v, ob) || t;
                    case "URL":
                        var w;
                        a: {
                            var B = String(y.elementUrl || t || ""),
                                A = ue(B),
                                C = String(r.vtp_component || "URL");
                            switch (C) {
                                case "URL":
                                    w = B;
                                    break a;
                                case "IS_OUTBOUND":
                                    w = c(B, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    w = se(A, C, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return w;
                    case "ATTRIBUTE":
                        var E;
                        if (void 0 === r.vtp_attribute) E = b(y, v, t);
                        else {
                            var H = y.element;
                            E = H && nb(H, r.vtp_attribute) ||
                                t || ""
                        }
                        return E;
                    case "MD":
                        var D = r.vtp_mdValue,
                            J = a(y, u, "MD", Bs);
                        return D && J ? Es(J, D) || t : J || t;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), y, u, t);
                    default:
                        var K = b(y, v, t);
                        Us(K, "aev", r.vtp_gtmEventId);
                        return K
                }
            })
        }();





    Z.o.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var l = e.shift(),
                                m = a(d, e, f, g);
                            if ("SCRIPT" == String(l.nodeName).toUpperCase() && "text/gtmscript" == l.type) {
                                var n = I.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = l.id;
                                n.text = l.text || l.textContent || l.innerHTML || "";
                                l.charset && (n.charset = l.charset);
                                var p = l.getAttribute("data-gtmsrc");
                                p && (n.src = p, db(n, m));
                                d.insertBefore(n, null);
                                p || m()
                            } else if (l.innerHTML && 0 <= l.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; l.firstChild;) q.push(l.removeChild(l.firstChild));
                                d.insertBefore(l, null);
                                a(l, q, m, g)()
                            } else d.insertBefore(l, null), m()
                        } else f()
                    } catch (r) {
                        M(g)
                    }
                }
            }

            function b(d) {
                if (I.body) {
                    var e = d.vtp_gtmOnFailure,
                        f = Vs(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.cj,
                        l = f.onSuccess;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(g, l, e) : a(I.body, pb(g), l, e)()
                } else Hs(function() {
                    b(d)
                }, 200)
            }
            Z.__html = b;
            Z.__html.s =
                "html";
            Z.__html.isVendorTemplate = !0;
            Z.__html.priorityOverride = 0
        }();









    var Sw = {};
    Sw.macro = function(a) {
        if (fs.Pe.hasOwnProperty(a)) return fs.Pe[a]
    }, Sw.onHtmlSuccess = fs.Rg(!0), Sw.onHtmlFailure = fs.Rg(!1);
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
        var f = function(q) {
                var r = "GTM",
                    u = "GTM";
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
            dc = dc || fs;
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
            Od = F();
            Sw.bootstrap = Od;
            if (a) {
                var D = gn("INIT");
            }
        }
    });

})()