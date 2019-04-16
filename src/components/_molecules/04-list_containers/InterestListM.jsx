import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// will import list item
import InterestListItemA from '../../_atoms/01-list_items/InterestListItemsA.jsx';

const InterestList = styled.ul`
    width: 100%;
    height: 100%;
    padding: 0;

    @media (max-width: 770px) {
        width: 100%;
        margin: 0 auto;
    }
`;

const InterestListM = () => {
    const [ interests, setInterests ] = useState(null);

    useEffect(() => {
        const fetchData = async () => { // async function has to be inside of the arrow function within the useEffect
            const result = await axios('/resources/stubs/interests.json')

            setInterests(result.data.interests);
        }
        fetchData();
    }, []) // <== Empty array to avoid activating on updates, and ONLY for mount.

    if (!interests) return null;
    return (
        <InterestList>
            {/** make the map function space out with a timing function somehow? */}
            {interests.map((interest, index) => (
                <InterestListItemA 
                    className={`interest-${index}`}
                    interest={interest}
                    key={index} />
            ))}
        </InterestList>
    );
}

export default InterestListM;