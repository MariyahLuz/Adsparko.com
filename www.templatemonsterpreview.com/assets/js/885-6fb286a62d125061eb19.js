/*! For license information please see 885-6fb286a62d125061eb19.js.LICENSE.txt */
"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [885, 682], {
        682: (t, e, r) => {
            r.d(e, {
                r: () => s
            });
            var n = r(5980),
                a = r(5191);
            const o = {
                productAnalytics: {
                    options: {
                        threshold: [.2]
                    },
                    callback: function(t, e) {
                        var r = [];
                        return t.forEach((function(t) {
                            t.isIntersecting && ((0, n.y)((0, a.c)("impressionSent", t.target.dataset)), e.unobserve(t.target), r.push(t.target.dataset))
                        })), r
                    }
                },
                authorNavigation: {
                    options: {
                        rootMargin: "-10% 0% -85% 0%"
                    },
                    callback: function(t) {
                        var e = document.querySelector(".floating-bar-tabs"),
                            r = document.querySelector(".author-tabs");
                        t.forEach((function(t) {
                            var n = t.target.querySelector(".anchor").id;
                            "author-intro" === n && (t.isIntersecting ? r.classList.remove("author-tabs_shadow") : r.classList.add("author-tabs_shadow")), t.isIntersecting && e.querySelectorAll(".floating-bar-tabs-link").forEach((function(t) {
                                t.getAttribute("href") === "#".concat(n) || t.getAttribute("data-href") === "#".concat(n) ? t.classList.add("floating-bar-tabs-link_active") : t.classList.remove("floating-bar-tabs-link_active")
                            }))
                        }))
                    }
                },
                productNavBar: {
                    options: {
                        rootMargin: "-8% 0% -85% 0%"
                    },
                    callback: function(t) {
                        var e = document.querySelectorAll(".product-nav-bar-tabs-link"),
                            r = document.querySelector(".floating-bar");
                        t.forEach((function(t) {
                            var n = t.target.querySelector(".anchor").id;
                            "tab-intro" === n && t.isIntersecting && r.classList.remove("floating-bar_visible"), t.isIntersecting && e.forEach((function(t) {
                                t.getAttribute("href") === "#".concat(n) || t.getAttribute("data-href") === "#".concat(n) ? (t.classList.add("product-nav-bar-tabs-link_active"), "tab-intro" !== n && r.classList.add("floating-bar_visible")) : t.classList.remove("product-nav-bar-tabs-link_active")
                            }))
                        }))
                    }
                },
                serviceNavBar: {},
                promotionAnalytics: {
                    options: {
                        threshold: [.2]
                    },
                    callback: function(t, e) {
                        var r = [];
                        return t.forEach((function(t) {
                            t.isIntersecting && ((0, n.y)((0, a.c)("promotionView", t.target.dataset)), e.unobserve(t.target), r.push(t.target.dataset))
                        })), r
                    }
                },
                trackEventAnalytics: {
                    options: {
                        threshold: [.2]
                    },
                    callback: function(t, e) {
                        var r = [];
                        return t.forEach((function(t) {
                            t.isIntersecting && ((0, n.y)((0, a.c)("trackEvent", t.target.dataset)), e.unobserve(t.target), r.push(t.target.dataset))
                        })), r
                    }
                },
                hideProductLicenseDropdown: {
                    options: {
                        threshold: [1]
                    },
                    callback: function(t, e) {
                        t.forEach((function(t) {
                            if (!t.isIntersecting) {
                                var e = t.target.querySelector(".cart-modal-license-button_active"),
                                    r = t.target.querySelector(".cart-modal-license-container_active");
                                e && e.classList.add("cart-modal-license-button_hidden-dropdown"), r && r.classList.add("cart-modal-license-container_hidden-dropdown")
                            }
                        }))
                    }
                },
                recommendedServicesAnalytics: {
                    options: {
                        threshold: [.2]
                    },
                    callback: function(t, e) {
                        var r = [];
                        return t.forEach((function(t) {
                            if (t.isIntersecting) {
                                var o = t.target.dataset;
                                (0, n.y)((0, a.c)("impressionSentServices", o)), (0, n.y)((0, a.c)("cartOffer", {
                                    eventAction: "View",
                                    eventLabel: "".concat(o.id, " - ").concat(o.position, " - ").concat(o.type)
                                })), e.unobserve(t.target), r.push(t.target.dataset)
                            }
                        })), r
                    }
                }
            };

            function i(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i = !0,
                    s = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return i = t.done, t
                    },
                    e: function(t) {
                        s = !0, o = t
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function s(t) {
                var e = JSON.parse(t.getAttribute("data-visibility-observer")),
                    r = t.querySelectorAll(e.selector),
                    n = o[e.preset],
                    a = n.callback,
                    c = n.options;
                if (r.length && a && c) {
                    var s, l = new IntersectionObserver(a, c),
                        u = i(r);
                    try {
                        for (u.s(); !(s = u.n()).done;) {
                            var f = s.value;
                            l.observe(f)
                        }
                    } catch (t) {
                        u.e(t)
                    } finally {
                        u.f()
                    }
                }
            }(0, r(3081).Fi)((function() {
                document.querySelectorAll("[data-visibility-observer]").forEach((function(t) {
                    return s(t)
                }))
            }))
        }
    }
]);