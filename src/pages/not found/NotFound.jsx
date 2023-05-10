import { Link } from "react-router-dom";
import "./notFound.css";

export default function NotFound() {
  return (
    <div className="container-not">
        <h2 className="h2-not">404</h2>
        <div className="div-not">
            <h3 className="span-not">Oops!</h3>
            <h3 className="h3-not">Page not found!</h3> 
        </div>
        <p className="p-not">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="link-go-home">Go home</Link>
    </div>
  )
}
