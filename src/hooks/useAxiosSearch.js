import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

//con este hook obtengo 18 recetas cuando me pasan por parametro (q) una palabra o varias.
export function useAxiosSearch() {
  const [data, setData] = useState([]);
  //del estado global, agarro el estado q se llama params
  const { q } = useSelector((state) => state.params);

  const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/feeds/search",
    params: { start: "0", maxResult: "18", q: q },
    headers: {
      "X-RapidAPI-Key": "d5aad89182mshb010c79e9e89f0dp1819d3jsn2e51ec147d58",
      "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.feed);
        setData(response.data.feed);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [q]);

  return { data };
}
