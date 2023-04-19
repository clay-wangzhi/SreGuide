import {
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

// dep:reveal_js_plugin_markdown_markdown_esm_js
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

// node_modules/reveal.js/plugin/markdown/markdown.esm.js
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
function e(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function t(e2, t2) {
  if (!(e2 instanceof t2))
    throw new TypeError("Cannot call a class as a function");
}
function n(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
  }
}
function r(e2, t2, r2) {
  return t2 && n(e2.prototype, t2), r2 && n(e2, r2), e2;
}
function u(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function i(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, u2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, u3 = {}, i3 = Object.keys(e3);
    for (r3 = 0; r3 < i3.length; r3++)
      n3 = i3[r3], t3.indexOf(n3) >= 0 || (u3[n3] = e3[n3]);
    return u3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < i2.length; r2++)
      n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (u2[n2] = e2[n2]);
  }
  return u2;
}
function o(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    var n2 = e3 && (typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"]);
    if (n2 == null)
      return;
    var r2, u2, i2 = [], o2 = true, a2 = false;
    try {
      for (n2 = n2.call(e3); !(o2 = (r2 = n2.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); o2 = true)
        ;
    } catch (e4) {
      a2 = true, u2 = e4;
    } finally {
      try {
        o2 || n2.return == null || n2.return();
      } finally {
        if (a2)
          throw u2;
      }
    }
    return i2;
  }(e2, t2) || a(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function a(e2, t2) {
  if (e2) {
    if (typeof e2 == "string")
      return s(e2, t2);
    var n2 = Object.prototype.toString.call(e2).slice(8, -1);
    return n2 === "Object" && e2.constructor && (n2 = e2.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(e2) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? s(e2, t2) : void 0;
  }
}
function s(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function l(e2, t2) {
  var n2 = typeof Symbol != "undefined" && e2[Symbol.iterator] || e2["@@iterator"];
  if (!n2) {
    if (Array.isArray(e2) || (n2 = a(e2)) || t2 && e2 && typeof e2.length == "number") {
      n2 && (e2 = n2);
      var r2 = 0, u2 = function() {
      };
      return { s: u2, n: function() {
        return r2 >= e2.length ? { done: true } : { done: false, value: e2[r2++] };
      }, e: function(e3) {
        throw e3;
      }, f: u2 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var i2, o2 = true, s2 = false;
  return { s: function() {
    n2 = n2.call(e2);
  }, n: function() {
    var e3 = n2.next();
    return o2 = e3.done, e3;
  }, e: function(e3) {
    s2 = true, i2 = e3;
  }, f: function() {
    try {
      o2 || n2.return == null || n2.return();
    } finally {
      if (s2)
        throw i2;
    }
  } };
}
var c = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
var f = function(e2) {
  return e2 && e2.Math == Math && e2;
};
var p = f(typeof globalThis == "object" && globalThis) || f(typeof window == "object" && window) || f(typeof self == "object" && self) || f(typeof c == "object" && c) || function() {
  return this;
}() || Function("return this")();
var h = {};
var D = function(e2) {
  try {
    return !!e2();
  } catch (e3) {
    return true;
  }
};
var g = !D(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
});
var d = {};
var v = {}.propertyIsEnumerable;
var y = Object.getOwnPropertyDescriptor;
var A = y && !v.call({ 1: 2 }, 1);
d.f = A ? function(e2) {
  var t2 = y(this, e2);
  return !!t2 && t2.enumerable;
} : v;
var m = function(e2, t2) {
  return { enumerable: !(1 & e2), configurable: !(2 & e2), writable: !(4 & e2), value: t2 };
};
var k = {}.toString;
var E = function(e2) {
  return k.call(e2).slice(8, -1);
};
var x = E;
var F = "".split;
var b = D(function() {
  return !Object("z").propertyIsEnumerable(0);
}) ? function(e2) {
  return x(e2) == "String" ? F.call(e2, "") : Object(e2);
} : Object;
var C = function(e2) {
  if (e2 == null)
    throw TypeError("Can't call method on " + e2);
  return e2;
};
var w = b;
var B = C;
var S = function(e2) {
  return w(B(e2));
};
var _ = function(e2) {
  return typeof e2 == "object" ? e2 !== null : typeof e2 == "function";
};
var T = _;
var O = function(e2, t2) {
  if (!T(e2))
    return e2;
  var n2, r2;
  if (t2 && typeof (n2 = e2.toString) == "function" && !T(r2 = n2.call(e2)))
    return r2;
  if (typeof (n2 = e2.valueOf) == "function" && !T(r2 = n2.call(e2)))
    return r2;
  if (!t2 && typeof (n2 = e2.toString) == "function" && !T(r2 = n2.call(e2)))
    return r2;
  throw TypeError("Can't convert object to primitive value");
};
var R = C;
var I = function(e2) {
  return Object(R(e2));
};
var j = I;
var z = {}.hasOwnProperty;
var $ = function(e2, t2) {
  return z.call(j(e2), t2);
};
var P = _;
var L = p.document;
var M = P(L) && P(L.createElement);
var N = function(e2) {
  return M ? L.createElement(e2) : {};
};
var U = N;
var q = !g && !D(function() {
  return Object.defineProperty(U("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
});
var Z = g;
var G = d;
var H = m;
var Q = S;
var V = O;
var Y = $;
var K = q;
var X = Object.getOwnPropertyDescriptor;
h.f = Z ? X : function(e2, t2) {
  if (e2 = Q(e2), t2 = V(t2, true), K)
    try {
      return X(e2, t2);
    } catch (e3) {
    }
  if (Y(e2, t2))
    return H(!G.f.call(e2, t2), e2[t2]);
};
var W = {};
var J = _;
var ee = function(e2) {
  if (!J(e2))
    throw TypeError(String(e2) + " is not an object");
  return e2;
};
var te = g;
var ne = q;
var re = ee;
var ue = O;
var ie = Object.defineProperty;
W.f = te ? ie : function(e2, t2, n2) {
  if (re(e2), t2 = ue(t2, true), re(n2), ne)
    try {
      return ie(e2, t2, n2);
    } catch (e3) {
    }
  if ("get" in n2 || "set" in n2)
    throw TypeError("Accessors not supported");
  return "value" in n2 && (e2[t2] = n2.value), e2;
};
var oe = W;
var ae = m;
var se = g ? function(e2, t2, n2) {
  return oe.f(e2, t2, ae(1, n2));
} : function(e2, t2, n2) {
  return e2[t2] = n2, e2;
};
var le = { exports: {} };
var ce = p;
var fe = se;
var pe = function(e2, t2) {
  try {
    fe(ce, e2, t2);
  } catch (n2) {
    ce[e2] = t2;
  }
  return t2;
};
var he = pe;
var De = p["__core-js_shared__"] || he("__core-js_shared__", {});
var ge = De;
var de = Function.toString;
typeof ge.inspectSource != "function" && (ge.inspectSource = function(e2) {
  return de.call(e2);
});
var ve = ge.inspectSource;
var ye = ve;
var Ae = p.WeakMap;
var me = typeof Ae == "function" && /native code/.test(ye(Ae));
var ke = { exports: {} };
var Ee = De;
(ke.exports = function(e2, t2) {
  return Ee[e2] || (Ee[e2] = t2 !== void 0 ? t2 : {});
})("versions", []).push({ version: "3.12.1", mode: "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)" });
var xe;
var Fe;
var be;
var Ce = 0;
var we = Math.random();
var Be = function(e2) {
  return "Symbol(" + String(e2 === void 0 ? "" : e2) + ")_" + (++Ce + we).toString(36);
};
var Se = ke.exports;
var _e = Be;
var Te = Se("keys");
var Oe = function(e2) {
  return Te[e2] || (Te[e2] = _e(e2));
};
var Re = {};
var Ie = me;
var je = _;
var ze = se;
var $e = $;
var Pe = De;
var Le = Oe;
var Me = Re;
var Ne = p.WeakMap;
if (Ie || Pe.state) {
  Ue = Pe.state || (Pe.state = new Ne()), qe = Ue.get, Ze = Ue.has, Ge = Ue.set;
  xe = function(e2, t2) {
    if (Ze.call(Ue, e2))
      throw new TypeError("Object already initialized");
    return t2.facade = e2, Ge.call(Ue, e2, t2), t2;
  }, Fe = function(e2) {
    return qe.call(Ue, e2) || {};
  }, be = function(e2) {
    return Ze.call(Ue, e2);
  };
} else {
  He = Le("state");
  Me[He] = true, xe = function(e2, t2) {
    if ($e(e2, He))
      throw new TypeError("Object already initialized");
    return t2.facade = e2, ze(e2, He, t2), t2;
  }, Fe = function(e2) {
    return $e(e2, He) ? e2[He] : {};
  }, be = function(e2) {
    return $e(e2, He);
  };
}
var Ue;
var qe;
var Ze;
var Ge;
var He;
var Qe = { set: xe, get: Fe, has: be, enforce: function(e2) {
  return be(e2) ? Fe(e2) : xe(e2, {});
}, getterFor: function(e2) {
  return function(t2) {
    var n2;
    if (!je(t2) || (n2 = Fe(t2)).type !== e2)
      throw TypeError("Incompatible receiver, " + e2 + " required");
    return n2;
  };
} };
var Ve = p;
var Ye = se;
var Ke = $;
var Xe = pe;
var We = ve;
var Je = Qe.get;
var et = Qe.enforce;
var tt = String(String).split("String");
(le.exports = function(e2, t2, n2, r2) {
  var u2, i2 = !!r2 && !!r2.unsafe, o2 = !!r2 && !!r2.enumerable, a2 = !!r2 && !!r2.noTargetGet;
  typeof n2 == "function" && (typeof t2 != "string" || Ke(n2, "name") || Ye(n2, "name", t2), (u2 = et(n2)).source || (u2.source = tt.join(typeof t2 == "string" ? t2 : ""))), e2 !== Ve ? (i2 ? !a2 && e2[t2] && (o2 = true) : delete e2[t2], o2 ? e2[t2] = n2 : Ye(e2, t2, n2)) : o2 ? e2[t2] = n2 : Xe(t2, n2);
})(Function.prototype, "toString", function() {
  return typeof this == "function" && Je(this).source || We(this);
});
var nt = p;
var rt = p;
var ut = function(e2) {
  return typeof e2 == "function" ? e2 : void 0;
};
var it = function(e2, t2) {
  return arguments.length < 2 ? ut(nt[e2]) || ut(rt[e2]) : nt[e2] && nt[e2][t2] || rt[e2] && rt[e2][t2];
};
var ot = {};
var at = Math.ceil;
var st = Math.floor;
var lt = function(e2) {
  return isNaN(e2 = +e2) ? 0 : (e2 > 0 ? st : at)(e2);
};
var ct = lt;
var ft = Math.min;
var pt = function(e2) {
  return e2 > 0 ? ft(ct(e2), 9007199254740991) : 0;
};
var ht = lt;
var Dt = Math.max;
var gt = Math.min;
var dt = function(e2, t2) {
  var n2 = ht(e2);
  return n2 < 0 ? Dt(n2 + t2, 0) : gt(n2, t2);
};
var vt = S;
var yt = pt;
var At = dt;
var mt = function(e2) {
  return function(t2, n2, r2) {
    var u2, i2 = vt(t2), o2 = yt(i2.length), a2 = At(r2, o2);
    if (e2 && n2 != n2) {
      for (; o2 > a2; )
        if ((u2 = i2[a2++]) != u2)
          return true;
    } else
      for (; o2 > a2; a2++)
        if ((e2 || a2 in i2) && i2[a2] === n2)
          return e2 || a2 || 0;
    return !e2 && -1;
  };
};
var kt = { includes: mt(true), indexOf: mt(false) };
var Et = $;
var xt = S;
var Ft = kt.indexOf;
var bt = Re;
var Ct = function(e2, t2) {
  var n2, r2 = xt(e2), u2 = 0, i2 = [];
  for (n2 in r2)
    !Et(bt, n2) && Et(r2, n2) && i2.push(n2);
  for (; t2.length > u2; )
    Et(r2, n2 = t2[u2++]) && (~Ft(i2, n2) || i2.push(n2));
  return i2;
};
var wt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
var Bt = Ct;
var St = wt.concat("length", "prototype");
ot.f = Object.getOwnPropertyNames || function(e2) {
  return Bt(e2, St);
};
var _t = {};
_t.f = Object.getOwnPropertySymbols;
var Tt = ot;
var Ot = _t;
var Rt = ee;
var It = it("Reflect", "ownKeys") || function(e2) {
  var t2 = Tt.f(Rt(e2)), n2 = Ot.f;
  return n2 ? t2.concat(n2(e2)) : t2;
};
var jt = $;
var zt = It;
var $t = h;
var Pt = W;
var Lt = D;
var Mt = /#|\.prototype\./;
var Nt = function(e2, t2) {
  var n2 = qt[Ut(e2)];
  return n2 == Gt || n2 != Zt && (typeof t2 == "function" ? Lt(t2) : !!t2);
};
var Ut = Nt.normalize = function(e2) {
  return String(e2).replace(Mt, ".").toLowerCase();
};
var qt = Nt.data = {};
var Zt = Nt.NATIVE = "N";
var Gt = Nt.POLYFILL = "P";
var Ht = Nt;
var Qt = p;
var Vt = h.f;
var Yt = se;
var Kt = le.exports;
var Xt = pe;
var Wt = function(e2, t2) {
  for (var n2 = zt(t2), r2 = Pt.f, u2 = $t.f, i2 = 0; i2 < n2.length; i2++) {
    var o2 = n2[i2];
    jt(e2, o2) || r2(e2, o2, u2(t2, o2));
  }
};
var Jt = Ht;
var en = function(e2, t2) {
  var n2, r2, u2, i2, o2, a2 = e2.target, s2 = e2.global, l2 = e2.stat;
  if (n2 = s2 ? Qt : l2 ? Qt[a2] || Xt(a2, {}) : (Qt[a2] || {}).prototype)
    for (r2 in t2) {
      if (i2 = t2[r2], u2 = e2.noTargetGet ? (o2 = Vt(n2, r2)) && o2.value : n2[r2], !Jt(s2 ? r2 : a2 + (l2 ? "." : "#") + r2, e2.forced) && u2 !== void 0) {
        if (typeof i2 == typeof u2)
          continue;
        Wt(i2, u2);
      }
      (e2.sham || u2 && u2.sham) && Yt(i2, "sham", true), Kt(n2, r2, i2, e2);
    }
};
var tn = ee;
var nn = function() {
  var e2 = tn(this), t2 = "";
  return e2.global && (t2 += "g"), e2.ignoreCase && (t2 += "i"), e2.multiline && (t2 += "m"), e2.dotAll && (t2 += "s"), e2.unicode && (t2 += "u"), e2.sticky && (t2 += "y"), t2;
};
var rn = {};
var un = D;
function on(e2, t2) {
  return RegExp(e2, t2);
}
rn.UNSUPPORTED_Y = un(function() {
  var e2 = on("a", "y");
  return e2.lastIndex = 2, e2.exec("abcd") != null;
}), rn.BROKEN_CARET = un(function() {
  var e2 = on("^r", "gy");
  return e2.lastIndex = 2, e2.exec("str") != null;
});
var an = nn;
var sn = rn;
var ln = ke.exports;
var cn = RegExp.prototype.exec;
var fn = ln("native-string-replace", String.prototype.replace);
var pn = cn;
var hn = function() {
  var e2 = /a/, t2 = /b*/g;
  return cn.call(e2, "a"), cn.call(t2, "a"), e2.lastIndex !== 0 || t2.lastIndex !== 0;
}();
var Dn = sn.UNSUPPORTED_Y || sn.BROKEN_CARET;
var gn = /()??/.exec("")[1] !== void 0;
(hn || gn || Dn) && (pn = function(e2) {
  var t2, n2, r2, u2, i2 = this, o2 = Dn && i2.sticky, a2 = an.call(i2), s2 = i2.source, l2 = 0, c2 = e2;
  return o2 && ((a2 = a2.replace("y", "")).indexOf("g") === -1 && (a2 += "g"), c2 = String(e2).slice(i2.lastIndex), i2.lastIndex > 0 && (!i2.multiline || i2.multiline && e2[i2.lastIndex - 1] !== "\n") && (s2 = "(?: " + s2 + ")", c2 = " " + c2, l2++), n2 = new RegExp("^(?:" + s2 + ")", a2)), gn && (n2 = new RegExp("^" + s2 + "$(?!\\s)", a2)), hn && (t2 = i2.lastIndex), r2 = cn.call(o2 ? n2 : i2, c2), o2 ? r2 ? (r2.input = r2.input.slice(l2), r2[0] = r2[0].slice(l2), r2.index = i2.lastIndex, i2.lastIndex += r2[0].length) : i2.lastIndex = 0 : hn && r2 && (i2.lastIndex = i2.global ? r2.index + r2[0].length : t2), gn && r2 && r2.length > 1 && fn.call(r2[0], n2, function() {
    for (u2 = 1; u2 < arguments.length - 2; u2++)
      arguments[u2] === void 0 && (r2[u2] = void 0);
  }), r2;
});
var dn = pn;
en({ target: "RegExp", proto: true, forced: /./.exec !== dn }, { exec: dn });
var vn;
var yn;
var An = it("navigator", "userAgent") || "";
var mn = An;
var kn = p.process;
var En = kn && kn.versions;
var xn = En && En.v8;
xn ? yn = (vn = xn.split("."))[0] < 4 ? 1 : vn[0] + vn[1] : mn && (!(vn = mn.match(/Edge\/(\d+)/)) || vn[1] >= 74) && (vn = mn.match(/Chrome\/(\d+)/)) && (yn = vn[1]);
var Fn = yn && +yn;
var bn = Fn;
var Cn = D;
var wn = !!Object.getOwnPropertySymbols && !Cn(function() {
  return !String(Symbol()) || !Symbol.sham && bn && bn < 41;
});
var Bn = wn && !Symbol.sham && typeof Symbol.iterator == "symbol";
var Sn = p;
var _n = ke.exports;
var Tn = $;
var On = Be;
var Rn = wn;
var In = Bn;
var jn = _n("wks");
var zn = Sn.Symbol;
var $n = In ? zn : zn && zn.withoutSetter || On;
var Pn = function(e2) {
  return Tn(jn, e2) && (Rn || typeof jn[e2] == "string") || (Rn && Tn(zn, e2) ? jn[e2] = zn[e2] : jn[e2] = $n("Symbol." + e2)), jn[e2];
};
var Ln = le.exports;
var Mn = dn;
var Nn = D;
var Un = Pn;
var qn = se;
var Zn = Un("species");
var Gn = RegExp.prototype;
var Hn = !Nn(function() {
  var e2 = /./;
  return e2.exec = function() {
    var e3 = [];
    return e3.groups = { a: "7" }, e3;
  }, "".replace(e2, "$<a>") !== "7";
});
var Qn = "a".replace(/./, "$0") === "$0";
var Vn = Un("replace");
var Yn = !!/./[Vn] && /./[Vn]("a", "$0") === "";
var Kn = !Nn(function() {
  var e2 = /(?:)/, t2 = e2.exec;
  e2.exec = function() {
    return t2.apply(this, arguments);
  };
  var n2 = "ab".split(e2);
  return n2.length !== 2 || n2[0] !== "a" || n2[1] !== "b";
});
var Xn = function(e2, t2, n2, r2) {
  var u2 = Un(e2), i2 = !Nn(function() {
    var t3 = {};
    return t3[u2] = function() {
      return 7;
    }, ""[e2](t3) != 7;
  }), o2 = i2 && !Nn(function() {
    var t3 = false, n3 = /a/;
    return e2 === "split" && ((n3 = {}).constructor = {}, n3.constructor[Zn] = function() {
      return n3;
    }, n3.flags = "", n3[u2] = /./[u2]), n3.exec = function() {
      return t3 = true, null;
    }, n3[u2](""), !t3;
  });
  if (!i2 || !o2 || e2 === "replace" && (!Hn || !Qn || Yn) || e2 === "split" && !Kn) {
    var a2 = /./[u2], s2 = n2(u2, ""[e2], function(e3, t3, n3, r3, u3) {
      var o3 = t3.exec;
      return o3 === Mn || o3 === Gn.exec ? i2 && !u3 ? { done: true, value: a2.call(t3, n3, r3) } : { done: true, value: e3.call(n3, t3, r3) } : { done: false };
    }, { REPLACE_KEEPS_$0: Qn, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Yn }), l2 = s2[0], c2 = s2[1];
    Ln(String.prototype, e2, l2), Ln(Gn, u2, t2 == 2 ? function(e3, t3) {
      return c2.call(e3, this, t3);
    } : function(e3) {
      return c2.call(e3, this);
    });
  }
  r2 && qn(Gn[u2], "sham", true);
};
var Wn = lt;
var Jn = C;
var er = function(e2) {
  return function(t2, n2) {
    var r2, u2, i2 = String(Jn(t2)), o2 = Wn(n2), a2 = i2.length;
    return o2 < 0 || o2 >= a2 ? e2 ? "" : void 0 : (r2 = i2.charCodeAt(o2)) < 55296 || r2 > 56319 || o2 + 1 === a2 || (u2 = i2.charCodeAt(o2 + 1)) < 56320 || u2 > 57343 ? e2 ? i2.charAt(o2) : r2 : e2 ? i2.slice(o2, o2 + 2) : u2 - 56320 + (r2 - 55296 << 10) + 65536;
  };
};
var tr = { codeAt: er(false), charAt: er(true) };
var nr = tr.charAt;
var rr = function(e2, t2, n2) {
  return t2 + (n2 ? nr(e2, t2).length : 1);
};
var ur = I;
var ir = Math.floor;
var or = "".replace;
var ar = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var sr = /\$([$&'`]|\d{1,2})/g;
var lr = E;
var cr = dn;
var fr = function(e2, t2) {
  var n2 = e2.exec;
  if (typeof n2 == "function") {
    var r2 = n2.call(e2, t2);
    if (typeof r2 != "object")
      throw TypeError("RegExp exec method returned something other than an Object or null");
    return r2;
  }
  if (lr(e2) !== "RegExp")
    throw TypeError("RegExp#exec called on incompatible receiver");
  return cr.call(e2, t2);
};
var pr = Xn;
var hr = ee;
var Dr = pt;
var gr = lt;
var dr = C;
var vr = rr;
var yr = function(e2, t2, n2, r2, u2, i2) {
  var o2 = n2 + e2.length, a2 = r2.length, s2 = sr;
  return u2 !== void 0 && (u2 = ur(u2), s2 = ar), or.call(i2, s2, function(i3, s3) {
    var l2;
    switch (s3.charAt(0)) {
      case "$":
        return "$";
      case "&":
        return e2;
      case "`":
        return t2.slice(0, n2);
      case "'":
        return t2.slice(o2);
      case "<":
        l2 = u2[s3.slice(1, -1)];
        break;
      default:
        var c2 = +s3;
        if (c2 === 0)
          return i3;
        if (c2 > a2) {
          var f2 = ir(c2 / 10);
          return f2 === 0 ? i3 : f2 <= a2 ? r2[f2 - 1] === void 0 ? s3.charAt(1) : r2[f2 - 1] + s3.charAt(1) : i3;
        }
        l2 = r2[c2 - 1];
    }
    return l2 === void 0 ? "" : l2;
  });
};
var Ar = fr;
var mr = Math.max;
var kr = Math.min;
pr("replace", 2, function(e2, t2, n2, r2) {
  var u2 = r2.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, i2 = r2.REPLACE_KEEPS_$0, o2 = u2 ? "$" : "$0";
  return [function(n3, r3) {
    var u3 = dr(this), i3 = n3 == null ? void 0 : n3[e2];
    return i3 !== void 0 ? i3.call(n3, u3, r3) : t2.call(String(u3), n3, r3);
  }, function(e3, r3) {
    if (!u2 && i2 || typeof r3 == "string" && r3.indexOf(o2) === -1) {
      var a2 = n2(t2, e3, this, r3);
      if (a2.done)
        return a2.value;
    }
    var s2 = hr(e3), l2 = String(this), c2 = typeof r3 == "function";
    c2 || (r3 = String(r3));
    var f2 = s2.global;
    if (f2) {
      var p2 = s2.unicode;
      s2.lastIndex = 0;
    }
    for (var h2 = []; ; ) {
      var D2 = Ar(s2, l2);
      if (D2 === null)
        break;
      if (h2.push(D2), !f2)
        break;
      String(D2[0]) === "" && (s2.lastIndex = vr(l2, Dr(s2.lastIndex), p2));
    }
    for (var g2, d2 = "", v2 = 0, y2 = 0; y2 < h2.length; y2++) {
      D2 = h2[y2];
      for (var A2 = String(D2[0]), m2 = mr(kr(gr(D2.index), l2.length), 0), k2 = [], E2 = 1; E2 < D2.length; E2++)
        k2.push((g2 = D2[E2]) === void 0 ? g2 : String(g2));
      var x2 = D2.groups;
      if (c2) {
        var F2 = [A2].concat(k2, m2, l2);
        x2 !== void 0 && F2.push(x2);
        var b2 = String(r3.apply(void 0, F2));
      } else
        b2 = yr(A2, l2, m2, k2, x2, r3);
      m2 >= v2 && (d2 += l2.slice(v2, m2) + b2, v2 = m2 + A2.length);
    }
    return d2 + l2.slice(v2);
  }];
});
var Er = _;
var xr = ee;
var Fr = function(e2) {
  if (!Er(e2) && e2 !== null)
    throw TypeError("Can't set " + String(e2) + " as a prototype");
  return e2;
};
var br = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e2, t2 = false, n2 = {};
  try {
    (e2 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n2, []), t2 = n2 instanceof Array;
  } catch (e3) {
  }
  return function(n3, r2) {
    return xr(n3), Fr(r2), t2 ? e2.call(n3, r2) : n3.__proto__ = r2, n3;
  };
}() : void 0);
var Cr = _;
var wr = br;
var Br = _;
var Sr = E;
var _r = Pn("match");
var Tr = function(e2) {
  var t2;
  return Br(e2) && ((t2 = e2[_r]) !== void 0 ? !!t2 : Sr(e2) == "RegExp");
};
var Or = it;
var Rr = W;
var Ir = g;
var jr = Pn("species");
var zr = function(e2) {
  var t2 = Or(e2), n2 = Rr.f;
  Ir && t2 && !t2[jr] && n2(t2, jr, { configurable: true, get: function() {
    return this;
  } });
};
var $r = g;
var Pr = p;
var Lr = Ht;
var Mr = function(e2, t2, n2) {
  var r2, u2;
  return wr && typeof (r2 = t2.constructor) == "function" && r2 !== n2 && Cr(u2 = r2.prototype) && u2 !== n2.prototype && wr(e2, u2), e2;
};
var Nr = W.f;
var Ur = ot.f;
var qr = Tr;
var Zr = nn;
var Gr = rn;
var Hr = le.exports;
var Qr = D;
var Vr = Qe.enforce;
var Yr = zr;
var Kr = Pn("match");
var Xr = Pr.RegExp;
var Wr = Xr.prototype;
var Jr = /a/g;
var eu = /a/g;
var tu = new Xr(Jr) !== Jr;
var nu = Gr.UNSUPPORTED_Y;
if ($r && Lr("RegExp", !tu || nu || Qr(function() {
  return eu[Kr] = false, Xr(Jr) != Jr || Xr(eu) == eu || Xr(Jr, "i") != "/a/i";
}))) {
  for (ru = function(e2, t2) {
    var n2, r2 = this instanceof ru, u2 = qr(e2), i2 = t2 === void 0;
    if (!r2 && u2 && e2.constructor === ru && i2)
      return e2;
    tu ? u2 && !i2 && (e2 = e2.source) : e2 instanceof ru && (i2 && (t2 = Zr.call(e2)), e2 = e2.source), nu && (n2 = !!t2 && t2.indexOf("y") > -1) && (t2 = t2.replace(/y/g, ""));
    var o2 = Mr(tu ? new Xr(e2, t2) : Xr(e2, t2), r2 ? this : Wr, ru);
    nu && n2 && (Vr(o2).sticky = true);
    return o2;
  }, uu = function(e2) {
    e2 in ru || Nr(ru, e2, { configurable: true, get: function() {
      return Xr[e2];
    }, set: function(t2) {
      Xr[e2] = t2;
    } });
  }, iu = Ur(Xr), ou = 0; iu.length > ou; )
    uu(iu[ou++]);
  Wr.constructor = ru, ru.prototype = Wr, Hr(Pr, "RegExp", ru);
}
var ru;
var uu;
var iu;
var ou;
Yr("RegExp");
var au = le.exports;
var su = ee;
var lu = D;
var cu = nn;
var fu = RegExp.prototype;
var pu = fu.toString;
var hu = lu(function() {
  return pu.call({ source: "a", flags: "b" }) != "/a/b";
});
var Du = pu.name != "toString";
(hu || Du) && au(RegExp.prototype, "toString", function() {
  var e2 = su(this), t2 = String(e2.source), n2 = e2.flags;
  return "/" + t2 + "/" + String(n2 === void 0 && e2 instanceof RegExp && !("flags" in fu) ? cu.call(e2) : n2);
}, { unsafe: true });
var gu = ee;
var du = pt;
var vu = C;
var yu = rr;
var Au = fr;
Xn("match", 1, function(e2, t2, n2) {
  return [function(t3) {
    var n3 = vu(this), r2 = t3 == null ? void 0 : t3[e2];
    return r2 !== void 0 ? r2.call(t3, n3) : new RegExp(t3)[e2](String(n3));
  }, function(e3) {
    var r2 = n2(t2, e3, this);
    if (r2.done)
      return r2.value;
    var u2 = gu(e3), i2 = String(this);
    if (!u2.global)
      return Au(u2, i2);
    var o2 = u2.unicode;
    u2.lastIndex = 0;
    for (var a2, s2 = [], l2 = 0; (a2 = Au(u2, i2)) !== null; ) {
      var c2 = String(a2[0]);
      s2[l2] = c2, c2 === "" && (u2.lastIndex = yu(i2, du(u2.lastIndex), o2)), l2++;
    }
    return l2 === 0 ? null : s2;
  }];
});
var mu = g;
var ku = W.f;
var Eu = Function.prototype;
var xu = Eu.toString;
var Fu = /^\s*function ([^ (]*)/;
mu && !("name" in Eu) && ku(Eu, "name", { configurable: true, get: function() {
  try {
    return xu.call(this).match(Fu)[1];
  } catch (e2) {
    return "";
  }
} });
var bu = D;
var Cu = function(e2, t2) {
  var n2 = [][e2];
  return !!n2 && bu(function() {
    n2.call(null, t2 || function() {
      throw 1;
    }, 1);
  });
};
var wu = en;
var Bu = S;
var Su = [].join;
var _u = b != Object;
var Tu = Cu("join", ",");
wu({ target: "Array", proto: true, forced: _u || !Tu }, { join: function(e2) {
  return Su.call(Bu(this), e2 === void 0 ? "," : e2);
} });
var Ou = function(e2) {
  if (typeof e2 != "function")
    throw TypeError(String(e2) + " is not a function");
  return e2;
};
var Ru = ee;
var Iu = Ou;
var ju = Pn("species");
var zu = function(e2, t2) {
  var n2, r2 = Ru(e2).constructor;
  return r2 === void 0 || (n2 = Ru(r2)[ju]) == null ? t2 : Iu(n2);
};
var $u = Xn;
var Pu = Tr;
var Lu = ee;
var Mu = C;
var Nu = zu;
var Uu = rr;
var qu = pt;
var Zu = fr;
var Gu = dn;
var Hu = rn.UNSUPPORTED_Y;
var Qu = [].push;
var Vu = Math.min;
$u("split", 2, function(e2, t2, n2) {
  var r2;
  return r2 = "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e3, n3) {
    var r3 = String(Mu(this)), u2 = n3 === void 0 ? 4294967295 : n3 >>> 0;
    if (u2 === 0)
      return [];
    if (e3 === void 0)
      return [r3];
    if (!Pu(e3))
      return t2.call(r3, e3, u2);
    for (var i2, o2, a2, s2 = [], l2 = (e3.ignoreCase ? "i" : "") + (e3.multiline ? "m" : "") + (e3.unicode ? "u" : "") + (e3.sticky ? "y" : ""), c2 = 0, f2 = new RegExp(e3.source, l2 + "g"); (i2 = Gu.call(f2, r3)) && !((o2 = f2.lastIndex) > c2 && (s2.push(r3.slice(c2, i2.index)), i2.length > 1 && i2.index < r3.length && Qu.apply(s2, i2.slice(1)), a2 = i2[0].length, c2 = o2, s2.length >= u2)); )
      f2.lastIndex === i2.index && f2.lastIndex++;
    return c2 === r3.length ? !a2 && f2.test("") || s2.push("") : s2.push(r3.slice(c2)), s2.length > u2 ? s2.slice(0, u2) : s2;
  } : "0".split(void 0, 0).length ? function(e3, n3) {
    return e3 === void 0 && n3 === 0 ? [] : t2.call(this, e3, n3);
  } : t2, [function(t3, n3) {
    var u2 = Mu(this), i2 = t3 == null ? void 0 : t3[e2];
    return i2 !== void 0 ? i2.call(t3, u2, n3) : r2.call(String(u2), t3, n3);
  }, function(e3, u2) {
    var i2 = n2(r2, e3, this, u2, r2 !== t2);
    if (i2.done)
      return i2.value;
    var o2 = Lu(e3), a2 = String(this), s2 = Nu(o2, RegExp), l2 = o2.unicode, c2 = (o2.ignoreCase ? "i" : "") + (o2.multiline ? "m" : "") + (o2.unicode ? "u" : "") + (Hu ? "g" : "y"), f2 = new s2(Hu ? "^(?:" + o2.source + ")" : o2, c2), p2 = u2 === void 0 ? 4294967295 : u2 >>> 0;
    if (p2 === 0)
      return [];
    if (a2.length === 0)
      return Zu(f2, a2) === null ? [a2] : [];
    for (var h2 = 0, D2 = 0, g2 = []; D2 < a2.length; ) {
      f2.lastIndex = Hu ? 0 : D2;
      var d2, v2 = Zu(f2, Hu ? a2.slice(D2) : a2);
      if (v2 === null || (d2 = Vu(qu(f2.lastIndex + (Hu ? D2 : 0)), a2.length)) === h2)
        D2 = Uu(a2, D2, l2);
      else {
        if (g2.push(a2.slice(h2, D2)), g2.length === p2)
          return g2;
        for (var y2 = 1; y2 <= v2.length - 1; y2++)
          if (g2.push(v2[y2]), g2.length === p2)
            return g2;
        D2 = h2 = d2;
      }
    }
    return g2.push(a2.slice(h2)), g2;
  }];
}, Hu);
var Yu = C;
var Ku = "[	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]";
var Xu = RegExp("^" + Ku + Ku + "*");
var Wu = RegExp(Ku + Ku + "*$");
var Ju = function(e2) {
  return function(t2) {
    var n2 = String(Yu(t2));
    return 1 & e2 && (n2 = n2.replace(Xu, "")), 2 & e2 && (n2 = n2.replace(Wu, "")), n2;
  };
};
var ei = { start: Ju(1), end: Ju(2), trim: Ju(3) };
var ti = D;
var ni = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
var ri = function(e2) {
  return ti(function() {
    return !!ni[e2]() || "\u200B\x85\u180E"[e2]() != "\u200B\x85\u180E" || ni[e2].name !== e2;
  });
};
var ui = ei.trim;
en({ target: "String", proto: true, forced: ri("trim") }, { trim: function() {
  return ui(this);
} });
var ii = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
var oi = Ou;
var ai = function(e2, t2, n2) {
  if (oi(e2), t2 === void 0)
    return e2;
  switch (n2) {
    case 0:
      return function() {
        return e2.call(t2);
      };
    case 1:
      return function(n3) {
        return e2.call(t2, n3);
      };
    case 2:
      return function(n3, r2) {
        return e2.call(t2, n3, r2);
      };
    case 3:
      return function(n3, r2, u2) {
        return e2.call(t2, n3, r2, u2);
      };
  }
  return function() {
    return e2.apply(t2, arguments);
  };
};
var si = E;
var li = Array.isArray || function(e2) {
  return si(e2) == "Array";
};
var ci = _;
var fi = li;
var pi = Pn("species");
var hi = function(e2, t2) {
  var n2;
  return fi(e2) && (typeof (n2 = e2.constructor) != "function" || n2 !== Array && !fi(n2.prototype) ? ci(n2) && (n2 = n2[pi]) === null && (n2 = void 0) : n2 = void 0), new (n2 === void 0 ? Array : n2)(t2 === 0 ? 0 : t2);
};
var Di = ai;
var gi = b;
var di = I;
var vi = pt;
var yi = hi;
var Ai = [].push;
var mi = function(e2) {
  var t2 = e2 == 1, n2 = e2 == 2, r2 = e2 == 3, u2 = e2 == 4, i2 = e2 == 6, o2 = e2 == 7, a2 = e2 == 5 || i2;
  return function(s2, l2, c2, f2) {
    for (var p2, h2, D2 = di(s2), g2 = gi(D2), d2 = Di(l2, c2, 3), v2 = vi(g2.length), y2 = 0, A2 = f2 || yi, m2 = t2 ? A2(s2, v2) : n2 || o2 ? A2(s2, 0) : void 0; v2 > y2; y2++)
      if ((a2 || y2 in g2) && (h2 = d2(p2 = g2[y2], y2, D2), e2))
        if (t2)
          m2[y2] = h2;
        else if (h2)
          switch (e2) {
            case 3:
              return true;
            case 5:
              return p2;
            case 6:
              return y2;
            case 2:
              Ai.call(m2, p2);
          }
        else
          switch (e2) {
            case 4:
              return false;
            case 7:
              Ai.call(m2, p2);
          }
    return i2 ? -1 : r2 || u2 ? u2 : m2;
  };
};
var ki = { forEach: mi(0), map: mi(1), filter: mi(2), some: mi(3), every: mi(4), find: mi(5), findIndex: mi(6), filterOut: mi(7) };
var Ei = ki.forEach;
var xi = p;
var Fi = ii;
var bi = Cu("forEach") ? [].forEach : function(e2) {
  return Ei(this, e2, arguments.length > 1 ? arguments[1] : void 0);
};
var Ci = se;
for (wi in Fi) {
  Bi = xi[wi], Si = Bi && Bi.prototype;
  if (Si && Si.forEach !== bi)
    try {
      Ci(Si, "forEach", bi);
    } catch (e2) {
      Si.forEach = bi;
    }
}
var Bi;
var Si;
var wi;
var _i = {};
_i[Pn("toStringTag")] = "z";
var Ti = String(_i) === "[object z]";
var Oi = Ti;
var Ri = E;
var Ii = Pn("toStringTag");
var ji = Ri(function() {
  return arguments;
}()) == "Arguments";
var zi = Oi ? Ri : function(e2) {
  var t2, n2, r2;
  return e2 === void 0 ? "Undefined" : e2 === null ? "Null" : typeof (n2 = function(e3, t3) {
    try {
      return e3[t3];
    } catch (e4) {
    }
  }(t2 = Object(e2), Ii)) == "string" ? n2 : ji ? Ri(t2) : (r2 = Ri(t2)) == "Object" && typeof t2.callee == "function" ? "Arguments" : r2;
};
var $i = zi;
var Pi = Ti ? {}.toString : function() {
  return "[object " + $i(this) + "]";
};
var Li = Ti;
var Mi = le.exports;
var Ni = Pi;
Li || Mi(Object.prototype, "toString", Ni, { unsafe: true });
var Ui = p.Promise;
var qi = le.exports;
var Zi = W.f;
var Gi = $;
var Hi = Pn("toStringTag");
var Qi = function(e2, t2, n2) {
  e2 && !Gi(e2 = n2 ? e2 : e2.prototype, Hi) && Zi(e2, Hi, { configurable: true, value: t2 });
};
var Vi = {};
var Yi = Vi;
var Ki = Pn("iterator");
var Xi = Array.prototype;
var Wi = zi;
var Ji = Vi;
var eo = Pn("iterator");
var to = ee;
var no = ee;
var ro = function(e2) {
  return e2 !== void 0 && (Yi.Array === e2 || Xi[Ki] === e2);
};
var uo = pt;
var io = ai;
var oo = function(e2) {
  if (e2 != null)
    return e2[eo] || e2["@@iterator"] || Ji[Wi(e2)];
};
var ao = function(e2) {
  var t2 = e2.return;
  if (t2 !== void 0)
    return to(t2.call(e2)).value;
};
var so = function(e2, t2) {
  this.stopped = e2, this.result = t2;
};
var lo = Pn("iterator");
var co = false;
try {
  fo = 0, po = { next: function() {
    return { done: !!fo++ };
  }, return: function() {
    co = true;
  } };
  po[lo] = function() {
    return this;
  }, Array.from(po, function() {
    throw 2;
  });
} catch (e2) {
}
var fo;
var po;
var ho;
var Do;
var go;
var vo = it("document", "documentElement");
var yo = /(?:iphone|ipod|ipad).*applewebkit/i.test(An);
var Ao = E(p.process) == "process";
var mo = p;
var ko = D;
var Eo = ai;
var xo = vo;
var Fo = N;
var bo = yo;
var Co = Ao;
var wo = mo.location;
var Bo = mo.setImmediate;
var So = mo.clearImmediate;
var _o = mo.process;
var To = mo.MessageChannel;
var Oo = mo.Dispatch;
var Ro = 0;
var Io = {};
var jo = function(e2) {
  if (Io.hasOwnProperty(e2)) {
    var t2 = Io[e2];
    delete Io[e2], t2();
  }
};
var zo = function(e2) {
  return function() {
    jo(e2);
  };
};
var $o = function(e2) {
  jo(e2.data);
};
var Po = function(e2) {
  mo.postMessage(e2 + "", wo.protocol + "//" + wo.host);
};
Bo && So || (Bo = function(e2) {
  for (var t2 = [], n2 = 1; arguments.length > n2; )
    t2.push(arguments[n2++]);
  return Io[++Ro] = function() {
    (typeof e2 == "function" ? e2 : Function(e2)).apply(void 0, t2);
  }, ho(Ro), Ro;
}, So = function(e2) {
  delete Io[e2];
}, Co ? ho = function(e2) {
  _o.nextTick(zo(e2));
} : Oo && Oo.now ? ho = function(e2) {
  Oo.now(zo(e2));
} : To && !bo ? (go = (Do = new To()).port2, Do.port1.onmessage = $o, ho = Eo(go.postMessage, go, 1)) : mo.addEventListener && typeof postMessage == "function" && !mo.importScripts && wo && wo.protocol !== "file:" && !ko(Po) ? (ho = Po, mo.addEventListener("message", $o, false)) : ho = "onreadystatechange" in Fo("script") ? function(e2) {
  xo.appendChild(Fo("script")).onreadystatechange = function() {
    xo.removeChild(this), jo(e2);
  };
} : function(e2) {
  setTimeout(zo(e2), 0);
});
var Lo;
var Mo;
var No;
var Uo;
var qo;
var Zo;
var Go;
var Ho;
var Qo = { set: Bo, clear: So };
var Vo = /web0s(?!.*chrome)/i.test(An);
var Yo = p;
var Ko = h.f;
var Xo = Qo.set;
var Wo = yo;
var Jo = Vo;
var ea = Ao;
var ta = Yo.MutationObserver || Yo.WebKitMutationObserver;
var na = Yo.document;
var ra = Yo.process;
var ua = Yo.Promise;
var ia = Ko(Yo, "queueMicrotask");
var oa = ia && ia.value;
oa || (Lo = function() {
  var e2, t2;
  for (ea && (e2 = ra.domain) && e2.exit(); Mo; ) {
    t2 = Mo.fn, Mo = Mo.next;
    try {
      t2();
    } catch (e3) {
      throw Mo ? Uo() : No = void 0, e3;
    }
  }
  No = void 0, e2 && e2.enter();
}, Wo || ea || Jo || !ta || !na ? ua && ua.resolve ? ((Go = ua.resolve(void 0)).constructor = ua, Ho = Go.then, Uo = function() {
  Ho.call(Go, Lo);
}) : Uo = ea ? function() {
  ra.nextTick(Lo);
} : function() {
  Xo.call(Yo, Lo);
} : (qo = true, Zo = na.createTextNode(""), new ta(Lo).observe(Zo, { characterData: true }), Uo = function() {
  Zo.data = qo = !qo;
}));
var aa = oa || function(e2) {
  var t2 = { fn: e2, next: void 0 };
  No && (No.next = t2), Mo || (Mo = t2, Uo()), No = t2;
};
var sa = {};
var la = Ou;
var ca = function(e2) {
  var t2, n2;
  this.promise = new e2(function(e3, r2) {
    if (t2 !== void 0 || n2 !== void 0)
      throw TypeError("Bad Promise constructor");
    t2 = e3, n2 = r2;
  }), this.resolve = la(t2), this.reject = la(n2);
};
sa.f = function(e2) {
  return new ca(e2);
};
var fa;
var pa;
var ha;
var Da;
var ga = ee;
var da = _;
var va = sa;
var ya = p;
var Aa = typeof window == "object";
var ma = en;
var ka = p;
var Ea = it;
var xa = Ui;
var Fa = le.exports;
var ba = function(e2, t2, n2) {
  for (var r2 in t2)
    qi(e2, r2, t2[r2], n2);
  return e2;
};
var Ca = br;
var wa = Qi;
var Ba = zr;
var Sa = _;
var _a = Ou;
var Ta = function(e2, t2, n2) {
  if (!(e2 instanceof t2))
    throw TypeError("Incorrect " + (n2 ? n2 + " " : "") + "invocation");
  return e2;
};
var Oa = ve;
var Ra = function(e2, t2, n2) {
  var r2, u2, i2, o2, a2, s2, l2, c2 = n2 && n2.that, f2 = !(!n2 || !n2.AS_ENTRIES), p2 = !(!n2 || !n2.IS_ITERATOR), h2 = !(!n2 || !n2.INTERRUPTED), D2 = io(t2, c2, 1 + f2 + h2), g2 = function(e3) {
    return r2 && ao(r2), new so(true, e3);
  }, d2 = function(e3) {
    return f2 ? (no(e3), h2 ? D2(e3[0], e3[1], g2) : D2(e3[0], e3[1])) : h2 ? D2(e3, g2) : D2(e3);
  };
  if (p2)
    r2 = e2;
  else {
    if (typeof (u2 = oo(e2)) != "function")
      throw TypeError("Target is not iterable");
    if (ro(u2)) {
      for (i2 = 0, o2 = uo(e2.length); o2 > i2; i2++)
        if ((a2 = d2(e2[i2])) && a2 instanceof so)
          return a2;
      return new so(false);
    }
    r2 = u2.call(e2);
  }
  for (s2 = r2.next; !(l2 = s2.call(r2)).done; ) {
    try {
      a2 = d2(l2.value);
    } catch (e3) {
      throw ao(r2), e3;
    }
    if (typeof a2 == "object" && a2 && a2 instanceof so)
      return a2;
  }
  return new so(false);
};
var Ia = function(e2, t2) {
  if (!t2 && !co)
    return false;
  var n2 = false;
  try {
    var r2 = {};
    r2[lo] = function() {
      return { next: function() {
        return { done: n2 = true };
      } };
    }, e2(r2);
  } catch (e3) {
  }
  return n2;
};
var ja = zu;
var za = Qo.set;
var $a = aa;
var Pa = function(e2, t2) {
  if (ga(e2), da(t2) && t2.constructor === e2)
    return t2;
  var n2 = va.f(e2);
  return (0, n2.resolve)(t2), n2.promise;
};
var La = function(e2, t2) {
  var n2 = ya.console;
  n2 && n2.error && (arguments.length === 1 ? n2.error(e2) : n2.error(e2, t2));
};
var Ma = sa;
var Na = function(e2) {
  try {
    return { error: false, value: e2() };
  } catch (e3) {
    return { error: true, value: e3 };
  }
};
var Ua = Qe;
var qa = Ht;
var Za = Aa;
var Ga = Ao;
var Ha = Fn;
var Qa = Pn("species");
var Va = "Promise";
var Ya = Ua.get;
var Ka = Ua.set;
var Xa = Ua.getterFor(Va);
var Wa = xa && xa.prototype;
var Ja = xa;
var es = Wa;
var ts = ka.TypeError;
var ns = ka.document;
var rs = ka.process;
var us = Ma.f;
var is = us;
var os = !!(ns && ns.createEvent && ka.dispatchEvent);
var as = typeof PromiseRejectionEvent == "function";
var ss = false;
var ls = qa(Va, function() {
  var e2 = Oa(Ja) !== String(Ja);
  if (!e2 && Ha === 66)
    return true;
  if (Ha >= 51 && /native code/.test(Ja))
    return false;
  var t2 = new Ja(function(e3) {
    e3(1);
  }), n2 = function(e3) {
    e3(function() {
    }, function() {
    });
  };
  return (t2.constructor = {})[Qa] = n2, !(ss = t2.then(function() {
  }) instanceof n2) || !e2 && Za && !as;
});
var cs = ls || !Ia(function(e2) {
  Ja.all(e2).catch(function() {
  });
});
var fs = function(e2) {
  var t2;
  return !(!Sa(e2) || typeof (t2 = e2.then) != "function") && t2;
};
var ps = function(e2, t2) {
  if (!e2.notified) {
    e2.notified = true;
    var n2 = e2.reactions;
    $a(function() {
      for (var r2 = e2.value, u2 = e2.state == 1, i2 = 0; n2.length > i2; ) {
        var o2, a2, s2, l2 = n2[i2++], c2 = u2 ? l2.ok : l2.fail, f2 = l2.resolve, p2 = l2.reject, h2 = l2.domain;
        try {
          c2 ? (u2 || (e2.rejection === 2 && ds(e2), e2.rejection = 1), c2 === true ? o2 = r2 : (h2 && h2.enter(), o2 = c2(r2), h2 && (h2.exit(), s2 = true)), o2 === l2.promise ? p2(ts("Promise-chain cycle")) : (a2 = fs(o2)) ? a2.call(o2, f2, p2) : f2(o2)) : p2(r2);
        } catch (e3) {
          h2 && !s2 && h2.exit(), p2(e3);
        }
      }
      e2.reactions = [], e2.notified = false, t2 && !e2.rejection && Ds(e2);
    });
  }
};
var hs = function(e2, t2, n2) {
  var r2, u2;
  os ? ((r2 = ns.createEvent("Event")).promise = t2, r2.reason = n2, r2.initEvent(e2, false, true), ka.dispatchEvent(r2)) : r2 = { promise: t2, reason: n2 }, !as && (u2 = ka["on" + e2]) ? u2(r2) : e2 === "unhandledrejection" && La("Unhandled promise rejection", n2);
};
var Ds = function(e2) {
  za.call(ka, function() {
    var t2, n2 = e2.facade, r2 = e2.value;
    if (gs(e2) && (t2 = Na(function() {
      Ga ? rs.emit("unhandledRejection", r2, n2) : hs("unhandledrejection", n2, r2);
    }), e2.rejection = Ga || gs(e2) ? 2 : 1, t2.error))
      throw t2.value;
  });
};
var gs = function(e2) {
  return e2.rejection !== 1 && !e2.parent;
};
var ds = function(e2) {
  za.call(ka, function() {
    var t2 = e2.facade;
    Ga ? rs.emit("rejectionHandled", t2) : hs("rejectionhandled", t2, e2.value);
  });
};
var vs = function(e2, t2, n2) {
  return function(r2) {
    e2(t2, r2, n2);
  };
};
var ys = function(e2, t2, n2) {
  e2.done || (e2.done = true, n2 && (e2 = n2), e2.value = t2, e2.state = 2, ps(e2, true));
};
var As = function(e2, t2, n2) {
  if (!e2.done) {
    e2.done = true, n2 && (e2 = n2);
    try {
      if (e2.facade === t2)
        throw ts("Promise can't be resolved itself");
      var r2 = fs(t2);
      r2 ? $a(function() {
        var n3 = { done: false };
        try {
          r2.call(t2, vs(As, n3, e2), vs(ys, n3, e2));
        } catch (t3) {
          ys(n3, t3, e2);
        }
      }) : (e2.value = t2, e2.state = 1, ps(e2, false));
    } catch (t3) {
      ys({ done: false }, t3, e2);
    }
  }
};
if (ls && (es = (Ja = function(e2) {
  Ta(this, Ja, Va), _a(e2), fa.call(this);
  var t2 = Ya(this);
  try {
    e2(vs(As, t2), vs(ys, t2));
  } catch (e3) {
    ys(t2, e3);
  }
}).prototype, (fa = function(e2) {
  Ka(this, { type: Va, done: false, notified: false, parent: false, reactions: [], rejection: false, state: 0, value: void 0 });
}).prototype = ba(es, { then: function(e2, t2) {
  var n2 = Xa(this), r2 = us(ja(this, Ja));
  return r2.ok = typeof e2 != "function" || e2, r2.fail = typeof t2 == "function" && t2, r2.domain = Ga ? rs.domain : void 0, n2.parent = true, n2.reactions.push(r2), n2.state != 0 && ps(n2, false), r2.promise;
}, catch: function(e2) {
  return this.then(void 0, e2);
} }), pa = function() {
  var e2 = new fa(), t2 = Ya(e2);
  this.promise = e2, this.resolve = vs(As, t2), this.reject = vs(ys, t2);
}, Ma.f = us = function(e2) {
  return e2 === Ja || e2 === ha ? new pa(e2) : is(e2);
}, typeof xa == "function" && Wa !== Object.prototype)) {
  Da = Wa.then, ss || (Fa(Wa, "then", function(e2, t2) {
    var n2 = this;
    return new Ja(function(e3, t3) {
      Da.call(n2, e3, t3);
    }).then(e2, t2);
  }, { unsafe: true }), Fa(Wa, "catch", es.catch, { unsafe: true }));
  try {
    delete Wa.constructor;
  } catch (e2) {
  }
  Ca && Ca(Wa, es);
}
ma({ global: true, wrap: true, forced: ls }, { Promise: Ja }), wa(Ja, Va, false), Ba(Va), ha = Ea(Va), ma({ target: Va, stat: true, forced: ls }, { reject: function(e2) {
  var t2 = us(this);
  return t2.reject.call(void 0, e2), t2.promise;
} }), ma({ target: Va, stat: true, forced: ls }, { resolve: function(e2) {
  return Pa(this, e2);
} }), ma({ target: Va, stat: true, forced: cs }, { all: function(e2) {
  var t2 = this, n2 = us(t2), r2 = n2.resolve, u2 = n2.reject, i2 = Na(function() {
    var n3 = _a(t2.resolve), i3 = [], o2 = 0, a2 = 1;
    Ra(e2, function(e3) {
      var s2 = o2++, l2 = false;
      i3.push(void 0), a2++, n3.call(t2, e3).then(function(e4) {
        l2 || (l2 = true, i3[s2] = e4, --a2 || r2(i3));
      }, u2);
    }), --a2 || r2(i3);
  });
  return i2.error && u2(i2.value), n2.promise;
}, race: function(e2) {
  var t2 = this, n2 = us(t2), r2 = n2.reject, u2 = Na(function() {
    var u3 = _a(t2.resolve);
    Ra(e2, function(e3) {
      u3.call(t2, e3).then(n2.resolve, r2);
    });
  });
  return u2.error && r2(u2.value), n2.promise;
} });
var ms = O;
var ks = W;
var Es = m;
var xs = function(e2, t2, n2) {
  var r2 = ms(t2);
  r2 in e2 ? ks.f(e2, r2, Es(0, n2)) : e2[r2] = n2;
};
var Fs = D;
var bs = Fn;
var Cs = Pn("species");
var ws = function(e2) {
  return bs >= 51 || !Fs(function() {
    var t2 = [];
    return (t2.constructor = {})[Cs] = function() {
      return { foo: 1 };
    }, t2[e2](Boolean).foo !== 1;
  });
};
var Bs = en;
var Ss = _;
var _s = li;
var Ts = dt;
var Os = pt;
var Rs = S;
var Is = xs;
var js = Pn;
var zs = ws("slice");
var $s = js("species");
var Ps = [].slice;
var Ls = Math.max;
Bs({ target: "Array", proto: true, forced: !zs }, { slice: function(e2, t2) {
  var n2, r2, u2, i2 = Rs(this), o2 = Os(i2.length), a2 = Ts(e2, o2), s2 = Ts(t2 === void 0 ? o2 : t2, o2);
  if (_s(i2) && (typeof (n2 = i2.constructor) != "function" || n2 !== Array && !_s(n2.prototype) ? Ss(n2) && (n2 = n2[$s]) === null && (n2 = void 0) : n2 = void 0, n2 === Array || n2 === void 0))
    return Ps.call(i2, a2, s2);
  for (r2 = new (n2 === void 0 ? Array : n2)(Ls(s2 - a2, 0)), u2 = 0; a2 < s2; a2++, u2++)
    a2 in i2 && Is(r2, u2, i2[a2]);
  return r2.length = u2, r2;
} });
var Ms;
var Ns = Ct;
var Us = wt;
var qs = Object.keys || function(e2) {
  return Ns(e2, Us);
};
var Zs = W;
var Gs = ee;
var Hs = qs;
var Qs = g ? Object.defineProperties : function(e2, t2) {
  Gs(e2);
  for (var n2, r2 = Hs(t2), u2 = r2.length, i2 = 0; u2 > i2; )
    Zs.f(e2, n2 = r2[i2++], t2[n2]);
  return e2;
};
var Vs = ee;
var Ys = Qs;
var Ks = wt;
var Xs = Re;
var Ws = vo;
var Js = N;
var el = Oe("IE_PROTO");
var tl = function() {
};
var nl = function(e2) {
  return "<script>" + e2 + "<\/script>";
};
var rl = function() {
  try {
    Ms = document.domain && new ActiveXObject("htmlfile");
  } catch (e3) {
  }
  var e2, t2;
  rl = Ms ? function(e3) {
    e3.write(nl("")), e3.close();
    var t3 = e3.parentWindow.Object;
    return e3 = null, t3;
  }(Ms) : ((t2 = Js("iframe")).style.display = "none", Ws.appendChild(t2), t2.src = String("javascript:"), (e2 = t2.contentWindow.document).open(), e2.write(nl("document.F=Object")), e2.close(), e2.F);
  for (var n2 = Ks.length; n2--; )
    delete rl.prototype[Ks[n2]];
  return rl();
};
Xs[el] = true;
var ul = Object.create || function(e2, t2) {
  var n2;
  return e2 !== null ? (tl.prototype = Vs(e2), n2 = new tl(), tl.prototype = null, n2[el] = e2) : n2 = rl(), t2 === void 0 ? n2 : Ys(n2, t2);
};
var il = ul;
var ol = W;
var al = Pn("unscopables");
var sl = Array.prototype;
sl[al] == null && ol.f(sl, al, { configurable: true, value: il(null) });
var ll;
var cl;
var fl;
var pl = function(e2) {
  sl[al][e2] = true;
};
var hl = !D(function() {
  function e2() {
  }
  return e2.prototype.constructor = null, Object.getPrototypeOf(new e2()) !== e2.prototype;
});
var Dl = $;
var gl = I;
var dl = hl;
var vl = Oe("IE_PROTO");
var yl = Object.prototype;
var Al = dl ? Object.getPrototypeOf : function(e2) {
  return e2 = gl(e2), Dl(e2, vl) ? e2[vl] : typeof e2.constructor == "function" && e2 instanceof e2.constructor ? e2.constructor.prototype : e2 instanceof Object ? yl : null;
};
var ml = D;
var kl = Al;
var El = se;
var xl = $;
var Fl = Pn("iterator");
var bl = false;
[].keys && ("next" in (fl = [].keys()) ? (cl = kl(kl(fl))) !== Object.prototype && (ll = cl) : bl = true), (ll == null || ml(function() {
  var e2 = {};
  return ll[Fl].call(e2) !== e2;
})) && (ll = {}), xl(ll, Fl) || El(ll, Fl, function() {
  return this;
});
var Cl = { IteratorPrototype: ll, BUGGY_SAFARI_ITERATORS: bl };
var wl = Cl.IteratorPrototype;
var Bl = ul;
var Sl = m;
var _l = Qi;
var Tl = Vi;
var Ol = function() {
  return this;
};
var Rl = en;
var Il = function(e2, t2, n2) {
  var r2 = t2 + " Iterator";
  return e2.prototype = Bl(wl, { next: Sl(1, n2) }), _l(e2, r2, false), Tl[r2] = Ol, e2;
};
var jl = Al;
var zl = br;
var $l = Qi;
var Pl = se;
var Ll = le.exports;
var Ml = Vi;
var Nl = Cl.IteratorPrototype;
var Ul = Cl.BUGGY_SAFARI_ITERATORS;
var ql = Pn("iterator");
var Zl = function() {
  return this;
};
var Gl = function(e2, t2, n2, r2, u2, i2, o2) {
  Il(n2, t2, r2);
  var a2, s2, l2, c2 = function(e3) {
    if (e3 === u2 && g2)
      return g2;
    if (!Ul && e3 in h2)
      return h2[e3];
    switch (e3) {
      case "keys":
      case "values":
      case "entries":
        return function() {
          return new n2(this, e3);
        };
    }
    return function() {
      return new n2(this);
    };
  }, f2 = t2 + " Iterator", p2 = false, h2 = e2.prototype, D2 = h2[ql] || h2["@@iterator"] || u2 && h2[u2], g2 = !Ul && D2 || c2(u2), d2 = t2 == "Array" && h2.entries || D2;
  if (d2 && (a2 = jl(d2.call(new e2())), Nl !== Object.prototype && a2.next && (jl(a2) !== Nl && (zl ? zl(a2, Nl) : typeof a2[ql] != "function" && Pl(a2, ql, Zl)), $l(a2, f2, true))), u2 == "values" && D2 && D2.name !== "values" && (p2 = true, g2 = function() {
    return D2.call(this);
  }), h2[ql] !== g2 && Pl(h2, ql, g2), Ml[t2] = g2, u2)
    if (s2 = { values: c2("values"), keys: i2 ? g2 : c2("keys"), entries: c2("entries") }, o2)
      for (l2 in s2)
        (Ul || p2 || !(l2 in h2)) && Ll(h2, l2, s2[l2]);
    else
      Rl({ target: t2, proto: true, forced: Ul || p2 }, s2);
  return s2;
};
var Hl = S;
var Ql = pl;
var Vl = Vi;
var Yl = Qe;
var Kl = Gl;
var Xl = Yl.set;
var Wl = Yl.getterFor("Array Iterator");
var Jl = Kl(Array, "Array", function(e2, t2) {
  Xl(this, { type: "Array Iterator", target: Hl(e2), index: 0, kind: t2 });
}, function() {
  var e2 = Wl(this), t2 = e2.target, n2 = e2.kind, r2 = e2.index++;
  return !t2 || r2 >= t2.length ? (e2.target = void 0, { value: void 0, done: true }) : n2 == "keys" ? { value: r2, done: false } : n2 == "values" ? { value: t2[r2], done: false } : { value: [r2, t2[r2]], done: false };
}, "values");
Vl.Arguments = Vl.Array, Ql("keys"), Ql("values"), Ql("entries");
var ec = tr.charAt;
var tc = Qe;
var nc = Gl;
var rc = tc.set;
var uc = tc.getterFor("String Iterator");
nc(String, "String", function(e2) {
  rc(this, { type: "String Iterator", string: String(e2), index: 0 });
}, function() {
  var e2, t2 = uc(this), n2 = t2.string, r2 = t2.index;
  return r2 >= n2.length ? { value: void 0, done: true } : (e2 = ec(n2, r2), t2.index += e2.length, { value: e2, done: false });
});
var ic = p;
var oc = ii;
var ac = Jl;
var sc = se;
var lc = Pn;
var cc = lc("iterator");
var fc = lc("toStringTag");
var pc = ac.values;
for (hc in oc) {
  Dc = ic[hc], gc = Dc && Dc.prototype;
  if (gc) {
    if (gc[cc] !== pc)
      try {
        sc(gc, cc, pc);
      } catch (e2) {
        gc[cc] = pc;
      }
    if (gc[fc] || sc(gc, fc, hc), oc[hc]) {
      for (dc in ac)
        if (gc[dc] !== ac[dc])
          try {
            sc(gc, dc, ac[dc]);
          } catch (e2) {
            gc[dc] = ac[dc];
          }
    }
  }
}
var Dc;
var gc;
var dc;
var hc;
var vc = en;
var yc = D;
var Ac = li;
var mc = _;
var kc = I;
var Ec = pt;
var xc = xs;
var Fc = hi;
var bc = ws;
var Cc = Fn;
var wc = Pn("isConcatSpreadable");
var Bc = Cc >= 51 || !yc(function() {
  var e2 = [];
  return e2[wc] = false, e2.concat()[0] !== e2;
});
var Sc = bc("concat");
var _c = function(e2) {
  if (!mc(e2))
    return false;
  var t2 = e2[wc];
  return t2 !== void 0 ? !!t2 : Ac(e2);
};
vc({ target: "Array", proto: true, forced: !Bc || !Sc }, { concat: function(e2) {
  var t2, n2, r2, u2, i2, o2 = kc(this), a2 = Fc(o2, 0), s2 = 0;
  for (t2 = -1, r2 = arguments.length; t2 < r2; t2++)
    if (_c(i2 = t2 === -1 ? o2 : arguments[t2])) {
      if (s2 + (u2 = Ec(i2.length)) > 9007199254740991)
        throw TypeError("Maximum allowed index exceeded");
      for (n2 = 0; n2 < u2; n2++, s2++)
        n2 in i2 && xc(a2, s2, i2[n2]);
    } else {
      if (s2 >= 9007199254740991)
        throw TypeError("Maximum allowed index exceeded");
      xc(a2, s2++, i2);
    }
  return a2.length = s2, a2;
} });
var Tc = en;
var Oc = dt;
var Rc = lt;
var Ic = pt;
var jc = I;
var zc = hi;
var $c = xs;
var Pc = ws("splice");
var Lc = Math.max;
var Mc = Math.min;
Tc({ target: "Array", proto: true, forced: !Pc }, { splice: function(e2, t2) {
  var n2, r2, u2, i2, o2, a2, s2 = jc(this), l2 = Ic(s2.length), c2 = Oc(e2, l2), f2 = arguments.length;
  if (f2 === 0 ? n2 = r2 = 0 : f2 === 1 ? (n2 = 0, r2 = l2 - c2) : (n2 = f2 - 2, r2 = Mc(Lc(Rc(t2), 0), l2 - c2)), l2 + n2 - r2 > 9007199254740991)
    throw TypeError("Maximum allowed length exceeded");
  for (u2 = zc(s2, r2), i2 = 0; i2 < r2; i2++)
    (o2 = c2 + i2) in s2 && $c(u2, i2, s2[o2]);
  if (u2.length = r2, n2 < r2) {
    for (i2 = c2; i2 < l2 - r2; i2++)
      a2 = i2 + n2, (o2 = i2 + r2) in s2 ? s2[a2] = s2[o2] : delete s2[a2];
    for (i2 = l2; i2 > l2 - r2 + n2; i2--)
      delete s2[i2 - 1];
  } else if (n2 > r2)
    for (i2 = l2 - r2; i2 > c2; i2--)
      a2 = i2 + n2 - 1, (o2 = i2 + r2 - 1) in s2 ? s2[a2] = s2[o2] : delete s2[a2];
  for (i2 = 0; i2 < n2; i2++)
    s2[i2 + c2] = arguments[i2 + 2];
  return s2.length = l2 - r2 + n2, u2;
} });
var Nc = ki.map;
en({ target: "Array", proto: true, forced: !ws("map") }, { map: function(e2) {
  return Nc(this, e2, arguments.length > 1 ? arguments[1] : void 0);
} });
var Uc = en;
var qc = ei.start;
var Zc = ri("trimStart");
var Gc = Zc ? function() {
  return qc(this);
} : "".trimStart;
Uc({ target: "String", proto: true, forced: Zc }, { trimStart: Gc, trimLeft: Gc });
var Hc = Object.is || function(e2, t2) {
  return e2 === t2 ? e2 !== 0 || 1 / e2 == 1 / t2 : e2 != e2 && t2 != t2;
};
var Qc = ee;
var Vc = C;
var Yc = Hc;
var Kc = fr;
Xn("search", 1, function(e2, t2, n2) {
  return [function(t3) {
    var n3 = Vc(this), r2 = t3 == null ? void 0 : t3[e2];
    return r2 !== void 0 ? r2.call(t3, n3) : new RegExp(t3)[e2](String(n3));
  }, function(e3) {
    var r2 = n2(t2, e3, this);
    if (r2.done)
      return r2.value;
    var u2 = Qc(e3), i2 = String(this), o2 = u2.lastIndex;
    Yc(o2, 0) || (u2.lastIndex = 0);
    var a2 = Kc(u2, i2);
    return Yc(u2.lastIndex, o2) || (u2.lastIndex = o2), a2 === null ? -1 : a2.index;
  }];
});
var Xc = en;
var Wc = ei.end;
var Jc = ri("trimEnd");
var ef = Jc ? function() {
  return Wc(this);
} : "".trimEnd;
Xc({ target: "String", proto: true, forced: Jc }, { trimEnd: ef, trimRight: ef });
var tf = ki.filter;
en({ target: "Array", proto: true, forced: !ws("filter") }, { filter: function(e2) {
  return tf(this, e2, arguments.length > 1 ? arguments[1] : void 0);
} });
var nf = C;
var rf = /"/g;
var uf = D;
var of = function(e2, t2, n2, r2) {
  var u2 = String(nf(e2)), i2 = "<" + t2;
  return n2 !== "" && (i2 += " " + n2 + '="' + String(r2).replace(rf, "&quot;") + '"'), i2 + ">" + u2 + "</" + t2 + ">";
};
en({ target: "String", proto: true, forced: function(e2) {
  return uf(function() {
    var t2 = ""[e2]('"');
    return t2 !== t2.toLowerCase() || t2.split('"').length > 3;
  });
}("link") }, { link: function(e2) {
  return of(this, "a", "href", e2);
} });
var af = I;
var sf = qs;
en({ target: "Object", stat: true, forced: D(function() {
  sf(1);
}) }, { keys: function(e2) {
  return sf(af(e2));
} });
var lf = kt.includes;
var cf = pl;
en({ target: "Array", proto: true }, { includes: function(e2) {
  return lf(this, e2, arguments.length > 1 ? arguments[1] : void 0);
} }), cf("includes");
var ff = Tr;
var pf = Pn("match");
var hf = function(e2) {
  if (ff(e2))
    throw TypeError("The method doesn't accept regular expressions");
  return e2;
};
var Df = C;
function gf() {
  return { baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
}
en({ target: "String", proto: true, forced: !function(e2) {
  var t2 = /./;
  try {
    "/./"[e2](t2);
  } catch (n2) {
    try {
      return t2[pf] = false, "/./"[e2](t2);
    } catch (e3) {
    }
  }
  return false;
}("includes") }, { includes: function(e2) {
  return !!~String(Df(this)).indexOf(hf(e2), arguments.length > 1 ? arguments[1] : void 0);
} });
var df = { baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
var vf = /[&<>"']/;
var yf = /[&<>"']/g;
var Af = /[<>"']|&(?!#?\w+;)/;
var mf = /[<>"']|&(?!#?\w+;)/g;
var kf = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var Ef = function(e2) {
  return kf[e2];
};
function xf(e2, t2) {
  if (t2) {
    if (vf.test(e2))
      return e2.replace(yf, Ef);
  } else if (Af.test(e2))
    return e2.replace(mf, Ef);
  return e2;
}
var Ff = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function bf(e2) {
  return e2.replace(Ff, function(e3, t2) {
    return (t2 = t2.toLowerCase()) === "colon" ? ":" : t2.charAt(0) === "#" ? t2.charAt(1) === "x" ? String.fromCharCode(parseInt(t2.substring(2), 16)) : String.fromCharCode(+t2.substring(1)) : "";
  });
}
var Cf = /(^|[^\[])\^/g;
function wf(e2, t2) {
  e2 = e2.source || e2, t2 = t2 || "";
  var n2 = { replace: function(t3, r2) {
    return r2 = (r2 = r2.source || r2).replace(Cf, "$1"), e2 = e2.replace(t3, r2), n2;
  }, getRegex: function() {
    return new RegExp(e2, t2);
  } };
  return n2;
}
var Bf = /[^\w:]/g;
var Sf = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function _f(e2, t2, n2) {
  if (e2) {
    var r2;
    try {
      r2 = decodeURIComponent(bf(n2)).replace(Bf, "").toLowerCase();
    } catch (e3) {
      return null;
    }
    if (r2.indexOf("javascript:") === 0 || r2.indexOf("vbscript:") === 0 || r2.indexOf("data:") === 0)
      return null;
  }
  t2 && !Sf.test(n2) && (n2 = function(e3, t3) {
    Tf[" " + e3] || (Of.test(e3) ? Tf[" " + e3] = e3 + "/" : Tf[" " + e3] = Pf(e3, "/", true));
    var n3 = (e3 = Tf[" " + e3]).indexOf(":") === -1;
    return t3.substring(0, 2) === "//" ? n3 ? t3 : e3.replace(Rf, "$1") + t3 : t3.charAt(0) === "/" ? n3 ? t3 : e3.replace(If, "$1") + t3 : e3 + t3;
  }(t2, n2));
  try {
    n2 = encodeURI(n2).replace(/%25/g, "%");
  } catch (e3) {
    return null;
  }
  return n2;
}
var Tf = {};
var Of = /^[^:]+:\/*[^/]*$/;
var Rf = /^([^:]+:)[\s\S]*$/;
var If = /^([^:]+:\/*[^/]*)[\s\S]*$/;
var jf = { exec: function() {
} };
function zf(e2) {
  for (var t2, n2, r2 = 1; r2 < arguments.length; r2++)
    for (n2 in t2 = arguments[r2])
      Object.prototype.hasOwnProperty.call(t2, n2) && (e2[n2] = t2[n2]);
  return e2;
}
function $f(e2, t2) {
  var n2 = e2.replace(/\|/g, function(e3, t3, n3) {
    for (var r3 = false, u2 = t3; --u2 >= 0 && n3[u2] === "\\"; )
      r3 = !r3;
    return r3 ? "|" : " |";
  }).split(/ \|/), r2 = 0;
  if (n2[0].trim() || n2.shift(), n2.length > 0 && !n2[n2.length - 1].trim() && n2.pop(), n2.length > t2)
    n2.splice(t2);
  else
    for (; n2.length < t2; )
      n2.push("");
  for (; r2 < n2.length; r2++)
    n2[r2] = n2[r2].trim().replace(/\\\|/g, "|");
  return n2;
}
function Pf(e2, t2, n2) {
  var r2 = e2.length;
  if (r2 === 0)
    return "";
  for (var u2 = 0; u2 < r2; ) {
    var i2 = e2.charAt(r2 - u2 - 1);
    if (i2 !== t2 || n2) {
      if (i2 === t2 || !n2)
        break;
      u2++;
    } else
      u2++;
  }
  return e2.substr(0, r2 - u2);
}
function Lf(e2) {
  e2 && e2.sanitize && !e2.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
}
function Mf(e2, t2) {
  if (t2 < 1)
    return "";
  for (var n2 = ""; t2 > 1; )
    1 & t2 && (n2 += e2), t2 >>= 1, e2 += e2;
  return n2 + e2;
}
function Nf(e2, t2, n2, r2) {
  var u2 = t2.href, i2 = t2.title ? xf(t2.title) : null, o2 = e2[1].replace(/\\([\[\]])/g, "$1");
  if (e2[0].charAt(0) !== "!") {
    r2.state.inLink = true;
    var a2 = { type: "link", raw: n2, href: u2, title: i2, text: o2, tokens: r2.inlineTokens(o2, []) };
    return r2.state.inLink = false, a2;
  }
  return { type: "image", raw: n2, href: u2, title: i2, text: xf(o2) };
}
var Uf = function() {
  function e2(n2) {
    t(this, e2), this.options = n2 || df;
  }
  return r(e2, [{ key: "space", value: function(e3) {
    var t2 = this.rules.block.newline.exec(e3);
    if (t2 && t2[0].length > 0)
      return { type: "space", raw: t2[0] };
  } }, { key: "code", value: function(e3) {
    var t2 = this.rules.block.code.exec(e3);
    if (t2) {
      var n2 = t2[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: t2[0], codeBlockStyle: "indented", text: this.options.pedantic ? n2 : Pf(n2, "\n") };
    }
  } }, { key: "fences", value: function(e3) {
    var t2 = this.rules.block.fences.exec(e3);
    if (t2) {
      var n2 = t2[0], r2 = function(e4, t3) {
        var n3 = e4.match(/^(\s+)(?:```)/);
        if (n3 === null)
          return t3;
        var r3 = n3[1];
        return t3.split("\n").map(function(e5) {
          var t4 = e5.match(/^\s+/);
          return t4 === null ? e5 : o(t4, 1)[0].length >= r3.length ? e5.slice(r3.length) : e5;
        }).join("\n");
      }(n2, t2[3] || "");
      return { type: "code", raw: n2, lang: t2[2] ? t2[2].trim() : t2[2], text: r2 };
    }
  } }, { key: "heading", value: function(e3) {
    var t2 = this.rules.block.heading.exec(e3);
    if (t2) {
      var n2 = t2[2].trim();
      if (/#$/.test(n2)) {
        var r2 = Pf(n2, "#");
        this.options.pedantic ? n2 = r2.trim() : r2 && !/ $/.test(r2) || (n2 = r2.trim());
      }
      var u2 = { type: "heading", raw: t2[0], depth: t2[1].length, text: n2, tokens: [] };
      return this.lexer.inline(u2.text, u2.tokens), u2;
    }
  } }, { key: "hr", value: function(e3) {
    var t2 = this.rules.block.hr.exec(e3);
    if (t2)
      return { type: "hr", raw: t2[0] };
  } }, { key: "blockquote", value: function(e3) {
    var t2 = this.rules.block.blockquote.exec(e3);
    if (t2) {
      var n2 = t2[0].replace(/^ *> ?/gm, "");
      return { type: "blockquote", raw: t2[0], tokens: this.lexer.blockTokens(n2, []), text: n2 };
    }
  } }, { key: "list", value: function(e3) {
    var t2 = this.rules.block.list.exec(e3);
    if (t2) {
      var n2, r2, u2, i2, o2, a2, s2, c2, f2, p2, h2, D2, g2 = t2[1].trim(), d2 = g2.length > 1, v2 = { type: "list", raw: "", ordered: d2, start: d2 ? +g2.slice(0, -1) : "", loose: false, items: [] };
      g2 = d2 ? "\\d{1,9}\\".concat(g2.slice(-1)) : "\\".concat(g2), this.options.pedantic && (g2 = d2 ? g2 : "[*+-]");
      for (var y2 = new RegExp("^( {0,3}".concat(g2, ")((?: [^\\n]*)?(?:\\n|$))")); e3 && (D2 = false, t2 = y2.exec(e3)) && !this.rules.block.hr.test(e3); ) {
        if (n2 = t2[0], e3 = e3.substring(n2.length), c2 = t2[2].split("\n", 1)[0], f2 = e3.split("\n", 1)[0], this.options.pedantic ? (i2 = 2, h2 = c2.trimLeft()) : (i2 = (i2 = t2[2].search(/[^ ]/)) > 4 ? 1 : i2, h2 = c2.slice(i2), i2 += t2[1].length), a2 = false, !c2 && /^ *$/.test(f2) && (n2 += f2 + "\n", e3 = e3.substring(f2.length + 1), D2 = true), !D2)
          for (var A2 = new RegExp("^ {0,".concat(Math.min(3, i2 - 1), "}(?:[*+-]|\\d{1,9}[.)])")); e3 && (c2 = p2 = e3.split("\n", 1)[0], this.options.pedantic && (c2 = c2.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !A2.test(c2)); ) {
            if (c2.search(/[^ ]/) >= i2 || !c2.trim())
              h2 += "\n" + c2.slice(i2);
            else {
              if (a2)
                break;
              h2 += "\n" + c2;
            }
            a2 || c2.trim() || (a2 = true), n2 += p2 + "\n", e3 = e3.substring(p2.length + 1);
          }
        v2.loose || (s2 ? v2.loose = true : /\n *\n *$/.test(n2) && (s2 = true)), this.options.gfm && (r2 = /^\[[ xX]\] /.exec(h2)) && (u2 = r2[0] !== "[ ] ", h2 = h2.replace(/^\[[ xX]\] +/, "")), v2.items.push({ type: "list_item", raw: n2, task: !!r2, checked: u2, loose: false, text: h2 }), v2.raw += n2;
      }
      v2.items[v2.items.length - 1].raw = n2.trimRight(), v2.items[v2.items.length - 1].text = h2.trimRight(), v2.raw = v2.raw.trimRight();
      var m2 = v2.items.length;
      for (o2 = 0; o2 < m2; o2++) {
        this.lexer.state.top = false, v2.items[o2].tokens = this.lexer.blockTokens(v2.items[o2].text, []);
        var k2 = v2.items[o2].tokens.filter(function(e4) {
          return e4.type === "space";
        }), E2 = k2.every(function(e4) {
          var t3, n3 = 0, r3 = l(e4.raw.split(""));
          try {
            for (r3.s(); !(t3 = r3.n()).done; ) {
              if (t3.value === "\n" && (n3 += 1), n3 > 1)
                return true;
            }
          } catch (e5) {
            r3.e(e5);
          } finally {
            r3.f();
          }
          return false;
        });
        !v2.loose && k2.length && E2 && (v2.loose = true, v2.items[o2].loose = true);
      }
      return v2;
    }
  } }, { key: "html", value: function(e3) {
    var t2 = this.rules.block.html.exec(e3);
    if (t2) {
      var n2 = { type: "html", raw: t2[0], pre: !this.options.sanitizer && (t2[1] === "pre" || t2[1] === "script" || t2[1] === "style"), text: t2[0] };
      return this.options.sanitize && (n2.type = "paragraph", n2.text = this.options.sanitizer ? this.options.sanitizer(t2[0]) : xf(t2[0]), n2.tokens = [], this.lexer.inline(n2.text, n2.tokens)), n2;
    }
  } }, { key: "def", value: function(e3) {
    var t2 = this.rules.block.def.exec(e3);
    if (t2)
      return t2[3] && (t2[3] = t2[3].substring(1, t2[3].length - 1)), { type: "def", tag: t2[1].toLowerCase().replace(/\s+/g, " "), raw: t2[0], href: t2[2], title: t2[3] };
  } }, { key: "table", value: function(e3) {
    var t2 = this.rules.block.table.exec(e3);
    if (t2) {
      var n2 = { type: "table", header: $f(t2[1]).map(function(e4) {
        return { text: e4 };
      }), align: t2[2].replace(/^ *|\| *$/g, "").split(/ *\| */), rows: t2[3] && t2[3].trim() ? t2[3].replace(/\n[ \t]*$/, "").split("\n") : [] };
      if (n2.header.length === n2.align.length) {
        n2.raw = t2[0];
        var r2, u2, i2, o2, a2 = n2.align.length;
        for (r2 = 0; r2 < a2; r2++)
          /^ *-+: *$/.test(n2.align[r2]) ? n2.align[r2] = "right" : /^ *:-+: *$/.test(n2.align[r2]) ? n2.align[r2] = "center" : /^ *:-+ *$/.test(n2.align[r2]) ? n2.align[r2] = "left" : n2.align[r2] = null;
        for (a2 = n2.rows.length, r2 = 0; r2 < a2; r2++)
          n2.rows[r2] = $f(n2.rows[r2], n2.header.length).map(function(e4) {
            return { text: e4 };
          });
        for (a2 = n2.header.length, u2 = 0; u2 < a2; u2++)
          n2.header[u2].tokens = [], this.lexer.inlineTokens(n2.header[u2].text, n2.header[u2].tokens);
        for (a2 = n2.rows.length, u2 = 0; u2 < a2; u2++)
          for (o2 = n2.rows[u2], i2 = 0; i2 < o2.length; i2++)
            o2[i2].tokens = [], this.lexer.inlineTokens(o2[i2].text, o2[i2].tokens);
        return n2;
      }
    }
  } }, { key: "lheading", value: function(e3) {
    var t2 = this.rules.block.lheading.exec(e3);
    if (t2) {
      var n2 = { type: "heading", raw: t2[0], depth: t2[2].charAt(0) === "=" ? 1 : 2, text: t2[1], tokens: [] };
      return this.lexer.inline(n2.text, n2.tokens), n2;
    }
  } }, { key: "paragraph", value: function(e3) {
    var t2 = this.rules.block.paragraph.exec(e3);
    if (t2) {
      var n2 = { type: "paragraph", raw: t2[0], text: t2[1].charAt(t2[1].length - 1) === "\n" ? t2[1].slice(0, -1) : t2[1], tokens: [] };
      return this.lexer.inline(n2.text, n2.tokens), n2;
    }
  } }, { key: "text", value: function(e3) {
    var t2 = this.rules.block.text.exec(e3);
    if (t2) {
      var n2 = { type: "text", raw: t2[0], text: t2[0], tokens: [] };
      return this.lexer.inline(n2.text, n2.tokens), n2;
    }
  } }, { key: "escape", value: function(e3) {
    var t2 = this.rules.inline.escape.exec(e3);
    if (t2)
      return { type: "escape", raw: t2[0], text: xf(t2[1]) };
  } }, { key: "tag", value: function(e3) {
    var t2 = this.rules.inline.tag.exec(e3);
    if (t2)
      return !this.lexer.state.inLink && /^<a /i.test(t2[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(t2[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t2[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t2[0]) && (this.lexer.state.inRawBlock = false), { type: this.options.sanitize ? "text" : "html", raw: t2[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t2[0]) : xf(t2[0]) : t2[0] };
  } }, { key: "link", value: function(e3) {
    var t2 = this.rules.inline.link.exec(e3);
    if (t2) {
      var n2 = t2[2].trim();
      if (!this.options.pedantic && /^</.test(n2)) {
        if (!/>$/.test(n2))
          return;
        var r2 = Pf(n2.slice(0, -1), "\\");
        if ((n2.length - r2.length) % 2 == 0)
          return;
      } else {
        var u2 = function(e4, t3) {
          if (e4.indexOf(t3[1]) === -1)
            return -1;
          for (var n3 = e4.length, r3 = 0, u3 = 0; u3 < n3; u3++)
            if (e4[u3] === "\\")
              u3++;
            else if (e4[u3] === t3[0])
              r3++;
            else if (e4[u3] === t3[1] && --r3 < 0)
              return u3;
          return -1;
        }(t2[2], "()");
        if (u2 > -1) {
          var i2 = (t2[0].indexOf("!") === 0 ? 5 : 4) + t2[1].length + u2;
          t2[2] = t2[2].substring(0, u2), t2[0] = t2[0].substring(0, i2).trim(), t2[3] = "";
        }
      }
      var o2 = t2[2], a2 = "";
      if (this.options.pedantic) {
        var s2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o2);
        s2 && (o2 = s2[1], a2 = s2[3]);
      } else
        a2 = t2[3] ? t2[3].slice(1, -1) : "";
      return o2 = o2.trim(), /^</.test(o2) && (o2 = this.options.pedantic && !/>$/.test(n2) ? o2.slice(1) : o2.slice(1, -1)), Nf(t2, { href: o2 ? o2.replace(this.rules.inline._escapes, "$1") : o2, title: a2 ? a2.replace(this.rules.inline._escapes, "$1") : a2 }, t2[0], this.lexer);
    }
  } }, { key: "reflink", value: function(e3, t2) {
    var n2;
    if ((n2 = this.rules.inline.reflink.exec(e3)) || (n2 = this.rules.inline.nolink.exec(e3))) {
      var r2 = (n2[2] || n2[1]).replace(/\s+/g, " ");
      if (!(r2 = t2[r2.toLowerCase()]) || !r2.href) {
        var u2 = n2[0].charAt(0);
        return { type: "text", raw: u2, text: u2 };
      }
      return Nf(n2, r2, n2[0], this.lexer);
    }
  } }, { key: "emStrong", value: function(e3, t2) {
    var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", r2 = this.rules.inline.emStrong.lDelim.exec(e3);
    if (r2 && (!r2[3] || !n2.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {
      var u2 = r2[1] || r2[2] || "";
      if (!u2 || u2 && (n2 === "" || this.rules.inline.punctuation.exec(n2))) {
        var i2, o2, a2 = r2[0].length - 1, s2 = a2, l2 = 0, c2 = r2[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
        for (c2.lastIndex = 0, t2 = t2.slice(-1 * e3.length + a2); (r2 = c2.exec(t2)) != null; )
          if (i2 = r2[1] || r2[2] || r2[3] || r2[4] || r2[5] || r2[6])
            if (o2 = i2.length, r2[3] || r2[4])
              s2 += o2;
            else if (!((r2[5] || r2[6]) && a2 % 3) || (a2 + o2) % 3) {
              if (!((s2 -= o2) > 0)) {
                if (o2 = Math.min(o2, o2 + s2 + l2), Math.min(a2, o2) % 2) {
                  var f2 = e3.slice(1, a2 + r2.index + o2);
                  return { type: "em", raw: e3.slice(0, a2 + r2.index + o2 + 1), text: f2, tokens: this.lexer.inlineTokens(f2, []) };
                }
                var p2 = e3.slice(2, a2 + r2.index + o2 - 1);
                return { type: "strong", raw: e3.slice(0, a2 + r2.index + o2 + 1), text: p2, tokens: this.lexer.inlineTokens(p2, []) };
              }
            } else
              l2 += o2;
      }
    }
  } }, { key: "codespan", value: function(e3) {
    var t2 = this.rules.inline.code.exec(e3);
    if (t2) {
      var n2 = t2[2].replace(/\n/g, " "), r2 = /[^ ]/.test(n2), u2 = /^ /.test(n2) && / $/.test(n2);
      return r2 && u2 && (n2 = n2.substring(1, n2.length - 1)), n2 = xf(n2, true), { type: "codespan", raw: t2[0], text: n2 };
    }
  } }, { key: "br", value: function(e3) {
    var t2 = this.rules.inline.br.exec(e3);
    if (t2)
      return { type: "br", raw: t2[0] };
  } }, { key: "del", value: function(e3) {
    var t2 = this.rules.inline.del.exec(e3);
    if (t2)
      return { type: "del", raw: t2[0], text: t2[2], tokens: this.lexer.inlineTokens(t2[2], []) };
  } }, { key: "autolink", value: function(e3, t2) {
    var n2, r2, u2 = this.rules.inline.autolink.exec(e3);
    if (u2)
      return r2 = u2[2] === "@" ? "mailto:" + (n2 = xf(this.options.mangle ? t2(u2[1]) : u2[1])) : n2 = xf(u2[1]), { type: "link", raw: u2[0], text: n2, href: r2, tokens: [{ type: "text", raw: n2, text: n2 }] };
  } }, { key: "url", value: function(e3, t2) {
    var n2;
    if (n2 = this.rules.inline.url.exec(e3)) {
      var r2, u2;
      if (n2[2] === "@")
        u2 = "mailto:" + (r2 = xf(this.options.mangle ? t2(n2[0]) : n2[0]));
      else {
        var i2;
        do {
          i2 = n2[0], n2[0] = this.rules.inline._backpedal.exec(n2[0])[0];
        } while (i2 !== n2[0]);
        r2 = xf(n2[0]), u2 = n2[1] === "www." ? "http://" + r2 : r2;
      }
      return { type: "link", raw: n2[0], text: r2, href: u2, tokens: [{ type: "text", raw: r2, text: r2 }] };
    }
  } }, { key: "inlineText", value: function(e3, t2) {
    var n2, r2 = this.rules.inline.text.exec(e3);
    if (r2)
      return n2 = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r2[0]) : xf(r2[0]) : r2[0] : xf(this.options.smartypants ? t2(r2[0]) : r2[0]), { type: "text", raw: r2[0], text: n2 };
  } }]), e2;
}();
var qf = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/, table: jf, lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ };
qf.def = wf(qf.def).replace("label", qf._label).replace("title", qf._title).getRegex(), qf.bullet = /(?:[*+-]|\d{1,9}[.)])/, qf.listItemStart = wf(/^( *)(bull) */).replace("bull", qf.bullet).getRegex(), qf.list = wf(qf.list).replace(/bull/g, qf.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + qf.def.source + ")").getRegex(), qf._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", qf._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, qf.html = wf(qf.html, "i").replace("comment", qf._comment).replace("tag", qf._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), qf.paragraph = wf(qf._paragraph).replace("hr", qf.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qf._tag).getRegex(), qf.blockquote = wf(qf.blockquote).replace("paragraph", qf.paragraph).getRegex(), qf.normal = zf({}, qf), qf.gfm = zf({}, qf.normal, { table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }), qf.gfm.table = wf(qf.gfm.table).replace("hr", qf.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qf._tag).getRegex(), qf.gfm.paragraph = wf(qf._paragraph).replace("hr", qf.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", qf.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qf._tag).getRegex(), qf.pedantic = zf({}, qf.normal, { html: wf(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", qf._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: jf, paragraph: wf(qf.normal._paragraph).replace("hr", qf.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", qf.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() });
var Zf = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: jf, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(ref)\]/, nolink: /^!?\[(ref)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/, rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/, rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: jf, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\spunctuation])/ };
function Gf(e2) {
  return e2.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function Hf(e2) {
  var t2, n2, r2 = "", u2 = e2.length;
  for (t2 = 0; t2 < u2; t2++)
    n2 = e2.charCodeAt(t2), Math.random() > 0.5 && (n2 = "x" + n2.toString(16)), r2 += "&#" + n2 + ";";
  return r2;
}
Zf._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", Zf.punctuation = wf(Zf.punctuation).replace(/punctuation/g, Zf._punctuation).getRegex(), Zf.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, Zf.escapedEmSt = /\\\*|\\_/g, Zf._comment = wf(qf._comment).replace("(?:-->|$)", "-->").getRegex(), Zf.emStrong.lDelim = wf(Zf.emStrong.lDelim).replace(/punct/g, Zf._punctuation).getRegex(), Zf.emStrong.rDelimAst = wf(Zf.emStrong.rDelimAst, "g").replace(/punct/g, Zf._punctuation).getRegex(), Zf.emStrong.rDelimUnd = wf(Zf.emStrong.rDelimUnd, "g").replace(/punct/g, Zf._punctuation).getRegex(), Zf._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, Zf._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, Zf._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, Zf.autolink = wf(Zf.autolink).replace("scheme", Zf._scheme).replace("email", Zf._email).getRegex(), Zf._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, Zf.tag = wf(Zf.tag).replace("comment", Zf._comment).replace("attribute", Zf._attribute).getRegex(), Zf._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Zf._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, Zf._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, Zf.link = wf(Zf.link).replace("label", Zf._label).replace("href", Zf._href).replace("title", Zf._title).getRegex(), Zf.reflink = wf(Zf.reflink).replace("label", Zf._label).replace("ref", qf._label).getRegex(), Zf.nolink = wf(Zf.nolink).replace("ref", qf._label).getRegex(), Zf.reflinkSearch = wf(Zf.reflinkSearch, "g").replace("reflink", Zf.reflink).replace("nolink", Zf.nolink).getRegex(), Zf.normal = zf({}, Zf), Zf.pedantic = zf({}, Zf.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: wf(/^!?\[(label)\]\((.*?)\)/).replace("label", Zf._label).getRegex(), reflink: wf(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Zf._label).getRegex() }), Zf.gfm = zf({}, Zf.normal, { escape: wf(Zf.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }), Zf.gfm.url = wf(Zf.gfm.url, "i").replace("email", Zf.gfm._extended_email).getRegex(), Zf.breaks = zf({}, Zf.gfm, { br: wf(Zf.br).replace("{2,}", "*").getRegex(), text: wf(Zf.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
var Qf = function() {
  function e2(n2) {
    t(this, e2), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = n2 || df, this.options.tokenizer = this.options.tokenizer || new Uf(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    var r2 = { block: qf.normal, inline: Zf.normal };
    this.options.pedantic ? (r2.block = qf.pedantic, r2.inline = Zf.pedantic) : this.options.gfm && (r2.block = qf.gfm, this.options.breaks ? r2.inline = Zf.breaks : r2.inline = Zf.gfm), this.tokenizer.rules = r2;
  }
  return r(e2, [{ key: "lex", value: function(e3) {
    var t2;
    for (e3 = e3.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e3, this.tokens); t2 = this.inlineQueue.shift(); )
      this.inlineTokens(t2.src, t2.tokens);
    return this.tokens;
  } }, { key: "blockTokens", value: function(e3) {
    var t2, n2, r2, u2, i2 = this, o2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    for (this.options.pedantic && (e3 = e3.replace(/^ +$/gm, "")); e3; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function(n3) {
        return !!(t2 = n3.call({ lexer: i2 }, e3, o2)) && (e3 = e3.substring(t2.raw.length), o2.push(t2), true);
      }))) {
        if (t2 = this.tokenizer.space(e3))
          e3 = e3.substring(t2.raw.length), t2.raw.length === 1 && o2.length > 0 ? o2[o2.length - 1].raw += "\n" : o2.push(t2);
        else if (t2 = this.tokenizer.code(e3))
          e3 = e3.substring(t2.raw.length), !(n2 = o2[o2.length - 1]) || n2.type !== "paragraph" && n2.type !== "text" ? o2.push(t2) : (n2.raw += "\n" + t2.raw, n2.text += "\n" + t2.text, this.inlineQueue[this.inlineQueue.length - 1].src = n2.text);
        else if (t2 = this.tokenizer.fences(e3))
          e3 = e3.substring(t2.raw.length), o2.push(t2);
        else if (t2 = this.tokenizer.heading(e3))
          e3 = e3.substring(t2.raw.length), o2.push(t2);
        else if (t2 = this.tokenizer.hr(e3))
          e3 = e3.substring(t2.raw.length), o2.push(t2);
        else if (t2 = this.tokenizer.blockquote(e3))
          e3 = e3.substring(t2.raw.length), o2.push(t2);
        else if (t2 = this.tokenizer.list(e3))
          e3 = e3.substring(t2.raw.length), o2.push(t2);
        else if (t2 = this.tokenizer.html(e3))
          e3 = e3.substring(t2.raw.length), o2.push(t2);
        else if (t2 = this.tokenizer.def(e3))
          e3 = e3.substring(t2.raw.length), !(n2 = o2[o2.length - 1]) || n2.type !== "paragraph" && n2.type !== "text" ? this.tokens.links[t2.tag] || (this.tokens.links[t2.tag] = { href: t2.href, title: t2.title }) : (n2.raw += "\n" + t2.raw, n2.text += "\n" + t2.raw, this.inlineQueue[this.inlineQueue.length - 1].src = n2.text);
        else if (t2 = this.tokenizer.table(e3))
          e3 = e3.substring(t2.raw.length), o2.push(t2);
        else if (t2 = this.tokenizer.lheading(e3))
          e3 = e3.substring(t2.raw.length), o2.push(t2);
        else if (r2 = e3, this.options.extensions && this.options.extensions.startBlock && function() {
          var t3 = 1 / 0, n3 = e3.slice(1), u3 = void 0;
          i2.options.extensions.startBlock.forEach(function(e4) {
            typeof (u3 = e4.call({ lexer: this }, n3)) == "number" && u3 >= 0 && (t3 = Math.min(t3, u3));
          }), t3 < 1 / 0 && t3 >= 0 && (r2 = e3.substring(0, t3 + 1));
        }(), this.state.top && (t2 = this.tokenizer.paragraph(r2)))
          n2 = o2[o2.length - 1], u2 && n2.type === "paragraph" ? (n2.raw += "\n" + t2.raw, n2.text += "\n" + t2.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n2.text) : o2.push(t2), u2 = r2.length !== e3.length, e3 = e3.substring(t2.raw.length);
        else if (t2 = this.tokenizer.text(e3))
          e3 = e3.substring(t2.raw.length), (n2 = o2[o2.length - 1]) && n2.type === "text" ? (n2.raw += "\n" + t2.raw, n2.text += "\n" + t2.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n2.text) : o2.push(t2);
        else if (e3) {
          var a2 = "Infinite loop on byte: " + e3.charCodeAt(0);
          if (this.options.silent) {
            console.error(a2);
            break;
          }
          throw new Error(a2);
        }
      }
    return this.state.top = true, o2;
  } }, { key: "inline", value: function(e3, t2) {
    this.inlineQueue.push({ src: e3, tokens: t2 });
  } }, { key: "inlineTokens", value: function(e3) {
    var t2, n2, r2, u2, i2, o2, a2 = this, s2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], l2 = e3;
    if (this.tokens.links) {
      var c2 = Object.keys(this.tokens.links);
      if (c2.length > 0)
        for (; (u2 = this.tokenizer.rules.inline.reflinkSearch.exec(l2)) != null; )
          c2.includes(u2[0].slice(u2[0].lastIndexOf("[") + 1, -1)) && (l2 = l2.slice(0, u2.index) + "[" + Mf("a", u2[0].length - 2) + "]" + l2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (u2 = this.tokenizer.rules.inline.blockSkip.exec(l2)) != null; )
      l2 = l2.slice(0, u2.index) + "[" + Mf("a", u2[0].length - 2) + "]" + l2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (u2 = this.tokenizer.rules.inline.escapedEmSt.exec(l2)) != null; )
      l2 = l2.slice(0, u2.index) + "++" + l2.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    for (; e3; )
      if (i2 || (o2 = ""), i2 = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function(n3) {
        return !!(t2 = n3.call({ lexer: a2 }, e3, s2)) && (e3 = e3.substring(t2.raw.length), s2.push(t2), true);
      })))
        if (t2 = this.tokenizer.escape(e3))
          e3 = e3.substring(t2.raw.length), s2.push(t2);
        else if (t2 = this.tokenizer.tag(e3))
          e3 = e3.substring(t2.raw.length), (n2 = s2[s2.length - 1]) && t2.type === "text" && n2.type === "text" ? (n2.raw += t2.raw, n2.text += t2.text) : s2.push(t2);
        else if (t2 = this.tokenizer.link(e3))
          e3 = e3.substring(t2.raw.length), s2.push(t2);
        else if (t2 = this.tokenizer.reflink(e3, this.tokens.links))
          e3 = e3.substring(t2.raw.length), (n2 = s2[s2.length - 1]) && t2.type === "text" && n2.type === "text" ? (n2.raw += t2.raw, n2.text += t2.text) : s2.push(t2);
        else if (t2 = this.tokenizer.emStrong(e3, l2, o2))
          e3 = e3.substring(t2.raw.length), s2.push(t2);
        else if (t2 = this.tokenizer.codespan(e3))
          e3 = e3.substring(t2.raw.length), s2.push(t2);
        else if (t2 = this.tokenizer.br(e3))
          e3 = e3.substring(t2.raw.length), s2.push(t2);
        else if (t2 = this.tokenizer.del(e3))
          e3 = e3.substring(t2.raw.length), s2.push(t2);
        else if (t2 = this.tokenizer.autolink(e3, Hf))
          e3 = e3.substring(t2.raw.length), s2.push(t2);
        else if (this.state.inLink || !(t2 = this.tokenizer.url(e3, Hf))) {
          if (r2 = e3, this.options.extensions && this.options.extensions.startInline && function() {
            var t3 = 1 / 0, n3 = e3.slice(1), u3 = void 0;
            a2.options.extensions.startInline.forEach(function(e4) {
              typeof (u3 = e4.call({ lexer: this }, n3)) == "number" && u3 >= 0 && (t3 = Math.min(t3, u3));
            }), t3 < 1 / 0 && t3 >= 0 && (r2 = e3.substring(0, t3 + 1));
          }(), t2 = this.tokenizer.inlineText(r2, Gf))
            e3 = e3.substring(t2.raw.length), t2.raw.slice(-1) !== "_" && (o2 = t2.raw.slice(-1)), i2 = true, (n2 = s2[s2.length - 1]) && n2.type === "text" ? (n2.raw += t2.raw, n2.text += t2.text) : s2.push(t2);
          else if (e3) {
            var f2 = "Infinite loop on byte: " + e3.charCodeAt(0);
            if (this.options.silent) {
              console.error(f2);
              break;
            }
            throw new Error(f2);
          }
        } else
          e3 = e3.substring(t2.raw.length), s2.push(t2);
    return s2;
  } }], [{ key: "rules", get: function() {
    return { block: qf, inline: Zf };
  } }, { key: "lex", value: function(t2, n2) {
    return new e2(n2).lex(t2);
  } }, { key: "lexInline", value: function(t2, n2) {
    return new e2(n2).inlineTokens(t2);
  } }]), e2;
}();
var Vf = function() {
  function e2(n2) {
    t(this, e2), this.options = n2 || df;
  }
  return r(e2, [{ key: "code", value: function(e3, t2, n2) {
    var r2 = (t2 || "").match(/\S*/)[0];
    if (this.options.highlight) {
      var u2 = this.options.highlight(e3, r2);
      u2 != null && u2 !== e3 && (n2 = true, e3 = u2);
    }
    return e3 = e3.replace(/\n$/, "") + "\n", r2 ? '<pre><code class="' + this.options.langPrefix + xf(r2, true) + '">' + (n2 ? e3 : xf(e3, true)) + "</code></pre>\n" : "<pre><code>" + (n2 ? e3 : xf(e3, true)) + "</code></pre>\n";
  } }, { key: "blockquote", value: function(e3) {
    return "<blockquote>\n" + e3 + "</blockquote>\n";
  } }, { key: "html", value: function(e3) {
    return e3;
  } }, { key: "heading", value: function(e3, t2, n2, r2) {
    return this.options.headerIds ? "<h" + t2 + ' id="' + this.options.headerPrefix + r2.slug(n2) + '">' + e3 + "</h" + t2 + ">\n" : "<h" + t2 + ">" + e3 + "</h" + t2 + ">\n";
  } }, { key: "hr", value: function() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  } }, { key: "list", value: function(e3, t2, n2) {
    var r2 = t2 ? "ol" : "ul";
    return "<" + r2 + (t2 && n2 !== 1 ? ' start="' + n2 + '"' : "") + ">\n" + e3 + "</" + r2 + ">\n";
  } }, { key: "listitem", value: function(e3) {
    return "<li>" + e3 + "</li>\n";
  } }, { key: "checkbox", value: function(e3) {
    return "<input " + (e3 ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  } }, { key: "paragraph", value: function(e3) {
    return "<p>" + e3 + "</p>\n";
  } }, { key: "table", value: function(e3, t2) {
    return t2 && (t2 = "<tbody>" + t2 + "</tbody>"), "<table>\n<thead>\n" + e3 + "</thead>\n" + t2 + "</table>\n";
  } }, { key: "tablerow", value: function(e3) {
    return "<tr>\n" + e3 + "</tr>\n";
  } }, { key: "tablecell", value: function(e3, t2) {
    var n2 = t2.header ? "th" : "td";
    return (t2.align ? "<" + n2 + ' align="' + t2.align + '">' : "<" + n2 + ">") + e3 + "</" + n2 + ">\n";
  } }, { key: "strong", value: function(e3) {
    return "<strong>" + e3 + "</strong>";
  } }, { key: "em", value: function(e3) {
    return "<em>" + e3 + "</em>";
  } }, { key: "codespan", value: function(e3) {
    return "<code>" + e3 + "</code>";
  } }, { key: "br", value: function() {
    return this.options.xhtml ? "<br/>" : "<br>";
  } }, { key: "del", value: function(e3) {
    return "<del>" + e3 + "</del>";
  } }, { key: "link", value: function(e3, t2, n2) {
    if ((e3 = _f(this.options.sanitize, this.options.baseUrl, e3)) === null)
      return n2;
    var r2 = '<a href="' + xf(e3) + '"';
    return t2 && (r2 += ' title="' + t2 + '"'), r2 += ">" + n2 + "</a>";
  } }, { key: "image", value: function(e3, t2, n2) {
    if ((e3 = _f(this.options.sanitize, this.options.baseUrl, e3)) === null)
      return n2;
    var r2 = '<img src="' + e3 + '" alt="' + n2 + '"';
    return t2 && (r2 += ' title="' + t2 + '"'), r2 += this.options.xhtml ? "/>" : ">";
  } }, { key: "text", value: function(e3) {
    return e3;
  } }]), e2;
}();
var Yf = function() {
  function e2() {
    t(this, e2);
  }
  return r(e2, [{ key: "strong", value: function(e3) {
    return e3;
  } }, { key: "em", value: function(e3) {
    return e3;
  } }, { key: "codespan", value: function(e3) {
    return e3;
  } }, { key: "del", value: function(e3) {
    return e3;
  } }, { key: "html", value: function(e3) {
    return e3;
  } }, { key: "text", value: function(e3) {
    return e3;
  } }, { key: "link", value: function(e3, t2, n2) {
    return "" + n2;
  } }, { key: "image", value: function(e3, t2, n2) {
    return "" + n2;
  } }, { key: "br", value: function() {
    return "";
  } }]), e2;
}();
var Kf = function() {
  function e2() {
    t(this, e2), this.seen = {};
  }
  return r(e2, [{ key: "serialize", value: function(e3) {
    return e3.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  } }, { key: "getNextSafeSlug", value: function(e3, t2) {
    var n2 = e3, r2 = 0;
    if (this.seen.hasOwnProperty(n2)) {
      r2 = this.seen[e3];
      do {
        n2 = e3 + "-" + ++r2;
      } while (this.seen.hasOwnProperty(n2));
    }
    return t2 || (this.seen[e3] = r2, this.seen[n2] = 0), n2;
  } }, { key: "slug", value: function(e3) {
    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = this.serialize(e3);
    return this.getNextSafeSlug(n2, t2.dryrun);
  } }]), e2;
}();
var Xf = function() {
  function e2(n2) {
    t(this, e2), this.options = n2 || df, this.options.renderer = this.options.renderer || new Vf(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Yf(), this.slugger = new Kf();
  }
  return r(e2, [{ key: "parse", value: function(e3) {
    var t2, n2, r2, u2, i2, o2, a2, s2, l2, c2, f2, p2, h2, D2, g2, d2, v2, y2, A2, m2 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], k2 = "", E2 = e3.length;
    for (t2 = 0; t2 < E2; t2++)
      if (c2 = e3[t2], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[c2.type]) || (A2 = this.options.extensions.renderers[c2.type].call({ parser: this }, c2)) === false && ["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(c2.type))
        switch (c2.type) {
          case "space":
            continue;
          case "hr":
            k2 += this.renderer.hr();
            continue;
          case "heading":
            k2 += this.renderer.heading(this.parseInline(c2.tokens), c2.depth, bf(this.parseInline(c2.tokens, this.textRenderer)), this.slugger);
            continue;
          case "code":
            k2 += this.renderer.code(c2.text, c2.lang, c2.escaped);
            continue;
          case "table":
            for (s2 = "", a2 = "", u2 = c2.header.length, n2 = 0; n2 < u2; n2++)
              a2 += this.renderer.tablecell(this.parseInline(c2.header[n2].tokens), { header: true, align: c2.align[n2] });
            for (s2 += this.renderer.tablerow(a2), l2 = "", u2 = c2.rows.length, n2 = 0; n2 < u2; n2++) {
              for (a2 = "", i2 = (o2 = c2.rows[n2]).length, r2 = 0; r2 < i2; r2++)
                a2 += this.renderer.tablecell(this.parseInline(o2[r2].tokens), { header: false, align: c2.align[r2] });
              l2 += this.renderer.tablerow(a2);
            }
            k2 += this.renderer.table(s2, l2);
            continue;
          case "blockquote":
            l2 = this.parse(c2.tokens), k2 += this.renderer.blockquote(l2);
            continue;
          case "list":
            for (f2 = c2.ordered, p2 = c2.start, h2 = c2.loose, u2 = c2.items.length, l2 = "", n2 = 0; n2 < u2; n2++)
              d2 = (g2 = c2.items[n2]).checked, v2 = g2.task, D2 = "", g2.task && (y2 = this.renderer.checkbox(d2), h2 ? g2.tokens.length > 0 && g2.tokens[0].type === "paragraph" ? (g2.tokens[0].text = y2 + " " + g2.tokens[0].text, g2.tokens[0].tokens && g2.tokens[0].tokens.length > 0 && g2.tokens[0].tokens[0].type === "text" && (g2.tokens[0].tokens[0].text = y2 + " " + g2.tokens[0].tokens[0].text)) : g2.tokens.unshift({ type: "text", text: y2 }) : D2 += y2), D2 += this.parse(g2.tokens, h2), l2 += this.renderer.listitem(D2, v2, d2);
            k2 += this.renderer.list(l2, f2, p2);
            continue;
          case "html":
            k2 += this.renderer.html(c2.text);
            continue;
          case "paragraph":
            k2 += this.renderer.paragraph(this.parseInline(c2.tokens));
            continue;
          case "text":
            for (l2 = c2.tokens ? this.parseInline(c2.tokens) : c2.text; t2 + 1 < E2 && e3[t2 + 1].type === "text"; )
              l2 += "\n" + ((c2 = e3[++t2]).tokens ? this.parseInline(c2.tokens) : c2.text);
            k2 += m2 ? this.renderer.paragraph(l2) : l2;
            continue;
          default:
            var x2 = 'Token with "' + c2.type + '" type was not found.';
            if (this.options.silent)
              return void console.error(x2);
            throw new Error(x2);
        }
      else
        k2 += A2 || "";
    return k2;
  } }, { key: "parseInline", value: function(e3, t2) {
    t2 = t2 || this.renderer;
    var n2, r2, u2, i2 = "", o2 = e3.length;
    for (n2 = 0; n2 < o2; n2++)
      if (r2 = e3[n2], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r2.type]) || (u2 = this.options.extensions.renderers[r2.type].call({ parser: this }, r2)) === false && ["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r2.type))
        switch (r2.type) {
          case "escape":
            i2 += t2.text(r2.text);
            break;
          case "html":
            i2 += t2.html(r2.text);
            break;
          case "link":
            i2 += t2.link(r2.href, r2.title, this.parseInline(r2.tokens, t2));
            break;
          case "image":
            i2 += t2.image(r2.href, r2.title, r2.text);
            break;
          case "strong":
            i2 += t2.strong(this.parseInline(r2.tokens, t2));
            break;
          case "em":
            i2 += t2.em(this.parseInline(r2.tokens, t2));
            break;
          case "codespan":
            i2 += t2.codespan(r2.text);
            break;
          case "br":
            i2 += t2.br();
            break;
          case "del":
            i2 += t2.del(this.parseInline(r2.tokens, t2));
            break;
          case "text":
            i2 += t2.text(r2.text);
            break;
          default:
            var a2 = 'Token with "' + r2.type + '" type was not found.';
            if (this.options.silent)
              return void console.error(a2);
            throw new Error(a2);
        }
      else
        i2 += u2 || "";
    return i2;
  } }], [{ key: "parse", value: function(t2, n2) {
    return new e2(n2).parse(t2);
  } }, { key: "parseInline", value: function(t2, n2) {
    return new e2(n2).parseInline(t2);
  } }]), e2;
}();
function Wf(e2, t2, n2) {
  if (e2 == null)
    throw new Error("marked(): input parameter is undefined or null");
  if (typeof e2 != "string")
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e2) + ", string expected");
  if (typeof t2 == "function" && (n2 = t2, t2 = null), Lf(t2 = zf({}, Wf.defaults, t2 || {})), n2) {
    var r2, u2 = t2.highlight;
    try {
      r2 = Qf.lex(e2, t2);
    } catch (e3) {
      return n2(e3);
    }
    var i2 = function(e3) {
      var i3;
      if (!e3)
        try {
          t2.walkTokens && Wf.walkTokens(r2, t2.walkTokens), i3 = Xf.parse(r2, t2);
        } catch (t3) {
          e3 = t3;
        }
      return t2.highlight = u2, e3 ? n2(e3) : n2(null, i3);
    };
    if (!u2 || u2.length < 3)
      return i2();
    if (delete t2.highlight, !r2.length)
      return i2();
    var o2 = 0;
    return Wf.walkTokens(r2, function(e3) {
      e3.type === "code" && (o2++, setTimeout(function() {
        u2(e3.text, e3.lang, function(t3, n3) {
          if (t3)
            return i2(t3);
          n3 != null && n3 !== e3.text && (e3.text = n3, e3.escaped = true), --o2 === 0 && i2();
        });
      }, 0));
    }), void (o2 === 0 && i2());
  }
  try {
    var a2 = Qf.lex(e2, t2);
    return t2.walkTokens && Wf.walkTokens(a2, t2.walkTokens), Xf.parse(a2, t2);
  } catch (e3) {
    if (e3.message += "\nPlease report this to https://github.com/markedjs/marked.", t2.silent)
      return "<p>An error occurred:</p><pre>" + xf(e3.message + "", true) + "</pre>";
    throw e3;
  }
}
Wf.options = Wf.setOptions = function(e2) {
  var t2;
  return zf(Wf.defaults, e2), t2 = Wf.defaults, df = t2, Wf;
}, Wf.getDefaults = gf, Wf.defaults = df, Wf.use = function() {
  for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++)
    t2[n2] = arguments[n2];
  var r2, u2 = zf.apply(void 0, [{}].concat(t2)), i2 = Wf.defaults.extensions || { renderers: {}, childTokens: {} };
  t2.forEach(function(e3) {
    if (e3.extensions && (r2 = true, e3.extensions.forEach(function(e4) {
      if (!e4.name)
        throw new Error("extension name required");
      if (e4.renderer) {
        var t4 = i2.renderers ? i2.renderers[e4.name] : null;
        i2.renderers[e4.name] = t4 ? function() {
          for (var n3 = arguments.length, r3 = new Array(n3), u3 = 0; u3 < n3; u3++)
            r3[u3] = arguments[u3];
          var i3 = e4.renderer.apply(this, r3);
          return i3 === false && (i3 = t4.apply(this, r3)), i3;
        } : e4.renderer;
      }
      if (e4.tokenizer) {
        if (!e4.level || e4.level !== "block" && e4.level !== "inline")
          throw new Error("extension level must be 'block' or 'inline'");
        i2[e4.level] ? i2[e4.level].unshift(e4.tokenizer) : i2[e4.level] = [e4.tokenizer], e4.start && (e4.level === "block" ? i2.startBlock ? i2.startBlock.push(e4.start) : i2.startBlock = [e4.start] : e4.level === "inline" && (i2.startInline ? i2.startInline.push(e4.start) : i2.startInline = [e4.start]));
      }
      e4.childTokens && (i2.childTokens[e4.name] = e4.childTokens);
    })), e3.renderer && function() {
      var t4 = Wf.defaults.renderer || new Vf(), n3 = function(n4) {
        var r4 = t4[n4];
        t4[n4] = function() {
          for (var u3 = arguments.length, i3 = new Array(u3), o2 = 0; o2 < u3; o2++)
            i3[o2] = arguments[o2];
          var a2 = e3.renderer[n4].apply(t4, i3);
          return a2 === false && (a2 = r4.apply(t4, i3)), a2;
        };
      };
      for (var r3 in e3.renderer)
        n3(r3);
      u2.renderer = t4;
    }(), e3.tokenizer && function() {
      var t4 = Wf.defaults.tokenizer || new Uf(), n3 = function(n4) {
        var r4 = t4[n4];
        t4[n4] = function() {
          for (var u3 = arguments.length, i3 = new Array(u3), o2 = 0; o2 < u3; o2++)
            i3[o2] = arguments[o2];
          var a2 = e3.tokenizer[n4].apply(t4, i3);
          return a2 === false && (a2 = r4.apply(t4, i3)), a2;
        };
      };
      for (var r3 in e3.tokenizer)
        n3(r3);
      u2.tokenizer = t4;
    }(), e3.walkTokens) {
      var t3 = Wf.defaults.walkTokens;
      u2.walkTokens = function(n3) {
        e3.walkTokens.call(this, n3), t3 && t3.call(this, n3);
      };
    }
    r2 && (u2.extensions = i2), Wf.setOptions(u2);
  });
}, Wf.walkTokens = function(e2, t2) {
  var n2, r2 = l(e2);
  try {
    var u2 = function() {
      var e3 = n2.value;
      switch (t2.call(Wf, e3), e3.type) {
        case "table":
          var r3, u3 = l(e3.header);
          try {
            for (u3.s(); !(r3 = u3.n()).done; ) {
              var i2 = r3.value;
              Wf.walkTokens(i2.tokens, t2);
            }
          } catch (e4) {
            u3.e(e4);
          } finally {
            u3.f();
          }
          var o2, a2 = l(e3.rows);
          try {
            for (a2.s(); !(o2 = a2.n()).done; ) {
              var s2, c2 = l(o2.value);
              try {
                for (c2.s(); !(s2 = c2.n()).done; ) {
                  var f2 = s2.value;
                  Wf.walkTokens(f2.tokens, t2);
                }
              } catch (e4) {
                c2.e(e4);
              } finally {
                c2.f();
              }
            }
          } catch (e4) {
            a2.e(e4);
          } finally {
            a2.f();
          }
          break;
        case "list":
          Wf.walkTokens(e3.items, t2);
          break;
        default:
          Wf.defaults.extensions && Wf.defaults.extensions.childTokens && Wf.defaults.extensions.childTokens[e3.type] ? Wf.defaults.extensions.childTokens[e3.type].forEach(function(n3) {
            Wf.walkTokens(e3[n3], t2);
          }) : e3.tokens && Wf.walkTokens(e3.tokens, t2);
      }
    };
    for (r2.s(); !(n2 = r2.n()).done; )
      u2();
  } catch (e3) {
    r2.e(e3);
  } finally {
    r2.f();
  }
}, Wf.parseInline = function(e2, t2) {
  if (e2 == null)
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  if (typeof e2 != "string")
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e2) + ", string expected");
  Lf(t2 = zf({}, Wf.defaults, t2 || {}));
  try {
    var n2 = Qf.lexInline(e2, t2);
    return t2.walkTokens && Wf.walkTokens(n2, t2.walkTokens), Xf.parseInline(n2, t2);
  } catch (e3) {
    if (e3.message += "\nPlease report this to https://github.com/markedjs/marked.", t2.silent)
      return "<p>An error occurred:</p><pre>" + xf(e3.message + "", true) + "</pre>";
    throw e3;
  }
}, Wf.Parser = Xf, Wf.parser = Xf.parse, Wf.Renderer = Vf, Wf.TextRenderer = Yf, Wf.Lexer = Qf, Wf.lexer = Qf.lex, Wf.Tokenizer = Uf, Wf.Slugger = Kf, Wf.parse = Wf;
var Jf = /\[([\s\d,|-]*)\]/;
var ep = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
function markdown_esm_default() {
  var t2;
  function n2(e2) {
    var t3 = (e2.querySelector("[data-template]") || e2.querySelector("script") || e2).textContent, n3 = (t3 = t3.replace(new RegExp("__SCRIPT_END__", "g"), "<\/script>")).match(/^\n?(\s*)/)[1].length, r3 = t3.match(/^\n?(\t*)/)[1].length;
    return r3 > 0 ? t3 = t3.replace(new RegExp("\\n?\\t{" + r3 + "}", "g"), "\n") : n3 > 1 && (t3 = t3.replace(new RegExp("\\n? {" + n3 + "}", "g"), "\n")), t3;
  }
  function r2(e2) {
    for (var t3 = e2.attributes, n3 = [], r3 = 0, u2 = t3.length; r3 < u2; r3++) {
      var i2 = t3[r3].name, o3 = t3[r3].value;
      /data\-(markdown|separator|vertical|notes)/gi.test(i2) || (o3 ? n3.push(i2 + '="' + o3 + '"') : n3.push(i2));
    }
    return n3.join(" ");
  }
  function o2(e2) {
    return (e2 = e2 || {}).separator = e2.separator || "\r?\n---\r?\n", e2.notesSeparator = e2.notesSeparator || "notes?:", e2.attributes = e2.attributes || "", e2;
  }
  function a2(e2, t3) {
    t3 = o2(t3);
    var n3 = e2.split(new RegExp(t3.notesSeparator, "mgi"));
    return n3.length === 2 && (e2 = n3[0] + '<aside class="notes">' + Wf(n3[1].trim()) + "</aside>"), '<script type="text/template">' + (e2 = e2.replace(/<\/script>/g, "__SCRIPT_END__")) + "<\/script>";
  }
  function s2(e2, t3) {
    t3 = o2(t3);
    for (var n3, r3, u2, i2 = new RegExp(t3.separator + (t3.verticalSeparator ? "|" + t3.verticalSeparator : ""), "mg"), s3 = new RegExp(t3.separator), l3 = 0, c3 = true, f3 = []; n3 = i2.exec(e2); )
      !(r3 = s3.test(n3[0])) && c3 && f3.push([]), u2 = e2.substring(l3, n3.index), r3 && c3 ? f3.push(u2) : f3[f3.length - 1].push(u2), l3 = i2.lastIndex, c3 = r3;
    (c3 ? f3 : f3[f3.length - 1]).push(e2.substring(l3));
    for (var p3 = "", h2 = 0, D2 = f3.length; h2 < D2; h2++)
      f3[h2] instanceof Array ? (p3 += "<section " + t3.attributes + ">", f3[h2].forEach(function(e3) {
        p3 += "<section data-markdown>" + a2(e3, t3) + "</section>";
      }), p3 += "</section>") : p3 += "<section " + t3.attributes + " data-markdown>" + a2(f3[h2], t3) + "</section>";
    return p3;
  }
  function l2(e2) {
    return new Promise(function(t3) {
      var u2 = [];
      [].slice.call(e2.querySelectorAll("section[data-markdown]:not([data-markdown-parsed])")).forEach(function(e3, t4) {
        e3.getAttribute("data-markdown").length ? u2.push(function(e4) {
          return new Promise(function(t5, n3) {
            var r3 = new XMLHttpRequest(), u3 = e4.getAttribute("data-markdown"), i2 = e4.getAttribute("data-charset");
            i2 != null && i2 != "" && r3.overrideMimeType("text/html; charset=" + i2), r3.onreadystatechange = function(e5, r4) {
              r4.readyState === 4 && (r4.status >= 200 && r4.status < 300 || r4.status === 0 ? t5(r4, u3) : n3(r4, u3));
            }.bind(this, e4, r3), r3.open("GET", u3, true);
            try {
              r3.send();
            } catch (e5) {
              console.warn("Failed to get the Markdown file " + u3 + ". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. " + e5), t5(r3, u3);
            }
          });
        }(e3).then(function(t5, n3) {
          e3.outerHTML = s2(t5.responseText, { separator: e3.getAttribute("data-separator"), verticalSeparator: e3.getAttribute("data-separator-vertical"), notesSeparator: e3.getAttribute("data-separator-notes"), attributes: r2(e3) });
        }, function(t5, n3) {
          e3.outerHTML = '<section data-state="alert">ERROR: The attempt to fetch ' + n3 + " failed with HTTP status " + t5.status + ".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>";
        })) : e3.outerHTML = s2(n2(e3), { separator: e3.getAttribute("data-separator"), verticalSeparator: e3.getAttribute("data-separator-vertical"), notesSeparator: e3.getAttribute("data-separator-notes"), attributes: r2(e3) });
      }), Promise.all(u2).then(t3);
    });
  }
  function c2(e2, t3, n3) {
    var r3, u2, i2 = new RegExp(n3, "mg"), o3 = new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])', "mg"), a3 = e2.nodeValue;
    if (r3 = i2.exec(a3)) {
      var s3 = r3[1];
      for (a3 = a3.substring(0, r3.index) + a3.substring(i2.lastIndex), e2.nodeValue = a3; u2 = o3.exec(s3); )
        u2[2] ? t3.setAttribute(u2[1], u2[2]) : t3.setAttribute(u2[3], "");
      return true;
    }
    return false;
  }
  function f2(e2, t3, n3, r3, u2) {
    if (t3 != null && t3.childNodes != null && t3.childNodes.length > 0)
      for (var i2 = t3, o3 = 0; o3 < t3.childNodes.length; o3++) {
        var a3 = t3.childNodes[o3];
        if (o3 > 0)
          for (var s3 = o3 - 1; s3 >= 0; ) {
            var l3 = t3.childNodes[s3];
            if (typeof l3.setAttribute == "function" && l3.tagName != "BR") {
              i2 = l3;
              break;
            }
            s3 -= 1;
          }
        var p3 = e2;
        a3.nodeName == "section" && (p3 = a3, i2 = a3), typeof a3.setAttribute != "function" && a3.nodeType != Node.COMMENT_NODE || f2(p3, a3, i2, r3, u2);
      }
    t3.nodeType == Node.COMMENT_NODE && c2(t3, n3, r3) == 0 && c2(t3, e2, u2);
  }
  function p2() {
    var e2 = t2.getRevealElement().querySelectorAll("[data-markdown]:not([data-markdown-parsed])");
    return [].slice.call(e2).forEach(function(e3) {
      e3.setAttribute("data-markdown-parsed", true);
      var t3 = e3.querySelector("aside.notes"), r3 = n2(e3);
      e3.innerHTML = Wf(r3), f2(e3, e3, null, e3.getAttribute("data-element-attributes") || e3.parentNode.getAttribute("data-element-attributes") || "\\.element\\s*?(.+?)$", e3.getAttribute("data-attributes") || e3.parentNode.getAttribute("data-attributes") || "\\.slide:\\s*?(\\S.+?)$"), t3 && e3.appendChild(t3);
    }), Promise.resolve();
  }
  return { id: "markdown", init: function(n3) {
    var r3 = (t2 = n3).getConfig().markdown || {}, o3 = r3.renderer, a3 = r3.animateLists, s3 = i(r3, ["renderer", "animateLists"]);
    return o3 || ((o3 = new Wf.Renderer()).code = function(e2, t3) {
      var n4 = "";
      return Jf.test(t3) && (n4 = t3.match(Jf)[1].trim(), n4 = 'data-line-numbers="'.concat(n4, '"'), t3 = t3.replace(Jf, "").trim()), e2 = e2.replace(/([&<>'"])/g, function(e3) {
        return ep[e3];
      }), "<pre><code ".concat(n4, ' class="').concat(t3, '">').concat(e2, "</code></pre>");
    }), a3 === true && (o3.listitem = function(e2) {
      return '<li class="fragment">'.concat(e2, "</li>");
    }), Wf.setOptions(function(t3) {
      for (var n4 = 1; n4 < arguments.length; n4++) {
        var r4 = arguments[n4] != null ? arguments[n4] : {};
        n4 % 2 ? e(Object(r4), true).forEach(function(e2) {
          u(t3, e2, r4[e2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r4)) : e(Object(r4)).forEach(function(e2) {
          Object.defineProperty(t3, e2, Object.getOwnPropertyDescriptor(r4, e2));
        });
      }
      return t3;
    }({ renderer: o3 }, s3)), l2(t2.getRevealElement()).then(p2);
  }, processSlides: l2, convertSlides: p2, slidify: s2, marked: Wf };
}

// dep:reveal_js_plugin_markdown_markdown_esm_js
var reveal_js_plugin_markdown_markdown_esm_js_default = markdown_esm_default;
export {
  reveal_js_plugin_markdown_markdown_esm_js_default as default
};
//# sourceMappingURL=reveal_js_plugin_markdown_markdown_esm_js.js.map
