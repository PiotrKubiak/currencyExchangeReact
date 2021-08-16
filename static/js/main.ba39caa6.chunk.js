(this["webpackJsonpconverter-react"]=this["webpackJsonpconverter-react"]||[]).push([[0],{22:function(e,n,t){"use strict";t.r(n);var r,c,a,o,i,s,u,l,d=t(0),j=t.n(d),b=t(9),h=t.n(b),O=t(4),p=[{short:"EUR",name:"EURO",rate:"4.59"},{short:"GBP",name:"FUNT BRYTYJSKI",rate:"5.34"},{short:"USD",name:"DOLAR USA",rate:"3.90"},{short:"NOK",name:"KORONA NORWESKA",rate:"0.44"},{short:"SEK",name:"KORONA SZWEDZKA",rate:"0.45"},{short:"CHF",name:"FRANK SZWAJCARSKI",rate:"4.23"}],x=t(2),m=t(3),f=m.a.p(r||(r=Object(x.a)(["\n  color: ",";\n  text-align: center;\n  font-size: 22px;\n"])),(function(e){return e.theme.color.black})),g=t(1),v=function(e){var n=e.result;return Object(g.jsx)(f,{children:void 0!==n&&Object(g.jsxs)(g.Fragment,{children:[n.sourceAmount.toFixed(2),"\xa0PLN\xa0="," ",Object(g.jsxs)("strong",{children:[n.targetAmount.toFixed(2),"\xa0",n.currency]})]})})},w=m.a.span(c||(c=Object(x.a)(["\n  width: 100%;\n  max-width: 200px;\n  display: inline-block;\n  margin-right: 10px;\n"]))),A=m.a.input(a||(a=Object(x.a)(["\n  width: 100%;\n  border: none;\n  border-radius: 8px;\n  padding: 12px;\n"]))),S=m.a.button(o||(o=Object(x.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  width: 50%;\n  padding: 12px 32px;\n  margin: 0 auto;\n  border-radius: 4px;\n  background-color: ",";\n  color: ",";\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.3s ease-in-out, transform 0.3s linear;\n\n  &:hover {\n    filter: brightness(110%);\n    transform: scale(1.2);\n  }\n  &:activ {\n    filter: brightness(110%);\n  }\n"])),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.black})),k=m.a.h1(i||(i=Object(x.a)(["\n  margin: 20 auto;\n  text-align: center;\n"]))),y=m.a.p(s||(s=Object(x.a)(["\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  color: ",";\n"])),(function(e){return e.theme.color.emperor})),K=function(e){var n=e.calculateResult,t=e.result,r=Object(d.useState)(p[0].short),c=Object(O.a)(r,2),a=c[0],o=c[1],i=Object(d.useState)(""),s=Object(O.a)(i,2),u=s[0],l=s[1];return Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(a,u)},children:[Object(g.jsx)(k,{children:"KALKULATOR WALUT"}),Object(g.jsx)("p",{children:Object(g.jsxs)("label",{children:[Object(g.jsx)(w,{children:"PLN*:"}),Object(g.jsx)(A,{value:u,onChange:function(e){var n=e.target;return l(n.value)},placeholder:"Wprowad\u017a kwot\u0119 w z\u0142ot\xf3wkach",type:"number",required:!0,step:"0.01"})]})}),Object(g.jsx)("p",{children:Object(g.jsxs)("label",{children:[Object(g.jsx)(w,{children:"Waluta:"}),Object(g.jsx)(A,{as:"select",value:a,onChange:function(e){var n=e.target;return o(n.value)},children:p.map((function(e){return Object(g.jsx)("option",{value:e.short,children:e.name},e.short)}))})]})}),Object(g.jsx)("p",{children:Object(g.jsx)(S,{children:"Przelicz"})}),Object(g.jsxs)(y,{children:["Kursy pochodz\u0105 z: ",Object(g.jsx)("a",{href:"https://mybank.pl/kursy-walut/",children:"mybank.pl"})," ","z dnia 11.07.2021"]}),Object(g.jsx)(v,{result:t})]})},R=m.a.div(u||(u=Object(x.a)(["\n  text-align: right;\n  font-family: monospace;\n  color: ",";\n"])),(function(e){return e.theme.color.black})),F=function(e){return e.toLocaleString(void 0,{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"})},z=function(){var e=Object(d.useState)(new Date),n=Object(O.a)(e,2),t=n[0],r=n[1];return Object(d.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(g.jsxs)(R,{children:["Dzisiaj jest ",F(t)]})},L=m.a.div(l||(l=Object(x.a)(["\n  flex-basis: 800px;\n  margin: 15px;\n  padding: 20px;\n  background-color: ",";\n  box-shadow: 0 0 40px ",";\n  border-radius: 15px;\n"])),(function(e){return e.theme.color.cararra}),(function(e){return e.theme.color.white}));var N=function(){var e=Object(d.useState)(),n=Object(O.a)(e,2),t=n[0],r=n[1];return Object(g.jsxs)(L,{className:"app",children:[Object(g.jsx)(z,{}),Object(g.jsx)(K,{result:t,calculateResult:function(e,n){var t=p.find((function(n){return n.short===e})).rate;r({sourceAmount:+n,targetAmount:n/t,currency:e})}})]})},D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),r(e),c(e),a(e),o(e)}))};h.a.render(Object(g.jsx)(j.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root")),D()}},[[22,1,2]]]);
//# sourceMappingURL=main.ba39caa6.chunk.js.map