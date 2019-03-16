import React from 'react';

const ModalWrapper = ( props ) => {
    const handleBackgroundClick = e  => {
        if (e.target === e.currentTarget) props.hideModal();
    };
    
    const modalLayout = props.needsLayout 
    //  IF it needs the full layour with header and close button
    // State will need to manage if modal needs to be hidden and pass down props.
    // May not need a modal conductor for the single page.
    // Edit to show what we need in the sandwich menu. Will not need full layout.
        ? (
            <div className="modal-wrapper">
                <header>
                        <h2>{props.title}</h2>
                        <button onClick={props.hideModal}><i className="far fa-window-close"></i></button>
                </header>
                {props.children}
                <footer>
                    <h4>{props.footer}</h4>
                </footer>
            </div>
        )
        : ( // If it only needs the backdrop
            <React.Fragment>
                {props.children};
            </React.Fragment>
        );
    
    return (
        <div className="backdrop" onClick={handleBackgroundClick}>
            {modalLayout} 
        </div>
    );
}

export default ModalWrapper;