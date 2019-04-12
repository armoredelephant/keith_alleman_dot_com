import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// will import list item

const InterestList = styled.ul`

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
            {/** ListItems */}
            {/** ListItems */}
            {/** ListItems */}
            {/** ListItems */}
            {/** ListItems */}
            {/** ListItems */}
        </InterestList>
    );
}

export default InterestListM;