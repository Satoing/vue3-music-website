(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3942e987"],{"3e8d":function(t,a,s){},b051:function(t,a,s){t.exports=s.p+"img/jackzhou.1c4be0c1.jpg"},d93f:function(t,a,s){"use strict";s("3e8d")},e6ea:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"recommend"},[t._m(0),s("div",{staticClass:"tab-container"},[s("div",{staticClass:"tab-bar"},[s("ul",t._l(t.tabItems,(function(a,i){return s("li",{key:i,class:a==t.tabActive?"tab-item active":"tab-item",on:{click:function(s){return t.changeActive(a)}}},[t._v(t._s(a))])})),0)]),s("div",{staticClass:"tab-content"},[s("div",{staticClass:"songs-wrap"},[s("div",{staticClass:"list"},[s("ul",t._l(t.songLists,(function(a,i){return s("li",{key:i,staticClass:"iconfont icon-play",on:{click:function(s){return t.toPlaylistDetail(a.id)}}},[s("p",{staticClass:"first-p"}),s("div",{staticClass:"img",style:"background-image: url("+(t.$store.state.baseURL+a.img)+");",attrs:{alt:"songLists"}}),s("p",{staticClass:"last-p"},[t._v(t._s(a.singerName))])])})),0)])])])])])},c=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"top-card-wrap"},[i("img",{staticClass:"bg-blur",attrs:{src:s("b051"),alt:"bg-blur"}}),i("div",{staticClass:"top-card"},[i("div",{staticClass:"img-wrap"},[i("img",{attrs:{src:s("b051"),alt:"img"}})]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"card-tag"},[t._v("歌手推荐")]),i("div",{staticClass:"card-title"},[t._v("周杰伦")]),i("div",{staticClass:"card-info"},[t._v(" 外文名：Jay Chou "),i("br"),t._v("别名：周董、President Chou "),i("br"),t._v("国籍：中国 "),i("br"),t._v("出生地：台湾省新北市 "),i("br"),t._v("职业：音乐人、制作人、导演、企业家等 "),i("br"),t._v("出生日期：1979年1月18日（农历腊月二十） "),i("br"),t._v("代表作品：《龙卷风》、《菊花台》、《青花瓷》、《晴天》 "),i("br"),t._v("主要成就：四届世界音乐大奖最畅销亚洲艺人、中华区8次年度销量冠军（最多）、悉尼演唱会票房美国公告牌第二、美国CNN亚洲最具影响力人物、2012年福布斯中国名人榜第一、MTV日本录影带奖亚洲杰出艺人、两届MTV亚洲大奖最受欢迎艺人、连续7年IFPI十大销量国语唱片、华语乐坛十年领袖人物、华语乐坛十年最佳男歌手、中国十大青年领袖、MTV亚洲大奖最受欢迎男歌手、美国MTV电影最佳新人提名、世界十大鬼才音乐人之一、QQ音乐年度盛典最佳全能艺人 "),i("br"),t._v("简介：周杰伦（Jay Chou），1979年1月18日出生于台湾省新北市，华语流行男歌手、演员、词曲创作人、MV及电影导演、编剧及制作人。2000年被吴宗宪发掘，发行首张个人专辑《Jay》。 ")])])])])}],n=s("7c15"),e={data:function(){return{songLists:[],tabActive:"全部",tabItems:["全部","男","女","中国","韩国","意大利","新加坡","美国","西班牙","日本"],total:0,page:1,pageSize:10,loading:!0}},components:{},methods:{toPlaylistDetail:function(t){this.$router.push("/artist?artistId=".concat(t))},changeActive:function(t){this.tabActive=t,t="全部"===this.tabActive?"":"男"===this.tabActive||"女"===this.tabActive?"search/sex/".concat(this.tabActive):"search/country/".concat(this.tabActive),this.getSongLists(t)},getSongLists:function(t){var a=this;this.loading=!0,Object(n["t"])(t).then((function(t){a.songLists=t.data.data,a.total=t.data.total})).then((function(){a.loading=!1}))}},created:function(){this.getSongLists("")}},o=e,r=(s("d93f"),s("2877")),l=Object(r["a"])(o,i,c,!1,null,"30a56e98",null);a["default"]=l.exports}}]);