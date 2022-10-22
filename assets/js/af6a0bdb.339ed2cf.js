"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[8318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=i,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={id:"update-your-manifest",title:"Update Your Manifest"},o=void 0,s={unversionedId:"modules/overview/update-your-manifest",id:"modules/overview/update-your-manifest",title:"Update Your Manifest",description:"Overview",source:"@site/docs/modules/overview/update-your-manifest.md",sourceDirName:"modules/overview",slug:"/modules/overview/update-your-manifest",permalink:"/docs/modules/overview/update-your-manifest",draft:!1,tags:[],version:"current",frontMatter:{id:"update-your-manifest",title:"Update Your Manifest"},sidebar:"DevGuides",previous:{title:"Getting Started",permalink:"/docs/modules/overview/getting-started"},next:{title:"Debugging Your Module",permalink:"/docs/modules/overview/debugging"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Manifest Format (v1)",id:"manifest-format-v1",level:2},{value:"Required Attributes",id:"required-attributes",level:3},{value:"Name",id:"name",level:4},{value:"Version",id:"version",level:4},{value:"Namespace",id:"namespace",level:4},{value:"Package",id:"package",level:4},{value:"Manifest Version",id:"manifest-version",level:4},{value:"Recommended Attributes",id:"recommended-attributes",level:3},{value:"Description",id:"description",level:4},{value:"Dependencies",id:"dependencies",level:4},{value:"URL",id:"url",level:4},{value:"Author",id:"author",level:4},{value:"Contributors",id:"contributors",level:4},{value:"Optional Attributes",id:"optional-attributes",level:3},{value:"Directories",id:"directories",level:4},{value:"Enabled Without GW2",id:"enabled-without-gw2",level:4},{value:"API Permissions",id:"api-permissions",level:4}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Your manifest (manifest.json) provides important metadata to Blish HUD prior to your module loading.  The manifest specification is kept in our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/blish-hud/manifest.json/blob/master/manifest-v1.md"},"manifest.json repository")," and is subject to revisions in the future."),(0,i.kt)("h2",{id:"manifest-format-v1"},"Manifest Format (v1)"),(0,i.kt)("p",null,"An example ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," with all attributes filled can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/blish-hud/manifest.json/blob/master/v1/manifest.json"},"here"),"."),(0,i.kt)("h3",{id:"required-attributes"},"Required Attributes"),(0,i.kt)("h4",{id:"name"},"Name"),(0,i.kt)("p",null,"The display name of the package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Marker Deleter"\n}\n')),(0,i.kt)("h4",{id:"version"},"Version"),(0,i.kt)("p",null,"The version of the package.  Should be ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semanticly Versioned"),".  Other packages can require your package as a dependency using version ranges (",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json#dependencies"},"similar to npm"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "1.2.3"\n}\n')),(0,i.kt)("h4",{id:"namespace"},"Namespace"),(0,i.kt)("p",null,"This is the primary identifier - it is a unique name for the package.  Do not change this value once your package has been published.  It is used internally within Blish HUD for Settings and more.  Modules should not be within the ",(0,i.kt)("inlineCode",{parentName:"p"},"bh")," namespace unless they have been contributed and approved to the base community packages. The manifest.json namespace and the C# namespace you use in your .cs files are unrelated. They can be the same but do not have to be. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "namespace": "jdoe.mypackages.markerdeleter"\n}\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When choosing your namespace, it is important to keep it unique from other module developers.  A good namespace will be prefixed with your own unique handle, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"acme.supermodule")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"acme.awesomemodule")," - both of which start with ",(0,i.kt)("inlineCode",{parentName:"p"},"acme"),".  You may wish to use your online handle."),(0,i.kt)("p",{parentName:"admonition"},"In any case, it is expected that the namespace will be prefixed with something.")),(0,i.kt)("h4",{id:"package"},"Package"),(0,i.kt)("p",null,'The name of your compiled module with ".dll" at the end.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "package": "Marker Deleter.dll"\n}\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you experience issues getting the package value correct, you can open your bhm with an application such as 7-Zip to ensure that the DLL within it matches the package attribute you've specified.")),(0,i.kt)("h4",{id:"manifest-version"},"Manifest Version"),(0,i.kt)("p",null,"The version of manifest used.  This is currently 1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "manifest_version": 1\n}\n')),(0,i.kt)("h3",{id:"recommended-attributes"},"Recommended Attributes"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"A description of the module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "description": "This module allows you to select any marker and delete it."\n}\n')),(0,i.kt)("h4",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"The dependencies required for your module.  Our implementation is ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json#dependencies"},"similar to npm"),".  We use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/adamreeve/semver.net"},"semver.net")," to verify dependency versions."),(0,i.kt)("p",null,"A dependency on ",(0,i.kt)("inlineCode",{parentName:"p"},"bh.blishhud")," indicates the versions of Blish HUD the module supports."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "bh.blishhud" : "~0.7.1",\n        "bh.general.markersandpaths" : "~1.2.3",\n    }\n}\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is important to specify an accurate ",(0,i.kt)("inlineCode",{parentName:"p"},"bh.blishhud")," dependency with version range to ensure that the proper versions of your module are displayed to users when using the repository.")),(0,i.kt)("h4",{id:"url"},"URL"),(0,i.kt)("p",null,"A url that can be used to link to the project or a link to more details instructions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "url": "https://github.com/blish-hud/manifest.json"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This value is currently not used.")),(0,i.kt)("h4",{id:"author"},"Author"),(0,i.kt)("p",null,"The author of the module.  If there are multiple authors, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"contributors")," attribute, instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "author": {\n        "name":     "Freesn\xf6w",                   // required\n        "username": "LandersXanders.1235",        // optional\n        "url":      "https://github.com/dlamkins" // optional\n    }\n}\n')),(0,i.kt)("h4",{id:"contributors"},"Contributors"),(0,i.kt)("p",null,"If provided, it will be used instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"author")," attribute (if ",(0,i.kt)("inlineCode",{parentName:"p"},"author")," is provided, it will be ignored).  The attributes for each contributor match the structure of the ",(0,i.kt)("inlineCode",{parentName:"p"},"author")," attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "contributors": [\n        {\n            "name":     "Freesn\xf6w",\n            "username": "LandersXanders.1235",\n            "url":      "https://github.com/dlamkins"\n        },\n        {\n            "name":     "jdoe",\n            "username": "jdoe.1234"\n        }\n    ]\n}\n')),(0,i.kt)("h3",{id:"optional-attributes"},"Optional Attributes"),(0,i.kt)("h4",{id:"directories"},"Directories"),(0,i.kt)("p",null,"A list of directory names that are used by the module.  These directories will be registered by the ",(0,i.kt)("inlineCode",{parentName:"p"},"FileService")," and a button to open the directory directly will be shown in the module settings."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "directories": ["markers"]\n}\n')),(0,i.kt)("h4",{id:"enabled-without-gw2"},"Enabled Without GW2"),(0,i.kt)("p",null,"Allows the module to continue to run when GW2 is not running and Blish HUD is still running in the tray.  Do not set to true unless your module requires this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "enabled_without_gw2": false\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This value is currently not used.")),(0,i.kt)("h4",{id:"api-permissions"},"API Permissions"),(0,i.kt)("p",null,"Gives the module permission to access the specified API permissions.  A permission can be marked as optional if the functionality of the module does not rely on the permission (the module must check for this).  A description can also be provided to provide justification to the end user as to why the permission is needed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "api_permissions": {\n        "account"     : { "optional": true,  "details": "Needed if you want the special feature enabled." },\n        "inventories" : { "optional": false, "details": "Needed to review the item in your inventory." }\n    }\n}\n')))}d.isMDXComponent=!0}}]);