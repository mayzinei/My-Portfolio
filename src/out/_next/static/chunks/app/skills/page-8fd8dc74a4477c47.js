(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732],{5119:function(e,t,r){Promise.resolve().then(r.bind(r,2909))},2909:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(3827),s=r(703),l=r(4090),a=r(1840),i=r(5526);function o(){let e=(0,l.useRef)(!1);return(0,i.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var c=r(4205),u=r(4561),f=r(2435);class d extends l.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function p(e){let{children:t,isPresent:r}=e,n=(0,l.useId)(),s=(0,l.useRef)(null),a=(0,l.useRef)({width:0,height:0,top:0,left:0});return(0,l.useInsertionEffect)(()=>{let{width:e,height:t,top:l,left:i}=a.current;if(r||!s.current||!e||!t)return;s.current.dataset.motionPopId=n;let o=document.createElement("style");return document.head.appendChild(o),o.sheet&&o.sheet.insertRule('\n          [data-motion-pop-id="'.concat(n,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(l,"px !important;\n            left: ").concat(i,"px !important;\n          }\n        ")),()=>{document.head.removeChild(o)}},[r]),l.createElement(d,{isPresent:r,childRef:s,sizeRef:a},l.cloneElement(t,{ref:s}))}let m=e=>{let{children:t,initial:r,isPresent:n,onExitComplete:s,custom:a,presenceAffectsLayout:i,mode:o}=e,c=(0,f.h)(h),d=(0,l.useId)(),m=(0,l.useMemo)(()=>({id:d,initial:r,isPresent:n,custom:a,onExitComplete:e=>{for(let t of(c.set(e,!0),c.values()))if(!t)return;s&&s()},register:e=>(c.set(e,!1),()=>c.delete(e))}),i?void 0:[n]);return(0,l.useMemo)(()=>{c.forEach((e,t)=>c.set(t,!1))},[n]),l.useEffect(()=>{n||c.size||!s||s()},[n]),"popLayout"===o&&(t=l.createElement(p,{isPresent:n},t)),l.createElement(u.O.Provider,{value:m},t)};function h(){return new Map}var g=r(3856),x=r(9908);let w=e=>e.key||"",y=e=>{var t;let{children:r,custom:n,initial:s=!0,onExitComplete:a,exitBeforeEnter:u,presenceAffectsLayout:f=!0,mode:d="sync"}=e;(0,x.k)(!u,"Replace exitBeforeEnter with mode='wait'");let p=(0,l.useContext)(g.p).forceRender||function(){let e=o(),[t,r]=(0,l.useState)(0),n=(0,l.useCallback)(()=>{e.current&&r(t+1)},[t]);return[(0,l.useCallback)(()=>c.Wi.postRender(n),[n]),t]}()[0],h=o(),y=function(e){let t=[];return l.Children.forEach(e,e=>{(0,l.isValidElement)(e)&&t.push(e)}),t}(r),v=y,E=(0,l.useRef)(new Map).current,j=(0,l.useRef)(v),k=(0,l.useRef)(new Map).current,C=(0,l.useRef)(!0);if((0,i.L)(()=>{C.current=!1,function(e,t){e.forEach(e=>{let r=w(e);t.set(r,e)})}(y,k),j.current=v}),t=()=>{C.current=!0,k.clear(),E.clear()},(0,l.useEffect)(()=>()=>t(),[]),C.current)return l.createElement(l.Fragment,null,v.map(e=>l.createElement(m,{key:w(e),isPresent:!0,initial:!!s&&void 0,presenceAffectsLayout:f,mode:d},e)));v=[...v];let L=j.current.map(w),N=y.map(w),b=L.length;for(let e=0;e<b;e++){let t=L[e];-1!==N.indexOf(t)||E.has(t)||E.set(t,void 0)}return"wait"===d&&E.size&&(v=[]),E.forEach((e,t)=>{if(-1!==N.indexOf(t))return;let r=k.get(t);if(!r)return;let s=L.indexOf(t),i=e;i||(i=l.createElement(m,{key:w(r),isPresent:!1,onExitComplete:()=>{E.delete(t);let e=Array.from(k.keys()).filter(e=>!N.includes(e));if(e.forEach(e=>k.delete(e)),j.current=y.filter(r=>{let n=w(r);return n===t||e.includes(n)}),!E.size){if(!1===h.current)return;p(),a&&a()}},custom:n,presenceAffectsLayout:f,mode:d},r),E.set(t,i)),v.splice(s,0,i)}),v=v.map(e=>{let t=e.key;return E.has(t)?e:l.createElement(m,{key:w(e),isPresent:!0,presenceAffectsLayout:f,mode:d},e)}),l.createElement(l.Fragment,null,E.size?v:v.map(e=>(0,l.cloneElement)(e)))};var v=e=>{let{percentage:t}=e,r=2*Math.PI*18;return(0,n.jsxs)("svg",{className:"w-18 h-18 text-textColor",viewBox:"0 0 40 40",children:[(0,n.jsx)("circle",{className:"stroke-current",cx:"20",cy:"20",r:18,strokeWidth:2,strokeDasharray:r,strokeDashoffset:r-t/100*r,fill:"none"}),(0,n.jsxs)("text",{x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle",className:"text-xs fill-textColor",children:[t,"%"]})]})};let E=[{src:"/Logos/html.png",alt:"html",percentage:90},{src:"/Logos/css.svg",alt:"css",percentage:80},{src:"/Logos/js.png",alt:"javascript",percentage:60},{src:"/Logos/bootstrap.png",alt:"bootstrap",percentage:40},{src:"/Logos/tailwind.svg",alt:"tailwind",percentage:70},{src:"/Logos/react.svg",alt:"react js",percentage:60},{src:"/Logos/next.svg",alt:"next js",percentage:50},{src:"/Logos/framer.svg",alt:"framer motion",percentage:40},{src:"/Logos/figma.svg",alt:"figma",percentage:80}];function j(){let[e,t]=(0,l.useState)(!1),[r,i]=(0,l.useState)(!1),o=()=>{r||(t(!e),i(!0))};return(0,n.jsx)("div",{className:"w-full h-screen flex items-center justify-center",children:(0,n.jsxs)("div",{className:"container flex flex-col items-center gap-14",children:[(0,n.jsxs)("div",{className:"space-y-4 md:space-y-6",children:[(0,n.jsxs)(a.E.h1,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:1},className:"text-4xl md:text-5xl font-bold uppercase",children:["skills"," ",(0,n.jsx)("span",{className:"text-transparent bg-clip-text bg-gradient-to-tr from-accentColor to-white",children:"&"})," ","technologies"]}),(0,n.jsx)(a.E.p,{initial:{opacity:0,y:-6},animate:{opacity:1,y:0},transition:{duration:1},className:"w-full md:w-8/12 mx-auto font-gowun text-center text-textColor",children:"A Closer Look at My Skill Set and Mastery in Leading-edge Technologies."})]}),(0,n.jsx)("div",{className:"w-full md:w-8/12 lg:w-6/12 mx-auto flex flex-wrap justify-center gap-6 lg:gap-10",children:E.map((t,r)=>(0,n.jsx)("div",{onClick:o,className:"flip-icon w-20 h-20 cursor-pointer",children:(0,n.jsx)(y,{children:(0,n.jsxs)(a.E.div,{initial:{opacity:0},animate:{opacity:1},whileHover:{rotateY:e?0:180},transition:{delay:.5,duration:.5,animationDirection:"normal"},onAnimationComplete:()=>i(!1),className:"flip-icon-inner w-full h-full",children:[(0,n.jsx)("div",{className:"flip-icon-front w-full h-full grid place-items-center p-4 rounded-xl bg-bgColor shadow-lg shadow-textColor/80",children:(0,n.jsx)(s.default,{src:t.src,alt:t.alt,width:50,height:50})}),(0,n.jsx)("div",{className:"flip-icon-back text-white w-full h-full grid place-items-center p-4 rounded-xl bg-bgColor shadow-lg shadow-textColor/80",children:(0,n.jsx)(v,{percentage:t.percentage})})]})})},r))})]})})}}},function(e){e.O(0,[958,703,971,69,744],function(){return e(e.s=5119)}),_N_E=e.O()}]);