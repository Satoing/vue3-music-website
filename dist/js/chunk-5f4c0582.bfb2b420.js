(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f4c0582"],{"05bf":function(t,e,a){"use strict";a("2aaa")},"2aaa":function(t,e,a){},ab5d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"playlist"},[a("div",{staticClass:"playlist-top-card"},[a("div",{staticClass:"playlist-img-wrap"},[a("img",{attrs:{src:t.playlistInfo.img,alt:""}})]),a("div",{staticStyle:{"margin-top":"50px"}}),a("div",{staticClass:"playlist-info"},[a("div",{staticClass:"playlist-name"},[a("div",{staticClass:"tag1"},[t._v("歌单")]),t._v(t._s(t.playlistInfo.title)+" ")]),a("div",{staticClass:"playAllBtn iconfont icon-play",on:{click:t.playAll}},[t._v(" 播放全部")]),a("div",{staticClass:"playlist-tags"},[a("span",[t._v(" ")]),a("span",{staticClass:"tags"},[t._v(t._s(t.playlistInfo.style))])]),a("div",{staticClass:"playlist-desc"},[a("span",[t._v("简介：")]),a("span",{attrs:{title:t.playlistInfo.description}},[t._v(t._s(t.playlistInfo.intro))])])])]),a("div",{staticClass:"playlist-tabs-wrap"},[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"歌曲列表",name:"first"}},[a("div",{staticClass:"songs-table"},[a("el-table",{directives:[{name:"el-table-infinite-scroll",rawName:"v-el-table-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{data:t.tableData,stripe:"","infinite-scroll-delay":"500","infinite-scroll-disabled":"noMore"},on:{"row-dblclick":t.play}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),a("el-table-column",{attrs:{width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"img-wrap"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$store.state.baseURL+e.row.song.img,expression:"$store.state.baseURL+scope.row.song.img"}],attrs:{alt:""}}),a("p",{staticClass:"iconfont icon-play",on:{click:function(a){return t.play(e.row)}}})])]}}])}),a("el-table-column",{attrs:{prop:"song.songName",label:"歌曲",width:""}}),a("el-table-column",{attrs:{prop:"singer.singerName",label:"歌手",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{cursor:"pointer",color:"#2980b9"},on:{click:function(a){return t.$router.push("/artist?artistId="+e.row.singer.id)}}},[t._v(t._s(e.row.singer.singerName))])]}}])}),a("el-table-column",{attrs:{width:"",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{top:"20px","margin-left":"-10px"},attrs:{title:"从歌单中删除"}},[a("el-button",{attrs:{slot:"reference"},on:{click:function(a){return t.addToMyList(e.row)}},slot:"reference"},[t._v("删除")])],1)]}}])})],1)],1)])],1)],1)])},i=[],n=a("b85c");a("d3b7"),a("3ca3"),a("ddb0"),a("99af"),a("4d90"),a("25f0");function o(t){var e=t.getFullYear(),a=(t.getMonth()+1).toString().padStart(2,"0"),s=t.getDate().toString().padStart(2,"0"),i=t.getHours().toString().padStart(2,"0"),n=t.getMinutes().toString().padStart(2,"0"),o=t.getSeconds().toString().padStart(2,"0");return e+"-"+a+"-"+s+" "+i+":"+n+":"+o}var l=a("521e"),r=a("7c15"),c={data:function(){return{activeName:"first",playlistInfo:{},trackIds:[],tableData:[],comments:[],hotComments:[],total:0,pageSize:10,page:1,playlistId:"",loading:!0,loadBegin:0,allData:[],showAddBall:!1,songList:[],textarea:""}},components:{},directives:{"el-table-infinite-scroll":l["a"]},created:function(){console.log(this.$route.query.id);var t=this.$route.query.id;this.playlistId=t,this.getTableData()},computed:{noMore:function(){return this.tableData.length>=this.trackIds.length},nowIndex:function(){return this.$store.state.nowIndex},musicQueue:function(){return this.$store.state.musicQueue},queuePos:function(){return this.$store.state.queuePos}},methods:{addToMyList:function(t){var e=this,a={sheetId:this.playlistId,songId:t.song.id};Object(r["i"])(a).then((function(){e.$router.go(0)})).then((function(){e.$message({showClose:!0,message:"移除成功",type:"success"})}))},commit:function(){console.log(this.textarea),Object(r["o"])({clientId:localStorage.uid,sheetId:this.playlistId,content:this.textarea})},toArtist:function(t){this.$router.push("/artist?artistId=".concat(t))},handleCurrentChange:function(t){this.page=t,this.getComments()},loadMore:function(){console.log("滚动加载"),this.loading=!0,this.loadBegin+=20,this.getTableData()},beginAnimation:function(t,e){var a=this;this.showAddBall=!0;var s=this.queuePos.left,i=this.queuePos.top;console.log("起始位置 x:"+t+" y:"+e),console.log("终点位置 x:"+s+" y:"+i);var n=document.querySelector(".add-ball");n.style.left=t+"px",n.style.top=e+"px",setTimeout((function(){n.style.left=s+"px",n.style.top=i+"px"}),0),setTimeout((function(){a.showAddBall=!1}),500)},getTableData:function(){var t=this;Object(r["n"])(this.playlistId).then((function(e){t.playlistInfo=e.data.data.sheet,t.playlistInfo.img=t.$store.state.baseURL+t.playlistInfo.img,t.songList=e.data.data.songList,Promise.all([t.getTracks(!1),t.getComments(!0)]).then((function(){console.log("1111")}))})).then((function(){t.loading=!1}))},playAll:function(){var t=this.tableData;if(console.log(t),this.$store.commit("clearMusicQueue"),0!==t.length){var e,a=Object(n["a"])(t);try{for(a.s();!(e=a.n()).done;){var s=e.value,i={id:s.song.id,imgUrl:s.song.img,artistInfo:s.singer.singerName,songName:s.song.songName};this.$store.commit("changeMusicQueue",i)}}catch(o){a.e(o)}finally{a.f()}this.$store.commit("changeNowIndex",0),this.play(t[0])}else this.$message({type:"info",message:"你的歌单中还没有歌曲"})},getTracks:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[];e=this.songList,t?this.allData=this.allData.concat(e):this.tableData=this.tableData.concat(e)},play:function(t){console.log(t),this.songUrl=t.song.url;var e={imgUrl:t.song.img,artistInfo:t.singer.singerName,songName:t.song.songName,id:t.song.id};this.$store.commit("changeMusicUrl",this.songUrl),this.$store.commit("changeMusicInfo",e),this.$store.commit("changeMusicStatus",!1),this.$store.commit("changeMusicQueue",e);var a,s=[],i=Object(n["a"])(this.musicQueue);try{for(i.s();!(a=i.n()).done;){var o=a.value;s.push(o.id)}}catch(l){i.e(l)}finally{i.f()}this.$store.commit("changeNowIndex",s.indexOf(e.id))},getComments:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.loading=!0;var a=this.playlistId;Object(r["e"])(a).then((function(a){if(console.log(a),e&&Object.prototype.hasOwnProperty.call(a.data,"hotComments")){var s,i=Object(n["a"])(a.data.hotComments);try{for(i.s();!(s=i.n()).done;){var l=s.value;l.time=o(new Date(l.time))}}catch(r){i.e(r)}finally{i.f()}t.hotComments=a.data.hotComments}t.comments=a.data.data})),setTimeout((function(){t.loading=!1}),500)}}},u=c,d=(a("05bf"),a("2877")),g=Object(d["a"])(u,s,i,!1,null,"239d27cb",null);e["default"]=g.exports}}]);