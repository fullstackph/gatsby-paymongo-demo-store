(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{198:function(e,a,t){"use strict";t.r(a);t(12),t(23),t(55);var l=t(0),c=t.n(l),n=(t(205),t(267)),r=t.n(n),m=t(212),s=t(222),i=t(213);a.default=function(){var e=Object(l.useState)({name:"",email:"",city:"",country:"",line1:"",line2:"",postal_code:"",state:"",number:"",expiry:"",year:"",cvc:"",paymentAmount:"250",decimal:"10",currency:"PHP",description:"This is only a test made by FS",statement_descriptor:"This is only a test"}),a=e[0],t=e[1],n=Object(l.useState)({error:"",data:{type:"",code:""}}),o=n[0],p=n[1],u=function(e){var l,c=e.target.name,n=e.target.value;t(Object.assign({},a,((l={})[c]=n,l))),localStorage.setItem("myValueInLocalStorage",JSON.stringify(a))};return c.a.createElement("div",{className:"sass-ready"},c.a.createElement(m.a,null),c.a.createElement("main",{className:"checkout-page"},c.a.createElement(s.a,{content:{title:"Checkout"}}),c.a.createElement("div",{className:"payment-content-wrapper container"},c.a.createElement("div",{className:"content-wrapper"},c.a.createElement("div",{className:"form-wrapper"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r.a.post("https://paymongo-api.onrender.com/api/payment",a).then(function(e){var a=e.data;p(a),console.log(a)})}},c.a.createElement("div",{className:"form-separator"},c.a.createElement("h2",{className:"separator-title"},"Contact Information")),c.a.createElement("div",{className:"input-group-wrapper"},c.a.createElement("input",{name:"name",type:"text",placeholder:"Full Name",onChange:u,required:!0}),c.a.createElement("input",{name:"email",type:"email",placeholder:"Email",onChange:u,required:!0})),c.a.createElement("div",{className:"form-separator"},c.a.createElement("h2",{className:"separator-title"},"Billing Address")),c.a.createElement("div",{className:"input-group-wrapper"},c.a.createElement("input",{name:"line1",type:"text",placeholder:"Line 1 Address",onChange:u}),c.a.createElement("input",{name:"line2",type:"text",placeholder:"Line 2 Address",onChange:u})),c.a.createElement("div",{className:"input-group-wrapper"},c.a.createElement("input",{name:"city",type:"text",placeholder:"City",onChange:u}),c.a.createElement("input",{name:"state",type:"text",placeholder:"State / Province / Region",onChange:u})),c.a.createElement("div",{className:"input-group-wrapper"},c.a.createElement("input",{name:"country",type:"text",placeholder:"Country",onChange:u}),c.a.createElement("input",{name:"postal_code",type:"text",placeholder:"ZIP Code",onChange:u})),c.a.createElement("div",{className:"form-separator"},c.a.createElement("h2",{className:"separator-title"},"Payment Method")),c.a.createElement("div",{className:"card-no-wrapper"},c.a.createElement("input",{name:"number",type:"text",className:"w-100s",placeholder:"Number",onChange:u})),c.a.createElement("div",{className:"card-info-wrapper"},c.a.createElement("input",{name:"expiry",type:"text",placeholder:"Expiry Month",onChange:u}),c.a.createElement("input",{name:"year",type:"text",placeholder:"Expiry Year",onChange:u}),c.a.createElement("input",{name:"cvc",type:"text",placeholder:"CVC",onChange:u})),c.a.createElement("button",{type:"submit",className:"btn-swipe-black hover-swipe-right"},"PROCEED AND PAY ",a.currency," ",a.paymentAmount,".",a.decimal))),c.a.createElement("div",{className:"order-summary"},c.a.createElement("div",{className:"cart-summary"},c.a.createElement("div",{className:"summary-banner text-center"},"SHOPPING CART"),c.a.createElement("div",{className:"cart-item"},c.a.createElement("div",{className:"product-image"}," "),c.a.createElement("div",{className:"prod-data-wrapper"},c.a.createElement("p",{className:"product-name"},a.description),c.a.createElement("div",{className:"monetary-wrapper"},c.a.createElement("p",{className:"product-qtty"},"x5"),c.a.createElement("p",{className:"product-price"},a.currency," ",a.paymentAmount,".",a.decimal)))),c.a.createElement("div",{className:"cart-item"},c.a.createElement("div",{className:"product-image"}," "),c.a.createElement("div",{className:"prod-data-wrapper"},c.a.createElement("p",{className:"product-name"},a.description),c.a.createElement("div",{className:"monetary-wrapper"},c.a.createElement("p",{className:"product-qtty"},"x5"),c.a.createElement("p",{className:"product-price"},a.currency," ",a.paymentAmount,".",a.decimal))))),c.a.createElement("div",null,c.a.createElement("p",{className:"mb-0"},"Subtotal:"),c.a.createElement("h2",{className:"subtotal-amount"},"PHP 250.10"))))),o.error?window.location.replace("/failed-payment"):o.data.type?window.location.replace("/success-payment"):o.data.code?"there could be an error in one of ur fields":""),c.a.createElement(i.a,null))}},205:function(e,a,t){"use strict";var l=t(0),c=t.n(l),n=t(69),r=t.n(n);t.d(a,"a",function(){return r.a});t(206),t(9).default.enqueue,c.a.createContext({})},206:function(e,a,t){var l;e.exports=(l=t(210))&&l.default||l},207:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAAmCAMAAACGRDV/AAAAwFBMVEUAAAASku0Sku0Sku0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0Sku0jNz4Sku0Sku0iO0cjNz4jNz4jNz4Sku0jNz4jNz4jNz4jNz4Sku0Sku0jNz4Sku0jNz4jNz4hPk0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0jNz4jNz4jNz4jNz4jNz4jNz4jNz4jNz4Sku0Sku0Sku0Sku0Sku0jNz4Sku1llcFHAAAAPnRSTlMA6PhAMGDwkHBQQOAP7NAgrATAgCDwV0kQNeS+oTD7OwfmZyi39nqJ0pd0JBoM8tbOxavrzNyEFa6kZX9wWEOx3tIAAAP/SURBVFjD7Zhre5owFICPLd6wdYtogNUJiHdF531X+///1ZITJIZrN/thdn0/mHCeEPKS5IRH6JSK+AY3Rum5iI9wYzCluzxuUunu5302X25T6R6yeVf6J/jflfyGyhjilHnYhHqTUYcrmDUZC4hDGxwcS5PjY5TUu7vGbmrHlD58TPAtrqSdVLoQp8bDdSjzogxJY4YJL6HKe2in9M+RY9GwujqPx1WU7u+e45ReXYmHW6+tZC+jAQ3Im1By9yfJKKbUeVJhMj+enr4rSuqY/gUlEep5WAyPqlLpAfJJKo2r1aoBjHqVMU9RssyaYfQdwqqBxcNri8EuiUZnhjGjGkQQuzxibd1LJVpljEm20gTXiwX+CqfpaqUKu25Eb1VPKC26vRNSqQI0RVW0pL1zvRFOp2t4IrCcBpGSg8362bO0wNfElee86eSvlFb1EL1Qyd9GEpWYUi22A2AxkQHtrBQ0xJ7NVjJ5QYGz4VVLVfr8QSWppNAsVMJRDieTYbrStlERG2EBQHbhFClKXXyHQUzp0r3PCx84+FRHUbp7VOk8XKmkib0D4NIdU7J1vEtnWNAflBfAYs1wYfXRrRaA1fciJYqvRIMcpRm/jQDHxofnJ/Frlep4VrjigM/IeLhwDICJ3DPH7jzsbyn6yVMy2K8HiB9X6sTIVPKqIbMiJV0k1sFMS0virnnYrBtDVBK7fEvUJL4XG6lQqXcxPFMqPXxW+a6ki8KMd0hTcr1TiDciMSVihIe+UHJwQkFVQuZJpTbDDJVGIidwcFHYUinO/Z8pGWlKYOIcIF9jSl/PmVAo6TghaUrd3KM2zAnyHus1lLxsJfC70VyYipKJC83QLV0o2WmztOrheHOVsJwCA9fEHl5DqUeylDiufljjbQdFaSoaAoRKFs6YqyrZ2GpC8pTI9vy+qkJOKrkfVH69SGkf9hcM0pToOAAOJuhxqOTJY9GWSrCLzlxot/wwiR9xWc7ylGAq1rXRwtKGy4z3qPL8EiXsZ7jZ4KMTSn2WFjSAdvd8wlfQTbNrcxxI90j0CSqhNmPqtO3DUh612N9yka2E30ESr15wLhUrjWRvSaVwACJFNPiiGkQtqbxLKJGWvJRKZMXLTZ4SHraS/YXS46c4j8VKVvgRN1xnKyGeDQynd1Yi67C2C5XAGqQogSlSS54SjC+VxlKJPCSBuFKFM1BCK0xV81GF4UCfFyZQXlA4HvYnZDu2ANGFydAGayO+wh3eVOwh2hLGqxmBMQ8zJdjwyo6AgDY58f8e9IFcfHOhdBU2rbchk6NDqekTGQg03W7jddukNgGFwKFlcwF/jutrmq7rjjYHofS2eFe6Bd6VboF3pVvgDSp1Sp03pvQbFxPHO+Flvh4AAAAASUVORK5CYII="},210:function(e,a,t){"use strict";t.r(a);t(23);var l=t(0),c=t.n(l),n=t(94);a.default=function(e){var a=e.location,t=e.pageResources;return t?c.a.createElement(n.a,Object.assign({location:a,pageResources:t},t.json)):null}},212:function(e,a,t){"use strict";t(33);var l=t(0),c=t.n(l),n=t(205),r=t(208),m=t(209),s=t(298),i=t(295),o=t(296),p=t(297);a.a=function(e){e.buttonLabel;var a=e.className,u=Object(l.useState)(!1),N=u[0],E=u[1],d=function(){return E(!N)},h=Object(l.useState)(void 0),y=h[0],g=h[1];return console.log(y),Object(l.useEffect)(function(){g(JSON.parse(localStorage.getItem("cartList"))),console.log(y)},[]),c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement("nav",null,c.a.createElement("ul",{className:"link-listing"},c.a.createElement("li",{className:"link-item"},c.a.createElement(n.a,{to:"/product-catalog",className:"link"},"Product")),c.a.createElement("li",{className:"link-item"},c.a.createElement(n.a,{to:"/",className:"link"},"About")),c.a.createElement("li",{className:"link-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Collection")),c.a.createElement("li",{className:"link-item show-mb"},c.a.createElement(n.a,{to:"/product-catalog",className:"link"},"Shop"))),c.a.createElement("div",{className:"brand-icon-holder"},c.a.createElement(n.a,{to:"/"},c.a.createElement("img",{className:"brand-icon",src:t(207),alt:"fullstackhq-logo"}))),c.a.createElement("ul",{className:"icon-listing"},c.a.createElement("li",{className:"icon-item"},c.a.createElement(n.a,{className:"icon-link",to:""},c.a.createElement(r.a,{icon:m.c,className:"icon icon-search"}))),c.a.createElement("li",{className:"icon-item",onClick:d},c.a.createElement("div",{className:"icon-link"},c.a.createElement(r.a,{icon:m.d,className:"icon icon-shopping-bag"})))))),c.a.createElement(s.a,{isOpen:N,toggle:d,className:a},c.a.createElement(i.a,{toggle:d},"Your Cart"),c.a.createElement(o.a,null,c.a.createElement("ul",{className:"cart-product-listing"},y?y.map(function(e,a){var t=parseInt(e.price)*e.qtty;return console.log("itemsss:"+e),c.a.createElement("li",{key:a,className:"cart-product-item"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("div",{className:"thumbnail-holder"},c.a.createElement("img",{src:e.image,className:"product-image",alt:e.productName})),c.a.createElement(p.a,{color:"link"},"Remove")),c.a.createElement("div",{className:"text-wrapper"},c.a.createElement("h4",{className:"product-name"},e.productName),c.a.createElement("p",{className:"computation"},e.qtty," x $",e.price," = ",t)))}):"Your cart is empty")),c.a.createElement("div",{className:"total-holder"},c.a.createElement("h3",{className:"total"},"Total:")),c.a.createElement("div",{className:"btn-holder"},c.a.createElement(n.a,{to:"/checkout",className:"btn-swipe-black hover-swipe-right btn-checkout"},"Checkout"),c.a.createElement(n.a,{to:"/product-catalog",className:"btn-swipe-black hover-swipe-right"},"Continue Shopping"))))}},213:function(e,a,t){"use strict";var l=t(0),c=t.n(l),n=t(205),r=t(208),m=t(218),s=t(209);a.a=function(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"footer-wrapper"},c.a.createElement("div",{className:"logo-holder"},c.a.createElement("div",{className:"brand-holder"},c.a.createElement(n.a,{to:"/"},c.a.createElement("img",{className:"brand-icon",src:t(207),alt:"paymongo-logo"})),c.a.createElement("p",null,"Built with ",c.a.createElement(r.a,{icon:s.a,className:"heart-icon"})," by ",c.a.createElement("a",{href:"https://fullstackhq.com/",target:"_blank",rel:"noopener noreferrer"},"Fullstack HQ"),". Powered by Gatsby + Netlify + PayMongo API."))),c.a.createElement("div",{className:"links-holder"},c.a.createElement("h2",{className:"title"},"CATEGORIES"),c.a.createElement("ul",{className:"list-holder"},c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")))),c.a.createElement("div",{className:"links-holder"},c.a.createElement("h2",{className:"title"},"INFORMATION"),c.a.createElement("ul",{className:"list-holder"},c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},"Lorem ipsum")))),c.a.createElement("div",{className:"links-holder"},c.a.createElement("h2",{className:"title"},"SOCIAL"),c.a.createElement("ul",{className:"list-holder"},c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},c.a.createElement(r.a,{icon:m.c,className:"icon"}),"Instagram")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},c.a.createElement(r.a,{icon:m.b,className:"icon"}),"Facebook")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},c.a.createElement(r.a,{icon:m.f,className:"icon"}),"Twitter")),c.a.createElement("li",{className:"list-item"},c.a.createElement(n.a,{to:"/",className:"link"},c.a.createElement(r.a,{icon:m.e,className:"icon"}),"Pinterest")))))))}},222:function(e,a,t){"use strict";var l=t(0),c=t.n(l);t(205);a.a=function(e){var a=e.content;return c.a.createElement("div",{className:"section-banner"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"banner-title"},a.title)))}}}]);
//# sourceMappingURL=component---src-pages-checkout-js-cae72a1796fc441c84cf.js.map