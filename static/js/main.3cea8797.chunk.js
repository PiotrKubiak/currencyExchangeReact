(this["webpackJsonpconverter-react"]=this["webpackJsonpconverter-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(4),s=n.n(a),o=(n(9),n(2)),l=(n(10),[{short:"EUR",name:"EURO",rate:"4.59"},{short:"GBP",name:"FUNT BRYTYJSKI",rate:"5.34"},{short:"USD",name:"DOLAR USA",rate:"3.90"},{short:"NOK",name:"KORONA NORWESKA",rate:"0.44"},{short:"SEK",name:"KORONA SZWEDZKA",rate:"0.45"},{short:"CHF",name:"FRANK SZWAJCARSKI",rate:"4.23"}]),u=(n(11),n(0)),i=function(e){var t=e.result;return Object(u.jsx)("p",{className:"result",children:void 0!==t&&Object(u.jsxs)(u.Fragment,{children:[t.sourceAmount.toFixed(2),"\xa0PLN\xa0=\xa0",Object(u.jsxs)("strong",{children:[t.targetAmount.toFixed(2),"\xa0",t.currency]})]})})},j=(n(13),function(e){var t=e.calculateResult,n=e.result,c=Object(r.useState)(l[0].short),a=Object(o.a)(c,2),s=a[0],j=a[1],b=Object(r.useState)(""),h=Object(o.a)(b,2),m=h[0],O=h[1];return Object(u.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(s,m)},children:[Object(u.jsx)("h1",{className:"form__header",children:"\ud83e\udd11 KALKULATOR WALUT \ud83e\udd11"}),Object(u.jsx)("p",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{className:"form__labelText"}),Object(u.jsx)("input",{value:m,onChange:function(e){var t=e.target;return O(t.value)},placeholder:"Wprowad\u017a kwot\u0119 w PLN",className:"form__field",type:"number",required:!0,step:"0.01"})]})}),Object(u.jsx)("p",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{className:"form__labelText",children:"Waluta:"}),Object(u.jsx)("select",{className:"form__field",value:s,onChange:function(e){var t=e.target;return j(t.value)},children:l.map((function(e){return Object(u.jsx)("option",{value:e.short,children:e.name},e.short)}))})]})}),Object(u.jsx)("p",{children:Object(u.jsx)("button",{className:"form__button",children:"Przelicz"})}),Object(u.jsxs)("p",{className:"form__info",children:["Kursy pochodz\u0105 z: ",Object(u.jsx)("a",{href:"https://mybank.pl/kursy-walut/",children:"mybank.pl"})," ","z dnia 11.07.2021"]}),Object(u.jsx)(i,{result:n})]})});var b=function(){var e=Object(r.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(j,{result:n,calculateResult:function(e,t){var n=l.find((function(t){return t.short===e})).rate;c({sourceAmount:+t,targetAmount:t/n,currency:e})}})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),h()}],[[14,1,2]]]);
//# sourceMappingURL=main.3cea8797.chunk.js.map