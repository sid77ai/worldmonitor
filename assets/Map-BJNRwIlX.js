const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-B98aw5CH.js","assets/panels-CMqS79fo.js","assets/d3-DE1H7FhT.js","assets/i18n-qlunRAMb.js"])))=>i.map(i=>d[i]);
var xt=Object.defineProperty;var wt=(v,t,n)=>t in v?xt(v,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):v[t]=n;var f=(v,t,n)=>wt(v,typeof t!="symbol"?t+"":t,n);import{bj as V,hl as Et,ak as T,e as r,j as kt,s as L,t as S,a as o,hm as tt,hn as Lt,gg as et,T as z,g as E,ho as St,hp as Tt,hq as At,hr as Rt,hs as Nt,fa as st,ht as Mt,bg as P,b6 as Pt,hu as ft,bz as Ht,n as A,hv as Dt,bl as at,hw as It,bk as U,hx as nt,bm as it,bn as ot,hy as Ft,hz as Ot,b3 as pt,hA as zt,hB as Ut,bf as lt,hC as _t,hD as Bt,ds as Gt,hE as Yt,bh as Wt,bi as jt,bo as Xt,bp as Vt,bq as qt,br as Zt,_,hF as Kt,hG as Qt,hH as Jt,dp as te,au as rt,hI as ee,av as B,bu as se,aD as ae,hJ as ne,hK as ie,b$ as oe}from"./panels-CMqS79fo.js";import{a as ct,u as pe,v as le,w as re,f as dt,x as ut}from"./d3-DE1H7FhT.js";import{f as ce}from"./topojson-BwRznoQ3.js";import{d as de,r as ue,h as he,e as me}from"./embed-url-CDxmYqzA.js";class ve{mount(t,n){if(!n.length)return;const e=n.reduce((h,g)=>h+g.share,0)||1,a=80,s=a/2,i=a/2,p=34,l=18,c=window.devicePixelRatio||1,u=document.createElement("canvas");u.width=a*c,u.height=a*c,u.style.width=`${a}px`,u.style.height=`${a}px`,u.className="popup-hs2-ring-canvas";const m=u.getContext("2d");if(!m)return;m.scale(c,c);let y=-Math.PI/2;n.forEach(h=>{const g=h.share/e*2*Math.PI;m.beginPath(),m.arc(s,i,p,y,y+g),m.arc(s,i,l,y+g,y,!0),m.closePath(),m.fillStyle=h.color,m.fill(),y+=g}),t.appendChild(u);const d=document.createElement("div");d.className="popup-hs2-ring-legend",n.forEach(h=>{const g=document.createElement("div");g.className="popup-hs2-ring-legend-item";const $=document.createElement("span");$.className="popup-hs2-ring-dot",$.style.background=h.color;const C=document.createElement("span");C.className="popup-hs2-ring-label",C.textContent=h.label;const b=document.createElement("span");b.className="popup-hs2-ring-pct",b.textContent=`${h.share}%`,g.appendChild($),g.appendChild(C),g.appendChild(b),d.appendChild(g)}),t.appendChild(d)}}const D={news:.35,cii:.25,geo:.25,military:.15},F=new Map,$t=1440*60*1e3,ht=48;let Y=null,W=null;function ye(v){Y=v}function ge(v){W=v}function fe(v){return v.escalationScore??3}function $e(v){if(!Y)return null;const t=Et(v);if(t.length===0)return null;const n=t.map(e=>Y(e)).filter(e=>e!==null);return n.length>0?Math.max(...n):null}function be(v){return W?W(v.lat,v.lon,150):null}function Ce(v,t,n){return Math.min(100,v*15+(t?30:0)+n*5)}function xe(v){return v??30}function we(v,t){return v===0?0:Math.min(100,v+t*10)}function Ee(v,t){return Math.min(100,v*10+t*15)}function ke(v){return v.newsActivity*D.news+v.ciiContribution*D.cii+v.geoConvergence*D.geo+v.militaryActivity*D.military}function Le(v){return 1+v/100*4}function Se(v,t){return v*.3+t*.7}function Te(v){const t=Date.now()-$t,n=v.filter(e=>e.timestamp>=t);return n.length>ht?n.slice(-ht):n}function Ae(v){if(v.length<3)return"stable";let t=0,n=0,e=0,a=0,s=0;for(let l=0;l<v.length;l++){const c=v[l];c&&(t+=s,n+=c.score,e+=s*c.score,a+=s*s,s++)}if(s<3)return"stable";const i=s*a-t*t;if(i===0)return"stable";const p=(s*e-t*n)/i;return p>.1?"escalating":p<-.1?"de-escalating":"stable"}function Re(v,t){const n=V.find(d=>d.id===v);if(!n)throw new Error(`Hotspot not found: ${v}`);const e=fe(n),a=F.get(v),s=Date.now(),i={newsActivity:Ce(t.newsMatches,t.hasBreaking,t.newsVelocity),ciiContribution:xe(t.ciiScore),geoConvergence:we(t.geoAlertScore,t.geoAlertTypes),militaryActivity:Ee(t.flightsNearby,t.vesselsNearby)},p=ke(i),l=Le(p),c=Se(e,l);let u=(a==null?void 0:a.history)??[];u=Te(u),u.push({timestamp:s,score:c});const m=Ae(u),y={hotspotId:v,staticBaseline:e,dynamicScore:Math.round(l*10)/10,combinedScore:Math.round(c*10)/10,trend:m,components:i,history:u,lastUpdated:new Date};return F.set(v,y),y}function bt(v){return F.get(v)??null}function mt(v,t,n,e){const s=(n-v)*Math.PI/180,i=(e-t)*Math.PI/180,p=Math.sin(s/2)**2+Math.cos(v*Math.PI/180)*Math.cos(n*Math.PI/180)*Math.sin(i/2)**2;return 6371*2*Math.atan2(Math.sqrt(p),Math.sqrt(1-p))}function Ne(v,t,n,e=200){let a=0,s=0;for(const i of t)mt(v.lat,v.lon,i.lat,i.lon)<=e&&a++;for(const i of n)mt(v.lat,v.lon,i.lat,i.lon)<=e&&s++;return{flights:a,vessels:s}}let j={flights:[],vessels:[]};function Me(v,t){j={flights:v,vessels:t}}function Pe(v,t,n,e){const a=V.find(c=>c.id===v);if(!a)return null;const s=$e(v),i=be(a),p=Ne(a,j.flights,j.vessels),l={newsMatches:t,hasBreaking:n,newsVelocity:e,ciiScore:s,geoAlertScore:(i==null?void 0:i.score)??0,geoAlertTypes:(i==null?void 0:i.types)??0,flightsNearby:p.flights,vesselsNearby:p.vessels};return Re(v,l)}function He(v){const t=F.get(v);if(!t||t.history.length<2)return null;const e=Date.now()-$t,a=t.history.find(i=>i.timestamp>=e),s=t.history[t.history.length-1];return!a||!s?null:{change:Math.round((s.score-a.score)*10)/10,start:Math.round(a.score*10)/10,end:Math.round(s.score*10)/10}}function De(v){try{return new URL(v).hostname.replace("www.","")}catch{return""}}function Ie(v,t={}){const n=t.limit??3,e=t.label??"Source",a=t.containerClass??"popup-source-links",s=t.linkClass??"popup-link",i=[];for(const p of v??[]){if(i.length>=n)break;const l=T(p);if(!l)continue;const c=De(p)||`${e} ${i.length+1}`;i.push(`<a class="${r(s)}" href="${l}" target="_blank" rel="noopener noreferrer nofollow">${r(c)} →</a>`)}return i.length?`<div class="${r(a)}">${i.join("")}</div>`:""}const G={suez:[{label:"Energy",share:30,color:"#f97316"},{label:"Machinery",share:22,color:"#3b82f6"},{label:"Chemicals",share:16,color:"#a855f7"},{label:"Food",share:14,color:"#22c55e"},{label:"Other",share:18,color:"#64748b"}],malacca_strait:[{label:"Energy",share:34,color:"#f97316"},{label:"Electronics",share:25,color:"#3b82f6"},{label:"Chemicals",share:14,color:"#a855f7"},{label:"Food",share:12,color:"#22c55e"},{label:"Other",share:15,color:"#64748b"}],hormuz_strait:[{label:"Energy",share:78,color:"#f97316"},{label:"Chemicals",share:9,color:"#a855f7"},{label:"Food",share:7,color:"#22c55e"},{label:"Other",share:6,color:"#64748b"}],bab_el_mandeb:[{label:"Energy",share:32,color:"#f97316"},{label:"Machinery",share:20,color:"#3b82f6"},{label:"Chemicals",share:15,color:"#a855f7"},{label:"Food",share:13,color:"#22c55e"},{label:"Other",share:20,color:"#64748b"}],panama:[{label:"Bulk",share:28,color:"#eab308"},{label:"Energy",share:18,color:"#f97316"},{label:"Containers",share:35,color:"#3b82f6"},{label:"Other",share:19,color:"#64748b"}],taiwan_strait:[{label:"Electronics",share:40,color:"#3b82f6"},{label:"Machinery",share:22,color:"#6366f1"},{label:"Energy",share:14,color:"#f97316"},{label:"Chemicals",share:12,color:"#a855f7"},{label:"Other",share:12,color:"#64748b"}],cape_of_good_hope:[{label:"Bulk",share:35,color:"#eab308"},{label:"Energy",share:22,color:"#f97316"},{label:"Containers",share:28,color:"#3b82f6"},{label:"Other",share:15,color:"#64748b"}],gibraltar:[{label:"Containers",share:30,color:"#3b82f6"},{label:"Energy",share:25,color:"#f97316"},{label:"Bulk",share:20,color:"#eab308"},{label:"Other",share:25,color:"#64748b"}],bosphorus:[{label:"Energy",share:58,color:"#f97316"},{label:"Bulk",share:18,color:"#eab308"},{label:"Containers",share:14,color:"#3b82f6"},{label:"Other",share:10,color:"#64748b"}]};function Fe(v){const a=2*Math.PI*28;let s=0;const i=v.map(l=>{const c=l.share/100*a,u=`<circle cx="36" cy="36" r="28" fill="none" stroke="${l.color}" stroke-width="10" stroke-dasharray="${c.toFixed(2)} ${(a-c).toFixed(2)}" stroke-dashoffset="${(-s).toFixed(2)}" />`;return s+=c,u}),p=v.map(l=>`<span class="sector-legend-item"><span class="sector-dot" style="background:${l.color}"></span>${r(l.label)}&nbsp;${l.share}%</span>`).join(" · ");return`
    <div class="sector-ring-wrap">
      <svg width="72" height="72" viewBox="0 0 72 72" style="transform:rotate(-90deg)">${i.join("")}</svg>
      <div class="sector-legend">${p}</div>
    </div>`}function Oe(v){return v==="POSITION_SOURCE_WINGBITS"?'<a href="https://wingbits.com?utm_source=worldmonitor&utm_medium=referral&utm_campaign=worldmonitor" target="_blank" rel="noopener" style="color:inherit">wingbits.com</a>':v==="POSITION_SOURCE_OPENSKY"?'<a href="https://opensky-network.org" target="_blank" rel="noopener" style="color:inherit">opensky-network.org</a>':r(v)}function I(v){if(!v)return"—";const t=new Date(v.includes("T")?v:v.replace(" ","T")+"Z");return Number.isNaN(t.getTime())?"—":t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}function vt(v){return v===void 0||v===0?"":`<span style="color:${v>0?"#f97316":"#22c55e"};font-size:10px;margin-left:3px">${v>0?"+":""}${v}m</span>`}const N=class N{constructor(t){f(this,"container");f(this,"popup",null);f(this,"onClose");f(this,"cableAdvisories",[]);f(this,"repairShips",[]);f(this,"chokepointData",null);f(this,"transitChart",null);f(this,"isMobileSheet",!1);f(this,"sheetTouchStartY",null);f(this,"sheetCurrentOffset",0);f(this,"mobileDismissThreshold",96);f(this,"outsideListenerTimeoutId",null);f(this,"handleOutsideClick",t=>{this.popup&&!this.popup.contains(t.target)&&this.hide()});f(this,"handleEscapeKey",t=>{t.key==="Escape"&&this.hide()});f(this,"handleSheetTouchStart",t=>{var a;if(!this.popup||!this.isMobileSheet||t.touches.length!==1)return;const n=t.target,e=this.popup.querySelector(".popup-body");if(n!=null&&n.closest(".popup-body")&&e&&e.scrollTop>0){this.sheetTouchStartY=null;return}this.sheetTouchStartY=((a=t.touches[0])==null?void 0:a.clientY)??null,this.sheetCurrentOffset=0,this.popup.classList.add("dragging")});f(this,"handleSheetTouchMove",t=>{var a;if(!this.popup||!this.isMobileSheet||this.sheetTouchStartY===null)return;const n=(a=t.touches[0])==null?void 0:a.clientY;if(n==null)return;const e=Math.max(0,n-this.sheetTouchStartY);e<=0||(this.sheetCurrentOffset=e,this.popup.style.transform=`translate3d(0, ${e}px, 0)`,t.preventDefault())});f(this,"handleSheetTouchEnd",()=>{if(!this.popup||!this.isMobileSheet||this.sheetTouchStartY===null)return;const t=this.sheetCurrentOffset>=this.mobileDismissThreshold;if(this.popup.classList.remove("dragging"),this.sheetTouchStartY=null,t){this.hide();return}this.sheetCurrentOffset=0,this.popup.style.transform="",this.popup.classList.add("open")});this.container=t}setChokepointData(t){this.chokepointData=t}show(t){var a,s;this.hide(),this.isMobileSheet=kt(),this.popup=document.createElement("div"),this.popup.className=this.isMobileSheet?"map-popup map-popup-sheet":"map-popup";const n=this.renderContent(t);L(this.popup,S(this.isMobileSheet?`<button class="map-popup-sheet-handle" aria-label="${o("common.close")}"></button>${n}`:n,"legacy direct innerHTML migration"));const e=this.container.getBoundingClientRect();if(this.isMobileSheet?(this.popup.style.left="",this.popup.style.top="",this.popup.style.transform=""):this.positionDesktopPopup(t,e),document.body.appendChild(this.popup),t.type==="waterway"){const i=t.data,p=(s=(a=this.chokepointData)==null?void 0:a.chokepoints)==null?void 0:s.find(y=>y.id===i.chokepointId),l=this.popup.querySelector("[data-transit-chart]"),c=(p==null?void 0:p.id)??"",u=z();if(l&&c&&u){const y=N.historyCache.get(c);y&&y.length?(this.transitChart=new tt,this.transitChart.mount(l,y)):N.historyInflight.has(c)||(N.historyInflight.add(c),Lt(c).then(d=>{var g;N.historyInflight.delete(c);const h=(g=this.popup)==null?void 0:g.querySelector(`[data-transit-chart-id="${c}"]`);h&&(d.history.length?(N.historyCache.set(c,d.history),h.textContent="",this.transitChart=new tt,this.transitChart.mount(h,d.history)):h.textContent=o("components.supplyChain.historyUnavailable")||"History unavailable")}).catch(()=>{var h;N.historyInflight.delete(c);const d=(h=this.popup)==null?void 0:h.querySelector(`[data-transit-chart-id="${c}"]`);d&&(d.textContent=o("components.supplyChain.historyUnavailable")||"History unavailable")}))}c&&!u&&et("chokepoint-transit-chart");const m=G[i.chokepointId];if(m!=null&&m.length){const y=this.popup.querySelector(`[data-hs2-ring="${i.chokepointId}"]`);y?new ve().mount(y,m):z()||et("chokepoint-sector-ring")}}this.popup.addEventListener("click",i=>{const p=i.target;if(p.closest(".popup-close")||p.closest(".map-popup-sheet-handle")){this.hide();return}const l=p.closest(".cluster-toggle");if(l){const c=l.previousElementSibling;if(!c)return;const u=c.style.display!=="none";c.style.display=u?"none":"",l.textContent=u?l.dataset.more??"":l.dataset.less??""}}),this.isMobileSheet&&(this.popup.addEventListener("touchstart",this.handleSheetTouchStart,{passive:!0}),this.popup.addEventListener("touchmove",this.handleSheetTouchMove,{passive:!1}),this.popup.addEventListener("touchend",this.handleSheetTouchEnd),this.popup.addEventListener("touchcancel",this.handleSheetTouchEnd),requestAnimationFrame(()=>{this.popup&&(this.popup.classList.add("open"),this.popup.addEventListener("transitionend",()=>{this.popup&&(this.popup.style.willChange="auto")},{once:!0}))})),this.outsideListenerTimeoutId!==null&&window.clearTimeout(this.outsideListenerTimeoutId),this.outsideListenerTimeoutId=window.setTimeout(()=>{document.addEventListener("click",this.handleOutsideClick),document.addEventListener("touchstart",this.handleOutsideClick),document.addEventListener("keydown",this.handleEscapeKey),this.outsideListenerTimeoutId=null},0)}showRouteBreakdown(t,n,e,a){var b,w;this.hide();const s=((b=this.chokepointData)==null?void 0:b.chokepoints)??[],i=((w=n.map(x=>{var k;return{id:x,score:((k=s.find(R=>R.id===x))==null?void 0:k.disruptionScore)??0}}).sort((x,k)=>k.score-x.score)[0])==null?void 0:w.id)??n[0]??"",p=s.find(x=>x.id===i),l=i?G[i]??[]:[],c={WAR_RISK_TIER_WAR_ZONE:"War Zone",WAR_RISK_TIER_CRITICAL:"Critical",WAR_RISK_TIER_HIGH:"High",WAR_RISK_TIER_ELEVATED:"Elevated",WAR_RISK_TIER_NORMAL:"Normal"},u={WAR_RISK_TIER_WAR_ZONE:"#ef4444",WAR_RISK_TIER_CRITICAL:"#ef4444",WAR_RISK_TIER_HIGH:"#f59e0b",WAR_RISK_TIER_ELEVATED:"#f59e0b",WAR_RISK_TIER_NORMAL:"var(--text-dim,#888)"},m=(p==null?void 0:p.warRiskTier)??"WAR_RISK_TIER_NORMAL",y=(p==null?void 0:p.disruptionScore)??0,d=y>70?"#ef4444":y>30?"#f59e0b":"var(--text-dim,#888)",h=l.slice(0,2),g=h.length?h.map(x=>`<span style="display:inline-flex;align-items:center;gap:3px;margin-right:6px"><span style="width:8px;height:8px;border-radius:50%;background:${x.color};display:inline-block"></span><span style="font-size:10px">${r(x.label)} ${x.share}%</span></span>`).join(""):'<span style="font-size:10px;opacity:.5">No sector data</span>',$=`
      <div class="popup-header">
        <span class="popup-title" style="font-size:12px">${r(t.routeName)}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body" style="padding:8px 12px;min-width:200px">
        ${p?`<div style="font-size:11px;font-weight:600;margin-bottom:6px">${r(p.name)}</div>`:""}
        <div style="display:flex;gap:10px;margin-bottom:6px">
          <span style="font-size:10px;opacity:.6">Disruption</span>
          <span style="font-size:10px;font-weight:600;color:${d}">${y}/100</span>
        </div>
        <div style="display:flex;gap:10px;margin-bottom:6px">
          <span style="font-size:10px;opacity:.6">War Risk</span>
          <span style="font-size:10px;font-weight:600;color:${u[m]??"inherit"}">${c[m]??"Normal"}</span>
        </div>
        <div style="margin-top:4px">${g}</div>
      </div>`;this.isMobileSheet=!1,this.popup=document.createElement("div"),this.popup.className="map-popup map-popup-route-breakdown",L(this.popup,S($,"legacy direct innerHTML migration"));const C=this.container.getBoundingClientRect();this.positionDesktopPopup({x:e,y:a,type:"waterway",data:{}},C),document.body.appendChild(this.popup),this.popup.addEventListener("click",x=>{x.target.closest(".popup-close")&&this.hide()}),this.outsideListenerTimeoutId!==null&&clearTimeout(this.outsideListenerTimeoutId),this.outsideListenerTimeoutId=window.setTimeout(()=>{this.outsideListenerTimeoutId=null,document.addEventListener("click",this.handleOutsideClick),document.addEventListener("keydown",this.handleEscapeKey)},200)}positionDesktopPopup(t,n){if(!this.popup)return;const e=380,a=50,s=60;this.popup.style.visibility="hidden",this.popup.style.top="0",this.popup.style.left="-9999px",document.body.appendChild(this.popup);const i=this.popup.offsetHeight;document.body.removeChild(this.popup),this.popup.style.visibility="";const p=n.left+t.x,l=n.top+t.y,c=window.innerWidth-e-20;let u=p+20;u>c&&(u=Math.max(10,p-e-20));const m=window.innerHeight-l-a,y=l-s;let d;m>=i?d=l+10:y>=i?d=l-i-10:d=s,d=Math.max(s,d);const h=window.innerHeight-i-a;h>s&&(d=Math.min(d,h)),this.popup.style.left=`${u}px`,this.popup.style.top=`${d}px`}clampPopupToViewport(){if(!this.popup||this.isMobileSheet)return;const t=this.popup.getBoundingClientRect(),n=20,e=60,a=t.bottom-(window.innerHeight-n);if(a>0){const s=Number.parseFloat(this.popup.style.top)||0;this.popup.style.top=`${Math.max(e,s-a)}px`}}hide(){var t,n;(t=this.transitChart)==null||t.destroy(),this.transitChart=null,this.outsideListenerTimeoutId!==null&&(window.clearTimeout(this.outsideListenerTimeoutId),this.outsideListenerTimeoutId=null),this.popup&&(this.popup.removeEventListener("touchstart",this.handleSheetTouchStart),this.popup.removeEventListener("touchmove",this.handleSheetTouchMove),this.popup.removeEventListener("touchend",this.handleSheetTouchEnd),this.popup.removeEventListener("touchcancel",this.handleSheetTouchEnd),this.popup.remove(),this.popup=null,this.isMobileSheet=!1,this.sheetTouchStartY=null,this.sheetCurrentOffset=0,document.removeEventListener("click",this.handleOutsideClick),document.removeEventListener("touchstart",this.handleOutsideClick),document.removeEventListener("keydown",this.handleEscapeKey),(n=this.onClose)==null||n.call(this))}setOnClose(t){this.onClose=t}setCableActivity(t,n){this.cableAdvisories=t,this.repairShips=n}renderContent(t){switch(t.type){case"conflict":return this.renderConflictPopup(t.data);case"hotspot":return this.renderHotspotPopup(t.data,t.relatedNews);case"earthquake":return this.renderEarthquakePopup(t.data);case"weather":return this.renderWeatherPopup(t.data);case"base":return this.renderBasePopup(t.data);case"waterway":return this.renderWaterwayPopup(t.data);case"apt":return this.renderAPTPopup(t.data);case"cyberThreat":return this.renderCyberThreatPopup(t.data);case"nuclear":return this.renderNuclearPopup(t.data);case"economic":return this.renderEconomicPopup(t.data);case"irradiator":return this.renderIrradiatorPopup(t.data);case"pipeline":return this.renderPipelinePopup(t.data);case"cable":return this.renderCablePopup(t.data);case"cable-advisory":return this.renderCableAdvisoryPopup(t.data);case"repair-ship":return this.renderRepairShipPopup(t.data);case"outage":return this.renderOutagePopup(t.data);case"datacenter":return this.renderDatacenterPopup(t.data);case"datacenterCluster":return this.renderDatacenterClusterPopup(t.data);case"ais":return this.renderAisPopup(t.data);case"protest":return this.renderProtestPopup(t.data);case"protestCluster":return this.renderProtestClusterPopup(t.data);case"flight":return this.renderFlightPopup(t.data);case"aircraft":return this.renderAircraftPopup(t.data);case"militaryFlight":return this.renderMilitaryFlightPopup(t.data);case"militaryVessel":return this.renderMilitaryVesselPopup(t.data);case"militaryFlightCluster":return this.renderMilitaryFlightClusterPopup(t.data);case"militaryVesselCluster":return this.renderMilitaryVesselClusterPopup(t.data);case"natEvent":return this.renderNaturalEventPopup(t.data);case"port":return this.renderPortPopup(t.data);case"spaceport":return this.renderSpaceportPopup(t.data);case"mineral":return this.renderMineralPopup(t.data);case"startupHub":return this.renderStartupHubPopup(t.data);case"cloudRegion":return this.renderCloudRegionPopup(t.data);case"techHQ":return this.renderTechHQPopup(t.data);case"accelerator":return this.renderAcceleratorPopup(t.data);case"techEvent":return this.renderTechEventPopup(t.data);case"techHQCluster":return this.renderTechHQClusterPopup(t.data);case"techEventCluster":return this.renderTechEventClusterPopup(t.data);case"stockExchange":return this.renderStockExchangePopup(t.data);case"financialCenter":return this.renderFinancialCenterPopup(t.data);case"centralBank":return this.renderCentralBankPopup(t.data);case"commodityHub":return this.renderCommodityHubPopup(t.data);case"iranEvent":return this.renderIranEventPopup(t.data);case"gpsJamming":return this.renderGpsJammingPopup(t.data);case"radiation":return this.renderRadiationPopup(t.data);default:return""}}renderRadiationPopup(t){const n=t.severity==="spike"?"high":"medium",e=`${t.delta>=0?"+":""}${t.delta.toFixed(1)} ${r(t.unit)}`,a=ze(t),s=Ue(t.confidence),i=[t.corroborated?"Confirmed":"",t.conflictingSources?"Conflicting sources":"",t.convertedFromCpm?"CPM-derived component":""].filter(Boolean).join(" · ");return`
      <div class="popup-header outage">
        <span class="popup-title">☢ ${r(t.location.toUpperCase())}</span>
        <span class="popup-badge ${n}">${r(t.severity.toUpperCase())}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">Reading</span>
            <span class="stat-value">${t.value.toFixed(1)} ${r(t.unit)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">Baseline</span>
            <span class="stat-value">${t.baselineValue.toFixed(1)} ${r(t.unit)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">Delta</span>
            <span class="stat-value">${e}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">Confidence</span>
            <span class="stat-value">${r(s)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">Sources</span>
            <span class="stat-value">${r(a)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">Source count</span>
            <span class="stat-value">${t.sourceCount}</span>
          </div>
        </div>
        <p class="popup-description">${r(t.country)} · z-score ${t.zScore.toFixed(2)} · ${r(t.freshness)}${i?` · ${r(i)}`:""}</p>
      </div>
    `}renderConflictPopup(t){var a;const n=t.intensity==="high"?"high":t.intensity==="medium"?"medium":"low",e=r(((a=t.intensity)==null?void 0:a.toUpperCase())||o("popups.unknown").toUpperCase());return`
      <div class="popup-header conflict">
        <span class="popup-title">${r(t.name.toUpperCase())}</span>
        <span class="popup-badge ${n}">${e}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.startDate")}</span>
            <span class="stat-value">${r(t.startDate||o("popups.unknown"))}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.casualties")}</span>
            <span class="stat-value">${r(t.casualties||o("popups.unknown"))}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.displaced")}</span>
            <span class="stat-value">${r(t.displaced||o("popups.unknown"))}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.location")}</span>
            <span class="stat-value">${r(t.location||`${t.center[1]}°N, ${t.center[0]}°E`)}</span>
          </div>
        </div>
        ${t.description?`<p class="popup-description">${r(t.description)}</p>`:""}
        ${t.parties&&t.parties.length>0?`
          <div class="popup-section">
            <details open>
              <summary>${o("popups.belligerents")}</summary>
              <div class="popup-section-content">
                <div class="popup-tags">
                  ${t.parties.map(s=>`<span class="popup-tag">${r(s)}</span>`).join("")}
                </div>
              </div>
            </details>
          </div>
        `:""}
        ${t.keyDevelopments&&t.keyDevelopments.length>0?`
          <div class="popup-section">
            <details open>
              <summary>${o("popups.keyDevelopments")}</summary>
              <div class="popup-section-content">
                <ul class="popup-list">
                  ${t.keyDevelopments.map(s=>`<li>${r(s)}</li>`).join("")}
                </ul>
              </div>
            </details>
          </div>
        `:""}
      </div>
    `}getLocalizedHotspotSubtext(t){const e=`popups.hotspotSubtexts.${t.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")}`,a=o(e);return a===e?t:a}renderHotspotPopup(t,n){const e=t.level||"low",a=r((t.level||"low").toUpperCase()),s=t.subtext?this.getLocalizedHotspotSubtext(t.subtext):"",i=bt(t.id),p=He(t.id),l={1:E("--semantic-normal"),2:E("--semantic-normal"),3:E("--semantic-elevated"),4:E("--semantic-high"),5:E("--semantic-critical")},c={1:o("popups.hotspot.levels.stable"),2:o("popups.hotspot.levels.watch"),3:o("popups.hotspot.levels.elevated"),4:o("popups.hotspot.levels.high"),5:o("popups.hotspot.levels.critical")},u={escalating:"↑",stable:"→","de-escalating":"↓"},m={escalating:E("--semantic-critical"),stable:E("--semantic-elevated"),"de-escalating":E("--semantic-normal")},y=(i==null?void 0:i.combinedScore)??t.escalationScore??3,d=Math.round(y),h=(i==null?void 0:i.trend)??t.escalationTrend??"stable",g=`
      <div class="popup-section escalation-section">
        <span class="section-label">${o("popups.hotspot.escalation")}</span>
        <div class="escalation-display">
          <div class="escalation-score" style="background: ${l[d]||E("--text-dim")}">
            <span class="score-value">${y.toFixed(1)}/5</span>
            <span class="score-label">${c[d]||o("popups.unknown")}</span>
          </div>
          <div class="escalation-trend" style="color: ${m[h]||E("--text-dim")}">
            <span class="trend-icon">${u[h]||""}</span>
            <span class="trend-label">${r(h.toUpperCase())}</span>
          </div>
          ${i!=null&&i.history&&i.history.length>=3?(()=>{const b=i.history.slice(-20).map(k=>k.score),w=b[b.length-1]??3,x=w>=4?"#f44336":w>=3?"#ff9800":"#4caf50";return St(b,x,80,24,"opacity:0.9")})():""}
        </div>
        ${i?`
          <div class="escalation-breakdown">
            <div class="breakdown-header">
              <span class="baseline-label">${o("popups.hotspot.baseline")}: ${i.staticBaseline}/5</span>
              ${p?`
                <span class="change-label ${p.change>=0?"rising":"falling"}">
                  24h: ${p.change>=0?"+":""}${p.change}
                </span>
              `:""}
            </div>
            <div class="breakdown-components">
              <div class="breakdown-row">
                <span class="component-label">${o("popups.hotspot.components.news")}</span>
                <div class="component-bar-bg">
                  <div class="component-bar news" style="width: ${i.components.newsActivity}%"></div>
                </div>
                <span class="component-value">${Math.round(i.components.newsActivity)}</span>
              </div>
              <div class="breakdown-row">
                <span class="component-label">${o("popups.hotspot.components.cii")}</span>
                <div class="component-bar-bg">
                  <div class="component-bar cii" style="width: ${i.components.ciiContribution}%"></div>
                </div>
                <span class="component-value">${Math.round(i.components.ciiContribution)}</span>
              </div>
              <div class="breakdown-row">
                <span class="component-label">${o("popups.hotspot.components.geo")}</span>
                <div class="component-bar-bg">
                  <div class="component-bar geo" style="width: ${i.components.geoConvergence}%"></div>
                </div>
                <span class="component-value">${Math.round(i.components.geoConvergence)}</span>
              </div>
              <div class="breakdown-row">
                <span class="component-label">${o("popups.hotspot.components.military")}</span>
                <div class="component-bar-bg">
                  <div class="component-bar military" style="width: ${i.components.militaryActivity}%"></div>
                </div>
                <span class="component-value">${Math.round(i.components.militaryActivity)}</span>
              </div>
            </div>
          </div>
        `:""}
        ${t.escalationIndicators&&t.escalationIndicators.length>0?`
          <div class="escalation-indicators">
            ${t.escalationIndicators.map(b=>`<span class="indicator-tag">• ${r(b)}</span>`).join("")}
          </div>
        `:""}
      </div>
    `,$=t.history?`
      <div class="popup-section history-section">
        <details>
          <summary>${o("popups.historicalContext")}</summary>
          <div class="popup-section-content">
            <div class="history-content">
              ${t.history.lastMajorEvent?`
                <div class="history-event">
                  <span class="history-label">${o("popups.lastMajorEvent")}:</span>
                  <span class="history-value">${r(t.history.lastMajorEvent)} ${t.history.lastMajorEventDate?`(${r(t.history.lastMajorEventDate)})`:""}</span>
                </div>
              `:""}
              ${t.history.precedentDescription?`
                <div class="history-event">
                  <span class="history-label">${o("popups.precedents")}:</span>
                  <span class="history-value">${r(t.history.precedentDescription)}</span>
                </div>
              `:""}
              ${t.history.cyclicalRisk?`
                <div class="history-event cyclical">
                  <span class="history-label">${o("popups.cyclicalPattern")}:</span>
                  <span class="history-value">${r(t.history.cyclicalRisk)}</span>
                </div>
              `:""}
            </div>
          </div>
        </details>
      </div>
    `:"",C=t.whyItMatters?`
      <div class="popup-section why-matters-section">
        <details>
          <summary>${o("popups.whyItMatters")}</summary>
          <div class="popup-section-content">
            <p class="why-matters-text">${r(t.whyItMatters)}</p>
          </div>
        </details>
      </div>
    `:"";return`
      <div class="popup-header hotspot">
        <span class="popup-title">${r(t.name.toUpperCase())}</span>
        <span class="popup-badge ${e}">${a}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        ${s?`<div class="popup-subtitle">${r(s)}</div>`:""}
        ${t.description?`<p class="popup-description">${r(t.description)}</p>`:""}
        ${g}
        <div class="popup-stats">
          ${t.location?`
            <div class="popup-stat">
              <span class="stat-label">${o("popups.location")}</span>
              <span class="stat-value">${r(t.location)}</span>
            </div>
          `:""}
          <div class="popup-stat">
            <span class="stat-label">${o("popups.coordinates")}</span>
            <span class="stat-value">${r(`${t.lat.toFixed(2)}°N, ${t.lon.toFixed(2)}°E`)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.status")}</span>
            <span class="stat-value">${r(t.status||o("popups.monitoring"))}</span>
          </div>
        </div>
        ${C}
        ${$}
        ${t.agencies&&t.agencies.length>0?`
          <div class="popup-section">
            <details open>
              <summary>${o("popups.keyEntities")}</summary>
              <div class="popup-section-content">
                <div class="popup-tags">
                  ${t.agencies.map(b=>`<span class="popup-tag">${r(b)}</span>`).join("")}
                </div>
              </div>
            </details>
          </div>
        `:""}
        ${n&&n.length>0?`
          <div class="popup-section">
            <details>
              <summary>${o("popups.relatedHeadlines")}</summary>
              <div class="popup-section-content">
                <div class="popup-news">
                  ${n.slice(0,5).map(b=>`
                    <div class="popup-news-item">
                      <span class="news-source">${r(b.source)}</span>
                      <a href="${T(b.link)}" target="_blank" class="news-title">${r(b.title)}</a>
                    </div>
                  `).join("")}
                </div>
              </div>
            </details>
          </div>
        `:""}
        <div class="hotspot-gdelt-context" data-hotspot-id="${r(t.id)}">
          <div class="hotspot-gdelt-header">${o("popups.liveIntel")}</div>
          <div class="hotspot-gdelt-loading">${o("popups.loadingNews")}</div>
        </div>
      </div>
    `}async loadHotspotGdeltContext(t){if(!this.popup)return;const n=this.popup.querySelector(".hotspot-gdelt-context");if(n)try{const e=await Tt(t);if(!this.popup||!n.isConnected)return;if(e.length===0){L(n,S(`
          <div class="hotspot-gdelt-header">${o("popups.liveIntel")}</div>
          <div class="hotspot-gdelt-loading">${o("popups.noCoverage")}</div>
        `,"legacy direct innerHTML migration"));return}L(n,S(`
        <div class="hotspot-gdelt-header">${o("popups.liveIntel")}</div>
        <div class="hotspot-gdelt-articles">
          ${e.slice(0,5).map(a=>this.renderGdeltArticle(a)).join("")}
        </div>
      `,"legacy direct innerHTML migration"))}catch{n.isConnected&&L(n,S(`
          <div class="hotspot-gdelt-header">${o("popups.liveIntel")}</div>
          <div class="hotspot-gdelt-loading">${o("common.error")}</div>
        `,"legacy direct innerHTML migration"))}}async loadWingbitsLiveFlight(t){if(!this.popup)return;const n=this.popup.querySelector(".wingbits-live-section");if(n)try{const e=await At(t);if(!this.popup||!n.isConnected)return;if(!e){L(n,S("","legacy direct innerHTML migration"));return}const a=[];let s="";if(e.photoUrl){const l=T(e.photoUrl);if(l){const c=e.photoLink?T(e.photoLink):"#",u=e.photoCredit?`<span class="flight-photo-credit">© ${r(e.photoCredit)}</span>`:"";s=`<div class="flight-photo"><a href="${c}" target="_blank" rel="noopener"><img src="${l}" alt="${r(e.callsign)}" style="width:100%;border-radius:4px;display:block"></a>${u}</div>`}}if(e.callsignIata){const l=e.airlineName?` <span style="font-size:12px;opacity:0.6;font-weight:400">${r(e.airlineName)}</span>`:"";a.push(`<div style="font-weight:700;font-size:15px;margin:4px 0">${r(e.callsignIata)}${l}</div>`)}if(e.depIata&&e.arrIata){const l=e.arrTerminal?`<span style="font-size:10px;opacity:0.5;margin-left:4px">T${r(e.arrTerminal)}</span>`:"",c=e.flightDurationMin?`<span style="font-size:11px;opacity:0.6">${Math.floor(e.flightDurationMin/60)}h${e.flightDurationMin%60>0?` ${e.flightDurationMin%60}m`:""}</span>`:"";a.push(`
          <div class="flight-route" style="display:flex;align-items:center;gap:6px;margin:8px 0 4px;font-weight:700;font-size:18px">
            <span>${r(e.depIata)}</span>
            <span style="font-size:12px;opacity:0.4;font-weight:400">&#9992;</span>
            <span>${r(e.arrIata)}${l}</span>
            <span style="flex:1;text-align:right">${c}</span>
          </div>`);const u=I(e.depTimeUtc),m=I(e.arrTimeUtc),y=I(e.depEstimatedUtc),d=I(e.arrEstimatedUtc),h=e.depDelayedMin!==0||e.arrDelayedMin!==0;a.push(`
          <div class="flight-times" style="font-size:11px;display:grid;grid-template-columns:1fr auto 1fr;gap:2px 8px;margin-bottom:6px;opacity:0.85">
            <span style="opacity:0.5;font-size:10px;text-transform:uppercase">DEP</span>
            <span></span>
            <span style="opacity:0.5;font-size:10px;text-transform:uppercase;text-align:right">ARR</span>
            <span style="opacity:0.5;font-size:10px">${o("popups.flight.scheduled")||"Sched"}</span><span></span><span style="opacity:0.5;font-size:10px;text-align:right">${o("popups.flight.scheduled")||"Sched"}</span>
            <span>${u}</span><span style="opacity:0.3;text-align:center">↔</span><span style="text-align:right">${m}</span>
            ${h?`
            <span style="opacity:0.5;font-size:10px">${o("popups.flight.estimated")||"Est"}</span><span></span><span style="opacity:0.5;font-size:10px;text-align:right">${o("popups.flight.estimated")||"Est"}</span>
            <span>${y}${vt(e.depDelayedMin)}</span><span style="opacity:0.3;text-align:center">↔</span><span style="text-align:right">${d}${vt(e.arrDelayedMin)}</span>`:""}
          </div>`);const g=new Date,$=`${g.getFullYear()}-${String(g.getMonth()+1).padStart(2,"0")}-${String(g.getDate()).padStart(2,"0")}`,C=T(`https://www.google.com/travel/flights/search?q=Flights+from+${encodeURIComponent(e.depIata)}+to+${encodeURIComponent(e.arrIata)}+on+${encodeURIComponent($)}`);a.push(`<a href="${C}" target="_blank" rel="noopener" style="display:block;margin-top:8px;padding:7px 12px;background:rgba(68,255,136,.06);border:1px solid rgba(68,255,136,.18);border-radius:6px;color:var(--green,#44ff88);text-decoration:none;font-size:12px;text-align:center">Book this route &rarr;</a>`)}const i=[];if(e.registration&&i.push(`<div class="popup-stat"><span class="stat-label">Reg</span><span class="stat-value">${r(e.registration)}</span></div>`),e.model&&i.push(`<div class="popup-stat"><span class="stat-label">Model</span><span class="stat-value">${r(e.model)}</span></div>`),e.operator&&i.push(`<div class="popup-stat"><span class="stat-label">Operator</span><span class="stat-value">${r(e.operator)}</span></div>`),e.verticalRate!==0&&i.push(`<div class="popup-stat"><span class="stat-label">Climb</span><span class="stat-value">${e.verticalRate>0?"+":""}${Math.round(e.verticalRate)} fpm</span></div>`),a.length===0&&i.length===0&&!s){L(n,S("","legacy direct innerHTML migration"));return}const p=i.length>0?`<div class="popup-stats">${i.join("")}</div>`:"";if(L(n,S(`
        <div class="popup-section-label" style="font-size:10px;opacity:0.5;text-transform:uppercase;letter-spacing:.05em;margin-top:8px">Live Data</div>
        ${a.join("")}
        ${p}
        ${s}
      `,"legacy direct innerHTML migration")),this.clampPopupToViewport(),s){const l=n.querySelector("img");l&&!l.complete&&(l.addEventListener("load",()=>{this.clampPopupToViewport()},{once:!0}),l.addEventListener("error",()=>{this.clampPopupToViewport()},{once:!0}))}}catch{n.isConnected&&L(n,S("","legacy direct innerHTML migration"))}}renderGdeltArticle(t){const n=t.source||Rt(t.url),e=Nt(t.date);return`
      <a href="${T(t.url)}" target="_blank" rel="noopener" class="hotspot-gdelt-article">
        <div class="article-meta">
          <span>${r(n)}</span>
          <span>${r(e)}</span>
        </div>
        <div class="article-title">${r(t.title)}</div>
      </a>
    `}renderEarthquakePopup(t){var s,i;const n=t.magnitude>=6?"high":t.magnitude>=5?"medium":"low",e=t.magnitude>=6?o("popups.earthquake.levels.major"):t.magnitude>=5?o("popups.earthquake.levels.moderate"):o("popups.earthquake.levels.minor"),a=this.getTimeAgo(new Date(t.occurredAt));return`
      <div class="popup-header earthquake">
        <span class="popup-title magnitude">M${t.magnitude.toFixed(1)}</span>
        <span class="popup-badge ${n}">${e}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <p class="popup-location">${r(t.place)}</p>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.depth")}</span>
            <span class="stat-value">${t.depthKm.toFixed(1)} km</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.coordinates")}</span>
            <span class="stat-value">${(((s=t.location)==null?void 0:s.latitude)??0).toFixed(2)}°, ${(((i=t.location)==null?void 0:i.longitude)??0).toFixed(2)}°</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.time")}</span>
            <span class="stat-value">${a}</span>
          </div>
        </div>
        <a href="${T(t.sourceUrl)}" target="_blank" class="popup-link">${o("popups.viewUSGS")} →</a>
      </div>
    `}getTimeAgo(t){const n=Math.floor((Date.now()-t.getTime())/1e3);if(n<60)return o("popups.timeAgo.s",{count:n});const e=Math.floor(n/60);if(e<60)return o("popups.timeAgo.m",{count:e});const a=Math.floor(e/60);if(a<24)return o("popups.timeAgo.h",{count:a});const s=Math.floor(a/24);return o("popups.timeAgo.d",{count:s})}renderWeatherPopup(t){const n=r(t.severity.toLowerCase()),e=this.getTimeUntil(t.expires);return`
      <div class="popup-header weather ${n}">
        <span class="popup-title">${r(t.event.toUpperCase())}</span>
        <span class="popup-badge ${n}">${r(t.severity.toUpperCase())}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <p class="popup-headline">${r(t.headline)}</p>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.area")}</span>
            <span class="stat-value">${r(t.areaDesc)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.expires")}</span>
            <span class="stat-value">${e}</span>
          </div>
        </div>
        <p class="popup-description">${r(t.description.slice(0,300))}${t.description.length>300?"...":""}</p>
      </div>
    `}getTimeUntil(t){const n=t instanceof Date?t:new Date(t);if(Number.isNaN(n.getTime()))return"—";const e=n.getTime()-Date.now();if(e<=0)return o("popups.expired");const a=Math.floor(e/(1e3*60*60));return a<1?`${Math.floor(e/(1e3*60))}${o("popups.timeUnits.m")}`:a<24?`${a}${o("popups.timeUnits.h")}`:`${Math.floor(a/24)}${o("popups.timeUnits.d")}`}renderBasePopup(t){const n={"us-nato":o("popups.base.types.us-nato"),china:o("popups.base.types.china"),russia:o("popups.base.types.russia")},e={"us-nato":"elevated",china:"high",russia:"high"},a=t,s=[];return a.catAirforce&&s.push("Air Force"),a.catNaval&&s.push("Naval"),a.catNuclear&&s.push("Nuclear"),a.catSpace&&s.push("Space"),a.catTraining&&s.push("Training"),`
      <div class="popup-header base">
        <span class="popup-title">${r(t.name.toUpperCase())}</span>
        <span class="popup-badge ${e[t.type]||"low"}">${r(n[t.type]||t.type.toUpperCase())}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        ${t.description?`<p class="popup-description">${r(t.description)}</p>`:""}
        ${a.kind?`<p class="popup-description" style="opacity:0.7;margin-top:2px">${r(a.kind.replace(/_/g," "))}</p>`:""}
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.type")}</span>
            <span class="stat-value">${r(n[t.type]||t.type)}</span>
          </div>
          ${t.arm?`<div class="popup-stat"><span class="stat-label">Branch</span><span class="stat-value">${r(t.arm)}</span></div>`:""}
          ${t.country?`<div class="popup-stat"><span class="stat-label">Country</span><span class="stat-value">${r(t.country)}</span></div>`:""}
          ${s.length>0?`<div class="popup-stat"><span class="stat-label">Categories</span><span class="stat-value">${r(s.join(", "))}</span></div>`:""}
          <div class="popup-stat">
            <span class="stat-label">${o("popups.coordinates")}</span>
            <span class="stat-value">${t.lat.toFixed(2)}°, ${t.lon.toFixed(2)}°</span>
          </div>
        </div>
      </div>
    `}renderWaterwayPopup(t){var c,u,m;const n=(u=(c=this.chokepointData)==null?void 0:c.chokepoints)==null?void 0:u.find(y=>y.id===t.chokepointId),e=!!n&&((m=n.transitSummary)==null?void 0:m.dataAvailable)!==!1,a=z(),s=G[t.chokepointId],i=s&&!a?`<div class="popup-section-title" style="margin-top:10px;font-size:10px;text-transform:uppercase;opacity:.6;letter-spacing:.06em">Trade Sector Mix</div>
         ${Fe(s)}`:"";let p="";e&&(a?p=`<div data-transit-chart="${r(t.name)}" data-transit-chart-id="${r((n==null?void 0:n.id)??"")}" style="margin-top:10px;min-height:200px;display:flex;align-items:center;justify-content:center;color:var(--text-dim,#888);font-size:12px">${o("components.supplyChain.loadingHistory")||"Loading transit history…"}</div>`:p=`
          <div class="sector-pro-gate" data-gate="chokepoint-transit-chart" style="position:relative;overflow:hidden;border-radius:6px;margin-top:10px;min-height:120px;background:var(--surface-elevated, #111)">
            <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px">
              <span style="font-size:16px">🔒</span>
              <span style="font-size:10px;font-weight:600;opacity:.8">PRO</span>
              <span style="font-size:9px;opacity:.5">Transit History</span>
            </div>
          </div>`);let l="";return s&&(a?l=`
          <div class="popup-section-title" style="margin-top:10px;font-size:10px;text-transform:uppercase;opacity:.6;letter-spacing:.06em">Sector Exposure</div>
          <div data-hs2-ring="${r(t.chokepointId)}" class="popup-hs2-ring-container"></div>`:l=`
          <div class="sector-pro-gate" data-gate="chokepoint-sector-ring" style="position:relative;overflow:hidden;border-radius:6px;margin-top:10px;min-height:80px;background:var(--surface-elevated, #111)">
            <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px">
              <span style="font-size:16px">🔒</span>
              <span style="font-size:10px;font-weight:600;opacity:.8">PRO</span>
              <span style="font-size:9px;opacity:.5">Sector Breakdown</span>
            </div>
          </div>`),`
      <div class="popup-header waterway">
        <span class="popup-title">${r(t.name)}</span>
        <span class="popup-badge elevated">${o("popups.strategic")}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        ${t.description?`<p class="popup-description">${r(t.description)}</p>`:""}
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.coordinates")}</span>
            <span class="stat-value">${t.lat.toFixed(2)}°, ${t.lon.toFixed(2)}°</span>
          </div>
        </div>
        ${i}
        ${l}
        ${p}
      </div>
    `}renderAisPopup(t){var l,c;const n=r(t.severity),e=r(t.severity.toUpperCase()),a=t.type==="gap_spike"?o("popups.aisGapSpike"):o("popups.chokepointCongestion"),s=t.type==="gap_spike"?o("popups.darkening"):o("popups.density"),i=t.type==="gap_spike"?o("popups.darkShips"):o("popups.vesselCount"),p=t.type==="gap_spike"?((l=t.darkShips)==null?void 0:l.toString())||"—":((c=t.vesselCount)==null?void 0:c.toString())||"—";return`
      <div class="popup-header ais">
        <span class="popup-title">${r(t.name.toUpperCase())}</span>
        <span class="popup-badge ${n}">${e}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${a}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${s}</span>
            <span class="stat-value">${t.changePct}% ↑</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${i}</span>
            <span class="stat-value">${p}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.window")}</span>
            <span class="stat-value">${t.windowHours}H</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.region")}</span>
            <span class="stat-value">${r(t.region||`${t.lat.toFixed(2)}°, ${t.lon.toFixed(2)}°`)}</span>
          </div>
        </div>
        <p class="popup-description">${r(t.description)}</p>
      </div>
    `}renderProtestPopup(t){var d,h,g;const n=r(t.severity),e=r(t.severity.toUpperCase()),a=r(t.eventType.replace("_"," ").toUpperCase()),s=t.eventType==="riot"?"🔥":t.eventType==="strike"?"✊":"📢",i=t.sourceType==="acled"?o("popups.protest.acledVerified"):o("popups.protest.gdelt"),p=t.validated?`<span class="popup-badge verified">${o("popups.verified")}</span>`:"",l=t.fatalities?`<div class="popup-stat"><span class="stat-label">${o("popups.fatalities")}</span><span class="stat-value alert">${t.fatalities}</span></div>`:"",c=(d=t.actors)!=null&&d.length?`<div class="popup-stat"><span class="stat-label">${o("popups.actors")}</span><span class="stat-value">${t.actors.map($=>r($)).join(", ")}</span></div>`:"",u=Ie(t.sourceUrls,{label:o("popups.source")}),m=(h=t.tags)!=null&&h.length?`<div class="popup-tags">${t.tags.map($=>`<span class="popup-tag">${r($)}</span>`).join("")}</div>`:"",y=(g=t.relatedHotspots)!=null&&g.length?`<div class="popup-related">${o("popups.near")}: ${t.relatedHotspots.map($=>r($)).join(", ")}</div>`:"";return`
      <div class="popup-header protest ${n}">
        <span class="popup-icon">${s}</span>
        <span class="popup-title">${a}</span>
        <span class="popup-badge ${n}">${e}</span>
        ${p}
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${t.city?`${r(t.city)}, `:""}${r(t.country)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.time")}</span>
            <span class="stat-value">${t.time.toLocaleDateString()}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.source")}</span>
            <span class="stat-value">${i}</span>
          </div>
          ${l}
          ${c}
        </div>
        ${t.title?`<p class="popup-description">${r(t.title)}</p>`:""}
        ${u}
        ${m}
        ${y}
      </div>
    `}renderProtestClusterPopup(t){const n=t.count??t.items.length,e=t.riotCount??t.items.filter(d=>d.eventType==="riot").length,a=t.highSeverityCount??t.items.filter(d=>d.severity==="high").length,s=t.verifiedCount??t.items.filter(d=>d.validated).length,i=t.totalFatalities??t.items.reduce((d,h)=>d+(h.fatalities||0),0),l=[...t.items].sort((d,h)=>{const g={high:0,medium:1,low:2},$={riot:0,civil_unrest:1,strike:2,demonstration:3,protest:4},C=(g[d.severity]??3)-(g[h.severity]??3);return C!==0?C:($[d.eventType]??5)-($[h.eventType]??5)}).slice(0,10).map(d=>{var k;const h=d.eventType==="riot"?"🔥":d.eventType==="strike"?"✊":"📢",g=d.severity,$=d.time.toLocaleDateString(void 0,{month:"short",day:"numeric"}),C=d.city?r(d.city):"",b=d.title?`: ${r(d.title.slice(0,40))}${d.title.length>40?"...":""}`:"",w=(k=d.sourceUrls)==null?void 0:k.find(R=>T(R)),x=w?` <a class="popup-link cluster-source-link" href="${T(w)}" target="_blank" rel="noopener noreferrer nofollow">${o("popups.source")} →</a>`:"";return`<li class="cluster-item ${g}">${h} ${$}${C?` • ${C}`:""}${b}${x}</li>`}).join(""),c=Math.min(10,t.items.length),u=Math.max(0,n-c),m=u>0?`<li class="cluster-more">+${u} ${o("popups.moreEvents")}</li>`:"";return`
      <div class="popup-header protest ${a>0?"high":e>0?"medium":"low"} cluster">
        <span class="popup-title">📢 ${r(t.country)}</span>
        <span class="popup-badge">${n} ${o("popups.events").toUpperCase()}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body cluster-popup">
        <div class="cluster-summary">
          ${e?`<span class="summary-item riot">🔥 ${e} ${o("popups.protest.riots")}</span>`:""}
          ${a?`<span class="summary-item high">⚠️ ${a} ${o("popups.protest.highSeverity")}</span>`:""}
          ${s?`<span class="summary-item verified">✓ ${s} ${o("popups.verified")}</span>`:""}
          ${i>0?`<span class="summary-item fatalities">💀 ${i} ${o("popups.fatalities")}</span>`:""}
        </div>
        <ul class="cluster-list">${l}${m}</ul>
        ${t.sampled?`<p class="popup-more">${o("popups.sampledList",{count:t.items.length})}</p>`:""}
      </div>
    `}renderFlightPopup(t){const n=r(t.severity),e=t.severity==="unknown"?"NO DATA":r(t.severity.toUpperCase()),a={ground_stop:o("popups.flight.groundStop"),ground_delay:o("popups.flight.groundDelay"),departure_delay:o("popups.flight.departureDelay"),arrival_delay:o("popups.flight.arrivalDelay"),general:o("popups.flight.delaysReported"),closure:o("popups.flight.closure")},s=t.severity==="unknown"?"Coverage unavailable":a[t.delayType]||o("popups.flight.delays"),i=t.severity==="unknown"?"❔":t.delayType==="closure"?"🚫":t.delayType==="ground_stop"?"🛑":t.severity==="severe"?"✈️":"🛫",l={faa:o("popups.flight.sources.faa"),eurocontrol:o("popups.flight.sources.eurocontrol"),computed:o("popups.flight.sources.computed"),aviationstack:o("popups.flight.sources.aviationstack"),notam:o("popups.flight.sources.notam"),unspecified:"—"}[t.source]||r(t.source),u={americas:o("popups.flight.regions.americas"),europe:o("popups.flight.regions.europe"),apac:o("popups.flight.regions.apac"),mena:o("popups.flight.regions.mena"),africa:o("popups.flight.regions.africa")}[t.region]||r(t.region),m=t.avgDelayMinutes>0?`<div class="popup-stat"><span class="stat-label">${o("popups.flight.avgDelay")}</span><span class="stat-value alert">+${t.avgDelayMinutes} ${o("popups.timeUnits.m")}</span></div>`:"",y=t.reason?`<div class="popup-stat"><span class="stat-label">${o("popups.reason")}</span><span class="stat-value">${r(t.reason)}</span></div>`:"",d=t.cancelledFlights?`<div class="popup-stat"><span class="stat-label">${o("popups.flight.cancelled")}</span><span class="stat-value alert">${t.cancelledFlights} ${o("popups.events")}</span></div>`:"";return`
      <div class="popup-header flight ${n}">
        <span class="popup-icon">${i}</span>
        <span class="popup-title">${r(t.iata)} - ${s}</span>
        <span class="popup-badge ${n}">${e}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${r(t.name)}</div>
        <div class="popup-location">${r(t.city)}, ${r(t.country)}</div>
        <div class="popup-stats">
          ${m}
          ${y}
          ${d}
          <div class="popup-stat">
            <span class="stat-label">${o("popups.region")}</span>
            <span class="stat-value">${u}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.source")}</span>
            <span class="stat-value">${l}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.updated")}</span>
            <span class="stat-value">${t.updatedAt.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    `}renderAircraftPopup(t){const n=r(t.callsign||t.icao24),e=t.onGround?"low":"elevated",a=t.onGround?o("popups.aircraft.ground"):o("popups.aircraft.airborne"),s=t.altitudeFt>0?`FL${Math.round(t.altitudeFt/100)} (${t.altitudeFt.toLocaleString()} ft)`:o("popups.aircraft.ground");return`
      <div class="popup-header aircraft">
        <span class="popup-icon">&#9992;</span>
        <span class="popup-title">${n}</span>
        <span class="popup-badge ${e}">${a}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">ICAO24: ${r(t.icao24)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.aircraft.altitude")}</span>
            <span class="stat-value">${s}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.aircraft.speed")}</span>
            <span class="stat-value">${t.groundSpeedKts} kts</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.aircraft.heading")}</span>
            <span class="stat-value">${Math.round(t.trackDeg)}&deg;</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.aircraft.position")}</span>
            <span class="stat-value">${t.lat.toFixed(4)}&deg;, ${t.lon.toFixed(4)}&deg;</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.source")}</span>
            <span class="stat-value">${Oe(t.source)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.updated")}</span>
            <span class="stat-value">${t.observedAt.toLocaleTimeString()}</span>
          </div>
        </div>
${st("wingbitsEnrichment")?'<div class="wingbits-live-section"><div class="wingbits-live-loading" style="font-size:11px;opacity:0.5;padding:4px 0">Loading Wingbits live data…</div></div>':""}
      </div>
    `}renderAPTPopup(t){var i,p;const n=(i=t.tactics)!=null&&i.length?`<div class="popup-tags">${t.tactics.map(l=>`<span class="popup-tag">${r(l)}</span>`).join("")}</div>`:"",e=(p=t.targetSectors)!=null&&p.length?`<div class="popup-subtitle" style="margin-top:6px">Targets: ${r(t.targetSectors.join(", "))}</div>`:"",a=t.mitreId&&t.mitreUrl?`<div class="popup-stat"><span class="stat-label">MITRE</span><span class="stat-value"><a class="popup-link" href="${r(t.mitreUrl)}" target="_blank" rel="noopener">${r(t.mitreId)} ↗</a></span></div>`:"",s=t.active===!1?'<span class="popup-badge low">Inactive</span>':`<span class="popup-badge high">${o("popups.threat")}</span>`;return`
      <div class="popup-header apt">
        <span class="popup-title">${r(t.name)}</span>
        ${s}
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${r(t.aka)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.sponsor")}</span>
            <span class="stat-value">${r(t.sponsor)}</span>
          </div>
          ${a}
        </div>
        ${t.description?`<p class="popup-description">${r(t.description)}</p>`:""}
        ${n}
        ${e}
      </div>
    `}renderCyberThreatPopup(t){const n=r(t.severity),a={feodo:"Feodo Tracker",urlhaus:"URLhaus",c2intel:"C2 Intel Feeds",otx:"AlienVault OTX",abuseipdb:"AbuseIPDB"}[t.source]||t.source,s=t.type.replace(/_/g," ").toUpperCase(),i=(t.tags||[]).slice(0,6);return`
      <div class="popup-header apt ${n}">
        <span class="popup-title">${o("popups.cyberThreat.title")}</span>
        <span class="popup-badge ${n}">${r(t.severity.toUpperCase())}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${r(s)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${r(t.indicatorType.toUpperCase())}</span>
            <span class="stat-value">${r(t.indicator)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.country")}</span>
            <span class="stat-value">${r(t.country||o("popups.unknown"))}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.source")}</span>
            <span class="stat-value">${r(a)}</span>
          </div>
          ${t.malwareFamily?`<div class="popup-stat">
            <span class="stat-label">${o("popups.malware")}</span>
            <span class="stat-value">${r(t.malwareFamily)}</span>
          </div>`:""}
          <div class="popup-stat">
            <span class="stat-label">${o("popups.lastSeen")}</span>
            <span class="stat-value">${r(t.lastSeen?new Date(t.lastSeen).toLocaleString():o("popups.unknown"))}</span>
          </div>
        </div>
        ${i.length>0?`
        <div class="popup-tags">
          ${i.map(p=>`<span class="popup-tag">${r(p)}</span>`).join("")}
        </div>`:""}
      </div>
    `}renderNuclearPopup(t){const n={plant:o("popups.nuclear.types.plant"),enrichment:o("popups.nuclear.types.enrichment"),weapons:o("popups.nuclear.types.weapons"),research:o("popups.nuclear.types.research"),reprocessing:o("popups.nuclear.types.reprocessing"),"test-site":o("popups.nuclear.types.testSite")},e={active:"elevated",contested:"high",decommissioned:"low"};return`
      <div class="popup-header nuclear">
        <span class="popup-title">${r(t.name.toUpperCase())}</span>
        <span class="popup-badge ${e[t.status]||"low"}">${r(t.status.toUpperCase())}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.type")}</span>
            <span class="stat-value">${r(n[t.type]||t.type.toUpperCase())}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.status")}</span>
            <span class="stat-value">${r(t.status.toUpperCase())}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.coordinates")}</span>
            <span class="stat-value">${t.lat.toFixed(2)}°, ${t.lon.toFixed(2)}°</span>
          </div>
        </div>
        <p class="popup-description">${o("popups.nuclear.description")}</p>
      </div>
    `}renderEconomicPopup(t){const n={exchange:o("popups.economic.types.exchange"),"central-bank":o("popups.economic.types.centralBank"),"financial-hub":o("popups.economic.types.financialHub")},e={exchange:"📈","central-bank":"🏛","financial-hub":"💰"},a=t.marketHours?this.getMarketStatus(t.marketHours):null,s=a?a==="open"?o("popups.open"):a==="closed"?o("popups.economic.closed"):o("popups.unknown"):"";return`
      <div class="popup-header economic ${t.type}">
        <span class="popup-title">${e[t.type]||""} ${r(t.name.toUpperCase())}</span>
        <span class="popup-badge ${a==="open"?"elevated":"low"}">${r(s||n[t.type]||"")}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        ${t.description?`<p class="popup-description">${r(t.description)}</p>`:""}
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.type")}</span>
            <span class="stat-value">${r(n[t.type]||t.type.toUpperCase())}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.country")}</span>
            <span class="stat-value">${r(t.country)}</span>
          </div>
          ${t.marketHours?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.tradingHours")}</span>
            <span class="stat-value">${r(t.marketHours.open)} - ${r(t.marketHours.close)}</span>
          </div>
          `:""}
          <div class="popup-stat">
            <span class="stat-label">${o("popups.coordinates")}</span>
            <span class="stat-value">${t.lat.toFixed(2)}°, ${t.lon.toFixed(2)}°</span>
          </div>
        </div>
      </div>
    `}renderIrradiatorPopup(t){return`
      <div class="popup-header irradiator">
        <span class="popup-title">☢ ${r(t.city.toUpperCase())}</span>
        <span class="popup-badge elevated">${o("popups.gamma")}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${o("popups.irradiator.subtitle")}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.country")}</span>
            <span class="stat-value">${r(t.country)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.city")}</span>
            <span class="stat-value">${r(t.city)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.coordinates")}</span>
            <span class="stat-value">${t.lat.toFixed(2)}°, ${t.lon.toFixed(2)}°</span>
          </div>
        </div>
        <p class="popup-description">${o("popups.irradiator.description")}</p>
      </div>
    `}renderPipelinePopup(t){const n={oil:o("popups.pipeline.types.oil"),gas:o("popups.pipeline.types.gas"),products:o("popups.pipeline.types.products")},e={oil:"high",gas:"elevated",products:"low"},a={operating:o("popups.pipeline.status.operating"),construction:o("popups.pipeline.status.construction")},s=t.type==="oil"?"🛢":t.type==="gas"?"🔥":"⛽";return`
      <div class="popup-header pipeline ${t.type}">
        <span class="popup-title">${s} ${r(t.name.toUpperCase())}</span>
        <span class="popup-badge ${e[t.type]||"low"}">${r(t.type.toUpperCase())}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${n[t.type]||o("popups.pipeline.title")}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.status")}</span>
            <span class="stat-value">${r(a[t.status]||t.status.toUpperCase())}</span>
          </div>
          ${t.capacity?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.capacity")}</span>
            <span class="stat-value">${r(t.capacity)}</span>
          </div>
          `:""}
          ${t.length?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.length")}</span>
            <span class="stat-value">${r(t.length)}</span>
          </div>
          `:""}
          ${t.operator?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.operator")}</span>
            <span class="stat-value">${r(t.operator)}</span>
          </div>
          `:""}
        </div>
        ${t.countries&&t.countries.length>0?`
          <div class="popup-section">
            <span class="section-label">${o("popups.countries")}</span>
            <div class="popup-tags">
              ${t.countries.map(i=>`<span class="popup-tag">${r(i)}</span>`).join("")}
            </div>
          </div>
        `:""}
        <p class="popup-description">${o("popups.pipeline.description",{type:t.type,status:t.status==="operating"?o("popups.pipelineStatusDesc.operating"):o("popups.pipelineStatusDesc.construction")})}</p>
      </div>
    `}renderCablePopup(t){var $;const n=this.getLatestCableAdvisory(t.id),e=this.getPriorityRepairShip(t.id),a=Mt(t.id);let s,i;(a==null?void 0:a.status)==="fault"?(s=o("popups.cable.fault"),i="high"):(a==null?void 0:a.status)==="degraded"?(s=o("popups.cable.degraded"),i="elevated"):n?(s=n.severity==="fault"?o("popups.cable.fault"):o("popups.cable.degraded"),i=n.severity==="fault"?"high":"elevated"):(s=o("popups.cable.active"),i="low");const p=(e==null?void 0:e.eta)||(n==null?void 0:n.repairEta),l=r(t.name.toUpperCase()),c=r(s),u=p?r(p):"",m=n?r(n.title):"",y=n?r(n.impact):"",d=n?r(n.description):"",h=e?r(e.name):"",g=e?r(e.note||o("popups.repairShip.note")):"";return`
      <div class="popup-header cable">
        <span class="popup-title">🌐 ${l}</span>
        <span class="popup-badge ${i}">${t.major?o("popups.cable.major"):o("popups.cable.cable")}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${o("popups.cable.subtitle")}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.type")}</span>
            <span class="stat-value">${o("popups.cable.type")}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.waypoints")}</span>
            <span class="stat-value">${t.points.length}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.status")}</span>
            <span class="stat-value">${c}</span>
          </div>
          ${p?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.repairEta")}</span>
            <span class="stat-value">${u}</span>
          </div>
          `:""}
        </div>
        ${n?`
          <div class="popup-section">
            <span class="section-label">${o("popups.cable.advisory")}</span>
            <div class="popup-tags">
              <span class="popup-tag">${m}</span>
              <span class="popup-tag">${y}</span>
            </div>
            <p class="popup-description">${d}</p>
          </div>
        `:""}
        ${e?`
          <div class="popup-section">
            <span class="section-label">${o("popups.cable.repairDeployment")}</span>
            <div class="popup-tags">
              <span class="popup-tag">${h}</span>
              <span class="popup-tag">${e.status==="on-station"?o("popups.cable.repairStatus.onStation"):o("popups.cable.repairStatus.enRoute")}</span>
            </div>
            <p class="popup-description">${g}</p>
          </div>
        `:""}
        ${($=a==null?void 0:a.evidence)!=null&&$.length?`
          <div class="popup-section">
            <span class="section-label">${o("popups.cable.health.evidence")}</span>
            <ul class="evidence-list">
              ${a.evidence.map(C=>`<li class="evidence-item"><strong>${r(C.source)}</strong>: ${r(C.summary)}</li>`).join("")}
            </ul>
          </div>
        `:""}
        <p class="popup-description">${o("popups.cable.description")}</p>
      </div>
    `}renderCableAdvisoryPopup(t){const n=P.find(u=>u.id===t.cableId),e=this.getTimeAgo(t.reported),a=t.severity==="fault"?o("popups.cable.fault"):o("popups.cable.degraded"),s=r((n==null?void 0:n.name.toUpperCase())||t.cableId.toUpperCase()),i=r(t.title),p=r(t.impact),l=t.repairEta?r(t.repairEta):"",c=r(t.description);return`
      <div class="popup-header cable">
        <span class="popup-title">🚨 ${s}</span>
        <span class="popup-badge ${t.severity==="fault"?"high":"elevated"}">${a}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${i}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.cableAdvisory.reported")}</span>
            <span class="stat-value">${e}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.cableAdvisory.impact")}</span>
            <span class="stat-value">${p}</span>
          </div>
          ${t.repairEta?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.cableAdvisory.eta")}</span>
            <span class="stat-value">${l}</span>
          </div>
          `:""}
        </div>
        <p class="popup-description">${c}</p>
      </div>
    `}renderRepairShipPopup(t){const n=P.find(l=>l.id===t.cableId),e=r(t.name.toUpperCase()),a=r((n==null?void 0:n.name)||t.cableId),s=r(t.eta),i=t.operator?r(t.operator):"",p=r(t.note||o("popups.repairShip.description"));return`
      <div class="popup-header cable">
        <span class="popup-title">🚢 ${e}</span>
        <span class="popup-badge elevated">${o("popups.repairShip.badge")}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${a}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.status")}</span>
            <span class="stat-value">${t.status==="on-station"?o("popups.repairShip.status.onStation"):o("popups.repairShip.status.enRoute")}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.cableAdvisory.eta")}</span>
            <span class="stat-value">${s}</span>
          </div>
          ${t.operator?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.operator")}</span>
            <span class="stat-value">${i}</span>
          </div>
          `:""}
        </div>
        <p class="popup-description">${p}</p>
      </div>
    `}getLatestCableAdvisory(t){return this.cableAdvisories.filter(e=>e.cableId===t).reduce((e,a)=>e?a.reported.getTime()>e.reported.getTime()?a:e:a,void 0)}getPriorityRepairShip(t){const n=this.repairShips.filter(a=>a.cableId===t);return n.length===0?void 0:n.find(a=>a.status==="on-station")||n[0]}renderOutagePopup(t){const n={total:"high",major:"elevated",partial:"low"},e={total:o("popups.outage.levels.total"),major:o("popups.outage.levels.major"),partial:o("popups.outage.levels.partial")},a=this.getTimeAgo(t.pubDate);return`
      <div class="popup-header outage ${r(t.severity)}">
        <span class="popup-title">📡 ${r(t.country.toUpperCase())}</span>
        <span class="popup-badge ${n[t.severity]||"low"}">${e[t.severity]||o("popups.outage.levels.disruption")}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${r(t.title)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.severity")}</span>
            <span class="stat-value">${r(t.severity.toUpperCase())}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.outage.reported")}</span>
            <span class="stat-value">${a}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.coordinates")}</span>
            <span class="stat-value">${t.lat.toFixed(2)}°, ${t.lon.toFixed(2)}°</span>
          </div>
        </div>
        ${t.categories&&t.categories.length>0?`
          <div class="popup-section">
            <span class="section-label">${o("popups.outage.categories")}</span>
            <div class="popup-tags">
              ${t.categories.slice(0,5).map(i=>`<span class="popup-tag">${r(i)}</span>`).join("")}
            </div>
          </div>
        `:""}
        ${t.description?`<p class="popup-description">${r(t.description.slice(0,250))}${t.description.length>250?"...":""}</p>`:""}
        <a href="${T(t.link)}" target="_blank" class="popup-link">${o("popups.outage.readReport")} →</a>
      </div>
    `}renderDatacenterPopup(t){const n={existing:"normal",planned:"elevated",decommissioned:"low"},e={existing:o("popups.datacenter.status.existing"),planned:o("popups.datacenter.status.planned"),decommissioned:o("popups.datacenter.status.decommissioned")},a=s=>s>=1e6?`${(s/1e6).toFixed(1)}M`:s>=1e3?`${(s/1e3).toFixed(0)}K`:s.toString();return`
      <div class="popup-header datacenter ${t.status}">
        <span class="popup-title">🖥️ ${r(t.name)}</span>
        <span class="popup-badge ${n[t.status]||"normal"}">${e[t.status]||o("popups.datacenter.status.unknown")}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${r(t.owner)} • ${r(t.country)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.datacenter.gpuChipCount")}</span>
            <span class="stat-value">${a(t.chipCount)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.datacenter.chipType")}</span>
            <span class="stat-value">${r(t.chipType||o("popups.unknown"))}</span>
          </div>
          ${t.powerMW?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.datacenter.power")}</span>
            <span class="stat-value">${t.powerMW.toFixed(0)} MW</span>
          </div>
          `:""}
          ${t.sector?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.datacenter.sector")}</span>
            <span class="stat-value">${r(t.sector)}</span>
          </div>
          `:""}
        </div>
        ${t.note?`<p class="popup-description">${r(t.note)}</p>`:""}
        <div class="popup-attribution">${o("popups.datacenter.attribution")}</div>
      </div>
    `}renderDatacenterClusterPopup(t){const n=t.count??t.items.length,e=t.totalChips??t.items.reduce((c,u)=>c+u.chipCount,0),a=t.totalPowerMW??t.items.reduce((c,u)=>c+(u.powerMW||0),0),s=t.existingCount??t.items.filter(c=>c.status==="existing").length,i=t.plannedCount??t.items.filter(c=>c.status==="planned").length,p=c=>c>=1e6?`${(c/1e6).toFixed(1)}M`:c>=1e3?`${(c/1e3).toFixed(0)}K`:c.toString(),l=t.items.slice(0,8).map(c=>`
      <div class="cluster-item">
        <span class="cluster-item-icon">${c.status==="planned"?"🔨":"🖥️"}</span>
        <div class="cluster-item-info">
          <span class="cluster-item-name">${r(c.name.slice(0,40))}${c.name.length>40?"...":""}</span>
          <span class="cluster-item-detail">${r(c.owner)} • ${p(c.chipCount)} ${o("popups.datacenter.chips")}</span>
        </div>
      </div>
    `).join("");return`
      <div class="popup-header datacenter cluster">
        <span class="popup-title">🖥️ ${o("popups.datacenter.cluster.title",{count:String(n)})}</span>
        <span class="popup-badge elevated">${r(t.region)}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${r(t.country)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.datacenter.cluster.totalChips")}</span>
            <span class="stat-value">${p(e)}</span>
          </div>
          ${a>0?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.datacenter.cluster.totalPower")}</span>
            <span class="stat-value">${a.toFixed(0)} MW</span>
          </div>
          `:""}
          <div class="popup-stat">
            <span class="stat-label">${o("popups.datacenter.cluster.operational")}</span>
            <span class="stat-value">${s}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.datacenter.cluster.planned")}</span>
            <span class="stat-value">${i}</span>
          </div>
        </div>
        <div class="cluster-list">
          ${l}
        </div>
        ${n>8?`<p class="popup-more">${o("popups.datacenter.cluster.moreDataCenters",{count:String(Math.max(0,n-8))})}</p>`:""}
        ${t.sampled?`<p class="popup-more">${o("popups.datacenter.cluster.sampledSites",{count:String(t.items.length)})}</p>`:""}
        <div class="popup-attribution">${o("popups.datacenter.attribution")}</div>
      </div>
    `}renderStartupHubPopup(t){const n={mega:o("popups.startupHub.tiers.mega"),major:o("popups.startupHub.tiers.major"),emerging:o("popups.startupHub.tiers.emerging")},e={mega:"🦄",major:"🚀",emerging:"💡"};return`
      <div class="popup-header startup-hub ${t.tier}">
        <span class="popup-title">${e[t.tier]||"🚀"} ${r(t.name)}</span>
        <span class="popup-badge ${t.tier}">${n[t.tier]||o("popups.startupHub.tiers.hub")}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${r(t.city)}, ${r(t.country)}</div>
        ${t.unicorns?`
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.startupHub.unicorns")}</span>
            <span class="stat-value">${t.unicorns}+</span>
          </div>
        </div>
        `:""}
        ${t.description?`<p class="popup-description">${r(t.description)}</p>`:""}
      </div>
    `}renderCloudRegionPopup(t){const n={aws:"Amazon Web Services",gcp:"Google Cloud Platform",azure:"Microsoft Azure",cloudflare:"Cloudflare"},e={aws:"🟠",gcp:"🔵",azure:"🟣",cloudflare:"🟡"};return`
      <div class="popup-header cloud-region ${t.provider}">
        <span class="popup-title">${e[t.provider]||"☁️"} ${r(t.name)}</span>
        <span class="popup-badge ${t.provider}">${r(t.provider.toUpperCase())}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${r(t.city)}, ${r(t.country)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.cloudRegion.provider")}</span>
            <span class="stat-value">${r(n[t.provider]||t.provider)}</span>
          </div>
          ${t.zones?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.cloudRegion.availabilityZones")}</span>
            <span class="stat-value">${t.zones}</span>
          </div>
          `:""}
        </div>
      </div>
    `}renderTechHQPopup(t){const n={faang:o("popups.techHQ.types.faang"),unicorn:o("popups.techHQ.types.unicorn"),public:o("popups.techHQ.types.public")},e={faang:"🏛️",unicorn:"🦄",public:"🏢"};return`
      <div class="popup-header tech-hq ${t.type}">
        <span class="popup-title">${e[t.type]||"🏢"} ${r(t.company)}</span>
        <span class="popup-badge ${t.type}">${n[t.type]||o("popups.techHQ.types.tech")}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${r(t.city)}, ${r(t.country)}</div>
        <div class="popup-stats">
          ${t.marketCap?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.techHQ.marketCap")}</span>
            <span class="stat-value">${r(t.marketCap)}</span>
          </div>
          `:""}
          ${t.employees?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.techHQ.employees")}</span>
            <span class="stat-value">${t.employees.toLocaleString()}</span>
          </div>
          `:""}
        </div>
      </div>
    `}renderAcceleratorPopup(t){const n={accelerator:o("popups.accelerator.types.accelerator"),incubator:o("popups.accelerator.types.incubator"),studio:o("popups.accelerator.types.studio")},e={accelerator:"🎯",incubator:"🔬",studio:"🎨"};return`
      <div class="popup-header accelerator ${t.type}">
        <span class="popup-title">${e[t.type]||"🎯"} ${r(t.name)}</span>
        <span class="popup-badge ${t.type}">${n[t.type]||o("popups.accelerator.types.accelerator")}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${r(t.city)}, ${r(t.country)}</div>
        <div class="popup-stats">
          ${t.founded?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.accelerator.founded")}</span>
            <span class="stat-value">${t.founded}</span>
          </div>
          `:""}
        </div>
        ${t.notable&&t.notable.length>0?`
        <div class="popup-notable">
          <span class="notable-label">${o("popups.accelerator.notableAlumni")}</span>
          <span class="notable-list">${t.notable.map(a=>r(a)).join(", ")}</span>
        </div>
        `:""}
      </div>
    `}renderTechEventPopup(t){const n=new Date(t.startDate),e=new Date(t.endDate),a=n.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}),s=e>n&&e.toDateString()!==n.toDateString()?` - ${e.toLocaleDateString(void 0,{month:"short",day:"numeric"})}`:"",i=t.daysUntil<=7?"urgent":t.daysUntil<=30?"soon":"",p=t.daysUntil===0?o("popups.techEvent.days.today"):t.daysUntil===1?o("popups.techEvent.days.tomorrow"):o("popups.techEvent.days.inDays",{count:String(t.daysUntil)});return`
      <div class="popup-header tech-event ${i}">
        <span class="popup-title">📅 ${r(t.title)}</span>
        <span class="popup-badge ${i}">${p}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">📍 ${r(t.location)}, ${r(t.country)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.techEvent.date")}</span>
            <span class="stat-value">${a}${s}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.location")}</span>
            <span class="stat-value">${r(t.location)}</span>
          </div>
        </div>
        ${t.url?`
        <a href="${T(t.url)}" target="_blank" rel="noopener noreferrer" class="popup-link">
          ${o("popups.techEvent.moreInformation")} →
        </a>
        `:""}
      </div>
    `}renderTechHQClusterPopup(t){const n=t.count??t.items.length,e=t.unicornCount??t.items.filter(l=>l.type==="unicorn").length,a=t.faangCount??t.items.filter(l=>l.type==="faang").length,s=t.publicCount??t.items.filter(l=>l.type==="public").length,p=[...t.items].sort((l,c)=>{const u={faang:0,unicorn:1,public:2};return(u[l.type]??3)-(u[c.type]??3)}).map(l=>{const c=l.type==="faang"?"🏛️":l.type==="unicorn"?"🦄":"🏢",u=l.marketCap?` (${r(l.marketCap)})`:"";return`<li class="cluster-item ${l.type}">${c} ${r(l.company)}${u}</li>`}).join("");return`
      <div class="popup-header tech-hq cluster">
        <span class="popup-title">🏙️ ${r(t.city)}</span>
        <span class="popup-badge">${o("popups.techHQCluster.companiesCount",{count:String(n)})}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body cluster-popup">
        <div class="popup-subtitle">📍 ${r(t.city)}, ${r(t.country)}</div>
        <div class="cluster-summary">
          ${a?`<span class="summary-item faang">🏛️ ${o("popups.techHQCluster.bigTechCount",{count:String(a)})}</span>`:""}
          ${e?`<span class="summary-item unicorn">🦄 ${o("popups.techHQCluster.unicornsCount",{count:String(e)})}</span>`:""}
          ${s?`<span class="summary-item public">🏢 ${o("popups.techHQCluster.publicCount",{count:String(s)})}</span>`:""}
        </div>
        <ul class="cluster-list">${p}</ul>
        ${t.sampled?`<p class="popup-more">${o("popups.techHQCluster.sampled",{count:String(t.items.length)})}</p>`:""}
      </div>
    `}renderTechEventClusterPopup(t){const n=t.count??t.items.length,e=t.soonCount??t.items.filter(i=>i.daysUntil<=14).length,s=[...t.items].sort((i,p)=>i.daysUntil-p.daysUntil).map(i=>{const l=new Date(i.startDate).toLocaleDateString(void 0,{month:"short",day:"numeric"});return`<li class="cluster-item ${i.daysUntil<=7?"urgent":i.daysUntil<=30?"soon":""}">📅 ${l}: ${r(i.title)}</li>`}).join("");return`
      <div class="popup-header tech-event cluster">
        <span class="popup-title">📅 ${r(t.location)}</span>
        <span class="popup-badge">${o("popups.techEventCluster.eventsCount",{count:String(n)})}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body cluster-popup">
        <div class="popup-subtitle">📍 ${r(t.location)}, ${r(t.country)}</div>
        ${e?`<div class="cluster-summary"><span class="summary-item soon">⚡ ${o("popups.techEventCluster.upcomingWithin2Weeks",{count:String(e)})}</span></div>`:""}
        <ul class="cluster-list">${s}</ul>
        ${t.sampled?`<p class="popup-more">${o("popups.techEventCluster.sampled",{count:String(t.items.length)})}</p>`:""}
      </div>
    `}getMarketStatus(t){try{const n=new Date,a=new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:t.timezone}).format(n),[s=0,i=0]=t.open.split(":").map(Number),[p=0,l=0]=t.close.split(":").map(Number),[c=0,u=0]=a.split(":").map(Number),m=s*60+i,y=p*60+l,d=c*60+u;return d>=m&&d<y?"open":"closed"}catch{return"unknown"}}renderMilitaryFlightPopup(t){const n={usaf:"US Air Force",usn:"US Navy",usmc:"US Marines",usa:"US Army",raf:"Royal Air Force",rn:"Royal Navy",faf:"French Air Force",gaf:"German Air Force",plaaf:"PLA Air Force",plan:"PLA Navy",vks:"Russian Aerospace",iaf:"Israeli Air Force",nato:"NATO",other:o("popups.unknown")},e={fighter:o("popups.militaryFlight.types.fighter"),bomber:o("popups.militaryFlight.types.bomber"),transport:o("popups.militaryFlight.types.transport"),tanker:o("popups.militaryFlight.types.tanker"),awacs:o("popups.militaryFlight.types.awacs"),reconnaissance:o("popups.militaryFlight.types.reconnaissance"),helicopter:o("popups.militaryFlight.types.helicopter"),drone:o("popups.militaryFlight.types.drone"),patrol:o("popups.militaryFlight.types.patrol"),special_ops:o("popups.militaryFlight.types.specialOps"),vip:o("popups.militaryFlight.types.vip"),unknown:o("popups.unknown")},a={high:"elevated",medium:"low",low:"low"},s=r(t.callsign||o("popups.unknown")),i=r(t.aircraftType.toUpperCase()),p=r(n[t.operator]||t.operatorCountry||o("popups.unknown")),l=r(t.hexCode||""),c=r(e[t.aircraftType]||t.aircraftType),u=t.squawk?r(t.squawk):"",m=t.note?r(t.note):"",y=t.registration?r(t.registration):"",d=t.aircraftModel?r(t.aircraftModel):"",h=t.verticalRate!==void 0&&t.verticalRate!==0?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.militaryFlight.climbRate")}</span>
            <span class="stat-value">${t.verticalRate>0?"+":""}${Math.round(t.verticalRate)} fpm</span>
          </div>`:"",g=t.enriched?[t.enriched.manufacturer?`<div class="popup-stat"><span class="stat-label">${o("popups.militaryFlight.manufacturer")}</span><span class="stat-value">${r(t.enriched.manufacturer)}</span></div>`:"",t.enriched.owner?`<div class="popup-stat"><span class="stat-label">${o("popups.militaryFlight.owner")}</span><span class="stat-value">${r(t.enriched.owner)}</span></div>`:"",t.enriched.builtYear?`<div class="popup-stat"><span class="stat-label">${o("popups.militaryFlight.builtYear")}</span><span class="stat-value">${r(t.enriched.builtYear)}</span></div>`:""].join(""):"";return`
      <div class="popup-header military-flight ${t.operator}">
        <span class="popup-title">${s}</span>
        <span class="popup-badge ${a[t.confidence]||"low"}">${i}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${p}</div>
        ${y||d?`<div class="popup-subtitle" style="opacity:0.7;font-size:11px;margin-top:-4px">${[y,d].filter(Boolean).join(" · ")}</div>`:""}
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.militaryFlight.altitude")}</span>
            <span class="stat-value">${t.altitude>0?`FL${Math.round(t.altitude/100)}`:o("popups.militaryFlight.ground")}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.militaryFlight.speed")}</span>
            <span class="stat-value">${t.speed} kts</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.militaryFlight.heading")}</span>
            <span class="stat-value">${Math.round(t.heading)}°</span>
          </div>
          ${h}
          <div class="popup-stat">
            <span class="stat-label">${o("popups.militaryFlight.hexCode")}</span>
            <span class="stat-value">${l}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.type")}</span>
            <span class="stat-value">${c}</span>
          </div>
          ${t.squawk?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.militaryFlight.squawk")}</span>
            <span class="stat-value">${u}</span>
          </div>
          `:""}
          ${g}
        </div>
        ${t.note?`<p class="popup-description">${m}</p>`:""}
${st("wingbitsEnrichment")?'<div class="wingbits-live-section"><div class="wingbits-live-loading" style="font-size:11px;opacity:0.5;padding:4px 0">Loading Wingbits live data…</div></div>':""}
        <div class="popup-attribution">${o("popups.militaryFlight.attribution")}</div>
      </div>
    `}getFlagEmoji(t){if(!t||t.length!==2)return"";const n=t.toUpperCase().split("").map(e=>127397+e.charCodeAt(0));try{return String.fromCodePoint(...n)}catch{return""}}getOperatorCountryCode(t){return(t.operatorCountry?Pt(t.operatorCountry):null)||N.OPERATOR_COUNTRY_MAP[t.operator]||""}formatCoord(t,n){const e=t>=0?"N":"S",a=n>=0?"E":"W";return`${Math.abs(t).toFixed(3)}°${e}, ${Math.abs(n).toFixed(3)}°${a}`}renderClusterVesselItem(t){const n=this.getOperatorCountryCode(t),e=n?this.getFlagEmoji(n):"";return`<div class="cluster-vessel-item">${e?`<span class="flag-icon-small">${e}</span> `:""}${r(t.name)} - ${r(t.vesselType)}</div>`}renderMilitaryVesselPopup(t){const n={usn:"US Navy",uscg:"US Coast Guard",rn:"Royal Navy",fn:"French Navy",plan:"PLA Navy",ruf:"Russian Navy",jmsdf:"Japan Maritime SDF",rokn:"ROK Navy",other:o("popups.unknown")},e={carrier:"Aircraft Carrier",destroyer:"Destroyer",frigate:"Frigate",submarine:"Submarine",amphibious:"Amphibious",patrol:"Patrol",auxiliary:"Auxiliary",research:"Research",icebreaker:"Icebreaker",special:"Special",unknown:o("popups.unknown")},a=t.isDark?`<span class="popup-badge high">${o("popups.militaryVessel.aisDark")}</span>`:"",s=t.usniSource?`<span class="popup-badge" style="background:rgba(255,170,50,0.15);border:1px solid rgba(255,170,50,0.5);color:#ffaa44;">${o("popups.militaryVessel.estPosition")}</span>`:`<span class="popup-badge" style="background:rgba(68,255,136,0.15);border:1px solid rgba(68,255,136,0.5);color:#44ff88;">${o("popups.militaryVessel.aisLive")}</span>`,i=t.usniDeploymentStatus&&t.usniDeploymentStatus!=="unknown"?`<span class="popup-badge ${t.usniDeploymentStatus==="deployed"?"high":t.usniDeploymentStatus==="underway"?"elevated":"low"}">${t.usniDeploymentStatus.toUpperCase().replace("-"," ")}</span>`:"",p=t.vesselType==="unknown"&&t.aisShipType?t.aisShipType:e[t.vesselType]||t.vesselType,l=t.vesselType==="unknown"&&t.aisShipType?t.aisShipType.toUpperCase():t.vesselType.toUpperCase(),c=r(t.name||`${o("popups.militaryVessel.vessel")} ${t.mmsi}`),u=r(n[t.operator]||t.operatorCountry||o("popups.unknown")),m=r(p),y=r(l),d=r(t.mmsi||"—"),h=t.hullNumber?r(t.hullNumber):"",g=t.note?r(t.note):"",$=this.getOperatorCountryCode(t),C=$?this.getFlagEmoji($):"",b=t.lastAisUpdate?`${new Date(t.lastAisUpdate).toLocaleString()}${t.aisGapMinutes?` (${t.aisGapMinutes}m ago)`:""}`:o("popups.unknown"),w=t.track&&t.track.length>0?`<div class="popup-section">
          <details>
            <summary>${o("popups.militaryVessel.recentTracking")}</summary>
            <div class="popup-section-content">
              <div class="vessel-history-list">
                ${t.track.slice(-5).reverse().map((k,R)=>`
                  <div class="vessel-history-item">
                    <span class="history-point">${this.formatCoord(k[0],k[1])}</span>
                    ${R===0?`<span class="history-tag">${o("popups.militaryVessel.lastReport")}</span>`:""}
                  </div>
                `).join("")}
              </div>
            </div>
          </details>
        </div>`:"",x=t.usniActivityDescription||t.usniRegion||t.usniStrikeGroup?`
      <div class="popup-section usni-intel-section">
        <div class="section-header usni">
          <span class="section-label">${o("popups.militaryVessel.usniIntel")}</span>
        </div>
        <div class="usni-intel-content">
          ${t.usniStrikeGroup?`<div class="usni-field"><strong>${o("popups.militaryVessel.strikeGroup")}:</strong> ${r(t.usniStrikeGroup)}</div>`:""}
          ${t.usniRegion?`<div class="usni-field"><strong>${o("popups.militaryVessel.region")}:</strong> ${r(t.usniRegion)}</div>`:""}
          ${t.usniActivityDescription?`<p class="usni-description">${r(t.usniActivityDescription)}</p>`:""}
          ${t.usniArticleUrl&&T(t.usniArticleUrl)?`
            <div class="usni-source-row">
              <a href="${T(t.usniArticleUrl)}" target="_blank" rel="noopener noreferrer" class="usni-link">
                ${o("popups.militaryVessel.usniSource")} ${t.usniArticleDate?`(${new Date(t.usniArticleDate).toLocaleDateString()})`:""}
              </a>
            </div>
          `:""}
        </div>
      </div>
    `:"";return`
      <div class="popup-header military-vessel ${t.operator}">
        <div class="popup-title-row">
          <span class="popup-title">${c}</span>
          ${t.hullNumber?`<span class="hull-badge">${h}</span>`:""}
        </div>
        <div class="popup-badges">
          ${a}
          ${s}
          ${i}
          <span class="popup-badge elevated">${y}</span>
        </div>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">
          ${C?`<span class="flag-icon">${C}</span>`:""}
          <span class="operator-label">${u}</span>
        </div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.type")}</span>
            <span class="stat-value">${m}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.militaryVessel.speed")}</span>
            <span class="stat-value">${t.speed} kts</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.militaryVessel.heading")}</span>
            <span class="stat-value">${Math.round(t.heading)}°</span>
          </div>
          ${t.mmsi?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.militaryVessel.mmsi")}</span>
            <span class="stat-value">${d}</span>
          </div>
          `:""}
          ${t.nearChokepoint?`
          <div class="popup-stat warning">
            <span class="stat-label">${o("popups.militaryVessel.nearChokepoint")}</span>
            <span class="stat-value">${r(t.nearChokepoint)}</span>
          </div>
          `:""}
          ${t.nearBase?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.militaryVessel.nearBase")}</span>
            <span class="stat-value">${r(t.nearBase)}</span>
          </div>
          `:""}
          <div class="popup-stat full-width">
            <span class="stat-label">${o("popups.militaryVessel.lastSeen")}</span>
            <span class="stat-value">${b}</span>
          </div>
        </div>

        ${x}
        ${w}

        ${t.note?`<p class="popup-description">${g}</p>`:""}
        ${t.isDark?`<p class="popup-description alert">${o("popups.militaryVessel.darkDescription")}</p>`:""}
        ${t.usniSource?`<p class="popup-description" style="opacity:0.7;font-size:0.85em">${o("popups.militaryVessel.approximatePosition")}</p>`:""}
        ${t.usniArticleUrl&&!x&&T(t.usniArticleUrl)?`<div class="popup-attribution"><a href="${T(t.usniArticleUrl)}" target="_blank" rel="noopener noreferrer">${o("popups.militaryVessel.usniSource")}${t.usniArticleDate?` (${new Date(t.usniArticleDate).toLocaleDateString()})`:""}</a></div>`:""}
      </div>
    `}renderMilitaryFlightClusterPopup(t){const n={exercise:o("popups.militaryCluster.flightActivity.exercise"),patrol:o("popups.militaryCluster.flightActivity.patrol"),transport:o("popups.militaryCluster.flightActivity.transport"),unknown:o("popups.militaryCluster.flightActivity.unknown")},e={exercise:"high",patrol:"elevated",transport:"low",unknown:"low"},a=t.activityType||"unknown",s=r(t.name),i=r(a.toUpperCase()),p=t.dominantOperator?r(t.dominantOperator.toUpperCase()):"",l=t.flights.slice(0,5).map(u=>`<div class="cluster-flight-item">${r(u.callsign)} - ${r(u.aircraftType)}</div>`).join(""),c=t.flightCount>5?`<div class="cluster-more">${o("popups.militaryCluster.moreAircraft",{count:String(t.flightCount-5)})}</div>`:"";return`
      <div class="popup-header military-cluster">
        <span class="popup-title">${s}</span>
        <span class="popup-badge ${e[a]||"low"}">${o("popups.militaryCluster.aircraftCount",{count:String(t.flightCount)})}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${n[a]||o("popups.militaryCluster.flightActivity.unknown")}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.militaryCluster.aircraft")}</span>
            <span class="stat-value">${t.flightCount}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.militaryCluster.activity")}</span>
            <span class="stat-value">${i}</span>
          </div>
          ${t.dominantOperator?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.militaryCluster.primary")}</span>
            <span class="stat-value">${p}</span>
          </div>
          `:""}
        </div>
        <div class="popup-section">
          <span class="section-label">${o("popups.militaryCluster.trackedAircraft")}</span>
          <div class="cluster-flights">
            ${l}
            ${c}
          </div>
        </div>
      </div>
    `}renderMilitaryVesselClusterPopup(t){var b;const n={exercise:o("popups.militaryCluster.vesselActivity.exercise"),deployment:o("popups.militaryCluster.vesselActivity.deployment"),patrol:o("popups.militaryCluster.vesselActivity.patrol"),transit:o("popups.militaryCluster.vesselActivity.transit"),unknown:o("popups.militaryCluster.vesselActivity.unknown")},e={exercise:"high",deployment:"high",patrol:"elevated",transit:"low",unknown:"low"},a=t.activityType||"unknown",s=r(t.name),i=r(a.toUpperCase()),p=t.region?r(t.region):"",l={};t.vessels.forEach(w=>{l[w.operator]=(l[w.operator]||0)+1});const c=(b=Object.entries(l).sort((w,x)=>x[1]-w[1])[0])==null?void 0:b[0],u=c&&N.OPERATOR_COUNTRY_MAP[c]||"",m=u?this.getFlagEmoji(u):"",y=t.vessels.slice(0,5).map(w=>this.renderClusterVesselItem(w)).join(""),d=t.vessels.length>5?t.vessels.slice(5).map(w=>this.renderClusterVesselItem(w)).join(""):"",h=t.vessels.length-5,g=r(o("popups.militaryCluster.moreVessels",{count:String(h)})),$=r(o("popups.militaryCluster.showLess")),C=d?`${y}<div class="cluster-vessels-hidden" style="display:none">${d}</div><button type="button" class="cluster-toggle" data-more="${g}" data-less="${$}">${g}</button>`:y;return`
      <div class="popup-header military-cluster">
        <span class="popup-title">${s}</span>
        <span class="popup-badge ${e[a]||"low"}">${o("popups.militaryCluster.vesselsCount",{count:String(t.vesselCount)})}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${m?`<span class="flag-icon">${m}</span> `:""}${n[a]||o("popups.militaryCluster.vesselActivity.unknown")}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.militaryCluster.vessels")}</span>
            <span class="stat-value">${t.vesselCount}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.militaryCluster.activity")}</span>
            <span class="stat-value">${i}</span>
          </div>
          ${t.region?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.region")}</span>
            <span class="stat-value">${p}</span>
          </div>
          `:""}
        </div>
        <div class="popup-section">
          <span class="section-label">${o("popups.militaryCluster.trackedVessels")}</span>
          <div class="cluster-vessels">
            ${C}
          </div>
        </div>
      </div>
    `}sanitizeClassToken(t,n="unknown"){return String(t||"").trim().replace(/[^A-Za-z0-9_-]/g,"").replace(/^[^A-Za-z_]/,"")||n}renderNaturalEventPopup(t){const n={severeStorms:"high",wildfires:"high",volcanoes:"high",earthquakes:"elevated",floods:"elevated",landslides:"elevated",drought:"medium",dustHaze:"low",snow:"low",tempExtremes:"elevated",seaLakeIce:"low",waterColor:"low",manmade:"elevated"},e=ft(t.category),a=n[t.category]||"low",s=this.sanitizeClassToken(t.category,"manmade"),i=this.getTimeAgo(t.date);return`
      <div class="popup-header nat-event ${s}">
        <span class="popup-icon">${e}</span>
        <span class="popup-title">${r(t.categoryTitle.toUpperCase())}</span>
        <span class="popup-badge ${a}">${t.closed?o("popups.naturalEvent.closed"):o("popups.naturalEvent.active")}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${r(t.title)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.naturalEvent.reported")}</span>
            <span class="stat-value">${i}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.coordinates")}</span>
            <span class="stat-value">${t.lat.toFixed(2)}°, ${t.lon.toFixed(2)}°</span>
          </div>
          ${t.magnitude?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.magnitude")}</span>
            <span class="stat-value">${t.magnitude}${t.magnitudeUnit?` ${r(t.magnitudeUnit)}`:""}</span>
          </div>
          `:""}
          ${t.sourceName?`
          <div class="popup-stat">
            <span class="stat-label">${o("popups.source")}</span>
            <span class="stat-value">${r(t.sourceName)}</span>
          </div>
          `:""}
        </div>
        ${t.stormName||t.windKt?this.renderTcDetails(t):""}
        ${t.description&&!t.windKt?`<p class="popup-description">${r(t.description)}</p>`:""}
        ${t.sourceUrl?`<a href="${T(t.sourceUrl)}" target="_blank" class="popup-link">${o("popups.naturalEvent.viewOnSource",{source:r(t.sourceName||o("popups.source"))})} →</a>`:""}
        <div class="popup-attribution">${o("popups.naturalEvent.attribution")}</div>
      </div>
    `}renderTcDetails(t){const n={0:"#5ebaff",1:"#00faf4",2:"#ffffcc",3:"#ffe775",4:"#ffc140",5:"#ff6060"},e=t.stormCategory??0,a=n[e]||n[0],s=t.classification||(e>0?`Category ${e}`:o("popups.naturalEvent.tropicalSystem"));return`
      <div class="popup-stats">
        ${t.stormName?`
        <div class="popup-stat" style="grid-column: 1 / -1">
          <span class="stat-label">${o("popups.naturalEvent.storm")}</span>
          <span class="stat-value">${r(t.stormName)}</span>
        </div>`:""}
        <div class="popup-stat">
          <span class="stat-label">${o("popups.naturalEvent.classification")}</span>
          <span class="stat-value" style="color: ${a}">${r(s)}</span>
        </div>
        ${t.windKt!=null?`
        <div class="popup-stat">
          <span class="stat-label">${o("popups.naturalEvent.maxWind")}</span>
          <span class="stat-value">${t.windKt} kt (${Math.round(t.windKt*1.15078)} mph)</span>
        </div>`:""}
        ${t.pressureMb!=null?`
        <div class="popup-stat">
          <span class="stat-label">${o("popups.naturalEvent.pressure")}</span>
          <span class="stat-value">${t.pressureMb} mb</span>
        </div>`:""}
        ${t.movementSpeedKt!=null?`
        <div class="popup-stat">
          <span class="stat-label">${o("popups.naturalEvent.movement")}</span>
          <span class="stat-value">${t.movementDir!=null?t.movementDir+"° at ":""}${t.movementSpeedKt} kt</span>
        </div>`:""}
      </div>
    `}renderPortPopup(t){const n={container:o("popups.port.types.container"),oil:o("popups.port.types.oil"),lng:o("popups.port.types.lng"),naval:o("popups.port.types.naval"),mixed:o("popups.port.types.mixed"),bulk:o("popups.port.types.bulk")},e={container:"elevated",oil:"high",lng:"high",naval:"elevated",mixed:"normal",bulk:"low"},a={container:"🏭",oil:"🛢️",lng:"🔥",naval:"⚓",mixed:"🚢",bulk:"📦"},s=t.rank?`<div class="popup-stat"><span class="stat-label">${o("popups.port.worldRank")}</span><span class="stat-value">#${t.rank}</span></div>`:"";return`
      <div class="popup-header port ${r(t.type)}">
        <span class="popup-icon">${a[t.type]||"🚢"}</span>
        <span class="popup-title">${r(t.name.toUpperCase())}</span>
        <span class="popup-badge ${e[t.type]||"normal"}">${n[t.type]||t.type.toUpperCase()}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${r(t.country)}</div>
        <div class="popup-stats">
          ${s}
          <div class="popup-stat">
            <span class="stat-label">${o("popups.type")}</span>
            <span class="stat-value">${n[t.type]||t.type.toUpperCase()}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.coordinates")}</span>
            <span class="stat-value">${t.lat.toFixed(2)}°, ${t.lon.toFixed(2)}°</span>
          </div>
        </div>
        <p class="popup-description">${r(t.note)}</p>
      </div>
    `}renderSpaceportPopup(t){const n={active:"elevated",construction:"high",inactive:"low"},e={active:o("popups.spaceport.status.active"),construction:o("popups.spaceport.status.construction"),inactive:o("popups.spaceport.status.inactive")};return`
      <div class="popup-header spaceport ${t.status}">
        <span class="popup-icon">🚀</span>
        <span class="popup-title">${r(t.name.toUpperCase())}</span>
        <span class="popup-badge ${n[t.status]||"normal"}">${e[t.status]||t.status.toUpperCase()}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${r(t.operator)} • ${r(t.country)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.spaceport.launchActivity")}</span>
            <span class="stat-value">${r(t.launches.toUpperCase())}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.coordinates")}</span>
            <span class="stat-value">${t.lat.toFixed(2)}°, ${t.lon.toFixed(2)}°</span>
          </div>
        </div>
        <p class="popup-description">${o("popups.spaceport.description")}</p>
      </div>
    `}renderMineralPopup(t){const n={producing:"elevated",development:"high",exploration:"low"},e={producing:o("popups.mineral.status.producing"),development:o("popups.mineral.status.development"),exploration:o("popups.mineral.status.exploration")},a=t.mineral==="Lithium"?"🔋":t.mineral==="Rare Earths"?"🧲":"💎";return`
      <div class="popup-header mineral ${t.status}">
        <span class="popup-icon">${a}</span>
        <span class="popup-title">${r(t.name.toUpperCase())}</span>
        <span class="popup-badge ${n[t.status]||"normal"}">${e[t.status]||t.status.toUpperCase()}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${o("popups.mineral.projectSubtitle",{mineral:r(t.mineral.toUpperCase())})}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.operator")}</span>
            <span class="stat-value">${r(t.operator)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.country")}</span>
            <span class="stat-value">${r(t.country)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.coordinates")}</span>
            <span class="stat-value">${t.lat.toFixed(2)}°, ${t.lon.toFixed(2)}°</span>
          </div>
        </div>
        <p class="popup-description">${r(t.significance)}</p>
      </div>
    `}renderStockExchangePopup(t){const n=t.tier.toUpperCase(),e=t.tier==="mega"?"high":t.tier==="major"?"medium":"low";return`
      <div class="popup-header exchange">
        <span class="popup-title">${r(t.shortName)}</span>
        <span class="popup-badge ${e}">${n}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${r(t.name)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.location")}</span>
            <span class="stat-value">${r(t.city)}, ${r(t.country)}</span>
          </div>
          ${t.marketCap?`<div class="popup-stat"><span class="stat-label">${o("popups.stockExchange.marketCap")}</span><span class="stat-value">$${t.marketCap}T</span></div>`:""}
          ${t.tradingHours?`<div class="popup-stat"><span class="stat-label">${o("popups.tradingHours")}</span><span class="stat-value">${r(t.tradingHours)}</span></div>`:""}
        </div>
        ${t.description?`<p class="popup-description">${r(t.description)}</p>`:""}
      </div>
    `}renderFinancialCenterPopup(t){const n=t.type.toUpperCase();return`
      <div class="popup-header financial-center">
        <span class="popup-title">${r(t.name)}</span>
        <span class="popup-badge">${n}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.location")}</span>
            <span class="stat-value">${r(t.city)}, ${r(t.country)}</span>
          </div>
          ${t.gfciRank?`<div class="popup-stat"><span class="stat-label">${o("popups.financialCenter.gfciRank")}</span><span class="stat-value">#${t.gfciRank}</span></div>`:""}
        </div>
        ${t.specialties&&t.specialties.length>0?`
          <div class="popup-section">
            <span class="section-label">${o("popups.financialCenter.specialties")}</span>
            <div class="popup-tags">
              ${t.specialties.map(e=>`<span class="popup-tag">${r(e)}</span>`).join("")}
            </div>
          </div>
        `:""}
        ${t.description?`<p class="popup-description">${r(t.description)}</p>`:""}
      </div>
    `}renderCentralBankPopup(t){const n=t.type.toUpperCase();return`
      <div class="popup-header central-bank">
        <span class="popup-title">${r(t.shortName)}</span>
        <span class="popup-badge">${n}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-subtitle">${r(t.name)}</div>
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.location")}</span>
            <span class="stat-value">${r(t.city)}, ${r(t.country)}</span>
          </div>
          ${t.currency?`<div class="popup-stat"><span class="stat-label">${o("popups.centralBank.currency")}</span><span class="stat-value">${r(t.currency)}</span></div>`:""}
        </div>
        ${t.description?`<p class="popup-description">${r(t.description)}</p>`:""}
      </div>
    `}renderCommodityHubPopup(t){const n=t.type.toUpperCase();return`
      <div class="popup-header commodity-hub">
        <span class="popup-title">${r(t.name)}</span>
        <span class="popup-badge">${n}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.location")}</span>
            <span class="stat-value">${r(t.city)}, ${r(t.country)}</span>
          </div>
        </div>
        ${t.commodities&&t.commodities.length>0?`
          <div class="popup-section">
            <span class="section-label">${o("popups.commodityHub.commodities")}</span>
            <div class="popup-tags">
              ${t.commodities.map(e=>`<span class="popup-tag">${r(e)}</span>`).join("")}
            </div>
          </div>
        `:""}
        ${t.description?`<p class="popup-description">${r(t.description)}</p>`:""}
      </div>
    `}normalizeSeverity(t){const n=(t||"").trim().toLowerCase();return n==="high"?"high":n==="medium"?"medium":"low"}renderIranEventPopup(t){const n=this.normalizeSeverity(t.severity),e=t.timestamp?this.getTimeAgo(new Date(t.timestamp)):"",a=T(t.sourceUrl),s=t.relatedEvents&&t.relatedEvents.length>0?`
        <div class="popup-section">
          <span class="section-label">${o("popups.iranEvent.relatedEvents")}</span>
          <ul class="cluster-list">
            ${t.relatedEvents.map(i=>{const p=this.normalizeSeverity(i.severity),l=i.timestamp?this.getTimeAgo(new Date(i.timestamp)):"",c=i.title.length>60?i.title.slice(0,60)+"…":i.title;return`<li class="cluster-item"><span class="popup-badge ${p}">${r(p.toUpperCase())}</span> ${r(c)}${l?` <span style="color:var(--text-muted);font-size:10px;">${r(l)}</span>`:""}</li>`}).join("")}
          </ul>
        </div>`:"";return`
      <div class="popup-header iranEvent ${n}">
        <span class="popup-title">${r(t.title)}</span>
        <span class="popup-badge ${n}">${r(n.toUpperCase())}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.type")}</span>
            <span class="stat-value">${r(t.category)}</span>
          </div>
          ${t.locationName?`<div class="popup-stat">
            <span class="stat-label">${o("popups.location")}</span>
            <span class="stat-value">${r(t.locationName)}</span>
          </div>`:""}
          ${e?`<div class="popup-stat">
            <span class="stat-label">${o("popups.time")}</span>
            <span class="stat-value">${r(e)}</span>
          </div>`:""}
        </div>
        ${s}
        ${a?`<a href="${r(a)}" target="_blank" rel="noopener noreferrer nofollow" class="popup-link">${o("popups.source")} →</a>`:""}
      </div>
    `}renderGpsJammingPopup(t){const n=t.level==="high",e=n?"critical":"medium";return`
      <div class="popup-header" style="background:${n?"#ff5050":"#ffb432"}">
        <span class="popup-title">${o("popups.gpsJamming.title")}</span>
        <span class="popup-badge ${e}">${r(t.level.toUpperCase())}</span>
        <button class="popup-close" aria-label="Close">×</button>
      </div>
      <div class="popup-body">
        <div class="popup-stats">
          <div class="popup-stat">
            <span class="stat-label">${o("popups.gpsJamming.navPerformance")}</span>
            <span class="stat-value">${Number(t.npAvg).toFixed(2)}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.gpsJamming.samples")}</span>
            <span class="stat-value">${t.sampleCount}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.gpsJamming.aircraft")}</span>
            <span class="stat-value">${t.aircraftCount}</span>
          </div>
          <div class="popup-stat">
            <span class="stat-label">${o("popups.gpsJamming.h3Hex")}</span>
            <span class="stat-value" style="font-size:10px">${r(t.h3)}</span>
          </div>
        </div>
      </div>
    `}};f(N,"historyCache",new Map),f(N,"historyInflight",new Set),f(N,"OPERATOR_COUNTRY_MAP",{usn:"US",usaf:"US",usmc:"US",usa:"US",uscg:"US",rn:"GB",raf:"GB",plan:"CN",plaaf:"CN",vks:"RU",ruf:"RU",faf:"FR",fn:"FR",gaf:"DE",iaf:"IL",jmsdf:"JP",rokn:"KR"});let X=N;function ze(v){const t=[...new Set(v.contributingSources)];return t.length>0?t.join(" + "):v.source}function Ue(v){switch(v){case"high":return"High";case"medium":return"Medium";default:return"Low"}}function _e(v,t){const n=i=>i.map(p=>`<li>${r(p)}</li>`).join(""),e=t.related.length>0?t.related.map(i=>`<span>${r(i)}</span>`).join(""):"<span>Layer guide</span>",a=t.evidence.length>0?`<div class="layer-explanation-grounding"><span>Grounded in</span>${t.evidence.map(i=>`<code>${r(i)}</code>`).join("")}</div>`:"",s=t.coverage==="curated"?"Curated v1":"Fallback";return`
    <div class="layer-explanation-header">
      <div>
        <span class="layer-explanation-kicker">${r(t.category)}</span>
        <strong>${r(v)}</strong>
      </div>
      <button class="layer-explanation-close" aria-label="Close">×</button>
    </div>
    <div class="layer-explanation-content">
      <div class="layer-explanation-status ${t.coverage}">${s}</div>
      <p class="layer-explanation-purpose">${r(t.purpose)}</p>
      <div class="layer-explanation-grid">
        <section>
          <span>Source</span>
          <p>${r(t.source)}</p>
        </section>
        <section>
          <span>Freshness</span>
          <p>${r(t.freshness)}</p>
        </section>
        <section>
          <span>Confidence</span>
          <p>${r(t.confidence)}</p>
        </section>
      </div>
      <div class="layer-explanation-section">
        <span>Limitations</span>
        <ul>${n(t.limitations)}</ul>
      </div>
      <div class="layer-explanation-section">
        <span>Related</span>
        <div class="layer-explanation-related">${e}</div>
      </div>
      ${a}
    </div>
  `}const yt=6,Be=250;function H(){return typeof performance<"u"?performance.now():Date.now()}function Ge(){return{pointerStart:null,dragged:!1,suppressNextClick:!1,lastDragAtMs:0}}function Ye(v,t){v.pointerStart=t,v.dragged=!1}function Ct(v,t=H()){v.dragged=!0,We(v,t)}function We(v,t=H()){v.suppressNextClick=!0,v.lastDragAtMs=t}function je(v,t,n=H()){if(!v.pointerStart)return!1;const e=t.x-v.pointerStart.x,a=t.y-v.pointerStart.y;return e*e+a*a<=yt*yt?!1:(Ct(v,n),!0)}function Xe(v,t=H()){v.dragged&&Ct(v,t),v.pointerStart=null,v.dragged=!1}function Ve(v,t=H()){return v.suppressNextClick?(v.suppressNextClick=!1,t-v.lastDragAtMs<=Be):!1}const M=class M{constructor(t,n,e={}){f(this,"container");f(this,"svg");f(this,"wrapper");f(this,"overlays");f(this,"clusterCanvas");f(this,"clusterGl",null);f(this,"state");f(this,"layerExplanationOutsideClickHandler",null);f(this,"worldData",null);f(this,"countryFeatures",null);f(this,"isResizing",!1);f(this,"baseLayerGroup",null);f(this,"dynamicLayerGroup",null);f(this,"baseRendered",!1);f(this,"baseWidth",0);f(this,"baseHeight",0);f(this,"hotspots");f(this,"earthquakes",[]);f(this,"weatherAlerts",[]);f(this,"radiationObservations",[]);f(this,"outages",[]);f(this,"aisDisruptions",[]);f(this,"aisDensity",[]);f(this,"cableAdvisories",[]);f(this,"repairShips",[]);f(this,"healthByCableId",{});f(this,"conflictEvents",[]);f(this,"protests",[]);f(this,"flightDelays",[]);f(this,"aircraftPositions",[]);f(this,"militaryFlights",[]);f(this,"militaryFlightClusters",[]);f(this,"militaryVessels",[]);f(this,"militaryVesselClusters",[]);f(this,"naturalEvents",[]);f(this,"firmsFireData",[]);f(this,"techEvents",[]);f(this,"techActivities",[]);f(this,"geoActivities",[]);f(this,"iranEvents",[]);f(this,"aptGroups",[]);f(this,"aptGroupsLoaded",!1);f(this,"webcamData",[]);f(this,"news",[]);f(this,"onTechHubClick");f(this,"onGeoHubClick");f(this,"popup");f(this,"onHotspotClick");f(this,"onTimeRangeChange");f(this,"onLayerChange");f(this,"layerZoomOverrides",{});f(this,"onStateChange");f(this,"onCountryClick");f(this,"highlightedAssets",{pipeline:new Set,cable:new Set,datacenter:new Set,base:new Set,nuclear:new Set});f(this,"boundVisibilityHandler");f(this,"handleThemeChange");f(this,"resizeObserver",null);f(this,"renderScheduled",!1);f(this,"lastRenderTime",0);f(this,"MIN_RENDER_INTERVAL_MS",100);f(this,"healthCheckLoop",null);this.container=t,this.state=n,this.hotspots=[...V];const a=e.chrome??!0;this.wrapper=document.createElement("div"),this.wrapper.className="map-wrapper",this.wrapper.id="mapWrapper";const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.classList.add("map-svg"),s.id="mapSvg",this.wrapper.appendChild(s),this.clusterCanvas=document.createElement("canvas"),this.clusterCanvas.className="map-cluster-canvas",this.clusterCanvas.id="mapClusterCanvas",this.wrapper.appendChild(this.clusterCanvas),this.overlays=document.createElement("div"),this.overlays.id="mapOverlays",this.wrapper.appendChild(this.overlays),t.appendChild(this.wrapper),a&&(t.appendChild(this.createControls()),t.appendChild(this.createTimeSlider()),t.appendChild(this.createLayerToggles()),t.appendChild(this.createLegend()),this.healthCheckLoop=Ht(()=>{this.runHealthCheck()},{intervalMs:3e4,pauseWhenHidden:!0,refreshOnVisible:!1,runImmediately:!1,jitterFraction:0})),this.svg=ct(s),this.baseLayerGroup=this.svg.append("g").attr("class","map-base"),this.dynamicLayerGroup=this.svg.append("g").attr("class","map-dynamic"),this.popup=new X(t),this.initClusterRenderer(),this.setupZoomHandlers(),this.loadMapData(),this.setupResizeObserver(),this.handleThemeChange=()=>{this.baseRendered=!1,this.render()},window.addEventListener("theme-changed",this.handleThemeChange),this.state.layers.cyberThreats&&A!=="tech"&&A!=="happy"&&this.loadAptGroups()}setupResizeObserver(){let t=0,n=0;this.resizeObserver=new ResizeObserver(e=>{if(!this.isResizing)for(const a of e){const{width:s,height:i}=a.contentRect;s>0&&i>0&&(s!==t||i!==n)&&(t=s,n=i,requestAnimationFrame(()=>this.render()))}}),this.resizeObserver.observe(this.container),this.boundVisibilityHandler=()=>{document.hidden||requestAnimationFrame(()=>this.render())},document.addEventListener("visibilitychange",this.boundVisibilityHandler)}setIsResizing(t){const n=this.isResizing;this.isResizing=t,n&&!t&&requestAnimationFrame(()=>this.render())}resize(){requestAnimationFrame(()=>this.render())}destroy(){window.removeEventListener("theme-changed",this.handleThemeChange),document.removeEventListener("visibilitychange",this.boundVisibilityHandler),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),this.healthCheckLoop&&(this.healthCheckLoop.stop(),this.healthCheckLoop=null)}createControls(){const t=document.createElement("div");return t.className="map-controls",L(t,S(`
      <button class="map-control-btn" data-action="zoom-in" aria-label="Zoom in">+</button>
      <button class="map-control-btn" data-action="zoom-out" aria-label="Zoom out">−</button>
      <button class="map-control-btn" data-action="reset" aria-label="Reset rotation">⟲</button>
    `,"legacy direct innerHTML migration")),t.addEventListener("click",n=>{const a=n.target.dataset.action;a==="zoom-in"?this.zoomIn():a==="zoom-out"?this.zoomOut():a==="reset"&&this.reset()}),t}createTimeSlider(){const t=document.createElement("div");return t.className="time-slider",t.id="timeSlider",L(t,S(`
      <span class="time-slider-label">TIME RANGE</span>
      <div class="time-slider-buttons">
        ${[{value:"1h",label:"1H"},{value:"6h",label:"6H"},{value:"24h",label:"24H"},{value:"48h",label:"48H"},{value:"7d",label:"7D"},{value:"all",label:"ALL"}].map(e=>`<button class="time-btn ${this.state.timeRange===e.value?"active":""}" data-range="${e.value}">${e.label}</button>`).join("")}
      </div>
    `,"legacy direct innerHTML migration")),t.addEventListener("click",e=>{const a=e.target;if(a.classList.contains("time-btn")){const s=a.dataset.range;this.setTimeRange(s),t.querySelectorAll(".time-btn").forEach(i=>i.classList.remove("active")),a.classList.add("active")}}),t}updateTimeSliderButtons(){const t=this.container.querySelector("#timeSlider");t&&t.querySelectorAll(".time-btn").forEach(n=>{const e=n.dataset.range;n.classList.toggle("active",e===this.state.timeRange)})}setTimeRange(t){var n;this.state.timeRange=t,(n=this.onTimeRangeChange)==null||n.call(this,t),this.updateTimeSliderButtons(),this.render()}getTimeRangeMs(){return{"1h":36e5,"6h":216e5,"24h":864e5,"48h":1728e5,"7d":6048e5,all:1/0}[this.state.timeRange]}getLayerControlLabel(t){if(t==="sanctions")return o("components.deckgl.layerHelp.labels.sanctions");const n=de(A||"full","flat").find(e=>e.key===t);return n?ue(n,o):String(t)}createLayerToggles(){const t=document.createElement("div");t.className="layer-toggles",t.id="layerToggles";const p=A==="tech"?["cables","datacenters","outages","startupHubs","cloudRegions","accelerators","techHQs","techEvents","natural","weather","economic"]:A==="finance"?["stockExchanges","financialCenters","centralBanks","commodityHubs","cables","pipelines","outages","sanctions","economic","waterways","natural","weather"]:A==="happy"?["positiveEvents","kindness","happiness","speciesRecovery","renewableInstallations"]:A==="energy"?["pipelines","waterways","ais","commodityHubs","minerals","sanctions","outages","natural","weather","fires","economic"]:["iranAttacks","conflicts","hotspots","sanctions","protests","bases","nuclear","irradiators","military","cables","pipelines","outages","datacenters","ais","flights","gpsJamming","natural","weather","economic","waterways","ciiChoropleth"],l=9,c=()=>{const m=Array.from(t.querySelectorAll(".layer-toggle")),y=m.filter(h=>h.classList.contains("active"));if(y.length>l){const h=y.slice(l);for(const g of h){g.classList.remove("active");const $=g.dataset.layer;$&&this.toggleLayer($)}}const d=m.filter(h=>h.classList.contains("active")).length;m.forEach(h=>{h.classList.contains("active")?(h.disabled=!1,h.classList.remove("limit-reached")):(h.disabled=d>=l,h.classList.toggle("limit-reached",d>=l))})};p.forEach(m=>{const y=this.getLayerControlLabel(m),d=`Explain ${y} layer`,h=document.createElement("div");h.className="layer-toggle-row",h.dataset.layer=m;const g=document.createElement("button");g.className=`layer-toggle ${this.state.layers[m]?"active":""}`,g.dataset.layer=m,g.textContent=y,g.addEventListener("click",()=>{this.toggleLayer(m),c()}),h.appendChild(g);const $=document.createElement("button");$.type="button",$.className=`layer-explain-btn ${he(m)?"has-layer-explanation":""}`,$.dataset.layer=m,$.textContent="i",$.title=d,$.setAttribute("aria-label",d),$.addEventListener("click",C=>{C.preventDefault(),C.stopPropagation(),this.showLayerExplanation(m)}),h.appendChild($),t.appendChild(h)});const u=document.createElement("button");return u.className="layer-help-btn",u.textContent="?",u.title=o("components.deckgl.layerGuide"),u.setAttribute("aria-label",o("components.deckgl.layerGuide")),u.addEventListener("click",()=>this.showLayerHelp()),t.appendChild(u),c(),t}clearLayerExplanationOutsideClickHandler(){this.layerExplanationOutsideClickHandler&&(document.removeEventListener("click",this.layerExplanationOutsideClickHandler),this.layerExplanationOutsideClickHandler=null)}showLayerExplanation(t){var i,p,l,c;const n=this.container.querySelector(".layer-explanation-popup");if(this.clearLayerExplanationOutsideClickHandler(),(n==null?void 0:n.dataset.layer)===t){n.remove(),(i=this.container.querySelector(`.layer-explain-btn[data-layer="${t}"]`))==null||i.classList.remove("active");return}n==null||n.remove(),(p=this.container.querySelector(".layer-help-popup"))==null||p.remove(),this.container.querySelectorAll(".layer-explain-btn.active").forEach(u=>u.classList.remove("active"));const e=document.createElement("div");e.className="layer-explanation-popup",e.dataset.layer=t,L(e,S(_e(this.getLayerControlLabel(t),me(t)),"static layer explanation metadata"));const a=()=>{var u;this.clearLayerExplanationOutsideClickHandler(),e.remove(),(u=this.container.querySelector(`.layer-explain-btn[data-layer="${t}"]`))==null||u.classList.remove("active")};(l=e.querySelector(".layer-explanation-close"))==null||l.addEventListener("click",a);const s=e.querySelector(".layer-explanation-content");s==null||s.addEventListener("wheel",u=>u.stopPropagation(),{passive:!1}),s==null||s.addEventListener("touchmove",u=>u.stopPropagation(),{passive:!1}),setTimeout(()=>{const u=m=>{e.contains(m.target)||a()};this.layerExplanationOutsideClickHandler=u,document.addEventListener("click",u)},100),this.container.appendChild(e),(c=this.container.querySelector(`.layer-explain-btn[data-layer="${t}"]`))==null||c.classList.add("active")}showLayerHelp(){var y,d;const t=this.container.querySelector(".layer-help-popup");if(t){t.remove();return}(y=this.container.querySelector(".layer-explanation-popup"))==null||y.remove(),this.clearLayerExplanationOutsideClickHandler(),this.container.querySelectorAll(".layer-explain-btn.active").forEach(h=>h.classList.remove("active"));const n=document.createElement("div");n.className="layer-help-popup";const e=h=>o(`components.deckgl.layers.${h}`).toUpperCase(),a=h=>o(`components.deckgl.layerHelp.labels.${h}`).toUpperCase(),s=(h,g)=>`<div class="layer-help-item"><span>${h}</span> ${o(`components.deckgl.layerHelp.descriptions.${g}`)}</div>`,i=(h,g,$)=>`
      <div class="layer-help-section">
        <div class="layer-help-title">${o(`components.deckgl.layerHelp.sections.${h}`)}</div>
        ${g.join("")}
        ${$?`<div class="layer-help-note">${o(`components.deckgl.layerHelp.notes.${$}`)}</div>`:""}
      </div>
    `,p=`
      <div class="layer-help-header">
        <span>${o("components.deckgl.layerHelp.title")}</span>
        <button class="layer-help-close" aria-label="Close">×</button>
      </div>
    `,l=`
      ${p}
      <div class="layer-help-content">
        ${i("techEcosystem",[s(e("startupHubs"),"techStartupHubs"),s(e("cloudRegions"),"techCloudRegions"),s(e("techHQs"),"techHQs"),s(e("accelerators"),"techAccelerators"),s(e("techEvents"),"techEvents")])}
        ${i("infrastructure",[s(e("underseaCables"),"infraCables"),s(e("aiDataCenters"),"infraDatacenters"),s(e("internetOutages"),"infraOutages"),s(e("cyberThreats"),"techCyberThreats")])}
        ${i("naturalEconomic",[s(e("naturalEvents"),"naturalEventsTech"),s(e("fires"),"techFires"),s(a("countries"),"countriesOverlay")])}
      </div>
    `,c=`
      ${p}
      <div class="layer-help-content">
        ${i("financeCore",[s(e("stockExchanges"),"financeExchanges"),s(e("financialCenters"),"financeCenters"),s(e("centralBanks"),"financeCentralBanks"),s(e("commodityHubs"),"financeCommodityHubs"),s(e("gulfInvestments"),"financeGulfInvestments")])}
        ${i("infrastructureRisk",[s(e("underseaCables"),"financeCables"),s(e("pipelines"),"financePipelines"),s(e("internetOutages"),"financeOutages"),s(e("cyberThreats"),"financeCyberThreats")])}
        ${i("macroContext",[s(e("economicCenters"),"economicCenters"),s(e("strategicWaterways"),"macroWaterways"),s(e("weatherAlerts"),"weatherAlertsMarket"),s(e("naturalEvents"),"naturalEventsMacro")])}
      </div>
    `,u=`
      ${p}
      <div class="layer-help-content">
        ${i("timeFilter",[s(a("timeRecent"),"timeRecent"),s(a("timeExtended"),"timeExtended")],"timeAffects")}
        ${i("geopolitical",[s(e("conflictZones"),"geoConflicts"),s(e("intelHotspots"),"geoHotspots"),s(a("sanctions"),"geoSanctions"),s(e("protests"),"geoProtests"),s(e("ucdpEvents"),"geoUcdpEvents"),s(e("displacementFlows"),"geoDisplacement")])}
        ${i("militaryStrategic",[s(e("militaryBases"),"militaryBases"),s(e("nuclearSites"),"militaryNuclear"),s(e("gammaIrradiators"),"militaryIrradiators"),s(e("militaryActivity"),"militaryActivity"),s(e("spaceports"),"militarySpaceports")])}
        ${i("infrastructure",[s(e("underseaCables"),"infraCablesFull"),s(e("pipelines"),"infraPipelinesFull"),s(e("internetOutages"),"infraOutages"),s(e("aiDataCenters"),"infraDatacentersFull"),s(e("cyberThreats"),"infraCyberThreats")])}
        ${i("transport",[s(e("shipTraffic"),"transportShipping"),s(e("flightDelays"),"transportDelays")])}
        ${i("naturalEconomic",[s(e("naturalEvents"),"naturalEventsFull"),s(e("fires"),"firesFull"),s(e("weatherAlerts"),"weatherAlerts"),s(e("climateAnomalies"),"climateAnomalies"),s(e("economicCenters"),"economicCenters"),s(e("criticalMinerals"),"mineralsFull")])}
        ${i("labels",[s(a("countries"),"countriesOverlay"),s(e("strategicWaterways"),"waterwaysLabels")])}
      </div>
    `;L(n,S(A==="tech"?l:A==="finance"?c:u,"legacy direct innerHTML migration")),(d=n.querySelector(".layer-help-close"))==null||d.addEventListener("click",()=>n.remove());const m=n.querySelector(".layer-help-content");m&&(m.addEventListener("wheel",h=>h.stopPropagation(),{passive:!1}),m.addEventListener("touchmove",h=>h.stopPropagation(),{passive:!1})),setTimeout(()=>{const h=g=>{n.contains(g.target)||(n.remove(),document.removeEventListener("click",h))};document.addEventListener("click",h)},100),this.container.appendChild(n)}syncLayerButtons(){this.container.querySelectorAll(".layer-toggle").forEach(t=>{const n=t.dataset.layer;n&&t.classList.toggle("active",this.state.layers[n])})}createLegend(){const t=document.createElement("div");return t.className="map-legend",A==="tech"?L(t,S(`
        <div class="map-legend-item"><span class="legend-dot" style="background:#8b5cf6"></span>${r(o("components.deckgl.layers.techHQs").toUpperCase())}</div>
        <div class="map-legend-item"><span class="legend-dot" style="background:#06b6d4"></span>${r(o("components.deckgl.layers.startupHubs").toUpperCase())}</div>
        <div class="map-legend-item"><span class="legend-dot" style="background:#f59e0b"></span>${r(o("components.deckgl.layers.cloudRegions").toUpperCase())}</div>
        <div class="map-legend-item"><span class="map-legend-icon" style="color:#a855f7">📅</span>${r(o("components.deckgl.layers.techEvents").toUpperCase())}</div>
        <div class="map-legend-item"><span class="map-legend-icon" style="color:#4ecdc4">💾</span>${r(o("components.deckgl.layers.aiDataCenters").toUpperCase())}</div>
      `,"legacy direct innerHTML migration")):A==="happy"?L(t,S(`
        <div class="map-legend-item"><span class="map-legend-icon earthquake">●</span>${r(o("components.deckgl.layers.naturalEvents").toUpperCase())}</div>
      `,"legacy direct innerHTML migration")):L(t,S(`
        <div class="map-legend-item"><span class="legend-dot high"></span>${r((o("popups.hotspot.levels.high")??"HIGH").toUpperCase())}</div>
        <div class="map-legend-item"><span class="legend-dot elevated"></span>${r((o("popups.hotspot.levels.elevated")??"ELEVATED").toUpperCase())}</div>
        <div class="map-legend-item"><span class="legend-dot low"></span>${r((o("popups.monitoring")??"MONITORING").toUpperCase())}</div>
        <div class="map-legend-item"><span class="map-legend-icon conflict">⚔</span>${r(o("modals.search.types.conflict").toUpperCase())}</div>
        <div class="map-legend-item"><span class="map-legend-icon earthquake">●</span>${r(o("modals.search.types.earthquake").toUpperCase())}</div>
        <div class="map-legend-item"><span class="map-legend-icon apt">⚠</span>APT</div>
      `,"legacy direct innerHTML migration")),t}runHealthCheck(){var a;const t=this.svg.node();if(!t)return;const n=t.querySelector(".map-base"),e=(n==null?void 0:n.querySelectorAll(".country").length)??0;this.countryFeatures&&this.countryFeatures.length>0&&e===0&&(console.warn("[Map] Health check: Base layer missing countries, initiating recovery"),this.baseRendered=!1,n&&((a=this.baseLayerGroup)==null?void 0:a.node())!==n&&console.warn("[Map] Health check: Stale d3 selection detected"),this.render())}setupZoomHandlers(){let t=!1,n={x:0,y:0},e=0,a={x:0,y:0};const s=Ge(),i=d=>d instanceof Element?!!d.closest(".map-controls, .time-slider, .layer-toggles, .map-legend, .layer-help-popup, .map-popup, button, select, input, textarea, a"):!1;this.container.addEventListener("wheel",d=>{if(d.preventDefault(),d.ctrlKey){const h=-d.deltaY*.01;this.state.zoom=Math.max(1,Math.min(10,this.state.zoom+h))}else if(Math.abs(d.deltaX)>Math.abs(d.deltaY)*.5||d.shiftKey){const h=2/this.state.zoom;this.state.pan.x-=d.deltaX*h,this.state.pan.y-=d.deltaY*h}else{const h=d.deltaY>0?-.15:.15;this.state.zoom=Math.max(1,Math.min(10,this.state.zoom+h))}this.applyTransform()},{passive:!1}),this.container.addEventListener("mousedown",d=>{i(d.target)||d.button===0&&(t=!0,n={x:d.clientX,y:d.clientY},Ye(s,{x:d.clientX,y:d.clientY}),this.container.style.cursor="grabbing")}),document.addEventListener("mousemove",d=>{if(!t)return;const h=d.clientX-n.x,g=d.clientY-n.y;je(s,{x:d.clientX,y:d.clientY});const $=1/this.state.zoom;this.state.pan.x+=h*$,this.state.pan.y+=g*$,n={x:d.clientX,y:d.clientY},this.applyTransform()}),document.addEventListener("mouseup",()=>{t&&(t=!1,Xe(s),this.container.style.cursor="grab")});let p={x:0,y:0},l=!1,c=0;const u=8,m=[];let y=0;this.container.addEventListener("touchstart",d=>{if(i(d.target))return;cancelAnimationFrame(y);const h=d.touches[0],g=d.touches[1];d.touches.length===2&&h&&g?(d.preventDefault(),l=!1,e=Math.hypot(g.clientX-h.clientX,g.clientY-h.clientY),a={x:(h.clientX+g.clientX)/2,y:(h.clientY+g.clientY)/2}):d.touches.length===1&&h&&(t=!0,l=!1,p={x:h.clientX,y:h.clientY},n={x:h.clientX,y:h.clientY},m.length=0,m.push({x:h.clientX,y:h.clientY,t:performance.now()}))},{passive:!1}),this.container.addEventListener("touchmove",d=>{const h=d.touches[0],g=d.touches[1];if(d.touches.length===2&&h&&g){d.preventDefault();const $=Math.hypot(g.clientX-h.clientX,g.clientY-h.clientY),C=$/e;this.state.zoom=Math.max(1,Math.min(10,this.state.zoom*C)),e=$;const b={x:(h.clientX+g.clientX)/2,y:(h.clientY+g.clientY)/2},w=1/this.state.zoom;this.state.pan.x+=(b.x-a.x)*w,this.state.pan.y+=(b.y-a.y)*w,a=b,this.applyTransform()}else if(d.touches.length===1&&t&&h){if(!l){const x=h.clientX-p.x,k=h.clientY-p.y;if(Math.hypot(x,k)<u)return;l=!0}d.preventDefault();const $=h.clientX-n.x,C=h.clientY-n.y,b=1/this.state.zoom;this.state.pan.x+=$*b,this.state.pan.y+=C*b,n={x:h.clientX,y:h.clientY};const w=performance.now();m.push({x:h.clientX,y:h.clientY,t:w}),m.length>4&&m.shift(),this.applyTransform()}},{passive:!1}),this.container.addEventListener("touchend",()=>{if(l&&m.length>=2){const d=m[m.length-1],h=m[0],g=(d.t-h.t)/1e3;if(g>0&&g<.3){let $=(d.x-h.x)/g,C=(d.y-h.y)/g;const b=1/this.state.zoom,w=.92,x=()=>{$*=w,C*=w,!(Math.abs($)<10&&Math.abs(C)<10)&&(this.state.pan.x+=$/60*b,this.state.pan.y+=C/60*b,this.applyTransform(),y=requestAnimationFrame(x))};y=requestAnimationFrame(x)}}t=!1,l&&(c=performance.now()),l=!1,e=0,m.length=0}),this.container.addEventListener("click",d=>{if(!this.onCountryClick||performance.now()-c<300||Ve(s))return;const h=this.container.getBoundingClientRect(),g=this.state.zoom,$=this.container.clientWidth,C=this.container.clientHeight,b=$/2*(1-g),w=C/2*(1-g),x=b+this.state.pan.x*g,k=w+this.state.pan.y*g,R=(d.clientX-h.left-x)/g,q=(d.clientY-h.top-k)/g,Z=this.getProjection($,C);if(!Z.invert)return;const K=Z.invert([R,q]);if(!K)return;const[Q,J]=K,O=ae(J,Q);O&&this.onCountryClick({lat:J,lon:Q,code:O.code,name:O.name})}),this.container.style.cursor="grab"}async loadMapData(){try{const t=await fetch(Dt.world);if(this.worldData=await t.json(),this.worldData){const n=ce(this.worldData,this.worldData.objects.countries);this.countryFeatures="features"in n?n.features:[n]}this.baseRendered=!1,this.render(),requestAnimationFrame(()=>requestAnimationFrame(()=>this.render()))}catch(t){console.error("Failed to load map data:",t)}}initClusterRenderer(){const t=this.clusterCanvas.getContext("webgl");t&&(this.clusterGl=t)}clearClusterCanvas(){this.clusterGl&&(this.clusterGl.clearColor(0,0,0,0),this.clusterGl.clear(this.clusterGl.COLOR_BUFFER_BIT))}renderClusterLayer(t){this.wrapper.classList.toggle("cluster-active",!1),this.clearClusterCanvas()}scheduleRender(){this.renderScheduled||(this.renderScheduled=!0,requestAnimationFrame(()=>{this.renderScheduled=!1,this.render()}))}render(){var d,h,g,$,C,b,w;const t=performance.now();if(t-this.lastRenderTime<this.MIN_RENDER_INTERVAL_MS){this.scheduleRender();return}this.lastRenderTime=t;const n=this.container.clientWidth,e=this.container.clientHeight;if(n===0||e===0||!this.svg)return;this.svg.attr("viewBox",`0 0 ${n} ${e}`);const a=this.svg.node();if(!a)return;const s=a.querySelector(".map-base"),i=a.querySelector(".map-dynamic"),p=!s||((d=this.baseLayerGroup)==null?void 0:d.node())!==s,l=!i||((h=this.dynamicLayerGroup)==null?void 0:h.node())!==i;if((p||l)&&(a.querySelectorAll(".map-base, .map-dynamic").forEach(x=>x.remove()),this.baseLayerGroup=this.svg.append("g").attr("class","map-base"),this.dynamicLayerGroup=this.svg.append("g").attr("class","map-dynamic"),this.baseRendered=!1,console.warn("[Map] Layer groups recreated - baseStale:",p,"dynamicStale:",l)),!((g=this.baseLayerGroup)!=null&&g.node())||!(($=this.dynamicLayerGroup)!=null&&$.node())){console.error("[Map] Failed to create layer groups");return}const c=this.baseLayerGroup.node().querySelectorAll(".country").length,u=!this.baseRendered||c===0||n!==this.baseWidth||e!==this.baseHeight;if(u&&c===0&&this.baseRendered&&console.warn("[Map] Base layer missing countries, forcing re-render. countryFeatures:",((C=this.countryFeatures)==null?void 0:C.length)??"null"),u){this.baseWidth=n,this.baseHeight=e;const x=this.baseLayerGroup.node();for(;x.firstChild;)x.removeChild(x.firstChild);this.baseLayerGroup.append("rect").attr("x",-n).attr("y",-e).attr("width",n*3).attr("height",e*3).attr("fill",E("--map-bg")),this.renderGrid(this.baseLayerGroup,n,e);const k=this.getProjection(n,e),R=pe().projection(k);this.renderGraticule(this.baseLayerGroup,R),this.renderCountries(this.baseLayerGroup,R),this.baseRendered=!0}const m=this.dynamicLayerGroup.node();for(;m.firstChild;)m.removeChild(m.firstChild);this.dynamicLayerGroup.append("g").attr("class","overlays-svg");const y=this.getProjection(n,e);if(this.updateCountryFills(),this.state.layers.cables&&this.renderCables(y),this.state.layers.pipelines&&this.renderPipelines(y),this.state.layers.conflicts&&this.renderConflicts(y),this.state.layers.ais&&this.renderAisDensity(y),this.renderClusterLayer(y),this.renderOverlays(y),this.baseRendered&&this.countryFeatures&&this.countryFeatures.length>0&&(((w=(b=this.baseLayerGroup)==null?void 0:b.node())==null?void 0:w.querySelectorAll(".country").length)??0)===0){console.error("[Map] POST-RENDER: Countries failed to render despite baseRendered=true. Forcing full rebuild."),this.baseRendered=!1,requestAnimationFrame(()=>this.render());return}this.applyTransform()}renderGrid(t,n,e,a=0){const s=t.append("g").attr("class","grid");for(let i=0;i<n;i+=20)s.append("line").attr("x1",i).attr("y1",a).attr("x2",i).attr("y2",a+e).attr("stroke",E("--map-grid")).attr("stroke-width",.5);for(let i=a;i<a+e;i+=20)s.append("line").attr("x1",0).attr("y1",i).attr("x2",n).attr("y2",i).attr("stroke",E("--map-grid")).attr("stroke-width",.5)}getProjection(t,n){const p=t/(2*Math.PI),l=n/(128*Math.PI/180),c=Math.min(p,l);return le().scale(c).center([0,8]).translate([t/2,n/2])}renderGraticule(t,n){const e=re();t.append("path").datum(e()).attr("class","graticule").attr("d",n).attr("fill","none").attr("stroke",E("--map-stroke")).attr("stroke-width",.4)}renderCountries(t,n){this.countryFeatures&&t.selectAll(".country").data(this.countryFeatures).enter().append("path").attr("class","country").attr("d",n).attr("fill",E("--map-country")).attr("stroke",E("--map-stroke")).attr("stroke-width",.7)}renderCables(t){if(!this.dynamicLayerGroup)return;const n=this.dynamicLayerGroup.append("g").attr("class","cables");P.forEach(e=>{const a=dt().x(y=>{var d;return((d=t(y))==null?void 0:d[0])??0}).y(y=>{var d;return((d=t(y))==null?void 0:d[1])??0}).curve(ut),s=this.highlightedAssets.cable.has(e.id),i=this.getCableAdvisory(e.id),p=i?`cable-${i.severity}`:"",l=this.healthByCableId[e.id],c=(l==null?void 0:l.status)==="fault"?"cable-health-fault":(l==null?void 0:l.status)==="degraded"?"cable-health-degraded":"",u=s?"asset-highlight asset-highlight-cable":"",m=n.append("path").attr("class",`cable-path ${p} ${c} ${u}`.trim()).attr("d",a(e.points));m.append("title").text(e.name),m.on("click",y=>{y.stopPropagation();const d=this.container.getBoundingClientRect();this.popup.show({type:"cable",data:e,x:y.clientX-d.left,y:y.clientY-d.top})})})}renderPipelines(t){if(!this.dynamicLayerGroup)return;const n=this.dynamicLayerGroup.append("g").attr("class","pipelines");at.forEach(e=>{const a=dt().x(u=>{var m;return((m=t(u))==null?void 0:m[0])??0}).y(u=>{var m;return((m=t(u))==null?void 0:m[1])??0}).curve(ut.tension(.5)),s=It[e.type]||E("--text-dim"),i=.85,p=e.status==="construction"?"4,2":"none",l=this.highlightedAssets.pipeline.has(e.id),c=n.append("path").attr("class",`pipeline-path pipeline-${e.type} pipeline-${e.status}${l?" asset-highlight asset-highlight-pipeline":""}`).attr("d",a(e.points)).attr("fill","none").attr("stroke",s).attr("stroke-width",2.5).attr("stroke-opacity",i).attr("stroke-linecap","round").attr("stroke-linejoin","round");p!=="none"&&c.attr("stroke-dasharray",p),c.append("title").text(`${e.name} (${e.type.toUpperCase()})`),c.on("click",u=>{u.stopPropagation();const m=this.container.getBoundingClientRect();this.popup.show({type:"pipeline",data:e,x:u.clientX-m.left,y:u.clientY-m.top})})})}renderConflicts(t){if(!this.dynamicLayerGroup)return;const n=this.dynamicLayerGroup.append("g").attr("class","conflicts");U.forEach(e=>{const a=e.coords.map(s=>t(s)).filter(s=>s!==null);a.length>0&&n.append("polygon").attr("class","conflict-zone").attr("points",a.map(s=>s.join(",")).join(" "))})}updateCountryFills(){if(!this.baseLayerGroup||!this.countryFeatures)return;const t={severe:"rgba(255, 0, 0, 0.35)",high:"rgba(255, 100, 0, 0.25)",moderate:"rgba(255, 200, 0, 0.2)"},n=E("--map-country"),e=this.state.layers.sanctions;this.baseLayerGroup.selectAll(".country").each(function(a){const s=ct(this),i=a;if(!e){s.attr("fill",n);return}if((i==null?void 0:i.id)!==void 0&&nt[i.id]){const p=nt[i.id];if(p){s.attr("fill",t[p]||n);return}}s.attr("fill",n)})}clusterMarkers(t,n,e,a){const s=[],i=new Set;for(let p=0;p<t.length;p++){if(i.has(p))continue;const l=t[p];if(!Number.isFinite(l.lat)||!Number.isFinite(l.lon))continue;const c=n([l.lon,l.lat]);if(!c||!Number.isFinite(c[0])||!Number.isFinite(c[1]))continue;const u=[l];i.add(p);const m=a==null?void 0:a(l);for(let b=p+1;b<t.length;b++){if(i.has(b))continue;const w=t[b];if(a&&a(w)!==m||!Number.isFinite(w.lat)||!Number.isFinite(w.lon))continue;const x=n([w.lon,w.lat]);if(!x||!Number.isFinite(x[0])||!Number.isFinite(x[1]))continue;const k=c[0]-x[0],R=c[1]-x[1];Math.sqrt(k*k+R*R)<=e&&(u.push(w),i.add(b))}let y=0,d=0;for(const b of u)y+=b.lat,d+=b.lon;const h=y/u.length,g=d/u.length,$=n([g,h]),C=$&&Number.isFinite($[0])&&Number.isFinite($[1])?$:c;s.push({items:u,center:[g,h],pos:C})}return s}renderOverlays(t){if(L(this.overlays,S("","legacy direct innerHTML migration")),this.state.layers.waterways&&this.renderWaterways(t),this.state.layers.ais&&(this.renderAisDisruptions(t),this.renderPorts(t)),this.state.layers.cyberThreats&&A!=="tech"&&this.aptGroups.length>0&&this.renderAPTMarkers(t),this.state.layers.nuclear&&it.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div"),i=this.highlightedAssets.nuclear.has(e.id);s.className=`nuclear-marker ${e.status}${i?" asset-highlight asset-highlight-nuclear":""}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`,s.title=`${e.name} (${e.type})`,s.addEventListener("click",p=>{p.stopPropagation();const l=this.container.getBoundingClientRect();this.popup.show({type:"nuclear",data:e,x:p.clientX-l.left,y:p.clientY-l.top})}),this.overlays.appendChild(s)}),this.state.layers.irradiators&&ot.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className="irradiator-marker",s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`,s.title=`${e.city}, ${e.country}`,s.addEventListener("click",i=>{i.stopPropagation();const p=this.container.getBoundingClientRect();this.popup.show({type:"irradiator",data:e,x:i.clientX-p.left,y:i.clientY-p.top})}),this.overlays.appendChild(s)}),this.state.layers.conflicts&&(U.forEach(e=>{const a=t(e.center);if(!a)return;const s=document.createElement("div");s.className="conflict-click-area",s.style.left=`${a[0]-40}px`,s.style.top=`${a[1]-20}px`,s.style.width="80px",s.style.height="40px",s.style.cursor="pointer",s.addEventListener("click",i=>{i.stopPropagation();const p=this.container.getBoundingClientRect();this.popup.show({type:"conflict",data:e,x:i.clientX-p.left,y:i.clientY-p.top})}),this.overlays.appendChild(s)}),this.renderConflictEventMarkers(t)),this.state.layers.iranAttacks&&this.iranEvents.length>0&&this.iranEvents.forEach(e=>{const a=t([e.longitude,e.latitude]);if(!a||!Number.isFinite(a[0])||!Number.isFinite(a[1]))return;const s=Ft(e.severity),i=Ot(e),p=document.createElement("div");p.className="iran-event-marker",p.style.left=`${a[0]}px`,p.style.top=`${a[1]}px`,p.style.width=`${s}px`,p.style.height=`${s}px`,p.style.background=i,p.title=`${e.title} (${e.category})`,p.addEventListener("click",l=>{l.stopPropagation();const c=this.container.getBoundingClientRect();this.popup.show({type:"iranEvent",data:e,x:l.clientX-c.left,y:l.clientY-c.top})}),this.overlays.appendChild(p)}),this.state.layers.hotspots&&this.hotspots.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className="hotspot",s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`,L(s,S(`
          <div class="hotspot-marker ${r(e.level||"low")}"></div>
        `,"legacy direct innerHTML migration")),s.addEventListener("click",i=>{var c;i.stopPropagation();const p=this.getRelatedNews(e),l=this.container.getBoundingClientRect();this.popup.show({type:"hotspot",data:e,relatedNews:p,x:i.clientX-l.left,y:i.clientY-l.top}),this.popup.loadHotspotGdeltContext(e),(c=this.onHotspotClick)==null||c.call(this,e)}),this.overlays.appendChild(s)}),this.state.layers.bases&&pt.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div"),i=this.highlightedAssets.base.has(e.id);s.className=`base-marker ${e.type}${i?" asset-highlight asset-highlight-base":""}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const p=document.createElement("div");p.className="base-label",p.textContent=e.name,s.appendChild(p),s.addEventListener("click",l=>{l.stopPropagation();const c=this.container.getBoundingClientRect();this.popup.show({type:"base",data:e,x:l.clientX-c.left,y:l.clientY-c.top})}),this.overlays.appendChild(s)}),this.state.layers.natural){console.log("[Map] Rendering earthquakes. Total:",this.earthquakes.length,"Layer enabled:",this.state.layers.natural);const e=this.state.timeRange==="all"?this.earthquakes:this.earthquakes.filter(s=>s.occurredAt>=Date.now()-this.getTimeRangeMs());console.log("[Map] After time filter:",e.length,"earthquakes. TimeRange:",this.state.timeRange);let a=0;e.forEach(s=>{var u,m,y,d;const i=t([((u=s.location)==null?void 0:u.longitude)??0,((m=s.location)==null?void 0:m.latitude)??0]);if(!i){console.log("[Map] Earthquake position null for:",s.place,(y=s.location)==null?void 0:y.longitude,(d=s.location)==null?void 0:d.latitude);return}a++;const p=Math.max(8,s.magnitude*3),l=document.createElement("div");l.className="earthquake-marker",l.style.left=`${i[0]}px`,l.style.top=`${i[1]}px`,l.style.width=`${p}px`,l.style.height=`${p}px`,l.title=`M${s.magnitude.toFixed(1)} - ${s.place}`;const c=document.createElement("div");c.className="earthquake-label",c.textContent=`M${s.magnitude.toFixed(1)}`,l.appendChild(c),l.addEventListener("click",h=>{h.stopPropagation();const g=this.container.getBoundingClientRect();this.popup.show({type:"earthquake",data:s,x:h.clientX-g.left,y:h.clientY-g.top})}),this.overlays.appendChild(l)}),console.log("[Map] Actually rendered",a,"earthquake markers")}this.state.layers.economic&&zt.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className=`economic-marker ${e.type}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const i=document.createElement("div");i.className="economic-icon",i.textContent=e.type==="exchange"?"📈":e.type==="central-bank"?"🏛":"💰",s.appendChild(i),s.title=e.name,s.addEventListener("click",p=>{p.stopPropagation();const l=this.container.getBoundingClientRect();this.popup.show({type:"economic",data:e,x:p.clientX-l.left,y:p.clientY-l.top})}),this.overlays.appendChild(s)}),this.state.layers.weather&&this.weatherAlerts.forEach(e=>{if(!e.centroid)return;const a=t(e.centroid);if(!a)return;const s=document.createElement("div");s.className=`weather-marker ${e.severity.toLowerCase()}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`,s.style.borderColor=Ut(e.severity);const i=document.createElement("div");i.className="weather-icon",i.textContent="⚠",s.appendChild(i),s.addEventListener("click",p=>{p.stopPropagation();const l=this.container.getBoundingClientRect();this.popup.show({type:"weather",data:e,x:p.clientX-l.left,y:p.clientY-l.top})}),this.overlays.appendChild(s)}),this.state.layers.radiationWatch&&this.radiationObservations.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div"),i=e.severity==="spike"?"#ff3030":"#ffaa00";s.className=`radiation-watch-marker radiation-watch-marker-${e.severity}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`,s.style.width="14px",s.style.height="14px",s.style.borderRadius="50%",s.style.background=i,s.style.border="2px solid rgba(255,255,255,0.75)",s.style.boxShadow=`0 0 10px ${i}88`,s.title=`${e.location}: ${e.value.toFixed(1)} ${e.unit}`,s.addEventListener("click",p=>{p.stopPropagation();const l=this.container.getBoundingClientRect();this.popup.show({type:"radiation",data:e,x:p.clientX-l.left,y:p.clientY-l.top})}),this.overlays.appendChild(s)}),this.state.layers.outages&&this.outages.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className=`outage-marker ${e.severity}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const i=document.createElement("div");i.className="outage-icon",i.textContent="📡",s.appendChild(i);const p=document.createElement("div");p.className="outage-label",p.textContent=e.country,s.appendChild(p),s.addEventListener("click",l=>{l.stopPropagation();const c=this.container.getBoundingClientRect();this.popup.show({type:"outage",data:e,x:l.clientX-c.left,y:l.clientY-c.top})}),this.overlays.appendChild(s)}),this.state.layers.cables&&(this.cableAdvisories.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className=`cable-advisory-marker ${e.severity}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const i=document.createElement("div");i.className="cable-advisory-icon",i.textContent=e.severity==="fault"?"⚡":"⚠",s.appendChild(i);const p=document.createElement("div");p.className="cable-advisory-label",p.textContent=this.getCableName(e.cableId),s.appendChild(p),s.addEventListener("click",l=>{l.stopPropagation();const c=this.container.getBoundingClientRect();this.popup.show({type:"cable-advisory",data:e,x:l.clientX-c.left,y:l.clientY-c.top})}),this.overlays.appendChild(s)}),this.repairShips.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className=`repair-ship-marker ${e.status}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const i=document.createElement("div");i.className="repair-ship-icon",i.textContent="🚢",s.appendChild(i);const p=document.createElement("div");p.className="repair-ship-label",p.textContent=e.name,s.appendChild(p),s.addEventListener("click",l=>{l.stopPropagation();const c=this.container.getBoundingClientRect();this.popup.show({type:"repair-ship",data:e,x:l.clientX-c.left,y:l.clientY-c.top})}),this.overlays.appendChild(s)}));const n=1e4;if(this.state.layers.datacenters&&lt.filter(e=>(e.chipCount||0)>=n).forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div"),i=this.highlightedAssets.datacenter.has(e.id);s.className=`datacenter-marker ${e.status}${i?" asset-highlight asset-highlight-datacenter":""}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const p=document.createElement("div");p.className="datacenter-icon",p.textContent="🖥️",s.appendChild(p),s.addEventListener("click",l=>{l.stopPropagation();const c=this.container.getBoundingClientRect();this.popup.show({type:"datacenter",data:e,x:l.clientX-c.left,y:l.clientY-c.top})}),this.overlays.appendChild(s)}),this.state.layers.spaceports&&_t.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className=`spaceport-marker ${e.status}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const i=document.createElement("div");i.className="spaceport-icon",i.textContent="🚀",s.appendChild(i);const p=document.createElement("div");p.className="spaceport-label",p.textContent=e.name,s.appendChild(p),s.addEventListener("click",l=>{l.stopPropagation();const c=this.container.getBoundingClientRect();this.popup.show({type:"spaceport",data:e,x:l.clientX-c.left,y:l.clientY-c.top})}),this.overlays.appendChild(s)}),this.state.layers.minerals&&Bt.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className=`mineral-marker ${e.status}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const i=document.createElement("div");i.className="mineral-icon",i.textContent=e.mineral==="Lithium"?"🔋":e.mineral==="Rare Earths"?"🧲":"💎",s.appendChild(i);const p=document.createElement("div");p.className="mineral-label",p.textContent=`${e.mineral} - ${e.name}`,s.appendChild(p),s.addEventListener("click",l=>{l.stopPropagation();const c=this.container.getBoundingClientRect();this.popup.show({type:"mineral",data:e,x:l.clientX-c.left,y:l.clientY-c.top})}),this.overlays.appendChild(s)}),this.state.layers.startupHubs&&Gt.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className=`startup-hub-marker ${e.tier}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const i=document.createElement("div");if(i.className="startup-hub-icon",i.textContent=e.tier==="mega"?"🦄":e.tier==="major"?"🚀":"💡",s.appendChild(i),this.state.zoom>=2||e.tier==="mega"){const p=document.createElement("div");p.className="startup-hub-label",p.textContent=e.name,s.appendChild(p)}s.addEventListener("click",p=>{p.stopPropagation();const l=this.container.getBoundingClientRect();this.popup.show({type:"startupHub",data:e,x:p.clientX-l.left,y:p.clientY-l.top})}),this.overlays.appendChild(s)}),this.state.layers.cloudRegions&&Yt.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className=`cloud-region-marker ${e.provider}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const i=document.createElement("div");i.className="cloud-region-icon";const p={aws:"🟠",gcp:"🔵",azure:"🟣",cloudflare:"🟡"};if(i.textContent=p[e.provider]||"☁️",s.appendChild(i),this.state.zoom>=3){const l=document.createElement("div");l.className="cloud-region-label",l.textContent=e.provider.toUpperCase(),s.appendChild(l)}s.addEventListener("click",l=>{l.stopPropagation();const c=this.container.getBoundingClientRect();this.popup.show({type:"cloudRegion",data:e,x:l.clientX-c.left,y:l.clientY-c.top})}),this.overlays.appendChild(s)}),this.state.layers.techHQs){const e=this.state.zoom>=4?15:this.state.zoom>=3?25:40;this.clusterMarkers(Wt,t,e,s=>s.city).forEach(s=>{if(s.items.length===0)return;const i=document.createElement("div"),p=s.items.length>1,l=s.items[0];i.className=`tech-hq-marker ${l.type} ${p?"cluster":""}`,i.style.left=`${s.pos[0]}px`,i.style.top=`${s.pos[1]}px`;const c=document.createElement("div");if(c.className="tech-hq-icon",p){const u=s.items.filter(d=>d.type==="unicorn").length,m=s.items.filter(d=>d.type==="faang").length;c.textContent=m>0?"🏛️":u>0?"🦄":"🏢";const y=document.createElement("div");y.className="cluster-badge",y.textContent=String(s.items.length),i.appendChild(y),i.title=s.items.map(d=>d.company).join(", ")}else c.textContent=l.type==="faang"?"🏛️":l.type==="unicorn"?"🦄":"🏢";if(i.appendChild(c),!p&&(this.state.zoom>=3||l.type==="faang")){const u=document.createElement("div");u.className="tech-hq-label",u.textContent=l.company,i.appendChild(u)}i.addEventListener("click",u=>{u.stopPropagation();const m=this.container.getBoundingClientRect();p?this.popup.show({type:"techHQCluster",data:{items:s.items,city:l.city,country:l.country},x:u.clientX-m.left,y:u.clientY-m.top}):this.popup.show({type:"techHQ",data:l,x:u.clientX-m.left,y:u.clientY-m.top})}),this.overlays.appendChild(i)})}if(this.state.layers.accelerators&&jt.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className=`accelerator-marker ${e.type}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const i=document.createElement("div");if(i.className="accelerator-icon",i.textContent=e.type==="accelerator"?"🎯":e.type==="incubator"?"🔬":"🎨",s.appendChild(i),this.state.zoom>=3){const p=document.createElement("div");p.className="accelerator-label",p.textContent=e.name,s.appendChild(p)}s.addEventListener("click",p=>{p.stopPropagation();const l=this.container.getBoundingClientRect();this.popup.show({type:"accelerator",data:e,x:p.clientX-l.left,y:p.clientY-l.top})}),this.overlays.appendChild(s)}),this.state.layers.techEvents&&this.techEvents.length>0){const e=this.container.clientWidth,a=this.container.clientHeight,s=this.techEvents.map(l=>({...l,lon:l.lng})).filter(l=>{const c=t([l.lon,l.lat]);return c&&c[0]>=0&&c[0]<=e&&c[1]>=0&&c[1]<=a}),i=this.state.zoom>=4?15:this.state.zoom>=3?25:40;this.clusterMarkers(s,t,i,l=>l.location).forEach(l=>{if(l.items.length===0)return;const c=document.createElement("div"),u=l.items.length>1,m=l.items[0],y=l.items.some(d=>d.daysUntil<=14);if(c.className=`tech-event-marker ${y?"upcoming-soon":""} ${u?"cluster":""}`,c.style.left=`${l.pos[0]}px`,c.style.top=`${l.pos[1]}px`,u){const d=document.createElement("div");d.className="cluster-badge",d.textContent=String(l.items.length),c.appendChild(d),c.title=l.items.map(h=>h.title).join(", ")}c.addEventListener("click",d=>{d.stopPropagation();const h=this.container.getBoundingClientRect();u?this.popup.show({type:"techEventCluster",data:{items:l.items,location:m.location,country:m.country},x:d.clientX-h.left,y:d.clientY-h.top}):this.popup.show({type:"techEvent",data:m,x:d.clientX-h.left,y:d.clientY-h.top})}),this.overlays.appendChild(c)})}if(this.state.layers.stockExchanges&&Xt.forEach(e=>{const a=t([e.lon,e.lat]);if(!a||!Number.isFinite(a[0])||!Number.isFinite(a[1]))return;const s=e.tier==="mega"?"🏛️":e.tier==="major"?"📊":"📈",i=document.createElement("div");if(i.className=`map-marker exchange-marker tier-${e.tier}`,i.style.left=`${a[0]}px`,i.style.top=`${a[1]}px`,i.style.zIndex=e.tier==="mega"?"50":"40",i.textContent=s,i.title=`${e.shortName} (${e.city})`,this.state.zoom>=2&&e.tier==="mega"||this.state.zoom>=3){const p=document.createElement("span");p.className="marker-label",p.textContent=e.shortName,i.appendChild(p)}i.addEventListener("click",p=>{p.stopPropagation();const l=this.container.getBoundingClientRect();this.popup.show({type:"stockExchange",data:e,x:p.clientX-l.left,y:p.clientY-l.top})}),this.overlays.appendChild(i)}),this.state.layers.financialCenters&&Vt.forEach(e=>{const a=t([e.lon,e.lat]);if(!a||!Number.isFinite(a[0])||!Number.isFinite(a[1]))return;const s=e.type==="global"?"💰":e.type==="regional"?"🏦":"🏝️",i=document.createElement("div");if(i.className=`map-marker financial-center-marker type-${e.type}`,i.style.left=`${a[0]}px`,i.style.top=`${a[1]}px`,i.style.zIndex=e.type==="global"?"45":"35",i.textContent=s,i.title=`${e.name} Financial Center`,this.state.zoom>=2&&e.type==="global"||this.state.zoom>=3){const p=document.createElement("span");p.className="marker-label",p.textContent=e.name,i.appendChild(p)}i.addEventListener("click",p=>{p.stopPropagation();const l=this.container.getBoundingClientRect();this.popup.show({type:"financialCenter",data:e,x:p.clientX-l.left,y:p.clientY-l.top})}),this.overlays.appendChild(i)}),this.state.layers.centralBanks&&qt.forEach(e=>{const a=t([e.lon,e.lat]);if(!a||!Number.isFinite(a[0])||!Number.isFinite(a[1]))return;const s=e.type==="supranational"?"🌐":e.type==="major"?"🏛️":"🏦",i=document.createElement("div");if(i.className=`map-marker central-bank-marker type-${e.type}`,i.style.left=`${a[0]}px`,i.style.top=`${a[1]}px`,i.style.zIndex=e.type==="supranational"?"48":e.type==="major"?"42":"38",i.textContent=s,i.title=`${e.shortName} - ${e.name}`,this.state.zoom>=2&&(e.type==="major"||e.type==="supranational")||this.state.zoom>=3){const p=document.createElement("span");p.className="marker-label",p.textContent=e.shortName,i.appendChild(p)}i.addEventListener("click",p=>{p.stopPropagation();const l=this.container.getBoundingClientRect();this.popup.show({type:"centralBank",data:e,x:p.clientX-l.left,y:p.clientY-l.top})}),this.overlays.appendChild(i)}),this.state.layers.commodityHubs&&Zt.forEach(e=>{const a=t([e.lon,e.lat]);if(!a||!Number.isFinite(a[0])||!Number.isFinite(a[1]))return;const s=e.type==="exchange"?"📦":e.type==="port"?"🚢":"⛽",i=document.createElement("div");if(i.className=`map-marker commodity-hub-marker type-${e.type}`,i.style.left=`${a[0]}px`,i.style.top=`${a[1]}px`,i.style.zIndex="38",i.textContent=s,i.title=`${e.name} (${e.city})`,this.state.zoom>=3){const p=document.createElement("span");p.className="marker-label",p.textContent=e.name,i.appendChild(p)}i.addEventListener("click",p=>{p.stopPropagation();const l=this.container.getBoundingClientRect();this.popup.show({type:"commodityHub",data:e,x:p.clientX-l.left,y:p.clientY-l.top})}),this.overlays.appendChild(i)}),A==="tech"&&this.techActivities.length>0&&this.techActivities.forEach(e=>{const a=t([e.lon,e.lat]);if(!a||e.newsCount===0)return;const s=document.createElement("div");if(s.className=`tech-activity-marker ${e.activityLevel}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`,s.style.zIndex=e.activityLevel==="high"?"60":e.activityLevel==="elevated"?"50":"40",s.title=`${e.city}: ${e.newsCount} stories`,s.addEventListener("click",i=>{var l;i.stopPropagation(),(l=this.onTechHubClick)==null||l.call(this,e);const p=this.container.getBoundingClientRect();this.popup.show({type:"techActivity",data:e,x:i.clientX-p.left,y:i.clientY-p.top})}),this.overlays.appendChild(s),(e.activityLevel==="high"||e.activityLevel==="elevated"&&this.state.zoom>=2)&&this.state.zoom>=1.5){const i=document.createElement("div");i.className="tech-activity-label",i.textContent=e.city,i.style.left=`${a[0]}px`,i.style.top=`${a[1]+14}px`,this.overlays.appendChild(i)}}),A==="full"&&this.geoActivities.length>0&&this.geoActivities.forEach(e=>{const a=t([e.lon,e.lat]);if(!a||e.newsCount===0)return;const s=document.createElement("div");s.className=`geo-activity-marker ${e.activityLevel}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`,s.style.zIndex=e.activityLevel==="high"?"60":e.activityLevel==="elevated"?"50":"40",s.title=`${e.name}: ${e.newsCount} stories`,s.addEventListener("click",i=>{var l;i.stopPropagation(),(l=this.onGeoHubClick)==null||l.call(this,e);const p=this.container.getBoundingClientRect();this.popup.show({type:"geoActivity",data:e,x:i.clientX-p.left,y:i.clientY-p.top})}),this.overlays.appendChild(s)}),this.state.layers.protests){const e=this.protests.filter(i=>i.eventType==="riot"||i.severity==="high"),a=this.state.zoom>=4?12:this.state.zoom>=3?20:35;this.clusterMarkers(e,t,a,i=>i.country).forEach(i=>{if(i.items.length===0)return;const p=document.createElement("div"),l=i.items.length>1,c=i.items[0],u=i.items.some(d=>d.eventType==="riot"),m=i.items.some(d=>d.severity==="high");p.className=`protest-marker ${m?"high":c.severity} ${u?"riot":c.eventType} ${l?"cluster":""}`,p.style.left=`${i.pos[0]}px`,p.style.top=`${i.pos[1]}px`;const y=document.createElement("div");if(y.className="protest-icon",y.textContent=u?"🔥":c.eventType==="strike"?"✊":"📢",p.appendChild(y),l){const d=document.createElement("div");d.className="cluster-badge",d.textContent=String(i.items.length),p.appendChild(d),p.title=`${c.country}: ${i.items.length} ${o("popups.events")}`}else p.title=`${c.city||c.country} - ${c.eventType} (${c.severity})`,c.validated&&p.classList.add("validated");p.addEventListener("click",d=>{d.stopPropagation();const h=this.container.getBoundingClientRect();l?this.popup.show({type:"protestCluster",data:{items:i.items,country:c.country},x:d.clientX-h.left,y:d.clientY-h.top}):this.popup.show({type:"protest",data:c,x:d.clientX-h.left,y:d.clientY-h.top})}),this.overlays.appendChild(p)})}if(this.state.layers.flights&&this.flightDelays.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className=`flight-delay-marker ${e.severity}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const i=document.createElement("div");if(i.className="flight-delay-icon",i.textContent=e.severity==="unknown"?"❔":e.delayType==="ground_stop"?"🛑":e.severity==="severe"?"✈️":"🛫",s.appendChild(i),this.state.zoom>=3){const p=document.createElement("div");p.className="flight-delay-label",p.textContent=`${e.iata} ${e.avgDelayMinutes>0?`+${e.avgDelayMinutes}m`:""}`,s.appendChild(p)}s.addEventListener("click",p=>{p.stopPropagation();const l=this.container.getBoundingClientRect();this.popup.show({type:"flight",data:e,x:p.clientX-l.left,y:p.clientY-l.top})}),this.overlays.appendChild(s)}),this.state.layers.flights&&this.aircraftPositions.slice(0,200).forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className="aircraft-marker",s.style.position="absolute",s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`,s.style.transform=`rotate(${e.trackDeg}deg)`,s.style.fontSize="12px",s.style.color=e.onGround?"#888":"#a064ff",s.style.lineHeight="1",s.style.pointerEvents="auto",s.style.cursor="pointer",s.textContent="▲",s.addEventListener("click",i=>{i.stopPropagation();const p=this.container.getBoundingClientRect();this.popup.show({type:"aircraft",data:e,x:i.clientX-p.left,y:i.clientY-p.top})}),this.overlays.appendChild(s)}),this.state.layers.military&&(this.militaryFlights.forEach(e=>{var p;const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className=`military-flight-marker ${e.operator} ${e.aircraftType}${e.isInteresting?" interesting":""}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const i=document.createElement("div");if(i.className=`military-flight-icon ${e.aircraftType}`,i.style.transform=`rotate(${e.heading}deg)`,s.appendChild(i),this.state.zoom>=3){const l=document.createElement("div");l.className="military-flight-label",l.textContent=e.callsign,s.appendChild(l)}if(e.altitude>0){const l=document.createElement("div");l.className="military-flight-altitude",l.textContent=`FL${Math.round(e.altitude/100)}`,s.appendChild(l)}if(s.addEventListener("click",l=>{l.stopPropagation();const c=this.container.getBoundingClientRect();this.popup.show({type:"militaryFlight",data:e,x:l.clientX-c.left,y:l.clientY-c.top})}),this.overlays.appendChild(s),e.track&&e.track.length>1&&this.state.zoom>=2){const l=document.createElementNS("http://www.w3.org/2000/svg","polyline"),c=e.track.map(u=>{const m=t([u[1],u[0]]);return m?`${m[0]},${m[1]}`:null}).filter(Boolean).join(" ");c&&(l.setAttribute("points",c),l.setAttribute("class",`military-flight-track ${e.operator}`),l.setAttribute("fill","none"),l.setAttribute("stroke-width","1.5"),l.setAttribute("stroke-dasharray","4,2"),(p=this.dynamicLayerGroup)==null||p.select(".overlays-svg").append(()=>l))}}),this.militaryFlightClusters.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className=`military-cluster-marker flight-cluster ${e.activityType||"unknown"}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const i=document.createElement("div");i.className="cluster-count",i.textContent=String(e.flightCount),s.appendChild(i);const p=document.createElement("div");p.className="cluster-label",p.textContent=e.name,s.appendChild(p),s.addEventListener("click",l=>{l.stopPropagation();const c=this.container.getBoundingClientRect();this.popup.show({type:"militaryFlightCluster",data:e,x:l.clientX-c.left,y:l.clientY-c.top})}),this.overlays.appendChild(s)}),this.militaryVessels.forEach(e=>{var p;const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className=`military-vessel-marker ${e.operator} ${e.vesselType}${e.isDark?" dark-vessel":""}${e.isInteresting?" interesting":""}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const i=document.createElement("div");if(i.className=`military-vessel-icon ${e.vesselType}`,i.style.transform=`rotate(${e.heading}deg)`,s.appendChild(i),e.isDark){const l=document.createElement("div");l.className="dark-vessel-indicator",l.textContent="⚠️",l.title="AIS Signal Lost",s.appendChild(l)}if(this.state.zoom>=3){const l=document.createElement("div");l.className="military-vessel-label",l.textContent=e.name,s.appendChild(l)}if(s.addEventListener("click",l=>{l.stopPropagation();const c=this.container.getBoundingClientRect();this.popup.show({type:"militaryVessel",data:e,x:l.clientX-c.left,y:l.clientY-c.top})}),this.overlays.appendChild(s),e.track&&e.track.length>1&&this.state.zoom>=2){const l=document.createElementNS("http://www.w3.org/2000/svg","polyline"),c=e.track.map(u=>{const m=t([u[1],u[0]]);return m?`${m[0]},${m[1]}`:null}).filter(Boolean).join(" ");c&&(l.setAttribute("points",c),l.setAttribute("class",`military-vessel-track ${e.operator}`),l.setAttribute("fill","none"),l.setAttribute("stroke-width","2"),(p=this.dynamicLayerGroup)==null||p.select(".overlays-svg").append(()=>l))}}),this.militaryVesselClusters.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className=`military-cluster-marker vessel-cluster ${e.activityType||"unknown"}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const i=document.createElement("div");i.className="cluster-count",i.textContent=String(e.vesselCount),s.appendChild(i);const p=document.createElement("div");p.className="cluster-label",p.textContent=e.name,s.appendChild(p),s.addEventListener("click",l=>{l.stopPropagation();const c=this.container.getBoundingClientRect();this.popup.show({type:"militaryVesselCluster",data:e,x:l.clientX-c.left,y:l.clientY-c.top})}),this.overlays.appendChild(s)})),this.state.layers.natural&&this.naturalEvents.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=document.createElement("div");s.className=`nat-event-marker ${e.category}`,s.style.left=`${a[0]}px`,s.style.top=`${a[1]}px`;const i=document.createElement("div");if(i.className="nat-event-icon",i.textContent=ft(e.category),s.appendChild(i),this.state.zoom>=2){const p=document.createElement("div");p.className="nat-event-label",p.textContent=e.title.length>25?e.title.slice(0,25)+"…":e.title,s.appendChild(p)}if(e.magnitude){const p=document.createElement("div");p.className="nat-event-magnitude",p.textContent=`${e.magnitude}${e.magnitudeUnit?` ${e.magnitudeUnit}`:""}`,s.appendChild(p)}s.addEventListener("click",p=>{p.stopPropagation();const l=this.container.getBoundingClientRect();this.popup.show({type:"natEvent",data:e,x:p.clientX-l.left,y:p.clientY-l.top})}),this.overlays.appendChild(s)}),this.state.layers.fires&&this.firmsFireData.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=e.brightness>400?E("--semantic-critical"):e.brightness>350?E("--semantic-high"):E("--semantic-elevated"),i=Math.max(4,Math.min(10,(e.frp||1)*.5)),p=document.createElement("div");p.className="fire-dot",p.style.left=`${a[0]}px`,p.style.top=`${a[1]}px`,p.style.width=`${i}px`,p.style.height=`${i}px`,p.style.backgroundColor=s,p.title=`${e.region} — ${Math.round(e.brightness)}K, ${e.frp}MW`,this.overlays.appendChild(p)}),this.state.layers.webcams&&this.webcamData.length>0&&this.state.zoom>=2){const e={traffic:"#ffd700",city:"#00d4ff",landscape:"#45b7d1",nature:"#96ceb4",beach:"#f4a460",water:"#4169e1",other:"#888888"};this.webcamData.forEach(a=>{const s=t([a.lng,a.lat]);if(!s||!Number.isFinite(s[0])||!Number.isFinite(s[1]))return;const i="count"in a,l=(i?Math.min(4+Math.sqrt(a.count),12):3)*2,c=i?"#00d4ff":e[a.category]??"#888888",u=document.createElement("div");u.className="webcam-dot",u.style.left=`${s[0]}px`,u.style.top=`${s[1]}px`,u.style.width=`${l}px`,u.style.height=`${l}px`,u.style.position="absolute",u.style.borderRadius="50%",u.style.backgroundColor=c,u.style.opacity="0.75",u.style.cursor="pointer",u.title=i?`${a.count} webcams`:a.title||"Webcam",u.addEventListener("click",m=>{m.stopPropagation(),i?this.showWebcamClusterPopup(a,m.clientX,m.clientY):this.showWebcamTooltip(a,m.clientX,m.clientY)}),this.overlays.appendChild(u)})}}renderConflictEventMarkers(t){const n=this.state.timeRange==="all"?this.conflictEvents:this.conflictEvents.filter(a=>a.occurredAt>=Date.now()-this.getTimeRangeMs());this.clusterMarkers(n.map(a=>{var s,i;return{event:a,lat:((s=a.location)==null?void 0:s.latitude)??Number.NaN,lon:((i=a.location)==null?void 0:i.longitude)??Number.NaN}}).filter(a=>Number.isFinite(a.lat)&&Number.isFinite(a.lon)),t,this.state.zoom>=4?10:this.state.zoom>=3?16:28,a=>a.event.country).forEach(a=>{if(a.items.length===0)return;const s=a.items[0].event,i=a.items.reduce((c,u)=>c+(u.event.fatalities||0),0),p=a.items.length>1,l=document.createElement("div");if(l.className=`conflict-event-marker${i>0?" fatal":""}${p?" cluster":""}`,l.style.left=`${a.pos[0]}px`,l.style.top=`${a.pos[1]}px`,l.title=p?`${s.country}: ${a.items.length} conflict events${i>0?`, ${i} fatalities`:""}`:`${s.country}${s.admin1?`, ${s.admin1}`:""}: ${s.eventType}${s.fatalities>0?`, ${s.fatalities} fatalities`:""}`,p){const c=document.createElement("span");c.className="conflict-event-count",c.textContent=String(a.items.length),l.appendChild(c)}this.overlays.appendChild(l)})}makeWebcamTooltipShell(){var e;(e=this.container.querySelector(".webcam-tooltip"))==null||e.remove();const t=document.createElement("div");t.className="webcam-tooltip",t.style.cssText=["position:absolute","background:rgba(10,12,16,0.95)","border:1px solid rgba(60,120,60,0.6)","padding:8px 12px","border-radius:3px","font-size:11px","font-family:var(--font-mono)","color:#d4d4d4","max-width:240px","z-index:1000","pointer-events:auto","line-height:1.5"].join(";");const n=document.createElement("button");return n.style.cssText="position:absolute;top:4px;right:4px;background:none;border:none;color:#888;cursor:pointer;font-size:14px;line-height:1;padding:2px 4px;",n.setAttribute("aria-label","Close"),n.textContent="×",n.addEventListener("click",()=>t.remove()),t.appendChild(n),{tooltip:t,closeBtn:n}}placeWebcamTooltip(t,n,e){const a=this.container.getBoundingClientRect();this.container.appendChild(t);const s=Math.min(n-a.left+10,a.width-260),i=Math.max(e-a.top-20,4);t.style.left=`${s}px`,t.style.top=`${i}px`;let p=setTimeout(()=>t.remove(),8e3);t.addEventListener("mouseenter",()=>{p&&(clearTimeout(p),p=null)}),t.addEventListener("mouseleave",()=>{p=setTimeout(()=>t.remove(),2e3)})}showWebcamTooltip(t,n,e){const{tooltip:a}=this.makeWebcamTooltipShell(),s=document.createElement("div");s.style.cssText="font-weight:bold;color:#00d4ff;padding-right:18px;",s.textContent=`📷 ${t.title||t.category||"Webcam"}`,a.appendChild(s);const i=document.createElement("div");i.style.cssText="opacity:0.7;font-size:10px;margin-top:2px;",i.textContent=[t.country,t.category].filter(Boolean).join(" · "),i.textContent&&a.appendChild(i);const p=document.createElement("div");p.style.marginTop="6px";const l=document.createElement("span");if(l.style.cssText="opacity:0.5;font-size:10px;",l.textContent="Loading preview...",p.appendChild(l),a.appendChild(p),t.webcamId){const c=document.createElement("a");c.href=`https://www.windy.com/webcams/${t.webcamId}`,c.target="_blank",c.rel="noopener",c.style.cssText="display:block;margin-top:4px;color:#00d4ff;font-size:11px;text-decoration:none;",c.textContent="Open on Windy ↗",a.appendChild(c)}this.placeWebcamTooltip(a,n,e),t.webcamId?_(async()=>{const{fetchWebcamImage:c}=await import("./index-B98aw5CH.js");return{fetchWebcamImage:c}},__vite__mapDeps([0,1,2,3])).then(({fetchWebcamImage:c})=>{c(t.webcamId).then(u=>{if(!a.isConnected)return;if(p.replaceChildren(),u.thumbnailUrl){const d=document.createElement("img");d.src=u.thumbnailUrl,d.style.cssText="width:200px;border-radius:4px;margin-bottom:4px;",d.loading="lazy",p.appendChild(d)}else{const d=document.createElement("span");d.style.cssText="opacity:0.5;font-size:10px;",d.textContent="Preview unavailable",p.appendChild(d)}const m=document.createElement("button");m.className="webcam-pin-btn";const y=t.webcamId;Kt(y)?(m.classList.add("webcam-pin-btn--pinned"),m.textContent="📌 Pinned",m.disabled=!0):(m.textContent="📌 Pin",m.addEventListener("click",d=>{d.stopPropagation(),Qt({webcamId:y,title:t.title||(u==null?void 0:u.title)||"",lat:t.lat,lng:t.lng,category:t.category||"other",country:t.country||"",playerUrl:(u==null?void 0:u.playerUrl)||""}),m.classList.add("webcam-pin-btn--pinned"),m.textContent="📌 Pinned",m.disabled=!0})),a.appendChild(m)})}):p.remove()}showWebcamClusterPopup(t,n,e){const{tooltip:a}=this.makeWebcamTooltipShell(),s=document.createElement("div");s.style.cssText="font-weight:bold;color:#00d4ff;padding-right:18px;",s.textContent=`📷 ${t.count} webcams — loading...`,a.appendChild(s),this.placeWebcamTooltip(a,n,e);const i=this.state.zoom??3;_(async()=>{const{fetchWebcams:p,getClusterCellSize:l}=await import("./index-B98aw5CH.js");return{fetchWebcams:p,getClusterCellSize:l}},__vite__mapDeps([0,1,2,3])).then(({fetchWebcams:p,getClusterCellSize:l})=>{const c=Math.max(.5,l(i));p(10,{w:t.lng-c,s:t.lat-c,e:t.lng+c,n:t.lat+c}).then(u=>{if(!a.isConnected)return;const m=u.webcams.slice(0,20);s.textContent=`📷 ${m.length} webcams`;const y=document.createElement("div");y.style.cssText="max-height:200px;overflow-y:auto;margin-top:6px;";for(const d of m){const h=document.createElement("div");h.style.cssText="padding:3px 2px;cursor:pointer;color:#aaa;border-bottom:1px solid rgba(255,255,255,0.08);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";const g=document.createElement("span");if(g.textContent=d.title||d.category||"Webcam",h.appendChild(g),d.country){const $=document.createElement("span");$.style.cssText="float:right;opacity:0.4;font-size:10px;margin-left:6px;",$.textContent=d.country,h.appendChild($)}h.addEventListener("mouseenter",()=>{h.style.color="#00d4ff"}),h.addEventListener("mouseleave",()=>{h.style.color="#aaa"}),h.addEventListener("click",$=>{$.stopPropagation(),this.showWebcamTooltip(d,$.clientX,$.clientY)}),y.appendChild(h)}a.appendChild(y)}).catch(()=>{a.isConnected&&(s.textContent="📷 Failed to load webcam list")})})}renderWaterways(t){Jt.forEach(n=>{const e=t([n.lon,n.lat]);if(!e)return;const a=document.createElement("div");a.className="waterway-marker",a.style.left=`${e[0]}px`,a.style.top=`${e[1]}px`,a.title=n.name;const s=document.createElement("div");s.className="waterway-diamond",a.appendChild(s),a.addEventListener("click",i=>{i.stopPropagation();const p=this.container.getBoundingClientRect();this.popup.show({type:"waterway",data:n,x:i.clientX-p.left,y:i.clientY-p.top})}),this.overlays.appendChild(a)})}renderAisDisruptions(t){this.aisDisruptions.forEach(n=>{const e=t([n.lon,n.lat]);if(!e)return;const a=document.createElement("div");a.className=`ais-disruption-marker ${n.severity} ${n.type}`,a.style.left=`${e[0]}px`,a.style.top=`${e[1]}px`;const s=document.createElement("div");s.className="ais-disruption-icon",s.textContent=n.type==="gap_spike"?"🛰️":"🚢",a.appendChild(s);const i=document.createElement("div");i.className="ais-disruption-label",i.textContent=n.name,a.appendChild(i),a.addEventListener("click",p=>{p.stopPropagation();const l=this.container.getBoundingClientRect();this.popup.show({type:"ais",data:n,x:p.clientX-l.left,y:p.clientY-l.top})}),this.overlays.appendChild(a)})}renderAisDensity(t){if(!this.dynamicLayerGroup)return;const n=this.dynamicLayerGroup.append("g").attr("class","ais-density");this.aisDensity.forEach(e=>{const a=t([e.lon,e.lat]);if(!a)return;const s=Math.min(Math.max(e.intensity,.15),1),i=4+s*8,l=e.deltaPct>=15?E("--semantic-elevated"):E("--semantic-info"),c=.15+s*.25;n.append("circle").attr("class","ais-density-spot").attr("cx",a[0]).attr("cy",a[1]).attr("r",i).attr("fill",l).attr("fill-opacity",c).attr("stroke","none")})}renderPorts(t){te.forEach(n=>{const e=t([n.lon,n.lat]);if(!e)return;const a=document.createElement("div");a.className=`port-marker port-${n.type}`,a.style.left=`${e[0]}px`,a.style.top=`${e[1]}px`;const s=document.createElement("div");s.className="port-icon",s.textContent=n.type==="naval"?"⚓":n.type==="oil"||n.type==="lng"?"🛢️":"🏭",a.appendChild(s);const i=document.createElement("div");i.className="port-label",i.textContent=n.name,a.appendChild(i),a.addEventListener("click",p=>{p.stopPropagation();const l=this.container.getBoundingClientRect();this.popup.show({type:"port",data:n,x:p.clientX-l.left,y:p.clientY-l.top})}),this.overlays.appendChild(a)})}async loadAptGroups(){const{APT_GROUPS:t}=await _(async()=>{const{APT_GROUPS:n}=await import("./panels-CMqS79fo.js").then(e=>e.id);return{APT_GROUPS:n}},__vite__mapDeps([1,2,3]));this.aptGroups=t,this.aptGroupsLoaded=!0,this.render()}renderAPTMarkers(t){this.aptGroups.forEach(n=>{const e=t([n.lon,n.lat]);if(!e)return;const a=document.createElement("div");a.className="apt-marker",a.style.left=`${e[0]}px`,a.style.top=`${e[1]}px`,L(a,S(`
        <div class="apt-icon">⚠</div>
        <div class="apt-label">${r(n.name)}</div>
      `,"legacy direct innerHTML migration")),a.addEventListener("click",s=>{s.stopPropagation();const i=this.container.getBoundingClientRect();this.popup.show({type:"apt",data:n,x:s.clientX-i.left,y:s.clientY-i.top})}),this.overlays.appendChild(a)})}getRelatedNews(t){const n=["gaza","ukraine","ukrainian","russia","russian","israel","israeli","iran","iranian","china","chinese","taiwan","taiwanese","korea","korean","syria","syrian"];return this.news.map(e=>{const a=rt(e.title),s=ee(a,t.keywords);if(s.length===0||n.filter(l=>B(a,l)&&!t.keywords.some(c=>c.toLowerCase().includes(l))).length>0&&!s.some(c=>{var u;return c.toLowerCase()===t.name.toLowerCase()||((u=t.agencies)==null?void 0:u.some(m=>B(a,m)))}))return null;const p=s.length;return{item:e,score:p}}).filter(e=>e!==null).sort((e,a)=>a.score-e.score).slice(0,5).map(e=>e.item)}updateHotspotActivity(t){this.news=t,this.hotspots.forEach(n=>{let e=0,a=!1,s=0;t.forEach(p=>{const l=rt(p.title),c=n.keywords.filter(u=>B(l,u));if(c.length>0&&(s++,e+=c.length*2,p.isAlert&&(e+=5,a=!0),p.pubDate)){const u=(Date.now()-p.pubDate.getTime())/36e5;u<1?e+=3:u<6?e+=2:u<24&&(e+=1)}}),n.hasBreaking=a,a||s>=4||e>=10?(n.level="high",n.status=a?"BREAKING NEWS":"High activity"):s>=2||e>=4?(n.level="elevated",n.status="Elevated activity"):s>=1?(n.level="low",n.status="Recent mentions"):(n.level="low",n.status="Monitoring");const i=s>0?e/s:0;Pe(n.id,s,a,i)}),this.render()}flashLocation(t,n,e=2e3){const a=this.container.clientWidth,s=this.container.clientHeight;if(!a||!s)return;const p=this.getProjection(a,s)([n,t]);if(!p)return;const l=document.createElement("div");l.className="map-flash",l.style.left=`${p[0]}px`,l.style.top=`${p[1]}px`,l.style.setProperty("--flash-duration",`${e}ms`),this.overlays.appendChild(l),window.setTimeout(()=>{l.remove()},e)}initEscalationGetters(){ye(t=>ne(t)??ie(t)),ge(oe)}updateMilitaryForEscalation(t,n){Me(t,n)}getHotspotDynamicScore(t){return bt(t)}setView(t,n){this.state.view=t;const a={global:{zoom:1,pan:{x:0,y:0}},america:{zoom:1.8,pan:{x:180,y:30}},mena:{zoom:3.5,pan:{x:-100,y:50}},eu:{zoom:2.4,pan:{x:-30,y:100}},asia:{zoom:2,pan:{x:-320,y:40}},latam:{zoom:2,pan:{x:120,y:-100}},africa:{zoom:2.2,pan:{x:-40,y:-30}},oceania:{zoom:2.2,pan:{x:-420,y:-100}}}[t];this.state.zoom=n??a.zoom,this.state.pan=a.pan,this.applyTransform(),this.render()}toggleLayer(t,n="user"){var i;if(console.log(`[Map.toggleLayer] ${t}: ${this.state.layers[t]} -> ${!this.state.layers[t]}`),this.state.layers[t]=!this.state.layers[t],this.state.layers[t]){const p=M.LAYER_ZOOM_THRESHOLDS[t];p&&this.state.zoom<p.minZoom?this.layerZoomOverrides[t]=!0:delete this.layerZoomOverrides[t]}else delete this.layerZoomOverrides[t];const e=this.container.querySelector(`[data-layer="${t}"]`),a=this.state.layers[t],s=M.ASYNC_DATA_LAYERS.has(t);a&&s?(e==null||e.classList.remove("active"),e==null||e.classList.add("loading")):(e==null||e.classList.toggle("active",a),e==null||e.classList.remove("loading")),(i=this.onLayerChange)==null||i.call(this,t,this.state.layers[t],n),requestAnimationFrame(()=>this.render())}setOnLayerChange(t){this.onLayerChange=t}hideLayerToggle(t){const n=this.container.querySelector(`.layer-toggle[data-layer="${t}"]`);n&&(n.style.display="none")}setChokepointData(t){this.popup.setChokepointData(t)}setScenarioState(t){}setLayerLoading(t,n){const e=this.container.querySelector(`.layer-toggle[data-layer="${t}"]`);e&&e.classList.toggle("loading",n)}setLayerReady(t,n){const e=this.container.querySelector(`.layer-toggle[data-layer="${t}"]`);e&&(e.classList.remove("loading"),this.state.layers[t]&&n?e.classList.add("active"):e.classList.remove("active"))}onStateChanged(t){this.onStateChange=t}zoomIn(){this.state.zoom=Math.min(this.state.zoom+.5,10),this.applyTransform()}zoomOut(){this.state.zoom=Math.max(this.state.zoom-.5,1),this.applyTransform()}reset(){this.state.zoom=1,this.state.pan={x:0,y:0},this.state.view!=="global"?(this.state.view="global",this.render()):this.applyTransform()}triggerHotspotClick(t){var l;const n=this.hotspots.find(c=>c.id===t);if(!n)return;const e=this.container.clientWidth,a=this.container.clientHeight,i=this.getProjection(e,a)([n.lon,n.lat]);if(!i)return;const p=this.getRelatedNews(n);this.popup.show({type:"hotspot",data:n,relatedNews:p,x:i[0],y:i[1]}),this.popup.loadHotspotGdeltContext(n),(l=this.onHotspotClick)==null||l.call(this,n)}triggerConflictClick(t){const n=U.find(p=>p.id===t);if(!n)return;const e=this.container.clientWidth,a=this.container.clientHeight,i=this.getProjection(e,a)(n.center);i&&this.popup.show({type:"conflict",data:n,x:i[0],y:i[1]})}triggerBaseClick(t){const n=pt.find(p=>p.id===t);if(!n)return;const e=this.container.clientWidth,a=this.container.clientHeight,i=this.getProjection(e,a)([n.lon,n.lat]);i&&this.popup.show({type:"base",data:n,x:i[0],y:i[1]})}triggerPipelineClick(t){const n=at.find(l=>l.id===t);if(!n||n.points.length===0)return;const e=this.container.clientWidth,a=this.container.clientHeight,s=this.getProjection(e,a),i=n.points[Math.floor(n.points.length/2)],p=s(i);p&&this.popup.show({type:"pipeline",data:n,x:p[0],y:p[1]})}triggerCableClick(t){const n=P.find(l=>l.id===t);if(!n||n.points.length===0)return;const e=this.container.clientWidth,a=this.container.clientHeight,s=this.getProjection(e,a),i=n.points[Math.floor(n.points.length/2)],p=s(i);p&&this.popup.show({type:"cable",data:n,x:p[0],y:p[1]})}triggerDatacenterClick(t){const n=lt.find(p=>p.id===t);if(!n)return;const e=this.container.clientWidth,a=this.container.clientHeight,i=this.getProjection(e,a)([n.lon,n.lat]);i&&this.popup.show({type:"datacenter",data:n,x:i[0],y:i[1]})}triggerNuclearClick(t){const n=it.find(p=>p.id===t);if(!n)return;const e=this.container.clientWidth,a=this.container.clientHeight,i=this.getProjection(e,a)([n.lon,n.lat]);i&&this.popup.show({type:"nuclear",data:n,x:i[0],y:i[1]})}triggerIrradiatorClick(t){const n=ot.find(p=>p.id===t);if(!n)return;const e=this.container.clientWidth,a=this.container.clientHeight,i=this.getProjection(e,a)([n.lon,n.lat]);i&&this.popup.show({type:"irradiator",data:n,x:i[0],y:i[1]})}enableLayer(t){var n;if(!this.state.layers[t]){this.state.layers[t]=!0;const e=M.LAYER_ZOOM_THRESHOLDS[t];e&&this.state.zoom<e.minZoom?this.layerZoomOverrides[t]=!0:delete this.layerZoomOverrides[t];const a=document.querySelector(`[data-layer="${t}"]`);a==null||a.classList.add("active"),(n=this.onLayerChange)==null||n.call(this,t,!0,"programmatic"),this.render()}}highlightAssets(t){Object.keys(this.highlightedAssets).forEach(n=>{this.highlightedAssets[n].clear()}),t&&t.forEach(n=>{n!=null&&n.type&&this.highlightedAssets[n.type]&&this.highlightedAssets[n.type].add(n.id)}),this.render()}clampPan(){const t=this.state.zoom,n=this.container.clientWidth,e=this.container.clientHeight,a=n/2*Math.max(1,t*.8),s=e/2*Math.max(1,t*.8);this.state.pan.x=Math.max(-a,Math.min(a,this.state.pan.x)),this.state.pan.y=Math.max(-s,Math.min(s,this.state.pan.y))}applyTransform(){this.clampPan();const t=this.state.zoom,n=this.container.clientWidth,e=this.container.clientHeight,a=n/2*(1-t),s=e/2*(1-t),i=a+this.state.pan.x*t,p=s+this.state.pan.y*t;this.wrapper.style.transform=`translate(${i}px, ${p}px) scale(${t})`;const l=Math.min(1.5,t)/t,c=1/t;this.wrapper.style.setProperty("--label-scale",String(l)),this.wrapper.style.setProperty("--marker-scale",String(c)),this.wrapper.style.setProperty("--zoom",String(t)),this.updateLabelVisibility(t),this.updateZoomLayerVisibility(),this.emitStateChange()}updateZoomLayerVisibility(){const t=this.state.zoom;Object.keys(M.LAYER_ZOOM_THRESHOLDS).forEach(n=>{const e=M.LAYER_ZOOM_THRESHOLDS[n];if(!e)return;const a=this.state.layers[n],s=!!this.layerZoomOverrides[n],i=a&&(s||t>=e.minZoom),p=e.showLabels??e.minZoom,l=a&&t>=p,c=`data-layer-hidden-${n}`,u=`data-labels-hidden-${n}`;i?this.wrapper.removeAttribute(c):this.wrapper.setAttribute(c,"true"),l?this.wrapper.removeAttribute(u):this.wrapper.setAttribute(u,"true");const m=document.querySelector(`[data-layer="${n}"]`),y=a&&!s&&t<e.minZoom;m==null||m.classList.toggle("auto-hidden",y)})}emitStateChange(){var t;(t=this.onStateChange)==null||t.call(this,this.getState())}updateLabelVisibility(t){const n=this.overlays.querySelectorAll(".hotspot-label, .earthquake-label, .weather-label, .apt-label"),e=[];n.forEach(i=>{const p=i,l=p.closest(".hotspot, .earthquake-marker, .weather-marker, .apt-marker");let c=1;if(l!=null&&l.classList.contains("hotspot")){const m=l.querySelector(".hotspot-marker");m!=null&&m.classList.contains("high")?c=5:m!=null&&m.classList.contains("elevated")?c=3:c=2}else l!=null&&l.classList.contains("earthquake-marker")?c=4:l!=null&&l.classList.contains("weather-marker")&&(l.classList.contains("extreme")?c=5:l.classList.contains("severe")?c=4:c=2);p.style.opacity="1";const u=p.getBoundingClientRect();e.push({el:p,rect:u,priority:c})}),e.sort((i,p)=>p.priority-i.priority);const a=[],s=30/t;e.forEach(({el:i,rect:p,priority:l})=>{a.some(u=>{const m=Math.abs(p.left+p.width/2-(u.left+u.width/2)),y=Math.abs(p.top+p.height/2-(u.top+u.height/2));return m<(p.width+u.width)/2+s&&y<(p.height+u.height)/2+s})&&t<2?i.style.opacity=l>=4?"0.7":"0":a.push(p)})}onHotspotClicked(t){this.onHotspotClick=t}onTimeRangeChanged(t){this.onTimeRangeChange=t}setOnCountryClick(t){this.onCountryClick=t}fitCountry(t){const n=se(t);if(!n)return;const[e,a,s,i]=n,p=(e+s)/2,l=(a+i)/2,c=this.container.clientWidth,u=this.container.clientHeight,m=this.getProjection(c,u),y=m([e,i]),d=m([s,a]);if(!y||!d){this.state.zoom=4,this.setCenter(l,p);return}const h=Math.abs(d[0]-y[0]),g=Math.abs(d[1]-y[1]),$=.8,C=h>0?c*$/h:4,b=g>0?u*$/g:4;this.state.zoom=Math.max(1,Math.min(8,Math.min(C,b))),this.setCenter(l,p)}getState(){return{...this.state}}getCenter(){const t=this.container.clientWidth,n=this.container.clientHeight,e=this.getProjection(t,n);if(!e.invert)return null;const a=this.state.zoom,s=t/(2*a)-this.state.pan.x,i=n/(2*a)-this.state.pan.y,p=e.invert([s,i]);return p?{lon:p[0],lat:p[1]}:null}getTimeRange(){return this.state.timeRange}setZoom(t){this.state.zoom=Math.max(1,Math.min(10,t)),this.applyTransform(),this.ensureBaseLayerIntact()}ensureBaseLayerIntact(){var s;const t=this.svg.node(),n=t==null?void 0:t.querySelector(".map-base"),e=(s=this.baseLayerGroup)==null?void 0:s.node();if(n&&e!==n){console.warn("[Map] Stale base layer selection detected, forcing full rebuild"),this.baseRendered=!1,this.render();return}((n==null?void 0:n.querySelectorAll(".country").length)??0)===0&&this.countryFeatures&&this.countryFeatures.length>0&&(console.warn("[Map] Base layer missing countries, triggering recovery render"),this.baseRendered=!1,this.render())}setCenter(t,n){console.log("[Map] setCenter called:",{lat:t,lon:n});const e=this.container.clientWidth,a=this.container.clientHeight,i=this.getProjection(e,a)([n,t]);console.log("[Map] projected pos:",i,"container:",{width:e,height:a},"zoom:",this.state.zoom),i&&(this.state.pan={x:e/2-i[0],y:a/2-i[1]},this.applyTransform(),this.ensureBaseLayerIntact())}setLayers(t){const n=this.state.layers.cyberThreats;this.state.layers={...t},this.state.layers.cyberThreats&&!n&&!this.aptGroupsLoaded&&this.loadAptGroups(),this.syncLayerButtons(),this.render()}setEarthquakes(t){console.log("[Map] setEarthquakes called with",t.length,"earthquakes"),t.length>0||this.earthquakes.length===0?this.earthquakes=t:console.log("[Map] Keeping existing",this.earthquakes.length,"earthquakes (new data was empty)"),this.render()}setWeatherAlerts(t){this.weatherAlerts=t,this.render()}setRadiationObservations(t){this.radiationObservations=t,this.render()}setOutages(t){this.outages=t,this.render()}setAisData(t,n){this.aisDisruptions=t,this.aisDensity=n,this.render()}setCableActivity(t,n){this.cableAdvisories=t,this.repairShips=n,this.popup.setCableActivity(t,n),this.render()}setCableHealth(t){this.healthByCableId=t,this.render()}setConflictEvents(t){this.conflictEvents=t,this.render()}setProtests(t){this.protests=t,this.render()}setFlightDelays(t){this.flightDelays=t,this.render()}setAircraftPositions(t){this.aircraftPositions=t,this.render()}setMilitaryFlights(t,n=[]){this.militaryFlights=t,this.militaryFlightClusters=n,this.render()}setMilitaryVessels(t,n=[]){this.militaryVessels=t,this.militaryVesselClusters=n,this.render()}setNaturalEvents(t){this.naturalEvents=t,this.render()}setFires(t){this.firmsFireData=t,this.render()}setWebcams(t){this.webcamData=t,this.render()}setTechEvents(t){this.techEvents=t,this.render()}setCyberThreats(t){}setIranEvents(t){this.iranEvents=t,this.render()}setNewsLocations(t){}setTechActivity(t){this.techActivities=t,this.render()}setOnTechHubClick(t){this.onTechHubClick=t}setGeoActivity(t){this.geoActivities=t,this.render()}setOnGeoHubClick(t){this.onGeoHubClick=t}getCableAdvisory(t){return this.cableAdvisories.filter(e=>e.cableId===t).reduce((e,a)=>e?a.reported.getTime()>e.reported.getTime()?a:e:a,void 0)}getCableName(t){var n;return((n=P.find(e=>e.id===t))==null?void 0:n.name)||t}getHotspotLevels(){const t={};return this.hotspots.forEach(n=>{t[n.name]=n.level||"low"}),t}setHotspotLevels(t){this.hotspots.forEach(n=>{t[n.name]&&(n.level=t[n.name])}),this.render()}};f(M,"LAYER_ZOOM_THRESHOLDS",{bases:{minZoom:3,showLabels:5},nuclear:{minZoom:2},conflicts:{minZoom:1,showLabels:3},economic:{minZoom:2},natural:{minZoom:1,showLabels:2}}),f(M,"ASYNC_DATA_LAYERS",new Set(["natural","weather","outages","ais","protests","flights","military","techEvents"]));let gt=M;export{gt as M,X as a,_e as b,Ge as c,Pe as d,Ve as e,Xe as f,bt as g,Me as h,ye as i,ge as j,Ct as m,We as r,Ye as s,je as u};
