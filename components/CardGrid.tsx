export function ServiceGrid({items}:{items:{n:string;t:string;p:string}[]}){
    return <div className="service-grid">{items.map(x=><article className="service" key={x.t}>
        <div className="service-number">{x.n}</div>
        <h3>{x.t}</h3>
        <p>{x.p}</p>
        <a href="/contact">Discover <span>↗</span>
        </a>
        </article>)}</div>}
export function ImageCards({items}:{items:{image:string;eyebrow:string;title:string;text?:string}[]}){
    return <div className="image-card-grid">{items.map(x=><article className="image-card" key={x.title}>
        <img src={`/assets/${x.image}`} alt=""/>
        <div>
            <small>{x.eyebrow}</small>
            <h3>{x.title}</h3>{x.text&&<p>{x.text}</p>}</div>
            </article>)}
            </div>}
