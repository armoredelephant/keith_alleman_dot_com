import React from 'react';

import BackdropA from '../../../_atoms/03-backdrop/BackdropA.jsx';
import ModalM from '../00-modal/ModalM.jsx';

const ModalContainerM = ( props ) => {
    const handleBackgroundClick = e  => {
        if (e.target === e.currentTarget) props.handleModal();
    };

    return (
        <React.Fragment>
            <BackdropA {...props} onClick={e => handleBackgroundClick(e)} />
            <ModalM />
        </React.Fragment>
    );
}

export default ModalContainerM;