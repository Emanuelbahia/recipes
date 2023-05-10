
import { useParams } from "react-router-dom";
import { useAxiosRecipes } from "../../hooks/useAxiosRecipes";
import "./recipes.css"
import Loading from "../loading/Loading";
function Recipes() {

    //con useParams obtengo el parametro y lo uso para mostrar las recetas de la categoria elegida.
    //lo desestructuro para que me quede el nombre solo y pueda pasarlo como parametro
    const  { tag }  = useParams();
    const { data, loading } = useAxiosRecipes(tag);  
    
    //muestro las recetas de la categoria elegida con los ingredientes y los pasos si los tiene.
    return ( 
        
        <div className="container-all-categories">   
            { loading && <Loading /> }
            {  
              data.map((r, i) => {                    
                    return (
                        <div className="card-image-ingredients-steps">
                            <div className="wraper-img-name" key={ `${i} ${r.display.displayName} `  } >
                                <h3 className="name-cat">{ r.display.displayName }</h3>
                                <img className="img-category" src={ r.display.images[0] } />                                  
                            </div>
                            <div className="container-steps-ingredients">
                                { r.content.ingredientLines && (
                                <div className="ingredients-recipe" >
                                    <h3 className="ingredient-h3">Ingredients:  </h3>                               
                                        {                                      
                                            r.content.ingredientLines.map(p => {
                                                return (
                                                    <h4 className="ingredient-h4">{ p.wholeLine }</h4>
                                                )
                                        })                                    
                                        }                                                                      
                                </div>
                                )}
                                { r.content.preparationSteps && (
                                <div className="ingredients-recipe">
                                    <h3 className="ingredient-h3">Steps:</h3>
                                {                               
                                    r.content.preparationSteps.map(p => {
                                        return (
                                            <h4 className="ingredient-h4">{ p }</h4>
                                        )
                                    })                            
                                }
                                </div>
                                )}
                            </div>
                        </div>
                    )
                })
              
             }     
        </div> 
     );
}

export default Recipes;