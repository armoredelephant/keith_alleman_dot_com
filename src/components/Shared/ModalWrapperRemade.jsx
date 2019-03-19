import React from 'react';

const ModalWrapper = ( props ) => {
    const handleBackgroundClick = e  => {
        if (e.target === e.currentTarget) props.handleModal();
    };

    const modal = props.hasRoutes ?
    (
        <div className="modal-wrapper">
            <h2>has routes</h2>
        </div>
    )
    :   <div className="modal-wrapper">
            <h2>no routes</h2>
        </div> 

    return (
        <div className="backdrop" onClick={e => handleBackgroundClick(e)}>
            {modal}
        </div>
    );
}

export default ModalWrapper;