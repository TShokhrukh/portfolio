(()=>{"use strict";var e,r,t,o,n,a={},i={};function l(e){var r=i[e];if(void 0!==r)return r.exports;var t=i[e]={exports:{}};return a[e](t,t.exports,l),t.exports}l.m=a,e=[],l.O=(r,t,o,n)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){for(var[t,o,n]=e[c],i=!0,u=0;u<t.length;u++)(!1&n||a>=n)&&Object.keys(l.O).every((e=>l.O[e](t[u])))?t.splice(u--,1):(i=!1,n<a&&(a=n));if(i){e.splice(c--,1);var f=o();void 0!==f&&(r=f)}}return r}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,o,n]},l.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return l.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);l.r(n);var a={};r=r||[null,t({}),t([]),t(t)];for(var i=2&o&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,l.d(n,a),n},l.d=(e,r)=>{for(var t in r)l.o(r,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((r,t)=>(l.f[t](e,r),r)),[])),l.u=e=>"js/"+{2081:"./lang/en-json",4210:"./lang/ru-json"}[e]+"."+{2081:"fad06571c69b0b673607",4210:"5b9b40aadba12e684076"}[e]+".chunk.js",l.miniCssF=e=>{},l.h=()=>"71f49e58834faaa05d62",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},n="portfolio:",l.l=(e,r,t,a)=>{if(o[e])o[e].push(r);else{var i,u;if(void 0!==t)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var s=f[c];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+t){i=s;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",n+t),i.src=e),o[e]=[r];var p=(r,t)=>{i.onerror=i.onload=null,clearTimeout(d);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(t))),r)return r(t)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var r=l.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!e;)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e+"../"})(),(()=>{var e={7252:0,6559:0,3688:0,5028:0,2515:0,2269:0,3870:0,5032:0,4507:0,7401:0,6284:0,7625:0,7574:0,2268:0,1364:0,2501:0,492:0,9123:0,3217:0,7531:0,1915:0,2141:0,9990:0,6667:0,3940:0,5156:0,9678:0,77:0,5937:0,6633:0,1859:0,6001:0,9661:0,2511:0,7988:0,2977:0,9655:0,6262:0,5030:0,6074:0,9823:0,5003:0,5683:0,3486:0,7012:0,2437:0,128:0,1811:0,7354:0,1663:0,306:0,4313:0,5089:0,6537:0,5385:0,6772:0,5849:0,8207:0,6004:0,8891:0,9353:0,9169:0,2958:0,2858:0,8153:0,3007:0,5702:0,9983:0,1074:0};l.f.j=(r,t)=>{var o=l.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(179|2081|4210|6870|8151|8592)$/.test(r)){var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=l.p+l.u(r),i=new Error;l.l(a,(t=>{if(l.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}else e[r]=0},l.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,[a,i,u]=t,f=0;if(a.some((r=>0!==e[r]))){for(o in i)l.o(i,o)&&(l.m[o]=i[o]);if(u)var c=u(l)}for(r&&r(t);f<a.length;f++)n=a[f],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(c)},t=self.webpackChunkportfolio=self.webpackChunkportfolio||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();