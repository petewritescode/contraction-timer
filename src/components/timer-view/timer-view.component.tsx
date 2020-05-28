import React, { FunctionComponent } from 'react';
import { Averages } from '../averages/averages.component';
import { SectionHeading } from '../section-heading/section-heading.component';
import { StyledTimerView } from './timer-view.styles';
import { Timer } from '../timer/timer.component';

export const TimerView: FunctionComponent = () => (
    <StyledTimerView>
        <section>
            <Timer />
        </section>

        <section>
            <SectionHeading>Past hour</SectionHeading>
            <Averages />
        </section>
    </StyledTimerView>
);
