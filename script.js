const WHATSAPP_NUMBER="212600000000"; // <-- REMPLACE PAR LE NUMERO DU VENDEUR

const products=[
{id:1,brand:"Apple",name:"iPhone 16 Pro",cat:"smartphones",price:13990,old:14990,badge:"BEST",type:"phone",newest:16,glow:"#c6ff3820",desc:"Le smartphone pro nouvelle génération, pensé pour la performance, la photo et la création.",specs:{Écran:'6.3" OLED',Stockage:"256 Go",Réseau:"5G",Garantie:"12 mois"}},
{id:2,brand:"Samsung",name:"Galaxy S25 Ultra",cat:"smartphones",price:12990,old:13990,badge:"−7%",type:"phone",newest:15,glow:"#68e5ff20",desc:"Un flagship ultra complet avec écran immersif et performances premium.",specs:{Écran:'6.9" AMOLED',Stockage:"256 Go",Réseau:"5G",Garantie:"12 mois"}},
{id:3,brand:"Xiaomi",name:"Redmi Note 14 Pro",cat:"smartphones",price:3290,old:3690,badge:"DEAL",type:"phone",newest:12,glow:"#c6ff381a",desc:"Un excellent équilibre entre écran, autonomie, photo et performances.",specs:{Écran:'6.67" AMOLED',Stockage:"256 Go",Réseau:"5G",Garantie:"12 mois"}},
{id:4,brand:"Apple",name:"MacBook Air M4",cat:"pc",price:11990,old:12990,badge:"NEW",type:"laptop",newest:18,glow:"#68e5ff1c",desc:"Ultra fin, silencieux et rapide, conçu pour travailler et créer partout.",specs:{Écran:'13.6" Retina',RAM:"16 Go",Stockage:"256 Go SSD",Garantie:"12 mois"}},
{id:5,brand:"ASUS",name:"ROG Zephyrus G14",cat:"pc",price:15990,old:17490,badge:"GAMING",type:"laptop",newest:14,glow:"#c6ff381c",desc:"Puissance gaming dans un format compact et premium.",specs:{Écran:'14" 3K OLED',RAM:"32 Go",GPU:"RTX",Garantie:"12 mois"}},
{id:6,brand:"Lenovo",name:"IdeaPad Slim 5",cat:"pc",price:6790,old:7290,badge:"−7%",type:"laptop",newest:9,glow:"#68e5ff17",desc:"Un portable polyvalent pour les études et la productivité.",specs:{Écran:'15.6" FHD',RAM:"16 Go",Stockage:"512 Go SSD",Garantie:"12 mois"}},
{id:7,brand:"Apple",name:"iPad Air M3",cat:"tablettes",price:6990,old:7490,badge:"NEW",type:"tablet",newest:17,glow:"#68e5ff20",desc:"Une tablette puissante et légère pour travailler, étudier et créer.",specs:{Écran:'11" Liquid Retina',Stockage:"128 Go",Puce:"Apple M3",Garantie:"12 mois"}},
{id:8,brand:"Samsung",name:"Galaxy Tab S10",cat:"tablettes",price:7490,old:7990,badge:"DEAL",type:"tablet",newest:11,glow:"#c6ff381a",desc:"Grand écran AMOLED et expérience premium pour le travail et le divertissement.",specs:{Écran:'12.4" AMOLED',Stockage:"256 Go",Stylet:"Inclus",Garantie:"12 mois"}},
{id:9,brand:"Xiaomi",name:"Pad 7",cat:"tablettes",price:3790,old:4190,badge:"−10%",type:"tablet",newest:10,glow:"#68e5ff19",desc:"Une tablette moderne, fluide et polyvalente à prix compétitif.",specs:{Écran:'11.2" 3.2K',Stockage:"128 Go",Réseau:"Wi-Fi",Garantie:"12 mois"}},
{id:10,brand:"Apple",name:"AirPods Pro",cat:"audio",price:2390,old:2690,badge:"−11%",type:"headphone",newest:8,glow:"#68e5ff1c",desc:"Réduction de bruit active et audio immersif.",specs:{ANC:"Active",Audio:"Spatial Audio",Autonomie:"Jusqu'à 6 h",Garantie:"12 mois"}},
{id:11,brand:"JBL",name:"Tune 770NC",cat:"audio",price:990,old:1190,badge:"DEAL",type:"headphone",newest:7,glow:"#c6ff3818",desc:"Casque sans fil avec ANC et autonomie prolongée.",specs:{ANC:"Oui",Bluetooth:"5.3",Autonomie:"70 h",Garantie:"12 mois"}},
{id:12,brand:"Anker",name:"PowerCore 20K",cat:"accessoires",price:490,old:590,badge:"−17%",type:"accessory",newest:6,glow:"#c6ff381b",desc:"Batterie externe haute capacité avec recharge rapide.",specs:{Capacité:"20 000 mAh",Port:"USB-C",Charge:"Power Delivery",Garantie:"12 mois"}},
{id:13,brand:"Logitech",name:"MX Keys Mini",cat:"accessoires",price:890,old:null,badge:"NEW",type:"accessory",newest:13,glow:"#68e5ff1b",desc:"Clavier compact premium pour une frappe confortable.",specs:{Connexion:"Bluetooth",Format:"Compact",Rétroéclairage:"Oui",Garantie:"12 mois"}},
{id:14,brand:"Samsung",name:"Chargeur 25W USB-C",cat:"accessoires",price:190,old:240,badge:"−21%",type:"accessory",newest:4,glow:"#c6ff3818",desc:"Chargeur compact et rapide pour appareils compatibles.",specs:{Puissance:"25 W",Port:"USB-C",Charge:"Fast Charge",Garantie:"6 mois"}},
{id:15,brand:"Logitech",name:"G502 Gaming",cat:"gaming",price:690,old:790,badge:"GAMING",type:"accessory",newest:5,glow:"#68e5ff18",desc:"Souris gaming précise avec capteur haute performance.",specs:{Capteur:"HERO",DPI:"25 600",Boutons:"11",Garantie:"12 mois"}},
{id:16,brand:"HP",name:"Pavilion 15",cat:"pc",price:7590,old:null,badge:"NEW",type:"laptop",newest:19,glow:"#68e5ff1c",desc:"Un PC portable élégant et performant pour le quotidien.",specs:{Écran:'15.6" FHD',RAM:"16 Go",Stockage:"512 Go SSD",Garantie:"12 mois"}}
];
const categories=[
{id:"smartphones",symbol:"◈",name:"Smartphones",desc:"Flagships & essentiels"},
{id:"pc",symbol:"▱",name:"PC & Laptops",desc:"Workstations & gaming"},
{id:"tablettes",symbol:"▤",name:"Tablettes",desc:"Mobilité & créativité"},
{id:"audio",symbol:"◉",name:"Audio",desc:"Immersive sound"},
{id:"accessoires",symbol:"⌁",name:"Accessoires",desc:"Les indispensables"},
{id:"gaming",symbol:"⌖",name:"Gaming",desc:"Gear & performance"}
];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const money=n=>n.toLocaleString("fr-FR")+" DH";
let cart=JSON.parse(localStorage.getItem("nx-cart")||"[]"),favs=JSON.parse(localStorage.getItem("nx-favs")||"[]"),filter="all",query="";

function wa(msg){return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`}
function save(){localStorage.setItem("nx-cart",JSON.stringify(cart));localStorage.setItem("nx-favs",JSON.stringify(favs))}
function art(type){return `<div class="art ${type}"></div>`}

function renderCats(){
  $("#catGrid").innerHTML=categories.map(c=>`<article class="cat reveal" data-cat="${c.id}"><div class="symbol">${c.symbol}</div><div><h3>${c.name}</h3><p>${c.desc}</p></div></article>`).join("");
  $$(".cat").forEach(x=>x.onclick=()=>{filter=x.dataset.cat;setFilters();renderProducts();$("#shop").scrollIntoView({behavior:"smooth"})});
}
function setFilters(){
  const cats=[{id:"all",name:"Tous"},...categories.map(x=>({id:x.id,name:x.name}))];
  $("#filters").className="filters";
  $("#filters").innerHTML=cats.map(c=>`<button class="filter ${filter===c.id?"active":""}" data-f="${c.id}">${c.name}</button>`).join("");
  $$(".filter").forEach(x=>x.onclick=()=>{filter=x.dataset.f;setFilters();renderProducts()});
}
function listProducts(){
  let a=products.filter(p=>(filter==="all"||p.cat===filter)&&(!query||`${p.brand} ${p.name} ${p.cat}`.toLowerCase().includes(query.toLowerCase())));
  const s=$("#sort").value;if(s==="priceAsc")a.sort((x,y)=>x.price-y.price);if(s==="priceDesc")a.sort((x,y)=>y.price-x.price);if(s==="newest")a.sort((x,y)=>y.newest-x.newest);return a;
}
function renderProducts(){
  const a=listProducts();
  $("#products").innerHTML=a.map(p=>{const d=p.old?Math.round((1-p.price/p.old)*100):0;return `<article class="product reveal"><div class="visual" style="--glow:${p.glow}">${p.badge?`<span class="badge">${p.badge}</span>`:""}<button class="heart ${favs.includes(p.id)?"active":""}" data-fav="${p.id}">${favs.includes(p.id)?"♥":"♡"}</button>${art(p.type)}</div><div class="info"><div class="brand">${p.brand}</div><h3>${p.name}</h3><div class="prices"><span class="now">${money(p.price)}</span>${p.old?`<span class="old">${money(p.old)}</span>`:""}${d?`<span class="off">−${d}%</span>`:""}</div><div class="product-actions"><button class="details" data-detail="${p.id}">Détails</button><button class="add" data-add="${p.id}">Ajouter</button></div></div></article>`}).join("");
  $("#empty").hidden=!!a.length;bindProducts();observe();
}
function bindProducts(){
  $$("[data-add]").forEach(b=>b.onclick=()=>add(+b.dataset.add));
  $$("[data-fav]").forEach(b=>b.onclick=()=>favorite(+b.dataset.fav));
  $$("[data-detail]").forEach(b=>b.onclick=()=>openModal(+b.dataset.detail));
}
function add(id){const i=cart.find(x=>x.id===id);i?i.qty++:cart.push({id,qty:1});save();renderCart();counts();toast("Ajouté au panier ✓");openDrawer()}
function favorite(id){favs=favs.includes(id)?favs.filter(x=>x!==id):[...favs,id];save();counts();renderProducts()}
function counts(){ $("#cartCount").textContent=cart.reduce((s,x)=>s+x.qty,0);$("#favCount").textContent=favs.length}
function renderCart(){
  const has=cart.length>0;$("#cartEmpty").style.display=has?"none":"block";$("#cartBottom").style.display=has?"block":"none";
  $("#cartList").innerHTML=cart.map(i=>{const p=products.find(x=>x.id===i.id);return `<div class="cart-item"><div class="cart-thumb">${art(p.type)}</div><div><h4>${p.name}</h4><p>${money(p.price)}</p><div class="qty"><button data-q="-1" data-id="${p.id}">−</button><span>${i.qty}</span><button data-q="1" data-id="${p.id}">+</button></div></div><button class="remove" data-remove="${p.id}">×</button></div>`}).join("");
  $$(".qty button").forEach(b=>b.onclick=()=>qty(+b.dataset.id,+b.dataset.q));$$("[data-remove]").forEach(b=>b.onclick=()=>remove(+b.dataset.remove));
  const total=cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0);$("#total").textContent=money(total);
  const lines=cart.map(i=>{const p=products.find(x=>x.id===i.id);return `• ${p.name} × ${i.qty} — ${money(p.price*i.qty)}`});
  $("#orderWa").href=wa(`Bonjour, je souhaite commander :\n\n${lines.join("\n")}\n\nTotal estimé : ${money(total)}\n\nMerci de confirmer la disponibilité, la livraison et les modalités de paiement.`);
}
function qty(id,d){const i=cart.find(x=>x.id===id);if(!i)return;i.qty+=d;if(i.qty<1)cart=cart.filter(x=>x.id!==id);save();renderCart();counts()}
function remove(id){cart=cart.filter(x=>x.id!==id);save();renderCart();counts()}
function openDrawer(){$("#drawer").classList.add("open");$("#backdrop").classList.add("open");document.body.classList.add("lock")}
function closeDrawer(){$("#drawer").classList.remove("open");$("#backdrop").classList.remove("open");document.body.classList.remove("lock")}

function openModal(id){
 const p=products.find(x=>x.id===id);$("#modalBody").innerHTML=`<div class="modal-content"><div class="modal-visual">${art(p.type)}</div><div class="modal-info"><div class="brand">${p.brand}</div><h2>${p.name}</h2><div class="prices"><span class="now">${money(p.price)}</span>${p.old?`<span class="old">${money(p.old)}</span>`:""}</div><p>${p.desc}</p><div class="specs">${Object.entries(p.specs).map(([k,v])=>`<div><span>${k}</span><b>${v}</b></div>`).join("")}</div><button class="btn primary" id="modalAdd">Ajouter au panier ↗</button><a class="btn secondary" target="_blank" href="${wa(`Bonjour, je souhaite des informations sur ${p.name} (${money(p.price)}).`)}" style="margin-top:8px;width:100%">Demander sur WhatsApp ↗</a></div></div>`;$("#modal").classList.add("open");document.body.classList.add("lock");$("#modalAdd").onclick=()=>{add(id);closeModal()}}
function closeModal(){$("#modal").classList.remove("open");document.body.classList.remove("lock")}
function toast(t){$("#toast").textContent=t;$("#toast").classList.add("show");setTimeout(()=>$("#toast").classList.remove("show"),1700)}
function observe(){if(!("IntersectionObserver"in window)){$$(".reveal").forEach(x=>x.classList.add("visible"));return}const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");o.unobserve(e.target)}}),{threshold:.08});$$(".reveal:not(.visible)").forEach(x=>o.observe(x))}
function countdown(){let end=localStorage.getItem("nx-end");if(!end||+end<Date.now()){end=Date.now()+72*3600000+6*3600000;localStorage.setItem("nx-end",end)}const f=()=>{let x=Math.max(0,+end-Date.now()),d=Math.floor(x/86400000);x%=86400000;let h=Math.floor(x/3600000);x%=3600000;let m=Math.floor(x/60000),s=Math.floor(x%60000/1000);$("#dd").textContent=String(d).padStart(2,"0");$("#hh").textContent=String(h).padStart(2,"0");$("#mm").textContent=String(m).padStart(2,"0");$("#ss").textContent=String(s).padStart(2,"0")};f();setInterval(f,1000)}

$("#hamb").onclick=()=>$("#mobileNav").classList.toggle("open");$$(".mobile-nav a").forEach(a=>a.onclick=()=>$("#mobileNav").classList.remove("open"));
$("#searchBtn").onclick=()=>{$("#searchbar").classList.add("open");$("#searchInput").focus()};$("#closeSearch").onclick=()=>{$("#searchbar").classList.remove("open");$("#searchInput").value="";query="";renderProducts()};$("#searchInput").oninput=e=>{query=e.target.value;renderProducts()};
$("#cartBtn").onclick=openDrawer;$("#closeCart").onclick=closeDrawer;$("#backdrop").onclick=closeDrawer;$("#clearCart").onclick=()=>{cart=[];save();renderCart();counts()};
$("#modalClose").onclick=closeModal;$("#modal").onclick=e=>{if(e.target.id==="modal")closeModal()};
$("#sort").onchange=renderProducts;$("#allProducts").onclick=e=>{e.preventDefault();filter="all";query="";$("#searchInput").value="";setFilters();renderProducts();$("#shop").scrollIntoView({behavior:"smooth"})};
$("#favBtn").onclick=()=>{filter="all";query="";setFilters();renderProducts();$("#shop").scrollIntoView({behavior:"smooth"})};
window.addEventListener("scroll",()=>$("#header").classList.toggle("scrolled",scrollY>10));
const msg="Bonjour, je souhaite avoir des informations sur vos produits high-tech.";
$("#contactWa").href=wa(msg);$("#footerWa").href=wa(msg);

renderCats();setFilters();renderProducts();renderCart();counts();countdown();observe();
