(this["webpackJsonpconverter-react"]=this["webpackJsonpconverter-react"]||[]).push([[0],{22:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i,s,u,l,b=t(0),d=t(9),j=t.n(d),h=t(4),p=[{short:"EUR",name:"EURO",rate:"4.59"},{short:"GBP",name:"FUNT BRYTYJSKI",rate:"5.34"},{short:"USD",name:"DOLAR USA",rate:"3.90"},{short:"NOK",name:"KORONA NORWESKA",rate:"0.44"},{short:"SEK",name:"KORONA SZWEDZKA",rate:"0.45"},{short:"CHF",name:"FRANK SZWAJCARSKI",rate:"4.23"}],O=t(3),x=t(2),g=x.c.p(r||(r=Object(O.a)(["\n  color: ",";\n  text-align: center;\n  font-size: 22px;\n"])),(function(n){return n.theme.color.black})),m=t(1),f=function(n){var e=n.result;return Object(m.jsx)(g,{children:void 0!==e&&Object(m.jsxs)(m.Fragment,{children:[e.sourceAmount.toFixed(2),"\xa0PLN\xa0="," ",Object(m.jsxs)("strong",{children:[e.targetAmount.toFixed(2),"\xa0",e.currency]})]})})},v=x.c.span(c||(c=Object(O.a)(["\n  width: 100%;\n  max-width: 200px;\n  display: inline-block;\n  margin-right: 10px;\n"]))),k=x.c.input(a||(a=Object(O.a)(["\n  width: 100%;\n  border: none;\n  border-radius: 8px;\n  padding: 12px;\n"]))),w=x.c.button(o||(o=Object(O.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  width: 50%;\n  padding: 12px 32px;\n  margin: 0 auto;\n  border-radius: 4px;\n  background-color: ",";\n  color: ",";\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.3s ease-in-out, transform 0.3s linear;\n\n  &:hover {\n    filter: brightness(110%);\n    transform: scale(1.2);\n  }\n  &:activ {\n    filter: brightness(110%);\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.black})),F=x.c.h1(i||(i=Object(O.a)(["\n  margin: 20 auto;\n  text-align: center;\n"]))),A=x.c.p(s||(s=Object(O.a)(["\n  text-align: center;\n  padding: 8px;\n  font-size: 16px;\n  color: ",";\n"])),(function(n){return n.theme.color.emperor})),y=function(n){var e=n.calculateResult,t=n.result,r=Object(b.useState)(p[0].short),c=Object(h.a)(r,2),a=c[0],o=c[1],i=Object(b.useState)(""),s=Object(h.a)(i,2),u=s[0],l=s[1];return Object(m.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(a,u)},children:[Object(m.jsx)(F,{children:"KALKULATOR WALUT"}),Object(m.jsx)("p",{children:Object(m.jsxs)("label",{children:[Object(m.jsx)(v,{children:"PLN*:"}),Object(m.jsx)(k,{value:u,onChange:function(n){var e=n.target;return l(e.value)},placeholder:"Wprowad\u017a kwot\u0119 w z\u0142ot\xf3wkach",type:"number",required:!0,step:"0.01"})]})}),Object(m.jsx)("p",{children:Object(m.jsxs)("label",{children:[Object(m.jsx)(v,{children:"Waluta:"}),Object(m.jsx)(k,{as:"select",value:a,onChange:function(n){var e=n.target;return o(e.value)},children:p.map((function(n){return Object(m.jsx)("option",{value:n.short,children:n.name},n.short)}))})]})}),Object(m.jsx)("p",{children:Object(m.jsx)(w,{children:"Przelicz"})}),Object(m.jsxs)(A,{children:["Kursy pochodz\u0105 z: ",Object(m.jsx)("a",{href:"https://mybank.pl/kursy-walut/",children:"mybank.pl"})," ","z dnia 11.07.2021"]}),Object(m.jsx)(f,{result:t})]})},S=x.c.div(u||(u=Object(O.a)(["\n  text-align: right;\n  font-family: monospace;\n  color: ",";\n"])),(function(n){return n.theme.color.black})),z=function(n){return n.toLocaleString(void 0,{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"})},K=function(){var n=function(){var n=Object(b.useState)(new Date),e=Object(h.a)(n,2),t=e[0],r=e[1];return Object(b.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(n)}}),[]),t}();return Object(m.jsxs)(S,{children:["Dzisiaj jest ",z(n)]})},R=x.c.div(l||(l=Object(O.a)(["\n  flex-basis: 800px;\n  margin: 15px;\n  padding: 20px;\n  background-color: ",";\n  box-shadow: 0 0 40px ",";\n  border-radius: 15px;\n"])),(function(n){return n.theme.color.cararra}),(function(n){return n.theme.color.white}));var E,L=function(){var n=Object(b.useState)(),e=Object(h.a)(n,2),t=e[0],r=e[1];return Object(m.jsxs)(R,{className:"app",children:[Object(m.jsx)(K,{}),Object(m.jsx)(y,{result:t,calculateResult:function(n,e){var t=p.find((function(e){return e.short===n})).rate;r({sourceAmount:+e,targetAmount:e/t,currency:n})}})]})},N=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))},D=t.p+"static/media/background.912a292f.jpg",C=Object(x.b)(E||(E=Object(O.a)(['\nhtml {\n        box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    #root {\n        display: grid;\n        place-items: center;\n        height: 100vh;\n        background-image: url("','");\n        background-size: cover;\n        background-position: center;\n        font-family: "Poppins", sans-serif;\n    }\n'])),D);j.a.render(Object(m.jsxs)(x.a,{theme:{color:{black:"#000000",white:"#FFFFFF",cararra:"#EFEEEB",emperor:"#514649"}},children:[Object(m.jsx)(C,{}),Object(m.jsx)(L,{})]}),document.getElementById("root")),N()}},[[22,1,2]]]);
//# sourceMappingURL=main.5a9c5778.chunk.js.map