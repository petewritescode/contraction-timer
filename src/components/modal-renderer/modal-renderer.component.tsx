import { MODAL_TYPE_TO_COMPONENT_MAP } from '../../constants/modal.constants';
import { modalSelectors } from '../../store/modal/modal.selectors';
import React from 'react';
import { useSelector } from 'react-redux';

export const ModalRenderer: React.FC = () => {
  const activeModal = useSelector(modalSelectors.getActive);
  const ModalComponent = MODAL_TYPE_TO_COMPONENT_MAP[activeModal];

  return ModalComponent ? <ModalComponent /> : null;
};
