(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d21aafc"],{bd26:function(t,e,s){"use strict";s.r(e);var a=s("4ec3"),i={name:"invite",data:()=>({stat:[],code:[],loading:!0,list:[],config:{},domain:"",status:["待确认","发放中","已发送","无效"],columns_1:[{slots:{title:"customTitle1"},dataIndex:"code",scopedSlots:{customRender:"code"}},{slots:{title:"customTitle2"},dataIndex:"created_at",scopedSlots:{customRender:"created_at"}},{slots:{title:"customTitle3"},dataIndex:"action",scopedSlots:{customRender:"action"}}],columns_2:[{title:"#",dataIndex:"id",scopedSlots:{customRender:"id"}},{slots:{title:"customTitle2"},dataIndex:"get_amount",scopedSlots:{customRender:"get_amount"}},{slots:{title:"customTitle3"},dataIndex:"trade_no",scopedSlots:{customRender:"trade_no"}},{slots:{title:"customTitle1"},dataIndex:"created_at",scopedSlots:{customRender:"created_at"}}]}),mounted(){this.domain=window.location.protocol+"//"+window.location.hostname,this.config=JSON.parse(localStorage.getItem("config_data")),this.getData()},methods:{getData(){Object(a.l)().then(t=>{this.loading=!1,this.stat=t.data.stat,this.code=t.data.codes,this.$emit("changeSpin",!1)}),Object(a.k)().then(t=>{this.list=t.data})},copyInviteUrl(){const t=this.$createElement;this.$notification.open({message:"复制成功",icon:t("a-icon",{attrs:{type:"smile"},style:"color: #108ee9"})})},createInviteCode(){Object(a.D)().then(t=>{t.data&&(this.$message.success(this.$t("invite.text_8")),setTimeout(()=>{window.location.reload()},500))})}},filters:{formatDate:function(t){if(!t)return!1;10===t.toString().length&&(t*=1e3);let e=new Date(t),s=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;let i=e.getDate();i=i<10?"0"+i:i;let o=e.getHours();o=o<10?"0"+o:o;let c=e.getMinutes();c=c<10?"0"+c:c;let n=e.getSeconds();return s+"-"+a+"-"+i+" "+o+":"+c+":"+(n=n<10?"0"+n:n)},money:t=>(t/100).toFixed(2)}},o=s("e607"),c=Object(o.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a-row",{staticStyle:{"margin-left":"auto","margin-right":"auto",width:"90%"},attrs:{gutter:24}},[s("a-col",{staticClass:"mb-10",staticStyle:{position:"relative","z-index":"1"},attrs:{span:24,lg:5}},[s("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[s("a-statistic",{attrs:{title:t.$t("invite.card_text_1"),value:t.stat[0],suffix:"人",precision:0}}),s("div",{staticClass:"icon"},[s("a-icon",{style:{fontSize:"32px"},attrs:{type:"user-add"}})],1)],1)],1),s("a-col",{staticClass:"mb-10",staticStyle:{position:"relative","z-index":"1"},attrs:{span:24,lg:5}},[s("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[s("a-statistic",{attrs:{title:t.$t("invite.card_text_5"),prefix:t.config.currency_symbol,value:t._f("money")(t.stat[4]),precision:2}}),s("div",{staticClass:"icon"},[s("a-icon",{style:{fontSize:"32px"},attrs:{type:"property-safety"}})],1)],1)],1),s("a-col",{staticClass:"mb-10",staticStyle:{position:"relative","z-index":"1"},attrs:{span:24,lg:4}},[s("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[s("a-statistic",{attrs:{title:t.$t("invite.card_text_2"),value:t.stat[3],precision:0,suffix:"%"}}),s("div",{staticClass:"icon"},[s("a-icon",{style:{fontSize:"32px"},attrs:{type:"pay-circle"}})],1)],1)],1),s("a-col",{staticClass:"mb-10",staticStyle:{position:"relative","z-index":"1"},attrs:{span:24,lg:5}},[s("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[s("a-statistic",{attrs:{title:t.$t("invite.card_text_3"),prefix:t.config.currency_symbol,value:t._f("money")(t.stat[2]),precision:2}}),s("div",{staticClass:"icon"},[s("a-icon",{style:{fontSize:"32px"},attrs:{type:"property-safety"}})],1)],1)],1),s("a-col",{staticClass:"mb-10",staticStyle:{position:"relative","z-index":"1"},attrs:{span:24,lg:5}},[s("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[s("a-statistic",{attrs:{title:t.$t("invite.card_text_4"),prefix:t.config.currency_symbol,value:t._f("money")(t.stat[4]),precision:2}}),s("div",{staticClass:"icon"},[s("a-icon",{style:{fontSize:"32px"},attrs:{type:"pay-circle"}})],1)],1)],1)],1),s("a-row",{staticClass:"mt-20"},[s("a-card",{staticStyle:{width:"80%","margin-left":"auto","margin-right":"auto"},attrs:{title:t.$t("invite.text_1")}},[s("a-button",{attrs:{slot:"extra",icon:"reload",type:"primary",size:"small"},on:{click:t.createInviteCode},slot:"extra"},[t._v(t._s(t.$t("invite.button_1")))]),s("a-table",{attrs:{columns:t.columns_1,"data-source":t.code,loading:t.loading},scopedSlots:t._u([{key:"created_at",fn:function(e){return s("span",{},[t._v(" "+t._s(t._f("formatDate")(e))+" ")])}},{key:"action",fn:function(e,a){return s("span",{},[s("div",{staticClass:"editable-row-operations"},[s("span",[s("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.domain+"/#/register?code="+a.code,expression:"domain + '/#/register?code=' + record.code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copyInviteUrl,expression:"copyInviteUrl",arg:"success"}],staticClass:"text-primary"},[t._v(" 复制链接 ")])])])])}}])},[s("span",{attrs:{slot:"customTitle1"},slot:"customTitle1"},[s("a-icon",{staticClass:"mr-5",attrs:{type:"align-left"}}),t._v(t._s(t.$t("invite.text_2")))],1),s("span",{attrs:{slot:"customTitle2"},slot:"customTitle2"},[t._v(t._s(t.$t("invite.text_3")))]),s("span",{attrs:{slot:"customTitle3"},slot:"customTitle3"},[t._v(t._s(t.$t("invite.text_4")))])])],1)],1),s("a-row",{staticClass:"mt-20 mb-24"},[s("a-card",{staticStyle:{width:"80%","margin-left":"auto","margin-right":"auto"},attrs:{title:t.$t("invite.text_4")}},[s("a-table",{attrs:{columns:t.columns_2,"data-source":t.list,loading:t.loading},scopedSlots:t._u([{key:"created_at",fn:function(e){return s("span",{},[t._v(" "+t._s(t._f("formatDate")(e))+" ")])}},{key:"get_amount",fn:function(e){return s("span",{},[t._v(" "+t._s(t.config.currency_symbol)+t._s(t._f("money")(e))+" ")])}}])},[s("span",{attrs:{slot:"customTitle2"},slot:"customTitle2"},[t._v(t._s(t.$t("invite.text_5")))]),s("span",{attrs:{slot:"customTitle3"},slot:"customTitle3"},[t._v(t._s(t.$t("invite.text_7")))]),s("span",{attrs:{slot:"customTitle1"},slot:"customTitle1"},[t._v(t._s(t.$t("invite.text_6")))])])],1)],1)],1)},[],!1,null,"2a7bfa97",null);e.default=c.exports}}]);