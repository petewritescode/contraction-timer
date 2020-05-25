import React, { FunctionComponent } from 'react';
import { StyledControls, StyledList, StyledSecondary } from './controls.styles';
import { useDispatch, useSelector } from 'react-redux';
import { Control } from '../control/control.component';
import { ControlType } from '../../models/control-type.model';
import { Status } from '../../models/status.model';
import { timerActions } from '../../store/timer/timer.slice';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const Controls: FunctionComponent = () => {
    const dispatch = useDispatch();
    const status = useSelector(timerSelectors.getStatus);
    const primaryType = status === Status.Contraction ? ControlType.Stop : ControlType.Start;
    const showSecondary = status !== Status.Stopped;

    const handlePrimaryClick = (): void => {
        dispatch(timerActions.toggleContraction());
    };

    const handleSecondaryClick = (): void => {
        dispatch(timerActions.stop());
    };

    return (
        <StyledControls>
            <StyledList>
                <li>
                    <Control type={primaryType} onClick={handlePrimaryClick} primary />
                </li>

                {showSecondary && (
                    <StyledSecondary>
                        <Control type={ControlType.Pause} onClick={handleSecondaryClick} />
                    </StyledSecondary>
                )}
            </StyledList>
        </StyledControls>
    );
};
