import { useState } from "react";
import { Link } from "react-router-dom";
import { useAxiosCategories } from "../../hooks/useAxiosCategories";
import  Loading  from "../loading/Loading"
import "./category.css"

//en este componente muestro las 12 categorias. Cuando aprieto en cualquiera de las primeras 8 me envia a las distintas
//recetas que hay en la categoria, y cuando aprieto en las ultimas 4 se me abre una lista de subcategorias.
function Category() {

    //con este estado muestro y oculta las subcategorias de cuisines, courses, diets y dishes.
    const [showCuisines, setShowCuisines] = useState(false);
    const [showCourses, setShowCourses] = useState(false);
    const [showDiets, setShowDiets] = useState(false);
    const [showDishes, setShowDishes] = useState(false);
    const {
        guided,
        articles,
        seconds,
        popular,
        trend,
        seasonal,
        easy,
        kid, 
        cuisines,
        courses,
        diets,
        dishes,
        subCatCuisines,
        subCatCourses,
        subCatDiets,
        subCatDishes,
        loading
      } = useAxiosCategories();

    //con el Link la envio a category/tag y en esa pagina agarro el tag con useParams para poder mostrar las recetas de esa categoria.
    return ( 
        <>
        { loading ? <Loading /> : 
        <div className="container-alls-categories">
            <Link to={ `category/${guided.tag}` } className="link-category" >
                <div className="cat-img-name" >
                    <h3 className="category-name">{ guided.displayName }</h3>
                    <img className="images-category" src= { guided.categoryImage } />
                </div>
            </Link>
            <Link to={ `category/${articles.tag}` } className="link-category">
                <div className="cat-img-name" >
                    <h3 className="category-name">{ articles.displayName }</h3>
                    <img className="images-category" src= { articles.categoryImage } />
                </div>
            </Link>
            <Link to={ `category/${seconds.tag}` } className="link-category">
                <div className="cat-img-name" >
                    <h3 className="category-name">{ seconds.displayName }</h3>
                    <img className="images-category" src= { seconds.categoryImage } />
                </div>
            </Link>
            <Link to={ `category/${popular.tag}` } className="link-category">
                <div className="cat-img-name" >
                    <h3 className="category-name">{ popular.displayName }</h3>
                    <img className="images-category" src= { popular.categoryImage } />
                </div>
            </Link>
            <Link to={ `category/${trend.tag}` } className="link-category">
                <div className="cat-img-name" >
                    <h3 className="category-name">{ trend.displayName }</h3>
                    <img className="images-category" src= { trend.categoryImage } />
                </div>
            </Link>
            <Link to={ `category/${seasonal.tag}` } className="link-category">
                <div className="cat-img-name" >
                    <h3 className="category-name">{ seasonal.displayName }</h3>
                    <img className="images-category" src= { seasonal.categoryImage } />
                </div>
            </Link>
            <Link to={ `category/${easy.tag}` } className="link-category">
                <div className="cat-img-name" >
                    <h3 className="category-name">{ easy.displayName }</h3>
                    <img className="images-category" src= { easy.categoryImage } />
                </div>
            </Link>
            <Link to={ `category/${kid.tag}` } className="link-category">
                <div className="cat-img-name" >
                    <h3 className="category-name">{ kid.displayName }</h3>
                    <img className="images-category" src= { kid.categoryImage } />
                </div>
            </Link> 
            <div className="subCategory-img-name" onClick={ () => { setShowCuisines(!showCuisines) }  } >
                <h3 className="category-name">{ cuisines.displayName }</h3>
                <img className="images-category" src= { cuisines.categoryImage } />
                { showCuisines && (
                <div className="subcategory-names">
                    {
                        subCatCuisines.map(c => {
                            return (
                                <Link to={`category/${c.display.tag}`}>
                                    <h3 className="subcategory-h3" key={ c.display.displayName } >{ c.display.displayName }</h3>
                                </Link>
                            ) 
                        })
                    }
                </div>
                )}
            </div>
            <div className="subCategory-img-name" onClick={ () => { setShowCourses(!showCourses) }  }  >
                <h3 className="category-name">{ courses.displayName }</h3>
                <img className="images-category" src= { courses.categoryImage } />
                { showCourses && (
                <div className="subcategory-names">
                    {
                        subCatCourses.map(c => {
                            return (
                                <Link to={`category/${c.display.tag}`}>
                                    <h3 className="subcategory-h3" key={ c.display.displayName } >{ c.display.displayName }</h3>
                                </Link>
                            ) 
                        })
                    }
                </div>
                )}
            </div>
            <div className="subCategory-img-name" onClick={ () => { setShowDiets(!showDiets) }  }  >
                <h3 className="category-name">{ diets.displayName }</h3>
                <img className="images-category" src= { diets.categoryImage } />
                { showDiets && (
                <div className="subcategory-names">
                    {
                        subCatDiets.map(c => {
                            return (
                                <Link to={`category/${c.display.tag}`}>
                                    <h3 className="subcategory-h3" key={ c.display.displayName } >{ c.display.displayName }</h3>
                                </Link>
                            ) 
                        })
                    }
                </div>
                )}
            </div>
            <div className="subCategory-img-name" onClick={ () => { setShowDishes(!showDishes) }  }  >
                <h3 className="category-name">{ dishes.displayName }</h3>
                <img className="images-category" src= { dishes.categoryImage } />
                { showDishes && (
                <div className="subcategory-names">
                    {
                        subCatDishes.map(c => {
                            return (
                                <Link to={`category/${c.display.tag}`}>
                                    <h3 className="subcategory-h3" key={ c.display.displayName } >{ c.display.displayName }</h3>
                                </Link>
                            ) 
                        })
                    }
                </div>
                )}
            </div>       
        </div>
        }
        </>
     );
}

export default Category;