import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                         <li><Link to="/categories">categories</Link></li>
                        <li><Link to="/setting">Setting</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>

            </div>
        );
    }
}

export default Menu;
