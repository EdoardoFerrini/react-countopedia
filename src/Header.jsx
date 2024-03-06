import logo from "./images/logo512.png"

const Header = () => {
    return(
        <div className="pt-3 pl-2">
            <img src={logo} alt="logo" style={{ height: "35px", verticalAlign:"top"}}>
                
            </img>
            <span className="h2 pt-4 text-white-50">React Course - CountOpedia</span>
        </div>
    )
}

export default Header;