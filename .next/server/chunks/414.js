exports.id=414,exports.ids=[414],exports.modules={1047:e=>{e.exports={ahv:"searchSp_ahv__soTk1",con:"searchSp_con___RFiX"}},5397:(e,a,s)=>{"use strict";s.a(e,async(e,n)=>{try{s.d(a,{H:()=>c,Q:()=>h});var t=s(997),i=s(6689),l=s(4874);s(7630);var r=e([l]);l=(r.then?(await r)():r)[0];let o=(0,i.createContext)();function c({children:e}){let[a,s,n]=(0,l.useCookies)(),[r,c]=(0,i.useState)(!1),[h,d]=(0,i.useState)("");return t.jsx(o.Provider,{value:{removeCoo:()=>{n("too"),c(!1),d("")},userName:h,isLogin:r,login:e=>{c(!0),d(e)}},children:e})}let h=()=>(0,i.useContext)(o);n()}catch(e){n(e)}})},5621:(e,a,s)=>{"use strict";s.a(e,async(e,n)=>{try{s.d(a,{Z:()=>c});var t=s(997),i=s(6689),l=s(9846),r=e([l]);l=(r.then?(await r)():r)[0];let c=e=>{let[a,s]=(0,i.useState)("nu");return t.jsx(t.Fragment,{children:t.jsx(l.Z,{isClick:a,children:t.jsx("main",{onClick:()=>{s(!a)},children:e.children})})})};n()}catch(e){n(e)}})},9846:(e,a,s)=>{"use strict";s.a(e,async(e,n)=>{try{s.d(a,{Z:()=>S});var t=s(997),i=s(5675),l=s.n(i),r=s(6689),c=s.n(r),o=s(4678),h=s.n(o),d=s(2540),u=s.n(d),m=s(4934),p=s.n(m),g=s(5226),x=s.n(g),j=s(6529),y=s(2261),w=s(7630),v=s(3501),f=s(1664),N=s.n(f),$=s(1163),T=s(3471),b=e([T]);T=(b.then?(await b)():b)[0];let S=e=>{let a;let[s,n]=(0,r.useState)(""),[i,o]=(0,r.useState)(),d=c().useRef(null),m=async()=>{if(""!=s.trim()){let e=await (0,w.uB)(s,"yes");o(e)}else o()};(0,r.useEffect)(()=>{"nu"!=e.isClick&&"navbar-toggler"==d.current.className&&d.current.click(),document.querySelectorAll(".cloc").forEach(e=>e.addEventListener("click",function(){"navbar-toggler"==d.current.className&&d.current.click()}))},[e.isClick]),(0,r.useEffect)(()=>{let e=setTimeout(()=>{m()},400);return()=>clearTimeout(e)},[s]);let g=(0,$.useRouter)(),f=(a=()=>{g.push({pathname:"/search",query:{name:s}})},e=>{e.preventDefault(),a(e)}),[b,S]=(0,r.useState)(!1);(0,r.useEffect)(()=>{S(!0)},[]);var k="";return k=b?t.jsx(T.Z,{}):"",(0,t.jsxs)("div",{className:"Nabar",onClick:()=>{o()},children:[t.jsx(p(),{collapseOnSelect:!0,expand:"lg",className:" bg-secondary fixed-top",children:(0,t.jsxs)(h(),{children:[t.jsx(N(),{href:"/",className:"navbar-brand me-auto cloc",children:t.jsx(l(),{src:"/logo192.png",width:35,height:35,alt:"Kianai"})}),t.jsx(p().Toggle,{ref:d,"aria-controls":"responsive-navbar-nav"}),(0,t.jsxs)(p().Collapse,{id:"responsive-navbar-nav",children:[(0,t.jsxs)(u(),{className:"me-auto",style:{paddingRight:"100px"},children:[t.jsx(N(),{href:"/nghe-nhieu",className:"nav-link cloc",children:"Nghe nhiều"}),t.jsx(y.Z,{}),t.jsx(N(),{href:"/tu-truyen",className:"nav-link cloc",children:"Tu truyen"}),t.jsx(u(),{style:{position:"relative",height:"40px",width:"200px"},children:(0,t.jsxs)(x(),{className:"d-flex",style:{position:"absolute"},onSubmit:f,children:[t.jsx(x().Control,{type:"search",placeholder:"Search",className:"me-2 search-i","aria-label":"Search",value:s,onChange:e=>{n(e.target.value)}}),t.jsx(j.Z,{style:{display:"none"},variant:"outline-success",children:"Search"}),i?t.jsx(v.Z,{list:i}):null]})})]}),t.jsx(u(),{children:k})]})]})}),t.jsx("div",{className:"hei",style:{paddingTop:"5rem"},children:e.children}),t.jsx("link",{href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet"}),t.jsx("div",{className:"footer",children:t.jsx("div",{className:"container",children:t.jsx("div",{className:"row text-center",children:(0,t.jsxs)("div",{className:"col-lg-12 col-sm-12 col-xs-12",children:[t.jsx("div",{className:"footer_menu"}),t.jsx("div",{className:"footer_copyright",children:t.jsx("p",{children:"Made with by Kianai"})})]})})})})]})};n()}catch(e){n(e)}})},3471:(e,a,s)=>{"use strict";s.a(e,async(e,n)=>{try{s.d(a,{Z:()=>d});var t=s(997),i=s(1664),l=s.n(i),r=s(3353),c=s(8888),o=s(5397),h=e([o]);o=(h.then?(await h)():h)[0];let d=()=>{let{isLogin:e,userName:a}=(0,o.Q)(),s=(0,t.jsxs)("li",{className:"nav-item dropdown ",children:[t.jsx(l(),{className:"nav-link dropdown-toggle",href:"/",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:a}),t.jsx("ul",{className:"dropdown-menu acac",children:t.jsx(r.Z,{children:(0,t.jsxs)(c.Z,{children:[t.jsx(l(),{href:"/ChangePass",children:"Change password"}),t.jsx(l(),{href:"/api/logout",children:"Logout"})]})})})]});return e?s:(0,t.jsxs)(t.Fragment,{children:[t.jsx("div",{className:"div_auth",children:t.jsx(l(),{href:"/signUp",className:"nav-link linka",children:t.jsx("p",{className:"noneP",children:"sign up"})})}),t.jsx("div",{className:"div_auth",children:t.jsx(l(),{href:"/signIn",className:"nav-link linka",children:t.jsx("p",{children:"sign in"})})})]})};n()}catch(e){n(e)}})},3501:(e,a,s)=>{"use strict";s.d(a,{Z:()=>u});var n=s(997),t=s(2679);let i=e=>{let a=e.listTop.rows.map((e,a)=>n.jsx("li",{className:"aaa",children:n.jsx(t.Z,{title:e?.title,slug:e.slug,image:e.image,sotap:e.sotap})},"listTop-"+a));return n.jsx("div",{className:"ListTopAudi",children:n.jsx("ul",{className:"ultop",children:a})})};var l=s(1047),r=s.n(l),c=s(3353),o=s(8888),h=s(5162),d=s.n(h);s(4103);let u=e=>n.jsx("div",{className:r().ahv,children:n.jsx(d(),{children:n.jsx(c.Z,{className:r().con,children:(0,n.jsxs)(o.Z,{children:[" ",e.list?n.jsx(i,{listTop:e.list.data}):null]})})})})},7630:(e,a,s)=>{"use strict";s.d(a,{Fe:()=>d,GF:()=>u,OH:()=>p,Wc:()=>c,XN:()=>r,aY:()=>i,eN:()=>m,hM:()=>y,ij:()=>j,mu:()=>x,ov:()=>h,sc:()=>w,uB:()=>l,vh:()=>g,x6:()=>o});let n="https://kianai158.shop:4000/api/v1",t=async e=>{let a=await fetch(e);return await a.json()},i=async e=>await t(`${n}/audios/new?page=${+e}`),l=async(e,a,s="")=>(s&&(s=`&page=${+s}`),await t(`${n}/audios/search?name=${e}&search=${a}${s}`)),r=async e=>await t(`${n}/countviews/top?type=${e}`),c=e=>fetch(`${n}/countviews/add`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({audio_id:e})}),o=async e=>await t(`${n}/countviews/nghe-nhieu?page=${+e}`),h=async(e,a)=>await t(`${n}/categories/${e}?page=${+a}`),d=async e=>await t(`${n}/audios/${e}`),u=async e=>{let a=await fetch(`${n}/users/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e})});return await a.json()},m=async e=>{let a=await fetch(`${n}/users/signin`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e})});return await a.json()},p=async(e,a)=>{let s=await fetch(`${n}/tu-truyen/update`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({...e})});return await s.json()},g=async(e,a)=>{let s=await fetch(`${n}/tu-truyen`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}});return await s.json()},x=async(e,a)=>{let s=await fetch(`${n}/tu-truyen/getone/${+e}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}});return await s.json()},j=async e=>{let a=await fetch(`${n}/users/checklg`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}});return await a.json()},y=async(e,a)=>{let s=await fetch(`${n}/tu-truyen`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({...e})});return await s.json()},w=async(e,a)=>{let s=await fetch(`${n}/tu-truyen/getone/${a}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}});return await s.json()}},2261:(e,a,s)=>{"use strict";s.d(a,{Z:()=>d});var n=s(997),t=s(8083),i=s(3353),l=s(8888),r=s(5162),c=s.n(r);s(4103);var o=s(1664),h=s.n(o);let d=()=>{let e=[{id:3,name:"Ti\xean Hiệp",slug:"tien-hiep",show:1},{id:4,name:"Huyền Huyễn",slug:"huyen-huyen",show:1},{id:8,name:"Dị Giới",slug:"di-gioi",show:1},{id:9,name:"Đ\xf4 Thị",slug:"do-thi",show:1},{id:11,name:"Khoa Huyễn",slug:"khoa-huyen",show:1},{id:14,name:"Kiếm Hiệp",slug:"kiem-hiep",show:1},{id:16,name:"Xuy\xean Kh\xf4ng",slug:"xuyen-khong",show:1},{id:21,name:"H\xe0i Hước",slug:"hai-huoc",show:1},{id:39,name:"Dị Năng",slug:"di-nang",show:1},{id:40,name:"Mạt Thế",slug:"mat-the",show:1},{id:44,name:"Hệ Thống",slug:"he-thong",show:1},{id:1293,name:"Hồng Hoang",slug:"hong-hoang",show:1},{id:1551,name:"V\xf4 sỉ",slug:"vo-si",show:1},{id:1559,name:"V\xf4 địch",slug:"vo-dich",show:1},{id:6344,name:"Chuyển Sinh",slug:"chuyen-sinh",show:1},{id:6712,name:"Tr\xf9ng Sinh",slug:"trung-sinh",show:1}].map(e=>n.jsx(t.Z,{md:6,lg:3,className:"nomagrin",children:n.jsx(h(),{href:`/the-loai/${e.slug}`,className:"fill",title:e.name,children:e.name})},"theloai-"+e.id));return(0,n.jsxs)("li",{className:"nav-item dropdown ",children:[n.jsx(h(),{className:"nav-link dropdown-toggle ",href:"/",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Thể Loại"}),n.jsx("ul",{className:"dropdown-menu theLoai sha cloc",children:n.jsx(c(),{children:n.jsx(i.Z,{children:n.jsx(l.Z,{className:"tb",children:e})})})})]})}},2679:(e,a,s)=>{"use strict";s.d(a,{Z:()=>c});var n=s(997),t=s(5675),i=s.n(t),l=s(1664),r=s.n(l);let c=e=>(0,n.jsxs)("div",{className:"TopAudio",children:[n.jsx(r(),{href:`/nghe-truyen/${e.slug}`,title:e.title,className:"thumb",children:n.jsx(i(),{src:`http://47.129.182.111:8081/rez/${e.image}`,width:60,height:60,alt:e.title})}),n.jsx("h3",{className:"title",children:n.jsx(r(),{href:`/nghe-truyen/${e.slug}`,title:e.title,children:e.title})}),n.jsx("p",{className:"chapter",children:(0,n.jsxs)(r(),{href:`/nghe-truyen/${e.slug}`,title:e.title,children:["Tap ",e.sotap]})})]})},3414:(e,a,s)=>{"use strict";s.a(e,async(e,n)=>{try{s.r(a),s.d(a,{default:()=>h});var t=s(997),i=s(5621);s(5931),s(2115),s(6764),s(9552),s(5480),s(4772),s(562),s(6418),s(1408),s(8715),s(2441),s(6689);var l=s(968),r=s.n(l),c=s(5397),o=e([i,c]);function h({Component:e,pageProps:a}){return(0,t.jsxs)(t.Fragment,{children:[t.jsx(r(),{children:t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"})}),t.jsx(c.H,{children:t.jsx(i.Z,{children:t.jsx(e,{...a})})})]})}[i,c]=o.then?(await o)():o,n()}catch(e){n(e)}})},2115:()=>{},5480:()=>{},2441:()=>{},9552:()=>{},562:()=>{},4772:()=>{},1408:()=>{},6764:()=>{},8715:()=>{},6418:()=>{}};