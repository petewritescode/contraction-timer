import React, { FunctionComponent } from 'react';
import { StyledControls, StyledPrimary } from './controls.styles';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button/button.component';
import { IconType } from '../../models/icon-type.model';
import { PrimaryControl } from './primary-control/primary-control.component';
import { PrimaryControlType } from '../../models/primary-control-type.model';
import { Status } from '../../models/status.model';
import { timerActions } from '../../store/timer/timer.slice';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const Controls: FunctionComponent = () => {
    const dispatch = useDispatch();
    const status = useSelector(timerSelectors.getStatus);
    const primaryType = status === Status.Contraction ? PrimaryControlType.Stop : PrimaryControlType.Start;
    const secondaryDisabled = status === Status.Ready;

    const handlePrimaryClick = () => {
        dispatch(timerActions.toggleContraction());
    };

    const handleSecondaryClick = () => {
        dispatch(timerActions.stop());
    };

    return (
        <StyledControls>
            <StyledPrimary>
                <PrimaryControl type={primaryType} onClick={handlePrimaryClick} />
            </StyledPrimary>

            <li>
                <Button label="Pause" icon={IconType.Pause} disabled={secondaryDisabled} onClick={handleSecondaryClick} />
            </li>
        </StyledControls>
    );
};
