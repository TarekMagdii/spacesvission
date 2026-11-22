import SiteChrome from '../../components/SiteChrome';
import PageHero from '../../components/PageHero';
import {ImageCards} from '../../components/CardGrid';

const items=
[{image:'cyber-remote.jpg',
    eyebrow:'CYBERSECURITY',
    title:'Security & resilient remote environments',
    text:'Digital environments designed around resilience and secure access.'},

    {image:'telecom.jpg',
        eyebrow:'TELECOM',
        title:'Connectivity built for reliability',
        text:'Infrastructure that keeps people, systems and locations connected.'},

    {image:'asbuilt.jpg',
            eyebrow:'ENGINEERING',
            title:'Digital records for future-ready assets',
            text:'Structured digital information supporting modern asset operations.'},

    {image:'media-buyer.png',
                eyebrow:'DIGITAL',
                title:'Media & technology-driven communication',
                text:'Technology-led experiences that connect brands with audiences.'},
            
              {image:'it.jpg',
                eyebrow:'IT',
                title:'Technology that moves your business forward',
                text:'Build reliable, scalable and high-performance technology infrastructure.'},

             {image:'vr.png',
                eyebrow:'VR',
                title:'VR connect digital technology',
                text:'Immersive Technology. Real-World Impact'}];

export default function Projects(){
    return <SiteChrome>
        <main>
            <PageHero eyebrow="SELECTED WORK"
             title={<>Real<em> impact</em></>}
              lead="A snapshot of technology, infrastructure and digital work across our capabilities." 
              image="partnership.jpg"/>
              <section className="section">
                <div className="container">
                    <ImageCards items={items}/>
                    </div>
                    </section>
                    
            <section className="section dark-section">
             <div className="container centered">
             <div className="eyebrow">
             <span/> NEXT PROJECT</div>
              <h2>Let&apos;s think what&apos;s <em>next.</em>
              </h2>
              <a className="btn gold" href="/contact">Talk to our team ↗</a>
               </div>
                </section>
                 </main>
                 </SiteChrome>}

