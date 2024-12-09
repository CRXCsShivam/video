/*!
   JW Player version 8.36.3
   Copyright (c) 2024, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.36.3/notice.txt
*/
( () => {
    var e, t, u = {
        696: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => n
            });
            const n = {
                advertising: {
                    admessage: "This ad will end in xx",
                    cuetext: "Advertisement",
                    displayHeading: "Advertisement",
                    loadingAd: "Loading ad",
                    podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__.",
                    skipmessage: "Skip ad in xx",
                    skiptext: "Skip"
                },
                airplay: "AirPlay",
                audioTracks: "Audio Tracks",
                auto: "Auto",
                buffer: "Loading",
                cast: "Chromecast",
                cc: "Closed Captions",
                close: "Close",
                errors: {
                    badConnection: "This video cannot be played because of a problem with your internet connection.",
                    cantLoadPlayer: "Sorry, the video player failed to load.",
                    cantPlayInBrowser: "The video cannot be played in this browser.",
                    cantPlayVideo: "This video file cannot be played.",
                    errorCode: "Error Code",
                    liveStreamDown: "The live stream is either down or has ended.",
                    protectedContent: "There was a problem providing access to protected content.",
                    technicalError: "This video cannot be played because of a technical error."
                },
                exitFullscreen: "Exit Fullscreen",
                fullscreen: "Fullscreen",
                hd: "Quality",
                liveBroadcast: "Live",
                logo: "Logo",
                mute: "Mute",
                next: "Next",
                nextUp: "Next Up",
                notLive: "Not Live",
                off: "Off",
                pause: "Pause",
                pipIcon: "Picture in Picture (PiP)",
                play: "Play",
                playback: "Play",
                playbackRates: "Playback Rates",
                player: "Video Player",
                poweredBy: "Powered by",
                prev: "Previous",
                related: {
                    autoplaymessage: "Next up in xx",
                    heading: "More Videos"
                },
                replay: "Replay",
                rewind: "Rewind 10 Seconds",
                settings: "Settings",
                sharing: {
                    copied: "Copied",
                    email: "Email",
                    embed: "Embed",
                    heading: "Share",
                    link: "Link"
                },
                slider: "Seek",
                stop: "Stop",
                unmute: "Unmute",
                videoInfo: "About This Video",
                volume: "Volume",
                volumeSlider: "Volume",
                shortcuts: {
                    playPause: "Play/Pause",
                    volumeToggle: "Mute/Unmute",
                    fullscreenToggle: "Fullscreen/Exit Fullscreen",
                    seekPercent: "Seek %",
                    keyboardShortcuts: "Keyboard Shortcuts",
                    increaseVolume: "Increase Volume",
                    decreaseVolume: "Decrease Volume",
                    seekForward: "Seek Forward",
                    seekBackward: "Seek Backward",
                    spacebar: "SPACE",
                    captionsToggle: "Captions On/Off",
                    shortcutsToggle: "Shortcuts Open/Close"
                },
                captionsStyles: {
                    subtitleSettings: "Subtitle Settings",
                    color: "Font Color",
                    fontOpacity: "Font Opacity",
                    userFontScale: "Font Size",
                    fontFamily: "Font Family",
                    edgeStyle: "Character Edge",
                    edgeColor: "Edge Color",
                    backgroundColor: "Background Color",
                    backgroundOpacity: "Background Opacity",
                    windowColor: "Window Color",
                    windowOpacity: "Window Opacity",
                    white: "White",
                    black: "Black",
                    red: "Red",
                    green: "Green",
                    blue: "Blue",
                    yellow: "Yellow",
                    magenta: "Magenta",
                    cyan: "Cyan",
                    none: "None",
                    raised: "Raised",
                    depressed: "Depressed",
                    uniform: "Uniform",
                    dropShadow: "Drop Shadow"
                },
                disabled: "Disabled",
                enabled: "Enabled",
                reset: "Reset"
            }
        }
        ,
        9128: (e, t, u) => {
            "use strict";
            function n(e, t, u) {
                const n = []
                  , r = {}
                  , i = function() {
                    for (; n.length > 0; ) {
                        const {command: t, args: u} = n.shift();
                        (r[t] || e[t]).apply(e, u)
                    }
                };
                t.forEach((t => {
                    const o = e[t];
                    r[t] = o,
                    e[t] = function(...e) {
                        u() ? n.push({
                            command: t,
                            args: e
                        }) : (i(),
                        o && o.apply(this, e))
                    }
                }
                )),
                Object.defineProperty(this, "queue", {
                    enumerable: !0,
                    get: () => n
                }),
                this.flush = i,
                this.empty = function() {
                    n.length = 0
                }
                ,
                this.off = function() {
                    t.forEach((t => {
                        const u = r[t];
                        u && (e[t] = u,
                        delete r[t])
                    }
                    ))
                }
                ,
                this.destroy = function() {
                    this.off(),
                    this.empty()
                }
            }
            u.d(t, {
                Z: () => n
            })
        }
        ,
        4742: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => n
            });
            const n = {
                debug: !1
            }
        }
        ,
        5191: (e, t, u) => {
            "use strict";
            u.d(t, {
                R: () => r,
                a: () => n
            });
            const n = function(e) {
                return e.slice && "px" === e.slice(-2) && (e = e.slice(0, -2)),
                e
            }
              , r = function(e, t) {
                if (-1 === t.toString().indexOf("%"))
                    return 0;
                if ("string" != typeof e || !e)
                    return 0;
                if (/^\d*\.?\d+%$/.test(e))
                    return e;
                const u = e.indexOf(":");
                if (-1 === u)
                    return 0;
                const n = parseFloat(e.substr(0, u))
                  , r = parseFloat(e.substr(u + 1));
                return n <= 0 || r <= 0 ? 0 : r / n * 100 + "%"
            }
        }
        ,
        5083: (e, t, u) => {
            "use strict";
            u.d(t, {
                G0: () => d,
                ZP: () => D,
                ke: () => l
            });
            var n = u(5191)
              , r = u(1569)
              , i = u(9888)
              , o = u(6042)
              , s = u(8348)
              , a = u(696)
              , c = u(8518);
            const l = {
                autoPause: {
                    viewability: !1,
                    pauseAds: !1
                },
                autostart: !1,
                allowFullscreen: !0,
                bandwidthEstimate: null,
                bitrateSelection: null,
                castAvailable: !1,
                controls: !0,
                cues: [],
                defaultPlaybackRate: 1,
                displaydescription: !0,
                displaytitle: !0,
                displayPlaybackLabel: !1,
                enableAdLoadingUI: !0,
                enableShortcuts: !0,
                floating: {
                    mode: "never"
                },
                height: 360,
                intl: {},
                item: 0,
                language: "en",
                liveTimeout: null,
                localization: a.Z,
                mute: !1,
                nextUpDisplay: !0,
                playbackRateControls: !1,
                playbackRates: [.5, 1, 1.25, 1.5, 2],
                renderCaptionsNatively: !1,
                repeat: !1,
                showUIWhen: "onReady",
                stretching: "uniform",
                volume: 90,
                width: 640
            }
              , d = function(e) {
                return e < 5 ? 5 : e
            }
              , D = function(e, t) {
                var D, f;
                const p = {};
                t && function(e, t) {
                    if (null == e)
                        throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(e), t)
                }(t, "mute") && ("boolean" == typeof t.mute && (p.mute = t.mute),
                delete t.mute);
                const h = Object.assign({}, p, null == (D = window) || null == (f = D.jwplayer) ? void 0 : f.defaults, t, e);
                !function(e) {
                    Object.keys(e).forEach((t => {
                        "id" !== t && (e[t] = (0,
                        i.serialize)(e[t]))
                    }
                    ))
                }(h);
                const g = h.forceLocalizationDefaults ? l.language : (0,
                c.G3)()
                  , m = (0,
                c.tK)(h.intl);
                h.localization = (0,
                c.Mh)(a.Z, (0,
                c.Pm)(h, m, g));
                const C = Object.assign({}, l, h);
                "." === C.base && (C.base = (0,
                r.getScriptPath)("jwplayer.js")),
                C.base = (C.base || (0,
                r.loadFrom)()).replace(/\/?$/, "/"),
                u.p = C.base,
                C.width = (0,
                n.a)(C.width),
                C.height = (0,
                n.a)(C.height),
                C.aspectratio = (0,
                n.R)(C.aspectratio, C.width),
                "string" == typeof C.volume && (C.volume = parseFloat(C.volume)),
                C.volume = (0,
                o.qh)(C.volume) ? Math.min(Math.max(0, C.volume), 100) : l.volume,
                C.mute = Boolean(C.mute),
                C.language = g,
                C.intl = m;
                const F = C.playlistIndex;
                F && (C.item = F),
                (0,
                o.hj)(C.item) || (C.item = 0);
                const y = h.autoPause;
                y && (C.autoPause.viewability = !("viewability"in y) || Boolean(y.viewability));
                const A = C.playbackRateControls;
                if (A) {
                    let e = C.playbackRates;
                    Array.isArray(A) && (e = A),
                    e = e.filter((e => (0,
                    o.hj)(e) && e >= .25 && e <= 4)).map((e => Math.round(100 * e) / 100)),
                    e.indexOf(1) < 0 && e.push(1),
                    e.sort(),
                    C.playbackRateControls = !0,
                    C.playbackRates = e
                }
                (!C.playbackRateControls || C.playbackRates.indexOf(C.defaultPlaybackRate) < 0) && (C.defaultPlaybackRate = 1),
                C.playbackRate = C.defaultPlaybackRate,
                C.aspectratio || delete C.aspectratio;
                const E = C.playlist;
                if (E)
                    Array.isArray(E.playlist) && (C.feedData = E,
                    C.playlist = E.playlist);
                else {
                    const e = (0,
                    o.ei)(C, ["title", "description", "type", "mediaid", "image", "images", "file", "sources", "tracks", "preload", "duration", "chapters"]);
                    C.playlist = [e]
                }
                C.qualityLabels = C.qualityLabels || C.hlslabels,
                delete C.duration;
                let v = C.liveTimeout;
                null !== v && ((0,
                o.qh)(v) ? 0 !== v && (v = Math.max(30, v)) : v = null,
                C.liveTimeout = v);
                const b = parseFloat(C.bandwidthEstimate)
                  , w = parseFloat(C.bitrateSelection);
                return C.bandwidthEstimate = (0,
                o.qh)(b) ? b : function(e) {
                    const t = parseFloat(e);
                    return (0,
                    o.qh)(t) ? Math.max(t, 1) : l.bandwidthEstimate
                }(C.defaultBandwidthEstimate),
                C.bitrateSelection = (0,
                o.qh)(w) ? w : l.bitrateSelection,
                C.liveSyncDuration = d(C.liveSyncDuration),
                C.backgroundLoading = (0,
                o.jn)(C.backgroundLoading) ? C.backgroundLoading : s.Features.backgroundLoading,
                C.enableAdLoadingUI = !s.Features.enableAdLoadingUI || Boolean(C.enableAdLoadingUI),
                C
            }
        }
        ,
        2894: (e, t, u) => {
            "use strict";
            u.d(t, {
                Ep: () => o,
                Jt: () => s,
                Tr: () => i,
                Zq: () => a
            });
            var n = u(4446);
            const r = u(8494).Z.logger.child("chunkLoader")
              , i = {}
              , o = function(e, t) {
                return u => {
                    throw r.error(u),
                    new n.rG(n.pJ,e,t)
                }
            }
              , s = function(e, t) {
                return u => {
                    throw r.warn(u),
                    new n.rG(null,e,t)
                }
            }
              , a = function() {
                return u.e(681).then(function(e) {
                    return u(7047).default
                }
                .bind(null, u)).catch(o(n.fU + 101))
            }
        }
        ,
        623: (e, t, u) => {
            "use strict";
            u.d(t, {
                ZP: () => ie,
                c2: () => ne
            });
            var n = u(9128)
              , r = u(2445)
              , i = u(2894)
              , o = u(393)
              , s = u(8320)
              , a = u(2963)
              , c = u(670)
              , l = u(4601)
              , d = u(4446)
              , D = u(8348);
            let f = null;
            const p = function() {
                const e = window.IntersectionObserverEntry;
                return !e || !("IntersectionObserver"in window) || !("intersectionRatio"in e.prototype)
            }
              , h = function() {
                return (p() ? u.e(943).then(function(e) {
                    return u(6337)
                }
                .bind(null, u)).catch((0,
                i.Ep)(d.fU + 120)) : Promise.resolve()).then(i.Zq)
            }
              , g = function(e) {
                const t = e.get("controls")
                  , n = p()
                  , r = function(e, t) {
                    const u = e.get("playlist");
                    if (Array.isArray(u) && u.length) {
                        const n = (0,
                        s.bx)(e.get("item"), u.length)
                          , r = (0,
                        s.T5)((0,
                        o.Z)(u[n]), e);
                        for (let u = 0; u < r.length; u++) {
                            const n = r[u]
                              , i = e.getProviders();
                            for (let e = 0; e < a.B.length; e++) {
                                const u = a.B[e];
                                if (i.providerSupports(u, n))
                                    return u.name === t
                            }
                        }
                    }
                    return !1
                }(e, "html5");
                return D.OS.tizen ? h() : t && n && r ? function() {
                    const e = u.e(605).then(function(e) {
                        u(6337);
                        const t = u(7047).default;
                        return l.v.controls = u(1130).default,
                        (0,
                        c.Z)(u(9181).default),
                        t
                    }
                    .bind(null, u)).catch((0,
                    i.Ep)(d.fU + 105));
                    return i.Tr.html5 = e,
                    e
                }() : t && r ? function() {
                    const e = u.e(207).then(function(e) {
                        const t = u(7047).default;
                        return l.v.controls = u(1130).default,
                        (0,
                        c.Z)(u(9181).default),
                        t
                    }
                    .bind(null, u)).catch((0,
                    i.Ep)(d.fU + 104));
                    return i.Tr.html5 = e,
                    e
                }() : t && n ? u.e(493).then(function(e) {
                    u(6337);
                    const t = u(7047).default;
                    return l.v.controls = u(1130).default,
                    t
                }
                .bind(null, u)).catch((0,
                i.Ep)(d.fU + 103)) : t ? u.e(581).then(function(e) {
                    const t = u(7047).default;
                    return l.v.controls = u(1130).default,
                    t
                }
                .bind(null, u)).catch((0,
                i.Ep)(d.fU + 102)) : h()
            };
            var m = u(1643)
              , C = u(7263)
              , F = u(676)
              , y = u(8518)
              , A = u(8675)
              , E = u(8381);
            const v = function(e, t, u) {
                const n = e.attributes;
                n.playlist = (0,
                s.ZP)(t),
                n.feedData = u
            }
              , b = function(e) {
                const t = e.get("playlist");
                return new Promise(( (u, n) => {
                    if ("string" != typeof t) {
                        const n = e.get("feedData") || {};
                        return v(e, t, n),
                        u()
                    }
                    const r = new C.Z;
                    r.on(m.Ow, (function(t) {
                        const n = t.playlist;
                        delete t.playlist,
                        v(e, n, t),
                        u()
                    }
                    )),
                    r.on(m.pn, (t => {
                        v(e, [], {}),
                        n((0,
                        d.l9)(t, d.xk))
                    }
                    )),
                    r.load(t)
                }
                ))
            }
              , w = function(e) {
                return e.attributes._destroyed
            };
            var B = u(1918)
              , k = u(6599)
              , j = u(7010);
            const P = function(e) {
                const t = e.get("skin") ? e.get("skin").url : void 0;
                if ("string" == typeof t && !function(e) {
                    const t = document.styleSheets;
                    for (let u = 0, n = t.length; u < n; u++)
                        if (t[u].href === e)
                            return !0;
                    return !1
                }(t)) {
                    const e = !0;
                    return new F.ZP(t,e).load().catch((e => e))
                }
                return Promise.resolve()
            }
              , S = e => {
                const t = e.get("advertising");
                return Boolean(null == t ? void 0 : t.outstream)
            }
              , O = e => S(e) ? Promise.resolve() : b(e).then(( () => {
                if (e.get("drm") || (0,
                B.w0)(e.get("playlist")))
                    return (0,
                    B.lD)(e.get("edition"))
            }
            )).then(( () => {
                return b(t = e).then(( () => {
                    if (w(t))
                        return;
                    const e = (0,
                    s.s7)(t.get("playlist"), t);
                    t.attributes.playlist = e;
                    try {
                        (0,
                        s._)(e)
                    } catch (e) {
                        throw e.code += d.xk,
                        e
                    }
                    const u = t.getProviders()
                      , n = (0,
                    s.bx)(t.get("item"), e.length)
                      , {provider: r, name: o} = u.choose(e[n].sources[0]);
                    return "function" == typeof r ? r : i.Tr.html5 && "html5" === o ? i.Tr.html5 : u.load(o).catch((e => {
                        throw (0,
                        d.l9)(e, d.y4)
                    }
                    ))
                }
                ));
                var t
            }
            ))
              , x = e => {
                const t = e.attributes
                  , u = t.error;
                if (u && u.code === k.u5) {
                    const e = t.pid
                      , u = t.ph
                      , n = new k.ZP(t.key)
                      , r = 7776e6;
                    if (u > 0 && u < 4 && e && n.duration() > -r) {
                        return new F.ZP(`//content.jwplatform.com/libraries/${e}.js`).load().then(( () => {
                            const e = window.jwplayer.defaults.key
                              , u = new k.ZP(e);
                            u.error() || u.token() !== n.token() || (t.key = e,
                            t.edition = u.edition(),
                            t.error = u.error())
                        }
                        )).catch(( () => {}
                        ))
                    }
                }
                return Promise.resolve()
            }
              , T = (e, t) => {
                const u = [x(e)];
                return S(e) || u.push(Promise.resolve()),
                Promise.all(u)
            }
              , _ = (e, t) => function(e, t) {
                return u.e(168).then((n => new (0,
                u(5545).default)(t).setup(e)).bind(null, u)).catch((0,
                i.Ep)(d.fU + 130))
            }(e, t).then(( () => P(e)))
              , I = (e, t) => {
                const u = () => function(e, t) {
                    return (0,
                    A.ZP)(e, t)
                }(e, t);
                return (0,
                j.Z)() ? _(e, t).then(u).catch(u) : u()
            }
              , Z = function(e) {
                const {attributes: t} = e
                  , {language: u, base: n, setupConfig: r, intl: i} = t
                  , o = (0,
                y.Pm)(r, i, u);
                return !(0,
                y.q2)(u) || (0,
                y.dl)(o) ? Promise.resolve() : new Promise((r => (0,
                y.Dq)(n, u).then(( ({response: u}) => {
                    if (!w(e)) {
                        if (!u)
                            throw new d.rG(null,d.wH);
                        t.localization = (0,
                        y.Mh)(u, o),
                        r()
                    }
                }
                )).catch((e => {
                    r(e.code === d.wH ? e : (0,
                    d.l9)(e, d.A6))
                }
                ))))
            }
              , N = e => new Promise((t => {
                if (e.attributes.liveSyncDuration > 45)
                    return t((0,
                    d.l9)(new Error, d.wM));
                const u = Array.isArray(e.attributes.playlist) && e.attributes.playlist.map((e => e.chapters));
                return null != u && u.length ? (0,
                E.T2)(u, t) : t()
            }
            ))
              , L = function(e) {
                let t;
                this.start = function(u) {
                    const n = I(e, u)
                      , r = Promise.all([(i = e,
                    f || (f = g(i)),
                    f), N(e), n, O(e), T(e), P(e), Z(e)]);
                    var i;
                    const o = new Promise(( (e, u) => {
                        t = setTimeout(( () => {
                            u(new d.rG(d.pJ,d.T6))
                        }
                        ), 6e4);
                        const n = () => {
                            clearTimeout(t),
                            setTimeout(e, 6e4)
                        }
                        ;
                        r.then(n).catch(n)
                    }
                    ));
                    return Promise.race([r, o]).catch((e => {
                        const t = () => {
                            throw e
                        }
                        ;
                        return n.then(t).catch(t)
                    }
                    )).then((e => function(e) {
                        if (!e || !e.length)
                            return {
                                core: null,
                                warnings: []
                            };
                        const t = e.reduce(( (e, t) => e.concat(t)), []).filter((e => null == e ? void 0 : e.code));
                        return {
                            core: e[0],
                            warnings: t
                        }
                    }(e)))
                }
                ,
                this.destroy = function() {
                    clearTimeout(t),
                    e.set("_destroyed", !0),
                    e = null
                }
            };
            var M = u(2303)
              , $ = u(7411)
              , R = u(9888)
              , q = u(4742)
              , z = u(8494);
            const V = z.Z.logger.child("jwplayer/model/storage");
            let U = {
                removeItem(e) {}
            };
            try {
                U = window.localStorage || U
            } catch (e) {
                V.debug(e)
            }
            const H = class {
                constructor(e, t) {
                    this.namespace = e,
                    this.items = t
                }
                getAllItems() {
                    return this.items.reduce(( (e, t) => {
                        const u = U[`${this.namespace}.${t}`];
                        return u && (e[t] = "captions" !== t ? (0,
                        R.serialize)(u) : JSON.parse(u)),
                        e
                    }
                    ), {})
                }
                track(e) {
                    this.items.forEach((t => {
                        e.on(`change:${t}`, ( (e, u) => {
                            try {
                                "captions" === t && (u = JSON.stringify(u)),
                                U[`${this.namespace}.${t}`] = u
                            } catch (e) {
                                q.Z.debug && V.error(e)
                            }
                        }
                        ))
                    }
                    ))
                }
                clear() {
                    this.items.forEach((e => {
                        U.removeItem(`${this.namespace}.${e}`)
                    }
                    ))
                }
            }
            ;
            var G = u(7753)
              , W = u(9918)
              , K = u(328)
              , Q = u(4225)
              , X = u(7683)
              , J = u(4609)
              , Y = u(5882);
            u(4671),
            u(9926);
            const ee = z.Z.logger.child("jwplayer/api/core-shim")
              , te = function(e, t) {
                t && t.code && (t.sourceError && ee.error(t.sourceError),
                ee.error(d.rG.logMessage(t.code)))
            }
              , ue = function(e) {
                e && e.code && ee.warn(d.rG.logMessage(e.code))
            }
              , ne = function(e, t) {
                if (!document.body.contains(e.currentContainer)) {
                    const t = document.getElementById(e.get("id"));
                    t && (e.currentContainer = t)
                }
                e.currentContainer.parentElement && e.currentContainer.parentElement.replaceChild(t, e.currentContainer),
                e.currentContainer = t
            }
              , re = function(e) {
                this._events = {},
                this.modelShim = new G.Z,
                this.modelShim._qoeItem = new $.Z,
                this.mediaShim = {},
                this.setup = new L(this.modelShim),
                this.currentContainer = this.originalContainer = e,
                this.apiQueue = new n.Z(this,["load", "play", "pause", "seek", "stop", "playlistItem", "playlistNext", "playlistPrev", "next", "preload", "setAllowFullscreen", "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen", "setPip", "requestPip", "addButton", "removeButton", "castToggle", "requestCast", "setMute", "setVolume", "setPlaybackRate", "addCues", "setCues", "getCues", "setPlaylistItem", "stopCasting", "getChapters", "getCurrentChapter", "setChapter", "resize", "setCaptions", "setControls"],( () => !0))
            };
            Object.assign(re.prototype, {
                on: K.ZP.on,
                once: K.ZP.once,
                off: K.ZP.off,
                trigger: K.ZP.trigger,
                init(e, t) {
                    const u = this.modelShim
                      , n = new H("jwplayer",["volume", "mute", "captionLabel", "captions", "bandwidthEstimate", "bitrateSelection", "qualityLabel", "enableShortcuts"])
                      , i = null == n ? void 0 : n.getAllItems();
                    u.attributes = u.attributes || {},
                    Object.assign(this.mediaShim, W.L4);
                    const o = e
                      , s = (0,
                    r.ZP)(Object.assign({}, e), i);
                    s.id = t.id,
                    s.setupConfig = o,
                    Object.assign(u.attributes, s, W.bv),
                    u.getProviders = function() {
                        return new M.Z(s)
                    }
                    ,
                    u.setProvider = function() {}
                    ;
                    let a = (0,
                    X.Z)();
                    {
                        u.get("backgroundLoading") || (a = (0,
                        J.Z)(a.getPrimedElement(), a));
                        const e = this.primeUi = new Y.ZP((0,
                        Y.GU)(this.originalContainer)).once("gesture", ( () => {
                            a.prime(),
                            this.preload(),
                            e.destroy()
                        }
                        ))
                    }
                    return u.on("change:errorEvent", te),
                    this.setup.start(t).then((e => {
                        const r = e.core;
                        if (!r)
                            throw (0,
                            d.l9)(null, d.y7);
                        if (!this.setup)
                            return;
                        this.on(m.cM, ue),
                        e.warnings.forEach((e => {
                            this.trigger(m.cM, e)
                        }
                        ));
                        const i = this.modelShim.clone();
                        if (i.error)
                            throw i.error;
                        const o = this.apiQueue.queue.slice(0);
                        this.apiQueue.destroy(),
                        Object.assign(this, r.prototype),
                        this.playerSetup(i, t, this.originalContainer, this._events, o, a);
                        const s = this._model;
                        return u.off("change:errorEvent", te),
                        s.on("change:errorEvent", te),
                        n.track(s),
                        this.updatePlaylist(s.get("playlist"), s.get("feedData")).catch((e => {
                            const t = e.code === d._M ? d.IB : d.xk;
                            throw (0,
                            d.l9)(e, t)
                        }
                        ))
                    }
                    )).then(( () => {
                        this.setup && this.playerReady()
                    }
                    )).catch((e => {
                        this.setup && function(e, t, u) {
                            Promise.resolve().then(( () => {
                                const n = (0,
                                d.Mm)(d.ud, d.nk, u)
                                  , r = e._model || e.modelShim;
                                n.message = n.message || r.get("localization").errors[n.key],
                                delete n.key;
                                const i = r.get("contextual");
                                if (!i) {
                                    const t = (0,
                                    Q.Z)(e, n);
                                    Q.Z.cloneIcon && t.querySelector(".jw-icon").appendChild(Q.Z.cloneIcon("error")),
                                    ne(e, t)
                                }
                                r.set("errorEvent", n),
                                r.set("state", m.Vy),
                                e.trigger(m.HH, n),
                                i && t.remove()
                            }
                            ))
                        }(this, t, e)
                    }
                    ))
                },
                playerDestroy() {
                    this.destroy && this.destroy(),
                    this.apiQueue && this.apiQueue.destroy(),
                    this.setup && this.setup.destroy(),
                    this.primeUi && this.primeUi.destroy(),
                    this.currentContainer !== this.originalContainer && ne(this, this.originalContainer),
                    this.off(),
                    this._events = this._model = this.modelShim = this.apiQueue = this.primeUi = this.setup = null
                },
                getContainer() {
                    return this.currentContainer
                },
                get(e) {
                    if (this.modelShim)
                        return e in this.mediaShim ? this.mediaShim[e] : this.modelShim.get(e)
                },
                getItemQoe() {
                    return this.modelShim._qoeItem
                },
                getItemPromise: () => null,
                setItemCallback(e) {
                    this.modelShim && (this.modelShim.attributes.playlistItemCallback = e)
                },
                getConfig() {
                    return Object.assign({}, this.modelShim.attributes, this.mediaShim)
                },
                getCurrentCaptions() {
                    return this.get("captionsIndex")
                },
                getWidth() {
                    return this.get("containerWidth")
                },
                getHeight() {
                    return this.get("containerHeight")
                },
                getMute() {
                    return this.get("mute")
                },
                getProvider() {
                    return this.get("provider")
                },
                getState() {
                    return this.get("state")
                },
                getAbsolutePosition: () => null,
                getAudioTracks: () => null,
                getCaptionsList: () => null,
                getQualityLevels: () => null,
                getVisualQuality: () => null,
                getCurrentQuality: () => -1,
                getCurrentAudioTrack: () => -1,
                getSafeRegion: () => ({
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }),
                isBeforeComplete: () => !1,
                isBeforePlay: () => !1,
                createInstream: () => null,
                skipAd() {},
                getMediaElement() {},
                attachMedia() {},
                detachMedia() {},
                isReady() {
                    var e;
                    return (null == (e = this._model) ? void 0 : e.get("isReady")) || !1
                }
            });
            const ie = re
        }
        ,
        4446: (e, t, u) => {
            "use strict";
            u.d(t, {
                A6: () => y,
                DD: () => d,
                EY: () => g,
                H4: () => k,
                IB: () => c,
                MD: () => v,
                Mm: () => S,
                Sp: () => B,
                T6: () => i,
                Y7: () => F,
                YQ: () => l,
                _M: () => h,
                aD: () => C,
                fU: () => s,
                l9: () => O,
                nk: () => r,
                nm: () => x,
                o2: () => p,
                pJ: () => b,
                rG: () => P,
                tJ: () => f,
                ud: () => j,
                ul: () => E,
                wH: () => A,
                wM: () => m,
                xk: () => a,
                y4: () => D,
                y7: () => o,
                zO: () => w
            });
            var n = u(6042);
            const r = 1e5
              , i = 100001
              , o = 100002
              , s = 101e3
              , a = 102e3
              , c = 102700
              , l = 200001
              , d = 202e3
              , D = 104e3
              , f = 203e3
              , p = 203640
              , h = 203700
              , g = 204e3
              , m = 300100
              , C = 300200
              , F = 306e3
              , y = 308e3
              , A = 308640
              , E = "cantPlayVideo"
              , v = "badConnection"
              , b = "cantLoadPlayer"
              , w = "cantPlayInBrowser"
              , B = "liveStreamDown"
              , k = "protectedContent"
              , j = "technicalError";
            class P {
                constructor(e, t, u) {
                    this.code = (0,
                    n.qh)(t) ? t : 0,
                    this.sourceError = u || null,
                    e ? this.key = e : delete this.key
                }
                static logMessage(e) {
                    const t = e % 1e3
                      , u = Math.floor((e - t) / 1e3);
                    let n = e.toString();
                    t >= 400 && t < 600 && (n = `${u}400-${u}599`);
                    return `JW Player ${e > 299999 && e < 4e5 ? "Warning" : "Error"} ${e}. For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#${n}`
                }
            }
            const S = function(e, t, u) {
                return u instanceof P && u.code ? u : new P(e,t,u)
            }
              , O = function(e, t) {
                const u = S(j, t, e);
                return u.code = (e && e instanceof P && e.code || 0) + t,
                u
            }
              , x = function(e) {
                const {name: t, message: u} = e;
                switch (t) {
                case "AbortError":
                    return /pause/.test(u) ? 303213 : /load/.test(u) ? 303212 : 303210;
                case "NotAllowedError":
                    return 303220;
                case "NotSupportedError":
                    return 303230;
                default:
                    return 303200
                }
            }
        }
        ,
        6391: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => n
            });
            const n = []
        }
        ,
        7411: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => a
            });
            var n = u(5004);
            const r = window.performance || {
                timing: {}
            }
              , i = r.timing.navigationStart || (0,
            n.z)();
            "now"in r || (r.now = () => (0,
            n.z)() - i);
            const o = () => i + r.now();
            var s = function(e, t) {
                if (null == e)
                    throw new TypeError("Cannot convert undefined or null to object");
                return Object.prototype.hasOwnProperty.call(Object(e), t)
            };
            const a = class {
                constructor() {
                    this.startTimes = {},
                    this.sum = {},
                    this.counts = {},
                    this.ticks = {}
                }
                start(e) {
                    this.startTimes[e] = o(),
                    this.counts[e] = this.counts[e] + 1 || 1
                }
                end(e) {
                    if (!this.startTimes[e])
                        return;
                    const t = o() - this.startTimes[e];
                    delete this.startTimes[e],
                    this.sum[e] = this.sum[e] + t || t
                }
                dump() {
                    const e = Object.assign({}, this.sum);
                    for (const t in this.startTimes)
                        if (s(this.startTimes, t)) {
                            const u = o() - this.startTimes[t];
                            e[t] = e[t] + u || u
                        }
                    return {
                        counts: Object.assign({}, this.counts),
                        sums: e,
                        events: Object.assign({}, this.ticks)
                    }
                }
                tick(e) {
                    this.ticks[e] = o()
                }
                clear(e) {
                    delete this.ticks[e]
                }
                between(e, t) {
                    return this.ticks[t] && this.ticks[e] ? this.ticks[t] - this.ticks[e] : null
                }
            }
        }
        ,
        4601: (e, t, u) => {
            "use strict";
            u.d(t, {
                v: () => o,
                z: () => s
            });
            var n = u(2894)
              , r = u(8348);
            let i = null;
            const o = {}
              , s = function() {
                return i || (i = r.OS.tizenApp ? u.e(74).then(function(e) {
                    const t = u(3112).default;
                    return o.controls = t,
                    t
                }
                .bind(null, u)).catch((function() {
                    i = null,
                    (0,
                    n.Jt)(301133)()
                }
                )) : u.e(716).then(function(e) {
                    const t = u(1130).default;
                    return o.controls = t,
                    t
                }
                .bind(null, u)).catch((function() {
                    i = null,
                    (0,
                    n.Jt)(301130)()
                }
                ))),
                i
            }
        }
        ,
        8348: (e, t, u) => {
            "use strict";
            u.r(t),
            u.d(t, {
                Browser: () => a,
                Features: () => l,
                OS: () => c
            });
            var n = u(2268);
            const r = (e, t) => {
                const u = e.exec(t);
                if (u && u.length > 1)
                    return u[1]
            }
            ;
            var i = u(8494);
            const o = navigator.userAgent
              , s = () => {}
              , a = {
                get androidNative() {
                    return (0,
                    n.O7)()
                },
                get chrome() {
                    return (0,
                    n.i7)()
                },
                get edge() {
                    return (0,
                    n.un)()
                },
                get facebook() {
                    return (0,
                    n.DF)()
                },
                get firefox() {
                    return (0,
                    n.pZ)()
                },
                get ie() {
                    return (0,
                    n.w1)()
                },
                get msie() {
                    return (0,
                    n.A)()
                },
                get safari() {
                    return (0,
                    n.G6)()
                },
                get version() {
                    return ( (e, t) => {
                        let u, n, r, i;
                        if (e.chrome)
                            u = -1 !== t.indexOf("Chrome") ? t.substring(t.indexOf("Chrome") + 7) : t.substring(t.indexOf("CriOS") + 6);
                        else if (e.safari)
                            u = t.substring(t.indexOf("Version") + 8);
                        else if (e.firefox)
                            u = t.substring(t.indexOf("Firefox") + 8);
                        else if (e.edge) {
                            let e = t.indexOf("Edge");
                            -1 === e ? e = t.indexOf("Edg") + 4 : e += 5,
                            u = t.substring(e)
                        } else
                            e.ie && (-1 !== t.indexOf("rv:") ? u = t.substring(t.indexOf("rv:") + 3) : -1 !== t.indexOf("MSIE") && (u = t.substring(t.indexOf("MSIE") + 5)));
                        return u && (-1 !== (i = u.indexOf(";")) && (u = u.substring(0, i)),
                        -1 !== (i = u.indexOf(" ")) && (u = u.substring(0, i)),
                        -1 !== (i = u.indexOf(")")) && (u = u.substring(0, i)),
                        n = parseInt(u, 10),
                        r = parseInt(u.split(".")[1], 10)),
                        {
                            version: u,
                            major: n,
                            minor: r
                        }
                    }
                    )(this, o)
                }
            }
              , c = {
                get android() {
                    return (0,
                    n.Dt)()
                },
                get iOS() {
                    return (0,
                    n.gn)()
                },
                get mobile() {
                    return (0,
                    n.tq)()
                },
                get mac() {
                    return (0,
                    n.id)()
                },
                get iPad() {
                    return (0,
                    n.zc)()
                },
                get iPhone() {
                    return (0,
                    n.xb)()
                },
                get windows() {
                    return o.indexOf("Windows") > -1
                },
                get tizen() {
                    return (0,
                    n.yS)()
                },
                get tizenApp() {
                    return (0,
                    n.Q6)()
                },
                get version() {
                    return ( (e, t) => {
                        let u, n, i;
                        if (e.windows)
                            switch (u = r(/Windows(?: NT|)? ([._\d]+)/, t),
                            u) {
                            case "6.1":
                                u = "7.0";
                                break;
                            case "6.2":
                                u = "8.0";
                                break;
                            case "6.3":
                                u = "8.1"
                            }
                        else
                            e.android ? u = r(/Android ([._\d]+)/, t) : e.iOS ? u = r(/OS ([._\d]+)/, t) : e.mac ? u = r(/Mac OS X ([._\d]+)/, t) : e.tizen && (u = r(/Tizen ([._\d]+)/, t));
                        if (u) {
                            n = parseInt(u, 10);
                            const e = u.split(/[._]/);
                            e && (i = parseInt(e[1], 10))
                        }
                        return {
                            version: u,
                            major: n,
                            minor: i
                        }
                    }
                    )(this, o)
                }
            }
              , l = {
                get flash() {
                    return (0,
                    n.NO)()
                },
                get flashVersion() {
                    return (0,
                    n.dI)()
                },
                get iframe() {
                    return (0,
                    n.cL)()
                },
                get passiveEvents() {
                    return ( () => {
                        let e = !1;
                        try {
                            const t = Object.defineProperty({}, "passive", {
                                get: () => e = !0
                            });
                            window.addEventListener("testPassive", s, t),
                            window.removeEventListener("testPassive", s, t)
                        } catch (e) {
                            i.Z.logger.child("jwplayer/environment/environment").debug(e)
                        }
                        return e
                    }
                    )()
                },
                get backgroundLoading() {
                    return !(c.iOS || c.tizen)
                },
                get enableAdLoadingUI() {
                    return !(c.iOS || c.tizen)
                }
            }
        }
        ,
        1643: (e, t, u) => {
            "use strict";
            u.d(t, {
                $_: () => v,
                $j: () => x,
                AQ: () => I,
                Ax: () => b,
                B1: () => g,
                Bs: () => Fe,
                Ew: () => M,
                FU: () => $,
                Gj: () => ge,
                HH: () => V,
                Hy: () => ne,
                Ib: () => fe,
                Je: () => q,
                Jl: () => _,
                K5: () => C,
                Kb: () => n,
                Ms: () => P,
                NZ: () => O,
                O1: () => J,
                Ow: () => se,
                P: () => h,
                QF: () => De,
                R2: () => G,
                RF: () => Ee,
                Rc: () => S,
                Rt: () => E,
                SL: () => pe,
                Sv: () => f,
                TJ: () => W,
                U3: () => F,
                UF: () => de,
                UW: () => re,
                UZ: () => ee,
                V$: () => N,
                Vy: () => a,
                WE: () => w,
                Wp: () => d,
                Z_: () => he,
                _5: () => o,
                _B: () => ce,
                aM: () => te,
                aQ: () => z,
                bc: () => r,
                cM: () => A,
                cq: () => R,
                cy: () => Z,
                gO: () => oe,
                gy: () => X,
                h7: () => ye,
                ik: () => c,
                j0: () => ae,
                jt: () => le,
                k3: () => B,
                l5: () => Ce,
                nQ: () => l,
                nv: () => D,
                oZ: () => K,
                ot: () => p,
                pi: () => L,
                pn: () => y,
                qG: () => Ae,
                r0: () => s,
                rx: () => Y,
                s$: () => T,
                sF: () => ie,
                t6: () => ve,
                tP: () => m,
                uL: () => k,
                uT: () => H,
                uc: () => U,
                ug: () => ue,
                wh: () => j,
                xQ: () => i,
                xf: () => me,
                yH: () => Q
            });
            const n = "buffering"
              , r = "idle"
              , i = "complete"
              , o = "paused"
              , s = "playing"
              , a = "error"
              , c = "loading"
              , l = "stalled"
              , d = "drag"
              , D = "dragStart"
              , f = "dragEnd"
              , p = "click"
              , h = "doubleClick"
              , g = "over"
              , m = "move"
              , C = "enter"
              , F = "out"
              , y = a
              , A = "warning"
              , E = "adClick"
              , v = "mediaLoaded"
              , b = "adPause"
              , w = "adPlay"
              , B = "adSkipped"
              , k = "adTime"
              , j = "autostartNotAllowed"
              , P = i
              , S = "ready"
              , O = "seek"
              , x = "beforePlay"
              , T = "beforeComplete"
              , _ = "bufferFull"
              , I = "absolutePositionReady"
              , Z = "displayClick"
              , N = "playlistComplete"
              , L = "cast"
              , M = "mediaError"
              , $ = "firstFrame"
              , R = "playAttempt"
              , q = "playAttemptFailed"
              , z = "seeked"
              , V = "setupError"
              , U = "state"
              , H = "bufferChange"
              , G = "time"
              , W = "ratechange"
              , K = "mediaType"
              , Q = "volume"
              , X = "mute"
              , J = "metadataCueParsed"
              , Y = "meta"
              , ee = "levels"
              , te = "levelsChanged"
              , ue = "visualQuality"
              , ne = "controls"
              , re = "fullscreen"
              , ie = "resize"
              , oe = "playlistItem"
              , se = "playlist"
              , ae = "audioTracks"
              , ce = "audioTrackChanged"
              , le = "subtitlesTracks"
              , de = "subtitlesTrackChanged"
              , De = "playbackRateChanged"
              , fe = "logoClick"
              , pe = "captionsList"
              , he = "captionsChanged"
              , ge = "providerFirstFrame"
              , me = "userAction"
              , Ce = "instreamClick"
              , Fe = "breakpoint"
              , ye = "fullscreenchange"
              , Ae = "bandwidthEstimate"
              , Ee = "float"
              , ve = "chapter"
        }
        ,
        9918: (e, t, u) => {
            "use strict";
            u.d(t, {
                L4: () => r,
                OG: () => o,
                bv: () => n,
                ni: () => i
            });
            const n = {
                audioMode: !1,
                itemMeta: {},
                playbackRate: 1,
                playRejected: !1,
                state: u(1643).bc,
                itemReady: !1,
                controlsEnabled: !1
            }
              , r = {
                position: 0,
                duration: 0,
                buffer: 0,
                currentTime: 0
            }
              , i = 120
              , o = 25
        }
        ,
        7753: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => r
            });
            var n = u(328);
            class r extends n.ZP {
                constructor() {
                    super(),
                    this.attributes = Object.create(null)
                }
                addAttributes(e) {
                    Object.keys(e).forEach((t => {
                        this.add(t, e[t])
                    }
                    ))
                }
                add(e, t) {
                    Object.defineProperty(this, e, {
                        get: () => this.attributes[e],
                        set: t => {
                            this.set(e, t)
                        }
                        ,
                        enumerable: !1
                    }),
                    this.attributes[e] = t
                }
                get(e) {
                    return this.attributes[e]
                }
                set(e, t) {
                    if (this.attributes[e] === t)
                        return;
                    const u = this.attributes[e];
                    this.attributes[e] = t,
                    this.trigger(`change:${e}`, this, t, u)
                }
                clone() {
                    const e = {}
                      , t = this.attributes;
                    if (t)
                        for (const u in t)
                            e[u] = t[u];
                    return e
                }
                change(e, t, u) {
                    this.on(`change:${e}`, t, u);
                    const n = this.get(e);
                    return t.call(u, this, n, n),
                    this
                }
            }
        }
        ,
        7941: (e, t, u) => {
            "use strict";
            u.d(t, {
                dZ: () => i,
                my: () => s,
                qk: () => o,
                r1: () => r
            });
            var n = u(2957);
            const r = e => {
                let t = "";
                return e && (e.localName ? t = e.localName : e.baseName && (t = e.baseName)),
                t
            }
              , i = e => {
                let t = "";
                return e && (e.textContent ? t = (0,
                n.fy)(e.textContent) : e.text && (t = (0,
                n.fy)(e.text))),
                t
            }
              , o = (e, t) => e.childNodes[t]
              , s = e => e.childNodes ? e.childNodes.length : 0
        }
        ,
        6769: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => f
            });
            var n = u(7941)
              , r = u(2957);
            const i = e => {
                const t = [];
                for (let u = 0; u < (0,
                n.my)(e); u++) {
                    const r = e.childNodes[u];
                    "jwplayer" === r.prefix && "mediatypes" === (0,
                    n.r1)(r).toLowerCase() && t.push((0,
                    n.dZ)(r))
                }
                return t
            }
              , o = e => {
                const t = {
                    zh: "Chinese",
                    nl: "Dutch",
                    en: "English",
                    fr: "French",
                    de: "German",
                    it: "Italian",
                    ja: "Japanese",
                    pt: "Portuguese",
                    ru: "Russian",
                    es: "Spanish"
                };
                return t[e] ? t[e] : e
            }
              , s = function(e, t) {
                const u = [];
                for (let a = 0; a < (0,
                n.my)(e); a++) {
                    const c = e.childNodes[a];
                    if ("media" === c.prefix) {
                        if (!(0,
                        n.r1)(c))
                            continue;
                        switch ((0,
                        n.r1)(c).toLowerCase()) {
                        case "content":
                            if ((0,
                            r.Dc)(c, "duration") && (t.duration = (0,
                            r.m9)((0,
                            r.Dc)(c, "duration"))),
                            (0,
                            r.Dc)(c, "url")) {
                                t.sources || (t.sources = []);
                                const e = {
                                    file: (0,
                                    r.Dc)(c, "url"),
                                    type: (0,
                                    r.Dc)(c, "type"),
                                    width: (0,
                                    r.Dc)(c, "width"),
                                    label: (0,
                                    r.Dc)(c, "label")
                                }
                                  , u = i(c);
                                u.length && (e.mediaTypes = u),
                                t.sources.push(e)
                            }
                            (0,
                            n.my)(c) > 0 && (t = s(c, t));
                            break;
                        case "title":
                            t.title = (0,
                            n.dZ)(c);
                            break;
                        case "description":
                            t.description = (0,
                            n.dZ)(c);
                            break;
                        case "guid":
                            t.mediaid = (0,
                            n.dZ)(c);
                            break;
                        case "thumbnail":
                            t.image || (t.image = (0,
                            r.Dc)(c, "url"));
                            break;
                        case "group":
                            s(c, t);
                            break;
                        case "subtitle":
                            {
                                const e = {
                                    file: (0,
                                    r.Dc)(c, "url"),
                                    kind: "captions"
                                };
                                (0,
                                r.Dc)(c, "lang").length > 0 && (e.label = o((0,
                                r.Dc)(c, "lang"))),
                                u.push(e);
                                break
                            }
                        }
                    }
                }
                t.tracks || (t.tracks = []);
                for (let e = 0; e < u.length; e++)
                    t.tracks.push(u[e]);
                return t
            }
              , a = s;
            var c = u(9888);
            const l = function(e, t) {
                const u = "default"
                  , i = "label"
                  , o = "file"
                  , s = []
                  , a = []
                  , l = t;
                for (let l = 0; l < e.childNodes.length; l++) {
                    const d = e.childNodes[l];
                    if ("jwplayer" === d.prefix) {
                        const e = (0,
                        n.r1)(d);
                        "source" === e ? (delete t.sources,
                        s.push({
                            file: (0,
                            r.Dc)(d, o),
                            default: (0,
                            r.Dc)(d, u),
                            label: (0,
                            r.Dc)(d, i),
                            type: (0,
                            r.Dc)(d, "type")
                        })) : "track" === e ? (delete t.tracks,
                        a.push({
                            file: (0,
                            r.Dc)(d, o),
                            default: (0,
                            r.Dc)(d, u),
                            kind: (0,
                            r.Dc)(d, "kind"),
                            label: (0,
                            r.Dc)(d, i)
                        })) : (t[e] = (0,
                        c.serialize)((0,
                        n.dZ)(d)),
                        "file" === e && t.sources && delete t.sources)
                    }
                    t[o] || (t[o] = t.link)
                }
                if (s.length) {
                    t.sources = [];
                    for (let e = 0; e < s.length; e++) {
                        const t = s[e];
                        t.file.length > 0 && (t[u] = "true" === s[e][u],
                        t.label || delete t.label,
                        l.sources.push(t))
                    }
                }
                if (a.length) {
                    t.tracks = [];
                    for (let e = 0; e < a.length; e++) {
                        const t = a[e];
                        t.file && t.file.length > 0 && (t[u] = "true" === a[e][u],
                        t.kind = a[e].kind.length ? a[e].kind : "captions",
                        t.label || delete t.label,
                        l.tracks.push(t))
                    }
                }
                return l
            };
            var d = u(393);
            const D = e => {
                const t = {};
                for (let u = 0; u < e.childNodes.length; u++) {
                    const i = e.childNodes[u]
                      , o = (0,
                    n.r1)(i);
                    if (o)
                        switch (o.toLowerCase()) {
                        case "enclosure":
                            t.file = (0,
                            r.Dc)(i, "url");
                            break;
                        case "title":
                            t.title = (0,
                            n.dZ)(i);
                            break;
                        case "guid":
                            t.mediaid = (0,
                            n.dZ)(i);
                            break;
                        case "pubdate":
                            t.date = (0,
                            n.dZ)(i);
                            break;
                        case "description":
                            t.description = (0,
                            n.dZ)(i);
                            break;
                        case "link":
                            t.link = (0,
                            n.dZ)(i);
                            break;
                        case "category":
                            t.tags ? t.tags += (0,
                            n.dZ)(i) : t.tags = (0,
                            n.dZ)(i)
                        }
                }
                return new d.Z(l(e, a(e, t)))
            }
            ;
            function f(e) {
                const t = [];
                t.feedData = {};
                for (let u = 0; u < (0,
                n.my)(e); u++) {
                    const r = (0,
                    n.qk)(e, u);
                    if ("channel" === (0,
                    n.r1)(r).toLowerCase())
                        for (let e = 0; e < (0,
                        n.my)(r); e++) {
                            const u = (0,
                            n.qk)(r, e)
                              , i = (0,
                            n.r1)(u).toLowerCase();
                            "item" === i ? t.push(D(u)) : i && (t.feedData[i] = (0,
                            n.dZ)(u))
                        }
                }
                return t
            }
        }
        ,
        2557: (e, t, u) => {
            "use strict";
            u.d(t, {
                t: () => n,
                u: () => r
            });
            class n {
                constructor(e, t) {
                    this.defaultLanguage = e,
                    this.timestamps = t
                }
            }
            class r {
                constructor({title: e={}, group: t, time: u, image: n}) {
                    this.title = {},
                    this.time = u,
                    this.group = t,
                    this.image = n,
                    Object.keys(e).forEach((t => {
                        const u = e[t];
                        this.addTitle(t, u)
                    }
                    ))
                }
                addTitle(e, t) {
                    this.title[e] = t
                }
            }
        }
        ,
        393: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => a
            });
            var n = u(6053);
            const r = ["captions", "metadata", "thumbnails", "chapters"]
              , i = function(e) {
                if (!e || !e.file)
                    return;
                const t = Object.assign({}, {
                    kind: "captions",
                    default: !1
                }, e);
                var u;
                return t.kind = (u = t.kind,
                -1 !== r.indexOf(u) ? t.kind : "captions"),
                t.default = Boolean(t.default),
                t
            };
            var o = u(9918);
            const s = Array.isArray
              , a = function(e) {
                s((e = e || {}).tracks) || delete e.tracks;
                const t = Object.assign({}, {
                    sources: [],
                    tracks: [],
                    minDvrWindow: o.ni
                }, e);
                t.sources !== Object(t.sources) || s(t.sources) || (t.sources = [(0,
                n.Z)(t.sources)]),
                s(t.sources) && 0 !== t.sources.length || (e.levels ? t.sources = e.levels : t.sources = [(0,
                n.Z)(e)]);
                for (let e = 0; e < t.sources.length; e++) {
                    const u = t.sources[e];
                    if (!u)
                        continue;
                    const r = u.default;
                    u.default = !!r && "true" === r.toString(),
                    t.sources[e].label || (t.sources[e].label = e.toString()),
                    t.sources[e] = (0,
                    n.Z)(t.sources[e])
                }
                return t.sources = t.sources.filter(Boolean),
                s(t.tracks) || (t.tracks = []),
                s(t.captions) && (t.tracks = t.tracks.concat(t.captions),
                delete t.captions),
                t.tracks = t.tracks.map(i).filter(Boolean),
                t
            }
        }
        ,
        7263: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => c
            });
            var n = u(1643)
              , r = u(7941)
              , i = u(6769)
              , o = u(6886)
              , s = u(328)
              , a = u(4446);
            const c = function() {
                const e = Object.assign(this, s.ZP)
                  , t = function(t) {
                    t instanceof a.rG && !t.code && (t = new a.rG(a.ul,0)),
                    e.trigger(n.pn, t)
                }
                  , u = function(u) {
                    try {
                        const t = u.responseXML ? u.responseXML.childNodes : null;
                        let o, s = null;
                        if (t) {
                            for (let e = 0; e < t.length && (s = t[e],
                            8 === s.nodeType); e++)
                                ;
                            if (s && "xml" === (0,
                            r.r1)(s) && (s = s.nextSibling),
                            s && "rss" === (0,
                            r.r1)(s)) {
                                const e = (0,
                                i.Z)(s);
                                o = Object.assign({
                                    playlist: e
                                }, e.feedData)
                            }
                        }
                        if (!o)
                            try {
                                const e = JSON.parse(u.responseText);
                                if (Array.isArray(e))
                                    o = {
                                        playlist: e
                                    };
                                else {
                                    if (!Array.isArray(e.playlist))
                                        throw Error("Playlist is not an array");
                                    o = e
                                }
                            } catch (e) {
                                throw new a.rG(a.ul,621,e)
                            }
                        e.trigger(n.Ow, o)
                    } catch (e) {
                        t(e)
                    }
                };
                this.load = function(e) {
                    (0,
                    o.h)(e, u, ( (e, u, n, r) => {
                        t(r)
                    }
                    ))
                }
                ,
                this.destroy = function() {
                    this.off()
                }
            }
        }
        ,
        8320: (e, t, u) => {
            "use strict";
            u.d(t, {
                ZP: () => y,
                s7: () => g,
                T5: () => F,
                YF: () => h,
                _: () => m,
                bx: () => C
            });
            const n = {
                none: !0,
                metadata: !0,
                auto: !0
            }
              , r = (e, t) => n[e] ? e : n[t] ? t : "metadata";
            var i = u(393)
              , o = u(6053)
              , s = u(2303)
              , a = u(4446)
              , c = u(8348);
            const l = (e, t) => void 0 === e ? t : e
              , d = (e, t, u) => {
                u in t && (e[u] = t[u])
            }
              , D = (e, t) => {
                const {attributes: u} = t
                  , {sources: n, allSources: i, preload: s, drm: a} = e
                  , c = l(e.withCredentials, u.withCredentials);
                return (i || n).map((function(t) {
                    if (t !== Object(t))
                        return null;
                    d(t, u, "androidhls"),
                    d(t, u, "hlsjsdefault"),
                    d(t, u, "safarihlsjs"),
                    ( (e, t, u) => {
                        if (e.liveSyncDuration)
                            return;
                        const n = t.liveSyncDuration ? t : u;
                        d(e, n, "liveSyncDuration")
                    }
                    )(t, e, u),
                    d(t, u, "_hlsjsProgressive"),
                    t.preload = r(t.preload, s);
                    const n = t.drm || a || u.drm;
                    n && (t.drm = n);
                    const i = l(t.withCredentials, c);
                    return void 0 !== i && (t.withCredentials = i),
                    (0,
                    o.Z)(t)
                }
                )).filter(Boolean)
            }
              , f = e => c.Browser.safari ? e.sort((e => "hls" === e.type ? -1 : 0)) : e
              , p = (e, t) => {
                t && t.choose || (t = new s.Z);
                const u = ( (e, t) => {
                    for (let u = 0; u < e.length; u++) {
                        const n = e[u]
                          , {providerToCheck: r} = t.choose(n);
                        if (r)
                            return {
                                type: n.type,
                                provider: r
                            }
                    }
                    return null
                }
                )(e, t);
                if (!u)
                    return [];
                const n = u.provider
                  , r = u.type;
                return e.filter((function(e) {
                    return e.type === r && t.providerSupports(n, e)
                }
                ))
            }
              , h = (e, t, u) => {
                const n = e.getProviders()
                  , i = e.get("preload")
                  , o = e.get("jwStart")
                  , s = Object.assign({}, t);
                if (s.preload = r(t.preload, i),
                s.allSources = f(D(s, e)),
                s.sources = p(s.allSources, n),
                s.sources.length)
                    return s.file = s.sources[0].file,
                    s.feedData = u,
                    o && -1 !== o && e.get("generateSEOMetadata") && (s.starttime = o),
                    (e => {
                        const t = e.sources[0].liveSyncDuration;
                        return t && (e.liveSyncDuration = e.dvrSeekLimit = t),
                        e
                    }
                    )(s)
            }
              , g = (e, t, u) => {
                const n = Object.assign({}, u);
                return delete n.playlist,
                e.map((e => h(t, e, n))).filter(Boolean)
            }
              , m = e => {
                if (!Array.isArray(e) || 0 === e.length)
                    throw new a.rG(a.ul,630)
            }
              , C = (e, t) => {
                let u = (parseInt(e, 10) || 0) % t;
                return u < 0 && (u += t),
                u
            }
              , F = (e, t) => p(f(D(e, t)), t.getProviders())
              , y = function(e) {
                return (Array.isArray(e) ? e : [e]).map(i.Z)
            }
        }
        ,
        6053: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => i
            });
            var n = u(7034)
              , r = u(2957);
            const i = function(e) {
                if (!e || !e.file)
                    return;
                const t = Object.assign({}, {
                    default: !1,
                    type: ""
                }, e);
                t.file = (0,
                r.fy)(`${t.file}`);
                const u = /^[^/]+\/(?:x-)?([^/]+)$/
                  , i = t.type;
                if (u.test(i) && (t.mimeType = i,
                t.type = i.replace(u, "$1")),
                (0,
                n.isYouTube)(t.file) ? t.type = "youtube" : (0,
                n.isRtmp)(t.file) ? t.type = "rtmp" : t.type || (t.type = (0,
                r.AO)(t.file)),
                t.type) {
                    switch (t.type) {
                    case "m3u8":
                    case "vnd.apple.mpegurl":
                        t.type = "hls";
                        break;
                    case "dash+xml":
                        t.type = "dash";
                        break;
                    case "m4a":
                        t.type = "aac";
                        break;
                    case "smil":
                        t.type = "rtmp"
                    }
                    return Object.keys(t).forEach((function(e) {
                        "" === t[e] && delete t[e]
                    }
                    )),
                    t
                }
            }
        }
        ,
        4101: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => l
            });
            var n = u(676)
              , r = u(9888)
              , i = u(2957)
              , o = u(4446)
              , s = u(3487);
            const a = function(e) {
                if ("string" != typeof e)
                    return;
                const t = (e = e.split("?")[0]).indexOf("://");
                if (t > 0)
                    return 0;
                const u = e.indexOf("/")
                  , n = (0,
                i.AO)(e);
                return !(t < 0 && u < 0) || n && isNaN(n) ? 1 : 2
            }
              , c = function(e) {
                this.url = e,
                this.promise_ = null
            };
            Object.defineProperties(c.prototype, {
                promise: {
                    get() {
                        return this.load()
                    },
                    set() {}
                }
            }),
            Object.assign(c.prototype, {
                load() {
                    let e = this.promise_;
                    if (!e) {
                        if (2 === a(this.url))
                            return Promise.resolve(this);
                        const t = new n.ZP((e => {
                            switch (a(e)) {
                            case 0:
                                return e;
                            case 1:
                                return (0,
                                r.getAbsolutePath)(e, window.location.href)
                            }
                        }
                        )(this.url));
                        this.loader = t,
                        e = t.load().then(( () => this)),
                        this.promise_ = e
                    }
                    return e
                },
                registerPlugin(e, t, u) {
                    this.name = e,
                    this.target = t,
                    this.js = u
                },
                getNewInstance(e, t, u) {
                    const n = this.js;
                    if ("function" != typeof n)
                        throw new o.rG(null,(0,
                        s.bX)(this.url) + 100);
                    const r = new n(e,t,u);
                    const i = {
                        type: "pluginInitialized",
                        name: this.name,
                        config: t
                    };
                    return r.addToPlayer = function(e=!1) {
                        const t = this.getContainer().querySelector(".jw-overlays");
                        if (t)
                            return u.left = t.style.left,
                            u.top = t.style.top,
                            t.appendChild(u),
                            e ? this.trigger("pluginInitialized", i) : setTimeout(( () => this.trigger("pluginInitialized", i)), 0),
                            r
                    }
                    ,
                    r.resizeHandler = function() {
                        const e = this.getContainer().querySelector(".jw-overlays");
                        e && r.resize(e.clientWidth, e.clientHeight)
                    }
                    ,
                    r
                }
            });
            const l = c
        }
        ,
        1241: (e, t, u) => {
            "use strict";
            u.d(t, {
                ZP: () => d,
                fo: () => c,
                Ve: () => l
            });
            var n = u(4446)
              , r = u(3487);
            const i = function() {
                this.load = function(e, t, u, i) {
                    return u && "object" == typeof u ? Promise.all(Object.keys(u).filter((e => e)).map((o => {
                        const s = u[o];
                        return t.setupPlugin(o).then((t => {
                            if (!i.attributes._destroyed)
                                return (0,
                                r.MK)(t, s, e)
                        }
                        )).catch((e => (t.removePlugin(o),
                        e.code ? e : new n.rG(null,(0,
                        r.bX)(o),e))))
                    }
                    ))) : Promise.resolve()
                }
            };
            var o = u(4101);
            const s = {};
            const a = new class {
                setupPlugin(e) {
                    const t = this.getPlugin(e);
                    if (t)
                        return t.promise;
                    return this.addPlugin(e).load()
                }
                addPlugin(e) {
                    const t = (0,
                    r.Nq)(e);
                    let u = s[t];
                    return u || (u = new o.Z(e),
                    s[t] = u),
                    u
                }
                getPlugin(e) {
                    return s[(0,
                    r.Nq)(e)]
                }
                removePlugin(e) {
                    delete s[(0,
                    r.Nq)(e)]
                }
                getPlugins() {
                    return s
                }
            }
              , c = function(e, t, u) {
                const n = a.addPlugin(e);
                n.js || n.registerPlugin(e, t, u)
            }
              , l = async (e, t, u) => {
                const n = (0,
                r.Nq)(e)
                  , i = a.getPlugin(n);
                if (i)
                    return u.utils.logger.warn(`'jwplayer/plugins/model JW Plugin "${n}" already loaded from "${i.url}". Ignoring "${e}."`),
                    (0,
                    r.MK)(i, t, u);
                let o = e;
                return n === e && (o = e),
                a.setupPlugin(o).then((e => (0,
                r.MK)(e, t, u)))
            }
            ;
            function d(e, t) {
                const u = e.get("plugins");
                window.jwplayerPluginJsonp = c;
                return (e.pluginLoader = e.pluginLoader || new i).load(t, a, u, e).then((t => {
                    if (!e.attributes._destroyed)
                        return delete window.jwplayerPluginJsonp,
                        t
                }
                ))
            }
        }
        ,
        7164: (e, t, u) => {
            "use strict";
            u.d(t, {
                MK: () => o,
                Nq: () => r,
                bX: () => i
            });
            var n = u(5950);
            const r = function(e) {
                const t = /\/((.(?!\/))+?)\.js/i.exec(e)
                  , u = (null == t ? void 0 : t[1]) || e;
                return u && "jwpsrv-dnt" === u ? "jwpsrv" : u
            }
              , i = e => 305e3
              , o = (e, t, u) => {
                const r = e.name
                  , i = Object.assign({}, t, (0,
                n.vl)(e.url));
                const o = document.createElement("div");
                o.id = `${u.id}_${r}`,
                o.className = "jw-plugin jw-reset";
                const s = e.getNewInstance(u, i, o);
                return u.addPlugin(r, s),
                s
            }
        }
        ,
        7683: (e, t, u) => {
            "use strict";
            u.d(t, {
                V: () => o,
                Z: () => s
            });
            var n = u(658);
            const r = u(8494).Z.logger.child("jwplayer/program/media-element-pool")
              , i = e => {
                e.src || e.load()
            }
              , o = e => {
                const t = document.createElement("video");
                return t.className = "jw-video jw-reset",
                t.setAttribute("tabindex", "-1"),
                t.setAttribute("disableRemotePlayback", ""),
                t.setAttribute("webkit-playsinline", ""),
                t.setAttribute("playsinline", ""),
                e && Object.keys(e).forEach((u => {
                    t.setAttribute(u, e[u])
                }
                )),
                t
            }
            ;
            function s() {
                const e = n.Jx
                  , t = []
                  , u = [];
                for (let n = 0; n < e; n++) {
                    const e = o();
                    t.push(e),
                    u.push(e),
                    i(e)
                }
                const s = u.shift()
                  , a = u.shift();
                let c = !1;
                return {
                    primed: () => c,
                    prime() {
                        t.forEach(i),
                        c = !0
                    },
                    played() {
                        c = !0
                    },
                    getPrimedElement: () => u.shift() || null,
                    getAdElement: () => s,
                    getTestElement: () => a,
                    clean(e) {
                        if (e.src) {
                            e.removeAttribute("src");
                            try {
                                e.load()
                            } catch (e) {
                                r.debug(e)
                            }
                        }
                    },
                    recycle(e) {
                        e && !u.some((t => t === e)) && (this.clean(e),
                        u.push(e))
                    },
                    syncVolume(e) {
                        const u = Math.min(Math.max(0, e / 100), 1);
                        t.forEach((e => {
                            e.volume = u
                        }
                        ))
                    },
                    syncMute(e) {
                        t.forEach((t => {
                            t.muted = e
                        }
                        ))
                    }
                }
            }
        }
        ,
        658: (e, t, u) => {
            "use strict";
            u.d(t, {
                HB: () => i,
                Jx: () => n,
                l_: () => r
            });
            const n = 4
              , r = 5
              , i = 1
        }
        ,
        4609: (e, t, u) => {
            "use strict";
            function n(e, t) {
                return Object.assign({}, t, {
                    prime() {
                        e.src || e.load()
                    },
                    getPrimedElement: () => e,
                    clean() {
                        t.clean(e)
                    },
                    recycle() {
                        t.clean(e)
                    }
                })
            }
            u.d(t, {
                Z: () => n
            })
        }
        ,
        6528: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => a
            });
            var n = u(1643)
              , r = u(1384);
            const i = function() {}
              , o = () => !1
              , s = {
                name: "default"
            }
              , a = {
                supports: o,
                play: i,
                pause: i,
                preload: i,
                load: i,
                stop: i,
                volume: i,
                mute: i,
                seek: i,
                resize: i,
                remove: i,
                destroy: i,
                setVisibility: i,
                setFullscreen(e) {
                    return (0,
                    r.CX)(this, e)
                },
                getFullscreen: o,
                supportsFullscreen: o,
                getContainer: i,
                setContainer: i,
                getName: () => s,
                getQualityLevels: i,
                getCurrentQuality: i,
                setCurrentQuality: i,
                getAudioTracks: i,
                getCurrentAudioTrack: i,
                setCurrentAudioTrack: i,
                getSeekRange() {
                    return {
                        start: 0,
                        end: this.getDuration()
                    }
                },
                setPlaybackRate: i,
                getPlaybackRate: () => 1,
                getBandwidthEstimate: () => null,
                getLiveLatency: () => null,
                attachMedia: i,
                detachMedia: i,
                init: i,
                setState(e) {
                    this.state = e,
                    this.trigger(n.uc, {
                        newstate: e
                    })
                },
                sendMediaType(e) {
                    const {type: t, mimeType: u} = e[0]
                      , r = "aac" === t || "mp3" === t || "mpeg" === t || u && 0 === u.indexOf("audio/");
                    this.trigger(n.oZ, {
                        mediaType: r ? "audio" : "video"
                    })
                },
                getDuration: () => 0,
                trigger: i
            }
        }
        ,
        1628: (e, t, u) => {
            "use strict";
            u.d(t, {
                V: () => r
            });
            var n = u(8348);
            const r = e => "hls" === e.type && n.OS.android ? !1 !== e.androidhls && (!n.Browser.firefox && parseFloat(n.OS.version.version || "0") >= 4.4) : null
        }
        ,
        12: (e, t, u) => {
            "use strict";
            u.d(t, {
                U: () => n
            });
            const n = {}
        }
        ,
        670: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => s
            });
            var n = u(12)
              , r = u(2963)
              , i = u(6528)
              , o = u(6042);
            u(328);
            function s(e) {
                const t = e.getName().name;
                if (!n.U[t]) {
                    if (!(0,
                    o.sE)(r.B, (0,
                    o.wB)({
                        name: t
                    }))) {
                        if (!(0,
                        o.mf)(e.supports))
                            throw new Error("Tried to register a provider with an invalid object");
                        r.B.unshift({
                            name: t,
                            supports: e.supports
                        })
                    }
                    0,
                    (0,
                    o.ce)(e.prototype, i.Z),
                    n.U[t] = e
                }
            }
        }
        ,
        6593: (e, t, u) => {
            "use strict";
            u.d(t, {
                B: () => a,
                H: () => s
            });
            var n = u(1628)
              , r = u(7034)
              , i = u(9025);
            const o = {
                aac: "audio/mp4",
                mp4: "video/mp4",
                f4v: "video/mp4",
                m4v: "video/mp4",
                mov: "video/mp4",
                mp3: "audio/mpeg",
                mpeg: "audio/mpeg",
                ogv: "video/ogg",
                ogg: "video/ogg",
                oga: "video/ogg",
                vorbis: "video/ogg",
                webm: "video/webm",
                f4a: "video/aac",
                m3u8: "application/vnd.apple.mpegurl",
                m3u: "application/vnd.apple.mpegurl",
                hls: "application/vnd.apple.mpegurl"
            }
              , s = e => {
                if (!i.Z || !i.Z.canPlayType)
                    return !1;
                if (!1 === (0,
                n.V)(e))
                    return !1;
                const t = e.file
                  , u = e.type;
                if ((0,
                r.isRtmp)(t, u))
                    return !1;
                let s = e.mimeType || o[u];
                if (!s)
                    return !1;
                const a = e.mediaTypes;
                return null != a && a.length && (s = [s].concat(a.slice()).join("; ")),
                Boolean(i.Z.canPlayType(s))
            }
              , a = [{
                name: "html5",
                supports: s
            }]
        }
        ,
        1384: (e, t, u) => {
            "use strict";
            u.d(t, {
                CX: () => a,
                IP: () => d,
                If: () => s,
                Nm: () => l
            });
            var n = u(1643);
            let r, i, o = !1;
            const s = () => o
              , a = function(e, t) {
                if (t = Boolean(t)) {
                    try {
                        const t = e.video.webkitEnterFullscreen || e.video.webkitEnterFullScreen;
                        t && t.apply(e.video)
                    } catch (e) {
                        return !1
                    }
                    return e.getFullscreen()
                }
                const u = e.video.webkitExitFullscreen || e.video.webkitExitFullScreen;
                return u && u.apply(e.video),
                t
            }
              , c = function(e, t, u) {
                o = u,
                e.trigger(n.h7, {
                    target: t.target,
                    jwstate: u
                })
            }
              , l = function(e, t) {
                r = t => c(e, t, !0),
                i = t => c(e, t, !1),
                t.addEventListener("webkitbeginfullscreen", r),
                t.addEventListener("webkitendfullscreen", i)
            }
              , d = e => {
                e.removeEventListener("webkitbeginfullscreen", r),
                e.removeEventListener("webkitendfullscreen", i)
            }
        }
        ,
        6875: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => n
            });
            const n = "hidden"in document ? function() {
                return !document.hidden
            }
            : "webkitHidden"in document ? function() {
                return !document.webkitHidden
            }
            : function() {
                return !0
            }
        }
        ,
        6886: (e, t, u) => {
            "use strict";
            u.d(t, {
                E: () => s,
                h: () => D
            });
            var n = u(9888)
              , r = u(7034)
              , i = u(4446);
            const o = function() {}
              , s = e => {
                e.onload = null,
                e.onprogress = null,
                e.onreadystatechange = null,
                e.onerror = null,
                "abort"in e && e.abort()
            }
              , a = (e, t, u, n) => {
                e.onerror(t, e.url, e.xhr, new i.rG(t,u,n))
            }
              , c = (e, t, u) => {
                const n = t.documentElement;
                if (!u.requireValidXML || "parsererror" !== n.nodeName && !n.getElementsByTagName("parsererror").length)
                    return e.responseXML || (e = Object.assign({}, e, {
                        responseXML: t
                    })),
                    u.oncomplete(e);
                a(u, i.ul, 601)
            }
              , l = e => function(t) {
                const u = t.currentTarget || e.xhr;
                if (clearTimeout(e.timeoutId),
                e.responseType) {
                    if ("json" === e.responseType)
                        return ( (e, t) => {
                            if (!e.response || "string" == typeof e.response && '"' !== e.responseText.substr(1))
                                try {
                                    e = Object.assign({}, e, {
                                        response: JSON.parse(e.responseText)
                                    })
                                } catch (e) {
                                    return void a(t, i.ul, 611, e)
                                }
                            return t.oncomplete(e)
                        }
                        )(u, e)
                } else {
                    let t, o = u.responseXML;
                    if (o)
                        try {
                            t = o.firstChild
                        } catch (e) {}
                    if (o && t)
                        return c(u, o, e);
                    var r;
                    if (e.useDomParser && u.responseText && !o)
                        if (o = (0,
                        n.parseXML)(u.responseText),
                        null != (r = o) && r.firstChild)
                            return c(u, o, e);
                    if (e.requireValidXML)
                        return void a(e, i.ul, 602)
                }
                e.oncomplete(u)
            }
            ;
            let d;
            const D = (e, t, u, n) => {
                var c;
                let D;
                e === Object(e) && (e = (n = e).url);
                const f = Object.assign({
                    xhr: null,
                    url: e,
                    withCredentials: !1,
                    retryWithoutCredentials: !1,
                    timeout: 6e4,
                    timeoutId: -1,
                    oncomplete: t || o,
                    onerror: u || o,
                    mimeType: n && !n.responseType ? "text/xml" : "",
                    requireValidXML: !1,
                    responseType: null != (c = n) && c.plainText ? "text" : "",
                    useDomParser: !1,
                    requestFilter: null
                }, n)
                  , p = d("Error loading file", f);
                if ("XMLHttpRequest"in window) {
                    if (D = f.xhr = f.xhr || new window.XMLHttpRequest,
                    "function" == typeof f.requestFilter) {
                        let t;
                        try {
                            t = f.requestFilter({
                                url: e,
                                xhr: D
                            })
                        } catch (e) {
                            return p(e, 5),
                            D
                        }
                        t && "open"in t && "send"in t && (D = f.xhr = t)
                    }
                    D.onreadystatechange = (e => function(t) {
                        const u = t.currentTarget || e.xhr;
                        if (4 === u.readyState) {
                            const n = u.status;
                            if (n >= 400)
                                return clearTimeout(e.timeoutId),
                                void a(e, i.ul, n < 600 ? n : 6);
                            if (n >= 200 && n <= 299)
                                return clearTimeout(e.timeoutId),
                                l(e)(t);
                            0 === n && (0,
                            r.isFileProtocol)() && !/^[a-z][a-z0-9+.-]*:/.test(e.url) && (clearTimeout(e.timeoutId),
                            a(e, i.ul, 7))
                        }
                    }
                    )(f),
                    D.onerror = p,
                    "overrideMimeType"in D ? f.mimeType && D.overrideMimeType(f.mimeType) : f.useDomParser = !0;
                    try {
                        e = e.replace(/#.*$/, ""),
                        D.open("GET", e, !0)
                    } catch (e) {
                        return p(e, 3),
                        D
                    }
                    if (f.responseType)
                        try {
                            D.responseType = f.responseType
                        } catch (e) {}
                    f.timeout && (f.timeoutId = setTimeout((function() {
                        s(D),
                        a(f, i.ud, 1)
                    }
                    ), f.timeout),
                    D.onabort = function() {
                        clearTimeout(f.timeoutId)
                    }
                    );
                    try {
                        f.withCredentials && "withCredentials"in D && (D.withCredentials = !0),
                        D.send()
                    } catch (e) {
                        p(e, 4)
                    }
                    return D
                }
                a(f, i.ud, 2)
            }
            ;
            d = (e, t) => function(e, u) {
                const n = e.currentTarget || t.xhr;
                if (clearTimeout(t.timeoutId),
                t.retryWithoutCredentials && t.xhr.withCredentials) {
                    s(n);
                    const e = Object.assign({}, t, {
                        xhr: null,
                        withCredentials: !1,
                        retryWithoutCredentials: !1
                    });
                    D(e)
                } else
                    !u && n.status >= 400 && n.status < 600 && (u = n.status),
                    a(t, u ? i.ul : i.ud, u || 6, e)
            }
        }
        ,
        328: (e, t, u) => {
            "use strict";
            u.d(t, {
                IH: () => d,
                S1: () => D,
                X$: () => f,
                ZP: () => c,
                on: () => l,
                wj: () => p
            });
            var n = u(8494)
              , r = function(e, t) {
                if (null == e)
                    throw new TypeError("Cannot convert undefined or null to object");
                return Object.prototype.hasOwnProperty.call(Object(e), t)
            };
            const i = n.Z.logger.child("jwplayer/utils/backbone.events")
              , o = (e, t, u, n) => {
                let r = -1;
                const o = e.length;
                for (; ++r < o; ) {
                    const o = e[r];
                    if (n)
                        try {
                            o.callback.apply(o.context || u, t)
                        } catch (e) {
                            i.debug(`Error in "${n}" event handler:`, e)
                        }
                    else
                        o.callback.apply(o.context || u, t)
                }
            }
              , s = /\s+/
              , a = (e, t, u, n) => {
                if (!u)
                    return !0;
                if ("object" == typeof u) {
                    for (const i in u)
                        r(u, i) && e[t].apply(e, [i, u[i]].concat(n));
                    return !1
                }
                if (s.test(u)) {
                    const r = u.split(s);
                    for (let u = 0, i = r.length; u < i; u++)
                        e[t].apply(e, [r[u]].concat(n));
                    return !1
                }
                return !0
            }
            ;
            class c {
                on(e, t, u) {
                    if (!a(this, "on", e, [t, u]) || !t)
                        return this;
                    const n = this._events || (this._events = {});
                    return (n[e] || (n[e] = [])).push({
                        callback: t,
                        context: u
                    }),
                    this
                }
                once(e, t, u) {
                    if (!a(this, "once", e, [t, u]) || !t)
                        return this;
                    let n = 0;
                    const r = this
                      , i = function() {
                        n++ || (r.off(e, i),
                        t.apply(this, arguments))
                    };
                    return i._callback = t,
                    this.on(e, i, u)
                }
                off(e, t, u) {
                    if (!this._events || !a(this, "off", e, [t, u]))
                        return this;
                    if (!e && !t && !u)
                        return delete this._events,
                        this;
                    const n = e ? [e] : Object.keys(this._events);
                    for (let r = 0, i = n.length; r < i; r++) {
                        e = n[r];
                        const i = this._events[e];
                        if (i) {
                            const n = this._events[e] = [];
                            if (t || u)
                                for (let e = 0, r = i.length; e < r; e++) {
                                    const r = i[e];
                                    (t && t !== r.callback && t !== r.callback._callback || u && u !== r.context) && n.push(r)
                                }
                            n.length || delete this._events[e]
                        }
                    }
                    return this
                }
                trigger(e, ...t) {
                    if (!this._events)
                        return this;
                    if (!a(this, "trigger", e, t))
                        return this;
                    const u = this._events[e]
                      , n = this._events.all;
                    return u && o(u, t, this),
                    n && o(n, arguments, this),
                    this
                }
                triggerSafe(e, ...t) {
                    if (!this._events)
                        return this;
                    if (!a(this, "trigger", e, t))
                        return this;
                    const u = this._events[e]
                      , n = this._events.all;
                    return u && o(u, t, this, e),
                    n && o(n, arguments, this, e),
                    this
                }
            }
            const l = c.prototype.on
              , d = c.prototype.once
              , D = c.prototype.off
              , f = c.prototype.trigger
              , p = c.prototype.triggerSafe;
            c.on = l,
            c.once = d,
            c.off = D,
            c.trigger = f
        }
        ,
        2268: (e, t, u) => {
            "use strict";
            u.d(t, {
                A: () => d,
                DF: () => c,
                Dt: () => C,
                G6: () => g,
                NO: () => E,
                O7: () => F,
                Q6: () => f,
                cL: () => A,
                dI: () => v,
                gn: () => m,
                i7: () => p,
                id: () => a,
                pZ: () => i,
                tq: () => y,
                un: () => l,
                w1: () => h,
                xb: () => o,
                yS: () => D,
                zc: () => s
            });
            const n = e => null !== navigator.userAgent.match(e)
              , r = () => "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
              , i = () => n(/firefox\//i)
              , o = () => n(/iP(hone|od)/i)
              , s = () => n(/iPad/i) || r()
              , a = () => n(/Macintosh/i) && !r()
              , c = () => n(/FBAV/i)
              , l = () => n(/\sEdge?\/\d+/i)
              , d = () => n(/msie/i)
              , D = () => n(/SMART-TV/)
              , f = () => D() && !n(/SamsungBrowser/)
              , p = () => n(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !l() && !n(/UCBrowser/i)
              , h = () => !n(/\sEdg\/\d+/i) && (l() || n(/trident\/.+rv:\s*11/i) || d())
              , g = () => n(/safari/i) && !n(/(?:Chrome|CriOS|chromium|android|phantom)/i) && !D()
              , m = () => n(/iP(hone|ad|od)/i) || r()
              , C = function() {
                return "boolean" == typeof C.mock_ ? C.mock_ : n(/Android/i) && !n(/Windows Phone/i)
            }
              , F = () => !(n(/chrome\/[123456789]/i) && !n(/chrome\/18/i) && !i()) && C();
            C.mock_ = null;
            const y = () => m() || C() || n(/Windows Phone/i)
              , A = function() {
                if ("boolean" == typeof A.mock_)
                    return A.mock_;
                try {
                    return window.self !== window.top
                } catch (e) {
                    return !0
                }
            };
            A.mock_ = null;
            const E = () => !1
              , v = () => 0
        }
        ,
        8381: (e, t, u) => {
            "use strict";
            u.d(t, {
                $W: () => s,
                Mf: () => c,
                T2: () => l,
                _b: () => a
            });
            var n = u(8518)
              , r = u(2557)
              , i = u(4446);
            const o = e => t => 0 === t.indexOf(e)
              , s = function(e, t) {
                const u = [];
                if (!e || !e.timestamps || !e.timestamps.length)
                    return u;
                const r = e.timestamps.sort(( (e, t) => e.begin - t.begin));
                return r.forEach(( (i, s) => {
                    const a = ( (e, t="en") => {
                        let u = (0,
                        n.G3)();
                        const r = Object.keys(e.title)
                          , i = r[0];
                        for (; !e.title[u]; ) {
                            const e = r.find(o(u));
                            if (e) {
                                u = e;
                                break
                            }
                            const t = u.lastIndexOf("-");
                            if (t <= 0) {
                                u = null;
                                break
                            }
                            u = u.slice(0, t)
                        }
                        return u || (r.indexOf(t) >= 0 ? t : i)
                    }
                    )(i, e.defaultLanguage)
                      , c = i.title[a]
                      , l = i.time
                      , d = i.image;
                    let D = t;
                    s + 1 < r.length && (D = r[s + 1].time);
                    const f = {
                        begin: l,
                        end: D,
                        text: c,
                        cueType: "chapters"
                    };
                    d && (f.image = d),
                    u.push(f)
                }
                )),
                u
            }
              , a = function(e, t) {
                const u = (0,
                n.G3)()
                  , i = e.reduce((function(e, t) {
                    if (!t || !t.cueType || "chapters" === t.cueType) {
                        const n = new r.u({
                            time: t.begin,
                            image: t.image
                        });
                        n.addTitle(u, t.text),
                        e.push(n)
                    }
                    return e
                }
                ), []);
                return t ? (t.timestamps = i,
                t) : new r.t(u,i)
            }
              , c = function(e, t) {
                if ("number" != typeof e || e < 0 || !t || !t.length)
                    return null;
                let u = null;
                for (let n = 0; n < t.length; n++) {
                    const r = t[n];
                    r.time > e || (!u || r.time > u.time) && (u = r)
                }
                return u
            }
              , l = function(e, t) {
                let u = !0;
                return e.forEach((e => {
                    if (!e)
                        return;
                    if (!e.defaultLanguage || !e.timestamps)
                        return void (u = !1);
                    e.timestamps.some((e => !e.title || null === e.time || void 0 === e.time)) && (u = !1)
                }
                )),
                t(u ? null : (0,
                i.l9)(new Error, i.aD))
            }
        }
        ,
        974: (e, t, u) => {
            "use strict";
            u.d(t, {
                HY: () => m,
                iv: () => d,
                oB: () => l,
                oI: () => s,
                vs: () => D
            });
            var n = u(2957)
              , r = u(9563)
              , i = u.n(r)
              , o = function(e, t) {
                if (null == e)
                    throw new TypeError("Cannot convert undefined or null to object");
                return Object.prototype.hasOwnProperty.call(Object(e), t)
            };
            const s = i().clear
              , a = e => {
                e = e.split("-");
                for (let t = 1; t < e.length; t++)
                    e[t] = e[t].charAt(0).toUpperCase() + e[t].slice(1);
                return e.join("")
            }
              , c = (e, t) => "" === t || null == t ? "" : "string" == typeof t && isNaN(t) ? /png|gif|jpe?g/i.test(t) && t.indexOf("url") < 0 ? `url(${t})` : t : 0 === t || "z-index" === e || "opacity" === e ? `${t}` : /color/i.test(e) ? `#${(0,
            n.vk)(t.toString(16).replace(/^0x/i, ""), 6)}` : `${Math.ceil(t)}px`
              , l = (e, t) => {
                if (null == e)
                    return;
                let u;
                void 0 === e.length && (e = [e]);
                const n = {};
                for (u in t)
                    o(t, u) && (n[u] = c(u, t[u]));
                for (let t = 0; t < e.length; t++) {
                    const r = e[t];
                    let i;
                    if (null != r)
                        for (u in n)
                            o(n, u) && (i = a(u),
                            r.style[i] !== n[u] && (r.style[i] = n[u]))
                }
            }
              , d = (e, t, u, n) => {
                u = u || "all-players";
                let r = "";
                if ("object" == typeof t) {
                    const e = document.createElement("div");
                    l(e, t);
                    let u = e.style.cssText;
                    o(t, "content") && u && (u = `${u} content: "${t.content}";`),
                    n && u && (u = u.replace(/;/g, " !important;")),
                    r = `{${u}}`
                } else
                    "string" == typeof t && (r = t);
                "" !== r && "{}" !== r ? i().style([[e, e + r]], u) : i().clear(u, e)
            }
              , D = (e, t) => {
                l(e, {
                    transform: t
                })
            }
              , f = {
                A: {
                    L: "F0F8FF",
                    N: "FAEBD7",
                    Q: {
                        $: 2,
                        _: "00FFFF",
                        M: "7FFFD4"
                    },
                    Z: "F0FFFF"
                },
                B: {
                    E: "F5F5DC",
                    I: "FFE4C4",
                    L: {
                        A: {
                            C: "000000",
                            N: "FFEBCD"
                        },
                        U: {
                            $: 1,
                            _: "0000FF",
                            V: "8A2BE2"
                        }
                    },
                    R: "A52A2A",
                    U: "DEB887"
                },
                C: {
                    A: "5F9EA0",
                    H: {
                        A: "7FFF00",
                        O: "D2691E"
                    },
                    O: {
                        $: 1,
                        A: "FF7F50",
                        N: {
                            F: "6495ED",
                            S: "FFF8DC"
                        }
                    },
                    R: "DC143C",
                    Y: "00FFFF"
                },
                D: {
                    A: {
                        $: 2,
                        B: "00008B",
                        C: "008B8B",
                        G: {
                            O: "B8860B",
                            R: {
                                A: "A9A9A9",
                                E: "006400"
                            }
                        },
                        K: "BDB76B",
                        M: "8B008B",
                        O: {
                            L: "556B2F",
                            R: {
                                A: "FF8C00",
                                C: "9932CC"
                            }
                        },
                        R: "8B0000",
                        S: {
                            A: "E9967A",
                            E: "8FBC8B",
                            L: {
                                $: 3,
                                B: "483D8B",
                                G: "2F4F4F"
                            }
                        },
                        T: "00CED1",
                        V: "9400D3"
                    },
                    E: {
                        $: 2,
                        P: "FF1493",
                        S: "00BFFF"
                    },
                    I: "696969",
                    O: "1E90FF"
                },
                F: {
                    I: "B22222",
                    L: "FDF5E6",
                    O: "228B22",
                    U: "FF00FF"
                },
                G: {
                    A: "DCDCDC",
                    H: "F8F8FF",
                    O: {
                        $: 2,
                        _: "FFD700",
                        E: "DAA520"
                    },
                    R: {
                        A: "808080",
                        E: {
                            $: 2,
                            _: "008000",
                            Y: "ADFF2F"
                        }
                    }
                },
                H: {
                    $: 1,
                    N: "F0FFF0",
                    T: "FF69B4"
                },
                I: {
                    N: {
                        $: 2,
                        A: "CD5C5C",
                        G: "4B0082"
                    },
                    V: "FFFFF0"
                },
                K: "F0E68C",
                L: {
                    A: {
                        V: {
                            $: 5,
                            _: "E6E6FA",
                            B: "FFF0F5"
                        },
                        W: "7CFC00"
                    },
                    E: "FFFACD",
                    I: {
                        G: {
                            $: 2,
                            B: "ADD8E6",
                            C: {
                                O: "F08080",
                                Y: "E0FFFF"
                            },
                            G: {
                                O: "FAFAD2",
                                R: {
                                    A: "D3D3D3",
                                    E: "90EE90"
                                }
                            },
                            P: "FFB6C1",
                            S: {
                                A: "FFA07A",
                                E: "20B2AA",
                                K: "87CEFA",
                                L: "778899",
                                T: "B0C4DE"
                            },
                            Y: "FFFFE0"
                        },
                        M: {
                            $: 1,
                            _: "00FF00",
                            G: "32CD32"
                        },
                        N: "FAF0E6"
                    }
                },
                M: {
                    A: {
                        G: "FF00FF",
                        R: "800000"
                    },
                    E: {
                        $: 4,
                        A: "66CDAA",
                        B: "0000CD",
                        O: "BA55D3",
                        P: "9370DB",
                        S: {
                            E: "3CB371",
                            L: "7B68EE",
                            P: "00FA9A"
                        },
                        T: "48D1CC",
                        V: "C71585"
                    },
                    I: {
                        D: "191970",
                        N: "F5FFFA",
                        S: "FFE4E1"
                    },
                    O: "FFE4B5"
                },
                N: {
                    $: 2,
                    A: "FFDEAD",
                    Y: "00008B"
                },
                O: {
                    L: {
                        D: "FDF5E6",
                        I: {
                            $: 2,
                            _: "808000",
                            D: "6B8E23"
                        }
                    },
                    R: {
                        A: {
                            $: 3,
                            _: "FFA500",
                            R: "FF4500"
                        },
                        C: "DA70D6"
                    }
                },
                P: {
                    A: {
                        L: {
                            $: 1,
                            G: {
                                O: "EEE8AA",
                                R: "98FB98"
                            },
                            T: "AFEEEE",
                            V: "DB7093"
                        },
                        P: "FFEFD5"
                    },
                    E: {
                        A: "FFDAB9",
                        R: "CD853F"
                    },
                    I: "FFC0CB",
                    L: "DDA0DD",
                    O: "B0E0E6",
                    U: "800080"
                },
                R: {
                    E: {
                        B: "663399",
                        D: "FF0000"
                    },
                    O: {
                        S: "BC8F8F",
                        Y: "4169E1"
                    }
                },
                S: {
                    A: {
                        D: "8B4513",
                        L: "FA8072",
                        N: "F4A460"
                    },
                    E: {
                        $: 1,
                        G: "2E8B57",
                        S: "FFF5EE"
                    },
                    I: {
                        E: "A0522D",
                        L: "C0C0C0"
                    },
                    K: "87CEEB",
                    L: {
                        $: 3,
                        B: "6A5ACD",
                        G: "708090"
                    },
                    N: "FFFAFA",
                    P: "00FF7F",
                    T: "4682B4"
                },
                T: {
                    A: "D2B48C",
                    E: "008080",
                    H: "D8BFD8",
                    O: "FF6347",
                    U: "40E0D0"
                },
                V: "EE82EE",
                W: {
                    $: 1,
                    E: "F5DEB3",
                    I: {
                        $: 2,
                        _: "FFFFFF",
                        S: "F5F5F5"
                    }
                },
                Y: {
                    $: 5,
                    _: "FFFF00",
                    G: "9ACD32"
                }
            }
              , p = e => parseInt(e, 16)
              , h = (e, t) => `${e}(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`
              , g = [{
                name: "extended hash-hex",
                test: /^#?[0-9a-f]{8}$/i,
                extract: /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i,
                map: p,
                alpha: !0
            }, {
                name: "standard hash-hex",
                test: /^#?[0-9a-f]{6}$/i,
                extract: /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i,
                map: p
            }, {
                name: "short hash-hex",
                test: /^#?[0-9a-f]{3}$/i,
                extract: /^#?([0-9a-f])([0-9a-f])([0-9a-f])/i,
                map: e => 17 * parseInt(e, 16)
            }]
              , m = (e, t, u=!1) => {
                var n;
                e = "string" == typeof e ? e.trim() : "#000000";
                let r = "rgba"
                  , i = ["0", "0", "0", "1"];
                const o = (t = "number" == typeof t ? t : 100) / 100;
                if (/^\w+\(/i.test(e))
                    return r = /^(\w+)\(/i.exec(e)[1],
                    i = /^\w+\(([^),]+),\s*([^,)]+),\s*([^,)]+),?\s*([^),]*)\)/i.exec(e).slice(1),
                    3 === r.length && (r += "a"),
                    u && i[3].length ? i[3] *= o : i[3] = o,
                    h(r, i);
                e = null != (n = (e => {
                    let t = 0
                      , u = f;
                    for (; u && t < e.length; ) {
                        if (u = u[e[t]],
                        t++,
                        !u)
                            return null;
                        if ("string" == typeof u)
                            return u;
                        if (u.$ && (t += u.$),
                        t === e.length && u._)
                            return u._
                    }
                    return null
                }
                )(e = e.toUpperCase().replace("GREY", "GRAY"))) ? n : e;
                for (let t = 0; t < g.length; t++) {
                    const n = g[t];
                    if (n.test.test(e))
                        return i = n.extract.exec(e).slice(1).map(n.map),
                        u && n.alpha ? i[3] = i[3] / 255 * o : i[3] = o,
                        h(r, i)
                }
                return h(r, i)
            }
        }
        ,
        5004: (e, t, u) => {
            "use strict";
            u.d(t, {
                z: () => n
            });
            const n = Date.now || function() {
                return (new Date).getTime()
            }
        }
        ,
        2799: (e, t, u) => {
            "use strict";
            u.d(t, {
                A8: () => B,
                AH: () => j,
                EU: () => f,
                FK: () => h,
                IV: () => y,
                L_: () => A,
                P$: () => v,
                SH: () => k,
                UM: () => O,
                Ww: () => x,
                az: () => D,
                bJ: () => d,
                cS: () => w,
                cn: () => F,
                gB: () => l,
                i3: () => P,
                kq: () => b,
                nG: () => S,
                nh: () => p,
                oH: () => a,
                og: () => E,
                pv: () => s,
                s1: () => C
            });
            var n = u(2957)
              , r = u(6042)
              , i = u(8348)
              , o = u(8494);
            const s = (e, t) => e.classList.contains(t)
              , a = e => {
                const t = e.querySelectorAll("script,object,iframe,meta");
                for (let e = t.length; e--; ) {
                    const u = t[e];
                    u.parentNode.removeChild(u)
                }
                return e
            }
              , c = /^((((https?):\/\/)|(mailto:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/
              , l = e => {
                const t = e.attributes;
                for (let u = t.length; u--; ) {
                    const n = t[u].name
                      , r = t[u].value;
                    /^\s*(javascript(:|&colon;))/.test(r) && (e.removeAttribute(n),
                    o.Z.logger.warn("jwplayer/utils/dom: Invalid or unsafe URL")),
                    /^on/.test(n) && e.removeAttribute(n)
                }
                return e
            }
              , d = e => {
                const t = (e => {
                    const t = document.createElement("div");
                    return t.innerHTML = null == e || null == e.trim ? void 0 : e.trim(),
                    t
                }
                )(e);
                a(t);
                const u = t.querySelectorAll("*");
                for (let e = u.length; e--; ) {
                    const t = u[e];
                    l(t)
                }
                return t
            }
              , D = e => d(e).firstChild
              , f = e => {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild)
            }
              , p = (e, t) => {
                f(e),
                ( (e, t) => {
                    if (!t)
                        return;
                    const u = d(t).childNodes;
                    for (let t = 0; t < u.length; t++)
                        e.appendChild(u[t].cloneNode(!0))
                }
                )(e, t)
            }
              , h = e => e + (e.toString().indexOf("%") > 0 ? "" : "px")
              , g = e => (0,
            r.HD)(e.className) ? e.className.split(" ") : []
              , m = (e, t) => {
                t = (0,
                n.fy)(t),
                e.className !== t && (e.className = t)
            }
              , C = e => e.classList ? e.classList : g(e)
              , F = (e, t) => {
                const u = g(e);
                (Array.isArray(t) ? t : t.split(" ")).forEach((function(e) {
                    (0,
                    r.r3)(u, e) || u.push(e)
                }
                )),
                m(e, u.join(" "))
            }
              , y = (e, t) => {
                const u = g(e)
                  , n = Array.isArray(t) ? t : t.split(" ");
                m(e, (0,
                r.e5)(u, n).join(" "))
            }
              , A = (e, t, u) => {
                let n = e.className || "";
                t.test(n) ? n = n.replace(t, u) : u && (n += ` ${u}`),
                m(e, n)
            }
              , E = (e, t, u) => {
                const n = s(e, t);
                (u = (0,
                r.jn)(u) ? u : !n) !== n && (u ? F(e, t) : y(e, t))
            }
              , v = (e, t, u) => {
                e.setAttribute(t, u)
            }
              , b = e => {
                const t = document.createElement("link");
                t.rel = "stylesheet",
                t.href = e,
                document.getElementsByTagName("head")[0].appendChild(t)
            }
              , w = e => {
                e && f(e)
            }
              , B = e => {
                const t = {
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0,
                    top: 0,
                    bottom: 0
                };
                if (!e || !document.body.contains(e))
                    return t;
                const u = e.getBoundingClientRect()
                  , n = window.pageYOffset
                  , r = window.pageXOffset;
                return u.width || u.height || u.left || u.top ? (t.left = u.left + r,
                t.right = u.right + r,
                t.top = u.top + n,
                t.bottom = u.bottom + n,
                t.width = u.right - u.left,
                t.height = u.bottom - u.top,
                t) : t
            }
              , k = (e, t) => {
                e.insertBefore(t, e.firstChild)
            }
              , j = e => e.nextElementSibling
              , P = e => e.previousElementSibling
              , S = (e, t, u={}, n=document) => {
                if (!c.test(e))
                    return;
                let r = n.createElement("a");
                r.href = e,
                r.target = t,
                r = l(Object.assign(r, u)),
                i.Browser.firefox ? r.dispatchEvent(new MouseEvent("click",{
                    bubbles: !0,
                    cancelable: !0,
                    view: window
                })) : r.click()
            }
              , O = () => {
                const e = window.screen.orientation;
                return !!e && ("landscape-primary" === e.type || "landscape-secondary" === e.type) || 90 === window.orientation || -90 === window.orientation
            }
              , x = e => (e => {
                const t = document.createElement("textarea");
                return t.innerHTML = e,
                t.value
            }
            )(e).replace(/&|<|>|"|''/gm, (function(e) {
                return `&#${e.charCodeAt(0)};`
            }
            )).replace(/&#60;(\/?)(b|strong|i|em|p|br|ul|ol|li|h.)&#62;/gim, "<$1$2>")
        }
        ,
        8494: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => A
            });
            var n = u(1569)
              , r = u(7034)
              , i = u(9888)
              , o = u(2957)
              , s = u(7411)
              , a = u(4742);
            const c = function(e, t) {
                this.name = e,
                this.message = t.message || t.toString(),
                this.error = t
            };
            var l = u(6042)
              , d = u(2268)
              , D = u(2799)
              , f = u(974)
              , p = u(6886)
              , h = u(1261);
            const g = "function" == typeof console.log ? console.log.bind(console) : () => {}
            ;
            var m = u(6234)
              , C = u(8762)
              , F = function(e, t) {
                if (null == e)
                    throw new TypeError("Cannot convert undefined or null to object");
                return Object.prototype.hasOwnProperty.call(Object(e), t)
            };
            const y = new C.Z("helpers");
            const A = Object.assign({}, i, r, n, {
                logger: y,
                addClass: D.cn,
                hasClass: D.pv,
                removeClass: D.IV,
                replaceClass: D.L_,
                toggleClass: D.og,
                classList: D.s1,
                styleDimension: D.FK,
                createElement: D.az,
                emptyElement: D.EU,
                addStyleSheet: D.kq,
                bounds: D.A8,
                openLink: D.nG,
                replaceInnerHtml: D.nh,
                css: f.iv,
                clearCss: f.oI,
                style: f.oB,
                transform: f.vs,
                getRgba: f.HY,
                ajax: p.h,
                crossdomain: e => {
                    const t = window.URL;
                    try {
                        const u = new t(e,location.origin);
                        return `${location.protocol}//${location.host}` != `${u.protocol}//${u.host}`
                    } catch (e) {
                        y.debug(e)
                    }
                    return !0
                }
                ,
                tryCatch: function(e, t, u=[]) {
                    if (a.Z.debug)
                        return e.apply(t || this, u);
                    try {
                        return e.apply(t || this, u)
                    } catch (t) {
                        return new c(e.name,t)
                    }
                },
                Error: c,
                Timer: s.Z,
                log: g,
                genId: m.B,
                between: h.v,
                foreach: function(e, t) {
                    for (const u in e)
                        F(e, u) && t(u, e[u])
                },
                flashVersion: d.dI,
                isIframe: d.cL,
                indexOf: l.cq,
                trim: o.fy,
                pad: o.vk,
                extension: o.AO,
                hms: o.WZ,
                seconds: o.m9,
                prefix: o.O4,
                suffix: o.uA,
                noop: () => {}
            })
        }
        ,
        7543: (e, t, u) => {
            "use strict";
            u.d(t, {
                C: () => n
            });
            const n = e => !!(e = e || window.event) && (Boolean(e) && /^(?:mouse|pointer|touch|gesture|click|key)/.test(e.type))
        }
        ,
        8762: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => s
            });
            var n = u(1142);
            const r = {
                debug: 0,
                info: 100,
                warn: 200,
                error: 400
            }
              , i = e => {
                var t;
                switch (typeof e) {
                case "object":
                    return (e => {
                        if (null === e)
                            return "null";
                        let t = "";
                        try {
                            t += n.stringify(e, null, "  ")
                        } catch (e) {
                            t += "{error stringifying value}"
                        }
                        return t
                    }
                    )(e);
                case "undefined":
                    return "undefined";
                default:
                    return null != (t = null == e.toString ? void 0 : e.toString()) ? t : "{error stringifying value}"
                }
            }
            ;
            class o {
                constructor(e, t=r) {
                    this._namespace = e,
                    this._levels = t
                }
                child(e) {
                    return new o(`${this._namespace}/${e}`,this._levels)
                }
                _log(e, t, ...u) {
                    try {
                        e >= o.LOG_LEVEL && console[t](`[${this._namespace}]:`, ...u),
                        o.LOG_HISTORY.length >= o.MAX_LOG_HISTORY && o.LOG_HISTORY.shift(),
                        o.LOG_HISTORY.push([new Date, t.toUpperCase(), this._namespace, u.map(i).join("\n")])
                    } catch (e) {
                        console.error(e)
                    }
                }
                trace(...e) {
                    this._log(this._levels.debug, "trace", ...e)
                }
                debug(...e) {
                    this._log(this._levels.debug, "debug", ...e)
                }
                log(...e) {
                    this._log(this._levels.info, "log", ...e)
                }
                info(...e) {
                    this._log(this._levels.info, "info", ...e)
                }
                warn(...e) {
                    this._log(this._levels.warn, "warn", ...e)
                }
                error(...e) {
                    this._log(this._levels.error, "error", ...e)
                }
                get history() {
                    return [...o.LOG_HISTORY]
                }
            }
            o.LOG_LEVEL = 400,
            o.MAX_LOG_HISTORY = 200,
            o.LOG_HISTORY = [];
            const s = o
        }
        ,
        8518: (e, t, u) => {
            "use strict";
            u.d(t, {
                Cq: () => m,
                Dq: () => B,
                G3: () => F,
                Mh: () => j,
                Pm: () => b,
                dl: () => w,
                id: () => g,
                q2: () => E,
                t6: () => A,
                tK: () => h
            });
            var n = u(6042)
              , r = u(2268)
              , i = u(6886)
              , o = u(7034)
              , s = u(696)
              , a = u(8494);
            const {logger: c} = a.Z
              , l = {}
              , d = {
                aa: "Afar",
                ab: "Abkhazian",
                ae: "Avestan",
                af: "Afrikaans",
                ak: "Akan",
                am: "Amharic",
                ar: "Arabic",
                an: "Aragonese",
                as: "Assamese",
                av: "Avaric",
                ay: "Aymara",
                az: "Azerbaijani",
                ba: "Bashkir",
                be: "Belarusian",
                bg: "Bulgarian",
                bh: "Bihari languages",
                bi: "Bislama",
                bm: "Bambara",
                bn: "Bengali",
                bo: "Tibetan",
                br: "Breton",
                bs: "Bosnian",
                ca: "Catalan",
                ce: "Chechen",
                ch: "Chamorro",
                co: "Corsican",
                cr: "Cree",
                cs: "Czech",
                cu: "Church Slavic",
                cv: "Chuvash",
                cy: "Welsh",
                da: "Danish",
                de: "German",
                dv: "Divehi",
                dz: "Dzongkha",
                ee: "Ewe",
                el: "Greek",
                en: "English",
                eo: "Esperanto",
                es: "Spanish",
                et: "Estonian",
                eu: "Basque",
                fa: "Persian",
                ff: "Fulah",
                fi: "Finnish",
                fj: "Fijian",
                fo: "Faroese",
                fr: "French",
                fy: "Western Frisian",
                ga: "Irish",
                gd: "Gaelic",
                gl: "Galician",
                gn: "Guarani",
                gu: "Gujarati",
                gv: "Manx",
                ha: "Hausa",
                he: "Hebrew",
                hi: "Hindi",
                ho: "Hiri Motu",
                hr: "Croatian",
                ht: "Haitian",
                hu: "Hungarian",
                hy: "Armenian",
                hz: "Herero",
                ia: "Interlingua",
                id: "Indonesian",
                ie: "Interlingue",
                ig: "Igbo",
                ii: "Sichuan Yi",
                ik: "Inupiaq",
                io: "Ido",
                is: "Icelandic",
                it: "Italian",
                iu: "Inuktitut",
                ja: "Japanese",
                jv: "Javanese",
                ka: "Georgian",
                kg: "Kongo",
                ki: "Kikuyu",
                kj: "Kuanyama",
                kk: "Kazakh",
                kl: "Kalaallisut",
                km: "Central Khmer",
                kn: "Kannada",
                ko: "Korean",
                kr: "Kanuri",
                ks: "Kashmiri",
                ku: "Kurdish",
                kv: "Komi",
                kw: "Cornish",
                ky: "Kirghiz",
                la: "Latin",
                lb: "Luxembourgish",
                lg: "Ganda",
                li: "Limburgan",
                lo: "Lao",
                ln: "Lingala",
                lt: "Lithuanian",
                lu: "Luba-Katanga",
                lv: "Latvian",
                mg: "Malagasy",
                mh: "Marshallese",
                mi: "Maori",
                mk: "Macedonian",
                ml: "Malayalam",
                mn: "Mongolian",
                mr: "Marathi",
                ms: "Malay",
                mt: "Maltese",
                my: "Burmese",
                na: "Nauru",
                nb: "Bokmål",
                nd: "Ndebele",
                ne: "Nepali",
                ng: "Ndonga",
                nl: "Dutch",
                nn: "Norwegian Nynorsk",
                no: "Norwegian",
                nr: "Ndebele",
                nv: "Navajo",
                ny: "Chichewa",
                oc: "Occitan",
                oj: "Ojibwa",
                om: "Oromo",
                or: "Oriya",
                os: "Ossetian",
                pa: "Panjabi",
                pi: "Pali",
                pl: "Polish",
                pt: "Portuguese",
                ps: "Pushto",
                qu: "Quechua",
                rm: "Romansh",
                rn: "Rundi",
                ro: "Romanian",
                ru: "Russian",
                rw: "Kinyarwanda",
                sa: "Sanskrit",
                sc: "Sardinian",
                sd: "Sindhi",
                se: "Northern Sami",
                sg: "Sango",
                si: "Sinhala",
                sk: "Slovak",
                sl: "Slovenian",
                sm: "Samoan",
                sn: "Shona",
                so: "Somali",
                sq: "Albanian",
                sr: "Serbian",
                ss: "Swati",
                st: "Sotho",
                su: "Sundanese",
                sw: "Swahili",
                sv: "Swedish",
                ta: "Tamil",
                te: "Telugu",
                tg: "Tajik",
                th: "Thai",
                ti: "Tigrinya",
                tk: "Turkmen",
                tl: "Tagalog",
                tn: "Tswana",
                to: "Tonga",
                tr: "Turkish",
                ts: "Tsonga",
                tt: "Tatar",
                tw: "Twi",
                ty: "Tahitian",
                ug: "Uighur",
                uk: "Ukrainian",
                ur: "Urdu",
                uz: "Uzbek",
                ve: "Venda",
                vi: "Vietnamese",
                vo: "Volapük",
                wa: "Walloon",
                wo: "Wolof",
                xh: "Xhosa",
                yi: "Yiddish",
                yo: "Yoruba",
                za: "Zhuang",
                zh: "Chinese",
                "zh-tw": "Traditional Chinese",
                zu: "Zulu"
            }
              , D = (0,
            n.U_)(d)
              , f = e => e.toLowerCase().replace("-", "_")
              , p = e => {
                if (e = e.toLowerCase(),
                d[e])
                    return e;
                const t = f(e).lastIndexOf("_");
                if (-1 === t)
                    return e;
                const u = e.substring(0, t);
                return p(u)
            }
              , h = e => e ? Object.keys(e).reduce(( (t, u) => (t[f(u)] = e[u],
            t)), {}) : {}
              , g = e => {
                if (e)
                    return 3 === e.length ? e : d[p(e)] || e
            }
              , m = e => D[e] || ""
              , C = e => {
                const t = e.querySelector("html");
                return t ? t.getAttribute("lang") : null
            }
              , F = function() {
                if ("string" == typeof F.mock_)
                    return F.mock_;
                let e = C(document);
                if (!e && (0,
                r.cL)())
                    try {
                        e = C(window.top.document)
                    } catch (e) {
                        c.child("jwplayer/utils/language").debug(e)
                    }
                return e || navigator.language || "en"
            };
            F.mock_ = null;
            const y = ["ar", "da", "de", "el", "es", "fi", "fr", "he", "id", "it", "ja", "ko", "nb", "nl", "nn", "no", "oc", "pt", "ro", "ru", "sl", "sv", "th", "tr", "vi", "zh-tw", "zh"]
              , A = e => 8207 === e.charCodeAt(0) || /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(e)
              , E = function(e) {
                return "boolean" == typeof E.mock_ ? E.mock_ : y.indexOf(p(e)) >= 0
            };
            E.mock_ = null;
            const v = (e, t, u) => {
                const n = e[u] || t[u];
                n && (e[u] = n)
            }
              , b = (e, t, u) => Object.assign({}, (e => {
                const {advertising: t, related: u, sharing: n, abouttext: r} = e
                  , i = Object.assign({}, e.localization);
                t && (i.advertising = i.advertising || {},
                v(i.advertising, t, "admessage"),
                v(i.advertising, t, "cuetext"),
                v(i.advertising, t, "loadingAd"),
                v(i.advertising, t, "podmessage"),
                v(i.advertising, t, "skipmessage"),
                v(i.advertising, t, "skiptext")),
                "string" == typeof i.related ? i.related = {
                    heading: i.related
                } : i.related = i.related || {},
                u && v(i.related, u, "autoplaymessage"),
                n && (i.sharing = i.sharing || {},
                v(i.sharing, n, "heading"),
                v(i.sharing, n, "copied")),
                r && v(i, e, "abouttext");
                const o = i.close || i.nextUpClose;
                return o && (i.close = o),
                i
            }
            )(e), t[p(u)], t[f(u)])
              , w = function(e) {
                return "boolean" == typeof w.mock_ ? w.mock_ : (0,
                o.isDeepKeyCompliant)(s.Z, e, ( (e, t) => "string" == typeof t[e]))
            };
            w.mock_ = null;
            const B = function(e, t) {
                if ("function" == typeof B.mock_)
                    return B.mock_();
                let u = l[t];
                if (!u) {
                    const r = `${e}translations/${n = p(t),
                    /^n[bn]$/.test(n) ? "no" : n}.json`;
                    l[t] = u = new Promise(( (e, u) => {
                        (0,
                        i.h)({
                            url: r,
                            oncomplete: e,
                            onerror: (e, n, r, i) => {
                                l[t] = null,
                                u(i)
                            }
                            ,
                            responseType: "json"
                        })
                    }
                    ))
                }
                var n;
                return u
            };
            B.mock_ = null;
            const k = (e, t, u, n) => {
                e[t] = Object.assign({}, s.Z[t], u[t], n[t])
            }
              , j = (e, t) => {
                const u = Object.assign({}, s.Z, e, t);
                return k(u, "errors", e, t),
                k(u, "related", e, t),
                k(u, "sharing", e, t),
                k(u, "advertising", e, t),
                k(u, "shortcuts", e, t),
                k(u, "captionsStyles", e, t),
                u
            }
        }
        ,
        1261: (e, t, u) => {
            "use strict";
            u.d(t, {
                v: () => n
            });
            const n = function(e, t, u) {
                return Math.max(Math.min(e, u), t)
            }
        }
        ,
        9888: (e, t, u) => {
            "use strict";
            u.r(t),
            u.d(t, {
                getAbsolutePath: () => o,
                isAbsolutePath: () => i,
                parseDimension: () => c,
                parseXML: () => s,
                serialize: () => a,
                timeFormat: () => l,
                timeFormatAria: () => d
            });
            var n = u(6042)
              , r = u(5950);
            const i = e => /^(?:(?:https?|file):)?\/\//.test(e)
              , o = (e, t) => (0,
            r.kd)(e, t)
              , s = e => {
                let t = null;
                try {
                    t = (new window.DOMParser).parseFromString(e, "text/xml"),
                    t.querySelector("parsererror") && (t = null)
                } catch (e) {}
                return t
            }
              , a = e => {
                if (void 0 === e)
                    return null;
                if ("string" == typeof e && e.length < 6) {
                    const t = e.toLowerCase();
                    if ("true" === t)
                        return !0;
                    if ("false" === t)
                        return !1;
                    if (!(0,
                    n.i2)(Number(e)) && !(0,
                    n.i2)(parseFloat(e)))
                        return Number(e)
                }
                return e
            }
              , c = e => (0,
            n.qh)(e) ? e : "" === e ? 0 : e.lastIndexOf("%") > -1 ? e : parseInt(e.replace("px", ""), 10)
              , l = (e, t) => {
                if ((0,
                n.i2)(e) && (e = parseInt(e.toString(), 10)),
                (0,
                n.i2)(e) || !isFinite(e) || e <= 0 && !t)
                    return "00:00";
                const u = e < 0 ? "-" : "";
                e = Math.abs(e);
                const r = Math.floor(e / 3600)
                  , i = Math.floor((e - 3600 * r) / 60)
                  , o = Math.floor(e % 60);
                return `${u + (r ? `${r}:` : "") + (i < 10 ? "0" : "") + i}:${o < 10 ? "0" : ""}${o}`
            }
              , d = e => {
                if ((0,
                n.i2)(e) && (e = parseInt(e.toString(), 10)),
                (0,
                n.i2)(e) || !isFinite(e) || e <= 0)
                    return "0 seconds";
                const t = Math.floor(e / 3600)
                  , u = Math.floor((e - 3600 * t) / 60)
                  , r = Math.floor(e % 60);
                return (t ? t + (t >= 1 ? ` hour${t > 1 ? "s" : ""}, ` : "") : "") + (u ? u + (u >= 1 ? ` minute${u > 1 ? "s" : ""}, ` : "") : "") + r + (r >= 1 ? " second" + (r > 1 ? "s" : "") : "")
            }
        }
        ,
        1569: (e, t, u) => {
            "use strict";
            u.r(t),
            u.d(t, {
                getScriptPath: () => i,
                loadFrom: () => a,
                repo: () => o,
                versionCheck: () => s
            });
            var n = u(6601)
              , r = u(7034);
            const i = function(e) {
                {
                    const t = document.getElementsByTagName("script");
                    for (let u = 0; u < t.length; u++) {
                        const n = t[u].src;
                        if (n) {
                            const t = n.lastIndexOf(`/${e}`);
                            if (t >= 0)
                                return n.substr(0, t + 1)
                        }
                    }
                }
                return ""
            }
              , o = function() {
                const e = "//ssl.p.jwpcdn.com/player/v/8.36.3";
                return `${e && (0,
                r.isFileProtocol)() ? "https:" : ""}${e}`
            }
              , s = function(e) {
                const t = `0${e}`.split(/\W/)
                  , u = n.i.split(/\W/)
                  , r = parseFloat(t[0])
                  , i = parseFloat(u[0]);
                return !(r > i) && !(r === i && parseFloat(`0${t[1]}`) > parseFloat(u[1]))
            }
              , a = function() {
                return o()
            }
        }
        ,
        6234: (e, t, u) => {
            "use strict";
            u.d(t, {
                B: () => o,
                F: () => r
            });
            var n = u(8494);
            const r = 12
              , i = () => {
                try {
                    const e = window.crypto || window.msCrypto;
                    if (null != e && e.getRandomValues)
                        return e.getRandomValues(new Uint32Array(1))[0].toString(36)
                } catch (e) {
                    n.Z.logger.debug("jwplayer/utils/random-id-generator: ", e)
                }
                return Math.random().toString(36).slice(2, 9)
            }
              , o = e => {
                let t = "";
                for (; t.length < e; )
                    t += i();
                return t.slice(0, e)
            }
        }
        ,
        1776: (e, t, u) => {
            "use strict";
            u.d(t, {
                U: () => n,
                W: () => r
            });
            const n = window.requestAnimationFrame || (e => setTimeout(e, 17))
              , r = window.cancelAnimationFrame || clearTimeout
        }
        ,
        676: (e, t, u) => {
            "use strict";
            u.d(t, {
                ZP: () => c
            });
            var n = u(328)
              , r = u(1643);
            const i = {}
              , o = e => {
                const t = document.createElement("link");
                return t.type = "text/css",
                t.rel = "stylesheet",
                t.href = e,
                t
            }
              , s = (e, t) => {
                const u = document.createElement("script");
                return u.type = "text/javascript",
                u.charset = "utf-8",
                u.async = !0,
                u.timeout = t || 45e3,
                u.src = e,
                u
            }
              , a = function(e, t, u) {
                const n = this;
                let a = 0;
                const c = e => {
                    a = 2,
                    n.trigger(r.pn, e).off()
                }
                  , l = e => {
                    a = 3,
                    n.trigger(r.xQ, e).off()
                }
                ;
                this.getStatus = function() {
                    return a
                }
                ,
                this.load = function() {
                    let n = i[e];
                    return 0 !== a || (n && n.then(l).catch(c),
                    a = 1,
                    n = new Promise(( (n, r) => {
                        const i = (t ? o : s)(e, u);
                        let a;
                        const d = function() {
                            i.onerror = i.onload = null,
                            clearTimeout(a)
                        }
                          , D = function(e) {
                            d(),
                            c(e),
                            r(e)
                        };
                        a = setTimeout(( () => {
                            D(new Error(`Network timeout ${e}`))
                        }
                        ), 45e3),
                        i.onerror = function() {
                            D(new Error(`Failed to load ${e}`))
                        }
                        ,
                        i.onload = function(e) {
                            d(),
                            l(e),
                            n(e)
                        }
                        ;
                        const f = document.getElementsByTagName("head")[0] || document.documentElement;
                        f.insertBefore(i, f.firstChild)
                    }
                    )),
                    i[e] = n),
                    n
                }
            };
            Object.assign(a.prototype, n.ZP);
            const c = a
        }
        ,
        2957: (e, t, u) => {
            "use strict";
            u.d(t, {
                AO: () => a,
                Dc: () => s,
                O4: () => D,
                U5: () => d,
                WZ: () => c,
                fy: () => i,
                m9: () => l,
                uA: () => f,
                vk: () => o,
                zz: () => p
            });
            var n = u(6042);
            const r = window.parseFloat
              , i = e => e.replace(/^\s+|\s+$/g, "")
              , o = (e, t, u) => {
                for (e = `${e}`,
                u = u || "0"; e.length < t; )
                    e = u + e;
                return e
            }
              , s = (e, t) => {
                const u = e.attributes;
                for (let e = 0; e < u.length; e++)
                    if (u[e].name && u[e].name.toLowerCase() === t.toLowerCase())
                        return u[e].value.toString();
                return ""
            }
              , a = e => {
                if (!e || "rtmp" === e.substr(0, 4))
                    return "";
                const t = /[(,]format=(m3u8|mpd)-/i.exec(e);
                if (t)
                    return t[1];
                const u = e.replace(/^.+?\.(\w+)(?:[;].*)?(?:[?#].*)?$/, "$1");
                return u !== e ? u.toLowerCase() : (e = e.split("?")[0].split("#")[0]).lastIndexOf(".") > -1 ? e.substr(e.lastIndexOf(".") + 1, e.length).toLowerCase() : ""
            }
              , c = e => {
                const t = (e / 60 | 0) % 60
                  , u = e % 60;
                return `${o((e / 3600 | 0).toString(), 2)}:${o(t.toString(), 2)}:${o(u.toFixed(3), 6)}`
            }
              , l = (e, t) => {
                if (!e)
                    return 0;
                if ((0,
                n.qh)(e))
                    return e;
                const u = e.replace(",", ".")
                  , i = u.slice(-1)
                  , o = u.split(":")
                  , s = o.length;
                let a = 0;
                if ("s" === i)
                    a = r(u);
                else if ("m" === i)
                    a = 60 * r(u);
                else if ("h" === i)
                    a = 3600 * r(u);
                else if (s > 1) {
                    let e = s - 1;
                    4 === s && (t && (a = r(o[e]) / t),
                    e -= 1),
                    a += r(o[e]),
                    a += 60 * r(o[e - 1]),
                    s >= 3 && (a += 3600 * r(o[e - 2]))
                } else
                    a = r(u);
                return (0,
                n.qh)(a) ? a : 0
            }
              , d = (e, t, u) => {
                if ((0,
                n.HD)(e) && "%" === e.slice(-1)) {
                    const u = r(e);
                    return t && (0,
                    n.qh)(t) && (0,
                    n.qh)(u) ? t * u / 100 : null
                }
                return l(e, u)
            }
              , D = (e, t) => e.map((e => t + e))
              , f = (e, t) => e.map((e => e + t))
              , p = e => Boolean(e) && (0,
            n.HD)(e) && "%" === e.slice(-1)
        }
        ,
        5882: (e, t, u) => {
            "use strict";
            u.d(t, {
                GU: () => A,
                ZP: () => _,
                dO: () => w
            });
            var n = u(8348)
              , r = u(1643)
              , i = u(328)
              , o = u(5004)
              , s = u(2799);
            const a = "ontouchstart"in window
              , c = "PointerEvent"in window && !n.OS.android
              , l = !(c || a && n.OS.mobile)
              , d = "window"
              , D = "init"
              , f = "select"
              , p = "keydown"
              , {passiveEvents: h} = n.Features
              , g = !!h && {
                passive: !0
            };
            let m, C;
            const F = (e, t, u) => {
                const {el: n} = e
                  , r = ( (e, t, u) => {
                    const {target: n, touches: r, changedTouches: i} = t;
                    let o, {pointerType: s} = t;
                    r || i ? (o = null != r && r.length ? r[0] : i[0],
                    s = s || "touch") : (o = t,
                    s = s || "mouse");
                    const {pageX: a, pageY: c} = o;
                    return {
                        type: e,
                        pointerType: s,
                        pageX: a,
                        pageY: c,
                        sourceEvent: t,
                        currentTarget: u,
                        target: n
                    }
                }
                )(t, u, n);
                e.trigger(t, r)
            }
              , y = (e, t, u) => {
                const {el: n} = e
                  , {target: r} = u;
                e.trigger(t, {
                    type: t,
                    sourceEvent: u,
                    currentTarget: n,
                    target: r
                })
            }
              , A = e => {
                const t = e.ownerDocument || e;
                return t.defaultView || t.parentWindow || window
            }
              , E = (e, t, u, n, r=g) => {
                let i = e.handlers[t]
                  , o = e.options[t];
                if (i || (i = e.handlers[t] = {},
                o = e.options[t] = {}),
                i[u])
                    throw new Error(`${t} ${u} already registered`);
                i[u] = n,
                o[u] = r;
                const {el: s} = e
                  , a = t === d ? A(s) : s;
                a && a.addEventListener(u, n, r)
            }
              , v = e => {
                const {el: t} = e;
                null !== e.pointerId && (t.releasePointerCapture(e.pointerId),
                e.pointerId = null)
            }
              , b = (e, t) => {
                const {el: u, handlers: n, options: r} = e
                  , i = t === d ? A(u) : u
                  , o = n[t]
                  , s = r[t];
                o && (Object.keys(o).forEach((e => {
                    const t = s[e];
                    "boolean" == typeof t ? i.removeEventListener(e, o[e], t) : i.removeEventListener(e, o[e])
                }
                )),
                n[t] = null,
                r[t] = null)
            }
              , w = e => !(!Boolean(e.ctrlKey) || "click" !== e.type) || ("which"in e ? 3 === e.which : "button"in e && 2 === e.button)
              , B = (e, t) => {
                if (C || (C = new _(document).on("interaction")),
                e.handlers[D] || e.handlers[f])
                    return;
                const {el: u} = e;
                E(e, t, "blur", ( () => {
                    (0,
                    s.IV)(u, "jw-tab-focus"),
                    e.clicking = !1
                }
                )),
                E(e, t, "focus", ( () => {
                    C.event && C.event.type === p && (0,
                    s.cn)(u, "jw-tab-focus")
                }
                ))
            }
              , k = (e, t, u, n) => {
                c ? E(e, t, "pointerdown", u, n) : (l && E(e, t, "mousedown", u, n),
                E(e, t, "touchstart", u, n))
            }
              , j = e => {
                if (e.handlers[f])
                    return;
                const {el: t} = e;
                B(e, f),
                k(e, f, (u => {
                    const {target: n} = u;
                    w(u) || Boolean(e.directSelect) && n !== t || (u.isPrimary && "BUTTON" === n.tagName && n.focus(),
                    e.lastStart = (0,
                    o.z)(),
                    e.clicking = !0)
                }
                )),
                E(e, f, "click", (u => {
                    w(u) || Boolean(e.directSelect) && u.target !== t || ((0,
                    o.z)() - e.lastStart > 500 && !0 === e.clicking || (( (e, t) => {
                        e.enableDoubleClick && ((0,
                        o.z)() - e.lastClick < 300 ? (F(e, r.P, t),
                        e.lastClick = 0) : e.lastClick = (0,
                        o.z)())
                    }
                    )(e, u),
                    F(e, r.ot, u)),
                    e.clicking = !1)
                }
                ))
            }
              , P = e => 0 === e.type.indexOf("touch") ? (e.originalEvent || e).changedTouches[0] : e
              , S = e => {
                if (e.handlers[D])
                    return;
                const {el: t, passive: u} = e
                  , n = !!h && {
                    passive: u
                }
                  , i = t => {
                    if (e.dragged)
                        F(e, r.Wp, t);
                    else {
                        const {pageX: u, pageY: n} = P(t)
                          , i = u - e.startX
                          , o = n - e.startY;
                        i * i + o * o > 36 && (F(e, r.nv, t),
                        e.dragged = !0,
                        F(e, r.Wp, t))
                    }
                    var n;
                    u || "touchmove" !== t.type || (n = t).preventDefault && n.preventDefault()
                }
                  , o = t => {
                    clearTimeout(m),
                    e.el && (v(e),
                    b(e, d),
                    e.dragged && (e.dragged = !1,
                    F(e, r.Sv, t)))
                }
                ;
                B(e, D),
                k(e, D, (r => {
                    if ((0,
                    s.IV)(t, "jw-tab-focus"),
                    w(r))
                        return;
                    const {target: a, type: c} = r;
                    if (e.directSelect && a !== t)
                        return;
                    const {pageX: l, pageY: D} = P(r);
                    if (e.dragged = !1,
                    e.startX = l,
                    e.startY = D,
                    b(e, d),
                    "pointerdown" === c && r.isPrimary) {
                        if (!u) {
                            const {pointerId: u} = r;
                            e.pointerId = u,
                            t.setPointerCapture(u)
                        }
                        E(e, d, "pointermove", i, n),
                        E(e, d, "pointercancel", o),
                        E(e, d, "pointerup", o)
                    } else
                        "mousedown" === c ? (E(e, d, "mousemove", i, n),
                        E(e, d, "mouseup", o)) : "touchstart" === c && (E(e, d, "touchmove", i, n),
                        E(e, d, "touchcancel", o),
                        E(e, d, "touchend", o))
                }
                ), n)
            }
              , O = {
                drag(e) {
                    S(e)
                },
                dragStart(e) {
                    S(e)
                },
                dragEnd(e) {
                    S(e)
                },
                click(e) {
                    j(e)
                },
                doubleClick(e) {
                    e.enableDoubleClick = !0,
                    j(e)
                },
                longPress(e) {
                    const t = "longPress";
                    if (n.OS.iOS) {
                        const u = () => {
                            clearTimeout(m)
                        }
                        ;
                        E(e, t, "touchstart", (n => {
                            u(),
                            m = setTimeout(( () => {
                                F(e, t, n)
                            }
                            ), 500)
                        }
                        )),
                        E(e, t, "touchmove", u),
                        E(e, t, "touchcancel", u),
                        E(e, t, "touchend", u)
                    } else
                        e.el.oncontextmenu = u => (F(e, t, u),
                        !1)
                },
                focus(e) {
                    const t = "focus";
                    E(e, t, t, (u => {
                        y(e, t, u)
                    }
                    ))
                },
                blur(e) {
                    const t = "blur";
                    E(e, t, t, (u => {
                        y(e, t, u)
                    }
                    ))
                },
                over(e) {
                    (c || l) && E(e, r.B1, c ? "pointerover" : "mouseover", (t => {
                        "touch" !== t.pointerType && F(e, r.B1, t)
                    }
                    ))
                },
                out(e) {
                    if (c) {
                        const {el: t} = e;
                        E(e, r.U3, "pointerout", (u => {
                            if ("touch" !== u.pointerType && "clientX"in u) {
                                const n = document.elementFromPoint(u.clientX, u.clientY);
                                t.contains(n) || F(e, r.U3, u)
                            }
                        }
                        ))
                    } else
                        l && E(e, r.U3, "mouseout", (t => {
                            F(e, r.U3, t)
                        }
                        ))
                },
                move(e) {
                    (c || l) && E(e, r.tP, c ? "pointermove" : "mousemove", (t => {
                        "touch" !== t.pointerType && F(e, r.tP, t)
                    }
                    ))
                },
                enter(e) {
                    E(e, r.K5, p, (t => {
                        "Enter" !== t.key && 13 !== t.keyCode || (t.stopPropagation(),
                        y(e, r.K5, t))
                    }
                    ))
                },
                keydown(e) {
                    E(e, p, p, (t => {
                        y(e, p, t)
                    }
                    ), !1)
                },
                gesture(e) {
                    const t = "gesture"
                      , u = u => F(e, t, u);
                    E(e, t, "click", u),
                    E(e, t, p, u)
                },
                interaction(e) {
                    const t = "interaction"
                      , u = t => {
                        e.event = t
                    }
                    ;
                    E(e, t, "mousedown", u, !0),
                    E(e, t, p, u, !0)
                },
                tap() {},
                doubleTap() {}
            }
              , x = /\s+/
              , T = e => e && !(x.test(e) || "object" == typeof e);
            class _ extends i.ZP {
                constructor(e, t) {
                    super();
                    const u = !(t = t || {}).preventScrolling;
                    this.directSelect = Boolean(t.directSelect),
                    this.dragged = !1,
                    this.enableDoubleClick = !1,
                    this.el = e,
                    this.handlers = {},
                    this.options = {},
                    this.lastClick = 0,
                    this.lastStart = 0,
                    this.passive = u,
                    this.pointerId = null,
                    this.startX = 0,
                    this.startY = 0,
                    this.event = null,
                    this.clicking = !1
                }
                on(e, t, u) {
                    return T(e) && (this.handlers[e] || O[e](this)),
                    super.on(e, t, u)
                }
                off(e, t, u) {
                    if (T(e))
                        b(this, e);
                    else if (!e) {
                        const {handlers: e} = this;
                        Object.keys(e).forEach((e => {
                            b(this, e)
                        }
                        ))
                    }
                    return super.off(e, t, u)
                }
                destroy() {
                    this.el && (this.off(),
                    c && v(this),
                    this.el = null)
                }
            }
        }
        ,
        6042: (e, t, u) => {
            "use strict";
            u.d(t, {
                Cb: () => re,
                HD: () => _,
                Kn: () => w,
                P2: () => Ee,
                S6: () => k,
                UI: () => N,
                U_: () => ve,
                Yj: () => U,
                ZP: () => Pe,
                _e: () => he,
                a9: () => ke,
                ar: () => pe,
                ce: () => be,
                cq: () => le,
                dp: () => Y,
                e1: () => ce,
                e5: () => ge,
                ei: () => Be,
                hX: () => K,
                hj: () => T,
                i2: () => Z,
                jn: () => ue,
                l7: () => we,
                mf: () => x,
                o8: () => ne,
                qh: () => je,
                r3: () => de,
                sE: () => G,
                u4: () => R,
                vM: () => se,
                wB: () => fe,
                xV: () => te,
                yR: () => V
            });
            var n = u(5004)
              , r = function(e, t) {
                if (null == e)
                    throw new TypeError("Cannot convert undefined or null to object");
                return Object.prototype.hasOwnProperty.call(Object(e), t)
            };
            const i = {}
              , o = Array.prototype
              , s = Object.prototype
              , a = Function.prototype
              , c = o.slice
              , l = o.concat
              , d = s.toString
              , D = s.hasOwnProperty
              , f = o.map
              , p = o.reduce
              , h = o.forEach
              , g = o.filter
              , m = o.every
              , C = o.some
              , F = o.indexOf
              , y = Array.isArray
              , A = Object.keys
              , E = a.bind
              , v = window.isFinite
              , b = function(e, t) {
                return D.call(e, t)
            }
              , w = function(e) {
                return e === Object(e)
            }
              , B = function(e) {
                if (!w(e))
                    return [];
                if (A)
                    return A(e);
                const t = [];
                for (const u in e)
                    b(e, u) && t.push(u);
                return t
            }
              , k = function(e, t, u) {
                let n, r;
                if (null == e)
                    return e;
                if (h && e.forEach === h)
                    e.forEach(t, u);
                else if (e.length === Number(e.length)) {
                    for (n = 0,
                    r = e.length; n < r; n++)
                        if (t.call(u, e[n], n, e) === i)
                            return
                } else {
                    const o = B(e);
                    for (n = 0,
                    r = o.length; n < r; n++)
                        if (t.call(u, e[o[n]], o[n], e) === i)
                            return
                }
                return e
            }
              , j = k
              , P = [];
            k(["Function", "String", "Number", "Date", "RegExp"], (function(e) {
                P[e] = function(t) {
                    return d.call(t) == `[object ${e}]`
                }
            }
            ));
            const S = P.Date
              , O = P.RegExp
              , x = P.Function
              , T = P.Number
              , _ = P.String
              , I = y || function(e) {
                return "[object Array]" == d.call(e)
            }
              , Z = function(e) {
                return T(e) && e != Number(e)
            }
              , N = function(e, t, u) {
                const n = [];
                return null == e ? n : f && e.map === f ? e.map(t, u) : (k(e, (function(e, r, i) {
                    n.push(t.call(u, e, r, i))
                }
                )),
                n)
            }
              , L = N
              , M = function() {}
              , $ = function(e, t, ...u) {
                if (E && e.bind === E)
                    return E.apply(e, [t].concat(u));
                if (!x(e))
                    throw new TypeError;
                const n = function(...r) {
                    if (!(this instanceof n))
                        return e.apply(t, u.concat(r));
                    M.prototype = e.prototype;
                    const i = new M;
                    M.prototype = null;
                    const o = e.apply(i, u.concat(r));
                    return Object(o) === o ? o : i
                };
                return n
            }
              , R = function(e, t, u, n) {
                let r = arguments.length > 2;
                if (null == e && (e = []),
                p && e.reduce === p)
                    return n && (t = $(t, n)),
                    r ? e.reduce(t, u) : e.reduce(t);
                if (k(e, (function(e, i, o) {
                    r ? u = t.call(n, u, e, i, o) : (u = e,
                    r = !0)
                }
                )),
                !r)
                    throw new TypeError("Reduce of empty array with no initial value");
                return u
            }
              , q = R
              , z = R
              , V = function(e) {
                return e
            }
              , U = function(e, t, u) {
                t || (t = V);
                let n = !1;
                return null == e ? n : C && e.some === C ? e.some(t, u) : (k(e, (function(e, r, o) {
                    if (n || (n = t.call(u, e, r, o)))
                        return i
                }
                )),
                Boolean(n))
            }
              , H = U
              , G = function(e, t, u) {
                let n;
                return U(e, (function(e, r, i) {
                    if (t.call(u, e, r, i))
                        return n = e,
                        !0
                }
                )),
                n
            }
              , W = G
              , K = function(e, t, u) {
                const n = [];
                return null == e ? n : g && e.filter === g ? e.filter(t, u) : (k(e, (function(e, r, i) {
                    t.call(u, e, r, i) && n.push(e)
                }
                )),
                n)
            }
              , Q = K
              , X = function(e, t, u) {
                t || (t = V);
                let n = !0;
                return null == e ? n : m && e.every === m ? e.every(t, u) : (k(e, (function(e, r, o) {
                    if (!(n = n && t.call(u, e, r, o)))
                        return i
                }
                )),
                Boolean(n))
            }
              , J = X
              , Y = function(e) {
                return null == e ? 0 : e.length === Number(e.length) ? e.length : B(e).length
            }
              , ee = function(e, t) {
                let u;
                return function(...n) {
                    return --e > 0 && (u = t.apply(this, n)),
                    e <= 1 && (t = null),
                    u
                }
            };
            P.Function = function(e) {
                return "function" == typeof e
            }
            ;
            const te = function(e) {
                return v(e) && !Z(parseFloat(e))
            }
              , ue = function(e) {
                return !0 === e || !1 === e || "[object Boolean]" == d.call(e)
            }
              , ne = function(e) {
                return void 0 === e
            }
              , re = function(e) {
                return function(t) {
                    return t[e]
                }
            }
              , ie = function(e) {
                return null == e ? V : x(e) ? e : re(e)
            }
              , oe = function(e) {
                return function(t, u, n) {
                    const r = {};
                    return u = ie(u),
                    k(t, (function(i, o) {
                        const s = u.call(n, i, o, t);
                        e(r, s, i)
                    }
                    )),
                    r
                }
            }
              , se = oe((function(e, t, u) {
                b(e, t) ? e[t].push(u) : e[t] = [u]
            }
            ))
              , ae = oe((function(e, t, u) {
                e[t] = u
            }
            ))
              , ce = function(e, t, u, n) {
                const r = (u = ie(u)).call(n, t);
                let i = 0
                  , o = e.length;
                for (; i < o; ) {
                    const t = i + o >>> 1;
                    u.call(n, e[t]) < r ? i = t + 1 : o = t
                }
                return i
            }
              , le = function(e, t, u) {
                if (null == e)
                    return -1;
                let n = 0;
                const r = e.length;
                if (u) {
                    if ("number" != typeof u)
                        return n = ce(e, t),
                        e[n] === t ? n : -1;
                    n = u < 0 ? Math.max(0, r + u) : u
                }
                if (F && e.indexOf === F)
                    return e.indexOf(t, u);
                for (; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }
              , de = function(e, t) {
                return null != e && (e.length !== Number(e.length) && (e = function(e) {
                    const t = B(e)
                      , u = B.length
                      , n = Array(u);
                    for (let r = 0; r < u; r++)
                        n[r] = e[t[r]];
                    return n
                }(e)),
                le(e, t) >= 0)
            }
              , De = de
              , fe = function(e) {
                return function(t) {
                    if (t === e)
                        return !0;
                    for (const u in e)
                        if (e[u] !== t[u])
                            return !1;
                    return !0
                }
            }
              , pe = function(e, t) {
                return K(e, fe(t))
            }
              , he = function(e, t) {
                return G(e, fe(t))
            }
              , ge = function(e, ...t) {
                const u = l.apply(o, t);
                return K(e, (function(e) {
                    return !de(u, e)
                }
                ))
            }
              , me = function(e, ...t) {
                return function(...u) {
                    let n = 0;
                    const r = t.slice();
                    for (let e = 0, t = r.length; e < t; e++)
                        b(r[e], "partial") && (r[e] = u[n++]);
                    for (; n < arguments.length; )
                        r.push(u[n++]);
                    return e.apply(this, r)
                }
            }
              , Ce = me(ee, 2)
              , Fe = function(e, t, ...u) {
                return setTimeout((function() {
                    return e.apply(null, u)
                }
                ), t)
            }
              , ye = me(Fe, {
                partial: me
            }, 1)
              , Ae = n.z
              , Ee = function(e, t, u) {
                let n, r, i, o = null, s = 0;
                u || (u = {});
                const a = function() {
                    s = !1 === u.leading ? 0 : Ae(),
                    o = null,
                    i = e.apply(n, r),
                    n = r = null
                };
                return function(...c) {
                    const l = Ae();
                    s || !1 !== u.leading || (s = l);
                    const d = t - (l - s);
                    return n = this,
                    r = c,
                    d <= 0 ? (clearTimeout(o),
                    o = null,
                    s = l,
                    i = e.apply(n, r),
                    n = r = null) : o || !1 === u.trailing || (o = setTimeout(a, d)),
                    i
                }
            }
              , ve = function(e) {
                const t = {}
                  , u = B(e);
                for (let n = 0, r = u.length; n < r; n++)
                    t[e[u[n]]] = u[n];
                return t
            }
              , be = function(e, ...t) {
                return k(t, (function(t) {
                    if (t)
                        for (const u in t)
                            void 0 === e[u] && (e[u] = t[u])
                }
                )),
                e
            }
              , we = Object.assign || function(e, ...t) {
                return k(t, (function(t) {
                    if (t)
                        for (const u in t)
                            r(t, u) && (e[u] = t[u])
                }
                )),
                e
            }
              , Be = function(e, ...t) {
                const u = {};
                return t = [].concat(...t),
                k(t, (function(t) {
                    t in e && (u[t] = e[t])
                }
                )),
                u
            }
              , ke = function(e) {
                return function() {
                    return e
                }
            }
              , je = e => T(e) && !Z(e)
              , Pe = {
                after: function(e, t) {
                    return function(...u) {
                        if (--e < 1)
                            return t.apply(this, u)
                    }
                },
                all: X,
                any: U,
                before: ee,
                bind: $,
                clone: function(e) {
                    return w(e) ? I(e) ? e.slice() : we({}, e) : e
                },
                collect: L,
                compact: function(e) {
                    return K(e, V)
                },
                constant: ke,
                contains: de,
                debounce: (e, t=100) => {
                    let u;
                    return function(...n) {
                        clearTimeout(u),
                        u = setTimeout(( () => {
                            e.apply(this, n)
                        }
                        ), t)
                    }
                }
                ,
                defaults: be,
                defer: ye,
                delay: Fe,
                detect: W,
                difference: ge,
                each: k,
                every: J,
                extend: we,
                filter: K,
                find: G,
                findWhere: he,
                foldl: q,
                forEach: j,
                groupBy: se,
                has: b,
                identity: V,
                include: De,
                indexBy: ae,
                indexOf: le,
                inject: z,
                invert: ve,
                isArray: I,
                isBoolean: ue,
                isDate: S,
                isFinite: te,
                isFunction: x,
                isNaN: Z,
                isNull: function(e) {
                    return null === e
                },
                isNumber: T,
                isObject: w,
                isRegExp: O,
                isString: _,
                isUndefined: ne,
                isValidNumber: je,
                keys: B,
                last: function(e, t, u) {
                    if (null != e)
                        return null == t || u ? e[e.length - 1] : c.call(e, Math.max(e.length - t, 0))
                },
                map: N,
                matches: fe,
                max: function(e, t, u) {
                    if (!t && I(e) && e[0] === Number(e[0]) && e.length < 65535)
                        return Math.max(...e);
                    let n = -1 / 0
                      , r = -1 / 0;
                    return k(e, (function(e, i, o) {
                        const s = t ? t.call(u, e, i, o) : e;
                        s > r && (n = e,
                        r = s)
                    }
                    )),
                    n
                },
                memoize: function(e, t) {
                    const u = {};
                    return t || (t = V),
                    function(...n) {
                        const r = t.apply(this, n);
                        return b(u, r) ? u[r] : u[r] = e.apply(this, n)
                    }
                },
                now: Ae,
                omit: function(e, ...t) {
                    const u = {};
                    for (const n in e)
                        de(t, n) || (u[n] = e[n]);
                    return u
                },
                once: Ce,
                partial: me,
                pick: Be,
                pluck: function(e, t) {
                    return N(e, re(t))
                },
                property: re,
                propertyOf: function(e) {
                    return null == e ? function() {}
                    : function(t) {
                        return e[t]
                    }
                },
                reduce: R,
                reject: function(e, t, u) {
                    return K(e, (function(e, n, r) {
                        return !t.call(u, e, n, r)
                    }
                    ), u)
                },
                result: function(e, t) {
                    if (null == e)
                        return;
                    const u = e[t];
                    return x(u) ? u.call(e) : u
                },
                select: Q,
                size: Y,
                some: H,
                sortedIndex: ce,
                throttle: Ee,
                where: pe,
                without: function(e, ...t) {
                    return ge(e, t)
                }
            }
        }
        ,
        5950: (e, t, u) => {
            "use strict";
            u.d(t, {
                O9: () => s,
                _N: () => o,
                kd: () => l,
                ke: () => a,
                vl: () => i
            });
            const n = /^[^:/?#]+:?\/\/[^/?#]+/
              , r = e => {
                if (e)
                    return new URL(e,window.location)
            }
              , i = function(e) {
                if (!e)
                    return {};
                const t = r(e)
                  , u = {};
                for (const e of t.searchParams.keys())
                    if (!u[e]) {
                        const n = t.searchParams.getAll(e);
                        u[e] = 1 === n.length ? n[0] : n
                    }
                return u
            }
              , o = function(e) {
                if (!e)
                    return -1;
                const t = new URLSearchParams(e).get("jw_start") || -1;
                return isNaN(t) || t < -1 ? -1 : Number(t)
            }
              , s = function(e, t="{seek_to_second_number}") {
                if (!e)
                    return;
                const u = new URL(e);
                u.searchParams.set("jw_start", "");
                let n = u.toString();
                return n = n.replace(/jw_start=?/i, `jw_start=${t}`),
                n
            }
              , a = (e, t) => {
                if (e)
                    return new URLSearchParams(e).has(t)
            }
              , c = e => !!e && null !== e.match(n)
              , l = (e, t) => {
                if (t || (t = document.location.href),
                !e || !c(t))
                    return "";
                if (c(e))
                    return e;
                return new URL(e,t).toString()
            }
        }
        ,
        7034: (e, t, u) => {
            "use strict";
            u.r(t),
            u.d(t, {
                exists: () => r,
                isDeepKeyCompliant: () => l,
                isFileProtocol: () => o,
                isHTTPS: () => i,
                isRtmp: () => s,
                isYouTube: () => a,
                typeOf: () => c
            });
            const n = window.location.protocol
              , r = e => {
                switch (typeof e) {
                case "string":
                    return e.length > 0;
                case "object":
                    return null !== e;
                case "undefined":
                    return !1;
                default:
                    return !0
                }
            }
              , i = () => "https:" === n
              , o = () => "file:" === n
              , s = (e, t) => 0 === e.indexOf("rtmp:") || "rtmp" === t
              , a = (e, t) => "youtube" === t || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)
              , c = e => {
                if (null === e)
                    return "null";
                const t = typeof e;
                return "object" === t && Array.isArray(e) ? "array" : t
            }
              , l = (e, t, u) => {
                const n = Object.keys(e);
                return Object.keys(t).length >= n.length && n.every((n => {
                    const r = e[n]
                      , i = t[n];
                    return r && "object" == typeof r ? !(!i || "object" != typeof i) && l(r, i, u) : u(n, e)
                }
                ))
            }
        }
        ,
        9025: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => n
            });
            const n = document.createElement("video")
        }
        ,
        6601: (e, t, u) => {
            "use strict";
            u.d(t, {
                i: () => n
            });
            const n = "8.36.3+commercial_master.581.ads-dai@mono.ads-freewheel@mono.ads-googima@mono.ads-vast@mono.hls.js@1.5.13.jwplayer@mono.jwplayer-ads-header-bidding@github:jwplayer/jwplayer-ads-header-bidding#v7.10.0.jwplayer-analytics@github:jwplayer/jwplayer-analytics#v4.0.6.plugin-gapro@mono"
        }
        ,
        4225: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => o
            });
            const n = (e, t, u, n) => `<div id="${e}" class="jw-error jw-reset"><div class="jw-error-msg jw-info-overlay jw-reset"><style>[id="${e}"].jw-error{background:#000;overflow:hidden;position:relative}[id="${e}"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id="${e}"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset"><div class="jw-error-text jw-reset-text" dir="auto" data-nosnippet>${t || ""}<span class="jw-break jw-reset"></span>${n ? `(${u}: ${n})`.replace(/\s+/g, "&nbsp;") : ""}</div></div></div></div>`;
            var r = u(2799)
              , i = u(974);
            function o(e, t) {
                const {message: u, code: o} = t
                  , s = n(e.get("id"), u, e.get("localization").errors.errorCode, o.toString())
                  , a = e.get("width")
                  , c = e.get("height")
                  , l = (0,
                r.az)(s);
                return (0,
                i.oB)(l, {
                    width: a.toString().indexOf("%") > 0 ? a : `${a}px`,
                    height: c.toString().indexOf("%") > 0 ? c : `${c}px`
                }),
                l
            }
        }
        ,
        9926: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => c
            });
            var n = u(1776)
              , r = u(2799)
              , i = u(974);
            const o = [];
            let s = -1;
            const a = () => {
                (0,
                n.W)(s),
                s = (0,
                n.U)(( () => {
                    o.forEach((e => {
                        e.view.updateBounds();
                        const t = e.view.model.get("containerWidth");
                        e.resized = e.width !== t,
                        e.width = t
                    }
                    )),
                    o.forEach((e => {
                        e.contractElement.scrollLeft = 2 * e.width
                    }
                    )),
                    o.forEach((e => {
                        (0,
                        i.oB)(e.expandChild, {
                            width: e.width + 1
                        }),
                        e.resized && e.view.model.get("visibility") && e.view.updateStyles()
                    }
                    )),
                    o.forEach((e => {
                        e.expandElement.scrollLeft = e.width + 1
                    }
                    )),
                    o.forEach((e => {
                        e.resized && e.view.checkResized()
                    }
                    ))
                }
                ))
            }
            ;
            class c {
                constructor(e, t, u) {
                    const n = {
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }
                      , s = {
                        width: "100%",
                        height: "100%"
                    }
                      , c = (0,
                    r.az)('<div style="opacity:0;visibility:hidden;overflow:hidden;"><div><div style="height:1px;"></div></div><div class="jw-contract-trigger"></div></div>')
                      , l = c.firstChild
                      , d = l.firstChild
                      , D = l.nextSibling;
                    (0,
                    i.oB)([l, D], Object.assign({
                        overflow: "auto"
                    }, n, s)),
                    (0,
                    i.oB)(c, Object.assign({}, n, s)),
                    this.expandElement = l,
                    this.expandChild = d,
                    this.contractElement = D,
                    this.hiddenElement = c,
                    this.element = e,
                    this.view = t,
                    this.model = u,
                    this.width = 0,
                    this.resized = !1,
                    e.firstChild ? e.insertBefore(c, e.firstChild) : e.appendChild(c),
                    e.addEventListener("scroll", a, !0),
                    o.push(this),
                    a()
                }
                destroy() {
                    if (this.view) {
                        const e = o.indexOf(this);
                        -1 !== e && o.splice(e, 1),
                        this.element.removeEventListener("scroll", a, !0),
                        this.element.removeChild(this.hiddenElement),
                        this.view = this.model = null
                    }
                }
            }
        }
        ,
        4671: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => p
            });
            var n = u(6875);
            const r = []
              , i = []
              , o = []
              , s = {};
            let a, c = !1;
            const l = (e, t) => {
                for (let u = t.length; u--; ) {
                    const n = t[u];
                    if (e.target === n.getContainer()) {
                        n.setIntersection(e);
                        break
                    }
                }
            }
              , d = () => {
                r.forEach((e => {
                    e.model.set("activeTab", (0,
                    n.Z)())
                }
                ))
            }
              , D = (e, t) => {
                const u = t.indexOf(e);
                -1 !== u && t.splice(u, 1)
            }
              , f = e => {
                o.forEach((t => {
                    t(e)
                }
                ))
            }
            ;
            document.addEventListener("visibilitychange", d),
            document.addEventListener("webkitvisibilitychange", d);
            const p = {
                add(e) {
                    r.push(e)
                },
                remove(e) {
                    D(e, r),
                    document.removeEventListener("visibilitychange", d),
                    document.removeEventListener("webkitvisibilitychange", d),
                    window.removeEventListener("scroll", f)
                },
                addScrollHandler(e) {
                    c || (c = !0,
                    window.addEventListener("scroll", f)),
                    o.push(e)
                },
                removeScrollHandler(e) {
                    const t = o.indexOf(e);
                    -1 !== t && o.splice(t, 1)
                },
                addWidget(e) {
                    i.push(e)
                },
                removeWidget(e) {
                    D(e, i)
                },
                size: () => r.length,
                observe(e) {
                    ( () => {
                        const e = window.IntersectionObserver;
                        a || (a = new e((e => {
                            if (null != e && e.length)
                                for (let t = e.length; t--; ) {
                                    const u = e[t];
                                    l(u, r),
                                    l(u, i)
                                }
                        }
                        ),{
                            threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
                        }))
                    }
                    )(),
                    s[e.id] || (s[e.id] = !0,
                    a.observe(e))
                },
                unobserve(e) {
                    a && s[e.id] && (delete s[e.id],
                    a.unobserve(e))
                }
            }
        }
        ,
        2445: (e, t, u) => {
            "use strict";
            u.d(t, {
                ZP: () => A,
                qG: () => y
            });
            var n = u(5083)
              , r = u(1569)
              , i = u(6042)
              , o = u(7034)
              , s = u(6577)
              , a = u(6599)
              , c = u(386);
            const l = "__CONTEXTUAL__"
              , d = (e, t) => {
                const u = e.querySelector(t);
                if (u)
                    return u.getAttribute("content")
            }
            ;
            var D = u(4737)
              , f = u.n(D)
              , p = u(67)
              , h = u(3487);
            const g = e => "string" == typeof e && /^\/\/(?:content\.jwplatform|cdn\.jwplayer)\.com\//.test(e)
              , m = e => `https:${e}`
              , C = e => {
                const t = (0,
                c.Z)(e.edition)
                  , u = e.related
                  , n = !t("discovery") || u !== Object(u)
                  , r = !u || "none" !== u.displayMode
                  , i = u || {};
                let o = void 0 === i.oncomplete ? "none" : i.oncomplete
                  , s = i.autoplaytimer;
                !1 === o || e.repeat ? o = "hide" : "none" === o && (s = 0);
                const a = "autoplay" === o && s <= 0 || "none" === o;
                return Object.assign({}, u, {
                    disableRelated: n,
                    showButton: r,
                    oncomplete: o,
                    autoplaytimer: s,
                    shouldAutoAdvance: a
                })
            }
              , F = (e, t, u) => {
                if (t) {
                    e[t.client || (0,
                    h.sb)(u)] = t,
                    delete t.client
                }
            }
              , y = e => {
                const t = Object.assign({}, e.plugins)
                  , u = (0,
                c.Z)(e.edition);
                if (u("ads")) {
                    const u = Object.assign({}, e.advertising)
                      , n = u.client;
                    if (n) {
                        t[(0,
                        h.sb)(n) || n] = u,
                        delete u.client
                    }
                    u.bids && F(t, u.bids, "bidding")
                }
                if (u("jwpsrv")) {
                    let u = e.analytics;
                    u !== Object(u) && (u = {}),
                    F(t, u, "jwpsrv")
                }
                return F(t, e.ga, "gapro"),
                F(t, e.interactive, "interactive"),
                F(t, e.keepWatching, "keepWatching"),
                t
            }
              , A = function(e, t) {
                let c = (0,
                n.ZP)(e, t);
                const D = c.key || s.default.key
                  , h = new a.ZP(D)
                  , F = h.edition();
                if ("free" === h.edition() && (c = Object.assign({
                    skin: {
                        active: "#ff0046",
                        timeslider: {
                            progress: "none"
                        }
                    },
                    logo: {
                        position: "control-bar",
                        file: f()
                    }
                }, n.ke, (0,
                i.ei)(c, ["analytics", "aspectratio", "base", "file", "height", "playlist", "sources", "timeSlider", "width"]))),
                c.key = D,
                c.edition = F,
                c.error = h.error(),
                c.generateSEOMetadata = c.generateSEOMetadata || !1,
                "unlimited" === F) {
                    const e = (0,
                    r.getScriptPath)("jwplayer.js");
                    if (!e)
                        throw new Error("Error setting up player: Could not locate jwplayer.js script tag");
                    u.p = e
                }
                var A, E, v;
                if (c.related = C(c),
                c.ab && (c.ab = (e => {
                    let t = e.ab;
                    return t.clone && (t = t.clone()),
                    Object.keys(t.tests).forEach((u => {
                        t.tests[u].forEach((t => {
                            t.addConfig && t.addConfig(e, t.selection)
                        }
                        ))
                    }
                    )),
                    t
                }
                )(c)),
                c.plugins = y(c),
                A = c.playlist,
                (0,
                i.HD)(A) && A.indexOf(l) > -1 && (c.playlist = ( (e, t) => {
                    var u;
                    const n = null == e || null == e.querySelector || null == (u = e.querySelector("title")) ? void 0 : u.textContent
                      , r = d(e, 'meta[property="og:title"]');
                    let i = encodeURIComponent(r || n || "");
                    const o = d(e, 'meta[property="og:description"]') || d(e, 'meta[name="description"]');
                    return o && (i += `&page_description=${encodeURIComponent(o)}`),
                    t.replace(l, i)
                }
                )(document, c.playlist),
                c.contextual = !0),
                (0,
                o.isFileProtocol)()) {
                    const {playlist: e, related: t} = c;
                    g(e) && (c.playlist = m(e)),
                    t && g(t.file) && (t.file = m(t.file))
                }
                return c.__abSendDomainToFeeds && (v = c.playlist,
                /\.jwplatform.com|\.jwplayer.com/.test(v)) && (c.playlist = (E = c.playlist) + `${-1 !== E.indexOf("?") ? "&" : "?"}page_domain=${encodeURIComponent((0,
                p.X)())}`),
                c
            }
        }
        ,
        6577: (e, t, u) => {
            "use strict";
            u.d(t, {
                default: () => re
            });
            var n = u(1096)
              , r = u.n(n);
            window.Promise || (window.Promise = r());
            var i = u(1569)
              , o = u(6391)
              , s = u(2963)
              , a = u(670);
            const c = {
                availableProviders: s.B,
                registerProvider: a.Z
            };
            var l = u(1241);
            c.registerPlugin = function(e, t, u) {
                "jwpsrv" !== e && (0,
                l.fo)(e, t, u)
            }
            ;
            const d = c;
            var D = u(8675)
              , f = u(6601)
              , p = u(4742)
              , h = u(8348)
              , g = u(623)
              , m = u(1643)
              , C = u(7411)
              , F = u(328)
              , y = u(3487);
            const A = [["vastxml", "adtag", "schedules"]]
              , E = {
                googima: A,
                vast: A
            }
              , v = (e, t) => {
                const u = e.getPlugin(t)
                  , n = Object.keys(E);
                if (-1 === n.indexOf(t))
                    throw new Error(`destroyDynamicPlugin must be called with plugins with one of the following plugins: ${n.toString()}`);
                if (!u)
                    return;
                if (u.resize && e.off("resize", u.resizeHandler),
                delete e.plugins[t],
                u.destroy)
                    try {
                        u.destroy()
                    } catch (t) {
                        e.utils.logger.debug("jwplayer/plugins/dynamic-plugins: ", t)
                    }
                const r = u.div;
                null != r && r.parentElement && r.parentElement.removeChild(r),
                e.trigger("pluginDestroyed", {
                    type: "pluginDestroyed",
                    name: t
                })
            }
              , b = (e, t, u, n) => {
                const r = (0,
                y.Nq)(t)
                  , i = Object.keys(E)
                  , o = ( (e, t) => {
                    if (t[e])
                        return t[e];
                    const u = (0,
                    y.sb)(e);
                    if (t[u])
                        return t[u];
                    const n = (0,
                    y.Nq)(e);
                    return t[n] ? t[n] : {}
                }
                )(t, n);
                if (-1 === i.indexOf(r))
                    throw new Error(`setupDynamicPlugin must be called with plugins with one of the following plugins: ${i.toString()}`);
                v(e, r);
                const s = ( (e, t, u) => {
                    const n = Object.assign({}, e)
                      , r = Object.assign({}, t)
                      , i = Object.keys(r).filter((e => null === e));
                    return i.forEach((e => delete n[e])),
                    i.forEach((e => delete r[e])),
                    u.forEach((e => {
                        e.some((e => r[e])) && e.forEach((e => delete n[e]))
                    }
                    )),
                    Object.assign({}, n, r)
                }
                )(o, u, E[r]);
                return (0,
                D.Ve)(t, s, e)
            }
            ;
            var w = u(8494)
              , B = u(6042)
              , k = u(8762);
            let j = 0;
            const P = function(e, t) {
                const u = new g.ZP(t);
                return u.on(m.Rc, (t => {
                    e._qoe.tick("ready"),
                    t.setupTime = e._qoe.between("setup", "ready")
                }
                )),
                u.on("all", ( (t, u) => {
                    e.trigger(t, u)
                }
                )),
                u
            }
              , S = function(e, t) {
                const u = e.plugins
                  , n = Object.keys(u).map((e => {
                    const t = u[e];
                    return delete u[e],
                    t
                }
                ))
                  , r = e.utils.logger.child("jwplayer/api/api");
                t.get("setupConfig") && e.trigger("remove"),
                e.off(),
                t.playerDestroy(),
                n.forEach((e => {
                    if (e.reset)
                        try {
                            e.reset()
                        } catch (e) {
                            r.debug(e)
                        }
                    else if (e.destroy)
                        try {
                            e.destroy()
                        } catch (e) {
                            r.debug(e)
                        }
                }
                )),
                t.getContainer().removeAttribute("data-jwplayer-id")
            };
            function O(e) {
                const t = ++j
                  , u = e.id || `player-${t}`
                  , n = new C.Z
                  , r = {}
                  , i = new k.Z(`JWPlayer[${u}]`);
                let s = P(this, e);
                n.tick("init"),
                e.setAttribute("data-jwplayer-id", u),
                Object.defineProperties(this, {
                    id: {
                        enumerable: !0,
                        get: () => u
                    },
                    uniqueId: {
                        enumerable: !0,
                        get: () => t
                    },
                    plugins: {
                        enumerable: !0,
                        get: () => r
                    },
                    _qoe: {
                        enumerable: !0,
                        get: () => n
                    },
                    version: {
                        enumerable: !0,
                        get: () => f.i
                    },
                    Events: {
                        enumerable: !0,
                        get: () => F.ZP
                    },
                    utils: {
                        enumerable: !0,
                        get: () => Object.assign({}, w.Z, {
                            logger: i
                        })
                    },
                    _: {
                        enumerable: !0,
                        get: () => B.ZP
                    }
                }),
                Object.assign(this, {
                    _events: {},
                    setup(t) {
                        return n.clear("ready"),
                        n.tick("setup"),
                        s && S(this, s),
                        s = P(this, e),
                        s.init(t, this),
                        this.on(t.events, null, this)
                    },
                    remove() {
                        return this.getPip() && this.setPip(!1),
                        function(e) {
                            for (let t = o.Z.length; t--; )
                                if (o.Z[t].uniqueId === e.uniqueId) {
                                    o.Z.splice(t, 1);
                                    break
                                }
                        }(this),
                        s && S(this, s),
                        Object.keys(r).forEach((e => {
                            delete r[e]
                        }
                        )),
                        this
                    },
                    qoe() {
                        const e = s.getItemQoe();
                        return {
                            setupTime: this._qoe.between("setup", "ready"),
                            firstFrame: e.getFirstFrame ? e.getFirstFrame() : null,
                            player: this._qoe.dump(),
                            item: e.dump()
                        }
                    },
                    addCues(e) {
                        return Array.isArray(e) && s.addCues(e),
                        this
                    },
                    getAudioTracks: () => s.getAudioTracks(),
                    getBuffer: () => s.get("buffer"),
                    getCaptions: () => s.get("captions"),
                    getCaptionsList: () => s.getCaptionsList(),
                    getConfig: () => s.getConfig(),
                    getContainer: () => s.getContainer(),
                    getControls: () => s.get("controls"),
                    getCues: () => s.getCues(),
                    getCurrentAudioTrack: () => s.getCurrentAudioTrack(),
                    getCurrentCaptions: () => s.getCurrentCaptions(),
                    getCurrentQuality: () => s.getCurrentQuality(),
                    getCurrentTime: () => s.get("currentTime"),
                    getAbsolutePosition: () => s.getAbsolutePosition(),
                    getDuration: () => s.get("duration"),
                    getEnvironment: () => h,
                    getFullscreen: () => s.get("fullscreen"),
                    getHeight: () => s.getHeight(),
                    getItemMeta: () => s.get("itemMeta") || {},
                    getMute: () => s.getMute(),
                    getContainerPercentViewable: () => s.get("intersectionRatio"),
                    getPercentViewable: () => s.get("visibility"),
                    getPip: () => s.get("pip"),
                    getPlaybackRate: () => s.get("playbackRate"),
                    getPlaylist: () => s.get("playlist"),
                    getPlaylistIndex: () => s.get("item"),
                    getPlaylistItem(e) {
                        if (!w.Z.exists(e))
                            return s.get("playlistItem");
                        const t = this.getPlaylist();
                        return t ? t[e] : null
                    },
                    getPosition: () => s.get("position"),
                    getProvider: () => s.getProvider(),
                    getQualityLevels: () => s.getQualityLevels(),
                    getSafeRegion: (e=!0) => s.getSafeRegion(e),
                    getState: () => s.getState(),
                    getStretching: () => s.get("stretching"),
                    getContainerViewable: () => s.get("containerViewable"),
                    getViewable: () => s.get("viewable"),
                    getVisualQuality: () => s.getVisualQuality(),
                    getVolume: () => s.get("volume"),
                    getWidth: () => s.getWidth(),
                    isReady: () => s.isReady(),
                    setCaptions(e) {
                        return s.setCaptions(e),
                        this
                    },
                    setConfig(e) {
                        return s.setConfig(e),
                        this
                    },
                    setControls(e) {
                        return s.setControls(e),
                        this
                    },
                    setCurrentAudioTrack(e) {
                        s.setCurrentAudioTrack(e)
                    },
                    setCurrentCaptions(e) {
                        s.setCurrentCaptions(e)
                    },
                    setCurrentQuality(e) {
                        s.setCurrentQuality(e)
                    },
                    setFullscreen(e) {
                        return s.setFullscreen(e),
                        this
                    },
                    setAllowFullscreen(e) {
                        return s.setAllowFullscreen(e),
                        this
                    },
                    setMute(e) {
                        return s.setMute(e),
                        this
                    },
                    setPip(e) {
                        return s.setPip(e),
                        this
                    },
                    setPlaybackRate(e) {
                        return s.setPlaybackRate(e),
                        this
                    },
                    setPlaylistItem(e, t) {
                        return s.setPlaylistItem(e, t),
                        this
                    },
                    setCues(e) {
                        return Array.isArray(e) && s.setCues(e),
                        this
                    },
                    setVolume(e) {
                        return s.setVolume(e),
                        this
                    },
                    load(e, t) {
                        return s.load(e, t),
                        this
                    },
                    play(e) {
                        return s.play(e),
                        this
                    },
                    pause(e) {
                        return s.pause(e),
                        this
                    },
                    playToggle(e) {
                        switch (this.getState()) {
                        case m.r0:
                        case m.Kb:
                            return this.pause(e);
                        default:
                            return this.play(e)
                        }
                    },
                    seek(e, t) {
                        return s.seek(e, t),
                        this
                    },
                    playlistItem(e, t) {
                        return s.playlistItem(e, t),
                        this
                    },
                    playlistNext(e) {
                        return s.playlistNext(e),
                        this
                    },
                    playlistPrev(e) {
                        return s.playlistPrev(e),
                        this
                    },
                    next(e) {
                        return s.next(e),
                        this
                    },
                    requestPip(e) {
                        return s.requestPip(e),
                        this
                    },
                    castToggle() {
                        return s.castToggle(),
                        this
                    },
                    stopCasting() {
                        return s.stopCasting(),
                        this
                    },
                    requestCast(e) {
                        return s.requestCast(e),
                        this
                    },
                    createInstream: () => s.createInstream(),
                    stop() {
                        return s.stop(),
                        this
                    },
                    resize(e, t) {
                        return s.resize(e, t),
                        this
                    },
                    addButton(e, t, u, n, r) {
                        return s.addButton(e, t, u, n, r),
                        this
                    },
                    removeButton(e) {
                        return s.removeButton(e),
                        this
                    },
                    getMediaElement: () => s.getMediaElement(),
                    attachMedia() {
                        return s.attachMedia(),
                        this
                    },
                    detachMedia() {
                        return s.detachMedia(),
                        this
                    },
                    isBeforeComplete: () => s.isBeforeComplete(),
                    isBeforePlay: () => s.isBeforePlay(),
                    setPlaylistItemCallback(e, t) {
                        s.setItemCallback(e, t)
                    },
                    removePlaylistItemCallback() {
                        s.setItemCallback(null)
                    },
                    getPlaylistItemPromise: e => s.getItemPromise(e),
                    getFloating: () => Boolean(s.get("isFloating")),
                    setFloating(e) {
                        s.setConfig({
                            floating: {
                                mode: e ? "always" : "never"
                            }
                        })
                    },
                    getChapters: () => s.getChapters(),
                    getCurrentChapter: () => s.getCurrentChapter(),
                    setChapter: e => s.setChapter(e),
                    setupDynamicPlugin(e, t) {
                        return e ? b(this, e, t, s.get("plugins")) : Promise.resolve()
                    },
                    destroyDynamicPlugin(e) {
                        if (e)
                            return v(this, e)
                    }
                })
            }
            Object.assign(O.prototype, {
                on(e, t, u) {
                    return F.on.call(this, e, t, u)
                },
                once(e, t, u) {
                    return F.IH.call(this, e, t, u)
                },
                off(e, t, u) {
                    return F.S1.call(this, e, t, u)
                },
                trigger(e, t) {
                    return (t = B.ZP.isObject(t) ? Object.assign({}, t) : {}).type = e,
                    p.Z.debug ? F.X$.call(this, e, t) : F.wj.call(this, e, t)
                },
                getPlugin(e) {
                    return this.plugins[e]
                },
                addPlugin(e, t) {
                    this.plugins[e] = t,
                    "function" == typeof t.addToPlayer && (this.isReady() ? t.addToPlayer.call(this, !0) : this.on("ready", (function() {
                        t.addToPlayer.call(this, !1)
                    }
                    ))),
                    t.resize && this.on("resize", t.resizeHandler)
                },
                registerPlugin(e, t, u) {
                    (0,
                    D.fo)(e, t, u)
                },
                getAdBlock: () => !1,
                playAd(e) {},
                pauseAd(e) {},
                skipAd() {}
            }),
            u.p = (0,
            i.loadFrom)();
            const x = e => {
                for (let t = 0; t < o.Z.length; t++)
                    if (o.Z[t].id === e)
                        return o.Z[t];
                return null
            }
              , T = function(e) {
                let t, u;
                if (e ? "string" == typeof e ? (t = x(e),
                t || (u = document.getElementById(e))) : "number" == typeof e ? t = o.Z[e] : e.nodeType && (u = e,
                t = x(u.id || u.getAttribute("data-jwplayer-id"))) : t = o.Z[0],
                t)
                    return t;
                if (u) {
                    const e = new O(u);
                    return o.Z.push(e),
                    e
                }
                return {
                    registerPlugin: D.fo
                }
            }
              , _ = e => {
                Object.defineProperties(e, {
                    api: {
                        get: () => d,
                        set() {}
                    },
                    version: {
                        get: () => f.i,
                        set() {}
                    },
                    debug: {
                        get: () => p.Z.debug,
                        set(e) {
                            p.Z.debug = Boolean(e)
                        }
                    }
                })
            }
            ;
            _(T);
            const I = T;
            var Z = u(5882)
              , N = u(6599)
              , L = u(676)
              , M = u(5592)
              , $ = u(6769)
              , R = u(9025);
            const q = B.ZP.extend
              , z = {};
            z._ = B.ZP,
            z.utils = Object.assign(w.Z, {
                key: N.ZP,
                extend: q,
                scriptloader: L.ZP,
                rssparser: {
                    parse: $.Z
                },
                tea: M.p,
                UI: Z.ZP
            }),
            z.utils.css.style = z.utils.style,
            z.vid = R.Z;
            const V = z;
            var U = u(7543);
            const H = w.Z.logger.child("api/api-public")
              , G = /^(?:on(?:ce)?|off|trigger)$/
              , W = e => {
                H.warn(`The API method jwplayer().${e}() is disabled in the free edition of JW Player.`)
            }
              , K = (e, t, u) => {
                try {
                    const n = ( (e, t) => {
                        switch (e) {
                        case "setup":
                            return Boolean(t);
                        case "getSafeRegion":
                        case "pauseAd":
                        case "setControls":
                        case "setFullscreen":
                        case "setMute":
                            return Boolean(t) === t ? t : void 0;
                        case "setPlaylistItem":
                        case "getPlaylistItem":
                            return (0 | t) === t ? t : void 0;
                        case "setPlaybackRate":
                        case "setVolume":
                            return Number(t);
                        case "setConfig":
                            return Object.keys(Object(t)).join(",");
                        case "on":
                        case "once":
                        case "off":
                        case "trigger":
                        case "getPlugin":
                        case "addPlugin":
                        case "registerPlugin":
                            return `${t}`
                        }
                        return null
                    }
                    )(t, u);
                    e.trackExternalAPIUsage(t, n)
                } catch (e) {
                    p.Z.debug && H.warn(e)
                }
            }
              , Q = (e, t) => {
                if (t.length) {
                    const u = e.getPlugin("jwpsrv");
                    null != u && u.trackExternalAPIUsage && (t.forEach((e => {
                        K(u, e[0], e[1])
                    }
                    )),
                    t.length = 0)
                }
            }
              , X = (e, t, u, n, r) => function(...i) {
                const o = i[0]
                  , s = t._trackCallQueue || (t._trackCallQueue = [])
                  , a = G.test(u)
                  , c = a && i[1] && i[1]._callback
                  , l = r.edition || ( (e, t, u) => {
                    const n = e.getConfig()[u];
                    return t[u] = n,
                    n
                }
                )(t, r, "edition");
                if ("free" === l) {
                    if (["addButton", "addCues", "detachMedia", "load", "next", "pause", "play", "playlistItem", "playlistNext", "playlistPrev", "playToggle", "resize", "seek", "setCaptions", "setConfig", "setControls", "setCues", "setFullscreen", "setMute", "setPlaybackRate", "setPlaylistItem", "setVolume", "stop"].indexOf(u) > -1)
                        return W(u),
                        e;
                    if (["createInstream", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality"].indexOf(u) > -1)
                        return W(u),
                        null
                }
                if (c || s.push([u, o]),
                a)
                    return Q(t, s),
                    t[u].apply(e, i);
                ( (e, t) => {
                    const u = {
                        reason: "play" !== e && "seek" !== e && "pause" !== e && (0,
                        U.C)() ? "interaction" : "external"
                    };
                    switch (e) {
                    case "play":
                    case "pause":
                    case "playToggle":
                    case "playlistNext":
                    case "playlistPrev":
                    case "next":
                        t[0] = u;
                        break;
                    case "seek":
                    case "playlistItem":
                        t[1] = u
                    }
                }
                )(u, i);
                const d = t[u](...i);
                return "remove" === u ? t.off.call(e) : "setup" === u && (t.off.call(e),
                t.off(o.events, null, t),
                t.on.call(e, o.events, null, e),
                t.on("all", ( (u, i) => {
                    if ("ready" === u) {
                        const u = Object.keys(t).filter((e => "_" !== e[0] && -1 === n.indexOf(e) && "function" == typeof t[e]))
                          , i = n.concat(u);
                        u.forEach((u => {
                            e[u] = X(e, t, u, i, r)
                        }
                        ))
                    }
                    t.trigger.call(e, u, i),
                    Q(t, s)
                }
                ))),
                Q(t, s),
                d === t ? e : d
            }
              , J = ["getMediaElement"]
              , Y = (e, t, u, n) => {
                const r = Object.keys(u);
                r.forEach((i => {
                    const o = u[i];
                    -1 === J.indexOf(i) && ("function" == typeof o && "Events" !== i ? e[i] = X(e, t, i, r, n) : "_events" === i ? e._events = {} : Object.defineProperty(e, i, {
                        enumerable: !0,
                        get: () => u[i]
                    }))
                }
                ))
            }
              , ee = function(e) {
                const t = {};
                Y(this, e, e, t),
                Y(this, e, O.prototype, t)
            }
              , te = window;
            Object.assign(I, V);
            const ue = function(e) {
                const t = I(e);
                return t.uniqueId ? t._publicApi || (t._publicApi = new ee(t)) : t
            };
            Object.assign(ue, V),
            _(ue),
            "function" == typeof te.define && te.define.amd && te.define([], (function() {
                return ue
            }
            ));
            let ne = ue;
            te.jwplayer && (ne = te.jwplayer);
            const re = ne
        }
        ,
        8675: (e, t, u) => {
            "use strict";
            u.d(t, {
                Ve: () => n.Ve,
                ZP: () => r,
                fo: () => n.fo
            });
            u(3487);
            var n = u(1241);
            const r = n.ZP
        }
        ,
        3487: (e, t, u) => {
            "use strict";
            u.d(t, {
                MK: () => n.MK,
                Nq: () => n.Nq,
                bX: () => r,
                sb: () => i
            });
            u(1569);
            var n = u(7164);
            const r = function(e) {
                let t = (0,
                n.bX)(e);
                if (!e)
                    return t;
                switch ((0,
                n.Nq)(e)) {
                case "jwpsrv":
                    t = 305001;
                    break;
                case "googima":
                    t = 305002;
                    break;
                case "vast":
                    t = 305003;
                    break;
                case "freewheel":
                    t = 305004;
                    break;
                case "dai":
                    t = 305005;
                    break;
                case "gapro":
                    t = 305006;
                    break;
                case "bidding":
                    t = 305007
                }
                return t
            }
              , i = e => {
                let t = "";
                "https:" !== window.location.protocol && "http:" !== window.location.protocol && (t = "https:");
                const u = {
                    bidding: "//ssl.p.jwpcdn.com/player/v/8.36.3/bidding.js",
                    jwpsrv: "//ssl.p.jwpcdn.com/player/v/8.36.3/jwpsrv.js",
                    dai: "//ssl.p.jwpcdn.com/player/v/8.36.3/dai.js",
                    vast: "//ssl.p.jwpcdn.com/player/v/8.36.3/vast.js",
                    googima: "//ssl.p.jwpcdn.com/player/v/8.36.3/googima.js",
                    freewheel: "//ssl.p.jwpcdn.com/player/v/8.36.3/freewheel.js",
                    gapro: "//ssl.p.jwpcdn.com/player/v/8.36.3/gapro.js",
                    interactive: "//ssl.p.jwpcdn.com/player/v/8.36.3/interactive.js",
                    keepWatching: "//ssl.p.jwpcdn.com/player/v/8.36.3/keepWatching.js"
                }[e];
                return u ? t + u : ""
            }
        }
        ,
        1918: (e, t, u) => {
            "use strict";
            u.d(t, {
                Gb: () => l,
                d3: () => d,
                lD: () => c,
                w0: () => a
            });
            var n = u(386);
            const r = [{
                configName: "clearkey",
                keyName: "org.w3.clearkey"
            }, {
                configName: "widevine",
                keyName: "com.widevine.alpha"
            }, {
                configName: "playready",
                keyName: "com.microsoft.playready"
            }]
              , i = []
              , o = {};
            let s;
            const a = e => e.some((e => Boolean(e.drm) || e.sources.some((e => Boolean(e.drm)))))
              , c = e => s || ((Boolean(navigator.requestMediaKeySystemAccess) && Boolean(window.MediaKeySystemAccess.prototype.getConfiguration) || Boolean(window.MSMediaKeys)) && (0,
            n.Z)(e)("drm") ? (r.forEach((e => {
                const t = (u = e.keyName,
                n = [{
                    initDataTypes: ["cenc"],
                    videoCapabilities: [{
                        contentType: 'video/mp4;codecs="avc1.4d401e"'
                    }],
                    audioCapabilities: [{
                        contentType: 'audio/mp4;codecs="mp4a.40.2"'
                    }]
                }],
                navigator.requestMediaKeySystemAccess ? navigator.requestMediaKeySystemAccess(u, n) : new Promise(( (e, t) => {
                    let n;
                    try {
                        n = new window.MSMediaKeys(u)
                    } catch (e) {
                        return void t(e)
                    }
                    e(n)
                }
                ))).then((function() {
                    o[e.configName] = !0
                }
                )).catch((function() {
                    o[e.configName] = !1
                }
                ));
                var u, n;
                i.push(t)
            }
            )),
            s = Promise.all(i),
            s) : Promise.resolve())
              , l = e => o[e]
              , d = e => {
                if (s)
                    return Object.keys(e).some((e => l(e)))
            }
        }
        ,
        2963: (e, t, u) => {
            "use strict";
            u.d(t, {
                B: () => g
            });
            var n = u(6593)
              , r = u(8348)
              , i = u(386)
              , o = u(1918)
              , s = u(9025);
            const a = e => {
                var t;
                null != (t = e) && t.length && Array.isArray(e) || (e = ['video/mp4;codecs="avc1.4d400d,mp4a.40.2"']);
                const u = window.MediaSource;
                return !(!u || !u.isTypeSupported) && e.every((e => u.isTypeSupported(e)))
            }
              , c = e => /hls|m3u8/.test(((null == e ? void 0 : e.type) || "").toLowerCase()) || ((null == e ? void 0 : e.file) || "").toLowerCase().indexOf(".m3u8") > -1
              , l = e => /mpd|dash/.test(((null == e ? void 0 : e.type) || "").toLowerCase()) || ((null == e ? void 0 : e.file) || "").toLowerCase().indexOf("mpd-time-csf") > -1
              , d = n.B.find((e => "html5" === e.name))
              , D = d.supports
              , f = function(...e) {
                const [t,u] = e
                  , n = D.apply(this, e);
                if (l(t))
                    return !1;
                if (n && t.drm && c(t)) {
                    const e = (0,
                    i.Z)(u)("drm");
                    if (e && t.drm.fairplay) {
                        const e = window.WebKitMediaKeys;
                        return null == e || null == e.isTypeSupported ? void 0 : e.isTypeSupported("com.apple.fps.1_0", "video/mp4")
                    }
                    return e
                }
                return n
            }
              , p = e => {
                if (e.drm || !c(e))
                    return !1;
                const t = Boolean(null == s.Z || null == s.Z.canPlayType ? void 0 : s.Z.canPlayType("application/vnd.apple.mpegURL"))
                  , u = "boolean" == typeof (null == e ? void 0 : e.safarihlsjs) && e.safarihlsjs;
                "boolean" != typeof (null == e ? void 0 : e.hlsjsdefault) || e.hlsjsdefault,
                "boolean" != typeof (null == e ? void 0 : e.androidhls) || e.androidhls;
                return (!r.OS.iPad || !r.Browser.chrome) && (!(t && r.Browser.safari && !u) && ((!t || !r.OS.android || !1 === e.androidhls || !1 !== e.hlsjsdefault) && a(e.mediaTypes)))
            }
              , h = e => !(e.drm && !(0,
            o.d3)(e.drm)) && (a(e.mediaTypes) && (l(e) || c(e)));
            d.supports = f,
            n.B.push({
                name: "shaka",
                supports: h
            }),
            n.B.unshift({
                name: "hlsjs",
                supports: p
            });
            const g = n.B
        }
        ,
        2303: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => d
            });
            var n = u(2963)
              , r = u(12)
              , i = u(670)
              , o = u(2894);
            const s = {
                html5: () => u.e(250).then(function(e) {
                    const t = u(9181).default;
                    return (0,
                    i.Z)(t),
                    t
                }
                .bind(null, u)).catch((0,
                o.Ep)(152))
            };
            Object.assign(s, {
                shaka: () => u.e(371).then(function(e) {
                    const t = u(2287).default;
                    return (0,
                    i.Z)(t),
                    t
                }
                .bind(null, u)).catch((0,
                o.Ep)(154)),
                hlsjs: () => u.e(98).then(function(e) {
                    const t = u(9054).default;
                    return (0,
                    i.Z)(t),
                    t
                }
                .bind(null, u)).catch((0,
                o.Ep)(153))
            });
            const a = s
              , c = function(e) {
                this.config = e || {}
            };
            Object.assign(c.prototype, {
                load(e) {
                    const t = a[e]
                      , u = () => Promise.reject(new Error("Failed to load media"));
                    return t ? t().then(( () => {
                        const t = r.U[e];
                        return t || u()
                    }
                    )) : u()
                },
                providerSupports: (e, t) => e.supports(t),
                choose(e) {
                    if (e === Object(e)) {
                        const t = n.B.length;
                        for (let u = 0; u < t; u++) {
                            const i = n.B[u];
                            if (this.providerSupports(i, e)) {
                                return {
                                    priority: t - u - 1,
                                    name: i.name,
                                    type: e.type,
                                    providerToCheck: i,
                                    provider: r.U[i.name]
                                }
                            }
                        }
                    }
                    return {}
                }
            });
            const l = c;
            l.prototype.providerSupports = function(e, t) {
                return e.supports(t, this.config.edition)
            }
            ;
            const d = l
        }
        ,
        5140: (e, t, u) => {
            "use strict";
            u.d(t, {
                t: () => n
            });
            const n = window.atob;
            window.btoa
        }
        ,
        386: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => p
            });
            const n = "free"
              , r = "starter"
              , i = "business"
              , o = "premium"
              , s = "enterprise"
              , a = "developer"
              , c = "platinum"
              , l = "ads"
              , d = "unlimited"
              , D = "trial"
              , f = "invalid";
            function p(e) {
                const t = {
                    setup: [n, r, i, o, s, a, l, d, D, c],
                    drm: [s, a, l, d, D],
                    ads: [l, d, D, c, s, a, i],
                    jwpsrv: [n, r, i, o, s, a, l, D, c, f],
                    discovery: [l, s, a, D, d]
                };
                return function(u) {
                    return t[u] && t[u].indexOf(e) > -1
                }
            }
        }
        ,
        7010: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => i
            });
            var n = u(5950);
            const r = function(e, t) {
                return e.location !== e.parent.location && (0,
                n.ke)(t, "isAMP")
            };
            function i() {
                return r(window, document.location.search)
            }
        }
        ,
        560: (e, t, u) => {
            "use strict";
            u.d(t, {
                Z: () => r
            });
            const n = () => n._iframe;
            n.mock = e => {
                n._iframe = e
            }
            ,
            n.unmock = () => {
                n._iframe = n._original
            }
            ,
            n._iframe = window.top !== window.self,
            n._original = n._iframe;
            const r = n
        }
        ,
        6599: (e, t, u) => {
            "use strict";
            u.d(t, {
                ZP: () => c,
                u5: () => s
            });
            var n = u(5592)
              , r = u(386)
              , i = u(5140)
              , o = u(4446);
            const s = 100013
              , a = "invalid";
            const c = class {
                constructor(e) {
                    this.keyData = (e => {
                        let t, u, o;
                        try {
                            const s = (0,
                            n.p)(e || "", (0,
                            i.t)("NDh2aU1Cb0NHRG5hcDFRZQ==")).split("/");
                            if (t = s[0],
                            "pro" === t && (t = "premium"),
                            (0,
                            r.Z)(t)("setup") || (t = a),
                            s.length > 2) {
                                u = s[1];
                                const e = parseInt(s[2], 10);
                                e > 0 && (o = new Date,
                                o.setTime(e))
                            }
                        } catch (e) {
                            t = a
                        }
                        return {
                            edition: t,
                            token: u,
                            expiration: o
                        }
                    }
                    )(e),
                    this.edition = function() {
                        return this.keyData.edition
                    }
                    ,
                    this.token = function() {
                        return this.keyData.token
                    }
                    ,
                    this.expiration = function() {
                        return this.keyData.expiration
                    }
                    ,
                    this.duration = function() {
                        return this.keyData.expiration ? this.keyData.expiration.getTime() - (new Date).getTime() : 0
                    }
                    ,
                    this.error = function() {
                        let t;
                        return void 0 === e ? t = 100011 : this.keyData.edition !== a && this.keyData.token ? this.duration() < 0 && (t = s) : t = 100012,
                        t ? new o.rG(o.pJ,t) : null
                    }
                }
            }
        }
        ,
        67: (e, t, u) => {
            "use strict";
            u.d(t, {
                X: () => r
            });
            var n = u(560);
            const r = () => {
                let e = window.location.host;
                if ((0,
                n.Z)()) {
                    e = (document.referrer ? (e => {
                        const t = document.createElement("a");
                        return t.href = e,
                        t
                    }
                    )(document.referrer) : {}).host;
                    try {
                        e = e || window.top.location.host
                    } catch (e) {}
                }
                return e
            }
        }
        ,
        5592: (e, t, u) => {
            "use strict";
            u.d(t, {
                p: () => s
            });
            var n = u(5140);
            const r = e => unescape(encodeURIComponent(e))
              , i = e => {
                const t = new Array(Math.ceil(e.length / 4));
                for (let u = 0; u < t.length; u++)
                    t[u] = e.charCodeAt(4 * u) + (e.charCodeAt(4 * u + 1) << 8) + (e.charCodeAt(4 * u + 2) << 16) + (e.charCodeAt(4 * u + 3) << 24);
                return t
            }
              , o = e => {
                const t = new Array(e.length);
                for (let u = 0; u < e.length; u++)
                    t[u] = String.fromCharCode(255 & e[u], e[u] >>> 8 & 255, e[u] >>> 16 & 255, e[u] >>> 24 & 255);
                return t.join("")
            }
              , s = function(e, t) {
                if (e = String(e),
                t = String(t),
                0 === e.length)
                    return "";
                const u = i((0,
                n.t)(e))
                  , s = i(r(t).slice(0, 16))
                  , a = u.length
                  , c = 2654435769;
                let l, d, D = u[a - 1], f = u[0], p = Math.floor(6 + 52 / a) * c;
                for (; p; ) {
                    d = p >>> 2 & 3;
                    for (let e = a - 1; e >= 0; e--)
                        D = u[e > 0 ? e - 1 : a - 1],
                        l = (D >>> 5 ^ f << 2) + (f >>> 3 ^ D << 4) ^ (p ^ f) + (s[3 & e ^ d] ^ D),
                        f = u[e] -= l;
                    p -= c
                }
                return (e => {
                    try {
                        return decodeURIComponent(escape(e))
                    } catch (t) {
                        return e
                    }
                }
                )(o(u).replace(/\0+$/, ""))
            }
        }
        ,
        1142: function(e) {
            e.exports = function() {
                "use strict";
                function e(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports),
                    t.exports
                }
                var t = e((function(e) {
                    var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                    "number" == typeof __g && (__g = t)
                }
                ))
                  , u = e((function(e) {
                    var t = e.exports = {
                        version: "2.6.5"
                    };
                    "number" == typeof __e && (__e = t)
                }
                ))
                  , n = (u.version,
                function(e) {
                    return "object" == typeof e ? null !== e : "function" == typeof e
                }
                )
                  , r = function(e) {
                    if (!n(e))
                        throw TypeError(e + " is not an object!");
                    return e
                }
                  , i = function(e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                }
                  , o = !i((function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }
                ))
                  , s = t.document
                  , a = n(s) && n(s.createElement)
                  , c = function(e) {
                    return a ? s.createElement(e) : {}
                }
                  , l = !o && !i((function() {
                    return 7 != Object.defineProperty(c("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }
                ))
                  , d = function(e, t) {
                    if (!n(e))
                        return e;
                    var u, r;
                    if (t && "function" == typeof (u = e.toString) && !n(r = u.call(e)))
                        return r;
                    if ("function" == typeof (u = e.valueOf) && !n(r = u.call(e)))
                        return r;
                    if (!t && "function" == typeof (u = e.toString) && !n(r = u.call(e)))
                        return r;
                    throw TypeError("Can't convert object to primitive value")
                }
                  , D = Object.defineProperty
                  , f = {
                    f: o ? Object.defineProperty : function(e, t, u) {
                        if (r(e),
                        t = d(t, !0),
                        r(u),
                        l)
                            try {
                                return D(e, t, u)
                            } catch (e) {}
                        if ("get"in u || "set"in u)
                            throw TypeError("Accessors not supported!");
                        return "value"in u && (e[t] = u.value),
                        e
                    }
                }
                  , p = function(e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    }
                }
                  , h = o ? function(e, t, u) {
                    return f.f(e, t, p(1, u))
                }
                : function(e, t, u) {
                    return e[t] = u,
                    e
                }
                  , g = {}.hasOwnProperty
                  , m = function(e, t) {
                    return g.call(e, t)
                }
                  , C = 0
                  , F = Math.random()
                  , y = function(e) {
                    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++C + F).toString(36))
                }
                  , A = !1
                  , E = e((function(e) {
                    var n = "__core-js_shared__"
                      , r = t[n] || (t[n] = {});
                    (e.exports = function(e, t) {
                        return r[e] || (r[e] = void 0 !== t ? t : {})
                    }
                    )("versions", []).push({
                        version: u.version,
                        mode: A ? "pure" : "global",
                        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                    })
                }
                ))
                  , v = E("native-function-to-string", Function.toString)
                  , b = e((function(e) {
                    var n = y("src")
                      , r = "toString"
                      , i = ("" + v).split(r);
                    u.inspectSource = function(e) {
                        return v.call(e)
                    }
                    ,
                    (e.exports = function(e, u, r, o) {
                        var s = "function" == typeof r;
                        s && (m(r, "name") || h(r, "name", u)),
                        e[u] !== r && (s && (m(r, n) || h(r, n, e[u] ? "" + e[u] : i.join(String(u)))),
                        e === t ? e[u] = r : o ? e[u] ? e[u] = r : h(e, u, r) : (delete e[u],
                        h(e, u, r)))
                    }
                    )(Function.prototype, r, (function() {
                        return "function" == typeof this && this[n] || v.call(this)
                    }
                    ))
                }
                ))
                  , w = function(e) {
                    if ("function" != typeof e)
                        throw TypeError(e + " is not a function!");
                    return e
                }
                  , B = function(e, t, u) {
                    if (w(e),
                    void 0 === t)
                        return e;
                    switch (u) {
                    case 1:
                        return function(u) {
                            return e.call(t, u)
                        }
                        ;
                    case 2:
                        return function(u, n) {
                            return e.call(t, u, n)
                        }
                        ;
                    case 3:
                        return function(u, n, r) {
                            return e.call(t, u, n, r)
                        }
                    }
                    return function() {
                        return e.apply(t, arguments)
                    }
                }
                  , k = "prototype"
                  , j = function(e, n, r) {
                    var i, o, s, a, c = e & j.F, l = e & j.G, d = e & j.S, D = e & j.P, f = e & j.B, p = l ? t : d ? t[n] || (t[n] = {}) : (t[n] || {})[k], g = l ? u : u[n] || (u[n] = {}), m = g[k] || (g[k] = {});
                    for (i in l && (r = n),
                    r)
                        s = ((o = !c && p && void 0 !== p[i]) ? p : r)[i],
                        a = f && o ? B(s, t) : D && "function" == typeof s ? B(Function.call, s) : s,
                        p && b(p, i, s, e & j.U),
                        g[i] != s && h(g, i, a),
                        D && m[i] != s && (m[i] = s)
                };
                t.core = u,
                j.F = 1,
                j.G = 2,
                j.S = 4,
                j.P = 8,
                j.B = 16,
                j.W = 32,
                j.U = 64,
                j.R = 128;
                var P, S = j, O = Math.ceil, x = Math.floor, T = function(e) {
                    return isNaN(e = +e) ? 0 : (e > 0 ? x : O)(e)
                }, _ = function(e) {
                    if (null == e)
                        throw TypeError("Can't call method on  " + e);
                    return e
                }, I = (P = !1,
                function(e, t) {
                    var u, n, r = String(_(e)), i = T(t), o = r.length;
                    return i < 0 || i >= o ? P ? "" : void 0 : (u = r.charCodeAt(i)) < 55296 || u > 56319 || i + 1 === o || (n = r.charCodeAt(i + 1)) < 56320 || n > 57343 ? P ? r.charAt(i) : u : P ? r.slice(i, i + 2) : n - 56320 + (u - 55296 << 10) + 65536
                }
                );
                S(S.P, "String", {
                    codePointAt: function(e) {
                        return I(this, e)
                    }
                }),
                u.String.codePointAt;
                var Z = Math.max
                  , N = Math.min
                  , L = function(e, t) {
                    return (e = T(e)) < 0 ? Z(e + t, 0) : N(e, t)
                }
                  , M = String.fromCharCode
                  , $ = String.fromCodePoint;
                S(S.S + S.F * (!!$ && 1 != $.length), "String", {
                    fromCodePoint: function(e) {
                        for (var t, u = arguments, n = [], r = arguments.length, i = 0; r > i; ) {
                            if (t = +u[i++],
                            L(t, 1114111) !== t)
                                throw RangeError(t + " is not a valid code point");
                            n.push(t < 65536 ? M(t) : M(55296 + ((t -= 65536) >> 10), t % 1024 + 56320))
                        }
                        return n.join("")
                    }
                }),
                u.String.fromCodePoint;
                var R, q, z, V, U, H, G, W, K, Q, X, J, Y, ee, te = {
                    Space_Separator: /[\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                    ID_Start: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
                    ID_Continue: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
                }, ue = {
                    isSpaceSeparator: function(e) {
                        return "string" == typeof e && te.Space_Separator.test(e)
                    },
                    isIdStartChar: function(e) {
                        return "string" == typeof e && (e >= "a" && e <= "z" || e >= "A" && e <= "Z" || "$" === e || "_" === e || te.ID_Start.test(e))
                    },
                    isIdContinueChar: function(e) {
                        return "string" == typeof e && (e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || "$" === e || "_" === e || "‌" === e || "‍" === e || te.ID_Continue.test(e))
                    },
                    isDigit: function(e) {
                        return "string" == typeof e && /[0-9]/.test(e)
                    },
                    isHexDigit: function(e) {
                        return "string" == typeof e && /[0-9A-Fa-f]/.test(e)
                    }
                }, ne = function(e, t) {
                    R = String(e),
                    q = "start",
                    z = [],
                    V = 0,
                    U = 1,
                    H = 0,
                    G = void 0,
                    W = void 0,
                    K = void 0;
                    do {
                        G = ie(),
                        pe[q]()
                    } while ("eof" !== G.type);
                    return "function" == typeof t ? re({
                        "": K
                    }, "", t) : K
                };
                function re(e, t, u) {
                    var n = e[t];
                    if (null != n && "object" == typeof n)
                        if (Array.isArray(n))
                            for (var r = 0; r < n.length; r++) {
                                var i = String(r)
                                  , o = re(n, i, u);
                                void 0 === o ? delete n[i] : Object.defineProperty(n, i, {
                                    value: o,
                                    writable: !0,
                                    enumerable: !0,
                                    configurable: !0
                                })
                            }
                        else
                            for (var s in n) {
                                var a = re(n, s, u);
                                void 0 === a ? delete n[s] : Object.defineProperty(n, s, {
                                    value: a,
                                    writable: !0,
                                    enumerable: !0,
                                    configurable: !0
                                })
                            }
                    return u.call(e, t, n)
                }
                function ie() {
                    for (Q = "default",
                    X = "",
                    J = !1,
                    Y = 1; ; ) {
                        ee = oe();
                        var e = ae[Q]();
                        if (e)
                            return e
                    }
                }
                function oe() {
                    if (R[V])
                        return String.fromCodePoint(R.codePointAt(V))
                }
                function se() {
                    var e = oe();
                    return "\n" === e ? (U++,
                    H = 0) : e ? H += e.length : H++,
                    e && (V += e.length),
                    e
                }
                var ae = {
                    default: function() {
                        switch (ee) {
                        case "\t":
                        case "\v":
                        case "\f":
                        case " ":
                        case " ":
                        case "\ufeff":
                        case "\n":
                        case "\r":
                        case "\u2028":
                        case "\u2029":
                            return void se();
                        case "/":
                            return se(),
                            void (Q = "comment");
                        case void 0:
                            return se(),
                            ce("eof")
                        }
                        if (!ue.isSpaceSeparator(ee))
                            return ae[q]();
                        se()
                    },
                    comment: function() {
                        switch (ee) {
                        case "*":
                            return se(),
                            void (Q = "multiLineComment");
                        case "/":
                            return se(),
                            void (Q = "singleLineComment")
                        }
                        throw me(se())
                    },
                    multiLineComment: function() {
                        switch (ee) {
                        case "*":
                            return se(),
                            void (Q = "multiLineCommentAsterisk");
                        case void 0:
                            throw me(se())
                        }
                        se()
                    },
                    multiLineCommentAsterisk: function() {
                        switch (ee) {
                        case "*":
                            return void se();
                        case "/":
                            return se(),
                            void (Q = "default");
                        case void 0:
                            throw me(se())
                        }
                        se(),
                        Q = "multiLineComment"
                    },
                    singleLineComment: function() {
                        switch (ee) {
                        case "\n":
                        case "\r":
                        case "\u2028":
                        case "\u2029":
                            return se(),
                            void (Q = "default");
                        case void 0:
                            return se(),
                            ce("eof")
                        }
                        se()
                    },
                    value: function() {
                        switch (ee) {
                        case "{":
                        case "[":
                            return ce("punctuator", se());
                        case "n":
                            return se(),
                            le("ull"),
                            ce("null", null);
                        case "t":
                            return se(),
                            le("rue"),
                            ce("boolean", !0);
                        case "f":
                            return se(),
                            le("alse"),
                            ce("boolean", !1);
                        case "-":
                        case "+":
                            return "-" === se() && (Y = -1),
                            void (Q = "sign");
                        case ".":
                            return X = se(),
                            void (Q = "decimalPointLeading");
                        case "0":
                            return X = se(),
                            void (Q = "zero");
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                            return X = se(),
                            void (Q = "decimalInteger");
                        case "I":
                            return se(),
                            le("nfinity"),
                            ce("numeric", 1 / 0);
                        case "N":
                            return se(),
                            le("aN"),
                            ce("numeric", NaN);
                        case '"':
                        case "'":
                            return J = '"' === se(),
                            X = "",
                            void (Q = "string")
                        }
                        throw me(se())
                    },
                    identifierNameStartEscape: function() {
                        if ("u" !== ee)
                            throw me(se());
                        se();
                        var e = fe();
                        switch (e) {
                        case "$":
                        case "_":
                            break;
                        default:
                            if (!ue.isIdStartChar(e))
                                throw Fe()
                        }
                        X += e,
                        Q = "identifierName"
                    },
                    identifierName: function() {
                        switch (ee) {
                        case "$":
                        case "_":
                        case "‌":
                        case "‍":
                            return void (X += se());
                        case "\\":
                            return se(),
                            void (Q = "identifierNameEscape")
                        }
                        if (!ue.isIdContinueChar(ee))
                            return ce("identifier", X);
                        X += se()
                    },
                    identifierNameEscape: function() {
                        if ("u" !== ee)
                            throw me(se());
                        se();
                        var e = fe();
                        switch (e) {
                        case "$":
                        case "_":
                        case "‌":
                        case "‍":
                            break;
                        default:
                            if (!ue.isIdContinueChar(e))
                                throw Fe()
                        }
                        X += e,
                        Q = "identifierName"
                    },
                    sign: function() {
                        switch (ee) {
                        case ".":
                            return X = se(),
                            void (Q = "decimalPointLeading");
                        case "0":
                            return X = se(),
                            void (Q = "zero");
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                            return X = se(),
                            void (Q = "decimalInteger");
                        case "I":
                            return se(),
                            le("nfinity"),
                            ce("numeric", Y * (1 / 0));
                        case "N":
                            return se(),
                            le("aN"),
                            ce("numeric", NaN)
                        }
                        throw me(se())
                    },
                    zero: function() {
                        switch (ee) {
                        case ".":
                            return X += se(),
                            void (Q = "decimalPoint");
                        case "e":
                        case "E":
                            return X += se(),
                            void (Q = "decimalExponent");
                        case "x":
                        case "X":
                            return X += se(),
                            void (Q = "hexadecimal")
                        }
                        return ce("numeric", 0 * Y)
                    },
                    decimalInteger: function() {
                        switch (ee) {
                        case ".":
                            return X += se(),
                            void (Q = "decimalPoint");
                        case "e":
                        case "E":
                            return X += se(),
                            void (Q = "decimalExponent")
                        }
                        if (!ue.isDigit(ee))
                            return ce("numeric", Y * Number(X));
                        X += se()
                    },
                    decimalPointLeading: function() {
                        if (ue.isDigit(ee))
                            return X += se(),
                            void (Q = "decimalFraction");
                        throw me(se())
                    },
                    decimalPoint: function() {
                        switch (ee) {
                        case "e":
                        case "E":
                            return X += se(),
                            void (Q = "decimalExponent")
                        }
                        return ue.isDigit(ee) ? (X += se(),
                        void (Q = "decimalFraction")) : ce("numeric", Y * Number(X))
                    },
                    decimalFraction: function() {
                        switch (ee) {
                        case "e":
                        case "E":
                            return X += se(),
                            void (Q = "decimalExponent")
                        }
                        if (!ue.isDigit(ee))
                            return ce("numeric", Y * Number(X));
                        X += se()
                    },
                    decimalExponent: function() {
                        switch (ee) {
                        case "+":
                        case "-":
                            return X += se(),
                            void (Q = "decimalExponentSign")
                        }
                        if (ue.isDigit(ee))
                            return X += se(),
                            void (Q = "decimalExponentInteger");
                        throw me(se())
                    },
                    decimalExponentSign: function() {
                        if (ue.isDigit(ee))
                            return X += se(),
                            void (Q = "decimalExponentInteger");
                        throw me(se())
                    },
                    decimalExponentInteger: function() {
                        if (!ue.isDigit(ee))
                            return ce("numeric", Y * Number(X));
                        X += se()
                    },
                    hexadecimal: function() {
                        if (ue.isHexDigit(ee))
                            return X += se(),
                            void (Q = "hexadecimalInteger");
                        throw me(se())
                    },
                    hexadecimalInteger: function() {
                        if (!ue.isHexDigit(ee))
                            return ce("numeric", Y * Number(X));
                        X += se()
                    },
                    string: function() {
                        switch (ee) {
                        case "\\":
                            return se(),
                            void (X += de());
                        case '"':
                            return J ? (se(),
                            ce("string", X)) : void (X += se());
                        case "'":
                            return J ? void (X += se()) : (se(),
                            ce("string", X));
                        case "\n":
                        case "\r":
                            throw me(se());
                        case "\u2028":
                        case "\u2029":
                            ye(ee);
                            break;
                        case void 0:
                            throw me(se())
                        }
                        X += se()
                    },
                    start: function() {
                        switch (ee) {
                        case "{":
                        case "[":
                            return ce("punctuator", se())
                        }
                        Q = "value"
                    },
                    beforePropertyName: function() {
                        switch (ee) {
                        case "$":
                        case "_":
                            return X = se(),
                            void (Q = "identifierName");
                        case "\\":
                            return se(),
                            void (Q = "identifierNameStartEscape");
                        case "}":
                            return ce("punctuator", se());
                        case '"':
                        case "'":
                            return J = '"' === se(),
                            void (Q = "string")
                        }
                        if (ue.isIdStartChar(ee))
                            return X += se(),
                            void (Q = "identifierName");
                        throw me(se())
                    },
                    afterPropertyName: function() {
                        if (":" === ee)
                            return ce("punctuator", se());
                        throw me(se())
                    },
                    beforePropertyValue: function() {
                        Q = "value"
                    },
                    afterPropertyValue: function() {
                        switch (ee) {
                        case ",":
                        case "}":
                            return ce("punctuator", se())
                        }
                        throw me(se())
                    },
                    beforeArrayValue: function() {
                        if ("]" === ee)
                            return ce("punctuator", se());
                        Q = "value"
                    },
                    afterArrayValue: function() {
                        switch (ee) {
                        case ",":
                        case "]":
                            return ce("punctuator", se())
                        }
                        throw me(se())
                    },
                    end: function() {
                        throw me(se())
                    }
                };
                function ce(e, t) {
                    return {
                        type: e,
                        value: t,
                        line: U,
                        column: H
                    }
                }
                function le(e) {
                    for (var t = 0, u = e; t < u.length; t += 1) {
                        var n = u[t];
                        if (oe() !== n)
                            throw me(se());
                        se()
                    }
                }
                function de() {
                    switch (oe()) {
                    case "b":
                        return se(),
                        "\b";
                    case "f":
                        return se(),
                        "\f";
                    case "n":
                        return se(),
                        "\n";
                    case "r":
                        return se(),
                        "\r";
                    case "t":
                        return se(),
                        "\t";
                    case "v":
                        return se(),
                        "\v";
                    case "0":
                        if (se(),
                        ue.isDigit(oe()))
                            throw me(se());
                        return "\0";
                    case "x":
                        return se(),
                        De();
                    case "u":
                        return se(),
                        fe();
                    case "\n":
                    case "\u2028":
                    case "\u2029":
                        return se(),
                        "";
                    case "\r":
                        return se(),
                        "\n" === oe() && se(),
                        "";
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                    case void 0:
                        throw me(se())
                    }
                    return se()
                }
                function De() {
                    var e = ""
                      , t = oe();
                    if (!ue.isHexDigit(t))
                        throw me(se());
                    if (e += se(),
                    t = oe(),
                    !ue.isHexDigit(t))
                        throw me(se());
                    return e += se(),
                    String.fromCodePoint(parseInt(e, 16))
                }
                function fe() {
                    for (var e = "", t = 4; t-- > 0; ) {
                        var u = oe();
                        if (!ue.isHexDigit(u))
                            throw me(se());
                        e += se()
                    }
                    return String.fromCodePoint(parseInt(e, 16))
                }
                var pe = {
                    start: function() {
                        if ("eof" === G.type)
                            throw Ce();
                        he()
                    },
                    beforePropertyName: function() {
                        switch (G.type) {
                        case "identifier":
                        case "string":
                            return W = G.value,
                            void (q = "afterPropertyName");
                        case "punctuator":
                            return void ge();
                        case "eof":
                            throw Ce()
                        }
                    },
                    afterPropertyName: function() {
                        if ("eof" === G.type)
                            throw Ce();
                        q = "beforePropertyValue"
                    },
                    beforePropertyValue: function() {
                        if ("eof" === G.type)
                            throw Ce();
                        he()
                    },
                    beforeArrayValue: function() {
                        if ("eof" === G.type)
                            throw Ce();
                        "punctuator" !== G.type || "]" !== G.value ? he() : ge()
                    },
                    afterPropertyValue: function() {
                        if ("eof" === G.type)
                            throw Ce();
                        switch (G.value) {
                        case ",":
                            return void (q = "beforePropertyName");
                        case "}":
                            ge()
                        }
                    },
                    afterArrayValue: function() {
                        if ("eof" === G.type)
                            throw Ce();
                        switch (G.value) {
                        case ",":
                            return void (q = "beforeArrayValue");
                        case "]":
                            ge()
                        }
                    },
                    end: function() {}
                };
                function he() {
                    var e;
                    switch (G.type) {
                    case "punctuator":
                        switch (G.value) {
                        case "{":
                            e = {};
                            break;
                        case "[":
                            e = []
                        }
                        break;
                    case "null":
                    case "boolean":
                    case "numeric":
                    case "string":
                        e = G.value
                    }
                    if (void 0 === K)
                        K = e;
                    else {
                        var t = z[z.length - 1];
                        Array.isArray(t) ? t.push(e) : Object.defineProperty(t, W, {
                            value: e,
                            writable: !0,
                            enumerable: !0,
                            configurable: !0
                        })
                    }
                    if (null !== e && "object" == typeof e)
                        z.push(e),
                        q = Array.isArray(e) ? "beforeArrayValue" : "beforePropertyName";
                    else {
                        var u = z[z.length - 1];
                        q = null == u ? "end" : Array.isArray(u) ? "afterArrayValue" : "afterPropertyValue"
                    }
                }
                function ge() {
                    z.pop();
                    var e = z[z.length - 1];
                    q = null == e ? "end" : Array.isArray(e) ? "afterArrayValue" : "afterPropertyValue"
                }
                function me(e) {
                    return Ee(void 0 === e ? "JSON5: invalid end of input at " + U + ":" + H : "JSON5: invalid character '" + Ae(e) + "' at " + U + ":" + H)
                }
                function Ce() {
                    return Ee("JSON5: invalid end of input at " + U + ":" + H)
                }
                function Fe() {
                    return Ee("JSON5: invalid identifier character at " + U + ":" + (H -= 5))
                }
                function ye(e) {
                    console.warn("JSON5: '" + Ae(e) + "' in strings is not valid ECMAScript; consider escaping")
                }
                function Ae(e) {
                    var t = {
                        "'": "\\'",
                        '"': '\\"',
                        "\\": "\\\\",
                        "\b": "\\b",
                        "\f": "\\f",
                        "\n": "\\n",
                        "\r": "\\r",
                        "\t": "\\t",
                        "\v": "\\v",
                        "\0": "\\0",
                        "\u2028": "\\u2028",
                        "\u2029": "\\u2029"
                    };
                    if (t[e])
                        return t[e];
                    if (e < " ") {
                        var u = e.charCodeAt(0).toString(16);
                        return "\\x" + ("00" + u).substring(u.length)
                    }
                    return e
                }
                function Ee(e) {
                    var t = new SyntaxError(e);
                    return t.lineNumber = U,
                    t.columnNumber = H,
                    t
                }
                return {
                    parse: ne,
                    stringify: function(e, t, u) {
                        var n, r, i, o = [], s = "", a = "";
                        if (null == t || "object" != typeof t || Array.isArray(t) || (u = t.space,
                        i = t.quote,
                        t = t.replacer),
                        "function" == typeof t)
                            r = t;
                        else if (Array.isArray(t)) {
                            n = [];
                            for (var c = 0, l = t; c < l.length; c += 1) {
                                var d = l[c]
                                  , D = void 0;
                                "string" == typeof d ? D = d : ("number" == typeof d || d instanceof String || d instanceof Number) && (D = String(d)),
                                void 0 !== D && n.indexOf(D) < 0 && n.push(D)
                            }
                        }
                        return u instanceof Number ? u = Number(u) : u instanceof String && (u = String(u)),
                        "number" == typeof u ? u > 0 && (u = Math.min(10, Math.floor(u)),
                        a = "          ".substr(0, u)) : "string" == typeof u && (a = u.substr(0, 10)),
                        f("", {
                            "": e
                        });
                        function f(e, t) {
                            var u = t[e];
                            switch (null != u && ("function" == typeof u.toJSON5 ? u = u.toJSON5(e) : "function" == typeof u.toJSON && (u = u.toJSON(e))),
                            r && (u = r.call(t, e, u)),
                            u instanceof Number ? u = Number(u) : u instanceof String ? u = String(u) : u instanceof Boolean && (u = u.valueOf()),
                            u) {
                            case null:
                                return "null";
                            case !0:
                                return "true";
                            case !1:
                                return "false"
                            }
                            return "string" == typeof u ? p(u, !1) : "number" == typeof u ? String(u) : "object" == typeof u ? Array.isArray(u) ? m(u) : h(u) : void 0
                        }
                        function p(e) {
                            for (var t = {
                                "'": .1,
                                '"': .2
                            }, u = {
                                "'": "\\'",
                                '"': '\\"',
                                "\\": "\\\\",
                                "\b": "\\b",
                                "\f": "\\f",
                                "\n": "\\n",
                                "\r": "\\r",
                                "\t": "\\t",
                                "\v": "\\v",
                                "\0": "\\0",
                                "\u2028": "\\u2028",
                                "\u2029": "\\u2029"
                            }, n = "", r = 0; r < e.length; r++) {
                                var o = e[r];
                                switch (o) {
                                case "'":
                                case '"':
                                    t[o]++,
                                    n += o;
                                    continue;
                                case "\0":
                                    if (ue.isDigit(e[r + 1])) {
                                        n += "\\x00";
                                        continue
                                    }
                                }
                                if (u[o])
                                    n += u[o];
                                else if (o < " ") {
                                    var s = o.charCodeAt(0).toString(16);
                                    n += "\\x" + ("00" + s).substring(s.length)
                                } else
                                    n += o
                            }
                            var a = i || Object.keys(t).reduce((function(e, u) {
                                return t[e] < t[u] ? e : u
                            }
                            ));
                            return a + (n = n.replace(new RegExp(a,"g"), u[a])) + a
                        }
                        function h(e) {
                            if (o.indexOf(e) >= 0)
                                throw TypeError("Converting circular structure to JSON5");
                            o.push(e);
                            var t = s;
                            s += a;
                            for (var u, r, i = [], c = 0, l = n || Object.keys(e); c < l.length; c += 1) {
                                var d = l[c]
                                  , D = f(d, e);
                                if (void 0 !== D) {
                                    var p = g(d) + ":";
                                    "" !== a && (p += " "),
                                    p += D,
                                    i.push(p)
                                }
                            }
                            if (0 === i.length)
                                u = "{}";
                            else if ("" === a)
                                u = "{" + (r = i.join(",")) + "}";
                            else {
                                var h = ",\n" + s;
                                r = i.join(h),
                                u = "{\n" + s + r + ",\n" + t + "}"
                            }
                            return o.pop(),
                            s = t,
                            u
                        }
                        function g(e) {
                            if (0 === e.length)
                                return p(e, !0);
                            var t = String.fromCodePoint(e.codePointAt(0));
                            if (!ue.isIdStartChar(t))
                                return p(e, !0);
                            for (var u = t.length; u < e.length; u++)
                                if (!ue.isIdContinueChar(String.fromCodePoint(e.codePointAt(u))))
                                    return p(e, !0);
                            return e
                        }
                        function m(e) {
                            if (o.indexOf(e) >= 0)
                                throw TypeError("Converting circular structure to JSON5");
                            o.push(e);
                            var t = s;
                            s += a;
                            for (var u, n = [], r = 0; r < e.length; r++) {
                                var i = f(String(r), e);
                                n.push(void 0 !== i ? i : "null")
                            }
                            if (0 === n.length)
                                u = "[]";
                            else if ("" === a)
                                u = "[" + n.join(",") + "]";
                            else {
                                var c = ",\n" + s
                                  , l = n.join(c);
                                u = "[\n" + s + l + ",\n" + t + "]"
                            }
                            return o.pop(),
                            s = t,
                            u
                        }
                    }
                }
            }()
        },
        1096: function(e) {
            e.exports = function() {
                "use strict";
                function e() {}
                function t(e) {
                    if (!(this instanceof t))
                        throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e)
                        throw new TypeError("not a function");
                    this._state = 0,
                    this._handled = !1,
                    this._value = void 0,
                    this._deferreds = [],
                    o(e, this)
                }
                function u(e, u) {
                    for (; 3 === e._state; )
                        e = e._value;
                    0 !== e._state ? (e._handled = !0,
                    t._immediateFn((function() {
                        var t = 1 === e._state ? u.onFulfilled : u.onRejected;
                        if (null !== t) {
                            var i;
                            try {
                                i = t(e._value)
                            } catch (e) {
                                return void r(u.promise, e)
                            }
                            n(u.promise, i)
                        } else
                            (1 === e._state ? n : r)(u.promise, e._value)
                    }
                    ))) : e._deferreds.push(u)
                }
                function n(e, u) {
                    try {
                        if (u === e)
                            throw new TypeError("A promise cannot be resolved with itself.");
                        if (u && ("object" == typeof u || "function" == typeof u)) {
                            var n = u.then;
                            if (u instanceof t)
                                return e._state = 3,
                                e._value = u,
                                void i(e);
                            if ("function" == typeof n)
                                return void o(function(e, t) {
                                    return function() {
                                        e.apply(t, arguments)
                                    }
                                }(n, u), e)
                        }
                        e._state = 1,
                        e._value = u,
                        i(e)
                    } catch (t) {
                        r(e, t)
                    }
                }
                function r(e, t) {
                    e._state = 2,
                    e._value = t,
                    i(e)
                }
                function i(e) {
                    2 === e._state && 0 === e._deferreds.length && t._immediateFn((function() {
                        e._handled || t._unhandledRejectionFn(e._value)
                    }
                    ));
                    for (var n = 0, r = e._deferreds.length; r > n; n++)
                        u(e, e._deferreds[n]);
                    e._deferreds = null
                }
                function o(e, t) {
                    var u = !1;
                    try {
                        e((function(e) {
                            u || (u = !0,
                            n(t, e))
                        }
                        ), (function(e) {
                            u || (u = !0,
                            r(t, e))
                        }
                        ))
                    } catch (e) {
                        if (u)
                            return;
                        u = !0,
                        r(t, e)
                    }
                }
                var s = setTimeout;
                return t.prototype.catch = function(e) {
                    return this.then(null, e)
                }
                ,
                t.prototype.then = function(t, n) {
                    var r = new this.constructor(e);
                    return u(this, new function(e, t, u) {
                        this.onFulfilled = "function" == typeof e ? e : null,
                        this.onRejected = "function" == typeof t ? t : null,
                        this.promise = u
                    }
                    (t,n,r)),
                    r
                }
                ,
                t.prototype.finally = function(e) {
                    var t = this.constructor;
                    return this.then((function(u) {
                        return t.resolve(e()).then((function() {
                            return u
                        }
                        ))
                    }
                    ), (function(u) {
                        return t.resolve(e()).then((function() {
                            return t.reject(u)
                        }
                        ))
                    }
                    ))
                }
                ,
                t.all = function(e) {
                    return new t((function(t, u) {
                        function n(e, o) {
                            try {
                                if (o && ("object" == typeof o || "function" == typeof o)) {
                                    var s = o.then;
                                    if ("function" == typeof s)
                                        return void s.call(o, (function(t) {
                                            n(e, t)
                                        }
                                        ), u)
                                }
                                r[e] = o,
                                0 == --i && t(r)
                            } catch (e) {
                                u(e)
                            }
                        }
                        if (!e || void 0 === e.length)
                            throw new TypeError("Promise.all accepts an array");
                        var r = Array.prototype.slice.call(e);
                        if (0 === r.length)
                            return t([]);
                        for (var i = r.length, o = 0; r.length > o; o++)
                            n(o, r[o])
                    }
                    ))
                }
                ,
                t.resolve = function(e) {
                    return e && "object" == typeof e && e.constructor === t ? e : new t((function(t) {
                        t(e)
                    }
                    ))
                }
                ,
                t.reject = function(e) {
                    return new t((function(t, u) {
                        u(e)
                    }
                    ))
                }
                ,
                t.race = function(e) {
                    return new t((function(t, u) {
                        for (var n = 0, r = e.length; r > n; n++)
                            e[n].then(t, u)
                    }
                    ))
                }
                ,
                t._immediateFn = "function" == typeof setImmediate && function(e) {
                    setImmediate(e)
                }
                || function(e) {
                    s(e, 0)
                }
                ,
                t._unhandledRejectionFn = function(e) {
                    void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                }
                ,
                t
            }()
        },
        9563: e => {
            var t, u, n = {}, r = {}, i = (t = function() {
                return document.head || document.getElementsByTagName("head")[0]
            }
            ,
            function() {
                return void 0 === u && (u = t.apply(this, arguments)),
                u
            }
            );
            function o(e) {
                var t = document.createElement("style");
                return t.type = "text/css",
                t.setAttribute("data-jwplayer-id", e),
                function(e) {
                    i().appendChild(e)
                }(t),
                t
            }
            function s(e, t) {
                var u, n, i, s = r[e];
                s || (s = r[e] = {
                    element: o(e),
                    counter: 0
                });
                var a = s.counter++;
                return u = s.element,
                i = function() {
                    l(u, a, "")
                }
                ,
                (n = function(e) {
                    l(u, a, e)
                }
                )(t.css),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media)
                            return;
                        n((t = e).css)
                    } else
                        i()
                }
            }
            e.exports = {
                style: function(e, t) {
                    !function(e, t) {
                        for (var u = 0; u < t.length; u++) {
                            var r = t[u]
                              , i = (n[e] || {})[r.id];
                            if (i) {
                                for (var o = 0; o < i.parts.length; o++)
                                    i.parts[o](r.parts[o]);
                                for (; o < r.parts.length; o++)
                                    i.parts.push(s(e, r.parts[o]))
                            } else {
                                var a = [];
                                for (o = 0; o < r.parts.length; o++)
                                    a.push(s(e, r.parts[o]));
                                n[e] = n[e] || {},
                                n[e][r.id] = {
                                    id: r.id,
                                    parts: a
                                }
                            }
                        }
                    }(t, function(e) {
                        for (var t = [], u = {}, n = 0; n < e.length; n++) {
                            var r = e[n]
                              , i = r[0]
                              , o = {
                                css: r[1],
                                media: r[2]
                            };
                            u[i] ? u[i].parts.push(o) : t.push(u[i] = {
                                id: i,
                                parts: [o]
                            })
                        }
                        return t
                    }(e))
                },
                clear: function(e, t) {
                    var u = n[e];
                    if (!u)
                        return;
                    if (t) {
                        var r = u[t];
                        if (r)
                            for (var i = 0; i < r.parts.length; i += 1)
                                r.parts[i]();
                        return
                    }
                    for (var o = Object.keys(u), s = 0; s < o.length; s += 1)
                        for (var a = u[o[s]], c = 0; c < a.parts.length; c += 1)
                            a.parts[c]();
                    delete n[e]
                }
            };
            var a, c = (a = [],
            function(e, t) {
                return a[e] = t,
                a.filter(Boolean).join("\n")
            }
            );
            function l(e, t, u) {
                if (e.styleSheet)
                    e.styleSheet.cssText = c(t, u);
                else {
                    var n = document.createTextNode(u)
                      , r = e.childNodes[t];
                    r ? e.replaceChild(n, r) : e.appendChild(n)
                }
            }
        }
        ,
        4737: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 29.3" class="jw-svg-icon jw-svg-icon-watermark" focusable="false"><path d="M37,16.68c0,2.4-.59,3.43-2.4,3.43a5.75,5.75,0,0,1-3.38-1.23v3.58a7.39,7.39,0,0,0,3.67,1c3.67,0,5.73-1.91,5.73-6.32V5.86H37Z"></path><polygon points="58.33 17.61 55.39 6.01 52.55 6.01 49.52 17.61 46.73 6.01 43.06 6.01 47.56 23.29 50.89 23.29 53.92 11.88 56.96 23.29 60.24 23.29 64.74 6.01 61.17 6.01 58.33 17.61"></polygon><path d="M73.84,6H67.47V23.29h2.2v-6.9h4.17c3.47,0,5.77-1.77,5.77-5.19S77.31,6,73.84,6Zm0,8.47H69.72V8h4.12c2.3,0,3.57,1.22,3.62,3.28C77.46,13.21,76.19,14.48,73.84,14.48Z"></path><path d="M99.2,6l-6,15.27H85V6H82.8V23.29H94.7l2-5.19h7.09l2,5.19H108L101.26,6ZM97.39,16.14l2.84-7.39L103,16.14Z"></path><polygon points="113.98 14.18 108.99 6.01 106.59 6.01 112.81 16.14 112.81 23.29 115.01 23.29 115.01 16.14 121.33 6.01 118.98 6.01 113.98 14.18"></polygon><polygon points="123.14 23.29 134.1 23.29 134.1 21.28 125.29 21.28 125.29 15.41 133.32 15.41 133.32 13.45 125.29 13.45 125.29 7.97 134.1 7.97 134.1 6.01 123.14 6.01 123.14 23.29"></polygon><path d="M144.86,15.85c2.74-.39,4.41-2,4.41-4.85,0-3.23-2.26-5-5.73-5h-6.32V23.29h2.22V16h3.08l4.94,7.29H150Zm-5.42-1.71V8h4.06c2.3,0,3.62,1.17,3.62,3.08s-1.32,3.09-3.62,3.09Z"></path><path d="M27.63.09a1,1,0,0,0-1.32.48c-.24.51-6.35,15.3-6.35,15.3-.2.46-.33.41-.33-.07,0,0,0-5.15,0-9.39,0-2.31-1.12-3.61-2.73-3.88A3.12,3.12,0,0,0,14.83,3a4.57,4.57,0,0,0-1.5,1.79c-.48.94-3.47,9.66-3.47,9.66-.16.46-.31.44-.31,0,0,0-.09-3.76-.18-4.64-.13-1.36-.44-3.59-2.2-3.7S4.77,8,4.36,9.24c-.29.84-1.65,5.35-1.65,5.35l-.2.46h0c-.06.24-.17.24-.24,0l-.11-.42Q2,14,1.74,13.31a1.71,1.71,0,0,0-.33-.66.83.83,0,0,0-.88-.22.82.82,0,0,0-.53.69,4.22,4.22,0,0,0,.07.79,29,29,0,0,0,1,4.6,1.31,1.31,0,0,0,1.8.66,3.43,3.43,0,0,0,1.24-1.81c.33-.81,2-5.48,2-5.48.18-.46.31-.44.29,0,0,0-.09,4.57-.09,6.64a13.11,13.11,0,0,0,.28,2.93,2.41,2.41,0,0,0,.82,1.27,2,2,0,0,0,1.41.4,2,2,0,0,0,.7-.24,3.15,3.15,0,0,0,.79-.71,12.52,12.52,0,0,0,1.26-2.11c.81-1.6,2.92-6.58,2.92-6.58.2-.46.33-.41.33.07,0,0-.26,8.36-.26,11.55a6.39,6.39,0,0,0,.44,2.33,2.8,2.8,0,0,0,1.45,1.61A2.57,2.57,0,0,0,18.79,29a3.76,3.76,0,0,0,1.28-1.32,15.12,15.12,0,0,0,1.07-2.31c.64-1.65,1.17-3.33,1.7-5s5-17.65,5.28-19a1.79,1.79,0,0,0,0-.46A1,1,0,0,0,27.63.09Z"></path></svg>'
        }
    }, n = {};
    function r(e) {
        var t = n[e];
        if (void 0 !== t)
            return t.exports;
        var i = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return u[e].call(i.exports, i, i.exports, r),
        i.loaded = !0,
        i.exports
    }
    r.m = u,
    r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }),
        t
    }
    ,
    r.d = (e, t) => {
        for (var u in t)
            r.o(t, u) && !r.o(e, u) && Object.defineProperty(e, u, {
                enumerable: !0,
                get: t[u]
            })
    }
    ,
    r.f = {},
    r.e = e => Promise.all(Object.keys(r.f).reduce(( (t, u) => (r.f[u](e, t),
    t)), [])),
    r.u = e => ({
        63: "polyfills.webvtt",
        74: "jwplayer.controls.tizen",
        98: "provider.hlsjs",
        168: "jwplayer.amp",
        207: "jwplayer.core.controls.html5",
        250: "provider.html5",
        347: "vttparser",
        365: "related",
        371: "provider.shaka",
        493: "jwplayer.core.controls.polyfills",
        520: "provider.airplay",
        581: "jwplayer.core.controls",
        605: "jwplayer.core.controls.polyfills.html5",
        681: "jwplayer.core",
        716: "jwplayer.controls",
        926: "jwplayer.stats",
        943: "polyfills.intersection-observer",
        977: "provider.cast"
    }[e] + ".js"),
    r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    e = {},
    t = "jwplayer:",
    r.l = (u, n, i, o) => {
        if (e[u])
            e[u].push(n);
        else {
            var s, a;
            if (void 0 !== i)
                for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                    var d = c[l];
                    if (d.getAttribute("src") == u || d.getAttribute("data-webpack") == t + i) {
                        s = d;
                        break
                    }
                }
            s || (a = !0,
            (s = document.createElement("script")).charset = "utf-8",
            s.timeout = 55,
            r.nc && s.setAttribute("nonce", r.nc),
            s.setAttribute("data-webpack", t + i),
            s.src = u),
            e[u] = [n];
            var D = (t, n) => {
                s.onerror = s.onload = null,
                clearTimeout(f);
                var r = e[u];
                if (delete e[u],
                s.parentNode && s.parentNode.removeChild(s),
                r && r.forEach((e => e(n))),
                t)
                    return t(n)
            }
              , f = setTimeout(D.bind(null, void 0, {
                type: "timeout",
                target: s
            }), 55e3);
            s.onerror = D.bind(null, s.onerror),
            s.onload = D.bind(null, s.onload),
            a && document.head.appendChild(s)
        }
    }
    ,
    r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.nmd = e => (e.paths = [],
    e.children || (e.children = []),
    e),
    r.p = "",
    ( () => {
        var e = {
            313: 0
        };
        r.f.j = (t, u) => {
            var n = r.o(e, t) ? e[t] : void 0;
            if (0 !== n)
                if (n)
                    u.push(n[2]);
                else {
                    var i = new Promise(( (u, r) => n = e[t] = [u, r]));
                    u.push(n[2] = i);
                    var o = r.p + r.u(t)
                      , s = new Error;
                    r.l(o, (u => {
                        if (r.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0),
                        n)) {
                            var i = u && ("load" === u.type ? "missing" : u.type)
                              , o = u && u.target && u.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")",
                            s.name = "ChunkLoadError",
                            s.type = i,
                            s.request = o,
                            n[1](s)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var t = (t, u) => {
            var n, i, [o,s,a] = u, c = 0;
            if (o.some((t => 0 !== e[t]))) {
                for (n in s)
                    r.o(s, n) && (r.m[n] = s[n]);
                if (a)
                    a(r)
            }
            for (t && t(u); c < o.length; c++)
                i = o[c],
                r.o(e, i) && e[i] && e[i][0](),
                e[i] = 0
        }
          , u = self.webpackChunkjwplayer = self.webpackChunkjwplayer || [];
        u.forEach(t.bind(null, 0)),
        u.push = t.bind(null, u.push.bind(u))
    }
    )(),
    r.nc = void 0;
    var i = r(6577);
    window.jwplayer = i.default
}
)();

var jwDefaults = {
    "aspectratio": "16:9",
    "autostart": false,
    "controls": true,
    "displaydescription": true,
    "displaytitle": true,
    "height": 260,
    "key": "cyZfQzqmCIqpCw/2MW/9nK90iej7hkBgiFIPPutDPIO052DpONZqyx2Cz8hsr7lp",
    "mute": false,
    "ph": 1,
    "pid": "SAHhwvZq",
    "playbackRateControls": false,
    "preload": "metadata",
    "repeat": false,
    "stretching": "uniform",
    "width": "100%"
};
jwplayer.defaults = jwDefaults;
