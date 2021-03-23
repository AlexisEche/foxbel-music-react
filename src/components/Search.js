import Icon from "./UI/Icons";

function Search(){
  return(
      <div className="border-gray-400 rounded-3xl w-6/12 border pt-1.5 pr-4  pb-2 pl-4 flex justigy-between items-center">
        <input type="text" placeholder="Buscar" className="w-full focus:outline-none"/>
        <Icon type="search" color="#BDBDBD" size="18px"></Icon>
      </div>

  )
}

export default Search;