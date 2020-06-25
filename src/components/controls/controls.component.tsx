import React, { FunctionComponent } from 'react';
import { StyledControls, StyledPrimary } from './controls.styles';
import { useDispatch, useSelector } from 'react-redux';
import { PrimaryButton } from '../primary-button/primary-button.component';
import { PrimaryButtonType } from '../../models/primary-button-type.model';
import { Status } from '../../models/status.model';
import { timerActions } from '../../store/timer/timer.slice';
import * as timerSelectors from '../../store/timer/timer.selectors';

export const Controls: FunctionComponent = () => {
    const dispatch = useDispatch();
    const status = useSelector(timerSelectors.getStatus);
    const primaryType = status === Status.Contraction ? PrimaryButtonType.Stop : PrimaryButtonType.Start;

    const handlePrimaryClick = (): void => {
        dispatch(timerActions.toggleContraction());
    };

    return (
        <StyledControls>
            <StyledPrimary>
                <PrimaryButton type={primaryType} onClick={handlePrimaryClick} />
            </StyledPrimary>

            <li>
                Secondary
            </li>
        </StyledControls>
    );
};
