import React from 'react';

const ModalWrapper = ( props ) => {
    const handleBackgroundClick = e  => {
        if (e.target === e.currentTarget) props.hideModal();
    };

    return (
        <div className="backdrop" onClick={handleBackgroundClick}>
            <React.Fragment>
                {props.children};
            </React.Fragment>
        </div>
    );
}

export default ModalWrapper;