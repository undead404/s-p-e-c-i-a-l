(function(t){function e(e){for(var r,o,a=e[0],u=e[1],c=e[2],l=0,f=[];l<a.length;l++)o=a[l],s[o]&&f.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},s={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),s=n.n(r);s.a},"49f4":function(t,e){t.exports=[{id:1,property:"s",value:4,above:1,text:"Можеш самотужки пересунути диван з одного кутка кімнати в інший?"},{id:2,property:"p",value:4,above:0,text:"Можеш не помітити звук дверного дзвінка?"}]},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"SPECIAL logo",src:"SPECIAL.png"}}),n("Character")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"character"},[n("div",{staticClass:"status"},[n("div",[n("span",{staticClass:"letter"},[t._v("S")]),t._v("\n      "+t._s(this.special.s)+"\n    ")]),n("div",[n("span",{staticClass:"letter"},[t._v("P")]),t._v("\n      "+t._s(this.special.p)+"\n    ")]),n("div",[n("span",{staticClass:"letter"},[t._v("E")]),t._v("\n      "+t._s(this.special.e)+"\n    ")]),n("div",[n("span",{staticClass:"letter"},[t._v("C")]),t._v("\n      "+t._s(this.special.c)+"\n    ")]),n("div",[n("span",{staticClass:"letter"},[t._v("I")]),t._v("\n      "+t._s(this.special.i)+"\n    ")]),n("div",[n("span",{staticClass:"letter"},[t._v("A")]),t._v("\n      "+t._s(this.special.a)+"\n    ")]),n("div",[n("span",{staticClass:"letter"},[t._v("L")]),t._v("\n      "+t._s(this.special.l)+"\n    ")])]),n("div",{staticClass:"question-text"},[t._v(t._s(this.currentQuestionText))]),n("div",{staticClass:"btns"},[n("button",{on:{click:this.yes}},[t._v("Yes")]),n("button",{on:{click:this.no}},[t._v("No")]),n("button",{on:{click:this.notSure}},[t._v("Not sure")])])])},a=[],u=n("cebc"),c=n("75fc"),p=n("5d73"),l=n.n(p),f=0,h=1;function v(t){var e={s:[-1/0,1/0],p:[-1/0,1/0],e:[-1/0,1/0],c:[-1/0,1/0],i:[-1/0,1/0],a:[-1/0,1/0],l:[-1/0,1/0]};if(t.length<2)return!0;var n=!0,r=!1,s=void 0;try{for(var i,o=l()(t);!(n=(i=o.next()).done);n=!0){var a=i.value;if(a.from){if(e[a.property][h]<a.from)return!1;e[a.property][f]=a.from}if(a.to){if(e[a.property][f]>a.to)return!1;e[a.property][h]=a.to}}}catch(u){r=!0,s=u}finally{try{n||null==o.return||o.return()}finally{if(r)throw s}}return!0}var d=n("d225"),b=n("b0b4"),y=function(){function t(e){Object(d["a"])(this,t),this.above=e.above,this.asked=!1,this.property=e.property,this.text=e.text,this.value=e.value}return Object(b["a"])(t,[{key:"getConstraint",value:function(t){return this.above&&t||!this.above&&!t?{from:this.value,property:this.property}:{property:this.property,to:this.value}}}]),t}(),_=n("49f4"),g=n.n(_);console.info(g.a);var C={computed:{constraints:function(){return[].concat(Object(c["a"])(this.agreed.map(function(t){return t.getConstraint(!0)})),Object(c["a"])(this.disagreed.map(function(t){return t.getConstraint(!1)})))},currentQuestionText:function(){return void 0===this.currentQuestion?"No more questions":this.currentQuestion.text}},created:function(){this.showNextQuestion()},data:function(){return{agreed:[],currentQuestion:void 0,disagreed:[],questions:g.a.map(function(t){return new y(t)}),special:{s:5,p:5,e:5,c:5,i:5,a:5,l:5}}},methods:{applyConstraint:function(t){var e={};t.from&&this.special[t.property]<t.from&&(e[t.property]=t.from),t.to&&this.special[t.property]>t.to&&(e[t.property]=t.to),this.special=Object(u["a"])({},this.special,e)},canBeAsked:function(t){return v([].concat(Object(c["a"])(this.constraints),[t.getConstraint(!0)]))&&v([].concat(Object(c["a"])(this.constraints),[t.getConstraint(!1)]))},no:function(){this.applyConstraint(this.currentQuestion.getConstraint(!1)),this.disagreed.push(this.currentQuestion),this.showNextQuestion()},notSure:function(){this.showNextQuestion()},showNextQuestion:function(){var t=this;this.currentQuestion&&(this.currentQuestion.asked=!0);var e=this.questions.filter(function(e){return!e.asked&&t.canBeAsked(e)});0===e.length&&(this.currentQuestion=void 0),this.currentQuestion=e[Math.floor(Math.random()*e.length)]},yes:function(){this.applyConstraint(this.currentQuestion.getConstraint(!0)),this.agreed.push(this.currentQuestion),this.showNextQuestion()}},name:"Character",props:{}},m=C,x=(n("bee3"),n("2877")),O=Object(x["a"])(m,o,a,!1,null,"402017d2",null);O.options.__file="Character.vue";var Q=O.exports,j={name:"app",components:{Character:Q}},w=j,k=(n("034f"),Object(x["a"])(w,s,i,!1,null,null,null));k.options.__file="App.vue";var S=k.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(S)}}).$mount("#app")},"64a9":function(t,e,n){},"8bdc":function(t,e,n){},bee3:function(t,e,n){"use strict";var r=n("8bdc"),s=n.n(r);s.a}});
//# sourceMappingURL=app.561c8899.js.map