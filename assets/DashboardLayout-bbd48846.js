import{_,R as u,a as m,r as l,o as h,c as p,b as s,d as t,w as c,g as v,e as o,k as f}from"./index-d80f78a2.js";import{_ as g}from"./logo2-91fb7423.js";const k="/2023-vue3-week7-dashboard/assets/brain-6c314af9.png";const{VITE_URL:x}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"gracewang",BASE_URL:"/2023-vue3-week7-dashboard/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},w={components:{RouterLink:u,RouterView:m},methods:{checkLogin(){const i=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=i,this.$http.post(`${x}/api/user/check`).catch(e=>{alert(e.response.data.message),this.$router.push("/login")})},logout(){document.cookie=`myToken=; expires= ${new Date};`,this.$router.push("/login")}},mounted(){this.checkLogin()}},R={class:"container-fluid"},b={class:"row vh-100"},V={class:"col-2 bg-light py-12"},$=f('<div class="text-center mb-10"><img src="'+g+'" alt="logo" class="img-fluid mb-6 px-5"><div class="d-flex flex-column align-items-center"><img src="'+k+'" alt="avatar" class="rounded-circle mb-1" width="60"><small class="fw-bold">Brian Wu</small></div></div>',1),L={class:"nav flex-column px-5"},y={class:"nav-item"},E={class:"nav-item"},T={class:"nav-item"},D={class:"nav-item mt-5"},B=s("span",{class:"material-icons"}," logout ",-1),C={class:"col-10"};function N(i,e,S,A,I,n){const a=l("RouterLink"),r=l("RouterView");return h(),p("div",R,[s("div",b,[s("div",V,[$,s("ul",L,[s("li",y,[t(a,{to:"/admin/products",class:"nav-link"},{default:c(()=>[o("商品管理")]),_:1})]),s("li",E,[t(a,{to:"/admin/orders",class:"nav-link"},{default:c(()=>[o("訂單管理")]),_:1})]),s("li",T,[t(a,{to:"/",class:"nav-link"},{default:c(()=>[o("回前台首頁")]),_:1})]),s("li",D,[s("a",{href:"#",class:"nav-link d-flex align-items-center",onClick:e[0]||(e[0]=v((...d)=>n.logout&&n.logout(...d),["prevent"]))},[B,o("登出")])])])]),s("div",C,[t(r)])])])}const O=_(w,[["render",N]]);export{O as default};
