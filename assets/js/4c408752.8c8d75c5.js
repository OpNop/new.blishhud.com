"use strict";(self.webpackChunknew_blishhud_com=self.webpackChunknew_blishhud_com||[]).push([[9554,4935,4504,4850],{7054:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var a=l(7294);function r(e){let{timestamp:t,classes:l}=e;var r=new Date(t);return a.createElement("p",{className:l,"data-hint":r.toLocaleString()},r.toLocaleDateString())}},4271:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});var a=l(7294),r=l(412);function n(e){let{module:t}=e;return r.Z.canUseDOM?a.createElement("a",{class:"bhud-module-card",target:"_top",href:`/modules/?module=${t.Namespace}`},a.createElement("div",{class:"bhud-module-hero"},a.createElement("img",{src:`https://pkgs.blishhud.com/metadata/img/module/${t.Namespace}.png`,onError:e=>{e.target.onerror=null,e.target.src="/img/156027x2.png"},alt:"Module image"})),a.createElement("div",{class:"bhud-card-stacked"},a.createElement("div",{class:"bhud-card-content"},a.createElement("div",{class:"bhud-card-title"},a.createElement("div",{"data-hint":t.AuthorName,class:"bhud-avatar hint--top"},a.createElement("img",{src:t.AuthorAvatar,onError:e=>{e.target.onerror=null,e.target.src="https://bulma.io/images/placeholders/32x32.png"}})),a.createElement("div",{class:"bhud-module-line"},a.createElement("span",{class:"bhud-card-title hint--top","data-hint":t.Namespace},t.Name))),a.createElement("div",{class:"content"},t.Summary)))):a.createElement("label",null,"Wait...")}},849:(e,t,l)=>{l.r(t),l.d(t,{default:()=>s});var a=l(7294),r=l(412),n=l(7054);function s(e){let{namespace:t,module:l}=e;return r.Z.canUseDOM?l.AuthorProfile?(l.ProfileSource=function(e){const t=/<a href="https:\/\/www\.youtube\.com.*\/([^"]*)"[^<]+<\/a>/gm;let l;for(;null!==(l=t.exec(e));)l.index===t.lastIndex&&t.lastIndex++,e=e.replace(l[0],`<iframe width='560' height='315' src='https://www.youtube.com/embed/${l[1]}' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`);return e}(l.ProfileSource),a.createElement("div",{class:"container"},a.createElement("nav",{class:"breadcrumb is-small","aria-label":"breadcrumbs"},a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{href:"/modules"},"Modules")),a.createElement("li",{class:"is-active"},a.createElement("a",{"aria-current":"page"},l.Name)))),a.createElement("section",{class:"hero"},a.createElement("div",{class:"media"},a.createElement("div",{class:"media-left"},a.createElement("figure",{class:""},a.createElement("img",{src:`https://pkgs.blishhud.com/metadata/img/module/${t}.png`,alt:"Module image",width:"128",height:"128",onError:e=>{e.target.onerror=null,e.target.src="/img/156027x2.png"},style:{borderRadius:"6px"}}))),a.createElement("div",{class:"hero-body"},a.createElement("p",{class:"title"},l.Name),a.createElement("p",{class:"subtitle"})))),a.createElement("div",{class:"columns"},a.createElement("section",{class:"column is-two-thirds"},a.createElement("div",{class:"box"},a.createElement("nav",{class:"level"},a.createElement("div",{class:"level-item has-text-centered"},a.createElement("div",null,a.createElement("p",{class:"heading"},"Downloads"),a.createElement("p",{class:"title"},l.Downloads.toLocaleString()))),a.createElement("div",{class:"level-item has-text-centered"},a.createElement("div",null,a.createElement("p",{class:"heading"},"Last Release"),a.createElement(n.default,{classes:"title hint--bottom",timestamp:l.LastRelease}))),a.createElement("div",{class:"level-item has-text-centered"},a.createElement("div",null,a.createElement("p",{class:"heading"},"Latest Version"),a.createElement("p",{class:"title"},l.Version))))),a.createElement("div",{class:"box external-source",dangerouslySetInnerHTML:{__html:l.ProfileSource?l.ProfileSource:"<center><i>No Description</i></center>"}}),a.createElement("div",{class:"card",style:{marginTop:"1em",padding:"0"}},a.createElement("header",{class:"card-header"},a.createElement("p",{class:"card-header-title"},"Module Downloads")),a.createElement("div",{class:"card-content",style:{padding:"0"}},a.createElement("iframe",{width:"100%",height:"470px",scrolling:"no",src:`https://dashboards.blishhud.com/embed/query/21/visualization/32?api_key=WgbLIl20YAQQvaGy8khDWnCQSJ3dRt3loEJ1boip&p_$module_namespaces=${t}&p_RelativeDaysSince=15&hide_parameters=true&hide_header=true&hide_link=true`,style:{overflow:"hidden"}})))),a.createElement("section",{class:"column is-one-third"},a.createElement("div",{class:"card"},a.createElement("header",{class:"card-header"},a.createElement("p",{class:"card-header-title"},"Module Details")),a.createElement("div",{class:"card-content"},a.createElement("table",{style:{width:"100%"}},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,"Name"),a.createElement("td",null,l.Name)),a.createElement("tr",null,a.createElement("td",null,"Downloads"),a.createElement("td",null,l.Downloads.toLocaleString())),a.createElement("tr",null,a.createElement("td",null,"Last Update"),a.createElement("td",null,a.createElement(n.default,{classes:"hint--left",timestamp:l.LastRelease}))),a.createElement("tr",null,a.createElement("td",null,"Release Notes"),a.createElement("td",null,a.createElement("a",{target:"_blank",href:`https://pkgs.blishhud.com/${t}.html`},"View Release Notes")))))),a.createElement("div",{class:"card-content"},a.createElement("center",null,null!=l.IssueUrl&&a.createElement("a",{style:{marginRight:"1em"},class:"button",target:"_blank",href:l.IssueUrl},"Report a Bug"),null!=l.SuggestionsUrl&&a.createElement("a",{class:"button",target:"_blank",href:l.SuggestionsUrl},"Make a Suggestion")))),a.createElement("div",{class:"card",style:{marginTop:"1em"}},a.createElement("header",{class:"card-header"},a.createElement("p",{class:"card-header-title"},"Module Author")),a.createElement("div",{class:"card-content"},a.createElement("div",{class:"media"},a.createElement("div",{class:"media-left"},a.createElement("figure",{class:"image is-48x48 is-rounded"},a.createElement("img",{src:`https://pkgs.blishhud.com/metadata/img/author/${l.AuthorProfile.Id}.png`,class:"is-rounded",alt:"Module Author Image"}))),a.createElement("div",{class:"media-content"},a.createElement("p",{class:"title is-4",style:{lineHeight:"48px"}},l.AuthorProfile.DisplayName))),a.createElement("div",{class:"content"},null!=l.AuthorProfile.KofiProfile&&a.createElement("div",{class:"field has-addons"},a.createElement("span",{class:"control"},a.createElement("a",{class:"button is-static",style:{width:"180px"}},a.createElement("i",{class:"fa fa-heart"}),"\xa0\xa0Donate on Ko-Fi")),a.createElement("span",{class:"control is-expanded"},a.createElement("a",{target:"_blank",href:`https://ko-fi.com/${l.AuthorProfile.KofiProfile}`,class:"button"},l.AuthorProfile.KofiProfile))),null!=l.AuthorProfile.GuildWars2Profile&&a.createElement("div",{class:"field has-addons"},a.createElement("span",{class:"control"},a.createElement("a",{class:"button is-static",style:{width:"180px"}},a.createElement("i",{class:"fa fa-dragon"}),"\xa0\xa0Guild Wars 2")),a.createElement("span",{class:"control is-expanded"},a.createElement("a",{target:"_blank",class:"button"},l.AuthorProfile.GuildWars2Profile))),null!=l.AuthorProfile.GithubProfile&&a.createElement("div",{class:"field has-addons"},a.createElement("span",{class:"control"},a.createElement("a",{class:"button is-static",style:{width:"180px"}},a.createElement("i",{class:"fab fa-github"}),"\xa0\xa0GitHub Profile")),a.createElement("span",{class:"control is-expanded"},a.createElement("a",{target:"_blank",href:`https://github.com/${l.AuthorProfile.GithubProfile}`,class:"button"},l.AuthorProfile.GithubProfile)))))))))):a.createElement("label",null,"Loading..."):a.createElement("label",null,"Wait...")}},2380:(e,t,l)=>{l.r(t),l.d(t,{default:()=>u});var a=l(7294),r=l(215),n=l(4271),s=l(849),c=l(2263),i=l(5742),o=l(2389);function m(e){let{children:t,fallback:l}=e;return(0,o.Z)()?a.createElement(a.Fragment,null,null==t?void 0:t()):l??null}var d=l(412);const u=function(){if(!d.Z.canUseDOM)return a.createElement("label",null,"Wait...");const[e,t]=(0,a.useState)(null),[l,o]=(0,a.useState)(!1),[u,h]=(0,a.useState)(null),[E,p]=(0,a.useState)(null);var f=new URLSearchParams(window.location.search).get("module");if((0,a.useEffect)((()=>{null==f?fetch("https://pkgs.blishhud.com/metadata/all.json").then((e=>e.json())).then((e=>{o(!0),h(e)}),(e=>{o(!0),t(e)})):fetch(`https://pkgs.blishhud.com/metadata/${f}.json`).then((e=>e.json())).then((e=>{o(!0),p(e)}),(e=>{o(!0),t(e)}))}),[l]),e)return a.createElement("label",null,"Error loading: ",e);if(!l)return a.createElement("div",{class:"hero"},a.createElement("h1",null,"Loading..."));if(null==f){if(null!=u)return function(e){const t=(0,c.Z)(),{siteConfig:l={}}=t;return a.createElement(r.Z,{title:"Modules",description:"A modern Guild Wars 2 overlay with powerful module support."},a.createElement(i.Z,null,a.createElement("meta",{name:"keywords",content:"Guild Wars 2, gw2, Blish, HUD, bhud, TacO, Overlay"})),a.createElement("div",{class:"module-content"},a.createElement("div",{class:"field has-addons",style:{display:"none"}},a.createElement("p",{class:"control"},a.createElement("a",{class:"button is-static"},"Sort")),a.createElement("div",{class:"select is-right"},a.createElement("select",null,a.createElement("option",null,"A to Z"),a.createElement("option",null,"Z to A"),a.createElement("option",null,"Downloads"),a.createElement("option",null,"Last Update")))),a.createElement("div",{class:"module-cards"},a.createElement(m,null,(()=>e&&e.map((e=>a.createElement(n.default,{key:e.Namespace,module:e}))))))))}(u);o(!1)}else{if(null!=E)return function(e,t){const l=(0,c.Z)(),{siteConfig:n={}}=l;return a.createElement(r.Z,{title:"Module",description:"A modern Guild Wars 2 overlay with powerful module support."},a.createElement(i.Z,null,a.createElement("meta",{name:"keywords",content:"Guild Wars 2, gw2, Blish, HUD, bhud, TacO, Overlay"})),a.createElement(m,null,(()=>a.createElement("div",{class:"module-content"},a.createElement(s.default,{namespace:e,module:t})))))}(f,E);o(!1)}}}}]);