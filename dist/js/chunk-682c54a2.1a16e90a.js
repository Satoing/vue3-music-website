(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-682c54a2"],{"2a3c":function(t,e,s){},7101:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[t._m(0),s("div",{staticClass:"input"},[s("el-input",{attrs:{placeholder:"请输入账号"},model:{value:t.uname,callback:function(e){t.uname=e},expression:"uname"}}),s("div",{staticStyle:{"margin-bottom":"30px"}}),s("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:t.pword,callback:function(e){t.pword=e},expression:"pword"}})],1),s("div",{staticClass:"button"},[s("el-button",{attrs:{type:"danger",plain:""},on:{click:t.commit}},[t._v("登录")])],1),s("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[s("router-link",{attrs:{to:"/register"}},[t._v("没有账号？去注册")])],1)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top"},[s("img",{staticClass:"icon",attrs:{src:"https://p5ui.morna.cn/favicon.ico",alt:""}})])}],n=s("7c15"),i={name:"Login",data:function(){return{uname:"",pword:"",type:""}},methods:{commit:function(){var t=this,e=/^[a-zA-Z][a-zA-Z0-9_]{3,15}$/,s=/\w{5,17}$/;""!==this.uname&&""!==this.pword?e.test(this.uname)?s.test(this.pword)?Object(n["k"])({name:this.uname,password:this.pword}).then((function(e){"success"==e.data.type?(localStorage.isLogin=!0,localStorage.token=e.data.data.token,t.$store.state.isLogin=!0,t.$router.push("/user"),t.$message({showClose:!0,message:"登录成功",type:"success"}),t.type=e.data.type,localStorage.uid=e.data.data.id):t.$message({showClose:!0,message:"登录失败",type:"error"})})):this.$message({showClose:!0,message:"请输入合法的密码",type:"info"}):this.$message({showClose:!0,message:"请输入合法的账号",type:"info"}):this.$message({showClose:!0,message:"内容不能为空",type:"info"})}}},c=i,r=(s("ca6c"),s("2877")),l=Object(r["a"])(c,a,o,!1,null,"f763fe4a",null);e["default"]=l.exports},ca6c:function(t,e,s){"use strict";s("2a3c")}}]);