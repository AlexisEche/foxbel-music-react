function PrimaryButton({children}){
  return(
    <button className="w-28	bg-red-400 h-8 rounded-2xl text-white text-sm focus:outline-none hover:bg-red-500">
      {children}
    </button>
  )
}
function SecondaryButton({children}){
  return(
    <button className="w-28	bg-none h-8 rounded-2xl text-red-400 text-sm border border-red-400 focus:outline-none ">
      {children}
    </button>
  )
}
export {PrimaryButton, SecondaryButton};