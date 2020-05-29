import React, { FunctionComponent } from 'react';
import { StyledControls, StyledPrimary, StyledSecondary, StyledTertiary } from './controls.styles';
import { useDispatch, useSelector } from 'react-redux';
import { Control } from '../control/control.component';
import { ControlType } from '../../models/control-type.model';
import { Status } from '../../models/status.model';
import { timerActions } from '../../store/timer/timer.slice';
import { View } from '../../models/view.model';
import { viewActions } from '../../store/view/view.slice';
import * as timerSelectors from '../../store/timer/timer.selectors';
import * as viewSelectors from '../../store/view/view.selectors';

export const Controls: FunctionComponent = () => {
    const dispatch = useDispatch();
    const status = useSelector(timerSelectors.getStatus);
    const view = useSelector(viewSelectors.getView);

    const primaryType = status === Status.Contraction ? ControlType.Stop : ControlType.Start;
    const secondaryType = view === View.Timer ? ControlType.History : ControlType.Timer;
    const tertiaryType = view === View.Timer ? ControlType.Pause : ControlType.Clear;
    const tertiaryDisabled = status === Status.Stopped;

    const handlePrimaryClick = (): void => {
        dispatch(timerActions.toggleContraction());
    };

    const handleSecondaryClick = (): void => {
        dispatch(viewActions.toggle());
    };

    const handleTertiaryClick = (): void => {
        const action = view === View.Timer ? timerActions.stop() : timerActions.clearComplete();
        dispatch(action);
    };

    return (
        <StyledControls>
            <StyledPrimary>
                <Control type={primaryType} onClick={handlePrimaryClick} primary />
            </StyledPrimary>

            <StyledSecondary>
                <Control type={secondaryType} onClick={handleSecondaryClick} />
            </StyledSecondary>

            <StyledTertiary>
                <Control type={tertiaryType} disabled={tertiaryDisabled} onClick={handleTertiaryClick} />
            </StyledTertiary>
        </StyledControls>
    );
};
