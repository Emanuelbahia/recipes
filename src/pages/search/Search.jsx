import { useSelector } from "react-redux";
import { useAxiosSearch } from "../../hooks/useAxiosSearch";
import "./search.css"

export default function Search() {

    const { q } = useSelector((state) => state.params);
    const { data } = useAxiosSearch();

  return (
    <>
      <h2 className="h2-recipes">Recipes for { q } </h2>
      <div className="container-recipes-search">
        {
            data && data.map(r => {
                return (
                    <div className="card-recipe" key={ r["tracking-id"] } >
                        <div className="recipes-img-name" key={ r.content.details.name } >
                            <h3 className="recipes-h3">{ r.content.details.name }</h3>
                            <img className="recipe-image" src={ r.content.details.images[0].hostedLargeUrl } />
                        </div>
                        <div className="container-ingredients-steps">
                            { r.content.ingredientLines && (
                            <div className="ingredients">
                                <h3 className="ingredients-h3">Ingredients:  </h3>
                                {
                                    r.content.ingredientLines.map(p => {
                                        return (
                                            <h4 className="ingredients-h4">{ p.wholeLine }</h4>
                                        )
                                    })
                                }
                            </div>  
                            )}
                            { r.content.preparationSteps && (
                            <div className="ingredients">
                                <h3 className="ingredients-h3">Steps:</h3>
                            {                               
                                r.content.preparationSteps.map(p => {
                                    return (
                                        <h4 className="ingredients-h4">{ p }</h4>
                                    )
                                })                            
                            }
                            </div>
                            )}
                        </div>
                    </div>
                )
            })}
    </div>
    </>
  )
}
