import{a as K,g as Q}from"./index-mq98pnMR.js";var p={},z;function U(){if(z)return p;z=1;function A(r){if(typeof window>"u")return;const u=document.createElement("style");return u.setAttribute("type","text/css"),u.innerHTML=r,document.head.appendChild(u),r}Object.defineProperty(p,"__esModule",{value:!0});var e=K();function D(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var a=D(e);A(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const W=e.forwardRef(function({style:u={},className:B="",autoFill:l=!1,play:f=!0,pauseOnHover:w=!1,pauseOnClick:b=!1,direction:t="left",speed:d=50,delay:S=0,loop:q=0,gradient:I=!1,gradientColor:_="white",gradientWidth:v=200,onFinish:L,onCycleComplete:X,onMount:N,children:h},O){const[x,P]=e.useState(0),[y,T]=e.useState(0),[g,C]=e.useState(1),[E,Z]=e.useState(!1),F=e.useRef(null),i=O||F,c=e.useRef(null),m=e.useCallback(()=>{if(c.current&&i.current){const n=i.current.getBoundingClientRect(),M=c.current.getBoundingClientRect();let o=n.width,s=M.width;(t==="up"||t==="down")&&(o=n.height,s=M.height),C(l&&o&&s&&s<o?Math.ceil(o/s):1),P(o),T(s)}},[l,i,t]);e.useEffect(()=>{if(E&&(m(),c.current&&i.current)){const n=new ResizeObserver(()=>m());return n.observe(i.current),n.observe(c.current),()=>{n&&n.disconnect()}}},[m,i,E]),e.useEffect(()=>{m()},[m,h]),e.useEffect(()=>{Z(!0)},[]),e.useEffect(()=>{typeof N=="function"&&N()},[]);const j=e.useMemo(()=>l?y*g/d:y<x?x/d:y/d,[l,x,y,g,d]),G=e.useMemo(()=>Object.assign(Object.assign({},u),{"--pause-on-hover":!f||w?"paused":"running","--pause-on-click":!f||w&&!b||b?"paused":"running","--width":t==="up"||t==="down"?"100vh":"100%","--transform":t==="up"?"rotate(-90deg)":t==="down"?"rotate(90deg)":"none"}),[u,f,w,b,t]),J=e.useMemo(()=>({"--gradient-color":_,"--gradient-width":typeof v=="number"?`${v}px`:v}),[_,v]),k=e.useMemo(()=>({"--play":f?"running":"paused","--direction":t==="left"?"normal":"reverse","--duration":`${j}s`,"--delay":`${S}s`,"--iteration-count":q?`${q}`:"infinite","--min-width":l?"auto":"100%"}),[f,t,j,S,q,l]),R=e.useMemo(()=>({"--transform":t==="up"?"rotate(90deg)":t==="down"?"rotate(-90deg)":"none"}),[t]),$=e.useCallback(n=>[...Array(Number.isFinite(n)&&n>=0?n:0)].map((M,o)=>a.default.createElement(e.Fragment,{key:o},e.Children.map(h,s=>a.default.createElement("div",{style:R,className:"rfm-child"},s)))),[R,h]);return E?a.default.createElement("div",{ref:i,style:G,className:"rfm-marquee-container "+B},I&&a.default.createElement("div",{style:J,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:k,onAnimationIteration:X,onAnimationEnd:L},a.default.createElement("div",{className:"rfm-initial-child-container",ref:c},e.Children.map(h,n=>a.default.createElement("div",{style:R,className:"rfm-child"},n))),$(g-1)),a.default.createElement("div",{className:"rfm-marquee",style:k},$(g))):null});return p.default=W,p}var V=U();const H=Q(V);export{H as F};
