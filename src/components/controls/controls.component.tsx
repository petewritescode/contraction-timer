import React, { FunctionComponent } from 'react';
import { ControlType } from '../../models/control-type.model';
import { Control } from '../control/control.component';
import { StyledControls, StyledPrimary, StyledSecondary, StyledTertiary } from './controls.styles';

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
