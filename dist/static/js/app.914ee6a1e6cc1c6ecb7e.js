webpackJsonp([1],{"3qia":function(t,e){},"7Ftl":function(t,e){},"9pCf":function(t,e){},CHQP:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},o=a("VU/8")({name:"app"},i,!1,function(t){a("3qia")},null,null).exports,s=a("/ocq"),r={data:function(){return{labelPosition:"top",loginInfo:{username:"",password:""}}},methods:{login:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var a={username:e.loginInfo.username,password:e.loginInfo.password};e.$http.login(a,function(t){sessionStorage.username=e.loginInfo.username,e.$message({type:"success",message:"登录成功"}),e.$router.push("/")})})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-wrap"},[a("div",{staticClass:"login-part"},[a("h1",[t._v("后台管理系统")]),t._v(" "),a("div",{staticClass:"login",on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.login("loginInfo")}}},[a("el-form",{ref:"loginInfo",attrs:{"label-position":t.labelPosition,model:t.loginInfo}},[a("el-form-item",{attrs:{label:"用户名",prop:"username",rules:[{required:!0,message:"用户名不能为空！"}]}},[a("el-input",{attrs:{placeholder:"用户名"},model:{value:t.loginInfo.username,callback:function(e){t.$set(t.loginInfo,"username",e)},expression:"loginInfo.username"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"password",rules:[{required:!0,message:"密码不能为空！"}]}},[a("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.loginInfo.password,callback:function(e){t.$set(t.loginInfo,"password",e)},expression:"loginInfo.password"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"0"}},[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(e){t.login("loginInfo")}}},[t._v("登录")])],1)],1)],1)])])},staticRenderFns:[]},c=a("VU/8")(r,l,!1,function(t){a("fFZS")},"data-v-5d4bcb0c",null).exports,d={data:function(){return{isCollapse:!1,activeNav:"/",admin:"管理员",type:sessionStorage.type||""}},created:function(){this.activeNav=this.$route.path,this.admin=sessionStorage.username},methods:{logout:function(){var t=this;this.$http.logout(function(e){sessionStorage.username="",t.$router.push("/login")})},collapseNav:function(){this.isCollapse=!this.isCollapse}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",[a("div",{staticClass:"header-logo"},[t._v("后台管理")]),t._v(" "),a("div",{staticClass:"header-user"},[a("el-dropdown",{attrs:{trigger:"click"}},[a("span",{staticClass:"el-dropdown-link"},[a("i",[t._v("欢迎")]),t._v(t._s(t.admin)+"\n        ")]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(e){t.logout(e)}}},[t._v("退出")])],1)],1)],1)]),t._v(" "),a("el-container",[a("el-aside",{class:{active:t.isCollapse},attrs:{width:"auto"}},[a("el-menu",{staticClass:"nav-bar",attrs:{"default-active":t.activeNav,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",collapse:t.isCollapse,router:""}},[a("div",{staticClass:"collapse",on:{click:t.collapseNav}},[a("i",{staticClass:"el-icon-caret-left",class:{active:t.isCollapse}})]),t._v(" "),a("el-submenu",{attrs:{index:"/commodity"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-goods"}),t._v(" "),a("span",[t._v("内容管理")])]),t._v(" "),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"/audit/list"}},[t._v("内容列表")]),t._v(" "),a("el-menu-item",{attrs:{index:"/audit/links"}},[t._v("链接列表")])],1)],2)],1)],1),t._v(" "),a("el-main",[a("router-view")],1)],1)],1)},staticRenderFns:[]},p=a("VU/8")(d,u,!1,function(t){a("7Ftl")},"data-v-6e4484ac",null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content-wrap"},[e("div",{staticClass:"jumbotron"},[e("h1",[this._v("欢迎来到")]),this._v(" "),e("p",[this._v("后台管理系统")])])])}]},m=a("VU/8")({data:function(){return{}}},f,!1,function(t){a("9pCf")},"data-v-907a01c0",null).exports,h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("section",{staticClass:"flex-column loading-wrap flex-center"},[a("i",{staticClass:"el-icon-loading"})]):a("section",{staticClass:"container flex-column"},[a("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("内容管理")]),t._v(" "),a("el-breadcrumb-item",[t._v("内容列表")])],1),t._v(" "),a("div",{staticClass:"operation"},[a("el-form",{staticStyle:{"margin-bottom":"20px"},attrs:{inline:!0,model:t.getData}},[a("el-form-item",{attrs:{label:"审核状态"}},[a("el-select",{attrs:{placeholder:"审核状态"},on:{change:t.searchState},model:{value:t.getData.check,callback:function(e){t.$set(t.getData,"check",e)},expression:"getData.check"}},[a("el-option",{attrs:{label:"全部",value:""}}),t._v(" "),a("el-option",{attrs:{label:"未审核",value:"uncheck"}}),t._v(" "),a("el-option",{attrs:{label:"已通过",value:"success"}}),t._v(" "),a("el-option",{attrs:{label:"未通过",value:"failure"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"table-list"},[a("el-table",{staticStyle:{"min-width":"900px"},attrs:{data:t.auditList,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:t.host+"baoke_api/"+e.row.id,target:"_blank"}},[t._v(t._s(t.host+"baoke_api/"+e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"user_id",label:"用户ID",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"content",label:"内容","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"created_time",label:"发布时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updated_time",label:"更新时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return["uncheck"===e.row.check?a("span",{staticClass:"info"},[t._v("未审核")]):"success"===e.row.check?a("span",{staticClass:"success"},[t._v("已审核")]):a("span",{staticClass:"danger"},[t._v("未通过")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"pages"},[a("el-pagination",{attrs:{"current-page":t.getData.page_index,"page-size":t.getData.page_size,layout:"total, sizes, prev, pager, next",total:t.count},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange,"update:currentPage":function(e){t.$set(t.getData,"page_index",e)}}})],1)],1)},staticRenderFns:[]},g=a("VU/8")({data:function(){return{loading:!0,host:this.$http.host,count:0,getData:{page_size:20,page_index:1,check:""}}},created:function(){var t=this;this.$http.getAuditList(this.getData,function(e){var a=e.data.data;t.auditList=a.items,t.count=a.count,t.loading=!1})},methods:{handleCurrentChange:function(t){var e=this;this.getData.page_index=t,this.$http.getAuditList(this.getData,function(t){var a=t.data.data;e.auditList=a.items})},handleSizeChange:function(t){var e=this;this.getData.page_size=t,this.getData.page_index=1,this.$http.getAuditList(this.getData,function(t){var a=t.data.data;e.auditList=a.items})},searchState:function(){var t=this,e=this.getData;e.page_index=1,this.$http.getAuditList(e,function(e){var a=e.data.data;t.auditList=a.items,t.count=a.count})}}},h,!1,function(t){a("wkIB")},"data-v-1b1f726e",null).exports,v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("section",{staticClass:"flex-column loading-wrap flex-center"},[a("i",{staticClass:"el-icon-loading"})]):a("section",{staticClass:"container flex-column"},[a("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("内容管理")]),t._v(" "),a("el-breadcrumb-item",[t._v("链接列表")])],1),t._v(" "),a("div",{staticClass:"operation"},[a("el-button",{attrs:{type:"primary"},on:{click:t.addLink}},[t._v("新增")])],1),t._v(" "),a("div",{staticClass:"table-list"},[a("el-table",{staticStyle:{"min-width":"900px"},attrs:{data:t.auditLinks,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:t.host+"baoke_api/"+e.row.id,target:"_blank"}},[t._v(t._s(t.host+"baoke_api/"+e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"times",label:"使用次数"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.times)+"次\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"content",label:"内容","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"created_time",label:"发布时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updated_time",label:"更新时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("修改")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"pages"},[a("el-pagination",{attrs:{"current-page":t.getData.page_index,"page-size":t.getData.page_size,layout:"total, sizes, prev, pager, next",total:t.count},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange,"update:currentPage":function(e){t.$set(t.getData,"page_index",e)}}})],1),t._v(" "),a("el-dialog",{attrs:{title:"新增链接",visible:t.AddDialog,width:"30%",center:""},on:{"update:visible":function(e){t.AddDialog=e}}},[a("el-form",{attrs:{"label-position":"right","label-width":"80px",model:t.addForm}},[a("el-form-item",{attrs:{label:"链接内容"}},[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.addForm.content,callback:function(e){t.$set(t.addForm,"content",e)},expression:"addForm.content"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"使用次数"}},[a("el-input",{attrs:{placeholder:"请输入次数"},model:{value:t.addForm.times,callback:function(e){t.$set(t.addForm,"times",t._n(e))},expression:"addForm.times"}},[a("template",{slot:"append"},[t._v("次")])],2)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.AddDialogHandleCancel}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.AddDialogHandleConfirm}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"修改链接",visible:t.EditDialog,width:"30%",center:""},on:{"update:visible":function(e){t.EditDialog=e},close:t.EditDialogHandleCancel}},[a("el-form",{attrs:{"label-position":"right","label-width":"80px",model:t.addForm}},[a("el-form-item",{attrs:{label:"链接内容"}},[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.addForm.content,callback:function(e){t.$set(t.addForm,"content",e)},expression:"addForm.content"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"使用次数"}},[a("el-input",{attrs:{placeholder:"请输入次数"},model:{value:t.addForm.times,callback:function(e){t.$set(t.addForm,"times",t._n(e))},expression:"addForm.times"}},[a("template",{slot:"append"},[t._v("次")])],2)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.EditDialogHandleCancel}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.EditDialogHandleConfirm}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]},_=a("VU/8")({data:function(){return{loading:!0,host:this.$http.host,count:0,getData:{page_size:20,page_index:1},addForm:{content:"",times:""},AddDialog:!1,EditDialog:!1,currentRow:{row:{},index:""}}},created:function(){var t=this;this.$http.getAuditLinks(this.getData,function(e){var a=e.data.data;t.auditLinks=a.items,t.count=a.count,t.loading=!1})},methods:{handleCurrentChange:function(t){var e=this;this.getData.page_index=t,this.$http.getAuditLinks(this.getData,function(t){var a=t.data.data;e.auditLinks=a.items})},handleSizeChange:function(t){var e=this;this.getData.page_size=t,this.getData.page_index=1,this.$http.getAuditLinks(this.getData,function(t){var a=t.data.data;e.auditLinks=a.items})},addLink:function(){this.AddDialog=!0},AddDialogHandleCancel:function(){this.AddDialog=!1},AddDialogHandleConfirm:function(){var t=this;this.$http.postAuditLink(this.addForm,function(e){t.$http.getAuditLinks(t.getData,function(e){var a=e.data.data;t.auditLinks=a.items,t.count=a.count,t.AddDialog=!1,t.$message({type:"success",message:"新增成功"})})})},handleEdit:function(t,e){this.addForm.content=e.content,this.addForm.times=e.times,this.currentRow.row=e,this.currentRow.index=t,this.EditDialog=!0},EditDialogHandleCancel:function(){this.addForm.content="",this.addForm.times="",this.EditDialog=!1},EditDialogHandleConfirm:function(){var t=this,e=this.addForm;this.$http.putAuditLink(this.currentRow.row.id,e,function(a){t.auditLinks[t.currentRow.index].content=e.content,t.auditLinks[t.currentRow.index].times=e.times,t.addForm.content="",t.addForm.times="",t.EditDialog=!1,t.$message({type:"success",message:"修改成功"})})}}},v,!1,function(t){a("CHQP")},"data-v-3b778db9",null).exports;n.default.use(s.a);var b=new s.a({routes:[{path:"/login",name:"Login",component:c},{path:"/",component:p,children:[{path:"",name:"IndexContent",component:m},{path:"audit/list",name:"AuditList",component:g},{path:"audit/links",name:"AuditLinks",component:_}]}]}),k=a("zL8q"),C=a.n(k),w=(a("tvR6"),a("erWL"),a("//Fk")),x=a.n(w),D=a("mtWM"),y=a.n(D),A=a("mw3O"),$=a.n(A),L="http://103.85.24.76:8800/";y.a.defaults.timeout=2e4,y.a.defaults.withCredentials=!0,y.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",y.a.interceptors.request.use(function(t){return"post"!==t.method&&"put"!==t.method||(t.data=$.a.stringify(t.data)),t},function(t){return console.log("错误的传参！"),x.a.reject(t)});var E={host:L,APIError:function(t){k.MessageBox.alert(t?t.data.msg:t,"出错啦",{confirmButtonText:"确定"})},login:function(t,e){var a=this;y.a.post(L+"user/login",t).then(function(t){0===t.data.status?"function"==typeof e&&e(t):a.APIError(t)}).catch(function(t){a.APIError(t.response)})},logout:function(t){var e=this;y.a.get(L+"user/logout").then(function(a){0===a.data.status?"function"==typeof t&&t(a):e.APIError(a)}).catch(function(t){e.APIError(t.response)})},getAuditList:function(t,e){var a=this;y.a.get(L+"baoke/all_content",{params:t}).then(function(t){0===t.data.status?"function"==typeof e&&e(t):a.APIError(t)}).catch(function(t){a.APIError(t.response)})},getAuditLinks:function(t,e){var a=this;y.a.get(L+"manager/api_info",{params:t}).then(function(t){0===t.data.status?"function"==typeof e&&e(t):a.APIError(t)}).catch(function(t){a.APIError(t.response)})},postAuditLink:function(t,e){var a=this;y.a.post(L+"manager/api_info",t).then(function(t){0===t.data.status?"function"==typeof e&&e(t):a.APIError(t)}).catch(function(t){a.APIError(t.response)})},putAuditLink:function(t,e,a){var n=this;y.a.put(L+"manager/api_info/"+t,e).then(function(t){0===t.data.status?"function"==typeof a&&a(t):n.APIError(t)}).catch(function(t){n.APIError(t.response)})}};n.default.config.productionTip=!1,n.default.use(C.a),n.default.prototype.$http=E,b.beforeEach(function(t,e,a){sessionStorage.username?"Login"===t.name?a(e.path):a():"Login"!==t.name?a({path:"/login"}):a()}),new n.default({el:"#app",router:b,template:"<App/>",components:{App:o}})},erWL:function(t,e){},fFZS:function(t,e){},tvR6:function(t,e){},wkIB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.914ee6a1e6cc1c6ecb7e.js.map