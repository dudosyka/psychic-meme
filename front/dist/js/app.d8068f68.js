(function(t){function e(e){for(var r,s,c=e[0],o=e[1],u=e[2],f=0,m=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"032e":function(t,e,n){"use strict";n("6f30")},"034f":function(t,e,n){"use strict";n("85ec")},"2c51":function(t,e,n){},3511:function(t,e,n){t.exports=n.p+"img/nefty_logo.f199a4ff.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("router-view")],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("img",{attrs:{src:n("3511")}})])}],s={name:"App"},c=s,o=(n("034f"),n("2877")),u=Object(o["a"])(c,i,a,!1,null,null,null),l=u.exports,f=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.canClime?n("h1",[t._v("Clime")]):n("h1"),n("div",{staticClass:"nft_box"},[t._m(0),t._m(1),n("div",{staticClass:"inf"},[n("div",{staticClass:"title"},[n("h2",[t._v("LOS DROP")]),n("p",[t._v("Доступен: "+t._s(t.available_count)+"/1")]),n("p",[t._v("Вы можете забрать: "+t._s(t.available_count))])]),t._m(2),n("div",{staticClass:"timer"},[n("p",[t._v("МОЖНО ЗАБРАТЬ ЧЕРЕЗ")]),n("div",{staticClass:"btn"},[t.canClime?[n("div",[t._v(t._s(t.hours)+":"+t._s(t.minutes)+":"+t._s(t.seconds))])]:[n("div",{staticClass:"timer-btn",on:{click:function(e){return t.clime()}}},[t._v("ПОЛУЧИТЬ")])]],2)])])])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"author"},[n("p",[t._v("YAN SCHAFER")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"collection_image"},[r("img",{attrs:{src:n("b0ce")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"price"},[n("p",[t._v("СТОИМОСТЬ: "),n("span",[t._v("БЕСЦЕННО")])])])}],v=n("1da1"),d=(n("96cf"),n("d4ec")),h=n("bee2"),g=n("bc3a"),_=n.n(g),b={apiUrl:"http://los.dudosyka.ru/api/",endTime:1642626e6},O=function(){function t(){Object(d["a"])(this,t)}return Object(h["a"])(t,[{key:"_get",value:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=b.apiUrl+e,t.next=3,_.a.get(n).then((function(t){return t})).catch((function(t){return console.log(t),t}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"time",value:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this._get("time");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"checkClaim",value:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this._get("canClaim");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),w={name:"Home",data:function(){return{time:null,hours:0,minutes:0,seconds:0,canClime:!1,available_count:1}},created:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var n,r,i,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.available_count=t.getAvailableCount(),n=new O,e.next=4,n.time().then((function(t){return parseInt(t)}));case 4:r=e.sent,i=new Date(2022,0,20,0,0,0,0),console.log(i.getTime()),console.log(r),a=i.getTime(),t.time=Math.floor((a-r)/1e3),t.time>0?s=setInterval((function(){t.time-=1,t.tic(),t.time<=0&&(t.time=0,clearInterval(s))}),1e3):t.canClime=!0;case 11:case"end":return e.stop()}}),e)})))()},methods:{tic:function(){this.hours=Math.floor(this.time/3600),this.hours<=9&&(this.hours="0"+String(this.hours));var t=3600*this.hours;this.minutes=Math.floor((this.time-t)/60),this.minutes<=9&&(this.minutes="0"+String(this.minutes));var e=60*this.minutes;this.seconds=this.time-t-e,this.seconds<=9&&(this.seconds="0"+String(this.seconds))},getAvailableCount:function(){var t=localStorage.getItem("available");return console.log(t),t?parseInt(t):(localStorage.setItem("available","1"),1)},clime:function(){console.log("claimed"),this.available_count=0,localStorage.setItem("available","0"),this.$router.push("/view")}}},C=w,x=(n("032e"),Object(o["a"])(C,m,p,!1,null,"28467868",null)),y=x.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h2",[t._v("LOS DROP COLLECTION")]),n("div",{staticClass:"col"},[n("div",{staticClass:"row"},[n("NftBox",{attrs:{description:"Описание",name:"LOS DROP",image:1}}),n("NftBox",{attrs:{description:"Описание",name:"LOS DROP",image:1}}),n("NftBox",{attrs:{description:"Описание",name:"LOS DROP",image:1}})],1),n("div",{staticClass:"row"},[n("NftBox",{attrs:{description:"Описание",name:"LOS DROP",image:1}}),n("NftBox",{attrs:{description:"Описание",name:"LOS DROP",image:1}}),n("NftBox",{attrs:{description:"Описание",name:"LOS DROP",image:1}})],1)])])},j=[],R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nft_box"},[t._m(0),r("div",{staticClass:"collection_image"},[1==t.image?r("img",{attrs:{id:"image",src:n("b0ce")}}):t._e()]),r("div",{staticClass:"inf"},[r("div",{staticClass:"title"},[r("h2",[t._v(t._s(t.name))]),r("p",[t._v(t._s(t.description))])]),r("div",{staticClass:"timer"},[r("div",{staticClass:"btn"},[r("div",{staticClass:"timer-btn",on:{click:function(e){return t.view()}}},[t._v("ПРОСМОТРЕТЬ")])])])])])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"author"},[n("p",[t._v("YAN SCHAFER")])])}],P=(n("a9e3"),n("c82c")),E=n.n(P),N=(n("0808"),{name:"NftBox",props:{name:String,description:String,image:Number},mounted:function(){var t=new E.a(document.getElementById("image"),{inline:!1,toolbar:!1,navbar:!1,title:!1,loop:!1,viewed:function(){t.zoomTo(.5)}})},methods:{view:function(){document.getElementById("image").click()}}}),$=N,B=(n("dfa1"),Object(o["a"])($,R,k,!1,null,"dfee1fdc",null)),I=B.exports,L={name:"CollectionView",components:{NftBox:I}},D=L,T=(n("7684"),Object(o["a"])(D,S,j,!1,null,null,null)),A=T.exports,M=new f["a"]({mode:"history",routes:[{path:"/",component:y},{path:"/view",component:A}]});r["a"].config.productionTip=!1,r["a"].use(f["a"]),new r["a"]({render:function(t){return t(l)},router:M}).$mount("#app")},"6f30":function(t,e,n){},7684:function(t,e,n){"use strict";n("2c51")},"85ec":function(t,e,n){},b0ce:function(t,e,n){t.exports=n.p+"img/collection_image.243450f2.jpg"},cd70:function(t,e,n){},dfa1:function(t,e,n){"use strict";n("cd70")}});
//# sourceMappingURL=app.d8068f68.js.map