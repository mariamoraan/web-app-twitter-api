(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(3),o=n.n(r),s=(n(9),n(4)),l=(n(10),n(0)),a=function(){var e=Object(i.useState)({}),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){fetch("/api/v1/twitter-info").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{id:"twitter-image",src:n.image,alt:"twitter profile image"}),Object(l.jsx)("h1",{id:"twitter-name",children:n?n.name:""}),Object(l.jsx)("h2",{id:"twitter-followers",children:"Followers"}),Object(l.jsx)("h2",{id:"twitter-followers-number",children:n?n.followers_number:0}),Object(l.jsxs)("a",{id:"twitter-follow-me",children:["Follow @",n?n.username:""]})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(a,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.171d9277.chunk.js.map