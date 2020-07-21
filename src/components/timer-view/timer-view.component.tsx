import React, { FunctionComponent } from 'react';
import { Averages } from '../averages/averages.component';
import { Container } from '../container/container.component';
import { Controls } from '../controls/controls.component';
import { SectionHeading } from '../section-heading/section-heading.component';
import { StyledTimerView } from './timer-view.styles';
import { Timer } from '../timer/timer.component';

export const TimerView: FunctionComponent = () => (
    <StyledTimerView>
        <section>
            <Container>
                <Timer />
            </Container>
        </section>

        <section>
            <Container>
                <SectionHeading>One hour averages</SectionHeading>
                <Averages />
            </Container>
        </section>

        <section>
            <Container>
                <Controls />
            </Container>
        </section>
    </StyledTimerView>
);
