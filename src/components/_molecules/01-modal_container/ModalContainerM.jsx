import React from 'react';

import BackdropA from '../../_atoms/03-backdrop/BackdropA';
import ModalA from '../../_atoms/04-modal/ModalA';

const ModalContainerM = ( props ) => {
    const handleBackgroundClick = e  => {
        if (e.target === e.currentTarget) props.handleModal();
    };

    return (
        <React.Fragment>
            <BackdropA onClick={e => handleBackgroundClick(e)} />
            <ModalA />
        </React.Fragment>
    );
}

export default ModalContainerM;