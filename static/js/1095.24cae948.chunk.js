"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[1095],{11095:function(e,r,t){t.d(r,{Z:function(){return ge}});var n=t(91940),a=t(4942),o=t(87462),l=t(93433),i=t(81694),c=t.n(i),u=t(15207),s=t(72791),d=t(71929),f=t(29464),m=t(29439);function p(e){var r=s.useState(e),t=(0,m.Z)(r,2),n=t[0],a=t[1];return s.useEffect((function(){var r=setTimeout((function(){a(e)}),e.length?0:10);return function(){clearTimeout(r)}}),[e]),n}var v=[];function h(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{key:"string"===typeof e?e:"".concat(t,"-").concat(n),error:e,errorStatus:r}}function g(e){var r=e.help,t=e.helpStatus,i=e.errors,m=void 0===i?v:i,g=e.warnings,b=void 0===g?v:g,y=e.className,Z=e.fieldId,w=e.onVisibleChanged,E=s.useContext(n.Rk).prefixCls,C=s.useContext(d.E_).getPrefixCls,x="".concat(E,"-item-explain"),O=C(),_=p(m),k=p(b),q=s.useMemo((function(){return void 0!==r&&null!==r?[h(r,t,"help")]:[].concat((0,l.Z)(_.map((function(e,r){return h(e,"error","error",r)}))),(0,l.Z)(k.map((function(e,r){return h(e,"warning","warning",r)}))))}),[r,t,_,k]),M={};return Z&&(M.id="".concat(Z,"_help")),s.createElement(u.Z,{motionDeadline:f.ZP.motionDeadline,motionName:"".concat(O,"-show-help"),visible:!!q.length,onVisibleChanged:w},(function(e){var r=e.className,t=e.style;return s.createElement("div",(0,o.Z)({},M,{className:c()(x,r,y),style:t,role:"alert"}),s.createElement(u.V,(0,o.Z)({keys:q},f.ZP,{motionName:"".concat(O,"-show-help-item"),component:!1}),(function(e){var r=e.key,t=e.error,n=e.errorStatus,o=e.className,l=e.style;return s.createElement("div",{key:r,className:c()(o,(0,a.Z)({},"".concat(x,"-").concat(n),n)),style:l},t)})))}))}var b=t(71002),y=t(33023),Z=t(19125),w=t(1815);function E(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function C(e,r){return(!r||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function x(e,r){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var t=getComputedStyle(e,null);return C(t.overflowY,r)||C(t.overflowX,r)||function(e){var r=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!r&&(r.clientHeight<e.scrollHeight||r.clientWidth<e.scrollWidth)}(e)}return!1}function O(e,r,t,n,a,o,l,i){return o<e&&l>r||o>e&&l<r?0:o<=e&&i<=t||l>=r&&i>=t?o-e-n:l>r&&i<t||o<e&&i>t?l-r+a:0}function _(e,r){var t=window,n=r.scrollMode,a=r.block,o=r.inline,l=r.boundary,i=r.skipOverflowHiddenElements,c="function"==typeof l?l:function(e){return e!==l};if(!E(e))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,s=[],d=e;E(d)&&c(d);){if((d=d.parentElement)===u){s.push(d);break}null!=d&&d===document.body&&x(d)&&!x(document.documentElement)||null!=d&&x(d,i)&&s.push(d)}for(var f=t.visualViewport?t.visualViewport.width:innerWidth,m=t.visualViewport?t.visualViewport.height:innerHeight,p=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,h=e.getBoundingClientRect(),g=h.height,b=h.width,y=h.top,Z=h.right,w=h.bottom,C=h.left,_="start"===a||"nearest"===a?y:"end"===a?w:y+g/2,k="center"===o?C+b/2:"end"===o?Z:C,q=[],M=0;M<s.length;M++){var N=s[M],I=N.getBoundingClientRect(),P=I.height,R=I.width,F=I.top,S=I.right,j=I.bottom,V=I.left;if("if-needed"===n&&y>=0&&C>=0&&w<=m&&Z<=f&&y>=F&&w<=j&&C>=V&&Z<=S)return q;var T=getComputedStyle(N),W=parseInt(T.borderLeftWidth,10),A=parseInt(T.borderTopWidth,10),H=parseInt(T.borderRightWidth,10),L=parseInt(T.borderBottomWidth,10),z=0,B=0,D="offsetWidth"in N?N.offsetWidth-N.clientWidth-W-H:0,Y="offsetHeight"in N?N.offsetHeight-N.clientHeight-A-L:0;if(u===N)z="start"===a?_:"end"===a?_-m:"nearest"===a?O(v,v+m,m,A,L,v+_,v+_+g,g):_-m/2,B="start"===o?k:"center"===o?k-f/2:"end"===o?k-f:O(p,p+f,f,W,H,p+k,p+k+b,b),z=Math.max(0,z+v),B=Math.max(0,B+p);else{z="start"===a?_-F-A:"end"===a?_-j+L+Y:"nearest"===a?O(F,j,P,A,L+Y,_,_+g,g):_-(F+P/2)+Y/2,B="start"===o?k-V-W:"center"===o?k-(V+R/2)+D/2:"end"===o?k-S+H+D:O(V,S,R,W,H+D,k,k+b,b);var K=N.scrollLeft,X=N.scrollTop;_+=X-(z=Math.max(0,Math.min(X+z,N.scrollHeight-P+Y))),k+=K-(B=Math.max(0,Math.min(K+B,N.scrollWidth-R+D)))}q.push({el:N,top:z,left:B})}return q}function k(e){return e===Object(e)&&0!==Object.keys(e).length}var q=function(e,r){var t=e.isConnected||e.ownerDocument.documentElement.contains(e);if(k(r)&&"function"===typeof r.behavior)return r.behavior(t?_(e,r):[]);if(t){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:k(e)?e:{block:"start",inline:"nearest"}}(r);return function(e,r){void 0===r&&(r="auto");var t="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,a=e.top,o=e.left;n.scroll&&t?n.scroll({top:a,left:o,behavior:r}):(n.scrollTop=a,n.scrollLeft=o)}))}(_(e,n),n.behavior)}},M=["parentNode"];function N(e){return void 0===e||!1===e?[]:Array.isArray(e)?e:[e]}function I(e,r){if(e.length){var t=e.join("_");return r?"".concat(r,"_").concat(t):M.indexOf(t)>=0?"".concat("form_item","_").concat(t):t}}function P(e){return N(e).join("_")}function R(e){var r=(0,y.cI)(),t=(0,m.Z)(r,1)[0],n=s.useRef({}),a=s.useMemo((function(){return null!==e&&void 0!==e?e:(0,o.Z)((0,o.Z)({},t),{__INTERNAL__:{itemRef:function(e){return function(r){var t=P(e);r?n.current[t]=r:delete n.current[t]}}},scrollToField:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=N(e),n=I(t,a.__INTERNAL__.name),l=n?document.getElementById(n):null;l&&q(l,(0,o.Z)({scrollMode:"if-needed",block:"nearest"},r))},getFieldInstance:function(e){var r=P(e);return n.current[r]}})}),[e,t]);return[a]}var F=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t},S=function(e,r){var t,l=s.useContext(w.Z),i=s.useContext(Z.Z),u=s.useContext(d.E_),f=u.getPrefixCls,p=u.direction,v=u.form,h=e.prefixCls,g=e.className,E=void 0===g?"":g,C=e.size,x=void 0===C?l:C,O=e.disabled,_=void 0===O?i:O,k=e.form,q=e.colon,M=e.labelAlign,N=e.labelWrap,I=e.labelCol,P=e.wrapperCol,S=e.hideRequiredMark,j=e.layout,V=void 0===j?"horizontal":j,T=e.scrollToFirstError,W=e.requiredMark,A=e.onFinishFailed,H=e.name,L=F(e,["prefixCls","className","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),z=(0,s.useMemo)((function(){return void 0!==W?W:v&&void 0!==v.requiredMark?v.requiredMark:!S}),[S,W,v]),B=null!==q&&void 0!==q?q:null===v||void 0===v?void 0:v.colon,D=f("form",h),Y=c()(D,(t={},(0,a.Z)(t,"".concat(D,"-").concat(V),!0),(0,a.Z)(t,"".concat(D,"-hide-required-mark"),!1===z),(0,a.Z)(t,"".concat(D,"-rtl"),"rtl"===p),(0,a.Z)(t,"".concat(D,"-").concat(x),x),t),E),K=R(k),X=(0,m.Z)(K,1)[0],Q=X.__INTERNAL__;Q.name=H;var U=(0,s.useMemo)((function(){return{name:H,labelAlign:M,labelCol:I,labelWrap:N,wrapperCol:P,vertical:"vertical"===V,colon:B,requiredMark:z,itemRef:Q.itemRef,form:X}}),[H,M,I,P,V,B,z,X]);s.useImperativeHandle(r,(function(){return X}));return s.createElement(Z.n,{disabled:_},s.createElement(w.q,{size:x},s.createElement(n.q3.Provider,{value:U},s.createElement(y.ZP,(0,o.Z)({id:H},L,{name:H,onFinishFailed:function(e){null===A||void 0===A||A(e);var r={block:"nearest"};T&&e.errorFields.length&&("object"===(0,b.Z)(T)&&(r=T),X.scrollToField(e.errorFields[0].name,r))},form:X,className:Y})))))},j=s.forwardRef(S),V=t(98368),T=t(88834),W=function(){return{status:(0,s.useContext)(n.aM).status}},A=t(61113),H=t(79393),L=t(75314);var z=t(37557),B=t(82621),D=t(10187),Y=t(77106),K=t(71605),X=t(41818),Q=t(37545),U=t(1413),$={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},G=t(54291),J=function(e,r){return s.createElement(G.Z,(0,U.Z)((0,U.Z)({},e),{},{ref:r,icon:$}))};J.displayName="QuestionCircleOutlined";var ee=s.forwardRef(J),re=t(89752),te=t(93486),ne=t(70454),ae=t(35945),oe=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t};var le=function(e){var r=e.prefixCls,t=e.label,l=e.htmlFor,i=e.labelCol,u=e.labelAlign,d=e.colon,f=e.required,p=e.requiredMark,v=e.tooltip,h=(0,te.E)("Form"),g=(0,m.Z)(h,1)[0];return t?s.createElement(n.q3.Consumer,{key:"label"},(function(e){var n,m,h=e.vertical,y=e.labelAlign,Z=e.labelCol,w=e.labelWrap,E=e.colon,C=i||Z||{},x=u||y,O="".concat(r,"-item-label"),_=c()(O,"left"===x&&"".concat(O,"-left"),C.className,(0,a.Z)({},"".concat(O,"-wrap"),!!w)),k=t,q=!0===d||!1!==E&&!1!==d;q&&!h&&"string"===typeof t&&""!==t.trim()&&(k=t.replace(/[:|\uff1a]\s*$/,""));var M=function(e){return e?"object"!==(0,b.Z)(e)||s.isValidElement(e)?{title:e}:e:null}(v);if(M){var N=M.icon,I=void 0===N?s.createElement(ee,null):N,P=oe(M,["icon"]),R=s.createElement(ae.Z,(0,o.Z)({},P),s.cloneElement(I,{className:"".concat(r,"-item-tooltip"),title:""}));k=s.createElement(s.Fragment,null,k,R)}"optional"!==p||f||(k=s.createElement(s.Fragment,null,k,s.createElement("span",{className:"".concat(r,"-item-optional"),title:""},(null===g||void 0===g?void 0:g.optional)||(null===(m=ne.Z.Form)||void 0===m?void 0:m.optional))));var F=c()((n={},(0,a.Z)(n,"".concat(r,"-item-required"),f),(0,a.Z)(n,"".concat(r,"-item-required-mark-optional"),"optional"===p),(0,a.Z)(n,"".concat(r,"-item-no-colon"),!q),n));return s.createElement(re.Z,(0,o.Z)({},C,{className:_}),s.createElement("label",{htmlFor:l,className:F,title:"string"===typeof t?t:""},k))})):null},ie=function(e){var r=e.prefixCls,t=e.status,a=e.wrapperCol,l=e.children,i=e.errors,u=e.warnings,d=e._internalItemRender,f=e.extra,m=e.help,p=e.fieldId,v=e.marginBottom,h=e.onErrorVisibleChanged,b="".concat(r,"-item"),y=s.useContext(n.q3),Z=a||y.wrapperCol||{},w=c()("".concat(b,"-control"),Z.className),E=s.useMemo((function(){return(0,o.Z)({},y)}),[y]);delete E.labelCol,delete E.wrapperCol;var C=s.createElement("div",{className:"".concat(b,"-control-input")},s.createElement("div",{className:"".concat(b,"-control-input-content")},l)),x=s.useMemo((function(){return{prefixCls:r,status:t}}),[r,t]),O=null!==v||i.length||u.length?s.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},s.createElement(n.Rk.Provider,{value:x},s.createElement(g,{fieldId:p,errors:i,warnings:u,help:m,helpStatus:t,className:"".concat(b,"-explain-connected"),onVisibleChanged:h})),!!v&&s.createElement("div",{style:{width:0,height:v}})):null,_={};p&&(_.id="".concat(p,"_extra"));var k=f?s.createElement("div",(0,o.Z)({},_,{className:"".concat(b,"-extra")}),f):null,q=d&&"pro_table_render"===d.mark&&d.render?d.render(e,{input:C,errorList:O,extra:k}):s.createElement(s.Fragment,null,C,O,k);return s.createElement(n.q3.Provider,{value:E},s.createElement(re.Z,(0,o.Z)({},Z,{className:w}),q))},ce=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t},ue={success:z.Z,warning:D.Z,error:B.Z,validating:Y.Z};function se(e){var r,t=e.prefixCls,l=e.className,i=e.style,u=e.help,d=e.errors,f=e.warnings,v=e.validateStatus,h=e.meta,g=e.hasFeedback,b=e.hidden,y=e.children,Z=e.fieldId,w=e.isRequired,E=e.onSubItemMetaChange,C=ce(e,["prefixCls","className","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","isRequired","onSubItemMetaChange"]),x="".concat(t,"-item"),O=s.useContext(n.q3).requiredMark,_=s.useRef(null),k=p(d),q=p(f),M=void 0!==u&&null!==u,N=!!(M||d.length||f.length),I=s.useState(null),P=(0,m.Z)(I,2),R=P[0],F=P[1];(0,K.Z)((function(){if(N&&_.current){var e=getComputedStyle(_.current);F(parseInt(e.marginBottom,10))}}),[N]);var S="";void 0!==v?S=v:h.validating?S="validating":k.length?S="error":q.length?S="warning":h.touched&&(S="success");var j=s.useMemo((function(){var e;if(g){var r=S&&ue[S];e=r?s.createElement("span",{className:c()("".concat(x,"-feedback-icon"),"".concat(x,"-feedback-icon-").concat(S))},s.createElement(r,null)):null}return{status:S,hasFeedback:g,feedbackIcon:e,isFormItemInput:!0}}),[S,g]),V=(r={},(0,a.Z)(r,x,!0),(0,a.Z)(r,"".concat(x,"-with-help"),M||k.length||q.length),(0,a.Z)(r,"".concat(l),!!l),(0,a.Z)(r,"".concat(x,"-has-feedback"),S&&g),(0,a.Z)(r,"".concat(x,"-has-success"),"success"===S),(0,a.Z)(r,"".concat(x,"-has-warning"),"warning"===S),(0,a.Z)(r,"".concat(x,"-has-error"),"error"===S),(0,a.Z)(r,"".concat(x,"-is-validating"),"validating"===S),(0,a.Z)(r,"".concat(x,"-hidden"),b),r);return s.createElement("div",{className:c()(V),style:i,ref:_},s.createElement(Q.Z,(0,o.Z)({className:"".concat(x,"-row")},(0,X.Z)(C,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","required","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol"])),s.createElement(le,(0,o.Z)({htmlFor:Z,required:w,requiredMark:O},e,{prefixCls:t})),s.createElement(ie,(0,o.Z)({},e,h,{errors:k,warnings:q,prefixCls:t,status:S,help:u,marginBottom:R,onErrorVisibleChanged:function(e){e||F(null)}}),s.createElement(n.qI.Provider,{value:E},s.createElement(n.aM.Provider,{value:j},y)))),!!R&&s.createElement("div",{className:"".concat(x,"-margin-offset"),style:{marginBottom:-R}}))}(0,H.b)("success","warning","error","validating","");var de=s.memo((function(e){return e.children}),(function(e,r){return e.value===r.value&&e.update===r.update&&e.childProps.length===r.childProps.length&&e.childProps.every((function(e,t){return e===r.childProps[t]}))}));var fe=function(e){var r=e.name,t=e.noStyle,a=e.dependencies,i=e.prefixCls,c=e.shouldUpdate,u=e.rules,f=e.children,p=e.required,v=e.label,h=e.messageVariables,g=e.trigger,Z=void 0===g?"onChange":g,w=e.validateTrigger,E=e.hidden,C=(0,s.useContext)(d.E_).getPrefixCls,x=(0,s.useContext)(n.q3).name,O="function"===typeof f,_=(0,s.useContext)(n.qI),k=(0,s.useContext)(y.zb).validateTrigger,q=void 0!==w?w:k,M=function(e){return!(void 0===e||null===e)}(r),P=C("form",i),R=s.useContext(y.ZM),F=s.useRef(),S=function(e){var r=s.useState(e),t=(0,m.Z)(r,2),n=t[0],a=t[1],o=(0,s.useRef)(null),l=(0,s.useRef)([]),i=(0,s.useRef)(!1);return s.useEffect((function(){return i.current=!1,function(){i.current=!0,L.Z.cancel(o.current),o.current=null}}),[]),[n,function(e){i.current||(null===o.current&&(l.current=[],o.current=(0,L.Z)((function(){o.current=null,a((function(e){var r=e;return l.current.forEach((function(e){r=e(r)})),r}))}))),l.current.push(e))}]}({}),j=(0,m.Z)(S,2),W=j[0],H=j[1],z=(0,V.Z)((function(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[]}})),B=(0,m.Z)(z,2),D=B[0],Y=B[1],K=function(e,r){H((function(t){var n=(0,o.Z)({},t),a=[].concat((0,l.Z)(e.name.slice(0,-1)),(0,l.Z)(r)).join("__SPLIT__");return e.destroy?delete n[a]:n[a]=e,n}))},X=s.useMemo((function(){var e=(0,l.Z)(D.errors),r=(0,l.Z)(D.warnings);return Object.values(W).forEach((function(t){e.push.apply(e,(0,l.Z)(t.errors||[])),r.push.apply(r,(0,l.Z)(t.warnings||[]))})),[e,r]}),[W,D.errors,D.warnings]),Q=(0,m.Z)(X,2),U=Q[0],$=Q[1],G=function(){var e=s.useContext(n.q3).itemRef,r=s.useRef({});return function(t,n){var a=n&&"object"===(0,b.Z)(n)&&n.ref,o=t.join("_");return r.current.name===o&&r.current.originRef===a||(r.current.name=o,r.current.originRef=a,r.current.ref=(0,T.sQ)(e(t),a)),r.current.ref}}();function J(r,n,a){return t&&!E?r:s.createElement(se,(0,o.Z)({key:"row"},e,{prefixCls:P,fieldId:n,isRequired:a,errors:U,warnings:$,meta:D,onSubItemMetaChange:K}),r)}if(!M&&!O&&!a)return J(f);var ee={};return"string"===typeof v?ee.label=v:r&&(ee.label=String(r)),h&&(ee=(0,o.Z)((0,o.Z)({},ee),h)),s.createElement(y.gN,(0,o.Z)({},e,{messageVariables:ee,trigger:Z,validateTrigger:q,onMetaChange:function(e){var r=null===R||void 0===R?void 0:R.getKey(e.name);if(Y(e.destroy?{errors:[],warnings:[],touched:!1,validating:!1,name:[]}:e,!0),t&&_){var n=e.name;if(e.destroy)n=F.current||n;else if(void 0!==r){var a=(0,m.Z)(r,2),o=a[0],i=a[1];n=[o].concat((0,l.Z)(i)),F.current=n}_(e,n)}}}),(function(t,n,i){var d=N(r).length&&n?n.name:[],m=I(d,x),v=void 0!==p?p:!(!u||!u.some((function(e){if(e&&"object"===(0,b.Z)(e)&&e.required&&!e.warningOnly)return!0;if("function"===typeof e){var r=e(i);return r&&r.required&&!r.warningOnly}return!1}))),h=(0,o.Z)({},t),g=null;if(Array.isArray(f)&&M)g=f;else if(O&&(!c&&!a||M));else if(!a||O||M)if((0,A.l$)(f)){var y=(0,o.Z)((0,o.Z)({},f.props),h);if(y.id||(y.id=m),e.help||U.length>0||$.length>0||e.extra){var w=[];(e.help||U.length>0)&&w.push("".concat(m,"_help")),e.extra&&w.push("".concat(m,"_extra")),y["aria-describedby"]=w.join(" ")}U.length>0&&(y["aria-invalid"]="true"),v&&(y["aria-required"]="true"),(0,T.Yr)(f)&&(y.ref=G(d,f)),new Set([].concat((0,l.Z)(N(Z)),(0,l.Z)(N(q)))).forEach((function(e){y[e]=function(){for(var r,t,n,a,o,l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];null===(n=h[e])||void 0===n||(r=n).call.apply(r,[h].concat(i)),null===(o=(a=f.props)[e])||void 0===o||(t=o).call.apply(t,[a].concat(i))}}));var E=[y["aria-required"],y["aria-invalid"],y["aria-describedby"]];g=s.createElement(de,{value:h[e.valuePropName||"value"],update:f,childProps:E},(0,A.Tm)(f,y))}else g=O&&(c||a)&&!M?f(i):f;else;return J(g,m,v)}))};fe.useStatus=W;var me=fe,pe=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t},ve=function(e){var r=e.prefixCls,t=e.children,a=pe(e,["prefixCls","children"]),l=(0,s.useContext(d.E_).getPrefixCls)("form",r),i=s.useMemo((function(){return{prefixCls:l,status:"error"}}),[l]);return s.createElement(y.aV,(0,o.Z)({},a),(function(e,r,a){return s.createElement(n.Rk.Provider,{value:i},t(e.map((function(e){return(0,o.Z)((0,o.Z)({},e),{fieldKey:e.key})})),r,{errors:a.errors,warnings:a.warnings}))}))};var he=j;he.Item=me,he.List=ve,he.ErrorList=g,he.useForm=R,he.useFormInstance=function(){return(0,s.useContext)(n.q3).form},he.useWatch=y.qo,he.Provider=n.RV,he.create=function(){};var ge=he}}]);
//# sourceMappingURL=1095.24cae948.chunk.js.map