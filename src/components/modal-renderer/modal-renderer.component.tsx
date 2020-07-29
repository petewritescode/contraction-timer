import React, { FunctionComponent } from 'react';
import { MODAL_TYPE_TO_COMPONENT_MAP } from '../../constants/modal.constants';
import { useSelector } from 'react-redux';
import * as modalSelectors from '../../store/modal/modal.selectors';

export const ModalRenderer: FunctionComponent = () => {
    const activeModal = useSelector(modalSelectors.getActive);
    const ModalComponent = MODAL_TYPE_TO_COMPONENT_MAP[activeModal];

    return ModalComponent ? <ModalComponent /> : null;
};
