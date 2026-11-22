import SiteChrome from '../../components/SiteChrome';
import PageHero from '../../components/PageHero';
import {ImageCards} from '../../components/CardGrid';

const items=
[{image:'smart-building.jpg',
    eyebrow:'SMART ENVIRONMENTS',
    title:'Buildings that think ahead.',
    text:'Energy intelligence, automation and connected systems.'},

    {image:'secu.jpeg',
    eyebrow:'SECURITY',
    title:'Secure by design.',
    text:'Security architecture for connected organizations.'},

    {image:'arvr.jpg',
     eyebrow:'IMMERSIVE',
     title:'Experience the digital world.',
     text:'Interactive AR and VR environments.'},
            
    {image:'fiber.jpg',
    eyebrow:'FIBER',
    title:'Always connected.',
    text:'Reliable fiber and communication infrastructure.'},

   {image:'clouded.jpeg',
    eyebrow:'CLOUD',
    title:'Always Clouded.',
    text:'Cloud For Your'},

      {image:'mepp.jpeg',
    eyebrow:'MEP',
    title:'Mep Project.',
    text:'Integration of Mechanical, Electrical, and Plumbing systems that serve as the lifeblood of modern.'},
       
  ];

export default function Solutions(){
    return <SiteChrome>
        <main>
            <PageHero eyebrow="SOLUTIONS"
          title={<>Technology shaped  <em>your world</em></>}
           lead="Connected solution areas that bring infrastructure, security, experience and connectivity together."
           image="smart-building.jpg"/>

          <section className="section">
          <div className="container">
           <ImageCards items={items}/>
           </div>
            </section>

            <section className="section light-band">
            <div className="container split">
              <div className="content">
             <div className="eyebrow">
             <span/> INTEGRATION</div>
              <h2>One ecosystem <em>Many possibilities.</em></h2>
               <p>Our solutions are designed to work together,
                 creating a unified technology environment instead of isolated systems.</p>
               </div>

            <div className="visual-card">
            <img src="/assets/energy.jpg" alt="Connected technology"/>
            </div>
            </div>
            </section>
             </main>
             </SiteChrome>}
