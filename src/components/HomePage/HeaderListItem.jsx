import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const HeaderListItem = (props) => {
    const windowHashLowerCase = window.location.hash.toLowerCase();
    return (
        <li className="header-list-item">
            <Link smooth to={`/#${props.name}`} 
                className={windowHashLowerCase.includes(`#${props.name}`) ?
                'section-link-active'
                : 'section-link'}>
            {props.name}
            </Link>
            <span>&#x2022;</span>
        </li>
    );
}

export default HeaderListItem;