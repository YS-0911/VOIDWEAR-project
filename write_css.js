const fs = require("fs");
const base = "C:/Users/PC/Desktop/shopping/assets/css/";

fs.writeFileSync(
  base + "header.css",
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
.gnb-item:hover .gnb-link,.gnb-item.is-open .gnb-link{color:var(--color-primary);}
.gnb-item:hover .gnb-link::after,.gnb-item.is-open .gnb-link::after{transform:scaleX(1);}
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
.mobile-menu-panel{display:none;position:fixed;top:52px;left:0;width:100%;height:calc(100% - 52px - 60px);background:var(--color-bg);overflow-y:auto;z-index:var(--z-mob-menu);transform:translateX(-100%);transition:transform 0.35s ease;padding:16px 16px 32px;-webkit-overflow-scrolling:touch;}
.mobile-menu-panel.is-open{display:block;transform:translateX(0);}
.mob-ad-banner{display:flex;align-items:center;gap:14px;background:rgba(0,0,0,0.05);padding:12px 14px;margin-bottom:24px;}
.mob-ad-banner img{width:56px;height:56px;object-fit:cover;flex-shrink:0;}
.mob-ad-title{font-size:14px;font-weight:500;color:var(--color-text);margin-bottom:4px;}
.mob-ad-link{font-size:12px;color:var(--color-accent);}
.mob-menu-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 24px;}
.mob-menu-section{margin-bottom:20px;}
.mob-menu-title{font-family:var(--font-headline);font-size:22px;letter-spacing:0.04em;color:var(--color-primary);margin-bottom:6px;}
.mob-menu-item{display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:13px;color:var(--color-text);}
.mob-menu-item a{flex:1;color:var(--color-text);}
.mob-menu-plus{width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--color-accent);cursor:pointer;background:none;border:none;flex-shrink:0;transition:transform 0.2s ease,color 0.2s ease;}
.mob-menu-item.is-open .mob-menu-plus{transform:rotate(45deg);color:var(--color-primary);}
`,
);

console.log("header.css done");

fs.writeFileSync(
  base + "main.css",
  `/* MAIN PAGE */
.hero{display:grid;grid-template-columns:1fr 1fr 1fr;height:calc(100vh - var(--header-full-h));min-height:480px;overflow:hidden;}
.hero-col{position:relative;overflow:hidden;cursor:pointer;border-right:1px solid rgba(255,255,255,0.15);}
.hero-col:last-child{border-right:none;}
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

.scroll-section{display:grid;grid-template-columns:3fr 2fr 2fr;min-height:700px;}
.scroll-col{position:relative;overflow:hidden;}
.scroll-col--left{background-color:#B0B0B0;background-size:cover;background-position:center;min-height:700px;display:flex;align-items:flex-end;}
.scroll-col--left::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.55) 0%,rgba(0,0,0,0.04) 55%);pointer-events:none;}
.scroll-left-text{padding:32px 28px;z-index:2;position:relative;}
.scroll-left-text span{font-family:var(--font-headline);font-size:clamp(26px,3vw,46px);letter-spacing:0.05em;color:var(--color-white);line-height:1.05;display:block;}
.scroll-col--mid,.scroll-col--right{display:flex;flex-direction:column;border-left:2px solid var(--color-secondary);}
.scroll-col-img{flex:1;overflow:hidden;background:#C0C0C0;min-height:300px;}
.scroll-col-img img{width:100%;height:100%;object-fit:cover;}
.scroll-col-content{padding:22px 20px 18px;background:var(--color-bg);flex-shrink:0;}
.scroll-col-title{font-family:var(--font-headline);font-size:30px;letter-spacing:0.04em;color:var(--color-primary);margin-bottom:5px;}
.scroll-col-desc{font-size:11.5px;color:var(--color-accent);line-height:1.6;margin-bottom:14px;}
.scroll-col-sep{border:none;border-top:1px solid rgba(0,0,0,0.1);margin-bottom:14px;}
.scroll-product{display:flex;align-items:flex-start;gap:10px;padding:9px 0;border-bottom:1px solid rgba(0,0,0,0.07);cursor:pointer;}
.scroll-product:last-child{border-bottom:none;}
.scroll-product__thumb{width:60px;height:70px;background:#C8C8C8;flex-shrink:0;overflow:hidden;}
.scroll-product__thumb img{width:100%;height:100%;object-fit:cover;transition:transform 0.4s ease;}
.scroll-product:hover .scroll-product__thumb img{transform:scale(1.06);}
.scroll-product__info{flex:1;min-width:0;}
.scroll-product__name{font-size:12px;font-weight:600;color:var(--color-text);line-height:1.4;margin-bottom:3px;}
.scroll-product__desc{font-size:11px;color:var(--color-accent);line-height:1.5;margin-bottom:5px;}
.scroll-product__row{display:flex;align-items:center;gap:7px;}
.scroll-product__discount{font-size:11px;font-weight:700;color:var(--color-discount);}
.scroll-product__price{font-size:12px;font-weight:600;color:var(--color-text);}
.scroll-col-img-bottom{height:180px;overflow:hidden;background:#B8B8B8;flex-shrink:0;}
.scroll-col-img-bottom img{width:100%;height:100%;object-fit:cover;}
`,
);
console.log("main.css done");

fs.writeFileSync(
  base + "category.css",
  `/* CATEGORY PAGE */
.cat-page-wrap{background:var(--color-primary);min-height:100vh;padding:28px 0 48px;}
.cat-container{background:var(--color-bg);max-width:760px;margin:0 auto;}
.cat-header{text-align:center;padding:28px 24px 18px;border-bottom:1px solid rgba(0,0,0,0.08);}
.cat-header-logo{font-family:var(--font-headline);font-size:46px;letter-spacing:0.05em;color:var(--color-primary);display:inline-block;}
.cat-tabs{display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap;padding:14px 16px;border-bottom:1px solid rgba(0,0,0,0.08);}
.cat-tab{padding:5px 16px;border:1px solid #C4C4C4;border-radius:100px;font-size:12px;color:var(--color-text);background:transparent;cursor:pointer;transition:all 0.2s ease;letter-spacing:0.02em;white-space:nowrap;}
.cat-tab:hover,.cat-tab.active{background:var(--color-primary);border-color:var(--color-primary);color:var(--color-bg);}
.cat-feature{display:grid;grid-template-columns:5fr 5fr;}
.cat-feat-left{position:relative;overflow:hidden;background:#C0C0C0;min-height:280px;display:flex;align-items:center;justify-content:center;}
.cat-feat-left img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}
.cat-feat-left-text{position:relative;z-index:1;text-align:center;}
.cat-feat-left-text span{font-family:var(--font-headline);font-size:clamp(22px,3.5vw,36px);color:var(--color-primary);letter-spacing:0.06em;display:block;line-height:1.15;}
.cat-feat-right{padding:20px 18px;background:var(--color-bg);}
.cat-feat-title{font-family:var(--font-headline);font-size:28px;color:var(--color-primary);letter-spacing:0.04em;margin-bottom:5px;}
.cat-feat-desc{font-size:11.5px;color:var(--color-accent);line-height:1.6;margin-bottom:14px;}
.cat-feat-sep{border:none;border-top:1px solid rgba(0,0,0,0.1);margin-bottom:14px;}
.cat-feat-product{display:flex;align-items:flex-start;gap:10px;padding:9px 0;border-bottom:1px solid rgba(0,0,0,0.07);cursor:pointer;}
.cat-feat-product:last-child{border-bottom:none;}
.cat-feat-product__thumb{width:54px;height:62px;background:#C8C8C8;flex-shrink:0;overflow:hidden;}
.cat-feat-product__thumb img{width:100%;height:100%;object-fit:cover;transition:transform 0.35s ease;}
.cat-feat-product:hover .cat-feat-product__thumb img{transform:scale(1.06);}
.cat-feat-product__info{flex:1;}
.cat-feat-product__name{font-size:11px;font-weight:600;color:var(--color-text);margin-bottom:2px;line-height:1.4;}
.cat-feat-product__desc{font-size:10px;color:var(--color-accent);line-height:1.5;margin-bottom:5px;}
.cat-feat-product__row{display:flex;gap:6px;align-items:center;}
.cat-feat-product__discount{font-size:11px;font-weight:700;color:var(--color-discount);}
.cat-feat-product__price{font-size:11px;font-weight:600;color:var(--color-text);}
.cat-filter-bar{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-top:1px solid rgba(0,0,0,0.08);flex-wrap:wrap;gap:8px;}
.cat-filter-tabs{display:flex;gap:6px;flex-wrap:wrap;}
.cat-filter-tab{padding:4px 13px;border:1px solid #C4C4C4;border-radius:100px;font-size:11px;color:var(--color-text);background:transparent;cursor:pointer;transition:all 0.2s ease;white-space:nowrap;}
.cat-filter-tab:hover,.cat-filter-tab.active{background:var(--color-primary);border-color:var(--color-primary);color:var(--color-bg);}
.cat-more-btn{font-size:12px;color:var(--color-accent);background:none;border:none;cursor:pointer;letter-spacing:0.04em;transition:color 0.2s ease;display:flex;align-items:center;gap:2px;}
.cat-more-btn:hover{color:var(--color-text);}
.cat-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(0,0,0,0.08);}
.cat-product-card{padding:12px 10px;cursor:pointer;border-right:1px solid rgba(0,0,0,0.07);border-bottom:1px solid rgba(0,0,0,0.07);}
.cat-product-card:nth-child(4n){border-right:none;}
.cat-product-card__thumb{width:100%;aspect-ratio:1 / 1.1;background:#C8C8C8;overflow:hidden;margin-bottom:8px;}
.cat-product-card__thumb img{width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;}
.cat-product-card:hover .cat-product-card__thumb img{transform:scale(1.04);}
.cat-product-card__name{font-size:11px;font-weight:400;color:var(--color-text);line-height:1.4;margin-bottom:4px;}
.cat-product-card__row{display:flex;align-items:center;gap:5px;}
.cat-product-card__discount{font-size:11px;font-weight:700;color:var(--color-discount);}
.cat-product-card__price{font-size:12px;font-weight:600;color:var(--color-text);}
`,
);
console.log("category.css done");

fs.writeFileSync(
  base + "responsive.css",
  `/* RESPONSIVE */
@media(max-width:768px){
#site-header{display:none;}
.mobile-header{display:flex;}
.mobile-nav-bar{display:flex;}
body{padding-top:52px;}
.hero{display:block;height:calc(100vh - 52px);min-height:400px;position:relative;}
.hero-col{position:absolute;inset:0;opacity:0;pointer-events:none;transition:opacity 0.5s ease;border:none;}
.hero-col.is-active{opacity:1;pointer-events:auto;}
.hero-prev,.hero-next{display:flex;position:absolute;top:50%;transform:translateY(-50%);z-index:5;width:34px;height:34px;background:rgba(0,0,0,0.3);color:white;align-items:center;justify-content:center;cursor:pointer;font-size:20px;border:none;transition:background 0.2s;}
.hero-prev:hover,.hero-next:hover{background:rgba(0,0,0,0.55);}
.hero-prev{left:10px;}
.hero-next{right:10px;}
.hero-indicator{display:flex;flex-direction:column;position:absolute;bottom:24px;left:20px;z-index:5;gap:5px;}
.hero-indicator-text{font-size:12px;color:rgba(255,255,255,0.9);letter-spacing:0.06em;}
.hero-indicator-text .slide-current{color:var(--color-secondary);font-weight:600;}
.hero-indicator-bar{width:100px;height:1.5px;background:rgba(255,255,255,0.25);position:relative;}
.hero-indicator-fill{position:absolute;left:0;top:0;height:100%;background:var(--color-secondary);transition:width 0.3s ease;}
.scroll-section{grid-template-columns:1fr;min-height:unset;}
.scroll-col--left{min-height:280px;}
.scroll-col--mid,.scroll-col--right{border-left:none;border-top:2px solid var(--color-secondary);}
.scroll-col-img{min-height:180px;max-height:220px;}
.cat-page-wrap{padding:52px 0 72px;}
.cat-container{max-width:100%;}
.cat-feature{grid-template-columns:1fr;}
.cat-feat-left{min-height:200px;}
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
console.log("responsive.css done");

fs.writeFileSync(
  base + "footer.css",
  `/* FOOTER */
.site-footer{background:var(--color-primary);color:rgba(255,255,255,0.55);padding:52px var(--gutter) 28px;}
.footer-inner{max-width:1440px;margin:0 auto;display:grid;grid-template-columns:1fr 2fr 1fr;gap:48px;padding-bottom:28px;border-bottom:1px solid rgba(255,255,255,0.08);}
.footer-logo{font-family:var(--font-headline);font-size:34px;letter-spacing:0.06em;color:var(--color-white);display:block;margin-bottom:10px;}
.footer-slogan{font-size:12px;letter-spacing:0.12em;color:var(--color-secondary);font-style:italic;}
.footer-links{display:flex;gap:48px;}
.footer-link-group h4{font-family:var(--font-headline);font-size:13px;letter-spacing:0.08em;color:var(--color-white);margin-bottom:14px;}
.footer-link-group ul li{margin-bottom:7px;}
.footer-link-group ul li a{font-size:12px;color:rgba(255,255,255,0.45);transition:color var(--tr);}
.footer-link-group ul li a:hover{color:var(--color-secondary);}
.footer-sns{display:flex;flex-direction:column;align-items:flex-end;gap:10px;}
.footer-sns-links{display:flex;gap:10px;}
.footer-sns-links a{width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:rgba(255,255,255,0.45);letter-spacing:0.03em;transition:all var(--tr);}
.footer-sns-links a:hover{border-color:var(--color-secondary);color:var(--color-secondary);}
.footer-bottom{max-width:1440px;margin:0 auto;padding-top:16px;display:flex;align-items:center;justify-content:space-between;}
.footer-copy{font-size:11px;color:rgba(255,255,255,0.25);letter-spacing:0.04em;}
.footer-bottom-links{display:flex;gap:16px;}
.footer-bottom-links a{font-size:11px;color:rgba(255,255,255,0.25);transition:color var(--tr);}
.footer-bottom-links a:hover{color:rgba(255,255,255,0.6);}
`,
);
console.log("All CSS done!");
