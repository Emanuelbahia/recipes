import { useState, useEffect } from "react";
import axios from "axios";

export function useAxiosCategories() {
  const [guided, setGuided] = useState({});
  const [articles, setArticles] = useState({});
  const [seconds, setSeconds] = useState({});
  const [popular, setPopular] = useState({});
  const [trend, setTrend] = useState({});
  const [seasonal, setSeasonal] = useState({});
  const [easy, setEasy] = useState({});
  const [kid, setKid] = useState({});
  const [cuisines, setCuisines] = useState([]);
  const [courses, setCourses] = useState([]);
  const [diets, setDiets] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [subCatCuisines, setSubCatCuisines] = useState([]);
  const [subCatCourses, setSubCatCourses] = useState([]);
  const [subCatDiets, setSubCatDiets] = useState([]);
  const [subCatDishes, setSubCatDishes] = useState([]);

  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/categories/list",
    headers: {
      "X-RapidAPI-Key": "d5aad89182mshb010c79e9e89f0dp1819d3jsn2e51ec147d58",
      "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .request(options)
      .then(function (response) {
        setGuided(response.data["browse-categories"][0].display);
        setArticles(response.data["browse-categories"][1].display);
        setSeconds(response.data["browse-categories"][2].display);
        setPopular(response.data["browse-categories"][3].display);
        setTrend(response.data["browse-categories"][4].display);
        setSeasonal(response.data["browse-categories"][5].display);
        setEasy(response.data["browse-categories"][6].display);
        setKid(response.data["browse-categories"][7].display);
        setCuisines(response.data["browse-categories"][8].display);
        setCourses(response.data["browse-categories"][9].display);
        setDiets(response.data["browse-categories"][10].display);
        setDishes(response.data["browse-categories"][11].display);
        setSubCatCuisines(
          response.data["browse-categories"][8].display.categoryTopics
        );
        setSubCatCourses(
          response.data["browse-categories"][9].display.categoryTopics
        );
        setSubCatDiets(
          response.data["browse-categories"][10].display.categoryTopics
        );
        setSubCatDishes(
          response.data["browse-categories"][11].display.categoryTopics
        );
      })
      .finally(() => setLoading(false))
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return {
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
    loading,
  };
}
