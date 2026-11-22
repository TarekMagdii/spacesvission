'use client';import {useState} from 'react';
import SiteChrome from '../../components/SiteChrome';
import PageHero from '../../components/PageHero';
export default function Contact(){
    const [sent,setSent]=useState(false);
    function submit(e:React.FormEvent<HTMLFormElement>)
    {e.preventDefault();

        const f=new FormData(e.currentTarget);
        const s=encodeURIComponent(`Project inquiry — ${f.get('service')||'IT Services'}`);
        const b=encodeURIComponent(`Name: ${f.get('name')}\nEmail: ${f.get('email')}
        \nCompany: ${f.get('company')||''}\nService: ${f.get('service')}\n\n${f.get('message')}`);
        setSent(true);location.href=`mailto:info@spacesvision-sa.com?subject=${s}&body=${b}`}

        return <SiteChrome>
            <main>
                <PageHero eyebrow="CONTACT" title={<>Let&apos;s contact <em>next.</em></>}
                 lead="Tell us what you are building, 
                 transforming or securing. Our team is ready to start the conversation." 
                 image="team.png"/>

                 <section className="contact">
               <div className="container contact-grid">
               <div className="contact-copy">
               <div className="eyebrow">
                <span/> RIYADH · KSA</div>
                 <h2>Start a <em>conversation.</em></h2>
                 <p>From intelligent infrastructure to immersive experiences, 
                  SPACES VISION connects ideas, technology and execution.</p>

                 <div className="contact-lines">
                 <a href="tel:+966557868764">☎ 
                 <span>+966 55 786 8764</span>
                 </a><a href="mailto:info@spacesvision-sa.com">✉ 
                    <span>info@spacesvision-sa.com</span>
                     </a>
                     <a href="https://www.spacesvision-sa.com">↗ 
                     <span>www.spacesvision-sa.com</span>
                     </a>
                     </div>

                     <div className="qr">
                     <img src="/assets/qr.png" alt="Contact QR code"/>
                      <small>SCAN TO CONNECT WITH SPACES VISION</small>
                      </div>

                      </div>

                      <form className="contact-form" onSubmit={submit}>
                       <div className="form-top">
                       <span>PROJECT INQUIRY</span>
                        <b>01 / 01</b>
                         </div>
                                                        
                         <div className="field-row">
                         <label>Name<input name="name" required/></label>
                          <label>Email<input type="email" name="email" required/>
                           </label></div><div className="field-row">
                            <label>Company<input name="company"/>
                              </label><label>Service<select name="service">
                               <option>IT Services</option>
                              <option>Cybersecurity</option>
                              <option>Cloud & Infrastructure</option>
                               <option>Software Development</option>
                                <option>Telecommunications</option>
                                 <option>Smart Buildings</option>
                                 </select>
                                 </label>

                                 </div>

                                 <label>Message<textarea name="message" required/>
                                 </label>
                                 <button className="btn gold" type="submit">Send Inquiry ↗</button>
                                  <div className="form-note">{sent?'Opening your email client…':''}</div>
                                  </form>
                                   </div>
                                   </section>

                                  </main>
                                  </SiteChrome>}
