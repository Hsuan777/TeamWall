import{a as n}from"./apiPost.c74fd419.js";import{K as c,r as a,o as p,a as u,f as m}from"./index.dcc92631.js";import{_ as i}from"./PostCard.d9466344.js";import"./UserInfo.d5d27d94.js";import"./apiLike.ca33ffdb.js";const P={setup(l){const e=c(),r=a(e.params.id),t=a([]),s=()=>{n.getOne(r.value).then(o=>{[t.value]=o.data.data}).catch(o=>{console.log(o)})};return p(()=>{s()}),(o,_)=>(u(),m(i,{post:t.value,onGetPosts:s},null,8,["post"]))}};export{P as default};
