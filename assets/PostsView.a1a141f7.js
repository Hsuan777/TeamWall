import{r as _,o as v,a as e,c as s,b as c,w as f,v as d,d as o,F as u,e as h,f as k,g,n as $}from"./index.5a0da958.js";import{_ as w}from"./PostCard.27276ed3.js";import{_ as x,a as y}from"./PostLoadingCard.a35732c1.js";import{P}from"./PostEmptyCard.1d341bb0.js";import{t as b,a as B}from"./apiPost.4fefb743.js";import"./UserInfo.ce706bea.js";import"./apiLike.32096611.js";const V={key:0},C=o("p",{class:"p-8 text-center text-subtitle"}," \u76EE\u524D\u5C1A\u7121\u52D5\u614B\uFF0C\u65B0\u589E\u4E00\u5247\u8CBC\u6587\u5427\uFF01 ",-1),G={setup(S){const r=_(!0),a=_([]),m=(n=1,p="")=>{let t="new",l="";n===2&&(t="old"),n===3&&(l="hot"),B.getAll(`timeSort=${t}&search=${p}&likesSort=${l}&limit=9999`).then(i=>{a.value=i.data.data,r.value=!1}).catch(i=>{console.log(i)})};return v(()=>{b()&&m()}),(n,p)=>(e(),s(u,null,[c(x,{onGetPosts:m}),f(o("ul",null,[(e(),s(u,null,h(3,t=>o("li",{key:t,class:"mb-4"},[c(y)])),64))],512),[[d,r.value]]),f(o("div",null,[a.value.length>0?(e(),s("ul",V,[(e(!0),s(u,null,h(a.value,(t,l)=>(e(),s("li",{key:t.id,class:$({"mb-4":l<a.value.length-1})},[c(w,{post:t},null,8,["post"])],2))),128))])):(e(),k(P,{key:1},{default:g(()=>[C]),_:1}))],512),[[d,!r.value]])],64))}};export{G as default};
