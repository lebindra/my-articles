import{_ as w}from"./CgQ7aYEF.js";import{f as m,o as c,c as _,a as s,t as d,g as i,G as x,b as f,H as y,j as C,w as b,q as v,u as k,F as $,r as B,z as F}from"./CJz9_YZ-.js";import{_ as L}from"./CC2En6LR.js";import{_ as M}from"./DlAUqK2U.js";import{m as z}from"./B8M5arCw.js";import{u as A,q as N}from"./DaVWX9CM.js";import{u as q}from"./PBNx6SVL.js";import"./Crg2PwZG.js";const E={class:"container mx-auto"},H={class:"grid grid-cols-1 sm:grid-cols-2 items-center"},I={class:"px-6"},V={class:"text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5"},j={class:"dark:text-zinc-300"},D={class:"px-6 justify-self-center"},S=m({__name:"hero",setup(h){return(e,n)=>{const r=w;return c(),_("div",E,[s("div",H,[s("div",I,[s("h1",V,d(i(x).title),1),s("p",j,d(i(x).description),1)]),s("div",D,[f(r)])])])}}}),G={class:"text-[#F1F2F4] px-5 py-3 rounded hover:underline rand-bg-color hover:scale-[1.05] transition-all duration-500"},P=m({__name:"card",props:{title:{default:"No title available"},count:{default:0}},setup(h){y(t=>({e8a814d0:i(r)}));const e=["#dc2626","#d97706","#65a30d","#059669","#0891b2","#0284c7","#4f46e5","#7c3aed","#c026d3","#db2777"];function n(t,o){return t=Math.ceil(t),o=Math.floor(o),Math.floor(Math.random()*(o-t+1))+t}const r=C(`${e.at(n(0,8))}`);return(t,o)=>{const l=L;return c(),_("div",G,[f(l,{to:`/categories/${t.title.toLocaleLowerCase()}`,class:"text-lg font-extrabold"},{default:b(()=>[s("h1",null,"#"+d(t.title)+"("+d(t.count)+")",1)]),_:1},8,["to"])])}}}),R=M(P,[["__scopeId","data-v-c38e99ef"]]),T={class:"container max-w-5xl mx-auto text-zinc-600"},U={class:"flex flex-wrap px-6 mt-12 gap-3"},tt=m({__name:"index",async setup(h){var o;let e,n;const{data:r}=([e,n]=v(()=>A("all-blog-post-for-category",()=>N("/blogs").sort({_id:-1}).find())),e=await e,n(),e),t=new Map;return(o=r.value)==null||o.forEach(l=>{(l.tags||[]).forEach(a=>{if(t.has(a)){const p=t.get(a);t.set(a,p+1)}else t.set(a,1)})}),k({title:"Categories",meta:[{name:"description",content:"Below All the topics are listed on which either I have written a blog or will write a blog in near future."}]}),q(),(l,g)=>{const a=S,p=R;return c(),_("main",T,[f(a),s("div",U,[(c(!0),_($,null,B(i(t),u=>(c(),F(p,{key:u[0],title:i(z)(u[0]),count:u[1]},null,8,["title","count"]))),128))])])}}});export{tt as default};
