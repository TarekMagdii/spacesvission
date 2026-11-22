import SiteChrome from '../../components/SiteChrome';
import PageHero from '../../components/PageHero';
export default function Partners(){
    return <SiteChrome>
        <main className="partners-page">
            <PageHero eyebrow="PARTNERS & CLIENTS"
             title={<>Trusted<em> partnerships</em></>}
              lead="We work with organizations and technology ecosystems to turn complex requirements into dependable outcomes." 
              image="partnership.jpg"/>
              <section className="section">
            <div className="container partner-panel">
             <img className="partners-panel-image" src="/assets/partnership.jpg" alt=""/>
             <div className="partners-panel-copy">
            <div className="eyebrow">
              <span/> SELECTED CLIENTS</div>
              <h2>Technology delivered <em>together.</em>
               </h2><div className="logos">
                <div className="client-logo">
                 <img src="/assets/ministry.png" alt="Ministry of Investment"/>
                 </div>
                  <div className="client-logo">
                   <img src="/assets/tuwaiq.png" alt="Tuwaiq Academy"/>
                    </div>
                     <div className="client-logo">
                     <img src="/assets/cybersecurity.png" alt="Saudi Federation for Cybersecurity"/>
                       </div>
                        <div className="client-logo">
                     <img src="/assets/parten.jpeg" alt="Saudi Federation for Cybersecurity"/>
                       </div>
                        </div>
                           </div>
                           </div>
                           </section>
                           <section className="section partners-final-section dark-section">
                           <div className="container centered partners-final-content">
                           <div className="eyebrow">
                             <span/> PARTNERSHIPS</div>
                             <h2>Bring the right <em>capabilities</em> together.</h2>
                             <p className="lead-center">Our network approach helps organizations access the expertise,
                              technology and execution needed for ambitious projects.</p>
                               </div>
                                </section>
                                </main>
                                </SiteChrome>}
