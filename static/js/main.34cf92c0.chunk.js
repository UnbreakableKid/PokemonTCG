(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n(0),a=n.n(c),s=n(63),o=n.n(s),l=(n(77),n(4)),i=(n(78),function(e){var t=e.card,n=e.imageURL,c="https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/?cardName=".concat(t.name||"","&evolvesFrom=").concat(t.evolvesFrom||"","&particularArtist=").concat(t.artist||"");return Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"block h-full",target:"_blank",href:c,rel:"noopener noreferrer",children:Object(r.jsx)("img",{className:"w-full h-auto",src:n,alt:"".concat(t.name," Pok\xe9mon Card")})})})}),u=function(e){var t=e.cards;return t.length>0?Object(r.jsx)("ul",{className:"m-5 overflow-y-scroll grid gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",children:t&&t.map((function(e){return Object(r.jsx)(i,{card:e,imageURL:e.imageUrl},e.id)}))}):Object(r.jsxs)("div",{className:"flex flex-grow justify-center items-center",children:[" ",Object(r.jsx)("h1",{className:"text-black text-2xl font-light",children:" No Results"})]})},d=n(12),p=n(17),f=n.n(p),j=n(28),m=n(29),x=n.n(m),b=n(113),h=n(114),g=n(112),v=function(e){var t=e.onInputChange,n=a.a.useState([]),c=Object(l.a)(n,2),s=c[0],o=c[1];return a.a.useEffect((function(){(function(){var e=Object(j.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.pokemontcg.io/v1/types");case 3:t=e.sent,n=t.data,o(n.types),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsx)("div",{className:"w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 p-5",children:s.map((function(e){return Object(r.jsxs)("label",{className:"flex justify-between border rounded py-1 px-2 cursor-pointer text-".concat(e.toLowerCase()," border-").concat(e.toLowerCase()),children:[" ",Object(r.jsx)("span",{children:e}),Object(r.jsx)(g.a,{name:"pokemonType",value:e,onChange:t})]},e)}))})},O=function(e){var t=e.setCards,n=function(){var e=Object(j.a)(f.a.mark((function e(n){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t([]),e.prev=2,e.next=5,x.a.get("https://api.pokemontcg.io/v1/cards?name=".concat(i,"&types=").concat(g.join(",")||""));case 5:r=e.sent,c=r.data,t(c.cards),u(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),s=a.a.useState(""),o=Object(l.a)(s,2),i=o[0],u=o[1],p=a.a.useState([]),m=Object(l.a)(p,2),g=m[0],O=m[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(f.a.mark((function e(){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.pokemontcg.io/v1/cards?pageSize=50");case 3:n=e.sent,r=n.data,t(r.cards),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(r.jsxs)("form",{className:"flex flex-col items-center my-5",onSubmit:n,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(b.a,{className:"border border-grey-500 rounded shadow h-full flex-grow p-1",type:"text",value:i,onChange:function(e){return u(e.target.value)}}),Object(r.jsx)(h.a,{className:"bg-blue-700 text-white border rounded shadow px-2 ml-2 h-full",type:"submit",children:"Search"})]}),Object(r.jsx)(v,{onInputChange:function(e){var t=e.target,n=t.value,r=t.checked;O(r?function(e){return[].concat(Object(d.a)(e),[n])}:g.filter((function(e){return e!==n})))}})]})};var w=function(){var e=a.a.useState([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{className:"flex flex-col",children:[Object(r.jsx)("div",{className:"flex justify-center bg-red-700",children:Object(r.jsx)("h1",{className:"text-3xl text-white py-2",children:"Pokemon"})}),Object(r.jsxs)("div",{className:"flex flex-col",children:[Object(r.jsx)(O,{setCards:c}),Object(r.jsx)(u,{cards:n})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root")),k()},77:function(e,t,n){},78:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.34cf92c0.chunk.js.map