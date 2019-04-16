import React from 'react';
import styled from 'styled-components';
import { fadeIn } from 'react-animations';

const InterestListItem = styled.li`
    list-style: none;
    color: white;
    font-family: ${ props => props.theme.headff }
    font-size: 12px;
    letter-spacing: 1.2px;
    line-height: 1.6em;

    &.interest-0 {
        animation: ${ props => props.timing } ${ fadeIn };
    }
`;

const InterestListItemA = ( props ) => {
    return (
        <React.Fragment>
            {/** Icon here somehow? */}
            <InterestListItem>
            {props.interest}
            </InterestListItem> 
        </React.Fragment>
    );
}

export default InterestListItemA;

// const a = [one, two, three, four]

// a.forEach(() => {
//     <InterestListItemA count={}/>
// })

// const LoadListItems = ( props ) => {
//     const count = 1;
    
// }


/**
 * just have one class but have a prop determine the animation time?
 */