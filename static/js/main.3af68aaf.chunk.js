(this.webpackJsonpfriends=this.webpackJsonpfriends||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(27)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){var n={"./boutriga.jpg":16,"./ghazi.jpg":17,"./hedi.jpg":18,"./iheb.jpg":19,"./mahmoud.jpg":20,"./marweni.jpg":21,"./nejib.jpg":22,"./petit.jpg":23,"./salem.jpg":24,"./semah.jpg":25,"./weal.jpg":26};function i(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=15},function(e,a,t){e.exports=t.p+"static/media/boutriga.4b93a344.jpg"},function(e,a,t){e.exports=t.p+"static/media/ghazi.9e15ad8a.jpg"},function(e,a,t){e.exports=t.p+"static/media/hedi.49250538.jpg"},function(e,a,t){e.exports=t.p+"static/media/iheb.b5c7ba6f.jpg"},function(e,a,t){e.exports=t.p+"static/media/mahmoud.48256990.jpg"},function(e,a,t){e.exports=t.p+"static/media/marweni.125f8761.jpg"},function(e,a,t){e.exports=t.p+"static/media/nejib.5821ae09.jpg"},function(e,a,t){e.exports=t.p+"static/media/petit.b37cf6d7.jpg"},function(e,a,t){e.exports=t.p+"static/media/salem.4e610273.jpg"},function(e,a,t){e.exports=t.p+"static/media/semah.82f9508d.jpg"},function(e,a,t){e.exports=t.p+"static/media/weal.d3faa937.jpg"},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(2),s=t.n(r);t(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(3),o=t(4),d=t(6),m=t(5),l=[{id:1,name:"Hedi Baklouti",des:"Girls Hunter",src:"hedi"},{id:2,name:"Salem Dahmani",des:"God",src:"salem"},{id:3,name:"Iheb Masmoudi",des:"100% noob",src:"iheb"},{id:4,name:"S\xe9mah Yaccoubi",des:"Fechel ",src:"semah"},{id:5,name:"Weal Dardouri",des:"Bedan",src:"weal"},{id:6,name:"Yassine Marweni ",des:"Rush B",src:"marweni"},{id:7,name:"Aziz Abidi",des:"Petit",src:"petit"},{id:8,name:"Mahmoud Boutriga ",des:"Beji Matrix",src:"boutriga"},{id:9,name:"Yassine Marweni ",des:"Rush B",src:"marweni"},{id:10,name:"Ghazi Massousi",des:"100% Lahas ",src:"ghazi"},{id:11,name:"Nejib Jr Machatt",des:"Jalel Brick",src:"nejib"},{id:12,name:"Mahmoud Baklouti",des:"All-Stars",src:"mahmoud"}];t(13),t(14);var u=function(e){return i.a.createElement("div",{className:"bg-light-green dib pa3 ma4 grow tc   shadow-5  br-74 image"},i.a.createElement("img",{className:"avatar",src:t(15)("./".concat(e.src,".jpg")),alt:"A Friend"}),i.a.createElement("h2",{className:"times"},e.name),i.a.createElement("p",{className:"fw5"},e.des))};var p=function(e){var a=e.Friend;return i.a.createElement("div",null,a.map((function(e,t){return i.a.createElement(u,{key:a[t].id,id:a[t].id,name:a[t].name,des:a[t].des,src:a[t].src})})))},h=function(e){e.finder;var a=e.big;return i.a.createElement("div",{className:"pa2 tc"},i.a.createElement("input",{className:"ba pa3 b--black bg-lightest-blue w5",type:"search",placeholder:"Search Salem'Friends",onChange:a}))},g=function(e){return i.a.createElement("div",{style:{overflowY:"scroll",height:"500px"}},e.children)},f=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).changer=function(a){e.setState({finder:a.target.value})},e.state={Friend:l,finder:""},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a=this.state.Friend.filter((function(a){return a.name.toLowerCase().includes(e.state.finder.toLowerCase())}));return i.a.createElement("div",{className:"tc "},i.a.createElement("h1",{className:"title"},"Salem's Friends "),i.a.createElement(h,{big:this.changer}),i.a.createElement(g,null,i.a.createElement(p,{Friend:a})))}}]),t}(n.Component);s.a.render(i.a.createElement(f,{Friend:!0}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.3af68aaf.chunk.js.map