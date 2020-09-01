import React, { FunctionComponent } from 'react';
import { MODAL_TYPE_TO_COMPONENT_MAP } from '../../constants/modal.constants';
import { modalSelectors } from '../../store/modal/modal.selectors';
import { useSelector } from 'react-redux';

export const ModalRenderer: FunctionComponent = () => {
    const activeModal = useSelector(modalSelectors.getActive);
    const ModalComponent = MODAL_TYPE_TO_COMPONENT_MAP[activeModal];

    return ModalComponent ? <ModalComponent /> : null;
};
