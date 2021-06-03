import { ClearHistoryModal } from '../components/clear-history-modal/clear-history-modal.component';
import { FunctionComponent } from 'react';
import { ModalType } from '../models/modal-type.model';

export const MODAL_TYPE_TO_COMPONENT_MAP: Record<ModalType, FunctionComponent> = {
  [ModalType.ClearHistory]: ClearHistoryModal,
};
