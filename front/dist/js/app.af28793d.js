(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],f=0,m=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1bbd":function(t,e,n){},"2c51":function(t,e,n){},3511:function(t,e,n){t.exports=n.p+"img/nefty_logo.f199a4ff.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("router-view")],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("img",{attrs:{src:n("3511")}})])}],s={name:"App"},o=s,c=(n("034f"),n("2877")),l=Object(c["a"])(o,a,r,!1,null,null,null),u=l.exports,f=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.canClime?n("h1",[t._v("Clime")]):n("h1"),n("div",{staticClass:"nft_box"},[t._m(0),t._m(1),n("div",{staticClass:"inf"},[n("div",{staticClass:"title"},[n("h2",[t._v("LOS DROP")]),n("p",[t._v("Доступен: "+t._s(t.available_count)+"/1")]),n("p",[t._v("Вы можете забрать: "+t._s(t.available_count))])]),t._m(2),n("div",{staticClass:"timer"},[n("p",[t._v("МОЖНО ЗАБРАТЬ ЧЕРЕЗ")]),n("div",{staticClass:"btn"},[t.canClime?[n("div",[t._v(t._s(t.hours)+":"+t._s(t.minutes)+":"+t._s(t.seconds))])]:[n("div",{staticClass:"timer-btn",on:{click:function(e){return t.clime()}}},[t._v("ПОЛУЧИТЬ")])]],2)])])])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"author"},[n("p",[t._v("YAN SCHAFER")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"collection_image"},[i("img",{attrs:{src:n("b0ce")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"price"},[n("p",[t._v("СТОИМОСТЬ: "),n("span",[t._v("БЕСЦЕННО")])])])}],d=n("1da1"),p=(n("96cf"),{name:"Home",data:function(){return{time:null,hours:0,minutes:0,seconds:0,canClime:!1,available_count:1}},created:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,i,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.available_count=t.getAvailableCount(),n=Date.now(),i=new Date(2022,0,20,0,0,0,0),console.log(i.getTime()),console.log(n),a=i.getTime(),t.time=Math.floor((a-n)/1e3),t.time>0?r=setInterval((function(){t.time-=1,t.tic(),t.time<=0&&(t.time=0,clearInterval(r))}),1e3):t.canClime=!0;case 8:case"end":return e.stop()}}),e)})))()},methods:{tic:function(){this.hours=Math.floor(this.time/3600),this.hours<=9&&(this.hours="0"+String(this.hours));var t=3600*this.hours;this.minutes=Math.floor((this.time-t)/60),this.minutes<=9&&(this.minutes="0"+String(this.minutes));var e=60*this.minutes;this.seconds=this.time-t-e,this.seconds<=9&&(this.seconds="0"+String(this.seconds))},getAvailableCount:function(){var t=localStorage.getItem("available");return console.log(t),t?parseInt(t):(localStorage.setItem("available","1"),1)},clime:function(){console.log("claimed"),this.available_count=0,localStorage.setItem("available","0"),this.$router.push("/view")}}}),h=p,_=(n("65a8"),Object(c["a"])(h,m,v,!1,null,"2a5a82b2",null)),g=_.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h2",[t._v("LOS DROP COLLECTION")]),n("div",{staticClass:"col"},[n("div",{staticClass:"row"},[n("NftBox",{attrs:{description:"Описание",name:"LOS DROP",image:1}}),n("NftBox",{attrs:{description:"Описание",name:"LOS DROP",image:1}}),n("NftBox",{attrs:{description:"Описание",name:"LOS DROP",image:1}})],1),n("div",{staticClass:"row"},[n("NftBox",{attrs:{description:"Описание",name:"LOS DROP",image:1}}),n("NftBox",{attrs:{description:"Описание",name:"LOS DROP",image:1}}),n("NftBox",{attrs:{description:"Описание",name:"LOS DROP",image:1}})],1)])])},C=[],O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nft_box"},[t._m(0),i("div",{staticClass:"collection_image"},[1==t.image?i("img",{attrs:{id:"image",src:n("b0ce")}}):t._e()]),i("div",{staticClass:"inf"},[i("div",{staticClass:"title"},[i("h2",[t._v(t._s(t.name))]),i("p",[t._v(t._s(t.description))])]),i("div",{staticClass:"timer"},[i("div",{staticClass:"btn"},[i("div",{staticClass:"timer-btn",on:{click:function(e){return t.view()}}},[t._v("ПРОСМОТРЕТЬ")])])])])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"author"},[n("p",[t._v("YAN SCHAFER")])])}],x=(n("a9e3"),n("c82c")),S=n.n(x),y=(n("0808"),{name:"NftBox",props:{name:String,description:String,image:Number},mounted:function(){var t=new S.a(document.getElementById("image"),{inline:!1,toolbar:!1,navbar:!1,title:!1,loop:!1,viewed:function(){t.zoomTo(.5)}})},methods:{view:function(){document.getElementById("image").click()}}}),j=y,P=(n("dfa1"),Object(c["a"])(j,O,w,!1,null,"dfee1fdc",null)),E=P.exports,N={name:"CollectionView",components:{NftBox:E}},R=N,$=(n("7684"),Object(c["a"])(R,b,C,!1,null,null,null)),B=$.exports,D=new f["a"]({mode:"history",routes:[{path:"/",component:g},{path:"/view",component:B}]});i["a"].config.productionTip=!1,i["a"].use(f["a"]),new i["a"]({render:function(t){return t(u)},router:D}).$mount("#app")},"65a8":function(t,e,n){"use strict";n("1bbd")},7684:function(t,e,n){"use strict";n("2c51")},"85ec":function(t,e,n){},b0ce:function(t,e,n){t.exports=n.p+"img/collection_image.243450f2.jpg"},cd70:function(t,e,n){},dfa1:function(t,e,n){"use strict";n("cd70")}});
//# sourceMappingURL=app.af28793d.js.map