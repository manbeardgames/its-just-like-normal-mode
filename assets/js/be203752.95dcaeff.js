"use strict";(self.webpackChunkits_just_like_normal_mode=self.webpackChunkits_just_like_normal_mode||[]).push([[38],{3905:function(e,A,t){t.d(A,{Zo:function(){return c},kt:function(){return h}});var a=t(7294);function n(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function o(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);A&&(a=a.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?o(Object(t),!0).forEach((function(A){n(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function i(e,A){if(null==e)return{};var t,a,n=function(e,A){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],A.indexOf(t)>=0||(n[t]=e[t]);return n}(e,A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),s=function(e){var A=a.useContext(l),t=A;return e&&(t="function"==typeof e?e(A):r(r({},A),e)),t},c=function(e){var A=s(e.components);return a.createElement(l.Provider,{value:A},e.children)},m={inlineCode:"code",wrapper:function(e){var A=e.children;return a.createElement(a.Fragment,{},A)}},p=a.forwardRef((function(e,A){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),h=n,f=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return t?a.createElement(f,r(r({ref:A},c),{},{components:t})):a.createElement(f,r({ref:A},c))}));function h(e,A){var t=arguments,n=A&&A.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=p;var i={};for(var l in A)hasOwnProperty.call(A,l)&&(i[l]=A[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9662:function(e,A,t){t.r(A),t.d(A,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=t(7462),n=t(3366),o=(t(7294),t(3905)),r=["components"],i={id:"p1s-shackles-of-time",title:"Shackles of Time",description:"How to handle the Shackles of Time mechanic",sidebar_position:6,slug:"/pandaemonium-asphodelos/the-first-circle/shackles-of-time"},l="Shackles of Time",s={unversionedId:"pandaemonium-asphodelos/the-first-circle/p1s-shackles-of-time",id:"pandaemonium-asphodelos/the-first-circle/p1s-shackles-of-time",title:"Shackles of Time",description:"How to handle the Shackles of Time mechanic",source:"@site/docs/pandaemonium-asphodelos/the-first-circle/shackles-of-time.md",sourceDirName:"pandaemonium-asphodelos/the-first-circle",slug:"/pandaemonium-asphodelos/the-first-circle/shackles-of-time",permalink:"/its-just-like-normal-mode/pandaemonium-asphodelos/the-first-circle/shackles-of-time",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"p1s-shackles-of-time",title:"Shackles of Time",description:"How to handle the Shackles of Time mechanic",sidebar_position:6,slug:"/pandaemonium-asphodelos/the-first-circle/shackles-of-time"},sidebar:"p1sSidebar",previous:{title:"Pitiless Flail of Grace/Purgation",permalink:"/its-just-like-normal-mode/pandaemonium-asphodelos/the-first-circle/pitiless-flail"},next:{title:"First Shining Cells Phase",permalink:"/its-just-like-normal-mode/pandaemonium-asphodelos/the-first-circle/shining-cells"}},c=[{value:"Example Video",id:"example-video",children:[],level:2}],m={toc:c};function p(e){var A=e.components,i=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:A,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shackles-of-time"},"Shackles of Time"),(0,o.kt)("p",null,"Shackles of Time will place the ",(0,o.kt)("img",{alt:"Shackles of Time",src:t(2092).Z}),(0,o.kt)("strong",{parentName:"p"},"Shackles of Time")," debuff on a random party member.  When the timer on the debuff expires, all tiles that have the same color as the one that party member is standing on will explode."),(0,o.kt)("p",null,"To handle this for our group, the party member that receives the debuff will always move to a red tile and the rest of the party will move to a green tile."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"I choose to have the party member with the debuff go to a red tile because generally red = bad and green = good. Either way, whatever color you choose for your group, just be sure it's consistant for you group that they go to that color every time."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Shackles of Time Step One",src:t(931).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Shackles of Time Step Two",src:t(4368).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Shackles of Time Step Three",src:t(3557).Z})),(0,o.kt)("h2",{id:"example-video"},"Example Video"),(0,o.kt)("p",null,"The following clip shows our static handling this mechanic by putting the player with the debuff on a red tile."),(0,o.kt)("iframe",{src:"https://player.twitch.tv/?video=1271932711&parent=localhost&parent=manbeardgames.com&autoplay=false",frameBorder:"0",allowFullScreen:!0,scrolling:"no",height:"378",width:"620"}))}p.isMDXComponent=!0},2092:function(e,A){A.Z="data:image/webp;base64,UklGRqwFAABXRUJQVlA4WAoAAAAwAAAAFwAAHwAASUNDUKACAAAAAAKgbGNtcwQwAABtbnRyUkdCIFhZWiAH5gABABUAFQAPAA5hY3NwTVNGVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1kZXNjAAABIAAAAEBjcHJ0AAABYAAAADZ3dHB0AAABmAAAABRjaGFkAAABrAAAACxyWFlaAAAB2AAAABRiWFlaAAAB7AAAABRnWFlaAAACAAAAABRyVFJDAAACFAAAACBnVFJDAAACFAAAACBiVFJDAAACFAAAACBjaHJtAAACNAAAACRkbW5kAAACWAAAACRkbWRkAAACfAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACQAAAAcAEcASQBNAFAAIABiAHUAaQBsAHQALQBpAG4AIABzAFIARwBCbWx1YwAAAAAAAAABAAAADGVuVVMAAAAaAAAAHABQAHUAYgBsAGkAYwAgAEQAbwBtAGEAaQBuAABYWVogAAAAAAAA9tYAAQAAAADTLXNmMzIAAAAAAAEMQgAABd7///MlAAAHkwAA/ZD///uh///9ogAAA9wAAMBuWFlaIAAAAAAAAG+gAAA49QAAA5BYWVogAAAAAAAAJJ8AAA+EAAC2xFhZWiAAAAAAAABilwAAt4cAABjZcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltjaHJtAAAAAAADAAAAAKPXAABUfAAATM0AAJmaAAAmZwAAD1xtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAEcASQBNAFBtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJBTFBIWwAAAAFwE0mSIzWTItI8hsaxODhHYRksgfUHxAlLixdmREyAPiCOw0bCbTk+NotcTm14PGd0nLT80XzSaOo5BVHOGJBE1CMl0CrR9tRA29DlWnag3bjPccze6DDYoG0AVlA4IIICAACwDgCdASoYACAAPjEUiEKiISEUBqggAwS2AFSOBrFA4AG2AuwDnwvYl/cD0ublnzvvgr15yXz3f8kNEz/XMc9/nO8CjadSl/qvTxzWfN3+7/s3wB/yD+b/5H8wP712gHsgfqAd+dSxPl9+J5rUSvcnEGxuL2cD3hejUE7H90AA/v7Na+0ZaKsmJlOao//3B6VLZIzsaGBA1Chf/3/FwBMFrFPtPpEKbEHyn+jcRiy9trdN4SP6VYaVvUb2QaHf7vwpH/3QsFS16vSDniXfxEE6JGS0s+TY45fjwTf9df73fKPCvbm8QQuB/ph0uex0e+KxP8/z1VC/h1mpElyMXF5Ubyb/yakpZIk9WHx+fpi3eLbloy2UNhKUJ3oQkR/9g24dKh9jnoUqEpZL1n8DqgNslvQ2GKC/SFN+Z0eielsImJ7vg5+be5zFPAP51YCB32zgni3yCH/qj0cb1zrLZ4mj/GoH0yKbFhbsl83vbYdffrPIUhmtD6dCq7m1/PSrYhMvhf5UZvfBU2V+cgXKwg0tGWWsN9LnCZd/QlhvxzB7tPLWhxet2KlZDV1uh/lrs+GJH+IUtk6UCzX+K7d1D7k7lm46c2a14iBmFy8z/lx8e7bMuFinBoeEbu9V5fZdrJAekyQPIQpZB4+MvuCu6zb3X+dkWWtqAUkX5c5OJs/VV/SKM0VkFOHh7r/97fP7j5+h761nGuDB1jrdHf59ortAIoueMUgbMD01IgMAh+X/+7BM3rrXHXrTgsDD6/Nx+YMS/FNn44zipojOxCZ2f3RLICdfc9Dq8kBNPHFBvOrcO3Jfn4eXTJ8XsgWUtSZ/H4sB03+/FKI3mGinXo/DWzHDqAA="},931:function(e,A,t){A.Z=t.p+"assets/images/shackles-of-time-step-one-b8fac1af1e11ce8afc8ebe3487bac96c.webp"},3557:function(e,A,t){A.Z=t.p+"assets/images/shackles-of-time-step-three-c9b337d38f80bcd9d0ad04613515702e.webp"},4368:function(e,A,t){A.Z=t.p+"assets/images/shackles-of-time-step-two-884077cee7ba95230046ea5a8c06d15b.webp"}}]);