"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3597],{74831:function(e,t){var r={BASE_SERVER:{URL:"https://volunteering-activities-f492d05e3c5a.herokuapp.com/api/",URL_UPLOAD:"https://volunteering-activities-f492d05e3c5a.herokuapp.com/api/"},ACCESS_TOKEN:{"x-access-token":localStorage.getItem("x-access-token")}};t.Z=r},23597:function(e,t,r){r.r(t);var n=r(1413),a=r(74165),s=r(15861),c=r(29439),o=r(2730),i=r(66106),u=r(30914),l=r(68678),d=r(99051),p=r(87309),x=r(74831),f=r(72791),Z=r(57689),h=r(11087),j=r(61044),m=r(21830),v=r.n(m),g=r(80184);t.default=function(){var e=JSON.parse(window.localStorage.getItem("user")),t=(0,Z.s0)(),r=(0,Z.UO)(),m=(0,f.useState)([]),y=(0,c.Z)(m,2),_=y[0],b=y[1],w=(0,f.useState)({user_id:"",user_approve_status:""}),E=(0,c.Z)(w,2),k=E[0],F=E[1],S=(0,f.useState)([]),R=(0,c.Z)(S,2),O=R[0],C=R[1],A=(0,f.useState)([]),P=(0,c.Z)(A,2),B=P[0],U=P[1],L=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.ZP.post("".concat(x.Z.BASE_SERVER.URL,"user/index.php"),{user_id:r.id});case 3:(t=e.sent).data.require&&b(t.data.data[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.ZP.post("".concat(x.Z.BASE_SERVER.URL,"accumulated/index.php"),{action:"getAccumulatedByRemaining",user_id:r.id});case 3:(t=e.sent).data.require?U(t.data.data[0]):console.log(t.data.message),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.ZP.post("".concat(x.Z.BASE_SERVER.URL,"accumulated/index.php"),{action:"getAccumulatedByList",user_id:r.id});case 3:(t=e.sent).data.data.forEach((function(e,t){e.index=t+1})),t.data.require?C(t.data.data):console.log(t.data.message),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var r=(0,s.Z)((0,a.Z)().mark((function r(n){return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.preventDefault(),r.prev=1,""===e.user_approve_status&&(v().fire({icon:"warning",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",text:"\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25",timer:2e3}),1)){r.next=7;break}return r.next=5,j.ZP.post("".concat(x.Z.BASE_SERVER.URL,"user/user-approve-status/index.php"),{user_id:_.user_id,user_approve_status:k.user_approve_status});case 5:r.sent.data.require&&v().fire({icon:"success",title:"\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",text:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",timer:2e3}).then((function(){t("/user")}));case 7:r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}();(0,f.useEffect)((function(){F((0,n.Z)((0,n.Z)({},k),{},{user_approve_status:"allow"})),L()}),[]),(0,f.useEffect)((function(){N(),I()}),[]);var V=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0e15\u0e01\u0e25\u0e07",cancelButtonText:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01"}).then(function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConfirmed){e.next=5;break}return e.next=3,j.ZP.post("".concat(x.Z.BASE_SERVER.URL,"user/delete/index.php"),{user_id:r});case 3:e.sent.data.require?v().fire({icon:"success",title:"\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",text:"\u0e25\u0e1a\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",timer:2e3}).then((function(){L(),t("/user-request")})):console.log(response.data.message,"DeleteData");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(o.Z,{title:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49",children:[(0,g.jsxs)(i.Z,{children:[(0,g.jsx)(u.Z,{span:3}),(0,g.jsxs)(u.Z,{span:18,children:[(0,g.jsxs)(i.Z,{justify:"center",children:[(0,g.jsxs)(u.Z,{span:11,children:[(0,g.jsx)("label",{children:"\u0e0a\u0e37\u0e48\u0e2d-\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25"}),(0,g.jsx)("br",{}),(0,g.jsx)(l.Z,{bordered:!1,value:_.name,span:2})]}),(0,g.jsx)(u.Z,{span:2}),(0,g.jsxs)(u.Z,{span:11,children:[(0,g.jsx)("label",{children:"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23"}),(0,g.jsx)("br",{}),(0,g.jsx)(l.Z,{bordered:!1,value:_.telephone})]})]}),(0,g.jsx)("br",{}),(0,g.jsxs)(i.Z,{justify:"center",children:[(0,g.jsx)(g.Fragment,{children:"\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32"===_.type_name?(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(u.Z,{span:11,children:[(0,g.jsx)("label",{children:"\u0e0a\u0e31\u0e49\u0e19\u0e1b\u0e35"}),(0,g.jsx)("br",{}),(0,g.jsx)(l.Z,{bordered:!1,value:_.class})]})}):(0,g.jsx)(g.Fragment,{})}),(0,g.jsx)(u.Z,{span:2}),(0,g.jsx)(g.Fragment,{children:"\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32"===_.type_name?(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(u.Z,{span:11,children:[(0,g.jsx)("label",{children:"\u0e23\u0e2b\u0e31\u0e2a\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32"}),(0,g.jsx)("br",{}),(0,g.jsx)(l.Z,{bordered:!1,value:_.student_id})]})}):(0,g.jsx)(g.Fragment,{})})]}),(0,g.jsx)("br",{}),(0,g.jsx)(g.Fragment,{children:"\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e20\u0e32\u0e22\u0e19\u0e2d\u0e01"!==_.type_name?(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(i.Z,{justify:"center",children:[(0,g.jsxs)(u.Z,{span:11,children:[(0,g.jsx)("label",{children:"\u0e04\u0e13\u0e30"}),(0,g.jsx)("br",{}),(0,g.jsx)(l.Z,{bordered:!1,value:_.faculty_name})]}),(0,g.jsx)(u.Z,{span:2}),(0,g.jsxs)(u.Z,{span:11,children:[(0,g.jsx)("label",{children:"\u0e2a\u0e32\u0e02\u0e32"}),(0,g.jsx)("br",{}),(0,g.jsx)(l.Z,{bordered:!1,value:_.department_name})]})]})}):(0,g.jsx)(g.Fragment,{})})]})]}),(0,g.jsx)("br",{}),(0,g.jsx)(g.Fragment,{children:"\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32"===_.type_name?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(i.Z,{justify:"center",children:[(0,g.jsx)(u.Z,{children:(0,g.jsxs)(i.Z,{justify:"pace-evenly",children:[(0,g.jsx)(u.Z,{children:(0,g.jsx)("label",{children:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e2a\u0e30\u0e2a\u0e21\u0e20\u0e32\u0e04\u0e01\u0e32\u0e23\u0e28\u0e36\u0e01\u0e29\u0e32"})}),(0,g.jsx)(u.Z,{span:2}),(0,g.jsx)(u.Z,{span:8,children:(0,g.jsx)(l.Z,{value:B.maximum_hour,bordered:!1})})]})}),(0,g.jsx)(u.Z,{children:(0,g.jsxs)(i.Z,{justify:"pace-evenly",children:[(0,g.jsx)(u.Z,{children:(0,g.jsx)("label",{children:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e17\u0e35\u0e48\u0e02\u0e32\u0e14"})}),(0,g.jsx)(u.Z,{span:4}),(0,g.jsx)(u.Z,{span:8,children:(0,g.jsx)(l.Z,{value:B.remaining_hours,bordered:!1})})]})})]}),(0,g.jsx)("br",{}),(0,g.jsx)(d.Z,{columns:[{title:"\u0e25\u0e33\u0e14\u0e31\u0e1a",dataIndex:"index",key:"index"},{title:"\u0e0a\u0e37\u0e48\u0e2d\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21",dataIndex:"activity_name",key:"activity_name"},{title:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e14\u0e49\u0e32\u0e19\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21",dataIndex:"category",key:"category"},{title:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21",key:"type_name",dataIndex:"type_name"},{title:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",key:"accumulated_hours",dataIndex:"accumulated_hours"}],dataSource:O,rowKey:"accumulated_id"})]}):(0,g.jsx)(g.Fragment,{})}),(0,g.jsxs)(i.Z,{justify:"center",children:[(0,g.jsx)(u.Z,{span:4,children:(0,g.jsx)(g.Fragment,{children:"wait"===e.user_approve_status||"allow"===e.user_approve_status?(0,g.jsx)(h.rU,{to:"/user/",children:(0,g.jsx)(p.Z,{block:!0,children:"\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a"})}):null})}),(0,g.jsx)(u.Z,{span:1}),(0,g.jsx)(u.Z,{span:2,children:(0,g.jsx)(g.Fragment,{children:"01"===e.user_type_id?(0,g.jsx)(u.Z,{span:2,children:(0,g.jsx)(h.rU,{to:"/user-update/".concat(_.user_id),children:(0,g.jsx)(p.Z,{children:"\u0e41\u0e01\u0e49\u0e44\u0e02"})})}):(0,g.jsx)(g.Fragment,{})})}),(0,g.jsx)(u.Z,{span:1}),(0,g.jsx)(g.Fragment,{children:"wait"===_.user_approve_status?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(g.Fragment,{children:"01"===e.user_type_id?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u.Z,{span:2,children:(0,g.jsx)(p.Z,{onClick:function(e){return q(e)},children:"\u0e2d\u0e19\u0e38\u0e21\u0e31\u0e15\u0e34"})}),(0,g.jsx)(u.Z,{span:1}),(0,g.jsx)(u.Z,{span:2,children:(0,g.jsx)(p.Z,{onClick:function(){V(_.user_id)},children:"\u0e44\u0e21\u0e48\u0e2d\u0e19\u0e38\u0e21\u0e31\u0e15\u0e34"})})]}):(0,g.jsx)(g.Fragment,{})}),(0,g.jsx)(g.Fragment,{children:_.user_id?(0,g.jsx)(g.Fragment,{children:"01"!==e.user_type_id?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(u.Z,{span:2,children:(0,g.jsx)(h.rU,{to:"/user-update/".concat(_.user_id),children:(0,g.jsx)(p.Z,{children:"\u0e41\u0e01\u0e49\u0e44\u0e02"})})})}):(0,g.jsx)(g.Fragment,{})}):(0,g.jsx)(g.Fragment,{})})]}):(0,g.jsx)(g.Fragment,{})})]}),(0,g.jsx)("br",{})]})})}},30914:function(e,t,r){var n=r(89752);t.Z=n.Z},79426:function(e,t,r){var n=(0,r(72791).createContext)({});t.Z=n},89752:function(e,t,r){var n=r(4942),a=r(87462),s=r(71002),c=r(81694),o=r.n(c),i=r(72791),u=r(71929),l=r(79426),d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};var p=["xs","sm","md","lg","xl","xxl"],x=i.forwardRef((function(e,t){var r,c=i.useContext(u.E_),x=c.getPrefixCls,f=c.direction,Z=i.useContext(l.Z),h=Z.gutter,j=Z.wrap,m=Z.supportFlexGap,v=e.prefixCls,g=e.span,y=e.order,_=e.offset,b=e.push,w=e.pull,E=e.className,k=e.children,F=e.flex,S=e.style,R=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),O=x("col",v),C={};p.forEach((function(t){var r,c={},o=e[t];"number"===typeof o?c.span=o:"object"===(0,s.Z)(o)&&(c=o||{}),delete R[t],C=(0,a.Z)((0,a.Z)({},C),(r={},(0,n.Z)(r,"".concat(O,"-").concat(t,"-").concat(c.span),void 0!==c.span),(0,n.Z)(r,"".concat(O,"-").concat(t,"-order-").concat(c.order),c.order||0===c.order),(0,n.Z)(r,"".concat(O,"-").concat(t,"-offset-").concat(c.offset),c.offset||0===c.offset),(0,n.Z)(r,"".concat(O,"-").concat(t,"-push-").concat(c.push),c.push||0===c.push),(0,n.Z)(r,"".concat(O,"-").concat(t,"-pull-").concat(c.pull),c.pull||0===c.pull),(0,n.Z)(r,"".concat(O,"-rtl"),"rtl"===f),r))}));var A=o()(O,(r={},(0,n.Z)(r,"".concat(O,"-").concat(g),void 0!==g),(0,n.Z)(r,"".concat(O,"-order-").concat(y),y),(0,n.Z)(r,"".concat(O,"-offset-").concat(_),_),(0,n.Z)(r,"".concat(O,"-push-").concat(b),b),(0,n.Z)(r,"".concat(O,"-pull-").concat(w),w),r),E,C),P={};if(h&&h[0]>0){var B=h[0]/2;P.paddingLeft=B,P.paddingRight=B}if(h&&h[1]>0&&!m){var U=h[1]/2;P.paddingTop=U,P.paddingBottom=U}return F&&(P.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(F),!1!==j||P.minWidth||(P.minWidth=0)),i.createElement("div",(0,a.Z)({},R,{style:(0,a.Z)((0,a.Z)({},P),S),className:A,ref:t}),k)}));t.Z=x},37545:function(e,t,r){var n=r(87462),a=r(4942),s=r(71002),c=r(29439),o=r(81694),i=r.n(o),u=r(72791),l=r(71929),d=r(19911),p=r(78295),x=r(79393),f=r(79426),Z=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},h=((0,x.b)("top","middle","bottom","stretch"),(0,x.b)("start","end","center","space-around","space-between","space-evenly"),u.forwardRef((function(e,t){var r,o=e.prefixCls,x=e.justify,h=e.align,j=e.className,m=e.style,v=e.children,g=e.gutter,y=void 0===g?0:g,_=e.wrap,b=Z(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=u.useContext(l.E_),E=w.getPrefixCls,k=w.direction,F=u.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),S=(0,c.Z)(F,2),R=S[0],O=S[1],C=(0,d.Z)(),A=u.useRef(y);u.useEffect((function(){var e=p.ZP.subscribe((function(e){var t=A.current||0;(!Array.isArray(t)&&"object"===(0,s.Z)(t)||Array.isArray(t)&&("object"===(0,s.Z)(t[0])||"object"===(0,s.Z)(t[1])))&&O(e)}));return function(){return p.ZP.unsubscribe(e)}}),[]);var P=E("row",o),B=function(){var e=[void 0,void 0];return(Array.isArray(y)?y:[y,void 0]).forEach((function(t,r){if("object"===(0,s.Z)(t))for(var n=0;n<p.c4.length;n++){var a=p.c4[n];if(R[a]&&void 0!==t[a]){e[r]=t[a];break}}else e[r]=t})),e}(),U=i()(P,(r={},(0,a.Z)(r,"".concat(P,"-no-wrap"),!1===_),(0,a.Z)(r,"".concat(P,"-").concat(x),x),(0,a.Z)(r,"".concat(P,"-").concat(h),h),(0,a.Z)(r,"".concat(P,"-rtl"),"rtl"===k),r),j),L={},I=null!=B[0]&&B[0]>0?B[0]/-2:void 0,N=null!=B[1]&&B[1]>0?B[1]/-2:void 0;if(I&&(L.marginLeft=I,L.marginRight=I),C){var q=(0,c.Z)(B,2);L.rowGap=q[1]}else N&&(L.marginTop=N,L.marginBottom=N);var V=(0,c.Z)(B,2),T=V[0],D=V[1],G=u.useMemo((function(){return{gutter:[T,D],wrap:_,supportFlexGap:C}}),[T,D,_,C]);return u.createElement(f.Z.Provider,{value:G},u.createElement("div",(0,n.Z)({},b,{className:U,style:(0,n.Z)((0,n.Z)({},L),m),ref:t}),v))})));t.Z=h},66106:function(e,t,r){var n=r(37545);t.Z=n.Z}}]);
//# sourceMappingURL=3597.662f9d9f.chunk.js.map