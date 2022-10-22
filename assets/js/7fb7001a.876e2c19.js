"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,c=m["".concat(u,".").concat(p)]||m[p]||g[p]||i;return n?r.createElement(c,a(a({ref:t},d),{},{components:n})):r.createElement(c,a({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={id:"debugging",title:"Debugging Your Module"},a=void 0,l={unversionedId:"modules/overview/debugging",id:"modules/overview/debugging",title:"Debugging Your Module",description:"Configuring Your Project",source:"@site/docs/modules/overview/debugging.md",sourceDirName:"modules/overview",slug:"/modules/overview/debugging",permalink:"/docs/modules/overview/debugging",draft:!1,tags:[],version:"current",frontMatter:{id:"debugging",title:"Debugging Your Module"},sidebar:"DevGuides",previous:{title:"Update Your Manifest",permalink:"/docs/modules/overview/update-your-manifest"},next:{title:"Anatomy of a Module",permalink:"/docs/modules/overview/anatomy"}},u={},s=[{value:"Configuring Your Project",id:"configuring-your-project",level:2},{value:"Runtime Differences When Debugging",id:"runtime-differences-when-debugging",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:s};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuring-your-project"},"Configuring Your Project"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In your module's ",(0,o.kt)("strong",{parentName:"li"},"Debug")," settings, set the ",(0,o.kt)("strong",{parentName:"li"},"Start action")," to ",(0,o.kt)("em",{parentName:"li"},"Start external program")," and specify the path of ",(0,o.kt)("strong",{parentName:"li"},"Blish HUD.exe"),"."),(0,o.kt)("li",{parentName:"ol"},"Under the same settings, set ",(0,o.kt)("strong",{parentName:"li"},"Command line arguments")," to ",(0,o.kt)("inlineCode",{parentName:"li"},'--debug --module "c:\\project-path\\bin\\x64\\Debug\\<path-to-your-module-output.bhm"'))),(0,o.kt)("p",null,"By default, you should now be able to run your application - it'll generate the ",(0,o.kt)("em",{parentName:"p"},".bhm")," file automatically for you when the project is built.  The command line arguments you specified will launch Blish HUD and allow you to debug your module (the debugger will be attached).  Guild Wars 2 should be running for Blish HUD to be able to overlay something while debugging your module. Instead of running Guild Wars 2 you can modify the ",(0,o.kt)("strong",{parentName:"p"},"Command line arguments")," further to let Blish HUD overlay a powershell window for testing purposes (",(0,o.kt)("a",{parentName:"p",href:"https://blishhud.com/docs/user/launch-options#overlay-a-different-application-esp-for-testing"},"https://blishhud.com/docs/user/launch-options#overlay-a-different-application-esp-for-testing"),"). "),(0,o.kt)("p",null,"As long as your project generates a PDB file, it will be packaged into your bhm and loaded by the module loader at runtime."),(0,o.kt)("h2",{id:"runtime-differences-when-debugging"},"Runtime Differences When Debugging"),(0,o.kt)("p",null,"Blish HUD behaves somewhat different when the debug flag is passed to it.  Beyond showing additional runtime data in the top right-corner, some module error handling is disabled.  The intention is to ensure that exceptions are not caught and are instead rethrown to ensure you can address them."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Problem: The debugging runs only for a very short time. ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Solution: Make sure that no other instance of Blish HUD is already running."))),(0,o.kt)("li",{parentName:"ul"},"Problem: Blish HUD starts, but the module is not running.  The module is listed in Blish HUD, but the module enable and disable buttons are both disabled.  In additon to that Blish HUD tells me to restart Blish HUD to get the module working.  But that does not work either. ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Solution: You try to debug a module for which a .bhm file already exists in the folder %userprofile%Documents\\Guild Wars 2\\addons\\blishhud\\modules.  Rename the .bhm file ending for this module in the folder and try again.  Or use the --settings ",(0,o.kt)("strong",{parentName:"li"},"Command line arguments")," (",(0,o.kt)("a",{parentName:"li",href:"https://blishhud.com/docs/user/launch-options#-s---settings-pathtosettingsdir"},"https://blishhud.com/docs/user/launch-options#-s---settings-pathtosettingsdir"),").")))))}g.isMDXComponent=!0}}]);