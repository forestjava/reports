var le=Object.defineProperty;var W=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var H=(e,t,n)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))ie.call(t,n)&&H(e,n,t[n]);if(W)for(var n of W(t))de.call(t,n)&&H(e,n,t[n]);return e};import{m as R,R as b,j as E,L as ue,c as d,N as me,o as h,Q as he,u as N,a as J,b as C,B as pe,d as _e,e as x,f as P,g as ge,h as fe,i as ve}from"./vendor.51eb7d3c.js";const ye=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const y of c.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&a(y)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}};ye();const Y={selected:!1,id:"",select(e){this.selected=!0,this.id=e},unselect(){this.selected=!1,this.id=""}},L={search:"",setFilter(e){this.search=e},clearFilter(){this.search=""}},T={limit:9,pagesCount:1,currentPage:0,hasPreviousPage:!0,hasNextPage:!0,setSize(e){this.pagesCount=Math.floor(e/this.limit)+1,this.currentPage>=this.pagesCount&&this.setCurrentPage(this.pagesCount-1)},setCurrentPage(e){this.currentPage=e,this.hasPreviousPage=this.currentPage>0,this.hasNextPage=this.currentPage<this.pagesCount-1},goPreviousPage(){this.hasPreviousPage&&this.setCurrentPage(this.currentPage-1)},goNextPage(){this.hasNextPage&&this.setCurrentPage(this.currentPage+1)}},be={active:!1,action:"",show(e){this.active=!0,this.action=e},close(){this.active=!1,this.action=""}},Ne={toasts:[],push(e){const t=e instanceof Error?e.message:String(e);this.toasts.includes(t)||(this.toasts.push(t),setTimeout(()=>this.pop(),2500))},pop(){this.toasts.pop()},clear(){this.toasts=[]}},ke={iframes:!1,tabs:[],open(e){const t=n=>n.id==e.id;this.tabs.some(t)||this.tabs.push(e),this.iframes=!0,this.select(this.tabs.findIndex(t))},close(e){this.tabs.splice(e,1),this.tabs.length==0?this.iframes=!1:this.tabs.length<=this.selected&&this.select(this.tabs.length-1)},closeAll(){this.tabs=[],this.iframes=!1,this.compact=!1},selected:0,select(e){this.selected=e},compact:!1,arrange(e){this.compact=e}},O={app:R({mode:"",setMode(e){this.mode=e}}),roles:R(f(f(f({},Y),L),T)),reports:R(f(f(f({},Y),L),T)),user:R(f(f(f({},ke),L),T)),modals:R(f({},be)),errors:R(f({},Ne))},G=b.createContext(O),p=()=>b.useContext(G),we="_main_kpnok_101";var $e={main:we};const s=E.exports.jsx,r=E.exports.jsxs,j=E.exports.Fragment,Re=({children:e})=>s("main",{className:$e.main,children:e}),Z=e=>s(ue,f({},e)),Ce="_flex_12u2s_1",xe="_row_12u2s_11",Pe="_column_12u2s_19";var w={flex:Ce,row:xe,column:Pe,"align-center":"_align-center_12u2s_27","align-start":"_align-start_12u2s_35","align-end":"_align-end_12u2s_43","justify-start":"_justify-start_12u2s_51","justify-end":"_justify-end_12u2s_59","justify-between":"_justify-between_12u2s_67","justify-center":"_justify-center_12u2s_75"};const l=({className:e,justify:t,align:n,children:a})=>s("div",{className:d([w.flex,w.row,t&&w["justify-"+t],n&&w["align-"+n],e]),children:a}),u=({className:e,justify:t,align:n,children:a})=>s("div",{className:d([w.flex,w.column,t&&w["justify-"+t],n&&w["align-"+n],e]),children:a}),Se="_full_1swg4_1";var Ie={full:Se};const Ae=({children:e})=>s(l,{className:Ie.full,align:"center",justify:"center",children:s(u,{children:e})}),je=()=>r(Ae,{children:[s("h1",{children:"Test environment hub"}),s(Z,{to:"admin",children:"Admin application"}),s(Z,{to:"reports",children:"User application"})]}),qe="_header_1jpcm_1",Ee="_content_1jpcm_11",Le="_left_1jpcm_19",Te="_compact_1jpcm_31",Oe="_right_1jpcm_39",Be="_expand_1jpcm_75",Me="_admin_1jpcm_89";var k={header:qe,content:Ee,left:Le,compact:Te,right:Oe,expand:Be,admin:Me},ze="/assets/logo.77991f86.svg",Fe="/assets/expand.d72ee12c.svg";const De="_nav_1qsei_1",Ue="_link_1qsei_9",Qe="_active_1qsei_29";var B={nav:De,link:Ue,active:Qe};const X={roles:"User roles management",reports:"Reports management",panel:"Report panel"},Ve=()=>s(l,{className:B.nav,children:Object.keys(X).map(e=>s(me,{className:t=>d([B.link,t.isActive&&B.active]),to:e,children:X[e]},e))}),Ke="_button_1cxiq_1",We="_primary_1cxiq_19",He="_secondary_1cxiq_47",Je="_ghost_1cxiq_77",Ye="_menu_1cxiq_89",Ge="_rc_1cxiq_109";var M={button:Ke,primary:We,secondary:He,ghost:Je,menu:Ye,rc:Ge};const m=({variant:e,rc:t,className:n,onClick:a,children:o})=>s("button",{className:d([M.button,M[e],t&&M.rc,n]),onClick:a,children:o}),Ze="_popover_whzdp_3";var Xe={popover:Ze};const ee=({className:e,children:t})=>s(u,{className:d([Xe.popover,e]),children:t}),et="_swither_wfaiu_1",tt="_rotated_wfaiu_17",st="_popover_wfaiu_25";var z={swither:et,rotated:tt,popover:st},nt="/assets/arrow.f1d09ea6.svg";const at=()=>{const[e,t]=b.useState(!1),n=()=>{console.log("TODO: logout")};return r(m,{rc:!0,variant:"ghost",className:z.swither,onClick:()=>t(!e),children:[s("span",{children:"user name"}),s("img",{className:e?z.rotated:"",src:nt}),e&&r(ee,{className:z.popover,children:[s(m,{variant:"menu",onClick:n,children:"Log out"})," "]})]})},rt="_row_h9z0n_1",ot="_button_h9z0n_9",ct="_prev_h9z0n_41",lt="_next_h9z0n_57",it="_page_h9z0n_73",dt="_current_h9z0n_89";var $={row:rt,button:ot,prev:ct,next:lt,page:it,current:dt},ut="/assets/left.6ac9cb73.svg",mt="/assets/right.998568b5.svg";const F=h(({source:e})=>r(l,{className:$.row,children:[s("button",{className:d([$.button,$.prev]),disabled:!e.hasPreviousPage,onClick:()=>e.goPreviousPage(),children:s("img",{src:ut})}),[...Array(e.pagesCount).keys()].map(t=>s("button",{className:d([$.button,$.page,t==e.currentPage&&$.current]),onClick:()=>e.setCurrentPage(t),children:t+1},t)),s("button",{className:d([$.button,$.next]),disabled:!e.hasNextPage,onClick:()=>e.goNextPage(),children:s("img",{src:mt})})]})),ht="_SearchInput_1lle7_1",pt="_SearchInputButton_1lle7_25",_t="_SearchInputField_1lle7_39",gt="_ClearInputButton_1lle7_63";var q={SearchInput:ht,SearchInputButton:pt,SearchInputField:_t,ClearInputButton:gt},ft="/assets/search.f4a7c994.svg",vt="/assets/clear.95cabe5d.svg";const D=h(({className:e,placeholder:t,handler:n})=>{const a=b.useRef(null),o=()=>{a.current&&(a.current.value=""),n.clearFilter()};return r("div",{className:d([q.SearchInput,e]),children:[s("button",{className:q.SearchInputButton,children:s("img",{src:ft})}),s("input",{ref:a,className:q.SearchInputField,placeholder:t,defaultValue:n.search,onChange:c=>n.setFilter(c.target.value),maxLength:255}),s("button",{className:q.ClearInputButton,onClick:o,children:s("img",{src:vt})})]})}),yt="_heading_q97rv_1",bt="_empty_q97rv_11",Nt="_moved_q97rv_19",kt="_tools_q97rv_27",wt="_tables_q97rv_37",$t="_half_q97rv_51",Rt="_full_q97rv_61",Ct="_pagination_q97rv_69";var _={heading:yt,empty:bt,moved:Nt,tools:kt,tables:wt,half:$t,full:Rt,pagination:Ct};const xt="_item_1tzd4_1",Pt="_green_1tzd4_41",St="_red_1tzd4_49",It="_selected_1tzd4_65";var U={item:xt,green:Pt,red:St,selected:It};const At=({name:e,selected:t,status:n,onClick:a})=>s("button",{className:d([U.item,t&&U.selected,n&&U[n]]),onClick:a,title:e,children:e}),jt="_list_e93k5_1";var qt={list:jt};const Q=h(({className:e,data:t,isSelected:n,onSelect:a})=>s(u,{className:d([qt.list,e]),children:t.map(o=>s(At,{name:o.name,selected:n&&n(o.id),status:o.status,onClick:a&&(()=>a(o.id,o.name))},o.id))})),te="https://upward-eagle-28.hasura.app/v1/graphql",v=async(e,t,n)=>fetch(te,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","x-hasura-admin-secret":"m4gSc896kHN9CRlK5gthO5pV4IHT6nh26RTEExIpQlxdZUR19zfMpTVx8hx2JFca"},body:JSON.stringify({query:e,variables:t})}).then(a=>a.json()).then(a=>n(a)),Et={BACKEND_API_ROUTE:te,countReports(e){return async()=>v(`
      query ($where: reports_bool_exp!) {
        reports_aggregate(where: $where) {
          aggregate {
            count
          }
        }
      }
      `,{where:e.search==""?{}:{name:{_like:`%${e.search}%`}}},t=>t.data.reports_aggregate.aggregate.count)},getReports(e){return async()=>v(`
      query ($where: reports_bool_exp!, $limit: Int!, $offset: Int!) {
        reports(where: $where, limit: $limit, offset: $offset) {
          id
          name
        }
      }
      `,{where:e.search==""?{}:{name:{_like:`%${e.search}%`}},limit:e.limit,offset:e.currentPage*e.limit},t=>t.data.reports)},getReport(e){return async()=>v(`
      query ($id: uuid!) {
        reports_by_pk(id: $id) {
          id
          name
          link
        }
      }
      `,{id:e},t=>t.data.reports_by_pk)},saveReport(){return async e=>v(`
      mutation ($id: uuid!, $link: String!, $name: String!) {
        update_reports_by_pk(pk_columns: {id: $id}, _set: {link: $link, name: $name}) {
          id
        }
      }
      `,{id:e.id,name:e.name,link:e.link},t=>t.data.reports_by_pk)},addReport(){return async e=>v(`
      mutation ($link: String!, $name: String!) {
        insert_reports_one(object: {link: $link, name: $name}) {
          id
        }
      }
      `,{name:e.name,link:e.link},t=>t.data.reports_by_pk)},delReport(){return async e=>v(`
      mutation ($id: uuid!) {
        delete_reports_by_pk(id: $id) {
          link
          name
        }
      }
      `,{id:e},t=>t.data.delete_reports_by_pk)},countRoles(e){return async()=>v(`
      query ($where: roles_bool_exp!) {
        roles_aggregate(where: $where) {
          aggregate {
            count
          }
        }
      }
      `,{where:e.search==""?{}:{name:{_like:`%${e.search}%`}}},t=>t.data.roles_aggregate.aggregate.count)},getRoles(e){return async()=>v(`
      query ($where: roles_bool_exp!, $limit: Int!, $offset: Int!) {
        roles(where: $where, limit: $limit, offset: $offset) {
          id
          name
        }
      }
      `,{where:e.search==""?{}:{name:{_like:`%${e.search}%`}},limit:e.limit,offset:e.currentPage*e.limit},t=>t.data.roles)},getRole(e){return async()=>v(`
      query ($id: uuid!) {
        roles_by_pk(id: $id) {
          id
          name
        }
      }
      `,{id:e},t=>t.data.roles_by_pk)},saveRole(){return async e=>v(`
      mutation ($id: uuid!, $name: String!) {
        update_roles_by_pk(pk_columns: {id: $id}, _set: {name: $name}) {
          id
        }
      }
      `,{id:e.id,name:e.name},t=>t.data.update_roles_by_pk)},addRole(){return async e=>v(`
      mutation ($name: String!) {
        insert_roles_one(object: {name: $name}) {
          id
        }
      }
      `,{name:e.name},t=>t.data.insert_roles_one)},delRole(){return async e=>v(`
      mutation ($id: uuid!) {
        delete_roles_by_pk(id: $id) {
          name
        }
      }
      `,{id:e},t=>t.data.delete_roles_by_pk)}},Lt=new he({defaultOptions:{queries:{staleTime:1e4,keepPreviousData:!0,onError:e=>{O.errors.push(e)}}}}),g=Et;console.log("using VITE_BACKEND_API_ROUTE",g.BACKEND_API_ROUTE);const Tt=h(({className:e})=>{const{user:t}=p();N(["reports","$count",t.search],g.countReports(t),{onSuccess:a=>t.setSize(a)});const{data:n=[]}=N(["reports","$list",t.search,t.currentPage],g.getReports(t));return s(Q,{className:e,data:n,isSelected:a=>t.tabs.some(o=>o.id==a),onSelect:(a,o)=>t.open({id:a,name:o})})});var Ot="/assets/arrow.553331aa.svg";const se=()=>{const{app:e,user:t}=p(),n=e.mode=="admin";return r(j,{children:[r(l,{className:d([_.heading,!n&&_.empty,t.iframes&&_.moved]),justify:"between",children:[n?s("h2",{children:"Report panel"}):s("h2",{})," ",t.iframes&&s(m,{variant:"ghost",onClick:()=>t.arrange(!0),children:s("img",{src:Ot})})]}),s(l,{className:_.tools,children:s(D,{placeholder:"Search report",handler:t})}),s(l,{className:_.tables,children:s(Tt,{className:_.full})}),s(l,{className:_.pagination,children:s(F,{source:t})})]})},ne=h(({children:e})=>{const{app:t,user:n}=p(),a=t.mode=="admin",o=a?"Admin service":"Report panel";return r(j,{children:[r(l,{tag:"header",className:k.header,children:[r(l,{className:k.left,children:[s("img",{src:ze}),s("h2",{children:o})]}),r(l,{className:k.right,children:[a?s(Ve,{}):s("nav",{})," ",s(at,{})]})]}),r(l,{tag:"section",className:k.content,children:[r(u,{className:d([k.left,n.compact&&k.compact]),children:[n.iframes&&!n.compact&&s(se,{}),n.compact&&s(m,{variant:"primary",className:d([k.expand,a&&k.admin]),onClick:()=>n.arrange(!1),children:s("img",{src:Fe})})]}),s(u,{className:k.right,children:e})]})]})}),Bt="_panel_ahwb5_1";var Mt={panel:Bt};const V=({children:e})=>s(u,{className:Mt.panel,children:e}),zt=h(({className:e})=>{const{reports:t}=p();N(["reports","$count",t.search],g.countReports(t),{onSuccess:a=>t.setSize(a)});const{data:n=[]}=N(["reports","$list",t.search,t.currentPage],g.getReports(t));return s(Q,{className:e,data:n,isSelected:a=>t.selected&&t.id==a,onSelect:a=>t.select(a)})});var Ft="/assets/clear.95cabe5d.svg";const Dt="_box_16uit_1",Ut="_header_16uit_13",Qt="_relations_16uit_47";var K={box:Dt,header:Ut,relations:Qt};const Vt="_popover_ie8xc_1";var Kt={popover:Vt},Wt="/assets/more.8fa02e8d.svg";const Ht=({onEdit:e,onDelete:t})=>{const[n,a]=b.useState(!1);return r(m,{rc:!0,variant:"ghost",onClick:()=>a(!n),children:[s("img",{src:Wt}),n&&r(ee,{className:Kt.popover,children:[s(m,{variant:"menu",onClick:e,children:"Edit"})," ",s(m,{variant:"menu",onClick:t,children:"Delete"})]})]})},ae=({className:e,data:t,onEdit:n,onDelete:a,onClose:o,children:c})=>r(u,{className:d([K.box,e]),children:[r(l,{className:K.header,align:"center",children:[s("h3",{title:t.name,children:t.name}),s(Ht,{onEdit:n,onDelete:a}),s(m,{variant:"ghost",onClick:o,children:s("img",{src:Ft})})]}),s(u,{className:K.relations,children:c})]});var Jt="/assets/role.8aec996e.svg";const Yt=h(({className:e})=>{const{reports:t,modals:n}=p(),{data:a={}}=N(["reports",t.id],g.getReport(t.id));return r(ae,{className:e,data:a,onEdit:()=>{n.show("edit report")},onDelete:()=>{n.show("delete report")},onClose:()=>{t.unselect()},children:[s("p",{title:a.link,children:a.link}),s("h4",{children:"User roles"}),s("ul",{children:a.relations&&a.relations.map(I=>r("li",{children:[s("img",{src:Jt}),I.name]},I.id))})]})}),Gt=h(()=>{const{modals:e,reports:t}=p();return r(V,{children:[s(l,{className:_.heading,align:"center",justify:"between",children:s("h2",{children:"Reports management"})}),r(l,{className:_.tools,children:[s(D,{placeholder:"Search report",handler:t}),s(m,{variant:"secondary",children:"Import reports"}),s(m,{variant:"primary",onClick:()=>e.show("add report"),children:"Add new report"})]}),r(l,{className:_.tables,children:[s(zt,{className:_.half}),t.selected&&s(Yt,{className:_.half})]}),s(l,{className:_.pagination,children:s(F,{source:t})})]})}),Zt="_tabs_1lsbn_1",Xt="_tab_1lsbn_1",es="_selected_1lsbn_23",ts="_name_1lsbn_31",ss="_close_1lsbn_49";var A={tabs:Zt,tab:Xt,selected:es,name:ts,close:ss},ns="/assets/close.6bf83a4e.svg",as="/assets/close_gray.00c2b2d7.svg";const rs=h(()=>{const{user:e}=p();return s(l,{tag:"ul",className:A.tabs,children:e.tabs.map((t,n)=>{const a=n==e.selected;return r(l,{tag:"li",className:d([A.tab,a&&A.selected]),align:"center",children:[s("h4",{onClick:()=>e.select(n),className:A.name,children:t.name}),s(m,{variant:"ghost",onClick:()=>e.close(n),className:A.close,children:s("img",{src:a?ns:as})})]},t.id)})})}),os="_iframe_5z6ky_1";var cs={iframe:os};const ls=h(()=>{const{user:e}=p(),t=e.tabs[e.selected].id,{data:n={}}=N(["reports",t],g.getReport(t));return console.log("ReportIFrame:",n.link),s("iframe",{className:cs.iframe,src:n.link})}),is=()=>(p(),r(j,{children:[s(rs,{}),s(ls,{})]})),re=h(()=>{const{user:e}=p();return e.iframes?s(is,{}):s(V,{children:s(se,{})})}),ds=h(({className:e})=>{const{roles:t}=p();N(["roles","$count",t.search],g.countRoles(t),{onSuccess:a=>t.setSize(a)});const{data:n=[]}=N(["roles","$list",t.search,t.currentPage],g.getRoles(t));return s(Q,{className:e,data:n,isSelected:a=>t.selected&&t.id==a,onSelect:a=>t.select(a)})});var us="/assets/report.31615cc7.svg";const ms=h(({className:e})=>{const{roles:t,modals:n}=p(),{data:a={}}=N(["roles",t.id],g.getRole(t.id));return r(ae,{className:e,data:a,onEdit:()=>{n.show("edit role")},onDelete:()=>{n.show("delete role")},onClose:()=>{t.unselect()},children:[s("h4",{children:"Reports"}),s("ul",{children:a.relations&&a.relations.map(I=>r("li",{children:[s("img",{src:us}),I.name]},I.id))})]})}),hs=h(()=>{const{modals:e,roles:t}=p();return r(V,{children:[s(l,{className:_.heading,align:"center",children:s("h2",{children:"User roles management "})}),r(l,{className:_.tools,children:[s(D,{placeholder:"Search user role",handler:t}),s(m,{variant:"primary",onClick:()=>e.show("add role"),children:"Add new role"})]}),r(l,{className:_.tables,children:[s(ds,{className:_.half}),t.selected&&s(ms,{className:_.half})]}),s(l,{className:_.pagination,children:s(F,{source:t})})]})}),ps=()=>r(J,{children:[s(C,{path:"roles",element:s(hs,{})}),s(C,{path:"reports",element:s(Gt,{})}),s(C,{path:"panel",element:s(re,{})})]}),_s=()=>s(ne,{children:s(ps,{})}),gs=()=>s(ne,{children:s(re,{})}),fs=()=>{const e=_e(),{app:t,user:n}=p();return b.useEffect(()=>{e.pathname.startsWith("/admin")&&t.setMode("admin"),e.pathname.startsWith("/reports")&&t.setMode("user"),t.mode=="admin"&&n.iframes&&n.closeAll()},[e]),r(J,{children:[s(C,{path:"/admin/*",element:s(_s,{})}),s(C,{path:"/reports/*",element:s(gs,{})}),s(C,{path:"/",element:s(je,{})})]})},vs=()=>s(pe,{children:s(fs,{})}),ys="_input_1x89a_1";var bs={input:ys};const S=({className:e,placeholder:t,defaultValue:n,onChange:a})=>s("input",{className:d([bs.input,e]),placeholder:t,defaultValue:n,onChange:o=>a&&a(o.target.value),maxLength:255}),Ns="_fullscreen_v29ki_1",ks="_underlay_v29ki_17",ws="_overlay_v29ki_29",$s="_modal_v29ki_45",Rs="_fieldset_v29ki_57",Cs="_field_v29ki_57",xs="_confirm_v29ki_79",Ps="_confirmText_v29ki_93";var i={fullscreen:Ns,underlay:ks,overlay:ws,modal:$s,fieldset:Rs,field:Cs,confirm:xs,confirmText:Ps};const Ss=h(()=>{const{modals:e}=p(),[t]=b.useState({name:"",link:""}),n=x(),a=P(g.addReport()),o=async()=>{e.close(),await a.mutateAsync(t),await n.invalidateQueries("reports")};return r(u,{tag:"form",className:d([i.modal,i.fieldset]),children:[s("h3",{children:"Add new report"}),r(u,{className:i.field,children:[s("label",{children:"Name"}),s(S,{placeholder:"Report name",defaultValue:t.name,onChange:c=>t.name=c})," "]}),r(u,{className:i.field,children:[s("label",{children:"Link"}),s(S,{placeholder:"Link to OBIEE",onChange:c=>t.link=c})," "]}),r(u,{className:i.field,children:[s("label",{children:"User role"}),s("input",{})]}),r(l,{justify:"between",children:[s(m,{variant:"secondary",onClick:()=>e.close(),children:"Cancel"}),s(m,{variant:"primary",onClick:o,children:"Add report"})]})]})}),Is=h(()=>{const{reports:e,modals:t}=p(),{data:n={}}=N(["reports",e.id],g.getReport(e.id)),a=x(),o=P(g.saveReport()),c=async()=>{t.close(),await o.mutateAsync(n),await a.invalidateQueries("reports")};return r(u,{tag:"form",className:d([i.modal,i.fieldset]),children:[s("h3",{children:"Edit report"}),r(u,{className:i.field,children:[s("label",{children:"Name"}),s(S,{placeholder:"Report name",defaultValue:n.name,onChange:y=>n.name=y})," "]}),r(u,{className:i.field,children:[s("label",{children:"Link"}),s(S,{placeholder:"Link to OBIEE",defaultValue:n.link,onChange:y=>n.link=y})," "]}),r(l,{justify:"between",children:[s(m,{variant:"secondary",onClick:()=>t.close(),children:"Cancel"}),s(m,{variant:"primary",onClick:c,children:"Save"})]})]})}),As=h(()=>{const{reports:e,modals:t}=p(),n=e.id,a=x(),o=P(g.delReport()),c=async()=>{e.unselect(),t.close(),await o.mutateAsync(n),await a.invalidateQueries("reports")};return r(u,{tag:"form",className:d([i.modal,i.confirm]),children:[s(l,{className:i.confirmText,children:"Selected report will be deleted from the System. Would you like to proceed?"}),r(l,{justify:"between",children:[s(m,{variant:"secondary",onClick:()=>t.close(),children:"Cancel"}),s(m,{variant:"primary",onClick:c,children:"Yes, delete"})]})]})}),js=h(()=>{const{modals:e}=p(),[t]=b.useState({name:""}),n=x(),a=P(g.addRole()),o=async()=>{e.close(),await a.mutateAsync(t),await n.invalidateQueries("roles")};return r(u,{tag:"form",className:d([i.modal,i.fieldset]),children:[" ",s("h3",{children:"Add new role"}),r(u,{className:i.field,children:[s("label",{children:"Name"}),s(S,{placeholder:"User role name",defaultValue:t.name,onChange:c=>t.name=c})," "]}),r(u,{className:i.field,children:[s("label",{children:"Reports"}),s("input",{})]}),r(l,{justify:"between",children:[s(m,{variant:"secondary",onClick:()=>e.close(),children:"Cancel"}),s(m,{variant:"primary",onClick:o,children:"Save"})]})]})}),qs=h(()=>{const{roles:e,modals:t}=p(),{data:n={}}=N(["roles",e.id],g.getRole(e.id)),a=x(),o=P(g.saveRole()),c=async()=>{t.close(),await o.mutateAsync(n),await a.invalidateQueries("roles")};return r(u,{tag:"form",className:d([i.modal,i.fieldset]),children:[s("h3",{children:"Edit role"}),r(u,{className:i.field,children:[s("label",{children:"Name"}),s(S,{placeholder:"User role name",defaultValue:n.name,onChange:y=>n.name=y})," "]}),r(u,{className:i.field,children:[s("label",{children:"Reports"}),s("input",{})]}),r(l,{justify:"between",children:[s(m,{variant:"secondary",onClick:()=>t.close(),children:"Cancel"}),s(m,{variant:"primary",onClick:c,children:"Save"})]})]})}),Es=h(()=>{const{roles:e,modals:t}=p(),n=e.id,a=x(),o=P(g.delRole()),c=async()=>{e.unselect(),t.close(),await o.mutateAsync(n),await a.invalidateQueries("roles")};return r(u,{tag:"form",className:d([i.modal,i.confirm]),children:[s(l,{className:i.confirmText,children:"Selected user role will be deleted from the System. Would you like to proceed?"}),r(l,{justify:"between",children:[s(m,{variant:"secondary",onClick:()=>t.close(),children:"Cancel"}),s(m,{variant:"primary",onClick:c,children:"Yes, delete"})]})]})}),Ls=h(()=>{const{modals:e,reports:t}=p(),n=a=>{switch(a){case"add report":return s(Ss,{});case"edit report":return s(Is,{});case"delete report":return s(As,{});case"add role":return s(js,{});case"edit role":return s(qs,{});case"delete role":return s(Es,{});default:throw new Error(`Action "${a}" is not realized `)}};return r(j,{children:[e.active&&s("div",{className:d([i.fullscreen,i.underlay])}),e.active&&s("div",{className:d([i.fullscreen,i.overlay]),children:n(e.action)})]})}),Ts="_spinner_1hmny_19",Os="_rotating_1hmny_1",Bs="_visible_1hmny_75",Ms="_showing_1hmny_1";var oe={spinner:Ts,rotating:Os,visible:Bs,showing:Ms};const zs=(e,t)=>{const[n,a]=b.useState(e);let o;return b.useEffect(()=>(o=setTimeout(()=>a(e),t),()=>{o&&clearTimeout(o)}),[e]),n},Fs=()=>{const e=ge()!=0,t=zs(e,400),n=e&&t;return s("div",{className:d([oe.spinner,n&&oe.visible])})},Ds="_toasts_15fe5_1",Us="_toast_15fe5_1";var ce={toasts:Ds,toast:Us};const Qs=h(()=>{const{errors:e}=p();return s(u,{className:ce.toasts,children:e.toasts.map(t=>s("span",{className:ce.toast,children:t}))})});fe.render(s(b.StrictMode,{children:s(G.Provider,{value:O,children:r(ve,{client:Lt,children:[r(Re,{children:[s(vs,{}),s(Ls,{}),s(Fs,{}),s(Qs,{})]}),!1]})})}),document.getElementById("root"));