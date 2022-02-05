"use strict";(self.webpackChunkits_just_like_normal_mode=self.webpackChunkits_just_like_normal_mode||[]).push([[806],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},620:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"p4s-pinax",title:"Pinax (Tiles)",sidebar_position:3,slug:"/pandaemonium-asphodelos/the-fourth-circle/pinax"},s=void 0,p={unversionedId:"pandaemonium-asphodelos/the-fourth-circle/p4s-pinax",id:"pandaemonium-asphodelos/the-fourth-circle/p4s-pinax",title:"Pinax (Tiles)",description:"Pinax (Overview)",source:"@site/docs/pandaemonium-asphodelos/the-fourth-circle/pinax.md",sourceDirName:"pandaemonium-asphodelos/the-fourth-circle",slug:"/pandaemonium-asphodelos/the-fourth-circle/pinax",permalink:"/its-just-like-normal-mode/pandaemonium-asphodelos/the-fourth-circle/pinax",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"p4s-pinax",title:"Pinax (Tiles)",sidebar_position:3,slug:"/pandaemonium-asphodelos/the-fourth-circle/pinax"},sidebar:"p4sSidebar",previous:{title:"Blood Rake (Role Call + Tethers)",permalink:"/its-just-like-normal-mode/pandaemonium-asphodelos/the-fourth-circle/blood-rake"}},c=[{value:"Pinax (Overview)",id:"pinax-overview",children:[],level:2},{value:"Uptime Strat",id:"uptime-strat",children:[],level:2}],u={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"pinax-overview"},"Pinax (Overview)"),(0,i.kt)("p",null,"During this part of the fight, the boss will transition the room to create four tiles, one in each qudrant of the room. The tiles are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lightning: Deals proximity damage with the epicenter being the center of the room"),(0,i.kt)("li",{parentName:"ul"},"Water: Does a knockback from the center of the room"),(0,i.kt)("li",{parentName:"ul"},"Fire: Does 2 AoE targeted on healers. Damage must be shraed by light parties."),(0,i.kt)("li",{parentName:"ul"},"Poison: Does a point blank AoE on every party member.  Each party member can only take one, so don't overlap them.")),(0,i.kt)("p",null,"When the boss casts ",(0,i.kt)("strong",{parentName:"p"},"Pinax"),", this will trigger two of the tiles to perform their mechanics back to back.  The first tile will always be either Lightning or Water, and the second tile wil always be either Fire or Posion.  All possible combinations are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lightning then Fire (Proximity damage then group stacks)"),(0,i.kt)("li",{parentName:"ul"},"Lighning then Poision (Proximity damage then spreads)"),(0,i.kt)("li",{parentName:"ul"},"Water then Fire (Knockback then group stacks)"),(0,i.kt)("li",{parentName:"ul"},"Water then Poision (Knockback then spreads)")),(0,i.kt)("p",null,"As each tile's mechanic is resolved, the tile itself will also explode, so party members cannot be standing inside the tile."),(0,i.kt)("h2",{id:"uptime-strat"},"Uptime Strat"),(0,i.kt)("p",null,"Aether party finder has adopted an uptime strat that is relitvely safe and easy to perform. Instead of typing it all out, I've made a video, which you can find below.  The video steps through a toolbox I made and discusses how the uptime strat works for each possible combination.  I have also provided the toolbox link below"),(0,i.kt)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},(0,i.kt)("iframe",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},src:"https://www.youtube.com/embed/kV3casBjBZA",frameborder:"0",allowfullscreen:!0})),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"And here is the toolbox link used in the video",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://ff14.toolboxgaming.space/?id=272156230304461&preview=1"},(0,i.kt)("strong",{parentName:"a"},"Toolbox Link"))))}h.isMDXComponent=!0}}]);