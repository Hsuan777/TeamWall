import{r as _,o as h,a as e,c as a,b as c,w as p,v as d,d as l,F as i,e as f,f as v,g,n as k}from"./index.c53ac51d.js";import{_ as P}from"./PostCard.6c94ebf6.js";import{_ as w,a as x}from"./PostLoadingCard.df12d2d9.js";import{P as y}from"./PostEmptyCard.48ad4934.js";import{a as $}from"./apiPost.a4869b45.js";import"./apiLike.8ed4e19c.js";const b={key:0},B=l("p",{class:"p-8 text-center text-subtitle"}," \u76EE\u524D\u5C1A\u7121\u52D5\u614B\uFF0C\u65B0\u589E\u4E00\u5247\u8CBC\u6587\u5427\uFF01 ",-1),S={setup(C){const r=_(!0),o=_([]),n=(u=1,m="")=>{let t="new";u===2&&(t="old"),$.getAll(`timeSort=${t}&search=${m}`).then(s=>{o.value=s.data.data,r.value=!1}).catch(s=>{console.log(s)})};return h(()=>{n()}),(u,m)=>(e(),a(i,null,[c(w,{onGetPosts:n}),p(l("ul",null,[(e(),a(i,null,f(3,t=>l("li",{key:t,class:"mb-4"},[c(x)])),64))],512),[[d,r.value]]),p(l("div",null,[o.value.length>0?(e(),a("ul",b,[(e(!0),a(i,null,f(o.value,(t,s)=>(e(),a("li",{key:t.id,class:k({"mb-4":s<o.value.length-1})},[c(P,{post:t,onGetPosts:n},null,8,["post"])],2))),128))])):(e(),v(y,{key:1},{default:g(()=>[B]),_:1}))],512),[[d,!r.value]])],64))}};export{S as default};
