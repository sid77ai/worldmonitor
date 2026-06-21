import{a as o,bL as T,fU as k,S as E,a7 as r,aa as C,n as g,a8 as u,dx as P,s as w,t as S,e as p,a6 as b,a9 as _,ab as $,bw as j}from"./panels-CMqS79fo.js";import"./d3-DE1H7FhT.js";import"./i18n-qlunRAMb.js";function D(i,e){if(i==="runtime-config")return o("modals.runtimeConfig.title");const l=`panels.${i.replace(/-([a-z])/g,(f,c)=>c.toUpperCase())}`,d=o(l);return d===l?e:d}function W(){var c;const i=document.getElementById("app");if(!i)return;document.title=`${o("header.settings")} - Sid's World Monitor`;const e=T(E.panels,k),v=new Set(Object.keys(r));for(const n of Object.keys(e))!v.has(n)&&n!=="runtime-config"&&delete e[n];const l=new Set(C[g]??[]);for(const n of Object.keys(r))n in e||(e[n]={...u(n,g),enabled:l.has(n)});const d=P();function f(){const h=Object.entries(e).filter(([t])=>(t!=="runtime-config"||d)&&(!t.startsWith("cw-")||b())).map(([t,s])=>{const a=r[t]?u(t,g):s;return`
        <div class="panel-toggle-item ${s.enabled?"active":""}" data-panel="${p(t)}">
          <div class="panel-toggle-checkbox">${s.enabled?"✓":""}</div>
          <span class="panel-toggle-label">${p(D(t,a.name??s.name))}</span>
        </div>
      `}).join(""),m=document.getElementById("panelToggles");m&&(w(m,S(h,"legacy direct innerHTML migration")),m.querySelectorAll(".panel-toggle-item").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.panel,a=e[s];if(a){const A=r[s]?u(s,g):a;if(!a.enabled&&!_(s,A,b())||!a.enabled&&!b()&&Object.entries(e).filter(([L,y])=>y.enabled&&!L.startsWith("cw-")).length>=$)return;a.enabled=!a.enabled,j(E.panels,e),f()}})}))}w(i,S(`
    <div class="settings-window-shell">
      <div class="settings-window-header">
        <div class="settings-window-header-text">
          <span class="settings-window-title">${p(o("header.settings"))}</span>
          <p class="settings-window-caption">${p(o("header.panelDisplayCaption"))}</p>
        </div>
        <button type="button" class="modal-close" id="settingsWindowClose">×</button>
      </div>
      <div class="panel-toggle-grid" id="panelToggles"></div>
    </div>
  `,"legacy direct innerHTML migration")),(c=document.getElementById("settingsWindowClose"))==null||c.addEventListener("click",()=>{window.close()}),f()}export{W as initSettingsWindow};
