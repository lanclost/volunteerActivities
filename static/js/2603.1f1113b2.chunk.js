"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2603],{74831:function(e,t){var r={BASE_SERVER:{URL:"https://volunteering-activities-f492d05e3c5a.herokuapp.com/api/",URL_UPLOAD:"https://volunteering-activities-f492d05e3c5a.herokuapp.com/api/"},ACCESS_TOKEN:{"x-access-token":localStorage.getItem("x-access-token")}};t.Z=r},12603:function(e,t,r){r.r(t);var n=r(4942),a=r(74165),c=r(1413),o=r(15861),i=r(29439),s=r(68678),p=r(2730),l=r(66106),u=r(30914),f=r(87309),d=r(21830),Z=r.n(d),x=r(74831),v=r(72791),h=r(57689),m=r(11087),g=r(61044),y=r(80184);t.default=function(){var e=(0,h.s0)(),t=s.Z.TextArea,r=(0,v.useState)({insert_paper:"",paper_id:"",paper_detail:"",paper:""}),d=(0,i.Z)(r,2),b=d[0],j=d[1],_=(0,v.useState)(null),w=(0,i.Z)(_,2),E=w[0],O=w[1],S=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,e.prev=1,e.next=4,g.ZP.post("".concat(x.Z.BASE_SERVER.URL,"paper/index.php"),{action:"getPaperLastID",code:"PPID-U"+t.getFullYear(),digit:3});case 4:r=e.sent,j((0,c.Z)((0,c.Z)({},b),{},{paper_id:r.data.data[0].paper_maxcode})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();(0,v.useEffect)((function(){S()}),[]);var P=function(){var t=(0,o.Z)((0,a.Z)().mark((function t(r){var n,c,o,i,s,p;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),t.prev=1,n=new FormData,c=E.name.split(".").pop(),o=E.name.split(".")[0],i="".concat(o,"_").concat(Date.now().toString(16),".").concat(c),n.append("file",E,i),!(""===b.paper_detail?(Z().fire({icon:"warning",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",text:"\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23",timer:3e3}),0):""!==E||(Z().fire({icon:"warning",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",text:"\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38\u0e44\u0e1f\u0e25\u0e4c\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23",timer:3e3}),0))){t.next=15;break}return t.next=10,g.ZP.post("".concat(x.Z.BASE_SERVER.URL,"paper/insert/index.php"),{insert_paper:b.insert_paper,paper_id:b.paper_id,paper_detail:b.paper_detail,paper:i});case 10:return s=t.sent,t.next=13,g.ZP.post("".concat(x.Z.BASE_SERVER.URL,"upload/index.php"),n);case 13:p=t.sent,s.data.require&&p.data.require&&Z().fire({icon:"success",title:"\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",text:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",timer:3e3}).then((function(){e("/paper")}));case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[1,17]])})));return function(e){return t.apply(this,arguments)}}();return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(p.Z,{title:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23",children:[(0,y.jsx)(l.Z,{justify:"center",children:(0,y.jsx)(u.Z,{span:8,children:(0,y.jsx)(l.Z,{justify:"center",children:(0,y.jsx)(u.Z,{children:(0,y.jsx)("input",{type:"file",name:"file",onChange:function(e){return function(e){var t=e.target.files[0];t||Z().fire({icon:"warning",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",text:"\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38\u0e44\u0e1f\u0e25\u0e4c\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23",timer:3e3}),t.type.startsWith("image/")&&Z().fire({icon:"warning",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",text:"\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2d\u0e31\u0e1e\u0e42\u0e2b\u0e25\u0e14\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e",timer:3e3}),O(t)}(e)}})})})})}),(0,y.jsx)("br",{}),(0,y.jsx)(l.Z,{justify:"center",children:(0,y.jsxs)(u.Z,{span:8,children:[(0,y.jsx)("label",{children:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23"}),(0,y.jsx)(t,{rows:5,placeholder:"....",name:"paper_detail",onChange:function(e){j((0,c.Z)((0,c.Z)({},b),{},(0,n.Z)({},e.target.name,e.target.value)))},required:!0})]})}),(0,y.jsx)("br",{}),(0,y.jsxs)(l.Z,{justify:"center",children:[(0,y.jsx)(u.Z,{span:2,children:(0,y.jsx)(m.rU,{to:"/paper",children:(0,y.jsx)(f.Z,{children:"\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a"})})}),(0,y.jsx)(u.Z,{span:1}),(0,y.jsx)(u.Z,{span:2,children:(0,y.jsx)(f.Z,{type:"submit",onClick:function(e){return P(e)},children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})]})})}},30914:function(e,t,r){var n=r(89752);t.Z=n.Z},79426:function(e,t,r){var n=(0,r(72791).createContext)({});t.Z=n},89752:function(e,t,r){var n=r(4942),a=r(87462),c=r(71002),o=r(81694),i=r.n(o),s=r(72791),p=r(71929),l=r(79426),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};var f=["xs","sm","md","lg","xl","xxl"],d=s.forwardRef((function(e,t){var r,o=s.useContext(p.E_),d=o.getPrefixCls,Z=o.direction,x=s.useContext(l.Z),v=x.gutter,h=x.wrap,m=x.supportFlexGap,g=e.prefixCls,y=e.span,b=e.order,j=e.offset,_=e.push,w=e.pull,E=e.className,O=e.children,S=e.flex,P=e.style,R=u(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),C=d("col",g),k={};f.forEach((function(t){var r,o={},i=e[t];"number"===typeof i?o.span=i:"object"===(0,c.Z)(i)&&(o=i||{}),delete R[t],k=(0,a.Z)((0,a.Z)({},k),(r={},(0,n.Z)(r,"".concat(C,"-").concat(t,"-").concat(o.span),void 0!==o.span),(0,n.Z)(r,"".concat(C,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),(0,n.Z)(r,"".concat(C,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,n.Z)(r,"".concat(C,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),(0,n.Z)(r,"".concat(C,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,n.Z)(r,"".concat(C,"-rtl"),"rtl"===Z),r))}));var A=i()(C,(r={},(0,n.Z)(r,"".concat(C,"-").concat(y),void 0!==y),(0,n.Z)(r,"".concat(C,"-order-").concat(b),b),(0,n.Z)(r,"".concat(C,"-offset-").concat(j),j),(0,n.Z)(r,"".concat(C,"-push-").concat(_),_),(0,n.Z)(r,"".concat(C,"-pull-").concat(w),w),r),E,k),L={};if(v&&v[0]>0){var U=v[0]/2;L.paddingLeft=U,L.paddingRight=U}if(v&&v[1]>0&&!m){var D=v[1]/2;L.paddingTop=D,L.paddingBottom=D}return S&&(L.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(S),!1!==h||L.minWidth||(L.minWidth=0)),s.createElement("div",(0,a.Z)({},R,{style:(0,a.Z)((0,a.Z)({},L),P),className:A,ref:t}),O)}));t.Z=d},37545:function(e,t,r){var n=r(87462),a=r(4942),c=r(71002),o=r(29439),i=r(81694),s=r.n(i),p=r(72791),l=r(71929),u=r(19911),f=r(78295),d=r(79393),Z=r(79426),x=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},v=((0,d.b)("top","middle","bottom","stretch"),(0,d.b)("start","end","center","space-around","space-between","space-evenly"),p.forwardRef((function(e,t){var r,i=e.prefixCls,d=e.justify,v=e.align,h=e.className,m=e.style,g=e.children,y=e.gutter,b=void 0===y?0:y,j=e.wrap,_=x(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=p.useContext(l.E_),E=w.getPrefixCls,O=w.direction,S=p.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),P=(0,o.Z)(S,2),R=P[0],C=P[1],k=(0,u.Z)(),A=p.useRef(b);p.useEffect((function(){var e=f.ZP.subscribe((function(e){var t=A.current||0;(!Array.isArray(t)&&"object"===(0,c.Z)(t)||Array.isArray(t)&&("object"===(0,c.Z)(t[0])||"object"===(0,c.Z)(t[1])))&&C(e)}));return function(){return f.ZP.unsubscribe(e)}}),[]);var L=E("row",i),U=function(){var e=[void 0,void 0];return(Array.isArray(b)?b:[b,void 0]).forEach((function(t,r){if("object"===(0,c.Z)(t))for(var n=0;n<f.c4.length;n++){var a=f.c4[n];if(R[a]&&void 0!==t[a]){e[r]=t[a];break}}else e[r]=t})),e}(),D=s()(L,(r={},(0,a.Z)(r,"".concat(L,"-no-wrap"),!1===j),(0,a.Z)(r,"".concat(L,"-").concat(d),d),(0,a.Z)(r,"".concat(L,"-").concat(v),v),(0,a.Z)(r,"".concat(L,"-rtl"),"rtl"===O),r),h),N={},B=null!=U[0]&&U[0]>0?U[0]/-2:void 0,F=null!=U[1]&&U[1]>0?U[1]/-2:void 0;if(B&&(N.marginLeft=B,N.marginRight=B),k){var I=(0,o.Z)(U,2);N.rowGap=I[1]}else F&&(N.marginTop=F,N.marginBottom=F);var T=(0,o.Z)(U,2),V=T[0],q=T[1],G=p.useMemo((function(){return{gutter:[V,q],wrap:j,supportFlexGap:k}}),[V,q,j,k]);return p.createElement(Z.Z.Provider,{value:G},p.createElement("div",(0,n.Z)({},_,{className:D,style:(0,n.Z)((0,n.Z)({},N),m),ref:t}),g))})));t.Z=v},66106:function(e,t,r){var n=r(37545);t.Z=n.Z}}]);
//# sourceMappingURL=2603.1f1113b2.chunk.js.map