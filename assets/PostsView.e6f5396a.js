import{r as _,o as h,a as e,c as a,b as c,w as p,v as d,d as l,F as i,e as f,f as v,g,n as k}from"./index.03b71b0b.js";import{_ as P}from"./PostCard.ff48fbb5.js";import{_ as w,a as x}from"./PostLoadingCard.e94898b8.js";import{P as y}from"./PostEmptyCard.97016028.js";import{a as $}from"./apiPost.2ce5a770.js";import"./apiLike.e6e1a0d3.js";const b={key:0},B=l("p",{class:"p-8 text-center text-subtitle"}," \u76EE\u524D\u5C1A\u7121\u52D5\u614B\uFF0C\u65B0\u589E\u4E00\u5247\u8CBC\u6587\u5427\uFF01 ",-1),S={setup(C){const r=_(!0),o=_([]),n=(u=1,m="")=>{let t="new";u===2&&(t="old"),$.getAll(`timeSort=${t}&search=${m}`).then(s=>{o.value=s.data.data,r.value=!1}).catch(s=>{console.log(s)})};return h(()=>{n()}),(u,m)=>(e(),a(i,null,[c(w,{onGetPosts:n}),p(l("ul",null,[(e(),a(i,null,f(3,t=>l("li",{key:t,class:"mb-4"},[c(x)])),64))],512),[[d,r.value]]),p(l("div",null,[o.value.length>0?(e(),a("ul",b,[(e(!0),a(i,null,f(o.value,(t,s)=>(e(),a("li",{key:t.id,class:k({"mb-4":s<o.value.length-1})},[c(P,{post:t,onGetPosts:n},null,8,["post"])],2))),128))])):(e(),v(y,{key:1},{default:g(()=>[B]),_:1}))],512),[[d,!r.value]])],64))}};export{S as default};