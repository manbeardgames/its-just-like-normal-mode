"use strict";(self.webpackChunkits_just_like_normal_mode=self.webpackChunkits_just_like_normal_mode||[]).push([[38],{3905:function(A,e,t){t.d(e,{Zo:function(){return c},kt:function(){return f}});var a=t(7294);function o(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function n(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,a)}return t}function r(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){o(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,a,o=function(A,e){if(null==A)return{};var t,a,o={},n=Object.keys(A);for(a=0;a<n.length;a++)t=n[a],e.indexOf(t)>=0||(o[t]=A[t]);return o}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(a=0;a<n.length;a++)t=n[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(o[t]=A[t])}return o}var l=a.createContext({}),s=function(A){var e=a.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):r(r({},e),A)),t},c=function(A){var e=s(A.components);return a.createElement(l.Provider,{value:e},A.children)},m={inlineCode:"code",wrapper:function(A){var e=A.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(A,e){var t=A.components,o=A.mdxType,n=A.originalType,l=A.parentName,c=i(A,["components","mdxType","originalType","parentName"]),p=s(t),f=o,h=p["".concat(l,".").concat(f)]||p[f]||m[f]||n;return t?a.createElement(h,r(r({ref:e},c),{},{components:t})):a.createElement(h,r({ref:e},c))}));function f(A,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof A||o){var n=t.length,r=new Array(n);r[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=A,i.mdxType="string"==typeof A?A:o,r[1]=i;for(var s=2;s<n;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9662:function(A,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=t(7462),o=t(3366),n=(t(7294),t(3905)),r=["components"],i={id:"p1s-shackles-of-time",title:"Shackles of Time",description:"How to handle the Shackles of Time mechanic",sidebar_position:6,slug:"/pandaemonium-asphodelos/the-first-circle/shackles-of-time"},l="Shackles of Time",s={unversionedId:"pandaemonium-asphodelos/the-first-circle/p1s-shackles-of-time",id:"pandaemonium-asphodelos/the-first-circle/p1s-shackles-of-time",title:"Shackles of Time",description:"How to handle the Shackles of Time mechanic",source:"@site/docs/pandaemonium-asphodelos/the-first-circle/shackles-of-time.md",sourceDirName:"pandaemonium-asphodelos/the-first-circle",slug:"/pandaemonium-asphodelos/the-first-circle/shackles-of-time",permalink:"/its-just-like-normal-mode/pandaemonium-asphodelos/the-first-circle/shackles-of-time",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"p1s-shackles-of-time",title:"Shackles of Time",description:"How to handle the Shackles of Time mechanic",sidebar_position:6,slug:"/pandaemonium-asphodelos/the-first-circle/shackles-of-time"},sidebar:"p1sSidebar",previous:{title:"Pitiless Flail of Grace/Purgation",permalink:"/its-just-like-normal-mode/pandaemonium-asphodelos/the-first-circle/pitiless-flail"},next:{title:"Fourfold Shackles",permalink:"/its-just-like-normal-mode/pandaemonium-asphodelos/the-first-circle/fourfold-shackles"}},c=[{value:"Example Video",id:"example-video",children:[],level:2}],m={toc:c};function p(A){var e=A.components,i=(0,o.Z)(A,r);return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"shackles-of-time"},"Shackles of Time"),(0,n.kt)("p",null,"Shackles of Time will place the ",(0,n.kt)("img",{alt:"Shackles of Time",src:t(2092).Z}),(0,n.kt)("strong",{parentName:"p"},"Shackles of Time")," debuff on a random party member.  When the timer on the debuff expires, all tiles that have the same color as the one that party member is standing on will explode."),(0,n.kt)("p",null,"To handle this for our group, the party member that receives the debuff will always move to a red tile and the rest of the party will move to a green tile."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"I choose to have the party member with the debuff go to a red tile because generally red = bad and green = good. Either way, whatever color you choose for your group, just be sure it's consistant for you group that they go to that color every time."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Shackles of Time Step One",src:t(931).Z})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Shackles of Time Step Two",src:t(4368).Z})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Shackles of Time Step Three",src:t(3557).Z})),(0,n.kt)("h2",{id:"example-video"},"Example Video"),(0,n.kt)("p",null,"The following clip shows our static handling this mechanic."),(0,n.kt)("iframe",{src:"https://player.twitch.tv/?video=1271932711&parent=localhost&parent=manbeardgames.com&autoplay=false",frameBorder:"0",allowFullScreen:!0,scrolling:"no",height:"378",width:"620"}))}p.isMDXComponent=!0},2092:function(A,e){e.Z="data:image/webp;base64,UklGRqwFAABXRUJQVlA4WAoAAAAwAAAAFwAAHwAASUNDUKACAAAAAAKgbGNtcwQwAABtbnRyUkdCIFhZWiAH5gABABUAFQAPAA5hY3NwTVNGVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1kZXNjAAABIAAAAEBjcHJ0AAABYAAAADZ3dHB0AAABmAAAABRjaGFkAAABrAAAACxyWFlaAAAB2AAAABRiWFlaAAAB7AAAABRnWFlaAAACAAAAABRyVFJDAAACFAAAACBnVFJDAAACFAAAACBiVFJDAAACFAAAACBjaHJtAAACNAAAACRkbW5kAAACWAAAACRkbWRkAAACfAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACQAAAAcAEcASQBNAFAAIABiAHUAaQBsAHQALQBpAG4AIABzAFIARwBCbWx1YwAAAAAAAAABAAAADGVuVVMAAAAaAAAAHABQAHUAYgBsAGkAYwAgAEQAbwBtAGEAaQBuAABYWVogAAAAAAAA9tYAAQAAAADTLXNmMzIAAAAAAAEMQgAABd7///MlAAAHkwAA/ZD///uh///9ogAAA9wAAMBuWFlaIAAAAAAAAG+gAAA49QAAA5BYWVogAAAAAAAAJJ8AAA+EAAC2xFhZWiAAAAAAAABilwAAt4cAABjZcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltjaHJtAAAAAAADAAAAAKPXAABUfAAATM0AAJmaAAAmZwAAD1xtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAEcASQBNAFBtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJBTFBIWwAAAAFwE0mSIzWTItI8hsaxODhHYRksgfUHxAlLixdmREyAPiCOw0bCbTk+NotcTm14PGd0nLT80XzSaOo5BVHOGJBE1CMl0CrR9tRA29DlWnag3bjPccze6DDYoG0AVlA4IIICAACwDgCdASoYACAAPjEUiEKiISEUBqggAwS2AFSOBrFA4AG2AuwDnwvYl/cD0ublnzvvgr15yXz3f8kNEz/XMc9/nO8CjadSl/qvTxzWfN3+7/s3wB/yD+b/5H8wP712gHsgfqAd+dSxPl9+J5rUSvcnEGxuL2cD3hejUE7H90AA/v7Na+0ZaKsmJlOao//3B6VLZIzsaGBA1Chf/3/FwBMFrFPtPpEKbEHyn+jcRiy9trdN4SP6VYaVvUb2QaHf7vwpH/3QsFS16vSDniXfxEE6JGS0s+TY45fjwTf9df73fKPCvbm8QQuB/ph0uex0e+KxP8/z1VC/h1mpElyMXF5Ubyb/yakpZIk9WHx+fpi3eLbloy2UNhKUJ3oQkR/9g24dKh9jnoUqEpZL1n8DqgNslvQ2GKC/SFN+Z0eielsImJ7vg5+be5zFPAP51YCB32zgni3yCH/qj0cb1zrLZ4mj/GoH0yKbFhbsl83vbYdffrPIUhmtD6dCq7m1/PSrYhMvhf5UZvfBU2V+cgXKwg0tGWWsN9LnCZd/QlhvxzB7tPLWhxet2KlZDV1uh/lrs+GJH+IUtk6UCzX+K7d1D7k7lm46c2a14iBmFy8z/lx8e7bMuFinBoeEbu9V5fZdrJAekyQPIQpZB4+MvuCu6zb3X+dkWWtqAUkX5c5OJs/VV/SKM0VkFOHh7r/97fP7j5+h761nGuDB1jrdHf59ortAIoueMUgbMD01IgMAh+X/+7BM3rrXHXrTgsDD6/Nx+YMS/FNn44zipojOxCZ2f3RLICdfc9Dq8kBNPHFBvOrcO3Jfn4eXTJ8XsgWUtSZ/H4sB03+/FKI3mGinXo/DWzHDqAA="},931:function(A,e,t){e.Z=t.p+"assets/images/shackles-of-time-step-one-b8fac1af1e11ce8afc8ebe3487bac96c.webp"},3557:function(A,e,t){e.Z=t.p+"assets/images/shackles-of-time-step-three-c9b337d38f80bcd9d0ad04613515702e.webp"},4368:function(A,e,t){e.Z=t.p+"assets/images/shackles-of-time-step-two-884077cee7ba95230046ea5a8c06d15b.webp"}}]);