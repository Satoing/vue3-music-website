(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17f22a8b"],{"3f50":function(t,e,a){},b094:function(t,e,a){"use strict";a("3f50")},c760:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"artist"},[s("div",{staticClass:"artist-info"},[s("div",{staticClass:"artist-img-wrap"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.topInfo.picUrl,expression:"topInfo.picUrl"}],attrs:{alt:""}})]),s("div",{staticClass:"artist-others"},[s("div",{staticClass:"artist-name"},[t._v(t._s(t.topInfo.name))]),s("div",{staticClass:"artsit-works"},[s("div",{staticClass:"artist-works-count"},[t._v(t._s(t.topInfo.desc))])])])]),s("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"我的歌单",name:"album"}},[s("ul",{staticClass:"albums"},[s("li",{staticClass:"al-item",on:{click:t.toMyCollection}},[s("div",{staticClass:"al-img-wrap"},[s("p",{staticClass:"iconfont icon-play bofang"}),s("img",{attrs:{src:a("e42a"),alt:""}})]),s("div",{staticClass:"al-name"},[t._v("我的收藏")])]),t._l(t.albumData,(function(e,a){return s("li",{key:a,staticClass:"al-item"},[s("div",{staticClass:"al-img-wrap"},[s("p",{staticClass:"iconfont icon-play bofang"}),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$store.state.baseURL+e.img,expression:"$store.state.baseURL+item.img"}],attrs:{alt:""},on:{click:function(a){return t.toAlbum(e.id)}}})]),s("div",{staticClass:"al-name",attrs:{title:e.title}},[t._v(t._s(e.title))]),s("router-link",{staticStyle:{"text-decoration-line":"none"},attrs:{to:"/user"}},[s("div",{staticClass:"al-time",on:{click:function(a){return t.drop(e.id)}}},[t._v("删除歌单")])])],1)}))],2)]),s("el-tab-pane",{attrs:{label:"新建歌单",name:"create"}},[s("div",{staticStyle:{padding:"30px 600px 0 0"}},[s("el-form",{attrs:{"label-position":"left","label-width":"80px",model:t.putInfo}},[s("el-form-item",{attrs:{label:"歌单名"}},[s("el-input",{attrs:{placeholder:"请输入歌单的名字"},model:{value:t.createSonglist.title,callback:function(e){t.$set(t.createSonglist,"title",e)},expression:"createSonglist.title"}})],1),s("el-form-item",{attrs:{label:"歌单简介"}},[s("el-input",{attrs:{placeholder:"请输入歌单的简介"},model:{value:t.createSonglist.intro,callback:function(e){t.$set(t.createSonglist,"intro",e)},expression:"createSonglist.intro"}})],1)],1),s("center",[s("div",{staticClass:"button"},[s("el-button",{attrs:{type:"success",plain:"",size:"medium"},on:{click:t.createList}},[t._v("创建")])],1)])],1)]),s("el-tab-pane",{attrs:{label:"个人信息",name:"private"}},[s("div",{staticClass:"info",staticStyle:{padding:"0 600px 0 0"}},[t.canChange?t._e():s("el-descriptions",{staticClass:"margin-top",attrs:{title:"我的信息",column:2}},[s("template",{slot:"extra"},[s("el-button",{attrs:{type:"primary"},on:{click:t.showForm}},[t._v("修改")])],1),s("el-descriptions-item",[s("template",{slot:"label"},[s("i",{staticClass:"el-icon-user"}),t._v(" 用户名 ")]),t._v(" "+t._s(t.info.username)+" ")],2),s("el-descriptions-item",[s("template",{slot:"label"},[s("i",{staticClass:"el-icon-s-check"}),t._v(" 签名 ")]),t._v(" "+t._s(t.info.signature)+" ")],2),s("el-descriptions-item",[s("template",{slot:"label"},[s("i",{staticClass:"el-icon-mobile-phone"}),t._v(" 电话 ")]),t._v(" "+t._s(t.info.phone)+" ")],2),s("el-descriptions-item",[s("template",{slot:"label"},[s("i",{staticClass:"el-icon-takeaway-box"}),t._v(" 邮箱 ")]),t._v(" "+t._s(t.info.email)+" ")],2)],2),t.canChange?s("el-form",{attrs:{"label-position":"left","label-width":"80px",model:t.putInfo}},[s("el-form-item",{attrs:{label:"用户名"}},[s("el-input",{model:{value:t.putInfo.username,callback:function(e){t.$set(t.putInfo,"username",e)},expression:"putInfo.username"}})],1),s("el-form-item",{attrs:{label:"密码"}},[s("el-input",{attrs:{"show-password":""},model:{value:t.putInfo.password,callback:function(e){t.$set(t.putInfo,"password",e)},expression:"putInfo.password"}})],1),s("el-form-item",{attrs:{label:"签名"}},[s("el-input",{model:{value:t.putInfo.signature,callback:function(e){t.$set(t.putInfo,"signature",e)},expression:"putInfo.signature"}})],1),s("el-form-item",{attrs:{label:"手机号"}},[s("el-input",{model:{value:t.putInfo.phone,callback:function(e){t.$set(t.putInfo,"phone",e)},expression:"putInfo.phone"}})],1),s("el-form-item",{attrs:{label:"邮箱"}},[s("el-input",{model:{value:t.putInfo.email,callback:function(e){t.$set(t.putInfo,"email",e)},expression:"putInfo.email"}})],1),s("center",[s("div",{staticClass:"button"},[s("el-button",{attrs:{type:"success",plain:"",size:"medium"},on:{click:t.commit}},[t._v("确认修改")]),s("el-button",{attrs:{type:"primary",plain:"",size:"medium"},on:{click:t.dontcommit}},[t._v("取消修改")])],1)])],1):t._e()],1)]),s("el-tab-pane",{attrs:{label:"账号操作",name:"logout"}},[s("div",[s("el-button",{attrs:{type:"warning"},on:{click:t.logOut}},[t._v("退出登录")]),s("el-button",{attrs:{type:"danger"},on:{click:t.deleteAccount}},[t._v("注销账号")])],1)])],1)],1)},i=[],n=a("7c15"),o={data:function(){return{artistId:"",activeName:"album",topInfo:{},albumData:[],mvData:[],briefDescList:[],introduction:[],simi:[],loading:!0,info:{},putInfo:{id:"",username:"",password:"",signature:"",phone:"",email:""},createSonglist:{title:"",intro:""},canChange:!1}},created:function(){this.artistId=localStorage.uid,this.getAlbumData()},methods:{deleteAccount:function(){var t=this;Object(n["g"])(localStorage.uid).then((function(){localStorage.setItem("isLogin",!1),t.$store.state.isLogin=!1,t.$store.state.userImg="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",t.$message({showClose:!0,message:"账号注销成功",type:"success"}),t.$router.push("/discover")}))},showForm:function(){this.canChange=!this.canChange},createList:function(){var t=this;for(var e in this.createSonglist)if(""===this.createSonglist[e])return void this.$message({showClose:!0,message:"提交的数据不能为空",type:"error"});console.log(this.createList),Object(n["f"])(localStorage.uid,this.createSonglist).then((function(e){"success"===e.data.type&&(t.$message({showClose:!0,message:"创建成功",type:"success"}),t.$router.go(0))}))},toMyCollection:function(){this.$router.push("/collection")},drop:function(t){var e=this;this.$confirm("是否要删除该歌单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(n["j"])(t).then((function(t){"success"===t.data.type&&e.$message({showClose:!0,message:"删除成功",type:"success"}),Object(n["w"])(e.artistId).then((function(t){e.albumData=t.data.data.sheetList}))}))})).catch((function(){e.$message({type:"info",message:"已取消"})}))},toAlbum:function(t){this.$router.push("myplaylist?id=".concat(t))},handleClick:function(t){"个人信息"!=t.label&&(this.canChange=!1)},logOut:function(){var t=this;this.loading=!0,this.$confirm("将要退出登录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){localStorage.setItem("isLogin",!1),t.$store.state.isLogin=!1,t.$store.state.userImg="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",t.$message({showClose:!0,message:"登出成功",type:"success"}),t.$router.push("/discover")})).catch((function(){t.$message({type:"info",message:"已取消"})})),this.loading=!1},dontcommit:function(){this.canChange=!this.canChange},getAlbumData:function(){var t=this;Object(n["v"])(this.artistId).then((function(e){console.log(e),t.topInfo={name:e.data.data.username,picUrl:t.$store.state.baseURL+e.data.data.img,desc:e.data.data.signature},t.info=e.data.data,t.putInfo.username=t.info.username,t.putInfo.signature=t.info.signature,t.putInfo.phone=t.info.phone,t.putInfo.email=t.info.email,t.$store.state.userImg=t.$store.state.baseURL+e.data.data.img})).then((function(){t.loading=!1})),Object(n["w"])(this.artistId).then((function(e){t.albumData=e.data.data.sheetList}))},commit:function(){var t=this,e={id:/\w+/,username:/^[a-zA-Z][a-zA-Z0-9_]{3,15}$/,password:/\w{5,17}$/,signature:/\w*/,phone:/^1[3|4|5|7|8]\d{9}$/,email:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/};for(var a in this.putInfo.id=this.artistId,this.putInfo)console.log(a),""!==this.putInfo[a]||"id"==a?e[a].test(this.putInfo[a])||("username"==a?this.$message({type:"info",message:"请输入正确的用户名",showClose:!0}):"password"==a?this.$message({type:"info",message:"请输入正确的密码",showClose:!0}):"phone"==a?this.$message({type:"info",message:"请输入正确的手机号",showClose:!0}):"email"==a&&this.$message({type:"info",message:"请输入正确的邮箱",showClose:!0})):delete this.putInfo[a];Object(n["d"])(this.putInfo).then((function(e){"更新成功"===e.data.message&&(t.$message({showClose:!0,message:"修改成功",type:"success"}),Object(n["v"])(t.artistId).then((function(e){console.log(e),t.topInfo={name:e.data.data.username,picUrl:t.$store.state.baseURL+e.data.data.img,desc:e.data.data.signature},t.info=e.data.data})),t.canChange=!t.canChange)}))}},filters:{},watch:{$route:function(t){var e=this;this.artistId=t.query.artistId,this.getAlbumData(),setTimeout((function(){e.activeName="album",e.loading=!1}),0)}}},l=o,c=(a("b094"),a("2877")),r=Object(c["a"])(l,s,i,!1,null,"3668f214",null);e["default"]=r.exports},e42a:function(t,e,a){t.exports=a.p+"img/love.690216bd.png"}}]);