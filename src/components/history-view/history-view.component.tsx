import React, { FunctionComponent } from 'react';
import { StyledClearButton, StyledHistoryView } from './history-view.styles';
import { History } from '../history/history.component';
import { SecondaryButton } from '../secondary-button/secondary-button.component';
import { SecondaryButtonType } from '../../models/secondary-button-type.model';
import { timerActions } from '../../store/timer/timer.slice';
import { useDispatch } from 'react-redux';

export const HistoryView: FunctionComponent = () => {
    const dispatch = useDispatch();

    const handleClearClick = () => {
        dispatch(timerActions.clearComplete());
    };

    return (
        <StyledHistoryView>
            <History />

            <StyledClearButton>
                <SecondaryButton type={SecondaryButtonType.Clear} onClick={handleClearClick} />
            </StyledClearButton>
        </StyledHistoryView>
    );
};
