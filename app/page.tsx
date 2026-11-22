'use client';
import {useEffect,useState} from 'react';
import SiteChrome from '../components/SiteChrome';
const services=[['01',
    'Cloud ',
    'Scalable cloud environments, migration, backup and resilient infrastructure.'],
    ['02',
    'Cybersecurity',
    'Security architecture, monitoring, risk reduction and resilient digital environments.'],
        ['03',
        'Software Development',
        'Web, mobile and custom software built around your workflows and customers.'],
        ['04',
        'IT Infrastructure',
        'Servers, data centers, virtualization and reliable IT operations.'],
        ['05',
        'Telecommunications',
        'Fiber, connectivity and communication systems for seamless operations.'],
        ['06',
        'Smart Buildings',
        'Connected building systems, automation and technology-enabled spaces.']];

                        
export default function Home(){
    const [loading,setLoading]=useState(true);
    useEffect(()=>{const t=setTimeout(()=>setLoading(false),650);
        return()=>clearTimeout(t)},[]);
        return <SiteChrome>
            <>{loading&&<div className="loader">
             <div className="loader-logo">
            <img src="/assets/white_logo_dark_background.png" alt="SPACES VISION"/>
            <span/>
            </div>
            </div>}
            <main>
            <section className="hero">
            <div className="hero-bg"/>
            <div className="hero-grid"/>
             <div className="orb orb1"/>
             <div className="orb orb2"/>
             <div className="container hero-inner">
             <div className="eyebrow">
             <span/> IT SOLUTIONS & DIGITAL TRANSFORMATION</div>
             <h1>We Think what's <em>Next</em>
             </h1><p className="hero-copy">From intelligent infrastructure to immersive experiences,
              <strong>SPACES VISION</strong> connects ideas, technology and execution.</p>
              <div className="hero-actions">
               <a className="btn gold" href="/services">Explore Services <span>↗</span>
               </a><a className="btn ghost" href="/projects">View Our Work <span>→</span>
               </a>
                </div>

                <div className="hero-stats"><div>
                 <b>12</b><span>Core services</span>
                 </div>
                 <div>
                    <b>04</b>
                   <span>Solution areas</span>
                    </div>
                    <div><b>KSA</b>
                    <span>Riyadh based</span>
                    </div>
                    </div>
                    </div>
                    </section>
                    <section className="marquee">
                    <div>SMART INFRASTRUCTURE ✦ CYBERSECURITY ✦ DIGITAL EXPERIENCES ✦ SOFTWARE ✦ TELECOMMUNICATIONS ✦ SMART BUILDINGS ✦</div>
                     </section>

                    <section className="section">
                    <div className="container split">
                    <div className="visual-card">
                    <img src="/assets/servicess.jpg" alt="Technology services"/>
                     <div className="visual-label">
                     <small>SPACES VISION</small>
                     <strong>Ideas → Technology → Execution</strong>
                     </div>
                    </div>
                    <div className="content">
                    <div className="eyebrow">
                    <span/> ABOUT US</div>
                    <h2>Technology with  <em> purpose.</em> </h2>
                    <p>We create connected technology environments that make organizations smarter,
                      safer and more efficient.</p>
                    <a className="text-link" href="/about">Discover SPACES VISION ↗</a>
                    </div>
                    </div>
                    </section>

                    <section className="section services">
                     <div className="container">
                     <div className="section-head">
                     <div>
                     <div className="eyebrow">
                     <span/> WHAT WE DO</div>
                     <h2>Everything you need  <em> in digital world </em> </h2>
                     </div><a className="text-link" href="/services">View all services ↗</a>
                     </div>

                    <div className="service-grid">{services.map(([n,t,p])=><article className="service" key={t}>
                    <div className="service-number">{n}</div>
                    <h3>{t}</h3>
                    <p>{p}</p>
                    <a href="/contact">Discover <span>↗</span>
                    </a>
                    </article>)}</div>
                    </div>
                    </section>

                     <section className="feature">
                     <div className="feature-image">
                     <img src="/assets/smart-building.jpg" alt="Smart building"/>
                     </div>
                     <div className="feature-content">
                     <div className="eyebrow">
                     <span/> FEATURED SOLUTION</div>
                    <h2>Make your environment <em>intelligent.</em> </h2>
                    <p>Connect buildings, people,
                         systems and data into a smarter operating experience.</p>
                    <a className="btn gold" href="/solutions">Explore Solutions ↗</a>
                    </div>
                    </section>

                     <section className="section">
                    <div className="container">
                    <div className="section-head">
                     <div>
                     <div className="eyebrow">
                     <span/> SELECTED WORK</div>
                     <h2>Built  <em>real impact.</em></h2>
                      </div>
                      <a className="text-link" href="/projects">View projects ↗</a>
                      </div>
                      
                      <div className="image-card-grid home-projects">
                      <article className="image-card">
                       <img src="/assets/cyber-remote.jpg" alt="Cybersecurity"/>
                       <div>
                       <small>CYBERSECURITY</small>
                       <h3>Security & resilient environments</h3>
                       </div>
                       </article><article className="image-card">
                        <img src="/assets/telecom.jpg" alt="Telecommunications"/>
                        <div><small>TELECOM</small>
                        <h3>Connectivity built for reliability</h3>
                        </div></article><article className="image-card">
                        <img src="/assets/asbuilt.jpg" alt="Engineering"/>
                        <div><small>ENGINEERING</small>
                        <h3>Digital records for future-ready assets</h3>
                        </div>
                        </article>
                        </div>
                        </div>
                        </section>
                        </main></>
                        </SiteChrome>}
