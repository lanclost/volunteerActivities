"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9010],{74831:function(e,r){var t={BASE_SERVER:{URL:"https://volunteering-activities-f492d05e3c5a.herokuapp.com/api/",URL_UPLOAD:"https://volunteering-activities-f492d05e3c5a.herokuapp.com/api/"},ACCESS_TOKEN:{"x-access-token":localStorage.getItem("x-access-token")}};r.Z=t},39010:function(e,r,t){t.r(r);var n=t(4942),c=t(1413),a=t(74165),o=t(15861),s=t(29439),i=t(72791),l=t(2730),u=t(66106),f=t(30914),p=t(68678),d=t(87309),x=t(22134),Z=t(57689),m=t(11087),h=t(61044),v=t(74831),g=t(21830),j=t.n(g),y=t(80184);r.default=function(){var e=(0,Z.s0)(),r=(0,i.useState)({username:"",password:"",confirm_password:""}),t=(0,s.Z)(r,2),g=t[0],b=t[1],w=function(){var r=(0,o.Z)((0,a.Z)().mark((function r(t){return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),r.prev=1,!(""===g.username?(j().fire({icon:"warning",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",text:"\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49",timer:2e3}),0):""===g.password?(j().fire({icon:"warning",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",text:"\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19",timer:2e3}),0):""===g.confirm_password?(j().fire({icon:"warning",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",text:"\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19",timer:2e3}),0):g.password===g.confirm_password||(j().fire({icon:"warning",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",text:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e44\u0e21\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e19",timer:2e3}),0))){r.next=7;break}return r.next=5,h.ZP.post("".concat(v.Z.BASE_SERVER.URL,"user/repassword/index.php"),{username:g.username,password:g.password});case 5:r.sent.data.require&&j().fire({icon:"success",title:"\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",text:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",timer:2e3}).then((function(){e("/login")}));case 7:r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}(),_=function(e){b((0,c.Z)((0,c.Z)({},g),{},(0,n.Z)({},e.target.name,e.target.value)))};return(0,i.useEffect)((function(){getData()}),[]),(0,y.jsx)("div",{children:(0,y.jsx)("div",{className:"logincontainer",children:(0,y.jsxs)(l.Z,{className:"cardlogin",children:[(0,y.jsxs)(u.Z,{children:[(0,y.jsx)(f.Z,{span:7}),(0,y.jsx)(f.Z,{children:(0,y.jsx)("h4",{children:"\u0e23\u0e35\u0e40\u0e0b\u0e47\u0e15\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19"})})]}),(0,y.jsx)("br",{}),(0,y.jsx)(u.Z,{justify:"center",children:(0,y.jsx)(f.Z,{span:18,children:(0,y.jsx)(p.Z,{size:"large",name:"username",placeholder:"\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49",onChange:function(e){return _(e)},prefix:(0,y.jsx)(x.nf1,{className:"iconuser"}),required:!0})})}),(0,y.jsx)("br",{}),(0,y.jsx)(u.Z,{justify:"center",children:(0,y.jsx)(f.Z,{span:18,children:(0,y.jsx)(p.Z,{type:"password",size:"large",name:"password",placeholder:"\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e43\u0e2b\u0e21\u0e48",onChange:function(e){return _(e)},prefix:(0,y.jsx)(x.BTk,{className:"iconuser"}),required:!0})})}),(0,y.jsx)("br",{}),(0,y.jsx)(u.Z,{justify:"center",children:(0,y.jsx)(f.Z,{span:18,children:(0,y.jsx)(p.Z,{type:"password",size:"large",name:"confirm_password",placeholder:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19",onChange:function(e){return _(e)},prefix:(0,y.jsx)(x.YfK,{className:"iconuser"}),required:!0})})}),(0,y.jsx)("br",{}),(0,y.jsxs)(u.Z,{justify:"center",children:[(0,y.jsx)(f.Z,{span:8,children:(0,y.jsx)(m.rU,{to:"/login",children:(0,y.jsx)(d.Z,{size:"large",children:"\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a"})})}),(0,y.jsx)(f.Z,{span:8,children:(0,y.jsx)(d.Z,{type:"submit",size:"large",block:!0,onClick:function(e){return w(e)},children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})]})})})}},30914:function(e,r,t){var n=t(89752);r.Z=n.Z},79426:function(e,r,t){var n=(0,t(72791).createContext)({});r.Z=n},89752:function(e,r,t){var n=t(4942),c=t(87462),a=t(71002),o=t(81694),s=t.n(o),i=t(72791),l=t(71929),u=t(79426),f=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)r.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(t[n[c]]=e[n[c]])}return t};var p=["xs","sm","md","lg","xl","xxl"],d=i.forwardRef((function(e,r){var t,o=i.useContext(l.E_),d=o.getPrefixCls,x=o.direction,Z=i.useContext(u.Z),m=Z.gutter,h=Z.wrap,v=Z.supportFlexGap,g=e.prefixCls,j=e.span,y=e.order,b=e.offset,w=e.push,_=e.pull,O=e.className,E=e.children,C=e.flex,k=e.style,P=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),S=d("col",g),N={};p.forEach((function(r){var t,o={},s=e[r];"number"===typeof s?o.span=s:"object"===(0,a.Z)(s)&&(o=s||{}),delete P[r],N=(0,c.Z)((0,c.Z)({},N),(t={},(0,n.Z)(t,"".concat(S,"-").concat(r,"-").concat(o.span),void 0!==o.span),(0,n.Z)(t,"".concat(S,"-").concat(r,"-order-").concat(o.order),o.order||0===o.order),(0,n.Z)(t,"".concat(S,"-").concat(r,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,n.Z)(t,"".concat(S,"-").concat(r,"-push-").concat(o.push),o.push||0===o.push),(0,n.Z)(t,"".concat(S,"-").concat(r,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,n.Z)(t,"".concat(S,"-rtl"),"rtl"===x),t))}));var R=s()(S,(t={},(0,n.Z)(t,"".concat(S,"-").concat(j),void 0!==j),(0,n.Z)(t,"".concat(S,"-order-").concat(y),y),(0,n.Z)(t,"".concat(S,"-offset-").concat(b),b),(0,n.Z)(t,"".concat(S,"-push-").concat(w),w),(0,n.Z)(t,"".concat(S,"-pull-").concat(_),_),t),O,N),A={};if(m&&m[0]>0){var L=m[0]/2;A.paddingLeft=L,A.paddingRight=L}if(m&&m[1]>0&&!v){var z=m[1]/2;A.paddingTop=z,A.paddingBottom=z}return C&&(A.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(C),!1!==h||A.minWidth||(A.minWidth=0)),i.createElement("div",(0,c.Z)({},P,{style:(0,c.Z)((0,c.Z)({},A),k),className:R,ref:r}),E)}));r.Z=d},37545:function(e,r,t){var n=t(87462),c=t(4942),a=t(71002),o=t(29439),s=t(81694),i=t.n(s),l=t(72791),u=t(71929),f=t(19911),p=t(78295),d=t(79393),x=t(79426),Z=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)r.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(t[n[c]]=e[n[c]])}return t},m=((0,d.b)("top","middle","bottom","stretch"),(0,d.b)("start","end","center","space-around","space-between","space-evenly"),l.forwardRef((function(e,r){var t,s=e.prefixCls,d=e.justify,m=e.align,h=e.className,v=e.style,g=e.children,j=e.gutter,y=void 0===j?0:j,b=e.wrap,w=Z(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),_=l.useContext(u.E_),O=_.getPrefixCls,E=_.direction,C=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),k=(0,o.Z)(C,2),P=k[0],S=k[1],N=(0,f.Z)(),R=l.useRef(y);l.useEffect((function(){var e=p.ZP.subscribe((function(e){var r=R.current||0;(!Array.isArray(r)&&"object"===(0,a.Z)(r)||Array.isArray(r)&&("object"===(0,a.Z)(r[0])||"object"===(0,a.Z)(r[1])))&&S(e)}));return function(){return p.ZP.unsubscribe(e)}}),[]);var A=O("row",s),L=function(){var e=[void 0,void 0];return(Array.isArray(y)?y:[y,void 0]).forEach((function(r,t){if("object"===(0,a.Z)(r))for(var n=0;n<p.c4.length;n++){var c=p.c4[n];if(P[c]&&void 0!==r[c]){e[t]=r[c];break}}else e[t]=r})),e}(),z=i()(A,(t={},(0,c.Z)(t,"".concat(A,"-no-wrap"),!1===b),(0,c.Z)(t,"".concat(A,"-").concat(d),d),(0,c.Z)(t,"".concat(A,"-").concat(m),m),(0,c.Z)(t,"".concat(A,"-rtl"),"rtl"===E),t),h),B={},U=null!=L[0]&&L[0]>0?L[0]/-2:void 0,q=null!=L[1]&&L[1]>0?L[1]/-2:void 0;if(U&&(B.marginLeft=U,B.marginRight=U),N){var T=(0,o.Z)(L,2);B.rowGap=T[1]}else q&&(B.marginTop=q,B.marginBottom=q);var D=(0,o.Z)(L,2),G=D[0],I=D[1],F=l.useMemo((function(){return{gutter:[G,I],wrap:b,supportFlexGap:N}}),[G,I,b,N]);return l.createElement(x.Z.Provider,{value:F},l.createElement("div",(0,n.Z)({},w,{className:z,style:(0,n.Z)((0,n.Z)({},B),v),ref:r}),g))})));r.Z=m},66106:function(e,r,t){var n=t(37545);r.Z=n.Z}}]);
//# sourceMappingURL=9010.8472b028.chunk.js.map