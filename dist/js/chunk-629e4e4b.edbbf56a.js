(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-629e4e4b"],{"1d72":function(t,e,a){"use strict";a("dbc6")},"32df":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"playlist"},[a("div",{staticClass:"artist-info"},[a("div",{staticClass:"artist-img-wrap"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.playlistInfo.img,expression:"playlistInfo.img"}],attrs:{alt:""}})]),a("div",{staticClass:"artist-others"},[a("div",{staticClass:"artist-name"},[t._v(t._s(t.playlistInfo.username))]),a("div",{staticClass:"artsit-works"},[a("div",{staticClass:"artist-works-count"},[t._v(t._s(t.playlistInfo.signature))])])])]),a("div",{staticClass:"playlist-tabs-wrap"},[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"歌曲列表",name:"first"}},[a("div",{staticClass:"songs-table"},[a("el-table",{directives:[{name:"el-table-infinite-scroll",rawName:"v-el-table-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{data:t.tableData,stripe:"","infinite-scroll-delay":"500","infinite-scroll-disabled":"noMore"},on:{"row-dblclick":t.play}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),a("el-table-column",{attrs:{width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"img-wrap"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$store.state.baseURL+e.row.song.img,expression:"$store.state.baseURL+scope.row.song.img"}],attrs:{alt:""}}),a("p",{staticClass:"iconfont icon-play",on:{click:function(a){return t.play(e.row)}}})])]}}])}),a("el-table-column",{attrs:{prop:"song.songName",label:"歌曲",width:""}}),a("el-table-column",{attrs:{prop:"singer.singerName",label:"歌手",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{cursor:"pointer",color:"#2980b9"},on:{click:function(a){return t.$router.push("/artist?artistId="+e.row.singer.id)}}},[t._v(t._s(e.row.singer.singerName))]),a("span",{staticClass:"plus",staticStyle:{top:"20px",color:"red"},attrs:{title:"取消收藏"},on:{click:function(a){return t.dropFromCollection(e.row)}}},[t._v("❤")])]}}])})],1)],1)])],1)],1)])},i=[],o=a("b85c"),n=(a("d3b7"),a("3ca3"),a("ddb0"),a("99af"),a("521e")),l=a("7c15"),r={data:function(){return{activeName:"first",playlistInfo:{},trackIds:[],tableData:[],total:0,pageSize:10,page:1,playlistId:"",loading:!0,loadBegin:0,allData:[],showAddBall:!1,songList:[]}},components:{},directives:{"el-table-infinite-scroll":n["a"]},created:function(){console.log(this.$route.query.id);var t=this.$route.query.id;this.playlistId=t,this.getTableData()},computed:{noMore:function(){return this.tableData.length>=this.trackIds.length},nowIndex:function(){return this.$store.state.nowIndex},musicQueue:function(){return this.$store.state.musicQueue},queuePos:function(){return this.$store.state.queuePos}},methods:{dropFromCollection:function(t){var e=this,a={cid:localStorage.uid,sid:t.song.id};Object(l["h"])(a).then((function(){Object(l["l"])(localStorage.uid).then((function(t){e.songList=t.data.data.songList})),e.$message({showClose:!0,message:"已取消收藏",type:"success"}),e.$router.go(0)}))},toArtist:function(t){this.$router.push("/artist?artistId=".concat(t))},handleCurrentChange:function(t){this.page=t},loadMore:function(){console.log("滚动加载"),this.loading=!0,this.loadBegin+=20,this.getTableData()},beginAnimation:function(t,e){var a=this;this.showAddBall=!0;var s=this.queuePos.left,i=this.queuePos.top;console.log("起始位置 x:"+t+" y:"+e),console.log("终点位置 x:"+s+" y:"+i);var o=document.querySelector(".add-ball");o.style.left=t+"px",o.style.top=e+"px",setTimeout((function(){o.style.left=s+"px",o.style.top=i+"px"}),0),setTimeout((function(){a.showAddBall=!1}),500)},getTableData:function(){var t=this;Object(l["l"])(localStorage.uid).then((function(e){t.playlistInfo=e.data.data.client,t.playlistInfo.img=t.$store.state.baseURL+t.playlistInfo.img,t.songList=e.data.data.songList,Promise.all([t.getTracks(!1)]).then((function(){console.log("1111")}))})).then((function(){t.loading=!1}))},getTracks:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[];e=this.songList,t?this.allData=this.allData.concat(e):this.tableData=this.tableData.concat(e)},play:function(t){console.log(t),this.songUrl=t.song.url;var e={imgUrl:t.song.img,artistInfo:t.singer.singerName,songName:t.song.songName,id:t.song.id};this.$store.commit("changeMusicUrl",this.songUrl),this.$store.commit("changeMusicInfo",e),this.$store.commit("changeMusicStatus",!1),this.$store.commit("changeMusicQueue",e);var a,s=[],i=Object(o["a"])(this.musicQueue);try{for(i.s();!(a=i.n()).done;){var n=a.value;s.push(n.id)}}catch(l){i.e(l)}finally{i.f()}this.$store.commit("changeNowIndex",s.indexOf(e.id))}}},c=r,u=(a("1d72"),a("2877")),d=Object(u["a"])(c,s,i,!1,null,"7df5572e",null);e["default"]=d.exports},dbc6:function(t,e,a){}}]);