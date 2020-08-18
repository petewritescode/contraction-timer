import React, { FunctionComponent } from 'react';
import { Copy } from '../copy/copy.component';
import { Modal } from '../modal/modal.component';
import { modalActions } from '../../store/modal/modal.slice';
import { timerActions } from '../../store/timer/timer.slice';
import { useDispatch } from 'react-redux';

export const ClearHistoryModal: FunctionComponent = () => {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(modalActions.close());
    };

    const handleConfirmClick = () => {
        dispatch(timerActions.clearComplete());
        closeModal();
    };

    const handleCancelClick = () => {
        closeModal();
    };

    return (
        <Modal
            heading="Clear history"
            primaryButtonText="Confirm"
            primaryButtonOnClick={handleConfirmClick}
            secondaryButtonText="Cancel"
            secondaryButtonOnClick={handleCancelClick}
        >
            <Copy>
                <p>Are you sure you want to clear your contraction history?</p>
            </Copy>
        </Modal>
    );
};
