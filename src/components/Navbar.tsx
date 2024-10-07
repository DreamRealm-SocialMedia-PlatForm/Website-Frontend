// CSS
import "../css/components/Navbar.css"

// Assets
import Logo from "../assets/DreamRealm_Logo.png"

function Navbar() {

    return <>
        <div className='Navbar'>
            <div className="Navbar__Logo">
                <img src={Logo} alt="" />
            </div>
        </div>
    </>
}

export default Navbar;
