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

const AnimatedListM = props => {
  const { items } = props;
  return (
    <InterestList data-testid="interest-list">
      {items.map((interest, index) => {
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

export default AnimatedListM;

AnimatedListM.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

