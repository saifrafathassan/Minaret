import { React, Component } from "react";
import './Navbar.css';
import logo from '/Assets/images/logo.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedItem: "Home" };
    }

    handleItemClick = (item) => {
        this.setState({ selectedItem: item });
    };

    render() {
        const { selectedItem } = this.state;
        const screenWidth = window.screen.width;
        console.log(`Screen Width: ${screenWidth}`);
        return (
            <div className="Nav-Container padc">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                </div>

                <div className="NavMenue">
                    {["Home", "About", "Services", "Portfolio", "Blog", "Contact us"].map((item) => (
                        <div
                            key={item}
                            className={`item ${selectedItem === item ? "active" : ""}`}
                            onClick={() => this.handleItemClick(item)}
                        >
                          <Link to={"/"+item}> {item}</Link> 
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


export default Navbar;