(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2c85be8a"],{"57b5":function(t,e,a){"use strict";a("627d")},"627d":function(t,e,a){},6602:function(t,e,a){"use strict";a.r(e);var s=a("076d"),i=a.n(s),l=a("4ec3"),n={components:{VueMarkdown:i.a},data(){return{list:[],knowledge:{},loading:!0,value:"",domain:"",pStyle:{fontSize:"16px",color:"rgba(0,0,0,0.85)",lineHeight:"24px",display:"block",marginBottom:"16px"},pStyle2:{marginBottom:"24px"},language:"zh-CN",keys:[],selectList:[],default_active_key:0,queryData:this.$route.query}},mounted(){this.getData(),this.language="zh_CN"===this.$i18n.locale?"zh-CN":"en-US"},created(){this.queryData&&(this.default_active_key=this.queryData.tag),this.domain=window.location.protocol+"//"+window.location.hostname,window.copy=this.copy},methods:{callback(t){this.selectList=this.list[t],this.showDrawer(this.selectList[0].id)},showDrawer(t){this.loading=!0,Object(l.m)({language:this.language,id:t}).then(t=>{setTimeout(()=>{this.loading=!1},200),this.knowledge=t.data,this.$emit("changeSpin",!1)})},getData(t){Object(l.m)({language:this.language,value:t}).then(t=>{this.list=t.data,this.keys=Object.keys(t.data),this.queryData.tag?(this.selectList=this.list[this.queryData.tag],this.showDrawer(this.queryData.aid)):(this.selectList=this.list[this.keys[0]],this.showDrawer(this.selectList[0].id))})},copy:function(t,e){let a=null;if(t){if((a=document.createElement("div")).id="tempTarget",a.style.opacity="0",e){let s=document.querySelector("#"+e);a.innerText=s[t]}else a.innerText=t;document.body.appendChild(a)}else a=document.querySelector("#"+e);try{let t=document.createRange();t.selectNode(a),window.getSelection().removeAllRanges(),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges(),this.$message.success("复制成功")}catch(t){this.$message.error("复制失败")}t&&a.parentElement.removeChild(a)}},filters:{formatDate:function(t){if(!t)return!1;10===t.toString().length&&(t*=1e3);let e=new Date(t),a=e.getFullYear(),s=e.getMonth()+1;s=s<10?"0"+s:s;let i=e.getDate();return a+"-"+s+"-"+(i=i<10?"0"+i:i)}}},o=(a("57b5"),a("e607")),r=Object(o.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"settings"}},[a("a-tabs",{staticClass:"tabs-sliding",attrs:{"default-active-key":t.default_active_key},on:{change:t.callback}},t._l(t.keys,function(e){return a("a-tab-pane",{key:e},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"book"}}),t._v(" "+t._s(e)+" ")],1),a("a-row",{attrs:{type:"flex",gutter:[24,24]}},[a("a-col",{attrs:{span:24,lg:6}},[a("a-affix",{attrs:{"offset-bottom":100}},[a("a-card",{staticClass:"header-solid mb-24",attrs:{bordered:!1}},[a("a-anchor",{attrs:{targetOffset:100,affix:!1}},t._l(t.selectList,function(s,i){return a("a-anchor-link",{key:i,attrs:{href:"#knowledge?tag="+e+"&aid="+s.id}},[a("div",{staticClass:"ant-list-item-meta",attrs:{slot:"title"},on:{click:function(e){return t.showDrawer(s.id)}},slot:"title"},[a("h4",{staticClass:"ant-list-item-meta-title"},[a("span",{staticClass:"font-regular"},[t._v(t._s(s.title))])])])])}),1)],1)],1)],1),a("a-col",{attrs:{span:24,lg:18}},[t.loading?a("a-card",{staticClass:"header-solid mb-24"},[a("a-skeleton",{attrs:{loading:t.loading,active:"",avatar:""}},[a("a-list-item-meta",{attrs:{description:e.description}},[a("a",{attrs:{slot:"title",href:e.href},slot:"title"},[t._v(t._s(e.title))]),a("a-avatar",{attrs:{slot:"avatar",src:e.avatar},slot:"avatar"})],1),t._v(" "+t._s(e.content)+" ")],1)],1):a("a-card",{staticClass:"header-solid mb-24",attrs:{bordered:!1,id:"basic-info"},scopedSlots:t._u([{key:"title",fn:function(){return[a("h5",{staticClass:"mb-0 font-semibold"},[t._v(t._s(t.knowledge.title))])]},proxy:!0}],null,!0)},[a("VueMarkdown",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{source:t.knowledge.body}})],1)],1)],1)],1)}),1)],1)},[],!1,null,null,null);e.default=r.exports}}]);