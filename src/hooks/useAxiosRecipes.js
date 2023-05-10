import { useState, useEffect } from "react";
import axios from "axios";

export function useAxiosRecipes(tag) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/feeds/list",
    params: { limit: "24", start: "0", tag: tag },
    headers: {
      "X-RapidAPI-Key": "d5aad89182mshb010c79e9e89f0dp1819d3jsn2e51ec147d58",
      "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
    },
  };

  console.log(tag);
  //cuando se carga la data desaparece el spinner del loading.
  useEffect(() => {
    setLoading(true);
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.feed);
        setData(response.data.feed);
      })
      .finally(() => setLoading(false))
      .catch(function (error) {
        console.error(error);
      });
  }, [tag]);

  return { data, loading };
}
