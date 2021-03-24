import Search from "./Search";
import Icon from "./UI/Icons";

function Header(){
  return(
    <div className="w-full pb-10 flex items-center justify-between box-sizing">
      <span className="xl:hidden block" ><Icon type="menu" color="#E86060" size="24px"/></span>
      <Search/>
      <div className="flex items-center gap-3">
        <Icon  type="user" color="#E86060" size="14px"/>
        <p>My profile</p>
      </div>
    </div>
  )
}

export default Header;
