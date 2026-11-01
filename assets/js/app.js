const $=s=>document.querySelector(s);
let resources=[],activeCategory="all";
function safe(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function render(){
 const q=$("#search").value.trim().toLocaleLowerCase();
 const list=resources.filter(x=>(activeCategory==="all"||x.category===activeCategory)&&(!q||[x.title,x.description,x.source,x.category,...(x.tags||[])].join(" ").toLocaleLowerCase().includes(q)));
 $("#resource-grid").innerHTML=list.map(x=>'<article class="resource-card"><h3>'+safe(x.title)+'</h3><p>'+safe(x.description)+'</p><span class="resource-source">'+safe(x.source||"Fuente original")+' · '+safe(x.rightsLabel||"Consultar condiciones")+'</span><a href="'+safe(x.url)+'" target="_blank" rel="noopener noreferrer">Ir al material ↗</a></article>').join("");
 $("#result-count").textContent=list.length?list.length+" materiales encontrados":"Todavía no hay materiales en esta selección";
 $("#empty-state").hidden=list.length>0;
 $("#show-all").hidden=activeCategory==="all"&&!q;
 $("#results-title").textContent=activeCategory==="all"?"Selección RUMA":"Materiales encontrados";
}
async function init(){try{const r=await fetch("catalog.json");if(!r.ok)throw Error();const d=await r.json();resources=d.resources||[]}catch(e){$("#empty-state").textContent="No pudimos cargar el catálogo. Probá nuevamente cuando tengas conexión."}render();}
$("#search").addEventListener("input",()=>{activeCategory="all";render();});
$("#clear-search").addEventListener("click",()=>{$("#search").value="";activeCategory="all";render();$("#search").focus();});
$("#category-grid").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;activeCategory=b.dataset.category;$("#search").value="";render();document.querySelector("#results-title").scrollIntoView({behavior:"smooth",block:"center"});});
$("#show-all").addEventListener("click",()=>{activeCategory="all";$("#search").value="";render();});
$("#copy-alias").addEventListener("click",async()=>{try{await navigator.clipboard.writeText("ocarina.guitarra");$("#copy-status").textContent="Alias copiado. ¡Gracias!"}catch(e){$("#copy-status").textContent="Alias: ocarina.guitarra"}});
$("#font-up").addEventListener("click",()=>document.body.classList.add("large"));
$("#font-down").addEventListener("click",()=>document.body.classList.remove("large"));
$("#contrast").addEventListener("click",()=>{const on=document.body.classList.toggle("high-contrast");$("#contrast").setAttribute("aria-pressed",String(on));});
init();