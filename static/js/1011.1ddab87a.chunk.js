"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1011],{74831:function(e,t){var n={BASE_SERVER:{URL:"https://volunteering-activities-f492d05e3c5a.herokuapp.com/api/",URL_UPLOAD:"https://volunteering-activities-f492d05e3c5a.herokuapp.com/api/"},ACCESS_TOKEN:{"x-access-token":localStorage.getItem("x-access-token")}};t.Z=n},91011:function(e,t,n){n.r(t);var r=n(74165),a=n(15861),i=n(29439),c=n(83099),o=n(87309),l=n(2730),s=n(99051),p=n(72791),u=n(57689),d=n(11087),f=n(61044),m=n(21830),x=n.n(m),v=n(74831),h=n(80184);t.default=function(){var e=(0,u.s0)(),t=JSON.parse(window.localStorage.getItem("user")),n=(0,p.useState)([]),m=(0,i.Z)(n,2),g=m[0],y=m[1],Z=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.ZP.post("".concat(v.Z.BASE_SERVER.URL,"paper/index.php"),{action:"getPaperBy"});case 3:(t=e.sent).data.require?y(t.data.data):console.log(t.data.message),t.data.data.forEach((function(e,t){e.index=t+1})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,p.useEffect)((function(){Z()}),[]);var _=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x().fire({title:"\u0e04\u0e38\u0e13\u0e41\u0e19\u0e48\u0e43\u0e08\u0e17\u0e35\u0e48\u0e08\u0e30\u0e25\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25?",text:"\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e04\u0e38\u0e13\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e08\u0e30\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e14\u0e49!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19",cancelButtonText:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01"}).then(function(){var t=(0,a.Z)((0,r.Z)().mark((function t(a){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.isConfirmed){t.next=5;break}return t.next=3,f.ZP.post("".concat(v.Z.BASE_SERVER.URL,"paper/delete/index.php"),{paper_id:n});case 3:t.sent.data.require?x().fire({icon:"success",title:"\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",text:"\u0e25\u0e1a\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",timer:2e3}).then((function(){e(0)})):x().fire({icon:"error",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",text:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",timer:2e3});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=[{title:"\u0e25\u0e33\u0e14\u0e31\u0e1a",dataIndex:"index",key:"index"},{title:"\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23",dataIndex:"paper_detail",key:"paper_detail"},{title:"\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23",key:"action",render:function(e,n){return(0,h.jsxs)(c.Z,{size:"middle",children:[(0,h.jsx)(d.rU,{to:"".concat(v.Z.BASE_SERVER.URL,"upload/volunteering_activities_API/uploads/").concat(n.paper),target:"_blank",children:(0,h.jsx)(o.Z,{type:"primary",children:"\u0e14\u0e32\u0e27\u0e42\u0e2b\u0e25\u0e14"})}),(0,h.jsx)(h.Fragment,{children:"01"==t.user_type_id?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(o.Z,{type:"danger",onClick:function(){_(n.paper_id)},children:"\u0e25\u0e1a"})}):(0,h.jsx)(h.Fragment,{})})]})}}];return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(l.Z,{className:"cardredius",title:"\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19",extra:(0,h.jsx)(h.Fragment,{children:"01"==t.user_type_id?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(d.rU,{to:"/paper-insert",children:(0,h.jsx)(o.Z,{type:"primary",children:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23"})})}):(0,h.jsx)(h.Fragment,{})}),children:(0,h.jsx)(s.Z,{style:{},columns:E,dataSource:g,pagination:{pageSize:5},rowKey:"paper_id"})})})}},83099:function(e,t,n){n.d(t,{u:function(){return m},Z:function(){return v}});var r=n(87462),a=n(4942),i=n(29439),c=n(81694),o=n.n(c),l=n(85501),s=n(72791),p=n(71929),u=n(19911);function d(e){var t=e.className,n=e.direction,i=e.index,c=e.marginDirection,o=e.children,l=e.split,p=e.wrap,u=s.useContext(m),d=u.horizontalSize,f=u.verticalSize,x=u.latestIndex,v={};return u.supportFlexGap||("vertical"===n?i<x&&(v={marginBottom:d/(l?2:1)}):v=(0,r.Z)((0,r.Z)({},i<x&&(0,a.Z)({},c,d/(l?2:1))),p&&{paddingBottom:f})),null===o||void 0===o?null:s.createElement(s.Fragment,null,s.createElement("div",{className:t,style:v},o),i<x&&l&&s.createElement("span",{className:"".concat(t,"-split"),style:v},l))}var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},m=s.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),x={small:8,middle:16,large:24};var v=function(e){var t,n=s.useContext(p.E_),c=n.getPrefixCls,v=n.space,h=n.direction,g=e.size,y=void 0===g?(null===v||void 0===v?void 0:v.size)||"small":g,Z=e.align,_=e.className,E=e.children,S=e.direction,w=void 0===S?"horizontal":S,k=e.prefixCls,j=e.split,z=e.style,C=e.wrap,R=void 0!==C&&C,B=f(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),b=(0,u.Z)(),O=s.useMemo((function(){return(Array.isArray(y)?y:[y,y]).map((function(e){return function(e){return"string"===typeof e?x[e]:e||0}(e)}))}),[y]),F=(0,i.Z)(O,2),N=F[0],P=F[1],A=(0,l.Z)(E,{keepEmpty:!0}),I=void 0===Z&&"horizontal"===w?"center":Z,U=c("space",k),L=o()(U,"".concat(U,"-").concat(w),(t={},(0,a.Z)(t,"".concat(U,"-rtl"),"rtl"===h),(0,a.Z)(t,"".concat(U,"-align-").concat(I),I),t),_),G="".concat(U,"-item"),V="rtl"===h?"marginLeft":"marginRight",D=0,T=A.map((function(e,t){null!==e&&void 0!==e&&(D=t);var n=e&&e.key||"".concat(G,"-").concat(t);return s.createElement(d,{className:G,key:n,direction:w,index:t,marginDirection:V,split:j,wrap:R},e)})),q=s.useMemo((function(){return{horizontalSize:N,verticalSize:P,latestIndex:D,supportFlexGap:b}}),[N,P,D,b]);if(0===A.length)return null;var K={};return R&&(K.flexWrap="wrap",b||(K.marginBottom=-P)),b&&(K.columnGap=N,K.rowGap=P),s.createElement("div",(0,r.Z)({className:L,style:(0,r.Z)((0,r.Z)({},K),z)},B),s.createElement(m.Provider,{value:q},T))}}}]);
//# sourceMappingURL=1011.1ddab87a.chunk.js.map