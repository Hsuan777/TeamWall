import{A as s,B as l}from"./index.5a0da958.js";const e=s.create({baseURL:`${l}/posts`,timeout:2e4}),a=()=>localStorage.getItem("metaWall")?{headers:{Authorization:localStorage.getItem("metaWall")}}:!1,i={getAll:(t="")=>e.get(`/?${t}`,a()),getOne:t=>e.get(`/${t}`,a()),upload:t=>e.post("",t,a()),comment:(t,o)=>e.post(`/${t}`,o,a()),getAllLikes:()=>e.post("/likes",a()),like:t=>e.get(`/like/${t}`,a()),update:(t,o)=>e.patch(`/${t}`,o,a())};export{i as a,a as t};
