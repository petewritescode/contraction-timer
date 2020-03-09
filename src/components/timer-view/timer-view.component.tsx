import React, { FunctionComponent } from 'react';
import { SectionHeading } from '../section-heading/section-heading.component';
import { StyledTimerView } from './timer-view.styles';

export const TimerView: FunctionComponent = () => (
    <StyledTimerView>
        <div>
            <SectionHeading>Past hour</SectionHeading>
            <div>[ CHART ]</div>
        </div>

        <div>
            <SectionHeading>Averages</SectionHeading>
            <div>[ AVERAGES ]</div>
        </div>

        <div>timer</div>
        <div>controls</div>
    </StyledTimerView>
);
