(this["webpackJsonpreact-shop-project"]=this["webpackJsonpreact-shop-project"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(7),r=c.n(i),s=(c(13),c(0)),o=function(){return Object(s.jsx)("nav",{className:"green darken-1",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("a",{href:"/",className:"brand-logo",children:"React Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://paavveel.github.io/react-shop-project/",target:"_blank",rel:"noreferrer",children:"Repo"})})})]})})};var l=function(){return Object(s.jsx)("footer",{className:"page-footer green lighten-4",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://paavveel.github.io/react-shop-project/",target:"_blank",rel:"noreferrer",children:"Repo"})]})})})},j=c(8),d=c(2),u=c(3);var b=function(e){var t=e.name,c=e.closeAlert;return Object(n.useEffect)((function(){var e=setTimeout(c,3e3);return function(){clearTimeout(e)}}),[t,c]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[t," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})};var h=function(e){var t=e.id,c=e.name,n=e.price,a=e.quantity,i=e.removeFromBasket,r=e.incQuantity,o=e.decQuantity;return Object(s.jsxs)("li",{className:"collection-item",children:[c," ",n," \u0440\u0443\u0431.",Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return o(t)},children:"remove"})," ","x",a," ",Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return r(t)},children:"add"})," ","= ",n*a," \u0440\u0443\u0431.",Object(s.jsx)("span",{className:"secondary-content",onClick:function(){return i(t)},children:Object(s.jsx)("i",{className:"material-icons basket-delete",children:"close"})})]})};var O=function(e){var t=e.order,c=void 0===t?[]:t,n=e.handleBasketShow,a=e.removeFromBasket,i=e.incQuantity,r=e.decQuantity,o=c.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(s.jsxs)("ul",{className:"collection basket-list",children:[Object(s.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),c.length?c.map((function(e){return Object(s.jsx)(h,Object(d.a)(Object(d.a)({},e),{},{removeFromBasket:a,incQuantity:i,decQuantity:r}),e.id)})):Object(s.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(s.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",o," \u0440\u0443\u0431."]}),Object(s.jsx)("li",{className:"collection-item",children:Object(s.jsx)("button",{className:"btn-small",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})}),Object(s.jsx)("i",{className:"material-icons basket-close",onClick:n,children:"close"})]})};var m=function(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleBasketShow;return Object(s.jsxs)("div",{className:"cart blue darken-4 white-text",onClick:n,children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(s.jsx)("span",{className:"cart-quantity",children:c}):null]})};var f=function(e){var t=e.id,c=e.name,n=e.description,a=e.price,i=e.full_background,r=e.addToBasket;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{src:i,alt:c})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("span",{className:"card-title",children:c}),Object(s.jsx)("p",{children:n})]}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn",onClick:function(){r({id:t,name:c,price:a})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsxs)("span",{className:"right price",children:[a," \u0440\u0443\u0431."]})]})]})};var x=function(e){var t=e.goods,c=void 0===t?[]:t,n=e.addToBasket;return c.length?Object(s.jsx)("div",{className:"goods",children:c.map((function(e){return Object(s.jsx)(f,Object(d.a)(Object(d.a)({},e),{},{addToBasket:n}),e.id)}))}):Object(s.jsx)("h3",{children:"No data"})};var v=function(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})};var p=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!0),r=Object(u.a)(i,2),o=r[0],l=r[1],h=Object(n.useState)([]),f=Object(u.a)(h,2),p=f[0],N=f[1],g=Object(n.useState)(!1),k=Object(u.a)(g,2),y=k[0],q=k[1],B=Object(n.useState)(""),S=Object(u.a)(B,2),w=S[0],Q=S[1],C=function(){q(!y)};return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=ru",{headers:{Authorization:"64a58f87-4ee9b1fa-91ff1894-425e310e"}}).then((function(e){return e.json()})).then((function(e){e.featured&&a(e.featured),l(!1)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(m,{quantity:p.length,handleBasketShow:C}),o?Object(s.jsx)(v,{}):Object(s.jsx)(x,{goods:c,addToBasket:function(e){var t=p.findIndex((function(t){return t.id===e.id}));if(t<0){var c=Object(d.a)(Object(d.a)({},e),{},{quantity:1});N([].concat(Object(j.a)(p),[c]))}else{var n=p.map((function(e,c){return c===t?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e}));N(n)}Q(e.name)}}),y&&Object(s.jsx)(O,{order:p,removeFromBasket:function(e){var t=p.filter((function(t){return t.id!==e}));N(t)},handleBasketShow:C,incQuantity:function(e){var t=p.map((function(t){if(t.id===e){var c=t.quantity+1;return Object(d.a)(Object(d.a)({},t),{},{quantity:c})}return t}));N(t)},decQuantity:function(e){var t=p.map((function(t){if(t.id===e){var c=t.quantity-1;return Object(d.a)(Object(d.a)({},t),{},{quantity:c>0?c:1})}return t}));N(t)}}),w&&Object(s.jsx)(b,{name:w,closeAlert:function(){Q("")}})]})};c(15);var N=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(p,{}),Object(s.jsx)(l,{})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.74fdff2e.chunk.js.map