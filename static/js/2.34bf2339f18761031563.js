webpackJsonp([2],{CtWP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),l=a.n(i),s=a("gyMJ"),n={props:["activity","edit"],data:function(){return{tableData:[{name:"谢谢参与",amount:0,remark:"",business_id:"",v:0,id:null}],idx:-1,deleteVisible:!1,businessData:[],total:0,vi:!1,rules:{times:[{validator:function(t,e,a){if(isNaN(e))return a(new Error("请输入正整数"));/^[0-9]+$/.test(e)?a():a(new Error("请输入正整数"))},trigger:"blur"}]}}},created:function(){this.getData(),this.getBusiness()},watch:{edit:function(){this.edit&&this.getData()}},methods:{getData:function(){var t=this;this.activity&&Object(s.a)("/admin/activity/getPrizeByActivity",{activity:this.activity}).then(function(e){e.data&&e.data.length>0?t.tableData=e.data||[{name:"谢谢参与",amount:0,remark:"",business_id:"",v:0,id:null}]:t.tableData=[{name:"谢谢参与",amount:0,remark:"",business_id:"",v:0,id:null}]})},handleInput:function(t){/^[0-9]+$/.test(t.target.value)||this.$message.error("请输入正整数"),(isNaN(t.target.value)||t.target.value<0)&&(t.target.value=0),t.target.value=parseInt(t.target.value)},getBusiness:function(){var t=this;Object(s.a)("/admin/business/getList").then(function(e){e.data&&(t.businessData=e.data,t.businessData.unshift({id:"",name:""}))})},add:function(){this.tableData.push({name:"",amount:0,remark:"",id:null,v:0})},handleDelete:function(t){1!=this.tableData.length?(this.idx=t,this.deleteVisible=!0):this.$message.warning("只有一行了")},handlEdit:function(){for(var t=0,e=0;e<this.tableData.length;e++)t+=Number(this.tableData[e].v);this.total=t.toFixed(0),this.$emit("prizeList",this.tableData)},deleteRow:function(){var t=this,e=this.tableData[this.idx].id;e?Object(s.a)("/admin/activity/delPrize",{id:e}).then(function(e){e.data?(t.tableData.splice(t.idx,1),t.deleteVisible=!1,t.$message.success("删除成功"),t.handlEdit()):t.$message.error("删除失败")}):(this.tableData.splice(this.idx,1),this.deleteVisible=!1,this.$message.success("删除成功"),this.handlEdit())}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.add}},[t._v("添加奖品")]),t._v(" "),a("el-tag",{staticStyle:{float:"right"},attrs:{type:100!=t.total?"danger":"success"}},[t._v("中奖概率总计："+t._s(t.total)+"‰")]),t._v(" "),a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","highlight-current-row":"",rules:t.rules}},[a("el-table-column",{attrs:{type:"index",width:"35"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"奖品名称",width:"200","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:"谢谢参与"==t.tableData[e.$index].name},on:{input:t.handlEdit},model:{value:t.tableData[e.$index].name,callback:function(a){t.$set(t.tableData[e.$index],"name",a)},expression:"tableData[scope.$index].name"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"business_id",label:"兑换商家",width:"200","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-select",{attrs:{filterable:"",disabled:"谢谢参与"==t.tableData[e.$index].name},on:{keyup:t.handlEdit},model:{value:t.tableData[e.$index].business_id,callback:function(a){t.$set(t.tableData[e.$index],"business_id",a)},expression:"tableData[scope.$index].business_id"}},t._l(t.businessData,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"数量",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:"谢谢参与"==t.tableData[e.$index].name},on:{input:t.handlEdit,blur:t.handleInput},model:{value:t.tableData[e.$index].amount,callback:function(a){t.$set(t.tableData[e.$index],"amount",a)},expression:"tableData[scope.$index].amount"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"v",label:"抽中概率（千分比）",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input-number",{attrs:{min:0,precision:2,step:1},on:{input:function(a){t.handlEdit(e.$index)},blur:t.handleInput},model:{value:t.tableData[e.$index].v,callback:function(a){t.$set(t.tableData[e.$index],"v",a)},expression:"tableData[scope.$index].v"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{on:{input:t.handlEdit},model:{value:t.tableData[e.$index].remark,callback:function(a){t.$set(t.tableData[e.$index],"remark",a)},expression:"tableData[scope.$index].remark"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"80",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"danger",disabled:"谢谢参与"==t.tableData[e.$index].name},on:{click:function(a){t.handleDelete(e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"提示",visible:t.deleteVisible,width:"300px",center:!0,modal:!1},on:{"update:visible":function(e){t.deleteVisible=e}}},[a("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.deleteVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var o={data:function(){var t=function(t,e,a){if(isNaN(e))return a(new Error("请输入正整数"));/^[0-9]+$/.test(e)?a():a(new Error("请输入正整数"))};return{tableData:[],prizeData:[],cur_page:1,select_word:"",editVisible:!1,delVisible:!1,prizeList:[],prizeVisible:!1,total:1,id:"",vi:!1,limit:0,limitV:!1,form:{id:0,name:"",start_date:"",close_date:"",info:"",end_date:"",day_limit:0,times:1},idx:-1,rules:{name:[{required:!0,message:"请输入标题",trigger:"blur"}],start_date:[{required:!0,message:"请输入抽奖开始时间",trigger:"blur"}],close_date:[{required:!0,message:"请输入抽奖截止时间",trigger:"blur"}],end_date:[{required:!0,message:"请输入兑奖失效时间",trigger:"blur"}],day_limit:[{validator:t,trigger:"blur"}],times:[{validator:t,trigger:"blur"}]}}},created:function(){var t=this;this.getData(),s.a("/common/user/userTimes").then(function(e){e.data&&(t.limit=e.data)})},components:{Prize:a("VU/8")(n,r,!1,function(t){a("kXWI")},"data-v-5de44f02",null).exports},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(t){var e=this;t&&(this.select_word="",this.cur_page=1),s.a("/admin/activity",{page:this.cur_page,name:this.select_word}).then(function(a){e.tableData=a.data||[],e.total=a.count||1,t&&e.$message.success("已刷新")})},search:function(){this.cur_page=1,this.getData()},handleEdit:function(t,e){this.idx=t,this.form=this.tableData[t],this.editVisible=!0},add:function(){this.prizeData=[],this.form={id:-1},this.editVisible=!0},editUser:function(){var t=this;s.a("/common/user/editUser?t="+this.limit).then(function(e){e.data?(t.$message.success("修改成功"),t.limitV=!1):t.$message.error("修改失败")})},handleDelete:function(t,e){this.id=e.id,this.idx=t,this.delVisible=!0},saveEdit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;for(var a=0,i=0;i<t.prizeData.length;i++)a+=Number(t.prizeData[i].v);if(1e3!=a.toFixed(0))return t.vi=!0,!1;t.form.day_limit=parseInt(t.form.day_limit);var n=new FormData;for(var r in t.form)void 0!==t.form[r]&&null!==t.form[r]&&n.append(r,t.form[r]);t.prizeData.length>0&&t.prizeData[0].name&&n.append("prizeData",l()(t.prizeData)),s.c("/admin/activity/save",n).then(function(e){200==e.code?(t.$message.success("保存成功"),t.editVisible=!1,t.getData()):t.$message.error(e.msg)})})},deleteRow:function(){var t=this;s.a("/admin/activity/del?id="+this.id).then(function(e){e.data&&(t.$message.success("删除成功"),t.delVisible=!1,t.getData())})},prize:function(t){this.prizeData=t},getPrize:function(t){var e=this;this.prizeVisible=!0,this.prizeList=[],s.a("/admin/activity/getPrizeByActivity",{activity:t}).then(function(t){e.prizeList=t.data||[]})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"搜索活动名称",clearable:""},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")]),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.add}},[t._v("新增")]),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){t.limitV=!0}}},[t._v("修改用户终身中奖上限")]),t._v(" "),a("el-tooltip",{staticStyle:{float:"right"},attrs:{content:"刷新",placement:"top"}},[a("el-button",{attrs:{icon:"el-icon-refresh",circle:""},on:{click:function(e){t.getData(1)}}})],1)],1),t._v(" "),a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",width:"35"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"活动名称",width:"300","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{prop:"start_date",label:"开始日期",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{prop:"close_date",label:"截止日期",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{prop:"end_date",label:"兑奖失效时间",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{prop:"day_limit",label:"奖品每日投放量"}}),t._v(" "),a("el-table-column",{attrs:{prop:"info",label:"活动简介","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{prop:"creatime",label:"更新日期",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"240",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(a){t.getPrize(e.row.id)}}},[t._v("查看奖品")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"total,prev, pager, next",total:t.total,background:""},on:{"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:t.editVisible,width:"1000px"},on:{"update:visible":function(e){t.editVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"活动时间",required:""}},[a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{prop:"start_date"}},[a("el-date-picker",{attrs:{type:"datetime",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}})],1)],1),t._v(" "),a("el-col",{staticClass:"line",attrs:{span:1}},[t._v("至")]),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"close_date"}},[a("el-date-picker",{attrs:{type:"datetime",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.form.close_date,callback:function(e){t.$set(t.form,"close_date",e)},expression:"form.close_date"}})],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"兑奖失效时间",prop:"end_date"}},[a("el-date-picker",{attrs:{type:"datetime",align:"right","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"奖品每日投放量"}},[a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{prop:"day_limit"}},[a("el-input",{staticClass:"el-input",model:{value:t.form.day_limit,callback:function(e){t.$set(t.form,"day_limit",t._n(e))},expression:"form.day_limit"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"用户可抽奖次数",prop:"times"}},[a("el-input",{staticClass:"el-input",model:{value:t.form.times,callback:function(e){t.$set(t.form,"times",t._n(e))},expression:"form.times"}})],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"活动简介",prop:"info"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2}},model:{value:t.form.info,callback:function(e){t.$set(t.form,"info",e)},expression:"form.info"}})],1)],1),t._v(" "),a("el-card",{staticClass:"box-card"},[a("Prize",{attrs:{activity:t.form.id,edit:t.editVisible},on:{prizeList:t.prize}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"提示",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[a("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)]),t._v(" "),a("el-dialog",{attrs:{title:"奖品信息",visible:t.prizeVisible,width:"60%"},on:{"update:visible":function(e){t.prizeVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.prizeList,border:""}},[a("el-table-column",{attrs:{type:"index",width:"30"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"奖品名称",width:"200","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{prop:"business",label:"兑换商家",width:"200","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"数量",width:"45"}}),t._v(" "),a("el-table-column",{attrs:{prop:"v",label:"抽中概率（‰）",width:"110"}}),t._v(" "),a("el-table-column",{attrs:{prop:"num",label:"抽中次数",width:"70"}}),t._v(" "),a("el-table-column",{attrs:{prop:"end_time",label:"兑奖失效时间",width:"133"}}),t._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注"}})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"提示",visible:t.vi,width:"300px",center:!0,modal:!1},on:{"update:visible":function(e){t.vi=e}}},[a("div",{staticClass:"del-dialog-cnt",staticStyle:{color:"red"}},[t._v("中奖概率总和必须是：1000‰")]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.vi=!1}}},[t._v("知道了")])],1)]),t._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:t.limitV,width:"300px",center:!0},on:{"update:visible":function(e){t.limitV=e}}},[a("div",{staticClass:"del-dialog-cnt"},[a("el-input-number",{attrs:{min:0,label:"用户终身中奖上限"},model:{value:t.limit,callback:function(e){t.limit=e},expression:"limit"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.limitV=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.editUser}},[t._v("确定")])],1)])],1)},staticRenderFns:[]};var c=a("VU/8")(o,d,!1,function(t){a("rZHo")},"data-v-282c43e3",null);e.default=c.exports},kXWI:function(t,e){},mvHQ:function(t,e,a){t.exports={default:a("qkKv"),__esModule:!0}},qkKv:function(t,e,a){var i=a("FeBl"),l=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return l.stringify.apply(l,arguments)}},rZHo:function(t,e){}});