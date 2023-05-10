import { useState } from "react";
import { useDispatch } from "react-redux";
import { setParams } from "../../reducers/search/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { GiCook } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import "./header.css";

function Header() {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(search)
    return ( 
        <div className="container-header">                 
            <div className="div-icon-h1">
                <GiCook className="icon-cook" />
                <Link to="/" style={{ textDecoration: "none"}}> 
                    <h1>Recipes Food</h1>
                </Link> 
            </div>       
            <div className="container-glass-register-login">
                <div className="container-glass">
                    <input type="text" onChange= {e => { setSearch(e.target.value) }} placeholder="Search" className="input-glass"/>
                    <BiSearch 
                        className="icon-glass"
                        onClick={ () => {
                        dispatch(setParams({
                            q: search}))
                        navigate("/search")    
                        }}                       
                    />                  
                </div>
                <div className="container-register-login"> 
                    <Link to="/register" style={{ textDecoration: "none"}}>                
                        <h4 className="h4-register">register</h4>
                    </Link>
                    <Link to="/login" style={{ textDecoration: "none"}}>
                        <h4 className="h4-register">login</h4>
                    </Link>
                </div>
            </div>
        </div>
     );
}

export default Header;