
import React from "react";
import { Link } from "react-router-dom";

function Nav({ url, external, children }) {
    if (external) {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    return (
        <Link to={url}>
            {children}
        </Link>
    );
}

export default Nav;
