import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-flow: row;
    overflow: hidden;
`;

const SectionContainerA = props => {
    const { children } = props;
    return (
        <Container>
            {children}
        </Container>
    );
};

export default SectionContainerA;