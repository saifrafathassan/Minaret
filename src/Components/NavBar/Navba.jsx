import { React, Component } from "react";
import './Navbar.css';
import logo from '/Assets/images/logo.png';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';


import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: "Home",
            menuOpen: false // State to handle menu visibility
        };
    }

    handleItemClick = (item) => {
        this.setState({ selectedItem: item, menuOpen: false });
    };

    toggleMenu = () => {
        this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
    };

    render() {
        const { selectedItem, menuOpen } = this.state;
        const { t } = this.props;
        return (
            <div className="Nav-Container padc">
                <div className="nav-logo">
                    <img src={logo} alt="Logo" />
                </div>


                <div className={`NavMenue ${menuOpen ? "open" : ""}`}>

                    {["Home", "About", "Services", "Portfolio", "Blog", "Contact us"].map((item) => (
                        <div
                            key={item}
                            className={`item ${selectedItem === item ? "active" : ""}`}
                            onClick={() => this.handleItemClick(item)}
                        >
                            <Link onClick={() => this.setState({ menuOpen: false })} to={`/${item}`}>{t(item)}</Link>
                        </div>
                        
                    ))}
                    <span className="lng-btn text-sm md:text-lg">
                        <LanguageSwitcher /> 
                    </span>
                </div>

                <div className="hamburger" onClick={this.toggleMenu}>
                    {/* Hamburger icon */}
                    <span className="bar"></span>
                    <span className="bar"></span>
                    
                </div>


            </div>
        );
    }
}

export default withTranslation()(Navbar)
