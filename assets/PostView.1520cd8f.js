import{a as n}from"./apiPost.4776c201.js";import{J as c,r as a,o as p,a as u,f as m}from"./index.b345e2aa.js";import{_ as i}from"./PostCard.17c942ee.js";import"./UserInfo.eea6f387.js";import"./apiLike.b6ec8941.js";const P={setup(l){const e=c(),r=a(e.params.id),t=a([]),s=()=>{n.getOne(r.value).then(o=>{[t.value]=o.data.data}).catch(o=>{console.log(o)})};return p(()=>{s()}),(o,_)=>(u(),m(i,{post:t.value,onGetPosts:s},null,8,["post"]))}};export{P as default};
