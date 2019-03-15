import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const HeaderListItem = (props) => {
    const windowHash = window.location.hash.toLowerCase();
    const section = props.name.toLowerCase();
    return (
        <li className="header-list-item">
            <Link smooth to={`/#${section}`} 
                className={windowHash.includes(`#${section}`) ?
                'section-link-active'
                : 'section-link'}>
            {props.name}
            </Link>
            <span>&#x2022;</span>
        </li>
    );
}

export default HeaderListItem;