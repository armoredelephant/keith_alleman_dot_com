import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a`
    text-decoration: none;
    font-size: ${props => props.theme.fs};
`;

const ContactLinkA = props => {
    const { destination, name } = props;
    return (
        <Link href={destination}>
        {name}
        </Link>
    );
}

export default ContactLinkA;

ContactLinkA.propTypes = {
    destination: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};