import{_ as d,B as g,a as h}from"./projects.b1c76436.js";import{_ as m,s as t,t as i,u as f,B as _,C as e,y as p,D as j,E as n,v as l,F as u,G as v,R as y,S as c,A as P}from"./index.d82e378c.js";import{Q as k}from"./QBtn.54030acf.js";const B={},C=e("i",{class:"button-icon button-icon-left fa-solid fa-arrow-left-long"},null,-1);function $(o,s){return t(),i(k,{"data-test":"home-link-button",class:"button button-home",color:"primary"},{default:f(()=>[C,_(" Back ")]),_:1})}var b=m(B,[["render",$]]);const x={class:"project-links"},N=p({__name:"ProjectPageNavigation",props:{project:{}},setup(o){const s=j();function r(){s.push("/")}return(a,Q)=>(t(),n("div",x,[l(b,{onClick:r}),a.project.repository?(t(),i(d,{key:0,url:a.project.repository},null,8,["url"])):u("",!0),a.project.external_url?(t(),i(g,{key:1,href:a.project.external_url},null,8,["href"])):u("",!0)]))}}),F=p({__name:"ProjectPageHeadingSection",props:{project:{type:Object,required:!0}},setup(o){return(s,r)=>(t(),n("header",null,[e("h1",null,v(o.project.name),1),l(h,{technologies:o.project.technologies},null,8,["technologies"]),l(N,{project:o.project},null,8,["project"])]))}});const w={class:"project-page-card"},S={class:"project-page-card__figure"},V=e("figcaption",null,[_(" Project Page Card requires an "),e("img"),_(" in the image slot ")],-1),q=e("img",{alt:"Project Page Card requires an <img> in the figure slot"},null,-1),D={class:"project-page-card__body"},E={key:0,class:"project-page-card__heading text-h6"},H={class:"project-page-card__description"},G={__name:"ProjectPageCard",setup(o){const s=y();return(r,a)=>(t(),n("div",w,[e("figure",S,[c(r.$slots,"figure",{sizes:"(min-width: 1024) 51w, 100w"},()=>[V,q])]),e("div",D,[P(s).heading?(t(),n("h2",E,[c(r.$slots,"heading")])):u("",!0),e("div",H,[c(r.$slots,"description")])])]))}};export{F as _,G as a};
