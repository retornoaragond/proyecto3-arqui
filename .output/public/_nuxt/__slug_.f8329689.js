import V from"./HeaderView.8fc1e2bb.js";import{_ as H}from"./nuxt-link.fad812eb.js";import I from"./UtterancView.9cee2683.js";import L from"./FooterView.6791ee32.js";import{_ as S,s as k,n as g,c as m,b as c,a as t,u as e,t as _,d as l,F as A,q as F,o as p,w as N,p as B,e as C}from"./entry.a4367960.js";import{u as f}from"./fetch.11799678.js";const n=a=>(B("data-v-4e2f6bc7"),a=a(),C(),a),q={class:"container"},z={class:"row"},D={class:"column image-column"},E=["src"],U={class:"column info-column"},G=n(()=>t("b",null,"Año de lanzamiento:",-1)),R=n(()=>t("b",null,"Géneros:",-1)),Y=n(()=>t("br",null,null,-1)),Z=n(()=>t("br",null,null,-1)),j=n(()=>t("b",null,"Sinopsis",-1)),J=n(()=>t("br",null,null,-1)),K=["innerHTML"],O=["data-item-id","data-item-price","data-item-description","data-item-image","data-item-name"],P=n(()=>t("h5",null,"Álbumes",-1)),Q={class:"album-list"},W={__name:"[_slug]",async setup(a){let o,i;const u=k(),{data:s,refresh:v}=([o,i]=g(()=>f(`https://cms-una.000webhostapp.com/api/content/item/Movies/${u.params._slug}`,"$2rZddDcUh8")),o=await o,i(),o);v();const{data:w,refresh:x}=([o,i]=g(()=>f(`https://cms-una.000webhostapp.com/api/content/items/Albums?filter={"movieId._id":"${u.params._slug}"}&fields={"title":true}`,"$qvh07dYMdT")),o=await o,i(),o);x();const h=b=>{{const r=document.createElement("div");return r.innerHTML=b,r.innerText}};return(b,r)=>{const y=V,$=H,M=I,T=L;return p(),m("div",q,[c(y),t("div",z,[t("div",D,[t("img",{class:"movie-image",src:`https://cms-una.000webhostapp.com/storage/uploads${e(s).image.path}`},null,8,E)]),t("div",U,[t("h4",null,_(e(s).title),1),G,l(" "+_(e(s).release_year)+"; ",1),R,l(" "+_(e(s).genres),1),Y,Z,j,J,t("div",{innerHTML:h(e(s).description)},null,8,K),t("button",{class:"snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow","data-item-id":e(s).id,"data-item-price":e(s).price,"data-item-description":h(e(s).description),"data-item-image":`https://cms-una.000webhostapp.com/storage/uploads${e(s).image.path}`,"data-item-name":e(s).title}," 🛒 Comprame! ",8,O),P,t("ul",Q,[(p(!0),m(A,null,F(e(w),d=>(p(),m("li",{key:d.id,class:"album-item"},[c($,{to:"/albums/"+d._id},{default:N(()=>[l(_(d.title),1)]),_:2},1032,["to"])]))),128))])]),c(M)]),c(T)])}}},at=S(W,[["__scopeId","data-v-4e2f6bc7"]]);export{at as default};
