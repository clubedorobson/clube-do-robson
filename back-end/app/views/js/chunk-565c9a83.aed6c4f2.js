(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-565c9a83"],{"12d1":function(t,a,s){},4024:function(t,a,s){"use strict";s("12d1")},df08:function(t,a,s){"use strict";s.r(a);var e,n,r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.currentClube?s("div",[s("b-card-group",{attrs:{deck:""}},[t.seasonalData?s("b-card",[s("strong",[t._v("Histórico Geral")]),s("p"),s("span",{staticClass:"leftFix"},[t._v("Jogos")]),t._v(" "),s("span",{staticClass:"rightFix"},[t._v(t._s(t.seasonalData.totalgames))]),s("br"),s("span",{staticClass:"leftFix"},[t._v("Vitórias")]),t._v(" "),s("span",{staticClass:"rightFix"},[t._v(t._s(t.seasonalData.wins))]),s("br"),s("span",{staticClass:"leftFix"},[t._v("Empates")]),t._v(" "),s("span",{staticClass:"rightFix"},[t._v(t._s(t.seasonalData.wins))]),s("br"),s("span",{staticClass:"leftFix"},[t._v("Derrotas")]),t._v(" "),s("span",{staticClass:"rightFix"},[t._v(t._s(t.seasonalData.losses))])]):t._e(),s("b-card",[null!=t.seasonalData?s("line-chart",{staticClass:"pie",attrs:{chartData:t.chartData,options:t.chartOptions}}):t._e()],1)],1),s("b-card-group",{attrs:{deck:""}},[t.seasonalData?s("b-card",[s("strong",[t._v("Desempenho")]),s("p"),s("span",{staticClass:"leftFix"},[t._v("Gols marcados")]),t._v(" "),s("span",{staticClass:"rightFix"},[t._v(t._s(t.seasonalData.alltimegoals))]),s("br"),s("span",{staticClass:"leftFix"},[t._v("Gols sofridos")]),t._v(" "),s("span",{staticClass:"rightFix"},[t._v(t._s(t.seasonalData.alltimegoalsagainst))]),s("br"),s("span",{staticClass:"leftFix"},[t._v("Pontos no ranking")]),t._v(" "),s("span",{staticClass:"rightFix"},[t._v(t._s(t.seasonalData.rankingpoints))]),s("br"),s("span",{staticClass:"leftFix"},[t._v("Reputação")]),t._v(" "),s("span",{staticClass:"rightFix"},[t._v(t._s(t.seasonalData.starlevel))])]):t._e(),s("b-card",[s("strong",[t._v("Temporadas")]),s("p"),s("span",{staticClass:"leftFix"},[t._v("Total de temporadas")]),t._v(" "),s("span",{staticClass:"rightFix"},[t._v(t._s(t.seasonalData.seasons))]),s("br"),s("span",{staticClass:"leftFix"},[t._v("Total de Títulos")]),t._v(" "),s("span",{staticClass:"rightFix"},[t._v(t._s(t.seasonalData.titleswon))]),s("br"),s("span",{staticClass:"leftFix"},[t._v("Melhor divisão")]),t._v(" "),s("span",{staticClass:"rightFix"},[t._v(t._s(t.seasonalData.bestdivision))]),s("br"),s("span",{staticClass:"leftFix"},[t._v("Melhor pontuação")]),t._v(" "),s("span",{staticClass:"rightFix"},[t._v(t._s(t.seasonalData.bestpoints))]),s("br"),s("span",{staticClass:"leftFix"},[t._v("Acessos")]),t._v(" "),s("span",{staticClass:"rightFix"},[t._v(t._s(t.seasonalData.promotions))]),s("br"),s("span",{staticClass:"leftFix"},[t._v("Rebaixamentos")]),t._v(" "),s("span",{staticClass:"rightFix"},[t._v(t._s(t.seasonalData.relegations))]),s("br")])],1)],1):t._e()},l=[],i=(s("96cf"),s("1da1")),o=s("d4ec"),c=s("bee2"),u=s("c427"),p=function(){function t(){Object(o["a"])(this,t)}return Object(c["a"])(t,[{key:"getAll",value:function(){return u["a"].get("/tutorials")}},{key:"get",value:function(t){return u["a"].get("/clubes/".concat(t))}},{key:"create",value:function(t){return u["a"].post("/tutorials",t)}},{key:"update",value:function(t,a){return u["a"].put("/tutorials/".concat(t),a)}},{key:"delete",value:function(t){return u["a"].delete("/tutorials/".concat(t))}},{key:"deleteAll",value:function(){return u["a"].delete("/tutorials")}},{key:"findByTitle",value:function(t){return u["a"].get("/tutorials?title=".concat(t))}}]),t}(),v=new p,_=function(){function t(){Object(o["a"])(this,t)}return Object(c["a"])(t,[{key:"getAll",value:function(){return console.log("clubId"),u["a"].get("/seasonals")}},{key:"get",value:function(t){return console.log(t),u["a"].get("/robsoners/".concat(t))}},{key:"create",value:function(t){return u["a"].post("/tutorials",t)}},{key:"update",value:function(t,a){return u["a"].put("/tutorials/".concat(t),a)}},{key:"delete",value:function(t){return u["a"].delete("/tutorials/".concat(t))}},{key:"deleteAll",value:function(){return u["a"].delete("/tutorials")}},{key:"findByTitle",value:function(t){return u["a"].get("/tutorials?title=".concat(t))}}]),t}(),g=new _,d=s("1fca"),f={extends:d["a"],props:{chartData:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){console.log(this.chartData),console.log(this.options),this.renderChart(this.chartData,this.options)}},h=f,b=s("2877"),x=Object(b["a"])(h,e,n,!1,null,null,null),C=x.exports,D={name:"clube",components:{LineChart:C},data:function(){return{currentClube:null,seasonalData:null,message:"",chartOptions:{title:{display:!1}},chartData:{}}},methods:{getClube:function(t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,v.get(t);case 2:e=s.sent,a.currentClube=e.data,console.log(a.currentClube);case 5:case"end":return s.stop()}}),s)})))()},getSeasonal:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,g.getAll();case 2:s=a.sent,t.seasonalData=s.data,console.log(t.seasonalData),t.chartData["datasets"]=[],t.chartData["datasets"].push({backgroundColor:["rgba(22, 204, 28, 0.7)","rgba(232, 232, 16,0.7)","rgba(232, 16, 23,0.7)"],label:"",data:[t.seasonalData.wins,t.seasonalData.ties,t.seasonalData.losses]}),t.chartData.labels=["Vitórias","Empates","Derrotas"];case 8:case"end":return a.stop()}}),a)})))()}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.message="",a.next=3,t.getClube(t.$route.params.id);case 3:return a.next=5,t.getSeasonal();case 5:case"end":return a.stop()}}),a)})))()}},m=D,F=(s("4024"),Object(b["a"])(m,r,l,!1,null,null,null));a["default"]=F.exports}}]);
//# sourceMappingURL=chunk-565c9a83.aed6c4f2.js.map