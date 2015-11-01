function mainsize() {
    var e = $(this).width() + 17;
    950 >= e ? $(".topmenu").addClass("mobile") : $(".topmenu").removeClass("mobile")
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = J.type(e);
        return "function" === n || J.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (J.isFunction(t)) return J.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return J.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ae.test(t)) return J.filter(t, e, n);
            t = J.filter(t, e)
        }
        return J.grep(e, function(e) {
            return X.call(t, e) >= 0 !== n
        })
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function r(e) {
        var t = pe[e] = {};
        return J.each(e.match(he) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        Z.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), J.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = J.expando + a.uid++
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(xe, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ye.test(n) ? J.parseJSON(n) : n
                } catch (o) {}
                _e.set(e, t, n)
            } else n = void 0;
        return n
    }

    function c() {
        return !0
    }

    function u() {
        return !1
    }

    function d() {
        try {
            return Z.activeElement
        } catch (e) {}
    }

    function f(e, t) {
        return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function h(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function p(e) {
        var t = Le.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n = 0, i = e.length; i > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function g(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (r = ve.access(e), s = ve.set(t, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c)
                    for (n = 0, i = c[o].length; i > n; n++) J.event.add(t, o, c[o][n])
            }
            _e.hasData(e) && (a = _e.access(e), l = J.extend({}, a), _e.set(t, l))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && J.nodeName(e, t) ? J.merge([e], n) : n
    }

    function _(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ke.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function y(t, n) {
        var i, o = J(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : J.css(o[0], "display");
        return o.detach(), r
    }

    function x(e) {
        var t = Z,
            n = qe[e];
        return n || (n = y(e, t), "none" !== n && n || (Pe = (Pe || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Pe[0].contentDocument, t.write(), t.close(), n = y(e, t), Pe.detach()), qe[e] = n), n
    }

    function b(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || ze(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || J.contains(e.ownerDocument, e) || (s = J.style(e, t)), Fe.test(s) && Re.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function w(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function C(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Qe.length; o--;)
            if (t = Qe[o] + n, t in e) return t;
        return i
    }

    function k(e, t, n) {
        var i = Ue.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function S(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += J.css(e, n + we[r], !0, o)), i ? ("content" === n && (s -= J.css(e, "padding" + we[r], !0, o)), "margin" !== n && (s -= J.css(e, "border" + we[r] + "Width", !0, o))) : (s += J.css(e, "padding" + we[r], !0, o), "padding" !== n && (s += J.css(e, "border" + we[r] + "Width", !0, o)));
        return s
    }

    function T(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = ze(e),
            s = "border-box" === J.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = b(e, t, r), (0 > o || null == o) && (o = e.style[t]), Fe.test(o)) return o;
            i = s && (K.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + S(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }

    function E(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (r[s] = ve.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ce(i) && (r[s] = ve.access(i, "olddisplay", x(i.nodeName)))) : (o = Ce(i), "none" === n && o || ve.set(i, "olddisplay", o ? n : J.css(i, "display"))));
        for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function D(e, t, n, i, o) {
        return new D.prototype.init(e, t, n, i, o)
    }

    function I() {
        return setTimeout(function() {
            Ke = void 0
        }), Ke = J.now()
    }

    function O(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = we[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function M(e, t, n) {
        for (var i, o = (nt[t] || []).concat(nt["*"]), r = 0, s = o.length; s > r; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function B(e, t, n) {
        var i, o, r, s, a, l, c, u, d = this,
            f = {},
            h = e.style,
            p = e.nodeType && Ce(e),
            m = ve.get(e, "fxshow");
        n.queue || (a = J._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, J.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = J.css(e, "display"), u = "none" === c ? ve.get(e, "olddisplay") || x(e.nodeName) : c, "inline" === u && "none" === J.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], Ge.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i]) continue;
                    p = !0
                }
                f[i] = m && m[i] || J.style(e, i)
            } else c = void 0;
        if (J.isEmptyObject(f)) "inline" === ("none" === c ? x(e.nodeName) : c) && (h.display = c);
        else {
            m ? "hidden" in m && (p = m.hidden) : m = ve.access(e, "fxshow", {}), r && (m.hidden = !p), p ? J(e).show() : d.done(function() {
                J(e).hide()
            }), d.done(function() {
                var t;
                ve.remove(e, "fxshow");
                for (t in f) J.style(e, t, f[t])
            });
            for (i in f) s = M(p ? m[i] : 0, i, d), i in m || (m[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function j(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (i = J.camelCase(n), o = t[i], r = e[n], J.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = J.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function A(e, t, n) {
        var i, o, r = 0,
            s = tt.length,
            a = J.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = Ke || I(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                return a.notifyWith(e, [c, r, n]), 1 > r && l ? n : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: J.extend({}, t),
                opts: J.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ke || I(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = J.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (j(u, c.opts.specialEasing); s > r; r++)
            if (i = tt[r].call(c, e, u, c.opts)) return i;
        return J.map(u, M, c), J.isFunction(c.opts.start) && c.opts.start.call(e, c), J.fx.timer(J.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function N(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(he) || [];
            if (J.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function L(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, J.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            s = e === yt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function H(e, t) {
        var n, i, o = J.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && J.extend(!0, e, i), e
    }

    function $(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function P(e, t, n, i) {
        var o, r, s, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = c[l + " " + r] || c["* " + r], !s)
                for (o in c)
                    if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: s ? d : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function q(e, t, n, i) {
        var o;
        if (J.isArray(t)) J.each(t, function(t, o) {
            n || kt.test(e) ? i(e, o) : q(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== J.type(t)) i(e, t);
        else
            for (o in t) q(e + "[" + o + "]", t[o], n, i)
    }

    function R(e) {
        return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var F = [],
        z = F.slice,
        W = F.concat,
        U = F.push,
        X = F.indexOf,
        Y = {},
        V = Y.toString,
        Q = Y.hasOwnProperty,
        K = {},
        Z = e.document,
        G = "2.1.4",
        J = function(e, t) {
            return new J.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        ie = function(e, t) {
            return t.toUpperCase()
        };
    J.fn = J.prototype = {
        jquery: G,
        constructor: J,
        selector: "",
        length: 0,
        toArray: function() {
            return z.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
        },
        pushStack: function(e) {
            var t = J.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return J.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(J.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(z.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: F.sort,
        splice: F.splice
    }, J.extend = J.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || J.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (c && i && (J.isPlainObject(i) || (o = J.isArray(i))) ? (o ? (o = !1, r = n && J.isArray(n) ? n : []) : r = n && J.isPlainObject(n) ? n : {}, s[t] = J.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, J.extend({
        expando: "jQuery" + (G + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === J.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !J.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" !== J.type(e) || e.nodeType || J.isWindow(e) ? !1 : e.constructor && !Q.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Y[V.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = J.trim(e), e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"), t.text = e, Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, ie)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var o, r = 0,
                s = e.length,
                a = n(e);
            if (i) {
                if (a)
                    for (; s > r && (o = t.apply(e[r], i), o !== !1); r++);
                else
                    for (r in e)
                        if (o = t.apply(e[r], i), o === !1) break
            } else if (a)
                for (; s > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
            else
                for (r in e)
                    if (o = t.call(e[r], r, e[r]), o === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? J.merge(i, "string" == typeof e ? [e] : e) : U.call(i, e)), i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : X.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i, o = [], r = 0, s = e.length, a = !n; s > r; r++) i = !t(e[r], r), i !== a && o.push(e[r]);
            return o
        },
        map: function(e, t, i) {
            var o, r = 0,
                s = e.length,
                a = n(e),
                l = [];
            if (a)
                for (; s > r; r++) o = t(e[r], r, i), null != o && l.push(o);
            else
                for (r in e) o = t(e[r], r, i), null != o && l.push(o);
            return W.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), J.isFunction(e) ? (i = z.call(arguments, 2), o = function() {
                return e.apply(t || this, i.concat(z.call(arguments)))
            }, o.guid = e.guid = e.guid || J.guid++, o) : void 0
        },
        now: Date.now,
        support: K
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Y["[object " + t + "]"] = t.toLowerCase()
    });
    var oe = function(e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, c, d, h, p, m;
            if ((t ? t.ownerDocument || t : q) !== B && M(t), t = t || B, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!i && A) {
                if (11 !== a && (o = _e.exec(e)))
                    if (s = o[1]) {
                        if (9 === a) {
                            if (r = t.getElementById(s), !r || !r.parentNode) return n;
                            if (r.id === s) return n.push(r), n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && $(t, r) && r.id === s) return n.push(r), n
                    } else {
                        if (o[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = o[3]) && b.getElementsByClassName) return G.apply(n, t.getElementsByClassName(s)), n
                    }
                if (b.qsa && (!N || !N.test(e))) {
                    if (h = d = P, p = t, m = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (c = S(e), (d = t.getAttribute("id")) ? h = d.replace(xe, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + f(c[l]);
                        p = ye.test(e) && u(t.parentNode) || t, m = c.join(",")
                    }
                    if (m) try {
                        return G.apply(n, p.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(le, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[P] = !0, e
        }

        function o(e) {
            var t = B.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) w.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function h(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = F++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, r)
            } : function(t, n, s) {
                var a, l, c = [R, r];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if (l = t[P] || (t[P] = {}), (a = l[i]) && a[0] === R && a[1] === r) return c[2] = a[2];
                            if (l[i] = c, c[2] = e(t, n, s)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
            return i
        }

        function g(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(r = e[a]) && (!n || n(r, i, o)) && (s.push(r), c && t.push(a));
            return s
        }

        function v(e, t, n, o, r, s) {
            return o && !o[P] && (o = v(o)), r && !r[P] && (r = v(r, s)), i(function(i, s, a, l) {
                var c, u, d, f = [],
                    h = [],
                    p = s.length,
                    v = i || m(t || "*", a.nodeType ? [a] : a, []),
                    _ = !e || !i && t ? v : g(v, f, e, a, l),
                    y = n ? r || (i ? e : p || o) ? [] : s : _;
                if (n && n(_, y, a, l), o)
                    for (c = g(y, h), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (y[h[u]] = !(_[h[u]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = y.length; u--;)(d = y[u]) && c.push(_[u] = d);
                            r(null, y = [], c, l)
                        }
                        for (u = y.length; u--;)(d = y[u]) && (c = r ? ee(i, d) : f[u]) > -1 && (i[c] = !(s[c] = d))
                    }
                } else y = g(y === s ? y.splice(p, y.length) : y), r ? r(null, s, y, l) : G.apply(s, y)
            })
        }

        function _(e) {
            for (var t, n, i, o = e.length, r = w.relative[e[0].type], s = r || w.relative[" "], a = r ? 1 : 0, l = h(function(e) {
                    return e === t
                }, s, !0), c = h(function(e) {
                    return ee(t, e) > -1
                }, s, !0), u = [function(e, n, i) {
                    var o = !r && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, o
                }]; o > a; a++)
                if (n = w.relative[e[a].type]) u = [h(p(u), n)];
                else {
                    if (n = w.filter[e[a].type].apply(null, e[a].matches), n[P]) {
                        for (i = ++a; o > i && !w.relative[e[i].type]; i++);
                        return v(a > 1 && p(u), a > 1 && f(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, i > a && _(e.slice(a, i)), o > i && _(e = e.slice(i)), o > i && f(e))
                    }
                    u.push(n)
                }
            return p(u)
        }

        function y(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                s = function(i, s, a, l, c) {
                    var u, d, f, h = 0,
                        p = "0",
                        m = i && [],
                        v = [],
                        _ = D,
                        y = i || r && w.find.TAG("*", c),
                        x = R += null == _ ? 1 : Math.random() || .1,
                        b = y.length;
                    for (c && (D = s !== B && s); p !== b && null != (u = y[p]); p++) {
                        if (r && u) {
                            for (d = 0; f = e[d++];)
                                if (f(u, s, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (R = x)
                        }
                        o && ((u = !f && u) && h--, i && m.push(u))
                    }
                    if (h += p, o && p !== h) {
                        for (d = 0; f = n[d++];) f(m, v, s, a);
                        if (i) {
                            if (h > 0)
                                for (; p--;) m[p] || v[p] || (v[p] = K.call(l));
                            v = g(v)
                        }
                        G.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (R = x, D = _), m
                };
            return o ? i(s) : s
        }
        var x, b, w, C, k, S, T, E, D, I, O, M, B, j, A, N, L, H, $, P = "sizzle" + 1 * new Date,
            q = e.document,
            R = 0,
            F = 0,
            z = n(),
            W = n(),
            U = n(),
            X = function(e, t) {
                return e === t && (O = !0), 0
            },
            Y = 1 << 31,
            V = {}.hasOwnProperty,
            Q = [],
            K = Q.pop,
            Z = Q.push,
            G = Q.push,
            J = Q.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ie.replace("w", "w#"),
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
            se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ce = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(se),
            he = new RegExp("^" + oe + "$"),
            pe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            _e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            xe = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Ce = function() {
                M()
            };
        try {
            G.apply(Q = J.call(q.childNodes), q.childNodes), Q[q.childNodes.length].nodeType
        } catch (ke) {
            G = {
                apply: Q.length ? function(e, t) {
                    Z.apply(e, J.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, M = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : q;
            return i !== B && 9 === i.nodeType && i.documentElement ? (B = i, j = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), A = !k(i), b.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = o(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = ve.test(i.getElementsByClassName), b.getById = o(function(e) {
                return j.appendChild(e).id = P, !i.getElementsByName || !i.getElementsByName(P).length
            }), b.getById ? (w.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && A) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, w.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), w.find.TAG = b.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, w.find.CLASS = b.getElementsByClassName && function(e, t) {
                return A ? t.getElementsByClassName(e) : void 0
            }, L = [], N = [], (b.qsa = ve.test(i.querySelectorAll)) && (o(function(e) {
                j.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || N.push(".#.+[+~]")
            }), o(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
            })), (b.matchesSelector = ve.test(H = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function(e) {
                b.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), L.push("!=", se)
            }), N = N.length && new RegExp(N.join("|")), L = L.length && new RegExp(L.join("|")), t = ve.test(j.compareDocumentPosition), $ = t || ve.test(j.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function(e, t) {
                if (e === t) return O = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === q && $(q, e) ? -1 : t === i || t.ownerDocument === q && $(q, t) ? 1 : I ? ee(I, e) - ee(I, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return O = !0, 0;
                var n, o = 0,
                    r = e.parentNode,
                    a = t.parentNode,
                    l = [e],
                    c = [t];
                if (!r || !a) return e === i ? -1 : t === i ? 1 : r ? -1 : a ? 1 : I ? ee(I, e) - ee(I, t) : 0;
                if (r === a) return s(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) c.unshift(n);
                for (; l[o] === c[o];) o++;
                return o ? s(l[o], c[o]) : l[o] === q ? -1 : c[o] === q ? 1 : 0
            }, i) : B
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== B && M(e), n = n.replace(de, "='$1']"), b.matchesSelector && A && (!L || !L.test(n)) && (!N || !N.test(n))) try {
                var i = H.call(e, n);
                if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (o) {}
            return t(n, B, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== B && M(e), $(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== B && M(e);
            var n = w.attrHandle[t.toLowerCase()],
                i = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
            return void 0 !== i ? i : b.attributes || !A ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (O = !b.detectDuplicates, I = !b.sortStable && e.slice(0), e.sort(X), O) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return I = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += C(t);
            return n
        }, w = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, d, f, h, p, m = r !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            _ = !l && !a;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild], s && _) {
                                for (u = g[P] || (g[P] = {}), c = u[e] || [], h = c[0] === R && c[1], f = c[0] === R && c[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        u[e] = [R, h, f];
                                        break
                                    }
                            } else if (_ && (c = (t[P] || (t[P] = {}))[e]) && c[0] === R) f = c[1];
                            else
                                for (;
                                    (d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (_ && ((d[P] || (d[P] = {}))[e] = [R, f]), d !== t)););
                            return f -= o, f === i || f % i === 0 && f / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, r = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[P] ? r(n) : r.length > 1 ? (o = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;) i = ee(e, o[s]), e[i] = !(t[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        o = T(e.replace(le, "$1"));
                    return o[P] ? i(function(e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function(e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(be, we),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === j
                },
                focus: function(e) {
                    return e === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[x] = a(x);
        for (x in {
                submit: !0,
                reset: !0
            }) w.pseudos[x] = l(x);
        return d.prototype = w.filters = w.pseudos, w.setFilters = new d, S = t.tokenize = function(e, n) {
            var i, o, r, s, a, l, c, u = W[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, l = [], c = w.preFilter; a;) {
                (!i || (o = ce.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ue.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(le, " ")
                }), a = a.slice(i.length));
                for (s in w.filter) !(o = pe[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : W(e, l).slice(0)
        }, T = t.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = U[e + " "];
            if (!r) {
                for (t || (t = S(e)), n = t.length; n--;) r = _(t[n]), r[P] ? i.push(r) : o.push(r);
                r = U(e, y(o, i)), r.selector = e
            }
            return r
        }, E = t.select = function(e, t, n, i) {
            var o, r, s, a, l, c = "function" == typeof e && e,
                d = !i && S(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && b.getById && 9 === t.nodeType && A && w.relative[r[1].type]) {
                    if (t = (w.find.ID(s.matches[0].replace(be, we), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = pe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
                    if ((l = w.find[a]) && (i = l(s.matches[0].replace(be, we), ye.test(r[0].type) && u(t.parentNode) || t))) {
                        if (r.splice(o, 1), e = i.length && f(r), !e) return G.apply(n, i), n;
                        break
                    }
            }
            return (c || T(e, d))(i, t, !A, n, ye.test(e) && u(t.parentNode) || t), n
        }, b.sortStable = P.split("").sort(X).join("") === P, b.detectDuplicates = !!O, M(), b.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(B.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    J.find = oe, J.expr = oe.selectors, J.expr[":"] = J.expr.pseudos, J.unique = oe.uniqueSort, J.text = oe.getText, J.isXMLDoc = oe.isXML, J.contains = oe.contains;
    var re = J.expr.match.needsContext,
        se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    J.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? J.find.matchesSelector(i, e) ? [i] : [] : J.find.matches(e, J.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, J.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(J(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (J.contains(o[t], this)) return !0
            }));
            for (t = 0; n > t; t++) J.find(e, o[t], i);
            return i = this.pushStack(n > 1 ? J.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && re.test(e) ? J(e) : e || [], !1).length
        }
    });
    var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ue = J.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), se.test(n[1]) && J.isPlainObject(t))
                        for (n in t) J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return i = Z.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = Z, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
        };
    ue.prototype = J.fn, le = J(Z);
    var de = /^(?:parents|prev(?:Until|All))/,
        fe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    J.extend({
        dir: function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && J(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), J.fn.extend({
        has: function(e) {
            var t = J(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (J.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], s = re.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? J.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? X.call(J(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(J.unique(J.merge(this.get(), J(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), J.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return J.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return J.dir(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return J.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return J.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return J.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return J.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return J.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return J.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || J.merge([], e.childNodes)
        }
    }, function(e, t) {
        J.fn[e] = function(n, i) {
            var o = J.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = J.filter(i, o)), this.length > 1 && (fe[e] || J.unique(o), de.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var he = /\S+/g,
        pe = {};
    J.Callbacks = function(e) {
        e = "string" == typeof e ? pe[e] || r(e) : J.extend({}, e);
        var t, n, i, o, s, a, l = [],
            c = !e.once && [],
            u = function(r) {
                for (t = e.memory && r, n = !0, a = o || 0, o = 0, s = l.length, i = !0; l && s > a; a++)
                    if (l[a].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1, l && (c ? c.length && u(c.shift()) : t ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function r(t) {
                            J.each(t, function(t, n) {
                                var i = J.type(n);
                                "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), i ? s = l.length : t && (o = n, u(t))
                    }
                    return this
                },
                remove: function() {
                    return l && J.each(arguments, function(e, t) {
                        for (var n;
                            (n = J.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                    }), this
                },
                has: function(e) {
                    return e ? J.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = c = t = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, t || d.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return !l || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? c.push(t) : u(t)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return d
    }, J.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", J.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return J.Deferred(function(n) {
                            J.each(t, function(t, r) {
                                var s = J.isFunction(e[t]) && e[t];
                                o[r[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? J.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, J.each(t, function(e, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, i, o = 0,
                r = z.call(arguments),
                s = r.length,
                a = 1 !== s || e && J.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : J.Deferred(),
                c = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? z.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && J.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    });
    var me;
    J.fn.ready = function(e) {
        return J.ready.promise().done(e), this
    }, J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? J.readyWait++ : J.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, e !== !0 && --J.readyWait > 0 || (me.resolveWith(Z, [J]), J.fn.triggerHandler && (J(Z).triggerHandler("ready"), J(Z).off("ready"))))
        }
    }), J.ready.promise = function(t) {
        return me || (me = J.Deferred(), "complete" === Z.readyState ? setTimeout(J.ready) : (Z.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), me.promise(t)
    }, J.ready.promise();
    var ge = J.access = function(e, t, n, i, o, r, s) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === J.type(n)) {
            o = !0;
            for (a in n) J.access(e, t, a, n[a], !0, r, s)
        } else if (void 0 !== i && (o = !0, J.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                return c.call(J(e), n)
            })), t))
            for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    };
    J.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = J.acceptData, a.prototype = {
        key: function(e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = n, J.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var i, o = this.key(e),
                r = this.cache[o];
            if ("string" == typeof t) r[t] = n;
            else if (J.isEmptyObject(r)) J.extend(this.cache[o], t);
            else
                for (i in t) r[i] = t[i];
            return r
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, J.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, o, r = this.key(e),
                s = this.cache[r];
            if (void 0 === t) this.cache[r] = {};
            else {
                J.isArray(t) ? i = t.concat(t.map(J.camelCase)) : (o = J.camelCase(t), t in s ? i = [t, o] : (i = o, i = i in s ? [i] : i.match(he) || [])), n = i.length;
                for (; n--;) delete s[i[n]]
            }
        },
        hasData: function(e) {
            return !J.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a,
        _e = new a,
        ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        xe = /([A-Z])/g;
    J.extend({
        hasData: function(e) {
            return _e.hasData(e) || ve.hasData(e)
        },
        data: function(e, t, n) {
            return _e.access(e, t, n)
        },
        removeData: function(e, t) {
            _e.remove(e, t)
        },
        _data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function(e, t) {
            ve.remove(e, t)
        }
    }), J.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = _e.get(r), 1 === r.nodeType && !ve.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = J.camelCase(i.slice(5)), l(r, i, o[i])));
                    ve.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                _e.set(this, e)
            }) : ge(this, function(t) {
                var n, i = J.camelCase(e);
                if (r && void 0 === t) {
                    if (n = _e.get(r, e), void 0 !== n) return n;
                    if (n = _e.get(r, i), void 0 !== n) return n;
                    if (n = l(r, i, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = _e.get(this, i);
                    _e.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && _e.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                _e.remove(this, e)
            })
        }
    }), J.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ve.get(e, t), n && (!i || J.isArray(n) ? i = ve.access(e, t, J.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = J.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = J._queueHooks(e, t),
                s = function() {
                    J.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: J.Callbacks("once memory").add(function() {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), J.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? J.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = J.queue(this, e, t);
                J._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && J.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                J.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = J.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ve.get(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        we = ["Top", "Right", "Bottom", "Left"],
        Ce = function(e, t) {
            return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
        },
        ke = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = Z.createDocumentFragment(),
            t = e.appendChild(Z.createElement("div")),
            n = Z.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), K.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Se = "undefined";
    K.focusinBubbles = "onfocusin" in e;
    var Te = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu)|click/,
        De = /^(?:focusinfocus|focusoutblur)$/,
        Ie = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, f, h, p, m, g = ve.get(e);
            if (g)
                for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = J.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                        return typeof J !== Se && J.event.triggered !== t.type ? J.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(he) || [""], c = t.length; c--;) a = Ie.exec(t[c]) || [], h = m = a[1], p = (a[2] || "").split(".").sort(), h && (d = J.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = J.event.special[h] || {}, u = J.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && J.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, r), (f = l[h]) || (f = l[h] = [], f.delegateCount = 0, d.setup && d.setup.call(e, i, p, s) !== !1 || e.addEventListener && e.addEventListener(h, s, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), J.event.global[h] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, f, h, p, m, g = ve.hasData(e) && ve.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(he) || [""], c = t.length; c--;)
                    if (a = Ie.exec(t[c]) || [], h = m = a[1], p = (a[2] || "").split(".").sort(), h) {
                        for (d = J.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;) u = f[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !f.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || J.removeEvent(e, h, g.handle), delete l[h])
                    } else
                        for (h in l) J.event.remove(e, h + t[c], n, i, !0);
                J.isEmptyObject(l) && (delete g.handle, ve.remove(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var r, s, a, l, c, u, d, f = [i || Z],
                h = Q.call(t, "type") ? t.type : t,
                p = Q.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !De.test(h + J.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[J.expando] ? t : new J.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : J.makeArray(n, [t]), d = J.event.special[h] || {}, o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!o && !d.noBubble && !J.isWindow(i)) {
                    for (l = d.delegateType || h, De.test(l + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
                    a === (i.ownerDocument || Z) && f.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0;
                    (s = f[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || h, u = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && J.acceptData(s) && (t.result = u.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = h, o || t.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !J.acceptData(i) || c && J.isFunction(i[h]) && !J.isWindow(i) && (a = i[c], a && (i[c] = null), J.event.triggered = h, i[h](), J.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        },
        dispatch: function(e) {
            e = J.event.fix(e);
            var t, n, i, o, r, s = [],
                a = z.call(arguments),
                l = (ve.get(this, "events") || {})[e.type] || [],
                c = J.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = J.event.handlers.call(this, e, l), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((J.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== e.type) {
                        for (i = [], n = 0; a > n; n++) r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? J(o, this).index(l) >= 0 : J.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, r = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[J.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Ee.test(o) ? this.mouseHooks : Te.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new J.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
            return e.target || (e.target = Z), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== d() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === d() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return J.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = J.extend(new J.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? J.event.trigger(o, null, t) : J.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, J.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, J.Event = function(e, t) {
        return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : u) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(e, t)
    }, J.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        J.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return (!o || o !== i && !J.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), K.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            J.event.simulate(t, e.target, J.event.fix(e), !0)
        };
        J.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = ve.access(i, t);
                o || i.addEventListener(e, n, !0), ve.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = ve.access(i, t) - 1;
                o ? ve.access(i, t, o) : (i.removeEventListener(e, n, !0), ve.remove(i, t))
            }
        }
    }), J.fn.extend({
        on: function(e, t, n, i, o) {
            var r, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = u;
            else if (!i) return this;
            return 1 === o && (r = i, i = function(e) {
                return J().off(e), r.apply(this, arguments)
            }, i.guid = r.guid || (r.guid = J.guid++)), this.each(function() {
                J.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, J(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = u), this.each(function() {
                J.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                J.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? J.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Me = /<([\w:]+)/,
        Be = /<|&#?\w+;/,
        je = /<(?:script|style|link)/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^$|\/(?:java|ecma)script/i,
        Le = /^true\/(.*)/,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        $e = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $e.optgroup = $e.option, $e.tbody = $e.tfoot = $e.colgroup = $e.caption = $e.thead, $e.th = $e.td, J.extend({
        clone: function(e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0),
                l = J.contains(e.ownerDocument, e);
            if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))
                for (s = v(a), r = v(e), i = 0, o = r.length; o > i; i++) _(r[i], s[i]);
            if (t)
                if (n)
                    for (r = r || v(e), s = s || v(a), i = 0, o = r.length; o > i; i++) g(r[i], s[i]);
                else g(e, a);
            return s = v(a, "script"), s.length > 0 && m(s, !l && v(e, "script")), a
        },
        buildFragment: function(e, t, n, i) {
            for (var o, r, s, a, l, c, u = t.createDocumentFragment(), d = [], f = 0, h = e.length; h > f; f++)
                if (o = e[f], o || 0 === o)
                    if ("object" === J.type(o)) J.merge(d, o.nodeType ? [o] : o);
                    else if (Be.test(o)) {
                for (r = r || u.appendChild(t.createElement("div")), s = (Me.exec(o) || ["", ""])[1].toLowerCase(), a = $e[s] || $e._default, r.innerHTML = a[1] + o.replace(Oe, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
                J.merge(d, r.childNodes), r = u.firstChild, r.textContent = ""
            } else d.push(t.createTextNode(o));
            for (u.textContent = "", f = 0; o = d[f++];)
                if ((!i || -1 === J.inArray(o, i)) && (l = J.contains(o.ownerDocument, o), r = v(u.appendChild(o), "script"), l && m(r), n))
                    for (c = 0; o = r[c++];) Ne.test(o.type || "") && n.push(o);
            return u
        },
        cleanData: function(e) {
            for (var t, n, i, o, r = J.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (J.acceptData(n) && (o = n[ve.expando], o && (t = ve.cache[o]))) {
                    if (t.events)
                        for (i in t.events) r[i] ? J.event.remove(n, i) : J.removeEvent(n, i, t.handle);
                    ve.cache[o] && delete ve.cache[o]
                }
                delete _e.cache[n[_e.expando]]
            }
        }
    }), J.fn.extend({
        text: function(e) {
            return ge(this, function(e) {
                return void 0 === e ? J.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? J.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || J.cleanData(v(n)), n.parentNode && (t && J.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (J.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return J.clone(this, e, t)
            })
        },
        html: function(e) {
            return ge(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !je.test(e) && !$e[(Me.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Oe, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (J.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, J.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = W.apply([], e);
            var n, i, o, r, s, a, l = 0,
                c = this.length,
                u = this,
                d = c - 1,
                f = e[0],
                m = J.isFunction(f);
            if (m || c > 1 && "string" == typeof f && !K.checkClone && Ae.test(f)) return this.each(function(n) {
                var i = u.eq(n);
                m && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
            });
            if (c && (n = J.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (o = J.map(v(n, "script"), h), r = o.length; c > l; l++) s = n, l !== d && (s = J.clone(s, !0, !0), r && J.merge(o, v(s, "script"))), t.call(this[l], s, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, J.map(o, p), l = 0; r > l; l++) s = o[l], Ne.test(s.type || "") && !ve.access(s, "globalEval") && J.contains(a, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(He, "")))
            }
            return this
        }
    }), J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        J.fn[e] = function(e) {
            for (var n, i = [], o = J(e), r = o.length - 1, s = 0; r >= s; s++) n = s === r ? this : this.clone(!0), J(o[s])[t](n), U.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Pe, qe = {},
        Re = /^margin/,
        Fe = new RegExp("^(" + be + ")(?!px)[a-z%]+$", "i"),
        ze = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", o.appendChild(r);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, i = "4px" === t.width, o.removeChild(r)
        }
        var n, i, o = Z.documentElement,
            r = Z.createElement("div"),
            s = Z.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(s), e.getComputedStyle && J.extend(K, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == i && t(), i
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(Z.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", o.appendChild(r), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(r), s.removeChild(n), t
            }
        }))
    }(), J.swap = function(e, t, n, i) {
        var o, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        o = n.apply(e, i || []);
        for (r in t) e.style[r] = s[r];
        return o
    };
    var We = /^(none|table(?!-c[ea]).+)/,
        Ue = new RegExp("^(" + be + ")(.*)$", "i"),
        Xe = new RegExp("^([+-])=(" + be + ")", "i"),
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Qe = ["Webkit", "O", "Moz", "ms"];
    J.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = b(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = J.camelCase(t),
                    l = e.style;
                return t = J.cssProps[a] || (J.cssProps[a] = C(l, a)), s = J.cssHooks[t] || J.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : (r = typeof n, "string" === r && (o = Xe.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(J.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || J.cssNumber[a] || (n += "px"), K.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n)), void 0)
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = J.camelCase(t);
            return t = J.cssProps[a] || (J.cssProps[a] = C(e.style, a)), s = J.cssHooks[t] || J.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = b(e, t, i)), "normal" === o && t in Ve && (o = Ve[t]), "" === n || n ? (r = parseFloat(o), n === !0 || J.isNumeric(r) ? r || 0 : o) : o
        }
    }), J.each(["height", "width"], function(e, t) {
        J.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? We.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, Ye, function() {
                    return T(e, t, i)
                }) : T(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o = i && ze(e);
                return k(e, n, i ? S(e, t, i, "border-box" === J.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), J.cssHooks.marginRight = w(K.reliableMarginRight, function(e, t) {
        return t ? J.swap(e, {
            display: "inline-block"
        }, b, [e, "marginRight"]) : void 0
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        J.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + we[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, Re.test(e) || (J.cssHooks[e + t].set = k)
    }), J.fn.extend({
        css: function(e, t) {
            return ge(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (J.isArray(t)) {
                    for (i = ze(e), o = t.length; o > s; s++) r[t[s]] = J.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? J.style(e, t, n) : J.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ce(this) ? J(this).show() : J(this).hide()
            })
        }
    }), J.Tween = D, D.prototype = {
        constructor: D,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (J.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = D.propHooks[this.prop];
            return this.options.duration ? this.pos = t = J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, J.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, J.fx = D.prototype.init, J.fx.step = {};
    var Ke, Ze, Ge = /^(?:toggle|show|hide)$/,
        Je = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [B],
        nt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = Je.exec(t),
                    r = o && o[3] || (J.cssNumber[e] ? "" : "px"),
                    s = (J.cssNumber[e] || "px" !== r && +i) && Je.exec(J.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], o = o || [], s = +i || 1;
                    do a = a || ".5", s /= a, J.style(n.elem, e, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    J.Animation = J.extend(A, {
            tweener: function(e, t) {
                J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; o > i; i++) n = e[i], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), J.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? J.extend({}, e) : {
                complete: n || !n && t || J.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !J.isFunction(t) && t
            };
            return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
            }, i
        }, J.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Ce).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = J.isEmptyObject(e),
                    r = J.speed(t, n, i),
                    s = function() {
                        var t = A(this, J.extend({}, e), r);
                        (o || ve.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = J.timers,
                        s = ve.get(this);
                    if (o) s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && et.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    (t || !n) && J.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ve.get(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = J.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, J.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), J.each(["toggle", "show", "hide"], function(e, t) {
            var n = J.fn[t];
            J.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, i, o)
            }
        }), J.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            J.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), J.timers = [], J.fx.tick = function() {
            var e, t = 0,
                n = J.timers;
            for (Ke = J.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || J.fx.stop(), Ke = void 0
        }, J.fx.timer = function(e) {
            J.timers.push(e), e() ? J.fx.start() : J.timers.pop()
        }, J.fx.interval = 13, J.fx.start = function() {
            Ze || (Ze = setInterval(J.fx.tick, J.fx.interval))
        }, J.fx.stop = function() {
            clearInterval(Ze), Ze = null
        }, J.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, J.fn.delay = function(e, t) {
            return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e = Z.createElement("input"),
                t = Z.createElement("select"),
                n = t.appendChild(Z.createElement("option"));
            e.type = "checkbox", K.checkOn = "" !== e.value, K.optSelected = n.selected, t.disabled = !0, K.optDisabled = !n.disabled, e = Z.createElement("input"), e.value = "t", e.type = "radio", K.radioValue = "t" === e.value
        }();
    var it, ot, rt = J.expr.attrHandle;
    J.fn.extend({
        attr: function(e, t) {
            return ge(this, J.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                J.removeAttr(this, e)
            })
        }
    }), J.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === Se ? J.prop(e, t, n) : (1 === r && J.isXMLDoc(e) || (t = t.toLowerCase(), i = J.attrHooks[t] || (J.expr.match.bool.test(t) ? ot : it)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = J.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void J.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                r = t && t.match(he);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = J.propFix[n] || n, J.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!K.radioValue && "radio" === t && J.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), ot = {
        set: function(e, t, n) {
            return t === !1 ? J.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = rt[t] || J.find.attr;
        rt[t] = function(e, t, i) {
            var o, r;
            return i || (r = rt[t], rt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, rt[t] = r), o
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
        prop: function(e, t) {
            return ge(this, J.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[J.propFix[e] || e]
            })
        }
    }), J.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, o, r, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return r = 1 !== s || !J.isXMLDoc(e), r && (t = J.propFix[t] || t, o = J.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), K.optSelected || (J.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        J.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    J.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a = "string" == typeof e && e,
                l = 0,
                c = this.length;
            if (J.isFunction(e)) return this.each(function(t) {
                J(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(he) || []; c > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                        for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = J.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof e && e,
                l = 0,
                c = this.length;
            if (J.isFunction(e)) return this.each(function(t) {
                J(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(he) || []; c > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                        for (r = 0; o = t[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        s = e ? J.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : J.isFunction(e) ? this.each(function(n) {
                J(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, i = 0, o = J(this), r = e.match(he) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(n === Se || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var lt = /\r/g;
    J.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0]; {
                if (arguments.length) return i = J.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, J(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : J.isArray(o) && (o = J.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), t = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                });
                if (o) return t = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)
            }
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = J.find.attr(e, "value");
                    return null != t ? t : J.trim(J.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (n = i[l], (n.selected || l === o) && (K.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !J.nodeName(n.parentNode, "optgroup"))) {
                            if (t = J(n).val(), r) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = J.makeArray(t), s = o.length; s--;) i = o[s], (i.selected = J.inArray(i.value, r) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = {
            set: function(e, t) {
                return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
            }
        }, K.checkOn || (J.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        J.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), J.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ct = J.now(),
        ut = /\?/;
    J.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, J.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (i) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + e), t
    };
    var dt = /#.*$/,
        ft = /([?&])_=[^&]*/,
        ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        mt = /^(?:GET|HEAD)$/,
        gt = /^\/\//,
        vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        _t = {},
        yt = {},
        xt = "*/".concat("*"),
        bt = e.location.href,
        wt = vt.exec(bt.toLowerCase()) || [];
    J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt,
            type: "GET",
            isLocal: pt.test(wt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? H(H(e, J.ajaxSettings), t) : H(J.ajaxSettings, e)
        },
        ajaxPrefilter: N(_t),
        ajaxTransport: N(yt),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var l, u, v, _, x, w = t;
                2 !== y && (y = 2, a && clearTimeout(a), i = void 0, r = s || "", b.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (_ = $(d, b, n)), _ = P(d, _, b, l), l ? (d.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (J.lastModified[o] = x), x = b.getResponseHeader("etag"), x && (J.etag[o] = x)), 204 === e || "HEAD" === d.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = _.state, u = _.data, v = _.error, l = !v)) : (v = w, (e || !w) && (w = "error", 0 > e && (e = 0))), b.status = e, b.statusText = (t || w) + "", l ? p.resolveWith(f, [u, w, b]) : p.rejectWith(f, [b, w, v]), b.statusCode(g), g = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [b, d, l ? u : v]), m.fireWith(f, [b, w]), c && (h.trigger("ajaxComplete", [b, d]), --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, o, r, s, a, l, c, u, d = J.ajaxSetup({}, t),
                f = d.context || d,
                h = d.context && (f.nodeType || f.jquery) ? J(f) : J.event,
                p = J.Deferred(),
                m = J.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                _ = {},
                y = 0,
                x = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === y) {
                            if (!s)
                                for (s = {}; t = ht.exec(r);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? r : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return y || (e = _[n] = _[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return y || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > y)
                                for (t in e) g[t] = [g[t], e[t]];
                            else b.always(e[b.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return i && i.abort(t), n(0, t), this
                    }
                };
            if (p.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, d.url = ((e || d.url || bt) + "").replace(dt, "").replace(gt, wt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = J.trim(d.dataType || "*").toLowerCase().match(he) || [""], null == d.crossDomain && (l = vt.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === wt[1] && l[2] === wt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (wt[3] || ("http:" === wt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = J.param(d.data, d.traditional)), L(_t, d, t, b), 2 === y) return b;
            c = J.event && d.global, c && 0 === J.active++ && J.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !mt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (ut.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = ft.test(o) ? o.replace(ft, "$1_=" + ct++) : o + (ut.test(o) ? "&" : "?") + "_=" + ct++)), d.ifModified && (J.lastModified[o] && b.setRequestHeader("If-Modified-Since", J.lastModified[o]), J.etag[o] && b.setRequestHeader("If-None-Match", J.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && b.setRequestHeader("Content-Type", d.contentType), b.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + xt + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) b.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(f, b, d) === !1 || 2 === y)) return b.abort();
            x = "abort";
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) b[u](d[u]);
            if (i = L(yt, d, t, b)) {
                b.readyState = 1, c && h.trigger("ajaxSend", [b, d]), d.async && d.timeout > 0 && (a = setTimeout(function() {
                    b.abort("timeout")
                }, d.timeout));
                try {
                    y = 1, i.send(v, n)
                } catch (w) {
                    if (!(2 > y)) throw w;
                    n(-1, w)
                }
            } else n(-1, "No Transport");
            return b
        },
        getJSON: function(e, t, n) {
            return J.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return J.get(e, void 0, t, "script")
        }
    }), J.each(["get", "post"], function(e, t) {
        J[t] = function(e, n, i, o) {
            return J.isFunction(n) && (o = o || i, i = n, n = void 0), J.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), J._evalUrl = function(e) {
        return J.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, J.fn.extend({
        wrapAll: function(e) {
            var t;
            return J.isFunction(e) ? this.each(function(t) {
                J(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = J(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return J.isFunction(e) ? this.each(function(t) {
                J(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = J(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = J.isFunction(e);
            return this.each(function(n) {
                J(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        }
    }), J.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, J.expr.filters.visible = function(e) {
        return !J.expr.filters.hidden(e)
    };
    var Ct = /%20/g,
        kt = /\[\]$/,
        St = /\r?\n/g,
        Tt = /^(?:submit|button|image|reset|file)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;
    J.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = J.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) q(n, e[n], t, o);
        return i.join("&").replace(Ct, "+")
    }, J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = J.prop(this, "elements");
                return e ? J.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !J(this).is(":disabled") && Et.test(this.nodeName) && !Tt.test(e) && (this.checked || !ke.test(e))
            }).map(function(e, t) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }).get()
        }
    }), J.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Dt = 0,
        It = {},
        Ot = {
            0: 200,
            1223: 204
        },
        Mt = J.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in It) It[e]()
    }), K.cors = !!Mt && "withCredentials" in Mt, K.ajax = Mt = !!Mt, J.ajaxTransport(function(e) {
        var t;
        return K.cors || Mt && !e.crossDomain ? {
            send: function(n, i) {
                var o, r = e.xhr(),
                    s = ++Dt;
                if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) r[o] = e.xhrFields[o];
                e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n) r.setRequestHeader(o, n[o]);
                t = function(e) {
                    return function() {
                        t && (delete It[s], t = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? i(r.status, r.statusText) : i(Ot[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                            text: r.responseText
                        } : void 0, r.getAllResponseHeaders()))
                    }
                }, r.onload = t(), r.onerror = t("error"), t = It[s] = t("abort");
                try {
                    r.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t) throw a
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return J.globalEval(e), e
            }
        }
    }), J.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), J.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = J("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), Z.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Bt = [],
        jt = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || J.expando + "_" + ct++;
            return this[e] = !0, e
        }
    }), J.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, s, a = t.jsonp !== !1 && (jt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = J.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(jt, "$1" + o) : t.jsonp !== !1 && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || J.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Bt.push(o)), s && J.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), J.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || Z;
        var i = se.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, o), o && o.length && J(o).remove(), J.merge([], i.childNodes))
    };
    var At = J.fn.load;
    J.fn.load = function(e, t, n) {
        if ("string" != typeof e && At) return At.apply(this, arguments);
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = J.trim(e.slice(a)), e = e.slice(0, a)), J.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && J.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? J("<div>").append(J.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            s.each(n, r || [e.responseText, t, e])
        }), this
    }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        J.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), J.expr.filters.animated = function(e) {
        return J.grep(J.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Nt = e.document.documentElement;
    J.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, c, u = J.css(e, "position"),
                d = J(e),
                f = {};
            "static" === u && (e.style.position = "relative"), a = d.offset(), r = J.css(e, "top"), l = J.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), J.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + o), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, J.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                J.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = i && i.ownerDocument;
            if (r) return t = r.documentElement, J.contains(t, i) ? (typeof i.getBoundingClientRect !== Se && (o = i.getBoundingClientRect()), n = R(r), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === J.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), J.nodeName(e[0], "html") || (i = e.offset()), i.top += J.css(e[0], "borderTopWidth", !0), i.left += J.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - J.css(n, "marginTop", !0),
                    left: t.left - i.left - J.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Nt; e && !J.nodeName(e, "html") && "static" === J.css(e, "position");) e = e.offsetParent;
                return e || Nt
            })
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = "pageYOffset" === n;
        J.fn[t] = function(o) {
            return ge(this, function(t, o, r) {
                var s = R(t);
                return void 0 === r ? s ? s[n] : t[o] : void(s ? s.scrollTo(i ? e.pageXOffset : r, i ? r : e.pageYOffset) : t[o] = r)
            }, t, o, arguments.length, null)
        }
    }), J.each(["top", "left"], function(e, t) {
        J.cssHooks[t] = w(K.pixelPosition, function(e, n) {
            return n ? (n = b(e, t), Fe.test(n) ? J(e).position()[t] + "px" : n) : void 0
        })
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        J.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            J.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || o === !0 ? "margin" : "border");
                return ge(this, function(t, n, i) {
                    var o;
                    return J.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? J.css(t, n, s) : J.style(t, n, i, s)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), J.fn.size = function() {
        return this.length
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return J
    });
    var Lt = e.jQuery,
        Ht = e.$;
    return J.noConflict = function(t) {
        return e.$ === J && (e.$ = Ht), t && e.jQuery === J && (e.jQuery = Lt), J
    }, typeof t === Se && (e.jQuery = e.$ = J), J
}), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    function t(t) {
        var s = t || window.event,
            a = l.call(arguments, 1),
            c = 0,
            d = 0,
            f = 0,

            h = 0,
            p = 0,
            m = 0;
        if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (f = -1 * s.detail), "wheelDelta" in s && (f = s.wheelDelta), "wheelDeltaY" in s && (f = s.wheelDeltaY), "wheelDeltaX" in s && (d = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (d = -1 * f, f = 0), c = 0 === f ? d : f, "deltaY" in s && (f = -1 * s.deltaY, c = f), "deltaX" in s && (d = s.deltaX, 0 === f && (c = -1 * d)), 0 !== f || 0 !== d) {
            if (1 === s.deltaMode) {
                var g = e.data(this, "mousewheel-line-height");
                c *= g, f *= g, d *= g
            } else if (2 === s.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                c *= v, f *= v, d *= v
            }
            if (h = Math.max(Math.abs(f), Math.abs(d)), (!r || r > h) && (r = h, i(s, h) && (r /= 40)), i(s, h) && (c /= 40, d /= 40, f /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / r), d = Math[d >= 1 ? "floor" : "ceil"](d / r), f = Math[f >= 1 ? "floor" : "ceil"](f / r), u.settings.normalizeOffset && this.getBoundingClientRect) {
                var _ = this.getBoundingClientRect();
                p = t.clientX - _.left, m = t.clientY - _.top
            }
            return t.deltaX = d, t.deltaY = f, t.deltaFactor = r, t.offsetX = p, t.offsetY = m, t.deltaMode = 0, a.unshift(t, c, d, f), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, a)
        }
    }

    function n() {
        r = null
    }

    function i(e, t) {
        return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }
    var o, r, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var c = s.length; c;) e.event.fixHooks[s[--c]] = e.event.mouseHooks;
    var u = e.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var n = a.length; n;) this.addEventListener(a[--n], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var n = a.length; n;) this.removeEventListener(a[--n], t, !1);
            else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(t) {
            var n = e(t),
                i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
        },
        getPageHeight: function(t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}), ! function(e) {
    "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function(e) {
    ! function(t) {
        var n = "function" == typeof define && define.amd,
            i = "undefined" != typeof module && module.exports,
            o = "https:" == document.location.protocol ? "https:" : "http:",
            r = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";
        n || (i ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + o + "//" + r + "%3E%3C/script%3E"))), t()
    }(function() {
        var t, n = "mCustomScrollbar",
            i = "mCS",
            o = ".mCustomScrollbar",
            r = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0
                }
            },
            s = 0,
            a = {},
            l = window.attachEvent && !window.addEventListener ? 1 : 0,
            c = !1,
            u = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            d = {
                init: function(t) {
                    var t = e.extend(!0, {}, r, t),
                        n = f.call(this);
                    if (t.live) {
                        var l = t.liveSelector || this.selector || o,
                            c = e(l);
                        if ("off" === t.live) return void p(l);
                        a[l] = setTimeout(function() {
                            c.mCustomScrollbar(t), "once" === t.live && c.length && p(l)
                        }, 500)
                    } else p(l);
                    return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : m(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: !1,
                        deltaFactor: "auto",
                        normalizeDelta: !1,
                        invert: !1
                    }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(n).each(function() {
                        var n = e(this);
                        if (!n.data(i)) {
                            n.data(i, {
                                idx: ++s,
                                opt: t,
                                scrollRatio: {
                                    y: null,
                                    x: null
                                },
                                overflowed: null,
                                contentReset: {
                                    y: null,
                                    x: null
                                },
                                bindEvents: !1,
                                tweenRunning: !1,
                                sequential: {},
                                langDir: n.css("direction"),
                                cbOffsets: null,
                                trigger: null,
                                poll: {
                                    size: {
                                        o: 0,
                                        n: 0
                                    },
                                    img: {
                                        o: 0,
                                        n: 0
                                    },
                                    change: {
                                        o: 0,
                                        n: 0
                                    }
                                }
                            });
                            var o = n.data(i),
                                r = o.opt,
                                a = n.data("mcs-axis"),
                                l = n.data("mcs-scrollbar-position"),
                                c = n.data("mcs-theme");
                            a && (r.axis = a), l && (r.scrollbarPosition = l), c && (r.theme = c, h(r)), v.call(this), o && r.callbacks.onCreate && "function" == typeof r.callbacks.onCreate && r.callbacks.onCreate.call(this), e("#mCSB_" + o.idx + "_container img:not(." + u[2] + ")").addClass(u[2]), d.update.call(null, n)
                        }
                    })
                },
                update: function(t, n) {
                    var o = t || f.call(this);
                    return e(o).each(function() {
                        var t = e(this);
                        if (t.data(i)) {
                            var o = t.data(i),
                                r = o.opt,
                                s = e("#mCSB_" + o.idx + "_container"),
                                a = e("#mCSB_" + o.idx),
                                l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                            if (!s.length) return;
                            o.tweenRunning && X(t), n && o && r.callbacks.onBeforeUpdate && "function" == typeof r.callbacks.onBeforeUpdate && r.callbacks.onBeforeUpdate.call(this), t.hasClass(u[3]) && t.removeClass(u[3]), t.hasClass(u[4]) && t.removeClass(u[4]), a.height() !== t.height() && a.css("max-height", t.height()), y.call(this), "y" === r.axis || r.advanced.autoExpandHorizontalScroll || s.css("width", _(s)), o.overflowed = k.call(this), D.call(this), r.autoDraggerLength && b.call(this), w.call(this), T.call(this);
                            var c = [Math.abs(s[0].offsetTop), Math.abs(s[0].offsetLeft)];
                            "x" !== r.axis && (o.overflowed[0] ? l[0].height() > l[0].parent().height() ? S.call(this) : (Y(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }), o.contentReset.y = null) : (S.call(this), "y" === r.axis ? E.call(this) : "yx" === r.axis && o.overflowed[1] && Y(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }))), "y" !== r.axis && (o.overflowed[1] ? l[1].width() > l[1].parent().width() ? S.call(this) : (Y(t, c[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }), o.contentReset.x = null) : (S.call(this), "x" === r.axis ? E.call(this) : "yx" === r.axis && o.overflowed[0] && Y(t, c[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }))), n && o && (2 === n && r.callbacks.onImageLoad && "function" == typeof r.callbacks.onImageLoad ? r.callbacks.onImageLoad.call(this) : 3 === n && r.callbacks.onSelectorChange && "function" == typeof r.callbacks.onSelectorChange ? r.callbacks.onSelectorChange.call(this) : r.callbacks.onUpdate && "function" == typeof r.callbacks.onUpdate && r.callbacks.onUpdate.call(this)), W.call(this)
                        }
                    })
                },
                scrollTo: function(t, n) {
                    if ("undefined" != typeof t && null != t) {
                        var o = f.call(this);
                        return e(o).each(function() {
                            var o = e(this);
                            if (o.data(i)) {
                                var r = o.data(i),
                                    s = r.opt,
                                    a = {
                                        trigger: "external",
                                        scrollInertia: s.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    },
                                    l = e.extend(!0, {}, a, n),
                                    c = F.call(this, t),
                                    u = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                c[0] = z.call(this, c[0], "y"), c[1] = z.call(this, c[1], "x"), l.moveDragger && (c[0] *= r.scrollRatio.y, c[1] *= r.scrollRatio.x), l.dur = u, setTimeout(function() {
                                    null !== c[0] && "undefined" != typeof c[0] && "x" !== s.axis && r.overflowed[0] && (l.dir = "y", l.overwrite = "all", Y(o, c[0].toString(), l)), null !== c[1] && "undefined" != typeof c[1] && "y" !== s.axis && r.overflowed[1] && (l.dir = "x", l.overwrite = "none", Y(o, c[1].toString(), l))
                                }, l.timeout)
                            }
                        })
                    }
                },
                stop: function() {
                    var t = f.call(this);
                    return e(t).each(function() {
                        var t = e(this);
                        t.data(i) && X(t)
                    })
                },
                disable: function(t) {
                    var n = f.call(this);
                    return e(n).each(function() {
                        var n = e(this);
                        n.data(i) && (n.data(i), W.call(this, "remove"), E.call(this), t && S.call(this), D.call(this, !0), n.addClass(u[3]))
                    })
                },
                destroy: function() {
                    var t = f.call(this);
                    return e(t).each(function() {
                        var o = e(this);
                        if (o.data(i)) {
                            var r = o.data(i),
                                s = r.opt,
                                a = e("#mCSB_" + r.idx),
                                l = e("#mCSB_" + r.idx + "_container"),
                                c = e(".mCSB_" + r.idx + "_scrollbar");
                            s.live && p(s.liveSelector || e(t).selector), W.call(this, "remove"), E.call(this), S.call(this), o.removeData(i), Z(this, "mcs"), c.remove(), l.find("img." + u[2]).removeClass(u[2]), a.replaceWith(l.contents()), o.removeClass(n + " _" + i + "_" + r.idx + " " + u[6] + " " + u[7] + " " + u[5] + " " + u[3]).addClass(u[4])
                        }
                    })
                }
            },
            f = function() {
                return "object" != typeof e(this) || e(this).length < 1 ? o : this
            },
            h = function(t) {
                var n = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    i = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    o = ["minimal", "minimal-dark"],
                    r = ["minimal", "minimal-dark"],
                    s = ["minimal", "minimal-dark"];
                t.autoDraggerLength = e.inArray(t.theme, n) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, i) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, o) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, r) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, s) > -1 ? "outside" : t.scrollbarPosition
            },
            p = function(e) {
                a[e] && (clearTimeout(a[e]), Z(a, e))
            },
            m = function(e) {
                return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
            },
            g = function(e) {
                return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
            },
            v = function() {
                var t = e(this),
                    o = t.data(i),
                    r = o.opt,
                    s = r.autoExpandScrollbar ? " " + u[1] + "_expand" : "",
                    a = ["<div id='mCSB_" + o.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_vertical" + s + "'><div class='" + u[12] + "'><div id='mCSB_" + o.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + o.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_horizontal" + s + "'><div class='" + u[12] + "'><div id='mCSB_" + o.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    l = "yx" === r.axis ? "mCSB_vertical_horizontal" : "x" === r.axis ? "mCSB_horizontal" : "mCSB_vertical",
                    c = "yx" === r.axis ? a[0] + a[1] : "x" === r.axis ? a[1] : a[0],
                    d = "yx" === r.axis ? "<div id='mCSB_" + o.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    f = r.autoHideScrollbar ? " " + u[6] : "",
                    h = "x" !== r.axis && "rtl" === o.langDir ? " " + u[7] : "";
                r.setWidth && t.css("width", r.setWidth), r.setHeight && t.css("height", r.setHeight), r.setLeft = "y" !== r.axis && "rtl" === o.langDir ? "989999px" : r.setLeft, t.addClass(n + " _" + i + "_" + o.idx + f + h).wrapInner("<div id='mCSB_" + o.idx + "' class='mCustomScrollBox mCS-" + r.theme + " " + l + "'><div id='mCSB_" + o.idx + "_container' class='mCSB_container' style='position:relative; top:" + r.setTop + "; left:" + r.setLeft + ";' dir=" + o.langDir + " /></div>");
                var p = e("#mCSB_" + o.idx),
                    m = e("#mCSB_" + o.idx + "_container");
                "y" === r.axis || r.advanced.autoExpandHorizontalScroll || m.css("width", _(m)), "outside" === r.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), p.addClass("mCSB_outside").after(c)) : (p.addClass("mCSB_inside").append(c), m.wrap(d)), x.call(this);
                var g = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
                g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
            },
            _ = function(t) {
                var n = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
                        return e(this).outerWidth(!0)
                    }).get())],
                    i = t.parent().width();
                return n[0] > i ? n[0] : n[1] > i ? n[1] : "100%"
            },
            y = function() {
                var t = e(this),
                    n = t.data(i),
                    o = n.opt,
                    r = e("#mCSB_" + n.idx + "_container");
                if (o.advanced.autoExpandHorizontalScroll && "y" !== o.axis) {
                    r.css({
                        width: "auto",
                        "min-width": 0,
                        "overflow-x": "scroll"
                    });
                    var s = Math.ceil(r[0].scrollWidth);
                    3 === o.advanced.autoExpandHorizontalScroll || 2 !== o.advanced.autoExpandHorizontalScroll && s > r.parent().width() ? r.css({
                        width: s,
                        "min-width": "100%",
                        "overflow-x": "inherit"
                    }) : r.css({
                        "overflow-x": "inherit",
                        position: "absolute"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: Math.ceil(r[0].getBoundingClientRect().right + .4) - Math.floor(r[0].getBoundingClientRect().left),
                        "min-width": "100%",
                        position: "relative"
                    }).unwrap()
                }
            },
            x = function() {
                var t = e(this),
                    n = t.data(i),
                    o = n.opt,
                    r = e(".mCSB_" + n.idx + "_scrollbar:first"),
                    s = ee(o.scrollButtons.tabindex) ? "tabindex='" + o.scrollButtons.tabindex + "'" : "",
                    a = ["<a href='#' class='" + u[13] + "' oncontextmenu='return false;' " + s + " />", "<a href='#' class='" + u[14] + "' oncontextmenu='return false;' " + s + " />", "<a href='#' class='" + u[15] + "' oncontextmenu='return false;' " + s + " />", "<a href='#' class='" + u[16] + "' oncontextmenu='return false;' " + s + " />"],
                    l = ["x" === o.axis ? a[2] : a[0], "x" === o.axis ? a[3] : a[1], a[2], a[3]];
                o.scrollButtons.enable && r.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
            },
            b = function() {
                var t = e(this),
                    n = t.data(i),
                    o = e("#mCSB_" + n.idx),
                    r = e("#mCSB_" + n.idx + "_container"),
                    s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                    a = [o.height() / r.outerHeight(!1), o.width() / r.outerWidth(!1)],
                    c = [parseInt(s[0].css("min-height")), Math.round(a[0] * s[0].parent().height()), parseInt(s[1].css("min-width")), Math.round(a[1] * s[1].parent().width())],
                    u = l && c[1] < c[0] ? c[0] : c[1],
                    d = l && c[3] < c[2] ? c[2] : c[3];
                s[0].css({
                    height: u,
                    "max-height": s[0].parent().height() - 10
                }).find(".mCSB_dragger_bar").css({
                    "line-height": c[0] + "px"
                }), s[1].css({
                    width: d,
                    "max-width": s[1].parent().width() - 10
                })
            },
            w = function() {
                var t = e(this),
                    n = t.data(i),
                    o = e("#mCSB_" + n.idx),
                    r = e("#mCSB_" + n.idx + "_container"),
                    s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                    a = [r.outerHeight(!1) - o.height(), r.outerWidth(!1) - o.width()],
                    l = [a[0] / (s[0].parent().height() - s[0].height()), a[1] / (s[1].parent().width() - s[1].width())];
                n.scrollRatio = {
                    y: l[0],
                    x: l[1]
                }
            },
            C = function(e, t, n) {
                var i = n ? u[0] + "_expanded" : "",
                    o = e.closest(".mCSB_scrollTools");
                "active" === t ? (e.toggleClass(u[0] + " " + i), o.toggleClass(u[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(u[0]), o.removeClass(u[1])) : (e.addClass(u[0]), o.addClass(u[1])))
            },
            k = function() {
                var t = e(this),
                    n = t.data(i),
                    o = e("#mCSB_" + n.idx),
                    r = e("#mCSB_" + n.idx + "_container"),
                    s = null == n.overflowed ? r.height() : r.outerHeight(!1),
                    a = null == n.overflowed ? r.width() : r.outerWidth(!1),
                    l = r[0].scrollHeight,
                    c = r[0].scrollWidth;
                return l > s && (s = l), c > a && (a = c), [s > o.height(), a > o.width()]
            },
            S = function() {
                var t = e(this),
                    n = t.data(i),
                    o = n.opt,
                    r = e("#mCSB_" + n.idx),
                    s = e("#mCSB_" + n.idx + "_container"),
                    a = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                if (X(t), ("x" !== o.axis && !n.overflowed[0] || "y" === o.axis && n.overflowed[0]) && (a[0].add(s).css("top", 0), Y(t, "_resetY")), "y" !== o.axis && !n.overflowed[1] || "x" === o.axis && n.overflowed[1]) {
                    var l = dx = 0;
                    "rtl" === n.langDir && (l = r.width() - s.outerWidth(!1), dx = Math.abs(l / n.scrollRatio.x)), s.css("left", l), a[1].css("left", dx), Y(t, "_resetX")
                }
            },
            T = function() {
                function t() {
                    s = setTimeout(function() {
                        e.event.special.mousewheel ? (clearTimeout(s), j.call(n[0])) : t()
                    }, 100)
                }
                var n = e(this),
                    o = n.data(i),
                    r = o.opt;
                if (!o.bindEvents) {
                    if (O.call(this), r.contentTouchScroll && M.call(this), B.call(this), r.mouseWheel.enable) {
                        var s;
                        t()
                    }
                    L.call(this), $.call(this), r.advanced.autoScrollOnFocus && H.call(this), r.scrollButtons.enable && P.call(this), r.keyboard.enable && q.call(this), o.bindEvents = !0
                }
            },
            E = function() {
                var t = e(this),
                    n = t.data(i),
                    o = n.opt,
                    r = i + "_" + n.idx,
                    s = ".mCSB_" + n.idx + "_scrollbar",
                    a = e("#mCSB_" + n.idx + ",#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper," + s + " ." + u[12] + ",#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal," + s + ">a"),
                    l = e("#mCSB_" + n.idx + "_container");
                o.advanced.releaseDraggableSelectors && a.add(e(o.advanced.releaseDraggableSelectors)), n.bindEvents && (e(document).unbind("." + r), a.each(function() {
                    e(this).unbind("." + r)
                }), clearTimeout(t[0]._focusTimeout), Z(t[0], "_focusTimeout"), clearTimeout(n.sequential.step), Z(n.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), Z(l[0], "onCompleteTimeout"), n.bindEvents = !1)
            },
            D = function(t) {
                var n = e(this),
                    o = n.data(i),
                    r = o.opt,
                    s = e("#mCSB_" + o.idx + "_container_wrapper"),
                    a = s.length ? s : e("#mCSB_" + o.idx + "_container"),
                    l = [e("#mCSB_" + o.idx + "_scrollbar_vertical"), e("#mCSB_" + o.idx + "_scrollbar_horizontal")],
                    c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                "x" !== r.axis && (o.overflowed[0] && !t ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), a.removeClass(u[8] + " " + u[10])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[0].css("display", "none"), a.removeClass(u[10])) : (l[0].css("display", "none"), a.addClass(u[10])), a.addClass(u[8]))), "y" !== r.axis && (o.overflowed[1] && !t ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), a.removeClass(u[9] + " " + u[11])) : (r.alwaysShowScrollbar ? (2 !== r.alwaysShowScrollbar && c[1].css("display", "none"), a.removeClass(u[11])) : (l[1].css("display", "none"), a.addClass(u[11])), a.addClass(u[9]))), o.overflowed[0] || o.overflowed[1] ? n.removeClass(u[5]) : n.addClass(u[5])
            },
            I = function(e) {
                var t = e.type;
                switch (t) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return e.target.ownerDocument !== document ? [e.originalEvent.screenY, e.originalEvent.screenX, !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var n = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                            i = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                        return e.target.ownerDocument !== document ? [n.screenY, n.screenX, i > 1] : [n.pageY, n.pageX, i > 1];
                    default:
                        return [e.pageY, e.pageX, !1]
                }
            },
            O = function() {
                function t(e) {
                    var t = p.find("iframe");
                    if (t.length) {
                        var n = e ? "auto" : "none";
                        t.css("pointer-events", n)
                    }
                }

                function n(e, t, n, i) {
                    if (p[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === h[1]) var r = "x",
                        s = (o[0].offsetLeft - t + i) * u.scrollRatio.x;
                    else var r = "y",
                        s = (o[0].offsetTop - e + n) * u.scrollRatio.y;
                    Y(a, s.toString(), {
                        dir: r,
                        drag: !0
                    })
                }
                var o, r, s, a = e(this),
                    u = a.data(i),
                    d = u.opt,
                    f = i + "_" + u.idx,
                    h = ["mCSB_" + u.idx + "_dragger_vertical", "mCSB_" + u.idx + "_dragger_horizontal"],
                    p = e("#mCSB_" + u.idx + "_container"),
                    m = e("#" + h[0] + ",#" + h[1]),
                    g = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m;
                m.bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function(n) {
                    if (n.stopImmediatePropagation(), n.preventDefault(), G(n)) {
                        c = !0, l && (document.onselectstart = function() {
                            return !1
                        }), t(!1), X(a), o = e(this);
                        var i = o.offset(),
                            u = I(n)[0] - i.top,
                            f = I(n)[1] - i.left,
                            h = o.height() + i.top,
                            p = o.width() + i.left;
                        h > u && u > 0 && p > f && f > 0 && (r = u, s = f), C(o, "active", d.autoExpandScrollbar)
                    }
                }).bind("touchmove." + f, function(e) {
                    e.stopImmediatePropagation(), e.preventDefault();
                    var t = o.offset(),
                        i = I(e)[0] - t.top,
                        a = I(e)[1] - t.left;
                    n(r, s, i, a)
                }), e(document).bind("mousemove." + f + " pointermove." + f + " MSPointerMove." + f, function(e) {
                    if (o) {
                        var t = o.offset(),
                            i = I(e)[0] - t.top,
                            a = I(e)[1] - t.left;
                        if (r === i) return;
                        n(r, s, i, a)
                    }
                }).add(g).bind("mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f, function(e) {
                    o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, l && (document.onselectstart = null), t(!0)
                })
            },
            M = function() {
                function n(e) {
                    if (!J(e) || c || I(e)[2]) return void(t = 0);
                    t = 1, w = 0, C = 0, u = 1, k.removeClass("mCS_touch_action");
                    var n = O.offset();
                    d = I(e)[0] - n.top, f = I(e)[1] - n.left, H = [I(e)[0], I(e)[1]]
                }

                function o(e) {
                    if (J(e) && !c && !I(e)[2] && (e.stopImmediatePropagation(), (!C || w) && u)) {
                        g = Q();
                        var t = D.offset(),
                            n = I(e)[0] - t.top,
                            i = I(e)[1] - t.left,
                            o = "mcsLinearOut";
                        if (B.push(n), j.push(i), H[2] = Math.abs(I(e)[0] - H[0]), H[3] = Math.abs(I(e)[1] - H[1]), S.overflowed[0]) var r = M[0].parent().height() - M[0].height(),
                            s = d - n > 0 && n - d > -(r * S.scrollRatio.y) && (2 * H[3] < H[2] || "yx" === T.axis);
                        if (S.overflowed[1]) var a = M[1].parent().width() - M[1].width(),
                            h = f - i > 0 && i - f > -(a * S.scrollRatio.x) && (2 * H[2] < H[3] || "yx" === T.axis);
                        s || h ? (q || e.preventDefault(), w = 1) : (C = 1, k.addClass("mCS_touch_action")), q && e.preventDefault(), x = "yx" === T.axis ? [d - n, f - i] : "x" === T.axis ? [null, f - i] : [d - n, null], O[0].idleTimer = 250, S.overflowed[0] && l(x[0], N, o, "y", "all", !0), S.overflowed[1] && l(x[1], N, o, "x", L, !0)
                    }
                }

                function r(e) {
                    if (!J(e) || c || I(e)[2]) return void(t = 0);
                    t = 1, e.stopImmediatePropagation(), X(k), m = Q();
                    var n = D.offset();
                    h = I(e)[0] - n.top, p = I(e)[1] - n.left, B = [], j = []
                }

                function s(e) {
                    if (J(e) && !c && !I(e)[2]) {
                        u = 0, e.stopImmediatePropagation(), w = 0, C = 0, v = Q();
                        var t = D.offset(),
                            n = I(e)[0] - t.top,
                            i = I(e)[1] - t.left;
                        if (!(v - g > 30)) {
                            y = 1e3 / (v - m);
                            var o = "mcsEaseOut",
                                r = 2.5 > y,
                                s = r ? [B[B.length - 2], j[j.length - 2]] : [0, 0];
                            _ = r ? [n - s[0], i - s[1]] : [n - h, i - p];
                            var d = [Math.abs(_[0]), Math.abs(_[1])];
                            y = r ? [Math.abs(_[0] / 4), Math.abs(_[1] / 4)] : [y, y];
                            var f = [Math.abs(O[0].offsetTop) - _[0] * a(d[0] / y[0], y[0]), Math.abs(O[0].offsetLeft) - _[1] * a(d[1] / y[1], y[1])];
                            x = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], b = [4 * d[0] + T.scrollInertia, 4 * d[1] + T.scrollInertia];
                            var k = parseInt(T.contentTouchScroll) || 0;
                            x[0] = d[0] > k ? x[0] : 0, x[1] = d[1] > k ? x[1] : 0, S.overflowed[0] && l(x[0], b[0], o, "y", L, !1), S.overflowed[1] && l(x[1], b[1], o, "x", L, !1)
                        }
                    }
                }

                function a(e, t) {
                    var n = [1.5 * t, 2 * t, t / 1.5, t / 2];
                    return e > 90 ? t > 4 ? n[0] : n[3] : e > 60 ? t > 3 ? n[3] : n[2] : e > 30 ? t > 8 ? n[1] : t > 6 ? n[0] : t > 4 ? t : n[2] : t > 8 ? t : n[3]
                }

                function l(e, t, n, i, o, r) {
                    e && Y(k, e.toString(), {
                        dur: t,
                        scrollEasing: n,
                        dir: i,
                        overwrite: o,
                        drag: r
                    })
                }
                var u, d, f, h, p, m, g, v, _, y, x, b, w, C, k = e(this),
                    S = k.data(i),
                    T = S.opt,
                    E = i + "_" + S.idx,
                    D = e("#mCSB_" + S.idx),
                    O = e("#mCSB_" + S.idx + "_container"),
                    M = [e("#mCSB_" + S.idx + "_dragger_vertical"), e("#mCSB_" + S.idx + "_dragger_horizontal")],
                    B = [],
                    j = [],
                    N = 0,
                    L = "yx" === T.axis ? "none" : "all",
                    H = [],
                    $ = O.find("iframe"),
                    P = ["touchstart." + E + " pointerdown." + E + " MSPointerDown." + E, "touchmove." + E + " pointermove." + E + " MSPointerMove." + E, "touchend." + E + " pointerup." + E + " MSPointerUp." + E],
                    q = void 0 !== document.body.style.touchAction;
                O.bind(P[0], function(e) {
                    n(e)
                }).bind(P[1], function(e) {
                    o(e)
                }), D.bind(P[0], function(e) {
                    r(e)
                }).bind(P[2], function(e) {
                    s(e)
                }), $.length && $.each(function() {
                    e(this).load(function() {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind(P[0], function(e) {
                            n(e), r(e)
                        }).bind(P[1], function(e) {
                            o(e)
                        }).bind(P[2], function(e) {
                            s(e)
                        })
                    })
                })
            },
            B = function() {
                function n() {
                    return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                }

                function o(e, t, n) {
                    u.type = n && r ? "stepped" : "stepless", u.scrollAmount = 10, R(s, e, t, "mcsLinearOut", n ? 60 : null)
                }
                var r, s = e(this),
                    a = s.data(i),
                    l = a.opt,
                    u = a.sequential,
                    d = i + "_" + a.idx,
                    f = e("#mCSB_" + a.idx + "_container"),
                    h = f.parent();
                f.bind("mousedown." + d, function(e) {
                    t || r || (r = 1, c = !0)
                }).add(document).bind("mousemove." + d, function(e) {
                    if (!t && r && n()) {
                        var i = f.offset(),
                            s = I(e)[0] - i.top + f[0].offsetTop,
                            c = I(e)[1] - i.left + f[0].offsetLeft;
                        s > 0 && s < h.height() && c > 0 && c < h.width() ? u.step && o("off", null, "stepped") : ("x" !== l.axis && a.overflowed[0] && (0 > s ? o("on", 38) : s > h.height() && o("on", 40)), "y" !== l.axis && a.overflowed[1] && (0 > c ? o("on", 37) : c > h.width() && o("on", 39)))
                    }
                }).bind("mouseup." + d + " dragend." + d, function(e) {
                    t || (r && (r = 0, o("off", null)), c = !1)
                })
            },
            j = function() {
                function t(t, i) {
                    if (X(n), !N(n, t.target)) {
                        var s = "auto" !== r.mouseWheel.deltaFactor ? parseInt(r.mouseWheel.deltaFactor) : l && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100;
                        if ("x" === r.axis || "x" === r.mouseWheel.axis) var u = "x",
                            d = [Math.round(s * o.scrollRatio.x), parseInt(r.mouseWheel.scrollAmount)],
                            f = "auto" !== r.mouseWheel.scrollAmount ? d[1] : d[0] >= a.width() ? .9 * a.width() : d[0],
                            h = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetLeft),
                            p = c[1][0].offsetLeft,
                            m = c[1].parent().width() - c[1].width(),
                            g = t.deltaX || t.deltaY || i;
                        else var u = "y",
                            d = [Math.round(s * o.scrollRatio.y), parseInt(r.mouseWheel.scrollAmount)],
                            f = "auto" !== r.mouseWheel.scrollAmount ? d[1] : d[0] >= a.height() ? .9 * a.height() : d[0],
                            h = Math.abs(e("#mCSB_" + o.idx + "_container")[0].offsetTop),
                            p = c[0][0].offsetTop,
                            m = c[0].parent().height() - c[0].height(),
                            g = t.deltaY || i;
                        "y" === u && !o.overflowed[0] || "x" === u && !o.overflowed[1] || ((r.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (g = -g), r.mouseWheel.normalizeDelta && (g = 0 > g ? -1 : 1), (g > 0 && 0 !== p || 0 > g && p !== m || r.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), Y(n, (h - g * f).toString(), {
                            dir: u
                        }))
                    }
                }
                if (e(this).data(i)) {
                    var n = e(this),
                        o = n.data(i),
                        r = o.opt,
                        s = i + "_" + o.idx,
                        a = e("#mCSB_" + o.idx),
                        c = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                        u = e("#mCSB_" + o.idx + "_container").find("iframe");
                    u.length && u.each(function() {
                        e(this).load(function() {
                            A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + s, function(e, n) {
                                t(e, n)
                            })
                        })
                    }), a.bind("mousewheel." + s, function(e, n) {
                        t(e, n)
                    })
                }
            },
            A = function(e) {
                var t = null;
                try {
                    var n = e.contentDocument || e.contentWindow.document;
                    t = n.body.innerHTML
                } catch (i) {}
                return null !== t
            },
            N = function(t, n) {
                var o = n.nodeName.toLowerCase(),
                    r = t.data(i).opt.mouseWheel.disableOver,
                    s = ["select", "textarea"];
                return e.inArray(o, r) > -1 && !(e.inArray(o, s) > -1 && !e(n).is(":focus"))
            },
            L = function() {
                var t = e(this),
                    n = t.data(i),
                    o = i + "_" + n.idx,
                    r = e("#mCSB_" + n.idx + "_container"),
                    s = r.parent(),
                    a = e(".mCSB_" + n.idx + "_scrollbar ." + u[12]);
                a.bind("touchstart." + o + " pointerdown." + o + " MSPointerDown." + o, function(e) {
                    c = !0
                }).bind("touchend." + o + " pointerup." + o + " MSPointerUp." + o, function(e) {
                    c = !1
                }).bind("click." + o, function(i) {
                    if (e(i.target).hasClass(u[12]) || e(i.target).hasClass("mCSB_draggerRail")) {
                        X(t);
                        var o = e(this),
                            a = o.find(".mCSB_dragger");
                        if (o.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!n.overflowed[1]) return;
                            var l = "x",
                                c = i.pageX > a.offset().left ? -1 : 1,
                                d = Math.abs(r[0].offsetLeft) - .9 * c * s.width()
                        } else {
                            if (!n.overflowed[0]) return;
                            var l = "y",
                                c = i.pageY > a.offset().top ? -1 : 1,
                                d = Math.abs(r[0].offsetTop) - .9 * c * s.height()
                        }
                        Y(t, d.toString(), {
                            dir: l,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                })
            },
            H = function() {
                var t = e(this),
                    n = t.data(i),
                    o = n.opt,
                    r = i + "_" + n.idx,
                    s = e("#mCSB_" + n.idx + "_container"),
                    a = s.parent();
                s.bind("focusin." + r, function(n) {
                    var i = e(document.activeElement),
                        r = s.find(".mCustomScrollBox").length,
                        l = 0;
                    i.is(o.advanced.autoScrollOnFocus) && (X(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = r ? (l + 17) * r : 0, t[0]._focusTimeout = setTimeout(function() {
                        var e = [te(i)[0], te(i)[1]],
                            n = [s[0].offsetTop, s[0].offsetLeft],
                            r = [n[0] + e[0] >= 0 && n[0] + e[0] < a.height() - i.outerHeight(!1), n[1] + e[1] >= 0 && n[0] + e[1] < a.width() - i.outerWidth(!1)],
                            c = "yx" !== o.axis || r[0] || r[1] ? "all" : "none";
                        "x" === o.axis || r[0] || Y(t, e[0].toString(), {
                            dir: "y",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: l
                        }), "y" === o.axis || r[1] || Y(t, e[1].toString(), {
                            dir: "x",
                            scrollEasing: "mcsEaseInOut",
                            overwrite: c,
                            dur: l
                        })
                    }, t[0]._focusTimer))
                })
            },
            $ = function() {
                var t = e(this),
                    n = t.data(i),
                    o = i + "_" + n.idx,
                    r = e("#mCSB_" + n.idx + "_container").parent();
                r.bind("scroll." + o, function(t) {
                    (0 !== r.scrollTop() || 0 !== r.scrollLeft()) && e(".mCSB_" + n.idx + "_scrollbar").css("visibility", "hidden")
                })
            },
            P = function() {
                var t = e(this),
                    n = t.data(i),
                    o = n.opt,
                    r = n.sequential,
                    s = i + "_" + n.idx,
                    a = ".mCSB_" + n.idx + "_scrollbar",
                    l = e(a + ">a");
                l.bind("mousedown." + s + " touchstart." + s + " pointerdown." + s + " MSPointerDown." + s + " mouseup." + s + " touchend." + s + " pointerup." + s + " MSPointerUp." + s + " mouseout." + s + " pointerout." + s + " MSPointerOut." + s + " click." + s, function(i) {
                    function s(e, n) {
                        r.scrollAmount = o.snapAmount || o.scrollButtons.scrollAmount, R(t, e, n)
                    }
                    if (i.preventDefault(), G(i)) {
                        var a = e(this).attr("class");
                        switch (r.type = o.scrollButtons.scrollType, i.type) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                                if ("stepped" === r.type) return;
                                c = !0, n.tweenRunning = !1, s("on", a);
                                break;
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                if ("stepped" === r.type) return;
                                c = !1, r.dir && s("off", a);
                                break;
                            case "click":
                                if ("stepped" !== r.type || n.tweenRunning) return;
                                s("on", a)
                        }
                    }
                })
            },
            q = function() {
                function t(t) {
                    function i(e, t) {
                        s.type = r.keyboard.scrollType, s.scrollAmount = r.snapAmount || r.keyboard.scrollAmount, "stepped" === s.type && o.tweenRunning || R(n, e, t)
                    }
                    switch (t.type) {
                        case "blur":
                            o.tweenRunning && s.dir && i("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var a = t.keyCode ? t.keyCode : t.which,
                                l = "on";
                            if ("x" !== r.axis && (38 === a || 40 === a) || "y" !== r.axis && (37 === a || 39 === a)) {
                                if ((38 === a || 40 === a) && !o.overflowed[0] || (37 === a || 39 === a) && !o.overflowed[1]) return;
                                "keyup" === t.type && (l = "off"), e(document.activeElement).is(d) || (t.preventDefault(), t.stopImmediatePropagation(), i(l, a))
                            } else if (33 === a || 34 === a) {
                                if ((o.overflowed[0] || o.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                                    X(n);
                                    var f = 34 === a ? -1 : 1;
                                    if ("x" === r.axis || "yx" === r.axis && o.overflowed[1] && !o.overflowed[0]) var h = "x",
                                        p = Math.abs(c[0].offsetLeft) - .9 * f * u.width();
                                    else var h = "y",
                                        p = Math.abs(c[0].offsetTop) - .9 * f * u.height();
                                    Y(n, p.toString(), {
                                        dir: h,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                            } else if ((35 === a || 36 === a) && !e(document.activeElement).is(d) && ((o.overflowed[0] || o.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                                if ("x" === r.axis || "yx" === r.axis && o.overflowed[1] && !o.overflowed[0]) var h = "x",
                                    p = 35 === a ? Math.abs(u.width() - c.outerWidth(!1)) : 0;
                                else var h = "y",
                                    p = 35 === a ? Math.abs(u.height() - c.outerHeight(!1)) : 0;
                                Y(n, p.toString(), {
                                    dir: h,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            }
                    }
                }
                var n = e(this),
                    o = n.data(i),
                    r = o.opt,
                    s = o.sequential,
                    a = i + "_" + o.idx,
                    l = e("#mCSB_" + o.idx),
                    c = e("#mCSB_" + o.idx + "_container"),
                    u = c.parent(),
                    d = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    f = c.find("iframe"),
                    h = ["blur." + a + " keydown." + a + " keyup." + a];
                f.length && f.each(function() {
                    e(this).load(function() {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(e) {
                            t(e)
                        })
                    })
                }), l.attr("tabindex", "0").bind(h[0], function(e) {
                    t(e)
                })
            },
            R = function(t, n, o, r, s) {
                function a(e) {
                    var n = "stepped" !== f.type,
                        i = s ? s : e ? n ? m / 1.5 : g : 1e3 / 60,
                        o = e ? n ? 7.5 : 40 : 2.5,
                        l = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                        u = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                        d = "x" === f.dir[0] ? l[1] + f.dir[1] * u[1] * o : l[0] + f.dir[1] * u[0] * o,
                        p = "x" === f.dir[0] ? l[1] + f.dir[1] * parseInt(f.scrollAmount) : l[0] + f.dir[1] * parseInt(f.scrollAmount),
                        v = "auto" !== f.scrollAmount ? p : d,
                        _ = r ? r : e ? n ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                        y = e ? !0 : !1;
                    return e && 17 > i && (v = "x" === f.dir[0] ? l[1] : l[0]), Y(t, v.toString(), {
                        dir: f.dir[0],
                        scrollEasing: _,
                        dur: i,
                        onComplete: y
                    }), e ? void(f.dir = !1) : (clearTimeout(f.step), void(f.step = setTimeout(function() {
                        a()
                    }, i)))
                }

                function l() {
                    clearTimeout(f.step), Z(f, "step"), X(t)
                }
                var c = t.data(i),
                    d = c.opt,
                    f = c.sequential,
                    h = e("#mCSB_" + c.idx + "_container"),
                    p = "stepped" === f.type ? !0 : !1,
                    m = d.scrollInertia < 26 ? 26 : d.scrollInertia,
                    g = d.scrollInertia < 1 ? 17 : d.scrollInertia;
                switch (n) {
                    case "on":
                        if (f.dir = [o === u[16] || o === u[15] || 39 === o || 37 === o ? "x" : "y", o === u[13] || o === u[15] || 38 === o || 37 === o ? -1 : 1], X(t), ee(o) && "stepped" === f.type) return;
                        a(p);
                        break;
                    case "off":
                        l(), (p || c.tweenRunning && f.dir) && a(!0)
                }
            },
            F = function(t) {
                var n = e(this).data(i).opt,
                    o = [];
                return "function" == typeof t && (t = t()), t instanceof Array ? o = t.length > 1 ? [t[0], t[1]] : "x" === n.axis ? [null, t[0]] : [t[0], null] : (o[0] = t.y ? t.y : t.x || "x" === n.axis ? null : t, o[1] = t.x ? t.x : t.y || "y" === n.axis ? null : t), "function" == typeof o[0] && (o[0] = o[0]()), "function" == typeof o[1] && (o[1] = o[1]()), o
            },
            z = function(t, n) {
                if (null != t && "undefined" != typeof t) {
                    var o = e(this),
                        r = o.data(i),
                        s = r.opt,
                        a = e("#mCSB_" + r.idx + "_container"),
                        l = a.parent(),
                        c = typeof t;
                    n || (n = "x" === s.axis ? "x" : "y");
                    var u = "x" === n ? a.outerWidth(!1) : a.outerHeight(!1),
                        f = "x" === n ? a[0].offsetLeft : a[0].offsetTop,
                        h = "x" === n ? "left" : "top";
                    switch (c) {
                        case "function":
                            return t();
                        case "object":
                            var p = t.jquery ? t : e(t);
                            if (!p.length) return;
                            return "x" === n ? te(p)[1] : te(p)[0];
                        case "string":
                        case "number":
                            if (ee(t)) return Math.abs(t);
                            if (-1 !== t.indexOf("%")) return Math.abs(u * parseInt(t) / 100);
                            if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));
                            if (-1 !== t.indexOf("+=")) {
                                var m = f + parseInt(t.split("+=")[1]);
                                return m >= 0 ? 0 : Math.abs(m)
                            }
                            if (-1 !== t.indexOf("px") && ee(t.split("px")[0])) return Math.abs(t.split("px")[0]);
                            if ("top" === t || "left" === t) return 0;
                            if ("bottom" === t) return Math.abs(l.height() - a.outerHeight(!1));
                            if ("right" === t) return Math.abs(l.width() - a.outerWidth(!1));
                            if ("first" === t || "last" === t) {
                                var p = a.find(":" + t);
                                return "x" === n ? te(p)[1] : te(p)[0]
                            }
                            return e(t).length ? "x" === n ? te(e(t))[1] : te(e(t))[0] : (a.css(h, t), void d.update.call(null, o[0]))
                    }
                }
            },
            W = function(t) {
                function n() {
                    return clearTimeout(f[0].autoUpdate), 0 === a.parents("html").length ? void(a = null) : void(f[0].autoUpdate = setTimeout(function() {
                        return c.advanced.updateOnSelectorChange && (l.poll.change.n = r(), l.poll.change.n !== l.poll.change.o) ? (l.poll.change.o = l.poll.change.n, void s(3)) : c.advanced.updateOnContentResize && (l.poll.size.n = a[0].scrollHeight + a[0].scrollWidth + f[0].offsetHeight + a[0].offsetHeight, l.poll.size.n !== l.poll.size.o) ? (l.poll.size.o = l.poll.size.n, void s(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (l.poll.img.n = f.find("img").length, l.poll.img.n === l.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && n()) : (l.poll.img.o = l.poll.img.n, void f.find("img").each(function() {
                            o(this)
                        }))
                    }, c.advanced.autoUpdateTimeout))
                }

                function o(t) {
                    function n(e, t) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }

                    function i() {
                        this.onload = null, e(t).addClass(u[2]), s(2)
                    }
                    if (e(t).hasClass(u[2])) return void s();
                    var o = new Image;
                    o.onload = n(o, i), o.src = t.src
                }

                function r() {
                    c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
                    var e = 0,
                        t = f.find(c.advanced.updateOnSelectorChange);
                    return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() {
                        e += this.offsetHeight + this.offsetWidth
                    }), e
                }

                function s(e) {
                    clearTimeout(f[0].autoUpdate), d.update.call(null, a[0], e)
                }
                var a = e(this),
                    l = a.data(i),
                    c = l.opt,
                    f = e("#mCSB_" + l.idx + "_container");
                return t ? (clearTimeout(f[0].autoUpdate), void Z(f[0], "autoUpdate")) : void n()
            },
            U = function(e, t, n) {
                return Math.round(e / t) * t - n
            },
            X = function(t) {
                var n = t.data(i),
                    o = e("#mCSB_" + n.idx + "_container,#mCSB_" + n.idx + "_container_wrapper,#mCSB_" + n.idx + "_dragger_vertical,#mCSB_" + n.idx + "_dragger_horizontal");
                o.each(function() {
                    K.call(this)
                })
            },
            Y = function(t, n, o) {
                function r(e) {
                    return l && c.callbacks[e] && "function" == typeof c.callbacks[e]
                }

                function s() {
                    return [c.callbacks.alwaysTriggerOffsets || y >= x[0] + w, c.callbacks.alwaysTriggerOffsets || -k >= y]
                }

                function a() {
                    var e = [h[0].offsetTop, h[0].offsetLeft],
                        n = [v[0].offsetTop, v[0].offsetLeft],
                        i = [h.outerHeight(!1), h.outerWidth(!1)],
                        r = [f.height(), f.width()];
                    t[0].mcs = {
                        content: h,
                        top: e[0],
                        left: e[1],
                        draggerTop: n[0],
                        draggerLeft: n[1],
                        topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(i[0]) - r[0])),
                        leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(i[1]) - r[1])),
                        direction: o.dir
                    }
                }
                var l = t.data(i),
                    c = l.opt,
                    u = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: !1,
                        dur: c.scrollInertia,
                        overwrite: "all",
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    },
                    o = e.extend(u, o),
                    d = [o.dur, o.drag ? 0 : o.dur],
                    f = e("#mCSB_" + l.idx),
                    h = e("#mCSB_" + l.idx + "_container"),
                    p = h.parent(),
                    m = c.callbacks.onTotalScrollOffset ? F.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                    g = c.callbacks.onTotalScrollBackOffset ? F.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (l.trigger = o.trigger, (0 !== p.scrollTop() || 0 !== p.scrollLeft()) && (e(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), p.scrollTop(0).scrollLeft(0)), "_resetY" !== n || l.contentReset.y || (r("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), l.contentReset.y = 1), "_resetX" !== n || l.contentReset.x || (r("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), l.contentReset.x = 1), "_resetY" !== n && "_resetX" !== n) {
                    switch (!l.contentReset.y && t[0].mcs || !l.overflowed[0] || (r("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), l.contentReset.x = null), !l.contentReset.x && t[0].mcs || !l.overflowed[1] || (r("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), l.contentReset.x = null), c.snapAmount && (n = U(n, c.snapAmount, c.snapOffset)), o.dir) {
                        case "x":
                            var v = e("#mCSB_" + l.idx + "_dragger_horizontal"),
                                _ = "left",
                                y = h[0].offsetLeft,
                                x = [f.width() - h.outerWidth(!1), v.parent().width() - v.width()],
                                b = [n, 0 === n ? 0 : n / l.scrollRatio.x],
                                w = m[1],
                                k = g[1],
                                S = w > 0 ? w / l.scrollRatio.x : 0,
                                T = k > 0 ? k / l.scrollRatio.x : 0;
                            break;
                        case "y":
                            var v = e("#mCSB_" + l.idx + "_dragger_vertical"),
                                _ = "top",
                                y = h[0].offsetTop,
                                x = [f.height() - h.outerHeight(!1), v.parent().height() - v.height()],
                                b = [n, 0 === n ? 0 : n / l.scrollRatio.y],
                                w = m[0],
                                k = g[0],
                                S = w > 0 ? w / l.scrollRatio.y : 0,
                                T = k > 0 ? k / l.scrollRatio.y : 0
                    }
                    b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= x[1] ? b = [x[0], x[1]] : b[0] = -b[0], t[0].mcs || (a(), r("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), (l.tweenRunning || !(0 === y && b[0] >= 0 || y === x[0] && b[0] <= x[0])) && (V(v[0], _, Math.round(b[1]), d[1], o.scrollEasing), V(h[0], _, Math.round(b[0]), d[0], o.scrollEasing, o.overwrite, {
                        onStart: function() {
                            o.callbacks && o.onStart && !l.tweenRunning && (r("onScrollStart") && (a(), c.callbacks.onScrollStart.call(t[0])), l.tweenRunning = !0, C(v), l.cbOffsets = s())
                        },
                        onUpdate: function() {
                            o.callbacks && o.onUpdate && r("whileScrolling") && (a(), c.callbacks.whileScrolling.call(t[0]))
                        },
                        onComplete: function() {
                            if (o.callbacks && o.onComplete) {
                                "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                                var e = h[0].idleTimer || 0;
                                h[0].onCompleteTimeout = setTimeout(function() {
                                    r("onScroll") && (a(), c.callbacks.onScroll.call(t[0])), r("onTotalScroll") && b[1] >= x[1] - S && l.cbOffsets[0] && (a(), c.callbacks.onTotalScroll.call(t[0])), r("onTotalScrollBack") && b[1] <= T && l.cbOffsets[1] && (a(), c.callbacks.onTotalScrollBack.call(t[0])), l.tweenRunning = !1, h[0].idleTimer = 0, C(v, "hide")
                                }, e)
                            }
                        }
                    }))
                }
            },
            V = function(e, t, n, i, o, r, s) {
                function a() {
                    b.stop || (_ || p.call(), _ = Q() - v, l(), _ >= b.time && (b.time = _ > b.time ? _ + f - (_ - b.time) : _ + f - 1, b.time < _ + 1 && (b.time = _ + 1)), b.time < i ? b.id = h(a) : g.call())
                }

                function l() {
                    i > 0 ? (b.currVal = d(b.time, y, w, i, o), x[t] = Math.round(b.currVal) + "px") : x[t] = n + "px", m.call()
                }

                function c() {
                    f = 1e3 / 60, b.time = _ + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                        return l(), setTimeout(e, .01)
                    }, b.id = h(a)
                }

                function u() {
                    null != b.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(b.id) : clearTimeout(b.id), b.id = null)
                }

                function d(e, t, n, i, o) {
                    switch (o) {
                        case "linear":
                        case "mcsLinear":
                            return n * e / i + t;
                        case "mcsLinearOut":
                            return e /= i, e--, n * Math.sqrt(1 - e * e) + t;
                        case "easeInOutSmooth":
                            return e /= i / 2, 1 > e ? n / 2 * e * e + t : (e--, -n / 2 * (e * (e - 2) - 1) + t);
                        case "easeInOutStrong":
                            return e /= i / 2, 1 > e ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, n / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return e /= i / 2, 1 > e ? n / 2 * e * e * e + t : (e -= 2, n / 2 * (e * e * e + 2) + t);
                        case "easeOutSmooth":
                            return e /= i, e--, -n * (e * e * e * e - 1) + t;
                        case "easeOutStrong":
                            return n * (-Math.pow(2, -10 * e / i) + 1) + t;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var r = (e /= i) * e,
                                s = r * e;
                            return t + n * (.499999999999997 * s * r + -2.5 * r * r + 5.5 * s + -6.5 * r + 4 * e)
                    }
                }
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                var f, h, s = s || {},
                    p = s.onStart || function() {},
                    m = s.onUpdate || function() {},
                    g = s.onComplete || function() {},
                    v = Q(),
                    _ = 0,
                    y = e.offsetTop,
                    x = e.style,
                    b = e._mTween[t];
                "left" === t && (y = e.offsetLeft);
                var w = n - y;
                b.stop = 0, "none" !== r && u(), c()
            },
            Q = function() {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            },
            K = function() {
                var e = this;
                e._mTween || (e._mTween = {
                    top: {},
                    left: {}
                });
                for (var t = ["top", "left"], n = 0; n < t.length; n++) {
                    var i = t[n];
                    e._mTween[i].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[i].id) : clearTimeout(e._mTween[i].id), e._mTween[i].id = null, e._mTween[i].stop = 1)
                }
            },
            Z = function(e, t) {
                try {
                    delete e[t]
                } catch (n) {
                    e[t] = null
                }
            },
            G = function(e) {
                return !(e.which && 1 !== e.which)
            },
            J = function(e) {
                var t = e.originalEvent.pointerType;
                return !(t && "touch" !== t && 2 !== t)
            },
            ee = function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            te = function(e) {
                var t = e.parents(".mCSB_container");
                return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
            };
        e.fn[n] = function(t) {
            return d[t] ? d[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : d.init.apply(this, arguments)
        }, e[n] = function(t) {
            return d[t] ? d[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : d.init.apply(this, arguments)
        }, e[n].defaults = r, window[n] = !0, e(window).load(function() {
            e(o)[n](), e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function(t) {
                    var n, i, o = e(t),
                        r = o.parents(".mCSB_container");
                    return r.length ? (n = r.parent(), i = [r[0].offsetTop, r[0].offsetLeft], i[0] + te(o)[0] >= 0 && i[0] + te(o)[0] < n.height() - o.outerHeight(!1) && i[1] + te(o)[1] >= 0 && i[1] + te(o)[1] < n.width() - o.outerWidth(!1)) : void 0
                },
                mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                    var n = e(t).data(i);
                    return n ? n.overflowed[0] || n.overflowed[1] : void 0
                }
            })
        })
    })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(e) {
    var t, n, i, o, r, s, a, l = "Close",
        c = "BeforeClose",
        u = "AfterClose",
        d = "BeforeAppend",
        f = "MarkupParse",
        h = "Open",
        p = "Change",
        m = "mfp",
        g = "." + m,
        v = "mfp-ready",
        _ = "mfp-removing",
        y = "mfp-prevent-close",
        x = function() {},
        b = !!window.jQuery,
        w = e(window),
        C = function(e, n) {
            t.ev.on(m + e + g, n)
        },
        k = function(t, n, i, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
        },
        S = function(n, i) {
            t.ev.triggerHandler(m + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
        },
        T = function(n) {
            return n === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), a = n), t.currTemplate.closeBtn
        },
        E = function() {
            e.magnificPopup.instance || (t = new x, t.init(), e.magnificPopup.instance = t)
        },
        D = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    x.prototype = {
        constructor: x,
        init: function() {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = D(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
        },
        open: function(n) {
            i || (i = e(document.body));
            var r;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var a, l = n.items;
                for (r = 0; r < l.length; r++)
                    if (a = l[r], a.parsed && (a = a.el[0]), a === n.el[0]) {
                        t.index = r;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [], s = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + g, function() {
                t.close()
            }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + g, function(e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
            var c = e.magnificPopup.modules;
            for (r = 0; r < c.length; r++) {
                var u = c[r];
                u = u.charAt(0).toUpperCase() + u.slice(1), t["init" + u].call(t)
            }
            S("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (C(f, function(e, t, n, i) {
                n.close_replaceWith = T(i.type)
            }), s += " mfp-close-btn-in") : t.wrap.append(T())), t.st.alignTop && (s += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: w.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: o.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && o.on("keyup" + g, function(e) {
                27 === e.keyCode && t.close()
            }), w.on("resize" + g, function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && t.wrap.addClass(s);
            var d = t.wH = w.height(),
                p = {};
            if (t.fixedContentPos && t._hasScrollBar(d)) {
                var m = t._getScrollbarSize();
                m && (p.marginRight = m)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : p.overflow = "hidden");
            var _ = t.st.mainClass;
            return t.isIE7 && (_ += " mfp-ie7"), _ && t._addClassToMFP(_), t.updateItemHTML(), S("BuildControls"), e("html").css(p), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + g, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(d), S(h), n
        },
        close: function() {
            t.isOpen && (S(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(_), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            S(l);
            var n = _ + " " + v + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
            }
            o.off("keyup" + g + " focusin" + g), t.ev.off(g), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, S(u)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i
            } else t.wH = e || w.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), S("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (S("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                var o = t.st[i] ? t.st[i].markup : !1;
                S("FirstMarkupParse", o), o ? t.currTemplate[i] = e(o) : t.currTemplate[i] = !0
            }
            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
            var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(s, i), n.preloaded = !0, S(p, n), r = n.type, t.container.prepend(t.contentContainer), S("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(T()) : t.content = e : t.content = "", S(d), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {
                    el: e(o)
                } : (i = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                for (var r = t.types, s = 0; s < r.length; s++)
                    if (o.el.hasClass("mfp-" + r[s])) {
                        i = r[s];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, S("ElementParse", o), t.items[n]
        },
        addGroup: function(e, n) {
            var i = function(i) {
                i.mfpEl = this, t._openClick(i, e, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
        },
        _openClick: function(n, i, o) {
            var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                var s = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (s)
                    if (e.isFunction(s)) {
                        if (!s.call(t)) return !0
                    } else if (w.width() < s) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function(e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var o = {
                    status: e,
                    text: i
                };
                S("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(y)) {
                var i = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (i && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0
                } else if (o && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || w.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function(t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)), S(f, [t, n, i]), e.each(n, function(e, n) {
                if (void 0 === n || n === !1) return !0;
                if (o = e.split("_"), o.length > 1) {
                    var i = t.find(g + "-" + o[0]);
                    if (i.length > 0) {
                        var r = o[1];
                        "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
                    }
                } else t.find(g + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: x.prototype,
        modules: [],
        open: function(t, n) {
            return E(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, e.fn.magnificPopup = function(n) {
        E();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup,
                    s = parseInt(arguments[1], 10) || 0;
                r.items ? o = r.items[s] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), t._openClick({
                    mfpEl: o
                }, i, r)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i
    };
    var I, O, M, B = "inline",
        j = function() {
            M && (O.after(M.addClass(I)).detach(), M = null)
        };
    e.magnificPopup.registerModule(B, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(B), C(l + "." + B, function() {
                    j()
                })
            },
            getInline: function(n, i) {
                if (j(), n.src) {
                    var o = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var s = r[0].parentNode;
                        s && s.tagName && (O || (I = o.hiddenClass, O = k(I), I = "mfp-" + I), M = r.after(O).detach().removeClass(I)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), r = e("<div>");
                    return n.inlineElement = r, r
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
            }
        }
    });
    var A, N = "ajax",
        L = function() {
            A && i.removeClass(A)
        },
        H = function() {
            L(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(N, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(N), A = t.st.ajax.cursor, C(l + "." + N, H), C("BeforeChange." + N, H)
            },
            getAjax: function(n) {
                A && i.addClass(A), t.updateStatus("loading");
                var o = e.extend({
                    url: n.src,
                    success: function(i, o, r) {
                        var s = {
                            data: i,
                            xhr: r
                        };
                        S("ParseAjax", s), t.appendContent(e(s.data), N), n.finished = !0, L(), t._setFocus(), setTimeout(function() {
                            t.wrap.addClass(v)
                        }, 16), t.updateStatus("ready"), S("AjaxContentAdded")
                    },
                    error: function() {
                        L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(o), ""
            }
        }
    });
    var $, P = function(n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i)) return i.call(t, n);
            if (n.el) return n.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = t.st.image,
                    n = ".image";
                t.types.push("image"), C(h + n, function() {
                    "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
                }), C(l + n, function() {
                    e.cursor && i.removeClass(e.cursor), w.off("resize" + g)
                }), C("Resize" + n, t.resizeImage), t.isLowIE && C("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, $ && clearInterval($), e.isCheckingImgSize = !1, S("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0,
                    i = e.img[0],
                    o = function(r) {
                        $ && clearInterval($), $ = setInterval(function() {
                            return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval($), n++, void(3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
                        }, r)
                    };
                o(1)
            },
            getImage: function(n, i) {
                var o = 0,
                    r = function() {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, S("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : s()))
                    },
                    s = function() {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    a = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", r).on("error.mfploader", s), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: P(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? ($ && clearInterval($), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
            }
        }
    });
    var q, R = function() {
        return void 0 === q && (q = void 0 !== document.createElement("p").style.MozTransform), q
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, r, s = n.duration,
                        a = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
                        },
                        u = function() {
                            t.content.css("visibility", "visible")
                        };
                    C("BuildControls" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void u();
                            r = a(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function() {
                                r.css(t._getOffset(!0)), o = setTimeout(function() {
                                    u(), setTimeout(function() {
                                        r.remove(), e = r = null, S("ZoomAnimationEnded")
                                    }, 16)
                                }, s)
                            }, 16)
                        }
                    }), C(c + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = s, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                r = a(e)
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }), C(l + i, function() {
                        t._allowZoom() && (u(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = i.offset(),
                    r = parseInt(i.css("padding-top"), 10),
                    s = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var a = {
                    width: i.width(),
                    height: (b ? i.innerHeight() : i[0].offsetHeight) - s - r
                };
                return R() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
            }
        }
    });
    var F = "iframe",
        z = "//about:blank",
        W = function(e) {
            if (t.currTemplate[F]) {
                var n = t.currTemplate[F].find("iframe");
                n.length && (e || (n[0].src = z), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(F, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(F), C("BeforeChange", function(e, t, n) {
                    t !== n && (t === F ? W() : n === F && W(!0))
                }), C(l + "." + F, function() {
                    W()
                })
            },
            getIframe: function(n, i) {
                var o = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function() {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var s = {};
                return r.srcAction && (s[r.srcAction] = o), t._parseMarkup(i, s, n), t.updateStatus("ready"), i
            }
        }
    });
    var U = function(e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : 0 > e ? n + e : e
        },
        X = function(e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery,
                    i = ".mfp-gallery",
                    r = Boolean(e.fn.mfpFastClick);
                return t.direction = !0, n && n.enabled ? (s += " mfp-gallery", C(h + i, function() {
                    n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), o.on("keydown" + i, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), C("UpdateStatus" + i, function(e, n) {
                    n.text && (n.text = X(n.text, t.currItem.index, t.items.length))
                }), C(f + i, function(e, i, o, r) {
                    var s = t.items.length;
                    o.counter = s > 1 ? X(n.tCounter, r.index, s) : ""
                }), C("BuildControls" + i, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            s = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                            a = r ? "mfpFastClick" : "click";
                        o[a](function() {
                            t.prev()
                        }), s[a](function() {
                            t.next()
                        }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", s[0], !1, !0), k("a", s[0], !1, !0)), t.container.append(o.add(s))
                    }
                }), C(p + i, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), void C(l + i, function() {
                    o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                })) : !1
            },
            next: function() {
                t.direction = !0, t.index = U(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = U(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : i); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? i : o); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = U(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), S("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        i.hasSize = !0
                    }).on("error.mfploader", function() {
                        i.hasSize = !0, i.loadError = !0, S("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var Y = "retina";
    e.magnificPopup.registerModule(Y, {
            options: {
                replaceSrc: function(e) {
                    return e.src.replace(/\.\w+$/, function(e) {
                        return "@2x" + e
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                            n = e.ratio;
                        n = isNaN(n) ? n() : n, n > 1 && (C("ImageHasSize." + Y, function(e, t) {
                            t.img.css({
                                "max-width": t.img[0].naturalWidth / n,
                                width: "100%"
                            })
                        }), C("ElementParse." + Y, function(t, i) {
                            i.src = e.replaceSrc(i, n)
                        }))
                    }
                }
            }
        }),
        function() {
            var t = 1e3,
                n = "ontouchstart" in window,
                i = function() {
                    w.off("touchmove" + r + " touchend" + r)
                },
                o = "mfpFastClick",
                r = "." + o;
            e.fn.mfpFastClick = function(o) {
                return e(this).each(function() {
                    var s, a = e(this);
                    if (n) {
                        var l, c, u, d, f, h;
                        a.on("touchstart" + r, function(e) {
                            d = !1, h = 1, f = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = f.clientX, u = f.clientY, w.on("touchmove" + r, function(e) {
                                f = e.originalEvent ? e.originalEvent.touches : e.touches, h = f.length, f = f[0], (Math.abs(f.clientX - c) > 10 || Math.abs(f.clientY - u) > 10) && (d = !0, i())
                            }).on("touchend" + r, function(e) {
                                i(), d || h > 1 || (s = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                    s = !1
                                }, t), o())
                            })
                        })
                    }
                    a.on("click" + r, function() {
                        s || o()
                    })
                })
            }, e.fn.destroyMfpFastClick = function() {
                e(this).off("touchstart" + r + " click" + r), n && w.off("touchmove" + r + " touchend" + r)
            }
        }(), E()
}), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    var t, n = navigator.userAgent,
        i = /iphone/i.test(n),
        o = /chrome/i.test(n),
        r = /android/i.test(n);
    e.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, e.fn.extend({
        caret: function(e, t) {
            var n;
            return 0 === this.length || this.is(":hidden") ? void 0 : "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
            })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
                begin: e,
                end: t
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(n, s) {
            var a, l, c, u, d, f, h, p;
            if (!n && this.length > 0) {
                a = e(this[0]);
                var m = a.data(e.mask.dataName);
                return m ? m() : void 0
            }
            return s = e.extend({
                autoclear: e.mask.autoclear,
                placeholder: e.mask.placeholder,
                completed: null
            }, s), l = e.mask.definitions, c = [], u = h = n.length, d = null, e.each(n.split(""), function(e, t) {
                "?" == t ? (h--, u = e) : l[t] ? (c.push(new RegExp(l[t])), null === d && (d = c.length - 1), u > e && (f = c.length - 1)) : c.push(null)
            }), this.trigger("unmask").each(function() {
                function a() {
                    if (s.completed) {
                        for (var e = d; f >= e; e++)
                            if (c[e] && D[e] === m(e)) return;
                        s.completed.call(E)
                    }
                }

                function m(e) {
                    return s.placeholder.charAt(e < s.placeholder.length ? e : 0)
                }

                function g(e) {
                    for (; ++e < h && !c[e];);
                    return e
                }

                function v(e) {
                    for (; --e >= 0 && !c[e];);
                    return e
                }

                function _(e, t) {
                    var n, i;
                    if (!(0 > e)) {
                        for (n = e, i = g(t); h > n; n++)
                            if (c[n]) {
                                if (!(h > i && c[n].test(D[i]))) break;
                                D[n] = D[i], D[i] = m(i), i = g(i)
                            }
                        S(), E.caret(Math.max(d, e))
                    }
                }

                function y(e) {
                    var t, n, i, o;
                    for (t = e, n = m(e); h > t; t++)
                        if (c[t]) {
                            if (i = g(t), o = D[t], D[t] = n, !(h > i && c[i].test(o))) break;
                            n = o
                        }
                }

                function x() {
                    var e = E.val(),
                        t = E.caret();
                    if (p && p.length && p.length > e.length) {
                        for (T(!0); t.begin > 0 && !c[t.begin - 1];) t.begin--;
                        if (0 === t.begin)
                            for (; t.begin < d && !c[t.begin];) t.begin++;
                        E.caret(t.begin, t.begin)
                    } else {
                        for (T(!0); t.begin < h && !c[t.begin];) t.begin++;
                        E.caret(t.begin, t.begin)
                    }
                    a()
                }

                function b() {
                    T(), E.val() != O && E.change()
                }

                function w(e) {
                    if (!E.prop("readonly")) {
                        var t, n, o, r = e.which || e.keyCode;
                        p = E.val(), 8 === r || 46 === r || i && 127 === r ? (t = E.caret(), n = t.begin, o = t.end, o - n === 0 && (n = 46 !== r ? v(n) : o = g(n - 1), o = 46 === r ? g(o) : o), k(n, o), _(n, o - 1), e.preventDefault()) : 13 === r ? b.call(this, e) : 27 === r && (E.val(O), E.caret(0, T()), e.preventDefault())
                    }
                }

                function C(t) {
                    if (!E.prop("readonly")) {
                        var n, i, o, s = t.which || t.keyCode,
                            l = E.caret();
                        if (!(t.ctrlKey || t.altKey || t.metaKey || 32 > s) && s && 13 !== s) {
                            if (l.end - l.begin !== 0 && (k(l.begin, l.end), _(l.begin, l.end - 1)), n = g(l.begin - 1), h > n && (i = String.fromCharCode(s), c[n].test(i))) {
                                if (y(n), D[n] = i, S(), o = g(n), r) {
                                    var u = function() {
                                        e.proxy(e.fn.caret, E, o)()
                                    };
                                    setTimeout(u, 0)
                                } else E.caret(o);
                                l.begin <= f && a()
                            }
                            t.preventDefault()
                        }
                    }
                }

                function k(e, t) {
                    var n;
                    for (n = e; t > n && h > n; n++) c[n] && (D[n] = m(n))
                }

                function S() {
                    E.val(D.join(""))
                }

                function T(e) {
                    var t, n, i, o = E.val(),
                        r = -1;
                    for (t = 0, i = 0; h > t; t++)
                        if (c[t]) {
                            for (D[t] = m(t); i++ < o.length;)
                                if (n = o.charAt(i - 1), c[t].test(n)) {
                                    D[t] = n, r = t;
                                    break
                                }
                            if (i > o.length) {
                                k(t + 1, h);
                                break
                            }
                        } else D[t] === o.charAt(i) && i++, u > t && (r = t);
                    return e ? S() : u > r + 1 ? s.autoclear || D.join("") === I ? (E.val() && E.val(""), k(0, h)) : S() : (S(), E.val(E.val().substring(0, r + 1))), u ? t : d
                }
                var E = e(this),
                    D = e.map(n.split(""), function(e, t) {
                        return "?" != e ? l[e] ? m(t) : e : void 0
                    }),
                    I = D.join(""),
                    O = E.val();
                E.data(e.mask.dataName, function() {
                    return e.map(D, function(e, t) {
                        return c[t] && e != m(t) ? e : null
                    }).join("")
                }), E.one("unmask", function() {
                    E.off(".mask").removeData(e.mask.dataName)
                }).on("focus.mask", function() {
                    if (!E.prop("readonly")) {
                        clearTimeout(t);
                        var e;
                        O = E.val(), e = T(), t = setTimeout(function() {
                            E.get(0) === document.activeElement && (S(), e == n.replace("?", "").length ? E.caret(0, e) : E.caret(e))
                        }, 10)
                    }
                }).on("blur.mask", b).on("keydown.mask", w).on("keypress.mask", C).on("input.mask paste.mask", function() {
                    E.prop("readonly") || setTimeout(function() {
                        var e = T(!0);
                        E.caret(e), a()
                    }, 0)
                }), o && r && E.off("input.mask").on("input.mask", x), T()
            })
        }
    })
}),
function(e) {
    function t() {
        this.isField = !0, this.down = !1, this.inFocus = !1, this.disabled = !1, this.cutOff = !1, this.hasLabel = !1, this.keyboardMode = !1, this.nativeTouch = !0, this.wrapperClass = "dropdown", this.onChange = null
    }
    t.prototype = {
        constructor: t,
        instances: {},
        init: function(t, n) {
            var i = this;
            e.extend(i, n), i.$select = e(t), i.id = t.id, i.options = [], i.$options = i.$select.find("option"), i.isTouch = "ontouchend" in document, i.$select.removeClass(i.wrapperClass + " dropdown"), i.$select.is(":disabled") && (i.disabled = !0), i.$options.length && (i.$options.each(function(t) {
                var n = e(this);
                n.is(":selected") && (i.selected = {
                    index: t,
                    title: n.text()
                }, i.focusIndex = t), n.hasClass("label") && 0 == t ? (i.hasLabel = !0, i.label = n.text(), n.attr("value", "")) : i.options.push({
                    domNode: n[0],
                    title: n.text(),
                    value: n.val(),
                    selected: n.is(":selected")
                })
            }), i.selected || (i.selected = {
                index: 0,
                title: i.$options.eq(0).text()
            }, i.focusIndex = 0), i.render())
        },
        render: function() {
            var t = this,
                n = t.isTouch && t.nativeTouch ? " touch" : "",
                i = t.disabled ? " disabled" : "";
            t.$container = t.$select.wrap('<div class="' + t.wrapperClass + n + i + '"><span class="old"/></div>').parent().parent(), t.$active = e('<span class="selected">' + t.selected.title + "</span>").appendTo(t.$container), t.$carat = e('<span class="carat"/>').appendTo(t.$container), t.$scrollWrapper = e("<div><ul/></div>").appendTo(t.$container), t.$dropDown = t.$scrollWrapper.find("ul"), t.$form = t.$container.closest("form"), e.each(t.options, function() {
                var e = this,
                    n = e.selected ? ' class="active"' : "";
                t.$dropDown.append("<li" + n + ">" + e.title + "</li>")
            }), t.$items = t.$dropDown.find("li"), t.cutOff && t.$items.length > t.cutOff && t.$container.addClass("scrollable"), t.getMaxHeight(), t.isTouch && t.nativeTouch ? t.bindTouchHandlers() : t.bindHandlers()
        },
        getMaxHeight: function() {
            var e = this;
            for (e.maxHeight = 0, i = 0; i < e.$items.length; i++) {
                var t = e.$items.eq(i);
                if (e.maxHeight += t.outerHeight(), e.cutOff == i + 1) break
            }
        },
        bindTouchHandlers: function() {
            var t = this;
            t.$container.on("click.easyDropDown", function() {
                t.$select.focus()
            }), t.$select.on({
                change: function() {
                    var n = e(this).find("option:selected"),
                        i = n.text(),
                        o = n.val();
                    t.$active.text(i), "function" == typeof t.onChange && t.onChange.call(t.$select[0], {
                        title: i,
                        value: o
                    })
                },
                focus: function() {
                    t.$container.addClass("focus")
                },
                blur: function() {
                    t.$container.removeClass("focus")
                }
            })
        },
        bindHandlers: function() {
            var t = this;
            t.query = "", t.$container.on({
                "click.easyDropDown": function() {
                    t.down || t.disabled ? t.close() : t.open()
                },
                "mousemove.easyDropDown": function() {
                    t.keyboardMode && (t.keyboardMode = !1)
                }
            }), e("body").on("click.easyDropDown." + t.id, function(n) {
                var i = e(n.target),
                    o = t.wrapperClass.split(" ").join(".");
                !i.closest("." + o).length && t.down && t.close()
            }), t.$items.on({
                "click.easyDropDown": function() {
                    var n = e(this).index();
                    t.select(n), t.$select.focus()
                },
                "mouseover.easyDropDown": function() {
                    if (!t.keyboardMode) {
                        var n = e(this);
                        n.addClass("focus").siblings().removeClass("focus"), t.focusIndex = n.index()
                    }
                },
                "mouseout.easyDropDown": function() {
                    t.keyboardMode || e(this).removeClass("focus")
                }
            }), t.$select.on({
                "focus.easyDropDown": function() {
                    t.$container.addClass("focus"), t.inFocus = !0
                },
                "blur.easyDropDown": function() {
                    t.$container.removeClass("focus"), t.inFocus = !1
                },
                "keydown.easyDropDown": function(e) {
                    if (t.inFocus) {
                        t.keyboardMode = !0;
                        var n = e.keyCode;
                        if ((38 == n || 40 == n || 32 == n) && (e.preventDefault(), 38 == n ? (t.focusIndex--, t.focusIndex = t.focusIndex < 0 ? t.$items.length - 1 : t.focusIndex) : 40 == n && (t.focusIndex++, t.focusIndex = t.focusIndex > t.$items.length - 1 ? 0 : t.focusIndex), t.down || t.open(), t.$items.removeClass("focus").eq(t.focusIndex).addClass("focus"), t.cutOff && t.scrollToView(), t.query = ""), t.down)
                            if (9 == n || 27 == n) t.close();
                            else {
                                if (13 == n) return e.preventDefault(), t.select(t.focusIndex), t.close(), !1;
                                if (8 == n) return e.preventDefault(), t.query = t.query.slice(0, -1), t.search(), clearTimeout(t.resetQuery), !1;
                                if (38 != n && 40 != n) {
                                    var i = String.fromCharCode(n);
                                    t.query += i, t.search(), clearTimeout(t.resetQuery)
                                }
                            }
                    }
                },
                "keyup.easyDropDown": function() {
                    t.resetQuery = setTimeout(function() {
                        t.query = ""
                    }, 1200)
                }
            }), t.$dropDown.on("scroll.easyDropDown", function(e) {
                t.$dropDown[0].scrollTop >= t.$dropDown[0].scrollHeight - t.maxHeight ? t.$container.addClass("bottom") : t.$container.removeClass("bottom")
            }), t.$form.length && t.$form.on("reset.easyDropDown", function() {
                var e = t.hasLabel ? t.label : t.options[0].title;
                t.$active.text(e)
            })
        },
        unbindHandlers: function() {
            var t = this;
            t.$container.add(t.$select).add(t.$items).add(t.$form).add(t.$dropDown).off(".easyDropDown"), e("body").off("." + t.id)
        },
        open: function() {
            var e = this,
                t = window.scrollY || document.documentElement.scrollTop,
                n = window.scrollX || document.documentElement.scrollLeft,
                i = e.notInViewport(t);
            e.closeAll(), e.getMaxHeight(), e.$select.focus(), window.scrollTo(n, t + i), e.$container.addClass("open"), e.$scrollWrapper.css("height", e.maxHeight + "px"), e.down = !0
        },
        close: function() {
            var e = this;
            e.$container.removeClass("open"), e.$scrollWrapper.css("height", "0px"), e.focusIndex = e.selected.index, e.query = "", e.down = !1
        },
        closeAll: function() {
            var e = this,
                t = Object.getPrototypeOf(e).instances;
            for (var n in t) {
                var i = t[n];
                i.close()
            }
        },
        select: function(e) {
            var t = this;
            "string" == typeof e && (e = t.$select.find("option[value=" + e + "]").index() - 1);
            var n = t.options[e],
                o = t.hasLabel ? e + 1 : e;
            t.$items.removeClass("active").eq(e).addClass("active"), t.$active.text(n.title), t.$select.find("option").removeAttr("selected").eq(o).prop("selected", !0).parent().trigger("change"), t.selected = {
                index: e,
                title: n.title
            }, t.focusIndex = i, "function" == typeof t.onChange && t.onChange.call(t.$select[0], {
                title: n.title,
                value: n.value
            })
        },
        search: function() {
            var e = this,
                t = function(t) {
                    e.focusIndex = t, e.$items.removeClass("focus").eq(e.focusIndex).addClass("focus"), e.scrollToView()
                },
                n = function(t) {
                    return e.options[t].title.toUpperCase()
                };
            for (i = 0; i < e.options.length; i++) {
                var o = n(i);
                if (0 == o.indexOf(e.query)) return void t(i)
            }
            for (i = 0; i < e.options.length; i++) {
                var o = n(i);
                if (o.indexOf(e.query) > -1) {
                    t(i);
                    break
                }
            }
        },
        scrollToView: function() {
            var e = this;
            if (e.focusIndex >= e.cutOff) {
                var t = e.$items.eq(e.focusIndex),
                    n = t.outerHeight() * (e.focusIndex + 1) - e.maxHeight;
                e.$dropDown.scrollTop(n)
            }
        },
        notInViewport: function(e) {
            var t = this,
                n = {
                    min: e,
                    max: e + (window.innerHeight || document.documentElement.clientHeight)
                },
                i = t.$dropDown.offset().top + t.maxHeight;
            return i >= n.min && i <= n.max ? 0 : i - n.max + 5
        },
        destroy: function() {
            var e = this;
            e.unbindHandlers(), e.$select.unwrap().siblings().remove(), e.$select.unwrap(), delete Object.getPrototypeOf(e).instances[e.$select[0].id]
        },
        disable: function() {
            var e = this;
            e.disabled = !0, e.$container.addClass("disabled"), e.$select.attr("disabled", !0), e.down || e.close()
        },
        enable: function() {
            var e = this;
            e.disabled = !1, e.$container.removeClass("disabled"), e.$select.attr("disabled", !1)
        }
    };
    var n = function(e, n) {
            e.id = e.id ? e.id : "EasyDropDown" + o();
            var i = new t;
            i.instances[e.id] || (i.instances[e.id] = i, i.init(e, n))
        },
        o = function() {
            return ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase()
        };
    e.fn.easyDropDown = function() {
        var e, i = arguments,
            o = [];
        return e = this.each(function() {
            if (i && "string" == typeof i[0]) {
                var e = t.prototype.instances[this.id][i[0]](i[1], i[2]);
                e && o.push(e)
            } else n(this, i[0])
        }), o.length ? o.length > 1 ? o : o[0] : e
    }, e(function() {
        "function" != typeof Object.getPrototypeOf && ("object" == typeof "test".__proto__ ? Object.getPrototypeOf = function(e) {
            return e.__proto__
        } : Object.getPrototypeOf = function(e) {
            return e.constructor.prototype
        }), e("select.dropdown").each(function() {
            var t = e(this).attr("data-settings");
            settings = t ? e.parseJSON(t) : {}, n(this, settings)
        })
    })
}(jQuery),
function() {
    var e, t, n, i, o, r = {}.hasOwnProperty,
        s = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) r.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        };
    i = function() {
        function e() {
            this.options_index = 0, this.parsed = []
        }
        return e.prototype.add_node = function(e) {
            return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) : this.add_option(e)
        }, e.prototype.add_group = function(e) {
            var t, n, i, o, r, s;
            for (t = this.parsed.length, this.parsed.push({
                    array_index: t,
                    group: !0,
                    label: this.escapeExpression(e.label),
                    title: e.title ? e.title : void 0,
                    children: 0,
                    disabled: e.disabled,
                    classes: e.className
                }), r = e.childNodes, s = [], i = 0, o = r.length; o > i; i++) n = r[i], s.push(this.add_option(n, t, e.disabled));
            return s
        }, e.prototype.add_option = function(e, t, n) {
            return "OPTION" === e.nodeName.toUpperCase() ? ("" !== e.text ? (null != t && (this.parsed[t].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: e.value,
                text: e.text,
                html: e.innerHTML,
                title: e.title ? e.title : void 0,
                selected: e.selected,
                disabled: n === !0 ? n : e.disabled,
                group_array_index: t,
                group_label: null != t ? this.parsed[t].label : null,
                classes: e.className,
                style: e.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1) : void 0
        }, e.prototype.escapeExpression = function(e) {
            var t, n;
            return null == e || e === !1 ? "" : /[\&\<\>\"\'\`]/.test(e) ? (t = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, n = /&(?!\w+;)|[\<\>\"\'\`]/g, e.replace(n, function(e) {
                return t[e] || "&amp;"
            })) : e
        }, e
    }(), i.select_to_array = function(e) {
        var t, n, o, r, s;
        for (n = new i, s = e.childNodes, o = 0, r = s.length; r > o; o++) t = s[o], n.add_node(t);
        return n.parsed
    }, t = function() {
        function e(t, n) {
            this.form_field = t, this.options = null != n ? n : {}, e.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
        }
        return e.prototype.set_default_values = function() {
            var e = this;
            return this.click_test_action = function(t) {
                    return e.test_active_click(t)
                }, this.activate_action = function(t) {
                    return e.activate_field(t)
                }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0,
                this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1
        }, e.prototype.set_default_text = function() {
            return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || e.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || e.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || e.default_no_result_text
        }, e.prototype.choice_label = function(e) {
            return this.include_group_label_in_selected && null != e.group_label ? "<b class='group-name'>" + e.group_label + "</b>" + e.html : e.html
        }, e.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }, e.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }, e.prototype.input_focus = function() {
            var e = this;
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function() {
                    return e.container_mousedown()
                }, 50)
            } else if (!this.active_field) return this.activate_field()
        }, e.prototype.input_blur = function() {
            var e = this;
            return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function() {
                return e.blur_test()
            }, 100))
        }, e.prototype.results_option_build = function(e) {
            var t, n, i, o, r;
            for (t = "", r = this.results_data, i = 0, o = r.length; o > i; i++) n = r[i], t += n.group ? this.result_add_group(n) : this.result_add_option(n), (null != e ? e.first : void 0) && (n.selected && this.is_multiple ? this.choice_build(n) : n.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(n)));
            return t
        }, e.prototype.result_add_option = function(e) {
            var t, n;
            return e.search_match && this.include_option_in_results(e) ? (t = [], e.disabled || e.selected && this.is_multiple || t.push("active-result"), !e.disabled || e.selected && this.is_multiple || t.push("disabled-result"), e.selected && t.push("result-selected"), null != e.group_array_index && t.push("group-option"), "" !== e.classes && t.push(e.classes), n = document.createElement("li"), n.className = t.join(" "), n.style.cssText = e.style, n.setAttribute("data-option-array-index", e.array_index), n.innerHTML = e.search_text, e.title && (n.title = e.title), this.outerHTML(n)) : ""
        }, e.prototype.result_add_group = function(e) {
            var t, n;
            return (e.search_match || e.group_match) && e.active_options > 0 ? (t = [], t.push("group-result"), e.classes && t.push(e.classes), n = document.createElement("li"), n.className = t.join(" "), n.innerHTML = e.search_text, e.title && (n.title = e.title), this.outerHTML(n)) : ""
        }, e.prototype.results_update_field = function() {
            return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
        }, e.prototype.reset_single_select_options = function() {
            var e, t, n, i, o;
            for (i = this.results_data, o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e.selected ? e.selected = !1 : void 0);
            return o
        }, e.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, e.prototype.results_search = function() {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, e.prototype.winnow_results = function() {
            var e, t, n, i, o, r, s, a, l, c, u, d;
            for (this.no_results_clear(), i = 0, r = this.get_search_text(), e = r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), l = new RegExp(e, "i"), n = this.get_search_regex(e), d = this.results_data, c = 0, u = d.length; u > c; c++) t = d[c], t.search_match = !1, o = null, this.include_option_in_results(t) && (t.group && (t.group_match = !1, t.active_options = 0), null != t.group_array_index && this.results_data[t.group_array_index] && (o = this.results_data[t.group_array_index], 0 === o.active_options && o.search_match && (i += 1), o.active_options += 1), t.search_text = t.group ? t.label : t.html, (!t.group || this.group_search) && (t.search_match = this.search_string_match(t.search_text, n), t.search_match && !t.group && (i += 1), t.search_match ? (r.length && (s = t.search_text.search(l), a = t.search_text.substr(0, s + r.length) + "</em>" + t.search_text.substr(s + r.length), t.search_text = a.substr(0, s) + "<em>" + a.substr(s)), null != o && (o.group_match = !0)) : null != t.group_array_index && this.results_data[t.group_array_index].search_match && (t.search_match = !0)));
            return this.result_clear_highlight(), 1 > i && r.length ? (this.update_results_content(""), this.no_results(r)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, e.prototype.get_search_regex = function(e) {
            var t;
            return t = this.search_contains ? "" : "^", new RegExp(t + e, "i")
        }, e.prototype.search_string_match = function(e, t) {
            var n, i, o, r;
            if (t.test(e)) return !0;
            if (this.enable_split_word_search && (e.indexOf(" ") >= 0 || 0 === e.indexOf("[")) && (i = e.replace(/\[|\]/g, "").split(" "), i.length))
                for (o = 0, r = i.length; r > o; o++)
                    if (n = i[o], t.test(n)) return !0
        }, e.prototype.choices_count = function() {
            var e, t, n, i;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (this.selected_option_count = 0, i = this.form_field.options, t = 0, n = i.length; n > t; t++) e = i[t], e.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, e.prototype.choices_click = function(e) {
            return e.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
        }, e.prototype.keyup_checker = function(e) {
            var t, n;
            switch (t = null != (n = e.which) ? n : e.keyCode, this.search_field_scale(), t) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                    if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (e.preventDefault(), this.results_showing) return this.result_select(e);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
            }
        }, e.prototype.clipboard_event_checker = function() {
            var e = this;
            return setTimeout(function() {
                return e.results_search()
            }, 50)
        }, e.prototype.container_width = function() {
            return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
        }, e.prototype.include_option_in_results = function(e) {
            return this.is_multiple && !this.display_selected_options && e.selected ? !1 : !this.display_disabled_options && e.disabled ? !1 : e.empty ? !1 : !0
        }, e.prototype.search_results_touchstart = function(e) {
            return this.touch_started = !0, this.search_results_mouseover(e)
        }, e.prototype.search_results_touchmove = function(e) {
            return this.touch_started = !1, this.search_results_mouseout(e)
        }, e.prototype.search_results_touchend = function(e) {
            return this.touch_started ? this.search_results_mouseup(e) : void 0
        }, e.prototype.outerHTML = function(e) {
            var t;
            return e.outerHTML ? e.outerHTML : (t = document.createElement("div"), t.appendChild(e), t.innerHTML)
        }, e.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
        }, e.default_multiple_text = "Select Some Options", e.default_single_text = "Select an Option", e.default_no_result_text = "No results match", e
    }(), e = jQuery, e.fn.extend({
        chosen: function(i) {
            return t.browser_is_supported() ? this.each(function() {
                var t, o;
                t = e(this), o = t.data("chosen"), "destroy" === i && o instanceof n ? o.destroy() : o instanceof n || t.data("chosen", new n(this, i))
            }) : this
        }
    }), n = function(t) {
        function n() {
            return o = n.__super__.constructor.apply(this, arguments)
        }
        return s(n, t), n.prototype.setup = function() {
            return this.form_field_jq = e(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, n.prototype.set_up_html = function() {
            var t, n;
            return t = ["chosen-container"], t.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className), this.is_rtl && t.push("chosen-rtl"), n = {
                "class": t.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }, this.form_field.id.length && (n.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = e("<div />", n), this.container.html(this.is_multiple ? '<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>' : '<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
        }, n.prototype.on_ready = function() {
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }, n.prototype.register_observers = function() {
            var e = this;
            return this.container.bind("touchstart.chosen", function(t) {
                return e.container_mousedown(t), t.preventDefault()
            }), this.container.bind("touchend.chosen", function(t) {
                return e.container_mouseup(t), t.preventDefault()
            }), this.container.bind("mousedown.chosen", function(t) {
                e.container_mousedown(t)
            }), this.container.bind("mouseup.chosen", function(t) {
                e.container_mouseup(t)
            }), this.container.bind("mouseenter.chosen", function(t) {
                e.mouse_enter(t)
            }), this.container.bind("mouseleave.chosen", function(t) {
                e.mouse_leave(t)
            }), this.search_results.bind("mouseup.chosen", function(t) {
                e.search_results_mouseup(t)
            }), this.search_results.bind("mouseover.chosen", function(t) {
                e.search_results_mouseover(t)
            }), this.search_results.bind("mouseout.chosen", function(t) {
                e.search_results_mouseout(t)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(t) {
                e.search_results_mousewheel(t)
            }), this.search_results.bind("touchstart.chosen", function(t) {
                e.search_results_touchstart(t)
            }), this.search_results.bind("touchmove.chosen", function(t) {
                e.search_results_touchmove(t)
            }), this.search_results.bind("touchend.chosen", function(t) {
                e.search_results_touchend(t)
            }), this.form_field_jq.bind("chosen:updated.chosen", function(t) {
                e.results_update_field(t)
            }), this.form_field_jq.bind("chosen:activate.chosen", function(t) {
                e.activate_field(t)
            }), this.form_field_jq.bind("chosen:open.chosen", function(t) {
                e.container_mousedown(t)
            }), this.form_field_jq.bind("chosen:close.chosen", function(t) {
                e.input_blur(t)
            }), this.search_field.bind("blur.chosen", function(t) {
                e.input_blur(t)
            }), this.search_field.bind("keyup.chosen", function(t) {
                e.keyup_checker(t)
            }), this.search_field.bind("keydown.chosen", function(t) {
                e.keydown_checker(t)
            }), this.search_field.bind("focus.chosen", function(t) {
                e.input_focus(t)
            }), this.search_field.bind("cut.chosen", function(t) {
                e.clipboard_event_checker(t)
            }), this.search_field.bind("paste.chosen", function(t) {
                e.clipboard_event_checker(t)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function(t) {
                e.choices_click(t)
            }) : this.container.bind("click.chosen", function(e) {
                e.preventDefault()
            })
        }, n.prototype.destroy = function() {
            return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, n.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, n.prototype.container_mousedown = function(t) {
            return this.is_disabled || (t && "mousedown" === t.type && !this.results_showing && t.preventDefault(), null != t && e(t.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !t || e(t.target)[0] !== this.selected_item[0] && !e(t.target).parents("a.chosen-single").length || (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, n.prototype.container_mouseup = function(e) {
            return "ABBR" !== e.target.nodeName || this.is_disabled ? void 0 : this.results_reset(e)
        }, n.prototype.search_results_mousewheel = function(e) {
            var t;
            return e.originalEvent && (t = e.originalEvent.deltaY || -e.originalEvent.wheelDelta || e.originalEvent.detail), null != t ? (e.preventDefault(), "DOMMouseScroll" === e.type && (t = 40 * t), this.search_results.scrollTop(t + this.search_results.scrollTop())) : void 0
        }, n.prototype.blur_test = function() {
            return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
        }, n.prototype.close_field = function() {
            return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, n.prototype.activate_field = function() {
            return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, n.prototype.test_active_click = function(t) {
            var n;
            return n = e(t.target).closest(".chosen-container"), n.length && this.container[0] === n[0] ? this.active_field = !0 : this.close_field()
        }, n.prototype.results_build = function() {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = i.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                first: !0
            })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, n.prototype.result_do_highlight = function(e) {
            var t, n, i, o, r;
            if (e.length) {
                if (this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), i = parseInt(this.search_results.css("maxHeight"), 10), r = this.search_results.scrollTop(), o = i + r, n = this.result_highlight.position().top + this.search_results.scrollTop(), t = n + this.result_highlight.outerHeight(), t >= o) return this.search_results.scrollTop(t - i > 0 ? t - i : 0);
                if (r > n) return this.search_results.scrollTop(n)
            }
        }, n.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, n.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }))
        }, n.prototype.update_results_content = function(e) {
            return this.search_results.html(e)
        }, n.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })), this.results_showing = !1
        }, n.prototype.set_tab_index = function() {
            var e;
            return this.form_field.tabIndex ? (e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e) : void 0
        }, n.prototype.set_label_behavior = function() {
            var t = this;
            return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = e("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function(e) {
                return t.is_multiple ? t.container_mousedown(e) : t.activate_field()
            }) : void 0
        }, n.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, n.prototype.search_results_mouseup = function(t) {
            var n;
            return n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first(), n.length ? (this.result_highlight = n, this.result_select(t), this.search_field.focus()) : void 0
        }, n.prototype.search_results_mouseover = function(t) {
            var n;
            return n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first(), n ? this.result_do_highlight(n) : void 0
        }, n.prototype.search_results_mouseout = function(t) {
            return e(t.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
        }, n.prototype.choice_build = function(t) {
            var n, i, o = this;
            return n = e("<li />", {
                "class": "search-choice"
            }).html("<span>" + this.choice_label(t) + "</span>"), t.disabled ? n.addClass("search-choice-disabled") : (i = e("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": t.array_index
            }), i.bind("click.chosen", function(e) {
                return o.choice_destroy_link_click(e)
            }), n.append(i)), this.search_container.before(n)
        }, n.prototype.choice_destroy_link_click = function(t) {
            return t.preventDefault(), t.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(e(t.target))
        }, n.prototype.choice_destroy = function(e) {
            return this.result_deselect(e[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), e.parents("li").first().remove(), this.search_field_scale()) : void 0
        }, n.prototype.results_reset = function() {
            return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
        }, n.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, n.prototype.result_select = function(e) {
            var t, n;
            return this.result_highlight ? (t = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? t.removeClass("active-result") : this.reset_single_select_options(), t.addClass("result-selected"), n = this.results_data[t[0].getAttribute("data-option-array-index")], n.selected = !0, this.form_field.options[n.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(n) : this.single_set_selected_text(this.choice_label(n)), (e.metaKey || e.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                selected: this.form_field.options[n.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex, e.preventDefault(), this.search_field_scale())) : void 0
        }, n.prototype.single_set_selected_text = function(e) {
            return null == e && (e = this.default_text), e === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(e)
        }, n.prototype.result_deselect = function(e) {
            var t;
            return t = this.results_data[e], this.form_field.options[t.options_index].disabled ? !1 : (t.selected = !1, this.form_field.options[t.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[t.options_index].value
            }), this.search_field_scale(), !0)
        }, n.prototype.single_deselect_control_build = function() {
            return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
        }, n.prototype.get_search_text = function() {
            return e("<div/>").text(e.trim(this.search_field.val())).html()
        }, n.prototype.winnow_results_set_highlight = function() {
            var e, t;
            return t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), e = t.length ? t.first() : this.search_results.find(".active-result").first(), null != e ? this.result_do_highlight(e) : void 0
        }, n.prototype.no_results = function(t) {
            var n;
            return n = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), n.find("span").first().html(t), this.search_results.append(n), this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        }, n.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }, n.prototype.keydown_arrow = function() {
            var e;
            return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(e) : void 0 : this.results_show()
        }, n.prototype.keyup_arrow = function() {
            var e;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight.prevAll("li.active-result"), e.length ? this.result_do_highlight(e.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        }, n.prototype.keydown_backstroke = function() {
            var e;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (e = this.search_container.siblings("li.search-choice").last(), e.length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        }, n.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, n.prototype.keydown_checker = function(e) {
            var t, n;
            switch (t = null != (n = e.which) ? n : e.keyCode, this.search_field_scale(), 8 !== t && this.pending_backstroke && this.clear_backstroke(), t) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
                    break;
                case 13:
                    this.results_showing && e.preventDefault();
                    break;
                case 32:
                    this.disable_search && e.preventDefault();
                    break;
                case 38:
                    e.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    e.preventDefault(), this.keydown_arrow()
            }
        }, n.prototype.search_field_scale = function() {
            var t, n, i, o, r, s, a, l, c;
            if (this.is_multiple) {
                for (i = 0, a = 0, r = "position:absolute; left: -1000px; top: -1000px; display:none;", s = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], l = 0, c = s.length; c > l; l++) o = s[l], r += o + ":" + this.search_field.css(o) + ";";
                return t = e("<div />", {
                    style: r
                }), t.text(this.search_field.val()), e("body").append(t), a = t.width() + 25, t.remove(), n = this.container.outerWidth(), a > n - 10 && (a = n - 10), this.search_field.css({
                    width: a + "px"
                })
            }
        }, n
    }(t)
}.call(this), $(document).ready(function() {
   /* $(".openmenu").click(function() {
        $(this).hasClass("active") && ($(this).removeClass("active"), $(".secondmenu").removeClass("active")) Борис заблокировал 23/10
    }),*/ $(".menuoverlay").click(function() {
        $(".header_menu .user").hasClass("open") ? $(".header_menu .user").removeClass("open") : $(".header_menu .user").addClass("open")
    }), $("#showfilter").click(function() {
        $(".filter_wrap_all").hasClass("open") ? ($(".filter_wrap_all").removeClass("open"), $("#showfilter").text("Развернуть фильтры")) : ($(".filter_wrap_all").addClass("open"), $("#showfilter").text("Свернуть фильтры"))		
    }), $(document).on("click", ".lines-button", function() {
        $(this).parent().hasClass("open") ? $(this).parent().removeClass("open") : ($(this).parent().removeClass("open"), $(this).parent().addClass("open"))
    }),
	 $(document).on("click", ".mmenu_open", function() {
        $(".mobile").removeClass("closemenu")
    }), $(document).on("click", ".mmenu.close", function() {
        $(".mobile").addClass("closemenu")
    }), $(".buttontop .opacity").click(function(e) {
        e.preventDefault(), $("html,body").animate({
            scrollTop: $("body").offset().top
        }, 600)
    }), $(".menu").length > 0 && $(window).scroll(function() {
        var e = $(".menu"),
            t = $(".secondmenu");
        $(window).scrollTop() >= 106 ? (e.addClass("fixed"), t.addClass("fixed")) : (e.removeClass("fixed"), t.removeClass("fixed"))
    }), mainsize(), $(window).resize(function() {
        setTimeout(function() {
            mainsize()
        }, 400)
    }), $(".chosen-select").chosen({
        width: "100%"
    }), $(".hasdropmenu").click(function(e) {
        e.preventDefault(), $("#secondmenurow").empty(), $(this).parent().find(".dropmenu").clone().removeClass("dropmenu").appendTo("#secondmenurow"), $(".secondmenu").addClass("active"), $(".openmenu").addClass("active")
    }), $(".popup-with-form").magnificPopup({
        type: "inline",
        preloader: !1,
        focus: "#name",
        callbacks: {
            beforeOpen: function() {
                $(window).width() < 700 ? this.st.focus = !1 : this.st.focus = "#name"
            }
        }
    })
}), $(window).load(function() {
    $.mCustomScrollbar.defaults.scrollButtons.enable = !0, $.mCustomScrollbar.defaults.axis = "y", $(".scroll-wrapper").mCustomScrollbar({
        theme: "minimal-dark",
        autoHideScrollbar: !0
    })
	
	
	 

	
	
	
	
	
});
function two(a) {
    return (9 < a ? "" : "0") + a
}
$.widget("ui.timespinner", $.ui.spinner, {
    options: {
        step: 60 * 1000,
        page: 60
    },
    _parse: function(a) {
        if ("string" === typeof a) {
            if (Number(a) == a) return Number(a);
            a = a.match(/\d+/g);
            (!a || 2 > a.length) && (a = [0, 0]);
            a[0] *= 36E5;
            a[1] *= 6E4;
            return a[0] + a[1]
        }
        return a
    },
    _format: function(a) {
        a /= 6E4;
        var hours = a / 60 | 0;
        a %= 60;
        return two(hours) + ":" + two(a)
    }
});


$(function() {
    $(".spinner").timespinner({
        min: 28800000,
        max: 864E5
    });
    $(".spinner").timespinner("value", 28800000)
});	
	
	
$('.raiting').rating({
		fx: 'full',
        image: 'img/stars.png',
        loader: 'img/ajax-loader.gif',
        width: 28,
		titles:['','',''],
		
	});	
	
	
	
	
