import{d as O}from"./index-356e4a49.js";const{global:h}=__STORYBOOK_MODULE_GLOBAL__,{logger:B}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var p="backgrounds",{document:s,window:w}=h,x=()=>w.matchMedia("(prefers-reduced-motion: reduce)").matches,A=(r,e=[],n)=>{if(r==="transparent")return"transparent";if(e.find(a=>a.value===r))return r;let t=e.find(a=>a.name===n);if(t)return t.value;if(n){let a=e.map(i=>i.name).join(", ");B.warn(O`
        Backgrounds Addon: could not find the default color "${n}".
        These are the available colors for your story based on your configuration:
        ${a}.
      `)}return"transparent"},_=r=>{(Array.isArray(r)?r:[r]).forEach(L)},L=r=>{let e=s.getElementById(r);e&&e.parentElement.removeChild(e)},T=(r,e)=>{let n=s.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let t=s.createElement("style");t.setAttribute("id",r),t.innerHTML=e,s.head.appendChild(t)}},C=(r,e,n)=>{let t=s.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let a=s.createElement("style");a.setAttribute("id",r),a.innerHTML=e;let i=`addon-backgrounds-grid${n?`-docs-${n}`:""}`,o=s.getElementById(i);o?o.parentElement.insertBefore(a,o):s.head.appendChild(a)}};const{useMemo:f,useEffect:v}=__STORYBOOK_MODULE_PREVIEW_API__;var I=(r,e)=>{var c;let{globals:n,parameters:t}=e,a=(c=n[p])==null?void 0:c.value,i=t[p],o=f(()=>i.disable?"transparent":A(a,i.values,i.default),[i,a]),d=f(()=>o&&o!=="transparent",[o]),g=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=f(()=>{let l="transition: background-color 0.3s;";return`
      ${g} {
        background: ${o} !important;
        ${x()?"":l}
      }
    `},[o,g]);return v(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!d){_(l);return}C(l,u,e.viewMode==="docs"?e.id:null)},[d,u,e]),r()},R=(r,e)=>{var $;let{globals:n,parameters:t}=e,a=t[p].grid,i=(($=n[p])==null?void 0:$.grid)===!0&&a.disable!==!0,{cellAmount:o,cellSize:d,opacity:g}=a,u=e.viewMode==="docs",c=t.layout===void 0||t.layout==="padded"?16:0,l=a.offsetX??(u?20:c),b=a.offsetY??(u?20:c),y=f(()=>{let m=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",E=[`${d*o}px ${d*o}px`,`${d*o}px ${d*o}px`,`${d}px ${d}px`,`${d}px ${d}px`].join(", ");return`
      ${m} {
        background-size: ${E} !important;
        background-position: ${l}px ${b}px, ${l}px ${b}px, ${l}px ${b}px, ${l}px ${b}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${g/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g/2}) 1px, transparent 1px) !important;
      }
    `},[d]);return v(()=>{let m=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!i){_(m);return}T(m,y)},[i,y,e]),r()},k=[R,I],M={[p]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},S={[p]:null};const z=Object.freeze(Object.defineProperty({__proto__:null,decorators:k,globals:S,parameters:M},Symbol.toStringTag,{value:"Module"})),G=Object.freeze(Object.defineProperty({__proto__:null,decorators:k,globals:S,parameters:M},Symbol.toStringTag,{value:"Module"}));export{G as a,z as p};
//# sourceMappingURL=preview-eec6d29c.js.map
