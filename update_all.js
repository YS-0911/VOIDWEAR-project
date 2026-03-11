const fs = require("fs"),
  p = require("path"),
  B = p.join.bind(p, __dirname);

// ─── 1. main.css ───
fs.writeFileSync(
  B("assets/css/main.css"),
  `/* MAIN PAGE */
.hero{display:grid;grid-template-columns:5fr 3.5fr 3fr;height:calc(100vh - var(--header-full-h));min-height:480px;overflow:hidden;}
.hero-col{position:relative;overflow:hidden;cursor:pointer;border-right:1px solid rgba(255,255,255,0.15);}
.hero-col:last-child{border-right:none;}
.hero-col__link{position:absolute;inset:0;z-index:3;}
.hero-col__bg{position:absolute;inset:0;background-size:cover;background-position:center;transition:transform var(--tr-slow);}
.hero-col:hover .hero-col__bg{transform:scale(1.05);}
.hero-col__overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.04) 30%,rgba(0,0,0,0.55) 100%);transition:background 0.4s ease;}
.hero-col:hover .hero-col__overlay{background:linear-gradient(to bottom,rgba(0,0,0,0.1) 20%,rgba(0,0,0,0.65) 100%);}
.hero-col__text{position:absolute;bottom:32px;left:28px;right:28px;z-index:2;}
.hero-col__label{font-family:var(--font-headline);font-size:clamp(20px,2.6vw,40px);letter-spacing:0.05em;color:var(--color-white);line-height:1;display:block;transition:color 0.3s ease;}
.hero-col:hover .hero-col__label{color:var(--color-secondary);}
.hero-col__arrow{display:block;font-size:11px;color:var(--color-secondary);letter-spacing:0.14em;margin-top:10px;opacity:0;transform:translateX(-8px);transition:opacity 0.3s ease,transform 0.3s ease;}
.hero-col:hover .hero-col__arrow{opacity:1;transform:translateX(0);}
.hero-prev,.hero-next,.hero-indicator{display:none;}

.scroll-section{display:grid;grid-template-columns:3fr 2fr 2fr;min-height:800px;margin-top:56px;}
.scroll-col{position:relative;overflow:hidden;}
.scroll-col--left{background-color:#B0B0B0;background-size:cover;background-position:center;min-height:800px;display:flex;align-items:flex-end;}
.scroll-col--left::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.55) 0%,rgba(0,0,0,0.04) 55%);pointer-events:none;}
.scroll-left-text{padding:40px 32px;z-index:2;position:relative;}
.scroll-left-text span{font-family:var(--font-headline);font-size:clamp(26px,3vw,46px);letter-spacing:0.05em;color:var(--color-white);line-height:1.05;display:block;}
.scroll-col--mid,.scroll-col--right{display:flex;flex-direction:column;border-left:2px solid var(--color-secondary);}
.scroll-col-img{flex:1;overflow:hidden;background:#C0C0C0;min-height:260px;}
.scroll-col-img img{width:100%;height:100%;object-fit:cover;}
.scroll-col-content{padding:28px 24px 24px;background:var(--color-bg);flex-shrink:0;}
.scroll-col-title{font-family:var(--font-headline);font-size:30px;letter-spacing:0.04em;color:var(--color-primary);margin-bottom:6px;}
.scroll-col-desc{font-size:11.5px;color:var(--color-accent);line-height:1.7;margin-bottom:16px;}
.scroll-col-sep{border:none;border-top:1px solid rgba(0,0,0,0.1);margin-bottom:16px;}
.scroll-product{display:flex;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.07);cursor:pointer;}
.scroll-product:last-child{border-bottom:none;}
.scroll-product__thumb{width:64px;height:76px;background:#C8C8C8;flex-shrink:0;overflow:hidden;}
.scroll-product__thumb img{width:100%;height:100%;object-fit:cover;transition:transform 0.4s ease;}
.scroll-product:hover .scroll-product__thumb img{transform:scale(1.06);}
.scroll-product__info{flex:1;min-width:0;}
.scroll-product__name{font-size:12.5px;font-weight:600;color:var(--color-text);line-height:1.4;margin-bottom:3px;}
.scroll-product__desc{font-size:11px;color:var(--color-accent);line-height:1.5;margin-bottom:6px;}
.scroll-product__row{display:flex;align-items:center;gap:7px;}
.scroll-product__discount{font-size:11px;font-weight:700;color:var(--color-discount);}
.scroll-product__price{font-size:12px;font-weight:600;color:var(--color-text);}
.scroll-col-img-bottom{flex:1;min-height:260px;overflow:hidden;background:#B8B8B8;}
.scroll-col-img-bottom img{width:100%;height:100%;object-fit:cover;}
`,
);

// ─── 2. category.css ───
fs.writeFileSync(
  B("assets/css/category.css"),
  `/* CATEGORY PAGE */
.cat-page-wrap{background:var(--color-primary);min-height:100vh;padding:28px 0 48px;}
.cat-container{background:var(--color-bg);max-width:960px;margin:0 auto;padding-bottom:24px;}
.cat-header{text-align:center;padding:32px 24px 20px;border-bottom:1px solid rgba(0,0,0,0.08);}
.cat-header-logo{font-family:var(--font-headline);font-size:50px;letter-spacing:0.05em;color:var(--color-primary);display:inline-block;}
.cat-tabs{display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap;padding:16px 20px;border-bottom:1px solid rgba(0,0,0,0.08);}
.cat-tab{padding:6px 18px;border:1px solid #C4C4C4;border-radius:100px;font-size:12px;color:var(--color-text);background:transparent;cursor:pointer;transition:all 0.2s ease;letter-spacing:0.02em;white-space:nowrap;}
.cat-tab:hover,.cat-tab.active{background:var(--color-primary);border-color:var(--color-primary);color:var(--color-bg);}
.cat-feature{display:grid;grid-template-columns:5fr 5fr;}
.cat-feat-left{position:relative;overflow:hidden;background:#C0C0C0;min-height:340px;display:flex;align-items:center;justify-content:center;}
.cat-feat-left img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.cat-feat-left-text{position:relative;z-index:1;text-align:center;}
.cat-feat-left-text span{font-family:var(--font-headline);font-size:clamp(22px,3.5vw,36px);color:var(--color-primary);letter-spacing:0.06em;display:block;line-height:1.15;}
.cat-feat-right{padding:28px 24px;background:var(--color-bg);}
.cat-feat-title{font-family:var(--font-headline);font-size:30px;color:var(--color-primary);letter-spacing:0.04em;margin-bottom:6px;}
.cat-feat-desc{font-size:12px;color:var(--color-accent);line-height:1.7;margin-bottom:16px;}
.cat-feat-sep{border:none;border-top:1px solid rgba(0,0,0,0.1);margin-bottom:16px;}
.cat-feat-product{display:flex;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid rgba(0,0,0,0.07);cursor:pointer;}
.cat-feat-product:last-child{border-bottom:none;}
.cat-feat-product__thumb{width:58px;height:68px;background:#C8C8C8;flex-shrink:0;overflow:hidden;}
.cat-feat-product__thumb img{width:100%;height:100%;object-fit:cover;transition:transform 0.35s ease;}
.cat-feat-product:hover .cat-feat-product__thumb img{transform:scale(1.06);}
.cat-feat-product__info{flex:1;}
.cat-feat-product__name{font-size:12px;font-weight:600;color:var(--color-text);margin-bottom:3px;line-height:1.4;}
.cat-feat-product__desc{font-size:10.5px;color:var(--color-accent);line-height:1.5;margin-bottom:5px;}
.cat-feat-product__row{display:flex;gap:6px;align-items:center;}
.cat-feat-product__discount{font-size:11px;font-weight:700;color:var(--color-discount);}
.cat-feat-product__price{font-size:12px;font-weight:600;color:var(--color-text);}
.cat-filter-bar{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-top:1px solid rgba(0,0,0,0.08);flex-wrap:wrap;gap:8px;}
.cat-filter-tabs{display:flex;gap:6px;flex-wrap:wrap;}
.cat-filter-tab{padding:5px 14px;border:1px solid #C4C4C4;border-radius:100px;font-size:11px;color:var(--color-text);background:transparent;cursor:pointer;transition:all 0.2s ease;white-space:nowrap;}
.cat-filter-tab:hover,.cat-filter-tab.active{background:var(--color-primary);border-color:var(--color-primary);color:var(--color-bg);}
.cat-more-btn{font-size:12px;color:var(--color-accent);background:none;border:none;cursor:pointer;letter-spacing:0.04em;transition:color 0.2s ease;display:flex;align-items:center;gap:2px;}
.cat-more-btn:hover{color:var(--color-text);}
.cat-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(0,0,0,0.08);}
.cat-product-card{padding:14px 12px;cursor:pointer;border-right:1px solid rgba(0,0,0,0.07);border-bottom:1px solid rgba(0,0,0,0.07);}
.cat-product-card:nth-child(4n){border-right:none;}
.cat-product-card__thumb{width:100%;aspect-ratio:1 / 1.15;background:#C8C8C8;overflow:hidden;margin-bottom:10px;}
.cat-product-card__thumb img{width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;}
.cat-product-card:hover .cat-product-card__thumb img{transform:scale(1.04);}
.cat-product-card__name{font-size:11.5px;font-weight:400;color:var(--color-text);line-height:1.4;margin-bottom:5px;}
.cat-product-card__row{display:flex;align-items:center;gap:5px;}
.cat-product-card__discount{font-size:11px;font-weight:700;color:var(--color-discount);}
.cat-product-card__price{font-size:12px;font-weight:600;color:var(--color-text);}
`,
);

// ─── 3. header.css ───
fs.writeFileSync(
  B("assets/css/header.css"),
  `/* HEADER */
#site-header{position:sticky;top:0;left:0;width:100%;z-index:var(--z-header);background:var(--color-bg);border-top:2px solid var(--color-primary);border-bottom:2px solid var(--color-primary);}
.header-full{display:block;}
.header-util-row{display:flex;align-items:center;justify-content:space-between;padding:7px var(--gutter);}
.header-year{font-size:11px;font-weight:500;letter-spacing:0.06em;color:var(--color-text);}
.header-util-links{display:flex;align-items:center;gap:20px;}
.header-util-links a{font-size:11px;color:var(--color-text);letter-spacing:0.03em;transition:color var(--tr);}
.header-util-links a:hover{color:var(--color-accent);}
.header-logo-row{padding:0 var(--gutter) 2px;}
.header-logo-full{font-family:var(--font-headline);font-size:62px;line-height:1;letter-spacing:0.02em;color:var(--color-primary);display:inline-block;transition:color var(--tr);}
.header-logo-full:hover{color:var(--color-secondary);}
.header-nav-row{display:flex;align-items:center;justify-content:space-between;padding:4px var(--gutter) 10px;}
.header-gnb{display:flex;align-items:center;}
.gnb-item{position:relative;}
.gnb-link{font-size:13px;font-weight:400;color:var(--color-text);letter-spacing:0.04em;padding:4px 10px;display:block;position:relative;transition:color var(--tr);}
.gnb-link::after{content:'';position:absolute;bottom:0;left:10px;right:10px;height:1.5px;background:var(--color-secondary);transform:scaleX(0);transition:transform var(--tr);transform-origin:left;}
.gnb-item:hover .gnb-link,.gnb-item.is-active .gnb-link{color:var(--color-primary);}
.gnb-item:hover .gnb-link::after,.gnb-item.is-active .gnb-link::after{transform:scaleX(1);}
.header-search-btn{width:34px;height:34px;border-radius:50%;background:var(--color-secondary);border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform var(--tr);flex-shrink:0;}
.header-search-btn:hover{transform:scale(1.1);}
.header-search-btn svg{width:15px;height:15px;color:var(--color-primary);display:block;}
.header-compact{display:none;height:var(--header-compact-h);align-items:center;padding:0 var(--gutter);gap:20px;}
.header-compact-logo{font-family:var(--font-headline);font-size:26px;letter-spacing:0.04em;color:var(--color-primary);white-space:nowrap;flex-shrink:0;transition:color var(--tr);}
.header-compact-logo:hover{color:var(--color-secondary);}
.header-compact-nav{display:flex;align-items:center;flex:1;}
.header-compact-nav a{font-size:12.5px;color:var(--color-text);padding:4px 9px;letter-spacing:0.04em;white-space:nowrap;transition:color var(--tr);}
.header-compact-nav a:hover{color:var(--color-primary);}
.header-compact-right{display:flex;align-items:center;gap:10px;flex-shrink:0;}
.header-compact-dots{display:flex;align-items:center;gap:5px;}
.compact-dot{width:5px;height:5px;border-radius:50%;background:#C8C8C8;}
.compact-dot:first-child{background:var(--color-primary);}
#site-header.is-compact .header-full{display:none;}
#site-header.is-compact .header-compact{display:flex;}
#site-header.is-compact{border-top:none;border-bottom-color:rgba(0,0,0,0.12);box-shadow:0 2px 10px rgba(0,0,0,0.07);}
.header-search-bar{position:absolute;top:100%;left:0;width:100%;background:var(--color-primary);padding:14px var(--gutter);display:none;align-items:center;gap:12px;z-index:10;}
.header-search-bar.is-open{display:flex;}
.header-search-bar input{flex:1;font-size:15px;color:var(--color-white);background:transparent;border:none;border-bottom:1px solid rgba(255,255,255,0.25);padding:6px 0;letter-spacing:0.02em;}
.header-search-bar input::placeholder{color:rgba(255,255,255,0.35);}
.search-close-btn{color:rgba(255,255,255,0.55);font-size:18px;cursor:pointer;background:none;border:none;padding:4px 8px;transition:color var(--tr);}
.search-close-btn:hover{color:var(--color-secondary);}
#mega-dropdown{position:absolute;top:100%;left:0;width:100%;background:var(--color-bg);border-bottom:2px solid var(--color-primary);padding:18px var(--gutter) 26px;visibility:hidden;opacity:0;transform:translateY(-6px);transition:opacity 0.22s ease,transform 0.22s ease,visibility 0.22s;z-index:var(--z-dropdown);pointer-events:none;}
#mega-dropdown.is-open{visibility:visible;opacity:1;transform:translateY(0);pointer-events:auto;}
.dropdown-set{display:none;}
.dropdown-set.is-active{display:block;}
.dropdown-grid{display:grid;grid-template-columns:repeat(5,auto);gap:0 52px;width:fit-content;}
.dropdown-col-title{font-size:11px;font-weight:700;color:var(--color-text);letter-spacing:0.06em;display:block;margin-bottom:10px;text-transform:uppercase;}
.dropdown-col ul li a{font-size:12px;color:var(--color-accent);line-height:2.1;display:block;transition:color var(--tr),padding-left var(--tr);}
.dropdown-col ul li a:hover{color:var(--color-text);padding-left:4px;}
.mobile-header{display:none;position:fixed;top:0;left:0;width:100%;height:52px;background:var(--color-bg);z-index:var(--z-header);align-items:center;padding:0 16px;border-bottom:1px solid rgba(0,0,0,0.08);}
.mobile-logo{font-family:var(--font-headline);font-size:30px;letter-spacing:0.04em;color:var(--color-primary);}
.mobile-nav-bar{display:none;position:fixed;bottom:0;left:0;width:100%;height:60px;background:var(--color-bg);border-top:1px solid rgba(0,0,0,0.08);z-index:var(--z-mob-nav);align-items:center;justify-content:space-around;padding:0 8px;}
.mob-nav-item{display:flex;flex-direction:column;align-items:center;gap:3px;text-decoration:none;cursor:pointer;}
.mob-nav-icon{width:40px;height:40px;border-radius:50%;background:rgba(0,0,0,0.08);display:flex;align-items:center;justify-content:center;transition:background var(--tr);}
.mob-nav-icon svg{width:17px;height:17px;color:var(--color-accent);transition:color var(--tr);}
.mob-nav-label{font-size:9px;color:var(--color-accent);letter-spacing:0.04em;transition:color var(--tr);}
.mob-nav-item.is-active .mob-nav-icon{background:var(--color-primary);}
.mob-nav-item.is-active .mob-nav-icon svg{color:var(--color-white);}
.mob-nav-item.is-active .mob-nav-label{color:var(--color-primary);}
.mob-nav-item.nav-search .mob-nav-icon{background:var(--color-secondary);}
.mob-nav-item.nav-search .mob-nav-icon svg{color:var(--color-primary);}
.mobile-menu-panel{position:fixed;top:52px;left:0;width:100%;height:calc(100% - 52px - 60px);background:var(--color-bg);overflow-y:auto;z-index:var(--z-mob-menu);transform:translateX(-100%);transition:transform 0.35s ease,visibility 0s 0.35s;padding:16px 16px 32px;-webkit-overflow-scrolling:touch;visibility:hidden;}
.mobile-menu-panel.is-open{transform:translateX(0);visibility:visible;transition:transform 0.35s ease,visibility 0s 0s;}
.mob-ad-banner{display:flex;align-items:center;gap:14px;background:rgba(0,0,0,0.05);padding:12px 14px;margin-bottom:24px;border-radius:6px;}
.mob-ad-banner img{width:56px;height:56px;object-fit:cover;flex-shrink:0;border-radius:4px;}
.mob-ad-title{font-size:14px;font-weight:500;color:var(--color-text);margin-bottom:4px;}
.mob-ad-link{font-size:12px;color:var(--color-accent);}
.mob-menu-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 24px;}
.mob-menu-section{margin-bottom:20px;}
.mob-menu-title{font-family:var(--font-headline);font-size:22px;letter-spacing:0.04em;color:var(--color-primary);margin-bottom:6px;}
.mob-menu-item{display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:13px;color:var(--color-text);flex-wrap:wrap;}
.mob-menu-item a{flex:1;color:var(--color-text);}
.mob-menu-plus{width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--color-accent);cursor:pointer;background:none;border:none;flex-shrink:0;transition:transform 0.25s ease,color 0.25s ease;}
.mob-menu-item.is-open .mob-menu-plus{transform:rotate(45deg);color:var(--color-primary);}
.mob-submenu{display:none;width:100%;padding:2px 0 6px 12px;}
.mob-menu-item.is-open .mob-submenu{display:block;}
.mob-submenu li{padding:5px 0;}
.mob-submenu li a{font-size:12px;color:var(--color-accent);transition:color 0.2s ease;}
.mob-submenu li a:hover{color:var(--color-text);}
`,
);

// ─── 4. responsive.css ───
fs.writeFileSync(
  B("assets/css/responsive.css"),
  `/* RESPONSIVE */
@media(max-width:768px){
#site-header{display:none;}
.mobile-header{display:flex;}
.mobile-nav-bar{display:flex;}
body{padding-top:52px;}
.hero{display:block;height:calc(100vh - 52px - 60px);min-height:360px;position:relative;}
.hero-col{position:absolute;inset:0;opacity:0;pointer-events:none;transition:opacity 0.5s ease;border:none;}
.hero-col.is-active{opacity:1;pointer-events:auto;}
.hero-col__link{display:none;}
.hero-col__text{bottom:80px;left:20px;right:20px;}
.hero-col__label{font-size:28px;}
.hero-col__arrow{opacity:1;transform:none;font-size:12px;margin-top:8px;}
.hero-prev,.hero-next{display:flex;position:absolute;top:50%;transform:translateY(-50%);z-index:5;width:34px;height:34px;background:rgba(0,0,0,0.3);color:white;align-items:center;justify-content:center;cursor:pointer;font-size:20px;border:none;transition:background 0.2s;}
.hero-prev:hover,.hero-next:hover{background:rgba(0,0,0,0.55);}
.hero-prev{left:10px;}
.hero-next{right:10px;}
.hero-indicator{display:flex;flex-direction:column;position:absolute;bottom:28px;left:20px;z-index:5;gap:5px;}
.hero-indicator-text{font-size:12px;color:rgba(255,255,255,0.9);letter-spacing:0.06em;}
.hero-indicator-text .slide-current{color:var(--color-secondary);font-weight:600;}
.hero-indicator-bar{width:100px;height:1.5px;background:rgba(255,255,255,0.25);position:relative;}
.hero-indicator-fill{position:absolute;left:0;top:0;height:100%;background:var(--color-secondary);transition:width 0.3s ease;}
.scroll-section{grid-template-columns:1fr;min-height:unset;margin-top:32px;}
.scroll-col--left{min-height:280px;}
.scroll-col--mid,.scroll-col--right{border-left:none;border-top:2px solid var(--color-secondary);}
.scroll-col-img{min-height:180px;max-height:220px;}
.scroll-col-content{padding:24px 20px 20px;}
.scroll-col-img-bottom{min-height:180px;}
.cat-page-wrap{padding:12px 0 72px;}
.cat-container{max-width:100%;padding-bottom:16px;}
.cat-feature{grid-template-columns:1fr;}
.cat-feat-left{min-height:200px;}
.cat-feat-right{padding:24px 20px;}
.cat-grid{grid-template-columns:repeat(2,1fr);}
.cat-product-card:nth-child(4n){border-right:1px solid rgba(0,0,0,0.07);}
.cat-product-card:nth-child(2n){border-right:none;}
.site-footer{margin-bottom:60px;}
.footer-inner{grid-template-columns:1fr;gap:28px;}
.footer-links{flex-wrap:wrap;gap:24px;}
.footer-sns{align-items:flex-start;}
}
@media(min-width:769px) and (max-width:1100px){
.hero-col__label{font-size:28px;}
.scroll-section{grid-template-columns:5fr 3fr 3fr;}
.footer-inner{grid-template-columns:1fr 2fr;}
.footer-sns{grid-column:1 / -1;flex-direction:row;}
}
`,
);

// ─── 5. common.js ───
fs.writeFileSync(
  B("assets/js/common.js"),
  `/* COMMON JS — VOIDWEAR */
(function(){
'use strict';
var header=document.getElementById('site-header');
var dropdown=document.getElementById('mega-dropdown');
var searchBtn=document.getElementById('searchToggle');
var searchBtn2=document.getElementById('searchToggle2');
var searchBar=document.getElementById('searchBar');
var searchClose=document.getElementById('searchClose');
var gnbItems=document.querySelectorAll('.gnb-item');

/* Scroll: compact header */
window.addEventListener('scroll',function(){
  if(!header)return;
  if(window.scrollY>80){header.classList.add('is-compact');}
  else{header.classList.remove('is-compact');}
},{passive:true});

/* Mega Dropdown — per-menu content */
var dropdownTimer;
function showSet(menu){
  document.querySelectorAll('.dropdown-set').forEach(function(s){s.classList.remove('is-active');});
  var set=document.querySelector('.dropdown-set[data-for="'+menu+'"]');
  if(set)set.classList.add('is-active');
}
function openDropdown(item){
  clearTimeout(dropdownTimer);
  if(dropdown)dropdown.classList.add('is-open');
  gnbItems.forEach(function(i){i.classList.remove('is-active');});
  if(item){item.classList.add('is-active');var m=item.dataset.menu;if(m)showSet(m);}
}
function closeDropdown(){
  dropdownTimer=setTimeout(function(){
    if(dropdown)dropdown.classList.remove('is-open');
    gnbItems.forEach(function(i){i.classList.remove('is-active');});
  },150);
}
gnbItems.forEach(function(item){
  item.addEventListener('mouseenter',function(){openDropdown(item);});
  item.addEventListener('mouseleave',closeDropdown);
});
if(dropdown){
  dropdown.addEventListener('mouseenter',function(){clearTimeout(dropdownTimer);});
  dropdown.addEventListener('mouseleave',closeDropdown);
}
document.addEventListener('click',function(e){if(header&&!header.contains(e.target))closeDropdown();});

/* Search Toggle */
function toggleSearch(){
  if(!searchBar)return;
  searchBar.classList.toggle('is-open');
  if(searchBar.classList.contains('is-open')){
    var input=searchBar.querySelector('input');
    if(input)setTimeout(function(){input.focus();},50);
    if(dropdown)dropdown.classList.remove('is-open');
  }
}
if(searchBtn)searchBtn.addEventListener('click',toggleSearch);
if(searchBtn2)searchBtn2.addEventListener('click',toggleSearch);
if(searchClose)searchClose.addEventListener('click',function(){if(searchBar)searchBar.classList.remove('is-open');});
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){if(searchBar)searchBar.classList.remove('is-open');if(dropdown)dropdown.classList.remove('is-open');}
});

/* Mobile Menu */
var mobCatBtn=document.getElementById('mobCatBtn');
var mobileMenuPanel=document.getElementById('mobileMenuPanel');
function closeMobileMenu(){if(mobileMenuPanel)mobileMenuPanel.classList.remove('is-open');document.body.style.overflow='';}
if(mobCatBtn){
  mobCatBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(mobileMenuPanel&&mobileMenuPanel.classList.contains('is-open')){closeMobileMenu();}
    else{if(mobileMenuPanel)mobileMenuPanel.classList.add('is-open');document.body.style.overflow='hidden';}
  });
}
document.addEventListener('click',function(e){
  if(mobileMenuPanel&&mobileMenuPanel.classList.contains('is-open')&&!mobileMenuPanel.contains(e.target)&&mobCatBtn&&!mobCatBtn.contains(e.target)){closeMobileMenu();}
});

/* Mobile Accordion — + button expands submenu */
document.querySelectorAll('.mob-menu-plus').forEach(function(btn){
  btn.addEventListener('click',function(e){
    e.stopPropagation();
    var li=btn.closest('.mob-menu-item');
    if(li)li.classList.toggle('is-open');
  });
});
})();
`,
);

// ─── 6. main.js ───
fs.writeFileSync(
  B("assets/js/main.js"),
  `/* MAIN PAGE JS — VOIDWEAR */
(function(){
'use strict';
var heroItems=document.querySelectorAll('.hero-col');
var slideNum=document.getElementById('slideNum');
var slideBar=document.getElementById('slideBar');
var prevBtn=document.getElementById('heroPrev');
var nextBtn=document.getElementById('heroNext');
var TOTAL=heroItems.length,currentSlide=0,autoPlayTimer;
var AUTOPLAY_DELAY=4000;
function updateIndicator(){
  if(slideNum)slideNum.textContent=String(currentSlide+1).padStart(2,'0');
  if(slideBar)slideBar.style.width=((currentSlide+1)/TOTAL*100)+'%';
}
function goToSlide(index){
  heroItems[currentSlide].classList.remove('is-active');
  currentSlide=(index+TOTAL)%TOTAL;
  heroItems[currentSlide].classList.add('is-active');
  updateIndicator();
}
function startAutoPlay(){clearInterval(autoPlayTimer);autoPlayTimer=setInterval(function(){goToSlide(currentSlide+1);},AUTOPLAY_DELAY);}
if(TOTAL>0){
  heroItems[0].classList.add('is-active');
  updateIndicator();startAutoPlay();
  if(prevBtn)prevBtn.addEventListener('click',function(){goToSlide(currentSlide-1);startAutoPlay();});
  if(nextBtn)nextBtn.addEventListener('click',function(){goToSlide(currentSlide+1);startAutoPlay();});
  var touchStartX=0;var heroEl=document.querySelector('.hero');
  if(heroEl){
    heroEl.addEventListener('touchstart',function(e){touchStartX=e.changedTouches[0].clientX;},{passive:true});
    heroEl.addEventListener('touchend',function(e){var diff=touchStartX-e.changedTouches[0].clientX;if(Math.abs(diff)>40){goToSlide(diff>0?currentSlide+1:currentSlide-1);startAutoPlay();}},{passive:true});
  }
}
})();
`,
);

// ─── Helper: mobile menu HTML for both pages ───
function mobileMenu() {
  var menus = [
    {
      title: "OUTER",
      items: [
        {
          name: "코트",
          subs: ["싱글 코트", "더블 코트", "트렌치 코트", "울 코트"],
        },
        { name: "패딩", subs: ["롱패딩", "숏패딩", "경량패딩", "패딩조끼"] },
        {
          name: "자켓",
          subs: ["데님 자켓", "레더 자켓", "블루종", "사파리 자켓"],
        },
        {
          name: "블레이저",
          subs: ["싱글 블레이저", "더블 블레이저", "오버핏", "크롭"],
        },
        { name: "점퍼", subs: ["항공 점퍼", "코치 자켓", "아노락", "집업"] },
      ],
    },
    {
      title: "TOP",
      items: [
        { name: "반팔 티셔츠", subs: ["라운드넥", "오버핏", "크롭", "프린트"] },
        {
          name: "긴팔 티셔츠",
          subs: ["스트라이프", "터틀넥", "헨리넥", "레이어드"],
        },
        {
          name: "후드 / 맨투맨",
          subs: ["오버핏 후디", "크롭 후디", "베이직 맨투맨", "피그먼트"],
        },
        {
          name: "니트 / 스웨터",
          subs: ["라운드 니트", "V넥 니트", "카디건", "니트 베스트"],
        },
        {
          name: "셔츠",
          subs: ["옥스포드", "린넨", "데님 셔츠", "오버핏 셔츠"],
        },
      ],
    },
    {
      title: "BOTTOM",
      items: [
        { name: "데님", subs: ["스트레이트", "와이드", "부츠컷", "테이퍼드"] },
        {
          name: "슬랙스",
          subs: ["와이드 슬랙스", "세미 와이드", "스트레이트", "크롭"],
        },
        {
          name: "조거 / 트레이닝",
          subs: ["조거팬츠", "트레이닝", "스웨트팬츠", "트랙"],
        },
        {
          name: "카고",
          subs: ["와이드 카고", "밀리터리", "스트릿 카고", "숏 카고"],
        },
        {
          name: "숏팬츠",
          subs: ["데님 숏팬츠", "치노 숏팬츠", "나일론", "스웨트"],
        },
      ],
    },
    {
      title: "DRESS",
      items: [
        { name: "미니 원피스", subs: ["A라인", "셔츠형", "니트형", "캐주얼"] },
        {
          name: "미디 원피스",
          subs: ["랩 원피스", "플리츠", "셔츠 원피스", "린넨"],
        },
        { name: "롱 원피스", subs: ["맥시", "티어드", "슬립", "오버사이즈"] },
        { name: "점프수트", subs: ["와이드", "유틸리티", "데님", "캐주얼"] },
        {
          name: "투피스 세트",
          subs: ["상하 세트", "니트 세트", "린넨 세트", "저지 세트"],
        },
      ],
    },
    {
      title: "ACC",
      items: [
        { name: "모자", subs: ["볼캡", "비니", "버킷햇", "피셔맨"] },
        { name: "가방", subs: ["백팩", "토트백", "크로스백", "숄더백"] },
        { name: "벨트", subs: ["레더 벨트", "캔버스", "체인", "링 벨트"] },
        { name: "양말", subs: ["크루삭스", "앵클삭스", "롱삭스", "스포츠"] },
        {
          name: "스카프 / 주얼리",
          subs: ["머플러", "넥커치프", "반지", "네크리스"],
        },
      ],
    },
    {
      title: "SHOES",
      items: [
        { name: "스니커즈", subs: ["로우탑", "하이탑", "캔버스", "러닝화"] },
        { name: "부츠", subs: ["첼시 부츠", "워커", "사이드집", "앵클 부츠"] },
        { name: "로퍼", subs: ["페니 로퍼", "태슬", "청키", "뮬"] },
        {
          name: "샌들 / 슬리퍼",
          subs: ["스트랩", "슬라이드", "플립플랍", "스포츠 샌들"],
        },
        { name: "포멀", subs: ["더비", "옥스포드", "몽크스트랩", "플랫폼"] },
      ],
    },
    {
      title: "SALE",
      items: [
        {
          name: "아우터 세일",
          subs: ["코트 ~50%", "자켓 ~40%", "패딩 ~60%", "점퍼 ~35%"],
        },
        {
          name: "상의 세일",
          subs: ["티셔츠 ~30%", "후디 ~40%", "니트 ~50%", "셔츠 ~25%"],
        },
        {
          name: "하의 세일",
          subs: ["데님 ~40%", "슬랙스 ~30%", "카고 ~35%", "조거 ~25%"],
        },
        {
          name: "원피스 세일",
          subs: ["미디 ~40%", "롱 ~35%", "점프수트 ~30%"],
        },
        {
          name: "악세서리 세일",
          subs: ["모자 ~30%", "가방 ~40%", "슈즈 ~35%"],
        },
      ],
    },
    {
      title: "NEW",
      items: [
        { name: "금주 신상", subs: ["아우터", "상의", "하의", "원피스"] },
        { name: "이번달 입고", subs: ["3월 1주차", "3월 2주차", "3월 3주차"] },
        { name: "기획전", subs: ["봄 컬렉션", "유니섹스 특집", "컬러 기획전"] },
        {
          name: "콜라보",
          subs: ["아티스트 콜라보", "브랜드 콜라보", "한정판"],
        },
        {
          name: "프리오더",
          subs: ["S/S 프리오더", "리미티드 에디션", "얼리버드"],
        },
      ],
    },
  ];
  var html = "";
  menus.forEach(function (m) {
    html +=
      '<div class="mob-menu-section"><h3 class="mob-menu-title">' +
      m.title +
      "</h3><ul>";
    m.items.forEach(function (item) {
      html +=
        '<li class="mob-menu-item"><a href="#">' +
        item.name +
        '</a><button class="mob-menu-plus">+</button>';
      html += '<ul class="mob-submenu">';
      item.subs.forEach(function (s) {
        html += '<li><a href="#">' + s + "</a></li>";
      });
      html += "</ul></li>";
    });
    html += "</ul></div>";
  });
  return html;
}

// ─── Helper: dropdown sets HTML for mega menu ───
function dropdownSets() {
  var data = {
    outer: [
      ["코트", ["싱글 코트", "더블 코트", "트렌치 코트", "울 코트"]],
      ["패딩", ["롱패딩", "숏패딩", "경량패딩", "패딩조끼"]],
      ["자켓", ["데님 자켓", "레더 자켓", "블루종", "사파리 자켓"]],
      ["블레이저", ["싱글", "더블", "오버핏", "크롭"]],
      ["점퍼", ["항공 점퍼", "코치 자켓", "아노락", "집업"]],
    ],
    top: [
      ["반팔 티셔츠", ["라운드넥", "오버핏", "크롭", "프린트"]],
      ["긴팔 티셔츠", ["스트라이프", "터틀넥", "헨리넥", "레이어드"]],
      [
        "후드 / 맨투맨",
        ["오버핏 후디", "크롭 후디", "베이직 맨투맨", "피그먼트"],
      ],
      ["니트 / 스웨터", ["라운드 니트", "V넥 니트", "카디건", "니트 베스트"]],
      ["셔츠", ["옥스포드", "린넨", "데님 셔츠", "오버핏 셔츠"]],
    ],
    bottom: [
      ["데님", ["스트레이트", "와이드", "부츠컷", "테이퍼드"]],
      ["슬랙스", ["와이드", "세미 와이드", "스트레이트", "크롭"]],
      ["조거 / 트레이닝", ["조거팬츠", "트레이닝", "스웨트팬츠", "트랙"]],
      ["카고", ["와이드 카고", "밀리터리", "스트릿 카고", "숏 카고"]],
      ["숏팬츠", ["데님 숏팬츠", "치노", "나일론", "스웨트"]],
    ],
    dress: [
      ["미니", ["A라인", "셔츠형", "니트형", "캐주얼"]],
      ["미디", ["랩 원피스", "플리츠", "셔츠 원피스", "린넨"]],
      ["롱", ["맥시", "티어드", "슬립", "오버사이즈"]],
      ["점프수트", ["와이드", "유틸리티", "데님", "캐주얼"]],
      ["투피스 세트", ["상하 세트", "니트 세트", "린넨 세트", "저지 세트"]],
    ],
    acc: [
      ["모자", ["볼캡", "비니", "버킷햇", "피셔맨"]],
      ["가방", ["백팩", "토트백", "크로스백", "숄더백"]],
      ["벨트", ["레더", "캔버스", "체인", "링 벨트"]],
      ["양말", ["크루삭스", "앵클삭스", "롱삭스", "스포츠"]],
      ["스카프 / 주얼리", ["머플러", "넥커치프", "반지", "네크리스"]],
    ],
    shoes: [
      ["스니커즈", ["로우탑", "하이탑", "캔버스", "러닝화"]],
      ["부츠", ["첼시 부츠", "워커", "사이드집", "앵클 부츠"]],
      ["로퍼", ["페니 로퍼", "태슬", "청키", "뮬"]],
      ["샌들 / 슬리퍼", ["스트랩", "슬라이드", "플립플랍", "스포츠 샌들"]],
      ["포멀", ["더비", "옥스포드", "몽크스트랩", "플랫폼"]],
    ],
    sale: [
      ["아우터", ["코트 ~50%", "자켓 ~40%", "패딩 ~60%", "점퍼 ~35%"]],
      ["상의", ["티셔츠 ~30%", "후디 ~40%", "니트 ~50%", "셔츠 ~25%"]],
      ["하의", ["데님 ~40%", "슬랙스 ~30%", "카고 ~35%", "조거 ~25%"]],
      ["원피스", ["미디 ~40%", "롱 ~35%", "점프수트 ~30%"]],
      ["악세서리", ["모자 ~30%", "가방 ~40%", "슈즈 ~35%"]],
    ],
    new_arr: [
      ["금주 신상", ["아우터", "상의", "하의", "원피스"]],
      ["이번달 입고", ["3월 1주차", "3월 2주차", "3월 3주차"]],
      ["기획전", ["봄 컬렉션", "유니섹스 특집", "컬러 기획전"]],
      ["콜라보", ["아티스트", "브랜드", "한정판"]],
      ["프리오더", ["S/S 프리오더", "리미티드", "얼리버드"]],
    ],
  };
  var html = "";
  Object.keys(data).forEach(function (key) {
    html +=
      '<div class="dropdown-set" data-for="' +
      key +
      '"><div class="dropdown-grid">';
    data[key].forEach(function (col) {
      html +=
        '<div class="dropdown-col"><span class="dropdown-col-title">' +
        col[0] +
        "</span><ul>";
      col[1].forEach(function (item) {
        html += '<li><a href="#">' + item + "</a></li>";
      });
      html += "</ul></div>";
    });
    html += "</div></div>";
  });
  return html;
}

// ─── Helper: GNB items HTML ───
var gnbMenus = [
  { key: "outer", label: "OUTER" },
  { key: "top", label: "TOP" },
  { key: "bottom", label: "BOTTOM" },
  { key: "dress", label: "DRESS" },
  { key: "acc", label: "ACC" },
  { key: "shoes", label: "SHOES" },
  { key: "sale", label: "SALE" },
  { key: "new_arr", label: "NEW" },
];
function gnbFull(activeKey) {
  return gnbMenus
    .map(function (m) {
      var cls = m.key === activeKey ? " is-active" : "";
      return (
        '<div class="gnb-item' +
        cls +
        '" data-menu="' +
        m.key +
        '"><a href="category.html" class="gnb-link">' +
        m.label +
        "</a></div>"
      );
    })
    .join("");
}
function gnbCompact(activeKey) {
  return gnbMenus
    .map(function (m) {
      var cls = m.key === activeKey ? ' class="is-active"' : "";
      return '<a href="category.html"' + cls + ">" + m.label + "</a>";
    })
    .join("");
}

// ─── Helper: product card for category grid ───
var catProducts = [
  ["VOID 오버사이즈 코트", "30%", "₩189,000"],
  ["레이어드 트렌치 코트", "20%", "₩156,000"],
  ["유니섹스 보머 자켓", "15%", "₩98,000"],
  ["VOID 패디드 베스트", "25%", "₩67,000"],
  ["사일런트 윈드브레이커", "10%", "₩78,000"],
  ["다크 데님 자켓", "35%", "₩55,000"],
  ["오버사이즈 후디 코트", "20%", "₩112,000"],
  ["유틸리티 카고 코트", "30%", "₩139,000"],
  ["크롭 레더 자켓", "15%", "₩168,000"],
  ["워시드 코튼 자켓", "20%", "₩89,000"],
  ["테크 쉘 파카", "25%", "₩225,000"],
  ["릴렉스핏 블레이저", "10%", "₩135,000"],
  ["나일론 코치 자켓", "30%", "₩72,000"],
  ["퀼팅 라이너 자켓", "20%", "₩95,000"],
  ["더블 울 코트", "15%", "₩248,000"],
  ["스트릿 사파리 자켓", "25%", "₩108,000"],
  ["VOID 항공 점퍼", "35%", "₩128,000"],
  ["오버다이 워크 자켓", "20%", "₩85,000"],
  ["리버서블 플리스 코트", "15%", "₩145,000"],
  ["밀리터리 M-65 자켓", "30%", "₩119,000"],
  ["하프집업 아노락", "25%", "₩68,000"],
  ["스냅버튼 셔츠자켓", "20%", "₩92,000"],
  ["와이드 트렌치 베스트", "10%", "₩78,000"],
  ["디태처블 후드 코트", "15%", "₩198,000"],
  ["크롭 나일론 점퍼", "30%", "₩65,000"],
  ["빈티지 워싱 코트", "20%", "₩175,000"],
  ["테일러드 더블코트", "10%", "₩265,000"],
  ["스포츠 트랙 자켓", "35%", "₩58,000"],
  ["오버핏 데님 트러커", "25%", "₩82,000"],
  ["경량 구스다운 베스트", "15%", "₩155,000"],
  ["리넨 블렌드 블레이저", "20%", "₩118,000"],
  ["스트릿 가죽 바이커", "10%", "₩285,000"],
];
function catGrid() {
  return catProducts
    .map(function (p, i) {
      var imgNum = String((i % 12) + 1).padStart(2, "0");
      return (
        '<div class="cat-product-card"><div class="cat-product-card__thumb"><img src="assets/images/products/product_' +
        imgNum +
        '.svg" alt="' +
        p[0] +
        '" loading="lazy"></div><p class="cat-product-card__name">' +
        p[0] +
        '</p><div class="cat-product-card__row"><span class="cat-product-card__discount">' +
        p[1] +
        '</span><span class="cat-product-card__price">' +
        p[2] +
        "</span></div></div>"
      );
    })
    .join("");
}

// ─── 7. index.html ───
var mobNavHome =
  '<nav class="mobile-nav-bar"><a href="index.html" class="mob-nav-item is-active" data-nav="home"><span class="mob-nav-icon"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9.5L10 3l7 6.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M7 18v-5h6v5"/></svg></span><span class="mob-nav-label">Home</span></a><a href="#" class="mob-nav-item" data-nav="category" id="mobCatBtn"><span class="mob-nav-icon"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="11" y="3" width="6" height="6" rx="1"/><rect x="3" y="11" width="6" height="6" rx="1"/><rect x="11" y="11" width="6" height="6" rx="1"/></svg></span><span class="mob-nav-label">Category</span></a><a href="#" class="mob-nav-item nav-search"><span class="mob-nav-icon"><svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="7.5" cy="7.5" r="5.5"/><line x1="11.5" y1="11.5" x2="16" y2="16" stroke-linecap="round"/></svg></span><span class="mob-nav-label">Search</span></a><a href="#" class="mob-nav-item" data-nav="like"><span class="mob-nav-icon"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 16.5S3 12 3 7a4 4 0 017-2.7A4 4 0 0117 7c0 5-7 9.5-7 9.5z"/></svg></span><span class="mob-nav-label">Like</span></a><a href="#" class="mob-nav-item" data-nav="mypage"><span class="mob-nav-icon"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="7" r="3.5"/><path d="M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke-linecap="round"/></svg></span><span class="mob-nav-label">My page</span></a></nav>';

var mobNavCat = mobNavHome
  .replace(
    'mob-nav-item is-active" data-nav="home"',
    'mob-nav-item" data-nav="home"',
  )
  .replace(
    'mob-nav-item" data-nav="category"',
    'mob-nav-item is-active" data-nav="category"',
  );

var searchSvg =
  '<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="7.5" cy="7.5" r="5.5"/><line x1="11.5" y1="11.5" x2="16" y2="16" stroke-linecap="round"/></svg>';

fs.writeFileSync(
  B("index.html"),
  '<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>VOIDWEAR — Wear the silence.</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"><link rel="stylesheet" href="assets/css/reset.css"><link rel="stylesheet" href="assets/css/variables.css"><link rel="stylesheet" href="assets/css/common.css"><link rel="stylesheet" href="assets/css/header.css"><link rel="stylesheet" href="assets/css/footer.css"><link rel="stylesheet" href="assets/css/main.css"><link rel="stylesheet" href="assets/css/responsive.css"></head><body>' +
    '<header id="site-header"><div class="header-full"><div class="header-util-row"><span class="header-year">2026</span><nav class="header-util-links"><a href="#">My Page</a><a href="#">My Like</a><a href="#">Shopping Bag</a><a href="#">Login</a></nav></div><div class="header-logo-row"><a href="index.html" class="header-logo-full">VOIDWEAR</a></div><div class="header-nav-row"><nav class="header-gnb" id="headerGnb">' +
    gnbFull("") +
    '</nav><button class="header-search-btn" id="searchToggle" aria-label="검색">' +
    searchSvg +
    "</button></div></div>" +
    '<div class="header-compact"><a href="index.html" class="header-compact-logo">VOIDWEAR</a><nav class="header-compact-nav">' +
    gnbCompact("") +
    '</nav><div class="header-compact-right"><div class="header-compact-dots"><span class="compact-dot"></span><span class="compact-dot"></span><span class="compact-dot"></span><span class="compact-dot"></span></div><button class="header-search-btn" id="searchToggle2" aria-label="검색">' +
    searchSvg +
    "</button></div></div>" +
    '<div class="header-search-bar" id="searchBar"><input type="text" placeholder="검색어를 입력하세요" id="searchInput"><button class="search-close-btn" id="searchClose">&#x2715;</button></div>' +
    '<div id="mega-dropdown">' +
    dropdownSets() +
    "</div></header>" +
    '<div class="mobile-header"><a href="index.html" class="mobile-logo">VOIDWEAR</a></div>' +
    '<div class="mobile-menu-panel" id="mobileMenuPanel"><div class="mob-ad-banner"><img src="assets/images/mobile/ad_thumb.svg" alt="AD"><div><p class="mob-ad-title">VOIDWEAR 2026 S/S 신상 입고</p><a href="#" class="mob-ad-link">바로가기 ›</a></div></div><div class="mob-menu-grid">' +
    mobileMenu() +
    "</div></div>" +
    '<main><section class="hero" id="hero">' +
    '<div class="hero-col" id="heroCol0"><a href="category.html" class="hero-col__link"></a><div class="hero-col__bg" style="background-image:url(\'assets/images/hero/hero_01.svg\')"></div><div class="hero-col__overlay"></div><div class="hero-col__text"><span class="hero-col__label">2026 NEW ARRIVAL</span><span class="hero-col__arrow">SHOP NOW &#8594;</span></div></div>' +
    '<div class="hero-col" id="heroCol1"><a href="category.html" class="hero-col__link"></a><div class="hero-col__bg" style="background-image:url(\'assets/images/hero/hero_02.svg\')"></div><div class="hero-col__overlay"></div><div class="hero-col__text"><span class="hero-col__label">S/S STREET COLLECTION</span><span class="hero-col__arrow">EXPLORE &#8594;</span></div></div>' +
    '<div class="hero-col" id="heroCol2"><a href="category.html" class="hero-col__link"></a><div class="hero-col__bg" style="background-image:url(\'assets/images/hero/hero_03.svg\')"></div><div class="hero-col__overlay"></div><div class="hero-col__text"><span class="hero-col__label">UNISEX ESSENTIAL</span><span class="hero-col__arrow">VIEW ALL &#8594;</span></div></div>' +
    '<button class="hero-prev" id="heroPrev">&#8249;</button><button class="hero-next" id="heroNext">&#8250;</button><div class="hero-indicator"><div class="hero-indicator-text"><span class="slide-current" id="slideNum">01</span> / 03</div><div class="hero-indicator-bar"><div class="hero-indicator-fill" id="slideBar" style="width:33.3%"></div></div></div></section>' +
    '<section class="scroll-section" id="scrollSection">' +
    '<div class="scroll-col scroll-col--left" style="background-image:url(\'assets/images/sub/sub_banner_01.svg\')"><div class="scroll-left-text"><span>2026 S/S</span><span>LOOKBOOK</span></div></div>' +
    '<div class="scroll-col scroll-col--mid"><div class="scroll-col-img"><img src="assets/images/products/product_07.svg" alt="STREET OUTER"></div><div class="scroll-col-content"><h2 class="scroll-col-title">STREET OUTER</h2><p class="scroll-col-desc">도시적 무드의 오버사이즈 아우터 컬렉션.<br>거리 위의 존재감을 완성하는 필수 아이템.</p><hr class="scroll-col-sep">' +
    '<div class="scroll-product"><div class="scroll-product__thumb"><img src="assets/images/products/product_01.svg" alt="VOID 오버사이즈 코트"></div><div class="scroll-product__info"><p class="scroll-product__name">VOID 오버사이즈 코트</p><p class="scroll-product__desc">헤비 울 블렌드 / 드롭 숄더 / 유니섹스</p><div class="scroll-product__row"><span class="scroll-product__discount">30%</span><span class="scroll-product__price">₩189,000</span></div></div></div>' +
    '<div class="scroll-product"><div class="scroll-product__thumb"><img src="assets/images/products/product_02.svg" alt="레이어드 트렌치 코트"></div><div class="scroll-product__info"><p class="scroll-product__name">레이어드 트렌치 코트</p><p class="scroll-product__desc">코튼 트윌 / 더블 브레스티드 / 벨트 포함</p><div class="scroll-product__row"><span class="scroll-product__discount">20%</span><span class="scroll-product__price">₩156,000</span></div></div></div>' +
    '</div><div class="scroll-col-img-bottom"><img src="assets/images/products/product_03.svg" alt=""></div></div>' +
    '<div class="scroll-col scroll-col--right"><div class="scroll-col-img"><img src="assets/images/products/product_08.svg" alt="MINIMAL TOP"></div><div class="scroll-col-content"><h2 class="scroll-col-title">MINIMAL TOP</h2><p class="scroll-col-desc">심플하면서도 존재감 있는 유니섹스 상의.<br>어디에든 어울리는 데일리 에센셜.</p><hr class="scroll-col-sep">' +
    '<div class="scroll-product"><div class="scroll-product__thumb"><img src="assets/images/products/product_04.svg" alt="VOID 그래픽 티셔츠"></div><div class="scroll-product__info"><p class="scroll-product__name">VOID 그래픽 티셔츠</p><p class="scroll-product__desc">코튼 100% / 오버핏 / 시즌 프린트</p><div class="scroll-product__row"><span class="scroll-product__discount">15%</span><span class="scroll-product__price">₩48,000</span></div></div></div>' +
    '<div class="scroll-product"><div class="scroll-product__thumb"><img src="assets/images/products/product_05.svg" alt="DARK 오버핏 후디"></div><div class="scroll-product__info"><p class="scroll-product__name">DARK 오버핏 후디</p><p class="scroll-product__desc">기모 안감 / 드롭 숄더 / 더블 스티치</p><div class="scroll-product__row"><span class="scroll-product__discount">25%</span><span class="scroll-product__price">₩89,000</span></div></div></div>' +
    '</div><div class="scroll-col-img-bottom"><img src="assets/images/products/product_06.svg" alt=""></div></div>' +
    "</section></main>" +
    '<footer class="site-footer"><div class="footer-inner"><div class="footer-brand"><a href="index.html" class="footer-logo">VOIDWEAR</a><p class="footer-slogan">Wear the silence.</p></div><div class="footer-links"><div class="footer-link-group"><h4>SHOP</h4><ul><li><a href="#">New Arrivals</a></li><li><a href="#">Best Sellers</a></li><li><a href="#">Sale</a></li><li><a href="#">Lookbook</a></li></ul></div><div class="footer-link-group"><h4>SUPPORT</h4><ul><li><a href="#">고객센터</a></li><li><a href="#">배송 안내</a></li><li><a href="#">교환 / 반품</a></li><li><a href="#">사이즈 가이드</a></li></ul></div><div class="footer-link-group"><h4>INFO</h4><ul><li><a href="#">브랜드 소개</a></li><li><a href="#">이용약관</a></li><li><a href="#">개인정보처리방침</a></li><li><a href="#">사업자 정보</a></li></ul></div></div><div class="footer-sns"><div class="footer-sns-links"><a href="#" aria-label="Instagram">IG</a><a href="#" aria-label="X">X</a></div></div></div><div class="footer-bottom"><p class="footer-copy">&copy; 2026 VOIDWEAR. All rights reserved.</p><nav class="footer-bottom-links"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookie</a></nav></div></footer>' +
    mobNavHome +
    '<script src="assets/js/common.js"><\/script><script src="assets/js/main.js"><\/script></body></html>',
);

// ─── 8. category.html ─── (NO desktop header!)
fs.writeFileSync(
  B("category.html"),
  '<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>OUTER — VOIDWEAR</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"><link rel="stylesheet" href="assets/css/reset.css"><link rel="stylesheet" href="assets/css/variables.css"><link rel="stylesheet" href="assets/css/common.css"><link rel="stylesheet" href="assets/css/header.css"><link rel="stylesheet" href="assets/css/footer.css"><link rel="stylesheet" href="assets/css/category.css"><link rel="stylesheet" href="assets/css/responsive.css"></head><body>' +
    '<div class="mobile-header"><a href="index.html" class="mobile-logo">VOIDWEAR</a></div>' +
    '<div class="mobile-menu-panel" id="mobileMenuPanel"><div class="mob-ad-banner"><img src="assets/images/mobile/ad_thumb.svg" alt="AD"><div><p class="mob-ad-title">VOIDWEAR 2026 S/S 신상 입고</p><a href="#" class="mob-ad-link">바로가기 ›</a></div></div><div class="mob-menu-grid">' +
    mobileMenu() +
    "</div></div>" +
    '<div class="cat-page-wrap"><div class="cat-container">' +
    '<div class="cat-header"><a href="index.html" class="cat-header-logo">VOIDWEAR</a></div>' +
    '<div class="cat-tabs"><button class="cat-tab active">All</button><button class="cat-tab">New</button><button class="cat-tab">Best</button><button class="cat-tab">Outer</button><button class="cat-tab">Top</button><button class="cat-tab">Bottom</button><button class="cat-tab">Dress</button><button class="cat-tab">ACC</button><button class="cat-tab">Shoes</button></div>' +
    '<div class="cat-feature"><div class="cat-feat-left"><img src="assets/images/sub/sub_feature_01.svg" alt="Feature"><div class="cat-feat-left-text"><span>OUTER</span><span>COLLECTION</span></div></div>' +
    '<div class="cat-feat-right"><h2 class="cat-feat-title">2026 S/S OUTER</h2><p class="cat-feat-desc">스트리트 감성의 오버핏 아우터 컬렉션. 고대비 컬러와 유니섹스 실루엣으로 완성한 시즌 라인업.</p><hr class="cat-feat-sep">' +
    '<div class="cat-feat-product"><div class="cat-feat-product__thumb"><img src="assets/images/products/product_01.svg" alt=""></div><div class="cat-feat-product__info"><p class="cat-feat-product__name">VOID 오버사이즈 코트</p><p class="cat-feat-product__desc">헤비 울 블렌드 / 드롭 숄더 / 유니섹스</p><div class="cat-feat-product__row"><span class="cat-feat-product__discount">30%</span><span class="cat-feat-product__price">₩189,000</span></div></div></div>' +
    '<div class="cat-feat-product"><div class="cat-feat-product__thumb"><img src="assets/images/products/product_02.svg" alt=""></div><div class="cat-feat-product__info"><p class="cat-feat-product__name">레이어드 트렌치 코트</p><p class="cat-feat-product__desc">코튼 트윌 / 더블 브레스티드 / 벨트 포함</p><div class="cat-feat-product__row"><span class="cat-feat-product__discount">20%</span><span class="cat-feat-product__price">₩156,000</span></div></div></div>' +
    '<div class="cat-feat-product"><div class="cat-feat-product__thumb"><img src="assets/images/products/product_03.svg" alt=""></div><div class="cat-feat-product__info"><p class="cat-feat-product__name">유니섹스 보머 자켓</p><p class="cat-feat-product__desc">나일론 쉘 / 립 커프 / 에센셜 핏</p><div class="cat-feat-product__row"><span class="cat-feat-product__discount">15%</span><span class="cat-feat-product__price">₩98,000</span></div></div></div>' +
    "</div></div>" +
    '<div class="cat-filter-bar"><div class="cat-filter-tabs"><button class="cat-filter-tab active">전체</button><button class="cat-filter-tab">신상품</button><button class="cat-filter-tab">인기순</button><button class="cat-filter-tab">낮은가격</button><button class="cat-filter-tab">높은가격</button></div><button class="cat-more-btn">more ›</button></div>' +
    '<div class="cat-grid">' +
    catGrid() +
    "</div>" +
    "</div></div>" +
    '<footer class="site-footer"><div class="footer-inner"><div class="footer-brand"><a href="index.html" class="footer-logo">VOIDWEAR</a><p class="footer-slogan">Wear the silence.</p></div><div class="footer-links"><div class="footer-link-group"><h4>SHOP</h4><ul><li><a href="#">New Arrivals</a></li><li><a href="#">Best Sellers</a></li><li><a href="#">Sale</a></li><li><a href="#">Lookbook</a></li></ul></div><div class="footer-link-group"><h4>SUPPORT</h4><ul><li><a href="#">고객센터</a></li><li><a href="#">배송 안내</a></li><li><a href="#">교환 / 반품</a></li><li><a href="#">사이즈 가이드</a></li></ul></div><div class="footer-link-group"><h4>INFO</h4><ul><li><a href="#">브랜드 소개</a></li><li><a href="#">이용약관</a></li><li><a href="#">개인정보처리방침</a></li><li><a href="#">사업자 정보</a></li></ul></div></div><div class="footer-sns"><div class="footer-sns-links"><a href="#" aria-label="Instagram">IG</a><a href="#" aria-label="X">X</a></div></div></div><div class="footer-bottom"><p class="footer-copy">&copy; 2026 VOIDWEAR. All rights reserved.</p><nav class="footer-bottom-links"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookie</a></nav></div></footer>' +
    mobNavCat +
    '<script src="assets/js/common.js"><\/script><script src="assets/js/category.js"><\/script></body></html>',
);

console.log("All files updated successfully!");
