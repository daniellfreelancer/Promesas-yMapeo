import Landing from "./landing/Landing";
import './Navbar.css';

function Navbar   () {
    return (
      <div id="menu-principal container-fluid">
        <nav className="barra-nav navbar-light bg-light">
          <div className="container items-menu ">
            <ul>
              <a className="navbar-brand" href="#">
                Marketplace Meats
              </a>
              <li>Based Plants</li>
              <li>Red Meat</li>
              <li>White Meat</li>
              <li>Sea Meat</li>
              <Landing />
            </ul>
          </div>
        </nav>
      </div>
    );
    
}

export default Navbar;


