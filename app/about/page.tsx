import SiteChrome from '../../components/SiteChrome';
import PageHero from '../../components/PageHero';
export default function About()
{return <SiteChrome>
    <main>
        <PageHero eyebrow="ABOUT SPACES VISION"
         title={<>Technology  <em>clear purpose</em></>}
          lead="We connect strategy, engineering, design and execution to create smarter, 
          safer and more efficient digital environments."
           image="aboutt.png"/>
           <section className="section">
            <div className="container split">
                <div className="visual-card">
                    <img src="/assets/aboutt.png"alt="PACES VISION team"/>
                    </div>

                    <div className="content">
                        <div className="eyebrow">
                            <span/> OUR APPROACH</div>
                            <h2>One vision <em>Connected execution.</em></h2>
                            <p>SPACES VISION delivers technology solutions across infrastructure, 
                             cybersecurity, software, telecommunications,
                              smart environments and digital experiences.</p>
                            <div className="pill-row">
                           <span>Innovation</span>
                            <span>Security</span>
                            <span>Scalability</span>
                            <span>Experience</span>
                            </div>
                            </div>
                            </div>
                            </section>
           
                            <section className="section dark-section">
                             <div className="container three-values">
                             <div><b>01</b><h3>Think ahead.</h3>
                             <p>We design with long-term scalability and change in mind.</p>
                             </div>
                            <div><b>02</b><h3>Build securely.</h3>
                              <p>Security and resilience are part of the foundation, not an afterthought.</p>
                               </div>
                               <div>
                               <b>03</b><h3>Deliver clearly.</h3>
                                <p>Ideas become measurable outcomes through disciplined execution.</p>
                                 </div>
                                 </div>
                                 </section>
                                </main>
                                </SiteChrome>}
