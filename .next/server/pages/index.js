(()=>{var e={};e.id=405,e.ids=[405,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,a){return a in t?t[a]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,a)):"function"==typeof t&&"default"===a?t:void 0}}})},9440:e=>{e.exports={loader:"loading_loader__yrSJs",rotation:"loading_rotation__05gn6",backgt:"loading_backgt__v7lQM"}},1725:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{config:()=>x,default:()=>p,getServerSideProps:()=>m,getStaticPaths:()=>g,getStaticProps:()=>d,reportWebVitals:()=>h,routeModule:()=>S,unstable_getServerProps:()=>N,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>j});var r=a(7093),i=a(5244),l=a(1323),n=a(5949),c=a(3414),o=a(2285),u=e([c]);c=(u.then?(await u)():u)[0];let p=(0,l.l)(o,"default"),d=(0,l.l)(o,"getStaticProps"),g=(0,l.l)(o,"getStaticPaths"),m=(0,l.l)(o,"getServerSideProps"),x=(0,l.l)(o,"config"),h=(0,l.l)(o,"reportWebVitals"),j=(0,l.l)(o,"unstable_getStaticProps"),v=(0,l.l)(o,"unstable_getStaticPaths"),P=(0,l.l)(o,"unstable_getStaticParams"),N=(0,l.l)(o,"unstable_getServerProps"),b=(0,l.l)(o,"unstable_getServerSideProps"),S=new r.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:c.default,Document:n.default},userland:o});s()}catch(e){s(e)}})},9885:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var s=a(997),r=a(5675),i=a.n(r),l=a(1664),n=a.n(l);let c=e=>(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{id:"1312"}),(0,s.jsxs)(n(),{href:`/nghe-truyen/${e.slug}`,title:e.content.replace(/(&#(\d+);)/g,(e,t,a)=>String.fromCharCode(a)),children:[s.jsx(i(),{src:`http://47.129.182.111:8081/rez/${e.image}`,width:193,placeholder:"blur",height:278,blurDataURL:"/21-the-ky-dich-tu-linh-phap-su.jpeg",alt:e.title}),s.jsx("div",{className:"divTile",children:s.jsx("h6",{itemProp:"name",children:e.title})}),(0,s.jsxs)("span",{className:"mlieps",children:["TẬP",s.jsx("i",{children:e.sotap})]})]})]}),o=e=>{let t=e?.onList;e.listTop&&(t=e.listTop?.data);let a=4;e.mdsize&&(a=e.mdsize);let r=t?.map((e,t)=>{let r=e;return e.Audio&&(r=e.Audio),s.jsx("div",{className:`col-6 col-sm-3 col-lg-2 col-md-${a} cardAudio`,children:s.jsx(c,{slug:r.slug,image:`${r.image}`,sotap:r.sotap,title:r.title,content:r.content})},`audio-${t}`)});return s.jsx("div",{className:"ListAudio",children:s.jsx("div",{className:"row",children:r})})}},8334:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var s=a(997),r=a(6689),i=a(2679);let l=e=>{let t=e.listTop?.data.map((e,t)=>{let a=e.Audio;return s.jsx("li",{className:"aaa",children:s.jsx(i.Z,{title:a?.title,slug:a.slug,image:a.image,sotap:a.sotap})},"listTop-"+t)});return s.jsx("div",{className:"ListTopAudi",children:s.jsx("ul",{className:"ultop",children:t})})};var n=a(3353),c=a(8888),o=a(8083);let u=e=>{let{children:t,topDay:a,topM:i,topY:u}=e,[p,d]=(0,r.useState)("topNgay"),[g,m]=(0,r.useState)();return(0,r.useEffect)(()=>{switch(p){case"topNgay":default:m(a);break;case"topThang":m(i);break;case"topNam":m(u)}},[p]),s.jsx(n.Z,{children:(0,s.jsxs)(c.Z,{children:[s.jsx(o.Z,{md:7,lg:8,xl:9,children:t}),(0,s.jsxs)(o.Z,{md:5,lg:4,xl:3,className:"bo",children:[(0,s.jsxs)(c.Z,{className:"rowc",onClick:e=>{d(e.target.getAttribute("name"))},style:{cursor:"pointer"},children:[s.jsx(o.Z,{name:"topNgay",className:"topNgay"===p?"activer":"",children:"Top ng\xe0y"}),s.jsx(o.Z,{name:"topThang",className:"topThang"===p?"activer":"",children:"Top th\xe1ng"}),s.jsx(o.Z,{name:"topNam",className:"topNam"===p?"activer":"",children:"Top năm"})]}),s.jsx(c.Z,{children:g?s.jsx(l,{listTop:g}):null})]})]})})}},2846:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var s=a(997),r=a(9440),i=a.n(r);let l=()=>s.jsx("div",{className:i().backgt,children:s.jsx("div",{className:"all",children:s.jsx("span",{className:i().loader})})})},5949:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var s=a(997),r=a(6859);function i(){return(0,s.jsxs)(r.Html,{lang:"vi",children:[s.jsx(r.Head,{}),(0,s.jsxs)("body",{children:[s.jsx(r.Main,{}),s.jsx(r.NextScript,{})]})]})}},2285:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m,getServerSideProps:()=>x});var s=a(997),r=a(7630),i=a(8334),l=a(6689),n=a(1163),c=a(8888),o=a(8083),u=a(9700),p=a.n(u),d=a(9885),g=a(2846);function m(e){let[t,a]=(0,l.useState)(0),r=Math.ceil(e.dataa.data.count/42),u=(0,n.useRouter)(),[m,x]=(0,l.useState)(!0);return m?s.jsx(g.Z,{}):s.jsx(s.Fragment,{children:s.jsx(i.Z,{topDay:e.topDay,topM:e.topM,topY:e.topY,children:(0,s.jsxs)("div",{style:{maxWidth:"800px"},className:"container ",children:[s.jsx("div",{className:"relative",children:s.jsx("h3",{className:"page-title",children:"Truyện mới cập nhật"})}),s.jsx(d.Z,{onList:e.dataa.data?.rows}),s.jsx(c.Z,{className:"justify-content-md-center",children:s.jsx(o.Z,{md:"auto abc",children:s.jsx(p(),{nextLabel:">",onPageChange:t=>{+t.selected!=e.pa-1&&u.push(`?page=${t.selected+1}`)},pageRangeDisplayed:3,marginPagesDisplayed:1,pageCount:r,previousLabel:"<",initialPage:t,pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"active",renderOnZeroPageCount:null})})})]})})})}async function x(e){let t=await (0,r.XN)("day"),a=await (0,r.XN)("month"),s=await (0,r.XN)("year");var i=+e.query.page;let l=i&&i>0?i-1:0;return{props:{dataa:await (0,r.aY)(l||0),pa:l+1,topDay:t,topM:a,topY:s}}}},5244:(e,t)=>{"use strict";var a;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(a||(a={}))},9642:e=>{"use strict";e.exports=require("@restart/ui/Button")},9003:e=>{"use strict";e.exports=require("classnames")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},4678:e=>{"use strict";e.exports=require("react-bootstrap/Container")},5226:e=>{"use strict";e.exports=require("react-bootstrap/Form")},2540:e=>{"use strict";e.exports=require("react-bootstrap/Nav")},4934:e=>{"use strict";e.exports=require("react-bootstrap/Navbar")},6405:e=>{"use strict";e.exports=require("react-dom")},9700:e=>{"use strict";e.exports=require("react-paginate")},5162:e=>{"use strict";e.exports=require("react-perfect-scrollbar")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},4874:e=>{"use strict";e.exports=import("react-cookie")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[567,7,859,414],()=>a(1725));module.exports=s})();