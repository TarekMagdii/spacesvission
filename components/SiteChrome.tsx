'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ar } from '../lib/translations';

const links=[['Home','/'],['About','/about'],['Services','/services'],['Solutions','/solutions'],['Projects','/projects'],['Partners','/partners'],['Insights','/insights']];
const originals = new WeakMap<Text, string>();
const normalize=(s:string)=>s.replace(/\s+/g,' ').trim();
const normalizedArabic:Record<string,string>=Object.fromEntries(Object.entries(ar).map(([k,v])=>[normalize(k),v]));
function translate(value:string){
  // Keep whitespace around text nodes: removing it joins adjacent Arabic words.
  const leading=value.match(/^\s*/)?.[0] ?? '';
  const trailing=value.match(/\s*$/)?.[0] ?? '';
  const core=value.slice(leading.length, value.length-trailing.length);
  if(!core) return value;
  const key=normalize(core);
  if(normalizedArabic[key]) return leading+normalizedArabic[key]+trailing;
  let result=core;
  const entries=Object.entries(normalizedArabic).sort((a,b)=>b[0].length-a[0].length);
  for(const [from,to] of entries){
    if(from.length>2 && result.includes(from)) result=result.split(from).join(to);
  }
  return result===key?value:leading+result+trailing;
}
function applyLanguage(language:'en'|'ar'){
  const root=document.documentElement;
  root.lang=language; root.dir=language==='ar'?'rtl':'ltr';
  document.body.classList.toggle('arabic',language==='ar');
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  let node:Node|null;
  while((node=walker.nextNode())){
    const t=node as Text;
    if(!originals.has(t)) originals.set(t,t.nodeValue||'');
    const original=originals.get(t)||'';
    t.nodeValue=language==='ar'?translate(original):original;
  }
  const attrs=['placeholder','aria-label','title'];
  document.querySelectorAll<HTMLElement>('[placeholder],[aria-label],[title]').forEach(el=>{
    attrs.forEach(attr=>{
      const value=el.getAttribute(attr);
      if(value){
        const marker=`data-en-${attr}`;
        if(!el.hasAttribute(marker)) el.setAttribute(marker,value);
        const original=el.getAttribute(marker)||value;
        el.setAttribute(attr,language==='ar'?translate(original):original);
      }
    });
  });
}
export default function SiteChrome({children}:{children:React.ReactNode}){
  const pathname=usePathname();
  const [language,setLanguage]=useState<'en'|'ar'>('en');
  const [menu,setMenu]=useState(false),[scrolled,setScrolled]=useState(false),[progress,setProgress]=useState(0),[leaving,setLeaving]=useState(false);
  useEffect(()=>{
    const saved=localStorage.getItem('spaces-language');
    if(saved==='ar'||saved==='en') setLanguage(saved);
  },[]);
  useEffect(()=>{
    applyLanguage(language);
    const timer=window.setTimeout(()=>applyLanguage(language),80);
    return()=>clearTimeout(timer);
  },[language,pathname]);
  useEffect(()=>{
    const onScroll=()=>{
      setScrolled(window.scrollY>30);
      const max=document.documentElement.scrollHeight-window.innerHeight;
      setProgress(max>0?(window.scrollY/max)*100:0);
    };
    const reveal=()=>document.querySelectorAll('.reveal:not(.visible)').forEach(el=>{if(el.getBoundingClientRect().top<window.innerHeight*.88)el.classList.add('visible')});
    document.querySelectorAll('main section, .service, .image-card, .solution, .work-card, .insight, .partner-panel, .contact-form, .visual-card').forEach((el,i)=>{if(!el.classList.contains('reveal')){el.classList.add('reveal');(el as HTMLElement).style.transitionDelay=`${Math.min(i%5,4)*70}ms`}});
    const onMove=(e:MouseEvent)=>{document.documentElement.style.setProperty('--mx',`${e.clientX}px`);document.documentElement.style.setProperty('--my',`${e.clientY}px`)};
    onScroll();reveal();window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('scroll',reveal,{passive:true});window.addEventListener('mousemove',onMove,{passive:true});
    const timer=setTimeout(reveal,100);
    return()=>{clearTimeout(timer);window.removeEventListener('scroll',onScroll);window.removeEventListener('scroll',reveal);window.removeEventListener('mousemove',onMove)};
  },[pathname]);
  const go=(url:string)=>{if(url===pathname)return;setMenu(false);setLeaving(true);window.setTimeout(()=>{window.location.href=url},360)};
  const toggleLanguage=()=>{
    const next: 'en'|'ar' = language === 'ar' ? 'en' : 'ar';
    localStorage.setItem('spaces-language', next);
    setLanguage(next);
  };
  // Always show the destination language (not the currently active language).
  const languageButtonLabel = language === 'ar' ? 'EN' : 'AR';
  const navLabels:Record<string,string>={Home:'الرئيسية',About:'من نحن',Services:'خدماتنا',Solutions:'حلولنا',Projects:'مشاريعنا',Partners:'شركاؤنا',Insights:'رؤى ومقالات'};
  return <>
    <div className="page-progress" style={{width:`${progress}%`}}/><div className="cursor-glow" aria-hidden="true"/>
    <div className={`page-transition ${leaving?'active':''}`} aria-hidden="true"><span>SPACES VISION</span></div>
    <header className={`nav ${scrolled?'scrolled':''} ${menu?'open':''}`}>
      <button className="brand brand-button" aria-label="SPACES VISION home" onClick={()=>go('/')}><img src="/assets/base_logo_transparent_background.png" alt="SPACES VISION"/></button>
      <nav className="main-nav">
        {links.map(([t,u])=><button className={pathname===u?'active':''} key={u} onClick={()=>go(u)}>{language==='ar'?navLabels[t]:t}</button>)}
        <button className="nav-cta" onClick={()=>go('/contact')}>{language==='ar'?'تواصل معنا':'Let’s Talk'} <b>↗</b></button>
        <button type="button" className="language-toggle" onClick={toggleLanguage} aria-label={language==='ar'?'Switch to English':'Switch to Arabic'} title={language==='ar'?'Switch to English':'Switch to Arabic'}><span className="language-toggle-icon" aria-hidden="true">⇄</span><span>{languageButtonLabel}</span></button>
      </nav>
      <button className="menu" aria-label="Toggle navigation" onClick={()=>setMenu(!menu)}><i/><i/><i/></button>
    </header>
    {children}
    <footer>
      <div className="container footer-grid">
        <div><button className="footer-brand" onClick={()=>go('/')}><img className="footer-logo" src="/assets/logo.png" alt="SPACES VISION"/></button><p>{language==='ar'?'تقنيات وبنية تحتية وتجارب رقمية نصممها للمستقبل.':'Technology, infrastructure and digital experiences built for what comes next.'}</p></div>
        <div><h4>{language==='ar'?'استكشف':'Explore'}</h4>
          <button onClick={()=>go('/about')}>{language==='ar'?'من نحن':'About'}</button><button onClick={()=>go('/services')}>{language==='ar'?'خدماتنا':'Services'}</button><button onClick={()=>go('/solutions')}>{language==='ar'?'حلولنا':'Solutions'}</button><button onClick={()=>go('/projects')}>{language==='ar'?'مشاريعنا':'Projects'}</button>
        </div>
        <div><h4>{language==='ar'?'تواصل':'Connect'}</h4><button onClick={()=>go('/partners')}>{language==='ar'?'شركاؤنا':'Partners'}</button><button onClick={()=>go('/insights')}>{language==='ar'?'رؤى ومقالات':'Insights'}</button><button onClick={()=>go('/contact')}>{language==='ar'?'اتصل بنا':'Contact'}</button></div>
        <div><h4>{language==='ar'?'الرياض · السعودية':'Riyadh · KSA'}</h4><span>+966 55 786 8764</span><span>info@spacesvision-sa.com</span><span>www.spacesvision-sa.com</span></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 SPACES VISION. {language==='ar'?'جميع الحقوق محفوظة.':'All rights reserved.'}</span><span>{language==='ar'?'الرياض، المملكة العربية السعودية':'Riyadh, Kingdom of Saudi Arabia'}</span></div>
    </footer>
  </>;
}
