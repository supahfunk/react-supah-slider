(this["webpackJsonpreact-supah-slider"]=this["webpackJsonpreact-supah-slider"]||[]).push([[0],{30:function(e,t,r){},31:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r(15),c=r.n(i),s=r(2),a=r(3),o=r(5),u=r.n(o),l=r(8),d=r(7),b=r(6),f=function(e,t,r){return(1-r)*e+r*t},h=function(){var e={root:{position:"relative",zIndex:1,overflow:"hidden",touchAction:"pan-y",paddingBottom:20,"& *":{cursor:"grab",userSelect:"none",userDrag:"none"}},slider:{display:"inline-flex"},isDragging:{"& *":{cursor:"grabbing"}},slide:{width:"30vw",height:300,padding:20,"--skew":"calc(var(--speed) * .01deg)",transform:"skewX(var(--skew))","& button":{width:"100%",height:"100%",padding:0,border:"none",background:"none",position:"relative",zIndex:1,overflow:"hidden"},"& img":{width:"100%",height:"100%",objectFit:"cover","--scale":"calc(1 + var(--speed-abs) * 0.001)","--swipe":"calc(var(--speed) * .1px)",transform:"scaleX(var(--scale)) translateX(var(--swipe))"},"& h2":{color:"#fff",position:"absolute",zIndex:1,left:20,bottom:20,margin:0}},progress:{position:"absolute",zIndex:1,bottom:0,left:20,width:"calc(100vw - 40px)",height:2,background:"rgba(0, 0, 0, .1)","&:before":{content:'""',position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 1)",transformOrigin:"0 0",transform:"scaleX(var(--progress))"}},"@media (max-width: 768px)":{slide:{width:"70vw",height:300,padding:20}}};return e},p=r(1),j=Object(l.a)(h),g=function(e){var t,r=e.className,i=e.items,c=e.soap,o=void 0===c?2:c,l=e.soapWheel,h=void 0===l?1:l,g=e.wheel,m=void 0===g||g,v=j(),O=Object(n.useRef)(),x=Object(n.useRef)(),w=Object(n.useRef)(0),y=Object(n.useRef)(0),R=Object(n.useRef)(0),z=Object(n.useRef)(0),k=Object(n.useRef)(0),D=Object(n.useRef)(0),I=Object(n.useRef)(0),S=Object(n.useState)(!1),E=Object(a.a)(S,2),M=E[0],N=E[1];Object(d.a)({onDrag:function(e){var t=Object(a.a)(e.movement,1)[0],r=e.first,n=e.last;R.current=-t*o,r&&(z.current=k.current),N(Math.abs(t)>10),n&&setTimeout((function(){N(!1)}),100)},onWheel:function(e){var t=Object(a.a)(e.movement,2),r=(t[0],t[1]),n=e.first,i=e.last,c=e.event;m&&(R.current=r*h,n&&(z.current=k.current),N(Math.abs(r)>10),i&&setTimeout((function(){N(!1)}),100),i||c.preventDefault())}},{domTarget:O,eventOptions:{passive:!1}});var B=function(){w.current=O.current.getBoundingClientRect().width,y.current=x.current.getBoundingClientRect().width-w.current};Object(n.useEffect)((function(){return B(),window.addEventListener("resize",B,!1),function(){window.removeEventListener("resize",B,!1)}}),[]),Object(b.a)((function(){var e,t,r,n=(e=z.current-R.current,t=-y.current,r=0,Math.min(Math.max(e,t),r));k.current=f(k.current,n,.08),D.current=(k.current-n).toFixed(2),I.current=(-k.current/y.current).toFixed(3),x.current.style.transform="translateX(".concat(k.current,"px)"),O.current.style.setProperty("--speed",D.current),O.current.style.setProperty("--speed-abs",Math.abs(D.current)),O.current.style.setProperty("--progress",I.current)}),!0);return Object(p.jsxs)("div",{className:u()((t={},Object(s.a)(t,v.root,!0),Object(s.a)(t,r,r),Object(s.a)(t,v.isDragging,M),t)),ref:O,children:[Object(p.jsx)("div",{className:u()(Object(s.a)({},v.slider,!0)),ref:x,children:i.map((function(e,t){return Object(p.jsx)("div",{className:v.slide,children:Object(p.jsxs)("button",{onClick:function(){M||window.console.log("slide:",t)},children:[Object(p.jsx)("img",{src:e.image,alt:e.title}),Object(p.jsx)("h2",{children:e.title})]})},t.toString())}))}),Object(p.jsx)("div",{className:v.progress})]})},m=r(9),v=function(){var e={root:{position:"relative",zIndex:1,overflow:"hidden",touchAction:"pan-y",paddingBottom:20,"& *":{cursor:"grab",userSelect:"none",userDrag:"none"}},slider:{position:"relative",zIndex:1,height:300},isDragging:{"& *":{cursor:"grabbing"}},slide:{position:"absolute",zIndex:1,width:"30vw",height:300,padding:20,"& button":{width:"100%",height:"100%",padding:0,border:"none",background:"none",position:"relative",zIndex:1,display:"block",overflow:"hidden","--skew":"calc(var(--speed) * .1deg)",transform:"skewX(var(--skew))"},"& img":{width:"100%",height:"100%",objectFit:"cover","--scale":"calc(1 + var(--speed-abs) * 0.01)","--swipe":"calc(var(--speed) * 1px)",transform:"scaleX(var(--scale)) translateX(var(--swipe))"},"& h2":{color:"#fff",position:"absolute",zIndex:1,left:20,bottom:20,margin:0,"& span":{position:"absolute",zIndex:-1,left:-20,bottom:-30,fontSize:100,lineHeight:1,opacity:.2}}},"@media (max-width: 768px)":{slide:{width:"70vw",height:300,padding:20}}};return e},O=Object(l.a)(v),x=function(e){var t,r=e.className,i=e.items,c=e.soap,o=void 0===c?2:c,l=e.soapWheel,h=void 0===l?1:l,j=e.wheel,g=void 0===j||j,v=O(),x=Object(n.useRef)(),w=Object(n.useRef)(0),y=Object(n.useRef)(0),R=Object(n.useRef)(0),z=Object(n.useRef)(0),k=Object(n.useRef)(0),D=Object(n.useRef)(0),I=Object(n.useRef)(0),S=Object(n.useState)(!1),E=Object(a.a)(S,2),M=E[0],N=E[1],B=Object(n.useState)([]),W=Object(a.a)(B,2),T=W[0],q=W[1];Object(d.a)({onDrag:function(e){var t=Object(a.a)(e.movement,1)[0],r=e.last;z.current=R.current+t*o,N(Math.abs(t)>10),r&&(R.current=z.current,setTimeout((function(){N(!1)}),100))},onWheel:function(e){var t=Object(a.a)(e.movement,2),r=(t[0],t[1]),n=e.last,i=e.event;g&&(z.current=R.current-r*h,N(Math.abs(r)>10),n&&(R.current=z.current,setTimeout((function(){N(!1)}),100)),n||i.preventDefault())}},{domTarget:x,eventOptions:{passive:!1}});var H=function(){T.length&&(w.current=T[0].getBoundingClientRect().width,y.current=w.current*i.length)};Object(n.useEffect)((function(){return q(x.current.querySelectorAll(".".concat(v.slide))),function(){window.removeEventListener("resize",H,!1)}}),[]),Object(n.useEffect)((function(){H(),window.addEventListener("resize",H,!1)}),[T]),Object(b.a)((function(){var e;T.length&&(D.current=f(D.current,z.current,.1),e=D.current,m.a.set(T,{x:function(t){return t*w.current+e},modifiers:{x:function(e){var t=m.a.utils.wrap(-w.current,y.current-w.current,parseInt(e,10));return"".concat(t,"px")}}}),I.current=D.current-k.current,k.current=D.current,x.current.style.setProperty("--speed",I.current),x.current.style.setProperty("--speed-abs",Math.abs(I.current)))}),!0);return Object(p.jsx)("div",{className:u()((t={},Object(s.a)(t,v.root,!0),Object(s.a)(t,r,r),Object(s.a)(t,v.isDragging,M),t)),ref:x,children:Object(p.jsx)("div",{className:u()(Object(s.a)({},v.slider,!0)),children:i.map((function(e,t){return Object(p.jsx)("div",{className:v.slide,children:Object(p.jsxs)("button",{onClick:function(){M||window.console.log("slide:",t)},children:[Object(p.jsx)("img",{src:e.image,alt:e.title}),Object(p.jsxs)("h2",{children:[Object(p.jsx)("span",{children:t+1})," ",e.title]})]})},t.toString())}))})})},w=function(){return{root:{position:"relative",zIndex:1,overflow:"hidden",touchAction:"pan-x",paddingBottom:20,"& *":{cursor:"grab",userSelect:"none",userDrag:"none"}},slider:{position:"relative",zIndex:1,height:900},isDragging:{"& *":{cursor:"grabbing"}},slide:{position:"absolute",zIndex:1,width:"100%",height:300,padding:20,"& button":{width:"100%",height:"100%",padding:0,border:"none",background:"none",position:"relative",zIndex:1,display:"block",overflow:"hidden","--skew":"calc(var(--speed) * .1deg)",transform:"skewY(var(--skew))"},"& img":{width:"100%",height:"100%",objectFit:"cover","--scale":"calc(1 + var(--speed-abs) * 0.01)","--swipe":"calc(var(--speed) * 1px)",transform:"scaleY(var(--scale)) translateY(var(--swipe))"},"& h2":{color:"#fff",position:"absolute",zIndex:1,left:20,bottom:20,margin:0,"& span":{position:"absolute",zIndex:-1,left:-20,bottom:-30,fontSize:100,lineHeight:1,opacity:.2}}}}},y=Object(l.a)(w),R=function(e){var t,r=e.className,i=e.items,c=e.soap,o=void 0===c?2:c,l=e.soapWheel,h=void 0===l?1:l,j=e.wheel,g=void 0===j||j,v=y(),O=Object(n.useRef)(),x=Object(n.useRef)(0),w=Object(n.useRef)(0),R=Object(n.useRef)(0),z=Object(n.useRef)(0),k=Object(n.useRef)(0),D=Object(n.useRef)(0),I=Object(n.useRef)(0),S=Object(n.useState)(!1),E=Object(a.a)(S,2),M=E[0],N=E[1],B=Object(n.useState)([]),W=Object(a.a)(B,2),T=W[0],q=W[1];Object(d.a)({onDrag:function(e){var t=Object(a.a)(e.movement,2),r=(t[0],t[1]),n=e.last;z.current=R.current+r*o,N(Math.abs(r)>10),n&&(R.current=z.current,setTimeout((function(){N(!1)}),100))},onWheel:function(e){var t=Object(a.a)(e.movement,2),r=(t[0],t[1]),n=e.last,i=e.event;g&&(z.current=R.current+r*h,N(Math.abs(r)>10),n&&(R.current=z.current,setTimeout((function(){N(!1)}),100)),n||i.preventDefault())}},{domTarget:O,eventOptions:{passive:!1}});var H=function(){T.length&&(x.current=T[0].getBoundingClientRect().height,w.current=x.current*i.length)};Object(n.useEffect)((function(){return q(O.current.querySelectorAll(".".concat(v.slide))),function(){window.removeEventListener("resize",H,!1)}}),[]),Object(n.useEffect)((function(){H(),window.addEventListener("resize",H,!1)}),[T]),Object(b.a)((function(){var e;T.length&&(D.current=f(D.current,z.current,.1),e=D.current,m.a.set(T,{y:function(t){return t*x.current+e},modifiers:{y:function(e){var t=m.a.utils.wrap(-x.current,w.current-x.current,parseInt(e,10));return"".concat(t,"px")}}}),I.current=D.current-k.current,k.current=D.current,O.current.style.setProperty("--speed",I.current),O.current.style.setProperty("--speed-abs",Math.abs(I.current)))}),!0);return Object(p.jsx)("div",{className:u()((t={},Object(s.a)(t,v.root,!0),Object(s.a)(t,r,r),Object(s.a)(t,v.isDragging,M),t)),ref:O,children:Object(p.jsx)("div",{className:u()(Object(s.a)({},v.slider,!0)),children:i.map((function(e,t){return Object(p.jsx)("div",{className:v.slide,children:Object(p.jsxs)("button",{onClick:function(){M||window.console.log("slide:",t)},children:[Object(p.jsx)("img",{src:e.image,alt:e.title}),Object(p.jsxs)("h2",{children:[Object(p.jsx)("span",{children:t+1})," ",e.title]})]})},t.toString())}))})})},z=(r(30),[{title:"South",image:"https://images.unsplash.com/photo-1595265677860-9a3168007dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},{title:"Slant",image:"https://images.unsplash.com/photo-1594786118579-95ba90c801ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},{title:"Gravy",image:"https://images.unsplash.com/photo-1509339022327-1e1e25360a41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},{title:"Amuse",image:"https://images.unsplash.com/photo-1525417071002-5ee4e6bb44f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},{title:"Truffle",image:"https://images.unsplash.com/photo-1594072702031-f0e2a602dd2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},{title:"Locker",image:"https://images.unsplash.com/photo-1592989819277-a3aafa40c66a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}]),k=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Slider"}),Object(p.jsx)(g,{className:"slider",items:z}),Object(p.jsx)("h1",{children:"Slider Infinite"}),Object(p.jsx)(x,{className:"slider-infinite",items:z}),Object(p.jsx)("h1",{children:"Slider Infinite Vertical"}),Object(p.jsx)(R,{className:"slider-infinite-vertical",items:z})]})},D=document.getElementById("root");c.a.render(Object(p.jsx)(n.StrictMode,{children:Object(p.jsx)(k,{})}),D)}},[[31,1,2]]]);
//# sourceMappingURL=main.13409f00.chunk.js.map