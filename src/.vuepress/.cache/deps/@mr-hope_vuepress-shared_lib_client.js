import {
  computed,
  defineComponent,
  getCurrentInstance,
  h
} from "./chunk-D77L4QNK.js";
import {
  camelize,
  capitalize
} from "./chunk-TOG645IN.js";
import {
  __spreadProps,
  __spreadValues,
  init_define_ARTICLE_INFO_LOCALES,
  init_define_BACK_TO_TOP_LOCALES,
  init_define_CODE_COPY_LOCALES,
  init_define_CODE_COPY_OPIONS,
  init_define_CODE_DEMO_OPTIONS,
  init_define_COMMENT_OPTIONS,
  init_define_DOCSEARCH_OPTIONS,
  init_define_EXTERNAL_LINK_ICON_LOCALES,
  init_define_MERMAID_OPTIONS,
  init_define_PAGINATION_LOCALES,
  init_define_PHOTO_SWIPE_LOCALES,
  init_define_PHOTO_SWIPE_OPTIONS,
  init_define_READING_TIME_LOCALES,
  init_define_REVEAL_CONFIG,
  init_define_TOC_LOCALES,
  init_define_WALINE_LOCALES
} from "./chunk-Y7BHZONV.js";

// dep:@mr-hope_vuepress-shared_lib_client
init_define_ARTICLE_INFO_LOCALES();
init_define_BACK_TO_TOP_LOCALES();
init_define_CODE_COPY_LOCALES();
init_define_CODE_COPY_OPIONS();
init_define_CODE_DEMO_OPTIONS();
init_define_COMMENT_OPTIONS();
init_define_MERMAID_OPTIONS();
init_define_PAGINATION_LOCALES();
init_define_PHOTO_SWIPE_LOCALES();
init_define_PHOTO_SWIPE_OPTIONS();
init_define_READING_TIME_LOCALES();
init_define_REVEAL_CONFIG();
init_define_TOC_LOCALES();
init_define_WALINE_LOCALES();
init_define_DOCSEARCH_OPTIONS();
init_define_EXTERNAL_LINK_ICON_LOCALES();

// node_modules/@mr-hope/vuepress-shared/lib/client/index.js
init_define_ARTICLE_INFO_LOCALES();
init_define_BACK_TO_TOP_LOCALES();
init_define_CODE_COPY_LOCALES();
init_define_CODE_COPY_OPIONS();
init_define_CODE_DEMO_OPTIONS();
init_define_COMMENT_OPTIONS();
init_define_MERMAID_OPTIONS();
init_define_PAGINATION_LOCALES();
init_define_PHOTO_SWIPE_LOCALES();
init_define_PHOTO_SWIPE_OPTIONS();
init_define_READING_TIME_LOCALES();
init_define_REVEAL_CONFIG();
init_define_TOC_LOCALES();
init_define_WALINE_LOCALES();
init_define_DOCSEARCH_OPTIONS();
init_define_EXTERNAL_LINK_ICON_LOCALES();
import { useRouteLocale as o, usePageData as a } from "@vuepress/client";
import "/Users/wangzhi4/Documents/github/wiki/node_modules/@mr-hope/vuepress-shared/lib/client/styles/message.scss";
var u;
var c = { exports: {} };
var f = c.exports = function() {
  var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", o2 = "hour", a2 = "day", u2 = "week", c2 = "month", f2 = "quarter", d2 = "year", l2 = "date", h3 = "Invalid Date", m2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, p2 = function(t2, e2, n2) {
    var r2 = String(t2);
    return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
  }, y2 = { s: p2, z: function(t2) {
    var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
    return (e2 <= 0 ? "+" : "-") + p2(r2, 2, "0") + ":" + p2(i2, 2, "0");
  }, m: function t2(e2, n2) {
    if (e2.date() < n2.date())
      return -t2(n2, e2);
    var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c2), s2 = n2 - i2 < 0, o3 = e2.clone().add(r2 + (s2 ? -1 : 1), c2);
    return +(-(r2 + (n2 - i2) / (s2 ? i2 - o3 : o3 - i2)) || 0);
  }, a: function(t2) {
    return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
  }, p: function(t2) {
    return { M: c2, y: d2, w: u2, d: a2, D: l2, h: o2, m: s, s: i, ms: r, Q: f2 }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
  }, u: function(t2) {
    return t2 === void 0;
  } }, g2 = "en", M2 = {};
  M2[g2] = $2;
  var D2 = function(t2) {
    return t2 instanceof w2;
  }, _2 = function t2(e2, n2, r2) {
    var i2;
    if (!e2)
      return g2;
    if (typeof e2 == "string") {
      var s2 = e2.toLowerCase();
      M2[s2] && (i2 = s2), n2 && (M2[s2] = n2, i2 = s2);
      var o3 = e2.split("-");
      if (!i2 && o3.length > 1)
        return t2(o3[0]);
    } else {
      var a3 = e2.name;
      M2[a3] = e2, i2 = a3;
    }
    return !r2 && i2 && (g2 = i2), i2 || !r2 && g2;
  }, Y2 = function(t2, e2) {
    if (D2(t2))
      return t2.clone();
    var n2 = typeof e2 == "object" ? e2 : {};
    return n2.date = t2, n2.args = arguments, new w2(n2);
  }, S2 = y2;
  S2.l = _2, S2.i = D2, S2.w = function(t2, e2) {
    return Y2(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
  };
  var w2 = function() {
    function $3(t2) {
      this.$L = _2(t2.locale, null, true), this.parse(t2);
    }
    var p3 = $3.prototype;
    return p3.parse = function(t2) {
      this.$d = function(t3) {
        var e2 = t3.date, n2 = t3.utc;
        if (e2 === null)
          return new Date(NaN);
        if (S2.u(e2))
          return new Date();
        if (e2 instanceof Date)
          return new Date(e2);
        if (typeof e2 == "string" && !/Z$/i.test(e2)) {
          var r2 = e2.match(m2);
          if (r2) {
            var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
            return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
          }
        }
        return new Date(e2);
      }(t2), this.$x = t2.x || {}, this.init();
    }, p3.init = function() {
      var t2 = this.$d;
      this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
    }, p3.$utils = function() {
      return S2;
    }, p3.isValid = function() {
      return !(this.$d.toString() === h3);
    }, p3.isSame = function(t2, e2) {
      var n2 = Y2(t2);
      return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
    }, p3.isAfter = function(t2, e2) {
      return Y2(t2) < this.startOf(e2);
    }, p3.isBefore = function(t2, e2) {
      return this.endOf(e2) < Y2(t2);
    }, p3.$g = function(t2, e2, n2) {
      return S2.u(t2) ? this[e2] : this.set(n2, t2);
    }, p3.unix = function() {
      return Math.floor(this.valueOf() / 1e3);
    }, p3.valueOf = function() {
      return this.$d.getTime();
    }, p3.startOf = function(t2, e2) {
      var n2 = this, r2 = !!S2.u(e2) || e2, f3 = S2.p(t2), h4 = function(t3, e3) {
        var i2 = S2.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
        return r2 ? i2 : i2.endOf(a2);
      }, m3 = function(t3, e3) {
        return S2.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
      }, v3 = this.$W, $4 = this.$M, p4 = this.$D, y3 = "set" + (this.$u ? "UTC" : "");
      switch (f3) {
        case d2:
          return r2 ? h4(1, 0) : h4(31, 11);
        case c2:
          return r2 ? h4(1, $4) : h4(0, $4 + 1);
        case u2:
          var g3 = this.$locale().weekStart || 0, M3 = (v3 < g3 ? v3 + 7 : v3) - g3;
          return h4(r2 ? p4 - M3 : p4 + (6 - M3), $4);
        case a2:
        case l2:
          return m3(y3 + "Hours", 0);
        case o2:
          return m3(y3 + "Minutes", 1);
        case s:
          return m3(y3 + "Seconds", 2);
        case i:
          return m3(y3 + "Milliseconds", 3);
        default:
          return this.clone();
      }
    }, p3.endOf = function(t2) {
      return this.startOf(t2, false);
    }, p3.$set = function(t2, e2) {
      var n2, u3 = S2.p(t2), f3 = "set" + (this.$u ? "UTC" : ""), h4 = (n2 = {}, n2[a2] = f3 + "Date", n2[l2] = f3 + "Date", n2[c2] = f3 + "Month", n2[d2] = f3 + "FullYear", n2[o2] = f3 + "Hours", n2[s] = f3 + "Minutes", n2[i] = f3 + "Seconds", n2[r] = f3 + "Milliseconds", n2)[u3], m3 = u3 === a2 ? this.$D + (e2 - this.$W) : e2;
      if (u3 === c2 || u3 === d2) {
        var v3 = this.clone().set(l2, 1);
        v3.$d[h4](m3), v3.init(), this.$d = v3.set(l2, Math.min(this.$D, v3.daysInMonth())).$d;
      } else
        h4 && this.$d[h4](m3);
      return this.init(), this;
    }, p3.set = function(t2, e2) {
      return this.clone().$set(t2, e2);
    }, p3.get = function(t2) {
      return this[S2.p(t2)]();
    }, p3.add = function(r2, f3) {
      var l3, h4 = this;
      r2 = Number(r2);
      var m3 = S2.p(f3), v3 = function(t2) {
        var e2 = Y2(h4);
        return S2.w(e2.date(e2.date() + Math.round(t2 * r2)), h4);
      };
      if (m3 === c2)
        return this.set(c2, this.$M + r2);
      if (m3 === d2)
        return this.set(d2, this.$y + r2);
      if (m3 === a2)
        return v3(1);
      if (m3 === u2)
        return v3(7);
      var $4 = (l3 = {}, l3[s] = e, l3[o2] = n, l3[i] = t, l3)[m3] || 1, p4 = this.$d.getTime() + r2 * $4;
      return S2.w(p4, this);
    }, p3.subtract = function(t2, e2) {
      return this.add(-1 * t2, e2);
    }, p3.format = function(t2) {
      var e2 = this, n2 = this.$locale();
      if (!this.isValid())
        return n2.invalidDate || h3;
      var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = S2.z(this), s2 = this.$H, o3 = this.$m, a3 = this.$M, u3 = n2.weekdays, c3 = n2.months, f3 = function(t3, n3, i3, s3) {
        return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].substr(0, s3);
      }, d3 = function(t3) {
        return S2.s(s2 % 12 || 12, t3, "0");
      }, l3 = n2.meridiem || function(t3, e3, n3) {
        var r3 = t3 < 12 ? "AM" : "PM";
        return n3 ? r3.toLowerCase() : r3;
      }, m3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a3 + 1, MM: S2.s(a3 + 1, 2, "0"), MMM: f3(n2.monthsShort, a3, c3, 3), MMMM: f3(c3, a3), D: this.$D, DD: S2.s(this.$D, 2, "0"), d: String(this.$W), dd: f3(n2.weekdaysMin, this.$W, u3, 2), ddd: f3(n2.weekdaysShort, this.$W, u3, 3), dddd: u3[this.$W], H: String(s2), HH: S2.s(s2, 2, "0"), h: d3(1), hh: d3(2), a: l3(s2, o3, true), A: l3(s2, o3, false), m: String(o3), mm: S2.s(o3, 2, "0"), s: String(this.$s), ss: S2.s(this.$s, 2, "0"), SSS: S2.s(this.$ms, 3, "0"), Z: i2 };
      return r2.replace(v2, function(t3, e3) {
        return e3 || m3[t3] || i2.replace(":", "");
      });
    }, p3.utcOffset = function() {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, p3.diff = function(r2, l3, h4) {
      var m3, v3 = S2.p(l3), $4 = Y2(r2), p4 = ($4.utcOffset() - this.utcOffset()) * e, y3 = this - $4, g3 = S2.m(this, $4);
      return g3 = (m3 = {}, m3[d2] = g3 / 12, m3[c2] = g3, m3[f2] = g3 / 3, m3[u2] = (y3 - p4) / 6048e5, m3[a2] = (y3 - p4) / 864e5, m3[o2] = y3 / n, m3[s] = y3 / e, m3[i] = y3 / t, m3)[v3] || y3, h4 ? g3 : S2.a(g3);
    }, p3.daysInMonth = function() {
      return this.endOf(c2).$D;
    }, p3.$locale = function() {
      return M2[this.$L];
    }, p3.locale = function(t2, e2) {
      if (!t2)
        return this.$L;
      var n2 = this.clone(), r2 = _2(t2, e2, true);
      return r2 && (n2.$L = r2), n2;
    }, p3.clone = function() {
      return S2.w(this.$d, this);
    }, p3.toDate = function() {
      return new Date(this.valueOf());
    }, p3.toJSON = function() {
      return this.isValid() ? this.toISOString() : null;
    }, p3.toISOString = function() {
      return this.$d.toISOString();
    }, p3.toString = function() {
      return this.$d.toUTCString();
    }, $3;
  }(), b2 = w2.prototype;
  return Y2.prototype = b2, [["$ms", r], ["$s", i], ["$m", s], ["$H", o2], ["$W", a2], ["$M", c2], ["$y", d2], ["$D", l2]].forEach(function(t2) {
    b2[t2[1]] = function(e2) {
      return this.$g(e2, t2[0], t2[1]);
    };
  }), Y2.extend = function(t2, e2) {
    return t2.$i || (t2(e2, w2, Y2), t2.$i = true), Y2;
  }, Y2.locale = _2, Y2.isDayjs = D2, Y2.unix = function(t2) {
    return Y2(1e3 * t2);
  }, Y2.en = M2[g2], Y2.Ls = M2, Y2.p = {}, Y2;
}();
var d = { exports: {} };
var l = d.exports = (u = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, function(t, e, n) {
  var r = e.prototype, i = r.format;
  n.en.formats = u, r.format = function(t2) {
    t2 === void 0 && (t2 = "YYYY-MM-DDTHH:mm:ssZ");
    var e2 = this.$locale().formats, n2 = function(t3, e3) {
      return t3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t4, n3, r2) {
        var i2 = r2 && r2.toUpperCase();
        return n3 || e3[r2] || u[r2] || e3[i2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(t5, e4, n4) {
          return e4 || n4.slice(1);
        });
      });
    }(t2, e2 === void 0 ? {} : e2);
    return i.call(this, n2);
  };
});
var h2 = { exports: {} };
var m = h2.exports = function(t, e, n) {
  var r = e.prototype, i = function(t2) {
    var e2, i2 = t2.date, s2 = t2.utc, o3 = {};
    if (!((e2 = i2) instanceof Date) && !(e2 instanceof Array) && e2 instanceof Object) {
      if (!Object.keys(i2).length)
        return new Date();
      var a3 = s2 ? n.utc() : n();
      Object.keys(i2).forEach(function(t3) {
        var e3, n2;
        o3[e3 = t3, n2 = r.$utils().p(e3), n2 === "date" ? "day" : n2] = i2[t3];
      });
      var u3 = o3.day || (o3.year || o3.month >= 0 ? 1 : a3.date()), c2 = o3.year || a3.year(), f2 = o3.month >= 0 ? o3.month : o3.year || o3.day ? 0 : a3.month(), d2 = o3.hour || 0, l2 = o3.minute || 0, h3 = o3.second || 0, m2 = o3.millisecond || 0;
      return s2 ? new Date(Date.UTC(c2, f2, u3, d2, l2, h3, m2)) : new Date(c2, f2, u3, d2, l2, h3, m2);
    }
    return i2;
  }, s = r.parse;
  r.parse = function(t2) {
    t2.date = i.bind(this)(t2), s.bind(this)(t2);
  };
  var o2 = r.set, a2 = r.add, u2 = function(t2, e2, n2, r2) {
    if (r2 === void 0 && (r2 = 1), e2 instanceof Object) {
      var i2 = Object.keys(e2), s2 = this;
      return i2.forEach(function(n3) {
        s2 = t2.bind(s2)(e2[n3] * r2, n3);
      }), s2;
    }
    return t2.bind(this)(e2 * r2, n2);
  };
  r.set = function(t2, e2) {
    return e2 = e2 === void 0 ? t2 : e2, u2.bind(this)(function(t3, e3) {
      return o2.bind(this)(e3, t3);
    }, e2, t2);
  }, r.add = function(t2, e2) {
    return u2.bind(this)(a2, t2, e2);
  }, r.subtract = function(t2, e2) {
    return u2.bind(this)(a2, t2, e2, -1);
  };
};
var v = { exports: {} };
var $ = v.exports = function() {
  var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e = {};
  return function(n, r, i) {
    var s, o2 = function(t2, n2, r2) {
      r2 === void 0 && (r2 = {});
      var i2 = new Date(t2), s2 = function(t3, n3) {
        n3 === void 0 && (n3 = {});
        var r3 = n3.timeZoneName || "short", i3 = t3 + "|" + r3, s3 = e[i3];
        return s3 || (s3 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t3, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: r3 }), e[i3] = s3), s3;
      }(n2, r2);
      return s2.formatToParts(i2);
    }, a2 = function(e2, n2) {
      for (var r2 = o2(e2, n2), s2 = [], a3 = 0; a3 < r2.length; a3 += 1) {
        var u3 = r2[a3], c3 = u3.type, f2 = u3.value, d2 = t[c3];
        d2 >= 0 && (s2[d2] = parseInt(f2, 10));
      }
      var l2 = s2[3], h3 = l2 === 24 ? 0 : l2, m2 = s2[0] + "-" + s2[1] + "-" + s2[2] + " " + h3 + ":" + s2[4] + ":" + s2[5] + ":000", v2 = +e2;
      return (i.utc(m2).valueOf() - (v2 -= v2 % 1e3)) / 6e4;
    }, u2 = r.prototype;
    u2.tz = function(t2, e2) {
      t2 === void 0 && (t2 = s);
      var n2 = this.utcOffset(), r2 = this.toDate(), o3 = r2.toLocaleString("en-US", { timeZone: t2 }), a3 = Math.round((r2 - new Date(o3)) / 1e3 / 60), u3 = i(o3).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(r2.getTimezoneOffset() / 15) - a3, true);
      if (e2) {
        var c3 = u3.utcOffset();
        u3 = u3.add(n2 - c3, "minute");
      }
      return u3.$x.$timezone = t2, u3;
    }, u2.offsetName = function(t2) {
      var e2 = this.$x.$timezone || i.tz.guess(), n2 = o2(this.valueOf(), e2, { timeZoneName: t2 }).find(function(t3) {
        return t3.type.toLowerCase() === "timezonename";
      });
      return n2 && n2.value;
    };
    var c2 = u2.startOf;
    u2.startOf = function(t2, e2) {
      if (!this.$x || !this.$x.$timezone)
        return c2.call(this, t2, e2);
      var n2 = i(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
      return c2.call(n2, t2, e2).tz(this.$x.$timezone, true);
    }, i.tz = function(t2, e2, n2) {
      var r2 = n2 && e2, o3 = n2 || e2 || s, u3 = a2(+i(), o3);
      if (typeof t2 != "string")
        return i(t2).tz(o3);
      var c3 = function(t3, e3, n3) {
        var r3 = t3 - 60 * e3 * 1e3, i2 = a2(r3, n3);
        if (e3 === i2)
          return [r3, e3];
        var s2 = a2(r3 -= 60 * (i2 - e3) * 1e3, n3);
        return i2 === s2 ? [r3, i2] : [t3 - 60 * Math.min(i2, s2) * 1e3, Math.max(i2, s2)];
      }(i.utc(t2, r2).valueOf(), u3, o3), f2 = c3[0], d2 = c3[1], l2 = i(f2).utcOffset(d2);
      return l2.$x.$timezone = o3, l2;
    }, i.tz.guess = function() {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }, i.tz.setDefault = function(t2) {
      s = t2;
    };
  };
}();
var p = { exports: {} };
var y = p.exports = function() {
  var t = "minute", e = /[+-]\d\d(?::?\d\d)?/g, n = /([+-]|\d\d)/g;
  return function(r, i, s) {
    var o2 = i.prototype;
    s.utc = function(t2) {
      return new i({ date: t2, utc: true, args: arguments });
    }, o2.utc = function(e2) {
      var n2 = s(this.toDate(), { locale: this.$L, utc: true });
      return e2 ? n2.add(this.utcOffset(), t) : n2;
    }, o2.local = function() {
      return s(this.toDate(), { locale: this.$L, utc: false });
    };
    var a2 = o2.parse;
    o2.parse = function(t2) {
      t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), a2.call(this, t2);
    };
    var u2 = o2.init;
    o2.init = function() {
      if (this.$u) {
        var t2 = this.$d;
        this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
      } else
        u2.call(this);
    };
    var c2 = o2.utcOffset;
    o2.utcOffset = function(r2, i2) {
      var s2 = this.$utils().u;
      if (s2(r2))
        return this.$u ? 0 : s2(this.$offset) ? c2.call(this) : this.$offset;
      if (typeof r2 == "string" && (r2 = function(t2) {
        t2 === void 0 && (t2 = "");
        var r3 = t2.match(e);
        if (!r3)
          return null;
        var i3 = ("" + r3[0]).match(n) || ["-", 0, 0], s3 = i3[0], o4 = 60 * +i3[1] + +i3[2];
        return o4 === 0 ? 0 : s3 === "+" ? o4 : -o4;
      }(r2), r2 === null))
        return this;
      var o3 = Math.abs(r2) <= 16 ? 60 * r2 : r2, a3 = this;
      if (i2)
        return a3.$offset = o3, a3.$u = r2 === 0, a3;
      if (r2 !== 0) {
        var u3 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        (a3 = this.local().add(o3 + u3, t)).$offset = o3, a3.$x.$localOffset = u3;
      } else
        a3 = this.utc();
      return a3;
    };
    var f2 = o2.format;
    o2.format = function(t2) {
      var e2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
      return f2.call(this, e2);
    }, o2.valueOf = function() {
      var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || new Date().getTimezoneOffset());
      return this.$d.valueOf() - 6e4 * t2;
    }, o2.isUTC = function() {
      return !!this.$u;
    }, o2.toISOString = function() {
      return this.toDate().toISOString();
    }, o2.toString = function() {
      return this.toDate().toUTCString();
    };
    var d2 = o2.toDate;
    o2.toDate = function(t2) {
      return t2 === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : d2.call(this);
    };
    var l2 = o2.diff;
    o2.diff = function(t2, e2, n2) {
      if (t2 && this.$u === t2.$u)
        return l2.call(this, t2, e2, n2);
      var r2 = this.local(), i2 = s(t2).local();
      return l2.call(r2, i2, e2, n2);
    };
  };
}();
f.extend(l), f.extend(m), f.extend(y), f.extend($);
var g = { name: "zh-cn", weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"), weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"), weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"), months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), ordinal: (t, e) => e === "W" ? `${t}\u5468` : `${t}\u65E5`, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206", LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206", l: "YYYY/M/D", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm" }, relativeTime: { future: "%s\u5185", past: "%s\u524D", s: "\u51E0\u79D2", m: "1 \u5206\u949F", mm: "%d \u5206\u949F", h: "1 \u5C0F\u65F6", hh: "%d \u5C0F\u65F6", d: "1 \u5929", dd: "%d \u5929", M: "1 \u4E2A\u6708", MM: "%d \u4E2A\u6708", y: "1 \u5E74", yy: "%d \u5E74" }, meridiem: (t, e) => {
  const n = 100 * t + e;
  return n < 600 ? "\u51CC\u6668" : n < 900 ? "\u65E9\u4E0A" : n < 1100 ? "\u4E0A\u5348" : n < 1300 ? "\u4E2D\u5348" : n < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
} };
var M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") };
f.locale("zh", g), f.locale("en", M);
var D = f;
var _ = (t, e = {}) => {
  const { lang: n, timezone: r, type: i } = e;
  D.locale(((t2 = "en") => {
    const e2 = t2.toLowerCase();
    return e2 === "zh" || e2 === "zh-cn" ? "zh" : (e2 === "en-us" || e2 === "en-uk" || e2 === "en" || console.warn(`${t2} locale missing in config`), "en");
  })(n));
  const s = r ? D(t).tz(r).format("LL") : D(t).format("LL"), o2 = r ? D(t).tz(r).format("HH:mm") : D(t).format("HH:mm");
  return i === "date" ? s : i === "time" ? o2 : `${s} ${o2}`;
};
var Y = (t, e = {}) => {
  const { timezone: n } = e;
  if (t) {
    if (D(t instanceof Date ? t : t.trim()).isValid()) {
      const r2 = n ? D(t).tz(n) : D(t), i = r2.year(), s = r2.month() + 1, o2 = r2.date(), a2 = r2.hour(), u2 = r2.minute(), c2 = r2.second(), f2 = r2.millisecond(), d2 = a2 === 0 && u2 === 0 && c2 === 0 && f2 === 0, l2 = r2.toDate();
      return { display: _(l2, __spreadValues({ type: d2 ? "date" : "full" }, e)), value: l2, detail: __spreadValues({ year: i, month: s, day: o2 }, d2 ? {} : { hour: a2, minute: u2, second: c2 }) };
    }
    const r = /(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(t.trim());
    if (r) {
      const [, t2, n2, i, s, o2, a2] = r, u2 = (t3) => t3 === void 0 ? void 0 : Number(t3), c2 = (t3) => s && o2 && !a2 ? 0 : t3, f2 = { year: ((t3) => t3 && t3 < 100 ? t3 + 2e3 : t3)(u2(t2)), month: u2(n2), day: u2(i), hour: u2(s), minute: u2(o2), second: c2(u2(a2)) }, d2 = t2 === void 0 && n2 === void 0 && i === void 0, l2 = s === void 0 && o2 === void 0 && a2 === void 0, h3 = D(__spreadProps(__spreadValues({}, f2), { month: f2.month - 1 })).toDate();
      return { display: _(h3, __spreadValues({ type: l2 ? "date" : d2 ? "time" : "full" }, e)), value: d2 ? void 0 : h3, detail: l2 ? { year: f2.year, month: f2.month, day: f2.day } : d2 ? { hour: f2.hour, minute: f2.minute, second: f2.second } : f2 };
    }
  }
  return null;
};
var S = (t, e) => {
  const n = Y(typeof t == "number" ? new Date(t) : t), r = Y(typeof e == "number" ? new Date(e) : e);
  return n && n.value ? r && r.value ? r.value.getTime() - n.value.getTime() : -1 : 1;
};
var w = (t, e = false) => t ? Array.isArray(t) ? t.map((t2) => typeof t2 == "string" ? { name: t2 } : t2) : typeof t == "string" ? [{ name: t }] : typeof t == "object" && t.name ? [t] : (console.error(`Expect 'author' to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e ? "" : "| false"} | undefined\`, but got`, t), []) : [];
var b = (t) => {
  if (t) {
    if (Array.isArray(t))
      return t;
    if (typeof t == "string")
      return [t];
    console.error("Expect 'category' to be `string[] | string | undefined`, but got", t);
  }
  return [];
};
var O = (t) => {
  if (t) {
    if (Array.isArray(t))
      return t;
    if (typeof t == "string")
      return [t];
    console.error("Expect 'tag' to be `string[] | string | undefined`, but got", t);
  }
  return [];
};
var L = (t) => {
  if (typeof t != "string" || t === "")
    return false;
  const e = /^(?:\w+:)?\/\/(\S+)$/u.exec(t);
  if (!e)
    return false;
  const n = e[1];
  return !!n && (/^localhost[:?\d]*(?:[^:?\d]\S*)?$/u.test(n) || /^[^\s.]+\.\S{2,}$/u.test(n));
};
var T = (t) => t.startsWith("/");
var x = defineComponent({ name: "IconBase", props: { name: { type: String, default: "" }, color: { type: String, default: "currentColor" } }, setup: (t, { slots: n }) => () => {
  var r;
  return h("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${t.name}-icon`], viewBox: "0 0 1024 1024", ariaLabelledby: t.name }, [h("title", { id: t.name, lang: "en" }, `${t.name} icon`), h("g", { fill: t.color }, (r = n.default) === null || r === void 0 ? void 0 : r.call(n))]);
} });
var H = (t) => {
  const e = getCurrentInstance();
  return typeof (e == null ? void 0 : e.appContext.components) == "object" && (t in e.appContext.components || camelize(t) in e.appContext.components || capitalize(camelize(t)) in e.appContext.components);
};
var z = (t) => {
  const e = o();
  return computed(() => t[e.value]);
};
var C = () => computed(() => a().value.title);
var A = /* @__PURE__ */ new Map();
var E;
document.addEventListener("mousedown", (t) => {
  E = t;
}), document.addEventListener("mouseup", (t) => {
  for (const e of A.values())
    for (const { documentHandler: n } of e)
      n(t, E);
});
var U = (t, e) => {
  let n = [];
  return Array.isArray(e.arg) ? n = e.arg : e.arg instanceof HTMLElement && n.push(e.arg), (r, i) => {
    const s = e.instance.popperRef, o2 = r.target, a2 = i == null ? void 0 : i.target, u2 = !e || !e.instance, c2 = !o2 || !a2, f2 = t.contains(o2) || t.contains(a2), d2 = t === o2, l2 = n.length && n.some((t2) => t2 == null ? void 0 : t2.contains(o2)) || n.length && n.includes(a2), h3 = s && (s.contains(o2) || s.contains(a2));
    u2 || c2 || f2 || d2 || l2 || h3 || e.value(r, i);
  };
};
var N = { beforeMount(t, e) {
  A.has(t) || A.set(t, []), A.get(t).push({ documentHandler: U(t, e), bindingFn: e.value });
}, updated(t, e) {
  A.has(t) || A.set(t, []);
  const n = A.get(t), r = n.findIndex((t2) => t2.bindingFn === e.oldValue), i = { documentHandler: U(t, e), bindingFn: e.value };
  r >= 0 ? n.splice(r, 1, i) : n.push(i);
}, unmounted(t) {
  A.delete(t);
} };
var I = (t, e) => {
  let n = 1;
  for (let e2 = 0; e2 < t.length; e2++)
    n += t.charCodeAt(e2), n += n << 10, n ^= n >> 6;
  return n += n << 3, n ^= n >> 11, n % e;
};
var k = /#.*$/u;
var W = (t) => {
  const e = k.exec(t);
  return e ? e[0] : "";
};
var j = (t) => decodeURI(t).replace(k, "").replace(/(index)?\.(md|html)$/, "");
var F = (t, e) => {
  if (e === void 0)
    return false;
  const n = j(t.path), r = j(e), i = W(e);
  return i ? i === t.hash && (!r || n === r) : n === r;
};
var Z = class {
  constructor() {
    const t = "message-container", e = document.getElementById(t);
    e ? this.containerElement = e : (this.containerElement = document.createElement("div"), this.containerElement.id = t, document.body.appendChild(this.containerElement));
  }
  pop(t, e = 2e3) {
    const n = document.createElement("div");
    n.className = "message move-in", n.innerHTML = t, this.containerElement.appendChild(n), e > 0 && setTimeout(() => {
      this.close(n);
    }, e);
  }
  close(t) {
    t.className = t.className.replace("move-in", ""), t.className += "move-out", t.addEventListener("animationend", () => {
      t.remove();
    });
  }
};
var V = (t, e = 2) => {
  const { length: n } = t;
  for (; e-- > 0; )
    t.forEach((e2, r) => {
      const i = Math.floor(Math.random() * n);
      t[r] = t[i], t[i] = e2;
    });
  return t;
};
Object.freeze({}), Object.freeze([]);
var J = (t, ...e) => {
  const n = t.resolve(...e), r = n.matched[n.matched.length - 1];
  if (!(r == null ? void 0 : r.redirect))
    return n;
  const { redirect: i } = r, s = typeof i == "function" ? i(n) : i;
  const o2 = ((t2) => typeof t2 == "string")(s) ? { path: s } : s;
  return J(t, __spreadValues({ hash: n.hash, query: n.query, params: n.params }, o2));
};
export {
  x as IconBase,
  Z as Message,
  N as clickOutSideDirective,
  S as compareDate,
  I as generateIndexfromHash,
  w as getAuthor,
  b as getCategory,
  Y as getDate,
  W as getHash,
  O as getTag,
  T as isAbsoluteUrl,
  F as isActiveLink,
  H as isComponentRegistered,
  L as isUrl,
  j as normalizePath,
  V as randomSortArray,
  J as resolveRouteWithRedirect,
  _ as timeTransformer,
  z as useLocaleConfig,
  C as usePageTitle
};
//# sourceMappingURL=@mr-hope_vuepress-shared_lib_client.js.map
