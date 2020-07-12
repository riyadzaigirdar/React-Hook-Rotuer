import React from 'react'
import {
    Link
} from "react-router-dom";

function NavigationMenu(props) {
    return (
        <ul className="mt-3 border-t">
            <li className="mt-3">
                <Link to="/"
                    onClick={props.closeMenu}
                >Home
                </Link>
            </li>
            <li className="mt-3">
                <Link
                    to="/product/1"
                    onClick={props.closeMenu}
                >
                    product
                    </Link>
            </li>

        </ul>

    )

}

export default NavigationMenu