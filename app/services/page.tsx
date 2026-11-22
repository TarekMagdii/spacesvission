import SiteChrome from '../../components/SiteChrome';
import PageHero from '../../components/PageHero';
import {ServiceGrid} from '../../components/CardGrid';

const items=
[['01',
  'Cloud',
  'Scalable cloud environments, hosting, migration, backup and resilient infrastructure.'],

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
      'Connected building systems, automation and technology-enabled spaces.'],

   ['07',
    'AR / VR Experiences',
    'Immersive digital experiences that turn ideas into interactive environments.'],

    ['08',
    'Digital Transformation',
    'Modernize processes, connect systems and build a scalable technology roadmap.'],

    ['09',
    'IT Consulting',
    'Technology strategy, architecture and practical guidance aligned with business goals.'],

    ['10',
    'Data & Analytics',
    'Dashboards, insights and data-driven tools that support better decisions.'],

    ['11',
    'Media & Digital',
    'Digital content, media buying and technology-led communication experiences.'],

    ['12',
    'Managed Support',
    'Responsive technical support and proactive monitoring that keeps systems moving.']];

export default function Services(){
    return <SiteChrome>
        <main>
        <PageHero eyebrow="WHAT WE DO"
        title={<>Everything you need<em> in digital world </em> </>}
       lead="End-to-end capabilities designed to move ideas from concept to measurable impact."
       image="services.jpg"/>

        <section className="section">
         <div className="container">
         <ServiceGrid items={items.map(x=>({n:x[0],t:x[1],p:x[2]}))}/>
         </div>
         </section>

        <section className="feature">
        <div className="feature-image">
        <img src="/assets/services.jpg" alt="Future technology"/>
        </div>
        <div className="feature-content">
        <div className="eyebrow">
        <span/> DELIVERY</div>
        <h2>From idea to <em>execution.</em>
        </h2>
        <p>We combine consulting, engineering and support to deliver technology that works in the real world.</p>
         <a className="btn gold" href="/contact">Start a project ↗</a>
         </div>
         </section>

        </main>
        </SiteChrome>}
