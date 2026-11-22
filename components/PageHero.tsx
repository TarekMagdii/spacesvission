export default function PageHero({
    eyebrow,title,lead,image}:{eyebrow:string;title:React.ReactNode;lead:string;image?:string}){
        return <section className="page-hero">
            <div className="page-hero-bg"/>
            {image&&<img className="page-hero-image" src={`/assets/${image}`} alt=""/>}
            <div className="container page-hero-inner">
                <div className="eyebrow"><span/> {eyebrow}</div>
                <h1>{title}</h1>
                <p>{lead}</p>
                </div>
                </section>}
