import { Routes, Route } from "react-router-dom";
import Recipes from "../recipes/Recipes";
import "./subCategories.css";

function SubCategories() {

    return (       
            <Routes>
                <Route path=":tag" element={ <Recipes/> } />
            </Routes>
     );
}

export default SubCategories;