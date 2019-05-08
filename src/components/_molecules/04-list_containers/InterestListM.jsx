import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import PropTypes from 'prop-types';

import InterestListItemA from '@A/01-list_items/InterestListItemsA';

const InterestList = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 0;
  margin: 0;

  @media (max-width: 770px) {
    width: 100%;
    margin: 0;
  }
`;

const InterestListM = ({ url }) => {
  const [interests, setInterests] = useState(null);

  const fetchData = async () => {
    const result = await Axios.get(url);

    setInterests(result.data.interests);
  };

  useEffect(() => {
    fetchData();
  }, []); // <== Empty array to avoid activating on updates, and ONLY for mount.

  if (!interests) return null;
  return (
    <InterestList data-testid="interest-list">
      {interests.map((interest, index) => {
        const count = index;
        return (
          <InterestListItemA
            count={count} // prettier-ignore
            data-testid="list-item"
            interest={interest}
            key={`${interest}-${count}`}
          />
        );
      })}
    </InterestList>
  );
};

export default InterestListM;

InterestListM.propTypes = {
  url: PropTypes.string
};

InterestListM.defaultProps = {
  url: '/resources/stubs/interests.json'
};
