import React, { FunctionComponent } from 'react';
import { Averages } from '../averages/averages.component';
import { Chart } from '../chart/chart.component';
import { Controls } from '../controls/controls.component';
import { SectionHeading } from '../section-heading/section-heading.component';
import { Timer } from '../timer/timer.component';
import { StyledTimerView } from './timer-view.styles';

export const TimerView: FunctionComponent = () => (
    <StyledTimerView>
        <section>
            <SectionHeading>Past hour</SectionHeading>
            <Chart />
        </section>

        <section>
            <SectionHeading>Averages</SectionHeading>
            <Averages />
        </section>

        <section>
            <Timer />
        </section>

        <section>
            <Controls />
        </section>
    </StyledTimerView>
);
