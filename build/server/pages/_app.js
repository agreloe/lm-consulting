(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1684:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__R_kkv",
	"hidden": "Header_hidden__rARn9",
	"logo": "Header_logo__vc15F",
	"open": "Header_open__qLaGx",
	"active": "Header_active__v_gD5"
};


/***/ }),

/***/ 2784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.scss
var globals = __webpack_require__(6961);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/img/SVG/LMConsultingShape.svg
/* harmony default export */ const LMConsultingShape = ({"src":"/_next/static/media/LMConsultingShape.d09c2df8.svg","height":568,"width":953,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/styles/Header.module.scss
var Header_module = __webpack_require__(1684);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./src/components/Header.js






function Header() {
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    const openMenu = ()=>{
        setToggle(!toggle);
        if (document.body.classList.contains("opacity")) {
            document.body.classList.remove("opacity");
        } else {
            document.body.classList.add("opacity");
        }
    };
    const closeMenu = ()=>{
        setToggle(false);
        if (document.body.classList.contains("opacity")) {
            document.body.classList.remove("opacity");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `${(Header_module_default()).header}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "py-2 px-4 flex justify-between min-h-[80px]",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: LMConsultingShape,
                            width: 70,
                            height: 70,
                            alt: "/"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(Header_module_default()).logo}`,
                            children: "LM Consulting"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    id: "button",
                    onClick: openMenu,
                    className: `${!toggle ? "" : (Header_module_default()).open}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: `flex items-center gap-4 ${!toggle ? "" : (Header_module_default()).active}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#nosotros",
                                onClick: closeMenu,
                                children: "Nosotros"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#servicios",
                                onClick: closeMenu,
                                children: "Servicios"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#elegirnos",
                                onClick: closeMenu,
                                children: "\xbfPor qu\xe9 elegirnos?"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#contacto",
                                onClick: closeMenu,
                                children: "Contacto"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Footer.js



function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "min-h-[80px] bg-[#5193ed] text-white flex justify-center items-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "LM Consulting - Todos los derechos reservados \xa9"
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/_app.js





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 6961:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664], () => (__webpack_exec__(2784)));
module.exports = __webpack_exports__;

})();