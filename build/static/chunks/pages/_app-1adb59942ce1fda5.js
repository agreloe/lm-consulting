(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2784)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(6495).Z,r=n(2648).Z,i=n(1598).Z,l=n(7273).Z,a=i(n(7294)),s=r(n(2636)),c=n(7757),u=n(3735),d=n(3341);n(4210);var f=r(n(7746));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,n,r,i,l,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&l(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current(o({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}function v(e){let[t,n]=a.version.split("."),o=parseInt(t,10),r=parseInt(n,10);return o>18||18===o&&r>=3?{fetchPriority:e}:{fetchpriority:e}}let y=a.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:r,widthInt:i,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fetchPriority:p,fill:h,placeholder:g,loading:y,srcString:b,config:_,unoptimized:x,loader:w,onLoadRef:j,onLoadingCompleteRef:C,setBlurComplete:E,setShowAltText:S,onLoad:M,onError:k}=e,P=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return y=f?"lazy":y,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},P,v(p),{loading:y,width:i,height:r,decoding:"async","data-nimg":h?"fill":"1",className:c,style:o({},u,d)},n,{ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&m(e,b,g,j,C,E,x))},[b,g,j,C,E,k,x,t]),onLoad:e=>{let t=e.currentTarget;m(t,b,g,j,C,E,x)},onError:e=>{S(!0),"blur"===g&&E(!0),k&&k(e)}})))}),b=a.forwardRef((e,t)=>{let n,r;var i,{src:m,sizes:b,unoptimized:_=!1,priority:x=!1,loading:w,className:j,quality:C,width:E,height:S,fill:M,style:k,onLoad:P,onLoadingComplete:O,placeholder:L="empty",blurDataURL:R,fetchPriority:I,layout:z,objectFit:N,objectPosition:A,lazyBoundary:T,lazyRoot:D}=e,H=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=a.useContext(d.ImageConfigContext),F=a.useMemo(()=>{let e=p||B||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return o({},e,{allSizes:t,deviceSizes:n})},[B]),U=H,q=U.loader||f.default;delete U.loader;let W="__next_img_default"in q;if(W){if("custom"===F.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=q;q=t=>{let{config:n}=t,o=l(t,["config"]);return e(o)}}if(z){"fill"===z&&(M=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(k=o({},k,e));let t={responsive:"100vw",fill:"100vw"}[z];t&&!b&&(b=t)}let Z="",G=g(E),K=g(S);if("object"==typeof(i=m)&&(h(i)||void 0!==i.src)){let e=h(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,r=e.blurHeight,R=R||e.blurDataURL,Z=e.src,!M){if(G||K){if(G&&!K){let t=G/e.width;K=Math.round(e.height*t)}else if(!G&&K){let t=K/e.height;G=Math.round(e.width*t)}}else G=e.width,K=e.height}}let V=!x&&("lazy"===w||void 0===w);(!(m="string"==typeof m?m:Z)||m.startsWith("data:")||m.startsWith("blob:"))&&(_=!0,V=!1),F.unoptimized&&(_=!0),W&&m.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(_=!0),x&&(I="high");let[J,X]=a.useState(!1),[Y,$]=a.useState(!1),Q=g(C),ee=Object.assign(M?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:A}:{},Y?{}:{color:"transparent"},k),et="blur"===L&&R&&!J?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:G,heightInt:K,blurWidth:n,blurHeight:r,blurDataURL:R,objectFit:ee.objectFit}),'")')}:{},en=function(e){let{config:t,src:n,unoptimized:o,width:r,quality:i,sizes:l,loader:a}=e;if(o)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:o,allSizes:r}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(n);o)t.push(parseInt(o[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:o,kind:"w"};let i=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:i,kind:"x"}}(t,r,l),u=s.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:s.map((e,o)=>"".concat(a({config:t,src:n,quality:i,width:e})," ").concat("w"===c?e:o+1).concat(c)).join(", "),src:a({config:t,src:n,quality:i,width:s[u]})}}({config:F,src:m,unoptimized:_,width:G,quality:Q,sizes:b,loader:q}),eo=m,er=a.useRef(P);a.useEffect(()=>{er.current=P},[P]);let ei=a.useRef(O);a.useEffect(()=>{ei.current=O},[O]);let el=o({isLazy:V,imgAttributes:en,heightInt:K,widthInt:G,qualityInt:Q,className:j,imgStyle:ee,blurStyle:et,loading:w,config:F,fetchPriority:I,fill:M,unoptimized:_,placeholder:L,loader:q,srcString:eo,onLoadRef:er,onLoadingCompleteRef:ei,setBlurComplete:X,setShowAltText:$},U);return a.default.createElement(a.default.Fragment,null,a.default.createElement(y,Object.assign({},el,{ref:t})),x?a.default.createElement(s.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src,imageSrcSet:en.srcSet,imageSizes:en.sizes,crossOrigin:U.crossOrigin},v(I)))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,i=o(n(7294)),l=n(4532),a=n(3353),s=n(1410),c=n(9064),u=n(370),d=n(9955),f=n(4224),p=n(508),h=n(1516),g=n(4266);let m=new Set;function v(e,t,n,o,r){if(r||a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+r;if(m.has(i))return;m.add(i)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function y(e){return"string"==typeof e?e:s.formatUrl(e)}let b=i.default.forwardRef(function(e,t){let n,o;let{href:s,as:m,children:b,prefetch:_,passHref:x,replace:w,shallow:j,scroll:C,locale:E,onClick:S,onMouseEnter:M,onTouchStart:k,legacyBehavior:P=!1}=e,O=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,P&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));let L=!1!==_,R=i.default.useContext(d.RouterContext),I=i.default.useContext(f.AppRouterContext),z=null!=R?R:I,N=!R,{href:A,as:T}=i.default.useMemo(()=>{if(!R){let e=y(s);return{href:e,as:m?y(m):e}}let[e,t]=l.resolveHref(R,s,!0);return{href:e,as:m?l.resolveHref(R,m):t||e}},[R,s,m]),D=i.default.useRef(A),H=i.default.useRef(T);P&&(o=i.default.Children.only(n));let B=P?o&&"object"==typeof o&&o.ref:t,[F,U,q]=p.useIntersection({rootMargin:"200px"}),W=i.default.useCallback(e=>{(H.current!==T||D.current!==A)&&(q(),H.current=T,D.current=A),F(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[T,B,A,q,F]);i.default.useEffect(()=>{z&&U&&L&&v(z,A,T,{locale:E},N)},[T,A,U,E,L,null==R?void 0:R.locale,z,N]);let Z={ref:W,onClick(e){P||"function"!=typeof S||S(e),P&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,n,o,r,l,s,c,u,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:l,locale:c,scroll:s}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!d})};u?i.default.startTransition(h):h()}(e,z,A,T,w,j,C,E,N,L)},onMouseEnter(e){P||"function"!=typeof M||M(e),P&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),z&&(L||!N)&&v(z,A,T,{locale:E,priority:!0,bypassPrefetchedCheck:!0},N)},onTouchStart(e){P||"function"!=typeof k||k(e),P&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),z&&(L||!N)&&v(z,A,T,{locale:E,priority:!0,bypassPrefetchedCheck:!0},N)}};if(c.isAbsoluteUrl(T))Z.href=T;else if(!P||x||"a"===o.type&&!("href"in o.props)){let e=void 0!==E?E:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&h.getDomainLocale(T,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);Z.href=t||g.addBasePath(u.addLocale(T,e,null==R?void 0:R.defaultLocale))}return P?i.default.cloneElement(o,Z):i.default.createElement("a",Object.assign({},O,Z),n)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!i,[u,d]=o.useState(!1),f=o.useRef(null),p=o.useCallback(e=>{f.current=e},[]);o.useEffect(()=>{if(i){if(c||u)return;let e=f.current;if(e&&e.tagName){let o=function(e,t,n){let{id:o,observer:r,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=l.get(o)))return t;let r=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:r},a.push(n),l.set(n,t),t}(n);return i.set(e,t),r.observe(e),function(){if(i.delete(e),r.unobserve(e),0===i.size){r.disconnect(),l.delete(o);let e=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return o}}else if(!u){let e=r.requestIdleCallback(()=>d(!0));return()=>r.cancelIdleCallback(e)}},[c,n,t,u,f.current]);let h=o.useCallback(()=>{d(!1)},[]);return[p,u,h]};var o=n(7294),r=n(29);let i="function"==typeof IntersectionObserver,l=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:o,blurHeight:r,blurDataURL:i,objectFit:l}=e,a=o||t,s=r||n,c=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(o&&r?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function n(e){let{config:t,src:n,width:o,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(o,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},2784:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var o=n(5893);n(8804);var r=n(7294),i={src:"/_next/static/media/LMConsultingShape.d09c2df8.svg",height:568,width:953,blurWidth:0,blurHeight:0},l=n(5675),a=n.n(l),s=n(1664),c=n.n(s),u=n(8556),d=n.n(u);function f(){let[e,t]=(0,r.useState)(!1),n=()=>{t(!e),document.body.classList.contains("opacity")?document.body.classList.remove("opacity"):document.body.classList.add("opacity")},l=()=>{t(!1),document.body.classList.contains("opacity")&&document.body.classList.remove("opacity")};return(0,o.jsx)("header",{className:"".concat(d().header),children:(0,o.jsxs)("nav",{className:"py-2 px-4 flex justify-between min-h-[80px]",children:[(0,o.jsxs)(c(),{href:"/",className:"flex items-center gap-4",children:[(0,o.jsx)(a(),{src:i,width:70,height:70,alt:"/"}),(0,o.jsx)("p",{className:"".concat(d().logo),children:"LM Consulting"})]}),(0,o.jsx)("button",{id:"button",onClick:n,className:"".concat(e?d().open:""),children:(0,o.jsx)("span",{})}),(0,o.jsxs)("ul",{className:"flex items-center gap-4 ".concat(e?d().active:""),children:[(0,o.jsx)("li",{children:(0,o.jsx)(c(),{href:"/#nosotros",onClick:l,children:"Nosotros"})}),(0,o.jsx)("li",{children:(0,o.jsx)(c(),{href:"/#servicios",onClick:l,children:"Servicios"})}),(0,o.jsx)("li",{children:(0,o.jsx)(c(),{href:"/#elegirnos",onClick:l,children:"\xbfPor qu\xe9 elegirnos?"})}),(0,o.jsx)("li",{children:(0,o.jsx)(c(),{href:"/#contacto",onClick:l,children:"Contacto"})})]})]})})}function p(){return(0,o.jsx)("footer",{className:"min-h-[80px] bg-[#5193ed] text-white flex justify-center items-center",children:(0,o.jsx)("p",{children:"LM Consulting - Todos los derechos reservados \xa9"})})}function h(e){let{Component:t,pageProps:n}=e;return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(f,{}),(0,o.jsx)(t,{...n}),(0,o.jsx)(p,{})]})}},8804:function(){},8556:function(e){e.exports={header:"Header_header__R_kkv",hidden:"Header_hidden__rARn9",logo:"Header_logo__vc15F",open:"Header_open__qLaGx",active:"Header_active__v_gD5"}},5675:function(e,t,n){e.exports=n(3740)},1664:function(e,t,n){e.exports=n(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);