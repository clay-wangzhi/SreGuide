var Yp=Object.defineProperty;var Xp=(n,e,s)=>e in n?Yp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var _t=(n,e,s)=>(Xp(n,typeof e!="symbol"?e+"":e,s),s);const Zp="modulepreload",nd=function(n){return"/"+n},pl={},i=function(e,s,a){if(!s||s.length===0)return e();const t=document.getElementsByTagName("link");return Promise.all(s.map(l=>{if(l=nd(l),l in pl)return;pl[l]=!0;const o=l.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!a)for(let u=t.length-1;u>=0;u--){const m=t[u];if(m.href===l&&(!o||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const d=document.createElement("link");if(d.rel=o?"stylesheet":Zp,o||(d.as="script",d.crossOrigin=""),d.href=l,document.head.appendChild(d),o)return new Promise((u,m)=>{d.addEventListener("load",u),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())};function di(n,e){const s=Object.create(null),a=n.split(",");for(let t=0;t<a.length;t++)s[a[t]]=!0;return e?t=>!!s[t.toLowerCase()]:t=>!!s[t]}const Tn={},_s=[],me=()=>{},ed=()=>!1,sd=/^on[^a-z]/,pa=n=>sd.test(n),ui=n=>n.startsWith("onUpdate:"),On=Object.assign,vi=(n,e)=>{const s=n.indexOf(e);s>-1&&n.splice(s,1)},ad=Object.prototype.hasOwnProperty,vn=(n,e)=>ad.call(n,e),X=Array.isArray,ks=n=>et(n)==="[object Map]",So=n=>et(n)==="[object Set]",sn=n=>typeof n=="function",mn=n=>typeof n=="string",mi=n=>typeof n=="symbol",Pn=n=>n!==null&&typeof n=="object",$o=n=>Pn(n)&&sn(n.then)&&sn(n.catch),Mo=Object.prototype.toString,et=n=>Mo.call(n),td=n=>et(n).slice(8,-1),Fo=n=>et(n)==="[object Object]",hi=n=>mn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Us=di(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),st=n=>{const e=Object.create(null);return s=>e[s]||(e[s]=n(s))},id=/-(\w)/g,ie=st(n=>n.replace(id,(e,s)=>s?s.toUpperCase():"")),ld=/\B([A-Z])/g,Ds=st(n=>n.replace(ld,"-$1").toLowerCase()),da=st(n=>n.charAt(0).toUpperCase()+n.slice(1)),kt=st(n=>n?`on${da(n)}`:""),Zs=(n,e)=>!Object.is(n,e),ft=(n,e)=>{for(let s=0;s<n.length;s++)n[s](e)},za=(n,e,s)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:s})},od=n=>{const e=parseFloat(n);return isNaN(e)?n:e},rd=n=>{const e=mn(n)?Number(n):NaN;return isNaN(e)?n:e};let dl;const Ft=()=>dl||(dl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bi(n){if(X(n)){const e={};for(let s=0;s<n.length;s++){const a=n[s],t=mn(a)?ud(a):bi(a);if(t)for(const l in t)e[l]=t[l]}return e}else{if(mn(n))return n;if(Pn(n))return n}}const cd=/;(?![^(]*\))/g,pd=/:([^]+)/,dd=/\/\*[^]*?\*\//g;function ud(n){const e={};return n.replace(dd,"").split(cd).forEach(s=>{if(s){const a=s.split(pd);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e}function _i(n){let e="";if(mn(n))e=n;else if(X(n))for(let s=0;s<n.length;s++){const a=_i(n[s]);a&&(e+=a+" ")}else if(Pn(n))for(const s in n)n[s]&&(e+=s+" ");return e.trim()}const vd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",md=di(vd);function jo(n){return!!n||n===""}const O_=n=>mn(n)?n:n==null?"":X(n)||Pn(n)&&(n.toString===Mo||!sn(n.toString))?JSON.stringify(n,qo,2):String(n),qo=(n,e)=>e&&e.__v_isRef?qo(n,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[a,t])=>(s[`${a} =>`]=t,s),{})}:So(e)?{[`Set(${e.size})`]:[...e.values()]}:Pn(e)&&!X(e)&&!Fo(e)?String(e):e;let Jn;class hd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Jn,!e&&Jn&&(this.index=(Jn.scopes||(Jn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const s=Jn;try{return Jn=this,e()}finally{Jn=s}}}on(){Jn=this}off(){Jn=this.parent}stop(e){if(this._active){let s,a;for(s=0,a=this.effects.length;s<a;s++)this.effects[s].stop();for(s=0,a=this.cleanups.length;s<a;s++)this.cleanups[s]();if(this.scopes)for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!e){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function bd(n,e=Jn){e&&e.active&&e.effects.push(n)}function zo(){return Jn}function _d(n){Jn&&Jn.cleanups.push(n)}const ki=n=>{const e=new Set(n);return e.w=0,e.n=0,e},No=n=>(n.w&We)>0,Ho=n=>(n.n&We)>0,kd=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=We},fd=n=>{const{deps:e}=n;if(e.length){let s=0;for(let a=0;a<e.length;a++){const t=e[a];No(t)&&!Ho(t)?t.delete(n):e[s++]=t,t.w&=~We,t.n&=~We}e.length=s}},Na=new WeakMap;let Ns=0,We=1;const jt=30;let ue;const as=Symbol(""),qt=Symbol("");class fi{constructor(e,s=null,a){this.fn=e,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,bd(this,a)}run(){if(!this.active)return this.fn();let e=ue,s=Ge;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ue,ue=this,Ge=!0,We=1<<++Ns,Ns<=jt?kd(this):ul(this),this.fn()}finally{Ns<=jt&&fd(this),We=1<<--Ns,ue=this.parent,Ge=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ue===this?this.deferStop=!0:this.active&&(ul(this),this.onStop&&this.onStop(),this.active=!1)}}function ul(n){const{deps:e}=n;if(e.length){for(let s=0;s<e.length;s++)e[s].delete(n);e.length=0}}let Ge=!0;const Uo=[];function Rs(){Uo.push(Ge),Ge=!1}function Os(){const n=Uo.pop();Ge=n===void 0?!0:n}function Kn(n,e,s){if(Ge&&ue){let a=Na.get(n);a||Na.set(n,a=new Map);let t=a.get(s);t||a.set(s,t=ki()),Go(t)}}function Go(n,e){let s=!1;Ns<=jt?Ho(n)||(n.n|=We,s=!No(n)):s=!n.has(ue),s&&(n.add(ue),ue.deps.push(n))}function Be(n,e,s,a,t,l){const o=Na.get(n);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(s==="length"&&X(n)){const p=Number(a);o.forEach((d,u)=>{(u==="length"||u>=p)&&c.push(d)})}else switch(s!==void 0&&c.push(o.get(s)),e){case"add":X(n)?hi(s)&&c.push(o.get("length")):(c.push(o.get(as)),ks(n)&&c.push(o.get(qt)));break;case"delete":X(n)||(c.push(o.get(as)),ks(n)&&c.push(o.get(qt)));break;case"set":ks(n)&&c.push(o.get(as));break}if(c.length===1)c[0]&&zt(c[0]);else{const p=[];for(const d of c)d&&p.push(...d);zt(ki(p))}}function zt(n,e){const s=X(n)?n:[...n];for(const a of s)a.computed&&vl(a);for(const a of s)a.computed||vl(a)}function vl(n,e){(n!==ue||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function gd(n,e){var s;return(s=Na.get(n))==null?void 0:s.get(e)}const Ed=di("__proto__,__v_isRef,__isVue"),Ko=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(mi)),yd=gi(),xd=gi(!1,!0),Ad=gi(!0),ml=wd();function wd(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...s){const a=cn(this);for(let l=0,o=this.length;l<o;l++)Kn(a,"get",l+"");const t=a[e](...s);return t===-1||t===!1?a[e](...s.map(cn)):t}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...s){Rs();const a=cn(this)[e].apply(this,s);return Os(),a}}),n}function Pd(n){const e=cn(this);return Kn(e,"has",n),e.hasOwnProperty(n)}function gi(n=!1,e=!1){return function(a,t,l){if(t==="__v_isReactive")return!n;if(t==="__v_isReadonly")return n;if(t==="__v_isShallow")return e;if(t==="__v_raw"&&l===(n?e?zd:Xo:e?Yo:Qo).get(a))return a;const o=X(a);if(!n){if(o&&vn(ml,t))return Reflect.get(ml,t,l);if(t==="hasOwnProperty")return Pd}const c=Reflect.get(a,t,l);return(mi(t)?Ko.has(t):Ed(t))||(n||Kn(a,"get",t),e)?c:Sn(c)?o&&hi(t)?c:c.value:Pn(c)?n?Vs(c):Bs(c):c}}const Ld=Wo(),Td=Wo(!0);function Wo(n=!1){return function(s,a,t,l){let o=s[a];if(xs(o)&&Sn(o)&&!Sn(t))return!1;if(!n&&(!Ha(t)&&!xs(t)&&(o=cn(o),t=cn(t)),!X(s)&&Sn(o)&&!Sn(t)))return o.value=t,!0;const c=X(s)&&hi(a)?Number(a)<s.length:vn(s,a),p=Reflect.set(s,a,t,l);return s===cn(l)&&(c?Zs(t,o)&&Be(s,"set",a,t):Be(s,"add",a,t)),p}}function Id(n,e){const s=vn(n,e);n[e];const a=Reflect.deleteProperty(n,e);return a&&s&&Be(n,"delete",e,void 0),a}function Dd(n,e){const s=Reflect.has(n,e);return(!mi(e)||!Ko.has(e))&&Kn(n,"has",e),s}function Rd(n){return Kn(n,"iterate",X(n)?"length":as),Reflect.ownKeys(n)}const Jo={get:yd,set:Ld,deleteProperty:Id,has:Dd,ownKeys:Rd},Od={get:Ad,set(n,e){return!0},deleteProperty(n,e){return!0}},Bd=On({},Jo,{get:xd,set:Td}),Ei=n=>n,at=n=>Reflect.getPrototypeOf(n);function La(n,e,s=!1,a=!1){n=n.__v_raw;const t=cn(n),l=cn(e);s||(e!==l&&Kn(t,"get",e),Kn(t,"get",l));const{has:o}=at(t),c=a?Ei:s?Ai:na;if(o.call(t,e))return c(n.get(e));if(o.call(t,l))return c(n.get(l));n!==t&&n.get(e)}function Ta(n,e=!1){const s=this.__v_raw,a=cn(s),t=cn(n);return e||(n!==t&&Kn(a,"has",n),Kn(a,"has",t)),n===t?s.has(n):s.has(n)||s.has(t)}function Ia(n,e=!1){return n=n.__v_raw,!e&&Kn(cn(n),"iterate",as),Reflect.get(n,"size",n)}function hl(n){n=cn(n);const e=cn(this);return at(e).has.call(e,n)||(e.add(n),Be(e,"add",n,n)),this}function bl(n,e){e=cn(e);const s=cn(this),{has:a,get:t}=at(s);let l=a.call(s,n);l||(n=cn(n),l=a.call(s,n));const o=t.call(s,n);return s.set(n,e),l?Zs(e,o)&&Be(s,"set",n,e):Be(s,"add",n,e),this}function _l(n){const e=cn(this),{has:s,get:a}=at(e);let t=s.call(e,n);t||(n=cn(n),t=s.call(e,n)),a&&a.call(e,n);const l=e.delete(n);return t&&Be(e,"delete",n,void 0),l}function kl(){const n=cn(this),e=n.size!==0,s=n.clear();return e&&Be(n,"clear",void 0,void 0),s}function Da(n,e){return function(a,t){const l=this,o=l.__v_raw,c=cn(o),p=e?Ei:n?Ai:na;return!n&&Kn(c,"iterate",as),o.forEach((d,u)=>a.call(t,p(d),p(u),l))}}function Ra(n,e,s){return function(...a){const t=this.__v_raw,l=cn(t),o=ks(l),c=n==="entries"||n===Symbol.iterator&&o,p=n==="keys"&&o,d=t[n](...a),u=s?Ei:e?Ai:na;return!e&&Kn(l,"iterate",p?qt:as),{next(){const{value:m,done:h}=d.next();return h?{value:m,done:h}:{value:c?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function Me(n){return function(...e){return n==="delete"?!1:this}}function Vd(){const n={get(l){return La(this,l)},get size(){return Ia(this)},has:Ta,add:hl,set:bl,delete:_l,clear:kl,forEach:Da(!1,!1)},e={get(l){return La(this,l,!1,!0)},get size(){return Ia(this)},has:Ta,add:hl,set:bl,delete:_l,clear:kl,forEach:Da(!1,!0)},s={get(l){return La(this,l,!0)},get size(){return Ia(this,!0)},has(l){return Ta.call(this,l,!0)},add:Me("add"),set:Me("set"),delete:Me("delete"),clear:Me("clear"),forEach:Da(!0,!1)},a={get(l){return La(this,l,!0,!0)},get size(){return Ia(this,!0)},has(l){return Ta.call(this,l,!0)},add:Me("add"),set:Me("set"),delete:Me("delete"),clear:Me("clear"),forEach:Da(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{n[l]=Ra(l,!1,!1),s[l]=Ra(l,!0,!1),e[l]=Ra(l,!1,!0),a[l]=Ra(l,!0,!0)}),[n,s,e,a]}const[Cd,Sd,$d,Md]=Vd();function yi(n,e){const s=e?n?Md:$d:n?Sd:Cd;return(a,t,l)=>t==="__v_isReactive"?!n:t==="__v_isReadonly"?n:t==="__v_raw"?a:Reflect.get(vn(s,t)&&t in a?s:a,t,l)}const Fd={get:yi(!1,!1)},jd={get:yi(!1,!0)},qd={get:yi(!0,!1)},Qo=new WeakMap,Yo=new WeakMap,Xo=new WeakMap,zd=new WeakMap;function Nd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hd(n){return n.__v_skip||!Object.isExtensible(n)?0:Nd(td(n))}function Bs(n){return xs(n)?n:xi(n,!1,Jo,Fd,Qo)}function Ud(n){return xi(n,!1,Bd,jd,Yo)}function Vs(n){return xi(n,!0,Od,qd,Xo)}function xi(n,e,s,a,t){if(!Pn(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const l=t.get(n);if(l)return l;const o=Hd(n);if(o===0)return n;const c=new Proxy(n,o===2?a:s);return t.set(n,c),c}function fs(n){return xs(n)?fs(n.__v_raw):!!(n&&n.__v_isReactive)}function xs(n){return!!(n&&n.__v_isReadonly)}function Ha(n){return!!(n&&n.__v_isShallow)}function Zo(n){return fs(n)||xs(n)}function cn(n){const e=n&&n.__v_raw;return e?cn(e):n}function nr(n){return za(n,"__v_skip",!0),n}const na=n=>Pn(n)?Bs(n):n,Ai=n=>Pn(n)?Vs(n):n;function wi(n){Ge&&ue&&(n=cn(n),Go(n.dep||(n.dep=ki())))}function Pi(n,e){n=cn(n);const s=n.dep;s&&zt(s)}function Sn(n){return!!(n&&n.__v_isRef===!0)}function Y(n){return er(n,!1)}function le(n){return er(n,!0)}function er(n,e){return Sn(n)?n:new Gd(n,e)}class Gd{constructor(e,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?e:cn(e),this._value=s?e:na(e)}get value(){return wi(this),this._value}set value(e){const s=this.__v_isShallow||Ha(e)||xs(e);e=s?e:cn(e),Zs(e,this._rawValue)&&(this._rawValue=e,this._value=s?e:na(e),Pi(this))}}function ts(n){return Sn(n)?n.value:n}const Kd={get:(n,e,s)=>ts(Reflect.get(n,e,s)),set:(n,e,s,a)=>{const t=n[e];return Sn(t)&&!Sn(s)?(t.value=s,!0):Reflect.set(n,e,s,a)}};function sr(n){return fs(n)?n:new Proxy(n,Kd)}class Wd{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:a}=e(()=>wi(this),()=>Pi(this));this._get=s,this._set=a}get value(){return this._get()}set value(e){this._set(e)}}function Jd(n){return new Wd(n)}class Qd{constructor(e,s,a){this._object=e,this._key=s,this._defaultValue=a,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return gd(cn(this._object),this._key)}}class Yd{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Cs(n,e,s){return Sn(n)?n:sn(n)?new Yd(n):Pn(n)&&arguments.length>1?Xd(n,e,s):Y(n)}function Xd(n,e,s){const a=n[e];return Sn(a)?a:new Qd(n,e,s)}class Zd{constructor(e,s,a,t){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new fi(e,()=>{this._dirty||(this._dirty=!0,Pi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!t,this.__v_isReadonly=a}get value(){const e=cn(this);return wi(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function nu(n,e,s=!1){let a,t;const l=sn(n);return l?(a=n,t=me):(a=n.get,t=n.set),new Zd(a,t,l||!t,s)}function Ke(n,e,s,a){let t;try{t=a?n(...a):n()}catch(l){ua(l,e,s)}return t}function ae(n,e,s,a){if(sn(n)){const l=Ke(n,e,s,a);return l&&$o(l)&&l.catch(o=>{ua(o,e,s)}),l}const t=[];for(let l=0;l<n.length;l++)t.push(ae(n[l],e,s,a));return t}function ua(n,e,s,a=!0){const t=e?e.vnode:null;if(e){let l=e.parent;const o=e.proxy,c=s;for(;l;){const d=l.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](n,o,c)===!1)return}l=l.parent}const p=e.appContext.config.errorHandler;if(p){Ke(p,null,10,[n,o,c]);return}}eu(n,s,t,a)}function eu(n,e,s,a=!0){console.error(n)}let ea=!1,Nt=!1;const Mn=[];let Ee=0;const gs=[];let Re=null,ns=0;const ar=Promise.resolve();let Li=null;function Ss(n){const e=Li||ar;return n?e.then(this?n.bind(this):n):e}function su(n){let e=Ee+1,s=Mn.length;for(;e<s;){const a=e+s>>>1;sa(Mn[a])<n?e=a+1:s=a}return e}function tt(n){(!Mn.length||!Mn.includes(n,ea&&n.allowRecurse?Ee+1:Ee))&&(n.id==null?Mn.push(n):Mn.splice(su(n.id),0,n),tr())}function tr(){!ea&&!Nt&&(Nt=!0,Li=ar.then(ir))}function au(n){const e=Mn.indexOf(n);e>Ee&&Mn.splice(e,1)}function tu(n){X(n)?gs.push(...n):(!Re||!Re.includes(n,n.allowRecurse?ns+1:ns))&&gs.push(n),tr()}function fl(n,e=ea?Ee+1:0){for(;e<Mn.length;e++){const s=Mn[e];s&&s.pre&&(Mn.splice(e,1),e--,s())}}function Ua(n){if(gs.length){const e=[...new Set(gs)];if(gs.length=0,Re){Re.push(...e);return}for(Re=e,Re.sort((s,a)=>sa(s)-sa(a)),ns=0;ns<Re.length;ns++)Re[ns]();Re=null,ns=0}}const sa=n=>n.id==null?1/0:n.id,iu=(n,e)=>{const s=sa(n)-sa(e);if(s===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return s};function ir(n){Nt=!1,ea=!0,Mn.sort(iu);const e=me;try{for(Ee=0;Ee<Mn.length;Ee++){const s=Mn[Ee];s&&s.active!==!1&&Ke(s,null,14)}}finally{Ee=0,Mn.length=0,Ua(),ea=!1,Li=null,(Mn.length||gs.length)&&ir()}}function lu(n,e,...s){if(n.isUnmounted)return;const a=n.vnode.props||Tn;let t=s;const l=e.startsWith("update:"),o=l&&e.slice(7);if(o&&o in a){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=a[u]||Tn;h&&(t=s.map(b=>mn(b)?b.trim():b)),m&&(t=s.map(od))}let c,p=a[c=kt(e)]||a[c=kt(ie(e))];!p&&l&&(p=a[c=kt(Ds(e))]),p&&ae(p,n,6,t);const d=a[c+"Once"];if(d){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,ae(d,n,6,t)}}function lr(n,e,s=!1){const a=e.emitsCache,t=a.get(n);if(t!==void 0)return t;const l=n.emits;let o={},c=!1;if(!sn(n)){const p=d=>{const u=lr(d,e,!0);u&&(c=!0,On(o,u))};!s&&e.mixins.length&&e.mixins.forEach(p),n.extends&&p(n.extends),n.mixins&&n.mixins.forEach(p)}return!l&&!c?(Pn(n)&&a.set(n,null),null):(X(l)?l.forEach(p=>o[p]=null):On(o,l),Pn(n)&&a.set(n,o),o)}function it(n,e){return!n||!pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),vn(n,e[0].toLowerCase()+e.slice(1))||vn(n,Ds(e))||vn(n,e))}let se=null,or=null;function Ga(n){const e=se;return se=n,or=n&&n.type.__scopeId||null,e}function ou(n,e=se,s){if(!e||n._n)return n;const a=(...t)=>{a._d&&Rl(-1);const l=Ga(e);let o;try{o=n(...t)}finally{Ga(l),a._d&&Rl(1)}return o};return a._n=!0,a._c=!0,a._d=!0,a}function gt(n){const{type:e,vnode:s,proxy:a,withProxy:t,props:l,propsOptions:[o],slots:c,attrs:p,emit:d,render:u,renderCache:m,data:h,setupState:b,ctx:g,inheritAttrs:A}=n;let w,k;const E=Ga(n);try{if(s.shapeFlag&4){const B=t||a;w=de(u.call(B,B,m,l,b,h,g)),k=p}else{const B=e;w=de(B.length>1?B(l,{attrs:p,slots:c,emit:d}):B(l,null)),k=e.props?p:ru(p)}}catch(B){Js.length=0,ua(B,n,1),w=Rn(te)}let R=w;if(k&&A!==!1){const B=Object.keys(k),{shapeFlag:H}=R;B.length&&H&7&&(o&&B.some(ui)&&(k=cu(k,o)),R=Je(R,k))}return s.dirs&&(R=Je(R),R.dirs=R.dirs?R.dirs.concat(s.dirs):s.dirs),s.transition&&(R.transition=s.transition),w=R,Ga(E),w}const ru=n=>{let e;for(const s in n)(s==="class"||s==="style"||pa(s))&&((e||(e={}))[s]=n[s]);return e},cu=(n,e)=>{const s={};for(const a in n)(!ui(a)||!(a.slice(9)in e))&&(s[a]=n[a]);return s};function pu(n,e,s){const{props:a,children:t,component:l}=n,{props:o,children:c,patchFlag:p}=e,d=l.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&p>=0){if(p&1024)return!0;if(p&16)return a?gl(a,o,d):!!o;if(p&8){const u=e.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==a[h]&&!it(d,h))return!0}}}else return(t||c)&&(!c||!c.$stable)?!0:a===o?!1:a?o?gl(a,o,d):!0:!!o;return!1}function gl(n,e,s){const a=Object.keys(e);if(a.length!==Object.keys(n).length)return!0;for(let t=0;t<a.length;t++){const l=a[t];if(e[l]!==n[l]&&!it(s,l))return!0}return!1}function du({vnode:n,parent:e},s){for(;e&&e.subTree===n;)(n=e.vnode).el=s,e=e.parent}const uu=n=>n.__isSuspense;function rr(n,e){e&&e.pendingBranch?X(n)?e.effects.push(...n):e.effects.push(n):tu(n)}function cr(n,e){return Ti(n,null,e)}const Oa={};function on(n,e,s){return Ti(n,e,s)}function Ti(n,e,{immediate:s,deep:a,flush:t,onTrack:l,onTrigger:o}=Tn){var c;const p=zo()===((c=Cn)==null?void 0:c.scope)?Cn:null;let d,u=!1,m=!1;if(Sn(n)?(d=()=>n.value,u=Ha(n)):fs(n)?(d=()=>n,a=!0):X(n)?(m=!0,u=n.some(B=>fs(B)||Ha(B)),d=()=>n.map(B=>{if(Sn(B))return B.value;if(fs(B))return ms(B);if(sn(B))return Ke(B,p,2)})):sn(n)?e?d=()=>Ke(n,p,2):d=()=>{if(!(p&&p.isUnmounted))return h&&h(),ae(n,p,3,[b])}:d=me,e&&a){const B=d;d=()=>ms(B())}let h,b=B=>{h=E.onStop=()=>{Ke(B,p,4)}},g;if(Ps)if(b=me,e?s&&ae(e,p,3,[d(),m?[]:void 0,b]):d(),t==="sync"){const B=ov();g=B.__watcherHandles||(B.__watcherHandles=[])}else return me;let A=m?new Array(n.length).fill(Oa):Oa;const w=()=>{if(E.active)if(e){const B=E.run();(a||u||(m?B.some((H,V)=>Zs(H,A[V])):Zs(B,A)))&&(h&&h(),ae(e,p,3,[B,A===Oa?void 0:m&&A[0]===Oa?[]:A,b]),A=B)}else E.run()};w.allowRecurse=!!e;let k;t==="sync"?k=w:t==="post"?k=()=>Un(w,p&&p.suspense):(w.pre=!0,p&&(w.id=p.uid),k=()=>tt(w));const E=new fi(d,k);e?s?w():A=E.run():t==="post"?Un(E.run.bind(E),p&&p.suspense):E.run();const R=()=>{E.stop(),p&&p.scope&&vi(p.scope.effects,E)};return g&&g.push(R),R}function vu(n,e,s){const a=this.proxy,t=mn(n)?n.includes(".")?pr(a,n):()=>a[n]:n.bind(a,a);let l;sn(e)?l=e:(l=e.handler,s=e);const o=Cn;ws(this);const c=Ti(t,l.bind(a),s);return o?ws(o):is(),c}function pr(n,e){const s=e.split(".");return()=>{let a=n;for(let t=0;t<s.length&&a;t++)a=a[s[t]];return a}}function ms(n,e){if(!Pn(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Sn(n))ms(n.value,e);else if(X(n))for(let s=0;s<n.length;s++)ms(n[s],e);else if(So(n)||ks(n))n.forEach(s=>{ms(s,e)});else if(Fo(n))for(const s in n)ms(n[s],e);return n}function ge(n,e,s,a){const t=n.dirs,l=e&&e.dirs;for(let o=0;o<t.length;o++){const c=t[o];l&&(c.oldValue=l[o].value);let p=c.dir[a];p&&(Rs(),ae(p,s,8,[n.el,c,n,e]),Os())}}function dr(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yn(()=>{n.isMounted=!0}),Di(()=>{n.isUnmounting=!0}),n}const Zn=[Function,Array],ur={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zn,onEnter:Zn,onAfterEnter:Zn,onEnterCancelled:Zn,onBeforeLeave:Zn,onLeave:Zn,onAfterLeave:Zn,onLeaveCancelled:Zn,onBeforeAppear:Zn,onAppear:Zn,onAfterAppear:Zn,onAppearCancelled:Zn},mu={name:"BaseTransition",props:ur,setup(n,{slots:e}){const s=$s(),a=dr();let t;return()=>{const l=e.default&&Ii(e.default(),!0);if(!l||!l.length)return;let o=l[0];if(l.length>1){for(const A of l)if(A.type!==te){o=A;break}}const c=cn(n),{mode:p}=c;if(a.isLeaving)return Et(o);const d=El(o);if(!d)return Et(o);const u=aa(d,c,a,s);ta(d,u);const m=s.subTree,h=m&&El(m);let b=!1;const{getTransitionKey:g}=d.type;if(g){const A=g();t===void 0?t=A:A!==t&&(t=A,b=!0)}if(h&&h.type!==te&&(!es(d,h)||b)){const A=aa(h,c,a,s);if(ta(h,A),p==="out-in")return a.isLeaving=!0,A.afterLeave=()=>{a.isLeaving=!1,s.update.active!==!1&&s.update()},Et(o);p==="in-out"&&d.type!==te&&(A.delayLeave=(w,k,E)=>{const R=vr(a,h);R[String(h.key)]=h,w._leaveCb=()=>{k(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return o}}},hu=mu;function vr(n,e){const{leavingVNodes:s}=n;let a=s.get(e.type);return a||(a=Object.create(null),s.set(e.type,a)),a}function aa(n,e,s,a){const{appear:t,mode:l,persisted:o=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:m,onLeave:h,onAfterLeave:b,onLeaveCancelled:g,onBeforeAppear:A,onAppear:w,onAfterAppear:k,onAppearCancelled:E}=e,R=String(n.key),B=vr(s,n),H=(T,N)=>{T&&ae(T,a,9,N)},V=(T,N)=>{const q=N[1];H(T,N),X(T)?T.every(an=>an.length<=1)&&q():T.length<=1&&q()},W={mode:l,persisted:o,beforeEnter(T){let N=c;if(!s.isMounted)if(t)N=A||c;else return;T._leaveCb&&T._leaveCb(!0);const q=B[R];q&&es(n,q)&&q.el._leaveCb&&q.el._leaveCb(),H(N,[T])},enter(T){let N=p,q=d,an=u;if(!s.isMounted)if(t)N=w||p,q=k||d,an=E||u;else return;let z=!1;const Z=T._enterCb=U=>{z||(z=!0,U?H(an,[T]):H(q,[T]),W.delayedLeave&&W.delayedLeave(),T._enterCb=void 0)};N?V(N,[T,Z]):Z()},leave(T,N){const q=String(n.key);if(T._enterCb&&T._enterCb(!0),s.isUnmounting)return N();H(m,[T]);let an=!1;const z=T._leaveCb=Z=>{an||(an=!0,N(),Z?H(g,[T]):H(b,[T]),T._leaveCb=void 0,B[q]===n&&delete B[q])};B[q]=n,h?V(h,[T,z]):z()},clone(T){return aa(T,e,s,a)}};return W}function Et(n){if(va(n))return n=Je(n),n.children=null,n}function El(n){return va(n)?n.children?n.children[0]:void 0:n}function ta(n,e){n.shapeFlag&6&&n.component?ta(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ii(n,e=!1,s){let a=[],t=0;for(let l=0;l<n.length;l++){let o=n[l];const c=s==null?o.key:String(s)+String(o.key!=null?o.key:l);o.type===Qn?(o.patchFlag&128&&t++,a=a.concat(Ii(o.children,e,c))):(e||o.type!==te)&&a.push(c!=null?Je(o,{key:c}):o)}if(t>1)for(let l=0;l<a.length;l++)a[l].patchFlag=-2;return a}function S(n,e){return sn(n)?(()=>On({name:n.name},e,{setup:n}))():n}const Gs=n=>!!n.type.__asyncLoader;function v(n){sn(n)&&(n={loader:n});const{loader:e,loadingComponent:s,errorComponent:a,delay:t=200,timeout:l,suspensible:o=!0,onError:c}=n;let p=null,d,u=0;const m=()=>(u++,p=null,h()),h=()=>{let b;return p||(b=p=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),c)return new Promise((A,w)=>{c(g,()=>A(m()),()=>w(g),u+1)});throw g}).then(g=>b!==p&&p?p:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),d=g,g)))};return S({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return d},setup(){const b=Cn;if(d)return()=>yt(d,b);const g=E=>{p=null,ua(E,b,13,!a)};if(o&&b.suspense||Ps)return h().then(E=>()=>yt(E,b)).catch(E=>(g(E),()=>a?Rn(a,{error:E}):null));const A=Y(!1),w=Y(),k=Y(!!t);return t&&setTimeout(()=>{k.value=!1},t),l!=null&&setTimeout(()=>{if(!A.value&&!w.value){const E=new Error(`Async component timed out after ${l}ms.`);g(E),w.value=E}},l),h().then(()=>{A.value=!0,b.parent&&va(b.parent.vnode)&&tt(b.parent.update)}).catch(E=>{g(E),w.value=E}),()=>{if(A.value&&d)return yt(d,b);if(w.value&&a)return Rn(a,{error:w.value});if(s&&!k.value)return Rn(s)}}})}function yt(n,e){const{ref:s,props:a,children:t,ce:l}=e.vnode,o=Rn(n,a,t);return o.ref=s,o.ce=l,delete e.vnode.ce,o}const va=n=>n.type.__isKeepAlive;function bu(n,e){mr(n,"a",e)}function _u(n,e){mr(n,"da",e)}function mr(n,e,s=Cn){const a=n.__wdc||(n.__wdc=()=>{let t=s;for(;t;){if(t.isDeactivated)return;t=t.parent}return n()});if(lt(e,a,s),s){let t=s.parent;for(;t&&t.parent;)va(t.parent.vnode)&&ku(a,e,s,t),t=t.parent}}function ku(n,e,s,a){const t=lt(e,n,a,!0);ot(()=>{vi(a[e],t)},s)}function lt(n,e,s=Cn,a=!1){if(s){const t=s[n]||(s[n]=[]),l=e.__weh||(e.__weh=(...o)=>{if(s.isUnmounted)return;Rs(),ws(s);const c=ae(e,s,n,o);return is(),Os(),c});return a?t.unshift(l):t.push(l),l}}const Se=n=>(e,s=Cn)=>(!Ps||n==="sp")&&lt(n,(...a)=>e(...a),s),fu=Se("bm"),yn=Se("m"),gu=Se("bu"),hr=Se("u"),Di=Se("bum"),ot=Se("um"),Eu=Se("sp"),yu=Se("rtg"),xu=Se("rtc");function Au(n,e=Cn){lt("ec",n,e)}const br="components";function Yn(n,e){return Pu(br,n,!0,e)||n}const wu=Symbol.for("v-ndc");function Pu(n,e,s=!0,a=!1){const t=se||Cn;if(t){const l=t.type;if(n===br){const c=tv(l,!1);if(c&&(c===e||c===ie(e)||c===da(ie(e))))return l}const o=yl(t[n]||l[n],e)||yl(t.appContext[n],e);return!o&&a?l:o}}function yl(n,e){return n&&(n[e]||n[ie(e)]||n[da(ie(e))])}const Ht=n=>n?Ir(n)?Ci(n)||n.proxy:Ht(n.parent):null,Ks=On(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ht(n.parent),$root:n=>Ht(n.root),$emit:n=>n.emit,$options:n=>Ri(n),$forceUpdate:n=>n.f||(n.f=()=>tt(n.update)),$nextTick:n=>n.n||(n.n=Ss.bind(n.proxy)),$watch:n=>vu.bind(n)}),xt=(n,e)=>n!==Tn&&!n.__isScriptSetup&&vn(n,e),Lu={get({_:n},e){const{ctx:s,setupState:a,data:t,props:l,accessCache:o,type:c,appContext:p}=n;let d;if(e[0]!=="$"){const b=o[e];if(b!==void 0)switch(b){case 1:return a[e];case 2:return t[e];case 4:return s[e];case 3:return l[e]}else{if(xt(a,e))return o[e]=1,a[e];if(t!==Tn&&vn(t,e))return o[e]=2,t[e];if((d=n.propsOptions[0])&&vn(d,e))return o[e]=3,l[e];if(s!==Tn&&vn(s,e))return o[e]=4,s[e];Ut&&(o[e]=0)}}const u=Ks[e];let m,h;if(u)return e==="$attrs"&&Kn(n,"get",e),u(n);if((m=c.__cssModules)&&(m=m[e]))return m;if(s!==Tn&&vn(s,e))return o[e]=4,s[e];if(h=p.config.globalProperties,vn(h,e))return h[e]},set({_:n},e,s){const{data:a,setupState:t,ctx:l}=n;return xt(t,e)?(t[e]=s,!0):a!==Tn&&vn(a,e)?(a[e]=s,!0):vn(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(l[e]=s,!0)},has({_:{data:n,setupState:e,accessCache:s,ctx:a,appContext:t,propsOptions:l}},o){let c;return!!s[o]||n!==Tn&&vn(n,o)||xt(e,o)||(c=l[0])&&vn(c,o)||vn(a,o)||vn(Ks,o)||vn(t.config.globalProperties,o)},defineProperty(n,e,s){return s.get!=null?n._.accessCache[e]=0:vn(s,"value")&&this.set(n,e,s.value,null),Reflect.defineProperty(n,e,s)}};function xl(n){return X(n)?n.reduce((e,s)=>(e[s]=null,e),{}):n}let Ut=!0;function Tu(n){const e=Ri(n),s=n.proxy,a=n.ctx;Ut=!1,e.beforeCreate&&Al(e.beforeCreate,n,"bc");const{data:t,computed:l,methods:o,watch:c,provide:p,inject:d,created:u,beforeMount:m,mounted:h,beforeUpdate:b,updated:g,activated:A,deactivated:w,beforeDestroy:k,beforeUnmount:E,destroyed:R,unmounted:B,render:H,renderTracked:V,renderTriggered:W,errorCaptured:T,serverPrefetch:N,expose:q,inheritAttrs:an,components:z,directives:Z,filters:U}=e;if(d&&Iu(d,a,null),o)for(const _n in o){const en=o[_n];sn(en)&&(a[_n]=en.bind(s))}if(t){const _n=t.call(s,s);Pn(_n)&&(n.data=Bs(_n))}if(Ut=!0,l)for(const _n in l){const en=l[_n],re=sn(en)?en.bind(s,s):sn(en.get)?en.get.bind(s,s):me,ke=!sn(en)&&sn(en.set)?en.set.bind(s):me,Hn=x({get:re,set:ke});Object.defineProperty(a,_n,{enumerable:!0,configurable:!0,get:()=>Hn.value,set:Dn=>Hn.value=Dn})}if(c)for(const _n in c)_r(c[_n],a,s,_n);if(p){const _n=sn(p)?p.call(s):p;Reflect.ownKeys(_n).forEach(en=>{he(en,_n[en])})}u&&Al(u,n,"c");function tn(_n,en){X(en)?en.forEach(re=>_n(re.bind(s))):en&&_n(en.bind(s))}if(tn(fu,m),tn(yn,h),tn(gu,b),tn(hr,g),tn(bu,A),tn(_u,w),tn(Au,T),tn(xu,V),tn(yu,W),tn(Di,E),tn(ot,B),tn(Eu,N),X(q))if(q.length){const _n=n.exposed||(n.exposed={});q.forEach(en=>{Object.defineProperty(_n,en,{get:()=>s[en],set:re=>s[en]=re})})}else n.exposed||(n.exposed={});H&&n.render===me&&(n.render=H),an!=null&&(n.inheritAttrs=an),z&&(n.components=z),Z&&(n.directives=Z)}function Iu(n,e,s=me){X(n)&&(n=Gt(n));for(const a in n){const t=n[a];let l;Pn(t)?"default"in t?l=kn(t.from||a,t.default,!0):l=kn(t.from||a):l=kn(t),Sn(l)?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>l.value,set:o=>l.value=o}):e[a]=l}}function Al(n,e,s){ae(X(n)?n.map(a=>a.bind(e.proxy)):n.bind(e.proxy),e,s)}function _r(n,e,s,a){const t=a.includes(".")?pr(s,a):()=>s[a];if(mn(n)){const l=e[n];sn(l)&&on(t,l)}else if(sn(n))on(t,n.bind(s));else if(Pn(n))if(X(n))n.forEach(l=>_r(l,e,s,a));else{const l=sn(n.handler)?n.handler.bind(s):e[n.handler];sn(l)&&on(t,l,n)}}function Ri(n){const e=n.type,{mixins:s,extends:a}=e,{mixins:t,optionsCache:l,config:{optionMergeStrategies:o}}=n.appContext,c=l.get(e);let p;return c?p=c:!t.length&&!s&&!a?p=e:(p={},t.length&&t.forEach(d=>Ka(p,d,o,!0)),Ka(p,e,o)),Pn(e)&&l.set(e,p),p}function Ka(n,e,s,a=!1){const{mixins:t,extends:l}=e;l&&Ka(n,l,s,!0),t&&t.forEach(o=>Ka(n,o,s,!0));for(const o in e)if(!(a&&o==="expose")){const c=Du[o]||s&&s[o];n[o]=c?c(n[o],e[o]):e[o]}return n}const Du={data:wl,props:Pl,emits:Pl,methods:Hs,computed:Hs,beforeCreate:qn,created:qn,beforeMount:qn,mounted:qn,beforeUpdate:qn,updated:qn,beforeDestroy:qn,beforeUnmount:qn,destroyed:qn,unmounted:qn,activated:qn,deactivated:qn,errorCaptured:qn,serverPrefetch:qn,components:Hs,directives:Hs,watch:Ou,provide:wl,inject:Ru};function wl(n,e){return e?n?function(){return On(sn(n)?n.call(this,this):n,sn(e)?e.call(this,this):e)}:e:n}function Ru(n,e){return Hs(Gt(n),Gt(e))}function Gt(n){if(X(n)){const e={};for(let s=0;s<n.length;s++)e[n[s]]=n[s];return e}return n}function qn(n,e){return n?[...new Set([].concat(n,e))]:e}function Hs(n,e){return n?On(Object.create(null),n,e):e}function Pl(n,e){return n?X(n)&&X(e)?[...new Set([...n,...e])]:On(Object.create(null),xl(n),xl(e??{})):e}function Ou(n,e){if(!n)return e;if(!e)return n;const s=On(Object.create(null),n);for(const a in e)s[a]=qn(n[a],e[a]);return s}function kr(){return{app:null,config:{isNativeTag:ed,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bu=0;function Vu(n,e){return function(a,t=null){sn(a)||(a=On({},a)),t!=null&&!Pn(t)&&(t=null);const l=kr(),o=new Set;let c=!1;const p=l.app={_uid:Bu++,_component:a,_props:t,_container:null,_context:l,_instance:null,version:rv,get config(){return l.config},set config(d){},use(d,...u){return o.has(d)||(d&&sn(d.install)?(o.add(d),d.install(p,...u)):sn(d)&&(o.add(d),d(p,...u))),p},mixin(d){return l.mixins.includes(d)||l.mixins.push(d),p},component(d,u){return u?(l.components[d]=u,p):l.components[d]},directive(d,u){return u?(l.directives[d]=u,p):l.directives[d]},mount(d,u,m){if(!c){const h=Rn(a,t);return h.appContext=l,u&&e?e(h,d):n(h,d,m),c=!0,p._container=d,d.__vue_app__=p,Ci(h.component)||h.component.proxy}},unmount(){c&&(n(null,p._container),delete p._container.__vue_app__)},provide(d,u){return l.provides[d]=u,p},runWithContext(d){Wa=p;try{return d()}finally{Wa=null}}};return p}}let Wa=null;function he(n,e){if(Cn){let s=Cn.provides;const a=Cn.parent&&Cn.parent.provides;a===s&&(s=Cn.provides=Object.create(a)),s[n]=e}}function kn(n,e,s=!1){const a=Cn||se;if(a||Wa){const t=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:Wa._context.provides;if(t&&n in t)return t[n];if(arguments.length>1)return s&&sn(e)?e.call(a&&a.proxy):e}}function Cu(n,e,s,a=!1){const t={},l={};za(l,rt,1),n.propsDefaults=Object.create(null),fr(n,e,t,l);for(const o in n.propsOptions[0])o in t||(t[o]=void 0);s?n.props=a?t:Ud(t):n.type.props?n.props=t:n.props=l,n.attrs=l}function Su(n,e,s,a){const{props:t,attrs:l,vnode:{patchFlag:o}}=n,c=cn(t),[p]=n.propsOptions;let d=!1;if((a||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(it(n.emitsOptions,h))continue;const b=e[h];if(p)if(vn(l,h))b!==l[h]&&(l[h]=b,d=!0);else{const g=ie(h);t[g]=Kt(p,c,g,b,n,!1)}else b!==l[h]&&(l[h]=b,d=!0)}}}else{fr(n,e,t,l)&&(d=!0);let u;for(const m in c)(!e||!vn(e,m)&&((u=Ds(m))===m||!vn(e,u)))&&(p?s&&(s[m]!==void 0||s[u]!==void 0)&&(t[m]=Kt(p,c,m,void 0,n,!0)):delete t[m]);if(l!==c)for(const m in l)(!e||!vn(e,m))&&(delete l[m],d=!0)}d&&Be(n,"set","$attrs")}function fr(n,e,s,a){const[t,l]=n.propsOptions;let o=!1,c;if(e)for(let p in e){if(Us(p))continue;const d=e[p];let u;t&&vn(t,u=ie(p))?!l||!l.includes(u)?s[u]=d:(c||(c={}))[u]=d:it(n.emitsOptions,p)||(!(p in a)||d!==a[p])&&(a[p]=d,o=!0)}if(l){const p=cn(s),d=c||Tn;for(let u=0;u<l.length;u++){const m=l[u];s[m]=Kt(t,p,m,d[m],n,!vn(d,m))}}return o}function Kt(n,e,s,a,t,l){const o=n[s];if(o!=null){const c=vn(o,"default");if(c&&a===void 0){const p=o.default;if(o.type!==Function&&!o.skipFactory&&sn(p)){const{propsDefaults:d}=t;s in d?a=d[s]:(ws(t),a=d[s]=p.call(null,e),is())}else a=p}o[0]&&(l&&!c?a=!1:o[1]&&(a===""||a===Ds(s))&&(a=!0))}return a}function gr(n,e,s=!1){const a=e.propsCache,t=a.get(n);if(t)return t;const l=n.props,o={},c=[];let p=!1;if(!sn(n)){const u=m=>{p=!0;const[h,b]=gr(m,e,!0);On(o,h),b&&c.push(...b)};!s&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!l&&!p)return Pn(n)&&a.set(n,_s),_s;if(X(l))for(let u=0;u<l.length;u++){const m=ie(l[u]);Ll(m)&&(o[m]=Tn)}else if(l)for(const u in l){const m=ie(u);if(Ll(m)){const h=l[u],b=o[m]=X(h)||sn(h)?{type:h}:On({},h);if(b){const g=Dl(Boolean,b.type),A=Dl(String,b.type);b[0]=g>-1,b[1]=A<0||g<A,(g>-1||vn(b,"default"))&&c.push(m)}}}const d=[o,c];return Pn(n)&&a.set(n,d),d}function Ll(n){return n[0]!=="$"}function Tl(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Il(n,e){return Tl(n)===Tl(e)}function Dl(n,e){return X(e)?e.findIndex(s=>Il(s,n)):sn(e)&&Il(e,n)?0:-1}const Er=n=>n[0]==="_"||n==="$stable",Oi=n=>X(n)?n.map(de):[de(n)],$u=(n,e,s)=>{if(e._n)return e;const a=ou((...t)=>Oi(e(...t)),s);return a._c=!1,a},yr=(n,e,s)=>{const a=n._ctx;for(const t in n){if(Er(t))continue;const l=n[t];if(sn(l))e[t]=$u(t,l,a);else if(l!=null){const o=Oi(l);e[t]=()=>o}}},xr=(n,e)=>{const s=Oi(e);n.slots.default=()=>s},Mu=(n,e)=>{if(n.vnode.shapeFlag&32){const s=e._;s?(n.slots=cn(e),za(e,"_",s)):yr(e,n.slots={})}else n.slots={},e&&xr(n,e);za(n.slots,rt,1)},Fu=(n,e,s)=>{const{vnode:a,slots:t}=n;let l=!0,o=Tn;if(a.shapeFlag&32){const c=e._;c?s&&c===1?l=!1:(On(t,e),!s&&c===1&&delete t._):(l=!e.$stable,yr(e,t)),o=e}else e&&(xr(n,e),o={default:1});if(l)for(const c in t)!Er(c)&&!(c in o)&&delete t[c]};function Ja(n,e,s,a,t=!1){if(X(n)){n.forEach((h,b)=>Ja(h,e&&(X(e)?e[b]:e),s,a,t));return}if(Gs(a)&&!t)return;const l=a.shapeFlag&4?Ci(a.component)||a.component.proxy:a.el,o=t?null:l,{i:c,r:p}=n,d=e&&e.r,u=c.refs===Tn?c.refs={}:c.refs,m=c.setupState;if(d!=null&&d!==p&&(mn(d)?(u[d]=null,vn(m,d)&&(m[d]=null)):Sn(d)&&(d.value=null)),sn(p))Ke(p,c,12,[o,u]);else{const h=mn(p),b=Sn(p);if(h||b){const g=()=>{if(n.f){const A=h?vn(m,p)?m[p]:u[p]:p.value;t?X(A)&&vi(A,l):X(A)?A.includes(l)||A.push(l):h?(u[p]=[l],vn(m,p)&&(m[p]=u[p])):(p.value=[l],n.k&&(u[n.k]=p.value))}else h?(u[p]=o,vn(m,p)&&(m[p]=o)):b&&(p.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Un(g,s)):g()}}}let Fe=!1;const Ba=n=>/svg/.test(n.namespaceURI)&&n.tagName!=="foreignObject",Va=n=>n.nodeType===8;function ju(n){const{mt:e,p:s,o:{patchProp:a,createText:t,nextSibling:l,parentNode:o,remove:c,insert:p,createComment:d}}=n,u=(k,E)=>{if(!E.hasChildNodes()){s(null,k,E),Ua(),E._vnode=k;return}Fe=!1,m(E.firstChild,k,null,null,null),Ua(),E._vnode=k,Fe&&console.error("Hydration completed but contains mismatches.")},m=(k,E,R,B,H,V=!1)=>{const W=Va(k)&&k.data==="[",T=()=>A(k,E,R,B,H,W),{type:N,ref:q,shapeFlag:an,patchFlag:z}=E;let Z=k.nodeType;E.el=k,z===-2&&(V=!1,E.dynamicChildren=null);let U=null;switch(N){case As:Z!==3?E.children===""?(p(E.el=t(""),o(k),k),U=k):U=T():(k.data!==E.children&&(Fe=!0,k.data=E.children),U=l(k));break;case te:Z!==8||W?U=T():U=l(k);break;case Ws:if(W&&(k=l(k),Z=k.nodeType),Z===1||Z===3){U=k;const Ln=!E.children.length;for(let tn=0;tn<E.staticCount;tn++)Ln&&(E.children+=U.nodeType===1?U.outerHTML:U.data),tn===E.staticCount-1&&(E.anchor=U),U=l(U);return W?l(U):U}else T();break;case Qn:W?U=g(k,E,R,B,H,V):U=T();break;default:if(an&1)Z!==1||E.type.toLowerCase()!==k.tagName.toLowerCase()?U=T():U=h(k,E,R,B,H,V);else if(an&6){E.slotScopeIds=H;const Ln=o(k);if(e(E,Ln,null,R,B,Ba(Ln),V),U=W?w(k):l(k),U&&Va(U)&&U.data==="teleport end"&&(U=l(U)),Gs(E)){let tn;W?(tn=Rn(Qn),tn.anchor=U?U.previousSibling:Ln.lastChild):tn=k.nodeType===3?Tr(""):Rn("div"),tn.el=k,E.component.subTree=tn}}else an&64?Z!==8?U=T():U=E.type.hydrate(k,E,R,B,H,V,n,b):an&128&&(U=E.type.hydrate(k,E,R,B,Ba(o(k)),H,V,n,m))}return q!=null&&Ja(q,null,B,E),U},h=(k,E,R,B,H,V)=>{V=V||!!E.dynamicChildren;const{type:W,props:T,patchFlag:N,shapeFlag:q,dirs:an}=E,z=W==="input"&&an||W==="option";if(z||N!==-1){if(an&&ge(E,null,R,"created"),T)if(z||!V||N&48)for(const U in T)(z&&U.endsWith("value")||pa(U)&&!Us(U))&&a(k,U,null,T[U],!1,void 0,R);else T.onClick&&a(k,"onClick",null,T.onClick,!1,void 0,R);let Z;if((Z=T&&T.onVnodeBeforeMount)&&ne(Z,R,E),an&&ge(E,null,R,"beforeMount"),((Z=T&&T.onVnodeMounted)||an)&&rr(()=>{Z&&ne(Z,R,E),an&&ge(E,null,R,"mounted")},B),q&16&&!(T&&(T.innerHTML||T.textContent))){let U=b(k.firstChild,E,k,R,B,H,V);for(;U;){Fe=!0;const Ln=U;U=U.nextSibling,c(Ln)}}else q&8&&k.textContent!==E.children&&(Fe=!0,k.textContent=E.children)}return k.nextSibling},b=(k,E,R,B,H,V,W)=>{W=W||!!E.dynamicChildren;const T=E.children,N=T.length;for(let q=0;q<N;q++){const an=W?T[q]:T[q]=de(T[q]);if(k)k=m(k,an,B,H,V,W);else{if(an.type===As&&!an.children)continue;Fe=!0,s(null,an,R,null,B,H,Ba(R),V)}}return k},g=(k,E,R,B,H,V)=>{const{slotScopeIds:W}=E;W&&(H=H?H.concat(W):W);const T=o(k),N=b(l(k),E,T,R,B,H,V);return N&&Va(N)&&N.data==="]"?l(E.anchor=N):(Fe=!0,p(E.anchor=d("]"),T,N),N)},A=(k,E,R,B,H,V)=>{if(Fe=!0,E.el=null,V){const N=w(k);for(;;){const q=l(k);if(q&&q!==N)c(q);else break}}const W=l(k),T=o(k);return c(k),s(null,E,T,W,R,B,Ba(T),H),W},w=k=>{let E=0;for(;k;)if(k=l(k),k&&Va(k)&&(k.data==="["&&E++,k.data==="]")){if(E===0)return l(k);E--}return k};return[u,m]}const Un=rr;function qu(n){return zu(n,ju)}function zu(n,e){const s=Ft();s.__VUE__=!0;const{insert:a,remove:t,patchProp:l,createElement:o,createText:c,createComment:p,setText:d,setElementText:u,parentNode:m,nextSibling:h,setScopeId:b=me,insertStaticContent:g}=n,A=(_,f,y,P=null,I=null,D=null,F=!1,C=null,M=!!f.dynamicChildren)=>{if(_===f)return;_&&!es(_,f)&&(P=L(_),Dn(_,I,D,!0),_=null),f.patchFlag===-2&&(M=!1,f.dynamicChildren=null);const{type:O,ref:J,shapeFlag:G}=f;switch(O){case As:w(_,f,y,P);break;case te:k(_,f,y,P);break;case Ws:_==null&&E(f,y,P,F);break;case Qn:z(_,f,y,P,I,D,F,C,M);break;default:G&1?H(_,f,y,P,I,D,F,C,M):G&6?Z(_,f,y,P,I,D,F,C,M):(G&64||G&128)&&O.process(_,f,y,P,I,D,F,C,M,$)}J!=null&&I&&Ja(J,_&&_.ref,D,f||_,!f)},w=(_,f,y,P)=>{if(_==null)a(f.el=c(f.children),y,P);else{const I=f.el=_.el;f.children!==_.children&&d(I,f.children)}},k=(_,f,y,P)=>{_==null?a(f.el=p(f.children||""),y,P):f.el=_.el},E=(_,f,y,P)=>{[_.el,_.anchor]=g(_.children,f,y,P,_.el,_.anchor)},R=({el:_,anchor:f},y,P)=>{let I;for(;_&&_!==f;)I=h(_),a(_,y,P),_=I;a(f,y,P)},B=({el:_,anchor:f})=>{let y;for(;_&&_!==f;)y=h(_),t(_),_=y;t(f)},H=(_,f,y,P,I,D,F,C,M)=>{F=F||f.type==="svg",_==null?V(f,y,P,I,D,F,C,M):N(_,f,I,D,F,C,M)},V=(_,f,y,P,I,D,F,C)=>{let M,O;const{type:J,props:G,shapeFlag:Q,transition:nn,dirs:ln}=_;if(M=_.el=o(_.type,D,G&&G.is,G),Q&8?u(M,_.children):Q&16&&T(_.children,M,null,P,I,D&&J!=="foreignObject",F,C),ln&&ge(_,null,P,"created"),W(M,_,_.scopeId,F,P),G){for(const gn in G)gn!=="value"&&!Us(gn)&&l(M,gn,null,G[gn],D,_.children,P,I,Bn);"value"in G&&l(M,"value",null,G.value),(O=G.onVnodeBeforeMount)&&ne(O,P,_)}ln&&ge(_,null,P,"beforeMount");const An=(!I||I&&!I.pendingBranch)&&nn&&!nn.persisted;An&&nn.beforeEnter(M),a(M,f,y),((O=G&&G.onVnodeMounted)||An||ln)&&Un(()=>{O&&ne(O,P,_),An&&nn.enter(M),ln&&ge(_,null,P,"mounted")},I)},W=(_,f,y,P,I)=>{if(y&&b(_,y),P)for(let D=0;D<P.length;D++)b(_,P[D]);if(I){let D=I.subTree;if(f===D){const F=I.vnode;W(_,F,F.scopeId,F.slotScopeIds,I.parent)}}},T=(_,f,y,P,I,D,F,C,M=0)=>{for(let O=M;O<_.length;O++){const J=_[O]=C?Ne(_[O]):de(_[O]);A(null,J,f,y,P,I,D,F,C)}},N=(_,f,y,P,I,D,F)=>{const C=f.el=_.el;let{patchFlag:M,dynamicChildren:O,dirs:J}=f;M|=_.patchFlag&16;const G=_.props||Tn,Q=f.props||Tn;let nn;y&&Xe(y,!1),(nn=Q.onVnodeBeforeUpdate)&&ne(nn,y,f,_),J&&ge(f,_,y,"beforeUpdate"),y&&Xe(y,!0);const ln=I&&f.type!=="foreignObject";if(O?q(_.dynamicChildren,O,C,y,P,ln,D):F||en(_,f,C,null,y,P,ln,D,!1),M>0){if(M&16)an(C,f,G,Q,y,P,I);else if(M&2&&G.class!==Q.class&&l(C,"class",null,Q.class,I),M&4&&l(C,"style",G.style,Q.style,I),M&8){const An=f.dynamicProps;for(let gn=0;gn<An.length;gn++){const Vn=An[gn],ce=G[Vn],cs=Q[Vn];(cs!==ce||Vn==="value")&&l(C,Vn,ce,cs,I,_.children,y,P,Bn)}}M&1&&_.children!==f.children&&u(C,f.children)}else!F&&O==null&&an(C,f,G,Q,y,P,I);((nn=Q.onVnodeUpdated)||J)&&Un(()=>{nn&&ne(nn,y,f,_),J&&ge(f,_,y,"updated")},P)},q=(_,f,y,P,I,D,F)=>{for(let C=0;C<f.length;C++){const M=_[C],O=f[C],J=M.el&&(M.type===Qn||!es(M,O)||M.shapeFlag&70)?m(M.el):y;A(M,O,J,null,P,I,D,F,!0)}},an=(_,f,y,P,I,D,F)=>{if(y!==P){if(y!==Tn)for(const C in y)!Us(C)&&!(C in P)&&l(_,C,y[C],null,F,f.children,I,D,Bn);for(const C in P){if(Us(C))continue;const M=P[C],O=y[C];M!==O&&C!=="value"&&l(_,C,O,M,F,f.children,I,D,Bn)}"value"in P&&l(_,"value",y.value,P.value)}},z=(_,f,y,P,I,D,F,C,M)=>{const O=f.el=_?_.el:c(""),J=f.anchor=_?_.anchor:c("");let{patchFlag:G,dynamicChildren:Q,slotScopeIds:nn}=f;nn&&(C=C?C.concat(nn):nn),_==null?(a(O,y,P),a(J,y,P),T(f.children,y,J,I,D,F,C,M)):G>0&&G&64&&Q&&_.dynamicChildren?(q(_.dynamicChildren,Q,y,I,D,F,C),(f.key!=null||I&&f===I.subTree)&&Ar(_,f,!0)):en(_,f,y,J,I,D,F,C,M)},Z=(_,f,y,P,I,D,F,C,M)=>{f.slotScopeIds=C,_==null?f.shapeFlag&512?I.ctx.activate(f,y,P,F,M):U(f,y,P,I,D,F,M):Ln(_,f,M)},U=(_,f,y,P,I,D,F)=>{const C=_.component=Zu(_,P,I);if(va(_)&&(C.ctx.renderer=$),nv(C),C.asyncDep){if(I&&I.registerDep(C,tn),!_.el){const M=C.subTree=Rn(te);k(null,M,f,y)}return}tn(C,_,f,y,I,D,F)},Ln=(_,f,y)=>{const P=f.component=_.component;if(pu(_,f,y))if(P.asyncDep&&!P.asyncResolved){_n(P,f,y);return}else P.next=f,au(P.update),P.update();else f.el=_.el,P.vnode=f},tn=(_,f,y,P,I,D,F)=>{const C=()=>{if(_.isMounted){let{next:J,bu:G,u:Q,parent:nn,vnode:ln}=_,An=J,gn;Xe(_,!1),J?(J.el=ln.el,_n(_,J,F)):J=ln,G&&ft(G),(gn=J.props&&J.props.onVnodeBeforeUpdate)&&ne(gn,nn,J,ln),Xe(_,!0);const Vn=gt(_),ce=_.subTree;_.subTree=Vn,A(ce,Vn,m(ce.el),L(ce),_,I,D),J.el=Vn.el,An===null&&du(_,Vn.el),Q&&Un(Q,I),(gn=J.props&&J.props.onVnodeUpdated)&&Un(()=>ne(gn,nn,J,ln),I)}else{let J;const{el:G,props:Q}=f,{bm:nn,m:ln,parent:An}=_,gn=Gs(f);if(Xe(_,!1),nn&&ft(nn),!gn&&(J=Q&&Q.onVnodeBeforeMount)&&ne(J,An,f),Xe(_,!0),G&&dn){const Vn=()=>{_.subTree=gt(_),dn(G,_.subTree,_,I,null)};gn?f.type.__asyncLoader().then(()=>!_.isUnmounted&&Vn()):Vn()}else{const Vn=_.subTree=gt(_);A(null,Vn,y,P,_,I,D),f.el=Vn.el}if(ln&&Un(ln,I),!gn&&(J=Q&&Q.onVnodeMounted)){const Vn=f;Un(()=>ne(J,An,Vn),I)}(f.shapeFlag&256||An&&Gs(An.vnode)&&An.vnode.shapeFlag&256)&&_.a&&Un(_.a,I),_.isMounted=!0,f=y=P=null}},M=_.effect=new fi(C,()=>tt(O),_.scope),O=_.update=()=>M.run();O.id=_.uid,Xe(_,!0),O()},_n=(_,f,y)=>{f.component=_;const P=_.vnode.props;_.vnode=f,_.next=null,Su(_,f.props,P,y),Fu(_,f.children,y),Rs(),fl(),Os()},en=(_,f,y,P,I,D,F,C,M=!1)=>{const O=_&&_.children,J=_?_.shapeFlag:0,G=f.children,{patchFlag:Q,shapeFlag:nn}=f;if(Q>0){if(Q&128){ke(O,G,y,P,I,D,F,C,M);return}else if(Q&256){re(O,G,y,P,I,D,F,C,M);return}}nn&8?(J&16&&Bn(O,I,D),G!==O&&u(y,G)):J&16?nn&16?ke(O,G,y,P,I,D,F,C,M):Bn(O,I,D,!0):(J&8&&u(y,""),nn&16&&T(G,y,P,I,D,F,C,M))},re=(_,f,y,P,I,D,F,C,M)=>{_=_||_s,f=f||_s;const O=_.length,J=f.length,G=Math.min(O,J);let Q;for(Q=0;Q<G;Q++){const nn=f[Q]=M?Ne(f[Q]):de(f[Q]);A(_[Q],nn,y,null,I,D,F,C,M)}O>J?Bn(_,I,D,!0,!1,G):T(f,y,P,I,D,F,C,M,G)},ke=(_,f,y,P,I,D,F,C,M)=>{let O=0;const J=f.length;let G=_.length-1,Q=J-1;for(;O<=G&&O<=Q;){const nn=_[O],ln=f[O]=M?Ne(f[O]):de(f[O]);if(es(nn,ln))A(nn,ln,y,null,I,D,F,C,M);else break;O++}for(;O<=G&&O<=Q;){const nn=_[G],ln=f[Q]=M?Ne(f[Q]):de(f[Q]);if(es(nn,ln))A(nn,ln,y,null,I,D,F,C,M);else break;G--,Q--}if(O>G){if(O<=Q){const nn=Q+1,ln=nn<J?f[nn].el:P;for(;O<=Q;)A(null,f[O]=M?Ne(f[O]):de(f[O]),y,ln,I,D,F,C,M),O++}}else if(O>Q)for(;O<=G;)Dn(_[O],I,D,!0),O++;else{const nn=O,ln=O,An=new Map;for(O=ln;O<=Q;O++){const Wn=f[O]=M?Ne(f[O]):de(f[O]);Wn.key!=null&&An.set(Wn.key,O)}let gn,Vn=0;const ce=Q-ln+1;let cs=!1,ol=0;const js=new Array(ce);for(O=0;O<ce;O++)js[O]=0;for(O=nn;O<=G;O++){const Wn=_[O];if(Vn>=ce){Dn(Wn,I,D,!0);continue}let fe;if(Wn.key!=null)fe=An.get(Wn.key);else for(gn=ln;gn<=Q;gn++)if(js[gn-ln]===0&&es(Wn,f[gn])){fe=gn;break}fe===void 0?Dn(Wn,I,D,!0):(js[fe-ln]=O+1,fe>=ol?ol=fe:cs=!0,A(Wn,f[fe],y,null,I,D,F,C,M),Vn++)}const rl=cs?Nu(js):_s;for(gn=rl.length-1,O=ce-1;O>=0;O--){const Wn=ln+O,fe=f[Wn],cl=Wn+1<J?f[Wn+1].el:P;js[O]===0?A(null,fe,y,cl,I,D,F,C,M):cs&&(gn<0||O!==rl[gn]?Hn(fe,y,cl,2):gn--)}}},Hn=(_,f,y,P,I=null)=>{const{el:D,type:F,transition:C,children:M,shapeFlag:O}=_;if(O&6){Hn(_.component.subTree,f,y,P);return}if(O&128){_.suspense.move(f,y,P);return}if(O&64){F.move(_,f,y,$);return}if(F===Qn){a(D,f,y);for(let G=0;G<M.length;G++)Hn(M[G],f,y,P);a(_.anchor,f,y);return}if(F===Ws){R(_,f,y);return}if(P!==2&&O&1&&C)if(P===0)C.beforeEnter(D),a(D,f,y),Un(()=>C.enter(D),I);else{const{leave:G,delayLeave:Q,afterLeave:nn}=C,ln=()=>a(D,f,y),An=()=>{G(D,()=>{ln(),nn&&nn()})};Q?Q(D,ln,An):An()}else a(D,f,y)},Dn=(_,f,y,P=!1,I=!1)=>{const{type:D,props:F,ref:C,children:M,dynamicChildren:O,shapeFlag:J,patchFlag:G,dirs:Q}=_;if(C!=null&&Ja(C,null,y,_,!0),J&256){f.ctx.deactivate(_);return}const nn=J&1&&Q,ln=!Gs(_);let An;if(ln&&(An=F&&F.onVnodeBeforeUnmount)&&ne(An,f,_),J&6)$e(_.component,y,P);else{if(J&128){_.suspense.unmount(y,P);return}nn&&ge(_,null,f,"beforeUnmount"),J&64?_.type.remove(_,f,y,I,$,P):O&&(D!==Qn||G>0&&G&64)?Bn(O,f,y,!1,!0):(D===Qn&&G&384||!I&&J&16)&&Bn(M,f,y),P&&Pe(_)}(ln&&(An=F&&F.onVnodeUnmounted)||nn)&&Un(()=>{An&&ne(An,f,_),nn&&ge(_,null,f,"unmounted")},y)},Pe=_=>{const{type:f,el:y,anchor:P,transition:I}=_;if(f===Qn){Xn(y,P);return}if(f===Ws){B(_);return}const D=()=>{t(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(_.shapeFlag&1&&I&&!I.persisted){const{leave:F,delayLeave:C}=I,M=()=>F(y,D);C?C(_.el,D,M):M()}else D()},Xn=(_,f)=>{let y;for(;_!==f;)y=h(_),t(_),_=y;t(f)},$e=(_,f,y)=>{const{bum:P,scope:I,update:D,subTree:F,um:C}=_;P&&ft(P),I.stop(),D&&(D.active=!1,Dn(F,_,f,y)),C&&Un(C,f),Un(()=>{_.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Bn=(_,f,y,P=!1,I=!1,D=0)=>{for(let F=D;F<_.length;F++)Dn(_[F],f,y,P,I)},L=_=>_.shapeFlag&6?L(_.component.subTree):_.shapeFlag&128?_.suspense.next():h(_.anchor||_.el),j=(_,f,y)=>{_==null?f._vnode&&Dn(f._vnode,null,null,!0):A(f._vnode||null,_,f,null,null,null,y),fl(),Ua(),f._vnode=_},$={p:A,um:Dn,m:Hn,r:Pe,mt:U,mc:T,pc:en,pbc:q,n:L,o:n};let K,dn;return e&&([K,dn]=e($)),{render:j,hydrate:K,createApp:Vu(j,K)}}function Xe({effect:n,update:e},s){n.allowRecurse=e.allowRecurse=s}function Ar(n,e,s=!1){const a=n.children,t=e.children;if(X(a)&&X(t))for(let l=0;l<a.length;l++){const o=a[l];let c=t[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=t[l]=Ne(t[l]),c.el=o.el),s||Ar(o,c)),c.type===As&&(c.el=o.el)}}function Nu(n){const e=n.slice(),s=[0];let a,t,l,o,c;const p=n.length;for(a=0;a<p;a++){const d=n[a];if(d!==0){if(t=s[s.length-1],n[t]<d){e[a]=t,s.push(a);continue}for(l=0,o=s.length-1;l<o;)c=l+o>>1,n[s[c]]<d?l=c+1:o=c;d<n[s[l]]&&(l>0&&(e[a]=s[l-1]),s[l]=a)}}for(l=s.length,o=s[l-1];l-- >0;)s[l]=o,o=e[o];return s}const Hu=n=>n.__isTeleport,Qn=Symbol.for("v-fgt"),As=Symbol.for("v-txt"),te=Symbol.for("v-cmt"),Ws=Symbol.for("v-stc"),Js=[];let ve=null;function Uu(n=!1){Js.push(ve=n?null:[])}function Gu(){Js.pop(),ve=Js[Js.length-1]||null}let ia=1;function Rl(n){ia+=n}function wr(n){return n.dynamicChildren=ia>0?ve||_s:null,Gu(),ia>0&&ve&&ve.push(n),n}function B_(n,e,s,a,t,l){return wr(Lr(n,e,s,a,t,l,!0))}function Ku(n,e,s,a,t){return wr(Rn(n,e,s,a,t,!0))}function Wt(n){return n?n.__v_isVNode===!0:!1}function es(n,e){return n.type===e.type&&n.key===e.key}const rt="__vInternal",Pr=({key:n})=>n??null,qa=({ref:n,ref_key:e,ref_for:s})=>(typeof n=="number"&&(n=""+n),n!=null?mn(n)||Sn(n)||sn(n)?{i:se,r:n,k:e,f:!!s}:n:null);function Lr(n,e=null,s=null,a=0,t=null,l=n===Qn?0:1,o=!1,c=!1){const p={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Pr(e),ref:e&&qa(e),scopeId:or,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:a,dynamicProps:t,dynamicChildren:null,appContext:null,ctx:se};return c?(Bi(p,s),l&128&&n.normalize(p)):s&&(p.shapeFlag|=mn(s)?8:16),ia>0&&!o&&ve&&(p.patchFlag>0||l&6)&&p.patchFlag!==32&&ve.push(p),p}const Rn=Wu;function Wu(n,e=null,s=null,a=0,t=null,l=!1){if((!n||n===wu)&&(n=te),Wt(n)){const c=Je(n,e,!0);return s&&Bi(c,s),ia>0&&!l&&ve&&(c.shapeFlag&6?ve[ve.indexOf(n)]=c:ve.push(c)),c.patchFlag|=-2,c}if(iv(n)&&(n=n.__vccOpts),e){e=Ju(e);let{class:c,style:p}=e;c&&!mn(c)&&(e.class=_i(c)),Pn(p)&&(Zo(p)&&!X(p)&&(p=On({},p)),e.style=bi(p))}const o=mn(n)?1:uu(n)?128:Hu(n)?64:Pn(n)?4:sn(n)?2:0;return Lr(n,e,s,a,t,o,l,!0)}function Ju(n){return n?Zo(n)||rt in n?On({},n):n:null}function Je(n,e,s=!1){const{props:a,ref:t,patchFlag:l,children:o}=n,c=e?Qu(a||{},e):a;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Pr(c),ref:e&&e.ref?s&&t?X(t)?t.concat(qa(e)):[t,qa(e)]:qa(e):t,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Qn?l===-1?16:l|16:l,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Je(n.ssContent),ssFallback:n.ssFallback&&Je(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Tr(n=" ",e=0){return Rn(As,null,n,e)}function V_(n,e){const s=Rn(Ws,null,n);return s.staticCount=e,s}function C_(n="",e=!1){return e?(Uu(),Ku(te,null,n)):Rn(te,null,n)}function de(n){return n==null||typeof n=="boolean"?Rn(te):X(n)?Rn(Qn,null,n.slice()):typeof n=="object"?Ne(n):Rn(As,null,String(n))}function Ne(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Je(n)}function Bi(n,e){let s=0;const{shapeFlag:a}=n;if(e==null)e=null;else if(X(e))s=16;else if(typeof e=="object")if(a&65){const t=e.default;t&&(t._c&&(t._d=!1),Bi(n,t()),t._c&&(t._d=!0));return}else{s=32;const t=e._;!t&&!(rt in e)?e._ctx=se:t===3&&se&&(se.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else sn(e)?(e={default:e,_ctx:se},s=32):(e=String(e),a&64?(s=16,e=[Tr(e)]):s=8);n.children=e,n.shapeFlag|=s}function Qu(...n){const e={};for(let s=0;s<n.length;s++){const a=n[s];for(const t in a)if(t==="class")e.class!==a.class&&(e.class=_i([e.class,a.class]));else if(t==="style")e.style=bi([e.style,a.style]);else if(pa(t)){const l=e[t],o=a[t];o&&l!==o&&!(X(l)&&l.includes(o))&&(e[t]=l?[].concat(l,o):o)}else t!==""&&(e[t]=a[t])}return e}function ne(n,e,s,a=null){ae(n,e,7,[s,a])}const Yu=kr();let Xu=0;function Zu(n,e,s){const a=n.type,t=(e?e.appContext:n.appContext)||Yu,l={uid:Xu++,vnode:n,type:a,parent:e,appContext:t,root:null,next:null,subTree:null,effect:null,update:null,scope:new hd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(t.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gr(a,t),emitsOptions:lr(a,t),emit:null,emitted:null,propsDefaults:Tn,inheritAttrs:a.inheritAttrs,ctx:Tn,data:Tn,props:Tn,attrs:Tn,slots:Tn,refs:Tn,setupState:Tn,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=e?e.root:l,l.emit=lu.bind(null,l),n.ce&&n.ce(l),l}let Cn=null;const $s=()=>Cn||se;let Vi,ps,Ol="__VUE_INSTANCE_SETTERS__";(ps=Ft()[Ol])||(ps=Ft()[Ol]=[]),ps.push(n=>Cn=n),Vi=n=>{ps.length>1?ps.forEach(e=>e(n)):ps[0](n)};const ws=n=>{Vi(n),n.scope.on()},is=()=>{Cn&&Cn.scope.off(),Vi(null)};function Ir(n){return n.vnode.shapeFlag&4}let Ps=!1;function nv(n,e=!1){Ps=e;const{props:s,children:a}=n.vnode,t=Ir(n);Cu(n,s,t,e),Mu(n,a);const l=t?ev(n,e):void 0;return Ps=!1,l}function ev(n,e){const s=n.type;n.accessCache=Object.create(null),n.proxy=nr(new Proxy(n.ctx,Lu));const{setup:a}=s;if(a){const t=n.setupContext=a.length>1?av(n):null;ws(n),Rs();const l=Ke(a,n,0,[n.props,t]);if(Os(),is(),$o(l)){if(l.then(is,is),e)return l.then(o=>{Bl(n,o,e)}).catch(o=>{ua(o,n,0)});n.asyncDep=l}else Bl(n,l,e)}else Dr(n,e)}function Bl(n,e,s){sn(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Pn(e)&&(n.setupState=sr(e)),Dr(n,s)}let Vl;function Dr(n,e,s){const a=n.type;if(!n.render){if(!e&&Vl&&!a.render){const t=a.template||Ri(n).template;if(t){const{isCustomElement:l,compilerOptions:o}=n.appContext.config,{delimiters:c,compilerOptions:p}=a,d=On(On({isCustomElement:l,delimiters:c},o),p);a.render=Vl(t,d)}}n.render=a.render||me}ws(n),Rs(),Tu(n),Os(),is()}function sv(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,s){return Kn(n,"get","$attrs"),e[s]}}))}function av(n){const e=s=>{n.exposed=s||{}};return{get attrs(){return sv(n)},slots:n.slots,emit:n.emit,expose:e}}function Ci(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(sr(nr(n.exposed)),{get(e,s){if(s in e)return e[s];if(s in Ks)return Ks[s](n)},has(e,s){return s in e||s in Ks}}))}function tv(n,e=!0){return sn(n)?n.displayName||n.name:n.name||e&&n.__name}function iv(n){return sn(n)&&"__vccOpts"in n}const x=(n,e)=>nu(n,e,Ps);function r(n,e,s){const a=arguments.length;return a===2?Pn(e)&&!X(e)?Wt(e)?Rn(n,null,[e]):Rn(n,e):Rn(n,null,e):(a>3?s=Array.prototype.slice.call(arguments,2):a===3&&Wt(s)&&(s=[s]),Rn(n,e,s))}const lv=Symbol.for("v-scx"),ov=()=>kn(lv),rv="3.3.4",cv="http://www.w3.org/2000/svg",ss=typeof document<"u"?document:null,Cl=ss&&ss.createElement("template"),pv={insert:(n,e,s)=>{e.insertBefore(n,s||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,s,a)=>{const t=e?ss.createElementNS(cv,n):ss.createElement(n,s?{is:s}:void 0);return n==="select"&&a&&a.multiple!=null&&t.setAttribute("multiple",a.multiple),t},createText:n=>ss.createTextNode(n),createComment:n=>ss.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ss.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,s,a,t,l){const o=s?s.previousSibling:e.lastChild;if(t&&(t===l||t.nextSibling))for(;e.insertBefore(t.cloneNode(!0),s),!(t===l||!(t=t.nextSibling)););else{Cl.innerHTML=a?`<svg>${n}</svg>`:n;const c=Cl.content;if(a){const p=c.firstChild;for(;p.firstChild;)c.appendChild(p.firstChild);c.removeChild(p)}e.insertBefore(c,s)}return[o?o.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}};function dv(n,e,s){const a=n._vtc;a&&(e=(e?[e,...a]:[...a]).join(" ")),e==null?n.removeAttribute("class"):s?n.setAttribute("class",e):n.className=e}function uv(n,e,s){const a=n.style,t=mn(s);if(s&&!t){if(e&&!mn(e))for(const l in e)s[l]==null&&Jt(a,l,"");for(const l in s)Jt(a,l,s[l])}else{const l=a.display;t?e!==s&&(a.cssText=s):e&&n.removeAttribute("style"),"_vod"in n&&(a.display=l)}}const Sl=/\s*!important$/;function Jt(n,e,s){if(X(s))s.forEach(a=>Jt(n,e,a));else if(s==null&&(s=""),e.startsWith("--"))n.setProperty(e,s);else{const a=vv(n,e);Sl.test(s)?n.setProperty(Ds(a),s.replace(Sl,""),"important"):n[a]=s}}const $l=["Webkit","Moz","ms"],At={};function vv(n,e){const s=At[e];if(s)return s;let a=ie(e);if(a!=="filter"&&a in n)return At[e]=a;a=da(a);for(let t=0;t<$l.length;t++){const l=$l[t]+a;if(l in n)return At[e]=l}return e}const Ml="http://www.w3.org/1999/xlink";function mv(n,e,s,a,t){if(a&&e.startsWith("xlink:"))s==null?n.removeAttributeNS(Ml,e.slice(6,e.length)):n.setAttributeNS(Ml,e,s);else{const l=md(e);s==null||l&&!jo(s)?n.removeAttribute(e):n.setAttribute(e,l?"":s)}}function hv(n,e,s,a,t,l,o){if(e==="innerHTML"||e==="textContent"){a&&o(a,t,l),n[e]=s??"";return}const c=n.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){n._value=s;const d=c==="OPTION"?n.getAttribute("value"):n.value,u=s??"";d!==u&&(n.value=u),s==null&&n.removeAttribute(e);return}let p=!1;if(s===""||s==null){const d=typeof n[e];d==="boolean"?s=jo(s):s==null&&d==="string"?(s="",p=!0):d==="number"&&(s=0,p=!0)}try{n[e]=s}catch{}p&&n.removeAttribute(e)}function bv(n,e,s,a){n.addEventListener(e,s,a)}function _v(n,e,s,a){n.removeEventListener(e,s,a)}function kv(n,e,s,a,t=null){const l=n._vei||(n._vei={}),o=l[e];if(a&&o)o.value=a;else{const[c,p]=fv(e);if(a){const d=l[e]=yv(a,t);bv(n,c,d,p)}else o&&(_v(n,c,o,p),l[e]=void 0)}}const Fl=/(?:Once|Passive|Capture)$/;function fv(n){let e;if(Fl.test(n)){e={};let a;for(;a=n.match(Fl);)n=n.slice(0,n.length-a[0].length),e[a[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ds(n.slice(2)),e]}let wt=0;const gv=Promise.resolve(),Ev=()=>wt||(gv.then(()=>wt=0),wt=Date.now());function yv(n,e){const s=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=s.attached)return;ae(xv(a,s.value),e,5,[a])};return s.value=n,s.attached=Ev(),s}function xv(n,e){if(X(e)){const s=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{s.call(n),n._stopped=!0},e.map(a=>t=>!t._stopped&&a&&a(t))}else return e}const jl=/^on[a-z]/,Av=(n,e,s,a,t=!1,l,o,c,p)=>{e==="class"?dv(n,a,t):e==="style"?uv(n,s,a):pa(e)?ui(e)||kv(n,e,s,a,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wv(n,e,a,t))?hv(n,e,a,l,o,c,p):(e==="true-value"?n._trueValue=a:e==="false-value"&&(n._falseValue=a),mv(n,e,a,t))};function wv(n,e,s,a){return a?!!(e==="innerHTML"||e==="textContent"||e in n&&jl.test(e)&&sn(s)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||jl.test(e)&&mn(s)?!1:e in n}const je="transition",qs="animation",Qe=(n,{slots:e})=>r(hu,Or(n),e);Qe.displayName="Transition";const Rr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pv=Qe.props=On({},ur,Rr),Ze=(n,e=[])=>{X(n)?n.forEach(s=>s(...e)):n&&n(...e)},ql=n=>n?X(n)?n.some(e=>e.length>1):n.length>1:!1;function Or(n){const e={};for(const z in n)z in Rr||(e[z]=n[z]);if(n.css===!1)return e;const{name:s="v",type:a,duration:t,enterFromClass:l=`${s}-enter-from`,enterActiveClass:o=`${s}-enter-active`,enterToClass:c=`${s}-enter-to`,appearFromClass:p=l,appearActiveClass:d=o,appearToClass:u=c,leaveFromClass:m=`${s}-leave-from`,leaveActiveClass:h=`${s}-leave-active`,leaveToClass:b=`${s}-leave-to`}=n,g=Lv(t),A=g&&g[0],w=g&&g[1],{onBeforeEnter:k,onEnter:E,onEnterCancelled:R,onLeave:B,onLeaveCancelled:H,onBeforeAppear:V=k,onAppear:W=E,onAppearCancelled:T=R}=e,N=(z,Z,U)=>{ze(z,Z?u:c),ze(z,Z?d:o),U&&U()},q=(z,Z)=>{z._isLeaving=!1,ze(z,m),ze(z,b),ze(z,h),Z&&Z()},an=z=>(Z,U)=>{const Ln=z?W:E,tn=()=>N(Z,z,U);Ze(Ln,[Z,tn]),zl(()=>{ze(Z,z?p:l),Te(Z,z?u:c),ql(Ln)||Nl(Z,a,A,tn)})};return On(e,{onBeforeEnter(z){Ze(k,[z]),Te(z,l),Te(z,o)},onBeforeAppear(z){Ze(V,[z]),Te(z,p),Te(z,d)},onEnter:an(!1),onAppear:an(!0),onLeave(z,Z){z._isLeaving=!0;const U=()=>q(z,Z);Te(z,m),Vr(),Te(z,h),zl(()=>{z._isLeaving&&(ze(z,m),Te(z,b),ql(B)||Nl(z,a,w,U))}),Ze(B,[z,U])},onEnterCancelled(z){N(z,!1),Ze(R,[z])},onAppearCancelled(z){N(z,!0),Ze(T,[z])},onLeaveCancelled(z){q(z),Ze(H,[z])}})}function Lv(n){if(n==null)return null;if(Pn(n))return[Pt(n.enter),Pt(n.leave)];{const e=Pt(n);return[e,e]}}function Pt(n){return rd(n)}function Te(n,e){e.split(/\s+/).forEach(s=>s&&n.classList.add(s)),(n._vtc||(n._vtc=new Set)).add(e)}function ze(n,e){e.split(/\s+/).forEach(a=>a&&n.classList.remove(a));const{_vtc:s}=n;s&&(s.delete(e),s.size||(n._vtc=void 0))}function zl(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Tv=0;function Nl(n,e,s,a){const t=n._endId=++Tv,l=()=>{t===n._endId&&a()};if(s)return setTimeout(l,s);const{type:o,timeout:c,propCount:p}=Br(n,e);if(!o)return a();const d=o+"end";let u=0;const m=()=>{n.removeEventListener(d,h),l()},h=b=>{b.target===n&&++u>=p&&m()};setTimeout(()=>{u<p&&m()},c+1),n.addEventListener(d,h)}function Br(n,e){const s=window.getComputedStyle(n),a=g=>(s[g]||"").split(", "),t=a(`${je}Delay`),l=a(`${je}Duration`),o=Hl(t,l),c=a(`${qs}Delay`),p=a(`${qs}Duration`),d=Hl(c,p);let u=null,m=0,h=0;e===je?o>0&&(u=je,m=o,h=l.length):e===qs?d>0&&(u=qs,m=d,h=p.length):(m=Math.max(o,d),u=m>0?o>d?je:qs:null,h=u?u===je?l.length:p.length:0);const b=u===je&&/\b(transform|all)(,|$)/.test(a(`${je}Property`).toString());return{type:u,timeout:m,propCount:h,hasTransform:b}}function Hl(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((s,a)=>Ul(s)+Ul(n[a])))}function Ul(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function Vr(){return document.body.offsetHeight}const Cr=new WeakMap,Sr=new WeakMap,$r={name:"TransitionGroup",props:On({},Pv,{tag:String,moveClass:String}),setup(n,{slots:e}){const s=$s(),a=dr();let t,l;return hr(()=>{if(!t.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!Vv(t[0].el,s.vnode.el,o))return;t.forEach(Rv),t.forEach(Ov);const c=t.filter(Bv);Vr(),c.forEach(p=>{const d=p.el,u=d.style;Te(d,o),u.transform=u.webkitTransform=u.transitionDuration="";const m=d._moveCb=h=>{h&&h.target!==d||(!h||/transform$/.test(h.propertyName))&&(d.removeEventListener("transitionend",m),d._moveCb=null,ze(d,o))};d.addEventListener("transitionend",m)})}),()=>{const o=cn(n),c=Or(o);let p=o.tag||Qn;t=l,l=e.default?Ii(e.default()):[];for(let d=0;d<l.length;d++){const u=l[d];u.key!=null&&ta(u,aa(u,c,a,s))}if(t)for(let d=0;d<t.length;d++){const u=t[d];ta(u,aa(u,c,a,s)),Cr.set(u,u.el.getBoundingClientRect())}return Rn(p,null,l)}}},Iv=n=>delete n.mode;$r.props;const Dv=$r;function Rv(n){const e=n.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Ov(n){Sr.set(n,n.el.getBoundingClientRect())}function Bv(n){const e=Cr.get(n),s=Sr.get(n),a=e.left-s.left,t=e.top-s.top;if(a||t){const l=n.el.style;return l.transform=l.webkitTransform=`translate(${a}px,${t}px)`,l.transitionDuration="0s",n}}function Vv(n,e,s){const a=n.cloneNode();n._vtc&&n._vtc.forEach(o=>{o.split(/\s+/).forEach(c=>c&&a.classList.remove(c))}),s.split(/\s+/).forEach(o=>o&&a.classList.add(o)),a.style.display="none";const t=e.nodeType===1?e:e.parentNode;t.appendChild(a);const{hasTransform:l}=Br(a);return t.removeChild(a),l}const Cv=On({patchProp:Av},pv);let Lt,Gl=!1;function Sv(){return Lt=Gl?Lt:qu(Cv),Gl=!0,Lt}const $v=(...n)=>{const e=Sv().createApp(...n),{mount:s}=e;return e.mount=a=>{const t=Mv(a);if(t)return s(t,!0,t instanceof SVGElement)},e};function Mv(n){return mn(n)?document.querySelector(n):n}const Fv={"v-8daa1a0e":()=>i(()=>import("./index.html-2960ea78.js"),[]).then(({data:n})=>n),"v-7664c5fa":()=>i(()=>import("./index.html-6751ade9.js"),[]).then(({data:n})=>n),"v-60fff667":()=>i(()=>import("./activemq-install.html-5c126bbc.js"),[]).then(({data:n})=>n),"v-4378712f":()=>i(()=>import("./centos-jdk.html-7a66d99c.js"),[]).then(({data:n})=>n),"v-16b6b750":()=>i(()=>import("./fastdfs-install.html-aa1651b7.js"),[]).then(({data:n})=>n),"v-763ef6d8":()=>i(()=>import("./hexo-blog.html-d2a31560.js"),[]).then(({data:n})=>n),"v-d22f44ac":()=>i(()=>import("./linux-python.html-d8b10dc2.js"),[]).then(({data:n})=>n),"v-a5639d14":()=>i(()=>import("./maven-nexus.html-07fa457b.js"),[]).then(({data:n})=>n),"v-9e4f7a5a":()=>i(()=>import("./rabbitmq-install.html-cb56b95c.js"),[]).then(({data:n})=>n),"v-60544e4e":()=>i(()=>import("./rocketmq-install.html-ac48bde6.js"),[]).then(({data:n})=>n),"v-5210fd8e":()=>i(()=>import("./zookeeper-install.html-86cf930c.js"),[]).then(({data:n})=>n),"v-71fde78e":()=>i(()=>import("./index.html-815aabf7.js"),[]).then(({data:n})=>n),"v-d2fece48":()=>i(()=>import("./git-basic.html-ccbd6179.js"),[]).then(({data:n})=>n),"v-191529b7":()=>i(()=>import("./git-commit-message.html-98ac5936.js"),[]).then(({data:n})=>n),"v-4899a812":()=>i(()=>import("./grafana-y.html-d06b87b5.js"),[]).then(({data:n})=>n),"v-104b656e":()=>i(()=>import("./monitor-system.html-1b31ea4e.js"),[]).then(({data:n})=>n),"v-420473ed":()=>i(()=>import("./promethues-alerts.html-8eb911cb.js"),[]).then(({data:n})=>n),"v-73fbd21f":()=>i(()=>import("./blog.html-8462c2ac.js"),[]).then(({data:n})=>n),"v-8d980508":()=>i(()=>import("./curl-bash.html-84af047f.js"),[]).then(({data:n})=>n),"v-cc3a53f4":()=>i(()=>import("./mac-disk.html-4bd303ec.js"),[]).then(({data:n})=>n),"v-4d7b907e":()=>i(()=>import("./mac-proxy.html-7a1b9de0.js"),[]).then(({data:n})=>n),"v-6bac1857":()=>i(()=>import("./vim.html-9ec9e7cf.js"),[]).then(({data:n})=>n),"v-26fca4d5":()=>i(()=>import("./writing.html-03bca257.js"),[]).then(({data:n})=>n),"v-a1ff8004":()=>i(()=>import("./kernel-para-opt.html-d79be6d8.js"),[]).then(({data:n})=>n),"v-d623d08a":()=>i(()=>import("./index.html-23b9ccac.js"),[]).then(({data:n})=>n),"v-d64bd706":()=>i(()=>import("./tcp-three-four.html-e1b0983d.js"),[]).then(({data:n})=>n),"v-754f0210":()=>i(()=>import("./todo.html-0d48d6b4.js"),[]).then(({data:n})=>n),"v-ba097eb4":()=>i(()=>import("./index.html-95e97260.js"),[]).then(({data:n})=>n),"v-2d9f4ba5":()=>i(()=>import("./ssh-key.html-12e75278.js"),[]).then(({data:n})=>n),"v-87f9ec82":()=>i(()=>import("./docker-docker.html-f169ff95.js"),[]).then(({data:n})=>n),"v-1497ef65":()=>i(()=>import("./docker-proxy.html-6acfe5d6.js"),[]).then(({data:n})=>n),"v-508989f3":()=>i(()=>import("./index.html-a85626e2.js"),[]).then(({data:n})=>n),"v-5257418c":()=>i(()=>import("./etcd-defrag.html-4fad746f.js"),[]).then(({data:n})=>n),"v-7da870a3":()=>i(()=>import("./etcd-first.html-f82f86e6.js"),[]).then(({data:n})=>n),"v-bcd7447a":()=>i(()=>import("./index.html-428b12c9.js"),[]).then(({data:n})=>n),"v-3f2cd8fb":()=>i(()=>import("./apiserver-tls.html-92242695.js"),[]).then(({data:n})=>n),"v-0abdc785":()=>i(()=>import("./calico.html-fb37f712.js"),[]).then(({data:n})=>n),"v-6fcbadd8":()=>i(()=>import("./cert-update.html-0e830d16.js"),[]).then(({data:n})=>n),"v-16624cc8":()=>i(()=>import("./cni.html-b1ff22fe.js"),[]).then(({data:n})=>n),"v-00a035a9":()=>i(()=>import("./delete-rancher-causing-node-disappear.html-75d59ad1.js"),[]).then(({data:n})=>n),"v-399e5546":()=>i(()=>import("./deploy-ceph-cluster-with-rook.html-c5994525.js"),[]).then(({data:n})=>n),"v-daf345c2":()=>i(()=>import("./docker-harbor-ha.html-371d24b6.js"),[]).then(({data:n})=>n),"v-4d18a9c6":()=>i(()=>import("./etcd-backup-restore.html-5b93e602.js"),[]).then(({data:n})=>n),"v-1b52ff44":()=>i(()=>import("./fault.html-9d55d043.js"),[]).then(({data:n})=>n),"v-1590f620":()=>i(()=>import("./harbor.html-7d99f782.js"),[]).then(({data:n})=>n),"v-095f9124":()=>i(()=>import("./helm.html-4d217b9e.js"),[]).then(({data:n})=>n),"v-a659ac38":()=>i(()=>import("./ingress-nginx.html-555ef499.js"),[]).then(({data:n})=>n),"v-00c390aa":()=>i(()=>import("./k8s-allocatable.html-dd506da9.js"),[]).then(({data:n})=>n),"v-5a027c1c":()=>i(()=>import("./k8s-audit.html-c516026d.js"),[]).then(({data:n})=>n),"v-2b87c67e":()=>i(()=>import("./k8s-gpu.html-beae7cfc.js"),[]).then(({data:n})=>n),"v-05e39b32":()=>i(()=>import("./k8s-install.html-5cf9f361.js"),[]).then(({data:n})=>n),"v-a95ef8ee":()=>i(()=>import("./kata.html-b6c9baff.js"),[]).then(({data:n})=>n),"v-af7321c0":()=>i(()=>import("./kernel-upgrade.html-231aef02.js"),[]).then(({data:n})=>n),"v-2b1b7ec1":()=>i(()=>import("./kube-prometheus-stack.html-dacc3448.js"),[]).then(({data:n})=>n),"v-76fb0a5e":()=>i(()=>import("./kube-reserved.html-6341106a.js"),[]).then(({data:n})=>n),"v-645bf47e":()=>i(()=>import("./kubectl-cheatsheet.html-b397ed19.js"),[]).then(({data:n})=>n),"v-5ad137cd":()=>i(()=>import("./longhorn.html-68b9d05e.js"),[]).then(({data:n})=>n),"v-2e60625e":()=>i(()=>import("./lvs-health-check.html-71770c5a.js"),[]).then(({data:n})=>n),"v-cb7b897c":()=>i(()=>import("./lxcfs.html-ee220f81.js"),[]).then(({data:n})=>n),"v-72ba803a":()=>i(()=>import("./namespace-terminating.html-1d2b8915.js"),[]).then(({data:n})=>n),"v-1369b331":()=>i(()=>import("./numa.html-0674a47e.js"),[]).then(({data:n})=>n),"v-645adb07":()=>i(()=>import("./rancher-install.html-9166e1a7.js"),[]).then(({data:n})=>n),"v-1f0f80e6":()=>i(()=>import("./index.html-d230bb78.js"),[]).then(({data:n})=>n),"v-09586b2c":()=>i(()=>import("./recommend.html-f13d5f8e.js"),[]).then(({data:n})=>n),"v-07f61cc9":()=>i(()=>import("./sysbench.html-0cbcc943.js"),[]).then(({data:n})=>n),"v-7d9811f0":()=>i(()=>import("./todolist.html-d5619880.js"),[]).then(({data:n})=>n),"v-62d595a7":()=>i(()=>import("./velero.html-b4c1dca0.js"),[]).then(({data:n})=>n),"v-c64aa418":()=>i(()=>import("./index.html-97549749.js"),[]).then(({data:n})=>n),"v-29d1ef0e":()=>i(()=>import("./4.1 程序结构.html-b7e65cd7.js"),[]).then(({data:n})=>n),"v-a03f7510":()=>i(()=>import("./4.2.1 基础数据类型.html-4039ca86.js"),[]).then(({data:n})=>n),"v-47537fdc":()=>i(()=>import("./dir.html-7214e85d.js"),[]).then(({data:n})=>n),"v-e3abd37e":()=>i(()=>import("./go-fmt.html-c5a09046.js"),[]).then(({data:n})=>n),"v-61e20373":()=>i(()=>import("./go-install.html-95ebf8da.js"),[]).then(({data:n})=>n),"v-9f4ff810":()=>i(()=>import("./go-restful-api.html-2531ea5a.js"),[]).then(({data:n})=>n),"v-a895956a":()=>i(()=>import("./go-specification.html-e719d921.js"),[]).then(({data:n})=>n),"v-a77317a2":()=>i(()=>import("./go-struct.html-34362d40.js"),[]).then(({data:n})=>n),"v-925f3920":()=>i(()=>import("./index.html-9b44af98.js"),[]).then(({data:n})=>n),"v-689741b0":()=>i(()=>import("./快速使用gomod.html-561dfcee.js"),[]).then(({data:n})=>n),"v-24848cfb":()=>i(()=>import("./access-control.html-845b1f6e.js"),[]).then(({data:n})=>n),"v-017fe212":()=>i(()=>import("./action-scope.html-7b4a5b6d.js"),[]).then(({data:n})=>n),"v-632afeee":()=>i(()=>import("./bytearray-data.html-bdf21167.js"),[]).then(({data:n})=>n),"v-6a3d55a6":()=>i(()=>import("./codeSpecification.html-0c8e7c0d.js"),[]).then(({data:n})=>n),"v-7cb1645a":()=>i(()=>import("./first.html-936fb9c2.js"),[]).then(({data:n})=>n),"v-1205d2a0":()=>i(()=>import("./func-prog.html-d1f1eee6.js"),[]).then(({data:n})=>n),"v-bf9d600a":()=>i(()=>import("./function-parameter.html-e42bb045.js"),[]).then(({data:n})=>n),"v-e912ba58":()=>i(()=>import("./high-func.html-1bf93994.js"),[]).then(({data:n})=>n),"v-ef1495f0":()=>i(()=>import("./lambda.html-4c44ca09.js"),[]).then(({data:n})=>n),"v-bcee94b6":()=>i(()=>import("./list-tuple-data.html-82f58898.js"),[]).then(({data:n})=>n),"v-e6964004":()=>i(()=>import("./num-data.html-04cef6e4.js"),[]).then(({data:n})=>n),"v-36c2f847":()=>i(()=>import("./process-thread.html-e10503ca.js"),[]).then(({data:n})=>n),"v-11582f7c":()=>i(()=>import("./python-analytic-expre.html-d35942fb.js"),[]).then(({data:n})=>n),"v-747a5278":()=>i(()=>import("./python-basic-grammar.html-cf9e3160.js"),[]).then(({data:n})=>n),"v-45447483":()=>i(()=>import("./python-control.html-262e55d4.js"),[]).then(({data:n})=>n),"v-0ed8c2b6":()=>i(()=>import("./python-decorator.html-3607a789.js"),[]).then(({data:n})=>n),"v-659e17b6":()=>i(()=>import("./python-dir-file-pro.html-52fca2e2.js"),[]).then(({data:n})=>n),"v-583cf311":()=>i(()=>import("./python-exception.html-86e6d927.js"),[]).then(({data:n})=>n),"v-33deec0c":()=>i(()=>import("./python-function.html-df38d7f6.js"),[]).then(({data:n})=>n),"v-21e01b0d":()=>i(()=>import("./python-generator.html-067003e3.js"),[]).then(({data:n})=>n),"v-973f5452":()=>i(()=>import("./python-gil-multiprocessing.html-dc960771.js"),[]).then(({data:n})=>n),"v-1941575d":()=>i(()=>import("./python-instance.html-eec08c00.js"),[]).then(({data:n})=>n),"v-3f18b850":()=>i(()=>import("./python-io-model.html-317565b0.js"),[]).then(({data:n})=>n),"v-3a976324":()=>i(()=>import("./python-iterator.html-97d290e7.js"),[]).then(({data:n})=>n),"v-a1e7d070":()=>i(()=>import("./python-linear-data-structure.html-dabe8a7c.js"),[]).then(({data:n})=>n),"v-b5c2201a":()=>i(()=>import("./python-magic.html-76d18dce.js"),[]).then(({data:n})=>n),"v-4cb0a918":()=>i(()=>import("./python-module-install.html-a3bf1112.js"),[]).then(({data:n})=>n),"v-998003b4":()=>i(()=>import("./python-module.html-5a347f99.js"),[]).then(({data:n})=>n),"v-0786bde2":()=>i(()=>import("./python-oo-inher-pol.html-3ffeeb1e.js"),[]).then(({data:n})=>n),"v-9320324e":()=>i(()=>import("./python-oo-package.html-9abaae1c.js"),[]).then(({data:n})=>n),"v-e25702a0":()=>i(()=>import("./python-oop.html-96b2ee97.js"),[]).then(({data:n})=>n),"v-737185ae":()=>i(()=>import("./python-partial-function.html-83751931.js"),[]).then(({data:n})=>n),"v-8d5f6fee":()=>i(()=>import("./python-pip.html-1bdc9264.js"),[]).then(({data:n})=>n),"v-13fe8742":()=>i(()=>import("./python-recursive-function.html-188e71c5.js"),[]).then(({data:n})=>n),"v-c57983ea":()=>i(()=>import("./python-return-function.html-89fcfed2.js"),[]).then(({data:n})=>n),"v-09b7cf20":()=>i(()=>import("./python-serialize.html-964893fc.js"),[]).then(({data:n})=>n),"v-f15b3dba":()=>i(()=>import("./python-setup.html-7f18d859.js"),[]).then(({data:n})=>n),"v-0c5f5f9c":()=>i(()=>import("./python-socketserver.html-915995fb.js"),[]).then(({data:n})=>n),"v-361a70e2":()=>i(()=>import("./python-tcp-pg.html-74783dc5.js"),[]).then(({data:n})=>n),"v-049ef682":()=>i(()=>import("./python-thread-sync.html-06823b04.js"),[]).then(({data:n})=>n),"v-6d90a948":()=>i(()=>import("./python-thread.html-310d4d96.js"),[]).then(({data:n})=>n),"v-7692b860":()=>i(()=>import("./python-virtualenv.html-be641446.js"),[]).then(({data:n})=>n),"v-b72643ac":()=>i(()=>import("./index.html-b706348e.js"),[]).then(({data:n})=>n),"v-4accd2e6":()=>i(()=>import("./set-dict-data.html-75c4aadb.js"),[]).then(({data:n})=>n),"v-1609d8e9":()=>i(()=>import("./str-data.html-7db62264.js"),[]).then(({data:n})=>n),"v-0939f9c2":()=>i(()=>import("./type-of-data.html-aff37621.js"),[]).then(({data:n})=>n),"v-79604bf8":()=>i(()=>import("./vscode-python.html-cee7e0c3.js"),[]).then(({data:n})=>n),"v-2b64c83c":()=>i(()=>import("./part4-command.html-b69c5e70.js"),[]).then(({data:n})=>n),"v-d1ce3044":()=>i(()=>import("./part6.html-c900ab3f.js"),[]).then(({data:n})=>n),"v-19fa2dc8":()=>i(()=>import("./index.html-9ef90fc0.js"),[]).then(({data:n})=>n),"v-1f4e571e":()=>i(()=>import("./shell.html-2350cf29.js"),[]).then(({data:n})=>n),"v-b7534df8":()=>i(()=>import("./docker_rabbitmq.html-9112a1d9.js"),[]).then(({data:n})=>n),"v-37c1affd":()=>i(()=>import("./ab-copy.html-0d83672e.js"),[]).then(({data:n})=>n),"v-36f16a4d":()=>i(()=>import("./back.html-1399cba6.js"),[]).then(({data:n})=>n),"v-f2aceb80":()=>i(()=>import("./bin-log.html-4b1503db.js"),[]).then(({data:n})=>n),"v-528061dd":()=>i(()=>import("./des-select.html-7bff4521.js"),[]).then(({data:n})=>n),"v-426b1ca9":()=>i(()=>import("./jiagou.html-497cfabb.js"),[]).then(({data:n})=>n),"v-06da267c":()=>i(()=>import("./list-com.html-f2df27f5.js"),[]).then(({data:n})=>n),"v-a02396ee":()=>i(()=>import("./lock.html-9af7193a.js"),[]).then(({data:n})=>n),"v-0bf9122d":()=>i(()=>import("./owner-kee.html-249f9db2.js"),[]).then(({data:n})=>n),"v-9c2214f8":()=>i(()=>import("./qa.html-d73d273a.js"),[]).then(({data:n})=>n),"v-17e5e2ac":()=>i(()=>import("./read-write.html-05e6ddb0.js"),[]).then(({data:n})=>n),"v-248713a5":()=>i(()=>import("./index.html-93cf4637.js"),[]).then(({data:n})=>n),"v-34f80d94":()=>i(()=>import("./stro.html-19067fc0.js"),[]).then(({data:n})=>n),"v-1f31eb54":()=>i(()=>import("./user-contr.html-9394f66f.js"),[]).then(({data:n})=>n),"v-73a05a52":()=>i(()=>import("./view-func.html-b3323183.js"),[]).then(({data:n})=>n),"v-72ca315d":()=>i(()=>import("./qa.html-8d508c96.js"),[]).then(({data:n})=>n),"v-2bee89ec":()=>i(()=>import("./index.html-2521b1ea.js"),[]).then(({data:n})=>n),"v-a01d2bb2":()=>i(()=>import("./redis-dump.html-00da80d0.js"),[]).then(({data:n})=>n),"v-eeddae12":()=>i(()=>import("./redis-sentinel.html-d0a2abd9.js"),[]).then(({data:n})=>n),"v-219cbae0":()=>i(()=>import("./redis-slave.html-c8a25ec5.js"),[]).then(({data:n})=>n),"v-7e89ffae":()=>i(()=>import("./ruby-update.html-3df1d2e6.js"),[]).then(({data:n})=>n),"v-9b126160":()=>i(()=>import("./server-client.html-93b7f580.js"),[]).then(({data:n})=>n),"v-31ebb152":()=>i(()=>import("./ad-hoc.html-b698bf79.js"),[]).then(({data:n})=>n),"v-12780ba1":()=>i(()=>import("./advanced-playbook.html-4e6a4100.js"),[]).then(({data:n})=>n),"v-1b0e4f8c":()=>i(()=>import("./ansible-best-practice.html-58fdc835.js"),[]).then(({data:n})=>n),"v-3ef9d450":()=>i(()=>import("./ansible-k8s.html-0864b87f.js"),[]).then(({data:n})=>n),"v-77ee0a50":()=>i(()=>import("./custom.html-d3c5b2e8.js"),[]).then(({data:n})=>n),"v-30bfdf82":()=>i(()=>import("./dir-handler.html-11c53196.js"),[]).then(({data:n})=>n),"v-323c6e86":()=>i(()=>import("./fact.html-c8b69eaf.js"),[]).then(({data:n})=>n),"v-25fa894e":()=>i(()=>import("./first.html-8a6a5f0b.js"),[]).then(({data:n})=>n),"v-f7c8afa6":()=>i(()=>import("./inventory.html-c954c5d1.js"),[]).then(({data:n})=>n),"v-25717abd":()=>i(()=>import("./jinja2.html-f8e953b5.js"),[]).then(({data:n})=>n),"v-5aeeb3b4":()=>i(()=>import("./lineinfile.html-b7ded435.js"),[]).then(({data:n})=>n),"v-de3b8b22":()=>i(()=>import("./lookup.html-b18d2012.js"),[]).then(({data:n})=>n),"v-5433ba7c":()=>i(()=>import("./magic.html-5471350b.js"),[]).then(({data:n})=>n),"v-3320fa28":()=>i(()=>import("./optimize.html-1805ec1a.js"),[]).then(({data:n})=>n),"v-64097c30":()=>i(()=>import("./playbook-for.html-8681ea57.js"),[]).then(({data:n})=>n),"v-7e695b5c":()=>i(()=>import("./playbook-if.html-e66f11b3.js"),[]).then(({data:n})=>n),"v-91925c40":()=>i(()=>import("./playbook-tags.html-fa3472ad.js"),[]).then(({data:n})=>n),"v-7b0edca8":()=>i(()=>import("./playbook.html-f9299608.js"),[]).then(({data:n})=>n),"v-4ea72b99":()=>i(()=>import("./qa.html-53191315.js"),[]).then(({data:n})=>n),"v-4fe45b30":()=>i(()=>import("./index.html-c5d87a44.js"),[]).then(({data:n})=>n),"v-f7090128":()=>i(()=>import("./roles.html-e739a27d.js"),[]).then(({data:n})=>n),"v-0311f57c":()=>i(()=>import("./var.html-bfbbbf74.js"),[]).then(({data:n})=>n),"v-54ce3d17":()=>i(()=>import("./vault.html-b31ca358.js"),[]).then(({data:n})=>n),"v-2964dd3c":()=>i(()=>import("./yaml.html-28d47ccc.js"),[]).then(({data:n})=>n),"v-378058bb":()=>i(()=>import("./index.html-ae1cab06.js"),[]).then(({data:n})=>n),"v-7d04e5f6":()=>i(()=>import("./ansible-install.html-1edbd912.js"),[]).then(({data:n})=>n),"v-77e47a71":()=>i(()=>import("./api.html-d4fd4064.js"),[]).then(({data:n})=>n),"v-262983e2":()=>i(()=>import("./build-tools.html-10127534.js"),[]).then(({data:n})=>n),"v-1cd5ce80":()=>i(()=>import("./cicd.html-4b96d9ce.js"),[]).then(({data:n})=>n),"v-7b53d6b2":()=>i(()=>import("./dingding-plugin.html-01eccf6a.js"),[]).then(({data:n})=>n),"v-152091b0":()=>i(()=>import("./docker-install-jenkins.html-e46b219d.js"),[]).then(({data:n})=>n),"v-7c5409ca":()=>i(()=>import("./first.html-bedad5b1.js"),[]).then(({data:n})=>n),"v-614501e6":()=>i(()=>import("./groovy-simple-tutorial.html-513d9eb5.js"),[]).then(({data:n})=>n),"v-30d1e5c6":()=>i(()=>import("./jenkins-shared-library.html-6185fb1e.js"),[]).then(({data:n})=>n),"v-5fee3290":()=>i(()=>import("./migrate-job.html-96081fa0.js"),[]).then(({data:n})=>n),"v-00acf522":()=>i(()=>import("./pipeline-dev-tools.html-e5ad4ca0.js"),[]).then(({data:n})=>n),"v-755fee70":()=>i(()=>import("./pipeline-example.html-c5d8c759.js"),[]).then(({data:n})=>n),"v-3efb1842":()=>i(()=>import("./pipelinesyntax.html-521e2b43.js"),[]).then(({data:n})=>n),"v-03f7d317":()=>i(()=>import("./qa.html-62c267c8.js"),[]).then(({data:n})=>n),"v-124e0572":()=>i(()=>import("./index.html-29c0fedb.js"),[]).then(({data:n})=>n),"v-c4bd02c8":()=>i(()=>import("./restart.html-3c8bb670.js"),[]).then(({data:n})=>n),"v-2966c6e4":()=>i(()=>import("./start-jenkinsfile.html-4a18e8ec.js"),[]).then(({data:n})=>n),"v-3a020ea1":()=>i(()=>import("./user-auth.html-b495db08.js"),[]).then(({data:n})=>n),"v-3c4d974f":()=>i(()=>import("./userandpermissions.html-77db47d4.js"),[]).then(({data:n})=>n),"v-3a240b8c":()=>i(()=>import("./validate-jenkinsfile.html-733908ed.js"),[]).then(({data:n})=>n),"v-5ac0cf56":()=>i(()=>import("./war-install.html-a833af63.js"),[]).then(({data:n})=>n),"v-3192b10c":()=>i(()=>import("./yum-install.html-119ed7f1.js"),[]).then(({data:n})=>n),"v-3f2b2588":()=>i(()=>import("./jumpserver-ssh.html-04de644e.js"),[]).then(({data:n})=>n),"v-0e29a549":()=>i(()=>import("./podshell.html-b11e88a8.js"),[]).then(({data:n})=>n),"v-424ac8f6":()=>i(()=>import("./index.html-1903b69c.js"),[]).then(({data:n})=>n),"v-2cd1a3ca":()=>i(()=>import("./yace.html-e0dd0610.js"),[]).then(({data:n})=>n),"v-d3fe39f2":()=>i(()=>import("./multi_remote_read.html-e7a7798c.js"),[]).then(({data:n})=>n),"v-32678264":()=>i(()=>import("./pod-label.html-a86b25d7.js"),[]).then(({data:n})=>n),"v-78cfc7b7":()=>i(()=>import("./index.html-6d01b237.js"),[]).then(({data:n})=>n),"v-46bc9423":()=>i(()=>import("./agent2-https.html-db42c148.js"),[]).then(({data:n})=>n),"v-f875cf44":()=>i(()=>import("./qa.html-8424dead.js"),[]).then(({data:n})=>n),"v-0b0f120b":()=>i(()=>import("./index.html-3b25c3f4.js"),[]).then(({data:n})=>n),"v-24eba14a":()=>i(()=>import("./todolist.html-a161a16e.js"),[]).then(({data:n})=>n),"v-baa733fa":()=>i(()=>import("./zabbix-activemq.html-659e4cd9.js"),[]).then(({data:n})=>n),"v-9baa27c2":()=>i(()=>import("./zabbix-ans.html-efd3480b.js"),[]).then(({data:n})=>n),"v-7de67fc4":()=>i(()=>import("./zabbix-api-web.html-9047ba7c.js"),[]).then(({data:n})=>n),"v-1b3959e1":()=>i(()=>import("./zabbix-media.html-5ceda5b5.js"),[]).then(({data:n})=>n),"v-fe8a603a":()=>i(()=>import("./zabbix-mysql.html-6b50cb06.js"),[]).then(({data:n})=>n),"v-01406aac":()=>i(()=>import("./zabbix-redis.html-5d28a11b.js"),[]).then(({data:n})=>n),"v-306cc50e":()=>i(()=>import("./zabbix-zookeeper.html-f6ffb8d5.js"),[]).then(({data:n})=>n),"v-cd5b6460":()=>i(()=>import("./nginx漏洞修复.html-0991e275.js"),[]).then(({data:n})=>n),"v-3125c2ab":()=>i(()=>import("./oracle查看哪些表被锁住了.html-6bd1c478.js"),[]).then(({data:n})=>n),"v-42b12e49":()=>i(()=>import("./rsync_inotify实现实时同步.html-63d0d324.js"),[]).then(({data:n})=>n),"v-3a0e3b36":()=>i(()=>import("./小米笔记本被降频锁频问题.html-6faf0034.js"),[]).then(({data:n})=>n),"v-478df006":()=>i(()=>import("./python subprocess模块的使用.html-1b9821d9.js"),[]).then(({data:n})=>n),"v-369f9189":()=>i(()=>import("./vscode卸载.html-f93b69f3.js"),[]).then(({data:n})=>n),"v-6e285e1e":()=>i(()=>import("./vscode安装.html-b513f345.js"),[]).then(({data:n})=>n),"v-29496566":()=>i(()=>import("./vscode配置go开发环境.html-f2e34f9f.js"),[]).then(({data:n})=>n),"v-3a0b9430":()=>i(()=>import("./vscode配置jenkins开发环境.html-32bc74ae.js"),[]).then(({data:n})=>n),"v-34f4c76c":()=>i(()=>import("./12.1 keepalived和heartbeat对比.html-2a9e4ff2.js"),[]).then(({data:n})=>n),"v-3c122d46":()=>i(()=>import("./白天做运维，晚上搞副业赚钱.html-b4afa653.js"),[]).then(({data:n})=>n),"v-02e16be0":()=>i(()=>import("./index.html-001d8998.js"),[]).then(({data:n})=>n),"v-5fdd348e":()=>i(()=>import("./config.html-6c1f9808.js"),[]).then(({data:n})=>n),"v-702e3c11":()=>i(()=>import("./core.html-2782f2dd.js"),[]).then(({data:n})=>n),"v-51aecb92":()=>i(()=>import("./first.html-ea1eaaf0.js"),[]).then(({data:n})=>n),"v-80859ef8":()=>i(()=>import("./framework.html-bfd2339a.js"),[]).then(({data:n})=>n),"v-1cb1969f":()=>i(()=>import("./global-events.html-aaee4855.js"),[]).then(({data:n})=>n),"v-4d07e670":()=>i(()=>import("./http.html-04691db6.js"),[]).then(({data:n})=>n),"v-8f79538a":()=>i(()=>import("./location.html-aa4caa58.js"),[]).then(({data:n})=>n),"v-179a7ba4":()=>i(()=>import("./module.html-e9f94acd.js"),[]).then(({data:n})=>n),"v-2762ae00":()=>i(()=>import("./qa.html-b0dc3e46.js"),[]).then(({data:n})=>n),"v-1943aea9":()=>i(()=>import("./index.html-71acf7ab.js"),[]).then(({data:n})=>n),"v-319ae12d":()=>i(()=>import("./server.html-cd122c7d.js"),[]).then(({data:n})=>n),"v-29b355de":()=>i(()=>import("./status.html-6e5f0f4b.js"),[]).then(({data:n})=>n),"v-01d2be24":()=>i(()=>import("./cache.html-8fd1e24c.js"),[]).then(({data:n})=>n),"v-3ef6b5c2":()=>i(()=>import("./danger.html-e16c89ba.js"),[]).then(({data:n})=>n),"v-b121e484":()=>i(()=>import("./dead.html-6f24967c.js"),[]).then(({data:n})=>n),"v-819f88e4":()=>i(()=>import("./prd.html-17732d9b.js"),[]).then(({data:n})=>n),"v-5a715f17":()=>i(()=>import("./index.html-7611a561.js"),[]).then(({data:n})=>n),"v-6b2696a0":()=>i(()=>import("./status.html-35026278.js"),[]).then(({data:n})=>n),"v-4b9c1d99":()=>i(()=>import("./common-kno.html-486f5908.js"),[]).then(({data:n})=>n),"v-43e54828":()=>i(()=>import("./crontab.html-75cf962d.js"),[]).then(({data:n})=>n),"v-902fe038":()=>i(()=>import("./i-o.html-e8576d0c.js"),[]).then(({data:n})=>n),"v-75946033":()=>i(()=>import("./inter.html-44e70a0b.js"),[]).then(({data:n})=>n),"v-6cf4ecb4":()=>i(()=>import("./limit.html-ddbdd091.js"),[]).then(({data:n})=>n),"v-07fad500":()=>i(()=>import("./process.html-da82da8f.js"),[]).then(({data:n})=>n),"v-3ef0b394":()=>i(()=>import("./index.html-7cbbc563.js"),[]).then(({data:n})=>n),"v-33aa7480":()=>i(()=>import("./rpm.html-6d8b3822.js"),[]).then(({data:n})=>n),"v-dac0d1dc":()=>i(()=>import("./ugo.html-95e14138.js"),[]).then(({data:n})=>n),"v-00941b10":()=>i(()=>import("./user.html-1687c896.js"),[]).then(({data:n})=>n),"v-0dd71b0c":()=>i(()=>import("./code-type.html-c9cc05d3.js"),[]).then(({data:n})=>n),"v-7699454c":()=>i(()=>import("./dev-ops-env.html-ce85b010.js"),[]).then(({data:n})=>n),"v-106ad43e":()=>i(()=>import("./document-style-guide.html-35c69007.js"),[]).then(({data:n})=>n),"v-76c3c216":()=>i(()=>import("./centos-time.html-2661b9ed.js"),[]).then(({data:n})=>n),"v-3623fc05":()=>i(()=>import("./curl-https.html-03be05aa.js"),[]).then(({data:n})=>n),"v-00ff071b":()=>i(()=>import("./du-df-diff.html-acc229e5.js"),[]).then(({data:n})=>n),"v-51198775":()=>i(()=>import("./mysql-max-con.html-83ee3668.js"),[]).then(({data:n})=>n),"v-213dba9c":()=>i(()=>import("./swap.html-d5d72c6a.js"),[]).then(({data:n})=>n),"v-cade1efe":()=>i(()=>import("./index.html-ea1123f2.js"),[]).then(({data:n})=>n),"v-2a83e426":()=>i(()=>import("./k8s-install.html-e532feea.js"),[]).then(({data:n})=>n),"v-dd604362":()=>i(()=>import("./E_special_exitcodes.html-32613a34.js"),[]).then(({data:n})=>n),"v-e021017c":()=>i(()=>import("./T_ascii_table.html-7b40d5ac.js"),[]).then(({data:n})=>n),"v-0362c258":()=>i(()=>import("./01_shell_programming.html-250ce5f6.js"),[]).then(({data:n})=>n),"v-ccb7dd70":()=>i(()=>import("./02_1_invoking_the_script.html-cd226b2a.js"),[]).then(({data:n})=>n),"v-7af80658":()=>i(()=>import("./02_2_preliminary_exercises.html-7ea700ff.js"),[]).then(({data:n})=>n),"v-c0e652fc":()=>i(()=>import("./02_starting_off_with_a_sha_bang.html-ae8d9d6b.js"),[]).then(({data:n})=>n),"v-71241dce":()=>i(()=>import("./index.html-23c3e27f.js"),[]).then(({data:n})=>n),"v-3666da25":()=>i(()=>import("./03_special_characters.html-5070f9fa.js"),[]).then(({data:n})=>n),"v-95c6342c":()=>i(()=>import("./04_1_variable_substitution.html-d61517e4.js"),[]).then(({data:n})=>n),"v-549a3ab9":()=>i(()=>import("./04_2_variable_assignment.html-52bf3b26.js"),[]).then(({data:n})=>n),"v-5f6eadd7":()=>i(()=>import("./04_3_bash_variables_are_untyped.html-cea626f3.js"),[]).then(({data:n})=>n),"v-5db426fd":()=>i(()=>import("./04_introduction_to_variables_and_parameters.html-153a72ae.js"),[]).then(({data:n})=>n),"v-51c96f18":()=>i(()=>import("./05_1_quoting_variables.html-6d678215.js"),[]).then(({data:n})=>n),"v-44c2064c":()=>i(()=>import("./05_2_escaping.html-fec6949d.js"),[]).then(({data:n})=>n),"v-2ef7dc02":()=>i(()=>import("./05_quoting.html-a3deeb4c.js"),[]).then(({data:n})=>n),"v-6a52f4ae":()=>i(()=>import("./06_exit_and_exit_status.html-f350a5e9.js"),[]).then(({data:n})=>n),"v-d3244104":()=>i(()=>import("./07_1_test_constructs.html-0694aad8.js"),[]).then(({data:n})=>n),"v-57207c61":()=>i(()=>import("./07_2_file_test_operators.html-7a5a3099.js"),[]).then(({data:n})=>n),"v-d584ed36":()=>i(()=>import("./07_3_other_comparison_operators.html-07785cf1.js"),[]).then(({data:n})=>n),"v-49cbb9f9":()=>i(()=>import("./07_4_nested_if_then_condition_tests.html-daa2ccb0.js"),[]).then(({data:n})=>n),"v-1b65cd68":()=>i(()=>import("./07_5_testing_your_knowledge_of_tests.html-a23f99b3.js"),[]).then(({data:n})=>n),"v-41510350":()=>i(()=>import("./07_tests.html-d614feba.js"),[]).then(({data:n})=>n),"v-2f71d652":()=>i(()=>import("./08_1_operators.html-a5c20776.js"),[]).then(({data:n})=>n),"v-8d2e7446":()=>i(()=>import("./08_2_numerical_constants.html-47340373.js"),[]).then(({data:n})=>n),"v-0698c03c":()=>i(()=>import("./08_3_the_double_parentheses_construct.html-b0c4b46e.js"),[]).then(({data:n})=>n),"v-22a0477e":()=>i(()=>import("./08_4_operator_precedence.html-99abde30.js"),[]).then(({data:n})=>n),"v-339f9476":()=>i(()=>import("./08_operations_and_related_topics.html-28f954a7.js"),[]).then(({data:n})=>n),"v-71241d90":()=>i(()=>import("./index.html-32c287fe.js"),[]).then(({data:n})=>n),"v-765b1b97":()=>i(()=>import("./09_1_internal_variables.html-1da6a366.js"),[]).then(({data:n})=>n),"v-1f7f0293":()=>i(()=>import("./09_2_1_another_use_for_declare.html-e639bf8e.js"),[]).then(({data:n})=>n),"v-66254658":()=>i(()=>import("./09_2_typing_variables_declare_or_typeset.html-5d728640.js"),[]).then(({data:n})=>n),"v-835049c4":()=>i(()=>import("./09_3_random_generate_random_integer.html-e01e4aa6.js"),[]).then(({data:n})=>n),"v-7583d4e9":()=>i(()=>import("./09_another_look_at_variables.html-d77d1700.js"),[]).then(({data:n})=>n),"v-7d04115f":()=>i(()=>import("./10_1_1_manipulating_strings_using_awk.html-5ca521bf.js"),[]).then(({data:n})=>n),"v-ac3119e6":()=>i(()=>import("./10_1_2_further_reference.html-26fe4a3b.js"),[]).then(({data:n})=>n),"v-aa29fc70":()=>i(()=>import("./10_1_manipulating_strings.html-3dc7bbd3.js"),[]).then(({data:n})=>n),"v-6f0ebce0":()=>i(()=>import("./10_2_parameter_substitution.html-8a064a9a.js"),[]).then(({data:n})=>n),"v-28da4efe":()=>i(()=>import("./10_manipulating_variables.html-2f7aab78.js"),[]).then(({data:n})=>n),"v-755f1380":()=>i(()=>import("./11_1_loops.html-db6c5cba.js"),[]).then(({data:n})=>n),"v-18a04a46":()=>i(()=>import("./11_2_nested_loops.html-5123a3f9.js"),[]).then(({data:n})=>n),"v-751027c3":()=>i(()=>import("./11_3_loop_control.html-96f67e78.js"),[]).then(({data:n})=>n),"v-8d45377a":()=>i(()=>import("./11_4_testing_and_branching.html-6895ea5d.js"),[]).then(({data:n})=>n),"v-cc33efae":()=>i(()=>import("./11_loops_and_branches.html-cc883fb4.js"),[]).then(({data:n})=>n),"v-b6223f7e":()=>i(()=>import("./12_command_substitution.html-14faa4a5.js"),[]).then(({data:n})=>n),"v-39f65eae":()=>i(()=>import("./13_arithmetic_expansion.html-08a8bcdf.js"),[]).then(({data:n})=>n),"v-71241d52":()=>i(()=>import("./index.html-e5724259.js"),[]).then(({data:n})=>n),"v-04de7f18":()=>i(()=>import("./18_1_a_brief_introduction_to_regular_expressions.html-34667700.js"),[]).then(({data:n})=>n),"v-2ca54d11":()=>i(()=>import("./18_2_globbing.html-d8758dd3.js"),[]).then(({data:n})=>n),"v-731951cc":()=>i(()=>import("./18_3_regular_expression_comparison_table.html-e36cfcf9.js"),[]).then(({data:n})=>n),"v-04066f84":()=>i(()=>import("./18_regular_expressions.html-641968f8.js"),[]).then(({data:n})=>n),"v-17e5f48e":()=>i(()=>import("./19_here_documents.html-48e90dd4.js"),[]).then(({data:n})=>n),"v-d54a4614":()=>i(()=>import("./20_1_use_exec.html-4eccce1a.js"),[]).then(({data:n})=>n),"v-c42e271a":()=>i(()=>import("./20_2_redirecting_code_blocks.html-df08b30a.js"),[]).then(({data:n})=>n),"v-4a7628de":()=>i(()=>import("./20_3_applications.html-50927b58.js"),[]).then(({data:n})=>n),"v-53c8880c":()=>i(()=>import("./20_io_redirection.html-580d9158.js"),[]).then(({data:n})=>n),"v-5aad7141":()=>i(()=>import("./21_subshells.html-5c3ec2a3.js"),[]).then(({data:n})=>n),"v-ab5e1508":()=>i(()=>import("./22_Restricted_Shells.html-06731472.js"),[]).then(({data:n})=>n),"v-0f5fa4fa":()=>i(()=>import("./23_Process_Substitution.html-e25cf947.js"),[]).then(({data:n})=>n),"v-81126a72":()=>i(()=>import("./24_1_complex_functions_and_function_complexities.html-c0bfd17e.js"),[]).then(({data:n})=>n),"v-66790dab":()=>i(()=>import("./24_2_local_variables.html-88c504b1.js"),[]).then(({data:n})=>n),"v-092fc61e":()=>i(()=>import("./24_3_recursion_without_local_variables.html-e204d8f2.js"),[]).then(({data:n})=>n),"v-09c92e74":()=>i(()=>import("./24_functions.html-4cab08ac.js"),[]).then(({data:n})=>n),"v-ac2eca3c":()=>i(()=>import("./25_aliases.html-3b281cf6.js"),[]).then(({data:n})=>n),"v-418229bc":()=>i(()=>import("./26_List_Constructs.html-58e8b891.js"),[]).then(({data:n})=>n),"v-34bd49ba":()=>i(()=>import("./27_arrays.html-d43d9ec6.js"),[]).then(({data:n})=>n),"v-4d92bb04":()=>i(()=>import("./30_network_programming.html-348f981d.js"),[]).then(({data:n})=>n),"v-ae8f4894":()=>i(()=>import("./32_Debugging.html-e0953a94.js"),[]).then(({data:n})=>n),"v-5d30fe45":()=>i(()=>import("./33_options.html-09defcab.js"),[]).then(({data:n})=>n),"v-75f467df":()=>i(()=>import("./34_Gotchas.html-15ab3991.js"),[]).then(({data:n})=>n),"v-f6621c66":()=>i(()=>import("./36_10_shell_scripting_under_windows.html-5976374e.js"),[]).then(({data:n})=>n),"v-719f9d3f":()=>i(()=>import("./36_11_ssh_remote_operate.html-14aa9ea8.js"),[]).then(({data:n})=>n),"v-6bf8603e":()=>i(()=>import("./36_1_interactive_and_non-interactive_shells_and_scripts.html-d587c27e.js"),[]).then(({data:n})=>n),"v-34aff614":()=>i(()=>import("./36_2_shell_wrappers.html-56c49354.js"),[]).then(({data:n})=>n),"v-5c17fa36":()=>i(()=>import("./36_3_tests_and_comparisons_alternatives.html-6b76c5b6.js"),[]).then(({data:n})=>n),"v-95fb4b80":()=>i(()=>import("./36_4_recursion_a_script_calling_itself.html-f1e3addb.js"),[]).then(({data:n})=>n),"v-39d19511":()=>i(()=>import("./36_5_colorizing_scripts.html-ab18c56d.js"),[]).then(({data:n})=>n),"v-0e9831c3":()=>i(()=>import("./36_6_optimizations.html-fcc5091a.js"),[]).then(({data:n})=>n),"v-7c814d38":()=>i(()=>import("./36_7_1_ideas_for_more_powerful_scripts.html-8346ca9e.js"),[]).then(({data:n})=>n),"v-e4ba63b4":()=>i(()=>import("./36_7_2_widgets.html-8b7d5212.js"),[]).then(({data:n})=>n),"v-77518a00":()=>i(()=>import("./36_7_assorted_tips.html-4dc3f873.js"),[]).then(({data:n})=>n),"v-5b2bfecf":()=>i(()=>import("./36_8_1_infected_shell_scripts.html-6b68c634.js"),[]).then(({data:n})=>n),"v-13799cfe":()=>i(()=>import("./36_8_2_hiding_shell_script_source.html-1df3070d.js"),[]).then(({data:n})=>n),"v-49e744cb":()=>i(()=>import("./36_8_3_writing_secure_shell_scripts.html-ded68a86.js"),[]).then(({data:n})=>n),"v-22d43eee":()=>i(()=>import("./36_8_security_issues.html-10365081.js"),[]).then(({data:n})=>n),"v-bace1048":()=>i(()=>import("./36_9_portability_issues.html-416130ab.js"),[]).then(({data:n})=>n),"v-2c406bc2":()=>i(()=>import("./36_miscellany.html-dd621f84.js"),[]).then(({data:n})=>n),"v-71241cd6":()=>i(()=>import("./index.html-9b283283.js"),[]).then(({data:n})=>n),"v-79bd1f4a":()=>i(()=>import("./shili.html-a2a173bc.js"),[]).then(({data:n})=>n),"v-3e9942a6":()=>i(()=>import("./index.html-f0deed26.js"),[]).then(({data:n})=>n),"v-28948558":()=>i(()=>import("./hash.html-ae40c693.js"),[]).then(({data:n})=>n),"v-5c0dc3f1":()=>i(()=>import("./key.html-dc6c84b5.js"),[]).then(({data:n})=>n),"v-df69f078":()=>i(()=>import("./list.html-60b3876f.js"),[]).then(({data:n})=>n),"v-dae22064":()=>i(()=>import("./set.html-00a9b967.js"),[]).then(({data:n})=>n),"v-641cf9f1":()=>i(()=>import("./string.html-6ff3a284.js"),[]).then(({data:n})=>n),"v-5384c60c":()=>i(()=>import("./zset.html-7052ffdc.js"),[]).then(({data:n})=>n),"v-582427ba":()=>i(()=>import("./shell-sed.html-5a796d51.js"),[]).then(({data:n})=>n),"v-d0688ad6":()=>i(()=>import("./每天一个linux命令（21）-find.html-67c569d7.js"),[]).then(({data:n})=>n),"v-14498f4b":()=>i(()=>import("./每天一个linux命令（29）-chown.html-29116954.js"),[]).then(({data:n})=>n),"v-f8d17c08":()=>i(()=>import("./每天一个linux命令（33）-du.html-dfea18f3.js"),[]).then(({data:n})=>n),"v-769b02c6":()=>i(()=>import("./每天一个linux命令（35）-diff.html-40650a06.js"),[]).then(({data:n})=>n),"v-0215d71c":()=>i(()=>import("./每天一个linux命令（36）-date.html-3ea529a6.js"),[]).then(({data:n})=>n),"v-3bb98840":()=>i(()=>import("./每天一个linux命令（42）-killall.html-adb7a183.js"),[]).then(({data:n})=>n),"v-c0d2447e":()=>i(()=>import("./每天一个linux命令（45）-vmstat.html-a8984c41.js"),[]).then(({data:n})=>n),"v-7f1266d1":()=>i(()=>import("./每天一个linux命令（46）-iostat.html-e34d996b.js"),[]).then(({data:n})=>n),"v-a27ac06c":()=>i(()=>import("./每天一个linux命令（49）-lsof.html-8382695e.js"),[]).then(({data:n})=>n),"v-7503515e":()=>i(()=>import("./每天一个linux命令（52）-ping.html-3cf8118b.js"),[]).then(({data:n})=>n),"v-02aa1bcb":()=>i(()=>import("./每天一个linux命令（53）-traceroute.html-0f486f69.js"),[]).then(({data:n})=>n),"v-8578e31a":()=>i(()=>import("./每天一个linux命令（54）-netstat.html-3fcdbec9.js"),[]).then(({data:n})=>n),"v-fb1ca100":()=>i(()=>import("./cat.html-4430291a.js"),[]).then(({data:n})=>n),"v-789867d8":()=>i(()=>import("./file-detail.html-184ed202.js"),[]).then(({data:n})=>n),"v-2638ec6a":()=>i(()=>import("./file-type.html-4fbe0c96.js"),[]).then(({data:n})=>n),"v-780b2f15":()=>i(()=>import("./zip.html-68cd7567.js"),[]).then(({data:n})=>n),"v-13488b07":()=>i(()=>import("./zsgc.html-62343fb6.js"),[]).then(({data:n})=>n),"v-3706649a":()=>i(()=>import("./404.html-0534c0c0.js"),[]).then(({data:n})=>n),"v-777a1bba":()=>i(()=>import("./index.html-41376ef5.js"),[]).then(({data:n})=>n),"v-74473916":()=>i(()=>import("./index.html-7e12911a.js"),[]).then(({data:n})=>n),"v-79e04fe4":()=>i(()=>import("./index.html-25550670.js"),[]).then(({data:n})=>n),"v-e4cb1150":()=>i(()=>import("./index.html-3837f590.js"),[]).then(({data:n})=>n),"v-cfe8b6c8":()=>i(()=>import("./index.html-47902cf9.js"),[]).then(({data:n})=>n),"v-146a1089":()=>i(()=>import("./index.html-cdd089c1.js"),[]).then(({data:n})=>n),"v-5a3ba488":()=>i(()=>import("./index.html-dba6753b.js"),[]).then(({data:n})=>n),"v-4e82d8f2":()=>i(()=>import("./index.html-c42b89fe.js"),[]).then(({data:n})=>n),"v-2d0a81d8":()=>i(()=>import("./index.html-e354fae5.js"),[]).then(({data:n})=>n),"v-7e266418":()=>i(()=>import("./index.html-e6372fe1.js"),[]).then(({data:n})=>n),"v-dfd6d2fa":()=>i(()=>import("./index.html-5adf95c4.js"),[]).then(({data:n})=>n),"v-5e6cc4ed":()=>i(()=>import("./index.html-f371fd00.js"),[]).then(({data:n})=>n),"v-20e4aa46":()=>i(()=>import("./index.html-31b67048.js"),[]).then(({data:n})=>n),"v-744e6dd4":()=>i(()=>import("./index.html-73c27481.js"),[]).then(({data:n})=>n),"v-a3cc9f96":()=>i(()=>import("./index.html-e9e6c28f.js"),[]).then(({data:n})=>n),"v-58535866":()=>i(()=>import("./index.html-a74a43bd.js"),[]).then(({data:n})=>n),"v-3f621bca":()=>i(()=>import("./index.html-dd6a0f4e.js"),[]).then(({data:n})=>n),"v-8d69e284":()=>i(()=>import("./index.html-0731edba.js"),[]).then(({data:n})=>n),"v-71241c5a":()=>i(()=>import("./index.html-1fc0f335.js"),[]).then(({data:n})=>n),"v-7314e22c":()=>i(()=>import("./index.html-2d2320fe.js"),[]).then(({data:n})=>n),"v-e2d3f5d2":()=>i(()=>import("./index.html-51f4a2f8.js"),[]).then(({data:n})=>n),"v-d6a62914":()=>i(()=>import("./index.html-fd4f9ae6.js"),[]).then(({data:n})=>n),"v-ee4c6a8e":()=>i(()=>import("./index.html-9b5a2e79.js"),[]).then(({data:n})=>n),"v-024485bd":()=>i(()=>import("./index.html-7785ceb4.js"),[]).then(({data:n})=>n),"v-5bc93818":()=>i(()=>import("./index.html-031320a4.js"),[]).then(({data:n})=>n),"v-744d024e":()=>i(()=>import("./index.html-dc80d962.js"),[]).then(({data:n})=>n),"v-e52c881c":()=>i(()=>import("./index.html-a63f9b0c.js"),[]).then(({data:n})=>n),"v-154dc4c4":()=>i(()=>import("./index.html-8f01c228.js"),[]).then(({data:n})=>n),"v-01560935":()=>i(()=>import("./index.html-ad279a4c.js"),[]).then(({data:n})=>n),"v-155824b4":()=>i(()=>import("./index.html-0c2e52d5.js"),[]).then(({data:n})=>n),"v-1fc637b7":()=>i(()=>import("./index.html-512d4eb2.js"),[]).then(({data:n})=>n),"v-0a85b3c4":()=>i(()=>import("./index.html-64a6e30e.js"),[]).then(({data:n})=>n),"v-b30e41a8":()=>i(()=>import("./index.html-2e9a2476.js"),[]).then(({data:n})=>n),"v-227ecbd6":()=>i(()=>import("./index.html-8ec81842.js"),[]).then(({data:n})=>n),"v-726fbe70":()=>i(()=>import("./index.html-db5b2df4.js"),[]).then(({data:n})=>n),"v-4c40caa5":()=>i(()=>import("./index.html-c588fda0.js"),[]).then(({data:n})=>n),"v-3a134560":()=>i(()=>import("./index.html-d6341ce8.js"),[]).then(({data:n})=>n),"v-6193b4f4":()=>i(()=>import("./index.html-bffa55e0.js"),[]).then(({data:n})=>n),"v-1ab38844":()=>i(()=>import("./index.html-af3fbe12.js"),[]).then(({data:n})=>n),"v-e9c7e408":()=>i(()=>import("./index.html-62a16bdb.js"),[]).then(({data:n})=>n),"v-63bcc623":()=>i(()=>import("./index.html-120123b2.js"),[]).then(({data:n})=>n),"v-e9a125fe":()=>i(()=>import("./index.html-7497502a.js"),[]).then(({data:n})=>n),"v-5616b529":()=>i(()=>import("./index.html-d9c42775.js"),[]).then(({data:n})=>n),"v-78cbe7bb":()=>i(()=>import("./index.html-415ea20e.js"),[]).then(({data:n})=>n),"v-2671299e":()=>i(()=>import("./index.html-0519d472.js"),[]).then(({data:n})=>n),"v-9c48d85a":()=>i(()=>import("./index.html-74da3778.js"),[]).then(({data:n})=>n),"v-b310d42a":()=>i(()=>import("./index.html-978d8bbb.js"),[]).then(({data:n})=>n),"v-9717cc36":()=>i(()=>import("./index.html-caa59401.js"),[]).then(({data:n})=>n),"v-db15110e":()=>i(()=>import("./index.html-a97d5154.js"),[]).then(({data:n})=>n),"v-8848dfa8":()=>i(()=>import("./index.html-75bf219b.js"),[]).then(({data:n})=>n),"v-465d9bbe":()=>i(()=>import("./index.html-430d87ae.js"),[]).then(({data:n})=>n),"v-1715b471":()=>i(()=>import("./index.html-13b0e059.js"),[]).then(({data:n})=>n),"v-169ad378":()=>i(()=>import("./index.html-27e6ba29.js"),[]).then(({data:n})=>n),"v-c3ed50a2":()=>i(()=>import("./index.html-e09645ad.js"),[]).then(({data:n})=>n),"v-03efcc30":()=>i(()=>import("./index.html-d8783236.js"),[]).then(({data:n})=>n),"v-b30b9fe4":()=>i(()=>import("./index.html-f1d87548.js"),[]).then(({data:n})=>n),"v-b30332ba":()=>i(()=>import("./index.html-1107e645.js"),[]).then(({data:n})=>n),"v-68014528":()=>i(()=>import("./index.html-ee7b121f.js"),[]).then(({data:n})=>n),"v-6e3f2a98":()=>i(()=>import("./index.html-98e93f7b.js"),[]).then(({data:n})=>n),"v-6106c001":()=>i(()=>import("./index.html-45ad009e.js"),[]).then(({data:n})=>n),"v-2863bf51":()=>i(()=>import("./index.html-c46a71cf.js"),[]).then(({data:n})=>n),"v-742fbe9b":()=>i(()=>import("./index.html-efe3fc15.js"),[]).then(({data:n})=>n),"v-1d8b4315":()=>i(()=>import("./index.html-838d4ab4.js"),[]).then(({data:n})=>n),"v-302533af":()=>i(()=>import("./index.html-fb1e473a.js"),[]).then(({data:n})=>n),"v-200c1937":()=>i(()=>import("./index.html-8af0e742.js"),[]).then(({data:n})=>n),"v-2831124d":()=>i(()=>import("./index.html-f33db61d.js"),[]).then(({data:n})=>n),"v-013498cd":()=>i(()=>import("./index.html-d1456c22.js"),[]).then(({data:n})=>n),"v-6e776c45":()=>i(()=>import("./index.html-c82470d9.js"),[]).then(({data:n})=>n),"v-13275df4":()=>i(()=>import("./index.html-919a90d2.js"),[]).then(({data:n})=>n),"v-30e11687":()=>i(()=>import("./index.html-96f71227.js"),[]).then(({data:n})=>n),"v-49a91360":()=>i(()=>import("./index.html-0c26975e.js"),[]).then(({data:n})=>n),"v-be049512":()=>i(()=>import("./index.html-978d3324.js"),[]).then(({data:n})=>n),"v-564c406a":()=>i(()=>import("./index.html-ae27b344.js"),[]).then(({data:n})=>n),"v-1a8900ba":()=>i(()=>import("./index.html-8b492a09.js"),[]).then(({data:n})=>n),"v-a018a546":()=>i(()=>import("./index.html-645e83ea.js"),[]).then(({data:n})=>n),"v-42e0c678":()=>i(()=>import("./index.html-a175eaff.js"),[]).then(({data:n})=>n),"v-4b6ff193":()=>i(()=>import("./index.html-64e96043.js"),[]).then(({data:n})=>n),"v-09601066":()=>i(()=>import("./index.html-62798d58.js"),[]).then(({data:n})=>n),"v-d4172afa":()=>i(()=>import("./index.html-bd1a73f5.js"),[]).then(({data:n})=>n)},jv=JSON.parse('{"base":"/","lang":"zh-CN","title":"SRE运维进阶之路","description":"Keep Learning","head":[["link",{"rel":"stylesheet","href":"//at.alicdn.com/t/font_2541777_75xscujk71.css"}]],"locales":{}}');var qv=([n,e,s])=>n==="meta"&&e.name?`${n}.${e.name}`:["title","base"].includes(n)?n:n==="template"&&e.id?`${n}.${e.id}`:JSON.stringify([n,e,s]),zv=n=>{const e=new Set,s=[];return n.forEach(a=>{const t=qv(a);e.has(t)||(e.add(t),s.push(a))}),s},Nv=n=>n[n.length-1]==="/"||n.endsWith(".html")?n:`${n}/`,Hv=n=>n.startsWith("ftp://"),ls=n=>/^(https?:)?\/\//.test(n),Uv=/.md((\?|#).*)?$/,Qa=(n,e="/")=>!!(ls(n)||Hv(n)||n.startsWith("/")&&!n.startsWith(e)&&!Uv.test(n)),Mr=n=>/^mailto:/.test(n),Gv=n=>/^tel:/.test(n),la=n=>Object.prototype.toString.call(n)==="[object Object]",Si=n=>n[n.length-1]==="/"?n.slice(0,-1):n,Fr=n=>n[0]==="/"?n.slice(1):n,Kv=(n,e)=>{const s=Object.keys(n).sort((a,t)=>{const l=t.split("/").length-a.split("/").length;return l!==0?l:t.length-a.length});for(const a of s)if(e.startsWith(a))return a;return"/"},Kl=(n,e="/")=>{const s=n.replace(/^(https?:)?\/\/[^/]*/,"");return s.startsWith(e)?`/${s.slice(e.length)}`:s};const jr={"v-8daa1a0e":v(()=>i(()=>import("./index.html-fe93657e.js"),["assets/index.html-fe93657e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7664c5fa":v(()=>i(()=>import("./index.html-9ffaf72f.js"),["assets/index.html-9ffaf72f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-60fff667":v(()=>i(()=>import("./activemq-install.html-3e00edce.js"),["assets/activemq-install.html-3e00edce.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4378712f":v(()=>i(()=>import("./centos-jdk.html-a2e0cc5c.js"),["assets/centos-jdk.html-a2e0cc5c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-16b6b750":v(()=>i(()=>import("./fastdfs-install.html-39f7e320.js"),["assets/fastdfs-install.html-39f7e320.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-763ef6d8":v(()=>i(()=>import("./hexo-blog.html-0313b706.js"),["assets/hexo-blog.html-0313b706.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d22f44ac":v(()=>i(()=>import("./linux-python.html-52535732.js"),["assets/linux-python.html-52535732.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a5639d14":v(()=>i(()=>import("./maven-nexus.html-cc5b4837.js"),["assets/maven-nexus.html-cc5b4837.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9e4f7a5a":v(()=>i(()=>import("./rabbitmq-install.html-490e5f97.js"),["assets/rabbitmq-install.html-490e5f97.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-60544e4e":v(()=>i(()=>import("./rocketmq-install.html-e0f6c0d7.js"),["assets/rocketmq-install.html-e0f6c0d7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5210fd8e":v(()=>i(()=>import("./zookeeper-install.html-ff758c49.js"),["assets/zookeeper-install.html-ff758c49.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-71fde78e":v(()=>i(()=>import("./index.html-d4bea63a.js"),["assets/index.html-d4bea63a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d2fece48":v(()=>i(()=>import("./git-basic.html-aa2a0a8c.js"),["assets/git-basic.html-aa2a0a8c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-191529b7":v(()=>i(()=>import("./git-commit-message.html-aeaac051.js"),["assets/git-commit-message.html-aeaac051.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4899a812":v(()=>i(()=>import("./grafana-y.html-b197af10.js"),["assets/grafana-y.html-b197af10.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-104b656e":v(()=>i(()=>import("./monitor-system.html-2957b916.js"),["assets/monitor-system.html-2957b916.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-420473ed":v(()=>i(()=>import("./promethues-alerts.html-e86ded3e.js"),["assets/promethues-alerts.html-e86ded3e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-73fbd21f":v(()=>i(()=>import("./blog.html-67c9f1f9.js"),["assets/blog.html-67c9f1f9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8d980508":v(()=>i(()=>import("./curl-bash.html-a5bca3de.js"),["assets/curl-bash.html-a5bca3de.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cc3a53f4":v(()=>i(()=>import("./mac-disk.html-1383b51c.js"),["assets/mac-disk.html-1383b51c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4d7b907e":v(()=>i(()=>import("./mac-proxy.html-b8839df4.js"),["assets/mac-proxy.html-b8839df4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6bac1857":v(()=>i(()=>import("./vim.html-307cde02.js"),["assets/vim.html-307cde02.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-26fca4d5":v(()=>i(()=>import("./writing.html-f1f172df.js"),["assets/writing.html-f1f172df.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a1ff8004":v(()=>i(()=>import("./kernel-para-opt.html-2ec281d6.js"),["assets/kernel-para-opt.html-2ec281d6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d623d08a":v(()=>i(()=>import("./index.html-acf0ae37.js"),["assets/index.html-acf0ae37.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d64bd706":v(()=>i(()=>import("./tcp-three-four.html-fdbdeec4.js"),["assets/tcp-three-four.html-fdbdeec4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-754f0210":v(()=>i(()=>import("./todo.html-76d11b6b.js"),["assets/todo.html-76d11b6b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ba097eb4":v(()=>i(()=>import("./index.html-be7052b7.js"),["assets/index.html-be7052b7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d9f4ba5":v(()=>i(()=>import("./ssh-key.html-01512085.js"),["assets/ssh-key.html-01512085.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-87f9ec82":v(()=>i(()=>import("./docker-docker.html-ad5265cd.js"),["assets/docker-docker.html-ad5265cd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1497ef65":v(()=>i(()=>import("./docker-proxy.html-82adf293.js"),["assets/docker-proxy.html-82adf293.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-508989f3":v(()=>i(()=>import("./index.html-4bbf4490.js"),["assets/index.html-4bbf4490.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5257418c":v(()=>i(()=>import("./etcd-defrag.html-5629dabb.js"),["assets/etcd-defrag.html-5629dabb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7da870a3":v(()=>i(()=>import("./etcd-first.html-a58fbed9.js"),["assets/etcd-first.html-a58fbed9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bcd7447a":v(()=>i(()=>import("./index.html-d49748bb.js"),["assets/index.html-d49748bb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3f2cd8fb":v(()=>i(()=>import("./apiserver-tls.html-f2b1644b.js"),["assets/apiserver-tls.html-f2b1644b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0abdc785":v(()=>i(()=>import("./calico.html-55c59d3b.js"),["assets/calico.html-55c59d3b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6fcbadd8":v(()=>i(()=>import("./cert-update.html-b44dbcb9.js"),["assets/cert-update.html-b44dbcb9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-16624cc8":v(()=>i(()=>import("./cni.html-ab49aa81.js"),["assets/cni.html-ab49aa81.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-00a035a9":v(()=>i(()=>import("./delete-rancher-causing-node-disappear.html-3094c0a0.js"),["assets/delete-rancher-causing-node-disappear.html-3094c0a0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-399e5546":v(()=>i(()=>import("./deploy-ceph-cluster-with-rook.html-8859b925.js"),["assets/deploy-ceph-cluster-with-rook.html-8859b925.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-daf345c2":v(()=>i(()=>import("./docker-harbor-ha.html-9fc76c24.js"),["assets/docker-harbor-ha.html-9fc76c24.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4d18a9c6":v(()=>i(()=>import("./etcd-backup-restore.html-b8819867.js"),["assets/etcd-backup-restore.html-b8819867.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1b52ff44":v(()=>i(()=>import("./fault.html-3facca5a.js"),["assets/fault.html-3facca5a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1590f620":v(()=>i(()=>import("./harbor.html-1a7a1651.js"),["assets/harbor.html-1a7a1651.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-095f9124":v(()=>i(()=>import("./helm.html-ae6b5343.js"),["assets/helm.html-ae6b5343.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a659ac38":v(()=>i(()=>import("./ingress-nginx.html-ded1bc03.js"),["assets/ingress-nginx.html-ded1bc03.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-00c390aa":v(()=>i(()=>import("./k8s-allocatable.html-5e293fcc.js"),["assets/k8s-allocatable.html-5e293fcc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5a027c1c":v(()=>i(()=>import("./k8s-audit.html-02d4d291.js"),["assets/k8s-audit.html-02d4d291.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2b87c67e":v(()=>i(()=>import("./k8s-gpu.html-a68671d6.js"),["assets/k8s-gpu.html-a68671d6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-05e39b32":v(()=>i(()=>import("./k8s-install.html-63daa307.js"),["assets/k8s-install.html-63daa307.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a95ef8ee":v(()=>i(()=>import("./kata.html-6154e68d.js"),["assets/kata.html-6154e68d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-af7321c0":v(()=>i(()=>import("./kernel-upgrade.html-f6257107.js"),["assets/kernel-upgrade.html-f6257107.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2b1b7ec1":v(()=>i(()=>import("./kube-prometheus-stack.html-f4997de1.js"),["assets/kube-prometheus-stack.html-f4997de1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-76fb0a5e":v(()=>i(()=>import("./kube-reserved.html-c003eccc.js"),["assets/kube-reserved.html-c003eccc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-645bf47e":v(()=>i(()=>import("./kubectl-cheatsheet.html-80115114.js"),["assets/kubectl-cheatsheet.html-80115114.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5ad137cd":v(()=>i(()=>import("./longhorn.html-ceb0e8dc.js"),["assets/longhorn.html-ceb0e8dc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2e60625e":v(()=>i(()=>import("./lvs-health-check.html-62b0e11a.js"),["assets/lvs-health-check.html-62b0e11a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cb7b897c":v(()=>i(()=>import("./lxcfs.html-6eb89c02.js"),["assets/lxcfs.html-6eb89c02.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-72ba803a":v(()=>i(()=>import("./namespace-terminating.html-056c983d.js"),["assets/namespace-terminating.html-056c983d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1369b331":v(()=>i(()=>import("./numa.html-d53d1394.js"),["assets/numa.html-d53d1394.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-645adb07":v(()=>i(()=>import("./rancher-install.html-fefbde5f.js"),["assets/rancher-install.html-fefbde5f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1f0f80e6":v(()=>i(()=>import("./index.html-c470f3c6.js"),["assets/index.html-c470f3c6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-09586b2c":v(()=>i(()=>import("./recommend.html-e59ddddb.js"),["assets/recommend.html-e59ddddb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-07f61cc9":v(()=>i(()=>import("./sysbench.html-8c713014.js"),["assets/sysbench.html-8c713014.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7d9811f0":v(()=>i(()=>import("./todolist.html-5d411ca2.js"),["assets/todolist.html-5d411ca2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-62d595a7":v(()=>i(()=>import("./velero.html-eeb14fec.js"),["assets/velero.html-eeb14fec.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c64aa418":v(()=>i(()=>import("./index.html-f535b880.js"),["assets/index.html-f535b880.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-29d1ef0e":v(()=>i(()=>import("./4.1 程序结构.html-1deba6ca.js"),["assets/4.1 程序结构.html-1deba6ca.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a03f7510":v(()=>i(()=>import("./4.2.1 基础数据类型.html-bfd55f3a.js"),["assets/4.2.1 基础数据类型.html-bfd55f3a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-47537fdc":v(()=>i(()=>import("./dir.html-c74e992a.js"),["assets/dir.html-c74e992a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e3abd37e":v(()=>i(()=>import("./go-fmt.html-569d08c1.js"),["assets/go-fmt.html-569d08c1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-61e20373":v(()=>i(()=>import("./go-install.html-f282c5d2.js"),["assets/go-install.html-f282c5d2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9f4ff810":v(()=>i(()=>import("./go-restful-api.html-11efc7d8.js"),["assets/go-restful-api.html-11efc7d8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a895956a":v(()=>i(()=>import("./go-specification.html-c847d1b8.js"),["assets/go-specification.html-c847d1b8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a77317a2":v(()=>i(()=>import("./go-struct.html-95b8dc03.js"),["assets/go-struct.html-95b8dc03.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-925f3920":v(()=>i(()=>import("./index.html-6aa0f354.js"),["assets/index.html-6aa0f354.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-689741b0":v(()=>i(()=>import("./快速使用gomod.html-6374b4a5.js"),["assets/快速使用gomod.html-6374b4a5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-24848cfb":v(()=>i(()=>import("./access-control.html-2257df92.js"),["assets/access-control.html-2257df92.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-017fe212":v(()=>i(()=>import("./action-scope.html-fcea5354.js"),["assets/action-scope.html-fcea5354.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-632afeee":v(()=>i(()=>import("./bytearray-data.html-f32967fd.js"),["assets/bytearray-data.html-f32967fd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6a3d55a6":v(()=>i(()=>import("./codeSpecification.html-2832aa61.js"),["assets/codeSpecification.html-2832aa61.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7cb1645a":v(()=>i(()=>import("./first.html-9ce3dfd4.js"),["assets/first.html-9ce3dfd4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1205d2a0":v(()=>i(()=>import("./func-prog.html-ef1a1c43.js"),["assets/func-prog.html-ef1a1c43.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bf9d600a":v(()=>i(()=>import("./function-parameter.html-6a5c038b.js"),["assets/function-parameter.html-6a5c038b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e912ba58":v(()=>i(()=>import("./high-func.html-d494fa67.js"),["assets/high-func.html-d494fa67.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ef1495f0":v(()=>i(()=>import("./lambda.html-bf43e00f.js"),["assets/lambda.html-bf43e00f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bcee94b6":v(()=>i(()=>import("./list-tuple-data.html-150274b1.js"),["assets/list-tuple-data.html-150274b1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e6964004":v(()=>i(()=>import("./num-data.html-d47a61aa.js"),["assets/num-data.html-d47a61aa.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-36c2f847":v(()=>i(()=>import("./process-thread.html-e8d1788d.js"),["assets/process-thread.html-e8d1788d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-11582f7c":v(()=>i(()=>import("./python-analytic-expre.html-0c24ddc8.js"),["assets/python-analytic-expre.html-0c24ddc8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-747a5278":v(()=>i(()=>import("./python-basic-grammar.html-2b6630bb.js"),["assets/python-basic-grammar.html-2b6630bb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-45447483":v(()=>i(()=>import("./python-control.html-af2ddc87.js"),["assets/python-control.html-af2ddc87.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0ed8c2b6":v(()=>i(()=>import("./python-decorator.html-1ccb23f1.js"),["assets/python-decorator.html-1ccb23f1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-659e17b6":v(()=>i(()=>import("./python-dir-file-pro.html-dbeb870d.js"),["assets/python-dir-file-pro.html-dbeb870d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-583cf311":v(()=>i(()=>import("./python-exception.html-3cddfdf6.js"),["assets/python-exception.html-3cddfdf6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-33deec0c":v(()=>i(()=>import("./python-function.html-391c98fc.js"),["assets/python-function.html-391c98fc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-21e01b0d":v(()=>i(()=>import("./python-generator.html-650b7474.js"),["assets/python-generator.html-650b7474.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-973f5452":v(()=>i(()=>import("./python-gil-multiprocessing.html-b4fd0ca8.js"),["assets/python-gil-multiprocessing.html-b4fd0ca8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1941575d":v(()=>i(()=>import("./python-instance.html-a74d27b9.js"),["assets/python-instance.html-a74d27b9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3f18b850":v(()=>i(()=>import("./python-io-model.html-8b130ab7.js"),["assets/python-io-model.html-8b130ab7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3a976324":v(()=>i(()=>import("./python-iterator.html-cb9b7bc5.js"),["assets/python-iterator.html-cb9b7bc5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a1e7d070":v(()=>i(()=>import("./python-linear-data-structure.html-9bd14e51.js"),["assets/python-linear-data-structure.html-9bd14e51.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b5c2201a":v(()=>i(()=>import("./python-magic.html-3d609374.js"),["assets/python-magic.html-3d609374.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4cb0a918":v(()=>i(()=>import("./python-module-install.html-a13c43b1.js"),["assets/python-module-install.html-a13c43b1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-998003b4":v(()=>i(()=>import("./python-module.html-6ed42d06.js"),["assets/python-module.html-6ed42d06.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0786bde2":v(()=>i(()=>import("./python-oo-inher-pol.html-32995e25.js"),["assets/python-oo-inher-pol.html-32995e25.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9320324e":v(()=>i(()=>import("./python-oo-package.html-b1f7f8c1.js"),["assets/python-oo-package.html-b1f7f8c1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e25702a0":v(()=>i(()=>import("./python-oop.html-a2261bf3.js"),["assets/python-oop.html-a2261bf3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-737185ae":v(()=>i(()=>import("./python-partial-function.html-7d2a2442.js"),["assets/python-partial-function.html-7d2a2442.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8d5f6fee":v(()=>i(()=>import("./python-pip.html-d12d743d.js"),["assets/python-pip.html-d12d743d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-13fe8742":v(()=>i(()=>import("./python-recursive-function.html-ba410cfd.js"),["assets/python-recursive-function.html-ba410cfd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c57983ea":v(()=>i(()=>import("./python-return-function.html-d90d465e.js"),["assets/python-return-function.html-d90d465e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-09b7cf20":v(()=>i(()=>import("./python-serialize.html-779c4cc9.js"),["assets/python-serialize.html-779c4cc9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f15b3dba":v(()=>i(()=>import("./python-setup.html-2c5ed679.js"),["assets/python-setup.html-2c5ed679.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0c5f5f9c":v(()=>i(()=>import("./python-socketserver.html-230ba776.js"),["assets/python-socketserver.html-230ba776.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-361a70e2":v(()=>i(()=>import("./python-tcp-pg.html-ce336887.js"),["assets/python-tcp-pg.html-ce336887.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-049ef682":v(()=>i(()=>import("./python-thread-sync.html-50b671f6.js"),["assets/python-thread-sync.html-50b671f6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6d90a948":v(()=>i(()=>import("./python-thread.html-3ad05476.js"),["assets/python-thread.html-3ad05476.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7692b860":v(()=>i(()=>import("./python-virtualenv.html-2b421b76.js"),["assets/python-virtualenv.html-2b421b76.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b72643ac":v(()=>i(()=>import("./index.html-2b04041e.js"),["assets/index.html-2b04041e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4accd2e6":v(()=>i(()=>import("./set-dict-data.html-2587272f.js"),["assets/set-dict-data.html-2587272f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1609d8e9":v(()=>i(()=>import("./str-data.html-f8587aaf.js"),["assets/str-data.html-f8587aaf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0939f9c2":v(()=>i(()=>import("./type-of-data.html-48376f0d.js"),["assets/type-of-data.html-48376f0d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-79604bf8":v(()=>i(()=>import("./vscode-python.html-79f89708.js"),["assets/vscode-python.html-79f89708.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2b64c83c":v(()=>i(()=>import("./part4-command.html-744c4904.js"),["assets/part4-command.html-744c4904.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d1ce3044":v(()=>i(()=>import("./part6.html-75dbbab4.js"),["assets/part6.html-75dbbab4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-19fa2dc8":v(()=>i(()=>import("./index.html-84595c88.js"),["assets/index.html-84595c88.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1f4e571e":v(()=>i(()=>import("./shell.html-25401f8a.js"),["assets/shell.html-25401f8a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b7534df8":v(()=>i(()=>import("./docker_rabbitmq.html-d0c58c05.js"),["assets/docker_rabbitmq.html-d0c58c05.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-37c1affd":v(()=>i(()=>import("./ab-copy.html-9f8f5108.js"),["assets/ab-copy.html-9f8f5108.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-36f16a4d":v(()=>i(()=>import("./back.html-3417fb93.js"),["assets/back.html-3417fb93.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f2aceb80":v(()=>i(()=>import("./bin-log.html-2f04955b.js"),["assets/bin-log.html-2f04955b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-528061dd":v(()=>i(()=>import("./des-select.html-c63087cb.js"),["assets/des-select.html-c63087cb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-426b1ca9":v(()=>i(()=>import("./jiagou.html-3dc2cca2.js"),["assets/jiagou.html-3dc2cca2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-06da267c":v(()=>i(()=>import("./list-com.html-4da67fcb.js"),["assets/list-com.html-4da67fcb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a02396ee":v(()=>i(()=>import("./lock.html-ee0d0b86.js"),["assets/lock.html-ee0d0b86.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0bf9122d":v(()=>i(()=>import("./owner-kee.html-3e9a3ab5.js"),["assets/owner-kee.html-3e9a3ab5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9c2214f8":v(()=>i(()=>import("./qa.html-689b5816.js"),["assets/qa.html-689b5816.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-17e5e2ac":v(()=>i(()=>import("./read-write.html-a290e5f9.js"),["assets/read-write.html-a290e5f9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-248713a5":v(()=>i(()=>import("./index.html-a3804acc.js"),["assets/index.html-a3804acc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-34f80d94":v(()=>i(()=>import("./stro.html-e05e0ea6.js"),["assets/stro.html-e05e0ea6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1f31eb54":v(()=>i(()=>import("./user-contr.html-7b753ab0.js"),["assets/user-contr.html-7b753ab0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-73a05a52":v(()=>i(()=>import("./view-func.html-5eb26267.js"),["assets/view-func.html-5eb26267.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-72ca315d":v(()=>i(()=>import("./qa.html-024cffa7.js"),["assets/qa.html-024cffa7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2bee89ec":v(()=>i(()=>import("./index.html-2fa79db5.js"),["assets/index.html-2fa79db5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a01d2bb2":v(()=>i(()=>import("./redis-dump.html-cc3861ac.js"),["assets/redis-dump.html-cc3861ac.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-eeddae12":v(()=>i(()=>import("./redis-sentinel.html-3deb286d.js"),["assets/redis-sentinel.html-3deb286d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-219cbae0":v(()=>i(()=>import("./redis-slave.html-414fc0b8.js"),["assets/redis-slave.html-414fc0b8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7e89ffae":v(()=>i(()=>import("./ruby-update.html-18070fa6.js"),["assets/ruby-update.html-18070fa6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9b126160":v(()=>i(()=>import("./server-client.html-bc04b0cd.js"),["assets/server-client.html-bc04b0cd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-31ebb152":v(()=>i(()=>import("./ad-hoc.html-b659c5a4.js"),["assets/ad-hoc.html-b659c5a4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-12780ba1":v(()=>i(()=>import("./advanced-playbook.html-ad85a214.js"),["assets/advanced-playbook.html-ad85a214.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1b0e4f8c":v(()=>i(()=>import("./ansible-best-practice.html-75beab1c.js"),["assets/ansible-best-practice.html-75beab1c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3ef9d450":v(()=>i(()=>import("./ansible-k8s.html-6bf92ef6.js"),["assets/ansible-k8s.html-6bf92ef6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-77ee0a50":v(()=>i(()=>import("./custom.html-82a0a6d5.js"),["assets/custom.html-82a0a6d5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-30bfdf82":v(()=>i(()=>import("./dir-handler.html-ae2c1118.js"),["assets/dir-handler.html-ae2c1118.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-323c6e86":v(()=>i(()=>import("./fact.html-7e8eeed2.js"),["assets/fact.html-7e8eeed2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-25fa894e":v(()=>i(()=>import("./first.html-aa33c661.js"),["assets/first.html-aa33c661.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f7c8afa6":v(()=>i(()=>import("./inventory.html-31552d0a.js"),["assets/inventory.html-31552d0a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-25717abd":v(()=>i(()=>import("./jinja2.html-f83805d1.js"),["assets/jinja2.html-f83805d1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5aeeb3b4":v(()=>i(()=>import("./lineinfile.html-b683dead.js"),["assets/lineinfile.html-b683dead.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-de3b8b22":v(()=>i(()=>import("./lookup.html-e735347c.js"),["assets/lookup.html-e735347c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5433ba7c":v(()=>i(()=>import("./magic.html-cf2c40ec.js"),["assets/magic.html-cf2c40ec.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3320fa28":v(()=>i(()=>import("./optimize.html-ec2d10dc.js"),["assets/optimize.html-ec2d10dc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-64097c30":v(()=>i(()=>import("./playbook-for.html-d9933c0e.js"),["assets/playbook-for.html-d9933c0e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7e695b5c":v(()=>i(()=>import("./playbook-if.html-930580af.js"),["assets/playbook-if.html-930580af.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-91925c40":v(()=>i(()=>import("./playbook-tags.html-07530620.js"),["assets/playbook-tags.html-07530620.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7b0edca8":v(()=>i(()=>import("./playbook.html-28f64b24.js"),["assets/playbook.html-28f64b24.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4ea72b99":v(()=>i(()=>import("./qa.html-2a90e073.js"),["assets/qa.html-2a90e073.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4fe45b30":v(()=>i(()=>import("./index.html-636370c0.js"),["assets/index.html-636370c0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f7090128":v(()=>i(()=>import("./roles.html-9e52c24b.js"),["assets/roles.html-9e52c24b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0311f57c":v(()=>i(()=>import("./var.html-d52aa553.js"),["assets/var.html-d52aa553.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-54ce3d17":v(()=>i(()=>import("./vault.html-81228aac.js"),["assets/vault.html-81228aac.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2964dd3c":v(()=>i(()=>import("./yaml.html-5979ccb6.js"),["assets/yaml.html-5979ccb6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-378058bb":v(()=>i(()=>import("./index.html-d4970aaf.js"),["assets/index.html-d4970aaf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7d04e5f6":v(()=>i(()=>import("./ansible-install.html-39a0d5fa.js"),["assets/ansible-install.html-39a0d5fa.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-77e47a71":v(()=>i(()=>import("./api.html-c537b3c0.js"),["assets/api.html-c537b3c0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-262983e2":v(()=>i(()=>import("./build-tools.html-a74da503.js"),["assets/build-tools.html-a74da503.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1cd5ce80":v(()=>i(()=>import("./cicd.html-8be5d1ca.js"),["assets/cicd.html-8be5d1ca.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7b53d6b2":v(()=>i(()=>import("./dingding-plugin.html-7183baf0.js"),["assets/dingding-plugin.html-7183baf0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-152091b0":v(()=>i(()=>import("./docker-install-jenkins.html-9129b616.js"),["assets/docker-install-jenkins.html-9129b616.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7c5409ca":v(()=>i(()=>import("./first.html-316f027a.js"),["assets/first.html-316f027a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-614501e6":v(()=>i(()=>import("./groovy-simple-tutorial.html-bacabbf7.js"),["assets/groovy-simple-tutorial.html-bacabbf7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-30d1e5c6":v(()=>i(()=>import("./jenkins-shared-library.html-ddfbf94c.js"),["assets/jenkins-shared-library.html-ddfbf94c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5fee3290":v(()=>i(()=>import("./migrate-job.html-8d640d4d.js"),["assets/migrate-job.html-8d640d4d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-00acf522":v(()=>i(()=>import("./pipeline-dev-tools.html-b35cfe74.js"),["assets/pipeline-dev-tools.html-b35cfe74.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-755fee70":v(()=>i(()=>import("./pipeline-example.html-54e64406.js"),["assets/pipeline-example.html-54e64406.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3efb1842":v(()=>i(()=>import("./pipelinesyntax.html-4167da3f.js"),["assets/pipelinesyntax.html-4167da3f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-03f7d317":v(()=>i(()=>import("./qa.html-d8019909.js"),["assets/qa.html-d8019909.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-124e0572":v(()=>i(()=>import("./index.html-fef1e6ad.js"),["assets/index.html-fef1e6ad.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c4bd02c8":v(()=>i(()=>import("./restart.html-eb73db5f.js"),["assets/restart.html-eb73db5f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2966c6e4":v(()=>i(()=>import("./start-jenkinsfile.html-3bc36dad.js"),["assets/start-jenkinsfile.html-3bc36dad.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3a020ea1":v(()=>i(()=>import("./user-auth.html-c86ca984.js"),["assets/user-auth.html-c86ca984.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3c4d974f":v(()=>i(()=>import("./userandpermissions.html-1fe59420.js"),["assets/userandpermissions.html-1fe59420.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3a240b8c":v(()=>i(()=>import("./validate-jenkinsfile.html-45664c9e.js"),["assets/validate-jenkinsfile.html-45664c9e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5ac0cf56":v(()=>i(()=>import("./war-install.html-92ba2ff1.js"),["assets/war-install.html-92ba2ff1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3192b10c":v(()=>i(()=>import("./yum-install.html-6620b238.js"),["assets/yum-install.html-6620b238.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3f2b2588":v(()=>i(()=>import("./jumpserver-ssh.html-cf6c4c1a.js"),["assets/jumpserver-ssh.html-cf6c4c1a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0e29a549":v(()=>i(()=>import("./podshell.html-ad1de02d.js"),["assets/podshell.html-ad1de02d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-424ac8f6":v(()=>i(()=>import("./index.html-f773f7f3.js"),["assets/index.html-f773f7f3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2cd1a3ca":v(()=>i(()=>import("./yace.html-c8db919b.js"),["assets/yace.html-c8db919b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d3fe39f2":v(()=>i(()=>import("./multi_remote_read.html-e9a2e2c4.js"),["assets/multi_remote_read.html-e9a2e2c4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-32678264":v(()=>i(()=>import("./pod-label.html-cd421a67.js"),["assets/pod-label.html-cd421a67.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-78cfc7b7":v(()=>i(()=>import("./index.html-078fc30d.js"),["assets/index.html-078fc30d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-46bc9423":v(()=>i(()=>import("./agent2-https.html-b2b7a2d3.js"),["assets/agent2-https.html-b2b7a2d3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f875cf44":v(()=>i(()=>import("./qa.html-51e709e2.js"),["assets/qa.html-51e709e2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0b0f120b":v(()=>i(()=>import("./index.html-1c32947e.js"),["assets/index.html-1c32947e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-24eba14a":v(()=>i(()=>import("./todolist.html-fc4143df.js"),["assets/todolist.html-fc4143df.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-baa733fa":v(()=>i(()=>import("./zabbix-activemq.html-a5246a65.js"),["assets/zabbix-activemq.html-a5246a65.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9baa27c2":v(()=>i(()=>import("./zabbix-ans.html-4549d9b6.js"),["assets/zabbix-ans.html-4549d9b6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7de67fc4":v(()=>i(()=>import("./zabbix-api-web.html-608fed1a.js"),["assets/zabbix-api-web.html-608fed1a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1b3959e1":v(()=>i(()=>import("./zabbix-media.html-cfb20e14.js"),["assets/zabbix-media.html-cfb20e14.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-fe8a603a":v(()=>i(()=>import("./zabbix-mysql.html-1e49df34.js"),["assets/zabbix-mysql.html-1e49df34.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01406aac":v(()=>i(()=>import("./zabbix-redis.html-e1dbdf6c.js"),["assets/zabbix-redis.html-e1dbdf6c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-306cc50e":v(()=>i(()=>import("./zabbix-zookeeper.html-4d0cd7c1.js"),["assets/zabbix-zookeeper.html-4d0cd7c1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cd5b6460":v(()=>i(()=>import("./nginx漏洞修复.html-2fe5c644.js"),["assets/nginx漏洞修复.html-2fe5c644.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3125c2ab":v(()=>i(()=>import("./oracle查看哪些表被锁住了.html-5a690598.js"),["assets/oracle查看哪些表被锁住了.html-5a690598.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-42b12e49":v(()=>i(()=>import("./rsync_inotify实现实时同步.html-17751ff9.js"),["assets/rsync_inotify实现实时同步.html-17751ff9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3a0e3b36":v(()=>i(()=>import("./小米笔记本被降频锁频问题.html-77c21499.js"),["assets/小米笔记本被降频锁频问题.html-77c21499.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-478df006":v(()=>i(()=>import("./python subprocess模块的使用.html-cc9bd4f2.js"),["assets/python subprocess模块的使用.html-cc9bd4f2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-369f9189":v(()=>i(()=>import("./vscode卸载.html-1def0a7d.js"),["assets/vscode卸载.html-1def0a7d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6e285e1e":v(()=>i(()=>import("./vscode安装.html-2e3bee1c.js"),["assets/vscode安装.html-2e3bee1c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-29496566":v(()=>i(()=>import("./vscode配置go开发环境.html-11cc7362.js"),["assets/vscode配置go开发环境.html-11cc7362.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3a0b9430":v(()=>i(()=>import("./vscode配置jenkins开发环境.html-5467d938.js"),["assets/vscode配置jenkins开发环境.html-5467d938.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-34f4c76c":v(()=>i(()=>import("./12.1 keepalived和heartbeat对比.html-139ae628.js"),["assets/12.1 keepalived和heartbeat对比.html-139ae628.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3c122d46":v(()=>i(()=>import("./白天做运维，晚上搞副业赚钱.html-680c08f7.js"),["assets/白天做运维，晚上搞副业赚钱.html-680c08f7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-02e16be0":v(()=>i(()=>import("./index.html-f4b96d51.js"),["assets/index.html-f4b96d51.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5fdd348e":v(()=>i(()=>import("./config.html-dbb4ed8e.js"),["assets/config.html-dbb4ed8e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-702e3c11":v(()=>i(()=>import("./core.html-a5218e67.js"),["assets/core.html-a5218e67.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-51aecb92":v(()=>i(()=>import("./first.html-d0d33e08.js"),["assets/first.html-d0d33e08.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-80859ef8":v(()=>i(()=>import("./framework.html-73475c79.js"),["assets/framework.html-73475c79.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1cb1969f":v(()=>i(()=>import("./global-events.html-79b815ab.js"),["assets/global-events.html-79b815ab.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4d07e670":v(()=>i(()=>import("./http.html-136c5180.js"),["assets/http.html-136c5180.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8f79538a":v(()=>i(()=>import("./location.html-3cf72347.js"),["assets/location.html-3cf72347.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-179a7ba4":v(()=>i(()=>import("./module.html-f0ed8d13.js"),["assets/module.html-f0ed8d13.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2762ae00":v(()=>i(()=>import("./qa.html-5597a83d.js"),["assets/qa.html-5597a83d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1943aea9":v(()=>i(()=>import("./index.html-3b5ad1d3.js"),["assets/index.html-3b5ad1d3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-319ae12d":v(()=>i(()=>import("./server.html-8a5fac30.js"),["assets/server.html-8a5fac30.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-29b355de":v(()=>i(()=>import("./status.html-33101e58.js"),["assets/status.html-33101e58.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01d2be24":v(()=>i(()=>import("./cache.html-f36fbc60.js"),["assets/cache.html-f36fbc60.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3ef6b5c2":v(()=>i(()=>import("./danger.html-8755d2a3.js"),["assets/danger.html-8755d2a3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b121e484":v(()=>i(()=>import("./dead.html-52740045.js"),["assets/dead.html-52740045.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-819f88e4":v(()=>i(()=>import("./prd.html-4ec927d8.js"),["assets/prd.html-4ec927d8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5a715f17":v(()=>i(()=>import("./index.html-aa6753fd.js"),["assets/index.html-aa6753fd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6b2696a0":v(()=>i(()=>import("./status.html-1b123a14.js"),["assets/status.html-1b123a14.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4b9c1d99":v(()=>i(()=>import("./common-kno.html-989b9711.js"),["assets/common-kno.html-989b9711.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-43e54828":v(()=>i(()=>import("./crontab.html-2d5fa01e.js"),["assets/crontab.html-2d5fa01e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-902fe038":v(()=>i(()=>import("./i-o.html-a5e1c796.js"),["assets/i-o.html-a5e1c796.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-75946033":v(()=>i(()=>import("./inter.html-dd030dc3.js"),["assets/inter.html-dd030dc3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6cf4ecb4":v(()=>i(()=>import("./limit.html-2aa6874f.js"),["assets/limit.html-2aa6874f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-07fad500":v(()=>i(()=>import("./process.html-6eae661c.js"),["assets/process.html-6eae661c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3ef0b394":v(()=>i(()=>import("./index.html-0aa09b56.js"),["assets/index.html-0aa09b56.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-33aa7480":v(()=>i(()=>import("./rpm.html-d8c6d928.js"),["assets/rpm.html-d8c6d928.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-dac0d1dc":v(()=>i(()=>import("./ugo.html-76c7dc01.js"),["assets/ugo.html-76c7dc01.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-00941b10":v(()=>i(()=>import("./user.html-2576043f.js"),["assets/user.html-2576043f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0dd71b0c":v(()=>i(()=>import("./code-type.html-1d6b2bcd.js"),["assets/code-type.html-1d6b2bcd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7699454c":v(()=>i(()=>import("./dev-ops-env.html-6ab7350a.js"),["assets/dev-ops-env.html-6ab7350a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-106ad43e":v(()=>i(()=>import("./document-style-guide.html-33839325.js"),["assets/document-style-guide.html-33839325.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-76c3c216":v(()=>i(()=>import("./centos-time.html-183d3dab.js"),["assets/centos-time.html-183d3dab.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3623fc05":v(()=>i(()=>import("./curl-https.html-d621bf15.js"),["assets/curl-https.html-d621bf15.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-00ff071b":v(()=>i(()=>import("./du-df-diff.html-07e93ed1.js"),["assets/du-df-diff.html-07e93ed1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-51198775":v(()=>i(()=>import("./mysql-max-con.html-5e85b84a.js"),["assets/mysql-max-con.html-5e85b84a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-213dba9c":v(()=>i(()=>import("./swap.html-f79ae87f.js"),["assets/swap.html-f79ae87f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cade1efe":v(()=>i(()=>import("./index.html-11f8b1b3.js"),["assets/index.html-11f8b1b3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2a83e426":v(()=>i(()=>import("./k8s-install.html-976e11e1.js"),["assets/k8s-install.html-976e11e1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-dd604362":v(()=>i(()=>import("./E_special_exitcodes.html-f1718a35.js"),["assets/E_special_exitcodes.html-f1718a35.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e021017c":v(()=>i(()=>import("./T_ascii_table.html-4f4e55cd.js"),["assets/T_ascii_table.html-4f4e55cd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0362c258":v(()=>i(()=>import("./01_shell_programming.html-2ae3e92b.js"),["assets/01_shell_programming.html-2ae3e92b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ccb7dd70":v(()=>i(()=>import("./02_1_invoking_the_script.html-9836c9b4.js"),["assets/02_1_invoking_the_script.html-9836c9b4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7af80658":v(()=>i(()=>import("./02_2_preliminary_exercises.html-a8bc9ef3.js"),["assets/02_2_preliminary_exercises.html-a8bc9ef3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c0e652fc":v(()=>i(()=>import("./02_starting_off_with_a_sha_bang.html-7d9d871a.js"),["assets/02_starting_off_with_a_sha_bang.html-7d9d871a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-71241dce":v(()=>i(()=>import("./index.html-64070802.js"),["assets/index.html-64070802.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3666da25":v(()=>i(()=>import("./03_special_characters.html-9d292a50.js"),["assets/03_special_characters.html-9d292a50.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-95c6342c":v(()=>i(()=>import("./04_1_variable_substitution.html-cf834a87.js"),["assets/04_1_variable_substitution.html-cf834a87.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-549a3ab9":v(()=>i(()=>import("./04_2_variable_assignment.html-54d28052.js"),["assets/04_2_variable_assignment.html-54d28052.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5f6eadd7":v(()=>i(()=>import("./04_3_bash_variables_are_untyped.html-d8d23ab3.js"),["assets/04_3_bash_variables_are_untyped.html-d8d23ab3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5db426fd":v(()=>i(()=>import("./04_introduction_to_variables_and_parameters.html-b5849ca6.js"),["assets/04_introduction_to_variables_and_parameters.html-b5849ca6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-51c96f18":v(()=>i(()=>import("./05_1_quoting_variables.html-e6d94823.js"),["assets/05_1_quoting_variables.html-e6d94823.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-44c2064c":v(()=>i(()=>import("./05_2_escaping.html-9fd3ba59.js"),["assets/05_2_escaping.html-9fd3ba59.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2ef7dc02":v(()=>i(()=>import("./05_quoting.html-ad1240ae.js"),["assets/05_quoting.html-ad1240ae.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6a52f4ae":v(()=>i(()=>import("./06_exit_and_exit_status.html-27a423c0.js"),["assets/06_exit_and_exit_status.html-27a423c0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d3244104":v(()=>i(()=>import("./07_1_test_constructs.html-54d9ea4d.js"),["assets/07_1_test_constructs.html-54d9ea4d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-57207c61":v(()=>i(()=>import("./07_2_file_test_operators.html-7d7986d5.js"),["assets/07_2_file_test_operators.html-7d7986d5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d584ed36":v(()=>i(()=>import("./07_3_other_comparison_operators.html-ad8bbfc0.js"),["assets/07_3_other_comparison_operators.html-ad8bbfc0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-49cbb9f9":v(()=>i(()=>import("./07_4_nested_if_then_condition_tests.html-97c0cda4.js"),["assets/07_4_nested_if_then_condition_tests.html-97c0cda4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1b65cd68":v(()=>i(()=>import("./07_5_testing_your_knowledge_of_tests.html-e1ee73a3.js"),["assets/07_5_testing_your_knowledge_of_tests.html-e1ee73a3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-41510350":v(()=>i(()=>import("./07_tests.html-1e4c9b70.js"),["assets/07_tests.html-1e4c9b70.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2f71d652":v(()=>i(()=>import("./08_1_operators.html-c5ea09a8.js"),["assets/08_1_operators.html-c5ea09a8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8d2e7446":v(()=>i(()=>import("./08_2_numerical_constants.html-b65e35b3.js"),["assets/08_2_numerical_constants.html-b65e35b3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0698c03c":v(()=>i(()=>import("./08_3_the_double_parentheses_construct.html-8260fef7.js"),["assets/08_3_the_double_parentheses_construct.html-8260fef7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-22a0477e":v(()=>i(()=>import("./08_4_operator_precedence.html-bb240bdd.js"),["assets/08_4_operator_precedence.html-bb240bdd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-339f9476":v(()=>i(()=>import("./08_operations_and_related_topics.html-2ac23b8b.js"),["assets/08_operations_and_related_topics.html-2ac23b8b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-71241d90":v(()=>i(()=>import("./index.html-ee045e3a.js"),["assets/index.html-ee045e3a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-765b1b97":v(()=>i(()=>import("./09_1_internal_variables.html-3a6232d8.js"),["assets/09_1_internal_variables.html-3a6232d8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1f7f0293":v(()=>i(()=>import("./09_2_1_another_use_for_declare.html-a72adddb.js"),["assets/09_2_1_another_use_for_declare.html-a72adddb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-66254658":v(()=>i(()=>import("./09_2_typing_variables_declare_or_typeset.html-00d3ed24.js"),["assets/09_2_typing_variables_declare_or_typeset.html-00d3ed24.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-835049c4":v(()=>i(()=>import("./09_3_random_generate_random_integer.html-63e5144b.js"),["assets/09_3_random_generate_random_integer.html-63e5144b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7583d4e9":v(()=>i(()=>import("./09_another_look_at_variables.html-cb6616be.js"),["assets/09_another_look_at_variables.html-cb6616be.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7d04115f":v(()=>i(()=>import("./10_1_1_manipulating_strings_using_awk.html-0732d90e.js"),["assets/10_1_1_manipulating_strings_using_awk.html-0732d90e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ac3119e6":v(()=>i(()=>import("./10_1_2_further_reference.html-8dc53320.js"),["assets/10_1_2_further_reference.html-8dc53320.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-aa29fc70":v(()=>i(()=>import("./10_1_manipulating_strings.html-1605ba2b.js"),["assets/10_1_manipulating_strings.html-1605ba2b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6f0ebce0":v(()=>i(()=>import("./10_2_parameter_substitution.html-c4d59c90.js"),["assets/10_2_parameter_substitution.html-c4d59c90.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-28da4efe":v(()=>i(()=>import("./10_manipulating_variables.html-28880cc0.js"),["assets/10_manipulating_variables.html-28880cc0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-755f1380":v(()=>i(()=>import("./11_1_loops.html-72c2a4cc.js"),["assets/11_1_loops.html-72c2a4cc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-18a04a46":v(()=>i(()=>import("./11_2_nested_loops.html-c0f58b31.js"),["assets/11_2_nested_loops.html-c0f58b31.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-751027c3":v(()=>i(()=>import("./11_3_loop_control.html-a739a735.js"),["assets/11_3_loop_control.html-a739a735.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8d45377a":v(()=>i(()=>import("./11_4_testing_and_branching.html-d237cf7d.js"),["assets/11_4_testing_and_branching.html-d237cf7d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cc33efae":v(()=>i(()=>import("./11_loops_and_branches.html-b428a403.js"),["assets/11_loops_and_branches.html-b428a403.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b6223f7e":v(()=>i(()=>import("./12_command_substitution.html-7d9622b1.js"),["assets/12_command_substitution.html-7d9622b1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-39f65eae":v(()=>i(()=>import("./13_arithmetic_expansion.html-02ac5844.js"),["assets/13_arithmetic_expansion.html-02ac5844.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-71241d52":v(()=>i(()=>import("./index.html-4fdeceba.js"),["assets/index.html-4fdeceba.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-04de7f18":v(()=>i(()=>import("./18_1_a_brief_introduction_to_regular_expressions.html-53f3be77.js"),["assets/18_1_a_brief_introduction_to_regular_expressions.html-53f3be77.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2ca54d11":v(()=>i(()=>import("./18_2_globbing.html-b0858bda.js"),["assets/18_2_globbing.html-b0858bda.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-731951cc":v(()=>i(()=>import("./18_3_regular_expression_comparison_table.html-1b449574.js"),["assets/18_3_regular_expression_comparison_table.html-1b449574.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-04066f84":v(()=>i(()=>import("./18_regular_expressions.html-363b631a.js"),["assets/18_regular_expressions.html-363b631a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-17e5f48e":v(()=>i(()=>import("./19_here_documents.html-4986c1b1.js"),["assets/19_here_documents.html-4986c1b1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d54a4614":v(()=>i(()=>import("./20_1_use_exec.html-9eb0af39.js"),["assets/20_1_use_exec.html-9eb0af39.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c42e271a":v(()=>i(()=>import("./20_2_redirecting_code_blocks.html-b2d97f71.js"),["assets/20_2_redirecting_code_blocks.html-b2d97f71.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4a7628de":v(()=>i(()=>import("./20_3_applications.html-e51d5b9e.js"),["assets/20_3_applications.html-e51d5b9e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-53c8880c":v(()=>i(()=>import("./20_io_redirection.html-e6822541.js"),["assets/20_io_redirection.html-e6822541.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5aad7141":v(()=>i(()=>import("./21_subshells.html-0b72f31b.js"),["assets/21_subshells.html-0b72f31b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ab5e1508":v(()=>i(()=>import("./22_Restricted_Shells.html-662c1f08.js"),["assets/22_Restricted_Shells.html-662c1f08.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0f5fa4fa":v(()=>i(()=>import("./23_Process_Substitution.html-e34f555d.js"),["assets/23_Process_Substitution.html-e34f555d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-81126a72":v(()=>i(()=>import("./24_1_complex_functions_and_function_complexities.html-08d18698.js"),["assets/24_1_complex_functions_and_function_complexities.html-08d18698.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-66790dab":v(()=>i(()=>import("./24_2_local_variables.html-416ffdea.js"),["assets/24_2_local_variables.html-416ffdea.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-092fc61e":v(()=>i(()=>import("./24_3_recursion_without_local_variables.html-d03a42b8.js"),["assets/24_3_recursion_without_local_variables.html-d03a42b8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-09c92e74":v(()=>i(()=>import("./24_functions.html-7c6e47df.js"),["assets/24_functions.html-7c6e47df.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ac2eca3c":v(()=>i(()=>import("./25_aliases.html-bbdb109c.js"),["assets/25_aliases.html-bbdb109c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-418229bc":v(()=>i(()=>import("./26_List_Constructs.html-04e2f523.js"),["assets/26_List_Constructs.html-04e2f523.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-34bd49ba":v(()=>i(()=>import("./27_arrays.html-fa0cd929.js"),["assets/27_arrays.html-fa0cd929.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4d92bb04":v(()=>i(()=>import("./30_network_programming.html-bdfe9b48.js"),["assets/30_network_programming.html-bdfe9b48.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ae8f4894":v(()=>i(()=>import("./32_Debugging.html-37e46b97.js"),["assets/32_Debugging.html-37e46b97.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5d30fe45":v(()=>i(()=>import("./33_options.html-516718d5.js"),["assets/33_options.html-516718d5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-75f467df":v(()=>i(()=>import("./34_Gotchas.html-2d9c3792.js"),["assets/34_Gotchas.html-2d9c3792.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f6621c66":v(()=>i(()=>import("./36_10_shell_scripting_under_windows.html-1766c7a4.js"),["assets/36_10_shell_scripting_under_windows.html-1766c7a4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-719f9d3f":v(()=>i(()=>import("./36_11_ssh_remote_operate.html-36cab26c.js"),["assets/36_11_ssh_remote_operate.html-36cab26c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6bf8603e":v(()=>i(()=>import("./36_1_interactive_and_non-interactive_shells_and_scripts.html-6ab981dd.js"),["assets/36_1_interactive_and_non-interactive_shells_and_scripts.html-6ab981dd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-34aff614":v(()=>i(()=>import("./36_2_shell_wrappers.html-5991941f.js"),["assets/36_2_shell_wrappers.html-5991941f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5c17fa36":v(()=>i(()=>import("./36_3_tests_and_comparisons_alternatives.html-7e57cd6e.js"),["assets/36_3_tests_and_comparisons_alternatives.html-7e57cd6e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-95fb4b80":v(()=>i(()=>import("./36_4_recursion_a_script_calling_itself.html-2087b148.js"),["assets/36_4_recursion_a_script_calling_itself.html-2087b148.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-39d19511":v(()=>i(()=>import("./36_5_colorizing_scripts.html-d98b0228.js"),["assets/36_5_colorizing_scripts.html-d98b0228.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0e9831c3":v(()=>i(()=>import("./36_6_optimizations.html-4608a2fc.js"),["assets/36_6_optimizations.html-4608a2fc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7c814d38":v(()=>i(()=>import("./36_7_1_ideas_for_more_powerful_scripts.html-1c430263.js"),["assets/36_7_1_ideas_for_more_powerful_scripts.html-1c430263.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e4ba63b4":v(()=>i(()=>import("./36_7_2_widgets.html-18497baf.js"),["assets/36_7_2_widgets.html-18497baf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-77518a00":v(()=>i(()=>import("./36_7_assorted_tips.html-11b77c04.js"),["assets/36_7_assorted_tips.html-11b77c04.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5b2bfecf":v(()=>i(()=>import("./36_8_1_infected_shell_scripts.html-e7c5c345.js"),["assets/36_8_1_infected_shell_scripts.html-e7c5c345.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-13799cfe":v(()=>i(()=>import("./36_8_2_hiding_shell_script_source.html-f0e9a31e.js"),["assets/36_8_2_hiding_shell_script_source.html-f0e9a31e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-49e744cb":v(()=>i(()=>import("./36_8_3_writing_secure_shell_scripts.html-4ec1f676.js"),["assets/36_8_3_writing_secure_shell_scripts.html-4ec1f676.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-22d43eee":v(()=>i(()=>import("./36_8_security_issues.html-4cba71ec.js"),["assets/36_8_security_issues.html-4cba71ec.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bace1048":v(()=>i(()=>import("./36_9_portability_issues.html-ad327041.js"),["assets/36_9_portability_issues.html-ad327041.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2c406bc2":v(()=>i(()=>import("./36_miscellany.html-6ad46258.js"),["assets/36_miscellany.html-6ad46258.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-71241cd6":v(()=>i(()=>import("./index.html-7dad7a6e.js"),["assets/index.html-7dad7a6e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-79bd1f4a":v(()=>i(()=>import("./shili.html-62189b60.js"),["assets/shili.html-62189b60.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3e9942a6":v(()=>i(()=>import("./index.html-f0681f1f.js"),["assets/index.html-f0681f1f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-28948558":v(()=>i(()=>import("./hash.html-cbe13def.js"),["assets/hash.html-cbe13def.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5c0dc3f1":v(()=>i(()=>import("./key.html-2626687f.js"),["assets/key.html-2626687f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-df69f078":v(()=>i(()=>import("./list.html-fe30fcfe.js"),["assets/list.html-fe30fcfe.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-dae22064":v(()=>i(()=>import("./set.html-5cd95984.js"),["assets/set.html-5cd95984.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-641cf9f1":v(()=>i(()=>import("./string.html-0011a343.js"),["assets/string.html-0011a343.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5384c60c":v(()=>i(()=>import("./zset.html-4cc32cee.js"),["assets/zset.html-4cc32cee.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-582427ba":v(()=>i(()=>import("./shell-sed.html-7afa22ac.js"),["assets/shell-sed.html-7afa22ac.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d0688ad6":v(()=>i(()=>import("./每天一个linux命令（21）-find.html-a47055ee.js"),["assets/每天一个linux命令（21）-find.html-a47055ee.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-14498f4b":v(()=>i(()=>import("./每天一个linux命令（29）-chown.html-5b87cb71.js"),["assets/每天一个linux命令（29）-chown.html-5b87cb71.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f8d17c08":v(()=>i(()=>import("./每天一个linux命令（33）-du.html-f2754960.js"),["assets/每天一个linux命令（33）-du.html-f2754960.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-769b02c6":v(()=>i(()=>import("./每天一个linux命令（35）-diff.html-d81550fa.js"),["assets/每天一个linux命令（35）-diff.html-d81550fa.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0215d71c":v(()=>i(()=>import("./每天一个linux命令（36）-date.html-74acc014.js"),["assets/每天一个linux命令（36）-date.html-74acc014.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3bb98840":v(()=>i(()=>import("./每天一个linux命令（42）-killall.html-4212927d.js"),["assets/每天一个linux命令（42）-killall.html-4212927d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c0d2447e":v(()=>i(()=>import("./每天一个linux命令（45）-vmstat.html-d066bbd8.js"),["assets/每天一个linux命令（45）-vmstat.html-d066bbd8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7f1266d1":v(()=>i(()=>import("./每天一个linux命令（46）-iostat.html-c258c8c7.js"),["assets/每天一个linux命令（46）-iostat.html-c258c8c7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a27ac06c":v(()=>i(()=>import("./每天一个linux命令（49）-lsof.html-b6c06150.js"),["assets/每天一个linux命令（49）-lsof.html-b6c06150.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7503515e":v(()=>i(()=>import("./每天一个linux命令（52）-ping.html-2d5552b1.js"),["assets/每天一个linux命令（52）-ping.html-2d5552b1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-02aa1bcb":v(()=>i(()=>import("./每天一个linux命令（53）-traceroute.html-6fb353b5.js"),["assets/每天一个linux命令（53）-traceroute.html-6fb353b5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8578e31a":v(()=>i(()=>import("./每天一个linux命令（54）-netstat.html-7057d025.js"),["assets/每天一个linux命令（54）-netstat.html-7057d025.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-fb1ca100":v(()=>i(()=>import("./cat.html-38e1fe65.js"),["assets/cat.html-38e1fe65.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-789867d8":v(()=>i(()=>import("./file-detail.html-7b9187c9.js"),["assets/file-detail.html-7b9187c9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2638ec6a":v(()=>i(()=>import("./file-type.html-4ed1e6e9.js"),["assets/file-type.html-4ed1e6e9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-780b2f15":v(()=>i(()=>import("./zip.html-dd860124.js"),["assets/zip.html-dd860124.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-13488b07":v(()=>i(()=>import("./zsgc.html-6657b199.js"),["assets/zsgc.html-6657b199.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3706649a":v(()=>i(()=>import("./404.html-7c65654f.js"),["assets/404.html-7c65654f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-777a1bba":v(()=>i(()=>import("./index.html-7e1997a6.js"),["assets/index.html-7e1997a6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-74473916":v(()=>i(()=>import("./index.html-6b9f9f0f.js"),["assets/index.html-6b9f9f0f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-79e04fe4":v(()=>i(()=>import("./index.html-6a022a4a.js"),["assets/index.html-6a022a4a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e4cb1150":v(()=>i(()=>import("./index.html-6f5caf50.js"),["assets/index.html-6f5caf50.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cfe8b6c8":v(()=>i(()=>import("./index.html-44ef8413.js"),["assets/index.html-44ef8413.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-146a1089":v(()=>i(()=>import("./index.html-a5005fb8.js"),["assets/index.html-a5005fb8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5a3ba488":v(()=>i(()=>import("./index.html-2e35554c.js"),["assets/index.html-2e35554c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4e82d8f2":v(()=>i(()=>import("./index.html-cee11d60.js"),["assets/index.html-cee11d60.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d0a81d8":v(()=>i(()=>import("./index.html-c7a76458.js"),["assets/index.html-c7a76458.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7e266418":v(()=>i(()=>import("./index.html-324c7fcd.js"),["assets/index.html-324c7fcd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-dfd6d2fa":v(()=>i(()=>import("./index.html-66ff63d4.js"),["assets/index.html-66ff63d4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5e6cc4ed":v(()=>i(()=>import("./index.html-e6899e24.js"),["assets/index.html-e6899e24.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-20e4aa46":v(()=>i(()=>import("./index.html-7300d709.js"),["assets/index.html-7300d709.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-744e6dd4":v(()=>i(()=>import("./index.html-3f4e5d48.js"),["assets/index.html-3f4e5d48.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a3cc9f96":v(()=>i(()=>import("./index.html-f6e24e81.js"),["assets/index.html-f6e24e81.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-58535866":v(()=>i(()=>import("./index.html-66b03e04.js"),["assets/index.html-66b03e04.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3f621bca":v(()=>i(()=>import("./index.html-d5655bfd.js"),["assets/index.html-d5655bfd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8d69e284":v(()=>i(()=>import("./index.html-8174c491.js"),["assets/index.html-8174c491.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-71241c5a":v(()=>i(()=>import("./index.html-11841740.js"),["assets/index.html-11841740.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7314e22c":v(()=>i(()=>import("./index.html-99814ac8.js"),["assets/index.html-99814ac8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e2d3f5d2":v(()=>i(()=>import("./index.html-87933f0b.js"),["assets/index.html-87933f0b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d6a62914":v(()=>i(()=>import("./index.html-090a8eb6.js"),["assets/index.html-090a8eb6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ee4c6a8e":v(()=>i(()=>import("./index.html-4adcef55.js"),["assets/index.html-4adcef55.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-024485bd":v(()=>i(()=>import("./index.html-2fd0101e.js"),["assets/index.html-2fd0101e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5bc93818":v(()=>i(()=>import("./index.html-8b8c365c.js"),["assets/index.html-8b8c365c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-744d024e":v(()=>i(()=>import("./index.html-23235377.js"),["assets/index.html-23235377.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e52c881c":v(()=>i(()=>import("./index.html-5110a31d.js"),["assets/index.html-5110a31d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-154dc4c4":v(()=>i(()=>import("./index.html-0a1277e7.js"),["assets/index.html-0a1277e7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01560935":v(()=>i(()=>import("./index.html-11f4efc0.js"),["assets/index.html-11f4efc0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-155824b4":v(()=>i(()=>import("./index.html-c318fdb4.js"),["assets/index.html-c318fdb4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1fc637b7":v(()=>i(()=>import("./index.html-657eb880.js"),["assets/index.html-657eb880.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0a85b3c4":v(()=>i(()=>import("./index.html-9d273dd6.js"),["assets/index.html-9d273dd6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b30e41a8":v(()=>i(()=>import("./index.html-96f78fca.js"),["assets/index.html-96f78fca.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-227ecbd6":v(()=>i(()=>import("./index.html-ef48274a.js"),["assets/index.html-ef48274a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-726fbe70":v(()=>i(()=>import("./index.html-17b31f5a.js"),["assets/index.html-17b31f5a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4c40caa5":v(()=>i(()=>import("./index.html-a440fc1e.js"),["assets/index.html-a440fc1e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3a134560":v(()=>i(()=>import("./index.html-6eb94388.js"),["assets/index.html-6eb94388.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6193b4f4":v(()=>i(()=>import("./index.html-cf5f84fe.js"),["assets/index.html-cf5f84fe.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1ab38844":v(()=>i(()=>import("./index.html-67b7ce63.js"),["assets/index.html-67b7ce63.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e9c7e408":v(()=>i(()=>import("./index.html-eef54474.js"),["assets/index.html-eef54474.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-63bcc623":v(()=>i(()=>import("./index.html-0b95481c.js"),["assets/index.html-0b95481c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e9a125fe":v(()=>i(()=>import("./index.html-c3471658.js"),["assets/index.html-c3471658.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5616b529":v(()=>i(()=>import("./index.html-95f5cb1d.js"),["assets/index.html-95f5cb1d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-78cbe7bb":v(()=>i(()=>import("./index.html-77f4fb76.js"),["assets/index.html-77f4fb76.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2671299e":v(()=>i(()=>import("./index.html-5e6fedc9.js"),["assets/index.html-5e6fedc9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9c48d85a":v(()=>i(()=>import("./index.html-eced12c6.js"),["assets/index.html-eced12c6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b310d42a":v(()=>i(()=>import("./index.html-40a28e0a.js"),["assets/index.html-40a28e0a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9717cc36":v(()=>i(()=>import("./index.html-a63629ae.js"),["assets/index.html-a63629ae.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-db15110e":v(()=>i(()=>import("./index.html-df30ab37.js"),["assets/index.html-df30ab37.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8848dfa8":v(()=>i(()=>import("./index.html-ecc4c9cf.js"),["assets/index.html-ecc4c9cf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-465d9bbe":v(()=>i(()=>import("./index.html-7c192aed.js"),["assets/index.html-7c192aed.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1715b471":v(()=>i(()=>import("./index.html-120b64bb.js"),["assets/index.html-120b64bb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-169ad378":v(()=>i(()=>import("./index.html-c63da76e.js"),["assets/index.html-c63da76e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c3ed50a2":v(()=>i(()=>import("./index.html-f9d9038c.js"),["assets/index.html-f9d9038c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-03efcc30":v(()=>i(()=>import("./index.html-44e7874a.js"),["assets/index.html-44e7874a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b30b9fe4":v(()=>i(()=>import("./index.html-c161d731.js"),["assets/index.html-c161d731.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b30332ba":v(()=>i(()=>import("./index.html-fc4d8f4f.js"),["assets/index.html-fc4d8f4f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-68014528":v(()=>i(()=>import("./index.html-1ba44f13.js"),["assets/index.html-1ba44f13.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6e3f2a98":v(()=>i(()=>import("./index.html-99defefa.js"),["assets/index.html-99defefa.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6106c001":v(()=>i(()=>import("./index.html-3f414783.js"),["assets/index.html-3f414783.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2863bf51":v(()=>i(()=>import("./index.html-3146ec7f.js"),["assets/index.html-3146ec7f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-742fbe9b":v(()=>i(()=>import("./index.html-012b69f9.js"),["assets/index.html-012b69f9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1d8b4315":v(()=>i(()=>import("./index.html-334c57b2.js"),["assets/index.html-334c57b2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-302533af":v(()=>i(()=>import("./index.html-fb40412b.js"),["assets/index.html-fb40412b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-200c1937":v(()=>i(()=>import("./index.html-e8d8d983.js"),["assets/index.html-e8d8d983.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2831124d":v(()=>i(()=>import("./index.html-ce6c1e8e.js"),["assets/index.html-ce6c1e8e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-013498cd":v(()=>i(()=>import("./index.html-768293c6.js"),["assets/index.html-768293c6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6e776c45":v(()=>i(()=>import("./index.html-abd0deb2.js"),["assets/index.html-abd0deb2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-13275df4":v(()=>i(()=>import("./index.html-7a7ed98e.js"),["assets/index.html-7a7ed98e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-30e11687":v(()=>i(()=>import("./index.html-254a675f.js"),["assets/index.html-254a675f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-49a91360":v(()=>i(()=>import("./index.html-b918cd78.js"),["assets/index.html-b918cd78.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-be049512":v(()=>i(()=>import("./index.html-427996dc.js"),["assets/index.html-427996dc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-564c406a":v(()=>i(()=>import("./index.html-fcb97d6e.js"),["assets/index.html-fcb97d6e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1a8900ba":v(()=>i(()=>import("./index.html-d915e822.js"),["assets/index.html-d915e822.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a018a546":v(()=>i(()=>import("./index.html-1d2c82ba.js"),["assets/index.html-1d2c82ba.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-42e0c678":v(()=>i(()=>import("./index.html-1a14b5a1.js"),["assets/index.html-1a14b5a1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4b6ff193":v(()=>i(()=>import("./index.html-19cd5ec6.js"),["assets/index.html-19cd5ec6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-09601066":v(()=>i(()=>import("./index.html-84295c01.js"),["assets/index.html-84295c01.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d4172afa":v(()=>i(()=>import("./index.html-2815a7be.js"),["assets/index.html-2815a7be.js","assets/plugin-vue_export-helper-c27b6911.js"]))};var Wv=Symbol(""),Jv=Y(Fv),qr=Vs({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),He=Y(qr),pn=()=>He,zr=Symbol(""),xn=()=>{const n=kn(zr);if(!n)throw new Error("usePageFrontmatter() is called without provider.");return n},Nr=Symbol(""),Qv=()=>{const n=kn(Nr);if(!n)throw new Error("usePageHead() is called without provider.");return n},Yv=Symbol(""),Hr=Symbol(""),$i=()=>{const n=kn(Hr);if(!n)throw new Error("usePageLang() is called without provider.");return n},Ur=Symbol(""),Xv=()=>{const n=kn(Ur);if(!n)throw new Error("usePageLayout() is called without provider.");return n},Mi=Symbol(""),Ae=()=>{const n=kn(Mi);if(!n)throw new Error("useRouteLocale() is called without provider.");return n},hs=Y(jv),Gr=()=>hs,Kr=Symbol(""),ma=()=>{const n=kn(Kr);if(!n)throw new Error("useSiteLocaleData() is called without provider.");return n},Zv=Symbol(""),nm="Layout",em="NotFound",Ie=Bs({resolveLayouts:n=>n.reduce((e,s)=>({...e,...s.layouts}),{}),resolvePageData:async n=>{const e=Jv.value[n];return await(e==null?void 0:e())??qr},resolvePageFrontmatter:n=>n.frontmatter,resolvePageHead:(n,e,s)=>{const a=mn(e.description)?e.description:s.description,t=[...X(e.head)?e.head:[],...s.head,["title",{},n],["meta",{name:"description",content:a}]];return zv(t)},resolvePageHeadTitle:(n,e)=>[n.title,e.title].filter(s=>!!s).join(" | "),resolvePageLang:n=>n.lang||"en",resolvePageLayout:(n,e)=>{let s;if(n.path){const a=n.frontmatter.layout;mn(a)?s=a:s=nm}else s=em;return e[s]},resolveRouteLocale:(n,e)=>Kv(n,e),resolveSiteLocaleData:(n,e)=>({...n,...n.locales[e]})}),ct=S({name:"ClientOnly",setup(n,e){const s=Y(!1);return yn(()=>{s.value=!0}),()=>{var a,t;return s.value?(t=(a=e.slots).default)==null?void 0:t.call(a):null}}}),Wr=S({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(n){const e=pn(),s=x(()=>jr[n.pageKey||e.value.key]);return()=>s.value?r(s.value):r("div","404 Not Found")}}),oe=(n={})=>n,In=n=>ls(n)?n:`/${Fr(n)}`;const sm={};/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const vs=typeof window<"u";function am(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const fn=Object.assign;function Tt(n,e){const s={};for(const a in e){const t=e[a];s[a]=_e(t)?t.map(n):n(t)}return s}const Qs=()=>{},_e=Array.isArray,tm=/\/$/,im=n=>n.replace(tm,"");function It(n,e,s="/"){let a,t={},l="",o="";const c=e.indexOf("#");let p=e.indexOf("?");return c<p&&c>=0&&(p=-1),p>-1&&(a=e.slice(0,p),l=e.slice(p+1,c>-1?c:e.length),t=n(l)),c>-1&&(a=a||e.slice(0,c),o=e.slice(c,e.length)),a=cm(a??e,s),{fullPath:a+(l&&"?")+l+o,path:a,query:t,hash:o}}function lm(n,e){const s=e.query?n(e.query):"";return e.path+(s&&"?")+s+(e.hash||"")}function Wl(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function om(n,e,s){const a=e.matched.length-1,t=s.matched.length-1;return a>-1&&a===t&&Ls(e.matched[a],s.matched[t])&&Jr(e.params,s.params)&&n(e.query)===n(s.query)&&e.hash===s.hash}function Ls(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Jr(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const s in n)if(!rm(n[s],e[s]))return!1;return!0}function rm(n,e){return _e(n)?Jl(n,e):_e(e)?Jl(e,n):n===e}function Jl(n,e){return _e(e)?n.length===e.length&&n.every((s,a)=>s===e[a]):n.length===1&&n[0]===e}function cm(n,e){if(n.startsWith("/"))return n;if(!n)return e;const s=e.split("/"),a=n.split("/"),t=a[a.length-1];(t===".."||t===".")&&a.push("");let l=s.length-1,o,c;for(o=0;o<a.length;o++)if(c=a[o],c!==".")if(c==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+a.slice(o-(o===a.length?1:0)).join("/")}var oa;(function(n){n.pop="pop",n.push="push"})(oa||(oa={}));var Ys;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ys||(Ys={}));function pm(n){if(!n)if(vs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),im(n)}const dm=/^[^#]+#/;function um(n,e){return n.replace(dm,"#")+e}function vm(n,e){const s=document.documentElement.getBoundingClientRect(),a=n.getBoundingClientRect();return{behavior:e.behavior,left:a.left-s.left-(e.left||0),top:a.top-s.top-(e.top||0)}}const pt=()=>({left:window.pageXOffset,top:window.pageYOffset});function mm(n){let e;if("el"in n){const s=n.el,a=typeof s=="string"&&s.startsWith("#"),t=typeof s=="string"?a?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!t)return;e=vm(t,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ql(n,e){return(history.state?history.state.position-e:-1)+n}const Qt=new Map;function hm(n,e){Qt.set(n,e)}function bm(n){const e=Qt.get(n);return Qt.delete(n),e}let _m=()=>location.protocol+"//"+location.host;function Qr(n,e){const{pathname:s,search:a,hash:t}=e,l=n.indexOf("#");if(l>-1){let c=t.includes(n.slice(l))?n.slice(l).length:1,p=t.slice(c);return p[0]!=="/"&&(p="/"+p),Wl(p,"")}return Wl(s,n)+a+t}function km(n,e,s,a){let t=[],l=[],o=null;const c=({state:h})=>{const b=Qr(n,location),g=s.value,A=e.value;let w=0;if(h){if(s.value=b,e.value=h,o&&o===g){o=null;return}w=A?h.position-A.position:0}else a(b);t.forEach(k=>{k(s.value,g,{delta:w,type:oa.pop,direction:w?w>0?Ys.forward:Ys.back:Ys.unknown})})};function p(){o=s.value}function d(h){t.push(h);const b=()=>{const g=t.indexOf(h);g>-1&&t.splice(g,1)};return l.push(b),b}function u(){const{history:h}=window;h.state&&h.replaceState(fn({},h.state,{scroll:pt()}),"")}function m(){for(const h of l)h();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:p,listen:d,destroy:m}}function Yl(n,e,s,a=!1,t=!1){return{back:n,current:e,forward:s,replaced:a,position:window.history.length,scroll:t?pt():null}}function fm(n){const{history:e,location:s}=window,a={value:Qr(n,s)},t={value:e.state};t.value||l(a.value,{back:null,current:a.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function l(p,d,u){const m=n.indexOf("#"),h=m>-1?(s.host&&document.querySelector("base")?n:n.slice(m))+p:_m()+n+p;try{e[u?"replaceState":"pushState"](d,"",h),t.value=d}catch(b){console.error(b),s[u?"replace":"assign"](h)}}function o(p,d){const u=fn({},e.state,Yl(t.value.back,p,t.value.forward,!0),d,{position:t.value.position});l(p,u,!0),a.value=p}function c(p,d){const u=fn({},t.value,e.state,{forward:p,scroll:pt()});l(u.current,u,!0);const m=fn({},Yl(a.value,p,null),{position:u.position+1},d);l(p,m,!1),a.value=p}return{location:a,state:t,push:c,replace:o}}function gm(n){n=pm(n);const e=fm(n),s=km(n,e.state,e.location,e.replace);function a(l,o=!0){o||s.pauseListeners(),history.go(l)}const t=fn({location:"",base:n,go:a,createHref:um.bind(null,n)},e,s);return Object.defineProperty(t,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(t,"state",{enumerable:!0,get:()=>e.state.value}),t}function Em(n){return typeof n=="string"||n&&typeof n=="object"}function Yr(n){return typeof n=="string"||typeof n=="symbol"}const De={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xr=Symbol("");var Xl;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Xl||(Xl={}));function Ts(n,e){return fn(new Error,{type:n,[Xr]:!0},e)}function Le(n,e){return n instanceof Error&&Xr in n&&(e==null||!!(n.type&e))}const Zl="[^/]+?",ym={sensitive:!1,strict:!1,start:!0,end:!0},xm=/[.+*?^${}()[\]/\\]/g;function Am(n,e){const s=fn({},ym,e),a=[];let t=s.start?"^":"";const l=[];for(const d of n){const u=d.length?[]:[90];s.strict&&!d.length&&(t+="/");for(let m=0;m<d.length;m++){const h=d[m];let b=40+(s.sensitive?.25:0);if(h.type===0)m||(t+="/"),t+=h.value.replace(xm,"\\$&"),b+=40;else if(h.type===1){const{value:g,repeatable:A,optional:w,regexp:k}=h;l.push({name:g,repeatable:A,optional:w});const E=k||Zl;if(E!==Zl){b+=10;try{new RegExp(`(${E})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+B.message)}}let R=A?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;m||(R=w&&d.length<2?`(?:/${R})`:"/"+R),w&&(R+="?"),t+=R,b+=20,w&&(b+=-8),A&&(b+=-20),E===".*"&&(b+=-50)}u.push(b)}a.push(u)}if(s.strict&&s.end){const d=a.length-1;a[d][a[d].length-1]+=.7000000000000001}s.strict||(t+="/?"),s.end?t+="$":s.strict&&(t+="(?:/|$)");const o=new RegExp(t,s.sensitive?"":"i");function c(d){const u=d.match(o),m={};if(!u)return null;for(let h=1;h<u.length;h++){const b=u[h]||"",g=l[h-1];m[g.name]=b&&g.repeatable?b.split("/"):b}return m}function p(d){let u="",m=!1;for(const h of n){(!m||!u.endsWith("/"))&&(u+="/"),m=!1;for(const b of h)if(b.type===0)u+=b.value;else if(b.type===1){const{value:g,repeatable:A,optional:w}=b,k=g in d?d[g]:"";if(_e(k)&&!A)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=_e(k)?k.join("/"):k;if(!E)if(w)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):m=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:o,score:a,keys:l,parse:c,stringify:p}}function wm(n,e){let s=0;for(;s<n.length&&s<e.length;){const a=e[s]-n[s];if(a)return a;s++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Pm(n,e){let s=0;const a=n.score,t=e.score;for(;s<a.length&&s<t.length;){const l=wm(a[s],t[s]);if(l)return l;s++}if(Math.abs(t.length-a.length)===1){if(no(a))return 1;if(no(t))return-1}return t.length-a.length}function no(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Lm={type:0,value:""},Tm=/[a-zA-Z0-9_]/;function Im(n){if(!n)return[[]];if(n==="/")return[[Lm]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(b){throw new Error(`ERR (${s})/"${d}": ${b}`)}let s=0,a=s;const t=[];let l;function o(){l&&t.push(l),l=[]}let c=0,p,d="",u="";function m(){d&&(s===0?l.push({type:0,value:d}):s===1||s===2||s===3?(l.length>1&&(p==="*"||p==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:d,regexp:u,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):e("Invalid state to consume buffer"),d="")}function h(){d+=p}for(;c<n.length;){if(p=n[c++],p==="\\"&&s!==2){a=s,s=4;continue}switch(s){case 0:p==="/"?(d&&m(),o()):p===":"?(m(),s=1):h();break;case 4:h(),s=a;break;case 1:p==="("?s=2:Tm.test(p)?h():(m(),s=0,p!=="*"&&p!=="?"&&p!=="+"&&c--);break;case 2:p===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+p:s=3:u+=p;break;case 3:m(),s=0,p!=="*"&&p!=="?"&&p!=="+"&&c--,u="";break;default:e("Unknown state");break}}return s===2&&e(`Unfinished custom RegExp for param "${d}"`),m(),o(),t}function Dm(n,e,s){const a=Am(Im(n.path),s),t=fn(a,{record:n,parent:e,children:[],alias:[]});return e&&!t.record.aliasOf==!e.record.aliasOf&&e.children.push(t),t}function Rm(n,e){const s=[],a=new Map;e=ao({strict:!1,end:!0,sensitive:!1},e);function t(u){return a.get(u)}function l(u,m,h){const b=!h,g=Om(u);g.aliasOf=h&&h.record;const A=ao(e,u),w=[g];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of R)w.push(fn({},g,{components:h?h.record.components:g.components,path:B,aliasOf:h?h.record:g}))}let k,E;for(const R of w){const{path:B}=R;if(m&&B[0]!=="/"){const H=m.record.path,V=H[H.length-1]==="/"?"":"/";R.path=m.record.path+(B&&V+B)}if(k=Dm(R,m,A),h?h.alias.push(k):(E=E||k,E!==k&&E.alias.push(k),b&&u.name&&!so(k)&&o(u.name)),g.children){const H=g.children;for(let V=0;V<H.length;V++)l(H[V],k,h&&h.children[V])}h=h||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&p(k)}return E?()=>{o(E)}:Qs}function o(u){if(Yr(u)){const m=a.get(u);m&&(a.delete(u),s.splice(s.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=s.indexOf(u);m>-1&&(s.splice(m,1),u.record.name&&a.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return s}function p(u){let m=0;for(;m<s.length&&Pm(u,s[m])>=0&&(u.record.path!==s[m].record.path||!Zr(u,s[m]));)m++;s.splice(m,0,u),u.record.name&&!so(u)&&a.set(u.record.name,u)}function d(u,m){let h,b={},g,A;if("name"in u&&u.name){if(h=a.get(u.name),!h)throw Ts(1,{location:u});A=h.record.name,b=fn(eo(m.params,h.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&eo(u.params,h.keys.map(E=>E.name))),g=h.stringify(b)}else if("path"in u)g=u.path,h=s.find(E=>E.re.test(g)),h&&(b=h.parse(g),A=h.record.name);else{if(h=m.name?a.get(m.name):s.find(E=>E.re.test(m.path)),!h)throw Ts(1,{location:u,currentLocation:m});A=h.record.name,b=fn({},m.params,u.params),g=h.stringify(b)}const w=[];let k=h;for(;k;)w.unshift(k.record),k=k.parent;return{name:A,path:g,params:b,matched:w,meta:Vm(w)}}return n.forEach(u=>l(u)),{addRoute:l,resolve:d,removeRoute:o,getRoutes:c,getRecordMatcher:t}}function eo(n,e){const s={};for(const a of e)a in n&&(s[a]=n[a]);return s}function Om(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Bm(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Bm(n){const e={},s=n.props||!1;if("component"in n)e.default=s;else for(const a in n.components)e[a]=typeof s=="boolean"?s:s[a];return e}function so(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Vm(n){return n.reduce((e,s)=>fn(e,s.meta),{})}function ao(n,e){const s={};for(const a in n)s[a]=a in e?e[a]:n[a];return s}function Zr(n,e){return e.children.some(s=>s===n||Zr(n,s))}const nc=/#/g,Cm=/&/g,Sm=/\//g,$m=/=/g,Mm=/\?/g,ec=/\+/g,Fm=/%5B/g,jm=/%5D/g,sc=/%5E/g,qm=/%60/g,ac=/%7B/g,zm=/%7C/g,tc=/%7D/g,Nm=/%20/g;function Fi(n){return encodeURI(""+n).replace(zm,"|").replace(Fm,"[").replace(jm,"]")}function Hm(n){return Fi(n).replace(ac,"{").replace(tc,"}").replace(sc,"^")}function Yt(n){return Fi(n).replace(ec,"%2B").replace(Nm,"+").replace(nc,"%23").replace(Cm,"%26").replace(qm,"`").replace(ac,"{").replace(tc,"}").replace(sc,"^")}function Um(n){return Yt(n).replace($m,"%3D")}function Gm(n){return Fi(n).replace(nc,"%23").replace(Mm,"%3F")}function Km(n){return n==null?"":Gm(n).replace(Sm,"%2F")}function Ya(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Wm(n){const e={};if(n===""||n==="?")return e;const a=(n[0]==="?"?n.slice(1):n).split("&");for(let t=0;t<a.length;++t){const l=a[t].replace(ec," "),o=l.indexOf("="),c=Ya(o<0?l:l.slice(0,o)),p=o<0?null:Ya(l.slice(o+1));if(c in e){let d=e[c];_e(d)||(d=e[c]=[d]),d.push(p)}else e[c]=p}return e}function to(n){let e="";for(let s in n){const a=n[s];if(s=Um(s),a==null){a!==void 0&&(e+=(e.length?"&":"")+s);continue}(_e(a)?a.map(l=>l&&Yt(l)):[a&&Yt(a)]).forEach(l=>{l!==void 0&&(e+=(e.length?"&":"")+s,l!=null&&(e+="="+l))})}return e}function Jm(n){const e={};for(const s in n){const a=n[s];a!==void 0&&(e[s]=_e(a)?a.map(t=>t==null?null:""+t):a==null?a:""+a)}return e}const Qm=Symbol(""),io=Symbol(""),dt=Symbol(""),ji=Symbol(""),Xt=Symbol("");function zs(){let n=[];function e(a){return n.push(a),()=>{const t=n.indexOf(a);t>-1&&n.splice(t,1)}}function s(){n=[]}return{add:e,list:()=>n,reset:s}}function Ue(n,e,s,a,t){const l=a&&(a.enterCallbacks[t]=a.enterCallbacks[t]||[]);return()=>new Promise((o,c)=>{const p=m=>{m===!1?c(Ts(4,{from:s,to:e})):m instanceof Error?c(m):Em(m)?c(Ts(2,{from:e,to:m})):(l&&a.enterCallbacks[t]===l&&typeof m=="function"&&l.push(m),o())},d=n.call(a&&a.instances[t],e,s,p);let u=Promise.resolve(d);n.length<3&&(u=u.then(p)),u.catch(m=>c(m))})}function Dt(n,e,s,a){const t=[];for(const l of n)for(const o in l.components){let c=l.components[o];if(!(e!=="beforeRouteEnter"&&!l.instances[o]))if(Ym(c)){const d=(c.__vccOpts||c)[e];d&&t.push(Ue(d,s,a,l,o))}else{let p=c();t.push(()=>p.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${l.path}"`));const u=am(d)?d.default:d;l.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Ue(h,s,a,l,o)()}))}}return t}function Ym(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Zt(n){const e=kn(dt),s=kn(ji),a=x(()=>e.resolve(ts(n.to))),t=x(()=>{const{matched:p}=a.value,{length:d}=p,u=p[d-1],m=s.matched;if(!u||!m.length)return-1;const h=m.findIndex(Ls.bind(null,u));if(h>-1)return h;const b=lo(p[d-2]);return d>1&&lo(u)===b&&m[m.length-1].path!==b?m.findIndex(Ls.bind(null,p[d-2])):h}),l=x(()=>t.value>-1&&eh(s.params,a.value.params)),o=x(()=>t.value>-1&&t.value===s.matched.length-1&&Jr(s.params,a.value.params));function c(p={}){return nh(p)?e[ts(n.replace)?"replace":"push"](ts(n.to)).catch(Qs):Promise.resolve()}return{route:a,href:x(()=>a.value.href),isActive:l,isExactActive:o,navigate:c}}const Xm=S({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zt,setup(n,{slots:e}){const s=Bs(Zt(n)),{options:a}=kn(dt),t=x(()=>({[oo(n.activeClass,a.linkActiveClass,"router-link-active")]:s.isActive,[oo(n.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const l=e.default&&e.default(s);return n.custom?l:r("a",{"aria-current":s.isExactActive?n.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:t.value},l)}}}),Zm=Xm;function nh(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function eh(n,e){for(const s in e){const a=e[s],t=n[s];if(typeof a=="string"){if(a!==t)return!1}else if(!_e(t)||t.length!==a.length||a.some((l,o)=>l!==t[o]))return!1}return!0}function lo(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const oo=(n,e,s)=>n??e??s,sh=S({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:s}){const a=kn(Xt),t=x(()=>n.route||a.value),l=kn(io,0),o=x(()=>{let d=ts(l);const{matched:u}=t.value;let m;for(;(m=u[d])&&!m.components;)d++;return d}),c=x(()=>t.value.matched[o.value]);he(io,x(()=>o.value+1)),he(Qm,c),he(Xt,t);const p=Y();return on(()=>[p.value,c.value,n.name],([d,u,m],[h,b,g])=>{u&&(u.instances[m]=d,b&&b!==u&&d&&d===h&&(u.leaveGuards.size||(u.leaveGuards=b.leaveGuards),u.updateGuards.size||(u.updateGuards=b.updateGuards))),d&&u&&(!b||!Ls(u,b)||!h)&&(u.enterCallbacks[m]||[]).forEach(A=>A(d))},{flush:"post"}),()=>{const d=t.value,u=n.name,m=c.value,h=m&&m.components[u];if(!h)return ro(s.default,{Component:h,route:d});const b=m.props[u],g=b?b===!0?d.params:typeof b=="function"?b(d):b:null,w=r(h,fn({},g,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(m.instances[u]=null)},ref:p}));return ro(s.default,{Component:w,route:d})||w}}});function ro(n,e){if(!n)return null;const s=n(e);return s.length===1?s[0]:s}const ic=sh;function ah(n){const e=Rm(n.routes,n),s=n.parseQuery||Wm,a=n.stringifyQuery||to,t=n.history,l=zs(),o=zs(),c=zs(),p=le(De);let d=De;vs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Tt.bind(null,L=>""+L),m=Tt.bind(null,Km),h=Tt.bind(null,Ya);function b(L,j){let $,K;return Yr(L)?($=e.getRecordMatcher(L),K=j):K=L,e.addRoute(K,$)}function g(L){const j=e.getRecordMatcher(L);j&&e.removeRoute(j)}function A(){return e.getRoutes().map(L=>L.record)}function w(L){return!!e.getRecordMatcher(L)}function k(L,j){if(j=fn({},j||p.value),typeof L=="string"){const y=It(s,L,j.path),P=e.resolve({path:y.path},j),I=t.createHref(y.fullPath);return fn(y,P,{params:h(P.params),hash:Ya(y.hash),redirectedFrom:void 0,href:I})}let $;if("path"in L)$=fn({},L,{path:It(s,L.path,j.path).path});else{const y=fn({},L.params);for(const P in y)y[P]==null&&delete y[P];$=fn({},L,{params:m(y)}),j.params=m(j.params)}const K=e.resolve($,j),dn=L.hash||"";K.params=u(h(K.params));const _=lm(a,fn({},L,{hash:Hm(dn),path:K.path})),f=t.createHref(_);return fn({fullPath:_,hash:dn,query:a===to?Jm(L.query):L.query||{}},K,{redirectedFrom:void 0,href:f})}function E(L){return typeof L=="string"?It(s,L,p.value.path):fn({},L)}function R(L,j){if(d!==L)return Ts(8,{from:j,to:L})}function B(L){return W(L)}function H(L){return B(fn(E(L),{replace:!0}))}function V(L){const j=L.matched[L.matched.length-1];if(j&&j.redirect){const{redirect:$}=j;let K=typeof $=="function"?$(L):$;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=E(K):{path:K},K.params={}),fn({query:L.query,hash:L.hash,params:"path"in K?{}:L.params},K)}}function W(L,j){const $=d=k(L),K=p.value,dn=L.state,_=L.force,f=L.replace===!0,y=V($);if(y)return W(fn(E(y),{state:typeof y=="object"?fn({},dn,y.state):dn,force:_,replace:f}),j||$);const P=$;P.redirectedFrom=j;let I;return!_&&om(a,K,$)&&(I=Ts(16,{to:P,from:K}),Hn(K,K,!0,!1)),(I?Promise.resolve(I):q(P,K)).catch(D=>Le(D)?Le(D,2)?D:ke(D):en(D,P,K)).then(D=>{if(D){if(Le(D,2))return W(fn({replace:f},E(D.to),{state:typeof D.to=="object"?fn({},dn,D.to.state):dn,force:_}),j||P)}else D=z(P,K,!0,f,dn);return an(P,K,D),D})}function T(L,j){const $=R(L,j);return $?Promise.reject($):Promise.resolve()}function N(L){const j=Xn.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(L):L()}function q(L,j){let $;const[K,dn,_]=th(L,j);$=Dt(K.reverse(),"beforeRouteLeave",L,j);for(const y of K)y.leaveGuards.forEach(P=>{$.push(Ue(P,L,j))});const f=T.bind(null,L,j);return $.push(f),Bn($).then(()=>{$=[];for(const y of l.list())$.push(Ue(y,L,j));return $.push(f),Bn($)}).then(()=>{$=Dt(dn,"beforeRouteUpdate",L,j);for(const y of dn)y.updateGuards.forEach(P=>{$.push(Ue(P,L,j))});return $.push(f),Bn($)}).then(()=>{$=[];for(const y of L.matched)if(y.beforeEnter&&!j.matched.includes(y))if(_e(y.beforeEnter))for(const P of y.beforeEnter)$.push(Ue(P,L,j));else $.push(Ue(y.beforeEnter,L,j));return $.push(f),Bn($)}).then(()=>(L.matched.forEach(y=>y.enterCallbacks={}),$=Dt(_,"beforeRouteEnter",L,j),$.push(f),Bn($))).then(()=>{$=[];for(const y of o.list())$.push(Ue(y,L,j));return $.push(f),Bn($)}).catch(y=>Le(y,8)?y:Promise.reject(y))}function an(L,j,$){for(const K of c.list())N(()=>K(L,j,$))}function z(L,j,$,K,dn){const _=R(L,j);if(_)return _;const f=j===De,y=vs?history.state:{};$&&(K||f?t.replace(L.fullPath,fn({scroll:f&&y&&y.scroll},dn)):t.push(L.fullPath,dn)),p.value=L,Hn(L,j,$,f),ke()}let Z;function U(){Z||(Z=t.listen((L,j,$)=>{if(!$e.listening)return;const K=k(L),dn=V(K);if(dn){W(fn(dn,{replace:!0}),K).catch(Qs);return}d=K;const _=p.value;vs&&hm(Ql(_.fullPath,$.delta),pt()),q(K,_).catch(f=>Le(f,12)?f:Le(f,2)?(W(f.to,K).then(y=>{Le(y,20)&&!$.delta&&$.type===oa.pop&&t.go(-1,!1)}).catch(Qs),Promise.reject()):($.delta&&t.go(-$.delta,!1),en(f,K,_))).then(f=>{f=f||z(K,_,!1),f&&($.delta&&!Le(f,8)?t.go(-$.delta,!1):$.type===oa.pop&&Le(f,20)&&t.go(-1,!1)),an(K,_,f)}).catch(Qs)}))}let Ln=zs(),tn=zs(),_n;function en(L,j,$){ke(L);const K=tn.list();return K.length?K.forEach(dn=>dn(L,j,$)):console.error(L),Promise.reject(L)}function re(){return _n&&p.value!==De?Promise.resolve():new Promise((L,j)=>{Ln.add([L,j])})}function ke(L){return _n||(_n=!L,U(),Ln.list().forEach(([j,$])=>L?$(L):j()),Ln.reset()),L}function Hn(L,j,$,K){const{scrollBehavior:dn}=n;if(!vs||!dn)return Promise.resolve();const _=!$&&bm(Ql(L.fullPath,0))||(K||!$)&&history.state&&history.state.scroll||null;return Ss().then(()=>dn(L,j,_)).then(f=>f&&mm(f)).catch(f=>en(f,L,j))}const Dn=L=>t.go(L);let Pe;const Xn=new Set,$e={currentRoute:p,listening:!0,addRoute:b,removeRoute:g,hasRoute:w,getRoutes:A,resolve:k,options:n,push:B,replace:H,go:Dn,back:()=>Dn(-1),forward:()=>Dn(1),beforeEach:l.add,beforeResolve:o.add,afterEach:c.add,onError:tn.add,isReady:re,install(L){const j=this;L.component("RouterLink",Zm),L.component("RouterView",ic),L.config.globalProperties.$router=j,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>ts(p)}),vs&&!Pe&&p.value===De&&(Pe=!0,B(t.location).catch(dn=>{}));const $={};for(const dn in De)$[dn]=x(()=>p.value[dn]);L.provide(dt,j),L.provide(ji,Bs($)),L.provide(Xt,p);const K=L.unmount;Xn.add(L),L.unmount=function(){Xn.delete(L),Xn.size<1&&(d=De,Z&&Z(),Z=null,p.value=De,Pe=!1,_n=!1),K()}}};function Bn(L){return L.reduce((j,$)=>j.then(()=>N($)),Promise.resolve())}return $e}function th(n,e){const s=[],a=[],t=[],l=Math.max(e.matched.length,n.matched.length);for(let o=0;o<l;o++){const c=e.matched[o];c&&(n.matched.find(d=>Ls(d,c))?a.push(c):s.push(c));const p=n.matched[o];p&&(e.matched.find(d=>Ls(d,p))||t.push(p))}return[s,a,t]}function jn(){return kn(dt)}function we(){return kn(ji)}var zn=Uint8Array,bs=Uint16Array,ih=Int32Array,lc=new zn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),oc=new zn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),lh=new zn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),rc=function(n,e){for(var s=new bs(31),a=0;a<31;++a)s[a]=e+=1<<n[a-1];for(var t=new ih(s[30]),a=1;a<30;++a)for(var l=s[a];l<s[a+1];++l)t[l]=l-s[a]<<5|a;return{b:s,r:t}},cc=rc(lc,2),pc=cc.b,oh=cc.r;pc[28]=258,oh[258]=28;var rh=rc(oc,0),ch=rh.b,ni=new bs(32768);for(var wn=0;wn<32768;++wn){var qe=(wn&43690)>>1|(wn&21845)<<1;qe=(qe&52428)>>2|(qe&13107)<<2,qe=(qe&61680)>>4|(qe&3855)<<4,ni[wn]=((qe&65280)>>8|(qe&255)<<8)>>1}var Xs=function(n,e,s){for(var a=n.length,t=0,l=new bs(e);t<a;++t)n[t]&&++l[n[t]-1];var o=new bs(e);for(t=1;t<e;++t)o[t]=o[t-1]+l[t-1]<<1;var c;if(s){c=new bs(1<<e);var p=15-e;for(t=0;t<a;++t)if(n[t])for(var d=t<<4|n[t],u=e-n[t],m=o[n[t]-1]++<<u,h=m|(1<<u)-1;m<=h;++m)c[ni[m]>>p]=d}else for(c=new bs(a),t=0;t<a;++t)n[t]&&(c[t]=ni[o[n[t]-1]++]>>15-n[t]);return c},ha=new zn(288);for(var wn=0;wn<144;++wn)ha[wn]=8;for(var wn=144;wn<256;++wn)ha[wn]=9;for(var wn=256;wn<280;++wn)ha[wn]=7;for(var wn=280;wn<288;++wn)ha[wn]=8;var dc=new zn(32);for(var wn=0;wn<32;++wn)dc[wn]=5;var ph=Xs(ha,9,1),dh=Xs(dc,5,1),Rt=function(n){for(var e=n[0],s=1;s<n.length;++s)n[s]>e&&(e=n[s]);return e},pe=function(n,e,s){var a=e/8|0;return(n[a]|n[a+1]<<8)>>(e&7)&s},Ot=function(n,e){var s=e/8|0;return(n[s]|n[s+1]<<8|n[s+2]<<16)>>(e&7)},uh=function(n){return(n+7)/8|0},qi=function(n,e,s){(e==null||e<0)&&(e=0),(s==null||s>n.length)&&(s=n.length);var a=new zn(s-e);return a.set(n.subarray(e,s)),a},vh=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ee=function(n,e,s){var a=new Error(e||vh[n]);if(a.code=n,Error.captureStackTrace&&Error.captureStackTrace(a,ee),!s)throw a;return a},mh=function(n,e,s,a){var t=n.length,l=a?a.length:0;if(!t||e.f&&!e.l)return s||new zn(0);var o=!s||e.i!=2,c=e.i;s||(s=new zn(t*3));var p=function(K){var dn=s.length;if(K>dn){var _=new zn(Math.max(dn*2,K));_.set(s),s=_}},d=e.f||0,u=e.p||0,m=e.b||0,h=e.l,b=e.d,g=e.m,A=e.n,w=t*8;do{if(!h){d=pe(n,u,1);var k=pe(n,u+1,3);if(u+=3,k)if(k==1)h=ph,b=dh,g=9,A=5;else if(k==2){var H=pe(n,u,31)+257,V=pe(n,u+10,15)+4,W=H+pe(n,u+5,31)+1;u+=14;for(var T=new zn(W),N=new zn(19),q=0;q<V;++q)N[lh[q]]=pe(n,u+q*3,7);u+=V*3;for(var an=Rt(N),z=(1<<an)-1,Z=Xs(N,an,1),q=0;q<W;){var U=Z[pe(n,u,z)];u+=U&15;var E=U>>4;if(E<16)T[q++]=E;else{var Ln=0,tn=0;for(E==16?(tn=3+pe(n,u,3),u+=2,Ln=T[q-1]):E==17?(tn=3+pe(n,u,7),u+=3):E==18&&(tn=11+pe(n,u,127),u+=7);tn--;)T[q++]=Ln}}var _n=T.subarray(0,H),en=T.subarray(H);g=Rt(_n),A=Rt(en),h=Xs(_n,g,1),b=Xs(en,A,1)}else ee(1);else{var E=uh(u)+4,R=n[E-4]|n[E-3]<<8,B=E+R;if(B>t){c&&ee(0);break}o&&p(m+R),s.set(n.subarray(E,B),m),e.b=m+=R,e.p=u=B*8,e.f=d;continue}if(u>w){c&&ee(0);break}}o&&p(m+131072);for(var re=(1<<g)-1,ke=(1<<A)-1,Hn=u;;Hn=u){var Ln=h[Ot(n,u)&re],Dn=Ln>>4;if(u+=Ln&15,u>w){c&&ee(0);break}if(Ln||ee(2),Dn<256)s[m++]=Dn;else if(Dn==256){Hn=u,h=null;break}else{var Pe=Dn-254;if(Dn>264){var q=Dn-257,Xn=lc[q];Pe=pe(n,u,(1<<Xn)-1)+pc[q],u+=Xn}var $e=b[Ot(n,u)&ke],Bn=$e>>4;$e||ee(3),u+=$e&15;var en=ch[Bn];if(Bn>3){var Xn=oc[Bn];en+=Ot(n,u)&(1<<Xn)-1,u+=Xn}if(u>w){c&&ee(0);break}o&&p(m+131072);var L=m+Pe;if(m<en){var j=l-en,$=Math.min(en,L);for(j+m<0&&ee(3);m<$;++m)s[m]=a[j+m]}for(;m<L;m+=4)s[m]=s[m-en],s[m+1]=s[m+1-en],s[m+2]=s[m+2-en],s[m+3]=s[m+3-en];m=L}}e.l=h,e.p=Hn,e.b=m,e.f=d,h&&(d=1,e.m=g,e.d=b,e.n=A)}while(!d);return m==s.length?s:qi(s,0,m)},hh=new zn(0),bh=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&ee(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&ee(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function _h(n,e){return mh(n.subarray(bh(n,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var co=typeof TextEncoder<"u"&&new TextEncoder,ei=typeof TextDecoder<"u"&&new TextDecoder,kh=0;try{ei.decode(hh,{stream:!0}),kh=1}catch{}var fh=function(n){for(var e="",s=0;;){var a=n[s++],t=(a>127)+(a>223)+(a>239);if(s+t>n.length)return{s:e,r:qi(n,s-1)};t?t==3?(a=((a&15)<<18|(n[s++]&63)<<12|(n[s++]&63)<<6|n[s++]&63)-65536,e+=String.fromCharCode(55296|a>>10,56320|a&1023)):t&1?e+=String.fromCharCode((a&31)<<6|n[s++]&63):e+=String.fromCharCode((a&15)<<12|(n[s++]&63)<<6|n[s++]&63):e+=String.fromCharCode(a)}};function gh(n,e){if(e){for(var s=new zn(n.length),a=0;a<n.length;++a)s[a]=n.charCodeAt(a);return s}if(co)return co.encode(n);for(var t=n.length,l=new zn(n.length+(n.length>>1)),o=0,c=function(u){l[o++]=u},a=0;a<t;++a){if(o+5>l.length){var p=new zn(o+8+(t-a<<1));p.set(l),l=p}var d=n.charCodeAt(a);d<128||e?c(d):d<2048?(c(192|d>>6),c(128|d&63)):d>55295&&d<57344?(d=65536+(d&1047552)|n.charCodeAt(++a)&1023,c(240|d>>18),c(128|d>>12&63),c(128|d>>6&63),c(128|d&63)):(c(224|d>>12),c(128|d>>6&63),c(128|d&63))}return qi(l,0,o)}function Eh(n,e){if(e){for(var s="",a=0;a<n.length;a+=16384)s+=String.fromCharCode.apply(null,n.subarray(a,a+16384));return s}else{if(ei)return ei.decode(n);var t=fh(n),l=t.s,s=t.r;return s.length&&ee(8),l}}const hn=({name:n="",color:e="currentColor"},{slots:s})=>{var a;return r("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${n}-icon`],viewBox:"0 0 1024 1024",fill:e,"aria-label":`${n} icon`},(a=s.default)==null?void 0:a.call(s))};hn.displayName="IconBase";const uc=({size:n=48,stroke:e=4,wrapper:s=!0,height:a=2*n})=>{const t=r("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[r("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),r("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e,"stroke-linecap":"round"},[r("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),r("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return s?r("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${a}px`},t):t};uc.displayName="LoadingIcon";const vc=(n,{slots:e})=>{var s;return(s=e.default)==null?void 0:s.call(e)},zi=(n="")=>{if(n){if(typeof n=="number")return new Date(n);const e=Date.parse(n.toString());if(!Number.isNaN(e))return new Date(e)}return null},ut=(n,e)=>{let s=1;for(let a=0;a<n.length;a++)s+=n.charCodeAt(a),s+=s<<10,s^=s>>6;return s+=s<<3,s^=s>>11,s%e},mc=Array.isArray,yh=n=>typeof n=="function",xh=n=>typeof n=="string";var Ah=n=>n.startsWith("ftp://"),Ni=n=>/^(https?:)?\/\//.test(n),wh=/.md((\?|#).*)?$/,Ph=(n,e="/")=>!!(Ni(n)||Ah(n)||n.startsWith("/")&&!n.startsWith(e)&&!wh.test(n)),hc=n=>Object.prototype.toString.call(n)==="[object Object]";function Lh(){const n=Y(!1);return $s()&&yn(()=>{n.value=!0}),n}function Th(n){return Lh(),x(()=>!!n())}const Ih=n=>typeof n=="function",Ve=n=>typeof n=="string",ra=(n,e)=>Ve(n)&&n.startsWith(e),ds=(n,e)=>Ve(n)&&n.endsWith(e),ba=Object.entries,Dh=Object.fromEntries,ye=Object.keys,bc=n=>(n.endsWith(".md")&&(n=`${n.slice(0,-3)}.html`),!n.endsWith("/")&&!n.endsWith(".html")&&(n=`${n}.html`),n=n.replace(/(^|\/)(?:README|index).html$/i,"$1"),n),po=n=>hc(n)&&Ve(n.name),ca=(n,e=!1)=>n?mc(n)?n.map(s=>Ve(s)?{name:s}:po(s)?s:null).filter(s=>s!==null):Ve(n)?[{name:n}]:po(n)?[n]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e?"":"| false"} | undefined\`, but got`,n),[]):[],_c=(n,e)=>{if(n){if(mc(n)&&n.every(Ve))return n;if(Ve(n))return[n];console.error(`Expect ${e||"value"} to be \`string[] | string | undefined\`, but got`,n)}return[]},kc=n=>_c(n,"category"),fc=n=>_c(n,"tag"),vt=n=>ra(n,"/");let Rh=class{constructor(){_t(this,"containerElement");_t(this,"messageElements",{});const e="message-container",s=document.getElementById(e);s?this.containerElement=s:(this.containerElement=document.createElement("div"),this.containerElement.id=e,document.body.appendChild(this.containerElement))}pop(e,s=2e3){const a=document.createElement("div"),t=Date.now();return a.className="message move-in",a.innerHTML=e,this.containerElement.appendChild(a),this.messageElements[t]=a,s>0&&setTimeout(()=>{this.close(t)},s),t}close(e){if(e){const s=this.messageElements[e];s.classList.remove("move-in"),s.classList.add("move-out"),s.addEventListener("animationend",()=>{s.remove(),delete this.messageElements[e]})}else ye(this.messageElements).forEach(s=>this.close(Number(s)))}destroy(){document.body.removeChild(this.containerElement)}};const gc=/#.*$/u,Oh=n=>{const e=gc.exec(n);return e?e[0]:""},uo=n=>decodeURI(n).replace(gc,"").replace(/(index)?\.(md|html)$/,""),Hi=(n,e)=>{if(e===void 0)return!1;const s=uo(n.path),a=uo(e),t=Oh(e);return t?t===n.hash&&(!a||s===a):s===a},Bh=n=>{const e=atob(n);return Eh(_h(gh(e,!0)))},Vh=n=>Ni(n)?n:`https://github.com/${n}`,Ec=n=>!Ni(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null,_a=(n,...e)=>{const s=n.resolve(...e),a=s.matched[s.matched.length-1];if(!(a!=null&&a.redirect))return s;const{redirect:t}=a,l=yh(t)?t(s):t,o=xh(l)?{path:l}:l;return _a(n,{hash:s.hash,query:s.query,params:s.params,...o})},Ch=n=>{if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget){const e=n.currentTarget.getAttribute("target");if(e!=null&&e.match(/\b_blank\b/i))return}return n.preventDefault(),!0}},$n=({to:n=""},{slots:e})=>{var s;const a=jn(),t=(l={})=>Ch(l)?a.push(n).catch():Promise.resolve();return r("a",{class:"md-link",href:In(bc(n)),onClick:t},(s=e.default)==null?void 0:s.call(e))};$n.displayName="VPLink";const yc=()=>r(hn,{name:"github"},()=>r("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));yc.displayName="GitHubIcon";const xc=()=>r(hn,{name:"gitlab"},()=>r("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));xc.displayName="GitLabIcon";const Ac=()=>r(hn,{name:"gitee"},()=>r("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));Ac.displayName="GiteeIcon";const wc=()=>r(hn,{name:"bitbucket"},()=>r("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));wc.displayName="BitbucketIcon";const Pc=()=>r(hn,{name:"source"},()=>r("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));Pc.displayName="SourceIcon";const be=(n,e)=>{const s=e?e._instance:$s();return hc(s==null?void 0:s.appContext.components)&&(n in s.appContext.components||ie(n)in s.appContext.components||da(ie(n))in s.appContext.components)},Sh=()=>Th(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),$h=()=>{const n=Sh();return x(()=>n.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},Ms=n=>{const e=Ae();return x(()=>n[e.value])};const Lc=({type:n="info",text:e="",vertical:s,color:a},{slots:t})=>{var l;return r("span",{class:["vp-badge",n,{diy:a}],style:{verticalAlign:s??!1,backgroundColor:a??!1}},((l=t.default)==null?void 0:l.call(t))||e)};Lc.displayName="Badge";var Mh=S({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(n){const e=x(()=>{const a=["font-icon icon"],t=`iconfont icon-${n.icon}`;return a.push(t),a}),s=x(()=>{const a={};return n.color&&(a.color=n.color),n.size&&(a["font-size"]=Number.isNaN(Number(n.size))?n.size:`${n.size}px`),ye(a).length?a:null});return()=>n.icon?r("span",{key:n.icon,class:e.value,style:s.value}):null}});function os(n){return zo()?(_d(n),!0):!1}function xe(n){return typeof n=="function"?n():ts(n)}const ka=typeof window<"u",Xa=()=>{},vo=Fh();function Fh(){var n;return ka&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Tc(n,e){function s(...a){return new Promise((t,l)=>{Promise.resolve(n(()=>e.apply(this,a),{fn:e,thisArg:this,args:a})).then(t).catch(l)})}return s}const Ic=n=>n();function jh(n,e=!0,s=!0,a=!1){let t=0,l,o=!0,c=Xa,p;const d=()=>{l&&(clearTimeout(l),l=void 0,c(),c=Xa)};return m=>{const h=xe(n),b=Date.now()-t,g=()=>p=m();return d(),h<=0?(t=Date.now(),g()):(b>h&&(s||!o)?(t=Date.now(),g()):e&&(p=new Promise((A,w)=>{c=a?w:A,l=setTimeout(()=>{t=Date.now(),o=!0,A(g()),d()},Math.max(0,h-b))})),!s&&!l&&(l=setTimeout(()=>o=!0,h)),o=!1,p)}}function qh(n=Ic){const e=Y(!0);function s(){e.value=!1}function a(){e.value=!0}const t=(...l)=>{e.value&&n(...l)};return{isActive:Vs(e),pause:s,resume:a,eventFilter:t}}function Dc(...n){if(n.length!==1)return Cs(...n);const e=n[0];return typeof e=="function"?Vs(Jd(()=>({get:e,set:Xa}))):Y(e)}function zh(n,e=200,s=!1,a=!0,t=!1){return Tc(jh(e,s,a,t),n)}function Nh(n,e=!0){$s()?yn(n):e?n():Ss(n)}function Hh(n,e,s={}){const{immediate:a=!0}=s,t=Y(!1);let l=null;function o(){l&&(clearTimeout(l),l=null)}function c(){t.value=!1,o()}function p(...d){o(),t.value=!0,l=setTimeout(()=>{t.value=!1,l=null,n(...d)},xe(e))}return a&&(t.value=!0,ka&&p()),os(c),{isPending:Vs(t),start:p,stop:c}}function mo(n=!1,e={}){const{truthyValue:s=!0,falsyValue:a=!1}=e,t=Sn(n),l=Y(n);function o(c){if(arguments.length)return l.value=c,l.value;{const p=xe(s);return l.value=l.value===p?xe(a):p,l.value}}return t?o:[l,o]}var ho=Object.getOwnPropertySymbols,Uh=Object.prototype.hasOwnProperty,Gh=Object.prototype.propertyIsEnumerable,Kh=(n,e)=>{var s={};for(var a in n)Uh.call(n,a)&&e.indexOf(a)<0&&(s[a]=n[a]);if(n!=null&&ho)for(var a of ho(n))e.indexOf(a)<0&&Gh.call(n,a)&&(s[a]=n[a]);return s};function Wh(n,e,s={}){const a=s,{eventFilter:t=Ic}=a,l=Kh(a,["eventFilter"]);return on(n,Tc(t,e),l)}var Jh=Object.defineProperty,Qh=Object.defineProperties,Yh=Object.getOwnPropertyDescriptors,Za=Object.getOwnPropertySymbols,Rc=Object.prototype.hasOwnProperty,Oc=Object.prototype.propertyIsEnumerable,bo=(n,e,s)=>e in n?Jh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,Xh=(n,e)=>{for(var s in e||(e={}))Rc.call(e,s)&&bo(n,s,e[s]);if(Za)for(var s of Za(e))Oc.call(e,s)&&bo(n,s,e[s]);return n},Zh=(n,e)=>Qh(n,Yh(e)),n1=(n,e)=>{var s={};for(var a in n)Rc.call(n,a)&&e.indexOf(a)<0&&(s[a]=n[a]);if(n!=null&&Za)for(var a of Za(n))e.indexOf(a)<0&&Oc.call(n,a)&&(s[a]=n[a]);return s};function e1(n,e,s={}){const a=s,{eventFilter:t}=a,l=n1(a,["eventFilter"]),{eventFilter:o,pause:c,resume:p,isActive:d}=qh(t);return{stop:Wh(n,e,Zh(Xh({},l),{eventFilter:o})),pause:c,resume:p,isActive:d}}function Oe(n){var e;const s=xe(n);return(e=s==null?void 0:s.$el)!=null?e:s}const Ce=ka?window:void 0,s1=ka?window.document:void 0,a1=ka?window.navigator:void 0;function Fn(...n){let e,s,a,t;if(typeof n[0]=="string"||Array.isArray(n[0])?([s,a,t]=n,e=Ce):[e,s,a,t]=n,!e)return Xa;Array.isArray(s)||(s=[s]),Array.isArray(a)||(a=[a]);const l=[],o=()=>{l.forEach(u=>u()),l.length=0},c=(u,m,h,b)=>(u.addEventListener(m,h,b),()=>u.removeEventListener(m,h,b)),p=on(()=>[Oe(e),xe(t)],([u,m])=>{o(),u&&l.push(...s.flatMap(h=>a.map(b=>c(u,h,b,m))))},{immediate:!0,flush:"post"}),d=()=>{p(),o()};return os(d),d}function t1(){const n=Y(!1);return $s()&&yn(()=>{n.value=!0}),n}function fa(n){const e=t1();return x(()=>(e.value,!!n()))}function Bc(n,e={}){const{window:s=Ce}=e,a=fa(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let t;const l=Y(!1),o=()=>{t&&("removeEventListener"in t?t.removeEventListener("change",c):t.removeListener(c))},c=()=>{a.value&&(o(),t=s.matchMedia(Dc(n).value),l.value=!!(t!=null&&t.matches),t&&("addEventListener"in t?t.addEventListener("change",c):t.addListener(c)))};return cr(c),os(()=>o()),l}function i1(n={}){const{navigator:e=a1,read:s=!1,source:a,copiedDuring:t=1500,legacy:l=!1}=n,o=["copy","cut"],c=fa(()=>e&&"clipboard"in e),p=x(()=>c.value||l),d=Y(""),u=Y(!1),m=Hh(()=>u.value=!1,t);function h(){c.value?e.clipboard.readText().then(w=>{d.value=w}):d.value=A()}if(p.value&&s)for(const w of o)Fn(w,h);async function b(w=xe(a)){p.value&&w!=null&&(c.value?await e.clipboard.writeText(w):g(w),d.value=w,u.value=!0,m.start())}function g(w){const k=document.createElement("textarea");k.value=w??"",k.style.position="absolute",k.style.opacity="0",document.body.appendChild(k),k.select(),document.execCommand("copy"),k.remove()}function A(){var w,k,E;return(E=(k=(w=document==null?void 0:document.getSelection)==null?void 0:w.call(document))==null?void 0:k.toString())!=null?E:""}return{isSupported:p,text:d,copied:u,copy:b}}const Ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Sa="__vueuse_ssr_handlers__",l1=o1();function o1(){return Sa in Ca||(Ca[Sa]=Ca[Sa]||{}),Ca[Sa]}function r1(n,e){return l1[n]||e}function c1(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var p1=Object.defineProperty,_o=Object.getOwnPropertySymbols,d1=Object.prototype.hasOwnProperty,u1=Object.prototype.propertyIsEnumerable,ko=(n,e,s)=>e in n?p1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,fo=(n,e)=>{for(var s in e||(e={}))d1.call(e,s)&&ko(n,s,e[s]);if(_o)for(var s of _o(e))u1.call(e,s)&&ko(n,s,e[s]);return n};const v1={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},go="vueuse-storage";function Vc(n,e,s,a={}){var t;const{flush:l="pre",deep:o=!0,listenToStorageChanges:c=!0,writeDefaults:p=!0,mergeDefaults:d=!1,shallow:u,window:m=Ce,eventFilter:h,onError:b=T=>{console.error(T)}}=a,g=(u?le:Y)(e);if(!s)try{s=r1("getDefaultStorage",()=>{var T;return(T=Ce)==null?void 0:T.localStorage})()}catch(T){b(T)}if(!s)return g;const A=xe(e),w=c1(A),k=(t=a.serializer)!=null?t:v1[w],{pause:E,resume:R}=e1(g,()=>B(g.value),{flush:l,deep:o,eventFilter:h});return m&&c&&(Fn(m,"storage",W),Fn(m,go,V)),W(),g;function B(T){try{if(T==null)s.removeItem(n);else{const N=k.write(T),q=s.getItem(n);q!==N&&(s.setItem(n,N),m&&m.dispatchEvent(new CustomEvent(go,{detail:{key:n,oldValue:q,newValue:N,storageArea:s}})))}}catch(N){b(N)}}function H(T){const N=T?T.newValue:s.getItem(n);if(N==null)return p&&A!==null&&s.setItem(n,k.write(A)),A;if(!T&&d){const q=k.read(N);return typeof d=="function"?d(q,A):w==="object"&&!Array.isArray(q)?fo(fo({},A),q):q}else return typeof N!="string"?N:k.read(N)}function V(T){W(T.detail)}function W(T){if(!(T&&T.storageArea!==s)){if(T&&T.key==null){g.value=A;return}if(!(T&&T.key!==n)){E();try{g.value=H(T)}catch(N){b(N)}finally{T?Ss(R):R()}}}}}function m1(n){return Bc("(prefers-color-scheme: dark)",n)}var Eo=Object.getOwnPropertySymbols,h1=Object.prototype.hasOwnProperty,b1=Object.prototype.propertyIsEnumerable,_1=(n,e)=>{var s={};for(var a in n)h1.call(n,a)&&e.indexOf(a)<0&&(s[a]=n[a]);if(n!=null&&Eo)for(var a of Eo(n))e.indexOf(a)<0&&b1.call(n,a)&&(s[a]=n[a]);return s};function k1(n,e,s={}){const a=s,{window:t=Ce}=a,l=_1(a,["window"]);let o;const c=fa(()=>t&&"MutationObserver"in t),p=()=>{o&&(o.disconnect(),o=void 0)},d=on(()=>Oe(n),m=>{p(),c.value&&t&&m&&(o=new MutationObserver(e),o.observe(m,l))},{immediate:!0}),u=()=>{p(),d()};return os(u),{isSupported:c,stop:u}}var yo=Object.getOwnPropertySymbols,f1=Object.prototype.hasOwnProperty,g1=Object.prototype.propertyIsEnumerable,E1=(n,e)=>{var s={};for(var a in n)f1.call(n,a)&&e.indexOf(a)<0&&(s[a]=n[a]);if(n!=null&&yo)for(var a of yo(n))e.indexOf(a)<0&&g1.call(n,a)&&(s[a]=n[a]);return s};function y1(n,e,s={}){const a=s,{window:t=Ce}=a,l=E1(a,["window"]);let o;const c=fa(()=>t&&"ResizeObserver"in t),p=()=>{o&&(o.disconnect(),o=void 0)},d=x(()=>Array.isArray(n)?n.map(h=>Oe(h)):[Oe(n)]),u=on(d,h=>{if(p(),c.value&&t){o=new ResizeObserver(e);for(const b of h)b&&o.observe(b,l)}},{immediate:!0,flush:"post",deep:!0}),m=()=>{p(),u()};return os(m),{isSupported:c,stop:m}}function x1(n,e={width:0,height:0},s={}){const{window:a=Ce,box:t="content-box"}=s,l=x(()=>{var p,d;return(d=(p=Oe(n))==null?void 0:p.namespaceURI)==null?void 0:d.includes("svg")}),o=Y(e.width),c=Y(e.height);return y1(n,([p])=>{const d=t==="border-box"?p.borderBoxSize:t==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(a&&l.value){const u=Oe(n);if(u){const m=a.getComputedStyle(u);o.value=parseFloat(m.width),c.value=parseFloat(m.height)}}else if(d){const u=Array.isArray(d)?d:[d];o.value=u.reduce((m,{inlineSize:h})=>m+h,0),c.value=u.reduce((m,{blockSize:h})=>m+h,0)}else o.value=p.contentRect.width,c.value=p.contentRect.height},s),on(()=>Oe(n),p=>{o.value=p?e.width:0,c.value=p?e.height:0}),{width:o,height:c}}const xo=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Ui(n,e={}){const{document:s=s1,autoExit:a=!1}=e,t=x(()=>{var k;return(k=Oe(n))!=null?k:s==null?void 0:s.querySelector("html")}),l=Y(!1),o=x(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(k=>s&&k in s||t.value&&k in t.value)),c=x(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(k=>s&&k in s||t.value&&k in t.value)),p=x(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(k=>s&&k in s||t.value&&k in t.value)),d=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(k=>s&&k in s),u=fa(()=>t.value&&s&&o.value!==void 0&&c.value!==void 0&&p.value!==void 0),m=()=>d?(s==null?void 0:s[d])===t.value:!1,h=()=>{if(p.value){if(s&&s[p.value]!=null)return s[p.value];{const k=t.value;if((k==null?void 0:k[p.value])!=null)return!!k[p.value]}}return!1};async function b(){if(u.value){if(c.value)if((s==null?void 0:s[c.value])!=null)await s[c.value]();else{const k=t.value;(k==null?void 0:k[c.value])!=null&&await k[c.value]()}l.value=!1}}async function g(){if(!u.value)return;h()&&await b();const k=t.value;o.value&&(k==null?void 0:k[o.value])!=null&&(await k[o.value](),l.value=!0)}async function A(){await(l.value?b():g())}const w=()=>{const k=h();(!k||k&&m())&&(l.value=k)};return Fn(s,xo,w,!1),Fn(()=>Oe(t),xo,w,!1),a&&os(b),{isSupported:u,isFullscreen:l,enter:g,exit:b,toggle:A}}function Cc(n){const e=window.getComputedStyle(n);if(e.overflowX==="scroll"||e.overflowY==="scroll"||e.overflowX==="auto"&&n.clientHeight<n.scrollHeight||e.overflowY==="auto"&&n.clientWidth<n.scrollWidth)return!0;{const s=n.parentNode;return!s||s.tagName==="BODY"?!1:Cc(s)}}function A1(n){const e=n||window.event,s=e.target;return Cc(s)?!1:e.touches.length>1?!0:(e.preventDefault&&e.preventDefault(),!1)}function Sc(n,e=!1){const s=Y(e);let a=null,t;on(Dc(n),c=>{if(c){const p=c;t=p.style.overflow,s.value&&(p.style.overflow="hidden")}},{immediate:!0});const l=()=>{const c=xe(n);!c||s.value||(vo&&(a=Fn(c,"touchmove",p=>{A1(p)},{passive:!1})),c.style.overflow="hidden",s.value=!0)},o=()=>{const c=xe(n);!c||!s.value||(vo&&(a==null||a()),c.style.overflow=t,s.value=!1)};return os(o),x({get(){return s.value},set(c){c?l():o()}})}function w1({window:n=Ce}={}){if(!n)return{x:Y(0),y:Y(0)};const e=Y(n.scrollX),s=Y(n.scrollY);return Fn(n,"scroll",()=>{e.value=n.scrollX,s.value=n.scrollY},{capture:!1,passive:!0}),{x:e,y:s}}function P1(n={}){const{window:e=Ce,initialWidth:s=1/0,initialHeight:a=1/0,listenOrientation:t=!0,includeScrollbar:l=!0}=n,o=Y(s),c=Y(a),p=()=>{e&&(l?(o.value=e.innerWidth,c.value=e.innerHeight):(o.value=e.document.documentElement.clientWidth,c.value=e.document.documentElement.clientHeight))};if(p(),Nh(p),Fn("resize",p,{passive:!0}),t){const d=Bc("(orientation: portrait)");on(d,()=>p())}return{width:o,height:c}}const $c=()=>r(hn,{name:"back-to-top"},()=>[r("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),r("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);$c.displayName="BackToTopIcon";var L1=S({name:"BackToTop",props:{threshold:{type:Number,default:100},noProgress:Boolean},setup(n){const e=xn(),s=Ms({"/":{backToTop:"返回顶部"}}),a=le(),{height:t}=x1(a),{height:l}=P1(),{y:o}=w1(),c=x(()=>e.value.backToTop!==!1&&o.value>n.threshold),p=x(()=>o.value/(t.value-l.value));return yn(()=>{a.value=document.body}),()=>r(Qe,{name:"fade"},()=>c.value?r("button",{type:"button",class:"vp-back-to-top-button","aria-label":s.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[n.noProgress?null:r("svg",{class:"vp-scroll-progress"},r("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*p.value*100}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}})),r($c)]):null)}});const T1=oe({enhance:({app:n})=>{be("Badge")||n.component("Badge",Lc),be("FontIcon")||n.component("FontIcon",Mh)},setup:()=>{},rootComponents:[()=>r(L1,{})]});function Mc(n,e,s){var a,t,l;e===void 0&&(e=50),s===void 0&&(s={});var o=(a=s.isImmediate)!=null&&a,c=(t=s.callback)!=null&&t,p=s.maxWait,d=Date.now(),u=[];function m(){if(p!==void 0){var b=Date.now()-d;if(b+e>=p)return p-b}return e}var h=function(){var b=[].slice.call(arguments),g=this;return new Promise(function(A,w){var k=o&&l===void 0;if(l!==void 0&&clearTimeout(l),l=setTimeout(function(){if(l=void 0,d=Date.now(),!o){var R=n.apply(g,b);c&&c(R),u.forEach(function(B){return(0,B.resolve)(R)}),u=[]}},m()),k){var E=n.apply(g,b);return c&&c(E),A(E)}u.push({resolve:A,reject:w})})};return h.cancel=function(b){l!==void 0&&clearTimeout(l),u.forEach(function(g){return(0,g.reject)(b)}),u=[]},h}const I1=({headerLinkSelector:n,headerAnchorSelector:e,delay:s,offset:a=5})=>{const t=jn(),o=Mc(()=>{var A,w;const c=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(c-0)<a){Ao(t,"");return}const d=window.innerHeight+c,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),m=Math.abs(u-d)<a,h=Array.from(document.querySelectorAll(n)),g=Array.from(document.querySelectorAll(e)).filter(k=>h.some(E=>E.hash===k.hash));for(let k=0;k<g.length;k++){const E=g[k],R=g[k+1],B=c>=(((A=E.parentElement)==null?void 0:A.offsetTop)??0)-a,H=!R||c<(((w=R.parentElement)==null?void 0:w.offsetTop)??0)-a;if(!(B&&H))continue;const W=decodeURIComponent(t.currentRoute.value.hash),T=decodeURIComponent(E.hash);if(W===T)return;if(m){for(let N=k+1;N<g.length;N++)if(W===decodeURIComponent(g[N].hash))return}Ao(t,T);return}},s);yn(()=>{window.addEventListener("scroll",o)}),Di(()=>{window.removeEventListener("scroll",o)})},Ao=async(n,e)=>{const{scrollBehavior:s}=n.options;n.options.scrollBehavior=void 0,await n.replace({query:n.currentRoute.value.query,hash:e,force:!0}).finally(()=>n.options.scrollBehavior=s)},D1=".sidebar-link, .toc-link",R1=".header-anchor",O1=200,B1=5,V1=oe({setup(){I1({headerLinkSelector:D1,headerAnchorSelector:R1,delay:O1,offset:B1})}});let Fc=()=>null;const jc=Symbol(""),C1=n=>{Fc=n},S1=()=>kn(jc),$1=n=>{n.provide(jc,Fc)};var M1=S({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean},setup(n){const e=S1(),s=Ms({"/":{title:"目录",empty:"暂无目录"}}),a=pn(),t=jn(),l=Gr(),o=d=>{const u=d.I;return typeof u>"u"||u},c=()=>{const d=n.base||a.value.path.replace(/\/[^/]+$/,"/"),u=t.getRoutes(),m=[];return u.filter(({meta:h,path:b})=>{if(!ra(b,d)||b===d)return!1;if(d==="/"){const g=ye(l.value.locales).filter(A=>A!=="/");if(b==="/404.html"||g.some(A=>ra(b,A)))return!1}return(ds(b,".html")&&!ds(b,"/index.html")||ds(b,"/"))&&o(h)}).map(({path:h,meta:b})=>{const g=h.substring(d.length).split("/").length;return{title:b.t||"",icon:b.i,base:h.replace(/\/[^/]+\/?$/,"/"),order:b.O||null,level:ds(h,"/")?g-1:g,path:h}}).filter(({title:h,level:b})=>h&&b<=n.level).sort(({title:h,level:b,path:g,order:A},{title:w,level:k,path:E,order:R})=>b-k||(ds(g,"/index.html")?-1:ds(E,"/index.html")?1:A===null?R===null?h.localeCompare(w):R:R===null?A:A>0?R>0?A-R:-1:R<0?A-R:1)).forEach(h=>{var b;const{base:g,level:A}=h;switch(A){case 1:m.push(h);break;case 2:{const w=m.find(k=>k.path===g);w&&(w.children??(w.children=[])).push(h);break}default:{const w=m.find(k=>k.path===g.replace(/\/[^/]+\/$/,"/"));if(w){const k=(b=w.children)==null?void 0:b.find(E=>E.path===g);k&&(k.children??(k.children=[])).push(h)}}}}),m},p=x(()=>c());return()=>r("div",{class:"vp-catalog"},[r("h2",{class:"vp-catalog-main-title"},s.value.title),p.value.length?p.value.map(({children:d=[],icon:u,path:m,title:h},b)=>[r("h3",{id:h,class:["vp-catalog-child-title",{"has-children":d.length}]},[r("a",{href:`#${h}`,class:"header-anchor","aria-hidden":!0},"#"),r($n,{class:"vp-catalog-title",to:m},()=>[n.index?`${b+1}.`:null,u&&e?r(e,{icon:u}):null,h||m])]),d.length?r("ul",{class:"vp-catalog-child-catalogs"},d.map(({children:g=[],icon:A,path:w,title:k},E)=>r("li",{class:"vp-child-catalog"},[r("div",{class:["vp-catalog-sub-title",{"has-children":g.length}]},[r("a",{href:`#${k}`,class:"header-anchor"},"#"),r($n,{class:"vp-catalog-title",to:w},()=>[n.index?`${b+1}.${E+1}`:null,A&&e?r(e,{icon:A}):null,k||w])]),g.length?r("div",{class:"v-sub-catalogs"},g.map(({icon:R,path:B,title:H},V)=>r($n,{class:"vp-sub-catalog",to:B},()=>[n.index?`${b+1}.${E+1}.${V+1}`:null,R&&e?r(e,{icon:R}):null,H||B]))):null]))):null]):r("p",{class:"vp-empty-catalog"},s.value.empty)])}}),F1=oe({enhance:({app:n})=>{$1(n),be("AutoCatalog",n)||n.component("AutoCatalog",M1)}});const j1=r("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[r("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),qc=S({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(n){const e=Ae(),s=x(()=>n.locales[e.value]??{openInNewWindow:"open in new window"});return()=>r("span",[j1,r("span",{class:"external-link-icon-sr-only"},s.value.openInNewWindow)])}}),q1={},z1=oe({enhance({app:n}){n.component("ExternalLinkIcon",r(qc,{locales:q1}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const un={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:n=>{const e=un.isStarted();n=Bt(n,un.settings.minimum,1),un.status=n===1?null:n;const s=un.render(!e),a=s.querySelector(un.settings.barSelector),t=un.settings.speed,l=un.settings.easing;return s.offsetWidth,N1(o=>{$a(a,{transform:"translate3d("+wo(n)+"%,0,0)",transition:"all "+t+"ms "+l}),n===1?($a(s,{transition:"none",opacity:"1"}),s.offsetWidth,setTimeout(function(){$a(s,{transition:"all "+t+"ms linear",opacity:"0"}),setTimeout(function(){un.remove(),o()},t)},t)):setTimeout(()=>o(),t)}),un},isStarted:()=>typeof un.status=="number",start:()=>{un.status||un.set(0);const n=()=>{setTimeout(()=>{un.status&&(un.trickle(),n())},un.settings.trickleSpeed)};return un.settings.trickle&&n(),un},done:n=>!n&&!un.status?un:un.inc(.3+.5*Math.random()).set(1),inc:n=>{let e=un.status;return e?(typeof n!="number"&&(n=(1-e)*Bt(Math.random()*e,.1,.95)),e=Bt(e+n,0,.994),un.set(e)):un.start()},trickle:()=>un.inc(Math.random()*un.settings.trickleRate),render:n=>{if(un.isRendered())return document.getElementById("nprogress");Po(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=un.settings.template;const s=e.querySelector(un.settings.barSelector),a=n?"-100":wo(un.status||0),t=document.querySelector(un.settings.parent);return $a(s,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),t!==document.body&&Po(t,"nprogress-custom-parent"),t==null||t.appendChild(e),e},remove:()=>{Lo(document.documentElement,"nprogress-busy"),Lo(document.querySelector(un.settings.parent),"nprogress-custom-parent");const n=document.getElementById("nprogress");n&&H1(n)},isRendered:()=>!!document.getElementById("nprogress")},Bt=(n,e,s)=>n<e?e:n>s?s:n,wo=n=>(-1+n)*100,N1=function(){const n=[];function e(){const s=n.shift();s&&s(e)}return function(s){n.push(s),n.length===1&&e()}}(),$a=function(){const n=["Webkit","O","Moz","ms"],e={};function s(o){return o.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(c,p){return p.toUpperCase()})}function a(o){const c=document.body.style;if(o in c)return o;let p=n.length;const d=o.charAt(0).toUpperCase()+o.slice(1);let u;for(;p--;)if(u=n[p]+d,u in c)return u;return o}function t(o){return o=s(o),e[o]??(e[o]=a(o))}function l(o,c,p){c=t(c),o.style[c]=p}return function(o,c){for(const p in c){const d=c[p];d!==void 0&&Object.prototype.hasOwnProperty.call(c,p)&&l(o,p,d)}}}(),zc=(n,e)=>(typeof n=="string"?n:Gi(n)).indexOf(" "+e+" ")>=0,Po=(n,e)=>{const s=Gi(n),a=s+e;zc(s,e)||(n.className=a.substring(1))},Lo=(n,e)=>{const s=Gi(n);if(!zc(n,e))return;const a=s.replace(" "+e+" "," ");n.className=a.substring(1,a.length-1)},Gi=n=>(" "+(n.className||"")+" ").replace(/\s+/gi," "),H1=n=>{n&&n.parentNode&&n.parentNode.removeChild(n)};const U1=()=>{yn(()=>{const n=jn(),e=new Set;e.add(n.currentRoute.value.path),n.beforeEach(s=>{e.has(s.path)||un.start()}),n.afterEach(s=>{e.add(s.path),un.done()})})},G1=oe({setup(){U1()}}),K1=JSON.parse('{"encrypt":{},"author":{"name":"Clay","url":"https://clay-wangzhi.com"},"logo":"/lufei.jpg","repo":"https://github.com/clay-wangzhi/wiki","docsDir":"src","docsBranch":"master","darkmode":"switch","footer":"<a href=\\"http://beian.miit.gov.cn/\\" target=\\"_blank\\">备案号:冀ICP备2021007336号</a>","displayFooter":true,"pageInfo":["Author","Original","Date","Category","Tag","ReadingTime"],"blog":{"intro":"/intro/","sidebarDisplay":"mobile","medias":{"Wechat":"https://clay-wangzhi.com/wechat.jpg","Email":"mailto:clay_wangzhi@163.com"}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":[{"text":"云原生","icon":"yunyuanshengpingtai","children":[{"text":"Kubernetes","icon":"kubernetes","link":"/cloudnative/kubernetes/"},{"text":"Docker","icon":"docker","link":"/cloudnative/docker/"},{"text":"etcd","icon":"icon_etcd","link":"/cloudnative/etcd/"}]},{"text":"基础知识","icon":"jichu","children":[{"text":"操作系统","icon":"caozuoxitong","link":"/basic/system/"},{"text":"计算机网络","icon":"wangluo","link":"/basic/network/"},{"text":"Linux运维","icon":"linux","link":"/basic/linux/"}]},{"text":"编程语言","icon":"code","children":[{"text":"Shell","icon":"shell","link":"/code/shell/"},{"text":"Python","icon":"python","link":"/code/python/"},{"text":"Golang","icon":"golang","link":"/code/golang/"},{"text":"前端开发","icon":"vue","link":"/code/frontend/"}]},{"text":"可观测性","icon":"jiankong","children":[{"text":"Prometheus","icon":"prometheus","link":"/monitor/prometheus/"},{"text":"Grafana","icon":"grafana","link":"/monitor/grafana/"},{"text":"ELK","icon":"elastic","link":"/monitor/elk/"},{"text":"Zabbix","icon":"zabbix1","link":"/monitor/zabbix/"}]},{"text":"devops","icon":"devops","link":"/devops/"},{"text":"负载均衡","icon":"webkuangjia","children":[{"text":"Nginx","icon":"nginx","link":"/web/nginx/"},{"text":"Tomcat","icon":"tomcat","link":"/web/tomcat/"}]},{"text":"数据库","icon":"shujuku","children":[{"text":"MySQL","icon":"mysql","link":"/db/mysql/"},{"text":"Redis","icon":"redis","link":"/db/redis/"}]}],"sidebar":{"/linux/basic/":[{"text":"Linux 学习笔记","icon":"linux","link":"","collapsible":true,"children":[{"text":"文件管理","collapsible":true,"children":["file/file-type","file/file-detail","file/zsgc","file/cat","file/zip"]},"ugo","crontab","user","process","i-o","rpm","inter","logrotate","limit","common-kno"]}],"/basic/":[{"text":"操作系统学习笔记","icon":"caozuoxitong","prefix":"system","link":"","collapsible":true,"children":["ssh-key"]},{"text":"计算机网络学习笔记","icon":"wangluo","prefix":"network","link":"","collapsible":true,"children":["tcp-three-four.md","kernel-para-opt"]}],"/web/":[{"text":"Nginx","icon":"nginx","prefix":"nginx","link":"","collapsible":true,"children":["","first","framework",{"text":"3. nginx配置文件详解","link":"config/","collapsible":true,"children":["global-events","http","server","location","module"]},"core","status","qa"]},{"text":"Tomcat","icon":"tomcat","prefix":"tomcat","link":"","collapsible":true,"children":["","prd","dead","cache","danger","status"]}],"/code/":[{"text":"高级 Bash 脚本编程指南","icon":"shell","prefix":"shell","link":"","collapsible":true,"children":[{"text":"第一部分 初见shell","collapsible":true,"children":["part1/01_shell_programming",{"text":"第二章 和Sha-Bang（#!）一起出发","link":"part1/02_starting_off_with_a_sha_bang","collapsible":true,"children":["part1/02_1_invoking_the_script","part1/02_2_preliminary_exercises"]}]},{"text":"第二部分 shell基础","link":"part2/","collapsible":true,"children":["part2/03_special_characters",{"text":"第四章 变量与参数","link":"part2/04_introduction_to_variables_and_parameters","collapsible":true,"children":["part2/04_1_variable_substitution","part2/04_2_variable_assignment","part2/04_3_bash_variables_are_untyped","part2/04_4_special_variable_types"]},{"text":"第五章 引用","link":"part2/05_quoting","collapsible":true,"children":["part2/05_1_quoting_variables","part2/05_2_escaping"]},"part2/06_exit_and_exit_status",{"text":"第七章 测试","link":"part2/07_tests","collapsible":true,"children":["part2/07_1_test_constructs","part2/07_2_file_test_operators","part2/07_3_other_comparison_operators","part2/07_4_nested_if_then_condition_tests","part2/07_5_testing_your_knowledge_of_tests"]},{"text":"第八章 运算符相关话题","link":"part2/08_operations_and_related_topics","collapsible":true,"children":["part2/08_1_operators","part2/08_2_numerical_constants","part2/08_3_the_double_parentheses_construct","part2/08_4_operator_precedence"]}]},{"text":"第三部分 shell进阶","link":"part3/","collapsible":true,"children":[{"text":"第九章 换个角度看变量","link":"part3/09_another_look_at_variables","collapsible":true,"children":["part3/09_1_internal_variables","part3/09_2_typing_variables_declare_or_typeset","part3/09_2_1_another_use_for_declare","part3/09_3_random_generate_random_integer"]},{"text":"第十章 变量处理","link":"part3/10_manipulating_variables","collapsible":true,"children":["part3/10_1_manipulating_strings","part3/10_1_1_manipulating_strings_using_awk","part3/10_1_2_further_reference","part3/10_2_parameter_substitution"]},{"text":"第十一章 循环与分支","link":"part3/11_loops_and_branches","collapsible":true,"children":["part3/11_1_loops","part3/11_2_nested_loops","part3/11_3_loop_control","part3/11_4_testing_and_branching"]},"part3/12_command_substitution","part3/13_arithmetic_expansion"]},"part4-command",{"text":"第五部分 高级话题","link":"part5/","collapsible":true,"children":[{"text":"18 正则表达式","link":"part5/18_regular_expressions","collapsible":true,"children":["part5/18_1_a_brief_introduction_to_regular_expressions","part5/18_2_globbing","part5/18_3_regular_expression_comparison_table"]},"part5/19_here_documents",{"text":"20 I/O 重定向","link":"part5/20_io_redirection","collapsible":true,"children":["part5/20_1_use_exec","part5/20_2_redirecting_code_blocks","part5/20_3_applications"]},"part5/21_subshells","part5/22_Restricted_Shells","part5/23_Process_Substitution",{"text":"24 函数","link":"part5/24_functions","collapsible":true,"children":["part5/24_1_complex_functions_and_function_complexities","part5/24_2_local_variables","part5/24_3_recursion_without_local_variables"]},"part5/25_aliases","part5/26_List_Constructs","part5/27_arrays","part5/30_network_programming","part5/33_options","part5/34_Gotchas","part5/36_miscellany","part5/36_5_colorizing_scripts"]},"part6"]},{"text":"Python 学习笔记","icon":"python","prefix":"python","link":"","collapsible":true,"children":[{"text":"1 Python 简介","collapsible":true,"children":["first","codeSpecification","python-virtualenv","vscode-python","python-pip"]},{"text":"2 Python 基础","collapsible":true,"children":["python-basic-grammar","python-control",{"text":"2.3 Python数据类型","link":"type-of-data","collapsible":true,"children":["num-data","str-data","bytearray-data","list-tuple-data","set-dict-data"]}]},{"text":"3 高级特性","collapsible":true,"children":["python-linear-data-structure","python-analytic-expre","python-generator","python-iterator"]},{"text":"4 函数","collapsible":true,"children":["python-function","function-parameter","action-scope","python-recursive-function"]},{"text":"5 函数式编程","link":"func-prog","collapsible":true,"children":["high-func","python-return-function","lambda","python-decorator","python-partial-function"]},{"text":"6 模块","link":"python-module","collapsible":true,"children":["python-module-install","python-setup"]},{"text":"7 IO编程","collapsible":true,"children":["python-dir-file-pro","python-serialize"]},{"text":"8 异常、调试和测试","collapsible":true,"children":["python-exception"]},{"text":"9 面向对象编程","link":"python-oop","collapsible":true,"children":["python-oo-package","access-control","python-oo-inher-pol"]},{"text":"10 进程和线程","link":"process-thread","collapsible":true,"children":["python-gil-multiprocessing","python-thread","python-thread-sync"]},{"text":"11 网络编程","collapsible":true,"children":["python-socketserver","python-tcp-pg"]},"python-magic.md","python-io-model.md","python-instance"]},{"text":"Go 学习笔记","icon":"golang","prefix":"golang","link":"","collapsible":true,"children":["go-restful-api","go-fmt","go-specification","go-struct","go-install","dir"]},{"text":"前端学习笔记","icon":"vue","link":"frontend/readme.md"}],"/devops/":[{"text":"Jenkins","icon":"jenkins","prefix":"jenkins/","link":"","collapsible":true,"children":["",{"text":"1 Jenkins 简介","collapsible":true,"children":["cicd","first"]},{"text":"2 安装 Jenkins","collapsible":true,"children":["yum-install","war-install","ansible-install","docker-install-jenkins"]},{"text":"3 使用 Jenkins","collapsible":true,"children":["userandpermissions","api"]},{"text":"4 流水线核心语法","collapsible":true,"children":["start-jenkinsfile","pipelinesyntax","groovy-simple-tutorial","jenkins-shared-library","dingding-plugin","pipeline-dev-tools","pipeline-example","validate-jenkinsfile"]},{"text":"5 流水线集成篇","collapsible":true,"children":["build-tools","user-auth"]},{"text":"6 管理 jenkins","collapsible":true,"children":["restart"]},{"text":"7 日常维护","collapsible":true,"children":["migrate-job"]},"qa"]},{"text":"Ansible","icon":"ansible","prefix":"ansible/","collapsible":true,"children":["","first","inventory",{"text":"3 Ansible Ad-hoc命令集","collapsible":true,"children":["ad-hoc","lineinfile"]},{"text":"4 Ansible Playbook","collapsible":true,"link":"playbook","children":["dir-handler","playbook-for","playbook-if","advanced-playbook","playbook-tags","roles","jinja2","yaml"]},{"text":"5 Ansible变量","link":"var","collapsible":true,"children":["custom","fact","magic","lookup","vault"]},"optimize","qa",{"text":"8 综合项目","collapsible":true,"children":["ansible-k8s"]}]}],"/cloudnative/":[{"text":"kubernetes","icon":"kubernetes","prefix":"kubernetes/","link":"","collapsible":true,"children":["",{"text":"集群搭建","collapsible":true,"children":["k8s-install"]},{"text":"常见应用安装配置","collapsible":true,"children":["harbor","docker-harbor-ha","rancher-install","helm"]},{"text":"容器运行时","collapsible":true,"children":["k8s-gpu","kata"]},{"text":"存储","collapsible":true,"children":["longhorn","deploy-ceph-cluster-with-rook"]},{"text":"服务发现与路由","collapsible":true,"children":["ingress-nginx"]},{"text":"集群网络","collapsible":true,"children":["cni","calico"]},{"text":"监控告警","collapsible":true,"children":["kube-prometheus-stack"]},{"text":"实用技巧","collapsible":true,"children":["kubectl-cheatsheet"]},{"text":"运维手册","collapsible":true,"children":["etcd-backup-restore","velero","k8s-audit","kernel-upgrade","cert-update","k8s-allocatable","lxcfs"]},{"text":"最佳实践","collapsible":true,"children":["kube-reserved","sysbench","numa"]},{"text":"集群排障","collapsible":true,"children":["namespace-terminating","delete-rancher-causing-node-disappear","lvs-health-check","apiserver-tls"]},"recommend",{"text":"附录","collapsible":true,"children":["kubectl-cheatsheet"]}]}]}}}}'),W1=Y(K1),Nc=()=>W1,Hc=Symbol(""),J1=()=>{const n=kn(Hc);if(!n)throw new Error("useThemeLocaleData() is called without provider.");return n},Q1=(n,e)=>{const{locales:s,...a}=n;return{...a,...s==null?void 0:s[e]}},Y1=oe({enhance({app:n}){const e=Nc(),s=n._context.provides[Mi],a=x(()=>Q1(e.value,s.value));n.provide(Hc,a),Object.defineProperties(n.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return a.value}}})}});const X1=800,Z1=2e3,n0={"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},e0=!1,s0=['.theme-hope-content div[class*="language-"] pre'],To=!1,Vt=new Map,a0=()=>{const{copy:n}=i1({legacy:!0}),e=Ms(n0),s=pn(),a=$h(),t=c=>{if(!c.hasAttribute("copy-code-registered")){const p=document.createElement("button");p.type="button",p.classList.add("copy-code-button"),p.innerHTML='<div class="copy-icon" />',p.setAttribute("aria-label",e.value.copy),p.setAttribute("data-copied",e.value.copied),c.parentElement&&c.parentElement.insertBefore(p,c),c.setAttribute("copy-code-registered","")}},l=()=>Ss().then(()=>new Promise(c=>{setTimeout(()=>{s0.forEach(p=>{document.querySelectorAll(p).forEach(t)}),c()},X1)})),o=(c,p,d)=>{let{innerText:u=""}=p;/language-(shellscript|shell|bash|sh|zsh)/.test(c.classList.toString())&&(u=u.replace(/^ *(\$|>) /gm,"")),n(u).then(()=>{d.classList.add("copied"),clearTimeout(Vt.get(d));const m=setTimeout(()=>{d.classList.remove("copied"),d.blur(),Vt.delete(d)},Z1);Vt.set(d,m)})};yn(()=>{(!a.value||To)&&l(),Fn("click",c=>{const p=c.target;if(p.matches('div[class*="language-"] > button.copy')){const d=p.parentElement,u=p.nextElementSibling;u&&o(d,u,p)}else if(p.matches('div[class*="language-"] div.copy-icon')){const d=p.parentElement,u=d.parentElement,m=d.nextElementSibling;m&&o(u,m,d)}}),on(()=>s.value.path,()=>{(!a.value||To)&&l()})})};var t0=oe({setup:()=>{a0()}});const i0=()=>{const n=xn(),e=Ms({"/":{author:"著作权归:author所有",license:"基于:license协议",link:"原文链接：:link"}}),s=pn(),a=x(()=>!!n.value.copy||n.value.copy!==!1&&!0),t=x(()=>{const p=n.value.copy;return a.value&&la(p)&&"disableCopy"in p?p.disableCopy:!1}),l=x(()=>{const p=n.value.copy;return a.value&&la(p)&&"disableSelection"in p?p.disableSelection:!1}),o=()=>{const{author:p="",license:d=""}=s.value.copyright,{author:u,license:m,link:h}=e.value;return[p?u.replace(":author",p):"",d?m.replace(":license",d):"",h.replace(":link",window.location.href)].filter(b=>b).join(`
`)},c=p=>{const d=getSelection();if(d){const u=d.getRangeAt(0);if(a.value){if(t.value)return p.preventDefault();if(u.toString().length>=100){p.preventDefault();const m=o(),h=document.createElement("div");h.appendChild(d.getRangeAt(0).cloneContents()),p.clipboardData&&(p.clipboardData.setData("text/html",`${h.innerHTML}<hr><div class="copyright">${m.replace(/\\n/g,"<br>")}</div>`),p.clipboardData.setData("text/plain",`${d.getRangeAt(0).cloneContents().textContent||""}
------
${m}`))}}}};yn(()=>{const p=document.querySelector("#app");Fn(p,"copy",c),cr(()=>{p.style.userSelect=l.value?"none":"auto"})})};var l0=oe({setup:()=>{i0()}});const Ma=Vc("VUEPRESS_CODE_TAB_STORE",{});var o0=S({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(n,{slots:e}){const s=Y(n.active),a=le([]),t=()=>{n.tabId&&(Ma.value[n.tabId]=n.data[s.value].id)},l=(d=s.value)=>{s.value=d<a.value.length-1?d+1:0,a.value[s.value].focus()},o=(d=s.value)=>{s.value=d>0?d-1:a.value.length-1,a.value[s.value].focus()},c=(d,u)=>{d.key===" "||d.key==="Enter"?(d.preventDefault(),s.value=u):d.key==="ArrowRight"?(d.preventDefault(),l()):d.key==="ArrowLeft"&&(d.preventDefault(),o()),n.tabId&&(Ma.value[n.tabId]=n.data[s.value].id)},p=()=>{if(n.tabId){const d=n.data.findIndex(({id:u})=>Ma.value[n.tabId]===u);if(d!==-1)return d}return n.active};return yn(()=>{s.value=p(),on(()=>Ma.value[n.tabId],(d,u)=>{if(n.tabId&&d!==u){const m=n.data.findIndex(({id:h})=>h===d);m!==-1&&(s.value=m)}})}),()=>n.data.length?r("div",{class:"vp-code-tabs"},[r("div",{class:"vp-code-tabs-nav",role:"tablist"},n.data.map(({id:d},u)=>{const m=u===s.value;return r("button",{type:"button",ref:h=>{h&&(a.value[u]=h)},class:["vp-code-tab-nav",{active:m}],role:"tab","aria-controls":`codetab-${n.id}-${u}`,"aria-selected":m,onClick:()=>{s.value=u,t()},onKeydown:h=>c(h,u)},e[`title${u}`]({value:d,isActive:m}))})),n.data.map(({id:d},u)=>{const m=u===s.value;return r("div",{class:["vp-code-tab",{active:m}],id:`codetab-${n.id}-${u}`,role:"tabpanel","aria-expanded":m},e[`tab${u}`]({value:d,isActive:m}))})]):null}});const Uc=({active:n=!1},{slots:e})=>{var s;return r("div",{class:["code-group-item",{active:n}],"aria-selected":n},(s=e.default)==null?void 0:s.call(e))};Uc.displayName="CodeGroupItem";const r0=S({name:"CodeGroup",slots:Object,setup(n,{slots:e}){const s=Y(-1),a=le([]),t=(c=s.value)=>{s.value=c<a.value.length-1?c+1:0,a.value[s.value].focus()},l=(c=s.value)=>{s.value=c>0?c-1:a.value.length-1,a.value[s.value].focus()},o=(c,p)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),s.value=p):c.key==="ArrowRight"?(c.preventDefault(),t(p)):c.key==="ArrowLeft"&&(c.preventDefault(),l(p))};return()=>{var c;const p=(((c=e.default)==null?void 0:c.call(e))||[]).filter(d=>d.type.name==="CodeGroupItem").map(d=>(d.props===null&&(d.props={}),d));return p.length===0?null:(s.value<0||s.value>p.length-1?(s.value=p.findIndex(d=>"active"in d.props),s.value===-1&&(s.value=0)):p.forEach((d,u)=>{d.props.active=u===s.value}),r("div",{class:"code-group"},[r("div",{class:"code-group-nav"},p.map((d,u)=>{const m=u===s.value;return r("button",{type:"button",ref:h=>{h&&(a.value[u]=h)},class:["code-group-nav-tab",{active:m}],"aria-pressed":m,"aria-expanded":m,onClick:()=>{s.value=u},onKeydown:h=>o(h,u)},d.props.title)})),p]))}}});let c0={};const Gc=Symbol(""),p0=()=>kn(Gc),d0=n=>{n.provide(Gc,c0)},us={useMaxWidth:!1},u0=n=>({dark:n,background:n?"#1e1e1e":"#fff",primaryColor:n?"#389d70":"#4abf8a",primaryBorderColor:n?"#389d70":"#4abf8a",primaryTextColor:"#fff",secondaryColor:"#ffb500",secondaryBorderColor:n?"#fff":"#000",secondaryTextColor:n?"#ddd":"#333",tertiaryColor:n?"#282828":"#efeef4",tertiaryBorderColor:n?"#bbb":"#242424",tertiaryTextColor:n?"#ddd":"#333",noteBkgColor:n?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:n?"#f6d365":"#333",lineColor:n?"#d3d3d3":"#333",textColor:n?"#fff":"#242424",mainBkg:n?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:n?"#389d70":"#4abf8a",nodeTextColor:n?"#fff":"#242424",signalTextColor:n?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",fillType0:n?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var v0=S({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0}},setup(n){const{themeVariables:e,...s}=p0(),a=le(),t=x(()=>Bh(n.code)),l=Y(""),o=Y(!1),c=async()=>{const[{default:u}]=await Promise.all([i(()=>import("./mermaid.core-771483de.js").then(m=>m.aP),[]),new Promise(m=>setTimeout(m,800))]);u.initialize({theme:"base",themeVariables:{...u0(o.value),...Ih(e)?e(o.value):e},flowchart:us,sequence:us,journey:us,gantt:us,er:us,pie:us,...s,startOnLoad:!1}),l.value=(await u.render(n.id,t.value)).svg},p=()=>{const{body:u}=document,m=document.createElement("div");m.classList.add("mermaid-preview"),m.innerHTML=l.value,u.appendChild(m),m.addEventListener("click",()=>{u.removeChild(m)})},d=()=>{const u=`data:image/svg+xml;charset=utf8,${l.value.replace(/%/g,"%25").replace(/"/g,"%22").replace(/'/g,"%27").replace(/&/g,"%26").replace(/#/g,"%23").replace(/{/g,"%7B").replace(/}/g,"%7D").replace(/</g,"%3C").replace(/>/g,"%3E")}`,m=document.createElement("a");m.setAttribute("href",u),m.setAttribute("download",`${n.id}.svg`),m.click()};return yn(()=>{const u=document.documentElement,m=()=>u.classList.contains("dark")||u.getAttribute("data-theme")==="dark";o.value=m(),c(),k1(u,()=>{o.value=m()},{attributeFilter:["class","data-theme"],attributes:!0}),on(o,()=>c())}),()=>[r("div",{class:"mermaid-actions"},[r("button",{class:"preview-button",onClick:()=>p(),title:"preview",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>'}),r("button",{class:"download-button",onClick:()=>d(),title:"download",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>'})]),r("div",{ref:a,class:"mermaid-wrapper"},l.value?r("div",{class:"mermaid-content",innerHTML:l.value}):r(uc,{class:"mermaid-loading",height:96}))]}});const m0=oe({enhance:({app:n})=>{n.component("CodeTabs",o0),be("CodeGroup",n)||n.component("CodeGroup",r0),be("CodeGroupItem",n)||n.component("CodeGroupItem",Uc),d0(n),n.component("Mermaid",v0)},setup:()=>{}});let h0={};const Kc=Symbol(""),b0=()=>kn(Kc),_0=n=>{n.provide(Kc,h0)};const k0=".theme-hope-content :not(a) > img:not([no-view])",f0={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},g0=800,E0='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',y0=n=>mn(n)?Array.from(document.querySelectorAll(n)):n.map(e=>Array.from(document.querySelectorAll(e))).flat(),Wc=n=>new Promise((e,s)=>{n.complete?e({type:"image",element:n,src:n.src,width:n.naturalWidth,height:n.naturalHeight,alt:n.alt,msrc:n.src}):(n.onload=()=>e(Wc(n)),n.onerror=a=>s(a))}),x0=()=>{const{isSupported:n,toggle:e}=Ui(),s=b0(),a=Ms(f0),t=pn();let l;const o=p=>{p.on("uiRegister",()=>{n&&p.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{e()}}),p.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(d,u)=>{d.setAttribute("download",""),d.setAttribute("target","_blank"),d.setAttribute("rel","noopener"),u.on("change",()=>{d.setAttribute("href",u.currSlide.data.src)})}}),p.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(d,u)=>{const m=[];let h=-1;for(let b=0;b<u.getNumItems();b++){const g=document.createElement("div");g.className="photo-swipe-bullet",g.onclick=A=>{u.goTo(m.indexOf(A.target))},m.push(g),d.appendChild(g)}u.on("change",()=>{h>=0&&m[h].classList.remove("active"),m[u.currIndex].classList.add("active"),h=u.currIndex})}})})},c=()=>Promise.all([i(()=>import("./photoswipe.esm-2450701e.js"),[]),Ss().then(()=>new Promise(p=>setTimeout(p,g0)).then(()=>y0(k0)))]).then(([{default:p},d])=>{const u=d.map(m=>({html:E0,element:m,msrc:m.src}));d.forEach((m,h)=>{const b=()=>{l=new p({preloaderDelay:0,showHideAnimationType:"zoom",...a.value,...s,dataSource:u,index:h,closeOnVerticalDrag:!0,wheelToZoom:!1}),o(l),l.addFilter("thumbEl",()=>m),l.addFilter("placeholderSrc",()=>m.src),l.init()};m.style.cursor="zoom-in",m.addEventListener("click",()=>{b()}),m.addEventListener("keypress",({key:g})=>{g==="Enter"&&b()})}),d.forEach((m,h)=>{Wc(m).then(b=>{u.splice(h,1,b),l==null||l.refreshSlideContent(h)})})});yn(()=>{Fn("wheel",()=>{l==null||l.close()}),c(),on(()=>t.value.path,()=>c())})};var A0=oe({enhance:({app:n})=>{_0(n)},setup:()=>{x0()}});const Jc=()=>{const n=pn();return x(()=>n.value.readingTime??null)},si=typeof{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}}>"u"?null:{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}},Qc=(n,e)=>{const{minutes:s,words:a}=n,{less1Minute:t,word:l,time:o}=e;return{time:s<1?t:o.replace("$time",Math.round(s).toString()),words:l.replace("$word",a.toString())}},Io={words:"",time:""},Yc=()=>si?Ms(si):x(()=>null),w0=()=>{if(typeof si>"u")return x(()=>Io);const n=Jc(),e=Yc();return x(()=>n.value&&e.value?Qc(n.value,e.value):Io)},rs=()=>Nc(),rn=()=>J1(),Fs=()=>x(()=>!!rs().value.pure);var Ct=S({name:"EmptyComponent",setup:()=>()=>null});const P0="719px",L0="1440px",T0="false",Ki={mobileBreakPoint:P0,pcBreakPoint:L0,enableThemeColor:T0},Wi={},Xc=n=>{const{icon:e="",color:s,size:a}=n,t={};return s&&(t.color=s),a&&(t.height=Number.isNaN(Number(a))?a:`${a}px`),ls(e)?r("img",{class:"icon",src:e,"no-view":"",style:t}):vt(e)?r("img",{class:"icon",src:In(e),"no-view":"",style:t}):r(Yn("FontIcon"),n)};Xc.displayName="HopeIcon";var Nn=Xc,En=(n=>(n.type="y",n.title="t",n.shortTitle="s",n.icon="i",n.author="a",n.date="d",n.localizedDate="l",n.category="c",n.tag="g",n.isEncrypted="n",n.isOriginal="o",n.readingTime="r",n.excerpt="e",n.sticky="u",n.cover="v",n.index="I",n.order="O",n))(En||{}),Zc=(n=>(n.article="a",n.home="h",n.slide="s",n.page="p",n))(Zc||{});const Es=(n,e,s=!1)=>{const{fullPath:a,meta:t,name:l}=_a(n,bc(encodeURI(e)));return{text:!s&&t[En.shortTitle]?t[En.shortTitle]:t[En.title]||e,link:l==="404"?e:a,...t[En.icon]?{icon:t[En.icon]}:{}}},ga=()=>{const n=jn(),e=we();return s=>{if(s)if(vt(s))e.path!==s&&n.push(s);else if(ls(s)||Mr(s))window&&window.open(s);else{const a=e.path.slice(0,e.path.lastIndexOf("/"));n.push(`${a}/${encodeURI(s)}`)}}},np=()=>{const n=rn(),e=xn();return x(()=>{const{author:s}=e.value;return s?ca(s):s===!1?[]:ca(n.value.author,!1)})},I0=()=>{const n=xn();return x(()=>kc(n.value.category).map(e=>{var s,a;return{name:e,path:((a=(s=kn(Symbol.for("categoryMap")))==null?void 0:s.value.map[e])==null?void 0:a.path)||""}}))},D0=()=>{const n=xn();return x(()=>fc(n.value.tag).map(e=>{var s,a;return{name:e,path:((a=(s=kn(Symbol.for("tagMap")))==null?void 0:s.value.map[e])==null?void 0:a.path)||""}}))},R0=()=>{const n=xn(),e=pn();return x(()=>{const s=zi(n.value.date);if(s)return s;const{createdTime:a}=e.value.git||{};return a?new Date(a):null})},O0=()=>{const n=rn(),e=pn(),s=xn(),a=np(),t=I0(),l=D0(),o=R0(),c=Jc(),p=w0(),d=x(()=>({author:a.value,category:t.value,date:o.value,localizedDate:e.value.localizedDate,tag:l.value,isOriginal:s.value.isOriginal||!1,readingTime:c.value,readingTimeLocale:p.value,pageview:"pageview"in s.value?s.value.pageview:!0})),u=x(()=>"pageInfo"in s.value?s.value.pageInfo:"pageInfo"in n.value?n.value.pageInfo:null);return{info:d,items:u}},{mobileBreakPoint:B0,pcBreakPoint:V0}=Ki,Do=n=>n.endsWith("px")?Number(n.slice(0,-2)):null,Ea=()=>{const n=Y(!1),e=Y(!1),s=()=>{n.value=window.innerWidth<=(Do(B0)??719),e.value=window.innerWidth>=(Do(V0)??1440)};return yn(()=>{s(),Fn("resize",s,!1),Fn("orientationchange",s,!1)}),{isMobile:n,isPC:e}},ep=Symbol(""),ya=()=>{const n=kn(ep);if(!n)throw new Error("useDarkmode() is called without provider.");return n},C0=n=>{const e=rs(),s=m1(),a=Vc("vuepress-theme-hope-scheme","auto"),t=x(()=>e.value.darkmode||"switch"),l=x(()=>{const c=t.value;return c==="disable"?!1:c==="enable"?!0:c==="auto"?s.value:c==="toggle"?a.value==="dark":a.value==="dark"||a.value==="auto"&&s.value}),o=x(()=>{const c=t.value;return c==="switch"||c==="toggle"});n.provide(ep,{canToggle:o,config:t,isDarkmode:l,status:a}),Object.defineProperties(n.config.globalProperties,{$isDarkmode:{get:()=>l.value}})},S0=()=>{const{isDarkmode:n}=ya(),e=(s=n.value)=>document.documentElement.setAttribute("data-theme",s?"dark":"light");yn(()=>{on(n,e,{immediate:!0})})};var Gn=S({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(n,{attrs:e,emit:s,slots:a}){const t=we(),l=Gr(),o=Cs(n,"config"),c=x(()=>ls(o.value.link)),p=x(()=>Mr(o.value.link)||Gv(o.value.link)),d=x(()=>p.value?void 0:o.value.target||(c.value?"_blank":void 0)),u=x(()=>d.value==="_blank"),m=x(()=>!c.value&&!p.value&&!u.value),h=x(()=>p.value?void 0:o.value.rel||(u.value?"noopener noreferrer":void 0)),b=x(()=>o.value.ariaLabel||o.value.text),g=x(()=>{if(n.exact)return!1;const w=ye(l.value.locales);return w.length?w.every(k=>k!==o.value.link):o.value.link!=="/"}),A=x(()=>m.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(t.path):g.value?ra(t.path,o.value.link):t.path===o.value.link:!1);return()=>{const{before:w,after:k,default:E}=a,{text:R,icon:B,link:H}=o.value;return m.value?r($n,{to:H,"aria-label":b.value,...e,class:["nav-link",{active:A.value},e.class],onFocusout:()=>s("focusout")},()=>E?E():[w?w():r(Nn,{icon:B}),R,k==null?void 0:k()]):r("a",{href:H,rel:h.value,target:d.value,"aria-label":b.value,...e,class:["nav-link",e.class],onFocusout:()=>s("focusout")},E?E():[w?w():r(Nn,{icon:B}),R,n.noExternalLinkIcon?null:r(qc),k==null?void 0:k()])}}});const Is=(n,e,s=!1)=>"activeMatch"in e?new RegExp(e.activeMatch).test(n.path):Hi(n,e.link)?!0:e.children&&!s?e.children.some(a=>Is(n,a)):!1,sp=(n,e)=>e.type==="group"?e.children.some(s=>s.type==="group"?sp(n,s):s.type==="page"&&Is(n,s,!0))||"prefix"in e&&Hi(n,e.prefix):!1,ap=(n,e)=>mn(n.link)?r(Gn,{...e,config:n}):r("p",e,[r(Nn,{icon:n.icon}),n.text]),tp=n=>{const e=we();return n?r("ul",{class:"vp-sidebar-sub-headers"},n.map(s=>{const a=Is(e,s,!0);return r("li",{class:"vp-sidebar-sub-header"},[ap(s,{class:["vp-sidebar-link","vp-heading",{active:a}]}),tp(s.children)])})):null},St=(n="",e="")=>vt(e)?e:`${Nv(n)}${e}`,$0=(n,e)=>{const s=pn();return{type:"heading",text:n.title,link:`${s.value.path}#${n.slug}`,children:Ji(n.children,e)}},Ji=(n,e)=>e>0?n.map(s=>$0(s,e-1)):[],ip=n=>{const e=pn();return Ji(e.value.headers,n)},ai=(n,e,s="")=>{const a=jn(),t=pn(),l=(o,c=s)=>{var p;const d=mn(o)?Es(a,St(c,o)):o.link?{...o,...Qa(o.link)?{}:{link:Es(a,St(c,o.link)).link}}:o;if("children"in d){const u=St(c,d.prefix),m=d.children==="structure"?Wi[u]:d.children;return{type:"group",...d,prefix:u,children:m.map(h=>l(h,u))}}return{type:"page",...d,children:d.link===t.value.path?Ji(((p=t.value.headers[0])==null?void 0:p.level)===1?t.value.headers[0].children:t.value.headers,e):[]}};return n.map(o=>l(o))},M0=(n,e)=>{const s=pn(),a=ye(n).sort((t,l)=>l.length-t.length);for(const t of a)if(ra(decodeURI(s.value.path),t)){const l=n[t];return l?ai(l==="structure"?Wi[t]:l==="heading"?ip(e):l,e,t):[]}return console.warn(`${s.value.path} is missing sidebar config.`),[]},F0=(n,e)=>{const s=Ae();return n===!1?[]:n==="heading"?ip(e):n==="structure"?ai(Wi[s.value],e,s.value):X(n)?ai(n,e):la(n)?M0(n,e):[]},lp=Symbol(""),j0=()=>{const n=xn(),e=rn(),s=x(()=>n.value.home?!1:n.value.sidebar??e.value.sidebar??"structure"),a=x(()=>n.value.headerDepth??e.value.headerDepth??2),t=x(()=>F0(s.value,a.value));he(lp,t)},Qi=()=>{const n=kn(lp);if(!n)throw new Error("useSidebarItems() is called without provider.");return n};var q0=S({name:"PageFooter",setup(){const n=xn(),e=rn(),s=np(),a=x(()=>{const{copyright:o,footer:c}=n.value;return c!==!1&&!!(o||c||e.value.displayFooter)}),t=x(()=>{const{footer:o}=n.value;return o===!1?!1:mn(o)?o:e.value.footer||""}),l=x(()=>"copyright"in n.value?n.value.copyright:"copyright"in e.value?e.value.copyright:s.value.length?`Copyright © ${new Date().getFullYear()} ${s.value[0].name}`:!1);return()=>a.value?r("footer",{class:"vp-footer-wrapper"},[t.value?r("div",{class:"vp-footer",innerHTML:t.value}):null,l.value?r("div",{class:"vp-copyright",innerHTML:l.value}):null]):null}}),z0=S({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(n,{slots:e}){const s=pn(),a=Cs(n,"config"),t=x(()=>a.value.ariaLabel||a.value.text),l=Y(!1);on(()=>s.value.path,()=>{l.value=!1});const o=c=>{c.detail===0&&(l.value=!l.value)};return()=>{var c;return r("div",{class:["dropdown-wrapper",{open:l.value}]},[r("button",{type:"button",class:"dropdown-title","aria-label":t.value,onClick:o},[((c=e.title)==null?void 0:c.call(e))||r("span",{class:"title"},[r(Nn,{icon:a.value.icon}),n.config.text]),r("span",{class:"arrow"}),r("ul",{class:"nav-dropdown"},a.value.children.map((p,d)=>{const u=d===a.value.children.length-1;return r("li",{class:"dropdown-item"},"children"in p?[r("h4",{class:"dropdown-subtitle"},p.link?r(Gn,{config:p,onFocusout:()=>{p.children.length===0&&u&&(l.value=!1)}}):r("span",p.text)),r("ul",{class:"dropdown-subitem-wrapper"},p.children.map((m,h)=>r("li",{class:"dropdown-subitem"},r(Gn,{config:m,onFocusout:()=>{h===p.children.length-1&&u&&(l.value=!1)}}))))]:r(Gn,{config:p,onFocusout:()=>{u&&(l.value=!1)}}))}))])])}}});const op=(n,e,s="")=>mn(e)?Es(n,`${s}${e}`):"children"in e?{...e,...e.link&&!Qa(e.link)?Es(n,`${s}${e.link}`):{},children:e.children.map(a=>op(n,a,`${s}${e.prefix||""}`))}:{...e,link:Qa(e.link)?e.link:Es(n,`${s}${e.link}`).link},rp=()=>{const n=rn(),e=jn(),s=()=>(n.value.navbar||[]).map(t=>op(e,t)),a=Y(s());return on(n,()=>{a.value=s()}),a},N0=()=>{const n=rn(),e=x(()=>n.value.repo||null),s=x(()=>e.value?Vh(e.value):null),a=x(()=>e.value?Ec(e.value):null),t=x(()=>s.value?n.value.repoLabel??(a.value===null?"Source":a.value):null);return x(()=>!s.value||!t.value||n.value.repoDisplay===!1?null:{type:a.value||"Source",label:t.value,link:s.value})};var H0=S({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(n){const e=pn(),s=Cs(n,"config"),a=x(()=>s.value.ariaLabel||s.value.text),t=Y(!1);on(()=>e.value.path,()=>{t.value=!1});const l=(o,c)=>c[c.length-1]===o;return()=>[r("button",{type:"button",class:["nav-screen-dropdown-title",{active:t.value}],"aria-label":a.value,onClick:()=>{t.value=!t.value}},[r("span",{class:"title"},[r(Nn,{icon:s.value.icon}),n.config.text]),r("span",{class:["arrow",t.value?"down":"end"]})]),r("ul",{class:["nav-screen-dropdown",{hide:!t.value}]},s.value.children.map(o=>r("li",{class:"dropdown-item"},"children"in o?[r("h4",{class:"dropdown-subtitle"},o.link?r(Gn,{config:o,onFocusout:()=>{l(o,s.value.children)&&o.children.length===0&&(t.value=!1)}}):r("span",o.text)),r("ul",{class:"dropdown-subitem-wrapper"},o.children.map(c=>r("li",{class:"dropdown-subitem"},r(Gn,{config:c,onFocusout:()=>{l(c,o.children)&&l(o,s.value.children)&&(t.value=!1)}}))))]:r(Gn,{config:o,onFocusout:()=>{l(o,s.value.children)&&(t.value=!1)}}))))]}}),U0=S({name:"NavScreenLinks",setup(){const n=rp();return()=>n.value.length?r("nav",{class:"nav-screen-links"},n.value.map(e=>r("div",{class:"navbar-links-item"},"children"in e?r(H0,{config:e}):r(Gn,{config:e})))):null}});const cp=()=>r(hn,{name:"dark"},()=>r("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));cp.displayName="DarkIcon";const pp=()=>r(hn,{name:"light"},()=>r("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));pp.displayName="LightIcon";const dp=()=>r(hn,{name:"auto"},()=>r("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));dp.displayName="AutoIcon";const up=()=>r(hn,{name:"enter-fullscreen"},()=>r("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));up.displayName="EnterFullScreenIcon";const vp=()=>r(hn,{name:"cancel-fullscreen"},()=>r("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));vp.displayName="CancelFullScreenIcon";const mp=()=>r(hn,{name:"outlook"},()=>[r("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);mp.displayName="OutlookIcon";var hp=S({name:"AppearanceSwitch",setup(){const{config:n,status:e}=ya(),s=()=>{n.value==="switch"?e.value={light:"dark",dark:"auto",auto:"light"}[e.value]:e.value=e.value==="light"?"dark":"light"};return()=>r("button",{type:"button",id:"appearance-switch",onClick:()=>s()},[r(dp,{style:{display:e.value==="auto"?"block":"none"}}),r(cp,{style:{display:e.value==="dark"?"block":"none"}}),r(pp,{style:{display:e.value==="light"?"block":"none"}})])}}),G0=S({name:"AppearanceMode",setup(){const n=rn(),{canToggle:e}=ya(),s=x(()=>n.value.outlookLocales.darkmode);return()=>e.value?r("div",{class:"appearance-wrapper"},[r("label",{class:"appearance-title",for:"appearance-switch"},s.value),r(hp)]):null}});const $t="VUEPRESS_THEME_COLOR";var K0=S({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(n){const e=(s="")=>{const a=document.documentElement.classList,t=ye(n.themeColor);if(!s){localStorage.removeItem($t),a.remove(...t);return}a.remove(...t.filter(l=>l!==s)),a.add(s),localStorage.setItem($t,s)};return yn(()=>{const s=localStorage.getItem($t);s&&e(s)}),()=>r("ul",{id:"theme-color-picker"},[r("li",r("span",{class:"theme-color",onClick:()=>e()})),ba(n.themeColor).map(([s,a])=>r("li",r("span",{style:{background:a},onClick:()=>e(s)})))])}});const ys=Ki.enableThemeColor==="true",W0=ys?Dh(ba(Ki).filter(([n])=>n.startsWith("theme-"))):{};var J0=S({name:"ThemeColor",setup(){const n=rn(),e=x(()=>n.value.outlookLocales.themeColor);return()=>ys?r("div",{class:"theme-color-wrapper"},[r("label",{class:"theme-color-title",for:"theme-color-picker"},e.value),r(K0,{themeColor:W0})]):null}}),bp=S({name:"ToggleFullScreenButton",setup(){const n=rn(),{isSupported:e,isFullscreen:s,toggle:a}=Ui(),t=x(()=>n.value.outlookLocales.fullscreen);return()=>e?r("div",{class:"full-screen-wrapper"},[r("label",{class:"full-screen-title",for:"full-screen-switch"},t.value),r("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:s.value,onClick:()=>a()},s.value?r(vp):r(up))]):null}}),_p=S({name:"OutlookSettings",setup(){const n=rs(),e=Fs(),s=x(()=>!e.value&&n.value.fullscreen);return()=>r(ct,()=>[ys?r(J0):null,r(G0),s.value?r(bp):null])}}),Q0=S({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(n,{emit:e,slots:s}){const a=pn(),{isMobile:t}=Ea(),l=le(),o=Sc(l);return yn(()=>{l.value=document.body,on(t,c=>{!c&&n.show&&(o.value=!1,e("close"))}),on(()=>a.value.path,()=>{o.value=!1,e("close")})}),ot(()=>{o.value=!1}),()=>r(Qe,{name:"fade",onEnter:()=>{o.value=!0},onAfterLeave:()=>{o.value=!1}},()=>{var c,p;return n.show?r("div",{id:"nav-screen"},r("div",{class:"vp-nav-screen-container"},[(c=s.before)==null?void 0:c.call(s),r(U0),r("div",{class:"vp-outlook-wrapper"},r(_p)),(p=s.after)==null?void 0:p.call(s)])):null})}}),Y0=S({name:"NavbarBrand",setup(){const n=Ae(),e=ma(),s=rn(),a=x(()=>s.value.home||n.value),t=x(()=>e.value.title),l=x(()=>s.value.navTitle??t.value),o=x(()=>s.value.logo?In(s.value.logo):null),c=x(()=>s.value.logoDark?In(s.value.logoDark):null);return()=>r($n,{to:a.value,class:"vp-brand"},()=>[o.value?r("img",{class:["vp-nav-logo",{light:!!c.value}],src:o.value,alt:t.value}):null,c.value?r("img",{class:["vp-nav-logo dark"],src:c.value,alt:t.value}):null,l.value?r("span",{class:["vp-site-name",{"hide-in-pad":o.value&&s.value.hideSiteNameOnMobile!==!1}]},l.value):null])}}),X0=S({name:"NavbarLinks",setup(){const n=rp();return()=>n.value.length?r("nav",{class:"vp-nav-links"},n.value.map(e=>r("div",{class:"nav-item hide-in-mobile"},"children"in e?r(z0,{config:e}):r(Gn,{config:e})))):null}}),Z0=S({name:"RepoLink",components:{BitbucketIcon:wc,GiteeIcon:Ac,GitHubIcon:yc,GitLabIcon:xc,SourceIcon:Pc},setup(){const n=N0();return()=>n.value?r("div",{class:"nav-item vp-repo"},r("a",{class:"vp-repo-link",href:n.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":n.value.label},r(Yn(`${n.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const kp=({active:n=!1},{emit:e})=>r("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":n}],"aria-label":"Toggle Navbar","aria-expanded":n,"aria-controls":"nav-screen",onClick:()=>e("toggle")},r("span",[r("span",{class:"vp-top"}),r("span",{class:"vp-middle"}),r("span",{class:"vp-bottom"})]));kp.displayName="ToggleNavbarButton";var nb=kp;const ti=(n,{emit:e})=>r("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>e("toggle")},r("span",{class:"icon"}));ti.displayName="ToggleSidebarButton",ti.emits=["toggle"];var eb=ti,sb=S({name:"OutlookButton",setup(){const{isSupported:n}=Ui(),e=rs(),s=Fs(),a=pn(),{canToggle:t}=ya(),l=Y(!1),o=x(()=>!s.value&&e.value.fullscreen&&n);return on(()=>a.value.path,()=>{l.value=!1}),()=>t.value||o.value||ys?r("div",{class:"nav-item hide-in-mobile"},t.value&&!o.value&&!ys?r(hp):o.value&&!t.value&&!ys?r(bp):r("button",{type:"button",class:["outlook-button",{open:l.value}],tabindex:"-1","aria-hidden":!0},[r(mp),r("div",{class:"outlook-dropdown"},r(_p))])):null}}),ab=S({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(n,{emit:e,slots:s}){const a=rn(),{isMobile:t}=Ea(),l=Y(!1),o=x(()=>{const{navbarAutoHide:u="mobile"}=a.value;return u!=="none"&&(u==="always"||t.value)}),c=x(()=>a.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),p={Brand:Y0,Language:Ct,Links:X0,Repo:Z0,Outlook:sb,Search:be("Docsearch")?Yn("Docsearch"):be("SearchBox")?Yn("SearchBox"):Ct},d=u=>p[u]??(be(u)?Yn(u):Ct);return()=>{var u,m,h,b,g,A;return[r("header",{id:"navbar",class:["vp-navbar",{"auto-hide":o.value,"hide-icon":a.value.navbarIcon===!1}]},[r("div",{class:"vp-navbar-start"},[r(eb,{onToggle:()=>{l.value&&(l.value=!1),e("toggleSidebar")}}),(u=s.startBefore)==null?void 0:u.call(s),(c.value.start||[]).map(w=>r(d(w))),(m=s.startAfter)==null?void 0:m.call(s)]),r("div",{class:"vp-navbar-center"},[(h=s.centerBefore)==null?void 0:h.call(s),(c.value.center||[]).map(w=>r(d(w))),(b=s.centerAfter)==null?void 0:b.call(s)]),r("div",{class:"vp-navbar-end"},[(g=s.endBefore)==null?void 0:g.call(s),(c.value.end||[]).map(w=>r(d(w))),(A=s.endAfter)==null?void 0:A.call(s),r(nb,{active:l.value,onToggle:()=>{l.value=!l.value}})])]),r(Q0,{show:l.value,onClose:()=>{l.value=!1}},{before:()=>{var w;return(w=s.screenTop)==null?void 0:w.call(s)},after:()=>{var w;return(w=s.screenBottom)==null?void 0:w.call(s)}})]}}}),tb=S({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(n){const e=we();return()=>[ap(n.config,{class:["vp-sidebar-link",`vp-sidebar-${n.config.type}`,{active:Is(e,n.config,!0)}],exact:!0}),tp(n.config.children)]}}),ib=S({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(n,{emit:e}){const s=we(),a=x(()=>Is(s,n.config)),t=x(()=>Is(s,n.config,!0));return()=>{const{collapsible:l,children:o=[],icon:c,prefix:p,link:d,text:u}=n.config;return r("section",{class:"vp-sidebar-group"},[r(l?"button":"p",{class:["vp-sidebar-heading",{clickable:l||d,exact:t.value,active:a.value}],...l?{type:"button",onClick:()=>e("toggle"),onKeydown:m=>{m.key==="Enter"&&e("toggle")}}:{}},[r(Nn,{icon:c}),d?r(Gn,{class:"vp-sidebar-title",config:{text:u,link:d},noExternalLinkIcon:!0}):r("span",{class:"vp-sidebar-title"},u),l?r("span",{class:["vp-arrow",n.open?"down":"end"]}):null]),n.open||!l?r(fp,{key:p,config:o}):null])}}}),fp=S({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(n){const e=we(),s=Y(-1),a=t=>{s.value=t===s.value?-1:t};return on(()=>e.path,()=>{const t=n.config.findIndex(l=>sp(e,l));s.value=t},{immediate:!0,flush:"post"}),()=>r("ul",{class:"vp-sidebar-links"},n.config.map((t,l)=>r("li",t.type==="group"?r(ib,{config:t,open:l===s.value,onToggle:()=>a(l)}):r(tb,{config:t}))))}}),lb=S({name:"SideBar",slots:Object,setup(n,{slots:e}){const s=we(),a=rn(),t=Qi(),l=le();return yn(()=>{on(()=>s.hash,o=>{const c=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${s.path}${o}"]`);if(!c)return;const{top:p,height:d}=l.value.getBoundingClientRect(),{top:u,height:m}=c.getBoundingClientRect();u<p?c.scrollIntoView(!0):u+m>p+d&&c.scrollIntoView(!1)})}),()=>{var o,c,p;return r("aside",{ref:l,id:"sidebar",class:["vp-sidebar",{"hide-icon":a.value.sidebarIcon===!1}]},[(o=e.top)==null?void 0:o.call(e),((c=e.default)==null?void 0:c.call(e))||r(fp,{config:t.value}),(p=e.bottom)==null?void 0:p.call(e)])}}}),Yi=S({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(n,{slots:e}){const s=jn(),a=pn(),t=xn(),l=rn(),{isMobile:o,isPC:c}=Ea(),[p,d]=mo(!1),[u,m]=mo(!1),h=Qi(),b=Y(!1),g=x(()=>n.noNavbar||t.value.navbar===!1||l.value.navbar===!1?!1:!!(a.value.title||l.value.logo||l.value.repo||l.value.navbar)),A=x(()=>n.noSidebar?!1:t.value.sidebar!==!1&&h.value.length!==0&&!t.value.home),w=x(()=>n.noToc||t.value.home?!1:t.value.toc||l.value.toc!==!1&&t.value.toc!==!1),k={x:0,y:0},E=V=>{k.x=V.changedTouches[0].clientX,k.y=V.changedTouches[0].clientY},R=V=>{const W=V.changedTouches[0].clientX-k.x,T=V.changedTouches[0].clientY-k.y;Math.abs(W)>Math.abs(T)*1.5&&Math.abs(W)>40&&(W>0&&k.x<=80?d(!0):d(!1))},B=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let H=0;return Fn("scroll",zh(()=>{const V=B();V<=58||V<H?b.value=!1:H+200<V&&!p.value&&(b.value=!0),H=V},300,!0)),on(o,V=>{V||d(!1)}),yn(()=>{const V=Sc(document.body);on(p,T=>{V.value=T});const W=s.afterEach(()=>{d(!1)});ot(()=>{V.value=!1,W()})}),()=>r(be("GlobalEncrypt")?Yn("GlobalEncrypt"):vc,()=>r("div",{class:["theme-container",{"no-navbar":!g.value,"no-sidebar":!A.value&&!(e.sidebar||e.sidebarTop||e.sidebarBottom),"has-toc":w.value,"hide-navbar":b.value,"sidebar-collapsed":!o.value&&!c.value&&u.value,"sidebar-open":o.value&&p.value},n.containerClass,t.value.containerClass||""],onTouchStart:E,onTouchEnd:R},[g.value?r(ab,{onToggleSidebar:()=>d()},{startBefore:()=>{var V;return(V=e.navbarStartBefore)==null?void 0:V.call(e)},startAfter:()=>{var V;return(V=e.navbarStartAfter)==null?void 0:V.call(e)},centerBefore:()=>{var V;return(V=e.navbarCenterBefore)==null?void 0:V.call(e)},centerAfter:()=>{var V;return(V=e.navbarCenterAfter)==null?void 0:V.call(e)},endBefore:()=>{var V;return(V=e.navbarEndBefore)==null?void 0:V.call(e)},endAfter:()=>{var V;return(V=e.navbarEndAfter)==null?void 0:V.call(e)},screenTop:()=>{var V;return(V=e.navScreenTop)==null?void 0:V.call(e)},screenBottom:()=>{var V;return(V=e.navScreenBottom)==null?void 0:V.call(e)}}):null,r(Qe,{name:"fade"},()=>p.value?r("div",{class:"vp-sidebar-mask",onClick:()=>d(!1)}):null),r(Qe,{name:"fade"},()=>o.value?null:r("div",{class:"toggle-sidebar-wrapper",onClick:()=>m()},r("span",{class:["arrow",u.value?"end":"start"]}))),r(lb,{},{...e.sidebar?{default:()=>e.sidebar()}:{},top:()=>{var V;return(V=e.sidebarTop)==null?void 0:V.call(e)},bottom:()=>{var V;return(V=e.sidebarBottom)==null?void 0:V.call(e)}}),e.default(),r(q0)]))}}),bn=S({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(n,{slots:e}){const s=t=>{t.style.transition=`transform ${n.duration}s ease-in-out ${n.delay}s, opacity ${n.duration}s ease-in-out ${n.delay}s`,t.style.transform="translateY(-20px)",t.style.opacity="0"},a=t=>{t.style.transform="translateY(0)",t.style.opacity="1"};return()=>r(n.type==="single"?Qe:Dv,{name:"drop",appear:n.appear,onAppear:s,onAfterAppear:a,onEnter:s,onAfterEnter:a,onBeforeLeave:s},()=>e.default())}});const ii=({custom:n})=>r(Wr,{class:["theme-hope-content",{custom:n}]});ii.displayName="MarkdownContent",ii.props={custom:Boolean};var Xi=ii;const gp=()=>r(hn,{name:"author"},()=>r("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));gp.displayName="AuthorIcon";const Ep=()=>r(hn,{name:"calendar"},()=>r("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));Ep.displayName="CalendarIcon";const yp=()=>r(hn,{name:"category"},()=>r("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));yp.displayName="CategoryIcon";const xp=()=>r(hn,{name:"print"},()=>r("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));xp.displayName="PrintIcon";const Ap=()=>r(hn,{name:"tag"},()=>r("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Ap.displayName="TagIcon";const wp=()=>r(hn,{name:"timer"},()=>r("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));wp.displayName="TimerIcon";const Pp=()=>r(hn,{name:"word"},()=>[r("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),r("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Pp.displayName="WordIcon";const Ye=()=>{const n=rn();return x(()=>n.value.metaLocales)};var ob=S({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(n){const e=Ye();return()=>n.author.length?r("span",{class:"page-author-info","aria-label":`${e.value.author}${n.pure?"":"🖊"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[r(gp),r("span",n.author.map(s=>s.url?r("a",{class:"page-author-item",href:s.url,target:"_blank",rel:"noopener noreferrer"},s.name):r("span",{class:"page-author-item"},s.name))),r("span",{property:"author",content:n.author.map(s=>s.name).join(", ")})]):null}}),rb=S({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(n){const e=jn(),s=pn(),a=Ye(),t=(l,o="")=>{o&&s.value.path!==o&&(l.preventDefault(),e.push(o))};return()=>n.category.length?r("span",{class:"page-category-info","aria-label":`${a.value.category}${n.pure?"":"🌈"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[r(yp),n.category.map(({name:l,path:o})=>r("span",{class:["page-category-item",{[`category${ut(l,9)}`]:!n.pure,clickable:o}],role:o?"navigation":"",onClick:c=>t(c,o)},l)),r("meta",{property:"articleSection",content:n.category.map(({name:l})=>l).join(",")})]):null}}),cb=S({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(n){const e=$i(),s=Ye();return()=>n.date?r("span",{class:"page-date-info","aria-label":`${s.value.date}${n.pure?"":"📅"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[r(Ep),r("span",r(ct,()=>n.localizedDate||n.date.toLocaleDateString(e.value))),r("meta",{property:"datePublished",content:n.date.toISOString()||""})]):null}}),pb=S({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(n){const e=Ye();return()=>n.isOriginal?r("span",{class:"page-original-info"},e.value.origin):null}}),db=S({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const e=Ye(),s=x(()=>{if(!n.readingTime)return null;const{minutes:a}=n.readingTime;return a<1?"PT1M":`PT${Math.round(a)}M`});return()=>{var a,t;return(a=n.readingTimeLocale)!=null&&a.time?r("span",{class:"page-reading-time-info","aria-label":`${e.value.readingTime}${n.pure?"":"⌛"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[r(wp),r("span",(t=n.readingTimeLocale)==null?void 0:t.time),r("meta",{property:"timeRequired",content:s.value})]):null}}}),ub=S({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(n){const e=jn(),s=pn(),a=Ye(),t=(l,o="")=>{o&&s.value.path!==o&&(l.preventDefault(),e.push(o))};return()=>n.tag.length?r("span",{class:"page-tag-info","aria-label":`${a.value.tag}${n.pure?"":"🏷"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[r(Ap),n.tag.map(({name:l,path:o})=>r("span",{class:["page-tag-item",{[`tag${ut(l,9)}`]:!n.pure,clickable:o}],role:o?"navigation":"",onClick:c=>t(c,o)},l)),r("meta",{property:"keywords",content:n.tag.map(({name:l})=>l).join(",")})]):null}}),vb=S({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const e=Ye();return()=>{var s,a,t;return(s=n.readingTimeLocale)!=null&&s.words?r("span",{class:"page-word-info","aria-label":`${e.value.words}${n.pure?"":"🔠"}`,...n.pure?{}:{"data-balloon-pos":"down"}},[r(Pp),r("span",(a=n.readingTimeLocale)==null?void 0:a.words),r("meta",{property:"wordCount",content:(t=n.readingTime)==null?void 0:t.words})]):null}}}),Lp=S({name:"PageInfo",components:{AuthorInfo:ob,CategoryInfo:rb,DateInfo:cb,OriginalInfo:pb,PageViewInfo:()=>null,ReadingTimeInfo:db,TagInfo:ub,WordInfo:vb},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(n){const e=Fs();return()=>n.items?r("div",{class:"page-info"},n.items.map(s=>r(Yn(`${s}Info`),{...n.info,pure:e.value}))):null}}),mb=S({name:"PrintButton",setup(){const n=rs(),e=rn();return()=>n.value.print===!1?null:r("button",{type:"button",class:"print-button",title:e.value.metaLocales.print,onClick:()=>{window.print()}},r(xp))}});const hb=({title:n,level:e,slug:s})=>r($n,{to:`#${s}`,class:["toc-link",`level${e}`]},()=>n),li=(n,e)=>{const s=we();return n.length&&e>0?r("ul",{class:"toc-list"},n.map(a=>{const t=li(a.children,e-1);return[r("li",{class:["toc-item",{active:Hi(s,`#${a.slug}`)}]},hb(a)),t?r("li",t):null]})):null};var Tp=S({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(n,{slots:e}){const s=we(),a=pn(),t=Ye(),l=le(),o=Y("-1.7rem"),c=d=>{var u;(u=l.value)==null||u.scrollTo({top:d,behavior:"smooth"})},p=()=>{if(l.value){const d=document.querySelector(".toc-item.active");d?o.value=`${d.getBoundingClientRect().top-l.value.getBoundingClientRect().top+l.value.scrollTop}px`:o.value="-1.7rem"}else o.value="-1.7rem"};return yn(()=>{on(()=>s.hash,d=>{if(l.value){const u=document.querySelector(`#toc a.toc-link[href$="${d}"]`);if(!u)return;const{top:m,height:h}=l.value.getBoundingClientRect(),{top:b,height:g}=u.getBoundingClientRect();b<m?c(l.value.scrollTop+b-m):b+g>m+h&&c(l.value.scrollTop+b+g-m-h)}}),on(()=>s.fullPath,()=>p(),{flush:"post",immediate:!0})}),()=>{var d,u;const m=n.items.length?li(n.items,n.headerDepth):a.value.headers?li(a.value.headers,n.headerDepth):null;return m?r("div",{class:"toc-place-holder"},[r("aside",{id:"toc"},[(d=e.before)==null?void 0:d.call(e),r("div",{class:"toc-header"},[t.value.toc,r(mb)]),r("div",{class:"toc-wrapper",ref:l},[m,r("div",{class:"toc-marker",style:{top:o.value}})]),(u=e.after)==null?void 0:u.call(e)])]):null}}}),Zi=S({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(n){const e=pn(),s=rn(),a=le(),t=({target:l})=>{const o=document.querySelector(l.hash);if(o){const c=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",c)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",c),o.focus(),window.scrollTo(0,0)}};return yn(()=>{on(()=>e.value.path,()=>a.value.focus())}),()=>[r("span",{ref:a,tabindex:"-1"}),r("a",{href:`#${n.content}`,class:"vp-skip-link sr-only",onClick:t},s.value.routeLocales.skipToContent)]}});let Mt=null,Fa=null;const bb={wait:()=>Mt,pending:()=>{Mt=new Promise(n=>Fa=n)},resolve:()=>{Fa==null||Fa(),Mt=null,Fa=null}},Ip=()=>bb;var _b=S({name:"FadeSlideY",slots:Object,setup(n,{slots:e}){const{resolve:s,pending:a}=Ip();return()=>r(Qe,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:s,onBeforeLeave:a},()=>{var t;return(t=e.default)==null?void 0:t.call(e)})}});const kb=(n,e)=>{const s=n.replace(e,"/").split("/"),a=[];let t=Si(e);return s.forEach((l,o)=>{o!==s.length-1?(t+=`${l}/`,a.push({link:t,name:l||"Home"})):l!==""&&(t+=l,a.push({link:t,name:l}))}),a},Dp=(n,{slots:e})=>{var s,a;const{bgImage:t,bgImageDark:l,bgImageStyle:o,color:c,description:p,image:d,imageDark:u,header:m,features:h=[]}=n;return r("div",{class:"vp-feature-wrapper"},[t?r("div",{class:["vp-feature-bg",{light:l}],style:[{"background-image":`url(${t})`},o]}):null,l?r("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${l})`},o]}):null,r("div",{class:"vp-feature",style:c?{color:c}:{}},[((s=e.image)==null?void 0:s.call(e,n))||[d?r("img",{class:["vp-feature-image",{light:u}],src:In(d),alt:m}):null,u?r("img",{class:"vp-feature-image dark",src:In(u),alt:m}):null],((a=e.info)==null?void 0:a.call(e,n))||[m?r("h2",{class:"vp-feature-header"},m):null,p?r("p",{class:"vp-feature-description",innerHTML:p}):null],h.length?r("div",{class:"vp-features"},h.map(({icon:b,title:g,details:A,link:w})=>{const k=[r("h3",{class:"vp-feature-title"},[r(Nn,{icon:b}),r("span",{innerHTML:g})]),r("p",{class:"vp-feature-details",innerHTML:A})];return w?Qa(w)?r("a",{class:"vp-feature-item link",href:w,role:"navigation","aria-label":g,target:"_blank"},k):r($n,{class:"vp-feature-item link",to:w,role:"navigation","aria-label":g},()=>k):r("div",{class:"vp-feature-item"},k)})):null])])};Dp.displayName="FeaturePanel";var Ro=Dp,fb=S({name:"HeroInfo",slots:Object,setup(n,{slots:e}){const s=xn(),a=ma(),t=x(()=>s.value.heroFullScreen??!1),l=x(()=>{const{heroText:d,tagline:u}=s.value;return{text:d??a.value.title??"Hello",tagline:u??a.value.description??"",isFullScreen:t.value}}),o=x(()=>{const{heroText:d,heroImage:u,heroImageDark:m,heroAlt:h,heroImageStyle:b}=s.value;return{image:u?In(u):null,imageDark:m?In(m):null,heroStyle:b,alt:h||d||"hero image",isFullScreen:t.value}}),c=x(()=>{const{bgImage:d,bgImageDark:u,bgImageStyle:m}=s.value;return{image:Ve(d)?In(d):null,imageDark:Ve(u)?In(u):null,bgStyle:m,isFullScreen:t.value}}),p=x(()=>s.value.actions??[]);return()=>{var d,u,m;return r("header",{class:["vp-hero-info-wrapper",{fullscreen:t.value}]},[((d=e.heroBg)==null?void 0:d.call(e,c.value))||[c.value.image?r("div",{class:["vp-hero-mask",{light:c.value.imageDark}],style:[{"background-image":`url(${c.value.image})`},c.value.bgStyle]}):null,c.value.imageDark?r("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${c.value.imageDark})`},c.value.bgStyle]}):null],r("div",{class:"vp-hero-info"},[((u=e.heroImage)==null?void 0:u.call(e,o.value))||r(bn,{appear:!0,type:"group"},()=>[o.value.image?r("img",{key:"light",class:["vp-hero-image",{light:o.value.imageDark}],style:o.value.heroStyle,src:o.value.image,alt:o.value.alt}):null,o.value.imageDark?r("img",{key:"dark",class:"vp-hero-image dark",style:o.value.heroStyle,src:o.value.imageDark,alt:o.value.alt}):null]),((m=e.heroInfo)==null?void 0:m.call(e,l.value))??r("div",{class:"vp-hero-infos"},[l.value.text?r(bn,{appear:!0,delay:.04},()=>r("h1",{id:"main-title"},l.value.text)):null,l.value.tagline?r(bn,{appear:!0,delay:.08},()=>r("p",{class:"vp-description",innerHTML:l.value.tagline})):null,p.value.length?r(bn,{appear:!0,delay:.12},()=>r("p",{class:"vp-actions"},p.value.map(h=>r(Gn,{class:["vp-action",h.type||"default"],config:h,noExternalLinkIcon:!0})))):null])])])}}});const Rp=(n,{slots:e})=>{var s,a,t;const{bgImage:l,bgImageDark:o,bgImageStyle:c,color:p,description:d,image:u,imageDark:m,header:h,highlights:b=[],type:g="un-order"}=n;return r("div",{class:"vp-highlight-wrapper",style:p?{color:p}:{}},[l?r("div",{class:["vp-highlight-bg",{light:o}],style:[{"background-image":`url(${l})`},c]}):null,o?r("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${o})`},c]}):null,r("div",{class:"vp-highlight"},[((s=e.image)==null?void 0:s.call(e,n))||[u?r("img",{class:["vp-highlight-image",{light:m}],src:In(u),alt:h}):null,m?r("img",{class:"vp-highlight-image dark",src:In(m),alt:h}):null],((a=e.info)==null?void 0:a.call(e,n))||[r("div",{class:"vp-highlight-info-wrapper"},r("div",{class:"vp-highlight-info"},[h?r("h2",{class:"vp-highlight-header",innerHTML:h}):null,d?r("p",{class:"vp-highlight-description",innerHTML:d}):null,((t=e.highlights)==null?void 0:t.call(e,b))||r(g==="order"?"ol":g==="no-order"?"dl":"ul",{class:"vp-highlights"},b.map(({icon:A,title:w,details:k,link:E})=>{const R=[r(g==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[A?r(Nn,{class:"vp-highlight-icon",icon:A}):null,r("span",{innerHTML:w})]),k?r(g==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:k}):null];return r(g==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:E}]},E?Ph(E)?r("a",{class:"vp-highlight-item link",href:E,role:"navigation","aria-label":w,target:"_blank"},R):r($n,{class:"vp-highlight-item link",to:E,role:"navigation","aria-label":w},()=>R):r("div",{class:"vp-highlight-item"},R))}))]))]])])};Rp.displayName="HighlightPanel";var gb=Rp,Eb=S({name:"HomePage",slots:Object,setup(n,{slots:e}){const s=Fs(),a=xn(),t=x(()=>{const{features:o}=a.value;return X(o)?o:null}),l=x(()=>{const{highlights:o}=a.value;return X(o)?o:null});return()=>{var o,c,p,d;return r("main",{id:"main-content",class:["vp-project-home ",{pure:s.value}],"aria-labelledby":a.value.heroText===null?"":"main-title"},[(o=e.top)==null?void 0:o.call(e),r(fb),((c=l.value)==null?void 0:c.map(u=>"features"in u?r(Ro,u):r(gb,u)))||(t.value?r(bn,{appear:!0,delay:.24},()=>r(Ro,{features:t.value})):null),(p=e.center)==null?void 0:p.call(e),r(bn,{appear:!0,delay:.32},()=>r(Xi)),(d=e.bottom)==null?void 0:d.call(e)])}}}),yb=S({name:"BreadCrumb",setup(){const n=jn(),e=pn(),s=Ae(),a=xn(),t=rn(),l=le([]),o=x(()=>(a.value.breadcrumb||a.value.breadcrumb!==!1&&t.value.breadcrumb!==!1)&&l.value.length>1),c=x(()=>a.value.breadcrumbIcon||a.value.breadcrumbIcon!==!1&&t.value.breadcrumbIcon!==!1),p=()=>{const d=n.getRoutes(),u=kb(e.value.path,s.value).map(({link:m,name:h})=>{const b=d.find(g=>g.path===m);if(b){const{meta:g,path:A}=_a(n,b.path);return{title:g[En.shortTitle]||g[En.title]||h,icon:g[En.icon],path:A}}return null}).filter(m=>m!==null);u.length>1&&(l.value=u)};return yn(()=>{p(),on(()=>e.value.path,p)}),()=>r("nav",{class:["vp-breadcrumb",{disable:!o.value}]},o.value?r("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},l.value.map((d,u)=>r("li",{class:{"is-active":l.value.length-1===u},property:"itemListElement",typeof:"ListItem"},[r($n,{to:d.path,property:"item",typeof:"WebPage"},()=>[c.value?r(Nn,{icon:d.icon}):null,r("span",{property:"name"},d.title||"Unknown")]),r("meta",{property:"position",content:u+1})]))):[])}});const Oo=n=>{const e=jn();return n===!1?!1:mn(n)?Es(e,n,!0):la(n)?n:null},oi=(n,e,s)=>{const a=n.findIndex(t=>t.link===e);if(a!==-1){const t=n[a+s];return t!=null&&t.link?t:null}for(const t of n)if(t.children){const l=oi(t.children,e,s);if(l)return l}return null};var xb=S({name:"PageNav",setup(){const n=rn(),e=xn(),s=Qi(),a=pn(),t=ga(),l=x(()=>{const c=Oo(e.value.prev);return c===!1?null:c||(n.value.prevLink===!1?null:oi(s.value,a.value.path,-1))}),o=x(()=>{const c=Oo(e.value.next);return c===!1?null:c||(n.value.nextLink===!1?null:oi(s.value,a.value.path,1))});return Fn("keydown",c=>{c.altKey&&(c.key==="ArrowRight"?o.value&&(t(o.value.link),c.preventDefault()):c.key==="ArrowLeft"&&l.value&&(t(l.value.link),c.preventDefault()))}),()=>l.value||o.value?r("nav",{class:"vp-page-nav"},[l.value?r(Gn,{class:"prev",config:l.value},()=>{var c,p;return[r("div",{class:"hint"},[r("span",{class:"arrow start"}),n.value.metaLocales.prev]),r("div",{class:"link"},[r(Nn,{icon:(c=l.value)==null?void 0:c.icon}),(p=l.value)==null?void 0:p.text])]}):null,o.value?r(Gn,{class:"next",config:o.value},()=>{var c,p;return[r("div",{class:"hint"},[n.value.metaLocales.next,r("span",{class:"arrow end"})]),r("div",{class:"link"},[(c=o.value)==null?void 0:c.text,r(Nn,{icon:(p=o.value)==null?void 0:p.icon})])]}):null]):null}});const Ab={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},wb=({docsRepo:n,docsBranch:e,docsDir:s,filePathRelative:a,editLinkPattern:t})=>{if(!a)return null;const l=Ec(n);let o;return t?o=t:l!==null&&(o=Ab[l]),o?o.replace(/:repo/,ls(n)?n:`https://github.com/${n}`).replace(/:branch/,e).replace(/:path/,Fr(`${Si(s)}/${a}`)):null},Pb=()=>{const n=rn(),e=pn(),s=xn();return x(()=>{const{repo:a,docsRepo:t=a,docsBranch:l="main",docsDir:o="",editLink:c,editLinkPattern:p=""}=n.value;if(!(s.value.editLink??c??!0)||!t)return null;const d=wb({docsRepo:t,docsBranch:l,docsDir:o,editLinkPattern:p,filePathRelative:e.value.filePathRelative});return d?{text:n.value.metaLocales.editLink,link:d}:null})},Lb=()=>{const n=ma(),e=rn(),s=pn(),a=xn();return x(()=>{var t,l;return!(a.value.lastUpdated??e.value.lastUpdated??!0)||!((t=s.value.git)!=null&&t.updatedTime)?null:new Date((l=s.value.git)==null?void 0:l.updatedTime).toLocaleString(n.value.lang)})},Tb=()=>{const n=rn(),e=pn(),s=xn();return x(()=>{var a;return s.value.contributors??n.value.contributors??!0?((a=e.value.git)==null?void 0:a.contributors)??null:null})};var Ib=S({name:"PageTitle",setup(){const n=pn(),e=xn(),s=rn(),{info:a,items:t}=O0();return()=>r("div",{class:"vp-page-title"},[r("h1",[s.value.titleIcon===!1?null:r(Nn,{icon:e.value.icon}),n.value.title]),r(Lp,{info:a.value,...t.value===null?{}:{items:t.value}}),r("hr")])}});const Op=()=>r(hn,{name:"edit"},()=>[r("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),r("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Op.displayName="EditIcon";var Db=S({name:"PageMeta",setup(){const n=rn(),e=Pb(),s=Lb(),a=Tb();return()=>{const{metaLocales:t}=n.value;return r("footer",{class:"page-meta"},[e.value?r("div",{class:"meta-item edit-link"},r(Gn,{class:"label",config:e.value},{before:()=>r(Op)})):null,r("div",{class:"meta-item git-info"},[s.value?r("div",{class:"update-time"},[r("span",{class:"label"},`${t.lastUpdated}: `),r(ct,()=>r("span",{class:"info"},s.value))]):null,a.value&&a.value.length?r("div",{class:"contributors"},[r("span",{class:"label"},`${t.contributors}: `),a.value.map(({email:l,name:o},c)=>[r("span",{class:"contributor",title:`email: ${l}`},o),c!==a.value.length-1?",":""])]):null])])}}}),Rb=S({name:"NormalPage",slots:Object,setup(n,{slots:e}){const s=xn(),a=pn(),{isDarkmode:t}=ya(),l=rn(),o=x(()=>s.value.toc||s.value.toc!==!1&&l.value.toc!==!1);return()=>r("main",{id:"main-content",class:"vp-page"},r(be("LocalEncrypt")?Yn("LocalEncrypt"):vc,()=>{var c,p,d,u;return[(c=e.top)==null?void 0:c.call(e),s.value.cover?r("img",{class:"page-cover",src:In(s.value.cover),alt:a.value.title,"no-view":""}):null,r(yb),r(Ib),o.value?r(Tp,{headerDepth:s.value.headerDepth??l.value.headerDepth??2},{before:()=>{var m;return(m=e.tocBefore)==null?void 0:m.call(e)},after:()=>{var m;return(m=e.tocAfter)==null?void 0:m.call(e)}}):null,(p=e.contentBefore)==null?void 0:p.call(e),r(Xi),(d=e.contentAfter)==null?void 0:d.call(e),r(Db),r(xb),be("CommentService")?r(Yn("CommentService"),{darkmode:t.value}):null,(u=e.bottom)==null?void 0:u.call(e)]}))}}),Ob=S({name:"Layout",setup(){const n=rs(),e=rn(),s=pn(),a=xn(),{isMobile:t}=Ea(),l=x(()=>{var o,c;return((o=e.value.blog)==null?void 0:o.sidebarDisplay)||((c=n.value.blog)==null?void 0:c.sidebarDisplay)||"mobile"});return()=>[r(Zi),r(Yi,{},{default:()=>a.value.home?r(Eb):r(_b,()=>r(Rb,{key:s.value.path})),...l.value!=="none"?{navScreenBottom:()=>r(Yn("BloggerInfo"))}:{},...!t.value&&l.value==="always"?{sidebar:()=>r(Yn("BloggerInfo"))}:{}})]}}),Bb=S({name:"NotFoundHint",setup(){const n=rn(),e=()=>{const s=n.value.routeLocales.notFoundMsg;return s[Math.floor(Math.random()*s.length)]};return()=>r("div",{class:"not-found-hint"},[r("p",{class:"error-code"},"404"),r("h1",{class:"error-title"},n.value.routeLocales.notFoundTitle),r("p",{class:"error-hint"},e())])}}),Vb=S({name:"NotFound",slots:Object,setup(n,{slots:e}){const s=Ae(),a=rn(),{navigate:t}=Zt({to:a.value.home??s.value});return()=>[r(Zi),r(Yi,{noSidebar:!0},()=>{var l;return r("main",{id:"main-content",class:"vp-page not-found"},((l=e.default)==null?void 0:l.call(e))||[r(Bb),r("div",{class:"actions"},[r("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},a.value.routeLocales.back),r("button",{type:"button",class:"action-button",onClick:()=>t()},a.value.routeLocales.home)])])})]}});const Cb={Wechat:'<svg xmlns="http://www.w3.org/2000/svg" class="icon wechat-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1AC88E"/><path fill="#fff" d="M827.551 578.742a176.583 176.583 0 0 0-185.685-158.379 172.942 172.942 0 0 0-186.3 158.379 172.942 172.942 0 0 0 185.686 158.379 282.169 282.169 0 0 0 65.536-10.923l60.689 32.768-16.384-54.613a166.275 166.275 0 0 0 76.458-125.611zm-245.76-27.307a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.307 21.845 24.872 24.872 0 0 1-27.921 21.845h.614zm121.356 0a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.306 21.845 24.872 24.872 0 0 1-28.512 21.845h1.206z"/><path fill="#fff" d="M623.662 400.953h21.23A222.709 222.709 0 0 0 419.772 245.6a208.145 208.145 0 0 0-223.323 189.94 182.044 182.044 0 0 0 89.201 150.483l-22.436 67.356 78.279-39.435a389.575 389.575 0 0 0 78.279 10.923h20.616a163.226 163.226 0 0 1-6.667-46.718 182.044 182.044 0 0 1 189.94-177.197zm-121.379-60.69a27.921 27.921 0 1 1 0 55.843 31.562 31.562 0 0 1-33.36-27.921 31.562 31.562 0 0 1 34.59-27.921h-1.23zM346.34 396.107a31.562 31.562 0 0 1-33.383-27.921 31.562 31.562 0 0 1 33.383-27.921 27.921 27.921 0 1 1 0 55.842z"/></svg>',Email:'<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M270.077 286.233H751.99c32.933 0 59.86 24.855 60.274 55.51l-301.023 157L210.217 341.88c.207-30.723 26.927-55.717 59.86-55.717zm-59.929 115.714-.276 277.756c0 30.931 27.134 56.2 60.205 56.2H751.99c33.14 0 60.274-25.269 60.274-56.2V401.81L518.283 551.492a15.88 15.88 0 0 1-14.43 0L210.148 401.947z"/></svg>'},Sb={category:{"/":{path:"/category/",map:{常见服务的搭建:{path:"/category/%E5%B8%B8%E8%A7%81%E6%9C%8D%E5%8A%A1%E7%9A%84%E6%90%AD%E5%BB%BA/",keys:["v-60fff667","v-4378712f","v-16b6b750","v-9e4f7a5a","v-60544e4e","v-5210fd8e","v-b7534df8","v-a5639d14","v-d22f44ac","v-763ef6d8"]},监控:{path:"/category/%E7%9B%91%E6%8E%A7/",keys:["v-104b656e","v-d3fe39f2","v-32678264","v-78cfc7b7","v-46bc9423","v-f875cf44","v-0b0f120b","v-24eba14a","v-baa733fa","v-9baa27c2","v-7de67fc4","v-1b3959e1","v-fe8a603a","v-01406aac","v-306cc50e","v-420473ed","v-4899a812"]},计算机网络:{path:"/category/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/",keys:["v-a1ff8004","v-d623d08a","v-754f0210"]},操作系统:{path:"/category/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/",keys:["v-ba097eb4","v-2d9f4ba5"]},云原生:{path:"/category/%E4%BA%91%E5%8E%9F%E7%94%9F/",keys:["v-2a83e426","v-87f9ec82","v-1497ef65","v-508989f3","v-5257418c","v-7da870a3","v-bcd7447a","v-3f2cd8fb","v-0abdc785","v-6fcbadd8","v-16624cc8","v-00a035a9","v-399e5546","v-daf345c2","v-4d18a9c6","v-1b52ff44","v-1590f620","v-095f9124","v-a659ac38","v-00c390aa","v-5a027c1c","v-2b87c67e","v-05e39b32","v-a95ef8ee","v-af7321c0","v-2b1b7ec1","v-76fb0a5e","v-645bf47e","v-5ad137cd","v-2e60625e","v-cb7b897c","v-72ba803a","v-1369b331","v-645adb07","v-1f0f80e6","v-09586b2c","v-07f61cc9","v-62d595a7"]},前端:{path:"/category/%E5%89%8D%E7%AB%AF/",keys:["v-c64aa418"]},Golang:{path:"/category/golang/",keys:["v-e3abd37e","v-61e20373","v-9f4ff810","v-a895956a","v-a77317a2","v-925f3920"]},Python:{path:"/category/python/",keys:["v-b72643ac","v-24848cfb","v-017fe212","v-632afeee","v-6a3d55a6","v-7cb1645a","v-1205d2a0","v-bf9d600a","v-e912ba58","v-ef1495f0","v-bcee94b6","v-e6964004","v-36c2f847","v-11582f7c","v-747a5278","v-45447483","v-0ed8c2b6","v-659e17b6","v-583cf311","v-33deec0c","v-21e01b0d","v-973f5452","v-1941575d","v-3f18b850","v-3a976324","v-a1e7d070","v-b5c2201a","v-4cb0a918","v-998003b4","v-0786bde2","v-9320324e","v-e25702a0","v-737185ae","v-8d5f6fee","v-13fe8742","v-c57983ea","v-09b7cf20","v-f15b3dba","v-0c5f5f9c","v-361a70e2","v-049ef682","v-6d90a948","v-7692b860","v-4accd2e6","v-1609d8e9","v-0939f9c2"]},Linux:{path:"/category/linux/",keys:["v-19fa2dc8","v-2b64c83c","v-d1ce3044","v-4b9c1d99","v-43e54828","v-902fe038","v-75946033","v-6cf4ecb4","v-07fad500","v-3ef0b394","v-33aa7480","v-dac0d1dc","v-00941b10","v-76c3c216","v-3623fc05","v-00ff071b","v-51198775","v-213dba9c","v-dd604362","v-e021017c","v-0362c258","v-ccb7dd70","v-7af80658","v-c0e652fc","v-71241dce","v-3666da25","v-95c6342c","v-549a3ab9","v-5f6eadd7","v-5db426fd","v-51c96f18","v-44c2064c","v-2ef7dc02","v-6a52f4ae","v-d3244104","v-57207c61","v-d584ed36","v-49cbb9f9","v-1b65cd68","v-41510350","v-2f71d652","v-8d2e7446","v-0698c03c","v-22a0477e","v-339f9476","v-71241d90","v-765b1b97","v-1f7f0293","v-66254658","v-835049c4","v-7583d4e9","v-7d04115f","v-ac3119e6","v-aa29fc70","v-6f0ebce0","v-28da4efe","v-755f1380","v-18a04a46","v-751027c3","v-8d45377a","v-cc33efae","v-b6223f7e","v-39f65eae","v-71241d52","v-04de7f18","v-2ca54d11","v-731951cc","v-04066f84","v-17e5f48e","v-d54a4614","v-c42e271a","v-4a7628de","v-53c8880c","v-5aad7141","v-ab5e1508","v-0f5fa4fa","v-81126a72","v-66790dab","v-092fc61e","v-09c92e74","v-ac2eca3c","v-418229bc","v-34bd49ba","v-4d92bb04","v-ae8f4894","v-5d30fe45","v-75f467df","v-719f9d3f","v-6bf8603e","v-34aff614","v-5c17fa36","v-95fb4b80","v-39d19511","v-2c406bc2","v-71241cd6","v-79bd1f4a","v-fb1ca100","v-789867d8","v-2638ec6a","v-780b2f15","v-13488b07","v-02aa1bcb","v-7503515e","v-a27ac06c","v-7f1266d1","v-c0d2447e","v-3bb98840","v-0215d71c","v-769b02c6","v-f8d17c08","v-14498f4b","v-d0688ad6"]},MySQL:{path:"/category/mysql/",keys:["v-37c1affd","v-36f16a4d","v-f2aceb80","v-528061dd","v-426b1ca9","v-06da267c","v-a02396ee","v-0bf9122d","v-9c2214f8","v-17e5e2ac","v-248713a5","v-34f80d94","v-1f31eb54","v-73a05a52"]},Redis:{path:"/category/redis/",keys:["v-72ca315d","v-2bee89ec","v-a01d2bb2","v-eeddae12","v-219cbae0","v-7e89ffae","v-9b126160","v-28948558","v-5c0dc3f1","v-df69f078","v-dae22064","v-641cf9f1","v-5384c60c"]},自动化工具:{path:"/category/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7/",keys:["v-4fe45b30","v-124e0572","v-1b0e4f8c","v-3ef9d450","v-77e47a71","v-1cd5ce80","v-7b53d6b2","v-152091b0","v-614501e6","v-00acf522","v-755fee70","v-3efb1842","v-2966c6e4","v-3c4d974f","v-3a240b8c","v-3192b10c","v-3f2b2588","v-0e29a549","v-424ac8f6","v-2cd1a3ca","v-31ebb152","v-12780ba1","v-77ee0a50","v-30bfdf82","v-323c6e86","v-25fa894e","v-f7c8afa6","v-25717abd","v-5aeeb3b4","v-de3b8b22","v-5433ba7c","v-3320fa28","v-64097c30","v-7e695b5c","v-91925c40","v-7b0edca8","v-4ea72b99","v-f7090128","v-0311f57c","v-54ce3d17","v-2964dd3c","v-7d04e5f6","v-262983e2","v-7c5409ca","v-30d1e5c6","v-5fee3290","v-03f7d317","v-c4bd02c8","v-3a020ea1","v-378058bb"]},web中间件:{path:"/category/web%E4%B8%AD%E9%97%B4%E4%BB%B6/",keys:["v-1943aea9","v-5fdd348e","v-702e3c11","v-51aecb92","v-80859ef8","v-1cb1969f","v-4d07e670","v-8f79538a","v-179a7ba4","v-2762ae00","v-319ae12d","v-29b355de","v-01d2be24","v-3ef6b5c2","v-b121e484","v-819f88e4","v-5a715f17","v-6b2696a0"]}}}},tag:{"/":{path:"/tag/",map:{activemq:{path:"/tag/activemq/",keys:["v-60fff667"]},jdk:{path:"/tag/jdk/",keys:["v-4378712f"]},fastdfs:{path:"/tag/fastdfs/",keys:["v-16b6b750"]},博客:{path:"/tag/%E5%8D%9A%E5%AE%A2/",keys:["v-763ef6d8"]},nexus:{path:"/tag/nexus/",keys:["v-a5639d14"]},rabbitmq:{path:"/tag/rabbitmq/",keys:["v-9e4f7a5a","v-b7534df8"]},rocketmq:{path:"/tag/rocketmq/",keys:["v-60544e4e"]},zookeeper:{path:"/tag/zookeeper/",keys:["v-5210fd8e"]},Git:{path:"/tag/git/",keys:["v-d2fece48","v-191529b7"]},grafana:{path:"/tag/grafana/",keys:["v-4899a812"]},alert:{path:"/tag/alert/",keys:["v-420473ed"]},技术博客:{path:"/tag/%E6%8A%80%E6%9C%AF%E5%8D%9A%E5%AE%A2/",keys:["v-73fbd21f"]},奇技淫巧:{path:"/tag/%E5%A5%87%E6%8A%80%E6%B7%AB%E5%B7%A7/",keys:["v-8d980508"]},Mac:{path:"/tag/mac/",keys:["v-cc3a53f4","v-4d7b907e"]},vim:{path:"/tag/vim/",keys:["v-6bac1857"]},写作排版:{path:"/tag/%E5%86%99%E4%BD%9C%E6%8E%92%E7%89%88/",keys:["v-26fca4d5"]},原理:{path:"/tag/%E5%8E%9F%E7%90%86/",keys:["v-2d9f4ba5"]},Docker:{path:"/tag/docker/",keys:["v-87f9ec82","v-1497ef65","v-508989f3"]},etcd:{path:"/tag/etcd/",keys:["v-5257418c","v-7da870a3","v-bcd7447a"]},Kubernetes:{path:"/tag/kubernetes/",keys:["v-2a83e426","v-3ef9d450","v-3f2cd8fb","v-0abdc785","v-6fcbadd8","v-16624cc8","v-00a035a9","v-399e5546","v-4d18a9c6","v-1b52ff44","v-1590f620","v-095f9124","v-a659ac38","v-00c390aa","v-5a027c1c","v-2b87c67e","v-05e39b32","v-a95ef8ee","v-af7321c0","v-2b1b7ec1","v-76fb0a5e","v-645bf47e","v-5ad137cd","v-2e60625e","v-cb7b897c","v-72ba803a","v-1369b331","v-645adb07","v-1f0f80e6","v-09586b2c","v-07f61cc9","v-62d595a7"]},harbor:{path:"/tag/harbor/",keys:["v-daf345c2"]},工作脚本:{path:"/tag/%E5%B7%A5%E4%BD%9C%E8%84%9A%E6%9C%AC/",keys:["v-1941575d"]},vscode:{path:"/tag/vscode/",keys:["v-79604bf8"]},Bash:{path:"/tag/bash/",keys:["v-19fa2dc8","v-2b64c83c","v-d1ce3044","v-dd604362","v-e021017c","v-0362c258","v-ccb7dd70","v-7af80658","v-c0e652fc","v-71241dce","v-3666da25","v-95c6342c","v-549a3ab9","v-5f6eadd7","v-5db426fd","v-51c96f18","v-44c2064c","v-2ef7dc02","v-6a52f4ae","v-d3244104","v-57207c61","v-d584ed36","v-49cbb9f9","v-1b65cd68","v-41510350","v-2f71d652","v-8d2e7446","v-0698c03c","v-22a0477e","v-339f9476","v-71241d90","v-765b1b97","v-1f7f0293","v-66254658","v-835049c4","v-7583d4e9","v-7d04115f","v-ac3119e6","v-aa29fc70","v-6f0ebce0","v-28da4efe","v-755f1380","v-18a04a46","v-751027c3","v-8d45377a","v-cc33efae","v-b6223f7e","v-39f65eae","v-71241d52","v-04de7f18","v-2ca54d11","v-731951cc","v-04066f84","v-17e5f48e","v-d54a4614","v-c42e271a","v-4a7628de","v-53c8880c","v-5aad7141","v-ab5e1508","v-0f5fa4fa","v-81126a72","v-66790dab","v-092fc61e","v-09c92e74","v-ac2eca3c","v-418229bc","v-34bd49ba","v-4d92bb04","v-ae8f4894","v-5d30fe45","v-75f467df","v-719f9d3f","v-6bf8603e","v-34aff614","v-5c17fa36","v-95fb4b80","v-39d19511","v-2c406bc2","v-71241cd6","v-79bd1f4a"]},风格:{path:"/tag/%E9%A3%8E%E6%A0%BC/",keys:["v-d1ce3044"]},docker:{path:"/tag/docker/",keys:["v-b7534df8"]},Ansible:{path:"/tag/ansible/",keys:["v-4fe45b30","v-1b0e4f8c","v-3ef9d450","v-31ebb152","v-12780ba1","v-77ee0a50","v-30bfdf82","v-323c6e86","v-25fa894e","v-f7c8afa6","v-25717abd","v-5aeeb3b4","v-de3b8b22","v-5433ba7c","v-3320fa28","v-64097c30","v-7e695b5c","v-91925c40","v-7b0edca8","v-4ea72b99","v-f7090128","v-0311f57c","v-54ce3d17","v-2964dd3c"]},Gitlab:{path:"/tag/gitlab/",keys:["v-378058bb"]},Jenkins:{path:"/tag/jenkins/",keys:["v-124e0572","v-77e47a71","v-1cd5ce80","v-7b53d6b2","v-152091b0","v-614501e6","v-00acf522","v-755fee70","v-3efb1842","v-2966c6e4","v-3c4d974f","v-3a240b8c","v-3192b10c","v-7d04e5f6","v-262983e2","v-7c5409ca","v-30d1e5c6","v-5fee3290","v-03f7d317","v-c4bd02c8","v-3a020ea1"]},jumpserver:{path:"/tag/jumpserver/",keys:["v-3f2b2588","v-0e29a549","v-424ac8f6","v-2cd1a3ca"]},prometheus:{path:"/tag/prometheus/",keys:["v-d3fe39f2","v-32678264","v-78cfc7b7"]},Zabbix:{path:"/tag/zabbix/",keys:["v-46bc9423","v-f875cf44","v-0b0f120b","v-24eba14a","v-baa733fa","v-9baa27c2","v-7de67fc4","v-1b3959e1","v-fe8a603a","v-01406aac","v-306cc50e"]},Nginx:{path:"/tag/nginx/",keys:["v-1943aea9","v-5fdd348e","v-702e3c11","v-51aecb92","v-80859ef8","v-1cb1969f","v-4d07e670","v-8f79538a","v-179a7ba4","v-2762ae00","v-319ae12d","v-29b355de"]},Tomcat:{path:"/tag/tomcat/",keys:["v-01d2be24","v-3ef6b5c2","v-b121e484","v-819f88e4","v-5a715f17","v-6b2696a0"]},概念:{path:"/tag/%E6%A6%82%E5%BF%B5/",keys:["v-0dd71b0c","v-7699454c","v-106ad43e"]},常见问题:{path:"/tag/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98/",keys:["v-76c3c216","v-3623fc05","v-00ff071b","v-51198775","v-213dba9c"]},shell:{path:"/tag/shell/",keys:["v-582427ba"]},linux常用命令:{path:"/tag/linux%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4/",keys:["v-02aa1bcb","v-7503515e","v-a27ac06c","v-7f1266d1","v-c0d2447e","v-3bb98840","v-0215d71c","v-769b02c6","v-f8d17c08","v-14498f4b","v-d0688ad6"]}}}}},$b={article:{"/":{path:"/article/",keys:["v-19fa2dc8","v-b72643ac","v-1943aea9","v-4fe45b30","v-124e0572","v-73fbd21f","v-104b656e","v-cade1efe","v-2a83e426","v-71fde78e","v-1b0e4f8c","v-3ef9d450","v-77e47a71","v-1cd5ce80","v-7b53d6b2","v-152091b0","v-614501e6","v-00acf522","v-755fee70","v-3efb1842","v-2966c6e4","v-3c4d974f","v-3a240b8c","v-5ac0cf56","v-3192b10c","v-3f2b2588","v-0e29a549","v-424ac8f6","v-2cd1a3ca","v-7664c5fa","v-60fff667","v-4378712f","v-16b6b750","v-9e4f7a5a","v-60544e4e","v-5210fd8e","v-d2fece48","v-191529b7","v-cc3a53f4","v-4d7b907e","v-6bac1857","v-26fca4d5","v-a1ff8004","v-d623d08a","v-d64bd706","v-754f0210","v-ba097eb4","v-2d9f4ba5","v-87f9ec82","v-1497ef65","v-508989f3","v-5257418c","v-7da870a3","v-bcd7447a","v-3f2cd8fb","v-0abdc785","v-6fcbadd8","v-16624cc8","v-00a035a9","v-399e5546","v-daf345c2","v-4d18a9c6","v-1b52ff44","v-1590f620","v-095f9124","v-a659ac38","v-00c390aa","v-5a027c1c","v-2b87c67e","v-05e39b32","v-a95ef8ee","v-af7321c0","v-2b1b7ec1","v-76fb0a5e","v-645bf47e","v-5ad137cd","v-2e60625e","v-cb7b897c","v-72ba803a","v-1369b331","v-645adb07","v-1f0f80e6","v-09586b2c","v-07f61cc9","v-7d9811f0","v-62d595a7","v-c64aa418","v-29d1ef0e","v-a03f7510","v-47537fdc","v-e3abd37e","v-61e20373","v-9f4ff810","v-a895956a","v-a77317a2","v-925f3920","v-689741b0","v-24848cfb","v-017fe212","v-632afeee","v-6a3d55a6","v-7cb1645a","v-1205d2a0","v-bf9d600a","v-e912ba58","v-ef1495f0","v-bcee94b6","v-e6964004","v-36c2f847","v-11582f7c","v-747a5278","v-45447483","v-0ed8c2b6","v-659e17b6","v-583cf311","v-33deec0c","v-21e01b0d","v-973f5452","v-1941575d","v-3f18b850","v-3a976324","v-a1e7d070","v-b5c2201a","v-4cb0a918","v-998003b4","v-0786bde2","v-9320324e","v-e25702a0","v-737185ae","v-8d5f6fee","v-13fe8742","v-c57983ea","v-09b7cf20","v-f15b3dba","v-0c5f5f9c","v-361a70e2","v-049ef682","v-6d90a948","v-7692b860","v-4accd2e6","v-1609d8e9","v-0939f9c2","v-79604bf8","v-2b64c83c","v-d1ce3044","v-1f4e571e","v-b7534df8","v-37c1affd","v-36f16a4d","v-f2aceb80","v-528061dd","v-426b1ca9","v-06da267c","v-a02396ee","v-0bf9122d","v-9c2214f8","v-17e5e2ac","v-248713a5","v-34f80d94","v-1f31eb54","v-73a05a52","v-72ca315d","v-2bee89ec","v-a01d2bb2","v-eeddae12","v-219cbae0","v-7e89ffae","v-9b126160","v-d3fe39f2","v-32678264","v-78cfc7b7","v-46bc9423","v-f875cf44","v-0b0f120b","v-24eba14a","v-baa733fa","v-9baa27c2","v-7de67fc4","v-1b3959e1","v-fe8a603a","v-01406aac","v-306cc50e","v-cd5b6460","v-3125c2ab","v-42b12e49","v-3a0e3b36","v-478df006","v-369f9189","v-6e285e1e","v-29496566","v-3a0b9430","v-34f4c76c","v-3c122d46","v-02e16be0","v-4b9c1d99","v-43e54828","v-902fe038","v-75946033","v-6cf4ecb4","v-07fad500","v-3ef0b394","v-33aa7480","v-dac0d1dc","v-00941b10","v-0dd71b0c","v-7699454c","v-106ad43e","v-76c3c216","v-3623fc05","v-00ff071b","v-51198775","v-213dba9c","v-dd604362","v-e021017c","v-0362c258","v-ccb7dd70","v-7af80658","v-c0e652fc","v-71241dce","v-3666da25","v-95c6342c","v-549a3ab9","v-5f6eadd7","v-5db426fd","v-51c96f18","v-44c2064c","v-2ef7dc02","v-6a52f4ae","v-d3244104","v-57207c61","v-d584ed36","v-49cbb9f9","v-1b65cd68","v-41510350","v-2f71d652","v-8d2e7446","v-0698c03c","v-22a0477e","v-339f9476","v-71241d90","v-765b1b97","v-1f7f0293","v-66254658","v-835049c4","v-7583d4e9","v-7d04115f","v-ac3119e6","v-aa29fc70","v-6f0ebce0","v-28da4efe","v-755f1380","v-18a04a46","v-751027c3","v-8d45377a","v-cc33efae","v-b6223f7e","v-39f65eae","v-71241d52","v-04de7f18","v-2ca54d11","v-731951cc","v-04066f84","v-17e5f48e","v-d54a4614","v-c42e271a","v-4a7628de","v-53c8880c","v-5aad7141","v-ab5e1508","v-0f5fa4fa","v-81126a72","v-66790dab","v-092fc61e","v-09c92e74","v-ac2eca3c","v-418229bc","v-34bd49ba","v-4d92bb04","v-ae8f4894","v-5d30fe45","v-75f467df","v-f6621c66","v-719f9d3f","v-6bf8603e","v-34aff614","v-5c17fa36","v-95fb4b80","v-39d19511","v-0e9831c3","v-7c814d38","v-e4ba63b4","v-77518a00","v-5b2bfecf","v-13799cfe","v-49e744cb","v-22d43eee","v-bace1048","v-2c406bc2","v-71241cd6","v-79bd1f4a","v-3e9942a6","v-28948558","v-5c0dc3f1","v-df69f078","v-dae22064","v-641cf9f1","v-5384c60c","v-8578e31a","v-fb1ca100","v-789867d8","v-2638ec6a","v-780b2f15","v-13488b07","v-420473ed","v-8d980508","v-4899a812","v-31ebb152","v-12780ba1","v-77ee0a50","v-30bfdf82","v-323c6e86","v-25fa894e","v-f7c8afa6","v-25717abd","v-5aeeb3b4","v-de3b8b22","v-5433ba7c","v-3320fa28","v-64097c30","v-7e695b5c","v-91925c40","v-7b0edca8","v-4ea72b99","v-f7090128","v-0311f57c","v-54ce3d17","v-2964dd3c","v-5fdd348e","v-702e3c11","v-51aecb92","v-80859ef8","v-1cb1969f","v-4d07e670","v-8f79538a","v-179a7ba4","v-2762ae00","v-319ae12d","v-29b355de","v-01d2be24","v-3ef6b5c2","v-b121e484","v-819f88e4","v-5a715f17","v-6b2696a0","v-7d04e5f6","v-262983e2","v-7c5409ca","v-30d1e5c6","v-5fee3290","v-03f7d317","v-c4bd02c8","v-3a020ea1","v-378058bb","v-a5639d14","v-02aa1bcb","v-7503515e","v-a27ac06c","v-7f1266d1","v-c0d2447e","v-3bb98840","v-0215d71c","v-769b02c6","v-f8d17c08","v-14498f4b","v-d0688ad6","v-d22f44ac","v-582427ba","v-763ef6d8"]}},star:{"/":{path:"/star/",keys:["v-19fa2dc8","v-b72643ac","v-1943aea9","v-4fe45b30","v-124e0572","v-73fbd21f","v-104b656e"]}},timeline:{"/":{path:"/timeline/",keys:["v-cade1efe","v-2a83e426","v-71fde78e","v-1b0e4f8c","v-3ef9d450","v-77e47a71","v-1cd5ce80","v-7b53d6b2","v-152091b0","v-614501e6","v-00acf522","v-755fee70","v-3efb1842","v-2966c6e4","v-3c4d974f","v-3a240b8c","v-5ac0cf56","v-3192b10c","v-3f2b2588","v-0e29a549","v-424ac8f6","v-2cd1a3ca","v-7664c5fa","v-60fff667","v-4378712f","v-16b6b750","v-9e4f7a5a","v-60544e4e","v-5210fd8e","v-d2fece48","v-191529b7","v-104b656e","v-73fbd21f","v-cc3a53f4","v-4d7b907e","v-6bac1857","v-26fca4d5","v-a1ff8004","v-d623d08a","v-d64bd706","v-754f0210","v-ba097eb4","v-2d9f4ba5","v-87f9ec82","v-1497ef65","v-508989f3","v-5257418c","v-7da870a3","v-bcd7447a","v-3f2cd8fb","v-0abdc785","v-6fcbadd8","v-16624cc8","v-00a035a9","v-399e5546","v-daf345c2","v-4d18a9c6","v-1b52ff44","v-1590f620","v-095f9124","v-a659ac38","v-00c390aa","v-5a027c1c","v-2b87c67e","v-05e39b32","v-a95ef8ee","v-af7321c0","v-2b1b7ec1","v-76fb0a5e","v-645bf47e","v-5ad137cd","v-2e60625e","v-cb7b897c","v-72ba803a","v-1369b331","v-645adb07","v-1f0f80e6","v-09586b2c","v-07f61cc9","v-7d9811f0","v-62d595a7","v-c64aa418","v-29d1ef0e","v-a03f7510","v-47537fdc","v-e3abd37e","v-61e20373","v-9f4ff810","v-a895956a","v-a77317a2","v-925f3920","v-689741b0","v-24848cfb","v-017fe212","v-632afeee","v-6a3d55a6","v-7cb1645a","v-1205d2a0","v-bf9d600a","v-e912ba58","v-ef1495f0","v-bcee94b6","v-e6964004","v-36c2f847","v-11582f7c","v-747a5278","v-45447483","v-0ed8c2b6","v-659e17b6","v-583cf311","v-33deec0c","v-21e01b0d","v-973f5452","v-1941575d","v-3f18b850","v-3a976324","v-a1e7d070","v-b5c2201a","v-4cb0a918","v-998003b4","v-0786bde2","v-9320324e","v-e25702a0","v-737185ae","v-8d5f6fee","v-13fe8742","v-c57983ea","v-09b7cf20","v-f15b3dba","v-0c5f5f9c","v-361a70e2","v-049ef682","v-6d90a948","v-7692b860","v-b72643ac","v-4accd2e6","v-1609d8e9","v-0939f9c2","v-79604bf8","v-2b64c83c","v-d1ce3044","v-19fa2dc8","v-1f4e571e","v-b7534df8","v-37c1affd","v-36f16a4d","v-f2aceb80","v-528061dd","v-426b1ca9","v-06da267c","v-a02396ee","v-0bf9122d","v-9c2214f8","v-17e5e2ac","v-248713a5","v-34f80d94","v-1f31eb54","v-73a05a52","v-72ca315d","v-2bee89ec","v-a01d2bb2","v-eeddae12","v-219cbae0","v-7e89ffae","v-9b126160","v-d3fe39f2","v-32678264","v-78cfc7b7","v-46bc9423","v-f875cf44","v-0b0f120b","v-24eba14a","v-baa733fa","v-9baa27c2","v-7de67fc4","v-1b3959e1","v-fe8a603a","v-01406aac","v-306cc50e","v-cd5b6460","v-3125c2ab","v-42b12e49","v-3a0e3b36","v-478df006","v-369f9189","v-6e285e1e","v-29496566","v-3a0b9430","v-34f4c76c","v-3c122d46","v-02e16be0","v-4b9c1d99","v-43e54828","v-902fe038","v-75946033","v-6cf4ecb4","v-07fad500","v-3ef0b394","v-33aa7480","v-dac0d1dc","v-00941b10","v-0dd71b0c","v-7699454c","v-106ad43e","v-76c3c216","v-3623fc05","v-00ff071b","v-51198775","v-213dba9c","v-dd604362","v-e021017c","v-0362c258","v-ccb7dd70","v-7af80658","v-c0e652fc","v-71241dce","v-3666da25","v-95c6342c","v-549a3ab9","v-5f6eadd7","v-5db426fd","v-51c96f18","v-44c2064c","v-2ef7dc02","v-6a52f4ae","v-d3244104","v-57207c61","v-d584ed36","v-49cbb9f9","v-1b65cd68","v-41510350","v-2f71d652","v-8d2e7446","v-0698c03c","v-22a0477e","v-339f9476","v-71241d90","v-765b1b97","v-1f7f0293","v-66254658","v-835049c4","v-7583d4e9","v-7d04115f","v-ac3119e6","v-aa29fc70","v-6f0ebce0","v-28da4efe","v-755f1380","v-18a04a46","v-751027c3","v-8d45377a","v-cc33efae","v-b6223f7e","v-39f65eae","v-71241d52","v-04de7f18","v-2ca54d11","v-731951cc","v-04066f84","v-17e5f48e","v-d54a4614","v-c42e271a","v-4a7628de","v-53c8880c","v-5aad7141","v-ab5e1508","v-0f5fa4fa","v-81126a72","v-66790dab","v-092fc61e","v-09c92e74","v-ac2eca3c","v-418229bc","v-34bd49ba","v-4d92bb04","v-ae8f4894","v-5d30fe45","v-75f467df","v-f6621c66","v-719f9d3f","v-6bf8603e","v-34aff614","v-5c17fa36","v-95fb4b80","v-39d19511","v-0e9831c3","v-7c814d38","v-e4ba63b4","v-77518a00","v-5b2bfecf","v-13799cfe","v-49e744cb","v-22d43eee","v-bace1048","v-2c406bc2","v-71241cd6","v-79bd1f4a","v-3e9942a6","v-28948558","v-5c0dc3f1","v-df69f078","v-dae22064","v-641cf9f1","v-5384c60c","v-8578e31a","v-fb1ca100","v-789867d8","v-2638ec6a","v-780b2f15","v-13488b07","v-420473ed","v-8d980508","v-4899a812","v-31ebb152","v-12780ba1","v-77ee0a50","v-30bfdf82","v-323c6e86","v-25fa894e","v-f7c8afa6","v-25717abd","v-5aeeb3b4","v-de3b8b22","v-5433ba7c","v-3320fa28","v-64097c30","v-7e695b5c","v-91925c40","v-7b0edca8","v-4ea72b99","v-4fe45b30","v-f7090128","v-0311f57c","v-54ce3d17","v-2964dd3c","v-5fdd348e","v-702e3c11","v-51aecb92","v-80859ef8","v-1cb1969f","v-4d07e670","v-8f79538a","v-179a7ba4","v-2762ae00","v-1943aea9","v-319ae12d","v-29b355de","v-01d2be24","v-3ef6b5c2","v-b121e484","v-819f88e4","v-5a715f17","v-6b2696a0","v-7d04e5f6","v-262983e2","v-7c5409ca","v-30d1e5c6","v-5fee3290","v-03f7d317","v-124e0572","v-c4bd02c8","v-3a020ea1","v-378058bb","v-a5639d14","v-02aa1bcb","v-7503515e","v-a27ac06c","v-7f1266d1","v-c0d2447e","v-3bb98840","v-0215d71c","v-769b02c6","v-f8d17c08","v-14498f4b","v-d0688ad6","v-d22f44ac","v-582427ba","v-763ef6d8"]}}},Bo=Y(Sb),Bp=(n="")=>{const e=pn(),s=jn(),a=Ae();return x(()=>{var t;const l=n||((t=xn().value.blog)==null?void 0:t.key)||"";if(!l)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const o=s.getRoutes();if(!Bo.value[l])throw new Error(`useBlogCategory: key ${l} is invalid`);const c=Bo.value[l][a.value],p={path:c.path,map:{}};for(const d in c.map){const u=c.map[d];p.map[d]={path:u.path,items:[]};for(const m of u.keys){const h=o.find(({name:b})=>b===m);if(h){const b=_a(s,h.path);p.map[d].items.push({path:b.path,info:b.meta})}}e.value.path===u.path&&(p.currentItems=p.map[d].items)}return p})},Vo=Y($b),mt=(n="")=>{const e=jn(),s=Ae();return x(()=>{var a;const t=n||((a=xn().value.blog)==null?void 0:a.key)||"";if(!t)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!Vo.value[t])throw new Error(`useBlogType: key ${n} is invalid`);const l=e.getRoutes(),o=Vo.value[t][s.value],c={path:o.path,items:[]};for(const p of o.keys){const d=l.find(({name:u})=>u===p);if(d){const u=_a(e,d.path);c.items.push({path:u.path,info:u.meta})}}return c})};const Mb="/assets/hero-197a9d2d.jpg",Vp=Symbol.for("categoryMap"),xa=()=>{const n=kn(Vp);if(!n)throw new Error("useCategoryMap() is called without provider.");return n},Fb=()=>{const n=Bp("category");he(Vp,n)},Aa=()=>{const n=rs(),e=rn();return x(()=>({...n.value.blog,...e.value.blog}))},Cp=Symbol.for("tagMap"),wa=()=>{const n=kn(Cp);if(!n)throw new Error("useTagMap() is called without provider.");return n},jb=()=>{const n=Bp("tag");he(Cp,n)},qb=n=>{const e=rn();return x(()=>{const{[En.author]:s}=n.value;return s?ca(s):s===!1?[]:ca(e.value.author,!1)})},zb=n=>{const e=xa();return x(()=>kc(n.value[En.category]).map(s=>({name:s,path:e.value.map[s].path})))},Nb=n=>{const e=wa();return x(()=>fc(n.value[En.tag]).map(s=>({name:s,path:e.value.map[s].path})))},Hb=n=>x(()=>{const{[En.date]:e}=n.value;return zi(e)}),Ub=n=>{const e=Cs(n,"info"),s=Aa(),a=qb(e),t=zb(e),l=Nb(e),o=Hb(e),c=Yc(),p=x(()=>({author:a.value,category:t.value,date:o.value,localizedDate:e.value[En.localizedDate]||"",tag:l.value,isOriginal:e.value[En.isOriginal]||!1,readingTime:e.value[En.readingTime]||null,readingTimeLocale:e.value[En.readingTime]&&c.value?Qc(e.value[En.readingTime],c.value):null,pageview:n.path})),d=x(()=>s.value.articleInfo);return{info:p,items:d}},Sp=Symbol(""),Pa=()=>{const n=kn(Sp);if(!n)throw new Error("useArticles() is called without provider.");return n},Gb=()=>{const n=mt("article");he(Sp,n)},$p=Symbol(""),nl=()=>{const n=kn($p);if(!n)throw new Error("useStars() is called without provider.");return n},Kb=()=>{const n=mt("star");he($p,n)},Mp=Symbol(""),el=()=>{const n=kn(Mp);if(!n)throw new Error("useTimelines() is called without provider.");return n},Wb=()=>{const n=mt("timeline"),e=x(()=>{const s=[];return n.value.items.forEach(({info:a,path:t})=>{const l=zi(a[En.date]),o=l==null?void 0:l.getFullYear(),c=l?l.getMonth()+1:null,p=l==null?void 0:l.getDate();o&&c&&p&&((!s[0]||s[0].year!==o)&&s.unshift({year:o,items:[]}),s[0].items.push({date:`${c}/${p}`,info:a,path:t}))}),{...n.value,config:s.reverse()}});he(Mp,e)},Jb=()=>{Gb(),Fb(),Kb(),jb(),Wb()};var Qb=S({name:"SocialMedia",setup(){const n=Aa(),e=Fs(),s=x(()=>{const a=n.value.medias;return a?ba(a).map(([t,l])=>({name:t,icon:Cb[t],url:l})):[]});return()=>s.value.length?r("div",{class:"vp-social-medias"},s.value.map(({name:a,icon:t,url:l})=>r("a",{class:"vp-social-media",href:l,rel:"noopener noreferrer",target:"_blank","aria-label":a,...e.value?{}:{"data-balloon-pos":"up"},innerHTML:t}))):null}}),sl=S({name:"BloggerInfo",setup(){const n=Aa(),e=ma(),s=rn(),a=Pa(),t=xa(),l=wa(),o=el(),c=ga(),p=x(()=>{var h;return n.value.name||((h=ca(s.value.author)[0])==null?void 0:h.name)||e.value.title}),d=x(()=>n.value.avatar||s.value.logo),u=x(()=>s.value.blogLocales),m=x(()=>n.value.intro);return()=>{const{article:h,category:b,tag:g,timeline:A}=u.value,w=[[a.value.path,a.value.items.length,h],[t.value.path,ye(t.value.map).length,b],[l.value.path,ye(l.value.map).length,g],[o.value.path,o.value.items.length,A]];return r("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[r("div",{class:"vp-blogger",...m.value?{style:{cursor:"pointer"},"aria-label":u.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>c(m.value)}:{}},[d.value?r("img",{class:["vp-blogger-avatar",{round:n.value.roundAvatar}],src:In(d.value),property:"image",alt:"Blogger Avatar"}):null,p.value?r("div",{class:"vp-blogger-name",property:"name"},p.value):null,n.value.description?r("div",{class:"vp-blogger-description",innerHTML:n.value.description}):null,m.value?r("meta",{property:"url",content:In(m.value)}):null]),r("div",{class:"vp-blog-counts"},w.map(([k,E,R])=>r($n,{class:"vp-blog-count",to:k},()=>[r("div",{class:"count"},E),r("div",R)]))),r(Qb)])}}});const ri=()=>r(hn,{name:"category"},()=>r("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));ri.displayName="CategoryIcon";const ci=()=>r(hn,{name:"tag"},()=>r("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));ci.displayName="TagIcon";const al=()=>r(hn,{name:"timeline"},()=>r("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));al.displayName="TimelineIcon";const Fp=()=>r(hn,{name:"slides"},()=>r("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));Fp.displayName="SlideIcon";const jp=()=>r(hn,{name:"sticky"},()=>[r("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);jp.displayName="StickyIcon";const nt=()=>r(hn,{name:"article"},()=>r("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));nt.displayName="ArticleIcon";const qp=()=>r(hn,{name:"book"},()=>r("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));qp.displayName="BookIcon";const zp=()=>r(hn,{name:"link"},()=>r("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));zp.displayName="LinkIcon";const Np=()=>r(hn,{name:"project"},()=>r("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));Np.displayName="ProjectIcon";const Hp=()=>r(hn,{name:"friend"},()=>r("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));Hp.displayName="FriendIcon";const pi=()=>r(hn,{name:"slide-down"},()=>r("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));pi.displayName="SlideDownIcon";const Up=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});Up.displayName="EmptyIcon";const Gp=()=>r(hn,{name:"lock"},()=>r("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Gp.displayName="LockIcon";var Yb=S({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(n,{slots:e}){const s=Cs(n,"info"),{info:a,items:t}=Ub(n);return()=>{var l,o,c;const{[En.title]:p,[En.type]:d,[En.isEncrypted]:u=!1,[En.cover]:m,[En.excerpt]:h,[En.sticky]:b}=s.value,g=a.value;return r("div",{class:"vp-article-wrapper"},r("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((l=e.cover)==null?void 0:l.call(e,{cover:m}))||(m?[r("img",{class:"vp-article-cover",src:In(m)}),r("meta",{property:"image",content:In(m)})]:[]),b?r(jp):null,r($n,{to:n.path},()=>{var A;return((A=e.title)==null?void 0:A.call(e,{title:p,isEncrypted:u,type:d}))||r("header",{class:"vp-article-title"},[u?r(Gp):null,d===Zc.slide?r(Fp):null,r("span",{property:"headline"},p)])}),((o=e.excerpt)==null?void 0:o.call(e,{excerpt:h}))||(h?r("div",{class:"vp-article-excerpt",innerHTML:h}):null),r("hr",{class:"vp-article-hr"}),((c=e.info)==null?void 0:c.call(e,{info:g}))||r(Lp,{info:g,...t.value?{items:t.value}:{}})]))}}}),Xb=S({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(n,{emit:e}){let s;const a=rn(),t=Y(""),l=x(()=>a.value.paginationLocales),o=x(()=>Math.ceil(n.total/n.perPage)),c=x(()=>!!o.value&&o.value!==1),p=x(()=>o.value<7?!1:n.current>4),d=x(()=>o.value<7?!1:n.current<o.value-3),u=x(()=>{const{current:b}=n;let g=1,A=o.value;const w=[];o.value>=7&&(b<=4&&b<o.value-3?(g=1,A=5):b>4&&b>=o.value-3?(A=o.value,g=o.value-4):o.value>7&&(g=b-2,A=b+2));for(let k=g;k<=A;k++)w.push(k);return w}),m=b=>e("updateCurrentPage",b),h=b=>{const g=parseInt(b);g<=o.value&&g>0?m(g):s.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${l.value.errorText.replace(/\$page/g,o.value.toString())}`)};return yn(()=>{s=new Rh}),()=>r("div",{class:"vp-pagination"},c.value?r("div",{class:"vp-pagination-list"},[r("div",{class:"vp-pagination-number "},[n.current>1?r("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>m(n.current-1)},l.value.prev):null,p.value?[r("div",{role:"navigation",onClick:()=>m(1)},1),r("div",{class:"ellipsis"},"...")]:null,u.value.map(b=>r("div",{key:b,class:{active:n.current===b},role:"navigation",onClick:()=>m(b)},b)),d.value?[r("div",{class:"ellipsis"},"..."),r("div",{role:"navigation",onClick:()=>m(o.value)},o.value)]:null,n.current<o.value?r("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>m(n.current+1)},l.value.next):null]),r("div",{class:"vp-pagination-nav"},[r("label",{for:"navigation-text"},`${l.value.navigate}: `),r("input",{id:"navigation-text",value:t.value,onInput:({target:b})=>{t.value=b.value},onKeydown:b=>{b.key==="Enter"&&(b.preventDefault(),h(t.value))}}),r("button",{class:"vp-pagination-button",role:"navigation",title:l.value.action,onClick:()=>h(t.value)},l.value.action)])]):[])}}),tl=S({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(n){const e=we(),s=jn(),a=Aa(),t=Y(1),l=x(()=>a.value.articlePerPage||10),o=x(()=>n.items.slice((t.value-1)*l.value,t.value*l.value)),c=p=>{t.value=p;const d={...e.query};d.page===p.toString()||p===1&&!d.page||(p===1?delete d.page:d.page=p.toString(),s.push({path:e.path,query:d}))};return yn(()=>{const{page:p}=e.query;c(p?Number(p):1),on(t,()=>{const d=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,d)},100)}),on(()=>e.query,({page:d})=>{c(d?Number(d):1)})}),()=>r("div",{id:"article-list",class:"vp-article-list"},o.value.length?[...o.value.map(({info:p,path:d},u)=>r(bn,{appear:!0,delay:u*.04},()=>r(Yb,{key:d,info:p,path:d}))),r(Xb,{current:t.value,perPage:l.value,total:n.items.length,onUpdateCurrentPage:c})]:r(Up))}}),il=S({name:"CategoryList",setup(){const n=pn(),e=xa();return()=>r("ul",{class:"vp-category-list"},ba(e.value.map).map(([s,{path:a,items:t}])=>r("li",{class:["vp-category",`vp-category${ut(s,9)}`,{active:a===n.value.path}]},r($n,{to:a},()=>[s,r("span",{class:"count"},t.length)]))))}}),ll=S({name:"TagList",setup(){const n=xn(),e=wa(),s=a=>{var t;return a===((t=n.value.blog)==null?void 0:t.name)};return()=>r("ul",{class:"tag-list-wrapper"},ba(e.value.map).map(([a,{path:t,items:l}])=>r("li",{class:["tag",`tag${ut(a,9)}`,{active:s(a)}]},r($n,{to:t},()=>[a,r("span",{class:"tag-num"},l.length)]))))}}),Zb=S({name:"TimelineList",setup(){const n=rn(),e=el(),s=ga(),a=x(()=>n.value.blogLocales.timeline);return()=>r("div",{class:"timeline-list-wrapper"},[r("div",{class:"timeline-list-title",onClick:()=>s(e.value.path)},[r(al),r("span",{class:"num"},e.value.items.length),a.value]),r("hr"),r("div",{class:"timeline-content"},r("ul",{class:"timeline-list"},e.value.config.map(({year:t,items:l},o)=>r(bn,{appear:!0,delay:.08*(o+1)},()=>r("li",[r("h3",{class:"timeline-year"},t),r("ul",{class:"timeline-year-wrapper"},l.map(({date:c,info:p,path:d})=>r("li",{class:"timeline-item"},[r("span",{class:"timeline-date"},c),r($n,{class:"timeline-title",to:d},()=>p[En.title])])))])))))])}}),Kp=S({name:"InfoList",setup(){const n=rn(),e=Pa(),s=xa(),a=x(()=>ye(s.value.map).length),t=nl(),l=wa(),o=x(()=>ye(l.value.map).length),c=ga(),p=Y("article"),d=x(()=>n.value.blogLocales),u=[["article",nt],["category",ri],["tag",ci],["timeline",al]];return()=>r("div",{class:"vp-blog-infos"},[r("div",{class:"vp-blog-type-switcher"},u.map(([m,h])=>r("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{p.value=m}},r("div",{class:["icon-wrapper",{active:p.value===m}],"aria-label":d.value[m],"data-balloon-pos":"up"},r(h))))),r(bn,()=>p.value==="article"?r("div",{class:"vp-sticky-article-wrapper"},[r("div",{class:"title",onClick:()=>c(e.value.path)},[r(nt),r("span",{class:"num"},e.value.items.length),d.value.article]),r("hr"),r("ul",{class:"vp-sticky-articles"},t.value.items.map(({info:m,path:h},b)=>r(bn,{appear:!0,delay:.08*(b+1)},()=>r("li",{class:"vp-sticky-article"},r($n,{to:h},()=>m[En.title])))))]):p.value==="category"?r("div",{class:"vp-category-wrapper"},[a.value?r("div",{class:"title",onClick:()=>c(s.value.path)},[r(ri),r("span",{class:"num"},a.value),d.value.category]):null,r("hr"),r(bn,{delay:.04},()=>r(il))]):p.value==="tag"?r("div",{class:"vp-tag-wrapper"},[o.value?r("div",{class:"title",onClick:()=>c(l.value.path)},[r(ci),r("span",{class:"num"},o.value),d.value.tag]):null,r("hr"),r(bn,{delay:.04},()=>r(ll))]):r(bn,()=>r(Zb)))])}}),ht=S({name:"BlogWrapper",slots:Object,setup(n,{slots:e}){const{isMobile:s}=Ea();return()=>[r(Zi),r(Yi,{noSidebar:!0,noToc:!0},{default:()=>e.default(),navScreenBottom:()=>r(sl),...s.value?{sidebar:()=>r(Kp)}:{}})]}});const Wp=()=>r("aside",{class:"vp-blog-info-wrapper"},[r(bn,()=>r(sl)),r(bn,{delay:.04},()=>r(Kp))]);Wp.displayName="InfoPanel";var bt=Wp,n_=S({name:"BlogPage",components:{CategoryList:il,TagList:ll},setup(){const n=pn(),e=xn(),s=xa(),a=wa(),t=x(()=>e.value.blog||{}),l=x(()=>{const{key:c=""}=t.value;return c==="category"?"CategoryList":c==="tag"?"TagList":null}),o=x(()=>{const{name:c="",key:p=""}=t.value;return p==="category"?c?s.value.map[c].items:[]:p==="tag"?c?a.value.map[c].items:[]:[]});return()=>r(ht,()=>r("div",{class:"vp-page vp-blog"},r("div",{class:"blog-page-wrapper"},[r("main",{id:"main-content",class:"vp-blog-main"},[r(bn,()=>l.value?r(Yn(l.value)):null),t.value.name?r(bn,{appear:!0,delay:.24},()=>r(tl,{key:n.value.path,items:o.value})):null]),r(bn,{delay:.16},()=>r(bt,{key:"blog"}))])))}}),e_=S({name:"BlogHero",slots:Object,setup(n,{slots:e}){const s=xn(),a=ma(),t=le(),l=x(()=>s.value.heroFullScreen??!1),o=x(()=>{const{heroText:p,heroImage:d,heroImageDark:u,heroAlt:m,heroImageStyle:h,tagline:b}=s.value;return{text:p??a.value.title??"Hello",image:d?In(d):null,imageDark:u?In(u):null,heroStyle:h,alt:m||p||"hero image",tagline:b??"",isFullScreen:l.value}}),c=x(()=>{const{bgImage:p,bgImageDark:d,bgImageStyle:u}=s.value;return{image:mn(p)?In(p):p===!1?null:Mb,imageDark:mn(d)?In(d):null,bgStyle:u,isFullScreen:l.value}});return()=>{var p,d;return s.value.hero===!1?null:r("div",{ref:t,class:["vp-blog-hero",{fullscreen:l.value,"no-bg":!c.value.image}]},[((p=e.heroBg)==null?void 0:p.call(e,c.value))||[c.value.image?r("div",{class:["vp-blog-mask",{light:c.value.imageDark}],style:[{background:`url(${c.value.image}) center/cover no-repeat`},c.value.bgStyle]}):null,c.value.imageDark?r("div",{class:"vp-blog-mask dark",style:[{background:`url(${c.value.imageDark}) center/cover no-repeat`},c.value.bgStyle]}):null],((d=e.heroInfo)==null?void 0:d.call(e,o.value))||[r(bn,{appear:!0,type:"group",delay:.04},()=>[o.value.image?r("img",{key:"light",class:["vp-blog-hero-image",{light:o.value.imageDark}],style:o.value.heroStyle,src:o.value.image,alt:o.value.alt}):null,o.value.imageDark?r("img",{key:"dark",class:"vp-blog-hero-image dark",style:o.value.heroStyle,src:o.value.imageDark,alt:o.value.alt}):null]),r(bn,{appear:!0,delay:.08},()=>o.value.text?r("h1",{class:"vp-blog-hero-title"},o.value.text):null),r(bn,{appear:!0,delay:.12},()=>o.value.tagline?r("p",{class:"vp-blog-hero-description",innerHTML:o.value.tagline}):null)],o.value.isFullScreen?r("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:t.value.clientHeight,behavior:"smooth"})}},[r(pi),r(pi)]):null])}}});const s_=["link","article","book","project","friend"];var a_=S({name:"ProjectPanel",components:{ArticleIcon:nt,BookIcon:qp,FriendIcon:Hp,LinkIcon:zp,ProjectIcon:Np},setup(){const n=xn(),e=Fs(),s=ga(),a=(t="",l="icon")=>s_.includes(t)?r(Yn(`${t}-icon`)):ls(t)?r("img",{class:"vp-project-image",src:t,alt:l}):vt(t)?r("img",{class:"vp-project-image",src:In(t),alt:l}):r(Nn,{icon:t});return()=>{var t;return(t=n.value.projects)!=null&&t.length?r("div",{class:"vp-project-panel"},n.value.projects.map(({icon:l,link:o,name:c,desc:p},d)=>r("div",{class:["vp-project-card",{[`project${d%9}`]:!e.value}],onClick:()=>s(o)},[a(l,c),r("div",{class:"vp-project-name"},c),r("div",{class:"vp-project-desc"},p)]))):null}}}),t_=S({name:"BlogHome",setup(){const n=Pa();return()=>r("div",{class:"vp-page vp-blog"},[r(e_),r("div",{class:"blog-page-wrapper"},[r("main",{id:"main-content",class:"vp-blog-main"},[r(bn,{appear:!0,delay:.16},()=>r(a_)),r(bn,{appear:!0,delay:.24},()=>r(tl,{items:n.value.items}))]),r(bn,{appear:!0,delay:.16},()=>r(bt,{key:"blog"}))]),r(bn,{appear:!0,delay:.28},()=>r(Xi))])}}),i_=S({name:"BlogHome",setup(){return()=>r(ht,()=>r(t_))}}),Jp=S({name:"ArticleType",setup(){const n=pn(),e=Ae(),s=rn(),a=Pa(),t=nl(),l=x(()=>{const o=s.value.blogLocales;return[{text:o.all,path:a.value.path},{text:o.star,path:t.value.path},...[].map(({key:c,path:p})=>({text:o[c],path:p.replace(/^\//,e.value)}))]});return()=>r("ul",{class:"vp-article-type-wrapper"},l.value.map(o=>r("li",{class:["vp-article-type",{active:o.path===n.value.path}]},r($n,{to:o.path},()=>o.text))))}}),l_=S({name:"BlogPage",setup(){const n=mt(),e=xn(),s=pn(),a=Pa(),t=nl(),l=x(()=>{const{key:o="",type:c}=e.value.blog||{};return o==="star"?t.value.items:c==="type"&&o?n.value.items:a.value.items});return()=>r(ht,()=>r("div",{class:"vp-page vp-blog"},r("div",{class:"blog-page-wrapper"},[r("main",{id:"main-content",class:"vp-blog-main"},[r(bn,()=>r(Jp)),r(bn,{appear:!0,delay:.24},()=>r(tl,{key:s.value.path,items:l.value}))]),r(bn,{delay:.16},()=>r(bt,{key:"blog"}))])))}}),o_=S({name:"TimelineItems",setup(){const n=Aa(),e=rn(),s=el(),a=x(()=>n.value.timeline||e.value.blogLocales.timelineTitle),t=x(()=>s.value.config.map(({year:l})=>({title:l.toString(),level:2,slug:l.toString(),children:[]})));return()=>r("div",{class:"timeline-wrapper"},r("ul",{class:"timeline-content"},[r(bn,()=>r("li",{class:"motto"},a.value)),r(Tp,{items:t.value}),s.value.config.map(({year:l,items:o},c)=>r(bn,{appear:!0,delay:.08*(c+1),type:"group"},()=>[r("h3",{key:"title",id:l,class:"timeline-year-title"},r("span",l)),r("li",{key:"content",class:"timeline-year-list"},[r("ul",{class:"timeline-year-wrapper"},o.map(({date:p,info:d,path:u})=>r("li",{class:"timeline-item"},[r("span",{class:"timeline-date"},p),r($n,{class:"timeline-title",to:u},()=>d[En.title])])))])]))]))}}),r_=S({name:"Timeline",components:{ArticleType:Jp,CategoryList:il,TagList:ll},setup(){return()=>r(ht,()=>r("div",{class:"vp-page vp-blog"},r("div",{class:"blog-page-wrapper"},[r("main",{id:"main-content",class:"vp-blog-main"},[r(bn,{appear:!0,delay:.24},()=>r(o_))]),r(bn,{delay:.16},()=>r(bt,{key:"blog"}))])))}});C1(Nn);const c_=oe({enhance:({app:n,router:e})=>{const{scrollBehavior:s}=e.options;e.options.scrollBehavior=async(...a)=>(await Ip().wait(),s(...a)),C0(n),n.component("HopeIcon",Nn),n.component("VPLink",$n),n.component("BloggerInfo",sl)},setup:()=>{S0(),j0(),Jb()},layouts:{Layout:Ob,NotFound:Vb,BlogCategory:n_,BlogHome:i_,BlogType:l_,Timeline:r_}}),p_=n=>{const e=Fn("keydown",s=>{const a=s.key==="k"&&(s.ctrlKey||s.metaKey);!(s.key==="/")&&!a||(s.preventDefault(),n(),e())})},d_=n=>n.button===1||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey,u_=()=>{const n=jn();return{hitComponent:({hit:e,children:s})=>({type:"a",ref:void 0,constructor:void 0,key:void 0,props:{href:e.url,onClick:a=>{d_(a)||(a.preventDefault(),n.push(Kl(e.url,"/")))},children:s},__v:null}),navigator:{navigate:({itemUrl:e})=>{n.push(Kl(e,"/"))}},transformSearchClient:e=>{const s=Mc(e.search,500);return{...e,search:async(...a)=>s(...a)}}}},v_=(n=[],e)=>[`lang:${e}`,...X(n)?n:[n]],m_=({buttonText:n="Search",buttonAriaLabel:e=n}={})=>`<button type="button" class="DocSearch DocSearch-Button" aria-label="${e}"><span class="DocSearch-Button-Container"><svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${n}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"><svg width="15" height="15" class="DocSearch-Control-Key-Icon"><path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="square"></path></svg></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`,h_=16,Qp=()=>{if(document.querySelector(".DocSearch-Modal"))return;const n=new Event("keydown");n.key="k",n.metaKey=!0,window.dispatchEvent(n),setTimeout(Qp,h_)},b_=n=>{const e="algolia-preconnect";(window.requestIdleCallback||setTimeout)(()=>{if(document.head.querySelector(`#${e}`))return;const a=document.createElement("link");a.id=e,a.rel="preconnect",a.href=`https://${n}-dsn.algolia.net`,a.crossOrigin="",document.head.appendChild(a)})},__={appId:"7KISWN5OHG",apiKey:"6c1bbe311321e4d1c0596978f5cabad9",indexName:"clay-wangzhi",locales:{"/":{placeholder:"搜索文档",translations:{button:{buttonText:"搜索",buttonAriaLabel:"搜索"},modal:{searchBox:{resetButtonTitle:"清除查询条件",resetButtonAriaLabel:"清除查询条件",cancelButtonText:"取消",cancelButtonAriaLabel:"取消"},startScreen:{recentSearchesTitle:"搜索历史",noRecentSearchesText:"没有搜索历史",saveRecentSearchButtonTitle:"保存至搜索历史",removeRecentSearchButtonTitle:"从搜索历史中移除",favoriteSearchesTitle:"收藏",removeFavoriteSearchButtonTitle:"从收藏中移除"},errorScreen:{titleText:"无法获取结果",helpText:"你可能需要检查你的网络连接"},footer:{selectText:"选择",navigateText:"切换",closeText:"关闭",searchByText:"搜索提供者"},noResultsScreen:{noResultsText:"无法找到相关结果",suggestedQueryText:"你可以尝试查询",reportMissingResultsText:"你认为该查询应该有结果？",reportMissingResultsLinkText:"点击反馈"}}}}}};i(()=>import("./style-e9220a04.js"),[]),i(()=>import("./docsearch-1d421ddb.js"),[]);const k_=S({name:"Docsearch",props:{containerId:{type:String,required:!1,default:"docsearch-container"},options:{type:Object,required:!1,default:()=>__}},setup(n){const e=u_(),s=$i(),a=Ae(),t=Y(!1),l=Y(!1),o=x(()=>{var d;return{...n.options,...(d=n.options.locales)==null?void 0:d[a.value]}}),c=async()=>{var u;const{default:d}=await i(()=>import("./index-99a3937c.js"),[]);d({...e,...o.value,container:`#${n.containerId}`,searchParameters:{...o.value.searchParameters,facetFilters:v_((u=o.value.searchParameters)==null?void 0:u.facetFilters,s.value)}}),t.value=!0},p=()=>{l.value||t.value||(l.value=!0,c(),Qp(),on(a,c))};return p_(p),yn(()=>b_(o.value.appId)),()=>{var d;return[r("div",{id:n.containerId,style:{display:t.value?"block":"none"}}),t.value?null:r("div",{onClick:p,innerHTML:m_((d=o.value.translations)==null?void 0:d.button)})]}}}),f_=oe({enhance({app:n}){n.component("Docsearch",k_)}}),ja=[sm,T1,V1,F1,z1,G1,Y1,t0,l0,m0,A0,c_,f_],g_=[["v-8daa1a0e","/",{y:"h",t:"主页",i:"home"},["/index.html","/README.md"]],["v-7664c5fa","/basic/",{d:1681909711e3,e:`<h1> 基础知识</h1>
`,r:{minutes:.01,words:4},y:"a",t:"基础知识"},["/basic/index.html","/basic/readme.md"]],["v-60fff667","/build/activemq-install.html",{d:1681909711e3,c:"常见服务的搭建",g:["activemq"],e:`<h1> activemq5.15.9集群搭建步骤</h1>
<h3> 下载解压软件</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt
wget https://www-eu.apache.org/dist/activemq/5.15.9/apache-activemq-5.15.9-bin.tar.gz
tar -xvf apache-activemq-5.15.9-bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.01,words:603},y:"a",t:"activemq5.15.9集群搭建步骤"},["/build/activemq-install","/build/activemq-install.md"]],["v-4378712f","/build/centos-jdk.html",{d:1681909711e3,c:"常见服务的搭建",g:["jdk"],e:`<h1> Linux下配置jdk的环境变量</h1>
<p>Hello everyone, let's learn jdk together！</p>
<h3> yum安装</h3>
<p>yum 查询可以安装的软件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum list | grep jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.85,words:254},y:"a",t:"Linux下配置jdk的环境变量"},["/build/centos-jdk","/build/centos-jdk.md"]],["v-16b6b750","/build/fastdfs-install.html",{d:1681909711e3,c:"常见服务的搭建",g:["fastdfs"],e:`<h1> 分布式FastDfs+nginx缓存高可用集群构建</h1>
<h3> 介绍</h3>
<p>FastDFS：开源的高性能分布式文件系统；主要功能包括：文件存储，文件同步和文件访问，以及高容量和负载平衡</p>
<p>FastDFS：角色：跟踪服务器(Tracker Server)、存储服务器(Storage Server)和客户端(Client)</p>
<ol>
<li>Tracker Server: 跟踪服务器，主要做调度工作，起到均衡的作用；负责管理所有的storage server和group，每个storage在启动后会连接 Tracker，告知自己所属 group 等信息，并保持周期性心跳。多个Tracker之间是对等关系，不存在单点故障</li>
<li>Storage Server: 存储服务器，主要提供容量和备份服务；以 group 为单位，每个 group 内可以有多台 storage server（高可用），组内的storage server上的数据互为备份</li>
<li>Client:客户端，上传下载数据的服务器</li>
</ol>`,r:{minutes:7.61,words:2284},y:"a",t:"分布式FastDfs+nginx缓存高可用集群构建"},["/build/fastdfs-install","/build/fastdfs-install.md"]],["v-763ef6d8","/build/hexo-blog.html",{d:14652216e5,l:"2016年6月6日",c:"常见服务的搭建",g:"博客",e:`<p>​	本文主要讲解博客的搭建过程，next主题优化，next配置文件详解等。<img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/blogchongjianfengmian.jpg" alt=""></p>
<!--more-->
<h2> hexo+github的搭建过程2</h2>
<h3> 准备安装软件</h3>
<p><strong>依次安装</strong></p>
<ul>
<li><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a></li>
<li><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a></li>
</ul>`,r:{minutes:7.48,words:2245},y:"a",t:"hexo(next)+github博客的搭建"},["/build/hexo-blog","/build/hexo-blog.md"]],["v-d22f44ac","/build/linux-python.html",{d:1506546e6,l:"2017年9月27日",c:"常见服务的搭建",e:`<p>centos6.5下安装python3.6、pip、ipython</p>
<!--more-->
<h2> 安装依赖包</h2>
<p>test</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel libffi-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.95,words:285},y:"a",t:"centos6.5下安装python3.6、pip、ipython"},["/build/linux-python","/build/linux-python.md"]],["v-a5639d14","/build/maven-nexus.html",{d:1569618e6,l:"2019年9月27日",c:"常见服务的搭建",g:"nexus",e:`<h1> maven私服nexus3.x环境配置</h1>
<blockquote>
<p>转载自：<a href="https://www.xncoding.com/2017/09/02/tool/nexus.html" target="_blank" rel="noopener noreferrer">maven私服nexus3.x环境配置 | 飞污熊博客</a></p>
</blockquote>
<p>私服是指私有服务器，是架设在局域网的一种特殊的远程仓库，目的是代理远程仓库及部署第三方构建。 有了私服之后，当 Maven 需要下载构件时，直接请求私服，私服上存在则下载到本地仓库； 否则，私服请求外部的远程仓库，将构件下载到私服，再提供给本地仓库下载。</p>`,r:{minutes:8.58,words:2573},y:"a",t:"maven私服nexus3.x环境配置"},["/build/maven-nexus","/build/maven-nexus.md"]],["v-9e4f7a5a","/build/rabbitmq-install.html",{d:1681909711e3,c:"常见服务的搭建",g:["rabbitmq"],e:`<h1> centos7安装rabbitmq-3.7.9</h1>
<p>安装方式：rpm包安装</p>
<p>系统版本: centos7.x</p>
<h2> 安装erlang</h2>
<p>安装<a href="https://github.com/rabbitmq/erlang-rpm" target="_blank" rel="noopener noreferrer">erlang-rpm</a>包，该包经过RabbitMQ官方处理，去掉了一些无用的依赖，只保存运行RabbitMQ所需要的Erlang模块。</p>
<p>这里下载的版本为21.2</p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/erlang.png" alt=""></p>`,r:{minutes:1.03,words:310},y:"a",t:"centos7安装rabbitmq-3.7.9"},["/build/rabbitmq-install","/build/rabbitmq-install.md"]],["v-60544e4e","/build/rocketmq-install.html",{d:1681909711e3,c:"常见服务的搭建",g:["rocketmq"],e:`<h1> rocketmq集群的搭建</h1>
<p>环境</p>
<ul>
<li>JDK1.8</li>
<li>maven3.6.0</li>
<li>centos7.6主机两台</li>
</ul>
<h2> 下载解压</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://mirrors.tuna.tsinghua.edu.cn/apache/rocketmq/4.6.0/rocketmq-all-4.6.0-bin-release.zip
<span class="token function">unzip</span> rocketmq-all-4.6.0-bin-release.zip
<span class="token function">mv</span> rocketmq-all-4.6.0-bin-release /usr/local/rocketmq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.56,words:468},y:"a",t:"rocketmq集群的搭建"},["/build/rocketmq-install","/build/rocketmq-install.md"]],["v-5210fd8e","/build/zookeeper-install.html",{d:1681909711e3,c:"常见服务的搭建",g:["zookeeper"],e:`<h1> zookeeper3.4.14集群搭建步骤</h1>
<h3> 下载解压</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt
wget https://mirrors.tuna.tsinghua.edu.cn/apache/zookeeper/zookeeper-3.4.14/zookeeper-3.4.14.tar.gz
tar -xvf zookeeper-3.4.14.tar.gz 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.16,words:347},y:"a",t:"zookeeper3.4.14集群搭建步骤"},["/build/zookeeper-install","/build/zookeeper-install.md"]],["v-71fde78e","/devops/",{d:1681912236e3,e:`<h1> 自动化工具</h1>
`,r:{minutes:.02,words:5},y:"a",t:"自动化工具"},["/devops/index.html","/devops/readme.md"]],["v-d2fece48","/git/git-basic.html",{d:1681909711e3,g:["Git"],e:`<h1> git的基本使用</h1>
<h2> 由来</h2>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/git.png" alt="git"></p>
<blockquote>
<p>要不说人家是大佬呢，一言不合就自己写一个👍</p>
</blockquote>
<h2> 安装</h2>
<p>下载对应操作系统的 Git 客户端版本 https://git-scm.com/downloads</p>
<h3> Linux</h3>
<p>在<code>centos</code>上安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ yum <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:12.9,words:3869},y:"a",t:"git的基本使用"},["/git/git-basic","/git/git-basic.md"]],["v-191529b7","/git/git-commit-message.html",{d:1681909711e3,g:["Git"],e:`<h1> Commit message 和 Change log 编写指南</h1>
<p>Git 每次提交代码，都要写 Commit message（提交说明），否则就不允许提交。</p>
<blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"hello world"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>`,r:{minutes:5.49,words:1646},y:"a",t:"Commit message 和 Change log 编写指南"},["/git/git-commit-message","/git/git-commit-message.md"]],["v-4899a812","/monitor/grafana-y.html",{d:1591056e6,l:"2020年6月2日",c:"监控",g:["grafana"],e:`<h1> Grafana Y轴设置</h1>
<p>Y<strong>轴要有负数如何设置</strong></p>
<p>grafana网络总图中，Y轴要有负数的话，需要设置，alias or regex，Outing为 Transform：negative-Y</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200323205311303.png" alt=""></p>
`,r:{minutes:.18,words:54},y:"a",t:"Grafana Y轴设置"},["/monitor/grafana-y","/monitor/grafana-y.md"]],["v-104b656e","/monitor/monitor-system.html",{d:1681909711e3,c:"监控",u:10,e:`<h1> 聊透监控体系</h1>
<p>经济高速发展的今天，我们处于信息大爆炸的时代。随着经济发展，信息借助互联网的力量在全球自由地流动，于是就催生了各种各样的服务平台和软件系统。</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/640-1579057066348.webp" alt="img"></p>
<p>由于业务的多样性，这些平台和系统也变得异常的复杂。如何对其进行监控和维护是我们 IT 人需要面对的重要问题。就在这样一个纷繁复杂地环境下，监控系统粉墨登场了。</p>
<p>今天，我们会对 IT 监控系统进行介绍，包括其功能，分类，分层；同时也会介绍几款流行的监控平台。</p>`,r:{minutes:16.51,words:4952},y:"a",t:"聊透监控体系"},["/monitor/monitor-system","/monitor/monitor-system.md"]],["v-420473ed","/monitor/promethues-alerts.html",{d:16042752e5,l:"2020年11月2日",c:"监控",g:["alert"],e:`<h1> PrometheusAlert</h1>
<p>Prometheus Alert是开源的运维告警中心消息转发系统,支持主流的监控系统Prometheus,Zabbix,日志系统Graylog和数据可视化系统Grafana发出的预警消息,支持钉钉,微信,华为云短信,腾讯云短信,腾讯云电话,阿里云短信,阿里云电话等</p>
<h2> 文档</h2>
<p>https://feiyu563.gitbook.io/prometheusalert/</p>
<h2> 自定义的告警模板</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ $var := .externalURL}}{{ range $k,$v:=.alerts }}
{{if eq $v.status "resolved"}}
## [Prometheus恢复信息]({{$v.generatorURL}})

&gt; &lt;font color="info"&gt;告警名称&lt;/font&gt;：[{{$v.labels.alertname}}]({{$var}})

&gt; &lt;font color="info"&gt;告警级别&lt;/font&gt;：{{$v.labels.severity}}

&gt; &lt;font color="info"&gt;当前状态&lt;/font&gt;：{{$v.status}}

&gt; &lt;font color="info"&gt;告警分组&lt;/font&gt;：{{$v.labels.team}}

&gt; &lt;font color="info"&gt;开始时间&lt;/font&gt;：{{GetCSTtime $v.startsAt}}

&gt; &lt;font color="info"&gt;结束时间&lt;/font&gt;：{{GetCSTtime $v.endsAt}}

&gt; &lt;font color="info"&gt;实例地址&lt;/font&gt;：{{$v.labels.instance}}

**{{$v.annotations.description}}**
{{else}}
## [ &lt;font color="#FF0000"&gt;Prometheus告警信息&lt;/font&gt;]({{$v.generatorURL}})
&gt; &lt;font color="#FF0000"&gt;告警名称&lt;/font&gt;：[{{$v.labels.alertname}}]({{$var}})

&gt; &lt;font color="#FF0000"&gt;告警级别&lt;/font&gt;：{{$v.labels.severity}}

&gt; &lt;font color="#FF0000"&gt;当前状态&lt;/font&gt;：{{$v.status}}

&gt; &lt;font color="#FF0000"&gt;告警分组&lt;/font&gt;：{{$v.labels.team}}

&gt; &lt;font color="#FF0000"&gt;开始时间&lt;/font&gt;：{{GetCSTtime $v.startsAt}}

&gt; &lt;font color="#FF0000"&gt;实例地址&lt;/font&gt;：{{$v.labels.instance}}

**{{$v.annotations.description}}**
{{end}}
{{ end }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.86,words:257},y:"a",t:"PrometheusAlert"},["/monitor/promethues-alerts","/monitor/promethues-alerts.md"]],["v-73fbd21f","/other/blog.html",{d:1681909711e3,g:"技术博客",u:40,e:`<h1> 优秀的技术博客 &amp; 在线工具</h1>
<h2> 技术博客</h2>
<table>
<thead>
<tr>
<th>博客地址</th>
<th>简介</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://skyao.io/learning/" target="_blank" rel="noopener noreferrer">敖小剑的博客</a></td>
<td>资深码农，十九年软件开发经验，微服务专家，Service Mesh布道师，Servicemesher社区联合创始人，Dapr Maintainer</td>
</tr>
<tr>
<td><a href="https://www.junmajinlong.com/" target="_blank" rel="noopener noreferrer">骏马金龙</a></td>
<td>运维开发，<code>Ansible专栏：一步到位玩透Ansible</code> 作者</td>
</tr>
<tr>
<td>https://lework.github.io/</td>
<td></td>
</tr>
<tr>
<td><a href="https://blog.duyidong.com/" target="_blank" rel="noopener noreferrer">杜屹东的博客</a></td>
<td>亚马逊解决方案架构师、前阿里工程师，全栈、devops</td>
</tr>
<tr>
<td><a href="https://notes.abelsu7.top/" target="_blank" rel="noopener noreferrer">苏易北</a></td>
<td><strong>公有云从业者</strong>，坐标深圳。<strong>Go / Python / Shell / C</strong>，专注<strong>云计算</strong>、<strong>虚拟化</strong>领域相关实践</td>
</tr>
<tr>
<td><a href="https://mrhope.site/" target="_blank" rel="noopener noreferrer">mrhope</a></td>
<td>物理专业的大佬，<code>vuepress-theme-hope</code>主题作者</td>
</tr>
<tr>
<td><a href="http://www.eryajf.net/" target="_blank" rel="noopener noreferrer">二丫讲梵</a></td>
<td>博客朋友李启龙的博客，内容十分优质，国内最全的<code>nexus</code>系列文档</td>
</tr>
<tr>
<td><a href="https://www.kancloud.cn/@willseecloud" target="_blank" rel="noopener noreferrer">willseecloud</a></td>
<td>优秀的运维笔记</td>
</tr>
<tr>
<td><a href="https://www.zze.xyz/s/bookmarks.html" target="_blank" rel="noopener noreferrer">张种恩的技术小栈 </a></td>
<td></td>
</tr>
<tr>
<td><a href="https://www.pdai.tech/" target="_blank" rel="noopener noreferrer">Java 全栈知识体系</a></td>
<td></td>
</tr>
<tr>
<td><a href="https://www.yuque.com/xiaoqingxinchangbuda/dpbrtg" target="_blank" rel="noopener noreferrer">CTC的运维学习笔记</a></td>
<td></td>
</tr>
<tr>
<td><a href="https://hackr.io/" target="_blank" rel="noopener noreferrer">Find the Best Programming Courses &amp; Tutorials</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:1,words:301},y:"a",t:"优秀的技术博客 & 在线工具"},["/other/blog","/other/blog.md"]],["v-8d980508","/other/curl-bash.html",{d:1595808e6,l:"2020年7月27日",g:"奇技淫巧",e:`<h1> curl方式执行shell脚本时如何传参</h1>
<p>有时候shell脚本可以放在http页面上，不用download，可以直接执行。</p>
<p>通常我们可以用curl的方式执行http页面上的shell脚本。 一般方式是：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl ftp://192.168.166.21:/system_optimize.sh | bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:2.83,words:850},y:"a",t:"curl方式执行shell脚本时如何传参"},["/other/curl-bash","/other/curl-bash.md"]],["v-cc3a53f4","/other/mac-disk.html",{d:1681909711e3,g:["Mac"],e:`<h1> Mac上挂载移动硬盘出现"Read-only file system"问题</h1>
<blockquote>
<p>转载自：<a href="https://blog.csdn.net/Beyond_TJU/article/details/88125617" target="_blank" rel="noopener noreferrer">Mac上挂载移动硬盘出现"Read-only file system"问题</a></p>
</blockquote>
<p>解决步骤如下</p>
<ol>
<li>确保移动硬盘链接，查看硬盘挂在的节点，操作如下</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>diskutil info /Volumes/YOUR_NTFS_DISK_NAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.31,words:392},y:"a",t:'Mac上挂载移动硬盘出现"Read-only file system"问题'},["/other/mac-disk","/other/mac-disk.md"]],["v-4d7b907e","/other/mac-proxy.html",{d:1681909711e3,g:["Mac"],e:`<h1> macOS配置终端走socks5代理</h1>
<blockquote>
<p>转载自：<a href="https://zhuanlan.zhihu.com/p/269878724" target="_blank" rel="noopener noreferrer">macOS配置终端走socks5代理</a></p>
</blockquote>
<p>在<code>~/.bash_profile</code> 中添加如下内容（如果是是zsh用户那么配置文件为~/.zshrc）：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 为终端设置代理</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">proxy</span><span class="token operator">=</span><span class="token string">'export all_proxy=socks5://127.0.0.1:1080'</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">unproxy</span><span class="token operator">=</span><span class="token string">'unset all_proxy'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.44,words:132},y:"a",t:"macOS配置终端走socks5代理"},["/other/mac-proxy","/other/mac-proxy.md"]],["v-6bac1857","/other/vim.html",{d:1681909711e3,g:"vim",e:`<h1> vim 使用整理</h1>
<h2> 推荐文章</h2>
<p><a href="https://my.oschina.net/u/589241/blog/2223430" target="_blank" rel="noopener noreferrer">vim设置参数以方便YAML语句录入 | 大别阿郎 | OSCHINA</a></p>
<h2> 常用命令</h2>
<p><strong>显示当前正在编辑的文件名</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>正常模式下 :f 或CTRL+G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.36,words:109},y:"a",t:"vim 使用整理"},["/other/vim","/other/vim.md"]],["v-26fca4d5","/other/writing.html",{d:1681909711e3,g:"写作排版",e:`<h1> IT 博客写作工作</h1>
<h2> 写作前</h2>
<h3> trello</h3>
<p>官网地址:https://trello.com/</p>
<p>这是一款任务管理工具，类似于敏捷开发中看板，我们可以快速管理任务。</p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1419561-20200403080637678-850065086-20230204231815839.jpg" alt="img"></p>
<p>日常工作我只要想到一个 <strong>idea</strong>，就会第一时间先记录到 <strong>idea</strong> 列表中。这里千万不要高估自己的记忆力，如果想到了，感觉记录下来。以前上午灵光一现想到一个 <strong>idea</strong>，准备晚上写一下，然后晚上就想不起来。。。</p>`,r:{minutes:3.46,words:1037},y:"a",t:"IT 博客写作工作"},["/other/writing","/other/writing.md"]],["v-a1ff8004","/basic/network/kernel-para-opt.html",{d:1681909711e3,c:"计算机网络",e:`<h1> 内核参数调优</h1>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TCP 三次握手中需要调优的内核参数
	SYN 半连接队列 							net.ipv4.tcp_max_syn_backlog
	半连接队列满时 开启syncookies 			net.ipv4.tcp_syncookies = 1

	全连接队列 大小取的 min(somaxconn, backlog)最小值，所以调整两个参数
	net.core.somaxconn net.core.somaxconn=65535
	nginx配置文件调整 listen 80 backlog=8192

	tcp_synack_retries 值调小
	开始 TCP Fast Open,减少TCP建立连接的时延
	echo 3 &gt; /proc/sys/net/ipv4/tcp_fastopen

TCP 四次挥手中需要调优的内核参数
	TIME_WAIT 状态的连接数量，会占用一定资源 net.ipv4.tcp_max_tw_buckets = 6000
	开启端口复用，被 TIME_WAIT 状态占用的端口，还能用到新建的连接中 net.ipv4.tcp_tw_reuse=1
	减小FIN_WAIT2 状态的参数 net.ipv4.tcp_fin_timeout=15
	增大本地端口的范围，这样就可以支持更多连接，提高整体的并发能力。 net.ipv4.ip_local_port_range="1024 65535"
	
数据传输优化
	启用窗口扩大因子功能，net.ipv4.tcp_window_scaling = 1
	调整发送缓冲区 net.ipv4.tcp_rmem = 4096 87380 4194304
	调整接收缓冲区 net.ipv4.tcp_wmem = 4096 65536 4194304
	调整内存范围 net.ipv4.tcp_mem = 524288 699050 1048576

	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.85,words:256},y:"a",t:"内核参数调优"},["/basic/network/kernel-para-opt","/basic/network/kernel-para-opt.md"]],["v-d623d08a","/basic/network/",{d:1681909711e3,c:"计算机网络",e:`<h1> 计算机网络学习笔记</h1>
<h2> 文章推荐</h2>
<ul>
<li>图解网络 PDF | 小林coding ⭐</li>
</ul>
<h2> Summary</h2>
<ul>
<li><a href="/basic/network/tcp-three-four.html" target="blank">TCP 三次握手与四次挥手</a></li>
</ul>
<h2> TODO</h2>
<p>IP 篇</p>
`,r:{minutes:.15,words:45},y:"a",t:"计算机网络学习笔记"},["/basic/network/index.html","/basic/network/readme.md"]],["v-d64bd706","/basic/network/tcp-three-four.html",{d:1681909711e3,e:`<h1> TCP 三次握手和四次挥手</h1>
<h2> 常问知识点</h2>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/tcp-three-four.png" alt=""></p>
<h2> 问题答案</h2>
<p>图解网络 PDF | 小林coding | 微信公众号</p>
`,r:{minutes:.13,words:39},y:"a",t:"TCP 三次握手和四次挥手"},["/basic/network/tcp-three-four","/basic/network/tcp-three-four.md"]],["v-754f0210","/basic/network/todo.html",{d:1681909711e3,c:"计算机网络",e:`<h2> 传输层</h2>
<p><strong>TCP 路径可达性测试</strong></p>
<ul>
<li>
<p><code>telnet</code>、<code>nc</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>telnet www.baidu.com <span class="token number">443</span>
<span class="token function">nc</span> <span class="token parameter variable">-w</span> <span class="token number">2</span> <span class="token parameter variable">-zv</span> www.baidu.com <span class="token number">443</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>`,r:{minutes:.52,words:157},y:"a",t:""},["/basic/network/todo","/basic/network/todo.md"]],["v-ba097eb4","/basic/system/",{d:1681909711e3,c:"操作系统",e:`<h1> 操作系统学习笔记</h1>
<h2> 文章推荐</h2>
<ul>
<li>图解系统 PDF | 小林coding ⭐</li>
</ul>
<h2> SRE: Google运维解密</h2>
<p>SRE团队要承担以下几类职责：可用性改进，延迟优化，性能优化，效率优化，变更管理，监控，紧急事务处理以及容量规划与管理。</p>
<p>事后总结的意义可能更大：因为它将揭示监控系统中的漏洞。事后总结应该包括以下内容：事故发生、发现、解决的全过程，事故的根本原因，预防或者优化的解决方案。</p>
<p>一个监控系统应该只有三类输出：紧急警报（alert）、工单（ticket）、日志（logging）</p>`,r:{minutes:1.07,words:321},y:"a",t:"操作系统学习笔记"},["/basic/system/index.html","/basic/system/readme.md"]],["v-2d9f4ba5","/basic/system/ssh-key.html",{d:1681909711e3,c:"操作系统",g:"原理",e:`<h1> Linux SSH 基于密钥交换的自动登录原理</h1>
<p>参考此链接：<a href="http://www.360doc.com/content/17/0624/10/1513309_666128067.shtml" target="_blank" rel="noopener noreferrer">Linux SSH 基于密钥交换的自动登录原理是怎样的？</a></p>
`,r:{minutes:.16,words:49},y:"a",t:"Linux SSH 基于密钥交换的自动登录原理"},["/basic/system/ssh-key","/basic/system/ssh-key.md"]],["v-87f9ec82","/cloudnative/docker/docker-docker.html",{d:1681909711e3,c:"云原生",g:["Docker"],e:`<h1> 如何在Docker容器中运行Docker [3种方法]</h1>
<blockquote>
<p>转载自：<a href="https://cloud.tencent.com/developer/article/1697053" target="_blank" rel="noopener noreferrer">如何在Docker容器中运行Docker 3种方法</a></p>
</blockquote>
<p>在本博客中，我将向您介绍在docker中运行docker所需的三种不同方法。</p>
<h2> <strong>Docker In Docker的用处</strong></h2>`,r:{minutes:5.2,words:1560},y:"a",t:"如何在Docker容器中运行Docker [3种方法]"},["/cloudnative/docker/docker-docker","/cloudnative/docker/docker-docker.md"]],["v-1497ef65","/cloudnative/docker/docker-proxy.html",{d:1681909711e3,c:"云原生",g:["Docker"],e:`<h1> Docker 设置代理</h1>
<blockquote>
<p>起因：由于有些国外的镜像拉取不下来，所以设置翻墙代理，下载成功后，再导出<code>docker save xx:tar -o xx.tar</code>，传输到需要的节点导入<code>docker load -i xx.tar</code></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 先停止Docker</span>
systemctl stop <span class="token function">docker</span>

<span class="token comment">## 修改Docker配置文件</span>
<span class="token function">vim</span> /lib/systemd/system/docker.service
<span class="token comment">## 在 [Service] 节点下面新增代理信息</span>
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token assign-left variable">Environment</span><span class="token operator">=</span><span class="token string">"HTTP_PROXY=socks5://192.168.66.76:20080/"</span> <span class="token string">"HTTPS_PROXY=socks5://192.168.66.76:20080/"</span>

<span class="token comment">## 重新加载Docker并启动 </span>
systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.49,words:148},y:"a",t:"Docker 设置代理"},["/cloudnative/docker/docker-proxy","/cloudnative/docker/docker-proxy.md"]],["v-508989f3","/cloudnative/docker/",{d:1681909711e3,c:"云原生",g:["Docker"],e:`<h1> Docker 学习笔记</h1>
<h2> 文章推荐</h2>
<p><a href="https://vuepress.mirror.docker-practice.com/" target="_blank" rel="noopener noreferrer">Docker — 从入门到实践 | yeasy</a> ⭐</p>
`,r:{minutes:.09,words:27},y:"a",t:"Docker 学习笔记"},["/cloudnative/docker/index.html","/cloudnative/docker/readme.md"]],["v-5257418c","/cloudnative/etcd/etcd-defrag.html",{d:1681909711e3,c:"云原生",g:["etcd"],e:`<h1> ETCD 磁盘空间爆满解决方案</h1>
<blockquote>
<p>etcd默认的空间配额限制为2G，超出空间配额限制就会影响服务，所以需要定期清理</p>
</blockquote>
<h2> 查看集群状态</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> etcdctl <span class="token parameter variable">--cacert</span><span class="token operator">=</span>/etc/kubernetes/pki/etcd/ca.crt <span class="token parameter variable">--cert</span><span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.crt <span class="token parameter variable">--key</span><span class="token operator">=</span>/etc/kubernetes/pki/etcd/server.key <span class="token parameter variable">--endpoints</span><span class="token operator">=</span>https://10.100.142.163:2379 --write-out<span class="token operator">=</span>table endpoint status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.4,words:421},y:"a",t:"ETCD 磁盘空间爆满解决方案"},["/cloudnative/etcd/etcd-defrag","/cloudnative/etcd/etcd-defrag.md"]],["v-7da870a3","/cloudnative/etcd/etcd-first.html",{d:1681909711e3,c:"云原生",g:["etcd"],e:`<h1> etcd 问题、调优、监控</h1>
<blockquote>
<p>转载自：<a href="http://www.xuyasong.com/?p=1983" target="_blank" rel="noopener noreferrer">etcd 问题、调优、监控</a></p>
</blockquote>
<p><a href="http://www.xuyasong.com/?p=1706" target="_blank" rel="noopener noreferrer">etcd 原理解析：读《etcd 技术内幕》</a>这篇文章主要是原理性的内容，本文主要是实践角度，谈谈平时用到的一些操作和监控</p>`,r:{minutes:24.81,words:7444},y:"a",t:"etcd 问题、调优、监控"},["/cloudnative/etcd/etcd-first","/cloudnative/etcd/etcd-first.md"]],["v-bcd7447a","/cloudnative/etcd/",{d:1681909711e3,c:"云原生",g:["etcd"],e:`<h1> etcd 学习笔记</h1>
<h2> 常用官网</h2>
<p><a href="https://etcd.io/" target="_blank" rel="noopener noreferrer">etcd 官网</a> ⭐</p>
`,r:{minutes:.07,words:21},y:"a",t:"etcd 学习笔记"},["/cloudnative/etcd/index.html","/cloudnative/etcd/readme.md"]],["v-3f2cd8fb","/cloudnative/kubernetes/apiserver-tls.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> k8s 更改apiserver使用强加密算法</h1>
<p>apiserver 新增一行</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    - --tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.11,words:33},y:"a",t:"k8s 更改apiserver使用强加密算法"},["/cloudnative/kubernetes/apiserver-tls","/cloudnative/kubernetes/apiserver-tls.md"]],["v-0abdc785","/cloudnative/kubernetes/calico.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> Calico</h1>
<h2> 架构</h2>
<p>简单说一下 Calico 架构，Calico 是一个基于三层的数据中心网络方案，可作为 CNI 插件为运行于 Kubernetes 中的容器提供基于 TCP/IP 三层的网络通信方案，也可与 OpenStack 这种 IaaS 云架构集成，利用 BGP，IPIP 等协议为工作负载提供网络联通功能，能够提供高效可控的 VM、容器、物理机之间的通信。</p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/640.jpeg" alt="图片"></p>
`,r:{minutes:4.08,words:1223},y:"a",t:"Calico"},["/cloudnative/kubernetes/calico","/cloudnative/kubernetes/calico.md"]],["v-6fcbadd8","/cloudnative/kubernetes/cert-update.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> 使用 kubeadm 手动更新证书</h1>
<p>背景：K8S 各个组件需要与 api-server 进行通信，通信使用的证书都存放在 /etc/kubernetes/pki 路径下，kubeadm 生成的证书默认有效为 1 年，因此需要定时更新证书，否则证书到期会导致整个集群不可用。
自动更新证书，Kubenetes 在升级控制面板相关组件时会主动更新证书，因此如果保证 Kubernetes 能够定期（一年以内）升级的话，证书会自动更新。</p>
<p>环境说明：k8s 1.18.10</p>
<p>以下步骤，在所有 master 节点执行</p>
<p>具体操作步骤
1）检查证书是否过期，以下两个命令均可</p>`,r:{minutes:1.04,words:313},y:"a",t:"使用 kubeadm 手动更新证书"},["/cloudnative/kubernetes/cert-update","/cloudnative/kubernetes/cert-update.md"]],["v-16624cc8","/cloudnative/kubernetes/cni.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<blockquote>
<p>转载自： <a href="https://developer.aliyun.com/learning/course/572/detail/7866?accounttraceid=2703db7b0eea4ec5a775b5aaaca87dd5vtsl" target="_blank" rel="noopener noreferrer">理解CNI和CNI插件 | 阿里云原生</a></p>
</blockquote>
<h1> CNI</h1>
<h2> CNI 是什么</h2>
<p>CNI，它的全称是 Container Network Interface，即容器网络的 API 接口。</p>`,r:{minutes:2.6,words:780},y:"a",t:"CNI"},["/cloudnative/kubernetes/cni","/cloudnative/kubernetes/cni.md"]],["v-00a035a9","/cloudnative/kubernetes/delete-rancher-causing-node-disappear.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> 卸载 rancher 导致 node 被清空</h1>
<h2> 问题描述</h2>
<p>集群的节点突然全都不见了 (<code>kubectl get node</code> 为空)，导致集群瘫痪，但实际上节点对应的宿主机都还在。因为集群没开审计，所以也不太好查 node 是被什么删除的。</p>
<h2> 快速恢复</h2>
<p>由于当时没有排查出来问题，当时批量重启了服务器，自动拉起 kubelet 重新注册 node，故障恢复。其实只是 k8s node 资源被删除，重启 kubelet 服务，自动注册即可。</p>
<h2> 根因分析（5 why）</h2>
<p>从 kube-apiserver 日志中可以看到，DELETE node 的操作，导致 node 被清空</p>`,r:{minutes:1.19,words:358},y:"a",t:"卸载 rancher 导致 node 被清空"},["/cloudnative/kubernetes/delete-rancher-causing-node-disappear","/cloudnative/kubernetes/delete-rancher-causing-node-disappear.md"]],["v-399e5546","/cloudnative/kubernetes/deploy-ceph-cluster-with-rook.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> 使用 Rook 快速搭建 Ceph 集群</h1>
<p>在容器世界中，无状态是一个核心原则，然而我们始终需要保存数据，并提供给他人进行访问。所以就需要一个方案用于保持数据，以备重启之需。</p>
<p>在 Kubernetes 中，PVC 是管理有状态应用的一个推荐方案。有了 PVC 的帮助，Pod 可以申请并连接到存储卷，这些存储卷在 Pod 生命周期结束之后，还能独立存在。</p>
<p>PVC 在存储方面让开发和运维的职责得以分离。运维人员负责供应存储，而开发人员则可以在不知后端细节的情况下，申请使用这些存储卷。</p>
<p>PVC 由一系列组件构成：</p>
<ul>
<li>
<p><a href="https://kubernetes.io/docs/concepts/storage/volumes/#persistentvolumeclaim" target="_blank" rel="noopener noreferrer">PVC</a>：是 Pod 对存储的请求。PVC 会被 Pod 动态加载成为一个存储卷。</p>
</li>
<li>
<p><a href="https://kubernetes.io/docs/concepts/storage/persistent-volumes/" target="_blank" rel="noopener noreferrer">PV</a>，可以由运维手工分配，也可以使用 <code>StorageClass</code> 动态分配。PV 受 Kubernetes 管理，但并不与特定的 Pod 直接绑定。</p>
</li>
<li>
<p><a href="https://kubernetes.io/docs/concepts/storage/storage-classes/" target="_blank" rel="noopener noreferrer">StorageClass</a>：由管理员创建，可以用来动态的创建存储卷和 PV。</p>
</li>
</ul>`,r:{minutes:8.12,words:2435},y:"a",t:"使用 Rook 快速搭建 Ceph 集群"},["/cloudnative/kubernetes/deploy-ceph-cluster-with-rook","/cloudnative/kubernetes/deploy-ceph-cluster-with-rook.md"]],["v-daf345c2","/cloudnative/kubernetes/docker-harbor-ha.html",{d:1681909711e3,c:"云原生",g:["harbor"],e:`<h1> Harbor 高可用搭建(docker-compose)</h1>
<h2> Harbor简介</h2>
<p><a href="https://goharbor.io/" target="_blank" rel="noopener noreferrer">Harbor</a>是一个用于存储和分发<code>Docker镜像</code>的企业级<code>Registry</code>服务器，通过添加一些企业必需的功能特性，例如安全、标识和管理等，扩展了开源Docker Distribution。</p>
<p>作为一个企业级私有Registry服务器，Harbor提供了更好的性能和安全。</p>`,r:{minutes:9.37,words:2811},y:"a",t:"Harbor 高可用搭建(docker-compose)"},["/cloudnative/kubernetes/docker-harbor-ha","/cloudnative/kubernetes/docker-harbor-ha.md"]],["v-4d18a9c6","/cloudnative/kubernetes/etcd-backup-restore.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> etcd 备份恢复</h1>
<h2> etcd 备份</h2>
<ol>
<li>
<p>创建备份脚本<code>/opt/etcd_backup.sh</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token comment">#</span>
<span class="token comment"># Etcd backup</span>
 
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>
 
<span class="token assign-left variable">ETCD_CA_CERT</span><span class="token operator">=</span><span class="token string">"/etc/kubernetes/pki/etcd/ca.crt"</span>
<span class="token assign-left variable">ETCD_CERT</span><span class="token operator">=</span><span class="token string">"/etc/kubernetes/pki/etcd/server.crt"</span>
<span class="token assign-left variable">ETCD_KEY</span><span class="token operator">=</span><span class="token string">"/etc/kubernetes/pki/etcd/server.key"</span>
<span class="token assign-left variable">BACKUP_DIR</span><span class="token operator">=</span><span class="token string">"/var/lib/docker/etcd_backup"</span>
<span class="token assign-left variable">DT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%Y%m%d.%H%M%S<span class="token variable">)</span></span>
 
<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">\${BACKUP_DIR}</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${BACKUP_DIR}</span>
<span class="token function">find</span> <span class="token variable">\${BACKUP_DIR}</span> <span class="token parameter variable">-name</span> <span class="token string">"*.db"</span> <span class="token parameter variable">-mtime</span> +7 <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
 
<span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> /usr/local/bin/etcdctl <span class="token parameter variable">--endpoints</span><span class="token operator">=</span>https://127.0.0.1:2379 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--cacert</span><span class="token operator">=</span><span class="token string">"<span class="token variable">\${ETCD_CA_CERT}</span>"</span> <span class="token parameter variable">--cert</span><span class="token operator">=</span><span class="token string">"<span class="token variable">\${ETCD_CERT}</span>"</span> <span class="token parameter variable">--key</span><span class="token operator">=</span><span class="token string">"<span class="token variable">\${ETCD_KEY}</span>"</span> <span class="token punctuation">\\</span>
  snapshot save <span class="token string">"<span class="token variable">\${BACKUP_DIR}</span>/etcd-snapshot-<span class="token variable">\${DT}</span>.db"</span>
 
<span class="token builtin class-name">echo</span> <span class="token string">"Etcd backup success, backup file: <span class="token variable">\${BACKUP_DIR}</span>/etcd-snapshot-<span class="token variable">\${DT}</span>.db, \\
  file size: <span class="token variable"><span class="token variable">$(</span><span class="token function">du</span> <span class="token parameter variable">-sh</span> $<span class="token punctuation">{</span>BACKUP_DIR<span class="token punctuation">}</span>/etcd-snapshot-$<span class="token punctuation">{</span>DT<span class="token punctuation">}</span>.db <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{print $1}'</span><span class="token variable">)</span></span>"</span>
<span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>添加cron定时任务 <code>crontab -e</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">0</span> */1 * * * /bin/bash /opt/etcd_backup.sh <span class="token operator">&gt;&gt;</span>/opt/log-backup-etcd.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>`,r:{minutes:1.78,words:534},y:"a",t:"etcd 备份恢复"},["/cloudnative/kubernetes/etcd-backup-restore","/cloudnative/kubernetes/etcd-backup-restore.md"]],["v-1b52ff44","/cloudnative/kubernetes/fault.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> 故障复盘模版</h1>
<h2> 1. 影响范围和故障时间线</h2>
<p><strong>影响范围</strong></p>
<p>...</p>
<p><strong>影响时间线（<strong>2022-xx-xx xx:xx ~ 2022-xx-xx xx:xx</strong>）</strong></p>
<p>...</p>
<h2> 2. 故障发生原因</h2>
<p><strong>故障现象</strong></p>
<p><strong>根因分析</strong></p>
<p>...</p>
<h2> 3. Why 分析</h2>
<p>5 why 分析法</p>`,r:{minutes:.32,words:95},y:"a",t:"故障复盘模版"},["/cloudnative/kubernetes/fault","/cloudnative/kubernetes/fault.md"]],["v-1590f620","/cloudnative/kubernetes/harbor.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> Harbor 安装配置(k8s)</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载 helm charts</span>
helm repo <span class="token function">add</span> harbor https://helm.goharbor.io
helm repo update
helm pull harbor/harbor <span class="token parameter variable">--version</span><span class="token operator">=</span><span class="token number">1.9</span>.4
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> harbor-1.9.4.tgz

<span class="token comment"># 配置 tls secret</span>
<span class="token comment">## 下载nginx使用的 key 和 pem 传到服务器，并重命名为 tls.xxx</span>
<span class="token comment">## 使用 openssl 把 pem 证书转换为 crt</span>
<span class="token function">mkdir</span> harbor-tls
<span class="token builtin class-name">cd</span> harbor-tls/
openssl x509 <span class="token parameter variable">-in</span>  tls.pem <span class="token parameter variable">-out</span> tls.crt
kubectl create ns harbor
kubectl <span class="token parameter variable">-n</span> harbor create secret tls harbor-secret   <span class="token parameter variable">--cert</span><span class="token operator">=</span>tls.crt   <span class="token parameter variable">--key</span><span class="token operator">=</span>tls.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.76,words:227},y:"a",t:"Harbor 安装配置(k8s)"},["/cloudnative/kubernetes/harbor","/cloudnative/kubernetes/harbor.md"]],["v-095f9124","/cloudnative/kubernetes/helm.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> Helm 安装配置</h1>
<h2> 安装</h2>
<p>下载二进制文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">helmversion</span><span class="token operator">=</span><span class="token number">3.7</span>.2
<span class="token function">wget</span> https://get.helm.sh/helm-v<span class="token variable">\${helmversion}</span>-linux-amd64.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> helm-v<span class="token variable">\${helmversion}</span>-linux-amd64.tar.gz
<span class="token function">mv</span> linux-amd64/helm /usr/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.43,words:128},y:"a",t:"Helm 安装配置"},["/cloudnative/kubernetes/helm","/cloudnative/kubernetes/helm.md"]],["v-a659ac38","/cloudnative/kubernetes/ingress-nginx.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> ingress-nginx 安装配置</h1>
<p>对外暴露集群服务</p>
<p>前面我们学习了在 Kubernetes 集群内部使用 kube-dns 实现服务发现的功能，那么我们部署在 Kubernetes 集群中的应用如何暴露给外部的用户使用呢？我们知道可以使用 <code>NodePort</code> 和 <code>LoadBlancer</code> 类型的 Service 可以把应用暴露给外部用户使用，除此之外，Kubernetes 还为我们提供了一个非常重要的资源对象可以用来暴露服务给外部用户，那就是 <code>Ingress</code>。对于小规模的应用我们使用 NodePort 或许能够满足我们的需求，但是当你的应用越来越多的时候，你就会发现对于 NodePort 的管理就非常麻烦了，这个时候使用 Ingress 就非常方便了，可以避免管理大量的端口。</p>`,r:{minutes:6.78,words:2034},y:"a",t:"ingress-nginx 安装配置"},["/cloudnative/kubernetes/ingress-nginx","/cloudnative/kubernetes/ingress-nginx.md"]],["v-00c390aa","/cloudnative/kubernetes/k8s-allocatable.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> 为 k8s node 配置资源预留</h1>
<h2> 背景</h2>
<p>如果某些pod 没有设置资源限制，导致 node 节点 负载过高，进而导入 kubelet 和 apiserver 的心跳出现问题，节点就会 Not Ready</p>
<p>Not Ready 的 节点 开始驱逐应用，当没有资源限制的应用跑到其他 节点，其他节点也会产生连锁反应，load 高，心跳失败，Not Ready，进而导致整个集群的雪崩</p>
<p>所以现在设置资源预留：防止 某些 pod 将 cpu 跑满，进而 kubelet 和 apiserver 心跳失败，出现 Not Ready 现象</p>`,r:{minutes:.76,words:227},y:"a",t:"为 k8s node 配置资源预留"},["/cloudnative/kubernetes/k8s-allocatable","/cloudnative/kubernetes/k8s-allocatable.md"]],["v-5a027c1c","/cloudnative/kubernetes/k8s-audit.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> k8s 开启审计日志</h1>
<h2> 一、背景</h2>
<ul>
<li>应安全规范，对 apiserver 核心组件，需要记录，"谁在什么时候操作了什么"</li>
<li>方便故障排查</li>
</ul>
<h2> 二、操作步骤</h2>
<h3> apiserver 开启审计日志</h3>
<p>在所有 master 节点执行</p>
<ol>
<li>
<p>备份 配置文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/clay/bak<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F<span class="token variable">)</span></span>
<span class="token function">cp</span> /etc/kubernetes/manifests/kube-apiserver.yaml /home/clay/bak<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>创建审计策略</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /etc/kubernetes/audit/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>vim /etc/kubernetes/audit/audit-policy.yaml</code></p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> audit.k8s.io/v1beta1 <span class="token comment"># This is required.</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Policy
<span class="token key atrule">omitStages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">"RequestReceived"</span>
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">users</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"system:kube-proxy"</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"watch"</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"endpoints"</span><span class="token punctuation">,</span> <span class="token string">"services"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">users</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"system:unsecured"</span><span class="token punctuation">]</span>
    <span class="token key atrule">namespaces</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"kube-system"</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"get"</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"configmaps"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">users</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"system:serviceaccount:kube-system:calico-node"</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"get"</span><span class="token punctuation">,</span><span class="token string">"list"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">users</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"kubelet"</span><span class="token punctuation">]</span> <span class="token comment"># legacy kubelet identity</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"get"</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"nodes"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">userGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"system:nodes"</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"get"</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"nodes"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">users</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> system<span class="token punctuation">:</span>kube<span class="token punctuation">-</span>controller<span class="token punctuation">-</span>manager
      <span class="token punctuation">-</span> system<span class="token punctuation">:</span>kube<span class="token punctuation">-</span>scheduler
      <span class="token punctuation">-</span> system<span class="token punctuation">:</span>serviceaccount<span class="token punctuation">:</span>kube<span class="token punctuation">-</span>system<span class="token punctuation">:</span>endpoint<span class="token punctuation">-</span>controller
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"get"</span><span class="token punctuation">,</span> <span class="token string">"update"</span><span class="token punctuation">]</span>
    <span class="token key atrule">namespaces</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"kube-system"</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"endpoints"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">users</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"system:apiserver"</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"get"</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"namespaces"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">nonResourceURLs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /healthz*
      <span class="token punctuation">-</span> /version
      <span class="token punctuation">-</span> /swagger*
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> None
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"events"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> Metadata
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># core</span>
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"secrets"</span><span class="token punctuation">,</span> <span class="token string">"configmaps"</span><span class="token punctuation">]</span>
      <span class="token punctuation">-</span> <span class="token key atrule">group</span><span class="token punctuation">:</span> authentication.k8s.io
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"tokenreviews"</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> Metadata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>修改apiserver 配置文件
<code>vim /etc/kubernetes/manifests/kube-apiserver.yaml</code></p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 在spec.containers.command 最后新增</span>
    <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>audit<span class="token punctuation">-</span>policy<span class="token punctuation">-</span>file=/etc/kubernetes/audit/audit<span class="token punctuation">-</span>policy.yaml
    <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>audit<span class="token punctuation">-</span>log<span class="token punctuation">-</span>maxage=100
    <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>audit<span class="token punctuation">-</span>log<span class="token punctuation">-</span>maxsize=200
    <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>audit<span class="token punctuation">-</span>log<span class="token punctuation">-</span>path=/var/log/apiserver/audit.log
<span class="token comment"># 在spec.containers.volumeMounts 最后新增</span>
    <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/kubernetes/audit
      <span class="token key atrule">name</span><span class="token punctuation">:</span> audit
      <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/log/apiserver/
      <span class="token key atrule">name</span><span class="token punctuation">:</span> log
<span class="token comment"># 在spec.volumes 最后新增</span>
  <span class="token punctuation">-</span> <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /etc/kubernetes/audit
      <span class="token key atrule">type</span><span class="token punctuation">:</span> DirectoryOrCreate
    <span class="token key atrule">name</span><span class="token punctuation">:</span> audit
  <span class="token punctuation">-</span> <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /var/log/apiserver
      <span class="token key atrule">type</span><span class="token punctuation">:</span> DirectoryOrCreate
    <span class="token key atrule">name</span><span class="token punctuation">:</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>`,r:{minutes:1.67,words:501},y:"a",t:"k8s 开启审计日志"},["/cloudnative/kubernetes/k8s-audit","/cloudnative/kubernetes/k8s-audit.md"]],["v-2b87c67e","/cloudnative/kubernetes/k8s-gpu.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> k8s 适配 GPU</h1>
<h2> GPU 安装步骤</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># centos7 内核升级后   GPU 安装步骤</span>

<span class="token comment"># 1.  加载 新 内核</span>
<span class="token comment"># 查看内核列表</span>
<span class="token function">awk</span> -F<span class="token punctuation">\\</span>' <span class="token string">'$1=="menuentry " {print $2}'</span> /etc/grub2.cfg
<span class="token comment"># 指定新内核启动</span>
grub2-set-default <span class="token string">'CentOS Linux (5.4.186-1.el7.elrepo.x86_64) 7 (Core)'</span>
<span class="token function">reboot</span>

<span class="token comment"># 2. 准备GPU驱动安装环境</span>
<span class="token comment"># 卸载原有内核的header与devel模块</span>
yum <span class="token parameter variable">-y</span> remove kernel-headers kernel-devel
<span class="token comment"># 安装现有内核headers和devel模块（必须，显卡编译需要）</span>
yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span>elrepo-kernel <span class="token function">install</span> <span class="token parameter variable">-y</span> kernel-lt-devel-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-r</span><span class="token variable">)</span></span> kernel-lt-headers-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-r</span><span class="token variable">)</span></span>
<span class="token comment"># 卸载旧的安装包 cd 目录防止 当前目录有相关安装包，卸载不干净</span>
<span class="token builtin class-name">cd</span> /opt
yum <span class="token parameter variable">-y</span> remove nvidia*
<span class="token comment"># 安装新版本 gcc ，并使用新版本gcc，注意需要当前会话操作，临时生效</span>
yum <span class="token function">install</span> centos-release-scl <span class="token parameter variable">-y</span>
yum <span class="token function">install</span> devtoolset-8-gcc* <span class="token parameter variable">-y</span>
scl <span class="token builtin class-name">enable</span> devtoolset-8 <span class="token function">bash</span>
<span class="token comment"># 安装相关依赖</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> libglvnd*

<span class="token comment"># 3. 编译安装GPU驱动</span>
<span class="token comment"># 从官网下载 .run 文件，我放在了xxx /home/clay/NVIDIA-Linux-x86_64-510.54.run , 可以直接去服务器拿</span>
<span class="token comment"># 执行安装命令（/usr/src/kernels目录下文件需要安装kernel-devel包后才会出现），具体的安装包与内核路径根据实际情况填写</span>
./NVIDIA-Linux-x86_64-510.54.run --kernel-source-path<span class="token operator">=</span>/usr/src/kernels/5.4.186-1.el7.elrepo.x86_64 <span class="token parameter variable">-k</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-r</span><span class="token variable">)</span></span> <span class="token parameter variable">-s</span>
<span class="token comment"># 查看显卡驱动是否安装成功</span>
nvidia-smi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.29,words:386},y:"a",t:"k8s 适配 GPU"},["/cloudnative/kubernetes/k8s-gpu","/cloudnative/kubernetes/k8s-gpu.md"]],["v-05e39b32","/cloudnative/kubernetes/k8s-install.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> 使用 ansible 快速搭建 k8s 集群</h1>
<p>推荐：</p>
<ul>
<li>kubeadm 安装用：<a href="https://github.com/kubernetes-sigs/kubespray" target="_blank" rel="noopener noreferrer">kubespray</a></li>
<li>二进制安装用：<a href="https://github.com/easzlab/kubeasz" target="_blank" rel="noopener noreferrer">kubeasz</a></li>
</ul>`,r:{minutes:2.27,words:681},y:"a",t:"使用 ansible 快速搭建 k8s 集群"},["/cloudnative/kubernetes/k8s-install","/cloudnative/kubernetes/k8s-install.md"]],["v-a95ef8ee","/cloudnative/kubernetes/kata.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> Kata2 尝试</h1>
<p>结论：kata2 包了一层虚拟化，有了新的内核，容器资源可见性、隔离性和安全性能得到更好的保障，但资源浪费严重，额外产出 1c2g 的资源消耗，需要替换CRI 和 OCI，操作较为复杂</p>
<p>需要根据实际业务情况做出选择</p>
`,r:{minutes:.3,words:91},y:"a",t:"Kata2 尝试"},["/cloudnative/kubernetes/kata","/cloudnative/kubernetes/kata.md"]],["v-af7321c0","/cloudnative/kubernetes/kernel-upgrade.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> 内核版本升级</h1>
<h2> 背景</h2>
<p>k8s 目前使用的内核 版本为：4.9.220，存在以下bug：</p>
<ul>
<li><a href="https://mp.weixin.qq.com/s/AJJal8tbcUSbW_IYVA-sEw" target="_blank" rel="noopener noreferrer">CPU 限流</a></li>
<li>https://github.com/fho/docker-samba-loop</li>
<li><a href="https://github.com/moby/moby/issues/5618" target="_blank" rel="noopener noreferrer">moby/moby#5618</a></li>
<li><a href="https://github.com/coreos/bugs/issues/254" target="_blank" rel="noopener noreferrer">coreos/bugs#254</a></li>
<li><a href="https://www.coolops.cn/archives/calico-xia-ru-he-qie-huan-shu-ju-mian-dao-ebpf" target="_blank" rel="noopener noreferrer">无法支持 calico eBPF</a></li>
</ul>`,r:{minutes:1.61,words:484},y:"a",t:"内核版本升级"},["/cloudnative/kubernetes/kernel-upgrade","/cloudnative/kubernetes/kernel-upgrade.md"]],["v-2b1b7ec1","/cloudnative/kubernetes/kube-prometheus-stack.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> Prometheus Operator 安装配置</h1>
<h2> 一、概述</h2>
<p>首先Prometheus整体监控结构略微复杂，一个个部署并不简单。另外监控Kubernetes就需要访问内部数据，必定需要进行认证、鉴权、准入控制，</p>
<p>那么这一整套下来将变得难上加难，而且还需要花费一定的时间，如果你没有特别高的要求，还是建议选用开源比较好的一些方案。</p>
<p>在k8s初期使用Heapster+cAdvisor方式监控，这是Prometheus Operator出现之前的k8s监控方案。后来出现了Prometheus Operator，但是目前Prometheus Operator已经不包含完整功能，完整的解决方案已经变为kube-prometheus。项目地址为：</p>`,r:{minutes:8.05,words:2416},y:"a",t:"Prometheus Operator 安装配置"},["/cloudnative/kubernetes/kube-prometheus-stack","/cloudnative/kubernetes/kube-prometheus-stack.md"]],["v-76fb0a5e","/cloudnative/kubernetes/kube-reserved.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> k8s node 配置资源预留</h1>
<h2> 背景</h2>
<p>如果某些pod 没有设置资源限制，导致 node 节点 负载过高，进而导入 kubelet 和 apiserver 的心跳出现问题，节点就会 Not Ready</p>
<p>Not Ready 的 节点 开始驱逐应用，当没有资源限制的应用跑到其他 节点，其他节点也会产生连锁反应，load 高，心跳失败，Not Ready，进而导致整个集群的雪崩</p>
<p>所以现在设置资源预留：防止 某些 pod 将 cpu 跑满，进而 kubelet 和 apiserver 心跳失败，出现 Not Ready 现象</p>`,r:{minutes:.79,words:237},y:"a",t:"k8s node 配置资源预留"},["/cloudnative/kubernetes/kube-reserved","/cloudnative/kubernetes/kube-reserved.md"]],["v-645bf47e","/cloudnative/kubernetes/kubectl-cheatsheet.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> 快捷命令</h1>
<ul>
<li>
<p>快速查找 k8s pod 和 service 的 CIDR</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Get Services IPs range</span>
kubectl cluster-info dump <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-m</span> <span class="token number">1</span> service-cluster-ip-range
<span class="token comment"># Get Pods IPs range</span>
kubectl cluster-info dump <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-m</span> <span class="token number">1</span> cluster-cidr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>`,r:{minutes:.16,words:49},y:"a",t:"快捷命令"},["/cloudnative/kubernetes/kubectl-cheatsheet","/cloudnative/kubernetes/kubectl-cheatsheet.md"]],["v-5ad137cd","/cloudnative/kubernetes/longhorn.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> Longorn 安装配置</h1>
<h2> 安装配置</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 检查相关依赖，如果没有，安装官方文档进行安装</span>
<span class="token function">curl</span> <span class="token parameter variable">-sSfL</span> https://raw.githubusercontent.com/longhorn/longhorn/v1.3.0/scripts/environment_check.sh <span class="token operator">|</span> <span class="token function">bash</span>
<span class="token comment"># helm 安装</span>
helm repo <span class="token function">add</span> longhorn https://charts.longhorn.io
helm pull longhorn/longhorn <span class="token parameter variable">--version</span> <span class="token number">1.3</span>.0
<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> longhorn-1.3.0.tgz
<span class="token builtin class-name">cd</span> longhorn/
helm <span class="token function">install</span> longhorn <span class="token parameter variable">--namespace</span> longhorn-system --create-namespace ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.19,words:357},y:"a",t:"Longorn 安装配置"},["/cloudnative/kubernetes/longhorn","/cloudnative/kubernetes/longhorn.md"]],["v-2e60625e","/cloudnative/kubernetes/lvs-health-check.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> lvs 健康检查 k8s apiserver</h1>
<p>apiserver前面如果有lvs做高可用，lvs对apiserver做健康检测要注意不能使用tcp check，否则会触发报错</p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20220930112754483.png" alt="image-20220930112754483"></p>
<p>改为SSL_GET</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        SSL_GET {
          url {
          	path /healthz
          	status_code 200      
          }
          connect_timeout 3
          nb_get_retry 3
          delay_before_retry 3
          connect_port 6443
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.24,words:73},y:"a",t:"lvs 健康检查 k8s apiserver"},["/cloudnative/kubernetes/lvs-health-check","/cloudnative/kubernetes/lvs-health-check.md"]],["v-cb7b897c","/cloudnative/kubernetes/lxcfs.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> 利用 LXCFS 提升容器资源可见性</h1>
<h2> 背景</h2>
<p>解决应用无法识别容器资源限制的问题</p>
<h2> 具体操作步骤</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/clay-wangzhi/lxcfs-admission-webhook.git
kubectl create ns sre
<span class="token builtin class-name">cd</span> lxcfs-admission-webhook
kubectl apply <span class="token parameter variable">-f</span> deployment/lxcfs-daemonset.yaml
./deployment/install.sh
<span class="token comment"># 为注入启用命名空间</span>
kubectl label namespace xxx lxcfs-admission-webhook<span class="token operator">=</span>enabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.27,words:82},y:"a",t:"利用 LXCFS 提升容器资源可见性"},["/cloudnative/kubernetes/lxcfs","/cloudnative/kubernetes/lxcfs.md"]],["v-72ba803a","/cloudnative/kubernetes/namespace-terminating.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> 如何更新Terminating状态的命名空间</h1>
<p>Kubernetes中namespace有两种常见的状态，即Active和Terminating状态，其中Terminating状态一般会比较少见，当对应的命名空间下还存在运行的资源，但该命名空间被删除时才会出现所谓的Terminating状态，这种情况下只要等待Kubernetes本身将命名空间下的资源回收后，该命名空间将会被系统自动删除。</p>
<p>但是在某些情况下，即使命名空间下没有运行的资源，但依然无法删除Terminating状态的命名空间的情况，它会一直卡在Terminating状态下。</p>
<p>解决这个问题的步骤为：</p>`,r:{minutes:2.46,words:738},y:"a",t:"如何更新Terminating状态的命名空间"},["/cloudnative/kubernetes/namespace-terminating","/cloudnative/kubernetes/namespace-terminating.md"]],["v-1369b331","/cloudnative/kubernetes/numa.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> CPU 绑核</h1>
<p>背景：算法集群，跑的应用为CPU 密集型应用，k8s 原来的 CPU调度算法为 CFS（基于时间片的），会产生限流，从而影响性能，影响 响应时间，所有改为 CPU 绑核</p>
<h2> 内核启动 NUMA</h2>
<p>修改 <code>/etc/default/grub</code>  中<code>numa=off</code> 改为<code>numa=on</code></p>
<p>重新生成<code>grub.cfg</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>grub2-mkconfig <span class="token parameter variable">-o</span> /boot/efi/EFI/centos/grub.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.99,words:297},y:"a",t:"CPU 绑核"},["/cloudnative/kubernetes/numa","/cloudnative/kubernetes/numa.md"]],["v-645adb07","/cloudnative/kubernetes/rancher-install.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> Rancher 安装配置</h1>
<h2> 安装</h2>
<p>添加 Helm Chart 仓库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> rancher-stable http://rancher-mirror.oss-cn-beijing.aliyuncs.com/server-charts/stable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.95,words:285},y:"a",t:"Rancher 安装配置"},["/cloudnative/kubernetes/rancher-install","/cloudnative/kubernetes/rancher-install.md"]],["v-1f0f80e6","/cloudnative/kubernetes/",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> Kubernetes 学习笔记</h1>
<h2> Summary</h2>
<ul>
<li>集群搭建
<ul>
<li><a href="/cloudnative/kubernetes/k8s-install.html" target="blank">使用 ansible 快速搭建 k8s 集群</a></li>
</ul>
</li>
<li>常见应用安装配置
<ul>
<li><a href="/cloudnative/kubernetes/harbor.html" target="blank">harbor 安装配置(k8s)</a></li>
<li><a href="/cloudnative/kubernetes/docker-harbor-ha.html" target="blank">harbor 高可用安装(docker-compose)</a></li>
<li><a href="/cloudnative/kubernetes/rancher-install.html" target="blank">rancher 安装配置</a></li>
<li><a href="/cloudnative/kubernetes/helm.html" target="blank">helm 安装配置</a></li>
</ul>
</li>
<li>容器运行时
<ul>
<li><a href="/cloudnative/kubernetes/k8s-gpu.html" target="blank">GPU 适配</a></li>
<li><a href="/cloudnative/kubernetes/kata.html" target="blank">Kata Container</a></li>
</ul>
</li>
<li>存储
<ul>
<li><a href="/cloudnative/kubernetes/longhorn.html" target="blank">longhorn 安装配置</a></li>
<li><a href="/cloudnative/kubernetes/deploy-ceph-cluster-with-rook.html" target="blank">使用 Rook 快速搭建 Ceph 集群</a></li>
</ul>
</li>
<li>服务发现与路由
<ul>
<li><a href="/cloudnative/kubernetes/ingress-nginx.html" target="blank">ingress-nginx 安装配置</a></li>
</ul>
</li>
<li>集群网络
<ul>
<li><a href="/cloudnative/kubernetes/cni.html" target="blank">理解CNI和CNI插件</a></li>
<li><a href="/cloudnative/kubernetes/calico.html" target="blank">calico 安装配置</a></li>
</ul>
</li>
<li>监控告警
<ul>
<li><a href="/cloudnative/kubernetes/kube-prometheus-stack.html" target="blank">Prometheus Operator 安装配置</a></li>
</ul>
</li>
<li>实用技巧
<ul>
<li>高效实用 kubectl</li>
</ul>
</li>
<li>运维手册
<ul>
<li><a href="/cloudnative/kubernetes/etcd-backup-restore.html" target="blank">etcd 备份恢复</a></li>
<li><a href="/cloudnative/kubernetes/velero.html" target="blank">velero 备份恢复</a></li>
<li><a href="/cloudnative/kubernetes/k8s-audit.html" target="blank">k8s 开启审计日志</a></li>
<li><a href="/cloudnative/kubernetes/kernel-upgrade.html" target="blank">内核版本升级</a></li>
<li><a href="/cloudnative/kubernetes/cert-update.html" target="blank">使用 kubeadm 手动更新证书</a></li>
<li><a href="/cloudnative/kubernetes/k8s-allocatable.html" target="blank">为 k8s node 配置资源预留</a></li>
<li><a href="/cloudnative/kubernetes/lxcfs.html" target="blank">利用LXCFS提升容器资源可见性</a></li>
</ul>
</li>
<li>最佳实践
<ul>
<li>优雅终止</li>
<li><a href="/cloudnative/kubernetes/kube-reserved.html" target="blank">k8s node 配置资源预留</a></li>
<li><a href="/cloudnative/kubernetes/sysbench.html" target="blank">性能压测指标及方法</a></li>
<li>健康检查配置</li>
<li>合理设置 Request 与 Limit</li>
<li>Pod 性能优化
<ul>
<li><a href="/cloudnative/kubernetes/numa.html" target="blank">CPU 绑核</a></li>
</ul>
</li>
<li>高可用部署
<ul>
<li>Pod 打散调度</li>
<li>工作负载平滑升级</li>
</ul>
</li>
<li>DNS
<ul>
<li>Coredns 性能优化</li>
</ul>
</li>
<li>弹性伸缩
<ul>
<li>自定义指标进行弹性伸缩</li>
</ul>
</li>
<li>Java 应用容器化</li>
<li>集群运维
<ul>
<li>ETCD 优化</li>
<li>大规模集群优化</li>
</ul>
</li>
<li>日志收集</li>
<li>长连接服务
<ul>
<li>istio 解决 grpc 负载均衡</li>
</ul>
</li>
</ul>
</li>
<li>故障排查
<ul>
<li>排障技能
<ul>
<li>Linux 常用排查命令</li>
<li>使用 nsenter 进入 netns 排查网络问题</li>
<li>使用 tcpdump 抓包分析</li>
<li>使用 wireshark 分析数据包</li>
</ul>
</li>
<li>Pod 排障
<ul>
<li>Pod 状态异常</li>
<li>健康检查失败</li>
</ul>
</li>
<li>节点排障
<ul>
<li>节点高负载</li>
<li>内存碎片化</li>
<li>磁盘爆满</li>
<li>PID 爆满</li>
<li>inotify 资源耗尽</li>
</ul>
</li>
<li>网络排障
<ul>
<li>网络超时</li>
<li>网络丢包</li>
</ul>
</li>
<li>集群排障
<ul>
<li><a href="/cloudnative/kubernetes/namespace-terminating.html" target="blank">如何更新Terminating状态的命名空间</a></li>
</ul>
</li>
<li><a href="/cloudnative/kubernetes/fault.html" target="blank">故障复盘模版</a></li>
<li>排障案例
<ul>
<li><a href="/cloudnative/kubernetes/delete-rancher-causing-node-disappear.html" target="blank">卸载 rancher 导致 node 被清空</a></li>
</ul>
</li>
<li><a href="/cloudnative/kubernetes/lvs-health-check.html" target="blank">lvs 健康检查 k8s apiserver</a></li>
</ul>
</li>
<li>安全加固
<ul>
<li><a href="/cloudnative/kubernetes/apiserver-tls.html" target="blank">k8s 更改apiserver使用强加密算法</a></li>
</ul>
</li>
<li><a href="/cloudnative/kubernetes/recommend.html" target="blank">教程|项目|博客|文章推荐</a></li>
<li>附录
<ul>
<li><a href="/cloudnative/kubernetes/kubectl-cheatsheet.html" target="blank">kubectl 速查手册</a></li>
</ul>
</li>
</ul>`,r:{minutes:1.8,words:540},y:"a",t:"Kubernetes 学习笔记",i:"kubernetes"},["/cloudnative/kubernetes/index.html","/cloudnative/kubernetes/readme.md"]],["v-09586b2c","/cloudnative/kubernetes/recommend.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> 教程|项目|博客|文章推荐</h1>
<h2> 常用官网</h2>
<p><a href="https://kubernetes.io/zh/docs/home/" target="_blank" rel="noopener noreferrer">中文官网</a> ⭐ ⭐ ⭐ ⭐ ⭐</p>
<h2> 教程</h2>
<ul>
<li><a href="https://lib.jimmysong.io/kubernetes-handbook/" target="_blank" rel="noopener noreferrer">Kubernetes 基础教程 | jimmysong</a></li>
<li><a href="https://www.qikqiak.com/k8strain2/" target="_blank" rel="noopener noreferrer">Kubernetes进阶训练营 | 阳明</a></li>
<li><a href="https://imroc.cc/kubernetes/index.html" target="_blank" rel="noopener noreferrer">roc云原生</a></li>
<li><a href="https://www.huweihuang.com/kubernetes-notes/" target="_blank" rel="noopener noreferrer">Kubernetes 学习笔记 | 胡伟煌</a></li>
<li><a href="https://www.yuque.com/coolops/kubernetes" target="_blank" rel="noopener noreferrer">Kubernetes 相关文档 | 十点运维</a></li>
<li><a href="https://kuboard.cn/learning/" target="_blank" rel="noopener noreferrer"> Kubernetes 教程 | kuboard</a></li>
<li><a href="https://github.com/ContainerSolutions/k8s-deployment-strategies" target="_blank" rel="noopener noreferrer">Kubernetes 部署策略</a></li>
</ul>`,r:{minutes:.98,words:295},y:"a",t:"教程|项目|博客|文章推荐"},["/cloudnative/kubernetes/recommend","/cloudnative/kubernetes/recommend.md"]],["v-07f61cc9","/cloudnative/kubernetes/sysbench.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> 性能压测指标及方法</h1>
<h2> 一、基础性能测试</h2>
<h3> CPU 性能</h3>
<h4> Super_Pi</h4>
<p>在计算性能测试中，我们使用linux下的bc计算器程序通过反正切函数计算5000位圆周率的cpu耗时来对主机进行测试。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 bc</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">bc</span>
<span class="token comment"># 单核计算性能测试</span>
<span class="token function">time</span> <span class="token builtin class-name">echo</span> <span class="token string">"scale=5000; 4*a(1)"</span> <span class="token operator">|</span> <span class="token function">bc</span> <span class="token parameter variable">-l</span> <span class="token parameter variable">-q</span> <span class="token operator">&amp;&gt;</span><span class="token number">1</span>
<span class="token comment"># 多核计算性能测试</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">1</span> <span class="token number">2</span><span class="token variable">\`</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token punctuation">(</span>time <span class="token builtin class-name">echo</span> <span class="token string">"scale=5000; 4*a(1)"</span> <span class="token operator">|</span> <span class="token function">bc</span> <span class="token parameter variable">-l</span> <span class="token parameter variable">-q</span> <span class="token operator">&amp;&gt;</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token keyword">done</span> <span class="token punctuation">;</span> <span class="token function">wait</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">1</span> <span class="token number">4</span><span class="token variable">\`</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token punctuation">(</span>time <span class="token builtin class-name">echo</span> <span class="token string">"scale=5000; 4*a(1)"</span> <span class="token operator">|</span> <span class="token function">bc</span> <span class="token parameter variable">-l</span> <span class="token parameter variable">-q</span> <span class="token operator">&amp;&gt;</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token keyword">done</span> <span class="token punctuation">;</span> <span class="token function">wait</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.97,words:1792},y:"a",t:"性能压测指标及方法"},["/cloudnative/kubernetes/sysbench","/cloudnative/kubernetes/sysbench.md"]],["v-7d9811f0","/cloudnative/kubernetes/todolist.html",{d:1681909711e3,e:`<h1> Todo</h1>
<h2> 污点与容忍</h2>
<h3> 3、Daemonset 调度问题</h3>
<blockquote>
<p>⚠️ 系统会自动添加 <code>node.kubernetes.io/unschedulable：NoSchedule</code> 容忍度到 DaemonSet Pods。在调度 DaemonSet Pod 时，默认调度器会忽略 <code>unschedulable</code> 节点。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 也就是说会自动忽略下面这个命令，禁止调度的节点</span>
kubectl cordon xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,r:{minutes:.51,words:154},y:"a",t:"Todo"},["/cloudnative/kubernetes/todolist","/cloudnative/kubernetes/todolist.md"]],["v-62d595a7","/cloudnative/kubernetes/velero.html",{d:1681909711e3,c:"云原生",g:["Kubernetes"],e:`<h1> velero 备份恢复</h1>
<h2> 方案制定</h2>
<ol>
<li>物理备份：etcd 备份，保存某一个时刻的快照，快捷方便。</li>
<li>逻辑备份：velero 备份 ，允许用户自己选择备份的内容，比如单个 namespace、指定资源类型等</li>
</ol>
<p>物理备份的优点是速度快，无论是备份还是回恢复，但缺点是元数据不可读，只能全部恢复。而逻辑备份正好相反，因此两者可以结合使用，既能快，又能有细粒度控制的能力。</p>
<blockquote>
<p>etcd 备份恢复见<a href="/cloudnative/kubernetes/etcd-backup-restore.html" target="blank">上文</a></p>
</blockquote>`,r:{minutes:2.05,words:616},y:"a",t:"velero 备份恢复"},["/cloudnative/kubernetes/velero","/cloudnative/kubernetes/velero.md"]],["v-c64aa418","/code/frontend/",{d:1681909711e3,c:"前端",e:`<h1> 前端学习笔记</h1>
<h2> 文章推荐</h2>
<p><a href="https://github.com/qianguyihao/Web" target="_blank" rel="noopener noreferrer">Web前端学习笔记 | 千古壹号</a></p>
`,r:{minutes:.09,words:26},y:"a",t:"前端学习笔记"},["/code/frontend/index.html","/code/frontend/readme.md"]],["v-29d1ef0e","/code/golang/4.1%20%E7%A8%8B%E5%BA%8F%E7%BB%93%E6%9E%84.html",{d:1681909711e3,e:`<h2> 命名</h2>
<p>命名规则：</p>
<p>1）可以使用字母 数字 下划线</p>
<p>2）不允许使用数字开头</p>
<p>3）不允许使用系统关键字</p>
<p>4）区分大小写</p>
<p>5）见名知意</p>
<p>函数命名规则：</p>
<p>1）包本身的名字一般总是小写字母开头</p>
<p>2）可以被外部访问的包是大写字母开头</p>
<p>作用域命名规则：
1）局部变量一般用<code>i</code>这类的短名字</p>
<p>2）全局变量的名字一般较长，更有意义</p>
<p>命名习惯：</p>
<p>1）推荐使用驼峰式命名。</p>
<h2> 声明</h2>`,r:{minutes:10.02,words:3007},y:"a",t:""},["/code/golang/4.1 程序结构.html","/code/golang/4.1%20%E7%A8%8B%E5%BA%8F%E7%BB%93%E6%9E%84","/code/golang/4.1 程序结构.md","/code/golang/4.1%20%E7%A8%8B%E5%BA%8F%E7%BB%93%E6%9E%84.md"]],["v-a03f7510","/code/golang/4.2.1%20%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html",{d:1681909711e3,e:`<p>虽然从底层而言，所有的数据都是由比特组成，但计算机一般操作的是固定大小的数，如整数、浮点数、比特数组、内存地址等。
<strong>Go语言将数据类型分为四类：基础类型、复合类型、引用类型和接口类型</strong>。</p>
<table>
<thead>
<tr>
<th>数据类型</th>
<th>具体类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>基础类型</td>
<td>数字、字符串、布尔型</td>
</tr>
<tr>
<td>复合数据类型</td>
<td>数组、结构体</td>
</tr>
<tr>
<td>引用类型</td>
<td>指针、切片、字典、函数、通道</td>
</tr>
<tr>
<td>接口类型</td>
<td>interface</td>
</tr>
</tbody>
</table>`,r:{minutes:.94,words:281},y:"a",t:""},["/code/golang/4.2.1 基础数据类型.html","/code/golang/4.2.1%20%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B","/code/golang/4.2.1 基础数据类型.md","/code/golang/4.2.1%20%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md"]],["v-47537fdc","/code/golang/dir.html",{d:1681909711e3,e:`<h1> 目录结构设计</h1>
<blockquote>
<p>转载自：极客时间|孔令飞</p>
</blockquote>
<p>遵循一个好的目录规范，把代码目录设计得可维护、可扩展，甚至比文档规范、Commit 规范来得更加重要。</p>
<h2> 要求</h2>
<ul>
<li>命名清晰</li>
<li>功能明确</li>
<li>全面性：目录结构应该尽可能全面地包含研发过程中需要的功能，例如文档、脚本、源码管理、API 实现、工具、第三方包、测试、编译产物等。</li>
<li>可预测性：项目规模一定是从小到大的，所以一个好的目录结构应该能够在项目变大时，仍然保持之前的目录结构</li>
<li>可扩展性</li>
</ul>`,r:{minutes:7.15,words:2145},y:"a",t:"目录结构设计"},["/code/golang/dir","/code/golang/dir.md"]],["v-e3abd37e","/code/golang/go-fmt.html",{d:1681909711e3,c:"Golang",e:`<h1> golang fmt格式“占位符”</h1>
<blockquote>
<p>转载自：<a href="https://studygolang.com/articles/2644" target="_blank" rel="noopener noreferrer">golang fmt格式“占位符”</a></p>
</blockquote>
<p>golang 的fmt 包实现了格式化I/O函数，类似于C的 printf 和 scanf。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code># 定义示例类型和变量
type Human <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name string
<span class="token punctuation">}</span>

var people <span class="token operator">=</span> Human<span class="token punctuation">{</span>Name<span class="token operator">:</span><span class="token string">"zhangsan"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.47,words:1041},y:"a",t:"golang fmt格式“占位符”"},["/code/golang/go-fmt","/code/golang/go-fmt.md"]],["v-61e20373","/code/golang/go-install.html",{d:1681909711e3,c:"Golang",e:`<h1> Golang 安装</h1>
<h2> Windows 安装 go</h2>
<ol>
<li>在Go中文网进行Go最新版安装包的下载， https://studygolang.com/dl</li>
<li>将安装包下载好后直接一步到位next即可</li>
<li>在控制台输入<code>go version</code>，如果显示了版本号，即代表安装成功</li>
<li>修改<code>go env</code>
<ul>
<li><code>go env -w GO111MODULE=on</code>   // 打开GoMOD</li>
<li><code>go env -w GOPROXY=https://goproxy.cn,direct</code>  //配置代理，感谢七牛云</li>
</ul>
</li>
</ol>`,r:{minutes:1.22,words:366},y:"a",t:"Golang 安装"},["/code/golang/go-install","/code/golang/go-install.md"]],["v-9f4ff810","/code/golang/go-restful-api.html",{d:1681909711e3,c:"Golang",e:`<h1> Go语言：RESTful API 服务，急速入门</h1>
<blockquote>
<p>转载自：</p>
<p><a href="https://segmentfault.com/a/1190000040414777" target="_blank" rel="noopener noreferrer">Go语言：RESTful API 服务，急速入门</a></p>
<p><a href="https://www.cnblogs.com/zhaof/p/11346412.html" target="_blank" rel="noopener noreferrer">golang常用的http请求操作 </a></p>
</blockquote>`,r:{minutes:8.35,words:2505},y:"a",t:"Go语言：RESTful API 服务，急速入门"},["/code/golang/go-restful-api","/code/golang/go-restful-api.md"]],["v-a895956a","/code/golang/go-specification.html",{d:1681909711e3,c:"Golang",e:`<h1> Go中的命名规范</h1>
<blockquote>
<p>转载自：<a href="https://www.cnblogs.com/rickiyang/p/11074174.html" target="_blank" rel="noopener noreferrer">Go中的命名规范</a></p>
</blockquote>
<h2> 1.命名规范</h2>
<h3> 1.1 Go是一门区分大小写的语言。</h3>
<p>命名规则涉及变量、常量、全局函数、结构、接口、方法等的命名。 Go语言从语法层面进行了以下限定：任何需要对外暴露的名字必须以大写字母开头，不需要对外暴露的则应该以小写字母开头。</p>`,r:{minutes:2.94,words:881},y:"a",t:"Go中的命名规范"},["/code/golang/go-specification","/code/golang/go-specification.md"]],["v-a77317a2","/code/golang/go-struct.html",{d:1681909711e3,c:"Golang",e:`<h1> Go Struct超详细讲解</h1>
<blockquote>
<p>转载自：<a href="https://juejin.cn/post/6844903814168838151" target="_blank" rel="noopener noreferrer">Go Struct超详细讲解 | 程序员读书</a></p>
</blockquote>
<p>Go语言中提供了对struct的支持,<code>struct</code>,中文翻译称为<code>结构体</code>，与数组一样，属于复合类型，并非引用类型。</p>
<p>Go语言的struct，与C语言中的struct或其他面向对象编程语言中的类(class)类似，可以定义字段(属性)和方法，但也有很不同的地方，需要深入学习，才能区分他们之间的区别。</p>`,r:{minutes:9.09,words:2726},y:"a",t:"Go Struct超详细讲解"},["/code/golang/go-struct","/code/golang/go-struct.md"]],["v-925f3920","/code/golang/",{d:1681909711e3,c:"Golang",e:`<h1> Golang 学习笔记</h1>
<h2> 常用官网</h2>
<p><a href="https://golang.google.cn/" target="_blank" rel="noopener noreferrer">golang.google.cn</a> ⭐</p>
<p><a href="https://studygolang.com/" target="_blank" rel="noopener noreferrer">go 语言中文网</a> ⭐</p>
<p><a href="https://gocn.vip/" target="_blank" rel="noopener noreferrer">GoCN社区</a></p>`,r:{minutes:.25,words:75},y:"a",t:"Golang 学习笔记"},["/code/golang/index.html","/code/golang/readme.md"]],["v-689741b0","/code/golang/%E5%BF%AB%E9%80%9F%E4%BD%BF%E7%94%A8gomod.html",{d:1681909711e3,e:`<blockquote>
<p>转载自： https://www.jianshu.com/p/bbed916d16ea</p>
</blockquote>
<p>如果你还在使用 GOPATH 模式来开发Golang程序，那么你可以参考本文来告别 GOPATH，并带给你一个方便的包管理工具。</p>
<p>关于 go mod 的说明和简单使用，可以参考：</p>
<p>1、<a href="https://blog.csdn.net/benben_2015/article/details/82227338" target="_blank" rel="noopener noreferrer">Go1.1.1新功能module的介绍及使用</a></p>`,r:{minutes:3.29,words:987},y:"a",t:""},["/code/golang/快速使用gomod.html","/code/golang/%E5%BF%AB%E9%80%9F%E4%BD%BF%E7%94%A8gomod","/code/golang/快速使用gomod.md","/code/golang/%E5%BF%AB%E9%80%9F%E4%BD%BF%E7%94%A8gomod.md"]],["v-24848cfb","/code/python/access-control.html",{d:1681909711e3,c:"Python",e:`<h1> 9.2 访问控制和属性装饰器</h1>
<h2> 访问控制</h2>
<p><strong>私有（Private） 成员</strong></p>
<p>在 Python 中，在类变量或实例变量前使用两个下划线的变量，称为私有成员，包括私有属性、私有方法。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">'1'</span>
        self<span class="token punctuation">.</span>__name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>__age <span class="token operator">=</span> age

    <span class="token keyword">def</span> <span class="token function">__showage</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>__age<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>Person<span class="token punctuation">.</span>__name<span class="token punctuation">)</span>  <span class="token comment"># 都不可以调用</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Person<span class="token punctuation">.</span>__showage<span class="token punctuation">)</span>
tom <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">'tom'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tom<span class="token punctuation">.</span>__name<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tom<span class="token punctuation">.</span>__showage<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.13,words:940},y:"a",t:"9.2 访问控制和属性装饰器"},["/code/python/access-control","/code/python/access-control.md"]],["v-017fe212","/code/python/action-scope.html",{d:1681909711e3,c:"Python",e:`<h1> 4.3 作用域</h1>
<p>一个标识符的可见范围，这就是标识符的作用域。一般常说的是变量的作用域</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	x <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment"># 可以访问到吗</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.65,words:1995},y:"a",t:"4.3 作用域"},["/code/python/action-scope","/code/python/action-scope.md"]],["v-632afeee","/code/python/bytearray-data.html",{d:1681909711e3,c:"Python",e:`<h1> 2.3.3 字节序列</h1>
<p>Python3 引入两个新的类型 bytes、bytearray。</p>
<p>bytes 不可变字节序列；bytearray 是可变字节数组。</p>
<h2> 编码与解码</h2>
<ul>
<li>编码：str =&gt; bytes，将字符串这个字符序列使用指定字符集encode编码为一个个字节组成的序列bytes</li>
<li>解码：bytes 或 bytearray =&gt; str，将一个个字节按照某种指定的字符集解码为一个个字符串组成的字符串</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 缺省为utf-8编码</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"啊"</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"啊"</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">'utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"啊"</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">'gbk'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">b'abc'</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">'utf8'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">b'\\xb0\\xa1'</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">'gbk'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">b'\\xe5\\x95\\x8a'</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.98,words:1494},y:"a",t:"2.3.3 字节序列"},["/code/python/bytearray-data","/code/python/bytearray-data.md"]],["v-6a3d55a6","/code/python/codeSpecification.html",{d:1681909711e3,c:"Python",e:`<h1> 1.2 Python 代码规范</h1>
<blockquote>
<p>转载自：草根学 Python | TwoWater</p>
</blockquote>
<h2> 简明概述</h2>
<h3> 代码格式</h3>
<h4> 缩进</h4>
<ul>
<li>统一使用 4 个空格进行缩进</li>
</ul>
<h4> 行宽</h4>
<p>每行代码尽量不超过 80 个字符(在特殊情况下可以略微超过 80 ，但最长不得超过 120)</p>
<p>理由：</p>
<ul>
<li>这在查看 side-by-side 的 diff 时很有帮助</li>
<li>方便在控制台下查看代码</li>
<li>太长可能是设计有缺陷</li>
</ul>`,r:{minutes:6.49,words:1947},y:"a",t:"1.2 Python 代码规范"},["/code/python/codeSpecification","/code/python/codeSpecification.md"]],["v-7cb1645a","/code/python/first.html",{d:1681909711e3,c:"Python",e:`<h1> 1.1 初识Python</h1>
<blockquote>
<p>转载自：Python - 100天从新手到大师 | 骆昊</p>
</blockquote>
<h2> Python简介</h2>
<h3> Python的历史</h3>
<ol>
<li>1989年圣诞节：Guido von Rossum开始写Python语言的编译器。</li>
<li>1991年2月：第一个Python编译器（同时也是解释器）诞生，它是用C语言实现的（后面），可以调用C语言的库函数。在最早的版本中，Python已经提供了对“类”，“函数”，“异常处理”等构造块的支持，还有对列表、字典等核心数据类型，同时支持以模块为基础来构造应用程序。</li>
<li>1994年1月：Python 1.0正式发布。</li>
<li>2000年10月16日：Python 2.0发布，增加了完整的<a href="https://zh.wikipedia.org/wiki/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6_(%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8)" target="_blank" rel="noopener noreferrer">垃圾回收</a>，提供了对<a href="https://zh.wikipedia.org/wiki/Unicode" target="_blank" rel="noopener noreferrer">Unicode</a>的支持。与此同时，Python的整个开发过程更加透明，社区对开发进度的影响逐渐扩大，生态圈开始慢慢形成。</li>
<li>2008年12月3日：Python 3.0发布，它并不完全兼容之前的Python代码，不过因为目前还有不少公司在项目和运维中使用Python 2.x版本，所以Python 3.x的很多新特性后来也被移植到Python 2.6/2.7版本中。</li>
</ol>`,r:{minutes:6.45,words:1935},y:"a",t:"1.1 初识Python"},["/code/python/first","/code/python/first.md"]],["v-1205d2a0","/code/python/func-prog.html",{d:1681909711e3,c:"Python",e:`<h1> 5 函数式编程</h1>
<p>函数是Python内建支持的一种封装，我们通过把大段代码拆成函数，通过一层一层的函数调用，就可以把复杂任务分解成简单的任务，这种分解可以称之为面向过程的程序设计。函数就是面向过程的程序设计的基本单元。</p>
<p>而函数式编程（请注意多了一个“式”字）——Functional Programming，虽然也可以归结到面向过程的程序设计，但其思想更接近数学计算。</p>
<p>我们首先要搞明白计算机（Computer）和计算（Compute）的概念。</p>
<p>在计算机的层次上，CPU执行的是加减乘除的指令代码，以及各种条件判断和跳转指令，所以，汇编语言是最贴近计算机的语言。</p>`,r:{minutes:1.69,words:507},y:"a",t:"5 函数式编程"},["/code/python/func-prog","/code/python/func-prog.md"]],["v-bf9d600a","/code/python/function-parameter.html",{d:1681909711e3,c:"Python",e:`<h1> 4.2 函数参数</h1>
<p>函数在定义是要定义好形式参数，调用时也提供足够的实际参数，一般来说，形参和实参个数要一致（可变参数除外）。</p>
<h2> 实参传参方式</h2>
<p>1、位置传参</p>
<p>定义时def f(x, y, z)， 调用使用 f(1, 3, 5)，按照参数定义顺序传入实参</p>
<p>2、关键字传参</p>
<p>定义时def f(x, y, z)，调用使用 f(x=1, y=3, z=5)，使用形参的名字来传入实参的方式，如果使用了形参名字，那么传参顺序就可和定义顺序不同</p>
<p>要求位置参数必须在关键字参数之前传入，位置参数是按位置对应的</p>`,r:{minutes:3.76,words:1127},y:"a",t:"4.2 函数参数"},["/code/python/function-parameter","/code/python/function-parameter.md"]],["v-e912ba58","/code/python/high-func.html",{d:1681909711e3,c:"Python",e:`<h1> 5.1 高阶函数</h1>
<p><strong>一等共民</strong></p>
<ul>
<li>函数在Python是一等公民（First-Class Object）</li>
<li>函数也是对象，是可调用对象</li>
<li>函数可以作为普通变量，也可以作为函数的参数、返回值</li>
</ul>
<p><strong>高级函数</strong></p>
<p>高阶函数（High-order Function）</p>
<ul>
<li>数学概念 y = f(g(x))</li>
<li>在数学和计算机科学中，高阶函数应当是至少满足下面一个条件的函数
<ul>
<li>接受一个或多个函数作为参数</li>
<li>输出一个函数</li>
</ul>
</li>
</ul>`,r:{minutes:8.57,words:2571},y:"a",t:"5.1 高阶函数"},["/code/python/high-func","/code/python/high-func.md"]],["v-ef1495f0","/code/python/lambda.html",{d:1681909711e3,c:"Python",e:`<h1> 5.3 匿名函数</h1>
<p>Python 中，匿名函数也叫 lambda 表达式。</p>
<p>匿名：隐藏名字，即没有名称</p>
<p>匿名函数：没有名字的函数。</p>
<p>函数没有名字该如何定义？函数没有名字如何调用？</p>
<p><strong>Lambda 表达式</strong></p>
<p>Python中，使用 Lambda 表达式构建匿名函数。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">**</span> <span class="token number">2</span>
<span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">**</span> <span class="token number">2</span> <span class="token comment"># 定义</span>
a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment"># 调用</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
foo <span class="token operator">=</span> <span class="token keyword">lambda</span> x<span class="token punctuation">,</span>y<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token operator">+</span>y<span class="token punctuation">)</span> <span class="token operator">**</span> <span class="token number">2</span> <span class="token comment"># 定义函数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>foo<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 等价于</span>
<span class="token keyword">def</span> <span class="token function">foo</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>x<span class="token operator">+</span>y<span class="token punctuation">)</span> <span class="token operator">**</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.44,words:432},y:"a",t:"5.3 匿名函数"},["/code/python/lambda","/code/python/lambda.md"]],["v-bcee94b6","/code/python/list-tuple-data.html",{d:1681909711e3,c:"Python",e:`<h1> 2.3.4 列表 list &amp; 元组 tuple</h1>
<h2> 列表 list</h2>
<ul>
<li>一个排列整齐的队伍，Python采用顺序表实现</li>
<li>列表内的个体称作元素，由若干元素组成列表</li>
<li>元素可以是任意对象（数字、字符串、对象、列表等）</li>
<li>列表内元素有顺序，可以使用索引</li>
<li>线性的数据结构</li>
<li>使用 [ ] 表示</li>
<li>列表是可变的</li>
</ul>
<p>列表是非常重要的数据结构，对其内存结构和操作方法必须烂熟于心。</p>
<h3> 初始化</h3>
<ul>
<li>list() -&gt; new empty list</li>
<li>list(iterable) -&gt;  new list initialized from iterable's items</li>
<li>[]</li>
<li>列表不能一开始就定义大小</li>
</ul>`,r:{minutes:4.7,words:1410},y:"a",t:"2.3.4 列表 list & 元组 tuple"},["/code/python/list-tuple-data","/code/python/list-tuple-data.md"]],["v-e6964004","/code/python/num-data.html",{d:1681909711e3,c:"Python",e:`<h1> 2.3.1 数值型</h1>
<ul>
<li>int、float、complex、bool  都是class，1、5.0、2+3j 都是对象即实例</li>
<li>int：python3 的 int 就是长整型，且没有大小限制，受限于内存区域的大小</li>
<li>float：由整数部分和小数部分组成。支持十进制和科学计数法表示。C 的双精度型实现</li>
<li>complex：有实数和虚数部分组成，实数和虚数部分都是浮点数，3+4.2J</li>
<li>bool：int 的子类，仅有2个实例 True、False 对应1和0，可以和整数直接运算</li>
</ul>
<h2> 整数</h2>`,r:{minutes:2.22,words:665},y:"a",t:"2.3.1 数值型"},["/code/python/num-data","/code/python/num-data.md"]],["v-36c2f847","/code/python/process-thread.html",{d:1681909711e3,c:"Python",e:`<h1> 并发</h1>
<p><strong>并发和并行区别</strong></p>
<p>并行，parallel
同时做某些事，可以互不干扰的同一个时刻做几件事</p>
<p>并发，concurrency
也是同时做某些事，但是强调，一个时段内有事情要处理。</p>
<p>举例
高速公路的车道，双向4车道，所有车辆（数据）可以互不干扰的在自己的车道上奔跑（传输）。
在同一个时刻，每条车道上可能同时有车辆在跑，是同时发生的概念，这是并行。
在一段时间内，有这么多车要通过，这是并发。</p>
<p>并行不过是使用水平扩展方式解决并发的一种手段而已。</p>
<h1> 进程和线程</h1>
<p>进程（Process）是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础。</p>`,r:{minutes:2,words:600},y:"a",t:"并发"},["/code/python/process-thread","/code/python/process-thread.md"]],["v-11582f7c","/code/python/python-analytic-expre.html",{d:1681909711e3,c:"Python",e:`<h1> 3.2 列表、集合、字典解析式</h1>
<h2> 列表解析式</h2>
<p>列表解析式 List Comprehension，也叫列表推导式。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 生成一个列表，元素0~9，将每一个元素加1后的平方值组成新的列表</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    x<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.53,words:759},y:"a",t:"3.2 列表、集合、字典解析式"},["/code/python/python-analytic-expre","/code/python/python-analytic-expre.md"]],["v-747a5278","/code/python/python-basic-grammar.html",{d:1681909711e3,c:"Python",e:`<h1> 2.1 Python基础语法</h1>
<h2> 数字</h2>
<ul>
<li>
<p>整数<code>int</code></p>
<ul>
<li><code>Python3</code>开始不再区分 long 、int ，long 被重命名为int，所以只有 int 类型了</li>
<li>进制表示：
<ul>
<li>十进制10</li>
<li>十六进制0x10</li>
<li>八进制0o10</li>
<li>二进制0b10</li>
</ul>
</li>
<li>bool 类型，有2个值 True、False</li>
</ul>
</li>
<li>
<p>浮点数 float</p>
<ul>
<li>1.2、3.1415、-0.12、1.46e9等价于科学计数法1.46*10<sup>9</sup></li>
</ul>
</li>
<li>
<p>复数 complex</p>
<ul>
<li>1+2j 或 +2J</li>
</ul>
</li>
</ul>`,r:{minutes:4.58,words:1374},y:"a",t:"2.1 Python基础语法"},["/code/python/python-basic-grammar","/code/python/python-basic-grammar.md"]],["v-45447483","/code/python/python-control.html",{d:1681909711e3,c:"Python",e:`<h1> 2.2 程序控制</h1>
<ul>
<li>顺序
<ul>
<li>按照先后顺序一条条执行
例如，先洗手，再吃饭，再洗碗</li>
</ul>
</li>
<li>分支
<ul>
<li>根据不同的情况判断，条件满足执行某条件下的语句
例如，先洗手，如果饭没有做好，玩游戏；如果饭做好了，就吃饭；如果饭都没有做，叫外卖</li>
</ul>
</li>
<li>循环
<ul>
<li>条件满足就反复执行，不满足就不执行或不再执行
例如，先洗手，看饭好了没有，没有好，一会来看一次是否好了，一会儿来看一次，直到饭
好了，才可是吃饭。这里循环的条件是饭没有好，饭没有好，就循环的来看饭好了没有</li>
</ul>
</li>
</ul>`,r:{minutes:3.28,words:984},y:"a",t:"2.2 程序控制"},["/code/python/python-control","/code/python/python-control.md"]],["v-0ed8c2b6","/code/python/python-decorator.html",{d:1681909711e3,c:"Python",e:`<h1> 5.4 装饰器</h1>
<h2> 由来</h2>
<p>需求：为一个加法函数增加记录实参的功能</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'add called. x={}, y={}'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 增加的记录功能</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y

add<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.87,words:1761},y:"a",t:"5.4 装饰器"},["/code/python/python-decorator","/code/python/python-decorator.md"]],["v-659e17b6","/code/python/python-dir-file-pro.html",{d:1681909711e3,c:"Python",e:`<h1> 7.1 操作文件和目录</h1>
<h2> 文件IO操作</h2>
<table>
<thead>
<tr>
<th>函数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>open</strong></td>
<td>打开</td>
</tr>
<tr>
<td><strong>read</strong></td>
<td>读取</td>
</tr>
<tr>
<td><strong>write</strong></td>
<td>写入</td>
</tr>
<tr>
<td><strong>close</strong></td>
<td>关闭</td>
</tr>
<tr>
<td>readline</td>
<td>行读取</td>
</tr>
<tr>
<td>readlines</td>
<td>多行读取</td>
</tr>
</tbody>
</table>`,r:{minutes:10.13,words:3038},y:"a",t:"7.1 操作文件和目录"},["/code/python/python-dir-file-pro","/code/python/python-dir-file-pro.md"]],["v-583cf311","/code/python/python-exception.html",{d:1681909711e3,c:"Python",e:`<h1> 8.1 异常处理</h1>
<p><strong>错误 Error</strong></p>
<p>逻辑错误：算法写错了，例如加法写成了减法</p>
<p>笔误：例如变量名写错了，语法错误</p>
<p>函数或类使用错误，其实这也属于逻辑错误</p>
<p>总之，错误是可以避免的</p>
<p><strong>异常 Exception</strong></p>
<p>本意就是意外情况</p>
<p>这有个前提，没有出现上面说的错误，也就是说程序写的没有问题，但是在某些情况下，会出现一些意外，导致程序无法正常的执行下去。</p>
<p>例如open函数操作一个文件，文件不存在，或者创建一个文件时已经存在了，或者访问一个网络文件，突然断网了，这就是异常，是个意外的情况。</p>`,r:{minutes:6.66,words:1998},y:"a",t:"8.1 异常处理"},["/code/python/python-exception","/code/python/python-exception.md"]],["v-33deec0c","/code/python/python-function.html",{d:1681909711e3,c:"Python",e:`<h1> 4.1 函数的定义 &amp; 调用 &amp; 返回值</h1>
<h2> 函数</h2>
<p>数学定义</p>
<ul>
<li>y=f(x) ，y是x的函数，x是自变量。y=f(x0, x1, ..., xn)</li>
</ul>
<p>Python函数</p>
<ul>
<li>由若干语句组成的语句块、函数名称、参数列表构成，它是组织代码的最小单元</li>
<li>完成一定的功能</li>
</ul>
<p>函数的作用</p>
<ul>
<li>结构化编程对代码的最基本的封装，一般按照功能组织一段代码</li>
<li>封装的目的为了复用，减少冗余代码</li>
<li>代码更加简洁美观、可读易懂</li>
</ul>`,r:{minutes:2.56,words:769},y:"a",t:"4.1 函数的定义 & 调用 & 返回值"},["/code/python/python-function","/code/python/python-function.md"]],["v-21e01b0d","/code/python/python-generator.html",{d:1681909711e3,c:"Python",e:`<h1> 3.3 生成器</h1>
<p>要创建一个generator，有很多种方法。</p>
<h2> 生成器表达式</h2>
<p>第一种方法很简单，只要把一个列表生成式的<code>[]</code>改成<code>()</code>，就创建了一个generator</p>
<p>语法</p>
<ul>
<li>(返回值 for 元素 in 可迭代对象 if 条件)</li>
<li>列表解析式的中括号换成小括号就行了</li>
<li>返回一个生成器对象</li>
</ul>
<p>和列表解析式的区别</p>
<ul>
<li>生成器表达式是按需计算（或称惰性求值、延迟计算），需要的时候才计算值，返回可迭代对象迭代器，只能迭代一次</li>
<li>列表解析式是立即返回值，返回可迭代对象列表，不是迭代器，可反复迭代</li>
</ul>`,r:{minutes:5.81,words:1744},y:"a",t:"3.3 生成器"},["/code/python/python-generator","/code/python/python-generator.md"]],["v-973f5452","/code/python/python-gil-multiprocessing.html",{d:1681909711e3,c:"Python",e:`<h1> 10.1 多进程</h1>
<h2> GIL</h2>
<p>CPython 在解释器进程级别有一把锁，叫做GIL，即全局解释器锁。</p>
<p>GIL 保证CPython进程中，只有一个线程执行字节码。甚至是在多核CPU的情况下，也只允许同时只能有一个CPU核心上运行该进程的一个线程。</p>
<p>CPython中</p>
<ul>
<li>IO密集型，某个线程阻塞，GIL会释放，就会调度其他就绪线程</li>
<li>CPU密集型，当前线程可能会连续的获得GIL，导致其它线程几乎无法使用CPU</li>
<li>在CPython中由于有GIL存在，IO密集型，使用多线程较为合算；CPU密集型，使用多进程，要绕开GIL</li>
</ul>`,r:{minutes:6.81,words:2043},y:"a",t:"10.1 多进程"},["/code/python/python-gil-multiprocessing","/code/python/python-gil-multiprocessing.md"]],["v-1941575d","/code/python/python-instance.html",{d:1681909711e3,c:"Python",g:["工作脚本"],e:`<h1> python 实际工作中的实例</h1>
<h2> 让 windows 压测机 解析内网进行压测，避免占用外网带宽</h2>
<p>1）生成 hosts 解析文件，将解析文件分成 N 份，解析到不同的 内网ip</p>
<p><code>cat sync_xxx_hosts.py</code></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token keyword">import</span> requests
<span class="token keyword">import</span> json

<span class="token keyword">def</span> <span class="token function">get_hosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 调用 api 获取所有 nginx 主机 ip 地址</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
            url<span class="token operator">=</span><span class="token string">"https://xxx/api/v1/appid/xxx/hosts"</span><span class="token punctuation">,</span>
            headers<span class="token operator">=</span><span class="token punctuation">{</span>
                <span class="token string">"Authorization"</span><span class="token punctuation">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token string">"Content-Type"</span><span class="token punctuation">:</span> <span class="token string">"application/json; charset=utf-8"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">=</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        result <span class="token operator">=</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'data'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'assets'</span><span class="token punctuation">]</span>
        hosts <span class="token operator">=</span> <span class="token punctuation">[</span>host<span class="token punctuation">[</span><span class="token string">'ip'</span><span class="token punctuation">]</span> <span class="token keyword">for</span> host <span class="token keyword">in</span> result<span class="token punctuation">]</span>
        <span class="token keyword">return</span> hosts

    <span class="token keyword">except</span> requests<span class="token punctuation">.</span>exceptions<span class="token punctuation">.</span>RequestException<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'HTTP Request failed'</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">send_request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 调用 api 获取域名列表</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
            url<span class="token operator">=</span>
            <span class="token string">"xxx"</span><span class="token punctuation">,</span>
            headers<span class="token operator">=</span><span class="token punctuation">{</span>
                <span class="token string">"Authorization"</span><span class="token punctuation">:</span> <span class="token string">"xxx"</span><span class="token punctuation">,</span>
                <span class="token string">"Content-Type"</span><span class="token punctuation">:</span> <span class="token string">"application/json; charset=utf-8"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">=</span>json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        result <span class="token operator">=</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'data'</span><span class="token punctuation">]</span>
        prod_domain_list <span class="token operator">=</span> <span class="token punctuation">[</span>
            domain<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span> <span class="token keyword">for</span> domain <span class="token keyword">in</span> result
            <span class="token keyword">if</span> domain<span class="token punctuation">[</span><span class="token string">'lbcluster'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'id'</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span>
        <span class="token punctuation">]</span>
        ext_website_domain_list <span class="token operator">=</span> <span class="token punctuation">[</span>
            domain<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span> <span class="token keyword">for</span> domain <span class="token keyword">in</span> result
            <span class="token keyword">if</span> domain<span class="token punctuation">[</span><span class="token string">'lbcluster'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'id'</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">9</span>
        <span class="token punctuation">]</span>
        <span class="token comment"># 通过域名获取不到的 域名列表，和nginx地址</span>
        xx_domain_list <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string">'xxx.xxx.xx'</span>
        <span class="token punctuation">]</span>
        ext_website_hosts <span class="token operator">=</span> get_hosts<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            filename <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f'/etc/ansible/files/hosts</span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">'</span></span>
            <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">'w'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
                <span class="token keyword">for</span> xx_domain <span class="token keyword">in</span> xx_domain_list<span class="token punctuation">:</span>
                    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">'IP地址 '</span> <span class="token operator">+</span> bi_domain <span class="token operator">+</span> <span class="token string">'\\n'</span><span class="token punctuation">)</span>
                <span class="token keyword">for</span> domain <span class="token keyword">in</span> prod_domain_list<span class="token punctuation">:</span>
                    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">'IP地址 '</span> <span class="token operator">+</span> domain <span class="token operator">+</span> <span class="token string">'\\n'</span><span class="token punctuation">)</span>
                <span class="token keyword">for</span> domain <span class="token keyword">in</span> ext_website_domain_list<span class="token punctuation">:</span>
                    host <span class="token operator">=</span> ext_website_hosts<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
                    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>host <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> domain <span class="token operator">+</span> <span class="token string">'\\n'</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> requests<span class="token punctuation">.</span>exceptions<span class="token punctuation">.</span>RequestException<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'HTTP Request failed'</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    send_request<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:13.85,words:4156},y:"a",t:"python 实际工作中的实例"},["/code/python/python-instance","/code/python/python-instance.md"]],["v-3f18b850","/code/python/python-io-model.html",{d:1681909711e3,c:"Python",e:`<h1> 17 IO 模型</h1>
<h2> 重要概念</h2>
<h3> 同步、异步</h3>
<p>函数或方法被调用的时候，调用者是否得到<strong>最终结果</strong>的。
直接得到最终结果结果的，就是同步调用；
不直接得到最终结果的，就是异步调用。</p>
<h3> 阻塞、非阻塞</h3>
<p>函数或方法调用的时候，是否立刻返回。
立即返回就是非阻塞调用；
不立即返回就是阻塞调用。</p>
<h3> 区别</h3>
<p>同步、异步，与阻塞、非阻塞不相关。
同步、异步强调的是，是否得到（最终的）<strong>结果</strong>；
阻塞、非阻塞强调是时间，是否<strong>等待</strong>。</p>`,r:{minutes:8.93,words:2680},y:"a",t:"17 IO 模型"},["/code/python/python-io-model","/code/python/python-io-model.md"]],["v-3a976324","/code/python/python-iterator.html",{d:1681909711e3,c:"Python",e:`<h1> 3.4 迭代器</h1>
<p>我们已经知道，可以直接作用于<code>for</code>循环的数据类型有以下几种：</p>
<p>一类是集合数据类型，如<code>list</code>、<code>tuple</code>、<code>dict</code>、<code>set</code>、<code>str</code>等；</p>
<p>一类是<code>generator</code>，包括生成器和带<code>yield</code>的generator function。</p>
<p>这些可以直接作用于<code>for</code>循环的对象统称为可迭代对象：<code>Iterable</code>。</p>`,r:{minutes:3.2,words:960},y:"a",t:"3.4 迭代器"},["/code/python/python-iterator","/code/python/python-iterator.md"]],["v-a1e7d070","/code/python/python-linear-data-structure.html",{d:1681909711e3,c:"Python",e:`<h1> 3.1 线性结构特征 可迭代 &amp; 切片</h1>
<p>线性结构特征：</p>
<ul>
<li>可迭代 for ... in</li>
<li>有长度，通过len(x)获取，容器</li>
<li>通过整数下标可以访问元素。正索引、负索引
<ul>
<li>可以切片</li>
</ul>
</li>
</ul>
<p>已经学习过的线性结构：list、tuple、str、bytes、bytearray</p>
<h2> 切片</h2>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>sequence<span class="token punctuation">[</span>start<span class="token punctuation">:</span>stop<span class="token punctuation">]</span>
sequence<span class="token punctuation">[</span>start<span class="token punctuation">:</span>stop<span class="token punctuation">:</span>step<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.1,words:929},y:"a",t:"3.1 线性结构特征 可迭代 & 切片"},["/code/python/python-linear-data-structure","/code/python/python-linear-data-structure.md"]],["v-b5c2201a","/code/python/python-magic.html",{d:1681909711e3,c:"Python",e:`<h1> 11 魔术方法</h1>
<h2> 实例化</h2>
<table>
<thead>
<tr>
<th>方法</th>
<th>意义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>__new__</code></td>
<td>实例化一个对象<br>该方法需要返回一个值，如果该值不是 cls 的实例，则不会调用 <code>__init__</code><br>该方法永远都是静态方法</td>
</tr>
</tbody>
</table>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>kwargs<span class="token punctuation">)</span>
        <span class="token comment">#return super().__new__(cls)</span>
        <span class="token comment">#return 1</span>
        <span class="token keyword">return</span> <span class="token boolean">None</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        
a <span class="token operator">=</span> A<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:11.83,words:3548},y:"a",t:"11 魔术方法"},["/code/python/python-magic","/code/python/python-magic.md"]],["v-4cb0a918","/code/python/python-module-install.html",{d:1681909711e3,c:"Python",e:`<h1> 6.1 Python 模块常用的几种安装方式</h1>
<h2> 单文件模块</h2>
<p>直接把文件拷贝到 <code>$python_dir/Lib</code></p>
<h2> 多文件模块，带setup.py</h2>
<p>下载模块包，进行解压，进入模块文件夹，执行：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python setup.py <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.78,words:234},y:"a",t:"6.1 Python 模块常用的几种安装方式"},["/code/python/python-module-install","/code/python/python-module-install.md"]],["v-998003b4","/code/python/python-module.html",{d:1681909711e3,c:"Python",e:`<h1> 6 模块</h1>
<h2> 模块简介</h2>
<p>在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。</p>
<p>为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在Python中，一个.py文件就称之为一个模块（Module）。</p>
<p>使用模块有什么好处？</p>
<p>最大的好处是大大提高了代码的可维护性。其次，编写代码不必从零开始。当一个模块编写完毕，就可以被其他地方引用。我们在编写程序的时候，也经常引用其他模块，包括Python内置的模块和来自第三方的模块。</p>`,r:{minutes:5.07,words:1521},y:"a",t:"6 模块"},["/code/python/python-module","/code/python/python-module.md"]],["v-0786bde2","/code/python/python-oo-inher-pol.html",{d:1681909711e3,c:"Python",e:`<h1> 9.3 继承、多态和Mixin</h1>
<h2> 继承基本概念</h2>
<p>面向对象三要素之一，继承 Inheritance</p>
<p>人类和猫类都继承自动物类。
个体继承自父母，继承了父母的一部分特征，但也可以有自己的个性。
在面向对象的世界中，从父类继承，就可以直接拥有父类的属性和方法，这样可减少代码冗余、多复用。子类也可以定义自己的属性和方法。</p>
<p>看一个不用继承的例子</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">shout</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Animal shouts'</span><span class="token punctuation">)</span>

a <span class="token operator">=</span> Animal<span class="token punctuation">(</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>shout<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">shout</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Cat shouts'</span><span class="token punctuation">)</span>

c <span class="token operator">=</span> Cat<span class="token punctuation">(</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span>shout<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:11.85,words:3554},y:"a",t:"9.3 继承、多态和Mixin"},["/code/python/python-oo-inher-pol","/code/python/python-oo-inher-pol.md"]],["v-9320324e","/code/python/python-oo-package.html",{d:1681909711e3,c:"Python",e:`<h1> 9.1 类、实例和封装</h1>
<h2> 封装</h2>
<p>封装就是定义类，将属性和操作组织在类中</p>
<h3> Python 类定义</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">ClassName</span><span class="token punctuation">:</span>
    语句块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:9.58,words:2875},y:"a",t:"9.1 类、实例和封装"},["/code/python/python-oo-package","/code/python/python-oo-package.md"]],["v-e25702a0","/code/python/python-oop.html",{d:1681909711e3,c:"Python",e:`<h1> 9 面向对象编程</h1>
<h2> 面向对象</h2>
<p>面向对象编程——Object Oriented Programming，简称OOP，是一种程序设计思想。OOP把对象作为程序的基本单元，一个对象包含了数据和操作数据的函数。</p>
<p>面向过程的程序设计把计算机程序视为一系列的命令集合，即一组函数的顺序执行。为了简化程序设计，面向过程把函数继续切分为子函数，即把大块函数通过切割成小块函数来降低系统的复杂度。</p>
<p>而面向对象的程序设计把计算机程序视为一组对象的集合，而每个对象都可以接收其他对象发过来的消息，并处理这些消息，计算机程序的执行就是一系列消息在各个对象之间传递。</p>`,r:{minutes:3.5,words:1049},y:"a",t:"9 面向对象编程"},["/code/python/python-oop","/code/python/python-oop.md"]],["v-737185ae","/code/python/python-partial-function.html",{d:1681909711e3,c:"Python",e:`<h1> 5.5 偏函数</h1>
<p>Python的<code>functools</code>模块提供了很多有用的功能，其中一个就是偏函数（Partial function）。要注意，这里的偏函数和数学意义上的偏函数不一样。</p>
<p>在介绍函数参数的时候，我们讲到，通过设定参数的默认值，可以降低函数调用的难度。而偏函数也可以做到这一点。举例如下：</p>
<p><code>int()</code>函数可以把字符串转换为整数，当仅传入字符串时，<code>int()</code>函数默认按十进制转换：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token string">'12345'</span><span class="token punctuation">)</span>
<span class="token number">12345</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.02,words:605},y:"a",t:"5.5 偏函数"},["/code/python/python-partial-function","/code/python/python-partial-function.md"]],["v-8d5f6fee","/code/python/python-pip.html",{d:1681909711e3,c:"Python",e:`<h1> 1.5 pypi 配置国内镜像</h1>
<blockquote>
<p>转载自：Python | willseecloud | 看云</p>
</blockquote>
<p>pypi 国内镜像目前有：</p>
<ul>
<li>阿里云(aliyun) - https://mirrors.aliyun.com/pypi/simple/</li>
<li>豆瓣(douban) - https://pypi.douban.com/simple/</li>
<li>清华大学(tuna) - <a href="https://pypi.tuna.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer">https://pypi.tuna.tsinghua.edu.cn</a></li>
<li>中国科学技术大学 - http://pypi.mirrors.ustc.edu.cn/</li>
</ul>`,r:{minutes:.73,words:220},y:"a",t:"1.5 pypi 配置国内镜像"},["/code/python/python-pip","/code/python/python-pip.md"]],["v-13fe8742","/code/python/python-recursive-function.html",{d:1681909711e3,c:"Python",e:`<h1> 4.4 递归函数</h1>
<h2> 简介</h2>
<p>在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。</p>
<p>举个例子，我们来计算阶乘<code>n! = 1 x 2 x 3 x ... x n</code>，用函数<code>fact(n)</code>表示，可以看出：</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20210622160651079.png" alt="image-20210622160651079"></p>`,r:{minutes:3.26,words:977},y:"a",t:"4.4 递归函数"},["/code/python/python-recursive-function","/code/python/python-recursive-function.md"]],["v-c57983ea","/code/python/python-return-function.html",{d:1681909711e3,c:"Python",e:`<h1> 5.2 返回函数</h1>
<h2> 柯里化</h2>
<ul>
<li>指的是将原来接受两个参数的函数变成新的接受一个参数的函数的过程。新的函数返回一个以原有第二个参数为参数的函数</li>
<li>z = f(x, y) 转换成 z = f(x)(y) 的形式</li>
</ul>
<p>例如</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.32,words:995},y:"a",t:"5.2 返回函数"},["/code/python/python-return-function","/code/python/python-return-function.md"]],["v-09b7cf20","/code/python/python-serialize.html",{d:1681909711e3,c:"Python",e:`<h1> 7.2 序列化和反序列化</h1>
<h2> csv</h2>
<h3> csv 文件简介</h3>
<p>参看 RFC 4180
http://www.ietf.org/rfc/rfc4180.txt</p>
<p>逗号分隔值Comma-Separated Values。
CSV 是一个被行分隔符、列分隔符划分成行和列的文本文件。
CSV 不指定字符编码。</p>
<p>行分隔符为\\r\\n，最后一行可以没有换行符
列分隔符常为逗号或者制表符。
每一行称为一条记录record</p>
<p>字段可以使用双引号括起来，也可以不使用。如果字段中出现了双引号、逗号、换行符必须使用双引号
括起来。如果字段的值是双引号，使用两个双引号表示一个转义。</p>`,r:{minutes:5.53,words:1659},y:"a",t:"7.2 序列化和反序列化"},["/code/python/python-serialize","/code/python/python-serialize.md"]],["v-f15b3dba","/code/python/python-setup.html",{d:1681909711e3,c:"Python",e:`<h1> 6.2 Python 的 setup.py 详解</h1>
<blockquote>
<p>转载自：<a href="https://zhuanlan.zhihu.com/p/276461821" target="_blank" rel="noopener noreferrer">花了两天，终于把 Python 的 setup.py 给整明白了 | Python编程时光| 知乎</a></p>
</blockquote>
<h2> 1. 为什么需要对项目分发打包？</h2>
<p>平常我们习惯了使用 pip 来安装一些第三方模块，这个安装过程之所以简单，是因为模块开发者为我们默默地为我们做了所有繁杂的工作，而这个过程就是 <code>打包</code>。</p>`,r:{minutes:16.05,words:4816},y:"a",t:"6.2 Python 的 setup.py 详解"},["/code/python/python-setup","/code/python/python-setup.md"]],["v-0c5f5f9c","/code/python/python-socketserver.html",{d:1681909711e3,c:"Python",e:`<h1> 11.1 SocketServer</h1>
<p>socket 编程过于底层，编程虽然有套路，但是想要写出健壮的代码还是比较困难的，所以很多语言都对 socket 底层 API 进行封装，Python 的封装就是 socketserver 模块。它是网络服务编程框架，便于企业级快速开发。</p>
<h2> 类的继承关系</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+
| BaseServer |
+------------+
      |
      v
+-----------+        +------------------+
| TCPServer |-------&gt;| UnixStreamServer |
+-----------+        +------------------+
      |
      v
+-----------+        +--------------------+
| UDPServer |-------&gt;| UnixDatagramServer |
+-----------+        +--------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.16,words:1247},y:"a",t:"11.1 SocketServer"},["/code/python/python-socketserver","/code/python/python-socketserver.md"]],["v-361a70e2","/code/python/python-tcp-pg.html",{d:1681909711e3,c:"Python",e:`<h1> 11.2 TCP 编程</h1>
<h2> Socket介绍</h2>
<p><strong>Socket 套接字</strong>。Socket是一种通用的网络编程接口，和网络层次没有一一对应的关系。</p>
<p>Python 中标准库中提供了 socket 模块。socket 模块中也提供了 socket 类，实现了对底层接口的封装，
socket 模块是非常底层的接口库。</p>
<p>socke类定义为</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>socket<span class="token punctuation">(</span>self<span class="token punctuation">,</span> family<span class="token operator">=</span>AF_INET<span class="token punctuation">,</span> <span class="token builtin">type</span><span class="token operator">=</span>SOCK_STREAM<span class="token punctuation">,</span> proto<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> fileno<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:13,words:3899},y:"a",t:"11.2 TCP 编程"},["/code/python/python-tcp-pg","/code/python/python-tcp-pg.md"]],["v-049ef682","/code/python/python-thread-sync.html",{d:1681909711e3,c:"Python",e:`<h1> 10.2 线程同步</h1>
<h2> 线程同步概念</h2>
<p>线程同步，线程间协同，通过某种技术，让一个线程访问某些数据时，其他线程不能访问这些数据，直到该线程完成对数据的操作。</p>
<h2> Event</h2>
<p>Event 事件，是线程间通信机制中最简单的实现，使用一个内部的标记 flag，通过 flag 的 True 或 False 的变化来进行操作。</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>set()</td>
<td>标记设置为True</td>
</tr>
<tr>
<td>clear()</td>
<td>标记设置为False</td>
</tr>
<tr>
<td>is_set()</td>
<td>标记是否为True</td>
</tr>
<tr>
<td>wait(timeout=None)</td>
<td>设置等待标记为True的时长，None为无限等待。等到返回True，未等到超时了返回False</td>
</tr>
</tbody>
</table>`,r:{minutes:7.58,words:2273},y:"a",t:"10.2 线程同步"},["/code/python/python-thread-sync","/code/python/python-thread-sync.md"]],["v-6d90a948","/code/python/python-thread.html",{d:1681909711e3,c:"Python",e:`<h1> 10.2 多线程</h1>
<h2> 线程的状态</h2>
<ul>
<li>就绪（Ready）：线程能够运行，但在等待被调度。可能线程刚刚创建启动，或刚刚从阻塞中恢复，或者被其他线程抢占</li>
<li>运行（Running）：线程正在运行</li>
<li>阻塞（Blocked）：线程等待外部事件发生而无法运行，如 I/O 操作</li>
<li>终止（Terminated）：线程完成，或退出，或被取消</li>
</ul>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/thread.png" alt="thread"></p>`,r:{minutes:11.7,words:3511},y:"a",t:"10.2 多线程"},["/code/python/python-thread","/code/python/python-thread.md"]],["v-7692b860","/code/python/python-virtualenv.html",{d:1681909711e3,c:"Python",e:`<h1> 1.3 Python 虚拟环境</h1>
<blockquote>
<p>转载自：<a href="http://www.justdopython.com/2020/05/26/python-virtualenv/" target="_blank" rel="noopener noreferrer">Python 虚拟环境 看这一篇就够了 | Python 技术</a></p>
</blockquote>
<p>Python 之所以强大，除了语言本身的特性外，更重要的是拥有无所不及的第三方库。强大的软件库，让开发者将精力集中在业务上，而避免重复造轮子的浪费。但众多的软件库，形成了复杂的依赖关系，加上 Python2 和 Python3 旷日持久之争，对采用 Python 开发的项目造成了不少困扰，所以 Python 建议，通过<code>虚拟环境</code>工具为项目创建纯净的依赖环境，今天我们就来了解下 Python 虚拟环境</p>`,r:{minutes:12.07,words:3620},y:"a",t:"1.3 Python 虚拟环境"},["/code/python/python-virtualenv","/code/python/python-virtualenv.md"]],["v-b72643ac","/code/python/",{d:1681909711e3,c:"Python",u:53,e:`<h1> Python 学习笔记</h1>
<h2> 常用官网</h2>
<p><a href="https://docs.python.org/zh-cn/3/" target="_blank" rel="noopener noreferrer">官方文档</a> ⭐</p>
<h2> Python 教程</h2>
<p><a href="https://clay-wangzhi.com/code/python/" target="_blank" rel="noopener noreferrer">Python 运维自动化 | 马哥教育</a> ⭐</p>
<p><a href="https://www.liaoxuefeng.com/wiki/1016959663602400" target="_blank" rel="noopener noreferrer">Python 教程 | 廖雪峰</a> ⭐</p>`,r:{minutes:.9,words:271},y:"a",t:"Python 学习笔记"},["/code/python/index.html","/code/python/readme.md"]],["v-4accd2e6","/code/python/set-dict-data.html",{d:1681909711e3,c:"Python",e:`<h1> 2.3.5 集合 set &amp; 字典 dict</h1>
<h2> 集合 set</h2>
<p>集合，简称集。由任意个元素构成的集体。高级语言都实现了这个非常重要的数据结构类型。</p>
<p>Python中，它是可变的、无序的、不重复的元素的集合。</p>
<h3> 初始化</h3>
<ul>
<li>set() -&gt; new empty set object</li>
<li>set(iterable) -&gt; new set object</li>
</ul>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s2 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
s3 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 报错</span>
s4 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">'abcdabcd'</span><span class="token punctuation">)</span>
s5 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment"># 这是什么？  z字典</span>
s6 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
s7 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
s8 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token comment">#  报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.82,words:2045},y:"a",t:"2.3.5 集合 set & 字典 dict"},["/code/python/set-dict-data","/code/python/set-dict-data.md"]],["v-1609d8e9","/code/python/str-data.html",{d:1681909711e3,c:"Python",e:`<h1> 2.3.2 字符串 str</h1>
<ul>
<li>一个个字符组成的有序的序列，是字符的集合</li>
<li>使用单引号、双引号、三引号引住的字符序列</li>
<li>字符串是不可变对象，是字面常量</li>
</ul>
<p>Python3 起，字符串都是 Unicode 类型</p>
<h2> 初始化</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>s1 = 'string'
s2 = "string2"
s3 = '''this's a "String" '''
s4 = 'hello \\n magedu.com'
s5 = r"hello \\n magedu.com"
s6 = 'c:\\windows\\nt'
s7 = R"c:\\windows\\nt"
s8 = 'c:\\windows\\\\nt'
name = 'tom'; age = 20 # python代码写在一行，使用分号隔开，不推荐
s9 = f'{name}, {age}' # 3.6支持f前缀
sql = """select * from user where name='tom' """
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.19,words:1557},y:"a",t:"2.3.2 字符串 str"},["/code/python/str-data","/code/python/str-data.md"]],["v-0939f9c2","/code/python/type-of-data.html",{d:1681909711e3,c:"Python",e:`<h1> 2.3 Python数据类型</h1>
<h2> 内建常用数据类型</h2>
<ul>
<li>
<p>数值型</p>
<ul>
<li>int、float、complex、bool</li>
</ul>
</li>
<li>
<p>序列 sequence</p>
<ul>
<li>字符串 str、字节序列 bytes、bytearray</li>
<li>列表 list、元组 tuple</li>
</ul>
</li>
<li>
<p>键值对</p>
<ul>
<li>集合 set、字典 dict</li>
</ul>
</li>
</ul>
<h2> 类型转换</h2>
<ul>
<li>int、float、complex、bool 也可以当做内建函数对数据进行类型转换</li>
<li>int(x) 返回一个整数</li>
<li>float(x) 返回一个浮点数</li>
<li>complex(x)、complex(x,y) 返回一个复数</li>
<li>bool(x) 返回布尔值，前面讲过False等价的对象</li>
</ul>`,r:{minutes:2.71,words:812},y:"a",t:"2.3 Python数据类型"},["/code/python/type-of-data","/code/python/type-of-data.md"]],["v-79604bf8","/code/python/vscode-python.html",{d:1681909711e3,g:["vscode"],e:`<h1> 1.4 使用 vscode 打造 python 开发环境</h1>
<h2> 1 软件准备</h2>
<p>既然是在 VS Code 中进行 Python 环境配置，在配置之前需要安装好 Python 和 VS Code。</p>
<h3> 1.1 Python 安装</h3>
<p>关于 Python 的安装，可以从 <a href="https://www.python.org/downloads/release" target="_blank" rel="noopener noreferrer">Python 官网下载</a> Python 进行安装，也可以通过 <code>Anaconda</code> 来安装。</p>`,r:{minutes:6.28,words:1885},y:"a",t:"1.4 使用 vscode 打造 python 开发环境"},["/code/python/vscode-python","/code/python/vscode-python.md"]],["v-2b64c83c","/code/shell/part4-command.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第四部分 命令</h1>
<p>掌握 Linux 命令是编写有效的 shell 脚本必不可少的序曲。</p>
<p>本章节涉及了下列的命令：</p>
<ul>
<li><a href=""><code>.</code></a>（参照 <a href=""><code>source</code></a>）</li>
<li><a href=""><code>ac</code></a></li>
<li><a href=""><code>adduser</code></a></li>
<li><a href=""><code>agetty</code></a></li>
<li><a href=""><code>agrep</code></a></li>
<li><a href=""><code>ar</code></a></li>
<li><a href=""><code>arch</code></a></li>
<li><a href=""><code>at</code></a></li>
<li><a href=""><code>autoload</code></a></li>
<li><a href=""><code>awk</code></a>（参考 <a href="">使用 <code>awk</code> 进行数学运算</a>）</li>
<li><a href=""><code>badblocks</code></a></li>
<li><a href=""><code>banner</code></a></li>
<li><a href=""><code>basename</code></a></li>
<li><a href=""><code>batch</code></a></li>
<li><a href=""><code>bc</code></a></li>
<li><a href=""><code>bg</code></a></li>
<li><a href=""><code>bind</code></a></li>
<li><a href=""><code>bison</code></a></li>
<li><a href=""><code>builtin</code></a></li>
<li><a href=""><code>bzgrep</code></a></li>
<li><a href=""><code>bzip2</code></a></li>
<li><a href=""><code>cal</code></a></li>
<li><a href=""><code>caller</code></a></li>
<li><a href=""><code>cat</code></a></li>
<li><a href=""><code>cd</code></a></li>
<li><a href=""><code>chattr</code></a></li>
<li><a href=""><code>chfn</code></a></li>
<li><a href=""><code>chgrp</code></a></li>
<li><a href=""><code>chkconfig</code></a></li>
<li><a href=""><code>chmod</code></a></li>
<li><a href=""><code>chown</code></a></li>
<li><a href=""><code>chroot</code></a></li>
<li><a href=""><code>cksum</code></a></li>
<li><a href=""><code>clear</code></a></li>
<li><a href=""><code>clock</code></a></li>
<li><a href=""><code>cmp</code></a></li>
<li><a href=""><code>col</code></a></li>
<li><a href=""><code>colrm</code></a></li>
<li><a href=""><code>column</code></a></li>
<li><a href=""><code>comm</code></a></li>
<li><a href=""><code>command</code></a></li>
<li><a href=""><code>compgen</code></a></li>
<li><a href=""><code>complete</code></a></li>
<li><a href=""><code>compress</code></a></li>
<li><a href=""><code>coproc</code></a></li>
<li><a href=""><code>cp</code></a></li>
<li><a href=""><code>cpio</code></a></li>
<li><a href=""><code>cron</code></a></li>
<li><a href=""><code>crypt</code></a></li>
<li><a href=""><code>csplit</code></a></li>
<li><a href=""><code>cu</code></a></li>
<li><a href=""><code>cut</code></a></li>
<li><a href=""><code>date</code></a></li>
<li><a href=""><code>dc</code></a></li>
<li><a href=""><code>dd</code></a></li>
<li><a href=""><code>debugfs</code></a></li>
<li><a href=""><code>declare</code></a></li>
<li><a href=""><code>depmod</code></a></li>
<li><a href=""><code>df</code></a></li>
<li><a href=""><code>dialog</code></a></li>
<li><a href=""><code>diff</code></a></li>
<li><a href=""><code>diff3</code></a></li>
<li><a href=""><code>diffstat</code></a></li>
<li><a href=""><code>dig</code></a></li>
<li><a href=""><code>dirname</code></a></li>
<li><a href=""><code>dirs</code></a></li>
<li><a href=""><code>disown</code></a></li>
<li><a href=""><code>dmesg</code></a></li>
<li><a href=""><code>doexec</code></a></li>
<li><a href=""><code>dos2unix</code></a></li>
<li><a href=""><code>du</code></a></li>
<li><a href=""><code>dump</code></a></li>
<li><a href=""><code>dumpe2fs</code></a></li>
<li><a href=""><code>e2fsck</code></a></li>
<li><a href=""><code>echo</code></a></li>
<li><a href=""><code>egrep</code></a></li>
<li><a href=""><code>enable</code></a></li>
<li><a href=""><code>enscript</code></a></li>
<li><a href=""><code>env</code></a></li>
<li><a href=""><code>eqn</code></a></li>
<li><a href=""><code>eval</code></a></li>
<li><a href=""><code>exec</code></a></li>
<li><a href=""><code>exit</code></a>（相关话题：<a href="">退出状态</a>）</li>
<li><a href=""><code>expand</code></a></li>
<li><a href=""><code>export</code></a></li>
<li><a href=""><code>expr</code></a></li>
<li><a href=""><code>factor</code></a></li>
<li><a href=""><code>false</code></a></li>
<li><a href=""><code>fdformat</code></a></li>
<li><a href=""><code>fdisk</code></a></li>
<li><a href=""><code>fg</code></a></li>
<li><a href=""><code>fgrep</code></a></li>
<li><a href=""><code>file</code></a></li>
<li><a href=""><code>find</code></a></li>
<li><a href=""><code>finger</code></a></li>
<li><a href=""><code>flex</code></a></li>
<li><a href=""><code>flock</code></a></li>
<li><a href=""><code>fmt</code></a></li>
<li><a href=""><code>fold</code></a></li>
<li><a href=""><code>free</code></a></li>
<li><a href=""><code>fsck</code></a></li>
<li><a href=""><code>ftp</code></a></li>
<li><a href=""><code>fuser</code></a></li>
<li><a href=""><code>getfacl</code></a></li>
<li><a href=""><code>getopt</code></a></li>
<li><a href=""><code>getopts</code></a></li>
<li><a href=""><code>gettext</code></a></li>
<li><a href=""><code>getty</code></a></li>
<li><a href=""><code>gnome-mount</code></a></li>
<li><a href=""><code>grep</code></a></li>
<li><a href=""><code>groff</code></a></li>
<li><a href=""><code>groupmod</code></a></li>
<li><a href=""><code>groups</code></a>（相关话题：变量 <a href=""><code>$GROUPS</code></a>）</li>
<li><a href=""><code>gs</code></a></li>
<li><a href=""><code>gzip</code></a></li>
<li><a href=""><code>halt</code></a></li>
<li><a href=""><code>hash</code></a></li>
<li><a href=""><code>hdparm</code></a></li>
<li><a href=""><code>head</code></a></li>
<li><a href=""><code>help</code></a></li>
<li><a href=""><code>hexdump</code></a></li>
<li><a href=""><code>host</code></a></li>
<li><a href=""><code>hostid</code></a></li>
<li><a href=""><code>hostname</code></a>（相关话题：变量 <a href=""><code>$HOSTNAME</code></a>）</li>
<li><a href=""><code>hwclock</code></a></li>
<li><a href=""><code>iconv</code></a></li>
<li><a href=""><code>id</code></a>（相关话题：变量 <a href=""><code>$UID</code></a>）</li>
<li><a href=""><code>ifconfig</code></a></li>
<li><a href=""><code>info</code></a></li>
<li><a href=""><code>infocmp</code></a></li>
<li><a href=""><code>init</code></a></li>
<li><a href=""><code>insmod</code></a></li>
<li><a href=""><code>install</code></a></li>
<li><a href=""><code>ip</code></a></li>
<li><a href=""><code>ipcalc</code></a></li>
<li><a href=""><code>iptables</code></a></li>
<li><a href=""><code>iwconfig</code></a></li>
<li><a href=""><code>jobs</code></a></li>
<li><a href=""><code>join</code></a></li>
<li><a href=""><code>jot</code></a></li>
<li><a href=""><code>kill</code></a></li>
<li><a href=""><code>killall</code></a></li>
<li><a href=""><code>last</code></a></li>
<li><a href=""><code>lastcomm</code></a></li>
<li><a href=""><code>lastlog</code></a></li>
<li><a href=""><code>ldd</code></a></li>
<li><a href=""><code>less</code></a></li>
<li><a href=""><code>let</code></a></li>
<li><a href=""><code>lex</code></a></li>
<li><a href=""><code>lid</code></a></li>
<li><a href=""><code>ln</code></a></li>
<li><a href=""><code>locate</code></a></li>
<li><a href=""><code>lockfile</code></a></li>
<li><a href=""><code>logger</code></a></li>
<li><a href=""><code>logname</code></a></li>
<li><a href=""><code>logout</code></a></li>
<li><a href=""><code>logrotate</code></a></li>
<li><a href=""><code>look</code></a></li>
<li><a href=""><code>losetup</code></a></li>
<li><a href=""><code>lp</code></a></li>
<li><a href=""><code>ls</code></a></li>
<li><a href=""><code>lsdev</code></a></li>
<li><a href=""><code>lsmod</code></a></li>
<li><a href=""><code>lsof</code></a></li>
<li><a href=""><code>lspci</code></a></li>
<li><a href=""><code>lsusb</code></a></li>
<li><a href=""><code>ltrace</code></a></li>
<li><a href=""><code>lynx</code></a></li>
<li><a href=""><code>lzcat</code></a></li>
<li><a href=""><code>lzma</code></a></li>
<li><a href=""><code>m4</code></a></li>
<li><a href=""><code>mail</code></a></li>
<li><a href=""><code>mailstats</code></a></li>
<li><a href=""><code>mailto</code></a></li>
<li><a href=""><code>make</code></a></li>
<li><a href=""><code>MAKEDEV</code></a></li>
<li><a href=""><code>man</code></a></li>
<li><a href=""><code>mapfile</code></a></li>
<li><a href=""><code>mcookie</code></a></li>
<li><a href=""><code>md5sum</code></a></li>
<li><a href=""><code>merge</code></a></li>
<li><a href=""><code>mesg</code></a></li>
<li><a href=""><code>mimencode</code></a></li>
<li><a href=""><code>mkbootdisk</code></a></li>
<li><a href=""><code>mkdir</code></a></li>
<li><a href=""><code>mkdosfs</code></a></li>
<li><a href=""><code>mke2fs</code></a></li>
<li><a href=""><code>mkfifo</code></a></li>
<li><a href=""><code>mkisofs</code></a></li>
<li><a href=""><code>mknod</code></a></li>
<li><a href=""><code>mkswap</code></a></li>
<li><a href=""><code>mktemp</code></a></li>
<li><a href=""><code>mmencode</code></a></li>
<li><a href=""><code>modinfo</code></a></li>
<li><a href=""><code>modprobe</code></a></li>
<li><a href=""><code>more</code></a></li>
<li><a href=""><code>mount</code></a></li>
<li><a href=""><code>msgfmt</code></a></li>
<li><a href=""><code>mv</code></a></li>
<li><a href=""><code>nc</code></a></li>
<li><a href=""><code>netconfig</code></a></li>
<li><a href=""><code>netstat</code></a></li>
<li><a href=""><code>newgrp</code></a></li>
<li><a href=""><code>nice</code></a></li>
<li><a href=""><code>nl</code></a></li>
<li><a href=""><code>nm</code></a></li>
<li><a href=""><code>nmap</code></a></li>
<li><a href=""><code>nohup</code></a></li>
<li><a href=""><code>nslookup</code></a></li>
<li><a href=""><code>objdump</code></a></li>
<li><a href=""><code>od</code></a></li>
<li><a href=""><code>openssl</code></a></li>
<li><a href=""><code>passwd</code></a></li>
<li><a href=""><code>paste</code></a></li>
<li><a href=""><code>patch</code></a>（相关话题：<a href=""><code>diff</code></a>）</li>
<li><a href=""><code>pathchk</code></a></li>
<li><a href=""><code>pax</code></a></li>
<li><a href=""><code>pgrep</code></a></li>
<li><a href=""><code>pidof</code></a></li>
<li><a href=""><code>ping</code></a></li>
<li><a href=""><code>pkill</code></a></li>
<li><a href=""><code>popd</code></a></li>
<li><a href=""><code>pr</code></a></li>
<li><a href=""><code>printenv</code></a></li>
<li><a href=""><code>printf</code></a></li>
<li><a href=""><code>procinfo</code></a></li>
<li><a href=""><code>ps</code></a></li>
<li><a href=""><code>pstree</code></a></li>
<li><a href=""><code>ptx</code></a></li>
<li><a href=""><code>pushd</code></a></li>
<li><a href=""><code>pwd</code></a>（相关话题：变量 <a href=""><code>$PWD</code></a>）</li>
<li><a href=""><code>quota</code></a></li>
<li><a href=""><code>rcp</code></a></li>
<li><a href=""><code>rdev</code></a></li>
<li><a href=""><code>rdist</code></a></li>
<li><a href=""><code>read</code></a></li>
<li><a href=""><code>readelf</code></a></li>
<li><a href=""><code>readlink</code></a></li>
<li><a href=""><code>readonly</code></a></li>
<li><a href=""><code>reboot</code></a></li>
<li><a href=""><code>recode</code></a></li>
<li><a href=""><code>renice</code></a></li>
<li><a href=""><code>reset</code></a></li>
<li><a href=""><code>resize</code></a></li>
<li><a href=""><code>restore</code></a></li>
<li><a href=""><code>rev</code></a></li>
<li><a href=""><code>rlogin</code></a></li>
<li><a href=""><code>rm</code></a></li>
<li><a href=""><code>rmdir</code></a></li>
<li><a href=""><code>rmmod</code></a></li>
<li><a href=""><code>route</code></a></li>
<li><a href=""><code>rpm</code></a></li>
<li><a href=""><code>rpm2cpio</code></a></li>
<li><a href=""><code>rsh</code></a></li>
<li><a href=""><code>rsync</code></a></li>
<li><a href=""><code>runlevel</code></a></li>
<li><a href=""><code>run-parts</code></a></li>
<li><a href=""><code>rx</code></a></li>
<li><a href=""><code>rz</code></a></li>
<li><a href=""><code>sar</code></a></li>
<li><a href=""><code>scp</code></a></li>
<li><a href=""><code>script</code></a></li>
<li><a href=""><code>sdiff</code></a></li>
<li><a href=""><code>sed</code></a></li>
<li><a href=""><code>seq</code></a></li>
<li><a href=""><code>service</code></a></li>
<li><a href=""><code>set</code></a></li>
<li><a href=""><code>setfacl</code></a></li>
<li><a href=""><code>setquota</code></a></li>
<li><a href=""><code>setserial</code></a></li>
<li><a href=""><code>setterm</code></a></li>
<li><a href=""><code>sha1sum</code></a></li>
<li><a href=""><code>shar</code></a></li>
<li><a href=""><code>shopt</code></a></li>
<li><a href=""><code>shred</code></a></li>
<li><a href=""><code>shutdown</code></a></li>
<li><a href=""><code>size</code></a></li>
<li><a href=""><code>skill</code></a></li>
<li><a href=""><code>sleep</code></a></li>
<li><a href=""><code>slocate</code></a></li>
<li><a href=""><code>snice</code></a></li>
<li><a href=""><code>sort</code></a></li>
<li><a href=""><code>source</code></a></li>
<li><a href=""><code>sox</code></a></li>
<li><a href=""><code>split</code></a></li>
<li><a href=""><code>sq</code></a></li>
<li><a href=""><code>ssh</code></a></li>
<li><a href=""><code>stat</code></a></li>
<li><a href=""><code>strace</code></a></li>
<li><a href=""><code>strings</code></a></li>
<li><a href=""><code>strip</code></a></li>
<li><a href=""><code>stty</code></a></li>
<li><a href=""><code>su</code></a></li>
<li><a href=""><code>sudo</code></a></li>
<li><a href=""><code>sum</code></a></li>
<li><a href=""><code>suspend</code></a></li>
<li><a href=""><code>swapoff</code></a></li>
<li><a href=""><code>swapon</code></a></li>
<li><a href=""><code>sx</code></a></li>
<li><a href=""><code>sync</code></a></li>
<li><a href=""><code>sz</code></a></li>
<li><a href=""><code>tac</code></a></li>
<li><a href=""><code>tail</code></a></li>
<li><a href=""><code>tar</code></a></li>
<li><a href=""><code>tbl</code></a></li>
<li><a href=""><code>tcpdump</code></a></li>
<li><a href=""><code>tee</code></a></li>
<li><a href=""><code>telinit</code></a></li>
<li><a href=""><code>telnet</code></a></li>
<li><a href=""><code>Tex</code></a></li>
<li><a href=""><code>texexec</code></a></li>
<li><a href=""><code>time</code></a></li>
<li><a href=""><code>times</code></a></li>
<li><a href=""><code>tmpwatch</code></a></li>
<li><a href=""><code>top</code></a></li>
<li><a href=""><code>touch</code></a></li>
<li><a href=""><code>tput</code></a></li>
<li><a href=""><code>tr</code></a></li>
<li><a href=""><code>traceroute</code></a></li>
<li><a href=""><code>true</code></a></li>
<li><a href=""><code>tset</code></a></li>
<li><a href=""><code>tsort</code></a></li>
<li><a href=""><code>tty</code></a></li>
<li><a href=""><code>tune2fs</code></a></li>
<li><a href=""><code>type</code></a></li>
<li><a href=""><code>typeset</code></a></li>
<li><a href=""><code>ulimit</code></a></li>
<li><a href=""><code>umask</code></a></li>
<li><a href=""><code>umount</code></a></li>
<li><a href=""><code>uname</code></a></li>
<li><a href=""><code>unarc</code></a></li>
<li><a href=""><code>unarj</code></a></li>
<li><a href=""><code>uncompress</code></a></li>
<li><a href=""><code>unexpand</code></a></li>
<li><a href=""><code>uniq</code></a></li>
<li><a href=""><code>units</code></a></li>
<li><a href=""><code>unlzma</code></a></li>
<li><a href=""><code>unrar</code></a></li>
<li><a href=""><code>unset</code></a></li>
<li><a href=""><code>unsq</code></a></li>
<li><a href=""><code>unzip</code></a></li>
<li><a href=""><code>uptime</code></a></li>
<li><a href=""><code>usbmodules</code></a></li>
<li><a href=""><code>useradd</code></a></li>
<li><a href=""><code>userdel</code></a></li>
<li><a href=""><code>usermod</code></a></li>
<li><a href=""><code>users</code></a></li>
<li><a href=""><code>usleep</code></a></li>
<li><a href=""><code>uucp</code></a></li>
<li><a href=""><code>uudecode</code></a></li>
<li><a href=""><code>uuencode</code></a></li>
<li><a href=""><code>uux</code></a></li>
<li><a href=""><code>vacation</code></a></li>
<li><a href=""><code>vdir</code></a></li>
<li><a href=""><code>vmstat</code></a></li>
<li><a href=""><code>vrfy</code></a></li>
<li><a href=""><code>w</code></a></li>
<li><a href=""><code>wait</code></a></li>
<li><a href=""><code>wall</code></a></li>
<li><a href=""><code>watch</code></a></li>
<li><a href=""><code>wc</code></a></li>
<li><a href=""><code>wget</code></a></li>
<li><a href=""><code>whatis</code></a></li>
<li><a href=""><code>whereis</code></a></li>
<li><a href=""><code>which</code></a></li>
<li><a href=""><code>who</code></a></li>
<li><a href=""><code>whoami</code></a></li>
<li><a href=""><code>whois</code></a></li>
<li><a href=""><code>write</code></a></li>
<li><a href=""><code>xargs</code></a></li>
<li><a href=""><code>xrandr</code></a></li>
<li><a href=""><code>xz</code></a></li>
<li><a href=""><code>yacc</code></a></li>
<li><a href=""><code>yes</code></a></li>
<li><a href=""><code>zcat</code></a></li>
<li><a href=""><code>zdiff</code></a></li>
<li><a href=""><code>zdump</code></a></li>
<li><a href=""><code>zegrep</code></a></li>
<li><a href=""><code>zfgrep</code></a></li>
<li><a href=""><code>zgrep</code></a></li>
<li><a href=""><code>zip</code></a></li>
</ul>`,r:{minutes:1.93,words:579},y:"a",t:"第四部分 命令"},["/code/shell/part4-command","/code/shell/part4-command.md"]],["v-d1ce3044","/code/shell/part6.html",{a:"Google",d:1681909711e3,c:"Linux",g:["Bash","风格"],e:`<h1> 第六部分 Google Shell 风格指南</h1>
<h2> 1 背景</h2>
<h3> 1.1 使用哪一种Shell</h3>
<blockquote>
<p>Bash是唯一被允许执行的shell脚本语言。</p>
</blockquote>
<p>可执行文件必须以<code>#!/bin/bash</code>和最小数量的标志开始。请使<code>set</code>来设置shell的选项，使得用<code>bash &lt;script_name&gt;</code>调用你的脚本时不会破坏其功能。</p>
<p>限制所有的可执行shell脚本为bash使得我们安装在所有计算机中的shell语言保持一致性。</p>`,r:{minutes:16.58,words:4975},y:"a",t:"第六部分 Google Shell 风格指南"},["/code/shell/part6","/code/shell/part6.md"]],["v-19fa2dc8","/code/shell/",{a:"LinuxStory & Clay",d:1681909711e3,c:"Linux",g:["Bash"],u:60,e:`<h1> 高级 Bash 脚本编程指南</h1>
<blockquote>
<p>本教程内容转载自：https://github.com/LinuxStory/Advanced-Bash-Scripting-Guide-in-Chinese</p>
<p>感谢开源翻译！！！</p>
</blockquote>
<p><a href="https://gitter.im/Advanced-Bash-Scripting-Guide-in-Chinese/" target="_blank" rel="noopener noreferrer"><img src="https://badges.gitter.im/gitterHQ/gitter.png" alt="Gitter chat"></a></p>`,r:{minutes:4.64,words:1393},y:"a",t:"高级 Bash 脚本编程指南"},["/code/shell/index.html","/code/shell/readme.md"]],["v-1f4e571e","/code/shell/shell.html",{d:1681909711e3,e:`<h1> Shell</h1>
 <img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/shell.png" style="zoom:50%;">
<h2> 青铜</h2>
<h3> 什么时候使用shell</h3>
<ul>
<li>自动化常用命令</li>
<li>执行系统管理和故障排除</li>
<li>创建简单的应用程序</li>
<li>处理文本或文件</li>
</ul>
<h3> 什么是 Sha-bang</h3>
<p>脚本起始行 Sha-bang：系统这个脚本文件需要使用指定的命令解释器来执行<code>#!/bin/bash</code> 或 <code>#!/usr/bin/env bash</code></p>`,r:{minutes:5.36,words:1607},y:"a",t:"Shell"},["/code/shell/shell","/code/shell/shell.md"]],["v-b7534df8","/container/Docker/docker_rabbitmq.html",{d:1681909711e3,c:"常见服务的搭建",g:["docker","rabbitmq"],e:`<h1> docker 安装rabbitmq集群</h1>
<h2> RabbitMQ 高可用集群架构</h2>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/rabbitmq_ha.png" alt="img"></p>
<p>将两个 RabbitMQ 磁盘节点和一个 RabbitMQ 内存节点组成一个内建集群，之所以要用两个磁盘节点是防止，唯一的磁盘节点挂掉后，不能重建队列，交换器。用 HAProxy 作为 RabbitMQ 集群的负载均衡。为了防止 HAProxy 单点故障，用 Keepalived 将两个 HAProxy 节点做成一主一备。应用使用 VIP（虚拟IP） 访问 HAProxy 服务时，默认连接主机（Master）的 HAProxy，当主机（Master）上的 HAProxy 故障时，VIP 会漂移到备机（Backup）上，就会连接备机（Backup）上的 HAProxy 服务。</p>`,r:{minutes:6.25,words:1876},y:"a",t:"docker 安装rabbitmq集群"},["/container/Docker/docker_rabbitmq","/container/Docker/docker_rabbitmq.md"]],["v-37c1affd","/db/mysql/ab-copy.html",{d:1681909711e3,c:"MySQL",e:`<h1> 8 AB复制</h1>
<h2> MySQL AB简介</h2>
<p>AB复制又称主从复制，实现的是数据同步。</p>
<p>如果要做MySQL AB复制，数据库版本尽量保持一致。如果版本不一致，从服务器版本高于主服务器，但是版本不一致不能做双向复制。</p>
<p>MySQL AB复制有什么好处呢？</p>
<ul>
<li>解决宕机带来的数据不一致，因为MySQL AB复制可以实时备份数据；</li>
<li>减轻数据库服务器压力，多台服务器的性能一般比单台要好。但是MySQL AB复制不适用于大数据量，如果是大数据环境，推荐使用集群。</li>
</ul>
<p>​    MySQL复制（replication）是一个异步的复制，从一个MySQL实例（Master）复制到另一个MySQL（Slave）。实现整个主从复制，需要由Master服务器上的IO进程，和Slave服务器上的Sql进程和IO进程共同完成。</p>`,r:{minutes:2.5,words:749},y:"a",t:"8 AB复制"},["/db/mysql/ab-copy","/db/mysql/ab-copy.md"]],["v-36f16a4d","/db/mysql/back.html",{d:1681909711e3,c:"MySQL",e:`<h1> 7 备份恢复</h1>
<p>对于任何数据库来说，备份都是非常重要的</p>
<p><strong>数据库复制不能取代备份的作用</strong></p>
<p>比如我们由于误操作，在主数据库上删除了一些数据，由于主从复制的时间很短，在发现时，从数据库上的数据可能也已经被删除了，
我们不能使用从数据库上的数据来恢复主数据库上的数据，只能通过备份进行误删除数据的恢复</p>
<h2> 1 备份的分类</h2>
<h3> 1.1 按备份的结果来分</h3>
<h4> 1.1.1 逻辑备份</h4>
<p>其备份结果为SQL语句，适合于所有存储引擎，恢复时需要较多时间，逻辑备份时，对于MyISAM存储引擎是需要进行锁表操作的，通过使用的mysqldump就是一种逻辑备份工具</p>`,r:{minutes:27.14,words:8143},y:"a",t:"7 备份恢复"},["/db/mysql/back","/db/mysql/back.md"]],["v-f2aceb80","/db/mysql/bin-log.html",{d:1681909711e3,c:"MySQL",e:`<h1> 14 MySQL bin-log日志清理</h1>
<h2> 自动清理</h2>
<h3> 永久生效</h3>
<p>需要重启mysql才能生效</p>
<p>修改<code>my.cnf</code>文件</p>
<p>添加下面一行</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>expire_logs_days = 7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.57,words:172},y:"a",t:"14 MySQL bin-log日志清理"},["/db/mysql/bin-log","/db/mysql/bin-log.md"]],["v-528061dd","/db/mysql/des-select.html",{d:1681909711e3,c:"MySQL",e:`<h1> 3 数据库设计与查询语句</h1>
<h2> 1  数据库基本概念</h2>
<p>1、关系：两个表的公共字段</p>
<p>2、行：也称记录，也称实体</p>
<p>3、列：也称字段，也称属性</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>就表结构而言，表分为行和列；
就表数据而言，分为记录和字段；
就面向对象而言，一个记录就是一个实体，一个字段就是一个属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:23.07,words:6920},y:"a",t:"3 数据库设计与查询语句"},["/db/mysql/des-select","/db/mysql/des-select.md"]],["v-426b1ca9","/db/mysql/jiagou.html",{d:1681909711e3,c:"MySQL",e:`<h1> 11 MySQL逻辑架构</h1>
<h2> mysql架构</h2>
<p>mysql架构分为三层：</p>
<ol>
<li>服务层：为客户请求做连接处理、授权认证、安全等</li>
<li>核心层：查询解析，分析，优化，缓存，所有内建函数；存储过程，触发器，视图等</li>
<li>存储引擎层：存储和提取数据以及事务处理</li>
</ol>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1.png" alt=""></p>
<h3> 服务层</h3>
<p>​         <img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/1-1581242308187.png" alt=""></p>`,r:{minutes:.43,words:130},y:"a",t:"11 MySQL逻辑架构"},["/db/mysql/jiagou","/db/mysql/jiagou.md"]],["v-06da267c","/db/mysql/list-com.html",{d:1681909711e3,c:"MySQL",e:`<h1> 2 列表类型和数据完整性</h1>
<h2> 1 数据类型</h2>
<h3> 1.1 值类型</h3>
<h4> 1.1.1   整型</h4>
<table>
<thead>
<tr>
<th style="text-align:center">类型</th>
<th style="text-align:center">字节</th>
<th style="text-align:center">范围</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">tinyint</td>
<td style="text-align:center">1</td>
<td style="text-align:center">-128~127</td>
</tr>
<tr>
<td style="text-align:center">smallint</td>
<td style="text-align:center">2</td>
<td style="text-align:center">-32768~32767</td>
</tr>
<tr>
<td style="text-align:center">mediumint</td>
<td style="text-align:center">3</td>
<td style="text-align:center">-8388608~8388607</td>
</tr>
<tr>
<td style="text-align:center">int</td>
<td style="text-align:center">4</td>
<td style="text-align:center">-2^31^~2^31^-1</td>
</tr>
<tr>
<td style="text-align:center">bigint</td>
<td style="text-align:center">8</td>
<td style="text-align:center">-2^63^~2^63^-1</td>
</tr>
</tbody>
</table>`,r:{minutes:16.12,words:4837},y:"a",t:"2 列表类型和数据完整性"},["/db/mysql/list-com","/db/mysql/list-com.md"]],["v-a02396ee","/db/mysql/lock.html",{d:1681909711e3,c:"MySQL",e:`<h1> 12 MySQL锁等待</h1>
<h2> 1 锁等待模拟</h2>
<p>创建数据库</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create database clay_test default charset utf8 collate utf8_general_ci;
use clay_test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.72,words:516},y:"a",t:"12 MySQL锁等待"},["/db/mysql/lock","/db/mysql/lock.md"]],["v-0bf9122d","/db/mysql/owner-kee.html",{d:1681909711e3,c:"MySQL",e:`<h1> 9 主主和keepalived</h1>
<h2> keepalived简介</h2>
<p>keepalived是vrrp协议的实现，原生设计目的是为了高可用ipvs服务，keepalived能够配置文件中的定义生成ipvs规则，并能够对各RS的健康状态进行检测；通过共用的虚拟IP地址对外提供服务；每个热备组内同一时刻只有一台主服务器提供服务，其他服务器处于冗余状态，若当前在线的服务器宕机，其虚拟IP地址将会被其他服务器接替（优先级决定接替顺序），实现高可用为后端主机提供服务。</p>
<p>VRRP全称Virtual Router Redundancy Protocol，即<a href="http://en.wikipedia.org/wiki/VRRP" target="_blank" rel="noopener noreferrer">虚拟路由冗余协议</a>。</p>`,r:{minutes:2.09,words:627},y:"a",t:"9 主主和keepalived"},["/db/mysql/owner-kee","/db/mysql/owner-kee.md"]],["v-9c2214f8","/db/mysql/qa.html",{d:1681909711e3,c:"MySQL",e:`<h1> 13 MySQL常见问题</h1>
<h2> 主库异常，从库手动切换为主库方案</h2>
<p>1.登录从服务器，确认从服务器已经完成所有同步操作：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; stop slave io_thread  
mysql&gt; show processlist 
直到看到状态都为：xxx has read all relay log 表示更新都执行完毕
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.47,words:1040},y:"a",t:"13 MySQL常见问题"},["/db/mysql/qa","/db/mysql/qa.md"]],["v-17e5e2ac","/db/mysql/read-write.html",{d:1681909711e3,c:"MySQL",e:`<h1> 10 读写分离和Amoeba</h1>
<p>后续补充</p>
`,r:{minutes:.04,words:13},y:"a",t:"10 读写分离和Amoeba"},["/db/mysql/read-write","/db/mysql/read-write.md"]],["v-248713a5","/db/mysql/",{d:1681909711e3,c:"MySQL",e:`<h1> 1 MySQL基本操作</h1>
<h2> 1 数据库相关概念</h2>
<h3> 1.1 什么是数据？</h3>
<p>​		数据（data）是事实或观察的结果，是对客观事物的逻辑归纳，是用于表示客观事物的未经加工的原始素材。数据是信息的表现形式和载体，可以是符号、文字、数字、语音、图像、视频等。数据和信息是不可分离的，数据是信息的表达，信息是数据的内涵。数据本身没有意义，数据只有对实体行为产生影响才成为信息。数据可以是连续的值，比如声音、图像，称为模拟数据。也可以是离散的，如符号、文字，称为数字数据。在计算机系统中，数据以二进制信息单元0,1的形式表示。</p>
<h3> 1.2 什么是数据库？</h3>`,r:{minutes:7.19,words:2158},y:"a",t:"1 MySQL基本操作"},["/db/mysql/index.html","/db/mysql/readme.md"]],["v-34f80d94","/db/mysql/stro.html",{d:1681909711e3,c:"MySQL",e:`<h1> 5 MySQL存储引擎</h1>
<h2> 存储引擎简介</h2>
<p>​		MySQL中的数据用各种不同的技术存储在文件(或者内存)中。这些技术中的每一种技术都使用不同的存储机制、索引技巧、锁定水平并且最终提供广泛的不同的功能和能力。通过选择不同的技术，你能够获得额外的速度或者功能，从而改善你的应用的整体功能。</p>
<p>​		例如，如果你在研究大量的临时数据，你也许需要使用内存存储引擎。内存存储引擎能够在内存中存储所有的表格数据。</p>
<h2> 常用的存储引擎及其特点</h2>
<h3> MyISAM存储引擎</h3>
<p>在5.5版本之前，MyISAM是MySQL的默认存储引擎。</p>`,r:{minutes:5.44,words:1633},y:"a",t:"5 MySQL存储引擎"},["/db/mysql/stro","/db/mysql/stro.md"]],["v-1f31eb54","/db/mysql/user-contr.html",{d:1681909711e3,c:"MySQL",e:`<h1> 6 用户权限和访问控制</h1>
<h2> 1 用户</h2>
<h3> 1.1 创建用户并设置密码</h3>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create user aa@localhost identified by '123';//本地用户
create user aa@'%' identified by '123'; //其他远程用户
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.74,words:1123},y:"a",t:"6 用户权限和访问控制"},["/db/mysql/user-contr","/db/mysql/user-contr.md"]],["v-73a05a52","/db/mysql/view-func.html",{d:1681909711e3,c:"MySQL",e:`<h1> 4 视图、事务、索引、函数</h1>
<h2> 1 视图【view】</h2>
<p>1、	视图是一张虚拟表，它表示一张表的部分或多张表的综合的结构。</p>
<p>2、	视图仅仅是表结构，没有表数据。视图的结构和数据建立在表的基础上。</p>
<h3> 1.1 创建视图</h3>
<p>语法</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create [or replace] view 视图的名称
as
	select语句;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:16.79,words:5036},y:"a",t:"4 视图、事务、索引、函数"},["/db/mysql/view-func","/db/mysql/view-func.md"]],["v-72ca315d","/db/redis/qa.html",{d:1681909711e3,c:"Redis",e:`<h1> redis面试题</h1>
<blockquote>
<p>todo: 添加小林coding的redis相关问题，缓存，穿透，雪崩等</p>
</blockquote>
<h2> Redis是什么</h2>
<p>Redis（Remote Dictionary Server）是C语言开发的一个开源的（遵从BSD协议）高性能键值对（key-value）的内存数据库，可以用作数据库、缓存、消息中间件。它是一种NoSQL（not-only sql，泛指非关系型数据库）的数据库。</p>
<p>Reidis作为一个内存数据库：</p>
<ul>
<li>性能优秀，数据在内存中，读写速度非常快，支持并发10W QPS</li>
<li>单进程单线程，是线程安全的，采用IO多路复用机制</li>
<li>丰富的数据类型，支持字符串（strings）、散列（hashes）、列表（lists）、集合（sets）、有序集合（sorted sets）</li>
<li>支持数据持久化，可以将内存中数据保存在磁盘中，重启时加载</li>
<li>主从复制，哨兵，集群</li>
<li>可以用作分布式锁</li>
<li>可以作为消息中间件使用，支持发布订阅</li>
</ul>`,r:{minutes:11.61,words:3484},y:"a",t:"redis面试题"},["/db/redis/qa","/db/redis/qa.md"]],["v-2bee89ec","/db/redis/",{d:1681909711e3,c:"Redis",e:`<h1> redis5.0.4集群搭建</h1>
<h3> redis5.0新特性</h3>
<p>Redis 5主要专注于几个重要功能。相比之下Redis 4非常非常专注于操作类型，Redis 5的变化大多是面向用户的。即在现有的基础上增加新的数据类型和操作类型。以下是此版本的主要功能：</p>
<ol>
<li>新的Stream数据类型。[1]</li>
<li>新的Redis模块API：Timers and Cluster API。</li>
<li>RDB现在存储LFU和LRU信息。</li>
<li>集群管理器从Ruby（redis-trib.rb）移植到C代码。可以在redis-cli中。查看redis-cli —cluster help了解更多信息。</li>
<li>新sorted set命令：ZPOPMIN / MAX和阻塞变量。</li>
<li>主动碎片整理V2。</li>
<li>增强HyperLogLog实现。</li>
<li>更好的内存统计报告。</li>
<li>许多带有子命令的命令现在都有一个HELP子命令。</li>
<li>客户经常连接和断开连接时性能更好。</li>
<li>错误修复和改进。</li>
<li>Jemalloc升级到5.1版</li>
</ol>`,r:{minutes:4.83,words:1448},y:"a",t:"redis5.0.4集群搭建"},["/db/redis/index.html","/db/redis/readme.md"]],["v-a01d2bb2","/db/redis/redis-dump.html",{d:1681909711e3,c:"Redis",e:`<h1> redis-dump方式导入导出数据</h1>
<h3> 安装redis-dump工具</h3>
<p>安装ruby（略）,详见上一章节</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gem install redis-dump -V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3> 数据导出</h3>`,r:{minutes:.41,words:122},y:"a",t:"redis-dump方式导入导出数据"},["/db/redis/redis-dump","/db/redis/redis-dump.md"]],["v-eeddae12","/db/redis/redis-sentinel.html",{d:1681909711e3,c:"Redis",e:`<h1> Redis 6.x 哨兵安装配置</h1>
<h2> 1 升级 gcc</h2>
<p>centos7 默认的 gcc 默认是4.8.5,版本小于 5.3 无法编译,需要先安装gcc新版才能编译</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc-c++
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> centos-release-scl
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils
<span class="token builtin class-name">echo</span> <span class="token string">"source /opt/rh/devtoolset-9/enable"</span> <span class="token operator">&gt;&gt;</span>/etc/profile 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.67,words:200},y:"a",t:"Redis 6.x 哨兵安装配置"},["/db/redis/redis-sentinel","/db/redis/redis-sentinel.md"]],["v-219cbae0","/db/redis/redis-slave.html",{d:1681909711e3,c:"Redis",e:`<h1> centos7安装redis-5.0.0主从</h1>
<h2> 下载redis-5.0.0安装包</h2>
<p>从官网下载安装包</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt
wget http://download.redis.io/releases/redis-5.0.0.tar.gz
tar -xvf redis-5.0.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.83,words:848},y:"a",t:"centos7安装redis-5.0.0主从"},["/db/redis/redis-slave","/db/redis/redis-slave.md"]],["v-7e89ffae","/db/redis/ruby-update.html",{d:1681909711e3,c:"Redis",e:`<h1> centos7安装升级ruby</h1>
<p>转载自：<a href="https://blog.csdn.net/qq_26440803/article/details/82717244" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_26440803/article/details/82717244</a></p>
<h3> 在线安装ruby</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y install ruby
ruby -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.62,words:187},y:"a",t:"centos7安装升级ruby"},["/db/redis/ruby-update","/db/redis/ruby-update.md"]],["v-9b126160","/db/redis/server-client.html",{d:1681909711e3,c:"Redis",e:`<h1> 服务器端和客户端命令</h1>
<h2> 服务器端</h2>
<p>服务器端的命令为redis-server
可以使⽤help查看帮助⽂档</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-server --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>推荐使⽤服务的⽅式管理redis服务
启动</p>`,r:{minutes:.62,words:187},y:"a",t:"服务器端和客户端命令"},["/db/redis/server-client","/db/redis/server-client.md"]],["v-31ebb152","/devops/ansible/ad-hoc.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 3.1 Ansible Ad-hoc 常用命令集</h1>
<h2> 1 Ad-hoc简介</h2>
<p>Ad-Hoc（点对点模式）是指ansible下临时执行的一条命令，并且不需要保存的命令，对于复杂的命令会使用playbook。Ad-hoc的执行依赖于模块，ansible官方提供了大量的模块。 如：command、raw、shell、file、cron等，具体可以通过ansible-doc -l 进行查看 。可以使用ansible-doc -s module来查看某个模块的参数，也可以使用ansible-doc module来查看该模块更详细的信息。</p>
<h3> 1.1 命令说明</h3>`,r:{minutes:13.34,words:4002},y:"a",t:"3.1 Ansible Ad-hoc 常用命令集"},["/devops/ansible/ad-hoc","/devops/ansible/ad-hoc.md"]],["v-12780ba1","/devops/ansible/advanced-playbook.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 4.4 Playbook高级用法</h1>
<h2> 1 本地执行</h2>
<p>默认情况下，Ansible使用ssh去连接远程主机，但实际上它提供了多种插件来丰富连接方式：smart、ssh、paramiko、local、docker、winrm，默认为smart。</p>
<p>smart表示智能选择ssh和paramiko(paramiko是Python的一个ssh协议模块)，当Ansible端安装的ssh支持ControlPersist(即持久连接)时自动使用ssh，否则使用paramiko。local和docker是非基于ssh连接的方式，winrm是连接Windows的插件。</p>`,r:{minutes:7.96,words:2388},y:"a",t:"4.4 Playbook高级用法"},["/devops/ansible/advanced-playbook","/devops/ansible/advanced-playbook.md"]],["v-1b0e4f8c","/devops/ansible/ansible-best-practice.html",{d:1681912236e3,c:"自动化工具",g:["Ansible"],e:`<h1> Ansible 使用中的一些实践</h1>
<h2> 本地执行 记录 输出结果</h2>
<p>样例一</p>
<p><code>cat check_app.yaml</code></p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all
  <span class="token key atrule">gather_facts</span><span class="token punctuation">:</span> no
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">script</span><span class="token punctuation">:</span> port_check.sh
      <span class="token key atrule">register</span><span class="token punctuation">:</span> netstat

    <span class="token punctuation">-</span> <span class="token key atrule">shell</span><span class="token punctuation">:</span> source /etc/profile <span class="token important">&amp;&amp;</span> jps <span class="token punctuation">|</span> grep <span class="token punctuation">-</span>v Jps <span class="token punctuation">|</span> awk '<span class="token punctuation">{</span>print $2<span class="token punctuation">}</span>'
      <span class="token key atrule">register</span><span class="token punctuation">:</span> java

    <span class="token punctuation">-</span> <span class="token key atrule">shell</span><span class="token punctuation">:</span> echo <span class="token punctuation">{</span><span class="token punctuation">{</span>ansible_ssh_host<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>netstat.stdout_lines<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>java.stdout_lines<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span> /home/clay/result.txt
      <span class="token key atrule">connection</span><span class="token punctuation">:</span> local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.47,words:142},y:"a",t:"Ansible 使用中的一些实践"},["/devops/ansible/ansible-best-practice","/devops/ansible/ansible-best-practice.md"]],["v-3ef9d450","/devops/ansible/ansible-k8s.html",{d:1681912236e3,c:"自动化工具",g:["Ansible","Kubernetes"],e:`<h1> 使用 ansible 快速安装 k8s 机器</h1>
<p>推荐：</p>
<ul>
<li>
<p>kubeadm 安装用：<a href="https://github.com/kubernetes-sigs/kubespray" target="_blank" rel="noopener noreferrer">kubespray</a></p>
</li>
<li>
<p>二进制安装用：<a href="https://github.com/easzlab/kubeasz" target="_blank" rel="noopener noreferrer">kubeasz</a></p>
</li>
</ul>`,r:{minutes:2.35,words:706},y:"a",t:"使用 ansible 快速安装 k8s 机器"},["/devops/ansible/ansible-k8s","/devops/ansible/ansible-k8s.md"]],["v-77ee0a50","/devops/ansible/custom.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 5.1 自定义变量</h1>
<p><strong>简单说明</strong></p>
<p>ansible支持变量，用于存储会在整个项目中重复使用到的一些值。以简化项目的创建与维护，降低出错的机率。</p>
<p>变量的定义：</p>
<ul>
<li>变量名应该由字母、数字下划数组成</li>
<li>变量名必须以字母开头</li>
<li>ansible内置关键字不能作为变量名</li>
</ul>
<h1> 1. 在Inventory中定义变量</h1>
<h2> 1.1. 定义主机变量</h2>
<h3> 1.1.1. 内置主机变量</h3>
<p>所谓内置变量其实就是ansible.cfg配置文件中的选项，在其前加上<code>ansible_</code>即成为内置变量。当然内置变拥有比ansible.cfg中选项更高的优先级，而且针对不同的主机，可以定义不同的值。</p>`,r:{minutes:6.46,words:1939},y:"a",t:"5.1 自定义变量"},["/devops/ansible/custom","/devops/ansible/custom.md"]],["v-30bfdf82","/devops/ansible/dir-handler.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 4.1 Playbook的结构及handler用法</h1>
<h2> 1 playbook的结构说明</h2>
<p>playbook是由一个或多个"play"组成的列表。play的主要功能就是对一组主机应用play中定义好的task。从根本上来讲一个task就是对ansible一个module的调用。而将多个play按照一定的顺序组织到一个playbook中，我们称之为编排。</p>
<p>playbook主要有以下四部分构成:</p>
<ul>
<li>Target section： 用于定义将要执行playbook的远程主机组及远程主机组上的用户，还包括定义通过什么样的方式连接远程主机（默认ssh）</li>
<li>Variable section： 定义playbook运行时需要使用的变量</li>
<li>Task section： 定义将要在远程主机上执行的任务列表</li>
<li>Handler section： 定义task执行完成以后需要调用的任务</li>
</ul>`,r:{minutes:3.96,words:1189},y:"a",t:"4.1 Playbook的结构及handler用法"},["/devops/ansible/dir-handler","/devops/ansible/dir-handler.md"]],["v-323c6e86","/devops/ansible/fact.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 5.2 Fact变量</h1>
<h2> 1 fact简介</h2>
<p>为了让Ansible更了解目标节点，可以让它去收集目标节点的信息，比如获取对方的主机名、系统版本、IP地址或其它网卡信息、分区挂载信息等等。在Ansible中，收集到的这些节点信息称为Facts。</p>
<p>有了这些信息，用户可以更好的控制管理节点，比如当IP地址为xxx时就怎样怎样，当系统是CentOS 6时怎样怎样，是CentOS 7时怎样怎样，等等。</p>
<p>有这些信息当然好，但是收集这些信息是有代价的，而且代价很大：因为要收集的信息量很大，所以收集的过程非常慢。所以，如果在playbook中用不上这些信息时，应当禁用收集行为，这也是一个非常有效的效率优化手段。</p>`,r:{minutes:12.25,words:3675},y:"a",t:"5.2 Fact变量"},["/devops/ansible/fact","/devops/ansible/fact.md"]],["v-25fa894e","/devops/ansible/first.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 1 初识Ansible</h1>
<h2> 1 Ansible简介</h2>
<p>Ansible官方文档： https://docs.ansible.com/</p>
<p>Ansible 是一个 IT 自动化工具。它能配置系统、部署软件、编排更复杂的 IT 任务，如连续部署或零停机时间滚动更新。</p>
<p>Ansible 用 python 编写，尽管市面上已经有很多可供选择的配置管理解决方案（例如 Salt，Puppet，Chef等），但它们各有优劣，而Ansible的特点在于它的简洁。让 Ansible 在主流的配置管理系统中与众不同的一点便是，它并不需要你在想要配置的每个节点上安装自己的组件。同时提供的一个优点在于，如果需要的话，你可以在不止一个地方控制你的整个基础架构。</p>`,r:{minutes:6.52,words:1955},y:"a",t:"1 初识Ansible"},["/devops/ansible/first","/devops/ansible/first.md"]],["v-f7c8afa6","/devops/ansible/inventory.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 2 Ansible Inventory配置详解</h1>
<p>在使用Ansible来批量管理主机的时候，通常我们需要先定义要管理哪些主机或者主机组，而这个用于管理主机与主机组的文件就叫做Inventory，也叫主机清单。</p>
<p>Ansible Inventory 是包含<code>静态 Inventory</code> 和<code>动态 Inventory</code> 两部分的，静态 Inventory 指的是在文件中指定的主机和组，动态 Inventory 指通过外部脚本获取主机列表，并按照 ansible 所要求的格式返回给 ansilbe 命令的。</p>
<h2> 1 inventory文件路径</h2>`,r:{minutes:12.03,words:3610},y:"a",t:"2 Ansible Inventory配置详解"},["/devops/ansible/inventory","/devops/ansible/inventory.md"]],["v-25717abd","/devops/ansible/jinja2.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 4.7 Jinja2 模板</h1>
<h2> Jinja2 简介</h2>
<h3> Jinja2 是什么？模板是什么？</h3>
<p>Jinja2 是基于 python 的模板引擎。那么什么是模板？</p>
<p>所谓模板，是可以在纯文本字符串中嵌入一些特殊语法格式的表达式，然后使用模板引擎去解析整个模板，将其中嵌入的特殊语法部分解析替换成对应的结果字符串。其中，解析并替换模板表达式的过程称为渲染。</p>
<p>为了让模板引擎只替换模板表达式而不操作普通字符串，所以模板引擎需要能够区分模板表达式和普通字符串，所以模板表达式通常会使用特殊符号包围起来。</p>
<p>模板更多用在 web 编程中来生成 HTML 页面，但绝不限于 web 编程，它可以用在很多方面，比如 Ansible 就使用 Jinja2 模板引擎来解析 YAML 中的字符串，也用在 template 模块渲染模板文件。</p>`,r:{minutes:12.81,words:3844},y:"a",t:"4.7 Jinja2 模板"},["/devops/ansible/jinja2","/devops/ansible/jinja2.md"]],["v-5aeeb3b4","/devops/ansible/lineinfile.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:"Ansible",e:`<h1> 3.2 Ansible lineinfile模块详解</h1>
<h2> 1 简介</h2>
<p>之所以专门说一说这个模块，是因为lineinfile在实际使用中非常有用。</p>
<p>lineinfile模块用于在源文件中插入、删除、替换行，和sed命令的功能类似，也支持正则表达式匹配和替换。</p>
<p>实际上，在大多数时候，我们在linux上的操作，就是针对文件的操作，通过配置管理工具对配置文件作统一的配置修改是一个非常酷的功能。</p>
<p>下面是官方针对该模块的说明：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lineinfile - Ensure a particular line is in a file, or replace an existing line using a back-referenced regular expression
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:4.37,words:1310},y:"a",t:"3.2 Ansible lineinfile模块详解"},["/devops/ansible/lineinfile","/devops/ansible/lineinfile.md"]],["v-de3b8b22","/devops/ansible/lookup.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 5.4 使用lookup生成变量</h1>
<h1> 简单说明</h1>
<p>在通常情况下，所有的配置信息都会被作为ansible的变量保存了，而且可以保存在ansible允许定义变量的各种地方，诸如vars区段，<code>vars_files</code>加载的文件中，以及host_vars和group_vars目录中。</p>
<p>但在有些时候，我们希望从诸如文本文件或者.csv文件中收集数据作为ansible的变量，或者直接获取某些命令的输出作为ansible的变量，甚至从redis或者etcd这样的键值存储中取得相应的值作为ansible的变量。这个时候，我们就需要通过ansible的lookup插件来从这些数据源中读取配置数据，传递给ansbile变量，并在playbook或者模板中使用这些数据。</p>`,r:{minutes:5.83,words:1749},y:"a",t:"5.4 使用lookup生成变量"},["/devops/ansible/lookup","/devops/ansible/lookup.md"]],["v-5433ba7c","/devops/ansible/magic.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 5.3 魔法变量</h1>
<p><strong>魔法变量</strong></p>
<p>Ansible默认会提供一些内置的变量以实现一些特定的功能，我们称之为魔法变量。下面列举一些常用的魔法变量。</p>
<p>https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html#magic</p>
<h2> 1. hostvars</h2>
<p>hostvars变量用于保存所有和主机相关的变量，通常包括inventory中定义的主机变量和gather_facts收集到的主机信息变量。hostvars是一个key/value格式的字典(即hash结构、对象)，key是每个节点的主机名，value是该主机对应的变量数据。</p>`,r:{minutes:2.87,words:860},y:"a",t:"5.3 魔法变量"},["/devops/ansible/magic","/devops/ansible/magic.md"]],["v-3320fa28","/devops/ansible/optimize.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 6 Ansible使用优化</h1>
<h2> 1 加大forks的值</h2>
<p>默认forks=5，即最多5个Ansible工作进程。即便是只有6个目标节点，对于"效率"常挂嘴边的21世纪IT人来说，这么一点数量的工作进程，也显然是杯水车薪。</p>
<p>对于Ansible来说，它的的大多数任务都是分派给目标节点去执行的，所以控制端通常比较闲暇。换句话说，控制端在浪费宝贵的资源。因此，如果没有其它资源的瓶颈(比如网络带宽瓶颈、磁盘IO瓶颈)，Ansible控制端可以尽可能开大马力，让足够多的节点同时开始运行。</p>
<p>加大forks的值，甚至尽情地加大forks的值，可以很大幅度地提升整个任务的执行效率。不用担心太多Ansible工作进程数量会影响Ansible控制端的性能，Ansible工作进程那缓慢的工作量对OS来说实在太轻松了(除非是一些会占用大量资源的特殊任务)。我想，对于一般任务来说，唯一需要考虑的是网络带宽是否足够支撑足够数量目标节点，偶尔可能还需要考虑磁盘瓶颈。</p>`,r:{minutes:8.44,words:2533},y:"a",t:"6 Ansible使用优化"},["/devops/ansible/optimize","/devops/ansible/optimize.md"]],["v-64097c30","/devops/ansible/playbook-for.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 4.2 Playbook循环语句</h1>
<h2> 1 简介</h2>
<p>我们在编写playbook的时候，不可避免的要执行一些重复性操作，比如指安装软件包，批量创建用户，操作某个目录下的所有文件等。正如我们所说，ansible一门简单的自动化语言，所以流程控制、循环语句这些编程语言的基本元素它同样都具备。</p>
<p>loop循环，它是在Ansible 2.5版本中新添加的循环结构，等价于with_list。大多数时候，with_xxx的循环都可以通过一定的手段转换成loop循环，所以从Ansible 2.5版本之后，原来经常使用的with_items循环都可以尝试转换成loop。</p>`,r:{minutes:6.41,words:1923},y:"a",t:"4.2 Playbook循环语句"},["/devops/ansible/playbook-for","/devops/ansible/playbook-for.md"]],["v-7e695b5c","/devops/ansible/playbook-if.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 4.3 Playbook条件语句</h1>
<h2> 1 简介</h2>
<p>在有的时候play的结果依赖于变量、fact或者是前一个任务的执行结果，或者有的时候，我们会基于上一个task执行返回的结果而决定如何执行后续的task。这个时候就需要用到条件判断。</p>
<p>条件语句在Ansible中的使用场景：</p>
<ul>
<li>在目标主机上定义了一个硬限制，比如目标主机的最小内存必须达到多少，才能执行该task</li>
<li>捕获一个命令的输出，根据命令输出结果的不同以触发不同的task</li>
<li>根据不同目标主机的facts，以定义不同的task</li>
<li>根据目标机的cpu的大小，以调优相关应用性能</li>
<li>用于判断某个服务的配置文件是否发生变更，以确定是否需要重启服务</li>
</ul>`,r:{minutes:11.98,words:3595},y:"a",t:"4.3 Playbook条件语句"},["/devops/ansible/playbook-if","/devops/ansible/playbook-if.md"]],["v-91925c40","/devops/ansible/playbook-tags.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 4.5 Playbook之tags</h1>
<h2> 1 简介</h2>
<p>在大型项目当中，通常一个playbook会有非常多的task。而我们每次执行这个playbook时，都会将所有task运行一遍。而事实上，在实际使用过程中，我们可能只是想要执行其中的一部分任务而已，并不想把整个playbook完整跑一遍。这个时候就需要用到tags。</p>
<p>通过tags，我们可以给playbook中的某一些任务打上“标签”，而在执行playbook的时候，我们可以通过选定标签的方式指定只执行哪一些任务或者不执行哪一些任务。</p>
<h2> 2 为task打tag</h2>
<p>下面是一个安装httpd的简单示例：</p>`,r:{minutes:3.64,words:1091},y:"a",t:"4.5 Playbook之tags"},["/devops/ansible/playbook-tags","/devops/ansible/playbook-tags.md"]],["v-7b0edca8","/devops/ansible/playbook.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 4 Ansible Playbook</h1>
<h2> 1 Ansible Playbook简介</h2>
<p>Ansible 靠ansible命令是撑不起自动化管理这把大伞的，Ansible真正强大的是playbook，它才是Ansible撬动自动化管理的结实杠杆。</p>
<p>ansbile-playbook是一系列ansible命令的集合，利用yaml 语言编写。playbook命令根据自上而下的顺序依次执行。同时，playbook开创了很多特性,它可以允许你传输某个命令的状态到后面的指令,如你可以从一台机器的文件中抓取内容并附为变量,然后在另一台机器中使用,这使得你可以实现一些复杂的部署机制,这是ansible命令无法实现的。</p>`,r:{minutes:4.4,words:1321},y:"a",t:"4 Ansible Playbook"},["/devops/ansible/playbook","/devops/ansible/playbook.md"]],["v-4ea72b99","/devops/ansible/qa.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 7 常见问题</h1>
<h3> 4.3 关于ssh连接一些常见的错误说明</h3>
<ol>
<li><code>ERROR! to use the 'ssh' connection type with passwords, you must install the sshpass program</code></li>
</ol>
<p>完整错误示例如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@ctnr:/etc/ansible# ansible '*.a32-168-1.*' -m ping
ctnr.a32-168-1.prod.yiz | FAILED! =&gt; {
    "failed": true, 
    "msg": "ERROR! to use the 'ssh' connection type with passwords, you must install the sshpass program"
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.15,words:346},y:"a",t:"7 常见问题"},["/devops/ansible/qa","/devops/ansible/qa.md"]],["v-4fe45b30","/devops/ansible/",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],u:51,e:`<h1> Ansible 学习笔记</h1>
<h2> 常用官网</h2>
<p><a href="https://docs.ansible.com/" target="_blank" rel="noopener noreferrer">Ansible Doc</a></p>
<p><a href="https://galaxy.ansible.com/" target="_blank" rel="noopener noreferrer">Ansible Galaxy</a></p>
<h2> 推荐教程</h2>
<p><a href="https://ansible.leops.cn/" target="_blank" rel="noopener noreferrer">ansible wiki | leops</a> ⭐</p>`,r:{minutes:.8,words:240},y:"a",t:"Ansible 学习笔记",i:"ansible"},["/devops/ansible/index.html","/devops/ansible/readme.md"]],["v-f7090128","/devops/ansible/roles.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 4.6 巧用Roles</h1>
<h2> 1 如何重用Playbook</h2>
<p>不能站在巨人肩膀上的编程语言不是好语言，支持重用机制会节省重复的调研工作上浪费大量的时间，当然也会提高可维护性。</p>
<p>Playbook支持两种重用机制，一种是重用静态Playbook脚本，另外一种是类似于编程语言中函数的机制。</p>
<ul>
<li>include语句 - 重用静态的Playbook脚本，使用起来简单、直接。</li>
<li>role语言 - Playbook的“函数机制”，使用方法稍复杂、功能强大。是Playbook脚本的共享平台ansible galaxy主要的分享方式</li>
</ul>`,r:{minutes:19.19,words:5758},y:"a",t:"4.6 巧用Roles"},["/devops/ansible/roles","/devops/ansible/roles.md"]],["v-0311f57c","/devops/ansible/var.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 5 Ansible变量</h1>
<h2> 变量优先级</h2>
<p>这些变量定义的方法，它们的优先级如下：</p>
<ol>
<li>在命令行中定义的变量（即用<code>-e</code>或<code>--extra-vars</code>定义的变量）；</li>
<li>在Inventory中定义的连接变量（比如：ansible_ssh_user）;</li>
<li>大多数的其他变量（命令行转换、play中的变量、included的变量、role中的变量等）；</li>
<li>在Inventory中定义的其他变量；</li>
<li>Facts变量；</li>
<li>“Role”默认变量，这个是默认的值，很容易丧失优先权。</li>
</ol>`,r:{minutes:1.32,words:396},y:"a",t:"5 Ansible变量"},["/devops/ansible/var","/devops/ansible/var.md"]],["v-54ce3d17","/devops/ansible/vault.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 5.5 使用vault配置加密</h1>
<h2> 1 简介</h2>
<p>在使用ansible的过程中，不可避免的会存储一些敏感信息，比如在变量文件中存储帐号密码信息等。</p>
<p>ansible通过ansible-vault命令行工具来提供对敏感文件的加密和解密。</p>
<p>ansible-vault可以创建、加密、解密和查看文件。其可以加密任何ansible使用的文件，包括inventory文件，playbook中调用的变量文件等。</p>
<h2> 2 Ansible-vault常用操作</h2>
<ol>
<li>创建加密文件</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ansible-vault create file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.08,words:324},y:"a",t:"5.5 使用vault配置加密"},["/devops/ansible/vault","/devops/ansible/vault.md"]],["v-2964dd3c","/devops/ansible/yaml.html",{d:15846624e5,l:"2020年3月20日",c:"自动化工具",g:["Ansible"],e:`<h1> 4.8 yaml语法</h1>
<h2> playbook的语法：YAML</h2>
<p>ansible的playbook采用yaml语法，它以非常简洁的方式实现了json格式的事件描述。</p>
<p>yaml之于json就像markdown之于html一样，极度简化了json的书写。</p>
<p>YAML文件后缀通常为.yaml或.yml。</p>
<p>YAML在不少工具里都使用，学习它是"一次学习、终生受益"的，所以很有必要把yaml的语法格式做个梳理，系统性地去学一学。</p>
<p><strong>YAML的基本语法规则如下：</strong></p>
<p>(1).使用缩进表示层级关系</p>`,r:{minutes:2.47,words:740},y:"a",t:"4.8 yaml语法"},["/devops/ansible/yaml","/devops/ansible/yaml.md"]],["v-378058bb","/devops/gitlab/",{d:15768e8,l:"2019年12月20日",c:"自动化工具",g:["Gitlab"],e:`<h1> gitlab备份迁移升级&amp;集成openldap</h1>
<h2> gitlab安装</h2>
<h3> 安装相关依赖</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">curl</span> policycoreutils-python openssh-server
yum <span class="token function">install</span> postfix
systemctl <span class="token builtin class-name">enable</span> postfix
systemctl start postfix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.47,words:1042},y:"a",t:"gitlab备份迁移升级&集成openldap"},["/devops/gitlab/index.html","/devops/gitlab/readme.md"]],["v-7d04e5f6","/devops/jenkins/ansible-install.html",{d:15791328e5,l:"2020年1月16日",c:"自动化工具",g:["Jenkins"],e:`<h1> 2.3 使用 ansible 安装 jenkins</h1>
<blockquote>
<p>经实验：ansible 2.7.10版本可以安装 jenkins 2.210版本</p>
<p>安装更高版本，请一并升级ansible，低版本ansible在安装插件时会报如下错误：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{"attempts": 5, "changed": false, "details": "HTTP Error 403: Forbidden", "item": "ansible", "msg": "Cannot install plugin."}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>`,r:{minutes:.47,words:141},y:"a",t:"2.3 使用 ansible 安装 jenkins"},["/devops/jenkins/ansible-install","/devops/jenkins/ansible-install.md"]],["v-77e47a71","/devops/jenkins/api.html",{d:1681912236e3,c:"自动化工具",g:["Jenkins"],e:`<h1> 3.2 访问 API</h1>
<blockquote>
<p>转载自：<a href="https://www.kancloud.cn/willseecloud/jenkins/1860660" target="_blank" rel="noopener noreferrer">访问API | willseecloud | 看云</a></p>
</blockquote>
<h2> 远程访问API</h2>
<p>Jenkins为功能提供了机器消耗的远程访问API。目前，它具有三种风格：</p>
<ol>
<li>XML</li>
<li>JSON with JSONP support</li>
<li>Python</li>
</ol>`,r:{minutes:6.26,words:1878},y:"a",t:"3.2 访问 API"},["/devops/jenkins/api","/devops/jenkins/api.md"]],["v-262983e2","/devops/jenkins/build-tools.html",{d:15791328e5,l:"2020年1月16日",c:"自动化工具",g:["Jenkins"],e:`<h1> 5.1 构建发布工具集成</h1>
<p>安装完成后，配置管理工具</p>
<h2> 安装并配置 git</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.54,words:163},y:"a",t:"5.1 构建发布工具集成"},["/devops/jenkins/build-tools","/devops/jenkins/build-tools.md"]],["v-1cd5ce80","/devops/jenkins/cicd.html",{d:1681912236e3,c:"自动化工具",g:["Jenkins"],e:`<h1> 1.1 DevOps、CI、CD都是什么鬼？</h1>
<blockquote>
<p>转载自：<a href="https://blog.jjonline.cn/linux/238.html" target="_blank" rel="noopener noreferrer">DevOps、CI、CD都是什么鬼？| 晶晶的博客</a></p>
</blockquote>
<p><img src="https://blog.jjonline.cn/Upload/image/201901/20190122160637.jpg" alt="DevOps、Ci、Cd图"></p>
<h2> DevOps</h2>`,r:{minutes:4.38,words:1315},y:"a",t:"1.1 DevOps、CI、CD都是什么鬼？"},["/devops/jenkins/cicd","/devops/jenkins/cicd.md"]],["v-7b53d6b2","/devops/jenkins/dingding-plugin.html",{d:1681912236e3,c:"自动化工具",g:["Jenkins"],e:`<h1> 4.5 共享库之钉钉消息推送</h1>
<p>起因：执行完流水线后进行一定程度的消息推送，所以选择钉钉进行<code>jenkins</code>构建结构的消息推送</p>
<h2> 下载配置相关依赖插件</h2>
<p>相关环境：</p>
<ul>
<li><code>Jenkins</code> 2.277.3，安装文档见上篇</li>
<li><code>DingTalk</code> 插件 2.4.3</li>
<li><code>build user vars plugin</code> 插件 1.7</li>
</ul>
<ol>
<li>
<p>在Jenkins中安装钉钉插件<a href="https://plugins.jenkins.io/dingding-notifications" target="_blank" rel="noopener noreferrer">DingTalk</a></p>
<blockquote>
<p>⚠️ 请确保你的 Jenkins 版本 &gt;= 2.176.4</p>
</blockquote>
</li>
<li>
<p>钉钉机器人配置，<a href="https://jenkinsci.github.io/dingtalk-plugin/" target="_blank" rel="noopener noreferrer">说明文档</a></p>
<p>找到 Jenkins 首页 &gt;&gt; 系统管理 &gt;&gt; 钉钉，我的配置如下图</p>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20210426164341273.png" alt="image-20210426164341273"></p>
<blockquote>
<p>⚠️ ​注意手动输入机器人的id，不要自动生成，否则重启后，robot的id将发生变化</p>
</blockquote>
</li>
<li>
<p>安装<a href="https://plugins.jenkins.io/build-user-vars-plugin" target="_blank" rel="noopener noreferrer">build user vars plugin</a>插件，插件可能有相关版本依赖，需要重启一下 Jenkins 才能继续安装</p>
<p>在流水线中，使用wrap，获取BUILD_USER变量</p>
<div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token function">wrap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">$</span><span class="token keyword">class</span><span class="token punctuation">:</span> <span class="token string">'BuildUser'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>`,r:{minutes:2.5,words:750},y:"a",t:"4.5 共享库之钉钉消息推送"},["/devops/jenkins/dingding-plugin","/devops/jenkins/dingding-plugin.md"]],["v-152091b0","/devops/jenkins/docker-install-jenkins.html",{d:1681912236e3,c:"自动化工具",g:["Jenkins"],e:`<h1> 2.4 使用docker安装jenkins</h1>
<h2> 安装配置docker</h2>
<ol>
<li>
<p>更换yum源，如果本来就是国内源，无需更换</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">"https://gitee.com/clay-wangzhi/shell/raw/master/repo_replace.sh"</span> <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>安装配置Docker</p>
<p>使用官方脚本安装 Docker</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">"https://get.docker.com/"</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> -- <span class="token parameter variable">--mirror</span> Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>加载br_netfilter</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>modprobe br_netfilter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置下系统内核参数</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cat<span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/sysctl.d/docker.conf</span>
# 要求iptables不对bridge的数据进行处理
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.bridge.bridge-nf-call-arptables = 1
# 开启转发
net.ipv4.ip_forward = 1
EOF</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span> /etc/sysctl.d/docker.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>⚠️ 慎用<code>sysctl --system</code>命令，如果参数在不同文件中设置，会有优先级问题，目前看来<code>/etc/sysctl.conf</code>的优先级最高</p>
</blockquote>
<p>配置docker镜像加速器</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://get.daocloud.io/daotools/set_mirror.sh <span class="token operator">|</span> <span class="token function">sh</span> <span class="token parameter variable">-s</span> http://f1361db2.m.daocloud.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动docker服务并加入开机自启</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span> <span class="token operator">&amp;&amp;</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>`,r:{minutes:2.19,words:656},y:"a",t:"2.4 使用docker安装jenkins"},["/devops/jenkins/docker-install-jenkins","/devops/jenkins/docker-install-jenkins.md"]],["v-7c5409ca","/devops/jenkins/first.html",{d:15791328e5,l:"2020年1月16日",c:"自动化工具",g:["Jenkins"],e:`<h1> 1.2 Jenkins简介</h1>
<h2> 简单介绍</h2>
<p><a href="https://jenkins.io/" target="_blank" rel="noopener noreferrer">Jenkins</a>前身是Hudson，Jenkins是一款开源 CI&amp;CD 软件，基于Java开发，用于自动化各种任务，包括构建、测试和部署软件。
Jenkins 支持各种运行方式，可通过系统包、Docker 或者通过一个独立的 Java 程序。</p>
<p>Jenkins 项目产生两个发行线, 长期支持版本 (LTS) 和每周更新版本， 两个版本都以 .war 文件, 原生包, 安装程序, 和 Docker 容器的形式分发。</p>`,r:{minutes:3.61,words:1084},y:"a",t:"1.2 Jenkins简介"},["/devops/jenkins/first","/devops/jenkins/first.md"]],["v-614501e6","/devops/jenkins/groovy-simple-tutorial.html",{d:1681912236e3,c:"自动化工具",g:["Jenkins"],e:`<h1> 4.3 Groovy 简明教程</h1>
<blockquote>
<p>转载自：<a href="https://www.qikqiak.com/post/groovy-simple-tutorial/" target="_blank" rel="noopener noreferrer">Groovy 简明教程 | 阳明的博客</a></p>
</blockquote>
<p>最近一直有很多同学提到不会写 Jenkins Pipeline 脚本，我都是直接摔一个 Jenkins 官方文档给他们，但是当我自己仔细去查看资料的时候发现并非如此简单，无论是声明式还是脚本式的 Pipeline 都依赖了 Groovy 脚本，所以如果要很好的掌握 Pipeline 脚本的用法，我们非常有必要去了解下 Groovy 语言。</p>`,r:{minutes:6.19,words:1857},y:"a",t:"4.3 Groovy 简明教程"},["/devops/jenkins/groovy-simple-tutorial","/devops/jenkins/groovy-simple-tutorial.md"]],["v-30d1e5c6","/devops/jenkins/jenkins-shared-library.html",{d:15791328e5,l:"2020年1月16日",c:"自动化工具",g:["Jenkins"],e:`<h1> 4.4 Jenkins共享库应用</h1>
<h2> 由来与演进</h2>
<p>在Jenkins 1.x中，对于job的配置大多是基于图形界面的，也就是说，要在GUI页面手动设置相关的job参数。
随着不同类型和用途的job越来越多，参数越来越复杂，难以有效地管理数量庞大的图形界面配置信息，也无法有效追踪和记录配置的更改。</p>
<p>在Jenkins 2.0中，基于Pipeline，用户可以在一个 JenkinsFile 中快速实现一个项目的从构建、测试以到发布的完整流程，灵活方便地实现持续交付。
并且通过“pipeline script from SCM”方式，可以保存这个流水线的定义，进行版本化管理。</p>`,r:{minutes:5.01,words:1504},y:"a",t:"4.4 Jenkins共享库应用"},["/devops/jenkins/jenkins-shared-library","/devops/jenkins/jenkins-shared-library.md"]],["v-5fee3290","/devops/jenkins/migrate-job.html",{d:15791328e5,l:"2020年1月16日",c:"自动化工具",g:["Jenkins"],e:`<h1> 7.1 Jenkins Job迁移</h1>
<p>在工作中可能会遇到这样的场景，即需要把一个Jenkins Master上的job迁移到另外一台Jenkins Master上，那怎么做比较好呢？</p>
<p>如果只是单独的一个job且这个job的设置很简单，这种情况下当然可以直接在新的Jenkins Master上直接创建job然后从旧的job拷贝下配置即可。但如果job很多，或者job的配置项较多那手动复制配置肯定是比较傻的行为。那我们现在来介绍下这种配置项较多、job比较多的情况下怎么来迁移这些job。</p>
<p>现在我搭建了两台Jenkins来进行说明。IP分别为192.168.9.9和192.168.9.8，现在我在.10上创建一个job，如test，然后进行如下配置</p>`,r:{minutes:5.06,words:1518},y:"a",t:"7.1 Jenkins Job迁移"},["/devops/jenkins/migrate-job","/devops/jenkins/migrate-job.md"]],["v-00acf522","/devops/jenkins/pipeline-dev-tools.html",{d:1681912236e3,c:"自动化工具",g:["Jenkins"],e:`<h1> 4.6 流水线开发工具</h1>
<blockquote>
<p>转载自：<a href="http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/" target="_blank" rel="noopener noreferrer">流水线开发工具 | 泽阳</a></p>
</blockquote>
<p>您好，本模块主要了解在流水线中常用的方法😀</p>
<hr>
<h2> 片段生成器</h2>
<p>使用片段生成器可以根据个人需要生成方法，有些方法来源于插件，则需要先安装相关的插件才能使用哦。</p>
<p><a href="http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/01.png" target="_blank" rel="noopener noreferrer"><img src="http://docs.idevops.site/jenkins/pipelinesyntax/chapter05/images/01.png" alt="images"></a></p>`,r:{minutes:1.49,words:447},y:"a",t:"4.6 流水线开发工具"},["/devops/jenkins/pipeline-dev-tools","/devops/jenkins/pipeline-dev-tools.md"]],["v-755fee70","/devops/jenkins/pipeline-example.html",{d:1681912236e3,c:"自动化工具",g:["Jenkins"],e:`<h1> 4.7 pipeline 生产配置实例</h1>
<h2> pipeline配置java项目</h2>
<div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>pipeline <span class="token punctuation">{</span>
    agent <span class="token punctuation">{</span> label <span class="token string">'slave'</span> <span class="token punctuation">}</span>
    options <span class="token punctuation">{</span>
        <span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">disableConcurrentBuilds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">buildDiscarder</span><span class="token punctuation">(</span>
            <span class="token function">logRotator</span><span class="token punctuation">(</span>
                numToKeepStr<span class="token punctuation">:</span> <span class="token string">'20'</span><span class="token punctuation">,</span>
                daysToKeepStr<span class="token punctuation">:</span> <span class="token string">'30'</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    parameters <span class="token punctuation">{</span>
        <span class="token function">choice</span><span class="token punctuation">(</span>
           name<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"DEPLOY_FLAG"</span></span><span class="token punctuation">,</span>
           choices<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'deploy'</span><span class="token punctuation">,</span> <span class="token string">'rollback'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
           description<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"发布/回滚"</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*=======================================常修改变量-start=======================================*/</span>
    environment <span class="token punctuation">{</span>
        gitUrl <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"git地址"</span></span>
        branchName <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"分支名称"</span></span>
        gitlabCredentialsId <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"认证凭证"</span></span>
        projectRunDir <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"项目运行目录"</span></span>
        jobName <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>JOB_NAME</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span>
        serviceName <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"服务名称"</span></span>
        serviceType <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"jar"</span></span>
        runHosts <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"192.168.167.xx,192.168.167.xx"</span></span>
        rollbackVersion <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">""</span></span>
    <span class="token punctuation">}</span>
    stages <span class="token punctuation">{</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Deploy'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            when <span class="token punctuation">{</span>
                expression <span class="token punctuation">{</span> <span class="token keyword">return</span> params<span class="token punctuation">.</span>DEPLOY_FLAG <span class="token operator">==</span> <span class="token string">'deploy'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            stages <span class="token punctuation">{</span>
                <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Pre Env'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    steps <span class="token punctuation">{</span>
                        echo <span class="token interpolation-string"><span class="token string">"======================================项目名称 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>JOB_NAME</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span>
                        echo <span class="token interpolation-string"><span class="token string">"======================================项目 URL = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">gitUrl</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span>
                        echo <span class="token interpolation-string"><span class="token string">"======================================项目分支 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">branchName</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span>
                        echo <span class="token interpolation-string"><span class="token string">"======================================当前编译版本号 = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>BUILD_NUMBER</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Git Clone'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    steps <span class="token punctuation">{</span>
                        git branch<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">branchName</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">,</span>
                        credentialsId<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">gitlabCredentialsId</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">,</span>
                        url<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">gitUrl</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Mvn Build'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    steps <span class="token punctuation">{</span>
                        <span class="token function">withMaven</span><span class="token punctuation">(</span>jdk<span class="token punctuation">:</span> <span class="token string">'jdk1.8'</span><span class="token punctuation">,</span> maven<span class="token punctuation">:</span> <span class="token string">'maven'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            sh <span class="token interpolation-string"><span class="token string">"mvn clean package -Dmaven.test.skip=true -U -f </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">serviceName</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/pom.xml"</span></span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Ansible Deploy'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    steps<span class="token punctuation">{</span>
                        script <span class="token punctuation">{</span>
                            sleep <span class="token number">5</span>
                            <span class="token function">ansiColor</span><span class="token punctuation">(</span><span class="token string">'xterm'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                ansiblePlaybook colorized<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> extras<span class="token punctuation">:</span> <span class="token string">'-e "directory=\${projectRunDir}" -e "job=\${jobName}" -e "service=\${serviceName}" -e "type=\${serviceType}"'</span><span class="token punctuation">,</span> installation<span class="token punctuation">:</span> <span class="token string">'ansible'</span><span class="token punctuation">,</span> inventory<span class="token punctuation">:</span> <span class="token string">'/etc/ansible/hosts.yml'</span><span class="token punctuation">,</span> limit<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">runHosts</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">,</span> playbook<span class="token punctuation">:</span> <span class="token string">'/etc/ansible/playbook/deploy-jenkins.yml'</span>                            
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>   
        <span class="token punctuation">}</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Rollback'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            when <span class="token punctuation">{</span>
                expression <span class="token punctuation">{</span> <span class="token keyword">return</span> params<span class="token punctuation">.</span>DEPLOY_FLAG <span class="token operator">==</span> <span class="token string">'rollback'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            steps<span class="token punctuation">{</span>
                script <span class="token punctuation">{</span>
                    rollbackVersion <span class="token operator">=</span> <span class="token function">input</span><span class="token punctuation">(</span>
                        message<span class="token punctuation">:</span> <span class="token interpolation-string"><span class="token string">"请填写要回滚的版本"</span></span><span class="token punctuation">,</span>
                        parameters<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                            <span class="token function">string</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span><span class="token string">'last_number'</span><span class="token punctuation">)</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">)</span>
                    sh <span class="token interpolation-string"><span class="token string">"""
                        echo "正在回滚至就近第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">rollbackVersion</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">个版本"
                        ansible </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">runHosts</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> -m shell -a "sh </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">projectRunDir</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/rollback.sh </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">rollbackVersion</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">serviceName</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"
                    """</span></span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    post <span class="token punctuation">{</span>
        always <span class="token punctuation">{</span>
            <span class="token function">deleteDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        success <span class="token punctuation">{</span>
            echo <span class="token string">'This task is successful!'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.91,words:874},y:"a",t:"4.7 pipeline 生产配置实例"},["/devops/jenkins/pipeline-example","/devops/jenkins/pipeline-example.md"]],["v-3efb1842","/devops/jenkins/pipelinesyntax.html",{d:1681912236e3,c:"自动化工具",g:["Jenkins"],e:`<h1> 4.2 Jenkins流水线语法</h1>
<p>您好，本模块主要学习声明式流水线的核心语法，掌握核心语法便于编写Jenkinsfile 😀</p>
<hr>
<h2> 声明式流水线</h2>
<p>声明式Pipleine是官方推荐的语法，声明式语法更加简洁。所有的声明式Pipeline都必须包含一个 pipeline块中，比如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline {
    //run
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.62,words:2285},y:"a",t:"4.2 Jenkins流水线语法"},["/devops/jenkins/pipelinesyntax","/devops/jenkins/pipelinesyntax.md"]],["v-03f7d317","/devops/jenkins/qa.html",{d:15791328e5,l:"2020年1月16日",c:"自动化工具",g:["Jenkins"],e:`<h1> 8 Jenkins 常见问题</h1>
<h2> Jenkins报错Error cloning remote repo 'origin'</h2>
<p>Jenkins配置了2个节点，但是只有master安装了git，很有可能任务被调到slave上执行所以报错</p>
<p>解决办法</p>
<ul>
<li>slave安装git</li>
<li>指定任务在master执行</li>
</ul>
<h2> jenkins添加从节点失败</h2>
<p>jenkins在添加从节点时
可以在启动方式中选择：Non verifying Verification Strategy</p>
`,r:{minutes:1.67,words:501},y:"a",t:"8 Jenkins 常见问题"},["/devops/jenkins/qa","/devops/jenkins/qa.md"]],["v-124e0572","/devops/jenkins/",{d:15791328e5,l:"2020年1月16日",c:"自动化工具",g:["Jenkins"],u:50,e:`<h1> Jenkins 学习笔记</h1>
<h2> 常用官网</h2>
<p><a href="https://www.jenkins.io/zh/" target="_blank" rel="noopener noreferrer">Jenkins</a></p>
<h2> 优秀教程</h2>
<p><a href="http://docs.idevops.site/jenkins/" target="_blank" rel="noopener noreferrer">Jenkins 实践 | 泽阳</a></p>
<p><a href="https://www.kancloud.cn/willseecloud/jenkins/1860515" target="_blank" rel="noopener noreferrer">jenkins | willseecloud | 看云</a></p>`,r:{minutes:1.18,words:354},y:"a",t:"Jenkins 学习笔记",i:"jenkins"},["/devops/jenkins/index.html","/devops/jenkins/readme.md"]],["v-c4bd02c8","/devops/jenkins/restart.html",{d:15791328e5,l:"2020年1月16日",c:"自动化工具",g:["Jenkins"],e:`<h1> 6.1 Jenkins 关闭和重启的实现方式</h1>
<h2> 关闭 jenkins</h2>
<p>只需要在访问jenkins服务器的网址url地址后加上exit。例如我jenkins的地址http://localhost:8080/，那么我只需要在浏览器地址栏上敲下<strong>http://localhost:8080/exit</strong> 网址就能关闭jenkins服务.</p>
<h2> 重启 Jenkins</h2>
<p><strong>http://localhost:8080/restart</strong></p>
<h2> 重新加载配置信息</h2>
`,r:{minutes:.34,words:103},y:"a",t:"6.1 Jenkins 关闭和重启的实现方式"},["/devops/jenkins/restart","/devops/jenkins/restart.md"]],["v-2966c6e4","/devops/jenkins/start-jenkinsfile.html",{d:1681912236e3,c:"自动化工具",g:["Jenkins"],e:`<h1> 4.1 开始编写Jenkinsfile</h1>
<blockquote>
<p>本文转自：<a href="http://docs.idevops.site/jenkins/pipelinesyntax/chapter01/" target="_blank" rel="noopener noreferrer">开始编写 Jenkinsfile | 泽阳</a></p>
</blockquote>
<p>您好，还在疑惑什么是流水线吗？ 本章我们将告诉您如何运行一条流水线 赶快学习吧！ 😀</p>
<hr>
<h2> 为什么使用pipeline?</h2>
<p>本质上，jenkins是一个自动化引擎，它支持许多自动模式。流水线向Jenkins添加了一组强大的工具，支持用例、简单的持续集成到全面的持续交付流水线。 通过对一系列的发布任务建立标准的模板，用户可以利用更多流水线的特性，比如：</p>`,r:{minutes:3.28,words:983},y:"a",t:"4.1 开始编写Jenkinsfile"},["/devops/jenkins/start-jenkinsfile","/devops/jenkins/start-jenkinsfile.md"]],["v-3a020ea1","/devops/jenkins/user-auth.html",{d:15791328e5,l:"2020年1月16日",c:"自动化工具",g:["Jenkins"],e:`<h1> 5.2 用户认证系统集成</h1>
<blockquote>
<p>转载自：<a href="http://docs.idevops.site/jenkins/pipelineintegrated/chapter02/" target="_blank" rel="noopener noreferrer">用户认证系统集成 | 泽阳</a></p>
</blockquote>
<p>您好，本章主要讲解与jenkins与用户认证系统集成 例如：LDAP Gitlab GitHub 。我们做实验的过程中建议先开启匿名模式，防止配置错误导致无法直接登录。 😀</p>
<hr>
<p>Jenkins默认使用自带数据库模式存储用户，在企业中一般都会有统一的认证中心，例如 LDAP、ActiveDirectory中管理用户。可以配置Jenkins集成实现统一用户管理。</p>`,r:{minutes:2.45,words:736},y:"a",t:"5.2 用户认证系统集成"},["/devops/jenkins/user-auth","/devops/jenkins/user-auth.md"]],["v-3c4d974f","/devops/jenkins/userandpermissions.html",{d:1681912236e3,c:"自动化工具",g:["Jenkins"],e:`<h1> 3.1 Jenkins用户权限管理</h1>
<blockquote>
<p>转载自：<a href="http://docs.idevops.site/jenkins/basics/userandpermissions/" target="_blank" rel="noopener noreferrer">Jenkins用户权限管理 | 泽阳</a></p>
</blockquote>
<p>Jenkins默认使用的是自带的数据库管理用户，支持同步LDAP、Github等认证集成。关于用户与权限管理是Jenkins比较弱的一点，当大规模授权的时候建议使用API接口授权，否则当你打开web页面授权时，会很乱加载缓慢，最终导致保存失败权限丢失。</p>`,r:{minutes:1.38,words:413},y:"a",t:"3.1 Jenkins用户权限管理"},["/devops/jenkins/userandpermissions","/devops/jenkins/userandpermissions.md"]],["v-3a240b8c","/devops/jenkins/validate-jenkinsfile.html",{d:1681912236e3,c:"自动化工具",g:["Jenkins"],e:`<h1> 4.8 在 VS Code 中校验 Jenkinsfile</h1>
<blockquote>
<p>转载自：<a href="https://github.com/jenkins-zh/jenkins-zh/blob/master/content/wechat/articles/2018/11/2018-11-21-validate-jenkinsfile.md" target="_blank" rel="noopener noreferrer">在 VS Code 中校验 Jenkinsfile |jenkins-zh/jenkins-zh | github </a></p>
</blockquote>`,r:{minutes:1.37,words:411},y:"a",t:"4.8 在 VS Code 中校验 Jenkinsfile"},["/devops/jenkins/validate-jenkinsfile","/devops/jenkins/validate-jenkinsfile.md"]],["v-5ac0cf56","/devops/jenkins/war-install.html",{d:1681912236e3,e:`<h1> 2.2 war 包安装 jenkins</h1>
<blockquote>
<p>转载自：<a href="https://www.kancloud.cn/willseecloud/jenkins/1860603" target="_blank" rel="noopener noreferrer">war包安装jenkins | willseecloud | 看云</a></p>
</blockquote>
<h2> war 包安装 jenkins</h2>
<p>参考：https://www.jenkins.io/doc/pipeline/tour/getting-started/</p>`,r:{minutes:.99,words:296},y:"a",t:"2.2 war 包安装 jenkins"},["/devops/jenkins/war-install","/devops/jenkins/war-install.md"]],["v-3192b10c","/devops/jenkins/yum-install.html",{d:1681912236e3,c:"自动化工具",g:["Jenkins"],e:`<h1> 2.1 yum 安装 jenkins</h1>
<blockquote>
<p>转载自： <a href="https://www.kancloud.cn/willseecloud/jenkins/1860531" target="_blank" rel="noopener noreferrer">yum安装jenkins | willseecloud | 看云</a></p>
</blockquote>
<h2> yum安装jenkins</h2>
<p>官方文档：</p>
<p>https://pkg.jenkins.io/redhat-stable/</p>
<p><a href="http://mirrors.jenkins-ci.org/%EF%BC%8C" target="_blank" rel="noopener noreferrer">http://mirrors.jenkins-ci.org/</a></p>`,r:{minutes:3.2,words:960},y:"a",t:"2.1 yum 安装 jenkins"},["/devops/jenkins/yum-install","/devops/jenkins/yum-install.md"]],["v-3f2b2588","/devops/jumpserver/jumpserver-ssh.html",{d:1681912236e3,c:"自动化工具",g:["jumpserver"],e:`<h1> 获取 jumpserver  ssh 连接的私钥</h1>
<p>迁移后，或者自己测试使用私钥连接时，找不到，可以通过如下方式获取</p>
<ul>
<li>jumpserver 版本： v2.19.2</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> jms_core /bin/bash
<span class="token builtin class-name">cd</span> apps/
from assets.models <span class="token function">import</span> SystemUser
s <span class="token operator">=</span> SystemUser.objects.get<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">'root'</span><span class="token punctuation">)</span>
s.private_key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.26,words:78},y:"a",t:"获取 jumpserver  ssh 连接的私钥"},["/devops/jumpserver/jumpserver-ssh","/devops/jumpserver/jumpserver-ssh.md"]],["v-0e29a549","/devops/jumpserver/podshell.html",{d:1681912236e3,c:"自动化工具",g:["jumpserver"],e:`<h2> 二开 jumpserver  podshell 登录</h2>
<p>目的： 控制开发人员可以登录的权限</p>
<p>版本： <strong>v2.19.2</strong></p>
<p>修改如下文件内容</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>diff <span class="token operator">-</span>r old<span class="token operator">-</span>apps<span class="token operator">/</span>apps<span class="token operator">/</span>applications<span class="token operator">/</span>api<span class="token operator">/</span>mixin<span class="token punctuation">.</span>py new<span class="token operator">-</span>apps<span class="token operator">/</span>apps<span class="token operator">/</span>applications<span class="token operator">/</span>api<span class="token operator">/</span>mixin<span class="token punctuation">.</span>py
42c42
<span class="token operator">&lt;</span>     <span class="token keyword">def</span> <span class="token function">serialize_applications_with_org</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> applications<span class="token punctuation">,</span> tree_id<span class="token punctuation">,</span> parent_info<span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token operator">&gt;</span>     <span class="token keyword">def</span> <span class="token function">serialize_applications_with_org</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> applications<span class="token punctuation">,</span> tree_id<span class="token punctuation">,</span> parent_info<span class="token punctuation">,</span> user<span class="token punctuation">,</span> login_username<span class="token punctuation">)</span><span class="token punctuation">:</span>
84c84
<span class="token operator">&lt;</span>         tree_nodes <span class="token operator">=</span> KubernetesTree<span class="token punctuation">(</span>tree_id<span class="token punctuation">)</span><span class="token punctuation">.</span>async_tree_node<span class="token punctuation">(</span>parent_info<span class="token punctuation">)</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token operator">&gt;</span>         tree_nodes <span class="token operator">=</span> KubernetesTree<span class="token punctuation">(</span>tree_id<span class="token punctuation">)</span><span class="token punctuation">.</span>async_tree_node<span class="token punctuation">(</span>parent_info<span class="token punctuation">,</span> login_username<span class="token punctuation">)</span>

diff <span class="token operator">-</span>r old<span class="token operator">-</span>apps<span class="token operator">/</span>apps<span class="token operator">/</span>applications<span class="token operator">/</span>utils<span class="token operator">/</span>kubernetes_util<span class="token punctuation">.</span>py new<span class="token operator">-</span>apps<span class="token operator">/</span>apps<span class="token operator">/</span>applications<span class="token operator">/</span>utils<span class="token operator">/</span>kubernetes_util<span class="token punctuation">.</span>py
14a15<span class="token punctuation">,</span><span class="token number">16</span>
<span class="token operator">&gt;</span> <span class="token keyword">import</span> requests
<span class="token operator">&gt;</span> <span class="token keyword">import</span> json
<span class="token number">59</span><span class="token punctuation">,</span>60c61<span class="token punctuation">,</span><span class="token number">92</span>
<span class="token operator">&lt;</span>     <span class="token keyword">def</span> <span class="token function">get_pods</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token operator">&lt;</span>         api <span class="token operator">=</span> self<span class="token punctuation">.</span>get_api<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token operator">&gt;</span>     <span class="token comment">#def get_pods(self):</span>
<span class="token operator">&gt;</span>     <span class="token comment">#    api = self.get_api()</span>
<span class="token operator">&gt;</span>     <span class="token comment">#    try:</span>
<span class="token operator">&gt;</span>     <span class="token comment">#        ret = api.list_pod_for_all_namespaces(watch=False, _request_timeout=(3, 3))</span>
<span class="token operator">&gt;</span>     <span class="token comment">#    except MaxRetryError:</span>
<span class="token operator">&gt;</span>     <span class="token comment">#        logger.warning('Kubernetes connection timed out')</span>
<span class="token operator">&gt;</span>     <span class="token comment">#        return</span>
<span class="token operator">&gt;</span>     <span class="token comment">#    except ApiException as e:</span>
<span class="token operator">&gt;</span>     <span class="token comment">#        if e.status == 401:</span>
<span class="token operator">&gt;</span>     <span class="token comment">#            logger.warning('Kubernetes User not authenticated')</span>
<span class="token operator">&gt;</span>     <span class="token comment">#        else:</span>
<span class="token operator">&gt;</span>     <span class="token comment">#            logger.warning(e)</span>
<span class="token operator">&gt;</span>     <span class="token comment">#        return</span>
<span class="token operator">&gt;</span>     <span class="token comment">#    data = {}</span>
<span class="token operator">&gt;</span>     <span class="token comment">#    for i in ret.items:</span>
<span class="token operator">&gt;</span>     <span class="token comment">#        namespace = i.metadata.namespace</span>
<span class="token operator">&gt;</span>     <span class="token comment">#        pod_info = {</span>
<span class="token operator">&gt;</span>     <span class="token comment">#            'pod_name': i.metadata.name,</span>
<span class="token operator">&gt;</span>     <span class="token comment">#            'containers': [j.name for j in i.spec.containers]</span>
<span class="token operator">&gt;</span>     <span class="token comment">#        }</span>
<span class="token operator">&gt;</span>     <span class="token comment">#        if namespace in data:</span>
<span class="token operator">&gt;</span>     <span class="token comment">#            data[namespace].append(pod_info)</span>
<span class="token operator">&gt;</span>     <span class="token comment">#        else:</span>
<span class="token operator">&gt;</span>     <span class="token comment">#            data[namespace] = [pod_info, ]</span>
<span class="token operator">&gt;</span>     <span class="token comment">#    return data</span>
<span class="token operator">&gt;</span>     <span class="token keyword">def</span> <span class="token function">get_pods</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> login_username<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token operator">&gt;</span>         <span class="token comment"># 调用 外部系统，查看 用户具有 appid 的权限列表</span>
<span class="token operator">&gt;</span>         xxx_api <span class="token operator">=</span> <span class="token string">"https://xxx/xxx_api/v1/auth/user/"</span>
<span class="token operator">&gt;</span>         xxx_auth <span class="token operator">=</span> <span class="token string">"xxx"</span>
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span>         res <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>xxx_api<span class="token operator">+</span>login_username<span class="token operator">+</span><span class="token string">"/appid"</span><span class="token punctuation">,</span> headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"Authorization"</span><span class="token punctuation">:</span> xxx_auth<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>         xxx_apps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token number">62</span><span class="token punctuation">,</span>64c94<span class="token punctuation">,</span><span class="token number">102</span>
<span class="token operator">&lt;</span>             ret <span class="token operator">=</span> api<span class="token punctuation">.</span>list_pod_for_all_namespaces<span class="token punctuation">(</span>watch<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> _request_timeout<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span>         <span class="token keyword">except</span> MaxRetryError<span class="token punctuation">:</span>
<span class="token operator">&lt;</span>             logger<span class="token punctuation">.</span>warning<span class="token punctuation">(</span><span class="token string">'Kubernetes connection timed out'</span><span class="token punctuation">)</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token operator">&gt;</span>             body <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>res<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
<span class="token operator">&gt;</span>             data <span class="token operator">=</span> body<span class="token punctuation">[</span><span class="token string">"data"</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span>             msg <span class="token operator">=</span> body<span class="token punctuation">[</span><span class="token string">"message"</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span>             code <span class="token operator">=</span> body<span class="token punctuation">[</span><span class="token string">"code"</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span>             <span class="token keyword">if</span> code <span class="token operator">!=</span> <span class="token number">200</span><span class="token punctuation">:</span>
<span class="token operator">&gt;</span>                 <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"调用 xxx 返回异常"</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>                 <span class="token keyword">return</span>
<span class="token operator">&gt;</span>         <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
<span class="token operator">&gt;</span>             <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"调用 xxx 获取appid列表解析失败:"</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token number">66</span><span class="token punctuation">,</span>70c104<span class="token punctuation">,</span><span class="token number">118</span>
<span class="token operator">&lt;</span>         <span class="token keyword">except</span> ApiException <span class="token keyword">as</span> e<span class="token punctuation">:</span>
<span class="token operator">&lt;</span>             <span class="token keyword">if</span> e<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">401</span><span class="token punctuation">:</span>
<span class="token operator">&lt;</span>                 logger<span class="token punctuation">.</span>warning<span class="token punctuation">(</span><span class="token string">'Kubernetes User not authenticated'</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span>             <span class="token keyword">else</span><span class="token punctuation">:</span>
<span class="token operator">&lt;</span>                 logger<span class="token punctuation">.</span>warning<span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token operator">&gt;</span>         <span class="token keyword">finally</span><span class="token punctuation">:</span>
<span class="token operator">&gt;</span>             res<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>         <span class="token keyword">for</span> app <span class="token keyword">in</span> data<span class="token punctuation">:</span>
<span class="token operator">&gt;</span>             xxx_apps<span class="token punctuation">.</span>append<span class="token punctuation">(</span>app<span class="token punctuation">[</span><span class="token string">"id"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span>         <span class="token comment"># 调用k8s-resource-apis, 自封装的 api 接口</span>
<span class="token operator">&gt;</span>         res_apps <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>         k8s_resource_api <span class="token operator">=</span> <span class="token string">"http://xxxx"</span>
<span class="token operator">&gt;</span>         res <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>k8s_resource_api<span class="token operator">+</span><span class="token string">"/get-all-app-list/"</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>         <span class="token keyword">try</span><span class="token punctuation">:</span>
<span class="token operator">&gt;</span>             body <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>res<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
<span class="token operator">&gt;</span>             data <span class="token operator">=</span> body<span class="token punctuation">[</span><span class="token string">"data"</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span>             msg <span class="token operator">=</span> body<span class="token punctuation">[</span><span class="token string">"msg"</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span>         <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
<span class="token operator">&gt;</span>             <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"调用k8sResourceApi获取appid列表解析失败:"</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token number">72</span><span class="token punctuation">,</span>80c120<span class="token punctuation">,</span><span class="token number">157</span>
<span class="token operator">&lt;</span>         data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>         <span class="token keyword">for</span> i <span class="token keyword">in</span> ret<span class="token punctuation">.</span>items<span class="token punctuation">:</span>
<span class="token operator">&lt;</span>             namespace <span class="token operator">=</span> i<span class="token punctuation">.</span>metadata<span class="token punctuation">.</span>namespace
<span class="token operator">&lt;</span>             pod_info <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token operator">&lt;</span>                 <span class="token string">'pod_name'</span><span class="token punctuation">:</span> i<span class="token punctuation">.</span>metadata<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
<span class="token operator">&lt;</span>                 <span class="token string">'containers'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>j<span class="token punctuation">.</span>name <span class="token keyword">for</span> j <span class="token keyword">in</span> i<span class="token punctuation">.</span>spec<span class="token punctuation">.</span>containers<span class="token punctuation">]</span>
<span class="token operator">&lt;</span>             <span class="token punctuation">}</span>
<span class="token operator">&lt;</span>             <span class="token keyword">if</span> namespace <span class="token keyword">in</span> data<span class="token punctuation">:</span>
<span class="token operator">&lt;</span>                 data<span class="token punctuation">[</span>namespace<span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>pod_info<span class="token punctuation">)</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token operator">&gt;</span>         <span class="token keyword">finally</span><span class="token punctuation">:</span>
<span class="token operator">&gt;</span>             res<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span>         <span class="token keyword">if</span> res<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
<span class="token operator">&gt;</span>             <span class="token keyword">for</span> item <span class="token keyword">in</span> data<span class="token punctuation">:</span>
<span class="token operator">&gt;</span>                 res_apps<span class="token punctuation">.</span>add<span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span>         <span class="token comment"># apps</span>
<span class="token operator">&gt;</span>         apps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span>         <span class="token keyword">for</span> item <span class="token keyword">in</span> xxx_apps<span class="token punctuation">:</span>
<span class="token operator">&gt;</span>             <span class="token keyword">if</span> item <span class="token keyword">in</span> res_apps<span class="token punctuation">:</span>
<span class="token operator">&gt;</span>                 apps<span class="token punctuation">.</span>append<span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span>         <span class="token comment"># get pods</span>
<span class="token operator">&gt;</span>         ctx <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>    <span class="token comment"># {"namespace": [{podname:aaaa, containers}]}</span>
<span class="token operator">&gt;</span>         <span class="token keyword">for</span> appid <span class="token keyword">in</span> apps<span class="token punctuation">:</span>
<span class="token operator">&gt;</span>             res <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>k8s_resource_api<span class="token operator">+</span><span class="token string">"/get-pods-by-app/"</span><span class="token operator">+</span>appid<span class="token operator">+</span><span class="token string">"/"</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>             <span class="token keyword">try</span><span class="token punctuation">:</span>
<span class="token operator">&gt;</span>                 body <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>res<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
<span class="token operator">&gt;</span>                 data <span class="token operator">=</span> body<span class="token punctuation">[</span><span class="token string">"data"</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span>                 msg <span class="token operator">=</span> body<span class="token punctuation">[</span><span class="token string">"msg"</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span>             <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
<span class="token operator">&gt;</span>                 <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"调用k8sResourceApis获取appid-pods列表解析失败:"</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">,</span> appid<span class="token punctuation">)</span>
<span class="token operator">&gt;</span>             <span class="token keyword">finally</span><span class="token punctuation">:</span>
<span class="token operator">&gt;</span>                 res<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span>             <span class="token keyword">if</span> res<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
<span class="token operator">&gt;</span>                 <span class="token keyword">try</span><span class="token punctuation">:</span>
<span class="token operator">&gt;</span>                     <span class="token keyword">for</span> pod <span class="token keyword">in</span> data<span class="token punctuation">:</span>            <span class="token comment"># key: pod-name, 原始data结构：{"pod-name": {"Ns": "xxx", "Containers": {"c-name": "c-id"}}}</span>
<span class="token operator">&gt;</span>                         ns <span class="token operator">=</span> data<span class="token punctuation">[</span>pod<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"Ns"</span><span class="token punctuation">]</span>    <span class="token comment"># ns == "xxx"</span>
<span class="token operator">&gt;</span>                         <span class="token keyword">if</span> ns <span class="token keyword">not</span> <span class="token keyword">in</span> ctx<span class="token punctuation">:</span>
<span class="token operator">&gt;</span>                             ctx<span class="token punctuation">[</span>ns<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span>                         containers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span>                         <span class="token keyword">for</span> c <span class="token keyword">in</span> data<span class="token punctuation">[</span>pod<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"Containers"</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
<span class="token operator">&gt;</span>                             containers<span class="token punctuation">.</span>append<span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token operator">&gt;</span>                         ctx<span class="token punctuation">[</span>ns<span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"pod_name"</span><span class="token punctuation">:</span> pod<span class="token punctuation">,</span> <span class="token string">"containers"</span><span class="token punctuation">:</span> containers<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>                 <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
<span class="token operator">&gt;</span>                     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"解析重组pod列表信息异常:"</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token number">82</span><span class="token punctuation">,</span>83c159<span class="token punctuation">,</span><span class="token number">160</span>
<span class="token operator">&lt;</span>                 data<span class="token punctuation">[</span>namespace<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>pod_info<span class="token punctuation">,</span> <span class="token punctuation">]</span>
<span class="token operator">&lt;</span>         <span class="token keyword">return</span> data
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token operator">&gt;</span>                 <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"调用k8sResourceApis获取pod列表返回状态异常:"</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" "</span><span class="token operator">+</span>msg<span class="token punctuation">)</span>
<span class="token operator">&gt;</span>         <span class="token keyword">return</span> ctx
86c163
<span class="token operator">&lt;</span>     <span class="token keyword">def</span> <span class="token function">get_kubernetes_data</span><span class="token punctuation">(</span>app_id<span class="token punctuation">,</span> system_user_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token operator">&gt;</span>     <span class="token keyword">def</span> <span class="token function">get_kubernetes_data</span><span class="token punctuation">(</span>app_id<span class="token punctuation">,</span> system_user_id<span class="token punctuation">,</span> login_username<span class="token punctuation">)</span><span class="token punctuation">:</span>
91c168
<span class="token operator">&lt;</span>         <span class="token keyword">return</span> k8s<span class="token punctuation">.</span>get_pods<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token operator">&gt;</span>         <span class="token keyword">return</span> k8s<span class="token punctuation">.</span>get_pods<span class="token punctuation">(</span>login_username<span class="token punctuation">)</span>
153c230
<span class="token operator">&lt;</span>     <span class="token keyword">def</span> <span class="token function">async_tree_node</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> parent_info<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token operator">&gt;</span>     <span class="token keyword">def</span> <span class="token function">async_tree_node</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> parent_info<span class="token punctuation">,</span> login_username<span class="token punctuation">)</span><span class="token punctuation">:</span>
160c237
<span class="token operator">&lt;</span>         data <span class="token operator">=</span> KubernetesClient<span class="token punctuation">.</span>get_kubernetes_data<span class="token punctuation">(</span>app_id<span class="token punctuation">,</span> system_user_id<span class="token punctuation">)</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token operator">&gt;</span>         data <span class="token operator">=</span> KubernetesClient<span class="token punctuation">.</span>get_kubernetes_data<span class="token punctuation">(</span>app_id<span class="token punctuation">,</span> system_user_id<span class="token punctuation">,</span> login_username<span class="token punctuation">)</span>

diff <span class="token operator">-</span>r old<span class="token operator">-</span>apps<span class="token operator">/</span>apps<span class="token operator">/</span>perms<span class="token operator">/</span>api<span class="token operator">/</span>application<span class="token operator">/</span>user_permission<span class="token operator">/</span>user_permission_applications<span class="token punctuation">.</span>py new<span class="token operator">-</span>apps<span class="token operator">/</span>apps<span class="token operator">/</span>perms<span class="token operator">/</span>api<span class="token operator">/</span>application<span class="token operator">/</span>user_permission<span class="token operator">/</span>user_permission_applications<span class="token punctuation">.</span>py
59a60<span class="token punctuation">,</span><span class="token number">64</span>
<span class="token operator">&gt;</span>         login_username <span class="token operator">=</span> <span class="token string">""</span>
<span class="token operator">&gt;</span>         login_user <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>__dict__<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">"_user"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>         lft <span class="token operator">=</span> login_user<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">'('</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>         <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>lft<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">:</span>
<span class="token operator">&gt;</span>            login_username <span class="token operator">=</span> lft<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">')'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
64c69
<span class="token operator">&lt;</span>             queryset<span class="token punctuation">,</span> tree_id<span class="token punctuation">,</span> parent_info<span class="token punctuation">,</span> self<span class="token punctuation">.</span>user
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token operator">&gt;</span>             queryset<span class="token punctuation">,</span> tree_id<span class="token punctuation">,</span> parent_info<span class="token punctuation">,</span> self<span class="token punctuation">.</span>user<span class="token punctuation">,</span> login_username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.04,words:611},y:"a",t:""},["/devops/jumpserver/podshell","/devops/jumpserver/podshell.md"]],["v-424ac8f6","/devops/jumpserver/",{d:1681912236e3,c:"自动化工具",g:["jumpserver"],e:`<h1> jumpserver 学习笔记</h1>
<h2> 常用官网</h2>
<p><a href="https://docs.jumpserver.org/zh/master/" target="_blank" rel="noopener noreferrer">官方文档</a></p>
<p><a href="https://docs.jumpserver.org/zh/master/dev/rest_api/" target="_blank" rel="noopener noreferrer">API 文档</a></p>
<h2> 关联文档</h2>
<p><a href="https://fontawesome.com/v5.15/icons?d=gallery&amp;p=2&amp;m=free" target="_blank" rel="noopener noreferrer">jumpserver 中可使用的 fontawesome</a></p>`,r:{minutes:.23,words:69},y:"a",t:"jumpserver 学习笔记"},["/devops/jumpserver/index.html","/devops/jumpserver/readme.md"]],["v-2cd1a3ca","/devops/jumpserver/yace.html",{d:1681912236e3,c:"自动化工具",g:["jumpserver"],e:`<h2> 控制资产登录时间</h2>
<p>创建 修改 登录时间的脚步 <code>jump.sh</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#pro-jumpserver</span>
<span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token string">"root"</span>
<span class="token assign-left variable">passwd</span><span class="token operator">=</span><span class="token string">"xxx"</span>
<span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token string">"localhost"</span>
<span class="token assign-left variable">dbname</span><span class="token operator">=</span><span class="token string">"jumpserver"</span>

<span class="token assign-left variable">date1</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y-%m-%d<span class="token variable">\`</span></span>
<span class="token assign-left variable">date2</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y-%m-%d <span class="token parameter variable">--date</span><span class="token operator">=</span><span class="token string">"+1 day"</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">date_start</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$date1</span> 12:00:00"</span>
<span class="token assign-left variable">date_expired</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$date2</span> 00:00:00"</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">"xx-xx;xx-xx"</span>

<span class="token assign-left variable">OLDIFS</span><span class="token operator">=</span><span class="token environment constant">$IFS</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">$';'</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">name</span> <span class="token keyword">in</span> <span class="token variable">$NAME</span>
<span class="token keyword">do</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> jms_mysql mysql -u<span class="token variable">$username</span> -h<span class="token variable">$host</span> -p<span class="token variable">$passwd</span> <span class="token variable">$dbname</span> <span class="token parameter variable">-e</span> <span class="token string">"update perms_assetpermission set date_start=STR_TO_DATE('<span class="token variable">$date_start</span>','%Y-%m-%d %H:%i:%s') where name='<span class="token variable">$name</span>';"</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-i</span> jms_mysql mysql -u<span class="token variable">$username</span> -h<span class="token variable">$host</span> -p<span class="token variable">$passwd</span> <span class="token variable">$dbname</span> <span class="token parameter variable">-e</span> <span class="token string">"update perms_assetpermission set date_expired=STR_TO_DATE('<span class="token variable">$date_expired</span>','%Y-%m-%d %H:%i:%s') where name='<span class="token variable">$name</span>';"</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.58,words:175},y:"a",t:""},["/devops/jumpserver/yace","/devops/jumpserver/yace.md"]],["v-d3fe39f2","/monitor/prometheus/multi_remote_read.html",{d:1681909711e3,c:"监控",g:["prometheus"],e:`<h1> 别再乱用 Prometheus 联邦了，分享一个 Prometheus 高可用新方案</h1>
<blockquote>
<p>转载自：<a href="https://mp.weixin.qq.com/s/PDmSntHaN-tTltLBghyO4g" target="_blank" rel="noopener noreferrer">别再乱用 Prometheus 联邦了，分享一个 Prometheus 高可用新方案 ｜ 云原生实验室</a></p>
</blockquote>
<h2> 前言</h2>
<ul>
<li>
<p>我看到很多人会这样使用联邦：联邦 prometheus 收集多个采集器的数据</p>
</li>
<li>
<p>实在看不下下去了，很多小白还在乱用<code>prometheus</code>的联邦</p>
</li>
<li>
<p>其实很多人是想实现 prometheus 数据的可用性，数据分片保存，有个统一的查询地方(小白中的联邦 prometheus)</p>
</li>
<li>
<p>而且引入 m3db 等支持集群的 tsdb 可能比较重</p>
</li>
<li>
<p>具体问题可以看我之前写的文章 <strong>m3db 资源开销，聚合降采样，查询限制等注意事项</strong>[1]</p>
</li>
<li>
<ul>
<li><strong>m3db-node oom 追踪和内存分配器代码查看</strong>[2]</li>
</ul>
</li>
<li>
<p>今天写篇文章分析下联邦的问题，并给出一个基于全部是 prometheus 的<code>multi_remote_read</code>方案</p>
</li>
</ul>`,r:{minutes:6.03,words:1809},y:"a",t:"别再乱用 Prometheus 联邦了，分享一个 Prometheus 高可用新方案"},["/monitor/prometheus/multi_remote_read","/monitor/prometheus/multi_remote_read.md"]],["v-32678264","/monitor/prometheus/pod-label.html",{d:1681909711e3,c:"监控",g:["prometheus"],e:`<h1> Prometheus迷雾 - 无法获取Pod的label</h1>
<blockquote>
<p>转载自：<a href="https://www.jianshu.com/p/d39aed7e3788" target="_blank" rel="noopener noreferrer">Prometheus迷雾 - 无法获取Pod的label | 喜贵的云原生 | 简书</a></p>
</blockquote>
<h2> 问题背景</h2>
<p>Prometheus在抓取container的CPU/Mem等metric的时候，发现metric上没有带Pod的label，这导致一个问题，无法通过自定义的label查看其下的所有metric资源。
例如下面的一个a-custom-project, 带了一个project: a-custom-project label</p>`,r:{minutes:7.15,words:2146},y:"a",t:"Prometheus迷雾 - 无法获取Pod的label"},["/monitor/prometheus/pod-label","/monitor/prometheus/pod-label.md"]],["v-78cfc7b7","/monitor/prometheus/",{d:1681909711e3,c:"监控",g:["prometheus"],e:`<h1> Prometheus 学习笔记</h1>
<h2> 常用官网</h2>
<p><a href="https://prometheus.io/docs/introduction/overview/" target="_blank" rel="noopener noreferrer">prometheus 官方文档</a> ⭐</p>
<h2> Prometheus 教程</h2>
<p><a href="https://yunlzheng.gitbook.io/prometheus-book/" target="_blank" rel="noopener noreferrer">Prometheus | yunlzheng | github</a> ⭐</p>`,r:{minutes:.15,words:44},y:"a",t:"Prometheus 学习笔记"},["/monitor/prometheus/index.html","/monitor/prometheus/readme.md"]],["v-46bc9423","/monitor/zabbix/agent2-https.html",{d:1681909711e3,c:"监控",g:["Zabbix"],e:`<h1> 使用zabbix-agent2自定义插件获取https证书过期时间</h1>
<blockquote>
<p>转载自: <a href="https://mp.weixin.qq.com/s/Sw0WubPH7luEY_kaVsoPkg" target="_blank" rel="noopener noreferrer">公众号运维开发故事 | wanger</a></p>
</blockquote>
<h2> 需求</h2>
<p>对经常维护网站的人来说，要经常跟https的证书打交道。一般https证书的有效期是一年，证书一旦过期，公司的损失会非常大。去年网易邮箱因为https证书忘记续期，导致大量用户无法正常使用邮箱就是个典型案例。什么时候想起来才去手动查一下也不现实，最好的方法是把过期时间监控起来，距离一定期限自动发送通知。</p>`,r:{minutes:3.52,words:1057},y:"a",t:"使用zabbix-agent2自定义插件获取https证书过期时间"},["/monitor/zabbix/agent2-https","/monitor/zabbix/agent2-https.md"]],["v-f875cf44","/monitor/zabbix/qa.html",{d:1681909711e3,c:"监控",g:["Zabbix"],e:`<h1> 6 常见问题</h1>
<h1> Zabbix客户端日志出现(Not all processes could be identified）</h1>
<p>场景：因为使用了netstat -p参数。</p>
<p>权限问题，zabbix_agentd是zabbix用户启动的，默认不能执行netstat -p等命令，导致从服务器取到的自动发现脚本为空</p>
<p>(Not all processes could be identified, non-owned process info
will not be shown, you would have to be root to see it all.)
解决方法 ：</p>`,r:{minutes:.9,words:270},y:"a",t:"6 常见问题"},["/monitor/zabbix/qa","/monitor/zabbix/qa.md"]],["v-0b0f120b","/monitor/zabbix/",{d:1681909711e3,c:"监控",g:["Zabbix"],e:`<h1> 1 zabbix4.4新功能</h1>
<p>探索Zabbix4.4新功能</p>
<blockquote>
<p>https://www.zabbix.com/cn/whats_new_4_4</p>
</blockquote>
<ul>
<li>
<p>新一代的Zabbix Agent</p>
<ul>
<li>Go语言编写</li>
<li>用于监控各种服务和应用的插件框架</li>
<li>并发检查时确保状态正常(例如，保持持续的DB连接)</li>
<li>内置时间调度器（scheduler ），支持灵活的时间间隔</li>
<li>使用批量数据传输的高效的网络使用</li>
<li>用即将支持的更多平台嵌入式替换Linux上现有的代理</li>
</ul>
</li>
<li>
<p>活动和告警功能升级：应用Webhooks和可编程逻辑</p>
<ul>
<li>该功能简化了与外部系统的双向集成，允许从Zabbix UI一键访问工单系统中的case，在聊天中创建消息等等。可使用内置的JavaScript引擎定义所有处理逻辑，与外部通知和工单系统集成得到了极大的改进。</li>
</ul>
</li>
<li>
<p>为Zabbix模板设置标准</p>
<ul>
<li>
<p>我们为模板引入了一组标准和定义明确的 <a href="https://www.zabbix.com/documentation/guidelines/templates" target="_blank" rel="noopener noreferrer">准则</a>。 对于所有模板的创建者和维护者以及所有Zabbix用户来说，统一标准非常重要。</p>
<p>对XML/JSON文件的结构进行了极大的简化，仅使用文本编辑器即可手动编辑模板。大多数现有的模板都经过了改进以适应新的标准。</p>
</li>
</ul>
</li>
<li>
<p>官方支持TimescaleDB</p>
<ul>
<li>除了MySQL、PostgreSQL、Oracle和DB2之外，我们现在正式宣布官方支持TimescaleDB。 与传统的关系数据库相比，TimescaleDB有诸多有点：近乎线性的性能水平， 支持自动即时删除旧的历史数据，更容易维护等等。</li>
</ul>
</li>
<li>
<p>监控项和触发器的知识库</p>
<ul>
<li>Zabbix 4.4提供了对监控项和触发器的更直观的描述。这些信息为工程师提供了巨大的帮助， 为他们提供了关于收集监控项的意义和目的、问题细节和触发器的解决指令等所有可能的细节。</li>
</ul>
</li>
<li>
<p>高级可视化功能</p>
<ul>
<li>
<p>仪表板和相关的小工具在许多方面得到了改进，简化了创建和管理的过程， 增加了只需单击鼠标即可修改小工具参数的功能。现在仪表板网格尺寸极佳可支持超宽屏幕和大屏幕墙。</p>
<p>问题视图小工具增强支持聚合视图，并引入了一个新的小工具来显示图形原型。</p>
<p>此外，所有小工具现在都可以在无标题模式下显示。</p>
</li>
</ul>
</li>
<li>
<p>条形图和聚合</p>
<ul>
<li>Zabbix 4.4提供了条形图，graph widget现在支持使用各种聚合函数进行数据聚合。 这两个特性的结合使得长期数据分析和容量规划变得更加容易。</li>
</ul>
</li>
<li>
<p>官方支持更多新平台</p>
<ul>
<li>SUSE Linux Enterprise Server 15</li>
<li>Debian 10</li>
<li>Raspbian 10</li>
<li>Mac OS/X</li>
<li>RHEL 8</li>
<li>用于Windows agent的MSI</li>
</ul>
<p>请参阅<a href="https://www.zabbix.com/cn/download" target="_blank" rel="noopener noreferrer">下载</a> 页面中的所有可用平台</p>
</li>
<li>
<p>云端一键部署</p>
<p>Zabbix容器或镜像已经上线以下国际主流云平台，国内版本即将依次上线：</p>
<ul>
<li>
<p><a href="https://aws.amazon.com/marketplace/pp/B07YLKJTZQ?qid=1570610512988&amp;sr=0-6&amp;ref_=srh_res_product_title" target="_blank" rel="noopener noreferrer">AWS</a></p>
</li>
<li>
<p><a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/zabbix.zabbix_vm1?tab=Overview" target="_blank" rel="noopener noreferrer">Azure</a></p>
</li>
<li>
<p>Google Cloud Platform</p>
</li>
<li>
<p><a href="https://marketplace.digitalocean.com/apps/zabbix" target="_blank" rel="noopener noreferrer">Digital Ocean</a></p>
</li>
<li>
<p><a href="https://www.zabbix.com/cn/whats_new_4_4" target="_blank" rel="noopener noreferrer">Docker</a></p>
</li>
</ul>
</li>
<li>
<p>安全的自动注册功能</p>
<ul>
<li>Zabbix的新版本支持可选的PSK加密，用于自动注册，并为添加的主机提供自动加密设置。 现在您可以将Zabbix设置为仅使用PSK，未加密或两者都允许自动注册网络设备。</li>
</ul>
</li>
<li>
<p>预处理功能升级：高级JSONPath</p>
<ul>
<li>Zabbix现在支持JSONPath的高级排列，允许对JSON数据进行复杂的预处理，包括聚合和搜索。 预处理还可以用于低等级发现，这使得它成为一个非常强大的自动化发现工具。</li>
</ul>
</li>
<li>
<p>用户宏的描述</p>
<ul>
<li>用户宏命令是一个非常好的功能，它简化了Zabbix的配置，使大量的配置变得轻而易举。 对用户宏命令的描述支持将有助于记录每个宏命令的用途，使宏命令的管理更加容易。</li>
</ul>
</li>
<li>
<p>更高效高级的数据收集</p>
<ul>
<li>通过新的JSON格式的返回对象数组检查，WMI、JMX和ODBC相关项的数据收集和发现得到了改进。 我们还为VMWare监控增加了VMWare数据存储，为Linux平台增加了系统服务，为CSV到JSON的转换增加了新的预处理类型。</li>
</ul>
</li>
</ul>`,r:{minutes:4.61,words:1384},y:"a",t:"1 zabbix4.4新功能"},["/monitor/zabbix/index.html","/monitor/zabbix/readme.md"]],["v-24eba14a","/monitor/zabbix/todolist.html",{d:1681909711e3,c:"监控",g:["Zabbix"],e:`<h1> 10 Todolist</h1>
<p>待整理链接有：</p>
<p>tomcat监控自动重启脚本：https://mp.weixin.qq.com/s?__biz=MzU2MDg5NzYzNA==&amp;mid=2247483717&amp;idx=1&amp;sn=f3404f8b58d260cf29bb465525a0c391&amp;chksm=fc004a48cb77c35e4a0646d82b015ea76ab5642c3dda935f75845de449fecb7ea64e8c501d0b&amp;scene=21#wechat_redirect</p>
<p>tomcat，jmx监控：https://www.cnblogs.com/ssgeek/p/9299273.html，</p>`,r:{minutes:.34,words:101},y:"a",t:"10 Todolist"},["/monitor/zabbix/todolist","/monitor/zabbix/todolist.md"]],["v-baa733fa","/monitor/zabbix/zabbix-activemq.html",{d:1681909711e3,c:"监控",g:["Zabbix"],e:`<h1> 8 activemq监控</h1>
<blockquote>
<p>zabbix旧版本可以用，新版本建议用官方模板</p>
</blockquote>
<h2> 关闭被监控端的防火墙</h2>
<p>activemq  防火墙的添加还是有问题，先把防火墙给关了，它好像是后续会再产生一个随机端口，进行数据的传输</p>
<h2> zabbix_proxy安装java_gateway，</h2>
<p>因为是基于JMX进行监控的</p>
<h2> 修改配置文件</h2>
<p>配置<code>./apache-activemq-5.11.1/conf/activemq.xml</code></p>`,r:{minutes:.81,words:243},y:"a",t:"8 activemq监控"},["/monitor/zabbix/zabbix-activemq","/monitor/zabbix/zabbix-activemq.md"]],["v-9baa27c2","/monitor/zabbix/zabbix-ans.html",{d:1681909711e3,c:"监控",g:["Zabbix"],e:`<h1> 2 zabbix借助ansible安装</h1>
<h2> zabbix-server安装</h2>
<ol>
<li>下载roles</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-galaxy <span class="token function">install</span> dj-wasabi.zabbix-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:3.25,words:974},y:"a",t:"2 zabbix借助ansible安装"},["/monitor/zabbix/zabbix-ans","/monitor/zabbix/zabbix-ans.md"]],["v-7de67fc4","/monitor/zabbix/zabbix-api-web.html",{d:1681909711e3,c:"监控",g:["Zabbix"],e:`<h1> 7 用zabbix api批量添加web监控</h1>
<p>python脚本如下：</p>
<p><code>vim zabbix_agent.py</code></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># ~*~ coding:utf-8 ~*~</span>
<span class="token keyword">from</span> zabbix_api <span class="token keyword">import</span> ZabbixAPI
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> json

ZABBIX_SREVER <span class="token operator">=</span> <span class="token string">"http://192.168.162.122"</span>
USERNAME <span class="token operator">=</span> <span class="token string">"Admin"</span>
PASSWORD <span class="token operator">=</span> <span class="token string">"zabbix"</span>
<span class="token comment">#HOSTNAME = "sh_ylf_15"</span>
<span class="token comment">#HOSTNAME = "h5_web_monitor"</span>
HOSTNAME <span class="token operator">=</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>
urlname <span class="token operator">=</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
url <span class="token operator">=</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
delay <span class="token operator">=</span> sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>


<span class="token comment"># 登录</span>
<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>ZABBIX_SREVER<span class="token punctuation">,</span> USERNAME<span class="token punctuation">,</span> PASSWORD<span class="token punctuation">)</span><span class="token punctuation">:</span>
    zapi <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">(</span>ZABBIX_SREVER<span class="token punctuation">)</span>
    zapi<span class="token punctuation">.</span>login<span class="token punctuation">(</span>USERNAME<span class="token punctuation">,</span> PASSWORD<span class="token punctuation">)</span>
    <span class="token keyword">return</span> zapi


<span class="token comment"># 获取主机id</span>
<span class="token keyword">def</span> <span class="token function">gethostid</span><span class="token punctuation">(</span>auth<span class="token punctuation">,</span> HOSTNAME<span class="token punctuation">)</span><span class="token punctuation">:</span>
    json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'host.get'</span><span class="token punctuation">,</span> params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"filter"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">"host"</span><span class="token punctuation">:</span> HOSTNAME<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    request <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>

    <span class="token keyword">if</span> request<span class="token punctuation">[</span><span class="token string">'result'</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> request<span class="token punctuation">[</span><span class="token string">'result'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'hostid'</span><span class="token punctuation">]</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"找不到该主机"</span><span class="token punctuation">)</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token comment"># 获取应用级id</span>
<span class="token keyword">def</span> <span class="token function">getapplicationid</span><span class="token punctuation">(</span>auth<span class="token punctuation">,</span> hostid<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># try:</span>
    <span class="token comment">#     json_obj = ZabbixAPI.json_obj(auth, 'application.create', params={"name": "Web监测","hostid": hostid})</span>
    <span class="token comment">#     ZabbixAPI.do_request(auth, json_obj)</span>
    <span class="token comment"># except Exception as e:</span>
    <span class="token comment">#     print(e)</span>
    json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'application.get'</span><span class="token punctuation">,</span> params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"hostids"</span><span class="token punctuation">:</span> hostid<span class="token punctuation">}</span><span class="token punctuation">)</span>
    request <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>
    <span class="token keyword">for</span> num <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>request<span class="token punctuation">[</span><span class="token string">'result'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> request<span class="token punctuation">[</span><span class="token string">'result'</span><span class="token punctuation">]</span><span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'Web'</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> request<span class="token punctuation">[</span><span class="token string">'result'</span><span class="token punctuation">]</span><span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'applicationid'</span><span class="token punctuation">]</span>


<span class="token comment"># 增加web监控</span>
<span class="token keyword">def</span> <span class="token function">create_web_scenario</span><span class="token punctuation">(</span>auth<span class="token punctuation">,</span> urlname<span class="token punctuation">,</span> url<span class="token punctuation">,</span> hostid<span class="token punctuation">,</span> applicationid<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">:</span>
    json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'httptest.get'</span><span class="token punctuation">,</span> params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"filter"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> urlname<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    request <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>
    <span class="token keyword">if</span> request<span class="token punctuation">[</span><span class="token string">'result'</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'该web监控已经添加过了'</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'httptest.create'</span><span class="token punctuation">,</span>
                                          params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> urlname<span class="token punctuation">,</span> <span class="token string">"hostid"</span><span class="token punctuation">:</span> hostid<span class="token punctuation">,</span> <span class="token string">"applicationid"</span><span class="token punctuation">:</span> applicationid<span class="token punctuation">,</span>
                                                  <span class="token string">"delay"</span><span class="token punctuation">:</span> delay<span class="token punctuation">,</span> <span class="token string">"retries"</span><span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">"steps"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                                                  <span class="token punctuation">{</span><span class="token string">'name'</span><span class="token punctuation">:</span> urlname<span class="token punctuation">,</span> <span class="token string">'url'</span><span class="token punctuation">:</span> url<span class="token punctuation">,</span> <span class="token string">'timeout'</span><span class="token punctuation">:</span> <span class="token string">'10'</span><span class="token punctuation">,</span> <span class="token string">'status_codes'</span><span class="token punctuation">:</span> <span class="token string">'200'</span><span class="token punctuation">,</span>
                                                   <span class="token string">'no'</span><span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
            ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
            sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token comment"># 增加触发器</span>
<span class="token keyword">def</span> <span class="token function">create_trigger</span><span class="token punctuation">(</span>auth<span class="token punctuation">,</span> HOSTNAME<span class="token punctuation">,</span> urlname<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    expression <span class="token operator">=</span> <span class="token string">"{"</span> <span class="token operator">+</span> <span class="token string">"{0}:web.test.fail[{1}].avg(#3)"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>HOSTNAME<span class="token punctuation">,</span> urlname<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"}"</span> <span class="token operator">+</span> <span class="token string">"&gt;=1"</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'trigger.create'</span><span class="token punctuation">,</span>
                                      params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"description"</span><span class="token punctuation">:</span> <span class="token string">"{0}访问失败"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>urlname<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"expression"</span><span class="token punctuation">:</span> expression<span class="token punctuation">,</span>
                                              <span class="token string">"priority"</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">"url"</span><span class="token punctuation">:</span> url<span class="token punctuation">}</span><span class="token punctuation">)</span>
        ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    expression <span class="token operator">=</span> <span class="token string">"{"</span> <span class="token operator">+</span> <span class="token string">"{0}:web.test.rspcode[{1},{1}].last(0)"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>HOSTNAME<span class="token punctuation">,</span> urlname<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"}"</span> <span class="token operator">+</span> <span class="token string">"&lt;&gt;200"</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'trigger.create'</span><span class="token punctuation">,</span>
                                      params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"description"</span><span class="token punctuation">:</span> <span class="token string">"{0}访问异常"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>urlname<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"expression"</span><span class="token punctuation">:</span> expression<span class="token punctuation">,</span>
                                              <span class="token string">"priority"</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">"url"</span><span class="token punctuation">:</span> url<span class="token punctuation">}</span><span class="token punctuation">)</span>
        ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token comment"># 获取监控项id</span>
<span class="token keyword">def</span> <span class="token function">getitem</span><span class="token punctuation">(</span>auth<span class="token punctuation">,</span> hostid<span class="token punctuation">,</span> urlname<span class="token punctuation">)</span><span class="token punctuation">:</span>
    json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'item.get'</span><span class="token punctuation">,</span>
                                  params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"hostids"</span><span class="token punctuation">:</span> hostid<span class="token punctuation">,</span> <span class="token string">"webitems"</span><span class="token punctuation">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
                                          <span class="token string">"filter"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"Response code for step \\"$2\\" of scenario \\"$1\\"."</span><span class="token punctuation">,</span>
                                                     <span class="token string">"key_"</span><span class="token punctuation">:</span> <span class="token string">"web.test.rspcode[{0},{1}]"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>urlname<span class="token punctuation">,</span> urlname<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    request <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>
    <span class="token keyword">return</span> request<span class="token punctuation">[</span><span class="token string">"result"</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"itemid"</span><span class="token punctuation">]</span>


<span class="token comment"># 增加图形</span>
<span class="token keyword">def</span> <span class="token function">create_graph</span><span class="token punctuation">(</span>auth<span class="token punctuation">,</span> urlname<span class="token punctuation">,</span> hostid<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        itemid <span class="token operator">=</span> getitem<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> hostid<span class="token punctuation">,</span> urlname<span class="token punctuation">)</span>
        json_obj <span class="token operator">=</span> ZabbixAPI<span class="token punctuation">.</span>json_obj<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> <span class="token string">'graph.create'</span><span class="token punctuation">,</span>
                                      params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"h5_{0}状态显示"</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>urlname<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"width"</span><span class="token punctuation">:</span> <span class="token number">900</span><span class="token punctuation">,</span> <span class="token string">"height"</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
                                              <span class="token string">"gitems"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">"itemid"</span><span class="token punctuation">:</span> itemid<span class="token punctuation">,</span> <span class="token string">"color"</span><span class="token punctuation">:</span> <span class="token string">"008800"</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        ZabbixAPI<span class="token punctuation">.</span>do_request<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> json_obj<span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    auth <span class="token operator">=</span> login<span class="token punctuation">(</span>ZABBIX_SREVER<span class="token punctuation">,</span> USERNAME<span class="token punctuation">,</span> PASSWORD<span class="token punctuation">)</span>
    hostid <span class="token operator">=</span> gethostid<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> HOSTNAME<span class="token punctuation">)</span>
    applicationid <span class="token operator">=</span> getapplicationid<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> hostid<span class="token punctuation">)</span>

    create_web_scenario<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> urlname<span class="token punctuation">,</span> url<span class="token punctuation">,</span> hostid<span class="token punctuation">,</span> applicationid<span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    create_trigger<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> HOSTNAME<span class="token punctuation">,</span> urlname<span class="token punctuation">,</span> url<span class="token punctuation">)</span>
    create_graph<span class="token punctuation">(</span>auth<span class="token punctuation">,</span> urlname<span class="token punctuation">,</span> hostid<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># json_obj = ZabbixAPI.json_obj(auth, 'httptest.get', params={"applicationids": applicationid})</span>
<span class="token comment"># request = ZabbixAPI.do_request(auth, json_obj)</span>
<span class="token comment"># print(json.dumps(request, ensure_ascii=False, indent=4))</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.24,words:673},y:"a",t:"7 用zabbix api批量添加web监控"},["/monitor/zabbix/zabbix-api-web","/monitor/zabbix/zabbix-api-web.md"]],["v-1b3959e1","/monitor/zabbix/zabbix-media.html",{d:1681909711e3,c:"监控",g:["Zabbix"],e:`<h1> 3 zabbix添加报警媒介</h1>
<h2> zabbix添加报警媒介</h2>
<p>进入zabbix-web，点击Administrator--&gt;Media types--&gt;Create Media type</p>
<h3> 添加Email报警</h3>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200115103058976.png" alt=""></p>
<h3> 添加钉钉报警</h3>
<p>推荐文章</p>
<p><a href="https://mp.weixin.qq.com/s/MazDZsJlXtkZc_xICLKt7Q" target="_blank" rel="noopener noreferrer">Zabbix使用JavaScript配置Webhook发送告警通知</a></p>`,r:{minutes:.63,words:189},y:"a",t:"3 zabbix添加报警媒介"},["/monitor/zabbix/zabbix-media","/monitor/zabbix/zabbix-media.md"]],["v-fe8a603a","/monitor/zabbix/zabbix-mysql.html",{d:1681909711e3,c:"监控",g:["Zabbix"],e:`<h1> 4 MySQL监控模块</h1>
<blockquote>
<p>zabbix旧版本可以用，新版本建议用官方模板</p>
</blockquote>
<h2> Template DB MySQL简介</h2>
<h3> 应用集</h3>
<p>MySQL</p>
<h3> 监控项</h3>
<ol>
<li>MySQL begin operations per second（MySQL每秒开始操作）</li>
<li>MySQL bytes received per second（从所有客户端接收的字节数）</li>
<li>MySQL bytes sent per second（发送到所有客户端的字节数）</li>
<li>MySQL commit operations per second（MySQL每秒提交操作）</li>
<li>MySQL delete operations per second（MySQL每秒删除操作）</li>
<li>MySQL insert operations per second（MySQL每秒插入操作）</li>
<li>MySQL queries per second（MySQL每秒查询）</li>
<li>MySQL rollback operations per second（MySQL每秒回滚操作）</li>
<li>MySQL select operations per second（MySQL每秒选择操作）</li>
<li>MySQL slow queries（MySQL慢查询）</li>
<li>MySQL status（MySQL的存活状态）</li>
<li>MySQL update operations per second（MySQL每秒更新操作）</li>
<li>MySQL uptime（MySQL正常运行时间）</li>
<li>MySQL version（MySQL的版本信息）</li>
</ol>`,r:{minutes:2.46,words:739},y:"a",t:"4 MySQL监控模块"},["/monitor/zabbix/zabbix-mysql","/monitor/zabbix/zabbix-mysql.md"]],["v-01406aac","/monitor/zabbix/zabbix-redis.html",{d:1681909711e3,c:"监控",g:["Zabbix"],e:`<h1> 5 Redis监控模块</h1>
<blockquote>
<p>zabbix旧版本可以用，新版本建议用官方模板</p>
</blockquote>
<h2> 模板导入</h2>
<p>打开“配置”--&gt;“模板”--&gt;"导入"</p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/redis_daoru.png" alt=""></p>
<p>导入<code>zax_redis</code>文件夹下的<code>redis_templates_for_zbx_3.4.xml</code>文件</p>`,r:{minutes:.52,words:156},y:"a",t:"5 Redis监控模块"},["/monitor/zabbix/zabbix-redis","/monitor/zabbix/zabbix-redis.md"]],["v-306cc50e","/monitor/zabbix/zabbix-zookeeper.html",{d:1681909711e3,c:"监控",g:["Zabbix"],e:`<h1> 9 zookeeper集群监控</h1>
<blockquote>
<p>zabbix旧版本可以用，新版本建议用官方模板</p>
</blockquote>
<h1> Zabbix-Zookeper-Template</h1>
<h2> System requirements</h2>
<ul>
<li><a href="http://www.zabbix.com/downloads/" target="_blank" rel="noopener noreferrer">zabbix</a> &gt;= 3.4 (preprocessing used by this template)</li>
<li><a href="https://zookeeper.apache.org/releases.html" target="_blank" rel="noopener noreferrer">zookeeper</a> &gt;= 3.4 (mntr stats)</li>
<li>netcat</li>
<li>zookeeper监控模板，被监控主机，记得添加nc命令</li>
</ul>`,r:{minutes:.54,words:161},y:"a",t:"9 zookeeper集群监控"},["/monitor/zabbix/zabbix-zookeeper","/monitor/zabbix/zabbix-zookeeper.md"]],["v-cd5b6460","/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/nginx%E6%BC%8F%E6%B4%9E%E4%BF%AE%E5%A4%8D.html",{d:1681909711e3,e:`<h2> Nginx升级加固SSL/TLS协议信息泄露漏洞(CVE-2016-2183)和HTTP服务器的缺省banner漏洞</h2>
<blockquote>
<p>⚠️ 注意：要根据实际情况进行修改，这只是大体的思路</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /tmp
wget  https://www.openssl.org/source/openssl-1.1.0k.tar.gz
tar zxvf openssl-1.1.0k.tar.gz -C /usr/local

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.9,words:269},y:"a",t:""},["/other/23 未分类/nginx漏洞修复.html","/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/nginx%E6%BC%8F%E6%B4%9E%E4%BF%AE%E5%A4%8D","/other/23 未分类/nginx漏洞修复.md","/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/nginx%E6%BC%8F%E6%B4%9E%E4%BF%AE%E5%A4%8D.md"]],["v-3125c2ab","/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/oracle%E6%9F%A5%E7%9C%8B%E5%93%AA%E4%BA%9B%E8%A1%A8%E8%A2%AB%E9%94%81%E4%BD%8F%E4%BA%86.html",{d:1681909711e3,e:`<h2> 查看哪些表被锁住了</h2>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> b<span class="token punctuation">.</span>owner<span class="token punctuation">,</span>b<span class="token punctuation">.</span>object_name<span class="token punctuation">,</span>a<span class="token punctuation">.</span>session_id<span class="token punctuation">,</span>a<span class="token punctuation">.</span>locked_mode <span class="token keyword">from</span> v$locked_object a<span class="token punctuation">,</span>dba_objects b <span class="token keyword">where</span> b<span class="token punctuation">.</span>object_id <span class="token operator">=</span> a<span class="token punctuation">.</span>OBJECT_ID<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.32,words:97},y:"a",t:""},["/other/23 未分类/oracle查看哪些表被锁住了.html","/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/oracle%E6%9F%A5%E7%9C%8B%E5%93%AA%E4%BA%9B%E8%A1%A8%E8%A2%AB%E9%94%81%E4%BD%8F%E4%BA%86","/other/23 未分类/oracle查看哪些表被锁住了.md","/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/oracle%E6%9F%A5%E7%9C%8B%E5%93%AA%E4%BA%9B%E8%A1%A8%E8%A2%AB%E9%94%81%E4%BD%8F%E4%BA%86.md"]],["v-42b12e49","/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/rsync_inotify%E5%AE%9E%E7%8E%B0%E5%AE%9E%E6%97%B6%E5%90%8C%E6%AD%A5.html",{d:1681909711e3,e:`<p>由于我的<code>jenkins</code>和<code>ansible</code>没有安装在一台主机上，所以，现在利用<code>rsync+inotify</code>实现<code>jenkins</code>的工作目录，同步到<code>ansible</code>主机上</p>
<p>环境如下：</p>
<p>inotify-master IP :192.168.162.175</p>
<p>inotify-slave IP:192.168.162.119</p>
<h2> 1 inotify slave部署</h2>
<h3> 1.1 安装rsync</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install rsync –y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.13,words:340},y:"a",t:""},["/other/23 未分类/rsync_inotify实现实时同步.html","/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/rsync_inotify%E5%AE%9E%E7%8E%B0%E5%AE%9E%E6%97%B6%E5%90%8C%E6%AD%A5","/other/23 未分类/rsync+inotify实现实时同步.html","/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/rsync+inotify%E5%AE%9E%E7%8E%B0%E5%AE%9E%E6%97%B6%E5%90%8C%E6%AD%A5.html","/other/23 未分类/rsync+inotify实现实时同步.md","/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/rsync+inotify%E5%AE%9E%E7%8E%B0%E5%AE%9E%E6%97%B6%E5%90%8C%E6%AD%A5.md"]],["v-3a0e3b36","/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%E8%A2%AB%E9%99%8D%E9%A2%91%E9%94%81%E9%A2%91%E9%97%AE%E9%A2%98.html",{d:1681909711e3,e:`<p>下载一个throttlestop，然后安装之后在最下面的BD prochot 选项勾掉不选 点击下面的turn on,解决限频问题</p>
`,r:{minutes:.12,words:37},y:"a",t:""},["/other/23 未分类/小米笔记本被降频锁频问题.html","/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%E8%A2%AB%E9%99%8D%E9%A2%91%E9%94%81%E9%A2%91%E9%97%AE%E9%A2%98","/other/23 未分类/小米笔记本被降频锁频问题.md","/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%E8%A2%AB%E9%99%8D%E9%A2%91%E9%94%81%E9%A2%91%E9%97%AE%E9%A2%98.md"]],["v-478df006","/other/temp/python%20subprocess%E6%A8%A1%E5%9D%97%E7%9A%84%E4%BD%BF%E7%94%A8.html",{d:1681909711e3,e:`<p>subprocess模块允许你去创建一个新的进程让其执行另外的程序，并与它进行通信，获取标准的输入、标准输</p>
<p>出、标准错误以及返回码等。(使用这个模块之前先导入import subprocess)。</p>
<p>subprocess模块打算来替代几个过时的模块和函数，比如： os.system, os.spawn*, os.popen*, popen2.*命令。</p>
<p>让我们来看一下subprocess 有哪些不同的函数.</p>
<h2> subprocess.call(), subprocess.check_call(), subprocess.check_output()</h2>`,r:{minutes:3.8,words:1141},y:"a",t:""},["/other/temp/python subprocess模块的使用.html","/other/temp/python%20subprocess%E6%A8%A1%E5%9D%97%E7%9A%84%E4%BD%BF%E7%94%A8","/other/temp/python subprocess模块的使用.md","/other/temp/python%20subprocess%E6%A8%A1%E5%9D%97%E7%9A%84%E4%BD%BF%E7%94%A8.md"]],["v-369f9189","/other/vscode/vscode%E5%8D%B8%E8%BD%BD.html",{d:1681909711e3,e:`<ul>
<li>卸载vscode</li>
<li>清除<code>C:\\Users\\user\\.vscode</code>文件夹</li>
<li>清楚<code>C:\\Users\\user\\AppData\\Roaming\\Code</code>文件夹</li>
</ul>
`,r:{minutes:.08,words:23},y:"a",t:""},["/other/vscode/vscode卸载.html","/other/vscode/vscode%E5%8D%B8%E8%BD%BD","/other/vscode/vscode卸载.md","/other/vscode/vscode%E5%8D%B8%E8%BD%BD.md"]],["v-6e285e1e","/other/vscode/vscode%E5%AE%89%E8%A3%85.html",{d:1681909711e3,e:`<ol>
<li>从官网下载https://code.visualstudio.com/</li>
<li>根据喜好安装相关插件
<ul>
<li>Chinese (Simplified) Language Pack for Visual Studio Code  // 中文</li>
<li>Code Runner  // 运行代码</li>
<li>Material Icon Theme  // 文件图标</li>
<li>One Dark Pro  //黑色主题</li>
</ul>
</li>
</ol>
`,r:{minutes:.18,words:53},y:"a",t:""},["/other/vscode/vscode安装.html","/other/vscode/vscode%E5%AE%89%E8%A3%85","/other/vscode/vscode安装.md","/other/vscode/vscode%E5%AE%89%E8%A3%85.md"]],["v-29496566","/other/vscode/vscode%E9%85%8D%E7%BD%AEgo%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.html",{d:1681909711e3,e:`<ol>
<li>安装<code>go</code>插件</li>
<li>安装插件提供的工具
<ul>
<li><code>ctrl+shift+p</code>,  选择  <code>Go: Install/Update tools</code>，勾选全部工具进行安装</li>
<li>额外安装<code>gopls</code>工具，<code>Go modules</code>需要</li>
</ul>
</li>
<li>设置
<ul>
<li><code>settings.json</code>增加一行<code>"go.formatTool": "goimports"</code>，也是<code>Go modules</code>的影响</li>
<li>增加一行<code>"go.lintFlags": ["--disable=all", "--enable=errcheck"],</code>代码规范检查</li>
</ul>
</li>
</ol>`,r:{minutes:.26,words:77},y:"a",t:""},["/other/vscode/vscode配置go开发环境.html","/other/vscode/vscode%E9%85%8D%E7%BD%AEgo%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83","/other/vscode/vscode配置go开发环境.md","/other/vscode/vscode%E9%85%8D%E7%BD%AEgo%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.md"]],["v-3a0b9430","/other/vscode/vscode%E9%85%8D%E7%BD%AEjenkins%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.html",{d:1681909711e3,e:`<ol>
<li>
<p>安装插件，找下载量大的下载</p>
<ul>
<li>Jenkinsfile Support</li>
<li>Jenkins Pipeline Linter Connector</li>
</ul>
</li>
<li>
<p>设置，<code>ctrl+shift+p</code>,  打开<code>首选项：打开设置(json)</code></p>
<ul>
<li>
<p>添加下面四行</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    "jenkins.pipeline.linter.connector.url": "http://192.168.166.99:32001/jenkins/pipeline-model-converter/validate",
    "jenkins.pipeline.linter.connector.user": "admin",
    "jenkins.pipeline.linter.connector.pass": "admin",
    "jenkins.pipeline.linter.connector.crumbUrl": "http://192.168.166.99:32001/jenkins/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,%22:%22,//crumb))",
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>`,r:{minutes:.2,words:61},y:"a",t:""},["/other/vscode/vscode配置jenkins开发环境.html","/other/vscode/vscode%E9%85%8D%E7%BD%AEjenkins%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83","/other/vscode/vscode配置jenkins开发环境.md","/other/vscode/vscode%E9%85%8D%E7%BD%AEjenkins%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.md"]],["v-34f4c76c","/other/%E5%BE%85%E6%95%B4%E7%90%86/12.1%20keepalived%E5%92%8Cheartbeat%E5%AF%B9%E6%AF%94.html",{d:1681909711e3,e:`<h1> 高可用开源方案 Keepalived VS Heartbeat对比</h1>
<p>最近因为项目需要，简单的试用了两款高可用开源方案：Keepalived和Heartbeat。两者都很流行，但差异还是很大的，现将试用过程中的感受以及相关知识点简单总结一下，供大家选择方案的时候参考。</p>
<p>1）<strong>Keepalived使用更简单</strong>：从安装、配置、使用、维护等角度上对比，Keepalived都比Heartbeat要简单得多，尤其是Heartbeat2.1.4后拆分成3个子项目，安装、配置、使用都比较复杂，尤其是出问题的时候，都不知道具体是哪个子系统出问题了；而Keepalived只有1个安装文件、1个配置文件，配置文件也简单很多；</p>`,r:{minutes:1.42,words:425},y:"a",t:"高可用开源方案 Keepalived VS Heartbeat对比"},["/other/待整理/12.1 keepalived和heartbeat对比.html","/other/%E5%BE%85%E6%95%B4%E7%90%86/12.1%20keepalived%E5%92%8Cheartbeat%E5%AF%B9%E6%AF%94","/other/待整理/12.1 keepalived和heartbeat对比.md","/other/%E5%BE%85%E6%95%B4%E7%90%86/12.1%20keepalived%E5%92%8Cheartbeat%E5%AF%B9%E6%AF%94.md"]],["v-3c122d46","/other/%E5%BE%85%E6%95%B4%E7%90%86/%E7%99%BD%E5%A4%A9%E5%81%9A%E8%BF%90%E7%BB%B4%EF%BC%8C%E6%99%9A%E4%B8%8A%E6%90%9E%E5%89%AF%E4%B8%9A%E8%B5%9A%E9%92%B1.html",{d:1681909711e3,e:`<h1> 白天做运维，晚上搞副业赚钱</h1>
<p>作为 <code>运维工程师</code>，除了固定工作外，你有想过副业变现提升收入吗？</p>
<p>谁不想凭自己的努力赚点钱，让自己和家人过得更好呢？</p>
<h2> 1 送外卖？写公号？录教程？</h2>
<p>你有对副业变现，增加收入，有深入研究么？</p>
<h3> 1.1 送外卖，卖血汗？</h3>
<p>No，这个并不合适我，我第一次送外卖，就骑电动车摔了，摔了好几处伤，恢复了一个月，还把手机摔坏了，总共送了两单，赚了20元，很显然，不适合我。</p>
<h3> 1.2 写公众号，然后接广告？</h3>
<p>可以，我看IT大佬<code>程序员小灰</code>说道，公众号仍然是所有自媒体中变现最好的方式，没有之一。</p>`,r:{minutes:1.75,words:524},y:"a",t:"白天做运维，晚上搞副业赚钱"},["/other/待整理/白天做运维，晚上搞副业赚钱.html","/other/%E5%BE%85%E6%95%B4%E7%90%86/%E7%99%BD%E5%A4%A9%E5%81%9A%E8%BF%90%E7%BB%B4%EF%BC%8C%E6%99%9A%E4%B8%8A%E6%90%9E%E5%89%AF%E4%B8%9A%E8%B5%9A%E9%92%B1","/other/待整理/白天做运维，晚上搞副业赚钱.md","/other/%E5%BE%85%E6%95%B4%E7%90%86/%E7%99%BD%E5%A4%A9%E5%81%9A%E8%BF%90%E7%BB%B4%EF%BC%8C%E6%99%9A%E4%B8%8A%E6%90%9E%E5%89%AF%E4%B8%9A%E8%B5%9A%E9%92%B1.md"]],["v-02e16be0","/web/django/",{d:1681909711e3,e:`<p>https://pythondjango.cn/</p>
`,r:{minutes:.01,words:2},y:"a",t:""},["/web/django/index.html","/web/django/readme.md"]],["v-5fdd348e","/web/nginx/config.html",{d:15846624e5,l:"2020年3月20日",c:"web中间件",g:["Nginx"],e:`<h1> 3. nginx配置文件详解</h1>
<p>配置文件详解</p>
<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span> nginx</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">8</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_cpu_affinity</span> auto</span><span class="token punctuation">;</span>
<span class="token comment">#worker_cpu_affinity 00000001 00000010 00000100 00001000 00010000 00100000 01000000 10000000;</span>
<span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/error.log  error</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">pid</span>        /var/run/nginx.pid</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_rlimit_nofile</span> <span class="token number">65535</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">use</span> epoll</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">20480</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">log_format</span>  prod <span class="token string">'<span class="token variable">$remote_addr|</span><span class="token variable">$remote_user|[</span><span class="token variable">$time_local]|</span><span class="token variable">$request</span>|'</span>
                     <span class="token string">'<span class="token variable">$status</span>|<span class="token variable">$body_bytes_sent|</span><span class="token variable">$http_referer|</span>'</span>
                     <span class="token string">'<span class="token variable">$http_user_agent|</span><span class="token variable">$request_time|</span><span class="token variable">$host</span>|<span class="token variable">$upstream_addr|</span><span class="token variable">$upstream_response_time</span>'</span></span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/access.log  prod</span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">charset</span>  utf-8</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_intercept_errors</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_names_hash_bucket_size</span> <span class="token number">256</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_header_buffer_size</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">large_client_header_buffers</span> <span class="token number">4</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">server_tokens</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">sendfile</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">tcp_nopush</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">tcp_nodelay</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment">#支持ssi包含文件</span>
    <span class="token directive"><span class="token keyword">ssi</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssi_silent_errors</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token comment">#   ssi_types text/html;</span>

    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">90</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_header_timeout</span> <span class="token number">10</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_body_timeout</span> <span class="token number">20</span></span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">200m</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_body_buffer_size</span>  <span class="token number">128k</span></span><span class="token punctuation">;</span>

    <span class="token comment"># include /etc/nginx/gzip.conf;</span>
    <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_buffers</span> <span class="token number">4</span> <span class="token number">8k</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">6</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_disable</span> <span class="token string">"MSIE [1-6]\\."</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_http_version</span> 1.1</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1000</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_proxied</span> any</span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_vary</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">gzip_types</span> text/plain text/css application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript application/json image/jpeg image/gif image/png image/jpg</span><span class="token punctuation">;</span>
    

    <span class="token comment"># include /etc/nginx/proxy.conf;</span>
    <span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_buffer_size</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_buffers</span> <span class="token number">4</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">proxy_busy_buffers_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
    
    
    <span class="token comment"># include /etc/nginx/backend.conf;</span>
    <span class="token directive"><span class="token keyword">upstream</span> my_server_pool</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.1.109:80 weight=1 max_fails=2 fail_timeout=30</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 192.168.1.108:80 weight=2 max_fails=2 fail_timeout=30</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/conf.d/h5.conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:10.61,words:3182},y:"a",t:"3. nginx配置文件详解"},["/web/nginx/config","/web/nginx/config.md"]],["v-702e3c11","/web/nginx/core.html",{d:15846624e5,l:"2020年3月20日",c:"web中间件",g:["Nginx"],e:`<h1> 4. 内核参数优化</h1>
<h2> linux内核参数优化（网络模块）</h2>
<p>在Linux下调整内核参数，可以直接编辑配置文件<code>/etc/sysctl.conf</code>，然后执行<code>sysctl -p</code>命令生效</p>
<p>文件内容如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>net.ipv4.ip_forward = 1
net.ipv4.conf.default.rp_filter = 1
net.ipv4.conf.default.accept_source_route = 0
kernel.sysrq = 0
kernel.core_uses_pid = 1
kernel.msgmnb = 65536
kernel.msgmax = 65536
kernel.shmmax = 68719476736
kernel.shmall = 268435456
net.core.wmem_default = 8388608
net.core.rmem_default = 8388608
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.core.somaxconn = 262144
net.core.netdev_max_backlog = 262144
net.ipv4.tcp_max_orphans = 262144
net.ipv4.tcp_max_tw_buckets = 6000
net.ipv4.tcp_tw_recycle = 0
net.ipv4.tcp_timestamps = 1
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_syn_backlog = 30000
net.ipv4.tcp_syn_retries = 1
net.ipv4.tcp_synack_retries = 1
net.ipv4.ip_local_port_range = 1024 65000
net.ipv4.tcp_fin_timeout = 30
net.ipv4.tcp_keepalive_time = 30
net.ipv4.tcp_sack = 1
net.ipv4.tcp_window_scaling = 1
net.ipv4.tcp_rmem = 4096 87380 4194304
net.ipv4.tcp_wmem = 4096 65536 4194304
net.ipv4.tcp_mem = 524288 699050 1048576
vm.swappiness = 0
vm.min_free_kbytes = 65536
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.98,words:1794},y:"a",t:"4. 内核参数优化"},["/web/nginx/core","/web/nginx/core.md"]],["v-51aecb92","/web/nginx/first.html",{d:15846624e5,l:"2020年3月20日",c:"web中间件",g:["Nginx"],e:`<h1> 1. 初识Nginx</h1>
<h2> 1 Nginx的三个主要应用场景</h2>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200102212417067.png" alt=""></p>
<p>三个主要应用场景为：</p>
<ul>
<li>静态资源服务（通过本地文件系统提供服务）</li>
<li>反向代理服务</li>
<li>API服务（OpenRestydeng ）</li>
</ul>
<h3> 1.1 反向代理服务</h3>
<h4> 1.1.1 负载均衡</h4>`,r:{minutes:17.39,words:5217},y:"a",t:"1. 初识Nginx"},["/web/nginx/first","/web/nginx/first.md"]],["v-80859ef8","/web/nginx/framework.html",{d:15846624e5,l:"2020年3月20日",c:"web中间件",g:["Nginx"],e:`<h1> 2. nginx架构基础</h1>
<h2> 1 Nginx请求处理流程</h2>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200310164648893.png" alt=""></p>
<h2> 2 Nginx进程结构</h2>
<p><img src="https://clay-blog.oss-cn-shanghai.aliyuncs.com/img/image-20200310164732720.png" alt=""></p>
<h2> 3 Nginx进程管理：信号</h2>`,r:{minutes:1.76,words:528},y:"a",t:"2. nginx架构基础"},["/web/nginx/framework","/web/nginx/framework.md"]],["v-1cb1969f","/web/nginx/global-events.html",{d:15846624e5,l:"2020年3月20日",c:"web中间件",g:["Nginx"],e:`<h1> 3.1 nginx全局块和events块配置</h1>
<h2> 1 example</h2>
<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># 运行Nginx进程的用户</span>
<span class="token directive"><span class="token keyword">user</span> nginx</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">8</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_cpu_affinity</span> auto</span><span class="token punctuation">;</span>

<span class="token comment"># 定义存储某类型的全局错误的日志位置</span>
<span class="token comment"># nginx日志分为很多级别 [debug | info | notice | warn | error | crit | alert | emerg]</span>
<span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/error.log  error</span><span class="token punctuation">;</span>
<span class="token comment"># 指定进程ID（pid）存放的路径 </span>
<span class="token directive"><span class="token keyword">pid</span>        /var/run/nginx.pid</span><span class="token punctuation">;</span>
<span class="token comment"># 一个nginx进程打开的最多文件描述符数目，理论值应该是系统的最多打开文件数（ulimit -n）与nginx进程数相除，但是nginx分配请求并不是那么均匀，所以最好与ulimit -n的值保持一致。</span>
<span class="token directive"><span class="token keyword">worker_rlimit_nofile</span> <span class="token number">65535</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># 使用epoll的I/O模型，用这个模型来高效处理异步事件</span>
    <span class="token directive"><span class="token keyword">use</span> epoll</span><span class="token punctuation">;</span>
    <span class="token comment"># 每个进程允许的最多连接数，理论上每台nginx服务器的最大连接数为worker_processes*worker_connections。</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">20480</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.86,words:557},y:"a",t:"3.1 nginx全局块和events块配置"},["/web/nginx/global-events","/web/nginx/global-events.md"]],["v-4d07e670","/web/nginx/http.html",{d:15846624e5,l:"2020年3月20日",c:"web中间件",g:["Nginx"],e:`<h1> 3.2 nginxHTTP块配置</h1>
<h2> 1 配置块的嵌套</h2>
<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">upstream</span></span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">split_clients</span></span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">map</span></span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">geo</span></span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">if</span> ()</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">location</span></span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">limit_except</span></span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">location</span></span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">location</span></span> <span class="token punctuation">{</span>
                
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.61,words:783},y:"a",t:"3.2 nginxHTTP块配置"},["/web/nginx/http","/web/nginx/http.md"]],["v-8f79538a","/web/nginx/location.html",{d:15846624e5,l:"2020年3月20日",c:"web中间件",g:["Nginx"],e:`<h1> 3.4 nginxLOCATION块配置</h1>
<p><code>nginx</code>中<code>location</code>的匹配模式有以下几种：</p>
<ul>
<li>
<p>精确匹配：以<code>=</code>开头，只有完全匹配才能生效，例子<code>location = /uri</code></p>
</li>
<li>
<p>非正则匹配：以<code>^~</code>开头，<code>^</code>表示非、<code>~</code>表示正则，例子<code>location ^~ /uri</code></p>
</li>
<li>
<p>正则匹配：</p>
<ul>
<li>以<code>~</code>开头，表示区分大小写的正则匹配，例子<code>location ~ pattern</code></li>
<li>以<code>!~</code>开头，表示区分大小写不匹配的正则，例子<code>location !~ pattern</code></li>
<li>以<code>~*</code>开头，表示不区分大小写的正则匹配，例子<code>location ~* pattern</code></li>
<li>以<code>!~*</code>开头，表示不区分大小写不匹配的正则，例子<code>location !~* pattern</code></li>
</ul>
</li>
<li>
<p>普通匹配：不带任何修饰符，例子<code>location /uri</code>、<code>location /</code></p>
</li>
</ul>`,r:{minutes:6.24,words:1873},y:"a",t:"3.4 nginxLOCATION块配置"},["/web/nginx/location","/web/nginx/location.md"]],["v-179a7ba4","/web/nginx/module.html",{d:15846624e5,l:"2020年3月20日",c:"web中间件",g:["Nginx"],e:`<h1> 3.5 nginx常用模块</h1>
<h2> 1 Module ngx_http_gzip_module</h2>
<p>该<code>ngx_http_gzip_module</code>模块是一个使用“gzip”方法压缩响应的过滤器。这通常有助于将传输数据的大小减少一半甚至更多。</p>
<blockquote>
<p>使用SSL / TLS协议时，压缩的响应可能会受到 <a href="https://en.wikipedia.org/wiki/BREACH" target="_blank" rel="noopener noreferrer">BREACH</a>攻击。</p>
</blockquote>`,r:{minutes:9.11,words:2734},y:"a",t:"3.5 nginx常用模块"},["/web/nginx/module","/web/nginx/module.md"]],["v-2762ae00","/web/nginx/qa.html",{d:15846624e5,l:"2020年3月20日",c:"web中间件",g:["Nginx"],e:`<h1> 6. nginx的常见问题</h1>
<h2> nginx前面有多个反向代理时，proxy的正确设置</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#proxy_redirect off;
#proxy_set_header Host $host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.93,words:1780},y:"a",t:"6. nginx的常见问题"},["/web/nginx/qa","/web/nginx/qa.md"]],["v-1943aea9","/web/nginx/",{d:15846624e5,l:"2020年3月20日",c:"web中间件",g:["Nginx"],u:52,e:`<h1> Nginx 学习笔记</h1>
<h2> 推荐教程</h2>
<p><a href="https://github.com/russelltao/geektime-nginx" target="_blank" rel="noopener noreferrer">nginx核心知识150讲 | 陶辉 | 极客时间</a> ⭐</p>
<p><a href="https://dunwu.github.io/nginx-tutorial/#/" target="_blank" rel="noopener noreferrer">Nginx 极简教程 | dunwu</a></p>
<p><a href="https://moonbingbing.gitbooks.io/openresty-best-practices/content/index.html" target="_blank" rel="noopener noreferrer">OpenResty 最佳实践 | moonbingbing</a></p>`,r:{minutes:.63,words:188},y:"a",t:"Nginx 学习笔记",i:"nginx"},["/web/nginx/index.html","/web/nginx/readme.md"]],["v-319ae12d","/web/nginx/server.html",{d:15846624e5,l:"2020年3月20日",c:"web中间件",g:["Nginx"],e:`<h1> 3.3 nginxSERVER块配置</h1>
<h2> 1 Listen 指令</h2>
<p><strong>Example Configuration</strong></p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317093603705.png" alt=""></p>
<p><strong>Directives</strong></p>
<p><img src="https://gitee.com/clay-wangzhi/blogImg/raw/master/blogImg/image-20200317093633095.png" alt=""></p>`,r:{minutes:.66,words:197},y:"a",t:"3.3 nginxSERVER块配置"},["/web/nginx/server","/web/nginx/server.md"]],["v-29b355de","/web/nginx/status.html",{d:15846624e5,l:"2020年3月20日",c:"web中间件",g:["Nginx"],e:`<h1> 5. 状态码</h1>
<h2> Nginx code 常用状态码学习小结</h2>
<h3> Nginx Code Status</h3>
<p>状态码分为五类：</p>
<ol>
<li>100-199 用于指定客户端应相应的某些动作。</li>
<li>200-299 用于表示请求成功。</li>
<li>300-399 用于已经移动的文件并且常被包含在定位头信息中指定新的地址信息。</li>
<li>400-499 用于指出客户端的错误。</li>
<li>500-599 用于指出服务器错误。</li>
</ol>
<hr>
<p><strong>200 （成功） 服务器已成功处理了请求。 通常，这表示服务器提供了请求的网页。</strong></p>`,r:{minutes:4.56,words:1369},y:"a",t:"5. 状态码"},["/web/nginx/status","/web/nginx/status.md"]],["v-01d2be24","/web/tomcat/cache.html",{d:15836256e5,l:"2020年3月8日",c:"web中间件",g:["Tomcat"],e:`<h1> Tomcat “缓存”清理</h1>
<blockquote>
<p>转载自：<a href="https://blog.51cto.com/ycgit/1692886" target="_blank" rel="noopener noreferrer">Tomcat “缓存”清理</a></p>
</blockquote>
<p><strong>一、关于Tomcat“缓存”的介绍</strong></p>
<p>很多时候大家喜欢把tomcat的work目录里的东西叫做缓存，其实那不是很恰当，work目录只是tomcat的工作目录，也就是tomcat把jsp转换为class文件的工作目录，这也正是为什么它叫work目录而不是cache目录的原因。 　　jsp，tomcat的工作原理是当浏览器访问某个jsp页面时，tomcat会在work目录里把这个jsp页面转换成.java文件，比如将index.jsp转换为index_jsp.java文件，而后编译为index_jsp.class文件，最后tomcat容器通过ClassLoader类把这个index_jsp.class类装载入内存，进行响应客户端的工作。
　　tomcat会定时稍描容器内的jsp文件，读取每个文件的属性，当发现某个jsp文件发生改变时（文件的最后修改时间与上次稍描时不相同时），tomcat会重新转换、编译这个jsp文件。但是tomcat的稍描是定时的不是实时的，这也正是为什么jsp文件修改后需要几分钟的时间来等修改过的jsp生效。当然为了即刻生效，很多老前辈都会建议在修改jsp页面后立即清除work目录里的文件。
　　另外，tomcat容器中，对转换后的java文件（比如：index_jsp.java）的编译最大只支持64k，所以在其他容器中的jsp移植到tomcat容器中时会遇到大jsp文件会发生无法编译的情况，所以建议把jsp中的业务逻辑写入单独的类，在jsp中通过调用这个类的静态方法来执行，并将jsp页面中的js提取出来放到单独的js文件内。</p>`,r:{minutes:2.4,words:719},y:"a",t:"Tomcat “缓存”清理"},["/web/tomcat/cache","/web/tomcat/cache.md"]],["v-3ef6b5c2","/web/tomcat/danger.html",{d:15836256e5,l:"2020年3月8日",c:"web中间件",g:["Tomcat"],e:`<h1> tomcat注意事项</h1>
<h2> war正确删除姿势</h2>
<p>tomcat中war包停止后才可以删除</p>
`,r:{minutes:.12,words:35},y:"a",t:"tomcat注意事项"},["/web/tomcat/danger","/web/tomcat/danger.md"]],["v-b121e484","/web/tomcat/dead.html",{d:15836256e5,l:"2020年3月8日",c:"web中间件",g:["Tomcat"],e:`<h1> tomcat假死现象</h1>
<h1> 1 背景</h1>
<h2> 1.1 编写目的</h2>
<p>为了方便大家以后发现进程假死的时候能够正常的分析并且第一时间保留现场快照。</p>
<h2> 1.2编写背景</h2>
<p>最近服务器发现tomcat的应用会偶尔出现无法访问的情况。经过一段时间的观察最近又发现有台tomcat的应用出</p>
<p>现了无法访问情况。简单描述下该台tomcat当时具体的表现：客户端请求没有响应，查看服务器端tomcat的进程</p>
<p>是存活的，查看业务日志的时候发现日志停止没有任何最新的访问日志。连tomcat下面的catalina.log也没有任何</p>`,r:{minutes:6.86,words:2057},y:"a",t:"tomcat假死现象"},["/web/tomcat/dead","/web/tomcat/dead.md"]],["v-819f88e4","/web/tomcat/prd.html",{d:15836256e5,l:"2020年3月8日",c:"web中间件",g:["Tomcat"],e:`<h1> 生产环境中的tomcat配置</h1>
<h2> tomcat安全配置</h2>
<h3> 版本安全</h3>
<p>升级当前tomcat版本为最新稳定版本。</p>
<p>在升级版本中，需要注意两点：</p>
<ul>
<li>
<p>尽量避免跨大版本的升级</p>
</li>
<li>
<p>将当前老版本的server.xml , catalina.sh, web.xml和tomcat-users.xml进行备份，然后部署完新的tomcat</p>
<p>后，将这些配置文件覆盖过去。</p>
</li>
</ul>
<h3> 隐藏版本信息</h3>
<p>当tomcat出现404或其它错误时，就会显示当前版本信息，为避免针对某一版本的攻击，我们应该将其隐藏或伪装</p>`,r:{minutes:6.17,words:1851},y:"a",t:"生产环境中的tomcat配置"},["/web/tomcat/prd","/web/tomcat/prd.md"]],["v-5a715f17","/web/tomcat/",{d:15836256e5,l:"2020年3月8日",c:"web中间件",g:["Tomcat"],e:`<h1> Tomcat 学习笔记</h1>
<p>Hello everyone, let's learn tomcat together！</p>
<h3> Tomcat的开幕式</h3>
<p>Tomcat以Java编写</p>
<h4> 安装Tomcat</h4>
<p>官网地址为：https://tomcat.apache.org</p>
<p>各个版本的下载地址为：https://archive.apache.org/dist/tomcat/</p>
<p>安装方式</p>
<p>二进制文件（文件为tar.gz）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.23/bin/apache-tomcat-8.5.23.tar.gz
tar -xvf apache-tomcat-8.5.23.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.26,words:379},y:"a",t:"Tomcat 学习笔记",i:"tomcat"},["/web/tomcat/index.html","/web/tomcat/readme.md"]],["v-6b2696a0","/web/tomcat/status.html",{d:15836256e5,l:"2020年3月8日",c:"web中间件",g:["Tomcat"],e:`<h1> Tomcat 错误代号及状态码</h1>
<p>状态代码  状态信息  含义</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>100  Continue  初始的请求已经接受，客户应当继续发送请求的其余部分。（HTTP 1.1新）
 101  Switching Protocols  服务器将遵从客户的请求转换到另外一种协议（HTTP 1.1新）
 200  OK  一切正常，对GET和POST请求的应答文档跟在后面。
 201  Created  服务器已经创建了文档，Location头给出了它的URL。
 202  Accepted  已经接受请求，但处理尚未完成。
 203  Non-Authoritative Information  文档已经正常地返回，但一些应答头可能不正确，因为使用的是文档的拷贝（HTTP 1.1新）。
 204  No Content  没有新文档，浏览器应该继续显示原来的文档。如果用户定期地刷新页面，而Servlet可以确定用户文档足够新，这个状态代码是很有用的。
 205  Reset Content  没有新的内容，但浏览器应该重置它所显示的内容。用来强制浏览器清除表单输入内容（HTTP 1.1新）。
 206  Partial Content  客户发送了一个带有Range头的GET请求，服务器完成了它（HTTP 1.1新）。
 300  Multiple Choices  客户请求的文档可以在多个位置找到，这些位置已经在返回的文档内列出。如果服务器要提出优先选择，则应该在Location应答头指明。
 301  Moved Permanently  客户请求的文档在其他地方，新的URL在Location头中给出，浏览器应该自动地访问新的URL。
 302  Found  类似于301，但新的URL应该被视为临时性的替代，而不是永久性的。注意，在HTTP1.0中对应的状态信息是“Moved Temporatily”。

出现该状态代码时，浏览器能够自动访问新的URL，因此它是一个很有用的状态代码。

注意这个状态代码有时候可以和301替换使用。例如，如果浏览器错误地请求[http://host/~user](https://link.jianshu.com?t=http://host/~user)（缺少了后面的斜杠），有的服务器返回301，有的则返回302。

严格地说，我们只能假定只有当原来的请求是GET时浏览器才会自动重定向。请参见307。
 303  See Other  类似于301/302，不同之处在于，如果原来的请求是POST，Location头指定的重定向目标文档应该通过GET提取（HTTP 1.1新）。
 304  Not Modified  客户端有缓冲的文档并发出了一个条件性的请求（一般是提供If-Modified-Since头表示客户只想比指定日期更新的文档）。服务器告诉客户，原来缓冲的文档还可以继续使用。
 305  Use Proxy  客户请求的文档应该通过Location头所指明的代理服务器提取（HTTP 1.1新）。
 307  Temporary Redirect  和302（Found）相同。许多浏览器会错误地响应302应答进行重定向，即使原来的请求是POST，即使它实际上只能在POST请求的应答是 303时才能重定向。由于这个原因，HTTP 1.1新增了307，以便更加清除地区分几个状态代码：当出现303应答时，浏览器可以跟随重定向的GET和POST请求；如果是307应答，则浏览器只 能跟随对GET请求的重定向。（HTTP 1.1新）
 400  Bad Request  请求出现语法错误。
 401  Unauthorized  客户试图未经授权访问受密码保护的页面。应答中会包含一个WWW-Authenticate头，浏览器据此显示用户名字/密码对话框，然后在填写合适的Authorization头后再次发出请求。
 403  Forbidden  资源不可用。服务器理解客户的请求，但拒绝处理它。通常由于服务器上文件或目录的权限设置导致。
 404  Not Found  无法找到指定位置的资源。这也是一个常用的应答。
 405  Method Not Allowed  请求方法（GET、POST、HEAD、DELETE、PUT、TRACE等）对指定的资源不适用。（HTTP 1.1新）
 406  Not Acceptable  指定的资源已经找到，但它的MIME类型和客户在Accpet头中所指定的不兼容（HTTP 1.1新）。
 407  Proxy Authentication Required  类似于401，表示客户必须先经过代理服务器的授权。（HTTP 1.1新）
 408  Request Timeout  在服务器许可的等待时间内，客户一直没有发出任何请求。客户可以在以后重复同一请求。（HTTP 1.1新）
 409  Conflict  通常和PUT请求有关。由于请求和资源的当前状态相冲突，因此请求不能成功。（HTTP 1.1新）
 410  Gone  所请求的文档已经不再可用，而且服务器不知道应该重定向到哪一个地址。它和404的不同在于，返回407表示文档永久地离开了指定的位置，而404表示由于未知的原因文档不可用。（HTTP 1.1新）
 411  Length Required  服务器不能处理请求，除非客户发送一个Content-Length头。（HTTP 1.1新）
 412  Precondition Failed  请求头中指定的一些前提条件失败（HTTP 1.1新）。
 413  Request Entity Too Large  目标文档的大小超过服务器当前愿意处理的大小。如果服务器认为自己能够稍后再处理该请求，则应该提供一个Retry-After头（HTTP 1.1新）。
 414  Request URI Too Long  URI太长（HTTP 1.1新）。
 416  Requested Range Not Satisfiable  服务器不能满足客户在请求中指定的Range头。（HTTP 1.1新）
 500  Internal Server Error  服务器遇到了意料不到的情况，不能完成客户的请求。
 501  Not Implemented  服务器不支持实现请求所需要的功能。例如，客户发出了一个服务器不支持的PUT请求。
 502  Bad Gateway  服务器作为网关或者代理时，为了完成请求访问下一个服务器，但该服务器返回了非法的应答。
 503  Service Unavailable  服务器由于维护或者负载过重未能应答。例如，Servlet可能在数据库连接池已满的情况下返回503。服务器返回503时可以提供一个Retry-After头。
 504  Gateway Timeout  由作为代理或网关的服务器使用，表示不能及时地从远程服务器获得应答。（HTTP 1.1新）
 505  HTTP Version Not Supported  服务器不支持请求中所指明的HTTP版本。（HTTP 1.1新）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.38,words:1613},y:"a",t:"Tomcat 错误代号及状态码"},["/web/tomcat/status","/web/tomcat/status.md"]],["v-4b9c1d99","/basic/linux/basic/common-kno.html",{d:1681909711e3,c:"Linux",e:`<h1> 常用知识</h1>
<p><strong>如何查看当前服务器内核的版本</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>uname -r
cat /proc/version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.76,words:227},y:"a",t:"常用知识"},["/basic/linux/basic/common-kno","/basic/linux/basic/common-kno.md"]],["v-43e54828","/basic/linux/basic/crontab.html",{d:1681909711e3,c:"Linux",e:`<h1> 计划任务</h1>
<p><strong>crontab命令</strong>被用来提交和管理用户的需要周期性执行的任务，与windows下的计划任务类似，当安装完成操作系统后，默认会安装此服务工具，并且会自动启动crond进程，crond进程每分钟会定期检查是否有要执行的任务，如果有要执行的任务，则自动执行该任务。</p>
<h2> 语法</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>crontab(选项)(参数)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:11.8,words:3541},y:"a",t:"计划任务"},["/basic/linux/basic/crontab","/basic/linux/basic/crontab.md"]],["v-902fe038","/basic/linux/basic/i-o.html",{d:1681909711e3,c:"Linux",e:`<h1> 管道及I/O重定向</h1>
<h2> 标准输入、标准输出、标准错误</h2>
<h3> 输出重定向</h3>
<p>输出重定向（覆盖）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>date &gt; a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出重定向（追加）</p>`,r:{minutes:.38,words:115},y:"a",t:"管道及I/O重定向"},["/basic/linux/basic/i-o","/basic/linux/basic/i-o.md"]],["v-75946033","/basic/linux/basic/inter.html",{d:1681909711e3,c:"Linux",e:`<h1> 网络管理</h1>
<h1> 网络基础</h1>
<h2> 常见的网络接口</h2>
<p>eth0			以太网接口
lo				本地环回接口<br>
br0			桥接接口 （虚拟交换机）
vnet0		    KVM虚拟机网卡接口</p>
<h2> 查看网络信息</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ip addr //查看IP、掩码、MAC...
ip addr show eth0 //只显示eth0的信息
ip route //查看本机路由表
cat /etc/resolv.conf //查看DNS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.31,words:92},y:"a",t:"网络管理"},["/basic/linux/basic/inter","/basic/linux/basic/inter.md"]],["v-6cf4ecb4","/basic/linux/basic/limit.html",{d:1681909711e3,c:"Linux",e:`<h1> /etc/security/limits.conf 详解与配置</h1>
<h2> 一、 /etc/security/limits.conf 详解</h2>
<p><code>/etc/security/limits.conf</code> 文件实际是 Linux PAM（插入式认证模块，Pluggable Authentication Modules）中 <code>pam_limits.so</code> 的配置文件，而且只针对于单个会话。 该设置不会影响系统服务的资源限制。还要注意 <code>/etc/security/limits.d/</code> 的这个目录，</p>
`,r:{minutes:7.06,words:2118},y:"a",t:"/etc/security/limits.conf 详解与配置"},["/basic/linux/basic/limit","/basic/linux/basic/limit.md"]],["v-07fad500","/basic/linux/basic/process.html",{d:1681909711e3,c:"Linux",e:`<h1> 进程管理</h1>
<h2> 静态查看进程 ps</h2>
<p><strong>ps命令</strong>用于报告当前系统的进程状态。可以搭配<a href="http://man.linuxde.net/kill" target="_blank" rel="noopener noreferrer">kill</a>指令随时中断、删除不必要的程序。ps命令是最基本同时也是非常强大的进程查看命令，使用该命令可以确定有哪些进程正在运行和运行的状态、进程是否结束、进程有没有僵死、哪些进程占用了过多的资源等等，总之大部分信息都是可以通过执行该命令得到的。</p>
<ol>
<li>
<p>运行(正在运行或在运行队列中等待)</p>
</li>
<li>
<p>中断(休眠中, 受阻, 在等待某个条件的形成或接受到信号)</p>
</li>
<li>
<p>不可中断(收到信号不唤醒和不可运行, 进程必须等待直到有中断发生)</p>
</li>
<li>
<p>僵死(进程已终止, 但进程描述符存在, 直到父进程调用wait4()系统调用后释放)</p>
</li>
<li>
<p>停止(进程收到SIGSTOP, SIGSTP, SIGTIN, SIGTOU信号后停止运行运行)</p>
</li>
</ol>`,r:{minutes:19.51,words:5854},y:"a",t:"进程管理"},["/basic/linux/basic/process","/basic/linux/basic/process.md"]],["v-3ef0b394","/basic/linux/basic/",{d:1681909711e3,c:"Linux",e:`<h1> 前言</h1>
<h2> 文章教程</h2>
<p><a href="https://dunwu.github.io/linux-tutorial/" target="_blank" rel="noopener noreferrer">LINUX-TUTORIAL | dunwu</a></p>
<p><a href="https://github.com/mylxsw/growing-up/blob/master/doc/%E4%B8%89%E5%8D%81%E5%88%86%E9%92%9F%E5%AD%A6%E4%BC%9AAWK.md" target="_blank" rel="noopener noreferrer">三十分钟学会AWK | 程序猿成长计划</a> ⭐</p>`,r:{minutes:19.16,words:5747},y:"a",t:"前言"},["/basic/linux/basic/index.html","/basic/linux/basic/readme.md"]],["v-33aa7480","/basic/linux/basic/rpm.html",{d:1681909711e3,c:"Linux",e:`<h1> 软件包管理</h1>
<h2> yum管理RPM包</h2>
<p>清空缓存及其它文件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum clean all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>建立缓存数据库</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.42,words:126},y:"a",t:"软件包管理"},["/basic/linux/basic/rpm","/basic/linux/basic/rpm.md"]],["v-dac0d1dc","/basic/linux/basic/ugo.html",{d:1681909711e3,c:"Linux",e:`<h1> 基本权限 UGO</h1>
<p>文件权限设置： 可以赋于某个用户或组  能够以何种方式  访问某个文件</p>
<p>文件权限管理之： UGO设置基本权限(r、w、x)</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    rw-r--r--  alice hr  install.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.21,words:363},y:"a",t:"基本权限 UGO"},["/basic/linux/basic/ugo","/basic/linux/basic/ugo.md"]],["v-00941b10","/basic/linux/basic/user.html",{d:1681909711e3,c:"Linux",e:`<h1> 用户管理</h1>
<p>查看当前登录的用户信息：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>id
uid=0(root) gid=0(root) groups=0(root)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.27,words:82},y:"a",t:"用户管理"},["/basic/linux/basic/user","/basic/linux/basic/user.md"]],["v-0dd71b0c","/basic/linux/gainian/code-type.html",{d:1681909711e3,g:["概念"],e:`<h1> 编程语言的分类</h1>
<p>编程语言的分类可以从三个角度出发：</p>
<h2> 编译型和解释型</h2>
<h3> 编译型</h3>
<p>即把源程序的每一条语句都编译成机器语言，并保存为二进制文件，这样运行时计算机可以直接以机器语言来运行此程序。</p>
<ul>
<li>优点：执行速度很快</li>
<li>缺点：开发效率低，不能跨平台</li>
</ul>
<p>常见语言有<code>C\\C++</code>、<code>Go</code>等</p>
<h3> 解释型</h3>
<p>只在运行时才一条一条的解释成机器语言给计算机执行。</p>
<ul>
<li>优点：开发效率高，跨平台</li>
<li>缺点：运行速度慢</li>
</ul>`,r:{minutes:1.67,words:500},y:"a",t:"编程语言的分类"},["/basic/linux/gainian/code-type","/basic/linux/gainian/code-type.md"]],["v-7699454c","/basic/linux/gainian/dev-ops-env.html",{d:1681909711e3,g:["概念"],e:`<h1> DEV SIT UAT PET SIM PRD PROD常见环境英文缩写含义</h1>
<p>英文缩写 英文 中文
DEV development 开发
SIT System Integrate Test 系统整合测试（内测）
UAT User Acceptance Test 用户验收测试
PET Performance Evaluation Test 性能评估测试（压测）
SIM simulation 仿真
PRD/PROD production 产品/正式/生产</p>
<p>今天给大家介绍一下开发过程中，四个环境以及各自的功能特点，四个环境分别是：pro、pre、test、dev环境，中文名字：生产环境、灰度环境、测试环境、开发环境，其实大家看英文应该就差不多可以看出来对应的是什么环境。</p>`,r:{minutes:.97,words:291},y:"a",t:"DEV SIT UAT PET SIM PRD PROD常见环境英文缩写含义"},["/basic/linux/gainian/dev-ops-env","/basic/linux/gainian/dev-ops-env.md"]],["v-106ad43e","/basic/linux/gainian/document-style-guide.html",{d:1681909711e3,g:["概念"],e:`<h1> 中文技术文档的写作规范</h1>
<blockquote>
<p>转载自：https://github.com/ruanyf/document-style-guide</p>
</blockquote>
<h2> 标题</h2>
<h3> 层级</h3>
<p>标题分为四级。</p>
<ul>
<li>一级标题：文章的标题</li>
<li>二级标题：文章主要部分的大标题</li>
<li>三级标题：二级标题下面一级的小标题</li>
<li>四级标题：三级标题下面某一方面的小标题</li>
</ul>
<p>下面是示例。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 一级标题

## 二级标题

### 三级标题

#### 四级标题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.13,words:1539},y:"a",t:"中文技术文档的写作规范"},["/basic/linux/gainian/document-style-guide","/basic/linux/gainian/document-style-guide.md"]],["v-76c3c216","/basic/linux/qa/centos-time.html",{d:1681909711e3,c:"Linux",g:["常见问题"],e:`<h2> centos7下时区问题</h2>
<p>centos7时区同样, 在
CentOS 7 中, 引入了一个叫 <strong>timedatectl</strong> 的设置设置程序。</p>
<p>用法很简单：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># timedatectl # 查看系统时间方面的各种状态
      Local time: 四 2014-12-25 10:52:10 CST
  Universal time: 四 2014-12-25 02:52:10 UTC
        RTC time: 四 2014-12-25 02:52:10
        Timezone: Asia/Shanghai (CST, +0800)
     NTP enabled: yes
NTP synchronized: yes
 RTC in local TZ: no
      DST active: n/a
# timedatectl list-timezones # 列出所有时区
# timedatectl set-local-rtc 1 # 将硬件时钟调整为与本地时钟一致, 0 为设置为 UTC 时间
# timedatectl set-timezone Asia/Shanghai # 设置系统时区为上海
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.63,words:190},y:"a",t:""},["/basic/linux/qa/centos-time","/basic/linux/qa/centos-time.md"]],["v-3623fc05","/basic/linux/qa/curl-https.html",{d:1681909711e3,c:"Linux",g:["常见问题"],e:`<h1> 证书相关问题</h1>
<h2> curl https报错: curl: (35) SSL connect error</h2>
<p>原因：curl默认支持https是nss，而不是openssl，需要换成openss</p>
<p>源码编译curl</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /usr/local/src/
wget http://curl.haxx.se/download/archeology/curl-7.19.7.tar.gz
tar -zxf curl-7.19.7.tar.gz
cd curl-7.19.7
./configure --without-nss --with-ssl
make
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.54,words:162},y:"a",t:"证书相关问题"},["/basic/linux/qa/curl-https","/basic/linux/qa/curl-https.md"]],["v-00ff071b","/basic/linux/qa/du-df-diff.html",{d:1681909711e3,c:"Linux",g:["常见问题"],e:`<h1> Linux，du、df统计的硬盘使用情况不一致问题</h1>
<p>在运维Linux服务器时，会碰到需要查看硬盘空间的情况，这时候，通常会使用<code>df -lh</code>命令来检查每个挂载了文件系统的硬盘的总量和已使用量，或者，可以使用<code>du -sh [directory]</code>命令来统计某个目录下所有文件的空间占用。</p>
<p>在使用<code>df、du</code>命令时，常常会遇到统计的硬盘使用情况不一致的问题。比如du统计根目录下文件总共大小为2G，而df判断挂载在根目录的硬盘已用空间达到了3G，20G甚至更多。发生这种情况，有以下三种原因：</p>`,r:{minutes:2.46,words:739},y:"a",t:"Linux，du、df统计的硬盘使用情况不一致问题"},["/basic/linux/qa/du-df-diff","/basic/linux/qa/du-df-diff.md"]],["v-51198775","/basic/linux/qa/mysql-max-con.html",{d:1681909711e3,c:"Linux",g:["常见问题"],e:`<h1> mysql最大连接数的改变</h1>
<p>在使用MySQL数据库的时候，经常会遇到这么一个问题，就是“Can not connect to MySQL server. Too many connections”-mysql 1040错误，这是因为访问MySQL且还未释放的连接数目已经达到MySQL的上限。通常，mysql的最大连接数默认是100, 最大可以达到16384。</p>
<p>常用的有两种方式修改最大连接数。</p>
<h3> 命令行修改</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#mysql -uuser -ppassword(命令行登录MySQL)
mysql&gt;show variables like 'max_connections';(查可以看当前的最大连接数)
msyql&gt;set global max_connections=1000;(设置最大连接数为1000，可以再次查看是否设置成功)
mysql&gt;exit(退出)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1,words:301},y:"a",t:"mysql最大连接数的改变"},["/basic/linux/qa/mysql-max-con","/basic/linux/qa/mysql-max-con.md"]],["v-213dba9c","/basic/linux/qa/swap.html",{d:1681909711e3,c:"Linux",g:["常见问题"],e:`<h1> linux下如何增加swap交换分区</h1>
<p>swap即交换分区，类似于<a href="http://www.ttlsa.com/windows/" target="_blank" rel="noopener noreferrer">windows</a>虚拟内存功能，就是在硬盘上分配出一块空间作为虚拟内存来使用.</p>
<p>通常swap都是在装系统硬盘分区时设定，这里只是探讨一下系统已经安装好后，扩展swap分区的方法.下面我们来将下如何在安装好的<a href="http://www.ttlsa.com/linux/" target="_blank" rel="noopener noreferrer">linux</a>下增加swap交换分区.</p>`,r:{minutes:.87,words:262},y:"a",t:"linux下如何增加swap交换分区"},["/basic/linux/qa/swap","/basic/linux/qa/swap.md"]],["v-cade1efe","/cloudnative/kubernetes/install/",{d:1686625069e3,e:`<h1> 集群搭建</h1>
`,r:{minutes:.03,words:8},y:"a",t:"集群搭建"},["/cloudnative/kubernetes/install/index.html","/cloudnative/kubernetes/install/README.md"]],["v-2a83e426","/cloudnative/kubernetes/install/k8s-install.html",{d:1686625069e3,c:"云原生",g:["Kubernetes"],e:`<h1> 使用 ansible 快速搭建 k8s 集群</h1>
<p>推荐：</p>
<ul>
<li>kubeadm 安装用：<a href="https://github.com/kubernetes-sigs/kubespray" target="_blank" rel="noopener noreferrer">kubespray</a></li>
<li>二进制安装用：<a href="https://github.com/easzlab/kubeasz" target="_blank" rel="noopener noreferrer">kubeasz</a></li>
</ul>`,r:{minutes:2.28,words:683},y:"a",t:"使用 ansible 快速搭建 k8s 集群",O:1},["/cloudnative/kubernetes/install/k8s-install","/cloudnative/kubernetes/install/k8s-install.md"]],["v-dd604362","/code/shell/appendix/E_special_exitcodes.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<table>
<thead>
<tr>
<th>退出代码</th>
<th>表意</th>
<th>示例</th>
<th>注释</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>通用错误</td>
<td>let "var1 = 1/0"</td>
<td>其他错误，如除以零错误及其他无权限操作。</td>
</tr>
<tr>
<td>2</td>
<td>(据 Bash 文档) 误用 Shell builtins</td>
<td>empty_function() {}</td>
<td>缺失关键词或指令，或权限问题 (及 diff 在二进制文件比较时的返回值)</td>
</tr>
<tr>
<td>126</td>
<td>调用的指令无法执行</td>
<td>/dev/null</td>
<td>权限问题或命令不可执行</td>
</tr>
<tr>
<td>127</td>
<td>「未找到指令」</td>
<td>illegal_command</td>
<td>可能是 $PATH 有问题或输入有误。</td>
</tr>
<tr>
<td>128</td>
<td>exit 的参数有误</td>
<td>exit 3.14159</td>
<td>exit 只接受范围在 0 - 255 的整数 (见第一个脚注)</td>
</tr>
<tr>
<td>128+n</td>
<td>错误信号 “n”</td>
<td>脚本的 kill -9 $PPID</td>
<td>$? 返回 137 (128 + 9)</td>
</tr>
<tr>
<td>130</td>
<td>脚本被 Control-C 终止</td>
<td>Ctl-C</td>
<td>Control-C 是错误信号 2 (130 = 128 + 2, 见上)</td>
</tr>
<tr>
<td>255*</td>
<td>错误状态超范围</td>
<td>exit -1</td>
<td>exit 只接受范围在 0 - 255 的整数</td>
</tr>
</tbody>
</table>`,r:{minutes:1.7,words:509},y:"a",t:""},["/code/shell/appendix/E_special_exitcodes","/code/shell/appendix/E_special_exitcodes.md"]],["v-e021017c","/code/shell/appendix/T_ascii_table.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 附录 T. ASCII 表</h1>
<p>传统上，这类书的附录会有一个 ASCII 表。但本书不会。取而代之的是这些生成一张完整 ASCII 表的简短脚本。</p>
<p>例 T-1. 一个生成 ASCII 表的脚本</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># ascii.sh</span>
<span class="token comment"># ver. 0.2, reldate 26 Aug 2008</span>
<span class="token comment"># Patched by ABS Guide author.</span>

<span class="token comment"># Original script by Sebastian Arming.</span>
<span class="token comment"># Used with permission (thanks!).</span>

<span class="token builtin class-name">exec</span> <span class="token operator">&gt;</span>ASCII.txt         <span class="token comment">#  Save stdout to file,</span>
                        <span class="token comment">#+ as in the example scripts</span>
                        <span class="token comment">#+ reassign-stdout.sh and upperconv.sh.</span>

<span class="token assign-left variable">MAXNUM</span><span class="token operator">=</span><span class="token number">256</span>
<span class="token assign-left variable"><span class="token environment constant">COLUMNS</span></span><span class="token operator">=</span><span class="token number">5</span>
<span class="token assign-left variable">OCT</span><span class="token operator">=</span><span class="token number">8</span>
<span class="token assign-left variable">OCTSQU</span><span class="token operator">=</span><span class="token number">64</span>
<span class="token assign-left variable">LITTLESPACE</span><span class="token operator">=</span>-3
<span class="token assign-left variable">BIGSPACE</span><span class="token operator">=</span>-5

<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">1</span> <span class="token comment"># Decimal counter</span>
<span class="token assign-left variable">o</span><span class="token operator">=</span><span class="token number">1</span> <span class="token comment"># Octal counter</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$i</span>"</span> <span class="token parameter variable">-lt</span> <span class="token string">"<span class="token variable">$MAXNUM</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span>  <span class="token comment"># We don't have to count past 400 octal.</span>
        <span class="token assign-left variable">paddi</span><span class="token operator">=</span><span class="token string">"    <span class="token variable">$i</span>"</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">\${paddi<span class="token operator">:</span> $BIGSPACE}</span>  "</span>       <span class="token comment"># Column spacing.</span>
        <span class="token assign-left variable">paddo</span><span class="token operator">=</span><span class="token string">"00<span class="token variable">$o</span>"</span>
<span class="token comment">#       echo -ne "\\\\\${paddo: $LITTLESPACE}"   # Original.</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-ne</span> <span class="token string">"<span class="token entity" title="\\\\">\\\\</span>0<span class="token variable">\${paddo<span class="token operator">:</span> $LITTLESPACE}</span>"</span>  <span class="token comment"># Fixup.</span>
<span class="token comment">#                   ^</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"     "</span>
        <span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span> i <span class="token operator">%</span> $COLUMNS <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">then</span>       <span class="token comment"># New line.</span>
           <span class="token builtin class-name">echo</span>
        <span class="token keyword">fi</span>
        <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">++</span><span class="token punctuation">,</span> o<span class="token operator">++</span><span class="token punctuation">))</span></span>
        <span class="token comment"># The octal notation for 8 is 10, and 64 decimal is 100 octal.</span>
        <span class="token variable"><span class="token punctuation">((</span> i <span class="token operator">%</span> $OCT <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">))</span></span>    <span class="token operator">&amp;&amp;</span> <span class="token variable"><span class="token punctuation">((</span>o<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">))</span></span>
        <span class="token variable"><span class="token punctuation">((</span> i <span class="token operator">%</span> $OCTSQU <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">))</span></span> <span class="token operator">&amp;&amp;</span> <span class="token variable"><span class="token punctuation">((</span>o<span class="token operator">+=</span><span class="token number">20</span><span class="token punctuation">))</span></span>
<span class="token keyword">done</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>

<span class="token comment"># Compare this script with the "pr-asc.sh" example.</span>
<span class="token comment"># This one handles "unprintable" characters.</span>

<span class="token comment"># Exercise:</span>
<span class="token comment"># Rewrite this script to use decimal numbers, rather than octal.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.29,words:687},y:"a",t:"附录 T. ASCII 表"},["/code/shell/appendix/T_ascii_table","/code/shell/appendix/T_ascii_table.md"]],["v-0362c258","/code/shell/part1/01_shell_programming.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第一章 为什么使用shell编程</h1>
<blockquote>
<p>没有任何一种程序设计语言是完美的，甚至没有一个最好的语言。只有在特定环境下适合的语言。</p>
<p>—— Herbert Mayer</p>
</blockquote>
<p>无论你是否打算真正编写shell脚本，只要你想要在一定程度上熟悉系统管理，了解掌握shell脚本的相关知识都是非常有必要的。例如Linux系统在启动的时候会执行<code>/etc/rc.d</code>目录下的shell脚本来恢复系统配置和准备服务。详细了解这些启动脚本对分析系统行为大有益处，何况，你很有可能会去修改它们呢。</p>`,r:{minutes:5.59,words:1677},y:"a",t:"第一章 为什么使用shell编程"},["/code/shell/part1/01_shell_programming","/code/shell/part1/01_shell_programming.md"]],["v-ccb7dd70","/code/shell/part1/02_1_invoking_the_script.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 2.1 调用一个脚本</h1>
<p>写完一个脚本以后，你可以通过<code>sh scriptname</code>或<code>bash scriptname</code>来调用它（不推荐使用<code>sh &lt;scriptname</code>调用脚本，因为这会禁用脚本从标准输入（stdin）读入数据）。更方便的方式是使用<code>chmod</code>命令使脚本可以被直接执行。</p>
<p>执行命令：</p>
<p><code>chmod 555 scriptname</code>（给予所有用户读取/执行的权限）</p>
<p>或</p>
<p><code>chmod +rx scriptname</code>（给予所有用户读取/执行的权限）</p>`,r:{minutes:.87,words:262},y:"a",t:"2.1 调用一个脚本"},["/code/shell/part1/02_1_invoking_the_script","/code/shell/part1/02_1_invoking_the_script.md"]],["v-7af80658","/code/shell/part1/02_2_preliminary_exercises.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 2.2 牛刀小试</h1>
<ol>
<li>系统管理员通常会写一些脚本来完成自动化工作。试举例说明使用脚本的便利之处。</li>
<li>请尝试写一个脚本。调用脚本，会打印当前系统时间和日期，所有已登录的用户和系统运行时间。并将这些信息保存到一个日志文件中。</li>
</ol>
`,r:{minutes:.34,words:103},y:"a",t:"2.2 牛刀小试"},["/code/shell/part1/02_2_preliminary_exercises","/code/shell/part1/02_2_preliminary_exercises.md"]],["v-c0e652fc","/code/shell/part1/02_starting_off_with_a_sha_bang.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第二章 和Sha-Bang（#!）一起出发</h1>
<blockquote>
<p>Shell编程声名显赫</p>
<p>—— Larry Wall</p>
</blockquote>
<h3> 本章目录</h3>
<ul>
<li><a href="/code/shell/part1/02_1_invoking_the_script.html" target="blank">2.1 调用一个脚本</a></li>
<li><a href="/code/shell/part1/02_2_preliminary_exercises.html" target="blank">2.2 牛刀小试</a></li>
</ul>`,r:{minutes:6.6,words:1979},y:"a",t:"第二章 和Sha-Bang（#!）一起出发"},["/code/shell/part1/02_starting_off_with_a_sha_bang","/code/shell/part1/02_starting_off_with_a_sha_bang.md"]],["v-71241dce","/code/shell/part1/",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第一部分 初见Shell</h1>
<blockquote>
<p><em>脚本：文章；书面文档</em></p>
<p><em>——韦伯斯特字典1913年版</em></p>
</blockquote>
<p>Shell是一种命令解释器，它不仅分离了用户层与操作系统内核，更是一门强大的编程语言。我们称为shell编写的程序为脚本（script）。脚本是一种易于使用的工具，它能够将系统调用、工具软件、实用程序（utility）和已编译的二进制文件联系在一起构建程序。实际上，shell脚本可以调用所有的UNIX命令、实用程序以及工具软件。如果你觉得这还不够，使用像<code>test</code>命令和循环结构这样的shell内建命令能够让脚本更加灵活强大。Shell脚本特别适合完成系统管理任务和那些不需要复杂结构性语言实现的重复工作。</p>`,r:{minutes:.9,words:271},y:"a",t:"第一部分 初见Shell"},["/code/shell/part1/index.html","/code/shell/part1/readme.md"]],["v-3666da25","/code/shell/part2/03_special_characters.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第三章 特殊字符</h1>
<p>是什么让一个字符变得<em>特殊</em>呢？如果一个字符不仅具有<em>字面</em>意义，而且具有<em>元意（meta-meaning）</em>，我们就称它为特殊字符。特殊字符同命令和关键词（keywords）一样，是bash脚本的组成部分。</p>
<p>你在脚本或其他地方都能够找到特殊字符。</p>
<h3> #</h3>
<p>注释符。如果一行脚本的开头是#（除了#!），那么代表这一行是注释，不会被执行。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 这是一行注释</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:29.2,words:8761},y:"a",t:"第三章 特殊字符"},["/code/shell/part2/03_special_characters","/code/shell/part2/03_special_characters.md"]],["v-95c6342c","/code/shell/part2/04_1_variable_substitution.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 4.1 变量替换</h1>
<p>变量名是其所指向值的一个占位符（placeholder）。引用变量值的过程我们称之为变量替换（variable substitution）。</p>
<h3> $</h3>
<p>接下来我们仔细区分一下<strong>变量名</strong>与<strong>变量值</strong>。如果变量名是 <code>variable1</code>， 那么 <code>$variable1</code> 就是对变量值的引用。[^1]</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bash$ variable1=23


bash$ echo variable1
variable1

bash$ echo $variable1
23
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.54,words:1062},y:"a",t:"4.1 变量替换"},["/code/shell/part2/04_1_variable_substitution","/code/shell/part2/04_1_variable_substitution.md"]],["v-549a3ab9","/code/shell/part2/04_2_variable_assignment.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 4.2 变量赋值</h1>
<h3> =</h3>
<p>赋值操作符（在其前后没有空白符）。</p>
<blockquote>
<p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="noitce"> 不要混淆 = 与 -eq，后者用来进行比较而非赋值。</p>
<p>同时也要注意 = 根据使用场景既可作赋值操作符，也可作比较操作符。</p>
</blockquote>
<p>样例 4-2. 变量赋值</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 非引用形式变量</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 什么时候变量是非引用形式，即变量名前没有 '$' 符号的呢？</span>
<span class="token comment"># 当变量在被赋值而不是被引用时。</span>

<span class="token comment"># 赋值</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">879</span>
<span class="token builtin class-name">echo</span> <span class="token string">"The value of <span class="token entity" title="\\&quot;">\\"</span>a<span class="token entity" title="\\&quot;">\\"</span> is <span class="token variable">$a</span>."</span>

<span class="token comment"># 使用 'let' 进行赋值</span>
<span class="token builtin class-name">let</span> <span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">16</span>+5
<span class="token builtin class-name">echo</span> <span class="token string">"The value of <span class="token entity" title="\\&quot;">\\"</span>a<span class="token entity" title="\\&quot;">\\"</span> is now <span class="token variable">$a</span>."</span>

<span class="token builtin class-name">echo</span>

<span class="token comment"># 在 'for' 循环中赋值（隐式赋值）</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"Values of <span class="token entity" title="\\&quot;">\\"</span>a<span class="token entity" title="\\&quot;">\\"</span> in the loop are: "</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">11</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"<span class="token variable">$a</span> "</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span>

<span class="token comment"># 在 'read' 表达式中（另一种赋值形式）</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">"Enter <span class="token entity" title="\\&quot;">\\"</span>a<span class="token entity" title="\\&quot;">\\"</span> "</span>
<span class="token builtin class-name">read</span> a
<span class="token builtin class-name">echo</span> <span class="token string">"The value of <span class="token entity" title="\\&quot;">\\"</span>a<span class="token entity" title="\\&quot;">\\"</span> is now <span class="token variable">$a</span>."</span>

<span class="token builtin class-name">echo</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.44,words:431},y:"a",t:"4.2 变量赋值"},["/code/shell/part2/04_2_variable_assignment","/code/shell/part2/04_2_variable_assignment.md"]],["v-5f6eadd7","/code/shell/part2/04_3_bash_variables_are_untyped.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 4.3 Bash变量是弱类型的</h1>
<p>不同于许多其他编程语言，Bash 并不区分变量的类型。本质上说，<em>Bash 变量是字符串</em>，但在某些情况下，Bash 允许对变量进行算术运算和比较。决定因素则是变量值是否只含有数字。</p>
<p>样例 4-4. 整数还是字符串？</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># int-or-string.sh</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">2334</span>                   <span class="token comment"># 整数。</span>
<span class="token builtin class-name">let</span> <span class="token string">"a += 1"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"a = <span class="token variable">$a</span> "</span>           <span class="token comment"># a = 2335</span>
<span class="token builtin class-name">echo</span>                     <span class="token comment"># 依旧是整数。</span>


<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token variable">\${a<span class="token operator">/</span>23<span class="token operator">/</span>BB}</span>             <span class="token comment"># 将 "23" 替换为 "BB"。</span>
                         <span class="token comment"># $b 变成了字符串。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"b = <span class="token variable">$b</span>"</span>            <span class="token comment"># b = BB35</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-i</span> b             <span class="token comment"># 将其声明为整数并没有什么卵用。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"b = <span class="token variable">$b</span>"</span>            <span class="token comment"># b = BB35</span>

<span class="token builtin class-name">let</span> <span class="token string">"b += 1"</span>             <span class="token comment"># BB35 + 1</span>
<span class="token builtin class-name">echo</span> <span class="token string">"b = <span class="token variable">$b</span>"</span>            <span class="token comment"># b = 1</span>
<span class="token builtin class-name">echo</span>                     <span class="token comment"># Bash 认为字符串的"整数值"为0。</span>

<span class="token assign-left variable">c</span><span class="token operator">=</span>BB34
<span class="token builtin class-name">echo</span> <span class="token string">"c = <span class="token variable">$c</span>"</span>            <span class="token comment"># c = BB34</span>
<span class="token assign-left variable">d</span><span class="token operator">=</span><span class="token variable">\${c<span class="token operator">/</span>BB<span class="token operator">/</span>23}</span>             <span class="token comment"># 将 "BB" 替换为 "23"。</span>
                         <span class="token comment"># $d 变为了一个整数。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"d = <span class="token variable">$d</span>"</span>            <span class="token comment"># d = 2334</span>
<span class="token builtin class-name">let</span> <span class="token string">"d += 1"</span>             <span class="token comment"># 2334 + 1</span>
<span class="token builtin class-name">echo</span> <span class="token string">"d = <span class="token variable">$d</span>"</span>            <span class="token comment"># d = 2335</span>
<span class="token builtin class-name">echo</span>


<span class="token comment"># 如果是空值会怎样呢？</span>
<span class="token assign-left variable">e</span><span class="token operator">=</span><span class="token string">''</span>                     <span class="token comment"># ...也可以是 e="" 或 e=</span>
<span class="token builtin class-name">echo</span> <span class="token string">"e = <span class="token variable">$e</span>"</span>            <span class="token comment"># e =</span>
<span class="token builtin class-name">let</span> <span class="token string">"e += 1"</span>             <span class="token comment"># 空值是否允许进行算术运算？</span>
<span class="token builtin class-name">echo</span> <span class="token string">"e = <span class="token variable">$e</span>"</span>            <span class="token comment"># e = 1</span>
<span class="token builtin class-name">echo</span>                     <span class="token comment"># 空值变为了一个整数。</span>

<span class="token comment"># 如果时未声明的变量呢？</span>
<span class="token builtin class-name">echo</span> <span class="token string">"f = <span class="token variable">$f</span>"</span>            <span class="token comment"># f =</span>
<span class="token builtin class-name">let</span> <span class="token string">"f += 1"</span>             <span class="token comment"># 是否允许进行算术运算？</span>
<span class="token builtin class-name">echo</span> <span class="token string">"f = <span class="token variable">$f</span>"</span>            <span class="token comment"># f = 1</span>
<span class="token builtin class-name">echo</span>                     <span class="token comment"># 未声明变量变为了一个整数。</span>
<span class="token comment">#</span>
<span class="token comment"># 然而……</span>
<span class="token builtin class-name">let</span> <span class="token string">"f /= <span class="token variable">$undecl_var</span>"</span>   <span class="token comment"># 可以除以0么？</span>
<span class="token comment">#   let: f /= : syntax error: operand expected (error token is " ")</span>
<span class="token comment"># 语法错误！在这里 $undecl_var 并没有被设置为0！</span>
<span class="token comment">#</span>
<span class="token comment"># 但是，仍旧……</span>
<span class="token builtin class-name">let</span> <span class="token string">"f /= 0"</span>
<span class="token comment">#   let: f /= 0: division by 0 (error token is "0")</span>
<span class="token comment"># 预期之中。</span>


<span class="token comment"># 在执行算术运算时，Bash 通常将其空值的整数值设为0。</span>
<span class="token comment"># 但是不要做这种事情！</span>
<span class="token comment"># 因为这可能会导致一些意外的后果。</span>


<span class="token comment"># 结论：上面的结果都表明 Bash 中的变量是弱类型的。</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.78,words:534},y:"a",t:"4.3 Bash变量是弱类型的"},["/code/shell/part2/04_3_bash_variables_are_untyped","/code/shell/part2/04_3_bash_variables_are_untyped.md"]],["v-5db426fd","/code/shell/part2/04_introduction_to_variables_and_parameters.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第四章 变量与参数</h1>
<h3> 本章目录</h3>
<ul>
<li><a href="/code/shell/part2/04_1_variable_substitution.html" target="blank">4.1 变量替换</a></li>
<li><a href="/code/shell/part2/04_2_variable_assignment.html" target="blank">4.2 变量赋值</a></li>
<li><a href="/code/shell/part2/04_3_bash_variables_are_untyped.html" target="blank">4.3 Bash变量弱类型</a></li>
<li><a href="/code/shell/part2/04_4_special_variable_types.html" target="blank">4.4 特殊变量类型</a></li>
</ul>`,r:{minutes:.37,words:111},y:"a",t:"第四章 变量与参数"},["/code/shell/part2/04_introduction_to_variables_and_parameters","/code/shell/part2/04_introduction_to_variables_and_parameters.md"]],["v-51c96f18","/code/shell/part2/05_1_quoting_variables.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 5.1 引用变量</h1>
<p>引用变量时，通常建议将变量包含在双引号中。因为这样可以防止除 <code>$</code>，<code>\`</code>（反引号）和<code>\\</code>（转义符）之外的其他特殊字符被重新解释。[^1]在双引号中仍然可以使用<code>$</code>引用变量（<code>"$variable"</code>），也就是将变量名替换为变量值（详情查看样例 4-1）。</p>
<p>使用双引号可以防止字符串被分割。[^2]即使参数中拥有很多空白分隔符，被包在双引号中后依旧是算作单一字符。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">List</span><span class="token operator">=</span><span class="token string">"one two three"</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token variable">$List</span>     <span class="token comment"># 空白符将变量分成几个部分。</span>
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$a</span>"</span>
<span class="token keyword">done</span>
<span class="token comment"># one</span>
<span class="token comment"># two</span>
<span class="token comment"># three</span>

<span class="token builtin class-name">echo</span> <span class="token string">"---"</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token string">"<span class="token variable">$List</span>"</span>   <span class="token comment"># 在单一变量中保留所有空格。</span>
<span class="token keyword">do</span> <span class="token comment">#     ^     ^</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$a</span>"</span>
<span class="token keyword">done</span>
<span class="token comment"># one two three</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.21,words:963},y:"a",t:"5.1 引用变量"},["/code/shell/part2/05_1_quoting_variables","/code/shell/part2/05_1_quoting_variables.md"]],["v-44c2064c","/code/shell/part2/05_2_escaping.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 5.2 转义</h1>
<p>转义是一种引用单字符的方法。通过在特殊字符前加上转义符 <code>\\</code> 来告诉shell按照字面意思去解释这个字符。</p>
<blockquote>
<p><img src="http://tldp.org/LDP/abs/images/caution.gif" alt="notice"> 需要注意的是，在一些特定的命令和工具，比如 <code>echo</code> 和 <code>sed</code> 中，转义字符通常会起到相反的效果，即可能会使得那些字符产生特殊含义。</p>
</blockquote>
<p>在 <code>echo</code> 与 <code>sed</code> 命令中，转义字符的特殊含义</p>`,r:{minutes:6.18,words:1855},y:"a",t:"5.2 转义"},["/code/shell/part2/05_2_escaping","/code/shell/part2/05_2_escaping.md"]],["v-2ef7dc02","/code/shell/part2/05_quoting.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第五章 引用</h1>
<h3> 本章目录</h3>
<ul>
<li><a href="/code/shell/part2/05_1_quoting_variables.html" target="blank">5.1 引用变量</a></li>
<li><a href="/code/shell/part2/05_2_escaping.html" target="blank">5.2 转义</a></li>
</ul>
<hr>
<p>引用就是将一个字符串用引号括起来。这样做是为了保护Shell/Shell脚本中被重新解释过或带扩展功能的<a href="http://tldp.org/LDP/abs/html/special-chars.html" target="_blank" rel="noopener noreferrer">特殊字符</a>（如果一个字符带有其特殊意义而不仅仅是字面量的话，这个字符就能称为“特殊字符”。比如星号“*”就能表示<a href="http://tldp.org/LDP/abs/html/regexp.html#REGEXREF" target="_blank" rel="noopener noreferrer">正则表达式</a>中的一个<a href="http://tldp.org/LDP/abs/html/globbingref.html" target="_blank" rel="noopener noreferrer">通配符</a>）。</p>`,r:{minutes:1.7,words:510},y:"a",t:"第五章 引用"},["/code/shell/part2/05_quoting","/code/shell/part2/05_quoting.md"]],["v-6a52f4ae","/code/shell/part2/06_exit_and_exit_status.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第六章 退出与退出状态</h1>
<blockquote>
<p>Bourne shell里存在不明确之处，但人们也会使用它们。</p>
<p>—— Chat Ramey</p>
</blockquote>
<p>跟C程序类似，<code>exit</code> 命令被用来结束脚本。同时，它也会返回一个值，返回值可以被交给父进程。</p>
<p>每个命令都会返回一个退出状态（exit status），有时也叫做返回状态（return status）或退出码（exit code）。命令执行成功返回0，如果返回一个非0值，通常情况下会被认为是一个错误代码。一个运行状态良好的UNIX命令、程序和工具在正常执行退出后都会返回一个0的退出码，当然也有例外。</p>`,r:{minutes:3.11,words:934},y:"a",t:"第六章 退出与退出状态"},["/code/shell/part2/06_exit_and_exit_status","/code/shell/part2/06_exit_and_exit_status.md"]],["v-d3244104","/code/shell/part2/07_1_test_constructs.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 7.1 测试结构</h1>
<ul>
<li>
<p><code>if/then</code> 结构是用来检测一系列命令的 <a href="http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF" target="_blank" rel="noopener noreferrer">退出状态</a> 是否为0（按 UNIX 惯例,退出码 0 表示命令执行成功），如果为0，则执行接下来的一个或多个命令。</p>
</li>
<li>
<p>测试结构会使用一个特殊的命令 <code>[</code>（参看特殊字符章节 <a href="http://tldp.org/LDP/abs/html/special-chars.html#LEFTBRACKET" target="_blank" rel="noopener noreferrer">左方括号</a>）。等同于 <code>test</code> 命令，它是一个<a href="http://tldp.org/LDP/abs/html/internal.html#BUILTINREF" target="_blank" rel="noopener noreferrer">内建命令</a>，写法更加简洁高效。该命令将其参数视为比较表达式或文件测试，以比较结果作为其退出状态码返回（0 为真，1 为假）。</p>
</li>
<li>
<p>Bash 在 2.02 版本中引入了扩展测试命令 <a href="http://tldp.org/LDP/abs/html/testconstructs.html#DBLBRACKETS" target="_blank" rel="noopener noreferrer"><code>[[...]]</code></a>，它提供了一种与其他语言语法更为相似的方式进行比较操作。注意， <code>[[</code> 是一个 <a href="http://tldp.org/LDP/abs/html/internal.html#KEYWORDREF" target="_blank" rel="noopener noreferrer">关键字</a> 而非一个命令。</p>
<p>Bash 将 <code>[[ $a -lt $b ]]</code> 视为一整条语句，执行并返回退出状态。</p>
</li>
<li>
<p>结构 <a href="http://tldp.org/LDP/abs/html/dblparens.html" target="_blank" rel="noopener noreferrer"><code>(( ... ))</code></a> 和 <a href="http://tldp.org/LDP/abs/html/internal.html#LETREF" target="_blank" rel="noopener noreferrer"><code>let ...</code></a> 根据其执行的算术表达式的结果决定退出状态码。这样的 <a href="http://tldp.org/LDP/abs/html/arithexp.html#ARITHEXPREF" target="_blank" rel="noopener noreferrer">算术扩展</a> 结构可以用来进行 <a href="http://tldp.org/LDP/abs/html/comparison-ops.html#ICOMPARISON1" target="_blank" rel="noopener noreferrer">数值比较</a>。</p>
</li>
</ul>`,r:{minutes:7.74,words:2323},y:"a",t:"7.1 测试结构"},["/code/shell/part2/07_1_test_constructs","/code/shell/part2/07_1_test_constructs.md"]],["v-57207c61","/code/shell/part2/07_2_file_test_operators.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 7.2 文件测试操作</h1>
<p>下列每一个运算符在满足其下条件时，返回的结果为真。</p>
<h3> -e</h3>
<p>检测文件是否存在</p>
<h3> -a</h3>
<p>检测文件是否存在</p>
<p>等价于 <code>-e</code>。不推荐使用，已被弃用[^1]。</p>
<h3> -f</h3>
<p>文件是常规文件(regular file)，而非目录或 <a href="http://tldp.org/LDP/abs/html/devref1.html#DEVFILEREF" target="_blank" rel="noopener noreferrer">设备文件</a></p>`,r:{minutes:4.57,words:1371},y:"a",t:"7.2 文件测试操作"},["/code/shell/part2/07_2_file_test_operators","/code/shell/part2/07_2_file_test_operators.md"]],["v-d584ed36","/code/shell/part2/07_3_other_comparison_operators.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 7.3 其他比较操作</h1>
<p>二元比较操作比较变量或者数量。注意整数和字符串比较使用的是两套运算符。</p>
<h2> 整数比较</h2>
<h3> -eq</h3>
<p>等于</p>
<p><code>if [ "$a" -eq "$b" ]</code></p>
<h3> -ne</h3>
<p>不等于</p>
<p><code>if [ "$a" -ne "$b" ]</code></p>
<h3> -gt</h3>
<p>大于</p>
<p><code>if [ "$a" -gt "$b" ]</code></p>
<h3> -ge</h3>
<p>大于等于</p>`,r:{minutes:5.31,words:1593},y:"a",t:"7.3 其他比较操作"},["/code/shell/part2/07_3_other_comparison_operators","/code/shell/part2/07_3_other_comparison_operators.md"]],["v-49cbb9f9","/code/shell/part2/07_4_nested_if_then_condition_tests.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 7.4 嵌套 if/then 条件测试</h1>
<p>可以嵌套 <code>if/then</code> 条件测试结构。嵌套的结果等价于使用 <a href="http://tldp.org/LDP/abs/html/ops.html#LOGOPS1" target="_blank" rel="noopener noreferrer"><code>&amp;&amp;</code></a> 复合比较运算符。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">3</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> <span class="token parameter variable">-lt</span> <span class="token number">5</span> <span class="token punctuation">]</span>
  <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"The value of <span class="token entity" title="\\&quot;">\\"</span>a<span class="token entity" title="\\&quot;">\\"</span> lies somewhere between 0 and 5."</span>
  <span class="token keyword">fi</span>
<span class="token keyword">fi</span>

<span class="token comment"># 和下面的结果相同</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$a</span>"</span> <span class="token parameter variable">-lt</span> <span class="token number">5</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"The value of <span class="token entity" title="\\&quot;">\\"</span>a<span class="token entity" title="\\&quot;">\\"</span> lies somewhere between 0 and 5."</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.43,words:128},y:"a",t:"7.4 嵌套 if/then 条件测试"},["/code/shell/part2/07_4_nested_if_then_condition_tests","/code/shell/part2/07_4_nested_if_then_condition_tests.md"]],["v-1b65cd68","/code/shell/part2/07_5_testing_your_knowledge_of_tests.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 7.5 牛刀小试</h1>
<p>系统文件 <code>xinitrc</code> 可以用来启动软件 X Server。该文件包含了许多 <code>if/then</code> 测试结构。下面的代码摘录自较早版本的 <code>xinitrc</code>（大约在 Red Hat 7.1 版本）。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token environment constant">$HOME</span>/.Xclients <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">exec</span> <span class="token environment constant">$HOME</span>/.Xclients
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/X11/xinit/Xclients <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">exec</span> /etc/X11/xinit/Xclients
<span class="token keyword">else</span>
    <span class="token comment"># 安全分支。尽管程序不会执行这个分支。</span>
    <span class="token comment"># （我们在 Xclients 中也提供了相同的机制）增强程序可靠性。</span>
    xclock <span class="token parameter variable">-geometry</span> 100x100-5+5 <span class="token operator">&amp;</span>
    xterm <span class="token parameter variable">-geometry</span> 80x50-50+150 <span class="token operator">&amp;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /usr/bin/netscape <span class="token parameter variable">-a</span> <span class="token parameter variable">-f</span> /usr/share/doc/HTML/index.html <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            netscape /usr/share/doc/HTML/index.html
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.73,words:219},y:"a",t:"7.5 牛刀小试"},["/code/shell/part2/07_5_testing_your_knowledge_of_tests","/code/shell/part2/07_5_testing_your_knowledge_of_tests.md"]],["v-41510350","/code/shell/part2/07_tests.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第七章 测试</h1>
<h3> 本章目录</h3>
<ul>
<li><a href="/code/shell/part2/07_1_test_constructs.html" target="blank">7.1 测试结构</a></li>
<li><a href="/code/shell/part2/07_2_file_test_operators.html" target="blank">7.2 文件测试操作</a></li>
<li><a href="/code/shell/part2/07_3_other_comparison_operators.html" target="blank">7.3 其他比较操作</a></li>
<li><a href="/code/shell/part2/07_4_nested_if_then_condition_tests.html" target="blank">7.4 嵌套 if/then 条件测试</a></li>
<li><a href="/code/shell/part2/07_5_testing_your_knowledge_of_tests.html" target="blank">7.5 牛刀小试</a></li>
</ul>`,r:{minutes:.42,words:126},y:"a",t:"第七章 测试"},["/code/shell/part2/07_tests","/code/shell/part2/07_tests.md"]],["v-2f71d652","/code/shell/part2/08_1_operators.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 8.1 运算符</h1>
<h2> 赋值运算符</h2>
<p><em>变量赋值</em>，初始化或改变一个变量的值。</p>
<h3> =</h3>
<p>等号<code>=</code>赋值运算符，既可用于算术赋值，也可用于字符串赋值。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var=27
category=minerals  # "="左右不允许有空格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.21,words:1864},y:"a",t:"8.1 运算符"},["/code/shell/part2/08_1_operators","/code/shell/part2/08_1_operators.md"]],["v-8d2e7446","/code/shell/part2/08_2_numerical_constants.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 8.2 数字常量</h1>
<p>通常情况下，shell脚本会把数字以十进制整数看待(base 10)，除非数字加了特殊的前缀或标记。
带前缀0的数字是八进制数(base 8)；带前缀0x的数字是十六进制数(base 16)。
内嵌 # 的数字会以 BASE#NUMBER 的方式进行求值（不能超出当前shell支持整数的范围）。</p>
<p><strong>样例 8-4. 数字常量的表示</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# numbers.sh: 不同进制数的表示

# 十进制数: 默认
let "dec = 32"
echo "decimal number = $dec"             # 32
# 一切正常。


# 八进制数: 带前导'0'的数
let "oct = 032"
echo "octal number = $oct"               # 26
# 结果以 十进制 打印输出了。
# ------ ------ -----------


# 十六进制数: 带前导'0x'或'0X'的数
let "hex = 0x32"
echo "hexadecimal number = $hex"         # 50

echo $((0x9abc))                         # 39612
#     ^^      ^^   双圆括号进行表达式求值
# 结果以十进制打印输出。



# 其他进制数: BASE#NUMBER
# BASE 范围:  2 - 64
# NUMBER 必须以 BASE 规定的正确形式书写，如下:

let "bin = 2#111100111001101"
echo "binary number = $bin"              # 31181

let "b32 = 32#77"
echo "base-32 number = $b32"             # 231

let "b64 = 64#@_"
echo "base-64 number = $b64"             # 4031

# 这种表示法只对进制范围(2 - 64)内的 ASCII 字符有效。
# 10 数字 + 26 小写字母 + 26 大写字母 + @ + _


echo

echo $((36#zz)) $((2#10101010)) $((16#AF16)) $((53#1aA))
                                         # 1295 170 44822 3375

#  重要提醒:
#  ---------
#  使用超出进制范围以外的符号会报错。

let "bad_oct = 081"

# (可能的) 报错信息:
#  bad_oct = 081: value too great for base (error token is "081")
#              Octal numbers use only digits in the range 0 - 7.

exit $?        # 退出码 = 1 (错误)

# 感谢 Rich Bartell 和 Stephane Chazelas 的说明。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.31,words:393},y:"a",t:"8.2 数字常量"},["/code/shell/part2/08_2_numerical_constants","/code/shell/part2/08_2_numerical_constants.md"]],["v-0698c03c","/code/shell/part2/08_3_the_double_parentheses_construct.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 8.3 双圆括号结构</h1>
<p>与<code>let</code>命令类似，<code>(( ... ))</code> 结构允许对算术表达式的扩展和求值。它是<code>let</code>命令的简化形式。例如，a=$(( 5 + 3 )) 会将变量a赋值成 5 + 3，也就是8。在Bash中，双圆括号结构也允许以C风格的方式操作变量。例如，(( var++ ))。</p>
<p><strong>样例 8-5. 以C风格的方式操作变量</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# c-vars.sh
# 以C风格的方式操作变量，使用(( ... ))结构


echo

(( a = 23 ))  #  C风格的变量赋值，注意"="等号前后都有空格

echo "a (initial value) = $a"   # 23

(( a++ ))     #  后缀自增'a'，C-style.
echo "a (after a++) = $a"       # 24

(( a-- ))     #  后缀自减'a', C-style.
echo "a (after a--) = $a"       # 23


(( ++a ))     #  前缀自增'a', C-style.
echo "a (after ++a) = $a"       # 24

(( --a ))     #  前缀自减'a', C-style.
echo "a (after --a) = $a"       # 23

echo

########################################################
#  注意，C风格的++，--运算符，前缀形式与后缀形式有不同的
#+ 副作用。

n=1; let --n &amp;&amp; echo "True" || echo "False"  # False
n=1; let n-- &amp;&amp; echo "True" || echo "False"  # True

#  感谢 Jeroen Domburg。
########################################################

echo

(( t = a&lt;45?7:11 ))   # C风格三目运算符。
#       ^  ^ ^
echo "If a &lt; 45, then t = 7, else t = 11."  # a = 23
echo "t = $t "                              # t = 7

echo


# -----------
# 复活节彩蛋!
# -----------
#  Chet Ramey 偷偷往Bash里加入了C风格的语句结构，
#  还没写文档说明 (实际上很多是从ksh中继承过来的)。
#  在Bash 文档中，Ramey把 (( ... ))结构称为shell 算术运算，
#  但是这种表述并不准确...
#  抱歉啊，Chet，把你的秘密抖出来了。

#  参看 "for" 和 "while" 循环章节关于 (( ... )) 结构的部分。

#  (( ... )) 结构在Bash 2.04版本之后才能正常工作。

exit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.4,words:421},y:"a",t:"8.3 双圆括号结构"},["/code/shell/part2/08_3_the_double_parentheses_construct","/code/shell/part2/08_3_the_double_parentheses_construct.md"]],["v-22a0477e","/code/shell/part2/08_4_operator_precedence.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 8.4 运算符优先级</h1>
<p>在脚本中，运算执行的顺序被称为<em>优先级</em>: 高优先级的操作会比低优先级的操作先执行。<a href="Precedence(%E4%BC%98%E5%85%88%E7%BA%A7)%EF%BC%8C%E6%A0%B9%E6%8D%AE%E4%B8%8A%E4%B8%8B%E6%96%87%EF%BC%8C%E4%B8%8Epriority%E5%90%AB%E4%B9%89%E7%9B%B8%E8%BF%91%E3%80%82">^1</a></p>
<p><strong>表 8-1. 运算符优先级(从高到低)</strong></p>`,r:{minutes:2.53,words:759},y:"a",t:"8.4 运算符优先级"},["/code/shell/part2/08_4_operator_precedence","/code/shell/part2/08_4_operator_precedence.md"]],["v-339f9476","/code/shell/part2/08_operations_and_related_topics.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第八章 运算符相关话题</h1>
<h3> 本章目录</h3>
<ul>
<li><a href="/code/shell/part2/08_1_operators.html" target="blank">8.1 运算符</a></li>
<li><a href="/code/shell/part2/08_2_numerical_constants.html" target="blank">8.2 数字常量</a></li>
<li><a href="/code/shell/part2/08_3_the_double_parentheses_construct.html" target="blank">8.3 双圆括号结构</a></li>
<li><a href="/code/shell/part2/08_4_operator_precedence.html" target="blank">8.4 运算符优先级</a></li>
</ul>`,r:{minutes:.16,words:47},y:"a",t:"第八章 运算符相关话题"},["/code/shell/part2/08_operations_and_related_topics","/code/shell/part2/08_operations_and_related_topics.md"]],["v-71241d90","/code/shell/part2/",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第二部分 shell基础</h1>
<h3> 目录</h3>
<ul>
<li><a href="/code/shell/part2/03_special_characters.html" target="blank">3. 特殊字符</a></li>
<li><a href="/code/shell/part2/04_introduction_to_variables_and_parameters.html" target="blank">4. 变量与参数</a>
<ul>
<li><a href="/code/shell/part2/04_1_variable_substitution.html" target="blank">4.1 变量替换</a></li>
<li><a href="/code/shell/part2/04_2_variable_assignment.html" target="blank">4.2 变量赋值</a></li>
<li><a href="/code/shell/part2/04_3_bash_variables_are_untyped.html" target="blank">4.3 Bash弱类型变量</a></li>
<li><a href="/code/shell/part2/04_4_special_variable_types.html" target="blank">4.4 特殊变量类型</a></li>
</ul>
</li>
<li><a href="/code/shell/part2/05_quoting.html" target="blank">5. 引用</a>
<ul>
<li><a href="/code/shell/part2/05_1_quoting_variables.html" target="blank">5.1 引用变量</a></li>
<li><a href="/code/shell/part2/05_2_escaping.html" target="blank">5.2 转义</a></li>
</ul>
</li>
<li><a href="/code/shell/part2/06_exit_and_exit_status.html" target="blank">6. 退出与退出状态</a></li>
<li><a href="/code/shell/part2/07_tests.html" target="blank">7. 测试</a>
<ul>
<li><a href="/code/shell/part2/07_1_test_constructs.html" target="blank">7.1 测试结构</a></li>
<li><a href="/code/shell/part2/07_2_file_test_operators.html" target="blank">7.2 文件测试操作</a></li>
<li><a href="/code/shell/part2/07_3_other_comparison_operators.html" target="blank">7.3 其他比较操作</a></li>
<li><a href="/code/shell/part2/07_4_nested_if_then_condition_tests.html" target="blank">7.4 嵌套 if/then 条件测试</a></li>
<li><a href="/code/shell/part2/07_5_testing_your_knowledge_of_tests.html" target="blank">7.5 牛刀小试</a></li>
</ul>
</li>
<li><a href="/code/shell/part2/08_operations_and_related_topics.html" target="blank">8. 运算符和相关话题</a>
<ul>
<li><a href="/code/shell/part2/08_1_operators.html" target="blank">8.1 运算符</a></li>
<li>8.2 数字常量</li>
<li>8.3 双圆括号结构</li>
<li>8.4 运算符优先级</li>
</ul>
</li>
</ul>`,r:{minutes:.51,words:154},y:"a",t:"第二部分 shell基础"},["/code/shell/part2/index.html","/code/shell/part2/readme.md"]],["v-765b1b97","/code/shell/part3/09_1_internal_variables.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 9.1 内部变量</h1>
<h2> 内建变量</h2>
<p>影响 Bash 脚本行为的变量。</p>
<h3> $BASH</h3>
<p>Bash程序的路径。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$BASH</span>
/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:22.4,words:6721},y:"a",t:"9.1 内部变量"},["/code/shell/part3/09_1_internal_variables","/code/shell/part3/09_1_internal_variables.md"]],["v-1f7f0293","/code/shell/part3/09_2_1_another_use_for_declare.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 9.2.1 <code>declare</code> 的另类用法</h1>
<p><code>declare</code> 命令可以帮助用户识别变量、<a href="">环境变量</a> 或是其他信息，与 <a href="">数组</a> 搭配效果更佳。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash$ <span class="token builtin class-name">declare</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token environment constant">HOME</span>
<span class="token assign-left variable"><span class="token environment constant">HOME</span></span><span class="token operator">=</span>/home/bozo


bash$ <span class="token assign-left variable">zzy</span><span class="token operator">=</span><span class="token number">68</span>
bash$ <span class="token builtin class-name">declare</span> <span class="token operator">|</span> <span class="token function">grep</span> zzy
<span class="token assign-left variable">zzy</span><span class="token operator">=</span><span class="token number">68</span>


bash$ <span class="token assign-left variable">Colors</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"purple"</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"reddish-orange"</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"light green"</span><span class="token punctuation">)</span>
bash$ <span class="token builtin class-name">echo</span> <span class="token variable">\${Colors<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
purple reddish-orange light green
bash$ <span class="token builtin class-name">declare</span> <span class="token operator">|</span> <span class="token function">grep</span> Colors
<span class="token assign-left variable">Colors</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"purple"</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"reddish-orange"</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"light green"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.31,words:93},y:"a",t:"9.2.1 declare 的另类用法"},["/code/shell/part3/09_2_1_another_use_for_declare","/code/shell/part3/09_2_1_another_use_for_declare.md"]],["v-66254658","/code/shell/part3/09_2_typing_variables_declare_or_typeset.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 9.2 变量类型标注：<code>declare</code> 与 <code>typeset</code></h1>
<p><a href="">内建命令</a> <code>declare</code> 和 <code>typeset</code> 是完全相同的命令，其被用于修改变量的属性。相比起一部分编程语言来说，这种修改属于非常弱的类型标注方式[^1]。<code>declare</code> 命令只有在 Bash version 2 及更高版本才能使用，而 <code>typeset</code> 命令可以在 ksh 脚本中运行。</p>
<h2> <code>declare</code>/<code>typeset</code> 命令选项</h2>`,r:{minutes:2.51,words:753},y:"a",t:"9.2 变量类型标注：declare 与 typeset"},["/code/shell/part3/09_2_typing_variables_declare_or_typeset","/code/shell/part3/09_2_typing_variables_declare_or_typeset.md"]],["v-835049c4","/code/shell/part3/09_3_random_generate_random_integer.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 9.3 <code>$RANDOM</code>：生成随机数</h1>
<blockquote>
<p>任何试图通过确定性方法生成随机数的行为都是在犯罪。</p>
<p>—— 约翰·冯·诺伊曼</p>
</blockquote>
<p><code>$RANDOM</code> 是 Bash 中用来生成 0 至 32767 之间随机整数[^1]的一个内置 <a href="">函数</a>（而非常量）。其<strong>不应</strong>被用于生成密钥。</p>
<h4> 样例 9-11. 生成随机数</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># $RANDOM 每一次调用都会返回一个随机的不同的整数。</span>
<span class="token comment"># 随机数的标称范围为 0 - 32767（16位有符号整型）。</span>

<span class="token assign-left variable">MAXCOUNT</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$MAXCOUNT</span> random numbers:"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"-----------------"</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$count</span>"</span> <span class="token parameter variable">-le</span> <span class="token variable">$MAXCOUNT</span> <span class="token punctuation">]</span>      <span class="token comment"># 生成 10 ($MAXCOUNT) 个随机整数。</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$number</span>
  <span class="token builtin class-name">let</span> <span class="token string">"count += 1"</span>  <span class="token comment"># 增加计数。</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">"-----------------"</span>

<span class="token comment"># 如果你需要一个小于指定上界的随机数，可以使用 'modulo' 操作符。</span>
<span class="token comment"># 该操作符可以返回除法后的余数。</span>

<span class="token assign-left variable">RANGE</span><span class="token operator">=</span><span class="token number">500</span>

<span class="token builtin class-name">echo</span>

<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>
<span class="token builtin class-name">let</span> <span class="token string">"number %= <span class="token variable">$RANGE</span>"</span>
<span class="token comment">#           ^^</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Random number less than <span class="token variable">$RANGE</span> --- <span class="token variable">$number</span>"</span>

<span class="token builtin class-name">echo</span>



<span class="token comment">#  如果你需要生成的随机数大于一个指定的下界，</span>
<span class="token comment">#+ 可以增加一步判断，判别并丢弃所有小于下界的数。</span>

<span class="token assign-left variable">FLOOR</span><span class="token operator">=</span><span class="token number">200</span>

<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span>   <span class="token comment"># 初始化</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$number</span>"</span> <span class="token parameter variable">-le</span> <span class="token variable">$FLOOR</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Random number greater than <span class="token variable">$FLOOR</span> --- <span class="token variable">$number</span>"</span>
<span class="token builtin class-name">echo</span>

   <span class="token comment"># 现在来看一种可以代替上面循环的更简单的方式，也就是</span>
   <span class="token comment">#       let "number = $RANDOM + $FLOOR"</span>
   <span class="token comment"># 该方式可以不使用 while 循环，效率更高。</span>
   <span class="token comment"># 但是，该方法可能会产生一些问题，是什么呢？</span>



<span class="token comment"># 通过结合上面的两种方法，可以获得一个特定范围内的随机数。</span>
<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">0</span>   <span class="token comment"># 初始化</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$number</span>"</span> <span class="token parameter variable">-le</span> <span class="token variable">$FLOOR</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>
  <span class="token builtin class-name">let</span> <span class="token string">"number %= <span class="token variable">$RANGE</span>"</span>  <span class="token comment"># 将 $number 缩小至 $RANGE 的范围内。</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Random number between <span class="token variable">$FLOOR</span> and <span class="token variable">$RANGE</span> --- <span class="token variable">$number</span>"</span>
<span class="token builtin class-name">echo</span>



<span class="token comment"># 生成二元选择值，即真(true)或假(false)。</span>
<span class="token assign-left variable">BINARY</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable">T</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token environment constant">$RANDOM</span>

<span class="token builtin class-name">let</span> <span class="token string">"number %= <span class="token variable">$BINARY</span>"</span>
<span class="token comment">#  如果使用    let "number &gt;&gt;= 14"    可以获得更优的随机分布</span>
<span class="token comment">#+ （除了最低位，其余二进制位都右移）。</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$number</span>"</span> <span class="token parameter variable">-eq</span> <span class="token variable">$T</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"TRUE"</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"FALSE"</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span>


<span class="token comment"># 扔一个骰子。</span>
<span class="token assign-left variable">SPOTS</span><span class="token operator">=</span><span class="token number">6</span>   <span class="token comment"># 模 6 的余数范围为 0 - 5。</span>
          <span class="token comment"># 然后加 1 就可以得到期望的范围 1 - 6。</span>
          <span class="token comment"># 感谢 Paulo Marcel Coelho Aragao 简化了代码。</span>
<span class="token assign-left variable">die1</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">die2</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token comment"># 如果设置 SPOTS=7 就可以不用加 1 得到值。这是不是一种更好的方法，为什么？</span>

<span class="token comment"># 为了保证公平，独立的投每一个骰子。</span>

    <span class="token builtin class-name">let</span> <span class="token string">"die1 = <span class="token environment constant">$RANDOM</span> % <span class="token variable">$SPOTS</span> + 1"</span> <span class="token comment"># 投第一个骰子。</span>
    <span class="token builtin class-name">let</span> <span class="token string">"die2 = <span class="token environment constant">$RANDOM</span> % <span class="token variable">$SPOTS</span> + 1"</span> <span class="token comment"># 投第二个骰子。</span>
    <span class="token comment">#  哪一种运算符有更高的优先级，</span>
    <span class="token comment">#+ 取余(%)还是加法(+)？</span>


<span class="token builtin class-name">let</span> <span class="token string">"throw = <span class="token variable">$die1</span> + <span class="token variable">$die2</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Throw of the dice = <span class="token variable">$throw</span>"</span>
<span class="token builtin class-name">echo</span>


<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:13.61,words:4082},y:"a",t:"9.3 $RANDOM：生成随机数"},["/code/shell/part3/09_3_random_generate_random_integer","/code/shell/part3/09_3_random_generate_random_integer.md"]],["v-7583d4e9","/code/shell/part3/09_another_look_at_variables.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第九章 换个角度看变量</h1>
<h3> 本章目录</h3>
<ul>
<li><a href="/code/shell/part3/09_1_internal_variables.html" target="blank">9.1 内部变量</a></li>
<li><a href="/code/shell/part3/09_2_typing_variables_declare_or_typeset.html" target="blank">9.2 变量类型标注：<code>declare</code> 与 <code>typeset</code></a>
<ul>
<li><a href="/code/shell/part3/09_2_1_another_use_for_declare.html" target="blank">9.2.1 <code>declare</code> 的另类用法</a></li>
</ul>
</li>
<li><a href="/code/shell/part3/09_3_random_generate_random_integer.html" target="blank">9.3 <code>$RANDOM</code>：生成随机数</a></li>
</ul>`,r:{minutes:.32,words:95},y:"a",t:"第九章 换个角度看变量"},["/code/shell/part3/09_another_look_at_variables","/code/shell/part3/09_another_look_at_variables.md"]],["v-7d04115f","/code/shell/part3/10_1_1_manipulating_strings_using_awk.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 10.1.1 使用 <code>awk</code> 处理字符串</h1>
<p>在 Bash 脚本中可以调用字符串处理工具 <code>awk</code> 来替换内置的字符串处理操作。</p>
<p>样例 10-6. 使用另一种方式来截取和定位子字符串</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># substring-extraction.sh</span>

<span class="token assign-left variable">String</span><span class="token operator">=</span>23skidoo1
<span class="token comment">#      012345678    Bash</span>
<span class="token comment">#      123456789    awk</span>
<span class="token comment"># 注意不同字符串索引系统：</span>
<span class="token comment"># Bash 中第一个字符的位置为0。</span>
<span class="token comment"># Awk 中第一个字符的位置为1。</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${String<span class="token operator">:</span>2<span class="token operator">:</span>4}</span> <span class="token comment"># 从第3位开始（0-1-2），4个字符的长度</span>
                                         <span class="token comment"># skid</span>

<span class="token comment"># Awk 中与 \${string:pos:length} 等价的是 substr(string,pos,length)。</span>
<span class="token builtin class-name">echo</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'
{ print substr("'</span>"<span class="token variable">\${String}</span><span class="token string">"'"</span>,3,4<span class="token punctuation">)</span>      <span class="token comment"># skid</span>
<span class="token punctuation">}</span>
<span class="token string">'
#  将空的 "echo" 通过管道传递给 awk 作为一个模拟输入，
#+ 这样就不需要提供一个文件名来操作 awk 了。

echo "----"

# 同样的：

echo | awk '</span>
<span class="token punctuation">{</span> print index<span class="token punctuation">(</span><span class="token string">"'"</span><span class="token variable">\${String}</span><span class="token string">"'"</span>, <span class="token string">"skid"</span><span class="token punctuation">)</span>      <span class="token comment"># 3</span>
<span class="token punctuation">}</span>                                           <span class="token comment"># （skid 从第3位开始）</span>
'   <span class="token comment"># 这里使用 awk 等价于 "expr index"。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.74,words:222},y:"a",t:"10.1.1 使用 awk 处理字符串"},["/code/shell/part3/10_1_1_manipulating_strings_using_awk","/code/shell/part3/10_1_1_manipulating_strings_using_awk.md"]],["v-ac3119e6","/code/shell/part3/10_1_2_further_reference.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 10.1.2 参考资料</h1>
<p>更多关于脚本中处理字符串的资料，可以查看 <a href="http://tldp.org/LDP/abs/html/parameter-substitution.html" target="_blank" rel="noopener noreferrer">章节 10.2</a> 以及 <a href="http://tldp.org/LDP/abs/html/moreadv.html#EXPRREF" target="_blank" rel="noopener noreferrer"><code>expr</code></a> 命令的<a href="http://tldp.org/LDP/abs/html/moreadv.html#EXPEXTRSUB" target="_blank" rel="noopener noreferrer">相关章节</a>。</p>`,r:{minutes:.39,words:118},y:"a",t:"10.1.2 参考资料"},["/code/shell/part3/10_1_2_further_reference","/code/shell/part3/10_1_2_further_reference.md"]],["v-aa29fc70","/code/shell/part3/10_1_manipulating_strings.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 10.1 字符串处理</h1>
<p>Bash 支持的字符串操作数量达到了一个惊人的数目。但可惜的是，这些操作工具缺乏一个统一的核心。他们中的一些是<a href="http://tldp.org/LDP/abs/html/parameter-substitution.html#PARAMSUBREF" target="_blank" rel="noopener noreferrer">参数代换</a>的子集，另外一些则是 UNIX 下 <a href="http://tldp.org/LDP/abs/html/moreadv.html#EXPRREF" target="_blank" rel="noopener noreferrer"><code>expr</code></a> 函数的子集。这将会导致语法前后不一致或者功能上出现重叠，更不用说那些可能导致的混乱了。</p>`,r:{minutes:8.9,words:2670},y:"a",t:"10.1 字符串处理"},["/code/shell/part3/10_1_manipulating_strings","/code/shell/part3/10_1_manipulating_strings.md"]],["v-6f0ebce0","/code/shell/part3/10_2_parameter_substitution.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 10.2 参数替换</h1>
<p>参数替换用来处理或扩展变量。</p>
<h3> <code>\${parameter}</code></h3>
<p>等同于 <code>$parameter</code>，是变量 parameter 的值。在一些特定的环境下，只允许使用不易混淆的 <code>\${parameter}</code> 形式。</p>
<p>可以用于连接变量与字符串。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">your_id</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">USER</span>}</span>-on-<span class="token variable">\${<span class="token environment constant">HOSTNAME</span>}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$your_id</span>"</span>
<span class="token comment"># </span>
<span class="token builtin class-name">echo</span> <span class="token string">"Old \\<span class="token environment constant">$PATH</span> = <span class="token environment constant">$PATH</span>"</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span>:/opt/bin  <span class="token comment"># 在脚本执行过程中临时在 $PATH 中加入 /opt/bin。</span>
<span class="token builtin class-name">echo</span> <span class="token string">"New \\<span class="token environment constant">$PATH</span> = <span class="token environment constant">$PATH</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:10.18,words:3053},y:"a",t:"10.2 参数替换"},["/code/shell/part3/10_2_parameter_substitution","/code/shell/part3/10_2_parameter_substitution.md"]],["v-28da4efe","/code/shell/part3/10_manipulating_variables.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第十章 变量处理</h1>
<h3> 本章目录</h3>
<ul>
<li><a href="/code/shell/part3/10_1_manipulating_strings.html" target="blank">10.1 字符串处理</a>
<ul>
<li><a href="/code/shell/part3/10_1_1_manipulating_strings_using_awk.html" target="blank">10.1.1 使用 <code>awk</code> 处理字符串</a></li>
<li><a href="/code/shell/part3/10_1_2_further_reference.html" target="blank">10.1.2 参考资料</a></li>
</ul>
</li>
<li><a href="/code/shell/part3/10_2_parameter_substitution.html" target="blank">10.2 参数替换</a></li>
</ul>`,r:{minutes:.15,words:46},y:"a",t:"第十章 变量处理"},["/code/shell/part3/10_manipulating_variables","/code/shell/part3/10_manipulating_variables.md"]],["v-755f1380","/code/shell/part3/11_1_loops.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 11.1 循环</h1>
<p>循环是当循环控制条件为真时，一系列命令迭代<a href="%E8%BF%AD%E4%BB%A3%EF%BC%9A%E9%87%8D%E5%A4%8D%E6%89%A7%E8%A1%8C%E4%B8%80%E4%B8%AA%E6%88%96%E4%B8%80%E7%BB%84%E5%91%BD%E4%BB%A4%E3%80%82%E9%80%9A%E5%B8%B8%E6%83%85%E5%86%B5%E4%B8%8B%EF%BC%8C%E4%BC%9A%E4%BD%BF%E7%94%A8%60while%60%E6%88%96%E8%80%85%60until%60%E8%BF%9B%E8%A1%8C%E6%8E%A7%E5%88%B6%E3%80%82">^1</a>执行的代码块。</p>`,r:{minutes:14.97,words:4491},y:"a",t:"11.1 循环"},["/code/shell/part3/11_1_loops","/code/shell/part3/11_1_loops.md"]],["v-18a04a46","/code/shell/part3/11_2_nested_loops.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 11.2 嵌套循环</h1>
<p>嵌套循环，顾名思义就是在循环里面还有循环。外层循环会不断的触发内层循环直到外层循环结束。当然，你仍然可以使用 <code>break</code> 可以终止外层或内层的循环。</p>
<p>样例 11-20. 嵌套循环</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># nested-loop.sh: 嵌套 "for" 循环。</span>

<span class="token assign-left variable">outer</span><span class="token operator">=</span><span class="token number">1</span>             <span class="token comment"># 设置外层循环计数器。</span>

<span class="token comment"># 外层循环。</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">a</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> 
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Pass <span class="token variable">$outer</span> in outer loop."</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"---------------------"</span>
  <span class="token assign-left variable">inner</span><span class="token operator">=</span><span class="token number">1</span>           <span class="token comment"># 重设内层循环计数器。</span>
  
  <span class="token comment"># =====================================</span>
  <span class="token comment"># 内层循环。</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">b</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
  <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"Pass <span class="token variable">$inner</span> in inner loop."</span>
    <span class="token builtin class-name">let</span> <span class="token string">"inner+=1"</span>  <span class="token comment"># 增加内层循环计数器。</span>
  <span class="token keyword">done</span>
  <span class="token comment"># 内层循环结束。</span>
  <span class="token comment"># =====================================</span>
  
  <span class="token builtin class-name">let</span> <span class="token string">"outer+=1"</span>    <span class="token comment"># 增加外层循环计数器。</span>
  <span class="token builtin class-name">echo</span>              <span class="token comment"># 在每次外层循环输出中加入空行。</span>
<span class="token keyword">done</span>
<span class="token comment"># 外层循环结束。</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.83,words:249},y:"a",t:"11.2 嵌套循环"},["/code/shell/part3/11_2_nested_loops","/code/shell/part3/11_2_nested_loops.md"]],["v-751027c3","/code/shell/part3/11_3_loop_control.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 11.3 循环控制</h1>
<blockquote>
<p>Tournez cent tours, tournez mille tours,</p>
<p>Tournez souvent et tournez toujours . . .</p>
<p>——保尔·魏尔伦，《木马》</p>
</blockquote>
<p>本节介绍两个会影响循环行为的命令。</p>
<h3> break, continue</h3>
<p><code>break</code> 和 <code>continue</code> 命令[^1]的作用和在其他编程语言中的作用一样。<code>break</code> 用来中止（跳出）循环，而 <code>continue</code> 则是略过未执行的循环部分，直接进行下一次循环。</p>`,r:{minutes:3.62,words:1086},y:"a",t:"11.3 循环控制"},["/code/shell/part3/11_3_loop_control","/code/shell/part3/11_3_loop_control.md"]],["v-8d45377a","/code/shell/part3/11_4_testing_and_branching.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 11.4 测试与分支</h1>
<p><code>case</code> 和 <code>select</code> 结构并不属于循环结构，因为它们并没有反复执行代码块。但是和循环结构相似的是，它们会根据代码块顶部或尾部的条件控制程序流。</p>
<p>下面介绍两种在代码块中控制程序流的方法：</p>
<h3> <code>case (in)</code> / <code>esac</code></h3>
<p>在 shell 脚本中，<code>case</code> 模拟了 C/C++ 语言中的 <code>switch</code>，可以根据条件跳转到其中一个分支。其相当于简写版的 <code>if/then/else</code> 语句。很适合用来创建菜单选项哟！</p>`,r:{minutes:6.43,words:1929},y:"a",t:"11.4 测试与分支"},["/code/shell/part3/11_4_testing_and_branching","/code/shell/part3/11_4_testing_and_branching.md"]],["v-cc33efae","/code/shell/part3/11_loops_and_branches.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第十一章 循环与分支</h1>
<blockquote>
<p>奥赛罗夫人，您为什么把这句话说了又说呢？</p>
<p>—— 《奥赛罗》，莎士比亚</p>
</blockquote>
<h3> 本章目录</h3>
<ul>
<li><a href="/code/shell/part3/11_1_loops.html" target="blank">11.1 循环</a></li>
<li><a href="/code/shell/part3/11_2_nested_loops.html" target="blank">11.2 嵌套循环</a></li>
<li><a href="/code/shell/part3/11_3_loop_control.html" target="blank">11.3 循环控制</a></li>
<li><a href="/code/shell/part3/11_4_testing_and_branching.html" target="blank">11.4 测试与分支</a></li>
</ul>`,r:{minutes:.37,words:112},y:"a",t:"第十一章 循环与分支"},["/code/shell/part3/11_loops_and_branches","/code/shell/part3/11_loops_and_branches.md"]],["v-b6223f7e","/code/shell/part3/12_command_substitution.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第十二章 命令替换</h1>
<p>命令替换重新指定一个[^1]或多个命令的输出。其实就是将命令的输出导到另外一个地方<a href="%E4%BB%8E%E6%8A%80%E6%9C%AF%E7%9A%84%E8%A7%92%E5%BA%A6%E6%9D%A5%E8%AE%B2%EF%BC%8C%E5%91%BD%E4%BB%A4%E6%9B%BF%E6%8D%A2%E5%AE%9E%E9%99%85%E4%B8%8A%E6%98%AF%E8%8E%B7%E5%BE%97%E4%BA%86%E5%91%BD%E4%BB%A4%E8%BE%93%E5%87%BA%E5%88%B0%E6%A0%87%E5%87%86%E8%BE%93%E5%87%BA%E7%9A%84%E7%BB%93%E6%9E%9C%EF%BC%8C%E7%84%B6%E5%90%8E%E9%80%9A%E8%BF%87%E8%B5%8B%E5%80%BC%E5%8F%B7%E5%B0%86%E7%BB%93%E6%9E%9C%E8%B5%8B%E5%80%BC%E7%BB%99%E4%B8%80%E4%B8%AA%E5%8F%98%E9%87%8F%E3%80%82">^2</a>。</p>`,r:{minutes:6.87,words:2060},y:"a",t:"第十二章 命令替换"},["/code/shell/part3/12_command_substitution","/code/shell/part3/12_command_substitution.md"]],["v-39f65eae","/code/shell/part3/13_arithmetic_expansion.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第十三章 算术扩展</h1>
<p>算术扩展为脚本中的（整数）算术操作提供了强有力的工具。你可以使用反引号、双圆括号或者 <code>let</code> 将字符串转换为数学表达式。</p>
<h3> 差异比较</h3>
<h4> 使用 <a href="http://tldp.org/LDP/abs/html/commandsub.html#BACKQUOTESREF" target="_blank" rel="noopener noreferrer">反引号</a> 的算术扩展（通常与 <a href="http://tldp.org/LDP/abs/html/moreadv.html#EXPRREF" target="_blank" rel="noopener noreferrer"><code>expr</code></a> 一起使用）</h4>`,r:{minutes:1.1,words:331},y:"a",t:"第十三章 算术扩展"},["/code/shell/part3/13_arithmetic_expansion","/code/shell/part3/13_arithmetic_expansion.md"]],["v-71241d52","/code/shell/part3/",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第三部分 shell进阶</h1>
<h3> 目录</h3>
<ul>
<li><a href="/code/shell/part3/09_another_look_at_variables.html" target="blank">9. 换个角度看变量</a>
<ul>
<li><a href="/code/shell/part3/09_1_internal_variables.html" target="blank">9.1 内部变量</a></li>
<li><a href="/code/shell/part3/09_2_typing_variables_declare_or_typeset.html" target="blank">9.2 变量类型标注：<code>declare</code> 与 <code>typeset</code></a>
<ul>
<li><a href="/code/shell/part3/09_2_1_another_use_for_declare.html" target="blank">9.2.1 <code>declare</code> 的另类用法</a></li>
</ul>
</li>
<li><a href="/code/shell/part3/09_3_random_generate_random_integer.html" target="blank">9.3 <code>$RANDOM</code>：生成随机数</a></li>
</ul>
</li>
<li><a href="/code/shell/part3/10_manipulating_variables.html" target="blank">10. 变量处理</a>
<ul>
<li><a href="/code/shell/part3/10_1_manipulating_strings.html" target="blank">10.1 字符串处理</a>
<ul>
<li><a href="/code/shell/part3/10_1_1_manipulating_strings_using_awk.html" target="blank">10.1.1 使用 <code>awk</code> 处理字符串</a></li>
<li><a href="/code/shell/part3/10_1_2_further_reference.html" target="blank">10.1.2 参考资料</a></li>
</ul>
</li>
<li><a href="/code/shell/part3/10_2_parameter_substitution.html" target="blank">10.2 参数替换</a></li>
</ul>
</li>
<li><a href="/code/shell/part3/11_loops_and_branches.html" target="blank">11. 循环与分支</a>
<ul>
<li><a href="/code/shell/part3/11_1_loops.html" target="blank">11.1 循环</a></li>
<li><a href="/code/shell/part3/11_2_nested_loops.html" target="blank">11.2 嵌套循环</a></li>
<li><a href="/code/shell/part3/11_3_loop_control.html" target="blank">11.3 循环控制</a></li>
<li><a href="/code/shell/part3/11_4_testing_and_branching.html" target="blank">11.4 测试与分支</a></li>
</ul>
</li>
<li><a href="/code/shell/part3/12_command_substitution.html" target="blank">12. 命令替换</a></li>
<li><a href="/code/shell/part3/13_arithmetic_expansion.html" target="blank">13. 算术扩展</a></li>
<li><a href="/code/shell/part3/14_recess_time.html" target="blank">14. 休息时间</a></li>
</ul>`,r:{minutes:.47,words:140},y:"a",t:"第三部分 shell进阶"},["/code/shell/part3/index.html","/code/shell/part3/readme.md"]],["v-04de7f18","/code/shell/part5/18_1_a_brief_introduction_to_regular_expressions.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 18.1 正则表达式简介</h1>
<p>正则表达式是一系列的字符串。这些包含超过其字面含义的字符串被称之为元字符。例如，一个符号前面的引用符代表一个人的言语能力，或者按照上面的说法，代表着meta-meaning<a href="http://tldp.org/LDP/abs/html/x17129.html#FTN.AEN17134" target="_blank" rel="noopener noreferrer">[1]</a>。正则表达式是一组字符串和（或者）一组匹配（特定的）模式的元字符。</p>
<p>一个正则表达式包含下面的一个或多个选项：</p>
<ul>
<li>一组字符串。这是仅仅表示字面意思的字符串。最简单形式的正则表达式仅仅包含一组字符串。</li>
<li>一个锚字符。锚节点指定了正则表达式在一行文本中的匹配位置。例如，^和$就是锚字符。</li>
<li>修饰符。修饰符扩展或者限定（修改）了正则表达式在文本中的匹配范围。修饰符包括星号、方括号和反斜线。</li>
</ul>`,r:{minutes:3.98,words:1193},y:"a",t:"18.1 正则表达式简介"},["/code/shell/part5/18_1_a_brief_introduction_to_regular_expressions","/code/shell/part5/18_1_a_brief_introduction_to_regular_expressions.md"]],["v-2ca54d11","/code/shell/part5/18_2_globbing.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 18.2文件名替换</h1>
`,r:{minutes:.04,words:12},y:"a",t:"18.2文件名替换"},["/code/shell/part5/18_2_globbing","/code/shell/part5/18_2_globbing.md"]],["v-731951cc","/code/shell/part5/18_3_regular_expression_comparison_table.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 18.3 正则表达式对照表</h1>
<p>正则表达式分为三类（man grep可以看到，分别是basic RegExs，extended RegExs，perl RegExs）</p>
<h2> 正则表达式分类：</h2>
<ul>
<li>基本的正则表达式（Basic Regular Expression 又叫 Basic RegEx 简称 BREs）</li>
<li>扩展的正则表达式（Extended Regular Expression 又叫 Extended RegEx 简称 EREs）</li>
<li>Perl 的正则表达式（Perl Regular Expression 又叫 Perl RegEx 简称 PREs）</li>
</ul>`,r:{minutes:15.16,words:4548},y:"a",t:"18.3 正则表达式对照表"},["/code/shell/part5/18_3_regular_expression_comparison_table","/code/shell/part5/18_3_regular_expression_comparison_table.md"]],["v-04066f84","/code/shell/part5/18_regular_expressions.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 18 正则表达式</h1>
<blockquote>
<p><em>...the intellectual activity associated with software development is largely one of gaining insight.</em>
<em>--Stowe Boyd</em></p>
</blockquote>
<p>目录</p>
<ul>
<li><a href="http://tldp.org/LDP/abs/html/x17129.html" target="_blank" rel="noopener noreferrer">18.1 正则表达式简介</a></li>
<li><a href="http://tldp.org/LDP/abs/html/globbingref.html" target="_blank" rel="noopener noreferrer">18.2 文件名替换</a></li>
</ul>`,r:{minutes:.42,words:126},y:"a",t:"18 正则表达式"},["/code/shell/part5/18_regular_expressions","/code/shell/part5/18_regular_expressions.md"]],["v-17e5f48e","/code/shell/part5/19_here_documents.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 19 嵌入文档</h1>
<blockquote class="blockquote-center">Here and now, boys.
    --Aldous Huxley, Island</blockquote>
<p>嵌入文档是一段有特殊作用的代码块，它用 <a href="http://tldp.org/LDP/abs/html/io-redirection.html#IOREDIRREF" target="_blank" rel="noopener noreferrer">I/O 重定向</a> 在交互程序和交互命令中传递和反馈一个命令列表，例如 <a href="http://tldp.org/LDP/abs/html/communications.html#FTPREF" target="_blank" rel="noopener noreferrer">ftp</a>，<a href="http://tldp.org/LDP/abs/html/basic.html#CATREF" target="_blank" rel="noopener noreferrer">cat</a> 或者是 ex 文本编辑器</p>`,r:{minutes:10.32,words:3097},y:"a",t:"19 嵌入文档"},["/code/shell/part5/19_here_documents","/code/shell/part5/19_here_documents.md"]],["v-d54a4614","/code/shell/part5/20_1_use_exec.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 20.1 使用 exec</h1>
<p>一个 <code>exec &lt; filename</code> 命令重定向了 <code>标准输入</code> 到一个文件。自此所有 <code>标准输入</code> 都来自该文件而不是默认来源(通常是键盘输入)。在使用 <a href="http://tldp.org/LDP/abs/html/sedawk.html#SEDREF" target="_blank" rel="noopener noreferrer">sed</a> 和 <a href="http://tldp.org/LDP/abs/html/awk.html#AWKREF" target="_blank" rel="noopener noreferrer">awk</a> 时候这种方式可以逐行读文件并逐行解析。</p>`,r:{minutes:3.12,words:935},y:"a",t:"20.1 使用 exec"},["/code/shell/part5/20_1_use_exec","/code/shell/part5/20_1_use_exec.md"]],["v-c42e271a","/code/shell/part5/20_2_redirecting_code_blocks.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 20.2 重定向代码块</h1>
<p>有如 <a href="http://tldp.org/LDP/abs/html/loops1.html#WHILELOOPREF" target="_blank" rel="noopener noreferrer">while</a>, <a href="http://tldp.org/LDP/abs/html/loops1.html#FORLOOPREF1" target="_blank" rel="noopener noreferrer">until</a>, 和 <a href="http://tldp.org/LDP/abs/html/loops1.html#UNTILLOOPREF" target="_blank" rel="noopener noreferrer">for</a> 循环, 甚至 <a href="http://tldp.org/LDP/abs/html/tests.html#IFTHEN" target="_blank" rel="noopener noreferrer">if/then</a> 也可以重定向 标准输入 测试代码块. 甚至连一个函数都可以用这个方法进行重定向 (见 <a href="http://tldp.org/LDP/abs/html/complexfunct.html#REALNAME" target="_blank" rel="noopener noreferrer">样例 24-11</a>).  代码块的末尾部分的 "&lt;" 就是用来完成这个的.</p>`,r:{minutes:4.61,words:1382},y:"a",t:"20.2 重定向代码块"},["/code/shell/part5/20_2_redirecting_code_blocks","/code/shell/part5/20_2_redirecting_code_blocks.md"]],["v-4a7628de","/code/shell/part5/20_3_applications.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 20.3 应用程序</h1>
<p>使用 I/O 重定向可以同时解析和固定命令输出的片段(see <a href="http://tldp.org/LDP/abs/html/internal.html#READREDIR" target="_blank" rel="noopener noreferrer">样例 15-7</a>). 这也使得可以生成报告和日志文件.</p>
<p>样例 20-12. 日志记录事件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# logevents.sh
# 作者: Stephane Chazelas.
# 用于 ABS 许可指南.

# 事件记录到文件.
# 必须 root 身份执行 (可以写入 /var/log).

ROOT_UID=0     # 只有 $UID 为 0 的用户具有 root 权限.
E_NOTROOT=67   # 非 root 会报错.


if [ "$UID" -ne "$ROOT_UID" ]
then
  echo "Must be root to run this script."
  exit $E_NOTROOT
fi  


FD_DEBUG1=3
FD_DEBUG2=4
FD_DEBUG3=5

# === 取消下面两行注释来激活脚本. ===
# LOG_EVENTS=1
# LOG_VARS=1


log()  # 时间和日期写入日志文件.
{
echo "$(date)  $*" &gt;&amp;7     # *追加* 日期到文件.
#     ^^^^^^^  命令替换
                           # 见下文.
}



case $LOG_LEVEL in
 1) exec 3&gt;&amp;2         4&gt; /dev/null 5&gt; /dev/null;;
 2) exec 3&gt;&amp;2         4&gt;&amp;2         5&gt; /dev/null;;
 3) exec 3&gt;&amp;2         4&gt;&amp;2         5&gt;&amp;2;;
 *) exec 3&gt; /dev/null 4&gt; /dev/null 5&gt; /dev/null;;
esac

FD_LOGVARS=6
if [[ $LOG_VARS ]]
then exec 6&gt;&gt; /var/log/vars.log
else exec 6&gt; /dev/null                     # 清空输出.
fi

FD_LOGEVENTS=7
if [[ $LOG_EVENTS ]]
then
  # exec 7 &gt;(exec gawk '{print strftime(), $0}' &gt;&gt; /var/log/event.log)
  # 上述行在最近高于 bash 2.04 版本会失败，为什么?
  exec 7&gt;&gt; /var/log/event.log              # 追加到 "event.log".
  log                                      # 写入时间和日期.
else exec 7&gt; /dev/null                     # 清空输出.
fi

echo "DEBUG3: beginning" &gt;&amp;\${FD_DEBUG3}

ls -l &gt;&amp;5 2&gt;&amp;4                             # 命令1 &gt;&amp;5 2&gt;&amp;4

echo "Done"                                # 命令2 

echo "sending mail" &gt;&amp;\${FD_LOGEVENTS}
# 输出信息 "sending mail" 到文件描述符 #7.


exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.16,words:349},y:"a",t:"20.3 应用程序"},["/code/shell/part5/20_3_applications","/code/shell/part5/20_3_applications.md"]],["v-53c8880c","/code/shell/part5/20_io_redirection.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 20 I/O 重定向</h1>
<p>目录</p>
<ul>
<li><a href="http://tldp.org/LDP/abs/html/x17974.html" target="_blank" rel="noopener noreferrer">20.1 使用 exec</a></li>
<li><a href="http://tldp.org/LDP/abs/html/redircb.html" target="_blank" rel="noopener noreferrer">20.2 重定向代码块</a></li>
<li><a href="http://tldp.org/LDP/abs/html/redirapps.html" target="_blank" rel="noopener noreferrer">20.3 应用程序</a></li>
</ul>`,r:{minutes:6.01,words:1803},y:"a",t:"20 I/O 重定向"},["/code/shell/part5/20_io_redirection","/code/shell/part5/20_io_redirection.md"]],["v-5aad7141","/code/shell/part5/21_subshells.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第二十一章 子shell</h1>
<p>运行一个shell脚本会启动一个新的进程，即<em>子shell</em>。</p>
<p><strong>定义</strong>： 一个<em>子shell</em>是由一个shell（或<em>shell脚本</em>）触发的<a href="http://tldp.org/LDP/abs/html/othertypesv.html#CHILDREF2" target="_blank" rel="noopener noreferrer">子进程</a>。</p>
<p>一个子shell是命令处理器（-- 在终端或者<em>xtrem</em>窗口给出提示符的<em>shell</em>）的一个独立的例子。正如你的命令在命令行提示符处被理解执行一样，一个脚本<a href="http://tldp.org/LDP/abs/html/timedate.html#BATCHPROCREF" target="_blank" rel="noopener noreferrer">批处理</a>一组命令。每一个shell脚本运行实际上是<a href="http://tldp.org/LDP/abs/html/internal.html#FORKREF" target="_blank" rel="noopener noreferrer">父</a>shell的一个支线进程（<em>子进程</em>）。</p>`,r:{minutes:5.35,words:1605},y:"a",t:"第二十一章 子shell"},["/code/shell/part5/21_subshells","/code/shell/part5/21_subshells.md"]],["v-ab5e1508","/code/shell/part5/22_Restricted_Shells.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第二十二章. 限制模式的Shell</h1>
<h4> 限制模式下被禁用的命令</h4>
<ul>
<li>在限制模式下运行一个脚本或部分脚本将禁用一些命令，尽管这些命令在正常模式下是可用的。这是个安全措施，可以限制脚本用户的权限，减少运行脚本可能带来的损害。</li>
</ul>
<p>被禁用的命令和功能：</p>
<ul>
<li>使用 cd 来改变工作目录。</li>
<li>修改 $PATH, $SHELL, $BASH_ENV 或 $ENV 等<a href="http://tldp.org/LDP/abs/html/othertypesv.html#ENVREF" target="_blank" rel="noopener noreferrer">环境变量</a></li>
<li>读取或修改 $SHELLOPTS，shell环境选项。</li>
<li>输出重定向。</li>
<li>调用包含 / 的命令。</li>
<li>调用 <a href="http://tldp.org/LDP/abs/html/internal.html#EXECREF" target="_blank" rel="noopener noreferrer">exec</a> 来替代shell进程。</li>
<li>其他各种会造成混乱或颠覆脚本用途的命令。</li>
<li>在脚本中跳出限制模式。</li>
</ul>`,r:{minutes:1.25,words:375},y:"a",t:"第二十二章. 限制模式的Shell"},["/code/shell/part5/22_Restricted_Shells","/code/shell/part5/22_Restricted_Shells.md"]],["v-0f5fa4fa","/code/shell/part5/23_Process_Substitution.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第二十三章. 进程替换</h1>
<p>用<a href="http://tldp.org/LDP/abs/html/special-chars.html#PIPEREF" target="_blank" rel="noopener noreferrer">管道</a> 将一个命令的 <code>标准输出</code> 输送到另一个命令的 <code>标准输入</code> 是个强大的技术。但是如果你需要用管道输送多个命令的 <code>标准输出</code> 怎么办？这时候 <em>进程替换</em> 就派上用场了。</p>
<p><em>进程替换</em> 把一个（或多个）<a href="http://tldp.org/LDP/abs/html/special-chars.html#PROCESSREF" target="_blank" rel="noopener noreferrer">进程</a> 的输出送到另一个进程的 <code>标准输入</code>。</p>`,r:{minutes:5.14,words:1542},y:"a",t:"第二十三章. 进程替换"},["/code/shell/part5/23_Process_Substitution","/code/shell/part5/23_Process_Substitution.md"]],["v-81126a72","/code/shell/part5/24_1_complex_functions_and_function_complexities.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 24.1 复杂函数和函数复杂性</h1>
<p>函数可以处理传递给它的参数，并且能返回它的<a href="http://tldp.org/LDP/abs/html/exit-status.html#EXITSTATUSREF" target="_blank" rel="noopener noreferrer">退出状态码</a>给脚本，以便后续处理。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function_name $arg1 $arg2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:11.04,words:3311},y:"a",t:"24.1 复杂函数和函数复杂性"},["/code/shell/part5/24_1_complex_functions_and_function_complexities","/code/shell/part5/24_1_complex_functions_and_function_complexities.md"]],["v-66790dab","/code/shell/part5/24_2_local_variables.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 24.2 局部变量</h1>
<p>怎样使一个变量变成“局部”变量？</p>
<p>局部变量
如果变量用local来声明，那么它就只能够在该变量被声明的<a href="http://tldp.org/LDP/abs/html/special-chars.html#CODEBLOCKREF" target="_blank" rel="noopener noreferrer">代码块</a>中可见。 这个代码块就是局部<a href="http://tldp.org/LDP/abs/html/subshells.html#SCOPEREF" target="_blank" rel="noopener noreferrer">范围</a>。 在一个函数中，一个局部变量只有在函数代码中才有意义.<a href="http://tldp.org/LDP/abs/html/localvar.html#FTN.AEN18568" target="_blank" rel="noopener noreferrer">[1]</a></p>`,r:{minutes:5.18,words:1555},y:"a",t:"24.2 局部变量"},["/code/shell/part5/24_2_local_variables","/code/shell/part5/24_2_local_variables.md"]],["v-092fc61e","/code/shell/part5/24_3_recursion_without_local_variables.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 24.3 不使用局部变量的递归</h1>
<p>即使不适用局部变量，函数也可以递归的调用自身。</p>
<h2> 斐波那契序列</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# fibo.sh : 斐波那契序列 (递归)
# 作者: M. Cooper
# License: GPL3

# ----------算法--------------
# Fibo(0) = 0
# Fibo(1) = 1
# else
#   Fibo(j) = Fibo(j-1) + Fibo(j-2)
# ---------------------------------

MAXTERM=15       # 要产生的计算次数。
MINIDX=2         # 如果下标小于2，那么 Fibo(idx) = idx.

Fibonacci ()
{
    idx=$1   # 不需要是局部变量，为什么？
    if [ "$idx" -lt "$MINIDX" ]
    then
        echo "$idx"  # 前两个下标是0和1 ... 从上面的算法可以看出来。
    else
        (( --idx ))  # j-1
        term1=$( Fibonacci $idx )   #  Fibo(j-1)
        (( --idx ))  # j-2
        term2=$( Fibonacci $idx )   #  Fibo(j-2)
        echo $(( term1 + term2 ))
    fi
    #  一个丑陋的实现
    #  C语言里，一个更加优雅的斐波那契递归实现
    #+ 是一个简单的只需要7-10代码的算法翻译。
}

for i in $(seq 0 $MAXTERM)
do  # 计算 $MAXTERM+1 次.
    FIBO=$(Fibonacci $i)
    echo -n "$FIBO "
done
# 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610
# 要花费一段时间，不是么？ 一个递归脚本是有些慢的。

echo

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.95,words:884},y:"a",t:"24.3 不使用局部变量的递归"},["/code/shell/part5/24_3_recursion_without_local_variables","/code/shell/part5/24_3_recursion_without_local_variables.md"]],["v-09c92e74","/code/shell/part5/24_functions.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 24 函数</h1>
<h3> 本章目录</h3>
<ul>
<li><a href="/code/shell/part5/24_1_complex_functions_and_function_complexities.html" target="blank">24.1 复杂函数和函数复杂性</a></li>
<li><a href="/code/shell/part5/24_2_local_variables.html" target="blank">24.2 局部变量</a></li>
<li><a href="/code/shell/part5/24_3_recursion_without_local_variables.html" target="blank">24.3 不使用局部变量的递归</a></li>
</ul>`,r:{minutes:4.49,words:1348},y:"a",t:"24 函数"},["/code/shell/part5/24_functions","/code/shell/part5/24_functions.md"]],["v-ac2eca3c","/code/shell/part5/25_aliases.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 25. 别名</h1>
<p>Bash <code>别名</code> 本质上不外乎是键盘上的快捷键，缩写呢是避免输入很长的命令串的一种手段.举个例子, 在 <a href="http://tldp.org/LDP/abs/html/sample-bashrc.html" target="_blank" rel="noopener noreferrer">~/.bashrc</a> 文件中包含别名 <code>lm="ls -l | more</code>, 而后每个命令行输入的 lm <a href="http://tldp.org/LDP/abs/html/aliases.html#FTN.AEN18669" target="_blank" rel="noopener noreferrer">[1]</a> 将会自动被替换成 <code>ls -l | more</code>. 这可以节省大量的命令行输入和避免记住复杂的命令和选项. 设定别名 <code>rm="rm -i"</code> (交互的删除模式) 防止无意的删除重要文件，也许可以少些悲痛.</p>`,r:{minutes:2.57,words:770},y:"a",t:"25. 别名"},["/code/shell/part5/25_aliases","/code/shell/part5/25_aliases.md"]],["v-418229bc","/code/shell/part5/26_List_Constructs.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 26. 列表结构</h1>
<p><em>and 列表</em> 和 <em>or 列表</em> 结构提供了连续执行若干命令的方法，可以有效地替换复杂的嵌套 <a href="http://tldp.org/LDP/abs/html/testconstructs.html#TESTCONSTRUCTS1" target="_blank" rel="noopener noreferrer">if/then</a> ，甚至 <a href="http://tldp.org/LDP/abs/html/testbranch.html#CASEESAC1" target="_blank" rel="noopener noreferrer">case</a> 语句。</p>`,r:{minutes:4.17,words:1251},y:"a",t:"26. 列表结构"},["/code/shell/part5/26_List_Constructs","/code/shell/part5/26_List_Constructs.md"]],["v-34bd49ba","/code/shell/part5/27_arrays.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 27 数组</h1>
<p>新版本的Bash支持一维数组。 数组元素可以使用符号<strong>variable[xx]</strong> 来初始化。另外，脚本可以使用<strong>declare -a variable</strong>语句来制定一个数组。 如果想引用一个数组元素（也就是取值），可以使用大括号，访问形式为 \${element[xx]} 。</p>
<p>例子 27-1. 简单的数组使用</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

area[11]=23
area[13]=37
area[51]=UFOs

#  数组成员不一定非得是相邻或连续的。

#  数组的部分成员可以不被初始化。
#  数组中允许空缺元素。
#  实际上，保存着稀疏数据的数组（“稀疏数组”） 
#+ 在电子表格处理软件中是非常有用的。

echo -n "area[11] = "
echo \${area[11]}    #  需要{大括号}。

echo -n "area[13] = "
echo \${area[13]}

echo "Contents of area[51] are \${area[51]}."

# 没被初始化的数组成员打印为空值（null变量）。
echo -n "area[43] = "
echo \${area[43]}
echo "(area[43] unassigned)"

echo

# 两个数组元素的和被赋值给另一个数组元素。
area[5]=\`expr \${area[11]} + \${area[13]}\`
echo "area[5] = area[11] + area[13]"
echo -n "area[5] = "
echo \${area[5]}

area[6]=\`expr \${area[11]} + \${area[51]}\`
echo "area[6] = area[11] + area[51]"
echo -n "area[6] = "
echo \${area[6]}
# 这里会失败，是因为不允许整数与字符串相加。

echo; echo; echo

# -----------------------------------------------------------------
# 另一个数组, "area2".

# 另一种给数组变量赋值的方法...
# array_name=( XXX YYY ZZZ ... )

area2=( zero one two three four )

echo -n "area2[0] = "
echo \${area2[0]}
# 啊哈，从0开始计算数组下标（也就是，数组的第一个元素为[0],而不是[1]).

echo -n "area2[1] = "
echo \${area2[1]}    # [1] 是数组的第二个元素。
# -----------------------------------------------------------------

echo; echo; echo

# -----------------------------------------------
# 第三个数组， "area3".
# 另外一种给数组元素赋值的方法...
# array_name=([xx]=XXX [yy]=YYY ...)

area3=([17]=seventeen [24]=twenty-four)

echo -n "area3[17] = "
echo \${area3[17]}

echo -n "area3[24] = "
echo \${area3[24]}
# -----------------------------------------------

exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:31.24,words:9373},y:"a",t:"27 数组"},["/code/shell/part5/27_arrays","/code/shell/part5/27_arrays.md"]],["v-4d92bb04","/code/shell/part5/30_network_programming.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 30 网络编程</h1>
<blockquote class="blockquote-center">The Net's a cross between an elephant and a white elephant sale: it never forgets, and it's always crap.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--Nemo</blockquote>`,r:{minutes:2.87,words:862},y:"a",t:"30 网络编程"},["/code/shell/part5/30_network_programming","/code/shell/part5/30_network_programming.md"]],["v-ae8f4894","/code/shell/part5/32_Debugging.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 32 调试</h1>
<blockquote class="blockquote-center">
调试代码要比写代码困难两倍。因此，你写代码时越多的使用奇技淫巧（自做聪明），顾名思义，你越难以调试它。    --Brian Kernighan
</blockquote>
<p>Bash shell中不包含内置的debug工具，甚至没有调试专用的命令和结构。当调试非功能脚本，产生语法错误或者有错别字时，往往是无用的错误提示消息。</p>
<p>例子 32-1. 一个错误脚本</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# ex74.sh

# 这是一个错误脚本，但是它错在哪？

a=37

if [$a -gt 27 ]
then
  echo $a
fi  

exit $?   # 0! 为什么?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.94,words:2683},y:"a",t:"32 调试"},["/code/shell/part5/32_Debugging","/code/shell/part5/32_Debugging.md"]],["v-5d30fe45","/code/shell/part5/33_options.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 33 选项</h1>
<p>选项用来更改shell和脚本的行为.</p>
<p><a href="http://tldp.org/LDP/abs/html/internal.html#SETREF" target="_blank" rel="noopener noreferrer">set</a>命令用来打开脚本中的选项. 你可以在脚本中任何你想让选项生效的地方插入<strong>set -o option-name</strong>, 或者使用更简单的形式, <strong>set -option-abbrev</strong>. 这两种形式是等价的.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

set -o verbose
# # 打印出所有执行前的命令.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.3,words:989},y:"a",t:"33 选项"},["/code/shell/part5/33_options","/code/shell/part5/33_options.md"]],["v-75f467df","/code/shell/part5/34_Gotchas.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第34章 陷阱</h1>
<blockquote>
<p>Turandot: Gli enigmi sono tre, la morte una!
Caleph: No, no! Gli enigmi sono tre, una la vita!</p>
</blockquote>
<blockquote>
<p>——Puccini</p>
</blockquote>
<h3> 以下的做法（非推荐）将让你原本平淡无奇的生活激动不已。</h3>
<ul>
<li>将保留字或特殊字符声明为变量名。</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">case</span><span class="token operator">=</span>value0       <span class="token comment"># 引发错误。</span>
<span class="token assign-left variable">23skidoo</span><span class="token operator">=</span>value1   <span class="token comment"># 也会引发错误。</span>
<span class="token comment"># 以数字开头的变量名是被shell保留使用的。</span>
<span class="token comment"># 试试_23skidoo=value1。以下划线开头的变量名就没问题.</span>

<span class="token comment"># 然而 . . .   只用一个下划线作为变量名就不行。</span>
<span class="token assign-left variable">_</span><span class="token operator">=</span><span class="token number">25</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$_</span>           <span class="token comment"># $_是一个特殊变量, 代表最后一个命令的最后一个参数。</span>
<span class="token comment"># 但是，_是一个有效的函数名！</span>

xyz<span class="token punctuation">((</span><span class="token operator">!</span>*<span class="token operator">=</span>value2    <span class="token comment"># 引起严重的错误。</span>
<span class="token comment"># Bash3.0之后，标点不能出现在变量名中。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:11.54,words:3463},y:"a",t:"第34章 陷阱"},["/code/shell/part5/34_Gotchas","/code/shell/part5/34_Gotchas.md"]],["v-f6621c66","/code/shell/part5/36_10_shell_scripting_under_windows.html",{d:1681909711e3,y:"a",t:""},["/code/shell/part5/36_10_shell_scripting_under_windows","/code/shell/part5/36_10_shell_scripting_under_windows.md"]],["v-719f9d3f","/code/shell/part5/36_11_ssh_remote_operate.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<p>sh远程脚本
expect非交互式</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/expect  
set timeout 30  
spawn ssh -l username 192.168.1.1  
expect "password:"  
send "ispass\\r"  
interact  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.02,words:607},y:"a",t:""},["/code/shell/part5/36_11_ssh_remote_operate","/code/shell/part5/36_11_ssh_remote_operate.md"]],["v-6bf8603e","/code/shell/part5/36_1_interactive_and_non-interactive_shells_and_scripts.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 36.1 交互和非交互shell以及脚本</h1>
<p>交互shell从tty读取用户输入。shell默认会读取启动文件，显示提示符和打开任务控制等。用户可以和shell交互。</p>
<p>脚本总是运行在非交互的shell上。同样，脚本可以访问它自己的tty，这使得在脚本中依然可以模拟出交互的shell。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
MY_PROMPT='$ '
while :
    do
        echo -n "$MY_PROMPT"
        read line
        eval "$line"
    done

exit 0

# 这个脚本以及以上解释是由Stéphane Chazelas提供的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.64,words:792},y:"a",t:"36.1 交互和非交互shell以及脚本"},["/code/shell/part5/36_1_interactive_and_non-interactive_shells_and_scripts","/code/shell/part5/36_1_interactive_and_non-interactive_shells_and_scripts.md"]],["v-34aff614","/code/shell/part5/36_2_shell_wrappers.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 36.2 shell wrappers</h1>
<p>wrapper是一个包含系统命令和工具的脚本，脚本会把一些参数传递给这些（脚本内的）命令。将一个复杂的命令封装成一个wrapper是为了调用它时比较简单好记，特别在使用sed和awk命令时会这么做。</p>
<p>sed或awk脚本通常在命令行下调用时是sed -e '命令'或者awk '命令'。在Bash脚本中嵌入这些命令会让它们在调用时很简单，并且能够被重用。使用这种方法可以将sed和awk的优势统一起来，比如将sed命令处理的结果通过管道传递给awk继续处理。将这些保存成为一个可执行文件，你可以重复调用它的原始版本或者修改版本，而不用在命令行里反复敲冗长的命令。</p>`,r:{minutes:6.36,words:1908},y:"a",t:"36.2 shell wrappers"},["/code/shell/part5/36_2_shell_wrappers","/code/shell/part5/36_2_shell_wrappers.md"]],["v-5c17fa36","/code/shell/part5/36_3_tests_and_comparisons_alternatives.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 36.3 测试和比较的其他方法</h1>
<p>对于判断（test命令）来说，[[ ]]比[ ]更加合适。同样的，算数运算符（译注：-eq之类的）比(( ))更有优势。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a=8

# 下面所有这些比较的结果都应该是相等的
test "$a" -lt 16 &amp;&amp; echo "yes, $a &lt; 16"         # "and list"
/bin/test "$a" -lt 16 &amp;&amp; echo "yes, $a &lt; 16" 
[ "$a" -lt 16 ] &amp;&amp; echo "yes, $a &lt; 16" 
[[ $a -lt 16 ]] &amp;&amp; echo "yes, $a &lt; 16"          # 为表达式添加
(( a &lt; 16 )) &amp;&amp; echo "yes, $a &lt; 16"             # [[ ]]和(( ))并不是必须的

city="New York"
# 下面这些结果也是相等的
test "$city" \\&lt; Paris &amp;&amp; echo "Yes, Paris is greater than $city"
                                  # ASCII字符比较
/bin/test "$city" \\&lt; Paris &amp;&amp; echo "Yes, Paris is greater than $city" 
[ "$city" \\&lt; Paris ] &amp;&amp; echo "Yes, Paris is greater than $city" 
[[ $city &lt; Paris ]] &amp;&amp; echo "Yes, Paris is greater than $city"
                                  # 并不需要为$city变量加引号。

# 向S.C.致谢
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.64,words:193},y:"a",t:"36.3 测试和比较的其他方法"},["/code/shell/part5/36_3_tests_and_comparisons_alternatives","/code/shell/part5/36_3_tests_and_comparisons_alternatives.md"]],["v-95fb4b80","/code/shell/part5/36_4_recursion_a_script_calling_itself.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 36.4 递归：可以调用自己的脚本</h1>
<p>脚本可以递归的调用自己吗？答案是肯定的。</p>
<h2> Example 36-10. 可以调用自己的脚本（但没什么实际用途）</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash
# recurse.sh

# 脚本可以调用自己吗？
# 其实是可以的。但这样有什么实际用途吗？
# （请往下看）

RANGE=10
MAXVAL=9

i=$RANDOM
let "i %= $RANGE"  # 在0到$RANGE - 1的范围内产生一个随机数

if [ "$i" -lt "$MAXVAL" ]
then
    echo "i = $i"
    ./$0           # 脚本进行递归调用（调用自己）
fi                 # 每次被调用的脚本做同样的事情，直到$i和$MAXVAL相等。 

# 如果使用“while”循环代替“if/then”语句会出问题。请试着解释为什么。

exit 0

# 笔记:
# ----
# 这个脚本文件必须有可执行权限。
# 即使使用“sh”命令调用，这脚本也可以执行。
# 请解释原因。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.03,words:909},y:"a",t:"36.4 递归：可以调用自己的脚本"},["/code/shell/part5/36_4_recursion_a_script_calling_itself","/code/shell/part5/36_4_recursion_a_script_calling_itself.md"]],["v-39d19511","/code/shell/part5/36_5_colorizing_scripts.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> echo命令</h1>
<ul>
<li>-e 使转义符生效 如:  解释\\t \\n含义</li>
<li>-n 不换行输出</li>
</ul>
<h3> 字颜色：30—–37</h3>
<p>echo -e “\\033[30m 黑色字 \\033[0m”</p>
<p>echo -e “\\033[31m 红色字 \\033[0m”</p>
<p>echo -e “\\033[32m 绿色字 \\033[0m”</p>
<p>echo -e “\\033[33m 黄色字 \\033[0m”</p>
<p>echo -e “\\033[34m 蓝色字 \\033[0m”</p>
<p>echo -e “\\033[35m 紫色字 \\033[0m”</p>`,r:{minutes:.68,words:204},y:"a",t:"echo命令"},["/code/shell/part5/36_5_colorizing_scripts","/code/shell/part5/36_5_colorizing_scripts.md"]],["v-0e9831c3","/code/shell/part5/36_6_optimizations.html",{d:1681909711e3,y:"a",t:""},["/code/shell/part5/36_6_optimizations","/code/shell/part5/36_6_optimizations.md"]],["v-7c814d38","/code/shell/part5/36_7_1_ideas_for_more_powerful_scripts.html",{d:1681909711e3,y:"a",t:""},["/code/shell/part5/36_7_1_ideas_for_more_powerful_scripts","/code/shell/part5/36_7_1_ideas_for_more_powerful_scripts.md"]],["v-e4ba63b4","/code/shell/part5/36_7_2_widgets.html",{d:1681909711e3,y:"a",t:""},["/code/shell/part5/36_7_2_widgets","/code/shell/part5/36_7_2_widgets.md"]],["v-77518a00","/code/shell/part5/36_7_assorted_tips.html",{d:1681909711e3,y:"a",t:""},["/code/shell/part5/36_7_assorted_tips","/code/shell/part5/36_7_assorted_tips.md"]],["v-5b2bfecf","/code/shell/part5/36_8_1_infected_shell_scripts.html",{d:1681909711e3,y:"a",t:""},["/code/shell/part5/36_8_1_infected_shell_scripts","/code/shell/part5/36_8_1_infected_shell_scripts.md"]],["v-13799cfe","/code/shell/part5/36_8_2_hiding_shell_script_source.html",{d:1681909711e3,y:"a",t:""},["/code/shell/part5/36_8_2_hiding_shell_script_source","/code/shell/part5/36_8_2_hiding_shell_script_source.md"]],["v-49e744cb","/code/shell/part5/36_8_3_writing_secure_shell_scripts.html",{d:1681909711e3,y:"a",t:""},["/code/shell/part5/36_8_3_writing_secure_shell_scripts","/code/shell/part5/36_8_3_writing_secure_shell_scripts.md"]],["v-22d43eee","/code/shell/part5/36_8_security_issues.html",{d:1681909711e3,y:"a",t:""},["/code/shell/part5/36_8_security_issues","/code/shell/part5/36_8_security_issues.md"]],["v-bace1048","/code/shell/part5/36_9_portability_issues.html",{d:1681909711e3,y:"a",t:""},["/code/shell/part5/36_9_portability_issues","/code/shell/part5/36_9_portability_issues.md"]],["v-2c406bc2","/code/shell/part5/36_miscellany.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第36章 杂项</h1>
<blockquote>
<p>Nobody really knows what the Bourne shell's grammar is. Even examination of the source code is little help.
——Tom Duff</p>
</blockquote>
<p>目录</p>
<ul>
<li><a href="/code/shell/part5/36_1_interactive_and_non-interactive_shells_and_scripts.html" target="blank">36.1 交互和非交互shell以及脚本</a></li>
<li><a href="/code/shell/part5/36_2_shell_wrappers.html" target="blank">36.2 shell wrappers</a></li>
<li><a href="/code/shell/part5/36_3_tests_and_comparisons_alternatives.html" target="blank">36.3 测试和比较的其他方法</a></li>
<li><a href="/code/shell/part5/36_4_recursion_a_script_calling_itself.html" target="blank">36.4 递归：调用自己的脚本</a></li>
<li><a href="/code/shell/part5/36_5_colorizing_scripts.html" target="blank">36.5 “彩色”的脚本</a></li>
<li><a href="/code/shell/part5/36_6_optimizations.html" target="blank">36.6 优化</a></li>
<li><a href="/code/shell/part5/36_7_assorted_tips.html" target="blank">36.7 其他技巧</a></li>
<li><a href="/code/shell/part5/36_8_security_issues.html" target="blank">36.8 安全问题</a></li>
<li><a href="/code/shell/part5/36_9_portability_issues.html" target="blank">36.9 可移植性问题</a></li>
<li><a href="/code/shell/part5/36_10_shell_scripting_under_windows.html" target="blank">36.10 Windows系统下的脚本</a></li>
</ul>`,r:{minutes:.38,words:115},y:"a",t:"第36章 杂项"},["/code/shell/part5/36_miscellany","/code/shell/part5/36_miscellany.md"]],["v-71241cd6","/code/shell/part5/",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h1> 第五部分 高级话题</h1>
<h3> 目录</h3>
<ul>
<li><a href="/code/shell/part5/18_regular_expressions.html" target="blank">18.正则表达式</a>
<ul>
<li><a href="/code/shell/part5/18_1_a_brief_introduction_to_regular_expressions.html" target="blank">18.1正则表达式简介</a></li>
<li><a href="/code/shell/part5/18_2_globbing.html" target="blank">18.2文件名替换</a></li>
</ul>
</li>
<li><a href="/code/shell/part5/19_here_documents.html" target="blank">19. 嵌入文档</a></li>
<li><a href="/code/shell/part5/20_io_redirection.html" target="blank">20. I/O 重定向</a>
<ul>
<li><a href="/code/shell/part5/20_1_use_exec.html" target="blank">20.1 使用 exec</a></li>
<li><a href="/code/shell/part5/20_2_redirecting_code_blocks.html" target="blank">20.2 重定向代码块</a></li>
<li><a href="/code/shell/part5/20_3_applications.html" target="blank">20.3 应用程序</a></li>
</ul>
</li>
<li><a href="/code/shell/part5/22_Restricted_Shells.html" target="blank">22. 限制模式的Shell</a></li>
<li><a href="/code/shell/part5/23_Process_Substitution.html" target="blank">23. 进程替换</a></li>
<li><a href="/code/shell/part5/24_functions.html" target="blank">24. 函数</a>
<ul>
<li><a href="/code/shell/part5/24_1_complex_functions_and_function_complexities.html" target="blank">24.1 复杂函数和函数复杂性</a></li>
<li><a href="/code/shell/part5/24_2_local_variables.html" target="blank">24.2 局部变量</a></li>
<li><a href="/code/shell/part5/24_3_recursion_without_local_variables.html" target="blank">24.3 不适用局部变量的递归</a></li>
</ul>
</li>
<li><a href="/code/shell/part5/25_aliases.html" target="blank">25. 别名</a></li>
<li><a href="/code/shell/part5/source/part5/26_List_Constructs.html" target="blank">26. 列表结构</a></li>
<li><a href="/code/shell/part5/27_arrays.html" target="blank">27. 数组</a></li>
<li><a href="/code/shell/part5/30_network_programming.html" target="blank">30. 网络编程</a></li>
<li><a href="/code/shell/part5/33_options.html" target="blank">33. 选项</a></li>
<li><a href="/code/shell/part5/34_Gotchsa.html" target="blank">34. 陷阱</a></li>
</ul>`,r:{minutes:.49,words:146},y:"a",t:"第五部分 高级话题"},["/code/shell/part5/index.html","/code/shell/part5/readme.md"]],["v-79bd1f4a","/code/shell/part7/shili.html",{a:"LinuxStory",d:1681909711e3,c:"Linux",g:["Bash"],e:`<h2> 开机集成zabbix和jumpserver脚本</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">LOCAL_PASS</span><span class="token operator">=</span><span class="token string">"****"</span>
<span class="token assign-left variable">ANS_PASS</span><span class="token operator">=</span><span class="token string">"****"</span>
<span class="token assign-left variable">INVENTORY_FILE</span><span class="token operator">=</span><span class="token string">"/etc/ansible/playbook/zabbix/inventory/zabbix.yml"</span>
<span class="token assign-left variable">ZABBIX_PALYBOOK_FILE</span><span class="token operator">=</span><span class="token string">"/etc/ansible/playbook/zabbix/new-zabbix-agent.yml"</span>
<span class="token assign-left variable">IP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ifconfig</span> <span class="token operator">|</span> <span class="token function">grep</span> broadcast <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{ print $2 }'</span><span class="token variable">)</span></span>
<span class="token assign-left variable">LAST_TWO_IP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $IP <span class="token operator">|</span> <span class="token function">cut</span> -d. -f3-4<span class="token variable">)</span></span>

<span class="token assign-left variable">node</span><span class="token operator">=</span><span class="token string">"f6d2228f-c474-4b1e-ac8b-5c7d10e63b53"</span>

<span class="token function-name function">update_ssh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'s/PasswordAuthentication no/PasswordAuthentication yes/g'</span> /etc/ssh/sshd_config
  systemctl restart sshd <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">\${LOCAL_PASS}</span>"</span> <span class="token operator">|</span> <span class="token function">passwd</span> root <span class="token parameter variable">--stdin</span>  <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token punctuation">}</span>

<span class="token function-name function">integrate_jms</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable">\${1}</span>"</span> <span class="token operator">==</span> <span class="token string">"csp"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">node</span><span class="token operator">=</span><span class="token string">"b256f30b-896e-44cd-90f0-0fc28984afe9"</span>
  <span class="token keyword">elif</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable">\${1}</span>"</span> <span class="token operator">==</span> <span class="token string">"bes"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">node</span><span class="token operator">=</span><span class="token string">"b594957e-d6e8-4c85-92e6-b89757792e1a"</span>
  <span class="token keyword">fi</span> 
  <span class="token function">curl</span> <span class="token parameter variable">-XPOST</span> <span class="token parameter variable">-H</span> <span class="token string">'Authorization: Token d54c30e98f49de8e4e75bd3c28f214d0dea761ca'</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-H</span> <span class="token string">"Content-Type:application/json"</span> http://192.168.162.10/api/v1/assets/assets/ <span class="token punctuation">\\</span>
    <span class="token parameter variable">-d</span> <span class="token string">"{ <span class="token entity" title="\\&quot;">\\"</span>ip<span class="token entity" title="\\&quot;">\\"</span>: <span class="token entity" title="\\&quot;">\\"</span><span class="token variable">\${IP}</span><span class="token entity" title="\\&quot;">\\"</span>, <span class="token entity" title="\\&quot;">\\"</span>hostname<span class="token entity" title="\\&quot;">\\"</span>: <span class="token entity" title="\\&quot;">\\"</span><span class="token variable">\${LAST_TWO_IP}</span>-<span class="token variable">\${2}</span><span class="token entity" title="\\&quot;">\\"</span>, 
        <span class="token entity" title="\\&quot;">\\"</span>protocol<span class="token entity" title="\\&quot;">\\"</span>: <span class="token entity" title="\\&quot;">\\"</span>ssh<span class="token entity" title="\\&quot;">\\"</span>, <span class="token entity" title="\\&quot;">\\"</span>port<span class="token entity" title="\\&quot;">\\"</span>: 22, <span class="token entity" title="\\&quot;">\\"</span>protocols<span class="token entity" title="\\&quot;">\\"</span>: [ <span class="token entity" title="\\&quot;">\\"</span>ssh/22<span class="token entity" title="\\&quot;">\\"</span> ], 
        <span class="token entity" title="\\&quot;">\\"</span>platform<span class="token entity" title="\\&quot;">\\"</span>: <span class="token entity" title="\\&quot;">\\"</span>Linux<span class="token entity" title="\\&quot;">\\"</span>, <span class="token entity" title="\\&quot;">\\"</span>is_active<span class="token entity" title="\\&quot;">\\"</span>: true, 
        <span class="token entity" title="\\&quot;">\\"</span>admin_user<span class="token entity" title="\\&quot;">\\"</span>: <span class="token entity" title="\\&quot;">\\"</span>59bb8ee8-98ad-4aac-a1a7-3e1b2b83f38f<span class="token entity" title="\\&quot;">\\"</span>, 
        <span class="token entity" title="\\&quot;">\\"</span>nodes<span class="token entity" title="\\&quot;">\\"</span>: [ <span class="token entity" title="\\&quot;">\\"</span><span class="token variable">\${node}</span><span class="token entity" title="\\&quot;">\\"</span> ]}"</span>
<span class="token punctuation">}</span>

<span class="token function-name function">integrate_ans_zbx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  /usr/bin/expect <span class="token operator">&lt;&lt;</span><span class="token string">EOF
  set timeout 180
  spawn ssh root@192.168.162.1
  expect {
    "(yes/no)?" {
      send "yes<span class="token entity" title="\\r">\\r</span>";
      expect "password:";
      send "<span class="token variable">\${ANS_PASS}</span><span class="token entity" title="\\r">\\r</span>";
      exp_continue;
    }
    "password:" {
      send "<span class="token variable">\${ANS_PASS}</span><span class="token entity" title="\\r">\\r</span>";
      exp_continue;
    }
    "*#" {
      send "sed -i '/# <span class="token variable">\${1}</span> insert/i\\  <span class="token variable">\${IP}</span>:' <span class="token variable">\${INVENTORY_FILE}</span><span class="token entity" title="\\r">\\r</span>";
      send "sed -i 's/<span class="token variable">\${IP}</span>/        <span class="token variable">\${IP}</span>/g' <span class="token variable">\${INVENTORY_FILE}</span><span class="token entity" title="\\r">\\r</span>";
      send " ansible-playbook -i <span class="token variable">\${INVENTORY_FILE}</span> <span class="token variable">\${ZABBIX_PALYBOOK_FILE}</span> \\
             -l <span class="token variable">\${IP}</span> --skip-tags 'sangoma,debian,suse,windows,docker'<span class="token entity" title="\\r">\\r</span>";
    }
  }
  expect eof
EOF</span>
<span class="token punctuation">}</span>

<span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  update_ssh
  integrate_jms <span class="token string">"<span class="token variable">$@</span>"</span>
  integrate_ans_zbx <span class="token string">"<span class="token variable">$@</span>"</span> 
<span class="token punctuation">}</span>

main <span class="token string">"<span class="token variable">$@</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.65,words:195},y:"a",t:""},["/code/shell/part7/shili","/code/shell/part7/shili.md"]],["v-3e9942a6","/container/dockerfile/fastdfs/",{d:1681909711e3,e:`<h2> 使用方法</h2>
<p>需要注意的是 你需要在运行容器的时候制定宿主机的<code>ip</code> 用参数<code>PUBIP</code> 来指定</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/fastdfs
<span class="token function">docker</span> pull wangzhichidocker/fastdfs:1.0.0
<span class="token function">docker</span> container run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> fdfs-test <span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">PUBIP</span><span class="token operator">=</span>xxx <span class="token parameter variable">--mount</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>bind,source<span class="token operator">=</span>/data/fastdfs,target<span class="token operator">=</span>/data/fastdfs wangzhichidocker/fastdfs:1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.46,words:137},y:"a",t:""},["/container/dockerfile/fastdfs/index.html","/container/dockerfile/fastdfs/README.md"]],["v-28948558","/db/redis/operate/hash.html",{d:1681909711e3,c:"Redis",e:`<h1> hash类型</h1>
<p>hash⽤于存储对象
对象的结构为属性、值
值的类型为string</p>
<h2> 增加、修改</h2>
<ul>
<li>设置单个属性</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hset key field value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.49,words:147},y:"a",t:"hash类型"},["/db/redis/operate/hash","/db/redis/operate/hash.md"]],["v-5c0dc3f1","/db/redis/operate/key.html",{d:1681909711e3,c:"Redis",e:`<h1> 键命令</h1>
<ul>
<li>查找键
参数⽀持正则表达式</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>keys pattern
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>判断键是否存在，
如果存在返回1，不存在返回0</li>
</ul>
`,r:{minutes:.35,words:106},y:"a",t:"键命令"},["/db/redis/operate/key","/db/redis/operate/key.md"]],["v-df69f078","/db/redis/operate/list.html",{d:1681909711e3,c:"Redis",e:`<h1> list类型</h1>
<ul>
<li>列表的元素类型为string</li>
<li>按照插⼊顺序排序</li>
</ul>
<h2> 增加</h2>
<ul>
<li>在左侧插⼊数据</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lpush key value1 value2 ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.08,words:325},y:"a",t:"list类型"},["/db/redis/operate/list","/db/redis/operate/list.md"]],["v-dae22064","/db/redis/operate/set.html",{d:1681909711e3,c:"Redis",e:`<h1> set 类型</h1>
<ul>
<li>⽆序集合</li>
<li>元素为string类型</li>
<li>元素具有唯⼀性，不重复</li>
<li>说明：对于集合没有修改操作</li>
</ul>
<p>增加</p>
<ul>
<li>添加元素</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sadd key member1 member2 ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.4,words:121},y:"a",t:"set 类型"},["/db/redis/operate/set","/db/redis/operate/set.md"]],["v-641cf9f1","/db/redis/operate/string.html",{d:1681909711e3,c:"Redis",e:`<h1> string类型</h1>
<p>字符串类型是Redis中最为基础的数据存储类型，该类型可以接受任何格式的数据，如JPEG图像数据或Json对象描述信息等。在Redis中字符串类型的Value最多可以容纳的数据长度是512M。</p>
<h2> 保存</h2>
<p>如果设置的键不存在则为添加，如果设置的键已经存在则修改</p>
<ul>
<li>设置键值</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set key value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.77,words:231},y:"a",t:"string类型"},["/db/redis/operate/string","/db/redis/operate/string.md"]],["v-5384c60c","/db/redis/operate/zset.html",{d:1681909711e3,c:"Redis",e:`<h1> zset 类型</h1>
<ul>
<li>sorted set，有序集合</li>
<li>元素为string类型</li>
<li>元素具有唯⼀性，不重复</li>
<li>每个元素都会关联⼀个double类型的score，表示权重，通过权重将元素从⼩到⼤排序</li>
<li>说明：没有修改操作</li>
</ul>
<p>增加</p>
<ul>
<li>添加</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zadd key score1 member1 score2 member2 ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.1,words:330},y:"a",t:"zset 类型"},["/db/redis/operate/zset","/db/redis/operate/zset.md"]],["v-582427ba","/other/%E5%BE%85%E6%95%B4%E7%90%86/blog-knowledge/shell-sed.html",{d:15062868e5,l:"2017年9月24日",g:"shell",e:`<p>Let's learn the sed command together！</p>
<!--more-->
<h2> 概述</h2>
<p>sed是stream editor的简称，也就是流编辑器。它一次处理一行内容，处理是，当前处理的行存储在临时缓冲区中，成为“pattern space”,接着用sed命令处理缓冲区中的内容，处理完后，把缓冲区的内容送往屏幕。接着处理下一行，这样不断重复，知道文件末尾。文件内容并没有改变，除非你使用重定向存储输出。</p>
<h2> 语法</h2>
<h3> 命令格式</h3>
<p>sed [option] 'command' input_file</p>`,r:{minutes:8.02,words:2407},y:"a",t:"sed命令详解"},["/other/待整理/blog-knowledge/shell-sed.html","/other/%E5%BE%85%E6%95%B4%E7%90%86/blog-knowledge/shell-sed","/other/待整理/blog-knowledge/shell-sed.md","/other/%E5%BE%85%E6%95%B4%E7%90%86/blog-knowledge/shell-sed.md"]],["v-d0688ad6","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8821%EF%BC%89-find.html",{d:15327174e5,l:"2018年7月27日",c:"Linux",g:"linux常用命令",e:`<p>在使用 find命令的-exec选项处理匹配到的文件时， find命令将所有匹配到的文件一起传递给exec执行。但有些系统对能够传递给exec的命令长度有限制，这样在find命令运行几分钟之后，就会出现溢出错误。错误信息通常是“参数列太长”或“参数列溢出”。这就是xargs命令的用处所在，特别是与find命令一起使用。</p>
<!--more-->
<p>find命令把匹配到的文件传递给xargs命令，而xargs命令每次只获取一部分文件而不是全部，不像-exec选项那样。这样它可以先处理最先获取的一部分文件，然后是下一批，并如此继续下去。</p>
<p>在有些系统中，使用-exec选项会为处理每一个匹配到的文件而发起一个相应的进程，并非将匹配到的文件全部作为参数一次执行；这样在有些情况下就会出现进程过多，系统性能下降的问题，因而效率不高； 而使用xargs命令则只有一个进程。另外，在使用xargs命令时，究竟是一次获取所有的参数，还是分批取得参数，以及每一次获取参数的数目都会根据该命令的选项及系统内核中相应的可调参数来确定。</p>`,r:{minutes:5.41,words:1622},y:"a",t:"每天一个linux命令（21）-find之xargs"},["/other/待整理/linux命令/每天一个linux命令（21）-find.html","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8821%EF%BC%89-find","/other/待整理/linux命令/每天一个linux命令（21）-find.md","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8821%EF%BC%89-find.md"]],["v-14498f4b","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8829%EF%BC%89-chown.html",{d:153271788e4,l:"2018年7月27日",c:"Linux",g:"linux常用命令",e:`<p>chown将指定文件的拥有者改为指定的用户或组，用户可以是用户名或者用户ID；组可以是组名或者组ID；文件是以空格分开的要改变权限的文件列表，支持通配符。系统管理员经常使用chown命令，在将文件拷贝到另一个用户的名录下之后，让用户拥有使用该文件的权限。</p>
<!--more-->
<h2> 语法</h2>
<p><code>chown(选项)(参数)</code></p>
<h2> 选项</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-c或——changes：效果类似“-v”参数，但仅回报更改的部分；
-f或--quite或——silent：不显示错误信息；
-h或--no-dereference：只对符号连接的文件作修改，而不更改其他任何相关文件；
-R或——recursive：递归处理，将指定目录下的所有文件及子目录一并处理；
-v或——version：显示指令执行过程；
--dereference：效果和“-h”参数相同；
--help：在线帮助；
--reference=&lt;参考文件或目录&gt;：把指定文件或目录的拥有者与所属群组全部设成和参考文件或目录的拥有者与所属群组相同；
--version：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.94,words:882},y:"a",t:"每天一个linux命令（29）-chown"},["/other/待整理/linux命令/每天一个linux命令（29）-chown.html","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8829%EF%BC%89-chown","/other/待整理/linux命令/每天一个linux命令（29）-chown.md","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8829%EF%BC%89-chown.md"]],["v-f8d17c08","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8833%EF%BC%89-du.html",{d:153271818e4,l:"2018年7月27日",c:"Linux",g:"linux常用命令",e:`<p><strong>du命令</strong>也是查看使用空间的，但是与<a href="http://man.linuxde.net/df" target="_blank" rel="noopener noreferrer">df</a>命令不同的是Linux du命令是对文件和目录磁盘使用的空间的查看，还是和df命令有一些区别的。</p>
<!--more-->
<h2> 语法</h2>
<p><code>du [选项][文件]</code></p>
<h2> 选项</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-a或-all 显示目录中个别文件的大小。
-b或-bytes 显示目录或文件大小时，以byte为单位。
-c或--total 除了显示个别目录或文件的大小外，同时也显示所有目录或文件的总和。
-k或--kilobytes 以KB(1024bytes)为单位输出。
-m或--megabytes 以MB为单位输出。
-s或--summarize 仅显示总计，只列出最后加总的值。
-h或--human-readable 以K，M，G为单位，提高信息的可读性。
-x或--one-file-xystem 以一开始处理时的文件系统为准，若遇上其它不同的文件系统目录则略过。
-L&lt;符号链接&gt;或--dereference&lt;符号链接&gt; 显示选项中所指定符号链接的源文件大小。
-S或--separate-dirs 显示个别目录的大小时，并不含其子目录的大小。
-X&lt;文件&gt;或--exclude-from=&lt;文件&gt; 在&lt;文件&gt;指定目录或文件。
--exclude=&lt;目录或文件&gt; 略过指定的目录或文件。
-D或--dereference-args 显示指定符号链接的源文件大小。
-H或--si 与-h参数相同，但是K，M，G是以1000为换算单位。
-l或--count-links 重复计算硬件链接的文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.58,words:774},y:"a",t:"每天一个linux命令（33）-du"},["/other/待整理/linux命令/每天一个linux命令（33）-du.html","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8833%EF%BC%89-du","/other/待整理/linux命令/每天一个linux命令（33）-du.md","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8833%EF%BC%89-du.md"]],["v-769b02c6","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8835%EF%BC%89-diff.html",{d:15327183e5,l:"2018年7月27日",c:"Linux",g:"linux常用命令",e:`<p>diff 命令是 linux上非常重要的工具，用于比较文件的内容，特别是比较两个版本不同的文件以找到改动的地方。diff在命令行中打印每一个行的改动。最新版本的diff还支持二进制文件。diff程序的输出被称为补丁 (patch)，因为Linux系统中还有一个patch程序，可以根据diff的输出将a.c的文件内容更新为b.c。diff是svn、cvs、git等版本控制工具不可或缺的一部分。</p>
<!--more-->
<h2> 语法</h2>
<p><code>diff(选项)(参数)</code></p>
<h2> 选项</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-&lt;行数&gt;：指定要显示多少行的文本。此参数必须与-c或-u参数一并使用；
-a或——text：diff预设只会逐行比较文本文件；
-b或--ignore-space-change：不检查空格字符的不同；
-B或--ignore-blank-lines：不检查空白行；
-c：显示全部内容，并标出不同之处；
-C&lt;行数&gt;或--context&lt;行数&gt;：与执行“-c-&lt;行数&gt;”指令相同；
-d或——minimal：使用不同的演算法，以小的单位来做比较；
-D&lt;巨集名称&gt;或ifdef&lt;巨集名称&gt;：此参数的输出格式可用于前置处理器巨集；
-e或——ed：此参数的输出格式可用于ed的script文件；
-f或-forward-ed：输出的格式类似ed的script文件，但按照原来文件的顺序来显示不同处；
-H或--speed-large-files：比较大文件时，可加快速度；
-l&lt;字符或字符串&gt;或--ignore-matching-lines&lt;字符或字符串&gt;：若两个文件在某几行有所不同，而之际航同时都包含了选项中指定的字符或字符串，则不显示这两个文件的差异；
-i或--ignore-case：不检查大小写的不同；
-l或——paginate：将结果交由pr程序来分页；
-n或——rcs：将比较结果以RCS的格式来显示；
-N或--new-file：在比较目录时，若文件A仅出现在某个目录中，预设会显示：Only in目录，文件A 若使用-N参数，则diff会将文件A 与一个空白的文件比较；
-p：若比较的文件为C语言的程序码文件时，显示差异所在的函数名称；
-P或--unidirectional-new-file：与-N类似，但只有当第二个目录包含了第一个目录所没有的文件时，才会将这个文件与空白的文件做比较；
-q或--brief：仅显示有无差异，不显示详细的信息；
-r或——recursive：比较子目录中的文件；
-s或--report-identical-files：若没有发现任何差异，仍然显示信息；
-S&lt;文件&gt;或--starting-file&lt;文件&gt;：在比较目录时，从指定的文件开始比较；
-t或--expand-tabs：在输出时，将tab字符展开；
-T或--initial-tab：在每行前面加上tab字符以便对齐；
-u，-U&lt;列数&gt;或--unified=&lt;列数&gt;：以合并的方式来显示文件内容的不同；
-v或——version：显示版本信息；
-w或--ignore-all-space：忽略全部的空格字符；
-W&lt;宽度&gt;或--width&lt;宽度&gt;：在使用-y参数时，指定栏宽；
-x&lt;文件名或目录&gt;或--exclude&lt;文件名或目录&gt;：不比较选项中所指定的文件或目录；
-X&lt;文件&gt;或--exclude-from&lt;文件&gt;；您可以将文件或目录类型存成文本文件，然后在=&lt;文件&gt;中指定此文本文件；
-y或--side-by-side：以并列的方式显示文件的异同之处；
--help：显示帮助；
--left-column：在使用-y参数时，若两个文件某一行内容相同，则仅在左侧的栏位显示该行内容；
--suppress-common-lines：在使用-y参数时，仅显示不同之处。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.85,words:2056},y:"a",t:"每天一个linux命令（35）-diff"},["/other/待整理/linux命令/每天一个linux命令（35）-diff.html","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8835%EF%BC%89-diff","/other/待整理/linux命令/每天一个linux命令（35）-diff.md","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8835%EF%BC%89-diff.md"]],["v-0215d71c","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8836%EF%BC%89-date.html",{d:153271842e4,l:"2018年7月27日",c:"Linux",g:"linux常用命令",e:`<p>在linux环境中，不管是编程还是其他维护，时间是必不可少的，也经常会用到时间的运算，熟练运用date命令来表示自己想要表示的时间，肯定可以给自己的工作带来诸多方便。</p>
<!--more-->
<h2> 语法</h2>
<p><code>date(选项)(参数)</code></p>
<h2> 选项</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-d&lt;字符串&gt;：显示字符串所指的日期与时间。字符串前后必须加上双引号；
-s&lt;字符串&gt;：根据字符串来设置日期与时间。字符串前后必须加上双引号；
-u：显示GMT；
--help：在线帮助；
--version：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.88,words:864},y:"a",t:"每天一个linux命令（36）-date"},["/other/待整理/linux命令/每天一个linux命令（36）-date.html","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8836%EF%BC%89-date","/other/待整理/linux命令/每天一个linux命令（36）-date.md","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8836%EF%BC%89-date.md"]],["v-3bb98840","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8842%EF%BC%89-killall.html",{d:153271878e4,l:"2018年7月27日",c:"Linux",g:"linux常用命令",e:`<p>Linux系统中的killall命令用于杀死指定名字的进程（kill processes by name）。我们可以使用kill命令杀死指定进程PID的进程，如果要找到我们需要杀死的进程，我们还需要在之前使用ps等命令再配合grep来查找进程，而killall把这两个过程合二为一，是一个很好用的命令。</p>
<!--more-->
<h2> 语法</h2>
<p><code>killall(选项)(参数)</code></p>
<h2> 选项</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-Z 只杀死拥有scontext 的进程
-e 要求匹配进程名称
-I 忽略小写
-g 杀死进程组而不是进程
-i 交互模式，杀死进程前先询问用户
-l 列出所有的已知信号名称
-q 不输出警告信息
-s 发送指定的信号
-v 报告信号是否成功发送
-w 等待进程死亡
--help 显示帮助信息
--version 显示版本显示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.05,words:615},y:"a",t:"每天一个linux命令（42）-killall"},["/other/待整理/linux命令/每天一个linux命令（42）-killall.html","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8842%EF%BC%89-killall","/other/待整理/linux命令/每天一个linux命令（42）-killall.md","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8842%EF%BC%89-killall.md"]],["v-c0d2447e","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8845%EF%BC%89-vmstat.html",{d:153271896e4,l:"2018年7月27日",c:"Linux",g:"linux常用命令",e:`<p>vmstat是Virtual Meomory Statistics（虚拟内存统计）的缩写，可对操作系统的虚拟内存、进程、CPU活动进行监控。他是对系统整体情况进行统计，不足之处是无法对某个进程今次那个深入分析。vmstat工具提供了一种低开销的系统性能观察方式。因为vmstat本身就是低开销工具，在非常高负荷的服务器上，你需要查看并监控系统的健康情况，在控制窗口还是能够使用vmstat命令前，我们先了解下Linux系统中关于物理内存和虚拟内存相关信息。</p>
<!--more-->
<p>物理内存和虚拟内存区别：</p>
<p>我们知道，直接从物理内存读取数据要比从硬盘读写数据要快的多，因此，我们希望所有数据的读取和写入都在内存完成，而内存是有限的，这样就引出了物理内存与虚拟内存的概念。</p>`,r:{minutes:13.11,words:3932},y:"a",t:"每天一个linux命令（45）-vmstat"},["/other/待整理/linux命令/每天一个linux命令（45）-vmstat.html","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8845%EF%BC%89-vmstat","/other/待整理/linux命令/每天一个linux命令（45）-vmstat.md","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8845%EF%BC%89-vmstat.md"]],["v-7f1266d1","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8846%EF%BC%89-iostat.html",{d:153271902e4,l:"2018年7月27日",c:"Linux",g:"linux常用命令",e:`<p>Linux系统中的 iostat是I/O statistics（输入/输出统计）的缩写，iostat工具将对系统的磁盘操作活动进行监视。它的特点是汇报磁盘活动统计情况，同时也会汇报出CPU使用情况。同vmstat一样，iostat也有一个弱点，就是它不能对某个进程进行深入分析，仅对系统的整体情况进行分析。iostat属于sysstat软件包。可以用yum install sysstat 直接安装。</p>
<!--more-->
<h2> 语法</h2>
<p><code>iostat(选项)(参数)</code></p>
<h2> 选项</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-c：仅显示CPU使用情况；
-d：仅显示设备利用率；
-k：显示状态以千字节每秒为单位，而不使用块每秒；
-m：显示状态以兆字节每秒为单位；
-p：仅显示块设备和所有被使用的其他分区的状态；
-t：显示每个报告产生时的时间；
-V：显示版号并退出；
-x：显示扩展状态。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.97,words:2092},y:"a",t:"每天一个linux命令（46）-iostat"},["/other/待整理/linux命令/每天一个linux命令（46）-iostat.html","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8846%EF%BC%89-iostat","/other/待整理/linux命令/每天一个linux命令（46）-iostat.md","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8846%EF%BC%89-iostat.md"]],["v-a27ac06c","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8849%EF%BC%89-lsof.html",{d:15327192e5,l:"2018年7月27日",c:"Linux",g:"linux常用命令",e:`<p>lsof（list open files）是一个列出当前系统打开文件的工具。在linux环境下，任何事物都以文件的形式存在，通过文件不仅仅可以访问常规数据，还可以访问网络连接和硬件。所以如传输控制协议 (TCP) 和用户数据报协议 (UDP) 套接字等，系统在后台都为该应用程序分配了一个文件描述符，无论这个文件的本质如何，该文件描述符为应用程序与基础操作系统之间的交互提供了通用接口。因为应用程序打开文件的描述符列表提供了大量关于这个应用程序本身的信息，因此通过lsof工具能够查看这个列表对系统监测以及排错将是很有帮助的。</p>
<!--more-->
<h2> 语法</h2>
<p><code>lsof(选项)</code></p>`,r:{minutes:7.16,words:2147},y:"a",t:"每天一个linux命令（49）-lsof"},["/other/待整理/linux命令/每天一个linux命令（49）-lsof.html","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8849%EF%BC%89-lsof","/other/待整理/linux命令/每天一个linux命令（49）-lsof.md","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8849%EF%BC%89-lsof.md"]],["v-7503515e","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8852%EF%BC%89-ping.html",{d:153271938e4,l:"2018年7月27日",c:"Linux",g:"linux常用命令",e:`<p>Linux系统的ping命令是常用的网络命令，它通常用来测试与目标主机的连通性，我们经常会说“ping一下某机器，看是不是开着”、不能打开网页时会说“你先ping网关地址192.168.1.1试试”。它通过发送ICMP ECHO_REQUEST数据包到网络主机（send ICMP ECHO_REQUEST to network hosts），并显示响应情况，这样我们就可以根据它输出的信息来确定目标主机是否可访问（但这不是绝对的）。有些服务器为了防止通过ping探测到，通过防火墙设置了禁止ping或者在内核参数中禁止ping，这样就不能通过ping确定该主机是否还处于开启状态。</p>
<!--more-->`,r:{minutes:4.61,words:1384},y:"a",t:"每天一个linux命令（52）-ping"},["/other/待整理/linux命令/每天一个linux命令（52）-ping.html","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8852%EF%BC%89-ping","/other/待整理/linux命令/每天一个linux命令（52）-ping.md","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8852%EF%BC%89-ping.md"]],["v-02aa1bcb","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8853%EF%BC%89-traceroute.html",{d:153271944e4,l:"2018年7月27日",c:"Linux",g:"linux常用命令",e:`<p>通过traceroute我们可以知道信息从你的计算机到互联网另一端的主机是走的什么路径。当然每次数据包由某一同样的出发点（source）到达某一同样的目的地(destination)走的路径可能会不一样，但基本上来说大部分时候所走的路由是相同的。linux系统中，我们称之为traceroute,在MS Windows中为tracert。 traceroute通过发送小的数据包到目的设备直到其返回，来测量其需要多长时间。一条路径上的每个设备traceroute要测3次。输出结果中包括每次测试的时间(ms)和设备的名称（如有的话）及其IP地址。</p>
<!--more-->
<p>在大多数情况下，我们会在linux主机系统下，直接执行命令行：</p>`,r:{minutes:8.81,words:2643},y:"a",t:"每天一个linux命令（53）-traceroute"},["/other/待整理/linux命令/每天一个linux命令（53）-traceroute.html","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8853%EF%BC%89-traceroute","/other/待整理/linux命令/每天一个linux命令（53）-traceroute.md","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8853%EF%BC%89-traceroute.md"]],["v-8578e31a","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8854%EF%BC%89-netstat.html",{d:1681909711e3,e:`<p>用于显示各种网络相关信息，如网络连接，路由表，接口状态 (Interface Statistics)，masquerade 连接，多播成员 (Multicast Memberships) 等等。</p>
<h2> 语法</h2>
<p>netstat [-acCeFghilMnNoprstuvVwx]</p>
<h2> 选项</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-a   或–all                           显示所有连线中的Socket
-c   或–continuous               持续列出网络状态
-h  或–help                         在线帮助
-l  或–listening                     显示监控中的服务器的Socket
-n  或–numeric                    不解析主机名
-t  或–tcp                            显示TCP 传输协议的连线状况
-u或–udp                            显示UDP传输协议的连线状况
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.8,words:1139},y:"a",t:""},["/other/待整理/linux命令/每天一个linux命令（54）-netstat.html","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8854%EF%BC%89-netstat","/other/待整理/linux命令/每天一个linux命令（54）-netstat.md","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/%E6%AF%8F%E5%A4%A9%E4%B8%80%E4%B8%AAlinux%E5%91%BD%E4%BB%A4%EF%BC%8854%EF%BC%89-netstat.md"]],["v-fb1ca100","/basic/linux/basic/file/cat.html",{d:1681909711e3,c:"Linux",e:`<h1> 查看文件内容</h1>
<h3> cat命令</h3>
<p>cat命令的用途是连接文件或标准输入并打印。这个命令常用来显示文件内容，或者将几个文件连接起来显示，或者从标准输入读取内容并显示，它常与重定向符号配合使用。</p>
<h4> 语法</h4>
<p><code>cat(选项)(参数)</code></p>
<h4> 选项</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-A, --show-all           等价于 -vET
-b, --number-nonblank    对非空输出行编号
-e                       等价于 -vE
-E, --show-ends          在每行结束处显示 $
-n, --number     对输出的所有行编号,由1开始对所有输出的行数编号
-s, --squeeze-blank  有连续两行以上的空白行，就代换为一行的空白行 
-t                       与 -vT 等价
-T, --show-tabs          将跳格字符显示为 ^I
-u                       (被忽略)
-v, --show-nonprinting   使用 ^ 和 M- 引用，除了 LFD 和 TAB 之外
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:15.91,words:4772},y:"a",t:"查看文件内容"},["/basic/linux/basic/file/cat","/basic/linux/basic/file/cat.md"]],["v-789867d8","/basic/linux/basic/file/file-detail.html",{d:1681909711e3,c:"Linux",e:`<h1> 查看文件详细属性</h1>
<h3> stat命令</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># stat a.go 
  File: a.go
  Size: 63        	Blocks: 0          IO Block: 512    regular file
Device: 2h/2d	Inode: 19140298416386648  Links: 1
Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
Access: 2018-10-09 12:42:07.978765400 +0800
Modify: 2018-10-09 12:42:07.980763600 +0800
Change: 2018-10-09 12:42:07.982774800 +0800
 Birth: -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.37,words:112},y:"a",t:"查看文件详细属性"},["/basic/linux/basic/file/file-detail","/basic/linux/basic/file/file-detail.md"]],["v-2638ec6a","/basic/linux/basic/file/file-type.html",{d:1681909711e3,c:"Linux",e:`<h1> 查看文件类型</h1>
<h3> ls命令</h3>
<p>ls命令时linux下最常用的命令。ls命令就是list的缩写，缺省下ls用来打印出当前目录的清单，如果ls指定其他目录，那么就会显示指定目录里的文件及文件夹清单。</p>
<p>通过ls命令不仅可以查看linux文件夹包含的文件，而且可以查看文件权限（包括目录、文件夹、文件权限），查看目录信息等等。</p>
<h4> 常用选项</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-a：显示所有档案及目录（ls内定将档案名或目录名称为“.”的视为影藏，不会列出）；
-l：以长格式显示目录下的内容列表。输出的信息从左到右依次包括文件名，文件类型、权限模式、硬连接数、所有者、组、文件大小和文件的最后修改时间等；
-h:–human-readable 以容易理解的格式列出文件大小 (例如 1K 234M 2G);
-s：显示文件和目录的大小，以区块为单位；
-t：用文件和目录的更改时间排序；
-r：以文件名反序排列并输出目录内容列表；
-d：仅显示目录名，而不显示目录下的内容列表。显示符号链接文件本身，而不显示其所指向的目录列表；
-R：递归处理，将指定目录下的所有文件及子目录一并处理；
--color[=WHEN]：使用不同的颜色高亮显示不同类型的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.38,words:1015},y:"a",t:"查看文件类型"},["/basic/linux/basic/file/file-type","/basic/linux/basic/file/file-type.md"]],["v-780b2f15","/basic/linux/basic/file/zip.html",{d:1681909711e3,c:"Linux",e:`<h1> 打包、压缩</h1>
<h3> tar命令</h3>
<p>tar命令可以为linux的文件和目录创建档案。利用tar，可以为某一特定文件创建档案（备份文件），也可以在档案中改变文件，或者向档案中加入新的文件。tar最初被用来在磁带上创建档案，现在，用户可以在任何设备上创建档案。利用tar命令，可以把一大堆的文件和目录全部打包成一个文件，这对于备份文件或将几个文件组合成为一个文件以便于网络传输是非常有用的。</p>
<p>首先要弄清两个概念：打包和压缩。打包时指将一大堆文件或目录变成为一个总的文件；压缩则是将一个大的文件通过一些压缩算法变成一个小文件。</p>
<p>为什么要区分这两个概念呢？这源于Linux中很多压缩程序只能针对一个文件进行压缩，这样当你想要压缩一大堆文件时，你得先将这一大堆文件先打成一个包（tar命令），然后再用压缩程序进行压缩（<a href="http://man.linuxde.net/gzip" target="_blank" rel="noopener noreferrer">gzip</a> <a href="http://man.linuxde.net/bzip2" target="_blank" rel="noopener noreferrer">bzip2</a>命令）。</p>`,r:{minutes:7.15,words:2146},y:"a",t:"打包、压缩"},["/basic/linux/basic/file/zip","/basic/linux/basic/file/zip.md"]],["v-13488b07","/basic/linux/basic/file/zsgc.html",{d:1681909711e3,c:"Linux",e:`<h1> 创建、复制、移动、删除</h1>
<h3> touch命令（创建文件）</h3>
<p>linux的touch命令不常用，一般在使用make的时候可能会用到，用来修改文件时间戳，或者新建一个不存在的文件。</p>
<h4> 语法</h4>
<p><code>touch(选项)(参数)</code></p>
<p>选项</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-a：或--time=atime或--time=access或--time=use  只更改存取时间；
-c：或--no-create  不建立任何文件；
-d：&lt;时间日期&gt; 使用指定的日期时间，而非现在的时间；
-f：此参数将忽略不予处理，仅负责解决BSD版本touch指令的兼容性问题；
-m：或--time=mtime或--time=modify  只更该变动时间；
-r：&lt;参考文件或目录&gt;  把指定文件或目录的日期时间，统统设成和参考文件或目录的日期时间相同；
-t：&lt;日期时间&gt;  使用指定的日期时间，而非现在的时间；
--help：在线帮助；
--version：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:19.08,words:5724},y:"a",t:"创建、复制、移动、删除"},["/basic/linux/basic/file/zsgc","/basic/linux/basic/file/zsgc.md"]],["v-3706649a","/404.html",{y:"p",t:""},["/404"]],["v-777a1bba","/build/",{y:"p",t:"Build"},["/build/index.html"]],["v-74473916","/git/",{y:"p",t:"Git"},["/git/index.html"]],["v-79e04fe4","/monitor/",{y:"p",t:"Monitor"},["/monitor/index.html"]],["v-e4cb1150","/other/",{y:"p",t:"Other"},["/other/index.html"]],["v-cfe8b6c8","/cloudnative/",{y:"p",t:"Cloudnative"},["/cloudnative/index.html"]],["v-146a1089","/code/",{y:"p",t:"Code"},["/code/index.html"]],["v-5a3ba488","/container/Docker/",{y:"p",t:"Docker"},["/container/Docker/index.html"]],["v-4e82d8f2","/container/",{y:"p",t:"Container"},["/container/index.html"]],["v-2d0a81d8","/db/",{y:"p",t:"Db"},["/db/index.html"]],["v-7e266418","/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/",{y:"p",t:"23 未分类"},["/other/23 未分类/","/other/23%20%E6%9C%AA%E5%88%86%E7%B1%BB/index.html"]],["v-dfd6d2fa","/other/temp/",{y:"p",t:"Temp"},["/other/temp/index.html"]],["v-5e6cc4ed","/other/vscode/",{y:"p",t:"Vscode"},["/other/vscode/index.html"]],["v-20e4aa46","/other/%E5%BE%85%E6%95%B4%E7%90%86/",{y:"p",t:"待整理"},["/other/待整理/","/other/%E5%BE%85%E6%95%B4%E7%90%86/index.html"]],["v-744e6dd4","/web/",{y:"p",t:"Web"},["/web/index.html"]],["v-a3cc9f96","/basic/linux/",{y:"p",t:"Linux"},["/basic/linux/index.html"]],["v-58535866","/basic/linux/gainian/",{y:"p",t:"Gainian"},["/basic/linux/gainian/index.html"]],["v-3f621bca","/basic/linux/qa/",{y:"p",t:"Qa"},["/basic/linux/qa/index.html"]],["v-8d69e284","/code/shell/appendix/",{y:"p",t:"Appendix"},["/code/shell/appendix/index.html"]],["v-71241c5a","/code/shell/part7/",{y:"p",t:"Part7"},["/code/shell/part7/index.html"]],["v-7314e22c","/container/dockerfile/",{y:"p",t:"Dockerfile"},["/container/dockerfile/index.html"]],["v-e2d3f5d2","/db/redis/operate/",{y:"p",t:"Operate"},["/db/redis/operate/index.html"]],["v-d6a62914","/other/%E5%BE%85%E6%95%B4%E7%90%86/blog-knowledge/",{y:"p",t:"Blog Knowledge"},["/other/待整理/blog-knowledge/","/other/%E5%BE%85%E6%95%B4%E7%90%86/blog-knowledge/index.html"]],["v-ee4c6a8e","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/",{y:"p",t:"Linux命令"},["/other/待整理/linux命令/","/other/%E5%BE%85%E6%95%B4%E7%90%86/linux%E5%91%BD%E4%BB%A4/index.html"]],["v-024485bd","/basic/linux/basic/file/",{y:"p",t:"File"},["/basic/linux/basic/file/index.html"]],["v-5bc93818","/category/",{y:"p",t:"分类",I:0},["/category/index.html"]],["v-744d024e","/tag/",{y:"p",t:"标签",I:0},["/tag/index.html"]],["v-e52c881c","/article/",{y:"p",t:"文章",I:0},["/article/index.html"]],["v-154dc4c4","/star/",{y:"p",t:"收藏",I:0},["/star/index.html"]],["v-01560935","/timeline/",{y:"p",t:"时间轴",I:0},["/timeline/index.html"]],["v-155824b4","/category/%E5%B8%B8%E8%A7%81%E6%9C%8D%E5%8A%A1%E7%9A%84%E6%90%AD%E5%BB%BA/",{y:"p",t:"常见服务的搭建 分类",I:0},["/category/常见服务的搭建/","/category/%E5%B8%B8%E8%A7%81%E6%9C%8D%E5%8A%A1%E7%9A%84%E6%90%AD%E5%BB%BA/index.html"]],["v-1fc637b7","/tag/activemq/",{y:"p",t:"activemq 标签",I:0},["/tag/activemq/index.html"]],["v-0a85b3c4","/category/%E7%9B%91%E6%8E%A7/",{y:"p",t:"监控 分类",I:0},["/category/监控/","/category/%E7%9B%91%E6%8E%A7/index.html"]],["v-b30e41a8","/tag/jdk/",{y:"p",t:"jdk 标签",I:0},["/tag/jdk/index.html"]],["v-227ecbd6","/category/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/",{y:"p",t:"计算机网络 分类",I:0},["/category/计算机网络/","/category/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/index.html"]],["v-726fbe70","/tag/fastdfs/",{y:"p",t:"fastdfs 标签",I:0},["/tag/fastdfs/index.html"]],["v-4c40caa5","/category/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/",{y:"p",t:"操作系统 分类",I:0},["/category/操作系统/","/category/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/index.html"]],["v-3a134560","/tag/%E5%8D%9A%E5%AE%A2/",{y:"p",t:"博客 标签",I:0},["/tag/博客/","/tag/%E5%8D%9A%E5%AE%A2/index.html"]],["v-6193b4f4","/category/%E4%BA%91%E5%8E%9F%E7%94%9F/",{y:"p",t:"云原生 分类",I:0},["/category/云原生/","/category/%E4%BA%91%E5%8E%9F%E7%94%9F/index.html"]],["v-1ab38844","/tag/nexus/",{y:"p",t:"nexus 标签",I:0},["/tag/nexus/index.html"]],["v-e9c7e408","/category/%E5%89%8D%E7%AB%AF/",{y:"p",t:"前端 分类",I:0},["/category/前端/","/category/%E5%89%8D%E7%AB%AF/index.html"]],["v-63bcc623","/tag/rabbitmq/",{y:"p",t:"rabbitmq 标签",I:0},["/tag/rabbitmq/index.html"]],["v-e9a125fe","/category/golang/",{y:"p",t:"Golang 分类",I:0},["/category/golang/index.html"]],["v-5616b529","/tag/rocketmq/",{y:"p",t:"rocketmq 标签",I:0},["/tag/rocketmq/index.html"]],["v-78cbe7bb","/category/python/",{y:"p",t:"Python 分类",I:0},["/category/python/index.html"]],["v-2671299e","/tag/zookeeper/",{y:"p",t:"zookeeper 标签",I:0},["/tag/zookeeper/index.html"]],["v-9c48d85a","/category/linux/",{y:"p",t:"Linux 分类",I:0},["/category/linux/index.html"]],["v-b310d42a","/tag/git/",{y:"p",t:"Git 标签",I:0},["/tag/git/index.html"]],["v-9717cc36","/category/mysql/",{y:"p",t:"MySQL 分类",I:0},["/category/mysql/index.html"]],["v-db15110e","/tag/grafana/",{y:"p",t:"grafana 标签",I:0},["/tag/grafana/index.html"]],["v-8848dfa8","/category/redis/",{y:"p",t:"Redis 分类",I:0},["/category/redis/index.html"]],["v-465d9bbe","/tag/alert/",{y:"p",t:"alert 标签",I:0},["/tag/alert/index.html"]],["v-1715b471","/category/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7/",{y:"p",t:"自动化工具 分类",I:0},["/category/自动化工具/","/category/%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E5%85%B7/index.html"]],["v-169ad378","/tag/%E6%8A%80%E6%9C%AF%E5%8D%9A%E5%AE%A2/",{y:"p",t:"技术博客 标签",I:0},["/tag/技术博客/","/tag/%E6%8A%80%E6%9C%AF%E5%8D%9A%E5%AE%A2/index.html"]],["v-c3ed50a2","/category/web%E4%B8%AD%E9%97%B4%E4%BB%B6/",{y:"p",t:"web中间件 分类",I:0},["/category/web中间件/","/category/web%E4%B8%AD%E9%97%B4%E4%BB%B6/index.html"]],["v-03efcc30","/tag/%E5%A5%87%E6%8A%80%E6%B7%AB%E5%B7%A7/",{y:"p",t:"奇技淫巧 标签",I:0},["/tag/奇技淫巧/","/tag/%E5%A5%87%E6%8A%80%E6%B7%AB%E5%B7%A7/index.html"]],["v-b30b9fe4","/tag/mac/",{y:"p",t:"Mac 标签",I:0},["/tag/mac/index.html"]],["v-b30332ba","/tag/vim/",{y:"p",t:"vim 标签",I:0},["/tag/vim/index.html"]],["v-68014528","/tag/%E5%86%99%E4%BD%9C%E6%8E%92%E7%89%88/",{y:"p",t:"写作排版 标签",I:0},["/tag/写作排版/","/tag/%E5%86%99%E4%BD%9C%E6%8E%92%E7%89%88/index.html"]],["v-6e3f2a98","/tag/%E5%8E%9F%E7%90%86/",{y:"p",t:"原理 标签",I:0},["/tag/原理/","/tag/%E5%8E%9F%E7%90%86/index.html"]],["v-6106c001","/tag/docker/",{y:"p",t:"Docker 标签",I:0},["/tag/docker/index.html"]],["v-2863bf51","/tag/etcd/",{y:"p",t:"etcd 标签",I:0},["/tag/etcd/index.html"]],["v-742fbe9b","/tag/kubernetes/",{y:"p",t:"Kubernetes 标签",I:0},["/tag/kubernetes/index.html"]],["v-1d8b4315","/tag/harbor/",{y:"p",t:"harbor 标签",I:0},["/tag/harbor/index.html"]],["v-302533af","/tag/%E5%B7%A5%E4%BD%9C%E8%84%9A%E6%9C%AC/",{y:"p",t:"工作脚本 标签",I:0},["/tag/工作脚本/","/tag/%E5%B7%A5%E4%BD%9C%E8%84%9A%E6%9C%AC/index.html"]],["v-200c1937","/tag/vscode/",{y:"p",t:"vscode 标签",I:0},["/tag/vscode/index.html"]],["v-2831124d","/tag/bash/",{y:"p",t:"Bash 标签",I:0},["/tag/bash/index.html"]],["v-013498cd","/tag/%E9%A3%8E%E6%A0%BC/",{y:"p",t:"风格 标签",I:0},["/tag/风格/","/tag/%E9%A3%8E%E6%A0%BC/index.html"]],["v-6e776c45","/tag/ansible/",{y:"p",t:"Ansible 标签",I:0},["/tag/ansible/index.html"]],["v-13275df4","/tag/gitlab/",{y:"p",t:"Gitlab 标签",I:0},["/tag/gitlab/index.html"]],["v-30e11687","/tag/jenkins/",{y:"p",t:"Jenkins 标签",I:0},["/tag/jenkins/index.html"]],["v-49a91360","/tag/jumpserver/",{y:"p",t:"jumpserver 标签",I:0},["/tag/jumpserver/index.html"]],["v-be049512","/tag/prometheus/",{y:"p",t:"prometheus 标签",I:0},["/tag/prometheus/index.html"]],["v-564c406a","/tag/zabbix/",{y:"p",t:"Zabbix 标签",I:0},["/tag/zabbix/index.html"]],["v-1a8900ba","/tag/nginx/",{y:"p",t:"Nginx 标签",I:0},["/tag/nginx/index.html"]],["v-a018a546","/tag/tomcat/",{y:"p",t:"Tomcat 标签",I:0},["/tag/tomcat/index.html"]],["v-42e0c678","/tag/%E6%A6%82%E5%BF%B5/",{y:"p",t:"概念 标签",I:0},["/tag/概念/","/tag/%E6%A6%82%E5%BF%B5/index.html"]],["v-4b6ff193","/tag/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98/",{y:"p",t:"常见问题 标签",I:0},["/tag/常见问题/","/tag/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98/index.html"]],["v-09601066","/tag/shell/",{y:"p",t:"shell 标签",I:0},["/tag/shell/index.html"]],["v-d4172afa","/tag/linux%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4/",{y:"p",t:"linux常用命令 标签",I:0},["/tag/linux常用命令/","/tag/linux%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4/index.html"]]];var Co=S({name:"Vuepress",setup(){const n=Xv();return()=>r(n.value)}}),E_=()=>g_.reduce((n,[e,s,a,t])=>(n.push({name:e,path:s,component:Co,meta:a},...t.map(l=>({path:l,redirect:s}))),n),[{name:"404",path:"/:catchAll(.*)",component:Co}]),y_=gm,x_=()=>{const n=ah({history:y_(Si("/")),routes:E_(),scrollBehavior:(e,s,a)=>a||(e.hash?{el:e.hash}:{top:0})});return n.beforeResolve(async(e,s)=>{var a;(e.path!==s.path||s===De)&&([He.value]=await Promise.all([Ie.resolvePageData(e.name),(a=jr[e.name])==null?void 0:a.__asyncLoader()]))}),n},A_=n=>{n.component("ClientOnly",ct),n.component("Content",Wr)},w_=(n,e,s)=>{const a=Y(e.currentRoute.value.path);on(()=>e.currentRoute.value.path,h=>a.value=h);const t=x(()=>Ie.resolveLayouts(s)),l=x(()=>Ie.resolveRouteLocale(hs.value.locales,a.value)),o=x(()=>Ie.resolveSiteLocaleData(hs.value,l.value)),c=x(()=>Ie.resolvePageFrontmatter(He.value)),p=x(()=>Ie.resolvePageHeadTitle(He.value,o.value)),d=x(()=>Ie.resolvePageHead(p.value,c.value,o.value)),u=x(()=>Ie.resolvePageLang(He.value)),m=x(()=>Ie.resolvePageLayout(He.value,t.value));return n.provide(Wv,t),n.provide(zr,c),n.provide(Yv,p),n.provide(Nr,d),n.provide(Hr,u),n.provide(Ur,m),n.provide(Mi,l),n.provide(Kr,o),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>c.value},$head:{get:()=>d.value},$headTitle:{get:()=>p.value},$lang:{get:()=>u.value},$page:{get:()=>He.value},$routeLocale:{get:()=>l.value},$site:{get:()=>hs.value},$siteLocale:{get:()=>o.value},$withBase:{get:()=>In}}),{layouts:t,pageData:He,pageFrontmatter:c,pageHead:d,pageHeadTitle:p,pageLang:u,pageLayout:m,routeLocale:l,siteData:hs,siteLocaleData:o}},P_=()=>{const n=Qv(),e=$i(),s=Y([]),a=()=>{n.value.forEach(l=>{const o=L_(l);o&&s.value.push(o)})},t=()=>{document.documentElement.lang=e.value,s.value.forEach(l=>{l.parentNode===document.head&&document.head.removeChild(l)}),s.value.splice(0,s.value.length),n.value.forEach(l=>{const o=T_(l);o!==null&&(document.head.appendChild(o),s.value.push(o))})};he(Zv,t),yn(()=>{a(),t(),on(()=>n.value,()=>t())})},L_=([n,e,s=""])=>{const a=Object.entries(e).map(([c,p])=>mn(p)?`[${c}=${JSON.stringify(p)}]`:p===!0?`[${c}]`:"").join(""),t=`head > ${n}${a}`;return Array.from(document.querySelectorAll(t)).find(c=>c.innerText===s)||null},T_=([n,e,s])=>{if(!mn(n))return null;const a=document.createElement(n);return la(e)&&Object.entries(e).forEach(([t,l])=>{mn(l)?a.setAttribute(t,l):l===!0&&a.setAttribute(t,"")}),mn(s)&&a.appendChild(document.createTextNode(s)),a},I_=$v,D_=async()=>{var s;const n=I_({name:"VuepressApp",setup(){var a;P_();for(const t of ja)(a=t.setup)==null||a.call(t);return()=>[r(ic),...ja.flatMap(({rootComponents:t=[]})=>t.map(l=>r(l)))]}}),e=x_();A_(n),w_(n,e,ja);for(const a of ja)await((s=a.enhance)==null?void 0:s.call(a,{app:n,router:e,siteData:hs}));return n.use(e),{app:n,router:e}};D_().then(({app:n,router:e})=>{e.isReady().then(()=>{n.mount("#app")})});export{i as _,Rn as a,Lr as b,B_ as c,D_ as createVueApp,Tr as d,V_ as e,C_ as f,Uu as o,Yn as r,O_ as t,ou as w};
