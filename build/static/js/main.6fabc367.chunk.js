(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(0),u=t(2),a=t.n(u),s=t(15),i=t.n(s),o=(t(21),t(6)),r=t(3),j=t(4),l=t.n(j),b="http://localhost:3001/api/persons",d=function(e){return l.a.post(b,e)},f=function(){return l.a.get(b)},h=function(e){return l.a.delete(b+"/"+e)},O=function(e){return l.a.put(b+"/"+e.id,e)},m=function(){var e=Object(u.useState)([]),n=Object(r.a)(e,2),t=n[0],a=n[1],s=Object(u.useState)(""),i=Object(r.a)(s,2),j=i[0],l=i[1],b=Object(u.useState)(""),m=Object(r.a)(b,2),v=m[0],p=m[1],x=Object(u.useState)(""),g=Object(r.a)(x,2),w=g[0],C=g[1],S=Object(u.useState)(null),k=Object(r.a)(S,2),y=k[0],F=k[1],L=Object(u.useState)(null),T=Object(r.a)(L,2),D=T[0],I=T[1],M=function(e){var n=e.message,t=e.success;return null===n?null:!0===t?Object(c.jsx)("div",{className:"successMessage",children:n}):Object(c.jsx)("div",{className:"failedMessage",children:n})};Object(u.useEffect)((function(){f().then((function(e){a(e.data)}))}),[]);var N=t.filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(M,{message:y,success:!0}),Object(c.jsx)(M,{message:D,success:!1}),Object(c.jsxs)("div",{children:["filter shown with ",Object(c.jsx)("input",{value:w,onChange:function(e){C(e.target.value)}})]}),Object(c.jsx)("h2",{children:"add a new"}),Object(c.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(j)){if(!0===window.confirm(j+" is already added to phonebook, replace the old number with a new one?")){var n=t.find((function(e){return e.name===j})),c=Object(o.a)(Object(o.a)({},n),{},{number:v});O(c)}}else{var u={name:j,number:v};d(u).then((function(e){a(t.concat(e.data)),l(""),p("")})),F("Added "+u.name),setTimeout((function(){F(null)}),3e3)}},children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:j,onChange:function(e){l(e.target.value)}})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:v,onChange:function(e){p(e.target.value)}})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]}),Object(c.jsx)("h2",{children:"Numbers"}),N.map((function(e){return Object(c.jsxs)("p",{children:[e.name," ",e.number," ",Object(c.jsx)("button",{onClick:function(){return function(e){h(e.id).then((function(n){a(t.filter((function(n){return n.id!==e.id}))),console.log(n)})).catch((function(n){I("Information of "+e.name+"has already been removed from server"),setTimeout((function(){I(null)}),3e3)}))}(e)},children:"Delete"})]},e.name)}))]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(n){var t=n.getCLS,c=n.getFID,u=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),u(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),v()}},[[39,1,2]]]);
//# sourceMappingURL=main.6fabc367.chunk.js.map