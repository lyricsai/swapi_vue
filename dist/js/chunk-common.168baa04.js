"use strict";(self["webpackChunkswapi"]=self["webpackChunkswapi"]||[]).push([[64],{5030:function(e,t,n){var s=n(3862),a=n(3396);const i={href:"#main",ref:"skipLink",class:"skipLink",tabindex:"1"},o={class:"wrapper"},l={class:"main",id:"main"};function r(e,t,n,s,r,p){const c=(0,a.up)("header-bar"),d=(0,a.up)("router-view"),u=(0,a.up)("footer-bar");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("a",i,"Skip to main content",512),(0,a.Wm)(c),(0,a._)("div",o,[(0,a._)("main",l,[(0,a.Wm)(d)])]),(0,a.Wm)(u)],64)}const p=e=>((0,a.dD)("data-v-66ad3275"),e=e(),(0,a.Cn)(),e),c=p((()=>(0,a._)("small",null,"2022",-1)));function d(e,t,n,s,i,o){const l=(0,a.up)("nav-bar");return(0,a.wg)(),(0,a.iD)("footer",null,[(0,a.Wm)(l),c])}var u=n(7139);const m={ref:"nav"};function h(e,t,n,s,i,o){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",m,[(0,a.Wm)(l,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.links,(e=>((0,a.wg)(),(0,a.j4)(l,{class:"link__name",to:{path:`/${e.name}`},key:e.name},{default:(0,a.w5)((()=>[(0,a.Uk)((0,u.zw)(e.name),1)])),_:2},1032,["to"])))),128))],512)}var g=n(5941),v={data(){return{links:[{name:"people"},{name:"planets"},{name:"films"},{name:"species"},{name:"starships"},{name:"vehicles"}]}},props:{show:{type:Boolean,requried:!0}},methods:{showNav(){this.show?this.$refs.nav.style.dysplay="block":this.$refs.nav.style.dysplay="none",g.log(this.show)}},mounted(){this.showNav()}},f=n(89);const w=(0,f.Z)(v,[["render",h],["__scopeId","data-v-0588603c"]]);var _=w,y={components:{NavBar:_}};const b=(0,f.Z)(y,[["render",d],["__scopeId","data-v-66ad3275"]]);var k=b;const D=e=>((0,a.dD)("data-v-f3a812ee"),e=e(),(0,a.Cn)(),e),W={class:"header"},A=D((()=>(0,a._)("div",{class:"header__logo_container"},[(0,a._)("h2",null,"SW-API")],-1))),H={class:"header__menu menu"},S=D((()=>(0,a._)("div",null,[(0,a._)("span"),(0,a._)("span"),(0,a._)("span")],-1))),V=[S],M={class:"header__actions",id:"header__actions"};function P(e,t,n,i,o,l){const r=(0,a.up)("router-link"),p=(0,a.up)("nav-bar"),c=(0,a.up)("k-button");return(0,a.wg)(),(0,a.iD)("header",W,[(0,a.Wm)(r,{to:"/",class:"header__logo"},{default:(0,a.w5)((()=>[A])),_:1}),(0,a._)("div",H,[(0,a._)("button",{class:"icon-menu header__burger",type:"button",onClick:t[0]||(t[0]=(...e)=>l.toggleMenu&&l.toggleMenu(...e)),ref:"iconMenu"},V,512),(0,a.wy)((0,a.Wm)(p,null,null,512),[[s.F8,l.desktop||e.navBarVisible]])]),(0,a._)("div",M,[(0,a.Wm)(c,{class:"theme"},{default:(0,a.w5)((()=>[(0,a.Uk)("Th")])),_:1})])])}const T={class:"kbutton"};function Z(e,t,n,s,i,o){return(0,a.wg)(),(0,a.iD)("button",T,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}var B={name:"k-button"};const $=(0,f.Z)(B,[["render",Z],["__scopeId","data-v-eede0a38"]]);var C=$,I={components:{NavBar:_,KButton:C},data:()=>({navBarVisible:!0}),methods:{toggleMenu(){return this.$refs.iconMenu.classList.toggle("_active"),this.navBarVisible=!this.navBarVisible}},computed:{desktop(){return window.innerWidth>995}}};const N=(0,f.Z)(I,[["render",P],["__scopeId","data-v-f3a812ee"]]);var E=N,F=n(5941),U={components:{HeaderBar:E,FooterBar:k},computed:{routeName(){return F.log(this.$route.fullPath),this.$route}}};const q=(0,f.Z)(U,[["render",r]]);var L=q,z=n(5431),x=n(5941);(0,z.z)("/swapi_vue/service-worker.js",{ready(){x.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){x.log("Service worker has been registered.")},cached(){x.log("Content has been cached for offline use.")},updatefound(){x.log("New content is downloading.")},updated(){x.log("New content is available; please refresh.")},offline(){x.log("No internet connection found. App is running in offline mode.")},error(e){x.error("Error during service worker registration:",e)}});var O=n(2483);const Y=(0,a._)("h2",{class:"home"},"Star Wars Info",-1);function j(e,t,n,s,i,o){const l=(0,a.up)("home-section");return(0,a.wg)(),(0,a.iD)(a.HY,null,[Y,(0,a.Wm)(l,{itemType:"people",items:e.people,heading:"Meet your Heroes",tab:2},null,8,["items"]),(0,a.Wm)(l,{itemType:"planets",items:e.planets,heading:"Planets in the Galaxy",tab:3},null,8,["items"]),(0,a.Wm)(l,{itemType:"films",items:e.films,heading:"Movies of the Saga",tab:4},null,8,["items"]),(0,a.Wm)(l,{itemType:"species",items:e.species,heading:"All kinds of species",tab:5},null,8,["items"]),(0,a.Wm)(l,{itemType:"starships",items:e.starships,heading:"Starships",tab:6},null,8,["items"]),(0,a.Wm)(l,{itemType:"vehicles",items:e.vehicles,heading:"Vehicles",tab:7},null,8,["items"])],64)}const K=["id","tabindex"],R={key:0,class:"card__list"},G={key:1};function J(e,t,n,s,i,o){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("section",{id:n.itemType,tabindex:n.tab},[(0,a._)("h2",null,(0,u.zw)(n.heading),1),n.items?.length?((0,a.wg)(),(0,a.iD)("ul",R,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.items,(e=>((0,a.wg)(),(0,a.iD)("li",{class:"card__item",key:e.name??e.title},[(0,a._)("strong",null,(0,u.zw)(e.name??e.title),1),(0,a._)("div",null,(0,u.zw)(e.homeworld??e.model),1),(0,a._)("div",null,[(0,a.Wm)(l,{to:{path:`${n.itemType}/${e.url.match(/\d/g).join("")}`}},{default:(0,a.w5)((()=>[(0,a.Uk)(" Learn More")])),_:2},1032,["to"])])])))),128))])):((0,a.wg)(),(0,a.iD)("span",G,"Loading..."))],8,K)}var Q={props:{itemType:{type:String,required:!0},heading:{type:String,required:!0},items:{type:Array,required:!0},tab:{type:Number,required:!0}}};const X=(0,f.Z)(Q,[["render",J],["__scopeId","data-v-7524d164"]]);var ee=X,te=n(3578),ne=n(5941),se=(0,a.aZ)({name:"HomeView",components:{HomeSection:ee},data(){return{films:[],people:[],planets:[],vehicles:[],species:[],starships:[]}},methods:{async getAllFilms(){let{results:e}=await(0,te.r)(te.H.films);this.films=e},async getAllPlanets(){let{results:e}=await(0,te.r)(te.H.planets);this.planets=e},async getAllPeople(){let{results:e}=await(0,te.r)(te.H.people);this.people=e},async getAllVehicles(){let{results:e}=await(0,te.r)(te.H.vehicles);this.vehicles=e},async getAllStarships(){let{results:e}=await(0,te.r)(te.H.starships);this.starships=e},async getAllSpecies(){let{results:e}=await(0,te.r)(te.H.species);this.species=e}},mounted(){Promise.all([this.getAllFilms(),this.getAllPeople(),this.getAllPlanets(),this.getAllStarships(),this.getAllSpecies(),this.getAllVehicles()])},watch:{people(){ne.log(this.people)}}});const ae=(0,f.Z)(se,[["render",j]]);var ie=ae;const oe=[{path:"/",name:"home",component:ie},{path:"/films",name:"films",meta:{type:"films"},component:()=>n.e(571).then(n.bind(n,2571))},{path:"/films/:id",name:"films-item",component:()=>n.e(96).then(n.bind(n,8096))},{path:"/people",name:"people",meta:{type:"people"},component:()=>n.e(571).then(n.bind(n,2571))},{path:"/people/:id",name:"person",component:()=>n.e(693).then(n.bind(n,3693))},{path:"/planets",name:"planets",meta:{type:"planets"},component:()=>n.e(571).then(n.bind(n,2571))},{path:"/planets/:id",name:"planets-item",component:()=>n.e(96).then(n.bind(n,8096))},{path:"/species",name:"species",meta:{type:"species"},component:()=>n.e(571).then(n.bind(n,2571))},{path:"/species/:id",name:"species-item",component:()=>n.e(96).then(n.bind(n,8096))},{path:"/starships",name:"starships",meta:{type:"starships"},component:()=>n.e(571).then(n.bind(n,2571))},{path:"/starships/:id",name:"starships-item",component:()=>n.e(96).then(n.bind(n,8096))},{path:"/vehicles",name:"vehicles",meta:{type:"vehicles"},component:()=>n.e(571).then(n.bind(n,2571))},{path:"/vehicles/:id",name:"vehicles-item",component:()=>n.e(96).then(n.bind(n,8096))},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>n.e(774).then(n.bind(n,774))}],le=(0,O.p7)({history:(0,O.PO)("/swapi_vue/"),routes:oe});var re=le,pe=n(65);const ce={namespaced:!0,state:{people:[],currentPerson:null},getters:{},mutations:{SET_PEOPLE(e,t){e.people=t},SET_CURRENT_PERSON(e,t){e.currentPerson=t}},actions:{}};var de=ce,ue=(0,pe.MT)({modules:{swapi:de}});function me(e,t,n,i,o,l){return(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{type:"text",class:"input","onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e)},null,512)),[[s.nr,o.value]])}var he={name:"k-input",data(){return{value:""}},methods:{},computed:{updateInput(e){return e.target.value}}};const ge=(0,f.Z)(he,[["render",me]]);var ve=ge;function fe(e,t,n,i,o,l){return n.show?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"dialog",onClick:t[1]||(t[1]=(...e)=>l.hideDialog&&l.hideDialog(...e))},[(0,a._)("div",{class:"dialog__content",onClick:t[0]||(t[0]=(0,s.iM)((()=>{}),["stop"]))},[(0,a.WI)(e.$slots,"default",{},void 0,!0)])])):(0,a.kq)("",!0)}var we={name:"k-dialog",props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}};const _e=(0,f.Z)(we,[["render",fe],["__scopeId","data-v-6a40cf3e"]]);var ye=_e;const be=(0,a._)("option",{disabled:"",value:""},"Choose from the list",-1),ke=["value"];function De(e,t,n,i,o,l){return(0,a.wy)(((0,a.wg)(),(0,a.iD)("select",{name:"",id:"","onUpdate:modelValue":t[0]||(t[0]=e=>l.localModelValue=e),onChange:t[1]||(t[1]=(...t)=>e.changeOption&&e.changeOption(...t))},[be,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.options,(e=>((0,a.wg)(),(0,a.iD)("option",{value:e.value,key:e.value},(0,u.zw)(e.name),9,ke)))),128))],544)),[[s.bM,l.localModelValue]])}var We={name:"k-select",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},computed:{localModelValue:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}}};const Ae=(0,f.Z)(We,[["render",De]]);var He=Ae,Se=[C,ve,ye,He];const Ve=(0,s.ri)(L);Se.forEach((e=>Ve.component(e.name,e))),Ve.use(ue).use(re).mount("#app")},3578:function(e,t,n){n.d(t,{H:function(){return i},r:function(){return o}});var s=n(70),a=n(5941);s.Z.defaults.baseURL="https://swapi.dev/api/";const i={films:"films",people:"people",planets:"planets",species:"species",starships:"starships",vehicles:"vehicles",search:"?search="},o=async(e=i.people,{id:t="",searchFor:n="",page:o=1}={id:"",searchFor:"",page:1})=>{let l="";t?l="/"+t:n&&(l="/"+i.search+n),1===o&&(o=null);const r=e+l;a.log(r);const{data:p}=await s.Z.get(r,{params:{page:o}}).catch((e=>Promise.reject(e)));return p}}}]);
//# sourceMappingURL=chunk-common.168baa04.js.map