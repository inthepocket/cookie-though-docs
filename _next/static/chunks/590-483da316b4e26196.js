(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[590],{8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],u=!0,a=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var i,u=(i=t(7294))&&i.__esModule?i:{default:i},a=t(6273),c=t(387),f=t(7190);var l={};function s(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=c.useRouter(),i=u.default.useMemo((function(){var n=o(a.resolveHref(r,e.href,!0),2),t=n[0],i=n[1];return{href:t,as:e.as?a.resolveHref(r,e.as):i||t}}),[r,e.href,e.as]),d=i.href,p=i.as,v=e.children,h=e.replace,y=e.shallow,m=e.scroll,w=e.locale;"string"===typeof v&&(v=u.default.createElement("a",null,v));var g=(n=u.default.Children.only(v))&&"object"===typeof n&&n.ref,b=o(f.useIntersection({rootMargin:"200px"}),2),E=b[0],L=b[1],S=u.default.useCallback((function(e){E(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,E]);u.default.useEffect((function(){var e=L&&t&&a.isLocalURL(d),n="undefined"!==typeof w?w:r&&r.locale,o=l[d+"%"+p+(n?"%"+n:"")];e&&!o&&s(r,d,p,{locale:n})}),[p,d,L,w,t,r]);var A={ref:S,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,u,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),n[o?"replace":"push"](t,r,{shallow:i,locale:c,scroll:u}))}(e,r,d,p,h,y,m,w)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),a.isLocalURL(d)&&s(r,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var j="undefined"!==typeof w?w:r&&r.locale,M=r&&r.isLocaleDomain&&a.getDomainLocale(p,j,r&&r.locales,r&&r.domainLocales);A.href=M||a.addBasePath(a.addLocale(p,j,r&&r.defaultLocale))}return u.default.cloneElement(n,A)};n.default=d},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],u=!0,a=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!a,l=i.useRef(),s=o(i.useState(!1),2),d=s[0],p=s[1],v=o(i.useState(n?n.current:null),2),h=v[0],y=v[1],m=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||d||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=f.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=c.get(r):(n=c.get(t),f.push(t));if(n)return n;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(t,n={id:t,observer:i,elements:o}),n}(t),o=r.id,i=r.observer,u=r.elements;return u.set(e,n),i.observe(e),function(){if(u.delete(e),i.unobserve(e),0===u.size){i.disconnect(),c.delete(o);var n=f.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&f.splice(n,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:t}))}),[r,h,t,d]);return i.useEffect((function(){if(!a&&!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){n&&y(n.current)}),[n]),[m,d]};var i=t(7294),u=t(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map,f=[]},1664:function(e,n,t){e.exports=t(8418)},1163:function(e,n,t){e.exports=t(387)},7053:function(e,n,t){"use strict";var r=t(7294),o=t(6362);n.Z=function(e){return void 0===e&&(e={laptopL:1440,laptop:1024,tablet:768}),function(){var n=(0,r.useState)(o.jU?window.innerWidth:0),t=n[0],i=n[1];(0,r.useEffect)((function(){var e=function(){i(window.innerWidth)};return e(),(0,o.on)(window,"resize",e),function(){(0,o.S1)(window,"resize",e)}}));var u=(0,r.useMemo)((function(){return Object.entries(e).sort((function(e,n){return e[1]>=n[1]?1:-1}))}),[e]),a=u.reduce((function(e,n){var r=n[0],o=n[1];return t>=o?r:e}),u[0][0]);return a}}},6362:function(e,n,t){"use strict";t.d(n,{on:function(){return r},S1:function(){return o},jU:function(){return i}});function r(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];e&&e.addEventListener&&e.addEventListener.apply(e,n)}function o(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];e&&e.removeEventListener&&e.removeEventListener.apply(e,n)}var i="undefined"!==typeof window},2977:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(7294),o=function(e){(0,r.useEffect)(e,[])},i=function(e){var n=(0,r.useRef)(e);n.current=e,o((function(){return function(){return n.current()}}))},u=function(e){var n=(0,r.useRef)(0),t=(0,r.useState)(e),o=t[0],u=t[1],a=(0,r.useCallback)((function(e){cancelAnimationFrame(n.current),n.current=requestAnimationFrame((function(){u(e)}))}),[]);return i((function(){cancelAnimationFrame(n.current)})),[o,a]},a=t(6362),c=function(e,n){void 0===e&&(e=1/0),void 0===n&&(n=1/0);var t=u({width:a.jU?window.innerWidth:e,height:a.jU?window.innerHeight:n}),o=t[0],i=t[1];return(0,r.useEffect)((function(){if(a.jU){var e=function(){i({width:window.innerWidth,height:window.innerHeight})};return(0,a.on)(window,"resize",e),function(){(0,a.S1)(window,"resize",e)}}}),[]),o}}}]);