﻿/*
Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function () {
    if (!window.CKEDITOR || !window.CKEDITOR.dom) {
        window.CKEDITOR || (window.CKEDITOR = function () {
            var a = /(^|.*[\\\/])ckeditor\.js(?:\?.*|;.*)?$/i, f = {
                timestamp: "K5H9", version: "4.14.1 (Standard)", revision: "eb2d11644", rnd: Math.floor(900 * Math.random()) + 100, _: { pending: [], basePathSrcPattern: a }, status: "unloaded", basePath: function () {
                    var b = window.CKEDITOR_BASEPATH || ""; if (!b) for (var e = document.getElementsByTagName("script"), f = 0; f < e.length; f++) { var l = e[f].src.match(a); if (l) { b = l[1]; break } } -1 == b.indexOf(":/") &&
                    "//" != b.slice(0, 2) && (b = 0 === b.indexOf("/") ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + b : location.href.match(/^[^\?]*\/(?:)/)[0] + b); if (!b) throw 'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.'; return b
                }(), getUrl: function (a) {
                    -1 == a.indexOf(":/") && 0 !== a.indexOf("/") && (a = this.basePath + a); this.timestamp && "/" != a.charAt(a.length - 1) && !/[&?]t=/.test(a) && (a += (0 <= a.indexOf("?") ? "\x26" : "?") + "t\x3d" + this.timestamp);
                    return a
                }, domReady: function () {
                    function a() { try { document.addEventListener ? (document.removeEventListener("DOMContentLoaded", a, !1), b()) : document.attachEvent && "complete" === document.readyState && (document.detachEvent("onreadystatechange", a), b()) } catch (e) { } } function b() { for (var a; a = e.shift() ;) a() } var e = []; return function (b) {
                        function d() { try { document.documentElement.doScroll("left") } catch (g) { setTimeout(d, 1); return } a() } e.push(b); "complete" === document.readyState && setTimeout(a, 1); if (1 == e.length) if (document.addEventListener) document.addEventListener("DOMContentLoaded",
                        a, !1), window.addEventListener("load", a, !1); else if (document.attachEvent) { document.attachEvent("onreadystatechange", a); window.attachEvent("onload", a); b = !1; try { b = !window.frameElement } catch (k) { } document.documentElement.doScroll && b && d() }
                    }
                }()
            }, e = window.CKEDITOR_GETURL; if (e) { var b = f.getUrl; f.getUrl = function (a) { return e.call(f, a) || b.call(f, a) } } return f
        }()); CKEDITOR.event || (CKEDITOR.event = function () { }, CKEDITOR.event.implementOn = function (a) { var f = CKEDITOR.event.prototype, e; for (e in f) null == a[e] && (a[e] = f[e]) },
        CKEDITOR.event.prototype = function () {
            function a(a) { var c = f(this); return c[a] || (c[a] = new e(a)) } var f = function (a) { a = a.getPrivate && a.getPrivate() || a._ || (a._ = {}); return a.events || (a.events = {}) }, e = function (a) { this.name = a; this.listeners = [] }; e.prototype = { getListenerIndex: function (a) { for (var c = 0, e = this.listeners; c < e.length; c++) if (e[c].fn == a) return c; return -1 } }; return {
                define: function (b, c) { var e = a.call(this, b); CKEDITOR.tools.extend(e, c, !0) }, on: function (b, c, e, f, l) {
                    function d(a, n, g, d) {
                        a = {
                            name: b, sender: this, editor: a,
                            data: n, listenerData: f, stop: g, cancel: d, removeListener: k
                        }; return !1 === c.call(e, a) ? !1 : a.data
                    } function k() { n.removeListener(b, c) } var g = a.call(this, b); if (0 > g.getListenerIndex(c)) { g = g.listeners; e || (e = this); isNaN(l) && (l = 10); var n = this; d.fn = c; d.priority = l; for (var r = g.length - 1; 0 <= r; r--) if (g[r].priority <= l) return g.splice(r + 1, 0, d), { removeListener: k }; g.unshift(d) } return { removeListener: k }
                }, once: function () {
                    var a = Array.prototype.slice.call(arguments), c = a[1]; a[1] = function (a) {
                        a.removeListener(); return c.apply(this,
                        arguments)
                    }; return this.on.apply(this, a)
                }, capture: function () { CKEDITOR.event.useCapture = 1; var a = this.on.apply(this, arguments); CKEDITOR.event.useCapture = 0; return a }, fire: function () {
                    var a = 0, c = function () { a = 1 }, e = 0, h = function () { e = 1 }; return function (l, d, k) {
                        var g = f(this)[l]; l = a; var n = e; a = e = 0; if (g) { var r = g.listeners; if (r.length) for (var r = r.slice(0), w, q = 0; q < r.length; q++) { if (g.errorProof) try { w = r[q].call(this, k, d, c, h) } catch (p) { } else w = r[q].call(this, k, d, c, h); !1 === w ? e = 1 : "undefined" != typeof w && (d = w); if (a || e) break } } d =
                        e ? !1 : "undefined" == typeof d ? !0 : d; a = l; e = n; return d
                    }
                }(), fireOnce: function (a, c, e) { c = this.fire(a, c, e); delete f(this)[a]; return c }, removeListener: function (a, c) { var e = f(this)[a]; if (e) { var h = e.getListenerIndex(c); 0 <= h && e.listeners.splice(h, 1) } }, removeAllListeners: function () { var a = f(this), c; for (c in a) delete a[c] }, hasListeners: function (a) { return (a = f(this)[a]) && 0 < a.listeners.length }
            }
        }()); CKEDITOR.editor || (CKEDITOR.editor = function () { CKEDITOR._.pending.push([this, arguments]); CKEDITOR.event.call(this) }, CKEDITOR.editor.prototype.fire =
        function (a, f) { a in { instanceReady: 1, loaded: 1 } && (this[a] = !0); return CKEDITOR.event.prototype.fire.call(this, a, f, this) }, CKEDITOR.editor.prototype.fireOnce = function (a, f) { a in { instanceReady: 1, loaded: 1 } && (this[a] = !0); return CKEDITOR.event.prototype.fireOnce.call(this, a, f, this) }, CKEDITOR.event.implementOn(CKEDITOR.editor.prototype)); CKEDITOR.env || (CKEDITOR.env = function () {
            var a = navigator.userAgent.toLowerCase(), f = a.match(/edge[ \/](\d+.?\d*)/), e = -1 < a.indexOf("trident/"), e = !(!f && !e), e = {
                ie: e, edge: !!f, webkit: !e &&
                -1 < a.indexOf(" applewebkit/"), air: -1 < a.indexOf(" adobeair/"), mac: -1 < a.indexOf("macintosh"), quirks: "BackCompat" == document.compatMode && (!document.documentMode || 10 > document.documentMode), mobile: -1 < a.indexOf("mobile"), iOS: /(ipad|iphone|ipod)/.test(a), isCustomDomain: function () { if (!this.ie) return !1; var a = document.domain, b = window.location.hostname; return a != b && a != "[" + b + "]" }, secure: "https:" == location.protocol
            }; e.gecko = "Gecko" == navigator.product && !e.webkit && !e.ie; e.webkit && (-1 < a.indexOf("chrome") ? e.chrome =
            !0 : e.safari = !0); var b = 0; e.ie && (b = f ? parseFloat(f[1]) : e.quirks || !document.documentMode ? parseFloat(a.match(/msie (\d+)/)[1]) : document.documentMode, e.ie9Compat = 9 == b, e.ie8Compat = 8 == b, e.ie7Compat = 7 == b, e.ie6Compat = 7 > b || e.quirks); e.gecko && (f = a.match(/rv:([\d\.]+)/)) && (f = f[1].split("."), b = 1E4 * f[0] + 100 * (f[1] || 0) + 1 * (f[2] || 0)); e.air && (b = parseFloat(a.match(/ adobeair\/(\d+)/)[1])); e.webkit && (b = parseFloat(a.match(/ applewebkit\/(\d+)/)[1])); e.version = b; e.isCompatible = !(e.ie && 7 > b) && !(e.gecko && 4E4 > b) && !(e.webkit &&
            534 > b); e.hidpi = 2 <= window.devicePixelRatio; e.needsBrFiller = e.gecko || e.webkit || e.ie && 10 < b; e.needsNbspFiller = e.ie && 11 > b; e.cssClass = "cke_browser_" + (e.ie ? "ie" : e.gecko ? "gecko" : e.webkit ? "webkit" : "unknown"); e.quirks && (e.cssClass += " cke_browser_quirks"); e.ie && (e.cssClass += " cke_browser_ie" + (e.quirks ? "6 cke_browser_iequirks" : e.version)); e.air && (e.cssClass += " cke_browser_air"); e.iOS && (e.cssClass += " cke_browser_ios"); e.hidpi && (e.cssClass += " cke_hidpi"); return e
        }()); "unloaded" == CKEDITOR.status && function () {
            CKEDITOR.event.implementOn(CKEDITOR);
            CKEDITOR.loadFullCore = function () { if ("basic_ready" != CKEDITOR.status) CKEDITOR.loadFullCore._load = 1; else { delete CKEDITOR.loadFullCore; var a = document.createElement("script"); a.type = "text/javascript"; a.src = CKEDITOR.basePath + "ckeditor.js"; document.getElementsByTagName("head")[0].appendChild(a) } }; CKEDITOR.loadFullCoreTimeout = 0; CKEDITOR.add = function (a) { (this._.pending || (this._.pending = [])).push(a) }; (function () {
                CKEDITOR.domReady(function () {
                    var a = CKEDITOR.loadFullCore, f = CKEDITOR.loadFullCoreTimeout; a && (CKEDITOR.status =
                    "basic_ready", a && a._load ? a() : f && setTimeout(function () { CKEDITOR.loadFullCore && CKEDITOR.loadFullCore() }, 1E3 * f))
                })
            })(); CKEDITOR.status = "basic_loaded"
        }(); "use strict"; CKEDITOR.VERBOSITY_WARN = 1; CKEDITOR.VERBOSITY_ERROR = 2; CKEDITOR.verbosity = CKEDITOR.VERBOSITY_WARN | CKEDITOR.VERBOSITY_ERROR; CKEDITOR.warn = function (a, f) { CKEDITOR.verbosity & CKEDITOR.VERBOSITY_WARN && CKEDITOR.fire("log", { type: "warn", errorCode: a, additionalData: f }) }; CKEDITOR.error = function (a, f) {
            CKEDITOR.verbosity & CKEDITOR.VERBOSITY_ERROR && CKEDITOR.fire("log",
            { type: "error", errorCode: a, additionalData: f })
        }; CKEDITOR.on("log", function (a) { if (window.console && window.console.log) { var f = console[a.data.type] ? a.data.type : "log", e = a.data.errorCode; if (a = a.data.additionalData) console[f]("[CKEDITOR] Error code: " + e + ".", a); else console[f]("[CKEDITOR] Error code: " + e + "."); console[f]("[CKEDITOR] For more information about this error go to https://ckeditor.com/docs/ckeditor4/latest/guide/dev_errors.html#" + e) } }, null, null, 999); CKEDITOR.dom = {}; (function () {
            function a(a, g, d) {
                this._minInterval =
                a; this._context = d; this._lastOutput = this._scheduledTimer = 0; this._output = CKEDITOR.tools.bind(g, d || {}); var b = this; this.input = function () { function a() { b._lastOutput = (new Date).getTime(); b._scheduledTimer = 0; b._call() } if (!b._scheduledTimer || !1 !== b._reschedule()) { var n = (new Date).getTime() - b._lastOutput; n < b._minInterval ? b._scheduledTimer = setTimeout(a, b._minInterval - n) : a() } }
            } function f(n, g, d) {
                a.call(this, n, g, d); this._args = []; var b = this; this.input = CKEDITOR.tools.override(this.input, function (a) {
                    return function () {
                        b._args =
                        Array.prototype.slice.call(arguments); a.call(this)
                    }
                })
            } var e = [], b = CKEDITOR.env.gecko ? "-moz-" : CKEDITOR.env.webkit ? "-webkit-" : CKEDITOR.env.ie ? "-ms-" : "", c = /&/g, m = />/g, h = /</g, l = /"/g, d = /&(lt|gt|amp|quot|nbsp|shy|#\d{1,5});/g, k = { lt: "\x3c", gt: "\x3e", amp: "\x26", quot: '"', nbsp: " ", shy: "­" }, g = function (a, g) { return "#" == g[0] ? String.fromCharCode(parseInt(g.slice(1), 10)) : k[g] }; CKEDITOR.on("reset", function () { e = [] }); CKEDITOR.tools = {
                arrayCompare: function (a, g) {
                    if (!a && !g) return !0; if (!a || !g || a.length != g.length) return !1;
                    for (var d = 0; d < a.length; d++) if (a[d] != g[d]) return !1; return !0
                }, getIndex: function (a, g) { for (var d = 0; d < a.length; ++d) if (g(a[d])) return d; return -1 }, clone: function (a) { var g; if (a && a instanceof Array) { g = []; for (var d = 0; d < a.length; d++) g[d] = CKEDITOR.tools.clone(a[d]); return g } if (null === a || "object" != typeof a || a instanceof String || a instanceof Number || a instanceof Boolean || a instanceof Date || a instanceof RegExp || a.nodeType || a.window === a) return a; g = new a.constructor; for (d in a) g[d] = CKEDITOR.tools.clone(a[d]); return g },
                capitalize: function (a, g) { return a.charAt(0).toUpperCase() + (g ? a.slice(1) : a.slice(1).toLowerCase()) }, extend: function (a) { var g = arguments.length, d, b; "boolean" == typeof (d = arguments[g - 1]) ? g-- : "boolean" == typeof (d = arguments[g - 2]) && (b = arguments[g - 1], g -= 2); for (var c = 1; c < g; c++) { var e = arguments[c] || {}; CKEDITOR.tools.array.forEach(CKEDITOR.tools.object.keys(e), function (g) { if (!0 === d || null == a[g]) if (!b || g in b) a[g] = e[g] }) } return a }, prototypedCopy: function (a) { var g = function () { }; g.prototype = a; return new g }, copy: function (a) {
                    var g =
                    {}, d; for (d in a) g[d] = a[d]; return g
                }, isArray: function (a) { return "[object Array]" == Object.prototype.toString.call(a) }, isEmpty: function (a) { for (var g in a) if (a.hasOwnProperty(g)) return !1; return !0 }, cssVendorPrefix: function (a, g, d) { if (d) return b + a + ":" + g + ";" + a + ":" + g; d = {}; d[a] = g; d[b + a] = g; return d }, cssStyleToDomStyle: function () {
                    var a = document.createElement("div").style, g = "undefined" != typeof a.cssFloat ? "cssFloat" : "undefined" != typeof a.styleFloat ? "styleFloat" : "float"; return function (a) {
                        return "float" == a ? g : a.replace(/-./g,
                        function (a) { return a.substr(1).toUpperCase() })
                    }
                }(), buildStyleHtml: function (a) { a = [].concat(a); for (var g, d = [], b = 0; b < a.length; b++) if (g = a[b]) /@import|[{ }]/.test(g) ? d.push("\x3cstyle\x3e" + g + "\x3c/style\x3e") : d.push('\x3clink type\x3d"text/css" rel\x3dstylesheet href\x3d"' + g + '"\x3e'); return d.join("") }, htmlEncode: function (a) { return void 0 === a || null === a ? "" : String(a).replace(c, "\x26amp;").replace(m, "\x26gt;").replace(h, "\x26lt;") }, htmlDecode: function (a) { return a.replace(d, g) }, htmlEncodeAttr: function (a) {
                    return CKEDITOR.tools.htmlEncode(a).replace(l,
                    "\x26quot;")
                }, htmlDecodeAttr: function (a) { return CKEDITOR.tools.htmlDecode(a) }, transformPlainTextToHtml: function (a, g) {
                    var d = g == CKEDITOR.ENTER_BR, b = this.htmlEncode(a.replace(/\r\n/g, "\n")), b = b.replace(/\t/g, "\x26nbsp;\x26nbsp; \x26nbsp;"), c = g == CKEDITOR.ENTER_P ? "p" : "div"; if (!d) { var e = /\n{2}/g; if (e.test(b)) var k = "\x3c" + c + "\x3e", l = "\x3c/" + c + "\x3e", b = k + b.replace(e, function () { return l + k }) + l } b = b.replace(/\n/g, "\x3cbr\x3e"); d || (b = b.replace(new RegExp("\x3cbr\x3e(?\x3d\x3c/" + c + "\x3e)"), function (a) {
                        return CKEDITOR.tools.repeat(a,
                        2)
                    })); b = b.replace(/^ | $/g, "\x26nbsp;"); return b = b.replace(/(>|\s) /g, function (a, g) { return g + "\x26nbsp;" }).replace(/ (?=<)/g, "\x26nbsp;")
                }, getNextNumber: function () { var a = 0; return function () { return ++a } }(), getNextId: function () { return "cke_" + this.getNextNumber() }, getUniqueId: function () { for (var a = "e", g = 0; 8 > g; g++) a += Math.floor(65536 * (1 + Math.random())).toString(16).substring(1); return a }, override: function (a, g) { var d = g(a); d.prototype = a.prototype; return d }, setTimeout: function (a, g, d, b, c) {
                    c || (c = window); d || (d =
                    c); return c.setTimeout(function () { b ? a.apply(d, [].concat(b)) : a.apply(d) }, g || 0)
                }, throttle: function (a, g, d) { return new this.buffers.throttle(a, g, d) }, trim: function () { var a = /(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g; return function (g) { return g.replace(a, "") } }(), ltrim: function () { var a = /^[ \t\n\r]+/g; return function (g) { return g.replace(a, "") } }(), rtrim: function () { var a = /[ \t\n\r]+$/g; return function (g) { return g.replace(a, "") } }(), indexOf: function (a, g) {
                    if ("function" == typeof g) for (var d = 0, b = a.length; d < b; d++) { if (g(a[d])) return d } else {
                        if (a.indexOf) return a.indexOf(g);
                        d = 0; for (b = a.length; d < b; d++) if (a[d] === g) return d
                    } return -1
                }, search: function (a, g) { var d = CKEDITOR.tools.indexOf(a, g); return 0 <= d ? a[d] : null }, bind: function (a, g) { var d = Array.prototype.slice.call(arguments, 2); return function () { return a.apply(g, d.concat(Array.prototype.slice.call(arguments))) } }, createClass: function (a) {
                    var g = a.$, d = a.base, b = a.privates || a._, c = a.proto; a = a.statics; !g && (g = function () { d && this.base.apply(this, arguments) }); if (b) var e = g, g = function () {
                        var a = this._ || (this._ = {}), g; for (g in b) {
                            var d = b[g];
                            a[g] = "function" == typeof d ? CKEDITOR.tools.bind(d, this) : d
                        } e.apply(this, arguments)
                    }; d && (g.prototype = this.prototypedCopy(d.prototype), g.prototype.constructor = g, g.base = d, g.baseProto = d.prototype, g.prototype.base = function t() { this.base = d.prototype.base; d.apply(this, arguments); this.base = t }); c && this.extend(g.prototype, c, !0); a && this.extend(g, a, !0); return g
                }, addFunction: function (a, g) { return e.push(function () { return a.apply(g || this, arguments) }) - 1 }, removeFunction: function (a) { e[a] = null }, callFunction: function (a) {
                    var g =
                    e[a]; return g && g.apply(window, Array.prototype.slice.call(arguments, 1))
                }, cssLength: function () { var a = /^-?\d+\.?\d*px$/, g; return function (d) { g = CKEDITOR.tools.trim(d + "") + "px"; return a.test(g) ? g : d || "" } }(), convertToPx: function () {
                    var a; return function (g) {
                        a || (a = CKEDITOR.dom.element.createFromHtml('\x3cdiv style\x3d"position:absolute;left:-9999px;top:-9999px;margin:0px;padding:0px;border:0px;"\x3e\x3c/div\x3e', CKEDITOR.document), CKEDITOR.document.getBody().append(a)); if (!/%$/.test(g)) {
                            var d = 0 > parseFloat(g);
                            d && (g = g.replace("-", "")); a.setStyle("width", g); g = a.$.clientWidth; return d ? -g : g
                        } return g
                    }
                }(), repeat: function (a, g) { return Array(g + 1).join(a) }, tryThese: function () { for (var a, g = 0, d = arguments.length; g < d; g++) { var b = arguments[g]; try { a = b(); break } catch (c) { } } return a }, genKey: function () { return Array.prototype.slice.call(arguments).join("-") }, defer: function (a) { return function () { var g = arguments, d = this; window.setTimeout(function () { a.apply(d, g) }, 0) } }, normalizeCssText: function (a, g) {
                    var d = [], b, c = CKEDITOR.tools.parseCssText(a,
                    !0, g); for (b in c) d.push(b + ":" + c[b]); d.sort(); return d.length ? d.join(";") + ";" : ""
                }, convertRgbToHex: function (a) { return a.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi, function (a, g, d, b) { a = [g, d, b]; for (g = 0; 3 > g; g++) a[g] = ("0" + parseInt(a[g], 10).toString(16)).slice(-2); return "#" + a.join("") }) }, normalizeHex: function (a) { return a.replace(/#(([0-9a-f]{3}){1,2})($|;|\s+)/gi, function (a, g, d, b) { a = g.toLowerCase(); 3 == a.length && (a = a.split(""), a = [a[0], a[0], a[1], a[1], a[2], a[2]].join("")); return "#" + a + b }) }, parseCssText: function (a,
                g, d) { var b = {}; d && (a = (new CKEDITOR.dom.element("span")).setAttribute("style", a).getAttribute("style") || ""); a && (a = CKEDITOR.tools.normalizeHex(CKEDITOR.tools.convertRgbToHex(a))); if (!a || ";" == a) return b; a.replace(/&quot;/g, '"').replace(/\s*([^:;\s]+)\s*:\s*([^;]+)\s*(?=;|$)/g, function (a, d, n) { g && (d = d.toLowerCase(), "font-family" == d && (n = n.replace(/\s*,\s*/g, ",")), n = CKEDITOR.tools.trim(n)); b[d] = n }); return b }, writeCssText: function (a, g) { var d, b = []; for (d in a) b.push(d + ":" + a[d]); g && b.sort(); return b.join("; ") },
                objectCompare: function (a, g, d) { var b; if (!a && !g) return !0; if (!a || !g) return !1; for (b in a) if (a[b] != g[b]) return !1; if (!d) for (b in g) if (a[b] != g[b]) return !1; return !0 }, objectKeys: function (a) { return CKEDITOR.tools.object.keys(a) }, convertArrayToObject: function (a, g) { var d = {}; 1 == arguments.length && (g = !0); for (var b = 0, c = a.length; b < c; ++b) d[a[b]] = g; return d }, fixDomain: function () {
                    for (var a; ;) try { a = window.parent.document.domain; break } catch (g) {
                        a = a ? a.replace(/.+?(?:\.|$)/, "") : document.domain; if (!a) break; document.domain =
                        a
                    } return !!a
                }, eventsBuffer: function (a, g, d) { return new this.buffers.event(a, g, d) }, enableHtml5Elements: function (a, g) { for (var d = "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video".split(" "), b = d.length, c; b--;) c = a.createElement(d[b]), g && a.appendChild(c) }, checkIfAnyArrayItemMatches: function (a, g) { for (var d = 0, b = a.length; d < b; ++d) if (a[d].match(g)) return !0; return !1 }, checkIfAnyObjectPropertyMatches: function (a,
                g) { for (var d in a) if (d.match(g)) return !0; return !1 }, keystrokeToString: function (a, g) { var d = this.keystrokeToArray(a, g); d.display = d.display.join("+"); d.aria = d.aria.join("+"); return d }, keystrokeToArray: function (a, g) {
                    var d = g & 16711680, b = g & 65535, c = CKEDITOR.env.mac, e = [], k = []; d & CKEDITOR.CTRL && (e.push(c ? "⌘" : a[17]), k.push(c ? a[224] : a[17])); d & CKEDITOR.ALT && (e.push(c ? "⌥" : a[18]), k.push(a[18])); d & CKEDITOR.SHIFT && (e.push(c ? "⇧" : a[16]), k.push(a[16])); b && (a[b] ? (e.push(a[b]), k.push(a[b])) : (e.push(String.fromCharCode(b)),
                    k.push(String.fromCharCode(b)))); return { display: e, aria: k }
                }, transparentImageData: "data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw\x3d\x3d", getCookie: function (a) { a = a.toLowerCase(); for (var g = document.cookie.split(";"), d, b, c = 0; c < g.length; c++) if (d = g[c].split("\x3d"), b = decodeURIComponent(CKEDITOR.tools.trim(d[0]).toLowerCase()), b === a) return decodeURIComponent(1 < d.length ? d[1] : ""); return null }, setCookie: function (a, g) {
                    document.cookie = encodeURIComponent(a) + "\x3d" + encodeURIComponent(g) +
                    ";path\x3d/"
                }, getCsrfToken: function () { var a = CKEDITOR.tools.getCookie("ckCsrfToken"); if (!a || 40 != a.length) { var a = [], g = ""; if (window.crypto && window.crypto.getRandomValues) a = new Uint8Array(40), window.crypto.getRandomValues(a); else for (var d = 0; 40 > d; d++) a.push(Math.floor(256 * Math.random())); for (d = 0; d < a.length; d++) var b = "abcdefghijklmnopqrstuvwxyz0123456789".charAt(a[d] % 36), g = g + (.5 < Math.random() ? b.toUpperCase() : b); a = g; CKEDITOR.tools.setCookie("ckCsrfToken", a) } return a }, escapeCss: function (a) {
                    return a ? window.CSS &&
                    CSS.escape ? CSS.escape(a) : isNaN(parseInt(a.charAt(0), 10)) ? a : "\\3" + a.charAt(0) + " " + a.substring(1, a.length) : ""
                }, getMouseButton: function (a) { return (a = a && a.data ? a.data.$ : a) ? CKEDITOR.tools.normalizeMouseButton(a.button) : !1 }, normalizeMouseButton: function (a, g) {
                    if (!CKEDITOR.env.ie || 9 <= CKEDITOR.env.version && !CKEDITOR.env.ie6Compat) return a; for (var d = [[CKEDITOR.MOUSE_BUTTON_LEFT, 1], [CKEDITOR.MOUSE_BUTTON_MIDDLE, 4], [CKEDITOR.MOUSE_BUTTON_RIGHT, 2]], b = 0; b < d.length; b++) {
                        var c = d[b]; if (c[0] === a && g) return c[1]; if (!g &&
                        c[1] === a) return c[0]
                    }
                }, convertHexStringToBytes: function (a) { var g = [], d = a.length / 2, b; for (b = 0; b < d; b++) g.push(parseInt(a.substr(2 * b, 2), 16)); return g }, convertBytesToBase64: function (a) { var g = "", d = a.length, b; for (b = 0; b < d; b += 3) { var c = a.slice(b, b + 3), e = c.length, k = [], l; if (3 > e) for (l = e; 3 > l; l++) c[l] = 0; k[0] = (c[0] & 252) >> 2; k[1] = (c[0] & 3) << 4 | c[1] >> 4; k[2] = (c[1] & 15) << 2 | (c[2] & 192) >> 6; k[3] = c[2] & 63; for (l = 0; 4 > l; l++) g = l <= e ? g + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(k[l]) : g + "\x3d" } return g },
                style: {
                    parse: {
                        _colors: {
                            aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#00FFFF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000000", blanchedalmond: "#FFEBCD", blue: "#0000FF", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#00FFFF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgreen: "#006400",
                            darkgrey: "#A9A9A9", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#FF00FF", gainsboro: "#DCDCDC",
                            ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", green: "#008000", greenyellow: "#ADFF2F", grey: "#808080", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgreen: "#90EE90", lightgrey: "#D3D3D3", lightpink: "#FFB6C1", lightsalmon: "#FFA07A",
                            lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#00FF00", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#FF00FF", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1",
                            moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#FF0000", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460",
                            seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", windowtext: "windowtext", wheat: "#F5DEB3", white: "#FFFFFF", whitesmoke: "#F5F5F5", yellow: "#FFFF00", yellowgreen: "#9ACD32"
                        }, _borderStyle: "none hidden dotted dashed solid double groove ridge inset outset".split(" "),
                        _widthRegExp: /^(thin|medium|thick|[\+-]?\d+(\.\d+)?[a-z%]+|[\+-]?0+(\.0+)?|\.\d+[a-z%]+)$/, _rgbaRegExp: /rgba?\(\s*\d+%?\s*,\s*\d+%?\s*,\s*\d+%?\s*(?:,\s*[0-9.]+\s*)?\)/gi, _hslaRegExp: /hsla?\(\s*[0-9.]+\s*,\s*\d+%\s*,\s*\d+%\s*(?:,\s*[0-9.]+\s*)?\)/gi, background: function (a) { var g = {}, d = this._findColor(a); d.length && (g.color = d[0], CKEDITOR.tools.array.forEach(d, function (g) { a = a.replace(g, "") })); if (a = CKEDITOR.tools.trim(a)) g.unprocessed = a; return g }, margin: function (a) {
                            return CKEDITOR.tools.style.parse.sideShorthand(a,
                            function (a) { return a.match(/(?:\-?[\.\d]+(?:%|\w*)|auto|inherit|initial|unset|revert)/g) || ["0px"] })
                        }, sideShorthand: function (a, g) { function d(a) { b.top = c[a[0]]; b.right = c[a[1]]; b.bottom = c[a[2]]; b.left = c[a[3]] } var b = {}, c = g ? g(a) : a.split(/\s+/); switch (c.length) { case 1: d([0, 0, 0, 0]); break; case 2: d([0, 1, 0, 1]); break; case 3: d([0, 1, 2, 1]); break; case 4: d([0, 1, 2, 3]) } return b }, border: function (a) { return CKEDITOR.tools.style.border.fromCssRule(a) }, _findColor: function (a) {
                            var g = [], d = CKEDITOR.tools.array, g = g.concat(a.match(this._rgbaRegExp) ||
                            []), g = g.concat(a.match(this._hslaRegExp) || []); return g = g.concat(d.filter(a.split(/\s+/), function (a) { return a.match(/^\#[a-f0-9]{3}(?:[a-f0-9]{3})?$/gi) ? !0 : a.toLowerCase() in CKEDITOR.tools.style.parse._colors }))
                        }
                    }
                }, array: {
                    filter: function (a, g, d) { var b = []; this.forEach(a, function (c, e) { g.call(d, c, e, a) && b.push(c) }); return b }, find: function (a, g, d) { for (var b = a.length, c = 0; c < b;) { if (g.call(d, a[c], c, a)) return a[c]; c++ } }, forEach: function (a, g, d) { var b = a.length, c; for (c = 0; c < b; c++) g.call(d, a[c], c, a) }, map: function (a,
                    g, d) { for (var b = [], c = 0; c < a.length; c++) b.push(g.call(d, a[c], c, a)); return b }, reduce: function (a, g, d, b) { for (var c = 0; c < a.length; c++) d = g.call(b, d, a[c], c, a); return d }, every: function (a, g, d) { if (!a.length) return !0; g = this.filter(a, g, d); return a.length === g.length }, some: function (a, g, d) { for (var b = 0; b < a.length; b++) if (g.call(d, a[b], b, a)) return !0; return !1 }
                }, object: {
                    DONT_ENUMS: "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "), entries: function (a) {
                        return CKEDITOR.tools.array.map(CKEDITOR.tools.object.keys(a),
                        function (g) { return [g, a[g]] })
                    }, values: function (a) { return CKEDITOR.tools.array.map(CKEDITOR.tools.object.keys(a), function (g) { return a[g] }) }, keys: function (a) {
                        var g = Object.prototype.hasOwnProperty, d = [], b = CKEDITOR.tools.object.DONT_ENUMS; if (CKEDITOR.env.ie && 9 > CKEDITOR.env.version && (!a || "object" !== typeof a)) { g = []; if ("string" === typeof a) for (d = 0; d < a.length; d++) g.push(String(d)); return g } for (var c in a) d.push(c); if (CKEDITOR.env.ie && 9 > CKEDITOR.env.version) for (c = 0; c < b.length; c++) g.call(a, b[c]) && d.push(b[c]);
                        return d
                    }, findKey: function (a, g) { if ("object" !== typeof a) return null; for (var d in a) if (a[d] === g) return d; return null }, merge: function (a, g) { var d = CKEDITOR.tools, b = d.clone(a), c = d.clone(g); d.array.forEach(d.object.keys(c), function (a) { b[a] = "object" === typeof c[a] && "object" === typeof b[a] ? d.object.merge(b[a], c[a]) : c[a] }); return b }
                }, getAbsoluteRectPosition: function (a, g) {
                    function d(a) { if (a) { var g = a.getClientRect(); b.top += g.top; b.left += g.left; "x" in b && "y" in b && (b.x += g.x, b.y += g.y); d(a.getWindow().getFrame()) } }
                    var b = CKEDITOR.tools.copy(g); d(a.getFrame()); var c = CKEDITOR.document.getWindow().getScrollPosition(); b.top += c.y; b.left += c.x; "x" in b && "y" in b && (b.y += c.y, b.x += c.x); b.right = b.left + b.width; b.bottom = b.top + b.height; return b
                }
            }; a.prototype = { reset: function () { this._lastOutput = 0; this._clearTimer() }, _reschedule: function () { return !1 }, _call: function () { this._output() }, _clearTimer: function () { this._scheduledTimer && clearTimeout(this._scheduledTimer); this._scheduledTimer = 0 } }; f.prototype = CKEDITOR.tools.prototypedCopy(a.prototype);
            f.prototype._reschedule = function () { this._scheduledTimer && this._clearTimer() }; f.prototype._call = function () { this._output.apply(this._context, this._args) }; CKEDITOR.tools.buffers = {}; CKEDITOR.tools.buffers.event = a; CKEDITOR.tools.buffers.throttle = f; CKEDITOR.tools.style.border = CKEDITOR.tools.createClass({
                $: function (a) { a = a || {}; this.width = a.width; this.style = a.style; this.color = a.color; this._.normalize() }, _: {
                    normalizeMap: { color: [[/windowtext/g, "black"]] }, normalize: function () {
                        for (var a in this._.normalizeMap) {
                            var g =
                            this[a]; g && (this[a] = CKEDITOR.tools.array.reduce(this._.normalizeMap[a], function (a, g) { return a.replace(g[0], g[1]) }, g))
                        }
                    }
                }, proto: { toString: function () { return CKEDITOR.tools.array.filter([this.width, this.style, this.color], function (a) { return !!a }).join(" ") } }, statics: {
                    fromCssRule: function (a) {
                        var g = {}, d = a.split(/\s+/g); a = CKEDITOR.tools.style.parse._findColor(a); a.length && (g.color = a[0]); CKEDITOR.tools.array.forEach(d, function (a) {
                            g.style || -1 === CKEDITOR.tools.indexOf(CKEDITOR.tools.style.parse._borderStyle,
                            a) ? !g.width && CKEDITOR.tools.style.parse._widthRegExp.test(a) && (g.width = a) : g.style = a
                        }); return new CKEDITOR.tools.style.border(g)
                    }, splitCssValues: function (a, g) {
                        g = g || {}; var d = CKEDITOR.tools.array.reduce(["width", "style", "color"], function (d, b) { var c = a["border-" + b] || g[b]; d[b] = c ? CKEDITOR.tools.style.parse.sideShorthand(c) : null; return d }, {}); return CKEDITOR.tools.array.reduce(["top", "right", "bottom", "left"], function (g, b) {
                            var c = {}, e; for (e in d) { var k = a["border-" + b + "-" + e]; c[e] = k ? k : d[e] && d[e][b] } g["border-" +
                            b] = new CKEDITOR.tools.style.border(c); return g
                        }, {})
                    }
                }
            }); CKEDITOR.tools.array.indexOf = CKEDITOR.tools.indexOf; CKEDITOR.tools.array.isArray = CKEDITOR.tools.isArray; CKEDITOR.MOUSE_BUTTON_LEFT = 0; CKEDITOR.MOUSE_BUTTON_MIDDLE = 1; CKEDITOR.MOUSE_BUTTON_RIGHT = 2
        })(); CKEDITOR.dtd = function () {
            var a = CKEDITOR.tools.extend, f = function (a, g) { for (var d = CKEDITOR.tools.clone(a), b = 1; b < arguments.length; b++) { g = arguments[b]; for (var c in g) delete d[c] } return d }, e = {}, b = {}, c = {
                address: 1, article: 1, aside: 1, blockquote: 1, details: 1, div: 1,
                dl: 1, fieldset: 1, figure: 1, footer: 1, form: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, header: 1, hgroup: 1, hr: 1, main: 1, menu: 1, nav: 1, ol: 1, p: 1, pre: 1, section: 1, table: 1, ul: 1
            }, m = { command: 1, link: 1, meta: 1, noscript: 1, script: 1, style: 1 }, h = {}, l = { "#": 1 }, d = { center: 1, dir: 1, noframes: 1 }; a(e, {
                a: 1, abbr: 1, area: 1, audio: 1, b: 1, bdi: 1, bdo: 1, br: 1, button: 1, canvas: 1, cite: 1, code: 1, command: 1, datalist: 1, del: 1, dfn: 1, em: 1, embed: 1, i: 1, iframe: 1, img: 1, input: 1, ins: 1, kbd: 1, keygen: 1, label: 1, map: 1, mark: 1, meter: 1, noscript: 1, object: 1, output: 1, progress: 1,
                q: 1, ruby: 1, s: 1, samp: 1, script: 1, select: 1, small: 1, span: 1, strong: 1, sub: 1, sup: 1, textarea: 1, time: 1, u: 1, "var": 1, video: 1, wbr: 1
            }, l, { acronym: 1, applet: 1, basefont: 1, big: 1, font: 1, isindex: 1, strike: 1, style: 1, tt: 1 }); a(b, c, e, d); f = {
                a: f(e, { a: 1, button: 1 }), abbr: e, address: b, area: h, article: b, aside: b, audio: a({ source: 1, track: 1 }, b), b: e, base: h, bdi: e, bdo: e, blockquote: b, body: b, br: h, button: f(e, { a: 1, button: 1 }), canvas: e, caption: b, cite: e, code: e, col: h, colgroup: { col: 1 }, command: h, datalist: a({ option: 1 }, e), dd: b, del: e, details: a({ summary: 1 },
                b), dfn: e, div: b, dl: { dt: 1, dd: 1 }, dt: b, em: e, embed: h, fieldset: a({ legend: 1 }, b), figcaption: b, figure: a({ figcaption: 1 }, b), footer: b, form: b, h1: e, h2: e, h3: e, h4: e, h5: e, h6: e, head: a({ title: 1, base: 1 }, m), header: b, hgroup: { h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1 }, hr: h, html: a({ head: 1, body: 1 }, b, m), i: e, iframe: l, img: h, input: h, ins: e, kbd: e, keygen: h, label: e, legend: e, li: b, link: h, main: b, map: b, mark: e, menu: a({ li: 1 }, b), meta: h, meter: f(e, { meter: 1 }), nav: b, noscript: a({ link: 1, meta: 1, style: 1 }, e), object: a({ param: 1 }, e), ol: { li: 1 }, optgroup: { option: 1 },
                option: l, output: e, p: e, param: h, pre: e, progress: f(e, { progress: 1 }), q: e, rp: e, rt: e, ruby: a({ rp: 1, rt: 1 }, e), s: e, samp: e, script: l, section: b, select: { optgroup: 1, option: 1 }, small: e, source: h, span: e, strong: e, style: l, sub: e, summary: a({ h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1 }, e), sup: e, table: { caption: 1, colgroup: 1, thead: 1, tfoot: 1, tbody: 1, tr: 1 }, tbody: { tr: 1 }, td: b, textarea: l, tfoot: { tr: 1 }, th: b, thead: { tr: 1 }, time: f(e, { time: 1 }), title: l, tr: { th: 1, td: 1 }, track: h, u: e, ul: { li: 1 }, "var": e, video: a({ source: 1, track: 1 }, b), wbr: h, acronym: e, applet: a({ param: 1 },
                b), basefont: h, big: e, center: b, dialog: h, dir: { li: 1 }, font: e, isindex: h, noframes: b, strike: e, tt: e
            }; a(f, {
                $block: a({ audio: 1, dd: 1, dt: 1, figcaption: 1, li: 1, video: 1 }, c, d), $blockLimit: { article: 1, aside: 1, audio: 1, body: 1, caption: 1, details: 1, dir: 1, div: 1, dl: 1, fieldset: 1, figcaption: 1, figure: 1, footer: 1, form: 1, header: 1, hgroup: 1, main: 1, menu: 1, nav: 1, ol: 1, section: 1, table: 1, td: 1, th: 1, tr: 1, ul: 1, video: 1 }, $cdata: { script: 1, style: 1 }, $editable: {
                    address: 1, article: 1, aside: 1, blockquote: 1, body: 1, details: 1, div: 1, fieldset: 1, figcaption: 1,
                    footer: 1, form: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, header: 1, hgroup: 1, main: 1, nav: 1, p: 1, pre: 1, section: 1
                }, $empty: { area: 1, base: 1, basefont: 1, br: 1, col: 1, command: 1, dialog: 1, embed: 1, hr: 1, img: 1, input: 1, isindex: 1, keygen: 1, link: 1, meta: 1, param: 1, source: 1, track: 1, wbr: 1 }, $inline: e, $list: { dl: 1, ol: 1, ul: 1 }, $listItem: { dd: 1, dt: 1, li: 1 }, $nonBodyContent: a({ body: 1, head: 1, html: 1 }, f.head), $nonEditable: { applet: 1, audio: 1, button: 1, embed: 1, iframe: 1, map: 1, object: 1, option: 1, param: 1, script: 1, textarea: 1, video: 1 }, $object: {
                    applet: 1, audio: 1,
                    button: 1, hr: 1, iframe: 1, img: 1, input: 1, object: 1, select: 1, table: 1, textarea: 1, video: 1
                }, $removeEmpty: { abbr: 1, acronym: 1, b: 1, bdi: 1, bdo: 1, big: 1, cite: 1, code: 1, del: 1, dfn: 1, em: 1, font: 1, i: 1, ins: 1, label: 1, kbd: 1, mark: 1, meter: 1, output: 1, q: 1, ruby: 1, s: 1, samp: 1, small: 1, span: 1, strike: 1, strong: 1, sub: 1, sup: 1, time: 1, tt: 1, u: 1, "var": 1 }, $tabIndex: { a: 1, area: 1, button: 1, input: 1, object: 1, select: 1, textarea: 1 }, $tableContent: { caption: 1, col: 1, colgroup: 1, tbody: 1, td: 1, tfoot: 1, th: 1, thead: 1, tr: 1 }, $transparent: {
                    a: 1, audio: 1, canvas: 1, del: 1,
                    ins: 1, map: 1, noscript: 1, object: 1, video: 1
                }, $intermediate: { caption: 1, colgroup: 1, dd: 1, dt: 1, figcaption: 1, legend: 1, li: 1, optgroup: 1, option: 1, rp: 1, rt: 1, summary: 1, tbody: 1, td: 1, tfoot: 1, th: 1, thead: 1, tr: 1 }
            }); return f
        }(); CKEDITOR.dom.event = function (a) { this.$ = a }; CKEDITOR.dom.event.prototype = {
            getKey: function () { return this.$.keyCode || this.$.which }, getKeystroke: function () { var a = this.getKey(); if (this.$.ctrlKey || this.$.metaKey) a += CKEDITOR.CTRL; this.$.shiftKey && (a += CKEDITOR.SHIFT); this.$.altKey && (a += CKEDITOR.ALT); return a },
            preventDefault: function (a) { var f = this.$; f.preventDefault ? f.preventDefault() : f.returnValue = !1; a && this.stopPropagation() }, stopPropagation: function () { var a = this.$; a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0 }, getTarget: function () { var a = this.$.target || this.$.srcElement; return a ? new CKEDITOR.dom.node(a) : null }, getPhase: function () { return this.$.eventPhase || 2 }, getPageOffset: function () {
                var a = this.getTarget().getDocument().$; return {
                    x: this.$.pageX || this.$.clientX + (a.documentElement.scrollLeft || a.body.scrollLeft),
                    y: this.$.pageY || this.$.clientY + (a.documentElement.scrollTop || a.body.scrollTop)
                }
            }
        }; CKEDITOR.CTRL = 1114112; CKEDITOR.SHIFT = 2228224; CKEDITOR.ALT = 4456448; CKEDITOR.EVENT_PHASE_CAPTURING = 1; CKEDITOR.EVENT_PHASE_AT_TARGET = 2; CKEDITOR.EVENT_PHASE_BUBBLING = 3; CKEDITOR.dom.domObject = function (a) { a && (this.$ = a) }; CKEDITOR.dom.domObject.prototype = function () {
            var a = function (a, e) { return function (b) { "undefined" != typeof CKEDITOR && a.fire(e, new CKEDITOR.dom.event(b)) } }; return {
                getPrivate: function () {
                    var a; (a = this.getCustomData("_")) ||
                    this.setCustomData("_", a = {}); return a
                }, on: function (f) { var e = this.getCustomData("_cke_nativeListeners"); e || (e = {}, this.setCustomData("_cke_nativeListeners", e)); e[f] || (e = e[f] = a(this, f), this.$.addEventListener ? this.$.addEventListener(f, e, !!CKEDITOR.event.useCapture) : this.$.attachEvent && this.$.attachEvent("on" + f, e)); return CKEDITOR.event.prototype.on.apply(this, arguments) }, removeListener: function (a) {
                    CKEDITOR.event.prototype.removeListener.apply(this, arguments); if (!this.hasListeners(a)) {
                        var e = this.getCustomData("_cke_nativeListeners"),
                        b = e && e[a]; b && (this.$.removeEventListener ? this.$.removeEventListener(a, b, !1) : this.$.detachEvent && this.$.detachEvent("on" + a, b), delete e[a])
                    }
                }, removeAllListeners: function () { try { var a = this.getCustomData("_cke_nativeListeners"), e; for (e in a) { var b = a[e]; this.$.detachEvent ? this.$.detachEvent("on" + e, b) : this.$.removeEventListener && this.$.removeEventListener(e, b, !1); delete a[e] } } catch (c) { if (!CKEDITOR.env.edge || -2146828218 !== c.number) throw c; } CKEDITOR.event.prototype.removeAllListeners.call(this) }
            }
        }(); (function (a) {
            var f =
            {}; CKEDITOR.on("reset", function () { f = {} }); a.equals = function (a) { try { return a && a.$ === this.$ } catch (b) { return !1 } }; a.setCustomData = function (a, b) { var c = this.getUniqueId(); (f[c] || (f[c] = {}))[a] = b; return this }; a.getCustomData = function (a) { var b = this.$["data-cke-expando"]; return (b = b && f[b]) && a in b ? b[a] : null }; a.removeCustomData = function (a) { var b = this.$["data-cke-expando"], b = b && f[b], c, m; b && (c = b[a], m = a in b, delete b[a]); return m ? c : null }; a.clearCustomData = function () {
                this.removeAllListeners(); var a = this.getUniqueId();
                a && delete f[a]
            }; a.getUniqueId = function () { return this.$["data-cke-expando"] || (this.$["data-cke-expando"] = CKEDITOR.tools.getNextNumber()) }; CKEDITOR.event.implementOn(a)
        })(CKEDITOR.dom.domObject.prototype); CKEDITOR.dom.node = function (a) {
            return a ? new CKEDITOR.dom[a.nodeType == CKEDITOR.NODE_DOCUMENT ? "document" : a.nodeType == CKEDITOR.NODE_ELEMENT ? "element" : a.nodeType == CKEDITOR.NODE_TEXT ? "text" : a.nodeType == CKEDITOR.NODE_COMMENT ? "comment" : a.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT ? "documentFragment" : "domObject"](a) :
            this
        }; CKEDITOR.dom.node.prototype = new CKEDITOR.dom.domObject; CKEDITOR.NODE_ELEMENT = 1; CKEDITOR.NODE_DOCUMENT = 9; CKEDITOR.NODE_TEXT = 3; CKEDITOR.NODE_COMMENT = 8; CKEDITOR.NODE_DOCUMENT_FRAGMENT = 11; CKEDITOR.POSITION_IDENTICAL = 0; CKEDITOR.POSITION_DISCONNECTED = 1; CKEDITOR.POSITION_FOLLOWING = 2; CKEDITOR.POSITION_PRECEDING = 4; CKEDITOR.POSITION_IS_CONTAINED = 8; CKEDITOR.POSITION_CONTAINS = 16; CKEDITOR.tools.extend(CKEDITOR.dom.node.prototype, {
            appendTo: function (a, f) { a.append(this, f); return a }, clone: function (a, f) {
                function e(b) {
                    b["data-cke-expando"] &&
                    (b["data-cke-expando"] = !1); if (b.nodeType == CKEDITOR.NODE_ELEMENT || b.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT) if (f || b.nodeType != CKEDITOR.NODE_ELEMENT || b.removeAttribute("id", !1), a) { b = b.childNodes; for (var c = 0; c < b.length; c++) e(b[c]) }
                } function b(c) { if (c.type == CKEDITOR.NODE_ELEMENT || c.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT) { if (c.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT) { var e = c.getName(); ":" == e[0] && c.renameNode(e.substring(1)) } if (a) for (e = 0; e < c.getChildCount() ; e++) b(c.getChild(e)) } } var c = this.$.cloneNode(a);
                e(c); c = new CKEDITOR.dom.node(c); CKEDITOR.env.ie && 9 > CKEDITOR.env.version && (this.type == CKEDITOR.NODE_ELEMENT || this.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT) && b(c); return c
            }, hasPrevious: function () { return !!this.$.previousSibling }, hasNext: function () { return !!this.$.nextSibling }, insertAfter: function (a) { a.$.parentNode.insertBefore(this.$, a.$.nextSibling); return a }, insertBefore: function (a) { a.$.parentNode.insertBefore(this.$, a.$); return a }, insertBeforeMe: function (a) {
                this.$.parentNode.insertBefore(a.$, this.$);
                return a
            }, getAddress: function (a) { for (var f = [], e = this.getDocument().$.documentElement, b = this; b && b != e;) { var c = b.getParent(); c && f.unshift(this.getIndex.call(b, a)); b = c } return f }, getDocument: function () { return new CKEDITOR.dom.document(this.$.ownerDocument || this.$.parentNode.ownerDocument) }, getIndex: function (a) {
                function f(a, b) { var c = b ? a.getNext() : a.getPrevious(); return c && c.type == CKEDITOR.NODE_TEXT ? c.isEmpty() ? f(c, b) : c : null } var e = this, b = -1, c; if (!this.getParent() || a && e.type == CKEDITOR.NODE_TEXT && e.isEmpty() &&
                !f(e) && !f(e, !0)) return -1; do if (!a || e.equals(this) || e.type != CKEDITOR.NODE_TEXT || !c && !e.isEmpty()) b++, c = e.type == CKEDITOR.NODE_TEXT; while (e = e.getPrevious()); return b
            }, getNextSourceNode: function (a, f, e) {
                if (e && !e.call) { var b = e; e = function (a) { return !a.equals(b) } } a = !a && this.getFirst && this.getFirst(); var c; if (!a) { if (this.type == CKEDITOR.NODE_ELEMENT && e && !1 === e(this, !0)) return null; a = this.getNext() } for (; !a && (c = (c || this).getParent()) ;) { if (e && !1 === e(c, !0)) return null; a = c.getNext() } return !a || e && !1 === e(a) ? null : f &&
                f != a.type ? a.getNextSourceNode(!1, f, e) : a
            }, getPreviousSourceNode: function (a, f, e) { if (e && !e.call) { var b = e; e = function (a) { return !a.equals(b) } } a = !a && this.getLast && this.getLast(); var c; if (!a) { if (this.type == CKEDITOR.NODE_ELEMENT && e && !1 === e(this, !0)) return null; a = this.getPrevious() } for (; !a && (c = (c || this).getParent()) ;) { if (e && !1 === e(c, !0)) return null; a = c.getPrevious() } return !a || e && !1 === e(a) ? null : f && a.type != f ? a.getPreviousSourceNode(!1, f, e) : a }, getPrevious: function (a) {
                var f = this.$, e; do e = (f = f.previousSibling) &&
                10 != f.nodeType && new CKEDITOR.dom.node(f); while (e && a && !a(e)); return e
            }, getNext: function (a) { var f = this.$, e; do e = (f = f.nextSibling) && new CKEDITOR.dom.node(f); while (e && a && !a(e)); return e }, getParent: function (a) { var f = this.$.parentNode; return f && (f.nodeType == CKEDITOR.NODE_ELEMENT || a && f.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT) ? new CKEDITOR.dom.node(f) : null }, getParents: function (a) { var f = this, e = []; do e[a ? "push" : "unshift"](f); while (f = f.getParent()); return e }, getCommonAncestor: function (a) {
                if (a.equals(this)) return this;
                if (a.contains && a.contains(this)) return a; var f = this.contains ? this : this.getParent(); do if (f.contains(a)) return f; while (f = f.getParent()); return null
            }, getPosition: function (a) {
                var f = this.$, e = a.$; if (f.compareDocumentPosition) return f.compareDocumentPosition(e); if (f == e) return CKEDITOR.POSITION_IDENTICAL; if (this.type == CKEDITOR.NODE_ELEMENT && a.type == CKEDITOR.NODE_ELEMENT) {
                    if (f.contains) {
                        if (f.contains(e)) return CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_PRECEDING; if (e.contains(f)) return CKEDITOR.POSITION_IS_CONTAINED +
                        CKEDITOR.POSITION_FOLLOWING
                    } if ("sourceIndex" in f) return 0 > f.sourceIndex || 0 > e.sourceIndex ? CKEDITOR.POSITION_DISCONNECTED : f.sourceIndex < e.sourceIndex ? CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_FOLLOWING
                } f = this.getAddress(); a = a.getAddress(); for (var e = Math.min(f.length, a.length), b = 0; b < e; b++) if (f[b] != a[b]) return f[b] < a[b] ? CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_FOLLOWING; return f.length < a.length ? CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_IS_CONTAINED + CKEDITOR.POSITION_FOLLOWING
            },
            getAscendant: function (a, f) { var e = this.$, b, c; f || (e = e.parentNode); "function" == typeof a ? (c = !0, b = a) : (c = !1, b = function (b) { b = "string" == typeof b.nodeName ? b.nodeName.toLowerCase() : ""; return "string" == typeof a ? b == a : b in a }); for (; e;) { if (b(c ? new CKEDITOR.dom.node(e) : e)) return new CKEDITOR.dom.node(e); try { e = e.parentNode } catch (m) { e = null } } return null }, hasAscendant: function (a, f) { var e = this.$; f || (e = e.parentNode); for (; e;) { if (e.nodeName && e.nodeName.toLowerCase() == a) return !0; e = e.parentNode } return !1 }, move: function (a, f) {
                a.append(this.remove(),
                f)
            }, remove: function (a) { var f = this.$, e = f.parentNode; if (e) { if (a) for (; a = f.firstChild;) e.insertBefore(f.removeChild(a), f); e.removeChild(f) } return this }, replace: function (a) { this.insertBefore(a); a.remove() }, trim: function () { this.ltrim(); this.rtrim() }, ltrim: function () { for (var a; this.getFirst && (a = this.getFirst()) ;) { if (a.type == CKEDITOR.NODE_TEXT) { var f = CKEDITOR.tools.ltrim(a.getText()), e = a.getLength(); if (f) f.length < e && (a.split(e - f.length), this.$.removeChild(this.$.firstChild)); else { a.remove(); continue } } break } },
            rtrim: function () { for (var a; this.getLast && (a = this.getLast()) ;) { if (a.type == CKEDITOR.NODE_TEXT) { var f = CKEDITOR.tools.rtrim(a.getText()), e = a.getLength(); if (f) f.length < e && (a.split(f.length), this.$.lastChild.parentNode.removeChild(this.$.lastChild)); else { a.remove(); continue } } break } CKEDITOR.env.needsBrFiller && (a = this.$.lastChild) && 1 == a.type && "br" == a.nodeName.toLowerCase() && a.parentNode.removeChild(a) }, isReadOnly: function (a) {
                var f = this; this.type != CKEDITOR.NODE_ELEMENT && (f = this.getParent()); CKEDITOR.env.edge &&
                f && f.is("textarea", "input") && (a = !0); if (!a && f && "undefined" != typeof f.$.isContentEditable) return !(f.$.isContentEditable || f.data("cke-editable")); for (; f;) { if (f.data("cke-editable")) return !1; if (f.hasAttribute("contenteditable")) return "false" == f.getAttribute("contenteditable"); f = f.getParent() } return !0
            }
        }); CKEDITOR.dom.window = function (a) { CKEDITOR.dom.domObject.call(this, a) }; CKEDITOR.dom.window.prototype = new CKEDITOR.dom.domObject; CKEDITOR.tools.extend(CKEDITOR.dom.window.prototype, {
            focus: function () { this.$.focus() },
            getViewPaneSize: function () { var a = this.$.document, f = "CSS1Compat" == a.compatMode; return { width: (f ? a.documentElement.clientWidth : a.body.clientWidth) || 0, height: (f ? a.documentElement.clientHeight : a.body.clientHeight) || 0 } }, getScrollPosition: function () { var a = this.$; if ("pageXOffset" in a) return { x: a.pageXOffset || 0, y: a.pageYOffset || 0 }; a = a.document; return { x: a.documentElement.scrollLeft || a.body.scrollLeft || 0, y: a.documentElement.scrollTop || a.body.scrollTop || 0 } }, getFrame: function () {
                var a = this.$.frameElement; return a ?
                new CKEDITOR.dom.element.get(a) : null
            }
        }); CKEDITOR.dom.document = function (a) { CKEDITOR.dom.domObject.call(this, a) }; CKEDITOR.dom.document.prototype = new CKEDITOR.dom.domObject; CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype, {
            type: CKEDITOR.NODE_DOCUMENT, appendStyleSheet: function (a) { if (this.$.createStyleSheet) this.$.createStyleSheet(a); else { var f = new CKEDITOR.dom.element("link"); f.setAttributes({ rel: "stylesheet", type: "text/css", href: a }); this.getHead().append(f) } }, appendStyleText: function (a) {
                if (this.$.createStyleSheet) {
                    var f =
                    this.$.createStyleSheet(""); f.cssText = a
                } else { var e = new CKEDITOR.dom.element("style", this); e.append(new CKEDITOR.dom.text(a, this)); this.getHead().append(e) } return f || e.$.sheet
            }, createElement: function (a, f) { var e = new CKEDITOR.dom.element(a, this); f && (f.attributes && e.setAttributes(f.attributes), f.styles && e.setStyles(f.styles)); return e }, createText: function (a) { return new CKEDITOR.dom.text(a, this) }, focus: function () { this.getWindow().focus() }, getActive: function () { var a; try { a = this.$.activeElement } catch (f) { return null } return new CKEDITOR.dom.element(a) },
            getById: function (a) { return (a = this.$.getElementById(a)) ? new CKEDITOR.dom.element(a) : null }, getByAddress: function (a, f) { for (var e = this.$.documentElement, b = 0; e && b < a.length; b++) { var c = a[b]; if (f) for (var m = -1, h = 0; h < e.childNodes.length; h++) { var l = e.childNodes[h]; if (!0 !== f || 3 != l.nodeType || !l.previousSibling || 3 != l.previousSibling.nodeType) if (m++, m == c) { e = l; break } } else e = e.childNodes[c] } return e ? new CKEDITOR.dom.node(e) : null }, getElementsByTag: function (a, f) {
                CKEDITOR.env.ie && 8 >= document.documentMode || !f || (a = f + ":" +
                a); return new CKEDITOR.dom.nodeList(this.$.getElementsByTagName(a))
            }, getHead: function () { var a = this.$.getElementsByTagName("head")[0]; return a = a ? new CKEDITOR.dom.element(a) : this.getDocumentElement().append(new CKEDITOR.dom.element("head"), !0) }, getBody: function () { return new CKEDITOR.dom.element(this.$.body) }, getDocumentElement: function () { return new CKEDITOR.dom.element(this.$.documentElement) }, getWindow: function () { return new CKEDITOR.dom.window(this.$.parentWindow || this.$.defaultView) }, write: function (a) {
                this.$.open("text/html",
                "replace"); CKEDITOR.env.ie && (a = a.replace(/(?:^\s*<!DOCTYPE[^>]*?>)|^/i, '$\x26\n\x3cscript data-cke-temp\x3d"1"\x3e(' + CKEDITOR.tools.fixDomain + ")();\x3c/script\x3e")); this.$.write(a); this.$.close()
            }, find: function (a) { return new CKEDITOR.dom.nodeList(this.$.querySelectorAll(a)) }, findOne: function (a) { return (a = this.$.querySelector(a)) ? new CKEDITOR.dom.element(a) : null }, _getHtml5ShivFrag: function () {
                var a = this.getCustomData("html5ShivFrag"); a || (a = this.$.createDocumentFragment(), CKEDITOR.tools.enableHtml5Elements(a,
                !0), this.setCustomData("html5ShivFrag", a)); return a
            }
        }); CKEDITOR.dom.nodeList = function (a) { this.$ = a }; CKEDITOR.dom.nodeList.prototype = { count: function () { return this.$.length }, getItem: function (a) { return 0 > a || a >= this.$.length ? null : (a = this.$[a]) ? new CKEDITOR.dom.node(a) : null }, toArray: function () { return CKEDITOR.tools.array.map(this.$, function (a) { return new CKEDITOR.dom.node(a) }) } }; CKEDITOR.dom.element = function (a, f) {
            "string" == typeof a && (a = (f ? f.$ : document).createElement(a)); CKEDITOR.dom.domObject.call(this,
            a)
        }; CKEDITOR.dom.element.get = function (a) { return (a = "string" == typeof a ? document.getElementById(a) || document.getElementsByName(a)[0] : a) && (a.$ ? a : new CKEDITOR.dom.element(a)) }; CKEDITOR.dom.element.prototype = new CKEDITOR.dom.node; CKEDITOR.dom.element.createFromHtml = function (a, f) { var e = new CKEDITOR.dom.element("div", f); e.setHtml(a); return e.getFirst().remove() }; CKEDITOR.dom.element.setMarker = function (a, f, e, b) {
            var c = f.getCustomData("list_marker_id") || f.setCustomData("list_marker_id", CKEDITOR.tools.getNextNumber()).getCustomData("list_marker_id"),
            m = f.getCustomData("list_marker_names") || f.setCustomData("list_marker_names", {}).getCustomData("list_marker_names"); a[c] = f; m[e] = 1; return f.setCustomData(e, b)
        }; CKEDITOR.dom.element.clearAllMarkers = function (a) { for (var f in a) CKEDITOR.dom.element.clearMarkers(a, a[f], 1) }; CKEDITOR.dom.element.clearMarkers = function (a, f, e) {
            var b = f.getCustomData("list_marker_names"), c = f.getCustomData("list_marker_id"), m; for (m in b) f.removeCustomData(m); f.removeCustomData("list_marker_names"); e && (f.removeCustomData("list_marker_id"),
            delete a[c])
        }; (function () {
            function a(a, d) { return -1 < (" " + a + " ").replace(m, " ").indexOf(" " + d + " ") } function f(a) { var d = !0; a.$.id || (a.$.id = "cke_tmp_" + CKEDITOR.tools.getNextNumber(), d = !1); return function () { d || a.removeAttribute("id") } } function e(a, d) { var b = CKEDITOR.tools.escapeCss(a.$.id); return "#" + b + " " + d.split(/,\s*/).join(", #" + b + " ") } function b(a) { for (var d = 0, b = 0, g = h[a].length; b < g; b++) d += parseFloat(this.getComputedStyle(h[a][b]) || 0, 10) || 0; return d } var c = document.createElement("_").classList, c = "undefined" !==
            typeof c && null !== String(c.add).match(/\[Native code\]/gi), m = /[\n\t\r]/g; CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype, {
                type: CKEDITOR.NODE_ELEMENT, addClass: c ? function (a) { this.$.classList.add(a); return this } : function (b) { var d = this.$.className; d && (a(d, b) || (d += " " + b)); this.$.className = d || b; return this }, removeClass: c ? function (a) { var d = this.$; d.classList.remove(a); d.className || d.removeAttribute("class"); return this } : function (b) {
                    var d = this.getAttribute("class"); d && a(d, b) && ((d = d.replace(new RegExp("(?:^|\\s+)" +
                    b + "(?\x3d\\s|$)"), "").replace(/^\s+/, "")) ? this.setAttribute("class", d) : this.removeAttribute("class")); return this
                }, hasClass: function (b) { return a(this.$.className, b) }, append: function (a, d) { "string" == typeof a && (a = this.getDocument().createElement(a)); d ? this.$.insertBefore(a.$, this.$.firstChild) : this.$.appendChild(a.$); return a }, appendHtml: function (a) { if (this.$.childNodes.length) { var d = new CKEDITOR.dom.element("div", this.getDocument()); d.setHtml(a); d.moveChildren(this) } else this.setHtml(a) }, appendText: function (a) {
                    null !=
                    this.$.text && CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? this.$.text += a : this.append(new CKEDITOR.dom.text(a))
                }, appendBogus: function (a) { if (a || CKEDITOR.env.needsBrFiller) { for (a = this.getLast() ; a && a.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.rtrim(a.getText()) ;) a = a.getPrevious(); a && a.is && a.is("br") || (a = this.getDocument().createElement("br"), CKEDITOR.env.gecko && a.setAttribute("type", "_moz"), this.append(a)) } }, breakParent: function (a, d) {
                    var b = new CKEDITOR.dom.range(this.getDocument()); b.setStartAfter(this); b.setEndAfter(a);
                    var g = b.extractContents(!1, d || !1), c; b.insertNode(this.remove()); if (CKEDITOR.env.ie && !CKEDITOR.env.edge) { for (b = new CKEDITOR.dom.element("div") ; c = g.getFirst() ;) c.$.style.backgroundColor && (c.$.style.backgroundColor = c.$.style.backgroundColor), b.append(c); b.insertAfter(this); b.remove(!0) } else g.insertAfterNode(this)
                }, contains: document.compareDocumentPosition ? function (a) { return !!(this.$.compareDocumentPosition(a.$) & 16) } : function (a) {
                    var d = this.$; return a.type != CKEDITOR.NODE_ELEMENT ? d.contains(a.getParent().$) :
                    d != a.$ && d.contains(a.$)
                }, focus: function () { function a() { try { this.$.focus() } catch (d) { } } return function (d) { d ? CKEDITOR.tools.setTimeout(a, 100, this) : a.call(this) } }(), getHtml: function () { var a = this.$.innerHTML; return CKEDITOR.env.ie ? a.replace(/<\?[^>]*>/g, "") : a }, getOuterHtml: function () { if (this.$.outerHTML) return this.$.outerHTML.replace(/<\?[^>]*>/, ""); var a = this.$.ownerDocument.createElement("div"); a.appendChild(this.$.cloneNode(!0)); return a.innerHTML }, getClientRect: function (a) {
                    var d = CKEDITOR.tools.extend({},
                    this.$.getBoundingClientRect()); !d.width && (d.width = d.right - d.left); !d.height && (d.height = d.bottom - d.top); return a ? CKEDITOR.tools.getAbsoluteRectPosition(this.getWindow(), d) : d
                }, setHtml: CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? function (a) {
                    try { var d = this.$; if (this.getParent()) return d.innerHTML = a; var b = this.getDocument()._getHtml5ShivFrag(); b.appendChild(d); d.innerHTML = a; b.removeChild(d); return a } catch (g) {
                        this.$.innerHTML = ""; d = new CKEDITOR.dom.element("body", this.getDocument()); d.$.innerHTML = a; for (d = d.getChildren() ; d.count() ;) this.append(d.getItem(0));
                        return a
                    }
                } : function (a) { return this.$.innerHTML = a }, setText: function () { var a = document.createElement("p"); a.innerHTML = "x"; a = a.textContent; return function (d) { this.$[a ? "textContent" : "innerText"] = d } }(), getAttribute: function () {
                    var a = function (a) { return this.$.getAttribute(a, 2) }; return CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function (a) {
                        switch (a) {
                            case "class": a = "className"; break; case "http-equiv": a = "httpEquiv"; break; case "name": return this.$.name; case "tabindex": return a = this.$.getAttribute(a,
                            2), 0 !== a && 0 === this.$.tabIndex && (a = null), a; case "checked": return a = this.$.attributes.getNamedItem(a), (a.specified ? a.nodeValue : this.$.checked) ? "checked" : null; case "hspace": case "value": return this.$[a]; case "style": return this.$.style.cssText; case "contenteditable": case "contentEditable": return this.$.attributes.getNamedItem("contentEditable").specified ? this.$.getAttribute("contentEditable") : null
                        } return this.$.getAttribute(a, 2)
                    } : a
                }(), getAttributes: function (a) {
                    var d = {}, b = this.$.attributes, g; a = CKEDITOR.tools.isArray(a) ?
                        a : []; for (g = 0; g < b.length; g++) -1 === CKEDITOR.tools.indexOf(a, b[g].name) && (d[b[g].name] = b[g].value); return d
                }, getChildren: function () { return new CKEDITOR.dom.nodeList(this.$.childNodes) }, getClientSize: function () { return { width: this.$.clientWidth, height: this.$.clientHeight } }, getComputedStyle: document.defaultView && document.defaultView.getComputedStyle ? function (a) { var d = this.getWindow().$.getComputedStyle(this.$, null); return d ? d.getPropertyValue(a) : "" } : function (a) { return this.$.currentStyle[CKEDITOR.tools.cssStyleToDomStyle(a)] },
                getDtd: function () { var a = CKEDITOR.dtd[this.getName()]; this.getDtd = function () { return a }; return a }, getElementsByTag: CKEDITOR.dom.document.prototype.getElementsByTag, getTabIndex: function () { var a = this.$.tabIndex; return 0 !== a || CKEDITOR.dtd.$tabIndex[this.getName()] || 0 === parseInt(this.getAttribute("tabindex"), 10) ? a : -1 }, getText: function () { return this.$.textContent || this.$.innerText || "" }, getWindow: function () { return this.getDocument().getWindow() }, getId: function () { return this.$.id || null }, getNameAtt: function () {
                    return this.$.name ||
                    null
                }, getName: function () { var a = this.$.nodeName.toLowerCase(); if (CKEDITOR.env.ie && 8 >= document.documentMode) { var d = this.$.scopeName; "HTML" != d && (a = d.toLowerCase() + ":" + a) } this.getName = function () { return a }; return this.getName() }, getValue: function () { return this.$.value }, getFirst: function (a) { var d = this.$.firstChild; (d = d && new CKEDITOR.dom.node(d)) && a && !a(d) && (d = d.getNext(a)); return d }, getLast: function (a) { var d = this.$.lastChild; (d = d && new CKEDITOR.dom.node(d)) && a && !a(d) && (d = d.getPrevious(a)); return d }, getStyle: function (a) { return this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)] },
                is: function () { var a = this.getName(); if ("object" == typeof arguments[0]) return !!arguments[0][a]; for (var d = 0; d < arguments.length; d++) if (arguments[d] == a) return !0; return !1 }, isEditable: function (a) {
                    var d = this.getName(); return this.isReadOnly() || "none" == this.getComputedStyle("display") || "hidden" == this.getComputedStyle("visibility") || CKEDITOR.dtd.$nonEditable[d] || CKEDITOR.dtd.$empty[d] || this.is("a") && (this.data("cke-saved-name") || this.hasAttribute("name")) && !this.getChildCount() ? !1 : !1 !== a ? (a = CKEDITOR.dtd[d] ||
                    CKEDITOR.dtd.span, !(!a || !a["#"])) : !0
                }, isIdentical: function (a) {
                    var d = this.clone(0, 1); a = a.clone(0, 1); d.removeAttributes(["_moz_dirty", "data-cke-expando", "data-cke-saved-href", "data-cke-saved-name"]); a.removeAttributes(["_moz_dirty", "data-cke-expando", "data-cke-saved-href", "data-cke-saved-name"]); if (d.$.isEqualNode) return d.$.style.cssText = CKEDITOR.tools.normalizeCssText(d.$.style.cssText), a.$.style.cssText = CKEDITOR.tools.normalizeCssText(a.$.style.cssText), d.$.isEqualNode(a.$); d = d.getOuterHtml(); a =
                    a.getOuterHtml(); if (CKEDITOR.env.ie && 9 > CKEDITOR.env.version && this.is("a")) { var b = this.getParent(); b.type == CKEDITOR.NODE_ELEMENT && (b = b.clone(), b.setHtml(d), d = b.getHtml(), b.setHtml(a), a = b.getHtml()) } return d == a
                }, isVisible: function () { var a = (this.$.offsetHeight || this.$.offsetWidth) && "hidden" != this.getComputedStyle("visibility"), d, b; a && CKEDITOR.env.webkit && (d = this.getWindow(), !d.equals(CKEDITOR.document.getWindow()) && (b = d.$.frameElement) && (a = (new CKEDITOR.dom.element(b)).isVisible())); return !!a }, isEmptyInlineRemoveable: function () {
                    if (!CKEDITOR.dtd.$removeEmpty[this.getName()]) return !1;
                    for (var a = this.getChildren(), d = 0, b = a.count() ; d < b; d++) { var g = a.getItem(d); if (g.type != CKEDITOR.NODE_ELEMENT || !g.data("cke-bookmark")) if (g.type == CKEDITOR.NODE_ELEMENT && !g.isEmptyInlineRemoveable() || g.type == CKEDITOR.NODE_TEXT && CKEDITOR.tools.trim(g.getText())) return !1 } return !0
                }, hasAttributes: CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function () {
                    for (var a = this.$.attributes, d = 0; d < a.length; d++) {
                        var b = a[d]; switch (b.nodeName) {
                            case "class": if (this.getAttribute("class")) return !0; case "data-cke-expando": continue;
                            default: if (b.specified) return !0
                        }
                    } return !1
                } : function () { var a = this.$.attributes, d = a.length, b = { "data-cke-expando": 1, _moz_dirty: 1 }; return 0 < d && (2 < d || !b[a[0].nodeName] || 2 == d && !b[a[1].nodeName]) }, hasAttribute: function () {
                    function a(d) {
                        var b = this.$.attributes.getNamedItem(d); if ("input" == this.getName()) switch (d) { case "class": return 0 < this.$.className.length; case "checked": return !!this.$.checked; case "value": return d = this.getAttribute("type"), "checkbox" == d || "radio" == d ? "on" != this.$.value : !!this.$.value } return b ?
                        b.specified : !1
                    } return CKEDITOR.env.ie ? 8 > CKEDITOR.env.version ? function (d) { return "name" == d ? !!this.$.name : a.call(this, d) } : a : function (a) { return !!this.$.attributes.getNamedItem(a) }
                }(), hide: function () { this.setStyle("display", "none") }, moveChildren: function (a, d) { var b = this.$; a = a.$; if (b != a) { var g; if (d) for (; g = b.lastChild;) a.insertBefore(b.removeChild(g), a.firstChild); else for (; g = b.firstChild;) a.appendChild(b.removeChild(g)) } }, mergeSiblings: function () {
                    function a(d, b, g) {
                        if (b && b.type == CKEDITOR.NODE_ELEMENT) {
                            for (var c =
                            []; b.data("cke-bookmark") || b.isEmptyInlineRemoveable() ;) if (c.push(b), b = g ? b.getNext() : b.getPrevious(), !b || b.type != CKEDITOR.NODE_ELEMENT) return; if (d.isIdentical(b)) { for (var e = g ? d.getLast() : d.getFirst() ; c.length;) c.shift().move(d, !g); b.moveChildren(d, !g); b.remove(); e && e.type == CKEDITOR.NODE_ELEMENT && e.mergeSiblings() }
                        }
                    } return function (d) { if (!1 === d || CKEDITOR.dtd.$removeEmpty[this.getName()] || this.is("a")) a(this, this.getNext(), !0), a(this, this.getPrevious()) }
                }(), show: function () {
                    this.setStyles({
                        display: "",
                        visibility: ""
                    })
                }, setAttribute: function () {
                    var a = function (a, b) { this.$.setAttribute(a, b); return this }; return CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function (d, b) { "class" == d ? this.$.className = b : "style" == d ? this.$.style.cssText = b : "tabindex" == d ? this.$.tabIndex = b : "checked" == d ? this.$.checked = b : "contenteditable" == d ? a.call(this, "contentEditable", b) : a.apply(this, arguments); return this } : CKEDITOR.env.ie8Compat && CKEDITOR.env.secure ? function (d, b) {
                        if ("src" == d && b.match(/^http:\/\//)) try {
                            a.apply(this,
                            arguments)
                        } catch (g) { } else a.apply(this, arguments); return this
                    } : a
                }(), setAttributes: function (a) { for (var d in a) this.setAttribute(d, a[d]); return this }, setValue: function (a) { this.$.value = a; return this }, removeAttribute: function () { var a = function (a) { this.$.removeAttribute(a) }; return CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function (a) { "class" == a ? a = "className" : "tabindex" == a ? a = "tabIndex" : "contenteditable" == a && (a = "contentEditable"); this.$.removeAttribute(a) } : a }(), removeAttributes: function (a) {
                    if (CKEDITOR.tools.isArray(a)) for (var d =
                    0; d < a.length; d++) this.removeAttribute(a[d]); else for (d in a = a || this.getAttributes(), a) a.hasOwnProperty(d) && this.removeAttribute(d)
                }, removeStyle: function (a) {
                    var d = this.$.style; if (d.removeProperty || "border" != a && "margin" != a && "padding" != a) d.removeProperty ? d.removeProperty(a) : d.removeAttribute(CKEDITOR.tools.cssStyleToDomStyle(a)), this.$.style.cssText || this.removeAttribute("style"); else {
                        var b = ["top", "left", "right", "bottom"], g; "border" == a && (g = ["color", "style", "width"]); for (var d = [], c = 0; c < b.length; c++) if (g) for (var e =
                        0; e < g.length; e++) d.push([a, b[c], g[e]].join("-")); else d.push([a, b[c]].join("-")); for (a = 0; a < d.length; a++) this.removeStyle(d[a])
                    }
                }, setStyle: function (a, d) { this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)] = d; return this }, setStyles: function (a) { for (var d in a) this.setStyle(d, a[d]); return this }, setOpacity: function (a) { CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? (a = Math.round(100 * a), this.setStyle("filter", 100 <= a ? "" : "progid:DXImageTransform.Microsoft.Alpha(opacity\x3d" + a + ")")) : this.setStyle("opacity", a) }, unselectable: function () {
                    this.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select",
                    "none")); if (CKEDITOR.env.ie) { this.setAttribute("unselectable", "on"); for (var a, d = this.getElementsByTag("*"), b = 0, g = d.count() ; b < g; b++) a = d.getItem(b), a.setAttribute("unselectable", "on") }
                }, getPositionedAncestor: function () { for (var a = this; "html" != a.getName() ;) { if ("static" != a.getComputedStyle("position")) return a; a = a.getParent() } return null }, getDocumentPosition: function (a) {
                    var d = 0, b = 0, g = this.getDocument(), c = g.getBody(), e = "BackCompat" == g.$.compatMode; if (document.documentElement.getBoundingClientRect && (CKEDITOR.env.ie ?
                    8 !== CKEDITOR.env.version : 1)) { var f = this.$.getBoundingClientRect(), h = g.$.documentElement, m = h.clientTop || c.$.clientTop || 0, u = h.clientLeft || c.$.clientLeft || 0, x = !0; CKEDITOR.env.ie && (x = g.getDocumentElement().contains(this), g = g.getBody().contains(this), x = e && g || !e && x); x && (CKEDITOR.env.webkit || CKEDITOR.env.ie && 12 <= CKEDITOR.env.version ? (d = c.$.scrollLeft || h.scrollLeft, b = c.$.scrollTop || h.scrollTop) : (b = e ? c.$ : h, d = b.scrollLeft, b = b.scrollTop), d = f.left + d - u, b = f.top + b - m) } else for (m = this, u = null; m && "body" != m.getName() &&
                    "html" != m.getName() ;) { d += m.$.offsetLeft - m.$.scrollLeft; b += m.$.offsetTop - m.$.scrollTop; m.equals(this) || (d += m.$.clientLeft || 0, b += m.$.clientTop || 0); for (; u && !u.equals(m) ;) d -= u.$.scrollLeft, b -= u.$.scrollTop, u = u.getParent(); u = m; m = (f = m.$.offsetParent) ? new CKEDITOR.dom.element(f) : null } a && (f = this.getWindow(), m = a.getWindow(), !f.equals(m) && f.$.frameElement && (a = (new CKEDITOR.dom.element(f.$.frameElement)).getDocumentPosition(a), d += a.x, b += a.y)); document.documentElement.getBoundingClientRect || !CKEDITOR.env.gecko ||
                    e || (d += this.$.clientLeft ? 1 : 0, b += this.$.clientTop ? 1 : 0); return { x: d, y: b }
                }, scrollIntoView: function (a) { var b = this.getParent(); if (b) { do if ((b.$.clientWidth && b.$.clientWidth < b.$.scrollWidth || b.$.clientHeight && b.$.clientHeight < b.$.scrollHeight) && !b.is("body") && this.scrollIntoParent(b, a, 1), b.is("html")) { var c = b.getWindow(); try { var g = c.$.frameElement; g && (b = new CKEDITOR.dom.element(g)) } catch (e) { } } while (b = b.getParent()) } }, scrollIntoParent: function (a, b, c) {
                    var g, e, f, h; function m(g, b) {
                        /body|html/.test(a.getName()) ?
                        a.getWindow().$.scrollBy(g, b) : (a.$.scrollLeft += g, a.$.scrollTop += b)
                    } function p(a, g) { var b = { x: 0, y: 0 }; if (!a.is(x ? "body" : "html")) { var d = a.$.getBoundingClientRect(); b.x = d.left; b.y = d.top } d = a.getWindow(); d.equals(g) || (d = p(CKEDITOR.dom.element.get(d.$.frameElement), g), b.x += d.x, b.y += d.y); return b } function u(a, g) { return parseInt(a.getComputedStyle("margin-" + g) || 0, 10) || 0 } !a && (a = this.getWindow()); f = a.getDocument(); var x = "BackCompat" == f.$.compatMode; a instanceof CKEDITOR.dom.window && (a = x ? f.getBody() : f.getDocumentElement());
                    CKEDITOR.env.webkit && (f = this.getEditor(!1)) && (f._.previousScrollTop = null); f = a.getWindow(); e = p(this, f); var t = p(a, f), B = this.$.offsetHeight; g = this.$.offsetWidth; var v = a.$.clientHeight, y = a.$.clientWidth; f = e.x - u(this, "left") - t.x || 0; h = e.y - u(this, "top") - t.y || 0; g = e.x + g + u(this, "right") - (t.x + y) || 0; e = e.y + B + u(this, "bottom") - (t.y + v) || 0; (0 > h || 0 < e) && m(0, !0 === b ? h : !1 === b ? e : 0 > h ? h : e); c && (0 > f || 0 < g) && m(0 > f ? f : g, 0)
                }, setState: function (a, b, c) {
                    b = b || "cke"; switch (a) {
                        case CKEDITOR.TRISTATE_ON: this.addClass(b + "_on"); this.removeClass(b +
                        "_off"); this.removeClass(b + "_disabled"); c && this.setAttribute("aria-pressed", !0); c && this.removeAttribute("aria-disabled"); break; case CKEDITOR.TRISTATE_DISABLED: this.addClass(b + "_disabled"); this.removeClass(b + "_off"); this.removeClass(b + "_on"); c && this.setAttribute("aria-disabled", !0); c && this.removeAttribute("aria-pressed"); break; default: this.addClass(b + "_off"), this.removeClass(b + "_on"), this.removeClass(b + "_disabled"), c && this.removeAttribute("aria-pressed"), c && this.removeAttribute("aria-disabled")
                    }
                },
                getFrameDocument: function () { var a = this.$; try { a.contentWindow.document } catch (b) { a.src = a.src } return a && new CKEDITOR.dom.document(a.contentWindow.document) }, copyAttributes: function (a, b) {
                    var c = this.$.attributes; b = b || {}; for (var g = 0; g < c.length; g++) { var e = c[g], f = e.nodeName.toLowerCase(), h; if (!(f in b)) if ("checked" == f && (h = this.getAttribute(f))) a.setAttribute(f, h); else if (!CKEDITOR.env.ie || this.hasAttribute(f)) h = this.getAttribute(f), null === h && (h = e.nodeValue), a.setAttribute(f, h) } "" !== this.$.style.cssText &&
                    (a.$.style.cssText = this.$.style.cssText)
                }, renameNode: function (a) { if (this.getName() != a) { var b = this.getDocument(); a = new CKEDITOR.dom.element(a, b); this.copyAttributes(a); this.moveChildren(a); this.getParent(!0) && this.$.parentNode.replaceChild(a.$, this.$); a.$["data-cke-expando"] = this.$["data-cke-expando"]; this.$ = a.$; delete this.getName } }, getChild: function () {
                    function a(b, c) { var g = b.childNodes; if (0 <= c && c < g.length) return g[c] } return function (b) {
                        var c = this.$; if (b.slice) for (b = b.slice() ; 0 < b.length && c;) c = a(c,
                        b.shift()); else c = a(c, b); return c ? new CKEDITOR.dom.node(c) : null
                    }
                }(), getChildCount: function () { return this.$.childNodes.length }, disableContextMenu: function () { function a(b) { return b.type == CKEDITOR.NODE_ELEMENT && b.hasClass("cke_enable_context_menu") } this.on("contextmenu", function (b) { b.data.getTarget().getAscendant(a, !0) || b.data.preventDefault() }) }, getDirection: function (a) {
                    return a ? this.getComputedStyle("direction") || this.getDirection() || this.getParent() && this.getParent().getDirection(1) || this.getDocument().$.dir ||
                    "ltr" : this.getStyle("direction") || this.getAttribute("dir")
                }, data: function (a, b) { a = "data-" + a; if (void 0 === b) return this.getAttribute(a); !1 === b ? this.removeAttribute(a) : this.setAttribute(a, b); return null }, getEditor: function (a) { var b = CKEDITOR.instances, c, g, e; a = a || void 0 === a; for (c in b) if (g = b[c], g.element.equals(this) && g.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO || !a && (e = g.editable()) && (e.equals(this) || e.contains(this))) return g; return null }, find: function (a) {
                    var b = f(this); a = new CKEDITOR.dom.nodeList(this.$.querySelectorAll(e(this,
                    a))); b(); return a
                }, findOne: function (a) { var b = f(this); a = this.$.querySelector(e(this, a)); b(); return a ? new CKEDITOR.dom.element(a) : null }, forEach: function (a, b, c) { if (!(c || b && this.type != b)) var g = a(this); if (!1 !== g) { c = this.getChildren(); for (var e = 0; e < c.count() ; e++) g = c.getItem(e), g.type == CKEDITOR.NODE_ELEMENT ? g.forEach(a, b) : b && g.type != b || a(g) } }, fireEventHandler: function (a, b) {
                    var c = "on" + a, g = this.$; if (CKEDITOR.env.ie && 9 > CKEDITOR.env.version) {
                        var e = g.ownerDocument.createEventObject(), f; for (f in b) e[f] = b[f]; g.fireEvent(c,
                        e)
                    } else g[g[a] ? a : c](b)
                }, isDetached: function () { var a = this.getDocument(), b = a.getDocumentElement(); return b.equals(this) || b.contains(this) ? !CKEDITOR.env.ie || 8 < CKEDITOR.env.version && !CKEDITOR.env.quirks ? !a.$.defaultView : !1 : !0 }
            }); var h = { width: ["border-left-width", "border-right-width", "padding-left", "padding-right"], height: ["border-top-width", "border-bottom-width", "padding-top", "padding-bottom"] }; CKEDITOR.dom.element.prototype.setSize = function (a, d, c) {
                "number" == typeof d && (!c || CKEDITOR.env.ie && CKEDITOR.env.quirks ||
                (d -= b.call(this, a)), this.setStyle(a, d + "px"))
            }; CKEDITOR.dom.element.prototype.getSize = function (a, d) { var c = Math.max(this.$["offset" + CKEDITOR.tools.capitalize(a)], this.$["client" + CKEDITOR.tools.capitalize(a)]) || 0; d && (c -= b.call(this, a)); return c }
        })(); CKEDITOR.dom.documentFragment = function (a) { a = a || CKEDITOR.document; this.$ = a.type == CKEDITOR.NODE_DOCUMENT ? a.$.createDocumentFragment() : a }; CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype, CKEDITOR.dom.element.prototype, {
            type: CKEDITOR.NODE_DOCUMENT_FRAGMENT,
            insertAfterNode: function (a) { a = a.$; a.parentNode.insertBefore(this.$, a.nextSibling) }, getHtml: function () { var a = new CKEDITOR.dom.element("div"); this.clone(1, 1).appendTo(a); return a.getHtml().replace(/\s*data-cke-expando=".*?"/g, "") }
        }, !0, { append: 1, appendBogus: 1, clone: 1, getFirst: 1, getHtml: 1, getLast: 1, getParent: 1, getNext: 1, getPrevious: 1, appendTo: 1, moveChildren: 1, insertBefore: 1, insertAfterNode: 1, replace: 1, trim: 1, type: 1, ltrim: 1, rtrim: 1, getDocument: 1, getChildCount: 1, getChild: 1, getChildren: 1 }); CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype,
        CKEDITOR.dom.document.prototype, !0, { find: 1, findOne: 1 }); (function () {
            function a(a, g) {
                var b = this.range; if (this._.end) return null; if (!this._.start) { this._.start = 1; if (b.collapsed) return this.end(), null; b.optimize() } var d, c = b.startContainer; d = b.endContainer; var e = b.startOffset, n = b.endOffset, k, f = this.guard, h = this.type, m = a ? "getPreviousSourceNode" : "getNextSourceNode"; if (!a && !this._.guardLTR) {
                    var l = d.type == CKEDITOR.NODE_ELEMENT ? d : d.getParent(), D = d.type == CKEDITOR.NODE_ELEMENT ? d.getChild(n) : d.getNext(); this._.guardLTR =
                    function (a, g) { return (!g || !l.equals(a)) && (!D || !a.equals(D)) && (a.type != CKEDITOR.NODE_ELEMENT || !g || !a.equals(b.root)) }
                } if (a && !this._.guardRTL) { var G = c.type == CKEDITOR.NODE_ELEMENT ? c : c.getParent(), E = c.type == CKEDITOR.NODE_ELEMENT ? e ? c.getChild(e - 1) : null : c.getPrevious(); this._.guardRTL = function (a, g) { return (!g || !G.equals(a)) && (!E || !a.equals(E)) && (a.type != CKEDITOR.NODE_ELEMENT || !g || !a.equals(b.root)) } } var J = a ? this._.guardRTL : this._.guardLTR; k = f ? function (a, g) { return !1 === J(a, g) ? !1 : f(a, g) } : J; this.current ? d = this.current[m](!1,
                h, k) : (a ? d.type == CKEDITOR.NODE_ELEMENT && (d = 0 < n ? d.getChild(n - 1) : !1 === k(d, !0) ? null : d.getPreviousSourceNode(!0, h, k)) : (d = c, d.type == CKEDITOR.NODE_ELEMENT && ((d = d.getChild(e)) || (d = !1 === k(c, !0) ? null : c.getNextSourceNode(!0, h, k)))), d && !1 === k(d) && (d = null)); for (; d && !this._.end;) { this.current = d; if (!this.evaluator || !1 !== this.evaluator(d)) { if (!g) return d } else if (g && this.evaluator) return !1; d = d[m](!1, h, k) } this.end(); return this.current = null
            } function f(g) { for (var b, d = null; b = a.call(this, g) ;) d = b; return d } CKEDITOR.dom.walker =
            CKEDITOR.tools.createClass({ $: function (a) { this.range = a; this._ = {} }, proto: { end: function () { this._.end = 1 }, next: function () { return a.call(this) }, previous: function () { return a.call(this, 1) }, checkForward: function () { return !1 !== a.call(this, 0, 1) }, checkBackward: function () { return !1 !== a.call(this, 1, 1) }, lastForward: function () { return f.call(this) }, lastBackward: function () { return f.call(this, 1) }, reset: function () { delete this.current; this._ = {} } } }); var e = {
                block: 1, "list-item": 1, table: 1, "table-row-group": 1, "table-header-group": 1,
                "table-footer-group": 1, "table-row": 1, "table-column-group": 1, "table-column": 1, "table-cell": 1, "table-caption": 1
            }, b = { absolute: 1, fixed: 1 }; CKEDITOR.dom.element.prototype.isBlockBoundary = function (a) { return "none" != this.getComputedStyle("float") || this.getComputedStyle("position") in b || !e[this.getComputedStyle("display")] ? !!(this.is(CKEDITOR.dtd.$block) || a && this.is(a)) : !0 }; CKEDITOR.dom.walker.blockBoundary = function (a) { return function (g) { return !(g.type == CKEDITOR.NODE_ELEMENT && g.isBlockBoundary(a)) } }; CKEDITOR.dom.walker.listItemBoundary =
            function () { return this.blockBoundary({ br: 1 }) }; CKEDITOR.dom.walker.bookmark = function (a, g) { function b(a) { return a && a.getName && "span" == a.getName() && a.data("cke-bookmark") } return function (d) { var c, e; c = d && d.type != CKEDITOR.NODE_ELEMENT && (e = d.getParent()) && b(e); c = a ? c : c || b(d); return !!(g ^ c) } }; CKEDITOR.dom.walker.whitespaces = function (a) {
                return function (g) {
                    var b; g && g.type == CKEDITOR.NODE_TEXT && (b = !CKEDITOR.tools.trim(g.getText()) || CKEDITOR.env.webkit && g.getText() == CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE);
                    return !!(a ^ b)
                }
            }; CKEDITOR.dom.walker.invisible = function (a) { var g = CKEDITOR.dom.walker.whitespaces(), b = CKEDITOR.env.webkit ? 1 : 0; return function (d) { g(d) ? d = 1 : (d.type == CKEDITOR.NODE_TEXT && (d = d.getParent()), d = d.$.offsetWidth <= b); return !!(a ^ d) } }; CKEDITOR.dom.walker.nodeType = function (a, g) { return function (b) { return !!(g ^ b.type == a) } }; CKEDITOR.dom.walker.bogus = function (a) {
                function g(a) { return !m(a) && !h(a) } return function (b) {
                    var d = CKEDITOR.env.needsBrFiller ? b.is && b.is("br") : b.getText && c.test(b.getText()); d && (d = b.getParent(),
                    b = b.getNext(g), d = d.isBlockBoundary() && (!b || b.type == CKEDITOR.NODE_ELEMENT && b.isBlockBoundary())); return !!(a ^ d)
                }
            }; CKEDITOR.dom.walker.temp = function (a) { return function (g) { g.type != CKEDITOR.NODE_ELEMENT && (g = g.getParent()); g = g && g.hasAttribute("data-cke-temp"); return !!(a ^ g) } }; var c = /^[\t\r\n ]*(?:&nbsp;|\xa0)$/, m = CKEDITOR.dom.walker.whitespaces(), h = CKEDITOR.dom.walker.bookmark(), l = CKEDITOR.dom.walker.temp(), d = function (a) { return h(a) || m(a) || a.type == CKEDITOR.NODE_ELEMENT && a.is(CKEDITOR.dtd.$inline) && !a.is(CKEDITOR.dtd.$empty) };
            CKEDITOR.dom.walker.ignored = function (a) { return function (g) { g = m(g) || h(g) || l(g); return !!(a ^ g) } }; var k = CKEDITOR.dom.walker.ignored(); CKEDITOR.dom.walker.empty = function (a) { return function (g) { for (var b = 0, d = g.getChildCount() ; b < d; ++b) if (!k(g.getChild(b))) return !!a; return !a } }; var g = CKEDITOR.dom.walker.empty(), n = CKEDITOR.dom.walker.validEmptyBlockContainers = CKEDITOR.tools.extend(function (a) { var g = {}, b; for (b in a) CKEDITOR.dtd[b]["#"] && (g[b] = 1); return g }(CKEDITOR.dtd.$block), { caption: 1, td: 1, th: 1 }); CKEDITOR.dom.walker.editable =
            function (a) { return function (b) { b = k(b) ? !1 : b.type == CKEDITOR.NODE_TEXT || b.type == CKEDITOR.NODE_ELEMENT && (b.is(CKEDITOR.dtd.$inline) || b.is("hr") || "false" == b.getAttribute("contenteditable") || !CKEDITOR.env.needsBrFiller && b.is(n) && g(b)) ? !0 : !1; return !!(a ^ b) } }; CKEDITOR.dom.element.prototype.getBogus = function () { var a = this; do a = a.getPreviousSourceNode(); while (d(a)); return a && (CKEDITOR.env.needsBrFiller ? a.is && a.is("br") : a.getText && c.test(a.getText())) ? a : !1 }
        })(); CKEDITOR.dom.range = function (a) {
            this.endOffset = this.endContainer =
            this.startOffset = this.startContainer = null; this.collapsed = !0; var f = a instanceof CKEDITOR.dom.document; this.document = f ? a : a.getDocument(); this.root = f ? a.getBody() : a
        }; (function () {
            function a(a) { a.collapsed = a.startContainer && a.endContainer && a.startContainer.equals(a.endContainer) && a.startOffset == a.endOffset } function f(a, b, d, c, e) {
                function k(a, b, g, d) { var c = g ? a.getPrevious() : a.getNext(); if (d && m) return c; v || d ? b.append(a.clone(!0, e), g) : (a.remove(), l && b.append(a, g)); return c } function f() {
                    var a, b, g, d = Math.min(I.length,
                    K.length); for (a = 0; a < d; a++) if (b = I[a], g = K[a], !b.equals(g)) return a; return a - 1
                } function h() {
                    var b = C - 1, d = J && H && !y.equals(z); b < L - 1 || b < Q - 1 || d ? (d ? a.moveToPosition(z, CKEDITOR.POSITION_BEFORE_START) : Q == b + 1 && E ? a.moveToPosition(K[b], CKEDITOR.POSITION_BEFORE_END) : a.moveToPosition(K[b + 1], CKEDITOR.POSITION_BEFORE_START), c && (b = I[b + 1]) && b.type == CKEDITOR.NODE_ELEMENT && (d = CKEDITOR.dom.element.createFromHtml('\x3cspan data-cke-bookmark\x3d"1" style\x3d"display:none"\x3e\x26nbsp;\x3c/span\x3e', a.document), d.insertAfter(b),
                    b.mergeSiblings(!1), a.moveToBookmark({ startNode: d }))) : a.collapse(!0)
                } a.optimizeBookmark(); var m = 0 === b, l = 1 == b, v = 2 == b; b = v || l; var y = a.startContainer, z = a.endContainer, A = a.startOffset, D = a.endOffset, G, E, J, H, F, M; if (v && z.type == CKEDITOR.NODE_TEXT && (y.equals(z) || y.type === CKEDITOR.NODE_ELEMENT && y.getFirst().equals(z))) d.append(a.document.createText(z.substring(A, D))); else {
                    z.type == CKEDITOR.NODE_TEXT ? v ? M = !0 : z = z.split(D) : 0 < z.getChildCount() ? D >= z.getChildCount() ? (z = z.getChild(D - 1), E = !0) : z = z.getChild(D) : H = E = !0; y.type ==
                    CKEDITOR.NODE_TEXT ? v ? F = !0 : y.split(A) : 0 < y.getChildCount() ? 0 === A ? (y = y.getChild(A), G = !0) : y = y.getChild(A - 1) : J = G = !0; for (var I = y.getParents(), K = z.getParents(), C = f(), L = I.length - 1, Q = K.length - 1, O = d, X, T, Y, ha = -1, W = C; W <= L; W++) { T = I[W]; Y = T.getNext(); for (W != L || T.equals(K[W]) && L < Q ? b && (X = O.append(T.clone(0, e))) : G ? k(T, O, !1, J) : F && O.append(a.document.createText(T.substring(A))) ; Y;) { if (Y.equals(K[W])) { ha = W; break } Y = k(Y, O) } O = X } O = d; for (W = C; W <= Q; W++) if (d = K[W], Y = d.getPrevious(), d.equals(I[W])) b && (O = O.getChild(0)); else {
                        W !=
                        Q || d.equals(I[W]) && Q < L ? b && (X = O.append(d.clone(0, e))) : E ? k(d, O, !1, H) : M && O.append(a.document.createText(d.substring(0, D))); if (W > ha) for (; Y;) Y = k(Y, O, !0); O = X
                    } v || h()
                }
            } function e() { var a = !1, b = CKEDITOR.dom.walker.whitespaces(), d = CKEDITOR.dom.walker.bookmark(!0), c = CKEDITOR.dom.walker.bogus(); return function (e) { return d(e) || b(e) ? !0 : c(e) && !a ? a = !0 : e.type == CKEDITOR.NODE_TEXT && (e.hasAscendant("pre") || CKEDITOR.tools.trim(e.getText()).length) || e.type == CKEDITOR.NODE_ELEMENT && !e.is(m) ? !1 : !0 } } function b(a) {
                var b = CKEDITOR.dom.walker.whitespaces(),
                d = CKEDITOR.dom.walker.bookmark(1); return function (c) { return d(c) || b(c) ? !0 : !a && h(c) || c.type == CKEDITOR.NODE_ELEMENT && c.is(CKEDITOR.dtd.$removeEmpty) }
            } function c(a) { return function () { var b; return this[a ? "getPreviousNode" : "getNextNode"](function (a) { !b && k(a) && (b = a); return d(a) && !(h(a) && a.equals(b)) }) } } var m = { abbr: 1, acronym: 1, b: 1, bdo: 1, big: 1, cite: 1, code: 1, del: 1, dfn: 1, em: 1, font: 1, i: 1, ins: 1, label: 1, kbd: 1, q: 1, samp: 1, small: 1, span: 1, strike: 1, strong: 1, sub: 1, sup: 1, tt: 1, u: 1, "var": 1 }, h = CKEDITOR.dom.walker.bogus(),
            l = /^[\t\r\n ]*(?:&nbsp;|\xa0)$/, d = CKEDITOR.dom.walker.editable(), k = CKEDITOR.dom.walker.ignored(!0); CKEDITOR.dom.range.prototype = {
                clone: function () { var a = new CKEDITOR.dom.range(this.root); a._setStartContainer(this.startContainer); a.startOffset = this.startOffset; a._setEndContainer(this.endContainer); a.endOffset = this.endOffset; a.collapsed = this.collapsed; return a }, collapse: function (a) {
                    a ? (this._setEndContainer(this.startContainer), this.endOffset = this.startOffset) : (this._setStartContainer(this.endContainer),
                    this.startOffset = this.endOffset); this.collapsed = !0
                }, cloneContents: function (a) { var b = new CKEDITOR.dom.documentFragment(this.document); this.collapsed || f(this, 2, b, !1, "undefined" == typeof a ? !0 : a); return b }, deleteContents: function (a) { this.collapsed || f(this, 0, null, a) }, extractContents: function (a, b) { var d = new CKEDITOR.dom.documentFragment(this.document); this.collapsed || f(this, 1, d, a, "undefined" == typeof b ? !0 : b); return d }, equals: function (a) {
                    return this.startOffset === a.startOffset && this.endOffset === a.endOffset &&
                    this.startContainer.equals(a.startContainer) && this.endContainer.equals(a.endContainer)
                }, createBookmark: function (a) {
                    function b(a) { return a.getAscendant(function (a) { var b; if (b = a.data && a.data("cke-temp")) b = -1 === CKEDITOR.tools.array.indexOf(["cke_copybin", "cke_pastebin"], a.getAttribute("id")); return b }, !0) } var d = this.startContainer, c = this.endContainer, e = this.collapsed, k, f, h, m; k = this.document.createElement("span"); k.data("cke-bookmark", 1); k.setStyle("display", "none"); k.setHtml("\x26nbsp;"); a && (h = "cke_bm_" +
                    CKEDITOR.tools.getNextNumber(), k.setAttribute("id", h + (e ? "C" : "S"))); e || (f = k.clone(), f.setHtml("\x26nbsp;"), a && f.setAttribute("id", h + "E"), m = this.clone(), b(c) && (c = b(c), m.moveToPosition(c, CKEDITOR.POSITION_AFTER_END)), m.collapse(), m.insertNode(f)); m = this.clone(); b(d) && (c = b(d), m.moveToPosition(c, CKEDITOR.POSITION_BEFORE_START)); m.collapse(!0); m.insertNode(k); f ? (this.setStartAfter(k), this.setEndBefore(f)) : this.moveToPosition(k, CKEDITOR.POSITION_AFTER_END); return {
                        startNode: a ? h + (e ? "C" : "S") : k, endNode: a ? h +
                        "E" : f, serializable: a, collapsed: e
                    }
                }, createBookmark2: function () {
                    function a(b) {
                        var g = b.container, c = b.offset, e; e = g; var k = c; e = e.type != CKEDITOR.NODE_ELEMENT || 0 === k || k == e.getChildCount() ? 0 : e.getChild(k - 1).type == CKEDITOR.NODE_TEXT && e.getChild(k).type == CKEDITOR.NODE_TEXT; e && (g = g.getChild(c - 1), c = g.getLength()); if (g.type == CKEDITOR.NODE_ELEMENT && 0 < c) { a: { for (e = g; c--;) if (k = e.getChild(c).getIndex(!0), 0 <= k) { c = k; break a } c = -1 } c += 1 } if (g.type == CKEDITOR.NODE_TEXT) {
                            e = g; for (k = 0; (e = e.getPrevious()) && e.type == CKEDITOR.NODE_TEXT;) k +=
                            e.getText().replace(CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE, "").length; e = k; g.isEmpty() ? (k = g.getPrevious(d), e ? (c = e, g = k ? k.getNext() : g.getParent().getFirst()) : (g = g.getParent(), c = k ? k.getIndex(!0) + 1 : 0)) : c += e
                        } b.container = g; b.offset = c
                    } function b(a, g) { var d = g.getCustomData("cke-fillingChar"); if (d) { var c = a.container; d.equals(c) && (a.offset -= CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE.length, 0 >= a.offset && (a.offset = c.getIndex(), a.container = c.getParent())) } } var d = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_TEXT,
                    !0); return function (d) { var c = this.collapsed, e = { container: this.startContainer, offset: this.startOffset }, k = { container: this.endContainer, offset: this.endOffset }; d && (a(e), b(e, this.root), c || (a(k), b(k, this.root))); return { start: e.container.getAddress(d), end: c ? null : k.container.getAddress(d), startOffset: e.offset, endOffset: k.offset, normalized: d, collapsed: c, is2: !0 } }
                }(), moveToBookmark: function (a) {
                    if (a.is2) {
                        var b = this.document.getByAddress(a.start, a.normalized), d = a.startOffset, c = a.end && this.document.getByAddress(a.end,
                        a.normalized); a = a.endOffset; this.setStart(b, d); c ? this.setEnd(c, a) : this.collapse(!0)
                    } else b = (d = a.serializable) ? this.document.getById(a.startNode) : a.startNode, a = d ? this.document.getById(a.endNode) : a.endNode, this.setStartBefore(b), b.remove(), a ? (this.setEndBefore(a), a.remove()) : this.collapse(!0)
                }, getBoundaryNodes: function () {
                    var a = this.startContainer, b = this.endContainer, d = this.startOffset, c = this.endOffset, e; if (a.type == CKEDITOR.NODE_ELEMENT) if (e = a.getChildCount(), e > d) a = a.getChild(d); else if (1 > e) a = a.getPreviousSourceNode();
                    else { for (a = a.$; a.lastChild;) a = a.lastChild; a = new CKEDITOR.dom.node(a); a = a.getNextSourceNode() || a } if (b.type == CKEDITOR.NODE_ELEMENT) if (e = b.getChildCount(), e > c) b = b.getChild(c).getPreviousSourceNode(!0); else if (1 > e) b = b.getPreviousSourceNode(); else { for (b = b.$; b.lastChild;) b = b.lastChild; b = new CKEDITOR.dom.node(b) } a.getPosition(b) & CKEDITOR.POSITION_FOLLOWING && (a = b); return { startNode: a, endNode: b }
                }, getCommonAncestor: function (a, b) {
                    var d = this.startContainer, c = this.endContainer, d = d.equals(c) ? a && d.type == CKEDITOR.NODE_ELEMENT &&
                    this.startOffset == this.endOffset - 1 ? d.getChild(this.startOffset) : d : d.getCommonAncestor(c); return b && !d.is ? d.getParent() : d
                }, optimize: function () { var a = this.startContainer, b = this.startOffset; a.type != CKEDITOR.NODE_ELEMENT && (b ? b >= a.getLength() && this.setStartAfter(a) : this.setStartBefore(a)); a = this.endContainer; b = this.endOffset; a.type != CKEDITOR.NODE_ELEMENT && (b ? b >= a.getLength() && this.setEndAfter(a) : this.setEndBefore(a)) }, optimizeBookmark: function () {
                    var a = this.startContainer, b = this.endContainer; a.is && a.is("span") &&
                    a.data("cke-bookmark") && this.setStartAt(a, CKEDITOR.POSITION_BEFORE_START); b && b.is && b.is("span") && b.data("cke-bookmark") && this.setEndAt(b, CKEDITOR.POSITION_AFTER_END)
                }, trim: function (a, b) {
                    var d = this.startContainer, c = this.startOffset, e = this.collapsed; if ((!a || e) && d && d.type == CKEDITOR.NODE_TEXT) {
                        if (c) if (c >= d.getLength()) c = d.getIndex() + 1, d = d.getParent(); else {
                            var k = d.split(c), c = d.getIndex() + 1, d = d.getParent(); this.startContainer.equals(this.endContainer) ? this.setEnd(k, this.endOffset - this.startOffset) : d.equals(this.endContainer) &&
                            (this.endOffset += 1)
                        } else c = d.getIndex(), d = d.getParent(); this.setStart(d, c); if (e) { this.collapse(!0); return }
                    } d = this.endContainer; c = this.endOffset; b || e || !d || d.type != CKEDITOR.NODE_TEXT || (c ? (c >= d.getLength() || d.split(c), c = d.getIndex() + 1) : c = d.getIndex(), d = d.getParent(), this.setEnd(d, c))
                }, enlarge: function (a, b) {
                    function d(a) { return a && a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("contenteditable") ? null : a } var c = new RegExp(/[^\s\ufeff]/); switch (a) {
                        case CKEDITOR.ENLARGE_INLINE: var e = 1; case CKEDITOR.ENLARGE_ELEMENT: var k =
                        function (a, b) { var d = new CKEDITOR.dom.range(h); d.setStart(a, b); d.setEndAt(h, CKEDITOR.POSITION_BEFORE_END); var d = new CKEDITOR.dom.walker(d), g; for (d.guard = function (a) { return !(a.type == CKEDITOR.NODE_ELEMENT && a.isBlockBoundary()) }; g = d.next() ;) { if (g.type != CKEDITOR.NODE_TEXT) return !1; G = g != a ? g.getText() : g.substring(b); if (c.test(G)) return !1 } return !0 }; if (this.collapsed) break; var f = this.getCommonAncestor(), h = this.root, m, l, v, y, z, A = !1, D, G; D = this.startContainer; var E = this.startOffset; D.type == CKEDITOR.NODE_TEXT ?
                        (E && (D = !CKEDITOR.tools.trim(D.substring(0, E)).length && D, A = !!D), D && ((y = D.getPrevious()) || (v = D.getParent()))) : (E && (y = D.getChild(E - 1) || D.getLast()), y || (v = D)); for (v = d(v) ; v || y;) {
                            if (v && !y) { !z && v.equals(f) && (z = !0); if (e ? v.isBlockBoundary() : !h.contains(v)) break; A && "inline" == v.getComputedStyle("display") || (A = !1, z ? m = v : this.setStartBefore(v)); y = v.getPrevious() } for (; y;) if (D = !1, y.type == CKEDITOR.NODE_COMMENT) y = y.getPrevious(); else {
                                if (y.type == CKEDITOR.NODE_TEXT) G = y.getText(), c.test(G) && (y = null), D = /[\s\ufeff]$/.test(G);
                                else if ((y.$.offsetWidth > (CKEDITOR.env.webkit ? 1 : 0) || b && y.is("br")) && !y.data("cke-bookmark")) if (A && CKEDITOR.dtd.$removeEmpty[y.getName()]) { G = y.getText(); if (c.test(G)) y = null; else for (var E = y.$.getElementsByTagName("*"), J = 0, H; H = E[J++];) if (!CKEDITOR.dtd.$removeEmpty[H.nodeName.toLowerCase()]) { y = null; break } y && (D = !!G.length) } else y = null; D && (A ? z ? m = v : v && this.setStartBefore(v) : A = !0); if (y) { D = y.getPrevious(); if (!v && !D) { v = y; y = null; break } y = D } else v = null
                            } v && (v = d(v.getParent()))
                        } D = this.endContainer; E = this.endOffset;
                            v = y = null; z = A = !1; D.type == CKEDITOR.NODE_TEXT ? CKEDITOR.tools.trim(D.substring(E)).length ? A = !0 : (A = !D.getLength(), E == D.getLength() ? (y = D.getNext()) || (v = D.getParent()) : k(D, E) && (v = D.getParent())) : (y = D.getChild(E)) || (v = D); for (; v || y;) {
                                if (v && !y) { !z && v.equals(f) && (z = !0); if (e ? v.isBlockBoundary() : !h.contains(v)) break; A && "inline" == v.getComputedStyle("display") || (A = !1, z ? l = v : v && this.setEndAfter(v)); y = v.getNext() } for (; y;) {
                                    D = !1; if (y.type == CKEDITOR.NODE_TEXT) G = y.getText(), k(y, 0) || (y = null), D = /^[\s\ufeff]/.test(G); else if (y.type ==
                                    CKEDITOR.NODE_ELEMENT) { if ((0 < y.$.offsetWidth || b && y.is("br")) && !y.data("cke-bookmark")) if (A && CKEDITOR.dtd.$removeEmpty[y.getName()]) { G = y.getText(); if (c.test(G)) y = null; else for (E = y.$.getElementsByTagName("*"), J = 0; H = E[J++];) if (!CKEDITOR.dtd.$removeEmpty[H.nodeName.toLowerCase()]) { y = null; break } y && (D = !!G.length) } else y = null } else D = 1; D && A && (z ? l = v : this.setEndAfter(v)); if (y) { D = y.getNext(); if (!v && !D) { v = y; y = null; break } y = D } else v = null
                                } v && (v = d(v.getParent()))
                            } m && l && (f = m.contains(l) ? l : m, this.setStartBefore(f),
                            this.setEndAfter(f)); break; case CKEDITOR.ENLARGE_BLOCK_CONTENTS: case CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS: v = new CKEDITOR.dom.range(this.root); h = this.root; v.setStartAt(h, CKEDITOR.POSITION_AFTER_START); v.setEnd(this.startContainer, this.startOffset); v = new CKEDITOR.dom.walker(v); var F, M, I = CKEDITOR.dom.walker.blockBoundary(a == CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS ? { br: 1 } : null), K = null, C = function (a) {
                                if (a.type == CKEDITOR.NODE_ELEMENT && "false" == a.getAttribute("contenteditable")) if (K) { if (K.equals(a)) { K = null; return } } else K =
                                a; else if (K) return; var b = I(a); b || (F = a); return b
                            }, e = function (a) { var b = C(a); !b && a.is && a.is("br") && (M = a); return b }; v.guard = C; v = v.lastBackward(); F = F || h; this.setStartAt(F, !F.is("br") && (!v && this.checkStartOfBlock() || v && F.contains(v)) ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_AFTER_END); if (a == CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS) {
                                v = this.clone(); v = new CKEDITOR.dom.walker(v); var L = CKEDITOR.dom.walker.whitespaces(), Q = CKEDITOR.dom.walker.bookmark(); v.evaluator = function (a) { return !L(a) && !Q(a) }; if ((v = v.previous()) &&
                                v.type == CKEDITOR.NODE_ELEMENT && v.is("br")) break
                            } v = this.clone(); v.collapse(); v.setEndAt(h, CKEDITOR.POSITION_BEFORE_END); v = new CKEDITOR.dom.walker(v); v.guard = a == CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS ? e : C; F = K = M = null; v = v.lastForward(); F = F || h; this.setEndAt(F, !v && this.checkEndOfBlock() || v && F.contains(v) ? CKEDITOR.POSITION_BEFORE_END : CKEDITOR.POSITION_BEFORE_START); M && this.setEndAfter(M)
                    }
                }, shrink: function (a, b, d) {
                    var c = "boolean" === typeof d ? d : d && "boolean" === typeof d.shrinkOnBlockBoundary ? d.shrinkOnBlockBoundary :
                    !0, e = d && d.skipBogus; if (!this.collapsed) {
                        a = a || CKEDITOR.SHRINK_TEXT; var k = this.clone(), f = this.startContainer, h = this.endContainer, m = this.startOffset, l = this.endOffset, v = d = 1; f && f.type == CKEDITOR.NODE_TEXT && (m ? m >= f.getLength() ? k.setStartAfter(f) : (k.setStartBefore(f), d = 0) : k.setStartBefore(f)); h && h.type == CKEDITOR.NODE_TEXT && (l ? l >= h.getLength() ? k.setEndAfter(h) : (k.setEndAfter(h), v = 0) : k.setEndBefore(h)); var k = new CKEDITOR.dom.walker(k), y = CKEDITOR.dom.walker.bookmark(), z = CKEDITOR.dom.walker.bogus(); k.evaluator =
                        function (b) { return b.type == (a == CKEDITOR.SHRINK_ELEMENT ? CKEDITOR.NODE_ELEMENT : CKEDITOR.NODE_TEXT) }; var A; k.guard = function (b, d) { if (e && z(b) || y(b)) return !0; if (a == CKEDITOR.SHRINK_ELEMENT && b.type == CKEDITOR.NODE_TEXT || d && b.equals(A) || !1 === c && b.type == CKEDITOR.NODE_ELEMENT && b.isBlockBoundary() || b.type == CKEDITOR.NODE_ELEMENT && b.hasAttribute("contenteditable")) return !1; d || b.type != CKEDITOR.NODE_ELEMENT || (A = b); return !0 }; d && (f = k[a == CKEDITOR.SHRINK_ELEMENT ? "lastForward" : "next"]()) && this.setStartAt(f, b ? CKEDITOR.POSITION_AFTER_START :
                        CKEDITOR.POSITION_BEFORE_START); v && (k.reset(), (k = k[a == CKEDITOR.SHRINK_ELEMENT ? "lastBackward" : "previous"]()) && this.setEndAt(k, b ? CKEDITOR.POSITION_BEFORE_END : CKEDITOR.POSITION_AFTER_END)); return !(!d && !v)
                    }
                }, insertNode: function (a) { this.optimizeBookmark(); this.trim(!1, !0); var b = this.startContainer, d = b.getChild(this.startOffset); d ? a.insertBefore(d) : b.append(a); a.getParent() && a.getParent().equals(this.endContainer) && this.endOffset++; this.setStartBefore(a) }, moveToPosition: function (a, b) {
                    this.setStartAt(a,
                    b); this.collapse(!0)
                }, moveToRange: function (a) { this.setStart(a.startContainer, a.startOffset); this.setEnd(a.endContainer, a.endOffset) }, selectNodeContents: function (a) { this.setStart(a, 0); this.setEnd(a, a.type == CKEDITOR.NODE_TEXT ? a.getLength() : a.getChildCount()) }, setStart: function (b, d) { b.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$empty[b.getName()] && (d = b.getIndex(), b = b.getParent()); this._setStartContainer(b); this.startOffset = d; this.endContainer || (this._setEndContainer(b), this.endOffset = d); a(this) }, setEnd: function (b,
                d) { b.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$empty[b.getName()] && (d = b.getIndex() + 1, b = b.getParent()); this._setEndContainer(b); this.endOffset = d; this.startContainer || (this._setStartContainer(b), this.startOffset = d); a(this) }, setStartAfter: function (a) { this.setStart(a.getParent(), a.getIndex() + 1) }, setStartBefore: function (a) { this.setStart(a.getParent(), a.getIndex()) }, setEndAfter: function (a) { this.setEnd(a.getParent(), a.getIndex() + 1) }, setEndBefore: function (a) { this.setEnd(a.getParent(), a.getIndex()) }, setStartAt: function (b,
                d) { switch (d) { case CKEDITOR.POSITION_AFTER_START: this.setStart(b, 0); break; case CKEDITOR.POSITION_BEFORE_END: b.type == CKEDITOR.NODE_TEXT ? this.setStart(b, b.getLength()) : this.setStart(b, b.getChildCount()); break; case CKEDITOR.POSITION_BEFORE_START: this.setStartBefore(b); break; case CKEDITOR.POSITION_AFTER_END: this.setStartAfter(b) } a(this) }, setEndAt: function (b, d) {
                    switch (d) {
                        case CKEDITOR.POSITION_AFTER_START: this.setEnd(b, 0); break; case CKEDITOR.POSITION_BEFORE_END: b.type == CKEDITOR.NODE_TEXT ? this.setEnd(b,
                        b.getLength()) : this.setEnd(b, b.getChildCount()); break; case CKEDITOR.POSITION_BEFORE_START: this.setEndBefore(b); break; case CKEDITOR.POSITION_AFTER_END: this.setEndAfter(b)
                    } a(this)
                }, fixBlock: function (a, b) { var d = this.createBookmark(), c = this.document.createElement(b); this.collapse(a); this.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS); this.extractContents().appendTo(c); c.trim(); this.insertNode(c); var e = c.getBogus(); e && e.remove(); c.appendBogus(); this.moveToBookmark(d); return c }, splitBlock: function (a, b) {
                    var d =
                    new CKEDITOR.dom.elementPath(this.startContainer, this.root), c = new CKEDITOR.dom.elementPath(this.endContainer, this.root), e = d.block, k = c.block, f = null; if (!d.blockLimit.equals(c.blockLimit)) return null; "br" != a && (e || (e = this.fixBlock(!0, a), k = (new CKEDITOR.dom.elementPath(this.endContainer, this.root)).block), k || (k = this.fixBlock(!1, a))); d = e && this.checkStartOfBlock(); c = k && this.checkEndOfBlock(); this.deleteContents(); e && e.equals(k) && (c ? (f = new CKEDITOR.dom.elementPath(this.startContainer, this.root), this.moveToPosition(k,
                    CKEDITOR.POSITION_AFTER_END), k = null) : d ? (f = new CKEDITOR.dom.elementPath(this.startContainer, this.root), this.moveToPosition(e, CKEDITOR.POSITION_BEFORE_START), e = null) : (k = this.splitElement(e, b || !1), e.is("ul", "ol") || e.appendBogus())); return { previousBlock: e, nextBlock: k, wasStartOfBlock: d, wasEndOfBlock: c, elementPath: f }
                }, splitElement: function (a, b) {
                    if (!this.collapsed) return null; this.setEndAt(a, CKEDITOR.POSITION_BEFORE_END); var d = this.extractContents(!1, b || !1), c = a.clone(!1, b || !1); d.appendTo(c); c.insertAfter(a);
                    this.moveToPosition(a, CKEDITOR.POSITION_AFTER_END); return c
                }, removeEmptyBlocksAtEnd: function () {
                    function a(g) { return function (a) { return b(a) || d(a) || a.type == CKEDITOR.NODE_ELEMENT && a.isEmptyInlineRemoveable() || g.is("table") && a.is("caption") ? !1 : !0 } } var b = CKEDITOR.dom.walker.whitespaces(), d = CKEDITOR.dom.walker.bookmark(!1); return function (b) {
                        for (var d = this.createBookmark(), c = this[b ? "endPath" : "startPath"](), e = c.block || c.blockLimit, k; e && !e.equals(c.root) && !e.getFirst(a(e)) ;) k = e.getParent(), this[b ? "setEndAt" :
                        "setStartAt"](e, CKEDITOR.POSITION_AFTER_END), e.remove(1), e = k; this.moveToBookmark(d)
                    }
                }(), startPath: function () { return new CKEDITOR.dom.elementPath(this.startContainer, this.root) }, endPath: function () { return new CKEDITOR.dom.elementPath(this.endContainer, this.root) }, checkBoundaryOfElement: function (a, d) {
                    var c = d == CKEDITOR.START, e = this.clone(); e.collapse(c); e[c ? "setStartAt" : "setEndAt"](a, c ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_BEFORE_END); e = new CKEDITOR.dom.walker(e); e.evaluator = b(c); return e[c ?
                    "checkBackward" : "checkForward"]()
                }, checkStartOfBlock: function () { var a = this.startContainer, b = this.startOffset; CKEDITOR.env.ie && b && a.type == CKEDITOR.NODE_TEXT && (a = CKEDITOR.tools.ltrim(a.substring(0, b)), l.test(a) && this.trim(0, 1)); this.trim(); a = new CKEDITOR.dom.elementPath(this.startContainer, this.root); b = this.clone(); b.collapse(!0); b.setStartAt(a.block || a.blockLimit, CKEDITOR.POSITION_AFTER_START); a = new CKEDITOR.dom.walker(b); a.evaluator = e(); return a.checkBackward() }, checkEndOfBlock: function () {
                    var a = this.endContainer,
                    b = this.endOffset; CKEDITOR.env.ie && a.type == CKEDITOR.NODE_TEXT && (a = CKEDITOR.tools.rtrim(a.substring(b)), l.test(a) && this.trim(1, 0)); this.trim(); a = new CKEDITOR.dom.elementPath(this.endContainer, this.root); b = this.clone(); b.collapse(!1); b.setEndAt(a.block || a.blockLimit, CKEDITOR.POSITION_BEFORE_END); a = new CKEDITOR.dom.walker(b); a.evaluator = e(); return a.checkForward()
                }, getPreviousNode: function (a, b, d) {
                    var c = this.clone(); c.collapse(1); c.setStartAt(d || this.root, CKEDITOR.POSITION_AFTER_START); d = new CKEDITOR.dom.walker(c);
                    d.evaluator = a; d.guard = b; return d.previous()
                }, getNextNode: function (a, b, d) { var c = this.clone(); c.collapse(); c.setEndAt(d || this.root, CKEDITOR.POSITION_BEFORE_END); d = new CKEDITOR.dom.walker(c); d.evaluator = a; d.guard = b; return d.next() }, checkReadOnly: function () {
                    function a(b, d) { for (; b;) { if (b.type == CKEDITOR.NODE_ELEMENT) { if ("false" == b.getAttribute("contentEditable") && !b.data("cke-editable")) return 0; if (b.is("html") || "true" == b.getAttribute("contentEditable") && (b.contains(d) || b.equals(d))) break } b = b.getParent() } return 1 }
                    return function () { var b = this.startContainer, d = this.endContainer; return !(a(b, d) && a(d, b)) }
                }(), moveToElementEditablePosition: function (a, b) {
                    if (a.type == CKEDITOR.NODE_ELEMENT && !a.isEditable(!1)) return this.moveToPosition(a, b ? CKEDITOR.POSITION_AFTER_END : CKEDITOR.POSITION_BEFORE_START), !0; for (var d = 0; a;) {
                        if (a.type == CKEDITOR.NODE_TEXT) {
                            b && this.endContainer && this.checkEndOfBlock() && l.test(a.getText()) ? this.moveToPosition(a, CKEDITOR.POSITION_BEFORE_START) : this.moveToPosition(a, b ? CKEDITOR.POSITION_AFTER_END :
                            CKEDITOR.POSITION_BEFORE_START); d = 1; break
                        } if (a.type == CKEDITOR.NODE_ELEMENT) if (a.isEditable()) this.moveToPosition(a, b ? CKEDITOR.POSITION_BEFORE_END : CKEDITOR.POSITION_AFTER_START), d = 1; else if (b && a.is("br") && this.endContainer && this.checkEndOfBlock()) this.moveToPosition(a, CKEDITOR.POSITION_BEFORE_START); else if ("false" == a.getAttribute("contenteditable") && a.is(CKEDITOR.dtd.$block)) return this.setStartBefore(a), this.setEndAfter(a), !0; var c = a, e = d, f = void 0; c.type == CKEDITOR.NODE_ELEMENT && c.isEditable(!1) &&
                        (f = c[b ? "getLast" : "getFirst"](k)); e || f || (f = c[b ? "getPrevious" : "getNext"](k)); a = f
                    } return !!d
                }, moveToClosestEditablePosition: function (a, b) {
                    var d, c = 0, e, k, f = [CKEDITOR.POSITION_AFTER_END, CKEDITOR.POSITION_BEFORE_START]; a ? (d = new CKEDITOR.dom.range(this.root), d.moveToPosition(a, f[b ? 0 : 1])) : d = this.clone(); if (a && !a.is(CKEDITOR.dtd.$block)) c = 1; else if (e = d[b ? "getNextEditableNode" : "getPreviousEditableNode"]()) c = 1, (k = e.type == CKEDITOR.NODE_ELEMENT) && e.is(CKEDITOR.dtd.$block) && "false" == e.getAttribute("contenteditable") ?
                    (d.setStartAt(e, CKEDITOR.POSITION_BEFORE_START), d.setEndAt(e, CKEDITOR.POSITION_AFTER_END)) : !CKEDITOR.env.needsBrFiller && k && e.is(CKEDITOR.dom.walker.validEmptyBlockContainers) ? (d.setEnd(e, 0), d.collapse()) : d.moveToPosition(e, f[b ? 1 : 0]); c && this.moveToRange(d); return !!c
                }, moveToElementEditStart: function (a) { return this.moveToElementEditablePosition(a) }, moveToElementEditEnd: function (a) { return this.moveToElementEditablePosition(a, !0) }, getEnclosedNode: function () {
                    var a = this.clone(); a.optimize(); if (a.startContainer.type !=
                    CKEDITOR.NODE_ELEMENT || a.endContainer.type != CKEDITOR.NODE_ELEMENT) return null; var a = new CKEDITOR.dom.walker(a), b = CKEDITOR.dom.walker.bookmark(!1, !0), d = CKEDITOR.dom.walker.whitespaces(!0); a.evaluator = function (a) { return d(a) && b(a) }; var c = a.next(); a.reset(); return c && c.equals(a.previous()) ? c : null
                }, getTouchedStartNode: function () { var a = this.startContainer; return this.collapsed || a.type != CKEDITOR.NODE_ELEMENT ? a : a.getChild(this.startOffset) || a }, getTouchedEndNode: function () {
                    var a = this.endContainer; return this.collapsed ||
                    a.type != CKEDITOR.NODE_ELEMENT ? a : a.getChild(this.endOffset - 1) || a
                }, getNextEditableNode: c(), getPreviousEditableNode: c(1), _getTableElement: function (a) { a = a || { td: 1, th: 1, tr: 1, tbody: 1, thead: 1, tfoot: 1, table: 1 }; var b = this.getTouchedStartNode(), d = this.getTouchedEndNode(), c = b.getAscendant("table", !0), d = d.getAscendant("table", !0); return c && !this.root.contains(c) ? null : this.getEnclosedNode() ? this.getEnclosedNode().getAscendant(a, !0) : c && d && (c.equals(d) || c.contains(d) || d.contains(c)) ? b.getAscendant(a, !0) : null }, scrollIntoView: function () {
                    var a =
                    new CKEDITOR.dom.element.createFromHtml("\x3cspan\x3e\x26nbsp;\x3c/span\x3e", this.document), b, d, c, e = this.clone(); e.optimize(); (c = e.startContainer.type == CKEDITOR.NODE_TEXT) ? (d = e.startContainer.getText(), b = e.startContainer.split(e.startOffset), a.insertAfter(e.startContainer)) : e.insertNode(a); a.scrollIntoView(); c && (e.startContainer.setText(d), b.remove()); a.remove()
                }, getClientRects: function () {
                    function a(b, d) {
                        var c = CKEDITOR.tools.array.map(b, function (a) { return a }), g = new CKEDITOR.dom.range(d.root), e, k,
                        f; d.startContainer instanceof CKEDITOR.dom.element && (k = 0 === d.startOffset && d.startContainer.hasAttribute("data-widget")); d.endContainer instanceof CKEDITOR.dom.element && (f = (f = d.endOffset === (d.endContainer.getChildCount ? d.endContainer.getChildCount() : d.endContainer.length)) && d.endContainer.hasAttribute("data-widget")); k && g.setStart(d.startContainer.getParent(), d.startContainer.getIndex()); f && g.setEnd(d.endContainer.getParent(), d.endContainer.getIndex() + 1); if (k || f) d = g; g = d.cloneContents().find("[data-cke-widget-id]").toArray();
                        if (g = CKEDITOR.tools.array.map(g, function (a) { var b = d.root.editor; a = a.getAttribute("data-cke-widget-id"); return b.widgets.instances[a].element })) return g = CKEDITOR.tools.array.map(g, function (a) { var b; b = a.getParent().hasClass("cke_widget_wrapper") ? a.getParent() : a; e = this.root.getDocument().$.createRange(); e.setStart(b.getParent().$, b.getIndex()); e.setEnd(b.getParent().$, b.getIndex() + 1); b = e.getClientRects(); b.widgetRect = a.getClientRect(); return b }, d), CKEDITOR.tools.array.forEach(g, function (a) {
                            function b(g) {
                                CKEDITOR.tools.array.forEach(c,
                                function (b, e) { var k = CKEDITOR.tools.objectCompare(a[g], b); k || (k = CKEDITOR.tools.objectCompare(a.widgetRect, b)); k && (Array.prototype.splice.call(c, e, a.length - g, a.widgetRect), d = !0) }); d || (g < c.length - 1 ? b(g + 1) : c.push(a.widgetRect))
                            } var d; b(0)
                        }), c
                    } function b(a, d, g) {
                        var e; d.collapsed ? g.startContainer instanceof CKEDITOR.dom.element ? (a = g.checkStartOfBlock(), e = new CKEDITOR.dom.text("​"), a ? g.startContainer.append(e, !0) : 0 === g.startOffset ? e.insertBefore(g.startContainer.getFirst()) : (g = g.startContainer.getChildren().getItem(g.startOffset -
                        1), e.insertAfter(g)), d.setStart(e.$, 0), d.setEnd(e.$, 0), a = d.getClientRects(), e.remove()) : g.startContainer instanceof CKEDITOR.dom.text && ("" === g.startContainer.getText() ? (g.startContainer.setText("​"), a = d.getClientRects(), g.startContainer.setText("")) : a = [c(g.createBookmark())]) : a = [c(g.createBookmark())]; return a
                    } function d(a, b, c) {
                        a = CKEDITOR.tools.extend({}, a); b && (a = CKEDITOR.tools.getAbsoluteRectPosition(c.document.getWindow(), a)); !a.width && (a.width = a.right - a.left); !a.height && (a.height = a.bottom - a.top);
                        return a
                    } function c(a) { var b = a.startNode; a = a.endNode; var d; b.setText("​"); b.removeStyle("display"); a ? (a.setText("​"), a.removeStyle("display"), d = [b.getClientRect(), a.getClientRect()], a.remove()) : d = [b.getClientRect(), b.getClientRect()]; b.remove(); return { right: Math.max(d[0].right, d[1].right), bottom: Math.max(d[0].bottom, d[1].bottom), left: Math.min(d[0].left, d[1].left), top: Math.min(d[0].top, d[1].top), width: Math.abs(d[0].left - d[1].left), height: Math.max(d[0].bottom, d[1].bottom) - Math.min(d[0].top, d[1].top) } }
                    return void 0 !== this.document.getSelection ? function (c) { var e = this.root.getDocument().$.createRange(), k; e.setStart(this.startContainer.$, this.startOffset); e.setEnd(this.endContainer.$, this.endOffset); k = e.getClientRects(); k = a(k, this); k.length || (k = b(k, e, this)); return CKEDITOR.tools.array.map(k, function (a) { return d(a, c, this) }, this) } : function (a) { return [d(c(this.createBookmark()), a, this)] }
                }(), _setStartContainer: function (a) { this.startContainer = a }, _setEndContainer: function (a) { this.endContainer = a }, _find: function (a,
                b) { var d = this.getCommonAncestor(), c = this.getBoundaryNodes(), e = [], k, f, h, m; if (d && d.find) for (f = d.find(a), k = 0; k < f.count() ; k++) if (d = f.getItem(k), b || !d.isReadOnly()) h = d.getPosition(c.startNode) & CKEDITOR.POSITION_FOLLOWING || c.startNode.equals(d), m = d.getPosition(c.endNode) & CKEDITOR.POSITION_PRECEDING + CKEDITOR.POSITION_IS_CONTAINED || c.endNode.equals(d), h && m && e.push(d); return e }
            }; CKEDITOR.dom.range.mergeRanges = function (a) {
                return CKEDITOR.tools.array.reduce(a, function (a, b) {
                    var d = a[a.length - 1], c = !1; b = b.clone();
                    b.enlarge(CKEDITOR.ENLARGE_ELEMENT); if (d) { var g = new CKEDITOR.dom.range(b.root), c = new CKEDITOR.dom.walker(g), e = CKEDITOR.dom.walker.whitespaces(); g.setStart(d.endContainer, d.endOffset); g.setEnd(b.startContainer, b.startOffset); for (g = c.next() ; e(g) || b.endContainer.equals(g) ;) g = c.next(); c = !g } c ? d.setEnd(b.endContainer, b.endOffset) : a.push(b); return a
                }, [])
            }
        })(); CKEDITOR.POSITION_AFTER_START = 1; CKEDITOR.POSITION_BEFORE_END = 2; CKEDITOR.POSITION_BEFORE_START = 3; CKEDITOR.POSITION_AFTER_END = 4; CKEDITOR.ENLARGE_ELEMENT =
        1; CKEDITOR.ENLARGE_BLOCK_CONTENTS = 2; CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS = 3; CKEDITOR.ENLARGE_INLINE = 4; CKEDITOR.START = 1; CKEDITOR.END = 2; CKEDITOR.SHRINK_ELEMENT = 1; CKEDITOR.SHRINK_TEXT = 2; "use strict"; (function () {
            function a(a) { 1 > arguments.length || (this.range = a, this.forceBrBreak = 0, this.enlargeBr = 1, this.enforceRealBlocks = 0, this._ || (this._ = {})) } function f(a) { var b = []; a.forEach(function (a) { if ("true" == a.getAttribute("contenteditable")) return b.push(a), !1 }, CKEDITOR.NODE_ELEMENT, !0); return b } function e(a, b, d, c) {
                a: {
                    null ==
                    c && (c = f(d)); for (var h; h = c.shift() ;) if (h.getDtd().p) { c = { element: h, remaining: c }; break a } c = null
                } if (!c) return 0; if ((h = CKEDITOR.filter.instances[c.element.data("cke-filter")]) && !h.check(b)) return e(a, b, d, c.remaining); b = new CKEDITOR.dom.range(c.element); b.selectNodeContents(c.element); b = b.createIterator(); b.enlargeBr = a.enlargeBr; b.enforceRealBlocks = a.enforceRealBlocks; b.activeFilter = b.filter = h; a._.nestedEditable = { element: c.element, container: d, remaining: c.remaining, iterator: b }; return 1
            } function b(a, b, d) {
                if (!b) return !1;
                a = a.clone(); a.collapse(!d); return a.checkBoundaryOfElement(b, d ? CKEDITOR.START : CKEDITOR.END)
            } var c = /^[\r\n\t ]+$/, m = CKEDITOR.dom.walker.bookmark(!1, !0), h = CKEDITOR.dom.walker.whitespaces(!0), l = function (a) { return m(a) && h(a) }, d = { dd: 1, dt: 1, li: 1 }; a.prototype = {
                getNextParagraph: function (a) {
                    var g, f, h, w, q; a = a || "p"; if (this._.nestedEditable) {
                        if (g = this._.nestedEditable.iterator.getNextParagraph(a)) return this.activeFilter = this._.nestedEditable.iterator.activeFilter, g; this.activeFilter = this.filter; if (e(this, a,
                        this._.nestedEditable.container, this._.nestedEditable.remaining)) return this.activeFilter = this._.nestedEditable.iterator.activeFilter, this._.nestedEditable.iterator.getNextParagraph(a); this._.nestedEditable = null
                    } if (!this.range.root.getDtd()[a]) return null; if (!this._.started) {
                        var p = this.range.clone(); f = p.startPath(); var u = p.endPath(), x = !p.collapsed && b(p, f.block), t = !p.collapsed && b(p, u.block, 1); p.shrink(CKEDITOR.SHRINK_ELEMENT, !0); x && p.setStartAt(f.block, CKEDITOR.POSITION_BEFORE_END); t && p.setEndAt(u.block,
                        CKEDITOR.POSITION_AFTER_START); f = p.endContainer.hasAscendant("pre", !0) || p.startContainer.hasAscendant("pre", !0); p.enlarge(this.forceBrBreak && !f || !this.enlargeBr ? CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS : CKEDITOR.ENLARGE_BLOCK_CONTENTS); p.collapsed || (f = new CKEDITOR.dom.walker(p.clone()), u = CKEDITOR.dom.walker.bookmark(!0, !0), f.evaluator = u, this._.nextNode = f.next(), f = new CKEDITOR.dom.walker(p.clone()), f.evaluator = u, f = f.previous(), this._.lastNode = f.getNextSourceNode(!0, null, p.root), this._.lastNode && this._.lastNode.type ==
                        CKEDITOR.NODE_TEXT && !CKEDITOR.tools.trim(this._.lastNode.getText()) && this._.lastNode.getParent().isBlockBoundary() && (u = this.range.clone(), u.moveToPosition(this._.lastNode, CKEDITOR.POSITION_AFTER_END), u.checkEndOfBlock() && (u = new CKEDITOR.dom.elementPath(u.endContainer, u.root), this._.lastNode = (u.block || u.blockLimit).getNextSourceNode(!0))), this._.lastNode && p.root.contains(this._.lastNode) || (this._.lastNode = this._.docEndMarker = p.document.createText(""), this._.lastNode.insertAfter(f)), p = null); this._.started =
                        1; f = p
                    } u = this._.nextNode; p = this._.lastNode; for (this._.nextNode = null; u;) {
                        var x = 0, t = u.hasAscendant("pre"), B = u.type != CKEDITOR.NODE_ELEMENT, v = 0; if (B) u.type == CKEDITOR.NODE_TEXT && c.test(u.getText()) && (B = 0); else {
                            var y = u.getName(); if (CKEDITOR.dtd.$block[y] && "false" == u.getAttribute("contenteditable")) { g = u; e(this, a, g); break } else if (u.isBlockBoundary(this.forceBrBreak && !t && { br: 1 })) {
                                if ("br" == y) B = 1; else if (!f && !u.getChildCount() && "hr" != y) { g = u; h = u.equals(p); break } f && (f.setEndAt(u, CKEDITOR.POSITION_BEFORE_START),
                                "br" != y && (this._.nextNode = u)); x = 1
                            } else { if (u.getFirst()) { f || (f = this.range.clone(), f.setStartAt(u, CKEDITOR.POSITION_BEFORE_START)); u = u.getFirst(); continue } B = 1 }
                        } B && !f && (f = this.range.clone(), f.setStartAt(u, CKEDITOR.POSITION_BEFORE_START)); h = (!x || B) && u.equals(p); if (f && !x) for (; !u.getNext(l) && !h;) { y = u.getParent(); if (y.isBlockBoundary(this.forceBrBreak && !t && { br: 1 })) { x = 1; B = 0; h || y.equals(p); f.setEndAt(y, CKEDITOR.POSITION_BEFORE_END); break } u = y; B = 1; h = u.equals(p); v = 1 } B && f.setEndAt(u, CKEDITOR.POSITION_AFTER_END);
                        u = this._getNextSourceNode(u, v, p); if ((h = !u) || x && f) break
                    } if (!g) {
                        if (!f) return this._.docEndMarker && this._.docEndMarker.remove(), this._.nextNode = null; g = new CKEDITOR.dom.elementPath(f.startContainer, f.root); u = g.blockLimit; x = { div: 1, th: 1, td: 1 }; g = g.block; !g && u && !this.enforceRealBlocks && x[u.getName()] && f.checkStartOfBlock() && f.checkEndOfBlock() && !u.equals(f.root) ? g = u : !g || this.enforceRealBlocks && g.is(d) ? (g = this.range.document.createElement(a), f.extractContents().appendTo(g), g.trim(), f.insertNode(g), w = q = !0) :
                        "li" != g.getName() ? f.checkStartOfBlock() && f.checkEndOfBlock() || (g = g.clone(!1), f.extractContents().appendTo(g), g.trim(), q = f.splitBlock(), w = !q.wasStartOfBlock, q = !q.wasEndOfBlock, f.insertNode(g)) : h || (this._.nextNode = g.equals(p) ? null : this._getNextSourceNode(f.getBoundaryNodes().endNode, 1, p))
                    } w && (w = g.getPrevious()) && w.type == CKEDITOR.NODE_ELEMENT && ("br" == w.getName() ? w.remove() : w.getLast() && "br" == w.getLast().$.nodeName.toLowerCase() && w.getLast().remove()); q && (w = g.getLast()) && w.type == CKEDITOR.NODE_ELEMENT &&
                    "br" == w.getName() && (!CKEDITOR.env.needsBrFiller || w.getPrevious(m) || w.getNext(m)) && w.remove(); this._.nextNode || (this._.nextNode = h || g.equals(p) || !p ? null : this._getNextSourceNode(g, 1, p)); return g
                }, _getNextSourceNode: function (a, b, d) { function c(a) { return !(a.equals(d) || a.equals(e)) } var e = this.range.root; for (a = a.getNextSourceNode(b, null, c) ; !m(a) ;) a = a.getNextSourceNode(b, null, c); return a }
            }; CKEDITOR.dom.range.prototype.createIterator = function () { return new a(this) }
        })(); CKEDITOR.command = function (a, f) {
            this.uiItems =
            []; this.exec = function (b) { if (this.state == CKEDITOR.TRISTATE_DISABLED || !this.checkAllowed()) return !1; this.editorFocus && a.focus(); return !1 === this.fire("exec") ? !0 : !1 !== f.exec.call(this, a, b) }; this.refresh = function (a, c) {
                if (!this.readOnly && a.readOnly) return !0; if (this.context && !c.isContextFor(this.context) || !this.checkAllowed(!0)) return this.disable(), !0; this.startDisabled || this.enable(); this.modes && !this.modes[a.mode] && this.disable(); return !1 === this.fire("refresh", { editor: a, path: c }) ? !0 : f.refresh && !1 !== f.refresh.apply(this,
                arguments)
            }; var e; this.checkAllowed = function (b) { return b || "boolean" != typeof e ? e = a.activeFilter.checkFeature(this) : e }; CKEDITOR.tools.extend(this, f, { modes: { wysiwyg: 1 }, editorFocus: 1, contextSensitive: !!f.context, state: CKEDITOR.TRISTATE_DISABLED }); CKEDITOR.event.call(this)
        }; CKEDITOR.command.prototype = {
            enable: function () { this.state == CKEDITOR.TRISTATE_DISABLED && this.checkAllowed() && this.setState(this.preserveState && "undefined" != typeof this.previousState ? this.previousState : CKEDITOR.TRISTATE_OFF) }, disable: function () { this.setState(CKEDITOR.TRISTATE_DISABLED) },
            setState: function (a) { if (this.state == a || a != CKEDITOR.TRISTATE_DISABLED && !this.checkAllowed()) return !1; this.previousState = this.state; this.state = a; this.fire("state"); return !0 }, toggleState: function () { this.state == CKEDITOR.TRISTATE_OFF ? this.setState(CKEDITOR.TRISTATE_ON) : this.state == CKEDITOR.TRISTATE_ON && this.setState(CKEDITOR.TRISTATE_OFF) }
        }; CKEDITOR.event.implementOn(CKEDITOR.command.prototype); CKEDITOR.ENTER_P = 1; CKEDITOR.ENTER_BR = 2; CKEDITOR.ENTER_DIV = 3; CKEDITOR.config = {
            customConfig: "config.js", autoUpdateElement: !0,
            language: "", defaultLanguage: "en", contentsLangDirection: "", enterMode: CKEDITOR.ENTER_P, forceEnterMode: !1, shiftEnterMode: CKEDITOR.ENTER_BR, docType: "\x3c!DOCTYPE html\x3e", bodyId: "", bodyClass: "", fullPage: !1, height: 200, contentsCss: CKEDITOR.getUrl("contents.css"), extraPlugins: "", removePlugins: "", protectedSource: [], tabIndex: 0, width: "", baseFloatZIndex: 1E4, blockedKeystrokes: [CKEDITOR.CTRL + 66, CKEDITOR.CTRL + 73, CKEDITOR.CTRL + 85]
        }; (function () {
            function a(a, b, d, c, g) {
                var e, k; a = []; for (e in b) {
                    k = b[e]; k = "boolean" ==
                    typeof k ? {} : "function" == typeof k ? { match: k } : J(k); "$" != e.charAt(0) && (k.elements = e); d && (k.featureName = d.toLowerCase()); var f = k; f.elements = h(f.elements, /\s+/) || null; f.propertiesOnly = f.propertiesOnly || !0 === f.elements; var m = /\s*,\s*/, n = void 0; for (n in M) { f[n] = h(f[n], m) || null; var l = f, y = I[n], u = h(f[I[n]], m), C = f[n], z = [], Q = !0, t = void 0; u ? Q = !1 : u = {}; for (t in C) "!" == t.charAt(0) && (t = t.slice(1), z.push(t), u[t] = !0, Q = !1); for (; t = z.pop() ;) C[t] = C["!" + t], delete C["!" + t]; l[y] = (Q ? !1 : u) || null } f.match = f.match || null; c.push(k);
                    a.push(k)
                } b = g.elements; g = g.generic; var r; d = 0; for (c = a.length; d < c; ++d) {
                    e = J(a[d]); k = !0 === e.classes || !0 === e.styles || !0 === e.attributes; f = e; n = y = m = void 0; for (m in M) f[m] = x(f[m]); l = !0; for (n in I) { m = I[n]; y = f[m]; u = []; C = void 0; for (C in y) -1 < C.indexOf("*") ? u.push(new RegExp("^" + C.replace(/\*/g, ".*") + "$")) : u.push(C); y = u; y.length && (f[m] = y, l = !1) } f.nothingRequired = l; f.noProperties = !(f.attributes || f.classes || f.styles); if (!0 === e.elements || null === e.elements) g[k ? "unshift" : "push"](e); else for (r in f = e.elements, delete e.elements,
                    f) if (b[r]) b[r][k ? "unshift" : "push"](e); else b[r] = [e]
                }
            } function f(a, b, d, c) { if (!a.match || a.match(b)) if (c || l(a, b)) if (a.propertiesOnly || (d.valid = !0), d.allAttributes || (d.allAttributes = e(a.attributes, b.attributes, d.validAttributes)), d.allStyles || (d.allStyles = e(a.styles, b.styles, d.validStyles)), !d.allClasses) { a = a.classes; b = b.classes; c = d.validClasses; if (a) if (!0 === a) a = !0; else { for (var g = 0, k = b.length, f; g < k; ++g) f = b[g], c[f] || (c[f] = a(f)); a = !1 } else a = !1; d.allClasses = a } } function e(a, b, d) {
                if (!a) return !1; if (!0 === a) return !0;
                for (var c in b) d[c] || (d[c] = a(c)); return !1
            } function b(a, b, d) { if (!a.match || a.match(b)) { if (a.noProperties) return !1; d.hadInvalidAttribute = c(a.attributes, b.attributes) || d.hadInvalidAttribute; d.hadInvalidStyle = c(a.styles, b.styles) || d.hadInvalidStyle; a = a.classes; b = b.classes; if (a) { for (var g = !1, e = !0 === a, k = b.length; k--;) if (e || a(b[k])) b.splice(k, 1), g = !0; a = g } else a = !1; d.hadInvalidClass = a || d.hadInvalidClass } } function c(a, b) { if (!a) return !1; var d = !1, c = !0 === a, g; for (g in b) if (c || a(g)) delete b[g], d = !0; return d } function m(a,
            b, d) { if (a.disabled || a.customConfig && !d || !b) return !1; a._.cachedChecks = {}; return !0 } function h(a, b) { if (!a) return !1; if (!0 === a) return a; if ("string" == typeof a) return a = H(a), "*" == a ? !0 : CKEDITOR.tools.convertArrayToObject(a.split(b)); if (CKEDITOR.tools.isArray(a)) return a.length ? CKEDITOR.tools.convertArrayToObject(a) : !1; var d = {}, c = 0, g; for (g in a) d[g] = a[g], c++; return c ? d : !1 } function l(a, b) {
                if (a.nothingRequired) return !0; var c, g, e, k; if (e = a.requiredClasses) for (k = b.classes, c = 0; c < e.length; ++c) if (g = e[c], "string" ==
                typeof g) { if (-1 == CKEDITOR.tools.indexOf(k, g)) return !1 } else if (!CKEDITOR.tools.checkIfAnyArrayItemMatches(k, g)) return !1; return d(b.styles, a.requiredStyles) && d(b.attributes, a.requiredAttributes)
            } function d(a, b) { if (!b) return !0; for (var d = 0, c; d < b.length; ++d) if (c = b[d], "string" == typeof c) { if (!(c in a)) return !1 } else if (!CKEDITOR.tools.checkIfAnyObjectPropertyMatches(a, c)) return !1; return !0 } function k(a) { if (!a) return {}; a = a.split(/\s*,\s*/).sort(); for (var b = {}; a.length;) b[a.shift()] = "cke-test"; return b } function g(a) {
                var b,
                d, c, g, e = {}, k = 1; for (a = H(a) ; b = a.match(K) ;) (d = b[2]) ? (c = n(d, "styles"), g = n(d, "attrs"), d = n(d, "classes")) : c = g = d = null, e["$" + k++] = { elements: b[1], classes: d, styles: c, attributes: g }, a = a.slice(b[0].length); return e
            } function n(a, b) { var d = a.match(C[b]); return d ? H(d[1]) : null } function r(a) { var b = a.styleBackup = a.attributes.style, d = a.classBackup = a.attributes["class"]; a.styles || (a.styles = CKEDITOR.tools.parseCssText(b || "", 1)); a.classes || (a.classes = d ? d.split(/\s+/) : []) } function w(a, d, c, g) {
                var e = 0, k; g.toHtml && (d.name = d.name.replace(L,
                "$1")); if (g.doCallbacks && a.elementCallbacks) { a: { k = a.elementCallbacks; for (var h = 0, m = k.length, n; h < m; ++h) if (n = k[h](d)) { k = n; break a } k = void 0 } if (k) return k } if (g.doTransform && (k = a._.transformations[d.name])) { r(d); for (h = 0; h < k.length; ++h) y(a, d, k[h]); p(d) } if (g.doFilter) {
                    a: {
                        h = d.name; m = a._; a = m.allowedRules.elements[h]; k = m.allowedRules.generic; h = m.disallowedRules.elements[h]; m = m.disallowedRules.generic; n = g.skipRequired; var l = {
                            valid: !1, validAttributes: {}, validClasses: {}, validStyles: {}, allAttributes: !1, allClasses: !1,
                            allStyles: !1, hadInvalidAttribute: !1, hadInvalidClass: !1, hadInvalidStyle: !1
                        }, C, z; if (a || k) { r(d); if (h) for (C = 0, z = h.length; C < z; ++C) if (!1 === b(h[C], d, l)) { a = null; break a } if (m) for (C = 0, z = m.length; C < z; ++C) b(m[C], d, l); if (a) for (C = 0, z = a.length; C < z; ++C) f(a[C], d, l, n); if (k) for (C = 0, z = k.length; C < z; ++C) f(k[C], d, l, n); a = l } else a = null
                    } if (!a || !a.valid) return c.push(d), 1; z = a.validAttributes; var x = a.validStyles; k = a.validClasses; var h = d.attributes, t = d.styles, m = d.classes; n = d.classBackup; var A = d.styleBackup, H, E, v = [], l = [], D = /^data-cke-/;
                    C = !1; delete h.style; delete h["class"]; delete d.classBackup; delete d.styleBackup; if (!a.allAttributes) for (H in h) z[H] || (D.test(H) ? H == (E = H.replace(/^data-cke-saved-/, "")) || z[E] || (delete h[H], C = !0) : (delete h[H], C = !0)); if (!a.allStyles || a.hadInvalidStyle) { for (H in t) a.allStyles || x[H] ? v.push(H + ":" + t[H]) : C = !0; v.length && (h.style = v.sort().join("; ")) } else A && (h.style = A); if (!a.allClasses || a.hadInvalidClass) {
                        for (H = 0; H < m.length; ++H) (a.allClasses || k[m[H]]) && l.push(m[H]); l.length && (h["class"] = l.sort().join(" "));
                        n && l.length < n.split(/\s+/).length && (C = !0)
                    } else n && (h["class"] = n); C && (e = 1); if (!g.skipFinalValidation && !u(d)) return c.push(d), 1
                } g.toHtml && (d.name = d.name.replace(Q, "cke:$1")); return e
            } function q(a) { var b = [], d; for (d in a) -1 < d.indexOf("*") && b.push(d.replace(/\*/g, ".*")); return b.length ? new RegExp("^(?:" + b.join("|") + ")$") : null } function p(a) { var b = a.attributes, d; delete b.style; delete b["class"]; if (d = CKEDITOR.tools.writeCssText(a.styles, !0)) b.style = d; a.classes.length && (b["class"] = a.classes.sort().join(" ")) }
            function u(a) { switch (a.name) { case "a": if (!(a.children.length || a.attributes.name || a.attributes.id)) return !1; break; case "img": if (!a.attributes.src) return !1 } return !0 } function x(a) { if (!a) return !1; if (!0 === a) return !0; var b = q(a); return function (d) { return d in a || b && d.match(b) } } function t() { return new CKEDITOR.htmlParser.element("br") } function B(a) { return a.type == CKEDITOR.NODE_ELEMENT && ("br" == a.name || E.$block[a.name]) } function v(a, b, d) {
                var c = a.name; if (E.$empty[c] || !a.children.length) "hr" == c && "br" == b ? a.replaceWith(t()) :
                (a.parent && d.push({ check: "it", el: a.parent }), a.remove()); else if (E.$block[c] || "tr" == c) if ("br" == b) a.previous && !B(a.previous) && (b = t(), b.insertBefore(a)), a.next && !B(a.next) && (b = t(), b.insertAfter(a)), a.replaceWithChildren(); else {
                    var c = a.children, g; b: { g = E[b]; for (var e = 0, k = c.length, f; e < k; ++e) if (f = c[e], f.type == CKEDITOR.NODE_ELEMENT && !g[f.name]) { g = !1; break b } g = !0 } if (g) a.name = b, a.attributes = {}, d.push({ check: "parent-down", el: a }); else {
                        g = a.parent; for (var e = g.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || "body" == g.name,
                        h, m, k = c.length; 0 < k;) f = c[--k], e && (f.type == CKEDITOR.NODE_TEXT || f.type == CKEDITOR.NODE_ELEMENT && E.$inline[f.name]) ? (h || (h = new CKEDITOR.htmlParser.element(b), h.insertAfter(a), d.push({ check: "parent-down", el: h })), h.add(f, 0)) : (h = null, m = E[g.name] || E.span, f.insertAfter(a), g.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || f.type != CKEDITOR.NODE_ELEMENT || m[f.name] || d.push({ check: "el-up", el: f })); a.remove()
                    }
                } else c in { style: 1, script: 1 } ? a.remove() : (a.parent && d.push({ check: "it", el: a.parent }), a.replaceWithChildren())
            } function y(a,
            b, d) { var c, g; for (c = 0; c < d.length; ++c) if (g = d[c], !(g.check && !a.check(g.check, !1) || g.left && !g.left(b))) { g.right(b, O); break } } function z(a, b) { var d = b.getDefinition(), c = d.attributes, g = d.styles, e, k, f, h; if (a.name != d.element) return !1; for (e in c) if ("class" == e) for (d = c[e].split(/\s+/), f = a.classes.join("|") ; h = d.pop() ;) { if (-1 == f.indexOf(h)) return !1 } else if (a.attributes[e] != c[e]) return !1; for (k in g) if (a.styles[k] != g[k]) return !1; return !0 } function A(a, b) {
                var d, c; "string" == typeof a ? d = a : a instanceof CKEDITOR.style ? c =
                    a : (d = a[0], c = a[1]); return [{ element: d, left: c, right: function (a, d) { d.transform(a, b) } }]
            } function D(a) { return function (b) { return z(b, a) } } function G(a) { return function (b, d) { d[a](b) } } var E = CKEDITOR.dtd, J = CKEDITOR.tools.copy, H = CKEDITOR.tools.trim, F = ["", "p", "br", "div"]; CKEDITOR.FILTER_SKIP_TREE = 2; CKEDITOR.filter = function (a, b) {
                this.allowedContent = []; this.disallowedContent = []; this.elementCallbacks = null; this.disabled = !1; this.editor = null; this.id = CKEDITOR.tools.getNextNumber(); this._ = {
                    allowedRules: {
                        elements: {},
                        generic: []
                    }, disallowedRules: { elements: {}, generic: [] }, transformations: {}, cachedTests: {}, cachedChecks: {}
                }; CKEDITOR.filter.instances[this.id] = this; var d = this.editor = a instanceof CKEDITOR.editor ? a : null; if (d && !b) { this.customConfig = !0; var c = d.config.allowedContent; !0 === c ? this.disabled = !0 : (c || (this.customConfig = !1), this.allow(c, "config", 1), this.allow(d.config.extraAllowedContent, "extra", 1), this.allow(F[d.enterMode] + " " + F[d.shiftEnterMode], "default", 1), this.disallow(d.config.disallowedContent)) } else this.customConfig =
                !1, this.allow(b || a, "default", 1)
            }; CKEDITOR.filter.instances = {}; CKEDITOR.filter.prototype = {
                allow: function (b, d, c) {
                    if (!m(this, b, c)) return !1; var e, k; if ("string" == typeof b) b = g(b); else if (b instanceof CKEDITOR.style) {
                        if (b.toAllowedContentRules) return this.allow(b.toAllowedContentRules(this.editor), d, c); e = b.getDefinition(); b = {}; c = e.attributes; b[e.element] = e = { styles: e.styles, requiredStyles: e.styles && CKEDITOR.tools.object.keys(e.styles) }; c && (c = J(c), e.classes = c["class"] ? c["class"].split(/\s+/) : null, e.requiredClasses =
                        e.classes, delete c["class"], e.attributes = c, e.requiredAttributes = c && CKEDITOR.tools.object.keys(c))
                    } else if (CKEDITOR.tools.isArray(b)) { for (e = 0; e < b.length; ++e) k = this.allow(b[e], d, c); return k } a(this, b, d, this.allowedContent, this._.allowedRules); return !0
                }, applyTo: function (a, b, d, c) {
                    if (this.disabled) return !1; var g = this, e = [], k = this.editor && this.editor.config.protectedSource, f, h = !1, m = { doFilter: !d, doTransform: !0, doCallbacks: !0, toHtml: b }; a.forEach(function (a) {
                        if (a.type == CKEDITOR.NODE_ELEMENT) {
                            if ("off" == a.attributes["data-cke-filter"]) return !1;
                            if (!b || "span" != a.name || !~CKEDITOR.tools.object.keys(a.attributes).join("|").indexOf("data-cke-")) if (f = w(g, a, e, m), f & 1) h = !0; else if (f & 2) return !1
                        } else if (a.type == CKEDITOR.NODE_COMMENT && a.value.match(/^\{cke_protected\}(?!\{C\})/)) {
                            var d; a: {
                                var c = decodeURIComponent(a.value.replace(/^\{cke_protected\}/, "")); d = []; var n, l, y; if (k) for (l = 0; l < k.length; ++l) if ((y = c.match(k[l])) && y[0].length == c.length) { d = !0; break a } c = CKEDITOR.htmlParser.fragment.fromHtml(c); 1 == c.children.length && (n = c.children[0]).type == CKEDITOR.NODE_ELEMENT &&
                                w(g, n, d, m); d = !d.length
                            } d || e.push(a)
                        }
                    }, null, !0); e.length && (h = !0); var n; a = []; c = F[c || (this.editor ? this.editor.enterMode : CKEDITOR.ENTER_P)]; for (var l; d = e.pop() ;) d.type == CKEDITOR.NODE_ELEMENT ? v(d, c, a) : d.remove(); for (; n = a.pop() ;) if (d = n.el, d.parent) switch (l = E[d.parent.name] || E.span, n.check) {
                        case "it": E.$removeEmpty[d.name] && !d.children.length ? v(d, c, a) : u(d) || v(d, c, a); break; case "el-up": d.parent.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || l[d.name] || v(d, c, a); break; case "parent-down": d.parent.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT ||
                        l[d.name] || v(d.parent, c, a)
                    } return h
                }, checkFeature: function (a) { if (this.disabled || !a) return !0; a.toFeature && (a = a.toFeature(this.editor)); return !a.requiredContent || this.check(a.requiredContent) }, disable: function () { this.disabled = !0 }, disallow: function (b) { if (!m(this, b, !0)) return !1; "string" == typeof b && (b = g(b)); a(this, b, null, this.disallowedContent, this._.disallowedRules); return !0 }, addContentForms: function (a) {
                    if (!this.disabled && a) {
                        var b, d, c = [], g; for (b = 0; b < a.length && !g; ++b) d = a[b], ("string" == typeof d || d instanceof
                        CKEDITOR.style) && this.check(d) && (g = d); if (g) { for (b = 0; b < a.length; ++b) c.push(A(a[b], g)); this.addTransformations(c) }
                    }
                }, addElementCallback: function (a) { this.elementCallbacks || (this.elementCallbacks = []); this.elementCallbacks.push(a) }, addFeature: function (a) {
                    if (this.disabled || !a) return !0; a.toFeature && (a = a.toFeature(this.editor)); this.allow(a.allowedContent, a.name); this.addTransformations(a.contentTransformations); this.addContentForms(a.contentForms); return a.requiredContent && (this.customConfig || this.disallowedContent.length) ?
                    this.check(a.requiredContent) : !0
                }, addTransformations: function (a) {
                    var b, d; if (!this.disabled && a) {
                        var c = this._.transformations, g; for (g = 0; g < a.length; ++g) {
                            b = a[g]; var e = void 0, k = void 0, f = void 0, h = void 0, m = void 0, n = void 0; d = []; for (k = 0; k < b.length; ++k) f = b[k], "string" == typeof f ? (f = f.split(/\s*:\s*/), h = f[0], m = null, n = f[1]) : (h = f.check, m = f.left, n = f.right), e || (e = f, e = e.element ? e.element : h ? h.match(/^([a-z0-9]+)/i)[0] : e.left.getDefinition().element), m instanceof CKEDITOR.style && (m = D(m)), d.push({
                                check: h == e ? null : h, left: m,
                                right: "string" == typeof n ? G(n) : n
                            }); b = e; c[b] || (c[b] = []); c[b].push(d)
                        }
                    }
                }, check: function (a, b, d) {
                    if (this.disabled) return !0; if (CKEDITOR.tools.isArray(a)) { for (var c = a.length; c--;) if (this.check(a[c], b, d)) return !0; return !1 } var e, f; if ("string" == typeof a) {
                        f = a + "\x3c" + (!1 === b ? "0" : "1") + (d ? "1" : "0") + "\x3e"; if (f in this._.cachedChecks) return this._.cachedChecks[f]; e = g(a).$1; var h = e.styles, c = e.classes; e.name = e.elements; e.classes = c = c ? c.split(/\s*,\s*/) : []; e.styles = k(h); e.attributes = k(e.attributes); e.children = []; c.length &&
                        (e.attributes["class"] = c.join(" ")); h && (e.attributes.style = CKEDITOR.tools.writeCssText(e.styles))
                    } else e = a.getDefinition(), h = e.styles, c = e.attributes || {}, h && !CKEDITOR.tools.isEmpty(h) ? (h = J(h), c.style = CKEDITOR.tools.writeCssText(h, !0)) : h = {}, e = { name: e.element, attributes: c, classes: c["class"] ? c["class"].split(/\s+/) : [], styles: h, children: [] }; var h = CKEDITOR.tools.clone(e), m = [], n; if (!1 !== b && (n = this._.transformations[e.name])) { for (c = 0; c < n.length; ++c) y(this, e, n[c]); p(e) } w(this, h, m, {
                        doFilter: !0, doTransform: !1 !==
                        b, skipRequired: !d, skipFinalValidation: !d
                    }); 0 < m.length ? d = !1 : ((b = e.attributes["class"]) && (e.attributes["class"] = e.attributes["class"].split(" ").sort().join(" ")), d = CKEDITOR.tools.objectCompare(e.attributes, h.attributes, !0), b && (e.attributes["class"] = b)); "string" == typeof a && (this._.cachedChecks[f] = d); return d
                }, getAllowedEnterMode: function () {
                    var a = ["p", "div", "br"], b = { p: CKEDITOR.ENTER_P, div: CKEDITOR.ENTER_DIV, br: CKEDITOR.ENTER_BR }; return function (d, c) {
                        var g = a.slice(), e; if (this.check(F[d])) return d; for (c ||
                        (g = g.reverse()) ; e = g.pop() ;) if (this.check(e)) return b[e]; return CKEDITOR.ENTER_BR
                    }
                }(), clone: function () { var a = new CKEDITOR.filter, b = CKEDITOR.tools.clone; a.allowedContent = b(this.allowedContent); a._.allowedRules = b(this._.allowedRules); a.disallowedContent = b(this.disallowedContent); a._.disallowedRules = b(this._.disallowedRules); a._.transformations = b(this._.transformations); a.disabled = this.disabled; a.editor = this.editor; return a }, destroy: function () {
                    delete CKEDITOR.filter.instances[this.id]; delete this._; delete this.allowedContent;
                    delete this.disallowedContent
                }
            }; var M = { styles: 1, attributes: 1, classes: 1 }, I = { styles: "requiredStyles", attributes: "requiredAttributes", classes: "requiredClasses" }, K = /^([a-z0-9\-*\s]+)((?:\s*\{[!\w\-,\s\*]+\}\s*|\s*\[[!\w\-,\s\*]+\]\s*|\s*\([!\w\-,\s\*]+\)\s*){0,3})(?:;\s*|$)/i, C = { styles: /{([^}]+)}/, attrs: /\[([^\]]+)\]/, classes: /\(([^\)]+)\)/ }, L = /^cke:(object|embed|param)$/, Q = /^(object|embed|param)$/, O; O = CKEDITOR.filter.transformationsTools = {
                sizeToStyle: function (a) {
                    this.lengthToStyle(a, "width"); this.lengthToStyle(a,
                    "height")
                }, sizeToAttribute: function (a) { this.lengthToAttribute(a, "width"); this.lengthToAttribute(a, "height") }, lengthToStyle: function (a, b, d) { d = d || b; if (!(d in a.styles)) { var c = a.attributes[b]; c && (/^\d+$/.test(c) && (c += "px"), a.styles[d] = c) } delete a.attributes[b] }, lengthToAttribute: function (a, b, d) { d = d || b; if (!(d in a.attributes)) { var c = a.styles[b], g = c && c.match(/^(\d+)(?:\.\d*)?px$/); g ? a.attributes[d] = g[1] : "cke-test" == c && (a.attributes[d] = "cke-test") } delete a.styles[b] }, alignmentToStyle: function (a) {
                    if (!("float" in
                    a.styles)) { var b = a.attributes.align; if ("left" == b || "right" == b) a.styles["float"] = b } delete a.attributes.align
                }, alignmentToAttribute: function (a) { if (!("align" in a.attributes)) { var b = a.styles["float"]; if ("left" == b || "right" == b) a.attributes.align = b } delete a.styles["float"] }, splitBorderShorthand: function (a) {
                    if (a.styles.border) {
                        var b = CKEDITOR.tools.style.parse.border(a.styles.border); b.color && (a.styles["border-color"] = b.color); b.style && (a.styles["border-style"] = b.style); b.width && (a.styles["border-width"] = b.width);
                        delete a.styles.border
                    }
                }, listTypeToStyle: function (a) { if (a.attributes.type) switch (a.attributes.type) { case "a": a.styles["list-style-type"] = "lower-alpha"; break; case "A": a.styles["list-style-type"] = "upper-alpha"; break; case "i": a.styles["list-style-type"] = "lower-roman"; break; case "I": a.styles["list-style-type"] = "upper-roman"; break; case "1": a.styles["list-style-type"] = "decimal"; break; default: a.styles["list-style-type"] = a.attributes.type } }, splitMarginShorthand: function (a) {
                    function b(c) {
                        a.styles["margin-top"] =
                        d[c[0]]; a.styles["margin-right"] = d[c[1]]; a.styles["margin-bottom"] = d[c[2]]; a.styles["margin-left"] = d[c[3]]
                    } if (a.styles.margin) { var d = a.styles.margin.match(/(\-?[\.\d]+\w+)/g) || ["0px"]; switch (d.length) { case 1: b([0, 0, 0, 0]); break; case 2: b([0, 1, 0, 1]); break; case 3: b([0, 1, 2, 1]); break; case 4: b([0, 1, 2, 3]) } delete a.styles.margin }
                }, matchesStyle: z, transform: function (a, b) {
                    if ("string" == typeof b) a.name = b; else {
                        var d = b.getDefinition(), c = d.styles, g = d.attributes, e, k, f, h; a.name = d.element; for (e in g) if ("class" == e) for (d =
                        a.classes.join("|"), f = g[e].split(/\s+/) ; h = f.pop() ;) -1 == d.indexOf(h) && a.classes.push(h); else a.attributes[e] = g[e]; for (k in c) a.styles[k] = c[k]
                    }
                }
            }
        })(); (function () {
            CKEDITOR.focusManager = function (a) { if (a.focusManager) return a.focusManager; this.hasFocus = !1; this.currentActive = null; this._ = { editor: a }; return this }; CKEDITOR.focusManager._ = { blurDelay: 200 }; CKEDITOR.focusManager.prototype = {
                focus: function (a) {
                    this._.timer && clearTimeout(this._.timer); a && (this.currentActive = a); this.hasFocus || this._.locked || ((a = CKEDITOR.currentInstance) &&
                    a.focusManager.blur(1), this.hasFocus = !0, (a = this._.editor.container) && a.addClass("cke_focus"), this._.editor.fire("focus"))
                }, lock: function () { this._.locked = 1 }, unlock: function () { delete this._.locked }, blur: function (a) {
                    function f() { if (this.hasFocus) { this.hasFocus = !1; var a = this._.editor.container; a && a.removeClass("cke_focus"); this._.editor.fire("blur") } } if (!this._.locked) {
                        this._.timer && clearTimeout(this._.timer); var e = CKEDITOR.focusManager._.blurDelay; a || !e ? f.call(this) : this._.timer = CKEDITOR.tools.setTimeout(function () {
                            delete this._.timer;
                            f.call(this)
                        }, e, this)
                    }
                }, add: function (a, f) { var e = a.getCustomData("focusmanager"); if (!e || e != this) { e && e.remove(a); var e = "focus", b = "blur"; f && (CKEDITOR.env.ie ? (e = "focusin", b = "focusout") : CKEDITOR.event.useCapture = 1); var c = { blur: function () { a.equals(this.currentActive) && this.blur() }, focus: function () { this.focus(a) } }; a.on(e, c.focus, this); a.on(b, c.blur, this); f && (CKEDITOR.event.useCapture = 0); a.setCustomData("focusmanager", this); a.setCustomData("focusmanager_handlers", c) } }, remove: function (a) {
                    a.removeCustomData("focusmanager");
                    var f = a.removeCustomData("focusmanager_handlers"); a.removeListener("blur", f.blur); a.removeListener("focus", f.focus)
                }
            }
        })(); CKEDITOR.keystrokeHandler = function (a) { if (a.keystrokeHandler) return a.keystrokeHandler; this.keystrokes = {}; this.blockedKeystrokes = {}; this._ = { editor: a }; return this }; (function () {
            var a, f = function (b) {
                b = b.data; var c = b.getKeystroke(), e = this.keystrokes[c], f = this._.editor; a = !1 === f.fire("key", { keyCode: c, domEvent: b }); a || (e && (a = !1 !== f.execCommand(e, { from: "keystrokeHandler" })), a || (a = !!this.blockedKeystrokes[c]));
                a && b.preventDefault(!0); return !a
            }, e = function (b) { a && (a = !1, b.data.preventDefault(!0)) }; CKEDITOR.keystrokeHandler.prototype = { attach: function (a) { a.on("keydown", f, this); if (CKEDITOR.env.gecko && CKEDITOR.env.mac) a.on("keypress", e, this) } }
        })(); (function () {
            CKEDITOR.lang = {
                languages: {
                    af: 1, ar: 1, az: 1, bg: 1, bn: 1, bs: 1, ca: 1, cs: 1, cy: 1, da: 1, de: 1, "de-ch": 1, el: 1, "en-au": 1, "en-ca": 1, "en-gb": 1, en: 1, eo: 1, es: 1, "es-mx": 1, et: 1, eu: 1, fa: 1, fi: 1, fo: 1, "fr-ca": 1, fr: 1, gl: 1, gu: 1, he: 1, hi: 1, hr: 1, hu: 1, id: 1, is: 1, it: 1, ja: 1, ka: 1, km: 1, ko: 1,
                    ku: 1, lt: 1, lv: 1, mk: 1, mn: 1, ms: 1, nb: 1, nl: 1, no: 1, oc: 1, pl: 1, "pt-br": 1, pt: 1, ro: 1, ru: 1, si: 1, sk: 1, sl: 1, sq: 1, "sr-latn": 1, sr: 1, sv: 1, th: 1, tr: 1, tt: 1, ug: 1, uk: 1, vi: 1, "zh-cn": 1, zh: 1
                }, rtl: { ar: 1, fa: 1, he: 1, ku: 1, ug: 1 }, load: function (a, f, e) { a && CKEDITOR.lang.languages[a] || (a = this.detect(f, a)); var b = this; f = function () { b[a].dir = b.rtl[a] ? "rtl" : "ltr"; e(a, b[a]) }; this[a] ? f() : CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("lang/" + a + ".js"), f, this) }, detect: function (a, f) {
                    var e = this.languages; f = f || navigator.userLanguage || navigator.language ||
                    a; var b = f.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/), c = b[1], b = b[2]; e[c + "-" + b] ? c = c + "-" + b : e[c] || (c = null); CKEDITOR.lang.detect = c ? function () { return c } : function (a) { return a }; return c || a
                }
            }
        })(); CKEDITOR.scriptLoader = function () {
            var a = {}, f = {}; return {
                load: function (e, b, c, m) {
                    var h = "string" == typeof e; h && (e = [e]); c || (c = CKEDITOR); var l = e.length, d = [], k = [], g = function (a) { b && (h ? b.call(c, a) : b.call(c, d, k)) }; if (0 === l) g(!0); else {
                        var n = function (a, b) {
                            (b ? d : k).push(a); 0 >= --l && (m && CKEDITOR.document.getDocumentElement().removeStyle("cursor"),
                            g(b))
                        }, r = function (b, d) { a[b] = 1; var c = f[b]; delete f[b]; for (var g = 0; g < c.length; g++) c[g](b, d) }, w = function (d) {
                            if (a[d]) n(d, !0); else {
                                var c = f[d] || (f[d] = []); c.push(n); if (!(1 < c.length)) {
                                    var g = new CKEDITOR.dom.element("script"); g.setAttributes({ type: "text/javascript", src: d }); b && (CKEDITOR.env.ie && (8 >= CKEDITOR.env.version || CKEDITOR.env.ie9Compat) ? g.$.onreadystatechange = function () { if ("loaded" == g.$.readyState || "complete" == g.$.readyState) g.$.onreadystatechange = null, r(d, !0) } : (g.$.onload = function () {
                                        setTimeout(function () {
                                            g.$.onload =
                                            null; g.$.onerror = null; r(d, !0)
                                        }, 0)
                                    }, g.$.onerror = function () { g.$.onload = null; g.$.onerror = null; r(d, !1) })); g.appendTo(CKEDITOR.document.getHead())
                                }
                            }
                        }; m && CKEDITOR.document.getDocumentElement().setStyle("cursor", "wait"); for (var q = 0; q < l; q++) w(e[q])
                    }
                }, queue: function () { function a() { var c; (c = b[0]) && this.load(c.scriptUrl, c.callback, CKEDITOR, 0) } var b = []; return function (c, f) { var h = this; b.push({ scriptUrl: c, callback: function () { f && f.apply(this, arguments); b.shift(); a.call(h) } }); 1 == b.length && a.call(this) } }()
            }
        }(); CKEDITOR.resourceManager =
        function (a, f) { this.basePath = a; this.fileName = f; this.registered = {}; this.loaded = {}; this.externals = {}; this._ = { waitingList: {} } }; CKEDITOR.resourceManager.prototype = {
            add: function (a, f) { if (this.registered[a]) throw Error('[CKEDITOR.resourceManager.add] The resource name "' + a + '" is already registered.'); var e = this.registered[a] = f || {}; e.name = a; e.path = this.getPath(a); CKEDITOR.fire(a + CKEDITOR.tools.capitalize(this.fileName) + "Ready", e); return this.get(a) }, get: function (a) { return this.registered[a] || null }, getPath: function (a) {
                var f =
                this.externals[a]; return CKEDITOR.getUrl(f && f.dir || this.basePath + a + "/")
            }, getFilePath: function (a) { var f = this.externals[a]; return CKEDITOR.getUrl(this.getPath(a) + (f ? f.file : this.fileName + ".js")) }, addExternal: function (a, f, e) { e || (f = f.replace(/[^\/]+$/, function (a) { e = a; return "" })); e = e || this.fileName + ".js"; a = a.split(","); for (var b = 0; b < a.length; b++) this.externals[a[b]] = { dir: f, file: e } }, load: function (a, f, e) {
                CKEDITOR.tools.isArray(a) || (a = a ? [a] : []); for (var b = this.loaded, c = this.registered, m = [], h = {}, l = {}, d = 0; d <
                a.length; d++) { var k = a[d]; if (k) if (b[k] || c[k]) l[k] = this.get(k); else { var g = this.getFilePath(k); m.push(g); g in h || (h[g] = []); h[g].push(k) } } CKEDITOR.scriptLoader.load(m, function (a, d) { if (d.length) throw Error('[CKEDITOR.resourceManager.load] Resource name "' + h[d[0]].join(",") + '" was not found at "' + d[0] + '".'); for (var c = 0; c < a.length; c++) for (var g = h[a[c]], k = 0; k < g.length; k++) { var m = g[k]; l[m] = this.get(m); b[m] = 1 } f.call(e, l) }, this)
            }
        }; CKEDITOR.plugins = new CKEDITOR.resourceManager("plugins/", "plugin"); CKEDITOR.plugins.load =
        CKEDITOR.tools.override(CKEDITOR.plugins.load, function (a) {
            var f = {}; return function (e, b, c) {
                var m = {}, h = function (e) {
                    a.call(this, e, function (a) {
                        CKEDITOR.tools.extend(m, a); var e = [], g; for (g in a) {
                            var n = a[g], l = n && n.requires; if (!f[g]) { if (n.icons) for (var w = n.icons.split(","), q = w.length; q--;) CKEDITOR.skin.addIcon(w[q], n.path + "icons/" + (CKEDITOR.env.hidpi && n.hidpi ? "hidpi/" : "") + w[q] + ".png"); n.isSupportedEnvironment = n.isSupportedEnvironment || function () { return !0 }; f[g] = 1 } if (l) for (l.split && (l = l.split(",")), n = 0; n < l.length; n++) m[l[n]] ||
                            e.push(l[n])
                        } if (e.length) h.call(this, e); else { for (g in m) n = m[g], n.onLoad && !n.onLoad._called && (!1 === n.onLoad() && delete m[g], n.onLoad._called = 1); b && b.call(c || window, m) }
                    }, this)
                }; h.call(this, e)
            }
        }); CKEDITOR.plugins.setLang = function (a, f, e) { var b = this.get(a); a = b.langEntries || (b.langEntries = {}); b = b.lang || (b.lang = []); b.split && (b = b.split(",")); -1 == CKEDITOR.tools.indexOf(b, f) && b.push(f); a[f] = e }; CKEDITOR.ui = function (a) { if (a.ui) return a.ui; this.items = {}; this.instances = {}; this.editor = a; this._ = { handlers: {} }; return this };
        CKEDITOR.ui.prototype = {
            add: function (a, f, e) { e.name = a.toLowerCase(); var b = this.items[a] = { type: f, command: e.command || null, args: Array.prototype.slice.call(arguments, 2) }; CKEDITOR.tools.extend(b, e) }, get: function (a) { return this.instances[a] }, create: function (a) { var f = this.items[a], e = f && this._.handlers[f.type], b = f && f.command && this.editor.getCommand(f.command), e = e && e.create.apply(this, f.args); this.instances[a] = e; b && b.uiItems.push(e); e && !e.type && (e.type = f.type); return e }, addHandler: function (a, f) {
                this._.handlers[a] =
                f
            }, space: function (a) { return CKEDITOR.document.getById(this.spaceId(a)) }, spaceId: function (a) { return this.editor.id + "_" + a }
        }; CKEDITOR.event.implementOn(CKEDITOR.ui); (function () {
            function a(a, d, c) {
                CKEDITOR.event.call(this); a = a && CKEDITOR.tools.clone(a); if (void 0 !== d) {
                    if (!(d instanceof CKEDITOR.dom.element)) throw Error("Expect element of type CKEDITOR.dom.element."); if (!c) throw Error("One of the element modes must be specified."); if (CKEDITOR.env.ie && CKEDITOR.env.quirks && c == CKEDITOR.ELEMENT_MODE_INLINE) throw Error("Inline element mode is not supported on IE quirks.");
                    if (!e(d, c)) throw Error('The specified element mode is not supported on element: "' + d.getName() + '".'); this.element = d; this.elementMode = c; this.name = this.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO && (d.getId() || d.getNameAtt())
                } else this.elementMode = CKEDITOR.ELEMENT_MODE_NONE; this._ = {}; this.commands = {}; this.templates = {}; this.name = this.name || f(); this.id = CKEDITOR.tools.getNextId(); this.status = "unloaded"; this.config = CKEDITOR.tools.prototypedCopy(CKEDITOR.config); this.ui = new CKEDITOR.ui(this); this.focusManager =
                new CKEDITOR.focusManager(this); this.keystrokeHandler = new CKEDITOR.keystrokeHandler(this); this.on("readOnly", b); this.on("selectionChange", function (a) { m(this, a.data.path) }); this.on("activeFilterChange", function () { m(this, this.elementPath(), !0) }); this.on("mode", b); CKEDITOR.dom.selection.setupEditorOptimization(this); this.on("instanceReady", function () {
                    if (this.config.startupFocus) {
                        if ("end" === this.config.startupFocus) {
                            var a = this.createRange(); a.selectNodeContents(this.editable()); a.shrink(CKEDITOR.SHRINK_ELEMENT,
                            !0); a.collapse(); this.getSelection().selectRanges([a])
                        } this.focus()
                    }
                }); CKEDITOR.fire("instanceCreated", null, this); CKEDITOR.add(this); CKEDITOR.tools.setTimeout(function () { this.isDestroyed() || this.isDetached() || l(this, a) }, 0, this)
            } function f() { do var a = "editor" + ++q; while (CKEDITOR.instances[a]); return a } function e(a, b) { return b == CKEDITOR.ELEMENT_MODE_INLINE ? a.is(CKEDITOR.dtd.$editable) || a.is("textarea") : b == CKEDITOR.ELEMENT_MODE_REPLACE ? !a.is(CKEDITOR.dtd.$nonBodyContent) : 1 } function b() {
                var a = this.commands,
                b; for (b in a) c(this, a[b])
            } function c(a, b) { b[b.startDisabled ? "disable" : a.readOnly && !b.readOnly ? "disable" : b.modes[a.mode] ? "enable" : "disable"]() } function m(a, b, d) { if (b) { var c, g, e = a.commands; for (g in e) c = e[g], (d || c.contextSensitive) && c.refresh(a, b) } } function h(a) {
                var b = a.config.customConfig; if (!b) return !1; var b = CKEDITOR.getUrl(b), d = p[b] || (p[b] = {}); d.fn ? (d.fn.call(a, a.config), CKEDITOR.getUrl(a.config.customConfig) != b && h(a) || a.fireOnce("customConfigLoaded")) : CKEDITOR.scriptLoader.queue(b, function () {
                    d.fn =
                    CKEDITOR.editorConfig ? CKEDITOR.editorConfig : function () { }; h(a)
                }); return !0
            } function l(a, b) {
                a.on("customConfigLoaded", function () {
                    if (b) { if (b.on) for (var c in b.on) a.on(c, b.on[c]); CKEDITOR.tools.extend(a.config, b, !0); delete a.config.on } c = a.config; a.readOnly = c.readOnly ? !0 : a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? a.element.is("textarea") ? a.element.hasAttribute("disabled") || a.element.hasAttribute("readonly") : a.element.isReadOnly() : a.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE ? a.element.hasAttribute("disabled") ||
                    a.element.hasAttribute("readonly") : !1; a.blockless = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? !(a.element.is("textarea") || CKEDITOR.dtd[a.element.getName()].p) : !1; a.tabIndex = c.tabIndex || a.element && a.element.getAttribute("tabindex") || 0; a.activeEnterMode = a.enterMode = a.blockless ? CKEDITOR.ENTER_BR : c.enterMode; a.activeShiftEnterMode = a.shiftEnterMode = a.blockless ? CKEDITOR.ENTER_BR : c.shiftEnterMode; c.skin && (CKEDITOR.skinName = c.skin); a.fireOnce("configLoaded"); a.dataProcessor = new CKEDITOR.htmlDataProcessor(a);
                    a.filter = a.activeFilter = new CKEDITOR.filter(a); d(a)
                }); b && null != b.customConfig && (a.config.customConfig = b.customConfig); h(a) || a.fireOnce("customConfigLoaded")
            } function d(a) { CKEDITOR.skin.loadPart("editor", function () { k(a) }) } function k(a) {
                CKEDITOR.lang.load(a.config.language, a.config.defaultLanguage, function (b, d) {
                    var c = a.config.title; a.langCode = b; a.lang = CKEDITOR.tools.prototypedCopy(d); a.title = "string" == typeof c || !1 === c ? c : [a.lang.editor, a.name].join(", "); a.config.contentsLangDirection || (a.config.contentsLangDirection =
                    a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? a.element.getDirection(1) : a.lang.dir); a.fire("langLoaded"); g(a)
                })
            } function g(a) { a.getStylesSet(function (b) { a.once("loaded", function () { a.fire("stylesSet", { styles: b }) }, null, null, 1); n(a) }) } function n(a) {
                function b(a) { if (!a) return ""; CKEDITOR.tools.isArray(a) && (a = a.join(",")); return a.replace(/\s/g, "") } var d = a.config, c = b(d.plugins), g = b(d.extraPlugins), e = b(d.removePlugins); if (g) var k = new RegExp("(?:^|,)(?:" + g.replace(/,/g, "|") + ")(?\x3d,|$)", "g"), c = c.replace(k,
                ""), c = c + ("," + g); if (e) var f = new RegExp("(?:^|,)(?:" + e.replace(/,/g, "|") + ")(?\x3d,|$)", "g"), c = c.replace(f, ""); CKEDITOR.env.air && (c += ",adobeair"); CKEDITOR.plugins.load(c.split(","), function (b) {
                    var c = [], g = [], e = []; a.plugins = CKEDITOR.tools.extend({}, a.plugins, b); for (var k in b) {
                        var h = b[k], m = h.lang, n = null, l = h.requires, y; CKEDITOR.tools.isArray(l) && (l = l.join(",")); if (l && (y = l.match(f))) for (; l = y.pop() ;) CKEDITOR.error("editor-plugin-required", { plugin: l.replace(",", ""), requiredBy: k }); m && !a.lang[k] && (m.split &&
                        (m = m.split(",")), 0 <= CKEDITOR.tools.indexOf(m, a.langCode) ? n = a.langCode : (n = a.langCode.replace(/-.*/, ""), n = n != a.langCode && 0 <= CKEDITOR.tools.indexOf(m, n) ? n : 0 <= CKEDITOR.tools.indexOf(m, "en") ? "en" : m[0]), h.langEntries && h.langEntries[n] ? (a.lang[k] = h.langEntries[n], n = null) : e.push(CKEDITOR.getUrl(h.path + "lang/" + n + ".js"))); g.push(n); c.push(h)
                    } CKEDITOR.scriptLoader.load(e, function () {
                        if (!a.isDestroyed() && !a.isDetached()) {
                            for (var b = ["beforeInit", "init", "afterInit"], e = 0; e < b.length; e++) for (var k = 0; k < c.length; k++) {
                                var f =
                                c[k]; 0 === e && g[k] && f.lang && f.langEntries && (a.lang[f.name] = f.langEntries[g[k]]); if (f[b[e]]) f[b[e]](a)
                            } a.fireOnce("pluginsLoaded"); d.keystrokes && a.setKeystroke(a.config.keystrokes); for (k = 0; k < a.config.blockedKeystrokes.length; k++) a.keystrokeHandler.blockedKeystrokes[a.config.blockedKeystrokes[k]] = 1; a.status = "loaded"; a.fireOnce("loaded"); CKEDITOR.fire("instanceLoaded", null, a)
                        }
                    })
                })
            } function r() {
                var a = this.element; if (a && this.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO) {
                    var b = this.getData(); this.config.htmlEncodeOutput &&
                    (b = CKEDITOR.tools.htmlEncode(b)); a.is("textarea") ? a.setValue(b) : a.setHtml(b); return !0
                } return !1
            } function w(a, b) {
                function d(a) { var b = a.startContainer, c = a.endContainer; return b.is && (b.is("tr") || b.is("td") && b.equals(c) && a.endOffset === b.getChildCount()) ? !0 : !1 } function c(a) { var b = a.startContainer; return b.is("tr") ? a.cloneContents() : b.clone(!0) } for (var g = new CKEDITOR.dom.documentFragment, e, k, f, h = 0; h < a.length; h++) {
                    var m = a[h], n = m.startContainer.getAscendant("tr", !0); d(m) ? (e || (e = n.getAscendant("table").clone(),
                    e.append(n.getAscendant({ thead: 1, tbody: 1, tfoot: 1 }).clone()), g.append(e), e = e.findOne("thead, tbody, tfoot")), k && k.equals(n) || (k = n, f = n.clone(), e.append(f)), f.append(c(m))) : g.append(m.cloneContents())
                } return e ? g : b.getHtmlFromRange(a[0])
            } a.prototype = CKEDITOR.editor.prototype; CKEDITOR.editor = a; var q = 0, p = {}; CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
                plugins: {
                    detectConflict: function (a, b) {
                        for (var d = 0; d < b.length; d++) {
                            var c = b[d]; if (this[c]) return CKEDITOR.warn("editor-plugin-conflict", { plugin: a, replacedWith: c }),
                            !0
                        } return !1
                    }
                }, addCommand: function (a, b) { b.name = a.toLowerCase(); var d = b instanceof CKEDITOR.command ? b : new CKEDITOR.command(this, b); this.mode && c(this, d); return this.commands[a] = d }, _attachToForm: function () {
                    function a(b) { d.updateElement(); d._.required && !c.getValue() && !1 === d.fire("required") && b.data.preventDefault() } function b(a) { return !!(a && a.call && a.apply) } var d = this, c = d.element, g = new CKEDITOR.dom.element(c.$.form); c.is("textarea") && g && (g.on("submit", a), b(g.$.submit) && (g.$.submit = CKEDITOR.tools.override(g.$.submit,
                    function (b) { return function () { a(); b.apply ? b.apply(this) : b() } })), d.on("destroy", function () { g.removeListener("submit", a) }))
                }, destroy: function (a) {
                    var b = CKEDITOR.filter.instances, d = this; this.fire("beforeDestroy"); !a && r.call(this); this.editable(null); this.filter && delete this.filter; CKEDITOR.tools.array.forEach(CKEDITOR.tools.object.keys(b), function (a) { a = b[a]; d === a.editor && a.destroy() }); delete this.activeFilter; this.status = "destroyed"; this.fire("destroy"); this.removeAllListeners(); CKEDITOR.remove(this);
                    CKEDITOR.fire("instanceDestroyed", null, this)
                }, elementPath: function (a) { if (!a) { a = this.getSelection(); if (!a) return null; a = a.getStartElement() } return a ? new CKEDITOR.dom.elementPath(a, this.editable()) : null }, createRange: function () { var a = this.editable(); return a ? new CKEDITOR.dom.range(a) : null }, execCommand: function (a, b) {
                    var d = this.getCommand(a), c = { name: a, commandData: b || {}, command: d }; return d && d.state != CKEDITOR.TRISTATE_DISABLED && !1 !== this.fire("beforeCommandExec", c) && (c.returnValue = d.exec(c.commandData),
                    !d.async && !1 !== this.fire("afterCommandExec", c)) ? c.returnValue : !1
                }, getCommand: function (a) { return this.commands[a] }, getData: function (a) { !a && this.fire("beforeGetData"); var b = this._.data; "string" != typeof b && (b = (b = this.element) && this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE ? b.is("textarea") ? b.getValue() : b.getHtml() : ""); b = { dataValue: b }; !a && this.fire("getData", b); return b.dataValue }, getSnapshot: function () {
                    var a = this.fire("getSnapshot"); "string" != typeof a && (a = (a = this.element) && this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE ?
                    a.is("textarea") ? a.getValue() : a.getHtml() : ""); return a
                }, loadSnapshot: function (a) { this.fire("loadSnapshot", a) }, setData: function (a, b, d) { var c = !0, g = b; b && "object" == typeof b && (d = b.internal, g = b.callback, c = !b.noSnapshot); !d && c && this.fire("saveSnapshot"); if (g || !d) this.once("dataReady", function (a) { !d && c && this.fire("saveSnapshot"); g && g.call(a.editor) }); a = { dataValue: a }; !d && this.fire("setData", a); this._.data = a.dataValue; !d && this.fire("afterSetData", a) }, setReadOnly: function (a) {
                    a = null == a || a; this.readOnly != a && (this.readOnly =
                    a, this.keystrokeHandler.blockedKeystrokes[8] = +a, this.editable().setReadOnly(a), this.fire("readOnly"))
                }, insertHtml: function (a, b, d) { this.fire("insertHtml", { dataValue: a, mode: b, range: d }) }, insertText: function (a) { this.fire("insertText", a) }, insertElement: function (a) { this.fire("insertElement", a) }, getSelectedHtml: function (a) { var b = this.editable(), d = this.getSelection(), d = d && d.getRanges(); if (!b || !d || 0 === d.length) return null; b = w(d, b); return a ? b.getHtml() : b }, extractSelectedHtml: function (a, b) {
                    var d = this.editable(),
                    c = this.getSelection().getRanges(), g = new CKEDITOR.dom.documentFragment, e; if (!d || 0 === c.length) return null; for (e = 0; e < c.length; e++) g.append(d.extractHtmlFromRange(c[e], b)); b || this.getSelection().selectRanges([c[0]]); return a ? g.getHtml() : g
                }, focus: function () { this.fire("beforeFocus") }, checkDirty: function () { return "ready" == this.status && this._.previousValue !== this.getSnapshot() }, resetDirty: function () { this._.previousValue = this.getSnapshot() }, updateElement: function () { return r.call(this) }, setKeystroke: function () {
                    for (var a =
                    this.keystrokeHandler.keystrokes, b = CKEDITOR.tools.isArray(arguments[0]) ? arguments[0] : [[].slice.call(arguments, 0)], d, c, g = b.length; g--;) d = b[g], c = 0, CKEDITOR.tools.isArray(d) && (c = d[1], d = d[0]), c ? a[d] = c : delete a[d]
                }, getCommandKeystroke: function (a, b) { var d = "string" === typeof a ? this.getCommand(a) : a, c = []; if (d) { var g = CKEDITOR.tools.object.findKey(this.commands, d), e = this.keystrokeHandler.keystrokes; if (d.fakeKeystroke) c.push(d.fakeKeystroke); else for (var k in e) e[k] === g && c.push(k) } return b ? c : c[0] || null }, addFeature: function (a) { return this.filter.addFeature(a) },
                setActiveFilter: function (a) { a || (a = this.filter); this.activeFilter !== a && (this.activeFilter = a, this.fire("activeFilterChange"), a === this.filter ? this.setActiveEnterMode(null, null) : this.setActiveEnterMode(a.getAllowedEnterMode(this.enterMode), a.getAllowedEnterMode(this.shiftEnterMode, !0))) }, setActiveEnterMode: function (a, b) {
                    a = a ? this.blockless ? CKEDITOR.ENTER_BR : a : this.enterMode; b = b ? this.blockless ? CKEDITOR.ENTER_BR : b : this.shiftEnterMode; if (this.activeEnterMode != a || this.activeShiftEnterMode != b) this.activeEnterMode =
                    a, this.activeShiftEnterMode = b, this.fire("activeEnterModeChange")
                }, showNotification: function (a) { alert(a) }, isDetached: function () { return !!this.container && this.container.isDetached() }, isDestroyed: function () { return "destroyed" === this.status }
            }); CKEDITOR.editor._getEditorElement = function (a) {
                if (!CKEDITOR.env.isCompatible) return null; var b = CKEDITOR.dom.element.get(a); return b ? b.getEditor() ? (CKEDITOR.error("editor-element-conflict", { editorName: b.getEditor().name }), null) : b : (CKEDITOR.error("editor-incorrect-element",
                { element: a }), null)
            }
        })(); CKEDITOR.ELEMENT_MODE_NONE = 0; CKEDITOR.ELEMENT_MODE_REPLACE = 1; CKEDITOR.ELEMENT_MODE_APPENDTO = 2; CKEDITOR.ELEMENT_MODE_INLINE = 3; CKEDITOR.htmlParser = function () { this._ = { htmlPartsRegex: /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)--\x3e)|(?:([^\/\s>]+)((?:\s+[\w\-:.]+(?:\s*=\s*?(?:(?:"[^"]*")|(?:'[^']*')|[^\s"'\/>]+))?)*)[\S\s]*?(\/?)>))/g } }; (function () {
            var a = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g, f = {
                checked: 1, compact: 1, declare: 1, defer: 1, disabled: 1,
                ismap: 1, multiple: 1, nohref: 1, noresize: 1, noshade: 1, nowrap: 1, readonly: 1, selected: 1
            }; CKEDITOR.htmlParser.prototype = {
                onTagOpen: function () { }, onTagClose: function () { }, onText: function () { }, onCDATA: function () { }, onComment: function () { }, parse: function (e) {
                    for (var b, c, m = 0, h; b = this._.htmlPartsRegex.exec(e) ;) {
                        c = b.index; if (c > m) if (m = e.substring(m, c), h) h.push(m); else this.onText(m); m = this._.htmlPartsRegex.lastIndex; if (c = b[1]) if (c = c.toLowerCase(), h && CKEDITOR.dtd.$cdata[c] && (this.onCDATA(h.join("")), h = null), !h) {
                            this.onTagClose(c);
                            continue
                        } if (h) h.push(b[0]); else if (c = b[3]) { if (c = c.toLowerCase(), !/="/.test(c)) { var l = {}, d, k = b[4]; b = !!b[5]; if (k) for (; d = a.exec(k) ;) { var g = d[1].toLowerCase(); d = d[2] || d[3] || d[4] || ""; l[g] = !d && f[g] ? g : CKEDITOR.tools.htmlDecodeAttr(d) } this.onTagOpen(c, l, b); !h && CKEDITOR.dtd.$cdata[c] && (h = []) } } else if (c = b[2]) this.onComment(c)
                    } if (e.length > m) this.onText(e.substring(m, e.length))
                }
            }
        })(); CKEDITOR.htmlParser.basicWriter = CKEDITOR.tools.createClass({
            $: function () { this._ = { output: [] } }, proto: {
                openTag: function (a) {
                    this._.output.push("\x3c",
                    a)
                }, openTagClose: function (a, f) { f ? this._.output.push(" /\x3e") : this._.output.push("\x3e") }, attribute: function (a, f) { "string" == typeof f && (f = CKEDITOR.tools.htmlEncodeAttr(f)); this._.output.push(" ", a, '\x3d"', f, '"') }, closeTag: function (a) { this._.output.push("\x3c/", a, "\x3e") }, text: function (a) { this._.output.push(a) }, comment: function (a) { this._.output.push("\x3c!--", a, "--\x3e") }, write: function (a) { this._.output.push(a) }, reset: function () { this._.output = []; this._.indent = !1 }, getHtml: function (a) {
                    var f = this._.output.join("");
                    a && this.reset(); return f
                }
            }
        }); "use strict"; (function () {
            CKEDITOR.htmlParser.node = function () { }; CKEDITOR.htmlParser.node.prototype = {
                remove: function () { var a = this.parent.children, f = CKEDITOR.tools.indexOf(a, this), e = this.previous, b = this.next; e && (e.next = b); b && (b.previous = e); a.splice(f, 1); this.parent = null }, replaceWith: function (a) { var f = this.parent.children, e = CKEDITOR.tools.indexOf(f, this), b = a.previous = this.previous, c = a.next = this.next; b && (b.next = a); c && (c.previous = a); f[e] = a; a.parent = this.parent; this.parent = null },
                insertAfter: function (a) { var f = a.parent.children, e = CKEDITOR.tools.indexOf(f, a), b = a.next; f.splice(e + 1, 0, this); this.next = a.next; this.previous = a; a.next = this; b && (b.previous = this); this.parent = a.parent }, insertBefore: function (a) { var f = a.parent.children, e = CKEDITOR.tools.indexOf(f, a); f.splice(e, 0, this); this.next = a; (this.previous = a.previous) && (a.previous.next = this); a.previous = this; this.parent = a.parent }, getAscendant: function (a) {
                    var f = "function" == typeof a ? a : "string" == typeof a ? function (b) { return b.name == a } : function (b) {
                        return b.name in
                        a
                    }, e = this.parent; for (; e && e.type == CKEDITOR.NODE_ELEMENT;) { if (f(e)) return e; e = e.parent } return null
                }, wrapWith: function (a) { this.replaceWith(a); a.add(this); return a }, getIndex: function () { return CKEDITOR.tools.indexOf(this.parent.children, this) }, getFilterContext: function (a) { return a || {} }
            }
        })(); "use strict"; CKEDITOR.htmlParser.comment = function (a) { this.value = a; this._ = { isBlockLike: !1 } }; CKEDITOR.htmlParser.comment.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node, {
            type: CKEDITOR.NODE_COMMENT, filter: function (a,
            f) { var e = this.value; if (!(e = a.onComment(f, e, this))) return this.remove(), !1; if ("string" != typeof e) return this.replaceWith(e), !1; this.value = e; return !0 }, writeHtml: function (a, f) { f && this.filter(f); a.comment(this.value) }
        }); "use strict"; (function () {
            CKEDITOR.htmlParser.text = function (a) { this.value = a; this._ = { isBlockLike: !1 } }; CKEDITOR.htmlParser.text.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node, {
                type: CKEDITOR.NODE_TEXT, filter: function (a, f) {
                    if (!(this.value = a.onText(f, this.value, this))) return this.remove(),
                    !1
                }, writeHtml: function (a, f) { f && this.filter(f); a.text(this.value) }
            })
        })(); "use strict"; (function () { CKEDITOR.htmlParser.cdata = function (a) { this.value = a }; CKEDITOR.htmlParser.cdata.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node, { type: CKEDITOR.NODE_TEXT, filter: function () { }, writeHtml: function (a) { a.write(this.value) } }) })(); "use strict"; CKEDITOR.htmlParser.fragment = function () { this.children = []; this.parent = null; this._ = { isBlockLike: !0, hasInlineStarted: !1 } }; (function () {
            function a(a) {
                return a.attributes["data-cke-survive"] ?
                !1 : "a" == a.name && a.attributes.href || CKEDITOR.dtd.$removeEmpty[a.name]
            } var f = CKEDITOR.tools.extend({ table: 1, ul: 1, ol: 1, dl: 1 }, CKEDITOR.dtd.table, CKEDITOR.dtd.ul, CKEDITOR.dtd.ol, CKEDITOR.dtd.dl), e = { ol: 1, ul: 1 }, b = CKEDITOR.tools.extend({}, { html: 1 }, CKEDITOR.dtd.html, CKEDITOR.dtd.body, CKEDITOR.dtd.head, { style: 1, script: 1 }), c = { ul: "li", ol: "li", dl: "dd", table: "tbody", tbody: "tr", thead: "tr", tfoot: "tr", tr: "td" }; CKEDITOR.htmlParser.fragment.fromHtml = function (m, h, l) {
                function d(a) {
                    var b; if (0 < u.length) for (var d = 0; d < u.length; d++) {
                        var c =
                        u[d], g = c.name, e = CKEDITOR.dtd[g], f = t.name && CKEDITOR.dtd[t.name]; f && !f[g] || a && e && !e[a] && CKEDITOR.dtd[a] ? g == t.name && (n(t, t.parent, 1), d--) : (b || (k(), b = 1), c = c.clone(), c.parent = t, t = c, u.splice(d, 1), d--)
                    }
                } function k() { for (; x.length;) n(x.shift(), t) } function g(a) { if (a._.isBlockLike && "pre" != a.name && "textarea" != a.name) { var b = a.children.length, d = a.children[b - 1], c; d && d.type == CKEDITOR.NODE_TEXT && ((c = CKEDITOR.tools.rtrim(d.value)) ? d.value = c : a.children.length = b - 1) } } function n(b, d, c) {
                    d = d || t || p; var e = t; void 0 === b.previous &&
                    (r(d, b) && (t = d, q.onTagOpen(l, {}), b.returnPoint = d = t), g(b), a(b) && !b.children.length || d.add(b), "pre" == b.name && (v = !1), "textarea" == b.name && (B = !1)); b.returnPoint ? (t = b.returnPoint, delete b.returnPoint) : t = c ? d : e
                } function r(a, b) { if ((a == p || "body" == a.name) && l && (!a.name || CKEDITOR.dtd[a.name][l])) { var d, c; return (d = b.attributes && (c = b.attributes["data-cke-real-element-type"]) ? c : b.name) && d in CKEDITOR.dtd.$inline && !(d in CKEDITOR.dtd.head) && !b.isOrphan || b.type == CKEDITOR.NODE_TEXT } } function w(a, b) {
                    return a in CKEDITOR.dtd.$listItem ||
                    a in CKEDITOR.dtd.$tableContent ? a == b || "dt" == a && "dd" == b || "dd" == a && "dt" == b : !1
                } var q = new CKEDITOR.htmlParser, p = h instanceof CKEDITOR.htmlParser.element ? h : "string" == typeof h ? new CKEDITOR.htmlParser.element(h) : new CKEDITOR.htmlParser.fragment, u = [], x = [], t = p, B = "textarea" == p.name, v = "pre" == p.name; q.onTagOpen = function (c, g, h, m) {
                    g = new CKEDITOR.htmlParser.element(c, g); g.isUnknown && h && (g.isEmpty = !0); g.isOptionalClose = m; if (a(g)) u.push(g); else {
                        if ("pre" == c) v = !0; else {
                            if ("br" == c && v) {
                                t.add(new CKEDITOR.htmlParser.text("\n"));
                                return
                            } "textarea" == c && (B = !0)
                        } if ("br" == c) x.push(g); else {
                            for (; !(m = (h = t.name) ? CKEDITOR.dtd[h] || (t._.isBlockLike ? CKEDITOR.dtd.div : CKEDITOR.dtd.span) : b, g.isUnknown || t.isUnknown || m[c]) ;) if (t.isOptionalClose) q.onTagClose(h); else if (c in e && h in e) h = t.children, (h = h[h.length - 1]) && "li" == h.name || n(h = new CKEDITOR.htmlParser.element("li"), t), !g.returnPoint && (g.returnPoint = t), t = h; else if (c in CKEDITOR.dtd.$listItem && !w(c, h)) q.onTagOpen("li" == c ? "ul" : "dl", {}, 0, 1); else if (h in f && !w(c, h)) !g.returnPoint && (g.returnPoint =
                            t), t = t.parent; else if (h in CKEDITOR.dtd.$inline && u.unshift(t), t.parent) n(t, t.parent, 1); else { g.isOrphan = 1; break } d(c); k(); g.parent = t; g.isEmpty ? n(g) : t = g
                        }
                    }
                }; q.onTagClose = function (a) { for (var b = u.length - 1; 0 <= b; b--) if (a == u[b].name) { u.splice(b, 1); return } for (var d = [], c = [], g = t; g != p && g.name != a;) g._.isBlockLike || c.unshift(g), d.push(g), g = g.returnPoint || g.parent; if (g != p) { for (b = 0; b < d.length; b++) { var e = d[b]; n(e, e.parent) } t = g; g._.isBlockLike && k(); n(g, g.parent); g == t && (t = t.parent); u = u.concat(c) } "body" == a && (l = !1) }; q.onText =
                function (a) { if (!(t._.hasInlineStarted && !x.length || v || B) && (a = CKEDITOR.tools.ltrim(a), 0 === a.length)) return; var g = t.name, e = g ? CKEDITOR.dtd[g] || (t._.isBlockLike ? CKEDITOR.dtd.div : CKEDITOR.dtd.span) : b; if (!B && !e["#"] && g in f) q.onTagOpen(c[g] || ""), q.onText(a); else { k(); d(); v || B || (a = a.replace(/[\t\r\n ]{2,}|[\t\r\n]/g, " ")); a = new CKEDITOR.htmlParser.text(a); if (r(t, a)) this.onTagOpen(l, {}, 0, 1); t.add(a) } }; q.onCDATA = function (a) { t.add(new CKEDITOR.htmlParser.cdata(a)) }; q.onComment = function (a) { k(); d(); t.add(new CKEDITOR.htmlParser.comment(a)) };
                q.parse(m); for (k() ; t != p;) n(t, t.parent, 1); g(p); return p
            }; CKEDITOR.htmlParser.fragment.prototype = {
                type: CKEDITOR.NODE_DOCUMENT_FRAGMENT, add: function (a, b) {
                    isNaN(b) && (b = this.children.length); var c = 0 < b ? this.children[b - 1] : null; if (c) { if (a._.isBlockLike && c.type == CKEDITOR.NODE_TEXT && (c.value = CKEDITOR.tools.rtrim(c.value), 0 === c.value.length)) { this.children.pop(); this.add(a); return } c.next = a } a.previous = c; a.parent = this; this.children.splice(b, 0, a); this._.hasInlineStarted || (this._.hasInlineStarted = a.type == CKEDITOR.NODE_TEXT ||
                    a.type == CKEDITOR.NODE_ELEMENT && !a._.isBlockLike)
                }, filter: function (a, b) { b = this.getFilterContext(b); a.onRoot(b, this); this.filterChildren(a, !1, b) }, filterChildren: function (a, b, c) { if (this.childrenFilteredBy != a.id) { c = this.getFilterContext(c); if (b && !this.parent) a.onRoot(c, this); this.childrenFilteredBy = a.id; for (b = 0; b < this.children.length; b++) !1 === this.children[b].filter(a, c) && b-- } }, writeHtml: function (a, b) { b && this.filter(b); this.writeChildrenHtml(a) }, writeChildrenHtml: function (a, b, c) {
                    var d = this.getFilterContext();
                    if (c && !this.parent && b) b.onRoot(d, this); b && this.filterChildren(b, !1, d); b = 0; c = this.children; for (d = c.length; b < d; b++) c[b].writeHtml(a)
                }, forEach: function (a, b, c) { if (!(c || b && this.type != b)) var d = a(this); if (!1 !== d) { c = this.children; for (var e = 0; e < c.length; e++) d = c[e], d.type == CKEDITOR.NODE_ELEMENT ? d.forEach(a, b) : b && d.type != b || a(d) } }, getFilterContext: function (a) { return a || {} }
            }
        })(); "use strict"; (function () {
            function a() { this.rules = [] } function f(e, b, c, f) { var h, l; for (h in b) (l = e[h]) || (l = e[h] = new a), l.add(b[h], c, f) }
            CKEDITOR.htmlParser.filter = CKEDITOR.tools.createClass({
                $: function (e) { this.id = CKEDITOR.tools.getNextNumber(); this.elementNameRules = new a; this.attributeNameRules = new a; this.elementsRules = {}; this.attributesRules = {}; this.textRules = new a; this.commentRules = new a; this.rootRules = new a; e && this.addRules(e, 10) }, proto: {
                    addRules: function (a, b) {
                        var c; "number" == typeof b ? c = b : b && "priority" in b && (c = b.priority); "number" != typeof c && (c = 10); "object" != typeof b && (b = {}); a.elementNames && this.elementNameRules.addMany(a.elementNames,
                        c, b); a.attributeNames && this.attributeNameRules.addMany(a.attributeNames, c, b); a.elements && f(this.elementsRules, a.elements, c, b); a.attributes && f(this.attributesRules, a.attributes, c, b); a.text && this.textRules.add(a.text, c, b); a.comment && this.commentRules.add(a.comment, c, b); a.root && this.rootRules.add(a.root, c, b)
                    }, applyTo: function (a) { a.filter(this) }, onElementName: function (a, b) { return this.elementNameRules.execOnName(a, b) }, onAttributeName: function (a, b) { return this.attributeNameRules.execOnName(a, b) }, onText: function (a,
                    b, c) { return this.textRules.exec(a, b, c) }, onComment: function (a, b, c) { return this.commentRules.exec(a, b, c) }, onRoot: function (a, b) { return this.rootRules.exec(a, b) }, onElement: function (a, b) { for (var c = [this.elementsRules["^"], this.elementsRules[b.name], this.elementsRules.$], f, h = 0; 3 > h; h++) if (f = c[h]) { f = f.exec(a, b, this); if (!1 === f) return null; if (f && f != b) return this.onNode(a, f); if (b.parent && !b.name) break } return b }, onNode: function (a, b) {
                        var c = b.type; return c == CKEDITOR.NODE_ELEMENT ? this.onElement(a, b) : c == CKEDITOR.NODE_TEXT ?
                        new CKEDITOR.htmlParser.text(this.onText(a, b.value, b)) : c == CKEDITOR.NODE_COMMENT ? new CKEDITOR.htmlParser.comment(this.onComment(a, b.value, b)) : null
                    }, onAttribute: function (a, b, c, f) { return (c = this.attributesRules[c]) ? c.exec(a, f, b, this) : f }
                }
            }); CKEDITOR.htmlParser.filterRulesGroup = a; a.prototype = {
                add: function (a, b, c) { this.rules.splice(this.findIndex(b), 0, { value: a, priority: b, options: c }) }, addMany: function (a, b, c) {
                    for (var f = [this.findIndex(b), 0], h = 0, l = a.length; h < l; h++) f.push({ value: a[h], priority: b, options: c }); this.rules.splice.apply(this.rules,
                    f)
                }, findIndex: function (a) { for (var b = this.rules, c = b.length - 1; 0 <= c && a < b[c].priority;) c--; return c + 1 }, exec: function (a, b) {
                    var c = b instanceof CKEDITOR.htmlParser.node || b instanceof CKEDITOR.htmlParser.fragment, f = Array.prototype.slice.call(arguments, 1), h = this.rules, l = h.length, d, k, g, n; for (n = 0; n < l; n++) if (c && (d = b.type, k = b.name), g = h[n], !(a.nonEditable && !g.options.applyToAll || a.nestedEditable && g.options.excludeNestedEditable)) {
                        g = g.value.apply(null, f); if (!1 === g || c && g && (g.name != k || g.type != d)) return g; null != g &&
                        (f[0] = b = g)
                    } return b
                }, execOnName: function (a, b) { for (var c = 0, f = this.rules, h = f.length, l; b && c < h; c++) l = f[c], a.nonEditable && !l.options.applyToAll || a.nestedEditable && l.options.excludeNestedEditable || (b = b.replace(l.value[0], l.value[1])); return b }
            }
        })(); (function () {
            function a(a, d) {
                function g(a) { return a || CKEDITOR.env.needsNbspFiller ? new CKEDITOR.htmlParser.text(" ") : new CKEDITOR.htmlParser.element("br", { "data-cke-bogus": 1 }) } function f(a, d) {
                    return function (c) {
                        if (c.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT) {
                            var f =
                            [], h = e(c), n, C; if (h) for (k(h, 1) && f.push(h) ; h;) m(h) && (n = b(h)) && k(n) && ((C = b(n)) && !m(C) ? f.push(n) : (g(l).insertAfter(n), n.remove())), h = h.previous; for (h = 0; h < f.length; h++) f[h].remove(); if (f = !a || !1 !== ("function" == typeof d ? d(c) : d)) l || CKEDITOR.env.needsBrFiller || c.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT ? l || CKEDITOR.env.needsBrFiller || !(7 < document.documentMode || c.name in CKEDITOR.dtd.tr || c.name in CKEDITOR.dtd.$listItem) ? (f = e(c), f = !f || "form" == c.name && "input" == f.name) : f = !1 : f = !1; f && c.add(g(a))
                        }
                    }
                } function k(a, b) {
                    if ((!l ||
                    CKEDITOR.env.needsBrFiller) && a.type == CKEDITOR.NODE_ELEMENT && "br" == a.name && !a.attributes["data-cke-eol"]) return !0; var d; return a.type == CKEDITOR.NODE_TEXT && (d = a.value.match(x)) && (d.index && ((new CKEDITOR.htmlParser.text(a.value.substring(0, d.index))).insertBefore(a), a.value = d[0]), !CKEDITOR.env.needsBrFiller && l && (!b || a.parent.name in C) || !l && ((d = a.previous) && "br" == d.name || !d || m(d))) ? !0 : !1
                } var n = { elements: {} }, l = "html" == d, C = CKEDITOR.tools.extend({}, y), z; for (z in C) "#" in B[z] || delete C[z]; for (z in C) n.elements[z] =
                f(l, a.config.fillEmptyBlocks); n.root = f(l, !1); n.elements.br = function (a) { return function (d) { if (d.parent.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT) { var e = d.attributes; if ("data-cke-bogus" in e || "data-cke-eol" in e) delete e["data-cke-bogus"]; else { for (e = d.next; e && c(e) ;) e = e.next; var f = b(d); !e && m(d.parent) ? h(d.parent, g(a)) : m(e) && f && !m(f) && g(a).insertBefore(e) } } } }(l); return n
            } function f(a, b) { return a != CKEDITOR.ENTER_BR && !1 !== b ? a == CKEDITOR.ENTER_DIV ? "div" : "p" : !1 } function e(a) {
                for (a = a.children[a.children.length - 1]; a &&
                c(a) ;) a = a.previous; return a
            } function b(a) { for (a = a.previous; a && c(a) ;) a = a.previous; return a } function c(a) { return a.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.trim(a.value) || a.type == CKEDITOR.NODE_ELEMENT && a.attributes["data-cke-bookmark"] } function m(a) { return a && (a.type == CKEDITOR.NODE_ELEMENT && a.name in y || a.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT) } function h(a, b) { var d = a.children[a.children.length - 1]; a.children.push(b); b.parent = a; d && (d.next = b, b.previous = d) } function l(a) {
                a = a.attributes; "false" != a.contenteditable &&
                (a["data-cke-editable"] = a.contenteditable ? "true" : 1); a.contenteditable = "false"
            } function d(a) { a = a.attributes; switch (a["data-cke-editable"]) { case "true": a.contenteditable = "true"; break; case "1": delete a.contenteditable } } function k(a) { return a.replace(E, function (a, b, d) { return "\x3c" + b + d.replace(J, function (a, b) { return H.test(b) && -1 == d.indexOf("data-cke-saved-" + b) ? " data-cke-saved-" + a + " data-cke-" + CKEDITOR.rnd + "-" + a : a }) + "\x3e" }) } function g(a, b) {
                return a.replace(b, function (a, b, d) {
                    0 === a.indexOf("\x3ctextarea") &&
                    (a = b + w(d).replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;") + "\x3c/textarea\x3e"); return "\x3ccke:encoded\x3e" + encodeURIComponent(a) + "\x3c/cke:encoded\x3e"
                })
            } function n(a) { return a.replace(I, function (a, b) { return decodeURIComponent(b) }) } function r(a) { return a.replace(/\x3c!--(?!{cke_protected})[\s\S]+?--\x3e/g, function (a) { return "\x3c!--" + t + "{C}" + encodeURIComponent(a).replace(/--/g, "%2D%2D") + "--\x3e" }) } function w(a) { return a.replace(/\x3c!--\{cke_protected\}\{C\}([\s\S]+?)--\x3e/g, function (a, b) { return decodeURIComponent(b) }) }
            function q(a, b) { var d = b._.dataStore; return a.replace(/\x3c!--\{cke_protected\}([\s\S]+?)--\x3e/g, function (a, b) { return decodeURIComponent(b) }).replace(/\{cke_protected_(\d+)\}/g, function (a, b) { return d && d[b] || "" }) } function p(a, b) {
                var d = [], c = b.config.protectedSource, g = b._.dataStore || (b._.dataStore = { id: 1 }), e = /<\!--\{cke_temp(comment)?\}(\d*?)--\x3e/g, c = [/<script[\s\S]*?(<\/script>|$)/gi, /<noscript[\s\S]*?<\/noscript>/gi, /<meta[\s\S]*?\/?>/gi].concat(c); a = a.replace(/\x3c!--[\s\S]*?--\x3e/g, function (a) {
                    return "\x3c!--{cke_tempcomment}" +
                    (d.push(a) - 1) + "--\x3e"
                }); for (var f = 0; f < c.length; f++) a = a.replace(c[f], function (a) { a = a.replace(e, function (a, b, c) { return d[c] }); return /cke_temp(comment)?/.test(a) ? a : "\x3c!--{cke_temp}" + (d.push(a) - 1) + "--\x3e" }); a = a.replace(e, function (a, b, c) { return "\x3c!--" + t + (b ? "{C}" : "") + encodeURIComponent(d[c]).replace(/--/g, "%2D%2D") + "--\x3e" }); a = a.replace(/<\w+(?:\s+(?:(?:[^\s=>]+\s*=\s*(?:[^'"\s>]+|'[^']*'|"[^"]*"))|[^\s=\/>]+))+\s*\/?>/g, function (a) {
                    return a.replace(/\x3c!--\{cke_protected\}([^>]*)--\x3e/g, function (a,
                    b) { g[g.id] = decodeURIComponent(b); return "{cke_protected_" + g.id++ + "}" })
                }); return a = a.replace(/<(title|iframe|textarea)([^>]*)>([\s\S]*?)<\/\1>/g, function (a, d, c, g) { return "\x3c" + d + c + "\x3e" + q(w(g), b) + "\x3c/" + d + "\x3e" })
            } var u; CKEDITOR.htmlDataProcessor = function (b) {
                var d, c, e = this; this.editor = b; this.dataFilter = d = new CKEDITOR.htmlParser.filter; this.htmlFilter = c = new CKEDITOR.htmlParser.filter; this.writer = new CKEDITOR.htmlParser.basicWriter; d.addRules(z); d.addRules(A, { applyToAll: !0 }); d.addRules(a(b, "data"),
                { applyToAll: !0 }); c.addRules(D); c.addRules(G, { applyToAll: !0 }); c.addRules(a(b, "html"), { applyToAll: !0 }); b.on("toHtml", function (a) {
                    a = a.data; var d = a.dataValue, c, d = u(d), d = p(d, b), d = g(d, M), d = k(d), d = g(d, F), d = d.replace(K, "$1cke:$2"), d = d.replace(L, "\x3ccke:$1$2\x3e\x3c/cke:$1\x3e"), d = d.replace(/(<pre\b[^>]*>)(\r\n|\n)/g, "$1$2$2"), d = d.replace(/([^a-z0-9<\-])(on\w{3,})(?!>)/gi, "$1data-cke-" + CKEDITOR.rnd + "-$2"); c = a.context || b.editable().getName(); var e; CKEDITOR.env.ie && 9 > CKEDITOR.env.version && "pre" == c && (c = "div",
                    d = "\x3cpre\x3e" + d + "\x3c/pre\x3e", e = 1); c = b.document.createElement(c); c.setHtml("a" + d); d = c.getHtml().substr(1); d = d.replace(new RegExp("data-cke-" + CKEDITOR.rnd + "-", "ig"), ""); e && (d = d.replace(/^<pre>|<\/pre>$/gi, "")); d = d.replace(C, "$1$2"); d = n(d); d = w(d); c = !1 === a.fixForBody ? !1 : f(a.enterMode, b.config.autoParagraph); d = CKEDITOR.htmlParser.fragment.fromHtml(d, a.context, c); c && (e = d, !e.children.length && CKEDITOR.dtd[e.name][c] && (c = new CKEDITOR.htmlParser.element(c), e.add(c))); a.dataValue = d
                }, null, null, 5); b.on("toHtml",
                function (a) { a.data.filter.applyTo(a.data.dataValue, !0, a.data.dontFilter, a.data.enterMode) && b.fire("dataFiltered") }, null, null, 6); b.on("toHtml", function (a) { a.data.dataValue.filterChildren(e.dataFilter, !0) }, null, null, 10); b.on("toHtml", function (a) { a = a.data; var b = a.dataValue, d = new CKEDITOR.htmlParser.basicWriter; b.writeChildrenHtml(d); b = d.getHtml(!0); a.dataValue = r(b) }, null, null, 15); b.on("toDataFormat", function (a) {
                    var d = a.data.dataValue; a.data.enterMode != CKEDITOR.ENTER_BR && (d = d.replace(/^<br *\/?>/i, ""));
                    a.data.dataValue = CKEDITOR.htmlParser.fragment.fromHtml(d, a.data.context, f(a.data.enterMode, b.config.autoParagraph))
                }, null, null, 5); b.on("toDataFormat", function (a) { a.data.dataValue.filterChildren(e.htmlFilter, !0) }, null, null, 10); b.on("toDataFormat", function (a) { a.data.filter.applyTo(a.data.dataValue, !1, !0) }, null, null, 11); b.on("toDataFormat", function (a) { var d = a.data.dataValue, c = e.writer; c.reset(); d.writeChildrenHtml(c); d = c.getHtml(!0); d = w(d); d = q(d, b); a.data.dataValue = d }, null, null, 15)
            }; CKEDITOR.htmlDataProcessor.prototype =
            {
                toHtml: function (a, b, d, c) { var g = this.editor, e, f, k, h; b && "object" == typeof b ? (e = b.context, d = b.fixForBody, c = b.dontFilter, f = b.filter, k = b.enterMode, h = b.protectedWhitespaces) : e = b; e || null === e || (e = g.editable().getName()); return g.fire("toHtml", { dataValue: a, context: e, fixForBody: d, dontFilter: c, filter: f || g.filter, enterMode: k || g.enterMode, protectedWhitespaces: h }).dataValue }, toDataFormat: function (a, b) {
                    var d, c, g; b && (d = b.context, c = b.filter, g = b.enterMode); d || null === d || (d = this.editor.editable().getName()); return this.editor.fire("toDataFormat",
                    { dataValue: a, filter: c || this.editor.filter, context: d, enterMode: g || this.editor.enterMode }).dataValue
                }
            }; var x = /(?:&nbsp;|\xa0)$/, t = "{cke_protected}", B = CKEDITOR.dtd, v = "caption colgroup col thead tfoot tbody".split(" "), y = CKEDITOR.tools.extend({}, B.$blockLimit, B.$block), z = { elements: { input: l, textarea: l } }, A = {
                attributeNames: [[/^on/, "data-cke-pa-on"], [/^srcdoc/, "data-cke-pa-srcdoc"], [/^data-cke-expando$/, ""]], elements: {
                    iframe: function (a) {
                        if (a.attributes && a.attributes.src) {
                            var b = a.attributes.src.toLowerCase().replace(/[^a-z]/gi,
                            ""); if (0 === b.indexOf("javascript") || 0 === b.indexOf("data")) a.attributes["data-cke-pa-src"] = a.attributes.src, delete a.attributes.src
                        }
                    }
                }
            }, D = { elements: { embed: function (a) { var b = a.parent; if (b && "object" == b.name) { var d = b.attributes.width, b = b.attributes.height; d && (a.attributes.width = d); b && (a.attributes.height = b) } }, a: function (a) { var b = a.attributes; if (!(a.children.length || b.name || b.id || a.attributes["data-cke-saved-name"])) return !1 } } }, G = {
                elementNames: [[/^cke:/, ""], [/^\?xml:namespace$/, ""]], attributeNames: [[/^data-cke-(saved|pa)-/,
                ""], [/^data-cke-.*/, ""], ["hidefocus", ""]], elements: {
                    $: function (a) { var b = a.attributes; if (b) { if (b["data-cke-temp"]) return !1; for (var d = ["name", "href", "src"], c, g = 0; g < d.length; g++) c = "data-cke-saved-" + d[g], c in b && delete b[d[g]] } return a }, table: function (a) {
                        a.children.slice(0).sort(function (a, b) {
                            var d, c; a.type == CKEDITOR.NODE_ELEMENT && b.type == a.type && (d = CKEDITOR.tools.indexOf(v, a.name), c = CKEDITOR.tools.indexOf(v, b.name)); -1 < d && -1 < c && d != c || (d = a.parent ? a.getIndex() : -1, c = b.parent ? b.getIndex() : -1); return d > c ?
                            1 : -1
                        })
                    }, param: function (a) { a.children = []; a.isEmpty = !0; return a }, span: function (a) { "Apple-style-span" == a.attributes["class"] && delete a.name }, html: function (a) { delete a.attributes.contenteditable; delete a.attributes["class"] }, body: function (a) { delete a.attributes.spellcheck; delete a.attributes.contenteditable }, style: function (a) { var b = a.children[0]; b && b.value && (b.value = CKEDITOR.tools.trim(b.value)); a.attributes.type || (a.attributes.type = "text/css") }, title: function (a) {
                        var b = a.children[0]; !b && h(a, b = new CKEDITOR.htmlParser.text);
                        b.value = a.attributes["data-cke-title"] || ""
                    }, input: d, textarea: d
                }, attributes: { "class": function (a) { return CKEDITOR.tools.ltrim(a.replace(/(?:^|\s+)cke_[^\s]*/g, "")) || !1 } }
            }; CKEDITOR.env.ie && (G.attributes.style = function (a) { return a.replace(/(^|;)([^\:]+)/g, function (a) { return a.toLowerCase() }) }); var E = /<(a|area|img|input|source)\b([^>]*)>/gi, J = /([\w-:]+)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi, H = /^(href|src|name)$/i, F = /(?:<style(?=[ >])[^>]*>[\s\S]*?<\/style>)|(?:<(:?link|meta|base)[^>]*>)/gi,
            M = /(<textarea(?=[ >])[^>]*>)([\s\S]*?)(?:<\/textarea>)/gi, I = /<cke:encoded>([^<]*)<\/cke:encoded>/gi, K = /(<\/?)((?:object|embed|param|html|body|head|title)([\s][^>]*)?>)/gi, C = /(<\/?)cke:((?:html|body|head|title)[^>]*>)/gi, L = /<cke:(param|embed)([^>]*?)\/?>(?!\s*<\/cke:\1)/gi; u = function () {
                function a(d) { return CKEDITOR.tools.array.reduce(d.split(""), function (a, d) { var c = d.toLowerCase(), g = d.toUpperCase(), e = b(c); c !== g && (e += "|" + b(g)); return a + ("(" + e + ")") }, "") } function b(a) {
                    var d; d = a.charCodeAt(0); var c = d.toString(16);
                    d = { htmlCode: "\x26#" + d + ";?", hex: "\x26#x0*" + c + ";?", entity: { "\x3c": "\x26lt;", "\x3e": "\x26gt;", ":": "\x26colon;" }[a] }; for (var g in d) d[g] && (a += "|" + d[g]); return a
                } var d = new RegExp("(" + a("\x3ccke:encoded\x3e") + "(.*?)" + a("\x3c/cke:encoded\x3e") + ")|(" + a("\x3c") + a("/") + "?" + a("cke:encoded\x3e") + ")", "gi"), c = new RegExp("((" + a("{cke_protected") + ")(_[0-9]*)?" + a("}") + ")", "gi"); return function (a) { return a.replace(d, "").replace(c, "") }
            }()
        })(); "use strict"; CKEDITOR.htmlParser.element = function (a, f) {
            this.name = a; this.attributes =
            f || {}; this.children = []; var e = a || "", b = e.match(/^cke:(.*)/); b && (e = b[1]); e = !!(CKEDITOR.dtd.$nonBodyContent[e] || CKEDITOR.dtd.$block[e] || CKEDITOR.dtd.$listItem[e] || CKEDITOR.dtd.$tableContent[e] || CKEDITOR.dtd.$nonEditable[e] || "br" == e); this.isEmpty = !!CKEDITOR.dtd.$empty[a]; this.isUnknown = !CKEDITOR.dtd[a]; this._ = { isBlockLike: e, hasInlineStarted: this.isEmpty || !e }
        }; CKEDITOR.htmlParser.cssStyle = function (a) {
            var f = {}; ((a instanceof CKEDITOR.htmlParser.element ? a.attributes.style : a) || "").replace(/&quot;/g, '"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,
            function (a, b, c) { "font-family" == b && (c = c.replace(/["']/g, "")); f[b.toLowerCase()] = c }); return { rules: f, populate: function (a) { var b = this.toString(); b && (a instanceof CKEDITOR.dom.element ? a.setAttribute("style", b) : a instanceof CKEDITOR.htmlParser.element ? a.attributes.style = b : a.style = b) }, toString: function () { var a = [], b; for (b in f) f[b] && a.push(b, ":", f[b], ";"); return a.join("") } }
        }; (function () {
            function a(a) { return function (c) { return c.type == CKEDITOR.NODE_ELEMENT && ("string" == typeof a ? c.name == a : c.name in a) } } var f =
            function (a, c) { a = a[0]; c = c[0]; return a < c ? -1 : a > c ? 1 : 0 }, e = CKEDITOR.htmlParser.fragment.prototype; CKEDITOR.htmlParser.element.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node, {
                type: CKEDITOR.NODE_ELEMENT, add: e.add, clone: function () { return new CKEDITOR.htmlParser.element(this.name, this.attributes) }, filter: function (a, c) {
                    var e = this, f, l; c = e.getFilterContext(c); if (!e.parent) a.onRoot(c, e); for (; ;) {
                        f = e.name; if (!(l = a.onElementName(c, f))) return this.remove(), !1; e.name = l; if (!(e = a.onElement(c, e))) return this.remove(),
                        !1; if (e !== this) return this.replaceWith(e), !1; if (e.name == f) break; if (e.type != CKEDITOR.NODE_ELEMENT) return this.replaceWith(e), !1; if (!e.name) return this.replaceWithChildren(), !1
                    } f = e.attributes; var d, k; for (d in f) { for (l = f[d]; ;) if (k = a.onAttributeName(c, d)) if (k != d) delete f[d], d = k; else break; else { delete f[d]; break } k && (!1 === (l = a.onAttribute(c, e, k, l)) ? delete f[k] : f[k] = l) } e.isEmpty || this.filterChildren(a, !1, c); return !0
                }, filterChildren: e.filterChildren, writeHtml: function (a, c) {
                    c && this.filter(c); var e = this.name,
                    h = [], l = this.attributes, d, k; a.openTag(e, l); for (d in l) h.push([d, l[d]]); a.sortAttributes && h.sort(f); d = 0; for (k = h.length; d < k; d++) l = h[d], a.attribute(l[0], l[1]); a.openTagClose(e, this.isEmpty); this.writeChildrenHtml(a); this.isEmpty || a.closeTag(e)
                }, writeChildrenHtml: e.writeChildrenHtml, replaceWithChildren: function () { for (var a = this.children, c = a.length; c;) a[--c].insertAfter(this); this.remove() }, forEach: e.forEach, getFirst: function (b) {
                    if (!b) return this.children.length ? this.children[0] : null; "function" != typeof b &&
                    (b = a(b)); for (var c = 0, e = this.children.length; c < e; ++c) if (b(this.children[c])) return this.children[c]; return null
                }, getHtml: function () { var a = new CKEDITOR.htmlParser.basicWriter; this.writeChildrenHtml(a); return a.getHtml() }, setHtml: function (a) { a = this.children = CKEDITOR.htmlParser.fragment.fromHtml(a).children; for (var c = 0, e = a.length; c < e; ++c) a[c].parent = this }, getOuterHtml: function () { var a = new CKEDITOR.htmlParser.basicWriter; this.writeHtml(a); return a.getHtml() }, split: function (a) {
                    for (var c = this.children.splice(a,
                    this.children.length - a), e = this.clone(), f = 0; f < c.length; ++f) c[f].parent = e; e.children = c; c[0] && (c[0].previous = null); 0 < a && (this.children[a - 1].next = null); this.parent.add(e, this.getIndex() + 1); return e
                }, find: function (a, c) { void 0 === c && (c = !1); var e = [], f; for (f = 0; f < this.children.length; f++) { var l = this.children[f]; "function" == typeof a && a(l) ? e.push(l) : "string" == typeof a && l.name === a && e.push(l); c && l.find && (e = e.concat(l.find(a, c))) } return e }, findOne: function (a, c) {
                    var e = null, f = CKEDITOR.tools.array.find(this.children,
                    function (f) { var d = "function" === typeof a ? a(f) : f.name === a; if (d || !c) return d; f.children && f.findOne && (e = f.findOne(a, !0)); return !!e }); return e || f || null
                }, addClass: function (a) { if (!this.hasClass(a)) { var c = this.attributes["class"] || ""; this.attributes["class"] = c + (c ? " " : "") + a } }, removeClass: function (a) { var c = this.attributes["class"]; c && ((c = CKEDITOR.tools.trim(c.replace(new RegExp("(?:\\s+|^)" + a + "(?:\\s+|$)"), " "))) ? this.attributes["class"] = c : delete this.attributes["class"]) }, hasClass: function (a) {
                    var c = this.attributes["class"];
                    return c ? (new RegExp("(?:^|\\s)" + a + "(?\x3d\\s|$)")).test(c) : !1
                }, getFilterContext: function (a) { var c = []; a || (a = { nonEditable: !1, nestedEditable: !1 }); a.nonEditable || "false" != this.attributes.contenteditable ? a.nonEditable && !a.nestedEditable && "true" == this.attributes.contenteditable && c.push("nestedEditable", !0) : c.push("nonEditable", !0); if (c.length) { a = CKEDITOR.tools.copy(a); for (var e = 0; e < c.length; e += 2) a[c[e]] = c[e + 1] } return a }
            }, !0)
        })(); (function () {
            var a = /{([^}]+)}/g; CKEDITOR.template = function (a) {
                this.source =
                "function" === typeof a ? a : String(a)
            }; CKEDITOR.template.prototype.output = function (f, e) { var b = ("function" === typeof this.source ? this.source(f) : this.source).replace(a, function (a, b) { return void 0 !== f[b] ? f[b] : a }); return e ? e.push(b) : b }
        })(); delete CKEDITOR.loadFullCore; CKEDITOR.instances = {}; CKEDITOR.document = new CKEDITOR.dom.document(document); CKEDITOR.add = function (a) {
            function f() { CKEDITOR.currentInstance == a && (CKEDITOR.currentInstance = null, CKEDITOR.fire("currentInstance")) } CKEDITOR.instances[a.name] = a; a.on("focus",
            function () { CKEDITOR.currentInstance != a && (CKEDITOR.currentInstance = a, CKEDITOR.fire("currentInstance")) }); a.on("blur", f); a.on("destroy", f); CKEDITOR.fire("instance", null, a)
        }; CKEDITOR.remove = function (a) { delete CKEDITOR.instances[a.name] }; (function () { var a = {}; CKEDITOR.addTemplate = function (f, e) { var b = a[f]; if (b) return b; b = { name: f, source: e }; CKEDITOR.fire("template", b); return a[f] = new CKEDITOR.template(b.source) }; CKEDITOR.getTemplate = function (f) { return a[f] } })(); (function () {
            var a = []; CKEDITOR.addCss = function (f) { a.push(f) };
            CKEDITOR.getCss = function () { return a.join("\n") }
        })(); CKEDITOR.on("instanceDestroyed", function () { CKEDITOR.tools.isEmpty(this.instances) && CKEDITOR.fire("reset") }); CKEDITOR.TRISTATE_ON = 1; CKEDITOR.TRISTATE_OFF = 2; CKEDITOR.TRISTATE_DISABLED = 0; (function () {
            CKEDITOR.inline = function (a, f) {
                a = CKEDITOR.editor._getEditorElement(a); if (!a) return null; var e = new CKEDITOR.editor(f, a, CKEDITOR.ELEMENT_MODE_INLINE), b = a.is("textarea") ? a : null; b ? (e.setData(b.getValue(), null, !0), a = CKEDITOR.dom.element.createFromHtml('\x3cdiv contenteditable\x3d"' +
                !!e.readOnly + '" class\x3d"cke_textarea_inline"\x3e' + b.getValue() + "\x3c/div\x3e", CKEDITOR.document), a.insertAfter(b), b.hide(), b.$.form && e._attachToForm()) : (f && "undefined" !== typeof f.readOnly && !f.readOnly && a.setAttribute("contenteditable", "true"), e.setData(a.getHtml(), null, !0)); e.on("loaded", function () {
                    e.fire("uiReady"); e.editable(a); e.container = a; e.ui.contentsElement = a; e.setData(e.getData(1)); e.resetDirty(); e.fire("contentDom"); e.mode = "wysiwyg"; e.fire("mode"); e.status = "ready"; e.fireOnce("instanceReady");
                    CKEDITOR.fire("instanceReady", null, e)
                }, null, null, 1E4); e.on("destroy", function () { var a = e.container; b && a && (a.clearCustomData(), a.remove()); b && b.show(); e.element.clearCustomData(); delete e.element }); return e
            }; CKEDITOR.inlineAll = function () { var a, f, e; for (e in CKEDITOR.dtd.$editable) for (var b = CKEDITOR.document.getElementsByTag(e), c = 0, m = b.count() ; c < m; c++) a = b.getItem(c), "true" == a.getAttribute("contenteditable") && (f = { element: a, config: {} }, !1 !== CKEDITOR.fire("inline", f) && CKEDITOR.inline(a, f.config)) }; CKEDITOR.domReady(function () {
                !CKEDITOR.disableAutoInline &&
                CKEDITOR.inlineAll()
            })
        })(); CKEDITOR.replaceClass = "ckeditor"; (function () {
            function a(a, c, m, h) {
                a = CKEDITOR.editor._getEditorElement(a); if (!a) return null; var l = new CKEDITOR.editor(c, a, h); h == CKEDITOR.ELEMENT_MODE_REPLACE && (a.setStyle("visibility", "hidden"), l._.required = a.hasAttribute("required"), a.removeAttribute("required")); m && l.setData(m, null, !0); l.on("loaded", function () {
                    l.isDestroyed() || l.isDetached() || (e(l), h == CKEDITOR.ELEMENT_MODE_REPLACE && l.config.autoUpdateElement && a.$.form && l._attachToForm(), l.setMode(l.config.startupMode,
                    function () { l.resetDirty(); l.status = "ready"; l.fireOnce("instanceReady"); CKEDITOR.fire("instanceReady", null, l) }))
                }); l.on("destroy", f); return l
            } function f() { var a = this.container, c = this.element; a && (a.clearCustomData(), a.remove()); c && (c.clearCustomData(), this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE && (c.show(), this._.required && c.setAttribute("required", "required")), delete this.element) } function e(a) {
                var c = a.name, e = a.element, f = a.elementMode, l = a.fire("uiSpace", { space: "top", html: "" }).html, d = a.fire("uiSpace",
                { space: "bottom", html: "" }).html, k = new CKEDITOR.template('\x3c{outerEl} id\x3d"cke_{name}" class\x3d"{id} cke cke_reset cke_chrome cke_editor_{name} cke_{langDir} ' + CKEDITOR.env.cssClass + '"  dir\x3d"{langDir}" lang\x3d"{langCode}" role\x3d"application"' + (a.title ? ' aria-labelledby\x3d"cke_{name}_arialbl"' : "") + "\x3e" + (a.title ? '\x3cspan id\x3d"cke_{name}_arialbl" class\x3d"cke_voice_label"\x3e{voiceLabel}\x3c/span\x3e' : "") + '\x3c{outerEl} class\x3d"cke_inner cke_reset" role\x3d"presentation"\x3e{topHtml}\x3c{outerEl} id\x3d"{contentId}" class\x3d"cke_contents cke_reset" role\x3d"presentation"\x3e\x3c/{outerEl}\x3e{bottomHtml}\x3c/{outerEl}\x3e\x3c/{outerEl}\x3e'),
                c = CKEDITOR.dom.element.createFromHtml(k.output({ id: a.id, name: c, langDir: a.lang.dir, langCode: a.langCode, voiceLabel: a.title, topHtml: l ? '\x3cspan id\x3d"' + a.ui.spaceId("top") + '" class\x3d"cke_top cke_reset_all" role\x3d"presentation" style\x3d"height:auto"\x3e' + l + "\x3c/span\x3e" : "", contentId: a.ui.spaceId("contents"), bottomHtml: d ? '\x3cspan id\x3d"' + a.ui.spaceId("bottom") + '" class\x3d"cke_bottom cke_reset_all" role\x3d"presentation"\x3e' + d + "\x3c/span\x3e" : "", outerEl: CKEDITOR.env.ie ? "span" : "div" })); f == CKEDITOR.ELEMENT_MODE_REPLACE ?
                (e.hide(), c.insertAfter(e)) : e.append(c); a.container = c; a.ui.contentsElement = a.ui.space("contents"); l && a.ui.space("top").unselectable(); d && a.ui.space("bottom").unselectable(); e = a.config.width; f = a.config.height; e && c.setStyle("width", CKEDITOR.tools.cssLength(e)); f && a.ui.space("contents").setStyle("height", CKEDITOR.tools.cssLength(f)); c.disableContextMenu(); CKEDITOR.env.webkit && c.on("focus", function () { a.focus() }); a.fireOnce("uiReady")
            } CKEDITOR.replace = function (b, c) { return a(b, c, null, CKEDITOR.ELEMENT_MODE_REPLACE) };
            CKEDITOR.appendTo = function (b, c, e) { return a(b, c, e, CKEDITOR.ELEMENT_MODE_APPENDTO) }; CKEDITOR.replaceAll = function () { for (var a = document.getElementsByTagName("textarea"), c = 0; c < a.length; c++) { var e = null, f = a[c]; if (f.name || f.id) { if ("string" == typeof arguments[0]) { if (!(new RegExp("(?:^|\\s)" + arguments[0] + "(?:$|\\s)")).test(f.className)) continue } else if ("function" == typeof arguments[0] && (e = {}, !1 === arguments[0](f, e))) continue; this.replace(f, e) } } }; CKEDITOR.editor.prototype.addMode = function (a, c) {
                (this._.modes || (this._.modes =
                {}))[a] = c
            }; CKEDITOR.editor.prototype.setMode = function (a, c) {
                var e = this, f = this._.modes; if (a != e.mode && f && f[a]) {
                    e.fire("beforeSetMode", a); if (e.mode) { var l = e.checkDirty(), f = e._.previousModeData, d, k = 0; e.fire("beforeModeUnload"); e.editable(0); e._.previousMode = e.mode; e._.previousModeData = d = e.getData(1); "source" == e.mode && f == d && (e.fire("lockSnapshot", { forceUpdate: !0 }), k = 1); e.ui.space("contents").setHtml(""); e.mode = "" } else e._.previousModeData = e.getData(1); this._.modes[a](function () {
                        e.mode = a; void 0 !== l && !l &&
                        e.resetDirty(); k ? e.fire("unlockSnapshot") : "wysiwyg" == a && e.fire("saveSnapshot"); setTimeout(function () { e.isDestroyed() || e.isDetached() || (e.fire("mode"), c && c.call(e)) }, 0)
                    })
                }
            }; CKEDITOR.editor.prototype.resize = function (a, c, e, f) {
                var l = this.container, d = this.ui.space("contents"), k = CKEDITOR.env.webkit && this.document && this.document.getWindow().$.frameElement; f = f ? this.container.getFirst(function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasClass("cke_inner") }) : l; a = CKEDITOR.tools.convertToPx(CKEDITOR.tools.cssLength(a));
                f.setSize("width", a, !0); k && (k.style.width = "1%"); c = CKEDITOR.tools.convertToPx(CKEDITOR.tools.cssLength(c)); var g = (f.$.offsetHeight || 0) - (d.$.clientHeight || 0), l = Math.max(c - (e ? 0 : g), 0); c = e ? c + g : c; d.setStyle("height", CKEDITOR.tools.cssLength(l)); k && (k.style.width = "100%"); this.fire("resize", { outerHeight: c, contentsHeight: l, outerWidth: a || f.getSize("width") })
            }; CKEDITOR.editor.prototype.getResizable = function (a) { return a ? this.ui.space("contents") : this.container }; CKEDITOR.domReady(function () {
                CKEDITOR.replaceClass &&
                CKEDITOR.replaceAll(CKEDITOR.replaceClass)
            })
        })(); CKEDITOR.config.startupMode = "wysiwyg"; (function () {
            function a(a) {
                var d = a.editor, c = a.data.path, g = c.blockLimit, e = a.data.selection, k = e.getRanges()[0], n; if (CKEDITOR.env.gecko || CKEDITOR.env.ie && CKEDITOR.env.needsBrFiller) if (e = f(e, c)) e.appendBogus(), n = CKEDITOR.env.ie && !CKEDITOR.env.edge || CKEDITOR.env.edge && d._.previousActive; h(d, c.block, g) && k.collapsed && !k.getCommonAncestor().isReadOnly() && (c = k.clone(), c.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS), g = new CKEDITOR.dom.walker(c),
                g.guard = function (a) { return !b(a) || a.type == CKEDITOR.NODE_COMMENT || a.isReadOnly() }, !g.checkForward() || c.checkStartOfBlock() && c.checkEndOfBlock()) && (d = k.fixBlock(!0, d.activeEnterMode == CKEDITOR.ENTER_DIV ? "div" : "p"), CKEDITOR.env.needsBrFiller || (d = d.getFirst(b)) && d.type == CKEDITOR.NODE_TEXT && CKEDITOR.tools.trim(d.getText()).match(/^(?:&nbsp;|\xa0)$/) && d.remove(), n = 1, a.cancel()); n && k.select()
            } function f(a, d) {
                if (a.isFake) return 0; var c = d.block || d.blockLimit, g = c && c.getLast(b); if (!(!c || !c.isBlockBoundary() ||
                g && g.type == CKEDITOR.NODE_ELEMENT && g.isBlockBoundary() || c.is("pre") || c.getBogus())) return c
            } function e(a) { var b = a.data.getTarget(); b.is("input") && (b = b.getAttribute("type"), "submit" != b && "reset" != b || a.data.preventDefault()) } function b(a) { return n(a) && r(a) } function c(a, b) { return function (d) { var c = d.data.$.toElement || d.data.$.fromElement || d.data.$.relatedTarget; (c = c && c.nodeType == CKEDITOR.NODE_ELEMENT ? new CKEDITOR.dom.element(c) : null) && (b.equals(c) || b.contains(c)) || a.call(this, d) } } function m(a) {
                function d(a) {
                    return function (d,
                    g) { g && d.type == CKEDITOR.NODE_ELEMENT && d.is(e) && (c = d); if (!(g || !b(d) || a && q(d))) return !1 }
                } var c, g = a.getRanges()[0]; a = a.root; var e = { table: 1, ul: 1, ol: 1, dl: 1 }; if (g.startPath().contains(e)) { var f = g.clone(); f.collapse(1); f.setStartAt(a, CKEDITOR.POSITION_AFTER_START); a = new CKEDITOR.dom.walker(f); a.guard = d(); a.checkBackward(); if (c) return f = g.clone(), f.collapse(), f.setEndAt(c, CKEDITOR.POSITION_AFTER_END), a = new CKEDITOR.dom.walker(f), a.guard = d(!0), c = !1, a.checkForward(), c } return null
            } function h(a, b, d) {
                return !1 !==
                a.config.autoParagraph && a.activeEnterMode != CKEDITOR.ENTER_BR && (a.editable().equals(d) && !b || b && "true" == b.getAttribute("contenteditable"))
            } function l(a) { return a.activeEnterMode != CKEDITOR.ENTER_BR && !1 !== a.config.autoParagraph ? a.activeEnterMode == CKEDITOR.ENTER_DIV ? "div" : "p" : !1 } function d(a) { a && a.isEmptyInlineRemoveable() && a.remove() } function k(a) { var b = a.editor; b.getSelection().scrollIntoView(); setTimeout(function () { b.fire("saveSnapshot") }, 0) } function g(a, b, d) {
                var c = a.getCommonAncestor(b); for (b = a = d ?
                    b : a; (a = a.getParent()) && !c.equals(a) && 1 == a.getChildCount() ;) b = a; b.remove()
            } var n, r, w, q, p, u, x, t, B, v; CKEDITOR.editable = CKEDITOR.tools.createClass({
                base: CKEDITOR.dom.element, $: function (a, b) { this.base(b.$ || b); this.editor = a; this.status = "unloaded"; this.hasFocus = !1; this.setup() }, proto: {
                    focus: function () {
                        var a; if (CKEDITOR.env.webkit && !this.hasFocus && (a = this.editor._.previousActive || this.getDocument().getActive(), this.contains(a))) { a.focus(); return } CKEDITOR.env.edge && 14 < CKEDITOR.env.version && !this.hasFocus &&
                        this.getDocument().equals(CKEDITOR.document) && (this.editor._.previousScrollTop = this.$.scrollTop); try { if (!CKEDITOR.env.ie || CKEDITOR.env.edge && 14 < CKEDITOR.env.version || !this.getDocument().equals(CKEDITOR.document)) if (CKEDITOR.env.chrome) { var b = this.$.scrollTop; this.$.focus(); this.$.scrollTop = b } else this.$.focus(); else this.$.setActive() } catch (d) { if (!CKEDITOR.env.ie) throw d; } CKEDITOR.env.safari && !this.isInline() && (a = CKEDITOR.document.getActive(), a.equals(this.getWindow().getFrame()) || this.getWindow().focus())
                    },
                    on: function (a, b) { var d = Array.prototype.slice.call(arguments, 0); CKEDITOR.env.ie && /^focus|blur$/.exec(a) && (a = "focus" == a ? "focusin" : "focusout", b = c(b, this), d[0] = a, d[1] = b); return CKEDITOR.dom.element.prototype.on.apply(this, d) }, attachListener: function (a) { !this._.listeners && (this._.listeners = []); var b = Array.prototype.slice.call(arguments, 1), b = a.on.apply(a, b); this._.listeners.push(b); return b }, clearListeners: function () { var a = this._.listeners; try { for (; a.length;) a.pop().removeListener() } catch (b) { } }, restoreAttrs: function () {
                        var a =
                        this._.attrChanges, b, d; for (d in a) a.hasOwnProperty(d) && (b = a[d], null !== b ? this.setAttribute(d, b) : this.removeAttribute(d))
                    }, attachClass: function (a) { var b = this.getCustomData("classes"); this.hasClass(a) || (!b && (b = []), b.push(a), this.setCustomData("classes", b), this.addClass(a)) }, changeAttr: function (a, b) { var d = this.getAttribute(a); b !== d && (!this._.attrChanges && (this._.attrChanges = {}), a in this._.attrChanges || (this._.attrChanges[a] = d), this.setAttribute(a, b)) }, insertText: function (a) {
                        this.editor.focus(); this.insertHtml(this.transformPlainTextToHtml(a),
                        "text")
                    }, transformPlainTextToHtml: function (a) { var b = this.editor.getSelection().getStartElement().hasAscendant("pre", !0) ? CKEDITOR.ENTER_BR : this.editor.activeEnterMode; return CKEDITOR.tools.transformPlainTextToHtml(a, b) }, insertHtml: function (a, b, d) { var c = this.editor; c.focus(); c.fire("saveSnapshot"); d || (d = c.getSelection().getRanges()[0]); u(this, b || "html", a, d); d.select(); k(this); this.editor.fire("afterInsertHtml", {}) }, insertHtmlIntoRange: function (a, b, d) {
                        u(this, d || "html", a, b); this.editor.fire("afterInsertHtml",
                        { intoRange: b })
                    }, insertElement: function (a, d) {
                        var c = this.editor; c.focus(); c.fire("saveSnapshot"); var g = c.activeEnterMode, c = c.getSelection(), e = a.getName(), e = CKEDITOR.dtd.$block[e]; d || (d = c.getRanges()[0]); this.insertElementIntoRange(a, d) && (d.moveToPosition(a, CKEDITOR.POSITION_AFTER_END), e && ((e = a.getNext(function (a) { return b(a) && !q(a) })) && e.type == CKEDITOR.NODE_ELEMENT && e.is(CKEDITOR.dtd.$block) ? e.getDtd()["#"] ? d.moveToElementEditStart(e) : d.moveToElementEditEnd(a) : e || g == CKEDITOR.ENTER_BR || (e = d.fixBlock(!0,
                        g == CKEDITOR.ENTER_DIV ? "div" : "p"), d.moveToElementEditStart(e)))); c.selectRanges([d]); k(this)
                    }, insertElementIntoSelection: function (a) { this.insertElement(a) }, insertElementIntoRange: function (a, b) {
                        var c = this.editor, g = c.config.enterMode, e = a.getName(), f = CKEDITOR.dtd.$block[e]; if (b.checkReadOnly()) return !1; b.deleteContents(1); b.startContainer.type == CKEDITOR.NODE_ELEMENT && (b.startContainer.is({ tr: 1, table: 1, tbody: 1, thead: 1, tfoot: 1 }) ? x(b) : b.startContainer.is(CKEDITOR.dtd.$list) && t(b)); var k, h; if (f) for (; (k = b.getCommonAncestor(0,
                        1)) && (h = CKEDITOR.dtd[k.getName()]) && (!h || !h[e]) ;) if (k.getName() in CKEDITOR.dtd.span) { var f = b.splitElement(k), n = b.createBookmark(); d(k); d(f); b.moveToBookmark(n) } else b.checkStartOfBlock() && b.checkEndOfBlock() ? (b.setStartBefore(k), b.collapse(!0), k.remove()) : b.splitBlock(g == CKEDITOR.ENTER_DIV ? "div" : "p", c.editable()); b.insertNode(a); return !0
                    }, setData: function (a, b) { b || (a = this.editor.dataProcessor.toHtml(a)); this.setHtml(a); this.fixInitialSelection(); "unloaded" == this.status && (this.status = "ready"); this.editor.fire("dataReady") },
                    getData: function (a) { var b = this.getHtml(); a || (b = this.editor.dataProcessor.toDataFormat(b)); return b }, setReadOnly: function (a) { this.setAttribute("contenteditable", !a) }, detach: function () { this.status = "detached"; this.editor.setData(this.editor.getData(), { internal: !0 }); this.clearListeners(); try { this._.cleanCustomData() } catch (a) { if (!CKEDITOR.env.ie || -2146828218 !== a.number) throw a; } this.editor.fire("contentDomUnload"); delete this.editor.document; delete this.editor.window; delete this.editor }, isInline: function () { return this.getDocument().equals(CKEDITOR.document) },
                    fixInitialSelection: function () {
                        function a() { var b = d.getDocument().$, c = b.getSelection(), g; a: if (c.anchorNode && c.anchorNode == d.$) g = !0; else { if (CKEDITOR.env.webkit && (g = d.getDocument().getActive()) && g.equals(d) && !c.anchorNode) { g = !0; break a } g = void 0 } g && (g = new CKEDITOR.dom.range(d), g.moveToElementEditStart(d), b = b.createRange(), b.setStart(g.startContainer.$, g.startOffset), b.collapse(!0), c.removeAllRanges(), c.addRange(b)) } function b() {
                            var a = d.getDocument().$, c = a.selection, g = d.getDocument().getActive(); "None" ==
                            c.type && g.equals(d) && (c = new CKEDITOR.dom.range(d), a = a.body.createTextRange(), c.moveToElementEditStart(d), c = c.startContainer, c.type != CKEDITOR.NODE_ELEMENT && (c = c.getParent()), a.moveToElementText(c.$), a.collapse(!0), a.select())
                        } var d = this; if (CKEDITOR.env.ie && (9 > CKEDITOR.env.version || CKEDITOR.env.quirks)) this.hasFocus && (this.focus(), b()); else if (this.hasFocus) this.focus(), a(); else this.once("focus", function () { a() }, null, null, -999)
                    }, getHtmlFromRange: function (a) {
                        if (a.collapsed) return new CKEDITOR.dom.documentFragment(a.document);
                        a = { doc: this.getDocument(), range: a.clone() }; B.eol.detect(a, this); B.bogus.exclude(a); B.cell.shrink(a); a.fragment = a.range.cloneContents(); B.tree.rebuild(a, this); B.eol.fix(a, this); return new CKEDITOR.dom.documentFragment(a.fragment.$)
                    }, extractHtmlFromRange: function (a, b) {
                        var d = v, c = { range: a, doc: a.document }, g = this.getHtmlFromRange(a); if (a.collapsed) return a.optimize(), g; a.enlarge(CKEDITOR.ENLARGE_INLINE, 1); d.table.detectPurge(c); c.bookmark = a.createBookmark(); delete c.range; var e = this.editor.createRange();
                        e.moveToPosition(c.bookmark.startNode, CKEDITOR.POSITION_BEFORE_START); c.targetBookmark = e.createBookmark(); d.list.detectMerge(c, this); d.table.detectRanges(c, this); d.block.detectMerge(c, this); c.tableContentsRanges ? (d.table.deleteRanges(c), a.moveToBookmark(c.bookmark), c.range = a) : (a.moveToBookmark(c.bookmark), c.range = a, a.extractContents(d.detectExtractMerge(c))); a.moveToBookmark(c.targetBookmark); a.optimize(); d.fixUneditableRangePosition(a); d.list.merge(c, this); d.table.purge(c, this); d.block.merge(c, this);
                        if (b) { d = a.startPath(); if (c = a.checkStartOfBlock() && a.checkEndOfBlock() && d.block && !a.root.equals(d.block)) { a: { var c = d.block.getElementsByTag("span"), e = 0, f; if (c) for (; f = c.getItem(e++) ;) if (!r(f)) { c = !0; break a } c = !1 } c = !c } c && (a.moveToPosition(d.block, CKEDITOR.POSITION_BEFORE_START), d.block.remove()) } else d.autoParagraph(this.editor, a), w(a.startContainer) && a.startContainer.appendBogus(); a.startContainer.mergeSiblings(); return g
                    }, setup: function () {
                        var a = this.editor; this.attachListener(a, "beforeGetData", function () {
                            var b =
                            this.getData(); this.is("textarea") || !1 !== a.config.ignoreEmptyParagraph && (b = b.replace(p, function (a, b) { return b })); a.setData(b, null, 1)
                        }, this); this.attachListener(a, "getSnapshot", function (a) { a.data = this.getData(1) }, this); this.attachListener(a, "afterSetData", function () { this.setData(a.getData(1)) }, this); this.attachListener(a, "loadSnapshot", function (a) { this.setData(a.data, 1) }, this); this.attachListener(a, "beforeFocus", function () { var b = a.getSelection(); (b = b && b.getNative()) && "Control" == b.type || this.focus() },
                        this); this.attachListener(a, "insertHtml", function (a) { this.insertHtml(a.data.dataValue, a.data.mode, a.data.range) }, this); this.attachListener(a, "insertElement", function (a) { this.insertElement(a.data) }, this); this.attachListener(a, "insertText", function (a) { this.insertText(a.data) }, this); this.setReadOnly(a.readOnly); this.attachClass("cke_editable"); a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? this.attachClass("cke_editable_inline") : a.elementMode != CKEDITOR.ELEMENT_MODE_REPLACE && a.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO ||
                        this.attachClass("cke_editable_themed"); this.attachClass("cke_contents_" + a.config.contentsLangDirection); a.keystrokeHandler.blockedKeystrokes[8] = +a.readOnly; a.keystrokeHandler.attach(this); this.on("blur", function () { this.hasFocus = !1 }, null, null, -1); this.on("focus", function () { this.hasFocus = !0 }, null, null, -1); if (CKEDITOR.env.webkit) this.on("scroll", function () { a._.previousScrollTop = a.editable().$.scrollTop }, null, null, -1); if (CKEDITOR.env.edge && 14 < CKEDITOR.env.version) {
                            var d = function () {
                                var b = a.editable();
                                null != a._.previousScrollTop && b.getDocument().equals(CKEDITOR.document) && (b.$.scrollTop = a._.previousScrollTop, a._.previousScrollTop = null, this.removeListener("scroll", d))
                            }; this.on("scroll", d)
                        } a.focusManager.add(this); this.equals(CKEDITOR.document.getActive()) && (this.hasFocus = !0, a.once("contentDom", function () { a.focusManager.focus(this) }, this)); this.isInline() && this.changeAttr("tabindex", a.tabIndex); if (!this.is("textarea")) {
                            a.document = this.getDocument(); a.window = this.getWindow(); var c = a.document; this.changeAttr("spellcheck",
                            !a.config.disableNativeSpellChecker); var f = a.config.contentsLangDirection; this.getDirection(1) != f && this.changeAttr("dir", f); var k = CKEDITOR.getCss(); if (k) { var f = c.getHead(), h = f.getCustomData("stylesheet"); h ? k != h.getText() && (CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? h.$.styleSheet.cssText = k : h.setText(k)) : (k = c.appendStyleText(k), k = new CKEDITOR.dom.element(k.ownerNode || k.owningElement), f.setCustomData("stylesheet", k), k.data("cke-temp", 1)) } f = c.getCustomData("stylesheet_ref") || 0; c.setCustomData("stylesheet_ref",
                            f + 1); this.setCustomData("cke_includeReadonly", !a.config.disableReadonlyStyling); this.attachListener(this, "click", function (a) { a = a.data; var b = (new CKEDITOR.dom.elementPath(a.getTarget(), this)).contains("a"); b && 2 != a.$.button && b.isReadOnly() && a.preventDefault() }); var l = { 8: 1, 46: 1 }; this.attachListener(a, "key", function (b) {
                                if (a.readOnly) return !0; var d = b.data.domEvent.getKey(), c; b = a.getSelection(); if (0 !== b.getRanges().length) {
                                    if (d in l) {
                                        var g, e = b.getRanges()[0], f = e.startPath(), k, h, r, d = 8 == d; CKEDITOR.env.ie &&
                                        11 > CKEDITOR.env.version && (g = b.getSelectedElement()) || (g = m(b)) ? (a.fire("saveSnapshot"), e.moveToPosition(g, CKEDITOR.POSITION_BEFORE_START), g.remove(), e.select(), a.fire("saveSnapshot"), c = 1) : e.collapsed && ((k = f.block) && (r = k[d ? "getPrevious" : "getNext"](n)) && r.type == CKEDITOR.NODE_ELEMENT && r.is("table") && e[d ? "checkStartOfBlock" : "checkEndOfBlock"]() ? (a.fire("saveSnapshot"), e[d ? "checkEndOfBlock" : "checkStartOfBlock"]() && k.remove(), e["moveToElementEdit" + (d ? "End" : "Start")](r), e.select(), a.fire("saveSnapshot"),
                                        c = 1) : f.blockLimit && f.blockLimit.is("td") && (h = f.blockLimit.getAscendant("table")) && e.checkBoundaryOfElement(h, d ? CKEDITOR.START : CKEDITOR.END) && (r = h[d ? "getPrevious" : "getNext"](n)) ? (a.fire("saveSnapshot"), e["moveToElementEdit" + (d ? "End" : "Start")](r), e.checkStartOfBlock() && e.checkEndOfBlock() ? r.remove() : e.select(), a.fire("saveSnapshot"), c = 1) : (h = f.contains(["td", "th", "caption"])) && e.checkBoundaryOfElement(h, d ? CKEDITOR.START : CKEDITOR.END) && (c = 1))
                                    } return !c
                                }
                            }); a.blockless && CKEDITOR.env.ie && CKEDITOR.env.needsBrFiller &&
                            this.attachListener(this, "keyup", function (d) { d.data.getKeystroke() in l && !this.getFirst(b) && (this.appendBogus(), d = a.createRange(), d.moveToPosition(this, CKEDITOR.POSITION_AFTER_START), d.select()) }); this.attachListener(this, "dblclick", function (b) { if (a.readOnly) return !1; b = { element: b.data.getTarget() }; a.fire("doubleclick", b) }); CKEDITOR.env.ie && this.attachListener(this, "click", e); CKEDITOR.env.ie && !CKEDITOR.env.edge || this.attachListener(this, "mousedown", function (b) {
                                var d = b.data.getTarget(); d.is("img", "hr",
                                "input", "textarea", "select") && !d.isReadOnly() && (a.getSelection().selectElement(d), d.is("input", "textarea", "select") && b.data.preventDefault())
                            }); CKEDITOR.env.edge && this.attachListener(this, "mouseup", function (b) { (b = b.data.getTarget()) && b.is("img") && !b.isReadOnly() && a.getSelection().selectElement(b) }); CKEDITOR.env.gecko && this.attachListener(this, "mouseup", function (b) {
                                if (2 == b.data.$.button && (b = b.data.getTarget(), !b.getAscendant("table") && !b.getOuterHtml().replace(p, ""))) {
                                    var d = a.createRange(); d.moveToElementEditStart(b);
                                    d.select(!0)
                                }
                            }); CKEDITOR.env.webkit && (this.attachListener(this, "click", function (a) { a.data.getTarget().is("input", "select") && a.data.preventDefault() }), this.attachListener(this, "mouseup", function (a) { a.data.getTarget().is("input", "textarea") && a.data.preventDefault() })); CKEDITOR.env.webkit && this.attachListener(a, "key", function (b) {
                                if (a.readOnly) return !0; var d = b.data.domEvent.getKey(); if (d in l && (b = a.getSelection(), 0 !== b.getRanges().length)) {
                                    var d = 8 == d, c = b.getRanges()[0]; b = c.startPath(); if (c.collapsed) a: {
                                        var e =
                                        b.block; if (e && c[d ? "checkStartOfBlock" : "checkEndOfBlock"]() && c.moveToClosestEditablePosition(e, !d) && c.collapsed) {
                                            if (c.startContainer.type == CKEDITOR.NODE_ELEMENT) { var f = c.startContainer.getChild(c.startOffset - (d ? 1 : 0)); if (f && f.type == CKEDITOR.NODE_ELEMENT && f.is("hr")) { a.fire("saveSnapshot"); f.remove(); b = !0; break a } } c = c.startPath().block; if (!c || c && c.contains(e)) b = void 0; else {
                                                a.fire("saveSnapshot"); var k; (k = (d ? c : e).getBogus()) && k.remove(); k = a.getSelection(); f = k.createBookmarks(); (d ? e : c).moveChildren(d ?
                                                    c : e, !1); b.lastElement.mergeSiblings(); g(e, c, !d); k.selectBookmarks(f); b = !0
                                            }
                                        } else b = !1
                                    } else d = c, k = b.block, c = d.endPath().block, k && c && !k.equals(c) ? (a.fire("saveSnapshot"), (e = k.getBogus()) && e.remove(), d.enlarge(CKEDITOR.ENLARGE_INLINE), d.deleteContents(), c.getParent() && (c.moveChildren(k, !1), b.lastElement.mergeSiblings(), g(k, c, !0)), d = a.getSelection().getRanges()[0], d.collapse(1), d.optimize(), "" === d.startContainer.getHtml() && d.startContainer.appendBogus(), d.select(), b = !0) : b = !1; if (!b) return; a.getSelection().scrollIntoView();
                                    a.fire("saveSnapshot"); return !1
                                }
                            }, this, null, 100)
                        }
                    }, getUniqueId: function () { var a; try { this._.expandoNumber = a = CKEDITOR.dom.domObject.prototype.getUniqueId.call(this) } catch (b) { a = this._ && this._.expandoNumber } return a }
                }, _: {
                    cleanCustomData: function () {
                        this.removeClass("cke_editable"); this.restoreAttrs(); for (var a = this.removeCustomData("classes") ; a && a.length;) this.removeClass(a.pop()); if (!this.is("textarea")) {
                            var a = this.getDocument(), b = a.getHead(); if (b.getCustomData("stylesheet")) {
                                var d = a.getCustomData("stylesheet_ref");
                                --d ? a.setCustomData("stylesheet_ref", d) : (a.removeCustomData("stylesheet_ref"), b.removeCustomData("stylesheet").remove())
                            }
                        }
                    }
                }
            }); CKEDITOR.editor.prototype.editable = function (a) { var b = this._.editable; if (b && a) return 0; if (!arguments.length) return b; a ? b = a instanceof CKEDITOR.editable ? a : new CKEDITOR.editable(this, a) : (b && b.detach(), b = null); return this._.editable = b }; CKEDITOR.on("instanceLoaded", function (b) {
                var d = b.editor; d.on("insertElement", function (a) {
                    a = a.data; a.type == CKEDITOR.NODE_ELEMENT && (a.is("input") ||
                    a.is("textarea")) && ("false" != a.getAttribute("contentEditable") && a.data("cke-editable", a.hasAttribute("contenteditable") ? "true" : "1"), a.setAttribute("contentEditable", !1))
                }); d.on("selectionChange", function (b) { if (!d.readOnly) { var c = d.getSelection(); c && !c.isLocked && (c = d.checkDirty(), d.fire("lockSnapshot"), a(b), d.fire("unlockSnapshot"), !c && d.resetDirty()) } })
            }); CKEDITOR.on("instanceCreated", function (a) {
                var b = a.editor; b.on("mode", function () {
                    var a = b.editable(); if (a && a.isInline()) {
                        var d = b.title; a.changeAttr("role",
                        "textbox"); a.changeAttr("aria-multiline", "true"); a.changeAttr("aria-label", d); d && a.changeAttr("title", d); var c = b.fire("ariaEditorHelpLabel", {}).label; if (c && (d = this.ui.space(this.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? "top" : "contents"))) { var g = CKEDITOR.tools.getNextId(), c = CKEDITOR.dom.element.createFromHtml('\x3cspan id\x3d"' + g + '" class\x3d"cke_voice_label"\x3e' + c + "\x3c/span\x3e"); d.append(c); a.changeAttr("aria-describedby", g) }
                    }
                })
            }); CKEDITOR.addCss(".cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}");
            n = CKEDITOR.dom.walker.whitespaces(!0); r = CKEDITOR.dom.walker.bookmark(!1, !0); w = CKEDITOR.dom.walker.empty(); q = CKEDITOR.dom.walker.bogus(); p = /(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi; u = function () {
                function a(b) { return b.type == CKEDITOR.NODE_ELEMENT } function c(b, d) {
                    var g, e, f, k, h = [], n = d.range.startContainer; g = d.range.startPath(); for (var n = m[n.getName()], l = 0, r = b.getChildren(), u = r.count(), t = -1, x = -1, E = 0, v = g.contains(m.$list) ; l <
                    u; ++l) g = r.getItem(l), a(g) ? (f = g.getName(), v && f in CKEDITOR.dtd.$list ? h = h.concat(c(g, d)) : (k = !!n[f], "br" != f || !g.data("cke-eol") || l && l != u - 1 || (E = (e = l ? h[l - 1].node : r.getItem(l + 1)) && (!a(e) || !e.is("br")), e = e && a(e) && m.$block[e.getName()]), -1 != t || k || (t = l), k || (x = l), h.push({ isElement: 1, isLineBreak: E, isBlock: g.isBlockBoundary(), hasBlockSibling: e, node: g, name: f, allowed: k }), e = E = 0)) : h.push({ isElement: 0, node: g, allowed: 1 }); -1 < t && (h[t].firstNotAllowed = 1); -1 < x && (h[x].lastNotAllowed = 1); return h
                } function g(b, d) {
                    var c = [],
                    e = b.getChildren(), f = e.count(), k, h = 0, n = m[d], l = !b.is(m.$inline) || b.is("br"); for (l && c.push(" ") ; h < f; h++) k = e.getItem(h), a(k) && !k.is(n) ? c = c.concat(g(k, d)) : c.push(k); l && c.push(" "); return c
                } function e(b) { return a(b.startContainer) && b.startContainer.getChild(b.startOffset - 1) } function f(b) { return b && a(b) && (b.is(m.$removeEmpty) || b.is("a") && !b.isBlockBoundary()) } function k(b, d, c, g) {
                    var e = b.clone(), f, h; e.setEndAt(d, CKEDITOR.POSITION_BEFORE_END); (f = (new CKEDITOR.dom.walker(e)).next()) && a(f) && r[f.getName()] &&
                    (h = f.getPrevious()) && a(h) && !h.getParent().equals(b.startContainer) && c.contains(h) && g.contains(f) && f.isIdentical(h) && (f.moveChildren(h), f.remove(), k(b, d, c, g))
                } function n(b, d) { function c(b, d) { if (d.isBlock && d.isElement && !d.node.is("br") && a(b) && b.is("br")) return b.remove(), 1 } var g = d.endContainer.getChild(d.endOffset), e = d.endContainer.getChild(d.endOffset - 1); g && c(g, b[b.length - 1]); e && c(e, b[0]) && (d.setEnd(d.endContainer, d.endOffset - 1), d.collapse()) } var m = CKEDITOR.dtd, r = {
                    p: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1,
                    h6: 1, ul: 1, ol: 1, li: 1, pre: 1, dl: 1, blockquote: 1
                }, u = { p: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1 }, t = CKEDITOR.tools.extend({}, m.$inline); delete t.br; return function (r, C, L, x) {
                    var v = r.editor, p = !1; "unfiltered_html" == C && (C = "html", p = !0); if (!x.checkReadOnly()) {
                        var B = (new CKEDITOR.dom.elementPath(x.startContainer, x.root)).blockLimit || x.root; C = { type: C, dontFilter: p, editable: r, editor: v, range: x, blockLimit: B, mergeCandidates: [], zombies: [] }; var p = C.range, B = C.mergeCandidates, w = "html" === C.type, q, F, U, aa, ba, V; "text" == C.type &&
                        p.shrink(CKEDITOR.SHRINK_ELEMENT, !0, !1) && (F = CKEDITOR.dom.element.createFromHtml("\x3cspan\x3e\x26nbsp;\x3c/span\x3e", p.document), p.insertNode(F), p.setStartAfter(F)); U = new CKEDITOR.dom.elementPath(p.startContainer); C.endPath = aa = new CKEDITOR.dom.elementPath(p.endContainer); if (!p.collapsed) { q = aa.block || aa.blockLimit; var da = p.getCommonAncestor(); q && !q.equals(da) && !q.contains(da) && p.checkEndOfBlock() && C.zombies.push(q); p.deleteContents() } for (; (ba = e(p)) && a(ba) && ba.isBlockBoundary() && U.contains(ba) ;) p.moveToPosition(ba,
                        CKEDITOR.POSITION_BEFORE_END); k(p, C.blockLimit, U, aa); F && (p.setEndBefore(F), p.collapse(), F.remove()); F = p.startPath(); if (q = F.contains(f, !1, 1)) V = p.splitElement(q), C.inlineStylesRoot = q, C.inlineStylesPeak = F.lastElement; F = p.createBookmark(); w && (d(q), d(V)); (q = F.startNode.getPrevious(b)) && a(q) && f(q) && B.push(q); (q = F.startNode.getNext(b)) && a(q) && f(q) && B.push(q); for (q = F.startNode; (q = q.getParent()) && f(q) ;) B.push(q); p.moveToBookmark(F); v.enterMode === CKEDITOR.ENTER_DIV && "" === v.getData(!0) && ((v = r.getFirst()) && v.remove(),
                        x.setStartAt(r, CKEDITOR.POSITION_AFTER_START), x.collapse(!0)); if (r = L) {
                            r = C.range; if ("text" == C.type && C.inlineStylesRoot) { x = C.inlineStylesPeak; v = x.getDocument().createText("{cke-peak}"); for (V = C.inlineStylesRoot.getParent() ; !x.equals(V) ;) v = v.appendTo(x.clone()), x = x.getParent(); L = v.getOuterHtml().split("{cke-peak}").join(L) } x = C.blockLimit.getName(); if (/^\s+|\s+$/.test(L) && "span" in CKEDITOR.dtd[x]) { var Z = '\x3cspan data-cke-marker\x3d"1"\x3e\x26nbsp;\x3c/span\x3e'; L = Z + L + Z } L = C.editor.dataProcessor.toHtml(L,
                            { context: null, fixForBody: !1, protectedWhitespaces: !!Z, dontFilter: C.dontFilter, filter: C.editor.activeFilter, enterMode: C.editor.activeEnterMode }); x = r.document.createElement("body"); x.setHtml(L); Z && (x.getFirst().remove(), x.getLast().remove()); if ((Z = r.startPath().block) && (1 != Z.getChildCount() || !Z.getBogus())) a: {
                                var P; if (1 == x.getChildCount() && a(P = x.getFirst()) && P.is(u) && !P.hasAttribute("contenteditable")) {
                                    Z = P.getElementsByTag("*"); r = 0; for (V = Z.count() ; r < V; r++) if (v = Z.getItem(r), !v.is(t)) break a; P.moveChildren(P.getParent(1));
                                    P.remove()
                                }
                            } C.dataWrapper = x; r = L
                        } if (r) {
                            P = C.range; r = P.document; x = C.blockLimit; V = 0; var S, Z = [], R, N; L = F = 0; var ca, v = P.startContainer; ba = C.endPath.elements[0]; var ea, p = ba.getPosition(v), B = !!ba.getCommonAncestor(v) && p != CKEDITOR.POSITION_IDENTICAL && !(p & CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_IS_CONTAINED), v = c(C.dataWrapper, C); for (n(v, P) ; V < v.length; V++) {
                                p = v[V]; if (w = p.isLineBreak) w = P, q = x, aa = U = void 0, p.hasBlockSibling ? w = 1 : (U = w.startContainer.getAscendant(m.$block, 1)) && U.is({ div: 1, p: 1 }) ? (aa = U.getPosition(q),
                                aa == CKEDITOR.POSITION_IDENTICAL || aa == CKEDITOR.POSITION_CONTAINS ? w = 0 : (q = w.splitElement(U), w.moveToPosition(q, CKEDITOR.POSITION_AFTER_START), w = 1)) : w = 0; if (w) L = 0 < V; else {
                                    w = P.startPath(); !p.isBlock && h(C.editor, w.block, w.blockLimit) && (N = l(C.editor)) && (N = r.createElement(N), N.appendBogus(), P.insertNode(N), CKEDITOR.env.needsBrFiller && (S = N.getBogus()) && S.remove(), P.moveToPosition(N, CKEDITOR.POSITION_BEFORE_END)); if ((w = P.startPath().block) && !w.equals(R)) { if (S = w.getBogus()) S.remove(), Z.push(w); R = w } p.firstNotAllowed &&
                                    (F = 1); if (F && p.isElement) { w = P.startContainer; for (q = null; w && !m[w.getName()][p.name];) { if (w.equals(x)) { w = null; break } q = w; w = w.getParent() } if (w) q && (ca = P.splitElement(q), C.zombies.push(ca), C.zombies.push(q)); else { q = x.getName(); ea = !V; w = V == v.length - 1; q = g(p.node, q); U = []; aa = q.length; for (var da = 0, ga = void 0, fa = 0, ja = -1; da < aa; da++) ga = q[da], " " == ga ? (fa || ea && !da || (U.push(new CKEDITOR.dom.text(" ")), ja = U.length), fa = 1) : (U.push(ga), fa = 0); w && ja == U.length && U.pop(); ea = U } } if (ea) { for (; w = ea.pop() ;) P.insertNode(w); ea = 0 } else P.insertNode(p.node);
                                    p.lastNotAllowed && V < v.length - 1 && ((ca = B ? ba : ca) && P.setEndAt(ca, CKEDITOR.POSITION_AFTER_START), F = 0); P.collapse()
                                }
                            } 1 != v.length ? S = !1 : (S = v[0], S = S.isElement && "false" == S.node.getAttribute("contenteditable")); S && (L = !0, w = v[0].node, P.setStartAt(w, CKEDITOR.POSITION_BEFORE_START), P.setEndAt(w, CKEDITOR.POSITION_AFTER_END)); C.dontMoveCaret = L; C.bogusNeededBlocks = Z
                        } S = C.range; var ia; ca = C.bogusNeededBlocks; for (ea = S.createBookmark() ; R = C.zombies.pop() ;) R.getParent() && (N = S.clone(), N.moveToElementEditStart(R), N.removeEmptyBlocksAtEnd());
                        if (ca) for (; R = ca.pop() ;) CKEDITOR.env.needsBrFiller ? R.appendBogus() : R.append(S.document.createText(" ")); for (; R = C.mergeCandidates.pop() ;) R.mergeSiblings(); S.moveToBookmark(ea); if (!C.dontMoveCaret) { for (R = e(S) ; R && a(R) && !R.is(m.$empty) ;) { if (R.isBlockBoundary()) S.moveToPosition(R, CKEDITOR.POSITION_BEFORE_END); else { if (f(R) && R.getHtml().match(/(\s|&nbsp;)$/g)) { ia = null; break } ia = S.clone(); ia.moveToPosition(R, CKEDITOR.POSITION_BEFORE_END) } R = R.getLast(b) } ia && S.moveToRange(ia) }
                    }
                }
            }(); x = function () {
                function a(b) {
                    b =
                    new CKEDITOR.dom.walker(b); b.guard = function (a, b) { if (b) return !1; if (a.type == CKEDITOR.NODE_ELEMENT) return a.is(CKEDITOR.dtd.$tableContent) }; b.evaluator = function (a) { return a.type == CKEDITOR.NODE_ELEMENT }; return b
                } function b(a, d, c) { d = a.getDocument().createElement(d); a.append(d, c); return d } function d(a) { var b = a.count(), c; for (b; 0 < b--;) c = a.getItem(b), CKEDITOR.tools.trim(c.getHtml()) || (c.appendBogus(), CKEDITOR.env.ie && 9 > CKEDITOR.env.version && c.getChildCount() && c.getFirst().remove()) } return function (c) {
                    var g =
                    c.startContainer, e = g.getAscendant("table", 1), f = !1; d(e.getElementsByTag("td")); d(e.getElementsByTag("th")); e = c.clone(); e.setStart(g, 0); e = a(e).lastBackward(); e || (e = c.clone(), e.setEndAt(g, CKEDITOR.POSITION_BEFORE_END), e = a(e).lastForward(), f = !0); e || (e = g); e.is("table") ? (c.setStartAt(e, CKEDITOR.POSITION_BEFORE_START), c.collapse(!0), e.remove()) : (e.is({ tbody: 1, thead: 1, tfoot: 1 }) && (e = b(e, "tr", f)), e.is("tr") && (e = b(e, e.getParent().is("thead") ? "th" : "td", f)), (g = e.getBogus()) && g.remove(), c.moveToPosition(e, f ? CKEDITOR.POSITION_AFTER_START :
                    CKEDITOR.POSITION_BEFORE_END))
                }
            }(); t = function () {
                function a(b) { b = new CKEDITOR.dom.walker(b); b.guard = function (a, b) { if (b) return !1; if (a.type == CKEDITOR.NODE_ELEMENT) return a.is(CKEDITOR.dtd.$list) || a.is(CKEDITOR.dtd.$listItem) }; b.evaluator = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.is(CKEDITOR.dtd.$listItem) }; return b } return function (b) {
                    var d = b.startContainer, c = !1, g; g = b.clone(); g.setStart(d, 0); g = a(g).lastBackward(); g || (g = b.clone(), g.setEndAt(d, CKEDITOR.POSITION_BEFORE_END), g = a(g).lastForward(),
                    c = !0); g || (g = d); g.is(CKEDITOR.dtd.$list) ? (b.setStartAt(g, CKEDITOR.POSITION_BEFORE_START), b.collapse(!0), g.remove()) : ((d = g.getBogus()) && d.remove(), b.moveToPosition(g, c ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_BEFORE_END), b.select())
                }
            }(); B = {
                eol: {
                    detect: function (a, b) {
                        var d = a.range, c = d.clone(), g = d.clone(), e = new CKEDITOR.dom.elementPath(d.startContainer, b), f = new CKEDITOR.dom.elementPath(d.endContainer, b); c.collapse(1); g.collapse(); e.block && c.checkBoundaryOfElement(e.block, CKEDITOR.END) && (d.setStartAfter(e.block),
                        a.prependEolBr = 1); f.block && g.checkBoundaryOfElement(f.block, CKEDITOR.START) && (d.setEndBefore(f.block), a.appendEolBr = 1)
                    }, fix: function (a, b) { var d = b.getDocument(), c; a.appendEolBr && (c = this.createEolBr(d), a.fragment.append(c)); !a.prependEolBr || c && !c.getPrevious() || a.fragment.append(this.createEolBr(d), 1) }, createEolBr: function (a) { return a.createElement("br", { attributes: { "data-cke-eol": 1 } }) }
                }, bogus: {
                    exclude: function (a) {
                        var b = a.range.getBoundaryNodes(), d = b.startNode, b = b.endNode; !b || !q(b) || d && d.equals(b) ||
                        a.range.setEndBefore(b)
                    }
                }, tree: {
                    rebuild: function (a, b) {
                        var d = a.range, c = d.getCommonAncestor(), g = new CKEDITOR.dom.elementPath(c, b), e = new CKEDITOR.dom.elementPath(d.startContainer, b), d = new CKEDITOR.dom.elementPath(d.endContainer, b), f; c.type == CKEDITOR.NODE_TEXT && (c = c.getParent()); if (g.blockLimit.is({ tr: 1, table: 1 })) { var k = g.contains("table").getParent(); f = function (a) { return !a.equals(k) } } else if (g.block && g.block.is(CKEDITOR.dtd.$listItem) && (e = e.contains(CKEDITOR.dtd.$list), d = d.contains(CKEDITOR.dtd.$list),
                        !e.equals(d))) { var h = g.contains(CKEDITOR.dtd.$list).getParent(); f = function (a) { return !a.equals(h) } } f || (f = function (a) { return !a.equals(g.block) && !a.equals(g.blockLimit) }); this.rebuildFragment(a, b, c, f)
                    }, rebuildFragment: function (a, b, d, c) { for (var g; d && !d.equals(b) && c(d) ;) g = d.clone(0, 1), a.fragment.appendTo(g), a.fragment = g, d = d.getParent() }
                }, cell: {
                    shrink: function (a) {
                        a = a.range; var b = a.startContainer, d = a.endContainer, c = a.startOffset, g = a.endOffset; b.type == CKEDITOR.NODE_ELEMENT && b.equals(d) && b.is("tr") && ++c ==
                        g && a.shrink(CKEDITOR.SHRINK_TEXT)
                    }
                }
            }; v = function () {
                function a(b, d) { var c = b.getParent(); if (c.is(CKEDITOR.dtd.$inline)) b[d ? "insertBefore" : "insertAfter"](c) } function b(d, c, g) { a(c); a(g, 1); for (var e; e = g.getNext() ;) e.insertAfter(c), c = e; w(d) && d.remove() } function d(a, b) { var c = new CKEDITOR.dom.range(a); c.setStartAfter(b.startNode); c.setEndBefore(b.endNode); return c } return {
                    list: {
                        detectMerge: function (a, b) {
                            var c = d(b, a.bookmark), g = c.startPath(), e = c.endPath(), f = g.contains(CKEDITOR.dtd.$list), k = e.contains(CKEDITOR.dtd.$list);
                            a.mergeList = f && k && f.getParent().equals(k.getParent()) && !f.equals(k); a.mergeListItems = g.block && e.block && g.block.is(CKEDITOR.dtd.$listItem) && e.block.is(CKEDITOR.dtd.$listItem); if (a.mergeList || a.mergeListItems) c = c.clone(), c.setStartBefore(a.bookmark.startNode), c.setEndAfter(a.bookmark.endNode), a.mergeListBookmark = c.createBookmark()
                        }, merge: function (a, d) {
                            if (a.mergeListBookmark) {
                                var c = a.mergeListBookmark.startNode, g = a.mergeListBookmark.endNode, e = new CKEDITOR.dom.elementPath(c, d), f = new CKEDITOR.dom.elementPath(g,
                                d); if (a.mergeList) { var k = e.contains(CKEDITOR.dtd.$list), h = f.contains(CKEDITOR.dtd.$list); k.equals(h) || (h.moveChildren(k), h.remove()) } a.mergeListItems && (e = e.contains(CKEDITOR.dtd.$listItem), f = f.contains(CKEDITOR.dtd.$listItem), e.equals(f) || b(f, c, g)); c.remove(); g.remove()
                            }
                        }
                    }, block: {
                        detectMerge: function (a, b) { if (!a.tableContentsRanges && !a.mergeListBookmark) { var d = new CKEDITOR.dom.range(b); d.setStartBefore(a.bookmark.startNode); d.setEndAfter(a.bookmark.endNode); a.mergeBlockBookmark = d.createBookmark() } },
                        merge: function (a, d) { if (a.mergeBlockBookmark && !a.purgeTableBookmark) { var c = a.mergeBlockBookmark.startNode, g = a.mergeBlockBookmark.endNode, e = new CKEDITOR.dom.elementPath(c, d), f = new CKEDITOR.dom.elementPath(g, d), e = e.block, f = f.block; e && f && !e.equals(f) && b(f, c, g); c.remove(); g.remove() } }
                    }, table: function () {
                        function a(d) {
                            var g = [], e, f = new CKEDITOR.dom.walker(d), k = d.startPath().contains(c), h = d.endPath().contains(c), n = {}; f.guard = function (a, f) {
                                if (a.type == CKEDITOR.NODE_ELEMENT) {
                                    var l = "visited_" + (f ? "out" : "in"); if (a.getCustomData(l)) return;
                                    CKEDITOR.dom.element.setMarker(n, a, l, 1)
                                } if (f && k && a.equals(k)) e = d.clone(), e.setEndAt(k, CKEDITOR.POSITION_BEFORE_END), g.push(e); else if (!f && h && a.equals(h)) e = d.clone(), e.setStartAt(h, CKEDITOR.POSITION_AFTER_START), g.push(e); else {
                                    if (l = !f) l = a.type == CKEDITOR.NODE_ELEMENT && a.is(c) && (!k || b(a, k)) && (!h || b(a, h)); if (!l && (l = f)) if (a.is(c)) var l = k && k.getAscendant("table", !0), m = h && h.getAscendant("table", !0), r = a.getAscendant("table", !0), l = l && l.contains(r) || m && m.contains(r); else l = void 0; l && (e = d.clone(), e.selectNodeContents(a),
                                    g.push(e))
                                }
                            }; f.lastForward(); CKEDITOR.dom.element.clearAllMarkers(n); return g
                        } function b(a, d) { var c = CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_IS_CONTAINED, g = a.getPosition(d); return g === CKEDITOR.POSITION_IDENTICAL ? !1 : 0 === (g & c) } var c = { td: 1, th: 1, caption: 1 }; return {
                            detectPurge: function (a) {
                                var b = a.range, d = b.clone(); d.enlarge(CKEDITOR.ENLARGE_ELEMENT); var d = new CKEDITOR.dom.walker(d), g = 0; d.evaluator = function (a) { a.type == CKEDITOR.NODE_ELEMENT && a.is(c) && ++g }; d.checkForward(); if (1 < g) {
                                    var d = b.startPath().contains("table"),
                                    e = b.endPath().contains("table"); d && e && b.checkBoundaryOfElement(d, CKEDITOR.START) && b.checkBoundaryOfElement(e, CKEDITOR.END) && (b = a.range.clone(), b.setStartBefore(d), b.setEndAfter(e), a.purgeTableBookmark = b.createBookmark())
                                }
                            }, detectRanges: function (g, e) {
                                var f = d(e, g.bookmark), k = f.clone(), h, n, l = f.getCommonAncestor(); l.is(CKEDITOR.dtd.$tableContent) && !l.is(c) && (l = l.getAscendant("table", !0)); n = l; l = new CKEDITOR.dom.elementPath(f.startContainer, n); n = new CKEDITOR.dom.elementPath(f.endContainer, n); l = l.contains("table");
                                n = n.contains("table"); if (l || n) l && n && b(l, n) ? (g.tableSurroundingRange = k, k.setStartAt(l, CKEDITOR.POSITION_AFTER_END), k.setEndAt(n, CKEDITOR.POSITION_BEFORE_START), k = f.clone(), k.setEndAt(l, CKEDITOR.POSITION_AFTER_END), h = f.clone(), h.setStartAt(n, CKEDITOR.POSITION_BEFORE_START), h = a(k).concat(a(h))) : l ? n || (g.tableSurroundingRange = k, k.setStartAt(l, CKEDITOR.POSITION_AFTER_END), f.setEndAt(l, CKEDITOR.POSITION_AFTER_END)) : (g.tableSurroundingRange = k, k.setEndAt(n, CKEDITOR.POSITION_BEFORE_START), f.setStartAt(n, CKEDITOR.POSITION_AFTER_START)),
                                g.tableContentsRanges = h ? h : a(f)
                            }, deleteRanges: function (a) { for (var b; b = a.tableContentsRanges.pop() ;) b.extractContents(), w(b.startContainer) && b.startContainer.appendBogus(); a.tableSurroundingRange && a.tableSurroundingRange.extractContents() }, purge: function (a) { if (a.purgeTableBookmark) { var b = a.doc, d = a.range.clone(), b = b.createElement("p"); b.insertBefore(a.purgeTableBookmark.startNode); d.moveToBookmark(a.purgeTableBookmark); d.deleteContents(); a.range.moveToPosition(b, CKEDITOR.POSITION_AFTER_START) } }
                        }
                    }(),
                    detectExtractMerge: function (a) { return !(a.range.startPath().contains(CKEDITOR.dtd.$listItem) && a.range.endPath().contains(CKEDITOR.dtd.$listItem)) }, fixUneditableRangePosition: function (a) { a.startContainer.getDtd()["#"] || a.moveToClosestEditablePosition(null, !0) }, autoParagraph: function (a, b) { var d = b.startPath(), c; h(a, d.block, d.blockLimit) && (c = l(a)) && (c = b.document.createElement(c), c.appendBogus(), b.insertNode(c), b.moveToPosition(c, CKEDITOR.POSITION_AFTER_START)) }
                }
            }()
        })(); (function () {
            function a(a) {
                return CKEDITOR.plugins.widget &&
                CKEDITOR.plugins.widget.isDomWidget(a)
            } function f(b, d) {
                if (0 === b.length || a(b[0].getEnclosedNode())) return !1; var c, g; if ((c = !d && 1 === b.length) && !(c = b[0].collapsed)) { var e = b[0]; c = e.startContainer.getAscendant({ td: 1, th: 1 }, !0); var f = e.endContainer.getAscendant({ td: 1, th: 1 }, !0); g = CKEDITOR.tools.trim; c && c.equals(f) && !c.findOne("td, th, tr, tbody, table") ? (e = e.cloneContents(), c = e.getFirst() ? g(e.getFirst().getText()) !== g(c.getText()) : !0) : c = !1 } if (c) return !1; for (g = 0; g < b.length; g++) if (c = b[g]._getTableElement(),
                !c) return !1; return !0
            } function e(a) { function b(a) { a = a.find("td, th"); var d = [], c; for (c = 0; c < a.count() ; c++) d.push(a.getItem(c)); return d } var d = [], c, g; for (g = 0; g < a.length; g++) c = a[g]._getTableElement(), c.is && c.is({ td: 1, th: 1 }) ? d.push(c) : d = d.concat(b(c)); return d } function b(a) { a = e(a); var b = "", d = [], c, g; for (g = 0; g < a.length; g++) c && !c.equals(a[g].getAscendant("tr")) ? (b += d.join("\t") + "\n", c = a[g].getAscendant("tr"), d = []) : 0 === g && (c = a[g].getAscendant("tr")), d.push(a[g].getText()); return b += d.join("\t") } function c(a) {
                var d =
                this.root.editor, c = d.getSelection(1); this.reset(); v = !0; c.root.once("selectionchange", function (a) { a.cancel() }, null, null, 0); c.selectRanges([a[0]]); c = this._.cache; c.ranges = new CKEDITOR.dom.rangeList(a); c.type = CKEDITOR.SELECTION_TEXT; c.selectedElement = a[0]._getTableElement(); c.selectedText = b(a); c.nativeSel = null; this.isFake = 1; this.rev = x++; d._.fakeSelection = this; v = !1; this.root.fire("selectionchange")
            } function m() {
                var b = this._.fakeSelection, d; if (b) {
                    d = this.getSelection(1); var c; if (!(c = !d) && (c = !d.isHidden())) {
                        c =
                        b; var g = d.getRanges(), e = c.getRanges(), k = g.length && g[0]._getTableElement() && g[0]._getTableElement().getAscendant("table", !0), h = e.length && e[0]._getTableElement() && e[0]._getTableElement().getAscendant("table", !0), n = 1 === g.length && g[0]._getTableElement() && g[0]._getTableElement().is("table"), l = 1 === e.length && e[0]._getTableElement() && e[0]._getTableElement().is("table"); if (a(c.getSelectedElement())) c = !1; else {
                            var m = 1 === g.length && g[0].collapsed, e = f(g, !!CKEDITOR.env.webkit) && f(e); k = k && h ? k.equals(h) || h.contains(k) :
                            !1; k && (m || e) ? (n && !l && c.selectRanges(g), c = !0) : c = !1
                        } c = !c
                    } c && (b.reset(), b = 0)
                } if (!b && (b = d || this.getSelection(1), !b || b.getType() == CKEDITOR.SELECTION_NONE)) return; this.fire("selectionCheck", b); d = this.elementPath(); d.compare(this._.selectionPreviousPath) || (c = this._.selectionPreviousPath && this._.selectionPreviousPath.blockLimit.equals(d.blockLimit), !CKEDITOR.env.webkit && !CKEDITOR.env.gecko || c || (this._.previousActive = this.document.getActive()), this._.selectionPreviousPath = d, this.fire("selectionChange", {
                    selection: b,
                    path: d
                }))
            } function h() { z = !0; y || (l.call(this), y = CKEDITOR.tools.setTimeout(l, 200, this)) } function l() { y = null; z && (CKEDITOR.tools.setTimeout(m, 0, this), z = !1) } function d(a) { return A(a) || a.type == CKEDITOR.NODE_ELEMENT && !a.is(CKEDITOR.dtd.$empty) ? !0 : !1 } function k(a) {
                function b(d, c) { return d && d.type != CKEDITOR.NODE_TEXT ? a.clone()["moveToElementEdit" + (c ? "End" : "Start")](d) : !1 } if (!(a.root instanceof CKEDITOR.editable)) return !1; var c = a.startContainer, g = a.getPreviousNode(d, null, c), e = a.getNextNode(d, null, c); return b(g) ||
                b(e, 1) || !(g || e || c.type == CKEDITOR.NODE_ELEMENT && c.isBlockBoundary() && c.getBogus()) ? !0 : !1
            } function g(a) { n(a, !1); var b = a.getDocument().createText(t); a.setCustomData("cke-fillingChar", b); return b } function n(a, b) {
                var d = a && a.removeCustomData("cke-fillingChar"); if (d) {
                    if (!1 !== b) {
                        var c = a.getDocument().getSelection().getNative(), g = c && "None" != c.type && c.getRangeAt(0), e = t.length; if (d.getLength() > e && g && g.intersectsNode(d.$)) {
                            var f = [{ node: c.anchorNode, offset: c.anchorOffset }, { node: c.focusNode, offset: c.focusOffset }];
                            c.anchorNode == d.$ && c.anchorOffset > e && (f[0].offset -= e); c.focusNode == d.$ && c.focusOffset > e && (f[1].offset -= e)
                        }
                    } d.setText(r(d.getText(), 1)); f && (d = a.getDocument().$, c = d.getSelection(), d = d.createRange(), d.setStart(f[0].node, f[0].offset), d.collapse(!0), c.removeAllRanges(), c.addRange(d), c.extend(f[1].node, f[1].offset))
                }
            } function r(a, b) { return b ? a.replace(B, function (a, b) { return b ? " " : "" }) : a.replace(t, "") } function w(a, b) {
                var d = b && CKEDITOR.tools.htmlEncode(b) || "\x26nbsp;", d = CKEDITOR.dom.element.createFromHtml('\x3cdiv data-cke-hidden-sel\x3d"1" data-cke-temp\x3d"1" style\x3d"' +
                (CKEDITOR.env.ie && 14 > CKEDITOR.env.version ? "display:none" : "position:fixed;top:0;left:-1000px;width:0;height:0;overflow:hidden;") + '"\x3e' + d + "\x3c/div\x3e", a.document); a.fire("lockSnapshot"); a.editable().append(d); var c = a.getSelection(1), g = a.createRange(), e = c.root.on("selectionchange", function (a) { a.cancel() }, null, null, 0); g.setStartAt(d, CKEDITOR.POSITION_AFTER_START); g.setEndAt(d, CKEDITOR.POSITION_BEFORE_END); c.selectRanges([g]); e.removeListener(); a.fire("unlockSnapshot"); a._.hiddenSelectionContainer =
                d
            } function q(a) { var b = { 37: 1, 39: 1, 8: 1, 46: 1 }; return function (d) { var c = d.data.getKeystroke(); if (b[c]) { var g = a.getSelection().getRanges(), e = g[0]; 1 == g.length && e.collapsed && (c = e[38 > c ? "getPreviousEditableNode" : "getNextEditableNode"]()) && c.type == CKEDITOR.NODE_ELEMENT && "false" == c.getAttribute("contenteditable") && (a.getSelection().fake(c), d.data.preventDefault(), d.cancel()) } } } function p(a) {
                for (var b = 0; b < a.length; b++) {
                    var d = a[b]; d.getCommonAncestor().isReadOnly() && a.splice(b, 1); if (!d.collapsed) {
                        if (d.startContainer.isReadOnly()) for (var c =
                        d.startContainer, g; c && !((g = c.type == CKEDITOR.NODE_ELEMENT) && c.is("body") || !c.isReadOnly()) ;) g && "false" == c.getAttribute("contentEditable") && d.setStartAfter(c), c = c.getParent(); c = d.startContainer; g = d.endContainer; var e = d.startOffset, f = d.endOffset, k = d.clone(); c && c.type == CKEDITOR.NODE_TEXT && (e >= c.getLength() ? k.setStartAfter(c) : k.setStartBefore(c)); g && g.type == CKEDITOR.NODE_TEXT && (f ? k.setEndAfter(g) : k.setEndBefore(g)); c = new CKEDITOR.dom.walker(k); c.evaluator = function (c) {
                            if (c.type == CKEDITOR.NODE_ELEMENT &&
                            c.isReadOnly()) { var g = d.clone(); d.setEndBefore(c); d.collapsed && a.splice(b--, 1); c.getPosition(k.endContainer) & CKEDITOR.POSITION_CONTAINS || (g.setStartAfter(c), g.collapsed || a.splice(b + 1, 0, g)); return !0 } return !1
                        }; c.next()
                    }
                } return a
            } var u = "function" != typeof window.getSelection, x = 1, t = CKEDITOR.tools.repeat("​", 7), B = new RegExp(t + "( )?", "g"), v, y, z, A = CKEDITOR.dom.walker.invisible(1), D = function () {
                function a(b) {
                    return function (a) {
                        var d = a.editor.createRange(); d.moveToClosestEditablePosition(a.selected, b) && a.editor.getSelection().selectRanges([d]);
                        return !1
                    }
                } function b(a) { return function (b) { var d = b.editor, c = d.createRange(), g; if (!d.readOnly) return (g = c.moveToClosestEditablePosition(b.selected, a)) || (g = c.moveToClosestEditablePosition(b.selected, !a)), g && d.getSelection().selectRanges([c]), d.fire("saveSnapshot"), b.selected.remove(), g || (c.moveToElementEditablePosition(d.editable()), d.getSelection().selectRanges([c])), d.fire("saveSnapshot"), !1 } } var d = a(), c = a(1); return { 37: d, 38: d, 39: c, 40: c, 8: b(), 46: b(1) }
            }(); CKEDITOR.on("instanceCreated", function (a) {
                function b() {
                    var a =
                    d.getSelection(); a && a.removeAllRanges()
                } var d = a.editor; d.on("contentDom", function () {
                    function a() { v = new CKEDITOR.dom.selection(d.getSelection()); v.lock() } function b() { f.removeListener("mouseup", b); r.removeListener("mouseup", b); var a = CKEDITOR.document.$.selection, d = a.createRange(); "None" != a.type && d.parentElement() && d.parentElement().ownerDocument == e.$ && d.select() } function c(a) {
                        var b, d; b = (b = this.document.getActive()) ? "input" === b.getName() || "textarea" === b.getName() : !1; b || (b = this.getSelection(1), (d = g(b)) &&
                        !d.equals(k) && (b.selectElement(d), a.data.preventDefault()))
                    } function g(a) { a = a.getRanges()[0]; return a ? (a = a.startContainer.getAscendant(function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("contenteditable") }, !0)) && "false" === a.getAttribute("contenteditable") ? a : null : null } var e = d.document, f = CKEDITOR.document, k = d.editable(), l = e.getBody(), r = e.getDocumentElement(), t = k.isInline(), x, v; CKEDITOR.env.gecko && k.attachListener(k, "focus", function (a) {
                        a.removeListener(); 0 !== x && (a = d.getSelection().getNative()) &&
                        a.isCollapsed && a.anchorNode == k.$ && (a = d.createRange(), a.moveToElementEditStart(k), a.select())
                    }, null, null, -2); k.attachListener(k, CKEDITOR.env.webkit || CKEDITOR.env.gecko ? "focusin" : "focus", function () { if (x && (CKEDITOR.env.webkit || CKEDITOR.env.gecko)) { x = d._.previousActive && d._.previousActive.equals(e.getActive()); var a = null != d._.previousScrollTop && d._.previousScrollTop != k.$.scrollTop; CKEDITOR.env.webkit && x && a && (k.$.scrollTop = d._.previousScrollTop) } d.unlockSelection(x); x = 0 }, null, null, -1); k.attachListener(k,
                    "mousedown", function () { x = 0 }); if (CKEDITOR.env.ie || CKEDITOR.env.gecko || t) u ? k.attachListener(k, "beforedeactivate", a, null, null, -1) : k.attachListener(d, "selectionCheck", a, null, null, -1), k.attachListener(k, CKEDITOR.env.webkit || CKEDITOR.env.gecko ? "focusout" : "blur", function () { var a = v && (v.isFake || 2 > v.getRanges().length); CKEDITOR.env.gecko && !t && a || (d.lockSelection(v), x = 1) }, null, null, -1), k.attachListener(k, "mousedown", function () { x = 0 }); if (CKEDITOR.env.ie && !t) {
                        var p; k.attachListener(k, "mousedown", function (a) {
                            2 ==
                            a.data.$.button && ((a = d.document.getSelection()) && a.getType() != CKEDITOR.SELECTION_NONE || (p = d.window.getScrollPosition()))
                        }); k.attachListener(k, "mouseup", function (a) { 2 == a.data.$.button && p && (d.document.$.documentElement.scrollLeft = p.x, d.document.$.documentElement.scrollTop = p.y); p = null }); if ("BackCompat" != e.$.compatMode) {
                            if (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat) {
                                var z, w; r.on("mousedown", function (a) {
                                    function b(a) {
                                        a = a.data.$; if (z) {
                                            var d = l.$.createTextRange(); try { d.moveToPoint(a.clientX, a.clientY) } catch (c) { } z.setEndPoint(0 >
                                            w.compareEndPoints("StartToStart", d) ? "EndToEnd" : "StartToStart", d); z.select()
                                        }
                                    } function d() { r.removeListener("mousemove", b); f.removeListener("mouseup", d); r.removeListener("mouseup", d); z.select() } a = a.data; if (a.getTarget().is("html") && a.$.y < r.$.clientHeight && a.$.x < r.$.clientWidth) { z = l.$.createTextRange(); try { z.moveToPoint(a.$.clientX, a.$.clientY) } catch (c) { } w = z.duplicate(); r.on("mousemove", b); f.on("mouseup", d); r.on("mouseup", d) }
                                })
                            } if (7 < CKEDITOR.env.version && 11 > CKEDITOR.env.version) r.on("mousedown", function (a) {
                                a.data.getTarget().is("html") &&
                                (f.on("mouseup", b), r.on("mouseup", b))
                            })
                        }
                    } k.attachListener(k, "selectionchange", m, d); k.attachListener(k, "keyup", h, d); k.attachListener(k, "touchstart", h, d); k.attachListener(k, "touchend", h, d); CKEDITOR.env.ie && k.attachListener(k, "keydown", c, d); k.attachListener(k, CKEDITOR.env.webkit || CKEDITOR.env.gecko ? "focusin" : "focus", function () { d.forceNextSelectionCheck(); d.selectionChange(1) }); if (t && (CKEDITOR.env.webkit || CKEDITOR.env.gecko)) {
                        var y; k.attachListener(k, "mousedown", function () { y = 1 }); k.attachListener(e.getDocumentElement(),
                        "mouseup", function () { y && h.call(d); y = 0 })
                    } else k.attachListener(CKEDITOR.env.ie ? k : e.getDocumentElement(), "mouseup", h, d); CKEDITOR.env.webkit && k.attachListener(e, "keydown", function (a) { switch (a.data.getKey()) { case 13: case 33: case 34: case 35: case 36: case 37: case 39: case 8: case 45: case 46: k.hasFocus && n(k) } }, null, null, -1); k.attachListener(k, "keydown", q(d), null, null, -1)
                }); d.on("setData", function () { d.unlockSelection(); CKEDITOR.env.webkit && b() }); d.on("contentDomUnload", function () { d.unlockSelection() }); if (CKEDITOR.env.ie9Compat) d.on("beforeDestroy",
                b, null, null, 9); d.on("dataReady", function () { delete d._.fakeSelection; delete d._.hiddenSelectionContainer; d.selectionChange(1) }); d.on("loadSnapshot", function () { var a = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT), b = d.editable().getLast(a); b && b.hasAttribute("data-cke-hidden-sel") && (b.remove(), CKEDITOR.env.gecko && (a = d.editable().getFirst(a)) && a.is("br") && a.getAttribute("_moz_editor_bogus_node") && a.remove()) }, null, null, 100); d.on("key", function (a) {
                    if ("wysiwyg" == d.mode) {
                        var b = d.getSelection(); if (b.isFake) {
                            var c =
                            D[a.data.keyCode]; if (c) return c({ editor: d, selected: b.getSelectedElement(), selection: b, keyEvent: a })
                        }
                    }
                })
            }); if (CKEDITOR.env.webkit) CKEDITOR.on("instanceReady", function (a) {
                var b = a.editor; b.on("selectionChange", function () { var a = b.editable(), d = a.getCustomData("cke-fillingChar"); d && (d.getCustomData("ready") ? (n(a), a.editor.fire("selectionCheck")) : d.setCustomData("ready", 1)) }, null, null, -1); b.on("beforeSetMode", function () { n(b.editable()) }, null, null, -1); b.on("getSnapshot", function (a) { a.data && (a.data = r(a.data)) },
                b, null, 20); b.on("toDataFormat", function (a) { a.data.dataValue = r(a.data.dataValue) }, null, null, 0)
            }); CKEDITOR.editor.prototype.selectionChange = function (a) { (a ? m : h).call(this) }; CKEDITOR.editor.prototype.getSelection = function (a) { return !this._.savedSelection && !this._.fakeSelection || a ? (a = this.editable()) && "wysiwyg" == this.mode ? new CKEDITOR.dom.selection(a) : null : this._.savedSelection || this._.fakeSelection }; CKEDITOR.editor.prototype.getSelectedRanges = function (a) {
                var b = this.getSelection(); return b && b.getRanges(a) ||
                []
            }; CKEDITOR.editor.prototype.lockSelection = function (a) { a = a || this.getSelection(1); return a.getType() != CKEDITOR.SELECTION_NONE ? (!a.isLocked && a.lock(), this._.savedSelection = a, !0) : !1 }; CKEDITOR.editor.prototype.unlockSelection = function (a) { var b = this._.savedSelection; return b ? (b.unlock(a), delete this._.savedSelection, !0) : !1 }; CKEDITOR.editor.prototype.forceNextSelectionCheck = function () { delete this._.selectionPreviousPath }; CKEDITOR.dom.document.prototype.getSelection = function () { return new CKEDITOR.dom.selection(this) };
            CKEDITOR.dom.range.prototype.select = function () { var a = this.root instanceof CKEDITOR.editable ? this.root.editor.getSelection() : new CKEDITOR.dom.selection(this.root); a.selectRanges([this]); return a }; CKEDITOR.SELECTION_NONE = 1; CKEDITOR.SELECTION_TEXT = 2; CKEDITOR.SELECTION_ELEMENT = 3; CKEDITOR.dom.selection = function (a) {
                if (a instanceof CKEDITOR.dom.selection) { var b = a; a = a.root } var d = a instanceof CKEDITOR.dom.element; this.rev = b ? b.rev : x++; this.document = a instanceof CKEDITOR.dom.document ? a : a.getDocument(); this.root =
                d ? a : this.document.getBody(); this.isLocked = 0; this._ = { cache: {} }; if (b) return CKEDITOR.tools.extend(this._.cache, b._.cache), this.isFake = b.isFake, this.isLocked = b.isLocked, this; a = this.getNative(); var c, g; if (a) if (a.getRangeAt) c = (g = a.rangeCount && a.getRangeAt(0)) && new CKEDITOR.dom.node(g.commonAncestorContainer); else { try { g = a.createRange() } catch (e) { } c = g && CKEDITOR.dom.element.get(g.item && g.item(0) || g.parentElement()) } if (!c || c.type != CKEDITOR.NODE_ELEMENT && c.type != CKEDITOR.NODE_TEXT || !this.root.equals(c) && !this.root.contains(c)) this._.cache.type =
                CKEDITOR.SELECTION_NONE, this._.cache.startElement = null, this._.cache.selectedElement = null, this._.cache.selectedText = "", this._.cache.ranges = new CKEDITOR.dom.rangeList; return this
            }; var G = { img: 1, hr: 1, li: 1, table: 1, tr: 1, td: 1, th: 1, embed: 1, object: 1, ol: 1, ul: 1, a: 1, input: 1, form: 1, select: 1, textarea: 1, button: 1, fieldset: 1, thead: 1, tfoot: 1 }; CKEDITOR.tools.extend(CKEDITOR.dom.selection, { _removeFillingCharSequenceString: r, _createFillingCharSequenceNode: g, FILLING_CHAR_SEQUENCE: t }); CKEDITOR.dom.selection.prototype = {
                getNative: function () {
                    return void 0 !==
                    this._.cache.nativeSel ? this._.cache.nativeSel : this._.cache.nativeSel = u ? this.document.$.selection : this.document.getWindow().$.getSelection()
                }, getType: u ? function () { var a = this._.cache; if (a.type) return a.type; var b = CKEDITOR.SELECTION_NONE; try { var d = this.getNative(), c = d.type; "Text" == c && (b = CKEDITOR.SELECTION_TEXT); "Control" == c && (b = CKEDITOR.SELECTION_ELEMENT); d.createRange().parentElement() && (b = CKEDITOR.SELECTION_TEXT) } catch (g) { } return a.type = b } : function () {
                    var a = this._.cache; if (a.type) return a.type; var b =
                    CKEDITOR.SELECTION_TEXT, d = this.getNative(); if (!d || !d.rangeCount) b = CKEDITOR.SELECTION_NONE; else if (1 == d.rangeCount) { var d = d.getRangeAt(0), c = d.startContainer; c == d.endContainer && 1 == c.nodeType && 1 == d.endOffset - d.startOffset && G[c.childNodes[d.startOffset].nodeName.toLowerCase()] && (b = CKEDITOR.SELECTION_ELEMENT) } return a.type = b
                }, getRanges: function () {
                    var a = u ? function () {
                        function a(b) { return (new CKEDITOR.dom.node(b)).getIndex() } var b = function (b, d) {
                            b = b.duplicate(); b.collapse(d); var c = b.parentElement(); if (!c.hasChildNodes()) return {
                                container: c,
                                offset: 0
                            }; for (var g = c.children, e, f, k = b.duplicate(), h = 0, n = g.length - 1, l = -1, m, r; h <= n;) if (l = Math.floor((h + n) / 2), e = g[l], k.moveToElementText(e), m = k.compareEndPoints("StartToStart", b), 0 < m) n = l - 1; else if (0 > m) h = l + 1; else return { container: c, offset: a(e) }; if (-1 == l || l == g.length - 1 && 0 > m) {
                                k.moveToElementText(c); k.setEndPoint("StartToStart", b); k = k.text.replace(/(\r\n|\r)/g, "\n").length; g = c.childNodes; if (!k) return e = g[g.length - 1], e.nodeType != CKEDITOR.NODE_TEXT ? { container: c, offset: g.length } : { container: e, offset: e.nodeValue.length };
                                for (c = g.length; 0 < k && 0 < c;) f = g[--c], f.nodeType == CKEDITOR.NODE_TEXT && (r = f, k -= f.nodeValue.length); return { container: r, offset: -k }
                            } k.collapse(0 < m ? !0 : !1); k.setEndPoint(0 < m ? "StartToStart" : "EndToStart", b); k = k.text.replace(/(\r\n|\r)/g, "\n").length; if (!k) return { container: c, offset: a(e) + (0 < m ? 0 : 1) }; for (; 0 < k;) try { f = e[0 < m ? "previousSibling" : "nextSibling"], f.nodeType == CKEDITOR.NODE_TEXT && (k -= f.nodeValue.length, r = f), e = f } catch (t) { return { container: c, offset: a(e) } } return { container: r, offset: 0 < m ? -k : r.nodeValue.length + k }
                        };
                        return function () {
                            var a = this.getNative(), d = a && a.createRange(), c = this.getType(); if (!a) return []; if (c == CKEDITOR.SELECTION_TEXT) return a = new CKEDITOR.dom.range(this.root), c = b(d, !0), a.setStart(new CKEDITOR.dom.node(c.container), c.offset), c = b(d), a.setEnd(new CKEDITOR.dom.node(c.container), c.offset), a.endContainer.getPosition(a.startContainer) & CKEDITOR.POSITION_PRECEDING && a.endOffset <= a.startContainer.getIndex() && a.collapse(), [a]; if (c == CKEDITOR.SELECTION_ELEMENT) {
                                for (var c = [], g = 0; g < d.length; g++) {
                                    for (var e =
                                    d.item(g), f = e.parentNode, k = 0, a = new CKEDITOR.dom.range(this.root) ; k < f.childNodes.length && f.childNodes[k] != e; k++); a.setStart(new CKEDITOR.dom.node(f), k); a.setEnd(new CKEDITOR.dom.node(f), k + 1); c.push(a)
                                } return c
                            } return []
                        }
                    }() : function () { var a = [], b, d = this.getNative(); if (!d) return a; for (var c = 0; c < d.rangeCount; c++) { var g = d.getRangeAt(c); b = new CKEDITOR.dom.range(this.root); b.setStart(new CKEDITOR.dom.node(g.startContainer), g.startOffset); b.setEnd(new CKEDITOR.dom.node(g.endContainer), g.endOffset); a.push(b) } return a };
                    return function (b) { var d = this._.cache, c = d.ranges; c || (d.ranges = c = new CKEDITOR.dom.rangeList(a.call(this))); return b ? p(new CKEDITOR.dom.rangeList(c.slice())) : c }
                }(), getStartElement: function () {
                    var a = this._.cache; if (void 0 !== a.startElement) return a.startElement; var b; switch (this.getType()) {
                        case CKEDITOR.SELECTION_ELEMENT: return this.getSelectedElement(); case CKEDITOR.SELECTION_TEXT: var d = this.getRanges()[0]; if (d) {
                            if (d.collapsed) b = d.startContainer, b.type != CKEDITOR.NODE_ELEMENT && (b = b.getParent()); else {
                                for (d.optimize() ; b =
                                d.startContainer, d.startOffset == (b.getChildCount ? b.getChildCount() : b.getLength()) && !b.isBlockBoundary() ;) d.setStartAfter(b); b = d.startContainer; if (b.type != CKEDITOR.NODE_ELEMENT) return b.getParent(); if ((b = b.getChild(d.startOffset)) && b.type == CKEDITOR.NODE_ELEMENT) for (d = b.getFirst() ; d && d.type == CKEDITOR.NODE_ELEMENT;) b = d, d = d.getFirst(); else b = d.startContainer
                            } b = b.$
                        }
                    } return a.startElement = b ? new CKEDITOR.dom.element(b) : null
                }, getSelectedElement: function () {
                    var a = this._.cache; if (void 0 !== a.selectedElement) return a.selectedElement;
                    var b = this, d = CKEDITOR.tools.tryThese(function () { return b.getNative().createRange().item(0) }, function () { for (var a = b.getRanges()[0].clone(), d, c, g = 2; g && !((d = a.getEnclosedNode()) && d.type == CKEDITOR.NODE_ELEMENT && G[d.getName()] && (c = d)) ; g--) a.shrink(CKEDITOR.SHRINK_ELEMENT); return c && c.$ }); return a.selectedElement = d ? new CKEDITOR.dom.element(d) : null
                }, getSelectedText: function () {
                    var a = this._.cache; if (void 0 !== a.selectedText) return a.selectedText; var b = this.getNative(), b = u ? "Control" == b.type ? "" : b.createRange().text :
                    b.toString(); return a.selectedText = b
                }, lock: function () { this.getRanges(); this.getStartElement(); this.getSelectedElement(); this.getSelectedText(); this._.cache.nativeSel = null; this.isLocked = 1 }, unlock: function (a) {
                    if (this.isLocked) {
                        if (a) var b = this.getSelectedElement(), d = this.getRanges(), g = this.isFake; this.isLocked = 0; this.reset(); a && (a = b || d[0] && d[0].getCommonAncestor()) && a.getAscendant("body", 1) && ((a = this.root.editor) && a.plugins.tableselection && a.plugins.tableselection.isSupportedEnvironment(a) && f(d) ? c.call(this,
                        d) : g ? this.fake(b) : b && 2 > d.length ? this.selectElement(b) : this.selectRanges(d))
                    }
                }, reset: function () { this._.cache = {}; this.isFake = 0; var a = this.root.editor; if (a && a._.fakeSelection) if (this.rev == a._.fakeSelection.rev) { delete a._.fakeSelection; var b = a._.hiddenSelectionContainer; if (b) { var d = a.checkDirty(); a.fire("lockSnapshot"); b.remove(); a.fire("unlockSnapshot"); !d && a.resetDirty() } delete a._.hiddenSelectionContainer } else CKEDITOR.warn("selection-fake-reset"); this.rev = x++ }, selectElement: function (a) {
                    var b = new CKEDITOR.dom.range(this.root);
                    b.setStartBefore(a); b.setEndAfter(a); this.selectRanges([b])
                }, selectRanges: function (a) {
                    var b = this.root.editor, d = b && b._.hiddenSelectionContainer; this.reset(); if (d) for (var d = this.root, e, h = 0; h < a.length; ++h) e = a[h], e.endContainer.equals(d) && (e.endOffset = Math.min(e.endOffset, d.getChildCount())); if (a.length) if (this.isLocked) { var l = CKEDITOR.document.getActive(); this.unlock(); this.selectRanges(a); this.lock(); l && !l.equals(this.root) && l.focus() } else {
                        var m; a: {
                            var C, r; if (1 == a.length && !(r = a[0]).collapsed && (m = r.getEnclosedNode()) &&
                            m.type == CKEDITOR.NODE_ELEMENT && (r = r.clone(), r.shrink(CKEDITOR.SHRINK_ELEMENT, !0), (C = r.getEnclosedNode()) && C.type == CKEDITOR.NODE_ELEMENT && (m = C), "false" == m.getAttribute("contenteditable"))) break a; m = void 0
                        } if (m) this.fake(m); else if (b && b.plugins.tableselection && b.plugins.tableselection.isSupportedEnvironment(b) && f(a) && !v && !a[0]._getTableElement({ table: 1 }).hasAttribute("data-cke-tableselection-ignored")) c.call(this, a); else {
                            if (u) {
                                C = CKEDITOR.dom.walker.whitespaces(!0); m = /\ufeff|\u00a0/; r = {
                                    table: 1, tbody: 1,
                                    tr: 1
                                }; 1 < a.length && (b = a[a.length - 1], a[0].setEnd(b.endContainer, b.endOffset)); b = a[0]; a = b.collapsed; var t, x, p; if ((d = b.getEnclosedNode()) && d.type == CKEDITOR.NODE_ELEMENT && d.getName() in G && (!d.is("a") || !d.getText())) try { p = d.$.createControlRange(); p.addElement(d.$); p.select(); return } catch (z) { } if (b.startContainer.type == CKEDITOR.NODE_ELEMENT && b.startContainer.getName() in r || b.endContainer.type == CKEDITOR.NODE_ELEMENT && b.endContainer.getName() in r) b.shrink(CKEDITOR.NODE_ELEMENT, !0), a = b.collapsed; p = b.createBookmark();
                                r = p.startNode; a || (l = p.endNode); p = b.document.$.body.createTextRange(); p.moveToElementText(r.$); p.moveStart("character", 1); l ? (m = b.document.$.body.createTextRange(), m.moveToElementText(l.$), p.setEndPoint("EndToEnd", m), p.moveEnd("character", -1)) : (t = r.getNext(C), x = r.hasAscendant("pre"), t = !(t && t.getText && t.getText().match(m)) && (x || !r.hasPrevious() || r.getPrevious().is && r.getPrevious().is("br")), x = b.document.createElement("span"), x.setHtml("\x26#65279;"), x.insertBefore(r), t && b.document.createText("﻿").insertBefore(r));
                                b.setStartBefore(r); r.remove(); a ? (t ? (p.moveStart("character", -1), p.select(), b.document.$.selection.clear()) : p.select(), b.moveToPosition(x, CKEDITOR.POSITION_BEFORE_START), x.remove()) : (b.setEndBefore(l), l.remove(), p.select())
                            } else {
                                l = this.getNative(); if (!l) return; this.removeAllRanges(); for (p = 0; p < a.length; p++) {
                                    if (p < a.length - 1 && (t = a[p], x = a[p + 1], m = t.clone(), m.setStart(t.endContainer, t.endOffset), m.setEnd(x.startContainer, x.startOffset), !m.collapsed && (m.shrink(CKEDITOR.NODE_ELEMENT, !0), b = m.getCommonAncestor(),
                                    m = m.getEnclosedNode(), b.isReadOnly() || m && m.isReadOnly()))) { x.setStart(t.startContainer, t.startOffset); a.splice(p--, 1); continue } b = a[p]; x = this.document.$.createRange(); b.collapsed && CKEDITOR.env.webkit && k(b) && (m = g(this.root), b.insertNode(m), (t = m.getNext()) && !m.getPrevious() && t.type == CKEDITOR.NODE_ELEMENT && "br" == t.getName() ? (n(this.root), b.moveToPosition(t, CKEDITOR.POSITION_BEFORE_START)) : b.moveToPosition(m, CKEDITOR.POSITION_AFTER_END)); x.setStart(b.startContainer.$, b.startOffset); try {
                                        x.setEnd(b.endContainer.$,
                                        b.endOffset)
                                    } catch (w) { if (0 <= w.toString().indexOf("NS_ERROR_ILLEGAL_VALUE")) b.collapse(1), x.setEnd(b.endContainer.$, b.endOffset); else throw w; } l.addRange(x)
                                }
                            } this.reset(); this.root.fire("selectionchange")
                        }
                    }
                }, fake: function (a, b) {
                    var d = this.root.editor; void 0 === b && a.hasAttribute("aria-label") && (b = a.getAttribute("aria-label")); this.reset(); w(d, b); var c = this._.cache, g = new CKEDITOR.dom.range(this.root); g.setStartBefore(a); g.setEndAfter(a); c.ranges = new CKEDITOR.dom.rangeList(g); c.selectedElement = c.startElement =
                    a; c.type = CKEDITOR.SELECTION_ELEMENT; c.selectedText = c.nativeSel = null; this.isFake = 1; this.rev = x++; d._.fakeSelection = this; this.root.fire("selectionchange")
                }, isHidden: function () { var a = this.getCommonAncestor(); a && a.type == CKEDITOR.NODE_TEXT && (a = a.getParent()); return !(!a || !a.data("cke-hidden-sel")) }, isInTable: function (a) { return f(this.getRanges(), a) }, isCollapsed: function () { var a = this.getRanges(); return 1 === a.length && a[0].collapsed }, createBookmarks: function (a) {
                    a = this.getRanges().createBookmarks(a); this.isFake &&
                    (a.isFake = 1); return a
                }, createBookmarks2: function (a) { a = this.getRanges().createBookmarks2(a); this.isFake && (a.isFake = 1); return a }, selectBookmarks: function (a) { for (var b = [], d, c = 0; c < a.length; c++) { var g = new CKEDITOR.dom.range(this.root); g.moveToBookmark(a[c]); b.push(g) } a.isFake && (d = f(b) ? b[0]._getTableElement() : b[0].getEnclosedNode(), d && d.type == CKEDITOR.NODE_ELEMENT || (CKEDITOR.warn("selection-not-fake"), a.isFake = 0)); a.isFake && !f(b) ? this.fake(d) : this.selectRanges(b); return this }, getCommonAncestor: function () {
                    var a =
                    this.getRanges(); return a.length ? a[0].startContainer.getCommonAncestor(a[a.length - 1].endContainer) : null
                }, scrollIntoView: function () { this.type != CKEDITOR.SELECTION_NONE && this.getRanges()[0].scrollIntoView() }, removeAllRanges: function () { if (this.getType() != CKEDITOR.SELECTION_NONE) { var a = this.getNative(); try { a && a[u ? "empty" : "removeAllRanges"]() } catch (b) { } this.reset() } }
            }
        })(); "use strict"; CKEDITOR.STYLE_BLOCK = 1; CKEDITOR.STYLE_INLINE = 2; CKEDITOR.STYLE_OBJECT = 3; (function () {
            function a(a, b) {
                for (var d, c; (a = a.getParent()) &&
                !a.equals(b) ;) if (a.getAttribute("data-nostyle")) d = a; else if (!c) { var g = a.getAttribute("contentEditable"); "false" == g ? d = a : "true" == g && (c = 1) } return d
            } function f(a, b, d, c) { return (a.getPosition(b) | c) == c && (!d.childRule || d.childRule(a)) } function e(b) {
                var d = b.document; if (b.collapsed) d = x(this, d), b.insertNode(d), b.moveToPosition(d, CKEDITOR.POSITION_BEFORE_END); else {
                    var g = this.element, k = this._.definition, h, n = k.ignoreReadonly, l = n || k.includeReadonly; null == l && (l = b.root.getCustomData("cke_includeReadonly")); var m =
                    CKEDITOR.dtd[g]; m || (h = !0, m = CKEDITOR.dtd.span); b.enlarge(CKEDITOR.ENLARGE_INLINE, 1); b.trim(); var r = b.createBookmark(), t = r.startNode, u = r.endNode, p = t, v; if (!n) { var z = b.getCommonAncestor(), n = a(t, z), z = a(u, z); n && (p = n.getNextSourceNode(!0)); z && (u = z) } for (p.getPosition(u) == CKEDITOR.POSITION_FOLLOWING && (p = 0) ; p;) {
                        n = !1; if (p.equals(u)) p = null, n = !0; else {
                            var w = p.type == CKEDITOR.NODE_ELEMENT ? p.getName() : null, z = w && "false" == p.getAttribute("contentEditable"), y = w && p.getAttribute("data-nostyle"); if (w && p.data("cke-bookmark") ||
                            p.type === CKEDITOR.NODE_COMMENT) { p = p.getNextSourceNode(!0); continue } if (z && l && CKEDITOR.dtd.$block[w]) for (var B = p, A = c(B), G = void 0, N = A.length, ca = 0, B = N && new CKEDITOR.dom.range(B.getDocument()) ; ca < N; ++ca) { var G = A[ca], ea = CKEDITOR.filter.instances[G.data("cke-filter")]; if (ea ? ea.check(this) : 1) B.selectNodeContents(G), e.call(this, B) } A = w ? !m[w] || y ? 0 : z && !l ? 0 : f(p, u, k, M) : 1; if (A) if (G = p.getParent(), A = k, N = g, ca = h, !G || !(G.getDtd() || CKEDITOR.dtd.span)[N] && !ca || A.parentRule && !A.parentRule(G)) n = !0; else {
                                if (v || w && CKEDITOR.dtd.$removeEmpty[w] &&
                                (p.getPosition(u) | M) != M || (v = b.clone(), v.setStartBefore(p)), w = p.type, w == CKEDITOR.NODE_TEXT || z || w == CKEDITOR.NODE_ELEMENT && !p.getChildCount()) { for (var w = p, ga; (n = !w.getNext(H)) && (ga = w.getParent(), m[ga.getName()]) && f(ga, t, k, I) ;) w = ga; v.setEndAfter(w) }
                            } else n = !0; p = p.getNextSourceNode(y || z)
                        } if (n && v && !v.collapsed) {
                            for (var n = x(this, d), z = n.hasAttributes(), y = v.getCommonAncestor(), w = {}, A = {}, G = {}, N = {}, fa, D, E; n && y;) {
                                if (y.getName() == g) {
                                    for (fa in k.attributes) !N[fa] && (E = y.getAttribute(D)) && (n.getAttribute(fa) == E ?
                                    A[fa] = 1 : N[fa] = 1); for (D in k.styles) !G[D] && (E = y.getStyle(D)) && (n.getStyle(D) == E ? w[D] = 1 : G[D] = 1)
                                } y = y.getParent()
                            } for (fa in A) n.removeAttribute(fa); for (D in w) n.removeStyle(D); z && !n.hasAttributes() && (n = null); n ? (v.extractContents().appendTo(n), v.insertNode(n), q.call(this, n), n.mergeSiblings(), CKEDITOR.env.ie || n.$.normalize()) : (n = new CKEDITOR.dom.element("span"), v.extractContents().appendTo(n), v.insertNode(n), q.call(this, n), n.remove(!0)); v = null
                        }
                    } b.moveToBookmark(r); b.shrink(CKEDITOR.SHRINK_TEXT); b.shrink(CKEDITOR.NODE_ELEMENT,
                    !0)
                }
            } function b(a) {
                function b() { for (var a = new CKEDITOR.dom.elementPath(c.getParent()), d = new CKEDITOR.dom.elementPath(l.getParent()), g = null, e = null, f = 0; f < a.elements.length; f++) { var k = a.elements[f]; if (k == a.block || k == a.blockLimit) break; m.checkElementRemovable(k, !0) && (g = k) } for (f = 0; f < d.elements.length; f++) { k = d.elements[f]; if (k == d.block || k == d.blockLimit) break; m.checkElementRemovable(k, !0) && (e = k) } e && l.breakParent(e); g && c.breakParent(g) } a.enlarge(CKEDITOR.ENLARGE_INLINE, 1); var d = a.createBookmark(), c = d.startNode,
                g = this._.definition.alwaysRemoveElement; if (a.collapsed) {
                    for (var e = new CKEDITOR.dom.elementPath(c.getParent(), a.root), f, k = 0, h; k < e.elements.length && (h = e.elements[k]) && h != e.block && h != e.blockLimit; k++) if (this.checkElementRemovable(h)) { var n; !g && a.collapsed && (a.checkBoundaryOfElement(h, CKEDITOR.END) || (n = a.checkBoundaryOfElement(h, CKEDITOR.START))) ? (f = h, f.match = n ? "start" : "end") : (h.mergeSiblings(), h.is(this.element) ? w.call(this, h) : p(h, v(this)[h.getName()])) } if (f) {
                        g = c; for (k = 0; ; k++) {
                            h = e.elements[k]; if (h.equals(f)) break;
                            else if (h.match) continue; else h = h.clone(); h.append(g); g = h
                        } g["start" == f.match ? "insertBefore" : "insertAfter"](f)
                    }
                } else { var l = d.endNode, m = this; b(); for (e = c; !e.equals(l) ;) f = e.getNextSourceNode(), e.type == CKEDITOR.NODE_ELEMENT && this.checkElementRemovable(e) && (e.getName() == this.element ? w.call(this, e) : p(e, v(this)[e.getName()]), f.type == CKEDITOR.NODE_ELEMENT && f.contains(c) && (b(), f = c.getNext())), e = f } a.moveToBookmark(d); a.shrink(CKEDITOR.NODE_ELEMENT, !0)
            } function c(a) {
                var b = []; a.forEach(function (a) {
                    if ("true" ==
                    a.getAttribute("contenteditable")) return b.push(a), !1
                }, CKEDITOR.NODE_ELEMENT, !0); return b
            } function m(a) { var b = a.getEnclosedNode() || a.getCommonAncestor(!1, !0); (a = (new CKEDITOR.dom.elementPath(b, a.root)).contains(this.element, 1)) && !a.isReadOnly() && t(a, this) } function h(a) {
                var b = a.getCommonAncestor(!0, !0); if (a = (new CKEDITOR.dom.elementPath(b, a.root)).contains(this.element, 1)) {
                    var b = this._.definition, d = b.attributes; if (d) for (var c in d) a.removeAttribute(c, d[c]); if (b.styles) for (var g in b.styles) b.styles.hasOwnProperty(g) &&
                    a.removeStyle(g)
                }
            } function l(a) { var b = a.createBookmark(!0), d = a.createIterator(); d.enforceRealBlocks = !0; this._.enterMode && (d.enlargeBr = this._.enterMode != CKEDITOR.ENTER_BR); for (var c, g = a.document, e; c = d.getNextParagraph() ;) !c.isReadOnly() && (d.activeFilter ? d.activeFilter.check(this) : 1) && (e = x(this, g, c), k(c, e)); a.moveToBookmark(b) } function d(a) {
                var b = a.createBookmark(1), d = a.createIterator(); d.enforceRealBlocks = !0; d.enlargeBr = this._.enterMode != CKEDITOR.ENTER_BR; for (var c, g; c = d.getNextParagraph() ;) this.checkElementRemovable(c) &&
                (c.is("pre") ? ((g = this._.enterMode == CKEDITOR.ENTER_BR ? null : a.document.createElement(this._.enterMode == CKEDITOR.ENTER_P ? "p" : "div")) && c.copyAttributes(g), k(c, g)) : w.call(this, c)); a.moveToBookmark(b)
            } function k(a, b) {
                var d = !b; d && (b = a.getDocument().createElement("div"), a.copyAttributes(b)); var c = b && b.is("pre"), e = a.is("pre"), f = !c && e; if (c && !e) {
                    e = b; (f = a.getBogus()) && f.remove(); f = a.getHtml(); f = n(f, /(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g, ""); f = f.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi, "$1"); f = f.replace(/([ \t\n\r]+|&nbsp;)/g,
                    " "); f = f.replace(/<br\b[^>]*>/gi, "\n"); if (CKEDITOR.env.ie) { var k = a.getDocument().createElement("div"); k.append(e); e.$.outerHTML = "\x3cpre\x3e" + f + "\x3c/pre\x3e"; e.copyAttributes(k.getFirst()); e = k.getFirst().remove() } else e.setHtml(f); b = e
                } else f ? b = r(d ? [a.getHtml()] : g(a), b) : a.moveChildren(b); b.replace(a); if (c) {
                    var d = b, h; (h = d.getPrevious(F)) && h.type == CKEDITOR.NODE_ELEMENT && h.is("pre") && (c = n(h.getHtml(), /\n$/, "") + "\n\n" + n(d.getHtml(), /^\n/, ""), CKEDITOR.env.ie ? d.$.outerHTML = "\x3cpre\x3e" + c + "\x3c/pre\x3e" :
                    d.setHtml(c), h.remove())
                } else d && u(b)
            } function g(a) { var b = []; n(a.getOuterHtml(), /(\S\s*)\n(?:\s|(<span[^>]+data-cke-bookmark.*?\/span>))*\n(?!$)/gi, function (a, b, d) { return b + "\x3c/pre\x3e" + d + "\x3cpre\x3e" }).replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi, function (a, d) { b.push(d) }); return b } function n(a, b, d) { var c = "", g = ""; a = a.replace(/(^<span[^>]+data-cke-bookmark.*?\/span>)|(<span[^>]+data-cke-bookmark.*?\/span>$)/gi, function (a, b, d) { b && (c = b); d && (g = d); return "" }); return c + a.replace(b, d) + g } function r(a, b) {
                var d;
                1 < a.length && (d = new CKEDITOR.dom.documentFragment(b.getDocument())); for (var c = 0; c < a.length; c++) {
                    var g = a[c], g = g.replace(/(\r\n|\r)/g, "\n"), g = n(g, /^[ \t]*\n/, ""), g = n(g, /\n$/, ""), g = n(g, /^[ \t]+|[ \t]+$/g, function (a, b) { return 1 == a.length ? "\x26nbsp;" : b ? " " + CKEDITOR.tools.repeat("\x26nbsp;", a.length - 1) : CKEDITOR.tools.repeat("\x26nbsp;", a.length - 1) + " " }), g = g.replace(/\n/g, "\x3cbr\x3e"), g = g.replace(/[ \t]{2,}/g, function (a) { return CKEDITOR.tools.repeat("\x26nbsp;", a.length - 1) + " " }); if (d) {
                        var e = b.clone(); e.setHtml(g);
                        d.append(e)
                    } else b.setHtml(g)
                } return d || b
            } function w(a, b) {
                var d = this._.definition, c = d.attributes, d = d.styles, g = v(this)[a.getName()], e = CKEDITOR.tools.isEmpty(c) && CKEDITOR.tools.isEmpty(d), f; for (f in c) if ("class" != f && !this._.definition.fullMatch || a.getAttribute(f) == y(f, c[f])) b && "data-" == f.slice(0, 5) || (e = a.hasAttribute(f), a.removeAttribute(f)); for (var k in d) this._.definition.fullMatch && a.getStyle(k) != y(k, d[k], !0) || (e = e || !!a.getStyle(k), a.removeStyle(k)); p(a, g, D[a.getName()]); e && (this._.definition.alwaysRemoveElement ?
                u(a, 1) : !CKEDITOR.dtd.$block[a.getName()] || this._.enterMode == CKEDITOR.ENTER_BR && !a.hasAttributes() ? u(a) : a.renameNode(this._.enterMode == CKEDITOR.ENTER_P ? "p" : "div"))
            } function q(a) { for (var b = v(this), d = a.getElementsByTag(this.element), c, g = d.count() ; 0 <= --g;) c = d.getItem(g), c.isReadOnly() || w.call(this, c, !0); for (var e in b) if (e != this.element) for (d = a.getElementsByTag(e), g = d.count() - 1; 0 <= g; g--) c = d.getItem(g), c.isReadOnly() || p(c, b[e]) } function p(a, b, d) {
                if (b = b && b.attributes) for (var c = 0; c < b.length; c++) {
                    var g = b[c][0],
                    e; if (e = a.getAttribute(g)) { var f = b[c][1]; (null === f || f.test && f.test(e) || "string" == typeof f && e == f) && a.removeAttribute(g) }
                } d || u(a)
            } function u(a, b) {
                if (!a.hasAttributes() || b) if (CKEDITOR.dtd.$block[a.getName()]) { var d = a.getPrevious(F), c = a.getNext(F); !d || d.type != CKEDITOR.NODE_TEXT && d.isBlockBoundary({ br: 1 }) || a.append("br", 1); !c || c.type != CKEDITOR.NODE_TEXT && c.isBlockBoundary({ br: 1 }) || a.append("br"); a.remove(!0) } else d = a.getFirst(), c = a.getLast(), a.remove(!0), d && (d.type == CKEDITOR.NODE_ELEMENT && d.mergeSiblings(),
                c && !d.equals(c) && c.type == CKEDITOR.NODE_ELEMENT && c.mergeSiblings())
            } function x(a, b, d) { var c; c = a.element; "*" == c && (c = "span"); c = new CKEDITOR.dom.element(c, b); d && d.copyAttributes(c); c = t(c, a); b.getCustomData("doc_processing_style") && c.hasAttribute("id") ? c.removeAttribute("id") : b.setCustomData("doc_processing_style", 1); return c } function t(a, b) {
                var d = b._.definition, c = d.attributes, d = CKEDITOR.style.getStyleText(d); if (c) for (var g in c) a.setAttribute(g, c[g]); d && a.setAttribute("style", d); a.getDocument().removeCustomData("doc_processing_style");
                return a
            } function B(a, b) { for (var d in a) a[d] = a[d].replace(J, function (a, d) { return b[d] }) } function v(a) { if (a._.overrides) return a._.overrides; var b = a._.overrides = {}, d = a._.definition.overrides; if (d) { CKEDITOR.tools.isArray(d) || (d = [d]); for (var c = 0; c < d.length; c++) { var g = d[c], e, f; "string" == typeof g ? e = g.toLowerCase() : (e = g.element ? g.element.toLowerCase() : a.element, f = g.attributes); g = b[e] || (b[e] = {}); if (f) { var g = g.attributes = g.attributes || [], k; for (k in f) g.push([k.toLowerCase(), f[k]]) } } } return b } function y(a,
            b, d) { var c = new CKEDITOR.dom.element("span"); c[d ? "setStyle" : "setAttribute"](a, b); return c[d ? "getStyle" : "getAttribute"](a) } function z(a, b) { function d(a, b) { return "font-family" == b.toLowerCase() ? a.replace(/["']/g, "") : a } "string" == typeof a && (a = CKEDITOR.tools.parseCssText(a)); "string" == typeof b && (b = CKEDITOR.tools.parseCssText(b, !0)); for (var c in a) if (!(c in b) || d(b[c], c) != d(a[c], c) && "inherit" != a[c] && "inherit" != b[c]) return !1; return !0 } function A(a, b, d) {
                var c = a.getRanges(); b = b ? this.removeFromRange : this.applyToRange;
                for (var g, e = c.createIterator() ; g = e.getNextRange() ;) b.call(this, g, d); a.selectRanges(c)
            } var D = { address: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, p: 1, pre: 1, section: 1, header: 1, footer: 1, nav: 1, article: 1, aside: 1, figure: 1, dialog: 1, hgroup: 1, time: 1, meter: 1, menu: 1, command: 1, keygen: 1, output: 1, progress: 1, details: 1, datagrid: 1, datalist: 1 }, G = { a: 1, blockquote: 1, embed: 1, hr: 1, img: 1, li: 1, object: 1, ol: 1, table: 1, td: 1, tr: 1, th: 1, ul: 1, dl: 1, dt: 1, dd: 1, form: 1, audio: 1, video: 1 }, E = /\s*(?:;\s*|$)/, J = /#\((.+?)\)/g, H = CKEDITOR.dom.walker.bookmark(0,
            1), F = CKEDITOR.dom.walker.whitespaces(1); CKEDITOR.style = function (a, b) {
                if ("string" == typeof a.type) return new CKEDITOR.style.customHandlers[a.type](a); var d = a.attributes; d && d.style && (a.styles = CKEDITOR.tools.extend({}, a.styles, CKEDITOR.tools.parseCssText(d.style)), delete d.style); b && (a = CKEDITOR.tools.clone(a), B(a.attributes, b), B(a.styles, b)); d = this.element = a.element ? "string" == typeof a.element ? a.element.toLowerCase() : a.element : "*"; this.type = a.type || (D[d] ? CKEDITOR.STYLE_BLOCK : G[d] ? CKEDITOR.STYLE_OBJECT :
                CKEDITOR.STYLE_INLINE); "object" == typeof this.element && (this.type = CKEDITOR.STYLE_OBJECT); this._ = { definition: a }
            }; CKEDITOR.style.prototype = {
                apply: function (a) { if (a instanceof CKEDITOR.dom.document) return A.call(this, a.getSelection()); if (this.checkApplicable(a.elementPath(), a)) { var b = this._.enterMode; b || (this._.enterMode = a.activeEnterMode); A.call(this, a.getSelection(), 0, a); this._.enterMode = b } }, remove: function (a) {
                    if (a instanceof CKEDITOR.dom.document) return A.call(this, a.getSelection(), 1); if (this.checkApplicable(a.elementPath(),
                    a)) { var b = this._.enterMode; b || (this._.enterMode = a.activeEnterMode); A.call(this, a.getSelection(), 1, a); this._.enterMode = b }
                }, applyToRange: function (a) { this.applyToRange = this.type == CKEDITOR.STYLE_INLINE ? e : this.type == CKEDITOR.STYLE_BLOCK ? l : this.type == CKEDITOR.STYLE_OBJECT ? m : null; return this.applyToRange(a) }, removeFromRange: function (a) { this.removeFromRange = this.type == CKEDITOR.STYLE_INLINE ? b : this.type == CKEDITOR.STYLE_BLOCK ? d : this.type == CKEDITOR.STYLE_OBJECT ? h : null; return this.removeFromRange(a) }, applyToObject: function (a) {
                    t(a,
                    this)
                }, checkActive: function (a, b) { switch (this.type) { case CKEDITOR.STYLE_BLOCK: return this.checkElementRemovable(a.block || a.blockLimit, !0, b); case CKEDITOR.STYLE_OBJECT: case CKEDITOR.STYLE_INLINE: for (var d = a.elements, c = 0, g; c < d.length; c++) if (g = d[c], this.type != CKEDITOR.STYLE_INLINE || g != a.block && g != a.blockLimit) { if (this.type == CKEDITOR.STYLE_OBJECT) { var e = g.getName(); if (!("string" == typeof this.element ? e == this.element : e in this.element)) continue } if (this.checkElementRemovable(g, !0, b)) return !0 } } return !1 }, checkApplicable: function (a,
                b, d) { b && b instanceof CKEDITOR.filter && (d = b); if (d && !d.check(this)) return !1; switch (this.type) { case CKEDITOR.STYLE_OBJECT: return !!a.contains(this.element); case CKEDITOR.STYLE_BLOCK: return !!a.blockLimit.getDtd()[this.element] } return !0 }, checkElementMatch: function (a, b) {
                    var d = this._.definition; if (!a || !d.ignoreReadonly && a.isReadOnly()) return !1; var c = a.getName(); if ("string" == typeof this.element ? c == this.element : c in this.element) {
                        if (!b && !a.hasAttributes()) return !0; if (c = d._AC) d = c; else {
                            var c = {}, g = 0, e = d.attributes;
                            if (e) for (var f in e) g++, c[f] = e[f]; if (f = CKEDITOR.style.getStyleText(d)) c.style || g++, c.style = f; c._length = g; d = d._AC = c
                        } if (d._length) { for (var k in d) if ("_length" != k) if (c = a.getAttribute(k) || "", "style" == k ? z(d[k], c) : d[k] == c) { if (!b) return !0 } else if (b) return !1; if (b) return !0 } else return !0
                    } return !1
                }, checkElementRemovable: function (a, b, d) {
                    if (this.checkElementMatch(a, b, d)) return !0; if (b = v(this)[a.getName()]) {
                        var c; if (!(b = b.attributes)) return !0; for (d = 0; d < b.length; d++) if (c = b[d][0], c = a.getAttribute(c)) {
                            var g = b[d][1];
                            if (null === g) return !0; if ("string" == typeof g) { if (c == g) return !0 } else if (g.test(c)) return !0
                        }
                    } return !1
                }, buildPreview: function (a) { var b = this._.definition, d = [], c = b.element; "bdo" == c && (c = "span"); var d = ["\x3c", c], g = b.attributes; if (g) for (var e in g) d.push(" ", e, '\x3d"', g[e], '"'); (g = CKEDITOR.style.getStyleText(b)) && d.push(' style\x3d"', g, '"'); d.push("\x3e", a || b.name, "\x3c/", c, "\x3e"); return d.join("") }, getDefinition: function () { return this._.definition }
            }; CKEDITOR.style.getStyleText = function (a) {
                var b = a._ST; if (b) return b;
                var b = a.styles, d = a.attributes && a.attributes.style || "", c = ""; d.length && (d = d.replace(E, ";")); for (var g in b) { var e = b[g], f = (g + ":" + e).replace(E, ";"); "inherit" == e ? c += f : d += f } d.length && (d = CKEDITOR.tools.normalizeCssText(d, !0)); return a._ST = d + c
            }; CKEDITOR.style.customHandlers = {}; CKEDITOR.style.addCustomHandler = function (a) {
                var b = function (a) { this._ = { definition: a }; this.setup && this.setup(a) }; b.prototype = CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.style.prototype), { assignedTo: CKEDITOR.STYLE_OBJECT },
                a, !0); return this.customHandlers[a.type] = b
            }; var M = CKEDITOR.POSITION_PRECEDING | CKEDITOR.POSITION_IDENTICAL | CKEDITOR.POSITION_IS_CONTAINED, I = CKEDITOR.POSITION_FOLLOWING | CKEDITOR.POSITION_IDENTICAL | CKEDITOR.POSITION_IS_CONTAINED
        })(); CKEDITOR.styleCommand = function (a, f) { this.requiredContent = this.allowedContent = this.style = a; CKEDITOR.tools.extend(this, f, !0) }; CKEDITOR.styleCommand.prototype.exec = function (a) {
            a.focus(); this.state == CKEDITOR.TRISTATE_OFF ? a.applyStyle(this.style) : this.state == CKEDITOR.TRISTATE_ON &&
            a.removeStyle(this.style)
        }; CKEDITOR.stylesSet = new CKEDITOR.resourceManager("", "stylesSet"); CKEDITOR.addStylesSet = CKEDITOR.tools.bind(CKEDITOR.stylesSet.add, CKEDITOR.stylesSet); CKEDITOR.loadStylesSet = function (a, f, e) { CKEDITOR.stylesSet.addExternal(a, f, ""); CKEDITOR.stylesSet.load(a, e) }; CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
            attachStyleStateChange: function (a, f) {
                var e = this._.styleStateChangeCallbacks; e || (e = this._.styleStateChangeCallbacks = [], this.on("selectionChange", function (a) {
                    for (var c = 0; c <
                    e.length; c++) { var f = e[c], h = f.style.checkActive(a.data.path, this) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF; f.fn.call(this, h) }
                })); e.push({ style: a, fn: f })
            }, applyStyle: function (a) { a.apply(this) }, removeStyle: function (a) { a.remove(this) }, getStylesSet: function (a) {
                if (this._.stylesDefinitions) a(this._.stylesDefinitions); else {
                    var f = this, e = f.config.stylesCombo_stylesSet || f.config.stylesSet; if (!1 === e) a(null); else if (e instanceof Array) f._.stylesDefinitions = e, a(e); else {
                        e || (e = "default"); var e = e.split(":"), b = e[0];
                        CKEDITOR.stylesSet.addExternal(b, e[1] ? e.slice(1).join(":") : CKEDITOR.getUrl("styles.js"), ""); CKEDITOR.stylesSet.load(b, function (c) { f._.stylesDefinitions = c[b]; a(f._.stylesDefinitions) })
                    }
                }
            }
        }); (function () {
            if (window.Promise) CKEDITOR.tools.promise = Promise; else {
                var a = CKEDITOR.getUrl("vendor/promise.js"); if ("function" === typeof window.define && window.define.amd && "function" === typeof window.require) return window.require([a], function (a) { CKEDITOR.tools.promise = a }); CKEDITOR.scriptLoader.load(a, function (f) {
                    if (!f) return CKEDITOR.error("no-vendor-lib",
                    { path: a }); if ("undefined" !== typeof window.ES6Promise) return CKEDITOR.tools.promise = ES6Promise
                })
            }
        })(); (function () {
            function a(a, c, m) { a.once("selectionCheck", function (a) { if (!f) { var b = a.data.getRanges()[0]; m.equals(b) ? a.cancel() : c.equals(b) && (e = !0) } }, null, null, -1) } var f = !0, e = !1; CKEDITOR.dom.selection.setupEditorOptimization = function (a) {
                a.on("selectionCheck", function (a) { a.data && !e && a.data.optimizeInElementEnds(); e = !1 }); a.on("contentDom", function () {
                    var c = a.editable(); c && (c.attachListener(c, "keydown", function (a) {
                        this._.shiftPressed =
                        a.data.$.shiftKey
                    }, this), c.attachListener(c, "keyup", function (a) { this._.shiftPressed = a.data.$.shiftKey }, this))
                })
            }; CKEDITOR.dom.selection.prototype.optimizeInElementEnds = function () {
                var b = this.getRanges()[0], c = this.root.editor, e; if (this.root.editor._.shiftPressed || this.isFake || b.isCollapsed || b.startContainer.equals(b.endContainer)) e = !1; else if (0 === b.endOffset) e = !0; else {
                    e = b.startContainer.type === CKEDITOR.NODE_TEXT; var h = b.endContainer.type === CKEDITOR.NODE_TEXT, l = e ? b.startContainer.getLength() : b.startContainer.getChildCount();
                    e = b.startOffset === l || e ^ h
                } e && (e = b.clone(), b.shrink(CKEDITOR.SHRINK_TEXT, !1, { skipBogus: !CKEDITOR.env.webkit }), f = !1, a(c, b, e), b.select(), f = !0)
            }
        })(); CKEDITOR.dom.comment = function (a, f) { "string" == typeof a && (a = (f ? f.$ : document).createComment(a)); CKEDITOR.dom.domObject.call(this, a) }; CKEDITOR.dom.comment.prototype = new CKEDITOR.dom.node; CKEDITOR.tools.extend(CKEDITOR.dom.comment.prototype, { type: CKEDITOR.NODE_COMMENT, getOuterHtml: function () { return "\x3c!--" + this.$.nodeValue + "--\x3e" } }); "use strict"; (function () {
            var a =
            {}, f = {}, e; for (e in CKEDITOR.dtd.$blockLimit) e in CKEDITOR.dtd.$list || (a[e] = 1); for (e in CKEDITOR.dtd.$block) e in CKEDITOR.dtd.$blockLimit || e in CKEDITOR.dtd.$empty || (f[e] = 1); CKEDITOR.dom.elementPath = function (b, c) {
                var e = null, h = null, l = [], d = b, k; c = c || b.getDocument().getBody(); d || (d = c); do if (d.type == CKEDITOR.NODE_ELEMENT) {
                    l.push(d); if (!this.lastElement && (this.lastElement = d, d.is(CKEDITOR.dtd.$object) || "false" == d.getAttribute("contenteditable"))) continue; if (d.equals(c)) break; if (!h && (k = d.getName(), "true" ==
                    d.getAttribute("contenteditable") ? h = d : !e && f[k] && (e = d), a[k])) { if (k = !e && "div" == k) { a: { k = d.getChildren(); for (var g = 0, n = k.count() ; g < n; g++) { var r = k.getItem(g); if (r.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$block[r.getName()]) { k = !0; break a } } k = !1 } k = !k } k ? e = d : h = d }
                } while (d = d.getParent()); h || (h = c); this.block = e; this.blockLimit = h; this.root = c; this.elements = l
            }
        })(); CKEDITOR.dom.elementPath.prototype = {
            compare: function (a) {
                var f = this.elements; a = a && a.elements; if (!a || f.length != a.length) return !1; for (var e = 0; e < f.length; e++) if (!f[e].equals(a[e])) return !1;
                return !0
            }, contains: function (a, f, e) { var b = 0, c; "string" == typeof a && (c = function (b) { return b.getName() == a }); a instanceof CKEDITOR.dom.element ? c = function (b) { return b.equals(a) } : CKEDITOR.tools.isArray(a) ? c = function (b) { return -1 < CKEDITOR.tools.indexOf(a, b.getName()) } : "function" == typeof a ? c = a : "object" == typeof a && (c = function (b) { return b.getName() in a }); var m = this.elements, h = m.length; f && (e ? b += 1 : --h); e && (m = Array.prototype.slice.call(m, 0), m.reverse()); for (; b < h; b++) if (c(m[b])) return m[b]; return null }, isContextFor: function (a) {
                var f;
                return a in CKEDITOR.dtd.$block ? (f = this.contains(CKEDITOR.dtd.$intermediate) || this.root.equals(this.block) && this.block || this.blockLimit, !!f.getDtd()[a]) : !0
            }, direction: function () { return (this.block || this.blockLimit || this.root).getDirection(1) }
        }; CKEDITOR.dom.text = function (a, f) { "string" == typeof a && (a = (f ? f.$ : document).createTextNode(a)); this.$ = a }; CKEDITOR.dom.text.prototype = new CKEDITOR.dom.node; CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype, {
            type: CKEDITOR.NODE_TEXT, getLength: function () { return this.$.nodeValue.length },
            getText: function () { return this.$.nodeValue }, setText: function (a) { this.$.nodeValue = a }, isEmpty: function (a) { var f = this.getText(); a && (f = CKEDITOR.tools.trim(f)); return !f || f === CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE }, split: function (a) { var f = this.$.parentNode, e = f.childNodes.length, b = this.getLength(), c = this.getDocument(), m = new CKEDITOR.dom.text(this.$.splitText(a), c); f.childNodes.length == e && (a >= b ? (m = c.createText(""), m.insertAfter(this)) : (a = c.createText(""), a.insertAfter(m), a.remove())); return m }, substring: function (a,
            f) { return "number" != typeof f ? this.$.nodeValue.substr(a) : this.$.nodeValue.substring(a, f) }
        }); (function () {
            function a(a, b, c) {
                var f = a.serializable, h = b[c ? "endContainer" : "startContainer"], l = c ? "endOffset" : "startOffset", d = f ? b.document.getById(a.startNode) : a.startNode; a = f ? b.document.getById(a.endNode) : a.endNode; h.equals(d.getPrevious()) ? (b.startOffset = b.startOffset - h.getLength() - a.getPrevious().getLength(), h = a.getNext()) : h.equals(a.getPrevious()) && (b.startOffset -= h.getLength(), h = a.getNext()); h.equals(d.getParent()) &&
                b[l]++; h.equals(a.getParent()) && b[l]++; b[c ? "endContainer" : "startContainer"] = h; return b
            } CKEDITOR.dom.rangeList = function (a) { if (a instanceof CKEDITOR.dom.rangeList) return a; a ? a instanceof CKEDITOR.dom.range && (a = [a]) : a = []; return CKEDITOR.tools.extend(a, f) }; var f = {
                createIterator: function () {
                    var a = this, b = CKEDITOR.dom.walker.bookmark(), c = [], f; return {
                        getNextRange: function (h) {
                            f = void 0 === f ? 0 : f + 1; var l = a[f]; if (l && 1 < a.length) {
                                if (!f) for (var d = a.length - 1; 0 <= d; d--) c.unshift(a[d].createBookmark(!0)); if (h) for (var k =
                                0; a[f + k + 1];) { var g = l.document; h = 0; d = g.getById(c[k].endNode); for (g = g.getById(c[k + 1].startNode) ; ;) { d = d.getNextSourceNode(!1); if (g.equals(d)) h = 1; else if (b(d) || d.type == CKEDITOR.NODE_ELEMENT && d.isBlockBoundary()) continue; break } if (!h) break; k++ } for (l.moveToBookmark(c.shift()) ; k--;) d = a[++f], d.moveToBookmark(c.shift()), l.setEnd(d.endContainer, d.endOffset)
                            } return l
                        }
                    }
                }, createBookmarks: function (e) {
                    for (var b = [], c, f = 0; f < this.length; f++) {
                        b.push(c = this[f].createBookmark(e, !0)); for (var h = f + 1; h < this.length; h++) this[h] =
                        a(c, this[h]), this[h] = a(c, this[h], !0)
                    } return b
                }, createBookmarks2: function (a) { for (var b = [], c = 0; c < this.length; c++) b.push(this[c].createBookmark2(a)); return b }, moveToBookmarks: function (a) { for (var b = 0; b < this.length; b++) this[b].moveToBookmark(a[b]) }
            }
        })(); (function () {
            function a() { return CKEDITOR.getUrl(CKEDITOR.skinName.split(",")[1] || "skins/" + CKEDITOR.skinName.split(",")[0] + "/") } function f(b) {
                var d = CKEDITOR.skin["ua_" + b], c = CKEDITOR.env; if (d) for (var d = d.split(",").sort(function (a, b) { return a > b ? -1 : 1 }), e =
                0, f; e < d.length; e++) if (f = d[e], c.ie && (f.replace(/^ie/, "") == c.version || c.quirks && "iequirks" == f) && (f = "ie"), c[f]) { b += "_" + d[e]; break } return CKEDITOR.getUrl(a() + b + ".css")
            } function e(a, b) { m[a] || (CKEDITOR.document.appendStyleSheet(f(a)), m[a] = 1); b && b() } function b(a) { var b = a.getById(h); b || (b = a.getHead().append("style"), b.setAttribute("id", h), b.setAttribute("type", "text/css")); return b } function c(a, b, d) {
                var c, e, f; if (CKEDITOR.env.webkit) for (b = b.split("}").slice(0, -1), e = 0; e < b.length; e++) b[e] = b[e].split("{"); for (var h =
                0; h < a.length; h++) if (CKEDITOR.env.webkit) for (e = 0; e < b.length; e++) { f = b[e][1]; for (c = 0; c < d.length; c++) f = f.replace(d[c][0], d[c][1]); a[h].$.sheet.addRule(b[e][0], f) } else { f = b; for (c = 0; c < d.length; c++) f = f.replace(d[c][0], d[c][1]); CKEDITOR.env.ie && 11 > CKEDITOR.env.version ? a[h].$.styleSheet.cssText += f : a[h].$.innerHTML += f }
            } var m = {}; CKEDITOR.skin = {
                path: a, loadPart: function (b, d) { CKEDITOR.skin.name != CKEDITOR.skinName.split(",")[0] ? CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(a() + "skin.js"), function () { e(b, d) }) : e(b, d) },
                getPath: function (a) { return CKEDITOR.getUrl(f(a)) }, icons: {}, addIcon: function (a, b, d, c) { a = a.toLowerCase(); this.icons[a] || (this.icons[a] = { path: b, offset: d || 0, bgsize: c || "16px" }) }, getIconStyle: function (a, b, d, c, e) { var f; a && (a = a.toLowerCase(), b && (f = this.icons[a + "-rtl"]), f || (f = this.icons[a])); a = d || f && f.path || ""; c = c || f && f.offset; e = e || f && f.bgsize || "16px"; a && (a = a.replace(/'/g, "\\'")); return a && "background-image:url('" + CKEDITOR.getUrl(a) + "');background-position:0 " + c + "px;background-size:" + e + ";" }
            }; CKEDITOR.tools.extend(CKEDITOR.editor.prototype,
            { getUiColor: function () { return this.uiColor }, setUiColor: function (a) { var g = b(CKEDITOR.document); return (this.setUiColor = function (a) { this.uiColor = a; var b = CKEDITOR.skin.chameleon, e = "", f = ""; "function" == typeof b && (e = b(this, "editor"), f = b(this, "panel")); a = [[d, a]]; c([g], e, a); c(l, f, a) }).call(this, a) } }); var h = "cke_ui_color", l = [], d = /\$color/g; CKEDITOR.on("instanceLoaded", function (a) {
                if (!CKEDITOR.env.ie || !CKEDITOR.env.quirks) {
                    var g = a.editor; a = function (a) {
                        a = (a.data[0] || a.data).element.getElementsByTag("iframe").getItem(0).getFrameDocument();
                        if (!a.getById("cke_ui_color")) { var e = b(a); l.push(e); g.on("destroy", function () { l = CKEDITOR.tools.array.filter(l, function (a) { return e !== a }) }); (a = g.getUiColor()) && c([e], CKEDITOR.skin.chameleon(g, "panel"), [[d, a]]) }
                    }; g.on("panelShow", a); g.on("menuShow", a); g.config.uiColor && g.setUiColor(g.config.uiColor)
                }
            })
        })(); (function () {
            if (CKEDITOR.env.webkit) CKEDITOR.env.hc = !1; else {
                var a = CKEDITOR.dom.element.createFromHtml('\x3cdiv style\x3d"width:0;height:0;position:absolute;left:-10000px;border:1px solid;border-color:red blue"\x3e\x3c/div\x3e',
                CKEDITOR.document); a.appendTo(CKEDITOR.document.getHead()); try { var f = a.getComputedStyle("border-top-color"), e = a.getComputedStyle("border-right-color"); CKEDITOR.env.hc = !(!f || f != e) } catch (b) { CKEDITOR.env.hc = !1 } a.remove()
            } CKEDITOR.env.hc && (CKEDITOR.env.cssClass += " cke_hc"); CKEDITOR.document.appendStyleText(".cke{visibility:hidden;}"); CKEDITOR.status = "loaded"; CKEDITOR.fireOnce("loaded"); if (a = CKEDITOR._.pending) for (delete CKEDITOR._.pending, f = 0; f < a.length; f++) CKEDITOR.editor.prototype.constructor.apply(a[f][0],
            a[f][1]), CKEDITOR.add(a[f][0])
        })(); CKEDITOR.skin.name = "moono-lisa"; CKEDITOR.skin.ua_editor = "ie,iequirks,ie8,gecko"; CKEDITOR.skin.ua_dialog = "ie,iequirks,ie8"; CKEDITOR.skin.chameleon = function () {
            var a = function () { return function (a, b) { for (var c = a.match(/[^#]./g), f = 0; 3 > f; f++) { var h = f, l; l = parseInt(c[f], 16); l = ("0" + (0 > b ? 0 | l * (1 + b) : 0 | l + (255 - l) * b).toString(16)).slice(-2); c[h] = l } return "#" + c.join("") } }(), f = {
                editor: new CKEDITOR.template("{id}.cke_chrome [border-color:{defaultBorder};] {id} .cke_top [ background-color:{defaultBackground};border-bottom-color:{defaultBorder};] {id} .cke_bottom [background-color:{defaultBackground};border-top-color:{defaultBorder};] {id} .cke_resizer [border-right-color:{ckeResizer}] {id} .cke_dialog_title [background-color:{defaultBackground};border-bottom-color:{defaultBorder};] {id} .cke_dialog_footer [background-color:{defaultBackground};outline-color:{defaultBorder};] {id} .cke_dialog_tab [background-color:{dialogTab};border-color:{defaultBorder};] {id} .cke_dialog_tab:hover [background-color:{lightBackground};] {id} .cke_dialog_contents [border-top-color:{defaultBorder};] {id} .cke_dialog_tab_selected, {id} .cke_dialog_tab_selected:hover [background:{dialogTabSelected};border-bottom-color:{dialogTabSelectedBorder};] {id} .cke_dialog_body [background:{dialogBody};border-color:{defaultBorder};] {id} a.cke_button_off:hover,{id} a.cke_button_off:focus,{id} a.cke_button_off:active [background-color:{darkBackground};border-color:{toolbarElementsBorder};] {id} .cke_button_on [background-color:{ckeButtonOn};border-color:{toolbarElementsBorder};] {id} .cke_toolbar_separator,{id} .cke_toolgroup a.cke_button:last-child:after,{id} .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after [background-color: {toolbarElementsBorder};border-color: {toolbarElementsBorder};] {id} a.cke_combo_button:hover,{id} a.cke_combo_button:focus,{id} .cke_combo_on a.cke_combo_button [border-color:{toolbarElementsBorder};background-color:{darkBackground};] {id} .cke_combo:after [border-color:{toolbarElementsBorder};] {id} .cke_path_item [color:{elementsPathColor};] {id} a.cke_path_item:hover,{id} a.cke_path_item:focus,{id} a.cke_path_item:active [background-color:{darkBackground};] {id}.cke_panel [border-color:{defaultBorder};] "),
                panel: new CKEDITOR.template(".cke_panel_grouptitle [background-color:{lightBackground};border-color:{defaultBorder};] .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menubutton:hover,.cke_menubutton:focus,.cke_menubutton:active [background-color:{menubuttonHover};] .cke_menubutton:hover .cke_menubutton_icon, .cke_menubutton:focus .cke_menubutton_icon, .cke_menubutton:active .cke_menubutton_icon [background-color:{menubuttonIconHover};] .cke_menubutton_disabled:hover .cke_menubutton_icon,.cke_menubutton_disabled:focus .cke_menubutton_icon,.cke_menubutton_disabled:active .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menuseparator [background-color:{menubuttonIcon};] a:hover.cke_colorbox, a:active.cke_colorbox [border-color:{defaultBorder};] a:hover.cke_colorauto, a:hover.cke_colormore, a:active.cke_colorauto, a:active.cke_colormore [background-color:{ckeColorauto};border-color:{defaultBorder};] ")
            };
            return function (e, b) { var c = a(e.uiColor, .4), c = { id: "." + e.id, defaultBorder: a(c, -.2), toolbarElementsBorder: a(c, -.25), defaultBackground: c, lightBackground: a(c, .8), darkBackground: a(c, -.15), ckeButtonOn: a(c, .4), ckeResizer: a(c, -.4), ckeColorauto: a(c, .8), dialogBody: a(c, .7), dialogTab: a(c, .65), dialogTabSelected: "#FFF", dialogTabSelectedBorder: "#FFF", elementsPathColor: a(c, -.6), menubuttonHover: a(c, .1), menubuttonIcon: a(c, .5), menubuttonIconHover: a(c, .3) }; return f[b].output(c).replace(/\[/g, "{").replace(/\]/g, "}") }
        }();
        CKEDITOR.plugins.add("dialogui", {
            onLoad: function () {
                var a = function (a) { this._ || (this._ = {}); this._["default"] = this._.initValue = a["default"] || ""; this._.required = a.required || !1; for (var b = [this._], c = 1; c < arguments.length; c++) b.push(arguments[c]); b.push(!0); CKEDITOR.tools.extend.apply(CKEDITOR.tools, b); return this._ }, f = { build: function (a, b, c) { return new CKEDITOR.ui.dialog.textInput(a, b, c) } }, e = { build: function (a, b, c) { return new CKEDITOR.ui.dialog[b.type](a, b, c) } }, b = {
                    isChanged: function () {
                        return this.getValue() !=
                        this.getInitValue()
                    }, reset: function (a) { this.setValue(this.getInitValue(), a) }, setInitValue: function () { this._.initValue = this.getValue() }, resetInitValue: function () { this._.initValue = this._["default"] }, getInitValue: function () { return this._.initValue }
                }, c = CKEDITOR.tools.extend({}, CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors, {
                    onChange: function (a, b) {
                        this._.domOnChangeRegistered || (a.on("load", function () {
                            this.getInputElement().on("change", function () { a.parts.dialog.isVisible() && this.fire("change", { value: this.getValue() }) },
                            this)
                        }, this), this._.domOnChangeRegistered = !0); this.on("change", b)
                    }
                }, !0), m = /^on([A-Z]\w+)/, h = function (a) { for (var b in a) (m.test(b) || "title" == b || "type" == b) && delete a[b]; return a }, l = function (a) { a = a.data.getKeystroke(); a == CKEDITOR.SHIFT + CKEDITOR.ALT + 36 ? this.setDirectionMarker("ltr") : a == CKEDITOR.SHIFT + CKEDITOR.ALT + 35 && this.setDirectionMarker("rtl") }; CKEDITOR.tools.extend(CKEDITOR.ui.dialog, {
                    labeledElement: function (b, c, g, e) {
                        if (!(4 > arguments.length)) {
                            var f = a.call(this, c); f.labelId = CKEDITOR.tools.getNextId() +
                            "_label"; this._.children = []; var h = { role: c.role || "presentation" }; c.includeLabel && (h["aria-labelledby"] = f.labelId); CKEDITOR.ui.dialog.uiElement.call(this, b, c, g, "div", null, h, function () {
                                var a = [], g = c.required ? " cke_required" : ""; "horizontal" != c.labelLayout ? a.push('\x3clabel class\x3d"cke_dialog_ui_labeled_label' + g + '" ', ' id\x3d"' + f.labelId + '"', f.inputId ? ' for\x3d"' + f.inputId + '"' : "", (c.labelStyle ? ' style\x3d"' + c.labelStyle + '"' : "") + "\x3e", c.label, "\x3c/label\x3e", '\x3cdiv class\x3d"cke_dialog_ui_labeled_content"',
                                c.controlStyle ? ' style\x3d"' + c.controlStyle + '"' : "", ' role\x3d"presentation"\x3e', e.call(this, b, c), "\x3c/div\x3e") : (g = {
                                    type: "hbox", widths: c.widths, padding: 0, children: [{ type: "html", html: '\x3clabel class\x3d"cke_dialog_ui_labeled_label' + g + '" id\x3d"' + f.labelId + '" for\x3d"' + f.inputId + '"' + (c.labelStyle ? ' style\x3d"' + c.labelStyle + '"' : "") + "\x3e" + CKEDITOR.tools.htmlEncode(c.label) + "\x3c/label\x3e" }, {
                                        type: "html", html: '\x3cspan class\x3d"cke_dialog_ui_labeled_content"' + (c.controlStyle ? ' style\x3d"' + c.controlStyle +
                                        '"' : "") + "\x3e" + e.call(this, b, c) + "\x3c/span\x3e"
                                    }]
                                }, CKEDITOR.dialog._.uiElementBuilders.hbox.build(b, g, a)); return a.join("")
                            })
                        }
                    }, textInput: function (b, c, g) {
                        if (!(3 > arguments.length)) {
                            a.call(this, c); var e = this._.inputId = CKEDITOR.tools.getNextId() + "_textInput", f = { "class": "cke_dialog_ui_input_" + c.type, id: e, type: c.type }; c.validate && (this.validate = c.validate); c.maxLength && (f.maxlength = c.maxLength); c.size && (f.size = c.size); c.inputStyle && (f.style = c.inputStyle); var h = this, m = !1; b.on("load", function () {
                                h.getInputElement().on("keydown",
                                function (a) { 13 == a.data.getKeystroke() && (m = !0) }); h.getInputElement().on("keyup", function (a) { 13 == a.data.getKeystroke() && m && (b.getButton("ok") && setTimeout(function () { b.getButton("ok").click() }, 0), m = !1); h.bidi && l.call(h, a) }, null, null, 1E3)
                            }); CKEDITOR.ui.dialog.labeledElement.call(this, b, c, g, function () {
                                var a = ['\x3cdiv class\x3d"cke_dialog_ui_input_', c.type, '" role\x3d"presentation"']; c.width && a.push('style\x3d"width:' + c.width + '" '); a.push("\x3e\x3cinput "); f["aria-labelledby"] = this._.labelId; this._.required &&
                                (f["aria-required"] = this._.required); for (var b in f) a.push(b + '\x3d"' + f[b] + '" '); a.push(" /\x3e\x3c/div\x3e"); return a.join("")
                            })
                        }
                    }, textarea: function (b, c, g) {
                        if (!(3 > arguments.length)) {
                            a.call(this, c); var e = this, f = this._.inputId = CKEDITOR.tools.getNextId() + "_textarea", h = {}; c.validate && (this.validate = c.validate); h.rows = c.rows || 5; h.cols = c.cols || 20; h["class"] = "cke_dialog_ui_input_textarea " + (c["class"] || ""); "undefined" != typeof c.inputStyle && (h.style = c.inputStyle); c.dir && (h.dir = c.dir); if (e.bidi) b.on("load",
                            function () { e.getInputElement().on("keyup", l) }, e); CKEDITOR.ui.dialog.labeledElement.call(this, b, c, g, function () { h["aria-labelledby"] = this._.labelId; this._.required && (h["aria-required"] = this._.required); var a = ['\x3cdiv class\x3d"cke_dialog_ui_input_textarea" role\x3d"presentation"\x3e\x3ctextarea id\x3d"', f, '" '], b; for (b in h) a.push(b + '\x3d"' + CKEDITOR.tools.htmlEncode(h[b]) + '" '); a.push("\x3e", CKEDITOR.tools.htmlEncode(e._["default"]), "\x3c/textarea\x3e\x3c/div\x3e"); return a.join("") })
                        }
                    }, checkbox: function (b,
                    c, g) {
                        if (!(3 > arguments.length)) {
                            var e = a.call(this, c, { "default": !!c["default"] }); c.validate && (this.validate = c.validate); CKEDITOR.ui.dialog.uiElement.call(this, b, c, g, "span", null, null, function () {
                                var a = CKEDITOR.tools.extend({}, c, { id: c.id ? c.id + "_checkbox" : CKEDITOR.tools.getNextId() + "_checkbox" }, !0), g = [], f = CKEDITOR.tools.getNextId() + "_label", l = { "class": "cke_dialog_ui_checkbox_input", type: "checkbox", "aria-labelledby": f }; h(a); c["default"] && (l.checked = "checked"); "undefined" != typeof a.inputStyle && (a.style = a.inputStyle);
                                e.checkbox = new CKEDITOR.ui.dialog.uiElement(b, a, g, "input", null, l); g.push(' \x3clabel id\x3d"', f, '" for\x3d"', l.id, '"' + (c.labelStyle ? ' style\x3d"' + c.labelStyle + '"' : "") + "\x3e", CKEDITOR.tools.htmlEncode(c.label), "\x3c/label\x3e"); return g.join("")
                            })
                        }
                    }, radio: function (b, c, g) {
                        if (!(3 > arguments.length)) {
                            a.call(this, c); this._["default"] || (this._["default"] = this._.initValue = c.items[0][1]); c.validate && (this.validate = c.validate); var e = [], f = this; c.role = "radiogroup"; c.includeLabel = !0; CKEDITOR.ui.dialog.labeledElement.call(this,
                            b, c, g, function () {
                                for (var a = [], g = [], l = (c.id ? c.id : CKEDITOR.tools.getNextId()) + "_radio", m = 0; m < c.items.length; m++) {
                                    var x = c.items[m], t = void 0 !== x[2] ? x[2] : x[0], B = void 0 !== x[1] ? x[1] : x[0], v = CKEDITOR.tools.getNextId() + "_radio_input", y = v + "_label", v = CKEDITOR.tools.extend({}, c, { id: v, title: null, type: null }, !0), t = CKEDITOR.tools.extend({}, v, { title: t }, !0), z = { type: "radio", "class": "cke_dialog_ui_radio_input", name: l, value: B, "aria-labelledby": y }, A = []; f._["default"] == B && (z.checked = "checked"); h(v); h(t); "undefined" != typeof v.inputStyle &&
                                    (v.style = v.inputStyle); v.keyboardFocusable = !0; e.push(new CKEDITOR.ui.dialog.uiElement(b, v, A, "input", null, z)); A.push(" "); new CKEDITOR.ui.dialog.uiElement(b, t, A, "label", null, { id: y, "for": z.id }, x[0]); a.push(A.join(""))
                                } new CKEDITOR.ui.dialog.hbox(b, e, a, g); return g.join("")
                            }); this._.children = e
                        }
                    }, button: function (b, c, g) {
                        if (arguments.length) {
                            "function" == typeof c && (c = c(b.getParentEditor())); a.call(this, c, { disabled: c.disabled || !1 }); CKEDITOR.event.implementOn(this); var e = this; b.on("load", function () {
                                var a = this.getElement();
                                (function () { a.on("click", function (a) { e.click(); a.data.preventDefault() }); a.on("keydown", function (a) { a.data.getKeystroke() in { 32: 1 } && (e.click(), a.data.preventDefault()) }) })(); a.unselectable()
                            }, this); var f = CKEDITOR.tools.extend({}, c); delete f.style; var h = CKEDITOR.tools.getNextId() + "_label"; CKEDITOR.ui.dialog.uiElement.call(this, b, f, g, "a", null, { style: c.style, href: "javascript:void(0)", title: c.label, hidefocus: "true", "class": c["class"], role: "button", "aria-labelledby": h }, '\x3cspan id\x3d"' + h + '" class\x3d"cke_dialog_ui_button"\x3e' +
                            CKEDITOR.tools.htmlEncode(c.label) + "\x3c/span\x3e")
                        }
                    }, select: function (b, c, g) {
                        if (!(3 > arguments.length)) {
                            var e = a.call(this, c); c.validate && (this.validate = c.validate); e.inputId = CKEDITOR.tools.getNextId() + "_select"; CKEDITOR.ui.dialog.labeledElement.call(this, b, c, g, function () {
                                var a = CKEDITOR.tools.extend({}, c, { id: c.id ? c.id + "_select" : CKEDITOR.tools.getNextId() + "_select" }, !0), g = [], f = [], l = { id: e.inputId, "class": "cke_dialog_ui_input_select", "aria-labelledby": this._.labelId }; g.push('\x3cdiv class\x3d"cke_dialog_ui_input_',
                                c.type, '" role\x3d"presentation"'); c.width && g.push('style\x3d"width:' + c.width + '" '); g.push("\x3e"); void 0 !== c.size && (l.size = c.size); void 0 !== c.multiple && (l.multiple = c.multiple); h(a); for (var m = 0, x; m < c.items.length && (x = c.items[m]) ; m++) f.push('\x3coption value\x3d"', CKEDITOR.tools.htmlEncode(void 0 !== x[1] ? x[1] : x[0]).replace(/"/g, "\x26quot;"), '" /\x3e ', CKEDITOR.tools.htmlEncode(x[0])); "undefined" != typeof a.inputStyle && (a.style = a.inputStyle); e.select = new CKEDITOR.ui.dialog.uiElement(b, a, g, "select", null,
                                l, f.join("")); g.push("\x3c/div\x3e"); return g.join("")
                            })
                        }
                    }, file: function (b, c, g) {
                        if (!(3 > arguments.length)) {
                            void 0 === c["default"] && (c["default"] = ""); var e = CKEDITOR.tools.extend(a.call(this, c), { definition: c, buttons: [] }); c.validate && (this.validate = c.validate); b.on("load", function () { CKEDITOR.document.getById(e.frameId).getParent().addClass("cke_dialog_ui_input_file") }); CKEDITOR.ui.dialog.labeledElement.call(this, b, c, g, function () {
                                e.frameId = CKEDITOR.tools.getNextId() + "_fileInput"; var a = ['\x3ciframe frameborder\x3d"0" allowtransparency\x3d"0" class\x3d"cke_dialog_ui_input_file" role\x3d"presentation" id\x3d"',
                                e.frameId, '" title\x3d"', c.label, '" src\x3d"javascript:void(']; a.push(CKEDITOR.env.ie ? "(function(){" + encodeURIComponent("document.open();(" + CKEDITOR.tools.fixDomain + ")();document.close();") + "})()" : "0"); a.push(')"\x3e\x3c/iframe\x3e'); return a.join("")
                            })
                        }
                    }, fileButton: function (b, c, g) {
                        var e = this; if (!(3 > arguments.length)) {
                            a.call(this, c); c.validate && (this.validate = c.validate); var f = CKEDITOR.tools.extend({}, c), h = f.onClick; f.className = (f.className ? f.className + " " : "") + "cke_dialog_ui_button"; f.onClick = function (a) {
                                var g =
                                c["for"]; a = h ? h.call(this, a) : !1; !1 !== a && ("xhr" !== a && b.getContentElement(g[0], g[1]).submit(), this.disable())
                            }; b.on("load", function () { b.getContentElement(c["for"][0], c["for"][1])._.buttons.push(e) }); CKEDITOR.ui.dialog.button.call(this, b, f, g)
                        }
                    }, html: function () {
                        var a = /^\s*<[\w:]+\s+([^>]*)?>/, b = /^(\s*<[\w:]+(?:\s+[^>]*)?)((?:.|\r|\n)+)$/, c = /\/$/; return function (e, f, h) {
                            if (!(3 > arguments.length)) {
                                var l = [], m = f.html; "\x3c" != m.charAt(0) && (m = "\x3cspan\x3e" + m + "\x3c/span\x3e"); var u = f.focus; if (u) {
                                    var x = this.focus;
                                    this.focus = function () { ("function" == typeof u ? u : x).call(this); this.fire("focus") }; f.isFocusable && (this.isFocusable = this.isFocusable); this.keyboardFocusable = !0
                                } CKEDITOR.ui.dialog.uiElement.call(this, e, f, l, "span", null, null, ""); l = l.join("").match(a); m = m.match(b) || ["", "", ""]; c.test(m[1]) && (m[1] = m[1].slice(0, -1), m[2] = "/" + m[2]); h.push([m[1], " ", l[1] || "", m[2]].join(""))
                            }
                        }
                    }(), fieldset: function (a, b, c, e, f) {
                        var h = f.label; this._ = { children: b }; CKEDITOR.ui.dialog.uiElement.call(this, a, f, e, "fieldset", null, null, function () {
                            var a =
                            []; h && a.push("\x3clegend" + (f.labelStyle ? ' style\x3d"' + f.labelStyle + '"' : "") + "\x3e" + h + "\x3c/legend\x3e"); for (var b = 0; b < c.length; b++) a.push(c[b]); return a.join("")
                        })
                    }
                }, !0); CKEDITOR.ui.dialog.html.prototype = new CKEDITOR.ui.dialog.uiElement; CKEDITOR.ui.dialog.labeledElement.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, {
                    setLabel: function (a) {
                        var b = CKEDITOR.document.getById(this._.labelId); 1 > b.getChildCount() ? (new CKEDITOR.dom.text(a, CKEDITOR.document)).appendTo(b) : b.getChild(0).$.nodeValue =
                        a; return this
                    }, getLabel: function () { var a = CKEDITOR.document.getById(this._.labelId); return !a || 1 > a.getChildCount() ? "" : a.getChild(0).getText() }, eventProcessors: c
                }, !0); CKEDITOR.ui.dialog.button.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, {
                    click: function () { return this._.disabled ? !1 : this.fire("click", { dialog: this._.dialog }) }, enable: function () { this._.disabled = !1; var a = this.getElement(); a && a.removeClass("cke_disabled") }, disable: function () { this._.disabled = !0; this.getElement().addClass("cke_disabled") },
                    isVisible: function () { return this.getElement().getFirst().isVisible() }, isEnabled: function () { return !this._.disabled }, eventProcessors: CKEDITOR.tools.extend({}, CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors, { onClick: function (a, b) { this.on("click", function () { b.apply(this, arguments) }) } }, !0), accessKeyUp: function () { this.click() }, accessKeyDown: function () { this.focus() }, keyboardFocusable: !0
                }, !0); CKEDITOR.ui.dialog.textInput.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement, {
                    getInputElement: function () { return CKEDITOR.document.getById(this._.inputId) },
                    focus: function () { var a = this.selectParentTab(); setTimeout(function () { var b = a.getInputElement(); b && b.$.focus() }, 0) }, select: function () { var a = this.selectParentTab(); setTimeout(function () { var b = a.getInputElement(); b && (b.$.focus(), b.$.select()) }, 0) }, accessKeyUp: function () { this.select() }, setValue: function (a) { if (this.bidi) { var b = a && a.charAt(0); (b = "‪" == b ? "ltr" : "‫" == b ? "rtl" : null) && (a = a.slice(1)); this.setDirectionMarker(b) } a || (a = ""); return CKEDITOR.ui.dialog.uiElement.prototype.setValue.apply(this, arguments) },
                    getValue: function () { var a = CKEDITOR.ui.dialog.uiElement.prototype.getValue.call(this); if (this.bidi && a) { var b = this.getDirectionMarker(); b && (a = ("ltr" == b ? "‪" : "‫") + a) } return a }, setDirectionMarker: function (a) { var b = this.getInputElement(); a ? b.setAttributes({ dir: a, "data-cke-dir-marker": a }) : this.getDirectionMarker() && b.removeAttributes(["dir", "data-cke-dir-marker"]) }, getDirectionMarker: function () { return this.getInputElement().data("cke-dir-marker") }, keyboardFocusable: !0
                }, b, !0); CKEDITOR.ui.dialog.textarea.prototype =
                new CKEDITOR.ui.dialog.textInput; CKEDITOR.ui.dialog.select.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement, {
                    getInputElement: function () { return this._.select.getElement() }, add: function (a, b, c) { var e = new CKEDITOR.dom.element("option", this.getDialog().getParentEditor().document), f = this.getInputElement().$; e.$.text = a; e.$.value = void 0 === b || null === b ? a : b; void 0 === c || null === c ? CKEDITOR.env.ie ? f.add(e.$) : f.add(e.$, null) : f.add(e.$, c); return this }, remove: function (a) {
                        this.getInputElement().$.remove(a);
                        return this
                    }, clear: function () { for (var a = this.getInputElement().$; 0 < a.length;) a.remove(0); return this }, keyboardFocusable: !0
                }, b, !0); CKEDITOR.ui.dialog.checkbox.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, {
                    getInputElement: function () { return this._.checkbox.getElement() }, setValue: function (a, b) { this.getInputElement().$.checked = a; !b && this.fire("change", { value: a }) }, getValue: function () { return this.getInputElement().$.checked }, accessKeyUp: function () { this.setValue(!this.getValue()) }, eventProcessors: {
                        onChange: function (a,
                        b) { if (!CKEDITOR.env.ie || 8 < CKEDITOR.env.version) return c.onChange.apply(this, arguments); a.on("load", function () { var a = this._.checkbox.getElement(); a.on("propertychange", function (b) { b = b.data.$; "checked" == b.propertyName && this.fire("change", { value: a.$.checked }) }, this) }, this); this.on("change", b); return null }
                    }, keyboardFocusable: !0
                }, b, !0); CKEDITOR.ui.dialog.radio.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, {
                    setValue: function (a, b) {
                        for (var c = this._.children, e, f = 0; f < c.length && (e = c[f]) ; f++) e.getElement().$.checked =
                        e.getValue() == a; !b && this.fire("change", { value: a })
                    }, getValue: function () { for (var a = this._.children, b = 0; b < a.length; b++) if (a[b].getElement().$.checked) return a[b].getValue(); return null }, accessKeyUp: function () { var a = this._.children, b; for (b = 0; b < a.length; b++) if (a[b].getElement().$.checked) { a[b].getElement().focus(); return } a[0].getElement().focus() }, eventProcessors: {
                        onChange: function (a, b) {
                            if (!CKEDITOR.env.ie || 8 < CKEDITOR.env.version) return c.onChange.apply(this, arguments); a.on("load", function () {
                                for (var a =
                                this._.children, b = this, d = 0; d < a.length; d++) a[d].getElement().on("propertychange", function (a) { a = a.data.$; "checked" == a.propertyName && this.$.checked && b.fire("change", { value: this.getAttribute("value") }) })
                            }, this); this.on("change", b); return null
                        }
                    }
                }, b, !0); CKEDITOR.ui.dialog.file.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement, b, {
                    getInputElement: function () {
                        var a = CKEDITOR.document.getById(this._.frameId).getFrameDocument(); return 0 < a.$.forms.length ? new CKEDITOR.dom.element(a.$.forms[0].elements[0]) :
                        this.getElement()
                    }, submit: function () { this.getInputElement().getParent().$.submit(); return this }, getAction: function () { return this.getInputElement().getParent().$.action }, registerEvents: function (a) { var b = /^on([A-Z]\w+)/, c, e = function (a, b, d, c) { a.on("formLoaded", function () { a.getInputElement().on(d, c, a) }) }, f; for (f in a) if (c = f.match(b)) this.eventProcessors[f] ? this.eventProcessors[f].call(this, this._.dialog, a[f]) : e(this, this._.dialog, c[1].toLowerCase(), a[f]); return this }, reset: function () {
                        function a() {
                            c.$.open();
                            var d = ""; e.size && (d = e.size - (CKEDITOR.env.ie ? 7 : 0)); var t = b.frameId + "_input"; c.$.write(['\x3chtml dir\x3d"' + m + '" lang\x3d"' + u + '"\x3e\x3chead\x3e\x3ctitle\x3e\x3c/title\x3e\x3c/head\x3e\x3cbody style\x3d"margin: 0; overflow: hidden; background: transparent;"\x3e', '\x3cform enctype\x3d"multipart/form-data" method\x3d"POST" dir\x3d"' + m + '" lang\x3d"' + u + '" action\x3d"', CKEDITOR.tools.htmlEncode(e.action), '"\x3e\x3clabel id\x3d"', b.labelId, '" for\x3d"', t, '" style\x3d"display:none"\x3e', CKEDITOR.tools.htmlEncode(e.label),
                            '\x3c/label\x3e\x3cinput style\x3d"width:100%" id\x3d"', t, '" aria-labelledby\x3d"', b.labelId, '" type\x3d"file" name\x3d"', CKEDITOR.tools.htmlEncode(e.id || "cke_upload"), '" size\x3d"', CKEDITOR.tools.htmlEncode(0 < d ? d : ""), '" /\x3e\x3c/form\x3e\x3c/body\x3e\x3c/html\x3e\x3cscript\x3e', CKEDITOR.env.ie ? "(" + CKEDITOR.tools.fixDomain + ")();" : "", "window.parent.CKEDITOR.tools.callFunction(" + h + ");", "window.onbeforeunload \x3d function() {window.parent.CKEDITOR.tools.callFunction(" + l + ")}", "\x3c/script\x3e"].join(""));
                            c.$.close(); for (d = 0; d < f.length; d++) f[d].enable()
                        } var b = this._, c = CKEDITOR.document.getById(b.frameId).getFrameDocument(), e = b.definition, f = b.buttons, h = this.formLoadedNumber, l = this.formUnloadNumber, m = b.dialog._.editor.lang.dir, u = b.dialog._.editor.langCode; h || (h = this.formLoadedNumber = CKEDITOR.tools.addFunction(function () { this.fire("formLoaded") }, this), l = this.formUnloadNumber = CKEDITOR.tools.addFunction(function () { this.getInputElement().clearCustomData() }, this), this.getDialog()._.editor.on("destroy", function () {
                            CKEDITOR.tools.removeFunction(h);
                            CKEDITOR.tools.removeFunction(l)
                        })); CKEDITOR.env.gecko ? setTimeout(a, 500) : a()
                    }, getValue: function () { return this.getInputElement().$.value || "" }, setInitValue: function () { this._.initValue = "" }, eventProcessors: { onChange: function (a, b) { this._.domOnChangeRegistered || (this.on("formLoaded", function () { this.getInputElement().on("change", function () { this.fire("change", { value: this.getValue() }) }, this) }, this), this._.domOnChangeRegistered = !0); this.on("change", b) } }, keyboardFocusable: !0
                }, !0); CKEDITOR.ui.dialog.fileButton.prototype =
                new CKEDITOR.ui.dialog.button; CKEDITOR.ui.dialog.fieldset.prototype = CKEDITOR.tools.clone(CKEDITOR.ui.dialog.hbox.prototype); CKEDITOR.dialog.addUIElement("text", f); CKEDITOR.dialog.addUIElement("password", f); CKEDITOR.dialog.addUIElement("tel", f); CKEDITOR.dialog.addUIElement("textarea", e); CKEDITOR.dialog.addUIElement("checkbox", e); CKEDITOR.dialog.addUIElement("radio", e); CKEDITOR.dialog.addUIElement("button", e); CKEDITOR.dialog.addUIElement("select", e); CKEDITOR.dialog.addUIElement("file", e); CKEDITOR.dialog.addUIElement("fileButton",
                e); CKEDITOR.dialog.addUIElement("html", e); CKEDITOR.dialog.addUIElement("fieldset", { build: function (a, b, c) { for (var e = b.children, f, h = [], l = [], m = 0; m < e.length && (f = e[m]) ; m++) { var u = []; h.push(u); l.push(CKEDITOR.dialog._.uiElementBuilders[f.type].build(a, f, u)) } return new CKEDITOR.ui.dialog[b.type](a, l, h, c, b) } })
            }
        }); CKEDITOR.DIALOG_RESIZE_NONE = 0; CKEDITOR.DIALOG_RESIZE_WIDTH = 1; CKEDITOR.DIALOG_RESIZE_HEIGHT = 2; CKEDITOR.DIALOG_RESIZE_BOTH = 3; CKEDITOR.DIALOG_STATE_IDLE = 1; CKEDITOR.DIALOG_STATE_BUSY = 2; (function () {
            function a(a) {
                a._.tabBarMode =
                !0; a._.tabs[a._.currentTabId][0].focus(); a._.currentFocusIndex = -1
            } function f() { for (var a = this._.tabIdList.length, b = CKEDITOR.tools.indexOf(this._.tabIdList, this._.currentTabId) + a, d = b - 1; d > b - a; d--) if (this._.tabs[this._.tabIdList[d % a]][0].$.offsetHeight) return this._.tabIdList[d % a]; return null } function e() {
                for (var a = this._.tabIdList.length, b = CKEDITOR.tools.indexOf(this._.tabIdList, this._.currentTabId), d = b + 1; d < b + a; d++) if (this._.tabs[this._.tabIdList[d % a]][0].$.offsetHeight) return this._.tabIdList[d % a];
                return null
            } function b(a, b) { for (var d = a.$.getElementsByTagName("input"), c = 0, g = d.length; c < g; c++) { var e = new CKEDITOR.dom.element(d[c]); "text" == e.getAttribute("type").toLowerCase() && (b ? (e.setAttribute("value", e.getCustomData("fake_value") || ""), e.removeCustomData("fake_value")) : (e.setCustomData("fake_value", e.getAttribute("value")), e.setAttribute("value", ""))) } } function c(a, b) {
                var d = this.getInputElement(); d && (a ? d.removeAttribute("aria-invalid") : d.setAttribute("aria-invalid", !0)); a || (this.select ? this.select() :
                this.focus()); b && alert(b); this.fire("validated", { valid: a, msg: b })
            } function m() { var a = this.getInputElement(); a && a.removeAttribute("aria-invalid") } function h(a) {
                var b = CKEDITOR.dom.element.createFromHtml(CKEDITOR.addTemplate("dialog", J).output({ id: CKEDITOR.tools.getNextNumber(), editorId: a.id, langDir: a.lang.dir, langCode: a.langCode, editorDialogClass: "cke_editor_" + a.name.replace(/\./g, "\\.") + "_dialog", closeTitle: a.lang.common.close, hidpi: CKEDITOR.env.hidpi ? "cke_hidpi" : "" })), d = b.getChild([0, 0, 0, 0, 0]), c = d.getChild(0),
                e = d.getChild(1); a.plugins.clipboard && CKEDITOR.plugins.clipboard.preventDefaultDropOnElement(d); !CKEDITOR.env.ie || CKEDITOR.env.quirks || CKEDITOR.env.edge || (a = "javascript:void(function(){" + encodeURIComponent("document.open();(" + CKEDITOR.tools.fixDomain + ")();document.close();") + "}())", CKEDITOR.dom.element.createFromHtml('\x3ciframe frameBorder\x3d"0" class\x3d"cke_iframe_shim" src\x3d"' + a + '" tabIndex\x3d"-1"\x3e\x3c/iframe\x3e').appendTo(d.getParent())); c.unselectable(); e.unselectable(); return {
                    element: b,
                    parts: { dialog: b.getChild(0), title: c, close: e, tabs: d.getChild(2), contents: d.getChild([3, 0, 0, 0]), footer: d.getChild([3, 0, 1, 0]) }
                }
            } function l(a, b, d) { this.element = b; this.focusIndex = d; this.tabIndex = 0; this.isFocusable = function () { return !b.getAttribute("disabled") && b.isVisible() }; this.focus = function () { a._.currentFocusIndex = this.focusIndex; this.element.focus() }; b.on("keydown", function (a) { a.data.getKeystroke() in { 32: 1, 13: 1 } && this.fire("click") }); b.on("focus", function () { this.fire("mouseover") }); b.on("blur", function () { this.fire("mouseout") }) }
            function d(a) { function b() { a.layout() } var d = CKEDITOR.document.getWindow(); d.on("resize", b); a.on("hide", function () { d.removeListener("resize", b) }) } function k(a, b) { this.dialog = a; for (var d = b.contents, c = 0, e; e = d[c]; c++) d[c] = e && new g(a, e); CKEDITOR.tools.extend(this, b) } function g(a, b) { this._ = { dialog: a }; CKEDITOR.tools.extend(this, b) } function n(a) {
                function b(d) {
                    var h = a.getSize(), l = a.parts.dialog.getParent().getClientSize(), n = d.data.$.screenX, m = d.data.$.screenY, t = n - c.x, r = m - c.y; c = { x: n, y: m }; e.x += t; e.y += r; n = e.x +
                    k[3] < f ? -k[3] : e.x - k[1] > l.width - h.width - f ? l.width - h.width + ("rtl" == g.lang.dir ? 0 : k[1]) : e.x; h = e.y + k[0] < f ? -k[0] : e.y - k[2] > l.height - h.height - f ? l.height - h.height + k[2] : e.y; n = Math.floor(n); h = Math.floor(h); a.move(n, h, 1); d.data.preventDefault()
                } function d() { CKEDITOR.document.removeListener("mousemove", b); CKEDITOR.document.removeListener("mouseup", d); if (CKEDITOR.env.ie6Compat) { var a = G.getChild(0).getFrameDocument(); a.removeListener("mousemove", b); a.removeListener("mouseup", d) } } var c = null, e = null, g = a.getParentEditor(),
                f = g.config.dialog_magnetDistance, k = CKEDITOR.skin.margins || [0, 0, 0, 0]; "undefined" == typeof f && (f = 20); a.parts.title.on("mousedown", function (g) { if (!a._.moved) { var f = a._.element; f.getFirst().setStyle("position", "absolute"); f.removeStyle("display"); a._.moved = !0; a.layout() } c = { x: g.data.$.screenX, y: g.data.$.screenY }; CKEDITOR.document.on("mousemove", b); CKEDITOR.document.on("mouseup", d); e = a.getPosition(); CKEDITOR.env.ie6Compat && (f = G.getChild(0).getFrameDocument(), f.on("mousemove", b), f.on("mouseup", d)); g.data.preventDefault() },
                a)
            } function r(a) {
                function b(d) {
                    var m = "rtl" == g.lang.dir, t = n.width, r = n.height, x = t + (d.data.$.screenX - l.x) * (m ? -1 : 1) * (a._.moved ? 1 : 2), u = r + (d.data.$.screenY - l.y) * (a._.moved ? 1 : 2), v = a._.element.getFirst(), v = m && parseInt(v.getComputedStyle("right"), 10), z = a.getPosition(); z.x = z.x || 0; z.y = z.y || 0; z.y + u > h.height && (u = h.height - z.y); (m ? v : z.x) + x > h.width && (x = h.width - (m ? v : z.x)); u = Math.floor(u); x = Math.floor(x); if (e == CKEDITOR.DIALOG_RESIZE_WIDTH || e == CKEDITOR.DIALOG_RESIZE_BOTH) t = Math.max(c.minWidth || 0, x - f); if (e == CKEDITOR.DIALOG_RESIZE_HEIGHT ||
                    e == CKEDITOR.DIALOG_RESIZE_BOTH) r = Math.max(c.minHeight || 0, u - k); a.resize(t, r); a._.moved && w(a, a._.position.x, a._.position.y); a._.moved || a.layout(); d.data.preventDefault()
                } function d() { CKEDITOR.document.removeListener("mouseup", d); CKEDITOR.document.removeListener("mousemove", b); m && (m.remove(), m = null); if (CKEDITOR.env.ie6Compat) { var a = G.getChild(0).getFrameDocument(); a.removeListener("mouseup", d); a.removeListener("mousemove", b) } } var c = a.definition, e = c.resizable; if (e != CKEDITOR.DIALOG_RESIZE_NONE) {
                    var g =
                    a.getParentEditor(), f, k, h, l, n, m, t = CKEDITOR.tools.addFunction(function (c) {
                        function e(a) { return a.isVisible() } n = a.getSize(); var g = a.parts.contents, t = g.$.getElementsByTagName("iframe").length, r = !(CKEDITOR.env.gecko || CKEDITOR.env.ie && CKEDITOR.env.quirks); t && (m = CKEDITOR.dom.element.createFromHtml('\x3cdiv class\x3d"cke_dialog_resize_cover" style\x3d"height: 100%; position: absolute; width: 100%; left:0; top:0;"\x3e\x3c/div\x3e'), g.append(m)); k = n.height - a.parts.contents.getFirst(e).getSize("height", r);
                        f = n.width - a.parts.contents.getFirst(e).getSize("width", 1); l = { x: c.screenX, y: c.screenY }; h = CKEDITOR.document.getWindow().getViewPaneSize(); CKEDITOR.document.on("mousemove", b); CKEDITOR.document.on("mouseup", d); CKEDITOR.env.ie6Compat && (g = G.getChild(0).getFrameDocument(), g.on("mousemove", b), g.on("mouseup", d)); c.preventDefault && c.preventDefault()
                    }); a.on("load", function () {
                        var b = ""; e == CKEDITOR.DIALOG_RESIZE_WIDTH ? b = " cke_resizer_horizontal" : e == CKEDITOR.DIALOG_RESIZE_HEIGHT && (b = " cke_resizer_vertical"); b = CKEDITOR.dom.element.createFromHtml('\x3cdiv class\x3d"cke_resizer' +
                        b + " cke_resizer_" + g.lang.dir + '" title\x3d"' + CKEDITOR.tools.htmlEncode(g.lang.common.resize) + '" onmousedown\x3d"CKEDITOR.tools.callFunction(' + t + ', event )"\x3e' + ("ltr" == g.lang.dir ? "◢" : "◣") + "\x3c/div\x3e"); a.parts.footer.append(b, 1)
                    }); g.on("destroy", function () { CKEDITOR.tools.removeFunction(t) })
                }
            } function w(a, b, d) {
                var c = a.parts.dialog.getParent().getClientSize(), e = a.getSize(), g = a._.viewportRatio, f = Math.max(c.width - e.width, 0), c = Math.max(c.height - e.height, 0); g.width = f ? b / f : g.width; g.height = c ? d / c : g.height;
                a._.viewportRatio = g
            } function q(a) { a.data.preventDefault(1) } function p(a) {
                var b = a.config, d = CKEDITOR.skinName || a.config.skin, c = b.dialog_backgroundCoverColor || ("moono-lisa" == d ? "black" : "white"), d = b.dialog_backgroundCoverOpacity, e = b.baseFloatZIndex, b = CKEDITOR.tools.genKey(c, d, e), g = I[b]; CKEDITOR.document.getBody().addClass("cke_dialog_open"); g ? g.show() : (e = ['\x3cdiv tabIndex\x3d"-1" style\x3d"position: ', CKEDITOR.env.ie6Compat ? "absolute" : "fixed", "; z-index: ", e, "; top: 0px; left: 0px; ", "; width: 100%; height: 100%;",
                CKEDITOR.env.ie6Compat ? "" : "background-color: " + c, '" class\x3d"cke_dialog_background_cover"\x3e'], CKEDITOR.env.ie6Compat && (c = "\x3chtml\x3e\x3cbody style\x3d\\'background-color:" + c + ";\\'\x3e\x3c/body\x3e\x3c/html\x3e", e.push('\x3ciframe hidefocus\x3d"true" frameborder\x3d"0" id\x3d"cke_dialog_background_iframe" src\x3d"javascript:'), e.push("void((function(){" + encodeURIComponent("document.open();(" + CKEDITOR.tools.fixDomain + ")();document.write( '" + c + "' );document.close();") + "})())"), e.push('" style\x3d"position:absolute;left:0;top:0;width:100%;height: 100%;filter: progid:DXImageTransform.Microsoft.Alpha(opacity\x3d0)"\x3e\x3c/iframe\x3e')),
                e.push("\x3c/div\x3e"), g = CKEDITOR.dom.element.createFromHtml(e.join("")), g.setOpacity(void 0 !== d ? d : .5), g.on("keydown", q), g.on("keypress", q), g.on("keyup", q), g.appendTo(CKEDITOR.document.getBody()), I[b] = g); a.focusManager.add(g); G = g; CKEDITOR.env.mac && CKEDITOR.env.webkit || g.focus()
            } function u(a) { CKEDITOR.document.getBody().removeClass("cke_dialog_open"); G && (a.focusManager.remove(G), G.hide()) } function x(a) {
                var b = a.data.$.ctrlKey || a.data.$.metaKey, d = a.data.$.altKey, c = a.data.$.shiftKey, e = String.fromCharCode(a.data.$.keyCode);
                (b = K[(b ? "CTRL+" : "") + (d ? "ALT+" : "") + (c ? "SHIFT+" : "") + e]) && b.length && (b = b[b.length - 1], b.keydown && b.keydown.call(b.uiElement, b.dialog, b.key), a.data.preventDefault())
            } function t(a) { var b = a.data.$.ctrlKey || a.data.$.metaKey, d = a.data.$.altKey, c = a.data.$.shiftKey, e = String.fromCharCode(a.data.$.keyCode); (b = K[(b ? "CTRL+" : "") + (d ? "ALT+" : "") + (c ? "SHIFT+" : "") + e]) && b.length && (b = b[b.length - 1], b.keyup && (b.keyup.call(b.uiElement, b.dialog, b.key), a.data.preventDefault())) } function B(a, b, d, c, e) {
                (K[d] || (K[d] = [])).push({
                    uiElement: a,
                    dialog: b, key: d, keyup: e || a.accessKeyUp, keydown: c || a.accessKeyDown
                })
            } function v(a) { for (var b in K) { for (var d = K[b], c = d.length - 1; 0 <= c; c--) d[c].dialog != a && d[c].uiElement != a || d.splice(c, 1); 0 === d.length && delete K[b] } } function y(a, b) { a._.accessKeyMap[b] && a.selectPage(a._.accessKeyMap[b]) } function z() { } var A = CKEDITOR.tools.cssLength, D, G, E = !CKEDITOR.env.ie || CKEDITOR.env.edge, J = '\x3cdiv class\x3d"cke_reset_all cke_dialog_container {editorId} {editorDialogClass} {hidpi}" dir\x3d"{langDir}" style\x3d"' + (E ? "display:flex" :
            "") + '" lang\x3d"{langCode}" role\x3d"dialog" aria-labelledby\x3d"cke_dialog_title_{id}"\x3e\x3ctable class\x3d"cke_dialog ' + CKEDITOR.env.cssClass + ' cke_{langDir}" style\x3d"' + (E ? "margin:auto" : "position:absolute") + '" role\x3d"presentation"\x3e\x3ctr\x3e\x3ctd role\x3d"presentation"\x3e\x3cdiv class\x3d"cke_dialog_body" role\x3d"presentation"\x3e\x3cdiv id\x3d"cke_dialog_title_{id}" class\x3d"cke_dialog_title" role\x3d"presentation"\x3e\x3c/div\x3e\x3ca id\x3d"cke_dialog_close_button_{id}" class\x3d"cke_dialog_close_button" href\x3d"javascript:void(0)" title\x3d"{closeTitle}" role\x3d"button"\x3e\x3cspan class\x3d"cke_label"\x3eX\x3c/span\x3e\x3c/a\x3e\x3cdiv id\x3d"cke_dialog_tabs_{id}" class\x3d"cke_dialog_tabs" role\x3d"tablist"\x3e\x3c/div\x3e\x3ctable class\x3d"cke_dialog_contents" role\x3d"presentation"\x3e\x3ctr\x3e\x3ctd id\x3d"cke_dialog_contents_{id}" class\x3d"cke_dialog_contents_body" role\x3d"presentation"\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd id\x3d"cke_dialog_footer_{id}" class\x3d"cke_dialog_footer" role\x3d"presentation"\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e';
            CKEDITOR.dialog = function (b, d) {
                function g() { var a = A._.focusList; a.sort(function (a, b) { return a.tabIndex != b.tabIndex ? b.tabIndex - a.tabIndex : a.focusIndex - b.focusIndex }); for (var b = a.length, d = 0; d < b; d++) a[d].focusIndex = d } function l(a) {
                    var b = A._.focusList; a = a || 0; if (!(1 > b.length)) {
                        var d = A._.currentFocusIndex; A._.tabBarMode && 0 > a && (d = 0); try { b[d].getInputElement().$.blur() } catch (c) { } var e = d, g = 1 < A._.pageCount; do {
                            e += a; if (g && !A._.tabBarMode && (e == b.length || -1 == e)) {
                                A._.tabBarMode = !0; A._.tabs[A._.currentTabId][0].focus();
                                A._.currentFocusIndex = -1; return
                            } e = (e + b.length) % b.length; if (e == d) break
                        } while (a && !b[e].isFocusable()); b[e].focus(); "text" == b[e].type && b[e].select()
                    }
                } function t(d) {
                    if (A == CKEDITOR.dialog._.currentTop) {
                        var c = d.data.getKeystroke(), g = "rtl" == b.lang.dir, k = [37, 38, 39, 40]; B = w = 0; if (9 == c || c == CKEDITOR.SHIFT + 9) l(c == CKEDITOR.SHIFT + 9 ? -1 : 1), B = 1; else if (c == CKEDITOR.ALT + 121 && !A._.tabBarMode && 1 < A.getPageCount()) a(A), B = 1; else if (-1 != CKEDITOR.tools.indexOf(k, c) && A._.tabBarMode) c = -1 != CKEDITOR.tools.indexOf([g ? 39 : 37, 38], c) ?
                        f.call(A) : e.call(A), A.selectPage(c), A._.tabs[c][0].focus(), B = 1; else if (13 != c && 32 != c || !A._.tabBarMode) if (13 == c) c = d.data.getTarget(), c.is("a", "button", "select", "textarea") || c.is("input") && "button" == c.$.type || ((c = this.getButton("ok")) && CKEDITOR.tools.setTimeout(c.click, 0, c), B = 1), w = 1; else if (27 == c) (c = this.getButton("cancel")) ? CKEDITOR.tools.setTimeout(c.click, 0, c) : !1 !== this.fire("cancel", { hide: !0 }).hide && this.hide(), w = 1; else return; else this.selectPage(this._.currentTabId), this._.tabBarMode = !1, this._.currentFocusIndex =
                        -1, l(1), B = 1; x(d)
                    }
                } function x(a) { B ? a.data.preventDefault(1) : w && a.data.stopPropagation() } var u = CKEDITOR.dialog._.dialogDefinitions[d], v = CKEDITOR.tools.clone(D), z = b.config.dialog_buttonsOrder || "OS", p = b.lang.dir, y = {}, B, w; ("OS" == z && CKEDITOR.env.mac || "rtl" == z && "ltr" == p || "ltr" == z && "rtl" == p) && v.buttons.reverse(); u = CKEDITOR.tools.extend(u(b), v); u = CKEDITOR.tools.clone(u); u = new k(this, u); v = h(b); this._ = {
                    editor: b, element: v.element, name: d, model: null, contentSize: { width: 0, height: 0 }, size: { width: 0, height: 0 }, contents: {},
                    buttons: {}, accessKeyMap: {}, viewportRatio: { width: .5, height: .5 }, tabs: {}, tabIdList: [], currentTabId: null, currentTabIndex: null, pageCount: 0, lastTab: null, tabBarMode: !1, focusList: [], currentFocusIndex: 0, hasFocus: !1
                }; this.parts = v.parts; CKEDITOR.tools.setTimeout(function () { b.fire("ariaWidget", this.parts.contents) }, 0, this); v = { top: 0, visibility: "hidden" }; CKEDITOR.env.ie6Compat && (v.position = "absolute"); v["rtl" == p ? "right" : "left"] = 0; this.parts.dialog.setStyles(v); CKEDITOR.event.call(this); this.definition = u = CKEDITOR.fire("dialogDefinition",
                { name: d, definition: u, dialog: this }, b).definition; if (!("removeDialogTabs" in b._) && b.config.removeDialogTabs) { v = b.config.removeDialogTabs.split(";"); for (p = 0; p < v.length; p++) if (z = v[p].split(":"), 2 == z.length) { var q = z[0]; y[q] || (y[q] = []); y[q].push(z[1]) } b._.removeDialogTabs = y } if (b._.removeDialogTabs && (y = b._.removeDialogTabs[d])) for (p = 0; p < y.length; p++) u.removeContents(y[p]); if (u.onLoad) this.on("load", u.onLoad); if (u.onShow) this.on("show", u.onShow); if (u.onHide) this.on("hide", u.onHide); if (u.onOk) this.on("ok",
                function (a) { b.fire("saveSnapshot"); setTimeout(function () { b.fire("saveSnapshot") }, 0); !1 === u.onOk.call(this, a) && (a.data.hide = !1) }); this.state = CKEDITOR.DIALOG_STATE_IDLE; if (u.onCancel) this.on("cancel", function (a) { !1 === u.onCancel.call(this, a) && (a.data.hide = !1) }); var A = this, G = function (a) { var b = A._.contents, d = !1, c; for (c in b) for (var e in b[c]) if (d = a.call(this, b[c][e])) return }; this.on("ok", function (a) {
                    G(function (b) {
                        if (b.validate) {
                            var d = b.validate(this), e = "string" == typeof d || !1 === d; e && (a.data.hide = !1, a.stop());
                            c.call(b, !e, "string" == typeof d ? d : void 0); return e
                        }
                    })
                }, this, null, 0); this.on("cancel", function (a) { G(function (d) { if (d.isChanged()) return b.config.dialog_noConfirmCancel || confirm(b.lang.common.confirmCancel) || (a.data.hide = !1), !0 }) }, this, null, 0); this.parts.close.on("click", function (a) { !1 !== this.fire("cancel", { hide: !0 }).hide && this.hide(); a.data.preventDefault() }, this); this.changeFocus = l; var E = this._.element; b.focusManager.add(E, 1); this.on("show", function () {
                    E.on("keydown", t, this); if (CKEDITOR.env.gecko) E.on("keypress",
                    x, this)
                }); this.on("hide", function () { E.removeListener("keydown", t); CKEDITOR.env.gecko && E.removeListener("keypress", x); G(function (a) { m.apply(a) }) }); this.on("iframeAdded", function (a) { (new CKEDITOR.dom.document(a.data.iframe.$.contentWindow.document)).on("keydown", t, this, null, 0) }); this.on("show", function () {
                    g(); var a = 1 < A._.pageCount; b.config.dialog_startupFocusTab && a ? (A._.tabBarMode = !0, A._.tabs[A._.currentTabId][0].focus(), A._.currentFocusIndex = -1) : this._.hasFocus || (this._.currentFocusIndex = a ? -1 : this._.focusList.length -
                    1, u.onFocus ? (a = u.onFocus.call(this)) && a.focus() : l(1))
                }, this, null, 4294967295); if (CKEDITOR.env.ie6Compat) this.on("load", function () { var a = this.getElement(), b = a.getFirst(); b.remove(); b.appendTo(a) }, this); n(this); r(this); (new CKEDITOR.dom.text(u.title, CKEDITOR.document)).appendTo(this.parts.title); for (p = 0; p < u.contents.length; p++) (y = u.contents[p]) && this.addPage(y); this.parts.tabs.on("click", function (b) {
                    var d = b.data.getTarget(); d.hasClass("cke_dialog_tab") && (d = d.$.id, this.selectPage(d.substring(4, d.lastIndexOf("_"))),
                    a(this), b.data.preventDefault())
                }, this); p = []; y = CKEDITOR.dialog._.uiElementBuilders.hbox.build(this, { type: "hbox", className: "cke_dialog_footer_buttons", widths: [], children: u.buttons }, p).getChild(); this.parts.footer.setHtml(p.join("")); for (p = 0; p < y.length; p++) this._.buttons[y[p].id] = y[p]
            }; CKEDITOR.dialog.prototype = {
                destroy: function () { this.hide(); this._.element.remove() }, resize: function (a, b) {
                    if (!this._.contentSize || this._.contentSize.width != a || this._.contentSize.height != b) {
                        CKEDITOR.dialog.fire("resize",
                        { dialog: this, width: a, height: b }, this._.editor); this.fire("resize", { width: a, height: b }, this._.editor); this.parts.contents.setStyles({ width: a + "px", height: b + "px" }); if ("rtl" == this._.editor.lang.dir && this._.position) { var d = this.parts.dialog.getParent().getClientSize().width; this._.position.x = d - this._.contentSize.width - parseInt(this._.element.getFirst().getStyle("right"), 10) } this._.contentSize = { width: a, height: b }
                    }
                }, getSize: function () {
                    var a = this._.element.getFirst(); return {
                        width: a.$.offsetWidth || 0, height: a.$.offsetHeight ||
                        0
                    }
                }, move: function (a, b, d) {
                    var c = this._.element.getFirst(), e = "rtl" == this._.editor.lang.dir; CKEDITOR.env.ie && c.setStyle("zoom", "100%"); var g = this.parts.dialog.getParent().getClientSize(), f = this.getSize(), k = this._.viewportRatio, h = Math.max(g.width - f.width, 0), g = Math.max(g.height - f.height, 0); this._.position && this._.position.x == a && this._.position.y == b ? (a = Math.floor(h * k.width), b = Math.floor(g * k.height)) : w(this, a, b); this._.position = { x: a, y: b }; e && (a = h - a); b = { top: (0 < b ? b : 0) + "px" }; b[e ? "right" : "left"] = (0 < a ? a : 0) + "px";
                    c.setStyles(b); d && (this._.moved = 1)
                }, getPosition: function () { return CKEDITOR.tools.extend({}, this._.position) }, show: function () {
                    var a = this._.element, b = this.definition, c = CKEDITOR.document.getBody(), e = this._.editor.config.baseFloatZIndex; a.getParent() && a.getParent().equals(c) ? a.setStyle("display", E ? "flex" : "block") : a.appendTo(c); this.resize(this._.contentSize && this._.contentSize.width || b.width || b.minWidth, this._.contentSize && this._.contentSize.height || b.height || b.minHeight); this.reset(); null === this._.currentTabId &&
                    this.selectPage(this.definition.contents[0].id); null === CKEDITOR.dialog._.currentZIndex && (CKEDITOR.dialog._.currentZIndex = e); this._.element.getFirst().setStyle("z-index", CKEDITOR.dialog._.currentZIndex += 10); this.getElement().setStyle("z-index", CKEDITOR.dialog._.currentZIndex); null === CKEDITOR.dialog._.currentTop ? (CKEDITOR.dialog._.currentTop = this, this._.parentDialog = null, p(this._.editor)) : (this._.parentDialog = CKEDITOR.dialog._.currentTop, c = this._.parentDialog.getElement().getFirst(), c.$.style.zIndex -=
                    Math.floor(e / 2), this._.parentDialog.getElement().setStyle("z-index", c.$.style.zIndex), CKEDITOR.dialog._.currentTop = this); a.on("keydown", x); a.on("keyup", t); this._.hasFocus = !1; for (var g in b.contents) if (b.contents[g]) {
                        var a = b.contents[g], e = this._.tabs[a.id], c = a.requiredContent, f = 0; if (e) {
                            for (var k in this._.contents[a.id]) {
                                var h = this._.contents[a.id][k]; "hbox" != h.type && "vbox" != h.type && h.getInputElement() && (h.requiredContent && !this._.editor.activeFilter.check(h.requiredContent) ? h.disable() : (h.enable(),
                                f++))
                            } !f || c && !this._.editor.activeFilter.check(c) ? e[0].addClass("cke_dialog_tab_disabled") : e[0].removeClass("cke_dialog_tab_disabled")
                        }
                    } CKEDITOR.tools.setTimeout(function () { this.layout(); d(this); this.parts.dialog.setStyle("visibility", ""); this.fireOnce("load", {}); CKEDITOR.ui.fire("ready", this); this.fire("show", {}); this._.editor.fire("dialogShow", this); this._.parentDialog || this._.editor.focusManager.lock(); this.foreach(function (a) { a.setInitValue && a.setInitValue() }) }, 100, this)
                }, layout: function () {
                    var a =
                    this.parts.dialog; if (this._.moved || !E) { var b = this.getSize(), d = CKEDITOR.document.getWindow().getViewPaneSize(), c; this._.moved && this._.position ? (c = this._.position.x, b = this._.position.y) : (c = (d.width - b.width) / 2, b = (d.height - b.height) / 2); CKEDITOR.env.ie6Compat || (a.setStyle("position", "absolute"), a.removeStyle("margin")); c = Math.floor(c); b = Math.floor(b); this.move(c, b) }
                }, foreach: function (a) { for (var b in this._.contents) for (var d in this._.contents[b]) a.call(this, this._.contents[b][d]); return this }, reset: function () {
                    var a =
                    function (a) { a.reset && a.reset(1) }; return function () { this.foreach(a); return this }
                }(), setupContent: function () { var a = arguments; this.foreach(function (b) { b.setup && b.setup.apply(b, a) }) }, commitContent: function () { var a = arguments; this.foreach(function (b) { CKEDITOR.env.ie && this._.currentFocusIndex == b.focusIndex && b.getInputElement().$.blur(); b.commit && b.commit.apply(b, a) }) }, hide: function () {
                    if (this.parts.dialog.isVisible()) {
                        this.fire("hide", {}); this._.editor.fire("dialogHide", this); this.selectPage(this._.tabIdList[0]);
                        var a = this._.element; a.setStyle("display", "none"); this.parts.dialog.setStyle("visibility", "hidden"); for (v(this) ; CKEDITOR.dialog._.currentTop != this;) CKEDITOR.dialog._.currentTop.hide(); if (this._.parentDialog) { var b = this._.parentDialog.getElement().getFirst(); this._.parentDialog.getElement().removeStyle("z-index"); b.setStyle("z-index", parseInt(b.$.style.zIndex, 10) + Math.floor(this._.editor.config.baseFloatZIndex / 2)) } else u(this._.editor); if (CKEDITOR.dialog._.currentTop = this._.parentDialog) CKEDITOR.dialog._.currentZIndex -=
                        10; else { CKEDITOR.dialog._.currentZIndex = null; a.removeListener("keydown", x); a.removeListener("keyup", t); var d = this._.editor; d.focus(); setTimeout(function () { d.focusManager.unlock(); CKEDITOR.env.iOS && d.window.focus() }, 0) } delete this._.parentDialog; this.foreach(function (a) { a.resetInitValue && a.resetInitValue() }); this.setState(CKEDITOR.DIALOG_STATE_IDLE)
                    }
                }, addPage: function (a) {
                    if (!a.requiredContent || this._.editor.filter.check(a.requiredContent)) {
                        for (var b = [], d = a.label ? ' title\x3d"' + CKEDITOR.tools.htmlEncode(a.label) +
                        '"' : "", c = CKEDITOR.dialog._.uiElementBuilders.vbox.build(this, { type: "vbox", className: "cke_dialog_page_contents", children: a.elements, expand: !!a.expand, padding: a.padding, style: a.style || "width: 100%;" }, b), e = this._.contents[a.id] = {}, g = c.getChild(), f = 0; c = g.shift() ;) c.notAllowed || "hbox" == c.type || "vbox" == c.type || f++, e[c.id] = c, "function" == typeof c.getChild && g.push.apply(g, c.getChild()); f || (a.hidden = !0); b = CKEDITOR.dom.element.createFromHtml(b.join("")); b.setAttribute("role", "tabpanel"); b.setStyle("min-height",
                        "100%"); c = CKEDITOR.env; e = "cke_" + a.id + "_" + CKEDITOR.tools.getNextNumber(); d = CKEDITOR.dom.element.createFromHtml(['\x3ca class\x3d"cke_dialog_tab"', 0 < this._.pageCount ? " cke_last" : "cke_first", d, a.hidden ? ' style\x3d"display:none"' : "", ' id\x3d"', e, '"', c.gecko && !c.hc ? "" : ' href\x3d"javascript:void(0)"', ' tabIndex\x3d"-1" hidefocus\x3d"true" role\x3d"tab"\x3e', a.label, "\x3c/a\x3e"].join("")); b.setAttribute("aria-labelledby", e); this._.tabs[a.id] = [d, b]; this._.tabIdList.push(a.id); !a.hidden && this._.pageCount++;
                        this._.lastTab = d; this.updateStyle(); b.setAttribute("name", a.id); b.appendTo(this.parts.contents); d.unselectable(); this.parts.tabs.append(d); a.accessKey && (B(this, this, "CTRL+" + a.accessKey, z, y), this._.accessKeyMap["CTRL+" + a.accessKey] = a.id)
                    }
                }, selectPage: function (a) {
                    if (this._.currentTabId != a && !this._.tabs[a][0].hasClass("cke_dialog_tab_disabled") && !1 !== this.fire("selectPage", { page: a, currentPage: this._.currentTabId })) {
                        for (var d in this._.tabs) {
                            var c = this._.tabs[d][0], e = this._.tabs[d][1]; d != a && (c.removeClass("cke_dialog_tab_selected"),
                            c.removeAttribute("aria-selected"), e.hide()); e.setAttribute("aria-hidden", d != a)
                        } var g = this._.tabs[a]; g[0].addClass("cke_dialog_tab_selected"); g[0].setAttribute("aria-selected", !0); CKEDITOR.env.ie6Compat || CKEDITOR.env.ie7Compat ? (b(g[1]), g[1].show(), setTimeout(function () { b(g[1], 1) }, 0)) : g[1].show(); this._.currentTabId = a; this._.currentTabIndex = CKEDITOR.tools.indexOf(this._.tabIdList, a)
                    }
                }, updateStyle: function () { this.parts.dialog[(1 === this._.pageCount ? "add" : "remove") + "Class"]("cke_single_page") }, hidePage: function (a) {
                    var b =
                    this._.tabs[a] && this._.tabs[a][0]; b && 1 != this._.pageCount && b.isVisible() && (a == this._.currentTabId && this.selectPage(f.call(this)), b.hide(), this._.pageCount--, this.updateStyle())
                }, showPage: function (a) { if (a = this._.tabs[a] && this._.tabs[a][0]) a.show(), this._.pageCount++, this.updateStyle() }, getElement: function () { return this._.element }, getName: function () { return this._.name }, getContentElement: function (a, b) { var d = this._.contents[a]; return d && d[b] }, getValueOf: function (a, b) { return this.getContentElement(a, b).getValue() },
                setValueOf: function (a, b, d) { return this.getContentElement(a, b).setValue(d) }, getButton: function (a) { return this._.buttons[a] }, click: function (a) { return this._.buttons[a].click() }, disableButton: function (a) { return this._.buttons[a].disable() }, enableButton: function (a) { return this._.buttons[a].enable() }, getPageCount: function () { return this._.pageCount }, getParentEditor: function () { return this._.editor }, getSelectedElement: function () { return this.getParentEditor().getSelection().getSelectedElement() }, addFocusable: function (a,
                b) { if ("undefined" == typeof b) b = this._.focusList.length, this._.focusList.push(new l(this, a, b)); else { this._.focusList.splice(b, 0, new l(this, a, b)); for (var d = b + 1; d < this._.focusList.length; d++) this._.focusList[d].focusIndex++ } }, setState: function (a) {
                    if (this.state != a) {
                        this.state = a; if (a == CKEDITOR.DIALOG_STATE_BUSY) {
                            if (!this.parts.spinner) {
                                var b = this.getParentEditor().lang.dir, d = { attributes: { "class": "cke_dialog_spinner" }, styles: { "float": "rtl" == b ? "right" : "left" } }; d.styles["margin-" + ("rtl" == b ? "left" : "right")] =
                                "8px"; this.parts.spinner = CKEDITOR.document.createElement("div", d); this.parts.spinner.setHtml("\x26#8987;"); this.parts.spinner.appendTo(this.parts.title, 1)
                            } this.parts.spinner.show(); this.getButton("ok").disable()
                        } else a == CKEDITOR.DIALOG_STATE_IDLE && (this.parts.spinner && this.parts.spinner.hide(), this.getButton("ok").enable()); this.fire("state", a)
                    }
                }, getModel: function (a) { return this._.model ? this._.model : this.definition.getModel ? this.definition.getModel(a) : null }, setModel: function (a) { this._.model = a }, getMode: function (a) {
                    if (this.definition.getMode) return this.definition.getMode(a);
                    a = this.getModel(a); return !a || a instanceof CKEDITOR.dom.element && !a.getParent() ? CKEDITOR.dialog.CREATION_MODE : CKEDITOR.dialog.EDITING_MODE
                }
            }; CKEDITOR.tools.extend(CKEDITOR.dialog, {
                CREATION_MODE: 0, EDITING_MODE: 1, add: function (a, b) { this._.dialogDefinitions[a] && "function" != typeof b || (this._.dialogDefinitions[a] = b) }, exists: function (a) { return !!this._.dialogDefinitions[a] }, getCurrent: function () { return CKEDITOR.dialog._.currentTop }, isTabEnabled: function (a, b, d) {
                    a = a.config.removeDialogTabs; return !(a && a.match(new RegExp("(?:^|;)" +
                    b + ":" + d + "(?:$|;)", "i")))
                }, okButton: function () { var a = function (a, b) { b = b || {}; return CKEDITOR.tools.extend({ id: "ok", type: "button", label: a.lang.common.ok, "class": "cke_dialog_ui_button_ok", onClick: function (a) { a = a.data.dialog; !1 !== a.fire("ok", { hide: !0 }).hide && a.hide() } }, b, !0) }; a.type = "button"; a.override = function (b) { return CKEDITOR.tools.extend(function (d) { return a(d, b) }, { type: "button" }, !0) }; return a }(), cancelButton: function () {
                    var a = function (a, b) {
                        b = b || {}; return CKEDITOR.tools.extend({
                            id: "cancel", type: "button",
                            label: a.lang.common.cancel, "class": "cke_dialog_ui_button_cancel", onClick: function (a) { a = a.data.dialog; !1 !== a.fire("cancel", { hide: !0 }).hide && a.hide() }
                        }, b, !0)
                    }; a.type = "button"; a.override = function (b) { return CKEDITOR.tools.extend(function (d) { return a(d, b) }, { type: "button" }, !0) }; return a
                }(), addUIElement: function (a, b) { this._.uiElementBuilders[a] = b }
            }); CKEDITOR.dialog._ = { uiElementBuilders: {}, dialogDefinitions: {}, currentTop: null, currentZIndex: null }; CKEDITOR.event.implementOn(CKEDITOR.dialog); CKEDITOR.event.implementOn(CKEDITOR.dialog.prototype);
            D = { resizable: CKEDITOR.DIALOG_RESIZE_BOTH, minWidth: 600, minHeight: 400, buttons: [CKEDITOR.dialog.okButton, CKEDITOR.dialog.cancelButton] }; var H = function (a, b, d) { for (var c = 0, e; e = a[c]; c++) if (e.id == b || d && e[d] && (e = H(e[d], b, d))) return e; return null }, F = function (a, b, d, c, e) { if (d) { for (var g = 0, f; f = a[g]; g++) { if (f.id == d) return a.splice(g, 0, b), b; if (c && f[c] && (f = F(f[c], b, d, c, !0))) return f } if (e) return null } a.push(b); return b }, M = function (a, b, d) {
                for (var c = 0, e; e = a[c]; c++) {
                    if (e.id == b) return a.splice(c, 1); if (d && e[d] && (e = M(e[d],
                    b, d))) return e
                } return null
            }; k.prototype = { getContents: function (a) { return H(this.contents, a) }, getButton: function (a) { return H(this.buttons, a) }, addContents: function (a, b) { return F(this.contents, a, b) }, addButton: function (a, b) { return F(this.buttons, a, b) }, removeContents: function (a) { M(this.contents, a) }, removeButton: function (a) { M(this.buttons, a) } }; g.prototype = {
                get: function (a) { return H(this.elements, a, "children") }, add: function (a, b) { return F(this.elements, a, b, "children") }, remove: function (a) {
                    M(this.elements, a,
                    "children")
                }
            }; var I = {}, K = {}; (function () {
                CKEDITOR.ui.dialog = {
                    uiElement: function (a, b, d, c, e, g, f) {
                        if (!(4 > arguments.length)) {
                            var k = (c.call ? c(b) : c) || "div", h = ["\x3c", k, " "], l = (e && e.call ? e(b) : e) || {}, n = (g && g.call ? g(b) : g) || {}, m = (f && f.call ? f.call(this, a, b) : f) || "", t = this.domId = n.id || CKEDITOR.tools.getNextId() + "_uiElement"; b.requiredContent && !a.getParentEditor().filter.check(b.requiredContent) && (l.display = "none", this.notAllowed = !0); n.id = t; var u = {}; b.type && (u["cke_dialog_ui_" + b.type] = 1); b.className && (u[b.className] =
                            1); b.disabled && (u.cke_disabled = 1); for (var r = n["class"] && n["class"].split ? n["class"].split(" ") : [], t = 0; t < r.length; t++) r[t] && (u[r[t]] = 1); r = []; for (t in u) r.push(t); n["class"] = r.join(" "); b.title && (n.title = b.title); u = (b.style || "").split(";"); b.align && (r = b.align, l["margin-left"] = "left" == r ? 0 : "auto", l["margin-right"] = "right" == r ? 0 : "auto"); for (t in l) u.push(t + ":" + l[t]); b.hidden && u.push("display:none"); for (t = u.length - 1; 0 <= t; t--) "" === u[t] && u.splice(t, 1); 0 < u.length && (n.style = (n.style ? n.style + "; " : "") + u.join("; "));
                            for (t in n) h.push(t + '\x3d"' + CKEDITOR.tools.htmlEncode(n[t]) + '" '); h.push("\x3e", m, "\x3c/", k, "\x3e"); d.push(h.join("")); (this._ || (this._ = {})).dialog = a; "boolean" == typeof b.isChanged && (this.isChanged = function () { return b.isChanged }); "function" == typeof b.isChanged && (this.isChanged = b.isChanged); "function" == typeof b.setValue && (this.setValue = CKEDITOR.tools.override(this.setValue, function (a) { return function (d) { a.call(this, b.setValue.call(this, d)) } })); "function" == typeof b.getValue && (this.getValue = CKEDITOR.tools.override(this.getValue,
                            function (a) { return function () { return b.getValue.call(this, a.call(this)) } })); CKEDITOR.event.implementOn(this); this.registerEvents(b); this.accessKeyUp && this.accessKeyDown && b.accessKey && B(this, a, "CTRL+" + b.accessKey); var x = this; a.on("load", function () {
                                var b = x.getInputElement(); if (b) {
                                    var d = x.type in { checkbox: 1, ratio: 1 } && CKEDITOR.env.ie && 8 > CKEDITOR.env.version ? "cke_dialog_ui_focused" : ""; b.on("focus", function () { a._.tabBarMode = !1; a._.hasFocus = !0; x.fire("focus"); d && this.addClass(d) }); b.on("blur", function () {
                                        x.fire("blur");
                                        d && this.removeClass(d)
                                    })
                                }
                            }); CKEDITOR.tools.extend(this, b); this.keyboardFocusable && (this.tabIndex = b.tabIndex || 0, this.focusIndex = a._.focusList.push(this) - 1, this.on("focus", function () { a._.currentFocusIndex = x.focusIndex }))
                        }
                    }, hbox: function (a, b, d, c, e) {
                        if (!(4 > arguments.length)) {
                            this._ || (this._ = {}); var g = this._.children = b, f = e && e.widths || null, k = e && e.height || null, h, l = { role: "presentation" }; e && e.align && (l.align = e.align); CKEDITOR.ui.dialog.uiElement.call(this, a, e || { type: "hbox" }, c, "table", {}, l, function () {
                                var a =
                                ['\x3ctbody\x3e\x3ctr class\x3d"cke_dialog_ui_hbox"\x3e']; for (h = 0; h < d.length; h++) {
                                    var b = "cke_dialog_ui_hbox_child", c = []; 0 === h && (b = "cke_dialog_ui_hbox_first"); h == d.length - 1 && (b = "cke_dialog_ui_hbox_last"); a.push('\x3ctd class\x3d"', b, '" role\x3d"presentation" '); f ? f[h] && c.push("width:" + A(f[h])) : c.push("width:" + Math.floor(100 / d.length) + "%"); k && c.push("height:" + A(k)); e && void 0 !== e.padding && c.push("padding:" + A(e.padding)); CKEDITOR.env.ie && CKEDITOR.env.quirks && g[h].align && c.push("text-align:" + g[h].align);
                                    0 < c.length && a.push('style\x3d"' + c.join("; ") + '" '); a.push("\x3e", d[h], "\x3c/td\x3e")
                                } a.push("\x3c/tr\x3e\x3c/tbody\x3e"); return a.join("")
                            })
                        }
                    }, vbox: function (a, b, d, c, e) {
                        if (!(3 > arguments.length)) {
                            this._ || (this._ = {}); var g = this._.children = b, f = e && e.width || null, k = e && e.heights || null; CKEDITOR.ui.dialog.uiElement.call(this, a, e || { type: "vbox" }, c, "div", null, { role: "presentation" }, function () {
                                var b = ['\x3ctable role\x3d"presentation" cellspacing\x3d"0" border\x3d"0" ']; b.push('style\x3d"'); e && e.expand && b.push("height:100%;");
                                b.push("width:" + A(f || "100%"), ";"); CKEDITOR.env.webkit && b.push("float:none;"); b.push('"'); b.push('align\x3d"', CKEDITOR.tools.htmlEncode(e && e.align || ("ltr" == a.getParentEditor().lang.dir ? "left" : "right")), '" '); b.push("\x3e\x3ctbody\x3e"); for (var c = 0; c < d.length; c++) {
                                    var h = []; b.push('\x3ctr\x3e\x3ctd role\x3d"presentation" '); f && h.push("width:" + A(f || "100%")); k ? h.push("height:" + A(k[c])) : e && e.expand && h.push("height:" + Math.floor(100 / d.length) + "%"); e && void 0 !== e.padding && h.push("padding:" + A(e.padding)); CKEDITOR.env.ie &&
                                    CKEDITOR.env.quirks && g[c].align && h.push("text-align:" + g[c].align); 0 < h.length && b.push('style\x3d"', h.join("; "), '" '); b.push(' class\x3d"cke_dialog_ui_vbox_child"\x3e', d[c], "\x3c/td\x3e\x3c/tr\x3e")
                                } b.push("\x3c/tbody\x3e\x3c/table\x3e"); return b.join("")
                            })
                        }
                    }
                }
            })(); CKEDITOR.ui.dialog.uiElement.prototype = {
                getElement: function () { return CKEDITOR.document.getById(this.domId) }, getInputElement: function () { return this.getElement() }, getDialog: function () { return this._.dialog }, setValue: function (a, b) {
                    this.getInputElement().setValue(a);
                    !b && this.fire("change", { value: a }); return this
                }, getValue: function () { return this.getInputElement().getValue() }, isChanged: function () { return !1 }, selectParentTab: function () { for (var a = this.getInputElement() ; (a = a.getParent()) && -1 == a.$.className.search("cke_dialog_page_contents") ;); if (!a) return this; a = a.getAttribute("name"); this._.dialog._.currentTabId != a && this._.dialog.selectPage(a); return this }, focus: function () { this.selectParentTab().getInputElement().focus(); return this }, registerEvents: function (a) {
                    var b =
                    /^on([A-Z]\w+)/, d, c = function (a, b, d, c) { b.on("load", function () { a.getInputElement().on(d, c, a) }) }, e; for (e in a) if (d = e.match(b)) this.eventProcessors[e] ? this.eventProcessors[e].call(this, this._.dialog, a[e]) : c(this, this._.dialog, d[1].toLowerCase(), a[e]); return this
                }, eventProcessors: { onLoad: function (a, b) { a.on("load", b, this) }, onShow: function (a, b) { a.on("show", b, this) }, onHide: function (a, b) { a.on("hide", b, this) } }, accessKeyDown: function () { this.focus() }, accessKeyUp: function () { }, disable: function () {
                    var a = this.getElement();
                    this.getInputElement().setAttribute("disabled", "true"); a.addClass("cke_disabled")
                }, enable: function () { var a = this.getElement(); this.getInputElement().removeAttribute("disabled"); a.removeClass("cke_disabled") }, isEnabled: function () { return !this.getElement().hasClass("cke_disabled") }, isVisible: function () { return this.getInputElement().isVisible() }, isFocusable: function () { return this.isEnabled() && this.isVisible() ? !0 : !1 }
            }; CKEDITOR.ui.dialog.hbox.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,
            { getChild: function (a) { if (1 > arguments.length) return this._.children.concat(); a.splice || (a = [a]); return 2 > a.length ? this._.children[a[0]] : this._.children[a[0]] && this._.children[a[0]].getChild ? this._.children[a[0]].getChild(a.slice(1, a.length)) : null } }, !0); CKEDITOR.ui.dialog.vbox.prototype = new CKEDITOR.ui.dialog.hbox; (function () {
                var a = {
                    build: function (a, b, d) {
                        for (var c = b.children, e, g = [], f = [], k = 0; k < c.length && (e = c[k]) ; k++) { var h = []; g.push(h); f.push(CKEDITOR.dialog._.uiElementBuilders[e.type].build(a, e, h)) } return new CKEDITOR.ui.dialog[b.type](a,
                        f, g, d, b)
                    }
                }; CKEDITOR.dialog.addUIElement("hbox", a); CKEDITOR.dialog.addUIElement("vbox", a)
            })(); CKEDITOR.dialogCommand = function (a, b) { this.dialogName = a; CKEDITOR.tools.extend(this, b, !0) }; CKEDITOR.dialogCommand.prototype = { exec: function (a) { var b = this.tabId; a.openDialog(this.dialogName, function (a) { b && a.selectPage(b) }) }, canUndo: !1, editorFocus: 1 }; (function () {
                var a = /^([a]|[^a])+$/, b = /^\d*$/, d = /^\d*(?:\.\d+)?$/, c = /^(((\d*(\.\d+))|(\d*))(px|\%)?)?$/, e = /^(((\d*(\.\d+))|(\d*))(px|em|ex|in|cm|mm|pt|pc|\%)?)?$/i,
                g = /^(\s*[\w-]+\s*:\s*[^:;]+(?:;|$))*$/; CKEDITOR.VALIDATE_OR = 1; CKEDITOR.VALIDATE_AND = 2; CKEDITOR.dialog.validate = {
                    functions: function () {
                        var a = arguments; return function () {
                            var b = this && this.getValue ? this.getValue() : a[0], d, c = CKEDITOR.VALIDATE_AND, e = [], g; for (g = 0; g < a.length; g++) if ("function" == typeof a[g]) e.push(a[g]); else break; g < a.length && "string" == typeof a[g] && (d = a[g], g++); g < a.length && "number" == typeof a[g] && (c = a[g]); var f = c == CKEDITOR.VALIDATE_AND ? !0 : !1; for (g = 0; g < e.length; g++) f = c == CKEDITOR.VALIDATE_AND ? f &&
                            e[g](b) : f || e[g](b); return f ? !0 : d
                        }
                    }, regex: function (a, b) { return function (d) { d = this && this.getValue ? this.getValue() : d; return a.test(d) ? !0 : b } }, notEmpty: function (b) { return this.regex(a, b) }, integer: function (a) { return this.regex(b, a) }, number: function (a) { return this.regex(d, a) }, cssLength: function (a) { return this.functions(function (a) { return e.test(CKEDITOR.tools.trim(a)) }, a) }, htmlLength: function (a) { return this.functions(function (a) { return c.test(CKEDITOR.tools.trim(a)) }, a) }, inlineStyle: function (a) {
                        return this.functions(function (a) { return g.test(CKEDITOR.tools.trim(a)) },
                        a)
                    }, equals: function (a, b) { return this.functions(function (b) { return b == a }, b) }, notEqual: function (a, b) { return this.functions(function (b) { return b != a }, b) }
                }; CKEDITOR.on("instanceDestroyed", function (a) { if (CKEDITOR.tools.isEmpty(CKEDITOR.instances)) { for (var b; b = CKEDITOR.dialog._.currentTop;) b.hide(); for (var d in I) I[d].remove(); I = {} } a = a.editor._.storedDialogs; for (var c in a) a[c].destroy() })
            })(); CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
                openDialog: function (a, b, d) {
                    var c = null, e = CKEDITOR.dialog._.dialogDefinitions[a];
                    null === CKEDITOR.dialog._.currentTop && p(this); if ("function" == typeof e) e = this._.storedDialogs || (this._.storedDialogs = {}), c = e[a] || (e[a] = new CKEDITOR.dialog(this, a)), c.setModel(d), b && b.call(c, c), c.show(); else {
                        if ("failed" == e) throw u(this), Error('[CKEDITOR.dialog.openDialog] Dialog "' + a + '" failed when loading definition.'); "string" == typeof e && CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(e), function () {
                            "function" != typeof CKEDITOR.dialog._.dialogDefinitions[a] && (CKEDITOR.dialog._.dialogDefinitions[a] = "failed");
                            this.openDialog(a, b, d)
                        }, this, 0, 1)
                    } CKEDITOR.skin.loadPart("dialog"); if (c) c.once("hide", function () { c.setModel(null) }, null, null, 999); return c
                }
            })
        })(); var ka = !1; CKEDITOR.plugins.add("dialog", { requires: "dialogui", init: function (a) { ka || (CKEDITOR.document.appendStyleSheet(this.path + "styles/dialog.css"), ka = !0); a.on("doubleclick", function (f) { f.data.dialog && a.openDialog(f.data.dialog) }, null, null, 999) } }); (function () {
            CKEDITOR.plugins.add("a11yhelp", {
                requires: "dialog", availableLangs: {
                    af: 1, ar: 1, az: 1, bg: 1, ca: 1, cs: 1,
                    cy: 1, da: 1, de: 1, "de-ch": 1, el: 1, en: 1, "en-au": 1, "en-gb": 1, eo: 1, es: 1, "es-mx": 1, et: 1, eu: 1, fa: 1, fi: 1, fo: 1, fr: 1, "fr-ca": 1, gl: 1, gu: 1, he: 1, hi: 1, hr: 1, hu: 1, id: 1, it: 1, ja: 1, km: 1, ko: 1, ku: 1, lt: 1, lv: 1, mk: 1, mn: 1, nb: 1, nl: 1, no: 1, oc: 1, pl: 1, pt: 1, "pt-br": 1, ro: 1, ru: 1, si: 1, sk: 1, sl: 1, sq: 1, sr: 1, "sr-latn": 1, sv: 1, th: 1, tr: 1, tt: 1, ug: 1, uk: 1, vi: 1, zh: 1, "zh-cn": 1
                }, init: function (a) {
                    var f = this; a.addCommand("a11yHelp", {
                        exec: function () {
                            var e = a.langCode, e = f.availableLangs[e] ? e : f.availableLangs[e.replace(/-.*/, "")] ? e.replace(/-.*/, "") :
                            "en"; CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(f.path + "dialogs/lang/" + e + ".js"), function () { a.lang.a11yhelp = f.langEntries[e]; a.openDialog("a11yHelp") })
                        }, modes: { wysiwyg: 1, source: 1 }, readOnly: 1, canUndo: !1
                    }); a.setKeystroke(CKEDITOR.ALT + 48, "a11yHelp"); CKEDITOR.dialog.add("a11yHelp", this.path + "dialogs/a11yhelp.js"); a.on("ariaEditorHelpLabel", function (e) { e.data.label = a.lang.common.editorHelp })
                }
            })
        })(); CKEDITOR.plugins.add("about", {
            requires: "dialog", init: function (a) {
                var f = a.addCommand("about", new CKEDITOR.dialogCommand("about"));
                f.modes = { wysiwyg: 1, source: 1 }; f.canUndo = !1; f.readOnly = 1; a.ui.addButton && a.ui.addButton("About", { label: a.lang.about.dlgTitle, command: "about", toolbar: "about" }); CKEDITOR.dialog.add("about", this.path + "dialogs/about.js")
            }
        }); CKEDITOR.plugins.add("basicstyles", {
            init: function (a) {
                var f = 0, e = function (c, e, d, k) {
                    if (k) {
                        k = new CKEDITOR.style(k); var g = b[d]; g.unshift(k); a.attachStyleStateChange(k, function (b) { !a.readOnly && a.getCommand(d).setState(b) }); a.addCommand(d, new CKEDITOR.styleCommand(k, { contentForms: g })); a.ui.addButton &&
                        a.ui.addButton(c, { label: e, command: d, toolbar: "basicstyles," + (f += 10) })
                    }
                }, b = { bold: ["strong", "b", ["span", function (a) { a = a.styles["font-weight"]; return "bold" == a || 700 <= +a }]], italic: ["em", "i", ["span", function (a) { return "italic" == a.styles["font-style"] }]], underline: ["u", ["span", function (a) { return "underline" == a.styles["text-decoration"] }]], strike: ["s", "strike", ["span", function (a) { return "line-through" == a.styles["text-decoration"] }]], subscript: ["sub"], superscript: ["sup"] }, c = a.config, m = a.lang.basicstyles; e("Bold",
                m.bold, "bold", c.coreStyles_bold); e("Italic", m.italic, "italic", c.coreStyles_italic); e("Underline", m.underline, "underline", c.coreStyles_underline); e("Strike", m.strike, "strike", c.coreStyles_strike); e("Subscript", m.subscript, "subscript", c.coreStyles_subscript); e("Superscript", m.superscript, "superscript", c.coreStyles_superscript); a.setKeystroke([[CKEDITOR.CTRL + 66, "bold"], [CKEDITOR.CTRL + 73, "italic"], [CKEDITOR.CTRL + 85, "underline"]])
            }
        }); CKEDITOR.config.coreStyles_bold = { element: "strong", overrides: "b" }; CKEDITOR.config.coreStyles_italic =
        { element: "em", overrides: "i" }; CKEDITOR.config.coreStyles_underline = { element: "u" }; CKEDITOR.config.coreStyles_strike = { element: "s", overrides: "strike" }; CKEDITOR.config.coreStyles_subscript = { element: "sub" }; CKEDITOR.config.coreStyles_superscript = { element: "sup" }; (function () {
            var a = {
                exec: function (a) {
                    var e = a.getCommand("blockquote").state, b = a.getSelection(), c = b && b.getRanges()[0]; if (c) {
                        var m = b.createBookmarks(); if (CKEDITOR.env.ie) {
                            var h = m[0].startNode, l = m[0].endNode, d; if (h && "blockquote" == h.getParent().getName()) for (d =
                            h; d = d.getNext() ;) if (d.type == CKEDITOR.NODE_ELEMENT && d.isBlockBoundary()) { h.move(d, !0); break } if (l && "blockquote" == l.getParent().getName()) for (d = l; d = d.getPrevious() ;) if (d.type == CKEDITOR.NODE_ELEMENT && d.isBlockBoundary()) { l.move(d); break }
                        } var k = c.createIterator(); k.enlargeBr = a.config.enterMode != CKEDITOR.ENTER_BR; if (e == CKEDITOR.TRISTATE_OFF) {
                            for (h = []; e = k.getNextParagraph() ;) h.push(e); 1 > h.length && (e = a.document.createElement(a.config.enterMode == CKEDITOR.ENTER_P ? "p" : "div"), l = m.shift(), c.insertNode(e), e.append(new CKEDITOR.dom.text("﻿",
                            a.document)), c.moveToBookmark(l), c.selectNodeContents(e), c.collapse(!0), l = c.createBookmark(), h.push(e), m.unshift(l)); d = h[0].getParent(); c = []; for (l = 0; l < h.length; l++) e = h[l], d = d.getCommonAncestor(e.getParent()); for (e = { table: 1, tbody: 1, tr: 1, ol: 1, ul: 1 }; e[d.getName()];) d = d.getParent(); for (l = null; 0 < h.length;) { for (e = h.shift() ; !e.getParent().equals(d) ;) e = e.getParent(); e.equals(l) || c.push(e); l = e } for (; 0 < c.length;) if (e = c.shift(), "blockquote" == e.getName()) {
                                for (l = new CKEDITOR.dom.documentFragment(a.document) ; e.getFirst() ;) l.append(e.getFirst().remove()),
                                h.push(l.getLast()); l.replace(e)
                            } else h.push(e); c = a.document.createElement("blockquote"); for (c.insertBefore(h[0]) ; 0 < h.length;) e = h.shift(), c.append(e)
                        } else if (e == CKEDITOR.TRISTATE_ON) {
                            l = []; for (d = {}; e = k.getNextParagraph() ;) { for (h = c = null; e.getParent() ;) { if ("blockquote" == e.getParent().getName()) { c = e.getParent(); h = e; break } e = e.getParent() } c && h && !h.getCustomData("blockquote_moveout") && (l.push(h), CKEDITOR.dom.element.setMarker(d, h, "blockquote_moveout", !0)) } CKEDITOR.dom.element.clearAllMarkers(d); e = []; h = [];
                            for (d = {}; 0 < l.length;) k = l.shift(), c = k.getParent(), k.getPrevious() ? k.getNext() ? (k.breakParent(k.getParent()), h.push(k.getNext())) : k.remove().insertAfter(c) : k.remove().insertBefore(c), c.getCustomData("blockquote_processed") || (h.push(c), CKEDITOR.dom.element.setMarker(d, c, "blockquote_processed", !0)), e.push(k); CKEDITOR.dom.element.clearAllMarkers(d); for (l = h.length - 1; 0 <= l; l--) {
                                c = h[l]; a: {
                                    d = c; for (var k = 0, g = d.getChildCount(), n = void 0; k < g && (n = d.getChild(k)) ; k++) if (n.type == CKEDITOR.NODE_ELEMENT && n.isBlockBoundary()) {
                                        d =
                                        !1; break a
                                    } d = !0
                                } d && c.remove()
                            } if (a.config.enterMode == CKEDITOR.ENTER_BR) for (c = !0; e.length;) if (k = e.shift(), "div" == k.getName()) {
                                l = new CKEDITOR.dom.documentFragment(a.document); !c || !k.getPrevious() || k.getPrevious().type == CKEDITOR.NODE_ELEMENT && k.getPrevious().isBlockBoundary() || l.append(a.document.createElement("br")); for (c = k.getNext() && !(k.getNext().type == CKEDITOR.NODE_ELEMENT && k.getNext().isBlockBoundary()) ; k.getFirst() ;) k.getFirst().remove().appendTo(l); c && l.append(a.document.createElement("br"));
                                l.replace(k); c = !1
                            }
                        } b.selectBookmarks(m); a.focus()
                    }
                }, refresh: function (a, e) { this.setState(a.elementPath(e.block || e.blockLimit).contains("blockquote", 1) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF) }, context: "blockquote", allowedContent: "blockquote", requiredContent: "blockquote"
            }; CKEDITOR.plugins.add("blockquote", { init: function (f) { f.blockless || (f.addCommand("blockquote", a), f.ui.addButton && f.ui.addButton("Blockquote", { label: f.lang.blockquote.toolbar, command: "blockquote", toolbar: "blocks,10" })) } })
        })(); "use strict";
        (function () {
            function a(a, b) { CKEDITOR.tools.extend(this, b, { editor: a, id: "cke-" + CKEDITOR.tools.getUniqueId(), area: a._.notificationArea }); b.type || (this.type = "info"); this.element = this._createElement(); a.plugins.clipboard && CKEDITOR.plugins.clipboard.preventDefaultDropOnElement(this.element) } function f(a) {
                var b = this; this.editor = a; this.notifications = []; this.element = this._createElement(); this._uiBuffer = CKEDITOR.tools.eventsBuffer(10, this._layout, this); this._changeBuffer = CKEDITOR.tools.eventsBuffer(500, this._layout,
                this); a.on("destroy", function () { b._removeListeners(); b.element.remove() })
            } CKEDITOR.plugins.add("notification", {
                init: function (a) {
                    function b(a) { var b = new CKEDITOR.dom.element("div"); b.setStyles({ position: "fixed", "margin-left": "-9999px" }); b.setAttributes({ "aria-live": "assertive", "aria-atomic": "true" }); b.setText(a); CKEDITOR.document.getBody().append(b); setTimeout(function () { b.remove() }, 100) } a._.notificationArea = new f(a); a.showNotification = function (b, f, h) {
                        var l, d; "progress" == f ? l = h : d = h; b = new CKEDITOR.plugins.notification(a,
                        { message: b, type: f, progress: l, duration: d }); b.show(); return b
                    }; a.on("key", function (c) { if (27 == c.data.keyCode) { var f = a._.notificationArea.notifications; f.length && (b(a.lang.notification.closed), f[f.length - 1].hide(), c.cancel()) } })
                }
            }); a.prototype = {
                show: function () { !1 !== this.editor.fire("notificationShow", { notification: this }) && (this.area.add(this), this._hideAfterTimeout()) }, update: function (a) {
                    var b = !0; !1 === this.editor.fire("notificationUpdate", { notification: this, options: a }) && (b = !1); var c = this.element, f = c.findOne(".cke_notification_message"),
                    h = c.findOne(".cke_notification_progress"), l = a.type; c.removeAttribute("role"); a.progress && "progress" != this.type && (l = "progress"); l && (c.removeClass(this._getClass()), c.removeAttribute("aria-label"), this.type = l, c.addClass(this._getClass()), c.setAttribute("aria-label", this.type), "progress" != this.type || h ? "progress" != this.type && h && h.remove() : (h = this._createProgressElement(), h.insertBefore(f))); void 0 !== a.message && (this.message = a.message, f.setHtml(this.message)); void 0 !== a.progress && (this.progress = a.progress,
                    h && h.setStyle("width", this._getPercentageProgress())); b && a.important && (c.setAttribute("role", "alert"), this.isVisible() || this.area.add(this)); this.duration = a.duration; this._hideAfterTimeout()
                }, hide: function () { !1 !== this.editor.fire("notificationHide", { notification: this }) && this.area.remove(this) }, isVisible: function () { return 0 <= CKEDITOR.tools.indexOf(this.area.notifications, this) }, _createElement: function () {
                    var a = this, b, c, f = this.editor.lang.common.close; b = new CKEDITOR.dom.element("div"); b.addClass("cke_notification");
                    b.addClass(this._getClass()); b.setAttributes({ id: this.id, role: "alert", "aria-label": this.type }); "progress" == this.type && b.append(this._createProgressElement()); c = new CKEDITOR.dom.element("p"); c.addClass("cke_notification_message"); c.setHtml(this.message); b.append(c); c = CKEDITOR.dom.element.createFromHtml('\x3ca class\x3d"cke_notification_close" href\x3d"javascript:void(0)" title\x3d"' + f + '" role\x3d"button" tabindex\x3d"-1"\x3e\x3cspan class\x3d"cke_label"\x3eX\x3c/span\x3e\x3c/a\x3e'); b.append(c); c.on("click",
                    function () { a.editor.focus(); a.hide() }); return b
                }, _getClass: function () { return "progress" == this.type ? "cke_notification_info" : "cke_notification_" + this.type }, _createProgressElement: function () { var a = new CKEDITOR.dom.element("span"); a.addClass("cke_notification_progress"); a.setStyle("width", this._getPercentageProgress()); return a }, _getPercentageProgress: function () { return Math.round(100 * (this.progress || 0)) + "%" }, _hideAfterTimeout: function () {
                    var a = this, b; this._hideTimeoutId && clearTimeout(this._hideTimeoutId);
                    if ("number" == typeof this.duration) b = this.duration; else if ("info" == this.type || "success" == this.type) b = "number" == typeof this.editor.config.notification_duration ? this.editor.config.notification_duration : 5E3; b && (a._hideTimeoutId = setTimeout(function () { a.hide() }, b))
                }
            }; f.prototype = {
                add: function (a) { this.notifications.push(a); this.element.append(a.element); 1 == this.element.getChildCount() && (CKEDITOR.document.getBody().append(this.element), this._attachListeners()); this._layout() }, remove: function (a) {
                    var b = CKEDITOR.tools.indexOf(this.notifications,
                    a); 0 > b || (this.notifications.splice(b, 1), a.element.remove(), this.element.getChildCount() || (this._removeListeners(), this.element.remove()))
                }, _createElement: function () { var a = this.editor, b = a.config, c = new CKEDITOR.dom.element("div"); c.addClass("cke_notifications_area"); c.setAttribute("id", "cke_notifications_area_" + a.name); c.setStyle("z-index", b.baseFloatZIndex - 2); return c }, _attachListeners: function () {
                    var a = CKEDITOR.document.getWindow(), b = this.editor; a.on("scroll", this._uiBuffer.input); a.on("resize", this._uiBuffer.input);
                    b.on("change", this._changeBuffer.input); b.on("floatingSpaceLayout", this._layout, this, null, 20); b.on("blur", this._layout, this, null, 20)
                }, _removeListeners: function () { var a = CKEDITOR.document.getWindow(), b = this.editor; a.removeListener("scroll", this._uiBuffer.input); a.removeListener("resize", this._uiBuffer.input); b.removeListener("change", this._changeBuffer.input); b.removeListener("floatingSpaceLayout", this._layout); b.removeListener("blur", this._layout) }, _layout: function () {
                    function a() {
                        b.setStyle("left",
                        x(t + f.width - n - r))
                    } var b = this.element, c = this.editor, f = c.ui.contentsElement.getClientRect(), h = c.ui.contentsElement.getDocumentPosition(), l, d, k = b.getClientRect(), g, n = this._notificationWidth, r = this._notificationMargin; g = CKEDITOR.document.getWindow(); var w = g.getScrollPosition(), q = g.getViewPaneSize(), p = CKEDITOR.document.getBody(), u = p.getDocumentPosition(), x = CKEDITOR.tools.cssLength; n && r || (g = this.element.getChild(0), n = this._notificationWidth = g.getClientRect().width, r = this._notificationMargin = parseInt(g.getComputedStyle("margin-left"),
                    10) + parseInt(g.getComputedStyle("margin-right"), 10)); c.toolbar && (l = c.ui.space(c.config.toolbarLocation), d = l.getClientRect()); l && l.isVisible() && d.bottom > f.top && d.bottom < f.bottom - k.height ? b.setStyles({ position: "fixed", top: x(d.bottom) }) : 0 < f.top ? b.setStyles({ position: "absolute", top: x(h.y) }) : h.y + f.height - k.height > w.y ? b.setStyles({ position: "fixed", top: 0 }) : b.setStyles({ position: "absolute", top: x(h.y + f.height - k.height) }); var t = "fixed" == b.getStyle("position") ? f.left : "static" != p.getComputedStyle("position") ?
                    h.x - u.x : h.x; f.width < n + r ? h.x + n + r > w.x + q.width ? a() : b.setStyle("left", x(t)) : h.x + n + r > w.x + q.width ? b.setStyle("left", x(t)) : h.x + f.width / 2 + n / 2 + r > w.x + q.width ? b.setStyle("left", x(t - h.x + w.x + q.width - n - r)) : 0 > f.left + f.width - n - r ? a() : 0 > f.left + f.width / 2 - n / 2 ? b.setStyle("left", x(t - h.x + w.x)) : b.setStyle("left", x(t + f.width / 2 - n / 2 - r / 2))
                }
            }; CKEDITOR.plugins.notification = a
        })(); (function () {
            var a = '\x3ca id\x3d"{id}" class\x3d"cke_button cke_button__{name} cke_button_{state} {cls}"' + (CKEDITOR.env.gecko && !CKEDITOR.env.hc ? "" : " href\x3d\"javascript:void('{titleJs}')\"") +
            ' title\x3d"{title}" tabindex\x3d"-1" hidefocus\x3d"true" role\x3d"button" aria-labelledby\x3d"{id}_label" aria-describedby\x3d"{id}_description" aria-haspopup\x3d"{hasArrow}" aria-disabled\x3d"{ariaDisabled}"'; CKEDITOR.env.gecko && CKEDITOR.env.mac && (a += ' onkeypress\x3d"return false;"'); CKEDITOR.env.gecko && (a += ' onblur\x3d"this.style.cssText \x3d this.style.cssText;"'); var f = ""; CKEDITOR.env.ie && (f = 'return false;" onmouseup\x3d"CKEDITOR.tools.getMouseButton(event)\x3d\x3dCKEDITOR.MOUSE_BUTTON_LEFT\x26\x26');
            var a = a + (' onkeydown\x3d"return CKEDITOR.tools.callFunction({keydownFn},event);" onfocus\x3d"return CKEDITOR.tools.callFunction({focusFn},event);" onclick\x3d"' + f + 'CKEDITOR.tools.callFunction({clickFn},this);return false;"\x3e\x3cspan class\x3d"cke_button_icon cke_button__{iconName}_icon" style\x3d"{style}"') + '\x3e\x26nbsp;\x3c/span\x3e\x3cspan id\x3d"{id}_label" class\x3d"cke_button_label cke_button__{name}_label" aria-hidden\x3d"false"\x3e{label}\x3c/span\x3e\x3cspan id\x3d"{id}_description" class\x3d"cke_button_label" aria-hidden\x3d"false"\x3e{ariaShortcut}\x3c/span\x3e{arrowHtml}\x3c/a\x3e',
            e = CKEDITOR.addTemplate("buttonArrow", '\x3cspan class\x3d"cke_button_arrow"\x3e' + (CKEDITOR.env.hc ? "\x26#9660;" : "") + "\x3c/span\x3e"), b = CKEDITOR.addTemplate("button", a); CKEDITOR.plugins.add("button", { beforeInit: function (a) { a.ui.addHandler(CKEDITOR.UI_BUTTON, CKEDITOR.ui.button.handler) } }); CKEDITOR.UI_BUTTON = "button"; CKEDITOR.ui.button = function (a) { CKEDITOR.tools.extend(this, a, { title: a.label, click: a.click || function (b) { b.execCommand(a.command) } }); this._ = {} }; CKEDITOR.ui.button.handler = { create: function (a) { return new CKEDITOR.ui.button(a) } };
            CKEDITOR.ui.button.prototype = {
                render: function (a, f) {
                    function h() { var b = a.mode; b && (b = this.modes[b] ? void 0 !== l[b] ? l[b] : CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, b = a.readOnly && !this.readOnly ? CKEDITOR.TRISTATE_DISABLED : b, this.setState(b), this.refresh && this.refresh()) } var l = null, d = CKEDITOR.env, k = this._.id = CKEDITOR.tools.getNextId(), g = "", n = this.command, r, w, q; this._.editor = a; var p = {
                        id: k, button: this, editor: a, focus: function () { CKEDITOR.document.getById(k).focus() }, execute: function () { this.button.click(a) },
                        attach: function (a) { this.button.attach(a) }
                    }, u = CKEDITOR.tools.addFunction(function (a) { if (p.onkey) return a = new CKEDITOR.dom.event(a), !1 !== p.onkey(p, a.getKeystroke()) }), x = CKEDITOR.tools.addFunction(function (a) { var b; p.onfocus && (b = !1 !== p.onfocus(p, new CKEDITOR.dom.event(a))); return b }), t = 0; p.clickFn = r = CKEDITOR.tools.addFunction(function () { t && (a.unlockSelection(1), t = 0); p.execute(); d.iOS && a.focus() }); this.modes ? (l = {}, a.on("beforeModeUnload", function () {
                        a.mode && this._.state != CKEDITOR.TRISTATE_DISABLED && (l[a.mode] =
                        this._.state)
                    }, this), a.on("activeFilterChange", h, this), a.on("mode", h, this), !this.readOnly && a.on("readOnly", h, this)) : n && (n = a.getCommand(n)) && (n.on("state", function () { this.setState(n.state) }, this), g += n.state == CKEDITOR.TRISTATE_ON ? "on" : n.state == CKEDITOR.TRISTATE_DISABLED ? "disabled" : "off"); var B; if (this.directional) a.on("contentDirChanged", function (b) {
                        var d = CKEDITOR.document.getById(this._.id), e = d.getFirst(); b = b.data; b != a.lang.dir ? d.addClass("cke_" + b) : d.removeClass("cke_ltr").removeClass("cke_rtl"); e.setAttribute("style",
                        CKEDITOR.skin.getIconStyle(B, "rtl" == b, this.icon, this.iconOffset))
                    }, this); n ? (w = a.getCommandKeystroke(n)) && (q = CKEDITOR.tools.keystrokeToString(a.lang.common.keyboard, w)) : g += "off"; w = this.name || this.command; var v = null, y = this.icon; B = w; this.icon && !/\./.test(this.icon) ? (B = this.icon, y = null) : (this.icon && (v = this.icon), CKEDITOR.env.hidpi && this.iconHiDpi && (v = this.iconHiDpi)); v ? (CKEDITOR.skin.addIcon(v, v), y = null) : v = B; g = {
                        id: k, name: w, iconName: B, label: this.label, cls: (this.hasArrow ? "cke_button_expandable " : "") + (this.className ||
                        ""), state: g, ariaDisabled: "disabled" == g ? "true" : "false", title: this.title + (q ? " (" + q.display + ")" : ""), ariaShortcut: q ? a.lang.common.keyboardShortcut + " " + q.aria : "", titleJs: d.gecko && !d.hc ? "" : (this.title || "").replace("'", ""), hasArrow: "string" === typeof this.hasArrow && this.hasArrow || (this.hasArrow ? "true" : "false"), keydownFn: u, focusFn: x, clickFn: r, style: CKEDITOR.skin.getIconStyle(v, "rtl" == a.lang.dir, y, this.iconOffset), arrowHtml: this.hasArrow ? e.output() : ""
                    }; b.output(g, f); if (this.onRender) this.onRender(); return p
                },
                setState: function (a) { if (this._.state == a) return !1; this._.state = a; var b = CKEDITOR.document.getById(this._.id); return b ? (b.setState(a, "cke_button"), b.setAttribute("aria-disabled", a == CKEDITOR.TRISTATE_DISABLED), this.hasArrow ? b.setAttribute("aria-expanded", a == CKEDITOR.TRISTATE_ON) : a === CKEDITOR.TRISTATE_ON ? b.setAttribute("aria-pressed", !0) : b.removeAttribute("aria-pressed"), !0) : !1 }, getState: function () { return this._.state }, toFeature: function (a) {
                    if (this._.feature) return this._.feature; var b = this; this.allowedContent ||
                    this.requiredContent || !this.command || (b = a.getCommand(this.command) || b); return this._.feature = b
                }
            }; CKEDITOR.ui.prototype.addButton = function (a, b) { this.add(a, CKEDITOR.UI_BUTTON, b) }
        })(); (function () {
            function a(a) {
                function b() { for (var d = e(), g = CKEDITOR.tools.clone(a.config.toolbarGroups) || f(a), k = 0; k < g.length; k++) { var m = g[k]; if ("/" != m) { "string" == typeof m && (m = g[k] = { name: m }); var p, u = m.groups; if (u) for (var x = 0; x < u.length; x++) p = u[x], (p = d[p]) && l(m, p); (p = d[m.name]) && l(m, p) } } return g } function e() {
                    var b = {}, d, g, f; for (d in a.ui.items) g =
                    a.ui.items[d], f = g.toolbar || "others", f = f.split(","), g = f[0], f = parseInt(f[1] || -1, 10), b[g] || (b[g] = []), b[g].push({ name: d, order: f }); for (g in b) b[g] = b[g].sort(function (a, b) { return a.order == b.order ? 0 : 0 > b.order ? -1 : 0 > a.order ? 1 : a.order < b.order ? -1 : 1 }); return b
                } function l(b, d) { if (d.length) { b.items ? b.items.push(a.ui.create("-")) : b.items = []; for (var e; e = d.shift() ;) e = "string" == typeof e ? e : e.name, k && -1 != CKEDITOR.tools.indexOf(k, e) || (e = a.ui.create(e)) && a.addFeature(e) && b.items.push(e) } } function d(a) {
                    var b = [], d, c, e; for (d =
                    0; d < a.length; ++d) c = a[d], e = {}, "/" == c ? b.push(c) : CKEDITOR.tools.isArray(c) ? (l(e, CKEDITOR.tools.clone(c)), b.push(e)) : c.items && (l(e, CKEDITOR.tools.clone(c.items)), e.name = c.name, b.push(e)); return b
                } var k = a.config.removeButtons, k = k && k.split(","), g = a.config.toolbar; "string" == typeof g && (g = a.config["toolbar_" + g]); return a.toolbar = g ? d(g) : b()
            } function f(a) {
                return a._.toolbarGroups || (a._.toolbarGroups = [{ name: "document", groups: ["mode", "document", "doctools"] }, { name: "clipboard", groups: ["clipboard", "undo"] }, {
                    name: "editing",
                    groups: ["find", "selection", "spellchecker"]
                }, { name: "forms" }, "/", { name: "basicstyles", groups: ["basicstyles", "cleanup"] }, { name: "paragraph", groups: ["list", "indent", "blocks", "align", "bidi"] }, { name: "links" }, { name: "insert" }, "/", { name: "styles" }, { name: "colors" }, { name: "tools" }, { name: "others" }, { name: "about" }])
            } var e = function () { this.toolbars = []; this.focusCommandExecuted = !1 }; e.prototype.focus = function () { for (var a = 0, b; b = this.toolbars[a++];) for (var e = 0, f; f = b.items[e++];) if (f.focus) { f.focus(); return } }; var b = {
                modes: {
                    wysiwyg: 1,
                    source: 1
                }, readOnly: 1, exec: function (a) { a.toolbox && (a.toolbox.focusCommandExecuted = !0, CKEDITOR.env.ie || CKEDITOR.env.air ? setTimeout(function () { a.toolbox.focus() }, 100) : a.toolbox.focus()) }
            }; CKEDITOR.plugins.add("toolbar", {
                requires: "button", init: function (c) {
                    var f, h = function (a, b) {
                        var e, g = "rtl" == c.lang.dir, n = c.config.toolbarGroupCycling, r = g ? 37 : 39, g = g ? 39 : 37, n = void 0 === n || n; switch (b) {
                            case 9: case CKEDITOR.SHIFT + 9: for (; !e || !e.items.length;) if (e = 9 == b ? (e ? e.next : a.toolbar.next) || c.toolbox.toolbars[0] : (e ? e.previous :
                            a.toolbar.previous) || c.toolbox.toolbars[c.toolbox.toolbars.length - 1], e.items.length) for (a = e.items[f ? e.items.length - 1 : 0]; a && !a.focus;) (a = f ? a.previous : a.next) || (e = 0); a && a.focus(); return !1; case r: e = a; do e = e.next, !e && n && (e = a.toolbar.items[0]); while (e && !e.focus); e ? e.focus() : h(a, 9); return !1; case 40: return a.button && a.button.hasArrow ? a.execute() : h(a, 40 == b ? r : g), !1; case g: case 38: e = a; do e = e.previous, !e && n && (e = a.toolbar.items[a.toolbar.items.length - 1]); while (e && !e.focus); e ? e.focus() : (f = 1, h(a, CKEDITOR.SHIFT +
                            9), f = 0); return !1; case 27: return c.focus(), !1; case 13: case 32: return a.execute(), !1
                        } return !0
                    }; c.on("uiSpace", function (b) {
                        if (b.data.space == c.config.toolbarLocation) {
                            b.removeListener(); c.toolbox = new e; var d = CKEDITOR.tools.getNextId(), f = ['\x3cspan id\x3d"', d, '" class\x3d"cke_voice_label"\x3e', c.lang.toolbar.toolbars, "\x3c/span\x3e", '\x3cspan id\x3d"' + c.ui.spaceId("toolbox") + '" class\x3d"cke_toolbox" role\x3d"group" aria-labelledby\x3d"', d, '" onmousedown\x3d"return false;"\x3e'], d = !1 !== c.config.toolbarStartupExpanded,
                            g, n; c.config.toolbarCanCollapse && c.elementMode != CKEDITOR.ELEMENT_MODE_INLINE && f.push('\x3cspan class\x3d"cke_toolbox_main"' + (d ? "\x3e" : ' style\x3d"display:none"\x3e')); for (var m = c.toolbox.toolbars, w = a(c), q = w.length, p = 0; p < q; p++) {
                                var u, x = 0, t, B = w[p], v = "/" !== B && ("/" === w[p + 1] || p == q - 1), y; if (B) if (g && (f.push("\x3c/span\x3e"), n = g = 0), "/" === B) f.push('\x3cspan class\x3d"cke_toolbar_break"\x3e\x3c/span\x3e'); else {
                                    y = B.items || B; for (var z = 0; z < y.length; z++) {
                                        var A = y[z], D; if (A) {
                                            var G = function (a) {
                                                a = a.render(c, f); E = x.items.push(a) -
                                                1; 0 < E && (a.previous = x.items[E - 1], a.previous.next = a); a.toolbar = x; a.onkey = h; a.onfocus = function () { c.toolbox.focusCommandExecuted || c.focus() }
                                            }; if (A.type == CKEDITOR.UI_SEPARATOR) n = g && A; else {
                                                D = !1 !== A.canGroup; if (!x) {
                                                    u = CKEDITOR.tools.getNextId(); x = { id: u, items: [] }; t = B.name && (c.lang.toolbar.toolbarGroups[B.name] || B.name); f.push('\x3cspan id\x3d"', u, '" class\x3d"cke_toolbar' + (v ? ' cke_toolbar_last"' : '"'), t ? ' aria-labelledby\x3d"' + u + '_label"' : "", ' role\x3d"toolbar"\x3e'); t && f.push('\x3cspan id\x3d"', u, '_label" class\x3d"cke_voice_label"\x3e',
                                                    t, "\x3c/span\x3e"); f.push('\x3cspan class\x3d"cke_toolbar_start"\x3e\x3c/span\x3e'); var E = m.push(x) - 1; 0 < E && (x.previous = m[E - 1], x.previous.next = x)
                                                } D ? g || (f.push('\x3cspan class\x3d"cke_toolgroup" role\x3d"presentation"\x3e'), g = 1) : g && (f.push("\x3c/span\x3e"), g = 0); n && (G(n), n = 0); G(A)
                                            }
                                        }
                                    } g && (f.push("\x3c/span\x3e"), n = g = 0); x && f.push('\x3cspan class\x3d"cke_toolbar_end"\x3e\x3c/span\x3e\x3c/span\x3e')
                                }
                            } c.config.toolbarCanCollapse && f.push("\x3c/span\x3e"); if (c.config.toolbarCanCollapse && c.elementMode != CKEDITOR.ELEMENT_MODE_INLINE) {
                                var J =
                                CKEDITOR.tools.addFunction(function () { c.execCommand("toolbarCollapse") }); c.on("destroy", function () { CKEDITOR.tools.removeFunction(J) }); c.addCommand("toolbarCollapse", {
                                    readOnly: 1, exec: function (a) {
                                        var b = a.ui.space("toolbar_collapser"), d = b.getPrevious(), c = a.ui.space("contents"), e = d.getParent(), g = parseInt(c.$.style.height, 10), f = e.$.offsetHeight, h = b.hasClass("cke_toolbox_collapser_min"); h ? (d.show(), b.removeClass("cke_toolbox_collapser_min"), b.setAttribute("title", a.lang.toolbar.toolbarCollapse)) : (d.hide(),
                                        b.addClass("cke_toolbox_collapser_min"), b.setAttribute("title", a.lang.toolbar.toolbarExpand)); b.getFirst().setText(h ? "▲" : "◀"); c.setStyle("height", g - (e.$.offsetHeight - f) + "px"); a.fire("resize", { outerHeight: a.container.$.offsetHeight, contentsHeight: c.$.offsetHeight, outerWidth: a.container.$.offsetWidth })
                                    }, modes: { wysiwyg: 1, source: 1 }
                                }); c.setKeystroke(CKEDITOR.ALT + (CKEDITOR.env.ie || CKEDITOR.env.webkit ? 189 : 109), "toolbarCollapse"); f.push('\x3ca title\x3d"' + (d ? c.lang.toolbar.toolbarCollapse : c.lang.toolbar.toolbarExpand) +
                                '" id\x3d"' + c.ui.spaceId("toolbar_collapser") + '" tabIndex\x3d"-1" class\x3d"cke_toolbox_collapser'); d || f.push(" cke_toolbox_collapser_min"); f.push('" onclick\x3d"CKEDITOR.tools.callFunction(' + J + ')"\x3e', '\x3cspan class\x3d"cke_arrow"\x3e\x26#9650;\x3c/span\x3e', "\x3c/a\x3e")
                            } f.push("\x3c/span\x3e"); b.data.html += f.join("")
                        }
                    }); c.on("destroy", function () {
                        if (this.toolbox) {
                            var a, b = 0, c, e, f; for (a = this.toolbox.toolbars; b < a.length; b++) for (e = a[b].items, c = 0; c < e.length; c++) f = e[c], f.clickFn && CKEDITOR.tools.removeFunction(f.clickFn),
                            f.keyDownFn && CKEDITOR.tools.removeFunction(f.keyDownFn)
                        }
                    }); c.on("uiReady", function () { var a = c.ui.space("toolbox"); a && c.focusManager.add(a, 1) }); c.addCommand("toolbarFocus", b); c.setKeystroke(CKEDITOR.ALT + 121, "toolbarFocus"); c.ui.add("-", CKEDITOR.UI_SEPARATOR, {}); c.ui.addHandler(CKEDITOR.UI_SEPARATOR, { create: function () { return { render: function (a, b) { b.push('\x3cspan class\x3d"cke_toolbar_separator" role\x3d"separator"\x3e\x3c/span\x3e'); return {} } } } })
                }
            }); CKEDITOR.ui.prototype.addToolbarGroup = function (a, b,
            e) { var l = f(this.editor), d = 0 === b, k = { name: a }; if (e) { if (e = CKEDITOR.tools.search(l, function (a) { return a.name == e })) { !e.groups && (e.groups = []); if (b && (b = CKEDITOR.tools.indexOf(e.groups, b), 0 <= b)) { e.groups.splice(b + 1, 0, a); return } d ? e.groups.splice(0, 0, a) : e.groups.push(a); return } b = null } b && (b = CKEDITOR.tools.indexOf(l, function (a) { return a.name == b })); d ? l.splice(0, 0, a) : "number" == typeof b ? l.splice(b + 1, 0, k) : l.push(a) }
        })(); CKEDITOR.UI_SEPARATOR = "separator"; CKEDITOR.config.toolbarLocation = "top"; "use strict"; (function () {
            function a(a,
            b, d) { b.type || (b.type = "auto"); if (d && !1 === a.fire("beforePaste", b) || !b.dataValue && b.dataTransfer.isEmpty()) return !1; b.dataValue || (b.dataValue = ""); if (CKEDITOR.env.gecko && "drop" == b.method && a.toolbox) a.once("afterPaste", function () { a.toolbox.focus() }); return a.fire("paste", b) } function f(b) {
                function d() {
                    var a = b.editable(); if (CKEDITOR.plugins.clipboard.isCustomCopyCutSupported) {
                        var c = function (a) { b.getSelection().isCollapsed() || (b.readOnly && "cut" == a.name || D.initPasteDataTransfer(a, b), a.data.preventDefault()) };
                        a.on("copy", c); a.on("cut", c); a.on("cut", function () { b.readOnly || b.extractSelectedHtml() }, null, null, 999)
                    } a.on(D.mainPasteEvent, function (a) { "beforepaste" == D.mainPasteEvent && G || y(a) }); "beforepaste" == D.mainPasteEvent && (a.on("paste", function (a) { E || (f(), a.data.preventDefault(), y(a), k("paste")) }), a.on("contextmenu", h, null, null, 0), a.on("beforepaste", function (a) { !a.data || a.data.$.ctrlKey || a.data.$.shiftKey || h() }, null, null, 0)); a.on("beforecut", function () { !G && l(b) }); var e; a.attachListener(CKEDITOR.env.ie ? a : b.document.getDocumentElement(),
                    "mouseup", function () { e = setTimeout(z, 0) }); b.on("destroy", function () { clearTimeout(e) }); a.on("keyup", z)
                } function c(a) { return { type: a, canUndo: "cut" == a, startDisabled: !0, fakeKeystroke: "cut" == a ? CKEDITOR.CTRL + 88 : CKEDITOR.CTRL + 67, exec: function () { "cut" == this.type && l(); var a; var d = this.type; if (CKEDITOR.env.ie) a = k(d); else try { a = b.document.$.execCommand(d, !1, null) } catch (c) { a = !1 } a || b.showNotification(b.lang.clipboard[this.type + "Error"]); return a } } } function e() {
                    return {
                        canUndo: !1, async: !0, fakeKeystroke: CKEDITOR.CTRL +
                        86, exec: function (b, d) {
                            function c(d, f) { f = "undefined" !== typeof f ? f : !0; d ? (d.method = "paste", d.dataTransfer || (d.dataTransfer = D.initPasteDataTransfer()), a(b, d, f)) : g && !b._.forcePasteDialog && b.showNotification(k, "info", b.config.clipboard_notificationDuration); b._.forcePasteDialog = !1; b.fire("afterCommandExec", { name: "paste", command: e, returnValue: !!d }) } d = "undefined" !== typeof d && null !== d ? d : {}; var e = this, g = "undefined" !== typeof d.notification ? d.notification : !0, f = d.type, h = CKEDITOR.tools.keystrokeToString(b.lang.common.keyboard,
                            b.getCommandKeystroke(this)), k = "string" === typeof g ? g : b.lang.clipboard.pasteNotification.replace(/%1/, '\x3ckbd aria-label\x3d"' + h.aria + '"\x3e' + h.display + "\x3c/kbd\x3e"), h = "string" === typeof d ? d : d.dataValue; f && !0 !== b.config.forcePasteAsPlainText && "allow-word" !== b.config.forcePasteAsPlainText ? b._.nextPasteType = f : delete b._.nextPasteType; "string" === typeof h ? c({ dataValue: h }) : b.getClipboardData(c)
                        }
                    }
                } function f() { E = 1; setTimeout(function () { E = 0 }, 100) } function h() { G = 1; setTimeout(function () { G = 0 }, 10) } function k(a) {
                    var d =
                    b.document, c = d.getBody(), e = !1, f = function () { e = !0 }; c.on(a, f); 7 < CKEDITOR.env.version ? d.$.execCommand(a) : d.$.selection.createRange().execCommand(a); c.removeListener(a, f); return e
                } function l() {
                    if (CKEDITOR.env.ie && !CKEDITOR.env.quirks) {
                        var a = b.getSelection(), d, c, e; a.getType() == CKEDITOR.SELECTION_ELEMENT && (d = a.getSelectedElement()) && (c = a.getRanges()[0], e = b.document.createText(""), e.insertBefore(d), c.setStartBefore(e), c.setEndAfter(d), a.selectRanges([c]), setTimeout(function () { d.getParent() && (e.remove(), a.selectElement(d)) },
                        0))
                    }
                } function m(a, d) {
                    var c = b.document, e = b.editable(), f = function (a) { a.cancel() }, h; if (!c.getById("cke_pastebin")) {
                        var k = b.getSelection(), l = k.createBookmarks(); CKEDITOR.env.ie && k.root.fire("selectionchange"); var n = new CKEDITOR.dom.element(!CKEDITOR.env.webkit && !e.is("body") || CKEDITOR.env.ie ? "div" : "body", c); n.setAttributes({ id: "cke_pastebin", "data-cke-temp": "1" }); var t = 0, c = c.getWindow(); CKEDITOR.env.webkit ? (e.append(n), n.addClass("cke_editable"), e.is("body") || (t = "static" != e.getComputedStyle("position") ?
                            e : CKEDITOR.dom.element.get(e.$.offsetParent), t = t.getDocumentPosition().y)) : e.getAscendant(CKEDITOR.env.ie ? "body" : "html", 1).append(n); n.setStyles({ position: "absolute", top: c.getScrollPosition().y - t + 10 + "px", width: "1px", height: Math.max(1, c.getViewPaneSize().height - 20) + "px", overflow: "hidden", margin: 0, padding: 0 }); CKEDITOR.env.safari && n.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select", "text")); (t = n.getParent().isReadOnly()) ? (n.setOpacity(0), n.setAttribute("contenteditable", !0)) : n.setStyle("ltr" == b.config.contentsLangDirection ?
                            "left" : "right", "-10000px"); b.on("selectionChange", f, null, null, 0); if (CKEDITOR.env.webkit || CKEDITOR.env.gecko) h = e.once("blur", f, null, null, -100); t && n.focus(); t = new CKEDITOR.dom.range(n); t.selectNodeContents(n); var u = t.select(); CKEDITOR.env.ie && (h = e.once("blur", function () { b.lockSelection(u) })); var x = CKEDITOR.document.getWindow().getScrollPosition().y; setTimeout(function () {
                                CKEDITOR.env.webkit && (CKEDITOR.document.getBody().$.scrollTop = x); h && h.removeListener(); CKEDITOR.env.ie && e.focus(); k.selectBookmarks(l);
                                n.remove(); var a; CKEDITOR.env.webkit && (a = n.getFirst()) && a.is && a.hasClass("Apple-style-span") && (n = a); b.removeListener("selectionChange", f); d(n.getHtml())
                            }, 0)
                    }
                } function B() { if ("paste" == D.mainPasteEvent) return b.fire("beforePaste", { type: "auto", method: "paste" }), !1; b.focus(); f(); var a = b.focusManager; a.lock(); if (b.editable().fire(D.mainPasteEvent) && !k("paste")) return a.unlock(), !1; a.unlock(); return !0 } function v(a) {
                    if ("wysiwyg" == b.mode) switch (a.data.keyCode) {
                        case CKEDITOR.CTRL + 86: case CKEDITOR.SHIFT + 45: a =
                        b.editable(); f(); "paste" == D.mainPasteEvent && a.fire("beforepaste"); break; case CKEDITOR.CTRL + 88: case CKEDITOR.SHIFT + 46: b.fire("saveSnapshot"), setTimeout(function () { b.fire("saveSnapshot") }, 50)
                    }
                } function y(d) {
                    var c = { type: "auto", method: "paste", dataTransfer: D.initPasteDataTransfer(d) }; c.dataTransfer.cacheData(); var e = !1 !== b.fire("beforePaste", c); e && D.canClipboardApiBeTrusted(c.dataTransfer, b) ? (d.data.preventDefault(), setTimeout(function () { a(b, c) }, 0)) : m(d, function (d) {
                        c.dataValue = d.replace(/<span[^>]+data-cke-bookmark[^<]*?<\/span>/ig,
                        ""); e && a(b, c)
                    })
                } function z() { if ("wysiwyg" == b.mode) { var a = A("paste"); b.getCommand("cut").setState(A("cut")); b.getCommand("copy").setState(A("copy")); b.getCommand("paste").setState(a); b.fire("pasteState", a) } } function A(a) {
                    var d = b.getSelection(), d = d && d.getRanges()[0]; if ((b.readOnly || d && d.checkReadOnly()) && a in { paste: 1, cut: 1 }) return CKEDITOR.TRISTATE_DISABLED; if ("paste" == a) return CKEDITOR.TRISTATE_OFF; a = b.getSelection(); d = a.getRanges(); return a.getType() == CKEDITOR.SELECTION_NONE || 1 == d.length && d[0].collapsed ?
                    CKEDITOR.TRISTATE_DISABLED : CKEDITOR.TRISTATE_OFF
                } var D = CKEDITOR.plugins.clipboard, G = 0, E = 0; (function () {
                    b.on("key", v); b.on("contentDom", d); b.on("selectionChange", z); if (b.contextMenu) { b.contextMenu.addListener(function () { return { cut: A("cut"), copy: A("copy"), paste: A("paste") } }); var a = null; b.on("menuShow", function () { a && (a.removeListener(), a = null); var d = b.contextMenu.findItemByCommandName("paste"); d && d.element && (a = d.element.on("touchend", function () { b._.forcePasteDialog = !0 })) }) } if (b.ui.addButton) b.once("instanceReady",
                    function () { b._.pasteButtons && CKEDITOR.tools.array.forEach(b._.pasteButtons, function (a) { if (a = b.ui.get(a)) if (a = CKEDITOR.document.getById(a._.id)) a.on("touchend", function () { b._.forcePasteDialog = !0 }) }) })
                })(); (function () {
                    function a(d, c, e, f, h) { var k = b.lang.clipboard[c]; b.addCommand(c, e); b.ui.addButton && b.ui.addButton(d, { label: k, command: c, toolbar: "clipboard," + f }); b.addMenuItems && b.addMenuItem(c, { label: k, command: c, group: "clipboard", order: h }) } a("Cut", "cut", c("cut"), 10, 1); a("Copy", "copy", c("copy"), 20, 4); a("Paste",
                    "paste", e(), 30, 8); b._.pasteButtons || (b._.pasteButtons = []); b._.pasteButtons.push("Paste")
                })(); b.getClipboardData = function (a, d) {
                    function c(a) { a.removeListener(); a.cancel(); d(a.data) } function e(a) { a.removeListener(); a.cancel(); d({ type: h, dataValue: a.data.dataValue, dataTransfer: a.data.dataTransfer, method: "paste" }) } var f = !1, h = "auto"; d || (d = a, a = null); b.on("beforePaste", function (a) { a.removeListener(); f = !0; h = a.data.type }, null, null, 1E3); b.on("paste", c, null, null, 0); !1 === B() && (b.removeListener("paste", c), b._.forcePasteDialog &&
                    f && b.fire("pasteDialog") ? (b.on("pasteDialogCommit", e), b.on("dialogHide", function (a) { a.removeListener(); a.data.removeListener("pasteDialogCommit", e); a.data._.committed || d(null) })) : d(null))
                }
            } function e(a) {
                if (CKEDITOR.env.webkit) { if (!a.match(/^[^<]*$/g) && !a.match(/^(<div><br( ?\/)?><\/div>|<div>[^<]*<\/div>)*$/gi)) return "html" } else if (CKEDITOR.env.ie) { if (!a.match(/^([^<]|<br( ?\/)?>)*$/gi) && !a.match(/^(<p>([^<]|<br( ?\/)?>)*<\/p>|(\r\n))*$/gi)) return "html" } else if (CKEDITOR.env.gecko) { if (!a.match(/^([^<]|<br( ?\/)?>)*$/gi)) return "html" } else return "html";
                return "htmlifiedtext"
            } function b(a, b) {
                function d(a) { return CKEDITOR.tools.repeat("\x3c/p\x3e\x3cp\x3e", ~~(a / 2)) + (1 == a % 2 ? "\x3cbr\x3e" : "") } b = b.replace(/(?!\u3000)\s+/g, " ").replace(/> +</g, "\x3e\x3c").replace(/<br ?\/>/gi, "\x3cbr\x3e"); b = b.replace(/<\/?[A-Z]+>/g, function (a) { return a.toLowerCase() }); if (b.match(/^[^<]$/)) return b; CKEDITOR.env.webkit && -1 < b.indexOf("\x3cdiv\x3e") && (b = b.replace(/^(<div>(<br>|)<\/div>)(?!$|(<div>(<br>|)<\/div>))/g, "\x3cbr\x3e").replace(/^(<div>(<br>|)<\/div>){2}(?!$)/g, "\x3cdiv\x3e\x3c/div\x3e"),
                b.match(/<div>(<br>|)<\/div>/) && (b = "\x3cp\x3e" + b.replace(/(<div>(<br>|)<\/div>)+/g, function (a) { return d(a.split("\x3c/div\x3e\x3cdiv\x3e").length + 1) }) + "\x3c/p\x3e"), b = b.replace(/<\/div><div>/g, "\x3cbr\x3e"), b = b.replace(/<\/?div>/g, "")); CKEDITOR.env.gecko && a.enterMode != CKEDITOR.ENTER_BR && (CKEDITOR.env.gecko && (b = b.replace(/^<br><br>$/, "\x3cbr\x3e")), -1 < b.indexOf("\x3cbr\x3e\x3cbr\x3e") && (b = "\x3cp\x3e" + b.replace(/(<br>){2,}/g, function (a) { return d(a.length / 4) }) + "\x3c/p\x3e")); return h(a, b)
            } function c(a) {
                function b() {
                    var a =
                    {}, d; for (d in CKEDITOR.dtd) "$" != d.charAt(0) && "div" != d && "span" != d && (a[d] = 1); return a
                } var d = {}; return { get: function (c) { return "plain-text" == c ? d.plainText || (d.plainText = new CKEDITOR.filter(a, "br")) : "semantic-content" == c ? ((c = d.semanticContent) || (c = new CKEDITOR.filter(a, {}), c.allow({ $1: { elements: b(), attributes: !0, styles: !1, classes: !1 } }), c = d.semanticContent = c), c) : c ? new CKEDITOR.filter(a, c) : null } }
            } function m(a, b, d) {
                b = CKEDITOR.htmlParser.fragment.fromHtml(b); var c = new CKEDITOR.htmlParser.basicWriter; d.applyTo(b,
                !0, !1, a.activeEnterMode); b.writeHtml(c); return c.getHtml()
            } function h(a, b) { a.enterMode == CKEDITOR.ENTER_BR ? b = b.replace(/(<\/p><p>)+/g, function (a) { return CKEDITOR.tools.repeat("\x3cbr\x3e", a.length / 7 * 2) }).replace(/<\/?p>/g, "") : a.enterMode == CKEDITOR.ENTER_DIV && (b = b.replace(/<(\/)?p>/g, "\x3c$1div\x3e")); return b } function l(a) { a.data.preventDefault(); a.data.$.dataTransfer.dropEffect = "none" } function d(b) {
                var d = CKEDITOR.plugins.clipboard; b.on("contentDom", function () {
                    function c(d, e, f) {
                        e.select(); a(b, {
                            dataTransfer: f,
                            method: "drop"
                        }, 1); f.sourceEditor.fire("saveSnapshot"); f.sourceEditor.editable().extractHtmlFromRange(d); f.sourceEditor.getSelection().selectRanges([d]); f.sourceEditor.fire("saveSnapshot")
                    } function e(c, f) { c.select(); a(b, { dataTransfer: f, method: "drop" }, 1); d.resetDragDataTransfer() } function f(a, d, c) { var e = { $: a.data.$, target: a.data.getTarget() }; d && (e.dragRange = d); c && (e.dropRange = c); !1 === b.fire(a.name, e) && a.data.preventDefault() } function h(a) { a.type != CKEDITOR.NODE_ELEMENT && (a = a.getParent()); return a.getChildCount() }
                    var k = b.editable(), l = CKEDITOR.plugins.clipboard.getDropTarget(b), m = b.ui.space("top"), B = b.ui.space("bottom"); d.preventDefaultDropOnElement(m); d.preventDefaultDropOnElement(B); k.attachListener(l, "dragstart", f); k.attachListener(b, "dragstart", d.resetDragDataTransfer, d, null, 1); k.attachListener(b, "dragstart", function (a) { d.initDragDataTransfer(a, b) }, null, null, 2); k.attachListener(b, "dragstart", function () {
                        var a = d.dragRange = b.getSelection().getRanges()[0]; CKEDITOR.env.ie && 10 > CKEDITOR.env.version && (d.dragStartContainerChildCount =
                        a ? h(a.startContainer) : null, d.dragEndContainerChildCount = a ? h(a.endContainer) : null)
                    }, null, null, 100); k.attachListener(l, "dragend", f); k.attachListener(b, "dragend", d.initDragDataTransfer, d, null, 1); k.attachListener(b, "dragend", d.resetDragDataTransfer, d, null, 100); k.attachListener(l, "dragover", function (a) {
                        if (CKEDITOR.env.edge) a.data.preventDefault(); else {
                            var b = a.data.getTarget(); b && b.is && b.is("html") ? a.data.preventDefault() : CKEDITOR.env.ie && CKEDITOR.plugins.clipboard.isFileApiSupported && a.data.$.dataTransfer.types.contains("Files") &&
                            a.data.preventDefault()
                        }
                    }); k.attachListener(l, "drop", function (a) { if (!a.data.$.defaultPrevented && (a.data.preventDefault(), !b.readOnly)) { var c = a.data.getTarget(); if (!c.isReadOnly() || c.type == CKEDITOR.NODE_ELEMENT && c.is("html")) { var c = d.getRangeAtDropPosition(a, b), e = d.dragRange; c && f(a, e, c) } } }, null, null, 9999); k.attachListener(b, "drop", d.initDragDataTransfer, d, null, 1); k.attachListener(b, "drop", function (a) {
                        if (a = a.data) {
                            var f = a.dropRange, h = a.dragRange, k = a.dataTransfer; k.getTransferType(b) == CKEDITOR.DATA_TRANSFER_INTERNAL ?
                            setTimeout(function () { d.internalDrop(h, f, k, b) }, 0) : k.getTransferType(b) == CKEDITOR.DATA_TRANSFER_CROSS_EDITORS ? c(h, f, k) : e(f, k)
                        }
                    }, null, null, 9999)
                })
            } var k; CKEDITOR.plugins.add("clipboard", {
                requires: "dialog,notification,toolbar", init: function (a) {
                    function h(a) { if (!a || p === a.id) return !1; var b = a.getTypes(), b = 1 === b.length && "Files" === b[0]; a = 1 === a.getFilesCount(); return b && a } var k, l = c(a); a.config.forcePasteAsPlainText ? k = "plain-text" : a.config.pasteFilter ? k = a.config.pasteFilter : !CKEDITOR.env.webkit || "pasteFilter" in
                    a.config || (k = "semantic-content"); a.pasteFilter = l.get(k); f(a); d(a); CKEDITOR.dialog.add("paste", CKEDITOR.getUrl(this.path + "dialogs/paste.js")); if (CKEDITOR.env.gecko) {
                        var q = ["image/png", "image/jpeg", "image/gif"], p; a.on("paste", function (b) {
                            var d = b.data, c = d.dataTransfer; if (!d.dataValue && "paste" == d.method && h(c) && (c = c.getFile(0), -1 != CKEDITOR.tools.indexOf(q, c.type))) {
                                var e = new FileReader; e.addEventListener("load", function () { b.data.dataValue = '\x3cimg src\x3d"' + e.result + '" /\x3e'; a.fire("paste", b.data) }, !1);
                                e.addEventListener("abort", function () { a.fire("paste", b.data) }, !1); e.addEventListener("error", function () { a.fire("paste", b.data) }, !1); e.readAsDataURL(c); p = d.dataTransfer.id; b.stop()
                            }
                        }, null, null, 1)
                    } a.on("paste", function (b) {
                        b.data.dataTransfer || (b.data.dataTransfer = new CKEDITOR.plugins.clipboard.dataTransfer); if (!b.data.dataValue) {
                            var d = b.data.dataTransfer, c = d.getData("text/html"); if (c) b.data.dataValue = c, b.data.type = "html"; else if (c = d.getData("text/plain")) b.data.dataValue = a.editable().transformPlainTextToHtml(c),
                            b.data.type = "text"
                        }
                    }, null, null, 1); a.on("paste", function (a) {
                        var b = a.data.dataValue, d = CKEDITOR.dtd.$block; -1 < b.indexOf("Apple-") && (b = b.replace(/<span class="Apple-converted-space">&nbsp;<\/span>/gi, " "), "html" != a.data.type && (b = b.replace(/<span class="Apple-tab-span"[^>]*>([^<]*)<\/span>/gi, function (a, b) { return b.replace(/\t/g, "\x26nbsp;\x26nbsp; \x26nbsp;") })), -1 < b.indexOf('\x3cbr class\x3d"Apple-interchange-newline"\x3e') && (a.data.startsWithEOL = 1, a.data.preSniffing = "html", b = b.replace(/<br class="Apple-interchange-newline">/,
                        "")), b = b.replace(/(<[^>]+) class="Apple-[^"]*"/gi, "$1")); if (b.match(/^<[^<]+cke_(editable|contents)/i)) { var c, e, g = new CKEDITOR.dom.element("div"); for (g.setHtml(b) ; 1 == g.getChildCount() && (c = g.getFirst()) && c.type == CKEDITOR.NODE_ELEMENT && (c.hasClass("cke_editable") || c.hasClass("cke_contents")) ;) g = e = c; e && (b = e.getHtml().replace(/<br>$/i, "")) } CKEDITOR.env.ie ? b = b.replace(/^&nbsp;(?: |\r\n)?<(\w+)/g, function (b, c) { return c.toLowerCase() in d ? (a.data.preSniffing = "html", "\x3c" + c) : b }) : CKEDITOR.env.webkit ? b = b.replace(/<\/(\w+)><div><br><\/div>$/,
                        function (b, c) { return c in d ? (a.data.endsWithEOL = 1, "\x3c/" + c + "\x3e") : b }) : CKEDITOR.env.gecko && (b = b.replace(/(\s)<br>$/, "$1")); a.data.dataValue = b
                    }, null, null, 3); a.on("paste", function (d) {
                        d = d.data; var c = a._.nextPasteType || d.type, f = d.dataValue, k, h = a.config.clipboard_defaultContentType || "html", n = d.dataTransfer.getTransferType(a) == CKEDITOR.DATA_TRANSFER_EXTERNAL, r = !0 === a.config.forcePasteAsPlainText; k = "html" == c || "html" == d.preSniffing ? "html" : e(f); delete a._.nextPasteType; "htmlifiedtext" == k && (f = b(a.config, f));
                        if ("text" == c && "html" == k) f = m(a, f, l.get("plain-text")); else if (n && a.pasteFilter && !d.dontFilter || r) f = m(a, f, a.pasteFilter); d.startsWithEOL && (f = '\x3cbr data-cke-eol\x3d"1"\x3e' + f); d.endsWithEOL && (f += '\x3cbr data-cke-eol\x3d"1"\x3e'); "auto" == c && (c = "html" == k || "html" == h ? "html" : "text"); d.type = c; d.dataValue = f; delete d.preSniffing; delete d.startsWithEOL; delete d.endsWithEOL
                    }, null, null, 6); a.on("paste", function (b) {
                        b = b.data; b.dataValue && (a.insertHtml(b.dataValue, b.type, b.range), setTimeout(function () { a.fire("afterPaste") },
                        0))
                    }, null, null, 1E3); a.on("pasteDialog", function (b) { setTimeout(function () { a.openDialog("paste", b.data) }, 0) })
                }
            }); CKEDITOR.plugins.clipboard = {
                isCustomCopyCutSupported: CKEDITOR.env.ie && 16 > CKEDITOR.env.version || CKEDITOR.env.iOS && 605 > CKEDITOR.env.version ? !1 : !0, isCustomDataTypesSupported: !CKEDITOR.env.ie || 16 <= CKEDITOR.env.version, isFileApiSupported: !CKEDITOR.env.ie || 9 < CKEDITOR.env.version, mainPasteEvent: CKEDITOR.env.ie && !CKEDITOR.env.edge ? "beforepaste" : "paste", addPasteButton: function (a, b, d) {
                    a.ui.addButton &&
                    (a.ui.addButton(b, d), a._.pasteButtons || (a._.pasteButtons = []), a._.pasteButtons.push(b))
                }, canClipboardApiBeTrusted: function (a, b) { return a.getTransferType(b) != CKEDITOR.DATA_TRANSFER_EXTERNAL || CKEDITOR.env.chrome && !a.isEmpty() || CKEDITOR.env.gecko && (a.getData("text/html") || a.getFilesCount()) || CKEDITOR.env.safari && 603 <= CKEDITOR.env.version && !CKEDITOR.env.iOS || CKEDITOR.env.iOS && 605 <= CKEDITOR.env.version || CKEDITOR.env.edge && 16 <= CKEDITOR.env.version ? !0 : !1 }, getDropTarget: function (a) {
                    var b = a.editable(); return CKEDITOR.env.ie &&
                    9 > CKEDITOR.env.version || b.isInline() ? b : a.document
                }, fixSplitNodesAfterDrop: function (a, b, d, c) {
                    function e(a, d, c) { var g = a; g.type == CKEDITOR.NODE_TEXT && (g = a.getParent()); if (g.equals(d) && c != d.getChildCount()) return a = b.startContainer.getChild(b.startOffset - 1), d = b.startContainer.getChild(b.startOffset), a && a.type == CKEDITOR.NODE_TEXT && d && d.type == CKEDITOR.NODE_TEXT && (c = a.getLength(), a.setText(a.getText() + d.getText()), d.remove(), b.setStart(a, c), b.collapse(!0)), !0 } var f = b.startContainer; "number" == typeof c && "number" ==
                    typeof d && f.type == CKEDITOR.NODE_ELEMENT && (e(a.startContainer, f, d) || e(a.endContainer, f, c))
                }, isDropRangeAffectedByDragRange: function (a, b) { var d = b.startContainer, c = b.endOffset; return a.endContainer.equals(d) && a.endOffset <= c || a.startContainer.getParent().equals(d) && a.startContainer.getIndex() < c || a.endContainer.getParent().equals(d) && a.endContainer.getIndex() < c ? !0 : !1 }, internalDrop: function (b, d, c, e) {
                    var f = CKEDITOR.plugins.clipboard, k = e.editable(), h, l; e.fire("saveSnapshot"); e.fire("lockSnapshot", { dontUpdate: 1 });
                    CKEDITOR.env.ie && 10 > CKEDITOR.env.version && this.fixSplitNodesAfterDrop(b, d, f.dragStartContainerChildCount, f.dragEndContainerChildCount); (l = this.isDropRangeAffectedByDragRange(b, d)) || (h = b.createBookmark(!1)); f = d.clone().createBookmark(!1); l && (h = b.createBookmark(!1)); b = h.startNode; d = h.endNode; l = f.startNode; d && b.getPosition(l) & CKEDITOR.POSITION_PRECEDING && d.getPosition(l) & CKEDITOR.POSITION_FOLLOWING && l.insertBefore(b); b = e.createRange(); b.moveToBookmark(h); k.extractHtmlFromRange(b, 1); d = e.createRange();
                    f.startNode.getCommonAncestor(k) || (f = e.getSelection().createBookmarks()[0]); d.moveToBookmark(f); a(e, { dataTransfer: c, method: "drop", range: d }, 1); e.fire("unlockSnapshot")
                }, getRangeAtDropPosition: function (a, b) {
                    var d = a.data.$, c = d.clientX, e = d.clientY, f = b.getSelection(!0).getRanges()[0], k = b.createRange(); if (a.data.testRange) return a.data.testRange; if (document.caretRangeFromPoint && b.document.$.caretRangeFromPoint(c, e)) d = b.document.$.caretRangeFromPoint(c, e), k.setStart(CKEDITOR.dom.node(d.startContainer), d.startOffset),
                    k.collapse(!0); else if (d.rangeParent) k.setStart(CKEDITOR.dom.node(d.rangeParent), d.rangeOffset), k.collapse(!0); else {
                        if (CKEDITOR.env.ie && 8 < CKEDITOR.env.version && f && b.editable().hasFocus) return f; if (document.body.createTextRange) {
                            b.focus(); d = b.document.getBody().$.createTextRange(); try {
                                for (var h = !1, l = 0; 20 > l && !h; l++) { if (!h) try { d.moveToPoint(c, e - l), h = !0 } catch (m) { } if (!h) try { d.moveToPoint(c, e + l), h = !0 } catch (v) { } } if (h) {
                                    var y = "cke-temp-" + (new Date).getTime(); d.pasteHTML('\x3cspan id\x3d"' + y + '"\x3e​\x3c/span\x3e');
                                    var z = b.document.getById(y); k.moveToPosition(z, CKEDITOR.POSITION_BEFORE_START); z.remove()
                                } else { var A = b.document.$.elementFromPoint(c, e), D = new CKEDITOR.dom.element(A), G; if (D.equals(b.editable()) || "html" == D.getName()) return f && f.startContainer && !f.startContainer.equals(b.editable()) ? f : null; G = D.getClientRect(); c < G.left ? k.setStartAt(D, CKEDITOR.POSITION_AFTER_START) : k.setStartAt(D, CKEDITOR.POSITION_BEFORE_END); k.collapse(!0) }
                            } catch (E) { return null }
                        } else return null
                    } return k
                }, initDragDataTransfer: function (a,
                b) { var d = a.data.$ ? a.data.$.dataTransfer : null, c = new this.dataTransfer(d, b); "dragstart" === a.name && c.storeId(); d ? this.dragData && c.id == this.dragData.id ? c = this.dragData : this.dragData = c : this.dragData ? c = this.dragData : this.dragData = c; a.data.dataTransfer = c }, resetDragDataTransfer: function () { this.dragData = null }, initPasteDataTransfer: function (a, b) {
                    if (this.isCustomCopyCutSupported) {
                        if (a && a.data && a.data.$) {
                            var d = a.data.$.clipboardData, c = new this.dataTransfer(d, b); "copy" !== a.name && "cut" !== a.name || c.storeId(); this.copyCutData &&
                            c.id == this.copyCutData.id ? (c = this.copyCutData, c.$ = d) : this.copyCutData = c; return c
                        } return new this.dataTransfer(null, b)
                    } return new this.dataTransfer(CKEDITOR.env.edge && a && a.data.$ && a.data.$.clipboardData || null, b)
                }, preventDefaultDropOnElement: function (a) { a && a.on("dragover", l) }
            }; k = CKEDITOR.plugins.clipboard.isCustomDataTypesSupported ? "cke/id" : "Text"; CKEDITOR.plugins.clipboard.dataTransfer = function (a, b) {
                a && (this.$ = a); this._ = {
                    metaRegExp: /^<meta.*?>/i, bodyRegExp: /<body(?:[\s\S]*?)>([\s\S]*)<\/body>/i, fragmentRegExp: /\s*\x3c!--StartFragment--\x3e|\x3c!--EndFragment--\x3e\s*/g,
                    data: {}, files: [], nativeHtmlCache: "", normalizeType: function (a) { a = a.toLowerCase(); return "text" == a || "text/plain" == a ? "Text" : "url" == a ? "URL" : a }
                }; this._.fallbackDataTransfer = new CKEDITOR.plugins.clipboard.fallbackDataTransfer(this); this.id = this.getData(k); this.id || (this.id = "Text" == k ? "" : "cke-" + CKEDITOR.tools.getUniqueId()); b && (this.sourceEditor = b, this.setData("text/html", b.getSelectedHtml(1)), "Text" == k || this.getData("text/plain") || this.setData("text/plain", b.getSelection().getSelectedText()))
            }; CKEDITOR.DATA_TRANSFER_INTERNAL =
            1; CKEDITOR.DATA_TRANSFER_CROSS_EDITORS = 2; CKEDITOR.DATA_TRANSFER_EXTERNAL = 3; CKEDITOR.plugins.clipboard.dataTransfer.prototype = {
                getData: function (a, b) {
                    a = this._.normalizeType(a); var d = "text/html" == a && b ? this._.nativeHtmlCache : this._.data[a]; if (void 0 === d || null === d || "" === d) { if (this._.fallbackDataTransfer.isRequired()) d = this._.fallbackDataTransfer.getData(a, b); else try { d = this.$.getData(a) || "" } catch (c) { d = "" } "text/html" != a || b || (d = this._stripHtml(d)) } "Text" == a && CKEDITOR.env.gecko && this.getFilesCount() && "file://" ==
                    d.substring(0, 7) && (d = ""); if ("string" === typeof d) var e = d.indexOf("\x3c/html\x3e"), d = -1 !== e ? d.substring(0, e + 7) : d; return d
                }, setData: function (a, b) { a = this._.normalizeType(a); "text/html" == a ? (this._.data[a] = this._stripHtml(b), this._.nativeHtmlCache = b) : this._.data[a] = b; if (CKEDITOR.plugins.clipboard.isCustomDataTypesSupported || "URL" == a || "Text" == a) if ("Text" == k && "Text" == a && (this.id = b), this._.fallbackDataTransfer.isRequired()) this._.fallbackDataTransfer.setData(a, b); else try { this.$.setData(a, b) } catch (d) { } }, storeId: function () {
                    "Text" !==
                    k && this.setData(k, this.id)
                }, getTransferType: function (a) { return this.sourceEditor ? this.sourceEditor == a ? CKEDITOR.DATA_TRANSFER_INTERNAL : CKEDITOR.DATA_TRANSFER_CROSS_EDITORS : CKEDITOR.DATA_TRANSFER_EXTERNAL }, cacheData: function () {
                    function a(d) { d = b._.normalizeType(d); var c = b.getData(d); "text/html" == d && (b._.nativeHtmlCache = b.getData(d, !0), c = b._stripHtml(c)); c && (b._.data[d] = c) } if (this.$) {
                        var b = this, d, c; if (CKEDITOR.plugins.clipboard.isCustomDataTypesSupported) { if (this.$.types) for (d = 0; d < this.$.types.length; d++) a(this.$.types[d]) } else a("Text"),
                        a("URL"); c = this._getImageFromClipboard(); if (this.$ && this.$.files || c) { this._.files = []; if (this.$.files && this.$.files.length) for (d = 0; d < this.$.files.length; d++) this._.files.push(this.$.files[d]); 0 === this._.files.length && c && this._.files.push(c) }
                    }
                }, getFilesCount: function () { return this._.files.length ? this._.files.length : this.$ && this.$.files && this.$.files.length ? this.$.files.length : this._getImageFromClipboard() ? 1 : 0 }, getFile: function (a) {
                    return this._.files.length ? this._.files[a] : this.$ && this.$.files && this.$.files.length ?
                    this.$.files[a] : 0 === a ? this._getImageFromClipboard() : void 0
                }, isEmpty: function () { var a = {}, b; if (this.getFilesCount()) return !1; CKEDITOR.tools.array.forEach(CKEDITOR.tools.object.keys(this._.data), function (b) { a[b] = 1 }); if (this.$) if (CKEDITOR.plugins.clipboard.isCustomDataTypesSupported) { if (this.$.types) for (var d = 0; d < this.$.types.length; d++) a[this.$.types[d]] = 1 } else a.Text = 1, a.URL = 1; "Text" != k && (a[k] = 0); for (b in a) if (a[b] && "" !== this.getData(b)) return !1; return !0 }, getTypes: function () {
                    return this.$ && this.$.types ?
                    [].slice.call(this.$.types) : []
                }, _getImageFromClipboard: function () { var a; try { if (this.$ && this.$.items && this.$.items[0] && (a = this.$.items[0].getAsFile()) && a.type) return a } catch (b) { } }, _stripHtml: function (a) { if (a && a.length) { a = a.replace(this._.metaRegExp, ""); var b = this._.bodyRegExp.exec(a); b && b.length && (a = b[1], a = a.replace(this._.fragmentRegExp, "")) } return a }
            }; CKEDITOR.plugins.clipboard.fallbackDataTransfer = function (a) { this._dataTransfer = a; this._customDataFallbackType = "text/html" }; CKEDITOR.plugins.clipboard.fallbackDataTransfer._isCustomMimeTypeSupported =
            null; CKEDITOR.plugins.clipboard.fallbackDataTransfer._customTypes = []; CKEDITOR.plugins.clipboard.fallbackDataTransfer.prototype = {
                isRequired: function () {
                    var a = CKEDITOR.plugins.clipboard.fallbackDataTransfer, b = this._dataTransfer.$; if (null === a._isCustomMimeTypeSupported) if (b) { a._isCustomMimeTypeSupported = !1; if (CKEDITOR.env.edge && 17 <= CKEDITOR.env.version) return !0; try { b.setData("cke/mimetypetest", "cke test value"), a._isCustomMimeTypeSupported = "cke test value" === b.getData("cke/mimetypetest"), b.clearData("cke/mimetypetest") } catch (d) { } } else return !1;
                    return !a._isCustomMimeTypeSupported
                }, getData: function (a, b) { var d = this._getData(this._customDataFallbackType, !0); if (b) return d; var d = this._extractDataComment(d), c = null, c = a === this._customDataFallbackType ? d.content : d.data && d.data[a] ? d.data[a] : this._getData(a, !0); return null !== c ? c : "" }, setData: function (a, b) {
                    var d = a === this._customDataFallbackType; d && (b = this._applyDataComment(b, this._getFallbackTypeData())); var c = b, e = this._dataTransfer.$; try { e.setData(a, c), d && (this._dataTransfer._.nativeHtmlCache = c) } catch (f) {
                        if (this._isUnsupportedMimeTypeError(f)) {
                            d =
                            CKEDITOR.plugins.clipboard.fallbackDataTransfer; -1 === CKEDITOR.tools.indexOf(d._customTypes, a) && d._customTypes.push(a); var d = this._getFallbackTypeContent(), k = this._getFallbackTypeData(); k[a] = c; try { c = this._applyDataComment(d, k), e.setData(this._customDataFallbackType, c), this._dataTransfer._.nativeHtmlCache = c } catch (h) { c = "" }
                        }
                    } return c
                }, _getData: function (a, b) { var d = this._dataTransfer._.data; if (!b && d[a]) return d[a]; try { return this._dataTransfer.$.getData(a) } catch (c) { return null } }, _getFallbackTypeContent: function () {
                    var a =
                    this._dataTransfer._.data[this._customDataFallbackType]; a || (a = this._extractDataComment(this._getData(this._customDataFallbackType, !0)).content); return a
                }, _getFallbackTypeData: function () { var a = CKEDITOR.plugins.clipboard.fallbackDataTransfer._customTypes, b = this._extractDataComment(this._getData(this._customDataFallbackType, !0)).data || {}, d = this._dataTransfer._.data; CKEDITOR.tools.array.forEach(a, function (a) { void 0 !== d[a] ? b[a] = d[a] : void 0 !== b[a] && (b[a] = b[a]) }, this); return b }, _isUnsupportedMimeTypeError: function (a) {
                    return a.message &&
                    -1 !== a.message.search(/element not found/gi)
                }, _extractDataComment: function (a) { var b = { data: null, content: a || "" }; if (a && 16 < a.length) { var d; (d = /\x3c!--cke-data:(.*?)--\x3e/g.exec(a)) && d[1] && (b.data = JSON.parse(decodeURIComponent(d[1])), b.content = a.replace(d[0], "")) } return b }, _applyDataComment: function (a, b) { var d = ""; b && CKEDITOR.tools.object.keys(b).length && (d = "\x3c!--cke-data:" + encodeURIComponent(JSON.stringify(b)) + "--\x3e"); return d + (a && a.length ? a : "") }
            }
        })(); CKEDITOR.config.clipboard_notificationDuration =
        1E4; (function () {
            CKEDITOR.plugins.add("panel", { beforeInit: function (a) { a.ui.addHandler(CKEDITOR.UI_PANEL, CKEDITOR.ui.panel.handler) } }); CKEDITOR.UI_PANEL = "panel"; CKEDITOR.ui.panel = function (a, c) { c && CKEDITOR.tools.extend(this, c); CKEDITOR.tools.extend(this, { className: "", css: [] }); this.id = CKEDITOR.tools.getNextId(); this.document = a; this.isFramed = this.forceIFrame || this.css.length; this._ = { blocks: {} } }; CKEDITOR.ui.panel.handler = { create: function (a) { return new CKEDITOR.ui.panel(a) } }; var a = CKEDITOR.addTemplate("panel",
            '\x3cdiv lang\x3d"{langCode}" id\x3d"{id}" dir\x3d{dir} class\x3d"cke cke_reset_all {editorId} cke_panel cke_panel {cls} cke_{dir}" style\x3d"z-index:{z-index}" role\x3d"presentation"\x3e{frame}\x3c/div\x3e'), f = CKEDITOR.addTemplate("panel-frame", '\x3ciframe id\x3d"{id}" class\x3d"cke_panel_frame" role\x3d"presentation" frameborder\x3d"0" src\x3d"{src}"\x3e\x3c/iframe\x3e'), e = CKEDITOR.addTemplate("panel-frame-inner", '\x3c!DOCTYPE html\x3e\x3chtml class\x3d"cke_panel_container {env}" dir\x3d"{dir}" lang\x3d"{langCode}"\x3e\x3chead\x3e{css}\x3c/head\x3e\x3cbody class\x3d"cke_{dir}" style\x3d"margin:0;padding:0" onload\x3d"{onload}"\x3e\x3c/body\x3e\x3c/html\x3e');
            CKEDITOR.ui.panel.prototype = {
                render: function (b, c) {
                    var m = { editorId: b.id, id: this.id, langCode: b.langCode, dir: b.lang.dir, cls: this.className, frame: "", env: CKEDITOR.env.cssClass, "z-index": b.config.baseFloatZIndex + 1 }; this.getHolderElement = function () {
                        var a = this._.holder; if (!a) {
                            if (this.isFramed) {
                                var a = this.document.getById(this.id + "_frame"), b = a.getParent(), a = a.getFrameDocument(); CKEDITOR.env.iOS && b.setStyles({ overflow: "scroll", "-webkit-overflow-scrolling": "touch" }); b = CKEDITOR.tools.addFunction(CKEDITOR.tools.bind(function () {
                                    this.isLoaded =
                                    !0; if (this.onLoad) this.onLoad()
                                }, this)); a.write(e.output(CKEDITOR.tools.extend({ css: CKEDITOR.tools.buildStyleHtml(this.css), onload: "window.parent.CKEDITOR.tools.callFunction(" + b + ");" }, m))); a.getWindow().$.CKEDITOR = CKEDITOR; a.on("keydown", function (a) {
                                    var b = a.data.getKeystroke(), d = this.document.getById(this.id).getAttribute("dir"); if ("input" !== a.data.getTarget().getName() || 37 !== b && 39 !== b) this._.onKeyDown && !1 === this._.onKeyDown(b) ? "input" === a.data.getTarget().getName() && 32 === b || a.data.preventDefault() :
                                    (27 == b || b == ("rtl" == d ? 39 : 37)) && this.onEscape && !1 === this.onEscape(b) && a.data.preventDefault()
                                }, this); a = a.getBody(); a.unselectable(); CKEDITOR.env.air && CKEDITOR.tools.callFunction(b)
                            } else a = this.document.getById(this.id); this._.holder = a
                        } return a
                    }; if (this.isFramed) {
                        var h = CKEDITOR.env.air ? "javascript:void(0)" : CKEDITOR.env.ie && !CKEDITOR.env.edge ? "javascript:void(function(){" + encodeURIComponent("document.open();(" + CKEDITOR.tools.fixDomain + ")();document.close();") + "}())" : ""; m.frame = f.output({
                            id: this.id + "_frame",
                            src: h
                        })
                    } h = a.output(m); c && c.push(h); return h
                }, addBlock: function (a, c) { c = this._.blocks[a] = c instanceof CKEDITOR.ui.panel.block ? c : new CKEDITOR.ui.panel.block(this.getHolderElement(), c); this._.currentBlock || this.showBlock(a); return c }, getBlock: function (a) { return this._.blocks[a] }, showBlock: function (a) {
                    a = this._.blocks[a]; var c = this._.currentBlock, e = !this.forceIFrame || CKEDITOR.env.ie ? this._.holder : this.document.getById(this.id + "_frame"); c && c.hide(); this._.currentBlock = a; CKEDITOR.fire("ariaWidget", e); a._.focusIndex =
                    -1; this._.onKeyDown = a.onKeyDown && CKEDITOR.tools.bind(a.onKeyDown, a); a.show(); return a
                }, destroy: function () { this.element && this.element.remove() }
            }; CKEDITOR.ui.panel.block = CKEDITOR.tools.createClass({
                $: function (a, c) {
                    this.element = a.append(a.getDocument().createElement("div", { attributes: { tabindex: -1, "class": "cke_panel_block" }, styles: { display: "none" } })); c && CKEDITOR.tools.extend(this, c); this.element.setAttributes({
                        role: this.attributes.role || "presentation", "aria-label": this.attributes["aria-label"], title: this.attributes.title ||
                        this.attributes["aria-label"]
                    }); this.keys = {}; this._.focusIndex = -1; this.element.disableContextMenu()
                }, _: {
                    markItem: function (a) { -1 != a && (a = this._.getItems().getItem(this._.focusIndex = a), CKEDITOR.env.webkit && a.getDocument().getWindow().focus(), a.focus(), this.onMark && this.onMark(a)) }, markFirstDisplayed: function (a) {
                        for (var c = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && "none" == a.getStyle("display") }, e = this._.getItems(), f, l, d = e.count() - 1; 0 <= d; d--) if (f = e.getItem(d), f.getAscendant(c) || (l = f, this._.focusIndex =
                        d), "true" == f.getAttribute("aria-selected")) { l = f; this._.focusIndex = d; break } l && (a && a(), CKEDITOR.env.webkit && l.getDocument().getWindow().focus(), l.focus(), this.onMark && this.onMark(l))
                    }, getItems: function () { return this.element.find("a,input") }
                }, proto: {
                    show: function () { this.element.setStyle("display", "") }, hide: function () { this.onHide && !0 === this.onHide.call(this) || this.element.setStyle("display", "none") }, onKeyDown: function (a, c) {
                        var e = this.keys[a]; switch (e) {
                            case "next": for (var f = this._.focusIndex, e = this._.getItems(),
                            l; l = e.getItem(++f) ;) if (l.getAttribute("_cke_focus") && l.$.offsetWidth) { this._.focusIndex = f; l.focus(!0); break } return l || c ? !1 : (this._.focusIndex = -1, this.onKeyDown(a, 1)); case "prev": f = this._.focusIndex; for (e = this._.getItems() ; 0 < f && (l = e.getItem(--f)) ;) { if (l.getAttribute("_cke_focus") && l.$.offsetWidth) { this._.focusIndex = f; l.focus(!0); break } l = null } return l || c ? !1 : (this._.focusIndex = e.count(), this.onKeyDown(a, 1)); case "click": case "mouseup": return f = this._.focusIndex, (l = 0 <= f && this._.getItems().getItem(f)) &&
                            l.fireEventHandler(e, { button: CKEDITOR.tools.normalizeMouseButton(CKEDITOR.MOUSE_BUTTON_LEFT, !0) }), !1
                        } return !0
                    }
                }
            })
        })(); CKEDITOR.plugins.add("floatpanel", { requires: "panel" }); (function () {
            function a(a, b, c, m, h) { h = CKEDITOR.tools.genKey(b.getUniqueId(), c.getUniqueId(), a.lang.dir, a.uiColor || "", m.css || "", h || ""); var l = f[h]; l || (l = f[h] = new CKEDITOR.ui.panel(b, m), l.element = c.append(CKEDITOR.dom.element.createFromHtml(l.render(a), b)), l.element.setStyles({ display: "none", position: "absolute" })); return l } var f = {};
            CKEDITOR.ui.floatPanel = CKEDITOR.tools.createClass({
                $: function (e, b, c, f) {
                    function h() { g.hide() } c.forceIFrame = 1; c.toolbarRelated && e.elementMode == CKEDITOR.ELEMENT_MODE_INLINE && (b = CKEDITOR.document.getById("cke_" + e.name)); var l = b.getDocument(); f = a(e, l, b, c, f || 0); var d = f.element, k = d.getFirst(), g = this; d.disableContextMenu(); this.element = d; this._ = { editor: e, panel: f, parentElement: b, definition: c, document: l, iframe: k, children: [], dir: e.lang.dir, showBlockParams: null, markFirst: void 0 !== c.markFirst ? c.markFirst : !0 };
                    e.on("mode", h); e.on("resize", h); l.getWindow().on("resize", function () { this.reposition() }, this)
                }, proto: {
                    addBlock: function (a, b) { return this._.panel.addBlock(a, b) }, addListBlock: function (a, b) { return this._.panel.addListBlock(a, b) }, getBlock: function (a) { return this._.panel.getBlock(a) }, showBlock: function (a, b, c, f, h, l) {
                        var d = this._.panel, k = d.showBlock(a); this._.showBlockParams = [].slice.call(arguments); this.allowBlur(!1); var g = this._.editor.editable(); this._.returnFocus = g.hasFocus ? g : new CKEDITOR.dom.element(CKEDITOR.document.$.activeElement);
                        this._.hideTimeout = 0; var n = this.element, g = this._.iframe, g = CKEDITOR.env.ie && !CKEDITOR.env.edge ? g : new CKEDITOR.dom.window(g.$.contentWindow), r = n.getDocument(), w = this._.parentElement.getPositionedAncestor(), q = b.getDocumentPosition(r), r = w ? w.getDocumentPosition(r) : { x: 0, y: 0 }, p = "rtl" == this._.dir, u = q.x + (f || 0) - r.x, x = q.y + (h || 0) - r.y; !p || 1 != c && 4 != c ? p || 2 != c && 3 != c || (u += b.$.offsetWidth - 1) : u += b.$.offsetWidth; if (3 == c || 4 == c) x += b.$.offsetHeight - 1; this._.panel._.offsetParentId = b.getId(); n.setStyles({
                            top: x + "px", left: 0,
                            display: ""
                        }); n.setOpacity(0); n.getFirst().removeStyle("width"); this._.editor.focusManager.add(g); this._.blurSet || (CKEDITOR.event.useCapture = !0, g.on("blur", function (a) { function b() { delete this._.returnFocus; this.hide() } this.allowBlur() && a.data.getPhase() == CKEDITOR.EVENT_PHASE_AT_TARGET && this.visible && !this._.activeChild && (CKEDITOR.env.iOS ? this._.hideTimeout || (this._.hideTimeout = CKEDITOR.tools.setTimeout(b, 0, this)) : b.call(this)) }, this), g.on("focus", function () { this._.focused = !0; this.hideChild(); this.allowBlur(!0) },
                        this), CKEDITOR.env.iOS && (g.on("touchstart", function () { clearTimeout(this._.hideTimeout) }, this), g.on("touchend", function () { this._.hideTimeout = 0; this.focus() }, this)), CKEDITOR.event.useCapture = !1, this._.blurSet = 1); d.onEscape = CKEDITOR.tools.bind(function (a) { if (this.onEscape && !1 === this.onEscape(a)) return !1 }, this); CKEDITOR.tools.setTimeout(function () {
                            var a = CKEDITOR.tools.bind(function () {
                                var a = n; a.removeStyle("width"); if (k.autoSize) {
                                    var b = k.element.getDocument(), b = (CKEDITOR.env.webkit || CKEDITOR.env.edge ?
                                    k.element : b.getBody()).$.scrollWidth; CKEDITOR.env.ie && CKEDITOR.env.quirks && 0 < b && (b += (a.$.offsetWidth || 0) - (a.$.clientWidth || 0) + 3); a.setStyle("width", b + 10 + "px"); b = k.element.$.scrollHeight; CKEDITOR.env.ie && CKEDITOR.env.quirks && 0 < b && (b += (a.$.offsetHeight || 0) - (a.$.clientHeight || 0) + 3); a.setStyle("height", b + "px"); d._.currentBlock.element.setStyle("display", "none").removeStyle("display")
                                } else a.removeStyle("height"); p && (u -= n.$.offsetWidth); n.setStyle("left", u + "px"); var b = d.element.getWindow(), a = n.$.getBoundingClientRect(),
                                b = b.getViewPaneSize(), c = a.width || a.right - a.left, e = a.height || a.bottom - a.top, f = p ? a.right : b.width - a.left, g = p ? b.width - a.right : a.left; p ? f < c && (u = g > c ? u + c : b.width > c ? u - a.left : u - a.right + b.width) : f < c && (u = g > c ? u - c : b.width > c ? u - a.right + b.width : u - a.left); c = a.top; b.height - a.top < e && (x = c > e ? x - e : b.height > e ? x - a.bottom + b.height : x - a.top); CKEDITOR.env.ie && !CKEDITOR.env.edge && ((b = a = n.$.offsetParent && new CKEDITOR.dom.element(n.$.offsetParent)) && "html" == b.getName() && (b = b.getDocument().getBody()), b && "rtl" == b.getComputedStyle("direction") &&
                                (u = CKEDITOR.env.ie8Compat ? u - 2 * n.getDocument().getDocumentElement().$.scrollLeft : u - (a.$.scrollWidth - a.$.clientWidth))); var a = n.getFirst(), h; (h = a.getCustomData("activePanel")) && h.onHide && h.onHide.call(this, 1); a.setCustomData("activePanel", this); n.setStyles({ top: x + "px", left: u + "px" }); n.setOpacity(1); l && l()
                            }, this); d.isLoaded ? a() : d.onLoad = a; CKEDITOR.tools.setTimeout(function () {
                                var a = CKEDITOR.env.webkit && CKEDITOR.document.getWindow().getScrollPosition().y; this.focus(); k.element.focus(); CKEDITOR.env.webkit &&
                                (CKEDITOR.document.getBody().$.scrollTop = a); this.allowBlur(!0); this._.markFirst && (CKEDITOR.env.ie ? CKEDITOR.tools.setTimeout(function () { k.markFirstDisplayed ? k.markFirstDisplayed() : k._.markFirstDisplayed() }, 0) : k.markFirstDisplayed ? k.markFirstDisplayed() : k._.markFirstDisplayed()); this._.editor.fire("panelShow", this)
                            }, 0, this)
                        }, CKEDITOR.env.air ? 200 : 0, this); this.visible = 1; this.onShow && this.onShow.call(this)
                    }, reposition: function () {
                        var a = this._.showBlockParams; this.visible && this._.showBlockParams && (this.hide(),
                        this.showBlock.apply(this, a))
                    }, focus: function () { if (CKEDITOR.env.webkit) { var a = CKEDITOR.document.getActive(); a && !a.equals(this._.iframe) && a.$.blur() } (this._.lastFocused || this._.iframe.getFrameDocument().getWindow()).focus() }, blur: function () { var a = this._.iframe.getFrameDocument().getActive(); a && a.is("a") && (this._.lastFocused = a) }, hide: function (a) {
                        if (this.visible && (!this.onHide || !0 !== this.onHide.call(this))) {
                            this.hideChild(); CKEDITOR.env.gecko && this._.iframe.getFrameDocument().$.activeElement.blur();
                            this.element.setStyle("display", "none"); this.visible = 0; this.element.getFirst().removeCustomData("activePanel"); if (a = a && this._.returnFocus) CKEDITOR.env.webkit && a.type && a.getWindow().$.focus(), a.focus(); delete this._.lastFocused; this._.showBlockParams = null; this._.editor.fire("panelHide", this)
                        }
                    }, allowBlur: function (a) { var b = this._.panel; void 0 !== a && (b.allowBlur = a); return b.allowBlur }, showAsChild: function (a, b, c, f, h, l) {
                        if (this._.activeChild != a || a._.panel._.offsetParentId != c.getId()) this.hideChild(), a.onHide =
                        CKEDITOR.tools.bind(function () { CKEDITOR.tools.setTimeout(function () { this._.focused || this.hide() }, 0, this) }, this), this._.activeChild = a, this._.focused = !1, a.showBlock(b, c, f, h, l), this.blur(), (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat) && setTimeout(function () { a.element.getChild(0).$.style.cssText += "" }, 100)
                    }, hideChild: function (a) { var b = this._.activeChild; b && (delete b.onHide, delete this._.activeChild, b.hide(), a && this.focus()) }
                }
            }); CKEDITOR.on("instanceDestroyed", function () {
                var a = CKEDITOR.tools.isEmpty(CKEDITOR.instances),
                b; for (b in f) { var c = f[b]; a ? c.destroy() : c.element.hide() } a && (f = {})
            })
        })(); CKEDITOR.plugins.add("menu", {
            requires: "floatpanel", beforeInit: function (a) {
                for (var f = a.config.menu_groups.split(","), e = a._.menuGroups = {}, b = a._.menuItems = {}, c = 0; c < f.length; c++) e[f[c]] = c + 1; a.addMenuGroup = function (a, b) { e[a] = b || 100 }; a.addMenuItem = function (a, c) { e[c.group] && (b[a] = new CKEDITOR.menuItem(this, a, c)) }; a.addMenuItems = function (a) { for (var b in a) this.addMenuItem(b, a[b]) }; a.getMenuItem = function (a) { return b[a] }; a.removeMenuItem =
                function (a) { delete b[a] }
            }
        }); (function () {
            function a(a) { a.sort(function (a, b) { return a.group < b.group ? -1 : a.group > b.group ? 1 : a.order < b.order ? -1 : a.order > b.order ? 1 : 0 }) } var f = '\x3cspan class\x3d"cke_menuitem"\x3e\x3ca id\x3d"{id}" class\x3d"cke_menubutton cke_menubutton__{name} cke_menubutton_{state} {cls}" href\x3d"{href}" title\x3d"{title}" tabindex\x3d"-1" _cke_focus\x3d1 hidefocus\x3d"true" role\x3d"{role}" aria-label\x3d"{attrLabel}" aria-describedby\x3d"{id}_description" aria-haspopup\x3d"{hasPopup}" aria-disabled\x3d"{disabled}" {ariaChecked} draggable\x3d"false"',
            e = ""; CKEDITOR.env.gecko && CKEDITOR.env.mac && (f += ' onkeypress\x3d"return false;"'); CKEDITOR.env.gecko && (f += ' onblur\x3d"this.style.cssText \x3d this.style.cssText;" ondragstart\x3d"return false;"'); CKEDITOR.env.ie && (e = 'return false;" onmouseup\x3d"CKEDITOR.tools.getMouseButton(event)\x3d\x3d\x3dCKEDITOR.MOUSE_BUTTON_LEFT\x26\x26'); var f = f + (' onmouseover\x3d"CKEDITOR.tools.callFunction({hoverFn},{index});" onmouseout\x3d"CKEDITOR.tools.callFunction({moveOutFn},{index});" onclick\x3d"' + e + 'CKEDITOR.tools.callFunction({clickFn},{index}); return false;"\x3e') +
            '\x3cspan class\x3d"cke_menubutton_inner"\x3e\x3cspan class\x3d"cke_menubutton_icon"\x3e\x3cspan class\x3d"cke_button_icon cke_button__{iconName}_icon" style\x3d"{iconStyle}"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"cke_menubutton_label"\x3e{label}\x3c/span\x3e{shortcutHtml}{arrowHtml}\x3c/span\x3e\x3c/a\x3e\x3cspan id\x3d"{id}_description" class\x3d"cke_voice_label" aria-hidden\x3d"false"\x3e{ariaShortcut}\x3c/span\x3e\x3c/span\x3e', b = CKEDITOR.addTemplate("menuItem", f), c = CKEDITOR.addTemplate("menuArrow",
            '\x3cspan class\x3d"cke_menuarrow"\x3e\x3cspan\x3e{label}\x3c/span\x3e\x3c/span\x3e'), m = CKEDITOR.addTemplate("menuShortcut", '\x3cspan class\x3d"cke_menubutton_label cke_menubutton_shortcut"\x3e{shortcut}\x3c/span\x3e'); CKEDITOR.menu = CKEDITOR.tools.createClass({
                $: function (a, b) {
                    b = this._.definition = b || {}; this.id = CKEDITOR.tools.getNextId(); this.editor = a; this.items = []; this._.listeners = []; this._.level = b.level || 1; var d = CKEDITOR.tools.extend({}, b.panel, {
                        css: [CKEDITOR.skin.getPath("editor")], level: this._.level -
                        1, block: {}
                    }), c = d.block.attributes = d.attributes || {}; !c.role && (c.role = "menu"); this._.panelDefinition = d
                }, _: {
                    onShow: function () { var a = this.editor.getSelection(), b = a && a.getStartElement(), d = this.editor.elementPath(), c = this._.listeners; this.removeAll(); for (var e = 0; e < c.length; e++) { var f = c[e](b, a, d); if (f) for (var m in f) { var w = this.editor.getMenuItem(m); !w || w.command && !this.editor.getCommand(w.command).state || (w.state = f[m], this.add(w)) } } }, onClick: function (a) {
                        this.hide(); if (a.onClick) a.onClick(); else a.command &&
                        this.editor.execCommand(a.command)
                    }, onEscape: function (a) { var b = this.parent; b ? b._.panel.hideChild(1) : 27 == a && this.hide(1); return !1 }, onHide: function () { this.onHide && this.onHide() }, showSubMenu: function (a) {
                        var b = this._.subMenu, d = this.items[a]; if (d = d.getItems && d.getItems()) {
                            b ? b.removeAll() : (b = this._.subMenu = new CKEDITOR.menu(this.editor, CKEDITOR.tools.extend({}, this._.definition, { level: this._.level + 1 }, !0)), b.parent = this, b._.onClick = CKEDITOR.tools.bind(this._.onClick, this)); for (var c in d) {
                                var e = this.editor.getMenuItem(c);
                                e && (e.state = d[c], b.add(e))
                            } var f = this._.panel.getBlock(this.id).element.getDocument().getById(this.id + String(a)); setTimeout(function () { b.show(f, 2) }, 0)
                        } else this._.panel.hideChild(1)
                    }
                }, proto: {
                    add: function (a) { a.order || (a.order = this.items.length); this.items.push(a) }, removeAll: function () { this.items = [] }, show: function (b, c, d, e) {
                        if (!this.parent && (this._.onShow(), !this.items.length)) return; c = c || ("rtl" == this.editor.lang.dir ? 2 : 1); var f = this.items, m = this.editor, r = this._.panel, w = this._.element; if (!r) {
                            r = this._.panel =
                            new CKEDITOR.ui.floatPanel(this.editor, CKEDITOR.document.getBody(), this._.panelDefinition, this._.level); r.onEscape = CKEDITOR.tools.bind(function (a) { if (!1 === this._.onEscape(a)) return !1 }, this); r.onShow = function () { r._.panel.getHolderElement().getParent().addClass("cke").addClass("cke_reset_all") }; r.onHide = CKEDITOR.tools.bind(function () { this._.onHide && this._.onHide() }, this); w = r.addBlock(this.id, this._.panelDefinition.block); w.autoSize = !0; var q = w.keys; q[40] = "next"; q[9] = "next"; q[38] = "prev"; q[CKEDITOR.SHIFT +
                            9] = "prev"; q["rtl" == m.lang.dir ? 37 : 39] = CKEDITOR.env.ie ? "mouseup" : "click"; q[32] = CKEDITOR.env.ie ? "mouseup" : "click"; CKEDITOR.env.ie && (q[13] = "mouseup"); w = this._.element = w.element; q = w.getDocument(); q.getBody().setStyle("overflow", "hidden"); q.getElementsByTag("html").getItem(0).setStyle("overflow", "hidden"); this._.itemOverFn = CKEDITOR.tools.addFunction(function (a) { clearTimeout(this._.showSubTimeout); this._.showSubTimeout = CKEDITOR.tools.setTimeout(this._.showSubMenu, m.config.menu_subMenuDelay || 400, this, [a]) },
                            this); this._.itemOutFn = CKEDITOR.tools.addFunction(function () { clearTimeout(this._.showSubTimeout) }, this); this._.itemClickFn = CKEDITOR.tools.addFunction(function (a) { var b = this.items[a]; if (b.state == CKEDITOR.TRISTATE_DISABLED) this.hide(1); else if (b.getItems) this._.showSubMenu(a); else this._.onClick(b) }, this)
                        } a(f); for (var q = m.elementPath(), q = ['\x3cdiv class\x3d"cke_menu' + (q && q.direction() != m.lang.dir ? " cke_mixed_dir_content" : "") + '" role\x3d"presentation"\x3e'], p = f.length, u = p && f[0].group, x = 0; x < p; x++) {
                            var t =
                            f[x]; u != t.group && (q.push('\x3cdiv class\x3d"cke_menuseparator" role\x3d"separator"\x3e\x3c/div\x3e'), u = t.group); t.render(this, x, q)
                        } q.push("\x3c/div\x3e"); w.setHtml(q.join("")); CKEDITOR.ui.fire("ready", this); this.parent ? this.parent._.panel.showAsChild(r, this.id, b, c, d, e) : r.showBlock(this.id, b, c, d, e); m.fire("menuShow", [r])
                    }, addListener: function (a) { this._.listeners.push(a) }, hide: function (a) { this._.onHide && this._.onHide(); this._.panel && this._.panel.hide(a) }, findItemByCommandName: function (a) {
                        var b = CKEDITOR.tools.array.filter(this.items,
                        function (b) { return a === b.command }); return b.length ? (b = b[0], { item: b, element: this._.element.findOne("." + b.className) }) : null
                    }
                }
            }); CKEDITOR.menuItem = CKEDITOR.tools.createClass({
                $: function (a, b, d) { CKEDITOR.tools.extend(this, d, { order: 0, className: "cke_menubutton__" + b }); this.group = a._.menuGroups[this.group]; this.editor = a; this.name = b }, proto: {
                    render: function (a, e, d) {
                        var f = a.id + String(e), g = "undefined" == typeof this.state ? CKEDITOR.TRISTATE_OFF : this.state, n = "", r = this.editor, w, q, p = g == CKEDITOR.TRISTATE_ON ? "on" : g == CKEDITOR.TRISTATE_DISABLED ?
                        "disabled" : "off"; this.role in { menuitemcheckbox: 1, menuitemradio: 1 } && (n = ' aria-checked\x3d"' + (g == CKEDITOR.TRISTATE_ON ? "true" : "false") + '"'); var u = this.getItems, x = "\x26#" + ("rtl" == this.editor.lang.dir ? "9668" : "9658") + ";", t = this.name; this.icon && !/\./.test(this.icon) && (t = this.icon); this.command && (w = r.getCommand(this.command), (w = r.getCommandKeystroke(w)) && (q = CKEDITOR.tools.keystrokeToString(r.lang.common.keyboard, w))); w = CKEDITOR.tools.htmlEncodeAttr(this.label); a = {
                            id: f, name: this.name, iconName: t, label: this.label,
                            attrLabel: w, cls: this.className || "", state: p, hasPopup: u ? "true" : "false", disabled: g == CKEDITOR.TRISTATE_DISABLED, title: w + (q ? " (" + q.display + ")" : ""), ariaShortcut: q ? r.lang.common.keyboardShortcut + " " + q.aria : "", href: "javascript:void('" + (w || "").replace("'") + "')", hoverFn: a._.itemOverFn, moveOutFn: a._.itemOutFn, clickFn: a._.itemClickFn, index: e, iconStyle: CKEDITOR.skin.getIconStyle(t, "rtl" == this.editor.lang.dir, t == this.icon ? null : this.icon, this.iconOffset), shortcutHtml: q ? m.output({ shortcut: q.display }) : "", arrowHtml: u ?
                            c.output({ label: x }) : "", role: this.role ? this.role : "menuitem", ariaChecked: n
                        }; b.output(a, d)
                    }
                }
            })
        })(); CKEDITOR.config.menu_groups = "clipboard,form,tablecell,tablecellproperties,tablerow,tablecolumn,table,anchor,link,image,flash,checkbox,radio,textfield,hiddenfield,imagebutton,button,select,textarea,div"; CKEDITOR.plugins.add("contextmenu", {
            requires: "menu", onLoad: function () {
                CKEDITOR.plugins.contextMenu = CKEDITOR.tools.createClass({
                    base: CKEDITOR.menu, $: function (a) {
                        this.base.call(this, a, {
                            panel: {
                                css: a.config.contextmenu_contentsCss,
                                className: "cke_menu_panel", attributes: { "aria-label": a.lang.contextmenu.options }
                            }
                        })
                    }, proto: {
                        addTarget: function (a, f) {
                            function e() { c = !1 } var b, c; a.on("contextmenu", function (a) {
                                a = a.data; var e = CKEDITOR.env.webkit ? b : CKEDITOR.env.mac ? a.$.metaKey : a.$.ctrlKey; if (!f || !e) if (a.preventDefault(), !c) {
                                    if (CKEDITOR.env.mac && CKEDITOR.env.webkit) {
                                        var e = this.editor, d = (new CKEDITOR.dom.elementPath(a.getTarget(), e.editable())).contains(function (a) { return a.hasAttribute("contenteditable") }, !0); d && "false" == d.getAttribute("contenteditable") &&
                                        e.getSelection().fake(d)
                                    } var d = a.getTarget().getDocument(), k = a.getTarget().getDocument().getDocumentElement(), e = !d.equals(CKEDITOR.document), d = d.getWindow().getScrollPosition(), g = e ? a.$.clientX : a.$.pageX || d.x + a.$.clientX, m = e ? a.$.clientY : a.$.pageY || d.y + a.$.clientY; CKEDITOR.tools.setTimeout(function () { this.open(k, null, g, m) }, CKEDITOR.env.ie ? 200 : 0, this)
                                }
                            }, this); if (CKEDITOR.env.webkit) {
                                var m = function () { b = 0 }; a.on("keydown", function (a) { b = CKEDITOR.env.mac ? a.data.$.metaKey : a.data.$.ctrlKey }); a.on("keyup", m);
                                a.on("contextmenu", m)
                            } CKEDITOR.env.gecko && !CKEDITOR.env.mac && (a.on("keydown", function (a) { a.data.$.shiftKey && 121 === a.data.$.keyCode && (c = !0) }, null, null, 0), a.on("keyup", e), a.on("contextmenu", e))
                        }, open: function (a, f, e, b) { !1 !== this.editor.config.enableContextMenu && this.editor.getSelection().getType() !== CKEDITOR.SELECTION_NONE && (this.editor.focus(), a = a || CKEDITOR.document.getDocumentElement(), this.editor.selectionChange(1), this.show(a, f, e, b)) }
                    }
                })
            }, beforeInit: function (a) {
                var f = a.contextMenu = new CKEDITOR.plugins.contextMenu(a);
                a.on("contentDom", function () { f.addTarget(a.editable(), !1 !== a.config.browserContextMenuOnCtrl) }); a.addCommand("contextMenu", { exec: function (a) { var b = 0, c = 0, f = a.getSelection().getRanges(), f = f[f.length - 1].getClientRects(a.editable().isInline()); if (f = f[f.length - 1]) b = f["rtl" === a.lang.dir ? "left" : "right"], c = f.bottom; a.contextMenu.open(a.document.getBody().getParent(), null, b, c) } }); a.setKeystroke(CKEDITOR.SHIFT + 121, "contextMenu"); a.setKeystroke(CKEDITOR.CTRL + CKEDITOR.SHIFT + 121, "contextMenu")
            }
        }); (function () {
            function a(a,
            e) {
                function h(b) { b = g.list[b]; var d; b.equals(a.editable()) || "true" == b.getAttribute("contenteditable") ? (d = a.createRange(), d.selectNodeContents(b), d = d.select()) : (d = a.getSelection(), d.selectElement(b)); CKEDITOR.env.ie && a.fire("selectionChange", { selection: d, path: new CKEDITOR.dom.elementPath(b) }); a.focus() } function l() { k && k.setHtml('\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e'); delete g.list } var d = a.ui.spaceId("path"), k, g = a._.elementsPath, n = g.idBase; e.html += '\x3cspan id\x3d"' + d + '_label" class\x3d"cke_voice_label"\x3e' +
                a.lang.elementspath.eleLabel + '\x3c/span\x3e\x3cspan id\x3d"' + d + '" class\x3d"cke_path" role\x3d"group" aria-labelledby\x3d"' + d + '_label"\x3e\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e\x3c/span\x3e'; a.on("uiReady", function () { var b = a.ui.space("path"); b && a.focusManager.add(b, 1) }); g.onClick = h; var r = CKEDITOR.tools.addFunction(h), w = CKEDITOR.tools.addFunction(function (b, d) {
                    var e = g.idBase, f; d = new CKEDITOR.dom.event(d); f = "rtl" == a.lang.dir; switch (d.getKeystroke()) {
                        case f ? 39 : 37: case 9: return (f =
                        CKEDITOR.document.getById(e + (b + 1))) || (f = CKEDITOR.document.getById(e + "0")), f.focus(), !1; case f ? 37 : 39: case CKEDITOR.SHIFT + 9: return (f = CKEDITOR.document.getById(e + (b - 1))) || (f = CKEDITOR.document.getById(e + (g.list.length - 1))), f.focus(), !1; case 27: return a.focus(), !1; case 13: case 32: return h(b), !1
                    } return !0
                }); a.on("selectionChange", function (e) {
                    for (var f = [], h = g.list = [], l = [], m = g.filters, B = !0, v = e.data.path.elements, y = v.length; y--;) {
                        var z = v[y], A = 0; e = z.data("cke-display-name") ? z.data("cke-display-name") : z.data("cke-real-element-type") ?
                        z.data("cke-real-element-type") : z.getName(); (B = z.hasAttribute("contenteditable") ? "true" == z.getAttribute("contenteditable") : B) || z.hasAttribute("contenteditable") || (A = 1); for (var D = 0; D < m.length; D++) { var G = m[D](z, e); if (!1 === G) { A = 1; break } e = G || e } A || (h.unshift(z), l.unshift(e))
                    } h = h.length; for (m = 0; m < h; m++) e = l[m], B = a.lang.elementspath.eleTitle.replace(/%1/, e), e = b.output({ id: n + m, label: B, text: e, jsTitle: "javascript:void('" + e + "')", index: m, keyDownFn: w, clickFn: r }), f.unshift(e); k || (k = CKEDITOR.document.getById(d));
                    l = k; l.setHtml(f.join("") + '\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e'); a.fire("elementsPathUpdate", { space: l })
                }); a.on("readOnly", l); a.on("contentDomUnload", l); a.addCommand("elementsPathFocus", f.toolbarFocus); a.setKeystroke(CKEDITOR.ALT + 122, "elementsPathFocus")
            } var f = { toolbarFocus: { editorFocus: !1, readOnly: 1, exec: function (a) { (a = CKEDITOR.document.getById(a._.elementsPath.idBase + "0")) && a.focus(CKEDITOR.env.ie || CKEDITOR.env.air) } } }, e = ""; CKEDITOR.env.gecko && CKEDITOR.env.mac && (e += ' onkeypress\x3d"return false;"');
            CKEDITOR.env.gecko && (e += ' onblur\x3d"this.style.cssText \x3d this.style.cssText;"'); var b = CKEDITOR.addTemplate("pathItem", '\x3ca id\x3d"{id}" href\x3d"{jsTitle}" tabindex\x3d"-1" class\x3d"cke_path_item" title\x3d"{label}"' + e + ' hidefocus\x3d"true"  draggable\x3d"false"  ondragstart\x3d"return false;" onkeydown\x3d"return CKEDITOR.tools.callFunction({keyDownFn},{index}, event );" onclick\x3d"CKEDITOR.tools.callFunction({clickFn},{index}); return false;" role\x3d"button" aria-label\x3d"{label}"\x3e{text}\x3c/a\x3e');
            CKEDITOR.plugins.add("elementspath", { init: function (b) { b._.elementsPath = { idBase: "cke_elementspath_" + CKEDITOR.tools.getNextNumber() + "_", filters: [] }; b.on("uiSpace", function (e) { "bottom" == e.data.space && a(b, e.data) }) } })
        })(); (function () {
            function a(a, c) {
                var m, h; c.on("refresh", function (a) { var b = [f], c; for (c in a.data.states) b.push(a.data.states[c]); this.setState(CKEDITOR.tools.search(b, e) ? e : f) }, c, null, 100); c.on("exec", function (c) { m = a.getSelection(); h = m.createBookmarks(1); c.data || (c.data = {}); c.data.done = !1 },
                c, null, 0); c.on("exec", function () { a.forceNextSelectionCheck(); m.selectBookmarks(h) }, c, null, 100)
            } var f = CKEDITOR.TRISTATE_DISABLED, e = CKEDITOR.TRISTATE_OFF; CKEDITOR.plugins.add("indent", {
                init: function (b) {
                    var c = CKEDITOR.plugins.indent.genericDefinition; a(b, b.addCommand("indent", new c(!0))); a(b, b.addCommand("outdent", new c)); b.ui.addButton && (b.ui.addButton("Indent", { label: b.lang.indent.indent, command: "indent", directional: !0, toolbar: "indent,20" }), b.ui.addButton("Outdent", {
                        label: b.lang.indent.outdent, command: "outdent",
                        directional: !0, toolbar: "indent,10"
                    })); b.on("dirChanged", function (a) {
                        var c = b.createRange(), e = a.data.node; c.setStartBefore(e); c.setEndAfter(e); for (var d = new CKEDITOR.dom.walker(c), f; f = d.next() ;) if (f.type == CKEDITOR.NODE_ELEMENT) if (!f.equals(e) && f.getDirection()) c.setStartAfter(f), d = new CKEDITOR.dom.walker(c); else {
                            var g = b.config.indentClasses; if (g) for (var n = "ltr" == a.data.dir ? ["_rtl", ""] : ["", "_rtl"], r = 0; r < g.length; r++) f.hasClass(g[r] + n[0]) && (f.removeClass(g[r] + n[0]), f.addClass(g[r] + n[1])); g = f.getStyle("margin-right");
                            n = f.getStyle("margin-left"); g ? f.setStyle("margin-left", g) : f.removeStyle("margin-left"); n ? f.setStyle("margin-right", n) : f.removeStyle("margin-right")
                        }
                    })
                }
            }); CKEDITOR.plugins.indent = {
                genericDefinition: function (a) { this.isIndent = !!a; this.startDisabled = !this.isIndent }, specificDefinition: function (a, c, e) { this.name = c; this.editor = a; this.jobs = {}; this.enterBr = a.config.enterMode == CKEDITOR.ENTER_BR; this.isIndent = !!e; this.relatedGlobal = e ? "indent" : "outdent"; this.indentKey = e ? 9 : CKEDITOR.SHIFT + 9; this.database = {} }, registerCommands: function (a,
                c) { a.on("pluginsLoaded", function () { for (var a in c) (function (a, b) { var d = a.getCommand(b.relatedGlobal), c; for (c in b.jobs) d.on("exec", function (d) { d.data.done || (a.fire("lockSnapshot"), b.execJob(a, c) && (d.data.done = !0), a.fire("unlockSnapshot"), CKEDITOR.dom.element.clearAllMarkers(b.database)) }, this, null, c), d.on("refresh", function (d) { d.data.states || (d.data.states = {}); d.data.states[b.name + "@" + c] = b.refreshJob(a, c, d.data.path) }, this, null, c); a.addFeature(b) })(this, c[a]) }) }
            }; CKEDITOR.plugins.indent.genericDefinition.prototype =
            { context: "p", exec: function () { } }; CKEDITOR.plugins.indent.specificDefinition.prototype = { execJob: function (a, c) { var e = this.jobs[c]; if (e.state != f) return e.exec.call(this, a) }, refreshJob: function (a, c, e) { c = this.jobs[c]; a.activeFilter.checkFeature(this) ? c.state = c.refresh.call(this, a, e) : c.state = f; return c.state }, getContext: function (a) { return a.contains(this.context) } }
        })(); (function () {
            function a(a) {
                function b(d) {
                    for (var f = m.startContainer, t = m.endContainer; f && !f.getParent().equals(d) ;) f = f.getParent(); for (; t &&
                    !t.getParent().equals(d) ;) t = t.getParent(); if (!f || !t) return !1; for (var p = [], v = !1; !v;) f.equals(t) && (v = !0), p.push(f), f = f.getNext(); if (1 > p.length) return !1; f = d.getParents(!0); for (t = 0; t < f.length; t++) if (f[t].getName && h[f[t].getName()]) { d = f[t]; break } for (var f = c.isIndent ? 1 : -1, t = p[0], p = p[p.length - 1], v = CKEDITOR.plugins.list.listToArray(d, g), y = v[p.getCustomData("listarray_index")].indent, t = t.getCustomData("listarray_index") ; t <= p.getCustomData("listarray_index") ; t++) if (v[t].indent += f, 0 < f) {
                        for (var z = v[t].parent,
                        A = t - 1; 0 <= A; A--) if (v[A].indent === f) { z = v[A].parent; break } v[t].parent = new CKEDITOR.dom.element(z.getName(), z.getDocument())
                    } for (t = p.getCustomData("listarray_index") + 1; t < v.length && v[t].indent > y; t++) v[t].indent += f; f = CKEDITOR.plugins.list.arrayToList(v, g, null, a.config.enterMode, d.getDirection()); if (!c.isIndent) { var q; if ((q = d.getParent()) && q.is("li")) for (var p = f.listNode.getChildren(), G = [], w, t = p.count() - 1; 0 <= t; t--) (w = p.getItem(t)) && w.is && w.is("li") && G.push(w) } f && f.listNode.replace(d); if (G && G.length) for (t =
                    0; t < G.length; t++) { for (w = d = G[t]; (w = w.getNext()) && w.is && w.getName() in h;) CKEDITOR.env.needsNbspFiller && !d.getFirst(e) && d.append(m.document.createText(" ")), d.append(w); d.insertAfter(q) } f && a.fire("contentDomInvalidated"); return !0
                } for (var c = this, g = this.database, h = this.context, m, w = a.getSelection(), w = (w && w.getRanges()).createIterator() ; m = w.getNextRange() ;) {
                    for (var q = m.getCommonAncestor() ; q && (q.type != CKEDITOR.NODE_ELEMENT || !h[q.getName()]) ;) { if (a.editable().equals(q)) { q = !1; break } q = q.getParent() } q || (q = m.startPath().contains(h)) &&
                    m.setEndAt(q, CKEDITOR.POSITION_BEFORE_END); if (!q) { var p = m.getEnclosedNode(); p && p.type == CKEDITOR.NODE_ELEMENT && p.getName() in h && (m.setStartAt(p, CKEDITOR.POSITION_AFTER_START), m.setEndAt(p, CKEDITOR.POSITION_BEFORE_END), q = p) } q && m.startContainer.type == CKEDITOR.NODE_ELEMENT && m.startContainer.getName() in h && (p = new CKEDITOR.dom.walker(m), p.evaluator = f, m.startContainer = p.next()); q && m.endContainer.type == CKEDITOR.NODE_ELEMENT && m.endContainer.getName() in h && (p = new CKEDITOR.dom.walker(m), p.evaluator = f, m.endContainer =
                    p.previous()); if (q) return b(q)
                } return 0
            } function f(a) { return a.type == CKEDITOR.NODE_ELEMENT && a.is("li") } function e(a) { return b(a) && c(a) } var b = CKEDITOR.dom.walker.whitespaces(!0), c = CKEDITOR.dom.walker.bookmark(!1, !0), m = CKEDITOR.TRISTATE_DISABLED, h = CKEDITOR.TRISTATE_OFF; CKEDITOR.plugins.add("indentlist", {
                requires: "indent", init: function (b) {
                    function d(b) {
                        c.specificDefinition.apply(this, arguments); this.requiredContent = ["ul", "ol"]; b.on("key", function (a) {
                            var d = b.elementPath(); if ("wysiwyg" == b.mode && a.data.keyCode ==
                            this.indentKey && d) { var c = this.getContext(d); !c || this.isIndent && CKEDITOR.plugins.indentList.firstItemInPath(this.context, d, c) || (b.execCommand(this.relatedGlobal), a.cancel()) }
                        }, this); this.jobs[this.isIndent ? 10 : 30] = { refresh: this.isIndent ? function (a, b) { var d = this.getContext(b), c = CKEDITOR.plugins.indentList.firstItemInPath(this.context, b, d); return d && this.isIndent && !c ? h : m } : function (a, b) { return !this.getContext(b) || this.isIndent ? m : h }, exec: CKEDITOR.tools.bind(a, this) }
                    } var c = CKEDITOR.plugins.indent; c.registerCommands(b,
                    { indentlist: new d(b, "indentlist", !0), outdentlist: new d(b, "outdentlist") }); CKEDITOR.tools.extend(d.prototype, c.specificDefinition.prototype, { context: { ol: 1, ul: 1 } })
                }
            }); CKEDITOR.plugins.indentList = {}; CKEDITOR.plugins.indentList.firstItemInPath = function (a, b, c) { var e = b.contains(f); c || (c = b.contains(a)); return c && e && e.equals(c.getFirst(f)) }
        })(); (function () {
            function a(a, b, d, c) {
                for (var e = CKEDITOR.plugins.list.listToArray(b.root, d), f = [], g = 0; g < b.contents.length; g++) {
                    var k = b.contents[g]; (k = k.getAscendant("li",
                    !0)) && !k.getCustomData("list_item_processed") && (f.push(k), CKEDITOR.dom.element.setMarker(d, k, "list_item_processed", !0))
                } for (var k = b.root.getDocument(), h, l, g = 0; g < f.length; g++) { var m = f[g].getCustomData("listarray_index"); h = e[m].parent; h.is(this.type) || (l = k.createElement(this.type), h.copyAttributes(l, { start: 1, type: 1 }), l.removeStyle("list-style-type"), e[m].parent = l) } d = CKEDITOR.plugins.list.arrayToList(e, d, null, a.config.enterMode); for (var n, e = d.listNode.getChildCount(), g = 0; g < e && (n = d.listNode.getChild(g)) ; g++) n.getName() ==
                this.type && c.push(n); d.listNode.replace(b.root); a.fire("contentDomInvalidated")
            } function f(a, b, d) {
                var c = b.contents, e = b.root.getDocument(), f = []; if (1 == c.length && c[0].equals(b.root)) { var g = e.createElement("div"); c[0].moveChildren && c[0].moveChildren(g); c[0].append(g); c[0] = g } b = b.contents[0].getParent(); for (g = 0; g < c.length; g++) b = b.getCommonAncestor(c[g].getParent()); a = a.config.useComputedState; var k, h; a = void 0 === a || a; for (g = 0; g < c.length; g++) for (var l = c[g], m; m = l.getParent() ;) {
                    if (m.equals(b)) {
                        f.push(l); !h &&
                        l.getDirection() && (h = 1); l = l.getDirection(a); null !== k && (k = k && k != l ? null : l); break
                    } l = m
                } if (!(1 > f.length)) {
                    c = f[f.length - 1].getNext(); g = e.createElement(this.type); for (d.push(g) ; f.length;) d = f.shift(), a = e.createElement("li"), l = d, l.is("pre") || q.test(l.getName()) || "false" == l.getAttribute("contenteditable") ? d.appendTo(a) : (d.copyAttributes(a), k && d.getDirection() && (a.removeStyle("direction"), a.removeAttribute("dir")), d.moveChildren(a), d.remove()), a.appendTo(g); k && h && g.setAttribute("dir", k); c ? g.insertBefore(c) :
                    g.appendTo(b)
                }
            } function e(a, b, d) {
                function c(d) { if (!(!(l = h[d ? "getFirst" : "getLast"]()) || l.is && l.isBlockBoundary() || !(m = b.root[d ? "getPrevious" : "getNext"](CKEDITOR.dom.walker.invisible(!0))) || m.is && m.isBlockBoundary({ br: 1 }))) a.document.createElement("br")[d ? "insertBefore" : "insertAfter"](l) } for (var e = CKEDITOR.plugins.list.listToArray(b.root, d), f = [], g = 0; g < b.contents.length; g++) {
                    var k = b.contents[g]; (k = k.getAscendant("li", !0)) && !k.getCustomData("list_item_processed") && (f.push(k), CKEDITOR.dom.element.setMarker(d,
                    k, "list_item_processed", !0))
                } k = null; for (g = 0; g < f.length; g++) k = f[g].getCustomData("listarray_index"), e[k].indent = -1; for (g = k + 1; g < e.length; g++) if (e[g].indent > e[g - 1].indent + 1) { f = e[g - 1].indent + 1 - e[g].indent; for (k = e[g].indent; e[g] && e[g].indent >= k;) e[g].indent += f, g++; g-- } var h = CKEDITOR.plugins.list.arrayToList(e, d, null, a.config.enterMode, b.root.getAttribute("dir")).listNode, l, m; c(!0); c(); h.replace(b.root); a.fire("contentDomInvalidated")
            } function b(a, b) {
                this.name = a; this.context = this.type = b; this.allowedContent =
                b + " li"; this.requiredContent = b
            } function c(a, b, d, c) { for (var e, f; e = a[c ? "getLast" : "getFirst"](p) ;) (f = e.getDirection(1)) !== b.getDirection(1) && e.setAttribute("dir", f), e.remove(), d ? e[c ? "insertBefore" : "insertAfter"](d) : b.append(e, c), d = e } function m(a) { function b(d) { var e = a[d ? "getPrevious" : "getNext"](r); e && e.type == CKEDITOR.NODE_ELEMENT && e.is(a.getName()) && (c(a, e, null, !d), a.remove(), a = e) } b(); b(1) } function h(a) {
                return a.type == CKEDITOR.NODE_ELEMENT && (a.getName() in CKEDITOR.dtd.$block || a.getName() in CKEDITOR.dtd.$listItem) &&
                CKEDITOR.dtd[a.getName()]["#"]
            } function l(a, b, e) {
                a.fire("saveSnapshot"); e.enlarge(CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS); var f = e.extractContents(); b.trim(!1, !0); var g = b.createBookmark(), k = new CKEDITOR.dom.elementPath(b.startContainer), h = k.block, k = k.lastElement.getAscendant("li", 1) || h, l = new CKEDITOR.dom.elementPath(e.startContainer), n = l.contains(CKEDITOR.dtd.$listItem), l = l.contains(CKEDITOR.dtd.$list); h ? (h = h.getBogus()) && h.remove() : l && (h = l.getPrevious(r)) && w(h) && h.remove(); (h = f.getLast()) && h.type == CKEDITOR.NODE_ELEMENT &&
                h.is("br") && h.remove(); (h = b.startContainer.getChild(b.startOffset)) ? f.insertBefore(h) : b.startContainer.append(f); n && (f = d(n)) && (k.contains(n) ? (c(f, n.getParent(), n), f.remove()) : k.append(f)); for (; e.checkStartOfBlock() && e.checkEndOfBlock() ;) { l = e.startPath(); f = l.block; if (!f) break; f.is("li") && (k = f.getParent(), f.equals(k.getLast(r)) && f.equals(k.getFirst(r)) && (f = k)); e.moveToPosition(f, CKEDITOR.POSITION_BEFORE_START); f.remove() } e = e.clone(); f = a.editable(); e.setEndAt(f, CKEDITOR.POSITION_BEFORE_END); e = new CKEDITOR.dom.walker(e);
                e.evaluator = function (a) { return r(a) && !w(a) }; (e = e.next()) && e.type == CKEDITOR.NODE_ELEMENT && e.getName() in CKEDITOR.dtd.$list && m(e); b.moveToBookmark(g); b.select(); a.fire("saveSnapshot")
            } function d(a) { return (a = a.getLast(r)) && a.type == CKEDITOR.NODE_ELEMENT && a.getName() in k ? a : null } var k = { ol: 1, ul: 1 }, g = CKEDITOR.dom.walker.whitespaces(), n = CKEDITOR.dom.walker.bookmark(), r = function (a) { return !(g(a) || n(a)) }, w = CKEDITOR.dom.walker.bogus(); CKEDITOR.plugins.list = {
                listToArray: function (a, b, d, c, e) {
                    if (!k[a.getName()]) return [];
                    c || (c = 0); d || (d = []); for (var f = 0, g = a.getChildCount() ; f < g; f++) {
                        var h = a.getChild(f); h.type == CKEDITOR.NODE_ELEMENT && h.getName() in CKEDITOR.dtd.$list && CKEDITOR.plugins.list.listToArray(h, b, d, c + 1); if ("li" == h.$.nodeName.toLowerCase()) {
                            var l = { parent: a, indent: c, element: h, contents: [] }; e ? l.grandparent = e : (l.grandparent = a.getParent(), l.grandparent && "li" == l.grandparent.$.nodeName.toLowerCase() && (l.grandparent = l.grandparent.getParent())); b && CKEDITOR.dom.element.setMarker(b, h, "listarray_index", d.length); d.push(l);
                            for (var m = 0, n = h.getChildCount(), p; m < n; m++) p = h.getChild(m), p.type == CKEDITOR.NODE_ELEMENT && k[p.getName()] ? CKEDITOR.plugins.list.listToArray(p, b, d, c + 1, l.grandparent) : l.contents.push(p)
                        }
                    } return d
                }, arrayToList: function (a, b, d, c, e) {
                    d || (d = 0); if (!a || a.length < d + 1) return null; for (var f, g = a[d].parent.getDocument(), h = new CKEDITOR.dom.documentFragment(g), l = null, m = d, p = Math.max(a[d].indent, 0), q = null, w, F, M = c == CKEDITOR.ENTER_P ? "p" : "div"; ;) {
                        var I = a[m]; f = I.grandparent; w = I.element.getDirection(1); if (I.indent == p) {
                            l && a[m].parent.getName() ==
                            l.getName() || (l = a[m].parent.clone(!1, 1), e && l.setAttribute("dir", e), h.append(l)); q = l.append(I.element.clone(0, 1)); w != l.getDirection(1) && q.setAttribute("dir", w); for (f = 0; f < I.contents.length; f++) q.append(I.contents[f].clone(1, 1)); m++
                        } else if (I.indent == Math.max(p, 0) + 1) I = a[m - 1].element.getDirection(1), m = CKEDITOR.plugins.list.arrayToList(a, null, m, c, I != w ? w : null), !q.getChildCount() && CKEDITOR.env.needsNbspFiller && 7 >= g.$.documentMode && q.append(g.createText(" ")), q.append(m.listNode), m = m.nextIndex; else if (-1 ==
                        I.indent && !d && f) {
                            k[f.getName()] ? (q = I.element.clone(!1, !0), w != f.getDirection(1) && q.setAttribute("dir", w)) : q = new CKEDITOR.dom.documentFragment(g); var l = f.getDirection(1) != w, K = I.element, C = K.getAttribute("class"), L = K.getAttribute("style"), Q = q.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT && (c != CKEDITOR.ENTER_BR || l || L || C), O, X = I.contents.length, T; for (f = 0; f < X; f++) if (O = I.contents[f], n(O) && 1 < X) Q ? T = O.clone(1, 1) : q.append(O.clone(1, 1)); else if (O.type == CKEDITOR.NODE_ELEMENT && O.isBlockBoundary()) {
                                l && !O.getDirection() &&
                                O.setAttribute("dir", w); F = O; var Y = K.getAttribute("style"); Y && F.setAttribute("style", Y.replace(/([^;])$/, "$1;") + (F.getAttribute("style") || "")); C && O.addClass(C); F = null; T && (q.append(T), T = null); q.append(O.clone(1, 1))
                            } else Q ? (F || (F = g.createElement(M), q.append(F), l && F.setAttribute("dir", w)), L && F.setAttribute("style", L), C && F.setAttribute("class", C), T && (F.append(T), T = null), F.append(O.clone(1, 1))) : q.append(O.clone(1, 1)); T && ((F || q).append(T), T = null); q.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT && m != a.length - 1 && (CKEDITOR.env.needsBrFiller &&
                            (w = q.getLast()) && w.type == CKEDITOR.NODE_ELEMENT && w.is("br") && w.remove(), (w = q.getLast(r)) && w.type == CKEDITOR.NODE_ELEMENT && w.is(CKEDITOR.dtd.$block) || q.append(g.createElement("br"))); w = q.$.nodeName.toLowerCase(); "div" != w && "p" != w || q.appendBogus(); h.append(q); l = null; m++
                        } else return null; F = null; if (a.length <= m || Math.max(a[m].indent, 0) < p) break
                    } if (b) for (a = h.getFirst() ; a;) {
                        if (a.type == CKEDITOR.NODE_ELEMENT && (CKEDITOR.dom.element.clearMarkers(b, a), a.getName() in CKEDITOR.dtd.$listItem && (d = a, g = e = c = void 0, c = d.getDirection()))) {
                            for (e =
                            d.getParent() ; e && !(g = e.getDirection()) ;) e = e.getParent(); c == g && d.removeAttribute("dir")
                        } a = a.getNextSourceNode()
                    } return { listNode: h, nextIndex: m }
                }
            }; var q = /^h[1-6]$/, p = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT); b.prototype = {
                exec: function (b) {
                    function d(a) { return k[a.root.getName()] && !c(a.root, [CKEDITOR.NODE_COMMENT]) } function c(a, b) { return CKEDITOR.tools.array.filter(a.getChildren().toArray(), function (a) { return -1 === CKEDITOR.tools.array.indexOf(b, a.type) }).length } function g(a) {
                        var b = !0; if (0 === a.getChildCount()) return !1;
                        a.forEach(function (a) { if (a.type !== CKEDITOR.NODE_COMMENT) return b = !1 }, null, !0); return b
                    } this.refresh(b, b.elementPath()); var h = b.config, l = b.getSelection(), n = l && l.getRanges(); if (this.state == CKEDITOR.TRISTATE_OFF) { var p = b.editable(); if (p.getFirst(r)) { var q = 1 == n.length && n[0]; (h = q && q.getEnclosedNode()) && h.is && this.type == h.getName() && this.setState(CKEDITOR.TRISTATE_ON) } else h.enterMode == CKEDITOR.ENTER_BR ? p.appendBogus() : n[0].fixBlock(1, h.enterMode == CKEDITOR.ENTER_P ? "p" : "div"), l.selectRanges(n) } for (var h =
                    l.createBookmarks(!0), p = [], w = {}, n = n.createIterator(), E = 0; (q = n.getNextRange()) && ++E;) {
                        var J = q.getBoundaryNodes(), H = J.startNode, F = J.endNode; H.type == CKEDITOR.NODE_ELEMENT && "td" == H.getName() && q.setStartAt(J.startNode, CKEDITOR.POSITION_AFTER_START); F.type == CKEDITOR.NODE_ELEMENT && "td" == F.getName() && q.setEndAt(J.endNode, CKEDITOR.POSITION_BEFORE_END); q = q.createIterator(); for (q.forceBrBreak = this.state == CKEDITOR.TRISTATE_OFF; J = q.getNextParagraph() ;) if (!J.getCustomData("list_block") && !g(J)) {
                            CKEDITOR.dom.element.setMarker(w,
                            J, "list_block", 1); for (var M = b.elementPath(J), H = M.elements, F = 0, M = M.blockLimit, I, K = H.length - 1; 0 <= K && (I = H[K]) ; K--) if (k[I.getName()] && M.contains(I)) { M.removeCustomData("list_group_object_" + E); (H = I.getCustomData("list_group_object")) ? H.contents.push(J) : (H = { root: I, contents: [J] }, p.push(H), CKEDITOR.dom.element.setMarker(w, I, "list_group_object", H)); F = 1; break } F || (F = M, F.getCustomData("list_group_object_" + E) ? F.getCustomData("list_group_object_" + E).contents.push(J) : (H = { root: F, contents: [J] }, CKEDITOR.dom.element.setMarker(w,
                            F, "list_group_object_" + E, H), p.push(H)))
                        }
                    } for (I = []; 0 < p.length;) H = p.shift(), this.state == CKEDITOR.TRISTATE_OFF ? d(H) || (k[H.root.getName()] ? a.call(this, b, H, w, I) : f.call(this, b, H, I)) : this.state == CKEDITOR.TRISTATE_ON && k[H.root.getName()] && !d(H) && e.call(this, b, H, w); for (K = 0; K < I.length; K++) m(I[K]); CKEDITOR.dom.element.clearAllMarkers(w); l.selectBookmarks(h); b.focus()
                }, refresh: function (a, b) {
                    var d = b.contains(k, 1), c = b.blockLimit || b.root; d && c.contains(d) ? this.setState(d.is(this.type) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF) :
                    this.setState(CKEDITOR.TRISTATE_OFF)
                }
            }; CKEDITOR.plugins.add("list", {
                requires: "indentlist", init: function (a) {
                    a.blockless || (a.addCommand("numberedlist", new b("numberedlist", "ol")), a.addCommand("bulletedlist", new b("bulletedlist", "ul")), a.ui.addButton && (a.ui.addButton("NumberedList", { label: a.lang.list.numberedlist, command: "numberedlist", directional: !0, toolbar: "list,10" }), a.ui.addButton("BulletedList", { label: a.lang.list.bulletedlist, command: "bulletedlist", directional: !0, toolbar: "list,20" })), a.on("key",
                    function (b) {
                        var c = b.data.domEvent.getKey(), e; if ("wysiwyg" == a.mode && c in { 8: 1, 46: 1 }) {
                            var f = a.getSelection().getRanges()[0], g = f && f.startPath(); if (f && f.collapsed) {
                                var m = 8 == c, n = a.editable(), p = new CKEDITOR.dom.walker(f.clone()); p.evaluator = function (a) { return r(a) && !w(a) }; p.guard = function (a, b) { return !(b && a.type == CKEDITOR.NODE_ELEMENT && a.is("table")) }; c = f.clone(); if (m) {
                                    var q; (q = g.contains(k)) && f.checkBoundaryOfElement(q, CKEDITOR.START) && (q = q.getParent()) && q.is("li") && (q = d(q)) ? (e = q, q = q.getPrevious(r), c.moveToPosition(q &&
                                    w(q) ? q : e, CKEDITOR.POSITION_BEFORE_START)) : (p.range.setStartAt(n, CKEDITOR.POSITION_AFTER_START), p.range.setEnd(f.startContainer, f.startOffset), (q = p.previous()) && q.type == CKEDITOR.NODE_ELEMENT && (q.getName() in k || q.is("li")) && (q.is("li") || (p.range.selectNodeContents(q), p.reset(), p.evaluator = h, q = p.previous()), e = q, c.moveToElementEditEnd(e), c.moveToPosition(c.endPath().block, CKEDITOR.POSITION_BEFORE_END))); if (e) l(a, c, f), b.cancel(); else {
                                        var E = g.contains(k); E && f.checkBoundaryOfElement(E, CKEDITOR.START) && (e =
                                        E.getFirst(r), f.checkBoundaryOfElement(e, CKEDITOR.START) && (q = E.getPrevious(r), d(e) ? q && (f.moveToElementEditEnd(q), f.select()) : a.execCommand("outdent"), b.cancel()))
                                    }
                                } else if (e = g.contains("li")) {
                                    if (p.range.setEndAt(n, CKEDITOR.POSITION_BEFORE_END), m = (n = e.getLast(r)) && h(n) ? n : e, g = 0, (q = p.next()) && q.type == CKEDITOR.NODE_ELEMENT && q.getName() in k && q.equals(n) ? (g = 1, q = p.next()) : f.checkBoundaryOfElement(m, CKEDITOR.END) && (g = 2), g && q) {
                                        f = f.clone(); f.moveToElementEditStart(q); if (1 == g && (c.optimize(), !c.startContainer.equals(e))) {
                                            for (e =
                                            c.startContainer; e.is(CKEDITOR.dtd.$inline) ;) E = e, e = e.getParent(); E && c.moveToPosition(E, CKEDITOR.POSITION_AFTER_END)
                                        } 2 == g && (c.moveToPosition(c.endPath().block, CKEDITOR.POSITION_BEFORE_END), f.endPath().block && f.moveToPosition(f.endPath().block, CKEDITOR.POSITION_AFTER_START)); l(a, c, f); b.cancel()
                                    }
                                } else p.range.setEndAt(n, CKEDITOR.POSITION_BEFORE_END), (q = p.next()) && q.type == CKEDITOR.NODE_ELEMENT && q.is(k) && (q = q.getFirst(r), g.block && f.checkStartOfBlock() && f.checkEndOfBlock() ? (g.block.remove(), f.moveToElementEditStart(q),
                                f.select()) : d(q) ? (f.moveToElementEditStart(q), f.select()) : (f = f.clone(), f.moveToElementEditStart(q), l(a, c, f)), b.cancel()); setTimeout(function () { a.selectionChange(1) })
                            }
                        }
                    }))
                }
            })
        })(); (function () {
            function a(a, b, d) { d = a.config.forceEnterMode || d; if ("wysiwyg" == a.mode) { b || (b = a.activeEnterMode); var c = a.elementPath(); c && !c.isContextFor("p") && (b = CKEDITOR.ENTER_BR, d = 1); a.fire("saveSnapshot"); b == CKEDITOR.ENTER_BR ? h(a, b, null, d) : l(a, b, null, d); a.fire("saveSnapshot") } } function f(a) {
                a = a.getSelection().getRanges(!0); for (var b =
                a.length - 1; 0 < b; b--) a[b].deleteContents(); return a[0]
            } function e(a) { var b = a.startContainer.getAscendant(function (a) { return a.type == CKEDITOR.NODE_ELEMENT && "true" == a.getAttribute("contenteditable") }, !0); if (a.root.equals(b)) return a; b = new CKEDITOR.dom.range(b); b.moveToRange(a); return b } CKEDITOR.plugins.add("enterkey", {
                init: function (b) {
                    b.addCommand("enter", { modes: { wysiwyg: 1 }, editorFocus: !1, exec: function (b) { a(b) } }); b.addCommand("shiftEnter", {
                        modes: { wysiwyg: 1 }, editorFocus: !1, exec: function (b) {
                            a(b, b.activeShiftEnterMode,
                            1)
                        }
                    }); b.setKeystroke([[13, "enter"], [CKEDITOR.SHIFT + 13, "shiftEnter"]])
                }
            }); var b = CKEDITOR.dom.walker.whitespaces(), c = CKEDITOR.dom.walker.bookmark(), m, h, l, d; CKEDITOR.plugins.enterkey = {
                enterBlock: function (a, g, l, m) {
                    function w(a) { var b; if (a === CKEDITOR.ENTER_BR || -1 === CKEDITOR.tools.indexOf(["td", "th"], x.lastElement.getName()) || 1 !== x.lastElement.getChildCount()) return !1; a = x.lastElement.getChild(0).clone(!0); (b = a.getBogus()) && b.remove(); return a.getText().length ? !1 : !0 } if (l = l || f(a)) {
                        l = e(l); var q = l.document,
                        p = l.checkStartOfBlock(), u = l.checkEndOfBlock(), x = a.elementPath(l.startContainer), t = x.block, B = g == CKEDITOR.ENTER_DIV ? "div" : "p", v; if (t && p && u) {
                            p = t.getParent(); if (p.is("li") && 1 < p.getChildCount()) { q = new CKEDITOR.dom.element("li"); v = a.createRange(); q.insertAfter(p); t.remove(); v.setStart(q, 0); a.getSelection().selectRanges([v]); return } if (t.is("li") || t.getParent().is("li")) {
                                t.is("li") || (t = t.getParent(), p = t.getParent()); v = p.getParent(); l = !t.hasPrevious(); var y = !t.hasNext(); m = a.getSelection(); var B = m.createBookmarks(),
                                z = t.getDirection(1), u = t.getAttribute("class"), A = t.getAttribute("style"), D = v.getDirection(1) != z; a = a.enterMode != CKEDITOR.ENTER_BR || D || A || u; if (v.is("li")) l || y ? (l && y && p.remove(), t[y ? "insertAfter" : "insertBefore"](v)) : t.breakParent(v); else {
                                    if (a) if (x.block.is("li") ? (v = q.createElement(g == CKEDITOR.ENTER_P ? "p" : "div"), D && v.setAttribute("dir", z), A && v.setAttribute("style", A), u && v.setAttribute("class", u), t.moveChildren(v)) : v = x.block, l || y) v[l ? "insertBefore" : "insertAfter"](p); else t.breakParent(p), v.insertAfter(p);
                                    else if (t.appendBogus(!0), l || y) for (; q = t[l ? "getFirst" : "getLast"]() ;) q[l ? "insertBefore" : "insertAfter"](p); else for (t.breakParent(p) ; q = t.getLast() ;) q.insertAfter(p); t.remove()
                                } m.selectBookmarks(B); return
                            } if (t && t.getParent().is("blockquote")) { t.breakParent(t.getParent()); t.getPrevious().getFirst(CKEDITOR.dom.walker.invisible(1)) || t.getPrevious().remove(); t.getNext().getFirst(CKEDITOR.dom.walker.invisible(1)) || t.getNext().remove(); l.moveToElementEditStart(t); l.select(); return }
                        } else if (t && t.is("pre") &&
                        !u) { h(a, g, l, m); return } if (A = l.splitBlock(B)) {
                            a = A.previousBlock; t = A.nextBlock; p = A.wasStartOfBlock; u = A.wasEndOfBlock; t ? (y = t.getParent(), y.is("li") && (t.breakParent(y), t.move(t.getNext(), 1))) : a && (y = a.getParent()) && y.is("li") && (a.breakParent(y), y = a.getNext(), l.moveToElementEditStart(y), a.move(a.getPrevious())); if (p || u) if (w(g)) l.moveToElementEditStart(l.getTouchedStartNode()); else {
                                if (a) { if (a.is("li") || !d.test(a.getName()) && !a.is("pre")) v = a.clone() } else t && (v = t.clone()); v ? m && !v.is("li") && v.renameNode(B) :
                                y && y.is("li") ? v = y : (v = q.createElement(B), a && (z = a.getDirection()) && v.setAttribute("dir", z)); if (q = A.elementPath) for (g = 0, m = q.elements.length; g < m; g++) { B = q.elements[g]; if (B.equals(q.block) || B.equals(q.blockLimit)) break; CKEDITOR.dtd.$removeEmpty[B.getName()] && (B = B.clone(), v.moveChildren(B), v.append(B)) } v.appendBogus(); v.getParent() || l.insertNode(v); v.is("li") && v.removeAttribute("value"); !CKEDITOR.env.ie || !p || u && a.getChildCount() || (l.moveToElementEditStart(u ? a : v), l.select()); l.moveToElementEditStart(p && !u ?
                                    t : v)
                            } else t.is("li") && (v = l.clone(), v.selectNodeContents(t), v = new CKEDITOR.dom.walker(v), v.evaluator = function (a) { return !(c(a) || b(a) || a.type == CKEDITOR.NODE_ELEMENT && a.getName() in CKEDITOR.dtd.$inline && !(a.getName() in CKEDITOR.dtd.$empty)) }, (y = v.next()) && y.type == CKEDITOR.NODE_ELEMENT && y.is("ul", "ol") && (CKEDITOR.env.needsBrFiller ? q.createElement("br") : q.createText(" ")).insertBefore(y)), t && l.moveToElementEditStart(t); l.select(); l.scrollIntoView()
                        }
                    }
                }, enterBr: function (a, b, c, e) {
                    if (c = c || f(a)) {
                        var h = c.document,
                        m = c.checkEndOfBlock(), p = new CKEDITOR.dom.elementPath(a.getSelection().getStartElement()), u = p.block, x = u && p.block.getName(); e || "li" != x ? (!e && m && d.test(x) ? (m = u.getDirection()) ? (h = h.createElement("div"), h.setAttribute("dir", m), h.insertAfter(u), c.setStart(h, 0)) : (h.createElement("br").insertAfter(u), CKEDITOR.env.gecko && h.createText("").insertAfter(u), c.setStartAt(u.getNext(), CKEDITOR.env.ie ? CKEDITOR.POSITION_BEFORE_START : CKEDITOR.POSITION_AFTER_START)) : (a = "pre" == x && CKEDITOR.env.ie && 8 > CKEDITOR.env.version ?
                        h.createText("\r") : h.createElement("br"), c.deleteContents(), c.insertNode(a), CKEDITOR.env.needsBrFiller ? (h.createText("﻿").insertAfter(a), m && (u || p.blockLimit).appendBogus(), a.getNext().$.nodeValue = "", c.setStartAt(a.getNext(), CKEDITOR.POSITION_AFTER_START)) : c.setStartAt(a, CKEDITOR.POSITION_AFTER_END)), c.collapse(!0), c.select(), c.scrollIntoView()) : l(a, b, c, e)
                    }
                }
            }; m = CKEDITOR.plugins.enterkey; h = m.enterBr; l = m.enterBlock; d = /^h[1-6]$/
        })(); (function () {
            function a(a, e) {
                var b = {}, c = [], m = {
                    nbsp: " ", shy: "­", gt: "\x3e",
                    lt: "\x3c", amp: "\x26", apos: "'", quot: '"'
                }; a = a.replace(/\b(nbsp|shy|gt|lt|amp|apos|quot)(?:,|$)/g, function (a, d) { var f = e ? "\x26" + d + ";" : m[d]; b[f] = e ? m[d] : "\x26" + d + ";"; c.push(f); return "" }); a = a.replace(/,$/, ""); if (!e && a) { a = a.split(","); var h = document.createElement("div"), l; h.innerHTML = "\x26" + a.join(";\x26") + ";"; l = h.innerHTML; h = null; for (h = 0; h < l.length; h++) { var d = l.charAt(h); b[d] = "\x26" + a[h] + ";"; c.push(d) } } b.regex = c.join(e ? "|" : ""); return b
            } CKEDITOR.plugins.add("entities", {
                afterInit: function (f) {
                    function e(a) { return d[a] }
                    function b(a) { return "force" != c.entities_processNumerical && h[a] ? h[a] : "\x26#" + a.charCodeAt(0) + ";" } var c = f.config; if (f = (f = f.dataProcessor) && f.htmlFilter) {
                        var m = []; !1 !== c.basicEntities && m.push("nbsp,gt,lt,amp"); c.entities && (m.length && m.push("quot,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,middot,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,times,divide,fnof,bull,hellip,prime,Prime,oline,frasl,weierp,image,real,trade,alefsym,larr,uarr,rarr,darr,harr,crarr,lArr,uArr,rArr,dArr,hArr,forall,part,exist,empty,nabla,isin,notin,ni,prod,sum,minus,lowast,radic,prop,infin,ang,and,or,cap,cup,int,there4,sim,cong,asymp,ne,equiv,le,ge,sub,sup,nsub,sube,supe,oplus,otimes,perp,sdot,lceil,rceil,lfloor,rfloor,lang,rang,loz,spades,clubs,hearts,diams,circ,tilde,ensp,emsp,thinsp,zwnj,zwj,lrm,rlm,ndash,mdash,lsquo,rsquo,sbquo,ldquo,rdquo,bdquo,dagger,Dagger,permil,lsaquo,rsaquo,euro"),
                        c.entities_latin && m.push("Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml,OElig,oelig,Scaron,scaron,Yuml"), c.entities_greek && m.push("Alpha,Beta,Gamma,Delta,Epsilon,Zeta,Eta,Theta,Iota,Kappa,Lambda,Mu,Nu,Xi,Omicron,Pi,Rho,Sigma,Tau,Upsilon,Phi,Chi,Psi,Omega,alpha,beta,gamma,delta,epsilon,zeta,eta,theta,iota,kappa,lambda,mu,nu,xi,omicron,pi,rho,sigmaf,sigma,tau,upsilon,phi,chi,psi,omega,thetasym,upsih,piv"),
                        c.entities_additional && m.push(c.entities_additional)); var h = a(m.join(",")), l = h.regex ? "[" + h.regex + "]" : "a^"; delete h.regex; c.entities && c.entities_processNumerical && (l = "[^ -~]|" + l); var l = new RegExp(l, "g"), d = a("nbsp,gt,lt,amp,shy", !0), k = new RegExp(d.regex, "g"); f.addRules({ text: function (a) { return a.replace(k, e).replace(l, b) } }, { applyToAll: !0, excludeNestedEditable: !0 })
                    }
                }
            })
        })(); CKEDITOR.config.basicEntities = !0; CKEDITOR.config.entities = !0; CKEDITOR.config.entities_latin = !0; CKEDITOR.config.entities_greek = !0;
        CKEDITOR.config.entities_additional = "#39"; CKEDITOR.plugins.add("popup"); CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
            popup: function (a, f, e, b) {
                f = f || "80%"; e = e || "70%"; "string" == typeof f && 1 < f.length && "%" == f.substr(f.length - 1, 1) && (f = parseInt(window.screen.width * parseInt(f, 10) / 100, 10)); "string" == typeof e && 1 < e.length && "%" == e.substr(e.length - 1, 1) && (e = parseInt(window.screen.height * parseInt(e, 10) / 100, 10)); 640 > f && (f = 640); 420 > e && (e = 420); var c = parseInt((window.screen.height - e) / 2, 10), m = parseInt((window.screen.width -
                f) / 2, 10); b = (b || "location\x3dno,menubar\x3dno,toolbar\x3dno,dependent\x3dyes,minimizable\x3dno,modal\x3dyes,alwaysRaised\x3dyes,resizable\x3dyes,scrollbars\x3dyes") + ",width\x3d" + f + ",height\x3d" + e + ",top\x3d" + c + ",left\x3d" + m; var h = window.open("", null, b, !0); if (!h) return !1; try { -1 == navigator.userAgent.toLowerCase().indexOf(" chrome/") && (h.moveTo(m, c), h.resizeTo(f, e)), h.focus(), h.location.href = a } catch (l) { window.open(a, null, b, !0) } return !0
            }
        }); "use strict"; (function () {
            function a(a) {
                this.editor = a; this.loaders =
                []
            } function f(a, b, f) { var l = a.config.fileTools_defaultFileName; this.editor = a; this.lang = a.lang; "string" === typeof b ? (this.data = b, this.file = e(this.data), this.loaded = this.total = this.file.size) : (this.data = null, this.file = b, this.total = this.file.size, this.loaded = 0); f ? this.fileName = f : this.file.name ? this.fileName = this.file.name : (a = this.file.type.split("/"), l && (a[0] = l), this.fileName = a.join(".")); this.uploaded = 0; this.responseData = this.uploadTotal = null; this.status = "created"; this.abort = function () { this.changeStatus("abort") } }
            function e(a) { var e = a.match(b)[1]; a = a.replace(b, ""); a = atob(a); var f = [], l, d, k, g; for (l = 0; l < a.length; l += 512) { d = a.slice(l, l + 512); k = Array(d.length); for (g = 0; g < d.length; g++) k[g] = d.charCodeAt(g); d = new Uint8Array(k); f.push(d) } return new Blob(f, { type: e }) } CKEDITOR.plugins.add("filetools", {
                beforeInit: function (b) {
                    b.uploadRepository = new a(b); b.on("fileUploadRequest", function (a) { var b = a.data.fileLoader; b.xhr.open("POST", b.uploadUrl, !0); a.data.requestData.upload = { file: b.file, name: b.fileName } }, null, null, 5); b.on("fileUploadRequest",
                    function (a) { var e = a.data.fileLoader, f = new FormData; a = a.data.requestData; var d = b.config.fileTools_requestHeaders, k, g; for (g in a) { var n = a[g]; "object" === typeof n && n.file ? f.append(g, n.file, n.name) : f.append(g, n) } f.append("ckCsrfToken", CKEDITOR.tools.getCsrfToken()); if (d) for (k in d) e.xhr.setRequestHeader(k, d[k]); e.xhr.send(f) }, null, null, 999); b.on("fileUploadResponse", function (a) {
                        var b = a.data.fileLoader, c = b.xhr, d = a.data; try {
                            var e = JSON.parse(c.responseText); e.error && e.error.message && (d.message = e.error.message);
                            if (e.uploaded) for (var f in e) d[f] = e[f]; else a.cancel()
                        } catch (n) { d.message = b.lang.filetools.responseError, CKEDITOR.warn("filetools-response-error", { responseText: c.responseText }), a.cancel() }
                    }, null, null, 999)
                }
            }); a.prototype = { create: function (a, b, e) { e = e || f; var l = this.loaders.length; a = new e(this.editor, a, b); a.id = l; this.loaders[l] = a; this.fire("instanceCreated", a); return a }, isFinished: function () { for (var a = 0; a < this.loaders.length; ++a) if (!this.loaders[a].isFinished()) return !1; return !0 } }; f.prototype = {
                loadAndUpload: function (a,
                b) { var e = this; this.once("loaded", function (f) { f.cancel(); e.once("update", function (a) { a.cancel() }, null, null, 0); e.upload(a, b) }, null, null, 0); this.load() }, load: function () {
                    var a = this, b = this.reader = new FileReader; a.changeStatus("loading"); this.abort = function () { a.reader.abort() }; b.onabort = function () { a.changeStatus("abort") }; b.onerror = function () { a.message = a.lang.filetools.loadError; a.changeStatus("error") }; b.onprogress = function (b) { a.loaded = b.loaded; a.update() }; b.onload = function () {
                        a.loaded = a.total; a.data = b.result;
                        a.changeStatus("loaded")
                    }; b.readAsDataURL(this.file)
                }, upload: function (a, b) { var e = b || {}; a ? (this.uploadUrl = a, this.xhr = new XMLHttpRequest, this.attachRequestListeners(), this.editor.fire("fileUploadRequest", { fileLoader: this, requestData: e }) && this.changeStatus("uploading")) : (this.message = this.lang.filetools.noUrlError, this.changeStatus("error")) }, attachRequestListeners: function () {
                    function a() { "error" != e.status && (e.message = e.lang.filetools.networkError, e.changeStatus("error")) } function b() {
                        "abort" != e.status &&
                        e.changeStatus("abort")
                    } var e = this, f = this.xhr; e.abort = function () { f.abort(); b() }; f.onerror = a; f.onabort = b; f.upload ? (f.upload.onprogress = function (a) { a.lengthComputable && (e.uploadTotal || (e.uploadTotal = a.total), e.uploaded = a.loaded, e.update()) }, f.upload.onerror = a, f.upload.onabort = b) : (e.uploadTotal = e.total, e.update()); f.onload = function () {
                        e.update(); if ("abort" != e.status) if (e.uploaded = e.uploadTotal, 200 > f.status || 299 < f.status) e.message = e.lang.filetools["httpError" + f.status], e.message || (e.message = e.lang.filetools.httpError.replace("%1",
                        f.status)), e.changeStatus("error"); else { for (var a = { fileLoader: e }, b = ["message", "fileName", "url"], c = e.editor.fire("fileUploadResponse", a), m = 0; m < b.length; m++) { var r = b[m]; "string" === typeof a[r] && (e[r] = a[r]) } e.responseData = a; delete e.responseData.fileLoader; !1 === c ? e.changeStatus("error") : e.changeStatus("uploaded") }
                    }
                }, changeStatus: function (a) { this.status = a; if ("error" == a || "abort" == a || "loaded" == a || "uploaded" == a) this.abort = function () { }; this.fire(a); this.update() }, update: function () { this.fire("update") }, isFinished: function () { return !!this.status.match(/^(?:loaded|uploaded|error|abort)$/) }
            };
            CKEDITOR.event.implementOn(a.prototype); CKEDITOR.event.implementOn(f.prototype); var b = /^data:(\S*?);base64,/; CKEDITOR.fileTools || (CKEDITOR.fileTools = {}); CKEDITOR.tools.extend(CKEDITOR.fileTools, {
                uploadRepository: a, fileLoader: f, getUploadUrl: function (a, b) {
                    var e = CKEDITOR.tools.capitalize; return b && a[b + "UploadUrl"] ? a[b + "UploadUrl"] : a.uploadUrl ? a.uploadUrl : b && a["filebrowser" + e(b, 1) + "UploadUrl"] ? a["filebrowser" + e(b, 1) + "UploadUrl"] + "\x26responseType\x3djson" : a.filebrowserUploadUrl ? a.filebrowserUploadUrl +
                    "\x26responseType\x3djson" : null
                }, isTypeSupported: function (a, b) { return !!a.type.match(b) }, isFileUploadSupported: "function" === typeof FileReader && "function" === typeof (new FileReader).readAsDataURL && "function" === typeof FormData && "function" === typeof (new FormData).append && "function" === typeof XMLHttpRequest && "function" === typeof Blob
            })
        })(); (function () {
            function a(a, b) { var d = []; if (b) for (var c in b) d.push(c + "\x3d" + encodeURIComponent(b[c])); else return a; return a + (-1 != a.indexOf("?") ? "\x26" : "?") + d.join("\x26") }
            function f(b) { return !b.match(/command=QuickUpload/) || b.match(/(\?|&)responseType=json/) ? b : a(b, { responseType: "json" }) } function e(a) { a += ""; return a.charAt(0).toUpperCase() + a.substr(1) } function b() {
                var b = this.getDialog(), d = b.getParentEditor(); d._.filebrowserSe = this; var c = d.config["filebrowser" + e(b.getName()) + "WindowWidth"] || d.config.filebrowserWindowWidth || "80%", b = d.config["filebrowser" + e(b.getName()) + "WindowHeight"] || d.config.filebrowserWindowHeight || "70%", f = this.filebrowser.params || {}; f.CKEditor = d.name;
                f.CKEditorFuncNum = d._.filebrowserFn; f.langCode || (f.langCode = d.langCode); f = a(this.filebrowser.url, f); d.popup(f, c, b, d.config.filebrowserWindowFeatures || d.config.fileBrowserWindowFeatures)
            } function c(a) { var b = new CKEDITOR.dom.element(a.$.form); b && ((a = b.$.elements.ckCsrfToken) ? a = new CKEDITOR.dom.element(a) : (a = new CKEDITOR.dom.element("input"), a.setAttributes({ name: "ckCsrfToken", type: "hidden" }), b.append(a)), a.setAttribute("value", CKEDITOR.tools.getCsrfToken())) } function m() {
                var a = this.getDialog(); a.getParentEditor()._.filebrowserSe =
                this; return a.getContentElement(this["for"][0], this["for"][1]).getInputElement().$.value && a.getContentElement(this["for"][0], this["for"][1]).getAction() ? !0 : !1
            } function h(b, d, c) { var e = c.params || {}; e.CKEditor = b.name; e.CKEditorFuncNum = b._.filebrowserFn; e.langCode || (e.langCode = b.langCode); d.action = a(c.url, e); d.filebrowser = c } function l(a, k, w, q) {
                if (q && q.length) for (var p, u = q.length; u--;) if (p = q[u], "hbox" != p.type && "vbox" != p.type && "fieldset" != p.type || l(a, k, w, p.children), p.filebrowser) if ("string" == typeof p.filebrowser &&
                (p.filebrowser = { action: "fileButton" == p.type ? "QuickUpload" : "Browse", target: p.filebrowser }), "Browse" == p.filebrowser.action) { var x = p.filebrowser.url; void 0 === x && (x = a.config["filebrowser" + e(k) + "BrowseUrl"], void 0 === x && (x = a.config.filebrowserBrowseUrl)); x && (p.onClick = b, p.filebrowser.url = x, p.hidden = !1) } else if ("QuickUpload" == p.filebrowser.action && p["for"] && (x = p.filebrowser.url, void 0 === x && (x = a.config["filebrowser" + e(k) + "UploadUrl"], void 0 === x && (x = a.config.filebrowserUploadUrl)), x)) {
                    var t = p.onClick; p.onClick =
                    function (b) {
                        var e = b.sender, k = e.getDialog().getContentElement(this["for"][0], this["for"][1]).getInputElement(), h = CKEDITOR.fileTools && CKEDITOR.fileTools.isFileUploadSupported; if (t && !1 === t.call(e, b)) return !1; if (m.call(e, b)) {
                            if ("form" !== a.config.filebrowserUploadMethod && h) return b = a.uploadRepository.create(k.$.files[0]), b.on("uploaded", function (a) { var b = a.sender.responseData; g.call(a.sender.editor, b.url, b.message) }), b.on("error", d.bind(this)), b.on("abort", d.bind(this)), b.loadAndUpload(f(x)), "xhr"; c(k);
                            return !0
                        } return !1
                    }; p.filebrowser.url = x; p.hidden = !1; h(a, w.getContents(p["for"][0]).get(p["for"][1]), p.filebrowser)
                }
            } function d(a) { var b = {}; try { b = JSON.parse(a.sender.xhr.response) || {} } catch (d) { } this.enable(); alert(b.error ? b.error.message : a.sender.message) } function k(a, b, d) { if (-1 !== d.indexOf(";")) { d = d.split(";"); for (var c = 0; c < d.length; c++) if (k(a, b, d[c])) return !0; return !1 } return (a = a.getContents(b).get(d).filebrowser) && a.url } function g(a, b) {
                var d = this._.filebrowserSe.getDialog(), c = this._.filebrowserSe["for"],
                e = this._.filebrowserSe.filebrowser.onSelect; c && d.getContentElement(c[0], c[1]).reset(); if ("function" != typeof b || !1 !== b.call(this._.filebrowserSe)) if (!e || !1 !== e.call(this._.filebrowserSe, a, b)) if ("string" == typeof b && b && alert(b), a && (c = this._.filebrowserSe, d = c.getDialog(), c = c.filebrowser.target || null)) if (c = c.split(":"), e = d.getContentElement(c[0], c[1])) e.setValue(a), d.selectPage(c[0])
            } CKEDITOR.plugins.add("filebrowser", {
                requires: "popup,filetools", init: function (a) {
                    a._.filebrowserFn = CKEDITOR.tools.addFunction(g,
                    a); a.on("destroy", function () { CKEDITOR.tools.removeFunction(this._.filebrowserFn) })
                }
            }); CKEDITOR.on("dialogDefinition", function (a) { if (a.editor.plugins.filebrowser) for (var b = a.data.definition, d, c = 0; c < b.contents.length; ++c) if (d = b.contents[c]) l(a.editor, a.data.name, b, d.elements), d.hidden && d.filebrowser && (d.hidden = !k(b, d.id, d.filebrowser)) })
        })(); (function () {
            function a(a) {
                var c = a.config, m = a.fire("uiSpace", { space: "top", html: "" }).html, h = function () {
                    function g(a, b, c) {
                        d.setStyle(b, e(c)); d.setStyle("position",
                        a)
                    } function k(a) { var b = m.getDocumentPosition(); switch (a) { case "top": g("absolute", "top", b.y - t - y); break; case "pin": g("fixed", "top", A); break; case "bottom": g("absolute", "top", b.y + (u.height || u.bottom - u.top) + y) } l = a } var l, m, p, u, x, t, B, v = c.floatSpaceDockedOffsetX || 0, y = c.floatSpaceDockedOffsetY || 0, z = c.floatSpacePinnedOffsetX || 0, A = c.floatSpacePinnedOffsetY || 0; return function (g) {
                        if (m = a.editable()) {
                            var n = g && "focus" == g.name; n && d.show(); a.fire("floatingSpaceLayout", { show: n }); d.removeStyle("left"); d.removeStyle("right");
                            p = d.getClientRect(); u = m.getClientRect(); x = f.getViewPaneSize(); t = p.height; B = "pageXOffset" in f.$ ? f.$.pageXOffset : CKEDITOR.document.$.documentElement.scrollLeft; l ? (t + y <= u.top ? k("top") : t + y > x.height - u.bottom ? k("pin") : k("bottom"), g = x.width / 2, g = c.floatSpacePreferRight ? "right" : 0 < u.left && u.right < x.width && u.width > p.width ? "rtl" == c.contentsLangDirection ? "right" : "left" : g - u.left > u.right - g ? "left" : "right", p.width > x.width ? (g = "left", n = 0) : (n = "left" == g ? 0 < u.left ? u.left : 0 : u.right < x.width ? x.width - u.right : 0, n + p.width > x.width &&
                            (g = "left" == g ? "right" : "left", n = 0)), d.setStyle(g, e(("pin" == l ? z : v) + n + ("pin" == l ? 0 : "left" == g ? B : -B)))) : (l = "pin", k("pin"), h(g))
                        }
                    }
                }(); if (m) {
                    var l = new CKEDITOR.template('\x3cdiv id\x3d"cke_{name}" class\x3d"cke {id} cke_reset_all cke_chrome cke_editor_{name} cke_float cke_{langDir} ' + CKEDITOR.env.cssClass + '" dir\x3d"{langDir}" title\x3d"' + (CKEDITOR.env.gecko ? " " : "") + '" lang\x3d"{langCode}" role\x3d"application" style\x3d"{style}"' + (a.title ? ' aria-labelledby\x3d"cke_{name}_arialbl"' : " ") + "\x3e" + (a.title ? '\x3cspan id\x3d"cke_{name}_arialbl" class\x3d"cke_voice_label"\x3e{voiceLabel}\x3c/span\x3e' :
                    " ") + '\x3cdiv class\x3d"cke_inner"\x3e\x3cdiv id\x3d"{topId}" class\x3d"cke_top" role\x3d"presentation"\x3e{content}\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'), d = CKEDITOR.document.getBody().append(CKEDITOR.dom.element.createFromHtml(l.output({ content: m, id: a.id, langDir: a.lang.dir, langCode: a.langCode, name: a.name, style: "display:none;z-index:" + (c.baseFloatZIndex - 1), topId: a.ui.spaceId("top"), voiceLabel: a.title }))), k = CKEDITOR.tools.eventsBuffer(500, h), g = CKEDITOR.tools.eventsBuffer(100, h); d.unselectable(); d.on("mousedown",
                    function (a) { a = a.data; a.getTarget().hasAscendant("a", 1) || a.preventDefault() }); a.on("focus", function (d) { h(d); a.on("change", k.input); f.on("scroll", g.input); f.on("resize", g.input) }); a.on("blur", function () { d.hide(); a.removeListener("change", k.input); f.removeListener("scroll", g.input); f.removeListener("resize", g.input) }); a.on("destroy", function () { f.removeListener("scroll", g.input); f.removeListener("resize", g.input); d.clearCustomData(); d.remove() }); a.focusManager.hasFocus && d.show(); a.focusManager.add(d,
                    1)
                }
            } var f = CKEDITOR.document.getWindow(), e = CKEDITOR.tools.cssLength; CKEDITOR.plugins.add("floatingspace", { init: function (b) { b.on("loaded", function () { a(this) }, null, null, 20) } })
        })(); CKEDITOR.plugins.add("listblock", {
            requires: "panel", onLoad: function () {
                var a = CKEDITOR.addTemplate("panel-list", '\x3cul role\x3d"presentation" class\x3d"cke_panel_list"\x3e{items}\x3c/ul\x3e'), f = CKEDITOR.addTemplate("panel-list-item", '\x3cli id\x3d"{id}" class\x3d"cke_panel_listItem" role\x3dpresentation\x3e\x3ca id\x3d"{id}_option" _cke_focus\x3d1 hidefocus\x3dtrue title\x3d"{title}" draggable\x3d"false" ondragstart\x3d"return false;" href\x3d"javascript:void(\'{val}\')"  onclick\x3d"{onclick}CKEDITOR.tools.callFunction({clickFn},\'{val}\'); return false;" role\x3d"option"\x3e{text}\x3c/a\x3e\x3c/li\x3e'),
                e = CKEDITOR.addTemplate("panel-list-group", '\x3ch1 id\x3d"{id}" draggable\x3d"false" ondragstart\x3d"return false;" class\x3d"cke_panel_grouptitle" role\x3d"presentation" \x3e{label}\x3c/h1\x3e'), b = /\'/g; CKEDITOR.ui.panel.prototype.addListBlock = function (a, b) { return this.addBlock(a, new CKEDITOR.ui.listBlock(this.getHolderElement(), b)) }; CKEDITOR.ui.listBlock = CKEDITOR.tools.createClass({
                    base: CKEDITOR.ui.panel.block, $: function (a, b) {
                        b = b || {}; var e = b.attributes || (b.attributes = {}); (this.multiSelect = !!b.multiSelect) &&
                        (e["aria-multiselectable"] = !0); !e.role && (e.role = "listbox"); this.base.apply(this, arguments); this.element.setAttribute("role", e.role); e = this.keys; e[40] = "next"; e[9] = "next"; e[38] = "prev"; e[CKEDITOR.SHIFT + 9] = "prev"; e[32] = CKEDITOR.env.ie ? "mouseup" : "click"; CKEDITOR.env.ie && (e[13] = "mouseup"); this._.pendingHtml = []; this._.pendingList = []; this._.items = {}; this._.groups = {}
                    }, _: {
                        close: function () {
                            if (this._.started) {
                                var b = a.output({ items: this._.pendingList.join("") }); this._.pendingList = []; this._.pendingHtml.push(b);
                                delete this._.started
                            }
                        }, getClick: function () { this._.click || (this._.click = CKEDITOR.tools.addFunction(function (a) { var b = this.toggle(a); if (this.onClick) this.onClick(a, b) }, this)); return this._.click }
                    }, proto: {
                        add: function (a, e, h) {
                            var l = CKEDITOR.tools.getNextId(); this._.started || (this._.started = 1, this._.size = this._.size || 0); this._.items[a] = l; var d; d = CKEDITOR.tools.htmlEncodeAttr(a).replace(b, "\\'"); a = {
                                id: l, val: d, onclick: CKEDITOR.env.ie ? 'return false;" onmouseup\x3d"CKEDITOR.tools.getMouseButton(event)\x3d\x3d\x3dCKEDITOR.MOUSE_BUTTON_LEFT\x26\x26' :
                                "", clickFn: this._.getClick(), title: CKEDITOR.tools.htmlEncodeAttr(h || a), text: e || a
                            }; this._.pendingList.push(f.output(a))
                        }, startGroup: function (a) { this._.close(); var b = CKEDITOR.tools.getNextId(); this._.groups[a] = b; this._.pendingHtml.push(e.output({ id: b, label: a })) }, commit: function () { this._.close(); this.element.appendHtml(this._.pendingHtml.join("")); delete this._.size; this._.pendingHtml = [] }, toggle: function (a) { var b = this.isMarked(a); b ? this.unmark(a) : this.mark(a); return !b }, hideGroup: function (a) {
                            var b = (a =
                            this.element.getDocument().getById(this._.groups[a])) && a.getNext(); a && (a.setStyle("display", "none"), b && "ul" == b.getName() && b.setStyle("display", "none"))
                        }, hideItem: function (a) { this.element.getDocument().getById(this._.items[a]).setStyle("display", "none") }, showAll: function () {
                            var a = this._.items, b = this._.groups, e = this.element.getDocument(), f; for (f in a) e.getById(a[f]).setStyle("display", ""); for (var d in b) a = e.getById(b[d]), f = a.getNext(), a.setStyle("display", ""), f && "ul" == f.getName() && f.setStyle("display",
                            "")
                        }, mark: function (a) { this.multiSelect || this.unmarkAll(); a = this._.items[a]; var b = this.element.getDocument().getById(a); b.addClass("cke_selected"); this.element.getDocument().getById(a + "_option").setAttribute("aria-selected", !0); this.onMark && this.onMark(b) }, markFirstDisplayed: function () { var a = this; this._.markFirstDisplayed(function () { a.multiSelect || a.unmarkAll() }) }, unmark: function (a) {
                            var b = this.element.getDocument(); a = this._.items[a]; var e = b.getById(a); e.removeClass("cke_selected"); b.getById(a + "_option").removeAttribute("aria-selected");
                            this.onUnmark && this.onUnmark(e)
                        }, unmarkAll: function () { var a = this._.items, b = this.element.getDocument(), e; for (e in a) { var f = a[e]; b.getById(f).removeClass("cke_selected"); b.getById(f + "_option").removeAttribute("aria-selected") } this.onUnmark && this.onUnmark() }, isMarked: function (a) { return this.element.getDocument().getById(this._.items[a]).hasClass("cke_selected") }, focus: function (a) {
                            this._.focusIndex = -1; var b = this.element.getElementsByTag("a"), e, f = -1; if (a) for (e = this.element.getDocument().getById(this._.items[a]).getFirst() ; a =
                            b.getItem(++f) ;) { if (a.equals(e)) { this._.focusIndex = f; break } } else this.element.focus(); e && setTimeout(function () { e.focus() }, 0)
                        }
                    }
                })
            }
        }); CKEDITOR.plugins.add("richcombo", { requires: "floatpanel,listblock,button", beforeInit: function (a) { a.ui.addHandler(CKEDITOR.UI_RICHCOMBO, CKEDITOR.ui.richCombo.handler) } }); (function () {
            var a = '\x3cspan id\x3d"{id}" class\x3d"cke_combo cke_combo__{name} {cls}" role\x3d"presentation"\x3e\x3cspan id\x3d"{id}_label" class\x3d"cke_combo_label"\x3e{label}\x3c/span\x3e\x3ca class\x3d"cke_combo_button" title\x3d"{title}" tabindex\x3d"-1"' +
            (CKEDITOR.env.gecko && !CKEDITOR.env.hc ? "" : " href\x3d\"javascript:void('{titleJs}')\"") + ' hidefocus\x3d"true" role\x3d"button" aria-labelledby\x3d"{id}_label" aria-haspopup\x3d"listbox"', f = ""; CKEDITOR.env.gecko && CKEDITOR.env.mac && (a += ' onkeypress\x3d"return false;"'); CKEDITOR.env.gecko && (a += ' onblur\x3d"this.style.cssText \x3d this.style.cssText;"'); CKEDITOR.env.ie && (f = 'return false;" onmouseup\x3d"CKEDITOR.tools.getMouseButton(event)\x3d\x3dCKEDITOR.MOUSE_BUTTON_LEFT\x26\x26'); var a = a + (' onkeydown\x3d"return CKEDITOR.tools.callFunction({keydownFn},event,this);" onfocus\x3d"return CKEDITOR.tools.callFunction({focusFn},event);" onclick\x3d"' +
            f + 'CKEDITOR.tools.callFunction({clickFn},this);return false;"\x3e\x3cspan id\x3d"{id}_text" class\x3d"cke_combo_text cke_combo_inlinelabel"\x3e{label}\x3c/span\x3e\x3cspan class\x3d"cke_combo_open"\x3e\x3cspan class\x3d"cke_combo_arrow"\x3e' + (CKEDITOR.env.hc ? "\x26#9660;" : CKEDITOR.env.air ? "\x26nbsp;" : "") + "\x3c/span\x3e\x3c/span\x3e\x3c/a\x3e\x3c/span\x3e"), e = CKEDITOR.addTemplate("combo", a); CKEDITOR.UI_RICHCOMBO = "richcombo"; CKEDITOR.ui.richCombo = CKEDITOR.tools.createClass({
                $: function (a) {
                    CKEDITOR.tools.extend(this,
                    a, { canGroup: !1, title: a.label, modes: { wysiwyg: 1 }, editorFocus: 1 }); a = this.panel || {}; delete this.panel; this.id = CKEDITOR.tools.getNextNumber(); this.document = a.parent && a.parent.getDocument() || CKEDITOR.document; a.className = "cke_combopanel"; a.block = { multiSelect: a.multiSelect, attributes: a.attributes }; a.toolbarRelated = !0; this._ = { panelDefinition: a, items: {}, listeners: [] }
                }, proto: {
                    renderHtml: function (a) { var c = []; this.render(a, c); return c.join("") }, render: function (a, c) {
                        function f() {
                            if (this.getState() != CKEDITOR.TRISTATE_ON) {
                                var d =
                                this.modes[a.mode] ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED; a.readOnly && !this.readOnly && (d = CKEDITOR.TRISTATE_DISABLED); this.setState(d); this.setValue(""); d != CKEDITOR.TRISTATE_DISABLED && this.refresh && this.refresh()
                            }
                        } var h = CKEDITOR.env, l, d, k = "cke_" + this.id, g = CKEDITOR.tools.addFunction(function (c) { d && (a.unlockSelection(1), d = 0); l.execute(c) }, this), n = this; l = {
                            id: k, combo: this, focus: function () { CKEDITOR.document.getById(k).getChild(1).focus() }, execute: function (d) {
                                var c = n._; if (c.state != CKEDITOR.TRISTATE_DISABLED) if (n.createPanel(a),
                                c.on) c.panel.hide(); else { n.commit(); var e = n.getValue(); e ? c.list.mark(e) : c.list.unmarkAll(); c.panel.showBlock(n.id, new CKEDITOR.dom.element(d), 4) }
                            }, clickFn: g
                        }; this._.listeners.push(a.on("activeFilterChange", f, this)); this._.listeners.push(a.on("mode", f, this)); this._.listeners.push(a.on("selectionChange", f, this)); !this.readOnly && this._.listeners.push(a.on("readOnly", f, this)); var r = CKEDITOR.tools.addFunction(function (a, b) {
                            a = new CKEDITOR.dom.event(a); var d = a.getKeystroke(); switch (d) {
                                case 13: case 32: case 40: CKEDITOR.tools.callFunction(g,
                                b); break; default: l.onkey(l, d)
                            } a.preventDefault()
                        }), w = CKEDITOR.tools.addFunction(function () { l.onfocus && l.onfocus() }); d = 0; l.keyDownFn = r; h = { id: k, name: this.name || this.command, label: this.label, title: this.title, cls: this.className || "", titleJs: h.gecko && !h.hc ? "" : (this.title || "").replace("'", ""), keydownFn: r, focusFn: w, clickFn: g }; e.output(h, c); if (this.onRender) this.onRender(); return l
                    }, createPanel: function (a) {
                        if (!this._.panel) {
                            var c = this._.panelDefinition, e = this._.panelDefinition.block, f = c.parent || CKEDITOR.document.getBody(),
                            l = "cke_combopanel__" + this.name, d = new CKEDITOR.ui.floatPanel(a, f, c), c = d.addListBlock(this.id, e), k = this; d.onShow = function () { this.element.addClass(l); k.setState(CKEDITOR.TRISTATE_ON); k._.on = 1; k.editorFocus && !a.focusManager.hasFocus && a.focus(); if (k.onOpen) k.onOpen() }; d.onHide = function (d) { this.element.removeClass(l); k.setState(k.modes && k.modes[a.mode] ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED); k._.on = 0; if (!d && k.onClose) k.onClose() }; d.onEscape = function () { d.hide(1) }; c.onClick = function (a, b) {
                                k.onClick &&
                                k.onClick.call(k, a, b); d.hide()
                            }; this._.panel = d; this._.list = c; d.getBlock(this.id).onHide = function () { k._.on = 0; k.setState(CKEDITOR.TRISTATE_OFF) }; this.init && this.init()
                        }
                    }, setValue: function (a, c) { this._.value = a; var e = this.document.getById("cke_" + this.id + "_text"); e && (a || c ? e.removeClass("cke_combo_inlinelabel") : (c = this.label, e.addClass("cke_combo_inlinelabel")), e.setText("undefined" != typeof c ? c : a)) }, getValue: function () { return this._.value || "" }, unmarkAll: function () { this._.list.unmarkAll() }, mark: function (a) { this._.list.mark(a) },
                    hideItem: function (a) { this._.list.hideItem(a) }, hideGroup: function (a) { this._.list.hideGroup(a) }, showAll: function () { this._.list.showAll() }, add: function (a, c, e) { this._.items[a] = e || a; this._.list.add(a, c, e) }, startGroup: function (a) { this._.list.startGroup(a) }, commit: function () { this._.committed || (this._.list.commit(), this._.committed = 1, CKEDITOR.ui.fire("ready", this)); this._.committed = 1 }, setState: function (a) {
                        if (this._.state != a) {
                            var c = this.document.getById("cke_" + this.id); c.setState(a, "cke_combo"); a == CKEDITOR.TRISTATE_DISABLED ?
                            c.setAttribute("aria-disabled", !0) : c.removeAttribute("aria-disabled"); this._.state = a
                        }
                    }, getState: function () { return this._.state }, enable: function () { this._.state == CKEDITOR.TRISTATE_DISABLED && this.setState(this._.lastState) }, disable: function () { this._.state != CKEDITOR.TRISTATE_DISABLED && (this._.lastState = this._.state, this.setState(CKEDITOR.TRISTATE_DISABLED)) }, destroy: function () { CKEDITOR.tools.array.forEach(this._.listeners, function (a) { a.removeListener() }); this._.listeners = [] }, select: function (a) {
                        if (!CKEDITOR.tools.isEmpty(this._.items)) for (var c in this._.items) if (a({
                                value: c,
                                text: this._.items[c]
                        })) { this.setValue(c); break }
                    }
                }, statics: { handler: { create: function (a) { return new CKEDITOR.ui.richCombo(a) } } }
            }); CKEDITOR.ui.prototype.addRichCombo = function (a, c) { this.add(a, CKEDITOR.UI_RICHCOMBO, c) }
        })(); CKEDITOR.plugins.add("format", {
            requires: "richcombo", init: function (a) {
                if (!a.blockless) {
                    for (var f = a.config, e = a.lang.format, b = f.format_tags.split(";"), c = {}, m = 0, h = [], l = 0; l < b.length; l++) {
                        var d = b[l], k = new CKEDITOR.style(f["format_" + d]); if (!a.filter.customConfig || a.filter.check(k)) m++, c[d] =
                        k, c[d]._.enterMode = a.config.enterMode, h.push(k)
                    } 0 !== m && a.ui.addRichCombo("Format", {
                        label: e.label, title: e.panelTitle, toolbar: "styles,20", allowedContent: h, panel: { css: [CKEDITOR.skin.getPath("editor")].concat(f.contentsCss), multiSelect: !1, attributes: { "aria-label": e.panelTitle } }, init: function () { this.startGroup(e.panelTitle); for (var a in c) { var b = e["tag_" + a]; this.add(a, c[a].buildPreview(b), b) } }, onClick: function (b) {
                            a.focus(); a.fire("saveSnapshot"); b = c[b]; var d = a.elementPath(); b.checkActive(d, a) || a.applyStyle(b);
                            setTimeout(function () { a.fire("saveSnapshot") }, 0)
                        }, onRender: function () { a.on("selectionChange", function (b) { var d = this.getValue(); b = b.data.path; this.refresh(); for (var e in c) if (c[e].checkActive(b, a)) { e != d && this.setValue(e, a.lang.format["tag_" + e]); return } this.setValue("") }, this) }, onOpen: function () { this.showAll(); for (var b in c) a.activeFilter.check(c[b]) || this.hideItem(b) }, refresh: function () { var b = a.elementPath(); if (b) { if (b.isContextFor("p")) for (var d in c) if (a.activeFilter.check(c[d])) return; this.setState(CKEDITOR.TRISTATE_DISABLED) } }
                    })
                }
            }
        });
        CKEDITOR.config.format_tags = "p;h1;h2;h3;h4;h5;h6;pre;address;div"; CKEDITOR.config.format_p = { element: "p" }; CKEDITOR.config.format_div = { element: "div" }; CKEDITOR.config.format_pre = { element: "pre" }; CKEDITOR.config.format_address = { element: "address" }; CKEDITOR.config.format_h1 = { element: "h1" }; CKEDITOR.config.format_h2 = { element: "h2" }; CKEDITOR.config.format_h3 = { element: "h3" }; CKEDITOR.config.format_h4 = { element: "h4" }; CKEDITOR.config.format_h5 = { element: "h5" }; CKEDITOR.config.format_h6 = { element: "h6" }; (function () {
            var a =
            { canUndo: !1, exec: function (a) { var e = a.document.createElement("hr"); a.insertElement(e) }, allowedContent: "hr", requiredContent: "hr" }; CKEDITOR.plugins.add("horizontalrule", { init: function (f) { f.blockless || (f.addCommand("horizontalrule", a), f.ui.addButton && f.ui.addButton("HorizontalRule", { label: f.lang.horizontalrule.toolbar, command: "horizontalrule", toolbar: "insert,40" })) } })
        })(); CKEDITOR.plugins.add("htmlwriter", {
            init: function (a) {
                var f = new CKEDITOR.htmlWriter; f.forceSimpleAmpersand = a.config.forceSimpleAmpersand;
                f.indentationChars = a.config.dataIndentationChars || "\t"; a.dataProcessor.writer = f
            }
        }); CKEDITOR.htmlWriter = CKEDITOR.tools.createClass({
            base: CKEDITOR.htmlParser.basicWriter, $: function () {
                this.base(); this.indentationChars = "\t"; this.selfClosingEnd = " /\x3e"; this.lineBreakChars = "\n"; this.sortAttributes = 1; this._.indent = 0; this._.indentation = ""; this._.inPre = 0; this._.rules = {}; var a = CKEDITOR.dtd, f; for (f in CKEDITOR.tools.extend({}, a.$nonBodyContent, a.$block, a.$listItem, a.$tableContent)) this.setRules(f, {
                    indent: !a[f]["#"],
                    breakBeforeOpen: 1, breakBeforeClose: !a[f]["#"], breakAfterClose: 1, needsSpace: f in a.$block && !(f in { li: 1, dt: 1, dd: 1 })
                }); this.setRules("br", { breakAfterOpen: 1 }); this.setRules("title", { indent: 0, breakAfterOpen: 0 }); this.setRules("style", { indent: 0, breakBeforeClose: 1 }); this.setRules("pre", { breakAfterOpen: 1, indent: 0 })
            }, proto: {
                openTag: function (a) {
                    var f = this._.rules[a]; this._.afterCloser && f && f.needsSpace && this._.needsSpace && this._.output.push("\n"); this._.indent ? this.indentation() : f && f.breakBeforeOpen && (this.lineBreak(),
                    this.indentation()); this._.output.push("\x3c", a); this._.afterCloser = 0
                }, openTagClose: function (a, f) { var e = this._.rules[a]; f ? (this._.output.push(this.selfClosingEnd), e && e.breakAfterClose && (this._.needsSpace = e.needsSpace)) : (this._.output.push("\x3e"), e && e.indent && (this._.indentation += this.indentationChars)); e && e.breakAfterOpen && this.lineBreak(); "pre" == a && (this._.inPre = 1) }, attribute: function (a, f) {
                    "string" == typeof f && (f = CKEDITOR.tools.htmlEncodeAttr(f), this.forceSimpleAmpersand && (f = f.replace(/&amp;/g, "\x26")));
                    this._.output.push(" ", a, '\x3d"', f, '"')
                }, closeTag: function (a) { var f = this._.rules[a]; f && f.indent && (this._.indentation = this._.indentation.substr(this.indentationChars.length)); this._.indent ? this.indentation() : f && f.breakBeforeClose && (this.lineBreak(), this.indentation()); this._.output.push("\x3c/", a, "\x3e"); "pre" == a && (this._.inPre = 0); f && f.breakAfterClose && (this.lineBreak(), this._.needsSpace = f.needsSpace); this._.afterCloser = 1 }, text: function (a) {
                    this._.indent && (this.indentation(), !this._.inPre && (a = CKEDITOR.tools.ltrim(a)));
                    this._.output.push(a)
                }, comment: function (a) { this._.indent && this.indentation(); this._.output.push("\x3c!--", a, "--\x3e") }, lineBreak: function () { !this._.inPre && 0 < this._.output.length && this._.output.push(this.lineBreakChars); this._.indent = 1 }, indentation: function () { !this._.inPre && this._.indentation && this._.output.push(this._.indentation); this._.indent = 0 }, reset: function () { this._.output = []; this._.indent = 0; this._.indentation = ""; this._.afterCloser = 0; this._.inPre = 0; this._.needsSpace = 0 }, setRules: function (a, f) {
                    var e =
                    this._.rules[a]; e ? CKEDITOR.tools.extend(e, f, !0) : this._.rules[a] = f
                }
            }
        }); (function () {
            function a(a, b) { b || (b = a.getSelection().getSelectedElement()); if (b && b.is("img") && !b.data("cke-realelement") && !b.isReadOnly()) return b } function f(a) { var b = a.getStyle("float"); if ("inherit" == b || "none" == b) b = 0; b || (b = a.getAttribute("align")); return b } CKEDITOR.plugins.add("image", {
                requires: "dialog", init: function (e) {
                    if (!e.plugins.detectConflict("image", ["easyimage", "image2"])) {
                        CKEDITOR.dialog.add("image", this.path + "dialogs/image.js");
                        var b = "img[alt,!src]{border-style,border-width,float,height,margin,margin-bottom,margin-left,margin-right,margin-top,width}"; CKEDITOR.dialog.isTabEnabled(e, "image", "advanced") && (b = "img[alt,dir,id,lang,longdesc,!src,title]{*}(*)"); e.addCommand("image", new CKEDITOR.dialogCommand("image", { allowedContent: b, requiredContent: "img[alt,src]", contentTransformations: [["img{width}: sizeToStyle", "img[width]: sizeToAttribute"], ["img{float}: alignmentToStyle", "img[align]: alignmentToAttribute"]] })); e.ui.addButton &&
                        e.ui.addButton("Image", { label: e.lang.common.image, command: "image", toolbar: "insert,10" }); e.on("doubleclick", function (a) { var b = a.data.element; !b.is("img") || b.data("cke-realelement") || b.isReadOnly() || (a.data.dialog = "image") }); e.addMenuItems && e.addMenuItems({ image: { label: e.lang.image.menu, command: "image", group: "image" } }); e.contextMenu && e.contextMenu.addListener(function (b) { if (a(e, b)) return { image: CKEDITOR.TRISTATE_OFF } })
                    }
                }, afterInit: function (e) {
                    function b(b) {
                        var m = e.getCommand("justify" + b); if (m) {
                            if ("left" ==
                            b || "right" == b) m.on("exec", function (h) { var l = a(e), d; l && (d = f(l), d == b ? (l.removeStyle("float"), b == f(l) && l.removeAttribute("align")) : l.setStyle("float", b), h.cancel()) }); m.on("refresh", function (h) { var l = a(e); l && (l = f(l), this.setState(l == b ? CKEDITOR.TRISTATE_ON : "right" == b || "left" == b ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED), h.cancel()) })
                        }
                    } e.plugins.image2 || (b("left"), b("right"), b("center"), b("block"))
                }
            })
        })(); CKEDITOR.config.image_removeLinkByEmptyURL = !0; (function () {
            function a(a, c) {
                var e = b.exec(a),
                d = b.exec(c); if (e) { if (!e[2] && "px" == d[2]) return d[1]; if ("px" == e[2] && !d[2]) return d[1] + "px" } return c
            } var f = CKEDITOR.htmlParser.cssStyle, e = CKEDITOR.tools.cssLength, b = /^((?:\d*(?:\.\d+))|(?:\d+))(.*)?$/i, c = {
                elements: {
                    $: function (b) {
                        var c = b.attributes; if ((c = (c = (c = c && c["data-cke-realelement"]) && new CKEDITOR.htmlParser.fragment.fromHtml(decodeURIComponent(c))) && c.children[0]) && b.attributes["data-cke-resizable"]) {
                            var e = (new f(b)).rules; b = c.attributes; var d = e.width, e = e.height; d && (b.width = a(b.width, d)); e && (b.height =
                            a(b.height, e))
                        } return c
                    }
                }
            }; CKEDITOR.plugins.add("fakeobjects", { init: function (a) { a.filter.allow("img[!data-cke-realelement,src,alt,title](*){*}", "fakeobjects") }, afterInit: function (a) { (a = (a = a.dataProcessor) && a.htmlFilter) && a.addRules(c, { applyToAll: !0 }) } }); CKEDITOR.editor.prototype.createFakeElement = function (a, b, c, d) {
                var k = this.lang.fakeobjects, k = k[c] || k.unknown; b = {
                    "class": b, "data-cke-realelement": encodeURIComponent(a.getOuterHtml()), "data-cke-real-node-type": a.type, alt: k, title: k, align: a.getAttribute("align") ||
                    ""
                }; CKEDITOR.env.hc || (b.src = CKEDITOR.tools.transparentImageData); c && (b["data-cke-real-element-type"] = c); d && (b["data-cke-resizable"] = d, c = new f, d = a.getAttribute("width"), a = a.getAttribute("height"), d && (c.rules.width = e(d)), a && (c.rules.height = e(a)), c.populate(b)); return this.document.createElement("img", { attributes: b })
            }; CKEDITOR.editor.prototype.createFakeParserElement = function (a, b, c, d) {
                var k = this.lang.fakeobjects, k = k[c] || k.unknown, g; g = new CKEDITOR.htmlParser.basicWriter; a.writeHtml(g); g = g.getHtml(); b =
                { "class": b, "data-cke-realelement": encodeURIComponent(g), "data-cke-real-node-type": a.type, alt: k, title: k, align: a.attributes.align || "" }; CKEDITOR.env.hc || (b.src = CKEDITOR.tools.transparentImageData); c && (b["data-cke-real-element-type"] = c); d && (b["data-cke-resizable"] = d, d = a.attributes, a = new f, c = d.width, d = d.height, void 0 !== c && (a.rules.width = e(c)), void 0 !== d && (a.rules.height = e(d)), a.populate(b)); return new CKEDITOR.htmlParser.element("img", b)
            }; CKEDITOR.editor.prototype.restoreRealElement = function (b) {
                if (b.data("cke-real-node-type") !=
                CKEDITOR.NODE_ELEMENT) return null; var c = CKEDITOR.dom.element.createFromHtml(decodeURIComponent(b.data("cke-realelement")), this.document); if (b.data("cke-resizable")) { var e = b.getStyle("width"); b = b.getStyle("height"); e && c.setAttribute("width", a(c.getAttribute("width"), e)); b && c.setAttribute("height", a(c.getAttribute("height"), b)) } return c
            }
        })(); "use strict"; (function () {
            function a(a) { return a.replace(/'/g, "\\$\x26") } function f(a) {
                for (var b = a.length, d = [], c, e = 0; e < b; e++) c = a.charCodeAt(e), d.push(c); return "String.fromCharCode(" +
                d.join(",") + ")"
            } function e(b, d) { for (var c = b.plugins.link, e = c.compiledProtectionFunction.params, c = [c.compiledProtectionFunction.name, "("], f, g, k = 0; k < e.length; k++) f = e[k].toLowerCase(), g = d[f], 0 < k && c.push(","), c.push("'", g ? a(encodeURIComponent(d[f])) : "", "'"); c.push(")"); return c.join("") } function b(a) { a = a.config.emailProtection || ""; var b; a && "encode" != a && (b = {}, a.replace(/^([^(]+)\(([^)]+)\)$/, function (a, d, c) { b.name = d; b.params = []; c.replace(/[^,\s]+/g, function (a) { b.params.push(a) }) })); return b } CKEDITOR.plugins.add("link",
            {
                requires: "dialog,fakeobjects", onLoad: function () {
                    function a(b) { return d.replace(/%1/g, "rtl" == b ? "right" : "left").replace(/%2/g, "cke_contents_" + b) } var b = "background:url(" + CKEDITOR.getUrl(this.path + "images" + (CKEDITOR.env.hidpi ? "/hidpi" : "") + "/anchor.png") + ") no-repeat %1 center;border:1px dotted #00f;background-size:16px;", d = ".%2 a.cke_anchor,.%2 a.cke_anchor_empty,.cke_editable.%2 a[name],.cke_editable.%2 a[data-cke-saved-name]{" + b + "padding-%1:18px;cursor:auto;}.%2 img.cke_anchor{" + b + "width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}";
                    CKEDITOR.addCss(a("ltr") + a("rtl"))
                }, init: function (a) {
                    var d = "a[!href]"; CKEDITOR.dialog.isTabEnabled(a, "link", "advanced") && (d = d.replace("]", ",accesskey,charset,dir,id,lang,name,rel,tabindex,title,type,download]{*}(*)")); CKEDITOR.dialog.isTabEnabled(a, "link", "target") && (d = d.replace("]", ",target,onclick]")); a.addCommand("link", new CKEDITOR.dialogCommand("link", { allowedContent: d, requiredContent: "a[href]" })); a.addCommand("anchor", new CKEDITOR.dialogCommand("anchor", { allowedContent: "a[!name,id]", requiredContent: "a[name]" }));
                    a.addCommand("unlink", new CKEDITOR.unlinkCommand); a.addCommand("removeAnchor", new CKEDITOR.removeAnchorCommand); a.setKeystroke(CKEDITOR.CTRL + 76, "link"); a.setKeystroke(CKEDITOR.CTRL + 75, "link"); a.ui.addButton && (a.ui.addButton("Link", { label: a.lang.link.toolbar, command: "link", toolbar: "links,10" }), a.ui.addButton("Unlink", { label: a.lang.link.unlink, command: "unlink", toolbar: "links,20" }), a.ui.addButton("Anchor", { label: a.lang.link.anchor.toolbar, command: "anchor", toolbar: "links,30" })); CKEDITOR.dialog.add("link",
                    this.path + "dialogs/link.js"); CKEDITOR.dialog.add("anchor", this.path + "dialogs/anchor.js"); a.on("doubleclick", function (b) { var d = b.data.element.getAscendant({ a: 1, img: 1 }, !0); d && !d.isReadOnly() && (d.is("a") ? (b.data.dialog = !d.getAttribute("name") || d.getAttribute("href") && d.getChildCount() ? "link" : "anchor", b.data.link = d) : CKEDITOR.plugins.link.tryRestoreFakeAnchor(a, d) && (b.data.dialog = "anchor")) }, null, null, 0); a.on("doubleclick", function (b) { b.data.dialog in { link: 1, anchor: 1 } && b.data.link && a.getSelection().selectElement(b.data.link) },
                    null, null, 20); a.addMenuItems && a.addMenuItems({ anchor: { label: a.lang.link.anchor.menu, command: "anchor", group: "anchor", order: 1 }, removeAnchor: { label: a.lang.link.anchor.remove, command: "removeAnchor", group: "anchor", order: 5 }, link: { label: a.lang.link.menu, command: "link", group: "link", order: 1 }, unlink: { label: a.lang.link.unlink, command: "unlink", group: "link", order: 5 } }); a.contextMenu && a.contextMenu.addListener(function (b) {
                        if (!b || b.isReadOnly()) return null; b = CKEDITOR.plugins.link.tryRestoreFakeAnchor(a, b); if (!b &&
                        !(b = CKEDITOR.plugins.link.getSelectedLink(a))) return null; var d = {}; b.getAttribute("href") && b.getChildCount() && (d = { link: CKEDITOR.TRISTATE_OFF, unlink: CKEDITOR.TRISTATE_OFF }); b && b.hasAttribute("name") && (d.anchor = d.removeAnchor = CKEDITOR.TRISTATE_OFF); return d
                    }); this.compiledProtectionFunction = b(a)
                }, afterInit: function (a) {
                    a.dataProcessor.dataFilter.addRules({ elements: { a: function (b) { return b.attributes.name ? b.children.length ? null : a.createFakeParserElement(b, "cke_anchor", "anchor") : null } } }); var b = a._.elementsPath &&
                    a._.elementsPath.filters; b && b.push(function (b, d) { if ("a" == d && (CKEDITOR.plugins.link.tryRestoreFakeAnchor(a, b) || b.getAttribute("name") && (!b.getAttribute("href") || !b.getChildCount()))) return "anchor" })
                }
            }); var c = /^javascript:/, m = /^(?:mailto)(?:(?!\?(subject|body)=).)+/i, h = /subject=([^;?:@&=$,\/]*)/i, l = /body=([^;?:@&=$,\/]*)/i, d = /^#(.*)$/, k = /^((?:http|https|ftp|news):\/\/)?(.*)$/, g = /^(_(?:self|top|parent|blank))$/, n = /^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,
            r = /^javascript:([^(]+)\(([^)]+)\)$/, w = /\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/, q = /(?:^|,)([^=]+)=(\d+|yes|no)/gi, p = /^tel:(.*)$/, u = { id: "advId", dir: "advLangDir", accessKey: "advAccessKey", name: "advName", lang: "advLangCode", tabindex: "advTabIndex", title: "advTitle", type: "advContentType", "class": "advCSSClasses", charset: "advCharset", style: "advStyles", rel: "advRel" }; CKEDITOR.plugins.link = {
                getSelectedLink: function (a, b) {
                    var d = a.getSelection(), c = d.getSelectedElement(),
                    e = d.getRanges(), f = [], g; if (!b && c && c.is("a")) return c; for (c = 0; c < e.length; c++) if (g = d.getRanges()[c], g.shrink(CKEDITOR.SHRINK_ELEMENT, !0, { skipBogus: !0 }), (g = a.elementPath(g.getCommonAncestor()).contains("a", 1)) && b) f.push(g); else if (g) return g; return b ? f : null
                }, getEditorAnchors: function (a) {
                    for (var b = a.editable(), d = b.isInline() && !a.plugins.divarea ? a.document : b, b = d.getElementsByTag("a"), d = d.getElementsByTag("img"), c = [], e = 0, f; f = b.getItem(e++) ;) (f.data("cke-saved-name") || f.hasAttribute("name")) && c.push({
                        name: f.data("cke-saved-name") ||
                        f.getAttribute("name"), id: f.getAttribute("id")
                    }); for (e = 0; f = d.getItem(e++) ;) (f = this.tryRestoreFakeAnchor(a, f)) && c.push({ name: f.getAttribute("name"), id: f.getAttribute("id") }); return c
                }, fakeAnchor: !0, tryRestoreFakeAnchor: function (a, b) { if (b && b.data("cke-real-element-type") && "anchor" == b.data("cke-real-element-type")) { var d = a.restoreRealElement(b); if (d.data("cke-saved-name")) return d } }, parseLinkAttributes: function (a, b) {
                    var e = b && (b.data("cke-saved-href") || b.getAttribute("href")) || "", f = a.plugins.link.compiledProtectionFunction,
                    y = a.config.emailProtection, z = {}, A; e.match(c) && ("encode" == y ? e = e.replace(n, function (a, b, d) { d = d || ""; return "mailto:" + String.fromCharCode.apply(String, b.split(",")) + d.replace(/\\'/g, "'") }) : y && e.replace(r, function (a, b, d) { if (b == f.name) { z.type = "email"; a = z.email = {}; b = /(^')|('$)/g; d = d.match(/[^,\s]+/g); for (var c = d.length, e, g, k = 0; k < c; k++) e = decodeURIComponent, g = d[k].replace(b, "").replace(/\\'/g, "'"), g = e(g), e = f.params[k].toLowerCase(), a[e] = g; a.address = [a.name, a.domain].join("@") } })); if (!z.type) if (y = e.match(d)) z.type =
                    "anchor", z.anchor = {}, z.anchor.name = z.anchor.id = y[1]; else if (y = e.match(p)) z.type = "tel", z.tel = y[1]; else if (y = e.match(m)) { A = e.match(h); var e = e.match(l), D = z.email = {}; z.type = "email"; D.address = y[0].replace("mailto:", ""); A && (D.subject = decodeURIComponent(A[1])); e && (D.body = decodeURIComponent(e[1])) } else e && (A = e.match(k)) && (z.type = "url", z.url = {}, z.url.protocol = A[1], z.url.url = A[2]); if (b) {
                        if (e = b.getAttribute("target")) z.target = { type: e.match(g) ? e : "frame", name: e }; else if (e = (e = b.data("cke-pa-onclick") || b.getAttribute("onclick")) &&
                        e.match(w)) for (z.target = { type: "popup", name: e[1] }; y = q.exec(e[2]) ;) "yes" != y[2] && "1" != y[2] || y[1] in { height: 1, width: 1, top: 1, left: 1 } ? isFinite(y[2]) && (z.target[y[1]] = y[2]) : z.target[y[1]] = !0; null !== b.getAttribute("download") && (z.download = !0); var e = {}, G; for (G in u) (y = b.getAttribute(G)) && (e[u[G]] = y); if (G = b.data("cke-saved-name") || e.advName) e.advName = G; CKEDITOR.tools.isEmpty(e) || (z.advanced = e)
                    } return z
                }, getLinkAttributes: function (b, d) {
                    var c = b.config.emailProtection || "", g = {}; switch (d.type) {
                        case "url": var c = d.url &&
                        void 0 !== d.url.protocol ? d.url.protocol : "http://", k = d.url && CKEDITOR.tools.trim(d.url.url) || ""; g["data-cke-saved-href"] = 0 === k.indexOf("/") ? k : c + k; break; case "anchor": c = d.anchor && d.anchor.id; g["data-cke-saved-href"] = "#" + (d.anchor && d.anchor.name || c || ""); break; case "email": var h = d.email, k = h.address; switch (c) {
                            case "": case "encode": var l = encodeURIComponent(h.subject || ""), m = encodeURIComponent(h.body || ""), h = []; l && h.push("subject\x3d" + l); m && h.push("body\x3d" + m); h = h.length ? "?" + h.join("\x26") : ""; "encode" == c ? (c =
                            ["javascript:void(location.href\x3d'mailto:'+", f(k)], h && c.push("+'", a(h), "'"), c.push(")")) : c = ["mailto:", k, h]; break; default: c = k.split("@", 2), h.name = c[0], h.domain = c[1], c = ["javascript:", e(b, h)]
                        } g["data-cke-saved-href"] = c.join(""); break; case "tel": g["data-cke-saved-href"] = "tel:" + d.tel
                    } if (d.target) if ("popup" == d.target.type) {
                        for (var c = ["window.open(this.href, '", d.target.name || "", "', '"], n = "resizable status location toolbar menubar fullscreen scrollbars dependent".split(" "), k = n.length, l = function (a) {
                        d.target[a] &&
                        n.push(a + "\x3d" + d.target[a])
                        }, h = 0; h < k; h++) n[h] += d.target[n[h]] ? "\x3dyes" : "\x3dno"; l("width"); l("left"); l("height"); l("top"); c.push(n.join(","), "'); return false;"); g["data-cke-pa-onclick"] = c.join("")
                    } else "notSet" != d.target.type && d.target.name && (g.target = d.target.name); d.download && (g.download = ""); if (d.advanced) { for (var p in u) (c = d.advanced[u[p]]) && (g[p] = c); g.name && (g["data-cke-saved-name"] = g.name) } g["data-cke-saved-href"] && (g.href = g["data-cke-saved-href"]); p = {
                        target: 1, onclick: 1, "data-cke-pa-onclick": 1,
                        "data-cke-saved-name": 1, download: 1
                    }; d.advanced && CKEDITOR.tools.extend(p, u); for (var r in g) delete p[r]; return { set: g, removed: CKEDITOR.tools.object.keys(p) }
                }, showDisplayTextForElement: function (a, b) { var d = { img: 1, table: 1, tbody: 1, thead: 1, tfoot: 1, input: 1, select: 1, textarea: 1 }, c = b.getSelection(); return b.widgets && b.widgets.focused || c && 1 < c.getRanges().length ? !1 : !a || !a.getName || !a.is(d) }
            }; CKEDITOR.unlinkCommand = function () { }; CKEDITOR.unlinkCommand.prototype = {
                exec: function (a) {
                    if (CKEDITOR.env.ie) {
                        var b = a.getSelection().getRanges()[0],
                        d = b.getPreviousEditableNode() && b.getPreviousEditableNode().getAscendant("a", !0) || b.getNextEditableNode() && b.getNextEditableNode().getAscendant("a", !0), c; b.collapsed && d && (c = b.createBookmark(), b.selectNodeContents(d), b.select())
                    } d = new CKEDITOR.style({ element: "a", type: CKEDITOR.STYLE_INLINE, alwaysRemoveElement: 1 }); a.removeStyle(d); c && (b.moveToBookmark(c), b.select())
                }, refresh: function (a, b) {
                    var d = b.lastElement && b.lastElement.getAscendant("a", !0); d && "a" == d.getName() && d.getAttribute("href") && d.getChildCount() ?
                    this.setState(CKEDITOR.TRISTATE_OFF) : this.setState(CKEDITOR.TRISTATE_DISABLED)
                }, contextSensitive: 1, startDisabled: 1, requiredContent: "a[href]", editorFocus: 1
            }; CKEDITOR.removeAnchorCommand = function () { }; CKEDITOR.removeAnchorCommand.prototype = {
                exec: function (a) {
                    var b = a.getSelection(), d = b.createBookmarks(), c; if (b && (c = b.getSelectedElement()) && (c.getChildCount() ? c.is("a") : CKEDITOR.plugins.link.tryRestoreFakeAnchor(a, c))) c.remove(1); else if (c = CKEDITOR.plugins.link.getSelectedLink(a)) c.hasAttribute("href") ? (c.removeAttributes({
                        name: 1,
                        "data-cke-saved-name": 1
                    }), c.removeClass("cke_anchor")) : c.remove(1); b.selectBookmarks(d)
                }, requiredContent: "a[name]"
            }; CKEDITOR.tools.extend(CKEDITOR.config, { linkShowAdvancedTab: !0, linkShowTargetTab: !0, linkDefaultProtocol: "http://" })
        })(); "use strict"; (function () {
            function a(a, b, d) { return n(b) && n(d) && d.equals(b.getNext(function (a) { return !(P(a) || S(a) || r(a)) })) } function f(a) { this.upper = a[0]; this.lower = a[1]; this.set.apply(this, a.slice(2)) } function e(a) {
                var b = a.element; if (b && n(b) && (b = b.getAscendant(a.triggers,
                !0)) && a.editable.contains(b)) { var d = h(b); if ("true" == d.getAttribute("contenteditable")) return b; if (d.is(a.triggers)) return d } return null
            } function b(a, b, d) { v(a, b); v(a, d); a = b.size.bottom; d = d.size.top; return a && d ? 0 | (a + d) / 2 : a || d } function c(a, b, d) { return b = b[d ? "getPrevious" : "getNext"](function (b) { return b && b.type == CKEDITOR.NODE_TEXT && !P(b) || n(b) && !r(b) && !g(a, b) }) } function m(a, b, d) { return a > b && a < d } function h(a, b) {
                if (a.data("cke-editable")) return null; for (b || (a = a.getParent()) ; a && !a.data("cke-editable") ;) {
                    if (a.hasAttribute("contenteditable")) return a;
                    a = a.getParent()
                } return null
            } function l(a) {
                var b = a.doc, c = E('\x3cspan contenteditable\x3d"false" data-cke-magic-line\x3d"1" style\x3d"' + ba + "position:absolute;border-top:1px dashed " + a.boxColor + '"\x3e\x3c/span\x3e', b), e = CKEDITOR.getUrl(this.path + "images/" + (J.hidpi ? "hidpi/" : "") + "icon" + (a.rtl ? "-rtl" : "") + ".png"); D(c, {
                    attach: function () { this.wrap.getParent() || this.wrap.appendTo(a.editable, !0); return this }, lineChildren: [D(E('\x3cspan title\x3d"' + a.editor.lang.magicline.title + '" contenteditable\x3d"false"\x3e\x26#8629;\x3c/span\x3e',
                    b), { base: ba + "height:17px;width:17px;" + (a.rtl ? "left" : "right") + ":17px;background:url(" + e + ") center no-repeat " + a.boxColor + ";cursor:pointer;" + (J.hc ? "font-size: 15px;line-height:14px;border:1px solid #fff;text-align:center;" : "") + (J.hidpi ? "background-size: 9px 10px;" : ""), looks: ["top:-8px; border-radius: 2px;", "top:-17px; border-radius: 2px 2px 0px 0px;", "top:-1px; border-radius: 0px 0px 2px 2px;"] }), D(E(da, b), {
                        base: V + "left:0px;border-left-color:" + a.boxColor + ";", looks: ["border-width:8px 0 8px 8px;top:-8px",
                        "border-width:8px 0 0 8px;top:-8px", "border-width:0 0 8px 8px;top:0px"]
                    }), D(E(da, b), { base: V + "right:0px;border-right-color:" + a.boxColor + ";", looks: ["border-width:8px 8px 8px 0;top:-8px", "border-width:8px 8px 0 0;top:-8px", "border-width:0 8px 8px 0;top:0px"] })], detach: function () { this.wrap.getParent() && this.wrap.remove(); return this }, mouseNear: function () { v(a, this); var b = a.holdDistance, d = this.size; return d && m(a.mouse.y, d.top - b, d.bottom + b) && m(a.mouse.x, d.left - b, d.right + b) ? !0 : !1 }, place: function () {
                        var b =
                        a.view, d = a.editable, c = a.trigger, e = c.upper, f = c.lower, g = e || f, k = g.getParent(), h = {}; this.trigger = c; e && v(a, e, !0); f && v(a, f, !0); v(a, k, !0); a.inInlineMode && y(a, !0); k.equals(d) ? (h.left = b.scroll.x, h.right = -b.scroll.x, h.width = "") : (h.left = g.size.left - g.size.margin.left + b.scroll.x - (a.inInlineMode ? b.editable.left + b.editable.border.left : 0), h.width = g.size.outerWidth + g.size.margin.left + g.size.margin.right + b.scroll.x, h.right = ""); e && f ? h.top = e.size.margin.bottom === f.size.margin.top ? 0 | e.size.bottom + e.size.margin.bottom /
                        2 : e.size.margin.bottom < f.size.margin.top ? e.size.bottom + e.size.margin.bottom : e.size.bottom + e.size.margin.bottom - f.size.margin.top : e ? f || (h.top = e.size.bottom + e.size.margin.bottom) : h.top = f.size.top - f.size.margin.top; c.is(Q) || m(h.top, b.scroll.y - 15, b.scroll.y + 5) ? (h.top = a.inInlineMode ? 0 : b.scroll.y, this.look(Q)) : c.is(O) || m(h.top, b.pane.bottom - 5, b.pane.bottom + 15) ? (h.top = a.inInlineMode ? b.editable.height + b.editable.padding.top + b.editable.padding.bottom : b.pane.bottom - 1, this.look(O)) : (a.inInlineMode && (h.top -=
                        b.editable.top + b.editable.border.top), this.look(X)); a.inInlineMode && (h.top--, h.top += b.editable.scroll.top, h.left += b.editable.scroll.left); for (var l in h) h[l] = CKEDITOR.tools.cssLength(h[l]); this.setStyles(h)
                    }, look: function (a) { if (this.oldLook != a) { for (var b = this.lineChildren.length, d; b--;) (d = this.lineChildren[b]).setAttribute("style", d.base + d.looks[0 | a / 2]); this.oldLook = a } }, wrap: new G("span", a.doc)
                }); for (b = c.lineChildren.length; b--;) c.lineChildren[b].appendTo(c); c.look(X); c.appendTo(c.wrap); c.unselectable();
                c.lineChildren[0].on("mouseup", function (b) { c.detach(); d(a, function (b) { var d = a.line.trigger; b[d.is(I) ? "insertBefore" : "insertAfter"](d.is(I) ? d.lower : d.upper) }, !0); a.editor.focus(); J.ie || a.enterMode == CKEDITOR.ENTER_BR || a.hotNode.scrollIntoView(); b.data.preventDefault(!0) }); c.on("mousedown", function (a) { a.data.preventDefault(!0) }); a.line = c
            } function d(a, b, d) {
                var c = new CKEDITOR.dom.range(a.doc), e = a.editor, f; J.ie && a.enterMode == CKEDITOR.ENTER_BR ? f = a.doc.createText(T) : (f = (f = h(a.element, !0)) && f.data("cke-enter-mode") ||
                a.enterMode, f = new G(M[f], a.doc), f.is("br") || a.doc.createText(T).appendTo(f)); d && e.fire("saveSnapshot"); b(f); c.moveToPosition(f, CKEDITOR.POSITION_AFTER_START); e.getSelection().selectRanges([c]); a.hotNode = f; d && e.fire("saveSnapshot")
            } function k(a, b) {
                return {
                    canUndo: !0, modes: { wysiwyg: 1 }, exec: function () {
                        function f(c) {
                            var e = J.ie && 9 > J.version ? " " : T, g = a.hotNode && a.hotNode.getText() == e && a.element.equals(a.hotNode) && a.lastCmdDirection === !!b; d(a, function (d) {
                                g && a.hotNode && a.hotNode.remove(); d[b ? "insertAfter" :
                                "insertBefore"](c); d.setAttributes({ "data-cke-magicline-hot": 1, "data-cke-magicline-dir": !!b }); a.lastCmdDirection = !!b
                            }); J.ie || a.enterMode == CKEDITOR.ENTER_BR || a.hotNode.scrollIntoView(); a.line.detach()
                        } return function (d) {
                            d = d.getSelection().getStartElement(); var g; d = d.getAscendant(U, 1); if (!p(a, d) && d && !d.equals(a.editable) && !d.contains(a.editable)) {
                                (g = h(d)) && "false" == g.getAttribute("contenteditable") && (d = g); a.element = d; g = c(a, d, !b); var k; n(g) && g.is(a.triggers) && g.is(W) && (!c(a, g, !b) || (k = c(a, g, !b)) && n(k) &&
                                k.is(a.triggers)) ? f(g) : (k = e(a, d), n(k) && (c(a, k, !b) ? (d = c(a, k, !b)) && n(d) && d.is(a.triggers) && f(k) : f(k)))
                            }
                        }
                    }()
                }
            } function g(a, b) { if (!b || b.type != CKEDITOR.NODE_ELEMENT || !b.$) return !1; var d = a.line; return d.wrap.equals(b) || d.wrap.contains(b) } function n(a) { return a && a.type == CKEDITOR.NODE_ELEMENT && a.$ } function r(a) { if (!n(a)) return !1; var b; (b = w(a)) || (n(a) ? (b = { left: 1, right: 1, center: 1 }, b = !(!b[a.getComputedStyle("float")] && !b[a.getAttribute("align")])) : b = !1); return b } function w(a) { return !!{ absolute: 1, fixed: 1 }[a.getComputedStyle("position")] }
            function q(a, b) { return n(b) ? b.is(a.triggers) : null } function p(a, b) { if (!b) return !1; for (var d = b.getParents(1), c = d.length; c--;) for (var e = a.tabuList.length; e--;) if (d[c].hasAttribute(a.tabuList[e])) return !0; return !1 } function u(a, b, d) { b = b[d ? "getLast" : "getFirst"](function (b) { return a.isRelevant(b) && !b.is(ha) }); if (!b) return !1; v(a, b); return d ? b.size.top > a.mouse.y : b.size.bottom < a.mouse.y } function x(a) {
                var b = a.editable, d = a.mouse, c = a.view, e = a.triggerOffset; y(a); var k = d.y > (a.inInlineMode ? c.editable.top + c.editable.height /
                2 : Math.min(c.editable.height, c.pane.height) / 2), b = b[k ? "getLast" : "getFirst"](function (a) { return !(P(a) || S(a)) }); if (!b) return null; g(a, b) && (b = a.line.wrap[k ? "getPrevious" : "getNext"](function (a) { return !(P(a) || S(a)) })); if (!n(b) || r(b) || !q(a, b)) return null; v(a, b); return !k && 0 <= b.size.top && m(d.y, 0, b.size.top + e) ? (a = a.inInlineMode || 0 === c.scroll.y ? Q : X, new f([null, b, I, L, a])) : k && b.size.bottom <= c.pane.height && m(d.y, b.size.bottom - e, c.pane.height) ? (a = a.inInlineMode || m(b.size.bottom, c.pane.height - e, c.pane.height) ? O :
                X, new f([b, null, K, L, a])) : null
            } function t(a) {
                var b = a.mouse, d = a.view, g = a.triggerOffset, k = e(a); if (!k) return null; v(a, k); var g = Math.min(g, 0 | k.size.outerHeight / 2), h = [], l, p; if (m(b.y, k.size.top - 1, k.size.top + g)) p = !1; else if (m(b.y, k.size.bottom - g, k.size.bottom + 1)) p = !0; else return null; if (r(k) || u(a, k, p) || k.getParent().is(Y)) return null; var N = c(a, k, !p); if (N) { if (N && N.type == CKEDITOR.NODE_TEXT) return null; if (n(N)) { if (r(N) || !q(a, N) || N.getParent().is(Y)) return null; h = [N, k][p ? "reverse" : "concat"]().concat([C, L]) } } else k.equals(a.editable[p ?
                "getLast" : "getFirst"](a.isRelevant)) ? (y(a), p && m(b.y, k.size.bottom - g, d.pane.height) && m(k.size.bottom, d.pane.height - g, d.pane.height) ? l = O : m(b.y, 0, k.size.top + g) && (l = Q)) : l = X, h = [null, k][p ? "reverse" : "concat"]().concat([p ? K : I, L, l, k.equals(a.editable[p ? "getLast" : "getFirst"](a.isRelevant)) ? p ? O : Q : X]); return 0 in h ? new f(h) : null
            } function B(a, b, d, c) {
                for (var e = b.getDocumentPosition(), f = {}, g = {}, k = {}, h = {}, l = N.length; l--;) f[N[l]] = parseInt(b.getComputedStyle.call(b, "border-" + N[l] + "-width"), 10) || 0, k[N[l]] = parseInt(b.getComputedStyle.call(b,
                "padding-" + N[l]), 10) || 0, g[N[l]] = parseInt(b.getComputedStyle.call(b, "margin-" + N[l]), 10) || 0; d && !c || z(a, c); h.top = e.y - (d ? 0 : a.view.scroll.y); h.left = e.x - (d ? 0 : a.view.scroll.x); h.outerWidth = b.$.offsetWidth; h.outerHeight = b.$.offsetHeight; h.height = h.outerHeight - (k.top + k.bottom + f.top + f.bottom); h.width = h.outerWidth - (k.left + k.right + f.left + f.right); h.bottom = h.top + h.outerHeight; h.right = h.left + h.outerWidth; a.inInlineMode && (h.scroll = { top: b.$.scrollTop, left: b.$.scrollLeft }); return D({ border: f, padding: k, margin: g, ignoreScroll: d },
                h, !0)
            } function v(a, b, d) { if (!n(b)) return b.size = null; if (!b.size) b.size = {}; else if (b.size.ignoreScroll == d && b.size.date > new Date - aa) return null; return D(b.size, B(a, b, d), { date: +new Date }, !0) } function y(a, b) { a.view.editable = B(a, a.editable, b, !0) } function z(a, b) {
                a.view || (a.view = {}); var d = a.view; if (!(!b && d && d.date > new Date - aa)) {
                    var c = a.win, d = c.getScrollPosition(), c = c.getViewPaneSize(); D(a.view, {
                        scroll: {
                            x: d.x, y: d.y, width: a.doc.$.documentElement.scrollWidth - c.width, height: a.doc.$.documentElement.scrollHeight -
                            c.height
                        }, pane: { width: c.width, height: c.height, bottom: c.height + d.y }, date: +new Date
                    }, !0)
                }
            } function A(a, b, d, c) { for (var e = c, g = c, k = 0, h = !1, l = !1, m = a.view.pane.height, n = a.mouse; n.y + k < m && 0 < n.y - k;) { h || (h = b(e, c)); l || (l = b(g, c)); !h && 0 < n.y - k && (e = d(a, { x: n.x, y: n.y - k })); !l && n.y + k < m && (g = d(a, { x: n.x, y: n.y + k })); if (h && l) break; k += 2 } return new f([e, g, null, null]) } CKEDITOR.plugins.add("magicline", {
                init: function (a) {
                    var b = a.config, h = b.magicline_triggerOffset || 30, m = {
                        editor: a, enterMode: b.enterMode, triggerOffset: h, holdDistance: 0 |
                        h * (b.magicline_holdDistance || .5), boxColor: b.magicline_color || "#ff0000", rtl: "rtl" == b.contentsLangDirection, tabuList: ["data-cke-hidden-sel"].concat(b.magicline_tabuList || []), triggers: b.magicline_everywhere ? U : { table: 1, hr: 1, div: 1, ul: 1, ol: 1, dl: 1, form: 1, blockquote: 1 }
                    }, N, u, q; m.isRelevant = function (a) { return n(a) && !g(m, a) && !r(a) }; a.on("contentDom", function () {
                        var h = a.editable(), n = a.document, r = a.window; D(m, { editable: h, inInlineMode: h.isInline(), doc: n, win: r, hotNode: null }, !0); m.boundary = m.inInlineMode ? m.editable :
                        m.doc.getDocumentElement(); h.is(F.$inline) || (m.inInlineMode && !w(h) && h.setStyles({ position: "relative", top: null, left: null }), l.call(this, m), z(m), h.attachListener(a, "beforeUndoImage", function () { m.line.detach() }), h.attachListener(a, "beforeGetData", function () { m.line.wrap.getParent() && (m.line.detach(), a.once("getData", function () { m.line.attach() }, null, null, 1E3)) }, null, null, 0), h.attachListener(m.inInlineMode ? n : n.getWindow().getFrame(), "mouseout", function (b) {
                            if ("wysiwyg" == a.mode) if (m.inInlineMode) {
                                var d = b.data.$.clientX;
                                b = b.data.$.clientY; z(m); y(m, !0); var c = m.view.editable, e = m.view.scroll; d > c.left - e.x && d < c.right - e.x && b > c.top - e.y && b < c.bottom - e.y || (clearTimeout(q), q = null, m.line.detach())
                            } else clearTimeout(q), q = null, m.line.detach()
                        }), h.attachListener(h, "keyup", function () { m.hiddenMode = 0 }), h.attachListener(h, "keydown", function (b) { if ("wysiwyg" == a.mode) switch (b.data.getKeystroke()) { case 2228240: case 16: m.hiddenMode = 1, m.line.detach() } }), h.attachListener(m.inInlineMode ? h : n, "mousemove", function (b) {
                            u = !0; if ("wysiwyg" == a.mode &&
                            !a.readOnly && !q) { var d = { x: b.data.$.clientX, y: b.data.$.clientY }; q = setTimeout(function () { m.mouse = d; q = m.trigger = null; z(m); u && !m.hiddenMode && a.focusManager.hasFocus && !m.line.mouseNear() && (m.element = Z(m, !0)) && ((m.trigger = x(m) || t(m) || R(m)) && !p(m, m.trigger.upper || m.trigger.lower) ? m.line.attach().place() : (m.trigger = null, m.line.detach()), u = !1) }, 30) }
                        }), h.attachListener(r, "scroll", function () {
                            "wysiwyg" == a.mode && (m.line.detach(), J.webkit && (m.hiddenMode = 1, clearTimeout(N), N = setTimeout(function () {
                                m.mouseDown || (m.hiddenMode =
                                0)
                            }, 50)))
                        }), h.attachListener(H ? n : r, "mousedown", function () { "wysiwyg" == a.mode && (m.line.detach(), m.hiddenMode = 1, m.mouseDown = 1) }), h.attachListener(H ? n : r, "mouseup", function () { m.hiddenMode = 0; m.mouseDown = 0 }), a.addCommand("accessPreviousSpace", k(m)), a.addCommand("accessNextSpace", k(m, !0)), a.setKeystroke([[b.magicline_keystrokePrevious, "accessPreviousSpace"], [b.magicline_keystrokeNext, "accessNextSpace"]]), a.on("loadSnapshot", function () {
                            var b, d, c, e; for (e in { p: 1, br: 1, div: 1 }) for (b = a.document.getElementsByTag(e),
                            c = b.count() ; c--;) if ((d = b.getItem(c)).data("cke-magicline-hot")) { m.hotNode = d; m.lastCmdDirection = "true" === d.data("cke-magicline-dir") ? !0 : !1; return }
                        }), a._.magiclineBackdoor = { accessFocusSpace: d, boxTrigger: f, isLine: g, getAscendantTrigger: e, getNonEmptyNeighbour: c, getSize: B, that: m, triggerEdge: t, triggerEditable: x, triggerExpand: R })
                    }, this)
                }
            }); var D = CKEDITOR.tools.extend, G = CKEDITOR.dom.element, E = G.createFromHtml, J = CKEDITOR.env, H = CKEDITOR.env.ie && 9 > CKEDITOR.env.version, F = CKEDITOR.dtd, M = {}, I = 128, K = 64, C = 32, L = 16,
            Q = 4, O = 2, X = 1, T = " ", Y = F.$listItem, ha = F.$tableContent, W = D({}, F.$nonEditable, F.$empty), U = F.$block, aa = 100, ba = "width:0px;height:0px;padding:0px;margin:0px;display:block;z-index:9999;color:#fff;position:absolute;font-size: 0px;line-height:0px;", V = ba + "border-color:transparent;display:block;border-style:solid;", da = "\x3cspan\x3e" + T + "\x3c/span\x3e"; M[CKEDITOR.ENTER_BR] = "br"; M[CKEDITOR.ENTER_P] = "p"; M[CKEDITOR.ENTER_DIV] = "div"; f.prototype = {
                set: function (a, b, d) { this.properties = a + b + (d || X); return this }, is: function (a) {
                    return (this.properties &
                    a) == a
                }
            }; var Z = function () { function a(b, d) { var c = b.$.elementFromPoint(d.x, d.y); return c && c.nodeType ? new CKEDITOR.dom.element(c) : null } return function (b, d, c) { if (!b.mouse) return null; var e = b.doc, f = b.line.wrap; c = c || b.mouse; var k = a(e, c); d && g(b, k) && (f.hide(), k = a(e, c), f.show()); return !k || k.type != CKEDITOR.NODE_ELEMENT || !k.$ || J.ie && 9 > J.version && !b.boundary.equals(k) && !b.boundary.contains(k) ? null : k } }(), P = CKEDITOR.dom.walker.whitespaces(), S = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_COMMENT), R = function () {
                function d(e) {
                    var f =
                    e.element, g, k, h; if (!n(f) || f.contains(e.editable) || f.isReadOnly()) return null; h = A(e, function (a, b) { return !b.equals(a) }, function (a, b) { return Z(a, !0, b) }, f); g = h.upper; k = h.lower; if (a(e, g, k)) return h.set(C, 8); if (g && f.contains(g)) for (; !g.getParent().equals(f) ;) g = g.getParent(); else g = f.getFirst(function (a) { return c(e, a) }); if (k && f.contains(k)) for (; !k.getParent().equals(f) ;) k = k.getParent(); else k = f.getLast(function (a) { return c(e, a) }); if (!g || !k) return null; v(e, g); v(e, k); if (!m(e.mouse.y, g.size.top, k.size.bottom)) return null;
                    for (var f = Number.MAX_VALUE, l, p, N, t; k && !k.equals(g) && (p = g.getNext(e.isRelevant)) ;) l = Math.abs(b(e, g, p) - e.mouse.y), l < f && (f = l, N = g, t = p), g = p, v(e, g); if (!N || !t || !m(e.mouse.y, N.size.top, t.size.bottom)) return null; h.upper = N; h.lower = t; return h.set(C, 8)
                } function c(a, b) { return !(b && b.type == CKEDITOR.NODE_TEXT || S(b) || r(b) || g(a, b) || b.type == CKEDITOR.NODE_ELEMENT && b.$ && b.is("br")) } return function (b) {
                    var c = d(b), e; if (e = c) {
                        e = c.upper; var f = c.lower; e = !e || !f || r(f) || r(e) || f.equals(e) || e.equals(f) || f.contains(e) || e.contains(f) ?
                        !1 : q(b, e) && q(b, f) && a(b, e, f) ? !0 : !1
                    } return e ? c : null
                }
            }(), N = ["top", "left", "right", "bottom"]
        })(); CKEDITOR.config.magicline_keystrokePrevious = CKEDITOR.CTRL + CKEDITOR.SHIFT + 51; CKEDITOR.config.magicline_keystrokeNext = CKEDITOR.CTRL + CKEDITOR.SHIFT + 52; (function () {
            function a(a) { if (!a || a.type != CKEDITOR.NODE_ELEMENT || "form" != a.getName()) return []; for (var b = [], c = ["style", "className"], d = 0; d < c.length; d++) { var e = a.$.elements.namedItem(c[d]); e && (e = new CKEDITOR.dom.element(e), b.push([e, e.nextSibling]), e.remove()) } return b }
            function f(a, b) { if (a && a.type == CKEDITOR.NODE_ELEMENT && "form" == a.getName() && 0 < b.length) for (var c = b.length - 1; 0 <= c; c--) { var d = b[c][0], e = b[c][1]; e ? d.insertBefore(e) : d.appendTo(a) } } function e(b, c) { var e = a(b), d = {}, k = b.$; c || (d["class"] = k.className || "", k.className = ""); d.inline = k.style.cssText || ""; c || (k.style.cssText = "position: static; overflow: visible"); f(e); return d } function b(b, c) { var e = a(b), d = b.$; "class" in c && (d.className = c["class"]); "inline" in c && (d.style.cssText = c.inline); f(e) } function c(a) {
                if (!a.editable().isInline()) {
                    var b =
                    CKEDITOR.instances, c; for (c in b) { var d = b[c]; "wysiwyg" != d.mode || d.readOnly || (d = d.document.getBody(), d.setAttribute("contentEditable", !1), d.setAttribute("contentEditable", !0)) } a.editable().hasFocus && (a.toolbox.focus(), a.focus())
                }
            } CKEDITOR.plugins.add("maximize", {
                init: function (a) {
                    function f() { var b = k.getViewPaneSize(); a.resize(b.width, b.height, null, !0) } if (a.elementMode != CKEDITOR.ELEMENT_MODE_INLINE) {
                        var l = a.lang, d = CKEDITOR.document, k = d.getWindow(), g, n, r, w = CKEDITOR.TRISTATE_OFF; a.addCommand("maximize",
                        {
                            modes: { wysiwyg: !CKEDITOR.env.iOS, source: !CKEDITOR.env.iOS }, readOnly: 1, editorFocus: !1, exec: function () {
                                var q = a.container.getFirst(function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasClass("cke_inner") }), p = a.ui.space("contents"); if ("wysiwyg" == a.mode) { var u = a.getSelection(); g = u && u.getRanges(); n = k.getScrollPosition() } else { var x = a.editable().$; g = !CKEDITOR.env.ie && [x.selectionStart, x.selectionEnd]; n = [x.scrollLeft, x.scrollTop] } if (this.state == CKEDITOR.TRISTATE_OFF) {
                                    k.on("resize", f); r = k.getScrollPosition();
                                    for (u = a.container; u = u.getParent() ;) u.setCustomData("maximize_saved_styles", e(u)), u.setStyle("z-index", a.config.baseFloatZIndex - 5); p.setCustomData("maximize_saved_styles", e(p, !0)); q.setCustomData("maximize_saved_styles", e(q, !0)); p = { overflow: CKEDITOR.env.webkit ? "" : "hidden", width: 0, height: 0 }; d.getDocumentElement().setStyles(p); !CKEDITOR.env.gecko && d.getDocumentElement().setStyle("position", "fixed"); CKEDITOR.env.gecko && CKEDITOR.env.quirks || d.getBody().setStyles(p); CKEDITOR.env.ie ? setTimeout(function () {
                                        k.$.scrollTo(0,
                                        0)
                                    }, 0) : k.$.scrollTo(0, 0); q.setStyle("position", CKEDITOR.env.gecko && CKEDITOR.env.quirks ? "fixed" : "absolute"); q.$.offsetLeft; q.setStyles({ "z-index": a.config.baseFloatZIndex - 5, left: "0px", top: "0px" }); q.addClass("cke_maximized"); f(); p = q.getDocumentPosition(); q.setStyles({ left: -1 * p.x + "px", top: -1 * p.y + "px" }); CKEDITOR.env.gecko && c(a)
                                } else if (this.state == CKEDITOR.TRISTATE_ON) {
                                    k.removeListener("resize", f); for (var u = [p, q], t = 0; t < u.length; t++) b(u[t], u[t].getCustomData("maximize_saved_styles")), u[t].removeCustomData("maximize_saved_styles");
                                    for (u = a.container; u = u.getParent() ;) b(u, u.getCustomData("maximize_saved_styles")), u.removeCustomData("maximize_saved_styles"); CKEDITOR.env.ie ? setTimeout(function () { k.$.scrollTo(r.x, r.y) }, 0) : k.$.scrollTo(r.x, r.y); q.removeClass("cke_maximized"); CKEDITOR.env.webkit && (q.setStyle("display", "inline"), setTimeout(function () { q.setStyle("display", "block") }, 0)); a.fire("resize", { outerHeight: a.container.$.offsetHeight, contentsHeight: p.$.offsetHeight, outerWidth: a.container.$.offsetWidth })
                                } this.toggleState(); if (u =
                                this.uiItems[0]) p = this.state == CKEDITOR.TRISTATE_OFF ? l.maximize.maximize : l.maximize.minimize, u = CKEDITOR.document.getById(u._.id), u.getChild(1).setHtml(p), u.setAttribute("title", p), u.setAttribute("href", 'javascript:void("' + p + '");'); "wysiwyg" == a.mode ? g ? (CKEDITOR.env.gecko && c(a), a.getSelection().selectRanges(g), (x = a.getSelection().getStartElement()) && x.scrollIntoView(!0)) : k.$.scrollTo(n.x, n.y) : (g && (x.selectionStart = g[0], x.selectionEnd = g[1]), x.scrollLeft = n[0], x.scrollTop = n[1]); g = n = null; w = this.state; a.fire("maximize",
                                this.state)
                            }, canUndo: !1
                        }); a.ui.addButton && a.ui.addButton("Maximize", { label: l.maximize.maximize, command: "maximize", toolbar: "tools,10" }); a.on("mode", function () { var b = a.getCommand("maximize"); b.setState(b.state == CKEDITOR.TRISTATE_DISABLED ? CKEDITOR.TRISTATE_DISABLED : w) }, null, null, 100)
                    }
                }
            })
        })(); (function () {
            function a(a, b) { return CKEDITOR.tools.array.filter(a, function (a) { return a.canHandle(b) }).sort(function (a, b) { return a.priority === b.priority ? 0 : a.priority - b.priority }) } function f(a, b) {
                var d = a.shift(); d &&
                d.handle(b, function () { f(a, b) })
            } function e(a) { var b = CKEDITOR.tools.array.reduce(a, function (a, b) { return CKEDITOR.tools.array.isArray(b.filters) ? a.concat(b.filters) : a }, []); return CKEDITOR.tools.array.filter(b, function (a, c) { return CKEDITOR.tools.array.indexOf(b, a) === c }) } function b(a, b) {
                var d = 0, e, f; if (!CKEDITOR.tools.array.isArray(a) || 0 === a.length) return !0; e = CKEDITOR.tools.array.filter(a, function (a) { return -1 === CKEDITOR.tools.array.indexOf(c, a) }); if (0 < e.length) for (f = 0; f < e.length; f++) (function (a) {
                    CKEDITOR.scriptLoader.queue(a,
                    function (f) { f && c.push(a); ++d === e.length && b() })
                })(e[f]); return 0 === e.length
            } var c = [], m = CKEDITOR.tools.createClass({ $: function () { this.handlers = [] }, proto: { register: function (a) { "number" !== typeof a.priority && (a.priority = 10); this.handlers.push(a) }, addPasteListener: function (c) { c.on("paste", function (l) { var d = a(this.handlers, l), k; if (0 !== d.length) { k = e(d); k = b(k, function () { return c.fire("paste", l.data) }); if (!k) return l.cancel(); f(d, l) } }, this, null, 3) } } }); CKEDITOR.plugins.add("pastetools", {
                requires: "clipboard",
                beforeInit: function (a) { a.pasteTools = new m; a.pasteTools.addPasteListener(a) }
            }); CKEDITOR.plugins.pastetools = {
                filters: {}, loadFilters: b, createFilter: function (a) { var b = CKEDITOR.tools.array.isArray(a.rules) ? a.rules : [a.rules], d = a.additionalTransforms; return function (a, c) { var e = new CKEDITOR.htmlParser.basicWriter, f = new CKEDITOR.htmlParser.filter, h; d && (a = d(a, c)); CKEDITOR.tools.array.forEach(b, function (b) { f.addRules(b(a, c, f)) }); h = CKEDITOR.htmlParser.fragment.fromHtml(a); f.applyTo(h); h.writeHtml(e); return e.getHtml() } },
                getClipboardData: function (a, b) { var d; return CKEDITOR.plugins.clipboard.isCustomDataTypesSupported || "text/html" === b ? (d = a.dataTransfer.getData(b, !0)) || "text/html" !== b ? d : a.dataValue : null }, getConfigValue: function (a, b) { if (a && a.config) { var d = CKEDITOR.tools, c = a.config, e = d.object.keys(c), f = ["pasteTools_" + b, "pasteFromWord_" + b, "pasteFromWord" + d.capitalize(b, !0)], f = d.array.find(f, function (a) { return -1 !== d.array.indexOf(e, a) }); return c[f] } }, getContentGeneratorName: function (a) {
                    if ((a = /<meta\s+name=["']?generator["']?\s+content=["']?(\w+)/gi.exec(a)) &&
                    a.length) return a = a[1].toLowerCase(), 0 === a.indexOf("microsoft") ? "microsoft" : 0 === a.indexOf("libreoffice") ? "libreoffice" : "unknown"
                }
            }; CKEDITOR.pasteFilters = {}
        })(); (function () {
            CKEDITOR.plugins.add("pastefromgdocs", {
                requires: "pastetools", init: function (a) {
                    var f = CKEDITOR.plugins.getPath("pastetools"), e = this.path; a.pasteTools.register({
                        filters: [CKEDITOR.getUrl(f + "filter/common.js"), CKEDITOR.getUrl(e + "filter/default.js")], canHandle: function (a) { return /id=(\"|\')?docs\-internal\-guid\-/.test(a.data.dataValue) },
                        handle: function (b, c) { var e = b.data, f = CKEDITOR.plugins.pastetools.getClipboardData(e, "text/html"); e.dontFilter = !0; e.dataValue = CKEDITOR.pasteFilters.gdocs(f, a); !0 === a.config.forcePasteAsPlainText && (e.type = "text"); c() }
                    })
                }
            })
        })(); (function () {
            CKEDITOR.plugins.add("pastefromlibreoffice", {
                requires: "pastetools", isSupportedEnvironment: function () { var a = CKEDITOR.env.ie && 11 >= CKEDITOR.env.version; return !(CKEDITOR.env.webkit && !CKEDITOR.env.chrome) && !a }, init: function (a) {
                    if (this.isSupportedEnvironment()) {
                        var f = CKEDITOR.plugins.getPath("pastetools"),
                        e = this.path; a.pasteTools.register({
                            priority: 100, filters: [CKEDITOR.getUrl(f + "filter/common.js"), CKEDITOR.getUrl(f + "filter/image.js"), CKEDITOR.getUrl(e + "filter/default.js")], canHandle: function (a) { a = a.data; return (a = a.dataTransfer.getData("text/html", !0) || a.dataValue) ? "libreoffice" === CKEDITOR.plugins.pastetools.getContentGeneratorName(a) : !1 }, handle: function (b, c) {
                                var e = b.data, f = e.dataValue || CKEDITOR.plugins.pastetools.getClipboardData(e, "text/html"); e.dontFilter = !0; f = CKEDITOR.pasteFilters.image(f, a, CKEDITOR.plugins.pastetools.getClipboardData(e,
                                "text/rtf")); e.dataValue = CKEDITOR.pasteFilters.libreoffice(f, a); !0 === a.config.forcePasteAsPlainText && (e.type = "text"); c()
                            }
                        })
                    }
                }
            })
        })(); (function () {
            CKEDITOR.plugins.add("pastefromword", {
                requires: "pastetools", init: function (a) {
                    function f(a) {
                        var b = CKEDITOR.plugins.pastefromword && CKEDITOR.plugins.pastefromword.images, d, c = []; if (b && a.editor.filter.check("img[src]") && (d = b.extractTagsFromHtml(a.data.dataValue), 0 !== d.length && (b = b.extractFromRtf(a.data.dataTransfer["text/rtf"]), 0 !== b.length && (CKEDITOR.tools.array.forEach(b,
                        function (a) { c.push(a.type ? "data:" + a.type + ";base64," + CKEDITOR.tools.convertBytesToBase64(CKEDITOR.tools.convertHexStringToBytes(a.hex)) : null) }, this), d.length === c.length)))) for (b = 0; b < d.length; b++) 0 === d[b].indexOf("file://") && c[b] && (a.data.dataValue = a.data.dataValue.replace(d[b], c[b]))
                    } var e = 0, b = CKEDITOR.plugins.getPath("pastetools"), c = this.path, m = void 0 === a.config.pasteFromWord_inlineImages ? !0 : a.config.pasteFromWord_inlineImages, b = [CKEDITOR.getUrl(b + "filter/common.js"), CKEDITOR.getUrl(c + "filter/default.js")];
                    a.addCommand("pastefromword", { canUndo: !1, async: !0, exec: function (a, b) { e = 1; a.execCommand("paste", { type: "html", notification: b && "undefined" !== typeof b.notification ? b.notification : !0 }) } }); CKEDITOR.plugins.clipboard.addPasteButton(a, "PasteFromWord", { label: a.lang.pastefromword.toolbar, command: "pastefromword", toolbar: "clipboard,50" }); a.pasteTools.register({
                        filters: a.config.pasteFromWordCleanupFile ? [a.config.pasteFromWordCleanupFile] : b, canHandle: function (a) {
                            a = CKEDITOR.plugins.pastetools.getClipboardData(a.data,
                            "text/html"); var b = CKEDITOR.plugins.pastetools.getContentGeneratorName(a), d = /(class="?Mso|style=["'][^"]*?\bmso\-|w:WordDocument|<o:\w+>|<\/font>)/, b = b ? "microsoft" === b : d.test(a); return a && (e || b)
                        }, handle: function (b, c) {
                            var d = b.data, f = CKEDITOR.plugins.pastetools.getClipboardData(d, "text/html"), g = CKEDITOR.plugins.pastetools.getClipboardData(d, "text/rtf"), f = { dataValue: f, dataTransfer: { "text/rtf": g } }; if (!1 !== a.fire("pasteFromWord", f) || e) {
                                d.dontFilter = !0; if (e || !a.config.pasteFromWordPromptCleanup || confirm(a.lang.pastefromword.confirmCleanup)) f.dataValue =
                                CKEDITOR.cleanWord(f.dataValue, a), a.fire("afterPasteFromWord", f), d.dataValue = f.dataValue, !0 === a.config.forcePasteAsPlainText ? d.type = "text" : CKEDITOR.plugins.clipboard.isCustomCopyCutSupported || "allow-word" !== a.config.forcePasteAsPlainText || (d.type = "html"); e = 0; c()
                            }
                        }
                    }); if (CKEDITOR.plugins.clipboard.isCustomDataTypesSupported && m) a.on("afterPasteFromWord", f)
                }
            })
        })(); (function () {
            var a = {
                canUndo: !1, async: !0, exec: function (a, e) {
                    var b = a.lang, c = CKEDITOR.tools.keystrokeToString(b.common.keyboard, a.getCommandKeystroke(CKEDITOR.env.ie ?
                    a.commands.paste : this)), m = e && "undefined" !== typeof e.notification ? e.notification : !e || !e.from || "keystrokeHandler" === e.from && CKEDITOR.env.ie, b = m && "string" === typeof m ? m : b.pastetext.pasteNotification.replace(/%1/, '\x3ckbd aria-label\x3d"' + c.aria + '"\x3e' + c.display + "\x3c/kbd\x3e"); a.execCommand("paste", { type: "text", notification: m ? b : !1 })
                }
            }; CKEDITOR.plugins.add("pastetext", {
                requires: "clipboard", init: function (f) {
                    var e = CKEDITOR.env.safari ? CKEDITOR.CTRL + CKEDITOR.ALT + CKEDITOR.SHIFT + 86 : CKEDITOR.CTRL + CKEDITOR.SHIFT +
                    86; f.addCommand("pastetext", a); f.setKeystroke(e, "pastetext"); CKEDITOR.plugins.clipboard.addPasteButton(f, "PasteText", { label: f.lang.pastetext.button, command: "pastetext", toolbar: "clipboard,40" }); if (f.config.forcePasteAsPlainText) f.on("beforePaste", function (a) { "html" != a.data.type && (a.data.type = "text") }); f.on("pasteState", function (a) { f.getCommand("pastetext").setState(a.data) })
                }
            })
        })(); CKEDITOR.plugins.add("removeformat", {
            init: function (a) {
                a.addCommand("removeFormat", CKEDITOR.plugins.removeformat.commands.removeformat);
                a.ui.addButton && a.ui.addButton("RemoveFormat", { label: a.lang.removeformat.toolbar, command: "removeFormat", toolbar: "cleanup,10" })
            }
        }); CKEDITOR.plugins.removeformat = {
            commands: {
                removeformat: {
                    exec: function (a) {
                        for (var f = a._.removeFormatRegex || (a._.removeFormatRegex = new RegExp("^(?:" + a.config.removeFormatTags.replace(/,/g, "|") + ")$", "i")), e = a._.removeAttributes || (a._.removeAttributes = a.config.removeFormatAttributes.split(",")), b = CKEDITOR.plugins.removeformat.filter, c = a.getSelection().getRanges(), m = c.createIterator(),
                        h = function (a) { return a.type == CKEDITOR.NODE_ELEMENT }, l; l = m.getNextRange() ;) {
                            l.enlarge(CKEDITOR.ENLARGE_INLINE); var d = l.createBookmark(), k = d.startNode, g = d.endNode, n = function (d) { for (var c = a.elementPath(d), e = c.elements, g = 1, k; (k = e[g]) && !k.equals(c.block) && !k.equals(c.blockLimit) ; g++) f.test(k.getName()) && b(a, k) && d.breakParent(k) }; n(k); if (g) for (n(g), k = k.getNextSourceNode(!0, CKEDITOR.NODE_ELEMENT) ; k && !k.equals(g) ;) if (k.isReadOnly()) { if (k.getPosition(g) & CKEDITOR.POSITION_CONTAINS) break; k = k.getNext(h) } else n =
                            k.getNextSourceNode(!1, CKEDITOR.NODE_ELEMENT), "img" == k.getName() && k.data("cke-realelement") || !b(a, k) || (f.test(k.getName()) ? k.remove(1) : (k.removeAttributes(e), a.fire("removeFormatCleanup", k))), k = n; l.moveToBookmark(d)
                        } a.forceNextSelectionCheck(); a.getSelection().selectRanges(c)
                    }
                }
            }, filter: function (a, f) { for (var e = a._.removeFormatFilters || [], b = 0; b < e.length; b++) if (!1 === e[b](f)) return !1; return !0 }
        }; CKEDITOR.editor.prototype.addRemoveFormatFilter = function (a) {
            this._.removeFormatFilters || (this._.removeFormatFilters =
            []); this._.removeFormatFilters.push(a)
        }; CKEDITOR.config.removeFormatTags = "b,big,cite,code,del,dfn,em,font,i,ins,kbd,q,s,samp,small,span,strike,strong,sub,sup,tt,u,var"; CKEDITOR.config.removeFormatAttributes = "class,style,lang,width,height,align,hspace,valign"; CKEDITOR.plugins.add("resize", {
            init: function (a) {
                function f(c) {
                    var e = d.width, f = d.height, h = e + (c.data.$.screenX - l.x) * ("rtl" == m ? -1 : 1); c = f + (c.data.$.screenY - l.y); k && (e = Math.max(b.resize_minWidth, Math.min(h, b.resize_maxWidth))); g && (f = Math.max(b.resize_minHeight,
                    Math.min(c, b.resize_maxHeight))); a.resize(k ? e : null, f)
                } function e() { CKEDITOR.document.removeListener("mousemove", f); CKEDITOR.document.removeListener("mouseup", e); a.document && (a.document.removeListener("mousemove", f), a.document.removeListener("mouseup", e)) } var b = a.config, c = a.ui.spaceId("resizer"), m = a.element ? a.element.getDirection(1) : "ltr"; !b.resize_dir && (b.resize_dir = "vertical"); void 0 === b.resize_maxWidth && (b.resize_maxWidth = 3E3); void 0 === b.resize_maxHeight && (b.resize_maxHeight = 3E3); void 0 === b.resize_minWidth &&
                (b.resize_minWidth = 750); void 0 === b.resize_minHeight && (b.resize_minHeight = 250); if (!1 !== b.resize_enabled) {
                    var h = null, l, d, k = ("both" == b.resize_dir || "horizontal" == b.resize_dir) && b.resize_minWidth != b.resize_maxWidth, g = ("both" == b.resize_dir || "vertical" == b.resize_dir) && b.resize_minHeight != b.resize_maxHeight, n = CKEDITOR.tools.addFunction(function (c) {
                        h || (h = a.getResizable()); d = { width: h.$.offsetWidth || 0, height: h.$.offsetHeight || 0 }; l = { x: c.screenX, y: c.screenY }; b.resize_minWidth > d.width && (b.resize_minWidth = d.width);
                        b.resize_minHeight > d.height && (b.resize_minHeight = d.height); CKEDITOR.document.on("mousemove", f); CKEDITOR.document.on("mouseup", e); a.document && (a.document.on("mousemove", f), a.document.on("mouseup", e)); c.preventDefault && c.preventDefault()
                    }); a.on("destroy", function () { CKEDITOR.tools.removeFunction(n) }); a.on("uiSpace", function (b) {
                        if ("bottom" == b.data.space) {
                            var d = ""; k && !g && (d = " cke_resizer_horizontal"); !k && g && (d = " cke_resizer_vertical"); var e = '\x3cspan id\x3d"' + c + '" class\x3d"cke_resizer' + d + " cke_resizer_" +
                            m + '" title\x3d"' + CKEDITOR.tools.htmlEncode(a.lang.common.resize) + '" onmousedown\x3d"CKEDITOR.tools.callFunction(' + n + ', event)"\x3e' + ("ltr" == m ? "◢" : "◣") + "\x3c/span\x3e"; "ltr" == m && "ltr" == d ? b.data.html += e : b.data.html = e + b.data.html
                        }
                    }, a, null, 100); a.on("maximize", function (b) { a.ui.space("resizer")[b.data == CKEDITOR.TRISTATE_ON ? "hide" : "show"]() })
                }
            }
        }); CKEDITOR.plugins.add("menubutton", {
            requires: "button,menu", onLoad: function () {
                var a = function (a) {
                    var e = this._, b = e.menu; e.state !== CKEDITOR.TRISTATE_DISABLED && (e.on &&
                    b ? b.hide() : (e.previousState = e.state, b || (b = e.menu = new CKEDITOR.menu(a, { panel: { className: "cke_menu_panel", attributes: { "aria-label": a.lang.common.options } } }), b.onHide = CKEDITOR.tools.bind(function () { var b = this.command ? a.getCommand(this.command).modes : this.modes; this.setState(!b || b[a.mode] ? e.previousState : CKEDITOR.TRISTATE_DISABLED); e.on = 0 }, this), this.onMenu && b.addListener(this.onMenu)), this.setState(CKEDITOR.TRISTATE_ON), e.on = 1, setTimeout(function () { b.show(CKEDITOR.document.getById(e.id), 4) }, 0)))
                }; CKEDITOR.ui.menuButton =
                CKEDITOR.tools.createClass({ base: CKEDITOR.ui.button, $: function (f) { delete f.panel; this.base(f); this.hasArrow = "menu"; this.click = a }, statics: { handler: { create: function (a) { return new CKEDITOR.ui.menuButton(a) } } } })
            }, beforeInit: function (a) { a.ui.addHandler(CKEDITOR.UI_MENUBUTTON, CKEDITOR.ui.menuButton.handler) }
        });


        
        CKEDITOR.UI_MENUBUTTON = "menubutton"; "use strict"; CKEDITOR.plugins.add("scayt", {
            requires: "menubutton,dialog", tabToOpen: null, dialogName: "scaytDialog", onLoad: function (a) {
                "moono-lisa" == (CKEDITOR.skinName ||
                a.config.skin) && CKEDITOR.document.appendStyleSheet(CKEDITOR.getUrl(this.path + "skins/" + CKEDITOR.skin.name + "/scayt.css")); CKEDITOR.document.appendStyleSheet(CKEDITOR.getUrl(this.path + "dialogs/dialog.css")); var f = !1; CKEDITOR.on("instanceLoaded", function (a) {
                    if (!f && CKEDITOR.plugins.autocomplete) {
                        f = !0; var b = CKEDITOR.plugins.autocomplete.prototype.getModel; CKEDITOR.plugins.autocomplete.prototype.getModel = function (a) {
                            var e = this.editor; a = b.bind(this)(a); a.on("change-isActive", function (a) {
                                a.data ? e.fire("autocompletePanelShow") :
                                e.fire("autocompletePanelHide")
                            }); return a
                        }
                    }
                })
            }, init: function (a) {
                var f = this, e = CKEDITOR.plugins.scayt; this.bindEvents(a); this.parseConfig(a); this.addRule(a); CKEDITOR.dialog.add(this.dialogName, CKEDITOR.getUrl(this.path + "dialogs/options.js")); this.addMenuItems(a); var b = a.lang.scayt, c = CKEDITOR.env; a.ui.add("Scayt", CKEDITOR.UI_MENUBUTTON, {
                    label: b.text_title, title: a.plugins.wsc ? a.lang.wsc.title : b.text_title, modes: { wysiwyg: !(c.ie && (8 > c.version || c.quirks)) }, toolbar: "spellchecker,20", refresh: function () {
                        var b =
                        a.ui.instances.Scayt.getState(); a.scayt && (b = e.state.scayt[a.name] ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF); a.fire("scaytButtonState", b)
                    }, onRender: function () { var b = this; a.on("scaytButtonState", function (a) { void 0 !== typeof a.data && b.setState(a.data) }) }, onMenu: function () {
                        var b = a.scayt; a.getMenuItem("scaytToggle").label = a.lang.scayt[b && e.state.scayt[a.name] ? "btn_disable" : "btn_enable"]; var c = {
                            scaytToggle: CKEDITOR.TRISTATE_OFF, scaytOptions: b ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, scaytLangs: b ?
                            CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, scaytDict: b ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, scaytAbout: b ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, WSC: a.plugins.wsc ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED
                        }; a.config.scayt_uiTabs[0] || delete c.scaytOptions; a.config.scayt_uiTabs[1] || delete c.scaytLangs; a.config.scayt_uiTabs[2] || delete c.scaytDict; b && !CKEDITOR.plugins.scayt.isNewUdSupported(b) && (delete c.scaytDict, a.config.scayt_uiTabs[2] = 0, CKEDITOR.plugins.scayt.alarmCompatibilityMessage());
                        return c
                    }
                }); a.contextMenu && a.addMenuItems && (a.contextMenu.addListener(function (b, c) { var e = a.scayt, d, k; e && (k = e.getSelectionNode()) && (d = f.menuGenerator(a, k), e.showBanner("." + a.contextMenu._.definition.panel.className.split(" ").join(" ."))); return d }), a.contextMenu._.onHide = CKEDITOR.tools.override(a.contextMenu._.onHide, function (b) { return function () { var c = a.scayt; c && c.hideBanner(); return b.apply(this) } }))
            }, addMenuItems: function (a) {
                var f = this, e = CKEDITOR.plugins.scayt; a.addMenuGroup("scaytButton"); for (var b =
                a.config.scayt_contextMenuItemsOrder.split("|"), c = 0; c < b.length; c++) b[c] = "scayt_" + b[c]; if ((b = ["grayt_description", "grayt_suggest", "grayt_control"].concat(b)) && b.length) for (c = 0; c < b.length; c++) a.addMenuGroup(b[c], c - 10); a.addCommand("scaytToggle", { exec: function (a) { var b = a.scayt; e.state.scayt[a.name] = !e.state.scayt[a.name]; !0 === e.state.scayt[a.name] ? b || e.createScayt(a) : b && e.destroy(a) } }); a.addCommand("scaytAbout", { exec: function (a) { a.scayt.tabToOpen = "about"; e.openDialog(f.dialogName, a) } }); a.addCommand("scaytOptions",
                { exec: function (a) { a.scayt.tabToOpen = "options"; e.openDialog(f.dialogName, a) } }); a.addCommand("scaytLangs", { exec: function (a) { a.scayt.tabToOpen = "langs"; e.openDialog(f.dialogName, a) } }); a.addCommand("scaytDict", { exec: function (a) { a.scayt.tabToOpen = "dictionaries"; e.openDialog(f.dialogName, a) } }); b = {
                    scaytToggle: { label: a.lang.scayt.btn_enable, group: "scaytButton", command: "scaytToggle" }, scaytAbout: { label: a.lang.scayt.btn_about, group: "scaytButton", command: "scaytAbout" }, scaytOptions: {
                        label: a.lang.scayt.btn_options,
                        group: "scaytButton", command: "scaytOptions"
                    }, scaytLangs: { label: a.lang.scayt.btn_langs, group: "scaytButton", command: "scaytLangs" }, scaytDict: { label: a.lang.scayt.btn_dictionaries, group: "scaytButton", command: "scaytDict" }
                }; a.plugins.wsc && (b.WSC = {
                    label: a.lang.wsc.toolbar, group: "scaytButton", onClick: function () {
                        var b = CKEDITOR.plugins.scayt, c = a.scayt, e = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? a.container.getText() : a.document.getBody().getText(); (e = e.replace(/\s/g, "")) ? (c && b.state.scayt[a.name] && c.setMarkupPaused &&
                        c.setMarkupPaused(!0), a.lockSelection(), a.execCommand("checkspell")) : alert("Nothing to check!")
                    }
                }); a.addMenuItems(b)
            }, bindEvents: function (a) {
                var f = CKEDITOR.plugins.scayt, e = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE, b = function () { f.destroy(a) }, c = function () { !f.state.scayt[a.name] || a.readOnly || a.scayt || f.createScayt(a) }, m = function () {
                    var b = a.editable(); b.attachListener(b, "focus", function (b) {
                        CKEDITOR.plugins.scayt && !a.scayt && setTimeout(c, 0); b = CKEDITOR.plugins.scayt && CKEDITOR.plugins.scayt.state.scayt[a.name] &&
                        a.scayt; var f, g; if ((e || b) && a._.savedSelection) { b = a._.savedSelection.getSelectedElement(); b = !b && a._.savedSelection.getRanges(); for (var h = 0; h < b.length; h++) g = b[h], "string" === typeof g.startContainer.$.nodeValue && (f = g.startContainer.getText().length, (f < g.startOffset || f < g.endOffset) && a.unlockSelection(!1)) }
                    }, this, null, -10)
                }, h = function () {
                    e ? a.config.scayt_inlineModeImmediateMarkup ? c() : (a.on("blur", function () { setTimeout(b, 0) }), a.on("focus", c), a.focusManager.hasFocus && c()) : c(); m(); var f = a.editable(); f.attachListener(f,
                    "mousedown", function (b) { b = b.data.getTarget(); var c = a.widgets && a.widgets.getByElement(b); c && (c.wrapper = b.getAscendant(function (a) { return a.hasAttribute("data-cke-widget-wrapper") }, !0)) }, this, null, -10)
                }; a.on("contentDom", h); a.on("beforeCommandExec", function (b) {
                    var d = a.scayt, c = !1, e = !1, h = !0; b.data.name in f.options.disablingCommandExec && "wysiwyg" == a.mode ? d && (f.destroy(a), a.fire("scaytButtonState", CKEDITOR.TRISTATE_DISABLED)) : "bold" !== b.data.name && "italic" !== b.data.name && "underline" !== b.data.name && "strike" !==
                    b.data.name && "subscript" !== b.data.name && "superscript" !== b.data.name && "enter" !== b.data.name && "cut" !== b.data.name && "language" !== b.data.name || !d || ("cut" === b.data.name && (h = !1, e = !0), "language" === b.data.name && (e = c = !0), a.fire("reloadMarkupScayt", { removeOptions: { removeInside: h, forceBookmark: e, language: c }, timeout: 0 }))
                }); a.on("beforeSetMode", function (b) { if ("source" == b.data) { if (b = a.scayt) f.destroy(a), a.fire("scaytButtonState", CKEDITOR.TRISTATE_DISABLED); a.document && a.document.getBody().removeAttribute("_jquid") } });
                a.on("afterCommandExec", function (b) { "wysiwyg" != a.mode || "undo" != b.data.name && "redo" != b.data.name || setTimeout(function () { f.reloadMarkup(a.scayt) }, 250) }); a.on("readOnly", function (b) { var d; b && (d = a.scayt, !0 === b.editor.readOnly ? d && d.fire("removeMarkupInDocument", {}) : d ? f.reloadMarkup(d) : "wysiwyg" == b.editor.mode && !0 === f.state.scayt[b.editor.name] && (f.createScayt(a), b.editor.fire("scaytButtonState", CKEDITOR.TRISTATE_ON))) }); a.on("beforeDestroy", b); a.on("setData", function () {
                    b(); (a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ||
                    a.plugins.divarea) && h()
                }, this, null, 50); a.on("reloadMarkupScayt", function (b) { var d = b.data && b.data.removeOptions, c = b.data && b.data.timeout, e = b.data && b.data.language, h = a.scayt; h && setTimeout(function () { e && (d.selectionNode = a.plugins.language.getCurrentLangElement(a), d.selectionNode = d.selectionNode && d.selectionNode.$ || null); h.removeMarkupInSelectionNode(d); f.reloadMarkup(h) }, c || 0) }); a.on("insertElement", function () { a.fire("reloadMarkupScayt", { removeOptions: { forceBookmark: !0 } }) }, this, null, 50); a.on("insertHtml",
                function () { a.scayt && a.scayt.setFocused && a.scayt.setFocused(!0); a.fire("reloadMarkupScayt") }, this, null, 50); a.on("insertText", function () { a.scayt && a.scayt.setFocused && a.scayt.setFocused(!0); a.fire("reloadMarkupScayt") }, this, null, 50); a.on("scaytDialogShown", function (b) { b.data.selectPage(a.scayt.tabToOpen) }); a.on("autocompletePanelShow", function (b) { (b = a.scayt) && b.setMarkupPaused && b.setMarkupPaused(!0) }); a.on("autocompletePanelHide", function (b) { (b = a.scayt) && b.setMarkupPaused && b.setMarkupPaused(!1) })
            }, parseConfig: function (a) {
                var f =
                CKEDITOR.plugins.scayt; f.replaceOldOptionsNames(a.config); "boolean" !== typeof a.config.scayt_autoStartup && (a.config.scayt_autoStartup = !1); f.state.scayt[a.name] = a.config.scayt_autoStartup; "boolean" !== typeof a.config.grayt_autoStartup && (a.config.grayt_autoStartup = !1); "boolean" !== typeof a.config.scayt_inlineModeImmediateMarkup && (a.config.scayt_inlineModeImmediateMarkup = !1); f.state.grayt[a.name] = a.config.grayt_autoStartup; a.config.scayt_contextCommands || (a.config.scayt_contextCommands = "ignoreall|add");
                a.config.scayt_contextMenuItemsOrder || (a.config.scayt_contextMenuItemsOrder = "suggest|moresuggest|control"); a.config.scayt_sLang || (a.config.scayt_sLang = "en_US"); if (void 0 === a.config.scayt_maxSuggestions || "number" != typeof a.config.scayt_maxSuggestions || 0 > a.config.scayt_maxSuggestions) a.config.scayt_maxSuggestions = 3; if (void 0 === a.config.scayt_minWordLength || "number" != typeof a.config.scayt_minWordLength || 1 > a.config.scayt_minWordLength) a.config.scayt_minWordLength = 3; if (void 0 === a.config.scayt_customDictionaryIds ||
                "string" !== typeof a.config.scayt_customDictionaryIds) a.config.scayt_customDictionaryIds = ""; if (void 0 === a.config.scayt_userDictionaryName || "string" !== typeof a.config.scayt_userDictionaryName) a.config.scayt_userDictionaryName = null; if ("string" === typeof a.config.scayt_uiTabs && 3 === a.config.scayt_uiTabs.split(",").length) {
                    var e = [], b = []; a.config.scayt_uiTabs = a.config.scayt_uiTabs.split(","); CKEDITOR.tools.search(a.config.scayt_uiTabs, function (a) {
                        1 === Number(a) || 0 === Number(a) ? (b.push(!0), e.push(Number(a))) :
                        b.push(!1)
                    }); null === CKEDITOR.tools.search(b, !1) ? a.config.scayt_uiTabs = e : a.config.scayt_uiTabs = [1, 1, 1]
                } else a.config.scayt_uiTabs = [1, 1, 1]; "string" != typeof a.config.scayt_serviceProtocol && (a.config.scayt_serviceProtocol = null); "string" != typeof a.config.scayt_serviceHost && (a.config.scayt_serviceHost = null); "string" != typeof a.config.scayt_servicePort && (a.config.scayt_servicePort = null); "string" != typeof a.config.scayt_servicePath && (a.config.scayt_servicePath = null); a.config.scayt_moreSuggestions || (a.config.scayt_moreSuggestions =
                "on"); "string" !== typeof a.config.scayt_customerId && (a.config.scayt_customerId = "1:WvF0D4-UtPqN1-43nkD4-NKvUm2-daQqk3-LmNiI-z7Ysb4-mwry24-T8YrS3-Q2tpq2"); "string" !== typeof a.config.scayt_customPunctuation && (a.config.scayt_customPunctuation = "-"); "string" !== typeof a.config.scayt_srcUrl && (f = document.location.protocol, f = -1 != f.search(/https?:/) ? f : "http:", a.config.scayt_srcUrl = f + "//svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js"); "boolean" !== typeof CKEDITOR.config.scayt_handleCheckDirty && (CKEDITOR.config.scayt_handleCheckDirty =
                !0); "boolean" !== typeof CKEDITOR.config.scayt_handleUndoRedo && (CKEDITOR.config.scayt_handleUndoRedo = !0); CKEDITOR.config.scayt_handleUndoRedo = CKEDITOR.plugins.undo ? CKEDITOR.config.scayt_handleUndoRedo : !1; a.config.scayt_ignoreAllCapsWords && "boolean" !== typeof a.config.scayt_ignoreAllCapsWords && (a.config.scayt_ignoreAllCapsWords = !1); a.config.scayt_ignoreDomainNames && "boolean" !== typeof a.config.scayt_ignoreDomainNames && (a.config.scayt_ignoreDomainNames = !1); a.config.scayt_ignoreWordsWithMixedCases && "boolean" !==
                typeof a.config.scayt_ignoreWordsWithMixedCases && (a.config.scayt_ignoreWordsWithMixedCases = !1); a.config.scayt_ignoreWordsWithNumbers && "boolean" !== typeof a.config.scayt_ignoreWordsWithNumbers && (a.config.scayt_ignoreWordsWithNumbers = !1); if (a.config.scayt_disableOptionsStorage) {
                    var f = CKEDITOR.tools.isArray(a.config.scayt_disableOptionsStorage) ? a.config.scayt_disableOptionsStorage : "string" === typeof a.config.scayt_disableOptionsStorage ? [a.config.scayt_disableOptionsStorage] : void 0, c = "all options lang ignore-all-caps-words ignore-domain-names ignore-words-with-mixed-cases ignore-words-with-numbers".split(" "),
                    m = ["lang", "ignore-all-caps-words", "ignore-domain-names", "ignore-words-with-mixed-cases", "ignore-words-with-numbers"], h = CKEDITOR.tools.search, l = CKEDITOR.tools.indexOf; a.config.scayt_disableOptionsStorage = function (a) { for (var b = [], e = 0; e < a.length; e++) { var f = a[e], r = !!h(a, "options"); if (!h(c, f) || r && h(m, function (a) { if ("lang" === a) return !1 })) return; h(m, f) && m.splice(l(m, f), 1); if ("all" === f || r && h(a, "lang")) return []; "options" === f && (m = ["lang"]) } return b = b.concat(m) }(f)
                }
            }, addRule: function (a) {
                var f = CKEDITOR.plugins.scayt,
                e = a.dataProcessor, b = e && e.htmlFilter, c = a._.elementsPath && a._.elementsPath.filters, e = e && e.dataFilter, m = a.addRemoveFormatFilter, h = function (b) { if (a.scayt && (b.hasAttribute(f.options.data_attribute_name) || b.hasAttribute(f.options.problem_grammar_data_attribute))) return !1 }, l = function (b) { var c = !0; a.scayt && (b.hasAttribute(f.options.data_attribute_name) || b.hasAttribute(f.options.problem_grammar_data_attribute)) && (c = !1); return c }; c && c.push(h); e && e.addRules({
                    elements: {
                        span: function (a) {
                            var b = a.hasClass(f.options.misspelled_word_class) &&
                            a.attributes[f.options.data_attribute_name], c = a.hasClass(f.options.problem_grammar_class) && a.attributes[f.options.problem_grammar_data_attribute]; f && (b || c) && delete a.name; return a
                        }
                    }
                }); b && b.addRules({ elements: { span: function (a) { var b = a.hasClass(f.options.misspelled_word_class) && a.attributes[f.options.data_attribute_name], c = a.hasClass(f.options.problem_grammar_class) && a.attributes[f.options.problem_grammar_data_attribute]; f && (b || c) && delete a.name; return a } } }); m && m.call(a, l)
            }, scaytMenuDefinition: function (a) {
                var f =
                this, e = CKEDITOR.plugins.scayt; a = a.scayt; return {
                    scayt: {
                        scayt_ignore: { label: a.getLocal("btn_ignore"), group: "scayt_control", order: 1, exec: function (a) { a.scayt.ignoreWord() } }, scayt_ignoreall: { label: a.getLocal("btn_ignoreAll"), group: "scayt_control", order: 2, exec: function (a) { a.scayt.ignoreAllWords() } }, scayt_add: { label: a.getLocal("btn_addWord"), group: "scayt_control", order: 3, exec: function (a) { var c = a.scayt; setTimeout(function () { c.addWordToUserDictionary() }, 10) } }, scayt_option: {
                            label: a.getLocal("btn_options"),
                            group: "scayt_control", order: 4, exec: function (a) { a.scayt.tabToOpen = "options"; e.openDialog(f.dialogName, a) }, verification: function (a) { return 1 == a.config.scayt_uiTabs[0] ? !0 : !1 }
                        }, scayt_language: { label: a.getLocal("btn_langs"), group: "scayt_control", order: 5, exec: function (a) { a.scayt.tabToOpen = "langs"; e.openDialog(f.dialogName, a) }, verification: function (a) { return 1 == a.config.scayt_uiTabs[1] ? !0 : !1 } }, scayt_dictionary: {
                            label: a.getLocal("btn_dictionaries"), group: "scayt_control", order: 6, exec: function (a) {
                                a.scayt.tabToOpen =
                                "dictionaries"; e.openDialog(f.dialogName, a)
                            }, verification: function (a) { return 1 == a.config.scayt_uiTabs[2] ? !0 : !1 }
                        }, scayt_about: { label: a.getLocal("btn_about"), group: "scayt_control", order: 7, exec: function (a) { a.scayt.tabToOpen = "about"; e.openDialog(f.dialogName, a) } }
                    }, grayt: {
                        grayt_problemdescription: { label: "Grammar problem description", group: "grayt_description", order: 1, state: CKEDITOR.TRISTATE_DISABLED, exec: function (a) { } }, grayt_ignore: { label: a.getLocal("btn_ignore"), group: "grayt_control", order: 2, exec: function (a) { a.scayt.ignorePhrase() } },
                        grayt_ignoreall: { label: a.getLocal("btn_ignoreAll"), group: "grayt_control", order: 3, exec: function (a) { a.scayt.ignoreAllPhrases() } }
                    }
                }
            }, buildSuggestionMenuItems: function (a, f, e) {
                var b = {}, c = {}, m = e ? "word" : "phrase", h = e ? "startGrammarCheck" : "startSpellCheck", l = a.scayt; if (0 < f.length && "no_any_suggestions" !== f[0]) if (e) for (e = 0; e < f.length; e++) {
                    var d = "scayt_suggest_" + CKEDITOR.plugins.scayt.suggestions[e].replace(" ", "_"); a.addCommand(d, this.createCommand(CKEDITOR.plugins.scayt.suggestions[e], m, h)); e < a.config.scayt_maxSuggestions ?
                    (a.addMenuItem(d, { label: f[e], command: d, group: "scayt_suggest", order: e + 1 }), b[d] = CKEDITOR.TRISTATE_OFF) : (a.addMenuItem(d, { label: f[e], command: d, group: "scayt_moresuggest", order: e + 1 }), c[d] = CKEDITOR.TRISTATE_OFF, "on" === a.config.scayt_moreSuggestions && (a.addMenuItem("scayt_moresuggest", { label: l.getLocal("btn_moreSuggestions"), group: "scayt_moresuggest", order: 10, getItems: function () { return c } }), b.scayt_moresuggest = CKEDITOR.TRISTATE_OFF))
                } else for (e = 0; e < f.length; e++) d = "grayt_suggest_" + CKEDITOR.plugins.scayt.suggestions[e].replace(" ",
                "_"), a.addCommand(d, this.createCommand(CKEDITOR.plugins.scayt.suggestions[e], m, h)), a.addMenuItem(d, { label: f[e], command: d, group: "grayt_suggest", order: e + 1 }), b[d] = CKEDITOR.TRISTATE_OFF; else b.no_scayt_suggest = CKEDITOR.TRISTATE_DISABLED, a.addCommand("no_scayt_suggest", { exec: function () { } }), a.addMenuItem("no_scayt_suggest", { label: l.getLocal("btn_noSuggestions") || "no_scayt_suggest", command: "no_scayt_suggest", group: "scayt_suggest", order: 0 }); return b
            }, menuGenerator: function (a, f) {
                var e = a.scayt, b = this.scaytMenuDefinition(a),
                c = {}, m = a.config.scayt_contextCommands.split("|"), h = f.getAttribute(e.getLangAttribute()) || e.getLang(), l, d, k, g; d = e.isScaytNode(f); k = e.isGraytNode(f); d ? (b = b.scayt, l = f.getAttribute(e.getScaytNodeAttributeName()), e.fire("getSuggestionsList", { lang: h, word: l }), c = this.buildSuggestionMenuItems(a, CKEDITOR.plugins.scayt.suggestions, d)) : k && (b = b.grayt, c = f.getAttribute(e.getGraytNodeAttributeName()), e.getGraytNodeRuleAttributeName ? (l = f.getAttribute(e.getGraytNodeRuleAttributeName()), e.getProblemDescriptionText(c,
                l, h)) : e.getProblemDescriptionText(c, h), g = e.getProblemDescriptionText(c, l, h), b.grayt_problemdescription && g && (g = g.replace(/([.!?])\s/g, "$1\x3cbr\x3e"), b.grayt_problemdescription.label = g), e.fire("getGrammarSuggestionsList", { lang: h, phrase: c, rule: l }), c = this.buildSuggestionMenuItems(a, CKEDITOR.plugins.scayt.suggestions, d)); if (d && "off" == a.config.scayt_contextCommands) return c; for (var n in b) d && -1 == CKEDITOR.tools.indexOf(m, n.replace("scayt_", "")) && "all" != a.config.scayt_contextCommands || k && "grayt_problemdescription" !==
                n && -1 == CKEDITOR.tools.indexOf(m, n.replace("grayt_", "")) && "all" != a.config.scayt_contextCommands || (c[n] = "undefined" != typeof b[n].state ? b[n].state : CKEDITOR.TRISTATE_OFF, "function" !== typeof b[n].verification || b[n].verification(a) || delete c[n], a.addCommand(n, { exec: b[n].exec }), a.addMenuItem(n, { label: a.lang.scayt[b[n].label] || b[n].label, command: n, group: b[n].group, order: b[n].order })); return c
            }, createCommand: function (a, f, e) {
                return {
                    exec: function (b) {
                        b = b.scayt; var c = {}; c[f] = a; b.replaceSelectionNode(c); "startGrammarCheck" ===
                        e && b.removeMarkupInSelectionNode({ grammarOnly: !0 }); b.fire(e)
                    }
                }
            }
        }); CKEDITOR.plugins.scayt = {
            charsToObserve: [{ charName: "cke-fillingChar", charCode: function () { var a = CKEDITOR.version, f = [4, 5, 6], e = String.fromCharCode(8203), b = Array(8).join(e), c, m; if (!a) return e; for (var a = a.split("."), h = 0; h < f.length; h++) { c = f[h]; m = Number(a[h]); if (m > c) return b; if (m < c) break } return e }() }], state: { scayt: {}, grayt: {} }, warningCounter: 0, suggestions: [], options: {
                disablingCommandExec: { source: !0, newpage: !0, templates: !0 }, data_attribute_name: "data-scayt-word",
                misspelled_word_class: "scayt-misspell-word", problem_grammar_data_attribute: "data-grayt-phrase", problem_grammar_class: "gramm-problem"
            }, backCompatibilityMap: { scayt_service_protocol: "scayt_serviceProtocol", scayt_service_host: "scayt_serviceHost", scayt_service_port: "scayt_servicePort", scayt_service_path: "scayt_servicePath", scayt_customerid: "scayt_customerId" }, openDialog: function (a, f) { var e = f.scayt; e.isAllModulesReady && !1 === e.isAllModulesReady() || (f.lockSelection(), f.openDialog(a)) }, alarmCompatibilityMessage: function () {
                5 >
                this.warningCounter && (console.warn("You are using the latest version of SCAYT plugin for CKEditor with the old application version. In order to have access to the newest features, it is recommended to upgrade the application version to latest one as well. Contact us for more details at support@webspellchecker.net."), this.warningCounter += 1)
            }, isNewUdSupported: function (a) { return a.getUserDictionary ? !0 : !1 }, reloadMarkup: function (a) {
                var f; a && (f = a.getScaytLangList(), a.reloadMarkup ? a.reloadMarkup() : (this.alarmCompatibilityMessage(),
                f && f.ltr && f.rtl && a.fire("startSpellCheck, startGrammarCheck")))
            }, replaceOldOptionsNames: function (a) { for (var f in a) f in this.backCompatibilityMap && (a[this.backCompatibilityMap[f]] = a[f], delete a[f]) }, createScayt: function (a) {
                var f = this, e = CKEDITOR.plugins.scayt; this.loadScaytLibrary(a, function (a) {
                    function c(a) { return new SCAYT.CKSCAYT(a, function () { }, function () { }) } var m; a.window && (m = "BODY" == a.editable().$.nodeName ? a.window.getFrame() : a.editable()); if (m) {
                        m = {
                            lang: a.config.scayt_sLang, container: m.$, customDictionary: a.config.scayt_customDictionaryIds,
                            userDictionaryName: a.config.scayt_userDictionaryName, localization: a.langCode, customer_id: a.config.scayt_customerId, customPunctuation: a.config.scayt_customPunctuation, debug: a.config.scayt_debug, data_attribute_name: f.options.data_attribute_name, misspelled_word_class: f.options.misspelled_word_class, problem_grammar_data_attribute: f.options.problem_grammar_data_attribute, problem_grammar_class: f.options.problem_grammar_class, "options-to-restore": a.config.scayt_disableOptionsStorage, focused: a.editable().hasFocus,
                            ignoreElementsRegex: a.config.scayt_elementsToIgnore, ignoreGraytElementsRegex: a.config.grayt_elementsToIgnore, minWordLength: a.config.scayt_minWordLength, graytAutoStartup: a.config.grayt_autoStartup, charsToObserve: e.charsToObserve
                        }; a.config.scayt_serviceProtocol && (m.service_protocol = a.config.scayt_serviceProtocol); a.config.scayt_serviceHost && (m.service_host = a.config.scayt_serviceHost); a.config.scayt_servicePort && (m.service_port = a.config.scayt_servicePort); a.config.scayt_servicePath && (m.service_path =
                        a.config.scayt_servicePath); "boolean" === typeof a.config.scayt_ignoreAllCapsWords && (m["ignore-all-caps-words"] = a.config.scayt_ignoreAllCapsWords); "boolean" === typeof a.config.scayt_ignoreDomainNames && (m["ignore-domain-names"] = a.config.scayt_ignoreDomainNames); "boolean" === typeof a.config.scayt_ignoreWordsWithMixedCases && (m["ignore-words-with-mixed-cases"] = a.config.scayt_ignoreWordsWithMixedCases); "boolean" === typeof a.config.scayt_ignoreWordsWithNumbers && (m["ignore-words-with-numbers"] = a.config.scayt_ignoreWordsWithNumbers);
                        var h; try { h = c(m) } catch (l) { f.alarmCompatibilityMessage(), delete m.charsToObserve, h = c(m) } h.subscribe("suggestionListSend", function (a) { for (var b = {}, c = [], e = 0; e < a.suggestionList.length; e++) b["word_" + a.suggestionList[e]] || (b["word_" + a.suggestionList[e]] = a.suggestionList[e], c.push(a.suggestionList[e])); CKEDITOR.plugins.scayt.suggestions = c }); h.subscribe("selectionIsChanged", function (d) { a.getSelection().isLocked && "restoreSelection" !== d.action && a.lockSelection(); "restoreSelection" === d.action && a.selectionChange(!0) });
                        h.subscribe("graytStateChanged", function (d) { e.state.grayt[a.name] = d.state }); h.addMarkupHandler && h.addMarkupHandler(function (d) { var c = a.editable(), e = c.getCustomData(d.charName); e && (e.$ = d.node, c.setCustomData(d.charName, e)) }); a.scayt = h; a.fire("scaytButtonState", a.readOnly ? CKEDITOR.TRISTATE_DISABLED : CKEDITOR.TRISTATE_ON)
                    } else e.state.scayt[a.name] = !1
                })
            }, destroy: function (a) { a.scayt && a.scayt.destroy(); delete a.scayt; a.fire("scaytButtonState", CKEDITOR.TRISTATE_OFF) }, loadScaytLibrary: function (a, f) {
                var e,
                b = function () { CKEDITOR.fireOnce("scaytReady"); a.scayt || "function" === typeof f && f(a) }; "undefined" === typeof window.SCAYT || "function" !== typeof window.SCAYT.CKSCAYT ? (e = a.config.scayt_srcUrl, CKEDITOR.scriptLoader.load(e, function (a) { a && b() })) : window.SCAYT && "function" === typeof window.SCAYT.CKSCAYT && b()
            }
        }; CKEDITOR.on("dialogDefinition", function (a) {
            var f = a.data.name; a = a.data.definition.dialog; "scaytDialog" !== f && "checkspell" !== f && (a.on("show", function (a) {
                a = a.sender && a.sender.getParentEditor(); var b = CKEDITOR.plugins.scayt,
                c = a.scayt; c && b.state.scayt[a.name] && c.setMarkupPaused && c.setMarkupPaused(!0)
            }), a.on("hide", function (a) { a = a.sender && a.sender.getParentEditor(); var b = CKEDITOR.plugins.scayt, c = a.scayt; c && b.state.scayt[a.name] && c.setMarkupPaused && c.setMarkupPaused(!1) })); if ("scaytDialog" === f) a.on("cancel", function (a) { return !1 }, this, null, -1); if ("checkspell" === f) a.on("cancel", function (a) {
                a = a.sender && a.sender.getParentEditor(); var b = CKEDITOR.plugins.scayt, c = a.scayt; c && b.state.scayt[a.name] && c.setMarkupPaused && c.setMarkupPaused(!1);
                a.unlockSelection()
            }, this, null, -2); if ("link" === f) a.on("ok", function (a) { var b = a.sender && a.sender.getParentEditor(); b && setTimeout(function () { b.fire("reloadMarkupScayt", { removeOptions: { removeInside: !0, forceBookmark: !0 }, timeout: 0 }) }, 0) }); if ("replace" === f) a.on("hide", function (a) { a = a.sender && a.sender.getParentEditor(); var b = CKEDITOR.plugins.scayt, c = a.scayt; a && setTimeout(function () { c && (c.fire("removeMarkupInDocument", {}), b.reloadMarkup(c)) }, 0) })
        }); CKEDITOR.on("scaytReady", function () {
            if (!0 === CKEDITOR.config.scayt_handleCheckDirty) {
                var a =
                CKEDITOR.editor.prototype; a.checkDirty = CKEDITOR.tools.override(a.checkDirty, function (a) { return function () { var b = null, c = this.scayt; if (CKEDITOR.plugins.scayt && CKEDITOR.plugins.scayt.state.scayt[this.name] && this.scayt) { if (b = "ready" == this.status) var f = c.removeMarkupFromString(this.getSnapshot()), c = c.removeMarkupFromString(this._.previousValue), b = b && c !== f } else b = a.call(this); return b } }); a.resetDirty = CKEDITOR.tools.override(a.resetDirty, function (a) {
                    return function () {
                        var b = this.scayt; CKEDITOR.plugins.scayt &&
                        CKEDITOR.plugins.scayt.state.scayt[this.name] && this.scayt ? this._.previousValue = b.removeMarkupFromString(this.getSnapshot()) : a.call(this)
                    }
                })
            } if (!0 === CKEDITOR.config.scayt_handleUndoRedo) {
                var a = CKEDITOR.plugins.undo.Image.prototype, f = "function" == typeof a.equalsContent ? "equalsContent" : "equals"; a[f] = CKEDITOR.tools.override(a[f], function (a) {
                    return function (b) {
                        var c = b.editor.scayt, f = this.contents, h = b.contents, l = null; CKEDITOR.plugins.scayt && CKEDITOR.plugins.scayt.state.scayt[b.editor.name] && b.editor.scayt &&
                        (this.contents = c.removeMarkupFromString(f) || "", b.contents = c.removeMarkupFromString(h) || ""); l = a.apply(this, arguments); this.contents = f; b.contents = h; return l
                    }
                })
            }
        }); (function () {
            var a = { preserveState: !0, editorFocus: !1, readOnly: 1, exec: function (a) { this.toggleState(); this.refresh(a) }, refresh: function (a) { if (a.document) { var e = this.state == CKEDITOR.TRISTATE_ON ? "attachClass" : "removeClass"; a.editable()[e]("cke_show_borders") } } }; CKEDITOR.plugins.add("showborders", {
                modes: { wysiwyg: 1 }, onLoad: function () {
                    var a; a = (CKEDITOR.env.ie6Compat ?
                    [".%1 table.%2,", ".%1 table.%2 td, .%1 table.%2 th", "{", "border : #d3d3d3 1px dotted", "}"] : ".%1 table.%2,;.%1 table.%2 \x3e tr \x3e td, .%1 table.%2 \x3e tr \x3e th,;.%1 table.%2 \x3e tbody \x3e tr \x3e td, .%1 table.%2 \x3e tbody \x3e tr \x3e th,;.%1 table.%2 \x3e thead \x3e tr \x3e td, .%1 table.%2 \x3e thead \x3e tr \x3e th,;.%1 table.%2 \x3e tfoot \x3e tr \x3e td, .%1 table.%2 \x3e tfoot \x3e tr \x3e th;{;border : #d3d3d3 1px dotted;}".split(";")).join("").replace(/%2/g, "cke_show_border").replace(/%1/g,
                    "cke_show_borders "); CKEDITOR.addCss(a)
                }, init: function (f) {
                    var e = f.addCommand("showborders", a); e.canUndo = !1; !1 !== f.config.startupShowBorders && e.setState(CKEDITOR.TRISTATE_ON); f.on("mode", function () { e.state != CKEDITOR.TRISTATE_DISABLED && e.refresh(f) }, null, null, 100); f.on("contentDom", function () { e.state != CKEDITOR.TRISTATE_DISABLED && e.refresh(f) }); f.on("removeFormatCleanup", function (a) {
                        a = a.data; f.getCommand("showborders").state == CKEDITOR.TRISTATE_ON && a.is("table") && (!a.hasAttribute("border") || 0 >= parseInt(a.getAttribute("border"),
                        10)) && a.addClass("cke_show_border")
                    })
                }, afterInit: function (a) { var e = a.dataProcessor; a = e && e.dataFilter; e = e && e.htmlFilter; a && a.addRules({ elements: { table: function (a) { a = a.attributes; var c = a["class"], e = parseInt(a.border, 10); e && !(0 >= e) || c && -1 != c.indexOf("cke_show_border") || (a["class"] = (c || "") + " cke_show_border") } } }); e && e.addRules({ elements: { table: function (a) { a = a.attributes; var c = a["class"]; c && (a["class"] = c.replace("cke_show_border", "").replace(/\s{2}/, " ").replace(/^\s+|\s+$/, "")) } } }) }
            }); CKEDITOR.on("dialogDefinition",
            function (a) {
                var e = a.data.name; if ("table" == e || "tableProperties" == e) if (a = a.data.definition, e = a.getContents("info").get("txtBorder"), e.commit = CKEDITOR.tools.override(e.commit, function (a) { return function (c, e) { a.apply(this, arguments); var f = parseInt(this.getValue(), 10); e[!f || 0 >= f ? "addClass" : "removeClass"]("cke_show_border") } }), a = (a = a.getContents("advanced")) && a.get("advCSSClasses")) a.setup = CKEDITOR.tools.override(a.setup, function (a) {
                    return function () {
                        a.apply(this, arguments); this.setValue(this.getValue().replace(/cke_show_border/,
                        ""))
                    }
                }), a.commit = CKEDITOR.tools.override(a.commit, function (a) { return function (c, e) { a.apply(this, arguments); parseInt(e.getAttribute("border"), 10) || e.addClass("cke_show_border") } })
            })
        })(); (function () {
            CKEDITOR.plugins.add("sourcearea", {
                init: function (f) {
                    function e() { var a = c && this.equals(CKEDITOR.document.getActive()); this.hide(); this.setStyle("height", this.getParent().$.clientHeight + "px"); this.setStyle("width", this.getParent().$.clientWidth + "px"); this.show(); a && this.focus() } if (f.elementMode != CKEDITOR.ELEMENT_MODE_INLINE) {
                        var b =
                        CKEDITOR.plugins.sourcearea; f.addMode("source", function (b) {
                            var c = f.ui.space("contents").getDocument().createElement("textarea"); c.setStyles(CKEDITOR.tools.extend({ width: CKEDITOR.env.ie7Compat ? "99%" : "100%", height: "100%", resize: "none", outline: "none", "text-align": "left" }, CKEDITOR.tools.cssVendorPrefix("tab-size", f.config.sourceAreaTabSize || 4))); c.setAttribute("dir", "ltr"); c.addClass("cke_source").addClass("cke_reset").addClass("cke_enable_context_menu"); f.ui.space("contents").append(c); c = f.editable(new a(f,
                            c)); c.setData(f.getData(1)); CKEDITOR.env.ie && (c.attachListener(f, "resize", e, c), c.attachListener(CKEDITOR.document.getWindow(), "resize", e, c), CKEDITOR.tools.setTimeout(e, 0, c)); f.fire("ariaWidget", this); b()
                        }); f.addCommand("source", b.commands.source); f.ui.addButton && f.ui.addButton("Source", { label: f.lang.sourcearea.toolbar, command: "source", toolbar: "mode,10" }); f.on("mode", function () { f.getCommand("source").setState("source" == f.mode ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF) }); var c = CKEDITOR.env.ie && 9 ==
                        CKEDITOR.env.version
                    }
                }
            }); var a = CKEDITOR.tools.createClass({ base: CKEDITOR.editable, proto: { setData: function (a) { this.setValue(a); this.status = "ready"; this.editor.fire("dataReady") }, getData: function () { return this.getValue() }, insertHtml: function () { }, insertElement: function () { }, insertText: function () { }, setReadOnly: function (a) { this[(a ? "set" : "remove") + "Attribute"]("readOnly", "readonly") }, detach: function () { a.baseProto.detach.call(this); this.clearCustomData(); this.remove() } } })
        })(); CKEDITOR.plugins.sourcearea =
        { commands: { source: { modes: { wysiwyg: 1, source: 1 }, editorFocus: !1, readOnly: 1, exec: function (a) { "wysiwyg" == a.mode && a.fire("saveSnapshot"); a.getCommand("source").setState(CKEDITOR.TRISTATE_DISABLED); a.setMode("source" == a.mode ? "wysiwyg" : "source") }, canUndo: !1 } } }; CKEDITOR.plugins.add("specialchar", {
            availableLangs: {
                af: 1, ar: 1, az: 1, bg: 1, ca: 1, cs: 1, cy: 1, da: 1, de: 1, "de-ch": 1, el: 1, en: 1, "en-au": 1, "en-ca": 1, "en-gb": 1, eo: 1, es: 1, "es-mx": 1, et: 1, eu: 1, fa: 1, fi: 1, fr: 1, "fr-ca": 1, gl: 1, he: 1, hr: 1, hu: 1, id: 1, it: 1, ja: 1, km: 1, ko: 1, ku: 1,
                lt: 1, lv: 1, nb: 1, nl: 1, no: 1, oc: 1, pl: 1, pt: 1, "pt-br": 1, ro: 1, ru: 1, si: 1, sk: 1, sl: 1, sq: 1, sr: 1, "sr-latn": 1, sv: 1, th: 1, tr: 1, tt: 1, ug: 1, uk: 1, vi: 1, zh: 1, "zh-cn": 1
            }, requires: "dialog", init: function (a) {
                var f = this; CKEDITOR.dialog.add("specialchar", this.path + "dialogs/specialchar.js"); a.addCommand("specialchar", {
                    exec: function () {
                        var e = a.langCode, e = f.availableLangs[e] ? e : f.availableLangs[e.replace(/-.*/, "")] ? e.replace(/-.*/, "") : "en"; CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(f.path + "dialogs/lang/" + e + ".js"), function () {
                            CKEDITOR.tools.extend(a.lang.specialchar,
                            f.langEntries[e]); a.openDialog("specialchar")
                        })
                    }, modes: { wysiwyg: 1 }, canUndo: !1
                }); a.ui.addButton && a.ui.addButton("SpecialChar", { label: a.lang.specialchar.toolbar, command: "specialchar", toolbar: "insert,50" })
            }
        }); CKEDITOR.config.specialChars = "! \x26quot; # $ % \x26amp; ' ( ) * + - . / 0 1 2 3 4 5 6 7 8 9 : ; \x26lt; \x3d \x26gt; ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~ \x26euro; \x26lsquo; \x26rsquo; \x26ldquo; \x26rdquo; \x26ndash; \x26mdash; \x26iexcl; \x26cent; \x26pound; \x26curren; \x26yen; \x26brvbar; \x26sect; \x26uml; \x26copy; \x26ordf; \x26laquo; \x26not; \x26reg; \x26macr; \x26deg; \x26sup2; \x26sup3; \x26acute; \x26micro; \x26para; \x26middot; \x26cedil; \x26sup1; \x26ordm; \x26raquo; \x26frac14; \x26frac12; \x26frac34; \x26iquest; \x26Agrave; \x26Aacute; \x26Acirc; \x26Atilde; \x26Auml; \x26Aring; \x26AElig; \x26Ccedil; \x26Egrave; \x26Eacute; \x26Ecirc; \x26Euml; \x26Igrave; \x26Iacute; \x26Icirc; \x26Iuml; \x26ETH; \x26Ntilde; \x26Ograve; \x26Oacute; \x26Ocirc; \x26Otilde; \x26Ouml; \x26times; \x26Oslash; \x26Ugrave; \x26Uacute; \x26Ucirc; \x26Uuml; \x26Yacute; \x26THORN; \x26szlig; \x26agrave; \x26aacute; \x26acirc; \x26atilde; \x26auml; \x26aring; \x26aelig; \x26ccedil; \x26egrave; \x26eacute; \x26ecirc; \x26euml; \x26igrave; \x26iacute; \x26icirc; \x26iuml; \x26eth; \x26ntilde; \x26ograve; \x26oacute; \x26ocirc; \x26otilde; \x26ouml; \x26divide; \x26oslash; \x26ugrave; \x26uacute; \x26ucirc; \x26uuml; \x26yacute; \x26thorn; \x26yuml; \x26OElig; \x26oelig; \x26#372; \x26#374 \x26#373 \x26#375; \x26sbquo; \x26#8219; \x26bdquo; \x26hellip; \x26trade; \x26#9658; \x26bull; \x26rarr; \x26rArr; \x26hArr; \x26diams; \x26asymp;".split(" ");
        (function () {
            CKEDITOR.plugins.add("stylescombo", {
                requires: "richcombo", init: function (a) {
                    var f = a.config, e = a.lang.stylescombo, b = {}, c = [], m = []; a.on("stylesSet", function (e) {
                        if (e = e.data.styles) {
                            for (var l, d, k, g = 0, n = e.length; g < n; g++) (l = e[g], a.blockless && l.element in CKEDITOR.dtd.$block || "string" == typeof l.type && !CKEDITOR.style.customHandlers[l.type] || (d = l.name, l = new CKEDITOR.style(l), a.filter.customConfig && !a.filter.check(l))) || (l._name = d, l._.enterMode = f.enterMode, l._.type = k = l.assignedTo || l.type, l._.weight =
                            g + 1E3 * (k == CKEDITOR.STYLE_OBJECT ? 1 : k == CKEDITOR.STYLE_BLOCK ? 2 : 3), b[d] = l, c.push(l), m.push(l)); c.sort(function (a, b) { return a._.weight - b._.weight })
                        }
                    }); a.ui.addRichCombo("Styles", {
                        label: e.label, title: e.panelTitle, toolbar: "styles,10", allowedContent: m, panel: { css: [CKEDITOR.skin.getPath("editor")].concat(f.contentsCss), multiSelect: !0, attributes: { "aria-label": e.panelTitle } }, init: function () {
                            var a, b, d, f, g, m; g = 0; for (m = c.length; g < m; g++) a = c[g], b = a._name, f = a._.type, f != d && (this.startGroup(e["panelTitle" + String(f)]),
                            d = f), this.add(b, a.type == CKEDITOR.STYLE_OBJECT ? b : a.buildPreview(), b); this.commit()
                        }, onClick: function (c) { a.focus(); a.fire("saveSnapshot"); c = b[c]; var e = a.elementPath(); if (c.group && c.removeStylesFromSameGroup(a)) a.applyStyle(c); else a[c.checkActive(e, a) ? "removeStyle" : "applyStyle"](c); a.fire("saveSnapshot") }, onRender: function () {
                            a.on("selectionChange", function (c) {
                                var e = this.getValue(); c = c.data.path.elements; for (var d = 0, f = c.length, g; d < f; d++) {
                                    g = c[d]; for (var m in b) if (b[m].checkElementRemovable(g, !0, a)) {
                                        m !=
                                        e && this.setValue(m); return
                                    }
                                } this.setValue("")
                            }, this)
                        }, onOpen: function () {
                            var c = a.getSelection(), c = c.getSelectedElement() || c.getStartElement() || a.editable(), c = a.elementPath(c), f = [0, 0, 0, 0]; this.showAll(); this.unmarkAll(); for (var d in b) { var k = b[d], g = k._.type; k.checkApplicable(c, a, a.activeFilter) ? f[g]++ : this.hideItem(d); k.checkActive(c, a) && this.mark(d) } f[CKEDITOR.STYLE_BLOCK] || this.hideGroup(e["panelTitle" + String(CKEDITOR.STYLE_BLOCK)]); f[CKEDITOR.STYLE_INLINE] || this.hideGroup(e["panelTitle" + String(CKEDITOR.STYLE_INLINE)]);
                            f[CKEDITOR.STYLE_OBJECT] || this.hideGroup(e["panelTitle" + String(CKEDITOR.STYLE_OBJECT)])
                        }, refresh: function () { var c = a.elementPath(); if (c) { for (var e in b) if (b[e].checkApplicable(c, a, a.activeFilter)) return; this.setState(CKEDITOR.TRISTATE_DISABLED) } }, reset: function () { b = {}; c = [] }
                    })
                }
            })
        })(); (function () {
            function a(a) {
                return {
                    editorFocus: !1, canUndo: !1, modes: { wysiwyg: 1 }, exec: function (b) {
                        if (b.editable().hasFocus) {
                            var e = b.getSelection(), f; if (f = (new CKEDITOR.dom.elementPath(e.getCommonAncestor(), e.root)).contains({
                                td: 1,
                                th: 1
                            }, 1)) {
                                var e = b.createRange(), d = CKEDITOR.tools.tryThese(function () { var b = f.getParent().$.cells[f.$.cellIndex + (a ? -1 : 1)]; b.parentNode.parentNode; return b }, function () { var b = f.getParent(), b = b.getAscendant("table").$.rows[b.$.rowIndex + (a ? -1 : 1)]; return b.cells[a ? b.cells.length - 1 : 0] }); if (d || a) if (d) d = new CKEDITOR.dom.element(d), e.moveToElementEditStart(d), e.checkStartOfBlock() && e.checkEndOfBlock() || e.selectNodeContents(d); else return !0; else {
                                    for (var k = f.getAscendant("table").$, d = f.getParent().$.cells, k =
                                    new CKEDITOR.dom.element(k.insertRow(-1), b.document), g = 0, n = d.length; g < n; g++) k.append((new CKEDITOR.dom.element(d[g], b.document)).clone(!1, !1)).appendBogus(); e.moveToElementEditStart(k)
                                } e.select(!0); return !0
                            }
                        } return !1
                    }
                }
            } var f = { editorFocus: !1, modes: { wysiwyg: 1, source: 1 } }, e = { exec: function (a) { a.container.focusNext(!0, a.tabIndex) } }, b = { exec: function (a) { a.container.focusPrevious(!0, a.tabIndex) } }; CKEDITOR.plugins.add("tab", {
                init: function (c) {
                    for (var m = !1 !== c.config.enableTabKeyTools, h = c.config.tabSpaces || 0,
                    l = ""; h--;) l += " "; if (l) c.on("key", function (a) { 9 == a.data.keyCode && (c.insertText(l), a.cancel()) }); if (m) c.on("key", function (a) { (9 == a.data.keyCode && c.execCommand("selectNextCell") || a.data.keyCode == CKEDITOR.SHIFT + 9 && c.execCommand("selectPreviousCell")) && a.cancel() }); c.addCommand("blur", CKEDITOR.tools.extend(e, f)); c.addCommand("blurBack", CKEDITOR.tools.extend(b, f)); c.addCommand("selectNextCell", a()); c.addCommand("selectPreviousCell", a(!0))
                }
            })
        })(); CKEDITOR.dom.element.prototype.focusNext = function (a, f) {
            var e =
            void 0 === f ? this.getTabIndex() : f, b, c, m, h, l, d; if (0 >= e) for (l = this.getNextSourceNode(a, CKEDITOR.NODE_ELEMENT) ; l;) { if (l.isVisible() && 0 === l.getTabIndex()) { m = l; break } l = l.getNextSourceNode(!1, CKEDITOR.NODE_ELEMENT) } else for (l = this.getDocument().getBody().getFirst() ; l = l.getNextSourceNode(!1, CKEDITOR.NODE_ELEMENT) ;) {
                if (!b) if (!c && l.equals(this)) { if (c = !0, a) { if (!(l = l.getNextSourceNode(!0, CKEDITOR.NODE_ELEMENT))) break; b = 1 } } else c && !this.contains(l) && (b = 1); if (l.isVisible() && !(0 > (d = l.getTabIndex()))) {
                    if (b && d == e) {
                        m =
                        l; break
                    } d > e && (!m || !h || d < h) ? (m = l, h = d) : m || 0 !== d || (m = l, h = d)
                }
            } m && m.focus()
        }; CKEDITOR.dom.element.prototype.focusPrevious = function (a, f) {
            for (var e = void 0 === f ? this.getTabIndex() : f, b, c, m, h = 0, l, d = this.getDocument().getBody().getLast() ; d = d.getPreviousSourceNode(!1, CKEDITOR.NODE_ELEMENT) ;) {
                if (!b) if (!c && d.equals(this)) { if (c = !0, a) { if (!(d = d.getPreviousSourceNode(!0, CKEDITOR.NODE_ELEMENT))) break; b = 1 } } else c && !this.contains(d) && (b = 1); if (d.isVisible() && !(0 > (l = d.getTabIndex()))) if (0 >= e) {
                    if (b && 0 === l) { m = d; break } l > h &&
                    (m = d, h = l)
                } else { if (b && l == e) { m = d; break } l < e && (!m || l > h) && (m = d, h = l) }
            } m && m.focus()
        }; CKEDITOR.plugins.add("table", {
            requires: "dialog", init: function (a) {
                function f(a) { return CKEDITOR.tools.extend(a || {}, { contextSensitive: 1, refresh: function (a, b) { this.setState(b.contains("table", 1) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED) } }) } if (!a.blockless) {
                    var e = a.lang.table; a.addCommand("table", new CKEDITOR.dialogCommand("table", {
                        context: "table", allowedContent: "table{width,height,border-collapse}[align,border,cellpadding,cellspacing,summary];caption tbody thead tfoot;th td tr[scope];td{border*,background-color,vertical-align,width,height}[colspan,rowspan];" +
                        (a.plugins.dialogadvtab ? "table" + a.plugins.dialogadvtab.allowedContent() : ""), requiredContent: "table", contentTransformations: [["table{width}: sizeToStyle", "table[width]: sizeToAttribute"], ["td: splitBorderShorthand"], [{
                            element: "table", right: function (a) {
                                if (a.styles) {
                                    var c; if (a.styles.border) c = CKEDITOR.tools.style.parse.border(a.styles.border); else if (CKEDITOR.env.ie && 8 === CKEDITOR.env.version) {
                                        var e = a.styles; e["border-left"] && e["border-left"] === e["border-right"] && e["border-right"] === e["border-top"] &&
                                        e["border-top"] === e["border-bottom"] && (c = CKEDITOR.tools.style.parse.border(e["border-top"]))
                                    } c && c.style && "solid" === c.style && c.width && 0 !== parseFloat(c.width) && (a.attributes.border = 1); "collapse" == a.styles["border-collapse"] && (a.attributes.cellspacing = 0)
                                }
                            }
                        }]]
                    })); a.addCommand("tableProperties", new CKEDITOR.dialogCommand("tableProperties", f())); a.addCommand("tableDelete", f({
                        exec: function (a) {
                            var c = a.elementPath().contains("table", 1); if (c) {
                                var e = c.getParent(), f = a.editable(); 1 != e.getChildCount() || e.is("td",
                                "th") || e.equals(f) || (c = e); a = a.createRange(); a.moveToPosition(c, CKEDITOR.POSITION_BEFORE_START); c.remove(); a.select()
                            }
                        }
                    })); a.ui.addButton && a.ui.addButton("Table", { label: e.toolbar, command: "table", toolbar: "insert,30" }); CKEDITOR.dialog.add("table", this.path + "dialogs/table.js"); CKEDITOR.dialog.add("tableProperties", this.path + "dialogs/table.js"); a.addMenuItems && a.addMenuItems({
                        table: { label: e.menu, command: "tableProperties", group: "table", order: 5 }, tabledelete: {
                            label: e.deleteTable, command: "tableDelete", group: "table",
                            order: 1
                        }
                    }); a.on("doubleclick", function (a) { a.data.element.is("table") && (a.data.dialog = "tableProperties") }); a.contextMenu && a.contextMenu.addListener(function () { return { tabledelete: CKEDITOR.TRISTATE_OFF, table: CKEDITOR.TRISTATE_OFF } })
                }
            }
        }); (function () {
            function a(a, b) {
                function d(a) { return b ? b.contains(a) && a.getAscendant("table", !0).equals(b) : !0 } function c(a) {
                    var b = /^(?:td|th)$/; 0 < e.length || a.type != CKEDITOR.NODE_ELEMENT || !b.test(a.getName()) || a.getCustomData("selected_cell") || (CKEDITOR.dom.element.setMarker(f,
                    a, "selected_cell", !0), e.push(a))
                } var e = [], f = {}; if (!a) return e; for (var g = a.getRanges(), k = 0; k < g.length; k++) { var h = g[k]; if (h.collapsed) (h = h.getCommonAncestor().getAscendant({ td: 1, th: 1 }, !0)) && d(h) && e.push(h); else { var h = new CKEDITOR.dom.walker(h), l; for (h.guard = c; l = h.next() ;) l.type == CKEDITOR.NODE_ELEMENT && l.is(CKEDITOR.dtd.table) || (l = l.getAscendant({ td: 1, th: 1 }, !0)) && !l.getCustomData("selected_cell") && d(l) && (CKEDITOR.dom.element.setMarker(f, l, "selected_cell", !0), e.push(l)) } } CKEDITOR.dom.element.clearAllMarkers(f);
                return e
            } function f(b, d) {
                for (var c = q(b) ? b : a(b), e = c[0], f = e.getAscendant("table"), e = e.getDocument(), g = c[0].getParent(), k = g.$.rowIndex, c = c[c.length - 1], h = c.getParent().$.rowIndex + c.$.rowSpan - 1, c = new CKEDITOR.dom.element(f.$.rows[h]), k = d ? k : h, g = d ? g : c, c = CKEDITOR.tools.buildTableMap(f), f = c[k], k = d ? c[k - 1] : c[k + 1], c = c[0].length, e = e.createElement("tr"), h = 0; f[h] && h < c; h++) {
                    var l; 1 < f[h].rowSpan && k && f[h] == k[h] ? (l = f[h], l.rowSpan += 1) : (l = (new CKEDITOR.dom.element(f[h])).clone(), l.removeAttribute("rowSpan"), l.appendBogus(),
                    e.append(l), l = l.$); h += l.colSpan - 1
                } d ? e.insertBefore(g) : e.insertAfter(g); return e
            } function e(b) {
                if (b instanceof CKEDITOR.dom.selection) {
                    var d = b.getRanges(), c = a(b), f = c[0].getAscendant("table"), g = CKEDITOR.tools.buildTableMap(f), k = c[0].getParent().$.rowIndex, c = c[c.length - 1], h = c.getParent().$.rowIndex + c.$.rowSpan - 1, c = []; b.reset(); for (b = k; b <= h; b++) {
                        for (var l = g[b], m = new CKEDITOR.dom.element(f.$.rows[b]), n = 0; n < l.length; n++) {
                            var r = new CKEDITOR.dom.element(l[n]), q = r.getParent().$.rowIndex; 1 == r.$.rowSpan ? r.remove() :
                            (--r.$.rowSpan, q == b && (q = g[b + 1], q[n - 1] ? r.insertAfter(new CKEDITOR.dom.element(q[n - 1])) : (new CKEDITOR.dom.element(f.$.rows[b + 1])).append(r, 1))); n += r.$.colSpan - 1
                        } c.push(m)
                    } g = f.$.rows; d[0].moveToPosition(f, CKEDITOR.POSITION_BEFORE_START); k = new CKEDITOR.dom.element(g[h + 1] || (0 < k ? g[k - 1] : null) || f.$.parentNode); for (b = c.length; 0 <= b; b--) e(c[b]); return f.$.parentNode ? k : (d[0].select(), null)
                } b instanceof CKEDITOR.dom.element && (f = b.getAscendant("table"), 1 == f.$.rows.length ? f.remove() : b.remove()); return null
            } function b(a) {
                for (var b =
                a.getParent().$.cells, d = 0, c = 0; c < b.length; c++) { var e = b[c], d = d + e.colSpan; if (e == a.$) break } return d - 1
            } function c(a, d) { for (var c = d ? Infinity : 0, e = 0; e < a.length; e++) { var f = b(a[e]); if (d ? f < c : f > c) c = f } return c } function m(b, d) {
                for (var e = q(b) ? b : a(b), f = e[0].getAscendant("table"), g = c(e, 1), e = c(e), k = d ? g : e, h = CKEDITOR.tools.buildTableMap(f), f = [], g = [], e = [], l = h.length, m = 0; m < l; m++) { var n = d ? h[m][k - 1] : h[m][k + 1]; f.push(h[m][k]); g.push(n) } for (m = 0; m < l; m++) f[m] && (1 < f[m].colSpan && g[m] == f[m] ? (h = f[m], h.colSpan += 1) : (k = new CKEDITOR.dom.element(f[m]),
                h = k.clone(), h.removeAttribute("colSpan"), h.appendBogus(), h[d ? "insertBefore" : "insertAfter"].call(h, k), e.push(h), h = h.$), m += h.rowSpan - 1); return e
            } function h(b) {
                function d(a) {
                    var b = a.getRanges(), c, e; if (1 !== b.length) return a; b = b[0]; if (b.collapsed || 0 !== b.endOffset) return a; c = b.endContainer; e = c.getName().toLowerCase(); if ("td" !== e && "th" !== e) return a; for ((e = c.getPrevious()) || (e = c.getParent().getPrevious().getLast()) ; e.type !== CKEDITOR.NODE_TEXT && "br" !== e.getName().toLowerCase() ;) if (e = e.getLast(), !e) return a;
                    b.setEndAt(e, CKEDITOR.POSITION_BEFORE_END); return b.select()
                } CKEDITOR.env.webkit && !b.isFake && (b = d(b)); var c = b.getRanges(), e = a(b), f = e[0], g = e[e.length - 1], e = f.getAscendant("table"), k = CKEDITOR.tools.buildTableMap(e), h, l, m = []; b.reset(); var n = 0; for (b = k.length; n < b; n++) for (var r = 0, q = k[n].length; r < q; r++) void 0 === h && k[n][r] == f.$ && (h = r), k[n][r] == g.$ && (l = r); for (n = h; n <= l; n++) for (r = 0; r < k.length; r++) g = k[r], f = new CKEDITOR.dom.element(e.$.rows[r]), g = new CKEDITOR.dom.element(g[n]), g.$ && (1 == g.$.colSpan ? g.remove() : --g.$.colSpan,
                r += g.$.rowSpan - 1, f.$.cells.length || m.push(f)); h = k[0].length - 1 > l ? new CKEDITOR.dom.element(k[0][l + 1]) : h && -1 !== k[0][h - 1].cellIndex ? new CKEDITOR.dom.element(k[0][h - 1]) : new CKEDITOR.dom.element(e.$.parentNode); m.length == b && (c[0].moveToPosition(e, CKEDITOR.POSITION_AFTER_END), c[0].select(), e.remove()); return h
            } function l(a, b) { var d = a.getStartElement().getAscendant({ td: 1, th: 1 }, !0); if (d) { var c = d.clone(); c.appendBogus(); b ? c.insertBefore(d) : c.insertAfter(d) } } function d(b) {
                if (b instanceof CKEDITOR.dom.selection) {
                    var c =
                    b.getRanges(), e = a(b), f = e[0] && e[0].getAscendant("table"), g; a: { var h = 0; g = e.length - 1; for (var l = {}, m, n; m = e[h++];) CKEDITOR.dom.element.setMarker(l, m, "delete_cell", !0); for (h = 0; m = e[h++];) if ((n = m.getPrevious()) && !n.getCustomData("delete_cell") || (n = m.getNext()) && !n.getCustomData("delete_cell")) { CKEDITOR.dom.element.clearAllMarkers(l); g = n; break a } CKEDITOR.dom.element.clearAllMarkers(l); h = e[0].getParent(); (h = h.getPrevious()) ? g = h.getLast() : (h = e[g].getParent(), g = (h = h.getNext()) ? h.getChild(0) : null) } b.reset(); for (b =
                    e.length - 1; 0 <= b; b--) d(e[b]); g ? k(g, !0) : f && (c[0].moveToPosition(f, CKEDITOR.POSITION_BEFORE_START), c[0].select(), f.remove())
                } else b instanceof CKEDITOR.dom.element && (c = b.getParent(), 1 == c.getChildCount() ? c.remove() : b.remove())
            } function k(a, b) { var d = a.getDocument(), c = CKEDITOR.document; CKEDITOR.env.ie && 10 == CKEDITOR.env.version && (c.focus(), d.focus()); d = new CKEDITOR.dom.range(d); d["moveToElementEdit" + (b ? "End" : "Start")](a) || (d.selectNodeContents(a), d.collapse(b ? !1 : !0)); d.select(!0) } function g(a, b, d) {
                a = a[b];
                if ("undefined" == typeof d) return a; for (b = 0; a && b < a.length; b++) { if (d.is && a[b] == d.$) return b; if (b == d) return new CKEDITOR.dom.element(a[b]) } return d.is ? -1 : null
            } function n(b, d, c) {
                var e = a(b), f; if ((d ? 1 != e.length : 2 > e.length) || (f = b.getCommonAncestor()) && f.type == CKEDITOR.NODE_ELEMENT && f.is("table")) return !1; b = e[0]; f = b.getAscendant("table"); var k = CKEDITOR.tools.buildTableMap(f), h = k.length, l = k[0].length, m = b.getParent().$.rowIndex, n = g(k, m, b), r; if (d) {
                    var q; try {
                        var w = parseInt(b.getAttribute("rowspan"), 10) || 1; r = parseInt(b.getAttribute("colspan"),
                        10) || 1; q = k["up" == d ? m - w : "down" == d ? m + w : m]["left" == d ? n - r : "right" == d ? n + r : n]
                    } catch (H) { return !1 } if (!q || b.$ == q) return !1; e["up" == d || "left" == d ? "unshift" : "push"](new CKEDITOR.dom.element(q))
                } d = b.getDocument(); var F = m, w = q = 0, M = !c && new CKEDITOR.dom.documentFragment(d), I = 0; for (d = 0; d < e.length; d++) {
                    r = e[d]; var K = r.getParent(), C = r.getFirst(), L = r.$.colSpan, Q = r.$.rowSpan, K = K.$.rowIndex, O = g(k, K, r), I = I + L * Q, w = Math.max(w, O - n + L); q = Math.max(q, K - m + Q); c || (L = r, (Q = L.getBogus()) && Q.remove(), L.trim(), r.getChildren().count() && (K ==
                    F || !C || C.isBlockBoundary && C.isBlockBoundary({ br: 1 }) || (F = M.getLast(CKEDITOR.dom.walker.whitespaces(!0)), !F || F.is && F.is("br") || M.append("br")), r.moveChildren(M)), d ? r.remove() : r.setHtml("")); F = K
                } if (c) return q * w == I; M.moveChildren(b); b.appendBogus(); w >= l ? b.removeAttribute("rowSpan") : b.$.rowSpan = q; q >= h ? b.removeAttribute("colSpan") : b.$.colSpan = w; c = new CKEDITOR.dom.nodeList(f.$.rows); e = c.count(); for (d = e - 1; 0 <= d; d--) f = c.getItem(d), f.$.cells.length || (f.remove(), e++); return b
            } function r(b, d) {
                var c = a(b); if (1 <
                c.length) return !1; if (d) return !0; var c = c[0], e = c.getParent(), f = e.getAscendant("table"), k = CKEDITOR.tools.buildTableMap(f), h = e.$.rowIndex, l = g(k, h, c), m = c.$.rowSpan, n; if (1 < m) { n = Math.ceil(m / 2); for (var m = Math.floor(m / 2), e = h + n, f = new CKEDITOR.dom.element(f.$.rows[e]), k = g(k, e), r, e = c.clone(), h = 0; h < k.length; h++) if (r = k[h], r.parentNode == f.$ && h > l) { e.insertBefore(new CKEDITOR.dom.element(r)); break } else r = null; r || f.append(e) } else for (m = n = 1, f = e.clone(), f.insertAfter(e), f.append(e = c.clone()), r = g(k, h), l = 0; l < r.length; l++) r[l].rowSpan++;
                e.appendBogus(); c.$.rowSpan = n; e.$.rowSpan = m; 1 == n && c.removeAttribute("rowSpan"); 1 == m && e.removeAttribute("rowSpan"); return e
            } function w(b, d) {
                var c = a(b); if (1 < c.length) return !1; if (d) return !0; var c = c[0], e = c.getParent(), f = e.getAscendant("table"), f = CKEDITOR.tools.buildTableMap(f), k = g(f, e.$.rowIndex, c), h = c.$.colSpan; if (1 < h) e = Math.ceil(h / 2), h = Math.floor(h / 2); else { for (var h = e = 1, l = [], m = 0; m < f.length; m++) { var n = f[m]; l.push(n[k]); 1 < n[k].rowSpan && (m += n[k].rowSpan - 1) } for (f = 0; f < l.length; f++) l[f].colSpan++ } f = c.clone();
                f.insertAfter(c); f.appendBogus(); c.$.colSpan = e; f.$.colSpan = h; 1 == e && c.removeAttribute("colSpan"); 1 == h && f.removeAttribute("colSpan"); return f
            } var q = CKEDITOR.tools.isArray; CKEDITOR.plugins.tabletools = {
                requires: "table,dialog,contextmenu", init: function (b) {
                    function c(a) { return CKEDITOR.tools.extend(a || {}, { contextSensitive: 1, refresh: function (a, b) { this.setState(b.contains({ td: 1, th: 1 }, 1) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED) } }) } function g(a, d) { var c = b.addCommand(a, d); b.addFeature(c) } var q = b.lang.table,
                    B = CKEDITOR.tools.style.parse, v = "td{width} td{height} td{border-color} td{background-color} td{white-space} td{vertical-align} td{text-align} td[colspan] td[rowspan] th".split(" "); g("cellProperties", new CKEDITOR.dialogCommand("cellProperties", c({
                        allowedContent: "td th{width,height,border-color,background-color,white-space,vertical-align,text-align}[colspan,rowspan]", requiredContent: v, contentTransformations: [[{
                            element: "td", left: function (a) { return a.styles.background && B.background(a.styles.background).color },
                            right: function (a) { a.styles["background-color"] = B.background(a.styles.background).color }
                        }, { element: "td", check: "td{vertical-align}", left: function (a) { return a.attributes && a.attributes.valign }, right: function (a) { a.styles["vertical-align"] = a.attributes.valign; delete a.attributes.valign } }], [{
                            element: "tr", check: "td{height}", left: function (a) { return a.styles && a.styles.height }, right: function (a) {
                                CKEDITOR.tools.array.forEach(a.children, function (b) { b.name in { td: 1, th: 1 } && (b.attributes["cke-row-height"] = a.styles.height) });
                                delete a.styles.height
                            }
                        }], [{ element: "td", check: "td{height}", left: function (a) { return (a = a.attributes) && a["cke-row-height"] }, right: function (a) { a.styles.height = a.attributes["cke-row-height"]; delete a.attributes["cke-row-height"] } }]]
                    }))); CKEDITOR.dialog.add("cellProperties", this.path + "dialogs/tableCell.js"); g("rowDelete", c({ requiredContent: "table", exec: function (a) { a = a.getSelection(); (a = e(a)) && k(a) } })); g("rowInsertBefore", c({ requiredContent: "table", exec: function (b) { b = b.getSelection(); b = a(b); f(b, !0) } }));
                    g("rowInsertAfter", c({ requiredContent: "table", exec: function (b) { b = b.getSelection(); b = a(b); f(b) } })); g("columnDelete", c({ requiredContent: "table", exec: function (a) { a = a.getSelection(); (a = h(a)) && k(a, !0) } })); g("columnInsertBefore", c({ requiredContent: "table", exec: function (b) { b = b.getSelection(); b = a(b); m(b, !0) } })); g("columnInsertAfter", c({ requiredContent: "table", exec: function (b) { b = b.getSelection(); b = a(b); m(b) } })); g("cellDelete", c({ requiredContent: "table", exec: function (a) { a = a.getSelection(); d(a) } })); g("cellMerge",
                    c({ allowedContent: "td[colspan,rowspan]", requiredContent: "td[colspan,rowspan]", exec: function (a, b) { b.cell = n(a.getSelection()); k(b.cell, !0) } })); g("cellMergeRight", c({ allowedContent: "td[colspan]", requiredContent: "td[colspan]", exec: function (a, b) { b.cell = n(a.getSelection(), "right"); k(b.cell, !0) } })); g("cellMergeDown", c({ allowedContent: "td[rowspan]", requiredContent: "td[rowspan]", exec: function (a, b) { b.cell = n(a.getSelection(), "down"); k(b.cell, !0) } })); g("cellVerticalSplit", c({
                        allowedContent: "td[rowspan]", requiredContent: "td[rowspan]",
                        exec: function (a) { k(w(a.getSelection())) }
                    })); g("cellHorizontalSplit", c({ allowedContent: "td[colspan]", requiredContent: "td[colspan]", exec: function (a) { k(r(a.getSelection())) } })); g("cellInsertBefore", c({ requiredContent: "table", exec: function (a) { a = a.getSelection(); l(a, !0) } })); g("cellInsertAfter", c({ requiredContent: "table", exec: function (a) { a = a.getSelection(); l(a) } })); b.addMenuItems && b.addMenuItems({
                        tablecell: {
                            label: q.cell.menu, group: "tablecell", order: 1, getItems: function () {
                                var d = b.getSelection(), c = a(d), d =
                                {
                                    tablecell_insertBefore: CKEDITOR.TRISTATE_OFF, tablecell_insertAfter: CKEDITOR.TRISTATE_OFF, tablecell_delete: CKEDITOR.TRISTATE_OFF, tablecell_merge: n(d, null, !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_merge_right: n(d, "right", !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_merge_down: n(d, "down", !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_split_vertical: w(d, !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_split_horizontal: r(d, !0) ? CKEDITOR.TRISTATE_OFF :
                                    CKEDITOR.TRISTATE_DISABLED
                                }; b.filter.check(v) && (d.tablecell_properties = 0 < c.length ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED); return d
                            }
                        }, tablecell_insertBefore: { label: q.cell.insertBefore, group: "tablecell", command: "cellInsertBefore", order: 5 }, tablecell_insertAfter: { label: q.cell.insertAfter, group: "tablecell", command: "cellInsertAfter", order: 10 }, tablecell_delete: { label: q.cell.deleteCell, group: "tablecell", command: "cellDelete", order: 15 }, tablecell_merge: {
                            label: q.cell.merge, group: "tablecell", command: "cellMerge",
                            order: 16
                        }, tablecell_merge_right: { label: q.cell.mergeRight, group: "tablecell", command: "cellMergeRight", order: 17 }, tablecell_merge_down: { label: q.cell.mergeDown, group: "tablecell", command: "cellMergeDown", order: 18 }, tablecell_split_horizontal: { label: q.cell.splitHorizontal, group: "tablecell", command: "cellHorizontalSplit", order: 19 }, tablecell_split_vertical: { label: q.cell.splitVertical, group: "tablecell", command: "cellVerticalSplit", order: 20 }, tablecell_properties: {
                            label: q.cell.title, group: "tablecellproperties", command: "cellProperties",
                            order: 21
                        }, tablerow: { label: q.row.menu, group: "tablerow", order: 1, getItems: function () { return { tablerow_insertBefore: CKEDITOR.TRISTATE_OFF, tablerow_insertAfter: CKEDITOR.TRISTATE_OFF, tablerow_delete: CKEDITOR.TRISTATE_OFF } } }, tablerow_insertBefore: { label: q.row.insertBefore, group: "tablerow", command: "rowInsertBefore", order: 5 }, tablerow_insertAfter: { label: q.row.insertAfter, group: "tablerow", command: "rowInsertAfter", order: 10 }, tablerow_delete: { label: q.row.deleteRow, group: "tablerow", command: "rowDelete", order: 15 },
                        tablecolumn: { label: q.column.menu, group: "tablecolumn", order: 1, getItems: function () { return { tablecolumn_insertBefore: CKEDITOR.TRISTATE_OFF, tablecolumn_insertAfter: CKEDITOR.TRISTATE_OFF, tablecolumn_delete: CKEDITOR.TRISTATE_OFF } } }, tablecolumn_insertBefore: { label: q.column.insertBefore, group: "tablecolumn", command: "columnInsertBefore", order: 5 }, tablecolumn_insertAfter: { label: q.column.insertAfter, group: "tablecolumn", command: "columnInsertAfter", order: 10 }, tablecolumn_delete: {
                            label: q.column.deleteColumn, group: "tablecolumn",
                            command: "columnDelete", order: 15
                        }
                    }); b.contextMenu && b.contextMenu.addListener(function (a, b, d) { return (a = d.contains({ td: 1, th: 1 }, 1)) && !a.isReadOnly() ? { tablecell: CKEDITOR.TRISTATE_OFF, tablerow: CKEDITOR.TRISTATE_OFF, tablecolumn: CKEDITOR.TRISTATE_OFF } : null })
                }, getCellColIndex: b, insertRow: f, insertColumn: m, getSelectedCells: a
            }; CKEDITOR.plugins.add("tabletools", CKEDITOR.plugins.tabletools)
        })(); CKEDITOR.tools.buildTableMap = function (a, f, e, b, c) {
            a = a.$.rows; e = e || 0; b = "number" === typeof b ? b : a.length - 1; c = "number" === typeof c ?
                c : -1; var m = -1, h = []; for (f = f || 0; f <= b; f++) { m++; !h[m] && (h[m] = []); for (var l = -1, d = e; d <= (-1 === c ? a[f].cells.length - 1 : c) ; d++) { var k = a[f].cells[d]; if (!k) break; for (l++; h[m][l];) l++; for (var g = isNaN(k.colSpan) ? 1 : k.colSpan, k = isNaN(k.rowSpan) ? 1 : k.rowSpan, n = 0; n < k && !(f + n > b) ; n++) { h[m + n] || (h[m + n] = []); for (var r = 0; r < g; r++) h[m + n][l + r] = a[f].cells[d] } l += g - 1; if (-1 !== c && l >= c) break } } return h
        }; (function () {
            function a(a) { return CKEDITOR.plugins.widget && CKEDITOR.plugins.widget.isDomWidget(a) } function f(a, b) {
                var c = a.getAscendant("table"),
                e = b.getAscendant("table"), f = CKEDITOR.tools.buildTableMap(c), g = d(a), k = d(b), h = [], l = {}, m, n; c.contains(e) && (b = b.getAscendant({ td: 1, th: 1 }), k = d(b)); g > k && (c = g, g = k, k = c, c = a, a = b, b = c); for (c = 0; c < f[g].length; c++) if (a.$ === f[g][c]) { m = c; break } for (c = 0; c < f[k].length; c++) if (b.$ === f[k][c]) { n = c; break } m > n && (c = m, m = n, n = c); for (c = g; c <= k; c++) for (g = m; g <= n; g++) e = new CKEDITOR.dom.element(f[c][g]), e.$ && !e.getCustomData("selected_cell") && (h.push(e), CKEDITOR.dom.element.setMarker(l, e, "selected_cell", !0)); CKEDITOR.dom.element.clearAllMarkers(l);
                return h
            } function e(a) { return (a = a.editable().findOne(".cke_table-faked-selection")) && a.getAscendant("table") } function b(a, b) {
                var d = a.editable().find(".cke_table-faked-selection"), c = a.editable().findOne("[data-cke-table-faked-selection-table]"), e; a.fire("lockSnapshot"); a.editable().removeClass("cke_table-faked-selection-editor"); for (e = 0; e < d.count() ; e++) d.getItem(e).removeClass("cke_table-faked-selection"); c && c.data("cke-table-faked-selection-table", !1); a.fire("unlockSnapshot"); b && (p = { active: !1 }, a.getSelection().isInTable() &&
                a.getSelection().reset())
            } function c(a, b) { var d = [], c, e; for (e = 0; e < b.length; e++) c = a.createRange(), c.setStartBefore(b[e]), c.setEndAfter(b[e]), d.push(c); a.getSelection().selectRanges(d) } function m(a) { var b = a.editable().find(".cke_table-faked-selection"); 1 > b.count() || (b = f(b.getItem(0), b.getItem(b.count() - 1)), c(a, b)) } function h(d, e, g) {
                var k = x(d.getSelection(!0)); e = e.is("table") ? null : e; var h; (h = p.active && !p.first) && !(h = e) && (h = d.getSelection().getRanges(), h = 1 < k.length || h[0] && !h[0].collapsed ? !0 : !1); if (h) p.first =
                e || k[0], p.dirty = e ? !1 : 1 !== k.length; else if (p.active && e && p.first.getAscendant("table").equals(e.getAscendant("table"))) { k = f(p.first, e); if (!p.dirty && 1 === k.length && !a(g.data.getTarget())) return b(d, "mouseup" === g.name); p.dirty = !0; p.last = e; c(d, k) }
            } function l(a) {
                var d = (a = a.editor || a.sender.editor) && a.getSelection(), c = d && d.getRanges() || [], e = c && c[0].getEnclosedNode(), e = e && e.type == CKEDITOR.NODE_ELEMENT && e.is("img"), f; if (d && (b(a), d.isInTable() && d.isFake)) if (e) a.getSelection().reset(); else if (!c[0]._getTableElement({ table: 1 }).hasAttribute("data-cke-tableselection-ignored")) {
                    1 ===
                    c.length && c[0]._getTableElement() && c[0]._getTableElement().is("table") && (f = c[0]._getTableElement()); f = x(d, f); a.fire("lockSnapshot"); for (d = 0; d < f.length; d++) f[d].addClass("cke_table-faked-selection"); 0 < f.length && (a.editable().addClass("cke_table-faked-selection-editor"), f[0].getAscendant("table").data("cke-table-faked-selection-table", "")); a.fire("unlockSnapshot")
                }
            } function d(a) { return a.getAscendant("tr", !0).$.rowIndex } function k(d) {
                function c(a, b) {
                    return a && b ? a.equals(b) || a.contains(b) || b.contains(a) ||
                    a.getCommonAncestor(b).is(u) : !1
                } function f(a) { return !a.getAscendant("table", !0) && a.getDocument().equals(l.document) } function g(a, b, d, c) { if ("mousedown" === a.name && (CKEDITOR.tools.getMouseButton(a) === CKEDITOR.MOUSE_BUTTON_LEFT || !c)) return !0; if (b = a.name === (CKEDITOR.env.gecko ? "mousedown" : "mouseup") && !f(a.data.getTarget())) a = a.data.getTarget().getAscendant({ td: 1, th: 1 }, !0), b = !(a && a.hasClass("cke_table-faked-selection")); return b } if (d.data.getTarget().getName && ("mouseup" === d.name || !a(d.data.getTarget()))) {
                    var l =
                    d.editor || d.listenerData.editor, n = l.getSelection(1), r = e(l), q = d.data.getTarget(), t = q && q.getAscendant({ td: 1, th: 1 }, !0), q = q && q.getAscendant("table", !0), u = { table: 1, thead: 1, tbody: 1, tfoot: 1, tr: 1, td: 1, th: 1 }; q && q.hasAttribute("data-cke-tableselection-ignored") || (g(d, n, r, q) && b(l, !0), !p.active && "mousedown" === d.name && CKEDITOR.tools.getMouseButton(d) === CKEDITOR.MOUSE_BUTTON_LEFT && q && (p = { active: !0 }, CKEDITOR.document.on("mouseup", k, null, { editor: l })), (t || q) && h(l, t || q, d), "mouseup" === d.name && (CKEDITOR.tools.getMouseButton(d) ===
                    CKEDITOR.MOUSE_BUTTON_LEFT && (f(d.data.getTarget()) || c(r, q)) && m(l), p = { active: !1 }, CKEDITOR.document.removeListener("mouseup", k)))
                }
            } function g(a) { var b = a.data.getTarget().getAscendant("table", !0); b && b.hasAttribute("data-cke-tableselection-ignored") || (b = a.data.getTarget().getAscendant({ td: 1, th: 1 }, !0)) && !b.hasClass("cke_table-faked-selection") && (a.cancel(), a.data.preventDefault()) } function n(a, b) {
                function d(a) { a.cancel() } var c = a.getSelection(), e = c.createBookmarks(), f = a.document, g = a.createRange(), k = f.getDocumentElement().$,
                h = CKEDITOR.env.ie && 9 > CKEDITOR.env.version, l = a.blockless || CKEDITOR.env.ie ? "span" : "div", m, n, p, r; f.getById("cke_table_copybin") || (m = f.createElement(l), n = f.createElement(l), n.setAttributes({ id: "cke_table_copybin", "data-cke-temp": "1" }), m.setStyles({ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }), m.setStyle("ltr" == a.config.contentsLangDirection ? "left" : "right", "-5000px"), m.setHtml(a.getSelectedHtml(!0)), a.fire("lockSnapshot"), n.append(m), a.editable().append(n), r = a.on("selectionChange", d,
                null, null, 0), h && (p = k.scrollTop), g.selectNodeContents(m), g.select(), h && (k.scrollTop = p), setTimeout(function () { n.remove(); c.selectBookmarks(e); r.removeListener(); a.fire("unlockSnapshot"); b && (a.extractSelectedHtml(), a.fire("saveSnapshot")) }, 100))
            } function r(a) { var b = a.editor || a.sender.editor, d = b.getSelection(); d.isInTable() && (d.getRanges()[0]._getTableElement({ table: 1 }).hasAttribute("data-cke-tableselection-ignored") || n(b, "cut" === a.name)) } function w(a) { this._reset(); a && this.setSelectedCells(a) } function q(a,
            b, d) { a.on("beforeCommandExec", function (d) { -1 !== CKEDITOR.tools.array.indexOf(b, d.data.name) && (d.data.selectedCells = x(a.getSelection())) }); a.on("afterCommandExec", function (c) { -1 !== CKEDITOR.tools.array.indexOf(b, c.data.name) && d(a, c.data) }) } var p = { active: !1 }, u, x, t, B, v; w.prototype = {}; w.prototype._reset = function () { this.cells = { first: null, last: null, all: [] }; this.rows = { first: null, last: null } }; w.prototype.setSelectedCells = function (a) {
                this._reset(); a = a.slice(0); this._arraySortByDOMOrder(a); this.cells.all = a; this.cells.first =
                a[0]; this.cells.last = a[a.length - 1]; this.rows.first = a[0].getAscendant("tr"); this.rows.last = this.cells.last.getAscendant("tr")
            }; w.prototype.getTableMap = function () { var a = t(this.cells.first), b; a: { b = this.cells.last; var c = b.getAscendant("table"), e = d(b), c = CKEDITOR.tools.buildTableMap(c), f; for (f = 0; f < c[e].length; f++) if ((new CKEDITOR.dom.element(c[e][f])).equals(b)) { b = f; break a } b = void 0 } return CKEDITOR.tools.buildTableMap(this._getTable(), d(this.rows.first), a, d(this.rows.last), b) }; w.prototype._getTable = function () { return this.rows.first.getAscendant("table") };
            w.prototype.insertRow = function (a, b, d) { if ("undefined" === typeof a) a = 1; else if (0 >= a) return; for (var c = this.cells.first.$.cellIndex, e = this.cells.last.$.cellIndex, f = d ? [] : this.cells.all, g, k = 0; k < a; k++) g = B(d ? this.cells.all : f, b), g = CKEDITOR.tools.array.filter(g.find("td, th").toArray(), function (a) { return d ? !0 : a.$.cellIndex >= c && a.$.cellIndex <= e }), f = b ? g.concat(f) : f.concat(g); this.setSelectedCells(f) }; w.prototype.insertColumn = function (a) {
                function b(a) { a = d(a); return a >= f && a <= g } if ("undefined" === typeof a) a = 1; else if (0 >=
                a) return; for (var c = this.cells, e = c.all, f = d(c.first), g = d(c.last), c = 0; c < a; c++) e = e.concat(CKEDITOR.tools.array.filter(v(e), b)); this.setSelectedCells(e)
            }; w.prototype.emptyCells = function (a) { a = a || this.cells.all; for (var b = 0; b < a.length; b++) a[b].setHtml("") }; w.prototype._arraySortByDOMOrder = function (a) { a.sort(function (a, b) { return a.getPosition(b) & CKEDITOR.POSITION_PRECEDING ? -1 : 1 }) }; var y = {
                onPaste: function (a) {
                    function b(a) { var d = e.createRange(); d.selectNodeContents(a); d.select() } function d(a) {
                        return Math.max.apply(null,
                        CKEDITOR.tools.array.map(a, function (a) { return a.length }, 0))
                    } var e = a.editor, g = e.getSelection(), k = x(g), h = g.isInTable(!0) && this.isBoundarySelection(g), l = this.findTableInPastedContent(e, a.data.dataValue), m, n; (function (a, b, d, c) {
                        a = a.getRanges(); var e = a.length && a[0]._getTableElement({ table: 1 }); if (!b.length || e && e.hasAttribute("data-cke-tableselection-ignored") || c && !d) return !1; if (b = !c) (b = a[0]) ? (b = b.clone(), b.enlarge(CKEDITOR.ENLARGE_ELEMENT), b = (b = b.getEnclosedNode()) && b.is && b.is(CKEDITOR.dtd.$tableContent)) :
                        b = void 0, b = !b; return b ? !1 : !0
                    })(g, k, l, h) && (k = k[0].getAscendant("table"), m = new w(x(g, k)), e.once("afterPaste", function () { var a; if (n) { a = new CKEDITOR.dom.element(n[0][0]); var b = n[n.length - 1]; a = f(a, new CKEDITOR.dom.element(b[b.length - 1])) } else a = m.cells.all; c(e, a) }), l ? (a.stop(), h ? (m.insertRow(1, 1 === h, !0), g.selectElement(m.rows.first)) : (m.emptyCells(), c(e, m.cells.all)), a = m.getTableMap(), n = CKEDITOR.tools.buildTableMap(l), m.insertRow(n.length - a.length), m.insertColumn(d(n) - d(a)), a = m.getTableMap(), this.pasteTable(m,
                    a, n), e.fire("saveSnapshot"), setTimeout(function () { e.fire("afterPaste") }, 0)) : (b(m.cells.first), e.once("afterPaste", function () { e.fire("lockSnapshot"); m.emptyCells(m.cells.all.slice(1)); c(e, m.cells.all); e.fire("unlockSnapshot") })))
                }, isBoundarySelection: function (a) { a = a.getRanges()[0]; var b = a.endContainer.getAscendant("tr", !0); if (b && a.collapsed) { if (a.checkBoundaryOfElement(b, CKEDITOR.START)) return 1; if (a.checkBoundaryOfElement(b, CKEDITOR.END)) return 2 } return 0 }, findTableInPastedContent: function (a, b) {
                    var d =
                    a.dataProcessor, c = new CKEDITOR.dom.element("body"); d || (d = new CKEDITOR.htmlDataProcessor(a)); c.setHtml(d.toHtml(b), { fixForBody: !1 }); return 1 < c.getChildCount() ? null : c.findOne("table")
                }, pasteTable: function (a, b, d) {
                    var c, e = t(a.cells.first), f = a._getTable(), g = {}, k, h, l, m; for (l = 0; l < d.length; l++) for (k = new CKEDITOR.dom.element(f.$.rows[a.rows.first.$.rowIndex + l]), m = 0; m < d[l].length; m++) if (h = new CKEDITOR.dom.element(d[l][m]), c = b[l] && b[l][m] ? new CKEDITOR.dom.element(b[l][m]) : null, h && !h.getCustomData("processed")) {
                        if (c &&
                        c.getParent()) h.replace(c); else if (0 === m || d[l][m - 1]) (c = 0 !== m ? new CKEDITOR.dom.element(d[l][m - 1]) : null) && k.equals(c.getParent()) ? h.insertAfter(c) : 0 < e ? k.$.cells[e] ? h.insertAfter(new CKEDITOR.dom.element(k.$.cells[e])) : k.append(h) : k.append(h, !0); CKEDITOR.dom.element.setMarker(g, h, "processed", !0)
                    } else h.getCustomData("processed") && c && c.remove(); CKEDITOR.dom.element.clearAllMarkers(g)
                }
            }; CKEDITOR.plugins.tableselection = {
                getCellsBetween: f, keyboardIntegration: function (a) {
                    function b(a) {
                        var d = a.getEnclosedNode();
                        d && "function" === typeof d.is && d.is({ td: 1, th: 1 }) ? d.setText("") : a.deleteContents(); CKEDITOR.tools.array.forEach(a._find("td"), function (a) { a.appendBogus() })
                    } var d = a.editable(); d.attachListener(d, "keydown", function (a) {
                        function d(b, c) {
                            if (!c.length) return null; var f = a.createRange(), g = CKEDITOR.dom.range.mergeRanges(c); CKEDITOR.tools.array.forEach(g, function (a) { a.enlarge(CKEDITOR.ENLARGE_ELEMENT) }); var k = g[0].getBoundaryNodes(), h = k.startNode, k = k.endNode; if (h && h.is && h.is(e)) {
                                for (var l = h.getAscendant("table",
                                !0), m = h.getPreviousSourceNode(!1, CKEDITOR.NODE_ELEMENT, l), n = !1, p = function (a) { return !h.contains(a) && a.is && a.is("td", "th") }; m && !p(m) ;) m = m.getPreviousSourceNode(!1, CKEDITOR.NODE_ELEMENT, l); !m && k && k.is && !k.is("table") && k.getNext() && (m = k.getNext().findOne("td, th"), n = !0); if (m) f["moveToElementEdit" + (n ? "Start" : "End")](m); else f.setStartBefore(h.getAscendant("table", !0)), f.collapse(!0); g[0].deleteContents(); return [f]
                            } if (h) return f.moveToElementEditablePosition(h), [f]
                        } var c = { 37: 1, 38: 1, 39: 1, 40: 1, 8: 1, 46: 1, 13: 1 },
                        e = CKEDITOR.tools.extend({ table: 1 }, CKEDITOR.dtd.$tableContent); delete e.td; delete e.th; return function (e) {
                            var f = e.data.getKey(), g = e.data.getKeystroke(), k, h = 37 === f || 38 == f, l, m, n; if (c[f] && !a.readOnly && (k = a.getSelection()) && k.isInTable() && k.isFake) {
                                l = k.getRanges(); m = l[0]._getTableElement(); n = l[l.length - 1]._getTableElement(); if (13 !== f || a.plugins.enterkey) e.data.preventDefault(), e.cancel(); if (36 < f && 41 > f) l[0].moveToElementEditablePosition(h ? m : n, !h), k.selectRanges([l[0]]); else if (13 !== f || 13 === g || g === CKEDITOR.SHIFT +
                                13) { for (e = 0; e < l.length; e++) b(l[e]); (e = d(m, l)) ? l = e : l[0].moveToElementEditablePosition(m); k.selectRanges(l); 13 === f && a.plugins.enterkey ? (a.fire("lockSnapshot"), 13 === g ? a.execCommand("enter") : a.execCommand("shiftEnter"), a.fire("unlockSnapshot"), a.fire("saveSnapshot")) : 13 !== f && a.fire("saveSnapshot") }
                            }
                        }
                    }(a), null, null, -1); d.attachListener(d, "keypress", function (d) {
                        var c = a.getSelection(), e = d.data.$.charCode || 13 === d.data.getKey(), f; if (!a.readOnly && c && c.isInTable() && c.isFake && e && !(d.data.getKeystroke() & CKEDITOR.CTRL)) {
                            d =
                            c.getRanges(); e = d[0].getEnclosedNode().getAscendant({ td: 1, th: 1 }, !0); for (f = 0; f < d.length; f++) b(d[f]); e && (d[0].moveToElementEditablePosition(e), c.selectRanges([d[0]]))
                        }
                    }, null, null, -1)
                }
            }; CKEDITOR.plugins.add("tableselection", {
                requires: "clipboard,tabletools", isSupportedEnvironment: function () { return !(CKEDITOR.env.ie && 11 > CKEDITOR.env.version) }, onLoad: function () {
                    u = CKEDITOR.plugins.tabletools; x = u.getSelectedCells; t = u.getCellColIndex; B = u.insertRow; v = u.insertColumn; CKEDITOR.document.appendStyleSheet(this.path +
                    "styles/tableselection.css")
                }, init: function (a) {
                    this.isSupportedEnvironment() && (a.addContentsCss && a.addContentsCss(this.path + "styles/tableselection.css"), a.on("contentDom", function () {
                        var b = a.editable(), d = b.isInline() ? b : a.document, c = { editor: a }; b.attachListener(d, "mousedown", k, null, c); b.attachListener(d, "mousemove", k, null, c); b.attachListener(d, "mouseup", k, null, c); b.attachListener(b, "dragstart", g); b.attachListener(a, "selectionCheck", l); CKEDITOR.plugins.tableselection.keyboardIntegration(a); CKEDITOR.plugins.clipboard &&
                        !CKEDITOR.plugins.clipboard.isCustomCopyCutSupported && (b.attachListener(b, "cut", r), b.attachListener(b, "copy", r))
                    }), a.on("paste", y.onPaste, y), q(a, "rowInsertBefore rowInsertAfter columnInsertBefore columnInsertAfter cellInsertBefore cellInsertAfter".split(" "), function (a, b) { c(a, b.selectedCells) }), q(a, ["cellMerge", "cellMergeRight", "cellMergeDown"], function (a, b) { c(a, [b.commandData.cell]) }), q(a, ["cellDelete"], function (a) { b(a, !0) }))
                }
            })
        })(); "use strict"; (function () {
            function a(a, b) {
                return CKEDITOR.tools.array.reduce(b,
                function (a, b) { return b(a) }, a)
            } var f = [CKEDITOR.CTRL + 90, CKEDITOR.CTRL + 89, CKEDITOR.CTRL + CKEDITOR.SHIFT + 90], e = { 8: 1, 46: 1 }; CKEDITOR.plugins.add("undo", {
                init: function (a) {
                    function c(a) { l.enabled && !1 !== a.data.command.canUndo && l.save() } function e() { l.enabled = a.readOnly ? !1 : "wysiwyg" == a.mode; l.onChange() } var l = a.undoManager = new b(a), m = l.editingHandler = new h(l), w = a.addCommand("undo", { exec: function () { l.undo() && (a.selectionChange(), this.fire("afterUndo")) }, startDisabled: !0, canUndo: !1 }), q = a.addCommand("redo", {
                        exec: function () {
                            l.redo() &&
                            (a.selectionChange(), this.fire("afterRedo"))
                        }, startDisabled: !0, canUndo: !1
                    }); a.setKeystroke([[f[0], "undo"], [f[1], "redo"], [f[2], "redo"]]); l.onChange = function () { w.setState(l.undoable() ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED); q.setState(l.redoable() ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED) }; a.on("beforeCommandExec", c); a.on("afterCommandExec", c); a.on("saveSnapshot", function (a) { l.save(a.data && a.data.contentOnly) }); a.on("contentDom", m.attachListeners, m); a.on("instanceReady", function () { a.fire("saveSnapshot") });
                    a.on("beforeModeUnload", function () { "wysiwyg" == a.mode && l.save(!0) }); a.on("mode", e); a.on("readOnly", e); a.ui.addButton && (a.ui.addButton("Undo", { label: a.lang.undo.undo, command: "undo", toolbar: "undo,10" }), a.ui.addButton("Redo", { label: a.lang.undo.redo, command: "redo", toolbar: "undo,20" })); a.resetUndo = function () { l.reset(); a.fire("saveSnapshot") }; a.on("updateSnapshot", function () { l.currentImage && l.update() }); a.on("lockSnapshot", function (a) { a = a.data; l.lock(a && a.dontUpdate, a && a.forceUpdate) }); a.on("unlockSnapshot",
                    l.unlock, l)
                }
            }); CKEDITOR.plugins.undo = {}; var b = CKEDITOR.plugins.undo.UndoManager = function (a) { this.strokesRecorded = [0, 0]; this.locked = null; this.previousKeyGroup = -1; this.limit = a.config.undoStackSize || 20; this.strokesLimit = 25; this._filterRules = []; this.editor = a; this.reset(); CKEDITOR.env.ie && this.addFilterRule(function (a) { return a.replace(/\s+data-cke-expando=".*?"/g, "") }) }; b.prototype = {
                type: function (a, c) {
                    var e = b.getKeyGroup(a), f = this.strokesRecorded[e] + 1; c = c || f >= this.strokesLimit; this.typing || (this.hasUndo =
                    this.typing = !0, this.hasRedo = !1, this.onChange()); c ? (f = 0, this.editor.fire("saveSnapshot")) : this.editor.fire("change"); this.strokesRecorded[e] = f; this.previousKeyGroup = e
                }, keyGroupChanged: function (a) { return b.getKeyGroup(a) != this.previousKeyGroup }, reset: function () { this.snapshots = []; this.index = -1; this.currentImage = null; this.hasRedo = this.hasUndo = !1; this.locked = null; this.resetType() }, resetType: function () { this.strokesRecorded = [0, 0]; this.typing = !1; this.previousKeyGroup = -1 }, refreshState: function () {
                    this.hasUndo =
                    !!this.getNextImage(!0); this.hasRedo = !!this.getNextImage(!1); this.resetType(); this.onChange()
                }, save: function (a, b, e) {
                    var f = this.editor; if (this.locked || "ready" != f.status || "wysiwyg" != f.mode) return !1; var h = f.editable(); if (!h || "ready" != h.status) return !1; h = this.snapshots; b || (b = new c(f)); if (!1 === b.contents) return !1; if (this.currentImage) if (b.equalsContent(this.currentImage)) { if (a || b.equalsSelection(this.currentImage)) return !1 } else !1 !== e && f.fire("change"); h.splice(this.index + 1, h.length - this.index - 1); h.length ==
                    this.limit && h.shift(); this.index = h.push(b) - 1; this.currentImage = b; !1 !== e && this.refreshState(); return !0
                }, restoreImage: function (a) {
                    var b = this.editor, c; a.bookmarks && (b.focus(), c = b.getSelection()); this.locked = { level: 999 }; this.editor.loadSnapshot(a.contents); a.bookmarks ? c.selectBookmarks(a.bookmarks) : CKEDITOR.env.ie && (c = this.editor.document.getBody().$.createTextRange(), c.collapse(!0), c.select()); this.locked = null; this.index = a.index; this.currentImage = this.snapshots[this.index]; this.update(); this.refreshState();
                    b.fire("change")
                }, getNextImage: function (a) { var b = this.snapshots, c = this.currentImage, e; if (c) if (a) for (e = this.index - 1; 0 <= e; e--) { if (a = b[e], !c.equalsContent(a)) return a.index = e, a } else for (e = this.index + 1; e < b.length; e++) if (a = b[e], !c.equalsContent(a)) return a.index = e, a; return null }, redoable: function () { return this.enabled && this.hasRedo }, undoable: function () { return this.enabled && this.hasUndo }, undo: function () { if (this.undoable()) { this.save(!0); var a = this.getNextImage(!0); if (a) return this.restoreImage(a), !0 } return !1 },
                redo: function () { if (this.redoable() && (this.save(!0), this.redoable())) { var a = this.getNextImage(!1); if (a) return this.restoreImage(a), !0 } return !1 }, update: function (a) { if (!this.locked) { a || (a = new c(this.editor)); for (var b = this.index, e = this.snapshots; 0 < b && this.currentImage.equalsContent(e[b - 1]) ;)--b; e.splice(b, this.index - b + 1, a); this.index = b; this.currentImage = a } }, updateSelection: function (a) {
                    if (!this.snapshots.length) return !1; var b = this.snapshots, c = b[b.length - 1]; return c.equalsContent(a) && !c.equalsSelection(a) ?
                    (this.currentImage = b[b.length - 1] = a, !0) : !1
                }, lock: function (a, b) { if (this.locked) this.locked.level++; else if (a) this.locked = { level: 1 }; else { var e = null; if (b) e = !0; else { var f = new c(this.editor, !0); this.currentImage && this.currentImage.equalsContent(f) && (e = f) } this.locked = { update: e, level: 1 } } }, unlock: function () { if (this.locked && !--this.locked.level) { var a = this.locked.update; this.locked = null; if (!0 === a) this.update(); else if (a) { var b = new c(this.editor, !0); a.equalsContent(b) || this.update() } } }, addFilterRule: function (a) { this._filterRules.push(a) }
            };
            b.navigationKeyCodes = { 37: 1, 38: 1, 39: 1, 40: 1, 36: 1, 35: 1, 33: 1, 34: 1 }; b.keyGroups = { PRINTABLE: 0, FUNCTIONAL: 1 }; b.isNavigationKey = function (a) { return !!b.navigationKeyCodes[a] }; b.getKeyGroup = function (a) { var c = b.keyGroups; return e[a] ? c.FUNCTIONAL : c.PRINTABLE }; b.getOppositeKeyGroup = function (a) { var c = b.keyGroups; return a == c.FUNCTIONAL ? c.PRINTABLE : c.FUNCTIONAL }; b.ieFunctionalKeysBug = function (a) { return CKEDITOR.env.ie && b.getKeyGroup(a) == b.keyGroups.FUNCTIONAL }; var c = CKEDITOR.plugins.undo.Image = function (b, c) {
                this.editor =
                b; b.fire("beforeUndoImage"); var e = b.getSnapshot(); e && (this.contents = a(e, b.undoManager._filterRules)); c || (this.bookmarks = (e = e && b.getSelection()) && e.createBookmarks2(!0)); b.fire("afterUndoImage")
            }, m = /\b(?:href|src|name)="[^"]*?"/gi; c.prototype = {
                equalsContent: function (a) { var b = this.contents; a = a.contents; CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) && (b = b.replace(m, ""), a = a.replace(m, "")); return b != a ? !1 : !0 }, equalsSelection: function (a) {
                    var b = this.bookmarks; a = a.bookmarks; if (b || a) {
                        if (!b ||
                        !a || b.length != a.length) return !1; for (var c = 0; c < b.length; c++) { var e = b[c], f = a[c]; if (e.startOffset != f.startOffset || e.endOffset != f.endOffset || !CKEDITOR.tools.arrayCompare(e.start, f.start) || !CKEDITOR.tools.arrayCompare(e.end, f.end)) return !1 }
                    } return !0
                }
            }; var h = CKEDITOR.plugins.undo.NativeEditingHandler = function (a) { this.undoManager = a; this.ignoreInputEvent = !1; this.keyEventsStack = new l; this.lastKeydownImage = null }; h.prototype = {
                onKeydown: function (a) {
                    var e = a.data.getKey(); if (229 !== e) if (-1 < CKEDITOR.tools.indexOf(f,
                    a.data.getKeystroke())) a.data.preventDefault(); else if (this.keyEventsStack.cleanUp(a), a = this.undoManager, this.keyEventsStack.getLast(e) || this.keyEventsStack.push(e), this.lastKeydownImage = new c(a.editor), b.isNavigationKey(e) || this.undoManager.keyGroupChanged(e)) if (a.strokesRecorded[0] || a.strokesRecorded[1]) a.save(!1, this.lastKeydownImage, !1), a.resetType()
                }, onInput: function () {
                    if (this.ignoreInputEvent) this.ignoreInputEvent = !1; else {
                        var a = this.keyEventsStack.getLast(); a || (a = this.keyEventsStack.push(0));
                        this.keyEventsStack.increment(a.keyCode); this.keyEventsStack.getTotalInputs() >= this.undoManager.strokesLimit && (this.undoManager.type(a.keyCode, !0), this.keyEventsStack.resetInputs())
                    }
                }, onKeyup: function (a) { var e = this.undoManager; a = a.data.getKey(); var f = this.keyEventsStack.getTotalInputs(); this.keyEventsStack.remove(a); if (!(b.ieFunctionalKeysBug(a) && this.lastKeydownImage && this.lastKeydownImage.equalsContent(new c(e.editor, !0)))) if (0 < f) e.type(a); else if (b.isNavigationKey(a)) this.onNavigationKey(!0) },
                onNavigationKey: function (a) { var b = this.undoManager; !a && b.save(!0, null, !1) || b.updateSelection(new c(b.editor)); b.resetType() }, ignoreInputEventListener: function () { this.ignoreInputEvent = !0 }, activateInputEventListener: function () { this.ignoreInputEvent = !1 }, attachListeners: function () {
                    var a = this.undoManager.editor, c = a.editable(), e = this; c.attachListener(c, "keydown", function (a) { e.onKeydown(a); if (b.ieFunctionalKeysBug(a.data.getKey())) e.onInput() }, null, null, 999); c.attachListener(c, CKEDITOR.env.ie ? "keypress" :
                    "input", e.onInput, e, null, 999); c.attachListener(c, "keyup", e.onKeyup, e, null, 999); c.attachListener(c, "paste", e.ignoreInputEventListener, e, null, 999); c.attachListener(c, "drop", e.ignoreInputEventListener, e, null, 999); a.on("afterPaste", e.activateInputEventListener, e, null, 999); c.attachListener(c.isInline() ? c : a.document.getDocumentElement(), "click", function () { e.onNavigationKey() }, null, null, 999); c.attachListener(this.undoManager.editor, "blur", function () { e.keyEventsStack.remove(9) }, null, null, 999)
                }
            }; var l = CKEDITOR.plugins.undo.KeyEventsStack =
            function () { this.stack = [] }; l.prototype = {
                push: function (a) { a = this.stack.push({ keyCode: a, inputs: 0 }); return this.stack[a - 1] }, getLastIndex: function (a) { if ("number" != typeof a) return this.stack.length - 1; for (var b = this.stack.length; b--;) if (this.stack[b].keyCode == a) return b; return -1 }, getLast: function (a) { a = this.getLastIndex(a); return -1 != a ? this.stack[a] : null }, increment: function (a) { this.getLast(a).inputs++ }, remove: function (a) { a = this.getLastIndex(a); -1 != a && this.stack.splice(a, 1) }, resetInputs: function (a) {
                    if ("number" ==
                    typeof a) this.getLast(a).inputs = 0; else for (a = this.stack.length; a--;) this.stack[a].inputs = 0
                }, getTotalInputs: function () { for (var a = this.stack.length, b = 0; a--;) b += this.stack[a].inputs; return b }, cleanUp: function (a) { a = a.data.$; a.ctrlKey || a.metaKey || this.remove(17); a.shiftKey || this.remove(16); a.altKey || this.remove(18) }
            }
        })(); "use strict"; (function () {
            function a(a, b) {
                CKEDITOR.tools.extend(this, { editor: a, editable: a.editable(), doc: a.document, win: a.window }, b, !0); this.inline = this.editable.isInline(); this.inline ||
                (this.frame = this.win.getFrame()); this.target = this[this.inline ? "editable" : "doc"]
            } function f(a, b) { CKEDITOR.tools.extend(this, b, { editor: a }, !0) } function e(a, b) {
                var e = a.editable(); CKEDITOR.tools.extend(this, { editor: a, editable: e, inline: e.isInline(), doc: a.document, win: a.window, container: CKEDITOR.document.getBody(), winTop: CKEDITOR.document.getWindow() }, b, !0); this.hidden = {}; this.visible = {}; this.inline || (this.frame = this.win.getFrame()); this.queryViewport(); var f = CKEDITOR.tools.bind(this.queryViewport, this),
                h = CKEDITOR.tools.bind(this.hideVisible, this), l = CKEDITOR.tools.bind(this.removeAll, this); e.attachListener(this.winTop, "resize", f); e.attachListener(this.winTop, "scroll", f); e.attachListener(this.winTop, "resize", h); e.attachListener(this.win, "scroll", h); e.attachListener(this.inline ? e : this.frame, "mouseout", function (a) {
                    var b = a.data.$.clientX; a = a.data.$.clientY; this.queryViewport(); (b <= this.rect.left || b >= this.rect.right || a <= this.rect.top || a >= this.rect.bottom) && this.hideVisible(); (0 >= b || b >= this.winTopPane.width ||
                    0 >= a || a >= this.winTopPane.height) && this.hideVisible()
                }, this); e.attachListener(a, "resize", f); e.attachListener(a, "mode", l); a.on("destroy", l); this.lineTpl = (new CKEDITOR.template('\x3cdiv data-cke-lineutils-line\x3d"1" class\x3d"cke_reset_all" style\x3d"{lineStyle}"\x3e\x3cspan style\x3d"{tipLeftStyle}"\x3e\x26nbsp;\x3c/span\x3e\x3cspan style\x3d"{tipRightStyle}"\x3e\x26nbsp;\x3c/span\x3e\x3c/div\x3e')).output({
                    lineStyle: CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({}, m, this.lineStyle, !0)), tipLeftStyle: CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({},
                    c, { left: "0px", "border-left-color": "red", "border-width": "6px 0 6px 6px" }, this.tipCss, this.tipLeftStyle, !0)), tipRightStyle: CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({}, c, { right: "0px", "border-right-color": "red", "border-width": "6px 6px 6px 0" }, this.tipCss, this.tipRightStyle, !0))
                })
            } function b(a) { var b; if (b = a && a.type == CKEDITOR.NODE_ELEMENT) b = !(h[a.getComputedStyle("float")] || h[a.getAttribute("align")]); return b && !l[a.getComputedStyle("position")] } CKEDITOR.plugins.add("lineutils"); CKEDITOR.LINEUTILS_BEFORE =
            1; CKEDITOR.LINEUTILS_AFTER = 2; CKEDITOR.LINEUTILS_INSIDE = 4; a.prototype = {
                start: function (a) {
                    var b = this, c = this.editor, e = this.doc, f, h, l, m, u = CKEDITOR.tools.eventsBuffer(50, function () { c.readOnly || "wysiwyg" != c.mode || (b.relations = {}, (h = e.$.elementFromPoint(l, m)) && h.nodeType && (f = new CKEDITOR.dom.element(h), b.traverseSearch(f), isNaN(l + m) || b.pixelSearch(f, l, m), a && a(b.relations, l, m))) }); this.listener = this.editable.attachListener(this.target, "mousemove", function (a) { l = a.data.$.clientX; m = a.data.$.clientY; u.input() });
                    this.editable.attachListener(this.inline ? this.editable : this.frame, "mouseout", function () { u.reset() })
                }, stop: function () { this.listener && this.listener.removeListener() }, getRange: function () { var a = {}; a[CKEDITOR.LINEUTILS_BEFORE] = CKEDITOR.POSITION_BEFORE_START; a[CKEDITOR.LINEUTILS_AFTER] = CKEDITOR.POSITION_AFTER_END; a[CKEDITOR.LINEUTILS_INSIDE] = CKEDITOR.POSITION_AFTER_START; return function (b) { var c = this.editor.createRange(); c.moveToPosition(this.relations[b.uid].element, a[b.type]); return c } }(), store: function () {
                    function a(b,
                    d, c) { var e = b.getUniqueId(); e in c ? c[e].type |= d : c[e] = { element: b, type: d } } return function (c, e) { var f; e & CKEDITOR.LINEUTILS_AFTER && b(f = c.getNext()) && f.isVisible() && (a(f, CKEDITOR.LINEUTILS_BEFORE, this.relations), e ^= CKEDITOR.LINEUTILS_AFTER); e & CKEDITOR.LINEUTILS_INSIDE && b(f = c.getFirst()) && f.isVisible() && (a(f, CKEDITOR.LINEUTILS_BEFORE, this.relations), e ^= CKEDITOR.LINEUTILS_INSIDE); a(c, e, this.relations) }
                }(), traverseSearch: function (a) {
                    var c, e, f; do if (f = a.$["data-cke-expando"], !(f && f in this.relations)) {
                        if (a.equals(this.editable)) break;
                        if (b(a)) for (c in this.lookups) (e = this.lookups[c](a)) && this.store(a, e)
                    } while ((!a || a.type != CKEDITOR.NODE_ELEMENT || "true" != a.getAttribute("contenteditable")) && (a = a.getParent()))
                }, pixelSearch: function () {
                    function a(d, e, f, h, l) { for (var m = 0, u; l(f) ;) { f += h; if (25 == ++m) break; if (u = this.doc.$.elementFromPoint(e, f)) if (u == d) m = 0; else if (c(d, u) && (m = 0, b(u = new CKEDITOR.dom.element(u)))) return u } } var c = CKEDITOR.env.ie || CKEDITOR.env.webkit ? function (a, b) { return a.contains(b) } : function (a, b) {
                        return !!(a.compareDocumentPosition(b) &
                        16)
                    }; return function (c, e, f) { var h = this.win.getViewPaneSize().height, k = a.call(this, c.$, e, f, -1, function (a) { return 0 < a }); e = a.call(this, c.$, e, f, 1, function (a) { return a < h }); if (k) for (this.traverseSearch(k) ; !k.getParent().equals(c) ;) k = k.getParent(); if (e) for (this.traverseSearch(e) ; !e.getParent().equals(c) ;) e = e.getParent(); for (; k || e;) { k && (k = k.getNext(b)); if (!k || k.equals(e)) break; this.traverseSearch(k); e && (e = e.getPrevious(b)); if (!e || e.equals(k)) break; this.traverseSearch(e) } }
                }(), greedySearch: function () {
                    this.relations =
                    {}; for (var a = this.editable.getElementsByTag("*"), c = 0, e, f, h; e = a.getItem(c++) ;) if (!e.equals(this.editable) && e.type == CKEDITOR.NODE_ELEMENT && (e.hasAttribute("contenteditable") || !e.isReadOnly()) && b(e) && e.isVisible()) for (h in this.lookups) (f = this.lookups[h](e)) && this.store(e, f); return this.relations
                }
            }; f.prototype = {
                locate: function () {
                    function a(d, c) {
                        var e = d.element[c === CKEDITOR.LINEUTILS_BEFORE ? "getPrevious" : "getNext"](); return e && b(e) ? (d.siblingRect = e.getClientRect(), c == CKEDITOR.LINEUTILS_BEFORE ? (d.siblingRect.bottom +
                        d.elementRect.top) / 2 : (d.elementRect.bottom + d.siblingRect.top) / 2) : c == CKEDITOR.LINEUTILS_BEFORE ? d.elementRect.top : d.elementRect.bottom
                    } return function (b) {
                        var c; this.locations = {}; for (var e in b) c = b[e], c.elementRect = c.element.getClientRect(), c.type & CKEDITOR.LINEUTILS_BEFORE && this.store(e, CKEDITOR.LINEUTILS_BEFORE, a(c, CKEDITOR.LINEUTILS_BEFORE)), c.type & CKEDITOR.LINEUTILS_AFTER && this.store(e, CKEDITOR.LINEUTILS_AFTER, a(c, CKEDITOR.LINEUTILS_AFTER)), c.type & CKEDITOR.LINEUTILS_INSIDE && this.store(e, CKEDITOR.LINEUTILS_INSIDE,
                        (c.elementRect.top + c.elementRect.bottom) / 2); return this.locations
                    }
                }(), sort: function () { var a, b, c, e; return function (f, h) { a = this.locations; b = []; for (var l in a) for (var m in a[l]) if (c = Math.abs(f - a[l][m]), b.length) { for (e = 0; e < b.length; e++) if (c < b[e].dist) { b.splice(e, 0, { uid: +l, type: m, dist: c }); break } e == b.length && b.push({ uid: +l, type: m, dist: c }) } else b.push({ uid: +l, type: m, dist: c }); return "undefined" != typeof h ? b.slice(0, h) : b } }(), store: function (a, b, c) {
                    this.locations[a] || (this.locations[a] = {}); this.locations[a][b] =
                    c
                }
            }; var c = { display: "block", width: "0px", height: "0px", "border-color": "transparent", "border-style": "solid", position: "absolute", top: "-6px" }, m = { height: "0px", "border-top": "1px dashed red", position: "absolute", "z-index": 9999 }; e.prototype = {
                removeAll: function () { for (var a in this.hidden) this.hidden[a].remove(), delete this.hidden[a]; for (a in this.visible) this.visible[a].remove(), delete this.visible[a] }, hideLine: function (a) { var b = a.getUniqueId(); a.hide(); this.hidden[b] = a; delete this.visible[b] }, showLine: function (a) {
                    var b =
                    a.getUniqueId(); a.show(); this.visible[b] = a; delete this.hidden[b]
                }, hideVisible: function () { for (var a in this.visible) this.hideLine(this.visible[a]) }, placeLine: function (a, b) {
                    var c, e, f; if (c = this.getStyle(a.uid, a.type)) {
                        for (f in this.visible) if (this.visible[f].getCustomData("hash") !== this.hash) { e = this.visible[f]; break } if (!e) for (f in this.hidden) if (this.hidden[f].getCustomData("hash") !== this.hash) { this.showLine(e = this.hidden[f]); break } e || this.showLine(e = this.addLine()); e.setCustomData("hash", this.hash);
                        this.visible[e.getUniqueId()] = e; e.setStyles(c); b && b(e)
                    }
                }, getStyle: function (a, b) {
                    var c = this.relations[a], e = this.locations[a][b], f = {}; f.width = c.siblingRect ? Math.max(c.siblingRect.width, c.elementRect.width) : c.elementRect.width; f.top = this.inline ? e + this.winTopScroll.y - this.rect.relativeY : this.rect.top + this.winTopScroll.y + e; if (f.top - this.winTopScroll.y < this.rect.top || f.top - this.winTopScroll.y > this.rect.bottom) return !1; this.inline ? f.left = c.elementRect.left - this.rect.relativeX : (0 < c.elementRect.left ? f.left =
                    this.rect.left + c.elementRect.left : (f.width += c.elementRect.left, f.left = this.rect.left), 0 < (c = f.left + f.width - (this.rect.left + this.winPane.width)) && (f.width -= c)); f.left += this.winTopScroll.x; for (var h in f) f[h] = CKEDITOR.tools.cssLength(f[h]); return f
                }, addLine: function () { var a = CKEDITOR.dom.element.createFromHtml(this.lineTpl); a.appendTo(this.container); return a }, prepare: function (a, b) { this.relations = a; this.locations = b; this.hash = Math.random() }, cleanup: function () {
                    var a, b; for (b in this.visible) a = this.visible[b],
                    a.getCustomData("hash") !== this.hash && this.hideLine(a)
                }, queryViewport: function () { this.winPane = this.win.getViewPaneSize(); this.winTopScroll = this.winTop.getScrollPosition(); this.winTopPane = this.winTop.getViewPaneSize(); this.rect = this.getClientRect(this.inline ? this.editable : this.frame) }, getClientRect: function (a) {
                    a = a.getClientRect(); var b = this.container.getDocumentPosition(), c = this.container.getComputedStyle("position"); a.relativeX = a.relativeY = 0; "static" != c && (a.relativeY = b.y, a.relativeX = b.x, a.top -= a.relativeY,
                    a.bottom -= a.relativeY, a.left -= a.relativeX, a.right -= a.relativeX); return a
                }
            }; var h = { left: 1, right: 1, center: 1 }, l = { absolute: 1, fixed: 1 }; CKEDITOR.plugins.lineutils = { finder: a, locator: f, liner: e }
        })(); (function () {
            function a(a) { return a.getName && !a.hasAttribute("data-cke-temp") } CKEDITOR.plugins.add("widgetselection", {
                init: function (a) {
                    if (CKEDITOR.env.webkit) {
                        var e = CKEDITOR.plugins.widgetselection; a.on("contentDom", function (a) {
                            a = a.editor; var c = a.editable(); c.attachListener(c, "keydown", function (a) {
                                a.data.getKeystroke() ==
                                CKEDITOR.CTRL + 65 && CKEDITOR.tools.setTimeout(function () { e.addFillers(c) || e.removeFillers(c) }, 0)
                            }, null, null, -1); a.on("selectionCheck", function (a) { e.removeFillers(a.editor.editable()) }); a.on("paste", function (a) { a.data.dataValue = e.cleanPasteData(a.data.dataValue) }); "selectall" in a.plugins && e.addSelectAllIntegration(a)
                        })
                    }
                }
            }); CKEDITOR.plugins.widgetselection = {
                startFiller: null, endFiller: null, fillerAttribute: "data-cke-filler-webkit", fillerContent: "\x26nbsp;", fillerTagName: "div", addFillers: function (f) {
                    var e =
                    f.editor; if (!this.isWholeContentSelected(f) && 0 < f.getChildCount()) { var b = f.getFirst(a), c = f.getLast(a); b && b.type == CKEDITOR.NODE_ELEMENT && !b.isEditable() && (this.startFiller = this.createFiller(), f.append(this.startFiller, 1)); c && c.type == CKEDITOR.NODE_ELEMENT && !c.isEditable() && (this.endFiller = this.createFiller(!0), f.append(this.endFiller, 0)); if (this.hasFiller(f)) return e = e.createRange(), e.selectNodeContents(f), e.select(), !0 } return !1
                }, removeFillers: function (a) {
                    if (this.hasFiller(a) && !this.isWholeContentSelected(a)) {
                        var e =
                        a.findOne(this.fillerTagName + "[" + this.fillerAttribute + "\x3dstart]"), b = a.findOne(this.fillerTagName + "[" + this.fillerAttribute + "\x3dend]"); this.startFiller && e && this.startFiller.equals(e) ? this.removeFiller(this.startFiller, a) : this.startFiller = e; this.endFiller && b && this.endFiller.equals(b) ? this.removeFiller(this.endFiller, a) : this.endFiller = b
                    }
                }, cleanPasteData: function (a) { a && a.length && (a = a.replace(this.createFillerRegex(), "").replace(this.createFillerRegex(!0), "")); return a }, isWholeContentSelected: function (a) {
                    var e =
                    a.editor.getSelection().getRanges()[0]; return !e || e && e.collapsed ? !1 : (e = e.clone(), e.enlarge(CKEDITOR.ENLARGE_ELEMENT), !!(e && a && e.startContainer && e.endContainer && 0 === e.startOffset && e.endOffset === a.getChildCount() && e.startContainer.equals(a) && e.endContainer.equals(a)))
                }, hasFiller: function (a) { return 0 < a.find(this.fillerTagName + "[" + this.fillerAttribute + "]").count() }, createFiller: function (a) {
                    var e = new CKEDITOR.dom.element(this.fillerTagName); e.setHtml(this.fillerContent); e.setAttribute(this.fillerAttribute,
                    a ? "end" : "start"); e.setAttribute("data-cke-temp", 1); e.setStyles({ display: "block", width: 0, height: 0, padding: 0, border: 0, margin: 0, position: "absolute", top: 0, left: "-9999px", opacity: 0, overflow: "hidden" }); return e
                }, removeFiller: function (a, e) {
                    if (a) {
                        var b = e.editor, c = e.editor.getSelection().getRanges()[0].startPath(), m = b.createRange(), h, l; c.contains(a) && (h = a.getHtml(), l = !0); c = "start" == a.getAttribute(this.fillerAttribute); a.remove(); h && 0 < h.length && h != this.fillerContent ? (e.insertHtmlIntoRange(h, b.getSelection().getRanges()[0]),
                        m.setStartAt(e.getChild(e.getChildCount() - 1), CKEDITOR.POSITION_BEFORE_END), b.getSelection().selectRanges([m])) : l && (c ? m.setStartAt(e.getFirst().getNext(), CKEDITOR.POSITION_AFTER_START) : m.setEndAt(e.getLast().getPrevious(), CKEDITOR.POSITION_BEFORE_END), e.editor.getSelection().selectRanges([m]))
                    }
                }, createFillerRegex: function (a) { var e = this.createFiller(a).getOuterHtml().replace(/style="[^"]*"/gi, 'style\x3d"[^"]*"').replace(/>[^<]*</gi, "\x3e[^\x3c]*\x3c"); return new RegExp((a ? "" : "^") + e + (a ? "$" : "")) }, addSelectAllIntegration: function (a) {
                    var e =
                    this; a.editable().attachListener(a, "beforeCommandExec", function (b) { var c = a.editable(); "selectAll" == b.data.name && c && e.addFillers(c) }, null, null, 9999)
                }
            }
        })(); "use strict"; (function () {
            function a(a) {
                this.editor = a; this.registered = {}; this.instances = {}; this.selected = []; this.widgetHoldingFocusedEditable = this.focused = null; this._ = { nextId: 0, upcasts: [], upcastCallbacks: [], filters: {} }; G(this); D(this); this.on("checkWidgets", h); this.editor.on("contentDomInvalidated", this.checkWidgets, this); A(this); v(this); y(this);
                B(this); z(this)
            } function f(a, b, c, d, e) {
                var g = a.editor; CKEDITOR.tools.extend(this, d, { editor: g, id: b, inline: "span" == c.getParent().getName(), element: c, data: CKEDITOR.tools.extend({}, "function" == typeof d.defaults ? d.defaults() : d.defaults), dataReady: !1, inited: !1, ready: !1, edit: f.prototype.edit, focusedEditable: null, definition: d, repository: a, draggable: !1 !== d.draggable, _: { downcastFn: d.downcast && "string" == typeof d.downcast ? d.downcasts[d.downcast] : d.downcast } }, !0); a.fire("instanceCreated", this); Q(this, d); this.init &&
                this.init(); this.inited = !0; (a = this.element.data("cke-widget-data")) && this.setData(JSON.parse(decodeURIComponent(a))); e && this.setData(e); this.data.classes || this.setData("classes", this.getClasses()); this.dataReady = !0; da(this); this.fire("data", this.data); this.isInited() && g.editable().contains(this.wrapper) && (this.ready = !0, this.fire("ready"))
            } function e(a, b, c) {
                CKEDITOR.dom.element.call(this, b.$); this.editor = a; this._ = {}; b = this.filter = c.filter; CKEDITOR.dtd[this.getName()].p ? (this.enterMode = b ? b.getAllowedEnterMode(a.enterMode) :
                a.enterMode, this.shiftEnterMode = b ? b.getAllowedEnterMode(a.shiftEnterMode, !0) : a.shiftEnterMode) : this.enterMode = this.shiftEnterMode = CKEDITOR.ENTER_BR
            } function b(a, b) {
                a.addCommand(b.name, {
                    exec: function (a, c) {
                        function d() { a.widgets.finalizeCreation(h) } var e = a.widgets.focused; if (e && e.name == b.name) e.edit(); else if (b.insert) b.insert({ editor: a, commandData: c }); else if (b.template) {
                            var e = "function" == typeof b.defaults ? b.defaults() : b.defaults, e = CKEDITOR.dom.element.createFromHtml(b.template.output(e), a.document),
                            f, g = a.widgets.wrapElement(e, b.name), h = new CKEDITOR.dom.documentFragment(g.getDocument()); h.append(g); (f = a.widgets.initOn(e, b, c && c.startupData)) ? (e = f.once("edit", function (b) { if (b.data.dialog) f.once("dialog", function (b) { b = b.data; var c, e; c = b.once("ok", d, null, null, 20); e = b.once("cancel", function (b) { b.data && !1 === b.data.hide || a.widgets.destroy(f, !0) }); b.once("hide", function () { c.removeListener(); e.removeListener() }) }); else d() }, null, null, 999), f.edit(), e.removeListener()) : d()
                        }
                    }, allowedContent: b.allowedContent,
                    requiredContent: b.requiredContent, contentForms: b.contentForms, contentTransformations: b.contentTransformations
                })
            } function c(a, b) {
                function c(a, d) { var e = b.upcast.split(","), f, g; for (g = 0; g < e.length; g++) if (f = e[g], f === a.name) return b.upcasts[f].call(this, a, d); return !1 } function d(b, c, e) { var f = CKEDITOR.tools.getIndex(a._.upcasts, function (a) { return a[2] > e }); 0 > f && (f = a._.upcasts.length); a._.upcasts.splice(f, 0, [CKEDITOR.tools.bind(b, c), c.name, e]) } var e = b.upcast, f = b.upcastPriority || 10; e && ("string" == typeof e ? d(c,
                b, f) : d(e, b, f))
            } function m(a, b) { a.focused = null; if (b.isInited()) { var c = b.editor.checkDirty(); a.fire("widgetBlurred", { widget: b }); b.setFocused(!1); !c && b.editor.resetDirty() } } function h(a) {
                a = a.data; if ("wysiwyg" == this.editor.mode) {
                    var b = this.editor.editable(), c = this.instances, d, e, g, h; if (b) {
                        for (d in c) c[d].isReady() && !b.contains(c[d].wrapper) && this.destroy(c[d], !0); if (a && a.initOnlyNew) c = this.initOnAll(); else {
                            var k = b.find(".cke_widget_wrapper"), c = []; d = 0; for (e = k.count() ; d < e; d++) {
                                g = k.getItem(d); if (h = !this.getByElement(g,
                                !0)) { a: { h = p; for (var l = g; l = l.getParent() ;) if (h(l)) { h = !0; break a } h = !1 } h = !h } h && b.contains(g) && (g.addClass("cke_widget_new"), c.push(this.initOn(g.getFirst(f.isDomWidgetElement))))
                            }
                        } a && a.focusInited && 1 == c.length && c[0].focus()
                    }
                }
            } function l(a) {
                if ("undefined" != typeof a.attributes && a.attributes["data-widget"]) {
                    var b = d(a), c = k(a), e = !1; b && b.value && b.value.match(/^\s/g) && (b.parent.attributes["data-cke-white-space-first"] = 1, b.value = b.value.replace(/^\s/g, "\x26nbsp;"), e = !0); c && c.value && c.value.match(/\s$/g) && (c.parent.attributes["data-cke-white-space-last"] =
                    1, c.value = c.value.replace(/\s$/g, "\x26nbsp;"), e = !0); e && (a.attributes["data-cke-widget-white-space"] = 1)
                }
            } function d(a) { return a.find(function (a) { return 3 === a.type }, !0).shift() } function k(a) { return a.find(function (a) { return 3 === a.type }, !0).pop() } function g(a, b, c) {
                if (!c.allowedContent && !c.disallowedContent) return null; var d = this._.filters[a]; d || (this._.filters[a] = d = {}); a = d[b]; a || (a = c.allowedContent ? new CKEDITOR.filter(c.allowedContent) : this.editor.filter.clone(), d[b] = a, c.disallowedContent && a.disallow(c.disallowedContent));
                return a
            } function n(a) {
                var b = [], c = a._.upcasts, d = a._.upcastCallbacks; return {
                    toBeWrapped: b, iterator: function (a) {
                        var e, g, h, k, l; if ("data-cke-widget-wrapper" in a.attributes) return (a = a.getFirst(f.isParserWidgetElement)) && b.push([a]), !1; if ("data-widget" in a.attributes) return b.push([a]), !1; if (l = c.length) {
                            if (a.attributes["data-cke-widget-upcasted"]) return !1; k = 0; for (e = d.length; k < e; ++k) if (!1 === d[k](a)) return; for (k = 0; k < l; ++k) if (e = c[k], h = {}, g = e[0](a, h)) return g instanceof CKEDITOR.htmlParser.element && (a = g), a.attributes["data-cke-widget-data"] =
                            encodeURIComponent(JSON.stringify(h)), a.attributes["data-cke-widget-upcasted"] = 1, b.push([a, e[1]]), !1
                        }
                    }
                }
            } function r(a, b) { return { tabindex: -1, contenteditable: "false", "data-cke-widget-wrapper": 1, "data-cke-filter": "off", "class": "cke_widget_wrapper cke_widget_new cke_widget_" + (a ? "inline" : "block") + (b ? " cke_widget_" + b : "") } } function w(a, b, c) {
                if (a.type == CKEDITOR.NODE_ELEMENT) {
                    var d = CKEDITOR.dtd[a.name]; if (d && !d[c.name]) {
                        var d = a.split(b), e = a.parent; b = d.getIndex(); a.children.length || (--b, a.remove()); d.children.length ||
                        d.remove(); return w(e, b, c)
                    }
                } a.add(c, b)
            } function q(a, b) { return "boolean" == typeof a.inline ? a.inline : !!CKEDITOR.dtd.$inline[b] } function p(a) { return a.hasAttribute("data-cke-temp") } function u(a, b, c, d) {
                var e = a.editor; e.fire("lockSnapshot"); c ? (d = c.data("cke-widget-editable"), d = b.editables[d], a.widgetHoldingFocusedEditable = b, b.focusedEditable = d, c.addClass("cke_widget_editable_focused"), d.filter && e.setActiveFilter(d.filter), e.setActiveEnterMode(d.enterMode, d.shiftEnterMode)) : (d || b.focusedEditable.removeClass("cke_widget_editable_focused"),
                b.focusedEditable = null, a.widgetHoldingFocusedEditable = null, e.setActiveFilter(null), e.setActiveEnterMode(null, null)); e.fire("unlockSnapshot")
            } function x(a) { a.contextMenu && a.contextMenu.addListener(function (b) { if (b = a.widgets.getByElement(b, !0)) return b.fire("contextMenu", {}) }) } function t(a, b) { return CKEDITOR.tools.trim(b) } function B(a) {
                var b = a.editor, c = CKEDITOR.plugins.lineutils; b.on("dragstart", function (c) {
                    var d = c.data.target; f.isDomDragHandler(d) && (d = a.getByElement(d), c.data.dataTransfer.setData("cke/widget-id",
                    d.id), b.focus(), d.focus())
                }); b.on("drop", function (c) {
                    var d = c.data.dataTransfer, e = d.getData("cke/widget-id"), f = d.getTransferType(b), d = b.createRange(); if ("" !== e && f === CKEDITOR.DATA_TRANSFER_CROSS_EDITORS) c.cancel(); else if (f == CKEDITOR.DATA_TRANSFER_INTERNAL) if ("" === e && 0 < b.widgets.selected.length) c.data.dataTransfer.setData("text/html", L(b)); else if (e = a.instances[e]) d.setStartBefore(e.wrapper), d.setEndAfter(e.wrapper), c.data.dragRange = d, delete CKEDITOR.plugins.clipboard.dragStartContainerChildCount, delete CKEDITOR.plugins.clipboard.dragEndContainerChildCount,
                    c.data.dataTransfer.setData("text/html", e.getClipboardHtml()), b.widgets.destroy(e, !0)
                }); b.on("contentDom", function () {
                    var d = b.editable(); CKEDITOR.tools.extend(a, {
                        finder: new c.finder(b, {
                            lookups: {
                                "default": function (b) {
                                    if (!b.is(CKEDITOR.dtd.$listItem) && b.is(CKEDITOR.dtd.$block) && !f.isDomNestedEditable(b) && !a._.draggedWidget.wrapper.contains(b)) {
                                        var c = f.getNestedEditable(d, b); if (c) {
                                            b = a._.draggedWidget; if (a.getByElement(c) == b) return; c = CKEDITOR.filter.instances[c.data("cke-filter")]; b = b.requiredContent;
                                            if (c && b && !c.check(b)) return
                                        } return CKEDITOR.LINEUTILS_BEFORE | CKEDITOR.LINEUTILS_AFTER
                                    }
                                }
                            }
                        }), locator: new c.locator(b), liner: new c.liner(b, { lineStyle: { cursor: "move !important", "border-top-color": "#666" }, tipLeftStyle: { "border-left-color": "#666" }, tipRightStyle: { "border-right-color": "#666" } })
                    }, !0)
                })
            } function v(a) {
                var b = a.editor; b.on("contentDom", function () {
                    var c = b.editable(), d = c.isInline() ? c : b.document, e, g; c.attachListener(d, "mousedown", function (c) {
                        var d = c.data.getTarget(); e = d instanceof CKEDITOR.dom.element ?
                        a.getByElement(d) : null; g = 0; e && (e.inline && d.type == CKEDITOR.NODE_ELEMENT && d.hasAttribute("data-cke-widget-drag-handler") ? (g = 1, a.focused != e && b.getSelection().removeAllRanges()) : f.getNestedEditable(e.wrapper, d) ? e = null : (c.data.preventDefault(), CKEDITOR.env.ie || e.focus()))
                    }); c.attachListener(d, "mouseup", function () { g && e && e.wrapper && (g = 0, e.focus()) }); CKEDITOR.env.ie && c.attachListener(d, "mouseup", function () { setTimeout(function () { e && e.wrapper && c.contains(e.wrapper) && (e.focus(), e = null) }) })
                }); b.on("doubleclick",
                function (b) { var c = a.getByElement(b.data.element); if (c && !f.getNestedEditable(c.wrapper, b.data.element)) return c.fire("doubleclick", { element: b.data.element }) }, null, null, 1)
            } function y(a) {
                a.editor.on("key", function (b) {
                    var c = a.focused, d = a.widgetHoldingFocusedEditable, e; c ? e = c.fire("key", { keyCode: b.data.keyCode }) : d && (c = b.data.keyCode, b = d.focusedEditable, c == CKEDITOR.CTRL + 65 ? (c = b.getBogus(), d = d.editor.createRange(), d.selectNodeContents(b), c && d.setEndAt(c, CKEDITOR.POSITION_BEFORE_START), d.select(), e = !1) : 8 ==
                    c || 46 == c ? (e = d.editor.getSelection().getRanges(), d = e[0], e = !(1 == e.length && d.collapsed && d.checkBoundaryOfElement(b, CKEDITOR[8 == c ? "START" : "END"]))) : e = void 0); return e
                }, null, null, 1)
            } function z(a) { function b(d) { 1 > a.selected.length || M(c, "cut" === d.name) } var c = a.editor; c.on("contentDom", function () { var a = c.editable(); a.attachListener(a, "copy", b); a.attachListener(a, "cut", b) }) } function A(a) {
                function b() {
                    var a = e.getSelection(); if (a && (a = a.getRanges()[0]) && !a.collapsed) {
                        var d = c(a.startContainer), f = c(a.endContainer);
                        !d && f ? (a.setEndBefore(f.wrapper), a.select()) : d && !f && (a.setStartAfter(d.wrapper), a.select())
                    }
                } function c(a) { return a ? a.type == CKEDITOR.NODE_TEXT ? c(a.getParent()) : e.widgets.getByElement(a) : null } function d() { a.fire("checkSelection") } var e = a.editor; e.on("selectionCheck", d); e.on("contentDom", function () { e.editable().attachListener(e, "key", function () { setTimeout(d, 10) }) }); if (!CKEDITOR.env.ie) a.on("checkSelection", b); a.on("checkSelection", a.checkSelection, a); e.on("selectionChange", function (b) {
                    var c = (b = f.getNestedEditable(e.editable(),
                    b.data.selection.getStartElement())) && a.getByElement(b), d = a.widgetHoldingFocusedEditable; d ? d === c && d.focusedEditable.equals(b) || (u(a, d, null), c && b && u(a, c, b)) : c && b && u(a, c, b)
                }); e.on("dataReady", function () { E(a).commit() }); e.on("blur", function () { var b; (b = a.focused) && m(a, b); (b = a.widgetHoldingFocusedEditable) && u(a, b, null) })
            } function D(a) {
                var b = a.editor, c = {}; b.on("toDataFormat", function (b) {
                    var e = CKEDITOR.tools.getNextNumber(), g = []; b.data.downcastingSessionId = e; c[e] = g; b.data.dataValue.forEach(function (b) {
                        var c =
                        b.attributes, e; if ("data-cke-widget-white-space" in c) { e = d(b); var h = k(b); e.parent.attributes["data-cke-white-space-first"] && (e.value = e.value.replace(/^&nbsp;/g, " ")); h.parent.attributes["data-cke-white-space-last"] && (h.value = h.value.replace(/&nbsp;$/g, " ")) } if ("data-cke-widget-id" in c) { if (c = a.instances[c["data-cke-widget-id"]]) e = b.getFirst(f.isParserWidgetElement), g.push({ wrapper: b, element: e, widget: c, editables: {} }), "1" != e.attributes["data-cke-widget-keep-attr"] && delete e.attributes["data-widget"] } else if ("data-cke-widget-editable" in
                        c) return 0 < g.length && (g[g.length - 1].editables[c["data-cke-widget-editable"]] = b), !1
                    }, CKEDITOR.NODE_ELEMENT, !0)
                }, null, null, 8); b.on("toDataFormat", function (a) {
                    if (a.data.downcastingSessionId) for (var b = c[a.data.downcastingSessionId], d, e, f, g, h, k; d = b.shift() ;) {
                        e = d.widget; f = d.element; g = e._.downcastFn && e._.downcastFn.call(e, f); a.data.widgetsCopy && e.getClipboardHtml && (g = CKEDITOR.htmlParser.fragment.fromHtml(e.getClipboardHtml()), g = g.children[0]); for (k in d.editables) h = d.editables[k], delete h.attributes.contenteditable,
                        h.setHtml(e.editables[k].getData()); g || (g = f); d.wrapper.replaceWith(g)
                    }
                }, null, null, 13); b.on("contentDomUnload", function () { a.destroyAll(!0) })
            } function G(a) {
                var b = a.editor, c, d; b.on("toHtml", function (b) {
                    var d = n(a), e; for (b.data.dataValue.forEach(d.iterator, CKEDITOR.NODE_ELEMENT, !0) ; e = d.toBeWrapped.pop() ;) { var g = e[0], h = g.parent; h.type == CKEDITOR.NODE_ELEMENT && h.attributes["data-cke-widget-wrapper"] && h.replaceWith(g); a.wrapElement(e[0], e[1]) } c = b.data.protectedWhitespaces ? 3 == b.data.dataValue.children.length &&
                    f.isParserWidgetWrapper(b.data.dataValue.children[1]) : 1 == b.data.dataValue.children.length && f.isParserWidgetWrapper(b.data.dataValue.children[0])
                }, null, null, 8); b.on("dataReady", function () { if (d) for (var c = b.editable().find(".cke_widget_wrapper"), e, g, h = 0, k = c.count() ; h < k; ++h) e = c.getItem(h), g = e.getFirst(f.isDomWidgetElement), g.type == CKEDITOR.NODE_ELEMENT && g.data("widget") ? (g.replace(e), a.wrapElement(g)) : e.remove(); d = 0; a.destroyAll(!0); a.initOnAll() }); b.on("loadSnapshot", function (b) {
                    /data-cke-widget/.test(b.data) &&
                    (d = 1); a.destroyAll(!0)
                }, null, null, 9); b.on("paste", function (a) { a = a.data; a.dataValue = a.dataValue.replace(P, t); a.range && (a = f.getNestedEditable(b.editable(), a.range.startContainer)) && (a = CKEDITOR.filter.instances[a.data("cke-filter")]) && b.setActiveFilter(a) }); b.on("afterInsertHtml", function (d) { d.data.intoRange ? a.checkWidgets({ initOnlyNew: !0 }) : (b.fire("lockSnapshot"), a.checkWidgets({ initOnlyNew: !0, focusInited: c }), b.fire("unlockSnapshot")) })
            } function E(a) {
                var b = a.selected, c = [], d = b.slice(0), e = null; return {
                    select: function (a) {
                        0 >
                        CKEDITOR.tools.indexOf(b, a) && c.push(a); a = CKEDITOR.tools.indexOf(d, a); 0 <= a && d.splice(a, 1); return this
                    }, focus: function (a) { e = a; return this }, commit: function () {
                        var f = a.focused !== e, g, h; a.editor.fire("lockSnapshot"); for (f && (g = a.focused) && m(a, g) ; g = d.pop() ;) b.splice(CKEDITOR.tools.indexOf(b, g), 1), g.isInited() && (h = g.editor.checkDirty(), g.setSelected(!1), !h && g.editor.resetDirty()); f && e && (h = a.editor.checkDirty(), a.focused = e, a.fire("widgetFocused", { widget: e }), e.setFocused(!0), !h && a.editor.resetDirty()); for (; g =
                        c.pop() ;) b.push(g), g.setSelected(!0); a.editor.fire("unlockSnapshot")
                    }
                }
            } function J(a) { a && a.addFilterRule(function (a) { return a.replace(/\s*cke_widget_selected/g, "").replace(/\s*cke_widget_focused/g, "").replace(/<span[^>]*cke_widget_drag_handler_container[^>]*.*?<\/span>/gmi, "") }) } function H(a, b, c) { var d = 0; b = I(b); var e = a.data.classes || {}, f; if (b) { for (e = CKEDITOR.tools.clone(e) ; f = b.pop() ;) c ? e[f] || (d = e[f] = 1) : e[f] && (delete e[f], d = 1); d && a.setData("classes", e) } } function F(a) { a.cancel() } function M(a, b) {
                var c =
                a.widgets.focused, d, e, f; R.hasCopyBin(a) || (e = new R(a, { beforeDestroy: function () { !b && c && c.focus(); f && a.getSelection().selectBookmarks(f); d && CKEDITOR.plugins.widgetselection.addFillers(a.editable()) }, afterDestroy: function () { b && !a.readOnly && (c ? a.widgets.del(c) : a.extractSelectedHtml(), a.fire("saveSnapshot")) } }), c || (d = CKEDITOR.env.webkit && CKEDITOR.plugins.widgetselection.isWholeContentSelected(a.editable()), f = a.getSelection().createBookmarks(!0)), e.handle(L(a)))
            } function I(a) {
                return (a = (a = a.getDefinition().attributes) &&
                a["class"]) ? a.split(/\s+/) : null
            } function K() { var a = CKEDITOR.document.getActive(), b = this.editor, c = b.editable(); (c.isInline() ? c : b.document.getWindow().getFrame()).equals(a) && b.focusManager.focus(c) } function C() { CKEDITOR.env.gecko && this.editor.unlockSelection(); CKEDITOR.env.webkit || (this.editor.forceNextSelectionCheck(), this.editor.selectionChange(1)) } function L(a) {
                var b = a.getSelectedHtml(!0); if (a.widgets.focused) return a.widgets.focused.getClipboardHtml(); a.once("toDataFormat", function (a) {
                    a.data.widgetsCopy =
                    !0
                }, null, null, -1); return a.dataProcessor.toDataFormat(b)
            } function Q(a, b) {
                O(a); X(a); T(a); Y(a); U(a); ba(a); V(a); if (CKEDITOR.env.ie && 9 > CKEDITOR.env.version) a.wrapper.on("dragstart", function (b) { var c = b.data.getTarget(); f.getNestedEditable(a, c) || a.inline && f.isDomDragHandler(c) || b.data.preventDefault() }); a.wrapper.removeClass("cke_widget_new"); a.element.addClass("cke_widget_element"); a.on("key", function (b) {
                    b = b.data.keyCode; if (13 == b) a.edit(); else {
                        if (b == CKEDITOR.CTRL + 67 || b == CKEDITOR.CTRL + 88) {
                            M(a.editor, b ==
                            CKEDITOR.CTRL + 88); return
                        } if (b in S || CKEDITOR.CTRL & b || CKEDITOR.ALT & b) return
                    } return !1
                }, null, null, 999); a.on("doubleclick", function (b) { a.edit() && b.cancel() }); if (b.data) a.on("data", b.data); if (b.edit) a.on("edit", b.edit)
            } function O(a) { (a.wrapper = a.element.getParent()).setAttribute("data-cke-widget-id", a.id) } function X(a, b) {
                a.partSelectors || (a.partSelectors = a.parts); if (a.parts) {
                    var c = {}, d, e; for (e in a.partSelectors) b || !a.parts[e] || "string" == typeof a.parts[e] ? (d = a.wrapper.findOne(a.partSelectors[e]), c[e] =
                    d) : c[e] = a.parts[e]; a.parts = c
                }
            } function T(a) { var b = a.editables, c, d; a.editables = {}; if (a.editables) for (c in b) d = b[c], a.initEditable(c, "string" == typeof d ? { selector: d } : d) } function Y(a) {
                if (!0 === a.mask) ha(a); else if (a.mask) {
                    var b = new CKEDITOR.tools.buffers.throttle(250, W, a), c = CKEDITOR.env.gecko ? 300 : 0, d, e; a.on("focus", function () { b.input(); d = a.editor.on("change", b.input); e = a.on("blur", function () { d.removeListener(); e.removeListener() }) }); a.editor.on("instanceReady", function () {
                        setTimeout(function () { b.input() },
                        c)
                    }); a.editor.on("mode", function () { setTimeout(function () { b.input() }, c) }); if (CKEDITOR.env.gecko) { var f = a.element.find("img"); CKEDITOR.tools.array.forEach(f.toArray(), function (a) { a.on("load", function () { b.input() }) }) } for (var g in a.editables) a.editables[g].on("focus", function () { a.editor.on("change", b.input); e && e.removeListener() }), a.editables[g].on("blur", function () { a.editor.removeListener("change", b.input) }); b.input()
                }
            } function ha(a) {
                var b = a.wrapper.findOne(".cke_widget_mask"); b || (b = new CKEDITOR.dom.element("img",
                a.editor.document), b.setAttributes({ src: CKEDITOR.tools.transparentImageData, "class": "cke_reset cke_widget_mask" }), a.wrapper.append(b)); a.mask = b
            } function W() {
                if (this.wrapper) {
                    this.maskPart = this.maskPart || this.mask; var a = this.parts[this.maskPart], b; if (a && "string" != typeof a) {
                        b = this.wrapper.findOne(".cke_widget_partial_mask"); b || (b = new CKEDITOR.dom.element("img", this.editor.document), b.setAttributes({ src: CKEDITOR.tools.transparentImageData, "class": "cke_reset cke_widget_partial_mask" }), this.wrapper.append(b));
                        this.mask = b; var c = b.$, d = a.$, e = !(c.offsetTop == d.offsetTop && c.offsetLeft == d.offsetLeft); if (c.offsetWidth != d.offsetWidth || c.offsetHeight != d.offsetHeight || e) c = a.getParent(), d = CKEDITOR.plugins.widget.isDomWidget(c), b.setStyles({ top: a.$.offsetTop + (d ? 0 : c.$.offsetTop) + "px", left: a.$.offsetLeft + (d ? 0 : c.$.offsetLeft) + "px", width: a.$.offsetWidth + "px", height: a.$.offsetHeight + "px" })
                    }
                }
            } function U(a) {
                if (a.draggable) {
                    var b = a.editor, c = a.wrapper.getLast(f.isDomDragHandlerContainer), d; c ? d = c.findOne("img") : (c = new CKEDITOR.dom.element("span",
                    b.document), c.setAttributes({ "class": "cke_reset cke_widget_drag_handler_container", style: "background:rgba(220,220,220,0.5);background-image:url(" + b.plugins.widget.path + "images/handle.png);display:none;" }), d = new CKEDITOR.dom.element("img", b.document), d.setAttributes({ "class": "cke_reset cke_widget_drag_handler", "data-cke-widget-drag-handler": "1", src: CKEDITOR.tools.transparentImageData, width: 15, title: b.lang.widget.move, height: 15, role: "presentation" }), a.inline && d.setAttribute("draggable", "true"), c.append(d),
                    a.wrapper.append(c)); a.wrapper.on("dragover", function (a) { a.data.preventDefault() }); a.wrapper.on("mouseenter", a.updateDragHandlerPosition, a); setTimeout(function () { a.on("data", a.updateDragHandlerPosition, a) }, 50); if (!a.inline && (d.on("mousedown", aa, a), CKEDITOR.env.ie && 9 > CKEDITOR.env.version)) d.on("dragstart", function (a) { a.data.preventDefault(!0) }); a.dragHandlerContainer = c
                }
            } function aa(a) {
                function b() {
                    var c; for (p.reset() ; c = h.pop() ;) c.removeListener(); var d = k; c = a.sender; var e = this.repository.finder, f = this.repository.liner,
                    g = this.editor, l = this.editor.editable(); CKEDITOR.tools.isEmpty(f.visible) || (d = e.getRange(d[0]), this.focus(), g.fire("drop", { dropRange: d, target: d.startContainer })); l.removeClass("cke_widget_dragging"); f.hideVisible(); g.fire("dragend", { target: c })
                } if (CKEDITOR.tools.getMouseButton(a) === CKEDITOR.MOUSE_BUTTON_LEFT) {
                    var c = this.repository.finder, d = this.repository.locator, e = this.repository.liner, f = this.editor, g = f.editable(), h = [], k = [], l, m; this.repository._.draggedWidget = this; var n = c.greedySearch(), p = CKEDITOR.tools.eventsBuffer(50,
                    function () { l = d.locate(n); k = d.sort(m, 1); k.length && (e.prepare(n, l), e.placeLine(k[0]), e.cleanup()) }); g.addClass("cke_widget_dragging"); h.push(g.on("mousemove", function (a) { m = a.data.$.clientY; p.input() })); f.fire("dragstart", { target: a.sender }); h.push(f.document.once("mouseup", b, this)); g.isInline() || h.push(CKEDITOR.document.once("mouseup", b, this))
                }
            } function ba(a) { var b = null; a.on("data", function () { var a = this.data.classes, c; if (b != a) { for (c in b) a && a[c] || this.removeClass(c); for (c in a) this.addClass(c); b = a } }) }
            function V(a) { a.on("data", function () { if (a.wrapper) { var b = this.getLabel ? this.getLabel() : this.editor.lang.widget.label.replace(/%1/, this.pathName || this.element.getName()); a.wrapper.setAttribute("role", "region"); a.wrapper.setAttribute("aria-label", b) } }, null, null, 9999) } function da(a) { a.element.data("cke-widget-data", encodeURIComponent(JSON.stringify(a.data))) } function Z() {
                function a() { } function b(a, c, d) { return d && this.checkElement(a) ? (a = d.widgets.getByElement(a, !0)) && a.checkStyleActive(this) : !1 } function c(a) {
                    function b(a,
                    c, d) { for (var e = a.length, f = 0; f < e;) { if (c.call(d, a[f], f, a)) return a[f]; f++ } } function e(a) { function b(a, c) { var d = CKEDITOR.tools.object.keys(a), e = CKEDITOR.tools.object.keys(c); if (d.length !== e.length) return !1; for (var f in a) if (("object" !== typeof a[f] || "object" !== typeof c[f] || !b(a[f], c[f])) && a[f] !== c[f]) return !1; return !0 } return function (c) { return b(a.getDefinition(), c.getDefinition()) } } var f = a.widget, g; d[f] || (d[f] = {}); for (var h = 0, k = a.group.length; h < k; h++) g = a.group[h], d[f][g] || (d[f][g] = []), g = d[f][g], b(g,
                    e(a)) || g.push(a)
                } var d = {}; CKEDITOR.style.addCustomHandler({
                    type: "widget", setup: function (a) { this.widget = a.widget; (this.group = "string" == typeof a.group ? [a.group] : a.group) && c(this) }, apply: function (a) { var b; a instanceof CKEDITOR.editor && this.checkApplicable(a.elementPath(), a) && (b = a.widgets.focused, this.group && this.removeStylesFromSameGroup(a), b.applyStyle(this)) }, remove: function (a) { a instanceof CKEDITOR.editor && this.checkApplicable(a.elementPath(), a) && a.widgets.focused.removeStyle(this) }, removeStylesFromSameGroup: function (a) {
                        var b =
                        !1, c, e; if (!(a instanceof CKEDITOR.editor)) return !1; e = a.elementPath(); if (this.checkApplicable(e, a)) for (var f = 0, g = this.group.length; f < g; f++) { c = d[this.widget][this.group[f]]; for (var h = 0; h < c.length; h++) c[h] !== this && c[h].checkActive(e, a) && (a.widgets.focused.removeStyle(c[h]), b = !0) } return b
                    }, checkActive: function (a, b) { return this.checkElementMatch(a.lastElement, 0, b) }, checkApplicable: function (a, b) { return b instanceof CKEDITOR.editor ? this.checkElement(a.lastElement) : !1 }, checkElementMatch: b, checkElementRemovable: b,
                    checkElement: function (a) { return f.isDomWidgetWrapper(a) ? (a = a.getFirst(f.isDomWidgetElement)) && a.data("widget") == this.widget : !1 }, buildPreview: function (a) { return a || this._.definition.name }, toAllowedContentRules: function (a) {
                        if (!a) return null; a = a.widgets.registered[this.widget]; var b, c = {}; if (!a) return null; if (a.styleableElements) { b = this.getClassesArray(); if (!b) return null; c[a.styleableElements] = { classes: b, propertiesOnly: !0 }; return c } return a.styleToAllowedContentRules ? a.styleToAllowedContentRules(this) :
                        null
                    }, getClassesArray: function () { var a = this._.definition.attributes && this._.definition.attributes["class"]; return a ? CKEDITOR.tools.trim(a).split(/\s+/) : null }, applyToRange: a, removeFromRange: a, applyToObject: a
                })
            } CKEDITOR.plugins.add("widget", {
                requires: "lineutils,clipboard,widgetselection", onLoad: function () {
                    void 0 !== CKEDITOR.document.$.querySelectorAll && (CKEDITOR.addCss('.cke_widget_wrapper{position:relative;outline:none}.cke_widget_inline{display:inline-block}.cke_widget_wrapper:hover\x3e.cke_widget_element{outline:2px solid #ffd25c;cursor:default}.cke_widget_wrapper:hover .cke_widget_editable{outline:2px solid #ffd25c}.cke_widget_wrapper.cke_widget_focused\x3e.cke_widget_element,.cke_widget_wrapper .cke_widget_editable.cke_widget_editable_focused{outline:2px solid #47a4f5}.cke_widget_editable{cursor:text}.cke_widget_drag_handler_container{position:absolute;width:15px;height:0;display:block;opacity:0.75;transition:height 0s 0.2s;line-height:0}.cke_widget_wrapper:hover\x3e.cke_widget_drag_handler_container{height:15px;transition:none}.cke_widget_drag_handler_container:hover{opacity:1}.cke_editable[contenteditable\x3d"false"] .cke_widget_drag_handler_container{display:none;}img.cke_widget_drag_handler{cursor:move;width:15px;height:15px;display:inline-block}.cke_widget_mask{position:absolute;top:0;left:0;width:100%;height:100%;display:block}.cke_widget_partial_mask{position:absolute;display:block}.cke_editable.cke_widget_dragging, .cke_editable.cke_widget_dragging *{cursor:move !important}'),
                    Z())
                }, beforeInit: function (b) { void 0 !== CKEDITOR.document.$.querySelectorAll && (b.widgets = new a(b)) }, afterInit: function (a) { if (void 0 !== CKEDITOR.document.$.querySelectorAll) { var b = a.widgets.registered, c, d, e; for (d in b) c = b[d], (e = c.button) && a.ui.addButton && a.ui.addButton(CKEDITOR.tools.capitalize(c.name, !0), { label: e, command: c.name, toolbar: "insert,10" }); x(a); J(a.undoManager) } }
            }); a.prototype = {
                MIN_SELECTION_CHECK_INTERVAL: 500, add: function (a, d) {
                    var e = this.editor; d = CKEDITOR.tools.prototypedCopy(d); d.name = a;
                    d._ = d._ || {}; e.fire("widgetDefinition", d); d.template && (d.template = new CKEDITOR.template(d.template)); b(e, d); c(this, d); this.registered[a] = d; if (d.dialog && e.plugins.dialog) var f = CKEDITOR.on("dialogDefinition", function (a) { a = a.data.definition; var b = a.dialog; a.getMode || b.getName() !== d.dialog || (a.getMode = function () { var a = b.getModel(e); return a && a instanceof CKEDITOR.plugins.widget && a.ready ? CKEDITOR.dialog.EDITING_MODE : CKEDITOR.dialog.CREATION_MODE }); f.removeListener() }); return d
                }, addUpcastCallback: function (a) { this._.upcastCallbacks.push(a) },
                checkSelection: function () { if (this.editor.getSelection()) { var a = this.editor.getSelection(), b = a.getSelectedElement(), c = E(this), d; if (b && (d = this.getByElement(b, !0))) return c.focus(d).select(d).commit(); a = a.getRanges()[0]; if (!a || a.collapsed) return c.commit(); a = new CKEDITOR.dom.walker(a); for (a.evaluator = f.isDomWidgetWrapper; b = a.next() ;) c.select(this.getByElement(b)); c.commit() } }, checkWidgets: function (a) { this.fire("checkWidgets", CKEDITOR.tools.copy(a || {})) }, del: function (a) {
                    if (this.focused === a) {
                        var b = a.editor,
                        c = b.createRange(), d; (d = c.moveToClosestEditablePosition(a.wrapper, !0)) || (d = c.moveToClosestEditablePosition(a.wrapper, !1)); d && b.getSelection().selectRanges([c])
                    } a.wrapper.remove(); this.destroy(a, !0)
                }, destroy: function (a, b) { this.widgetHoldingFocusedEditable === a && u(this, a, null, b); a.destroy(b); delete this.instances[a.id]; this.fire("instanceDestroyed", a) }, destroyAll: function (a, b) {
                    var c, d, e = this.instances; if (b && !a) {
                        d = b.find(".cke_widget_wrapper"); for (var e = d.count(), f = 0; f < e; ++f) (c = this.getByElement(d.getItem(f),
                        !0)) && this.destroy(c)
                    } else for (d in e) c = e[d], this.destroy(c, a)
                }, finalizeCreation: function (a) { (a = a.getFirst()) && f.isDomWidgetWrapper(a) && (this.editor.insertElement(a), a = this.getByElement(a), a.ready = !0, a.fire("ready"), a.focus()) }, getByElement: function () { function a(c) { return c.is(b) && c.data("cke-widget-id") } var b = { div: 1, span: 1 }; return function (b, c) { if (!b) return null; var d = a(b); if (!c && !d) { var e = this.editor.editable(); do b = b.getParent(); while (b && !b.equals(e) && !(d = a(b))) } return this.instances[d] || null } }(),
                initOn: function (a, b, c) { b ? "string" == typeof b && (b = this.registered[b]) : b = this.registered[a.data("widget")]; if (!b) return null; var d = this.wrapElement(a, b.name); return d ? d.hasClass("cke_widget_new") ? (a = new f(this, this._.nextId++, a, b, c), a.isInited() ? this.instances[a.id] = a : null) : this.getByElement(a) : null }, initOnAll: function (a) { a = (a || this.editor.editable()).find(".cke_widget_new"); for (var b = [], c, d = a.count() ; d--;) (c = this.initOn(a.getItem(d).getFirst(f.isDomWidgetElement))) && b.push(c); return b }, onWidget: function (a) {
                    var b =
                    Array.prototype.slice.call(arguments); b.shift(); for (var c in this.instances) { var d = this.instances[c]; d.name == a && d.on.apply(d, b) } this.on("instanceCreated", function (c) { c = c.data; c.name == a && c.on.apply(c, b) })
                }, parseElementClasses: function (a) { if (!a) return null; a = CKEDITOR.tools.trim(a).split(/\s+/); for (var b, c = {}, d = 0; b = a.pop() ;) -1 == b.indexOf("cke_") && (c[b] = d = 1); return d ? c : null }, wrapElement: function (a, b) {
                    var c = null, d, e; if (a instanceof CKEDITOR.dom.element) {
                        b = b || a.data("widget"); d = this.registered[b]; if (!d) return null;
                        if ((c = a.getParent()) && c.type == CKEDITOR.NODE_ELEMENT && c.data("cke-widget-wrapper")) return c; a.hasAttribute("data-cke-widget-keep-attr") || a.data("cke-widget-keep-attr", a.data("widget") ? 1 : 0); a.data("widget", b); (e = q(d, a.getName())) && l(a); c = new CKEDITOR.dom.element(e ? "span" : "div", a.getDocument()); c.setAttributes(r(e, b)); c.data("cke-display-name", d.pathName ? d.pathName : a.getName()); a.getParent(!0) && c.replace(a); a.appendTo(c)
                    } else if (a instanceof CKEDITOR.htmlParser.element) {
                        b = b || a.attributes["data-widget"];
                        d = this.registered[b]; if (!d) return null; if ((c = a.parent) && c.type == CKEDITOR.NODE_ELEMENT && c.attributes["data-cke-widget-wrapper"]) return c; "data-cke-widget-keep-attr" in a.attributes || (a.attributes["data-cke-widget-keep-attr"] = a.attributes["data-widget"] ? 1 : 0); b && (a.attributes["data-widget"] = b); (e = q(d, a.name)) && l(a); c = new CKEDITOR.htmlParser.element(e ? "span" : "div", r(e, b)); c.attributes["data-cke-display-name"] = d.pathName ? d.pathName : a.name; d = a.parent; var f; d && (f = a.getIndex(), a.remove()); c.add(a); d && w(d,
                        f, c)
                    } return c
                }, _tests_createEditableFilter: g
            }; CKEDITOR.event.implementOn(a.prototype); f.prototype = {
                addClass: function (a) { this.element.addClass(a); this.wrapper.addClass(f.WRAPPER_CLASS_PREFIX + a) }, applyStyle: function (a) { H(this, a, 1) }, checkStyleActive: function (a) { a = I(a); var b; if (!a) return !1; for (; b = a.pop() ;) if (!this.hasClass(b)) return !1; return !0 }, destroy: function (a) {
                    this.fire("destroy"); if (this.editables) for (var b in this.editables) this.destroyEditable(b, a); a || ("0" == this.element.data("cke-widget-keep-attr") &&
                    this.element.removeAttribute("data-widget"), this.element.removeAttributes(["data-cke-widget-data", "data-cke-widget-keep-attr"]), this.element.removeClass("cke_widget_element"), this.element.replace(this.wrapper)); this.wrapper = null
                }, destroyEditable: function (a, b) {
                    var c = this.editables[a], d = !0; c.removeListener("focus", C); c.removeListener("blur", K); this.editor.focusManager.remove(c); if (c.filter) {
                        for (var e in this.repository.instances) {
                            var f = this.repository.instances[e]; f.editables && (f = f.editables[a]) && f !==
                            c && c.filter === f.filter && (d = !1)
                        } d && (c.filter.destroy(), (d = this.repository._.filters[this.name]) && delete d[a])
                    } b || (this.repository.destroyAll(!1, c), c.removeClass("cke_widget_editable"), c.removeClass("cke_widget_editable_focused"), c.removeAttributes(["contenteditable", "data-cke-widget-editable", "data-cke-enter-mode"])); delete this.editables[a]
                }, edit: function () {
                    var a = { dialog: this.dialog }, b = this; if (!1 === this.fire("edit", a) || !a.dialog) return !1; this.editor.openDialog(a.dialog, function (a) {
                        var c, d; !1 !== b.fire("dialog",
                        a) && (c = a.on("show", function () { a.setupContent(b) }), d = a.on("ok", function () { var c, d = b.on("data", function (a) { c = 1; a.cancel() }, null, null, 0); b.editor.fire("saveSnapshot"); a.commitContent(b); d.removeListener(); c && (b.fire("data", b.data), b.editor.fire("saveSnapshot")) }), a.once("hide", function () { c.removeListener(); d.removeListener() }))
                    }, b); return !0
                }, getClasses: function () { return this.repository.parseElementClasses(this.element.getAttribute("class")) }, getClipboardHtml: function () {
                    var a = this.editor.createRange();
                    a.setStartBefore(this.wrapper); a.setEndAfter(this.wrapper); return this.editor.editable().getHtmlFromRange(a).getHtml()
                }, hasClass: function (a) { return this.element.hasClass(a) }, initEditable: function (a, b) {
                    var c = this._findOneNotNested(b.selector); return c && c.is(CKEDITOR.dtd.$editable) ? (c = new e(this.editor, c, { filter: g.call(this.repository, this.name, a, b) }), this.editables[a] = c, c.setAttributes({ contenteditable: "true", "data-cke-widget-editable": a, "data-cke-enter-mode": c.enterMode }), c.filter && c.data("cke-filter",
                    c.filter.id), c.addClass("cke_widget_editable"), c.removeClass("cke_widget_editable_focused"), b.pathName && c.data("cke-display-name", b.pathName), this.editor.focusManager.add(c), c.on("focus", C, this), CKEDITOR.env.ie && c.on("blur", K, this), c._.initialSetData = !0, c.setData(c.getHtml()), !0) : !1
                }, _findOneNotNested: function (a) { a = this.wrapper.find(a); for (var b, c, d = 0; d < a.count() ; d++) if (b = a.getItem(d), c = b.getAscendant(f.isDomWidgetWrapper), this.wrapper.equals(c)) return b; return null }, isInited: function () {
                    return !(!this.wrapper ||
                    !this.inited)
                }, isReady: function () { return this.isInited() && this.ready }, focus: function () { var a = this.editor.getSelection(); if (a) { var b = this.editor.checkDirty(); a.fake(this.wrapper); !b && this.editor.resetDirty() } this.editor.focus() }, refreshMask: function () { Y(this) }, refreshParts: function (a) { X(this, "undefined" !== typeof a ? a : !0) }, removeClass: function (a) { this.element.removeClass(a); this.wrapper.removeClass(f.WRAPPER_CLASS_PREFIX + a) }, removeStyle: function (a) { H(this, a, 0) }, setData: function (a, b) {
                    var c = this.data,
                    d = 0; if ("string" == typeof a) c[a] !== b && (c[a] = b, d = 1); else { var e = a; for (a in e) c[a] !== e[a] && (d = 1, c[a] = e[a]) } d && this.dataReady && (da(this), this.fire("data", c)); return this
                }, setFocused: function (a) { this.wrapper[a ? "addClass" : "removeClass"]("cke_widget_focused"); this.fire(a ? "focus" : "blur"); return this }, setSelected: function (a) { this.wrapper[a ? "addClass" : "removeClass"]("cke_widget_selected"); this.fire(a ? "select" : "deselect"); return this }, updateDragHandlerPosition: function () {
                    var a = this.editor, b = this.element.$, c = this._.dragHandlerOffset,
                    b = { x: b.offsetLeft, y: b.offsetTop - 15 }; c && b.x == c.x && b.y == c.y || (c = a.checkDirty(), a.fire("lockSnapshot"), this.dragHandlerContainer.setStyles({ top: b.y + "px", left: b.x + "px" }), this.dragHandlerContainer.removeStyle("display"), a.fire("unlockSnapshot"), !c && a.resetDirty(), this._.dragHandlerOffset = b)
                }
            }; CKEDITOR.event.implementOn(f.prototype); f.getNestedEditable = function (a, b) { return !b || b.equals(a) ? null : f.isDomNestedEditable(b) ? b : f.getNestedEditable(a, b.getParent()) }; f.isDomDragHandler = function (a) {
                return a.type ==
                CKEDITOR.NODE_ELEMENT && a.hasAttribute("data-cke-widget-drag-handler")
            }; f.isDomDragHandlerContainer = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasClass("cke_widget_drag_handler_container") }; f.isDomNestedEditable = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("data-cke-widget-editable") }; f.isDomWidgetElement = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("data-widget") }; f.isDomWidgetWrapper = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("data-cke-widget-wrapper") };
            f.isDomWidget = function (a) { return a ? this.isDomWidgetWrapper(a) || this.isDomWidgetElement(a) : !1 }; f.isParserWidgetElement = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && !!a.attributes["data-widget"] }; f.isParserWidgetWrapper = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && !!a.attributes["data-cke-widget-wrapper"] }; f.WRAPPER_CLASS_PREFIX = "cke_widget_wrapper_"; e.prototype = CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.dom.element.prototype), {
                setData: function (a) {
                    this._.initialSetData ||
                    this.editor.widgets.destroyAll(!1, this); this._.initialSetData = !1; a = this.editor.dataProcessor.toHtml(a, { context: this.getName(), filter: this.filter, enterMode: this.enterMode }); this.setHtml(a); this.editor.widgets.initOnAll(this)
                }, getData: function () { return this.editor.dataProcessor.toDataFormat(this.getHtml(), { context: this.getName(), filter: this.filter, enterMode: this.enterMode }) }
            }); var P = /^(?:<(?:div|span)(?: data-cke-temp="1")?(?: id="cke_copybin")?(?: data-cke-temp="1")?>)?(?:<(?:div|span)(?: style="[^"]+")?>)?<span [^>]*data-cke-copybin-start="1"[^>]*>.?<\/span>([\s\S]+)<span [^>]*data-cke-copybin-end="1"[^>]*>.?<\/span>(?:<\/(?:div|span)>)?(?:<\/(?:div|span)>)?$/i,
            S = { 37: 1, 38: 1, 39: 1, 40: 1, 8: 1, 46: 1 }; S[CKEDITOR.SHIFT + 121] = 1; var R = CKEDITOR.tools.createClass({
                $: function (a, b) { this._.createCopyBin(a, b); this._.createListeners(b) }, _: {
                    createCopyBin: function (a) {
                        var b = a.document, c = CKEDITOR.env.edge && 16 <= CKEDITOR.env.version, d = !a.blockless && !CKEDITOR.env.ie || c ? "div" : "span", c = b.createElement(d), b = b.createElement(d); b.setAttributes({ id: "cke_copybin", "data-cke-temp": "1" }); c.setStyles({ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }); c.setStyle("ltr" == a.config.contentsLangDirection ?
                        "left" : "right", "-5000px"); this.editor = a; this.copyBin = c; this.container = b
                    }, createListeners: function (a) { a && (a.beforeDestroy && (this.beforeDestroy = a.beforeDestroy), a.afterDestroy && (this.afterDestroy = a.afterDestroy)) }
                }, proto: {
                    handle: function (a) {
                        var b = this.copyBin, c = this.editor, d = this.container, e = CKEDITOR.env.ie && 9 > CKEDITOR.env.version, f = c.document.getDocumentElement().$, g = c.createRange(), h = this, k = CKEDITOR.env.mac && CKEDITOR.env.webkit, l = k ? 100 : 0, m = window.requestAnimationFrame && !k ? requestAnimationFrame : setTimeout,
                        n, p, q; b.setHtml('\x3cspan data-cke-copybin-start\x3d"1"\x3e​\x3c/span\x3e' + a + '\x3cspan data-cke-copybin-end\x3d"1"\x3e​\x3c/span\x3e'); c.fire("lockSnapshot"); d.append(b); c.editable().append(d); n = c.on("selectionChange", F, null, null, 0); p = c.widgets.on("checkSelection", F, null, null, 0); e && (q = f.scrollTop); g.selectNodeContents(b); g.select(); e && (f.scrollTop = q); return new CKEDITOR.tools.promise(function (a) {
                            m(function () {
                                h.beforeDestroy && h.beforeDestroy(); d.remove(); n.removeListener(); p.removeListener(); c.fire("unlockSnapshot");
                                h.afterDestroy && h.afterDestroy(); a()
                            }, l)
                        })
                    }
                }, statics: { hasCopyBin: function (a) { return !!R.getCopyBin(a) }, getCopyBin: function (a) { return a.document.getById("cke_copybin") } }
            }); CKEDITOR.plugins.widget = f; f.repository = a; f.nestedEditable = e
        })(); (function () {
            function a(a, b, c) { this.editor = a; this.notification = null; this._message = new CKEDITOR.template(b); this._singularMessage = c ? new CKEDITOR.template(c) : null; this._tasks = []; this._doneTasks = this._doneWeights = this._totalWeights = 0 } function f(a) {
                this._weight = a || 1; this._doneWeight =
                0; this._isCanceled = !1
            } CKEDITOR.plugins.add("notificationaggregator", { requires: "notification" }); a.prototype = {
                createTask: function (a) { a = a || {}; var b = !this.notification, c; b && (this.notification = this._createNotification()); c = this._addTask(a); c.on("updated", this._onTaskUpdate, this); c.on("done", this._onTaskDone, this); c.on("canceled", function () { this._removeTask(c) }, this); this.update(); b && this.notification.show(); return c }, update: function () { this._updateNotification(); this.isFinished() && this.fire("finished") },
                getPercentage: function () { return 0 === this.getTaskCount() ? 1 : this._doneWeights / this._totalWeights }, isFinished: function () { return this.getDoneTaskCount() === this.getTaskCount() }, getTaskCount: function () { return this._tasks.length }, getDoneTaskCount: function () { return this._doneTasks }, _updateNotification: function () { this.notification.update({ message: this._getNotificationMessage(), progress: this.getPercentage() }) }, _getNotificationMessage: function () {
                    var a = this.getTaskCount(), b = {
                        current: this.getDoneTaskCount(), max: a,
                        percentage: Math.round(100 * this.getPercentage())
                    }; return (1 == a && this._singularMessage ? this._singularMessage : this._message).output(b)
                }, _createNotification: function () { return new CKEDITOR.plugins.notification(this.editor, { type: "progress" }) }, _addTask: function (a) { a = new f(a.weight); this._tasks.push(a); this._totalWeights += a._weight; return a }, _removeTask: function (a) {
                    var b = CKEDITOR.tools.indexOf(this._tasks, a); -1 !== b && (a._doneWeight && (this._doneWeights -= a._doneWeight), this._totalWeights -= a._weight, this._tasks.splice(b,
                    1), this.update())
                }, _onTaskUpdate: function (a) { this._doneWeights += a.data; this.update() }, _onTaskDone: function () { this._doneTasks += 1; this.update() }
            }; CKEDITOR.event.implementOn(a.prototype); f.prototype = {
                done: function () { this.update(this._weight) }, update: function (a) { if (!this.isDone() && !this.isCanceled()) { a = Math.min(this._weight, a); var b = a - this._doneWeight; this._doneWeight = a; this.fire("updated", b); this.isDone() && this.fire("done") } }, cancel: function () { this.isDone() || this.isCanceled() || (this._isCanceled = !0, this.fire("canceled")) },
                isDone: function () { return this._weight === this._doneWeight }, isCanceled: function () { return this._isCanceled }
            }; CKEDITOR.event.implementOn(f.prototype); CKEDITOR.plugins.notificationAggregator = a; CKEDITOR.plugins.notificationAggregator.task = f
        })(); "use strict"; (function () {
            CKEDITOR.plugins.add("uploadwidget", { requires: "widget,clipboard,filetools,notificationaggregator", init: function (a) { a.filter.allow("*[!data-widget,!data-cke-upload-id]") }, isSupportedEnvironment: function () { return CKEDITOR.plugins.clipboard.isFileApiSupported } });
            CKEDITOR.fileTools || (CKEDITOR.fileTools = {}); CKEDITOR.tools.extend(CKEDITOR.fileTools, {
                addUploadWidget: function (a, f, e) {
                    var b = CKEDITOR.fileTools, c = a.uploadRepository, m = e.supportedTypes ? 10 : 20; if (e.fileToElement) a.on("paste", function (e) {
                        e = e.data; var l = a.widgets.registered[f], d = e.dataTransfer, k = d.getFilesCount(), g = l.loadMethod || "loadAndUpload", m, r; if (!e.dataValue && k) for (r = 0; r < k; r++) if (m = d.getFile(r), !l.supportedTypes || b.isTypeSupported(m, l.supportedTypes)) {
                            var w = l.fileToElement(m); m = c.create(m, void 0,
                            l.loaderType); w && (m[g](l.uploadUrl, l.additionalRequestParameters), CKEDITOR.fileTools.markElement(w, f, m.id), "loadAndUpload" != g && "upload" != g || l.skipNotifications || CKEDITOR.fileTools.bindNotifications(a, m), e.dataValue += w.getOuterHtml())
                        }
                    }, null, null, m); CKEDITOR.tools.extend(e, {
                        downcast: function () { return new CKEDITOR.htmlParser.text("") }, init: function () {
                            var b = this, e = this.wrapper.findOne("[data-cke-upload-id]").data("cke-upload-id"), d = c.loaders[e], f = CKEDITOR.tools.capitalize, g, m; d.on("update", function (c) {
                                if ("abort" ===
                                d.status && "function" === typeof b.onAbort) b.onAbort(d); if (b.wrapper && b.wrapper.getParent()) { a.fire("lockSnapshot"); c = "on" + f(d.status); if ("abort" === d.status || "function" !== typeof b[c] || !1 !== b[c](d)) m = "cke_upload_" + d.status, b.wrapper && m != g && (g && b.wrapper.removeClass(g), b.wrapper.addClass(m), g = m), "error" != d.status && "abort" != d.status || a.widgets.del(b); a.fire("unlockSnapshot") } else CKEDITOR.instances[a.name] && a.editable().find('[data-cke-upload-id\x3d"' + e + '"]').count() || d.abort(), c.removeListener()
                            }); d.update()
                        },
                        replaceWith: function (b, c) { if ("" === b.trim()) a.widgets.del(this); else { var d = this == a.widgets.focused, e = a.editable(), f = a.createRange(), m, r; d || (r = a.getSelection().createBookmarks()); f.setStartBefore(this.wrapper); f.setEndAfter(this.wrapper); d && (m = f.createBookmark()); e.insertHtmlIntoRange(b, f, c); a.widgets.checkWidgets({ initOnlyNew: !0 }); a.widgets.destroy(this, !0); d ? (f.moveToBookmark(m), f.select()) : a.getSelection().selectBookmarks(r) } }, _getLoader: function () {
                            var a = this.wrapper.findOne("[data-cke-upload-id]");
                            return a ? this.editor.uploadRepository.loaders[a.data("cke-upload-id")] : null
                        }
                    }); a.widgets.add(f, e)
                }, markElement: function (a, f, e) { a.setAttributes({ "data-cke-upload-id": e, "data-widget": f }) }, bindNotifications: function (a, f) {
                    function e() {
                        b = a._.uploadWidgetNotificaionAggregator; if (!b || b.isFinished()) b = a._.uploadWidgetNotificaionAggregator = new CKEDITOR.plugins.notificationAggregator(a, a.lang.uploadwidget.uploadMany, a.lang.uploadwidget.uploadOne), b.once("finished", function () {
                            var c = b.getTaskCount(); 0 === c ? b.notification.hide() :
                            b.notification.update({ message: 1 == c ? a.lang.uploadwidget.doneOne : a.lang.uploadwidget.doneMany.replace("%1", c), type: "success", important: 1 })
                        })
                    } var b, c = null; f.on("update", function () { !c && f.uploadTotal && (e(), c = b.createTask({ weight: f.uploadTotal })); c && "uploading" == f.status && c.update(f.uploaded) }); f.on("uploaded", function () { c && c.done() }); f.on("error", function () { c && c.cancel(); a.showNotification(f.message, "warning") }); f.on("abort", function () {
                        c && c.cancel(); CKEDITOR.instances[a.name] && a.showNotification(a.lang.uploadwidget.abort,
                        "info")
                    })
                }
            })
        })(); "use strict"; (function () {
            function a(a) { 9 >= a && (a = "0" + a); return String(a) } function f(b) { var c = new Date, c = [c.getFullYear(), c.getMonth() + 1, c.getDate(), c.getHours(), c.getMinutes(), c.getSeconds()]; e += 1; return "image-" + CKEDITOR.tools.array.map(c, a).join("") + "-" + e + "." + b } var e = 0; CKEDITOR.plugins.add("uploadimage", {
                requires: "uploadwidget", onLoad: function () { CKEDITOR.addCss(".cke_upload_uploading img{opacity: 0.3}") }, isSupportedEnvironment: function () { return CKEDITOR.plugins.clipboard.isFileApiSupported },
                init: function (a) {
                    if (this.isSupportedEnvironment()) {
                        var c = CKEDITOR.fileTools, e = c.getUploadUrl(a.config, "image"); e && (c.addUploadWidget(a, "uploadimage", {
                            supportedTypes: /image\/(jpeg|png|gif|bmp)/, uploadUrl: e, fileToElement: function () { var a = new CKEDITOR.dom.element("img"); a.setAttribute("src", "data:image/gif;base64,R0lGODlhDgAOAIAAAAAAAP///yH5BAAAAAAALAAAAAAOAA4AAAIMhI+py+0Po5y02qsKADs\x3d"); return a }, parts: { img: "img" }, onUploading: function (a) { this.parts.img.setAttribute("src", a.data) }, onUploaded: function (a) {
                                var b =
                                this.parts.img.$; this.replaceWith('\x3cimg src\x3d"' + a.url + '" width\x3d"' + (a.responseData.width || b.naturalWidth) + '" height\x3d"' + (a.responseData.height || b.naturalHeight) + '"\x3e')
                            }
                        }), a.on("paste", function (h) {
                            if (h.data.dataValue.match(/<img[\s\S]+data:/i)) {
                                h = h.data; var l = document.implementation.createHTMLDocument(""), l = new CKEDITOR.dom.element(l.body), d, k, g; l.data("cke-editable", 1); l.appendHtml(h.dataValue); d = l.find("img"); for (g = 0; g < d.count() ; g++) {
                                    k = d.getItem(g); var n = k.getAttribute("src"), r = n && "data:" ==
                                    n.substring(0, 5), w = null === k.data("cke-realelement"); r && w && !k.data("cke-upload-id") && !k.isReadOnly(1) && (r = (r = n.match(/image\/([a-z]+?);/i)) && r[1] || "jpg", n = a.uploadRepository.create(n, f(r)), n.upload(e), c.markElement(k, "uploadimage", n.id), c.bindNotifications(a, n))
                                } h.dataValue = l.getHtml()
                            }
                        }))
                    }
                }
            })
        })(); CKEDITOR.plugins.add("wsc", {
            requires: "dialog", parseApi: function (a) {
                a.config.wsc_onFinish = "function" === typeof a.config.wsc_onFinish ? a.config.wsc_onFinish : function () { }; a.config.wsc_onClose = "function" === typeof a.config.wsc_onClose ?
                a.config.wsc_onClose : function () { }
            }, parseConfig: function (a) {
                a.config.wsc_customerId = a.config.wsc_customerId || CKEDITOR.config.wsc_customerId || "1:ua3xw1-2XyGJ3-GWruD3-6OFNT1-oXcuB1-nR6Bp4-hgQHc-EcYng3-sdRXG3-NOfFk"; a.config.wsc_customDictionaryIds = a.config.wsc_customDictionaryIds || CKEDITOR.config.wsc_customDictionaryIds || ""; a.config.wsc_userDictionaryName = a.config.wsc_userDictionaryName || CKEDITOR.config.wsc_userDictionaryName || ""; a.config.wsc_customLoaderScript = a.config.wsc_customLoaderScript || CKEDITOR.config.wsc_customLoaderScript;
                a.config.wsc_interfaceLang = a.config.wsc_interfaceLang; CKEDITOR.config.wsc_cmd = a.config.wsc_cmd || CKEDITOR.config.wsc_cmd || "spell"; CKEDITOR.config.wsc_version = "v4.3.0-master-d769233"; CKEDITOR.config.wsc_removeGlobalVariable = !0
            }, onLoad: function (a) { "moono-lisa" == (CKEDITOR.skinName || a.config.skin) && CKEDITOR.document.appendStyleSheet(CKEDITOR.getUrl(this.path + "skins/" + CKEDITOR.skin.name + "/wsc.css")) }, init: function (a) {
                var f = CKEDITOR.env; this.parseConfig(a); this.parseApi(a); a.addCommand("checkspell", new CKEDITOR.dialogCommand("checkspell")).modes =
                { wysiwyg: !CKEDITOR.env.opera && !CKEDITOR.env.air && document.domain == window.location.hostname && !(f.ie && (8 > f.version || f.quirks)) }; "undefined" == typeof a.plugins.scayt && a.ui.addButton && a.ui.addButton("SpellChecker", { label: a.lang.wsc.toolbar, click: function (a) { var b = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? a.container.getText() : a.document.getBody().getText(); (b = b.replace(/\s/g, "")) ? a.execCommand("checkspell") : alert("Nothing to check!") }, toolbar: "spellchecker,10" }); CKEDITOR.dialog.add("checkspell", this.path +
                (CKEDITOR.env.ie && 7 >= CKEDITOR.env.version ? "dialogs/wsc_ie.js" : window.postMessage ? "dialogs/wsc.js" : "dialogs/wsc_ie.js"))
            }
        }); (function () {
            function a(a) {
                function b(a) {
                    var c = !1; g.attachListener(g, "keydown", function () { var b = l.getBody().getElementsByTag(a); if (!c) { for (var d = 0; d < b.count() ; d++) b.getItem(d).setCustomData("retain", !0); c = !0 } }, null, null, 1); g.attachListener(g, "keyup", function () {
                        var b = l.getElementsByTag(a); c && (1 == b.count() && !b.getItem(0).getCustomData("retain") && CKEDITOR.tools.isEmpty(b.getItem(0).getAttributes()) &&
                        b.getItem(0).remove(1), c = !1)
                    })
                } var e = this.editor; if (e && !e.isDetached()) {
                    var l = a.document, d = l.body, k = l.getElementById("cke_actscrpt"); k && k.parentNode.removeChild(k); (k = l.getElementById("cke_shimscrpt")) && k.parentNode.removeChild(k); (k = l.getElementById("cke_basetagscrpt")) && k.parentNode.removeChild(k); d.contentEditable = !0; CKEDITOR.env.ie && (d.hideFocus = !0, d.disabled = !0, d.removeAttribute("disabled")); delete this._.isLoadingData; this.$ = d; l = new CKEDITOR.dom.document(l); this.setup(); this.fixInitialSelection();
                    var g = this; CKEDITOR.env.ie && !CKEDITOR.env.edge && l.getDocumentElement().addClass(l.$.compatMode); CKEDITOR.env.ie && !CKEDITOR.env.edge && e.enterMode != CKEDITOR.ENTER_P ? b("p") : CKEDITOR.env.edge && 15 > CKEDITOR.env.version && e.enterMode != CKEDITOR.ENTER_DIV && b("div"); if (CKEDITOR.env.webkit || CKEDITOR.env.ie && 10 < CKEDITOR.env.version) l.getDocumentElement().on("mousedown", function (a) { a.data.getTarget().is("html") && setTimeout(function () { e.editable().focus() }) }); f(e); try { e.document.$.execCommand("2D-position", !1, !0) } catch (n) { } (CKEDITOR.env.gecko ||
                    CKEDITOR.env.ie && "CSS1Compat" == e.document.$.compatMode) && this.attachListener(this, "keydown", function (a) { var b = a.data.getKeystroke(); if (33 == b || 34 == b) if (CKEDITOR.env.ie) setTimeout(function () { e.getSelection().scrollIntoView() }, 0); else if (e.window.$.innerHeight > this.$.offsetHeight) { var c = e.createRange(); c[33 == b ? "moveToElementEditStart" : "moveToElementEditEnd"](this); c.select(); a.data.preventDefault() } }); CKEDITOR.env.ie && this.attachListener(l, "blur", function () { try { l.$.selection.empty() } catch (a) { } }); CKEDITOR.env.iOS &&
                    this.attachListener(l, "touchend", function () { a.focus() }); d = e.document.getElementsByTag("title").getItem(0); d.data("cke-title", d.getText()); CKEDITOR.env.ie && (e.document.$.title = this._.docTitle); CKEDITOR.tools.setTimeout(function () { "unloaded" == this.status && (this.status = "ready"); e.fire("contentDom"); this._.isPendingFocus && (e.focus(), this._.isPendingFocus = !1); setTimeout(function () { e.fire("dataReady") }, 0) }, 0, this)
                }
            } function f(a) {
                function b() {
                    var d; a.editable().attachListener(a, "selectionChange", function () {
                        var b =
                        a.getSelection().getSelectedElement(); b && (d && (d.detachEvent("onresizestart", e), d = null), b.$.attachEvent("onresizestart", e), d = b.$)
                    })
                } function e(a) { a.returnValue = !1 } if (CKEDITOR.env.gecko) try { var f = a.document.$; f.execCommand("enableObjectResizing", !1, !a.config.disableObjectResizing); f.execCommand("enableInlineTableEditing", !1, !a.config.disableNativeTableHandles) } catch (d) { } else CKEDITOR.env.ie && 11 > CKEDITOR.env.version && a.config.disableObjectResizing && b(a)
            } function e() {
                var a = []; if (8 <= CKEDITOR.document.$.documentMode) {
                    a.push("html.CSS1Compat [contenteditable\x3dfalse]{min-height:0 !important}");
                    var b = [], e; for (e in CKEDITOR.dtd.$removeEmpty) b.push("html.CSS1Compat " + e + "[contenteditable\x3dfalse]"); a.push(b.join(",") + "{display:inline-block}")
                } else CKEDITOR.env.gecko && (a.push("html{height:100% !important}"), a.push("img:-moz-broken{-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")); a.push("html{cursor:text;*cursor:auto}"); a.push("img,input,textarea{cursor:default}"); return a.join("\n")
            } var b; CKEDITOR.plugins.add("wysiwygarea", {
                init: function (a) {
                    a.config.fullPage && a.addFeature({
                        allowedContent: "html head title; style [media,type]; body (*)[id]; meta link [*]",
                        requiredContent: "body"
                    }); a.addMode("wysiwyg", function (e) {
                        function f(g) { g && g.removeListener(); a.isDestroyed() || a.isDetached() || (a.editable(new b(a, d.$.contentWindow.document.body)), a.setData(a.getData(1), e)) } var l = "document.open();" + (CKEDITOR.env.ie ? "(" + CKEDITOR.tools.fixDomain + ")();" : "") + "document.close();", l = CKEDITOR.env.air ? "javascript:void(0)" : CKEDITOR.env.ie && !CKEDITOR.env.edge ? "javascript:void(function(){" + encodeURIComponent(l) + "}())" : "", d = CKEDITOR.dom.element.createFromHtml('\x3ciframe src\x3d"' +
                        l + '" frameBorder\x3d"0"\x3e\x3c/iframe\x3e'); d.setStyles({ width: "100%", height: "100%" }); d.addClass("cke_wysiwyg_frame").addClass("cke_reset"); l = a.ui.space("contents"); l.append(d); var k = CKEDITOR.env.ie && !CKEDITOR.env.edge || CKEDITOR.env.gecko; if (k) d.on("load", f); var g = a.title, n = a.fire("ariaEditorHelpLabel", {}).label; g && (CKEDITOR.env.ie && n && (g += ", " + n), d.setAttribute("title", g)); if (n) {
                            var g = CKEDITOR.tools.getNextId(), r = CKEDITOR.dom.element.createFromHtml('\x3cspan id\x3d"' + g + '" class\x3d"cke_voice_label"\x3e' +
                            n + "\x3c/span\x3e"); l.append(r, 1); d.setAttribute("aria-describedby", g)
                        } a.on("beforeModeUnload", function (a) { a.removeListener(); r && r.remove() }); d.setAttributes({ tabIndex: a.tabIndex, allowTransparency: "true" }); !k && f(); a.fire("ariaWidget", d)
                    })
                }
            }); CKEDITOR.editor.prototype.addContentsCss = function (a) { var b = this.config, e = b.contentsCss; CKEDITOR.tools.isArray(e) || (b.contentsCss = e ? [e] : []); b.contentsCss.push(a) }; b = CKEDITOR.tools.createClass({
                $: function () {
                    this.base.apply(this, arguments); this._.frameLoadedHandler =
                    CKEDITOR.tools.addFunction(function (b) { CKEDITOR.tools.setTimeout(a, 0, this, b) }, this); this._.docTitle = this.getWindow().getFrame().getAttribute("title")
                }, base: CKEDITOR.editable, proto: {
                    setData: function (a, b) {
                        var f = this.editor; if (b) this.setHtml(a), this.fixInitialSelection(), f.fire("dataReady"); else {
                            this._.isLoadingData = !0; f._.dataStore = { id: 1 }; var l = f.config, d = l.fullPage, k = l.docType, g = CKEDITOR.tools.buildStyleHtml(e()).replace(/<style>/, '\x3cstyle data-cke-temp\x3d"1"\x3e'); d || (g += CKEDITOR.tools.buildStyleHtml(f.config.contentsCss));
                            var n = l.baseHref ? '\x3cbase href\x3d"' + l.baseHref + '" data-cke-temp\x3d"1" /\x3e' : ""; d && (a = a.replace(/<!DOCTYPE[^>]*>/i, function (a) { f.docType = k = a; return "" }).replace(/<\?xml\s[^\?]*\?>/i, function (a) { f.xmlDeclaration = a; return "" })); a = f.dataProcessor.toHtml(a); d ? (/<body[\s|>]/.test(a) || (a = "\x3cbody\x3e" + a), /<html[\s|>]/.test(a) || (a = "\x3chtml\x3e" + a + "\x3c/html\x3e"), /<head[\s|>]/.test(a) ? /<title[\s|>]/.test(a) || (a = a.replace(/<head[^>]*>/, "$\x26\x3ctitle\x3e\x3c/title\x3e")) : a = a.replace(/<html[^>]*>/, "$\x26\x3chead\x3e\x3ctitle\x3e\x3c/title\x3e\x3c/head\x3e"),
                            n && (a = a.replace(/<head[^>]*?>/, "$\x26" + n)), a = a.replace(/<\/head\s*>/, g + "$\x26"), a = k + a) : a = l.docType + '\x3chtml dir\x3d"' + l.contentsLangDirection + '" lang\x3d"' + (l.contentsLanguage || f.langCode) + '"\x3e\x3chead\x3e\x3ctitle\x3e' + this._.docTitle + "\x3c/title\x3e" + n + g + "\x3c/head\x3e\x3cbody" + (l.bodyId ? ' id\x3d"' + l.bodyId + '"' : "") + (l.bodyClass ? ' class\x3d"' + l.bodyClass + '"' : "") + "\x3e" + a + "\x3c/body\x3e\x3c/html\x3e"; CKEDITOR.env.gecko && (a = a.replace(/<body/, '\x3cbody contenteditable\x3d"true" '), 2E4 > CKEDITOR.env.version &&
                            (a = a.replace(/<body[^>]*>/, "$\x26\x3c!-- cke-content-start --\x3e"))); l = '\x3cscript id\x3d"cke_actscrpt" type\x3d"text/javascript"' + (CKEDITOR.env.ie ? ' defer\x3d"defer" ' : "") + "\x3evar wasLoaded\x3d0;function onload(){if(!wasLoaded)window.parent.CKEDITOR.tools.callFunction(" + this._.frameLoadedHandler + ",window);wasLoaded\x3d1;}" + (CKEDITOR.env.ie ? "onload();" : 'document.addEventListener("DOMContentLoaded", onload, false );') + "\x3c/script\x3e"; CKEDITOR.env.ie && 9 > CKEDITOR.env.version && (l += '\x3cscript id\x3d"cke_shimscrpt"\x3ewindow.parent.CKEDITOR.tools.enableHtml5Elements(document)\x3c/script\x3e');
                            n && CKEDITOR.env.ie && 10 > CKEDITOR.env.version && (l += '\x3cscript id\x3d"cke_basetagscrpt"\x3evar baseTag \x3d document.querySelector( "base" );baseTag.href \x3d baseTag.href;\x3c/script\x3e'); a = a.replace(/(?=\s*<\/(:?head)>)/, l); this.clearCustomData(); this.clearListeners(); f.fire("contentDomUnload"); var r = this.getDocument(); try { r.write(a) } catch (w) { setTimeout(function () { r.write(a) }, 0) }
                        }
                    }, getData: function (a) {
                        if (a) return this.getHtml(); a = this.editor; var b = a.config, e = b.fullPage, f = e && a.docType, d = e && a.xmlDeclaration,
                        k = this.getDocument(), e = e ? k.getDocumentElement().getOuterHtml() : k.getBody().getHtml(); CKEDITOR.env.gecko && b.enterMode != CKEDITOR.ENTER_BR && (e = e.replace(/<br>(?=\s*(:?$|<\/body>))/, "")); e = a.dataProcessor.toDataFormat(e); d && (e = d + "\n" + e); f && (e = f + "\n" + e); return e
                    }, focus: function () { this._.isLoadingData ? this._.isPendingFocus = !0 : b.baseProto.focus.call(this) }, detach: function () {
                        var a = this.editor, e = a.document, a = a.container.findOne("iframe.cke_wysiwyg_frame"); b.baseProto.detach.call(this); this.clearCustomData(this._.expandoNumber);
                        e.getDocumentElement().clearCustomData(); CKEDITOR.tools.removeFunction(this._.frameLoadedHandler); a && (a.clearCustomData(), (e = a.removeCustomData("onResize")) && e.removeListener(), a.isDetached() || a.remove())
                    }
                }
            })
        })(); CKEDITOR.config.disableObjectResizing = !1; CKEDITOR.config.disableNativeTableHandles = !0; CKEDITOR.config.disableNativeSpellChecker = !0; CKEDITOR.config.plugins = "dialogui,dialog,a11yhelp,about,basicstyles,blockquote,notification,button,toolbar,clipboard,panel,floatpanel,menu,contextmenu,elementspath,indent,indentlist,list,enterkey,entities,popup,filetools,filebrowser,floatingspace,listblock,richcombo,format,horizontalrule,htmlwriter,image,fakeobjects,link,magicline,maximize,pastetools,pastefromgdocs,pastefromlibreoffice,pastefromword,pastetext,removeformat,resize,menubutton,scayt,showborders,sourcearea,specialchar,stylescombo,tab,table,tabletools,tableselection,undo,lineutils,widgetselection,widget,notificationaggregator,uploadwidget,uploadimage,wsc,wysiwygarea";
        CKEDITOR.config.skin = "moono-lisa"; (function () {
            var a = function (a, e) { var b = CKEDITOR.getUrl("plugins/" + e); a = a.split(","); for (var c = 0; c < a.length; c++) CKEDITOR.skin.icons[a[c]] = { path: b, offset: -a[++c], bgsize: a[++c] } }; CKEDITOR.env.hidpi ? a("about,0,,bold,24,,italic,48,,strike,72,,subscript,96,,superscript,120,,underline,144,,bidiltr,168,,bidirtl,192,,blockquote,216,,copy-rtl,240,,copy,264,,cut-rtl,288,,cut,312,,paste-rtl,336,,paste,360,,codesnippet,384,,bgcolor,408,,textcolor,432,,copyformatting,456,,creatediv,480,,docprops-rtl,504,,docprops,528,,easyimagealigncenter,552,,easyimagealignleft,576,,easyimagealignright,600,,easyimagealt,624,,easyimagefull,648,,easyimageside,672,,easyimageupload,696,,embed,720,,embedsemantic,744,,emojipanel,768,,find-rtl,792,,find,816,,replace,840,,flash,864,,button,888,,checkbox,912,,form,936,,hiddenfield,960,,imagebutton,984,,radio,1008,,select-rtl,1032,,select,1056,,textarea-rtl,1080,,textarea,1104,,textfield-rtl,1128,,textfield,1152,,horizontalrule,1176,,iframe,1200,,image,1224,,indent-rtl,1248,,indent,1272,,outdent-rtl,1296,,outdent,1320,,justifyblock,1344,,justifycenter,1368,,justifyleft,1392,,justifyright,1416,,language,1440,,anchor-rtl,1464,,anchor,1488,,link,1512,,unlink,1536,,bulletedlist-rtl,1560,,bulletedlist,1584,,numberedlist-rtl,1608,,numberedlist,1632,,mathjax,1656,,maximize,1680,,newpage-rtl,1704,,newpage,1728,,pagebreak-rtl,1752,,pagebreak,1776,,pastefromword-rtl,1800,,pastefromword,1824,,pastetext-rtl,1848,,pastetext,1872,,placeholder,1896,,preview-rtl,1920,,preview,1944,,print,1968,,removeformat,1992,,save,2016,,scayt,2040,,selectall,2064,,showblocks-rtl,2088,,showblocks,2112,,smiley,2136,,source-rtl,2160,,source,2184,,sourcedialog-rtl,2208,,sourcedialog,2232,,specialchar,2256,,table,2280,,templates-rtl,2304,,templates,2328,,uicolor,2352,,redo-rtl,2376,,redo,2400,,undo-rtl,2424,,undo,2448,,simplebox,4944,auto,spellchecker,2496,",
            "icons_hidpi.png") : a("about,0,auto,bold,24,auto,italic,48,auto,strike,72,auto,subscript,96,auto,superscript,120,auto,underline,144,auto,bidiltr,168,auto,bidirtl,192,auto,blockquote,216,auto,copy-rtl,240,auto,copy,264,auto,cut-rtl,288,auto,cut,312,auto,paste-rtl,336,auto,paste,360,auto,codesnippet,384,auto,bgcolor,408,auto,textcolor,432,auto,copyformatting,456,auto,creatediv,480,auto,docprops-rtl,504,auto,docprops,528,auto,easyimagealigncenter,552,auto,easyimagealignleft,576,auto,easyimagealignright,600,auto,easyimagealt,624,auto,easyimagefull,648,auto,easyimageside,672,auto,easyimageupload,696,auto,embed,720,auto,embedsemantic,744,auto,emojipanel,768,auto,find-rtl,792,auto,find,816,auto,replace,840,auto,flash,864,auto,button,888,auto,checkbox,912,auto,form,936,auto,hiddenfield,960,auto,imagebutton,984,auto,radio,1008,auto,select-rtl,1032,auto,select,1056,auto,textarea-rtl,1080,auto,textarea,1104,auto,textfield-rtl,1128,auto,textfield,1152,auto,horizontalrule,1176,auto,iframe,1200,auto,image,1224,auto,indent-rtl,1248,auto,indent,1272,auto,outdent-rtl,1296,auto,outdent,1320,auto,justifyblock,1344,auto,justifycenter,1368,auto,justifyleft,1392,auto,justifyright,1416,auto,language,1440,auto,anchor-rtl,1464,auto,anchor,1488,auto,link,1512,auto,unlink,1536,auto,bulletedlist-rtl,1560,auto,bulletedlist,1584,auto,numberedlist-rtl,1608,auto,numberedlist,1632,auto,mathjax,1656,auto,maximize,1680,auto,newpage-rtl,1704,auto,newpage,1728,auto,pagebreak-rtl,1752,auto,pagebreak,1776,auto,pastefromword-rtl,1800,auto,pastefromword,1824,auto,pastetext-rtl,1848,auto,pastetext,1872,auto,placeholder,1896,auto,preview-rtl,1920,auto,preview,1944,auto,print,1968,auto,removeformat,1992,auto,save,2016,auto,scayt,2040,auto,selectall,2064,auto,showblocks-rtl,2088,auto,showblocks,2112,auto,smiley,2136,auto,source-rtl,2160,auto,source,2184,auto,sourcedialog-rtl,2208,auto,sourcedialog,2232,auto,specialchar,2256,auto,table,2280,auto,templates-rtl,2304,auto,templates,2328,auto,uicolor,2352,auto,redo-rtl,2376,auto,redo,2400,auto,undo-rtl,2424,auto,undo,2448,auto,simplebox,2472,auto,spellchecker,2496,auto",
            "icons.png")
        })()
    }
})();