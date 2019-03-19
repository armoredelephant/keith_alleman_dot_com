import React from 'react';
import { Link } from 'react-router-dom';

const HeaderListItem = (props) => {
    const page = props.name.toLowerCase();
    return (
        <li className="header-list-item">
            <Link to={`/${page}`}
                className={window.location.pathname === `/${page}` ?
                'section-link-active'
                : 'section-link'}>
            {props.name}
            </Link>
            <span>&#x2022;</span>
        </li>
    );
}

export default HeaderListItem;