"use strict";(self["webpackChunkswapi"]=self["webpackChunkswapi"]||[]).push([[907],{4907:function(e,a,t){t.r(a),t.d(a,{default:function(){return I}});var s=t(3396),i=t(7139),r=t(3862);const l={key:0},n={class:"items__info"},h={class:"item"},o={class:"page__wrapper"},c=["onClick"];function u(e,a,t,u,p,g){const d=(0,s.up)("search-bar"),m=(0,s.up)("k-dialog"),w=(0,s.up)("k-button"),_=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(m,{show:e.dialogSearchVisible,"onUpdate:show":a[2]||(a[2]=a=>e.dialogSearchVisible=!1)},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{ref:"search__input","onUpdate:show":a[0]||(a[0]=a=>e.dialogSearchVisible=a),"onUpdate:searchInput":a[1]||(a[1]=a=>e.searchQuery=a)},null,512)])),_:1},8,["show"]),(0,s.Wm)(w,{class:"search__button",onClick:e.showSearch},{default:(0,s.w5)((()=>[(0,s.Uk)("Search ")])),_:1},8,["onClick"]),e.isLoading?((0,s.wg)(),(0,s.iD)("p",l,"Loading Data...")):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[(0,s._)("div",n,[(0,s._)("strong",null,(0,i.zw)(e.itemClass),1),(0,s.Uk)(" of the saga: ")]),(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.items,(a=>((0,s.wg)(),(0,s.j4)(_,{key:a,to:{path:`${e.itemClass}/${a.url.match(/\d/g).join("")}`}},{default:(0,s.w5)((()=>[(0,s._)("li",h,[(0,s._)("h2",null,(0,i.zw)(a.name??a.title),1)])])),_:2},1032,["to"])))),128))]),(0,s._)("ul",o,[(0,s.Wm)(w,{disabled:1===e.page,onClick:a[3]||(a[3]=(0,r.iM)((a=>e.changePage(e.page-1)),["prevent"]))},{default:(0,s.w5)((()=>[(0,s.Uk)("Back")])),_:1},8,["disabled"]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.totalPages,(a=>((0,s.wg)(),(0,s.iD)("li",{key:a,class:(0,i.C_)(["page",{"current-page":e.page===a}]),onClick:t=>e.changePage(a)},[(0,s.Wm)(w,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(a),1)])),_:2},1024)],10,c)))),128)),(0,s.Wm)(w,{disabled:e.page===e.totalPages,onClick:a[4]||(a[4]=(0,r.iM)((a=>e.changePage(e.page+1)),["prevent"]))},{default:(0,s.w5)((()=>[(0,s.Uk)("Forward")])),_:1},8,["disabled"])])],64))],64)}var p=t(3578);const g={for:"search__input"};function d(e,a,t,i,l,n){const h=(0,s.up)("k-input"),o=(0,s.up)("k-button");return(0,s.wg)(),(0,s.iD)("form",{onSubmit:a[1]||(a[1]=(0,r.iM)((()=>{}),["prevent"])),class:"search__bar"},[(0,s._)("label",g,[(0,s.Uk)("Look for "),(0,s.Wm)(h,{type:"text",modelValue:l.searchInput,"onUpdate:modelValue":a[0]||(a[0]=e=>l.searchInput=e),modelModifiers:{lazy:!0},id:"search__input",placeholder:"Type in.."},null,8,["modelValue"]),(0,s.Wm)(o,{onClick:(0,r.iM)(n.search,["prevent"])},{default:(0,s.w5)((()=>[(0,s.Uk)("Search")])),_:1},8,["onClick"])])],32)}var m={data(){return{searchInput:""}},methods:{search(){this.$emit("update:searchInput",this.searchInput),this.searchInput&&this.$emit("update:show",!1),this.searchInput=""}}},w=t(89);const _=(0,w.Z)(m,[["render",d]]);var k=_,f=t(5941),b=(0,s.aZ)({name:"ItemsView",components:{SearchBar:k},data:()=>({items:null,isLoading:!1,pageNumber:1,totalPages:1,limit:10,page:1,searchQuery:"",dialogSearchVisible:!1}),created(){this.searchQuery="",this.getItems()},methods:{async getItems(){try{this.isLoading=!0;const e=await(0,p.rQ)(p.HB[this.routeName],{searchFor:this.searchQuery,page:this.page});this.items=e.results,this.totalPages=Math.ceil(e.count/this.limit)}catch(e){Promise.reject(e)}finally{this.isLoading=!1}},showSearch(){return this.dialogSearchVisible=!0},changePage(e){e<1||e>this.totalPages||(this.page=e,this.getItems())}},computed:{routeName(){return this.$route.name},itemClass(){return this.routeName}},watch:{routeName(){this.getItems(),this.isLoading=!0,this.searchQuery="",this.page=1,f.log(this.$route.name,this.searchQuery,this.page)},searchQuery(){this.searchQuery&&this.getItems()}}});const y=(0,w.Z)(b,[["render",u],["__scopeId","data-v-491c474c"]]);var I=y}}]);
//# sourceMappingURL=907.cf2ed78d.js.map