(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6403],{53749:function(a,b,c){"use strict";c.d(b,{XZ:function(){return S}});var d=c(67294),e=c(28387),f=c(19251),g=c(98053),h=c(32067),i=c(75814),j=c(21190),k=c(54520),l=c(83234),m=c(44040),n=c(75314),o=c(76734),p={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},q=(0,h.m$)("span",{baseStyle:p});q.displayName="VisuallyHidden";var r=(0,h.m$)("input",{baseStyle:p});r.displayName="VisuallyHiddenInput";var s=!1,t=null,u=!1,v=new Set,w="undefined"!=typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function x(a,b){v.forEach(c=>c(a,b))}function y(a){var b;u=!0,!((b=a).metaKey|| !w&&b.altKey||b.ctrlKey)&&(t="keyboard",x("keyboard",a))}function z(a){t="pointer",("mousedown"===a.type||"pointerdown"===a.type)&&(u=!0,x("pointer",a))}function A(a){a.target!==window&&a.target!==document&&(u||(t="keyboard",x("keyboard",a)),u=!1)}function B(){u=!1}function C(){return"pointer"!==t}var[D,E]=(0,e.k)({name:"CheckboxGroupContext",strict:!1}),F=(...a)=>a.filter(Boolean).join(" ");function G(a){let b=typeof a;return null!=a&&("object"===b||"function"===b)&&!Array.isArray(a)}var H=a=>a?"":void 0;function I(...a){return function(b){a.some(a=>(null==a||a(b),null==b?void 0:b.defaultPrevented))}}function J(a){return a&&G(a)&&G(a.target)}(function(a){let{colorScheme:b,size:c,variant:e,children:h,isDisabled:i}=a,{value:j,onChange:k}=function(a={}){let{defaultValue:b,value:c,onChange:e,isDisabled:h,isNative:i}=a,j=(0,f.W)(e),[k,l]=(0,g.T)({value:c,defaultValue:b||[],onChange:j}),m=(0,d.useCallback)(a=>{if(!k)return;let b=J(a)?a.target.checked:!k.includes(a),c=J(a)?a.target.value:a,d=b?[...k,c]:k.filter(a=>String(a)!==String(c));l(d)},[l,k]),n=(0,d.useCallback)((a={})=>({...a,[i?"checked":"isChecked"]:k.some(b=>String(a.value)===String(b)),onChange:m}),[m,i,k]);return{value:k,isDisabled:h,onChange:m,setValue:l,getCheckboxProps:n}}(a),l=(0,d.useMemo)(()=>({size:c,onChange:k,colorScheme:b,value:j,variant:e,isDisabled:i}),[c,k,b,j,e,i]);return d.createElement(D,{value:l,children:h})}).displayName="CheckboxGroup";var K=(0,h.m$)(i.E.svg);function L(a){return d.createElement(K,{width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...a},d.createElement("polyline",{points:"1.5 6 4.5 9 10.5 1"}))}function M(a){return d.createElement(K,{width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4},...a},d.createElement("line",{x1:"21",x2:"3",y1:"12",y2:"12"}))}function N({open:a,children:b}){return d.createElement(j.M,{initial:!1},a&&d.createElement(i.E.div,{variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},b))}function O(a){let{isIndeterminate:b,isChecked:c,...e}=a;return d.createElement(N,{open:c||b},d.createElement(b?M:L,{...e}))}function P(a){a.preventDefault(),a.stopPropagation()}var Q={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},R={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},S=(0,h.Gp)(function(a,b){let c=E(),e=(0,h.jC)("Checkbox",{...c,...a}),g=(0,k.Lr)(a),{spacing:i="0.5rem",className:j,children:q,iconColor:r,iconSize:t,icon:w=d.createElement(O,null),isChecked:x,isDisabled:D=null==c?void 0:c.isDisabled,onChange:G,inputProps:J,...K}=g,L=x;(null==c?void 0:c.value)&&g.value&&(L=c.value.includes(g.value));let M=G;(null==c?void 0:c.onChange)&&g.value&&(M=function(...a){return function(b){a.forEach(a=>{null==a||a(b)})}}(c.onChange,G));let{state:N,getInputProps:S,getCheckboxProps:T,getLabelProps:U,getRootProps:V}=function(a={}){let b=(0,l.Kn)(a),{isDisabled:c,isReadOnly:e,isRequired:g,isInvalid:h,id:i,onBlur:j,onFocus:k,"aria-describedby":q}=b,{defaultChecked:r,isChecked:t,isFocusable:w,onChange:x,isIndeterminate:D,name:E,value:F,tabIndex:G,"aria-label":J,"aria-labelledby":K,"aria-invalid":L,...M}=a,N=function(a,b=[]){let c=Object.assign({},a);for(let d of b)d in c&&delete c[d];return c}(M,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),O=(0,f.W)(x),Q=(0,f.W)(j),R=(0,f.W)(k),[S,T]=(0,d.useState)(!1),[U,V]=(0,d.useState)(!1),[W,X]=(0,d.useState)(!1),[Y,Z]=(0,d.useState)(!1);(0,d.useEffect)(()=>(function(a){!function(){if("undefined"==typeof window||s)return;let{focus:a}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...b){u=!0,a.apply(this,b)},document.addEventListener("keydown",y,!0),document.addEventListener("keyup",y,!0),window.addEventListener("focus",A,!0),window.addEventListener("blur",B,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",z,!0),document.addEventListener("pointermove",z,!0),document.addEventListener("pointerup",z,!0)):(document.addEventListener("mousedown",z,!0),document.addEventListener("mousemove",z,!0),document.addEventListener("mouseup",z,!0)),s=!0}(),a(C());let b=()=>a(C());return v.add(b),()=>{v.delete(b)}})(T),[]);let $=(0,d.useRef)(null),[_,aa]=(0,d.useState)(!0),[ab,ac]=(0,d.useState)(!!r),ad=void 0!==t,ae=ad?t:ab,af=(0,d.useCallback)(a=>{if(e||c){a.preventDefault();return}ad||(ae?ac(a.target.checked):ac(!!D||a.target.checked)),null==O||O(a)},[e,c,ae,ad,D,O]);(0,m.G)(()=>{$.current&&($.current.indeterminate=Boolean(D))},[D]),(0,n.r)(()=>{c&&V(!1)},[c,V]),(0,m.G)(()=>{let a=$.current;(null==a?void 0:a.form)&&(a.form.onreset=()=>{ac(!!r)})},[]);let ag=c&&!w,ah=(0,d.useCallback)(a=>{" "===a.key&&Z(!0)},[Z]),ai=(0,d.useCallback)(a=>{" "===a.key&&Z(!1)},[Z]);(0,m.G)(()=>{if(!$.current)return;let a=$.current.checked!==ae;a&&ac($.current.checked)},[$.current]);let aj=(0,d.useCallback)((a={},b=null)=>{let d=a=>{U&&a.preventDefault(),Z(!0)};return{...a,ref:b,"data-active":H(Y),"data-hover":H(W),"data-checked":H(ae),"data-focus":H(U),"data-focus-visible":H(U&&S),"data-indeterminate":H(D),"data-disabled":H(c),"data-invalid":H(h),"data-readonly":H(e),"aria-hidden":!0,onMouseDown:I(a.onMouseDown,d),onMouseUp:I(a.onMouseUp,()=>Z(!1)),onMouseEnter:I(a.onMouseEnter,()=>X(!0)),onMouseLeave:I(a.onMouseLeave,()=>X(!1))}},[Y,ae,c,U,S,W,D,h,e]),ak=(0,d.useCallback)((a={},b=null)=>({...N,...a,ref:(0,o.lq)(b,a=>{a&&aa("LABEL"===a.tagName)}),onClick:I(a.onClick,()=>{var a;_||(null==(a=$.current)||a.click(),requestAnimationFrame(()=>{var a;null==(a=$.current)||a.focus()}))}),"data-disabled":H(c),"data-checked":H(ae),"data-invalid":H(h)}),[N,c,ae,h,_]),al=(0,d.useCallback)((a={},b=null)=>({...a,ref:(0,o.lq)($,b),type:"checkbox",name:E,value:F,id:i,tabIndex:G,onChange:I(a.onChange,af),onBlur:I(a.onBlur,Q,()=>V(!1)),onFocus:I(a.onFocus,R,()=>V(!0)),onKeyDown:I(a.onKeyDown,ah),onKeyUp:I(a.onKeyUp,ai),required:g,checked:ae,disabled:ag,readOnly:e,"aria-label":J,"aria-labelledby":K,"aria-invalid":L?Boolean(L):h,"aria-describedby":q,"aria-disabled":c,style:p}),[E,F,i,af,Q,R,ah,ai,g,ae,ag,e,J,K,L,h,q,c,G]),am=(0,d.useCallback)((a={},b=null)=>({...a,ref:b,onMouseDown:I(a.onMouseDown,P),onTouchStart:I(a.onTouchStart,P),"data-disabled":H(c),"data-checked":H(ae),"data-invalid":H(h)}),[ae,c,h]);return{state:{isInvalid:h,isFocused:U,isChecked:ae,isActive:Y,isHovered:W,isIndeterminate:D,isDisabled:c,isReadOnly:e,isRequired:g},getRootProps:ak,getCheckboxProps:aj,getInputProps:al,getLabelProps:am,htmlProps:N}}({...K,isDisabled:D,isChecked:L,onChange:M}),W=(0,d.useMemo)(()=>({opacity:N.isChecked||N.isIndeterminate?1:0,transform:N.isChecked||N.isIndeterminate?"scale(1)":"scale(0.95)",fontSize:t,color:r,...e.icon}),[r,t,N.isChecked,N.isIndeterminate,e.icon]),X=(0,d.cloneElement)(w,{__css:W,isIndeterminate:N.isIndeterminate,isChecked:N.isChecked});return d.createElement(h.m$.label,{__css:{...R,...e.container},className:F("chakra-checkbox",j),...V()},d.createElement("input",{className:"chakra-checkbox__input",...S(J,b)}),d.createElement(h.m$.span,{__css:{...Q,...e.control},className:"chakra-checkbox__control",...T()},X),q&&d.createElement(h.m$.span,{className:"chakra-checkbox__label",...U(),__css:{marginStart:i,...e.label}},q))});S.displayName="Checkbox"},98053:function(a,b,c){"use strict";c.d(b,{T:function(){return f}});var d=c(67294),e=c(19251);function f(a){let{value:b,defaultValue:c,onChange:f,shouldUpdate:g=(a,b)=>a!==b}=a,h=(0,e.W)(f),i=(0,e.W)(g),[j,k]=(0,d.useState)(c),l=void 0!==b,m=l?b:j,n=(0,e.W)(a=>{let b="function"==typeof a?a(m):a;i(m,b)&&(l||k(b),h(b))},[l,h,m,i]);return[m,n]}},57026:function(a,b,c){"use strict";c.d(b,{Ph:function(){return k}});var d=c(67294),e=c(83234),f=c(32067),g=c(54520),h=(...a)=>a.filter(Boolean).join(" "),i=a=>a?"":void 0,j=(0,f.Gp)(function(a,b){let{children:c,placeholder:e,className:g,...i}=a;return d.createElement(f.m$.select,{...i,ref:b,className:h("chakra-select",g)},e&&d.createElement("option",{value:""},e),c)});j.displayName="SelectField";var k=(0,f.Gp)((a,b)=>{var c;let h=(0,f.jC)("Select",a),{rootProps:k,placeholder:l,icon:m,color:o,height:p,h:q,minH:r,minHeight:s,iconColor:t,iconSize:u,...v}=(0,g.Lr)(a),[w,x]=function(a,b){let c={},d={};for(let[e,f]of Object.entries(a))b.includes(e)?c[e]=f:d[e]=f;return[c,d]}(v,g.oE),y=(0,e.Yp)(x),z={paddingEnd:"2rem",...h.field,_focus:{zIndex:"unset",...null==(c=h.field)?void 0:c["_focus"]}};return d.createElement(f.m$.div,{className:"chakra-select__wrapper",__css:{width:"100%",height:"fit-content",position:"relative",color:o},...w,...k},d.createElement(j,{ref:b,height:q??p,minH:r??s,placeholder:l,...y,__css:z},a.children),d.createElement(n,{"data-disabled":i(y.disabled),...(t||o)&&{color:t||o},__css:h.icon,...u&&{fontSize:u}},m))});k.displayName="Select";var l=a=>d.createElement("svg",{viewBox:"0 0 24 24",...a},d.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),m=(0,f.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),n=a=>{let{children:b=d.createElement(l,null),...c}=a,e=(0,d.cloneElement)(b,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return d.createElement(m,{...c,className:"chakra-select__icon-wrapper"},(0,d.isValidElement)(b)?e:null)};n.displayName="SelectIcon"},31677:function(a,b,c){"use strict";c.d(b,{B1:function(){return h}});var d=c(53812),e=c(38554),f=c.n(e);function g(a){return"function"==typeof a}function h(...a){let b=[...a],c=a[a.length-1];return(0,d.gk)(c)&&b.length>1?b=b.slice(0,b.length-1):c=d.rS,(function(...a){return b=>a.reduce((a,b)=>b(a),b)})(...b.map(a=>b=>g(a)?a(b):i(b,a)))(c)}function i(...a){return f()({},...a,j)}function j(a,b,c,d){if((g(a)||g(b))&&Object.prototype.hasOwnProperty.call(d,c))return(...c)=>{let d=g(a)?a(...c):a,e=g(b)?b(...c):b;return f()({},d,e,j)}}},2067:function(){},11163:function(a,b,c){a.exports=c(90387)}}])