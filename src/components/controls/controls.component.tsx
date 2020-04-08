import React, { FunctionComponent } from 'react';
import { StyledControls, StyledPrimary, StyledSecondary, StyledTertiary } from './controls.styles';
import { Control } from '../control/control.component';
import { ControlType } from '../../models/control-type.model';

export const Controls: FunctionComponent = () => (
    <StyledControls>
        <StyledPrimary>
            <Control type={ControlType.Start} primary />
        </StyledPrimary>

        <StyledSecondary>
            <Control type={ControlType.Pause} />
        </StyledSecondary>

        <StyledTertiary>
            <Control type={ControlType.Finish} />
        </StyledTertiary>
    </StyledControls>
);
