"use strict";(self["webpackChunkswapi"]=self["webpackChunkswapi"]||[]).push([[988],{988:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var s=a(3396),i=a(7139),r=a(3862);const h={key:0},n={key:1,class:"items__wrapper"},u={class:"items__info"},o={key:0},l={class:"item"},c={class:"page__wrapper"},p=["onClick"];function g(e,t,a,g,d,m){const w=(0,s.up)("search-bar"),k=(0,s.up)("k-dialog"),_=(0,s.up)("k-button"),y=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(k,{show:e.dialogSearchVisible,"onUpdate:show":t[2]||(t[2]=t=>e.dialogSearchVisible=!1)},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{ref:"search__input","onUpdate:show":t[0]||(t[0]=t=>e.dialogSearchVisible=t),"onUpdate:searchInput":t[1]||(t[1]=t=>e.searchQuery=t)},null,512)])),_:1},8,["show"]),(0,s.Wm)(_,{class:"search__button",onClick:e.showSearch},{default:(0,s.w5)((()=>[(0,s.Uk)("Search ")])),_:1},8,["onClick"]),(0,s.Wm)(_,{class:"search__button",onClick:e.resetSearchQuery},{default:(0,s.w5)((()=>[(0,s.Uk)("Reset ")])),_:1},8,["onClick"]),e.isLoading?((0,s.wg)(),(0,s.iD)("p",h,"Loading Data...")):(0,s.kq)("",!0),e.items?((0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",u,[(0,s._)("strong",null,(0,i.zw)(e.itemClass),1),(0,s.Uk)(" of the saga: ")]),e.items.length?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",o,"No such data")),(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.items,(t=>((0,s.wg)(),(0,s.j4)(y,{key:t,to:{path:`${e.itemClass}/${t.url.match(/\d/g).join("")}`}},{default:(0,s.w5)((()=>[(0,s._)("li",l,[(0,s._)("h2",null,(0,i.zw)(t.name??t.title),1)])])),_:2},1032,["to"])))),128))]),(0,s._)("ul",c,[(0,s.Wm)(_,{disabled:1===e.page,onClick:t[3]||(t[3]=(0,r.iM)((t=>e.changePage(e.page-1)),["prevent"]))},{default:(0,s.w5)((()=>[(0,s.Uk)("Back")])),_:1},8,["disabled"]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.totalPages,(t=>((0,s.wg)(),(0,s.iD)("li",{key:t,class:(0,i.C_)(["page",{currentPage:e.page===t}]),onClick:a=>e.changePage(t)},[(0,s.Wm)(y,{to:{name:e.itemClass,query:{page:t}}},{default:(0,s.w5)((()=>[(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t),1)])),_:2},1024)])),_:2},1032,["to"])],10,p)))),128)),(0,s.Wm)(_,{disabled:e.page===e.totalPages,onClick:t[4]||(t[4]=(0,r.iM)((t=>e.changePage(e.page+1)),["prevent"]))},{default:(0,s.w5)((()=>[(0,s.Uk)("Forward")])),_:1},8,["disabled"])])])):(0,s.kq)("",!0)],64)}var d=a(3578);const m={for:"search__input"};function w(e,t,a,i,h,n){const u=(0,s.up)("k-input"),o=(0,s.up)("k-button");return(0,s.wg)(),(0,s.iD)("form",{onSubmit:t[1]||(t[1]=(0,r.iM)((()=>{}),["prevent"])),class:"search__bar"},[(0,s._)("label",m,[(0,s.Uk)("Look for "),(0,s.Wm)(u,{type:"text",modelValue:h.searchInput,"onUpdate:modelValue":t[0]||(t[0]=e=>h.searchInput=e),modelModifiers:{lazy:!0},id:"search__input",placeholder:"Type in.."},null,8,["modelValue"]),(0,s.Wm)(o,{onClick:(0,r.iM)(n.search,["prevent"])},{default:(0,s.w5)((()=>[(0,s.Uk)("Search")])),_:1},8,["onClick"])])],32)}var k={data(){return{searchInput:""}},methods:{search(){this.$emit("update:searchInput",this.searchInput),this.searchInput&&this.$emit("update:show",!1),this.searchInput=""}}},_=a(89);const y=(0,_.Z)(k,[["render",w]]);var f=y,b=(0,s.aZ)({name:"ItemsView",components:{SearchBar:f},data:()=>({items:null,isLoading:!1,pageNumber:1,totalPages:1,limit:10,page:1,searchQuery:"",dialogSearchVisible:!1}),mounted(){window.addEventListener("popstate",this.checkState),this.page=Number(this.$route.query?.page)||1,this.searchQuery=this.$route.query?.search||"",this.getItems()},methods:{async getItems(){try{this.isLoading=!0,this.items=null;const e={};1!==this.page&&(e.page=this.page),this.searchQuery&&(e.search=this.searchQuery),(e.page||e.search)&&this.$router.replace({name:this.itemClass,query:e});const t=await(0,d.rQ)(d.HB[this.routeName],e);this.items=t.results,this.totalPages=Math.ceil(t.count/this.limit)}catch(e){Promise.reject(e)}finally{this.isLoading=!1}},showSearch(){return this.dialogSearchVisible=!0},resetSearchQuery(){this.searchQuery=""},changePage(e){e<1||e>this.totalPages||this.page!==e&&(this.page=e)},checkState(){this.page=Number(this.$route.query?.page)||1,this.searchQuery=this.$route.query?.search||""}},computed:{routeName(){return this.$route.name},itemClass(){return this.routeName},routeQuery(){return this.$route.query}},watch:{routeName(){this.isLoading=!0,document.title=this.itemClass,this.searchQuery=""},searchQuery(){1===this.page&&this.getItems(),this.changePage(1)},page(){this.getItems()}},beforeUnmount(){window.removeEventListener("popstate",this.checkState)}});const C=(0,_.Z)(b,[["render",g],["__scopeId","data-v-ef74424e"]]);var v=C}}]);
//# sourceMappingURL=988.e461020f.js.map