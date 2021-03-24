import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/Context";
import AlbumService from "../services/albumServices";
import Icon from "./UI/Icons";

function Search(){
  const {setData} = useContext(DataContext)
  const [query , setQuery] = useState("");

  async function fetchData(query) {
    const dataService = new AlbumService();
    const data = await dataService.search(query);
    setData(data)
  }

  useEffect(() => {
    let timerID;
    if (query !== "") {
      timerID = setTimeout(()=>fetchData(query), 1000);
      }
    return () => clearTimeout(timerID);
    
  }, [query]);

 
  useEffect(() => {

    fetchData("dua lipa")

  }, []);

  return(
      <div className="border-gray-400 rounded-3xl w-6/12 border pt-1.5 pr-4  pb-2 pl-4 flex justigy-between items-center">
        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Buscar" className="w-full focus:outline-none"/>
        <Icon type="search" color="#BDBDBD" size="18px"></Icon>
      </div>

  )
}

export default Search;