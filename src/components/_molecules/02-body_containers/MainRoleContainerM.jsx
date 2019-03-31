import React from 'react';
import styled from 'styled-components';

const MainRole = styled.main`
    min-height: 1000px;
    max-height: 1000px;
    width: 100%;
    overflow: hidden;
    padding-top: 70px;
    display: flex;
    flex-flow: row;
    justify-content: ${ props => props.center ? 
        'center' : 
        props.start ?
        'flex-start' :
        props.end ? 
        'flex-end' :
        props.between ?
        'space-between' :
        props.around ?
        'space-around' :
        props.even ? 
        'space-evenly' 
        : '' 
    };

    @media (max-width: 670px) {
        display: flex;
        flex-flow: column;
        height: 100%;
    }
`;

const MainRoleContainerM = ( props ) => {
    return (
        <MainRole {...props} role='main'>
        {props.children}
        </MainRole>
    );
}

export default MainRoleContainerM;