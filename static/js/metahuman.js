( () => {
    var e = {
        669: (e, t, n) => {
            e.exports = n(609)
        }
        ,
        448: (e, t, n) => {
            "use strict";
            var r = n(867)
              , i = n(26)
              , o = n(372)
              , s = n(327)
              , a = n(97)
              , u = n(109)
              , c = n(985)
              , l = n(874)
              , h = n(648)
              , p = n(644)
              , f = n(205);
            e.exports = function(e) {
                return new Promise((function(t, n) {
                    var d, m = e.data, g = e.headers, v = e.responseType;
                    function y() {
                        e.cancelToken && e.cancelToken.unsubscribe(d),
                        e.signal && e.signal.removeEventListener("abort", d)
                    }
                    r.isFormData(m) && r.isStandardBrowserEnv() && delete g["Content-Type"];
                    var E = new XMLHttpRequest;
                    if (e.auth) {
                        var b = e.auth.username || ""
                          , S = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                        g.Authorization = "Basic " + btoa(b + ":" + S)
                    }
                    var k = a(e.baseURL, e.url);
                    function w() {
                        if (E) {
                            var r = "getAllResponseHeaders"in E ? u(E.getAllResponseHeaders()) : null
                              , o = {
                                data: v && "text" !== v && "json" !== v ? E.response : E.responseText,
                                status: E.status,
                                statusText: E.statusText,
                                headers: r,
                                config: e,
                                request: E
                            };
                            i((function(e) {
                                t(e),
                                y()
                            }
                            ), (function(e) {
                                n(e),
                                y()
                            }
                            ), o),
                            E = null
                        }
                    }
                    if (E.open(e.method.toUpperCase(), s(k, e.params, e.paramsSerializer), !0),
                    E.timeout = e.timeout,
                    "onloadend"in E ? E.onloadend = w : E.onreadystatechange = function() {
                        E && 4 === E.readyState && (0 !== E.status || E.responseURL && 0 === E.responseURL.indexOf("file:")) && setTimeout(w)
                    }
                    ,
                    E.onabort = function() {
                        E && (n(new h("Request aborted",h.ECONNABORTED,e,E)),
                        E = null)
                    }
                    ,
                    E.onerror = function() {
                        n(new h("Network Error",h.ERR_NETWORK,e,E,E)),
                        E = null
                    }
                    ,
                    E.ontimeout = function() {
                        var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded"
                          , r = e.transitional || l;
                        e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                        n(new h(t,r.clarifyTimeoutError ? h.ETIMEDOUT : h.ECONNABORTED,e,E)),
                        E = null
                    }
                    ,
                    r.isStandardBrowserEnv()) {
                        var x = (e.withCredentials || c(k)) && e.xsrfCookieName ? o.read(e.xsrfCookieName) : void 0;
                        x && (g[e.xsrfHeaderName] = x)
                    }
                    "setRequestHeader"in E && r.forEach(g, (function(e, t) {
                        void 0 === m && "content-type" === t.toLowerCase() ? delete g[t] : E.setRequestHeader(t, e)
                    }
                    )),
                    r.isUndefined(e.withCredentials) || (E.withCredentials = !!e.withCredentials),
                    v && "json" !== v && (E.responseType = e.responseType),
                    "function" == typeof e.onDownloadProgress && E.addEventListener("progress", e.onDownloadProgress),
                    "function" == typeof e.onUploadProgress && E.upload && E.upload.addEventListener("progress", e.onUploadProgress),
                    (e.cancelToken || e.signal) && (d = function(e) {
                        E && (n(!e || e && e.type ? new p : e),
                        E.abort(),
                        E = null)
                    }
                    ,
                    e.cancelToken && e.cancelToken.subscribe(d),
                    e.signal && (e.signal.aborted ? d() : e.signal.addEventListener("abort", d))),
                    m || (m = null);
                    var R = f(k);
                    R && -1 === ["http", "https", "file"].indexOf(R) ? n(new h("Unsupported protocol " + R + ":",h.ERR_BAD_REQUEST,e)) : E.send(m)
                }
                ))
            }
        }
        ,
        609: (e, t, n) => {
            "use strict";
            var r = n(867)
              , i = n(849)
              , o = n(321)
              , s = n(185)
              , a = function e(t) {
                var n = new o(t)
                  , a = i(o.prototype.request, n);
                return r.extend(a, o.prototype, n),
                r.extend(a, n),
                a.create = function(n) {
                    return e(s(t, n))
                }
                ,
                a
            }(n(546));
            a.Axios = o,
            a.CanceledError = n(644),
            a.CancelToken = n(972),
            a.isCancel = n(502),
            a.VERSION = n(288).version,
            a.toFormData = n(675),
            a.AxiosError = n(648),
            a.Cancel = a.CanceledError,
            a.all = function(e) {
                return Promise.all(e)
            }
            ,
            a.spread = n(713),
            a.isAxiosError = n(268),
            e.exports = a,
            e.exports.default = a
        }
        ,
        972: (e, t, n) => {
            "use strict";
            var r = n(644);
            function i(e) {
                if ("function" != typeof e)
                    throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function(e) {
                    t = e
                }
                ));
                var n = this;
                this.promise.then((function(e) {
                    if (n._listeners) {
                        var t, r = n._listeners.length;
                        for (t = 0; t < r; t++)
                            n._listeners[t](e);
                        n._listeners = null
                    }
                }
                )),
                this.promise.then = function(e) {
                    var t, r = new Promise((function(e) {
                        n.subscribe(e),
                        t = e
                    }
                    )).then(e);
                    return r.cancel = function() {
                        n.unsubscribe(t)
                    }
                    ,
                    r
                }
                ,
                e((function(e) {
                    n.reason || (n.reason = new r(e),
                    t(n.reason))
                }
                ))
            }
            i.prototype.throwIfRequested = function() {
                if (this.reason)
                    throw this.reason
            }
            ,
            i.prototype.subscribe = function(e) {
                this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
            }
            ,
            i.prototype.unsubscribe = function(e) {
                if (this._listeners) {
                    var t = this._listeners.indexOf(e);
                    -1 !== t && this._listeners.splice(t, 1)
                }
            }
            ,
            i.source = function() {
                var e;
                return {
                    token: new i((function(t) {
                        e = t
                    }
                    )),
                    cancel: e
                }
            }
            ,
            e.exports = i
        }
        ,
        644: (e, t, n) => {
            "use strict";
            var r = n(648);
            function i(e) {
                r.call(this, null == e ? "canceled" : e, r.ERR_CANCELED),
                this.name = "CanceledError"
            }
            n(867).inherits(i, r, {
                __CANCEL__: !0
            }),
            e.exports = i
        }
        ,
        502: e => {
            "use strict";
            e.exports = function(e) {
                return !(!e || !e.__CANCEL__)
            }
        }
        ,
        321: (e, t, n) => {
            "use strict";
            var r = n(867)
              , i = n(327)
              , o = n(782)
              , s = n(572)
              , a = n(185)
              , u = n(97)
              , c = n(875)
              , l = c.validators;
            function h(e) {
                this.defaults = e,
                this.interceptors = {
                    request: new o,
                    response: new o
                }
            }
            h.prototype.request = function(e, t) {
                "string" == typeof e ? (t = t || {}).url = e : t = e || {},
                (t = a(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                var n = t.transitional;
                void 0 !== n && c.assertOptions(n, {
                    silentJSONParsing: l.transitional(l.boolean),
                    forcedJSONParsing: l.transitional(l.boolean),
                    clarifyTimeoutError: l.transitional(l.boolean)
                }, !1);
                var r = []
                  , i = !0;
                this.interceptors.request.forEach((function(e) {
                    "function" == typeof e.runWhen && !1 === e.runWhen(t) || (i = i && e.synchronous,
                    r.unshift(e.fulfilled, e.rejected))
                }
                ));
                var o, u = [];
                if (this.interceptors.response.forEach((function(e) {
                    u.push(e.fulfilled, e.rejected)
                }
                )),
                !i) {
                    var h = [s, void 0];
                    for (Array.prototype.unshift.apply(h, r),
                    h = h.concat(u),
                    o = Promise.resolve(t); h.length; )
                        o = o.then(h.shift(), h.shift());
                    return o
                }
                for (var p = t; r.length; ) {
                    var f = r.shift()
                      , d = r.shift();
                    try {
                        p = f(p)
                    } catch (e) {
                        d(e);
                        break
                    }
                }
                try {
                    o = s(p)
                } catch (e) {
                    return Promise.reject(e)
                }
                for (; u.length; )
                    o = o.then(u.shift(), u.shift());
                return o
            }
            ,
            h.prototype.getUri = function(e) {
                e = a(this.defaults, e);
                var t = u(e.baseURL, e.url);
                return i(t, e.params, e.paramsSerializer)
            }
            ,
            r.forEach(["delete", "get", "head", "options"], (function(e) {
                h.prototype[e] = function(t, n) {
                    return this.request(a(n || {}, {
                        method: e,
                        url: t,
                        data: (n || {}).data
                    }))
                }
            }
            )),
            r.forEach(["post", "put", "patch"], (function(e) {
                function t(t) {
                    return function(n, r, i) {
                        return this.request(a(i || {}, {
                            method: e,
                            headers: t ? {
                                "Content-Type": "multipart/form-data"
                            } : {},
                            url: n,
                            data: r
                        }))
                    }
                }
                h.prototype[e] = t(),
                h.prototype[e + "Form"] = t(!0)
            }
            )),
            e.exports = h
        }
        ,
        648: (e, t, n) => {
            "use strict";
            var r = n(867);
            function i(e, t, n, r, i) {
                Error.call(this),
                this.message = e,
                this.name = "AxiosError",
                t && (this.code = t),
                n && (this.config = n),
                r && (this.request = r),
                i && (this.response = i)
            }
            r.inherits(i, Error, {
                toJSON: function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null
                    }
                }
            });
            var o = i.prototype
              , s = {};
            ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach((function(e) {
                s[e] = {
                    value: e
                }
            }
            )),
            Object.defineProperties(i, s),
            Object.defineProperty(o, "isAxiosError", {
                value: !0
            }),
            i.from = function(e, t, n, s, a, u) {
                var c = Object.create(o);
                return r.toFlatObject(e, c, (function(e) {
                    return e !== Error.prototype
                }
                )),
                i.call(c, e.message, t, n, s, a),
                c.name = e.name,
                u && Object.assign(c, u),
                c
            }
            ,
            e.exports = i
        }
        ,
        782: (e, t, n) => {
            "use strict";
            var r = n(867);
            function i() {
                this.handlers = []
            }
            i.prototype.use = function(e, t, n) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null
                }),
                this.handlers.length - 1
            }
            ,
            i.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            ,
            i.prototype.forEach = function(e) {
                r.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }
                ))
            }
            ,
            e.exports = i
        }
        ,
        97: (e, t, n) => {
            "use strict";
            var r = n(793)
              , i = n(303);
            e.exports = function(e, t) {
                return e && !r(t) ? i(e, t) : t
            }
        }
        ,
        572: (e, t, n) => {
            "use strict";
            var r = n(867)
              , i = n(527)
              , o = n(502)
              , s = n(546)
              , a = n(644);
            function u(e) {
                if (e.cancelToken && e.cancelToken.throwIfRequested(),
                e.signal && e.signal.aborted)
                    throw new a
            }
            e.exports = function(e) {
                return u(e),
                e.headers = e.headers || {},
                e.data = i.call(e, e.data, e.headers, e.transformRequest),
                e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
                r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                    delete e.headers[t]
                }
                )),
                (e.adapter || s.adapter)(e).then((function(t) {
                    return u(e),
                    t.data = i.call(e, t.data, t.headers, e.transformResponse),
                    t
                }
                ), (function(t) {
                    return o(t) || (u(e),
                    t && t.response && (t.response.data = i.call(e, t.response.data, t.response.headers, e.transformResponse))),
                    Promise.reject(t)
                }
                ))
            }
        }
        ,
        185: (e, t, n) => {
            "use strict";
            var r = n(867);
            e.exports = function(e, t) {
                t = t || {};
                var n = {};
                function i(e, t) {
                    return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
                }
                function o(n) {
                    return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : i(void 0, e[n]) : i(e[n], t[n])
                }
                function s(e) {
                    if (!r.isUndefined(t[e]))
                        return i(void 0, t[e])
                }
                function a(n) {
                    return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : i(void 0, e[n]) : i(void 0, t[n])
                }
                function u(n) {
                    return n in t ? i(e[n], t[n]) : n in e ? i(void 0, e[n]) : void 0
                }
                var c = {
                    url: s,
                    method: s,
                    data: s,
                    baseURL: a,
                    transformRequest: a,
                    transformResponse: a,
                    paramsSerializer: a,
                    timeout: a,
                    timeoutMessage: a,
                    withCredentials: a,
                    adapter: a,
                    responseType: a,
                    xsrfCookieName: a,
                    xsrfHeaderName: a,
                    onUploadProgress: a,
                    onDownloadProgress: a,
                    decompress: a,
                    maxContentLength: a,
                    maxBodyLength: a,
                    beforeRedirect: a,
                    transport: a,
                    httpAgent: a,
                    httpsAgent: a,
                    cancelToken: a,
                    socketPath: a,
                    responseEncoding: a,
                    validateStatus: u
                };
                return r.forEach(Object.keys(e).concat(Object.keys(t)), (function(e) {
                    var t = c[e] || o
                      , i = t(e);
                    r.isUndefined(i) && t !== u || (n[e] = i)
                }
                )),
                n
            }
        }
        ,
        26: (e, t, n) => {
            "use strict";
            var r = n(648);
            e.exports = function(e, t, n) {
                var i = n.config.validateStatus;
                n.status && i && !i(n.status) ? t(new r("Request failed with status code " + n.status,[r.ERR_BAD_REQUEST, r.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n)) : e(n)
            }
        }
        ,
        527: (e, t, n) => {
            "use strict";
            var r = n(867)
              , i = n(546);
            e.exports = function(e, t, n) {
                var o = this || i;
                return r.forEach(n, (function(n) {
                    e = n.call(o, e, t)
                }
                )),
                e
            }
        }
        ,
        546: (e, t, n) => {
            "use strict";
            var r = n(867)
              , i = n(16)
              , o = n(648)
              , s = n(874)
              , a = n(675)
              , u = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            function c(e, t) {
                !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var l, h = {
                transitional: s,
                adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (l = n(448)),
                l),
                transformRequest: [function(e, t) {
                    if (i(t, "Accept"),
                    i(t, "Content-Type"),
                    r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e))
                        return e;
                    if (r.isArrayBufferView(e))
                        return e.buffer;
                    if (r.isURLSearchParams(e))
                        return c(t, "application/x-www-form-urlencoded;charset=utf-8"),
                        e.toString();
                    var n, o = r.isObject(e), s = t && t["Content-Type"];
                    if ((n = r.isFileList(e)) || o && "multipart/form-data" === s) {
                        var u = this.env && this.env.FormData;
                        return a(n ? {
                            "files[]": e
                        } : e, u && new u)
                    }
                    return o || "application/json" === s ? (c(t, "application/json"),
                    function(e, t, n) {
                        if (r.isString(e))
                            try {
                                return (0,
                                JSON.parse)(e),
                                r.trim(e)
                            } catch (e) {
                                if ("SyntaxError" !== e.name)
                                    throw e
                            }
                        return (0,
                        JSON.stringify)(e)
                    }(e)) : e
                }
                ],
                transformResponse: [function(e) {
                    var t = this.transitional || h.transitional
                      , n = t && t.silentJSONParsing
                      , i = t && t.forcedJSONParsing
                      , s = !n && "json" === this.responseType;
                    if (s || i && r.isString(e) && e.length)
                        try {
                            return JSON.parse(e)
                        } catch (e) {
                            if (s) {
                                if ("SyntaxError" === e.name)
                                    throw o.from(e, o.ERR_BAD_RESPONSE, this, null, this.response);
                                throw e
                            }
                        }
                    return e
                }
                ],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                env: {
                    FormData: n(623)
                },
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            r.forEach(["delete", "get", "head"], (function(e) {
                h.headers[e] = {}
            }
            )),
            r.forEach(["post", "put", "patch"], (function(e) {
                h.headers[e] = r.merge(u)
            }
            )),
            e.exports = h
        }
        ,
        874: e => {
            "use strict";
            e.exports = {
                silentJSONParsing: !0,
                forcedJSONParsing: !0,
                clarifyTimeoutError: !1
            }
        }
        ,
        288: e => {
            e.exports = {
                version: "0.27.2"
            }
        }
        ,
        849: e => {
            "use strict";
            e.exports = function(e, t) {
                return function() {
                    for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
                        n[r] = arguments[r];
                    return e.apply(t, n)
                }
            }
        }
        ,
        327: (e, t, n) => {
            "use strict";
            var r = n(867);
            function i(e) {
                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function(e, t, n) {
                if (!t)
                    return e;
                var o;
                if (n)
                    o = n(t);
                else if (r.isURLSearchParams(t))
                    o = t.toString();
                else {
                    var s = [];
                    r.forEach(t, (function(e, t) {
                        null != e && (r.isArray(e) ? t += "[]" : e = [e],
                        r.forEach(e, (function(e) {
                            r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)),
                            s.push(i(t) + "=" + i(e))
                        }
                        )))
                    }
                    )),
                    o = s.join("&")
                }
                if (o) {
                    var a = e.indexOf("#");
                    -1 !== a && (e = e.slice(0, a)),
                    e += (-1 === e.indexOf("?") ? "?" : "&") + o
                }
                return e
            }
        }
        ,
        303: e => {
            "use strict";
            e.exports = function(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }
        }
        ,
        372: (e, t, n) => {
            "use strict";
            var r = n(867);
            e.exports = r.isStandardBrowserEnv() ? {
                write: function(e, t, n, i, o, s) {
                    var a = [];
                    a.push(e + "=" + encodeURIComponent(t)),
                    r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
                    r.isString(i) && a.push("path=" + i),
                    r.isString(o) && a.push("domain=" + o),
                    !0 === s && a.push("secure"),
                    document.cookie = a.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        }
        ,
        793: e => {
            "use strict";
            e.exports = function(e) {
                return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
            }
        }
        ,
        268: (e, t, n) => {
            "use strict";
            var r = n(867);
            e.exports = function(e) {
                return r.isObject(e) && !0 === e.isAxiosError
            }
        }
        ,
        985: (e, t, n) => {
            "use strict";
            var r = n(867);
            e.exports = r.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
                function i(e) {
                    var r = e;
                    return t && (n.setAttribute("href", r),
                    r = n.href),
                    n.setAttribute("href", r),
                    {
                        href: n.href,
                        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                        host: n.host,
                        search: n.search ? n.search.replace(/^\?/, "") : "",
                        hash: n.hash ? n.hash.replace(/^#/, "") : "",
                        hostname: n.hostname,
                        port: n.port,
                        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                    }
                }
                return e = i(window.location.href),
                function(t) {
                    var n = r.isString(t) ? i(t) : t;
                    return n.protocol === e.protocol && n.host === e.host
                }
            }() : function() {
                return !0
            }
        }
        ,
        16: (e, t, n) => {
            "use strict";
            var r = n(867);
            e.exports = function(e, t) {
                r.forEach(e, (function(n, r) {
                    r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n,
                    delete e[r])
                }
                ))
            }
        }
        ,
        623: e => {
            e.exports = null
        }
        ,
        109: (e, t, n) => {
            "use strict";
            var r = n(867)
              , i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, n, o, s = {};
                return e ? (r.forEach(e.split("\n"), (function(e) {
                    if (o = e.indexOf(":"),
                    t = r.trim(e.substr(0, o)).toLowerCase(),
                    n = r.trim(e.substr(o + 1)),
                    t) {
                        if (s[t] && i.indexOf(t) >= 0)
                            return;
                        s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
                    }
                }
                )),
                s) : s
            }
        }
        ,
        205: e => {
            "use strict";
            e.exports = function(e) {
                var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return t && t[1] || ""
            }
        }
        ,
        713: e => {
            "use strict";
            e.exports = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }
        }
        ,
        675: (e, t, n) => {
            "use strict";
            var r = n(867);
            e.exports = function(e, t) {
                t = t || new FormData;
                var n = [];
                function i(e) {
                    return null === e ? "" : r.isDate(e) ? e.toISOString() : r.isArrayBuffer(e) || r.isTypedArray(e) ? "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
                }
                return function e(o, s) {
                    if (r.isPlainObject(o) || r.isArray(o)) {
                        if (-1 !== n.indexOf(o))
                            throw Error("Circular reference detected in " + s);
                        n.push(o),
                        r.forEach(o, (function(n, o) {
                            if (!r.isUndefined(n)) {
                                var a, u = s ? s + "." + o : o;
                                if (n && !s && "object" == typeof n)
                                    if (r.endsWith(o, "{}"))
                                        n = JSON.stringify(n);
                                    else if (r.endsWith(o, "[]") && (a = r.toArray(n)))
                                        return void a.forEach((function(e) {
                                            !r.isUndefined(e) && t.append(u, i(e))
                                        }
                                        ));
                                e(n, u)
                            }
                        }
                        )),
                        n.pop()
                    } else
                        t.append(s, i(o))
                }(e),
                t
            }
        }
        ,
        875: (e, t, n) => {
            "use strict";
            var r = n(288).version
              , i = n(648)
              , o = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
                o[e] = function(n) {
                    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                }
            }
            ));
            var s = {};
            o.transitional = function(e, t, n) {
                function o(e, t) {
                    return "[Axios v" + r + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                }
                return function(n, r, a) {
                    if (!1 === e)
                        throw new i(o(r, " has been removed" + (t ? " in " + t : "")),i.ERR_DEPRECATED);
                    return t && !s[r] && (s[r] = !0,
                    console.warn(o(r, " has been deprecated since v" + t + " and will be removed in the near future"))),
                    !e || e(n, r, a)
                }
            }
            ,
            e.exports = {
                assertOptions: function(e, t, n) {
                    if ("object" != typeof e)
                        throw new i("options must be an object",i.ERR_BAD_OPTION_VALUE);
                    for (var r = Object.keys(e), o = r.length; o-- > 0; ) {
                        var s = r[o]
                          , a = t[s];
                        if (a) {
                            var u = e[s]
                              , c = void 0 === u || a(u, s, e);
                            if (!0 !== c)
                                throw new i("option " + s + " must be " + c,i.ERR_BAD_OPTION_VALUE)
                        } else if (!0 !== n)
                            throw new i("Unknown option " + s,i.ERR_BAD_OPTION)
                    }
                },
                validators: o
            }
        }
        ,
        867: (e, t, n) => {
            "use strict";
            var r, i = n(849), o = Object.prototype.toString, s = (r = Object.create(null),
            function(e) {
                var t = o.call(e);
                return r[t] || (r[t] = t.slice(8, -1).toLowerCase())
            }
            );
            function a(e) {
                return e = e.toLowerCase(),
                function(t) {
                    return s(t) === e
                }
            }
            function u(e) {
                return Array.isArray(e)
            }
            function c(e) {
                return void 0 === e
            }
            var l = a("ArrayBuffer");
            function h(e) {
                return null !== e && "object" == typeof e
            }
            function p(e) {
                if ("object" !== s(e))
                    return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }
            var f = a("Date")
              , d = a("File")
              , m = a("Blob")
              , g = a("FileList");
            function v(e) {
                return "[object Function]" === o.call(e)
            }
            var y = a("URLSearchParams");
            function E(e, t) {
                if (null != e)
                    if ("object" != typeof e && (e = [e]),
                    u(e))
                        for (var n = 0, r = e.length; n < r; n++)
                            t.call(null, e[n], n, e);
                    else
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
            }
            var b, S = (b = "undefined" != typeof Uint8Array && Object.getPrototypeOf(Uint8Array),
            function(e) {
                return b && e instanceof b
            }
            );
            e.exports = {
                isArray: u,
                isArrayBuffer: l,
                isBuffer: function(e) {
                    return null !== e && !c(e) && null !== e.constructor && !c(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                },
                isFormData: function(e) {
                    var t = "[object FormData]";
                    return e && ("function" == typeof FormData && e instanceof FormData || o.call(e) === t || v(e.toString) && e.toString() === t)
                },
                isArrayBufferView: function(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && l(e.buffer)
                },
                isString: function(e) {
                    return "string" == typeof e
                },
                isNumber: function(e) {
                    return "number" == typeof e
                },
                isObject: h,
                isPlainObject: p,
                isUndefined: c,
                isDate: f,
                isFile: d,
                isBlob: m,
                isFunction: v,
                isStream: function(e) {
                    return h(e) && v(e.pipe)
                },
                isURLSearchParams: y,
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                },
                forEach: E,
                merge: function e() {
                    var t = {};
                    function n(n, r) {
                        p(t[r]) && p(n) ? t[r] = e(t[r], n) : p(n) ? t[r] = e({}, n) : u(n) ? t[r] = n.slice() : t[r] = n
                    }
                    for (var r = 0, i = arguments.length; r < i; r++)
                        E(arguments[r], n);
                    return t
                },
                extend: function(e, t, n) {
                    return E(t, (function(t, r) {
                        e[r] = n && "function" == typeof t ? i(t, n) : t
                    }
                    )),
                    e
                },
                trim: function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                },
                stripBOM: function(e) {
                    return 65279 === e.charCodeAt(0) && (e = e.slice(1)),
                    e
                },
                inherits: function(e, t, n, r) {
                    e.prototype = Object.create(t.prototype, r),
                    e.prototype.constructor = e,
                    n && Object.assign(e.prototype, n)
                },
                toFlatObject: function(e, t, n) {
                    var r, i, o, s = {};
                    t = t || {};
                    do {
                        for (i = (r = Object.getOwnPropertyNames(e)).length; i-- > 0; )
                            s[o = r[i]] || (t[o] = e[o],
                            s[o] = !0);
                        e = Object.getPrototypeOf(e)
                    } while (e && (!n || n(e, t)) && e !== Object.prototype);
                    return t
                },
                kindOf: s,
                kindOfTest: a,
                endsWith: function(e, t, n) {
                    e = String(e),
                    (void 0 === n || n > e.length) && (n = e.length),
                    n -= t.length;
                    var r = e.indexOf(t, n);
                    return -1 !== r && r === n
                },
                toArray: function(e) {
                    if (!e)
                        return null;
                    var t = e.length;
                    if (c(t))
                        return null;
                    for (var n = new Array(t); t-- > 0; )
                        n[t] = e[t];
                    return n
                },
                isTypedArray: S,
                isFileList: g
            }
        }
        ,
        65: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(81)
              , i = n.n(r)
              , o = n(645)
              , s = n.n(o)()(i());
            s.push([e.id, "@keyframes kf_loading{from{transform:rotate(0)}to{transform:rotate(360deg)}}.umh{position:relative;height:100%;width:100%}.umh,.umh *{margin:0;padding:0;box-sizing:border-box}.umh_mh{position:relative;height:100%;width:100%}.umh-loading{display:flex;align-items:center;justify-content:center;position:absolute;top:0;right:0;bottom:0;left:0;transition:all 0.2s ease;opacity:0;z-index:-1}.umh-loading_body{display:flex;flex-direction:column;align-items:center;color:rgba(255,255,255,0.9)}.umh-loading_icon{height:20px;width:20px;display:block;border:4px solid #fff;border-radius:50%;border-left-color:#454DF0;box-shadow:0 0 1px #aaa inset, 0 0 10px #aaa;animation:kf_loading 1s linear infinite}.umh-loading_text{margin-top:10px;font-size:12px;color:#454DF0}.umh--eng-gf .umh_mh{position:relative}.umh--eng-gf .umh_mh_gf{position:absolute;top:0;right:0;bottom:0;left:0;visibility:hidden;opacity:0;background-size:contain;background-repeat:no-repeat;background-position:center}.umh--eng-gf .umh_mh--wait .umh_mh_gf-wait{visibility:visible;opacity:1}.umh--eng-gf .umh_mh--speak .umh_mh_gf-speak{visibility:visible;opacity:1}\n", ""]);
            const a = s
        }
        ,
        645: e => {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var n = ""
                          , r = void 0 !== t[5];
                        return t[4] && (n += "@supports (".concat(t[4], ") {")),
                        t[2] && (n += "@media ".concat(t[2], " {")),
                        r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                        n += e(t),
                        r && (n += "}"),
                        t[2] && (n += "}"),
                        t[4] && (n += "}"),
                        n
                    }
                    )).join("")
                }
                ,
                t.i = function(e, n, r, i, o) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var s = {};
                    if (r)
                        for (var a = 0; a < this.length; a++) {
                            var u = this[a][0];
                            null != u && (s[u] = !0)
                        }
                    for (var c = 0; c < e.length; c++) {
                        var l = [].concat(e[c]);
                        r && s[l[0]] || (void 0 !== o && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")),
                        l[5] = o),
                        n && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"),
                        l[2] = n) : l[2] = n),
                        i && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"),
                        l[4] = i) : l[4] = "".concat(i)),
                        t.push(l))
                    }
                }
                ,
                t
            }
        }
        ,
        81: e => {
            "use strict";
            e.exports = function(e) {
                return e[1]
            }
        }
        ,
        379: e => {
            "use strict";
            var t = [];
            function n(e) {
                for (var n = -1, r = 0; r < t.length; r++)
                    if (t[r].identifier === e) {
                        n = r;
                        break
                    }
                return n
            }
            function r(e, r) {
                for (var o = {}, s = [], a = 0; a < e.length; a++) {
                    var u = e[a]
                      , c = r.base ? u[0] + r.base : u[0]
                      , l = o[c] || 0
                      , h = "".concat(c, " ").concat(l);
                    o[c] = l + 1;
                    var p = n(h)
                      , f = {
                        css: u[1],
                        media: u[2],
                        sourceMap: u[3],
                        supports: u[4],
                        layer: u[5]
                    };
                    if (-1 !== p)
                        t[p].references++,
                        t[p].updater(f);
                    else {
                        var d = i(f, r);
                        r.byIndex = a,
                        t.splice(a, 0, {
                            identifier: h,
                            updater: d,
                            references: 1
                        })
                    }
                    s.push(h)
                }
                return s
            }
            function i(e, t) {
                var n = t.domAPI(t);
                return n.update(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer)
                            return;
                        n.update(e = t)
                    } else
                        n.remove()
                }
            }
            e.exports = function(e, i) {
                var o = r(e = e || [], i = i || {});
                return function(e) {
                    e = e || [];
                    for (var s = 0; s < o.length; s++) {
                        var a = n(o[s]);
                        t[a].references--
                    }
                    for (var u = r(e, i), c = 0; c < o.length; c++) {
                        var l = n(o[c]);
                        0 === t[l].references && (t[l].updater(),
                        t.splice(l, 1))
                    }
                    o = u
                }
            }
        }
        ,
        569: e => {
            "use strict";
            var t = {};
            e.exports = function(e, n) {
                var r = function(e) {
                    if (void 0 === t[e]) {
                        var n = document.querySelector(e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head
                            } catch (e) {
                                n = null
                            }
                        t[e] = n
                    }
                    return t[e]
                }(e);
                if (!r)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                r.appendChild(n)
            }
        }
        ,
        216: e => {
            "use strict";
            e.exports = function(e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes),
                e.insert(t, e.options),
                t
            }
        }
        ,
        565: (e, t, n) => {
            "use strict";
            e.exports = function(e) {
                var t = n.nc;
                t && e.setAttribute("nonce", t)
            }
        }
        ,
        795: e => {
            "use strict";
            e.exports = function(e) {
                if ("undefined" == typeof document)
                    return {
                        update: function() {},
                        remove: function() {}
                    };
                var t = e.insertStyleElement(e);
                return {
                    update: function(n) {
                        !function(e, t, n) {
                            var r = "";
                            n.supports && (r += "@supports (".concat(n.supports, ") {")),
                            n.media && (r += "@media ".concat(n.media, " {"));
                            var i = void 0 !== n.layer;
                            i && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")),
                            r += n.css,
                            i && (r += "}"),
                            n.media && (r += "}"),
                            n.supports && (r += "}");
                            var o = n.sourceMap;
                            o && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")),
                            t.styleTagTransform(r, e, t.options)
                        }(t, e, n)
                    },
                    remove: function() {
                        !function(e) {
                            if (null === e.parentNode)
                                return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    }
                }
            }
        }
        ,
        589: e => {
            "use strict";
            e.exports = function(e, t) {
                if (t.styleSheet)
                    t.styleSheet.cssText = e;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        }
    }
      , t = {};
    function n(r) {
        var i = t[r];
        if (void 0 !== i)
            return i.exports;
        var o = t[r] = {
            id: r,
            exports: {}
        };
        return e[r](o, o.exports, n),
        o.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e, t) => {
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    n.nc = void 0,
    ( () => {
        "use strict";
        function e(e) {
            return new Promise(( (t, n) => {
                var r = new Image;
                r.src = e,
                r.onload = function() {
                    t(e)
                }
                ,
                r.onerror = function() {
                    n()
                }
            }
            ))
        }
        function t({text: e="", minLimit: t=100, maxLimit: n=290}) {
            let i = (e = (e = (e = function(e="") {
                let t = document.createElement("div");
                return t.innerHTML = e,
                t.innerText
            }(e)).replace(/\s+/g, " ")).replace(/[_]/g, "")).split(/([。！!？?，,；;：、])/).filter((e => !!e))
              , o = new Array
              , s = ""
              , a = 0
              , u = !1;
            for (let e = 0; e < i.length; e++) {
                s += i[e],
                a += i[e].length;
                let c = e === i.length - 1;
                if (u)
                    if (a < t) {
                        if (!c)
                            continue;
                        o.push(s)
                    } else {
                        if (a >= t && a <= n) {
                            o.push(s),
                            s = "",
                            a = 0;
                            continue
                        }
                        if (a > n) {
                            if (o.push(s.substring(0, n)),
                            s = s.substring(n),
                            a = s.length,
                            !c)
                                continue;
                            o.push(...r(s, n))
                        }
                    }
                else if (a < 20) {
                    if (!c)
                        continue;
                    o.push(s)
                } else {
                    if (a >= 20 && a <= 60) {
                        o.push(s),
                        u = !0,
                        s = "",
                        a = 0;
                        continue
                    }
                    if (a > 60) {
                        if (o.push(s.substring(0, 60)),
                        u = !0,
                        s = s.substring(60),
                        a = s.length,
                        !c)
                            continue;
                        o.push(...r(s, n))
                    }
                }
            }
            return o
        }
        function r(e, t) {
            let n = [];
            for (; e.length > 0; )
                n.push(e.substring(0, t)),
                e = e.substring(t);
            return n
        }
        const i = "https://metaqa.ucap.com.cn/api/qa"
          , o = {
            token: "ucap_mh_token"
        }
          , s = {
            code: "ERR_NETWORK",
            message: "网络错误"
        }
          , a = {
            code: "NETWORK_TIMEOUT",
            message: "网络超时"
        }
          , u = {
            code: "RENDER_ERROR",
            message: "数字人渲染失败"
        }
          , c = {
            code: "TOKEN_INVALID",
            message: "token无效|过期"
        }
          , l = {
            code: "SPEAK_ERROR",
            message: "播报错误"
        }
          , h = {
            code: "ERROR",
            message: "错误"
        };
        var p = n(669)
          , f = n.n(p);
        function d(e) {
            let t = function(e) {
                const t = f().create({
                    baseURL: e.baseUrl,
                    timeout: 12e4
                });
                return t.interceptors.request.use((e => {
                    let t = localStorage.getItem(o.token);
                    return t && (e.headers["X-Access-Token"] = t),
                    e
                }
                ), (e => {
                    Promise.reject(e)
                }
                )),
                t.interceptors.response.use((e => {
                    const t = "blob" === e.config.responseType || "arraybuffer" === e.config.responseType;
                    return t && function(e) {
                        let t = "";
                        e.config?.fileName ? t = e.config.fileName : e.headers["content-disposition"] ? (t = e.headers["content-disposition"].split(";")[1].split("=")[1],
                        t = decodeURIComponent(escape(t))) : t = "download";
                        const n = new Blob([e.data],{
                            type: e.headers["content-type"]
                        });
                        if (void 0 !== window.navigator.msSaveBlob)
                            window.navigator.msSaveBlob(n, t);
                        else {
                            const e = window.URL.createObjectURL(n)
                              , r = document.createElement("a");
                            r.style.display = "none",
                            r.href = e,
                            r.setAttribute("download", t),
                            void 0 === r.download && r.setAttribute("target", "_blank"),
                            document.body.appendChild(r),
                            r.click(),
                            document.body.removeChild(r),
                            window.URL.revokeObjectURL(e)
                        }
                    }(e),
                    t || e.data?.success || !e.config?.alertErrorMsg || console.error(e.data?.message || "服务异常"),
                    Promise.resolve(e.data)
                }
                ), (t => (e.onError && e.onError(t),
                t.config.alertErrorMsg && function(e) {
                    console.log("错误：", e.toJSON()),
                    console.log("错误response：", e.response);
                    const {response: t, message: n} = e;
                    if (t) {
                        const {status: e} = t
                    } else {
                        let e = "";
                        e = n.includes("timeout") ? "请求超时" : n
                    }
                }(t),
                Promise.reject(t)))),
                t
            }({
                baseUrl: e.baseUrl,
                onError: e.onError
            });
            return {
                tts: n => t({
                    url: e?.apiMap.tts || "/fly/text2audio",
                    method: "post",
                    data: n
                })
            }
        }
        class m {
            constructor(e) {
                this.apiBaseUrl = e?.apiBaseUrl ?? i,
                this.voice = e?.voice ?? "zhitian",
                this.voiceSpeed = e?.voiceSpeed ?? 0,
                this.voiceVolume = e?.voiceVolume ?? 50,
                this.onReady = e?.onReady ?? function() {}
                ,
                this.onError = e?.onError ?? function() {}
                ,
                this.onTokeniInvalid = e?.onTokeniInvalid ?? function() {}
                ,
                this.onSpeakBefore = e?.onSpeakBefore ?? function() {}
                ,
                this.onSpeak = e?.onSpeak ?? function() {}
                ,
                this.onSpeakEnd = e?.onSpeakEnd ?? function() {}
                ,
                e.token && this.tokenSet(e.token),
                this.$apiMap = e?.apiMap ?? {
                    tts: ""
                },
                this.$api = d({
                    baseUrl: this.apiBaseUrl,
                    apiMap: this.$apiMap,
                    onError: e => {
                        const {code: t, response: n, message: r} = e;
                        if ("ERR_NETWORK" === t)
                            this.onError(s);
                        else if (n) {
                            const {status: e} = n;
                            401 === e ? (this.onTokeniInvalid(),
                            this.onError(c)) : this.onError(h)
                        } else
                            r.includes("timeout") ? this.onError(a) : this.onError(h)
                    }
                }),
                this.$audioEl = document.createElement("audio"),
                this.$isSpeaking = !1,
                this.$render()
            }
            async $render() {
                this.onReady && this.onReady(this)
            }
            tokenSet(e) {
                localStorage.setItem(o.token, e)
            }
            async speak(e="") {
                try {
                    this.$isSpeaking && this.stop(),
                    this.onSpeakBefore && this.onSpeakBefore();
                    let n = t({
                        text: e.trim()
                    })
                      , r = 0
                      , i = null
                      , o = !1;
                    for (let e of n) {
                        console.log(`当前播报第：${r + 1}条`),
                        e = e.trim();
                        let t = null;
                        t = 0 === r ? await this.$tts(e) : i;
                        let s = r + 1;
                        s < n.length ? (this.$tts(n[s]).then((e => {
                            i = e
                        }
                        )),
                        console.log(`预加载第：${r + 2}条`)) : o = !0,
                        0 === r && (this.$isSpeaking = !0,
                        this.onSpeak && this.onSpeak());
                        let a = await this.$audioPlay(t);
                        if ("ended" === a && o) {
                            this.$isSpeaking = !1,
                            this.onSpeakEnd && this.onSpeakEnd();
                            break
                        }
                        if ("pause" === a) {
                            this.$isSpeaking = !1,
                            this.onSpeakEnd && this.onSpeakEnd();
                            break
                        }
                        if ("stop" === a) {
                            this.$isSpeaking = !1,
                            this.onSpeakEnd && this.onSpeakEnd();
                            break
                        }
                        if ("error" === a) {
                            this.$isSpeaking = !1,
                            this.onSpeakEnd && this.onSpeakEnd(),
                            this.onError && this.onError(l);
                            break
                        }
                        r++
                    }
                } catch (e) {
                    this.onError && this.onError(l)
                }
            }
            speakContinue() {
                this.$isSpeaking || (this.$audioEl.play(),
                this.$isSpeaking = !0)
            }
            pause() {
                this.$isSpeaking && this.$audioEl.pause()
            }
            stop() {
                this.$isSpeaking && (this.$audioEl.pause(),
                this.$audioEl.currentTime = 0)
            }
            $audioPlay(e) {
                return new Promise((async (t, n) => {
                    try {
                        this.$audioEl.onpause = () => {
                            let {ended: e, currentTime: n} = this.$audioEl;
                            t(e ? "ended" : 0 === n ? "stop" : "pause")
                        }
                        ,
                        this.$audioEl.onerror = e => {
                            console.log("onerror", e),
                            t("error")
                        }
                        ,
                        this.$audioEl.src = e,
                        this.$audioEl.play()
                    } catch (e) {
                        t("error")
                    }
                }
                ))
            }
            async $tts(e) {
                let {success: t, result: n} = await this.$api.tts({
                    text: e,
                    voice: this.voice,
                    speech: this.voiceSpeed,
                    volume: this.voiceVolume
                });
                return t ? n.url : Promise.reject("播报数据错误")
            }
            reRender() {
                this.$isSpeaking && this.stop(),
                this.$render()
            }
            destroy() {
                this.$isSpeaking && this.stop(),
                this.$audioEl = null,
                Object.keys(this).forEach((e => {
                    this[e] = void 0
                }
                ))
            }
        }
        var g = n(379)
          , v = n.n(g)
          , y = n(795)
          , E = n.n(y)
          , b = n(569)
          , S = n.n(b)
          , k = n(565)
          , w = n.n(k)
          , x = n(216)
          , R = n.n(x)
          , O = n(589)
          , T = n.n(O)
          , _ = n(65)
          , $ = {};
        $.styleTagTransform = T(),
        $.setAttributes = w(),
        $.insert = S().bind(null, "head"),
        $.domAPI = E(),
        $.insertStyleElement = R(),
        v()(_.Z, $),
        _.Z && _.Z.locals && _.Z.locals;
        class A {
            constructor(e) {
                this.renderShowLoading = e?.renderShowLoading ?? !0,
                this.renderLoadingText = e?.renderLoadingText ?? "",
                this.container = e?.container ?? "",
                this.apiBaseUrl = e?.apiBaseUrl ?? i,
                this.modelUrl = e?.modelUrl ?? "",
                this.modelOffset = e?.modelOffset ?? [0, 0],
                this.voice = e?.voice ?? "zhitian",
                this.voiceSpeed = e?.voiceSpeed ?? 0,
                this.voiceVolume = e?.voiceVolume ?? 50,
                this.animWait = e.animWait ?? "wait",
                this.animSpeak = e.animSpeak ?? "speak",
                this.onReady = e?.onReady ?? function() {}
                ,
                this.onError = e?.onError ?? function() {}
                ,
                this.onTokeniInvalid = e?.onTokeniInvalid ?? function() {}
                ,
                this.onSpeakBefore = e?.onSpeakBefore ?? function() {}
                ,
                this.onSpeak = e?.onSpeak ?? function() {}
                ,
                this.onSpeakEnd = e?.onSpeakEnd ?? function() {}
                ,
                e.token && this.tokenSet(e.token),
                this.$apiMap = e?.apiMap ?? {
                    tts: ""
                },
                this.$api = d({
                    baseUrl: this.apiBaseUrl,
                    apiMap: this.$apiMap,
                    onError: e => {
                        const {code: t, response: n, message: r} = e;
                        if ("ERR_NETWORK" === t)
                            this.onError(s);
                        else if (n) {
                            const {status: e} = n;
                            401 === e ? (this.onTokeniInvalid(),
                            this.onError(c)) : this.onError(h)
                        } else
                            r.includes("timeout") ? this.onError(a) : this.onError(h)
                    }
                }),
                this.$el = null,
                this.$mhEl = null,
                this.$audioEl = document.createElement("audio"),
                this.$isSpeaking = !1,
                this.$render()
            }
            async $render() {
                this.$initHtml(),
                this.loadingTextSet(this.renderLoadingText),
                this.renderShowLoading && this.loading(!0),
                await this.$loadGf(),
                this.actionTo("wait"),
                this.onReady && this.onReady(this),
                this.loading(!1),
                this.loadingTextSet("")
            }
            $loadGf() {
                return Promise.all([e(`${this.modelUrl}/wait.gif`), e(`${this.modelUrl}/speak.gif`)]).then(( ([e,t]) => {
                    let n = this.$mhEl.querySelector(".umh_mh_gf-wait")
                      , r = this.$mhEl.querySelector(".umh_mh_gf-speak");
                    n.style.backgroundImage = `url(${e})`,
                    r.style.backgroundImage = `url(${t})`
                }
                )).catch((e => {
                    this.onError && this.onError(u)
                }
                ))
            }
            $initHtml() {
                let[e,t] = this.modelOffset
                  , n = `\n    <div class="umh umh--eng-gf">\n      <div class="umh_mh" style="\n      left: ${"string" == typeof e ? e : e + "px"};\n      top: ${"string" == typeof t ? t : t + "px"};\n    ">\n        <div class="umh_mh_gf umh_mh_gf-wait"></div>\n        <div class="umh_mh_gf umh_mh_gf-speak"></div>\n      </div>\n      <div class="umh-loading">\n        <div class="umh-loading_body">\n          <div class="umh-loading_icon umh-anim-loading"></div>\n          <div class="umh-loading_text">加载中...</div>\n        </div>\n      </div>\n    </div>`;
                this.container.innerHTML = n,
                this.$el = this.container.querySelector(".umh"),
                this.$mhEl = this.container.querySelector(".umh_mh")
            }
            loading(e=!0) {
                let t = this.container.querySelector(".umh-loading");
                e ? (t.style.zIndex = "10",
                t.style.opacity = "1") : (t.style.opacity = "0",
                setTimeout(( () => {
                    t.style.zIndex = "-1"
                }
                ), 1e3))
            }
            loadingTextSet(e) {
                this.container.querySelector(".umh-loading_text").innerHTML = e
            }
            tokenSet(e) {
                localStorage.setItem(o.token, e)
            }
            actionTo(e) {
                this.$mhEl.className = `umh_mh umh_mh--${e}`
            }
            async speak(e="") {
                try {
                    this.$isSpeaking && this.stop(),
                    this.onSpeakBefore && this.onSpeakBefore();
                    let n = t({
                        text: e.trim()
                    })
                      , r = 0
                      , i = null
                      , o = !1;
                    for (let e of n) {
                        console.log(`当前播报第：${r + 1}条`),
                        e = e.trim();
                        let t = null;
                        t = 0 === r ? await this.$tts(e) : i;
                        let s = r + 1;
                        s < n.length ? (this.$tts(n[s]).then((e => {
                            i = e
                        }
                        )),
                        console.log(`预加载第：${r + 2}条`)) : o = !0,
                        0 === r && (this.$isSpeaking = !0,
                        this.actionTo(this.animSpeak),
                        this.onSpeak && this.onSpeak());
                        let a = await this.$audioPlay(t);
                        if ("ended" === a && o) {
                            this.$isSpeaking = !1,
                            this.actionTo(this.animWait),
                            this.onSpeakEnd && this.onSpeakEnd();
                            break
                        }
                        if ("pause" === a) {
                            this.$isSpeaking = !1,
                            this.actionTo(this.animWait),
                            this.onSpeakEnd && this.onSpeakEnd();
                            break
                        }
                        if ("stop" === a) {
                            this.$isSpeaking = !1,
                            this.actionTo(this.animWait),
                            this.onSpeakEnd && this.onSpeakEnd();
                            break
                        }
                        if ("error" === a) {
                            this.$isSpeaking = !1,
                            this.actionTo(this.animWait),
                            this.onSpeakEnd && this.onSpeakEnd(),
                            this.onError && this.onError(l);
                            break
                        }
                        r++
                    }
                } catch (e) {
                    this.onError && this.onError(l)
                }
            }
            speakContinue() {
                this.$isSpeaking || (this.$audioEl.play(),
                this.$isSpeaking = !0)
            }
            pause() {
                this.$isSpeaking && this.$audioEl.pause()
            }
            stop() {
                this.$isSpeaking && (this.$audioEl.pause(),
                this.$audioEl.currentTime = 0)
            }
            $audioPlay(e) {
                return new Promise((async (t, n) => {
                    try {
                        this.$audioEl.onpause = () => {
                            let {ended: e, currentTime: n} = this.$audioEl;
                            t(e ? "ended" : 0 === n ? "stop" : "pause")
                        }
                        ,
                        this.$audioEl.onerror = e => {
                            console.log("onerror", e),
                            t("error")
                        }
                        ,
                        this.$audioEl.src = e,
                        this.$audioEl.play()
                    } catch (e) {
                        t("error")
                    }
                }
                ))
            }
            async $tts(e) {
                let {success: t, result: n} = await this.$api.tts({
                    text: e,
                    voice: this.voice,
                    speech: this.voiceSpeed,
                    volume: this.voiceVolume
                });
                return t ? n.url : Promise.reject("播报数据错误")
            }
            reRender() {
                this.$isSpeaking && this.stop(),
                this.container.removeChild(this.$el),
                this.$render()
            }
            destroy() {
                this.$isSpeaking && this.stop(),
                this.container.removeChild(this.$el),
                this.$audioEl = null,
                Object.keys(this).forEach((e => {
                    this[e] = void 0
                }
                ))
            }
        }
        window.Metahuman = class {
            constructor(e) {
                e.engine || (e.engine = "GF");
                const {engine: t} = e;
                return "NONE" === t ? new m(e) : "GF" === t ? new A(e) : void 0
            }
        }
    }
    )()
}
)();
