import React, { FunctionComponent } from 'react';
import { Averages } from '../averages/averages.component';
import { Controls } from '../controls/controls.component';
import { SectionHeading } from '../section-heading/section-heading.component';
import { StyledTimerView } from './timer-view.styles';
import { Timer } from '../timer/timer.component';

export const TimerView: FunctionComponent = () => (
    <StyledTimerView>
        <section>
            <Timer />
        </section>

        <section>
            <SectionHeading>One hour averages</SectionHeading>
            <Averages />
        </section>

        <section>
            <Controls />
        </section>
    </StyledTimerView>
);
