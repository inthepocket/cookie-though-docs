(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1803)}])},9749:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(c){s=!0,i=c}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,s=void 0!==r&&r,c=e.priority,l=void 0!==c&&c,p=e.loading,m=e.lazyRoot,j=void 0===m?null:m,E=e.lazyBoundary,C=void 0===E?"200px":E,z=e.className,I=e.quality,L=e.width,N=e.height,P=e.style,R=e.objectFit,M=e.objectPosition,F=e.onLoadingComplete,B=e.placeholder,T=void 0===B?"empty":B,U=e.blurDataURL,H=v(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),q=u.useContext(g.ImageConfigContext),W=u.useMemo((function(){var e=y||q||h.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return b({},e,{allSizes:t,deviceSizes:n})}),[q]),D=H,V=n?"responsive":"intrinsic";"layout"in D&&(D.layout&&(V=D.layout),delete D.layout);var Z=k;if("loader"in D){if(D.loader){var Y=D.loader;Z=function(e){e.config;var t=v(e,["config"]);return Y(t)}}delete D.loader}var G="";if(function(e){return"object"===typeof e&&(A(e)||function(e){return void 0!==e.src}(e))}(t)){var J=A(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(U=U||J.blurDataURL,G=J.src,(!V||"fill"!==V)&&(N=N||J.height,L=L||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:G;var Q=O(L),K=O(N),X=O(I),$=!l&&("lazy"===p||"undefined"===typeof p);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,$=!1);x.has(t)&&($=!1);var ee,te=a(u.useState(!1),2),ne=te[0],re=te[1],ie=a(f.useIntersection({rootRef:j,rootMargin:C,disabled:!$}),3),ae=ie[0],oe=ie[1],se=ie[2],ce=!$||oe,le={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,he={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:M};0;0;var fe=Object.assign({},P,"raw"===V?{}:he),ge="blur"!==T||ne?{}:{filter:"blur(20px)",backgroundSize:R||"cover",backgroundImage:'url("'.concat(U,'")'),backgroundPosition:M||"0% 0%"};if("fill"===V)le.display="block",le.position="absolute",le.top=0,le.left=0,le.bottom=0,le.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof K){var pe=K/Q,me=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===V?(le.display="block",le.position="relative",de=!0,ue.paddingTop=me):"intrinsic"===V?(le.display="inline-block",le.position="relative",le.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(K,"%27/%3e")):"fixed"===V&&(le.display="inline-block",le.position="relative",le.width=Q,le.height=K)}else 0;var be={src:w,srcSet:void 0,sizes:void 0};ce&&(be=_({config:W,src:t,unoptimized:s,layout:V,width:Q,quality:X,sizes:n,loader:Z}));var ve=t;0;var ye,xe="imagesrcset",we="imagesizes";xe="imageSrcSet",we="imageSizes";var je=(i(ye={},xe,be.srcSet),i(ye,we,be.sizes),ye),Ae=u.default.useLayoutEffect,_e=u.useRef(F),Oe=u.useRef(t);u.useEffect((function(){_e.current=F}),[F]),Ae((function(){Oe.current!==t&&(se(),Oe.current=t)}),[se,t]);var ke=b({isLazy:$,imgAttributes:be,heightInt:K,widthInt:Q,qualityInt:X,layout:V,className:z,imgStyle:fe,blurStyle:ge,loading:p,config:W,unoptimized:s,placeholder:T,loader:Z,srcString:ve,onLoadingCompleteRef:_e,setBlurComplete:re,setIntersection:ae,isVisible:ce},D);return u.default.createElement(u.default.Fragment,null,"raw"===V?u.default.createElement(S,Object.assign({},ke)):u.default.createElement("span",{style:le},de?u.default.createElement("span",{style:ue},ee?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,u.default.createElement(S,Object.assign({},ke))),l?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+be.src+be.srcSet+be.sizes,rel:"preload",as:"image",href:be.srcSet?void 0:be.src},je))):null)};var c,l,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),d=(c=n(3121))&&c.__esModule?c:{default:c},h=n(139),f=n(9246),g=n(8730),p=(n(670),n(2700));function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){m(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}function v(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}l={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1};var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1},x=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,a=new URL("".concat(t.path).concat(C(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(C(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(C(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function A(e){return void 0!==e.default}function _(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,s=e.quality,c=e.sizes,l=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var s,c=/(^|\s)(1?\d?\d)vw/g,l=[];s=c.exec(r);s)l.push(parseInt(s[2]));if(l.length){var u,d=.01*(u=Math).min.apply(u,o(l));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,c),d=u.widths,h=u.kind,f=d.length-1;return{sizes:c||"w"!==h?c:"100vw",srcSet:d.map((function(e,r){return"".concat(l({config:t,src:n,quality:s,width:e})," ").concat("w"===h?e:r+1).concat(h)})).join(", "),src:l({config:t,src:n,quality:s,width:d[f]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=j.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(h.VALID_LOADERS.join(", "),". Received: ").concat(n))}function E(e,t,n,r,i,a){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(x.add(t),"blur"===r&&a(!0),null===i||void 0===i?void 0:i.current)){var n=e.naturalWidth,o=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:o})}})))}var S=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,i=e.qualityInt,a=e.layout,o=e.className,s=e.imgStyle,c=e.blurStyle,l=e.isLazy,d=e.placeholder,h=e.loading,f=e.srcString,g=e.config,p=e.unoptimized,m=e.loader,y=e.onLoadingCompleteRef,x=e.setBlurComplete,w=e.setIntersection,j=e.onLoad,A=e.onError,O=(e.isVisible,v(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},O,t,"raw"===a?{height:n,width:r}:{},{decoding:"async","data-nimg":a,className:o,style:b({},s,c),ref:u.useCallback((function(e){w(e),(null===e||void 0===e?void 0:e.complete)&&E(e,f,0,d,y,x)}),[w,f,a,d,y,x]),onLoad:function(e){E(e.currentTarget,f,0,d,y,x),j&&j(e)},onError:function(e){"blur"===d&&x(!0),A&&A(e)}})),(l||"blur"===d)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},O,_({config:g,src:f,unoptimized:p,layout:a,width:r,quality:i,sizes:t.sizes,loader:m}),"raw"===a?{height:n,width:r}:{},{decoding:"async","data-nimg":a,style:s,className:o,loading:h||"lazy"}))))};function C(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1261:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var r,i,a=n(5893),o=n(7294);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var c,l=function(e){return o.createElement("svg",s({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.949 16.492a7.02 7.02 0 0 1-3.148.739c-3.823 0-6.922-3.031-6.922-6.77 0-1.573.549-3.022 1.47-4.172a4.256 4.256 0 0 1-1.47-3.212c0-1.027.367-1.97.98-2.71A16.78 16.78 0 0 0 16.361 0C7.325 0 0 7.163 0 16s7.325 16 16.361 16c7.357 0 13.58-4.749 15.639-11.283-1.771-.558-3.053-2.183-3.053-4.101 0-.042 0-.083.002-.124Z",fill:"url(#logo_svg__a)"})),i||(i=o.createElement("defs",null,o.createElement("linearGradient",{id:"logo_svg__a",x1:-5.073,y1:-21.846,x2:16.324,y2:55.929,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#0086E7"}),o.createElement("stop",{offset:1,stopColor:"#0500FF"})))))},u=n(6487),d=n(6873),h=n.n(d),f=function(e){var t=e.isSidebarOpen,n=e.setIsSidebarOpen;return(0,a.jsx)("button",{"aria-controls":u.J,"aria-expanded":t,"aria-label":"Toggle sidebar",className:h().hamburger,onClick:function(){return n((function(e){return!e}))},children:(0,a.jsxs)("i",{className:h().wrapper,children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]})})};function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var p,m=function(e){return o.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),c||(c=o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z"})))};function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}var v=function(e){return o.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),p||(p=o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"})))},y=n(2010),x=n(8900),w=n.n(x);function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}var _=function(e){var t=(0,y.F)(),n=t.theme,r=t.setTheme,i="light"===n;return(0,a.jsx)("button",{"aria-label":"Switch theme",className:w().themeToggle,value:n,onClick:function(){return r(i?"dark":"light")},children:i?(0,a.jsx)(v,A({role:"presentation"},e)):(0,a.jsx)(m,A({role:"presentation"},e))})},O=n(1664),k=n.n(O),E=n(9316),S=n.n(E);function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){C(e,t,n[t])}))}return e}var I=function(e){var t=e.variant,n=e.children;return"landing"===t?(0,a.jsx)("div",{className:S().landingHeader,children:n}):(0,a.jsx)(a.Fragment,{children:n})},L=function(e){return(0,a.jsx)(I,{variant:e.variant,children:(0,a.jsxs)("header",{className:"".concat(S().header),children:[(0,a.jsx)(k(),{href:"/",children:(0,a.jsxs)("a",{className:S().branding,children:[(0,a.jsx)("div",{className:S().logo,children:(0,a.jsx)(l,{role:"presentation"})}),"landing"===e.variant&&(0,a.jsx)("span",{children:"cookie though"})]})}),(0,a.jsxs)("div",{className:S().siteNavigation,children:["landing"===e.variant&&(0,a.jsx)("nav",{children:e.children}),(0,a.jsx)(_,z({},"landing"===e.variant&&{width:24,height:24})),"documentation"===e.variant&&(0,a.jsx)(f,{isSidebarOpen:e.isSidebarOpen,setIsSidebarOpen:e.setIsSidebarOpen})]})]})})}},6487:function(e,t,n){"use strict";n.d(t,{Z:function(){return m},J:function(){return g}});var r=n(5893),i=n(1664),a=n.n(i),o=n(1163),s=n(7294),c=n(7053),l=n(2977),u=n(1261),d=[{label:"Overview",routes:[{label:"Introduction",href:"/docs/introduction"},{label:"Tutorials",href:"/docs/tutorials"},{label:"API",href:"/docs/api"},{label:"Frequently asked questions",href:"/docs/faq"},{label:"TypeScript",href:"/docs/typescript"}]},{label:"Getting started",routes:[{label:"Installation",href:"/docs/installation"},{label:"Configuration",href:"/docs/configuration"},{label:"Styling",href:"/docs/styling"}]},{label:"Meta",routes:[{label:"GitHub",href:"https://github.com/inthepocket/cookie-though",isExternal:!0},{label:"In The Pocket",href:"https://www.inthepocket.com/",isExternal:!0}]}],h=n(2520),f=n.n(h),g="primary-navigation",p=(0,c.Z)({desktop:900,mobile:0}),m=function(){var e=(0,l.Z)().height,t=(0,o.useRouter)().route,n=p(),i=(0,s.useState)(!1),c=i[0],h=i[1],m=(0,s.useState)(!1),b=m[0],v=m[1];return(0,s.useLayoutEffect)((function(){"mobile"===n&&v(!0)}),[n]),(0,s.useEffect)((function(){b&&setTimeout((function(){return v(!1)}),300)}),[b]),(0,s.useEffect)((function(){c?(document.documentElement.style.overflow="hidden",document.documentElement.style.height="".concat(e,"px"),document.body.style.overflow="hidden",document.body.style.height="".concat(e,"px")):(document.documentElement.removeAttribute("style"),document.body.removeAttribute("style"))}),[e,c]),(0,r.jsxs)("div",{className:"".concat(f().sidebar," ").concat(c?f().open:""),children:[(0,r.jsx)(u.Z,{isSidebarOpen:c,setIsSidebarOpen:h,variant:"documentation"}),(0,r.jsx)("nav",{id:g,className:b?f().becameMobile:"",children:d.map((function(e,n){var i=e.label,o=e.routes;return(0,r.jsxs)("ul",{"aria-labelledby":"nav-section-".concat(n),children:[(0,r.jsx)("h4",{id:i,children:i}),o.map((function(e,n){var i=e.label,o=e.href,s=e.isExternal;return(0,r.jsx)("li",{children:s?(0,r.jsx)("a",{href:o,className:t===o?f().active:void 0,target:"_blank",rel:"noreferrer noopener",children:i}):(0,r.jsx)(a(),{href:o,children:(0,r.jsx)("a",{"aria-current":t===o?"page":void 0,children:i})})},n)}))]},n)}))})]})}},1803:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return pe}});var r,i,a,o=n(5893),s=n(7294);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var l,u=function(e){return s.createElement("svg",c({viewBox:"0 0 72 72",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=s.createElement("path",{d:"M38.143 21.857a2.143 2.143 0 1 1-4.286 0 2.143 2.143 0 0 1 4.286 0Z",fill:"#8424FF",stroke:"#8424FF",strokeWidth:6})),i||(i=s.createElement("path",{d:"M39.214 38.571a10.6 10.6 0 0 0 .857 4.175l4.773 11.137a1.929 1.929 0 1 1-3.545 1.52l-4.773-11.137a13.709 13.709 0 0 1-.108-.26.464.464 0 0 0-.428-.292.462.462 0 0 0-.433.303c-.099.268-.205.533-.318.796l-4.538 10.59a1.929 1.929 0 0 1-3.545-1.52l4.538-10.59c.72-1.68 1.092-3.489 1.092-5.317v-3.443a28.132 28.132 0 0 1-12.6-4.65 1.929 1.929 0 0 1 2.159-3.196A24.307 24.307 0 0 0 36 30.857c5.061 0 9.758-1.537 13.655-4.17a1.929 1.929 0 1 1 2.159 3.197 28.132 28.132 0 0 1-12.6 4.65v4.037Z",fill:"#8424FF"})),a||(a=s.createElement("circle",{cx:36,cy:36,r:28,stroke:"#8424FF",strokeWidth:6})))};function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var h,f=function(e){return s.createElement("svg",d({viewBox:"0 0 72 72",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),l||(l=s.createElement("path",{d:"M36 66s24-12 24-30V15L36 6l-24 9v21c0 18 24 30 24 30Z",stroke:"#8424FF",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round"})))};function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var p=function(e){return s.createElement("svg",g({viewBox:"0 0 72 72",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),h||(h=s.createElement("path",{d:"M39 6 9 42h27l-3 24 30-36H36l3-24Z",stroke:"#8424FF",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round"})))},m=n(9008),b=n.n(m),v={src:"/cookie-though-docs//_next/static/media/banner.c1779fd5.png",height:704,width:494,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAnUlEQVR42iWMSwqEMBBEc/8bzBXmGG5VXAi6GxB3A/5jOp2uTk9kFg+qeFQ5ovReV5qui0fAxtKnZbnejoj7bfd2nsGIonkf7L5j7yJrs++w4wBCUHifLDIax4y23FiMooCqCIw5tS7GRyRLCcr8IFZon0VNJCaiUrL8RaqLyMN5sm3bbSEkA9RyzoObZ7yq6lt33acCpFLVOuf8+gEQ37UcA4LRYAAAAABJRU5ErkJggg=="},y={src:"/cookie-though-docs//_next/static/media/feature-lightweight.297e48f7.png",height:302,width:454,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAfUlEQVR42l3DuwqDMBgG0Lz/MzgGn8ItOLpLJwWtSJE2KEn+m18ze+A4kbtLyfo6EN01gioCgL7u3HkWbFvEun4RY0IpAiKBiMDM4FSJmS8GlEWIc0515pQyqyq7ZSEMw4UQXpimD57ccUgzz9SO49vv+88D8Krmzaw1s+YPxrOV4d02mfoAAAAASUVORK5CYII="},x=n(6113),w=n(2609),j=n.n(w),A=(0,s.createContext)({numberOfFeatures:0,currentFeature:0}),_=function(e){var t=e.numberOfFeatures,n=e.children,r=(0,s.useContext)(x.$).scrollY,i=(0,s.useRef)(null),a=i.current,c=0;if(a){var l="".concat(100*t,"vh"),u="".concat(64*t,"px");a.style.height="calc(".concat(l," - ").concat(u,")")}if(a){var d=a.clientHeight,h=a.offsetTop,f=window.innerHeight,g=f/2;c=Math.min(d+g,Math.max(-f,r-h)+g)/d*t}return(0,o.jsx)(A.Provider,{value:{numberOfFeatures:t,currentFeature:c},children:(0,o.jsx)("ul",{ref:i,className:j().features,children:(0,o.jsx)("div",{className:j().content,children:n})})})},O=n(5675),k=n.n(O),E=n(6580),S=n.n(E),C=function(e){var t=e.src,n=(0,s.useContext)(B),r=Math.max(-50,50*-(n-.5));return(0,o.jsx)("div",{className:S().background,style:{transform:"translateY(".concat(r,"px)")},children:(0,o.jsx)("div",{className:S().image,children:(0,o.jsx)(k(),{src:t,alt:"",layout:"responsive",loader:function(e){return e.src}})})})},z=n(5061),I=n.n(z),L=function(e){var t=e.children,n=(0,s.useContext)(B),r=Math.max(0,50-3*n*50);return.85<n&&(r=Math.max(-50,2*-(n-.85)*50)),(0,o.jsx)("div",{className:I().content,style:{transform:"translateY(".concat(r,"px)")},children:t})},N=n(42),P=n.n(N),R=n(1720),M=n.n(R),F=function(e){var t=e.icon,n=e.label;return(0,o.jsxs)("h2",{className:M().title,children:[t,n]})},B=(0,s.createContext)(0),T=function(e){var t=e.feature,n=e.children,r=(0,s.useContext)(A),i=r.currentFeature,a=r.numberOfFeatures,c=Math.max(0,i-t),l=Math.min(1,Math.max(0,4*c));return.85<c&&t<a-1&&(l=Math.max(0,4*(1-c))),(0,o.jsx)(B.Provider,{value:c,children:(0,o.jsxs)("li",{className:P().feature,children:[(0,o.jsx)("div",{className:P().gradients}),(0,o.jsx)("div",{className:P().content,style:{pointerEvents:c>=0||c>=1?"none":void 0,opacity:l},children:n})]})})};T.Content=L,T.Title=F,T.Background=C;var U,H,q=T,W={src:"/cookie-though-docs//_next/static/media/card.d3b6b4e3.png",height:656,width:1026,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAl0lEQVR42k2NMQ7CMBAE/Uo+Q80DEB/gARQUFDShgSYFVIg0oYkUGSJFCY7PPtu5O0zHVCOtRqtipK21qQOY74h8DYHPInI0xh20HlbKOby9u4+07SDT5AUxCRHLOIJoPT5VCKHyHnI0Z8XovUsA8HPJnFTTBFOWRorikSsn/xDRXuXvRd/HZV2/NtbiToQveaiYORHR+gsQR5SBH4sPLgAAAABJRU5ErkJggg=="};function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}var V,Z,Y=function(e){return s.createElement("svg",D({viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),U||(U=s.createElement("path",{d:"M23.333 10.5h-10.5a2.333 2.333 0 0 0-2.333 2.333v10.5a2.333 2.333 0 0 0 2.333 2.334h10.5a2.333 2.333 0 0 0 2.334-2.334v-10.5a2.333 2.333 0 0 0-2.334-2.333Z",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),H||(H=s.createElement("path",{d:"M5.833 17.5H4.667a2.333 2.333 0 0 1-2.334-2.333v-10.5a2.333 2.333 0 0 1 2.334-2.334h10.5A2.333 2.333 0 0 1 17.5 4.667v1.166",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))},G=n(6495),J=n.n(G),Q=function(e){var t=e.text;return(0,o.jsxs)("div",{className:J().copyToClipboard,children:[t,(0,o.jsx)("button",{children:(0,o.jsx)(Y,{})})]})},K=n(1664),X=n.n(K);function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}var ee,te=function(e){return s.createElement("svg",$({viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),V||(V=s.createElement("path",{d:"M5.833 13h-1v2h1v-2ZM21 15h1v-2h-1v2ZM5.833 15H21v-2H5.833v2Z",fill:"currentColor"})),Z||(Z=s.createElement("path",{d:"M14.707 5.126 14 4.42l-1.414 1.414.707.707 1.414-1.414ZM22.167 14l.707.707.707-.707-.707-.707-.707.707Zm-8.874 7.46-.707.707L14 23.58l.707-.707-1.414-1.415Zm0-14.92 8.167 8.167 1.414-1.414-8.167-8.167-1.414 1.414Zm8.167 6.753-8.167 8.166 1.414 1.415 8.167-8.167-1.414-1.414Z",fill:"currentColor"})))},ne=n(6498),re=n.n(ne),ie=function(e){var t=e.type,n=e.label,r=e.href;return"a"===t?(0,o.jsx)(X(),{href:r,children:(0,o.jsxs)("a",{className:re().cta,children:[(0,o.jsx)("span",{children:n}),(0,o.jsx)(te,{})]})}):(0,o.jsxs)("button",{className:re().cta,children:[(0,o.jsx)("span",{children:n}),(0,o.jsx)(te,{})]})},ae=n(6475),oe=n.n(ae),se=function(){return(0,o.jsxs)("div",{className:oe().wrapper,children:[(0,o.jsx)("div",{className:oe().gradients}),(0,o.jsxs)("div",{className:oe().hero,children:[(0,o.jsx)("div",{className:oe().teaserImage,children:(0,o.jsx)(k(),{src:W,alt:"cookie though",layout:"responsive",objectFit:"cover",loader:function(e){return e.src}})}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("h1",{className:oe().tagline,children:["User consent ",(0,o.jsx)("strong",{children:"made delicious"})]}),(0,o.jsx)("p",{children:"With Cookie Though you can ask users for consent in a GDPR compliant way, without sacrificing usability. And the best part? It's open source."}),(0,o.jsxs)("div",{className:oe().ctas,children:[(0,o.jsx)(ie,{type:"button",label:"See it in action"}),(0,o.jsx)(ie,{type:"a",href:"/",label:"Choose your flavor"})]}),(0,o.jsx)(Q,{text:"npm install cookie-though"})]})]})]})};function ce(){return ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ce.apply(this,arguments)}var le,ue=function(e){return s.createElement("svg",ce({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"book-open_svg__feather book-open_svg__feather-book-open"},e),ee||(ee=s.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})))};function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}var he=function(e){return s.createElement("svg",de({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"github_svg__feather github_svg__feather-github"},e),le||(le=s.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})))},fe=n(1261),ge=function(e){var t=e.children;return(0,o.jsxs)("div",{children:[(0,o.jsxs)(fe.Z,{variant:"landing",children:[(0,o.jsx)(X(),{href:"/docs/installation",children:(0,o.jsxs)("a",{children:[(0,o.jsx)(ue,{}),(0,o.jsx)("span",{children:"Docs"})]})}),(0,o.jsx)(X(),{href:"https://github.com/inthepocket/cookie-though",children:(0,o.jsxs)("a",{target:"_blank",rel:"noreferrer noopener",children:[(0,o.jsx)(he,{}),(0,o.jsx)("span",{children:"GitHub"})]})})]}),(0,o.jsx)("main",{children:t})]})},pe=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(b(),{children:[(0,o.jsx)("title",{children:"Cookie Though"}),(0,o.jsx)("meta",{name:"description",content:"Easy to use, minimal footprint application that manages cookie preferences. So delicious, you'll never need another library again."})]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)(se,{}),(0,o.jsxs)(_,{numberOfFeatures:3,children:[(0,o.jsxs)(q,{feature:0,children:[(0,o.jsxs)(q.Content,{children:[(0,o.jsx)(q.Title,{icon:(0,o.jsx)(p,{}),label:"Lightweight"}),(0,o.jsx)("p",{children:"Thanks to the use of Preact, Cookie Though is only 10Kb, which means users won't get a pop-up after they've already started interacting with the site."})]}),(0,o.jsx)(q.Background,{src:y})]}),(0,o.jsxs)(q,{feature:1,children:[(0,o.jsxs)(q.Content,{children:[(0,o.jsx)(q.Title,{icon:(0,o.jsx)(f,{}),label:"GDPR Compliant"}),(0,o.jsx)("p",{children:"With Cookie Though, you can easily request permission for the optional cookies. Your users won't have to worry about fuzzy descriptions."})]}),(0,o.jsx)(q.Background,{src:v})]}),(0,o.jsxs)(q,{feature:2,children:[(0,o.jsxs)(q.Content,{children:[(0,o.jsx)(q.Title,{icon:(0,o.jsx)(u,{}),label:"Accessible"}),(0,o.jsx)("p",{children:"Cookie though is build with accessibility in mind, it follows WAI-ARIA best practices and has been tested with real screen readers."})]}),(0,o.jsx)(q.Background,{src:v})]})]})]})]})}},6495:function(e){e.exports={copyToClipboard:"copyToClipboard_copyToClipboard__Pvgsr"}},6873:function(e){e.exports={hamburger:"hamburger_hamburger__UgBZ0",wrapper:"hamburger_wrapper__ib2VU"}},8900:function(e){e.exports={themeToggle:"themeToggle_themeToggle__JbbHu"}},6498:function(e){e.exports={cta:"cta_cta__c_Y7H"}},6580:function(e){e.exports={background:"background_background__7FJGk",image:"background_image__QSJC0"}},5061:function(e){e.exports={content:"content_content__1WjKP"}},1720:function(e){e.exports={title:"title_title__ye09i"}},42:function(e){e.exports={feature:"feature_feature__8_qay",content:"feature_content__M81jq",gradients:"feature_gradients__0dFdf"}},9316:function(e){e.exports={landingHeader:"header_landingHeader__hnUCJ",header:"header_header__sLUIP",branding:"header_branding__MHTC3",logo:"header_logo__YcsCp",siteNavigation:"header_siteNavigation__cLE2w",landing:"header_landing__In4sO"}},6475:function(e){e.exports={wrapper:"hero_wrapper__W_SxI",hero:"hero_hero__FHnQY",teaserImage:"hero_teaserImage__gaXVP",tagline:"hero_tagline__0FkXE",ctas:"hero_ctas__vQT5u",gradients:"hero_gradients__9_B_5"}},2520:function(e){e.exports={sidebar:"sidebar_sidebar__y1j2V",becameMobile:"sidebar_becameMobile__aeoqX",open:"sidebar_open__WHVLW"}},2609:function(e){e.exports={features:"features_features__EWSn0",content:"features_content__zY6rN"}},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[590,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);