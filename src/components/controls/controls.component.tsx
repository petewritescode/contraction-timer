import React, { FunctionComponent } from 'react';
import { StyledControls, StyledPrimary } from './controls.styles';
import { useDispatch, useSelector } from 'react-redux';
import { PrimaryButton } from '../primary-button/primary-button.component';
import { PrimaryButtonType } from '../../models/primary-button-type.model';
import { SecondaryButton } from '../secondary-button/secondary-button.component';
import { SecondaryButtonType } from '../../models/secondary-button-type.model';
import { Status } from '../../models/status.model';
import { timerActions } from '../../store/timer/timer.slice';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const Controls: FunctionComponent = () => {
    const dispatch = useDispatch();
    const status = useSelector(timerSelectors.getStatus);
    const primaryType = status === Status.Contraction ? PrimaryButtonType.Stop : PrimaryButtonType.Start;
    const secondaryDisabled = status === Status.Stopped;

    const handlePrimaryClick = (): void => {
        dispatch(timerActions.toggleContraction());
    };

    const handleSecondaryClick = (): void => {
        dispatch(timerActions.stop());
    };

    return (
        <StyledControls>
            <StyledPrimary>
                <PrimaryButton type={primaryType} onClick={handlePrimaryClick} />
            </StyledPrimary>

            <li>
                <SecondaryButton type={SecondaryButtonType.Pause} disabled={secondaryDisabled} onClick={handleSecondaryClick} />
            </li>
        </StyledControls>
    );
};
