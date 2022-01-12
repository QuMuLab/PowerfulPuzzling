/** @license Copyright (c) 2020 Carolina Road Software, LLC. All rights reserved.
    This software may not be copied, redistributed, or used without explicit permission. */
!function () {
    "use strict"; var a, l, c, u, g = window.jigexGlobals; if (!g.parms) {
        g.parms = null, String.prototype.includes || (
            String.prototype.includes = function (e, t) { return -1 !== this.indexOf(e, t) }), String.prototype.codePointAt || (
                String.prototype.codePointAt = function (e) {
                    if (null == this) throw TypeError(); var t = String(this), n = t.length, i = e ? Number(e) : 0
                        ; if (i != i && (i = 0), !(i < 0 || n <= i)) {
                            var o, e = t.charCodeAt(i); return 55296 <= e && e <= 56319 && i + 1 < n && 56320 <= (o = t.charCodeAt(i + 1)
                            ) && o <= 57343 ? 1024 * (e - 55296) + o - 56320 + 65536 : e
                        }
                }), Array.prototype.includes || (Array.prototype.includes = function (e, t) {
                    return -1 !== this.indexOf(e, t)
                }), Array.prototype.from || (Array.prototype.from = function (e) {
                    return Array.prototype.slice.call(e)
                }), Number.MAX_SAFE_INTEGER || (Number.MAX_SAFE_INTEGER = 9007199254740991), l = {}, c = [],
        u = !0, g.errMonitor = {
            _handledError: !1, setAuxData: function (e, t, n) {
                l[e] = "object" == typeof t ? JSON.stringify(t, null, n ? null : "\t"
                ) : t
            }, addCallback: function (e) { c.push(e) }, sendReport: function (e) {
                var t = e || new Error("Handled error"); if (
                    "string" == typeof t && (t = new Error(t)), !t.stack) try { throw t } catch (e) { } this._handledError = !0, this.pushError(t),
                        this._handledError = !1
            }, pushError: function (e) { }, forceErrorReporting: !1
        }, window._errs ? (_errs.allow = function (e) {
            if (G(e)) {
                for (var t in l) l.hasOwnProperty(t) && (_errs.meta[t] = l[t]); return !0
            } return !1
        }, _errs.meta = {
            "Missing Piece": null,
            Version: g.progVersion, "Record id": "n/a", Screenshot: null, Logs: "n/a", "Bad Record": null, "Old Record": null
        },
            g.errMonitor.pushError = function (e) { _errs.push(e) }) : b.error('Errorception\'s "_errs" object is not defined')
        ; var e = document.getElementById("jigex-control-host"), m = document.getElementById("jigex-loader"), f = g.status; if (e && m && f) {
            g.status.framed = window.self !== window.top; var n = g.scriptsDir, i = g.status.framed, o = -1 !== m.src.indexOf("jigex-prog"), r = {
                base: { init: null, inited: !1, file: "base" }, niftybar: { init: null, inited: !1, file: "niftybar" }, utils: {
                    init: null, inited: !1,
                    file: "utils"
                }, ClipGL: { init: null, inited: !1, file: "clipgl" }, Sonic: { init: null, inited: !1, file: "sonic" }, SonicH5: {
                    init: null,
                    inited: !1, file: "sonic-h5"
                }, theme: { init: null, inited: !1, file: "theme" }, photon: { init: null, inited: !1, file: "photon" },
                multiplayer: { init: null, inited: !1, file: "multiplayer" }, snapIndicator: { init: null, inited: !1, file: "snap" }, ui: {
                    init: null,
                    inited: !1, file: "ui"
                }, player: { init: null, inited: !1, file: "player" }
            }; String.prototype.includes || (
                String.prototype.includes = function () { return -1 !== String.prototype.indexOf.apply(this, arguments) }); var v = function () {
                    var e = {}, t = window.location.search, n = t.length - 1; if ("#" === t[n] && (t = t.substring(0, n - 1)), t) {
                        for (var i = t.substr(1).split("&")
                            , o = i.length - 1; 0 <= o; o--) { var r = i[o].split("="); e[r[0]] = r[1] } e.url = e.url || e.img
                    } return e
                }(); v.ctw && v.cth && (x = parseInt(
                    v.cth, 10) + 36, e.style.width = v.ctw + "px", e.style.height = x.toString(10) + "px"); var y = ("verbose" === v.dbg ? v.dbg : !!v.dbg) || !o,
                        b = window.console; g.debug = y; var t = function (e) {
                            (b = e).config.throwOnAssertFail = !0, b.config.separator = "",
                            b.config.maxLogEntryLength = 15e3, y && (b.config.recordLevel = b.DEBUG, b.config.nativeRecordLevel = b.DEBUG),
                            b.config.onlogwrite = function (e, t, n) { e !== b.FAULT || y && !g.errMonitor.forceErrorReporting || g.errMonitor.sendReport(n) }
                        }
                ; window.openConsole ? t(window.openConsole) : window.onLoadOpenConsole = t, !i && !v.url || (P = document.getElementById(
                    "adthrive_sticky_footer")) && P.parentNode.removeChild(P); var s = window.navigator.userAgent, d = (
                        "100%" === e.style.width && e.style.height, m.getAttribute("data-ga-events") || ""); !!function (e) {
                            try {
                                return localStorage.getItem(e)
                            } catch (e) { return null }
                        }("jigex-email-collected"
                        ) || !navigator.cookieEnabled || m.getAttribute("data-mmunch-site-id"); g.homeDomain = "https://www.jigsawexplorer.com/",
                            g.cdnDomain = "https://d3v07jw5i24n9b.cloudfront.net/", g.fetchPath = "https://www.jigsawexplorer.com/fetch?target=",
                            g.imagesPath = g.resDir + "images/", g.altImagesPath = g.cdnDomain + "media/graphics/", g.audioPath = g.resDir + "audio/",
                            g.altAudioPath = g.cdnDomain + "media/audio/", g.scriptsPath = g.resDir + "scripts/", g.altScriptsPath = g.cdnDomain + "scripts/",
                            g.subjectsPath = g.homeDomain + "puzzles/subjects/", g.altSubjectsPath = g.cdnDomain + "puzzles/subjects/",
                            g.profilesPath = g.homeDomain + "puzzles/profiles/", g.altProfilesPath = g.cdnDomain + "puzzles/profiles/", g.testImage = null,
                            g.isIOS = (k = /iPad|iPhone|iPod/.test(s), _ = s.includes("Macintosh"), E = 1 <= navigator.maxTouchPoints, k || _ && (E || function () {
                                try {
                                    var e = new Audio
                                } catch (e) { return !1 } return e.volume = .5, 1 === e.volume
                            }())), g.parms = function () {
                                function n(t) {
                                    if (t) try {
                                        0 !== (
                                            t = decodeURIComponent(t)).indexOf("http") && (t = (t = (t = (t = decodeURIComponent(t)).split("-").join("+")).split("_").join("/")
                                            ).split("~").join("="), t = window.atob(t)), t = t.replace(/\\/g, "")
                                    } catch (e) { b.log(t), b.error("URL decode failure:", e), t = "" }
                                    return t
                                } function i(e) {
                                    var t = e.target; 200 === t.status ? (e = t.response) && (e.includes("jigex-promo-1") ? l = e : e.includes(
                                        "jigex-promo-2") && (c = e)) : b.error("Failed to load promo spec. code=%d, msg=%s, path=%s", t.status, t.statusText, t.filePath)
                                        , 0 == --s && g.parms.onReady && g.parms.onReady()
                                } function r(e) {
                                    var t; e && -1 == a.indexOf(e) && (t = new XMLHttpRequest, s++, a.push(e)
                                        , t.open("GET", e, !0), t.filePath = e, t.responseType = "text", t.crossOrigin = "anonymous", t.onload = i, t.onerror = i, t.send())
                                }
                                var o = null, s = 0, a = [], l = document.getElementById("jigex-promo-1"), c = document.getElementById("jigex-promo-2"); r(n(
                                    v.promo1 || m.getAttribute("data-promo-1"))), r(n(v.promo2 || m.getAttribute("data-promo-2"))); var u, d, h = (u = {}, (d = function (e
                                    ) {
                                        var t; e && -1 === a.indexOf(e) && (t = new XMLHttpRequest, s++, a.push(e), t.open("GET", e, !0), t.filePath = e, t.responseType = "text",
                                            t.crossOrigin = "anonymous", t.onload = p, t.onerror = p, t.send())
                                    })(n(v.prof)), u); function p(e) {
                                        var t = e.target; if (
                                            200 === t.status) {
                                                var n, i = JSON.parse(t.response); if (i && "object" == typeof i) for (var o in i) i.hasOwnProperty(o) && (
                                                    "nextProfileAddress" === o ? "string" == typeof (n = i.nextProfileAddress) ? d(n) : Array.isArray(n) ? n.forEach(d) : b.error(
                                                        'Invalid value for field "nextProfileAddress" in', t.filePath) : "promotionPanelAddress" === o ? "string" == typeof (
                                                            n = i.promotionPanelAddress) ? r(n) : Array.isArray(n) ? n.forEach(r) : b.error(
                                                                'Invalid value for field "promotionPanelAddress" in', t.filePath) : u[o] = i[o]); else i ? b.error(
                                                                    "Content of profile " + t.filePath + ' is of type "' + typeof i + '", but should be an object') : b.error(
                                                                        "Content of profile " + t.filePath + " is null, probably due to incorrect JSON format")
                                        } else b.error(
                                            "Failed to load profile. code=%d, msg=%s, path=%s", t.status, t.statusText, t.filePath)
                                            ; 0 == --s && g.parms.onReady && g.parms.onReady()
                                    } return function () {
                                        var e, t; return o || s || (e = {
                                            puzzleId: v.puzzle_id || void 0,
                                            url: n(v.url) || h.photoAddress || m.getAttribute("data-puzzle-url") || void 0, gameId: v.gid || void 0, nop: parseInt(v.nop
                                            ) || h.numberOfPieces || parseInt(m.getAttribute("data-num-pieces")) || void 0, min: parseInt(
                                                v.min || h.minNumberOfPiecesAllowed || m.getAttribute("data-min-pieces")) || void 0, cred: n(v.cred
                                                ) || h.creditLine || m.getAttribute("data-credit") || void 0, credu: n(v.credu) || h.creditAddress || m.getAttribute(
                                                    "data-credit-url") || void 0, color: v.color || h.backgroundColor || m.getAttribute("data-color") || void 0, frm: f.framed ? parseInt(
                                                        v.frm || "1") : void 0, saveName: null, data: null, recId: v.rec || void 0, rgn: v.rgn || null, plog: v.plog && "n" !== v.plog, promo1: l,
                                            promo2: c, mmunchId: v.mmid || h.mailMunchId || m.getAttribute("data-mmunch-id"),
                                            mmunchOnOpen: !v.mmfin && !h.mailMunchOnFinish && !m.hasAttribute("data-mmunch-finish"),
                                            mmunchForce: "true" === v.mmfrc || h.mailMunchForce || m.hasAttribute("data-mmunch-force"), appl: m.hasAttribute("data-applause"
                                            ) || h.showApplause || void 0, maxSaved: parseInt(m.getAttribute("data-max-saved")) || h.maxNumberOfSavedPuzzles || void 0,
                                            debug: m.hasAttribute("data-debug") || y || void 0, canvasTestWidth: v.ctw || void 0, canvasTestHeight: v.cth || void 0,
                                            reset: function () {
                                                return this.puzzleId = this.url = this.nop = this.min = this.cred = this.credu = this.saveName = this.data = null, this
                                            }, log: function () { var e = this.data; e && 128 < e.length && (this.data = e.substr(0, 128) + "..."), this.data = e }
                                        }, (t = e.credu) && (
                                            0 !== t.indexOf("http") || t.includes("script") || t.includes('"') || t.includes("<") || t.includes(">")) && (e.credu = void 0), o = e), o
                                    }
                            }(); var h = !!window, p = h ? "ht" : "", w = h ? "tps://ww" : "", x = h ? "w.jigs" : "", t = h ? "awexpl" : "", P = h ? "orer.c" : "", k = h ? "om/" : "",
                                _ = h ? "hr" : "", E = h ? "ef" : ""; if (0 === window[(h ? "loc" : "") + (h ? "ation" : "")][_ + E].indexOf(p + w + x + t + P + k)) {
                                    g.logEvent = function (e, t, n
                                    ) {
                                        "function" == typeof window.ga ? d.includes(e) ? window.ga("send", "event", "Puzzles", e, t, n) : "Completed".includes(e) && b.error(
                                            "unrecognized GA log event: %s", e) : i || b.error(
                                                'GA event "%s" was not pegged because GA was not loaded or has been overwritten', e)
                                    }; var C, S, T, z, I, L, A, O, j, M, B,
                                        N = function (e, t) {
                                            var n = document.createElement("script"); return n.type = "text/javascript", n.crossorigin = "anonymous",
                                                n.onload = t, n.onerror = function () {
                                                    n.srcList && n.srcList.length ? N(n.srcList, n.onload) : b.error(
                                                        "Script failed to load: " + n.src)
                                                }, "string" == typeof e ? n.src = e : (n.srcList = e, n.src = e.shift()), document.body.appendChild(n),
                                                n
                                        }, R = (C = document.getElementsByTagName("head")[0], S = {}, k = document.createElement("link"),
                                            T = "sheet" in k ? "sheet" : "styleSheet", z = "sheet" in k ? "cssRules" : "rules", I = !0, k = window.navigator.userAgent, L = k.includes(
                                                "Mac OS X") && k.includes("Safari/") && !k.includes("Chrome/"), A = function () {
                                                    var e, t = !1; for (e in S) if (S.hasOwnProperty(e)) {
                                                        var n = S[e]; if (!n.isLoaded) {
                                                            try {
                                                                if (L) for (var i = document.styleSheets.length - 1; 0 <= i; i--)document.styleSheets[i].href === e && (
                                                                    n.isLoaded = !0); else n.isLoaded = n[T] && n[T][z] && !!n[T][z].length
                                                            } catch (e) { } n.isLoaded ? (O.onFirstLoad && (O.onFirstLoad(),
                                                                O.onFirstLoad = null), n.callback && n.callback(n)) : t = !0
                                                        }
                                                    } t ? setTimeout(A, 100) : I = !0
                                                }, (O = function (e, t) {
                                                    var n = S[e]
                                                    ; return n ? n.isLoaded ? t && t(n) : t && (n.callback = t) : (R.allSheetsLoaded = !1, (n = document.createElement("link")).setAttribute(
                                                        "rel", "stylesheet"), n.setAttribute("type", "text/css"), n.setAttribute("crossorigin", "anonymous"), n.setAttribute("href", e)
                                                        , n.callback = t, n.isCSS = !0, n.isLoaded = !1, S[e] = n, C.appendChild(n), setTimeout(A, 100)), n
                                                }).onFirstLoad = null,
                                            O.allSheetsLoaded = function () { return I }, O); g.modules = (B = M = !(j = []), {
                                                bundled: o, load: N, addModInit: function (e, t) {
                                                    r[e].init = t,
                                                    this.update()
                                                }, update: function () {
                                                    if (!B && !M) {
                                                        for (var e = !0; e;)for (var t in e = !1, r) if (r.hasOwnProperty(t)) {
                                                            var n = r[t]; if (
                                                                !n.inited && n.init && n.init.dependenciesReady()) {
                                                                    if (n.init(), B) return; e = n.inited = !0, b.log('module "%s" has initialized', t)
                                                            }
                                                        } var i = !0; for (t in r) if (r.hasOwnProperty(t) && !r[t].inited) { i = !1; break } if (i) {
                                                            for (; j.length;)if (j.pop()(), B) return; M = !0,
                                                                setTimeout(g.modules.onProgramStart, 0)
                                                        }
                                                    }
                                                }, haltInit: function () { B = !0, b.log("module initialization halted") },
                                                onInitComplete: function (e) { j.push(e) }, onProgramStart: null
                                            }); if (s.includes("MSIE") && !s.includes("Trident/")
                                    ) return D = "Internet Explorer is not capable of displaying the jigsaw puzzle", D = s.includes("Windows NT 5.") || s.includes(
                                        "Windows NT 6.0"
                                    ) ? "Internet Explorer is not capable of displaying the<br/>jigsaw puzzle on Windows XP or Vista." : s.includes(
                                        "Windows NT 6.1"
                                    ) ? 'Welcome! You will need to <a href="https://www.microsoft.com/en-us/download/internet-explorer-11-for-windows-7-details.aspx" style="color: white" target="_blank">upgrade to Internet Explorer 11</a> (or use a different web browser) to play this jigsaw puzzle.</p>' : 'Welcome! Internet Explorer is not capable of displaying the jigsaw puzzle <br/>in Windows 8.0. Please try a different web browser, such as <a href="https://www.google.com/chrome/browser/desktop/" style="color: white" target="_blank">Chrome</a>.'
                                        ,
                                        e ? e.innerHTML = '<br/><br/><p style="text-align: center; font-size: large; font-family: Arial; color: white;">' + D + "</p>" : window.alert(
                                            "Welcome! You will need to upgrade to Internet Explorer 11 (or use a different web browser, such as Chrome) to play this jigsaw puzzle."
                                        ); !function () {
                                            if (R("https://fonts.googleapis.com/css?family=Roboto"), !o) for (var e in r) {
                                                var t; r.hasOwnProperty(e) && (
                                                    t = r[e].file, N(n + "jigex-" + t + ".js"))
                                            } window.GoogleAnalyticsObject = "ga", window.ga = window.ga || function () {
                                                window.ga.q.push(
                                                    arguments)
                                            }, window.ga.q = window.ga.q || [["create", "UA-10103852-5", "jigsawexplorer.com"], ["send", "pageview"]], window.ga.l = (
                                                new Date).getTime(), N("https://www.google-analytics.com/analytics.js"), g.adBlockerPresent = !0, N(g.scriptsPath + "ads.js")
                                        }(
                                        ); var D = document.getElementById("jigex-copyright"); D.innerHTML = D.innerHTML.replace("vvvv", f.progVersion), e || (
                                            document.documentElement.setAttribute("style", "height: 100%; overflow: hidden"), document.body.setAttribute("style",
                                                "padding: 0; margin: 0; height: 100%; overflow: hidden; background-color: #7390aa"), (e = document.createElement("div")
                                                ).id = "jigex-control-host", e.setAttribute("style", "width: 100%; height: 100%; position: fixed; top: 0; right: 0;"),
                                            document.body.appendChild(e)), g.modules || g.reloadProg("modules component not present")
                                }
        } else {
            D = "Not ready: host=" + !!e + ", loader=" + !!m + ", status=" + !!f; g.reloadProg ? g.reloadProg(D) : (window.alert(
                "Error: " + D + '\n\nClick the "OK" button to try again.'), window.setTimeout(function () { window.location.reload(!0) }, 1e3))
        }
    }
    function G(e) {
        var t, n = !1, i = g.parms && g.parms().debug, o = new Error(e.message); if (o.stack = e.stack, (t = function (e) {
            var t = {
                msg: e.message, stk: e.stack, ua: navigator.userAgent
            }, n = t.ua.includes("Mac OS X") && t.ua.includes("Safari/") && !t.ua.includes(
                "Chrome/"), i = t.ua.includes("Firefox/"), o = t.ua.includes("Trident/"), r = t.ua.includes("Edge/"), s = o || r, e = g.isIOS,
            i = !t.stk || !t.stk.trim().length || !t.stk.includes("\n") || t.msg.includes("null is not an object (evaluating 'd.id')"
            ) && t.ua.includes("CriOS/") && t.stk.includes("forEach") || t.msg.includes("Error calling method on NPObject"
            ) || t.msg.includes("ntp is not defined") && t.ua.includes("SmartTV") || t.msg.includes("Undefined variable: filters"
            ) && t.ua.includes("Presto") || t.stk.includes("eshopcomp.com") || t.msg.includes("bdt.femurssculler.com") || t.stk.includes(
                "www.unblockbook.biz") || t.stk.includes("dc121677.com") || t.stk.includes("blockPopupsFunc") || t.msg.includes(
                    "elt.parentNode") && t.ua.includes("GSA/") || t.msg.includes('Permission denied to access property "toString"'
                    ) || t.msg.includes("Cannot read property 'removeAttribute' of null") || t.msg.includes(
                        "Object doesn't support property or method 'attachEvent'") || t.stk.includes("analyzePageInfo (eval") || t.msg.includes(
                            "Can't find variable: inf") && t.ua.includes("CriOS") || t.msg.includes("Cannot redefine property: googletag"
                            ) || t.msg.includes("bannerAdType") || t.msg.includes("Maximum call stack size exceeded") && t.stk.includes("addEventListener"
                            ) || t.msg.includes("Object doesn't support property or method 'abort'") && o && t.stk.includes("Unknown script"
                            ) || t.msg.includes("Unable to get property 'open'") && r && t.stk.includes("at e.open") || t.stk.includes("YT.Player"
                            ) || t.msg.includes('can\'t redefine non-configurable property "userAgent"') && t.ua.includes("Firefox/") || t.stk.includes(
                                "hasPasswordField_") || t.stk.includes("getOldObserverGeometry") || t.stk.includes("blocker.overwrite.click"
                                ) || t.stk.includes("gumgum.js") || t.stk.includes("inject.js") || t.stk.includes(":1:") || t.msg.includes(
                                    "SyntaxError: Unexpected token <") || t.stk.includes("adguard.com") || t.msg.includes("a[b].target.className.indexOf"
                                    ) || t.msg.includes("undefined is not an object (evaluating 'Math.min')") || t.msg.includes(
                                        "undefined is not an object (evaluating 'Math.floor')") && t.stk.includes("online-jigsaw-puzzle-player.html"
                                        ) || t.msg.includes("null is not an object (evaluating 'this.getContainer().ownerDocument')") && t.stk.includes(
                                            "online-jigsaw-puzzle-player.html") || t.msg.includes("'Promise' is undefined") || t.msg.includes("Can't find variable: ext"
                                            ) && t.stk.includes("[native code]") || n && t.msg.includes("Can't find variable: base64json") && t.stk.includes("[native code]"
                                            ) || t.msg.includes("navigator.geolocation is undefined") || t.msg.includes("Unexpected call to method or property access"
                                            ) && o || t.stk.includes("replaceIFRAMEScript") || t.msg.includes('can\'t redefine non-configurable property "availWidth"'
                                            ) && i || t.msg.includes(".ru/logger") || t.msg.includes(".ru/adb") || t.msg.includes(
                                                "undefined is not an object (evaluating 'Math.max')") || t.msg.includes("NotFoundError: The object can not be found here"
                                                ) && t.stk.includes("removeChild@[native code]") && e || t.msg.includes("this.placement.getContainer().getBoundingClientRect"
                                                ) && e || t.msg.includes("SecurityError: Blocked a frame") && t.stk.includes("extractFormsAndFormElements"
                                                ) && e || t.msg.includes("null is not an object (evaluating 'this.placement.getContainer().getBoundingClientRect')"
                                                ) && n || t.stk.includes("https://cdn.id5-sync.com") || i && t.msg.includes("can't access dead object") || t.msg.includes(
                                                    "server_fp is not defined") || t.msg.includes("null is not an object (evaluating 'r.innerWidth')") || t.msg.includes(
                                                        "grecaptcha is not defined") || t.stk.includes("f3r/") || t.msg.includes("'ID5' is undefined") || t.msg.includes(
                                                            'Blocked a frame with origin "https://www.jigsawexplorer.com" from accessing a frame with origin "https://track.adthrive.com'
                                                        ) || t.msg.includes(
                                                            'Blocked a frame with origin "https://www.jigsawexplorer.com" from accessing a frame with origin "https://d.agkn.com'
                                                        ) || t.stk.includes("moatad") || t.stk.includes("adthrive") || t.stk.includes("xa.txae.prototype.dcwn") || t.msg.includes(
                                                            "https://acdn.adnxs.com") || t.msg.includes("confiant.com") || t.stk.includes("CrossScreenBannerFormat") || t.stk.includes(
                                                                "ViewportManager") && t.msg.includes("ownerDocument") || t.stk.includes("ampproject.org") || t.stk.includes(
                                                                    "_getTrackerPixelUrl") || t.msg.includes("Cannot redefine property: userAgent") || t.stk.includes("computeRectInView"
                                                                    ) || t.stk.includes("Video.prototype._leaveView") || t.stk.includes("amazon-adsystem.com") || t.stk.includes("zaxs"
                                                                    ) || t.stk.includes("prebid.js"), t = (i = i || t.stk.split("\n").every(function (e, t) { return 0 === t || e.includes("anonymous") })
                                                                    ) || t.ua.includes("Firefox/3.") || t.msg.includes("out of memory") || t.msg.includes("Out of memory") || t.msg.includes(
                                                                        "Not enough memory") || t.msg.includes("Mémoire insuffisante pour cette opération") || t.msg.includes(
                                                                            "Der er ikke tilstrækkelig tilgængelig hukommelse til at fuldføre denne handling") || t.msg.includes(
                                                                                "Memoria disponibile insufficiente per completare l'operazione") || t.msg.includes(
                                                                                    "Onvoldoende opslagruimte beschikbaar om deze bewerking te voltooien") || t.msg.includes(
                                                                                        "Les ressources mémoire disponibles sont insuffisantes pour exécuter cette opération") || t.msg.includes(
                                                                                            "Für diesen Vorgang ist nicht genügend Speicher verfügbar") || t.msg.includes(
                                                                                                "Espacio de almacenamiento insuficiente para completar esta operación") || t.msg.includes(
                                                                                                    "Det finns inte tillräckligt med utrymme tillgängligt för att slutföra den här åtgärden") || t.msg.includes(
                                                                                                        "GPU-enhetsinstansen har försatts i väntetillstånd. Använd GetDeviceRemovedReason om du vill ta reda på vad du bör göra"
                                                                                                    ) || t.msg.includes("この操作を完了するのに十分な記憶域がありません。") || t.msg.includes("사용 가능한 저장소가 부족하여 이 작업을 마칠 수 없습니다") || t.msg.includes(
                                                                                                        "메모리 리소스가 부족하기 때문에 이 작업을 완료할 수 없습니다") || t.msg.includes("GPU 장치 인스턴스가 중단되었습니다") || t.msg.includes(
                                                                                                            "Não existe memória suficiente para concluir esta operação") || t.msg.includes("syntax error") && t.parms.file.includes(
                                                                                                                "jquery.js") || t.msg.includes("NS_ERROR_OUT_OF_MEMORY") || t.msg.includes("NS_ERROR_FILE_") || t.msg.includes(
                                                                                                                    "NS_ERROR_FAILURE") || t.msg.includes("NS_ERROR_STORAGE_IOERR") || t.msg.includes(
                                                                                                                        "Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'") || t.msg.includes(
                                                                                                                            "Attempted to assign to readonly property") && t.ua.includes("Arora/") || t.msg.includes("Access is denied"
                                                                                                                            ) && o || t.msg.includes("Accès refusé") && o && t.stk.includes("jquery") || t.msg.includes("Access is denied") && t.ua.includes(
                                                                                                                                "Edge/") && t.stk.includes("jquery") || t.msg.includes("Accesso negato") && t.ua.includes("Edge/") && t.stk.includes("jquery"
                                                                                                                                ) || t.msg.includes("SecurityError") && t.stk.includes("clipgl.js") || t.msg.includes("Syntax error") && s || t.msg.includes(
                                                                                                                                    "Unterminated string constant") && s || t.msg.includes("error 80020101") && r || t.msg.includes("Unspecified error"
                                                                                                                                    ) && s || t.msg.includes("Erreur non spécifiée") && s || t.msg.includes("Odefinierat fel") && s || t.msg.includes(
                                                                                                                                        "Der opstod en udefineret fejl") && s || t.msg.includes("Error no especificado") && s || t.msg.includes("Erro não especificado"
                                                                                                                                        ) && s || t.msg.includes("שגיאה לא מוגדרת") && s || t.msg.includes("Niet nader omschreven fout") && s || t.msg.includes(
                                                                                                                                            "Not enough storage is available") && o || t.stk.includes("G_cp_4") || t.msg.includes("image must not be empty"
                                                                                                                                            ) && t.ua.includes("Android") || t.msg.includes("Java exception") && t.ua.includes("Android") || t.stk.includes("flimpobj.js"
                                                                                                                                            ) || t.msg.includes("887a0005") || t.msg.includes("Cannot redefine property: play") || t.msg.includes(
                                                                                                                                                "undefined is not an object (evaluating 'je.Puzzle.curr')") && t.ua.includes("Macintosh") || t.msg.includes(
                                                                                                                                                    "Object doesn't support property or method 'engn'") && r || t.msg.includes("The RPC server is unavailable") && t.stk.includes(
                                                                                                                                                        "visitBtn") && r || t.msg.includes("Unable to create defaultColorShader fragment shader") && r || t.stk.includes(
                                                                                                                                                            "coin-service.com") || t.msg.includes("Cannot read property 'DOMNodeInsertedByJs' of undefined") && t.ua.includes("Android"
                                                                                                                                                            ) || t.msg.includes("Cannot read property 'style' of null") && t.stk.includes("setColor") || t.msg.includes(
                                                                                                                                                                "Cannot redefine property: websredir") || t.msg.includes("The GPU device instance has been suspended") || t.msg.includes(
                                                                                                                                                                    "Istanza del dispositivo GPU sospesa") || t.msg.includes("Die GPU-Geräteinstanz wurde angehalten") || t.stk.includes(
                                                                                                                                                                        "chrome-extension://") || t.stk.includes("handleRipple") || t.msg.includes("Unhandled SyntaxError: Expected ':'"
                                                                                                                                                                        ) && t.stk.includes("Unknown script code") || t.stk.includes("vissense") || t.msg.includes("Erro de sintaxe"
                                                                                                                                                                        ) && o || t.stk.includes("main.js") || t.stk.includes("Unknown script code:1:196") || t.stk.includes("XMLHttpRequest.js"
                                                                                                                                                                        ) || t.stk.includes("_stopObservingEnvironment") || t.stk.includes("rafTick") || t.stk.includes("BetterJsPop"
                                                                                                                                                                        ) || t.stk.includes("pixeladvice.com") || t.ua.includes("Electron") || t.msg.includes("Unexpected end of script"
                                                                                                                                                                        ) && t.ua.includes("iPad") || t.msg.includes("expando") || t.msg.includes("Maximum call stack size exceeded") && t.ua.includes(
                                                                                                                                                                            "FBAV/300") || t.msg.includes("NS_ERROR_UNEXPECTED") || t.msg.includes("Uncaught SyntaxError: Unexpected end of input"
                                                                                                                                                                            ) || t.msg.includes("Unterminated string constant") && t.ua.includes("Edge/18") || n && t.msg.includes(
                                                                                                                                                                                "undefined is not an object (evaluating 'je.Puzzle.curr')") || t.msg.includes("The object is in an invalid state"
                                                                                                                                                                                ) && t.stk.includes("getImageData"
                                                                                                                                                                                ) || g.modules && g.modules.ClipGL && g.modules.ClipGL.insts && g.modules.ClipGL.insts["jigex-canvas"] && !g.modules.ClipGL.insts["jigex-canvas"].stableContext || t.stk.includes(
                                                                                                                                                                                    "e.prototype._setupCodecs"); g.errMonitor._handledError && (i = !(t = !1)); return { reportError: !t, alertUser: !i, ieWarning: t && o }
        }(
            o)).reportError && u && !i) try {
                n = !(u = !1), window.openConsole && !g.errMonitor._handledError && window.openConsole.log(o); for (
                    var r = 0, s = c.length; r < s; r++)c[r]()
            } catch (e) { l["Inner error"] = e.stack } return t.alertUser && (a = o.message, setTimeout(
                function () {
                    window.alert(a), t.ieWarning && window.alert(
                        "If the error persists then please consider playing the puzzles in a different web browser (we recommend the Chrome browser). Internet Explorer is a old and buggy web browser. Even Microsoft is strongly encouraging all users to stop using Internet Explorer."
                    )
                }, 1e3)), n
    }
}(), function () {
    "use strict"; var o, r, v, y, b, n, w, x, P, k, i, _, s, E, C, a, t, e, S = "undefined" != typeof self,
        T = S ? self : global; T.openConsole || (
            o = Array.prototype.filter && Array.prototype.reduce && JSON && JSON.stringify && Object.hasOwnProperty && String.prototype.trim && Function.bind && Error
            , v = "\n" + (r = "    "), y = S && -1 !== navigator.userAgent.indexOf("Chrome"), b = {
                applyChromeDebugFix: !0, autoLineBreak: !0,
                includeStackLevel: 70, includeTimestamp: !0, logLimit: 1e4, logCharacterLimit: 5e5, maxLogEntryLength: 5e3,
                nativeRecordLevel: S ? 60 : 20, onlogwrite: null, recordLevel: 30, separator: " ", throwOnAssertFail: !40, usePrettyPrintJson: !1,
                useTags: !0, verbose: !1
            }, n = { length: 0, size: 0, logsLost: 0 }, w = {}, x = T.console, P = !0, i = [], k = {
                add: function (e) {
                    for (i.push(e),
                        n.size += e.length + 1; i.length && (i.length > b.logLimit || n.size > b.logCharacterLimit);) {
                            var t = i.shift(); n.size -= t.length + 1,
                                n.logsLost++
                    } n.length = i.length
                }, clear: function () { i = [], w = {}, n.length = 0, n.size = 0, n.logsLost = 0, x && x.clear && x.clear() },
                emitBreak: function () { o && k.add(" ") }, toString: function () {
                    return (
                        n.logsLost ? r + "(Earlier logs lost due to logging limits)\n" : "") + i.join("\n")
                }, toStrings: function () { return i.slice() }
            },
            _ = function (t) {
                var n, i, o = t.stack; if (!o) try { throw t } catch (e) { o = t.stack } return o ? (n = !t.message, -1 === o.indexOf(
                    "open-console.js") ? n && (o = o.substring(o.indexOf("\n") + 1).trim()) : (i = !1, o = o.split("\n").filter(function (e) {
                        e = -1 !== e.indexOf("open-console.js"); return (i = i || e) ? !e : !n
                    }).join(v)), o && (t.stack = o)) : t.stack = r + "(No call stack provided)"
                    , t
            }, s = function (e, t) { return t && e.length > t ? e.substring(0, t) + "…" : e }, E = function (e, t, n) {
                if (e instanceof Error) return e.stack
                    ; var i, o; switch (typeof e) {
                        case "string": return s(e.replace(/\n/g, v), n); case "number": if (n) try { return e.toFixed(n) } catch (e
                        ) { return "(bad float precision specifier)" } return "" + e; case "object": try {
                            return !t && !b.usePrettyPrintJson || 3 < (
                                o = JSON.stringify(e, null, r).split("\n")).length && (i = o.join(v) + v), s(i || JSON.stringify(e), n)
                        } catch (e) {
                            return "(cannot convert circular object to string)"
                        } default: return s("" + e, n)
                    }
            }, C = function (e) {
                return (
                    e.level >= b.recordLevel || e.level >= b.nativeRecordLevel && x && x[e.native] || b.verbose) && o
            }, a = function (e, t, o) {
                if (!(
                    arguments.length < 4) && C(e)) {
                        var n, i, r = "assert" === e.name, s = r && !!arguments[3], a = Array.prototype.slice.call(arguments, r ? 4 : 3)
                        , l = a[0], c = "string" == typeof l; if (t && c) { if (w.hasOwnProperty(l)) return; w[l] = !0 } if ((
                            e.level >= b.nativeRecordLevel || b.verbose && 20 === b.nativeRecordLevel) && x && P && x[e.native]) {
                        var u = y && b.applyChromeDebugFix && "debug" === e.native ? "log" : e.native, d = r ? Array.prototype.slice.call(arguments, 3) : a; try {
                            x[u].apply(x, d)
                        } catch (e) {
                            P = !1, S && setTimeout(function (e) {
                                try {
                                    T.openConsole(
                                        "openConsole failed to access the native console" + (e ? ": " + e.message : ""))
                                } catch (e) { }
                            }, 0, e)
                        }
                    } if (
                        e.level >= b.recordLevel || b.verbose) {
                            if (!s) {
                                var h = "", p = b.useTags ? e.tag : null, g = p ? " • " : " · ", m = b.includeTimestamp ? (
                                    m = new Date, n = m.getHours(), i = m.getMinutes(), t = m.getSeconds(), m = m.getMilliseconds(), (n < 10 ? "0" + n : n) + ":" + (i < 10 ? "0" + i : i
                                    ) + ":" + (t < 10 ? "0" + t : t) + "." + (m < 10 ? "00" + m : m < 100 ? "0" + m : m) + g) : "", g = a.length && a[a.length - 1] instanceof Error, f = null; if (!c || 1 < (
                                        l = l.split("%")).length && (a.shift(), h = l.reduce(function (e, t, n) {
                                            if (0 === n) return e + t.replace(/\n/g, v); if (
                                                -1 === ".dfioOs".indexOf(t[0])) return e + "%" + t.replace(/\n/g, v); var i = function (e) {
                                                    if ("." === e[0]) {
                                                        var t = parseInt(
                                                            e.substring(1), 10); if (!isNaN(t)) { var n = t.toString(10).length; if (-1 !== "dfioOs".indexOf(e[n + 1])) return t }
                                                    } return null
                                                }(t),
                                                    n = t.substring(i ? i.toString().length + 2 : 1), t = a.shift(), i = E(t, o, i); return f = f || (t instanceof Error ? t : null), e + i + n.replace(
                                                        /\n/g, v)
                                        }, h), a.length && (h = a.reduce(function (e, t) { return f = f || (t instanceof Error ? t : null), e + b.separator + E(t, o, null) }, h)),
                                            a.length = 0), a.length && (h = a.reduce(function (e, t) { return f = f || (t instanceof Error ? t : null), e + b.separator + E(t, o, null) }, h)), (
                                                "trace" === e.name || e.level >= b.includeStackLevel) && !g && (h += v + _(new Error).stack), h = m + (p ? p + ": " : "") + h.trim(),
                                        b.autoLineBreak && (h += -1 === h.indexOf("\n") ? "" : "\n"), b.onlogwrite) {
                                            e = b.onlogwrite(e.level, h, f); if (null === e) return
                                                ; void 0 !== e && "string" == typeof e && (h = e)
                                } h.length > b.maxLogEntryLength && (h = h.substring(0, b.maxLogEntryLength) + "…"), k.add(h)
                            } if (r && !s && b.throwOnAssertFail) throw _(new Error("Assertion failure"))
                    }
                }
            }, t = function () {
                var e = arguments[0],
                t = "object" == typeof arguments[1], n = t ? arguments[1] : {}, t = t ? [] : Array.prototype.slice.call(arguments, 1); if (
                    n.name = n.name || t[0], n.native = n.native || t[1] || "log", n.level = 0 < n.level ? n.level : t[2] || 40, n.tag = n.tag || t[3] || "", o) {
                        if (
                            !n.name || "string" != typeof n.name || !n.native || "string" != typeof n.native || x && !x[n.native] && "assert" !== n.native || "number" != typeof n.level || n.level <= 0 || "string" != typeof n.tag
                        ) throw new Error("OpenConsole.defineLog was passed an invalid specification value: nam=" + n.name + ";" + (typeof n.name
                        )[0] + ", natc=" + !!x + ", natcnat=" + !!x[n.native] + ", nat=" + n.native + ";" + (typeof n.native)[0] + ", lvl=" + n.level + ";" + (
                            typeof n.level)[0] + ", tag=" + n.tag + ";" + (typeof n.tag)[0]); var i = a.bind(null, n, !1, !1); i.once = a.bind(null, n, !0, !1),
                                i.pretty = a.bind(null, n, !1, !0), i.isRecording = C.bind(null, n), e[n.name] = i, e[n.name.toUpperCase()] = n.level
                } else {
                    i = function (
                    ) { }; i.once = function () { }, i.pretty = function () { }, i.isRecording = function () { return !1 }, e[n.name] = i, e[n.name.toUpperCase(
                    )] = n.level
                }
            }, (e = function () {
                t(this, "detail", "log", 10, ""), t(this, "debug", "debug", 20, "Debug"), t(this, "trace", "trace", 30,
                    "Trace"), t(this, "diag", "log", 30, "Diag"), t(this, "log", "log", 40, ""), t(this, "note", "log", 50, "Note"), t(this, "info", "info", 60
                        , "Info"), t(this, "warn", "warn", 70, "Warning"), t(this, "error", "error", 80, "Error"), t(this, "fault", "error", 90, "Fault"), t(this
                            , "assert", "assert", 100, "Assertion failure"), this.NONE = 1 / 0, this.toString = k.toString, this.toStrings = k.toStrings,
                this.emitBreak = k.emitBreak, this.clear = k.clear, this.config = b, this.stats = n, this.defineLog = o ? t.bind(null, this) : function (e) {
                    t(this, e)
                }
            }).prototype = x || {}, "undefined" == typeof module ? (T.openConsole = new e, T.onLoadOpenConsole && (T.onLoadOpenConsole(
                T.openConsole), T.onLoadOpenConsole = void 0)) : module.exports = new e)
}(), function () {
    "use strict"; var a,
        e = "object" == typeof self ? self : global; function t() {
            for (var e, t, n, i = Array.prototype.slice.call(arguments), o = !1,
                r = 0; r < i.length && !o; r++) {
                    var s = i[r]; switch (typeof s) {
                        case "number": void 0 === t ? t = s : o = !0; break; case "string":
                            void 0 === e && void 0 === t ? e = s : void 0 === n ? n = s : o = !0; break; default: o = !0
                    }
            } if (Object.defineProperty(this, "name", { value: e }),
                Object.defineProperty(this, "ordinal", { value: t }), Object.defineProperty(this, "group", { value: n }), o) throw new Error(
                    "Invalid argument specified for the Sym constructor"); n && (a[n] || (a[n] = { ordinalIndex: [] }), void 0 !== (a[n][this.name] = this
                    ).ordinal && (a[n].ordinalIndex[this.ordinal] = this))
        } e.Sym || (a = {}, t.prototype = {
            eq: function (e) {
                return 1 === arguments.length ? this.ordinal === e.ordinal : Array.prototype.slice.call(arguments, 0).some(function (e) {
                    return this.ordinal === e.ordinal
                }, this)
            }, neq: function (e) {
                return 1 === arguments.length ? this.ordinal !== e.ordinal : Array.prototype.slice.call(arguments, 0).every(function (e) {
                    return this.ordinal !== e.ordinal
                }, this)
            }, gt: function (e) { return this.ordinal > e.ordinal }, gte: function (e) {
                return this.ordinal >= e.ordinal
            }, lt: function (e) { return this.ordinal < e.ordinal }, lte: function (e) {
                return this.ordinal <= e.ordinal
            }, bet: function (e, t) { return this.ordinal >= e.ordinal && this.ordinal <= t.ordinal },
            toString: function () { return this.name || "<sym>" }, toFullString: function () {
                return (this.group ? this.group + ":" : "") + (
                    this.name || "<sym>") + (void 0 === this.ordinal ? "" : " (" + this.ordinal + ")")
            }
        }, t.get = function (e, t) {
            var n = a[e]; if (n) {
                switch (
                typeof t) { case "number": return n.ordinalIndex[t] || null; case "string": return n[t] || null }return null
            }
        },
            "undefined" == typeof exports ? e.Sym = t : exports.Sym = t)
}(), function () {
    "use strict"; var s, v, y, b, w, x, P, k, i, _, E, C, S, o, T, a, z, I, L,
        A, O, j, f, M, r, l, c, u, d, h, e = "object" == typeof self ? self : global; function B(e, t, n) {
            if (e._disposed) throw new Error(
                'Access denied to disposed variant "' + e.name + '"'); if (t && t._disposed) throw new Error(
                    'Cannot add disposed variant "' + t.name + '" as a listener to variant "' + e.name + '"'); if (n && e.listenerLoopAction) {
                        var i = 'Listener loop detected involving variant "' + e.name + '"'; switch (e.listenerLoopAction) {
                            case "warn": G.logger.warn(i)
                                ; break; case "throw": throw new Error(i)
                        }
                    }
        } function N(e, t) {
            e = e && (e.name || e.id || e.desc || e).toString(); e ? e.length > t ? (M.push(
                e.substring(0, t)), M.push("…")) : M.push(e) : M.push(new String(e))
        } function R(e) {
            if (0 !== e) if (1 === e) M.push(".."); else if (
                String.prototype.repeat) M.push("..".repeat(e)); else for (var t = e - 1; t--;)M.push("..")
        } function D(e) {
            var t, n
            ; e._changeInProgress ? e._delayedCompaction = !0 : (t = e._listeners) && (n = t.length,
                e._listenerCount ? 10 <= t.length && t.length >= 2 * e._listenerCount && (t = t.filter(function (e) { return !!e }),
                    e._listenerCount = t.length, e._listeners = t, e._delayedCompaction = !1, f(b, e, n, t.length)) : (t.length = 0, e._delayedCompaction = !1,
                        f(b, e, n, 0)))
        } function G(e) {
            for (var t, n = !0, i = 1; i < arguments.length; i++) {
                var o = arguments[i]; switch (
                    o instanceof s ? "Sym" : typeof o) {
                        case "string": var r = o; break; case "function": this._validator = o; break; case "Sym": n ? (
                            this.intLogVerbosity = o, n = !1) : this.extLogVerbosity = o; break; case "object": Array.isArray(o) ? (this._listeners = o,
                                this._listenerCount = o.length) : this._parent = o
                    }
            } -1 !== (r = r || "variant-#").lastIndexOf("#") && (t = a[r] || 1, a[r] = t + 1, r = r.replace(
                "#", t)), this.name = r, this._value = e
        } function p(e, t, n) {
            return e + function (e) {
                h.setTime(e); var t = h.getHours(), n = h.getMinutes(
                ), i = h.getSeconds(), e = h.getMilliseconds(); return (t < 10 ? "0" + t : t) + ":" + (n < 10 ? "0" + n : n) + ":" + (i < 10 ? "0" + i : i) + "." + (
                    e < 10 ? "00" + e : e < 100 ? "0" + e : e)
            }(d[n]) + " · " + t + c
        } e.Variant || (v = new (s = function (e, t) { this.ord = e, this.name = t })(0), y = new s(1),
            b = new s(0), w = new s(0), x = new s(0), P = new s(0), k = new s(0), i = new s(0, "none"), _ = new s(1, "failures"), E = new s(2, "changes"),
            C = new s(3, "all"), S = new s(4, "debug"), o = new s, I = z = !(a = {}), L = [], f = function (e, t, n, i, o, r, s, a, l) {
                if (z || I) {
                    var c = T - e.ord,
                    u = r || "log", d = void 0 !== a, h = !1, p = !1; switch (M.length = 0, e) {
                        case y: case k:
                            h = t.extLogVerbosity.ord >= E.ord || t.extLogVerbosity === _ && e === k || l,
                                p = t.intLogVerbosity.ord >= E.ord || t.intLogVerbosity === _ && e === k || l, (h || p) && (R(c), M.push(t.name), M.push(": "), N(i,
                                    t.maxStringLen), M.push(e === y ? " ➜ " : " ⇏ "), N(n, t.maxStringLen), o && M.push(", ↻"), t.isLocked() && M.push(", ⚷"), d && (M.push(
                                        ", ✔ ("), N(a, t.maxStringLen), M.push(")")), s && (M.push(", "), M.push(s))); break; case v: case P: var g, m,
                                            h = t.extLogVerbosity.ord >= C.ord, p = t.intLogVerbosity.ord >= C.ord; (h || p) && (R(c), M.push(t.name), M.push(e === v ? ": ◀ " : ": ◁ "), (
                                                m = n.name || n.id || n.desc) || (m = ("function" == (g = typeof n) ? "<anonymous function>" : "object" == g && "<unnamed object>"
                                                ) || "<invalid listener of type " + g + ">"), M.push(m)); break; case w: h = t.extLogVerbosity.ord >= C.ord,
                                                    p = t.intLogVerbosity.ord >= C.ord, (h || p) && (R(c), M.push(t.name), M.push(": ⛒ ")); break; case b: h = t.extLogVerbosity === S,
                                                        p = t.intLogVerbosity === S, (h || p) && (R(c), M.push(t.name), M.push(": "), M.push(n), M.push(" ⇊ "), M.push(i)); break; case x:
                            h = t.extLogVerbosity.ord >= E.ord, p = t.intLogVerbosity.ord >= E.ord, (h || p) && (R(c), t.name && (M.push(t.name), M.push(": ")),
                                M.push(n))
                    }r = M.length ? M.join("") : null; if (null !== r && (!j || j(r)) && (z && h && G.logger[u] && G.logger[u](r), I && p)) {
                        if ("trace" === u
                        ) { var f = new Error; if (!f.stack) try { throw f } catch (e) { } r += f.stack ? f.stack.substring(f.stack.indexOf("\n")) : "" } A.push(
                            Date.now()), L.push(r), L.length > O && (A.shift(), L.shift())
                    }
                }
            }, G.prototype = {
                _listeners: j = null, _listenerCount: T = 0,
                _validator: void 0, _disposed: null, _changeInProgress: !(M = []), _delayedCompaction: !(O = 1e4), _parent: void 0,
                _errorMessage: null, _locked: !(A = []), extLogVerbosity: i, intLogVerbosity: i, listenerLoopAction: "warn", maxStringLen: 30,
                meta: null, read: null, get: function () { return B(this), this._value }, set: function (e, t) {
                    B(this, null, this._changeInProgress)
                    ; var n, i, o, r = this._value, s = !1, a = this._changeInProgress, l = this._listeners, c = !0, u = !1; if (
                        !this._locked || this._key && t === this._key ? this._validator ? (t = "string" == (o = typeof (p = this._validator(e, r, this, this._parent))
                        ) ? p : null, !p || t ? (c = !1, f(k, this, e, r, a, null, t)) : "object" == o && (void 0 !== p.correction && p.correction !== e && (
                            void 0 !== p.uncorrectedValue ? p.uncorrectedValue !== p.correction && (n = p.uncorrectedValue) : e !== p.correction && (n = e),
                            e = p.correction), i = p.note, s = p.forceLog, u = p.skipEquivTest), this._errorMessage = t) : this._errorMessage = null : (c = !1,
                                this._errorMessage = "Variant is locked", f(k, this, e, r, a)), c && (e !== r || u)) {
                                    this._changeInProgress = !0, T++, this._value = e; try {
                                        if (f(y, this, e, r, a, null, i, n, s), l) for (var d = 0, h = l.length; d < h && e === this._value; d++) {
                                            var p, g = l[d], m = g ? typeof g : null
                                            ; "remove" === (p = "function" === m ? g(e, r, this, this._parent
                                            ) : "object" === m && g.handleVarChange ? g instanceof G && g._disposed ? "remove" : g.handleVarChange(e, r, this, this._parent) : null
                                            ) && this.removeListener(g)
                                        }
                                    } finally { a || (this._changeInProgress = !1), T-- }
                    } return this._delayedCompaction && D(this), c
                },
                addListener: function (e) {
                    B(this, e), this._locked !== o && (Array.isArray(e) ? e.forEach(function (e) { this.addListener(e) }, this
                    ) : e && (this._listeners ? -1 === this._listeners.indexOf(e) && this._listeners.push(e) : this._listeners = [e], this._listenerCount++
                        , f(v, this, e)))
                }, removeListener: function (e) {
                    var t = this._listeners, n = !1; if (e && t && t.length) {
                        if (Array.isArray(e) && e.length
                        ) for (var i = e, o = 0, r = 0; r < i.length; r++) {
                            var s = i[r], a = t[o]; s && (s !== a && (o = t.indexOf(s)), -1 !== o && (t[o++] = null,
                                this._listenerCount--, n = !0, f(P, this, s)))
                        } else -1 !== (o = t.indexOf(e)) && (t[o] = null, this._listenerCount--, n = !0, f(P, this, e))
                            ; D(this)
                    } return n
                }, removeAllListeners: function () { this.removeListener(this._listeners) }, handleVarChange: function (e, t, n) {
                    if (this._disposed) return "remove"; var i = this._value && this._value.handleVarChange ? this._value : null
                        ; return i ? i.handleVarChange(e, t, n, n._parent, this) : void 0
                }, dispose: function () {
                    this._disposed || (this._disposed = !0,
                        this._listeners = null, this._listenerCount = 0, this._parent = null, this._validator = null, this._value = null, this._locked = !1,
                        this.meta = null, f(w, this))
                }, lock: function (e, t) {
                    var n = !0 === e || !0 === t, t = e instanceof G.Key ? e : t instanceof G.Key ? t : null
                    ; this._locked === o || this._locked && this._key && t !== this._key || (t && (this._key = t), this._locked = !n || o)
                }, unlock: function (e) {
                    this._locked === o || this._key && e !== this._key || (this._locked = !1, this._key = null)
                }, isLocked: function () {
                    return this._locked === o ? "permanent" : this._locked
                }, getParent: function () { return this._parent }, getErrorString: function () {
                    return this._errorMessage
                }, log: function (e, t) {
                    e && (e === this && (e = this.toString().substring(this.name.length + 2)), f(x, this,
                        e.toString(), null, !1, t))
                }, toString: function () {
                    var e = this.name + ": "; return this._disposed ? e += "disposed" : (
                        e += "value=" + this.get(), this._locked === o ? e += ", permanently locked" : e += ", #-listeners=" + this._listenerCount + (
                            this._locked ? ", locked" : "")),
                        e += ", rec-verbosity=" + this.intLogVerbosity.name + ", log-verbosity=" + this.extLogVerbosity.name
                }
            }, Object.defineProperty(
                G.prototype, "val", { get: G.prototype.get, set: G.prototype.set }), Object.defineProperty(G.prototype, "isDisposed", {
                    get: function () { return this._disposed }
                }), G.addListener = function (t, n, e) {
                    var i, o; e && (i = n, o = e.split("."), n = [], i.forEach(
                        function (e) { e = o.reduce(function (e, t) { return e[t] }, e); n.push(e) })), n.forEach(function (e) { e.addListener(t) })
                },
            G.removeListener = function (t, n, e) {
                var i, o; e && (i = n, o = e.split("."), n = [], i.forEach(function (e) {
                    e = o.reduce(function (e, t) {
                        return e[t]
                    }, e); n.push(e)
                })), n.forEach(function (e) { e.removeListener(t) })
            }, G.enableLogs = (r = !1, function (e, t, n, i, o) {
                z = e, I = t
                , O = "number" == typeof i && i || O, j = o, n || (
                    n = "Variant legend: ➜ Value change,  ⇏ Failed validation,  ✔ Correction,  ⚷ Locked,  ↻ Listener loop,  ◀ Add listener,  ◁ Remove listener,  ⛒ Dispose,  .. Nesting depth"
                    , e && G.logger.log(n), t && !r && (L.unshift(n), A.unshift(Date.now()), r = !0))
            }), (G.log = (l = { name: null, intLogVerbosity: E },
                function (e, t, n) { l.extLogVerbosity = n || G.log.displayAll ? E : i, f(x, l, "" + e, null, !1, t) })).displayAll = !1, G.clearLogs = function () {
                    L.length = 0, A.length = 0
                }, G.getLogs = (h = new Date, function (n, e) {
                    var i = e && e.excludeTimestamps || !1, t = e && e.limit || 1 / 0
                    ; return c = e && e.eol || "\n", n ? (u = [], d = i ? null : [], L.forEach(function (e, t) { t = A[t]; n(e, t) && (u.push(e), i || d.push(t)) })) : (u = L, d = A
                    ), u.length > t && (u = u.slice(u.length - t), d = d && d.slice(d.length - t)), i ? u.join(c) : u.reduce(p, "")
                }), G.define = function (e, t, n) {
                    return n._parent = e, Object.defineProperty(e, t, { get: n.get.bind(n), set: n.set.bind(n) }), n
                }, G.Key = function () { },
            G.logger = e.console, G.LOG_NONE = i, G.LOG_FAILURES = _, G.LOG_CHANGES = E, G.LOG_ALL = C, G.LOG_DEBUG = S,
            "undefined" == typeof exports ? e.Variant = G : exports.Variant = G)
}(), function () {
    "use strict"; var e, t, n, i = window.jigexGlobals,
        o = i.modules; o && !o.base && (o.bundled || (e = navigator.userAgent.includes("Trident/"), n = [i.scriptsDir + "open-console.js",
        i.scriptsDir + "sym.js", i.scriptsDir + "variant.js"], e || n.push(i.scriptsDir + "variant.test.js"), n.forEach(function (e) {
            o.load(
                e, o.update)
        })), t = !(n = "1.12.4"), o.load(["//www.jigsawexplorer.com/program/jquery-1.12.4.min.js",
            i.cdnDomain + "scripts/jquery-" + n + ".min.js", "//code.jquery.com/jquery-1.12.4.min.js"], function () {
                "function" == typeof window.jQuery ? window.jQuery(function () {
                    t = !0, (window.openConsole || window.console).log(
                        'module "jQuery" has initialized'), o.update()
                }) : i.reloadProg("jQuery did not initialize")
            }), (n = function () {
                var e = window.Variant; o.console = window.openConsole, o.Sym = window.Sym, o.Variant = e, o.Variant.logger = window.openConsole,
                    o.Variant.enableLogs(!0, i.status.recVarLogs, !0), o.base = !0
            }).dependenciesReady = function () {
                return !!(
                    window.openConsole && window.Sym && window.Variant && t)
            }, o.addModInit("base", n))
}(), function () {
    "use strict"; var e,
        u = window.jigexGlobals, d = u.modules; d && !d.SonicH5 && ((e = function () {
            var n = u.resDir + "audio/",
            i = "https://s3.amazonaws.com/jigex-pub-res/media/audio/", o = !1, r = "loading", s = "failed"; !function () {
                try {
                    var e = new Audio
                    ; e.volume = .5, o = 1 === e.volume
                } catch (e) { }
            }(); var a, e, t, l = d.console, c = []; d.SonicH5 = function (e) {
                var n, i; c.push(this),
                    this.name = e, this.state = r, this.play = function () {
                        var e = u.audioMuted()
                        ; !this.audio || this.state === s || e && this.state !== r ? l.log.once(
                            "h5 sound failed to play: name=%s, muted=%s, audio=%s, state=%s", this.name, e, !!this.audio, this.state) : (l.detail.once(
                                "sound play: name=" + this.name + ", state=" + this.state + ", audState=" + this.audio.readyState + ", err=" + (
                                    this.audio.error ? this.audio.error.message : "n/a") + ", src=" + this.audio.src), (e = this.audio.play()) && e.catch && e.catch(
                                        function (e) { l.error("AudioSound play error:", e) }), "ready" === this.state && (this.state = "played", l.log.once(
                                            "first h5 sound played: name=%s", this.name)))
                    }, this.stop = function () {
                        this.audio && this.state !== s && (this.audio.pause(),
                            this.audio.currentTime = 0, this.audio.volume = .3)
                    }, this.fadeOut = function () {
                        o ? this.stop() : (n = 0, i = function (e) {
                            var t = e - n; if (n
                            ) if (1e3 <= t) this.stop(); else try { this.audio.volume = .3 * (1 - t / 1e3), requestAnimationFrame(i) } catch (e) {
                                l.error.once(
                                    "h5 audio fade failure: ", e.message)
                            } else n = e, requestAnimationFrame(i)
                        }.bind(this), requestAnimationFrame(i))
                    },
                    this.load = function (e) { this.audio.src = e, this.audio.load(), this.audio.volume = .3, this.state = "ready" }
            }, d.SonicH5.prep = (
                a = function (e, t) {
                    l.detail("sound " + e.name + " initialized:, state=" + e.state + ", audState=" + e.audio.readyState),
                    "ended" === t.type && (e.audio.removeEventListener("ended", e.oninit), setTimeout(function () {
                        e.load(n + e.name + (
                            o ? "-ios.mp3" : ".mp3"))
                    }, 100))
                }, t = !(e = function () {
                    document.removeEventListener("mousedown", e), document.removeEventListener(
                        "pointerdown", e), document.removeEventListener("touchstart", e), c.forEach(function (t) {
                            try {
                                t.audio = new Audio(
                                    n + "silence.mp3")
                            } catch (e) { return void l.error('failed to create audio element for sound "' + t.name + '": ' + e.message) }
                            t.oninit = a.bind(null, t), t.audio.addEventListener("error", function (e) {
                                l.error(
                                    "sound error: name=" + e.name + ", state=" + e.state + ", audState=" + e.audio.readyState + ", src=" + e.audio.src + ", err=" + (
                                        e.audio.error ? e.audio.error.message : "n/a")), e.state === r ? e.audio.src.includes(i) ? (l.warn(
                                            "failed to init " + e.name + " sound"), e.audio.removeEventListener("ended", a), e.load(n + e.name + (o ? "-ios.mp3" : ".mp3"))) : (
                                            e.audio.src = i + "silence.mp3?cb=" + Date.now(), e.play()) : e.audio.src.includes(i) ? (l.warn("failed to load " + e.name + " sound"),
                                                e.state = s) : e.load(i + e.name + (o ? "-ios.mp3?cb=" : ".mp3?cb=") + Date.now())
                            }.bind(null, t)), t.audio.addEventListener("ended",
                                t.oninit), t.audio.volume = .3, t.play()
                        })
                }), function () {
                    t || (t = !0, document.addEventListener("mousedown", e),
                        document.addEventListener("pointerdown", e), document.addEventListener("touchstart", e))
                })
        }).dependenciesReady = function () {
            return !!d.base
        }, d.addModInit("SonicH5", e))
}(), function () {
    "use strict"; var e, p = window.jigexGlobals, g = p.modules
        ; g && !g.Sonic && ((e = function () {
            var t, e, n, i, o, r, s = p.resDir + "audio/", a = window.AudioContext || window.webkitAudioContext, l = null
            , c = g.utils, u = g.console, d = !1, h = g.utils.localStore; if (p.forceAltAudio = h.getItem("jigex-alt-audio"), p.forceAltAudio) t = !0,
                u.log("forcing h5 audio"); else try { a && (l = new a), t = !l } catch (e) {
                    u.error("failed to create audio context: " + e.message), t = !0
                } t ? g.Sonic = g.SonicH5 : (g.Sonic = function (e) {
                    this.name = e, this.gain = null, this.buffer = null, this.source = null, this.failed = !1,
                    this.play = function () {
                        var e = p.audioMuted(), t = "silence" === this.name; if (!this.isReady() || e && !t) t ? u.log.once(
                            "silence failed to play: mute=%s, buff=%s, failed=%s", e, !!this.buffer, this.failed) : u.log.once(
                                "sound failed to play: name=%s, muted=%s, buff=%s, sil=%s, failed=%s", this.name, e, !!this.buffer, d, this.failed); else try {
                                    var n = l.createBufferSource(), i = l.createGain(); i.gain.value = .3, n.buffer = this.buffer, n.connect(i), i.connect(l.destination)
                                        , n.start(0), this.source = n, this.gain = i, t ? d = !0 : u.log.once("first sound played: name=%s", this.name)
                                } catch (e) {
                                    this.failed = !0
                                    , u.error('sound "' + this.name + '" failed to play: ', e.message)
                                }
                    }, this.fadeOut = function () {
                        try {
                            this.gain && this.gain.gain && this.gain.gain.linearRampToValueAtTime(0, l.currentTime + 1), this.source && this.source.stop(
                                l.currentTime + 1.1)
                        } catch (e) { u.error('sound "' + this.name + '" failed to fade out: ', e.message) }
                    }, this.isReady = function () {
                        return !!this.buffer && (d || "silence" === this.name) && !this.failed
                    }; var n = new c.WebReq(s + e + ".mp3",
                        "https://s3.amazonaws.com/jigex-pub-res/media/audio/" + e + ".mp3"); n.sonic = this, n.onload = function () {
                            try {
                                u.log(
                                    "typ=%s, len=%s", n.response, n.response ? n.response.byteLength : "n/a"), l.decodeAudioData(n.response, function (e) {
                                        n.sonic.buffer = e, u.log('sound "' + n.sonic.name + '" is loaded')
                                    }, function (e) {
                                        var t = "n/a"; e && (
                                            t = "string" == typeof e ? e : e.err || e.message || "unknown"), u.error(
                                                'Sonic error for sound "' + n.sonic.name + '" (falling back to HTML5 audio): ' + t), g.Sonic = g.SonicH5
                                    })
                            } catch (e) {
                                u.error(
                                    'failed to decode audio file "' + n.sonic.name + '": ' + e.message)
                            }
                        }, n.send()
                }, g.Sonic.prep = (e = !1, n = new g.Sonic("silence"),
                    i = function () {
                        n.isReady() && (document.removeEventListener("mousedown", i), document.removeEventListener("pointerdown", i),
                            document.removeEventListener("touchstart", i), n.play(), u.log("sound system is ready"))
                    }, function () {
                        e || (e = !0,
                            document.addEventListener("mousedown", i), document.addEventListener("pointerdown", i), document.addEventListener(
                                "touchstart", i))
                    })), p.audioMuted = (o = "jigex-opt-muted", r = "true" === h.getItem(o), function (e) {
                        if (void 0 === e) return r; r = !!e
                            ; try { h.setItem(o, r.toString()) } catch (e) { u.warn("failed to write mute change to local store. err=" + e.message) }
                    }), u.log(
                        "using %s audio", t ? "html5" : "web")
        }).dependenciesReady = function () { return !!(g.base && g.utils && g.SonicH5) }, g.addModInit(
            "Sonic", e))
}(), function () {
    "use strict"; var e, se = window.jigexGlobals.modules; se && !se.niftybar && ((e = function () {
        function o(
            e, t) {
                var n = e.attributes; if (n) for (var i = n.length - 1; 0 <= i; i--) {
                    var o = n[i]; if (o.name === t
                    ) return void 0 === o.value || "undefined" === o.value || "" === o.value || !!o.value
                } return !1
        } function s(e, t, n) {
            return Function.prototype.bind ? e.bind(t, n) : function () { e.call(t, n) }
        } function r(e, t, n, i) {
            var o = n ? e.button.position(
            ) : e.button.offset(), n = m.width(); return o.top += e.button.height() + (i || 0), o.left -= Math.round(t / 2) - Math.round(e.width() / 2),
                o.left = Math.max(0, o.left), o.left = Math.min(n - t, o.left), o
        } var u, d, a = window.jQuery, n = {}, l = {}, c = {}, e = 1, i = 0, h = 0, p = 0,
            g = se.console, m = {
                element: null, x: function () { return this.element ? this.element.offset().left : 0 }, y: function () {
                    return this.element ? this.element.offset().top : 0
                }, width: function () {
                    return this.element ? Math.min(
                        this.element[0].clientWidth, window.innerWidth) : window.innerWidth
                }, height: function () {
                    return this.element ? Math.min(
                        this.element[0].clientHeight, window.innerHeight) : window.innerHeight
                }
            }, f = { top: 0, left: 0, visibility: "visible", opacity: "0" },
            v = window.performance && window.performance.now ? function () { return window.performance.now() } : function () { return Date.now() },
            y = (u = [], function (e, t, n, i, o) {
                if (window.requestAnimationFrame) {
                    var r = u.length, s = function (e, t) {
                        for (
                            var n = u.length - 1; 0 <= n; n--) { var i = u[n]; if (i.target === e && i.prop === t) return i } return null
                    }(e, t), a = !!s, l = parseFloat(e.css(t)
                    ); if (isNaN(l)) {
                        var c = e.attr("id"); return g.error(
                            "Invalid property value for tweening: targ=" + c + ", prop=" + t + ", val=" + e.css(t)), void b(e, t, n, o)
                    } (s = s || {}).target = e,
                        s.prop = t, s.from = l, s.to = n, s.duration = i, s.onEnd = o, s.done = !1, s.start = v(), a || u.push(s), r || window.requestAnimationFrame(d)
                } else b(e, t, n, o)
            }); function b(e, t, n, i) { e.css(t, n), i && setTimeout(function () { i(e) }, 1) } var w, t, x, P, k, _, E = (P = !(d = function () {
                for (var e, t, n = !0, i = u.length - 1; 0 <= i; i--) {
                    var o = u[i]; o.done || (e = o, t = void 0, t = v() - e.start, e.done = t >= e.duration,
                        t = e.done ? e.to : e.from + t / e.duration * (e.to - e.from), e.target.css(e.prop, t), e.done && e.onEnd && e.onEnd(e.target)),
                        o.done && n ? u.pop() : n = !1
                } u.length && window.requestAnimationFrame(d)
            }), k = 0, w = 1, t = [], {
                init: function () {
                    P || (x = _.getToolTip(),
                        P = !0)
                }, trigger: function (e) { v() - k < ie.tooltipDelay ? this.show(e) : e._tipTimer = setTimeout(this.show, ie.tooltipDelay, e) },
                show: function (e) {
                    var t; e && (!e._tooltipWidth && e.tooltip && (e._tooltipWidth = ie.measure(e.tooltip)), t = r(e, e._tooltipWidth, !1
                        , 20), e._tipTimer = null, E.showAt(t, e.tooltip))
                }, showAt: function (e, t, n) {
                    var i = e.left, e = e.top, o = n ? _.getToolTip() : x; o.html(t)
                        , o.isShowing || (f.top = e.toString() + "px", f.left = i.toString() + "px", o.css(f), y(o, "opacity", 1, ie.tweenPeriod), o.isShowing = !0)
                        , n && setTimeout(function () { o.deactivate(o) }, n)
                }, hide: function (e) {
                    e && clearTimeout(e._tipTimer), x.isShowing && x.deactivate()
                }
            }); function C() {
                var e = "niftybar-ttip-" + w++, t = a('<div id="' + e + '"></div>'); return t.isShowing = !1, t.timestamp = 0,
                    t.deactivate = function () {
                        this.isShowing && (this.isShowing = !1, k = v(), y(t, "opacity", 0, ie.tweenPeriod, function (e) {
                            e.css(
                                "visibility", "hidden"), e !== x && _.free(e)
                        }.bind(null, this)))
                    }, t.addClass("niftybar-tooltip"), a("body").append(t), t
            }
        var S = function (e) {
            var t = e.find(
                ".niftybar-button, .niftybar-icon-button, .niftybar-tab-button, .niftybar-dialog-button, .niftybar-menu-button")
            ; this._currTab = null, this.id = e[0].id, this.bar = e, this.buttons = [], this.addButtons = T, this.switchButtons = z, this.id || (
                this.id = "bar-" + i++), (n[this.id] = this).addButtons(t)
        }; function T(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var i = new L(a(e[n]),
                    this); this.buttons.push(i), t.push(i)
            } return t
        } function z(e) {
            for (var t = this.buttons.length - 1; 0 <= t; t--) {
                var n = this.buttons[t], i = -1 === e.indexOf(n.id) ? "none" : "flex"; n.button.css("display", i)
            }
        } function I() {
            if (
                this._hoverTimer = null, this._autoClick && this.enabled()) {
                    this._autoClicked = !0; try { this.click() } catch (e) {
                        this._autoClicked = !1
                    }
            } else this.handleEvent({ type: "mousehover", data: this })
        } var L = function (e, t) {
            var n = e.data("tooltip"),
            i = e.data("panel"); this._enabled = !0, this._toggled = o(e[0], "data-toggled"), this._clickTimestamp = 0, this._hoverTimer = null,
                this._tipTimer = null, this._toolbar = t, this._response = e.data("response"), this._color = e.css("color"),
                this._isToggledCallback = null, this._selTabStyle = "niftybar-selected-tab", this._autoClick = o(e[0], "data-auto-click"),
                this._autoClicked = !1, this._touched = !1, this.id = e[0].id, this.button = e, this.click = M, this.refresh = B, this.enabled = R,
                this.toggled = N, this.handleEvent = j, this.tooltip = n || null, this.width = D, this.height = G, this.panel = i ? c[i] : null, e.hasClass(
                    "niftybar-button") ? this.style = 0 : e.hasClass("niftybar-icon-button") ? (this.style = 1, this.svg = e.children("svg:first")
                    ) : e.hasClass("niftybar-tab-button") ? this.style = 2 : e.hasClass("niftybar-menu-button") ? this.style = 3 : e.hasClass(
                        "niftybar-dialog-button") && (this.style = 4), this.tooltip && (this._tooltipWidth = ie.measure(this.tooltip)),
                this.onclick = e[0].onclick || null, e[0].onclick = null, e.on("click", this, j), this.onmouseenter = e[0].onmouseenter || null,
                e[0].onmouseenter = null, e.on("mouseenter", this, j), this.onmouseleave = e[0].onmouseleave || null, e[0].onmouseleave = null, e.on(
                    "mouseleave", this, j), this.onmousemove = e[0].onmousemove || null, e[0].onmousemove = null, e.on("mousemove", this, j), e.on(
                        "pointerdown", this, j), e.on("pointerup", this, j), e.on("touchstart", this, j), e.on("touchend", this, j), this.id || (
                            this.id = "button-" + h++), l[this.id] = this, e[0].hasAttribute("data-selected") && this.toggled(!0), e[0].hasAttribute(
                                "data-selected-tab-style") && (this._selTabStyle = e.data("selected-tab-style"))
        }; function A(e) {
            return (e = e.button.closest(
                ".niftybar-panel, .niftybar-dialog-panel, .niftybar-left-slide-panel")).length ? c[e[0].id] : null
        } function O(e) {
            var t,
            n = e.panel, i = !n.visible(); i && (2 !== n.type && (t = r(e, n._width, !0), f.top = t.top + "px", f.left = t.left + "px", n.panel.css(f)),
                e._autoClicked && !e._touched && (n._autoClose = !0)), n.visible(i)
        } function j(e) {
            var t = e.data,
            n = e.originalEvent && "touch" === e.originalEvent.pointerType || "touchstart" === e.type || "touchend" === e.type; if (!t
            ) throw new Error("Unrecognized NiftyBar button id: " + e.target.id); var i = t["on" + e.type]; switch (e.type) {
                case "touchstart":
                case "pointerdown": n && (t._hoverTimer && t.enabled() && (clearTimeout(t._hoverTimer), t._hoverTimer = null), E.hide(t),
                    t._touched = !0, se.niftybar.touchScreen = !0); break; case "touchend": case "pointerup": break; case "click": if (t.enabled()) {
                        var o,
                        r = v(); if (r - t._clickTimestamp < ie.debouncePeriod) return; t._clickTimestamp = r, E.hide(t),
                            ie.onAnyButtonClick && ie.onAnyButtonClick(t), t._response ? (r = A(t)) && (r.visible(!1), r.handleResponse(t)
                            ) : 2 === t.style ? t.toggled(!0) : (3 === t.style && (o = A(t)) && o.visible(!1), t.panel && O(t)), t._autoClicked = !1, t._touched = !1
                    } break
                    ; case "mouseenter": ie.mouseHoverDelay && t.enabled() && !t._touched && (t._hoverTimer = setTimeout(s(I, t), ie.mouseHoverDelay)),
                        t.tooltip && E.trigger(t); break; case "mouseleave": t._hoverTimer && t.enabled() && (clearTimeout(t._hoverTimer),
                            t._hoverTimer = null), E.hide(t); break; case "mousehover": break; case "mousemove": t._hoverTimer && t.enabled() && (clearTimeout(
                                t._hoverTimer), t._hoverTimer = setTimeout(s(I, t), ie.mouseHoverDelay))
            }i && t.enabled() && (e.niftybarElement = t, i(e))
        }
        function M() { this.button.trigger("click") } function B() {
            switch (this.style) {
                case 1: this.svg.css("color", this.enabled(
                ) ? this._color : "#b8b8b8"), this.button.css("background-color", this._toggled ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0)")
                    ; break; case 2: this._toggled ? this.button.addClass(this._selTabStyle) : this.button.removeClass(this._selTabStyle); break
                        ; case 3: this.enabled() ? this.button.removeClass("niftybar-disabled") : this.button.addClass("niftybar-disabled")
            }
        }
        function N(e) {
            if (void 0 === e) return this._toggled; "function" == typeof e ? (this._isToggledCallback = e, this.toggled(
                this._isToggledCallback())) : (e = "toggle" === e ? !this._toggled : !!e, this._toggled !== e && (this._toggled = e, this.refresh(),
                    2 === this.style && (e ? (e = this._toolbar._currTab, this._toolbar._currTab = this, e && e.toggled(!1),
                        this.panel && this.panel.visible(!0)) : this.panel && this.panel.visible(!1, !0))))
        } function R(e) {
            if (void 0 === e
            ) return this._enabled && (ie.enabled || 4 === this.style); e = !!e, this._enabled !== e && (this._enabled = e, this.refresh())
        }
        function D() { return this.button ? this.button.width() : void 0 } function G() { return this.button ? this.button.height() : void 0 }
        var V, F, H, W, U, q = (F = !(_ = { getToolTip: function () { return t.pop() || C() }, free: function (e) { t.push(e) } }), V = x = null,
            window.addEventListener("keyup", function (e) { V && 27 === e.which && V._dismissable && V.visible(!1) }), H = function (e, t) {
                if (
                    void 0 === this._showing && (this._showing = "block" === this.panel.css("display")), !arguments.length) return this._showing
                        ; "toggle" === e && (e = !this._showing), e ? (this._showing = !0, this.panel.css("display", "block"), t ? this.panel.css("opacity", 1
                        ) : 3 === this.type ? (e = V, this.panel.css("left", -this._width), y(this.panel, "left", 0, ie.tweenPeriod), V = this, e && e.visible(!1)
                        ) : y(this.panel, "opacity", 1, ie.tweenPeriod), 0 !== this.type && setTimeout(s(Q, this), 0), this.onShow && this.onShow(this)) : (
                            this._showing = !1, this._autoClose = !1, this._actOrder = 0, t ? (this.panel.css("opacity", 0), K(this.panel)) : 3 === this.type ? (y(
                                this.panel, "left", -this._width, ie.tweenPeriod, K), V === this && (V = null)) : y(this.panel, "opacity", 0, ie.tweenPeriod, K))
            }, W = {},
            U = function () {
                var e = this.panel.width(), t = this.panel.height(), n = m.width(
                ) || document.documentElement.clientWidth || document.body.clientWidth, i = m.height(
                ) || document.documentElement.clientHeight || document.body.clientHeight; W.left = m.x() + Math.round((n - e) / 2), W.top = m.y(
                ) + Math.round((i - t) / 2), this.panel.offset(W)
            }, function (e) {
                var t = !o(e[0], "data-no-dismiss"); this.panel = e, this.id = e[0].id,
                    this.visible = H, this.response = null, this.center = U, this.onResponse = null, this.onShow = null, this.handleResponse = Z,
                    this._width = e.width(), this._actOrder = 0, this._autoClose = !1, this._autoCloseTimer = null, e.hasClass("niftybar-panel") ? (
                        this.type = 1, this._dismissable = t, this._dismissByClick = t) : e.hasClass("niftybar-sub-panel") ? (this.type = 0,
                            this._dismissable = !1, this._dismissByClick = !1) : e.hasClass("niftybar-dialog-panel") ? (this.type = 2, this._dismissable = t,
                                this._dismissByClick = t && 0 === e.find("[data-response]").length) : e.hasClass("niftybar-left-slide-panel") && (this.type = 3,
                                    this._dismissable = t, this._dismissByClick = t), this.id || (this.id = "panel-" + p++), e.mouseenter(s($, this)), e.mouseleave(s(ee,
                                        this)), c[this.id] = this, F || (F = !0, window.document.addEventListener("keydown", X, !1), window.document.addEventListener(
                                            "click", J, !1), window.document.addEventListener("dblclick", J, !1), window.document.addEventListener("touchend", J, !1))
            })
            ; function Y() {
                var e, t, n = null; for (e in c) c.hasOwnProperty(e) && (t = c[e], (!n || t._actOrder > n._actOrder) && (n = t))
                    ; return n && n._actOrder ? n : null
            } function X(e) {
                var t; void 0 === (e = e || window.event).which && (e.which = e.keyCode), 27 === e.which ? (
                    t = Y()) && t._dismissable && (t.visible(!1), t.handleResponse("cancel")) : 13 === e.which && (e = a("input, textarea").is(":focus"), (
                        t = (t = Y()) ? t.panel.find(".niftybar-default-button").filter(":visible") : a()).length && !e && (t = l[t[0].id]) && t.click())
            }
        function J(e) {
            var t, n = Y(); n && n._dismissByClick && (t = n.panel, a(e.target).closest(t).length || (
                "touchend" === e.type ? setTimeout(s(n.visible, n, !1), 100) : n.visible(!1)))
        } function K(e) { e.css("display", "none") } function Q(
        ) { this._actOrder = e++ } function Z(e) {
            "string" != typeof e && (e = e._response), this.response = e, this.onResponse && this.onResponse(
                e)
        } function $() { this._autoCloseTimer && clearTimeout(this._autoCloseTimer) } function ee() {
            this._autoClose && (
                this._autoCloseTimer = setTimeout(s(te, this), 500))
        } function te() { this.visible(!1) } var ne, ie = {
            getBar: function (e) {
                return n[e]
            }, getBtn: function (e) { return l[e] }, getPnl: function (e) { return c[e] }, setRoot: (ne = null, function (e) {
                "object" == typeof (ne = e) && (m.element = ne instanceof a ? ne : a(ne))
            }), showTooltip: E.showAt, onAnyButtonClick: null,
            measure: function (e) { return ie.ruler.html(e), ie.ruler.width() + 24 }, mouseHoverDelay: 200, tooltipDelay: 1200, tweenPeriod: 200,
            debouncePeriod: 250, touchScreen: !1
        }; ie.enabledVar = Variant.define(ie, "enabled", new Variant(!0, "niftybar.enabled"))
            ; var oe = a(".niftybar, .niftybar-dialog-bar"), re = a(
                ".niftybar-panel, .niftybar-sub-panel, .niftybar-dialog-panel, .niftybar-left-slide-panel"); ie.ruler = a(
                    '<span id="niftybar-ruler"></span>'), ie.ruler.addClass("niftybar-ruler"), a("body").append(ie.ruler), E.init(), re.each(
                        function (e, t) { new q(a(t)) }), oe.each(function (e, t) { new S(a(t)) }), se.niftybar = ie
    }).dependenciesReady = function () {
        return !(
            !se.base || !se.utils)
    }, se.addModInit("niftybar", e))
}(), function () {
    "use strict"; var e, y = window.jigexGlobals, b = y.modules
        ; b && !b.utils && ((e = function () {
            var i, a, l, c, u, t, n, o, r, s, d, h, p, g = {}, m = b.console; function f(e, t) {
                var n, i = e.altUrl || (
                    t ? e.url : null), o = e.image; return t && (i += (i.includes("?") ? "&" : "?") + "cb=" + Math.round(1e3 * Math.random())), !!i && (o ? (
                        n = new Image, e.currUrl = i, (e.image = n).crossOrigin = "anonymous", n.onload = l, n.onerror = u, n.webReq = e, n.src = i) : (
                        n = new XMLHttpRequest, e.currUrl = i, e.xhr = n, e.progress = 0, e.total = 0, n.open("GET", i, !0),
                        n.responseType = e.isBinary ? "arraybuffer" : "text", n.onload = c, n.onerror = u, n.onprogress = a, n.webReq = e, n.send()), !0)
            }
            function e(e, t, n) {
                var i, o = e.includes(y.fetchPath) ? "%3F" : "?", r = e.indexOf(o), s = -1 === r ? e.length - 4 : r - 4, s = ".webm" === (
                    o = e.substring(s, 4 + s).toLowerCase()) || ".mp3" === o; (void 0 === n ? ".jpg" === o || "jpeg" === o || ".png" === o || ".gif" === o : !!n) ? ((
                        i = new Image).crossOrigin = "anonymous", i.onload = l, i.onerror = u, (i.webReq = this).image = i) : ((i = function (t) {
                            var n = new XMLHttpRequest; try { n.open("GET", t, !0) } catch (e) {
                                m.log("webReq trapped: msg=" + e.message + ", url=" + t), (
                                    n = new XMLHttpRequest).open("GET", t, !0)
                            } return n
                        }(e)).responseType = s ? "arraybuffer" : "text", i.onload = c, i.onerror = u,
                            i.onprogress = a, (i.webReq = this).xhr = i, this.isBinary = s, this.isJson = "json" === o, this.onload = null, this.onerror = null,
                            this.state = 0, this.image = null, this.response = null, this.progress = 0, this.total = 0, this.image = null), this.url = e, this.currUrl = e,
                        this.altUrl = t, this.onload = null, this.onerror = null, this.state = 0, this.failedOnChromeBug = !1, this.otherParmsPresent = -1 !== r,
                        this.canceled = !1
            } function v(e, t, n) { e && t && (this.setCount = 0, this.set(e, n ? t.bind(n) : t)) } g.RADIANS_PER_DEGREE = Math.PI / 180,
                g.SHOW_NONE = 0, g.SHOW_ALWAYS = 1, g.SHOW_FOR_DBG_ONLY = 2, g.SHOW_FOR_FIELD_ONLY = 3, g.test = function () { }, g.msgBox = function (e) {
                    alert(e)
                }, g.List = function () { this.head = null, this.tail = null, this.length = 0, this._freeNodes = [] },
                g.List.prototype.forEach = function (e) { for (var t = this.head; t;)e(t.item), t = t.next }, g.List.prototype._getNode = function (e) {
                    if (this._freeNodes.length) { var t = this._freeNodes.pop(); return t.item = e, t } return {
                        next: null, prev: null, item: e,
                        imaLinkNode: !0
                    }
                }, g.List.prototype.addFirst = function (e) {
                    e = e.imaLinkNode ? e : this._getNode(e); return this.head ? (
                        e.next = this.head, this.head.prev = e, this.head = e) : (this.head = e, this.tail = e), this.length++, e
                },
                g.List.prototype.addLast = function (e) {
                    e = e.imaLinkNode ? e : this._getNode(e); return this.tail ? (e.prev = this.tail,
                        this.tail.next = e) : this.head = e, this.tail = e, this.length++, e
                }, g.List.prototype.addBefore = function (e, t) {
                    if (t && !t.item
                    ) throw new Error("Utils: Reference to freed node not allowed."); if (t && t.prev) {
                        var n = e.imaLinkNode ? e : this._getNode(e)
                        ; return n.next = t, n.prev = t.prev, t.prev.next = n, t.prev = n, this.length++, n
                    } return this.addFirst(e)
                },
                g.List.prototype.addAfter = function (e, t) {
                    if (t && !t.item) throw new Error("utils: Reference to freed node not allowed."); if (
                        t && t.next) { var n = e.imaLinkNode ? e : this._getNode(e); return n.next = t.next, (n.prev = t).next.prev = n, t.next = n, this.length++, n }
                    return this.addLast(e)
                }, g.List.prototype.moveToBeginning = function (e) {
                    return e !== this.head && (this.moveBefore(e, this.head)
                        , !0)
                }, g.List.prototype.moveToEnd = function (e) { return e !== this.tail && (this.moveAfter(e, this.tail), !0) },
                g.List.prototype.moveBefore = function (e, t) { this.unlink(e), this.addBefore(e, t) }, g.List.prototype.moveAfter = function (e, t) {
                    this.unlink(e), this.addAfter(e, t)
                }, g.List.prototype.unlinkFirst = function () {
                    var e = null; if (this.head) if (e = this.head,
                        this.head = e.next, this.length--, this.head) try { this.head.prev = null } catch (e) {
                            m.warn(
                                "List.unlinkFirst: Strange null head encountered"), this.head = null, this.tail = null
                        } else this.tail = null; return e.next = null,
                            e.prev = null, e
                }, g.List.prototype.unlinkLast = function () {
                    var e = null; return this.tail && (e = this.tail, this.tail = e.prev,
                        this.length--, this.tail ? this.tail.next = null : this.head = null), e.next = null, e.prev = null, e
                }, g.List.prototype.unlink = function (
                    e) {
                        return this.head === e ? this.unlinkFirst() : this.tail === e ? this.unlinkLast() : e ? (e.prev.next = e.next, e.next.prev = e.prev,
                            this.length--, e.next = null, e.prev = null, e) : void m.warn("Link.unlink: Null node specified")
                },
                g.List.prototype.find = function (e) { for (var t = this.tail; t;) { if (e(t.item)) return t; t = t.prev } return null },
                g.List.prototype.findLast = function (e) { for (var t = this.tail; t;) { if (e(t.item)) return t; t = t.prev } return null },
                g.List.prototype.dispose = function (e) {
                    var t = e.item; return t && (this.unlink(e), e.prev = e.next = e.item = null,
                        this._freeNodes.push(e)), t
                }, g.List.prototype.sanityCheck = function () {
                    for (var e = this.head, t = e; t && t.next;)if ((t = t.next) === e
                    ) throw new Error("Error: Circular linked list detected.")
                }, g.WebReq = (i = function (e) {
                    switch (e.state) {
                        case 1: e.state = 2, f(e,
                            !1) || i(e); break; case 2: e.state = 3, f(e, !e.otherParmsPresent) || i(e); break; case 3: e.state = 4, e.failedOnChromeBug || m.log(
                                "Download failure", e.url), e.onerror && e.onerror(e)
                    }
                }, a = function (e) {
                    var t = e.target.webReq; t && !t.canceled && (
                        t.progress = e.loaded, t.total = e.total)
                }, l = function (e) {
                    var t = e.target, n = t.webReq; if (!n.canceled) {
                        if (4 === n.state) m.warn(
                            "onImageLoad invoked after image load failure"); else if (5 === n.state) return void m.warn(
                                "attempted to invoke onImageLoad a second time"); if (n && t.width && t.height) {
                                    if (n.state = 5, n.response = t, n.onload) {
                                        try {
                                            return void n.onload(n)
                                        } catch (e) { m.error("Failed to load image:", e) } u(e)
                                    }
                                } else u(e)
                    }
                }, c = function (e) {
                    var t = e.target,
                    n = t.webReq; if (n) {
                        if (!n.canceled) {
                            if (4 === n.state) m.warn("onLoad invoked after file load failure"); else if (5 === n.state
                            ) return void m.warn("attempted to invoke onLoad a second time"); 200 !== t.status || n.isJson && "{" !== t.responseText[0] ? u(e) : (
                                n.failedOnChromeBug = !1, n.state = 5, n.response = n.isBinary ? t.response : n.isJson ? JSON.parse(t.responseText) : t.responseText,
                                n.onload && n.onload(n))
                        }
                    } else u(e)
                }, u = function (e) {
                    var t, n = e.target.webReq; n && n.canceled || (
                        n && n.xhr && 4 === n.xhr.readyState && 0 === n.xhr.status && navigator.userAgent.includes("Chrome") ? (n.failedOnChromeBug = !0, m.log(
                            "Chrome download bug encountered")) : n ? n.failedOnChromeBug = !1 : m.warn("null webReq encountered"), (e = (t = n) ? t.image : null
                            ) ? m.log(
                                "image download failure: cmplt=" + e.complete + ", w=" + e.width + ", h=" + e.height + ", nw=" + e.naturalWidth + ", nh=" + e.naturalHeight + ", url=" + e.src
                            ) : m.log(
                                "file download failure: state=" + t.xhr.readyState + ", status=" + t.xhr.status + ", prog=" + t.progress + ", tot=" + t.total + ", status text=" + t.xhr.statusText + ", url=" + t.currUrl
                            ), i(n))
                }, e.prototype = {
                    send: function () { this.state = 1, this.image ? this.image.src = this.url : this.xhr.send() }, cancel: function (
                    ) {
                        0 < this.state && (this.canceled = !0, this.image ? this.image.src = "" : this.xhr.abort(), m.log("webReq canceled: url=" + this.url))
                    }
                }, e), g.postMsg = function (e, t) { var n = new XMLHttpRequest; n.open("POST", e, !0), n.send(t) }, g.genGuuid = function (e) {
                    for (
                        var t = Date.now(), n = Math.random(); 0 === n;)n = Math.random(); t = t.toString(36) + "-" + n.toString(36).substr(2); return e && (t = e + t),
                            t
                }, g.isPowerOfTwo = function (e) {
                    switch (e) {
                        case 2: case 4: case 8: case 16: case 32: case 64: case 256: case 512: case 1024:
                        case 2048: case 4096: case 8192: case 16384: case 32768: return !0; default: return !1
                    }
                }, g.stringToVarName = function (e) {
                    var t = null
                    ; if (e) {
                        t = ["_"]; for (var n = 0, i = e.length; n < i; n++) {
                            var o = e[n]; "a" <= o && o <= "z" || "A" <= o && o <= "Z" || "0" <= o && o <= "9" ? t.push(o
                            ) : t.push("_")
                        } t = t.join("")
                    } return t
                }, g.xor = function (e, t) { return (e || t) && !(e && t) }, g.sine = (n = t = null, function (e) {
                    switch (e) {
                        case 0: return 0; case 90: return 1; case 180: return 0; case 270: return -1; default: return e !== t && (t = e, n = Math.sin(
                            e * g.RADIANS_PER_DEGREE)), n
                    }
                }), g.cosine = (r = o = null, function (e) {
                    switch (e) {
                        case 0: return 1; case 90: return 0; case 180:
                            return -1; case 270: return 0; default: return e !== o && (o = e, r = Math.cos(e * g.RADIANS_PER_DEGREE)), r
                    }
                }),
                g.fileNameFromPath = function (e) {
                    if (e) {
                        var t = 0 === e.indexOf("http") ? "/" : "\\", t = e.lastIndexOf(t); if (-1 !== t) return e.slice(
                            t + 1)
                    } return ""
                }, g.localStore = function () {
                    var t = null; try {
                        localStorage.setItem("jigex-testkey", "testvalue"),
                        localStorage.removeItem("jigex-testkey")
                    } catch (e) { m.log("localStorage is not enabled"), t = {} } return t ? (t.key = function (e) {
                        return Object.keys(this)[e]
                    }, t.getItem = function (e) { return this[e] }, t.setItem = function (e, t) { this[e] = t },
                        t.removeItem = function (e) { void 0 !== this[e] && delete this[e] }, t.clear = function () {
                            Object.keys(this).forEach(function (e) {
                                delete t[e]
                            })
                        }, t.toString = function () { return JSON.stringify(this) }, t.disable = function () {
                            m.warn(
                                "polyStore should not be disabled")
                        }, Object.defineProperty(t, "length", { get: function () { return Object.keys(t).length } }), t
                    ) : (Storage.prototype.disable = function () {
                        function e() { return null } g.localStore = {
                            key: e, getItem: e, setItem: e, removeItem: e,
                            clear: e, toString: e, disable: e, length: 0
                        }, m.log("localStorage is disabled")
                    }, localStorage)
                }(), g.secureString = function (e) {
                    return e && (e.includes("&") && (e = (e = (e = (e = (e = (e = e.replace(/&/g, "&amp;")).replace(/&amp;amp;/g, "&amp;")).replace(
                        /&amp;lt;/g, "&lt;")).replace(/&amp;gt;/g, "&gt;")).replace(/&amp;apos;/g, "&apos;")).replace(/&amp;quot;/g, "&quot;")), e = (
                            e = (e = (e = e.replace(/</g, "&lt;")).replace(/>/g, "&gt;")).replace(/'/g, "&apos;")).replace(/"/g, "&quot;")), e
                },
                g.convertTimestampToLocalDateAndTime = function (e) {
                    return new Date(e || 0).toLocaleString(navigator.language || "en-US", {
                        year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit"
                    })
                }, g.convertTimestampToTime = function (e) {
                    if (
                        !e) return "00:00:00.000"; var t = new Date(e), n = t.getHours(), i = t.getMinutes(), e = t.getSeconds(), t = t.getMilliseconds(); return (
                            n < 10 ? "0" + n : n) + ":" + (i < 10 ? "0" + i : i) + ":" + (e < 10 ? "0" + e : e) + "." + (t < 10 ? "00" + t : t < 100 ? "0" + t : t)
                }, g.stringify = function (e, t, n, i) {
                    return JSON.stringify(e, (o = t, s = [], a = [], r = (r = i) || function (e, t) {
                        return s[0] === t ? "[Circular ~]" : "[Circular ~." + a.slice(0,
                            s.indexOf(t)).join(".") + "]"
                    }, function (e, t) {
                        var n; return 0 < s.length ? (~(n = s.indexOf(this)) ? s.splice(n + 1) : s.push(this),
                            ~n ? a.splice(n, 1 / 0, e) : a.push(e), ~s.indexOf(t) && (t = r.call(this, e, t))) : s.push(t), o ? o.call(this, e, t) : t
                    }), n); var o, r, s, a
                },
                g.sysTiming = (s = 1 / 0, d = 0, h = [], p = [], v.prototype = {
                    set: function (e, t) {
                        this._start = performance.now(),
                        this._duration = e || this._duration, this._callback = t || this._callback, this.expired = !1, this.startDate = Date.now(),
                        this.checked = 0, this.setCount++, p.includes(this) || p.push(this)
                    }, clear: function () { this._start = NaN }, armed: function () {
                        return !isNaN(this._start)
                    }, execute: function (e) {
                        var t; this.armed() && (t = this._callback, this.clear(), this.expired = !!e, t(
                            this))
                    }, log: function (e) {
                        m.log("Timer log: msg=" + e + ", expd=" + !!this.expired + ", elap=" + (this.armed() ? (performance.now(
                        ) - this._start).toFixed(2) : "n/a") + ", qued=" + p.includes(this) + ", chkd=" + (Date.now() - this.checked) + "mS ago")
                    }
                },
                    window.requestAnimationFrame ? (window.requestAnimationFrame(function e() {
                        var t = performance.now(); 500 < t - d && (s = t), d = t,
                            window.requestAnimationFrame(e); for (var n = p.length - 1; 0 <= n; n--) {
                                var i = p[n]; i.armed() ? (d - i._start >= i._duration && i.execute(
                                    !0), i.checked = Date.now()) : p.splice(n, 1), d = performance.now()
                            } if (h.length) {
                                var o = h; for (h = []; o.length;)o.shift()(),
                                    d = performance.now()
                            }
                    }), {
                        get isRunning() { return performance.now() - d < 500 }, get stoppedDuration() {
                            return this.isRunning ? 0 : performance.now() - d
                        }, get runningDuration() { return this.isRunning ? performance.now() - s : 0 },
                        onRunning: function (e) { h.includes(e) || h.push(e) }, Timer: v
                    }) : (window.alert(
                        "This web browser does not provide the functionality required by Jigsaw Explorer's puzzle program."), void b.haltInit()))
                , b.utils = g
        }).dependenciesReady = function () { return !!b.base }, b.addModInit("utils", e))
}(), function () {
    "use strict"; var e,
        Ee = window.jigexGlobals, Ce = Ee.modules; Ce && !Ce.ClipGL && ((e = function () {
            var xe = Ce.console, Pe = Ce.Sym, ke = Ce.Variant, _e = null
            ; Ce.onInitComplete(function () { _e = Ce.player }), Ce.ClipGL = function (e, i) {
                var t = Ce.ClipGL; if (!(this instanceof t)
                ) return new t(e); if (t.insts || (t.insts = {}), t.insts[e]) return t.insts[e]; t.insts[e] = this; var l = Ce.utils; xe.log(
                    "creating ClipGL instance for " + e), t.isSupported = !!window.WebGLRenderingContext; var x = this; x.error = null, x.isAvailable = !1
                        , x.stableContext = !0, x.isReady = function () { return !x.error && x.isAvailable && P.getError() !== P.CONTEXT_LOST_WEBGL }
                    ; var n = "tweenable property disposition", a = new Pe("not_queued", 2), o = new Pe("pending", 1), r = new Pe("active", 3), s = new Pe(
                        "completed", 4), c = new Pe("delayed", 5); x.TW_FINISH = new Pe("finish", 1, n), x.TW_ABORT = new Pe("abort", 1, n),
                            x.TW_DISPOSE = new Pe("dispose", 1, n), x.EASE_NONE = 0, x.EASE_IN = 1, x.EASE_IN_SLOW = 2, x.EASE_OUT = 3, x.EASE_OUT_SLOW = 4,
                            x.EASE_IN_OUT = 5; function u() {
                                x.getClientRect = function () { return x.canvas.getBoundingClientRect() },
                                x.pixelWidth = 1 / x.canvas.width, x.pixelHeight = 1 / x.canvas.height, x.aspect = x.canvas.width / x.canvas.height
                            } function d() {
                                P.enable(P.BLEND), P.blendFunc(P.ONE, P.ONE_MINUS_SRC_ALPHA), u(), x.isAvailable = !0
                            } var P, h, p, g, m, f, v, y, b, w, k, _, E, C, S, T, z, I,
                                L, A, O, j, M, B; if (t.isSupported ? window.requestAnimationFrame ? (x.canvas = document.getElementById(e), x.canvas ? (P = function () {
                                    var e = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], t = null; xe.log("get WebGL context"); for (
                                        var n = 0; n < e.length; ++n) {
                                            try { t = x.canvas.getContext(e[n], { alpha: !1, depth: !1, stencil: !1, antialias: !1 }) } catch (e) { } if (t) break
                                    } return t
                                }()) && P.enable ? d() : (x.error = "WebGL is either unavailable or disabled", x.isSupported = !1) : x.error = 'Canvas "' + (
                                    e || "<no name>") + '" not found'
                                ) : x.error = "Graphics animation is unsupported by this browser version" : x.error = "WebGL is unsupported by this browser version"
                                    , x.error) return xe.error("ClipGL: " + x.error), x; function N() {
                                        this.when = null, this.keepAlive || (this.callback = null,
                                            this.data = null, this.delay = null, this.repeat = !1)
                                    } function R() {
                                        this.callback && (this.when = Date.now() + this.interval,
                                            this.active || (this.active = !0, p.push(this)))
                                    } function D(e, t, n) {
                                        return t = {
                                            id: h++, callback: e, data: null, when: Date.now() + (
                                                t || 0), repeat: n, interval: t, keepAlive: !1, cancel: N, restart: R, active: !0
                                        }, p.push(t), t
                                    } function G() {
                                        var e = x.canvas,
                                        t = _e.host.getWidth(), n = _e.host.getHeightMinusToolbar(); C = null, e.width = Math.round(E * t), e.height = Math.round(E * n),
                                            P.viewport(0, 0, e.width, e.height), u(), e.style.width = t, e.style.height = n, S && S()
                                    } function V(e) {
                                        O && (e < O.modifiedAt ? (
                                            O.modifiedAt = e, O.numClips = 0 === O.numClips ? 1 : Number.POSITIVE_INFINITY
                                        ) : e >= O.modifiedAt && e < O.modifiedAt + O.numClips ? O.numClips += 0 : e === O.modifiedAt + O.numClips + 1 ? O.numClips++ : O.numClips = Number.POSITIVE_INFINITY
                                        ), j && (e < j.modifiedAt ? (j.modifiedAt = e, j.numClips = 0 === j.numClips ? 1 : Number.POSITIVE_INFINITY
                                        ) : e >= j.modifiedAt && e < j.modifiedAt + j.numClips ? j.numClips += 0 : e === j.modifiedAt + j.numClips + 1 ? j.numClips++ : j.numClips = Number.POSITIVE_INFINITY
                                        )
                                    } function F() {
                                        var e = P.createShader(P.VERTEX_SHADER); if (!e) throw new Error("Unable to create vertex shader."); if (
                                            P.shaderSource(e,
                                                "precision highp float;uniform float aspect;uniform float invAspect;attribute vec4 pos;attribute vec2 a_texCoord0;varying vec2 v_texCoord0;attribute vec2 a_texCoord1;varying vec2 v_texCoord1;attribute float a_color;varying float v_color;attribute float a_opacity;varying float v_opacity;attribute float a_state;varying float v_state;attribute vec2 trans;attribute vec2 scale;attribute vec2 rot;varying vec2 v_rot;void main() {    v_texCoord0 = a_texCoord0;    v_texCoord1 = a_texCoord1;    v_color = a_color;    v_opacity = a_opacity;    v_state = a_state;    v_rot = rot;    gl_Position.x = (scale.x * rot.t * pos.x) + (invAspect * scale.y * rot.s * pos.y) + trans.x;    gl_Position.y = (aspect * scale.x * -rot.s * pos.x) + (scale.y * rot.t * pos.y) + trans.y;    gl_Position.z = pos.z;    gl_Position.w = pos.w;}"
                                            ), P.compileShader(e), P.getShaderParameter(e, P.COMPILE_STATUS)) return e; throw e = P.getShaderInfoLog(e), new Error(
                                                "Failed to compile vertex shader: err=" + e)
                                    } x.setClearColor = function (e, t) {
                                        var n = parseInt(e.substr(1), 16), i = (n >> 16 & 255
                                        ) / 255, e = (n >> 8 & 255) / 255, n = (255 & n) / 255; P.clearColor(i, e, n, 1), t && P.clear(P.COLOR_BUFFER_BIT)
                                    },
                                        i && i.clearColor && x.setClearColor(i.clearColor, !0), x.createTask = (h = 1, p = [], g = [], D.processAll = function () {
                                            for (var e, t = p.pop(
                                            ), n = Date.now(); t;)t.active = !1, t.when && (t.when > n ? (g.push(t), t.active = !0) : (t.callback && t.callback(t.data), t.repeat ? (
                                                t.when = n + t.interval, g.push(t), t.active = !0) : t.cancel())), t = p.pop(); g.length && (e = p, p = g, g = e)
                                        }, D), x.onBenchmark = null,
                                        x.projector = (v = f = !0, y = new Float32Array(100), b = 0, k = w = !1, _ = function (e) {
                                            if (x.onBenchmark) if (y[b] = e, 99 === b) {
                                                for (var t, n = 0,
                                                    i = 99; 0 < i; i--)n += y[i] - y[i - 1]; t = Math.round(1e3 / (n / 100)), x.onBenchmark(t), y[0] = e, b = 1
                                            } else b++; v || (x.isReady() && (
                                                x.updateTweeners(e), x.updateAnimators(e), (x.vertMngr.isModified() || w) && (x.Clip.drawAll(), w && (w = !1, setTimeout(function (e
                                                ) { m(e) }, 0, k ? x.canvas.toDataURL("image/jpeg", .85) : x.canvas.toDataURL()))), x.createTask.processAll()),
                                                window.requestAnimationFrame(_))
                                        }, {
                                            autoStart: function () { f && this.start() }, captureScreen: function (e, t) { m = e, k = t, w = !0 },
                                            start: function () { v && (v = !1, window.requestAnimationFrame(_)) }, stop: function () { v = !(f = !1) }
                                        }), x.resize = (
                                            E = window.devicePixelRatio || 1, S = C = null, function (e) { S = e || null, C ? C.when = Date.now() + 1e3 : C = x.createTask(G, 1e3) }), x.vertMngr = (
                                                T = 18e3, z = new Float32Array(T), I = new Float32Array(T), L = 0, M = j = O = null, B = A = !1, {
                                                    stride: 15, strideBytes: 60, scaleOffset: 2,
                                                    transOffset: 4, rotOffset: 6, stateOffset: 8, colorOffset: 9, opaOffset: 10, tex0Offset: 11, tex1Offset: 13, reset: function () {
                                                        this.shader = F(), B = !(j = O = M = null), V(0), A = !0
                                                    }, isModified: function () { return A }, shader: F(), register: function (e) {
                                                        var t = L / 15
                                                        ; T < L + 90 && (T = Math.round(1.5 * T), (o = new Float32Array(T)).set(z), z = o, I = new Float32Array(T), O && (O.realloc = !0), j && (
                                                            j.realloc = !0)); var n = z, i = L, o = e.width * x.pixelWidth, e = e.height * x.pixelHeight; return n[i++] = -1, n[i++] = 1, n[i++] = o, n[i++] = e,
                                                                n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 1, n[i++] = 0, n[i++] = 0, n[i++] = 1, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = -1, n[i++] = -1,
                                                                n[i++] = o, n[i++] = e, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 1, n[i++] = 0, n[i++] = 0, n[i++] = 1, n[i++] = 0, n[i++] = 1, n[i++] = 0, n[i++] = 1,
                                                                n[i++] = 1, n[i++] = 1, n[i++] = o, n[i++] = e, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 1, n[i++] = 0, n[i++] = 0, n[i++] = 1, n[i++] = 1, n[i++] = 0,
                                                                n[i++] = 1, n[i++] = 0, n[i++] = -1, n[i++] = -1, n[i++] = o, n[i++] = e, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 1, n[i++] = 0, n[i++] = 0, n[i++] = 1,
                                                                n[i++] = 0, n[i++] = 1, n[i++] = 0, n[i++] = 1, n[i++] = 1, n[i++] = 1, n[i++] = o, n[i++] = e, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 1, n[i++] = 0,
                                                                n[i++] = 0, n[i++] = 1, n[i++] = 1, n[i++] = 0, n[i++] = 1, n[i++] = 0, n[i++] = 1, n[i++] = -1, n[i++] = o, n[i++] = e, n[i++] = 0, n[i++] = 0, n[i++] = 0,
                                                                n[i++] = 1, n[i++] = 0, n[i++] = 0, n[i++] = 1, n[i++] = 1, n[i++] = 1, n[i++] = 1, n[i++] = 1, L = i, A = !0, t
                                                    }, deregister: function (e) {
                                                        B = !0, V(
                                                            e._zOrder), A = !0
                                                    }, addTexture0: function (e, t) {
                                                        var n, i; e.active && (n = 15 * e._zOrder + 11, i = t, (t = z)[n] = i[0], t[1 + n] = i[1],
                                                            t[n += 15] = i[2], t[1 + n] = i[3], t[n += 15] = i[4], t[1 + n] = i[5], t[n += 15] = i[2], t[1 + n] = i[3], t[n += 15] = i[4], t[1 + n] = i[5], t[n += 15] = i[6],
                                                            t[1 + n] = i[7], V(e._zOrder), A = !0)
                                                    }, addTexture1: function (e, t) {
                                                        var n, i; e.active && (n = 15 * e._zOrder + 13, i = t, (t = z)[n] = i[0],
                                                            t[1 + n] = i[1], t[n += 15] = i[2], t[1 + n] = i[3], t[n += 15] = i[4], t[1 + n] = i[5], t[n += 15] = i[2], t[1 + n] = i[3], t[n += 15] = i[4], t[1 + n] = i[5],
                                                            t[n += 15] = i[6], t[1 + n] = i[7], V(e._zOrder), A = !0)
                                                    }, move: function (e) {
                                                        if (e.active) {
                                                            for (var t = 15 * e._zOrder + 4, n = e.position._oglX,
                                                                i = e.position._oglY, o = 0; o < 6; o++)z[t] = n, z[t + 1] = i, t += 15; V(e._zOrder), A = !0
                                                        }
                                                    }, rotate: function (e) {
                                                        if (e.active) {
                                                            for (
                                                                var t = 15 * e._zOrder + 6, n = 360 <= (n = e._angle.renderedValue) ? n - 360 : n < 0 ? n + 360 : n, i = 0; i < 6; i++)z[t] = l.sine(n), z[t + 1] = l.cosine(n),
                                                                    t += 15; V(e._zOrder), A = !0
                                                        }
                                                    }, setSize: function (e) {
                                                        if (e.active) {
                                                            for (var t = 15 * e._zOrder + 2, n = 0; n < 6; n++
                                                            )z[t] = e.width * x.pixelWidth, z[t + 1] = e.height * x.pixelHeight, t += 15; V(e._zOrder), A = !0
                                                        }
                                                    }, setColor: function (e) {
                                                        if (e.active) {
                                                            for (var t = 15 * e._zOrder + 9, n = 0; n < 6; n++)z[t] = e._color, t += 15; V(e._zOrder), A = !0
                                                        }
                                                    }, setOpacity: function (e) {
                                                        if (e.active) {
                                                            for (
                                                                var t = 15 * e._zOrder + 10, n = 0; n < 6; n++)z[t] = e._opacity.renderedValue, t += 15; V(e._zOrder), A = !0
                                                        }
                                                    }, setState: function (e) {
                                                        if (
                                                            e.active) { for (var t = 15 * e._zOrder + 8, n = 0; n < 6; n++)z[t] = e._userState, t += 15; V(e._zOrder), A = !0 }
                                                    }, commit: function () {
                                                        if (
                                                            x.isReady() && A) {
                                                                if (B && function () {
                                                                    for (var e, t = 0, n = x.clips[t].head, i = 0; null === n && ++t < x.clips.length;)n = x.clips[t].head
                                                                        ; for (; n;) {
                                                                            var o = n.item, r = 15 * o._zOrder; o._zOrder = i / 15; for (var s = r + 90; r < s;)I[i++] = z[r++]; for (
                                                                                n = n.next; null === n && ++t < x.clips.length;)n = x.clips[t].head
                                                                        } e = z, z = I, I = e, B = !1, O && (O.realloc = !0), j && (j.realloc = !0)
                                                                }(), !(
                                                                    M = M === O ? j : O)) {
                                                                        if (O) {
                                                                            if (j) throw new Error("ClipGL Error: Unexpected VBO condition."); j = {
                                                                                buff: P.createBuffer(),
                                                                                modifiedAt: Number.POSITIVE_INFINITY, numClips: 0, realloc: !0
                                                                            }, M = j
                                                                        } else O = {
                                                                            buff: P.createBuffer(),
                                                                            modifiedAt: Number.POSITIVE_INFINITY, numClips: 0, realloc: !0
                                                                        }, M = O; if (!M) throw new Error(
                                                                            "ClipGL Error: Failed to create VBO.")
                                                                } P.bindBuffer(P.ARRAY_BUFFER, M.buff), M.realloc ? (P.bufferData(P.ARRAY_BUFFER, z,
                                                                    P.DYNAMIC_DRAW), M.realloc = !1) : M.numClips && P.bufferSubData(P.ARRAY_BUFFER, 0, z), M.modifiedAt = Number.POSITIVE_INFINITY,
                                                                    M.numClips = 0, A = !1
                                                        }
                                                    }, rebuild: function () { A = B = !0 }, get actBuffId() { return M === O ? 1 : 2 }
                                                }); var H, W, U, q, Y, X = (J.prototype = {
                                                    __tweener: null, disposed: !1, get tweener() {
                                                        for (; this.__tweener && this.__tweener._state.eq(s);
                                                        )this.__tweener = this.__tweener.link; return this.__tweener
                                                    }, set tweener(e) { this.__tweener = e }, isEqualTo: function (e) {
                                                        return this.value === e || e instanceof x.Tweener2 && this.value === e.toValue
                                                    }
                                                }, J); function J(e) {
                                                    this.value = e,
                                                    this.renderedValue = e
                                                } function K(e, t) {
                                                    var n = t.image ? t.image.data : null, i = t.layer || 0; if (e.name = t.name,
                                                        t.image && t.image.bounds && !t.image.bounds.margin && (t.image.bounds.margin = 0), t.width && t.height) e.width = t.width,
                                                            e.height = t.height; else if (n && t.image.animation && t.image.animation.frameCount) {
                                                                var o, r = t.image.animation
                                                                ; r.frameRows = r.frameRows || 1, o = Math.floor(r.frameCount / r.frameRows), e.width = Math.floor(n.width / o), e.height = Math.floor(
                                                                    n.height / r.frameRows), t.image.bounds = { x: 0, y: 0, width: e.width, height: e.height }
                                                            } else if (
                                                        n && t.image.bounds && t.image.bounds.width && t.image.bounds.height) e.width = t.image.bounds.width + 2 * t.image.bounds.margin,
                                                            e.height = t.image.bounds.height + 2 * t.image.bounds.margin; else {
                                                                if (!n) return xe.fault(new Error(
                                                                    "ClipGL: Clip " + t.name + " size not specified.")), 0; e.width = n.width, e.height = n.height
                                                    } e._zOrder = x.vertMngr.register(e),
                                                        t.shader ? e.shader = t.shader : e.shader = n ? t.image.mask ? x.Shader.defImageAndMaskShader : x.Shader.defImageShader : x.Shader.defColorShader
                                                        , n ? (e._texture = x.Texture.getTexture(n, !1), e.setTexBounds(e._texture, t.image.bounds), t.image.mask ? (n = (n = t.image.bounds) ? {
                                                            x: n.maskX || n.x, y: n.maskY || n.y, width: n.width || e.width, height: n.height || e.height, margin: 0
                                                        } : null,
                                                            e._mask = x.Texture.getTexture(t.image.mask, !0), e.setTexBounds(e._mask, n, !0), e._mask2 = t.image.mask2 ? x.Texture.getTexture(
                                                                t.image.mask2, !0) : null) : (e._mask = null, e._mask2 = null), t.image.animation ? e.animator = x.createAnimator(e, t.image.animation
                                                                ) : e.animator = null) : (e._texture = null, e._mask = null, e._mask2 = null, e.animator = null), e.layer = i, e.node = x.clips[i].addLast(e),
                                                        xe.assert(e.node, "Null clip node encountered"), e.isDisposed = !1, e._active = !0, e.boundingRect = {
                                                            left: 0, top: 0, right: (
                                                                e.width - 1) / 2, bottom: (e.height - 1) / 2
                                                        }, e._color = 0, e._userState = 0, e._angle = new X(0), void 0 !== t.angle && (e.angle = t.angle),
                                                        e._opacity = new X(1), void 0 !== t.opacity && (e.opacity = t.opacity), e._position = new x.PosPoint(e), x.clips.getTopMost(
                                                        ) !== e && x.vertMngr.rebuild(), t.position && (void 0 === t.position.normX ? e.position.assign(t.position.x, t.position.y
                                                        ) : e.position.assignNorm(t.position.normX, t.position.normY)), e.touchRect = t.touchRect, x.projector.autoStart()
                                                } function Q(e
                                                    , t) {
                                                        if (void 0 === e) return t._angle.renderedValue; if (360 === e) e = 0; else if (e < 0 || 360 < e) throw new Error(
                                                            "Invalid render angle: " + e); t._angle.renderedValue = e, x.vertMngr.rotate(t)
                } function Z(e) {
                    switch (e) {
                        case 0: case 90:
                        case 180: case 270: break; default: (e < 0 || 360 <= e) && (e = e % 360 + (e < 0 ? 360 : 0)), e = e < 45 ? 0 : e < 135 ? 90 : e < 225 ? 180 : e < 315 ? 270 : 0
                    }return e
                }
                function $(e, t) { if (void 0 === e) return t._opacity.renderedValue; t._opacity.renderedValue = e, x.vertMngr.setOpacity(t) }
                function ee(e, t, n, i) {
                    var o = P.createTexture(); return P.bindTexture(P.TEXTURE_2D, o), P.texImage2D(P.TEXTURE_2D, 0, P.RGBA,
                        P.RGBA, P.UNSIGNED_BYTE, t), P.texParameteri(P.TEXTURE_2D, P.TEXTURE_MIN_FILTER, P.NEAREST), P.texParameteri(P.TEXTURE_2D,
                            P.TEXTURE_MAG_FILTER, P.NEAREST), l.isPowerOfTwo(t.width) && l.isPowerOfTwo(t.height) || (P.texParameteri(P.TEXTURE_2D,
                                P.TEXTURE_WRAP_S, P.CLAMP_TO_EDGE), P.texParameteri(P.TEXTURE_2D, P.TEXTURE_WRAP_T, P.CLAMP_TO_EDGE)), P.bindTexture(
                                    P.TEXTURE_2D, null), H = null, e.name = n, e.width = t.width, e.height = t.height, e.pixelWidth = 1 / t.width, e.pixelHeight = 1 / t.height,
                        e.isMask = i, e.image = t, i && t.data ? e.pixels = t : i && t.getContext ? e.pixels = t.getContext("2d").getImageData(0, 0, t.width, t.height
                        ) : e.pixels = null, o
                } function te(e) {
                    var t = P.createShader(P.FRAGMENT_SHADER); if (!t) {
                        var n = "Unable to create " + this.name + " fragment shader."; if (x.stableContext) throw new Error(n); Ee.reloadProg(n)
                    }
                    return P.shaderSource(t, e), P.compileShader(t), (e = P.getShaderParameter(t, P.COMPILE_STATUS)) || (
                        n = "Failed to compile shader " + this.name + ", fragment shader: err=" + (e || P.getShaderInfoLog(t)), x.stableContext ? xe.assert(e
                            , n) : Ee.reloadProg(n)), t
                } function ne(e) {
                    var t = P.createProgram(); if (!t) throw new Error(
                        "Failed to create " + this.name + " shader program."); return P.attachShader(t, e), P.attachShader(t, x.vertMngr.shader),
                            P.linkProgram(t), P.getProgramParameter(t, P.LINK_STATUS) || (this.error = P.getProgramInfoLog(t), xe.error(
                                "failed to link shader program: name=" + this.name + ", err=" + this.error), P.deleteProgram(t), t = null), t
                } x.Clip = function (e) {
                    var t = e && e.image ? e.image.data : null; e ? t ? t instanceof Element || t.data ? t.width && t.height ? K(this, e) : xe.fault(new Error(
                        "ClipGL: Clip " + (e.name || "<no name>") + " image must not be empty.")) : xe.fault(new Error("ClipGL: Clip " + (
                            e.name || "<no name>") + " image must be an Image object.")) : (e.width && e.height || (e.width = 100, e.height = 100), K(this, e)) : K(
                                this, e = { width: 100, height: 100 })
                }, Object.defineProperty(x.Clip.prototype, "angle", {
                    get: function () {
                        if (this.isDisposed
                        ) throw new Error("Attempted to access disposed clip " + this.name); return this._angle.value
                    }, set: function (e) {
                        var t = this._angle; if (this.isDisposed) throw new Error("Attempted to access disposed clip " + this.name); if (t.disposed
                        ) e !== x.TW_DISPOSE && e !== x.TW_ABORT && Ee.errMonitor.sendReport("Attempted to set disposed property in clip " + this.name
                        ); else if (this.active || e === x.TW_DISPOSE) if (e === x.TW_DISPOSE) ke.log(this.name + ".angle disposed"),
                            t.tweener && t.tweener.kill(), t.disposed = !0; else if (e === x.TW_ABORT) t.tweener && (ke.log(this.name + ".angle aborted"),
                                t.tweener.kill(), Q(t.value, this)); else if (e === x.TW_FINISH) t.tweener && (ke.log(this.name + ".angle -> " + e + " (finish)"),
                                    t.tweener.finish()); else if ("number" == typeof e) e = Z(e), t.value === e && t.renderedValue === e || (ke.log(this.name + ".angle -> " + e
                                    ), t.value = e, Q(e, this)); else {
                                        if (!(e instanceof x.Tweener2)) throw new Error(
                                            "Unexpected angle value. val=" + e + ", typ=" + typeof e + ", clp=" + this.name); var n = e; if (n._state !== a) throw new Error(
                                                "Unexpected tweener state. clp=" + this.name + ", tw-st=" + n._state); if (n.target = this, n.throttle && t.tweener && (
                                                    t.tweener.progress < .5 || t.tweener.link)) return ke.log(this.name + ".angle throttled tweener"), void (n.onEnd && n.onEnd(n))
                                    ; var i = Z(n.toValue); i === t.value ? (i !== t.renderedValue && (t.tweener ? ke.log(
                                        "Warning: Redundant tweener assignment in clip %s", this.name) : (ke.log("Warning: Unexpected renderedValue in clip %s",
                                            this.name), Q(i, this))), n._state = s, n.onEnd && n.onEnd(n)) : (0 === t.value && 270 === i ? (n.fromValue = 360, n.toValue = 270
                                            ) : 270 === t.value && 0 === i ? (n.fromValue = 270, n.toValue = 360) : (n.fromValue = t.value, n.toValue = i), n.renderValue = Q, t.tweener ? (
                                                ke.log(this.name + ".angle -> " + n.toValue + " (extended tweener)"), t.tweener.extend(n)) : (ke.log(
                                                    this.name + ".angle -> " + n.toValue + " (tweener)"), (t.tweener = n).queue()), t.value = i)
                        } else e === x.TW_ABORT || t.isEqualTo(e
                        ) || Ee.errMonitor.sendReport("Attempted to set property in inactive clip " + this.name)
                    }
                }), Object.defineProperty(
                    x.Clip.prototype, "opacity", {
                        get: function () {
                            if (this.isDisposed) throw new Error(
                                "Attempted to access disposed clip " + this.name); return this._opacity.value
                        }, set: function (e) {
                            var t = this._opacity; if (
                                this.isDisposed) throw new Error("Attempted to access disposed clip " + this.name); if (t.disposed
                            ) e !== x.TW_DISPOSE && e !== x.TW_ABORT && Ee.errMonitor.sendReport("Attempted to set disposed property in clip " + this.name
                            ); else if (this.active || e === x.TW_DISPOSE) if (e === x.TW_DISPOSE) ke.log(this.name + ".opacity disposed"),
                                t.tweener && t.tweener.kill(), t.disposed = !0; else if (e === x.TW_ABORT) t.tweener && (ke.log(this.name + ".opacity aborted"),
                                    t.tweener.kill(), $(t.value, this)); else if (e === x.TW_FINISH) t.tweener && (ke.log(this.name + ".opacity -> " + e + " (finish)"),
                                        t.tweener.finish()); else if ("number" == typeof e) t.value === e && t.renderedValue === e || (ke.log(this.name + ".opacity -> " + e),
                                            t.value = e, $(e, this)); else {
                                                if (!(e instanceof x.Tweener2)) throw new Error(
                                                    "Unexpected opacity value. val=" + e + ", typ=" + typeof e + ", clp=" + this.name); var n = e; if (n._state !== a) throw new Error(
                                                        "Unexpected tweener state. clp=" + this.name + ", tw-st=" + n._state); n.target = this, n.toValue === t.value ? (
                                                            n.toValue !== t.renderedValue && (t.tweener ? ke.log("Warning: Redundant tweener assignment in clip %s", this.name) : (ke.log(
                                                                "Warning: Unexpected renderedValue in clip %s", this.name), $(n.toValue, this))), n._state = s, n.onEnd && n.onEnd(n)) : (
                                                            n.renderValue = $, n.fromValue = t.value, t.tweener ? (ke.log(this.name + ".opacity -> " + n.toValue + " (extended tweener)"),
                                                                t.tweener.extend(e)) : (ke.log(this.name + ".opacity -> " + n.toValue + " (tweener)"), (t.tweener = n).queue()), t.value = n.toValue)
                            } else e === x.TW_ABORT || t.isEqualTo(e) || Ee.errMonitor.sendReport("Attempted to set property in inactive clip " + this.name)
                        }
                }), Object.defineProperty(x.Clip.prototype, "position", { get: function () { return this._position } }),
                    x.Clip.prototype.isRotating = function () { return !!this._angle.tweener }, x.Clip.prototype.moveToTop = function () {
                        x.clips[this.layer].moveToEnd(this.node) && x.vertMngr.rebuild()
                    }, x.Clip.prototype.moveToBottom = function () {
                        x.clips[this.layer].moveToBeginning(this.node) && x.vertMngr.rebuild()
                    }, x.Clip.prototype.sendToLevelOf = function (e) {
                        this !== e && (x.clips[this.layer].moveAfter(this.node, e.node), x.vertMngr.rebuild())
                    }, x.Clip.prototype.fadeIn = function (e, t, n
                    ) { e = new x.Tweener2("opacity", 1, e); t && (e.onEnd = function (e) { t(e.target) }), e.delay = n, this.active = !0, this.opacity = e },
                    x.Clip.prototype.fadeOut = function (e, t, n, i) {
                        var o = null; (t || n) && (o = function (e) {
                            n && !e.target.opacity && (e.target.active = !1),
                            t && t(e.target)
                        }); o = new x.Tweener2("opacity", 0, e, o); o.delay = i || 0, this.active = !0, this.opacity = o
                    },
                    x.Clip.prototype.setSize = function (e, t, n, i, o) {
                        this.width = e, this.height = t, n && this.setTexBounds(this._texture, n, !1),
                        i && this.setTexBounds(this._mask, i, !0), o && this.setTexBounds(this._mask2, o, !0), x.vertMngr.setSize(this)
                    },
                    x.Clip.prototype.setTexBounds = function (e, t, n) {
                        var i, o, r, s; s = t ? (s = n ? t.margin : 0, i = (t.x - s) * e.pixelWidth, o = (t.y - s
                        ) * e.pixelHeight, r = (t.x + t.width + s) * e.pixelWidth, [i, o, i, s = (t.y + t.height + s) * e.pixelHeight, r, o, r, s]) : [0, 0, 0, 1, 1, 0, 1, 1],
                            n ? x.vertMngr.addTexture1(this, s) : x.vertMngr.addTexture0(this, s), this.maskBounds = t
                    }, x.clips = function () {
                        for (
                            var e = i && i.numberOfLayers ? i.numberOfLayers : 1, t = new Array(e), n = e - 1; 0 <= n; n--)t[n] = new l.List; return t
                    }(),
                    x.clips.getClip = function (e, t) { for (var n = x.clips[t].head; n;) { if (n.item.id === e) return n.item; n = n.next } return null },
                    x.clips.getTopMost = function () { for (var e = x.clips.length - 1; 0 <= e; e--) { var t = x.clips[e].tail; if (t) return t.item } return null }
                    , x.clips.getClipAt = function (t, n, e, i) {
                        e = "number" == typeof e ? e : 0; e = x.clips[e].findLast(function (e) {
                            return e.active && e.opacity && e.containsPoint(t, n, i)
                        }); return e ? e.item : null
                    }, x.Texture = (H = null, function (e, t, n, i) {
                        var o = ee(
                            this, e, t, i), r = 1; this.setActive = function (e) {
                                H !== this && (H = this, P.activeTexture(P.TEXTURE0 + n), P.bindTexture(P.TEXTURE_2D, o)
                                    , P.uniform1i(e, n))
                            }, this.addRef = function () { r++ }, this.reinit = function (e, t, n) {
                                0 === r ? (o = ee(this, e, t, n), r = 1) : xe.fault(
                                    new Error("ClipGL: Cannot reinit non-disposed texture."))
                            }, this.reset = function () {
                                var e; null !== this.name && (e = this.name,
                                    r = 0, this.name = null, this.width = 0, this.height = 0, this.pixels = null, this.reinit(this.image, e, this.isMask))
                            },
                                this.subtractRef = function () { 0 < r && r-- }, this.disposeIfUnused = function () { 0 === r && this.dispose() }, this.dispose = function () {
                                    1 < r && xe.warn("ClipGL: Disposing of texture with " + r + " references. texture=" + this.name), r = 0, P.deleteTexture(o),
                                        this.active = !1, this.name = null, this.width = 0, this.height = 0, this.pixels = null, this.image = null, this.isMask = !1
                                }
                    }),
                    x.Texture._textures = [], x.Texture.getTexture = (W = 1, function (e, t) {
                        var n, i = x.Texture._textures, o = null, r = i.length; if (
                            "string" == typeof e) { for (n = r - 1; 0 <= n; n--)if ((o = i[n]).name === e) return o; return null } var s = e.src ? l.stringToVarName(e.src
                            ) : e.name, a = -1; for (s || (s = "No_name_" + W++, xe.warn("ClipGL: Image with no name detected.")), n = r - 1; 0 <= n; n--) {
                                if ((o = i[n]
                                ).name === s) return o.addRef(), o; null === o.name && (a = n)
                            } return 0 <= a ? (o = i[a]).reinit(e, s, t) : r < 32 ? (o = new x.Texture(e, s, r, t),
                                i.push(o)) : xe.fault(new Error("ClipGL: No more available textures.")), o
                    }), x.Texture.freeAllUnused = function () {
                        for (
                            var e = x.Texture._textures.length - 1; 0 <= e; e--)x.Texture._textures[e].disposeIfUnused()
                    }, x.Texture.resetAll = function () {
                        x.Texture._textures.forEach(function (e) { e.reset() })
                    }, Object.defineProperty(x.Clip.prototype, "userState", {
                        get: function () {
                            return this._userState
                        }, set: function (e) { this._userState !== e && (this._userState = e, x.vertMngr.setState(this)) }
                    }),
                    Object.defineProperty(x.Clip.prototype, "color", {
                        get: function () { return this._color }, set: function (e) {
                            this._color !== e && (
                                this._color = e, x.vertMngr.setColor(this))
                        }
                    }), Object.defineProperty(x.Clip.prototype, "zOrder", {
                        get: function () {
                            return void 0 === this._zOrder ? 0 : this._zOrder / 6
                        }
                    }), Object.defineProperty(x.Clip.prototype, "texture", {
                        get: function () {
                            return void 0 === this._texture ? null : this._texture
                        }, set: function (e) {
                            var t, n = null; e instanceof Element ? t = e : (t = e.data,
                                e.bounds && (n = e.bounds)), this._texture && this._texture.subtractRef(), this._texture = x.Texture.getTexture(t, !1),
                                this.setTexBounds(this._texture, n)
                        }
                    }), Object.defineProperty(x.Clip.prototype, "mask", {
                        get: function () {
                            return void 0 === this._mask ? null : this._mask
                        }, set: function (e) {
                            var t, n = null; e instanceof Element ? t = e : (t = e.data, e.bounds && (
                                n = e.bounds)), this._mask && this._mask.subtractRef(), this._mask = x.Texture.getTexture(t, !0), this.setTexBounds(this._mask, n,
                                    !0)
                        }
                    }), Object.defineProperty(x.Clip.prototype, "mask2", {
                        get: function () { return void 0 === this._mask2 ? null : this._mask2 },
                        set: function (e) {
                            e = e instanceof Element ? e : e.data; this._mask2 && this._mask2.subtractRef(), this._mask2 = x.Texture.getTexture(
                                e, !0)
                        }
                    }), x.Clip.count = function () { for (var e = 0, t = x.clips.length - 1; 0 <= t; t--)e += x.clips[t].length; return e },
                    x.Clip.drawAll = function () {
                        for (var e, t = x.Clip.count(), n = 0, i = x.clips[n].head, o = !1; null === i && ++n < x.clips.length;
                        )i = x.clips[n].head; if (i) if (P.clear(P.COLOR_BUFFER_BIT), x.vertMngr.commit(), 1 === t) (e = i.item).shader.setActive(e._texture,
                            e._mask, e._mask2), P.drawArrays(P.TRIANGLES, e._zOrder, 6); else {
                                for (var r = i.item, s = 1, a = !1,
                                    i = i.next; null === i && ++n < x.clips.length;)i = x.clips[n].head; for (; i;) {
                                        for ((e = i.item
                                        ).shader === r.shader && e._texture === r._texture && e._mask === r._mask && e._mask2 === r._mask2 ? s++ : a = !0,
                                            i = i.next; null === i && ++n < x.clips.length;)i = x.clips[n].head; for (a || i || (o = !0); (a || o) && (r.shader.setActive(r._texture, r._mask
                                                , r._mask2), P.drawArrays(P.TRIANGLES, r._zOrder, 6 * s), r = e, a = !(s = 1), !o) && !i;)o = !0
                                    }
                        }
                    },
                    x.Clip.prototype.containsPoint = function (e, t, n) {
                        var i = 90 === this.angle || 270 === this.angle, o = (i ? this.height : this.width) / 2,
                        r = (i ? this.width : this.height) / 2, s = this.position, a = s._y - r, l = s._x - o, i = s._y + r, r = s._x + o, s = l <= e && e < r && a <= t && t < i, o = !1; if (n && (
                            o = e >= l + (n = this.touchRect).x && e < r - (this.width - n.x - n.width) && t >= a + n.y && t < i - (this.height - n.y - n.height)), o) return !0; if (
                            s && this._mask && this._mask.pixels) {
                                e -= Math.round(l), t -= Math.round(a); var c, l = this._mask.pixels, u = this.maskBounds; switch (
                                    this.angle) { case 90: c = e, e = t, t = u.height - c; break; case 180: e = u.width - e, t = u.height - t; break; case 270: c = e, e = u.width - t, t = c }
                            return a = 4 * (u.x + u.y * l.width), 128 <= l.data[a + 4 * (e + t * l.width)]
                        } return s
                    }, Object.defineProperty(x.Clip.prototype, "active", {
                        get: function () { return null !== this.node }, set: function (e) {
                            null !== this.node !== e && (e ? (this._active = !0,
                                this._zOrder = x.vertMngr.register(this), this.node = x.clips[this.layer].addLast(this), this._position = new x.PosPoint(this),
                                x.clips.getTopMost() !== this && x.vertMngr.rebuild(), x.vertMngr.setOpacity(this), this.position.assign(x.canvas.width / 2,
                                    x.canvas.height / 2), this.animator && this.animator.autoStart && this.animator.play()) : (this.animator && this.animator.stop(),
                                        x.clips[this.layer].dispose(this.node), x.vertMngr.deregister(this), this.node = null, this._angle.disposed || (this.angle = 0),
                                        this._position = null, this._active = !1))
                        }
                    }), x.Clip.prototype.isTweening = function () {
                        return this.active && !!(
                            this._position.tweener || this._opacity.tweener || this._angle.tweener)
                    }, x.Clip.prototype.killTweeners = function (e) {
                        var t
                        ; this.isDisposed || (t = e ? x.TW_FINISH : x.TW_ABORT, e = 0, this.active && this._position.tweener && (e++, this.position.tween(t)),
                            this._opacity.tweener && (e++, this.opacity = t), this._angle.tweener && (e++, this.angle = t), ke.log((this.name || "<no name>"
                            ) + ": killed tweeners. count=" + e))
                    }, x.Clip.prototype.dispose = function () {
                        this.killTweeners(), this.opacity = x.TW_DISPOSE,
                        this.angle = x.TW_DISPOSE, this._position = null, this.shader = null, this.width = 0, this.height = 0, this.active = !1,
                        this.isDisposed = !0, this._texture && (this._texture.subtractRef(), this._texture = null), this._mask && (this._mask.subtractRef()
                            , this._mask = null), this._mask2 && (this._mask2.subtractRef(), this._mask2 = null)
                    }, x.Shader = (q = "precision mediump float;",
                        function (e, t) {
                            var o, r, s, a, l, c, u, d, h, p, g, m, f, v, y = 0, b = !1; this.name = e, this.error = null; var n = te.call(this, t), w = ne.call(this,
                                n); if (!w) {
                                    if (0 === t.indexOf(q)) return this.error = null, xe.log("switched shader to high precision: name=" + e), new x.Shader(e
                                        , "precision highp float;" + t.substr(q.length)); throw this.error && -1 !== this.error.indexOf("D3D shader") ? new Error(
                                            "Failed to link shader program due D3D shader error: " + e) : new Error("Failed to link shader program: " + e)
                                }
                            x.Shader._shaders.push(this), this.setActive = function (e, t, n) {
                                var i = x.vertMngr.actBuffId; b || (o = P.getUniformLocation(w,
                                    "aspect"), r = P.getUniformLocation(w, "invAspect"), s = P.getAttribLocation(w, "pos"), a = P.getAttribLocation(w, "scale"),
                                    l = P.getAttribLocation(w, "trans"), c = P.getAttribLocation(w, "rot"), u = P.getAttribLocation(w, "a_state"),
                                    d = P.getAttribLocation(w, "a_color"), h = P.getAttribLocation(w, "a_opacity"), e && (p = P.getAttribLocation(w, "a_texCoord0"),
                                        m = P.getUniformLocation(w, "u_image")), t && (g = P.getAttribLocation(w, "a_texCoord1"), f = P.getUniformLocation(w, "u_mask")), n && (
                                            v = P.getUniformLocation(w, "u_mask2")), b = !0), y !== i && (P.vertexAttribPointer(s, 2, P.FLOAT, !1, x.vertMngr.strideBytes, 0),
                                                P.vertexAttribPointer(a, 2, P.FLOAT, !1, x.vertMngr.strideBytes, 4 * x.vertMngr.scaleOffset), P.vertexAttribPointer(l, 2, P.FLOAT,
                                                    !1, x.vertMngr.strideBytes, 4 * x.vertMngr.transOffset), P.vertexAttribPointer(c, 2, P.FLOAT, !1, x.vertMngr.strideBytes,
                                                        4 * x.vertMngr.rotOffset), P.vertexAttribPointer(u, 1, P.FLOAT, !1, x.vertMngr.strideBytes, 4 * x.vertMngr.stateOffset),
                                                P.vertexAttribPointer(d, 1, P.FLOAT, !1, x.vertMngr.strideBytes, 4 * x.vertMngr.colorOffset), P.vertexAttribPointer(h, 1, P.FLOAT,
                                                    !1, x.vertMngr.strideBytes, 4 * x.vertMngr.opaOffset), e && P.vertexAttribPointer(p, 2, P.FLOAT, !1, x.vertMngr.strideBytes,
                                                        4 * x.vertMngr.tex0Offset), t && P.vertexAttribPointer(g, 2, P.FLOAT, !1, x.vertMngr.strideBytes, 4 * x.vertMngr.tex1Offset),
                                                P.enableVertexAttribArray(s), P.enableVertexAttribArray(a), P.enableVertexAttribArray(l), P.enableVertexAttribArray(c),
                                                P.enableVertexAttribArray(u), P.enableVertexAttribArray(d), P.enableVertexAttribArray(h), e && P.enableVertexAttribArray(p),
                                                t && P.enableVertexAttribArray(g), y = i), U !== this && (U = this, P.useProgram(w), P.program = w), P.uniform1f(o, x.aspect), P.uniform1f(
                                                    r, 1 / x.aspect), e && e.setActive(m), t && t.setActive(f), n && n.setActive(v)
                            }, this.reset = function () {
                                n = te.call(this, t), w = ne.call(
                                    this, n), b = !1
                            }, this.dispose = function () {
                                var e = x.Shader._shaders, t = e.indexOf(this); P.deleteShader(n), P.deleteProgram(w),
                                    -1 !== t && e.splice(t, 1)
                            }
                        }), x.Shader._shaders = [], x.Shader.resetAll = function () {
                            x.Shader._shaders.forEach(function (e) {
                                e.reset()
                            })
                        }; try {
                            x.Shader.defColorShader = new x.Shader("defaultColorShader",
                                "precision mediump float;void main() { gl_FragColor = vec4( 0.0, 0.0, 1.0, 1.0); }"),
                            x.Shader.defImageShader = new x.Shader("defaultImageShader",
                                "precision mediump float;uniform sampler2D u_image;varying vec2 v_texCoord0;varying float v_opacity;void main() {   vec4 sPixel = texture2D(u_image, v_texCoord0);   float alpha = sPixel.a * v_opacity;   gl_FragColor.rgb = sPixel.rgb * alpha;   gl_FragColor.a = alpha;}\n"
                            ), x.Shader.defImageAndMaskShader = new x.Shader("defaultImageAndMaskShader",
                                "precision mediump float;uniform sampler2D u_image;uniform sampler2D u_mask;varying vec2 v_texCoord0;varying vec2 v_texCoord1;void main() {   vec4 sPixel = texture2D(u_image, v_texCoord0);   vec4 mPixel = texture2D(u_mask, v_texCoord1);   float alpha = mPixel.r;   gl_FragColor.rgb = sPixel.rgb * alpha;   gl_FragColor.a = alpha;}\n"
                            )
                        } catch (e) { return x.error = "Failed to compile shaders", xe.error("ClipGL: " + x.error), x } function ie(e) {
                            e.state === x.ANI_RUNNING && Y - e.timestamp >= e.fPeriod && (++e.fCurr >= e.fCount && (e.fCurr = 0),
                                e.bounds.x = e.fCurr % e.fCols * e.target.width, e.bounds.y = Math.floor(e.fCurr / e.fCols) * e.target.height, e.target.setTexBounds(
                                    e.target.texture, e.bounds, !1), e.timestamp = Y)
                        } function oe() { this.state !== x.ANI_DEAD && (this.state = x.ANI_STOPPED) }
                function re() { this.state !== x.ANI_DEAD && (this.state = x.ANI_RUNNING) } function se() {
                    var e = x.animators.indexOf(this)
                    ; -1 !== e && x.animators.splice(e, 1), this.bounds.x = 0, this.target.setTexBounds(this.target.texture, this.bounds, !1),
                        this.state = x.ANI_DEAD
                } x.animators = [], x.ANI_DEAD = 0, x.ANI_STOPPED = 1, x.ANI_WAITING = 2, x.ANI_RUNNING = 3,
                    x.updateAnimators = function (e) { Y = e, x.animators.forEach(ie) }, x.createAnimator = function (e, t) {
                        var n = t.startFrame ? t.startFrame - 1 : -1, n = {
                            timestamp: 0, state: t.autoStart ? x.ANI_RUNNING : x.ANI_STOPPED, autoStart: t.autoStart,
                            fCurr: n, fCount: t.frameCount, fCols: Math.ceil(t.frameCount / t.frameRows), fPeriod: Math.round(1e3 / t.fps), stop: oe, play: re,
                            dispose: se, target: e, bounds: { x: n * e.width, y: 0, width: e.width, height: e.height }
                        }
                            ; return e.texture.width % n.fCols == 0 ? x.animators.push(n) : (n.state = x.ANI_DEAD, xe.error(
                                "invalid animation image width. w=" + e.texture.width + ", fc=" + t.frameCount + ", name=" + e.texture.name)), n
                    }; var ae, le, ce, ue,
                        de, he, pe, ge, me = [], fe = [], ve = new ke.Key; function ye(e) {
                            if (e._state === r && e._cycle !== ce) {
                                if (e._cycle = ce, e.target.isDisposed
                                ) return e._state = s, void (le = !0); if (e.delay) { if (ae - e.startTime < e.delay) return void (le = !0); e.delay = 0, e.startTime = ae } if (
                                    e.startTime >= ae) return e.startTime = ae, void (le = !0); var t = ae - e.startTime >= e.duration; e.progress = t ? 1 : (ae - e.startTime
                                    ) / e.duration, e.run(ae, t), t && (e._state = s), e.onStep && e.onStep(e), t && (e.onEnd && e.onEnd(e), e.link && (e.link.startTime = ae,
                                        e.link.progress = 0, e.link._state = o, fe.push(e.link))), le = !0
                            }
                        } function be(e) { e._state === o && (e._state = r, me.push(e)) }
                function we(e, t) {
                    var n, i = this.fromValue.x, o = this.toValue.x - this.fromValue.x, r = this.fromValue.y,
                    s = this.toValue.y - this.fromValue.y, e = (e - this.startTime) / this.duration, r = t ? (n = this.toValue.x, this.toValue.y
                    ) : this.ease === x.EASE_IN ? (n = o * e * e * e + i, s * e * e * e + r) : this.ease === x.EASE_IN_SLOW ? (n = o * e * e + i, s * e * e + r) : this.ease === x.EASE_OUT ? (
                        n = o * (--e * e * e + 1) + i, s * (e * e * e + 1) + r) : this.ease === x.EASE_OUT_SLOW ? (n = -o * e * (e - 2) + i, -s * e * (e - 2) + r) : (n = o * e + i, s * e + r); ue.x = n, ue.y = r
                            , this.target.position._renderValue(ue, this.target)
                } x.tweeningInProgress = new ke(!1, "tweeningInProgress", ke.LOG_CHANGES),
                    x.tweeningInProgress.listenerLoopAction = null, x.tweeningInProgress.lock(ve), x.updateTweeners = (ce = 1, function (e) {
                        ae = e,
                        fe.forEach(be), fe.length = 0, me.length ? (le = !1, ce++, me.forEach(ye), le || (me.length = 0) === fe.length && x.tweeningInProgress.set(
                            !1, ve)) : x.tweeningInProgress.val && x.tweeningInProgress.set(!1, ve)
                    }), x.Tweener = function (e, t, n) {
                        this.toValue = e,
                        this.duration = t, this.onEnd = n, this.startTime = x.perfNow(), this.deprecatedDelay = function () { this._state = c }, fe.push(this),
                        x.tweeningInProgress.val || x.tweeningInProgress.set(!0, ve)
                    }, x.Tweener2 = function (e, t, n, i, o) {
                        this._state = a, this.toValue = t,
                        this.duration = n, this.onEnd = i, this.propName = e, this.ease = o || x.EASE_NONE
                    }, x.Tweener2.prototype = {
                        _state: o, _cycle: 0,
                        progress: 0, customTween: null, target: null, property: null, fromValue: null, toValue: null, duration: null, onStep: null, onEnd: null,
                        startTime: 0, ease: x.EASE_NONE, assign: null, extension: !1, throttle: !1, link: null, renderValue: null, delay: 0, logState: function (e
                        ) {
                            (0, (e ? ke : xe).log)(
                                "tweener: clip=" + this.target.name + ", prop=" + this.propName + ", stat=" + this._state.name + ", from=" + this.fromValue + ", to=" + this.toValue + ", rval=" + this.renderValue(
                                    void 0, this.target).toFixed(3) + ", prog=" + this.progress.toFixed(3) + ", elap=" + (x.perfNow() - this.startTime).toFixed(2
                                    ) + ", dur=" + this.duration + ", dely=" + this.delay + ", link=" + !!this.link)
                        }, lastTweener: function () {
                            for (var e = this; e.link;
                            )e = e.link; return e
                        }, run: function (e, t) {
                            var n = this; if (t) n.renderValue(n.toValue, n.target); else {
                                var i, o = n.fromValue,
                                r = n.toValue - n.fromValue, s = (e - n.startTime) / n.duration; switch (n.ease) {
                                    case x.EASE_IN: i = r * s * s * s + o; break
                                        ; case x.EASE_IN_SLOW: i = r * s * s + o; break; case x.EASE_OUT: i = r * (--s * s * s + 1) + o; break; case x.EASE_OUT_SLOW: i = -r * s * (s - 2) + o; break
                                            ; default: i = r * s + o
                                }n.renderValue(i, n.target)
                            }
                        }, queue: function () {
                            if (!this._state.eq(a)) throw new Error(
                                "Unexpected tweener state: " + this._state.name); this._state = o, this.startTime = x.perfNow(), fe.push(this),
                                    x.tweeningInProgress.val || x.tweeningInProgress.set(!0, ve)
                        }, extend: function (e) {
                            if (e._state.neq(a)) throw new Error(
                                "Extending tweener must be in the not_queued state"); if (this._state.eq(s)) throw new Error(
                                    "Extended tweener must not be in the completed state"); if (!e.target) throw new Error(
                                        "Must not extend tweener from outside ClipGL"); this.lastTweener().link = e
                        }, kill: function () {
                            for (var e = this; e;)e._state = s,
                                e = e.link
                        }, finish: function () {
                            for (var e = this, t = 0; e;)if (e._state = s, e.renderValue(e.toValue, this.target, !0),
                                e.onEnd && e.onEnd(this), e = e.link, 100 == ++t) throw new Error("Infinite tweener callback loop detected")
                        }
                    },
                    x.clearAllTweeners = function () { fe.length = 0, me.length = 0, x.tweeningInProgress.set(!1, ve) }, x.PosPoint = function (e) {
                        var t = x.canvas.width / 2, n = x.canvas.height / 2; this._x = t, this._y = n, this._oglX = 2 * t * x.pixelWidth - 1,
                            this._oglY = 1 - 2 * n * x.pixelHeight, this.clip = e
                    }, x.PosPoint.prototype = Object.create(new X(null)),
                    x.PosPoint.prototype.distanceFrom = function (e) { var t = this._x - e._x, e = this._y - e._y; return Math.sqrt(t * t + e * e) },
                    x.PosPoint.prototype.assignNorm = function (e, t) { this.assign(e * x.canvas.width, t * x.canvas.height) },
                    x.PosPoint.prototype._renderValue = function (e, t) {
                        if (void 0 === e) return { x: t._position._oglX, y: t._position._oglY }
                            ; var n = t._position, i = !!(t.width % 2), o = !!(t.height % 2); 0 === t.angle || 180 === t.angle ? (e.x = i ? Math.floor(e.x) + .5 : Math.round(e.x)
                                , e.y = o ? Math.floor(e.y) + .5 : Math.round(e.y)) : (e.x = o ? Math.floor(e.x) + .5 : Math.round(e.x), e.y = i ? Math.floor(e.y
                                ) + .5 : Math.round(e.y)), e.x === n._x && e.y === n._y ? e.changed = !1 : (n._x = e.x, n._y = e.y, n._oglX = 2 * e.x * x.pixelWidth - 1,
                                    n._oglY = 1 - 2 * e.y * x.pixelHeight, x.vertMngr.move(t), e.changed = !0)
                    }, x.PosPoint.prototype.tween = (ue = {}, function (e, t, n, i, o, r) {
                        var s = this.clip; if (s.isDisposed) throw new Error("Attempted to access disposed clip " + s.name); if (this.disposed
                        ) e !== x.TW_DISPOSE && e !== x.TW_ABORT && Ee.errMonitor.sendReport("Attempted to set disposed property in clip " + s.name
                        ); else if (s.active || e === x.TW_DISPOSE) if (e === x.TW_DISPOSE) ke.log(s.name + ".position disposed"),
                            this.tweener && this.tweener.kill(), this.disposed = !0; else if (e === x.TW_ABORT) this.tweener && (ke.log(
                                s.name + ".position aborted"), this.tweener.kill(), this.assign(this._x, this._y)); else if (e === x.TW_FINISH) this.tweener && (
                                    ke.log(s.name + ".position -> [" + this._x + ", " + this._y + "] (finish)"), this.tweener.finish()); else if (r && this.tweener) i && i(
                                        null); else {
                                            o = new x.Tweener2("position", { x: e, y: t }, n, i, o); if (o._state !== a) throw new Error(
                                                "Unexpected tweener state. clp=" + s.name + ", tw-st=" + o._state); o.target = s, o.renderValue = this._renderValue, o.run = we,
                                                    this.tweener ? (ke.log(s.name + ".position -> [" + Math.round(e) + ", " + Math.round(t) + "] (extended tweener)"),
                                                        o.fromValue = this.tweener.lastTweener().toValue, this.tweener.extend(o)) : (ke.log(s.name + ".position -> [" + Math.round(e
                                                        ) + ", " + Math.round(t) + "] (tweener)"), o.fromValue = { x: this._x, y: this._y }, (this.tweener = o).queue())
                        } else e !== x.TW_ABORT && Ee.errMonitor.sendReport("Attempted to set property in inactive clip " + s.name)
                    }),
                    x.PosPoint.prototype.assign = (de = {}, function (e, t) {
                        return "number" == typeof e ? (de.x = e, de.y = t) : (de.x = e.x, de.y = e.y),
                            this.tween(x.TW_FINISH), this._renderValue(de, this.clip), de.changed
                    }), x.PosPoint.prototype.moveBy = function (e, t) {
                        this.assign(this._x + e, this._y + t)
                    }, Object.defineProperty(x.PosPoint.prototype, "x", {
                        get: function () {
                            if (this.clip.isDisposed
                            ) throw new Error("Attempted to access disposed clip"); return this._x
                        }
                    }), Object.defineProperty(x.PosPoint.prototype, "y", {
                        get: function () { if (this.clip.isDisposed) throw new Error("Attempted to access disposed clip"); return this._y }
                    }),
                    Object.defineProperty(x.PosPoint.prototype, "normX", {
                        get: function () {
                            if (this.clip.isDisposed) throw new Error(
                                "Attempted to access disposed clip"); return this._x / x.canvas.width
                        }
                    }), Object.defineProperty(x.PosPoint.prototype, "normY"
                        , {
                            get: function () {
                                if (this.clip.isDisposed) throw new Error("Attempted to access disposed clip")
                                    ; return this._y / x.canvas.height
                            }
                        }), Object.defineProperty(x.PosPoint.prototype, "htmlX", {
                            get: function () {
                                if (
                                    this.clip.isDisposed) throw new Error("Attempted to access disposed clip"); return Math.round(this.normX * _e.host.getWidth(
                                    ))
                            }
                        }), Object.defineProperty(x.PosPoint.prototype, "htmlY", {
                            get: function () {
                                if (this.clip.isDisposed) throw new Error(
                                    "Attempted to access disposed clip"); return Math.round(this.normY * _e.host.getHeight())
                            }
                        }), x.onLostContext = function (e) {
                            P.isAvailable = !1, x.stableContext = !1, xe.warn("Lost WebGL context."), e.preventDefault()
                        }, x.onRestoreContext = (he = !0,
                            function () {
                                he && (xe.log("ClipGL: WebGL context is restored."), d(), x.vertMngr.reset(), x.Texture.resetAll(),
                                    x.Shader.resetAll(), P.getError() === P.CONTEXT_LOST_WEBGL ? (he = !1, xe.error(
                                        "ClipGL: gl context lost during CGL reinitialization.")) : xe.log("ClipGL: Reinitialization is complete."))
                            }),
                    x.canvas.addEventListener("webglcontextlost", x.onLostContext, !1), x.canvas.addEventListener("webglcontextrestored",
                        x.onRestoreContext, !1), x.perfNow = window.performance && window.performance.now ? function () {
                            return window.performance.now()
                        } : (pe = 0, ge = function (e) { pe = e, window.requestAnimationFrame(ge) }, window.requestAnimationFrame(ge), function () { return pe })
            }
        }
        ).dependenciesReady = function () { return !(!Ce.base || !Ce.utils) }, Ce.addModInit("ClipGL", e))
}(), function () {
    "use strict"; var e
        , v = window.jigexGlobals.modules; v && !v.theme && ((e = function () {
            function e(e, t) {
                e.texUrl = n.imagesPath + "leather-" + e.name + ".jpg", e.altTexUrl = n.altImagesPath ? n.altImagesPath + "leather-" + e.name + ".jpg" : null
                    , e.color = t, i.push(e.name)
            } var n = window.jigexGlobals, t = v.Sym, i = (v.console, []), o = new t("blue", 1, "themes"), r = new t("brown",
                2, "themes"), s = new t("gray", 3, "themes"), a = new t("yellow", 4, "themes"), l = new t("white", 5, "themes"), c = new t("charcoal", 6,
                    "themes"), u = new t("lavender", 7, "themes"), d = new t("teal", 8, "themes"), h = new t("coral", 9, "themes"), p = new t("plum", 10,
                        "themes"), g = new t("green", 11, "themes"), m = new t("olive", 12, "themes"); e(u, {
                            background: "#95a2bd", panel: "#8296bd",
                            highlight: "#8ba0c9", border: "#56637d"
                        }), e(o, { background: "#7592ac", panel: "#5a86ac", highlight: "#6c93b6", border: "#3b5a75" }),
                            e(d, { background: "#5d747c", panel: "#50717d", highlight: "#5a7f8c", border: "#2f434a" }), e(p, {
                                background: "#a699a6",
                                panel: "#998899", highlight: "#a694a6", border: "#665b66"
                            }), e(g, {
                                background: "#99a399", panel: "#8a968a", highlight: "#96a396",
                                border: "#5b635b"
                            }), e(m, { background: "#68685a", panel: "#5c5c4a", highlight: "#696955", border: "#36362b" }), e(h, {
                                background: "#be9292", panel: "#b38181", highlight: "#bf8a8a", border: "#805c5c"
                            }), e(a, {
                                background: "#b69366", panel: "#a88556",
                                highlight: "#b58f5c", border: "#755c3c"
                            }), e(r, { background: "#997663", panel: "#8f6a57", highlight: "#a07662", border: "#563f35" }),
                            e(l, { background: "#dadada", panel: "#b3b3b3", highlight: "#bfbfbf", border: "#909090" }), e(s, {
                                background: "#9b9b9b",
                                panel: "#818181", highlight: "#8f8f8f", border: "#565656"
                            }), e(c, {
                                background: "#3d3d3d", panel: "#303030", highlight: "#343434",
                                border: "#202020"
                            }); var f = new v.Variant(void 0, "theme", function (e, t) { return f.oldTheme = t, !0 })
                ; f.getThemeFromOrdinal = function (e) { return e ? t.get("themes", e) : o }, f.getThemeNames = function () { return i },
                    f.isValidColor = function (e) { return e && "string" == typeof e && !!t.get("themes", e) }, f.setToDefault = function () { f.val = o },
                    f.isLoaded = new v.Variant(!1, "theme-is-loaded"), v.theme = f
        }).dependenciesReady = function () { return !(!v.base || !v.ClipGL) },
            v.addModInit("theme", e))
}(), function () {
    "use strict"; var e, y = window.jigexGlobals, b = y.modules, w = y.status; b && !b.photon && ((
        e = function () {
            function t(e, t, n) {
                e && (h.log("warning: photon error: err=%s, msg=%s, op=%s", e, t, void 0 === n ? "n/a" : n),
                    v.onError && v.onError({ errorCode: e, errorMsg: t, opCode: n }))
            } var n, o, i, r, s, a, e = window.location.search.includes("&key="
            ) ? "Photon-Javascript_SDK.js" : "photon-sdk.min.js", l = y.scriptsPath + e, e = y.altScriptsPath + e, c = "photon states", u = 1, d = y.parms(
            ).rgn || w.region, h = b.console, p = b.Variant, g = b.Sym, m = b.utils, f = {
                NOT_LOADED: new g("not-loaded", -999, c), LOADING: new g(
                    "loading", -998, c), ERR: new g("error", -1, c), UNINIT: new g("uninitialized", 0, c), CONNING_NAM: new g(
                        "connecting-to-name-server", 1, c), CONNED_NAM: new g("connected-to-name-server", 2, c), CONNING_MAS: new g(
                            "connecting-to-master-server", 3, c), CONNED_MAS: new g("connected-to-master-server", 4, c), LOBBY: new g("joined-lobby", 5, c),
                CONNING_GAM: new g("connecting-to-game-server", 6, c), CONNED_GAM: new g("connected-to-game-server", 7, c), JOIN: new g("joined",
                    8, c), DISCONN: new g("disconnected", 10, c)
            }, v = (r = [l, e], a = s = null, {
                ERR_CODE_OK: 0, stateVar: new p(f.NOT_LOADED, "photon.state",
                    p.LOG_CHANGES, p.LOG_CHANGES, function (e) { if (e === f.NOT_LOADED) throw new Error("Reinit of photon not allowed"); return !0 }),
                states: f, get gameInfo() { return o ? o.myRoom() : null }, load: (i = function (e) {
                    if (s) throw new Error(
                        "May not load photon script twice"); (s = document.createElement("script")).type = "text/javascript",
                            s.crossorigin = "anonymous", s.onload = function () {
                                var i; window.Photon ? (n = Photon.LoadBalancing.LoadBalancingClient,
                                    Photon.LoadBalancing.Constants.OperationCode, v.ERR_CODES = Photon.LoadBalancing.Constants.ErrorCode, (o = new n(
                                        Photon.ConnectionProtocol.Wss, "a0a94d7b-d90a-4161-ab65-91e8e3752c8c", "1.0")).onStateChange = function (e) {
                                            v.stateVar.set(
                                                g.get(c, e))
                                        }, o.onOperationResponse = t, o.onError = t, o.onJoinRoom = function () {
                                            o.myRoom().onPropertiesChange = function (e, t) {
                                                !t && v.onPropertyChange && v.onPropertyChange(e)
                                            }
                                        }, o.onActorJoin = function (e) {
                                            v.onPlayerJoin && v.onPlayerJoin({
                                                name: m.secureString(e.name), id: e.actorNr, isMe: e.isLocal
                                            })
                                        }, o.onActorLeave = function (e) {
                                            v.onPlayerLeave && v.onPlayerLeave({
                                                name: m.secureString(e.name), id: e.actorNr, isMe: e.isLocal
                                            })
                                        }, o.onEvent = function (e, t, n) {
                                            v.onEvent && (n = (n = o.myRoomActors(
                                            )[n]) && m.secureString(n.name) || "Another player", v.onEvent({ command: e, data: t, playerName: n }))
                                        }, i = w.recPhtnLogs || y.parms(
                                        ).plog || h.config.verbose, Exitgames.Common.Logger.prototype.log = function (e, t, n) {
                                            i && t && e >= this.level && (n = this.prefix + (
                                                3 === e ? " WARNING: " : " ") + t + " " + n.join(" "), p.log(n))
                                        }, i && o.setLogLevel(u), h.log("photon: script loaded"),
                                    v.stateVar.listenerLoopAction = !1, v.stateVar.set(f.UNINIT)) : h.log("warning: photon failed to initialize")
                            },
                            s.onerror = function () {
                                s.onload = null, s.onerror = null, document.body.removeChild(s), s = null, r.length ? i(r.shift()) : h.log(
                                    "warning: photon failed to load")
                            }, s.src = e, document.body.appendChild(s)
                }, function () {
                    v.stateVar.val = f.LOADING, i(r.shift()
                    )
                }), createAndJoinRoom: function (e) {
                    o && o.isInLobby() ? o.createRoom(a, {
                        isVisible: !1, maxPlayers: w.maxPlayers,
                        emptyRoomLiveTime: 0, suspendedPlayerLiveTime: 1, customGameProperties: e
                    }) : h.log(
                        "warning: photon: cannot create room until connected to lobby")
                }, joinRoom: function () {
                    o && o.isInLobby() ? o.joinRoom(a
                    ) : h.log("warning: photon: cannot enter room until connected to lobby")
                }, getNumPlayers: function () {
                    return o ? o.myRoomActorCount() : 0
                }, getMyPlayerId: function () { return o ? o.myActor().actorNr : null },
                getPlayerNameFromId: function (e) {
                    if (o && e) {
                        var t, n = o.myRoomActors(); for (t in n) if (n.hasOwnProperty(t) && n[t].actorNr === e
                        ) return m.secureString(n[t].name)
                    } return null
                }, getPlayerNames: function () {
                    if (o) {
                        var e, t = o.myRoomActors(), n = []; for (e in t
                        ) t.hasOwnProperty(e) && n.push(m.secureString(t[e].name)); return n
                    } return []
                }, isMaster: function () {
                    if (o) return o.myActor(
                    ).actorNr === o.myRoomMasterActorNr()
                }, isOnlyPlayer: function () { if (o) return 1 === o.myRoomActorCount() }, connect: function (e, t
                ) { o && (t = m.secureString(t), a = e, o.myActor().setName(t), o.setUserId(e + "-" + t), o.connectToRegionMaster(d)) },
                disconnect: function () { o && o.disconnect() }, sendEvent: function (e) { o && o.raiseEvent(0, e) }, changeProperty: function (e, t) {
                    o.myRoom().setCustomProperty(e, t)
                }, changeProperties: function (e) { o.myRoom().setCustomProperties(e) }, onPlayerJoin: null,
                onPlayerLeave: null, onPropertyChange: null, onEvent: null, onError: null
            }); b.photon = v
        }).dependenciesReady = function () {
            return b.base && b.utils
        }, b.addModInit("photon", e))
}(), function () {
    "use strict"; var e, G = window.jigexGlobals, V = G.modules
        ; V && !V.multiplayer && ((e = function () {
            var e, I = "jigex-mp-game-rec", L = V.console, A = V.Variant, O = V.photon, j = V.utils, M = null, B = !1,
            N = null, R = O.states, D = function () {
                function a(e, t) { r[e] = t, s = !0 } var o = "", n = null, i = !!G.parms().gameId, r = {}, s = !1, l = !1
                    ; window.addEventListener("unload", function () { D.leaveGame() }); function c() {
                        var e, t, n = "remote upd: "; for (e in this
                        ) !this.hasOwnProperty(e) || "function" != (t = typeof this[e]) && "object" != t && (n += e + "=" + this[e] + ", "); return n ? n.substring(0,
                            n.length - 2) : ""
                    } function u() { return c.call(this.data) } var t = function () {
                        var e = D.getNumPlayers(), t = 200
                        ; 15 <= e ? t = 1e3 : 12 <= e ? t = 500 : 9 <= e && (t = 300), clearInterval(N), e && (N = setInterval(d, t))
                    }; function d() {
                        s && (D.timer.isRunning(
                        ) && D.timer.update(), O.changeProperties(r), s = !(r = {}))
                    } function h(e, t) {
                        if (O.stateVar.val !== R.LOADING) switch (g(),
                            arguments.length && (o = j.secureString(e), n = t), O.stateVar.val) {
                                case R.NOT_LOADED: O.load(), D.onLoading && D.onLoading(); break
                                    ; case R.UNINIT: case R.DISCONN: try { O.connect(D.gameId, o) } catch (e) {
                                        if (!e.message.includes(
                                            "Client: NameServer: [203] PhotonPeer[_send] - Operation 230 - failed")) throw e; L.warn(
                                                "failed to connect to the game server"), V.ui.msgbox(
                                                    "Failed to connect to the game server. Try again by reloading this game.")
                                    } break; case R.LOBBY: i ? O.joinRoom(
                                    ) : O.createAndJoinRoom(n)
                            }
                    } var p, g = function () {
                        var e = M && M.Puzzle.curr; l = s = !(r = {}), b = [], w = [], v = [], y = [], s = !(r = {}),
                            e && e.multiplayerGameId && M.Puzzle.curr.resetPieces()
                    }; g(), O.stateVar.addListener(function (e) {
                        switch (e) {
                            case R.UNINIT:
                                D.ERR_CODES = O.ERR_CODES; case R.LOBBY: h(); break; case R.JOIN: if (
                                    O.gameInfo._customProperties && void 0 === O.gameInfo._customProperties.rot) throw new Error(
                                        "Empty game info object encountered"); i = !0, z.set(!0); break; case R.DISCONN: g(), z.set(!1); break; case R.ERR: g(),
                                            D.leaveGame()
                        }
                    }), O.onError = function (e) { D.errorVar.set(e), D.errorLogsPresent = !0 }, O.onPlayerJoin = function (e) {
                        t(),
                        D.errorLogsPresent = !1, D.onPlayerJoinVar.val = e
                    }, O.onPlayerLeave = function (e) { t(), D.onPlayerExitVar.val = e }, O.onEvent = (
                        p = document.getElementById("jigex-canvas"), function (e) {
                            if (l) if (e.data) {
                                var t = {
                                    id: e.data.id, nam: e.playerName,
                                    cmd: e.data.cmd, ang: e.data.ang, data: e.data, toString: u
                                }; t.data.hasOwnProperty("x") && t.data.hasOwnProperty("y") && (
                                    t.data.x *= p.width, t.data.y *= p.height), D.onEvent && j.sysTiming.isRunning && D.onEvent(t)
                            } else {
                                var n = typeof e; try {
                                    n = JSON.stringify(e)
                                } catch (e) { } L.warn("unexpected mp event received: evt=" + n)
                            }
                        }); var m, f = document.getElementById(
                            "jigex-canvas"), v = [], y = [], b = [], w = [], e = [], x = function (e) {
                                P(e.cachedPiece, "piece"), P(e.cachedRefPiece, "ref piece"), P(
                                    e.pivotPiece, "pivot piece")
                            }; function P(e, t) { e && (e.logState(t), e.logHistory()) } var k, _ = function () {
                                if (_.isRunning = !0,
                                    !D.onAction) throw new Error("Multiplayer onAction handler not set"); if (D.joinedToGameVar.val) {
                                        for (; b.length;)m = b.shift()
                                            , D.onAction(m) || e.push(m); if (e.length) return b = e, e = [], void setTimeout(_, 100); for (; w.length;)m = w.shift(), D.onAction(m
                                            ) || e.push(m); return e.length ? (w = e, e = [], void setTimeout(_, 100)) : v.length || y.length ? (b = v, v = [], w = y, y = [], void setTimeout(_, 0
                                            )) : void (_.isRunning = !1)
                                    }
                            }; O.onPropertyChange = (k = function () {
                                var e; B = !1, D.joinedToGameVar.val && (e = M.Puzzle.curr,
                                    !document.hidden && e && e.stateVar.val.gte(G.PS_WAITING) ? (L.log("resume multiplayer processing"), g(),
                                        D.onSettingChange && D.onSettingChange("edo", D.gameInfo.edo, !0), O.onPropertyChange(D.gameInfo, !0), e.auditPieces()
                                    ) : j.sysTiming.onRunning(k))
                            }, function (e, t) {
                                if (!B) {
                                    if (1e4 < j.sysTiming.stoppedDuration) return L.log(
                                        "suspend multiplayer processing"), g(), j.sysTiming.onRunning(k), void (B = !0); for (var n in 0, e) if (e.hasOwnProperty(n) && (
                                            !t || 0 === n.indexOf("p-"))) {
                                                var i = e[n], o = parseInt(n.substring(2), 10); if (isNaN(o)) !t && D.onSettingChange && D.onSettingChange(
                                                    n, i); else if ((i = function (e) { var t, n = { toString: c }; for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]); return n }(e[n])).id = o,
                                                        i.immediate = t, i.hasOwnProperty("x") && i.hasOwnProperty("y")) i.x *= f.width, i.y *= f.height, i.m = !!i.m, i.a *= 90,
                                                            i.p = O.getPlayerNameFromId(i.p), v.push(i); else {
                                                                if (!i.hasOwnProperty("g")) throw L.log(i.toString()), new Error(
                                                                    "Unrecognized multiplayer update"); i.p = O.getPlayerNameFromId(i.p), y.push(i)
                                                }
                                        } t && D.gameInfo.cmplt && (
                                            D.completeWhenLoaded = !0), _.isRunning || !v.length && !y.length || (t ? function () {
                                                if (!D.onAction) throw new Error(
                                                    "Multiplayer onAction handler not set"); for (; v.length;)if (m = v.shift(), !D.onAction(m)) throw x(m), new Error(
                                                        "Multiplayer action failed to process"); for (; y.length;)if (m = y.shift(), !D.onAction(m)) throw x(m), new Error(
                                                            "Multiplayer group action failed to process")
                                            } : _)(), l = !0
                                }
                            }); var E, C, S, T, z = new A(!1, "mp-joined-to-game", function (e) {
                                if (e
                                ) {
                                    var t = O.gameInfo._customProperties, n = Date.now(), i = !1; if (t.cmplt || (-1 === t.sesn ? (i = !0, L.warn.once(
                                        "failed to connect to game " + D.gameId + ": session id is -1")) : ((e = j.localStore.getItem(I)) && (e = JSON.parse(e)
                                        ).gameId !== D.gameId && (e = null), O.isOnlyPlayer() ? (e ? t.sesn >= e.expectedSessionId ? (e.expectedSessionId = t.sesn + 1,
                                            e.lastAccess = n, j.localStore.setItem(I, JSON.stringify(e))) : (i = !0, L.warn.once(
                                                "failed to connect to game " + D.gameId + ": session=" + t.sesn + ", expected_session=" + e.expectedSessionId)) : (e = {
                                                    gameId: D.gameId, expectedSessionId: t.sesn + 1, lastAccess: n
                                                }, j.localStore.setItem(I, JSON.stringify(e))), O.changeProperties({
                                                    sesn: i ? -1 : e.expectedSessionId
                                                })) : (e = { gameId: D.gameId, expectedSessionId: t.sesn, lastAccess: n }, j.localStore.setItem(I,
                                                    JSON.stringify(e))))), i) return O.disconnect(), setTimeout(function () { h(o, null) }, 2e3), !1
                                } return !0
                            }, A.LOG_CHANGES,
                                A.LOG_CHANGES); return z.addListener(function () {
                                    return document.addEventListener("visibilitychange", function () {
                                        L.log(
                                            "tab has transitioned to " + (document.hidden ? "hidden" : "visible"))
                                    }), "remove"
                                }), {
                                    MAX_NAME_LEN: 20, ERR_CODES: null, DEBUG: !1,
                                    joinedToGameVar: z, errorVar: new A(null, "mp-error", A.LOG_CHANGES, A.LOG_CHANGES), onPlayerJoinVar: new A(null,
                                        "mp-player-join", A.LOG_CHANGES, A.LOG_CHANGES), onPlayerExitVar: new A(null, "mp-player-exit", A.LOG_CHANGES, A.LOG_CHANGES),
                                    onAction: null, onEvent: null, onSettingChange: null, onLoading: null, createdGame: !1, completeWhenLoaded: !1, placingPieces: !1,
                                    errorLogsPresent: !1, logGameInfo: function () {
                                        z.val && (L.log(JSON.stringify(O.gameInfo._customProperties)),
                                            this.dbug = function () { })
                                    }, get gameInfo() { return z.val ? O.gameInfo._customProperties : null }, get myPlayerName() { return o },
                                    validatePlayerName: function (e, t) {
                                        t = t ? 2 * this.MAX_NAME_LEN : this.MAX_NAME_LEN; return e && e.length >= t && (55296 <= (t = (
                                            e = e.length > t ? e.substr(0, t) : e).codePointAt(t - 1)) && t <= 56319 && (e = e.substr(0, e.length - 1))), e
                                    }, getPieceInfo: function (e) {
                                        var t = O.gameInfo._customProperties; if (z.val) {
                                            if (e) { var n = t["p-" + e]; return n ? (n.g && n.g !== e && (n = t["p-" + n.g]), n) : null }
                                            return t
                                        } return null
                                    }, isConnecting: function () {
                                        return O.stateVar.val.gte(R.CONNING_NAM) && O.stateVar.val.lte(R.CONNED_GAM)
                                    }, isMaster: function () { return this.joinedToGameVar.val && (O.isMaster() || O.isOnlyPlayer()) }, createAndJoinGame: function (e, t
                                    ) { this.isConnecting() || (h(this.validatePlayerName(e), t), this.createdGame = !0) }, joinGame: function (e) {
                                        e = e ? this.validatePlayerName(e) : o; if (!this.isConnecting()) {
                                            if (!e) throw new Error(
                                                "Cannot join multiplayer game without a player name"); h(e, null), this.createdGame = !1
                                        }
                                    }, leaveGame: function () {
                                        O.disconnect(
                                        ), z.set(!1)
                                    }, getNumPlayers: function () { return z.val ? O.getNumPlayers() : 0 }, getPlayerNames: function () {
                                        return z.val ? O.getPlayerNames() : []
                                    }, sendEvent: function (e, t) {
                                        var n = { id: t.id, cmd: e }; "rotate" === e && (n.ang = t.angle),
                                            O.sendEvent(n)
                                    }, sendUpdate: function (e, t) {
                                        var n = !!t && t.isPivot, i = !!t && t.wasCaptured, o = "p-", r = {},
                                        s = e.group ? e.group.refPiece : e; this.gameInfo.indie && !this.isMaster() && i || (o += s.id.toString(), r.m = s.hasMoved ? 1 : 0,
                                            r.x = s.position.normX.toFixed(5), r.y = s.position.normY.toFixed(5), r.a = Math.round(s.angle / 90), r.g = s.group ? s.group.id : 0,
                                            r.p = O.getMyPlayerId(), n && e !== s && (t = M.Piece.gap, n = V.ClipGL.insts["jigex-canvas"].canvas, t.measure(e, s, !1, e.angle), r.x = ((
                                                e.position.x + t.x) / n.width).toFixed(5), r.y = ((e.position.y + t.y) / n.height).toFixed(5), r.pv = e.id), i && (r.wc = 1), a(o, r))
                                    },
                                    sendGroupUpdate: function (e) { var t = "p-", n = {}; t += e.id.toString(), n.g = e.group.id, n.p = O.getMyPlayerId(), a(t, n) },
                                    changeSetting: function (e, t) { a(e, t) }, placePieces: function () {
                                        this.placingPieces = !0, g(), O.onPropertyChange(this.gameInfo, !0
                                        ), this.placingPieces = !1
                                    }, timer: (T = {
                                        onRunningChange: C = null, isRunning: (E = !(S = function () {
                                            D.timer.isRunning() && (D.isMaster(
                                            ) ? D.timer.update() : C = setTimeout(S, 1e3))
                                        }), function () {
                                            var e = !(!z.val || D.gameInfo.cmplt || !C); return E !== e && (E = e,
                                                this.onRunningChange && this.onRunningChange(e)), e
                                        }), start: function () {
                                            var e, t; z.val && !D.gameInfo.cmplt && (D.isMaster() && (
                                                e = D.gameInfo, t = Date.now(), O.changeProperties({ elpsd: e.elpsd + (e.last - e.strt), strt: t, last: t, strtd: !0 })), clearTimeout(C),
                                                C = setTimeout(S, 1e3), this.isRunning())
                                        }, conditionalStart: function () {
                                            if (z.val && !D.gameInfo.cmplt) {
                                                var e = D.gameInfo; if (
                                                    !O.isOnlyPlayer() && e.strtd) return clearTimeout(C), C = setTimeout(S, 1e3), this.isRunning(), !0
                                            } return !1
                                        }, stop: function () {
                                            var e, t; this.isRunning() && D.isMaster() && (e = Date.now(), t = D.gameInfo, O.changeProperties({
                                                elpsd: t.elpsd + (e - t.strt), strt: 0,
                                                last: e, cmplt: !0
                                            }), this.isRunning())
                                        }, stopDateString: function () {
                                            var e = D.gameInfo
                                            ; return e && e.cmplt ? j.convertTimestampToLocalDateAndTime(e.last) : ""
                                        }, getElapsedSecs: function () {
                                            var e = D.gameInfo; if (e) {
                                                var t = this.isRunning() ? Date.now() : e.last, e = e.elpsd + (e.cmplt ? 0 : t - e.strt); return Math.round(e / 1e3)
                                            } return 0
                                        },
                                        update: function () {
                                            var e; z.val && !D.gameInfo.cmplt && (r.last || (e = Date.now(), D.gameInfo.last = e, r.last = e, s = !0, clearTimeout(C)
                                            ), clearTimeout(C), C = setTimeout(S, 1e3))
                                        }
                                    }, z.addListener(function (e) {
                                        e ? (O.isOnlyPlayer() && O.changeProperty("strtd", !1),
                                            L.log("number of players: " + O.getNumPlayers())) : (clearTimeout(C), C = null, D.timer.isRunning())
                                    }), T)
                                }
            }()
            ; Object.defineProperty(D, "gameId", { get: (e = G.parms().gameId || j.genGuuid(), function () { return e }) }), V.onInitComplete(
                function () { M = V.player, V.ClipGL.insts["jigex-canvas"] }), V.multiplayer = D
        }).dependenciesReady = function () {
            return !!(
                V.base && V.utils && V.photon && V.ClipGL)
        }, V.addModInit("multiplayer", e))
}(), function () {
    "use strict"; var e,
        T = window.jigexGlobals, z = T.modules; z && !z.snapIndicator && ((e = function () {
            var t, n, i, o, r = z.console, s = z.Sym, e = z.utils,
            a = z.multiplayer, l = e.sysTiming.Timer, c = null, u = null, d = z.niftybar, h = null, p = null, g = new l, m = null, f = null, v = null, y = {
                piece1: null, piece2: null
            }, b = { left: null, right: null }, w = (t = 1, n = [], i = [], o = function (e) {
                e = new c.Clip({
                    layer: s.get("layers",
                        "top-layer").ordinal, name: "snap-" + e + "-" + t, image: { data: b[e] }
                }); return e.kill = x, e.opacity = 0, e.active = !1, e
            }, {
                isReady: function () { return !(!b.left || !b.right) }, getClip: function () {
                    var e = n.pop() || (this.isReady() ? {
                        id: t++, timer: new l,
                        left: o("left"), right: o("right"), kill: function () { this.timer.clear(), this.left.kill(), this.right.kill(), w.free(this) }
                    } : null); return e && i.push(e), e
                }, free: function (e) { var t = i.indexOf(e); -1 !== t && i.splice(t, 1), n.push(e) }, kill: function () {
                    for (
                        ; i.length;)i.pop().kill()
                }
            }); function x() { this.killTweeners(), this.opacity = 0, this.active = !1 } function P(e) {
                var t = e.response, e = e.clip; t.width && t.height ? b[e] = t : r.log("warn: snap indicator " + e + " image did not load")
            } function k(e) {
                var t = e.left.position, n = e.right.position; t.tween(t.x + 15, t.y, 500, null, c.EASE_IN), n.tween(n.x - 15, n.y, 500, function (e) {
                    e.timer.set(500, S.bind(null, e))
                }.bind(null, e), c.EASE_IN)
            } function _(e) {
                var t, n, i, o = e.piece, r = e.neighbor; return i = (
                    i = o.stateVar.val.eq(h, p) || r.stateVar.val.eq(h, p) ? (n = o.position.x, o.position.y - 50) : (t = e.piece.position.x,
                        r = e.piece.position.y, o = e.neighbor.position.x, i = e.neighbor.position.y, n = (t <= o ? t : o) + Math.round(Math.abs(t - o) / 2), (r <= i ? r : i
                        ) + Math.round(Math.abs(r - i) / 2) - 50)) <= 0 ? i + 100 : i, e.left.fadeIn(200), e.left.position.assign(n - 21, i), e.right.fadeIn(200,
                            k.bind(null, e)), e.right.position.assign(n + 20, i - 2), {
                                htmlX: Math.round(n / c.canvas.width * u.host.getWidth()),
                    htmlY: Math.round(i / c.canvas.height * u.host.getHeight())
                }
            } function E() {
                if (u.Puzzle.curr) {
                    var e = m.neighborWithinSnapRange(
                        !1), t = m === y.piece1 && e === y.piece2; if (e && !t) { t = w.getClip(); if (!t) return; t.piece = m, t.neighbor = e, _(t) } e ? (y.piece1 = m,
                            y.piece2 = e) : (y.piece1 = null, y.piece2 = null)
                }
            } function C() {
                f = new e.WebReq(T.imagesPath + "snap-indicator-left.png",
                    T.altImagesPath ? T.altImagesPath + "snap-indicator-left.png" : null), v = new e.WebReq(T.imagesPath + "snap-indicator-right.png",
                        T.altImagesPath ? T.altImagesPath + "snap-indicator-right.png" : null), f.clip = "left", f.onload = P, f.send(), v.clip = "right",
                v.onload = P, v.send()
            } var S = function (e) {
                e.left.fadeOut(200), e.right.fadeOut(200, function (e) {
                    e.left.opacity = 0,
                    e.right.opacity = 0, e.left.active = !1, e.right.active = !1, e.piece = null, e.neighbor = null, w.free(e)
                }.bind(null, e))
            }
                ; z.onInitComplete(function () {
                    h = s.get("PC", "remote-select"), p = s.get("PC", "remote-control"), u = z.player, c = u.clipGL,
                    u.delayedActions.add(function () { new l(1e3, C) })
                }), z.snapIndicator = {
                    check: function (e) { w.isReady() && (m = e, g.set(450, E)) },
                    show: function (e, t) {
                        var n, i; w.isReady() && e !== y.piece1 && (i = w.getClip(), n = e.remotePlayerName, i && (i.piece = e, i.neighbor = t,
                            i = _(i), n && (n = a.validatePlayerName(n, !0), i = { left: Math.round(i.htmlX - d.measure(n) / 2), top: i.htmlY - 50 }, d.showTooltip(i, n,
                                this.aniDuration))))
                    }, kill: function () { g.clear(), w.kill() }, aniDuration: 1400
                }
        }).dependenciesReady = function () {
            return !!(
                z.base && z.ClipGL && z.niftybar && z.multiplayer)
        }, z.addModInit("snapIndicator", e))
}(), function () {
    "use strict"; var t,
        et = window.jigexGlobals, tt = et.modules; tt && !tt.ui && ((t = function () {
            var t, n, i, o, r, s, e, a, l, c, u, d, h, p, g, m = window.Sym,
            f = tt.console, v = tt.Variant, y = et.debug, b = tt.niftybar, w = window.jQuery, x = tt.utils, P = tt.multiplayer, k = x.localStore,
            _ = et.errMonitor, E = null, C = navigator.userAgent, S = C.includes("Trident/"), T = C.includes("Edge/"), z = et.status.framed,
            I = document.getElementById("jigex-control-host"), L = null, A = document.getElementById("jigex-spinner"), O = b.getPnl(
                "jigex-spinner-container"), j = b.getBtn("jigex-capture-btn"), M = b.getBtn("jigex-edges-btn"), B = b.getBtn(
                    "jigex-edges-btn-alt"), N = b.getBtn("jigex-boxtop-btn"), R = b.getBtn("jigex-test-btn"), D = b.getBar("jigex-toolbar"),
            G = b.getPnl("jigex-start-dlg"), V = b.getBar("jigex-start-tb"), F = w("#jigex-nop-buttons"), H = b.getPnl("jigex-help-panel"), W = (
                b.getPnl("jigex-help-content"), document.getElementById("jigex-help-btn")), U = b.getPnl("jigex-msgbox-dlg"), q = w(
                    "#jigex-msgbox-content"), Y = b.getBar("jigex-msgbox-tb"), X = b.getPnl("jigex-prog-menu"), J = b.getBtn("jigex-modify-btn"), K = (
                        b.getBtn("jigex-visit-btn"), w("#jigex-open-btn")), Q = w("#jigex-open-file-btn"), Z = b.getBtn("jigex-clock"), $ = b.getPnl(
                            "jigex-pause-scrn"), ee = b.getPnl("jigex-pause-dlg"), te = w("#jigex-status-line"), ne = b.getBtn("jigex-show-ls-btn"),
            ie = b.getBtn("jigex-clear-ls-btn"), oe = b.getPnl("jigex-toast-pnl"), re = b.getPnl("jigex-log-dlg"), se = b.getBtn(
                "jigex-test-atn-btn"), ae = b.getBtn("jigex-test-btn-alt"), le = (b.getPnl("jigex-promo-1"), b.getBtn("jigex-fullscreen-btn")),
            ce = document.getElementById("jigex-support-tools-link"), ue = document.getElementById("jigex-support-tools-panel"),
            de = document.getElementById("jigex-hard-reload-btn"), he = document.getElementById("jigex-prog-log-btn"), pe = (
                document.getElementById("jigex-clear-recs-btn"), document.getElementById("jigex-import-rec-btn")), ge = (
                    document.getElementById("jigex-tag-line"), document.getElementById("jigex-mute-btn")), me = b.getBtn("jigex-multiplayer-btn"
                    ), fe = document.getElementById("jigex-help-mp"), C = Array.prototype.slice.call(document.getElementsByTagName("input")), ve = !1
            , S = navigator.userAgent.includes("Trident/"), ye = C.filter(function (e) { return "text" === e.type && !e.readOnly }); function be(e) {
                t = i, i = e.touches[0].screenY, "touchstart" === e.type ? o = 0 : isNaN(t) || i === t || (o = 0 < i - t ? 1 : 2)
            } function we(e) {
                try {
                    if (e.codePointAt
                    ) { for (var t = e.length, n = "nam=" + e + ", len=" + t + ", cpts: ", i = 0; i < t; i++)n += e.codePointAt(i), i < t - 1 && (n += ", "); f.log(n) }
                } catch (e
                ) { f.log("failed to log player name. error=" + e.message) }
            } function xe() { N.onclick = e, N.onmouseenter = a, N.onmouseenter = l }
            function Pe() { document.addEventListener("touchstart", c, !1) } n = [document.getElementById("jigex-credits-content"),
            document.getElementById("jigex-help-content"), document.getElementById("jigex-log-pane")], i = NaN, o = 0, r = null, I && (
                S || T ? I.style["touch-action"] = "none" : (I.addEventListener("touchstart", function (e) {
                    e.touches && (r = function (e) {
                        for (; e;) {
                            if (
                                n.includes(e)) return e.clientHeight < e.scrollHeight ? e : null; e = e.parentElement
                        } return null
                    }(e.target)) && be(e)
                }),
                    I.addEventListener("touchmove", function (e) {
                        r ? (be(e), (
                            1 === o && 0 === r.scrollTop || 2 === o && r.scrollTop >= r.scrollHeight - r.clientHeight) && e.preventDefault()) : e.preventDefault()
                    }))),
                j && (j.onclick = function () { var e = E ? E.Puzzle.curr : null; e && e.toggleCaptureMode() }), M.onclick = (s = null, function (e) {
                    var t, n,
                    i = E.Puzzle.curr; i && i.state.gte(et.PS_READY) && (t = i.pieces.isEdgeComplete, n = i.multiplayerGameId && 1 < P.getNumPlayers(),
                        t || n ? (i.relayer(), i.scatter(!0, e.shiftKey, !0), i.updateRecord()) : (s = s || m.get("EDO", 1), i.showEdgesOnly(!i.showEdgesOnly(),
                            s), P.joinedToGameVar.val && P.changeSetting("edo", i.showEdgesOnly())))
                }), B && (B.onclick = M.onclick), N.onclick = function () {
                    var e = E && E.Puzzle.curr; e && e.customMystery ? Ue.msgbox("This puzzle's box top preview has been hidden for added challenge."
                    ) : L && (L.toggleDisplay(), N.toggled(L.isShowing()))
                }, N.ontouchstart = (e = N.onclick, a = N.onmouseenter, l = N.onmouseleave,
                    c = function () { document.removeEventListener("touchstart", c), L && L.isPeeking() && L.unpeek() }, function () {
                        var e = E.Puzzle.curr
                        ; N.onclick = null, N.onmouseenter = null, N.onmouseenter = null, setTimeout(xe, 1e3), L && (L.isShowing() || L.isPeeking() ? (
                            L.toggleDisplay(), N.toggled(L.isShowing())) : e && e.customMystery ? Ue.msgbox(
                                "This puzzle's box top preview has been hidden for added challenge.") : (setTimeout(L.peek.bind(L), 200), setTimeout(Pe, 200)
                        ))
                    }), N.onmouseenter = function () { var e = E ? E.Puzzle.curr : null; !L || e && e.customMystery || L.peek() }, N.onmouseleave = function () {
                        L && L.unpeek()
                    }, X.onShow = function () { J.enabled(!G.visible() && E && E.Puzzle.curr && E.Puzzle.curr.isReady()) }, J.enabled(!1),
                J.onclick = function () { var e = E.Puzzle.curr; G.visible(!0), e && (e.state = et.PS_WAITING) }, ge && (ge.onclick = function () {
                    et.audioMuted(!et.audioMuted()), Ue.update()
                }), z ? K[0].style.display = "none" : (Q.click(function () { X.visible(!1) }), Q.hover(
                    function () { try { K.css("background-color", "#f0f0f0") } catch (e) { } }, function () {
                        try { K.css("background-color", "white") } catch (e
                        ) { }
                    })), z || (u = Q[0]).addEventListener("change", function (e) {
                        return Ue.onFileSelect && (ve = !0, Ue.onFileSelect(e)), u.value = "",
                            !1
                    }, !1), W && (W.onclick = function () { H.visible(!0) }), ce && ue && (ce.onclick = function () {
                        var e = document.getElementById(
                            "jigex-help-content"); return "block" === ue.style.display ? ue.style.display = "none" : (ue.style.display = "block",
                                e.scrollTop = e.scrollHeight), !1
                    }), de && (de.onclick = function () { window.location.reload(!0) }), he && (he.onclick = function () {
                        Ue.programLog.show()
                    }), pe && (pe.onclick = (d = b.getPnl("jigex-import-rec-dlg"), h = document.getElementById("jigex-puzzle-rec")
                        , b.getBtn("jigex-rec-import").onclick = function () { }, function () { d.visible(!0), h.focus() })), le && !et.isIOS && (
                            pe = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled
                            ,
                            document.exitFullscreen = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen
                            , I.requestFullscreen = I.requestFullscreen || I.webkitRequestFullscreen || I.mozRequestFullScreen || I.msRequestFullscreen,
                            I.requestFullscreen && pe && (le.button.css("display", "block"), le.onclick = function () {
                                document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement ? document.exitFullscreen(
                                ) : I.requestFullscreen()
                            }, b.enabledVar.addListener(function (e) { e && le.refresh() }), document.onfullscreenchange = function () {
                                var e = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
                                    ; le.toggled(!!e)
                            }, document.onwebkitfullscreenchange = document.onfullscreenchange,
                                document.onmozfullscreenchange = document.onfullscreenchange, document.onmsfullscreenchange = document.onfullscreenchange,
                                document.onfullscreenchange())), y && (R.button.css("display", "block"), ne.onclick = function () { E.testShowLS() },
                                    ie.onclick = function () { E.testClearLS() }, se.onclick = function (e) { E.test(e.shiftKey) }, ae && (ae.onclick = se.onclick)), function (
                                    ) {
                                        var t = [], n = [], e = document.getElementById("jigex-clock"), i = document.getElementById("jigex-toolbar"),
                                        o = document.getElementById("jigex-toolbar-left"); if (o) {
                                            for (var r = document.getElementsByClassName("main-tb-btn"),
                                                s = r.length, a = getComputedStyle(r[0]), l = parseInt(a.width) + 2 * parseInt(a["padding-left"]), c = 2 * parseInt(getComputedStyle(o
                                                )["padding-left"], 10), u = s - 1; 0 <= u; u--) {
                                                    var d, h = r[u]; "none" === w(h).css("display") ? s-- : h.hasAttribute("data-adaptable") && ((
                                                        d = document.getElementById(h.id + "-alt")) && ((h.jigexAltBtn = d).style.display = "none"), t.push(h))
                                            } t.sort(function (e, t) {
                                                return e.getAttribute("data-adaptable") < t.getAttribute("data-adaptable") ? 1 : -1
                                            }); var p = s * l + parseInt(getComputedStyle(e
                                            ).width), e = function () {
                                                var e = parseInt(getComputedStyle(i).width, 10) - c - p + n.length * l; if (e < 0) for (; e < 0 && t.length;)(h = t.pop()
                                                ).style.display = "none", n.push(h), e += l, h.jigexAltBtn && (h.jigexAltBtn.style.display = "block"); else for (; l <= e && n.length;)(
                                                    h = n.pop()).style.display = "block", t.push(h), e -= l, h.jigexAltBtn && (h.jigexAltBtn.style.display = "none")
                                            }; e(),
                                                addEventListener("resize", e, !1)
                                        }
                                    }(), se = "verbose" === y, (p = document.getElementById("jigex-verbose-chkbox")) && (
                                        p.onclick = function () {
                                            f.config.verbose = p.checked, Ue.verboseLoggingVar.val = p.checked, y && (
                                                v.prototype.extLogVerbosity = p.checked ? v.LOG_CHANGES : v.LOG_NONE)
                                        }, se && (p.checked = !0, p.onclick(null))), (
                                            g = document.getElementById("jigex-alt-audio-chkbox")) && (tt.Sonic === tt.SonicH5 && !et.forceAltAudio ? g.disabled = !0 : (
                                                g.checked = et.forceAltAudio, g.onchange = function () {
                                                    var e = g.checked; g.checked = !1, e ? et.modules.ui.msgbox(
                                                        "It is recommended not to use alternate audio unless you cannot hear this puzzle program's sound effects.<br/><br/>Do you want to continue?"
                                                        , ["jigex-mb-yes", "jigex-mb-no"], function (e) {
                                                            "yes" === e && (g.checked = !0, k.setItem("jigex-alt-audio", "true"),
                                                                et.modules.ui.msgbox("Reload this puzzle to activate the change."))
                                                        }) : (k.removeItem("jigex-alt-audio"),
                                                            et.modules.ui.msgbox("Reload this puzzle to activate the change."))
                                                })); var ke, _e, Ee, Ce, Se, Te, ze, Ie, Le, Ae, Oe, je, Me, Be, Ne,
                                                    Re, De, Ge, Ve, Fe, He, We, Ue = {
                                                        OPEN_HAND_CURSOR: "cursor: pointer; cursor: -webkit-grab; cursor: -moz-grab; cursor: grab",
                                                        CLOSED_HAND_CURSOR: "cursor: pointer; cursor: -webkit-grabbing; cursor: -moz-grabbing; cursor: grabbing",
                                                        NOT_ALLOWED_CURSOR: "cursor: not-allowed", NO_CURSOR: "cursor: none", DEFAULT_CURSOR: "cursor: default", isReady: !0,
                                                        verboseLoggingVar: new v("verbose" === y, "verbose logging"), textInputMode: function () {
                                                            var e = document.activeElement
                                                            ; return e && -1 !== ye.indexOf(e)
                                                        }, onTextInputBlur: (Ne = [], ye.forEach(function (e) { e.addEventListener("blur", Qe) }), function (e
                                                        ) { e && this.textInputMode() && Ne.push(e) }), starterDlg: (Me = 220 === G.panel.width(), Be = !1, G.update = function () { },
                                                            G.cloak = function () { G.panel.css("display", "none"), G.isCloaked = !0 }, G.uncloak = function () {
                                                                G.panel.css("display", "block"),
                                                                G.isCloaked = !1
                                                            }, G.onShow = function () {
                                                                var e = E.Puzzle.curr, t = e && e.multiplayerGameId; Be || !me || z || (Be = !0, G.panel.width(
                                                                    Me ? 256 : 356), me.button.css("display", "block"), fe && (fe.style.display = "block")), Ue.rotateBtn.toggled(
                                                                        E.Puzzle.curr && E.Puzzle.curr.rotatable), Ue.rotateBtn.enabled(!t), Ue.numPiecesBtn.enabled(!t && !e.customMystery),
                                                                    me && e.stateVar.addListener(G.update)
                                                            }, G), numPiecesBtn: b.getBtn("jigex-num-pieces-btn"), rotateBtn: b.getBtn(
                                                                "jigex-rotate-btn"), themeBtn: b.getBtn("jigex-theme-btn"), startBtn: b.getBtn("jigex-ok-btn"), edgesBtn: M, disable: function (
                                                                ) { b.enabled = !1 }, invitePanel: function () {
                                                                    if (me) {
                                                                        var s = b.getPnl("jigex-invite-panel"), a = b.getPnl("jigex-game-panel"),
                                                                        l = document.getElementById("jigex-game-link"), e = document.getElementById("jigex-game-back-btn"), n = document.getElementById(
                                                                            "jigex-invite-back-btn"), i = document.getElementById("jigex-invite-btn"), t = document.getElementById("jigex-copy-button"),
                                                                        o = document.getElementById("jigex-copy-conf"), c = document.getElementById("jigex-player-name"), r = document.getElementById(
                                                                            "jigex-player-name-desc"), u = document.getElementById("jigex-invite-spinner"); u.style["animation-play-state"] = "paused",
                                                                                u.style.display = "none"; var d = (h = !1, function (e) {
                                                                                    var r = et.parms(), t = E.Puzzle.curr, n = Date.now(), e = {
                                                                                        pid: t.name,
                                                                                        nop: t.pieces.length, rows: t.pieces.numRows, cols: t.pieces.numCols, lay: t.getScatterSequence(), tabr: t.tabHoleRightIndex,
                                                                                        tabb: t.tabHoleBottomIndex, shp: t.shapeIndex, rot: t.rotatable, ang: t.initialAngles, edo: t.showEdgesOnly(), elpsd: 0, strt: n,
                                                                                        last: n, sesn: 0, dev: !0, indie: e.shiftKey
                                                                                    }; e.nop === e.rows * e.cols && e.nop === e.lay.length || (f.warn("gameprops mismatch"),
                                                                                        _.sendReport("Gameprops mismatch")), r.puzzleId ? e.pid = r.puzzleId : r.url && (e.pid = null, e.url = r.url, r.cred && (e.cred = r.cred),
                                                                                            r.credu && (e.credu = r.credu)), Ue.startBtn.enabled(!1), h || (P.joinedToGameVar.addListener(function (e) {
                                                                                                var n, t, i, o
                                                                                                ; return e && (n = "https://jigex.com/", i = "https://www.jigsawexplorer.com/online-jigsaw-puzzle-player.html?gid=" + (t = P.gameId
                                                                                                ) + "&rgn=" + et.status.region + (r.url ? "&cstm=1" : ""), -1 !== (e = location.href.indexOf("&key=")) && (
                                                                                                    i += "&key=" + location.href.substr(e + 5)), i = et.fetchPath + encodeURIComponent(n + "createShortLink?url=" + encodeURIComponent(i)),
                                                                                                    (o = new x.WebReq(i)).onload = function () {
                                                                                                        var e, t = o.response; t ? (e = (t = JSON.parse(t).shortLink).substring(n.length),
                                                                                                            P.changeSetting("scode", e), u.style["animation-play-state"] = "paused", u.style.display = "none", b.enabled = !0, s.visible(!1),
                                                                                                            l.value = t, a.visible(!0), Ue.startBtn.enabled(!0), Ue.startBtn.click()) : Ue.msgbox(
                                                                                                                "An error occurred while creating the game link. Please try again.", U.OK, function () { window.location.reload() })
                                                                                                    }, o.send()
                                                                                                    , we(c.value), f.log("multiplayer: joined to game " + t), Q[0].disabled = !0, Z.tooltip = "Click to see game information"),
                                                                                                    "remove"
                                                                                            }), h = !0), P.createAndJoinGame(c.value, e)
                                                                                }); return me.onclick = function () {
                                                                                    var e = E.Puzzle.curr,
                                                                                    t = e && e.multiplayerGameId, n = !e || e.stateVar.val.lte(et.PS_READY), e = e && (e.numMoves || e.record)
                                                                                    ; t ? P.joinedToGameVar.val ? Ue.connPanel.visible() ? Ue.connPanel.visible(!1) : Ue.connPanel.show() : Ue.joinPanel.visible(
                                                                                        "toggle") : ve ? Ue.msgbox("Multiplayer mode is not supported for a puzzle based on a local image from your computer"
                                                                                        ) : e ? Ue.msgbox(
                                                                                            'Entering multiplayer mode will cause you to lose any progress you have made on the puzzle so far.<br/><br/>Choose "Continue" to proceed or "Cancel" to abort.'
                                                                                            , ["jigex-mb-continue", "jigex-mb-cancel"], function (e) { "ok" !== e || (e = E.Puzzle.curr) && (e.reset(), me.onclick()) }) : n && (
                                                                                                s.visible("toggle"), s.visible() && ((n = k.getItem("jigex-player-name")) && n.length ? (c.value = P.validatePlayerName(n), i.focus(
                                                                                                )) : "phone" !== E.DEVICE_TYPE && c.focus()))
                                                                                }, i.onclick = function (e) {
                                                                                    var t; c.value.length ? (t = E.Puzzle.curr
                                                                                    ) && t.pieces && t.pieces.length && (i.disabled = !0, c.disabled = !0, n.style.display = "none", u.style.display = "block",
                                                                                        u.style["animation-play-state"] = "running", b.enabled = !1, k.setItem("jigex-player-name", c.value), f.log(
                                                                                            "mp invite button clicked"), d(e)) : (r.style.color = "red", c.focus())
                                                                                }, t.onclick = function () {
                                                                                    var e = navigator.clipboard
                                                                                    ; function t() { o.style.visibility = "visible", setTimeout(function () { o.style.visibility = "hidden" }, 3e3) } function n() {
                                                                                        l.focus(
                                                                                        ), l.setSelectionRange(0, 999), document.execCommand("copy") ? o.textContent = "Link copied!" : o.textContent = "Copy failed!", t(),
                                                                                        l.setSelectionRange(0, 0)
                                                                                    } return e && e.writeText ? e.writeText(l.value).then(function () { o.textContent = "Link copied!", t() },
                                                                                        function () { n() }) : n(), !1
                                                                                }, n.onclick = function () { s.visible(!1) }, e.onclick = function () { a.visible(!1) },
                                                                                    window.addEventListener("keyup", function (e) {
                                                                                        s.visible() && (c.value.trim(
                                                                                        ).length ? r.style.color = "black" : r.style.color = "red")
                                                                                    }), s
                                                                    } return null; var h
                                                                }(), connPanel: function () {
                                                                    if (me) {
                                                                        var e = b.getPnl(
                                                                            "jigex-conn-panel"), t = document.getElementById("jigex-player-list"), n = document.getElementById("jigex-conn-back-btn"),
                                                                        i = document.getElementById("jigex-conn-text"), o = null, r = null, s = !1; return P.onLoading = function () {
                                                                            o = new tt.Sonic(
                                                                                "player-join"), r = new tt.Sonic("player-leave")
                                                                        }, n.onclick = function () { e.visible(!1) }, e.show = function () {
                                                                            P.gameInfo.cmplt ? (
                                                                                i.innerHTML = "This game was completed on<br/>" + P.timer.stopDateString(), t.innerHTML = "") : t.innerHTML = P.getPlayerNames(
                                                                                ).join("<br/>"), e.visible(!0)
                                                                        }, P.onPlayerJoinVar.addListener(function (e) {
                                                                            o && o.play(), Ue.toast.show(
                                                                                'Player "' + e.name + '" joined the game.', 5e3), s = s || e.name === P.myPlayerName
                                                                        }), P.onPlayerExitVar.addListener(function (e) {
                                                                            s && (r && r.play(), Ue.toast.show('Player "' + e.name + '" left the game.'), s = e.name !== P.myPlayerName)
                                                                        }), e
                                                                    }
                                                                }(),
                                                        joinPanel: function () {
                                                            if (me) {
                                                                var n = b.getPnl("jigex-join-panel"), i = (document.getElementById("jigex-join-back-btn"),
                                                                    document.getElementById("jigex-join-btn")), o = document.getElementById("jigex-player-name-join"),
                                                                r = document.getElementById("jigex-player-name-desc-join"), s = document.getElementById("jigex-join-spinner")
                                                                ; return s.style["animation-play-state"] = "paused", s.style.display = "none", window.addEventListener("keyup", function (e) {
                                                                    n.visible() && (13 === e.which && i.onclick(null), o.value.trim().length ? r.style.color = "black" : r.style.color = "red")
                                                                }),
                                                                    n.show = function () {
                                                                        var e = k.getItem("jigex-player-name"); n.visible(!0), e && e.length ? (o.value = P.validatePlayerName(e),
                                                                            i.focus()) : "phone" !== E.DEVICE_TYPE && o.focus()
                                                                    }, i.onclick = (e = !1, function () {
                                                                        var t; o.value.length ? (t = P.gameId, e || (
                                                                            P.joinedToGameVar.addListener(function (e) {
                                                                                e && (s.style["animation-play-state"] = "paused", s.style.display = "none", we(o.value
                                                                                ), f.log("multiplayer: joined to game " + t), Ue.joinPanel.visible(!1), Ue.connPanel.show(), Q[0].disabled = !0,
                                                                                    Z.tooltip = "Game information")
                                                                            }), P.errorVar.addListener(function (e) {
                                                                                e && (P.leaveGame(), e.errorMsg.includes(
                                                                                    "Error response ResultCode='3'") ? Ue.msgbox(
                                                                                        "The specified game has expired after 30 days of inactivity or does not exist.") : e.errorMsg.includes(
                                                                                            "already joined the specified game") ? (Ue.msgbox(
                                                                                                "You cannot join this game because player " + o.value + " is already present.", Ue.msgbox.OK, function () {
                                                                                                    i.disabled = !1,
                                                                                                    o.disabled = !1, n.visible(!0)
                                                                                                }), setTimeout(Ue.toast.hide, 100)) : e.errorMsg.includes("Game full") ? (Ue.msgbox(
                                                                                                    "The maximum number of players allowed to be present in a game at one time is " + et.status.maxPlayers + ". The game you are attempting to join has already reached that limit."
                                                                                                ), setTimeout(Ue.toast.hide, 100)) : e.errorMsg.includes("Max CCU of ") ? (Ue.msgbox(
                                                                                                    "Jigsaw Explorer's system has currently reached the maximum number of multiplayer participants it can handle. Please try again later. We will increase the capacity of our system soon."
                                                                                                ), setTimeout(Ue.toast.hide, 100), _.sendReport("Max CCUs Exceeded")) : f.info(
                                                                                                    "multiplayer error: errCode=%s, opCode=%s, errMsg=%s", e.errorCode, e.opCode, e.errorMsg),
                                                                                    s.style["animation-play-state"] = "paused", s.style.display = "none", n.visible(!1))
                                                                            }), e = !0), i.disabled = !0, o.disabled = !0,
                                                                            s.style.display = "block", s.style["animation-play-state"] = "running", k.setItem("jigex-player-name", o.value), f.log(
                                                                                "mp join button clicked: nam=" + o.value + ", gid=" + t), we(o.value), P.joinGame(o.value)) : (r.style.color = "red", o.focus())
                                                                    }), n
                                                            }
                                                            return null; var e
                                                        }(), colorMenu: function () {
                                                            var e = b.getPnl("jigex-theme-color-menu"); tt.theme.isLoaded.addListener(
                                                                function () {
                                                                    var e; tt.theme.isLoaded.val && (e = tt.theme.val, D.bar.css("background-color", e.color.panel), V.bar.css(
                                                                        "background-color", e.color.panel), G.panel.css("background-color", e.color.panel), G.panel.css("border-color",
                                                                            e.color.border), Ue.startBtn.button.css("background-color", e.color.highlight), e.button.toggled(!0),
                                                                        tt.theme.oldTheme && tt.theme.oldTheme.button.toggled(!1))
                                                                }); function t(e) { tt.theme.val = e } var n = document.getElementById(
                                                                    "jigex-color-buttons"), i = tt.theme.getThemeNames(); n.innerHTML = i.reduce(function (e, t) {
                                                                        return e + '<div id="jigex-color-' + t + '-btn" class="niftybar-tab-button jigex-color-button" data-selected-tab-style="jigex-color-sel-button"><div id="jigex-color-' + t + '-swatch" class="jigex-color-swatch">&nbsp;</div></div>'
                                                                    }, ""); for (var o = b.getBar("jigex-color-buttons"), n = w(n.getElementsByClassName("jigex-color-button")), r = o.addButtons(n),
                                                                        s = 0; s < r.length; s++) {
                                                                            var a = r[s], l = i[s], c = m.get("themes", l); document.getElementById("jigex-color-" + l + "-swatch"
                                                                            ).style["background-color"] = c.color.background, (c.button = a).onclick = t.bind(a, c)
                                                            } return document.getElementById(
                                                                "jigex-color-back-btn").onclick = function () { e.visible(!1) }, window.addEventListener("resize", function () { e.visible(!1) }), e
                                                        }(), numPiecesMenu: function () {
                                                            for (var o, e = function (e) {
                                                                e = e.niftybarElement; r.selectedNop.selected = !1,
                                                                    r.selectedNop = e.choice, r.selectedNop.selected = !0, r.rows = e.choice.rows, r.cols = e.choice.cols, r.onNopChange && (r.visible(!1)
                                                                        , Ue.busy(!0), setTimeout(r.onNopChange, b.tweenPeriod + 5))
                                                            }, r = b.getPnl("jigex-num-pieces-menu"), t = b.getBar(
                                                                "jigex-nop-buttons"), n = "", i = 0, s = 0; s < 60; s++
                                                            )n += '<div data-order="' + i++ + '" class="niftybar-tab-button jigex-nop-button" data-selected-tab-style="jigex-nop-sel-button"></div>'
                                                                    ; for (F[0].innerHTML = n, n = F.find(".jigex-nop-button"), n = w(n), s = (o = t.addButtons(n)).length - 1; 0 <= s; s--)o[s].onclick = e
                                                                        ; return r.selectedNop = null, r.rows = 0, r.cols = 0, r.onNopChange = null, r.setChoices = function (e) {
                                                                            for (var t = 59; 0 <= t; t--) {
                                                                                var n,
                                                                                i = o[t]; t < e.length ? (n = e[t], i.button.css("display", "block"), i.button[0].innerHTML = n.nop.toString(), (i.choice = n
                                                                                ).selected && (r.selectedNop = n, i.toggled(!0), Ue.crn(n))) : i.button.css("display", "none")
                                                                            }
                                                                        }, window.addEventListener("resize"
                                                                            , function () { r.visible(!1) }), r
                                                        }(), crn: function () {
                                                            var i, o, e; arguments.length || (i = [84, 104, 105, 115, 32, 105, 115, 32, 116, 104, 101
                                                                , 32, 74, 105, 103, 115, 97, 119, 32, 69, 120, 112, 108, 111, 114, 101, 114, 32, 106, 105, 103, 115, 97, 119, 32, 112, 117, 122, 122, 108, 101, 32, 112,
                                                                114, 111, 103, 114, 97, 109, 32, 58, 32, 67, 111, 112, 121, 114, 105, 103, 104, 116, 32, 40, 99, 41, 32, 50, 48, 49, 53, 32, 67, 97, 114, 111, 108, 105,
                                                                110, 97, 32, 82, 111, 97, 100, 32, 83, 111, 102, 116, 119, 97, 114, 101, 44, 32, 76, 76, 67], o = String.fromCharCode.apply(null, [105, 110, 110,
                                                                    101, 114, 72, 84, 77, 76]), e = String.fromCharCode.apply(null, [103, 101, 116, 69, 108, 101, 109, 101, 110, 116, 115, 66, 121, 84, 97, 103, 78,
                                                                        97, 109, 101]), Array.prototype.slice.call(document[e]("div")).forEach(function (e) {
                                                                            try {
                                                                                var t = parseInt(getComputedStyle(e
                                                                                ).width, 10), n = parseInt(getComputedStyle(e).height, 10); 1e3 < t && n < t / 10 && (e[o] = String.fromCharCode.apply(null, i))
                                                                            } catch (e) { }
                                                                        }))
                                                        }, setClock: function (e) {
                                                            var t, n, i, o; Z && (t = null, n = e % 60, i = Math.floor(e / 60) % 60, o = Math.min(9999, Math.floor(e / 3600)),
                                                                0 === e ? t = "0:00" : (t = n < 10 ? ":0" + n : ":" + n, t = o && i < 10 ? "0" + i + t : i.toString() + t, o && (t = o.toString() + ":" + t)), Z.button.text(t))
                                                        },
                                                        pause: (ee.onResponse = function () { $.visible(!1), E.clock.resume() }, function (e) {
                                                            ee.visible() || (te.text(e), $.visible(!0),
                                                                ee.visible(!0))
                                                        }), programLog: (Te = w("#jigex-log-pane"), ze = document.getElementById("jigex-screen-cap"), Ie = null,
                                                            Le = document.getElementById("jigex-preview-cap"), Ae = b.getPnl("jigex-cap-dlg"), Oe = document.getElementById(
                                                                "jigex-include-cap"), je = document.getElementById("jigex-log-name"), b.getBtn("jigex-log-send").onclick = function () {
                                                                    je.value.length ? U.visible() || Ue.msgbox("Are you sure you want to send the program logs to the Support team?", [
                                                                        "jigex-mb-yes", "jigex-mb-no"], Je) : Ue.msgbox('Please enter your name in the "Name" field.')
                                                                }, b.getBtn("jigex-log-cancel"
                                                                ).onclick = function () { Ie && (Ie.width = 0, Ie = null, ze.checked = !1) }, {
                                                                    show: function () {
                                                                        var e = Te[0], t = E && E.Piece.selectedPiece
                                                                        ; ze && (Oe.onclick = function (e) { ze.checked = !ze.checked, ze.onclick(e) }, ze.checked = !1, ze.onclick = function () { ze.checked && Xe() }
                                                                            , Le.onclick = function () {
                                                                                Ae.visible() ? Ae.visible(!1) : Xe(function () {
                                                                                    var e = E ? E.clipGL.canvas.width : null,
                                                                                    t = E ? E.clipGL.canvas.height : null; Ae.panel.css("width", Ie.naturalWidth), Ae.panel.css("height", Ie.naturalHeight),
                                                                                        Ae.panel.css("max-width", "85%"), Ae.panel.css("max-height", "85%"), f.log("canvas size: " + e + "x" + t), Ie.style.width = "100%",
                                                                                        Ie.style.height = "100%", Ie.onclick = function () { Ae.visible(!1) }, Ae.panel.css("z-index", 99999), Ae.visible(!0)
                                                                                })
                                                                            }),
                                                                            P.errorLogsPresent && (et.status.recPhtnLogs || et.parms().plog || Ue.verboseLoggingVar.val) && (f.log(
                                                                                "------------------- photon logs ----------------------"), f.log(v.getLogs(function (e) { return 0 === e.indexOf("Client: ") },
                                                                                    { limit: 200 }))), t && et.status.dbgEvents && (t.logState("selected piece"), t.logHistory(!0)), e.innerHTML = f.toString(),
                                                                            re.onResponse = Ke, re.visible(!0); var n = parseInt(getComputedStyle(document.getElementById("jigex-log-tb")).height),
                                                                                i = parseInt(getComputedStyle(document.getElementById("jigex-log-dlg")).height), t = parseInt(getComputedStyle(
                                                                                    document.getElementById("jigex-log-container")).height); Te.height(Te.height() + i - t - n), y && (e.scrollTop = e.scrollHeight)
                                                                    },
                                                            isShowing: function () { return re.visible() }, onClose: null
                                                        }), toast: {
                                                            show: function (e, t, n) {
                                                                var i = z ? I.offsetWidth : window.innerWidth; oe.panel[0].innerHTML = e, i = Math.round((i - oe.panel.outerWidth()) / 2), oe.panel.css(
                                                                    "left", i + "px"), n ? oe.panel.addClass("jigex-clickable-toast") : oe.panel.removeClass("jigex-clickable-toast"), oe.visible(!0)
                                                                    , oe.panel.on("click", n || void 0), t && (Se = setTimeout(Ye, t))
                                                            }, hide: function () { oe.visible(!1), clearTimeout(Se), Se = null }
                                                        },
                                                        help: { isShowing: function () { return H.visible() } }, update: function () {
                                                            var e, t, n, i = E.Puzzle.curr; i && !i.stateVar.isDisposed ? (
                                                                e = i.state.gte(et.PS_READY), t = i.pieces.isEdgeComplete,
                                                                n = i.multiplayerGameId && E.Puzzle.partiallyComplete && 1 < P.getNumPlayers(), N.toggled(L.isShowing()), N.enabled(i.state.gte(
                                                                    et.PS_WAITING)), M.toggled(i.showEdgesOnly()), M.enabled(e),
                                                                M.tooltip = t || n ? "Rearrange loose pieces" : "Display only the edge pieces", B && B.enabled(e && !i.pieces.isEdgeComplete), j && (
                                                                    j.enabled(e), j.toggled(i.capStateVar.meta.isCapturing()))) : (N && N.enabled(!1), M && M.enabled(!1), j && j.enabled(!1)), ge && (
                                                                        ge.innerHTML = et.audioMuted() ? "Unmute" : "Mute")
                                                        }, busy: function (e) {
                                                            if (void 0 === e) return O.visible(); e !== O.visible() && (e ? (
                                                                A.style["animation-play-state"] = "running", O.visible(!0, !0), b.enabled = !1) : (O.visible(!1, !0),
                                                                    A.style["animation-play-state"] = "paused", b.enabled = !0))
                                                        }, cursor: (Ce = Ee = Se = null, function (e, t) {
                                                            var n = E.clipGL.canvas,
                                                            i = n.getAttribute("style"); if (S && i && ";" === i[i.length - 1] && (i = i.substring(0, i.length - 1)), void 0 === e) return i; e !== i && (
                                                                clearTimeout(Ce), Ce = null, Ee = t ? Ee || i : null, n.setAttribute("style", e), this.update(), t && (Ce = setTimeout(function () {
                                                                    Ue.cursor(
                                                                        Ee)
                                                                }, t)))
                                                        }), deleteRecordPrompt: function (e, t) {
                                                            var n = e + '<br/><br/>Note: You can click the "Delete" button if you no longer wish to complete the puzzle.'; this.msgbox(n,
                                                                ["jigex-mb-delete", "jigex-mb-ok"], function (e) {
                                                                    "delete" === e && (
                                                                        n = "Are you sure you want to delete your progress for the specified puzzle?", Ue.msgbox(n, Ue.msgbox.YES_NO, function (e) {
                                                                            "yes" === e && (x.localStore.removeItem(t), window.location.reload())
                                                                        }))
                                                                })
                                                        }, msgbox: (_e = [], qe.OK = ke = ["jigex-mb-ok"],
                                                            qe.YES_NO = ["jigex-mb-yes", "jigex-mb-no"], qe)
                                                    }; function qe(e, t, n, i) {
                                                        if (i) { if (-1 !== _e.indexOf(e)) return; _e.push(e) } t = t || ke
                                                            , Y.switchButtons(t), U.onResponse = n, q[0].innerHTML = e, U.visible(!0), U.center(), f.log("msgbox: " + e)
                                                    } function Ye() {
                                                        oe.visible(!1)
                                                    } function Xe(a) {
                                                        Ie ? a && a() : (Ie = document.getElementById("jigex-cap-img"), E.clipGL.projector.captureScreen(
                                                            function (e) {
                                                                var t, n, i, o, r = document.createElement("canvas"), s = r.getContext("2d"); Ie.onload = function () {
                                                                    i = Ie.naturalWidth,
                                                                    o = Ie.naturalHeight, t = 600 / ((n = o <= i) ? i : o), Ie.width = n ? 600 : Math.round(t * i), Ie.height = n ? Math.round(t * o) : 600, r.width = Ie.width,
                                                                    r.height = Ie.height, s.drawImage(Ie, 0, 0, Ie.width, Ie.height), Ie.onload = function () { a && a() }, Ie.src = r.toDataURL("image/jpeg",
                                                                        .85)
                                                                }, Ie.onerror = function () { f.error("screen capture failed") }, Ie.src = e
                                                            }))
                                                    } function Je(e) {
                                                        var t; "yes" === e && (_.setAuxData(
                                                            "Screenshot", "n/a"), Ie && Ie.width && (ze && ze.checked && (t = {
                                                                id: "jigex-sshot-" + (new Date).getTime() + "-" + Math.floor(
                                                                    1e6 * Math.random()), data: Ie.src
                                                            }, x.postMsg("https://www.jigsawexplorer.com/scripts/aws/store-debug-data.php",
                                                                JSON.stringify(t)), _.setAuxData("Screenshot", "https://www.jigsawexplorer.com/scripts/aws/view-debug-sshot.php?id=" + t.id)
                                                            ), Ie.width = 0, Ie = null), E.missingPieceCheck(), _.sendReport("Log delivery from user " + (je.value.trim() || "n/a")), re.visible(
                                                                !1), Ue.programLog.onClose && Ue.programLog.onClose(e))
                                                    } function Ke(e) {
                                                        U.visible(!1),
                                                        Ue.programLog.onClose && Ue.programLog.onClose(e)
                                                    } function Qe() { for (; Ne.length;)Ne.pop()() } function Ze() {
                                                        return et.adBlockerPresent && !!window.adthrive && void 0 === window.adthrive.bucket
                                                    } function $e() {
                                                        Ge && (
                                                            window.removeEventListener("adthriveFooterClose", Ve), Ge.parentNode && Ge.parentNode.removeChild(Ge), Ge = null)
                                                    } tt.ui = Ue,
                                                        b.onAnyButtonClick = function (e) { f.log("button click: id=%s, tog=%s (pre-click)", e.id, e.toggled()) }, Re = !1, De = null,
                                                        Ge = document.getElementById("adthrive_sticky_footer"), Ve = function () {
                                                            f.log("ad close button clicked"), setTimeout($e, 500),
                                                            Fe.disconnect(), De && De.removeEventListener("click", Ve)
                                                        }, Fe = new MutationObserver(function (e) {
                                                            Re || (Re = !0, setTimeout(
                                                                function () { De || (f.warn("ad close button did not load"), $e()) }, 5e3)); for (var t = e.length - 1; 0 <= t; t--)for (var n = e[t],
                                                                    i = n.addedNodes.length - 1; 0 <= i; i--) {
                                                                        var o = n.addedNodes[i]; o.className && "string" == typeof o.className && o.className.includes(
                                                                            "adthrive-close") && (De && De.removeEventListener("click", Ve), (De = o).addEventListener("click", Ve))
                                                                }
                                                        }),
                                                        He = new MutationObserver(function (e) {
                                                            for (var t = e.length - 1; 0 <= t; t--)for (var n = e[t], i = n.addedNodes.length - 1; 0 <= i; i--) {
                                                                var o = n.addedNodes[i]; if (o.className && "string" == typeof o.className && o.className.includes("adthrive-comscore")
                                                                ) return o.style.display = "none", void He.disconnect()
                                                            }
                                                        }), We = new MutationObserver(function (e) {
                                                            for (var t = e.length - 1; 0 <= t; t--
                                                            )for (var n = e[t], i = n.addedNodes.length - 1; 0 <= i; i--) {
                                                                var o = n.addedNodes[i]; if (o.id && "string" == typeof o.id && o.id.includes(
                                                                    "gdpr-toggle")) return o.style.display = "none", void We.disconnect()
                                                            }
                                                        }), Ge && (window.addEventListener("adthriveFooterClose",
                                                            Ve), setTimeout(function () { Re || (f.log("ad did not load, blk=" + Ze()), $e()) }, 5e3), Fe.observe(Ge, { childList: !0, subtree: !0 }))
                                                        , He.observe(document.body, { childList: !0, subtree: !1 }), We.observe(document.body, { childList: !0, subtree: !1 }),
                                                        tt.onInitComplete(function () { E = tt.player, L = E && E.boxTop, fe && !z && (fe.style.display = "block") })
        }
        ).dependenciesReady = function () {
            var e = "UI dependencies: base=" + !!tt.base + ", utils=" + !!tt.utils + ", nb=" + !!tt.niftybar + ", theme=" + !!tt.theme + ", multiplayer=" + !!tt.multiplayer + ", player=" + !!tt.player
                ; return e !== t.prevMsg && (console.log(e), t.prevMsg = e), !!(tt.base && tt.utils && tt.niftybar && tt.theme && tt.multiplayer)
        },
            tt.addModInit("ui", t))
}(), function () {
    "use strict"; var t, Gi = window.jigexGlobals, Vi = Gi.modules; Vi && !Vi.player && ((
        t = function () {
            var H = document.getElementById("jigex-canvas"), e = document.getElementById("jigex-toolbar")
            ; H instanceof Element && e instanceof Element || Gi.reloadProg("Invalid DOM: canvas=" + typeof H + ", toolbar=" + typeof e); try {
                var t = parseInt(getComputedStyle(e).height, 10)
            } catch (e) {
                return void alert(
                    "The browser failed to load the Jigsaw Explorer puzzle program. Please try again.")
            } var K = Vi.console, c = Gi.debug,
                n = navigator.userAgent, Q = window.devicePixelRatio || 1, z = Gi.status, L = Vi.ui, W = Vi.multiplayer, h = Vi.theme, I = Vi.Variant,
                m = Vi.utils, o = Vi.niftybar, s = Vi.Sym, a = m.sysTiming, l = a.Timer, u = Vi.snapIndicator, g = Gi.status.framed, U = Gi.errMonitor,
                i = g ? "This jigsaw puzzle program" : "Jigsaw Explorer", Z = {}; if (!H || !H.id) return L.terminate(), window.alert(
                    "The page canvas did not load correctly, please try again."), void (Z.start = function () {
                        K.error("JE: Canvas did not load.")
                    }); var r, d, p, f = (r = document.getElementById("jigex-control-host"), d = n.includes("GSA/") && (n.includes("iPad") || n.includes(
                        "iPhone")), p = (innerHeight > innerWidth ? screen.height : screen.width) - innerHeight, K.log("prog-version=", z.progVersion,
                            g ? " (framed)" : "", ", html-version=", Gi.htmlVersion, ", res-version=", Gi.resVersion), K.log("url: " + window.location.href),
                        K.log("devicePixelRatio=" + Q), K.log("screen size: " + screen.width + " x " + screen.height), K.log(
                            "screen available size: " + screen.availWidth + " x " + screen.availHeight), K.log(
                                "window inner size: " + innerWidth + " x " + innerHeight), K.log("window client size: " + r.clientWidth + " x " + r.clientHeight),
                        K.log("host size: " + r.offsetWidth + " x " + r.offsetHeight), K.log("host scroll size: " + r.scrollWidth + " x " + r.scrollHeight),
                        K.log("host computed size: " + parseInt(getComputedStyle(r).width, 10) + " x " + parseInt(getComputedStyle(r).height, 10)),
                        K.log("toolbar height: " + t), {
                            getWidth: function () {
                                return Math.min(parseInt(getComputedStyle(r).width, 10),
                                    window.innerWidth)
                            }, getHeight: function () {
                                return d ? (innerHeight > innerWidth ? screen.height : screen.width) - p : Math.min(
                                    parseInt(getComputedStyle(r).height, 10), window.innerHeight)
                            }, getHeightMinusToolbar: function () {
                                return this.getHeight() - t
                            }, setColor: function (e) { g ? r.style.background = e : document.body.style.background = e }
                    }); U.addCallback(function () {
                        var e = "No puzzle"; Z.Puzzle && Z.Puzzle.curr && (e = Z.Puzzle.curr.record ? (m.postMsg(
                            "https://www.jigsawexplorer.com/scripts/aws/store-debug-data.php", JSON.stringify(Z.Puzzle.curr.record)),
                            Z.Puzzle.curr.record.id) : "No record"), U.setAuxData("Record id", e), U.setAuxData("Logs", K.toString())
                    }); var v = f.getWidth()
                        , y = f.getHeight() - t; H.width = Math.round(Q * v), H.height = Math.round(Q * y), H.style.width = v, H.style.height = y; try {
                            var A = new Vi.ClipGL(H.id, { numberOfLayers: 5, clearColor: "#7390aa" }); Z.clipGL = A
                        } catch (e) {
                            K.error(
                                "Failed to construct ClipGL:", e), A = { error: e.message, isReady: function () { return !1 } }
                        } function O() {
                            var e, t = A.error || ""
                            ; L.busy(!1), t.includes("vertex shader") ? window.alert(
                                i + " encountered an error while trying to prepare the jigsaw puzzle.\n\nPlease reload this page to try again."
                            ) : t.includes("shaders") || t.includes("animation") ? window.alert(
                                i + " requires graphics capabilities not supported by this web browser version.\n\nCheck to ensure you are using the latest version of your web browser."
                            ) : t.includes("unsupported") ? window.alert(
                                i + " requires WebGL technology, but WebGL is not supported by this web browser version.\n\nCheck to ensure you are using the latest version of your web browser."
                            ) : t.includes("disabled") ? window.alert(
                                i + " requires WebGL technology, but WebGL is either unavailable or disabled by your web browser.\n\nConfirm your browser's WebGL status at the WebGL website at https://get.webgl.org.\n\nThe WebGL troubleshooter at https://code.google.com/p/kuda/wiki/TroubleshootWebGL may also prove helpful."
                            ) : t.includes("Attempted to assign to readonly property") ? window.alert(
                                i + " requires WebGL technology, but WebGL does not appear to be supported by this device.") : (
                                e = "An internal error has occurred.", g || (e += "\n\nPlease report this problem to Support."), K.fault(new Error(
                                    "WebGL error encountered: " + t)), window.alert(e)), Z.start = function () { K.error("JE: ClipGL did not start.") }, L.disable(),
                                Vi.haltInit()
                        } var b, w, x, P, k, j, q, _, E, C, S, T, M, B, N, R, D, G, V, F, $, Y, X, J, ee, te, ne, ie, oe, re, se, ae, le, ce, ue, de, he, pe, ge, me, fe, ve,
                            ye, be, we, xe, Pe, ke, _e, Ee, Ce, Se, Te, ze, Ie, Le, Ae, Oe, je, Me, Be, Ne, Re, De, Ge, Ve, Fe, He, We, Ue, qe, Ye, Xe, Je, Ke, Qe, Ze, $e, et, tt, nt, it,
                            ot, rt, st, at, lt, ct, ut, dt, ht, pt, gt, mt, ft, vt, yt, bt, wt, xt, Pt, kt, _t, Et, Ct, St, Tt, zt, It, Lt, At, Ot, jt, Mt, Bt, Nt, Rt, Dt, Gt, Vt, Ft, Ht,
                            Wt, Ut, qt, Yt, Xt, Jt, Kt, Qt, Zt, $t, en, tn, nn, on, rn, sn, an, ln, cn, un, dn, hn, pn, gn, mn, fn, vn, yn, bn, wn, xn, Pn, kn, _n, En, Cn, Sn, Tn, zn, In,
                            Ln, An, On, jn, Mn, Bn, Nn, y = A && A.isReady(), Rn = y ? new A.PosPoint : null; function Dn(e, t, n, i) {
                                try {
                                    return this.getImageData(e, t, n, i
                                    )
                                } catch (e) {
                                    var o = navigator.userAgent.includes("Firefox") ? "Firefox " : ""; throw K.error.once(
                                        "context.getImageData failure. err=", e.message), L.msgbox(
                                            "An internal error in the " + o + "browser is preventing this program from functioning properly. If the problem persists then we recommend that you try the Chrome web browser instead.<br/><br/>Try clicking the browser's Reload button to recover."
                                            , null, null, !0), e
                                }
                            } function Gn(e) { "function" == typeof e ? e(this) : e.handleEvent(this) } function Vn(e, t) {
                                K.log(
                                    "key down: %s%s%s%s", e.shiftKey ? "Shift+" : "", e.ctrlKey ? "Ctrl+" : "", e.key, t || "")
                            } function Fn(e) {
                                Te = e.response,
                                Ae.reposition()
                            } function Hn(e) { De = e.response, Ve.rescale() } function Wn(e) {
                                var t; e.canceled || (t = e.response,
                                    A.setClearColor(h.val.color.background, !0), Ie && Ie.texture.dispose(), Ie ? Ie.texture = {
                                        data: t, bounds: {
                                            x: 0, y: 0, width: H.width,
                                            height: H.height
                                        }
                                    } : (Se = {
                                        name: "background", width: H.width, height: H.height, layer: G, image: {
                                            data: t, bounds: {
                                                x: 0, y: 0,
                                                width: H.width, height: H.height
                                            }
                                        }
                                    }, (Ie = new A.Clip(Se)).position.assign(H.width / 2, H.height / 2), Z.background.onload && (
                                        Z.background.onload(), Z.background.onload = null)), h.isLoaded.val = !0), e === Fe && (Fe = null)
                            } function Un() {
                                if (st.head && lt) {
                                    var e, t = st.head; for (at = [], ct = [], dt = 0, gt = !(ut = 1); t;)e = t.item, at.push(e),
                                        e.neighbors[0] ? e.neighbors[3] ? e.neighbors[2] && e.neighbors[1] || ct.push(e) : (ct.push(e), ut++) : (ct.push(e), dt++), t = t.next
                                        ; pt = 2 * ut + 2 * dt - 4, ht = ut * dt, lt = !1
                                }
                            } function qn(e) {
                                if (e) {
                                    if (!W.gameInfo) throw new Error("Missing gameInfo object")
                                        ; return ft(), "remove"
                                }
                            } function Yn() {
                                L.msgbox(
                                    'If most of the buttons in this program appear to be invisible it is because you are using an old version of this browser. This browser can be updated by going to the Windows Update panel at <i>Start > Settings > Update & security</i> and clicking "Check for updates".'
                                )
                            } function Xn(e) {
                                var t, n = Z.Puzzle.curr; e.response && e.image ? 1 !== (t = e.response).width || 99 !== t.height ? 0 === (t = new Z.Subject(
                                    t)).width || 0 === t.height ? xt(e) : t.width < ae || t.height < ae ? Pt(t) : (n.subject = t, ft()
                                    ) : window.location.href = "https://www.jigsawexplorer.com/custom-puzzle-error/?err=banned" : xt(e)
                            } function Jn() {
                                var e,
                                t = Z.Puzzle.curr; this.onload = null, this.onerror = null, t && t.state.eq(w, x) && (0 === (e = new Z.Subject(this)
                                ).width || 0 === e.height ? xt(null) : e.width < ae || e.height < ae ? Pt(e) : (t.subject = e, ft()))
                            } function Kn(e) {
                                Z.boxTop.setImage(
                                    e.response), ft()
                            } function Qn() {
                                L.busy(!1), L.msgbox("The specified puzzle box top could not be found."), K.error(
                                    "Failed to pull box top. id=" + Z.Puzzle.curr.name, !0)
                            } function Zn(e) {
                                var t, n, i, o = Z.Puzzle.curr; (e = e.response).photo ? (
                                    K.log("profile received"), e.mystery ? (o.mysteryProfile = e, _t(e.photo.name),
                                        n = Gi.subjectsPath + e.photo.name + "-bc." + e.photo.format, i = Gi.altSubjectsPath + e.photo.name + "-bc." + e.photo.format, (
                                            t = new m.WebReq(n, i)).onload = Kn, t.onerror = Qn, t.send()) : (o.profile = e, h.val = h.getThemeFromOrdinal(e.theme),
                                                n = Gi.subjectsPath + e.photo.name + "." + e.photo.format, i = Gi.altSubjectsPath + e.photo.name + "." + e.photo.format, (t = new m.WebReq(n
                                                    , i)).onload = Xn, t.onerror = xt, t.send(), o.credits = new Z.Credits(e))) : kt()
                            } function $n(e) {
                                var t, n, i, o = Gi.parms(),
                                r = Z.Puzzle.curr; r.profile = {}, e.includes(te) ? (t = e.indexOf(te), n = e.indexOf("(nop=", t), i = e.slice(0, t), r.customMystery = te,
                                    n && (r.customMysteryNop = parseInt(e.slice(n + 5), 10))) : e.includes(ne) ? (t = e.indexOf(ne), i = e.slice(0, t), r.customMystery = ne
                                    ) : e.includes("_(hidden)_") || e.includes(ie) ? (i = e, r.customMystery = ie) : i = e, h.isValidColor(o.color) ? h.val = s.get("themes",
                                        o.color) : h.setToDefault(), K.log("fetching image " + i), i = Gi.fetchPath + encodeURIComponent(i), (i = new m.WebReq(i, null, !0)
                                        ).onload = Xn, i.onerror = Xn, i.send()
                            } function ei() {
                                for (var e = [], t = this.pieces.head; t;) {
                                    var n = t.item.group
                                    ; n && -1 === e.indexOf(n) && e.push(n), t = t.next
                                } if (e.length) { e.sort(ti); for (var i = e.length - 1; 0 <= i; i--)e[i].sendToBottom() }
                            }
            function ti(e, t) { return e.members.length < t.members.length ? 1 : e.members.length > t.members.length ? -1 : 0 } function ni(e) {
                return e < 45 ? 0 : e < 135 ? 90 : e < 225 ? 180 : e < 315 ? 270 : 0
            } function ii(e, t) {
                if (!e.stateVar.val.eq(S, M)) if (t.showEdgesOnly()) {
                    var n = e.group; if (n && e.id === n.id) {
                        var i = n.members; Mt.length = 0; for (var o = i.length - 1; 0 <= o; o--) {
                            var r = i[o]
                            ; r.isEdge && !n.isEdge && (n.isEdge = !0, Lt++), 0 === r.opacity && Mt.push(r)
                        } n.isEdge && Mt.length && (jt && (Mt[0].logState(
                            "invisible group piece", !0), Mt[0].logHistory(), jt = !1), Mt.forEach(function (e) { e.opacity = 1 }), Tt += Mt.length), Mt.length = 0
                    }
                } else 1 !== e.opacity ? (jt && (jt = !1, e.logState("invisible piece", !0), e.logHistory()), e.opacity = 1, Tt++
                ) : 1 !== e._opacity.renderedValue && (jt && (jt = !1, e.logState("unexpected rawOpacity value: " + e._opacity.renderedValue, !0),
                    e.logHistory()), e.opacity = 1, Tt++), e.active || (K.warn.once("inactive piece encountered. id=%s", e.id), zt++)
            } function oi() {
                var e = Z.Puzzle.curr; e && (e.capState = B)
            } function ri() {
                var e, t = Z.Puzzle.curr, n = t && t.pieces && t.pieces.length; if (n && (
                    !t.initialAngles || t.initialAngles.length !== n)) {
                        for (var i = [], o = n - 1; 0 <= o; o--)i.push((e = void 0, .75 <= (e = Math.random()
                        ) ? 0 : .5 <= e ? 90 : .25 <= e ? 180 : 270)); t.initialAngles = i
                }
            } function si(e) {
                for (var t, n, i, o = null, r = 1 / 0, s = e.length - 1; 0 <= s; s--)(n = (
                    t = e[s]).position.distanceFrom(Rn)) < r && (r = n, o = t, i = s); i && (e.splice(i, 1), e.unshift(o)), o.position.assignNorm(o.tuple.x,
                        o.tuple.y), new Z.Group(e)
            } function ai(e, t, n, i) {
                return !(e && !i.group && i.homePos && Math.abs(i.homePos.x - i.position.x
                ) <= i.spec.core.width / 3 && Math.abs(i.homePos.y - i.position.y) <= i.spec.core.height / 3) || { correction: !1 }
            } function li(e) {
                e.stateVar.val = S, e.fadeOut(se)
            } function ci(e) { e.isDisposed || (e.stateVar.val = q, qt ? e.opacity = 1 : e.fadeIn(se)) } function ui(e
                , t) { e.stateVar.val = q, e.fadeIn(se, t) } function di(e, t, n, i) {
                    if (e = e.name + " event: e=" + t.type + ", x=" + (
                        t.controller ? t.controller.x : "n/a") + ", y=" + (t.controller ? t.controller.y : "n/a") + (i ? ", rot=" + e.angle : "") + (
                            e.group ? ", gid=" + e.group.id : ""), n) return e + ", delayed"; I.log(e)
                } function hi(e, t) {
                    if (e.group && 2 === e.group.members.length
                    ) for (var n, i, o, r = e.group.members, s = r[0], a = r.length - 1; 0 <= a; a--)(s = r[a]) !== e && (Z.Piece.gap.measure(s, e, !1, 0),
                        n = Z.Piece.gap.x, i = Z.Piece.gap.y, Z.Piece.gap.measure(s, e, !0, 0), 90 === e.angle ? (o = n, n = -i, i = o) : 180 === e.angle ? (n = -n, i = -i
                        ) : 270 === e.angle && (o = i, i = -n, n = o), n !== Z.Piece.gap.x || i !== Z.Piece.gap.y ? I.log(e.name + ": Gap problem detected") : t && I.log(
                            e.name + ": No gap detected. x=" + e.position.x + ", y=" + e.position.y + ", id2=" + s.id + ", x2=" + s.position.x + ", y2=" + s.position.y + ", dx=" + n + ", dy=" + i
                        ))
                } function pi(e) {
                    for (var t = e.neighbors.length - 1; 0 <= t; t--) {
                        var n = e.neighbors[t]; if (n) if (!(e.group && e.group === n.group
                        ) && function (e, t) {
                            if (1 !== t.opacity || e.angle !== t.angle) return !1; var n = t.position.x - e.position.x,
                                i = t.position.y - e.position.y; if (e.isRotating() || t.isRotating() || n > 2 * e.width || i > 2 * e.height) return !1; var o = tn ? Math.min(
                                    e.width, e.height) / on : Z.Puzzle.curr.snapDistance; return nn.measure(e, t), Math.abs(nn.x - n) <= o && Math.abs(nn.y - i) <= o
                        }(e, n)
                        ) return en = n, !1
                    }
                } function gi(e) {
                    var t, n, i = e.target, o = i.group ? i.group.pivotPiece : i; o && (t = e.radius,
                        n = i._angle.renderedValue - e.angleDelta, e = t * m.cosine(n), n = t * m.sine(n), i.position.assign(o.position.x - e, o.position.y - n))
                }
            function mi(e) { e.moveToTop() } function fi(e) {
                if (e.border) dn.lineTo(e.endX, e.endY); else {
                    var t, n, i, o, r, s, a,
                    l = e.startX === e.endX, c = l ? Math.abs(e.startY - e.endY) : Math.abs(e.startX - e.endX), u = e.bend ? e.curves.pts : e.curves.ptsReversed
                    ; switch (e.side) {
                        case 0: s = e.tab ? -1 : 1, a = e.bend ? 1 : -1; break; case 1: s = e.tab ? 1 : -1, a = e.bend ? 1 : -1; break; case 2: s = e.tab ? 1 : -1,
                            a = e.bend ? -1 : 1; break; case 3: s = e.tab ? -1 : 1, a = e.bend ? -1 : 1
                    }for (var d = 0; d < 12;)o = u[d++], r = u[d++], r = l ? (t = e.startX + c * o.fromBase * s
                        , n = e.startY + c * o.alongBase * a, i = e.startX + c * r.fromBase * s, e.startY + c * r.alongBase * a) : (t = e.startX + c * o.alongBase * a,
                            n = e.startY + c * o.fromBase * s, i = e.startX + c * r.alongBase * a, e.startY + c * r.fromBase * s), dn.quadraticCurveTo(t, n, i, r)
                }
            } function vi(
            ) {
                var e, t = dn.jigexGetImageData(0, 0, un.width, un.height); if (t) {
                    e = t.data; var n, i, o, r = Math.round(ln / (cn.tab ? 2 : 3)),
                        s = 4 * un.width, a = un.width * un.height * 4, l = a / 2, c = 0, u = !1; switch (cn.side) {
                            case 0: n = r * s - 4, o = -4, u = !0; break; case 1: n = 4 * r, o = s; break
                                ; case 2: n = r * s, o = 4, u = !0; break; case 3: n = a - 4 * r, o = -s
                        }for (var d = 0; d < ln && 0 !== e[n]; d++)c++, n += o; for (i = n = u ? n % s : n - n % s,
                            d = 0; d < ln && n !== l; d++)0 === e[n] ? n += u ? 4 * un.width : 4 : (c++, i = n = i + o, d = 0); cn.tab ? (cn.border || 0 !== c || (K.warn(
                                "Warning: Zero curve height detected!  tab: st=" + cn.curves.name + ", sd=" + cn.side + ", sz=" + ln + ", h=" + c), c = 1),
                                cn.curves.tabHeights[cn.side][ln] = c) : (cn.border || 0 !== c || (K.warn(
                                    "Warning: Zero curve height detected!  hole: st=" + cn.curves.name + ", sd=" + cn.side + ", sz=" + ln + ", h=" + c + ", img=" + t.width + "x" + t.height
                                ), c = 1), cn.curves.holeHeights[cn.side][ln] = c)
                } else K.error("failed to measure curve due to getImageData failure")
            }
            function yi(e) {
                for (var t = un.width, n = un.height, i = 0; i <= 3; i++)if (!e.tabHeights[i][ln]) {
                    switch (cn.reset(), i) {
                        case 0:
                            cn.startX = t, cn.startY = 0, cn.endX = t, cn.endY = ln; break; case 1: cn.startX = 0, cn.startY = 0, cn.endX = ln, cn.endY = 0; break; case 2:
                            cn.startX = 0, cn.startY = ln, cn.endX = 0, cn.endY = 0; break; case 3: cn.startX = ln, cn.startY = n, cn.endX = 0, cn.endY = n
                    }dn.fillStyle = ue,
                        dn.fillRect(0, 0, t, n), dn.beginPath(), dn.fillStyle = "red", dn.moveTo(cn.startX, cn.startY), cn.side = i, cn.curves = e, fi(cn),
                        dn.fill(), vi(), dn.fillStyle = ue, dn.fillRect(0, 0, t, n), dn.beginPath(), dn.fillStyle = "red", dn.moveTo(cn.startX, cn.startY),
                        cn.tab = !0, fi(cn), dn.fill(), vi()
                }
            } function bi() { yi(mn), yi(gn), yi(pn), yi(fn) } function wi(e) {
                var t = re[an]; switch (t) {
                    case 0:
                        e.curves = mn, e.bend = !1; break; case 1: e.curves = mn, e.bend = !0; break; case 2: e.curves = gn, e.bend = !1; break; case 3: e.curves = gn,
                            e.bend = !0; break; case 4: e.curves = fn, e.bend = !1; break; case 5: e.curves = fn, e.bend = !0; break; default: e.curves = pn, e.bend = t % 2 == 1
                }
                37 <= ++an && (an = 0)
            } function xi() { kn.stop(), kn.set(W.timer.getElapsedSecs()), W.timer.conditionalStart() } function Pi() {
                var e = Z.Puzzle.curr; return {
                    info: "Jigsaw Explorer - Saved Jigsaw Puzzle File", home: "https://www.jigsawexplorer.com/",
                    ver: 8, progv: z.progVersion, id: m.genGuuid(me), pid: e.name, nam: null, cred: Z.Puzzle.urlParms.cred,
                    credu: Z.Puzzle.urlParms.credu, date: { strt: Date.now(), mod: Date.now() }, thm: h.val.ordinal, num: e.pieces.length,
                    rot: e.rotatable, cmplt: e.isComplete, tmr: 0, edo: 0, hnts: 0, pau: 0, shp: {
                        sty: 1, rw: e.pieces.numRows, cl: e.pieces.numCols,
                        ri: e.tabIndexRight, bi: e.tabIndexBottom, si: e.shapeIndex
                    }, bt: { v: 0, x: .5, y: .5, p: 0 }, pcs: [], chksm: 0
                }
            } function ki(e) {
                Z.recordsManager.cache(this), e ? (_n && (_n.cancel(), _n = null), this.save()) : _n ? _n.when = Date.now() + 500 : (_n = A.createTask(_i, 500
                )).data = this
            } function _i(e) { e.save() } function Ei(e) {
                for (var t = this.pcs, n = t.length - 1; 0 <= n; n--) {
                    var i = t[n]; if (i.id === e
                    ) return i
                } return null
            } function Ci() { _n && (_n.cancel(), _n = null) } function Si() {
                Z.recordsManager.delete(this.id),
                this.dispose()
            } function Ti(e, t) {
                var n = Z.Puzzle.curr, i = "", o = t ? "color:white;" : "color:blue;",
                r = t ? "color:LightGray;" : "color:GrayText;", s = e ? t ? e.excerpt : e.desc : "", a = e ? e.photo : null, l = a ? a.license : null, c = l && "SSTOCK" === l
                ; if (e && Z.Puzzle.urlParms.url) e.cred ? (i = m.secureString(e.cred), e.credu && (0 !== (u = e.credu).indexOf("http") && (u = "http://" + u)
                    , i = '<a href="' + u + '" target="_blank" style="' + o + '" rel="nofollow">' + i + "</a>")) : t || (
                        i = "No credits are available for this puzzle subject."),
                    i = "<p style=\"font-family: 'Roboto', sans-serif; font-size: 16px; text-align: center\">" + i + "</p>"; else if (e) {
                        var u, d, h,
                        p = a.photographer; if (t || -1 !== (u = s.indexOf("<a href=")) && (e = s.indexOf(">", u + 10), (-1 === (u = s.indexOf("target=", u + 10)) || e < u
                        ) && (s = s.substr(0, e) + ' target="_blank"' + s.substr(e))), i = '<p class="jigex-credit' + (t ? ' jigex-credit-short">' : '">'
                        ) + '<span class="jigex-credit">' + s + "</span>", p && !c && (s = p.name, p.profile && (
                            s = '<a href="' + p.profile + '" target="_blank" style="' + o + '">' + p.name + "</a>"), i += "<br/><br/>Photographer: " + s, p.gallery && (
                                s = p.gallery.includes("flickr.com") ? "photo gallery" : "website",
                                i += '<br/><a href="' + p.gallery + '" target="_blank" style="' + o + '">Visit ' + p.name + "'s " + s + "</a>")), c) i += (
                                    t ? "<br/><br/>" : "<br/><br/><br/>") + '<span style="' + r + '">Image credit: ' + (p && p.name ? p.name + "/" : ""
                                    ) + "Shutterstock.com</span>"; else if (a.source && (
                                        i += '<br/><a href="' + a.source + '" target="_blank" style="' + o + '">Source photo</a>', l)) {
                                            if ("PD" === l
                                            ) d = '<a href="http://en.wikipedia.org/wiki/Public_domain" target="_blank" style="' + o + '">All rights granted</a>'; else if (
                                                l.includes("CC")) {
                                                    switch (l) {
                                                        case "CCA": h = "http://creativecommons.org/licenses/by/2.0/"; break; case "CCASA":
                                                            h = "http://creativecommons.org/licenses/by-sa/2.0/"; break; case "CCAND": h = "http://creativecommons.org/licenses/by-nd/2.0/"
                                                                ; break; case "CCANC": h = "http://creativecommons.org/licenses/by-nc/2.0/"; break; case "CCANCSA":
                                                            h = "http://creativecommons.org/licenses/by-nc-sa/2.0/"; break; case "CCANCND":
                                                            h = "http://creativecommons.org/licenses/by-nc-nd/2.0/"
                                                    }
                                                d = '<a href="' + h + '" target="_blank" style="' + o + '">Some rights reserved</a>'
                                            } else d = '<a href="http://www.copyright.gov/" target="_blank" style="' + o + '">Copyright &copy; All rights reserved</a>'
                                                ; i += " &nbsp;&#8212;&nbsp; " + d
                        } g || (i += '<br/><br/><a href="' + ("https://www.facebook.com/sharer/sharer.php?u=" + (
                            Gi.homeDomain + "puzzles/" + Z.Puzzle.urlParms.puzzleId + (n.mysteryProfile ? "" : "-jigsaw-puzzle"))
                        ) + '" style="' + o + '" target="_blank">Share this puzzle on Facebook!</a></p>')
                    } return i
            } function zi() {
                var e = Z.Puzzle.curr; (
                    e || Z.background).rescale()
            } function Ii() { Sn = !1, A && A.isAvailable && (L.busy(!0), A.resize(zi)) } function Li(e, t) {
                var n = Z.Puzzle.curr, i = e.remoteData, o = e.isCaptured(); e.stateVar.val = o ? S : q, t || e.opacity || o || !(!n.showEdgesOnly(
                ) || e.isEdge || e.group && e.group.isEdge) || (i && i.immediate ? e.applyTask(function (e) { e.opacity = 1 }) : e.applyTask(function (e) {
                    e.fadeIn(se)
                })), i && i.timer && i.timer.clear(), e.remoteData = null
            } function Ai(e, t) {
                function n() {
                    e.isDisposed || t && t.isDisposed || (t ? (I.log(e.name + " & " + t.name + ": mp drop piece"),
                        !e.opacity && t.group && t.group.isEdge && e.applyTask(function (e) { e.opacity = 1 }), e.angle !== t.angle && (e.angle = t.angle), e.join(t
                        )) : (I.log(e.name + ": mp drop piece"), e.move(i.x, i.y)), Li(e))
                } var i = e.remoteData || (t ? t.remoteData : null); t ? (I.log(
                    e.name + " & " + t.name + ": remote join and drop pieces (" + (i && i.immediate ? "i)" : ")")), t.meta = { otherPiece: e }) : I.log(
                        e.name + ": remote drop piece (" + (document.hidden ? "h)" : "v)")), i ? i.immediate ? n() : i.timer = new l(100, n) : (e.logState(),
                            e.logHistory(), U.sendReport("dropPiece called from unexpected source"), n())
            } function Oi(e, t) { e.fadeOut(se, t) }
            function ji(e, t) { e.fadeIn(se, t) } function Mi(e, t) {
                var n = e.remoteData; return e.isCaptured() ? (e.decapture(), I.log(
                    e.name + ": remote decapture fade-in" + (n && n.immediate ? ", immediate" : "")), Ln(e, t), !0) : t ? (t(), !1) : void 0
            } function Bi(e, t, n) {
                I.log(e.name + " & " + t.name + ": remote move to fit for join (" + n + ")"), e.moveToFit(t, {
                    offset: -1, aniCallback: function () {
                        Ai(e,
                            t)
                    }
                })
            } function Ni(e, t, n, i, o) {
                I.log("debug track " + e + " :: pc=" + t.name + ", ref=" + (n ? n.name : "n/a") + ", piv=" + (i ? i.name : "n/a"
                ) + " :: " + o.toString())
            } function Ri(e, t, n) {
                var i, o, r, s, a, l = Z.Puzzle.curr, c = e.remoteData; void 0 === c.x && void 0 !== c.g ? (Ni(1,
                    e, t, n, c), On(e, t)) : (s = e.angle !== c.a, i = (c.m || e.group || !e.homePos ? c : e.homePos).x, o = (c.m || e.group || !e.homePos ? c : e.homePos).y
                        , r = !n && (Math.abs(e.position.x - i) > e.spec.core.width / 8 || Math.abs(e.position.y - o) > e.spec.core.height / 8), t ? (Ni(2, e, t, n, c),
                            On(e, t)) : !r || W.gameInfo.indie && l.stateVar.val.gte(k) ? s ? (Ni(4, e, t, n, c), r = n, s = (l = e).remoteData, (a = r || l).angle === s.a ? Li(a
                            ) : s.immediate || a.isCaptured() ? (a.angle = s.a, Li(a)) : a.rotateTo(s.a, !1, function () { Li(a) })) : (Ni(5, e, t, n, c), Li(e, !0), n && Li(n,
                                !0)) : (Ni(3, e, t, n, c), c.x = i, c.y = o, An(e)))
            } function Di() {
                var e; jn && (e = Z.Puzzle.curr,
                    "rejoining" === Mn && e && e.stateVar.val.gte(Gi.PS_WAITING) && !W.isConnecting() && (Mn = "delaying", jn = setTimeout(Bn, 3e3)))
            } y ? (
                b = Gi.PS_DEAD = new s("dead", 0, "PS"), w = Gi.PS_INIT_PREPPING = new s("init_prepping", 1, "PS"), x = Gi.PS_PREPPING = new s("prepping",
                    2, "PS"), P = Gi.PS_WAITING = new s("waiting", 3, "PS"), k = Gi.PS_READY = new s("ready", 4, "PS"), j = Gi.PS_PLAYING = new s("playing", 5,
                        "PS"), q = new s("resting", 0, "PC"), _ = new s("selected", 1, "PC"), E = new s("moving", 2, "PC"), C = new s("touched", 3, "PC"), S = new s(
                            "captured", 4, "PC"), T = new s("remote-select", 5, "PC"), M = new s("remote-control", 6, "PC"), B = new s("off", 0), N = new s("ready", 1),
                R = new s("capturing", 2), D = new s("releasing", 3), G = new s("bkgd-layer", 0, "layers").ordinal, V = new s("bottom-layer", 1, "layers"
                ).ordinal, F = new s("primer-layer", 2, "layers").ordinal, $ = new s("pieces-layer", 3, "layers").ordinal, Y = new s("top-layer", 4,
                    "layers").ordinal, X = new s("animate", 1, "EDO"), J = new s("instant", 2, "EDO"), ee = new s("value-only", 3, "EDO"),
                te = "_(no_preview_4)_", ne = "_(no_preview_2)_", ie = "_(no_preview)_", oe = [!85, !84, !0, !83, !0, !0, !82, !0, !0, !80, !0, !77, !0, !0, !73,
                !0, !0, !68, !0, !67, !0, !0, !66, !0, !0, !39, !0, !37, !0, !0], re = [0, 1, 6, 4, 1, 7, 5, 9, 2, 8, 6, 9, 0, 5, 9, 6, 7, 9, 3, 7, 2, 0, 8, 4, 9, 6, 2, 6, 8, 4, 3, 0, 8
                    , 3, 2, 7, 9, 5], se = 200, ae = 100, le = "puzzle_piece_mask", ce = "puzzle_piece_mask_2", ue = "black", de = Math.round(5 * Q), he = Math.round(
                        6 * Q), pe = "completions", ge = "jigex-completions", me = "jigex-rec-", fe = "phone", ve = Gi.isIOS && 1 < history.length && !g ? 35 * Q : 0,
                n.includes("iPad") || n.includes("SM-T") || n.includes("Silk") || n.includes("FxiOS") ? fe = "tablet" : n.includes("iPhone"
                ) || n.includes("iPod") ? fe = "phone" : Gi.isIOS ? fe = "tablet" : (n.includes("Windows NT") || n.includes("Mac OS") || n.includes("CrOS"
                ) || n.includes("Linux") && (n.includes("x86_64") || n.includes("i686"))) && (fe = "desktop"), "tablet" === fe ? K.log(
                    "device type: " + (Gi.isIOS ? "iPad" : "tablet")) : K.log("device type: " + fe), Z.DEVICE_TYPE = fe, Z.host = f, Z.onEscape = (ye = [],
                        document.addEventListener("keydown", function (e) {
                            if (27 === ((e = e || window.event).which || e.keyCode)) for (; ye.length;) {
                                var t = ye.pop(); t && t(e)
                            }
                        }), { add: function (e) { ye.push(e) }, remove: function (e) { e = ye.indexOf(e); -1 !== e && (ye[e] = null) } }),
                Z.delayedActions = (be = [], {
                    add: function (e) { var t = Z.Puzzle && Z.Puzzle.curr; !t || t.state.lte(x) ? be.push(e) : e() }, run: function (
                    ) { for (; be.length;)be.pop()() }
                }), Z.trollShield = (we = [], {
                    pieceHandled: function () {
                        if (W.joinedToGameVar.val) for (we.push(
                            Date.now()); 10 < we.length;)we.shift()
                    }, alarm: function () {
                        if (10 !== we.length) return !1; var e = Date.now(), t = e - we[0] < 5e3,
                            e = e - we[9] < 500, e = t && e; return e && K.log.once("trolling"), e
                    }
                }), Z.createContext = function (e) {
                    if (e) {
                        e = e.getContext("2d"); if (e
                        ) return e.jigexGetImageData = Dn, e
                    } return K.fault(new Error("No canvas provided to create context.")), null
                },
                Z.Controller = function (e) {
                    switch (this.type = e, this.x = 0, this.y = 0, this.captor = null, this.event = null, this.listeners = [], e) {
                        case 0: H.addEventListener("mousedown", this, !1), H.addEventListener("mouseup", this, !1), H.addEventListener("mousewheel",
                            this, !1), H.addEventListener("wheel", this, !1), H.addEventListener("mousemove", this, !1), H.addEventListener("touchmove", this
                                , !1), document.addEventListener("keydown", this, !1); break; case 1: H.addEventListener("touchstart", this, !1),
                                    H.addEventListener("touchend", this, !1), H.addEventListener("touchcancel", this, !1), H.addEventListener("touchleave", this, !1
                                    ), H.addEventListener("touchmove", this, !1); break; case 2: H.addEventListener("pointerdown", this, !1), H.addEventListener(
                                        "pointerup", this, !1), H.addEventListener("pointermove", this, !1)
                    }
                }, Z.Controller.controllerList = [],
                Z.Controller.getController = function (e) {
                    for (var t, n = Z.Controller.controllerList, i = n.length - 1; 0 <= i; i--)if ((t = n[i]
                    ).type === e) return t; return t = new Z.Controller(e), n.push(t), t
                }, Z.Controller.purgeListeners = function () {
                    for (
                        var e = Z.Controller.controllerList, t = e.length - 1; 0 <= t; t--)e[t].removeAllListeners(), e[t].release(); L.cursor(
                            L.DEFAULT_CURSOR)
                }, Z.Controller.filterEvent = (xe = null, function (e) {
                    return "touchstart" === e.type ? "pointerdown" === xe : (
                        xe = e.type, !1)
                }), Z.Controller.touchTS = 0, Z.Controller.recentTouch = function () { return Date.now() - Z.Controller.touchTS < 2e3 },
                Z.mouseController = Z.Controller.getController(0), Z.touchController = Z.Controller.getController(1),
                Z.pointerController = Z.Controller.getController(2), Z.Controller.prototype.capture = function (e) {
                    this.captor || (this.captor = e
                    )
                }, Z.Controller.prototype.release = function () { this.captor = null }, Z.Controller.prototype.isCaptured = function () {
                    return null !== this.captor
                }, Z.Controller.prototype.handleEvent = (ke = function (e, t) {
                    var n; t.captor ? (t.event = e,
                        t.captor.handleEvent(e), t.event = null) : (n = t.listeners[e.type]) && (t.event = e, n.forEach(Gn, e), t.event = null)
                }, Ee = Pe = 0, Ce = !(
                    _e = function (e) {
                        var t, n, i, o = !1, r = e.which, s = e.shiftKey, a = e.ctrlKey, l = Z.Puzzle.curr; switch (r) {
                            case 66:
                                l && !l.customMystery && (Vn(e), Z.boxTop.autoPeek()); break; case 67: l && (K.log(
                                    "key down: c, old-cap-state=" + l.capStateVar.val.name), l.toggleCaptureMode()); break; case 68: s && !a && Gi.modules.ui.msgbox(
                                        "Are you sure you want to delete all saved puzzle progress?", ["jigex-mb-yes", "jigex-mb-no"], function (e) {
                                            if ("yes" === e) {
                                                for (var t = m.localStore, n = {}, i = t.length - 1; 0 <= i; i--) {
                                                    var o = t.key(i); 0 === o.indexOf(me) && (n[o] = JSON.parse(t.getItem(o)),
                                                        t.removeItem(o))
                                                } Gi.modules.ui.msgbox("All saved puzzle progress is now deleted", ["jigex-mb-ok"], function () {
                                                    window.location.reload(!0)
                                                })
                                            }
                                        }); break; case 73: s && !a && (c || K.detail.isRecording()) && (t = Z.mouseController,
                                            i = l ? l.pieces.getPieceAt(t) : null, Vn(e), i && (K.diag("%s: id=%s, x=%s, y=%s, w=%s, h=%s", i.name, i.id, i.position.x,
                                                i.position.y, i.width, i.height), L.toast.show("id=" + i.id + (i.group ? ", grp=" + i.group.id : ""
                                                ) + ", st=" + i.state.name + ", mov=" + i.hasMoved + ", ec=" + (i.group ? i.group.edgeCount : i.isEdge ? 1 : 0), 6e3)), o = !0); break; case 77:
                                s && a && (Vn(e), e.altKey && K.log(atob(
                                    "VGhpcyBpcyB0aGUgSmlnc2F3IEV4cGxvcmVyIGppZ3NhdyBwdXp6bGUgcHJvZ3JhbSA6IENvcHlyaWdodCAoYykgMjAxNSBDYXJvbGluYSBSb2FkIFNvZnR3YXJlLCBMLkwuQy4="
                                )), L.programLog.show(), o = !0); break; case 80: Vn(e), Z.clock.pause(); break; case 82: l && l.stateVar.val.gte(k) && (Vn(e),
                                    l.relayer(), l.scatter(!0, s, !0)); break; case 83: s && a && (Vn(e), l && l.record ? (t = document.getElementById("jigex-import-rec-btn"
                                    ), n = document.getElementById("jigex-puzzle-rec"), i = document.getElementById("jigex-rec-import"), n.value = JSON.stringify(
                                        l.record), i.onclick = function () { n.select(), document.execCommand("copy") }, t.onclick(null)) : L.msgbox(
                                            "Puzzle record not found.")); break; case 84: Vn(e), L.colorMenu.visible("toggle"); break; case 85: s && a && c && (Vn(e), Z.test(),
                                                o = !0)
                        }return K.detail("Shortcut key: key=" + r + ", handled=" + o), o || (e.preventDefHandler = !1), o
                    }), function (e) {
                        if (
                            Z.Puzzle && Z.Puzzle.curr) {
                                var t = Date.now(), n = NaN, i = NaN, o = !1, r = 0 === e.type.indexOf("mouse") || 0 === e.type.indexOf("wheel"),
                                s = !r && 0 === e.type.indexOf("touch"), a = !r && !s && 0 === e.type.indexOf("pointer"), l = 0 === e.type.indexOf("key"), c = A.getClientRect(
                                ), u = !0, d = Q; if ((!l || !L.textInputMode()) && !Z.Controller.filterEvent(e)) {
                                    if ((s || a) && (Z.Controller.touchTS = t), r || a) n = (
                                        e.clientX - c.left) * d, i = (e.clientY - c.top) * d; else if (s) if (e.touches && e.touches.length) {
                                            var h = e.touches[0]; try {
                                                n = (
                                                    h.clientX - c.left) * d, i = (h.clientY - c.top) * d
                                            } catch (e) { return void K.warn.once("touch event failure: err-msg=%s", e.message) }
                                        } else n = this.x, i = this.y; else {
                                            if (!l) throw new Error("Unrecognized event type: " + e.type); void 0 === (e = e || window.event
                                            ).which && (e.which = e.keyCode)
                                    } switch (isNaN(n) || (n = Math.round(n), i = Math.round(i), o = n !== this.x || i !== this.y), o ? (
                                        this.movedXBy = n - this.x, this.movedYBy = i - this.y, this.x = n, this.y = i, this !== Z.mouseController && (Z.mouseController.x = n,
                                            Z.mouseController.y = i)) : (this.movedXBy = 0, this.movedYBy = 0), (this.event = e).controller = this,
                                    e.preventDefHandler = !this.isCaptured(), e.fromMouseDevice = r || a && "mouse" === e.pointerType,
                                    e.fromTouch = s || a && "touch" === e.pointerType, e.type) {
                                        case "mousemove": Pe = t; case "pointermove": o || (u = !1); break
                                            ; case "mouseenter": case "mouseleave": 200 < t - Pe && (u = !1); break; case "keydown": _e(e) && (u = !1); break; case "pointerdown":
                                        case "pointerup": if ("mouse" !== e.pointerType) break; case "mousedown": case "mouseup": e.type.includes("up") ? (Ce ? u = !1 : Ce = !0, Ee = t
                                        ) : Ce && t - Ee < 150 ? u = !1 : Ce = !1
                                    }u && ke(e, this), e.preventDefHandler && e.preventDefault()
                                }
                        }
                    }),
                Z.Controller.prototype.addListener = function (e, t) {
                    var n = this.listeners[e]; n || (n = [], this.listeners[e] = n), -1 === n.indexOf(t
                    ) && this.listeners[e].push(t)
                }, Z.Controller.prototype.removeListener = function (e, t) {
                    e = this.listeners[e], t = e ? e.indexOf(t
                    ) : -1; -1 !== t && e.splice(t, 1)
                }, Z.Controller.prototype.removeAllListeners = function () { this.listeners = [] }, Z.background = (Le = {
                    x: 0, y: 0, width: 0, height: 0, margin: 0
                }, Ve = {
                    init: function () {
                        var e; Re || ((e = Gi.parms().logoUrl) && ((e = new m.WebReq(e)).onload = Hn
                            , e.send()), Re = !0)
                    }, rescale: (Ne = Re = !(Ae = {
                        init: function () {
                            var e; g && ((e = new m.WebReq(Gi.imagesPath + "powered-by-logo.png",
                                Gi.altImagesPath ? Gi.altImagesPath + "powered-by-logo.png" : null)).onload = Fn, e.send()), Ae.init = function () { }
                        },
                        reposition: function () {
                            var e, t; Te && Te.naturalWidth && Te.naturalHeight && (e = Math.round(Te.naturalWidth / 2) + 35,
                                t = H.height - Math.round(Te.naturalHeight / 2) - 35, ze && ze.dispose(), (ze = new A.Clip({
                                    name: "jeLogo", position: { x: e, y: t }, layer: V,
                                    opacity: .4, image: { data: Te }
                                })).moveToBottom())
                        }
                    }), function () {
                        var e, t, n, i, o, r; De && (Ne || (je = De.naturalWidth,
                            Me = De.naturalHeight, Be = Gi.parms().logoPos || "left", Oe = "center" === Be ? .65 : .25, Ne = !0), t = Math.round(H.width * Oe), n = Math.round(
                                H.height * Oe), r = Me, (t < (o = je) || n < r) && (i = Math.min(t / o, n / r), o = Math.round(i * o), r = Math.round(i * r)), i = "center" === Be ? (
                                    e = Math.round(H.width / 2), Math.round(H.height / 2)) : (e = H.width - Math.round(o / 2) - 35, H.height - Math.round(r / 2) - 35), De.width = o,
                            De.height = r, Ge && Ge.dispose(), (Ge = new A.Clip({ name: "brandLogo", position: { x: e, y: i }, layer: V, opacity: .4, image: { data: De } })
                            ).moveToBottom())
                    })
                }, Fe = Ge = De = ze = Te = Ie = null, n = function (e) {
                    Fe && Fe.cancel(), h.isLoaded.val = !1, (Fe = new m.WebReq(e.texUrl,
                        e.altTexUrl)).onload = Wn, Fe.send(), f.setColor(e.color.background), Ae.init(), Ve.init()
                }, h.addListener(n), {
                    rescale: function () {
                        Ie && (Le.width = H.width, Le.height = H.height, Ie.setSize(H.width, H.height, Le)), Ae.reposition(), Ve.rescale(
                        )
                    }, onload: null
                }), Z.boxTop = (qe = [Math.round(91.8), Math.round(76.5), Math.round(51), Math.round(25.5)], Ye = [Math.round(84.15),
                Math.round(71.4), Math.round(255 * .23), Math.round(45.9), Math.round(33.15), Math.round(255 * .08)], Xe = document.createElement(
                    "canvas"), Je = Z.createContext(Xe), Ze = Qe = 0, it = nt = tt = et = $e = Ke = null, rt = ot = !1, n = {
                        posX: .5, posY: .5, dispose: function () {
                            et && (
                                et.dispose(), et = null), $e && ($e.dispose(), $e = null), nt = tt = Ke = null, L.update()
                        }, isReady: function () { return !!Ke },
                        setImage: function (e) { Ke = e, rt ? (rt = !1, this.setScale(Qe, Ze)) : Ze = Qe = 0 }, setScale: function (e, t) {
                            var n = Z.Puzzle.curr
                            ; n.mysteryProfile ? (n = (e = n.mysteryProfile.photo.sizes.full.width) / (t = n.mysteryProfile.photo.sizes.full.height), (
                                e > .8 * H.width || t > .8 * H.height) && (e / H.width > t / H.height ? (e = Math.round(.8 * H.width), t = Math.round(e / n)) : (t = Math.round(
                                    .8 * H.height), e = Math.round(t * n)))) : (e = Math.round(.7 * e), t = Math.round(.7 * t)), Qe = e, Ze = t, Ke ? (rt = !1, function () {
                                        if (
                                            Ke && Ke.complete && Qe) {
                                                var e, t, n, i = Qe + 8, o = Ze + 8, r = 4 * i; if (Xe.width = i, Xe.height = o, Je.clearRect(0, 0, i, o), Je.drawImage(Ke, 4, 4,
                                                    Qe, Ze), (o = Je.jigexGetImageData(0, 0, i, o)) && o.data) {
                                                        for (t = (e = o.data).byteLength - r + 4, n = e.byteLength; t < n; t += 4)e[t] = 255,
                                                            e[t + 1] = 255, e[t + 2] = 255, e[t + 3] = qe[3]; for (t = e.byteLength - 2 * r + 8, n = e.byteLength - r; t < n; t += 4)e[t] = 255, e[t + 1] = 255, e[t + 2] = 255,
                                                                e[t + 3] = qe[2]; for (t = e.byteLength - 3 * r + 12, n = e.byteLength - 2 * r; t < n; t += 4)e[t] = 255, e[t + 1] = 255, e[t + 2] = 255, e[t + 3] = qe[1]; for (
                                                        t = e.byteLength - 4 * r + 16, n = e.byteLength - 3 * r; t < n; t += 4)e[t] = 255, e[t + 1] = 255, e[t + 2] = 255, e[t + 3] = qe[0]; for (t = 2 * r - 4,
                                                            n = e.byteLength - 16; t < n; t += r)e[t] = 255, e[t + 1] = 255, e[t + 2] = 255, e[t + 3] = qe[3]; for (t = 3 * r - 8; t < n; t += r)e[t] = 255, e[t + 1] = 255,
                                                                e[t + 2] = 255, e[t + 3] = qe[2]; for (t = 4 * r - 12; t < n; t += r)e[t] = 255, e[t + 1] = 255, e[t + 2] = 255, e[t + 3] = qe[1]; for (t = 5 * r - 16; t < n; t += r)e[t] = 255
                                                                    , e[t + 1] = 255, e[t + 2] = 255, e[t + 3] = qe[0]; for (t = 0; t < r; t += 4)e[t + 3] = qe[3]; for (n = 2 * (t = r) - 4; t < n; t += 4)e[t + 3] = qe[2]; for (t = 2 * r,
                                                                        n = 3 * r - 8; t < n; t += 4)e[t + 3] = qe[1]; for (t = 3 * r, n = 4 * r - 12; t < n; t += 4)e[t + 3] = qe[0]; for (t = 4 * r, n = e.byteLength; t < n; t += r)e[t + 3] = qe[3]
                                                                            ; for (t = 4 * r + 4, n -= r; t < n; t += r)e[t + 3] = qe[2]; for (t = 4 * r + 8, n -= r; t < n; t += r)e[t + 3] = qe[1]; for (t = 4 * r + 12, n -= r; t < n; t += r)e[t + 3] = qe[0]; (
                                                                                nt = o).name = "recessed box top"; o = et && et.opacity; et && et.dispose(), et = new A.Clip({
                                                                                    layer: V, name: "recessedBoxTop", image: {
                                                                                        data: nt
                                                                                    }
                                                                                }), o || (et.opacity = 0, et.active = !1)
                                                }
                                        }
                                    }(), function () {
                                        if (Ke && Ke.complete && Qe) {
                                            var e, t, n, i = Qe + 6, o = Ze + 6, r = 4 * i, s = 4 * Qe
                                            ; if (Xe.width = i, Xe.height = o, Je.clearRect(0, 0, i, o), Je.drawImage(Ke, 0, 0, Qe, Ze), o = Je.jigexGetImageData(0, 0, i, o)) {
                                                for (n = (t = (
                                                    e = o.data).byteLength - r + 24) + s; t < n; t += 4)e[t + 3] = Ye[5]; for (n = (t = e.byteLength - 2 * r + 20) + s; t < n; t += 4)e[t + 3] = Ye[4]; for (n = (
                                                        t = e.byteLength - 3 * r + 16) + s; t < n; t += 4)e[t + 3] = Ye[3]; for (n = (t = e.byteLength - 4 * r + 12) + s; t < n; t += 4)e[t + 3] = Ye[2]; for (n = (
                                                            t = e.byteLength - 5 * r + 8) + s; t < n; t += 4)e[t + 3] = Ye[1]; for (n = (t = e.byteLength - 6 * r + 4) + s; t < n; t += 4)e[t + 3] = Ye[0]; for (t = 7 * r - 4,
                                                                n = e.byteLength; t < n; t += r)e[t + 3] = Ye[5]; for (t = 6 * r - 8, n -= r; t < n; t += r)e[t + 3] = Ye[4]; for (t = 5 * r - 12, n -= r; t < n; t += r)e[t + 3] = Ye[3]; for (
                                                    t = 4 * r - 16, n -= r; t < n; t += r)e[t + 3] = Ye[2]; for (t = 3 * r - 20, n -= r; t < n; t += r)e[t + 3] = Ye[1]; for (t = 2 * r - 24, n -= r; t < n; t += r)e[t + 3] = Ye[0]; o = !(
                                                        (tt = o).name = "floating box top"); $e && (o = !!$e.opacity, $e.dispose()), $e = new A.Clip({
                                                            layer: Y, name: "floatingBoxTop", image: {
                                                                data: tt
                                                            }
                                                        }), o || ($e.opacity = 0, $e.active = !1)
                                            } else K.error("Failed to create box top clip")
                                        } else K.log.pretty(
                                            "Could not create bt floating clip. img=%s, cmplt=%s, w1=%s, w2=%s, rec-profile=%s", Ke ? "yes" : "no", Ke ? Ke.complete : "n/a",
                                            Ke ? Ke.width : "n/a", Qe, Z.Puzzle.curr.mysteryProfile), K.fault()
                                    }()) : rt = !0
                        }, show: function () {
                            et && (et.active = !0, et.opacity = 1,
                                $e.active = !0, $e.opacity = 0, $e.active = !1, L.starterDlg.isCloaked && L.starterDlg.uncloak())
                        }, moveTo: function (e, t) {
                            this.posX = e
                            , this.posY = t, et && (et.active = !0, et.opacity = 1, et.position.assignNorm(e, t))
                        }, containsPoint: function (e, t) {
                            return this.isShowing() && et.containsPoint(e, t)
                        }, toggleDisplay: function () {
                            var e = Z.Puzzle.curr; et && e && e.state.gte(P) && (
                                et.opacity ? (et.fadeOut(200, null, !0), L.toast.hide()) : ($e.opacity && $e.fadeOut(200, null, !0), et.fadeIn(200),
                                    et.position.assignNorm(Z.boxTop.posX, Z.boxTop.posY), L.starterDlg.isCloaked && L.starterDlg.uncloak(),
                                    Z.Puzzle.curr.mysteryProfile ? L.toast.show("This box top shows only a portion of the complete puzzle subject.", 5e3
                                    ) : L.toast.hide()))
                        }, isShowing: function () { return et && et.opacity }, isPeeking: function () { return $e && $e.opacity },
                        peek: function () {
                            var e = Z.Puzzle.curr; e && e.state.gte(P) && !this.isPeeking() && !this.isShowing() && (L.starterDlg.visible(
                            ) && L.starterDlg.cloak(), $e.opacity = A.TW_ABORT, $e.fadeIn(200), Z.Puzzle.curr.mysteryProfile && L.toast.show(
                                "This box top shows only a portion of the complete puzzle subject.", 5e3))
                        }, autoPeek: (Ue = function (e) {
                            66 === e.which && (
                                Z.boxTop.unpeek(), document.removeEventListener("keyup", Ue))
                        }, function () {
                            this.peek(), document.addEventListener("keyup", Ue
                                , !1)
                        }), unpeek: function () {
                            var e = Z.Puzzle.curr; e && e.state.gte(P) && this.isPeeking() && ($e.opacity = A.TW_ABORT, $e.fadeOut(200,
                                null, !0), L.toast.hide()), L.starterDlg && L.starterDlg.isCloaked && L.starterDlg.uncloak()
                        }, handleEvent: function (e) {
                            switch (
                            e.type) {
                                case "mousedown": case "pointerdown": case "touchstart": if (et && et.opacity) {
                                    switch ($e.active = !0, $e.opacity = 1,
                                    $e.position.assign(et.position.x, et.position.y), et.opacity = 0, et.active = !1, ot = !0, e.preventDefHandler = !0,
                                    Z.boxTop.marker = !0, e.type) {
                                        case "mousedown": (it = Z.mouseController).addListener("mouseup", this), it.addListener("mousemove"
                                            , this); break; case "pointerdown": (it = Z.pointerController).addListener("pointerup", this), it.addListener("pointermove", this)
                                                ; break; case "touchstart": (it = Z.touchController).addListener("touchend", this), it.addListener("touchmove", this)
                                    }it.capture(
                                        this)
                                } break; case "mouseup": case "pointerup": case "touchend": if (ot) switch ($e.active ? (this.posX = $e.position.normX,
                                    this.posY = $e.position.normY, $e.opacity = 0, $e.active = !1) : (this.posX = .5, this.posY = .5), et.active = !0, et.opacity = 1,
                                    et.position.assignNorm(this.posX, this.posY), ot = !1, it.release(this), e.preventDefHandler = !0, e.type) {
                                        case "mouseup":
                                            it.removeListener("mouseup", this), it.removeListener("mousemove", this); break; case "pointerup": it.removeListener(
                                                "pointerup", this), it.removeListener("pointermove", this); break; case "touchend": it.removeListener("touchend", this),
                                                    it.removeListener("touchmove", this)
                                    }break; case "mousemove": case "pointermove": case "touchmove": $e.opacity && (
                                        He = $e.position.x + it.movedXBy, We = $e.position.y + it.movedYBy, $e.position.assign(He, We)), e.preventDefHandler = !0
                            }
                        }
                    },
                    Object.defineProperty(n, "isPresent", { get: function () { return et && et.opacity } }), n), Z.Subject = function (e) {
                        var t = Z.Puzzle.curr, n = document.createElement("canvas"); n.name = m.stringToVarName(e.src), this.name = e.src, this.srcImage = e,
                            this.image = n, this.width = 0, this.height = 0, this.scale = 1, t && !t.mysteryProfile && Z.boxTop.setImage(e), this.rescale()
                    },
                Z.Subject.prototype.isReady = function () { return !!this.image }, Z.Subject.prototype.dispose = function () {
                    this.srcImage = null,
                    this.image = null, this.texture && this.texture.dispose()
                }, Z.Subject.prototype.rescale = function () {
                    for (
                        var e = this.srcImage.width, t = this.srcImage.height, n = e * t, i = H.width * H.height, o = 1, r = Z.createContext(this.image),
                        s = !1; .35 < n / i || e > .9 * H.width || t > .9 * H.height;)o -= .01, n = (e = this.srcImage.width * o) * (t = this.srcImage.height * o), s = !0; if (!s) for (
                            ; n / i < .35 && e < .9 * H.width && t < .9 * H.height;)o += .01, n = (e = this.srcImage.width * o) * (t = this.srcImage.height * o); this.scale = o,
                                this.width = Math.round(e), this.height = Math.round(t), e = this.width + 14 + 1, t = this.height + 14 + 1, this.image.width = e,
                                this.image.height = t, r.clearRect(0, 0, e, t); try { r.drawImage(this.srcImage, 7, 7, this.width, this.height) } catch (e) {
                                    K.error(
                                        "canvas drawImage failure: w=%d, h=%d, err:", this.width, this.height, e), this.width = 0, this.height = 0
                                }
                    this.width && this.height && (this.texture && this.texture.dispose(), this.texture = A.Texture.getTexture(this.image),
                        Z.boxTop.setScale(this.width, this.height))
                }, Z.Puzzle = (st = Object.create(A.clips[$]), ct = at = null, pt = ht = dt = ut = 0, gt = !(lt = !0),
                    st.applyTask = function (e) { for (var t = st.head; t;)e(t.item), t = t.next }, st.audit = function () {
                        for (var e = st.head, t = 0; e;) {
                            var n = e.item, i = "audit: id=" + n.id + ", node=" + n.node + ", disposed=" + n.isDisposed + ", edge=" + n.isEdge; n.group && (
                                i += ", grpid=" + n.group.id + ", grplen=" + n.group.length), t++, K.log(i), e = e.next
                        } K.log("audit: cnt=" + t)
                    },
                    st.getPieceAt = function (e) {
                        var t, n = e.event.fromTouch, i = e === Z.mouseController || !n ? Z.Piece.selectedPiece : null; return i || (
                            t = A.clips.getClipAt(e.x, e.y, $, n)) && t.state.eq(T) && (n = {
                                top: Math.round(t.position.y / Q), left: Math.round((
                                    t.position.x + t.spec.core.width / 2) / Q), adjust: !0
                            }, o.showTooltip(n, (t.remotePlayerName || "Another player"
                            ) + " is already moving this piece", 3e3), L.cursor(L.NOT_ALLOWED_CURSOR, 1e3)), i || (t && t.state.neq(S, T, M) ? t : null)
                    },
                    st.getPiece = function (e) { return this.specList[e - 1].piece }, st.getIterator = function () {
                        var e = 0; return {
                            getNext: function () {
                                return at && e < at.length ? at[e++] : null
                            }
                        }
                    }, st.dispose = function () {
                        for (var e = st.tail; e;) {
                            var t = e.item
                            ; t.remoteData && t.remoteData.timer && t.remoteData.timer.clear(), t = e.prev, e.item.stateVar.dispose(), e.item.dispose(), e = t
                        } (
                            st.tail || st.head) && K.error("non-empty pieces list after dispose"), ct = at = null, pt = ht = dt = ut = 0, lt = !(gt = !1),
                            Z.Piece.selectedPiece = null
                    }, Object.defineProperty(st, "isEdgeComplete", {
                        get: function () {
                            if (gt) return !0; Un()
                                ; var e = ct ? ct[0].group : null; return !(!e || e.edgeCount !== pt) && (K.log("frame completed"), gt = !0)
                        }
                    }), Object.defineProperty(st,
                        "length", { get: function () { return Un(), ht } }), Object.defineProperty(st, "numRows", { get: function () { return Un(), ut } }),
                    Object.defineProperty(st, "numCols", { get: function () { return Un(), dt } }), Object.defineProperty(st, "numEdges", {
                        get: function (
                        ) { return Un(), pt }
                    }), mt = st, ft = function () {
                        var e = Z.Puzzle.curr, t = !!(e && e.subject && e.subject.isReady()),
                        n = e && e.multiplayerGameId ? W.joinedToGameVar.val : "n/a"; K.log(
                            "readyToPrep: puzzle=%s, subject-ready=%s, box-top-ready=%s, ui-ready=%s, connected=%s", !!e, t, Z.boxTop.isReady(),
                            L.isReady, n), !1 === n && (W.joinedToGameVar.addListener(qn), W.isConnecting() || W.joinGame()), t && Z.boxTop.isReady(
                            ) && L.isReady && n && ((n = Z.recordsManager.find(e.name)) && !e.multiplayerGameId ? (K.note(
                                "found record: id=" + n.id + ", name=" + e.name + ", rec.nam=" + n.nam + ", rec.pid=" + n.pid), (e.record = n).thm && (
                                    h.val = h.getThemeFromOrdinal(n.thm)), e.rotatable = n.rot, e.tabIndexRight = n.shp.ri, e.tabIndexBottom = n.shp.bi,
                                e.shapeIndex = n.shp.si, setTimeout(function () {
                                    wt(); var e = Z.Puzzle.curr; if (e && e.showEdgesOnly()) for (
                                        var t = e && e.pieces ? e.pieces.head : null; t;) {
                                            var n = t.item; n.isEdge || n.group && n.group.isEdge || !n.state.neq(_, S, T, M) || (
                                                n.opacity = 0), t = t.next
                                    }
                                }, 10)) : (e && e.multiplayerGameId || K.note("no record found"), Et() && setTimeout(function () {
                                    var e, t, n,
                                    i = Z.Puzzle.curr; i && ((e = i.record) && e.rows || i.multiplayerGameId && !W.joinedToGameVar.val ? ft() : (wt(),
                                        i.stateVar.isDisposed || !i.stateVar.val.bet(w, P) || i.multiplayerGameId || (t = o.getPnl("jigex-promo-1"), (n = function () {
                                            t && t.visible() ? setTimeout(n, 100) : (L.starterDlg.visible(!0), i.state = P, Gi.isIOS && screen.height - innerHeight < 50 && L.msgbox(
                                                "If you cannot see this jigsaw puzzle game's toolbar then the problem is due to a possible bug that began appearing in the Chrome browser in early September, 2020. The problem has been reported to Google and we hope it will be fixed soon. Meanwhile, you may want to play this puzzle in the Safari browser instead. Thank you for your patience."
                                            ))
                                        })())))
                                }, 10)), Z.delayedActions.run())
                    }, vt = -1 !== navigator.userAgent.indexOf("Edge/12"), bt = function () {
                        vt && !yt && (
                            L.toast.show("Do some buttons seem to be invisible?", 8e3, Yn), yt = !0)
                    }, wt = function () {
                        var e, t = Z.Puzzle.curr, n = t.record,
                        i = t.subject, o = W.gameInfo; if (t.state.bet(w, P)) {
                            if (K.log("begin prep"), t.capStateVar.meta.isCapturing() && (
                                t.toggleCaptureMode(), L.update()), n || o) {
                                    if ((e = {}).nop = o ? o.nop : n.num, e.rows = o ? o.rows : n.shp.rw, e.cols = o ? o.cols : n.shp.cl,
                                        e.size = Math.min(Math.floor(i.width / e.cols), Math.floor(i.height / e.rows)), e.size < 10) return L.busy(!1), L.msgbox(
                                            "The browser window is not large enough to continue this puzzle."), t.dispose(), void L.disable()
                            } else (
                                e = L.numPiecesMenu.selectedNop) && e.rows && e.cols ? K.log("valid nop, 2") : K.warn(
                                    "invalid selected nop object encountered. nop=" + e); i && Z.knife.cut(i, e) ? (o ? Z.restoreGame() : t.state.eq(w, x) && (
                                        t.state = t.record ? k : P), Z.mouseController.addListener("mousemove", t), Z.mouseController.addListener("mousedown", t),
                                        Z.mouseController.addListener("mouseup", t), Z.mouseController.addListener("mousewheel", t), Z.mouseController.addListener(
                                            "wheel", t), Z.mouseController.addListener("keydown", t), Z.touchController.addListener("touchstart", t),
                                        Z.touchController.addListener("touchend", t), Z.touchController.addListener("touchmove", t),
                                        Z.pointerController.addListener("pointerdown", t), Z.pointerController.addListener("pointerup", t),
                                        Z.pointerController.addListener("pointermove", t), n ? (t.showEdgesOnly(n.edo, X), Z.clock.set(n.tmr), n.bt.v && (Z.boxTop.show()
                                            , Z.boxTop.moveTo(n.bt.x, n.bt.y), L.update())) : (t.multiplayerGameId ? Z.clock.set(W.timer.getElapsedSecs()) : Z.clock.set(0),
                                                bt()), K.log("end prep")) : (K.error("prep failed"), t.dispose())
                        } else K.error("wrong state to prep: state=" + t.state)
                    },
                    xt = function (e) {
                        var t = Z.Puzzle.curr, n = t ? t.name : null, i = t ? t.record : null; L.busy(!1),
                            e = e && e.failedOnChromeBug ? 'The puzzle subject could not be downloaded due to a problem in the Chrome browser. If the problem persists then try restarting the browser. If restarting the browser does not work then try <a href="https://support.google.com/chrome/answer/95589?hl=en" target="_blank">clearing the browser history</a>.' : e && !e.url.includes(
                                Gi.subjectsPath) ? e.url.includes(".fbcdn.net"
                                ) ? "This custom jigsaw puzzle failed to load because the Facebook image link used for the puzzle's subject has expired or is invalid." : "The custom jigsaw puzzle subject failed to load. Ensure the image link used to create this puzzle points to a valid JPG, PNG, or GIF image file." : "The specified puzzle subject failed to load."
                            , i ? L.deleteRecordPrompt(e, i.id) : L.msgbox(e), K.log("Failed to pull subject. id=" + n, !0), t.state = b
                    }, Pt = function (e) {
                        L.busy(
                            !1), e.srcImage.width < ae || e.srcImage.height < ae ? L.msgbox(
                                "The specified puzzle subject is too small. The minimum required image width is 100 pixels and the minimum required image height is 100 pixels."
                            ) : L.msgbox("The browser window is too small to accommodate the puzzle."), K.log(
                                "Subject is too small. id=" + Z.Puzzle.curr.name, !0)
                    }, kt = function () {
                        var e = Z.Puzzle.curr; L.busy(!1), e.state = b, L.msgbox(
                            "The specified puzzle could not be found."), K.error("Failed to pull profile. id=" + e.name, !0)
                    }, _t = function (e) {
                        var t = Gi.profilesPath + e + ".json", e = Gi.altProfilesPath + e + ".json", e = new m.WebReq(t, e); e.onload = Zn, e.onerror = kt, e.send(),
                            K.log("profile requested")
                    }, Et = function () {
                        var e = Z.Puzzle.curr, t = function () {
                            var e = Z.Puzzle.curr; if (e.customMysteryNop
                            ) return e.customMysteryNop; var t = !!Z.Puzzle.urlParms.name, e = !!e.mysteryProfile || e.customMystery === te, n = !t && !e && Gi.parms(
                            ).nop || 0, i = n <= 100 ? 1 : n / 100; switch (fe) {
                                case "phone": return n <= 35 ? n || 35 : Math.round(35 * i); case "tablet":
                                    return n <= 60 ? n || 60 : Math.round(60 * i); default: return n || 100
                            }
                        }(), n = Math.round(t / 100 * (
                            e.mysteryProfile ? e.mysteryProfile.mystery["min pieces"] : Z.Puzzle.urlParms.min || 0)), t = {
                                subject: e.subject, minNop: n,
                                defNop: e.pieces.length || e.nop && e.nop.nop || t, selectedNop: null
                            }, t = Z.knife.cutChoices(t); return t ? (
                                L.numPiecesMenu.onNopChange = Ct, L.numPiecesMenu.setChoices(t), !0) : (Pt(e.subject), !1)
                    }, Ct = function () {
                        var e = Z.Puzzle.curr,
                        t = A.clips[F]; K.log("nop change"), e.showEdgesOnly(!1, ee), e.state = x, e.nop = L.numPiecesMenu.selectedNop, e.capState = B,
                            e.pieces.dispose(), t.head && t.head.item.dispose(); t = A.Texture.getTexture(le); t && t.dispose(), (t = A.Texture.getTexture(ce)
                            ) && t.dispose(), Z.Controller.purgeListeners(), e.record && (e.record.purge(), e.record = null), Z.clock.stop(), Z.clock.set(0),
                                e.tabIndexRight = -1, e.tabIndexBottom = -1, e.isComplete = !1, e.numMoves = 0, wt()
                    }, jt = !(yt = !(St = function () {
                        var e = Z.Puzzle.curr
                        ; if (e) {
                            if (e.state.lt(P) || W.isConnecting()) return K.detail("delay rescale"), void setTimeout(St, 2e3); K.emitBreak(), K.note(
                                "rescale: w=" + H.width + ", h=" + H.height + ", s.w=" + f.getWidth() + ", s.h=" + f.getHeightMinusToolbar()), Z.background.rescale()
                                ; var t = A.clips[F]; e.state = x, e.capState = B, e.pieces.dispose(), e.record && e.record.dispose(), t.head && t.head.item.dispose(),
                                    e.subject && (e.subject.rescale(), (e = A.Texture.getTexture(le)) && e.dispose(), (e = A.Texture.getTexture(ce)) && e.dispose(),
                                        Z.Controller.purgeListeners(), ft())
                        }
                    })), Mt = [], Bt = function () {
                        var e = Z.Puzzle.curr, t = e ? e.pieces : null; if (
                            t && e.stateVar.val.eq(j)) {
                                var n, i, o = A.canvas.width + .5, r = A.canvas.height + .5, s = 0, a = t.getIterator(), l = 0, c = 0; for (
                                    At = Lt = It = zt = Tt = 0; n = a.getNext();) {
                                        var u = !1; if (s++, !n.isTweening()) {
                                            if (n.group) {
                                                var d = n.group.members, h = 0; if (
                                                    n.id !== n.group.id) continue; for (var p, g = n, m = null, f = n.angle, v = d.length - 1; 0 <= v; v--)1 === (p = d[v]).id && Math.max(1, 1),
                                                        !m && p.position.x >= ve && p.position.x <= o && 0 <= p.position.y && p.position.y <= r && (m = p), p.angle !== f && (u = !0), p.isEdge && h++; if (
                                                    n.group.edgeCount !== h && (At++, n.group.edgeCount = h), m) n = m; else {
                                                        for (var y, b, w = 1 / 0, v = d.length - 1; 0 <= v; v--)S = (p = d[v]
                                                        ).position.x, T = p.position.y, (y = (S < 0 ? Math.abs(S) : o < S ? S - o : 1) * (T < 0 ? Math.abs(T) : r < T ? T - r : 1)) < w && (w = y, b = p); n = b
                                                } if (u) {
                                                    var x, P = [
                                                    ]; if (P[0] = 0, P[90] = 0, P[180] = 0, P[270] = 0, W.joinedToGameVar.val) {
                                                        var k = W.getPieceInfo(g.id); if (!k) return g.logState(),
                                                            g.logHistory(), void U.sendReport("Unexpected audit situation. id=" + g.id); f = 90 * k.a, g.angle !== f && (g.angle = f)
                                                    } else {
                                                        for (
                                                            v = d.length - 1; 0 <= v; v--)void 0 !== P[(p = d[v]).angle] && P[p.angle]++; f = P[0] > P[90] ? 0 : 90, x = Math.max(P[0], P[90]), f = P[180] > x ? 180 : f
                                                                , x = Math.max(P[180], x), f = P[270] > x ? 270 : f
                                                    } for (v = d.length - 1; 0 <= v; v--)(p = d[v]).angle !== f && (p.angle = f, It++)
                                                }
                                            } var _, E, C,
                                                S = n.position.x < ve ? ve : n.position.x > o ? A.canvas.width : NaN, T = n.position.y < 0 ? 0 : n.position.y > r ? A.canvas.height : NaN; if (isNaN(S
                                                ) && isNaN(T) || (S = isNaN(S) ? n.position.x : S, T = isNaN(T) ? n.position.y : T, n.position.assign(S, T), l++), n.group) for (
                                                    v = d.length - 1; 0 <= v; v--)(p = d[v]) !== n && (Z.Piece.gap.measure(p, n, !1, 0), _ = Z.Piece.gap.x, E = Z.Piece.gap.y, Z.Piece.gap.measure(p
                                                        , n, !0, 0), 90 === n.angle ? (C = _, _ = -E, E = C) : 180 === n.angle ? (_ = -_, E = -E) : 270 === n.angle && (C = E, E = -_, _ = C),
                                                        _ === Z.Piece.gap.x && E === Z.Piece.gap.y || (2 === d.length && I.log(
                                                            n.name + ": Gap found. x=" + n.position.x + ", y=" + n.position.y + ", id2=" + p.id + ", x2=" + p.position.x + ", y2=" + p.position.y + ", dx=" + _ + ", dy=" + E
                                                        ), _ = Z.Piece.gap.x - _, E = Z.Piece.gap.y - E, S = p.position.x + _, T = p.position.y + E, p.position.assign(S, T) && (c++, Ot || (I.log(
                                                            n.name + ": gap corrected"), Ot = { sendReport: !0, piece: n, grpPiece: p, xGap: _, yGap: E })))), ii(p, e); else ii(n, e)
                                                ; n.id !== n.spec.id && 0
                                        }
                                } (Tt || zt || l || It || c || Lt || At) && K.info(
                                    "corrected pieces: mispositioned=" + l + ", invisible=" + Tt + ", inactive=" + zt + ", bad_angle=" + It + ", gaps=" + c + ", edge_grps=" + Lt + ", edge_cnts=" + At
                                ), s === t.length && s === t.numRows * t.numCols || (K.warn(
                                    "mismatched count: cnt=" + s + ", len=" + t.length + ", rows=" + t.numRows + ", cols=" + t.numCols), t.audit(), U.sendReport(
                                        "Mismatched count")), z.debug1 && Ot && Ot.sendReport && (It || c) && Ot.piece.group && 2 === Ot.piece.group.length && (
                                            !l || e.record && e.record.progv) && (i = Date.now(), K.log(
                                                "id=" + Ot.piece.id + ", x=" + Ot.piece.position.x + ", y=" + Ot.piece.position.y + ", a=" + Ot.piece.angle + ", x-gap=" + Ot.xGap + ", y-gap=" + Ot.yGap
                                            ), K.log(I.getLogs(function (e, t) { return !(t + 6e3 < i) && (e.includes(Ot.piece.name) || e.includes(Ot.grpPiece.name)) })), K.log(
                                                "end"), U.sendReport("Rotation corrections"), Ot.sendReport = !1), z.debug2 && (Tt || zt) && (K.log("number of pieces captured: %s"
                                                    , Z.Piece.capturedList.length), U.sendReport("Visibility corrections")), (Lt || At) && U.sendReport("Edge corrections")
                        }
                    },
                    function (t) {
                        var e, n, i, o, r, s, a = L.verboseLoggingVar.val ? I.LOG_CHANGES : I.LOG_NONE; Z.Puzzle.curr && (Z.Puzzle.curr.dispose(),
                            A.Texture.freeAllUnused()), this.capStateVar = I.define(this, "capState", new I(B, "puzzle.capState", function () {
                                var e = Z.Puzzle.curr; return e.state.eq(w, x) || e.state.gte(k)
                            }, a, a)), this.capStateVar.meta = {
                                isCapturing: function () {
                                    return Z.Puzzle.curr.capState.neq(B)
                                }
                            }, this.capStateVar.addListener(function (e) {
                                var t = Z.Piece.capturedList.length; e.gte(
                                    N) ? L.cursor(t ? L.CLOSED_HAND_CURSOR : L.OPEN_HAND_CURSOR) : e.eq(B) && (L.cursor(L.DEFAULT_CURSOR), Z.Piece.releaseAll())
                            }),
                            L.verboseLoggingVar.addListener(function (e, t, n) {
                                n.intLogVerbosity = e ? I.LOG_CHANGES : I.LOG_NONE,
                                n.extLogVerbosity = e ? I.LOG_CHANGES : I.LOG_NONE
                            }), this.stateVar = I.define(this, "state", new I(b, "puzzle.state", I.LOG_CHANGES,
                                I.LOG_CHANGES, function (e) { return e.eq(w) && I.clearLogs(), !0 })), this.stateVar.addListener(function (e) {
                                    var t = Z.Puzzle.curr
                                    ; L.busy(e.eq(w, x)), L.update(), t.state.lt(P) && t.showEdgesOnly(!1, ee), e.eq(j) && K.emitBreak()
                                }), Z.Puzzle.curr = this, (
                                    Z.Puzzle.urlParms = t).log(), this.pieces = mt, this.state = w, this.subject = null, this.record = null, this.profile = null,
                            this.tabIndexRight = -1, this.tabIndexBottom = -1, this.shapeIndex = W.gameInfo ? W.gameInfo.shp : Math.round(Math.random() * (
                                re.length - 1)), this.isComplete = !!W.gameInfo && W.gameInfo.cmplt, this.credits = null, this.mysteryProfile = null,
                            this.customMystery = !1, this.customMysteryNop = 0, this.nop = null, this.rescale = St, this.relayer = ei, this.nopChangePrep = Et,
                            this.onNopChange = Ct, this.numMoves = 0, this.snapDistance = he, this.auditPieces = Bt, this.normalizeAngle = ni,
                            this.initialAngles = null, this.tabHoleRightIndex = W.gameInfo ? W.gameInfo.tabr : Math.round(Math.random() * (oe.length - 1)),
                            this.tabHoleBottomIndex = W.gameInfo ? W.gameInfo.tabb : Math.round(Math.random() * (oe.length - 1)),
                            this.multiplayerGameId = Gi.parms().gameId, this.multiplayerGameId || W.joinedToGameVar.addListener(function (e) {
                                if (e
                                ) return Z.Puzzle.curr.multiplayerGameId = W.gameId, "remove"
                            }), this.multiplayerGameId && (e = parseInt(this.multiplayerGameId,
                                36), K.log("game initial date: gid=%s, date=%s", this.multiplayerGameId, m.convertTimestampToLocalDateAndTime(e))),
                            L.isReady && (L.numPiecesBtn.enabled(!0), L.rotateBtn.toggled(!1), L.update()), t.recId ? (a = new XMLHttpRequest,
                                e = "https://s3.amazonaws.com/jigex-pub-res/debug-data/records/" + t.recId + ".json", a.open("GET", e), a.crossOrigin = "anonymous"
                                , a.onload = function (e) {
                                    e = e.target; i = JSON.parse(e.response), Z.Puzzle.curr.name = i.pid, t.puzzleId = i.pid, Z.puzzleRecord(i, !0)
                                        , _t(i.pid)
                                }, a.onerror = function (e) { e = e.target; K.error("Failed to load record: status=", e.status, ", recId=", t.recId) },
                                a.send()) : t.puzzleId ? ("testmode" === t.puzzleId ? ((s = new m.WebReq("nicks-fish-house.jpg", null)).onload = Xn, s.send()) : _t(
                                    t.puzzleId), this.name = t.saveName || t.puzzleId) : t.url ? (this.name = t.saveName || t.url, $n(t.url), !t.cred || -1 !== (
                                        s = t.cred.indexOf("©")) && (t.cred = t.cred.substr(0, s - 1) + "&copy;" + t.cred.substr(s + 1)), this.credits = new Z.Credits(t)
                                    ) : t.name ? (this.name = t.saveName || t.name, h.setToDefault(), o = t.data, (r = new Image).onload = Jn, r.onerror = Jn, r.src = o) : (
                                        i = Z.recordsManager.youngest(), t.puzzleId = i ? i.pid : "", r = t.puzzleId, i && i.nam ? (L.busy(!1), h.setToDefault(),
                                            n = "The jigsaw puzzle represented by saved puzzle file " + i.nam + " can be continued by reopening that puzzle file.",
                                            L.deleteRecordPrompt(n, i.id), this.state = b) : 0 === r.indexOf("http") ? (t.puzzleId = null, t.url = r, t.cred = i.cred, t.credu = i.credu,
                                                this.record = i, this.name = r, $n(r), this.credits = new Z.Credits(t)) : r.includes(".jpg") || r.includes(".jpeg") || r.includes(
                                                    ".png") || r.includes(".gif") || r.includes(".bmp") || r.includes(".jigsaw") || r.includes(".JPG") || r.includes(".JPEG"
                                                    ) || r.includes(".PNG") || r.includes(".GIF") || r.includes(".BMP") || r.includes(".JIGSAW") ? (o = r.includes(".jigsaw"
                                                    ) || r.includes(".JIGSAW") ? "saved puzzle" : "image", L.busy(!1), h.setToDefault(),
                                                        n = "The jigsaw puzzle made from " + o + " " + r + " can be continued by reopening that " + o + " file.", i ? L.deleteRecordPrompt(n, i.id
                                                        ) : L.msgbox(n), this.state = b) : r ? (this.name = r, _t(r)) : (h.setToDefault(), L.busy(!1), L.msgbox(
                                                            'You have no saved puzzles in progress.<br/><br/>Open your own photo as a jigsaw puzzle by clicking this program\'s menu button and selecting "<i>Open photo as a puzzle</i>" from the menu.'
                                                        ), this.state = b)), (t.name && t.name.includes(".jigsaw") || t.saveName && t.saveName.includes(".jigsaw")
                                                        ) && L.numPiecesBtn.enabled(!1)
                    }), Z.Puzzle.curr = null, Z.Puzzle.prototype.reset = function () {
                        this.nopChangePrep(),
                        this.onNopChange()
                    }, Z.Puzzle.prototype.showEdgesOnly = (Rt = Nt = !1, function (i, e, o) {
                        if (void 0 === i) return Rt; if (void 0 === e
                        ) throw new Error("showEdgesOnly requires an action parameter"); var t = this, n = t.pieces.isEdgeComplete; if (i === Rt) {
                            if (e.eq(X
                            ) || !Nt) return void K.log("showEdgesOnly request rejected (1): edo=%s, act=%s, inprg=%s", i, e.name, Nt)
                        } else e.eq(X) && (
                            Nt || document.hidden || !m.sysTiming.isRunning) && (e = J, Nt = !1); if (t.state.lt(x) || i && n) K.log(
                                "showEdgesOnly request rejected (2): edo=%s, cmplt=%s, st=%s", i, n, t.state.name); else {
                                    K.log(
                                        "showEdgesOnly -> " + i + ";  (" + e.name + ")"); var r, s, a, l, c = t.pieces.head; if (Rt = i, e === J) {
                                            for (; c;)s = !((r = c.item
                                            ).isEdge || r.group && r.group.isEdge), l = i ? r.stateVar.val.eq(q) : r.stateVar.val.eq(q, T, M), s && l && (r.opacity = i ? 0 : 1), c = c.next
                                                ; t.scatter(!0), t.updateRecord()
                                        } else if (e === X) {
                                            for (var u = []; c;)s = !((r = c.item).isEdge || r.group && r.group.isEdge),
                                                l = i ? r.stateVar.val.eq(q) : r.stateVar.val.eq(q, T, M), a = r.hasMoved || !!r.group, !s && a || !l || u.push(r), c = c.next; u.length && (Nt = !0
                                                    , u[0].applyTask(function (e, t) { e.fadeOut(se, t, !1, o) }, function () { t.relayer(), t.scatter(!0) }, u), u[0].applyTask(function (e, t
                                                    ) {
                                                        var n; e.isEdge || e.group && e.group.isEdge || !i ? (n = !(e.isEdge || e.group && e.group.isEdge) && !i ? se + (o || 0) : void 0, e.fadeIn(se, t
                                                            , n)) : t()
                                                    }, function () { u.length = 0, Nt = !1, t.updateRecord() }, u))
                                        } L.update()
                        }
                    }), Z.Puzzle.prototype.updateRecord = (Dt = null,
                        function (e) {
                            if (this.multiplayerGameId) clearTimeout(Dt), Dt = setTimeout(this.auditPieces, 500); else {
                                if (!this.record) {
                                    if (
                                        !this.numMoves) return; this.record = new Z.puzzleRecord
                                } this.record.update(e)
                            }
                        }), Z.Puzzle.prototype.resetPieces = function () {
                            if (this.stateVar.val.gte(P)) {
                                for (var e = this.pieces.head; e;) {
                                    var t = e.item; t.isDisposed || (t.killTweeners(),
                                        t.stateVar.val.eq(S) && (t.opacity = 1), t.remoteData && (t.remoteData.timer && (t.remoteData.timer.clear(),
                                            t.remoteData.timer = null), t.remoteData = null, t.remotePlayerName = null), t.group && t.group.id !== t.id || (t.stateVar.val = q)),
                                        e = e.next
                                } this.capStateVar.val.neq(B) && (Z.Piece.releaseAll(!0), L.cursor(L.DEFAULT_CURSOR), this.capStateVar.val = B,
                                    L.update()), Z.Piece.selectedPiece && (Z.Piece.selectedPiece.drop(), Z.Piece.selectedPiece = null), u.kill(),
                                    A.clearAllTweeners()
                            }
                        }, Z.Puzzle.prototype.start = function () {
                            this.multiplayerGameId ? W.timer.start() : Z.clock.resume(),
                            this.state = j
                        }, Z.Puzzle.prototype.toggleCaptureMode = function () {
                            var e = Z.Puzzle.curr; (e.state.eq(w, x) || e.state.gte(k)) && (
                                e.capState.eq(B) ? Z.Piece.selectedPiece ? L.msgbox(
                                    "Release the currently selected puzzle piece before switching to capture mode.") : (e.capState = N, Z.onEscape.add(oi)) : (
                                    e.capState = B, Z.onEscape.remove(oi)))
                        }, Z.Puzzle.prototype.isReady = function () { return this.state.gte(k) }, Gt = !1, Vt = 0,
                Object.defineProperty(Z.Puzzle.prototype, "rotatable", {
                    get: function () { return Gt }, set: function (e) {
                        var t = Date.now(); if (
                            Gt !== e && !(t - Vt <= 1500)) {
                                L.rotateBtn.toggled(e); var n = this.pieces.head; for (Gt = e, Vt = t, ri(); n;) {
                                    var i = n.item, o = null
                                    ; this.rotatable ? i.hasMoved || (o = this.initialAngles[i.id - 1]) : !i.angle || i.group && i.id !== i.group.id || (o = 0), null !== o && (
                                        this.state.gte(P) ? i.rotateTo(o, !0) : i.angle = o), n = n.next
                                } this.state.gte(P) && setTimeout(function () {
                                    var e = Z.Puzzle.curr; e && (
                                        e.auditPieces(), e.state.gte(k) && e.updateRecord())
                                }, 1500)
                        }
                    }
                }), Z.Puzzle.prototype.percentComplete = function () {
                    var e = Z.Puzzle.curr, t = e && e.pieces; if (!e || !t) return 0; if (e.isComplete) return 100; for (var e = t.length - 1, n = 0, i = t.head; i;) {
                        var o = i.item, r = o.group; r && o.id === r.id && (n += r.length - 1), i = i.next
                    } e = n ? Math.max(1, Math.round(100 * n / e)) : 0; return Math.min(99
                        , e)
                }, Z.Puzzle.prototype.onComplete = function () {
                    var e, t = Gi.parms(); K.log("puzzle completed"), Z.clock.stop(), W.timer.stop()
                        , this.isComplete = !0, this.updateRecord(!0), e = (t = Z.Puzzle.urlParms).puzzleId || (t.url ? "Custom URL" + (
                            g ? " (embedded)" : " (linked)") : t.name ? "Local file" : "[unknown]"), W.joinedToGameVar.val && !W.isMaster() || (Gi.logEvent(
                                "Completed", e, Z.clock.getElapsedMins()), t.puzzleId && ((e = new XMLHttpRequest).open("POST",
                                    "https://www.jigsawexplorer.com/api/completions"), e.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
                                    e.send(JSON.stringify({ puzzleId: t.puzzleId, action: "incr" })))); var n = (n = m.localStore.getItem(ge) || m.localStore.getItem(pe
                                    )) ? parseInt(n) : 0; try { m.localStore.setItem(ge, (n + 1).toString(10)) } catch (e) {
                                        K.warn(
                                            "failed to update completion count. err=" + e.message)
                                    } setTimeout(Z.applause.play, 500)
                },
                Z.Puzzle.prototype.handleEvent = function (e) {
                    var t, n, i = Z.Puzzle.curr; if (i.state.eq(P) && !L.starterDlg.visible() && ((
                        n = o.getPnl("jigex-promo-1")) && n.visible() || (i.state = k)), i && i.state.gte(k) && !L.busy()) switch (e.type) {
                            case "mousemove":
                            case "touchmove": case "pointermove": i.capState.eq(R) ? (t = i.pieces.getPieceAt(e.controller)) && t.handleEvent && t.handleEvent(e
                            ) : i.capState.eq(D) && ((t = i.pieces.getPieceAt(e.controller)) || Z.Piece.release(e.controller)); break; case "mouseup":
                            case "pointerup": case "touchend": i.capState.gt(N) && (i.capState = N); break; case "mousedown": case "touchstart":
                            case "pointerdown": case "mousewheel": case "wheel": (t = i.pieces.getPieceAt(e.controller)) && t.handleEvent ? t.handleEvent(e
                            ) : !e.type.includes("wheel") && i.capState.eq(N) ? Z.Piece.capturedList.length ? Z.Piece.release(e.controller
                            ) : Z.Puzzle.curr.toggleCaptureMode() : Z.boxTop.containsPoint(e.controller.x, e.controller.y) && Z.boxTop.handleEvent(e); break
                                ; case "keydown": (t = i.pieces.getPieceAt(e.controller)) && t.handleEvent && (37 === e.which || 39 === e.which) && t.handleEvent(e)
                        }
                },
                Z.Puzzle.prototype.getScatterSequence = (Ft = [], function () {
                    var e = Z.Puzzle.curr, t = e.pieces.specList, n = 1; if (
                        e.multiplayerGameId && W.gameInfo) Ft = W.gameInfo.lay.slice(), n = 2; else if (Ft.length !== t.length || e.pieces.length !== t.length) {
                            var i = t.slice(), o = null, r = 0; for (Ft.length = 0, n = 3, i.sort(function (e, t) { return e.sortOrder - t.sortOrder }); i.length;) {
                                var s = i.pop(); o && -1 !== s.piece.neighbors.indexOf(o.piece) && 5 !== r ? (i.unshift(s), r++) : (Ft.push(s.piece.id), o = s, r = 0)
                            }
                        }
                    return K.log("getScatterSequence: trk=%s, pclen=%s, seqlen=%s, speclen=%s", n, e.pieces.length, Ft.length, t.length), Ft
                }),
                Z.Puzzle.prototype.scatter = function (e, t, n, i) {
                    var o = this, r = null, s = this.pieces.specList; if (
                        !this.record || e || o.multiplayerGameId) {
                            if (0, s) {
                                var a, l, c = 2 * s[0].image.bounds.margin, u = 0, d = 0; s.forEach(function (e) {
                                    u += e.width - c, d += e.height - c
                                }), u *= 1.05 / s.length, d *= 1.05 / s.length, a = u / 4, l = d / 4, I = u / 8, L = d / 8; var h, p, g, m = ve ? Math.max(0, ve - u / 2
                                ) : 0, f = (H.width - m) / u, v = H.height / d, y = .5 <= f - Math.floor(f) ? 1 : 0, b = .5 <= v - Math.floor(v) ? 1 : 0, w = u * (f / (Math.floor(f) + y)), x = d * (v / (
                                    Math.floor(v) + b)), P = m + u / 2, k = d / 2, _ = H.width, E = x, C = H.height, S = 4, T = 999, z = 999, e = this.getScatterSequence(); 35 <= s.length && (
                                        this.showEdgesOnly() || this.pieces.isEdgeComplete) && (f = (H.width - a) / u, v = (H.height - l) / d, y = .5 <= f - Math.floor(f) ? 1 : 0,
                                            b = .5 <= v - Math.floor(v) ? 1 : 0, w = u * (f / (Math.floor(f) + y)), x = d * (v / (Math.floor(v) + b)), P += ve ? 0 : I, k += L, m = m || I, _ = H.width - I, E = x + L,
                                            C = H.height - L); var I = H.width - this.subject.width, L = H.height - this.subject.height, A = [], O = []; I < L ? z = Math.floor(I / w
                                            ) : T = Math.floor(L / x), e.forEach(function (e) {
                                                e = o.pieces.specList[e - 1]; if (!e) return K.warn.once(
                                                    "piece count mismatch: pl=%s, sl=%s", o.pieces.length, o.pieces.specList.length), void U.sendReport("Piece count mismatch")
                                                    ; e = e.piece; e.group || o.showEdgesOnly() && !e.isEdge || !e.state.eq(q) || (O.push(e), e.hasMoved || A.push(e)), e.homePos = null
                                            }),
                                                t || O.length <= 10 && O.length !== A.length && o.pieces.isEdgeComplete && !i ? (h = O).forEach(function (e) { e.hasMoved = !1 }) : h = A; for (
                                    var i = h.length, j = 0; 0 < h.length;) {
                                        var M, B, N, R = 4 === S && 0 < T || 3 === S && 0 < T || 0 === S && 0 < z || 1 === S && 0 < z; switch (R && (
                                            B = M = .5 <= Math.random() ? 1 : -1, M = M * Math.random() * u / 8, B = B * Math.random() * d / 8, N = h.pop(), j++, n ? N.move(P + M, k + B, {
                                                animate: !0,
                                                hasMoved: !1, throttle: !0
                                            }) : N.position.assign(P + M, k + B), N.homePos = { x: P + M, y: k + B }, this.rotatable && (
                                                N.hasMoved || !W.joinedToGameVar.val || !W.gameInfo.ang || void 0 !== (B = W.gameInfo.ang[N.id - 1]) && (N.angle = B)), 0), S) {
                                                    case 4: _ < (
                                                        p = P + w) ? (S = 1, T--, 0 < z && (_ -= w), R && (k += x)) : P = p; break; case 1: C < (g = k + x) ? (S = 3, z--, 0 < T && (C -= x), R && (P -= w)) : k = g; break; case 3: (
                                                            p = P - w) < m ? (T--, (S = 0) < z && (m += w), R && (k -= x)) : P = p; break; case 0: (g = k - x) < E ? (S = 4, z--, 0 < T && (E += x), R && (P += w)) : k = g
                                            }
                                } j !== i && K.error(
                                    "Laid wrong number of pieces. to-lay=" + i + ", laid=" + j)
                            }
                    } else {
                        for (var D, G = this.record.pcs, V = [], F = G.length - 1; 0 <= F; F--
                        )D = G[F], (N = this.pieces.getPiece(D.id)) || K.fault(new Error(
                            "null piece: i=" + F + ", len=" + G.length + ", id=" + D.id + ", pcs=" + this.pieces.length)), N.angle = D.a, N.hasMoved = D.m, (N.tuple = D
                            ).g ? r ? r.g === D.g ? (V.push(N), 0 === F && (si(V), N.raise())) : (si(V), V[0].raise(), V.length = 0, V.push(N), r = D) : (V.push(N), r = D) : (r && (
                                si(V), V[0].raise(), V.length = 0, r = null), N.position.assignNorm(D.x, D.y), N.raise()); this.auditPieces(), this.relayer()
                    }
                },
                Z.Puzzle.prototype.shader = null, Z.Puzzle.prototype.dispose = function () {
                    var e = A.clips[F]; this.capState = B,
                        this.pieces && this.pieces.length && (this.updateRecord(!0), this.pieces.dispose()), this.state = b, e.head && e.head.item.dispose(
                        ), Z.boxTop.dispose(), this.subject && (this.subject.dispose(), this.subject = null); e = A.Texture.getTexture(le); e && e.dispose(),
                            (e = A.Texture.getTexture(ce)) && e.dispose(), this.record && (this.record.dispose(), this.record = null),
                            this.capStateVar.dispose(), this.stateVar.dispose(), Z.Controller.purgeListeners(), Z.Piece.selectedPiece = null,
                            Z.Puzzle.curr = null
                }, Z.Piece = (Ht = !1, Wt = function (t, e, n, i) {
                    var o, r; Ht || (i.group && (Ht = !0, i.group.members.forEach(function (e
                    ) { e !== i && (e.stateVar.val = t, e.setUserStateSlot(0, t.eq(q, T) ? 0 : 1)) }), Ht = !1), e.eq(q) && t.neq(T, M
                    ) && Z.trollShield.pieceHandled(), t.eq(T, M) ? (o = t.eq(T) ? 3e4 : 3e3, r = new l(o, function (e) {
                        var t, n = this; n.isDisposed || (
                            t = n.stateVar.val.eq(M), n.isTweening() ? (e.meta.tweenDelays++, e.set(1e3)) : t ? a.runningDuration >= o ? (n.logState(
                                "remote control timeout, twdly=" + e.meta.tweenDelays + ", rdly=" + e.meta.runningDelays + ", x=" + e.meta.x + ", y=" + e.meta.y + ", start=" + m.convertTimestampToTime(
                                    e.startDate) + ", set=" + m.convertTimestampToTime(e.meta.timestamp) + ", chkd=" + m.convertTimestampToTime(e.checked
                                    ) + ", dur=" + e._duration + ", cnt=" + e.setCount), n.remoteData && n.remoteData.timer && n.remoteData.timer.log(), n.stateVar.val = q
                            ) : (e.meta.runningDelays++, e.set(), 10 < e.meta.runningDelays && U.sendReport("Unexpected remote timeout condition")) : (
                                n.logState("remote select timeout"), n.stateVar.val = q))
                    }, i), I.log(
                        i.name + ": set remote control timer: old=" + e + ", new=" + t + ", start=" + m.convertTimestampToTime(r.startDate
                        ) + ", count=" + r.setCount), r.meta = { tweenDelays: 0, runningDelays: 0, x: i.position.x, y: i.position.y, timestamp: Date.now() },
                        i.stateVar.addListener(function (e, t, n, i) {
                            return r.clear(), e.eq(q) && t.eq(M) && (
                                !i.opacity || i.remoteData && i.remoteData.dbgFlag) && (i.logState("unexpected state"), i.logHistory(!0)), "remove"
                        })) : (
                            i.remoteData && i.remoteData.timer && i.remoteData.timer.clear(), i.remoteData = null, i.remotePlayerName = null),
                        i.setUserStateSlot(0, t.eq(q, T) ? 0 : 1), Z.Piece.selectedPiece = t.eq(_, E, C) ? i : null, W.joinedToGameVar.val && !i.isInMainAssembly(
                        ) && !W.gameInfo.indie && e.eq(q) && t.eq(_, E, C) && W.sendEvent("select", i))
                }, function (e) {
                    var t = this, n = null; A.Clip.call(t, e),
                        t.id = e.id, (e.piece = t).spec = e, t.group = null, t.neighbors = new Array(4), t.caterNeighbors = new Array(4), t.recTuple = {},
                        t.isEdge = !1, t.remoteData = null, t.pivotPiece = null, t.stateVar = I.define(t, "state", new I(q, t.name + ".state", I.LOG_CHANGES)),
                        t.stateVar.addListener(Wt), I.define(t, "group", new I(null, t.name + ".group", I.LOG_CHANGES)), I.define(t, "hasMoved", new I(!1,
                            t.name + ".hasMoved", ai, I.LOG_CHANGES)), Object.defineProperty(t, "remotePlayerName", {
                                get: function () {
                                    return this.stateVar.val.eq(T, M) ? this.group && this.group.refPiece !== this ? this.group.refPiece.remotePlayerName : n : null
                                },
                                set: function (e) {
                                    e && !this.stateVar.val.eq(T, M) || (
                                        this.group && this.group.refPiece !== this ? this.group.refPiece.remotePlayerName = e : n = e)
                                }
                            })
                }), Ut = null, Object.defineProperty(
                    Z.Piece, "selectedPiece", {
                        get: function () { return Ut }, set: function (e) {
                            e && Ut && (
                                e === Ut || e.group && e.group === Ut.group || setTimeout(function (e) { e.isDisposed || e.drop() }, 0, Ut)), Ut = e, L.cursor(
                                    e ? L.NO_CURSOR : L.DEFAULT_CURSOR)
                        }
                }), Z.Piece.firstPieceMoved = !1, Z.Piece.capturedList = [], Z.Piece.prototype = Object.create(
                    A.Clip.prototype), Z.Piece.prototype.getUserStateSlot = function (e) { return this.userState >> e & 255 },
                Z.Piece.prototype.setUserStateSlot = function (e, t) { this.userState = this.userState & ~(255 << e) | t << e },
                Z.Piece.prototype.logState = function (e, t) {
                    t = (t ? I : K).log; this.isDisposed ? t((e ? e + ": " : "") + this.name + " is disposed") : t(
                        this.name + ': msg="' + (e || "n/a") + '", st=' + this.stateVar.val.name + ", gid=" + (this.group ? this.group.id : "n/a") + ", glen=" + (
                            this.group ? this.group.length : "n/a") + ", ed=" + this.isEdge + ", ged=" + (this.group ? this.group.isEdge : "n/a"
                        ) + ", mv=" + this.hasMoved + ", x=" + this.position.x + ", y=" + this.position.y + ", ang=" + this.angle + ", op=" + this.opacity + ", act=" + this.active + ", tw=" + this.isTweening(
                        ))
                }, Z.Piece.prototype.logHistory = function (t) {
                    var n = this; K.log(
                        "------------------- piece-" + n.id + " history: ----------------------"), K.log(I.getLogs(function (e) {
                            return t ? e.includes(
                                n.name) || !!n.group && e.includes(n.group.name) : e.includes(n.name)
                        }, { limit: 35 }))
                },
                Z.Piece.prototype.isInMainAssembly = function () {
                    var e = Z.Puzzle.curr; return this.group && (
                        this.group.edgeCount > e.pieces.numEdges / 2 || this.group.length > e.pieces.length / 2)
                }, Z.Piece.prototype.isCaptured = function () {
                    var t = this; switch (t.stateVar.val) {
                        case S: return !0; case T: case M: return Z.Piece.capturedList.some(function (e) {
                            return e === t || e.group && e.group === t.group
                        }); default: return !1
                    }
                }, Z.Piece.prototype.decapture = function () {
                    for (
                        var e = Z.Piece.capturedList, t = null, n = e.length - 1; 0 <= n; n--) {
                            var i = e[n]; if (this === i || this.group && this.group === i.group) {
                                t = n
                                ; break
                            }
                    } return null !== t && (e.splice(t, 1), e.length || L.cursor(L.OPEN_HAND_CURSOR), !0)
                }, Z.Piece.prototype.capture = function (
                ) { var e = Z.Puzzle.curr; this.isTweening() || (this.applyTask(li), Z.Piece.capturedList.push(this), e.capState = R) },
                Z.Piece.releaseAll = (qt = !1, function (e) { var t = Z.Piece.capturedList; for (qt = !!e; t.length;)t.pop().applyTask(ci) }),
                Z.Piece.release = function (e) {
                    var t = Z.Puzzle.curr, n = Z.Piece.capturedList; if (t && n.length) {
                        var i = e.x, o = e.y; if (t.capState.eq(
                            D) && Yt) { var r = Math.abs(i - Yt.position.x), s = Math.abs(o - Yt.position.y); if (r < 1.1 * Yt.width && s < 1.1 * Yt.height) return } var a,
                                l = n.pop(), c = null, e = W.joinedToGameVar.val && e.event && e.event.type.includes("move"); l.isDisposed || (l.move(i, o), l.raise(),
                                    a = !e && l.neighborWithinSnapRange(!0), W.joinedToGameVar.val && a && (c = l.group && a.group ? l.group.members.slice() : l.group ? [a] : [l
                                    ]), l.applyTask(ui, function () {
                                        W.joinedToGameVar.val && W.sendUpdate(l, { wasCaptured: !0 }), a && l.angle === a.angle && l.join(a),
                                        c && c.forEach(function (e) { W.sendGroupUpdate(e) })
                                    }), t.capState = D, t.numMoves++, Z.Puzzle.curr.updateRecord(),
                                    n.length || L.cursor(L.OPEN_HAND_CURSOR), Yt = l)
                    }
                }, Z.Piece.prototype.applyTask = function (e, t, n) {
                    var i = this,
                    o = n || i.group && i.group.members; if (o) {
                        var r = t ? (l = i, c = t, u = o.length, function () { 0 == --u && c(l) }) : null; if (!1 === e(i, r)) return !1
                            ; for (var s = 0; s < o.length; s++) { var a = o[s]; if (a !== i && !1 === e(a, r)) return !1 } return !0
                    } var l, c, u; return !1 !== e(i, function () {
                        t && t(i)
                    })
                }, Z.Piece.prototype.handleEvent = (Xt = "", Kt = Jt = null, Zt = Qt = !1, $t = function (e, t, n) {
                    (z.dbgEvents || c) && (
                        t.type.includes("move") ? Xt.includes("move") ? Jt = (Qt || (Qt = !0, I.log(e.name + ": additional movement...")), di(e, t, !0, !1)) : di(e
                            , t, !1, !1) : (Jt && (I.log(Jt), Jt = null, Qt = !1), n ? "rotate" === Xt ? Kt = (Zt || (Zt = !0, I.log(e.name + ": additional rotation...")), di(e, t
                                , !0, !0)) : di(e, t, !1, !0) : (Kt && (I.log(Kt), Kt = null, Zt = !1), di(e, t, !1, !1))), Xt = n ? "rotate" : t.type)
                }, function (e) {
                    var t, n, i, o,
                    r = this, s = Z.Puzzle.curr; if (!r.isDisposed) {
                        if (
                            "mousewheel" === e.type || "wheel" === e.type || "piecerotate" === e.type || "keydown" === e.type && (37 === e.which || 39 === e.which)
                        ) return $t(r, e, !0), r.rotate(e), e.preventDefHandler = !0, void ("piecerotate" !== e.type && (s.numMoves++, s.updateRecord()))
                                ; switch ($t(r, e, !1), r.state) {
                                    case q: switch (e.type) {
                                        case "mousedown": case "touchstart": case "pointerdown": case "touchend":
                                        case "pointerup": s.capState.gte(N) ? r.capture() : (hi(r), r.stateVar.val = _, e.controller.startTime = Date.now(),
                                            e.controller.startX = e.controller.x, e.controller.startY = e.controller.y, r.move(r.position.x - 1, r.position.y - 1),
                                            r.moveOffsetX = r.position.x - e.controller.x, r.moveOffsetY = r.position.y - e.controller.y, this.raise(),
                                            e.controller.addListener("mousemove", this), e.controller.addListener("mouseup", this), e.controller.addListener("touchmove"
                                                , this), e.controller.addListener("touchend", this), e.controller.addListener("pointermove", this), e.controller.addListener(
                                                    "pointerup", this), e.controller.capture(this), hi(r, !0), "touchend" !== e.type && "pointerup" !== e.type || (r.stateVar.val = C,
                                                        I.log(r.name + ": touched 1"))); break; case "mousemove": case "touchmove": case "pointermove": s.capState.eq(R) && r.capture()
                                    }
                                        break; case _: switch (e.type) {
                                            case "mousemove": case "touchmove": case "pointermove": 250 < Date.now() - e.controller.startTime && (
                                                Math.abs(e.controller.x - e.controller.startX) > de || Math.abs(e.controller.y - e.controller.startY) > de) && (r.stateVar.val = E),
                                                t = r.moveOffsetX + e.controller.x, n = r.moveOffsetY + e.controller.y, r.move(t, n), u.check(r); break; case "mouseup":
                                                e.controller.removeListener("mouseup", this); break; case "touchend": case "pointerup": r.stateVar.val = C, I.log(
                                                    r.name + ": touched 2")
                                        }break; case E: switch (e.type) {
                                            case "mousedown": case "mouseup": case "touchend": case "pointerup":
                                                e.controller.removeListener("touchend", this), r.drop(!1), s.numMoves++, e.controller.removeListener("mousemove", this),
                                                    e.controller.removeListener("mouseup", this), e.controller.removeListener("touchmove", this), e.controller.removeListener(
                                                        "touchend", this), e.controller.removeListener("pointermove", this), e.controller.removeListener("pointerup", this),
                                                    e.controller.release(this), s.updateRecord(); break; case "mousemove": case "touchmove": case "pointermove":
                                                t = r.moveOffsetX + e.controller.x, n = r.moveOffsetY + e.controller.y, r.move(t, n), u.check(r)
                                        }break; case C: switch (e.type) {
                                            case "mousemove": case "touchmove": case "pointermove": if (r.isRotating() && !s.pieces.getPieceAt(e.controller)) break
                                                ; !e.fromMouseDevice && 250 < Date.now() - e.controller.startTime && (Math.abs(e.controller.x - e.controller.startX
                                                ) > 2 * de || Math.abs(e.controller.y - e.controller.startY) > 2 * de) && (r.stateVar.val = E), t = r.moveOffsetX + e.controller.x,
                                                    n = r.moveOffsetY + e.controller.y, r.move(t, n), u.check(r); break; case "touchstart": case "pointerdown": if (
                                                        e.controller.touchX = e.controller.x, e.controller.touchY = e.controller.y, (o = s.pieces.getPieceAt(e.controller)) === r
                                                    ) r.moveOffsetX = r.position.x - e.controller.x, r.moveOffsetY = r.position.y - e.controller.y; else {
                                                        if (o) r.drop(!1); else {
                                                            if (
                                                                r.isRotating()) break; r.move(e.controller.x, e.controller.y, {
                                                                    animate: !0, aniCallback: function () {
                                                                        r.drop(!e.fromMouseDevice),
                                                                        s.numMoves++, s.updateRecord()
                                                                    }
                                                                })
                                                        } e.controller.removeListener("mousemove", this), e.controller.removeListener("mouseup",
                                                            this), e.controller.removeListener("touchmove", this), e.controller.removeListener("touchend", this),
                                                            e.controller.removeListener("pointermove", this), e.controller.removeListener("pointerup", this), e.controller.release(this)
                                                            , e.preventDefHandler = !0, o && o.state.eq(q) && (e.controller.touchX = e.controller.x, e.controller.touchY = e.controller.y,
                                                                o.moveOffsetX = o.position.x - e.controller.x, o.moveOffsetY = o.position.y - e.controller.y, o.handleEvent(e))
                                                    } break
                                                ; case "touchend": case "pointerup": o = s.pieces.getPieceAt(e.controller), i = !e.fromMouseDevice && Math.abs(
                                                    e.controller.x - e.controller.touchX) <= 2 * de && Math.abs(e.controller.y - e.controller.touchY) <= 2 * de, this === o && (
                                                        i && s.rotatable ? ((z.dbgEvents || c) && I.log(r.name + " tap rotate: from_angle=" + this.angle), this.rotate(e), s.numMoves++) : (
                                                            r.drop(!1), s.numMoves++, e.controller.removeListener("mousemove", this), e.controller.removeListener("mouseup", this),
                                                            e.controller.removeListener("touchmove", this), e.controller.removeListener("touchend", this), e.controller.removeListener(
                                                                "pointermove", this), e.controller.removeListener("pointerup", this), e.controller.release(this), e.preventDefHandler = !0),
                                                        s.updateRecord())
                                        }
                                }
                    }
                }), Z.Piece.gap = {
                    measure: function (e, t, n, i) {
                        if (n && e.angle !== t.angle) return this.x = NaN, void (this.y = NaN)
                            ; var o = n ? e.position.x : e.spec.image.bounds.centerX, r = n ? e.position.y : e.spec.image.bounds.centerY,
                                s = n ? t.position.x : t.spec.image.bounds.centerX, a = n ? t.position.y : t.spec.image.bounds.centerY; switch (
                        i = "number" == typeof i ? i : e.angle) {
                            case 0: this.x = s - o, this.y = a - r; break; case 90: this.x = r - a, this.y = s - o; break; case 180:
                                this.x = o - s, this.y = r - a; break; case 270: this.x = a - r, this.y = o - s; break; default: throw new Error(
                                    "Bad angle. id1=" + e.id + ", id2=" + t.id + ", angle=" + i + ", actual=" + n)
                        }
                    }
                }, Z.Piece.prototype.moveToFit = function (t, e) {
                    if (
                        this.angle !== t.angle) throw this.logState("Bad piece fit 1", !0), this.logHistory(!0), t.logState("Bad piece fit 2", !0),
                        t.logHistory(!0), new Error("Bad piece fit: angle1=" + this.angle + ", angle2=" + t.angle); var n = e || {}, i = n.aniCallback
                        ; n.joining = !0, n.offset = n.offset || 0, i && (n.animate = !0, n.aniInterval = n.aniInterval || 500, n.aniCallback = function (e) {
                            e.matchLevelOf(t), i && i(e)
                        }), Z.Piece.gap.measure(this, t); var o = t.position.x - Z.Piece.gap.x + n.offset,
                            e = t.position.y - Z.Piece.gap.y + n.offset; this.move(o, e, n), i || this.matchLevelOf(t)
                },
                Z.Piece.prototype.neighborWithinSnapRange = (nn = Z.Piece.gap, on = W.joinedToGameVar.val && W.gameInfo.indie ? 4 : z.tapSizer || 2,
                    function (e) { return Z.trollShield.alarm() ? null : (tn = e, en = null, this.isDisposed || this.applyTask(pi), en) }),
                Z.Piece.prototype.isJoinedTo = function (e) { return this.group && this.group === e.group }, Z.Piece.checkConn = function (e, t, n) {
                    var i; return !(!t || !e.isJoinedTo(t) || 0 != ((i = e.getUserStateSlot(8)) & n)) && (e.setUserStateSlot(8, i | n), !0)
                },
                Z.Piece.prototype.join = (rn = null, sn = !1, Z.delayedActions.add(function () { rn = rn || new Vi.Sonic("snap") }), function (e, t) {
                    var n,
                    i, o = Z.Puzzle.curr, r = null, s = Z.Piece.checkConn, a = (e.group || e).isEdge && (this.group || this).isEdge && (e.group || this.group)
                    ; this.group ? (this.group.join(this, e), r = e.group ? null : e) : e.group ? (e.group.join(this, e), r = this.group ? null : this
                    ) : new Z.Group(this, e), this.hasMoved = !0, e.hasMoved = !0, r ? (n = r.neighbors, i = r.caterNeighbors, s(r, n[0], 1) && s(n[0], r, 4), s(r,
                        n[1], 2) && s(n[1], r, 8), s(r, n[2], 4) && s(n[2], r, 1), s(r, n[3], 8) && s(n[3], r, 2), s(r, i[0], 16) && s(i[0], r, 64), s(r, i[1], 32) && s(i[1], r
                            , 128), s(r, i[2], 64) && s(i[2], r, 16), s(r, i[3], 128) && s(i[3], r, 32)) : this.group.members.forEach(function (e) {
                                var t = e.neighbors,
                                n = e.caterNeighbors; s(e, t[0], 1), s(e, t[1], 2), s(e, t[2], 4), s(e, t[3], 8), s(e, n[0], 16), s(e, n[1], 32), s(e, n[2], 64), s(e, n[3], 128)
                            }
                            ), a && o.pieces.isEdgeComplete && o.showEdgesOnly() && (a = this.remoteData && this.remoteData.immediate ? J : X,
                                W.joinedToGameVar.val && W.isMaster() && W.changeSetting("edo", !1), o.showEdgesOnly(!1, a, 500)),
                        this.group.length !== o.pieces.length || W.completeWhenLoaded || o.onComplete(), t || (t = this, e = e, (Gi.audioMuted(
                        ) || t.stateVar.val.eq(M) || e.stateVar.val.eq(M)) && u.show(t, e), Gi.audioMuted() || (rn && !sn ? rn.play() : sn || (K.warn(
                            "snap sound not loaded"), sn = !0)))
                }), Z.Piece.prototype.drop = function (e) {
                    var t = Z.Puzzle.curr, n = W.joinedToGameVar.val,
                    i = this.neighborWithinSnapRange(e), e = null; i ? (n && (e = this.group && i.group ? this.group.members.slice() : this.group ? [i] : [this]),
                        e ? (W.sendUpdate(this), this.join(i), e.forEach(function (e) { W.sendGroupUpdate(e) })) : this.join(i)) : (
                        this.position.normX < 1 && this.position.normY < 1 && this.move(this.position.x + 1, this.position.y + 1), this.stateVar.val = q,
                        !n || W.gameInfo.indie && !W.isMaster() || 1 !== W.getNumPlayers() && this.isInMainAssembly() || W.sendUpdate(this)), (z.dbgEvents || c
                        ) && I.log(this.name + " drop: x=" + this.position.x + ", y=" + this.position.y + (
                            this.group ? ", gid=" + this.group.id + ", glen=" + this.group.members.length : "")), this.group && (
                                this.group.length > t.pieces.length / 2 ? (this.group.sendToBottom(),
                                    !this.group.isEdge && t.pieces.isEdgeComplete && t.pieces.getPiece(1).group.sendToBottom()
                                ) : this.group.isEdge && t.pieces.isEdgeComplete && this.group.sendToBottom())
                }, Z.Piece.prototype.move = function (e, t, n) {
                    var i = Z.Puzzle.curr, o = n && n.joining, r = n && n.animate, s = n && n.aniInterval, a = n && n.aniCallback, l = n && n.throttle; !o && i.state.gte(
                        k) && (e < ve ? e = ve : e > H.width && (e = H.width), t < 0 ? t = 0 : t > H.height && (t = H.height)); var c = e - this.position.x, u = t - this.position.y, d = !(
                            n && void 0 !== n.hasMoved && !this.group) || n.hasMoved; this.applyTask(function (e, t) {
                                r ? e.position.tween(e.position.x + c,
                                    e.position.y + u, s || 100, t, A.EASE_OUT, l) : e.position.moveBy(c, u), e.hasMoved = d
                            }, a), !Z.Piece.firstPieceMoved && i.state.gte(j
                            ) && (Z.Piece.firstPieceMoved = !0, K.log("first piece moved")), i.state.eq(k) && i.start()
                },
                Z.Piece.prototype.rotateTo = function (e, t, n) {
                    var i = 0; if ("number" != typeof e) throw new Error(
                        "toAngle must be a number, not " + typeof e); switch (e - this.angle) {
                            case 90: case -270: i = 2; break; case 180: case -180: i = 3; break
                                ; case 270: case -90: i = 1
                        }i ? (t = { type: "piecerotate", clockwise: 2 <= i, slow: t }, 3 === i ? (this.rotate(t), this.rotate(t, !0, n)
                        ) : this.rotate(t, !1, n)) : n && n()
                }, Z.Piece.prototype.rotate = function (e, n, t) {
                    var i = Z.Puzzle.curr, o = "piecerotate" === e.type; if (
                        i.rotatable || o) {
                            var r, s = 200; if ("piecerotate" === e.type) r = e.clockwise, s = e.slow ? 500 : 200; else if ("keydown" === e.type
                            ) r = 39 === e.which; else if (void 0 !== e.deltaY && 0 !== e.deltaY) r = 0 < e.deltaY; else {
                                if ("touchend" !== e.type && "pointerup" !== e.type
                                ) return void K.warn("unexpected rotate message type: " + e.type); r = !0
                            } var a = A.perfNow(), l = null; if (this.group) {
                                if (
                                    i.multiplayerGameId && 0 === this.angle && this.isInMainAssembly()) return void (t && (this.remoteData && (this.remoteData.a = 0), t())
                                    ); (l = this.isRotating() && this.group ? this.group.pivotPiece : this) || K.warn("detected rotating group with no pivot piece")
                            }
                        var c = l || this, o = function (e, t) {
                            return function (e, t, n, i, o, r, s) {
                                n = e.angle + (n ? 90 : -90), s = new A.Tweener2("angle", n, i, s)
                                ; return s.onStep = gi, s.startTime = o, s.origEvent = null, s.nextEvent = null, s.radius = null, s.angleDelta = null, s.throttle = !r,
                                    e.group && (e.group.pivotPiece = t), t && ((r = Z.Piece.gap).measure(e, t, !1, 0), s.angleDelta = Math.atan2(-r.y, r.x
                                    ) / m.RADIANS_PER_DEGREE, s.radius = Math.sqrt(r.x * r.x + r.y * r.y)), e.angle = s
                            }(e, l, r, s, a, n, t)
                        }; if (c.applyTask(o, function () {
                            c.position.assign(c.position), c.group && c.moveToFit(c), c.stateVar.val.neq(T, M) && u.check(c), t && t()
                        })) return i.state.eq(k
                        ) && i.start(), W.joinedToGameVar.val && "piecerotate" !== e.type && ((e = l || this).stateVar.val.eq(q) ? W.sendUpdate(e, { isPivot: !0 }
                        ) : W.sendEvent("rotate", e)), !0
                    } return !1
                }, Z.Piece.prototype.raise = function () { this.applyTask(mi) },
                Z.Piece.prototype.matchLevelOf = function (t) { this.applyTask(function (e) { e.sendToLevelOf(t) }) }, Z.Group = function (e, t) {
                    var n = t || e[0]; if (this.refPiece = n, this.id = n.id, this.name = "group-" + this.id + "-", this.members = [], Array.isArray(arguments[0])
                    ) {
                        var i, o, r = arguments[0], s = Z.Piece.checkConn; for (this.members.push(n), this.edgeCount = n.isEdge ? 1 : 0, this.isEdge = n.isEdge,
                            n.group = this, i = 1, o = r.length; i < o; i++) {
                                e = r[i], this.members.push(e), Z.Piece.gap.measure(e, n), e.move(
                                    n.position.x - Z.Piece.gap.x, n.position.y - Z.Piece.gap.y, { joining: !0 }), e.group = this, e.hasMoved = !0,
                                this.isEdge = this.isEdge || e.isEdge, e.isEdge && this.edgeCount++; var a = e.neighbors, l = e.caterNeighbors; s(e, a[0], 1) && s(a[0], e,
                                    4), s(e, a[1], 2) && s(a[1], e, 8), s(e, a[2], 4) && s(a[2], e, 1), s(e, a[3], 8) && s(a[3], e, 2), s(e, l[0], 16) && s(l[0], e, 64), s(e, l[1], 32
                                    ) && s(l[1], e, 128), s(e, l[2], 64) && s(l[2], e, 16), s(e, l[3], 128) && s(l[3], e, 32)
                        }
                    } else e.stateVar.val = t.stateVar.val,
                        this.members.push(t, e), Z.Piece.gap.measure(e, t), e.move(t.position.x - Z.Piece.gap.x, t.position.y - Z.Piece.gap.y, {
                            joining: !0
                        }), t.moveToTop(), e.group = this, (t.group = this).edgeCount = (e.isEdge ? 1 : 0) + (t.isEdge ? 1 : 0), this.isEdge = !!this.edgeCount
                        ; !Z.Puzzle.firstPieceJoined && Z.Puzzle.curr.state.gte(j) && (Z.Puzzle.firstPieceJoined = !0, K.log("first piece joined")),
                            Z.Puzzle.partiallyComplete = !0
                }, Z.Group.prototype = {
                    members: null, isEdge: !1, get length() { return this.members.length },
                    join: function (e, t) {
                        e.moveToFit(t), e.stateVar.val = t.stateVar.val, t.group && e.group ? (t.group.edgeCount += e.group.edgeCount,
                            e.group.members.forEach(function (e) { t.group.members.push(e), e.group = t.group, t.group.isEdge = t.group.isEdge || e.isEdge })
                        ) : t.group ? (t.group.members.push(e), e.group = t.group, t.group.isEdge = t.group.isEdge || e.isEdge, e.isEdge && t.group.edgeCount++
                        ) : (e.remotePlayerName = t.remotePlayerName, e.group.members.push(t), t.group = e.group, e.group.isEdge = e.group.isEdge || t.isEdge
                            , t.isEdge && e.group.edgeCount++)
                    }, sendToBottom: function () {
                        for (var e = this.members.length - 1; 0 <= e; e--) {
                            var t = this.members[e]
                            ; try { t.moveToBottom() } catch (e) {
                                throw K.log(
                                    "trap data: gid=" + this.id + ", glen=" + this.length + ", id=" + t.id + ", disposed=" + t.isDisposed + ", node=" + t.node + ", grp=" + (
                                        t.group ? t.group.id : -1) + ", same=" + (this === t.group)), Z.Puzzle.curr.pieces.audit(), e
                            }
                        }
                    }
                }, Z.Puzzle.firstPieceJoined = !1,
                Z.Puzzle.partiallyComplete = !1, Z.traditionalKnife = (pn = function () {
                    for (var e = [], t = [], n = 11; 0 <= n; n--)e[n] = {}; for (
                        e[0].fromBase = .0113636363636364, e[0].alongBase = .0946969696969697, e[1].fromBase = -.0303030303030303,
                        e[1].alongBase = .227272727272727, e[2].fromBase = -.117424242424242, e[2].alongBase = .537878787878788,
                        e[3].fromBase = .132575757575758, e[3].alongBase = .382575757575758, e[4].fromBase = .34469696969697,
                        e[4].alongBase = .284090909090909, e[5].fromBase = .268939393939394, e[5].alongBase = .541666666666667,
                        e[6].fromBase = .208333333333333, e[6].alongBase = .681818181818182, e[7].fromBase = .0568181818181818,
                        e[7].alongBase = .575757575757576, e[8].fromBase = -.0795454545454545, e[8].alongBase = .515151515151515,
                        e[9].fromBase = -.0189393939393939, e[9].alongBase = .761363636363636, e[10].fromBase = .0113636363636364,
                        e[10].alongBase = .90530303030303, e[11].fromBase = 0, e[11].alongBase = 1, n = 11; 0 <= n; n--)t[n] = {}
                            ; return t[0].fromBase = .0113636363636364, t[0].alongBase = -.0946969696969697, t[1].fromBase = -.0189393939393939,
                                t[1].alongBase = -.238636363636364, t[2].fromBase = -.0795454545454545, t[2].alongBase = -.484848484848485,
                                t[3].fromBase = .0568181818181818, t[3].alongBase = -.424242424242424, t[4].fromBase = .208333333333333,
                                t[4].alongBase = -.318181818181818, t[5].fromBase = .268939393939394, t[5].alongBase = -.458333333333333,
                                t[6].fromBase = .34469696969697, t[6].alongBase = -.715909090909091, t[7].fromBase = .132575757575758,
                                t[7].alongBase = -.617424242424242, t[8].fromBase = -.117424242424242, t[8].alongBase = -.462121212121212,
                                t[9].fromBase = -.0303030303030303, t[9].alongBase = -.772727272727273, t[10].fromBase = .0113636363636364,
                                t[10].alongBase = -.90530303030303, t[11].fromBase = 0, t[11].alongBase = -1, {
                                    name: "sock", pts: e, ptsReversed: t, tabHeights: [[], [],
                                    [], []], holeHeights: [[], [], [], []]
                            }
                }(), gn = function () {
                    for (var e = [], t = [], n = 11; 0 <= n; n--)e[n] = {}; for (e[0].fromBase = 0,
                        e[0].alongBase = .0492424242424242, e[1].fromBase = -.0227272727272727, e[1].alongBase = .159090909090909,
                        e[2].fromBase = -.0681818181818182, e[2].alongBase = .545454545454545, e[3].fromBase = .125, e[3].alongBase = .412878787878788,
                        e[4].fromBase = .34469696969697, e[4].alongBase = .253787878787879, e[5].fromBase = .272727272727273,
                        e[5].alongBase = .473484848484849, e[6].fromBase = .238636363636364, e[6].alongBase = .553030303030303,
                        e[7].fromBase = .121212121212121, e[7].alongBase = .549242424242424, e[8].fromBase = -.109848484848485, e[8].alongBase = .5,
                        e[9].fromBase = -.0189393939393939, e[9].alongBase = .761363636363636, e[10].fromBase = .0113636363636364,
                        e[10].alongBase = .90530303030303, e[11].fromBase = 0, e[11].alongBase = 1, n = 11; 0 <= n; n--)t[n] = {}
                            ; return t[0].fromBase = .0113636363636364, t[0].alongBase = -.0946969696969697, t[1].fromBase = -.0189393939393939,
                                t[1].alongBase = -.238636363636364, t[2].fromBase = -.109848484848485, t[2].alongBase = -.5, t[3].fromBase = .121212121212121,
                                t[3].alongBase = -.450757575757576, t[4].fromBase = .238636363636364, t[4].alongBase = -.446969696969697,
                                t[5].fromBase = .272727272727273, t[5].alongBase = -.526515151515151, t[6].fromBase = .34469696969697,
                                t[6].alongBase = -.746212121212121, t[7].fromBase = .125, t[7].alongBase = -.587121212121212, t[8].fromBase = -.0681818181818182,
                                t[8].alongBase = -.454545454545455, t[9].fromBase = -.0227272727272727, t[9].alongBase = -.840909090909091, t[10].fromBase = 0,
                                t[10].alongBase = -.950757575757576, t[11].fromBase = 0, t[11].alongBase = -1, {
                                    name: "finger", pts: e, ptsReversed: t, tabHeights: [[],
                                    [], [], []], holeHeights: [[], [], [], []]
                            }
                }(), mn = function () {
                    for (var e = [], t = [], n = 11; 0 <= n; n--)e[n] = {}; for (
                        e[0].fromBase = -.00378787878787879, e[0].alongBase = .0643939393939394, e[1].fromBase = -.0265151515151515,
                        e[1].alongBase = .162878787878788, e[2].fromBase = -.0984848484848485, e[2].alongBase = .534090909090909,
                        e[3].fromBase = .0568181818181818, e[3].alongBase = .431818181818182, e[4].fromBase = .287878787878788,
                        e[4].alongBase = .265151515151515, e[5].fromBase = .295454545454545, e[5].alongBase = .5, e[6].fromBase = .287878787878788,
                        e[6].alongBase = .715909090909091, e[7].fromBase = .0568181818181818, e[7].alongBase = .575757575757576,
                        e[8].fromBase = -.0795454545454545, e[8].alongBase = .515151515151515, e[9].fromBase = -.0189393939393939,
                        e[9].alongBase = .761363636363636, e[10].fromBase = .0113636363636364, e[10].alongBase = .90530303030303, e[11].fromBase = 0,
                        e[11].alongBase = 1, n = 11; 0 <= n; n--)t[n] = {}; return t[0].fromBase = .0113636363636364, t[0].alongBase = -.0946969696969697,
                            t[1].fromBase = -.0189393939393939, t[1].alongBase = -.238636363636364, t[2].fromBase = -.0795454545454545,
                            t[2].alongBase = -.484848484848485, t[3].fromBase = .0568181818181818, t[3].alongBase = -.424242424242424,
                            t[4].fromBase = .287878787878788, t[4].alongBase = -.284090909090909, t[5].fromBase = .295454545454545, t[5].alongBase = -.5,
                            t[6].fromBase = .287878787878788, t[6].alongBase = -.734848484848485, t[7].fromBase = .0568181818181818,
                            t[7].alongBase = -.568181818181818, t[8].fromBase = -.0984848484848485, t[8].alongBase = -.465909090909091,
                            t[9].fromBase = -.0265151515151515, t[9].alongBase = -.837121212121212, t[10].fromBase = -.00378787878787879,
                            t[10].alongBase = -.935606060606061, t[11].fromBase = 0, t[11].alongBase = -1, {
                                name: "ball", pts: e, ptsReversed: t, tabHeights: [[], []
                                    , [], []], holeHeights: [[], [], [], []]
                        }
                }(), fn = function () {
                    for (var e = [], t = [], n = 11; 0 <= n; n--)e[n] = {}; for (
                        e[0].fromBase = .00757575757575758, e[0].alongBase = .0946969696969697, e[1].fromBase = -.0492424242424242,
                        e[1].alongBase = .21969696969697, e[2].fromBase = -.117424242424242, e[2].alongBase = .397727272727101,
                        e[3].fromBase = .0189393939393114, e[3].alongBase = .378787878787097, e[4].fromBase = .234848484848119,
                        e[4].alongBase = .363636363636116, e[5].fromBase = .151515151515102, e[5].alongBase = .617424242424111,
                        e[6].fromBase = .109848484848083, e[6].alongBase = .708333333333032, e[7].fromBase = -.01515151515151,
                        e[7].alongBase = .617424242424097, e[8].fromBase = -.181818181818111, e[8].alongBase = .518939393939082,
                        e[9].fromBase = -.0303030303030032, e[9].alongBase = .837121212121097, e[10].fromBase = .0037878787878711,
                        e[10].alongBase = .909090909090105, e[11].fromBase = 0, e[11].alongBase = 1, n = 11; 0 <= n; n--)t[n] = {}
                            ; return t[0].fromBase = .00378787878787108, t[0].alongBase = -.0909090909090111, t[1].fromBase = -.0303030303030114,
                                t[1].alongBase = -.162878787878097, t[2].fromBase = -.181818181818067, t[2].alongBase = -.481060606060032,
                                t[3].fromBase = -.015151515151505, t[3].alongBase = -.382575757575049, t[4].fromBase = .109848484848048,
                                t[4].alongBase = -.29166666666605, t[5].fromBase = .151515151515032, t[5].alongBase = -.382575757575169,
                                t[6].fromBase = .234848484848032, t[6].alongBase = -.636363636363116, t[7].fromBase = .0189393939393104,
                                t[7].alongBase = -.621212121212103, t[8].fromBase = -.117424242424105, t[8].alongBase = -.602272727272114,
                                t[9].fromBase = -.0492424242424121, t[9].alongBase = -.78030303030112, t[10].fromBase = .00757575757575111,
                                t[10].alongBase = -.90530303030067, t[11].fromBase = 0, t[11].alongBase = -1, {
                                    name: "stub", pts: e, ptsReversed: t, tabHeights: [[], [],
                                    [], []], holeHeights: [[], [], [], []]
                            }
                }(), {
                    buildMask: (un = document.createElement("canvas"), dn = Z.createContext(un),
                        Z.Puzzle.curr, cn = {
                            reset: function () {
                                this.startX = 0, this.startY = 0, this.endX = 0, this.endY = 0, this.bend = !0, this.tab = !1,
                                this.side = 0
                            }
                        }, hn = function (e) {
                            var t = e[0].core.width, n = e[0].core.height, i = e[e.length - 1].core.width,
                            o = e[e.length - 1].core.height, e = Math.max(Math.max(t, n), Math.max(i, o)); un.width = e, un.height = e, dn.fillStyle = ue, dn.fillRect(0
                                , 0, un.width, un.height), ln = t, bi(), n !== t && (dn.fillStyle = ue, dn.fillRect(0, 0, un.width, un.height), ln = n, bi()), i !== t && i !== n && (
                                    dn.fillStyle = ue, dn.fillRect(0, 0, un.width, un.height), ln = i, bi()), o !== t && o !== n && o !== i && (dn.fillStyle = ue, dn.fillRect(0, 0,
                                        un.width, un.height), ln = o, bi())
                        }, function (e, t, n) {
                            var i = Z.Puzzle.curr, o = i.tabHoleRightIndex, r = i.tabHoleBottomIndex
                            ; an = i.shapeIndex, hn(e); var s, a, l = e[0].image.bounds.margin, b = 0, c = 0, u = 0, d = l, h = 0, p = 0, g = new Array(t), m = new Array(t), f = 0, v = 0
                                ; -1 === i.tabIndexRight ? i.tabIndexRight = o : o = i.tabIndexRight, -1 === i.tabIndexBottom ? i.tabIndexBottom = r : r = i.tabIndexBottom
                                ; for (var y = t - 1; 0 <= y; y--)g[y] = 0; for (N = 0; N < t; N++) {
                                    for (a = 0; a < n; a++) {
                                        var w, x = (s = e[b]).edges.top, P = s.edges.left,
                                        k = s.edges.right, _ = s.edges.bottom, E = s.core.width, C = s.core.height; x.side = 3, P.side = 0, _.side = 1, k.side = 2, x.border = 0 === N,
                                            P.border = 0 === a, _.border = N === t - 1, k.border = a === n - 1,
                                            16 < "Q29weXJpZ2h0IMKpIDIwMTIgQ2Fyb2xpbmEgUm9hZCBTb2Z0d2FyZSwgTC5MLkMu".length && (wi(k), wi(_)), x.border ? (k.tab = oe[o++],
                                                x.thickness = 0, o === oe.length && (o = 0)) : (w = e[b - n], k.tab = !w.edges.right.tab, x.tab = !w.edges.bottom.tab,
                                                    x.bend = !w.edges.bottom.bend, x.curves = w.edges.bottom.curves,
                                                    x.tab ? x.thickness = x.curves.tabHeights[3][E] : x.thickness = x.curves.holeHeights[3][E]), x.thickness > h && (h = x.thickness),
                                            k.border ? k.thickness = 0 : k.thickness = (k.tab ? k.curves.tabHeights : k.curves.holeHeights)[2][C], P.border ? (_.tab = oe[r++],
                                                P.thickness = 0, r === oe.length && (r = 0)) : (w = e[b - 1], _.tab = !w.edges.bottom.tab, P.tab = !w.edges.right.tab,
                                                    P.bend = !w.edges.right.bend, P.curves = w.edges.right.curves,
                                                    P.tab ? P.thickness = P.curves.tabHeights[0][C] : P.thickness = P.curves.holeHeights[0][C]), _.border ? _.thickness = 0 : _.thickness = (
                                                        _.tab ? _.curves.tabHeights : _.curves.holeHeights)[1][E], _.thickness > p && (p = _.thickness),
                                            s.width = P.thickness + E + k.thickness + 2 * l, s.height = x.thickness + C + _.thickness + 2 * l, f += s.width, v += s.height,
                                            s.core.x = P.thickness + l, s.core.y = x.thickness + l, s.touchRect = s.core, s.edges.top.thickness > g[N] && (g[N] = s.edges.top.thickness
                                            ), c += s.width, b++
                                    } u = Math.max(c, u), m[N] = Math.floor(h / 2) + s.core.height + p + 2 * l, d += m[N], p = h = c = 0
                                } i.avgPieceWidth = Math.round(
                                    f / e.length), i.avgPieceHeight = Math.round(v / e.length), .05 * i.avgPieceWidth * Q > i.snapDistance ? i.snapDistance = Math.round(
                                        .05 * i.avgPieceWidth * Q) : .5 * i.avgPieceWidth * Q < i.snapDistance && (i.snapDistance = Math.max(2, Math.round(.5 * i.avgPieceWidth * Q))
                                        ), un.width = u, un.height = d, dn.fillStyle = ue, dn.fillRect(0, 0, un.width, un.height); for (var S, T, z, I, L, A, O = b = 0, j = 0, M = 0, B = l,
                                            N = 0; N < t; N++) {
                                                for (1 === N && (B += Math.floor(g[N] / 2) + l), a = 0; a < n; a++)M += (s = e[b]).edges.left.thickness + l, T = M, z = B, A = L = I = void 0,
                                                    I = (S = s).core.width, L = S.core.height, A = S.edges, dn.beginPath(), dn.fillStyle = "red", dn.moveTo(T, z), (S = A.left).startX = T,
                                                    S.startY = z, S.endX = T, S.endY = z + L, fi(S), (S = A.bottom).startX = T, S.startY = z + L, S.endX = T + I, S.endY = z + L, fi(S), (S = A.right
                                                    ).startX = T + I, S.startY = z + L, S.endX = T + I, S.endY = z, fi(S), (S = A.top).startX = T + I, S.startY = z, S.endX = T, S.endY = z, fi(S), dn.fill(),
                                                    s.image.bounds.x = O - s.edges.left.thickness, s.image.bounds.y = j - s.edges.top.thickness, s.image.bounds.width = s.width,
                                                    s.image.bounds.height = s.height, s.image.bounds.centerX = s.image.bounds.x + s.width / 2,
                                                    s.image.bounds.centerY = s.image.bounds.y + s.height / 2, s.image.bounds.maskX = M - s.edges.left.thickness - l,
                                                    s.image.bounds.maskY = B - s.edges.top.thickness - l, s.refPos.x = s.image.bounds.x + s.width / 2,
                                                    s.refPos.y = s.image.bounds.y + s.height / 2, s.slope = {}, s.slope.x = M, s.slope.y = B, s.slope.x2 = M + s.core.width,
                                                    s.slope.y2 = B + s.core.height, s.slope.val = -s.core.height / s.core.width, M += s.core.width + s.edges.right.thickness + l,
                                                    O += s.core.width, b++; M = 0, B += m[N], O = 0, j += s.core.height
                            } var R, D = 0, G = 0, V = 0, F = dn.jigexGetImageData(0, 0, un.width, un.height)
                                ; if (F && (R = dn.jigexGetImageData(0, 0, un.width, un.height)), F && R) {
                                    var H, W, U, q = F.data, Y = R.data, X = 4 * F.width, J = 0; switch (
                                        F.name = le, R && (R.name = ce), s.shadowDepth) {
                                            case 2: H = 100, W = 50; break; case 3: H = 99, W = 33; break; case 4: H = 100, W = 25; break; case 5:
                                                H = 100, W = 20; break; default: H = 102, W = 17
                                        }e.forEach(function (e) {
                                            for (var t, n, i, o, r, s, a, l, c, u = e.image.bounds, d = e.width > e.height,
                                                h = X * u.maskY + 4 * u.maskX, p = d ? e.height : e.width, g = 0; g <= 270; g += 90) {
                                                    var m = !1, f = 1, v = !1; switch (g) {
                                                        case 0: i = h + 4 * (e.width - 1), n = (o = h
                                                        ) + (d ? 0 : (e.height - e.width) * X), r = -4, a = 4 + (s = X), l = q, c = 2; break; case 90: n = (o = (i = h) + (e.height - 1) * X) + (d ? 4 * (e.width - e.height) : 0),
                                                            a = (s = 4) - (r = X), l = Y, c = 0; break; case 180: i = h + (e.height - 1) * X, n = (o = h + (e.height - 1) * X + 4 * (e.width - 1)) - (d ? 0 : (e.height - e.width) * X),
                                                                a = (s = -X) - (r = 4), l = Y, c = 1; break; case 270: i = h + (e.height - 1) * X + 4 * (e.width - 1), n = (o = h + 4 * (e.width - 1)) - (d ? 4 * (e.width - e.height) : 0),
                                                                    r = -X, s = -4, a = X - 4, l = Y, c = 2
                                                    }for (t = b = i; 0 < f;)!function (e, t, n, i, o, r) {
                                                        for (var s, a, l, c, u = t.slope, d = b, h = 0, p = Math.floor(d / X),
                                                            g = d - p * X >> 2; h++ < e;) {
                                                                var m, f, v, y = q[d]; if (0 === n && (
                                                                    g > u.x2 && p < u.y ? q[d + 1] = 16 : g > u.x2 && p > u.y2 ? q[d + 1] = 32 : g < u.x && p > u.y2 ? q[d + 1] = 64 : g < u.x && p < u.y ? q[d + 1] = 128 : g <= u.x ? q[d + 1] = 8 : p < u.y ? q[d + 1] = 1 : (
                                                                        m = (p - u.y2) / (g - u.x), f = (p - u.y) / (g - u.x), m <= u.val ? q[d + 1] = f <= -u.val ? 1 : 8 : q[d + 1] = f <= -u.val ? 2 : 4), g++, p++), v = 0, y && 255 === y) D ? D++ : (
                                                                            D = 1, V = 0), G++; else if (y) G++, V = 0, D && (f = 0 === q[d + i], v = Math.round(H * (f ? 1 : .5) * (255 - y) / 255), J = v); else if (V ? V++ : (V = 1, D = G = 0),
                                                                                V <= t.shadowDepth) {
                                                                                    for (v = H - W * J / 255, a = 1; a <= t.shadowDepth; a++)0 === (s = q[d - a * i]) ? v -= W : s < 255 && (v -= Math.round(W * (255 - s) / 255))
                                                                                        ; v = Math.round(v), J = 0
                                                                            } if (0 < G) {
                                                                                if (l = 0, G <= t.bevelDepth + 1) {
                                                                                    for (U = (l = 36) / t.bevelDepth, a = 1; a <= t.bevelDepth; a++)255 === (
                                                                                        s = q[d - a * i]) ? l -= U : 0 < s && (l -= Math.round(U * s / 255)); l = Math.max(0, Math.round(l))
                                                                                } for (U = (c = 60) / t.bevelDepth,
                                                                                    a = 1; a <= t.bevelDepth + 1; a++)255 === (s = q[d + a * i]) ? c -= U : 0 < s && (c -= Math.round(U * s / 255)); v = l <= v + (c = Math.max(0, Math.round(c))
                                                                                    ) ? Math.min(128, v + c) : Math.max(129, 255 - l)
                                                                            } o[d + r] = 0 < v ? v : 0, d += i
                                                        }
                                                    }(f, e, g, a, l, c), m ? t += s : b === o ? (t += s, m = !0) : t += r,
                                                        v ? f-- : f < p ? f++ : b === n && (v = !0), b = t; 0
                                            } e.image.mask = F, e.image.mask2 = R
                                        }), Gi.testImage && new Z.Piece({
                                            layer: $, image: {
                                                data: Gi.testImage
                                            }
                                        })
                                } else K.error("getImageData failure during mask setup")
                        })
                }), Z.knife = {
                    style: Z.traditionalKnife,
                    cutChoices: (bn = [], function (e) {
                        var t, n, i = e.subject, o = e.minNop, r = e.defNop; if (i.width === vn && i.height === yn) {
                            for (
                                t = bn.length - 1; 0 <= t; t--)if ((n = bn[t]).selected) { e.selectedNop = n; break } if (e.selectedNop) return bn
                        } var s, a, l = 0, c = 0, u = 0,
                            d = i.width, h = i.height, p = Math.floor(h < d ? d / 3 : h / 3), g = !1; for (L.numPiecesMenu.resetFlag = !0, bn = [], vn = i.width,
                                yn = i.height; u < 1e3 && 10 < p;)6 <= (u = (l = Math.floor(h / p)) * (c = Math.floor(d / p))) && o <= u && (a = !g && r <= u, bn.push({
                                    nop: u, rows: l, cols: c,
                                    size: p, selected: a
                                }), a && (g = !0, e.selectedNop = bn[bn.length - 1])), s = Math.floor(h / (l + 1)), a = Math.floor(d / (c + 1)), p = Math.max(s, a)
                                ; if (!g) for (t = bn.length - 1; 0 <= t; t--)if (n = bn[t], 0 === t || 36 <= n.size || u <= o) { n.selected = !0, e.selectedNop = n; break }
                        return e.selectedNop ? (e.selectedNop.rows || K.error("bad nop object"), bn) : (K.error(
                            "null nop object: nop=" + u + ", size=" + p + ", choices.len=" + bn.length + ", choice=" + !!n + ", minNop=" + o + ", subw=" + d + ", subh=" + h),
                            null)
                    }), cut: function (e, t) {
                        var n = Z.Puzzle.curr, i = n.record || null, o = 1553800500976; i && i.num !== i.pcs.length && (
                            !i.pcs.length && i.date.strt === i.date.mod || (i.date.mod > o && K.warn("Corrupt record encountered"), L.msgbox(
                                "Corrupt record encountered for saved puzzle. Puzzle progress cannot be restored."), n.record = i = null)); var r, s,
                                    a = i ? i.shp.rw * i.shp.cl : t.rows * t.cols, l = t.rows, c = t.cols, u = t.size; if (n.pieces.dispose(), K.log(
                                        "cnvs.w=" + H.width + ", cnvs.h=" + H.height + ", sbjct.w=" + e.width + ", sbjct.h=" + e.height + ", numPcs=" + a), K.log(
                                            "nop.rows=" + t.rows + ", nop.cols=" + t.cols + ", nop.nop=" + t.nop + ", nop.size=" + t.size), i && (K.log(
                                                "rec.rows=%d, rec.cols=%d, rec.num=%d, rec.pcs.len=%d, rec.upd=%s, oldRec=%s", i.shp.rw, i.shp.cl, i.num, i.pcs.length,
                                                new Date(i.date.mod).toDateString(), i.date.mod < o), i.num !== i.pcs.length && i.date.mod > o && (U.setAuxData("Bad Record", i, !0),
                                                    K.warn("Corrupt record encountered"))), s = u < 30 ? (n.lightingLevel = 0, r = 2, 1) : u < 40 ? (n.lightingLevel = 1, r = 3, 2) : u < 50 ? (r = 4,
                                                        n.lightingLevel = 2) : u < 60 ? (n.lightingLevel = 3, r = 4, 2) : u < 100 ? (n.lightingLevel = 4, r = 5, 2) : (n.lightingLevel = 5, r = 6, 3), 1 < Q) switch (
                            r = Math.min(6, Math.round(Q * r))) { case 2: s = 1; break; case 3: case 4: case 5: s = 2; break; default: s = 3 }if (!n.shader) try {
                                !function (e,
                                    t) {
                                        e && e.shader && e.shader.dispose()
                                        ; var n = "precision mediump float;uniform sampler2D u_image;uniform sampler2D u_mask;uniform vec2 u_texPixelDim1;varying vec2 v_texCoord0;varying vec2 v_texCoord1;varying vec2 v_rot;varying float v_state;varying float v_opacity;"
                                        ; switch (n += "uniform sampler2D u_mask2;",
                                        n += "float rnd(float val) {;    return (fract(val) >= 0.5) ? ceil(val) : floor(val);}void main() {vec4 sPixel = texture2D(u_image, v_texCoord0);vec4 mPixel = texture2D(u_mask, v_texCoord1);"
                                        ,
                                        n += "vec4 m2Pixel = texture2D(u_mask2, v_texCoord1);float rawShad = (v_rot.s > 0.707) ? m2Pixel.r :    ((v_rot.t < -0.707) ? m2Pixel.g :    ((v_rot.s < -0.707) ? m2Pixel.b :    mPixel.b));"
                                        ,
                                        n += "const vec3 black = vec3(0.0, 0.0, 0.0);vec4 pend1, pend2;float state = rnd(v_state);bool sel = (mod(state, 256.0) > 0.0);float edge = rnd(mPixel.g * 255.0);float connEds = mod(state / 256.0, 256.0);bool conn = (mod(floor(connEds / edge), 2.0) > 0.0);float alpha = mPixel.r;bool isVis = (alpha > 0.0);bool isLightBev = (rawShad > 0.5020);float lightShad = isLightBev ? ((1.0 - rawShad) * (conn ? 0.5 : 1.0)) : 0.0;float darkShad = isLightBev ? 0.0 : (isVis ? (rawShad * (conn ? 0.5 : 1.0)) : 0.0);float shadow = isVis ? 0.0 : (1.0 - (rawShad * (sel ? 1.0 : 0.75)));float shad = isLightBev ? lightShad : (isVis ? -darkShad : shadow);pend1.a = (isLightBev || (alpha > 0.60) || (darkShad == 0.0) || conn) ? alpha : 0.60;pend1.a = pend1.a * v_opacity;pend1.rgb = clamp(sPixel.rgb + shad, 0.0, 1.0) * pend1.a;"
                                        , t) {
                                            case 2:
                                                n += "shad = sel ? rawShad : max(0.0, rawShad - (0.0980 - (0.0039 * (1.0 - smoothstep(0.1961, 0.3922, rawShad)))));"; break
                                                ; case 3:
                                            n += "shad = sel ? rawShad : max(0.0, rawShad - (0.0971 - (0.0078 * (1.0 - smoothstep(0.1294, 0.3882, rawShad)))));"; break
                                            ; case 4:
                                            n += "shad = sel ? rawShad : max(0.0, rawShad - (0.0980 - (0.0118 * (1.0 - smoothstep(0.0980, 0.3922, rawShad)))));"; break
                                            ; case 5:
                                            n += "shad = sel ? rawShad : max(0.0, rawShad - (0.0980 - (0.0157 * (1.0 - smoothstep(0.0784, 0.3922, rawShad)))));"; break
                                            ; default:
                                            n += "shad = sel ? rawShad : max(0.0, rawShad - (0.1000 - (0.0196 * (1.0 - smoothstep(0.0667, 0.4000, rawShad)))));"
                                    }
                                    n += "pend2.rgb = black;pend2.a = conn ? 0.0 : shad * v_opacity;gl_FragColor = (alpha == 0.0) ? pend2 : pend1;}",
                                        t = new A.Shader("pieceShader", n), e && (e.shader = t)
                                }(n, r)
                            } catch (e) { return A.error = "shaders", O(), !1 } for (var d, h, p, g, m = [], f = 1,
                                v = e.width % u, y = e.height % u, b = Math.floor(v / c), w = Math.floor(y / l), x = v % c, P = y % l, k = 0; k < l; k++) {
                                    for (var _ = 0; _ < c; _++)p = h = u, 0 < v && (
                                        v -= b, h += b, 0 < x && (h++, x--)), 0 < y && (p += w, 0 < P && p++), (d = {
                                            name: "piece-" + (g = f++) + "-", id: g, layer: $, image: {
                                                data: e.image, bounds: {
                                                    margin: 7
                                                }
                                            }, position: { x: 0, y: 0 }, core: { x: 0, y: 0, width: 0, height: 0 }, refPos: {}, shadowDepth: 0, shader: null, sortOrder: Math.random(
                                            ), angle: 0
                                        }).core.width = h, d.core.height = p, d.shadowDepth = r, d.bevelDepth = s, d.shader = n.shader, d.edges = {
                                            top: {}, left: {},
                                            right: {}, bottom: {}
                                        }, m.push(d); x = (v = e.width % u) % c, y -= w, P--
                        } if (this.style.buildMask(m, l, c), !Gi.testImage) {
                            n.primer = new A.Clip({
                                name: "primer-piece", layer: F, width: 1, height: 1, image: {
                                    data: e.image, mask: m[0].image.mask,
                                    mask2: m[0].image.mask2, bounds: { x: 0, y: 0, width: 1, height: 1 }
                                }, position: { x: 0, y: 0 }, shader: n.shader
                            }); for (var E = 0,
                                C = m.length; E < C; E++)new Z.Piece(m[E]); for (E = 0, C = m.length; E < C; E++) {
                                    var S = m[E].edges, T = m[E].piece, z = T.neighbors,
                                    I = T.caterNeighbors; z[3] = S.left.border ? null : m[E - 1].piece, z[1] = S.right.border ? null : m[E + 1].piece,
                                        z[0] = S.top.border ? null : m[E - c].piece, z[2] = S.bottom.border ? null : m[E + c].piece,
                                        I[3] = S.left.border || S.top.border ? null : m[E - c - 1].piece, I[1] = S.right.border || S.bottom.border ? null : m[E + c + 1].piece,
                                        I[0] = S.top.border || S.right.border ? null : m[E - c + 1].piece, I[2] = S.bottom.border || S.left.border ? null : m[E + c - 1].piece,
                                        T.isEdge = S.left.border || S.right.border || S.top.border || S.bottom.border
                                } n.pieces.specList = m,
                                    n.multiplayerGameId || n.scatter()
                        } return !0
                    }
                }, Z.clock = (Pn = xn = wn = 0, kn = {
                    set: function (e) { wn || (L.setClock(e), xn = 1e3 * (Pn = e)) },
                    pause: function () {
                        var e, t = Z.Puzzle.curr; t && (wn || t.multiplayerGameId) && (
                            e = "This " + t.pieces.length + " piece jigsaw puzzle is " + t.percentComplete() + "% complete.", t.multiplayerGameId ? (
                                t.isComplete ? e = "This " + t.pieces.length + " piece jigsaw puzzle was completed on " + W.timer.stopDateString(
                                ) : W.joinedToGameVar.val ? (t = (t = m.secureString(W.gameInfo.scode)) ? "https://jigex.com/" + t : "(not available)",
                                    e += "<br/><br/>Players currently present in this game:<br/>&nbsp;&nbsp;&nbsp;&nbsp;" + W.getPlayerNames().join(
                                        "<br/>&nbsp;&nbsp;&nbsp;&nbsp;"
                                    ) + "<br/><br/>Game link: &nbsp;" + t + '<br/><br/><br/><span style="color: #aaa">(Multiplayer games may not be paused)</span>'
                                ) : e += "<br/><br/>You are not currently connected to this multiplayer game", L.msgbox(e)) : (this.stop(), L.pause(e)))
                    },
                    resume: function () { var e = Z.Puzzle.curr; !wn && (e && !e.isComplete || 1 < W.getNumPlayers()) && (wn = Date.now()) }, stop: function () {
                        wn && (xn += Date.now() - wn, wn = 0)
                    }, getElapsedSecs: function () { var e = wn ? Date.now() - wn : 0; return Math.round((xn + e) / 1e3) },
                    getElapsedMins: function () { return Math.round(this.getElapsedSecs() / 60) }, onClick: function () { kn.pause() }, onTick: function () {
                        var e = Z.Puzzle.curr, e = (e && e.multiplayerGameId ? W.timer : kn).getElapsedSecs(); e !== Pn && (L.setClock(e), Pn = e)
                    }, info: function (
                    ) { return "elapsed=" + this.getElapsedSecs() + ", running=" + !!wn }
                }, W.joinedToGameVar.addListener(function (e) { e && xi() }),
                    W.timer.onRunningChange = function (e) { e ? (xi(), kn.resume()) : kn.stop() }, Vi.onInitComplete(function () {
                        o.getBtn("jigex-clock"
                        ).onclick = kn.onClick, A.createTask(kn.onTick, 200, !0)
                    }), kn), Z.puzzleRecord = (_n = null, En = 0, Cn = function () {
                        var e, t, n, i, o,
                        r = Z.Puzzle.curr, s = [], a = r.pieces.tail, l = 0; for (r.auditPieces(), this.gid = r.multiplayerGameId, this.date.mod = Date.now(),
                            this.thm = h.val.ordinal, this.tmr = Z.clock.getElapsedSecs(), this.rot = r.rotatable, this.edo = r.showEdgesOnly(),
                            this.num = r.pieces.length, this.cmplt = r.isComplete, this.hnts = 0, this.pau = 0, this.bt.v = Z.boxTop.isPresent ? 1 : 0,
                            this.bt.x = Z.boxTop.posX, this.bt.y = Z.boxTop.posY, this.bt.p = 0, this.shp.ri = r.tabIndexRight, this.shp.bi = r.tabIndexBottom,
                            this.shp.si = r.shapeIndex, this.shp.rw = r.pieces.numRows, this.shp.cl = r.pieces.numCols; a;)(e = (t = a.item).recTuple).id = t.id,
                                e.x = t.position.normX.toFixed(5), e.y = t.position.normY.toFixed(5), e.a = t.angle, e.m = t.hasMoved ? 1 : 0, e.g = t.group ? t.group.id : 0,
                                s.push(e), a = a.prev, t.group || l++; s.length === this.num ? (this.pcs = s, -1 !== this.chksm && (this.chksm = (n = l, i = this.tmr,
                                    o = Z.Puzzle.curr.pieces.length, r = 37, r += o * o, r += n * n, r += i, r *= 37, o < 50 && (r *= 37), r)),
                                    this.num && this.shp.rw * this.shp.cl === this.num ? (Z.recordsManager.store(this), En = 0) : 3 == ++En ? K.fault(new Error(
                                        "Attempted to save bad record. rows=" + this.shp.rw + ", cols=" + this.shp.cl + ", num=" + this.num)) : K.error(
                                            "Attempted to save bad record. rows=" + this.shp.rw + ", cols=" + this.shp.cl + ", num=" + this.num), _n = null) : K.error(new Error(
                                                "Wrong number of tuples recorded. len=" + s.length + ", num=" + this.num + ", rws=" + this.shp.rw + ", cls=" + this.shp.cl))
                    },
                        function (e, t) {
                            return e ? (e.ver <= 6 ? e = function (e) {
                                var t, n, i, o, r, s = Pi(), a = s.pcs, l = e.puzzle, c = l.spec, u = 1; for (r in s.nam = e.nam
                                    , s.pid = c.nam || c.id, s.cred = l.cred, s.credu = l.credu, s.thm = c.thm, s.num = c.num, s.rot = c.rot, s.tmr = c.tmr, s.edo = c.edo, s.hnts = 0,
                                    s.pau = 0, s.shp.sty = l.shp.sty, s.shp.rw = l.shp.rw, s.shp.cl = l.shp.cl, s.bt.v = l.bt.v, s.bt.x = l.bt.x, s.bt.p = l.bt.p,
                                    s.chksm = l.spec.chksm, l.pcs) if (l.pcs.hasOwnProperty(r)) if (n = l.pcs[r], r.includes("sgl")) t = {
                                        id: n.i, x: n.x, y: n.y, a: n.a, m: n.m,
                                        z: n.z, g: 0
                                    }, a.push(t); else if (r.includes("grp")) {
                                        for (var d in o = !0, n) n.hasOwnProperty(d) && (i = n[d], d.includes("sgl") && (t = {
                                            id: i.i, x: n.x, y: n.y, a: n.a, m: 1, p: n.p, z: n.z, g: u
                                        }, o && (o = !1, t.first = 1), a.push(t))); u++
                                    } return a.sort(function (e, t) {
                                        return e.z === t.z ? e.first ? 1 : t.first ? -1 : 0 : e.z < t.z ? 1 : -1
                                    }), Z.recordsManager.store(s), s
                            }(e) : t && Z.recordsManager.store(e),
                                function (e) {
                                    var t = e.chksm, n = 0, i = e.pcs; if (0 === t) return K.log("zero rec checksum"), !1; for (var o = i.length - 1; 0 <= o; o--
                                    )i[o].g || n++; return e.num < 50 && (t /= 37), t /= 37, t -= e.tmr, t -= n * n, 37 !== (t -= e.num * e.num) && K.log(
                                        "record checksum failure: id=%s, mod=%s", e.id, new Date(e.date.mod).toString()), 37 === t
                                }(e) || (e.chksm = -1)) : e = Pi(),
                                e.update = ki, e.findTuple = Ei, e.save = Cn, e.dispose = Ci, e.purge = Si, e
                        }), Z.recordsManager = function () {
                            for (var t, i, e,
                                n = m.localStore, o = {}, r = [], s = {}, a = !1, l = null, c = function (e) {
                                    return e && (0 === e.indexOf(me) || 0 === e.indexOf("rec-"
                                    ) && 17 <= e.length && "1" === e[4] && "-" === e[15])
                                }, u = 0, d = n.length - 1; 0 <= d; d--)if (t = n.key(d), c(t)) {
                                    try {
                                        i = Z.puzzleRecord(
                                            JSON.parse(n.getItem(t)))
                                    } catch (e) { K.log("corrupt record encountered. id=" + t), i = null } i && 0 !== i.num ? (i.id = t, o[t] = i, u++
                                    ) : r.push(t)
                                } var h = {}; e: for (var p in o) if (c(p)) {
                                    for (var g in i = o[p], o) if (p !== g && c(g) && (e = o[g],
                                        i.pid === e.pid && i.date.mod < e.date.mod)) { r.push(p), u--; continue e } i.cmplt ? (u--, r.push(p)) : h[p] = o[p]
                                } for (o = h; 10 < u;
                            )t = function () { var e, t = null; for (e in o) c(e) && (i = o[e], (!t || i.date.mod < t.date.mod) && (t = i)); return t }().id, delete o[t],
                                r.push(t), u--; return K.log("number of saved records: " + u), r.forEach(function (e) { n.removeItem(e) }), s.youngest = function () {
                                    var e = l; if (e) return e; var t, n = null; for (t in o) c(t) && (e = o[t], (!n || e.date.mod > n.date.mod) && (n = e)); return n
                                },
                                    s.cache = function (e) { l = e }, s.find = function (e) {
                                        if ((i = l) && (e === i.nam || e === i.pid) && i.num) return i; var t, n = null; for (t in o) c(t
                                        ) && (e !== (i = o[t]).nam && e !== i.pid || !i.num || (!n || i.date.mod > n.date.mod) && (n = i)); return n
                                    }, s.store = function (e) {
                                        try {
                                            m.localStore.setItem(e.id, JSON.stringify(e)), o[e.id] = e
                                        } catch (e) {
                                            var t; a || (
                                                t = "Warning: Progress on this puzzle may not be saved by the program due to " + (e.message && e.message.includes(
                                                    "QuotaExceededError") ? "lack of storage " : "a storage error ") + "in the browser.", a = !0, setTimeout(L.msgbox.bind(null, t, null
                                                        , null, !0), 100), K.warn("failed to store record.", e))
                                        }
                                    }, s.delete = function (e) {
                                        o.hasOwnProperty(e) && (delete o[e],
                                            m.localStore.removeItem(e))
                                    }, s
                        }(), Z.Credits = function (e) { this.shortCredits = Ti(e, !0), this.longCredits = Ti(e, !1) },
                Z.Credits.prototype.show = function () { this.shortCredits && L.toast.show(this.shortCredits) }, Z.delayedActions.add(function () {
                    var n = document.getElementById("jigex-credits-content"); o.getBtn("jigex-credits-tab").onclick = function () {
                        var e,
                        t = Z.Puzzle.curr; t ? (e = t.credits) && e.longCredits ? e.longCredits.includes("No credits are available for this puzzle"
                        ) || !t.mysteryProfile && !t.customMystery || t.isComplete ? n.innerHTML = e.longCredits : n.innerHTML = '<p style="text-align: center">The credits for this puzzle are not available until the puzzle is completed.</p><br/>' : n.innerHTML = '<p style="text-align: center">No credits are available for this puzzle.</p><br/>' : n.innerHTML = '<p style="text-align: center">An error has occurred. Please reload this puzzle.</p><br/>'
                    }
                }), Z.applause = function () {
                    function e() {
                        var e, t = 5 * Math.round(.05 * H.height + 60); (c = n.response).height > t && (e = Math.round(
                            c.width * t / c.height), c.width = e + (3 - e % 3), c.height = 5 - t % 5 + t), new A.Clip({ name: "texture-holder", layer: Y, image: { data: c } }
                            ).active = !1
                    } var r, i, n = null, c = null, u = [], s = null, a = 0, t = !1; Z.delayedActions.add(function () {
                        (n = new m.WebReq(
                            Gi.imagesPath + "applause-2.png", Gi.altImagesPath ? Gi.altImagesPath + "applause-2.png" : null)).onload = e, n.send(),
                        s = s || new Vi.Sonic("applause")
                    }); function o(e) {
                        "keydown" !== e.type && "mousedown" !== e.type && "pointerdown" !== e.type && "touchstart" !== e.type || t || (t = !0, g(), s && s.fadeOut())
                    }
                    function l() {
                        if (++i === u.length) {
                            for (var e = Z.Puzzle.curr; u.length;)u.pop().dispose(); Z.onEscape.remove(o),
                                H.removeEventListener("mousedown", o), H.removeEventListener("pointerdown", o), H.removeEventListener("touchstart", o), a = 0,
                                e && e.credits && e.credits.show()
                        }
                    } function d() { ++r === u.length && (a = 2, t && g()) } function h(e) {
                        e.clip.position.tween(e.toX,
                            e.toY, 1e3, d, A.EASE_OUT_SLOW)
                    } function p() {
                        u.length || function () {
                            for (var e, t = c.width / 3, n = c.height / 5, i = t / 2 - 30,
                                o = H.height + n / 2, r = H.width + t / 2, s = 1, a = 0, l = 0; ;)if ((e = new A.Clip({
                                    layer: Y, name: "applause", image: {
                                        data: c, animation: {
                                            frameCount: 15, frameRows: 5, fps: 12.5, startFrame: a
                                        }
                                    }
                                })).id = l++, e.position.assign(i, o), e.crowdRow = s, u.push(e), a = 10 === a ? 0 : a + 5
                                    , r <= (i += t - 30 + (3 === s ? 30 : 0))) { if (i = t / 2 - 30 - 216 * s, o += 8, !(s < 3)) break; s++ }
                        }(); for (var e = 0; e < u.length; e++) {
                            var t = u[e],
                            n = t.crowdRow, i = t.position, o = t.height; t.animator.play(), 1 === n ? A.createTask(h, 400, !1).data = {
                                clip: t, toX: i.x, toY: i.y - o
                            } : 2 === n ? A.createTask(h, 200, !1).data = { clip: t, toX: i.x, toY: i.y - o } : t.position.tween(i.x, i.y - o, 1e3, d, A.EASE_OUT_SLOW)
                        }
                        s && s.play(), a = 1, r = 0, setTimeout(g, 1e4)
                    } var g = function () {
                        if (2 === a) {
                            i = 0, a = 3; for (var e = u.length - 1; 0 <= e; e--) {
                                var t = u[e],
                                n = 1 === t.crowdRow ? 0 : 2 === t.crowdRow ? 300 : 600; t.position.tween(t.position.x, H.height + t.height / 2, 2e3 - n, l, A.EASE_NONE)
                            }
                        }
                    }
                        ; return {
                            play: function () {
                                var e = Z.Puzzle.curr; 0 === a && (t = !1, Z.onEscape.add(o), H.addEventListener("mousedown", o, !1),
                                    H.addEventListener("pointerdown", o, !1), H.addEventListener("touchstart", o, !1), c ? p() : (s && s.play(),
                                        e.credits && e.credits.show()))
                            }
                        }
                }(), Sn = !1, zn = Tn = NaN, window.addEventListener("resize", function e() {
                    var t, n; Sn || (
                        L.textInputMode() ? L.onTextInputBlur(e) : W.isConnecting() ? W.joinedToGameVar.addListener(function () {
                            return setTimeout(e, 0),
                                "remove"
                        }) : (t = f.getWidth(), n = f.getHeightMinusToolbar(), t === Tn && n === zn || (Tn = t, zn = n, Sn = !0, Z.delayedActions.add(Ii))))
                }, !1)
                , g || (K.log("%d completions", m.localStore.getItem(ge) || m.localStore.getItem(pe)), K.emitBreak()), Z.test = function (e) { },
                Z.testShowLS = function () { K.log("localStorage: " + JSON.stringify(localStorage)) }, Z.testClearLS = function () {
                    m.localStore.clear()
                }, Z.missingPieceCheck = function () {
                    var e = Z.Puzzle.curr; if (e && e.stateVar.val.eq(j)) {
                        var t = e.pieces,
                        n = t.getPiece(1), i = t.getPiece(2), i = n && n.group || i && i.group, o = null; if (e && i && t.length - 1 === i.length) {
                            for (
                                var r = t.length; 0 < r; r--) { var s = t.getPiece(r); if (!s.group) { o = s; break } } o && K.warn("potential missing piece detected.", {
                                    id: o.id, state: o.state.toString(), x: o.position.x, y: o.position.y, hasMoved: o.hasMoved, angle: o.angle, opacity: o.opacity,
                                    active: o.active, disposed: o.isDisposed, zOrder: o.zOrder, width: o.width, height: o.height, isEdge: o.isEdge
                                })
                        }
                    }
                },
                Z.restoreGame = function () {
                    var e, t = Z.Puzzle.curr; t && W.joinedToGameVar.val && (e = W.gameInfo, t.initialAngles = e.rot ? e.ang : null,
                        t.rotatable = e.rot, W.placePieces(), t.auditPieces(), t.relayer(), t.stateVar.val = k, t.showEdgesOnly() === e.edo ? t.scatter(!0, !1
                            , !1, !0) : t.showEdgesOnly(e.edo, X), e.indie && t.pieces.applyTask(function (e) {
                                0 === Math.floor(e.position.x) && 0 === Math.floor(
                                    e.position.y) && e.move(H.width / 2, H.height / 2)
                            }))
                }, In = function (e, t) {
                    e.remoteData.immediate ? (e.opacity = 0, t && t()
                    ) : e.applyTask(Oi, t)
                }, Ln = function (e, t) { var n = e.remoteData; n && n.immediate ? (e.opacity = 1, t && t()) : e.applyTask(ji, t) },
                An = function (e) {
                    function t() { e.opacity = 1, e.angle = n.a, e.move(n.x, n.y), Li(e) } var n = e.remoteData; e.isDisposed || (
                        n.immediate ? t() : e.angle === n.a ? n.wc ? e.isCaptured() ? (I.log(e.name + ": remote move piece (1)"), e.move(n.x, n.y), e.raise(), Mi(
                            e, Ai)) : (I.log(e.name + ": remote fade out before move"), In(e, function () {
                                n.timer = new l(300, function () {
                                    I.log(
                                        e.name + ": remote fade in and move piece" + (n.immediate ? ", immediate" : "")), n.immediate ? t() : (e.move(n.x, n.y), e.raise(), Ln(e
                                            , Ai))
                                })
                            })) : Mi(e, function () {
                                I.log(e.name + ": remote move piece (2)"), n.dbgFlag = !0, e.raise(), e.move(e.position.x - 1,
                                    e.position.y - 1), n.timer = new l(500, function () {
                                        I.log(e.name + ": remote move piece (3)" + (n.immediate ? ", immediate" : "")),
                                        n.dbgFlag = !1, n.immediate ? t() : e.move(n.x - 1, n.y - 1, { animate: !0, aniInterval: 500, aniCallback: function () { Ai(e) } })
                                    })
                            }
                            ) : e.rotateTo(n.a, !1, function () { An(e, n, !1) }))
                }, On = function (e, t) {
                    var n, i = Z.Puzzle.curr, o = e.remoteData
                    ; !t || e.group && t.group && e.group.id === t.group.id ? (n = t || i.pieces.getPiece(o.g), e.angle = n.angle, Z.Piece.gap.measure(e, n),
                        i = n.position.x - Z.Piece.gap.x, n = n.position.y - Z.Piece.gap.y, e.position.assign(i, n), Li(e), t && Li(t)) : o.immediate ? (
                            e.angle = t.angle, e.join(t, !0), Li(e)) : (Mi(t), Mi(e, function () {
                                e.raise(), e.move(e.position.x - 1, e.position.y - 1),
                                e.angle === t.angle ? Bi(e, t, 1) : 0 === e.angle && e.isInMainAssembly() ? t.rotateTo(0, !1, Bi.bind(null, t, e, 2)) : e.rotateTo(t.angle, !1
                                    , Bi.bind(null, e, t, 3))
                            }))
                }, Nn = function (e) {
                    var t = Z.Puzzle.curr, n = e.cachedPiece || t.pieces.getPiece(e.id),
                    i = !n.isDisposed && n.stateVar.val.eq(q, T, S) && !n.isTweening(), o = null, r = e.pivotPiece || (e.pv && !e.immediate ? t.pieces.getPiece(
                        e.pv) : null); if (!r || n.group && n.group === r.group || (r = null), void 0 !== e.cmd) {
                            switch (!W.timer.isRunning() && t.state.eq(P, k
                            ) && t.start(), e.cmd) {
                                case "select": i && (n.applyTask(Mi), n.stateVar.val = T, n.remotePlayerName = e.nam, (z.dbgEvents || c) && I.log(
                                    n.name + ": remote select by player " + e.nam)); break; case "rotate": i && n.rotateTo(e.ang); break; default: K.warn(
                                        "Unrecognized remote event: " + ("string" == typeof e.cmd ? e.cmd : "type " + typeof e.cmd))
                            }return !0
                        } if (e.g && !r && (
                            !n.group || e.g !== n.group.id) && (o = n === (o = e.cachedRefPiece || t.pieces.getPiece(e.g)) || n.group && o.group === n.group ? null : o
                            ) && o.isDisposed) return !0; var s = !!o && (o.stateVar.val.eq(q, T, S) && !o.isTweening()), t = !!r && (r.stateVar.val.eq(q, T, S
                            ) && !r.isTweening()); return !i || o && !s || r && !t ? (e.cachedPiece || I.log(n.name + ": remote processing delayed"), e.cachedPiece = n,
                                e.cachedRefPiece = o, e.cachedPivotPiece = r, !1) : ((n.remoteData = e).immediate || (n.stateVar.val = M,
                                    n.remotePlayerName = e.p || n.remotePlayerName), o && !e.immediate ? (o.stateVar.val = M, o.remotePlayerName = e.p || n.remotePlayerName
                                    ) : r && !e.immediate && (r.stateVar.val = M, r.remotePlayerName = e.p || n.remotePlayerName), Ri(n, o, r), !0)
                }, W.onAction = function (e) {
                    var t = Z.Puzzle.curr, t = t ? t.stateVar.val : b; return !(t.gte(P) || t.eq(w, x) && W.placingPieces) || ((z.dbgEvents || c) && I.log(
                        e.toString()), Nn(e))
                }, W.onEvent = W.onAction, W.onSettingChange = function (e, t, n) {
                    var i = Z.Puzzle.curr
                    ; i && "edo" === e && i.showEdgesOnly() !== t && i.stateVar.val.gte(k) && !i.pieces.isEdgeComplete && i.showEdgesOnly(t, n ? J : X)
                },
                Mn = jn = null, Bn = function () {
                    var e = Z.Puzzle.curr; "delaying" === Mn && e && e.stateVar.val.gte(Gi.PS_WAITING) && !W.isConnecting() && (
                        window.navigator.onLine && !document.hidden && a.stoppedDuration < 1e4 ? (W.errorVar.addListener(Di), Mn = "rejoining", W.leaveGame(
                        ), W.joinGame()) : jn = setTimeout(Bn, 3e3))
                }, W.joinedToGameVar.addListener(function (e) {
                    var t = Z.Puzzle.curr; e ? (jn && (
                        clearTimeout(jn), Mn = jn = null, W.errorVar.removeListener(Di), t && t.stateVar.val.gte(P) && (Z.restoreGame(), L.busy(!1))),
                        t && t.pieces.length && t.pieces.length !== W.gameInfo.nop && t.rescale()) : t && !t.isComplete && t.stateVar.val.gte(Gi.PS_WAITING
                        ) && !W.isConnecting() && (K.log("connection lost. attempting to reconnect to the game server..."), L.busy(!0), Mn = "delaying",
                            jn = setTimeout(Bn, 3e3), L.toast.show("Reconnecting to game..."))
                }), Vi.onProgramStart = function () {
                    function e() {
                        var e = Z.Puzzle.curr; if (e.state.eq(P)) e.state = k; else if (e.state.lt(P)) return; L.starterDlg.visible(!1),
                            L.invitePanel && L.invitePanel.visible() && L.invitePanel.visible(!1)
                    } function t() {
                        Z.Puzzle.curr.nopChangePrep(),
                        L.numPiecesMenu.visible("toggle")
                    } function n(e) { "ok" === e && (Z.Puzzle.curr.capState = B, t()) } (L = Gi.modules.ui
                    ).numPiecesBtn.onclick = function () {
                        var e = Z.Puzzle.curr; e && (e.isComplete || !e.numMoves && !e.record ? t() : L.msgbox(
                            'Changing the number of pieces in the puzzle will cause you to lose any progress you have made on the puzzle so far.<br/><br/>Choose "Continue" to proceed or "Cancel" to abort.'
                            , ["jigex-mb-continue", "jigex-mb-cancel"], n))
                    }; var i, s, a, o = (a = s = null, function (e) {
                        var t = Z.Puzzle && Z.Puzzle.curr
                        ; s && Date.now() - s.timestamp < 1e3 || (t && t.state.eq(w, x) ? L.msgbox(
                            "An image file or saved puzzle cannot be opened while the loading of another puzzle is already in progress."
                        ) : t && t.multiplayerGameId || Gi.parms().gameId ? L.msgbox(
                            "An image file or saved puzzle cannot be opened from within a multiplayer game session.") : (
                            s = e.target && e.target.files ? e.target.files[0] : null, L.starterDlg.visible(!1), s && (s.isJigsaw = s && (-1 !== s.name.indexOf(
                                ".jigsaw") || -1 !== s.name.toLowerCase().indexOf("saved puzzle")), s.timestamp = Date.now(), 0 === s.type.indexOf("image/jpg"
                                ) || 0 === s.type.indexOf("image/png") || 0 === s.type.indexOf("image/gif") || 0 === s.type.indexOf("image/bmp"
                                ) || 0 === s.type.indexOf("image/jpeg") || s.isJigsaw ? (i = new FileReader, K.emitBreak(), K.log(
                                    "open file: name=" + s.name + ", type=" + s.type), i.onloadend = r, i.onerror = l, s.isJigsaw ? i.readAsText(s) : i.readAsDataURL(s)
                                ) : L.msgbox("Only image files of type JPG, PNG, GIF, or BMP may be opened as a jigsaw puzzle."))))
                    }); function r(e) {
                        var t = Gi.parms().reset(); if (!s) return K.error("selected puzzle file is null"), void window.alert(
                            "The selected file could not be opened."); if (s.isJigsaw) {
                                var n, i, o, r = !0; try { i = JSON.parse(e.target.result) } catch (e) { } if (
                                    i && i.info && "string" == typeof i.info && i.info.includes("Jigsaw Explorer") && 8 <= i.ver) return (o = Z.recordsManager.find(s.name)
                                    ) || (i.nam = s.name, o = new Z.puzzleRecord(i, !0)), void (o.pid ? (0 === o.pid.indexOf("http") ? (t.url = o.pid, i.cred && (t.cred = i.cred),
                                        i.credu && (t.credu = i.credu)) : (t.saveName = s.name, t.puzzleId = o.pid), new Z.Puzzle(t)) : i.img ? (t.name = s.name,
                                            t.data = "data:image/jpeg;base64," + i.img, new Z.Puzzle(t)) : (U.setAuxData("Bad Record", o, !0), U.setAuxData("Old Record",
                                                JSON.stringify(i).substr(0, 1024) + "..."), K.fault(new Error("Record with no pid. file name=" + s.name)), L.msgbox(
                                                    "The selected puzzle could not be opened. Please contact Support for help."))); try {
                                                        n = function (e) {
                                                            for (var t = e.split(
                                                                '"sgl":'), n = "", i = 0, o = 0, r = 0, s = t.length - 1; r < s; r++)n += t[r] + '"sgl' + i++ + '":'; for (t = (n += t[s]).split('"grp":'), n = "", r = 0,
                                                                    s = t.length - 1; r < s; r++)n += t[r] + '"grp' + o++ + '":'; return n += t[s]
                                                        }(e.target.result), n = JSON.parse(n)
                                                    } catch (e) { r = !1 }
                                r && n.puzzle && n.info && n.info.includes("Jigsaw Explorer") && n.puzzle.ver && 6 <= n.puzzle.ver ? ((o = Z.recordsManager.find(s.name)
                                ) || (n.ver = 6, n.nam = s.name, o = new Z.puzzleRecord(n)), o.pid ? (0 === o.pid.indexOf("http") ? (t.url = o.pid, t.saveName = s.name,
                                    n.puzzle.cred && (t.cred = n.puzzle.cred), n.puzzle.credu && (t.credu = n.puzzle.credu)) : (t.saveName = s.name, t.puzzleId = o.pid),
                                    new Z.Puzzle(t)) : n.puzzle.img ? (t.name = s.name, t.data = "data:image/jpeg;base64," + n.puzzle.img, new Z.Puzzle(t)) : (
                                        U.setAuxData("Bad Record", o, !0), U.setAuxData("Old Record", JSON.stringify(n).substr(0, 1024) + "..."), K.fault(new Error(
                                            "Record with no pid. file name=" + s.name)), L.msgbox(
                                                "The selected puzzle could not be opened. Please contact Support for help."))) : L.msgbox(
                                                    "The selected jigsaw file is either not recognized or it is an outdated format. Contact Support for help.")
                            } else L.busy(
                                !0), a = e.target.result, t.name = s.name, t.data = a, K.log("create puzzle from file " + s.name), new Z.Puzzle(t)
                    } function l() {
                        L.msgbox("An error occurred while loading file " + s.name + ":\n\n" + i.error)
                    } function c() {
                        var e = Z.Puzzle.curr; e && e.state.gt(
                            x) && (e.rotatable = !e.rotatable)
                    } function u(e) { Z.Controller.recentTouch() && !L.help.isShowing() && e.preventDefault() }
                    var d = !1; return function () {
                        var t = Gi.parms(); d || (d = !0, window.addEventListener("contextmenu", u, !1),
                            L.themeBtn.onclick = function () { L.colorMenu.visible("toggle") }, L.startBtn.onclick = e, L.rotateBtn.onclick = c, L.onFileSelect = o
                            , h.isLoaded.addListener(function () { return t.gameId && (L.busy(!1), L.joinPanel.show()), Vi.Sonic.prep(), "remove" }),
                            h.setToDefault()), t.gameId && !W.joinedToGameVar.val ? W.joinedToGameVar.addListener(function (e) {
                                if (e) {
                                    e = W.gameInfo; return (
                                        t = t.reset()).puzzleId = e.pid, e.url && (t.url = e.url, t.cred = e.cred, t.credu = e.credu), new Z.Puzzle(t), "remove"
                                }
                            }) : new Z.Puzzle(
                                t)
                    }
                }(), Vi.player = Z) : O()
        }).dependenciesReady = function () {
            var e = "Player dependencies: base=" + !!Vi.base + ", utils=" + !!Vi.utils + ", nb=" + !!Vi.niftybar + ", cgl=" + !!Vi.ClipGL + ", ui=" + !!Vi.ui + ", sonic=" + !!Vi.Sonic + ", theme=" + !!Vi.theme + ", multiplayer=" + !!Vi.multiplayer
                ; return e !== t.prevMsg && (console.log(e), t.prevMsg = e), !!(
                    Vi.base && Vi.utils && Vi.niftybar && Vi.ClipGL && Vi.ui && Vi.snapIndicator && Vi.Sonic && Vi.theme && Vi.multiplayer)
        }, Vi.addModInit(
            "player", t))
}();