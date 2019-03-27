import React from 'react';

import StyledBackdrop from '../Header-Styled/StyledBackdrop';
import StyledModal from '../Header-Styled/StyledModal';

const ModalWrapper = ( props ) => {
    const handleBackgroundClick = e  => {
        if (e.target === e.currentTarget) props.handleModal();
    };

    return (
        <React.Fragment>
            <StyledBackdrop onClick={e => handleBackgroundClick(e)} />
            <StyledModal />
        </React.Fragment>
    );
}

export default ModalWrapper;