"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2749],{74831:function(e,t){var r={BASE_SERVER:{URL:"https://volunteering-activities-f492d05e3c5a.herokuapp.com/api/",URL_UPLOAD:"https://volunteering-activities-f492d05e3c5a.herokuapp.com/api/"},ACCESS_TOKEN:{"x-access-token":localStorage.getItem("x-access-token")}};t.Z=r},62749:function(e,t,r){r.r(t);var a=r(4942),n=r(1413),i=r(74165),c=r(15861),s=r(29439),p=r(68678),o=r(23695),l=r(2730),u=r(66106),d=r(30914),f=r(49553),h=r(87309),x=r(21830),Z=r.n(x),_=r(74831),j=r(72791),v=r(57689),m=r(11087),g=r(61044),k=r(80184);t.default=function(){var e=(0,v.UO)(),t=(0,v.s0)(),r=p.Z.TextArea,x=(0,j.useState)({paper_id:"",paper_detail:"",paper:""}),E=(0,s.Z)(x,2),w=E[0],R=E[1];console.log(w);var S=function(){var t=(0,c.Z)((0,i.Z)().mark((function t(){var r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,t.next=4,g.ZP.post("".concat(_.Z.BASE_SERVER.URL,"paper/index.php"),{paper_id:e.id});case 4:r=t.sent,console.log(r.data.data),r.data.require?R(r.data.data[0]):Z().fire({title:"\u0e40\u0e01\u0e34\u0e14\u0e04\u0e27\u0e32\u0e21\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",text:r.data.message,timer:2e3}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();(0,j.useEffect)((function(){S()}),[]);var b=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),e.prev=1,""===w.paper_detail&&(Z().fire({icon:"warning",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",text:"\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e30\u0e1a\u0e38\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23",timer:2e3}),1)){e.next=7;break}return e.next=5,g.ZP.post("".concat(_.Z.BASE_SERVER.URL,"paper/update/index.php"),{paper_id:w.paper_id,paper_detail:w.paper_detail,paper:w.paper});case 5:e.sent.data.require&&Z().fire({icon:"success",title:"\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",text:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",timer:2e3}).then((function(){t("/paper")}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),y={name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"},onChange:function(e){"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status?o.ZP.success("".concat(e.file.name," file uploaded successfully")):"error"===e.file.status&&o.ZP.error("".concat(e.file.name," file upload failed."))}};return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(l.Z,{title:"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23",children:[(0,k.jsx)(u.Z,{justify:"center",children:(0,k.jsx)(d.Z,{span:8,children:(0,k.jsx)(u.Z,{justify:"center",children:(0,k.jsx)(d.Z,{children:(0,k.jsx)(f.Z,(0,n.Z)((0,n.Z)({},y),{},{children:(0,k.jsx)(h.Z,{children:"\u0e01\u0e14\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2d\u0e31\u0e1e\u0e42\u0e2b\u0e25\u0e14\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23"})}))})})})}),(0,k.jsx)("br",{}),(0,k.jsx)(u.Z,{justify:"center",children:(0,k.jsxs)(d.Z,{span:8,children:[(0,k.jsx)("label",{children:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23"}),(0,k.jsx)(r,{rows:5,value:w.paper_detail,name:"paper_detail",onChange:function(e){R((0,n.Z)((0,n.Z)({},w),{},(0,a.Z)({},e.target.name,e.target.value)))},required:!0})]})}),(0,k.jsx)("br",{}),(0,k.jsxs)(u.Z,{justify:"center",children:[(0,k.jsx)(d.Z,{span:2,children:(0,k.jsx)(m.rU,{to:"/paper",children:(0,k.jsx)(h.Z,{children:"\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a"})})}),(0,k.jsx)(d.Z,{span:1}),(0,k.jsx)(d.Z,{span:2,children:(0,k.jsx)(h.Z,{type:"submit",onClick:function(e){return b(e)},children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})]})})}}}]);
//# sourceMappingURL=2749.3ec62e61.chunk.js.map