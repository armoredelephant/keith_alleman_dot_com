import React from 'react';

/**
 * (149,213,210) - 95D5D2 teal
 * (250,174,96) - FAAE60 - orange
 * (153,229,178) - 99E5B2 - mint
 * (89,79,79) - 594F4F - gray
 * (152,164,196) - 98A4C4 - purple/blue
 */

import BackdropA from '@A/03-backdrop/BackdropA';
import ModalM from './ModalM';

const ModalContainerM = () => {
  return (
    <React.Fragment>
      <BackdropA />
      <ModalM />
      {/** container for nav within modal */}
      {/** two sections, upper section and bottom section? */}
      {/* background will be it's own? */}
    </React.Fragment>
  );
};

export default ModalContainerM;
