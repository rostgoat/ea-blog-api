;(function(t) {
  function e(e) {
    for (
      var r, i, o = e[0], c = e[1], u = e[2], p = 0, d = [];
      p < o.length;
      p++
    )
      (i = o[p]),
        Object.prototype.hasOwnProperty.call(a, i) && a[i] && d.push(a[i][0]),
        (a[i] = 0)
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r])
    l && l(e)
    while (d.length) d.shift()()
    return s.push.apply(s, u || []), n()
  }
  function n() {
    for (var t, e = 0; e < s.length; e++) {
      for (var n = s[e], r = !0, o = 1; o < n.length; o++) {
        var c = n[o]
        0 !== a[c] && (r = !1)
      }
      r && (s.splice(e--, 1), (t = i((i.s = n[0]))))
    }
    return t
  }
  var r = {},
    a = { app: 0 },
    s = []
  function i(e) {
    if (r[e]) return r[e].exports
    var n = (r[e] = { i: e, l: !1, exports: {} })
    return t[e].call(n.exports, n, n.exports, i), (n.l = !0), n.exports
  }
  ;(i.m = t),
    (i.c = r),
    (i.d = function(t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
    }),
    (i.r = function(t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (i.t = function(t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t
      var n = Object.create(null)
      if (
        (i.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          i.d(
            n,
            r,
            function(e) {
              return t[e]
            }.bind(null, r),
          )
      return n
    }),
    (i.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t['default']
            }
          : function() {
              return t
            }
      return i.d(e, 'a', e), e
    }),
    (i.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (i.p = '/')
  var o = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    c = o.push.bind(o)
  ;(o.push = e), (o = o.slice())
  for (var u = 0; u < o.length; u++) e(o[u])
  var l = c
  s.push([0, 'chunk-vendors']), n()
})({
  0: function(t, e, n) {
    t.exports = n('cd49')
  },
  1: function(t, e) {},
  '1a3b': function(t, e, n) {},
  '206d': function(t, e, n) {
    'use strict'
    var r = n('50a7'),
      a = n.n(r)
    a.a
  },
  4678: function(t, e, n) {
    var r = {
      './af': '2bfb',
      './af.js': '2bfb',
      './ar': '8e73',
      './ar-dz': 'a356',
      './ar-dz.js': 'a356',
      './ar-kw': '423e',
      './ar-kw.js': '423e',
      './ar-ly': '1cfd',
      './ar-ly.js': '1cfd',
      './ar-ma': '0a84',
      './ar-ma.js': '0a84',
      './ar-sa': '8230',
      './ar-sa.js': '8230',
      './ar-tn': '6d83',
      './ar-tn.js': '6d83',
      './ar.js': '8e73',
      './az': '485c',
      './az.js': '485c',
      './be': '1fc1',
      './be.js': '1fc1',
      './bg': '84aa',
      './bg.js': '84aa',
      './bm': 'a7fa',
      './bm.js': 'a7fa',
      './bn': '9043',
      './bn.js': '9043',
      './bo': 'd26a',
      './bo.js': 'd26a',
      './br': '6887',
      './br.js': '6887',
      './bs': '2554',
      './bs.js': '2554',
      './ca': 'd716',
      './ca.js': 'd716',
      './cs': '3c0d',
      './cs.js': '3c0d',
      './cv': '03ec',
      './cv.js': '03ec',
      './cy': '9797',
      './cy.js': '9797',
      './da': '0f14',
      './da.js': '0f14',
      './de': 'b469',
      './de-at': 'b3eb',
      './de-at.js': 'b3eb',
      './de-ch': 'bb71',
      './de-ch.js': 'bb71',
      './de.js': 'b469',
      './dv': '598a',
      './dv.js': '598a',
      './el': '8d47',
      './el.js': '8d47',
      './en-SG': 'cdab',
      './en-SG.js': 'cdab',
      './en-au': '0e6b',
      './en-au.js': '0e6b',
      './en-ca': '3886',
      './en-ca.js': '3886',
      './en-gb': '39a6',
      './en-gb.js': '39a6',
      './en-ie': 'e1d3',
      './en-ie.js': 'e1d3',
      './en-il': '7333',
      './en-il.js': '7333',
      './en-nz': '6f50',
      './en-nz.js': '6f50',
      './eo': '65db',
      './eo.js': '65db',
      './es': '898b',
      './es-do': '0a3c',
      './es-do.js': '0a3c',
      './es-us': '55c9',
      './es-us.js': '55c9',
      './es.js': '898b',
      './et': 'ec18',
      './et.js': 'ec18',
      './eu': '0ff2',
      './eu.js': '0ff2',
      './fa': '8df4',
      './fa.js': '8df4',
      './fi': '81e9',
      './fi.js': '81e9',
      './fo': '0721',
      './fo.js': '0721',
      './fr': '9f26',
      './fr-ca': 'd9f8',
      './fr-ca.js': 'd9f8',
      './fr-ch': '0e49',
      './fr-ch.js': '0e49',
      './fr.js': '9f26',
      './fy': '7118',
      './fy.js': '7118',
      './ga': '5120',
      './ga.js': '5120',
      './gd': 'f6b4',
      './gd.js': 'f6b4',
      './gl': '8840',
      './gl.js': '8840',
      './gom-latn': '0caa',
      './gom-latn.js': '0caa',
      './gu': 'e0c5',
      './gu.js': 'e0c5',
      './he': 'c7aa',
      './he.js': 'c7aa',
      './hi': 'dc4d',
      './hi.js': 'dc4d',
      './hr': '4ba9',
      './hr.js': '4ba9',
      './hu': '5b14',
      './hu.js': '5b14',
      './hy-am': 'd6b6',
      './hy-am.js': 'd6b6',
      './id': '5038',
      './id.js': '5038',
      './is': '0558',
      './is.js': '0558',
      './it': '6e98',
      './it-ch': '6f12',
      './it-ch.js': '6f12',
      './it.js': '6e98',
      './ja': '079e',
      './ja.js': '079e',
      './jv': 'b540',
      './jv.js': 'b540',
      './ka': '201b',
      './ka.js': '201b',
      './kk': '6d79',
      './kk.js': '6d79',
      './km': 'e81d',
      './km.js': 'e81d',
      './kn': '3e92',
      './kn.js': '3e92',
      './ko': '22f8',
      './ko.js': '22f8',
      './ku': '2421',
      './ku.js': '2421',
      './ky': '9609',
      './ky.js': '9609',
      './lb': '440c',
      './lb.js': '440c',
      './lo': 'b29d',
      './lo.js': 'b29d',
      './lt': '26f9',
      './lt.js': '26f9',
      './lv': 'b97c',
      './lv.js': 'b97c',
      './me': '293c',
      './me.js': '293c',
      './mi': '688b',
      './mi.js': '688b',
      './mk': '6909',
      './mk.js': '6909',
      './ml': '02fb',
      './ml.js': '02fb',
      './mn': '958b',
      './mn.js': '958b',
      './mr': '39bd',
      './mr.js': '39bd',
      './ms': 'ebe4',
      './ms-my': '6403',
      './ms-my.js': '6403',
      './ms.js': 'ebe4',
      './mt': '1b45',
      './mt.js': '1b45',
      './my': '8689',
      './my.js': '8689',
      './nb': '6ce3',
      './nb.js': '6ce3',
      './ne': '3a39',
      './ne.js': '3a39',
      './nl': 'facd',
      './nl-be': 'db29',
      './nl-be.js': 'db29',
      './nl.js': 'facd',
      './nn': 'b84c',
      './nn.js': 'b84c',
      './pa-in': 'f3ff',
      './pa-in.js': 'f3ff',
      './pl': '8d57',
      './pl.js': '8d57',
      './pt': 'f260',
      './pt-br': 'd2d4',
      './pt-br.js': 'd2d4',
      './pt.js': 'f260',
      './ro': '972c',
      './ro.js': '972c',
      './ru': '957c',
      './ru.js': '957c',
      './sd': '6784',
      './sd.js': '6784',
      './se': 'ffff',
      './se.js': 'ffff',
      './si': 'eda5',
      './si.js': 'eda5',
      './sk': '7be6',
      './sk.js': '7be6',
      './sl': '8155',
      './sl.js': '8155',
      './sq': 'c8f3',
      './sq.js': 'c8f3',
      './sr': 'cf1e',
      './sr-cyrl': '13e9',
      './sr-cyrl.js': '13e9',
      './sr.js': 'cf1e',
      './ss': '52bd',
      './ss.js': '52bd',
      './sv': '5fbd',
      './sv.js': '5fbd',
      './sw': '74dc',
      './sw.js': '74dc',
      './ta': '3de5',
      './ta.js': '3de5',
      './te': '5cbb',
      './te.js': '5cbb',
      './tet': '576c',
      './tet.js': '576c',
      './tg': '3b1b',
      './tg.js': '3b1b',
      './th': '10e8',
      './th.js': '10e8',
      './tl-ph': '0f38',
      './tl-ph.js': '0f38',
      './tlh': 'cf75',
      './tlh.js': 'cf75',
      './tr': '0e81',
      './tr.js': '0e81',
      './tzl': 'cf51',
      './tzl.js': 'cf51',
      './tzm': 'c109',
      './tzm-latn': 'b53d',
      './tzm-latn.js': 'b53d',
      './tzm.js': 'c109',
      './ug-cn': '6117',
      './ug-cn.js': '6117',
      './uk': 'ada2',
      './uk.js': 'ada2',
      './ur': '5294',
      './ur.js': '5294',
      './uz': '2e8c',
      './uz-latn': '010e',
      './uz-latn.js': '010e',
      './uz.js': '2e8c',
      './vi': '2921',
      './vi.js': '2921',
      './x-pseudo': 'fd7e',
      './x-pseudo.js': 'fd7e',
      './yo': '7f33',
      './yo.js': '7f33',
      './zh-cn': '5c3a',
      './zh-cn.js': '5c3a',
      './zh-hk': '49ab',
      './zh-hk.js': '49ab',
      './zh-tw': '90ea',
      './zh-tw.js': '90ea',
    }
    function a(t) {
      var e = s(t)
      return n(e)
    }
    function s(t) {
      if (!n.o(r, t)) {
        var e = new Error("Cannot find module '" + t + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      return r[t]
    }
    ;(a.keys = function() {
      return Object.keys(r)
    }),
      (a.resolve = s),
      (t.exports = a),
      (a.id = '4678')
  },
  '50a7': function(t, e, n) {},
  '58cd': function(t, e, n) {
    'use strict'
    var r = n('dbaa'),
      a = n.n(r)
    a.a
  },
  '5c0b': function(t, e, n) {
    'use strict'
    var r = n('7694'),
      a = n.n(r)
    a.a
  },
  7694: function(t, e, n) {},
  '7a81': function(t, e, n) {},
  9370: function(t, e, n) {
    'use strict'
    var r = n('b88a'),
      a = n.n(r)
    a.a
  },
  '94c5': function(t, e, n) {
    'use strict'
    var r = n('b6ed'),
      a = n.n(r)
    a.a
  },
  a894: function(t, e, n) {
    'use strict'
    var r = n('eb6a'),
      a = n.n(r)
    a.a
  },
  b6ed: function(t, e, n) {},
  b88a: function(t, e, n) {},
  bb8d: function(t, e, n) {
    'use strict'
    var r = n('f8c2'),
      a = n.n(r)
    a.a
  },
  bbd5: function(t, e, n) {
    t.exports = n.p + 'img/logo_gb.6e4d4fc0.png'
  },
  bfb2: function(t, e, n) {
    'use strict'
    var r = n('7a81'),
      a = n.n(r)
    a.a
  },
  cd49: function(t, e, n) {
    'use strict'
    n.r(e)
    n('96cf')
    var r = n('1da1'),
      a = (n('e260'), n('e6cf'), n('cca6'), n('a79d'), n('2b0e')),
      s = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'v-app',
          [
            n(
              'v-app-bar',
              {
                attrs: {
                  app: '',
                  dark: '',
                  fixed: '',
                  extended: '',
                  'extension-height': '3',
                },
              },
              [
                n('v-app-bar-nav-icon', {
                  staticClass: 'hidden-sm-and-up',
                  nativeOn: {
                    click: function(e) {
                      e.stopPropagation(), (t.sideNav = !t.sideNav)
                    },
                  },
                }),
                n(
                  'v-toolbar-title',
                  [
                    n(
                      'router-link',
                      {
                        staticStyle: { cursor: 'pointer' },
                        attrs: { to: '/', tag: 'span' },
                      },
                      [n('v-img', { attrs: { src: t.imgSrc } })],
                      1,
                    ),
                  ],
                  1,
                ),
                n('v-spacer'),
                n(
                  'v-toolbar-items',
                  { staticClass: 'hidden-xs-only' },
                  t._l(t.items, function(e) {
                    return n(
                      'v-btn',
                      {
                        key: e.title,
                        on: {
                          click: function(n) {
                            return t.onClickMenuItem(e.title)
                          },
                        },
                      },
                      [
                        n('v-icon', { attrs: { left: '', dark: '' } }, [
                          t._v(t._s(e.icon)),
                        ]),
                        t._v(' ' + t._s(e.title) + ' '),
                      ],
                      1,
                    )
                  }),
                  1,
                ),
              ],
              1,
            ),
            n(
              'v-navigation-drawer',
              {
                attrs: { app: '', clipped: '', temporary: '', absolute: '' },
                model: {
                  value: t.sideNav,
                  callback: function(e) {
                    t.sideNav = e
                  },
                  expression: 'sideNav',
                },
              },
              [
                n(
                  'v-list',
                  t._l(t.items, function(e) {
                    return n(
                      'v-list-item',
                      {
                        key: e.title,
                        on: {
                          click: function(n) {
                            return t.onClickMenuItem(e.title)
                          },
                        },
                      },
                      [
                        n(
                          'v-list-item-icon',
                          [
                            n('v-icon', {
                              domProps: { textContent: t._s(e.icon) },
                            }),
                          ],
                          1,
                        ),
                        n(
                          'v-list-item-content',
                          [
                            n('v-list-item-title', {
                              domProps: { textContent: t._s(e.title) },
                            }),
                          ],
                          1,
                        ),
                      ],
                      1,
                    )
                  }),
                  1,
                ),
              ],
              1,
            ),
            n(
              'v-content',
              { staticClass: 'default-layout__main-content' },
              [
                n(
                  'transition',
                  { attrs: { name: 'fade', mode: 'out-in' } },
                  [n('router-view')],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        )
      },
      i = [],
      o = (n('b0c0'), n('ac1f'), n('5319'), n('d4ec')),
      c = n('bee2'),
      u = n('99de'),
      l = n('7e84'),
      p = n('262e'),
      d = n('9ab4'),
      f = n('2fe1'),
      h = n('6fc5'),
      m = n('2f62'),
      b = n('bfa9')
    a['default'].use(m['a'])
    var g = new b['a']({ strictMode: !1, storage: localStorage }),
      v = new m['a'].Store({
        state: {},
        mutations: { RESTORE_MUTATION: g.RESTORE_MUTATION },
        actions: {},
        modules: {},
        plugins: [g.plugin],
      }),
      k = (n('d3b7'), n('5530')),
      j = n('bc3a'),
      _ = n.n(j),
      w = n('5c96'),
      y = n.n(w),
      O =
        (n('99af'),
        '\n  color: white;\n  font-weight: 800;\n  padding: 2px 5px 2px 5px;\n'),
      x = '\n  '.concat(
        O,
        '\n  background: #7F7EFF;\n  border-radius: 50px 0 0 50px\n',
      ),
      C = '\n  background: transparent;\n  font-weight: 400;\n',
      S = '\n  '.concat(
        O,
        '\n  background-image: linear-gradient(19deg, #FBDA61 0%, #FF5ACD 100%);\n  border-radius: 0 50px 50px 0;\n  ',
      ),
      E = '\n  '.concat(
        O,
        '\n  background-color: #08AEEA;\n  background-image: linear-gradient(19deg, #08AEEA 0%, #2AF598 100%);\n  border-radius: 0 50px 50px 0;\n  ',
      ),
      T = '\n  '.concat(
        O,
        '\n  background-image: linear-gradient(19deg, #EA7AF4 0%, #6200B3 100%);\n  background-color: #FBDA61;\n  border-radius: 0 0.0 0;\n',
      ),
      R = '\n  '.concat(
        O,
        '\n  color: #B7972F;\n  background-color: #FBDA61;\n  background-image: linear-gradient(19deg, #FFF052 0%, #EDD892 100%);\n  border-radius: 0 50px 50px 0;\n',
      ),
      I = '\n  '.concat(
        O,
        '\n  color: white;\n  background-color: #FBDA61;\n  background-image: linear-gradient(19deg, #E64055 0%, #BC1900 100%);\n  border-radius: 0 0 0 0;\n',
      ),
      U = '\n  '.concat(
        O,
        '\n  color: white;\n  background-color: #FBDA61;\n  background-image: linear-gradient(19deg, rgba(183,185,117,1) 0%, rgba(115,136,0,1) 100%);\n  border-radius: 0 50px 50px 0;\n',
      ),
      P = '\n  '.concat(
        O,
        '\n  color: white;\n  background-color: #FBDA61;\n  background-image: linear-gradient(19deg, rgba(117,185,129,1) 0%, rgba(148,175,0,1) 100%);\n  border-radius: 0 50px 50px 0;\n',
      ),
      A = (function() {
        function t() {
          Object(o['a'])(this, t),
            (this.prefix = ''),
            (this.debug = !1),
            (this.prefix = 'EA API'),
            (this.debug = !1)
        }
        return (
          Object(c['a'])(t, [
            {
              key: 'install',
              value: function(t) {
                t.prototype.$log = this
              },
            },
            {
              key: 'error',
              value: function(t, e) {
                var n = e.status,
                  r = e.statusText,
                  a = e.config,
                  s = JSON.stringify(e, null, 1)
                return (
                  this.debug &&
                    (window.console.groupCollapsed(
                      '%c'
                        .concat(this.prefix, '%cError%c ')
                        .concat(a.method.toUpperCase(), ' : ')
                        .concat(a.url, ' : ')
                        .concat(n, ' : ')
                        .concat(r),
                      x,
                      I,
                      U,
                    ),
                    window.console.error(s),
                    window.console.groupEnd()),
                  t
                )
              },
            },
            {
              key: 'info',
              value: function(t) {
                return (
                  this.debug &&
                    window.console.info(
                      '%c'.concat(this.prefix, '%cInfo%c ').concat(t),
                      x,
                      S,
                      C,
                    ),
                  t
                )
              },
            },
            {
              key: 'warn',
              value: function(t) {
                return (
                  this.debug &&
                    (window.console.group(
                      '%c'.concat(this.prefix, '%cWarning%c'),
                      x,
                      R,
                      C,
                    ),
                    window.console.warn(t),
                    window.console.groupEnd()),
                  t
                )
              },
            },
            {
              key: 'event',
              value: function(t) {
                return (
                  this.debug &&
                    window.console.info(
                      '%c'.concat(this.prefix, '%cEvent%c ').concat(t),
                      x,
                      E,
                      C,
                    ),
                  t
                )
              },
            },
            {
              key: 'request',
              value: function(t) {
                var e = JSON.stringify(t, null, 1)
                return (
                  this.debug &&
                    (window.console.groupCollapsed(
                      '%c'
                        .concat(this.prefix, '%cRequest%c ')
                        .concat(t.method.toUpperCase(), ' : ')
                        .concat(t.url),
                      x,
                      T,
                      P,
                    ),
                    window.console.info(e),
                    window.console.groupEnd()),
                  e
                )
              },
            },
          ]),
          t
        )
      })(),
      L = new A(),
      F = !1,
      V = _.a.create({
        baseURL: 'https://game-bible.herokuapp.com',
        timeout: 5e3,
      })
    V.interceptors.request.use(
      function(t) {
        return F && L.request({ method: t.method, url: t.url }), t
      },
      function(t) {
        return Promise.reject(t)
      },
    ),
      V.interceptors.response.use(
        function(t) {
          return t.data
        },
        function(t) {
          var e = t.response
          return (
            F && L.error(e.data.message, e),
            Object(w['Message'])({
              message: 'Error: '.concat(e.data.message),
              type: 'error',
              duration: 5e3,
            }),
            Promise.reject(Object(k['a'])({}, t))
          )
        },
      )
    var M,
      $,
      D,
      N,
      z,
      G,
      q,
      B = V,
      Y = function(t) {
        return B({ url: '/auth/login', method: 'post', data: t })
      },
      K = function(t) {
        return B({ url: '/auth/register', method: 'post', data: t })
      },
      Z = n('a78e'),
      J = n.n(Z),
      H = 'vue_typescript_admin_access_token',
      W = function(t) {
        return J.a.set(H, t)
      },
      Q = 'SET_POSTS',
      X = 'SET_LIKE_PROPS',
      tt = 'SET_LIKES',
      et = 'SET_USERNAME',
      nt = 'SET_NAME',
      rt = 'SET_TOKEN',
      at = 'SET_UID',
      st = 'GET_ALL_POSTS',
      it = 'UPDATE_POSTS',
      ot = 'CREATE_POST',
      ct = 'LOGIN_USER',
      ut = 'LOGOUT_USER',
      lt = 'REGISTER_USER',
      pt = 'CREATE_LIKES',
      dt = 'GET_POSTS',
      ft = 'GET_USERNAME',
      ht = 'GET_USER',
      mt = (function(t) {
        function e() {
          var t
          return (
            Object(o['a'])(this, e),
            (t = Object(u['a'])(
              this,
              Object(l['a'])(e).apply(this, arguments),
            )),
            (t.username = ''),
            (t.name = ''),
            (t.token = ''),
            (t.uid = ''),
            t
          )
        }
        return (
          Object(p['a'])(e, t),
          Object(c['a'])(e, [
            {
              key: (M = et),
              value: function(t) {
                this.username = t
              },
            },
            {
              key: ($ = nt),
              value: function(t) {
                this.name = t
              },
            },
            {
              key: (D = rt),
              value: function(t) {
                this.token = t
              },
            },
            {
              key: (N = at),
              value: function(t) {
                this.uid = t
              },
            },
            {
              key: (z = lt),
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(function(t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), K(e)
                          case 2:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  }),
                )
                function e(e) {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: (G = ct),
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t(e) {
                    var n, r, a, s, i
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), Y(e)
                            case 2:
                              ;(n = t.sent),
                                'undefined' !== typeof n &&
                                  ((r = n.accessToken),
                                  (a = n.username),
                                  (s = n.name),
                                  (i = n.uid),
                                  W(r),
                                  this.SET_UID(i),
                                  this.SET_TOKEN(r),
                                  this.SET_USERNAME(a),
                                  this.SET_NAME(s))
                            case 4:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                    )
                  }),
                )
                function e(e) {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: (q = ut),
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              this.SET_UID(''),
                                this.SET_TOKEN(''),
                                this.SET_USERNAME(''),
                                this.SET_NAME('')
                            case 4:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                    )
                  }),
                )
                function e() {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: ft,
              get: function() {
                return this.username || null
              },
            },
            {
              key: ht,
              get: function() {
                return {
                  username: this.username,
                  token: this.token,
                  name: this.name,
                  uid: this.uid,
                }
              },
            },
          ]),
          e
        )
      })(h['d'])
    Object(d['a'])([h['c']], mt.prototype, M, null),
      Object(d['a'])([h['c']], mt.prototype, $, null),
      Object(d['a'])([h['c']], mt.prototype, D, null),
      Object(d['a'])([h['c']], mt.prototype, N, null),
      Object(d['a'])([Object(h['a'])({ rawError: !0 })], mt.prototype, z, null),
      Object(d['a'])([Object(h['a'])({ rawError: !0 })], mt.prototype, G, null),
      Object(d['a'])([Object(h['a'])({ rawError: !0 })], mt.prototype, q, null),
      (mt = Object(d['a'])(
        [
          Object(h['b'])({
            namespaced: !0,
            name: 'users',
            store: v,
            dynamic: !0,
            preserveState: null !== localStorage.getItem('users'),
          }),
        ],
        mt,
      ))
    var bt = Object(h['e'])(mt),
      gt = n('60a3'),
      vt = (function(t) {
        function e() {
          var t
          return (
            Object(o['a'])(this, e),
            (t = Object(u['a'])(
              this,
              Object(l['a'])(e).apply(this, arguments),
            )),
            (t.name = 'App'),
            (t.loading = !1),
            (t.items = [
              { icon: 'mdi-lead-pencil', title: 'Create Post' },
              { icon: 'mdi-lock-open', title: 'Login' },
              { icon: 'mdi-lock', title: 'Logout' },
            ]),
            (t.user = {}),
            (t.sideNav = !1),
            t
          )
        }
        return (
          Object(p['a'])(e, t),
          Object(c['a'])(e, [
            {
              key: 'mounted',
              value: function() {
                this.updateMenuLinks()
              },
            },
            {
              key: 'beforeRouteEnter',
              value: function(t, e, n) {
                n(function(t) {
                  t.UsersModule.loggedInUser, n()
                })
              },
            },
            {
              key: 'onLoggedInUserChange',
              value: function() {
                this.updateMenuLinks()
              },
            },
            {
              key: 'updateMenuLinks',
              value: function() {
                var t = bt.GET_USER.token
                t
                  ? ((this.items = []),
                    this.items.unshift(
                      { icon: 'mdi-lead-pencil', title: 'Create Post' },
                      { icon: 'mdi-lock', title: 'Logout' },
                    ))
                  : ((this.items = []),
                    this.items.push({ icon: 'mdi-lock-open', title: 'Login' }))
              },
            },
            {
              key: 'onClickMenuItem',
              value: function(t) {
                var e = t.toLowerCase().replace(/ /g, '-')
                switch (e) {
                  case 'login':
                    this.onClickLogin()
                    break
                  case 'logout':
                    this.onClickLogout()
                    break
                  case 'create-post':
                    this.onClickCreatePost()
                    break
                  case 'manage-posts':
                    this.onClickManagePosts()
                    break
                  case 'settings':
                    this.onClickSettings()
                    break
                }
              },
            },
            {
              key: 'onClickLogin',
              value: function() {
                this.$router.push('/login')
              },
            },
            {
              key: 'onClickLogout',
              value: function() {
                bt.LOGOUT_USER(),
                  'login' !== this.$route.name && this.$router.push('/login')
              },
            },
            {
              key: 'onClickManagePosts',
              value: function() {
                this.$router.push('/manage-posts')
              },
            },
            {
              key: 'onClickSettings',
              value: function() {
                this.$router.push('/settings')
              },
            },
            {
              key: 'onClickCreatePost',
              value: function() {
                this.$router.push('/create')
              },
            },
            {
              key: 'loggedInUser',
              get: function() {
                return bt.GET_USER
              },
            },
            {
              key: 'imgSrc',
              get: function() {
                return n('bbd5')
              },
            },
          ]),
          e
        )
      })(a['default'])
    Object(d['a'])(
      [Object(gt['c'])('loggedInUser')],
      vt.prototype,
      'onLoggedInUserChange',
      null,
    ),
      (vt = Object(d['a'])([f['default']], vt))
    var kt = vt,
      jt = kt,
      _t = (n('5c0b'), n('2877')),
      wt = n('6544'),
      yt = n.n(wt),
      Ot = n('7496'),
      xt = n('40dc'),
      Ct = n('5bc1'),
      St = n('8336'),
      Et = n('a75b'),
      Tt = n('132d'),
      Rt = n('adda'),
      It = n('8860'),
      Ut = n('da13'),
      Pt = n('5d23'),
      At = n('34c3'),
      Lt = n('f774'),
      Ft = n('2fa4'),
      Vt = n('2a7f'),
      Mt = Object(_t['a'])(jt, s, i, !1, null, null, null),
      $t = Mt.exports
    yt()(Mt, {
      VApp: Ot['a'],
      VAppBar: xt['a'],
      VAppBarNavIcon: Ct['a'],
      VBtn: St['a'],
      VContent: Et['a'],
      VIcon: Tt['a'],
      VImg: Rt['a'],
      VList: It['a'],
      VListItem: Ut['a'],
      VListItemContent: Pt['a'],
      VListItemIcon: At['a'],
      VListItemTitle: Pt['b'],
      VNavigationDrawer: Lt['a'],
      VSpacer: Ft['a'],
      VToolbarItems: Vt['a'],
      VToolbarTitle: Vt['b'],
    })
    n('45fc')
    var Dt,
      Nt,
      zt,
      Gt,
      qt,
      Bt,
      Yt,
      Kt = n('45eb'),
      Zt = n('8c4f'),
      Jt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n('v-app', [n('PostsList')], 1)
      },
      Ht = [],
      Wt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'v-app',
          t._l(t.posts, function(t) {
            return n(
              'div',
              { key: t.id, staticClass: 'posts-list' },
              [n('PostListItem', { attrs: { post: t } })],
              1,
            )
          }),
          0,
        )
      },
      Qt = [],
      Xt = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'v-card',
          {
            staticClass: 'mx-auto mt-5 posts-list-item',
            attrs: { outlined: '' },
          },
          [
            n(
              'v-container',
              { staticClass: 'posts-list-item__content' },
              [
                n(
                  'v-card',
                  {
                    staticClass:
                      'posts-list-item__container posts-list-item__image',
                    attrs: { flat: '' },
                    on: { click: t.onClickPost },
                  },
                  [
                    n(
                      'div',
                      { staticClass: 'pa-2 posts-list-item__img' },
                      [
                        n('v-img', {
                          attrs: {
                            id: 'photo',
                            src: t.imageSource,
                            'aspect-ratio': '1.7',
                            contain: '',
                          },
                        }),
                      ],
                      1,
                    ),
                  ],
                ),
                n(
                  'v-card',
                  {
                    staticClass:
                      'posts-list-item__container posts-list-item__description',
                    attrs: { flat: '' },
                  },
                  [
                    n(
                      'v-card-title',
                      {
                        staticClass: 'posts-list-item__title',
                        on: { click: t.onClickPost },
                      },
                      [n('h2', [t._v(t._s(t.post.post_title))])],
                    ),
                    n(
                      'v-card-subtitle',
                      {
                        staticClass: 'posts-list-item__subtitle',
                        on: { click: t.onClickPost },
                      },
                      [n('h3', [t._v(t._s(t.post.post_subtitle))])],
                    ),
                    n(
                      'v-card-text',
                      {
                        staticClass: 'posts-list-item__post-content',
                        on: { click: t.onClickPost },
                      },
                      [t._v(' ' + t._s(t.content) + ' ')],
                    ),
                    n(
                      'div',
                      { staticClass: 'posts-list-item__actions mt-3' },
                      [
                        n(
                          'div',
                          { staticClass: 'posts-list-item__actions-author' },
                          [t._v(' ' + t._s(t.post.post_author) + ' ')],
                        ),
                        n(
                          'div',
                          { staticClass: 'posts-list-item__actions-date' },
                          [t._v(' ' + t._s(t.formatPostCreatedDate) + ' ')],
                        ),
                        n(
                          'v-row',
                          {
                            staticClass: 'posts-list-item__actions-buttons',
                            attrs: { align: 'center', justify: 'end' },
                          },
                          [
                            n(
                              'v-btn',
                              {
                                staticClass: 'ma-2',
                                attrs: {
                                  text: '',
                                  icon: '',
                                  color: 'blue lighten-2',
                                },
                                on: { click: t.onClickLikePost },
                              },
                              [
                                n(
                                  'v-icon',
                                  { attrs: { disabled: !t.loggedInUser.uid } },
                                  [t._v('mdi-thumb-up')],
                                ),
                              ],
                              1,
                            ),
                            n(
                              'div',
                              { staticClass: 'posts-list-item__like-count' },
                              [
                                t._v(
                                  ' ' + t._s(t.count > 0 ? t.count : '') + ' ',
                                ),
                              ],
                            ),
                          ],
                          1,
                        ),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        )
      },
      te = [],
      ee =
        (n('a623'),
        n('4de4'),
        function(t) {
          return B({ url: '/likes/like', method: 'post', data: t })
        }),
      ne = function(t) {
        return B({ url: '/likes/unlike', method: 'put', data: t })
      },
      re = function(t) {
        return B({ url: '/likes/relike', method: 'put', data: t })
      },
      ae = function(t) {
        return B({ url: '/likes/likes', method: 'get', params: t })
      },
      se =
        (n('4160'),
        n('159b'),
        function(t) {
          return B({ url: '/posts/create', method: 'post', data: t })
        }),
      ie = function() {
        return B({ url: '/posts/find', method: 'get' })
      },
      oe = function(t) {
        return B({ url: '/posts/findOne', method: 'get', params: t })
      },
      ce = (function(t) {
        function e() {
          var t
          return (
            Object(o['a'])(this, e),
            (t = Object(u['a'])(
              this,
              Object(l['a'])(e).apply(this, arguments),
            )),
            (t.posts = []),
            t
          )
        }
        return (
          Object(p['a'])(e, t),
          Object(c['a'])(e, [
            {
              key: (Dt = Q),
              value: function(t) {
                this.posts = t
              },
            },
            {
              key: (Nt = tt),
              value: function(t) {
                var e = t.post_uid
                this.posts.forEach(function(t) {
                  if (t.p_uid === e) {
                    var n = t
                    ;(n.likes = []), (t = Object.assign(t, n))
                  }
                })
              },
            },
            {
              key: (zt = X),
              value: function(t) {
                this.posts.forEach(function(e) {
                  var n = t[e.p_uid]
                  if (n) {
                    var r = e.likes
                    if (0 === r.length) {
                      var a = {
                        l_uid: n.uid,
                        post_liked: n.post_liked,
                        post_uid: e.p_uid,
                        user_uid: n.user.uid,
                      }
                      r.push(a)
                    } else {
                      var s = r.some(function(t) {
                        return t.l_uid === n.uid
                      })
                      if (s)
                        r.forEach(function(t) {
                          t.l_uid === n.uid && (t.post_liked = n.post_liked)
                        })
                      else {
                        var i = {
                          l_uid: n.uid,
                          post_liked: n.post_liked,
                          post_uid: e.p_uid,
                          user_uid: n.user.uid,
                        }
                        r.push(i)
                      }
                    }
                    e.likes = Object.assign(e.likes, r)
                  }
                })
              },
            },
            {
              key: (Gt = ot),
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(function(t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), se(e)
                          case 2:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  }),
                )
                function e(e) {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: (qt = st),
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t() {
                    var e
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), ie()
                            case 2:
                              ;(e = t.sent),
                                'undefined' !== typeof e && this.SET_POSTS(e)
                            case 4:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                    )
                  }),
                )
                function e() {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: (Bt = it),
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              this.SET_LIKE_PROPS(e)
                            case 1:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                    )
                  }),
                )
                function e(e) {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: (Yt = pt),
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              this.SET_LIKES(e)
                            case 1:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                    )
                  }),
                )
                function e(e) {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: dt,
              get: function() {
                return this.posts || []
              },
            },
          ]),
          e
        )
      })(h['d'])
    Object(d['a'])([h['c']], ce.prototype, Dt, null),
      Object(d['a'])([h['c']], ce.prototype, Nt, null),
      Object(d['a'])([h['c']], ce.prototype, zt, null),
      Object(d['a'])(
        [Object(h['a'])({ rawError: !0 })],
        ce.prototype,
        Gt,
        null,
      ),
      Object(d['a'])(
        [Object(h['a'])({ rawError: !0 })],
        ce.prototype,
        qt,
        null,
      ),
      Object(d['a'])(
        [Object(h['a'])({ rawError: !0 })],
        ce.prototype,
        Bt,
        null,
      ),
      Object(d['a'])(
        [Object(h['a'])({ rawError: !0 })],
        ce.prototype,
        Yt,
        null,
      ),
      (ce = Object(d['a'])(
        [
          Object(h['b'])({
            namespaced: !0,
            name: 'posts',
            store: v,
            dynamic: !0,
            preserveState: null !== localStorage.getItem('posts'),
          }),
        ],
        ce,
      ))
    var ue = Object(h['e'])(ce),
      le = n('c1df'),
      pe = n.n(le),
      de = n('2ef0'),
      fe = n('3653'),
      he = function(t) {
        return B({ url: '/storage/upload', method: 'post', data: t })
      },
      me = function(t) {
        return B({ url: '/storage/signedUrl', method: 'get', params: t })
      },
      be = (function(t) {
        function e() {
          return (
            Object(o['a'])(this, e),
            Object(u['a'])(this, Object(l['a'])(e).apply(this, arguments))
          )
        }
        return (
          Object(p['a'])(e, t),
          Object(c['a'])(e, [
            {
              key: '$storageMixinGetSignedURL',
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t(e, n) {
                    return regeneratorRuntime.wrap(function(t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), me({ bucket: e, key: n })
                          case 2:
                            return t.abrupt('return', t.sent)
                          case 3:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  }),
                )
                function e(e, n) {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
          ]),
          e
        )
      })(a['default'])
    be = Object(d['a'])([fe['Mixin']], be)
    var ge = be,
      ve = (function(t) {
        function e() {
          var t
          return (
            Object(o['a'])(this, e),
            (t = Object(u['a'])(
              this,
              Object(l['a'])(e).apply(this, arguments),
            )),
            (t.name = 'PostsListItem'),
            (t.content = ''),
            (t.count = 0),
            (t.imageSource = ''),
            t
          )
        }
        return (
          Object(p['a'])(e, t),
          Object(c['a'])(e, [
            {
              key: 'mounted',
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.getLikesCount()
                            case 2:
                              ;(this.count = t.sent),
                                this.trimPostContentLength(),
                                this.getImageURL()
                            case 5:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                    )
                  }),
                )
                function e() {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: 'getImageURL',
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                this.$storageMixinGetSignedURL(
                                  'gamebible',
                                  this.post.post_image_bucket_key,
                                )
                              )
                            case 2:
                              this.imageSource = t.sent
                            case 3:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                    )
                  }),
                )
                function e() {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: 'onClickPost',
              value: function() {
                this.$router.push('/view/'.concat(this.post.p_uid), this.post)
              },
            },
            {
              key: 'trimPostContentLength',
              value: function() {
                var t = this.postLength
                if (t > 1e3)
                  return (
                    (this.content += ''.concat(
                      this.post.post_content.substring(0, 350),
                      '...',
                    )),
                    this.content
                  )
              },
            },
            {
              key: 'getLikesCount',
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2), ae({ post_uid: this.post.p_uid })
                              )
                            case 2:
                              return t.abrupt('return', t.sent)
                            case 3:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                    )
                  }),
                )
                function e() {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: 'onClickLikePost',
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t() {
                    var e,
                      n,
                      r,
                      a,
                      s = this
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (this.loggedInUser.uid) {
                                t.next = 2
                                break
                              }
                              return t.abrupt(
                                'return',
                                Object(w['Message'])({
                                  message:
                                    'You need to be logged in to like this post!',
                                  type: 'error',
                                  duration: 5e3,
                                }),
                              )
                            case 2:
                              if (de['has'](this.post, 'likes')) {
                                t.next = 5
                                break
                              }
                              return (
                                (t.next = 5),
                                ue.CREATE_LIKES({ post_uid: this.post.p_uid })
                              )
                            case 5:
                              if (0 !== this.post.likes.length) {
                                t.next = 10
                                break
                              }
                              return (
                                (t.next = 8),
                                this.postLikeAction('like', {
                                  post_uid: this.post.p_uid,
                                })
                              )
                            case 8:
                              t.next = 28
                              break
                            case 10:
                              if (!(this.post.likes.length > 0)) {
                                t.next = 28
                                break
                              }
                              if (
                                ((e = this.post.likes.every(function(t) {
                                  return t.user_uid !== s.loggedInUser.uid
                                })),
                                (n = this.post.likes.filter(function(t) {
                                  return (
                                    t.user_uid === s.loggedInUser.uid &&
                                    t.post_liked
                                  )
                                })),
                                (r = this.post.likes.filter(function(t) {
                                  return (
                                    t.user_uid === s.loggedInUser.uid &&
                                    !t.post_liked
                                  )
                                })),
                                !e)
                              ) {
                                t.next = 20
                                break
                              }
                              return (
                                (a = { post_uid: this.post.p_uid }),
                                (t.next = 18),
                                this.postLikeAction('like', a)
                              )
                            case 18:
                              t.next = 28
                              break
                            case 20:
                              if (!(n.length > 0)) {
                                t.next = 25
                                break
                              }
                              return (
                                (t.next = 23),
                                this.postLikeAction('unlike', n[0])
                              )
                            case 23:
                              t.next = 28
                              break
                            case 25:
                              if (!(r.length > 0)) {
                                t.next = 28
                                break
                              }
                              return (
                                (t.next = 28),
                                this.postLikeAction('relike', r[0])
                              )
                            case 28:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                    )
                  }),
                )
                function e() {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: 'postLikeAction',
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t(e, n) {
                    var r, a, s, i, o, c, u
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((a = n.l_uid),
                                (s = n.post_liked),
                                (i = n.post_uid),
                                (o = { uid: a, post_liked: s }),
                                'like' !== e)
                              ) {
                                t.next = 9
                                break
                              }
                              return (
                                (c = {
                                  user_uid: this.loggedInUser.uid,
                                  post_uid: i,
                                }),
                                (t.next = 6),
                                ee(c)
                              )
                            case 6:
                              ;(r = t.sent), (t.next = 19)
                              break
                            case 9:
                              if ('unlike' !== e) {
                                t.next = 15
                                break
                              }
                              return (t.next = 12), ne(o)
                            case 12:
                              ;(r = t.sent), (t.next = 19)
                              break
                            case 15:
                              if ('relike' !== e) {
                                t.next = 19
                                break
                              }
                              return (t.next = 18), re(o)
                            case 18:
                              r = t.sent
                            case 19:
                              return (
                                (u = {}),
                                (u[this.post.p_uid] = r),
                                (t.next = 23),
                                ue.UPDATE_POSTS(u)
                              )
                            case 23:
                              return (t.next = 25), this.getLikesCount()
                            case 25:
                              this.count = t.sent
                            case 26:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                    )
                  }),
                )
                function e(e, n) {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: 'loggedInUser',
              get: function() {
                return bt.GET_USER
              },
            },
            {
              key: 'postLength',
              get: function() {
                return this.post.post_content.length
              },
            },
            {
              key: 'formatPostCreatedDate',
              get: function() {
                return pe()(this.post.post_created_at).format('MMMM DD, YYYY')
              },
            },
          ]),
          e
        )
      })(Object(fe['Mixins'])(ge))
    Object(d['a'])([Object(gt['b'])()], ve.prototype, 'post', void 0),
      (ve = Object(d['a'])([gt['a']], ve))
    var ke = ve,
      je = ke,
      _e = (n('bb8d'), n('b0af')),
      we = n('99d9'),
      ye = n('a523'),
      Oe = n('0fd9'),
      xe = Object(_t['a'])(je, Xt, te, !1, null, null, null),
      Ce = xe.exports
    yt()(xe, {
      VBtn: St['a'],
      VCard: _e['a'],
      VCardSubtitle: we['b'],
      VCardText: we['c'],
      VCardTitle: we['d'],
      VContainer: ye['a'],
      VIcon: Tt['a'],
      VImg: Rt['a'],
      VRow: Oe['a'],
    })
    var Se = (function(t) {
      function e() {
        var t
        return (
          Object(o['a'])(this, e),
          (t = Object(u['a'])(this, Object(l['a'])(e).apply(this, arguments))),
          (t.name = 'PostsList'),
          (t.posts = []),
          t
        )
      }
      return (
        Object(p['a'])(e, t),
        Object(c['a'])(e, [
          {
            key: 'mounted',
            value: (function() {
              var t = Object(r['a'])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function(t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!(this.posts.length <= 0)) {
                              t.next = 5
                              break
                            }
                            return (t.next = 3), this.getPosts()
                          case 3:
                            t.next = 6
                            break
                          case 5:
                            this.posts = ue.GET_POSTS
                          case 6:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    this,
                  )
                }),
              )
              function e() {
                return t.apply(this, arguments)
              }
              return e
            })(),
          },
          {
            key: 'getPosts',
            value: (function() {
              var t = Object(r['a'])(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function(t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0), (t.next = 3), ue.GET_ALL_POSTS()
                            )
                          case 3:
                            ;(this.posts = ue.GET_POSTS), (t.next = 9)
                            break
                          case 6:
                            throw ((t.prev = 6),
                            (t.t0 = t['catch'](0)),
                            new Error(t.t0))
                          case 9:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    this,
                    [[0, 6]],
                  )
                }),
              )
              function e() {
                return t.apply(this, arguments)
              }
              return e
            })(),
          },
        ]),
        e
      )
    })(a['default'])
    Se = Object(d['a'])(
      [Object(gt['a'])({ components: { PostListItem: Ce } })],
      Se,
    )
    var Ee = Se,
      Te = Ee,
      Re = (n('bfb2'), Object(_t['a'])(Te, Wt, Qt, !1, null, null, null)),
      Ie = Re.exports
    yt()(Re, { VApp: Ot['a'] })
    var Ue = (function(t) {
      function e() {
        var t
        return (
          Object(o['a'])(this, e),
          (t = Object(u['a'])(this, Object(l['a'])(e).apply(this, arguments))),
          (t.name = 'Home'),
          t
        )
      }
      return Object(p['a'])(e, t), e
    })(a['default'])
    Ue = Object(d['a'])(
      [Object(gt['a'])({ components: { PostsList: Ie } })],
      Ue,
    )
    var Pe = Ue,
      Ae = Pe,
      Le = Object(_t['a'])(Ae, Jt, Ht, !1, null, null, null),
      Fe = Le.exports
    yt()(Le, { VApp: Ot['a'] })
    var Ve = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'v-app',
          { staticClass: 'login-container' },
          [
            n(
              'v-card',
              { staticClass: 'mx-auto login-card', attrs: { width: '400' } },
              [
                n('v-card-title', { staticClass: 'login-card__title' }, [
                  n('h1', [t._v('Login')]),
                ]),
                n(
                  'v-card-text',
                  [
                    n(
                      'v-form',
                      [
                        n('v-text-field', {
                          staticClass: 'login-card__username-input',
                          attrs: {
                            label: 'Username',
                            rules: t.usernameRules,
                            'prepend-icon': 'mdi-account-circle',
                          },
                          model: {
                            value: t.loginForm.username,
                            callback: function(e) {
                              t.$set(t.loginForm, 'username', e)
                            },
                            expression: 'loginForm.username',
                          },
                        }),
                        n('v-text-field', {
                          attrs: {
                            type: t.showPassword ? 'text' : 'password',
                            label: 'Password',
                            rules: t.passwordRules,
                            'prepend-icon': 'mdi-lock',
                            'append-icon': t.showPassword
                              ? 'mdi-eye'
                              : 'mdi-eye-off',
                          },
                          on: {
                            'click:append': function(e) {
                              t.showPassword = !t.showPassword
                            },
                          },
                          nativeOn: {
                            keyup: function(e) {
                              return !e.type.indexOf('key') &&
                                t._k(e.keyCode, 'enter', 13, e.key, 'Enter')
                                ? null
                                : t.onClickLogin(e)
                            },
                          },
                          model: {
                            value: t.loginForm.password,
                            callback: function(e) {
                              t.$set(t.loginForm, 'password', e)
                            },
                            expression: 'loginForm.password',
                          },
                        }),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
                n('v-divider'),
                n(
                  'v-card-actions',
                  [
                    n('router-link', { attrs: { to: '/register' } }, [
                      n('a', { staticClass: 'register-link' }, [
                        t._v("Don't have an account yet? Sign up here."),
                      ]),
                    ]),
                    n('v-spacer'),
                    n(
                      'v-btn',
                      {
                        attrs: { color: 'info' },
                        on: { click: t.onClickLogin },
                      },
                      [t._v('Login')],
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        )
      },
      Me = [],
      $e = n('1157'),
      De = n.n($e),
      Ne = (function(t) {
        function e() {
          return (
            Object(o['a'])(this, e),
            Object(u['a'])(this, Object(l['a'])(e).apply(this, arguments))
          )
        }
        return (
          Object(p['a'])(e, t),
          Object(c['a'])(e, [
            {
              key: '$successMixinMessage',
              value: function(t) {
                Object(w['Message'])({
                  message: t,
                  type: 'success',
                  duration: 3e3,
                  showClose: !0,
                  offset: 80,
                })
              },
            },
          ]),
          e
        )
      })(a['default'])
    Ne = Object(d['a'])([fe['Mixin']], Ne)
    var ze = Ne,
      Ge = (function(t) {
        function e() {
          var t
          return (
            Object(o['a'])(this, e),
            (t = Object(u['a'])(
              this,
              Object(l['a'])(e).apply(this, arguments),
            )),
            (t.name = 'Login'),
            (t.showPassword = !1),
            (t.usernameRules = [
              function(t) {
                return !!t || 'Username is required'
              },
            ]),
            (t.passwordRules = [
              function(t) {
                return !!t || 'Password is required'
              },
            ]),
            (t.loginForm = { username: '', password: '' }),
            t
          )
        }
        return (
          Object(p['a'])(e, t),
          Object(c['a'])(e, [
            {
              key: 'mounted',
              value: function() {
                De()('input:text:visible:first').focus()
              },
            },
            {
              key: 'onClickLogin',
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t() {
                    var e
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = {
                                  username: this.loginForm.username,
                                  password: this.loginForm.password,
                                }),
                                (t.prev = 1),
                                (t.next = 4),
                                bt.LOGIN_USER(e)
                              )
                            case 4:
                              this.onClickLoginSuccess(), (t.next = 10)
                              break
                            case 7:
                              throw ((t.prev = 7),
                              (t.t0 = t['catch'](1)),
                              new Error(t.t0))
                            case 10:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                      [[1, 7]],
                    )
                  }),
                )
                function e() {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: 'onClickLoginSuccess',
              value: function() {
                this.$successMixinMessage('Login Succeful!'),
                  this.$router.push('/')
              },
            },
            {
              key: 'loggedInUser',
              get: function() {
                return bt.GET_USER
              },
            },
          ]),
          e
        )
      })(Object(fe['Mixins'])(ze))
    Object(d['a'])([Object(gt['b'])()], Ge.prototype, 'toggleLogin', void 0),
      (Ge = Object(d['a'])([gt['a']], Ge))
    var qe = Ge,
      Be = qe,
      Ye = (n('206d'), n('ce7e')),
      Ke = n('4bd4'),
      Ze = n('8654'),
      Je = Object(_t['a'])(Be, Ve, Me, !1, null, null, null),
      He = Je.exports
    yt()(Je, {
      VApp: Ot['a'],
      VBtn: St['a'],
      VCard: _e['a'],
      VCardActions: we['a'],
      VCardText: we['c'],
      VCardTitle: we['d'],
      VDivider: Ye['a'],
      VForm: Ke['a'],
      VSpacer: Ft['a'],
      VTextField: Ze['a'],
    })
    var We = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'v-app',
          { staticClass: 'register-container' },
          [
            n(
              'v-card',
              {
                staticClass: 'mx-auto mt-5 register-card',
                attrs: { width: '400' },
              },
              [
                n('v-card-title', { staticClass: 'register-card__title' }, [
                  n('h1', [t._v('Create Your Account')]),
                ]),
                n(
                  'v-card-text',
                  [
                    n(
                      'v-form',
                      [
                        n('v-text-field', {
                          attrs: {
                            label: 'Name',
                            'prepend-icon': 'mdi-account-circle',
                          },
                          model: {
                            value: t.registrationForm.name,
                            callback: function(e) {
                              t.$set(t.registrationForm, 'name', e)
                            },
                            expression: 'registrationForm.name',
                          },
                        }),
                        n('v-text-field', {
                          attrs: {
                            label: 'Username',
                            rules: t.usernameRules,
                            'prepend-icon': 'mdi-account-circle',
                          },
                          model: {
                            value: t.registrationForm.username,
                            callback: function(e) {
                              t.$set(t.registrationForm, 'username', e)
                            },
                            expression: 'registrationForm.username',
                          },
                        }),
                        n('v-text-field', {
                          attrs: {
                            label: 'Email',
                            rules: t.emailRules,
                            'prepend-icon': 'mdi-account-circle',
                          },
                          model: {
                            value: t.registrationForm.email,
                            callback: function(e) {
                              t.$set(t.registrationForm, 'email', e)
                            },
                            expression: 'registrationForm.email',
                          },
                        }),
                        n('v-text-field', {
                          attrs: {
                            type: t.showPassword ? 'text' : 'password',
                            label: 'Password',
                            rules: t.passwordRules,
                            'prepend-icon': 'mdi-lock',
                            'append-icon': t.showPassword
                              ? 'mdi-eye'
                              : 'mdi-eye-off',
                          },
                          on: {
                            'click:append': function(e) {
                              t.showPassword = !t.showPassword
                            },
                          },
                          model: {
                            value: t.registrationForm.password,
                            callback: function(e) {
                              t.$set(t.registrationForm, 'password', e)
                            },
                            expression: 'registrationForm.password',
                          },
                        }),
                        n('v-text-field', {
                          attrs: {
                            type: t.showPassword ? 'text' : 'password',
                            rules: t.passwordConfirmRules,
                            label: 'Confirm Password',
                            'prepend-icon': 'mdi-lock',
                            'append-icon': t.showPassword
                              ? 'mdi-eye'
                              : 'mdi-eye-off',
                          },
                          on: {
                            'click:append': function(e) {
                              t.showPassword = !t.showPassword
                            },
                          },
                          nativeOn: {
                            keyup: function(e) {
                              return !e.type.indexOf('key') &&
                                t._k(e.keyCode, 'enter', 13, e.key, 'Enter')
                                ? null
                                : t.onClickRegister(e)
                            },
                          },
                          model: {
                            value: t.registrationForm.passwordConfirm,
                            callback: function(e) {
                              t.$set(t.registrationForm, 'passwordConfirm', e)
                            },
                            expression: 'registrationForm.passwordConfirm',
                          },
                        }),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
                n('v-divider'),
                n(
                  'v-card-actions',
                  [
                    n('router-link', { attrs: { to: '/login' } }, [
                      n('a', { staticClass: 'register-link' }, [
                        t._v('Already a member? Sign in here.'),
                      ]),
                    ]),
                    n('v-spacer'),
                    n(
                      'v-btn',
                      {
                        attrs: { color: 'success' },
                        on: { click: t.onClickRegister },
                      },
                      [t._v('Register')],
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        )
      },
      Qe = [],
      Xe =
        (n('4d63'),
        n('25f0'),
        RegExp(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        )),
      tn = RegExp(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
      ),
      en = RegExp(/^[A-Za-z]\w{7,14}$/),
      nn = RegExp(/^\w{0,100}$/),
      rn = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'transition',
          { staticClass: 'c-toasts', attrs: { name: 'toasts', tag: 'div' } },
          [
            t.toast.show
              ? n('Toast', {
                  attrs: { toast: t.toast },
                  on: { click: t.hideToast },
                })
              : t._e(),
          ],
          1,
        )
      },
      an = [],
      sn = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'div',
          { class: ['c-toasts__item', 'c-toasts__item--' + t.toast.type] },
          [
            n('v-icon', [t._v('mdi-alert')]),
            n('span', { staticClass: 'c-toasts__item-text' }, [
              t._v(t._s(t.toast.text)),
            ]),
          ],
          1,
        )
      },
      on = [],
      cn = (function(t) {
        function e() {
          return (
            Object(o['a'])(this, e),
            Object(u['a'])(this, Object(l['a'])(e).apply(this, arguments))
          )
        }
        return Object(p['a'])(e, t), e
      })(a['default'])
    Object(d['a'])([Object(gt['b'])()], cn.prototype, 'toast', void 0),
      (cn = Object(d['a'])([gt['a']], cn))
    var un = cn,
      ln = un,
      pn = (n('9370'), Object(_t['a'])(ln, sn, on, !1, null, null, null)),
      dn = pn.exports
    yt()(pn, { VIcon: Tt['a'] })
    var fn = (function(t) {
      function e() {
        var t
        return (
          Object(o['a'])(this, e),
          (t = Object(u['a'])(this, Object(l['a'])(e).apply(this, arguments))),
          (t.duration = 4e3),
          t
        )
      }
      return (
        Object(p['a'])(e, t),
        Object(c['a'])(e, [
          {
            key: 'addToast',
            value: function() {
              var t = this
              setTimeout(function() {
                t.removeToast()
              }, this.duration)
            },
          },
          {
            key: 'removeToast',
            value: function() {
              ;(this.toast.show = !1), clearInterval()
            },
          },
          {
            key: 'hideToast',
            value: function() {
              this.removeToast()
            },
          },
          {
            key: 'mounted',
            value: function() {
              var t = this
              setInterval(function() {
                t.addToast()
              }, this.duration)
            },
          },
        ]),
        e
      )
    })(a['default'])
    Object(d['a'])([Object(gt['b'])()], fn.prototype, 'toast', void 0),
      (fn = Object(d['a'])(
        [Object(gt['a'])({ components: { Toast: dn } })],
        fn,
      ))
    var hn = fn,
      mn = hn,
      bn = (n('58cd'), Object(_t['a'])(mn, rn, an, !1, null, null, null)),
      gn = bn.exports,
      vn = (function(t) {
        function e() {
          var t
          return (
            Object(o['a'])(this, e),
            (t = Object(u['a'])(
              this,
              Object(l['a'])(e).apply(this, arguments),
            )),
            (t.name = 'Register'),
            (t.showPassword = !1),
            (t.show = !1),
            (t.emailRules = [
              function(t) {
                return !!t || 'E-mail is required'
              },
              function(t) {
                return Xe.test(t) || 'E-mail must be valid'
              },
            ]),
            (t.usernameRules = [
              function(t) {
                return !!t || 'Username is required'
              },
              function(t) {
                return (
                  en.test(t) ||
                  'Username must be between 7 to 14 characters which contain only characters, numeric digits, underscore and first character must be a letter'
                )
              },
            ]),
            (t.passwordRules = [
              function(t) {
                return !!t || 'Password is required'
              },
              function(t) {
                return (
                  tn.test(t) ||
                  'Password must contain a minimum of eight characters, at least one uppercase letter, at least one lowercase letter, one number and one special character'
                )
              },
            ]),
            (t.passwordConfirmRules = [
              function(t) {
                return !!t || 'Confirm password is required'
              },
              function(e) {
                return (
                  e === t.registrationForm.password || "Passwords don't match"
                )
              },
            ]),
            (t.registrationForm = {
              name: '',
              username: '',
              email: '',
              password: '',
              passwordConfirm: '',
            }),
            (t.loading = { error: !1, registering: !1 }),
            t
          )
        }
        return (
          Object(p['a'])(e, t),
          Object(c['a'])(e, [
            {
              key: 'onClickRegister',
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t() {
                    var e
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = {
                                  name: this.registrationForm.name,
                                  username: this.registrationForm.username,
                                  email: this.registrationForm.email,
                                  password: this.registrationForm.password,
                                  passwordConfirm: this.registrationForm
                                    .passwordConfirm,
                                }),
                                (t.prev = 1),
                                (t.next = 4),
                                bt.REGISTER_USER(e)
                              )
                            case 4:
                              this.onRegistrationSuccess(), (t.next = 10)
                              break
                            case 7:
                              throw ((t.prev = 7),
                              (t.t0 = t['catch'](1)),
                              new Error(t.t0))
                            case 10:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                      [[1, 7]],
                    )
                  }),
                )
                function e() {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: 'onRegistrationSuccess',
              value: function() {
                this.$successMixinMessage('Registration Succeful!'),
                  this.$router.push('/login')
              },
            },
            {
              key: 'onClickLogin',
              value: function() {
                this.$router.push('login')
              },
            },
          ]),
          e
        )
      })(Object(fe['Mixins'])(ze))
    Object(d['a'])([Object(gt['b'])()], vn.prototype, 'toggleRegister', void 0),
      (vn = Object(d['a'])(
        [Object(gt['a'])({ components: { ToastManager: gn } })],
        vn,
      ))
    var kn = vn,
      jn = kn,
      _n = (n('a894'), Object(_t['a'])(jn, We, Qe, !1, null, null, null)),
      wn = _n.exports
    yt()(_n, {
      VApp: Ot['a'],
      VBtn: St['a'],
      VCard: _e['a'],
      VCardActions: we['a'],
      VCardText: we['c'],
      VCardTitle: we['d'],
      VDivider: Ye['a'],
      VForm: Ke['a'],
      VSpacer: Ft['a'],
      VTextField: Ze['a'],
    })
    var yn = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'div',
          [
            n(
              'v-card',
              {
                staticClass: 'mx-auto create-post-card',
                attrs: { width: '800' },
              },
              [
                n('v-card-title', { staticClass: 'create-post-card__title' }, [
                  n('h1', [t._v('Create Post')]),
                ]),
                n(
                  'v-card-text',
                  [
                    n(
                      'v-form',
                      { attrs: { enctype: 'multipart/form-data' } },
                      [
                        n('v-text-field', {
                          attrs: { counter: 100, label: 'Title', required: '' },
                          model: {
                            value: t.postCreateForm.postTitle,
                            callback: function(e) {
                              t.$set(t.postCreateForm, 'postTitle', e)
                            },
                            expression: 'postCreateForm.postTitle',
                          },
                        }),
                        n('v-text-field', {
                          attrs: {
                            counter: 250,
                            label: 'Sub Title',
                            required: '',
                          },
                          model: {
                            value: t.postCreateForm.postSubTitle,
                            callback: function(e) {
                              t.$set(t.postCreateForm, 'postSubTitle', e)
                            },
                            expression: 'postCreateForm.postSubTitle',
                          },
                        }),
                        n('v-textarea', {
                          attrs: {
                            counter: 1e4,
                            label: 'Content',
                            required: '',
                          },
                          model: {
                            value: t.postCreateForm.postContent,
                            callback: function(e) {
                              t.$set(t.postCreateForm, 'postContent', e)
                            },
                            expression: 'postCreateForm.postContent',
                          },
                        }),
                        n('ImageUploader', {
                          on: { onImageUploaded: t.onImageUploaded },
                        }),
                        n(
                          'v-card-actions',
                          { staticClass: 'create-post-card__buttons' },
                          [
                            n(
                              'v-btn',
                              {
                                attrs: { color: 'danger' },
                                on: { click: t.onClickCancel },
                              },
                              [t._v('Cancel')],
                            ),
                            n('v-spacer'),
                            n(
                              'v-btn',
                              {
                                attrs: { color: 'success' },
                                on: { click: t.onClickCreatePost },
                              },
                              [t._v('Create')],
                            ),
                          ],
                          1,
                        ),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
          1,
        )
      },
      On = [],
      xn = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n('div', [
          t.isInitial || t.isSaving
            ? n(
                'form',
                { attrs: { enctype: 'multipart/form-data', novalidate: '' } },
                [
                  n('h1', [t._v('Upload images')]),
                  n('div', { staticClass: 'dropbox' }, [
                    n('input', {
                      staticClass: 'input-file',
                      attrs: {
                        type: 'file',
                        disabled: t.isSaving,
                        accept: 'image/*',
                      },
                      on: { change: t.onImageSelected },
                    }),
                    t.isInitial
                      ? n('p', [
                          t._v(' Drag your image here to begin'),
                          n('br'),
                          t._v(' or click to browse '),
                        ])
                      : t._e(),
                    t.isSaving
                      ? n('p', [
                          t._v('Uploading ' + t._s(t.fileCount) + ' files...'),
                        ])
                      : t._e(),
                  ]),
                ],
              )
            : t._e(),
        ])
      },
      Cn = [],
      Sn = (function(t) {
        function e() {
          var t
          return (
            Object(o['a'])(this, e),
            (t = Object(u['a'])(
              this,
              Object(l['a'])(e).apply(this, arguments),
            )),
            (t.uploadedFiles = []),
            (t.uploadError = null),
            (t.currentStatus = 0),
            (t.filesLength = 0),
            (t.uploadFieldName = 'post_photo'),
            (t.selectedImage = ''),
            (t.selectedImageName = ''),
            (t.loading = !1),
            (t.STATUS_INITIAL = 0),
            (t.STATUS_SAVING = 1),
            (t.STATUS_SUCCESS = 2),
            (t.STATUS_FAILED = 3),
            t
          )
        }
        return (
          Object(p['a'])(e, t),
          Object(c['a'])(e, [
            {
              key: 'mounted',
              value: function() {
                this.reset()
              },
            },
            {
              key: 'onImageSelected',
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t(e) {
                    var n, r, a
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (n = e.target),
                                (this.selectedImage = n.files[0]),
                                (this.selectedImageName = n.files[0].name),
                                (this.filesLength = n.files.length),
                                (r = new FormData()),
                                (a = ''
                                  .concat(this.loggedInUser.uid, '-')
                                  .concat(Date.now(), '-')
                                  .concat(this.selectedImageName)),
                                r.append(
                                  this.uploadFieldName,
                                  this.selectedImage,
                                  a,
                                ),
                                r.append(
                                  this.loggedInUser.name,
                                  this.loggedInUser.uid,
                                ),
                                (t.next = 10),
                                this.onImageUpload(r)
                              )
                            case 10:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                    )
                  }),
                )
                function e(e) {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: 'onImageUpload',
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t(e) {
                    var n
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (this.currentStatus = this.STATUS_SAVING),
                                (t.prev = 1),
                                (t.next = 4),
                                he(e)
                              )
                            case 4:
                              ;(n = t.sent),
                                n &&
                                  (this.$emit('onImageUploaded', n),
                                  (this.currentStatus = this.STATUS_SUCCESS)),
                                (t.next = 13)
                              break
                            case 8:
                              throw ((t.prev = 8),
                              (t.t0 = t['catch'](1)),
                              (this.uploadError = t.t0.response),
                              (this.currentStatus = this.STATUS_FAILED),
                              new Error(t.t0))
                            case 13:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                      [[1, 8]],
                    )
                  }),
                )
                function e(e) {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: 'reset',
              value: function() {
                ;(this.currentStatus = this.STATUS_INITIAL),
                  (this.uploadedFiles = []),
                  (this.uploadError = null)
              },
            },
            {
              key: 'loggedInUser',
              get: function() {
                return bt.GET_USER
              },
            },
            {
              key: 'fileCount',
              get: function() {
                return this.filesLength
              },
            },
            {
              key: 'isInitial',
              get: function() {
                return this.currentStatus === this.STATUS_INITIAL
              },
            },
            {
              key: 'isSaving',
              get: function() {
                return this.currentStatus === this.STATUS_SAVING
              },
            },
            {
              key: 'isSuccess',
              get: function() {
                return this.currentStatus === this.STATUS_SUCCESS
              },
            },
            {
              key: 'isFailed',
              get: function() {
                return this.currentStatus === this.STATUS_FAILED
              },
            },
          ]),
          e
        )
      })(a['default'])
    Sn = Object(d['a'])([gt['a']], Sn)
    var En = Sn,
      Tn = En,
      Rn = (n('f593'), Object(_t['a'])(Tn, xn, Cn, !1, null, null, null)),
      In = Rn.exports,
      Un = (function(t) {
        function e() {
          var t
          return (
            Object(o['a'])(this, e),
            (t = Object(u['a'])(
              this,
              Object(l['a'])(e).apply(this, arguments),
            )),
            (t.postCreateForm = {
              postTitle: '',
              postSubTitle: '',
              postContent: '',
            }),
            (t.postTitleRules = [
              function(t) {
                return !!t || 'Title is required'
              },
              function(t) {
                return (
                  nn.test(t) ||
                  'Title Length needs to be between 0 to 100 characters.'
                )
              },
            ]),
            (t.post_image_bucket_key = ''),
            t
          )
        }
        return (
          Object(p['a'])(e, t),
          Object(c['a'])(e, [
            {
              key: 'onImageUploaded',
              value: function(t) {
                t && (this.post_image_bucket_key = t)
              },
            },
            {
              key: 'onClickCreatePost',
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t() {
                    var e
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = {
                                  title: this.postCreateForm.postTitle,
                                  sub_title: this.postCreateForm.postSubTitle,
                                  content: this.postCreateForm.postContent,
                                  user_uid: this.loggedInUser.uid,
                                  post_image_bucket_key: this
                                    .post_image_bucket_key,
                                }),
                                (t.prev = 1),
                                (t.next = 4),
                                ue.CREATE_POST(e)
                              )
                            case 4:
                              this.onClickCreatePostSuccess(), (t.next = 10)
                              break
                            case 7:
                              throw ((t.prev = 7),
                              (t.t0 = t['catch'](1)),
                              new Error(t.t0))
                            case 10:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                      [[1, 7]],
                    )
                  }),
                )
                function e() {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: 'onClickCreatePostSuccess',
              value: function() {
                this.$successMixinMessage('Post Created Succefully!'),
                  this.$router.push('/')
              },
            },
            {
              key: 'onClickCancel',
              value: function() {
                this.$router.push('/')
              },
            },
            {
              key: 'loggedInUser',
              get: function() {
                return bt.GET_USER
              },
            },
          ]),
          e
        )
      })(Object(fe['Mixins'])(ze))
    Un = Object(d['a'])(
      [Object(gt['a'])({ components: { ImageUploader: In } })],
      Un,
    )
    var Pn = Un,
      An = Pn,
      Ln = (n('d3d5'), n('a844')),
      Fn = Object(_t['a'])(An, yn, On, !1, null, null, null),
      Vn = Fn.exports
    yt()(Fn, {
      VBtn: St['a'],
      VCard: _e['a'],
      VCardActions: we['a'],
      VCardText: we['c'],
      VCardTitle: we['d'],
      VForm: Ke['a'],
      VSpacer: Ft['a'],
      VTextField: Ze['a'],
      VTextarea: Ln['a'],
    })
    var Mn = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'v-card',
          {
            staticClass: 'mx-auto mt-5 view-post',
            attrs: { 'max-width': '50%', outlined: '' },
          },
          [
            n(
              'v-container',
              { staticClass: 'view-post__content' },
              [
                n('v-card-title', { staticClass: 'view-post__title' }, [
                  n('h1', [t._v(' ' + t._s(t.post.title) + ' ')]),
                ]),
                n('v-card-subtitle', { staticClass: 'view-post__subtitle' }, [
                  n('h3', [t._v(' ' + t._s(t.post.sub_title) + ' ')]),
                ]),
                n('div', { staticClass: 'view-post__details-container' }, [
                  n(
                    'div',
                    { staticClass: 'view-post__details-container--created-by' },
                    [t._v(' ' + t._s(t.postAuthor) + ' ')],
                  ),
                  n(
                    'div',
                    {
                      staticClass: 'view-post__details-container--created-date',
                    },
                    [t._v(' ' + t._s(t.postDate) + ' ')],
                  ),
                ]),
                n(
                  'div',
                  { staticClass: 'view-post__img-container' },
                  [
                    n('v-img', {
                      staticClass: 'pa-2 posts-list-item__img',
                      attrs: {
                        id: 'photo',
                        src: t.imageSource,
                        'aspect-ratio': '2.4',
                        width: '400',
                        height: '400',
                        contain: '',
                      },
                    }),
                  ],
                  1,
                ),
                n(
                  'div',
                  { staticClass: 'view-post__description' },
                  t._l(t.paragraphs, function(e) {
                    return n('div', { key: e }, [
                      n('div', { staticClass: 'view-post__paragraph' }, [
                        t._v(' ' + t._s(e) + ' '),
                      ]),
                    ])
                  }),
                  0,
                ),
              ],
              1,
            ),
          ],
          1,
        )
      },
      $n = [],
      Dn = (n('caad'), n('2532'), n('2909')),
      Nn = (function(t) {
        function e() {
          var t
          return (
            Object(o['a'])(this, e),
            (t = Object(u['a'])(
              this,
              Object(l['a'])(e).apply(this, arguments),
            )),
            (t.post = {}),
            (t.postUID = ''),
            (t.postDate = ''),
            (t.postAuthor = ''),
            (t.imageSource = ''),
            (t.paragraphs = []),
            t
          )
        }
        return (
          Object(p['a'])(e, t),
          Object(c['a'])(e, [
            {
              key: 'mounted',
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (this.postUID = this.$route.params.id),
                                (t.next = 3),
                                this.getPostData(this.postUID)
                              )
                            case 3:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                    )
                  }),
                )
                function e() {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: 'getPostData',
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t(e) {
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), oe({ uid: e })
                            case 2:
                              return (
                                (this.post = t.sent),
                                this.formatContentParagraphs(this.post),
                                this.formatPostCreatedDate(
                                  this.post.created_at,
                                ),
                                (this.postAuthor = this.post.user.name),
                                (t.next = 8),
                                this.getImageURL()
                              )
                            case 8:
                              this.imageSource = t.sent
                            case 9:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                    )
                  }),
                )
                function e(e) {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: 'getImageURL',
              value: (function() {
                var t = Object(r['a'])(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(
                      function(t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                this.$storageMixinGetSignedURL(
                                  'gamebible',
                                  this.post.post_image_bucket_key,
                                )
                              )
                            case 2:
                              return t.abrupt('return', t.sent)
                            case 3:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                    )
                  }),
                )
                function e() {
                  return t.apply(this, arguments)
                }
                return e
              })(),
            },
            {
              key: 'formatPostCreatedDate',
              value: function(t) {
                this.postDate = pe()(t).format('MMMM DD, YYYY')
              },
            },
            {
              key: 'formatContentParagraphs',
              value: function(t) {
                for (
                  var e = this.post.content.length,
                    n = 0,
                    r = 500,
                    a = r,
                    s = Object(Dn['a'])(t.content),
                    i = 0;
                  i < s.length;
                  i++
                ) {
                  if (i >= a && s[i].includes('.')) {
                    var o = t.content.substring(n, i + 1)
                    this.paragraphs.push(o), (n = i + 1), (a += r)
                  }
                  if (e - n <= 500) {
                    var c = t.content.substring(n, e)
                    this.paragraphs.push(c)
                    break
                  }
                }
              },
            },
          ]),
          e
        )
      })(Object(fe['Mixins'])(ge))
    Nn = Object(d['a'])([gt['a']], Nn)
    var zn = Nn,
      Gn = zn,
      qn = (n('94c5'), Object(_t['a'])(Gn, Mn, $n, !1, null, null, null)),
      Bn = qn.exports
    yt()(qn, {
      VCard: _e['a'],
      VCardSubtitle: we['b'],
      VCardTitle: we['d'],
      VContainer: ye['a'],
      VImg: Rt['a'],
    })
    var Yn = [
        { path: '/', name: 'Home', component: Fe },
        { path: '/login', name: 'login', component: He },
        { path: '/register', name: 'register', component: wn },
        {
          path: '/create',
          name: 'create-post',
          component: Vn,
          meta: { requiresAuth: !0 },
        },
        { path: '/view/:id', name: 'view-post', component: Bn },
      ],
      Kn = (function(t) {
        function e() {
          return (
            Object(o['a'])(this, e),
            Object(u['a'])(
              this,
              Object(l['a'])(e).call(this, { mode: 'history', routes: Yn }),
            )
          )
        }
        return (
          Object(p['a'])(e, t),
          Object(c['a'])(e, [
            {
              key: 'isAuthenticated',
              value: function() {
                return !!bt.GET_USER.token
              },
            },
            {
              key: 'initialize',
              value: function() {
                return this.initBeforeEach(), this
              },
            },
            {
              key: 'initBeforeEach',
              value: function() {
                this.beforeEach(function(t, e, n) {
                  return (
                    t.matched.some(function(t) {
                      return t.meta.requiresAuth
                    }) &&
                      (bt.GET_USER.token
                        ? n()
                        : n({
                            path: '/login',
                            params: { nextUrl: t.fullPath },
                          })),
                    n()
                  )
                })
              },
            },
            {
              key: 'push',
              value: function(t) {
                try {
                  return Object(Kt['a'])(
                    Object(l['a'])(e.prototype),
                    'push',
                    this,
                  ).call(this, t)
                } catch (n) {
                  throw n
                }
              },
            },
            {
              key: 'replace',
              value: function(t) {
                try {
                  return Object(Kt['a'])(
                    Object(l['a'])(e.prototype),
                    'replace',
                    this,
                  ).call(this, t)
                } catch (n) {
                  throw n
                }
              },
            },
          ]),
          e
        )
      })(Zt['a']),
      Zn = n('f309')
    a['default'].use(Zn['a'])
    var Jn = new Zn['a']({}),
      Hn = n('ce5b'),
      Wn = n.n(Hn),
      Qn = (n('bf40'), n('f87c')),
      Xn = n('8055'),
      tr = n.n(Xn)
    n('0fae')
    function er() {
      return nr.apply(this, arguments)
    }
    function nr() {
      return (
        (nr = Object(r['a'])(
          regeneratorRuntime.mark(function t() {
            var e, n, r
            return regeneratorRuntime.wrap(function(t) {
              while (1)
                switch ((t.prev = t.next)) {
                  case 0:
                    ;(e = new Kn().initialize()),
                      (n = 'https://game-bible.herokuapp.com'),
                      (r = tr()(n)),
                      (a['default'].config.productionTip = !1),
                      a['default'].use(Qn['a'], r),
                      a['default'].use(y.a),
                      a['default'].use(Wn.a),
                      a['default'].use(Kn),
                      a['default'].use(L),
                      new a['default']({
                        sockets: {
                          connect: function() {
                            this.$socket.client.emit('connected', {
                              title: 'Client Connected',
                            }),
                              this.$socket.client.on('connected', function(t) {
                                return console.log(t)
                              })
                          },
                        },
                        router: e,
                        store: v,
                        vuetify: Jn,
                        render: function(t) {
                          return t($t)
                        },
                      }).$mount('#app')
                  case 10:
                  case 'end':
                    return t.stop()
                }
            }, t)
          }),
        )),
        nr.apply(this, arguments)
      )
    }
    er()
  },
  d3d5: function(t, e, n) {
    'use strict'
    var r = n('1a3b'),
      a = n.n(r)
    a.a
  },
  dbaa: function(t, e, n) {},
  eb6a: function(t, e, n) {},
  f593: function(t, e, n) {
    'use strict'
    var r = n('f83f'),
      a = n.n(r)
    a.a
  },
  f83f: function(t, e, n) {},
  f8c2: function(t, e, n) {},
})
//# sourceMappingURL=app.2c3b321e.js.map
