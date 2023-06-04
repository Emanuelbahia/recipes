import { Link } from "react-router-dom";
import four from "../../assets/4-removebg-preview.png";
import egg from "../../assets/huu-removebg-preview.png";
import pot from "../../assets/sarr.png"
import "./notFound.css";

export default function NotFound() {
  return (
    <div className="container-notfound">
      <div className="container-number">
        <img className="pot-notfound" src={ pot } />
        <img className="four-notfound-left" src={ four } />
        <img className="egg-notfound" src={ egg } />
        <img className="four-notfound-right" src={ four } />
        <h2 className="h2-notfound">OOOOPS!!!</h2>
        <h3 className="h3-notfound">Page not found</h3>
        <button className="button-notfound"><Link className="link-notfound" to="/">Back home</Link></button>
      </div>       
    </div>
  )
}
