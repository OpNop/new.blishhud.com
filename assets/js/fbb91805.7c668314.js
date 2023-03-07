"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[9420],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(r),p=s,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function p(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},936:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(7462),s=(r(7294),r(3905));const o={title:"Blish HUD Performance Troubleshooting"},i=void 0,a={unversionedId:"user/troubleshooting/853",id:"user/troubleshooting/853",title:"Blish HUD Performance Troubleshooting",description:"Issue",source:"@site/docs/user/troubleshooting/853.md",sourceDirName:"user/troubleshooting",slug:"/user/troubleshooting/853",permalink:"/docs/user/troubleshooting/853",draft:!1,tags:[],version:"current",frontMatter:{title:"Blish HUD Performance Troubleshooting"},sidebar:"UserGuides",previous:{title:"Start GW2 and Blish HUD Together",permalink:"/docs/user/troubleshooting/784"}},l={},u=[{value:"Issue",id:"issue",level:2},{value:"Overview",id:"overview",level:2},{value:"Solutions",id:"solutions",level:2},{value:"Evaluate Blish HUD Graphics Settings",id:"evaluate-blish-hud-graphics-settings",level:4},{value:"Ensure Blish HUD and Guild Wars 2 are using your dedicated GPU",id:"ensure-blish-hud-and-guild-wars-2-are-using-your-dedicated-gpu",level:4},{value:"Other things to check",id:"other-things-to-check",level:4}],c={toc:u};function h(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"issue"},"Issue"),(0,s.kt)("p",null,"While running Blish HUD you see significant game performance impacts."),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Blish HUD is designed to use few CPU and GPU resources.   Medium and high-end systems should see little to no measurable performance impact while running Blish HUD.  "),(0,s.kt)("p",null,"While troubleshooting Blish HUD performance, run Blish HUD with no modules enabled.  If you have modules enabled, disable them and then restart Blish HUD.  If you see a substantial impact (for example, an FPS drop of 10 or more), please review the solutions listed in this guide, as there is likely a misconfiguration causing the performance impact, which can be solved."),(0,s.kt)("p",null,"If your performance issue only occurs while certain modules are enabled, please reach out in the ",(0,s.kt)("a",{parentName:"p",href:"http://link.blishhud.com/discordhelp"},"Blish HUD Discord #\ud83d\udca2help")," channel so that the performance of the module can be more closely evaluated by its developer."),(0,s.kt)("h2",{id:"solutions"},"Solutions"),(0,s.kt)("h4",{id:"evaluate-blish-hud-graphics-settings"},"Evaluate Blish HUD Graphics Settings"),(0,s.kt)("p",null,"By default, Blish HUD is configured to run locked at 60 FPS with Vsync enabled.  Many users will change these settings without recognizing the consequences.  Setting Blish HUD to a Frame Limiter of Unlimited tells Blish HUD that it has no restrictions and should attempt to render as many frames as possible.  This is not necessary for an overlay.  "),(0,s.kt)("p",null,"If you use modules such as Pathing, Racing Meter, or others that render 3D elements, you should ensure Blish HUD runs slightly faster than the game.  Typically 60 FPS is fine for most users or 90 FPS for those with higher-performance systems.  For lower-end systems or for those not using modules that render 3D elements, locking Blish HUD to 30 FPS is perfectly fine."),(0,s.kt)("p",null,"There are very few reasons to disable Vsync in Blish HUD.  Vsync stigmas, such as input lag, etc., are irrelevant to an overlay such as Blish HUD."),(0,s.kt)("p",null,"\ud83d\udc49 If you are unsure about these settings, set the Frame Limiter to ",(0,s.kt)("strong",{parentName:"p"},"Locked to 60 Fps")," and check ",(0,s.kt)("strong",{parentName:"p"},"Enable Vsync"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1950594/223299912-e7b45985-bedb-4ab6-bfa0-ec337b60a8d9.png",alt:"image"})),(0,s.kt)("h4",{id:"ensure-blish-hud-and-guild-wars-2-are-using-your-dedicated-gpu"},"Ensure Blish HUD and Guild Wars 2 are using your dedicated GPU"),(0,s.kt)("p",null,"Those with an integrated GPU (iGPU) and a dedicated GPU may find that their performance issues are caused by either Blish HUD, Guild Wars 2, or both running on the wrong GPU.  In your computer settings under ",(0,s.kt)("strong",{parentName:"p"},"System > Display > Graphics")," ensure that both Guild Wars 2 and Blish HUD are configured to use your high-performance GPU."),(0,s.kt)("video",{controls:!0},(0,s.kt)("source",{src:"https://user-images.githubusercontent.com/1950594/223299168-60de137a-d01d-47f5-94e7-d7de95d194d2.mp4"})),(0,s.kt)("p",null,"You will know you've done this successfully if both applications are shown as using the same GPU engine in Task Manager:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1950594/223299509-de8e387d-0dd8-42e9-a585-5d12f3ecf11f.png",alt:"image"})),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"In this case, the dedicated GPU is ",(0,s.kt)("strong",{parentName:"em"},"GPU 0"),", but it may be ",(0,s.kt)("strong",{parentName:"em"},"GPU 1")," for you.")),(0,s.kt)("h4",{id:"other-things-to-check"},"Other things to check"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"For those of you using a desktop computer with a dedicated GPU, double-check that your monitors are plugged directly into the GPU and not into the ports on your motherboard.  "),(0,s.kt)("li",{parentName:"ul"},"Ensure none of the Debug settings are enabled in Blish HUD unless asked by somebody assisting you with troubleshooting.  These introduce additional overhead, which could cause slight performance impacts."),(0,s.kt)("li",{parentName:"ul"},"In the NVIDIA Control Panel under ",(0,s.kt)("strong",{parentName:"li"},"3D Settings > Manage 3D settings"),", ensure ",(0,s.kt)("strong",{parentName:"li"},"Background application Max Frame Rate")," is ",(0,s.kt)("strong",{parentName:"li"},"Off"),".")))}h.isMDXComponent=!0}}]);