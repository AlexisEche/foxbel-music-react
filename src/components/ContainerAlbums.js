import AlbumCard from "./AlbumCard";

function ContainerAlbums(){
  const count = [1,2,3,4,5,6,7,8,9,10]
  return(
    <>
      <p className="pt-10">Resultados</p>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2   gap-4 pb-28 ">
        {count.map((n)=>{
          return <AlbumCard/>
        })}
      </div>
      
    </>
  )
}

export default ContainerAlbums;