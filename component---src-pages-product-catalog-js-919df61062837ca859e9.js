(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{203:function(e,a,t){"use strict";t.r(a);t(33);var l=t(0),c=t.n(l),n=t(205),s=t(212),r=t(222),i=t(213),m=(t(232),t(216)),o=t(217),u=t(52),N=t.n(u),d=t(211),p=t.n(d),E=t(215),b={tabs:N.a.bool,pills:N.a.bool,vertical:N.a.oneOfType([N.a.bool,N.a.string]),horizontal:N.a.string,justified:N.a.bool,fill:N.a.bool,navbar:N.a.bool,card:N.a.bool,tag:E.l,className:N.a.string,cssModule:N.a.object},v=function(e){var a=e.className,t=e.cssModule,l=e.tabs,n=e.pills,s=e.vertical,r=e.horizontal,i=e.justified,u=e.fill,N=e.navbar,d=e.card,b=e.tag,v=Object(o.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),j=Object(E.h)(p()(a,N?"navbar-nav":"nav",!!r&&"justify-content-"+r,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(s),{"nav-tabs":l,"card-header-tabs":d&&l,"nav-pills":n,"card-header-pills":d&&n,"nav-justified":i,"nav-fill":u}),t);return c.a.createElement(b,Object(m.a)({},v,{className:j}))};v.propTypes=b,v.defaultProps={tag:"ul",vertical:!1};var j=v,h={tag:E.l,active:N.a.bool,className:N.a.string,cssModule:N.a.object},f=function(e){var a=e.className,t=e.cssModule,l=e.active,n=e.tag,s=Object(o.a)(e,["className","cssModule","active","tag"]),r=Object(E.h)(p()(a,"nav-item",!!l&&"active"),t);return c.a.createElement(n,Object(m.a)({},s,{className:r}))};f.propTypes=h,f.defaultProps={tag:"li"};var g=f,k=(t(72),t(220)),A=t(221),S={tag:E.l,innerRef:N.a.oneOfType([N.a.object,N.a.func,N.a.string]),disabled:N.a.bool,active:N.a.bool,className:N.a.string,cssModule:N.a.object,onClick:N.a.func,href:N.a.any},z=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(k.a)(t)),t}Object(A.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.active,n=e.tag,s=e.innerRef,r=Object(o.a)(e,["className","cssModule","active","tag","innerRef"]),i=Object(E.h)(p()(a,"nav-link",{disabled:r.disabled,active:l}),t);return c.a.createElement(n,Object(m.a)({},r,{ref:s,onClick:this.onClick,className:i}))},a}(c.a.Component);z.propTypes=S,z.defaultProps={tag:"a"};var y=z,O=(t(30),t(31),t(14),t(53),t(98)),w=c.a.createContext({}),C={tag:E.l,activeTab:N.a.any,className:N.a.string,cssModule:N.a.object},T=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(A.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.tag,n=Object(E.i)(this.props,Object.keys(C)),s=Object(E.h)(p()("tab-content",a),t);return c.a.createElement(w.Provider,{value:{activeTabId:this.state.activeTab}},c.a.createElement(l,Object(m.a)({},n,{className:s})))},a}(l.Component);Object(O.polyfill)(T);var V=T;T.propTypes=C,T.defaultProps={tag:"div"};var M={tag:E.l,className:N.a.string,cssModule:N.a.object,tabId:N.a.any};function I(e){var a=e.className,t=e.cssModule,l=e.tabId,n=e.tag,s=Object(o.a)(e,["className","cssModule","tabId","tag"]),r=function(e){return Object(E.h)(p()("tab-pane",a,{active:l===e}),t)};return c.a.createElement(w.Consumer,null,function(e){var a=e.activeTabId;return c.a.createElement(n,Object(m.a)({},s,{className:r(a)}))})}I.propTypes=M,I.defaultProps={tag:"div"};var x=t(208),J=t(209);t.d(a,"ProductQuery",function(){return F});a.default=function(e){var a=e.data,t=Object(l.useState)("1"),m=t[0],o=t[1],u=function(e){m!==e&&o(e)};return c.a.createElement("div",null,c.a.createElement(s.a,null),c.a.createElement("main",{className:"product-catalog"},c.a.createElement(r.a,{content:{title:"All Products"}}),c.a.createElement("div",{className:"section-catalog"},c.a.createElement("div",{className:"container"},c.a.createElement(j,{tabs:!0},c.a.createElement(g,null,c.a.createElement(y,{className:p()({active:"1"===m}),onClick:function(){u("1")}},c.a.createElement(x.a,{icon:J.e,className:"icon icon-grid"}))),c.a.createElement(g,null,c.a.createElement(y,{className:p()({active:"2"===m}),onClick:function(){u("2")}},c.a.createElement(x.a,{icon:J.b,className:"icon icon-list"})))),c.a.createElement(V,{activeTab:m},c.a.createElement(I,{tabId:"1"},c.a.createElement("div",{className:"grid"},c.a.createElement("ul",{className:"product-listing"},a.allMarkdownRemark.edges.map(function(e){var a=e.node.frontmatter,t=a.title,l=(a.description,a.price),s=a.image,r=a.altText,i=a.path;return a.ratings,c.a.createElement("div",{className:"product-item",key:t},c.a.createElement("div",{className:"image-holder"},c.a.createElement("div",{className:"thumbnail"},c.a.createElement("img",{src:s,className:"image-thumbnail",alt:r})),c.a.createElement(n.a,{to:i,className:"btn-swipe-black hover-swipe-right"},"View Details")),c.a.createElement("div",{className:"text-holder"},c.a.createElement("h2",{className:"title"},t),c.a.createElement("p",{className:"price"},"$",l)))})))),c.a.createElement(I,{tabId:"2"},c.a.createElement("div",{className:"list"},c.a.createElement("ul",{className:"product-listing"},a.allMarkdownRemark.edges.map(function(e){var a=e.node.frontmatter,t=a.title,l=a.description,s=a.price,r=a.image,i=a.altText,m=a.path,o=(a.ratings,l.length>220?"...":""),u=l.slice(0,220)+o;return c.a.createElement("div",{className:"product-item",key:t},c.a.createElement("div",{className:"image-holder"},c.a.createElement("div",{className:"thumbnail"},c.a.createElement("img",{src:r,className:"image-thumbnail",alt:i}))),c.a.createElement("div",{className:"text-holder"},c.a.createElement("h2",{className:"title"},t),c.a.createElement("p",{className:"description"},u),c.a.createElement("p",{className:"price"},"$",s),c.a.createElement(n.a,{to:m,className:"btn-swipe-black hover-swipe-right"},"View Details")))})))))))),c.a.createElement(i.a,null))};var F="3055565641"},205:function(e,a,t){"use strict";var l=t(0),c=t.n(l),n=t(69),s=t.n(n);t.d(a,"a",function(){return s.a});t(206),t(9).default.enqueue,c.a.createContext({})},206:function(e,a,t){var l;e.exports=(l=t(210))&&l.default||l},207:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAAmCAMAAACGRDV/AAAAwFBMVEUAAAASku0Sku0Sku0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0Sku0jNz4Sku0Sku0iO0cjNz4jNz4jNz4Sku0jNz4jNz4jNz4jNz4Sku0Sku0jNz4Sku0jNz4jNz4hPk0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0Sku0Sku0Sku0Sku0jNz4Sku1llcFHAAAAPnRSTlMA6PhAMGDwkHBQQOAP7NAgrATAgCDwV0kQNeS+oTD7OwfmZyi39nqJ0pd0JBoM8tbOxavrzNyEFa6kZX9wWEOx3tIAAAP/SURBVFjD7Zhre5owFICPLd6wdYtogNUJiHdF531X+///1ZITJIZrN/thdn0/mHCeEPKS5IRH6JSK+AY3Rum5iI9wYzCluzxuUunu5302X25T6R6yeVf6J/jflfyGyhjilHnYhHqTUYcrmDUZC4hDGxwcS5PjY5TUu7vGbmrHlD58TPAtrqSdVLoQp8bDdSjzogxJY4YJL6HKe2in9M+RY9GwujqPx1WU7u+e45ReXYmHW6+tZC+jAQ3Im1By9yfJKKbUeVJhMj+enr4rSuqY/gUlEep5WAyPqlLpAfJJKo2r1aoBjHqVMU9RssyaYfQdwqqBxcNri8EuiUZnhjGjGkQQuzxibd1LJVpljEm20gTXiwX+CqfpaqUKu25Eb1VPKC26vRNSqQI0RVW0pL1zvRFOp2t4IrCcBpGSg8362bO0wNfElee86eSvlFb1EL1Qyd9GEpWYUi22A2AxkQHtrBQ0xJ7NVjJ5QYGz4VVLVfr8QSWppNAsVMJRDieTYbrStlERG2EBQHbhFClKXXyHQUzp0r3PCx84+FRHUbp7VOk8XKmkib0D4NIdU7J1vEtnWNAflBfAYs1wYfXRrRaA1fciJYqvRIMcpRm/jQDHxofnJ/Frlep4VrjigM/IeLhwDICJ3DPH7jzsbyn6yVMy2K8HiB9X6sTIVPKqIbMiJV0k1sFMS0virnnYrBtDVBK7fEvUJL4XG6lQqXcxPFMqPXxW+a6ki8KMd0hTcr1TiDciMSVihIe+UHJwQkFVQuZJpTbDDJVGIidwcFHYUinO/Z8pGWlKYOIcIF9jSl/PmVAo6TghaUrd3KM2zAnyHus1lLxsJfC70VyYipKJC83QLV0o2WmztOrheHOVsJwCA9fEHl5DqUeylDiufljjbQdFaSoaAoRKFs6YqyrZ2GpC8pTI9vy+qkJOKrkfVH69SGkf9hcM0pToOAAOJuhxqOTJY9GWSrCLzlxot/wwiR9xWc7ylGAq1rXRwtKGy4z3qPL8EiXsZ7jZ4KMTSn2WFjSAdvd8wlfQTbNrcxxI90j0CSqhNmPqtO3DUh612N9yka2E30ESr15wLhUrjWRvSaVwACJFNPiiGkQtqbxLKJGWvJRKZMXLTZ4SHraS/YXS46c4j8VKVvgRN1xnKyGeDQynd1Yi67C2C5XAGqQogSlSS54SjC+VxlKJPCSBuFKFM1BCK0xV81GF4UCfFyZQXlA4HvYnZDu2ANGFydAGayO+wh3eVOwh2hLGqxmBMQ8zJdjwyo6AgDY58f8e9IFcfHOhdBU2rbchk6NDqekTGQg03W7jddukNgGFwKFlcwF/jutrmq7rjjYHofS2eFe6Bd6VboF3pVvgDSp1Sp03pvQbFxPHO+Flvh4AAAAASUVORK5CYII="},210:function(e,a,t){"use strict";t.r(a);t(23);var l=t(0),c=t.n(l),n=t(94);a.default=function(e){var a=e.location,t=e.pageResources;return t?c.a.createElement(n.a,Object.assign({location:a,pageResources:t},t.json)):null}},212:function(e,a,t){"use strict";t(33);var l=t(0),c=t.n(l),n=t(205),s=t(208),r=t(209),i=t(298),m=t(295),o=t(296),u=t(297);a.a=function(e){e.buttonLabel;var a=e.className,N=Object(l.useState)(!1),d=N[0],p=N[1],E=function(){return p(!d)},b=Object(l.useState)(void 0),v=b[0],j=b[1];return console.log(v),Object(l.useEffect)(function(){j(JSON.parse(localStorage.getItem("cartList"))),console.log(v)},[]),c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement("nav",null,c.a.createElement("ul",{className:"link-listing"},c.a.createElement("li",{className:"link-item"},c.a.createElement(n.a,{to:"/product-catalog",className:"link"},"Product")),c.a.createElement("li",{className:"link-item"},c.a.createElement(n.a,{to:"/",className:"link"},"About")),c.a.createElement("li",{className:"link-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Collection")),c.a.createElement("li",{className:"link-item show-mb"},c.a.createElement(n.a,{to:"/product-catalog",className:"link"},"Shop"))),c.a.createElement("div",{className:"brand-icon-holder"},c.a.createElement(n.a,{to:"/"},c.a.createElement("img",{className:"brand-icon",src:t(207),alt:"fullstackhq-logo"}))),c.a.createElement("ul",{className:"icon-listing"},c.a.createElement("li",{className:"icon-item"},c.a.createElement(n.a,{className:"icon-link",to:""},c.a.createElement(s.a,{icon:r.c,className:"icon icon-search"}))),c.a.createElement("li",{className:"icon-item",onClick:E},c.a.createElement("div",{className:"icon-link"},c.a.createElement(s.a,{icon:r.d,className:"icon icon-shopping-bag"})))))),c.a.createElement(i.a,{isOpen:d,toggle:E,className:a},c.a.createElement(m.a,{toggle:E},"Your Cart"),c.a.createElement(o.a,null,c.a.createElement("ul",{className:"cart-product-listing"},v?v.map(function(e,a){var t=parseInt(e.price)*e.qtty;return console.log("itemsss:"+e),c.a.createElement("li",{key:a,className:"cart-product-item"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("div",{className:"thumbnail-holder"},c.a.createElement("img",{src:e.image,className:"product-image",alt:e.productName})),c.a.createElement(u.a,{color:"link"},"Remove")),c.a.createElement("div",{className:"text-wrapper"},c.a.createElement("h4",{className:"product-name"},e.productName),c.a.createElement("p",{className:"computation"},e.qtty," x $",e.price," = ",t)))}):"Your cart is empty")),c.a.createElement("div",{className:"total-holder"},c.a.createElement("h3",{className:"total"},"Total:")),c.a.createElement("div",{className:"btn-holder"},c.a.createElement(n.a,{to:"/checkout",className:"btn-swipe-black hover-swipe-right btn-checkout"},"Checkout"),c.a.createElement(n.a,{to:"/product-catalog",className:"btn-swipe-black hover-swipe-right"},"Continue Shopping"))))}},213:function(e,a,t){"use strict";var l=t(0),c=t.n(l),n=t(205),s=t(208),r=t(218),i=t(209);a.a=function(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"footer-wrapper"},c.a.createElement("div",{className:"logo-holder"},c.a.createElement("div",{className:"brand-holder"},c.a.createElement(n.a,{to:"/"},c.a.createElement("img",{className:"brand-icon",src:t(207),alt:"paymongo-logo"})),c.a.createElement("p",null,"Built with ",c.a.createElement(s.a,{icon:i.a,className:"heart-icon"})," by ",c.a.createElement("a",{href:"https://fullstackhq.com/",target:"_blank",rel:"noopener noreferrer"},"Fullstack HQ"),". Powered by Gatsby + Netlify + PayMongo API."))),c.a.createElement("div",{className:"links-holder"},c.a.createElement("h2",{className:"title"},"CATEGORIES"),c.a.createElement("ul",{className:"list-holder"},c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")))),c.a.createElement("div",{className:"links-holder"},c.a.createElement("h2",{className:"title"},"INFORMATION"),c.a.createElement("ul",{className:"list-holder"},c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")))),c.a.createElement("div",{className:"links-holder"},c.a.createElement("h2",{className:"title"},"SOCIAL"),c.a.createElement("ul",{className:"list-holder"},c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},c.a.createElement(s.a,{icon:r.c,className:"icon"}),"Instagram")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},c.a.createElement(s.a,{icon:r.b,className:"icon"}),"Facebook")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},c.a.createElement(s.a,{icon:r.f,className:"icon"}),"Twitter")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},c.a.createElement(s.a,{icon:r.e,className:"icon"}),"Pinterest")))))))}},222:function(e,a,t){"use strict";var l=t(0),c=t.n(l);t(205);a.a=function(e){var a=e.content;return c.a.createElement("div",{className:"section-banner"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"banner-title"},a.title)))}}}]);
//# sourceMappingURL=component---src-pages-product-catalog-js-919df61062837ca859e9.js.map