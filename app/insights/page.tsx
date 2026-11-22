import SiteChrome from '../../components/SiteChrome';
import PageHero from '../../components/PageHero';
import {ImageCards} from '../../components/CardGrid';

const items=[{image:'services.jpg',
    eyebrow:'TECHNOLOGY',
    title:'The future of technology',
    text:'Designing infrastructure that can evolve with business.'},

    {image:'cyber.png',
        eyebrow:'CYBERSECURITY',
        title:'Building resilient digital environments',
        text:'Security principles for connected organizations.'},
        
        {image:'servicess.jpg',eyebrow:'SOFTWARE',
            title:'Why custom software matters',
            text:'Technology designed around the way your organization works.'}];

export default function Insights(){
    return <SiteChrome>
        <main>
            <PageHero eyebrow="INSIGHTS"
             title={<>Ideas comes <em>next</em></>} 
             lead="Perspectives on infrastructure,
              cybersecurity, software and the connected digital world."
               image="servicess.jpg"/>
               <section className="section">
                <div className="container">
                    <ImageCards items={items}/>
                    </div>
                    </section>
                    </main>
                    </SiteChrome>}
