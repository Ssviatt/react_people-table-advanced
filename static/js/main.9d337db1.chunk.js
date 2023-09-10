(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(24),a=c(6),r=(c(34),c(35),c(3)),s=(c(36),c(4)),l=c(8),i=c.n(l),o=c(1),j=function(){var e=Object(a.d)(),t=Object(s.a)(e,1)[0];return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(a.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(o.jsx)(a.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:{pathname:"/people",search:t.toString()},children:"People"})]})})})},d=function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})},u=function(){return Object(o.jsx)("h1",{className:"title",children:"Page not found"})},b=c(0);function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(38);var O=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},m=function(e,t,c,n){var a=e.filter((function(e){var c,n;return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())||(null===(c=e.motherName)||void 0===c?void 0:c.toLocaleLowerCase().includes(t.toLocaleLowerCase()))||(null===(n=e.fatherName)||void 0===n?void 0:n.toLocaleLowerCase().includes(t.toLocaleLowerCase()))})).filter((function(e){return e.sex.includes(c)}));return n.length?n.flatMap((function(e){return a.filter((function(t){return(1===(c=t.born)?0:Math.ceil(c/100))===e;var c}))})):a},x=c(7),p=function(e,t){var c,n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;switch(t){case"name":case"sex":return c=e,n=t,a?Object(x.a)(c).sort((function(e,t){return t[n].localeCompare(e[n])})):Object(x.a)(c).sort((function(e,t){return e[n].localeCompare(t[n])}));case"born":case"died":return function(e,t,c){return c?Object(x.a)(e).sort((function(e,c){return c[t]-e[t]})):Object(x.a)(e).sort((function(e,c){return e[t]-c[t]}))}(e,t,a);default:return e}};function f(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];null===a?c.delete(n):Array.isArray(a)?(c.delete(n),a.forEach((function(e){c.append(n,e)}))):c.set(n,a)})),c.toString()}var v=c(22),g=c(25),N=["children","params"],w=function(e){var t=e.children,c=e.params,n=Object(g.a)(e,N),r=Object(a.d)(),l=Object(s.a)(r,1)[0];return Object(o.jsx)(a.b,Object(v.a)(Object(v.a)({to:{search:f(l,c)}},n),{},{children:t}))},y=[16,17,18,19,20],L=function(){var e=Object(a.d)(),t=Object(s.a)(e,2),c=t[0],n=t[1],r=c.get("query")||"",l=c.get("sex")||"",j=c.getAll("centuries")||[],d=function(e){var t=f(c,e);n(t)};return Object(o.jsxs)("nav",{className:"panel",children:[Object(o.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(o.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(o.jsx)(w,{params:{sex:null},className:i()({"is-active":!l}),children:"All"}),Object(o.jsx)(w,{params:{sex:"m"},className:i()({"is-active":"m"===l}),children:"Male"}),Object(o.jsx)(w,{params:{sex:"f"},className:i()({"is-active":"f"===l}),children:"Female"})]}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("p",{className:"control has-icons-left",children:[Object(o.jsx)("input",{"data-cy":"NameFilter",className:"input",placeholder:"Search",onChange:function(e){d({query:e.target.value||null})},value:r}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(o.jsx)("div",{className:"level-left",children:y.map((function(e){return Object(o.jsx)("button",{"data-cy":"century",className:i()("button mr-1",{"is-info":j.includes(e.toString())}),onClick:function(){return function(e){var t=j.includes(e)?j.filter((function(t){return t!==e})):[].concat(Object(x.a)(j),[e]);d({centuries:t})}(e.toString())},children:e},e)}))}),Object(o.jsx)("div",{className:"level-right ml-4",children:Object(o.jsx)(w,{params:{centuries:null},"data-cy":"centuryALL",className:i()("button is-success",{"is-outlined":0!==j.length}),children:"All"})})]})}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsx)("a",{className:"button is-link is-outlined is-fullwidth",href:"#/people",children:"Reset all filters"})})]})},C=function(e){var t=e.person,c=e.peoples,n=Object(r.q)().slug,l=Object(a.d)(),j=Object(s.a)(l,1)[0],d=c.find((function(e){return e.name===t.fatherName})),u=c.find((function(e){return e.name===t.motherName}));return Object(o.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":n===t.slug}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(a.c,{to:{pathname:"../".concat(t.slug),search:j.toString()},className:i()({"has-text-danger":"f"===t.sex}),children:t.name})}),Object(o.jsx)("td",{children:t.sex}),Object(o.jsx)("td",{children:t.born}),Object(o.jsx)("td",{children:t.died}),u?Object(o.jsx)("td",{children:Object(o.jsx)(a.c,{className:"has-text-danger",to:{pathname:"../".concat(null===u||void 0===u?void 0:u.slug),search:j.toString()},children:t.motherName||"-"})}):Object(o.jsx)("td",{children:t.motherName||"-"}),d?Object(o.jsx)("td",{children:Object(o.jsx)(a.c,{to:{pathname:"../".concat(null===d||void 0===d?void 0:d.slug),search:j.toString()},children:t.fatherName||"-"})}):Object(o.jsx)("td",{children:t.fatherName||"-"})]})},S=function(e){return e.Name="Name",e.Sex="Sex",e.Born="Born",e.Died="Died",e}({}),k=function(e){var t=e.peoples,c=Object(a.d)(),n=Object(s.a)(c,2),r=n[0],l=n[1],j=r.get("sort")||"",d=r.get("order")||"",u=function(e){var t=f(r,e);l(t)},b=function(e){var t,c,n,a=null===(t=e.currentTarget.parentElement)||void 0===t||null===(c=t.parentElement)||void 0===c||null===(n=c.textContent)||void 0===n?void 0:n.toLocaleLowerCase();switch(!0){case j!==a:return u({sort:a||null,order:null}),null;case j===a&&Boolean(d):return u({sort:null,order:null}),null;case j===a:return u({order:"desc"}),null;default:return null}};return Object(o.jsx)(o.Fragment,{children:t.length>0&&Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object.values(S).map((function(e){return Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e,Object(o.jsx)("span",{style:{color:"#485FC7",cursor:"pointer"},children:Object(o.jsx)("span",{className:"icon",onClick:b,children:Object(o.jsx)("i",{className:i()("fas",{"fa-sort":j!==e.toLocaleLowerCase(),"fa-sort-up":j===e.toLocaleLowerCase()&&!d,"fa-sort-down":d&&j===e.toLocaleLowerCase()})})})})]})},e)})),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsx)(C,{person:e,peoples:t},e.name)}))})]})})},F=function(){var e=Object(b.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(b.useState)([]),l=Object(s.a)(r,2),i=l[0],j=l[1],d=Object(b.useState)(!1),u=Object(s.a)(d,2),x=u[0],f=u[1],v=Object(b.useState)(!1),g=Object(s.a)(v,2),N=g[0],w=g[1],y=Object(a.d)(),C=Object(s.a)(y,1)[0],S=C.get("query")||"",F=C.get("sex")||"",A=(C.getAll("centuries")||[]).map((function(e){return+e})),E=C.get("sort")||"",P=C.get("order")||"";return Object(b.useEffect)((function(){w(!0),f(!1),h().then((function(e){n(e),j(p(m(e,S,F,A),E,P))})).catch((function(){return f(!0)})).finally((function(){return w(!1)}))}),[]),Object(b.useEffect)((function(){var e=m(c,S,F,A);j(p(e,E,P))}),[C]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[!N&&Object(o.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(o.jsx)(L,{})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsx)("div",{className:"box table-container",children:N?Object(o.jsx)(O,{}):Object(o.jsxs)(o.Fragment,{children:[x&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",children:"Something went wrong"}),!x&&0===c.length&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!x&&0===i.length&&Object(o.jsx)("p",{children:"There are no people matching the current search criteria"}),Object(o.jsx)(k,{peoples:i})]})})})]})})]})},A=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(j,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{path:"/home",element:Object(o.jsx)(r.a,{to:"/",replace:!0})}),Object(o.jsx)(r.b,{path:"/",element:Object(o.jsx)(d,{})}),Object(o.jsx)(r.b,{path:"/people",children:Object(o.jsx)(r.b,{path:":slug?",element:Object(o.jsx)(F,{})})}),Object(o.jsx)(r.b,{path:"*",element:Object(o.jsx)(u,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsx)(a.a,{children:Object(o.jsx)(A,{})}))}},[[39,1,2]]]);
//# sourceMappingURL=main.9d337db1.chunk.js.map