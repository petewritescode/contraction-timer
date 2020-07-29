import React, { FunctionComponent, MouseEvent } from 'react';
import { StyledBackground, StyledDialog } from './modal.styles';
import { modalActions } from '../../store/modal/modal.slice';
import { useDispatch } from 'react-redux';

// Could have standard modal props like primaryButtonText, primaryButtonOnClick, etc to help keep styled centralised in the modal.
// Alternatively have reusable components like ModalPrimaryButton or whatever, but that still requires you to use it properly, keep them in
// the correct order, etc.

export const Modal: FunctionComponent = ({ children }) => {
    const dispatch = useDispatch();

    const handleBackgroundClick = () => {
        dispatch(modalActions.close());
    };

    const handleDialogClick = (event: MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <StyledBackground onClick={handleBackgroundClick}>
            <StyledDialog onClick={handleDialogClick}>
                {children}
            </StyledDialog>
        </StyledBackground>
    );
};
